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
    "3zcGgWQBSxoowzba2bjVgaB969zJXY5cPszN2ZjDvs1s15QqKXbeDDooAim5s7xTWkiHiudT8GL4B1f1BVUhrVoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pvKee4SVRFzRgazZsmfk3Ygc8NWX3X84k4ofBNMEGtvtZVykxeGYruswBcsh2eDKVyAsy1xfFo2WnCa4PfpAUo8",
  "key1": "3PCLxRTtt1FqAxBupze3vGYfp9GP3nWRhkXvjmeSnDxuxL1fWpMUBZf3CfTv5NLiHiNgaAJmdj3Gft1tuj7PE9T7",
  "key2": "5hUXoFW2nkGqydSuqMKWNViwLmZyyqxBdB9XRQQLLMvRe3z9KdVRdCSGzaTeqsT7Ft8ivkJqEaaCYkc1tUAfHzjL",
  "key3": "dyRosK5avGDGwPkC89j9vb4xrmA1Ziw7ikGGkkwQJPsbTeSbzrzCnXYZTqyoqHeKSZshNWAcpaje5G2XSgt8oua",
  "key4": "yTfP9YKEvtNuteVT48xbzdrtzENbtHTACHiJZQE8cs3jsfDf8NUspmCLrkFWAnpeBAhaoHAYsE3DtggYQCarkBD",
  "key5": "42tT8kdPPhTzP8fZ5omZHcXgbvt674AFsTPbJe7MHwU5d6jawT4pvYCpACpVGaRxBHgXSN3bYdpznaWfg5VvFfkv",
  "key6": "2SQfYqAFj3CsFAQz6sQprcpZb34tu7oAmeACWJFwy34jUzznRP2TE2mVP4GEbkWBv5VWq8BWgn1ntACPxqMhAm2E",
  "key7": "58eotpMAJ7CaZgcq3BU1SSyJ9vM7J8WsAFAxUVYUFysuMb21HxbtaF4XvhGTdhVXHVn8iQx9ryfNBqaLK8aHquDT",
  "key8": "5wntvdUdYRuwqmNFaPBz2qBpLDa6idSMe8hFYYrqba341VitSEqZ7WxxycveWUJRKBCd1m2fYJDrPQyo1tcnBAwL",
  "key9": "3NxZNsMtc87APMo8CCaDPweuVmP71f4sVgFq8p5nrfNrkL6T12qerS7byeUoieyAawByQtvrwsnjwBkpNRjkibbm",
  "key10": "3ey5zw5n61VN5GWvnzmQpQBR7Nr5Yk5iW6kdpBLSzYDpTVm6f7rBideG9zJSrXhwbJhdvdWUjYVMnUekb8tNfWdt",
  "key11": "4XEb41HqV22qV92u2mN3aiGVMnAMqokm2r1KLW7tGFB1nfoMWrjGrtwKpEsVJZAPov2wAmdny5zXej9uBx3s6Rgg",
  "key12": "3c1zq4wYugvkfhhAxJRej7xBB3KEMYiCA79KSjnyrvSQkaJzNoSWzKoy6zPnkF7Ly63px7vwMwbU7e38GvM9cb6d",
  "key13": "2gKnPfxfF4adNzHqT5yavSTdGErfY2Y8LFNq5eRc6RpwVd33PbkqYY1qzsWg7oPvqbmZh6nsdQ9wPciQc4VTJAhk",
  "key14": "4PDmYgqJECnsVCYdrtsFsw3dx15h4BWYFJc16So6U6WHUJWLMPBeVpxzj11td59m4Bxv5JPGByBuMcMWUKffPruJ",
  "key15": "3rC76dee7P2vds4vn5HmxTW2QqdQVy13jVC4n1XXnwo5pZpgJF3PbSYzvLhAV7dFZrSWsNutUYry2uQVgPd9csBa",
  "key16": "3fYzuYBnBVtKB3D9onVxPpWiEpSyEsc6SrM6Um8E7pRGQmsNxT9dMmLfasroain7ZmYZFK9N6jJKVQVsKCMyfRqw",
  "key17": "3fp32UtKArQ5pntM1TXqWT52Qm7F6wM94akjEeFyzeqfiEoYt5EorXTrJH4mboPFBBj8BSGDoPrXiWMEEs8rN8rm",
  "key18": "4DAU5Qb5GvDKELuVqaJpteNryAo95wzr2yBn6VPkaqQequ5HjFqqLHcSXYYbdxzpeQuPmzerhTzhW35nf1kqJ6pG",
  "key19": "4SynvRDfKhTKSqyEAMW6xny9xUep3TerrtimQdxzwkVdxYPc6tPFMmQSdgovgnHgaQ2Dy17GBsYuXKC37kBK9iRp",
  "key20": "3kb333MevCYAi4unnFiuJ2cxqvQvo6nyrzTbZ5mNqw9driumx2YNzJzPmXoAGyhQVQ7DrW4vXkKVYu4qqXLGhAXk",
  "key21": "3XtGmYu6JZyoWFvQPjf9PonFEf2fK4ZjJNxxptCwLR2YLsqYXXgcR2YXXE2vtsTiMP9SBg4PWB2RZz4LcGmRdvF3",
  "key22": "2N3WmejBRQnmYwuWPCLaEA438aafVAfjE61RWNyatpTuf8N8oLTnTPomGpo57SumxD5hAcYxgQc9WDBecuFN6BE",
  "key23": "4zea5DvSYqumTLmbsbA73QUioh8dgZzbbHfmDfeuDEMs8pJVokaQbwAp6SHs4usZkAauwCEGLz1NLhjzVTyRqT8J",
  "key24": "3Wn7s1tpUsDi4q25RtHW6hCgLuxFf3ZUmu8xuHF2pjLEMvkPEq2r6sVR2tC7bXxT6YuN97uGjmT26rpZ5WhWx59K",
  "key25": "yPYfFpzwJabbWHvPpf3hFcbZ1gmYE7QEBpZxqud1R5cTZZbz1raaXiFwk3N1KRSzPs7YYsbuhDmXVJjSKmJjd15",
  "key26": "4X9E9L4P3Lr33njgjgq7kpyAdZscB7FKvkYkL7SZvNTcez2JiuQBbvhGZrrWiSYEM6AXHqGDsrC8oRARpt2snGMd",
  "key27": "4HVLCmfaibUUaMNuyc3rs9NFBzySieftmmQ97hqzFpfeejQRASRS1SJ6Dywjs6o8Eeg76p6L4AbugHCuDM6Wozvx",
  "key28": "5VJFSn1CLHjHrGqeY6Xsmmz9JFr32ufYaQ61Tc82dXuPoc7BbW8TQ4kYAz23bnu4ys39JZmdwfceRw6oFNgyKrPa",
  "key29": "2tHApcegLZ6zEog66fPcHnWfW1M1cabfpv2KySQbBzXTon9uWJzJ2SqUc9SZqSYSJsPnTerTMRaYWseXA2VWYW81",
  "key30": "3TMpXEXAQ2njJ9R8p6dBx277qgThofm2GfKkLj9tNcwwDAUTyM5rv8mbfRNbZcj1Crwz6XenBanTdENeeU8A9KjX",
  "key31": "5wQASEE9R5kgy8jK9Byw6RaZxTE9eYRoVCwrBwgpk8uryqnSBCErEifqLkiVM74wNrvgqspnCCXsAx2BX1jUgcSA",
  "key32": "pAFXq4kt5obL8Wz8QW8k6sT33sb4MvjgYtMjhWHfrKpFF1XgzK46if81yEmseBrVx4Jv1SxxYCjhEqEzydm5obz",
  "key33": "4sZ51MTSWKPNWp9AzYUCY2DnvQj1mKFNYRsrtai4kVxiNWgaChoEJUDWfJogpCuBvYCXmvG93LjkFWGQYMrHZjB7"
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
