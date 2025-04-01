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
    "3465PXN58LX2QC4YP4yHXxambzv6knCRXbK6mfWw9ot8iTbpg4Ri6jNJhjMoms35xdnrnGzdvdKsiHtgWCyU2m9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oiCnJhWpjpLw8c9GePf2wkCUs7WeSwXoXQw3cqAn5Bkgif1pB17j8ShEAokdvTG5af8p5rVgP2usuUCzkHLivzm",
  "key1": "SeZmck5xM7cNsDvWfshcN6LdQNZyofwoKyzSSwhD3LKjiPXhoibAH6uUWShZ5KybrfAz9o2XMHy7vfpfwaF5dHg",
  "key2": "4T8oskdrpxQ1apQML7VfSWHaCPG8Vnmh2eEXD2x1FgxQUMUM4gMXmNUD9pE8TsXft12NeU6LMKkWBL1WduHM2ZDk",
  "key3": "gsym9jepYDhdvmjTj5VPHt6KX2hyAqSpY7ZhwuVJkFPpHL7rJYeUJjJ7LWjSpDHAqiUR883eA7HwHH2yWdwm7vG",
  "key4": "5grH1pop92izbGraELDeWPttHsjMsYV8pipajxcAa4jb9UnmBXW4hT3zkDyRgJH88hygy2sTEwV2pdJUPwiAxWGQ",
  "key5": "4ET7qcM5XZ7wEcQdwnFbXD51qasrMdEUmYY7mkhZ5wJEH8awhxRK6UjQQAA2U8SzoHNwj9mnkGpE4FGgEHoGJov",
  "key6": "2a5z8KpgpDsnajWpBxvWpprQopHY1a8fpvbSaNNuqLknC3JqyMM2iiVXNokEpLJpszG3L7VGRv2PUTCUYDSaa1cA",
  "key7": "47dAcK1EiewmvqghcCmudvZMPae6xYSBuv15qnLqJ4Gzxr7UtfZknAkYjLHB8A137gRz9eXkrtromMrQn1jCTn7A",
  "key8": "Bkph1treZvKhighXPPVkTnBiS6m4Kck53ShgAVJALKpaqrQDxAELsLBprNcREWRroXcTPTG4iSdg3P8hLyhTBuD",
  "key9": "2LJ36iWrczqwMiU1JBBgFvDLbLTyJHpFfTjtGMHcx3S2cpfJ4Zxf7NHzEB8xkUPAgZzLLgTtrwTNAexBgwD64dMe",
  "key10": "5sTyLGsS4iQ6aDZ5BZLZnBRQCxyddhfPcaPs4KRCLkid1G75wKaYitjnNoCV7DpKeYXpz4YAtspCVAXmkTryrQyA",
  "key11": "3JUripmUauujq5BVzA6ef8MYXyALEgUEQukyeW48P4B2K8s7fouicHAmigPfRMdWjadcMUKi2AH3KyuiU2Wn8Ppj",
  "key12": "5qQq6fvSaDJyknfxoPZaJdDrTwqzX71g3PuHtUcjP4CGyhtiCfPmouDzRRUgpo2pT25NqbPyQYZhvFgE29SedN2u",
  "key13": "5fssKyUZdXfKB2GAASVGWVpjJknF8XoSJuF93xNtyb7jBNR5YmYWNJfWqwMbuGoMhMABmzWiJD2DeKmNB7hra9ii",
  "key14": "7XePb1zSX1TqQQ4vPTp9tTSyerjNsuXb82bNDHaYyk93t1VjdDJqRvmqbQk385XPCZEToMxpjz8gYMEgHyfkmeZ",
  "key15": "39wxRzuRREqCUnHc3qJ2UjyLY9KrzKAgbqAx1Mjd5im59hzp6GzrfrPeqXXVMrsPNUdj7smB6CyeZe9fBuZ9HtsP",
  "key16": "5BHPkoZ4DVKLGnjc1KHfqoeLB2Nn4QBDan5b3ckZQgJbeo1a6DYHpVpZptJ9tjpRNadZs2mb9crLRbCvADZaFEX",
  "key17": "4kj5d39WJ2GcDghCu8PunmynBsbGpNdPsePqHGuaJPVeu2m6QqfYgoBjikeBj5CPFjDHARkRePxPsrVHzmWL98ea",
  "key18": "18dVSKdie9cXFBNapwgvRXPZiRHV6YwdMdnCchK3RCiFyqviSnw52jxT6yifnEEpbtLvk9vAED9U6yfSJSrLYJp",
  "key19": "8UiUdiDt3fjgpaqeW91AZVmYwudSrqyoYydmQgaoz9qKdPRmVrNX29CYdkQtgCeLpzpNpDR7kYk2sNgCZfxuHeq",
  "key20": "3oiufvDKGNBwBfZWcJ9XUjPyRBb5tzX5dkS3DLwMDA8NVCenRLdpCuqa1bH4YsH7EPRV3DGtaNTMHLR29HMDaK6D",
  "key21": "3su46UuH6gPqKioF8TGktcxTvJWHVxSzi4Ei4Resjo31zCC6u6bVXexfZcT6cyxtuMBtDLngWVpkzsdvZXWTnPtj",
  "key22": "5gCV6B7Gh2QwhGwMgazWdV6wcEnkgqR5zan8xRwY4yQGWQaVHH4F25s7Dkccixj3orMyrTfCy956uKTvb5gPoTug",
  "key23": "uUjyTo2vqyvAHj7tfbqwFccs35Tb2qMHBtHuZsGxGVkD3ZYYufBHEUFXcBsFEyXRXB6jajar6zsaFG155JNj69M",
  "key24": "5N3KHHqUEuUMUCFgG3h2eBtxMfZGTnNVswNF5sNQCZyCcnNK8z6bWnAjTV3aSXfC2hcT2kLHwUxFreDZR6w7dJq",
  "key25": "4iPhzWxeLVjpGj3zTxfqufWSdiA9HBWSKRPKFUWfSjVxBLos6DtLYf3GQES7nHGPBEDUqxDbYmjqks5WFG6FGVdD",
  "key26": "3NyWSxQk4UnWVBH9zqCvaaoydmxJAodfRNQcgFTUKERrm37DEbTmHzrERkhNJn3pQ2gQYVPvxMTj1oWzySnqaJbK"
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
