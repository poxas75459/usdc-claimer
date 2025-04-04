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
    "4EjEeLYXMMLhC2b4DtYqtEY26bA1GARswhxWWUF78JdFPvhCVnotyYX4kW53xFzFAKZMYNwBaAhuWpZ2CUwQDCFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32oKcehZFv1RAo4sSeU9aUxKVE71xr8nVaWBupai19aG4r9ks1adZitsxvnNJ63fyh7W4eGZmxWZuvLYZWLbiLKB",
  "key1": "3a93RkWyF93SWm4Att3vPf2qihV1SwHVbtZrYPBmNqt2rHgJPLiHvHbhZ4y1tRuGdhQBgqwjCAv4f2Y1sQbiJDhe",
  "key2": "5DP1BKawCScbAmiM2BfoTS717Gur9ByZKfo4uZ9ore8qk5KMFYmErvE1EikE27Mf8o29NuEtnuwmwJgAv8myBpXd",
  "key3": "5WRQrCrBijrq2tnTvNzVkSCFphnjq2codC7YSszeoC7h613AkJmkqUCaxcEN5qGz7xfESLaAh38Gcx3SwMdXnShk",
  "key4": "3jzy7FAhvgByib19nn9TCfJ7VFmBANaX7v2vuCBwEw4PrvrJs5XRGrwTkn4fUuKQ9KfMzmkrCaHxDLbkS26GmzWX",
  "key5": "4TqtNhjpQZ1c7oWidasrw2Ret5rZMnqKSph1sfDfssszEThK5GZ8JYvBKvpq3xyrZT4gccVhdxH4wNjteNjnFxuo",
  "key6": "47nG2eKf4bJmbw9SDmoTEuz6eF7JxXLHBMnXsXmrVpBKkenxFbDNZUU8EvhGRHjRPmsvoHPDr4ngsmGaxPrYV4HL",
  "key7": "3y1p3qsxxTB3ca2ZTVdC4NnPdPfXhsxsyS7sdV4UwCz6DTXRtBes67rUJtpqmYamqsYWAwEksBg6S9m4L4fopQbq",
  "key8": "5ghpLPXBkDV2FucxDWT151uCspFZNu7eVk4B7bA1ShGrWudDitg3HYJpceT43tr3Bcp2C9VuxNMWq86tmR1k8YbT",
  "key9": "5eRKKzF1tp66GxhJe9QoUgiznswwPNM8t5uezL4VxCXz65WXFtdezJabCXLeCXk7kf3GZpncNezJhge1fxTPv8NP",
  "key10": "2qLH1jNj4Tc4UUwD2weBE7KFYsbYJP9ZoiXn5eBA4K2xZuTekxMWJZCWjYeUanbnkBj1AGiJWsZPsoESUkatT9ZV",
  "key11": "2n8jmMHP323UCEeW9ZSPWiXGPYiqvTDfqvdEJHZFXV5SgeNSeCA9j2YhRfXZAcyNz4WkHycfnVFxGjApsyhvyyuv",
  "key12": "GZtyZ2mxMDi7tMVyWxotc8zqDULUapErEdR8dFW6zxokjXLGn4KxAjhKZYHBSuUUi4r7oCAfXo2X1AYpDfwC8FR",
  "key13": "2BbfJX3fgc1hEmw4wBzEVsGLYKbG1XpeAJnUVA1j5MSG2FPsJHfUguU3VSGbftX97jncbQdKPPVSNwjB3wkHdd7s",
  "key14": "2GZjci5otvrBDrXTatb8kiv82YKds5GgEYiA4xmPwS2mRYyHQrTSzq49FzxjQAS2k3EVVRdfxLYKAqmBEdUymeEk",
  "key15": "56oZkAHUJEBHage6tMzSxvoSR6KFJpuExebBwaZi99ULGRcBRv7KTXtw2MdPbeeXULg4S8mJsGhxntuUgs2ZvDTn",
  "key16": "2ih5UHywczk7aEJrdc5DW5NkF7NhaAc8jDEToHSQa1vGfHfKtvx7mMrD1GBD6D3DzWwhF9mQamcoetmNjQ1UUCrN",
  "key17": "5crJoLBJqwdhkwBagRdx8U64nfsZJeTqaKJYvJjPEBE4gxbjETCrHg2SdZcsg99EV9zRGz7yMXdRgXrXWTCmVAxU",
  "key18": "uuciGcx1PaFBye3XUwgeJF4VxG27tbtX3r2yD3voTovgjhYgatfrne5W7Ss8jZuWeZSSBL9gZ2HWA99rqn9gqcZ",
  "key19": "5Htu4PpjDvyVJvxyETHBRuVhP9FW5MHDTvueJyen2QSzYdxV29wQUzwihxS3HcRNZyCNNSpWaL3mbN7QK2TaW1KZ",
  "key20": "NAjQYu7xbenLUmagAPsgQJ63VxEXfrfZY6N9qncyNFyJJyvMXqXA2SMh9zrdaCUechoRmBmtkN6cJyb8jzwbqAx",
  "key21": "5Z1cd862ZjEdbdSvK7brLWkiM42qRDBxcz5BypY3YqibuF7oujVahdp6fSkjtgg26YKRz5nGczjrVDqPR1mGPDGb",
  "key22": "4SwykMGdd1S9JG5SBNqXbhdNTvNMZbxDRjXh67xRoL6azdqFrGgq9DLi8UgHPRucVYx4GSxyfgaiH2KzmUb6RA8o",
  "key23": "5syQhNEb6jq15sfEA4L35ErpJtJgELRHdFm3dGiPTjQn5mRusoSSLPZRnqNfrj1FHzwV9kY5qsTwvSozmVbXxpU2",
  "key24": "3yjvjBfRdoE2mtJgVmEeB6eCsWJBM66RwRVuWtmitdKLwwBFLa9p3srVnQh1SpEBro6GseaWQYSbYMg4jj2o5LqY",
  "key25": "24WsQgHsfa5KVjxsSUCSkZ9P3rDhgtXhabJuQPL9QMrSpHwr4htXYz44eKrVKqRVFPLsQ823icwea1uaCPfct1nn",
  "key26": "26XXm8zfvAKZ6PDh1xE83Z7qrETct6Zjwz4J4Doya4jGTK4Fg3tE9oKm7d1ZZmGBCbkY8AZuo3t43NJWDFv6z8KE",
  "key27": "2KQf53h26c7NvUcib19fU6kCTkfv5KrWNLSfRQ8sT5CFnWNz9L9gP3WWmw3KKSiRLACgVuJiRQHgoSLbPn6jaEPx",
  "key28": "3HvChgTSpJpz4GK1gPMFovfTtuwatbbpp7XCi9KtmqGkDM1uHZe7WcRJi9voArSHsS41DsTRm2gHYYRRSYrqWAk",
  "key29": "fhhQEwyMqAkZ8gUDfTvpaXiRHWvZwz9a2igca5H63SfX15UcsDVWn8ihGsbsQKpFvFHPYUmvsAWCYppx1PzxkDL",
  "key30": "5BCRguE672Gh2ZVrbSMQAxXQrttSXSctsEa17zhq2FXZb2v8VxQenehi7gCmDVR1jr6jGqEn912TTPDiCBSK9E5U"
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
