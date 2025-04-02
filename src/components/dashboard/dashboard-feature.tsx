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
    "qHBPP8ZUw8DDbvDAbojv1AXC7robNgVAc2mG1XaeycKJBzLd4qxdyHjuypYZ8pGuz5Jv8ce6FLuk6b4c34yZBst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GiqiNeJ4xfEmt8Zci2jZebzdYHZYN9Xk9BXkoBRr3Kmv5N3qViTvZ9H5NeUkQM28Rwv89F6dz7TPB51hsNSFDn5",
  "key1": "5F9sRRDwoVLhHeRiuA11FAWzzwC8ogDAydzPGEHf8vRqRmo9HxozkWXeiqDaYgDEdVxgAVhsa95GTsRFYqdi1aeW",
  "key2": "4RM6hHrkwpyDp9RzscFPJyVkBdWSvfF2qxWFzyP39VCKnJMbQFx6SfkS84r5CHWiN19dwwT3RtZMAprtQtDa7WAG",
  "key3": "5WySWho95d8Yt1inC2y9UuYUr9zMofVn6FEtxMpn8B49YuK1wygKY5RkLNik2L8aiHC4Sr9jYqmqvjUWM8SStnUw",
  "key4": "5HSFErWtiV5jjrzEAS8eXVyXt8PdGtpTzcg279cRo4gTokN518BLcUvxisq4C3KrJxSBUrW7qfGTDhAZLAV8KswY",
  "key5": "5GyqTo1dvbsSjVG7HQ8RvGjUjhmgWdtK4pJM3b8GDFhZeZiG1Qxyf3uedwXjwMoTR3fiWTNRFNe7qntHNHbUkcAF",
  "key6": "2ygiCQmFu2VkRUGRzCyZR2ypkgMYPAuwdzBRAJcruABJG1ZxwN7JFQ3CReuDTGHtbi6ZPavmieP3p8Le69S1hFYT",
  "key7": "3xjDxsjuirN7GbjvUHSyXd4Gb8uJmFh3YgW4HVE9i96uBYAWr2jDBJQqWNKoYLBDNrxo2wd2Zpcd8fMAiuRLByo8",
  "key8": "4mPURVjjbMjK59gvQhvdKGw1gEMLBkFMRL3g7SLGe34ffEyZYTHWpQMFn7dMLP4P1rG1Dd6qtc7G5AG82Svw3J6S",
  "key9": "66JkxkR9NBLicS93iTUbBrR94dkA7wgC5KBTEyHY1o9xtRoPqY161ZPMjzeBbnkCNM5RzVnZQjjbsqwwmtQo5LD1",
  "key10": "2c4ZaaKg7rx3MQ1KtNicndhPmr48wghnC2NAHxzaa9jAzPYLsQu5N3NKhC37ULVZuhSD2f1Dxxzs2fjPMT8FY7xC",
  "key11": "4uk8SKnjaGBXmCZHCNpyPRzJERFXgXzoAMJSqwe3nPRxfreFZezijGHFnKG7v1q5vAufjbooXRU5yvpbXA3s2nY3",
  "key12": "2H2n3KY7W5TDGYvWS4VSnJXiTUfSs6v2xuxGy21j9y9Qrfyj7UbcYrzw3PeSLo3mpmHdhDKiyBdpdB7trFWcK2CJ",
  "key13": "5GNKkt3hu2diH6c63perMGXacs6HEWQC4PtNWHT3q8xmBekkRZw5e74XGihfarxyCj2VzTMNgzaK1oBtHUb4giVS",
  "key14": "21n2fDYYn2gUxXLBL6WdG8ftLwoks8nF8DyzQ2XJYNuEhGhNkDZ24AGZ1oLo8SqxXM2ygnhHiHxjzJqoKakejbSp",
  "key15": "3AZ37HXCjLXVGDGsZwTkjaGAb2M9uiwnoPUnP8uvpPb5Ln57bngk3bsxJphDmPyKY4US4DfQXDsCat4SvwgsVQNV",
  "key16": "4ASdTzS3zzmZvWn8i7ejzF2danYyRs43PgNkDnjSuGmoJakjfR2iHjtPuLBSrMMfSKYtRgMMe57L12jGcqtEMc4S",
  "key17": "3H8M7KcGQJ7EaUL7DvBjPSH4VbNynoUsBAf5gGYsiHKQSkjsJRrxShKf85iXMCWkt9np4NApeBBoSa8oE5LP9qEK",
  "key18": "25Hm2ZVWo61QAjRrTRKnbvQnacvwuH6dUBMKH4Zov9rEEzJWsBscN1FRe7ezWvFcCKb5GpGRckGoUSTULrEwScfm",
  "key19": "4S6jtTYbXxAUZp8dgbMT4VaWTTdmhpPshutur3uoqgLm9CQudPA8qqAKqMKZ6Awt1utErLP2HPwB9sUT7BtD81Dn",
  "key20": "5ZQucDTJ2C2B1d3gVgErYXJyymJAcxkyN3oeQJF7VYhye1Koq74zHb5CwnDEUBfBm2Navt9JYRe3eE4VjtvPgy3A",
  "key21": "2GxujMmm7GdNMqUYyuzJ2FDbWVzHGSeMzVvyTBariByCS3TNHJ3ZGYYfKRJALnHNxTK5tqckSsvfWmshQNZwZKYD",
  "key22": "5GRSjXH2Vu9dXSDHD49FhLjtiJnBzTpiEPMfwegHPHn7q37H8Z7TZhduh7jFysQLcotpKMRgDv5ZiijRSABxXJz8",
  "key23": "21q3cjEATCQngppAvdNu1EggqRLpWVTf1fD1vvQTfDThgQf759uRoL2ZjUhZT1fWLpeNPKJVzyvU75yVhnC1aXXM",
  "key24": "2TBWiV6JDQvP3iSSRGgA52KkiU8vCZgLx9pCoBCjQDBnJBFSaJSWekJQkKHmzw62v7tvnDofFisU5UVNwwc69CCX",
  "key25": "5j3Z1iNQCHDXeYKvNXCrLfVqqAHWUSdhBLNf43MWeBfR72ZrJ2yYoq1ydmUoxSXV5ZHkLHrZi7WHLrhcvUj7z2to",
  "key26": "4FsrJzprZZpzvc2DuJbq4i39TaqR2YkGUwvXspq4PqDtF2eEFK4c16EFGxVSVqcyPR1Hn9nCgS3RedrejNrWPj1U",
  "key27": "2jLkLpRxANw7n8GqK1pKsKc4T5n1ivW4A6uoa8pBdpTyLZmADp65Nas8Kj5Ej34mCJQkXr2caAUNUTbxYz8tiV7r",
  "key28": "3g8wasqGh6NfRrH6pdDNrWQuMYc5FMKLctHV7oBh18b4mP41dPgaSAiav12W2vrhvFj1XthrAEH1vyk87CDAt2az",
  "key29": "43ohJyBpGCmo4vuXZgB6mMcbkbPWVwtty7VotcaUpARXzhEw6SSbCuvvxidXZBQ7jviiWE1eq1nTALa2cPBhpxQT",
  "key30": "EmMmrRNQCrMwa9SGqUjXSXisbr2pUqe5xUgkYgS5SAynJKYg9pQyjDsbmJwM6PPEAv52dawc5N6Jmw1yFdLsasn",
  "key31": "3A97q5UMGkpEBg3QJWs6oe1wjyyaJc5aF9E2GFHsRCnY6WvCuDWayS7zAF8CqcGtjTgrNM3zCqbPAYLfkhCSotud",
  "key32": "3mnyMvTD1DgpcT43ZPrX8ed7ao9CXfLBJ2ndwWY2MQVZgsYsmWpJf7zbGy6HcLYt8X95oxBtyFFDohBe9NottD7Z",
  "key33": "255daSDZBpiKed8fXqgGWsDc8W4FbfiLd4stfccsbaawrxyS5jkS3LUpS15GvvjRPJ9YDwbdJoFMFvCnBHx8MTVW",
  "key34": "2w6WbBDcbNrT6iRBWp4VPyhWjBDfdSWGMncKJDYkYA4pdmunf5UN7dDHDCa5YfXBv5QqU7AjF64dSPQA5hgkwGrC",
  "key35": "5H5rRReuPsDmp1eZiBLeYAuA3UKRfcuAEGKDam7JvVikhPcYrSc1xRfMbETV4JUbz5iNcqExTDcv8BZAetkREvqd"
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
