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
    "D48P1AELfze4FyKHUW9fAMPhpY8GYHSUqq2RdF6aN9PjZ8c3pwazkY8xHMLPcnDtV4bXbmkFxDiuiq2CdLgANHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22XtxzcNV2rGbZzfhiRendAQxat2f8xCXtxLqSinHv62Ck6dvRxWFKtcVqAM5ViTYVmX9SEkFT6rFDLgHMUtY7qk",
  "key1": "9Lhz4Fwfpj9ZHD9NSWY2SS4Kz6qXWtyXJugEhEuk2B8URxehezYGhRgmhcGaP2t7TAFVkjYycuZH4oQRJo4ARLk",
  "key2": "3RnT4jbUQAMavtHSX1YMajZZDhXJHEHMkL1JPX2DzvNiaz4tWxMCJ7Wh9QWWMHx14awCwN6Q4nbTyZueQFQW1gBd",
  "key3": "2a6dp2kb3RC3oB4K4enGzuYKuh31NN2ePSrjnZ5mduqdkfbxYxS8DAGGdQBMgNmhV2u6CdFSFiZjdtvQC2BGsuD3",
  "key4": "26oqp6dZpfzMhHhBVyoBJnTSwHsFnTy13SMtA1DHQn2uw9JdBHxcmfSKWknKqDQaEmjmkjeVioduPwqwNGD9Mqos",
  "key5": "2RtMXStbC5CkhomnGmNnfggavj28AtMpeyZL7g238rLUmmVA3ekpgqsicCaCD4gLPMhYEES4VothqMR8j1b7hwHg",
  "key6": "4APX7GRGjjDRFvXWFLUsANVN4dYuqTQNbeKXBo3ScXTdH9DRUuXaz56DhW22QhbG41n3intbgw8h8tsbM7s88gjv",
  "key7": "3iBZWtY6yG4Zfqs9TfUa97C3gp1xSVYTW8uXMfX5ji2F5dCr5ZWn79m45g7wdEef6iU6E6Gt3jECqhQLGkHvwdSP",
  "key8": "22mdz6jHqTZ5Uv6vzSkQ3cMnMSm8uBJok2vfXygALgVvvxqWk6EP62gTF21qByvEYbr13aifoffXbjPEDkCC4DiK",
  "key9": "2eEegS46b52okNi8gR3vvnGht4u4n536p8865Lk7ZysCT4GvYZ8bqbBMwMEL3ceH3GMURgXqsddnTY7KLYPue9He",
  "key10": "4Evu5VuRZeauKpQ2fhAkSjgj6AxC9Twc8JeKidAYF3KCLc4mYceD3Ji7zw5KLWBtKGvVswkGHV7X3Xs7KgR3LJvk",
  "key11": "3LRgiZoxNc3s41H1gj4qBPJWMsZ2up2J5M56ncBLZUDfm9yDLiQrSFoNDVtayuUyhq4PfkBD7uFv2uo2XH6WKfzh",
  "key12": "5zxBBNYYtEMoDdtTo7W3jHWJ5imnxtkAQ4ohhn9Ys1FMECYSziKdoqnyZazfiPwoMHf9w9WHEDQeZ8GUpxqSNZZH",
  "key13": "2rTr4jWQuSwVvvniw8PWX6bMgWvsZmc2DP3VdqYFwzBKALFE71q7SVXQDXtYfS8h4RmXk4gncPY6dBQyhrc3VTKj",
  "key14": "3amytCLW8eRJfH6u8HRuU8XPjmVtYRNBPvb74VamgVPTYLciHuxKckZU5pcLThJj7DxQCg8K6xWzCw5p9nt84wEC",
  "key15": "3o2va4we9RmHJwTNkFtiYwWpVKN3o82RfUuT1KL2o6xEzxUfrYfUXWLG6VsKew51yPK2qL3rtRaePnfjkFfJUuRr",
  "key16": "2kyLU5NGUYFSQYcFy49SyBgkHXao1gEPDoY59qmUhR5u2DXTosnpD4r3tyVbipyUVWs5LQf6AR9GUTkgvQ1e6nhC",
  "key17": "5PWvCXeEQAjEjpWpQeFBZwW1hyJU1gPGovSpkFkW5TMG9o3ZbEBEtDQdDF918X79x9UyX473PKk2oFKHL6SxknnB",
  "key18": "fgibh5FtwkfUyb2PjCrLsgFzxan3pgDD85FrCQ6R6DCmrgUcos9BSKxZfAJycACP6jx3SwRsbYXWKzsKVKh6nFZ",
  "key19": "2F6rEWTASPAiuHXe1D68Qx2P16txFQ7Po5Ppy33QhrCuSzXMELYGy7GkpYRHQ2N9wmpTYi2BmyYuox7QPGHUfLYQ",
  "key20": "5zexmmJzpzyhMPr7JRy6KJbMuz6N8TADxDs9pDpnoxrepHuBY9NSZZBQA8JUQbV4cba5PJGus2FYWJ3jjWxvGzb6",
  "key21": "48FzRWFyp6ABFojrs2kRJArGCyL8jMx1BhbXdSb2uRKWZpnTXtHykKCNThGdJEev7xkdHk6vRcDPjZMRUjZVRHwF",
  "key22": "2tn5xY8M1Qro8K1dVANJ4igjyTvFAbdSDyGig1KHkNB7C8RVAs51uk4mRQsjALM61gzwZiE3zp9w3w5eCrzgiW2s",
  "key23": "5fzv3jCWpk12DsQxGTCiw19dnTcYv5wrvJ7mjgTDb5zF9itAmzetHseQoSmH5meuj5LpQRDSHGYxjQxEzvMWZedV",
  "key24": "2sLRwbNKyFAudRBC2JgKg8Q1gTkwnEH41d3zZ4eziLDvxw6dDUL3v4TQtCEqcdeWU4917e8FX7FAXFtG3m6phyoD",
  "key25": "3FyJDGVen4cX9ufBxzsDNWTnfaD8RrsbejaJkaY2R4UzBvvC2Wah6CN1F9Exk9esDner8Ajaef5bXMjXHEiVXWw1",
  "key26": "5L1fUPNS1RptHqLTAfDuy7SZafeqHvUfLqSs8Up7AV8dcLSk5wZSGzaPuKNbHxhGH4TWUyu9VFe63NA9HQxk9Snm",
  "key27": "2VXTDnh739s5JmXnWkDXGMhHE1Y2gVCbiTw1qPHWEAsvpAuuAWMoJtKrrJJHVmDG8Lgv7Ue4JGz5mKwezZDz23Ve",
  "key28": "Mfxey7TgKjSBbJRXg6bFiujqKfajjaCdEfXEU8MDAPKi3rpWkDh9ZCyuZn5GBkcuo83vfCkwppYDLmPVuNGDnaP",
  "key29": "55cC9LoVVYsFCFN67MSm6XQxgCRRiJbQf3BGKkKvWjZ3zqw5aiLQuRKx5RRUoagt8JvGR1icxGAHosre1fnr8fse",
  "key30": "2e6E1KXTz6QEbsGxHu5Sw92HLyDERrHxy1BuzULDW1HvKHJEgCAFgoLYdCkdyVAmJNZxG9gVRW2W9Az7uM9BF3br",
  "key31": "8oz1skqHJC8BwQL335HSmpNqY7w7HZftXYru8U4AobhzCrGr6gFv786DLBrh38F5F4NYdG5nxzZMc71s33MgHy7",
  "key32": "3AfjQYip3n5bpFWh6XF824WyWBuDZngfVtV7jmbhUYtr9kiTj7c6yszPiXwr9B4Nq7wTFTsgVTXtcCdEB3KWp5Wk",
  "key33": "4MjwSDqgyTKf3eVY9k1SfENMjR1kBPT7ZUjaSnY2fZic8F5VBezDocNSagh1NEETRdnrL5FqvQf95saaQ5qkKCUh",
  "key34": "2bVF8MUm67Hr8QLyXGteeWct5to9rm4PXLH2oKmV9msXcYRXk8YUmdUpN1jimofRkLPobPBkP6ei6u2fnWmD6Ci7",
  "key35": "SRDUQcdRMnFZK687Duk8r7BXcaVmtkJRm3RNziraYuPtc4fkZtAt8HF1tA7BYokjC1ky4trNr4sAoRMhkGmyNMd",
  "key36": "21neZTXCaAWaAxBxzkUuHjdFwhud5a2MehRriGif8CX1AcKDNh5mARbgSUwLM4psJD2JK47oqduiQ1QtaL9zAiMz",
  "key37": "2yyJucjDiPzx3qf3KjzjsjXFuoXrpF2F2tyqtrf8gaPXyKpZCPV6Nd4p5BfFCQ26e95waNMikEXfri3tyfVW1Mn7",
  "key38": "hi2wogJQVBFytERsGuv2onTM7J1G8VnvCycpzFNsKdjBCvRLTnKa2yUN7nHyeeoqqgyUSY1eM17bviKHYDgP5JF",
  "key39": "29FfsAzWi84SUKihh59ABrSDSNdnGeu3tJgBURgk3xAKiwkAE1wcMGAXWUynw9PXRy47JaCShfbkN8bRgMdRdtzR",
  "key40": "R1REb5bc14UBSwuChw7xE7QbKtyzdMZ2viUnn9vjUG3uV3A3HnceY4TNughQwNafR4bd9p2jvofkddLnv2KVzrh",
  "key41": "4STgY2kSXciNdvJkbWmdphfM4AJkfphb7HwJ1u9xb2JfMLRhtGfNiXD1QPiMa7hRnS7pvYhQPgDThQzQAT1AhMGs",
  "key42": "gxhQGawbRFK69ayx42S7p4aNKaENtPMUifwn3yikEDpbsPiKKn1kKKAkmbFnqW5Esm4MCzZrzkHJCCTXiHmgdE1"
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
