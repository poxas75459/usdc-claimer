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
    "3dbmRbnFATyrag6Dd58HbDwozWnkHHtN1zG2EqqbMrdzytYSF2FBKCtKMeXGNJGtq1mmZcBC44nPH1PvKrP928uu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rAtU2nssfu2GA2V5MQ4hckmysyBsdZAWAsfRPkFpZYMTMHaiQAQnbA46nQavN4zSFpvEZC7oGiZjyXuWsZbSh4P",
  "key1": "FMBpUpfSTwdnWTda6F1ZS2EzFSm3d8TSLSruQbufym33WX2eUNyDBuWXRdNFhdWGNqsQRwqYkppHLRwK6Kk8UNW",
  "key2": "2ZXitR57W13VB5gKPH1JkLeNJJJfyagqPeLgBsaNtK13NNJJFYS5RUXzPEYZvqXQuWmgfXbraFfRgroENbCi2exF",
  "key3": "5HxpjSFzmhLQXBcFQ95DDiLUNCFRNRFpZLY83hDV5exYbuRbe4uWqPrFHB8nSambyzaEXpfv9u9Z1rnueLZ9u276",
  "key4": "MJXKUDmdbLHNj1miNHqr8vrcfw15iBron3oYW6qK5Rtf6GYNFhh9Y15e7BeK91Gn9NsqeEg21sgG6NmjxDGGY7Q",
  "key5": "4KvCjJxGdFzgMgvsMRryrCt16mMV3kz5ShjChJacJqpte3scExJsVLpeKufaYBj8apABzqg2oqL9LwDKmPaR4CB1",
  "key6": "3STuv4HeD1MBZXqvLRfxvvZh4GWH6YoHSNBCnQRLmZMCtwzaQJPtFWJ4r6KivUjE7deUWzwUnxerPsWdY9iK5jRU",
  "key7": "DCm5SoD8kS4urpYLeHh53VoSZU1ztR2VQ6F1au7ns645iZnfgiEJi1svGHd7tWY5oqHWqDaM2a2CBvqytZb5eWS",
  "key8": "3kHU6q2AUPddzdFVxFskc8sFRoH5zFsFY6PtaUGLsBDiNWXkvHT7gor5x181TaMNJFwALSCPPw7hbJHhWJor6kBC",
  "key9": "5ty6XFSUTcSEDDswuJDwcjGnMRNEvz3qDr3yFb2aRoWV7XzSq5Hm4xhN7VtXMMTngntG9ohvsK9ft7EkPUocJkde",
  "key10": "3S476g24vdaBHT8fNdSakJqp6KLYsotatU26rc84ZXWVBVEW4Dz2tiNzAyijweHfCyz1HiXCBMFbUi4549dTCLhR",
  "key11": "5FLy6VwaCfhd3K9URkTFmRJs5J4JaV8z97mqD9iNSYSgKSumbbmMd2S2hTEQYnaoJWhH7tbBD2nwgfsaQGAbNst7",
  "key12": "5wAkHmdfiCx7x3EfbsnZhPasPbt1wcBBG5zTPvu1MBV6zXji8G6nqLmuepuFV2eDrcxvcn3VWTYgCkBom3mHA6st",
  "key13": "5VruKBs36MCWfZpeMMxapDx3CwK1CbnqYE3nvUae5nsPMdH3WwafyxDVp5P9UsaRf8UttMg3azAKChZtrwxXBB7T",
  "key14": "6xZNhmHQjRUaMSJfCPfmEnovhhrQYNpEfuVSyV32cEEQRinQMdb89UnCqxMZr2e1FUYTBASzK1TgQfSqVB1stZg",
  "key15": "dcTQELLXtnAF3cjuNFwjHJMjX2YXJBVbzHCxpBKHYZwa2nY4szy3i1J1wdY5rtKq6BhPz8izpWK7RsGmvF4b3YN",
  "key16": "557urdoF2XyzCBJmVUbroEJBtchHStid72HvkUFv6djemCKVRTA8zrg3AvqQwXwtrrQDW3fHtJFGVVTU9zVUaeby",
  "key17": "5PidRqPc6AeHbcKtW1Tra4DquZajDE9UxX8wGA3nRd2VPdFpUNFJm3WnHnB7aMnXuC1Mshchj1yije715vs42GnH",
  "key18": "2MU4GUYoKYzd6eXckhEoArPYoBojHAi68Gefyx2XRVs1Zr7DQjAVewyDjb1Y5RcouAs9drGfFvD1Mgf9PkLdoGus",
  "key19": "pNxVytaj3TTAnKaBvMWf1Qj7XjbHc58gpSbYhPEoi8a5ucjYnvKxCpBiZ2tWamKMM7A9xMEExuGPkkZuibwXRT1",
  "key20": "jPK8i9RUWXp5UPZmimGsSHrkp3BpSYJZurhycSyhE4oFgk3T9sTn58g4xCM2vcuhSsQ8QJDxjFmuuwj8mCeEXbb",
  "key21": "5qnjhc8XbQfMvJnQZFKQV8g9PTX24MuHkDPLSmczaSpdgheQ2hEWyJnrLdHFKemQoiicAjU4qCLFZpx93q91hwA8",
  "key22": "3YLwtyKUkWKTjwiHYv29B5WjBRXBCpnvr3mfZkskcAYdQzwUkFpFGpx5wmRedyWL5rP3ynkonVQvQkaHafp95ZBQ",
  "key23": "2nUzQmrk1kAa9En5sjnpoc17ZLED97FgqWS54Lf1Js3U5G4khJBbEbb8Yu4GapQR1rB8eT57xH1JTPJ3jetyGDLB",
  "key24": "3tXeTTBT9aAvJhLe5fVj1txN74p8aHykCMGz59xeTnRHixANiiKg8Es4w93Bf8hNJ4aZZhC7byLQdHLfuhNUZRnw",
  "key25": "4nrMchoy7b8CtKBzGB3qQCovdM7j5MunXbe92tpB6XMh9NuakVdLh4xjt9xrPJw8PrRaAnXJYm96kq6FqEey6Gdm",
  "key26": "3gQwpDrCQGSw72AStsu2HueCBE15WzphM33tNiYkBtoAuJNP94h978ykkTbL2nPZq2Nrh83S3rAGfLTAdTtLw9yo",
  "key27": "4YxY8MKRoVDUW6DUghYAbLQTJfSNmFUZS7eKBnZw7yyjHhHBqBYtb3wjYa2XZBd8MNmFPAsVEbN7kLCbSg4i2MLY",
  "key28": "E8CMoktLKQmpDkxdzAFBCnz7fsbpfFJphSEWFggtyXdxHypMZG3PTHEg7H1rxmC18CiCaLWg9uZqujzquSnysiQ",
  "key29": "2Z49PqUemQhvBnhrRe5BPmC4BYxdaRYxuRAqL3bSXm9K9nuNivGfPDd81PapDjQBFWY9Cf2XLEPtdRDuf5Y394KE",
  "key30": "5GZh9VQmik6RqZkc3TYV9TynRULEPXhYwe7wTndv3fwYkU3pN84976UJS5NbYfcMi2KJviR9zUZ6PoR72Cru8c46",
  "key31": "4BjoBZRLkMFKPPqJ8NwRjvqoykYLVfRBEJGoGSa8vs7SkyACLGgmSuQQNaaWHjQvqX8ctveJoU17VQJgAz2fCkWK",
  "key32": "34RaVxLs4ofprdP6oLiqFxyJKn4K4tZVjfVMnwGwdRmbJRJYbXMRziuWM3q5S5by7pZy6T3cTZWy1u4wYBCbN4BH",
  "key33": "GfZPKN3V14dcN9wy5kASsCUEraABajFQPhiSQenYC8EQPDfWbfvyj2T8yr1VBs2PV5byUWa8TC4pdf2j2ShAhKD",
  "key34": "DAvi4LDnj7MqoZ3YH37FMZEwPEtL2d6f9vc32rJThVsFbZWH2Tn3uzABN3568A1cvseq6Jabxk8M9LCnmb7UTgC",
  "key35": "2Y7RPMBFbP2cKmYKd3dWQERR24bJSbL2AMKsPHKhAchf1KMRUMP6zs2v2ayAYAiSXtSG6257KVMqpdaenc3be7zy",
  "key36": "5ffU7hHWRoUMm2nYAu7ekmzMPSt8QjUkFx7D7e29pbbnqbAZx7jQ5sEbLwEbCLM7HD4J26vtNvcDBav7vVtz3UmA",
  "key37": "ZPounhw2GcMB6o9qtXFqYq2zBjfY2EyZ7s95Q3NZJrhWk9oGmmdR8GpWCsbahv3KUgJgZv5HiGx4SFRveeVVgxz",
  "key38": "2QtSwUr5rK5U7Dpi9RGPK4x3kAQNvMaXjqRs5BmTdpGFjLsBQVAMms7FYEHqoCybr9SQYRZFKtVXj8C8X56aNKqK",
  "key39": "2ZZkoLzb4Myy62DWggv1MSdKAtfW7NWSFj5zY5hGdHNCu7nd2dGgYsxR3Ab1svcwtJEQn4aJic6QPykrAWGEfYen",
  "key40": "3yJHpDvx4UC5WssnCbLdjFod4BCwNgfSJdPjuSCHXGnBSn5KJkF5JzVkbJN3qJStAEqKaFBtx6szjrexGMbhxRkn",
  "key41": "2RXaykaVomLTPh2PXuyERcn2d7Rw1668EgtzkRhQycADZr3Jr3fjGoKjYKzQRBi1YDnCaXkc1J3uMkzGbh1n34Zq",
  "key42": "2Wxwm7iFw6XsxZ2bR4SsVxoCS9nKH1siEBPAnTx8SCKdoYtp7g5aiwr6b1oSSFZqY2hnM3FBn7s17GnbXJyRfe8n",
  "key43": "VbvYVnu3YwmVo7TEPQ2ucwspSfqdkmmuUzUmhbNsHHuqKusS4VDsHfK4qg3UM81cpZuz5L4DwvxcHpUPjqrVZKt",
  "key44": "2v7ig8yRYFR347RkbDWx6zNYe4n7mn2Dhwq229LkpWoeyDEXizfopQxYy6gdr84GYwNHvos7JYP1iDnNkwiYZR6p",
  "key45": "nr8pQwd1VziYyTKV7xvpagwNBuRsvbMhKPeJPDQuumCdDMXrWhHSx14yRu9SL282VgvHjgqeETZRaHLiqEr6oGf",
  "key46": "2rtjoGTQRapF9Ej1UdBymUzzLDpzb8wEQocTytr1sakdmqAruXMW3rGidmzWbMWW2pQALPsdzcwqJGaRETGbw3qc",
  "key47": "2x3Xmk9NakJq6KRnrUDBVvHfWEo7TgjDxxM1fJaCq3Ri6KRqqYiceGxkZzrc2AihUUax4ibTFUkSoBg37AjSyrTQ",
  "key48": "5GNXNfFhNnhMkZFv3GUQDaivhJWEKh91UVk6SFn2PFJ11KhepdRuE6zKJGejMZe9rW8YQoqRzYdNBoWqTitrsgth"
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
