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
    "1mGFq2d7Nnn94TTfXZmDzecTXThtwbTKxL45kB4yqm6tXRUAWJytGCo6FadtYB9YwpRuYrcdQrhkfKGd4R7oGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QJxw1haGMzD8Tkf2NBt74ZUKaXR4miFRw4PTvCStyNL6nq1o8iSQHF8WJ9jZ6ZpLLcT5D8uvcVcMpbFQBFpzCzn",
  "key1": "WqazkcuRuD5HPyhWyTKisZa4XqCCHzLLtYUAsjpJ26FfLWqa82tK15iUg44FkrZVHZ2FoFWCET1XGJnGTugPikg",
  "key2": "4SPXpdpbLz3FqdcH6YymNNrUs8A6DUvWDtX2f5jWP9ATGDWfXJwiw8GKYrRuZ61hk7bYv3WkM65SEN4vuB6JBCpx",
  "key3": "4nfGGVMtay5k7x1j4REnm1ZMhAMyLaRnY99iSJiBnMgQWfYrLmgvPya2koMgUg9ArkkSoGp2v37VCQ7SFdBqwwBW",
  "key4": "5C4CSnbiT7npAnkQXvzknGVMPBiFbxTnFhvn6JXEEU2RX9UJ8cvafxTwT6fQsBvSmZJrGFxpx7qBP94QjbNq4hRd",
  "key5": "2QuxNhLtHWEHRmkGJcrN3YQiEcoZ7tiZUDrzgmAEwjpBrVjxwN6c6mYfkaTXHv2ZzRF7Y89HPiKmCCsHQR4EKUoc",
  "key6": "4MPz9DAFy9JK7vKKMDwFL4SMUqWP2Bv65P7JvhzeD3RTTzq5SYTHGCxAdrmcUD9gSthjUf9BMAKBmiYXgFRmVwcP",
  "key7": "5ndxrPhD2GDDJn9H3fsZHSrBkVmTVLjCTQRdeiwGrzJyRePbW9Af2BBzzrMPobzWq6HYBcgrDkHJfDAJZZB7Uxnh",
  "key8": "vg6FHQ1gziuXUqkEDJ9cjhEW9AYpQ76gGCujQCENJwjWFCGoF4bc5GpADwNTcDFb9vWcA15dkj7RhwfiVJjzpay",
  "key9": "5vWDyAmahBGADNGQRvggWrRUSToWReuY4Fc1JaBNMDomxS15PsBdUrtGLE5ybYgzL8njErBFE2Uf3nbj1TVoYzmr",
  "key10": "3VXdUcZjPyCfuFX4mQkwCAxtzAfCquUHrcAZ5ZUefFcfuwnNXLAWzTFTww37vEGHgs6RURH21ByAtm5cwUB8De4p",
  "key11": "46zgyp7ncvMmYcHpD4yXahztMoCrsu2jCpYjmXvZhm877aTKTDfaPyFdVHnfJd9epCDregPeJFzd2iWhkQLr9fau",
  "key12": "29hGWFwWvmcoqXaKWyxUSE7pYD3yZvwUg13uD8AwV2fLDyWAJXeDPH6ySAZ5kKeoHm9aP3N1q4R4iDV2ppR4mnfr",
  "key13": "62R9dj5PwvGRwA7QgZNRGuuBpfULu6mUVmHCB34tupS7rZNH44FfgZM42UbTVXPdkryAybQbxFdoxFJNA6HQZAbW",
  "key14": "2rMHVzSki3rHoZTQvksaqVySDVKx6xW3hXiyiA5cHMHjLirSzQ2rvRXhgKr2iD5CtcNNn4PK2uZHyhy6Mpary3U",
  "key15": "2YfHRA3Lmmhh76HfG89CYVtAhmfV2hmDJfsMe1tMf9g51CGFJVJ5ZE2C2ErmSsxQ3yALqGPpeAzCjp5wiHmMdYwf",
  "key16": "2ndSR5bNbYgqcnpaMmKrthJBBMkuDruk5LfzoLbnPu1Qsxf4vbe1xDvbEp54oroNTu4Ni2aoDVbe3589TNr6B2ZA",
  "key17": "2HGbZ5uQKVuYmn3bpjR8npc3Ai6WvVYiZ7KvrDaVzdtRByoSTwk4xRq7EiwBpRBWpqAsv9BGNHnRUrg1BTAqxiJB",
  "key18": "3RbqgAjLLRFW7MHrs6CDvPDWSJRE1pv7rWGKTGUkJWo1hfuikA7okkgm4ZAoRJo7hm6hnti9Wkto87DDuRjVLbs2",
  "key19": "3Vws5tejdi3BS94TAMLghVTs79qzCtyVAF8suZeWj7CMAeCxa4QwuuJuttT8L7yFZ3XS1zjXsfigkFd2AkPBRh86",
  "key20": "2LjY5vrF11Ftwc9tfG4dfm8NMhy7LFbu1N2hVnfn7BScPAiTiHpPX56R4CpLCbHXfcapW9zgfmChpuLe7TmcoG8v",
  "key21": "CcNsdut7cQczdoefS5Yq7vEbgjYnZS1pP8jDn6qZB9s19G82GrRyS55jSnxPPf5z1HSedCyYFgdsekzs6mEGqBw",
  "key22": "5UgbKE9W3F7B157tb2RbBEruFsaynP2JcBorNZeed34QZrbGNoh7D8MAPqHbTCRXZwnPySL6sGQiTAqf3q2McGWL",
  "key23": "3fdeb1wgWWnNfbyxQFwQfJvzLUxqTg4WdhAvZ2TBJGL6kbo5nfE1UtNLtGqWfuUhxqbqnADL2gvRt6UYFVpRVaWt",
  "key24": "4G5v4oAYLdCHhAoPLimKWGFuTDj5MFyWwM5ADbJA3Z8S5ESGnibebKeweNEu363GERidRRfixJGr9m3SnLi1bLuB",
  "key25": "5ddvfMcpnedewHNiW2XSkJHY7Bb6RxhfXimvj2y4X7TtiiMwYxkmeuWyGx8Be6gVDu8UYayAMqqAcXfTPApMmBy6",
  "key26": "52U45zCWVidRN5dzwoGodRM6bF63YNJHL1jCMbdJWK1g1tGFiX6UGtGuTcCr9bGcPKcrvLTtRC64CTHDd8b2HjMz",
  "key27": "3n6hK3S7odmmAL7deoDUk9uASVaDFh5SD8o5s72ZtQvFXGeBGWU49uxK8xgpaJpp6UYVDKfmaBRnNqi9QGA82pgY",
  "key28": "5TGR8LoLVLkxb7MeoCKZFtcj5kaFEomZkkfNHBadzjM5FBAzDiNisgLLczWEFSqWKbssmPjqnPKfnKMg2FF3ybk5",
  "key29": "4r1u4gXQy74AnuSNwyHECejVyvNnpbTyaY8apcYTSiVkoYnZYLviLQPPcTGbeoYeXVfyKBDaLHnjVRp4UnoYtufR",
  "key30": "4NCPcd6ik3t3aPPneWjqsiUgq2egpaqq3q9rhkU1JzXiYWhjMkFgXBjaYgNewxdTSFtmHB3AxR1YaMUGwXhex2YN",
  "key31": "4E4PmPVoy4rEXmMt9VuQzEFPaGJLgLL3rwcfTmW7jErzf3rzLCJg5iE9shNfiJATAT8usgHjuN63MKTRf3nGyE92",
  "key32": "5UaUF6b7XojqWtZFDmVK4Xi7qjCxFULimUX4thRDeLNA19XsRFLkqepmPPcmdh54gS7G6KBsj6PMThwLudWpRrWn",
  "key33": "2EGBgExZTKbC8WmKfNTZUHBUDmehveducMGSn4XDz5frmqHKZNbAYkZRBqgqvdqKQWExXHbKVWcWhknkJ6LwN1jP",
  "key34": "5hz7ZBeM5apJiiZZtYK4TRhK8X3KSHGVZV51USYTNe7sZaAASn3H9fLV99jkX9hUuwD1sxZduLwrngwmhd2pnbVC"
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
