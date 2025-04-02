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
    "3hiqxA1oqUf6MhUZgz7nTyyKJZRGWMuU4eXJLrMWakYdKu9aC9zuvpA7dUXgDA4PRCQivHBNvZmi48PoH2BzcwMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29qW4oB1j5bZwbcgdQX3ZQxPs4hCmuWRyzeJDJpLmBJMAussJ1dBRNRhX5AyBSBQzcQd8skaQfPBjDQbpBUMvWnH",
  "key1": "4F2BwxuvJcS85hbpSPpurx5HFacK24eQxivFCr5TWKmXzANESjfhZZRbjMvgsX47fnp6Jn574A22JJW85BC6cJML",
  "key2": "3fxfNeU42d9xhxkBWCtvPx1NWr9q5pgRrVvJrUHFseUHkdsEWAbniABNAreKWj7uKtwseRVnirQPg17iPvCvU4na",
  "key3": "37VhsFGMcB3bWFTbsUiXCz7XWF82J1cYLLwmjDFz4WnX7SAgfPSfLGwCmZRYrFBXQa15HAp6UrX5LpHmEpJw5LLe",
  "key4": "m3LbVpaMcBhsoXUtR8JmBxQN69ND5duEmUz16wjBm9M4MPNmRFUeJUEU61RXBiZfWDnTjpev32P6NgkzLsnQtor",
  "key5": "5uycjEEyq6NZuDa6G2swxYCJYF9XYxTuGyECmWBQ5wBjpa455Vpvep7RRSh4ngotkyuQREoyqpsw6JYCWR1knXWr",
  "key6": "2rss8quUQLKNQv271GBgV7tNU2MNvjaieDgMwAyUSpRbC8jV55mVFTTmzwy2kFyvBhyvuTwR4z25cDGpDBGi7ZL6",
  "key7": "yixLshfutieV7x56JhBkpAXUrhu9upYQAtt5cSoj9aNi7LWwr1LKzpkebVaZy7mmvHYCoAMv6bU5wwgXyMeoktb",
  "key8": "o5FRTJEAtPrHHGuMzWoouVgeY7guGQvKNMSoJDX5resYfaLp6ciraR9RU1yQmffhV1fW1YxZS1PeP1YWx3BPa8a",
  "key9": "4M9BjjB36MWFYg22upLJyErZYm2Ru88Qsju5G1aBDzYn6xJc7ydgTJ5zgTbF9LGpTsa94mPTUVufLFjrjYusEg9p",
  "key10": "3Ztca5CLReDrNAfFi8zXjycVc51iwP2nUJGsuySZgjANh9Xm3jA4ryK9VyAes2ZNYq6W7rFXyMeLSa9HfKEEfqvD",
  "key11": "2tP7ynidnGNAryoA8R9g4vdGRzBJdLEAehm2ktfcwUskgGA6wycsvfNL938mAcuLVQQx2xa48NAVQoV1GqmVB9kh",
  "key12": "5cKrA2Uhsd669pjYa8u3R3jUDS31DcTUFhBF81KPHZofiZ9VsWJiVS2BTF6T6vQuSNhnqZGvcJZemCpJjPfBRdT2",
  "key13": "31SDDqaATkxG5NVaBqxzjvBeAt66134wz4ZgsPXwa2HkPDEyGcfVUczL2HqaNtXDZwzo33poSyHF2g3qYC6vqcH7",
  "key14": "5kV7SFGceranw6Y3o5dWxP5dzHVVehnS3TeprQtSiivNT4CnLNsfLWSdnQgDVH82UQUix4MRBwYPgYucytkuJtgS",
  "key15": "aSBrPsgXEpgBCAnwf9vRY5fmJndEanVRLzQQqZM64CrgtzZSndhTC9P3SuYasSfgwTHz7Jh7bLT4MQ81KzS9jER",
  "key16": "2x5WqXnckEjyrqjjJgQ8UC9fKPBoiSBcuWStqemFGvYMxAMWCa7LzG4UWYqBwQkm3DZUsYGwy1xFHzi9b1446KWN",
  "key17": "2pUPhWkrMiieR1fW61mk2CGXHDiXG5M4cBAGrxWoc3XxfsWxHtyJoEQN679evgupx2rhfXdW74BogBUKq4G7wv8X",
  "key18": "5T37Xv9JQHWRj4UiQ9Ur4s9ssgL6kwTXvsrjYmvG4ksDPzEK9V9i7fpHBHp4igtBrmnYfFsMhsb4bNigzBMqfW8v",
  "key19": "s1TqvgAAuUhHi3qGBmV3cvjLiWaQusTKR3jftqaYoBJT4k36zzKagkZye7H7TddiT8KwHRGrZgn8SHCpd21pHHd",
  "key20": "5d9dCFBnX5CaM3xvQGRscfzgdUfnNFNG3zz4X23YLH1jNLX9TCCGwaQYPksKkiqnhdtct8Nnwgn9jogxts4dioRb",
  "key21": "23N93buocCx5kA8oteF3TrFVYCpEdio9N8Xpx8FDCESFiWQzVamGdihK5G2LqdCbm3CGknvaPUmcgFzifT7F2XTH",
  "key22": "5uuvtp1oyeLiCQMCesRceUwCrdU7ni7DD3PA43FWnzq2hjp3uTrcfLhePFfNgsWizLADGapVoFzFFqcjsrVbFRoS",
  "key23": "3k4c7B261PEdqaCzQHGa2Y41vD3RJManJxqAfHPZoXT1gE3hvWAep6japui9U866QqxKwk2Ng8UQPvKR8CYf1z3y",
  "key24": "JGd2MqbBdKxcfeKqkurQ2CssASRePDLYTNBnrUXor4dScf58zNDgsnUdwRFwV97yBSQdUe565EWzSL4tZ3WPhqF",
  "key25": "4S9vKqJRhfkc4NFFrZdg6cwXJJrQq1jpFUUoGfWQhrUTfxKFZrnvQ2xYEnRdYgKguB3suApFj3cNMHKhEYbBQTVj",
  "key26": "46JWNhZA7awm3w6G4caNgVWSAK2b8BM7XP13jXkFjtZszBn8QCbD4KuPy5C3YdreBTAj2wMYYQzhbBKUzKzV5yx6",
  "key27": "54mWRzTgYvAjiEu8VAJwyCcP3Gp7KXAZ4mkrYSCxRE5MFDPNHxz7cciZZZYrMtMw4DSTaY1CKByjB4bXgSiLKtPZ",
  "key28": "iECFoNguPJBWWJrYpMeE3qvnGeeADVANtLN8ayWoMc36upEA82gqSTyFARxHPi4dhod9vjG76181EwFLrzTFzNh",
  "key29": "4RueYGp2z7LnMw6YLZe8QppJD5gma76ifA6NikJE9NwqtY2wxNLJHmZu33EhekjtjwJ54dvsLrnghmCTVKC2sdkJ",
  "key30": "DUgaVjiqujNWRnQoGQPeXai3mrkLwL7b1iugMkTVykeBm5C99PAhi8ACLFgpM2nUMSBiyUypyrj7DwpW2VR7psk",
  "key31": "3otS4UGHjcFvnWsW7uSUtTaetjzFjHijLHzwSFDXwLwC9CAeHQWqaxiSqC6UTvky1ZkTtmVU4gCBim3Jd6DWhre2",
  "key32": "BrD77GcsAYTUxBDrFFAMGjxpsszK8Gum1gfRpVfPu6rSnnvVBRaPE6E6Ff42eiaxyekUZzMiwh6YKoacmJQpF6n",
  "key33": "5dkb89wDrLWH54gJF1htN98oMMrA58uVFHfAQ1Z2NpvDVBkyUgFgttUAjUb1VhdrgLvieJyExUccNTdMLftYzjRD",
  "key34": "NAeZTmRJRkxj44nSKiEtB37SKKNjz7KBR1nG3CVPpxB5uMg2o256u6udCKJ4vXg5pYzbHYAX3zE5fVCWZBz9idL"
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
