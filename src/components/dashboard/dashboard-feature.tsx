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
    "5iR1ekL3MpqZcE9TisdhyKhzLmBH7wCATTzWNHHWDLRtuUj2sLBUh2d6M5MpvgZtos2d5Tsgbmp8tuRLmNQHW2gP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EtWZwSHKyrTPCKDXwYocqodqQgdyPVJzARobMFpE1oqT7AmhjjF3Ao7yit8pJv4MXsqTWriNdsBH1GsCcFdK2d6",
  "key1": "3pvT66qrP18TP9qRetF1VuyhDe9DseF33UfrQSqvYPKPHLDyUpLbVtVbBjvM3dB55vuXmg8XsjrfvsFA4n1YP4TV",
  "key2": "43EnDcT5s9AGej5gm4s25Vxfu86bKfPB1McN5mLpAaxCotvchLoTjifQnUHh1RbKhewV9xVWthZkAupiT9xTT1ZP",
  "key3": "38bSypePaWB34a1bL324zxpWxrZ7gcMABsJGxPsMdEhgZP4k9UCBFeNAd7eRrtgbDxvWLVZLdsk8LhRyCVh1tYDa",
  "key4": "4ZxAogmAB9JYWz6ZCR1ScRArkjCmZd7JGfw3MJNamhK7kLRGpxyKVECEW8toyETM8CtbidYdzVi4D7WX7CsxyDuZ",
  "key5": "x3CzjKYTZhzznomw6Q49iFBggkrw7ZXFLhw9hy8MuLon6XivH5zCDKLxeW5oSMDzaCpqLHs9hqMzH56sYes73kc",
  "key6": "5bTGaLXxBmxkXnvcAhEpfomgKEag8ckwtS2KMKVsAKT68Mx23wNdFZE6JzUNyi4Mg7HT9yEv3fzvGs84y1Uw4Tvp",
  "key7": "2xEd1gK5gzD195D6wAfBapEDYzP2dw4Y92LJCoMeF6ztQv23f1X2XDWLFx1zL4A2ZgipoEdLWoqjFoFpvWVd7Tjk",
  "key8": "2kqfgVTn9BtGdKBYBJTVagY7fsBLUHLY2BrneiTWsaPFT7EumdEmm3VSwBznkYX45ejWgAubrUH5AYvAr8TMRLjo",
  "key9": "5dw68uJPYHtHjt62k2Nx2X6mhHNkQh5329856iYYHKpDgr1KAVBdgR6zPxczN1VsA2e2y9HGP2ErH57awFfzVtmT",
  "key10": "64g8suKQSYCWNpr2wP4tHzhZYg4uMPVTVDxhk4J4PEcCgWrc7FWsrVzWW9ctDJ1i9GbnkN9M3H36Qm2RCU4kLpvC",
  "key11": "JXpmq8NRtcanDspmV8yd97s9tbRxB3L92XFa13nVw5NrvnyduKXL6mgDkuHwnvtu8F63Ar1DqPeoeFHrCGtSqTG",
  "key12": "4co1RVVvCj1uP8caXwfYg56NQZC6jxSxJ6LhCp8sVVx86VZbPwwRPPs5DxRpos8U6v5YAyRK579Mh3QBdAuMCUgz",
  "key13": "4TfLrQjzx9iZWsz9JA2hUDAgAZpMUoEyLA3z4Aey9R3zCFc3S16Rfh6PhR2F7JRdoPJMLQN3E5YoAk2MSijRSYVo",
  "key14": "5DTkmkpHD876BvDXog8ueZDAFeyfCdVXD7wYbGF1jWmEVYc2xPS4AdcWVmKZmz8ofySf9vUBXmAzD7XmHYhhn3eU",
  "key15": "2a4AEXAUo1ZF1z9BY8nh13D12ptmUiaVrgu3RZDhNcvYNn9XxxHTuVYvdP3Qsf8WCahddsyHTYekCiFRPy21PXk5",
  "key16": "564XTQD71Y7xRS2Viqr8N7PzJTW5SUHogpjRomsakrqQTmcpaZbExundR5GhmpQ2XhND5hJeKpQcZyN8vvWiTpoe",
  "key17": "cYJGF1hp5RhbnaWBVDxQWkgywmMB5hwp3scAbyNfr4frXC8DUzTvavRbGSWcJbtoxDz138axpQaPaXErTa4PWTJ",
  "key18": "UYP7X7NbQavwHtvowxoHHo9RCMP69c2cbb4ymZH43JhehTtgkpxXNiZTEDpdGQfMRKS2M9kqbNGLYb27vAsTaWa",
  "key19": "56r2Y2CQY2GaSLu1agnCC9etdDHJEedr7v9krtWuSuGsfxWqXjVtsj42nb6RgZryUhWhJXNtthmrbscxGDz7uc9",
  "key20": "2Fs4kzSjVaq2i2Pv16ZekaZGZ8povi5mz7S21fRP1H2ormnq9qzTvwcDH89omit91KkoLQ2gQkQf5nxy2XfAEm2h",
  "key21": "5FRQjdvt36mcx4jvqW2vbCzik4ZYu9EBGJw1eTU5c4ToYsHdit4Rxsre5GCj5Mbg52xbfnEWSeYbyzKT88WV9sFP",
  "key22": "38BKYwGHQYqAmb78gcWmBmi4EE6M1yQezCSV7KmSsN2qUjgygzYRUfRt23mxYfFkSQanWZNz55haY9MzWrbhMuKV",
  "key23": "2bjiu2djuBNJtKKGUzGRSciZ3mjvUHyAdX3PQBRDLTxGsSpb3TGcPy1LyNq1HxJGVv6LuARV3sQPvsk5en4tPYtf",
  "key24": "4khsmCmW4zgNdKDNR4ADd6ut9Xj2byk6FLP47TKfTgAvL9yrRLYKwF32AAqAwXFaXRQvJfaMMbyvuB5eJpYda7B9",
  "key25": "5k35yj8kZprP4f6YY67ffVdLdyHJ1CJiWEzc3hJxP7aHzWqebKFuHcHZ1LTEcmswmfdw3wKkvCqFrC5zmeJgXU5Q",
  "key26": "Mb1jqSQ4Vhd7JwwEPdVk8t8ts1TP81cJMvzJGQm9TADG4VrMo8bGtsuCiaUrXcpkKWSdRf8WXXGMsMveFjGKoDv"
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
