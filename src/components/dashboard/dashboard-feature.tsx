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
    "3naCjK84D2kmnRYyVRLkZWTcrgiRSSCkUCYRLjfqHYqvqt5a7XLppV6wTRY82USjb8KLgpKZYmo1DE93mYEvSu4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oHQ8TcEdAEgJoRiKi38ucAcM6TyaUxDxMsV4axHqaphsDS6NXpkFtk1JAFgY1zR3U9mfmZkkEHXUK4LX9291b3N",
  "key1": "prf75WzcAEucQpgqwkY9YbWHggByF6B4GKApmCcYAmVvJ9AQasb98Y41TTWcGWUeZi4p1bNkQyXcGWzCBGNaHvQ",
  "key2": "3y75A3WM9hqxze6LCBxrYCcM1oJSAXd8JqWnSnG7gvMqz7n8mYiAuywtR1SFKNx98R5T8yVNa6hmFB3CGSuUQKvm",
  "key3": "5FPcZoEBMHNgVsN2rUFAsAoKYCpA92AVi1Bju1442vtqRFagAHhf2tFXQhFqxDTyogvrt6qDZW7hr3xGufWKDoCG",
  "key4": "4VeE3kRGv4j9UMXtZ1vwRTyE7uTFmXpv2mKxS8daSjv2KZ6eYtgJ4ibsjaYvDbaFRYqriVKwkZwN5cGwCbCMbuw4",
  "key5": "57WJbb3e3TjsJnMhmzo5wHRJgyhARhkjHxb7kWqnjCDQB28CiVeH7wyYwC24wPCVoLKmb5eQtVGnASDGAbJHUvMi",
  "key6": "5Ntbqa6zrH8i8LgG7Nr6sjm9fSrt21EqdsTaGxt2xEL4tNTHm4SB138HLx1eQLJtMv6kTv6CU6Cx11w7VECG5cER",
  "key7": "gUhv8eY8aL63whGHqxt8YLgrfAVitYQpxrP28pRB9zrjRcwKZchfXGsG6qwiDpwdpB9pgwB6S1jD88u9ByViweW",
  "key8": "38Fj1LuRUqaqtLtLHYt7dKE9BUKit9KhC1PMaD12ZkGC9oA8xvhWsPp7mPFctvzdtWaCAYxwwMCzUKWUTca96GKQ",
  "key9": "xLRW8AqdaUpCgizwy6FukZdM6FmhvPjesuZHL8hxS2wmdtWqRxNhnqUT1o4B3vRnC1hR4s9NnaLvrBiwZsxJPj7",
  "key10": "YC4hazYTyaF1HnG4JCw5MKBF2Ae85egA1dAa3BYPZEDVtC6XAxYYW6p8atsotHiMtxdk7Xz8wTnwMfhB5BhkpWH",
  "key11": "67TaSCkzxSeuBLgW5iREyXvxJMN5WGTXn1Vjxc4pxrgqgcmbqPLAvYVjdbTmWjUREdTdHMJk7CHSACGZE2zR3jqb",
  "key12": "2LBmhvBq7d6dtTVmr7njSVt4tNacJ2Aq8uQkYWZr8C8nMRkPfYd3aMt77ZsTvhAfqYiYeLFAyCsppDf8nu3eQCso",
  "key13": "4AsvfMSnWx8mqpw2TeJLBLqmU2khjvi4dtxkULSx6u9CHdtxrRtXkmSwYFniSMjUUdPygq7SmHcKtZaKNDf4iyHP",
  "key14": "2NEFdSb5gNwehRdo5m6PubWSdYcAxuj3yohJgUBsggkdm51SVRjDvyhN8jUhyLvmTWyjBA38KEYmqbeaqkWSP1jR",
  "key15": "4DmBPPDrwX4egEXtYAreZaa9tzYZSc9TnbiNbLY1a9o2UvbftnYvaQJLqEXSULAW1Rcxd88sqoKE6ieJq5F7sXXb",
  "key16": "5FGPzrrWK7dYDhiXeg53PiPYRpy1ftunkEQUxrPftdzDxgLsAXeA8qjA8w7mxHuzVr1bbaqbxVZYpZxftzDW89o4",
  "key17": "2PfH7rpjGTBqX2ms3zhzk4Wo8SkbJnwix3NVHkfUtVoHu1ckf8ZkaRG5YDhBPRwauoqVpvfk5WaZKjAiL6asnpFu",
  "key18": "5UwL5bH3P8T5Qp1FVmRq4oC4Bu2VjPDPtmYHYfgrYzudPYmQWhZmXSScyoQACHmZGcC9JUgep5Jr9HHtZV4FWqFN",
  "key19": "3qxTZBNNoCk2nQwxJBu3fgpZDTKRApad3YhrWs65a6kBXKJ1QxWRkd8Jr8VYPSqHrFTsGpQ96upaNsFJ9pcnseau",
  "key20": "4ZBGw2Upwe4uwv9GAtfSbBFaXYw7nqURVZpkWmvaYeadE3bsn2kshdjrPRRRVGtg3HE5Tu8qe96pNH7odXtakhd6",
  "key21": "5LkdKEgqNkev9EuQgHPewarPKd6ZaxUf4hSbHLcG1BtyRVYfGS8K6uG4uchzTGkCNgw6pA5WunRE67AxysaCqgk",
  "key22": "ad58kEovFnqYw5scogroMkTEnHHKp8a2cQodhMDMsgZgFy8XwnYMnjKq3PjGEkAfuRsGYrTadPFKBBS7c4zcMog",
  "key23": "3p1VTNDUradTq3wGP3jDW6KMyRqQwr2577ro3QR6JmxjyhpxVrTDMzr58vuKoveienj77764WBmMcN5yLVhGorWF",
  "key24": "a6axbKgrHbN3zaFJ5PQw5umyTf7QLF3sk7bCVb1c8n3o859LKsF5jvUYKUSs9fAuwZZneGFjhdnZMRtRDCS3YfG"
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
