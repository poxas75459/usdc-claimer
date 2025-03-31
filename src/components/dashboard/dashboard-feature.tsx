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
    "3HtknyaR699KZVYEPzrLCoGtGaRQbqtQapyjBWkkJUAfeAtpozNusXfwoQ6sMbL6S3fH1qvaHLUgeoxJoVZFFd5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vgc1n3g6K42UmoSnZ7J8pNvPWxU5wsaMcMgY8WFPjRe1z1RE3gSZdVZNfJKGDepkTKFWaWUwbMFteCjQkrdqLhZ",
  "key1": "5BhPNrBXjmfVMn3XZ9dMf3KXGhnJj1ZBi4etKfvBRA4auqaqQ29YEVF7NmDhY1V2gL3hbmRAaiosLMXdRNc699d9",
  "key2": "4fz1NNYTZMr9AcdKU9CryYe87Akqi3xJDLvY3CYm4XgvftTQMUXLNwYmLmf82hkvdzzSaCaAppx5Q3M8uXsXrX3N",
  "key3": "4acnHzs8EZZSe8E7f3MGxHrFcpRTTRvjeYC337hVRfyLv92pVACqcUaCyj6yvXj3KoDgv5H3dHuWjyDT3YqHRtZo",
  "key4": "4Svt27cpVBcScbPig1Ufe1pAMpY1WbjBCFSMYTshMBcA1gXHBb76oRj7sFv1SJdL3YWkiDrchpdv1X4o74SRdPVx",
  "key5": "5bWYnqRx92ryuKq5MJWKvJvkFQ5nBoNNX2sxguPEDtJmwsrBfHmFRee8M9frMHquaH9yR1qkU1pJCZhq8ZcsEo6Y",
  "key6": "4Cmuui5x8vRiSGgLffJic6EnMWuRYT78WF6W2AZxJfjWiayjMortV1uom6fXcEykmmNACScKDLfTrt9ReBz8phjY",
  "key7": "2ptSwES3UmwmqoFs6iiGbRVQgo4VCR1FvYoy94fJHeiBVX1Fwwc5mYBKJX7DejDPnopEYP7h9rvj9Rz2WgiuusJA",
  "key8": "28dDB67oVqBDiPerRdoRTXixhscckJT3hhgDHfJS6ZzKCVjVLZxYnNmrVMKqsNJSzsDVzHmbdzbNMQ2a9nT4nKgb",
  "key9": "2EJcMRpgFeB8g76KnNxRLeyaRL9asWfpuhD68rfkXdZZ5pD16eNiWYNuWMJsAysiJcVPDV2fGQ7fjGEenPhBrWc5",
  "key10": "5iLirE9gPRCwAH3fC4spgDwqi3zW1ieSHfLDHtXvkRUHgYcxBZvKMNtgxsEzvYrez2dLWdpyB5oixAE74MQjw8rK",
  "key11": "61se4khbyBbqQqcDvpVs2k2U75joVr5rXCJstuVwi3kRFRPYpPEzGZCu2hDt8Gd6tQJoJ7fDGrxQ1xvKRePUG1i3",
  "key12": "2u34jM4WfcLxuFF8SdwvjMbaU1RT2JZBnXVnTeqNwoDg1QPpjHPgwhDDUsBsDCustz7piE5eNDBwGBR5vxZMCyfw",
  "key13": "E6un2hYrJcFurMsWAf4PNJC2idqeeMSGfFB46iqecerzm4ZvdhMfRJeiK5xS1EiG9rXo2f1Sug2xydvc4EqbA5h",
  "key14": "2jc4uDvdbRp557ugnir4WqzU1w1CeqraxWZ9jun55eiGokc8jSvif51qnegKRV6kVAkP742PFgyx3DY4WwzThBqw",
  "key15": "3XfBJBWprhRyGwmMRsbKtsTxJrNx4HAp2r1TwWqDd7p4xEEBp93uKwqkndpbCTzVueuTtSZ8TouFieCxvrkGFK8i",
  "key16": "26FhGdiAfAppsBgaipZNwf5Kstxexz7temfJwNB3jZ18CcUsgd3LJ33oBMVmBW442S4Lv8kciTUzH1zjzoHknYya",
  "key17": "3zNjZRQBJk4pvJgeN1MrPSDyofBKLkterMPxLhuW3FtvXzreGF49Udg2QE9VBFWma9ZWGZu5TPsw4AgWF8aVAJzM",
  "key18": "4krWbYY9iFXwfY7uhgwW4r1W8F6QNK9r7xDdVoeKn93rkv7LD5JhH2gLHk3tB6ytat3bjrDTmMvfYtzfRs6BrdK7",
  "key19": "2LpTcEDxEbGyApajuVsDpqtwwJWCF77owN6ia7TJnpU35aD6Cd18TQrjCfZ2M3j5BdSWdRwFJ7EAKwo2fB95sqbh",
  "key20": "3KzesKy8fcpbJiTcBpM6e9zoP5n5c7mA56CxHewfobTXc5yqNqcttLq85c5iMZfHMRMYY3wxBGKHowt5MLUM1m3m",
  "key21": "5hjPKkNUMNubinmLesr7xsMmBLbe22DLV1jjUACrxzqhtmyGy3fjpv8CRdjawDeE92wXrWnZNgyxKKNjbC6Ubavc",
  "key22": "38fP48wu9CSjnEN8dTuBAMuk5vxSpaMtyoqbauHrsHjCtKoW6wwiCBf2v3j69DnJ2rBRoCnyJB8fPJRQKHp5gWon",
  "key23": "4mFwt9inVXp1ZxfPr36jabAZCcekNNZKF75oP2KCs2faqiAAFRwNPyfbgqqp9t1EfdZrhxf5duACtCh1yh9WqoDW",
  "key24": "hahYsK46UN56vmv8ZFrKdve1DXhe1AEAtLHF5RRXm6RLxW5RHvEiCo6s5w6UwodSK4ekpqSY69pw4A11fFuyLVa",
  "key25": "4QpDnWe5A7CgyYEbPkGfJyx93YT3XBVeGHThccAWNZYHtwpdd5cReX1458Q8mpjia1Ey9Pb7P39zTKs2cqfFhxRw",
  "key26": "3HTKT2pEoXw5viwjtWcF1737kCS66xAMXV2M8SEJfiewo8381nDVDT3wbDwpAiiKQu8a79DbUpufqzyq4DSTyns6",
  "key27": "4iU5Y1QkcX1c2pUCDKbT6hcxthE8u7Apo7Jgcz5N2zdJoTjreGgdQ1SP5DDi6pG6sfki75Tqfr833j1xBxwvAqUW",
  "key28": "43DkFiZGFmViLnQSYrFZq9e6wzgNecWxVWL2DUDUtVyYXeToMhnysm4G2LVo91ha74bRxp3QEQXcFmFVt9ohUaTP",
  "key29": "DtghF9XsbTa71r7y3gJS2WhRkn39Df2nxYMuoKQpzTAsoGQjFzFKKEB69VM7zbbPrHXL7qfwegJR93fTAZW2vE6",
  "key30": "3XYL7iQd9RcRGWRjPTyLWzZfsnMJPjrA4qZU2xnGMUzk9ZZ4rzinuFeESp8oxSiR1ZszTJ6b5cNv62fHGEjaU1TF",
  "key31": "5EnhLC421NNeZCAsgsAieiqNh24k8tuBWs33ei5AtewXN4qsxo3qWCXYmiFHSvARu7VmTb7rAAR4bUkJUBirG3xp",
  "key32": "MjvWKpy83M5qwp88XLMab9GJGCqBduSSXVUpXLxnrs71rLPEUcoPn5Y6xdFnwj74AcqdYqW1XtU4h7SGQ6VcGwY",
  "key33": "3pQR5y6YuzXToPKJjq4qEZDMd1wxpRSC2w4tZtKjypnyLbun9Qe9ory1rxz1VpmvTnWTDgf9D4XhLWPvkGEVhh4T",
  "key34": "2k1utpFosotRSzys5kRv1ZucQLp6DK6XvZynQqYW3zQf6zKpsKEtjjezuCyb72jZeBoVWQp447MUbXskXDoiV1G8"
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
