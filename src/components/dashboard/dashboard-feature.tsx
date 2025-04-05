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
    "h5VMEBroL2HMa27g8GQQGea17M1oupVEq3s9eXGx9YheBCVM3aqK2xoC6sg5mcL5ibHG4NK4uvX7fPZD8ZcimRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f1u3Y3K16ETHw8NXX74wSTxD9J4v7P5PVbMa9pKm5jfVu7EAkMbJnbcBa9UWpr2w2heKrs63XtA7j9SnHFJYf39",
  "key1": "4btscW4TVpTzvmQjyXva91nwgMezshB6kc3i816cDchFCujZQ9GAUhvV1LUxZTnvzrVxmcpD5xjtNEvN9SGi5KZ9",
  "key2": "4xC1iZAiKkBJU2H4XwD5W6T7DJc3NJ4YGRn9XJ5dDYoSuJtefWu9Jt2RdQn7sVoD6xjppN4kHwAA6rphvMhGQ6u1",
  "key3": "4gkieU4WXX32DxLKB3cEiW8jABYm5yVoGPFzMto7JTbnefGRxDvxTrjT5esvgYM9RGFYL6BZVCSDdwqz7vYrs5Ke",
  "key4": "4JHnqR9sDNL83YbhoRLPXZxLkiupmTpF1L6SzVwbaA21nPREcB1Bd4ummwweLcVgzdhfnZjS65AYLsvJs543eFi6",
  "key5": "o3HnzS8bqXxW9gkBphuyRAiP1dNwtvsbrffkBpgXK6BQwXUAZZFTMovtD6x7ThDrpHLTBD4UX8fT94pSLMdbwCp",
  "key6": "67dBZSzzx1UfymERKfUpxcYC6MpZ6m8c5TYeMVX9gbMe2kfxRuLsjZma8vjg2tVWvLVFGnHyTXpKJH8XhgeEM425",
  "key7": "3UFJit1B8tuSxLy1LNYHTaJzTjhXDkrjVWTP66y8eRX1xJcALGNQgchsqz9Mum2ibMEHfptBKk1ndzK8ftY1DVTM",
  "key8": "wtdNXMSFGf25ED4FRmuiRXwhAKgwwUQkUzAKyvmwpxzD3o96NjyVSv35uormwawXDS1qvcWowtYVg2ifx5gMzt7",
  "key9": "34R98uD9poN6qJy4SD54KRJS5vnLSfa4otfPTDxKiXKsNNfacNmTP2iNXFeZntmbjoCAhge7Tms8WP3WKUwyiE7w",
  "key10": "61ngEUyDKLnNSi3ycmZBr3vfhAbRvKhLL7gRpnkyzyZy49Fhq5zVZi5sjnkin6i3h7EYD351VEgbuhP1gVdPcbBW",
  "key11": "4MBQCvNU1Lii1PCN5HSvBocbvJJcGKsSfYWmSUsyepy1ZUY3nYHjSVDKXsVqt6gkiRxXJzoXemwV3XNK84bpHPvu",
  "key12": "3eStcsBZTTtGgHqLP4SPva2scLoJoQA1s2wJu5pkfrotyT5hcC9uiL7nDEfVLAqBeD55hnL8ouJbX7Lys2KiJLVQ",
  "key13": "2Z4a1nsAoFDeHSQcYp4GKXSoV2hLNxgykUVA34ZNywQy1o3jV3G5CUPH2LqvjhKKoSjAqCRCL3zxUwJgFntsP8F1",
  "key14": "ymfKNUYJUytsEi4iVBvHWxP2actNi5z2qZzvQur9cv27EiaWW3wUcnJA189uzHczoizRcMUxPUHLmkhbv3qLqVz",
  "key15": "4ppeZFqfpV3ezVjcQePvoo6vqtCKN3DTsgQP2H2ajP2DoTQ6tnHFLEJbvFqkzHEXLGTSJok6ucDSAGkSk4b248aD",
  "key16": "21DQPq1VieAvACFy6TVMz6HYzbLr3BU1KJoimdbawAUAzeCUDEY8tQ6odD8S2CdUSD2HXvLXrRhtLtX6AdF7QExy",
  "key17": "3MZrmBzeHF5ML9Fm76UcZsb3epybtGmfm3YnNYiqjfWvkwWvTsGpsrZDV74XipH5dFHx97wFsFS2717dPn4Y74Gc",
  "key18": "5TYpiNAzsQRZu173jTv4D2xzJroE5d8BApvk6xPpofVs5arGa6NhkFDJgDLkZzvdoqGmXuRdTNdfDAuqN2z1LR3Y",
  "key19": "66ZQHS1AV642x842jKLMUHV6cvfus6ANqcbzS927vH3JTzjXGxawULw41g8DzM7GoMKregwBSZeKrySgiYz7sd3w",
  "key20": "hBz4RDnrqMVzSagAxtSvcYnhkVr5AQPeWJZ8LJ99yZg6nib5Gq3oaHmSch7mFerjg1g7uRLNfn4gXCF6gDWRFLG",
  "key21": "5p7Garg1nMrNZVicJCxBwrvjhcr2GZT2ZvC2cpKEevfCjehZF2qBuaXjLZUpQ8WwhQhNrzd5Fdni75pD3j93Yu4A",
  "key22": "4amxn8gAS7ykkSyncY7L6ybqNZnsShPdtQf2zG5UXrrQFfkdYUJ8SBgXvr9btNk7nTttJR19gH9pyHhAUEGJTdRE",
  "key23": "52s7cUpvb5pif2JuFSWBs3RAgZqZ2gtmgyTGGgf5F8jacYoHFS5AaJzxf7wkLuibXSQb6ecyg7vS7Mem9u6XwFgc",
  "key24": "4J6GoeivprGAvQvektjJv4jm6sxfGsszkApYeiEJtavH51cGrmfMkFfJSiunopEs4Ek74uwFcMFv6czmG8DryU7N",
  "key25": "4UmE1gCh79ep2EE5RHo8WD6r5i3914m955YPJzzfzfbVq5JUDR8tMVLAbZ23JtsVscY5Di3iG8nsu7ENQFw8ixAT",
  "key26": "2z4bFSQT9ZcU6abxUAGJTNSxP1SdHMtXNtXq76FUybY3Xh21UWqrpPDUhgUmorrE7VBGHxFUoMLq4vvcA7KACJSD",
  "key27": "3nPSbTmntNh9eZS9QXPiDMmrBUhRR1DroiCPQuQoZ8PMTfHmpNNWnkCimyN4eBPDqCMnn4Kr2PBLUQEhMDgpHqdp",
  "key28": "49Rtopp7WHbAfqN8hWYMg9uQ7zMaG9LU1tEQYS6Wdog747JECQLBnbna1rcG38s1XgE9K45c2DuH6xwbknK8jQ3w",
  "key29": "5nbD82C9uu7UEVfnxC4MqZmL2G2x9eiw1w1XFCPkaP7A6WFancCcSgHssNA9RdqpkutWm6HqeN4pPqshBWSHEvvZ",
  "key30": "3bDLf8vdvz6AuntrpH4XFMcHWhBEwkzowScDeU1Br7HAAT3MeSWiBNa36hEegYSdXoLmiQp8grUszn8Bi8LCfDL9",
  "key31": "4v8TzPSkCanUEFtxHanqrJb3hzF39ohjmzgRwbfDPCHbSGrt8YdHzXVbCJNRtaC8astg6qtLpVRfzEe3JGhjFvtW",
  "key32": "3ryM92EAyToC1Rb5g5JGy4wYxvi73dKFhjLBMnzAdqdkmATDPbAQ2o6JtAYCygNLeQAxQ5VBFSHbeNPVcdTk7RpT",
  "key33": "5t5Avh2jfN3v7hWxVUavcEnuXhCdhjZHqq29MCd2tNzUpeBt4dUJfH6UzcDzgqcHBY7w9bsmcpcvbmMxqt23Pjqz",
  "key34": "3D1ZsHj7dRCmsWk8Mtk5KkTGHAjLb3n74nAV62YHGdyejYWbmy3TCNEGAZVdTREhu5TnkLhAPm27ATnsstQhrkLS",
  "key35": "4xd7b5vm5bi9r5x9ycK6YpFAhLFRaxrf4TDj7q4rVdAqE6uEMumqqsUj2iiTZx5gozZBKipUwWNPEbkpbWN72aDN",
  "key36": "29GonvoprzhTZL3wtnrE73Z9zu8F8B76feUByDrFHrdXnhuxNc14jz5Ghpw3XQ61bXLBvXHiD1BdKvXGnkQWhqxW",
  "key37": "5RdUiujos9Gp651i1tqEUNRSn3jyVHZQYAwvHGjpy3tgYfX2XZgNayuPZYac3xNFpumqJqAeDkP8Rj1SbaP4gi3P",
  "key38": "rauwN8FZPE4vFzWtXauGSSMXR3ZFcWNciqtBeuXFuoWaomqN9B8gjQRhyJNzGzwvH5qqozkyra3eKkmxj3fUn8L",
  "key39": "464V5oCUDoayznT6DDfCNLEm2rrWNtkCsRoxo44vHhG4VmEyhMwLJL4ztLRMAymw1MhkBm7HkvnrELmrRnNWCVer"
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
