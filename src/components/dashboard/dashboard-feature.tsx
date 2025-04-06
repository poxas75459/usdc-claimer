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
    "4PEBhEmZz7XSZXf5ov5fiSHHvWcZvTAxNrY72WghGrpBHmHCWDrwKFV1AtpWqKvqzMYGH98Mq8wCftQP4j3dcRGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LsS4UWsPoWpWMxUdAjYgQc3yuQFQYAMPohWenGipYcbPigYeHxkWxF87FAquefJ6zjvFELKDDXWvV8NRCVe7fk2",
  "key1": "55XafA26rFAkM7iDJoSMDzRwx2Qod1JBiHVpBS7urz8zQSdxG8wBRJwjEztPnV52aEv16iEvpKjx6jqHFfNbfiX6",
  "key2": "3ZNuBhiLf6ixKVXMaUtPLsg6am5WQZwLX8so4AiucWRB7KLBxi8DDxVbGz61oGBgdGCeL1rWoGW2RnZn99X2NE1s",
  "key3": "vNob8JqyVb86jVfMMiotmzX4bCp9WYXdFWBkaFWMEEq9FYN1tGiRqQemwYJtqyg57FFYhMw4xmh4hzveZ2ePHo8",
  "key4": "3s2MnfNCgPkw1BPBomzXPBLnBkSB9WiWAK4VsRMtyePpbxAKRJTdUh2MHby38KgVvGieupkkRfbrR4qLfkddGVsa",
  "key5": "41F3Xt6btKTDPRQkjAV7xNPEcoTkaMPaTtLbqAJFDCBwb77XuJ9TsrsnkkqZutJ32uUSSY1a2u3yBmRttjw5eB9U",
  "key6": "2ZqY84FCfDNiGXV34tF9vWcKWPyeY6qPVHo6GLi8kCSSqPoTcFn5o41jvDhhtFGNmSgKFn7uxaXTz61EykAJ1X8S",
  "key7": "2Wd33GMJwcwnMoGdNjrtpTrg4CRj52KZPqPXc4q81UMQ7iEUbsA9nS8Qxi6j3EMQj9hZUrCFZuwLFeik9qFbQKEP",
  "key8": "2xwrroKNbysBY3i39bpKtzrNtRPowCaSia6JFdG4dEw4T2FoPppVq1XiHXGzpBvxEBSVqCZtwEV51oPNaZrLBQFQ",
  "key9": "4QgdHLr2YUkSHxvgtuPYABCY3u5NkdUQXvRW8kNznQrn5VTEz3CCHg2SDS2LPvpufF7TteSvZzHZdefV87zQExgE",
  "key10": "4KUApnH4knKorXAYMnekEQNw8sJx2FNWhmc25zDDiSRqLmSE726PM6eovMA8gHzSukRoXHKviVmYAwwGNHvJY9zE",
  "key11": "3KHg3yn8ExxTY6KRkkUAdP62FvX6X9cvqi8RbMRCvwPsa4SXMaVLvLqA54Cc9uMGnxq9yPYuxp9YEdzW8QXUW5hH",
  "key12": "3dn1TEy1YetG21F3W6tzNNZxHG4nQ8miBexdbaJpRkGPbRPZEyf47bEvRKnFD6HsepCJNjiqEwaPbu5gyS4opBui",
  "key13": "5S4KZN6UqPfc7wTMEWJNXKpxVvxpdKWRqxGLuH3wjvBT7Anb3Di5idKAYssg497nywBoyL3FRwwYyoKUBAJraUCK",
  "key14": "3KtKfyGR4GzNgacvf3qhy8yonaooVehq7SngMind42EuMVX74mia826MMdY4kASgbxUGpAr8RoZXmgtkzNLbXQN7",
  "key15": "5QL2Ao3MtU1JMHgTozJjAYUUUHVS7hKoHpApRfZhwUQhcFNeS6JTa5wq5MMofpkYVpZZXe9fZUEpdv9WyLZGWjA3",
  "key16": "3quiQPAasLcQKDBqbnYpFiKRsEGTj8zptRYuXHkD6dah1WYR6mhHt9epsXseM8bLXzD4ZUtNbDxzfG17TGmgYpjb",
  "key17": "3h58vUG87PdwaEpYYUSMfHGf4bRHEhzvURuEysraDkQBDfHGBkNUkBwVcn5WTcr8hoGnCQRCMGDCPmfjGLan4cRa",
  "key18": "3DFXZUdcBZSCCtWoyhMgsV8FhteH33iDEhKvJNY1Jt5PaGZUdGpGGn7rjqzP1tk8vsH1tCuYJ4Y2xDpPXdTgaECy",
  "key19": "27F94PP3dDP9PE6k9n2FGx86aTgBriNm5QWYKJd858os5z4DPAxSnce83Tb96VJs1nsLubqzQeyztsV7r8EUPyzT",
  "key20": "35S3GVDvKrfV8xghNaL3Y2wPUdDHXPifpBb6hSxAvZjUSKTC48XzKcSChZxEBkEuJfNWb4m5RuuqhDKwhbuicC1h",
  "key21": "3J5EMuYqNNZH8pdfDFKYeoaW4rFGxH78WWCkwLvapG966UafbBXDNZnhCkiSSck8jhhZXt4w5iLhF7ZphheSuy3N",
  "key22": "4ZwSB9fENGSDDYttzdn1p29EeHZgi5kozxAeqeVhB2ZUs3a32w64yWkCBDmS3h1qvbB4AnRhvn6L43xY4dKQ2Seo",
  "key23": "5k7wPcM7n4DVYRUEcxr88HCsXntjX5ZogaBMuoT5V79qQazFJbiNAvYoTRh12a4HT4JytTfxSdsQG4FzLT5LXpqG",
  "key24": "a1RVznLaYhSvVucWqKRFPjzm7rLg4SaDeEiuKZb9p2XUYJAR8hVzAdMNGpTzVH3LCbt5iUd4acyhP8gqm2dbtRH",
  "key25": "3ond6Bm6zLDU9cJnxkRQds4arU6BLL55ySTztbzP2nP6jr1K7k1T5ZaufjvvypQFQWLi3qfNoJYyYioXuvh8LD4V",
  "key26": "3brHwexhzraJJY6myk91upNtcPr5sdeixcbrP1f7Z1aVA62c5ihgsZykoXR44kjZRuhcw9ET4h5WyTtJQZXrPGSQ",
  "key27": "5SZAAWipHYu9xev1ZQuwEwehnhsjBzZ9DkKpzoQsaNHAMyC4Ucm6NuiCR3XjVnt4zJnWrL4MiiDNHNVa3MvdGmdy",
  "key28": "3fCr1VQ4XFKqMRyPMtNURhDqykia9s89jPZ9mjZKKHubs2QUS6LAxqD5s7AQ5WNQM9cT484Pj17S9J4Z2pAxL7dU",
  "key29": "539Ym2tSnFyjzgSRiqPomv6dbYdC3XSmcihMjP1LzM7b43TaTESvS6xmx4vY5cjYHgitXdBe5a55ncijNphro7xx",
  "key30": "5ieVSTCvqbhTKvHi7BnFsyoPZHAr4P6nZvb4K2EsAxSdJ5kKsxdqHtK2iWzGJ3cfSADVLEsxo3NBeZyjNnpUvN5W",
  "key31": "2EerFgaYL3gnWzJDRQPYdGKkr5yVXtVWxprynaZ21fH5C3ND9oacJUha34VFwDPiwpQhfLMcwr3pNVKKBVwzmNri",
  "key32": "2YT3X9LLJqYwM6Q1uvdgbRbQ4kBB8MsLnbZFHDRXCYoXLg4sAbBuWnJaFxAht9i2aHuHz3aA6tTcCt2qpX99E9Un",
  "key33": "2ed9iyGYG7TDftEcvfZXpkZSsvbA5wE94kNmD9bUvpstcM78yYu7aXDnPuewgbxz1iuV3i1eyc9ovF3pVcQBppKU",
  "key34": "3T5N22GvfZwGP5SLbbk5Ae8iKakUYARdR1WsWZn2kpcYH7DABprp4cRjzLidTMo7xXmyGXk8Jnem4gpYpn7r5MTQ",
  "key35": "5chNpQe2N4gkytircMcGqAd5iTP7kiAgLUabpZiYFTXFKWprnp8FHYXfNMQTs6atyMsWeXB4uErCuP2H98GUg7uV",
  "key36": "424hadtsYd3HbbeaL4X677eMTd57AJ4YTrioXKLrum2NU9nTfBbaK4wjhVbF9mvm27J6UPiMEHhVWqij23u9n7hP",
  "key37": "2uKrBjuv4Zw2Rgxcavcy2h72gf8HFZ2fx48J91ansBnQpCdQTQ2URsQVd6jZnW3dfwRFY8Y7qhrXTkKUrsyTec3V",
  "key38": "4HqRWTUwgUK9eTSLQg9j461tJtd1HECnNDxc1nHhptDhEJA8V16bajYoVD2FGs8UD9rBLZorSJ1Pi9cFXLdmhi11"
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
