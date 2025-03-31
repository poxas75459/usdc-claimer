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
    "31YZVhKqaK73GTGobfh17gymC5Ea6iLdVEbCyBxfu1dCFMwV54a3CP8ajuwHccCR81eySpKiSXEztQzTCM6n6QzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pVrYRhjxeWSxT2i4xtrCzJXePHkizoh6qUA5YmAZyFqrWWwYMCcRnJQBZavpUAagsHsDDm19k9c4kLnRuAF2vQa",
  "key1": "2KQzpYrPMHtBoTHWwrEu6gR5LiuW6ZUzytEvg7vi1Y3XvjYaSt6R3hArk36ULg5x1cbJvWMSyQXsgazsXoTtwvdu",
  "key2": "2Jrbx7QdzicN1e6qj3yPfvtNBBhDMkqgquBEFGQ1991U1K3RTygA8GhTfx61fEhtE7ok3xKSpVamuqGiCcaLegXF",
  "key3": "452r29mKLLoJSPsDRVPiz4MySJZRdW9nouuP4uzD1jundcbvwkjTWJBgujK6K5mFvsXLdVRQH1QX7gQy1hRjbpBu",
  "key4": "DDnsVjaNYq3vmmRfQTmuKrnMBWKjStmJEDwyYnoZHVFJDGgGaqLmGh8AuNfR8SekzMYTBT2Vxvg9mg7ew1yJYRR",
  "key5": "35pFq2CY5KEML7kCDA2pHKqX7YuUMoigbRGHxKyy6ZwYjSwfEv3pycJYefrfX9ZJnsfLHGVte9WLceAFZhgTZSMw",
  "key6": "3LufnZqwAuqtQeS69oeL12jGWq5sRPoxu1ZqGWLmYAB8hGsps4eMsSo1UabLEtS6f9WwgDdjhGae73t6XpmZQg6N",
  "key7": "DymrEQ8nS1ywTEpTPsorHiBoAM5Z9KwHfDQPYbpjpYY6qQM4yiojAa6rqqZDZy6hD6M5x7YS92adZPbkWXis3eG",
  "key8": "uayFPH229yxF16z8EoEVWzz4zfuGtM2vfJbjppwcS6Xnnxq5DtpJkGNQuDpHhjBcNMXQUG5s2uRCNSC6vThAJiZ",
  "key9": "3RydHqkqCWpNF6vo2wMyJVsfTLFgiTbgZq4FX2KySomfc18djsmHKTFncHbgXNVbcAJzyYCaGA8MwLKrwJQzBNPt",
  "key10": "9T6gKVhjFheMM2qP5dxMZkwYGQba51k98raL5czQFMCn211cXtxKfCdgRXH1DYm3oUX2MfuNkM7aFZGJdCTPqpw",
  "key11": "5euWv62VwYLypSx6sfLuzbJqNWs4TadQXUmSntoVnKfRoFxFYzGqzZ3gFnGMzPWNLd7Bu3gBJGE7KBDTnvspBe7u",
  "key12": "4JJVaAToaXhpMrsjEZYcNh5wpUe4ZjzGMpMmLVtms25EmCfpEPiBStiJnQ1mRrpi2FzdvDXXmwheygQ5dma1xVFF",
  "key13": "5frpeRfUwDjmg3TkAoeKLqxTZaokMoU1seRjnDbz6AMpGbobnr6CHjzvusL2sDca5CY2nX5qQsfRyiuNYkjVjNSV",
  "key14": "4ytDnULcD17u3ww9ms5zL97hQeC9ofMnj6GxJ7mx2JTqEV7ws9sUbWzJ89G5iiK9QmnhseASMkGc7BAHCD9xduJn",
  "key15": "3vv1jT93hSSKPsTgYwSa2imk1YJRLsAsRqRG9hBYtx6Y34EyBVrvNjGM5A2rnJuqH6tuGP173p9vc1mrFeKfAnoc",
  "key16": "3jie7C4qfhYskvmAaecMZbnMVZ2H9msm2ZdAUBauFwdHxcSxeszhoT1iGMiHUtBPMbMKZzTWxnpSyEJzFDFFxfD",
  "key17": "3a8GZQmtTgLCdrNzqamWrxGfji6wEnLC6Pohniv2UcbSwnZmUtbpkPy2wrjs5LMGpQbFmbBLHYQWsc1E3AhGbmwb",
  "key18": "Um8nd4ZeiAuUuABN4VoL44nsxH3acCHzYgTiYyfhoymGLNrD8bXhHY5j2e7KmdZb8ScoPBK2LTWAVzp4xZi5dV8",
  "key19": "65DC8fXC1Yf4UKtVN2jtMtjvUqb1JHnEBYSJWgYzw1RdX5eWJJWxqrrkL8T1wid3qNSndtaaQfej6qc9AN7njGHQ",
  "key20": "4Tv1GwVrJkWH28hX6uvassFFqPhUerC2ua5okzzEcDNMhBwqQPX3ZSpk4GsVtd3dw6RyrcXnYnHD11YPQ74gvALp",
  "key21": "5sKsRkWzMfKnsfkywevDg1Jap233ypPuBMPuunp5mUtXSNufCj9G7KPtocjVDSLHWsXSrrKKuXuEnBjUsBWBhQqj",
  "key22": "5GeFov42ijUjUfoMfL7tYeZsdDWaFwZu9jMEMK6rzHiQ6URZFW7LxJLFnU3AFyAyjJuPpeFX4kN37z9kGZqy9zFw",
  "key23": "3p31ZjXdJRSvm7VFPjSkivS7oq9ZZQqsLSeMRd1AfzThw29tCuKRqSVV4mgs1FCcyqouqaW8661v1DQVdkVfVBxm",
  "key24": "ApHnK4vbrfpqZXs233hvamsRQ5c2UB24VXDtjuhH14J4bDhnNCR6dZ3CBShWVi7bptjyXLHv8UbjxWGgtZ2byTR",
  "key25": "4Ukbsut1MACQ14GJdSRuPxqbZDRuTbiVfFW5VUUUfqQoijUxNFJyxWmZh6Bx9B3e4dvxSKA1G5LZvJDcRunJU1fk",
  "key26": "xffzw9ncxmRLUWF7Nxn6AqKSAgsoZPQ6hyyeq3snTWTHtRcKZgqTdcEWxMkHUzJk6m4wXpFfWAgLFju3b7kQRQZ",
  "key27": "4PTtjrYsGcwS3jijXGFNizUdAWhzodYQuydD6hzbV4x7cUpUYZZBB3eQ95E558jCh8RmTUA9ZJLEyunaSMiHcbLx",
  "key28": "47cpuqCAcMJhxGRaCk7kqy6cTiA4siBBry8kQBvr7pbivhBs11gbFaC7PBqqytEHADVR1posjqLXo9JAoGeBQZ3d",
  "key29": "42Nm7Wzkqgk18jNF7Ngac6BWbaBAxn1T9fPQacwWLH6NPNU1gXHsVgft2ro45q8xzr3XRmke36W3RAYRFSa86t4z",
  "key30": "EJY53g9zbtVxADoTBL62fFd72hW8PLz9eZhXL4zszoRkLK8GirYhgAGd599z9h2cZBDJWhXTsoVyCTQff77wC1i",
  "key31": "3zHDkEpBnhjMbnJx4Hs2ueYX6M6Ce4je7wm9kz13Ad2EXnNCTnQtHo6vL6RiCoEYiDQCABT5hzpN3WbJcw2Qmj3i",
  "key32": "hAZD9tt8YeSBWwZUZV3YWTFgF133rPNwEKAW9HRKzrfYQ1gLLM2bBu3B9sfnVUTHg3sY8z2YyaY5NUeFfM29h5h",
  "key33": "4vWcsJ9STeQDzLKqWDPkKUmK9iYi54GKczHYwihKgegEiYddwLdLVK3MYCMvpuCDfgevSVoMNFr56QkTSFxZm1tS",
  "key34": "3arrTTHyiNnMduFT9oHMwFNwQg7LJLBor6ZcFDF7z9NnZHETqwx49MCAE6HfpA8haJsV7k8a6S6ckW6gAiWSw98n",
  "key35": "3whodNncCoXGgjJCnRDKZhe8pjJ5rKLC56ceQ9C9Pe1zVm1WPGW51KYiLrtuvfCWcTbnBFqQWBM6fXvZsN8Fo6AF",
  "key36": "2ccBhwzjzAgatDJnWSUQtabKLZzyRW73fhNGB9mFpUYcbK8bY2zdbt6W7td6RrCjub88ssHDihCoqkV31pkpjZV8",
  "key37": "4opLfUTU2vavbuvuCmZewpTytJHJQy7i1iSstwX24sWo5xjEaFzDXWF4hnRXK5mu5xkM8tbdDbbm5jPNWQVVvusN",
  "key38": "4a5wuP8CcCnFpnSdNe7yaVGsL17c3PD5mMbixKn94oAL6aZTGvNJAJZaRgoduMkWYhF89T5gWpRg4heCm6ugG8mC",
  "key39": "2LRLEVrJfWChvDzMdZaRsi6Zz58iVLe7LXVVeHoLmZh7jhJV2JgpDESPPENM6CgK44mgCoswmDLTtVPMZWogsJdL",
  "key40": "5P3V42cuhbiMMRzGVAWmZAVXGCSNj3JNESkUQCMJoC4saP934vCRyKcScyqGbrG4s3iTDEuqyg9igqbRUdeKAtKA",
  "key41": "2xmohCwq169375yXAJXWd2f5w5Nv6VaLxRnqCpYbxSWrqGT666Pi3eoA5woBRRrGMP4i3dTg8sRGYt1ZamfzeKdb",
  "key42": "YGud9pvexGxizC2gFBjY5RhawMXCRh7DaFxYSMyg785PEVVk9Dacd7HTNAiXA92MockbnWdejN19652hDe15b5n",
  "key43": "3MNJkY6TMhQoDVesGng3bEX85QfAj81QgPcytJ1r5pejNqa3uMuJcSvVLmhVaN69QX3cvEtSqDPdDZLQV2F9ga6Y",
  "key44": "nhKRZKqkcKfUTxhjwfmQGdBZQ8ZdbhAfGTBbVCdBnNwCbiX9fkBpWL2kgG2ukqKMzdmhgkyXzmKy4Wor9HegFWH",
  "key45": "uFj3xtc1wbz1HTBsU8DKHuRypuWKyLutP3z23CHzMNWcsHqQ4UXGdcQNpJTcRBX76xXeo5Tcm1K7m4kvM9qX5T9",
  "key46": "4HzbMy8GY9w6SfuqdULAzXezGPN2DSvPkys266eCFDrqNsJ3CngoQeZJufCoD6hau6XdmMPtoLhaLXJiYbHVgnkj",
  "key47": "4pJuED9py5TwCSwBbPL4pri9TQFfAfCqvo9KGDTeaYxAARJ5S7P64vqCZ6YvSgT3gYzkbVTpPNHZSJFR8r27Sv8w",
  "key48": "31U1RB21TahhBMYsdMKySw2tPLfVeHJNsw4veygSf9XBuR3WhiuXrRAEVCAWsA8ZySGQ35RM5CSQSSwLimGTymFc"
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
