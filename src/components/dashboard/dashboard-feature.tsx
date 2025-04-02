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
    "ws1CDZnzbrviZodfP88W1mWYpRpGGGuvWWbrBFz1moFjvyWNfLtDARFxVuGZwfn1pRoNwFvBsamsCbchiPYbeGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nB54iqoBqr6ZNbjNQ9orJgnn93HWqMmoPoVXYwm1gpKHqpCsZYitrRMWWrRh6ScrEgJkMPupyT9KNTwXYb1vCXU",
  "key1": "2ezPJ16jSFXPW2XyqVfUiEjD2aEnehXGXyTo4Rm26UfMGDxE2oySzCBvKajtfX2oaeA4mPiG2KXrrMKKx9URgxYB",
  "key2": "2cqSqYG6K8QJRaoSNagyhZTWnUAWjkD8GbEfSSX9BvhYZPkf2GRRfo9Ta6DeHbLvKDFLLc8igg8qUzt6GGx8ZC4w",
  "key3": "5ZHAYTRQSnbTHyxuuJ96p6qLAjGCEBgn36PJK5KeiMmcmNnRwHfTKxusxigTT6QkzfasCWoooNdUinFRQ1Bfv8ya",
  "key4": "hsjUEEMftTsxUT2wNkspPFXcQFcjw3cXyf9VMHDh1zzPqWeVMh8KLE1q5dVTmygYw94ihfXsFdk6sYY7fcc76DA",
  "key5": "57ewNJq24njo64ZtucPQmHwFDa7iB5C8rco5F12PQ9dre3J2mHpmp12pc9e8VHvpexTwqsY86TpLdaJNRCdJDs5G",
  "key6": "2K7cp67rDEB1AYScszxQDqSXUFjHv33scwiLiCoV6LJro26yhvffUGbP7mBuzgYzs1HLaPwPUiMyciTJ7Fjzf974",
  "key7": "ahCooWrCnX2MZC49B9n8TDRuRAHjpdHNoHCGc7hcHYg92Xtr6xJ6N4GjNkhcSuyVUfwL9qitmzfAcHqaaUrDKc1",
  "key8": "5ZE4vMYuGkV4nCe1WYiuxGWMeb6C8Jx8QDEEHLKev82PYye8cLGTptnMk3iVHi72UnkoZ6eihkibbxGVAEa8hKff",
  "key9": "5nxdZ7RMcVmkc63NPHgFndscnQqZiYvx3nMYcNJffuJjsEh31czpNZTGEJYh4eXS1Mr5ug6Yf1wJz9vRJQFbBiXy",
  "key10": "2QcSNwPkrCjGTCZH6MjyrW2FAphJbLkB5jbmYxjTVoRiCSHyiGRbjgHwrkde7fZRgbV89MCMViGbTVY9g9ApEbz1",
  "key11": "5LjASqEHYBZ6PAHyVwHX9WLYKCoTCpxS68vA78vwDQMy1rDZj4wsrFzTKXLnX5zNzKUMBsFTQ3oSXfZ1CL6QX1v4",
  "key12": "2MvV6pyre51aHzopVputYLFb5Ku2kAmky9okptHgGRzB1MtyLuhMajFRXvT1Hv8YrMhEkryJpuq6y893Y3d51mbD",
  "key13": "3fVtngLtjE1HResRgJXqLU1BXAwNQRNgMjw2CjRn1BivYyAwiZjEyEgaaUjTvPZbe3yrbqHvSqhoKKRMfEKEH7TD",
  "key14": "446e9axZSDtkJYwCBMjYMnbogLGg8uw14rVnFf5h5MtApWtg1cokBiozeCXaHZwCur165nM7vw6VfYVGoFhfvDdm",
  "key15": "5WLgtCkMXayG2Sw83jw2w4xpjCPm6YKYMRaConBC4jzqDc5Za9Vdx1o31dhuPLvhMXEA7a9VmgA9Bxjgb39MsxBr",
  "key16": "55TqvdX7NzVEtLa6xzxTu3dfERCgZptCr86wqKCUiNM4dSM4S874nY5DuTwzjMFWZFaLxx1hfXiEAi9EZ9dBCzDj",
  "key17": "wjokZ8Afh74bJiQNJja3rtyAbvQzUXSTbGuNpZAUi7VcGaJdkCqqfXyxVDBHNo4o3JuoGdZJAEHV9Q2FGS4vTAu",
  "key18": "41bspcdZjxmVadiQoH3yuXRCqfqETwkVJsuRppMVcsF7K7XzfTKDg6ndUm8RCEv5Pp7QJxKEtPkHkNSA1sdvJ6Ww",
  "key19": "2pCfjJG2ksBhcPLWwkJyy2sDn2xDKXGkcDbbvLWYnTDUu2MRQZfqm4GaFmzBgLXJHZnTfY8WSCuWpdSbseAN86K1",
  "key20": "FNsaEMqrDKeiY15XrcfdpUSK9sQaxP2cwxKvNBDwgLnPZw7GexRiBBkA81SkZoy7mfH96eE3DJwpDTkgwj8yLkT",
  "key21": "2vC8GRia3ZhPBNNQzetvfVwnv39SaxUVsr86Km3GCcUgnS3CkD18DaZqbKkeaPFEzjTzZxGBaEtzNd4uff558kEg",
  "key22": "3wfBGaZ6yhB5agpnm3RquzJxX3eK5ro6cpNrF8jEKZHxWCadzgVWdQfVDj9m5vAJJSdCYq4XJJoePrLXTP41X8aq",
  "key23": "4FGbBz1uW3xVfThP7ZfrSqsp1heNU5ozyNT1TCh2d2EhhKeF7QhfkJYV9WuyHnAqcvTHQ91R4uZkKsm84UaUdnm8",
  "key24": "2uBGdcQXFV4WN7XMiB3ffUNhDWLHLKtvMud4xuuiRrftdSAJMCUAQCPorAdjc8WZK12htAbY4EDShutPQ5kXdPkq",
  "key25": "4whV7GGVJ4xKXQqN9Gq6ceYBrHc5TvYPDANdTRm1EE5z57XtwKkfTrcGyLxz65N3HB3uF7Z2rSUJtHHbh1WJp2rp",
  "key26": "tCvJpNDyT6jUE1ddJPH9KVspSQK3zDwKX1eY5jQcq9x4LNTbErJiEjjiL1vTDqodtD9F4WkmUk46qasB1EJhfsD",
  "key27": "2gbuf2cxufEtETqiH1VGosm1zYQgEtn7hQZjbb6YZxBc5V6DTbYj4qYhEtaCUr5h1FGbCsuoY7gB5Bm7c98xs1n6",
  "key28": "QUJvm3RWsr2J5Hz4ZENXhWx8pHsaF2S1MmPeHVgCfKKjp7wAU86ys4EEgewub7J4PwjPx9hWt6zNaQAB84eB7vu",
  "key29": "59PVnLh9Fk8mcgigfDbhLyweQNA8skYcF8oDBRJcYQhkwXDWFp15d59D8YhKfUuFhcEiK6yxsnPWFLK6k6JKG95W"
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
