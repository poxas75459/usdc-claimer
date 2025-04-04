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
    "kZZqadoYYnxpqjXBv3AMkaaBGTkYgKUqwMFzeTnmkaGXvA7EbP5W7hs9iKWKxEVPMwBuqk9ULByzE4kqFY8u4iS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pVquExJoBHA2oq1Ghdi7qNt9UU2aC7w5kHGHcpjD1zaYFxXALSvDZcfZifDKfaqy5zRtixtXeMTg43YdXN82HSB",
  "key1": "2qm5ec2D8XHQu2xhT6FXXBKmDCGQTGgieHEt6nyaUz6JVd2tTFkrVbxxmAMBW5WHKgBEHAGcA8FKvY3tgiGbFf8W",
  "key2": "5Rv565sPJV8rVatwgkN6Bcmc8d1dMJ3nGNqSr7VoixiPbtbPV2PnUAgoRLXcDTkdcEtv22dYd2qAqYRopKRygofV",
  "key3": "24rszJCwaqGhCv2jdKogVtkVx4BYqNgCira9VToBW1pw9AsMrxerfcSgPnKWHm2pEpZArx5zTG8Ac1FH9zJ1FgtZ",
  "key4": "2j4KX9URT7Sov7fLSbpM9gnDbnvNXjHYB67L1wVYxhae45Co8cfuCwavcLenMFwghEAqTHAAXKWox9tNXTWiKgnY",
  "key5": "4isizPqzx2J83k8mWWre4PSkwaEcMfV48EVMuucYHFA8FQvwyPDcbSbu4eWUzXYytKzgbp6ah1JaUzeFoyRiMzn4",
  "key6": "4VGdELpF7J9JizgkmZLLvKpQwkXBhmMPCcwbEcqqBzksU7piKCxcyMdzxB1NsqA7o3znxedQHjkW8ggmqD4NFeSC",
  "key7": "5VRT23EA5rZVjmnhMvHiq4u8MQVE9JwoFPPhkvqubC9u21GEWiqEuNEmY4ZchSCQaThxNHMSCwvrUchnQzWgzxex",
  "key8": "2brvwAm9sxW9C3M27Txr1ANQAp1apTNTStcTwptG1jxuTdesPi4PFDdwgHY7P1SL67ncJ2B5kahaKwVFsGM1p6Ew",
  "key9": "2H6iKHV7tbQYfDsQk7MP4n7ZsRyLgoPo4GSE2dgmuyFbZCPBWB2ikomxutKLFABfApR3Y7LQDR9PuhFs88kfmbdj",
  "key10": "4zgPCm8f58W7e3unCJfesfpX3HQv8V39sNj3swaXnK5CsZcmWR31R9HzxpHtT9RvWvFNs5kNr2Rup61EzThLw1mU",
  "key11": "CgKne4F6cDXfoCdhEGu7T38M8u9Sf6d3f7ybfRXSddrcBM4vR86oNwt4ejAGBphhSnDWmf6Yhnxm1FnU17QsbTs",
  "key12": "5469z5xBVtAywnNkQhVLzeQcChZsrjRkrypGja8eoprvReTJpxqtvLdB6YTYYRWXSJw4SYYivQP8F3uw3ehu3T6j",
  "key13": "2SXZjqsNHuCC51DbicPhS3gkShpGwm7cNjZodm7PQzEMD5scz8zzqmcZbStaN53cXhb8i9HzA36oqBe6wafEGUHN",
  "key14": "QK38CDSq15e8GhUuwBUzN6yin9mq8cHEXkCi99EQSdQ3n5BGhDjTr5wWpdAnB7riAiHqFp7gCW3LDdv6XR6EoRN",
  "key15": "3sdoMwD2jpUbTwzodd5JLTKADrS74dsZVTthjkZc9GRHL91SknrkwJVYDkLhWTEMC8rXUrDU9x18tyPgKNrQeSHW",
  "key16": "5DNBcw5JH7aTvSyAnJU4pPimVPWZfgFxYsS7bBaLdUVsMWwAozydic89kdu4RQfXQXT8pHJ34JAz6MNffeBXe8mA",
  "key17": "3Y4hCCMHk7CDStxJVTaVJwqRsuaH1HHeCC2gUXDM2RY5w8bBHMEmUwjS4K4CiKsFHWsto7snGBMUMKZ5rU5dhRYW",
  "key18": "4V5hbHNd15kjCty41Xe5jxeBBzpAgXbJqR1cainupbq1mgzMMf8YjM8zwMb3HJ7fPJVq7FE1J6SUbpiW5iXgHZ49",
  "key19": "2iDHcEV9WvD7XkXK6MvFJi5xZnvEKwXeFrrckwyiH61vBvgxWiDF19rF9GDZJdvj5p9cceiLd5kN1ijZ2L9a3tZX",
  "key20": "5eJorLmLQAWfwSxBGMojFag6XhZdRhSrMtaxiuHfrVgExKDXX4vdbWWdKprMwDZAnhSVKxpxubyQSHS38gZSevqw",
  "key21": "3k4kdUtvSN61JdJAyKCnXJBYEqdrBLjhLDX1Hc28bCvbUuiexqArWWkawTCcAyVu9hDJQpc2mtLowDBmtXCRsMp2",
  "key22": "4JidGXcA9BwSAgDqo32j86yjS57GcrPP56iEcEbF39ibhGViNCotmxvqEwr1Doo6JQm8pXt5gNUgHrTvKioRnivi",
  "key23": "244ZSoWAcvk7qyKBRMkHLnzPax9HmkTyGJkHW33nPDrgPDmkkgKKP5H59ifG2cMeJnu4koVRUKLonnZVsyrbgT8E",
  "key24": "2JNRDbENLzZXACeesmvd9eKa9qD9nvdkraZAVdKKGLd8x5mFjVGJt8mnAvg9HQBY6TCopzsNyyEF1C98FNhKuWc4",
  "key25": "4wJGjBArSYm9ZRX7MJDFvpwR6FWCWL9MDrdsE8LMoVngfWj6WkeFtH2kTy9ybciCqhLj15kKbyvGCxHUJ3KpAAq7"
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
