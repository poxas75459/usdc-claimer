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
    "2Jxf7Key5VzcAY5NgkkswuMEovh1D3xcbZV6z7YMhJ6VBCvzk3vJHqCSxzFZdR5cLoheDbUwypRvXt7ZfC2aqvRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KXyxXCmdEudYUqdg4tXBjKbMtBgdA2wpaAZYK5AQXtd3v4q1nWWtbhqCpu4M9RDBt1MJomwuAtJd7en97zqwgCV",
  "key1": "44nZpXcqoEZJwmctSxk4JRx54opW4whsYL1SAZoE6PtGUT2P4JBMBG3i7v1jLskTmSRYhAwGa8N9ALkk8KeZXccb",
  "key2": "25oNEsYSQeTCP2HqKmqn23paMry7ACAfExgVVwb5Uw3ztBar6Umcv1nCxReC86s9PuS5HoSE78xHWh8bNzvPBBh4",
  "key3": "5YhCxL19oKHsx1seMZQkjVdaSpbVVx76hu1Vb6X3kni4fDkkq3bmvzusUh1NBbvh9HmeoZfUh6yUqSnyh8hr2wbu",
  "key4": "rQPfdVpJxTKB6ZzZEE3uCjscHPDMCcPjHB7f7yPN69Fndr1xkKTTXLSuXUmHNDN6W7mtjhsiaeN341Jmimamfrr",
  "key5": "5nVmWJWpzMyRXzKPXK1GAvYMyQVdMjjU1A7r1xdZCL9GcjNsJRu3ECzZvEtGiMDbHhwkfVFoYdSYwWJLd2ZYQah2",
  "key6": "4DqqkX7TSMmj5XumgcKN6aCpACnJsoZNsBbipkt3KT81rQKit7Te9v38GuS4kmbsJMNc3PqqK2FUxpnAWYooqUdk",
  "key7": "jDrjishVNM8SssVe1yHcd1HynfZwre12aYxCkFu5UaU5feRCJWgDfWhXLmkDFzMADPXGPs23eVjnwCJf9JcELAh",
  "key8": "2ZjxXHwffubteokwacuoCVV8xjzE3WFtKysEfrgv6EsXY9wNSN266eBSZ6UA4nPMqWWaH6Majm9D5hsyeH8dx6k9",
  "key9": "2R8HVjxSsxhtUFEKcQWE2XYBe9yy7zhJ3PQ2ArhcVocZGUpwf3CWrX8Rapv2D9gKQr3sjQfHBae2vt3GKPSrSYM8",
  "key10": "3yc7kc4BSirLscu4zqRDwHkB7e9yTcWHZLeC76Myvi4BabcC6gwmaqSSK56vmp9T2wgaSC8u7wSD8VDB7bEn7TUU",
  "key11": "5D6RspJUJEYifQbqgUeuxUSsHCpkzFkZEHVBKWnP1LTRzWh2F4BQZWhNTyX5s8ES7U4rVZ49Kh4upEXQVa78oXy9",
  "key12": "yoPHGVbmr1HgoisZPX76jetx2tM5R9TDcQ7oeVqUquyYoXp2z18Xta1xRXuyCmTfuQosHefVtF5JaPL2cXyEMi3",
  "key13": "3TzTTihw3aUGZa6cJmioKvH7kTXak15gyMCZwz2fjtDU7NwqehRoBXk58RXCqdNUtM4vz5Yi8AqimeDyeKSgnJ1o",
  "key14": "374VRYLpzQkgQq76zrNB26Z8LLSs7S4cB5uMMz7qWrWhKbZ7p8WxDeqmMaiWjd1LSyfoRPGhHsGRfvVnvSXFEaJg",
  "key15": "4zirwCAhcJoQWXfqeSgfRMNErp8ws1Ry8NQYEkWUR4yaVg7ANx2rZtpP3fc5y1bmi1Z8UtjYbKUKhj4ibJahtL6V",
  "key16": "52bWYr6pPMFX9gMEKMPvSBmfNFj3x9UxLJoGfchUamNYrz1vzGFWePJppr5Awd2dJ8XdSPY29CzxqrmYBswnJ3cV",
  "key17": "35z7HYTcPUPyJCACZyermmBAMfatqd4MCQPeuB8NgRKwuzZxHhePWf7zJzmerYgSH4iiWTUAEAUyxvW5n5zmjwS5",
  "key18": "4rKkgaoFVX4n5kC56AaepoD5oWumj8TMUsGpGxd1pfu3BKV4rtVyZkDNdkcKzEKAVCT2TeYUFga4TocG8PmS6BQM",
  "key19": "Jf95XicuJteZ5LVt15cS3sFa9R6Sn7iJ7y3WyZGktHpjDgWWA9pVa9qf9oJd6c8f7wgMBAnJ2m4QzuYNwUafQ2Q",
  "key20": "4r1pxHncsy6L1VmUMf95py5WTLFrfiYNMn4tGgdUoiGQevdskF4whx2TFkYeWnaHAnu51Bo78ADK8VKUnRvLFzXt",
  "key21": "3ofWfqDr9vmeStUUYNvbS8XPkMLWhtiuiJcCMim5TxREnaMFQtw1rqru5EsSVomruWXn66bLPM8T7hMo8vpRMpF7",
  "key22": "2NmDaKYF28aDjp2bdT94PbrdjbmifG3b7d9bi63LTygUpboZu8txftgVVAC9NFXkVBuJEcyGGSxzwzZTmv7FkU7H",
  "key23": "4oFzazC8jAowCbzmUBCjq587SHvJjBvu7FMLTXV6Us9Ym3TBnJCmNfSW1824F3FTt1RAuohHfCmS7UDQJq8SvDAU",
  "key24": "3LpCgTMYkJFo6F9x8BgHHQSZ7Nwt4Nb94zFkvKQcUYcw1Wi9svVqoXcpCxBCKvdgU5qYe8379fXWrp3vHEzmt8hp",
  "key25": "4fAB633A6tdgyothYhPmysbH3NMQrVH7fCfmp67UwkPKixwz11Gbky7Tg8ENQJvY21G6FB21hGMrEEcCztqRz5CF",
  "key26": "4pcSEh7RhbCQ362rp6Ffzjprtc5VXpTyabVEtRZtkVf2tzPoKrU4g78dQwxt63M2AzUX1pGUAKWVao3pRv5G4inV",
  "key27": "3fVJbgoXBT568TccqJNPztDgJDJQkrQt3kQzoc3t3j29SVJUT3gkAjny7CnqtzaBbJbhew7wa196fUpUdpLQGx67",
  "key28": "3JKYwkwwN7QAiUwTG5mEUXz7nB9m35DCR9gievvZZoLjmgsASgFLKNhBJK2u6utqgR7VcNuBaCYXv3rKAmD5psXK",
  "key29": "5EPoHnAdc1pg7t7TuuCYcst51pYDMYftzFhJmy1GKHTsaBGAsJ5V7cFjn1SAPSRHEZoDhuqUmE3hGZtKsBDNv56T",
  "key30": "5ats5SKQsbKiPm7i9HgWBWdpwP6rhS3j93N5ei4wt7tVT24ePQuCtt2AUtN7ENcuzB9XvXawQgcyPGeaGXwHqnzf",
  "key31": "5pp2W4WS8qZaFK9Ew2bpDbUzK19Wfu3oM8sJGpx3dZgRRHv1Y3R5HhfAFZ99pdVeYUNT9xZf4AmPx6kvapfSHqni",
  "key32": "37F6WwsAtitZBHfXgeBT8i4gHzr7JFjFxpENwfNbfaugBdaYvc7VnJPMwxAUJJ9oVbLFFnuCj3JoKZibzKZNdfp3",
  "key33": "42KP9BJtfYDq9HDUM2iQ2m5oh6hEe4vnrUz8WNySyygcEWQ2hrHnNfunhuhQKbGNDK1Mq83r8NFn1FgFwJ41DPCg",
  "key34": "2Ec6AgLQWEUxH3a2DmG236heXjeBG4SFmyafxhSAtuSq8mz2mkk13WZGqbDKbZuW34NnJ8LGtvtmMtKPiP96T9ca",
  "key35": "5ocRT1GcbT6vK2hPzvTfdJCkAyvQ1xZLpWyyCM5hYXN9bBdYAYGv446Pdr5ZyPAUfJtuxWCD48W2nqZLFfRgpCtA",
  "key36": "3GqKjXtbGh7sorSs7yiLjmAm7mgCkzfJGLtB4QTrgowAVet945Cxqq4CuPvketdd1hteZmHHhaHj89uXBYABL4r7",
  "key37": "27QhTjJse99QTNHxPeiGRmx76MoJkvSDgYiTcYGY47qFYdT2s3zheVk75ip98VEQo2Zm3XgpRTEXdHq1WfPB4UkM",
  "key38": "2cRo3S8KeWkHav5Fca3qV9qyGiKKW335LGtgB6V9YNbyJ5eFpKkQHL8H2kFo3WAyqe3XxwEpviFEaKzAyv9x81KQ",
  "key39": "5mM3oQWdGgzZn39HQQwNxEeyhLtnTdMiqtqjQgEypxQHHk4DACeBcxP6FAexkyN4eiUPUUPGB7HkPz9rPikGJ1gK",
  "key40": "4a4UraYrs3ZJmWgihT2YfjkUNpot1PSmNP5Un31svKF5tS9dabwmgHRSvoYatRcdmcTCh6KN9NFVtiHgENPPzNzi",
  "key41": "661mbW9duaATVRAavdWS3hrHM35Bnhr2g2tk3v4By36CCpZghgNjLs1wzdKT8RCwCNjUTYqNkUWTwp6LHixuChtm",
  "key42": "2txPgEk6dACKRcAASvhJ5MNgxj3Y1dZqpb5YSw9LFTsauCZQqBZ8xjfEztMz6YhzZMfvHnoLbthudNFpsgy4Xzpo",
  "key43": "GsssdNwYSJxjQV8VowGKw54uKRZa9uLgKuHi8QLzGxLouHLjHKjhqDem3n85hUg7mKeUHmpcAhiAEa97TD5K5xi",
  "key44": "YB9kayfVwVcxPuTTBobCPvF49eac6PiiHhfnj4kMHeN7ADkEN9DPcG19zALcUPYX1PrRRERRUcndJy5eygvsiU6",
  "key45": "5fEAeRepZXAzPNLHsuCJeWYtc2UxXQ3QjV2oPKsoU4BYdeWwhMSSzG4B8vQbLd87NSk2NYs5bqWHditQGb1ewgpY",
  "key46": "5DXmaTB3pLCBNpCn7mcTCUoaqa89DwcuuEKgryTaYj2DHV3dH4rawB6Sdw9QyyunLCGGTFBTcuGdjfrERTtFZY8U",
  "key47": "2sGZXWiBvT8JuThtYrg274M9dxkpRShf1b3RXAbB4KZMxRLqzWow4vH52N2SsiyMwLfoiwDJnh3cjCkXwEXswY4p",
  "key48": "4EFQf2y9W6Q11cjgFWMogrxcgpdQXEYb2ptGEMpyTziwZZztvNhpgU4ZLpMnzCxVgah6S4cKrGSoPAmHMBb3bQW5"
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
