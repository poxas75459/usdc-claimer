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
    "31xoADgUrbJhVwocYRFnYhhkv9eFFWH36P5Pzf4axYRYPWqJUtrLv1RwVjXVxA6XepBwQr4BHqHbHbedYHGXAjfK"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "Jh7MWQ6gkMPncEvykyL4CBykzDt9sw3tXjWR3D8jsGuhdGkKyhdYY8e3PUG8DhvDU3uw5QFysHK47asKHBLv7pS",
  "decoyKey1": "xCQMDT6kU4xEoMduUG8p1cbuHHrrWAeJ9L31FoajizCR25ctu99crLAQ3vb9wnJEGGb6fWjX7GbygekRdhLk13y",
  "decoyKey2": "5mCp44dupjLEJzm2NL5gm5jcQX6ZLefhmcMTuZrqPF2cBTvcnS1k6TokUNxJ55VWPiR5JW8emVzyyC6gUvbEY8iJ",
  "decoyKey3": "hd5nSGX4RXWv1FRAiyQABUDZELziPkmWXUWQ8bwkv4zQxyD739vZrnagSJ1pKEzXBK35pTmt1ZvydDKn6Ux8vF8",
  "decoyKey4": "WRLLMjxWhutiv89pyVMm6B3LnWgNeih9TcdvnSdBebccntB358vaQQDqMhVwpBJRgSxmUcV6smS36BewAM2ijKr",
  "decoyKey5": "5vyvngvHqTy1fDzNrsdo6X39yi7ikLKND2XTDzhV9kXf6o4TxWezQ1mAkKteQvbbTBQSCvtm2hQ19sSkBtwePvuZ",
  "decoyKey6": "5LBZm4VaeZUE5y8smPeZWqs49H4w1mEEbWxFkgNFWNqm9gEirnrNNfQQBkr7i5djB8Rt17Mde9KPhozNfeedFupf",
  "decoyKey7": "21ZM8hx5F76ZbAZv8yq4smH7EHSEBuGt6MV581Bp5JqzcpufVjemLoDbe3Ug7aTML5FQ2Jt1CrzQKjHdgrCDprAW",
  "decoyKey8": "4XNPxip6oAuwCVfZge63gzcdrgUAmDwXKJ3j3eTfo6G8TrFgyeHGUhr5FEdS3MvCALG92ysiofM21anb2HV6VDBz",
  "decoyKey9": "euWB79VmqNrKkUS3T7FidjTj4xsDuW4gSopuEpzQ5rayXDQuL6h9bAsLVwC3iaA1Xydc93zJC1BBFL6JmSGqocJ",
  "decoyKey10": "4cyoWJZBSACzRe4DzXkbU6kpHhNyt2TndWBPAMEcNw8uHDfGuxZmHpsqR5Frerrfs8Qfr8hCMeiHjFM22eWtVEWN",
  "decoyKey11": "HmVMAkMa4GU77tHUkKzoQDhdK48sm3GMLGPJhkzBWvxwSoM34gMQrxvpHqwLVirHenMd7Aq1VdXwwDDjwzcPCtx",
  "decoyKey12": "4kzWqn6CzKQQhXgsFcwvNwZKZbfwaV1Gh6nevVDPgj8NcMJYzid6K4ZLuPDrqEQLGZF8a8xD6qLPQ1R7H5E3dKNv",
  "decoyKey13": "5BB2UQWDeGsrNqQiaBru4WgePvzn8ZVCuujxCw61fLBF54XRVDRHHH5QjuRbPQqH1bmFhfAXZr4RLrUqFUYXVeZt",
  "decoyKey14": "dX4mehtGe8Grastaxrnjd8VRqoJXfW57b7YKqCSZiHkwXSXKMuU7xoh11m8khJXEzCxdYUHQoinCwhkw6KiXbNk",
  "decoyKey15": "67VjLXtYkimH6Lz1Se1Z6LgiPn4TLEQczqsRwJgqgPFiUTbwg3FgcWeAhHYvoKKhcF9NMNjUnpZWP732fahMhNse",
  "decoyKey16": "37dJkU2bdLLsWRjFs9jQhT9dvRZArfm6cs7AntGBz1TSXqpuPBJRuEJ3AJthMZK1PxHqHi4SjE6nXiwBFhufcWs3",
  "decoyKey17": "5zX6jffjqRKum8qxmZGSV4uS4nCw7pFvJM24UahYxMBexLE11qVtmuW3CixKAhFPcwf5LKMF7GfEdnbCWXpjJ8HZ",
  "decoyKey18": "2Dsqvosvk2cYyTgwfcY8KNSMp8zKMHrM3jFhFbcR3eU11BPicdu3ixXmAebiDQgYcJKWETwTg6uKg4ZzJHUnBH2f",
  "decoyKey19": "2eCSiM25FvFpWmRzJsFwv56DMd3yfjCegiNUQZZeFUv7447UrmjQfbsUswDzek3rX2zUAMTAVMnzHcv6A4SCKo3d",
  "decoyKey20": "5ReDkma9g9LJmXUbHpBA9myuW921ThAEVGmk95mSHBTEgCH2NrcyQJcJeA8PTfKP8Y148cpMbWMihhVaCK2sR8ZB",
  "decoyKey21": "5mqfqG2a6RSX4iu7umH6XYCgZw23Mmz5ifdP5pekHrJr1qZU9yL5ZPTrVMesBAL4kY6n2XMbXHKDWLCjGq4E1VWb",
  "decoyKey22": "2akS2CzHjL1XTovYUf3w7h1yez5Qcm6Ltk43HzxKwLGDZcpfrgJV17UmCpcpkveeyDYLKKpfcgKuMNsFGENnA4X6",
  "decoyKey23": "ED8PCR6tAYxXXAisdsUjoemHGrZ4EBW5hAWpdWmT725Nx1Avev39kMnKoDk1LJfQs6LnEBkjtLg8Ey7NEpRdn3b",
  "decoyKey24": "24j79SkuXjB3zLsCtXZYgrRA1BhWSN6cmw8FeaTUouRw8e9zQK9sk1eJD5Lv7G2gM8kx2a8AXdhiH5cp3H8AVHzm",
  "decoyKey25": "2cC4XnvZ9rBQqgtdZLPu6gevXNYTYUN8C8tU6YD5rcFPgddK39a6QMgT7yccMKuVP33tJzgWTwX7nFdmavyRZuEi",
  "decoyKey26": "3ofVrqJBntcf2gwFSKwvJmB9JvtMKQ7BBpGtnDcyw3jrkpheootxDDVLN7FpYLgMAo1e3H4j2e7rDbK5szsJyeKv",
  "decoyKey27": "5oaBtRMzxqcyDSzrifgL9tYzBVKz1CUPfWybe8drf3Ge9FBzEKGZm5vWgj1tL83JvVJvf8RjqgrUnFAUw4z5WQac",
  "decoyKey28": "5LCAZ5eEgvexEYq32ftLvQgDt7U6TpUqxq9kAAp3ShaQoPXcDxRt9cvQDwmAyS49RuSCuJykbHxNJaGnkSGq9zPY",
  "decoyKey29": "5JLFscNdbrdaqJnKDDsBJPQFxpbBYS9dokB9fPxi66xUQEpxRG32xGmLuoD2KpbvRnwd6LWbDLf9bjNPbte1k9rr",
  "decoyKey30": "36UCtWBBDQfknnEaFjtrERGGJ4S8hEjfHKquWyCJws7eNdxd1Vo15LHJ2TnYgH9XtPnmS5jbAW1N7p2NPHjZjPm6",
  "decoyKey31": "677TEzYocBkWidDwXcvTrySoXFtN8A3MMmWirgaMNkcHT8tTfCBb368XQSkxXCw5t5dwS723DRe2QrvC1WdiDbME",
  "decoyKey32": "5d4Tp1RRLPi69XBkYg829UUVke9TouC8tyun845qCqZiiUpQMMohDgEYLppL63oqMdp8TWcz2R8L9cUMiNzwzwjC",
  "decoyKey33": "4CCPsaLPUMtTGB7jCXGjwE9nezmErPur6k7cwU5Dwm5sJaU2hmVn44dJJptBW6areSS1aAqTJBJbYJt97yqNR4SS",
  "decoyKey34": "4iWMiPH5q5gAeYjL1jQNfbBmfaJsgpuoe2h1EXUEbBmhnH5keXYCVsGfGsLc3CB3ngjDypG9QR4GUskpwfudp6sD",
  "decoyKey35": "2kiYFaueYhUsHg7vuCaehCMaRS7Sx5QLQutuwqiPBJrTR7seHszpYmipNq7sM2ZVrqx7Bf1PCWApLNE6293hZ3F2",
  "decoyKey36": "4Wdt3HJAoUko9apVqHdWDHb9aiqXm3goiuTCtjpTu5BEq5ztxC9AKmVuGnKCH4XokGj7KYMB3szK1zei6jZdE7g3",
  "decoyKey37": "4bAffdWsgsY6iDYJBvzLfBwgDweTRKepQyAs63vKGF34tEPNgpKELevqXa77kwQGRcckCjXAVtsXg3ASYHibm9mN",
  "decoyKey38": "4iyfcctu27h5vicuMPfoF3cSf5MuyNiX5LhuguWF9BR4tNhk6Cqcp9Q4RnBaTrcTfme39x2cET8sPDbZ1EdhLdbz",
  "decoyKey39": "2d9MPwH56dco4Qsjf4S25b3xgCDZMivNC8yvjHZeQvAqfarGdmbPxjb9qMKB5JxL9riLZkEUqg6v6s8PZJzLGCU5"
};
// DECOY_KEYS_END
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