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
    "62nv9zDqQJxyGBYZoGuknDAcc6iDRoB9cNDZnhj3hYU9iG5nkwT49kNftAcLidko1LRpjRQKkh6NgUGnP8ijKcet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HZAGAAJSX5jU9RGZA15p8r46octvDdCQ3RSTseRwSLAtWyDqn4XgAHLDHvS8y25g7KkzpuLMreKkiX5SZknHXes",
  "key1": "4yEzXZ3yFHfHWCGbbrKgrBybdVpL1mDU59ALdMembmpgzhdw8NH2SnNB1Zn6eTbQ3vKgp8xuok7JmHmpyPcFcBsw",
  "key2": "4ZwrVCoD6u3SFEqWoA7JyCSstgVdDLDBK1tBmTeJxLt9nM7aZMdLgFd4P4xuhE4uSkxXBgZW8Hbqebyu9x4GYsk2",
  "key3": "32cztbMC9MGQYBAeg4jDBbNFaT3Xtoa3XXvPAZYxsyztFbancLXT1RPRZiNoneBcynJxswQSaVGjkCmxoMt5RTPy",
  "key4": "4LDVim78ZX7ViMtX7RGLY62omDMYsKZKeyxhUVFHv4HyiEF64E6do41BZDMvE6BSGVTbxgRGNkJovPaZmUeTuwQK",
  "key5": "5TUTrs1kLxnigq63aVwRmSWsabyJVPL4tvHiK9dMm53xuLCnJCch4d6zkfWk5NeirjiD6uYqUTTxgfg2G6UsFBc6",
  "key6": "5p57y3t7XzdxDC2jjg1DWhGZ1gcjmZorQCo1xgoEBupBECyH2iXawaE8nddvLQLzXyvPWPsyVdSGBeePHSYXeKPT",
  "key7": "49JCxqViX3UXyH1kBb9WZDJugCKGmNYXPnPKCT4LsemwAneQ9C7zhCzZraQgjr1TnbbVpM5xgVoWwF9RMu3Ypa4w",
  "key8": "66ssrjHSCUKbeMTdv3xcwDjYzy3kuCb5ArDegv9RCEQBzF2mXNmcRCwSZNWa2rxM236jwuLkaZVfbHes2MWHtcim",
  "key9": "2VvixAD5Z3Eq1YRUUDgazq43VhN1t3FXyyCEGaaAskoXmcHu7GqLpT3tUaMfYqMJKg3coebnKAy1BjjSMqLdpxHq",
  "key10": "4Eo2CBALJciDqdihuowuGBwenKVfyUoYo7rkx7GVDJ7wzWqSqKXyGwzFSkwBATLuHbg1hwvxkKZujBBuNVA3erFz",
  "key11": "5biYcEW1yxSBZKXsrxm8V4WpERkQ28eZaADDjTaEYnxUeBTicrACUoSoXfkCnHjCx3sDN2nqJKq2gweeMNfv25ub",
  "key12": "4rVWe1WJ1yhu6XzrX7Tr8QXZLThwH53P75mqsKpH67cqndvHptxSJU6hhag5RU5gr82eqHD4WMdSfH2yYhpSbDA3",
  "key13": "2B1mMeLfUr2dcG5sLQKzt836vUoRx4TuGQwPG5gQ5enddAcmwXVXgPgFqhPcdRvyacbnoqBRDhG4b4yGTyaqdL5D",
  "key14": "xsfwtL2pK2Zyit96Ezd4ixzdH2wkAQLe8S9nuGaxvwcC9CWQ5SYVXReh4z9BegiSwWa45xpTXvUUbPEVfDw79X5",
  "key15": "5usFZeZ2z1jQGJ9NKWmiHoheJbxCdC4dVWd5aMKeuYdZed6uHhv9sqzB9GihmN44C1Nc4AWdWtHpdy19n5ni2HyQ",
  "key16": "3Kv64snVBrddpzo4dq8CHqKhxWxVFwHGPHYV4KQEGdXE22tzTo47JUbdszU7TK2zkvjHTthR9111G8ahbjMbM5Mx",
  "key17": "2NzjDg1Wp212tpigxbc2Rh9zCzWxuann5ge7PbiqgsfBwhZcidGVMF7F5P3z7BNN2iTdofk6Q3KwmdAVPizWtzjv",
  "key18": "3R3gSCTsNPPquY1xXF27bzeHhj5tJZAgPCrtRcDbpCS5yrqihVDDnqdPcRgkCRqZyPttpxmANWNwjWcTiFqWKRxW",
  "key19": "65mEJp3yCSo1NKUAayFX3ELKx285N9S4oPeqq82DW2akH4yizVLxHiq7hSVdkXco1cbzvcUwm9MTbtfqW3B4xAPp",
  "key20": "4ouGgbgXdVYh9Gq9qs5K3aSQwa8xN4jd6Z3MZ7hkMkvRiV9veRtvCarzYqpVY8jkqLmRjkUSK61QWDJqyeXZxikG",
  "key21": "2zMgPnXBDrrZTWYJ6ZmFTaEWYU155RoTgyn6bU3DnPGavfkgU11yRqXwsfHVZxh9UP2ancDmruxRUM9LkCX2xgSU",
  "key22": "4HDcy6zLp4R2wHgZH8T7NTuro2mdNVbJrr3uATcfxj2ZCwzk5121Y7VKkfcoejWSo3KrQwr3xqZoEyWDHqoLyCxM",
  "key23": "38h8nG4yQRGRrrRZPkEukaWDA5utu1vz8vxMFRBQFSJwQ6eTfbrP12K1ey2E36opp5awo4hvrn3GtbVatM4EUx9u",
  "key24": "fJdVkoqgirNnASWe8siWkbxNDmKyCS5sY5PhzbtFvoAnHaYv7asWQPNSE9jPMvyrdZfpsZuqUsiAyLVXjKjH38A"
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
