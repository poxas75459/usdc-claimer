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
    "3xtHAQ2Y7yokxZQsujuc4YPUia32t2JTFVYMUw6qXbHi2uLztsWipLnhmKsaah2TYS1a6okKDWGhMuy8tJ6ZMZPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rALTS5H9LEKkqEKyp7sgs6rJG1M17ngF4RSAoj58re6oParYojd24KJVKkuzRWi92fFC5eVpYJksc8dddKXeCga",
  "key1": "5K5WyymBRFxi1qbzPfLYkeSJk2y4z4mfgzM6BpE4sqBoEA32AeumCYqc3NnjKe4eRGG2moqmUv7JqwFpxxx15HA5",
  "key2": "4R2kQbL8hbBMnpCVLTecgo5Zv626xtYN5TTUQACb6tpKHvoQT6e7nxwABgZoBjJ7xtAeaHTuHzPPnR2kyZHMM5TJ",
  "key3": "5XfVMuFBdDWhLqSeaEVELbRGqzRmftLLmTjiTi3Z2zmRdmZSbWSktDdd9ENspwQu8iAgA8cPECNBj5itEnMdDuX2",
  "key4": "3LvNfrhioGd4E8m7Vp5x2XWqXAn8FfYrxUEX5xqGtEcsvhDsVYr76vLjkjh1TyLMZy9HBu243pP4z8VjsmTYSmU",
  "key5": "3v9cSaEYfLdvs3uaopCFmemzFCzAXEAQTeuGcKGf28WMc9ca3kMFiZTxPzRjnpgr7GfE8pdUkjytgePGM64L6UDz",
  "key6": "4npbE7bAiGJBJViy4pCFboHsG64MFYs3HU61VnCrqSa9VceR3uMAEUiPRyPeb2CmcXEcLbggajzsBTorxZv7djF",
  "key7": "C9kvoxkXz1CB9TYxFC2LP8bexw3t7snbx627eLjVMu3HeuYT9FXkDXvaTqaoGCzHffHk67LEF8xM14n71JVH6qf",
  "key8": "JqRkxpvT6WePTnX433dyQbHKU3aTDUpdoLgEHHJ7oBBUUur7drCZY1775jU4CzLPENxu4eRfMoQGzrSbd29Umes",
  "key9": "AHuU3JNknXruNx8ZoirAhbRvSBSojoUbV3Y61CEpv5x1eR3MwD4syKh2BBZwPqjdw6QNvMfNFQkg8y3q5q2pvh6",
  "key10": "2eWokhyWz9YYSN7SXZQgM9zY5q2kKBACCsGqANvqLQdCx1aeviMjU1KurMqDnzr3ZmgQj53uNBsjR2GEc7tjhgGt",
  "key11": "2XajdccEbkFgxHnCooQQvrSdsHHfBPSXZk8Sp3fA1FdsFykKUxZfhnsTCAPe9uUXCZez9rQN7xei1aq5a443uDrw",
  "key12": "4N6fgPE1WFoKyg4BfwqtWt6spBWcvcnu8k32KFEhL9iSnndNYiFEmM9jR8EJ2oA8pZYwk35RRFp713hp1vWNQv2M",
  "key13": "4p8EByAPcSdPVQYYcTmEfpUJJG773sdpmKU1BksUgPPDkYuB8UkbFEaz1x3N9nJnbkB15LxJ9rGLmzEaWGHn8hdt",
  "key14": "2MdzkgwsBDttoN5tTERLTRbnsygzuuLrAs2ZoXkJY1isuHzaBccQLiCtCR8tWFvhYtgZ1hANXb3ub8r8m9heJR6Z",
  "key15": "393mVyPEW31Q9dzQwG1XZGFk8QasDkfzoTVk28etZFruuSycz3sDfnaufBtMDZ92DSBkrRHFK22NtZXbuEQL3Tq",
  "key16": "y5EE9N3Sz9Da3itnFnmyn2U6H3SkZRBA2A8rgEEmAhgZF9jnaxqCLKPw3ii5JgMyi1Ut98qGSiAWMDhuyzySChj",
  "key17": "29t5JfRiNmXSiF984Hd5Mj2h2BEz2ctpUc6UaPoqcBUVBWvLvYUCeGvfEBofvQjwAhjzpzyvkzsTCRRvrRJqhNRc",
  "key18": "42Bx7xeaJEf7uVkNqUR4AMV1pgzKaxaT8fEM1EStQfj7vhenCXQTcnsx4d2aXg1RkdK9R8BfWX7hREterKuTQhYd",
  "key19": "oaY1ZMyUYUNyGuAQP5ddcJ2KA3LTCRxsKyxDJaKSLdEmAHRiQEbue97psM7jqVnkaMK2j1VRBCQJYX5SrC8554g",
  "key20": "n9hH7Mqa8EMqkdozhun6WLcSkZWsBv8yFzgwehQ3dHzh2TZoBgsH9wysgSstwBmhbqFW2ZVSbNNiLnivotCi6dW",
  "key21": "49rpmcB1ScuukoVCrshT1uuGLReou4LvchKJnQfh6BfyNfikYp1Wf8gHgrmWbSUdHsXQCz9DvZBAjmpAkt69m3aE",
  "key22": "4JFyKFmhcf8kWfQ7Ldrm54qm5N2nCwuJjEgoHiRv878SamTn2J5Vxm7MHYmxHx7uqBVjbNzzMsB26aTUjLmhywm5",
  "key23": "28bsT5xFLUXHJRsuWo1oXZC7D5YJ8aYHzWQxxDw2r3Nbf5wRsUBBhRermFWNuEZWhoDeJduAYZGgqei7RqpsL2tF",
  "key24": "38PUkBrjSjitom77X2XvddvCSMp8cdWceRdCa5HfsZBen3aY1WsaPAPSLVLUnFyz99NNCy51qVZ4khnCCPGDeVGi",
  "key25": "4XY4ZgYMBT6BnLCVzjzdg1zo9NpqQsNMTBWpWtTzgVaMqpj8aSjHRoAiNyU127VQsNaohJCrxft2jgiUdaWEyVHv",
  "key26": "3TFuzSuBvQYFmZY6dXLXLa5pLchUUqx69kgMVJfzJUgZCoy8cKUrdTeCDs6EfnU32ZhSFTnmCH5gQq9ZRVttrYT2",
  "key27": "4QG47r7rbyaQgddQBmy6dXMhCAKiAUqrZmmA1z6W8LaB7HKoTaNysqmWx7Lw7874EQvEYAum6YmnC7MMr18yjAWn",
  "key28": "CwHoRuT17s3J7n5CBhZnfwwcmPpjQ4PHNR1abReipMebcSSgsTMUUCTpRtP9yYvVyyeNB1DSrAkv5dVoSxZPcDz",
  "key29": "3HmvLDqg6dLhBeCBKtRAy5qYAQZUZoG9Y6gPGiYsoZGRu69vPQCAY85zszTB3gvqfoMwMYXHhuf6ryMKfKdfeRkj",
  "key30": "2fpoZnNCnJ5EX6B1MRJWfs6J9fa2ftT3UGt35asLqrRVEgtJ9rcgpM6ztQzw71fDz6zkXcGJwnasJrv2y5pKVgSV",
  "key31": "4nxPUeSNjs4C5CCVe7eiJr8sXYGtUc3PycRBqrcSDM971Jx9mUuysuMG4JfTaMrqUTzr6Pa9JUSV9EGKzf93tZWD",
  "key32": "4oeLQdfpEGZTNJ8eUdEoBphcc2fUcmkR4n8HaPx2LFNw6zo55wYQH1ykSFJuhfyDwNwjEMAbHRsrXDj6QWHV9QDg",
  "key33": "Tw9WTX4qVpHCnHfwaMSyVo55iAcUFzeEYVhX3SnZF55QWQrn8gJj2J5GRFrwkKVN9SD3YXjeKR8yHLAwqnUpZny",
  "key34": "2PQhoSpxMm4TRGiKHvkdRtsRR2UJ4w7KkvZKiKnNVRCn2aqrxND7re6w7uboJBqAiqFxqwg14N89C96awLVV9u6g",
  "key35": "2brL9gaSFrikiQMSXjMXLfYueVj87aTCNnamJfizrdFxRDqW6HX41WWXnGKtAEkN5vpR2S7q2DvRsC5MuyjkqM1c",
  "key36": "3LHqG3apkfGeEtVZ4cHAUn7GbVHat5hHnKEeop2gzvcWznFMHctGCCYGVUVGrjZv49d34k6W48WPD1wqy42GNeDc"
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
