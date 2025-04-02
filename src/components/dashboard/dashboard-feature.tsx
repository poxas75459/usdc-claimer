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
    "3qmG7UfiC6zKKtZk2kso1PjFu3AngcpQvQ5mvXYRgbbSGdvBuRfJ9MMykAsd4KWBGJd5iwsY34Pch6x7anbgx1eP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67gcZzHnGZxTuuimgs4XaAAPbdT1NyodJPtpPA7mz68rgPwUT7mXczhQGv9EscLeABpKL1uipsyBYECHBiwiuEFD",
  "key1": "2dtV2ntfiBCQsBMETTrQ5yPRwCQsdSc1exZAMCXS4TxUcgTjMWCkUYZqmrvUCXXS831s152VLUETLww6hDshToVz",
  "key2": "5HnGWd3QsAXxMKSaEqYwoZV8uawCnzJPXN4iTWoGRaqdacWCWAjsXPa49XCTDvFLBrWVu3aGKyP7Mr7nyEPrkVqB",
  "key3": "5RcpBC1feZSmbE83gzoj6DXGkwCPXhpeFn7t696uY66zda6wKUeoovmT6VLmZz3By1aoNhGrYyksQzh2GKWwjFcb",
  "key4": "vWzb5ZUqYt6BnvuyNPCbgoAiwGo9Z5fUgh5USnpd7u1PUwawYTXAZ2NdkPtXswMWCW5Jaggy5dfnqUZuUGjQfr2",
  "key5": "3DsGp1VkaxXPByEGyAVxyHoAGPtgPKQusPz6c5FdmkrKu3q7HipvPAbxVYWEnAxiGWKN1EitbeCWpe4UzDbPDrzo",
  "key6": "4hxvhA5ebPdotu7wo5VYMdfNYrNzb5TyPZYaF4NvReVsLaoqjssKEkWSrwhmTMe1xFDhBAH86oxdX3rpFttWw9YF",
  "key7": "YiKqJ4Zy7qp1U9BmerMZpJTMhACXSQWiAnZ8XqK5eTp4Cn3nUsojyWGZ5Rcsrg5okqzxMkPJHA7yT6TnP1D6PMs",
  "key8": "5QewgKx2j5pZtyWN5kpNmPK1e2w6bEDfC46MLxxz5PNd4GvWVSvYEwXeTSyFF8dUqJ1LfWjczJ7jot1GUfzDWFLU",
  "key9": "24pryvu7osPE8ZyUEDtHiK4EoDhnYVV9ETGGx7fe8YGn4WJBc2ENXp6e7LwYh38RseraHiAU2U1QWKxnYaHu1cRr",
  "key10": "4z7hEkQgNtMsg8FkiCHjDRoJeozPJqB6ZJGRX6ZgNGoCEChjMotkVEksRXwBFmAMz3jj3tuyU2HYHxF2WdmgzfcQ",
  "key11": "22JNkubPV5RRiV8MztDMaqS9jngaHXy2ZDgHv9KWHFgHRwUHgr8wvdL96YSpw7t9iXny1zSUzisiywUpEgdPQVFs",
  "key12": "55brTCtisP1rULj3u73RrZzkYFKJ1ytE431sS1hUV74nVAe6v5pvh8mxRQwo9C8rXSdDwdwifBWbhbYc2tVBfany",
  "key13": "2nrSeG133HFtyWBuxHqXwmxMWpGPj6xbFzsief5rNBoRDPABW5LQE3nVTwDYAK2guY3t54ugj52B8FTxo41NA1Rt",
  "key14": "4jrnYm9izBF9efLe8CX9okLY9LMu2vhG57jVrV4gkPAnSxm62qf6bXqFWPnoUMazE8dx8K9iPmKGsTECo8nJiaQb",
  "key15": "3DwXEaFVCDEtgRGpDZAu8e7bZ7wWK2sYkQpY3vxZrWosEa5MqdmkRxpyFmVBm4MUfGTZSZhZPT3MFCPjcFNdqpdp",
  "key16": "2gKSE61D5FQinEBpL2n3BFcBD1m1se9ghgiYR5Q4TzQ41mMvjuWe9PS8yeT3shx1ta6RRZ7dpXWScKJb7mmpWWeL",
  "key17": "4XhzwRrd4kU4jYF19dcKvfvzweiJ95sDQhuJPooQALjU53jESgXD7us9gDprQwbB7hcRxrNErP57F3QGGUcnMjsF",
  "key18": "rXXaBHWeZt8han92pYeQpSgFV7zWqEHmo6xNsyTheVcobJKAuYwLELiSmTJ5h5Y1MaZkFmSHBbXmedCyvX8jYJV",
  "key19": "45vwZSh3J3JEN8mJBUpHRNubNnefEkS1N2Cw7ki7HNoDEXTWqehPj7RzZgUkimxn1GKLA5feJ9TiTGrdSxb1x4WU",
  "key20": "5iEvBNp9U9sKRcndQhQ7b8K4bysrETaYPE8cgW4ngEmYEj6ygpFkQxqZFUwU8Y9ascFWVByfhh7cYLGPJwvXfT2c",
  "key21": "M3UgvQ3CA1ehZrG3un1utnGEPoqYgKnDQpDQtUf5LcFLA765XnbZygtY7sayP6a2PS7hiZtD6gjAFe96DKyTcnh",
  "key22": "49hoXjQosrqkRnXtZnGc2my6Tw4zdRXYPuGLND4QTM57KCaJodW6CpGvKjhZUpbAroRMtChbc2nCmyZs9isdGGjR",
  "key23": "3bKh6Baxapi27b29ERxps4MzZyPrZDUcF7cxpa2BCQYg944r27mYcK24VQFPDTG5yamDAVtCWGHzn4LFEZ9Ap5UH",
  "key24": "28GDb8JtM2FfjWYWyWC2Rm9AuG8K6YDMFAttZFY4LiUiEBGAEPak6HpYfg3A74eYh2ZGomKmbyREXuUPdhNQkZUw",
  "key25": "4NXpsqVcsuTSvtN4WCc61opDE3bXHHfVc5uUPge7DgkBoBXETyZ3kK4AFq5MFCJtosbKRuoGNBErRWC2oznQZ7Up",
  "key26": "41V5unRSwBoajFreuNtG3VUdaJ6PuBjm2SXGLT9HtUX9CJxZbaYZqjj1FRhHKSNUic7gGCaUTVG7YndnKFJBpUNS",
  "key27": "3MJYPUcZ5QY3ie26YwEzuqc5Ei5xCiLTydaAvZrdhQwXNUQdFPvVaT95fQFiSiX9Hz41c12dLGSdS9QBJDQD2ypg",
  "key28": "2QkZj3M7emc6rcYSPUbyjd6ffzouiJhfc2DimcQMy7yB87Y1CjFdTVZX8HT2SWgC61aVbmHYzaritSyRp56zC1Ja",
  "key29": "vuTLzghA2WFcBSHewT44AazZEK164Aipnyaexqvcb36obPLV5uHPtyjc6LXu8Lt6PfBNikZHjFwMn988V3GZF6s",
  "key30": "2P8mF7mq8M1HaWqXzo4ofv47YRoFf7XLooaykRfCsjaGm1yCnfdejuxPzWHTBn4YCYwSbqzQJ6rzKQy7rDgGasEK",
  "key31": "3zga9MKBhqMYkonW6G5amxmahC21R2jQvSeMNTq3od2ssujYheY6CXfMSCMTh9oTH8KGHE7MfcRo8DG2ZXXPwPai",
  "key32": "3XX5WY5WseYu6Z33A3g6khwkv6kGFVkdmpHGgPQPxZbs419DMTCMXiZaX5iBA3XiVMHSmxhJ1vGzirsC9yE7em9w",
  "key33": "Je2qq83j8Qh226NKNX1LA6mf2rHNGKG2ZSX6GbBfbwu6uD5o6qvf9h3ZHtxW5CaZNwyUvNtdVXer5V44tzCiSEZ",
  "key34": "kWMXZCJi938npD9pdmEkCJfHHdF5gcMgVVqhT2FLE8HRZmtLGoQSsVF1MzHdneJdpBrhTGqZCQv8zoumKyjMLv1",
  "key35": "11B9XaEwWtiWCgpPkfKA4GWemHZhXd7shFneBkEozoArbxvE1xcLkypprdbgRas8JiyJ3TsEiAnvjfcgRfKGHCH",
  "key36": "48X3VVxHGuk373AKW3EgfQTv5zhAhcthvfUgHq8ii13udjJr2WjxP9cFRTSdVfMXQC3W3hCCG8asTX2kYjFnNSe6",
  "key37": "ojX7cPLtoduFUquQ4f2mULwWohc1TF5oVyb7FrFhHzf8rPauMSSFwfSsosbMLTVvqFKZBwxGvHLg8ksVuDkJAYa",
  "key38": "5zREmiARfEHQ6es1AAg6TLW5nbfPMnaFUXgjCJ2xLg788ngeSfSu4n5B4YiLzVe285QHzwGgBtdGqgZLvJdNne1X",
  "key39": "5HSBaw5hyN6zBaKBJ6UAyitAyjj7FQ3zACjdBqvdTB62gfziv3vg2798QiHcf37TTjUv6B5Kbg8zi6mjo4M8qtuX",
  "key40": "4q3Qi9so1R6BUW4A8dfCd79mfDhh4zM8eHSHj6V3GpGexJ2XFTQY171uzMK7LYf9x3BpsvjXr4JB3VCfVuqAvo5C",
  "key41": "iDTeGgRPbdFS9nNnpRYRgyddb3FLc3fxKgk1h5JsxCXTYzwRc366J9zBSygrJBqS2tdBFCKpEnZQ9HxTbKWuV7Q",
  "key42": "4sr9ZnBzpDeBvGZTuuMDF5CC3caXTorYkFuv8auHnpFewyaxY9pS5FXgYpA2axFieGLcRa4JH6p7aEbkoimU5UTm",
  "key43": "4t2KrqEDiuWmRFcXJnRkNiPBQNaqN9Lhw2EKNK7nuPCzt4Lp5VAxAjmrnGKMbm8fdsm9VkCW61at1k1iKmYzgtSz",
  "key44": "2a3UbtNNGGRWTGVEBSUTSvoueChTi38WCV6Pss8GbfHYxVB3HfT5QCgxEnAKpuLoCLPnZj4hV6zhnDm6LNx4ZVti",
  "key45": "24Yk8aEiBsXmYEuDS5fHYZprKKrjyp956CnxnjCFt47jHPQq66cmzwWHteCDkp2tyo6rTCQXwNi8APKyUZv46MMk",
  "key46": "ReqqyyJZKzBZD5hbZ5vjsyWugw8BpkjuLRqToqkZNJhGsHM3qzwQoGJojwzx1Rxi88GZaeuoeFjqzm5jhiAE9Gr",
  "key47": "5M1g44tXkg6KsXbAajjmSxpocGRroRRMam7qjxuTFZmT2mg4X1JGC9ZDax78A9Ydm6g85W5j1sLjcr1F6LjFvCbm",
  "key48": "3guUaQibBWMczkxdxUMNRNWQmf34XrjFGRP4zQoCw2nhSxD4vfxMpGc9AqusJTUzku4H8tBDDWPwg5ABVHhB7uMj",
  "key49": "5g8iSSeWnjDekoDaj3bKf8Bf6Zcknmp1KqKoQ5ptFjkwkwtggMKhsQGuW4LyyQ5wSZreFysgENKV9tSEmNKwsSBw"
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
