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
    "4QFXYoRvwrDQiXNF4MXGDz7UgpC2juHPsoWE1ntnpBeQsf9NEDVw4bpaVk2qVKhoKPcrhWByMguepCw4gmCiqwtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kGBJ6aNGeTgq1irPX6wL2jodb11FpG6YZXQEXtwX5o6rHvnRSL9QzDk6gvLGdduhMnjTNgcx7RzbBK1JVqg4UbD",
  "key1": "2bDaGvp5TMwVwck8KYiPfL5BBGZQRHz8igJsqtAfzHb4xxdcQqmBCfYabjmf1vFXak9tZuF5UejbK7divfF9h6XC",
  "key2": "5zHd2Ljqi7XpA42jcKoPEKLjt63zHhfzwE7UCn7Qj12mhZNWioZHEsd87UVNdQsfr3WDevNjo7dC56qC1aWY9Nuh",
  "key3": "43hmufkC1FzSLWepDsJ4oAVAZodJP2at7QodGEpgUEEQQKrwta9rx21UAzcLDvCGC7V1Y9BcaAPTSguuwfjjwain",
  "key4": "4hRdDZ3XKGuMbWwSawpCqSzV2faqdHSEEp7H4JEbuJQaemfYP7Czp8WbcGTt6gB2fWX24dMUj1zXcp9bZH6ktY8Q",
  "key5": "5iqJZjYTASp9aXCHB7EzKQDtJRR2s1BaLnhWet22139Mp2on1wr7RnURCzzDQvfLTb61EBt1kkM4xoZSELHrDP1j",
  "key6": "2MRkKwJFErZa6McDKkrSA13cb8S75StVrEWJekQ68LywYYdkWXcn9PNN7CQSHymdD1pQeNUyRbvhpzV9bk4W7qPx",
  "key7": "3yhuimUCMnsPHyTxoVEG9fbzUFSGxvQK6s8g6yAwahUSoKX4oD5wfZE8GZBpUHiPFA8PSjgDi49CNY4YA3oDnSvi",
  "key8": "CxtVHYzJrBGLWeFeo63HcLuohbUR6hJLX8BqhtXQQCLdnarMENZeATAq677Wqfkf8d3dDnaRU7UirZTtMNnTSDW",
  "key9": "2kyFaYAeTspTM4Fg34CQgefqPFhMoDmX787vTg7vhH1tZnDnipS6UaNXrN1o2iBCBptDvUf7JGE6raRxr51KBLQh",
  "key10": "4woTzkRV4g5ewQqjFFx9UVroNPc5tQBhdFvcEKYxtDFqz6aRb2sioeit7tchnzvmDCPVCxxvb1A4bgiQrFUoAYQE",
  "key11": "5u8syRKinXSxxzq6F18c2JgvfRWQBP1o8yak3PFfedDZNocqSYBXA9Up1i9rR4xHqHKeNqkq48yn3xHUQfuopP3z",
  "key12": "5BnajDJPZpfKPV7QSwN8BbfVCepfKoNmYteCqRLv4mMBC2hmP2wzfQdbwRcrYi151XoTevCGUBaMLmKE5sHWs8rK",
  "key13": "4AtjzLpmi7Z1DdxHDVMqsSnUCJ4g2eVoXhwX2W1dEFZEXitDp6Yn7HsHUH3BqzpVmFgSvDSeva76SZttBSvXJqqH",
  "key14": "3cD1uC2CdCLhtgsVwnjMVz66wVmVUairdeZ67mATUrzm6PhAoPnTBeondN4ex1KfogT5gJHNTgLWDU9REfTvGren",
  "key15": "2makBLnPW8jg6MMWfuCUVd5WDdCT6snSdpkmx3iGqxk7csVztVZxTb62pCh1KonHF3TDt3wQ4ckeeatKMeAf3kpc",
  "key16": "2m5EFTJ8Rd5XLFcU9nm8iAUWR7DpW5pCKpbEfBnKZeNREp2v6oUJGzqnwhJJtBDFoGCk1tAvLtBsx7d1EHknhBfR",
  "key17": "5r3Q4xfn16UbzHSkRcM5XWp44w6febfxN3ndq9uSRyaos8v5Xpx4UuHMipxoNu1cb2DcYWJ9JT2nBLJekgZHzqKV",
  "key18": "m6QABDwFVHiiHLEzxjPVYA7pzcFTC8UcZmwNvV93PELBs7R7JQLLfsjFtaNhfKuWKg5Cim26jYfGQaZGHLKfeww",
  "key19": "5QwpNhXRH1SYrgTn8xYrEW5YjSEhJHSuWjr1aCQyQLBYHUS68qKsbnrLHhM1UkTaMSxWRUSDYAQynrypDpci8qvr",
  "key20": "1BGNneX69j3eHfdxjH3KFKNo13x3towsuittgWGqsXtcUskiC97FFG9SZcqSJUJMWPnXN3SLCWuqUvYuzuoP8DP",
  "key21": "49FdeCYXdRakuPGHnPBW5SU1y5eT9sWWRuYNBBEvutZ6PDGkZuKaG3Fi81E6DMKc7hzLpx9YenXgGwKCbyfKZY1o",
  "key22": "4f97TqogX587CLwuaFJmsj6zAw29JCZMsAu4mBvrjhYwRyLAxG6rpA4rH7quRChAZ57W2EMtLivv5S8KCQSLgPPK",
  "key23": "2B92sf5K9gtQDPYogF7uH3Q9vgKu8847kUZoqbWVjgT9Euso93baDZ4XCYXrXpAAynKzdrjHaJuZtWGprcsLc6VB",
  "key24": "3fsUkrhsZc6DHk9K4vHVSg66rUkhHXNbPTV6C4A1SDjJL2VQBuCCEgyNq8EQqQnizVHh19z9HVj8LRYYTZ1UGt1i",
  "key25": "4VtKmHsWx38Uea9dL4sqCLXrCvPJX9ScHE8kL2fV2YGUsg23AGtSB9SSFu3kAzvQTsRGMM2WRCk1PWXZJpghGR59",
  "key26": "5YuCXdzMpnQYNgtBemwTGag97rvDz7LoB8C84i34iAbw9muuJrdQfzJhQrR3vZAgUJo6LHUWrnggz81pwy847Lsq",
  "key27": "2EbFbghR6cdSkyHRUMLjsYUnbtgCKd2MstEQyhPx7esLUrUzsFEWmHSa35Hvr8bH5dnvkK3vB4vpS1dprzzMxrgu",
  "key28": "PJwjD2PZa6KX2TbVZ2asacHJKHK3um8s24PuKHsZic81q847xVCLAanNKseK1nVUi8Xexf28HN22VJKMBMUoqnc",
  "key29": "2Axbo4TKYvZr1xhs1VsjR2QEC9gic3Y3je5Qyrq1Z5NTmBbW1pqvcq5GGtvw2g9CArNYj17GatbYUK8cXcXg5sVa",
  "key30": "5JCwa4ndNyHhoF6MrBBQQFjv9zauM3sytSHSvtWnjxBAu9n3vySCzurv7XxYq4cqWDgRWNwCbkUuoGuc4VFeRRqF",
  "key31": "5CT1nE9hm2CCwLDcKmXcGxe3Y1YBtocm2kVPViTgDBDUM4RQqJobdxqVep7Hk5BdSAZNgkbxxzpNnj6Vy2VXyMM9",
  "key32": "n26ns3URhkiFm6kTMRxMkvXT5r1bkMxEUVUoArpx4PKUuGiSaMt8FcMw97vT2RKZvjXTTeYLd9TL9CSmmifogW5",
  "key33": "5fDgbxWASVGAc1AasJWZiCtQ51TVE2k9ZD1hAsxG3hNC6qEA3CKRkEVhP1XFi2vrsCe1MynBbSbHmoy2JKzD6ZL9"
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
