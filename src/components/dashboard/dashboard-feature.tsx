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
    "2zFez3mYqZALTbedZAQJTraA37zKQkCVpiAVpW4KTWFS3wBHtSB9pg9awdu7yDEu669dmoZj8ibKabmfFQedRRuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6562HgqR2rrb43QsRVUmF4P2duurdi4GASkJRYWQqLXg7KGpu2QccqptQSWoQDmor8gxNStB4AbFwQAwTZVf6e7r",
  "key1": "3DPdfjxaFS6Qr2rsFP9ArpQTdEyMHTFLE5XraxBsLhCyxJhZN8wfBpVieJjrzdGxPJ8rawymMi1vhibLDZSkSCrj",
  "key2": "62VeUtaTbDuA5zxK99RhZ7djCyetjUi9uuMwdhGZCYo2YZz8dc2gRJVkyrujUsQSK3nzJ4yBcT37MsJGoZraaWrg",
  "key3": "641taijbZxBCP9vgMT7uQReoxuCKMXVwVU2M55xtjEwbPYdf81KffbUimQK32mCtFkPWyi8AjForz1fueGyd4Deq",
  "key4": "2TNaHoN7wUeDr2LF3s9yoiYi3JrYg7LG4m3GTPanEdkQwK5qp83MrV9mzt9GmhJdsSMdw3Lf9arJvqatrB3eKqpL",
  "key5": "5tJB9zp13RhqyXK67gBeXCUZFm7EEAAwXMxCTcUfSvdYMgFjyoLakGbsPZsFGyVqAuoJYMfFAAj8ijkX8N75N6wP",
  "key6": "2bf85kbK8SDkNZojLMWoMzYaaAznfKpiVoRb4UyMEgaHu4nc4BFexPwJNq9wyAutB4Kht3efDR62JeoszpMDcQ1U",
  "key7": "2k7QZaYxV6fWdmBNuEXt7kfRG6CPGJfJ8Yy59UCaQPNPeNfDtHCGmiXGEQbGbt8C3zHN41zc3RKCrayq7zkBQS3F",
  "key8": "59HM8GxHd8WJfpU47xEwWgZi8yozE5edZ1vetFCtY6SetPokTTz7YLo1YdMcgwBenteVNGSZjvUZs4uNfUF6Q2et",
  "key9": "31pyAku4oR3nzQTm649LmjFDV3AnU8UbTPbEEMZ8YouE9DUuVAMNzwC8Uy6vtBqVFRmak12RE6TGkCj4xLx4RAuq",
  "key10": "ukbGCGUNc3UhWNNM5EWfcYgaTuydABuUCqr16V2mRWssMuDkhz9vkbDJr5iv9c8YRhBjBdrCRNXwvhLsZciFpo8",
  "key11": "PLV64qpMk88NWY3RDViwoGJNio5fiJb4eLELuVGJKro3FbYQRhTxpnpbVQewHSDGx7Sx9wSDgBzgqmDQYguuEm2",
  "key12": "42yNnmeDEca6hS9QjMpngoaQ4BcXsnXctXUhGBf5AYcszxnhP65dpsQjq1HLFCbeu5WWcLCj3USpXqiBs7ortdm3",
  "key13": "4kMUaeFNFiQ8PLijRT2b2veNy9H9yTAknt6pVSh5U7V136ZtPAKgqgbqg53F5c4XgcmDSL4N4noBMx1AHm7ARXdb",
  "key14": "41EWZYghK8PjSn5ZVcFvFZ9xZxYJUZDe23xd9zaXUqm7DhQhdr9BAHFCr6FgqPsA9zsohUUZ3atjJoVRpGM9cfHM",
  "key15": "5SEVbdqN1LXuoS7XqqveL18b9XJF1XKZeMRQvPKoCfoGarBz3WXpHcw2RjYHnxhsH9xWqCij4rivh5HdXo7fFCV9",
  "key16": "UC7BwZxZ23acjiUqtu4fTAkQBtASLQirW273piUbR4T5yoDBKhXme4nJTw61nNaJS4kM2WEpfJZSD4gxcRxWkRv",
  "key17": "2id43kDdGAiETAuXm1pzAGrg4EakEyYTbxgnvHWT8CffVoXXGZkHfuUAjEiM1eQxcPFDzBVH4NwDUU25xQURpJXg",
  "key18": "SCzVsJHCDkt8ojexxD6GY2mkCwa2J9B7pNCxRLVG1SvCVprz19PFL9sh86Ugiq6aaHZWGMjoUxVyvqr7p2sXkbK",
  "key19": "GeqggPhNdEMeVuuiZG2sxdcRC8yuBBsAmcWNfn8W8RgXRv7v2vG6NY28giMsdyfMUQAv4S8fimuV7vzZNVbNHgd",
  "key20": "2NPTAFEZfbW3AnUt9t25ENkUvTxgfpFo5Nicfpd753M7dDM638VjZaycov8apoqvGWnR3AgGXoebaAMUauAhRcLx",
  "key21": "3ueJf8uVCy5KosSECniJPmb3MB7tY5M74DSYADbPc8FmxqATFpmMrBdZPfmAg73dhoRs8PqN9F5ErCTqQ1xkevqP",
  "key22": "fgtAFtECMWVo2zsL2MjUdGBLquYTmsqtp6rX2jLEXvwLJ96sHr6Bu1pgsgPkbF7EYecSovRHpBMDLKmoE5TbDZH",
  "key23": "2XXTpWY1yrzsnWN6AJzNEybEDhKwPqmgiNELPENyd5AWmKKc8JGoStyXFVT97BbgjsxcZb8HFtb47oM9MSjo44ha",
  "key24": "4RfZoKPFtJBtHggxBkbHMK5rFBg1FBQUe3nUEyEZd5CjuphjE4i5bYf6mzqbG6vBFCngKf3D1P6zsNtfP5zCN2c2",
  "key25": "38SCmYcPF4JVFNYvueQ8FvspVAu2zgwSCREDLkRc6ii8u1SEaHUTpWpqvKWaeU6auw51UECDkaYPG6u5jkq9C1B8",
  "key26": "2wHhFj6TD35ZorwP98Ey6JsLmj5NZBkytiJjSyFFyU5srcTLRoxwNVkAm8U2GdBQbsysBS1xZc5233C2puk3VUqU",
  "key27": "yzC8BgiSB7NbB71ptDSLZ6M7L4d2Heouo7HUCHUNa9cmNyeVTJvmyw2GyQWtUet9uaPTXwduxCNz6B3mVdB5WNN",
  "key28": "31eomojaLV8XB4tWE3CiUxbseLjuGADhUPu24oAcMNTUaSRW9GFELuEWRDR6WasuZPX5SJZ9VEK8Zoi3s5dnQAmD",
  "key29": "66nSUxBE5mfkmWVnoXnNq3TNF77vKajr6cmCPYJtKiUxEDiqnvwz51GBw7uxrq8CxbEGLKRWkLn91EtTwfw2Edef",
  "key30": "4aaE5aQTTRFyMdDJcuZC8cEnxxEYJG4AyoruFdNZtWZK9AEnG9DsrSHw3rL6bTGETPNZANpJKKa9Lo5MBoqVsdFd",
  "key31": "53ZNrTM18cCvndwiTRKuzGzJQHEHGDWbNRpc19cRYRYQ8EhvB8NUMwFWs3xEcokio9pyk1z4L6mXK2qkrpELcvpw",
  "key32": "n8XasBPgS1NDKDWu5Tu5NMGcfUq5hgw6aVeXhXUDtiu3hMCnmpDH5J8HMm7uop5FGbqwhhbEk7kR5deN6iKgUYv",
  "key33": "5Sz14gGJEhuKGkyyJh3rMN5JkbtZgFoRERKH2XQj3CsVMh82FTM2gMuBTQvMC3qjBmgeMTVVQCMsjQmhVQGeHGE9",
  "key34": "5mF2xdPZGehqWSy2nmK9iBredzsfMU8qDwiWcM5PopEFMHUAbwATHBZc19JgzALfNNcU5i7qXZTmGDA5ZnfabbX5",
  "key35": "F1fya37quJD2s4fbPiLc3acNp31Bb5X825KcfGa9jXpApS2L1YfoVfgPnR4hS4hyzi9qNFV6UgbWERoW26ZxrNk",
  "key36": "4whffgUcTcyKtMSc3uQxustw9o9C4pi3RTiJobHezxBrHX5znDMqz4fsaYJcDBokXJnXwUpbAvKiCeV4JgY6Yj3r",
  "key37": "2yv5HQck9zQRHhsG575GUfimVwkoUR1GkRmsJiUQfw1GxVGtvEbUtR63gF9FjLo3g2Y6DjaU8xz93e3SRzSswfm4",
  "key38": "5LnfBP81piQH3agrJzN354DqeAnaj6xGf23Aar1pxA1UiBmG5ctWMDN3Q4VK4g4vwjRUdHaeecCQs8FVh6Lyd5MX",
  "key39": "1Du9WEzdGJG3LP5maqJxFsapb9TYBT3ehrNWphEMnunViYneaqceTFBCvqZefgdDY5ZtDtaiaBLnnGgEXH3vMji",
  "key40": "4uCBn7zJreSwRpucQU5Zperp1TtyZDvNLu3vgmLQp6g3njY4np1Z7MMQfrjPpysJcaQN25bke5eoUFsptx39qqcD",
  "key41": "5fJPuV6gPhYiFuXZrKkWADKpmGrfHpbbwxasWyk2MJraaMWkPWuwvDSC2GTJuTE7JMZF66XQRHoh4Ds9mnKzyjxf",
  "key42": "29rWotqsgCa8wUjmzc8qjUBmuJbtRfQLavJP1MUhyrVQbsSGT5VV87e3AKwe68Ka4TrtpqLnCgmVuAH5834a76qb",
  "key43": "48jDXvWpy2B3SeM75RribMJCkxLrTNgHZ1crCGAPW6XK1kBC5UVyZhho63Be9aCHkPywMspfr35SJmaCX2kgW7nK",
  "key44": "3tYbEoCyA9f8cbcQGfUL6VRfz8tW8pShDovpEXz7FXgaX7RdqA7p8wCUsitL8dPZeoLscNXc3SUKdYmEYgmokkw",
  "key45": "2Lq3UQumP9Q9Zk4ZDkim4e3dQEKAxUALQ7Hb2MNTtpDbLBjuARevRzmVWWfgZDh52tqmjXZfXAxTLpScsBNDTQVm"
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
