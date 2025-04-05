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
    "KdkwvsL3T46TiBzMZU9ZCy6J2wCPBkaGbGWWJMPhC4kp2HiEqCDxEc2NoLyLLdevNLfBvY7JyCDYp6cHZQGHiVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j9Rhsexq9uRixcwkkMvXUza2qsTYYhhz5aWLb191k4yhe2pVyjXyPhWzF6EYLxGf5YdjKudgfxfT5HPKMMve9V7",
  "key1": "4JmJL2ncGMb9gJRsmBfSRfZFq44BbzgexEZSD9366GkD4VFPsGxwpcMKW6LoeSYrWMgQ9zdhf5k84JHkQ5cweSL1",
  "key2": "5T7rLXKSzrkH7637wRSFYfakgjCmhMVD1Adru6jozFTySdp1kDYWXSHMjmyBXfhThpHtQQNnNdsBj8hxsWeuwCdt",
  "key3": "4zBGfi3aSzpTrDdQde3ynBtykqUioBGiZuQ29bkQVNhGKn1fWZRpfyeCCW6iuhLhnrAxpZeBZPW4foc2sFWjWYjY",
  "key4": "4M2gLdJn4wJyJBFUHZCxYCTtiXWGLdxoJiNtZQS9r2uwKnW6eKAyb11ZkVn6whS9oTUKa34UAuoWTK5aeAfoh5N4",
  "key5": "Abbwj7vnFzUb6QiNaj85SJ7e3Sc89HSjzieWUV7jhone8KxnawytYBZhaYoELTJLfvX84Z86dR9eQvZxM3xQiKb",
  "key6": "2eGiVcZ9CzgnVYe8N29xGQgufv6SBBYnXYAVLHVAy6nBSyS4tGfXipMcktPbveGBXGWKToKbAm6zrKq67zhjhbxS",
  "key7": "2QhNRDaCChLF2KEfqeU1QQxmYnc7AU9McgDhApkNy6vkHj8b8qAghDkPFa9yskgc5aFSy9g1jx7YJgU2dmeQ5NoJ",
  "key8": "4VjZHr4Yv29qQXqujnhxMgGLLvhiiv8RHh6wHfCtW2qWBFmLbpfSXEZg87q91RC8ULzeioKEzErxeEuQKkdQoN5W",
  "key9": "4igvQJUKrgEah9xKN3w9y1ayNdqefyyaeobJy72bwMaYWB3cSyHHEaJeY1EQZtxKfHNfG6GgsWQa42tmLjDohMGA",
  "key10": "53QcDhx1zNsiLeKKmrrtK4DXFARGjub9ZDDbsR84rPh6cnx49mF7kxiFNgwti7mqDbHcYJwcjfRa57fvCKtk2QCR",
  "key11": "2FftnvQdoGmzYvvYKp8kzkGNSj4XvubnP4o82gdnntdcmL5sWKXreXnmLuA5fBfsAHFTskmf4XzwUNbK1KC4u84X",
  "key12": "3F1Ube3NqiEfsDd29SbCnCaSfZs6RXyoPWAxfWhhmRXy29mjNbvsH8cjuChfntq2a6Yzk822KXdyRFwK1nURmezE",
  "key13": "5fhxTXM7P5UcBCXQrPoB57wM9FzSpFXmvHAteWQfLDRdQgUF4KUkGxf6vYmyo5V1DgSsRagQdV9sYhMn31Vcjz7y",
  "key14": "3h6cWdNmqXBfAhqzEg4RRHhLW8yaBy3X2BwKUbCncBTDw9AG7S3zPr9cbeLAK6q7RKKcdo78suNEtdLUDDFMg7C5",
  "key15": "2j4WTCzhfVfCUcaNcrojojLKMi4PkxhFuBujeFNdGaeHUB1XPSNNKwC5haUEhStPXapRFMUVw6ta6vbvtQa6o5TB",
  "key16": "24gNxxy7mfoDVhmY35yX1GuFUD4UwvreUJssC1P394jee9g8hpeUdA1Sih92BmesQWGG1muRgitpjQNS8UpsRrAa",
  "key17": "6MExVYvP1PNuMz5Fwsc3ZqsaiNF5uJMKc5bpMBFgUnTVHQAdLo3xiC4g5dbTjZYqurh7mbjCWZn4kMLeDchPsP2",
  "key18": "5DJgmBSkHESELbqa9tHc1fc84dR9zQC3ZS8yEoKhgrKceCWH3ja5X5zvAB4PzJ8v8ZfyTityXHEZi7MPxVyEg2RF",
  "key19": "2fnQJFZbfquMjJ5odjA2Vy4ETNWJ4dbPawhBufuFEok9GNfRVr3FwoNdBDs3mNr4zNi19rAFPhsL3KGBSc5F18t",
  "key20": "ptBN3ZLNF1TN5Yndtk9ShJuAfdcy9SwTdtRieEcxUD6kuHgnELH16adzKFCGf1pqLxW7YyBy6yBv2u7ks6V76cS",
  "key21": "GYFcNS4mhbzCD9EYjSm5dan115mpNDMWuvNZbNa19feaaYpVWPVsZVAbiV7TFGUX8LsxDUQExrbEvZkEwys2qH2",
  "key22": "3hfQQg5dvT4enXsaskEfA3aVxwJX1XayvwB2kMVxqYxsJ22Hg2tyyUuKdHniWZ7aSb7VFS5sYyLmVEaHmfMqXrV",
  "key23": "3ddUqqpvYJ6rBQEeVi4FaVH3saeMWPiRDuSAJkGaufrD2XQRNUcgS7PMveuxZ3qdKVZ77cFYWsPsG4vKPk7Xf6Xx",
  "key24": "4sZzKSBfxJsHWLpqhzQbiBT3AoUMttWMoucBqHgZb52mGdP7GEYXnyzcGVpH6S1LuYpuycz6czov4962bMrboLNL",
  "key25": "87Dz6EfwsYiRpZwvVMMxpTD54ofg22tKc55MR7qCinMdSvr7m4xew7AYqC4xv17ZCkfNNohTeTAjsepKngXauwg",
  "key26": "5vWbBNCLH19nVHkXKZ8bvA4Cr3hHXjH7jbJFLXHqVmaZJ8bACWnzu5HJtsT7xJgtQwJx3aBJzYEBGdEDfyyxZjb9",
  "key27": "2KUqthH8UDRH94QR7GdKH6v2chY3ku4mSVT3333L7n4TVogD8V8zs29oaqR7z3LpmhDwSYHYNtXxXAnvNq9ppbgM",
  "key28": "3tPs5NZX4uqDiTWnfZkxes5cW9Rywceh89qzoEHFc2f85xtYX7G5Bd5Kwtd2GrQxqsZqFWJaNMQ5wRHjJ9NMnFkc",
  "key29": "3T34i2LjPJVTc5G4UqZQVhRYYFeNGDJmBZaXZrDJh5SVw6yW2M9A6m9wPJmZzg8VDeZMmsnNqrh1Rk42g8Zf2Z4K",
  "key30": "48SrsS7BNtmu62vG8MMR9hcjUQuL4wgEgXqvjJ8gJeUiwTqskVtnjXKToJqvtKdYKwdAjfebb3b9V8VtzVgmcBRk",
  "key31": "5JKQV9Dhm1oaDeLnF3VYu97Yi2omXUVCvAybEeQJBVeV8tiNmjxx2Xs35cW5KSLcDczqnHYmaKXArxf3EBvVu7bL",
  "key32": "Kd5z3fafXDp28SAsrM7xe8SSX6PjRsaEyAWZkc93LkKDHDZCDWRm58axcRXhoXEdvfaZL6fHkrb2gYCSpy2qwM1",
  "key33": "5SiqKNRsTnh72DwP4jRWQrasY5jhvt3EteqeZsmPUXYTymss3K4vV4HAoF1vsaQq7Z1FMmxewuZ97EWFDdhwRf8J",
  "key34": "63am4NNxMbrFfTRBkNwuuvUYLmxxB5uEYRWpESYCrq1S85eb2GGz8a965aE2FeebQptqJNqggGjrXZxrr6iJdVYR",
  "key35": "5dvLDAQ4jTWNez33nMFfGFmtbuE8QdVDTH4NZWHogAR2LS7eSb2M4FGHXqk4YSYoyxWYWWk67oaHPh61JXJ9ErdL",
  "key36": "PvADUP1C2xmA7NWSXdxNbaHbefuaKRfGeE7HFeh24qrYK97iLZ8eWuzj9Hy8tzZHoeE1HFYrve3hmcoLxaaPqFu",
  "key37": "5Uoo4WEuih1JiD81vzKAJM1dpLTqsEZrJv71Gvj345L894FkA53jLFNN9eRfxKeLtvSDduBYGuUNt92sGf3TKJhg"
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
