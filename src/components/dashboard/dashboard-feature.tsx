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
    "2V8pwpzvZH3ZEw5EqNAGrHpqrAYaGRVrJ4bpZ6r9n1J6Qa1HhD1hTSRg8QGvV4djm5cMCyVmgEjQmjE3iQN9oJrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "efHbRt8uE4dCevgT5486QRSpNqS68PkqQCmSWmB4AeKLLtE8jWf7rq96Cs3yEwJEdzkwddM3FnNLKbLuVWp6Z6p",
  "key1": "QqXGAuLumq8Z3f8SjdxCjGYtqzZvMjiP8pYqaGEpVqEh7HRzngU3ETbZKDhY8nEY5gzrggygPrvGE7nx5odRZfC",
  "key2": "54ctWaDE9Ka9GkeJwhxQ4kgLhfbCq4hZfcUsbaF2cBgqjwRZBcfokw4Jm4PnsBXmqkHkrr3csLbogqbQUfcTQBrU",
  "key3": "4rDuWtv4JQKa5m5z7ubxmnhG6Tr3vPvFKbKqqcwvFEqWZfZTkFHNysgJVhwdcoApyyAxnvDjN7vwovzeFpK6h4uM",
  "key4": "HhTruL3ySUN3NYcKXffnFu5xhvodpm2ojesEk8WYfVMhuN4xpE1XdmJKUYUKH44331tu3ohGNoQeCWWHG8Rm2ww",
  "key5": "4pnLC27qbokqZi9JqNfpc4wcjYUCbP2svqSVT5cWkvbsqtutoiSAww7Ft1ghURmA53vYByeFgckccmp7XVjcXyHF",
  "key6": "5vSu1Htk6bgrY7dwWxi8zmmobUVX7ism7hjkwfz4mHVrMTLVB5YvgcY3Ths9pKRunVKA5pY71fLBXAX2Fk7shkV1",
  "key7": "5aqwq6viLd78PXPo461dVTh9W2v8dN3pWGbPpA582CwMxrFfyETyjVUbfHr4NLT5ShtZT1wNBPoDiX1YdxQQiAvf",
  "key8": "5ZSTX6mQcMsf3LnWTjd1L6gn7Tm2KZyDfhsWU4d9pswetDMLgyErZcja8DS4Qgo3MXznBQ3nT9abwVDM37FBvLJZ",
  "key9": "4vcz6ReXrUGgdjJj7r8QJfiQUPc7LRr6UftC8WQRHDCYkHypGvp2VyQoj4PRwY6vk7gkYiYKMUaTtJ2GC6oyqSeU",
  "key10": "33nHe6ebesRC8PzvkkpB55cXhFmGRFSwig2GdPgQbPTM2nbGJGK68F9P72nbbaR6AbV6P8YU1LsgnMEGZzi249Tx",
  "key11": "2KCkzKSpKpXaxAscZUkWRhA23UmACtJVfhavDbX2cpWUywDpdzMdaRcmTnS17156RoTRt6YVoDqjfAtwUnqCJPfe",
  "key12": "36RNy62rCuucPgP1X1PAtiwVfnD9iemmATh5sH6XMp41ferwojVG47y3UkRhQmWERjz7PMsHZCggaLGPfNY8hMA9",
  "key13": "57fLwzvXyVonVC6iqsuVLcqYK21dXW4iCMCxfWsfPtr6LtJbsDSZeCDQ4ZN1dT7WECHVRDJEUoh65khAfsYVNmTa",
  "key14": "5HPaRcwVaqfeQ8T3SgkUwJeErQWYvWe1TSPNs6NKpHazW4uqXnZ81SmopQteWfGzqudMRZxWFFcGwyzhPKwDVaQj",
  "key15": "2RpRa3SJ8mam8RZS7fJ2uFzBg9J5q63QvvUMx6tTyp4DUsmhCGXBh435Lbchk8ztxGwRY9vVxxQWaThseNaXbcPn",
  "key16": "4YtqubaDxGpPWqVrfEupZo1But64SVhxPFvmURTiYaPXS6Rmx1nKmSK8yj3Z2HUeWofCZsBW7EyfyKmHQwg1qqEB",
  "key17": "2cyQToGnVKG6HUeDMNthGRHvTQYqSB6HcWxvGYsSP1B4uVvYJ5bc6BfmYJ5osHCPjgCg1reeuGFXWK7NCZUu88jV",
  "key18": "3Y27NJ1Z2Uanj9ssLUcZoyNZwNbN7feHdAUAfHgYaiaL5oyRsKhxH1g5wNqihP3tuzXdy3PragrqR1gL5ugnmhJV",
  "key19": "SubFQen71md2d6rBKu8HqRQjJq6HPMztu8QAMD3oNjJyvoekYrtPQZbduaBBTs48RKWHx1H5m6gDrdMkptybdse",
  "key20": "2w13hhwtJRUJMTjbdCTRhpW8QNiSLyYDTbospGVzFhEWHDXtqgFve9DDjNsTWMoiPaz41UZXmkC1LWp45d8w8ckE",
  "key21": "5FtPz955wnDLZ2t4pm1fuGpHBJ7F1FCPoTvEzpWVy92h3uXyR1q2tnVoB3Uej7Kz4Qyc9ot1YW5vn52KuERDqLnG",
  "key22": "5qTUBPdx1sjar28KPp5YUZV1iwLpEnV54SxafkDXsU5zzye4sTKwM9TeQJq8iHGd9QDCbGQpdMhiWGWdiVCyZQZb",
  "key23": "2bnqsZ9dgWqWh4NEVzqvUzj3UxvVrmrHT3ZQDUpu9xuBCF9ov6idAVxWMj7tHnLjoByRgDtBBFvM5Xu1TZynfCHY",
  "key24": "4xqnY373Qe4pydTpp6Fokm6JA8aV8xF9LeQMSfKfR89CFYnmwNpC7Y8hwL7N9puzjxi3NaFEpG6xWbXjY4YdZLhM",
  "key25": "2AJwJhuspJf3qoH1PdTE4avNGcuk4zPFvgaLNvwz4DxLKxLNxAJwkA7y99KRBSxUChSmidQJzJDcchYzCkPkAafa",
  "key26": "5z4QUsWDgkkvk64NUtdhdDPhpwYbYbY7kYfrJ89xKwkB5wvRx9RpJ3SiKNzDdwyAW9WGrLfHJWgFfMUAL36AZT3F",
  "key27": "hS2Tif3N3ZDVD9L9BvL11MRoMA3fmxDdNEvvXNHHpekm9AEB1b87W8RVPeWbdV4Cth7o6gZEYScdkHKksdayDWn"
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
