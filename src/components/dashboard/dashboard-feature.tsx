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
    "4h5rYGtgkjjJ8cMMfmEd3krwFTx1dPNe2AAQ2cNSqb51Xagie8wZyr4izD2nFojY87XauwLP5ibHBC39pmXSrfs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pRe3ZwNmmE45MLTyp7C9H21sCHV5MkoF9ePXMXowCidGCjKNVGxrpy1wziNsqj7DeYvPz1ewhWU5Qx5gsyBsr9C",
  "key1": "2ZaMcg99MXi32k14yoTR9mup39nQbqS5FvPKgP6DdVfE8vzq6YoFWt2rkZytP6xzfYENZmxx7ZpgFnK2C2wpccDN",
  "key2": "3R9oCLyvsmPJa3AjoW4mMMdwZFs87H16sEBZVhYf6pWTaaeSV9tG4pa6FvY5DHt5CuVDTBQUG86YLHx5DVfA9xpJ",
  "key3": "4GKvxMBMDQ6j3QdmNyjDiX9XVZWUNLZNzDFHmDhiojxszUG5A7niZDKjUjNW1osMvbPr1X16BADQJgR9dAc7bZVH",
  "key4": "5aWHk8RWevcmoZJwvbKtwo6VfEHeBRs5ZHL3ai6Whpe1M4CL28K7VsEbGHaKGS2KUL3rHErhzfpZvpixaCcZQ9Cu",
  "key5": "2ov7drMg43XDG8AULN3ntYvDLN3vKjZ29r6VL5bXvs8qXk3nbNByF2TbWvL7a1vMUiMdX2PPkjr4XzxgUfwhp9Uz",
  "key6": "5WJ1hShQL7smxGawx4khfnC8GRSUdSDETvNiQ6uC5iUTJURnvGMioGDpYGr5VkQEDuFMjbY1kyEASVpAqpv4cvmd",
  "key7": "5V4TSKCCX9Nr7P7CNMvAsrASemN3ewfdUGFTDTP4NX4nNy1T3yatdD3KXiaU9jHVJcbQqeUVot68dw3skkQMsyL3",
  "key8": "4zkR5F9967n16SrjKpHgq8GTvjmb7bRJpa1TLkC4ury1hnb2exn2bbARv3bMqXTMh3L5wFoLCTCqr9EAyVciEjqX",
  "key9": "Y9we4u9hpBMnKsSHHSTKcW6zuuzGtYKyTh9P6wSnbr9rQUSU3XXsUfgRQTFtwiFUr5WArTdbALc3zQiXYPqutoq",
  "key10": "4n6PBFjcPcDSYUDFrCmcXFsKfm9GBn9cSpSWDbeGMPez9mQU93FDhHjnQ6kZ3CN318DSJ8CLCX7w2yT8mpurtzoa",
  "key11": "4v8EutoiF56GA4J6bL5RM5G9Fi6vqDeJQLDb3JgNxrdDQDF5oE3sMLDusMnqdzhgKvGf7bAGSmNHgrwt8DGqTUWe",
  "key12": "5hVX9csmAknpBydTVEF8edUCjBzikMNEytcftTpoxLxXCiCPjQpHen5Bn5zo5F8PJjAqSgN65Vio9WP2i6AJTwbS",
  "key13": "Qfq8d3R4HwLHoMPTza1fhamsycAzCz731e7f29xW5bZc8GgHEQj3Sa57FzFwUkjyqyECrfzFmsF9g6jx3wCqHqJ",
  "key14": "4ghFKuyzg58neyDsfxshUGA2RTGBPspmZjDF2Eyvy2u6W1L2UthkJW9rvy63pPuEMxPg9BzPUdKoDjCDNndekvQb",
  "key15": "4AF1nsoPVXsvv5YVrUcLcmnWWj2PpThpwhnwSui4uHqQx8nwNrA7aPwBSwJQK7wqN7cwLj1VaKzh9hiBbahMhQRp",
  "key16": "4ceTDLoYiAPVaLqHZWPK1GPWkCNGopcGxWLuVWTcBmLp9cvHtcv8eQbRsx54QPQhCiQxv544DJyR11SdP98MNSzr",
  "key17": "61y5Ypw5xe5tof2Tw26P9Fc4JWg48nWPXRMS4ySDFo9r2vwUhz21oQgPa97Y2pG8iSZBZqeRmvuNeycwjRiESDVC",
  "key18": "5JEdYcPHvpB5JM6dsJgiHTZxJo7rnfDgJtgb1gLAA6mA5eKRHTxhR2baBbcLyeUA7W2Hcqs9x9P3FxPtm3bSpX1v",
  "key19": "5ZSDUfDCdjswJqPYWpzqPk59aWY5w5ppHTbss1Gv3NG9s79hSKLieQFMoY4v8hYKCcSdmqok3acYvPbzJk81c2Ei",
  "key20": "5keQxozQFbhWUemkHHGU3EKVQG3EaWSF4ZD9wj5eNLiyRcUjR1gvHBZUjn6CJY5HcKZahFpkmDfo2AvtL7VPaZ7E",
  "key21": "2nSv8RKCq7NnbZEM7EvQwSLoeRB3j4rExPDzotKTt6SB384oKX22akV91jWSAbcuRWQAxQCc9HYgQuEMJJYDZfmk",
  "key22": "3LV3F75cpL62SUqoUkKdzCE2NfuLVBSrAM2ujFdWMFzUQD8Azw6DnKeECcv4nQZJKwz1EeekmgFWqFhmCzxcZwh4",
  "key23": "31SyvsbCgTGskYRnjj16aVYaMbiikSD3fEY35jvq7g3SiTP3yuPEP8vCpsoz9SFfdcLqTC9afrXyjEjD3EyNvWJS",
  "key24": "51uJcAukmLAemYA4mqtiJ87LnjzpN8pdxnw4WWairLHE1JYoyTLEBTdxJ3BVB4Hm86DnAS36izkGKEe6YEDH6LfS",
  "key25": "2yB4LNoRMvSkueu19qdZoCSuHqyYUTVkYGGdqyCcMXXiGksyL4b7FRihiPtYoALrMD8gc9BC3TgAtRYfWqT9Wxpx",
  "key26": "5SgDmXoFK43iqqootGxRvWbCBp13W9czowKnHip9QN43aYWGUZf7JNds6rymCfAF83DEncfLYxAKfGSaWP3Z7aY7",
  "key27": "3kSk63E3tWjo93VMR59to73yCkXSxt9Pq6eiTWdxz8pGgCHuTP6gzPJLBD1ZY8YaWXR4DGTbnFc9umzMXENkcutj",
  "key28": "4hwpgsArH1rUaqsxfoixnDm8g4zp4p3ruG3yKadLkVXNXcDxg6qBzP1nPEgcdkqybUr4FqMe9RKMTnChJ4M7QAHb"
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
