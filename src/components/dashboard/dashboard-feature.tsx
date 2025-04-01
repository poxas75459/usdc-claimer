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
    "4BJSnVJig9szd8oqho3CNNueRHbgNFSCG8dQxJY8UX7qQASXu5kWCU5t7UgjuDQqr3Cx7v8pDSEgVUHewM1fSCnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52iYp3qufRpKCCvexz4GfLRNKeMMUvonv7VHqbqBn6n1iQrYj1VbPui94cBALrkdL2tGY45qH428arnhGDoJpcMw",
  "key1": "5E2uwFmA4dMGCPDQH37ayr1t4tEma6Gmfgk3TGsLLS4sjz4CfL81P22XgvfhS9AvD4pEj8gyUPBaijhcYQwbXT8V",
  "key2": "5rPF9Y3gHUCys4MRy3hCvAKRMpgEZJsrShJPULeHK37Rpo5mUVEF8hX9JrEmt2xH1NmcBJ7mZGykqJAK97owjU6v",
  "key3": "46H6eeNiqDs1vJPQS8qBFsdk39hUjUb3sKDJpC4QLg7xTGWYXr2MzwRE4tvxAEWg9rYBqKpo5vYXERuJXBRXbwku",
  "key4": "4o3opEkHd3sUkogs79eAPk19AKz9efSw4PM6wrf2NVFcnNjHud1qYyu8KWYY5fva36eqgDG3JyJmtDThx4354L9C",
  "key5": "wYVHogQFPfNvdiiFH45Wsq25nqqL72dMbYgu3j3x98u5LhmHVHiEG6MAu3fCygATvgmewzWvv851PTtL91Ek1Ea",
  "key6": "cuv9xujxzSDnurNARkpvR8BtgAZoynun6ynvfqZraptkqYEn6n6tq431f2vQCnw8NxnmHGrJdKk2Nr4CjE87GB1",
  "key7": "2EGdmeZUVxYk2uTKc9KzS56ZpRxQCw9sJZJJMA39qfR88YBWZi5GdxuVQkrJ9uyhQZry8D1t2Gu3ezW7SaiD8h6n",
  "key8": "3D2m2WF8JWWvh4yNPDySqh7rAMEN5fyYeVHh3eB8UM7e2hSpur8tRS83gJa2FkP4NGv8R1fvqBwZnexhsP92HSUv",
  "key9": "55F99nX35CuLhQLd3DsihtS4JEgPuJjg8tujvyBeFLyggUC7c2dhwufFfNkr8bJakR4UxZX2EJAWevfng4waNnJU",
  "key10": "3GyZQLKUywrcBsGN6v2MU5BQaMh5euhzty7V36hq9JJ9pyumsHfqtmz8BNiedSf428N2d6FbTpUPG3JMVwaKxEwB",
  "key11": "NH2dCvZ5rv5mJMETCPN2ZCdLaMGVbFmfaEb62Qm6nMGdoKW6N5goDe67HeZMG2pgR8mHyJLRSph2aFiZBJ9qDvi",
  "key12": "2gBRmAJLQxu33gJReUVzry6n68jetE993mtzbytBwz2GwaLRQu7RQZxkZ62HnAMujUuV2CQ6VurrYwimMHKLQdQn",
  "key13": "5Sj9oiEwN6SJVR5o31uVjLizHBvCixNHTwQbJ2ZYbCt95YSwtC5Yf2bBvyC2gvATxju9YabFhBbTyyaP9LZUVaok",
  "key14": "37u5orenrUhr2V8mN2tgBG4hNBLk5fa25TDggK2u6ddzqjucLpxhZTEszQLPPvFXD5EtNFLS4eTpfRC6cen2Um1H",
  "key15": "PawrkQgEKSp8wa2xpfFE4fnRyPXB8BforRHvJS4z9byPrdgeuZdmE8nfSdSujpxSBjyGJtUSEKVaySVYqbQ4ohJ",
  "key16": "3XDAAo3kMkEVtPR2FRCspmpKWkktVsB5XQ8h59MunWJX883tbaVoYHjHcdM5TcEY4BLojh9Nq21igXiEfbAhi6Nm",
  "key17": "4Ts6WA8vwPVWoZaMvF5mb4wr763tRQom9tGYU7ZkWrEwu6EBefQHUFty9aBJ6vUtQtReGuMvU1Sc9nR2k4JTXLrV",
  "key18": "4JaZ5pNNM7CP1kGag93J7BYfAFNDgRfadMhkfnJES84vVUJAHxvuxbGXFEAL8BVRSr3zBPjp6R6KrnZReJLMgnqz",
  "key19": "36no72XL5b19BShHZs1BzoETBjwmLFGuYmPJY3Len1hNREAtLZZxp6cCRNoGqvMbnFNLVRRPjDYoqxB1cKvBTyiS",
  "key20": "2d1rd5b1EZygx4GFSFDbztnoRRzH8pHtFkUrAB5XYJP6syRGC8L7nKTsEfgV827wLGojroJ6iTmutFkwd6hg5wMV",
  "key21": "2mDHDWWksdYaCSyj5QzeLA8NRMXunGuWQBtj1d9xyidVCZr7XfeG6oKQ2PM4UUDvFTA2aDyU31jRPYscUVzgtr9z",
  "key22": "weoyUs9P63dvTyNiZ2nN98eZsss63gQ7hhUEfEq5rhv1ss86LbkDrYwrBagiMJbXue8Q3p2PfmGoGgZZ5Z3KrDN",
  "key23": "2Q7DEmWraY5P8jXnbKah4ryP7VYxMRF34PzNRK4sYa1EFVfuPMcEczipBxLCqrBEAtocF2GhJeNBtcyUfFZtLnCd",
  "key24": "35XbypYogEPQp97bwquKBadxD5TvDJ8g6NTawoa9yBjKgV8suqcWJdH7ZEhsQRMSf9hi1hhmJrhQaZWoPWKDFcQM"
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
