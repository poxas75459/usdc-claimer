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
    "53Z9Z1P2gAEgZ1L84kXZupa2vxpQPoxDhNzYvCoPqECbrvDewp4q2HAQGZZ8AZvodbGFusYNDXiufjaZjgGfkYwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F5597uR2EQvFPbHUmNnkzLLUKpcAaF9xBwWw81gGpoPtriUZowFd8kp3xKrAhh2qEsS2B1veicKUgh5jr7MMVch",
  "key1": "XZ4TawmapwEgg3LANXiYfpwMkoaXox3f8ChYbAEGoqc713SVcLwurr8esXXgJ69r91doraoEGG9X9Gj82AYiZn1",
  "key2": "4tgg94nFk3vac3uLWV3jBjYHTwiNbr3CVouCTmm3oguuBPBUAnw2E7t33uYjZH2gT2WTGtBmge4iF4MotAzgSmw4",
  "key3": "3gRaeLqxx6Hx3azsgHHewByKRXZphxRskwFeaBTNhXhRM8sKogqfGQLvaoMgVkC1EBPh5HEEePMmdD6biWskY84n",
  "key4": "36JggEQEVnn3mTXgTqhmnqzrDLuT8wGXMiqmJtzKfRSRjxsTmw7BVojZkwzynEqKeJWtXwoGhrC1rePaCG4FTET2",
  "key5": "51bpup6L6iLiW8pkg9r7sL9DHRCtDEJaGU41VoQicrjXrZrJzM2CCemLVjuJZMech7NEfF4BsmQYbnEQ4LiMd1Q1",
  "key6": "2vNiios8WwpKWU9tbt1hRnHBzRdFTAhDTZJX6Wsup5Xvw2ZAjiHqtJQ2m3uK5wf4GxjG76Zb1MFx44yUHCGSHEGu",
  "key7": "5YGoNBESarASZWqkwjFysgFK9W5RywMbRg3o8JqseEjGF5nhkLBezgaX1ba3qYdK9aJFARcos3GhVesuZVXV6yCm",
  "key8": "JVGXk7JH32JQodkuZGAm6dt78jqSBCL7PoJwkeusgKSTx5w1TxXqjSsnHmiqTsZtMsZukATXDjGRPtvUo4bmBzx",
  "key9": "2dAeQC4PECk7Q79denqoSYZQjn9KZpjmsxd5kM6vmeQszVb3QA5dEoBqxUrcg9vE4jdP15noLoVEsUEo5mH7qtiZ",
  "key10": "3Aq1h5eqsAxJyv4MMjc7PEQxPEnSE7uFhVEC4FK3saNMgtfNM1RSMr1W9hCEeRoKqohUHAssWvQyZBEnvCpbaXyj",
  "key11": "5EUnsBUTY2MWstzoVrs5X51W7dKcp8sogMEcwHjVf1Dp431irtWwi1nvY36Ne5Zw8HjLD3xMBY1BXsCrGWaX9yre",
  "key12": "BQTEyVcrUKsA9LCs7NgXYexCGespAjo3gSp8uFaqYULtVmxinagfNZBC9eqFCrDMbg8FEiyHVZiDDec3zEdPG2r",
  "key13": "w2Dr4ijXokbEXJiat2jXgRSeZJaD4kPjEmXGXxJR7NGsPqxkVjbQGrT2MUqzzAYAdVFx9zcL4aoe6hhUJn281bq",
  "key14": "39GBGU2U7PtQKj8Qc4wWVeLjV2rRVSfQ155mKmLrWxQVSv8zDY8qMA8GuHMcN2DhruijWsStTNSJaKhFZB8shDZp",
  "key15": "2tTJKoL5dAAJGymBLkCEcJQSQZzKSbssi6TjXHHsG6qRvRwghkcxouPPhPdhVUWihwFFFiHnE74KrfMenhbb5eET",
  "key16": "i3BxkjaC6Ce81YJbdhvN9kepXhSvbBWztQSLg2q33DTjThssHvko4SGQXa3i8nMR4KH3V3c7uhsBbuTcmrMzDet",
  "key17": "5FxgEtZRFVH2E6WiR6LT59QZJpBji9hu4JnAX3wspiQ5TqTRitQxxdiKgBF1NeD7hjiqTkPQo5XywE7oZ1HWB5Li",
  "key18": "3fSeXqH5zcbYwuoPdq8U47kPFs4bzRP2nR9HfqydTkm7qszUGKbWUsKnQhzNoETGNxMVbJRecVZDNPSSoc7WFsdL",
  "key19": "5JkNPztrti9pSG1PmSgECjaEmxEfhRyGpvRwPFEXT2CF71UxEPnxeWHTu69zHantSpJ9Z6FyF3qHiuoayUDRgTSq",
  "key20": "4xyBcmnrgEafo7fjoEriQn66dUoJVzn7dHoAnh2G5WKiNoTUAoKaynyzeP12ebW4TNzojpiFt88qw9tKHRySV313",
  "key21": "3hXGaB6T23vowY7F8xBbNuMavfircGWpoF5SUJdva3q3wnxmMraEiSM5CGkb5o5R861Cg8Kkd7n3dkoSmjrHSFvd",
  "key22": "453pDJztCjX7Mdacbp5NozrJZ7JDBEUQi9DvafczvdiEXHTPtPu1d8iUBK45uJhRjWN2ABmVnwPJddHJeD99UktZ",
  "key23": "5h8bYED1xdDFNs3nL3uzsnLqeXwthRq8gpMNHmULnkcQgT4w3QKe3p2U3c8Z4g42J2wafHK8PEySbRTjgUTHxUoA",
  "key24": "Cy1iV1QmjEUn7yC1PwqyW73w4uKQCzpFT39QvtXEQTZEjvBqb4RXbX56AuNPedvXg2oHKtxdApnpqYndPrN31D4",
  "key25": "3Qa8uqrJky1ijoYXG6NcYTH1it1P9HgkJfcJiUk65hsWwGTZ4QEHSovNk7tdv3mnyHBeeDUP8SxRTAydQ9Vc4X6W",
  "key26": "3tQ3iXFyg69khb4LMtXgEJtYVnJ4Q9gm5wCpX2MwfPNrFJWAnrnnr6u9X2wEnRkpyjyaGCt8CMUEKnxYRjUeGW4S",
  "key27": "Rnr6n6bo1mrYeDMkjnAj9AGNKY7zJ72dXJFHrbLkWxeUMmirFRcz1bHQ3VBcAnk9PSWHb6Q2tG6VR6FbniS7vfL",
  "key28": "4k2xhfWA5QTcRaq7rhXnTcuAeuQDRoP63fYuDRZSo3jPgVfJnQRNs3i1Wy12Herxo6veA6HNANCTFoBWynBkQ8Da",
  "key29": "3ytaf4LX1Uwkvs2BYQvx99B3uETUwWWCP9h6UrRNJasDi9UzksUj8ZVMfPsVHJcZy1VFUarRwckpwBfzPBqxnWeE",
  "key30": "4XFhf2SjDHQAkqNiCjXT2gzK8PPCwLHamcR1QvsnCjj6iNxNbfwDUs8C4bTYpkhNxSWdn7h2dvnnN2LRGF5ywawG",
  "key31": "38Kb72g3GasBfN3Xu3V1Y9jLhCgzrb8eGF43WdfojerBkte5Ag12VaFRa7ehdP3XyvR3PX6xjLV5u5T7ZsVVXZ67",
  "key32": "2kJAVvjrjBrRJrzkaYnPAeWSAtHY58VhP9x21RKiqSjF1RCWu6okv2n19Q115NAC8WwT3CXUon7LFQwiS3geo2Z6",
  "key33": "3fXHgC1yzXrhvs8jfcHKy76CoKuTw3bENSNiTjKQGqeYab6xpvswGihJgGy8cFBH9QPwekb6ZbngGmSPNziAJL7w",
  "key34": "2SkwNHymJqjTfTrVsdvumMVyzSkukAPnvBpktZmr5VG2FAGqTcw9mDkmo4GSNuoHsbqnHbGLSEssnd7hhPbwHSFW",
  "key35": "2DuiPy7WacHcFta6QjhVrNUfHvH8P2G9uQ1sno5K2eisW1DJDYvsUMeM9MR9KTdbFvP5mgfUaYts9imqkXZLoAJL",
  "key36": "4sFxjXT1fqZWsuimavNEUGPUQHZk9TPuSc3Rv9FtHDHBd7ysbLCrgALz9PpMroby59AiN9pEwVVkShbSM1j5KNxw",
  "key37": "2PqhW7cscjcXbFoETJvm3mAPotKYgDJE3EpRDpQCoY8WhH2s9D7j3emhRHdLUPB5CszLGwdQaTUyiwVPivydx5RU",
  "key38": "3zux3aWNWhZPFzYUvh9YcADBf5hu5wYXNy5y8qxRJLQVx4rSNYfKjHJSMX3AC1K6UG2Bedk93ypbrxtYZrpeJ4MQ",
  "key39": "3E8pcFtAQsDkoQb6PKrdknSnUVfLRunsihzjk5NbHCUcqY3WMtNBa4jssBqv8HTKgDK8hjADAku6p1y47TnuS7v9",
  "key40": "89wPKReZ5ikJ9HfkYYVbgPyAuua1fV1Q9JaV42hHf3UevVFha8pK8Ax86vbYLpNmR9Eeap1LxWHGY7YmNUW1tQv",
  "key41": "bQeFixQYZAXRtn7ZUsBFdRE1BBVx76arYtifHrhXnrRSQgJtwHjKKpxcixX3oCxeB46CMC4pFBv9CYXc5jMe556",
  "key42": "4j1bUAwZqfjMwBufL6xgq2LYf7ysisDWJ4XAie6urWEdKz5UznQsVtLBt8q5us8Z4KuvXi9MuEmB1d2Fijpqysk2",
  "key43": "5DB5A5qQq4ZXrZGSRVswrpHiCzDpxpqaBxRT7VtGwufxD4wRQnQfTEE8jzFXzX8SibV3W3MVKp9fCJML5fPixuAN",
  "key44": "2axAAFxqsZpt26YCyi7YKJHmdTUj1nDLYWgKQ4D534WPdY31oK3RZn8HP64zsQGcqLB5Fg7z94ZxDM31T4QmXEoa",
  "key45": "53DiE52dCzZ3GiUyc2gCYtKAkQMth8XPzrWa39s3XAxEtHt2ZYp2eZsrcze5A6HHnBNQHrndKdNkYEQemDJXANnB",
  "key46": "2H5D5TB5UEWquy7d65XT2yiLES7cBfUVuRZnu1CEgvaX5YSbhmqVbhjeAZxU1cDX1Gbzk4Pn9pgXsB8ExRfUaVi7",
  "key47": "5ZrGvcm7bgtvbi6WKv9tQy1kzw9zwk71enwAvrZgpXQ13i2oS6XQw1LcBHtmamU3qK1ChXEogPkeT6vREjLvK4Pd",
  "key48": "5G8zLikAHbGXXKQRJBYsaVaa1LtZB3aEnPxWW54ERh6rUhjfQpizEMqokYvmsPJU6aXSTihN8VSoSNKiq7zTo7JQ"
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
