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
    "gRjwNy6zHFRFW8AnDgfaAykqm6BoqnEUvfpraCGboEec1FeqXpBmVkfzHoRJY6S56tEgtw7UiHg1kPknoQKChVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51T8uBP2CyoHwzd9B9xhud87bfMRc7azUeB5gDHxLWEQ873GmtNKVVANcAbwbxSsiFSorLwamie4LNYz4D5dQoF5",
  "key1": "37W9YszzqfstuvEMCUoVSDsjx8ezSQ3itN34TWS8dn29NGkscwnA9apHjwMT2DVQ38LxPqwrpyLkLQtNSXcy3dG7",
  "key2": "2HP1rKwwMvq5bpjHdSQkGCgejyox2G1YiTLWhHbSVaMfvxEuiUdnsAai2ydN8WNVFqxiND2UyYorwhMCrcoAxgWP",
  "key3": "26SNa51vziKdpeL4x8gSh2DRwt6CujkfbaHT9eTvQ1riFQ8UgHcWy4VxzSGB9zgZ1K7rhG5TSL58b2zsNq45DUxT",
  "key4": "3E4P5S1DsyU1gWoFndwFcK24Ea7aQJatFPrBA6eJhBKHY6P86RSRgeJqfEiSYCVD2bJrEeQBQKUsGcrKdrthnfnM",
  "key5": "27SNBGUUW8xLm4qYcsPYEUkgjLqGNew1U54KA1mKfVZH1MSd4bAHRmKMM5iFytUDqVagDArViVW6acSM1vXs9CZw",
  "key6": "5iq8SRmTeQwu7YrqSTvdoUAztiYoBc5yDWgKNWhUtP444RVyKtnQDTqwc8zyWrVENydfXi4Apio6PRAzycMkysFo",
  "key7": "4yNs2ZUkSjzocDtazKqEVPPEhvru8Lw8gfNmh4QPwbLJoU18qA1tDFxVEJRqDMsDt5fom56nMzmKygi3Hs1ppND4",
  "key8": "2GyXhWhLQSbgKc6q5PE8PUdqgRaT1HR834TDUMZTX8pZisbeyBkSh9n1tZVUkC69jRNqXyBU5BCM2aFe9XTLv8im",
  "key9": "4kGW7BS8eCSB5PYDbx2hj7djnk2BJ7CgrkLmthwpPmBxNgub5Dg8PuRKRYRksofrDbw3raFdt7QU5eThEykLXjzw",
  "key10": "3HVcefP9VF4PsqxJik7GXhZbRq9spUhUXMkVkzmE6jyX76t5arHGZE8mhtnqLqVdC58uiFgg8NvgJdU4go819ZDR",
  "key11": "5UPRsVUy6bpp43wppu3nFX4rEgLhNPng3zsWAMNYFjotbAs9fWmR9bZpxjV86G7CdrSZTvYFBquarZeotKUsvdwC",
  "key12": "4An7KuDhMBtEq851HqXLbjGBroJQwZfB8dV2rZMohTkLjgMfghtkJ617fV6xwyejiDHM8negSiZsCjus2jR8HYbJ",
  "key13": "ubdNHjyuCRoXEvx7rv7M5xSobP7WpsGVF7krP8yf2Fq2r3kEFVUy3t6AH6ftvotX1wWLThsTGs4h3rNwZ9jCQUg",
  "key14": "yjnZdvhaqsGs6pzgLUA9kKU3KBN5VaNV2aAsAn33nbVPetRh5RK2UDGsVSSCYZCAMqgKcn93QXpeVDLrzqcqZQJ",
  "key15": "2sdVReDqAq4WYkygAVmzT4JmVv8t493yDsS64HvjavzXcWyS8PLQQENU1UhgwZKwcxCBWrP8DYT51MmvTomFCxXE",
  "key16": "CTCcdq4q2Atp4aChtDRChKfwCDRBMcfBt7X4wNxL9xZ8V1S9DxnBk9PV2Ugtn9dANKUAG3eszgiV4QUrpRsgPNa",
  "key17": "n693uTXp1CUDs4bK4kM4pftZ1A8SfAEvKEPwGStyLaicc2PcdEQSQSFz8aH5J2apKCBMn5s5ywSpjJWAut5iQNy",
  "key18": "4UpoBdzhsYWo2MFZtx5zeCi2JAyPAuCtsA1NkY6C6Ce8dBtShymKP1LPwryA69ZcCqz2j6AtVDrN8X9UCtGXBPiw",
  "key19": "3xaQfnjwPTqqNp9jA6Y4aczqXXz3ZxeAFNCHtgjyDC2S9nvRteo22enR7QS8qh69ksdbVCh9ssdKvbCDFW5Avvu3",
  "key20": "57kUTYkUD6DaJSLXjKZCGJZD6wQFk9QjPD9FXeXn6f7NALvVdYm7ms2gr9ugThhYJ5Mxhp4ENWJBnafn86o1pz6a",
  "key21": "29gQtAcmRZM1GTh5oCd2ZzUZaJWc729UmQzWUYjrG4MXCLCRTH96QYEcFHLt4QqbYnKgyMyhXwAxXyHsVHZg57Rb",
  "key22": "2BvGs1RtMKjpWRFYZ6jez7VhtjxkRnVsRYazZPXCnzuHa64gAzNzCNDxVzvVvzYVkKyuKS3J1hW5S6pz3qDSjU7t",
  "key23": "59QCaieJzk6Uv41DcYgKWdNDCFWkmr3C3KSwpSjbj6Zz9cKxATVNKmCe4ZyWyYea5VSG938PU37Ba1P2edAmGZCL",
  "key24": "2bzePNY8wWfRERKWC1kRrpxrav6jGvk4Mr8KU9A5QEPNeHZWEWYfM5fezFWtq2cuBvAtnvw8RyUxLnVrb5ASJ9za",
  "key25": "7vjrJ1EMuhT8ZYeJkCVB9xGNrAZXeLvTaYAAkBdJEEkhxpKKikFt8WroCRXrLktLMWdKf13moDmyne8xKS3hPeM",
  "key26": "4CLQV66WidSTG4uGtU57fs6itcgwfiNjE15QtC2V6oJBpJ3QEMMDfkEyuyaiFPGJuXPEBkn264v4TnbALyV1aBqs",
  "key27": "5KB8ZgS2rXnzxrhAGrv3tQT8xZPa711JQZw9yYgE6yzpwMSb15Esq6fSfoirJJwFE7JivnhLxTCf8LE1EPmPqjYg",
  "key28": "xEzaYB1ZaecNT6UEaKgghm1MdnMEL23D8VrTaE6bL2VCo795Q4yqQGyZG2EBZNKHJ1wqDWwoxmWt7bsPW9wxdxp",
  "key29": "5HB9VwwdbqmvqsR6Z2gavztjTgvbemW9z159YjWjHLmHGiEVoDvfdd3NuuoKAVHBhqPVR1s9GxfHbjRubQMByzkK",
  "key30": "5cuia86mqtgTf8AR86hULYowBrayWLHDGpG82qd81AKTtkAgKVjVxSYXDPtYjH4q4jYSNRiynfDCz1sQrzLoKvSo",
  "key31": "23EPsnknpKn2vvBrmXRLBGjSKkbn1ChRriASXoCnifTN64qDqYZoBTBJB2kDK4x1LWQd1A5qVVG6tj6M8om3k93M"
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
