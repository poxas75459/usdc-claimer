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
    "5A2ebucDJkcr3ASV25cV6gzPPnXPijZ49jsuwse6WsbcMiDfyGzjWm4ZwKpHZDqasHP7KqM9bSUAN3fPaWqTKsPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mAHXsDQ6Defv1ZdNQ8QPaAuemyMNNGwgTvaZK65c6ENeNTrikHfe6xqJdeLuAMJVPkSGCsShfS2knHdMxrhERkb",
  "key1": "4PWWGyDPzjfgVPMVtpkn3Sv1EzFNrhKW6ae25a9htG4EwdEuVUEvicrbvRiRkjRir73otkY9BtwuXjDErDJ5FnYX",
  "key2": "4UMUaHdKEhDAgKcj75Gaxs1eoC8vUBq2hP3yyjFsVqLQTjsp9Uj1hAB9iH5NkzdgruAkmN512qquazFRDp725XmS",
  "key3": "3NYJLmo1Lg6JguoXxPenVKbrSKcn9Lhok7aEHfZyuev2U5efdBdsiXzGeTHwPHHMEFAuQ1j1fRHubCMLhGFNzmhw",
  "key4": "2ADvks579Y8Pqaym1AyVgFURBZYnLmXCX5MWZDmBPGmjkUyLDz5hMPLiT1UoQ3yrMAH7VBAan6Fh8T55DaVJyW1N",
  "key5": "4gwzFJK9nCr2U9Ut24uVnPoCz6GagMFz9fX8Fo2JFkUZVHxQ2p3FTcuRPCotEofvBE1zJWtL8PjheUmpwfTnjtG6",
  "key6": "3fVuJRMNbwVBRhDBgkJEazZyNKigwrPTpvP21VaSJSJKfocxzrRiuAsR3ZanKm7vrBYiZWMRjVr5J2iP9zVNtGyz",
  "key7": "3a7NZRxZk9K3ZkPLha6zHanp9iP85EsKgyTdaJ17cyEURBxsjZrZUGoEF1M8SDMhemshhU8rkLz4FnfTDFBPZe9X",
  "key8": "51WLsCEEPVK6DfusWA8jYFCixPdkF1ViaVL7pnePDmz1PL7MDDTgSQj1tfkrsp6dNTCAtn5Psv8Cgb58wZ8BATUw",
  "key9": "5JVeS5PP4DBv8xuwSVJVXckFDp7gyUPwJQgGMnS2NbvEKDkvMBwzuj6TfGEg3VGFJ1GPTbKbHeEdYSAcNTqfm1Yr",
  "key10": "489xMhLiBqqftT7YJECNy8oBFvbT3n4Cg5p1ZNGb1nLQqGfmKS2iMPaX3rgCHVrcKT238ReunkyxMvEh9uNt5y7c",
  "key11": "3brUDMDsoevo7XNp5PWe6mGJ9qgqBWTfyGQppdVu2ut9cAziaXqB11JDiA1P5bTGoJkMnJ8De3Fnh3CdPGaFryje",
  "key12": "3dajKsKERoRgb2jNhbJeJ1oVTDmyRAAEoMaVGoQasw3jbKr4xe1hfatZDDXu7d9J7TSEfkkXyfrvAtopcztH5WwW",
  "key13": "4WzsPi274bMxppP817cDb4HWmXyHCUt8Xto26Atchv5PCadtFQRsXaFd7pJs2fz3d8CQiS3TsW6mcz8uZsEpSkb5",
  "key14": "4iDhfT6D94s73b3nibqfFD51xXaQ8sucXsrdpX2TLUdyYHEyb9hJ1xwbBE2VRDqqZfUt16eR1BXgRSLXc4roRyVz",
  "key15": "2CtdM7HJBqAZRP1jeLGjVVuwbPXfif9gkZNFhCEgFC8QHedR4JomXFQcV99aw9GeGkGfUaQTzSNBinj7qz5HXvQ",
  "key16": "4RVdym2xH7BcjYXPn9L1Fkwm8YZ2ecRVfXV188Y3sTVFrVEwGrRKaXUHK5ZF4obcTJdAJjGLeW4FgjvxDmeE9Kka",
  "key17": "4rwxdjP91Y6z6MNTYpNethbZsF3kfvefgQgeNbX2ZCeELKNv5Lz4CY4xN8y61FpZbn22njuJaPRK75ALMPEL8ZNY",
  "key18": "5braHW76gp7odFsEVeTFydmg2ufcfVqpxAE7s9MPfAkfFUCPyhoeGe8vgwdw8dNGEPCziDKAhZEQfjVJvwzWo3oT",
  "key19": "5NmGQcRoZNkHs55thFoE5psHpHBsgyHJ94cJVJCjrFpXS7mXW4MsNEX9NXG5RGUe3yX3KPiMCh8jXWgpakTpZ64W",
  "key20": "3dH77Vur3Jz4BqARQLEEdXMQgMZkx9ATnQmC8yDrhcdKa1XhqBqu5QeWNynLqLY4R1GzereM2Xakb6Z3MPhXT8vG",
  "key21": "5fxLXymfE1LrSpBpwhrcHLYTmyJW9GnqXsARdkH7pffPEHrpYvvgEmNCp4wSRLprYhCAYSAjnX9B4srRxVjWNoRm",
  "key22": "3Gh6m8AHEcdHrijPbgvSZBSKkGhAzsitQCMarJ9Y9dxBzjs5ZkQbVC2744xtBLRzS5ovCprszjcXUaZkaef9Rj7S",
  "key23": "2BRu1oew1kitmdw7LAYLYWw8R9kbaHjmhfPcWj8x5jyx2XiBizyyWmHPGNzNuqEVJnacSgywRygPsgQjCEisPbmX",
  "key24": "25vGLmDQ1usGRJF6CtdRJWayrBJLuQNboRGZR9k3y3Q1dwnjQmhT6eFFzUKx8TXaAL3TWysCsBbHe3NhD6wRA78q",
  "key25": "5fwrkxeAhnukk3KigUpeNSCQZpNXQLNEkHWm5syMcCvGAdtmKkPETuKbXSo32KEfzq5CNwXF7gKPYeGviUVLte7Q",
  "key26": "2VbUoqsoqBm6TgTHGkHqbmGmn4cLGjmzyzXPuoW8qZQ6FTXznE7AD6wG91NMSs3hMcWC82wq6V6Rgrnz1kPoygcR",
  "key27": "5dUsMg6riazVu4iqrjXCJzxtNMg5GTAVRgXVTwJQH7WZohNMGTiZR4egV1nFyVKdwuTxhCpwF4CuAx9HcyL4yvjp",
  "key28": "4eXHiJwEbprUEyknT2mYT2TSPgvHgQZSR4KZnk5GmSm6czZvXX7Xus6X37QJfXxHvr71Kdt5dKVCysdQJ4EpMmCB",
  "key29": "JdBQ1CTya7ZPrVwZyy9mzm5r12BCL6bhcYqSACRjKe2QhJbAFbjx3kGAmnfWEdspLtzmfLyEeGCR4Ebm99EudKK",
  "key30": "4oGi63SPxjXnh1K5GgZ5oYtc12Pm5BqizmNWGFRQGufzGM4BbJb5nEhcHLCqF6DsSd8SKji15QybbkrNFHfqFEB4",
  "key31": "4naBMGSeZvRm5eKHdNy6nAABnKPKCF8TC5CoBto8VV9phJaVURuCYukbSANG6T4msv7FXQsUA9QTCsVARYqAFXfv",
  "key32": "Pbt1UAsTpmrQ2Bo3WDumHYPenZXGa5nJQ971BPAnLAvt4eCfZFis8i6WVMLyNKrgoWPgqfW17acR4Jwc9V5RUVd",
  "key33": "4AHxHggymSj3EsiCR1b5n8iDgoq5bn3z47MdK5xZADCmFFaq6FzBqE5XLFxdzckqy7N419MGT7bZVzrxHGQ1qV5b",
  "key34": "4bUSTyC7rAweQWrHaUd1AwqYU8kbqSLfjo9JYM14J9KinFE4iiUhoJX1gAW2WFhHHZ1aLARBy3mT7nKeKs2PoziX",
  "key35": "3KAP3RHofwzy8YkoHb4CycfDmv4gcDKxFhdy7FYFgL9GSxL4mL7tGgc2PEv8YbCu2rHi3UWESGDxMgCYNjRdVTfV",
  "key36": "4wumzP1fagUn2zvn3uB7bJDT682jdP5nHQbCmXPcUzhfxV6FpmgKz3H4JdC2SCNL7khDR5izL4ddWJTXeoYyPNj1",
  "key37": "4A653oXLS8Kb7HARGpCbFJdo7tpdwPj56YSrQi5CgVGkgNGT5f475KmoM7fQ5voU6uVKVDJ9bPr7iRf53LPGpfeW",
  "key38": "3VKoqsQpgq6AVGNuZoBELzWFJitwriws7Nf1QzHsReDXx3LsuL4CnHL86eFTan6wbi5pQTuJXB1pBd7wRic8fXGJ",
  "key39": "uYfMPBYJbSrxUWeRwR2mr66acmUfz1JPhR3rezfUtbgwDqTcRatyX4NLoCyimXJ5vq48NhUBBrYn7sfTYjpLptz",
  "key40": "4ttF68exxjPtnEwCd86mKdrrjqL4LfrPcPzggn7fLAzu4Dg7yvA537K7YTxcEar5VGdteqs5rL4bcUeJ9jjF3CYj",
  "key41": "56wegcrVPNs3ZGGtPPFwgWW197yNRf5Xzf2ph4Xy7TMM93gZzyxAoSG4BJgxPwM5U1BoVpZvjJN3Ubv5D233zMqZ"
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
