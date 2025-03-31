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
    "5DLmWPJorwAW2ZX93Tu33WHboMeXW15pmzsUMV9NeczjBC6Ai8hdA8aV11VTE1c2KtR1kSg4VrJEVfr7UTMdjh7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wD75s6gAYGS63F7wb4BPZHtqNgGEpGsSe3fm8LdZeaDUHnThsXi8hmNcx3nhzS1QaPPN7kUUiBGff5vhwfsvDz8",
  "key1": "5bFWpBANooNB1TyuRLyAeXBFeX82EarrAcY1CffGwkoT4v99qTHmK2oXBU7sEf13mqJboTWVNvor8uojB9QD3XJy",
  "key2": "34ozr9Dd4WParkhJ9F1mfAT4YZASQJnes3HE8E3Me4pwwJgac8BqWjCGLAPXjm3UvKngqi2mpJQjMYZsXwBzVNKF",
  "key3": "3fdZijiKSN98ZwNtBqpD949eZPAA7yVCZtYZq7WyvYN8wssUXRkz3J8VhjUJzGTe6FpetirbUNiGyvBYP8EY2BS",
  "key4": "2bhj2K11sc8TzNnwReTg3YpBAzqR4S5yPi6ZRWxEC9F4J4w7j8rce7BfgZ3mVyrveb6naNDrNxBhmuwcKXM1Sk3c",
  "key5": "ZkpvHcby1EZETdnEvj1Zsjrse2pgJapovQb4YV25WQAJnvf41HDXod6B5rnheWLxXgw8NU7LZCLbFzHXUtS2LLK",
  "key6": "P1vBUF8zjaRuHASQ8jPDGAMLah96tCqz9AbWBP9MpeqRUo4Y8Q4BVJ4X75Ubz99wEFRFBrXRyGTDAmhVujH3rQA",
  "key7": "BWLMNadkF1nZ17Z2LMFvw1R8BEbUHBp2TwJdpBEsvJy3Ve3AZXvoEKYanX7FdxZPHojXX1QatA2noBX6w64sqVA",
  "key8": "4BNUDkA3eYfLkKkd35MwmMPqDhF95q72ghvFjk46aoMPR8uRgfXdDYAj9yg3LGJA8pHn9q5PvFw3Haj4JBiPXhbD",
  "key9": "28AupvVmRc4fMcudbGSxxYCa533bEN7p3N3Ja9J7GtBDSt7yHNseFNBUc7sHP3qecv2mV2gn1kQsuUKr8mji5QV8",
  "key10": "41qSWfxsY6SzupTpyNoQm3aJd39SA4edVSR325o1MWDAnXBxyFooLp1jZpKMnc8GsTWoMa99hovYj2oP8Yc8fcDP",
  "key11": "n7K9Rk2bMNuCspeyVJcMe5BZaduZRhnneGQcN3MU93DDe7xDxAMyLaG6UqxUTuD3HaVaNLUsT9hxKXaBhRPmhU3",
  "key12": "5kqoxQxardLKGT3qG4dtzEj5yp96fB4PsXcbuhA53JgDMndRbcwbXzuCXwQeNDktsE2NSNYw3SLuhwiwH1cnZLVX",
  "key13": "46w2LBxuUqiHFLkUmNFE1tPEs9c1MjyohTco3GTP4LVgCczhdqxueDcb2r7HqQtxrwFCHYbhMyPyGKwd6Uz6hiYn",
  "key14": "qiRTGYq9UJdXwuS6asex4JnEjZu9NdBpniVRNnpY7YZpkdfsnBMynscs15CzAMpunSzf38hYR7fHsJ1mtkhHuPz",
  "key15": "4QRK3WVnzoF15qeFNQrrgM6vHetuLTnnRLVYtWpwwQzLG9PaHF3K29Zh89b2FT8XFX9dfVfxyu5LR3VefPcTYy3S",
  "key16": "5pg1A2gUztM8jNRLnLXkm7nsBDbyFiZ7b1WmeKv8zfsbhTzPNveCwiWrD671djB9zgSEAfjxkiRo5ybWM1osdUz5",
  "key17": "2EVqRx6cLM5HdvBK1MmMNCE5uzARrF3fkcxUjErNVqDKauW3CQcGbg8UofAJykCsdCK9c19DEMhAUiw2PHpEMpBH",
  "key18": "Vf3Md7PgqXmjcsA2D3UEViaizX7YfB2wrvc75ebKXd9KieptDUtsMeHKVVJQQVvrFRhnt62HJ25Cdd9ngxr4S49",
  "key19": "37GhyFg4KxpHoCF6JhnEcb9eKdzwyh4PVmyUUcqUm5WPeF799yvtZZTbgkb2xzjUuSw1RvciSLCuuKjMrjiFr7fC",
  "key20": "2VnrXSv9BkBbKhyc5gmedRXiqBHtgszCCv7gusqjnWznHaW8UAsKDEdwtgH5ZSCHec3Za2GfGfespW2LSNtR5AG3",
  "key21": "QwDfGv1YMMGVQRPvRAJArAcpyAzQMjZKKPqRCByQzZT3B2tVhAzQEvifXEqLcLUnV7eCNBmBJmyXGQ4FufgLBa9",
  "key22": "5Lqww1ASj747Tn4ZuptnWRVzLj1ExQjaWbctKrHs8DhZE7wfnwWdAgrnUjL2mCiAk7saMuKmUejVZowUKWJycqob",
  "key23": "4xm8f7BMWKBvsTmwF1dpYN19Bs6cRVQtiL2PKmfPys9zQaMTtgFQsr9GGw3QgJueM4mRL28BAYja66CeLYHSRQEN",
  "key24": "4wAKPqP8XaR4qr6cKJaXtVXQGcTpBXyv12fq1r3gX5k5VDLnXikwB92Fu3LYYCzFU3gMgxW17p9Qj74nyHRc43ad",
  "key25": "4cUREcfoombgDtQN9RnzRtVaCtpTqSaxsxcqEQd5KHZ4ghGUQAP1VRNRp8UxUtiTCUYa1FTj6PtC4KKEej34BUfQ",
  "key26": "42fsHnpenmoEqHR36Ww7CT7AoxADhXUoppiei7GGtnzUTEdMq6cuuqREATgXSYK9tbCKpDsSFH2Cu38wQD46EM5G",
  "key27": "2f8vEy4gTeje4LxtSyHms9auXQMN6gdwMX1ctq6nwZBREHGmjQAFRvsZ23g8CHN2Um2zXpBZfU1LVd1TBPKBZbFs",
  "key28": "8DgRuiKZU5ApfYfTMLAxrn6tdRXkgqz27h6UrQtDPpfMAtQibt6Ls9raBMLRucq1BW3YJfmb4pFq2tk2SCpzTsN",
  "key29": "229CJztdNXvePEVpSEcCndNPB4ew3exU3BVX7rs7i67qWHtWdR1Hy3k6iSkvzDYFgq4s6fbojuufA1vH8PFjbeub"
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
