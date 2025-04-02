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
    "2ANmAoTABj5JeBENjegi3h1yK5zEHGkHEtrj3PSRPfnnKiZZVZFp9V99R3k3y2ZPb1foerBYLGZRiHiosuqAPuvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uc8a5qFCxcXHDx8ocqkE1BoxGXZ6UhQ21Tc4ZXg4YQcAuToiA6LDJ5tnndZY8QmE2yhEo5wXEgSAaGmqfugcbUk",
  "key1": "4EZbayXkoMczd8k5ttancCx8UXRcsu6ipMsizU5fAmvzb5EuhCjHrEs8j8yfe6AwvK6RYLD1RAyQU9KYxmhE9HXP",
  "key2": "3jCPSDbFDeJcYBfVhneykqZKE9sigcB3bqnvg7C33jgmkmUi3LfWHzSb3FNUdJ2wjVDoRfUuAAKMPhYqwAS8Rvca",
  "key3": "229GB82L9fZ1CKdYQQNmo6qU42sYCCMcmMfvJ3KykuSeiwVJ5BJsPrZ4udVDGfa2urrfvdN69e1kk7LNxb75Au15",
  "key4": "4au6ayWnrCmMyPfFcMthdKzdKGxKRmZS4TKFiiS6qsjHWxQo8LJbzTNJgDBdN3bkDGViaSjUUBCesSTqwn67gpeN",
  "key5": "3os3fSC2DtbM2bq5iS6oiwBRudXYu2peoJ65pwtYU7Tc44RCFDjiyhRE2mgsRgUeBYkWCGrjjugWmJoFsSRGnsrv",
  "key6": "5DcbMrSiA1oWuEm41HsQsFsqqt5r6LNwqDMomcsKRJEoP84T5KnQfWSo1kG5LdFG6hNFV7eoGqJbEsZCArB1ADHy",
  "key7": "3vWrPRDMmuunBXsroi2c7Pvjk9LiAZpG1G1N7pUByjV3ACwNeNFyzidqhrUb5tAdvHDmWnxU7gXeamCPopzDtj1U",
  "key8": "55YUJo9xYSr1DstrbiszaCkPWswAs9E7aiUcbwtRmbXSkmwUgWP1A79Pxxx6ASVYwkCSpNnP9dT6PpRtc8EHCDPv",
  "key9": "4MTEJwjjwvPXAKv9xqvjyR6pd7CmmKe7mnqY5QPMSKBh2oPWyRyYGkEubuZVCfBxCAu992mhnRBegDcWn3fSgXMi",
  "key10": "uTAYe8D72Jnj1tEwEQqKT352VwTe9D7YuJKPAae4rPvEdaaE2ynEQq8nD2nMdYbCNgxfmN5iNBR4JaQSHp2Gfmk",
  "key11": "3XUpGSqzSiDNhBJ8x7hRAPhBDQByA4hfq4NX8X7ehwUCXToirob8D2KJguMu1s5Y4WSr8vJnMdodF6AhNTy4ma4N",
  "key12": "bJdkskGx2tinMmgxJy858kSNCFYPUqtX4kYLf8nWJYhyB3AGSHcvi25DZPDwVrZTLukWtBXc2pPZueshVf3jSno",
  "key13": "4sB3Hp1mvvQBQCfEXRe1uMm3AK12oyyCcraHMXMHTuT8s7dZqt3P5anv2tjN1sHMw9c9LksEQSZSWawPXRqpM5NU",
  "key14": "EAfPjcuYAyP7tUju9c5RYdiUFHjMbXSgt8Dv9YucwUdS5mHfbsmS9ro7wuG119bkTbEbxkR6MKFSekb8yJR6ifx",
  "key15": "3a9KDyzfnA98NiZmjskTCoNh8SvYip62TitdV2DdetXizov5cHSZ2poUeJ85BpUaaNCVTDxYh3fx6iemyMVQ8YR8",
  "key16": "5QbtVyoiNVKN1YYkaU3ggbYSq2XiEm2HQX48BxhmtGHPrFy5xtnvesALAXTfNvTVzxNBXughyjt6K3vo5Ap4ykCY",
  "key17": "ehSaKVCQ6td9ZmwEuqAUZaUMAb7DeFNRZWDYrkcWMFrsxxA9tCDqHswUVNkg838979Y78SD6N24tVnsPH9bhiX6",
  "key18": "21DkR6vzJQWftCdXGNhA3KD88o1urdWrNgiHPUq4YkdeWsnLEAgg7C7Ewu9XzafYHvvbZdhvZyaJdrkyqv4ct5me",
  "key19": "61Ywkn8Er3MTp5tVYVRjuRmiEeoiY3XkRojT7JdTdDUi4wBSV43175Vmp1izuqskzCsRHC1MypmW2WZs1RoTmXYM",
  "key20": "3fQvP359HN4sspHzP4Ryg9v7Z4ugYdi6jMxQrwShPEypjwY8DjkNQwi2via8wdZXj5ebJ1AiBos8LSXWu3qHoAwp",
  "key21": "48HwXPspzcvW72yF2QbQW6g1ZPMefJUL4y7edPgBjqQsW2qAmdYv8uz5xdHoJ7ziL17ukfuNvJ7SxTzkvFghKGrw",
  "key22": "K9r4KAPLNVwHQu3ousBbwHtcBMU4TeAMT6Kbiie4tvh8QJRzJV5p4fUftpD7sUTkdsTfkorW1fARQcV1X6yZLoh",
  "key23": "5aqufXThFPhKacMNeiCHfGRnvPf726RFmXK3vja5VAhAgqtU3Vk8Jvve878ctY91V3Wo31g6TcXkbS3PxXx7ymFR",
  "key24": "2x8dp3Rh2pBdJFXguyegCfkjVQdaLmQJVFXS4wn32xGa2hNs16aW82HntWRWoxdSWJugjPa1S12nJtAXwEA6ieme",
  "key25": "3Ujr1iKLcAWSBmwnwEbc6ofPVwd1qtDPrX7o7YaGNYnqY8vDKV7GYiKmLibDC8SHP8m4ewCVeYNbzhDG39NXKaWS",
  "key26": "66XDcprxttn8EoCWpNmx6KgrkKZDSMkQWeGJKGidgaFbZ7QLucxTkmE6Ph13hcETQbrg7hUuud3sJqXpzr3LMHZE",
  "key27": "5Fm8mRNoSWimgxDvhyVboMP4imRrYexVJKsAY67ibCqPQKsxzx4bj7XrGcuoqJsRFvmWS6HvH3P8gWc5smwts8T",
  "key28": "3nkAceZW9XrRzD4jk8zbz84NQfgBdZoxD7JwfjUjTCA4E3o5sQeb18JtrRAXSovZacJmvDysw4XzgVN8yidX8RLi",
  "key29": "3gsYFzpCHe8DdiAe4de4aSuJAXN958Morx5fbwnJVbPNeCrgXtX9xvrS6d8qXC7suCJuQncNZfiGH4PEw8zZWr6w",
  "key30": "2sWRFAZbxLK1sfBuQJd141ADQqNBNkTaZ7pJE4xQTTSQMyeC8psTnjU1XP8TB6eptCqAo1y8ogWHscx49w3T7mv8",
  "key31": "49BruxSe8twCocNKBH3UTeuK42yXRTWDZvGFXpjpssJdLKwiouizq3ZMiBX2rYMvbPWoqfYuPSGXj7fn6LkGWswW",
  "key32": "3xRv8UWJbqDNVperxw5PJ7VfEKFuHv9b55da4CtT5sKoviAGKp4o9b7yNErxVFb5DS1zFo9qVqVL7fa4KPmKLnKe",
  "key33": "GGcbAihZScP9fLE98cxH8KV8qguQ8bYVcXuWKTVrxr6Dukeim1SFgZJ6NkuTDBdGdv36MatipDQ8txtVVSPdCes"
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
