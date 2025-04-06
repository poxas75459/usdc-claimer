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
    "3HdV6hEuzwYbQfbzK6LiR4GbKE1tc6EFcigodk1uKWiVSFKNMg4XURXNonXFmFajEn4gEok6zzNe4g2qmwFvKGsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ikHWJdyaSXP5Q8GjaaCM3PhovHoxmzMrn2NeFJ5oTNbCkrYusazGg4aT41CYdfoz9h52tqvpdb28BaCTLPMExc9",
  "key1": "23sALDjf2rg9jB6azkvbkkRrrH2iuFN5nVWFZXmoEpu2KHSHJg14ByQ6F2kxoif3EveybJA8FwDs15KLj3EhFr6w",
  "key2": "QPXQFJ1HW3BQSbkjWiftEWKqyFLjkS5MJjqwLdbjWaiP9WPi52mDM2BDH9zbhzEDB61sHrqjCPhHUv1ZuggHZiY",
  "key3": "2dtqxsUmvX3RA73tNy4mxXrR9YkuXVNxXEMWYWfqmqqgt3kB8yJJvqiHZmL8NA4czPxyinARe5yToT13V5na9mSe",
  "key4": "wSq3raN6n8whrrPUEtDySjcJHSGwtNhP89qNZr91VZha2psR7sD3p8kgQ7MhQi92a5yFTzFTZwD6Hv6N28tF4X1",
  "key5": "5LXPFcYeRWUpXoTMR43rjyq7hzB2nHPAnRZsr5JHdhMKtq33oELbbCAyiZaZPUQG7HusWkw79kd7F27iamDJ3SsJ",
  "key6": "p1oBoCCuQHFfQCr322FSMn2kdcpBWgLqSq3D6SRtxb16RaHyRUAPsPfMdqxVRgk7vbCESkBBbC7BVQX28KyzmVn",
  "key7": "5R2zSFEVrnsgbTupj2qocDg2gqyf9tY1YhSAsqiaqVcXyicA9MdT7n4Lvoi6JaowHNpJqGNVbi8gfD5E8i85Fgwj",
  "key8": "51qpJ53sbiTTDRh5gzydgWzX8mibPW6krpDxAxMt6ig241Y4ZxZYxt5nSx1mokKzqqNJJ2JGT4SXtNpJPJ1bdLoL",
  "key9": "2SASBfuccScL9AoKnqe46JgSdVQkoz1CncyrCFm6UjzsNsywSCxpbJro6Lz7nThmSPSTeChdeHS6Vc2JMNy8zXux",
  "key10": "64bjjXBhC1ddNVutV6TjmPwoVReRNh6XgVyHqqhBhK6o8y1F8M793L1GBbXBArjrKkwqbSUNPqq4UskNKCJgFyqx",
  "key11": "3pa8zJcxXaMDWAtVdPUYqgfwXDe3fsgKBe9RcyLZ7au49wB44BFUTP9fF8Ch1N56g5XV2a2Pz4CnpHD33boTnSQb",
  "key12": "58dDnQ79gTTTjfunAZ2NRdw8Yi1UbcaLCRGUr4SLjeD8nx6aWxcSWvQe21MsHL8G4HKXahMPRkB1Dc7kpshGaz89",
  "key13": "5nWkm96m2KdJnJw3y6kuMDrSteYUpkyeLo1rykeBzZBvd892hoSiN4pNd2EcvVupFLK5Zwbj7Dk4WyyZ1ybCSFmm",
  "key14": "2jEjxQEZFdTdcEMo6cYbg9RQd8K3iEwBaRxoHLLgPG4pH5gGaW8u1NLo6BMnxjeHhPiyL6M8MKBGh43kLeYdKkit",
  "key15": "23AGuVSUYBtkUSD3GecpoYrqPHbk5nd2tY7stK6YR6DL1cPbtaMdNUnAQYtNmR8Rdzrbzy2Kcrx9WA6bzaWm215F",
  "key16": "65dcz4vUMgczZSzRVC8wMDwnamYbDZ423wgKuNqjGk9bCy2Vsa2sbxRhb99cHUPDnTPJT9ugcYhPhFpDZmi2uFex",
  "key17": "NrC66q1WvMC2KxWeqVoVE6gFtNJ3rCeSXTtPzBKyUmvMmPjaKZQARuepZ4aSSAMaPKEUKwyrCDbGmGxE7UVMspi",
  "key18": "4qRMkcY5xR3gWhwZV5bUicDiSiUuTPoAD4izZhatQ86vDhJB2goQKz5KPwD3a3T2UTKcEgHcdwjKLMupvnnqbqtM",
  "key19": "4NbZeYR5vTUnihhpVs3XN8gXMUJRcWvrsgkimu2BvU2Yq4dLT7ytVaWGLcv5cY7HPNpmogvQzYtewGbffcAioPwU",
  "key20": "4EXdJvycjqN8fr5g551djKxRNqqVSedqypNojqb15as46VUbX3xL7NiWYW4nUuhkDNoZgx6AJdM5nwkUCr1jmvcN",
  "key21": "MAwq9Gkv8XyzgtKi9T9eKfd8zwtjH4oKoum9Lyyj5o8RRymSfXkpnwdLQ7W283MApz9ojQ4jutjggfwBLVWRsoP",
  "key22": "gnAEHLNCDs3Tt5czfxWi2MP1Jwtzch74Q1bo44uzz8PZZD1B8pmQwGbSDQLxgJDYWYM8J3CtzqPikEwVfyDnM1D",
  "key23": "51TEW4fgdYURy9u6DahUzEhhAJfZcr7egboXfcBiBksmDhdRS3mN4FoaDLSFq5cxN9jgdpnNFRLAATVUJUguNozL",
  "key24": "257Q8z6gyt9H7xktzbKsQVCTSrbrTAiGb7FaxZqiweXWwZsBVaEenBd3UmFauEzHhiJDGqrKFyHiF7KrUyfsz1qC",
  "key25": "51uB1zq3era1qzBzjUhX85EfynWpP7yThzZJEqqo9XyPSahCEWLQYuQwuGAjRgShcnabsivXP3eZNrcEspo9gKWH",
  "key26": "2ouGSz2Fj1Vq92SzNhFBFEnGt6CYqWVo6Y8Q52KsZ1ggDvU8Mstmx7Y5Qo8gM8ZdupMpgKw2tnWNcPfiNKwhbSDF",
  "key27": "4gxnKyVEsFYSdtop13ku595xT2Nqk1McGJnqTikdnbAjednmYuXj6bADeDL9z6A3hNdZnt3H8DGYJdcpXjsVpZpW",
  "key28": "52hkMuzfPdbmSDQEaXzjHPTKPPW4SaJyzCUf9krutNMJJkq1XYA1dv3xD2y2mPnuxqrp1BbFHcPr6dTAAUW7zMTx",
  "key29": "5wx2TPkqJ6qqBzCtmdB8ea8g9MGQ9zgB1kcF54JZiFb8js6gVptJULbq7aDw9TZJsZfJDi1Ax9P7kjatcscDunn9",
  "key30": "4PBU6p3neEuLwSN9s111yHop2V7ANtHUNEkUQ1e3t18jxLPo5DRbKkCFfzhAyLcieeMgi4x3h9oGYFMxuthgpD3z",
  "key31": "4xXZDEpGF6EzS4pw9g3BMtdHgoYcHqen7wpcZtvgMGCL4MG59JLcmeuJ5achHWhpGFeh3AEUpKZomJk3qpWMYuSZ",
  "key32": "1KJZdpeEk8shf3h4kcpVXufbMqQuNPFGW9BNeA5ELQHXiHrzdPkzzMLKFwQvKpyqhCrJPN85bv2VAvEQH4QrLRH",
  "key33": "2ghP6t4siA2qunQWNAZy46StuXSrBdn9j65JjyeUBHqAw5DTqFWWd4JXsWhu2w4knTbJ3Lqvj4SxUEkX5wuAZwEu",
  "key34": "2HKuNrvpVCWtyJUsGH2S76UJbFu4ZbgdcgjPxF2JbpjkukhngNUaPK39HLE6rdEMAhzw9P9mZeTsG7zRxKsw6gHB",
  "key35": "5HtQxtRHyPZ2FoAFRgtExTi64zFdcdgZ6wvXgxgWNWkRLDtDPWLEbVKP8KWHHDEJscRaf1VYbJSAx2JQJ7w2XhqY",
  "key36": "FoEg33Y4U3hHWSn7LBeQgpLxgAVhcrq6rQJaEfiATMzoDAno7QgC4rPdptyCqn7FzXdTd71RYv7uMisGxT4EA5m",
  "key37": "4GvMsEy2t59sZ3fDvjj7PdDpGLEDQ2etN61PH4uFH84NYrHQN7f134mjxKpDMLw38BQ9dcr9ALAr8L9ibr3YhqHn",
  "key38": "3kjFfKAGbU6ajSia9tdHsHEK33GqpwAfWZ1FWqGiar2usb1CXHF4roGDnVbhRZJ3eyYZiCU2zvBAmGevAXsVUELT",
  "key39": "2T67Rj3oRD9pmJJr56vLGtquaeTvH4RAAt9ZHn3LPmP4A3YS4suapqhvtS8KZqM8ErmR3PLaJQHXxLvTRvxqvsUo",
  "key40": "39EMYAqWKu6rF2sE1Cjuibn7oAUDx7QPsp4qRdZ7k55t2kPjgdMjcYWd7M4PCbRCe7RAuvGHvzgG8so1BNBgrRdj",
  "key41": "T9tvdrLpp8S51ghQS2FhxeKBw7Lj3nYUnsxy2edGLbQEQ8EmRc6g4WEPFmVoSGPwKT7VqFiEoTVJLEpjBKSFzGf",
  "key42": "2zhFBgK7U1pn5tBrKc76TMjKGLzZ2ktC3NMHeZL5vyyv2bHjKBu95QbhJbAunLvRik7LSkav6WwH7WQrefPHHzCQ",
  "key43": "4AEkWKcczHdBkKpkJjtSmzfcXxDGprhYJDSmRsrZ5KXboVSQtfjLc1fu3H1h1NnoAyjyy5XqYE3xxTSzYTuPTsYL"
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
