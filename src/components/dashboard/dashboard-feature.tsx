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
    "2ZDVgG4PccGM56ngvc8r2Wzu6b2Hoqv4jt7afmsmjc4trLBRpyMSaMFbtRwyqxWvkLaSGQTcNJtgUEkS1ciVgYMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WuLNAMY45N6HMPS5WANkJgcU92v8etYue7C7raM8oDkgkRsJVAmSqPjr29Pa2HQCxzhhBBtM8fHCWWycgRBhogd",
  "key1": "5z2TpPh1aDbGmG6eF3mXFfT1S5TLA2NA3HP3YYoGtWZPB6L52YcdZjF9JQfT8BRwvpQ81ud33zPBF53a2rpH2rN1",
  "key2": "39EXiNQdLG3aZzqBEUnZYR7MS7FdUSDFT8PtWawaJ5pznyvoUukDnk7doGsZyB3bY3Lz5Gb9UD7SCkUMAroAJqoT",
  "key3": "36cNLoLXQoYPNYy6yXag8ji3HpSq4FpKgwVqqLyC5JE9HxYdBjt56rWKj6onnPpbabiNrEbt4zwm8acRF4Vif7ZD",
  "key4": "CEst572HUnLnryz4piYzSXjy3UenxBodqABfVVTQvz2TwpVMmE4h9pRCSdBGHvE4EuxDp8p362mGAhztGuDePTd",
  "key5": "UFdHKDzSYcdsLg7P9tgciEenm6ikj8KytKTRWontrYVGNeu4DeBGesBZTdumUcJtABgt75WSB7beeqLmx1KnXyE",
  "key6": "3S9obg3pLLZuNE4QtbuWb8oTjKxDeHNzu56rbWuc3zYHd1C3KHsGNKN3NwCWjFrvuMpfWgsu8WHsrXtTx7Ch6b5R",
  "key7": "v4JXnGmNRPGpQShVjmKyXcLENFNfdQujvS7pKeWZc7Lj1b6ijrjsaNH4JEnH7DEDADt3LRRv2iArHbZAE9UR4J5",
  "key8": "5KQJ64zQRmqeRa8GwB2RkfxXqMkYBg8GYNfkATeunGe3ZjSbKnE115FRAFckVSBA7BWszDsPEFREdLj16Gta7q8C",
  "key9": "447x1pKCpTkk6b7FBCZbosxKSZqiTmbAnzt6YsuHdc5CHqrgztg1yK7wu1SoBB5ZfXKVGY1qikDKiwhL2cQPgDgy",
  "key10": "5VennqUJLVKCihjySxbcSw8Fdy6EXQPTFV6RRGAfQJAKzi1jD3VJ8xasLfYEKvPH8qvrkcjBESocjj9RuwZ7SU7v",
  "key11": "4z2tnTGaEW4Tm5chj12B5x2qnynVpNtkZ67QnwjT4iY6YLknQeeJGHfhU69Ae7wDryFmicPk9DFYuXYGuRrTVBMj",
  "key12": "2Mtwp8oPgy8yzMHC84551R5cX3KCfH71K7vHF12gk3ZobygyeADJrLQGzA4im1rRYnFzTPvtjURvcunKimJzh4JQ",
  "key13": "5cdfRMCJgwQCZmuQ6iTDrDZnPa4hpYM3p3CT1iTt8ebwBFguvMS3pV523BnpUVuJtnhuTX1Vo1Y73yGBKvFF9NVn",
  "key14": "3Y8cDbSE946MreJR1FmnSeqrxKxgzA8S93f3TvQ1fKbuVTpVJb14W3ikjWoEnvxU9sQobgb2kcJ3NNR999vnq9eX",
  "key15": "2LwjxSxaCsGomawsrTaZEy8NvGE23dGJXDMf4j3vajhquCE2txqTD71Zq91jo16tScDzaUknudubwFRB67V449q6",
  "key16": "5kc7k2Qne1RwCrioyWZhmTpDo77op2prrAEinCxCFxni3ij2tFriTUg44ELPm6tGYtkK2iqdFLVYWAzTmN66JH4W",
  "key17": "5ZAAKrRqit1aJsY7yju4a1npgSwB2U6pDsBbPmw7RzY8qvscCMTAraKC7FHzQVUrTsFvLxvBNGuWpF3eczgcjr4Q",
  "key18": "5FVXCkDXC4hySNyGgn2FZy4Cnoqkg4qA1hKbXUAFaQgDmZS6YeM7fJJL3v1PaJKgAmWjxFnNJZKgwBf18wrhi9eN",
  "key19": "4VAzsMuA2LAtZpCm41JGgssZE3F1SmW8hGep5Ae9D2E6SJZK7exZZMHfb69dEGjRRqNbGqxGAKDjQYsR1BV1rxEy",
  "key20": "g18nDGqLsPnLSRBfpCjCBewSAaGfjeXDNiTYReiFmjewqLrtByvk3SKS7cnpjoTG5GwtvzbUDzQopGWfZvBqp8s",
  "key21": "2b2atR2XCUxp6svTsLzvAjFRnN4y4ZSw9uHrE2RkxhakjqRpbJVbKNBT82caUYLKwoARtQVMutADMh2VN61Qhxfe",
  "key22": "3Not9LgjpDRfRCDZo14yPEEU5h5BAPhoyJcdsBzELQow6FZUFrnzxburRnZ2M7HMtsmyUY68321ytiYLYhZFU1XH",
  "key23": "jo9fEJx1mLR1rM3oUDBoNDXLr86RcsMZp7f7SDL5qhqSmPrvKcsFW9iYiQSsnW8jTUPXGsHkf8PBgKpgq3Cuk17",
  "key24": "5J7AHgrQBMEA3ZruzCvapVPiDxdL9KMtMPowz78wf7DREBNhmoedsEBT2zwCoSX7SPthZFivE3KWUKBL1SAro4d",
  "key25": "MZXrTBhGzAvzxjZsNRxSSqANfzYDs6MNzAzgCnpxH1XpRUefEK6CqTmmGEExK6Vo7DDiDTBqdAfXAPcbu9HkPt1",
  "key26": "7fWYYGQ772eGLsU9WcQcGT1aSGS9KNXdqXyu93NpejeA5KaTwq1rvfY2jWRmBkUS7j9dvEpUZGgk8Cz4qb3UQvh",
  "key27": "3jy5K3gHTrTjVMi8MDJsPmjVz9WqsSmemcfkBjHosKLsVpbpZrWi8zTLPTRJJECyB9xghTf4z75fCgJR1mshQVEj",
  "key28": "3hmXmGaPnDBdq8wrawFcRiE1NWSQsosYViAYdRtUiUedNK2vLumBeXGuXWDVrhwkAmcqskuimKoHk61cNQEHqWmG",
  "key29": "56Z6qZgUCLy7dCvmJR7CpmuBdecSXYkJtbVVToy1vNXaAzQmkho2KEFngB4Pmt9CTAznv9BPDfVHP7RHRHjon9Bc",
  "key30": "3TNL4G6huU2xjehqinqDgtBN21R2WGNDrUfmNEUakFi2mChqJMUd27UALbH7LNCLzWhxkz6jTfuMjyogKfWCnLsa",
  "key31": "2N6ZFoEaJ9CSkUNTUis2MzSWLgV6KcFZY1gAukxDeNNtoawsMCyubAYmdnomR8B2XmL1ZsvAjE8XfGSjGqE9ocbD",
  "key32": "3KAhzS8oGxFPAsPQN3j6Az26MqyYGj2hz5pj9awXjiZDp41HYxti5NixZay7k3nm58eHpSBjqNirwoNk4ro6TEFE",
  "key33": "AbvMxToqBdD9yDbyRWTtvrZ8ydkpsUzudUcjAc2SwBdbYRdNExL5a3Cp9w6cQrovYpNWLx7CxXQdHmh88FUeJZ3",
  "key34": "5VZiuxofigFszRr6xQ4dHWb49gEMrTmnVcnYzndKy7wGhtCTbzWQCq4L77RFokkGaqGkQKQR4PaKLw8GJQsWrFme",
  "key35": "3CAcARvub8yFx2oihuGSPNxppwNBHRs6eVygb5XjZT6fRfJXaBqpNWevkRvEtP6N7Cm1bmvxKishv2fVvQaXs5qk",
  "key36": "4N5LJQiFkWC1A82M4YADejRYdGJJfSxun2x6XY6NjUK1cmqoEor7cEj9SoVHcgTHWjLCm8KVMzbKRokDh9znmqKP",
  "key37": "4ympBfu1H9q4FLBDbYXkh9aAKG7F9rnmJeHBjNaBfss1gXYRQR6bysgDCLtG2fCprgH39g9hc4mzYxJQrMhtidR6",
  "key38": "cmaEbjmw6DqHeqEbuY7trWH3dZ67HaVUakbuhkhYKhKyvCBqRWX6Sys2ikujjQkCYGsDkGNBVskMrK3eSRAhqrR",
  "key39": "2BxeYJRsJ7qKHpJugHsaVt7qL6CFEu689DUtyw6xpxKC8h4uS2NoNoavo7CpspextwuCt7LMYWwDphRJb1zerTwj",
  "key40": "4MTQWmdf12H7xQL8MYCj7qCa6cAB8xrKnEMDR4eK9fvQK8Mfb7XufB1npofTdnEo9BijZ9w2GyEG8MusHWdnAQ7M",
  "key41": "5wZv9RFacAMVB5m5AYZtXvtS2Qu1QkCVcLuQdpXXzfQCJMFarWV6e1qES5MBXVEhjKXNCDEwrbDfDCMKX1RsCDnm",
  "key42": "6fkvtKGJzfr4zo77ppWVSfGpMhbiBKmPwyCt2WgjHduAx9ZMMfBf1wnNxVJHSchVN7XKVgvUF8Lxy5PqBSZn7MN",
  "key43": "UmgNsT5L1AnaWJqmuCknFgjgSmGqNy5nzksiZGo4m9sgCHQJv1RTggpGz1uYV3LWGm5vM1ud52rim65aXUryVHk",
  "key44": "JKggbAqQkPWc1FLE2nd5Sz4F2Bx7iahEjAwGGaRkazLB47CqTnuascnrerrWvE83TwZVDhPZ6q9a5YftvfxgW12",
  "key45": "5bU2JvbywTf8u15MRbSWDVANbZ8rWsg4QVqzrXoT8ehM6rPwf7v9JxRpcWKTGk8krj8FPeXYhrepveXBsyPNsWZH"
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
