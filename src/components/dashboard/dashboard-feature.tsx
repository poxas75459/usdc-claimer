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
    "3mBMeBNYtz82tTCt9LT8Neo7xfxM1SRwj1nwE51wnormHMTyeRCqPhuoS7keJ9Yj3G9GC6zGPzFQYTWL1fYeUFC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NYxHHWHmb1xiuJBie7r85UMCpw5Bc8riUHqVUybAGn3UmZp5frNnQku3MJSkEbsekdreGbeuhsJQKxn382aRki",
  "key1": "5Fh6dSoJbnbwdawaVuN1xJnhBxc81X9w5L6XnUWocn5GNiGwSoi5A617LiweGN5ZdTt7Bzqt63pz4vphmNgNTR4v",
  "key2": "4MNPeiPbY1VM8waYvuLpEEQnBzVtsBL5Bai1ZYvAgoBsueM1Qg9emRUqkhnHQ4i71SPUuWJpFFvksmhts3kftczH",
  "key3": "3pwDo9uDvbHDkEiuQ4shZWFWeuFFYqKqLyecnPQyKrz3ysNzmdwhacWZWw8yYn5ox53RAfakCNGkFiM1sts9vgFB",
  "key4": "5WG7e2qQArnvjwZD2zVg75ZMN8BT73g7qX9K4VqTMrwqY1E1sy1FJnxj99LoLgcNWCybWQYGJ2yytJNyaVFGMS5X",
  "key5": "2W7hauvTDQY3SMx52C41cNjvcGBHgWc8QLxafFPEPxMpWmDp9V3zmu9ZZQhejkBSNvP8Se4GNXHCuDh18YBFox7m",
  "key6": "3DurURXwsKf3tfe33S8XYkSF5zrioiLXpsveazT12MpKjwpKVYZaTtVc6dhb6mwnoRGEqkEbcXhiakRS95Had5md",
  "key7": "6saWc5wahcPKqfqDR1HNnTNxcWiMWfp2pGaEwbKWiB2AaztaVn8v8S1D7N6Q4LdqU8VhhG5bTXj57rEA8VT85mY",
  "key8": "2FEzmUMUN1DiS8HBUBihzvnnQEKybV9fkHZPpNSfboy21fzYUp29wTzJM1ZhY9F4cyYbWChKC598wp9vA6GBHfq3",
  "key9": "6j4URDDCTySHY5NxKZ1Z7HpLVHijKZZPpXdzdCd8n4e9A3qzpNcZNzW1GF1PMXis8bNpTvwuNShx1B9JLs1QzM7",
  "key10": "WRmDu7xtxAi9VxtXUuVAiYoPi9gGAxvDGNtqZ5wGoPhuP7tuCimx24jQ8STpLScNSDdsHC2bS3r3NVr1v7siLCT",
  "key11": "2TnjEeXtTdBirL8Kw6uyrqijgKfaPTcpebBMcTTfbMDHKfqtvxEWRNG7fQp5mjQnpccf8yVcLWDwKNpCxfuNwrtE",
  "key12": "3iAa5QgiqMZKgg3YbyHGuC5bBYktk1SVUrV2YW89nm4oK2YPSNJHS4L9Qk1RWSvPyoss16Ja7TDWF1QjRPbwnEKt",
  "key13": "3bfC3vfspVi4xFo5ARC5vdW94BP4X2tuK61mJwR8T5Jcb6N7jtPt23HDs4qCXiZmgLXXKkXrQHfA2ZuNRegESNKG",
  "key14": "4mBQ5wVaqzqLeousTXvC7gjYfskcbvVehCzMNziXxsLkkWiUNT65axYGq7ptzUDLyJrTVCSfEau7oSszErf8ZfrE",
  "key15": "3SLSRSMqG1m5kQKztV6Wu4Z1jffku3xHT4pVYVkfqB4njzxfDC99QsGjnyYj2Mc27hqy3zwAHoMDmq3qmyTaAaRB",
  "key16": "Ens8y8YNHeY1Tu8cYHsbZnToLRNqdMS5bU24xbJUxJD8WANKKmA1hZZB7S9KDKuiDLpdZeCr324dX1hx3vLYrre",
  "key17": "Qs7eJnrfL65sRh3EmL3J2viHFJDaH9AkPDt1qqqiGp3gDqj4Qi9rabfyfAVZBnGyzLsvjQKbk3Sn3QNt6vLi5bt",
  "key18": "5cx7VHHJWdxYHnwuUKv6kiqnTGyaSiYnfiV3kmrqxFyVbfeyDTTjYr5vJVxZyNsmauHGZjUhh41Ker587TaHYPts",
  "key19": "4ptTtNEbNBsiby7LQMCHFSCuZ1h1MKvvLPut4512Q7cjWGF3zQyy3G6bUuWgw1efEniUNdH9cBsbC78uLUPjUWr3",
  "key20": "3qw4vmAkzzy1YjRqKbhTyjZPf5TnEfnhjLzJrRMChMchHRYg6oNaNJNoTLzMF9imYmfGtcLhu23TddUuGz6jf4Zu",
  "key21": "ii9PFQSYDqBpLhHSqRZMNQXdxNrvWi4SWDkSdYnGFk9HaN6LB5WxL5DjAaB7XUHChDJnqdHMPdED5cmX5Thvz5t",
  "key22": "2Nri4gMojhdwBkRnvTPdGyjpgwQFwkdrQxcLGoUfpd4KfhomZLexifceGGFkBSjEy329SXqZA8d6DndM13jvshzT",
  "key23": "3KrsHRSPXPufzx6FrerdWei3mm2SYSq2BDfUSqN8yGG44Hq2LsrSMEftE4U1aFDNtgtRJ9AJ3sJfnPEz4AWUvRLU",
  "key24": "29tSkoehaMUhk6hcL5yDwf3SeYTzB3iCTaEQ6aGKSMJjZwkQ6BkpoBipPgqBcmVbTfMMSd1tGdcRupm24byWSGMQ",
  "key25": "2zsKksJ6NMsPiNVjmocRjMX6JXXdsP1F2izantpQKfketFa8m4Y17yvLWQwmcbwBi6c6zo6bUF4Y4oJjtYYu43tV",
  "key26": "28qcsA8Na4ZNFr5VuVGL2rtduXBysXNpkDpsup8A5dYL977dhC6bQRHRw2AcHLQQj9SJySHYk9DdrvtWdCBLF451"
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
