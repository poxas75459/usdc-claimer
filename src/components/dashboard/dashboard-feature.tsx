/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4eYhPS5rJPoxFuBMXgEeGvTi51PxbcLSgpBhxP7C2oQyoK5muKD2MuZZgETW28NjTX9mAaVEsGCmzuccJhTEtZS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LmPMMtvwjvYzfcsVBDyQuhMkdg3xjK2AFs7F6x7xt3Q1jEuatARzED2yiGgWxrv71Q38Ju2MkBA5mEgbL5Ymy8V",
  "key1": "Gdk1Ugm8VffPkJvaeMC2cFR5LiEnuQKBFmu58tZNyJhMKQeF8PVdBFSS8AqA1pTN2KdFAe4G3o2NnZX8hvpHZgz",
  "key2": "5MhCDfoxfHou6ZR2xfpP9sEgG3m8DHvguBEU8tAnU3qS89WMky9KPYdGnoUFqtdceGWEBuGBh3LQaofb4uUeVKxd",
  "key3": "QedhFX5RLnDktyp6uUFMLosQ7TJ3DJxZkicdQ9Ftn3zzxr2hW83bfwnxGAVpLH6djdy4iHXE88bYsCfP3tTBoUD",
  "key4": "55tdGxcuomYoaX1AteAXohbsTDTQNtHg4njAzFzwTLHJ6fRDaaDtdikfNrNX5FCBZMHCFYMCRjnwb7nUkF5JPMVU",
  "key5": "51Pt6RmSTenPvaspKbCbYsBX2cAiq3HEvppr8pq1q3Zy5Vrr8vSmXqafbUcV8WSFyctLUmmBhpXB55zCnQHizrpS",
  "key6": "2dhJovaVg5ynERPnuTAT9JkYSEmrVLkjnn7u7UXvndGon4FJftve6aLjFigi4XkN9NgkHtexieFozgGcNfNKdTf1",
  "key7": "5PmSjSvW8PNwrbggQjgvBYSZkEgyvwzo392k4ccfj8ER4J8goF57FEd43oavnsEb4Zgum6JTtQA25rzMG7FBpxe7",
  "key8": "2M4WMMNeAcVnsBuHovCPHVRZKLySxo3vPrUagj1ndCLwGpwPgxqm7SpHv875Ax9xuJboMQj776TvwEq8DM2JzzPK",
  "key9": "57PwUmVArVMmccScjCEi64f4bAaxfT4RJWQZG2S9kFRVAKS2QUCgbzUMUPxQDzeWwwdxBrkXZsuSLEpqTRsxH15R",
  "key10": "L2Fvd1YHnn3XkMXH8GVbWUrt3e5XVkV2kUmhtDn2kUZc1bZZb6xbfjtiHYFV2erJzTWBP1JP7ZLsA3a3UZEjg33",
  "key11": "d9M7xCXtzzrBGEowncKhECB9YsDPx1M4dBNQQQReqHwyzhC35rduA7RXS3q9fT1SXnNtG6kJa6htVAsgTF7Ee4X",
  "key12": "F8htQxihkMftTWP27S6oAkU7mQfxnPyS5BfEkZCMJobwMwEJXbQWPp472rRZYdhMoDgxC767rYtnBmEMo2ABxrH",
  "key13": "3sPgRPRjyj7vbM4x9n4NkWUXjty6XdzWjNjALgXGjZqEFVjZ15m8jNKGDcK9NNaLFrimDhWBdCMozAQmadH6DxQR",
  "key14": "2H54Ep8EpkVm5P35sb7CDVa5AXaNbfNeXd26ea9x234xj7FM5jyQJaQBi3WdJNWzwT1hvEL9ckVoi6ZCMbGd3GCv",
  "key15": "4r43MTFa4ZbLqUmmEzFwRJKBVLgZ2FftFygu9nKiF8vJoDxRvwwNa9rTyprJdfnn9EMGqPxpn1j748dboEPj5RsF",
  "key16": "3M5pJknKuqSLQH7JiqsW6ZwDyvC7rhidTDQ69U9JhKC3iujvpGZJbBCvA4u2FGUuMEb1LoA1NnCriixr57sqWyZP",
  "key17": "4zKhPUQVQ8k7ngE5MfsqjW2tRC8cRfdeqxnkc3uGHf6MNBkdM9PmtgqJzsmBzbNAzHTnxrj1uDZ1WUMbnebiepUK",
  "key18": "4XqTyK678HCS9PgCsMCfu1XGKzB9eNSE2GAkGYmf9A3rN4QVHjFtZQuo3pKHM8fotWzGo66UW9DfRhCZFokftjXW",
  "key19": "yem9JsGMpFHzjpByctaAg4RFPkQz4vusUmpc6orX3mJrZVKfANaweFucqjsP5hxzb4vuMZGEjC7dChevqopZ4JJ",
  "key20": "4V8V8aVkZE95godmRjqhw9v2zVJViaxrpWGymLmiRYa5RVv2R7wUHiMcNHAqxWU7rdDNgUtmfbksskDt7wFeJLiu",
  "key21": "47ZsTiKC4G2C1e8Q4azT7MyV5XoaEknUXWKSw9kh7haKiiuvnb3g95U9ixCXRRGvVhGWHxr71NxXu6NAQxknVyfH",
  "key22": "4nxPNPHvMNVpKCXxUB8yjZqi7V2aXAoLthvRGWJqGpjor82DQPyYVBq6u8ghGibsvrBX4e4TRwN31eJBKARYrSD1",
  "key23": "2Z8W7mLqvuadSFHEEnspxsPEqZVBq6pboTwZrNrMdRxqCFPAYEMVdvHfXf3bLSKKdhgd4TvxPXfUFTaspwkdd5AK",
  "key24": "3PiJM4ZCGmdDUvYBHBXzXuatAQ4f3zn3AWcG2Y1Z9itjWjYb7G9DLEyXmYqBRFsqRkz5rU39ztM9wufQ27L5JBsh",
  "key25": "59TzP4Q9u5rJWMjcxYrs3hYXm5ba6q8wAedKsgHjj3vsz2srtCYKxT6Rw3UpNnVN1j4h5vQ18FtYU2WKjiWVobxe"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
