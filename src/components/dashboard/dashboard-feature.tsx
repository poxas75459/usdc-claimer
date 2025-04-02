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
    "3wfArGgjBsJKMqPgysJwkKLux4nvqsVY6YDWGWp1oWWyHvBwFPJJHZ9sAQ4B6KTBL1dZxNiKoxGpqbazXrCZE2Ww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N6B9dUBuTiJiD5iRhz3ow9xVwdJNTuW93GorimxCHqBK6mXDK4sKJPHLQBDTbdWrxEobUBiJvKDv4p23vacsiAR",
  "key1": "3yxeZ9TWNBxxG6jdMT3Uk2cWyDvYnboPDeBFfXTiS7AgK8tdEFud2R4WK1AETwhwgqEkge6vP4CEXrFsR9ESWMMb",
  "key2": "5ncxugBvDpfnqam95rt9qjgZQKPD83DkWpcyKXWcj4naCoFwzMY6KYu6b1dDmBwqmXcU3qD167yUJr5piorgFaSs",
  "key3": "47KyVA6khv273Ye2kpxQtNURxfs4YbMhdybMkAwR4z7eu1zhwj3rMzBqUpvqhNbM8oVULeSNBTyJgAaVnFYvKBWG",
  "key4": "jAwifhkLZ2aL2sHdkuuvMmhRbQZXVaSYWuES1nCUEmMBpvsiT5sDShfULDcK5NKDBCCGJHHUtPbjYRPW2Nnw2U2",
  "key5": "44cAE3Sf94DfWUo8JxGY1yVm7YCFkFrQ5PzmRERsgnEpfueaUkwtVV7StCyR8gYnjrhYATJd7szyrsfNXqWuPrXr",
  "key6": "2GBU7cwvHd3v1Xf6zvSpcFe8akhff8Jkd46gGVWQAt2ejEAhdUXHYt1rkd21iKCThGBe7EGordoZVzaDovRYsRfa",
  "key7": "3amw31x8cU1GDaUR4LoXmWDQVuKPyhhMkctET4iUCWKyhGujAoxXepfwLkdmLqm7rM4VVZJMa5cVd4XjZZ5vSgHV",
  "key8": "3NznWWM1VTu4qjx5yjww8KMAujFxzr8PntAmLP2rGyR5Btd3EsdQAn97doKfmzJSK7FUTYA9L8zQxgbeDQtjxQZn",
  "key9": "2bibt2LeChC1ucY1T4k5DpL3MvWz7Rr7bbs1mYifncjibrjbjjMuUVEDfSYUAL4TreHxsV4e1gapbRrr1oqz7Reg",
  "key10": "5XPKmAyHmmjXKUUgeGw5KHNFVqTgrYeg38RVoNsHbm29jov37GmtpQqujijxaKsZM4zGzib28ENzkJs9giiptyL5",
  "key11": "4CWs5W3VrxGWkRfFTQU1ZSLtB9eiUj5VbErTbzCdGSgAp71y4m8nrobgk63ioDeGhW6QP5WnFETX45L6MFjpfzXR",
  "key12": "4eaeh3KFdhopsScLsNvgLse3qWq5B248Qku5f82JGuBZLTTfi1PWQfoVcee3fsPqk5Q23Fb5NKpJhfSuTqGEFJZV",
  "key13": "3bbYzDF2bw7nkW3Y3zzb86EyLDeucMrqoRQwgnw2KTR4bQniHMUMjv8LFxuys6Ct1UQqws92Zs6rii9zxYDebEeu",
  "key14": "3BrS9FvqVG43a5cn7MiBtLfigQB1CiEeBxrSxvyow6HDFVDbE1XRSnqTYQfV82F8sv48riEr2xTr5pATEGRHiW1Y",
  "key15": "4SuK8tug2qjnH6pnY6VgsVeYQ5R6W4nUEMAeWesgHJ4b8ovHeDSzk5ctANcamZkkFSn1cGDjSN6FLsPSgyZrZFkH",
  "key16": "5BFt8VuLm9RwB9X12ZTbpaQcuLFYKgqSc2ELTVg7oheyyiGNpc9pQoSSAFW58F9iVNRny3v1RYZ1ieB5HeMRHTie",
  "key17": "59ghEXJUbrXWiEGj5rcn1kFHT9TJRiG7kGzXSoue7Ldc3UAkT6Cng5NWkFEYXQya72tMM2C7fxJBes17tRsVgLr4",
  "key18": "4rPUoxmsjXahqVdHVKRNhPtxcHtg27fy7RqrvH98UG5qpt7FUv6Au2eP3zCuwLS1AAAr1acrMmN83gPNADr982nD",
  "key19": "4HHjfxr2QPbenoynd8MM9C9t9wAsL8zX3PE2L4usfyTPQscHkatTfxm2p3t27QZGqBUZsAXafAtq4NpM9A3jr17k",
  "key20": "3ueviWGktpFUb6FaikuQDzqqCNoxNHiJBgqtnsFUae34NNwksy64ghX3zwdDj9H8txkDxxntuzsyKWXn5SdiFsQ3",
  "key21": "5dGRkcvzkozsB6gEJScvgyqi93kThKY5T3YZ596QFF589P3c8wtMJBgjXmUgGefCnvA2U5qbvP1JX1rDjLYj6eh3",
  "key22": "29QKVNkzZzhSabLREHJxhwqi7BJrm5SUVTxFVqqCHKjjYYaTqDYodNHpcCEgRpH1PLE29rRHPWBfS4ThVtH6XdJN",
  "key23": "4RYpJJS8PnLKMv3iLffuL9uvZBosqScAacmUhc4ZcKNpD26JkGrztWwGasudpkUtoa6kn5FrcNik5vAeKToYzHzy",
  "key24": "5p8Edy9KXhZuENkwohGVhcCEfGhgBbswP9YKLJDX4zJm6Jizt1UejyKE1cSL5BsiSpLd7v1q9M5v86YnzBLqQEu3"
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
