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
    "5oaSiXkAnPw4zHLiKWETZYhjLpSuoKsYrHtjYkV13Npzwm2wcZ34DsYq444NYDaKhqRYiRTzzUmenj8FJhs4u1BR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YYxnEqagmpyjjbTnmnVMTwzuDJerhz5oxf3UdvJ9irzAiWi5VWQF6ApCtwoWpoVWNM8ktABanLUyWfHQuU6xDg8",
  "key1": "2nqTCv4xMzwjRt3UQMLEyBp5jVCrwKtWn68ekbYSCFUUsbeKmdPTB9s2uAr49qvcYdHhWDfMxRgrmr6KRkA1jW7k",
  "key2": "6M3gf7zMGuY53T2FFuQDFP6z1fc4i35qgfWdS7zYaBTHm6gLDQU4V9qzkvsTK5ZiD4sJNtdKMdx7uhrQmpBLcQg",
  "key3": "4Ss1Na7eNo2PvAdJVVUAyh3T4jsSRgUhFzcs8TFZ7fXoYK9txRjM9QzRPPWxRF25iMmpNn9qGqVVaHoDreMzGf24",
  "key4": "2UH2KJgCAf21dhVxRfrm5pmyBTXzh1FNC9PWqxfVKuoi8faFmc9EF5byDgFVpou2tB3GnYCiiZmocge9Lnr6Pdxt",
  "key5": "3dR4c2ost5emjXFPEvfxDsEbvTuZYHbb3JFTw2RsBwD3Y7NVuoVA8QL2acjG9nvwGaUKvYFJFhuuzoaH5PndAruX",
  "key6": "65GRWUpvdzriBs3Zv5K7fMV7Knq6X4VPsxLx99QV6a1QSrNZ1AjotvNmV8JXCCzuQK2eYUWbhRd7N4Pjo7bG51cL",
  "key7": "2XXxKLTFXWWcJLSPG3f7FZ5D2PKjEB4d57UQGp7dPMbVaypmqYaSPMpA56ZvfafScgYTZkYgvpjrDfvH8PhxcQSW",
  "key8": "3LfHKzTve3MpUa4V3veaC6NamXsg7J1UrqfFkdtXLgAJPD8PMSGBYSvkFt67LhWQgMH3WerHG3WueL7VaTN1aXjv",
  "key9": "56kZbdJFY7FKf7hpDixeabNjKn1fCJnJexhQhKPZ5APC5hK575ceP9pPoVatQRDW7AjfxiycHmouRWkM23BnAgUr",
  "key10": "2FwaBQiyv599wkuGwREp9sdPKJw1mbUdyUEE37eo1eHryVXo48P8zXs4dkULRLsvabF169r1RWiAx95MfvBqLjzq",
  "key11": "2wAnHQ4BKXfeyp4pn4NJQjnQTEbZ21CoojsTC9asMYcnHok2CVP7nDkDogGnSFobixYR67LtBpUajc2zgMbx75z1",
  "key12": "4zu3dwYs3iiz1H8Zim2M2y2ZD57FX4nzWoVGNFhvcEk5VqqEo4T2KUXcAHoYAjx3Z7zTxkfTUWS26CFCcckQNb1J",
  "key13": "57TeuoiYn6FkXMNFgmWjgvXrydGvb761dtcN5CmyPDHobv6FYiSBEk5HX1cEU5vdqkhkhaFY5sBzJG4vH8cVRgkY",
  "key14": "4G9HV4oHumPo9TyDuN4sR6MVkonKyUNZFjbFtpwLFvMXLyFmT97yfotduzLJM8KF3dnTHi938qpCGw9jbHWxRtQs",
  "key15": "31fxC4rrtNr9pFLP4VhSKJ32uy56j4XrNARg6YzA811jMQyFjLnthW3xrhaVqhKe3RAqCFjvZZcBxDcERhf9qN19",
  "key16": "2U8hLBfyCEshvKZKAnVv9UeVvhqwKStafgoBNazNdUTnqJQM8aKqUe2YvbX6rxoDANEmJqSbCcQzYoGyfPbUC4L1",
  "key17": "5shpJbH9uw36KnzSTPuTzFWXdeAPw9vcXFwZz2Ey7U49HRpLFJCrnY7ey9o3is8i6env5k6qbT3BbpCJGc6bcdkU",
  "key18": "MtwqRctzwm4A1Qk15ks2ZxzmgkwRyWFDUghm9JMK3WnYQxVwdb6aCP8WiZQY6xGd8RNVLHgFVFirYSLdPHYTo7n",
  "key19": "as2DxQCNCXeEDijJ64XTFWCo3Mh6G2dQUR14MWWD3yGck8ApsLCddFUtYFa4uxPEVUnZHVopCWCZsravPiBUdvU",
  "key20": "3Q8crw7T5Ldv332cb4ReXcEofWWAngtMRj39cD1jrLN58XnMGatXaJdo9NeHSgM9sAg3YtJvsUEArYRxt9hqyeSj",
  "key21": "4GVnKiv54PsEbGC3rcrKqXk9dAcFDXJVivaJKsrGQeunAmEz8pJ922WDq2BDqjANXR2jKvjWdn5trXuJDto75vtD",
  "key22": "4uEZsV247FvWLhFBaM17rduKZLg28UYj6Y4GBSww3CFrhkGKSVnboYd5DjgjrbQtTjtASwivPBxcgLPqj6V9pT2r",
  "key23": "2vNxfa91ZXK7ZFjFdJswggPZX7TKmvVuiDi9jL7wyoGE9xv9SrAefTTTwbnKPZwt8JhDoYJX4BvxUfVzuDtn9W8j",
  "key24": "2N5iCH8hASqKqrqwxjMEQNCXQ79Pgsnw67r6123bS8eV3qhxajCJ73Z1BsGkaD1o3wB53QePbL4r5zM6qt3p6hgN",
  "key25": "3jLewYVyhZD2jksJ5xX2iVF8WSN5uXQDDZNwfgnsGcWLrnd1u1xpcH4yRwZZVvDK7rx7vmmMxvEt1fZpdt1MhwW9",
  "key26": "2Q5E8oPvVLRKdBzY2QmrT9wuCs6RWKdArVayUa1jGuBiSKUjygTNb35RteyFogASU9EuRGe2zkTjLN1givgkNrxM",
  "key27": "3Rv8RZoYz2VCKb3Vz2DPGaYhLS4WFyRV9T8xPZnhqA8qC7nrfdH4qZ8FCgCYd3vbrM29skvW4nJMBoWwwfvtRTCu",
  "key28": "2UJozk8XgPZydkwnabyRm8KYXqh8kiYgFWNtDxSw8dWiYJmHMTCke1j6cLBTtSqqHH5UqH4HX3LQ7jjWgtTQFCMM",
  "key29": "5CWtFRMsEruvPrkyh67ErRnisuZtzPoN1jD88Me6nqpkAB8BBeAVcyLer5FNefZS77gbAodujGLX352CkTN1mtLy",
  "key30": "3Wuue6a2zTHTLMkLYxaKLqHGHUzuPKRAWGTTudWUeNdJoxqQihwtqAhMxBH6ubQqAw5MiegVxwt4pTeLXCUw661U",
  "key31": "5bm8Q2VukqYYowuVZNVW4SS1dsBmGFr5YkY1scKWVRSf5d6a9sTMJn1KZx15T5rnmQShxd3ZshusaiM4QpQ4Nwgb",
  "key32": "2ryk9mjPFpbp6p3NKXRgQkLs8X6GU6LFum6iz2PeLKoASrRBqNuZpc4tGm3fTSiptMerJmjKK4rsPhW3vzijHfCG",
  "key33": "3ZJGyC3NjLKU6gwzVJmRu9w3fibVb6msuM3f8eWkaKRHVsGJ4wwsznDskE3zkFH3843x3mEEJmGnw75GH7AQQ4Yg",
  "key34": "2Ucme9Z6VSb2ye7sdGmmqjHjDMAJszppeGrHyrhLq2rD4m5Nc2Dz8NFj1t3uNHP3xoygLKpKnAdohfqwRCuRZ7CY",
  "key35": "4LkwQ8YxzrRsBezBToEspNvJcQzBDYhR5Y6QBqhosP58ryNyJwa5Zhvu9efWxo9KVR42GbLM3GcrquJX9my17N8T",
  "key36": "5AsAvccsdhjC2kjwseQfLtTnd6mAkjJiRSJeqX1za3oTJE5JgSZA8Wy2mNPXsWAUbE7nwC9HzSq181j7V1KUnV5J",
  "key37": "29dXSSBJLtobAHRfKADaHWkRRXy66wog38tei7bWRkPdAZzPtQ57CZWhhVYWoC5fPa9D3fqiofenKaxAuz6q7N1V",
  "key38": "p4oHk3LrLaH1raYEzdTc6vtB5kWk9eumzMB4JERoZXw9ysc3XyhL4PSoHCn5v3CjU8JeESM9gAazhfpfm9fAQ2e",
  "key39": "33nHvhQAZAudpai9LD2CpAQymEtyCXkWVADmg8zCU46VZNw8PKFVkr8VQ2sCBDaf1Kd1CdhHqsjiQh3CswN527v7"
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
