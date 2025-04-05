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
    "5V2wZBoNifzq3dNfV4zykQyVTtApJ6Rb9XvctagQtRXgf6ReKfDYxY4SdHsFDVauZwFL1MMxZdcNCf1wag9MMHLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oqw6unsNHQG3R7cNc6S2aE9j4E1ytgEZqqRUU2S5xfrHLNJccTSPJjUpBxjuGAq2ojK4ZDRCL4ky89uW5r2Hmvr",
  "key1": "4ocnoCCKzy1SfN1a72PE9zq2TNSBu1AdJbr16V9bHqGd8QsYbZB2ugQEnQf6XbGpJ72AFLkgRTbbwuye9v286xi4",
  "key2": "2P4fbECN7nvUozi7Bc2vkxAHVcvsBQcg4KjZsdUdNtfQYgF5YLhttTuaP7FbAXNfiDTLdSmUmqe3jWXwWLaQCSFK",
  "key3": "SYurgfEUtte9L3dNmqb2Fu6sErfMB4bZtpfyaSAswhiswDVPGbvWVx8oykWLHXUe6ZmUiEBk9FUvRnGhjTqFtqd",
  "key4": "3kKSBfiCryHG6UqhX2A7ojoRVozEuroPW2Ajq9NdWP7sqjnPHDLafzG9gMLwrYMNBKG5czMKcv2rjaAQ6Mgvx34A",
  "key5": "4jVSbAzfWn2HMN1ySAd2BnXz114HZcJodmdSr5WPork44rTeBf8btSLsgwWqDfsT8mtPK6eyCnxwN1rhCKVjynhy",
  "key6": "2KCTZNRywgTTj78dSGxQ6QT7HSTtp9qBCs2V4tM6pMFbVJ3KDPkFtkCh14WYM7Hk5Tbk7M8SZgaLMWEoVRJZJKUY",
  "key7": "4WtxS3ViwLCmtJa8WHUSzkhGfRgDowDEauV79c1AoTQMX2Tw2evPQcC7LDjHGGtmZQLFbaYpHZBFfP7zbgP99TZ2",
  "key8": "33rYFZe3UgM8fsyBPaBoxFdBXPArTkoxwva3Tx1VUJ3hRjGBDbQnA3savfbK7kv8ZJabuGYUpyB9kC3GNNwzQmKP",
  "key9": "5StCp3nEjBxCcksqkgatXV7sYrUCaRRVhQEKj65gQ5uL9MJ3sPUaXSGbaXNs2wBGQv5yqRPXN69CJESEN91cMpna",
  "key10": "5wDZkvKn8gUzuXJXPtawLsFyqkRFsgNpiDcCxkut7QKfmrNZjuzwm7MYYb1Z7GkZUyvJw8egkmLvvpH71PpqxsxH",
  "key11": "5piie8tV7F3vbXcnBUycdY6mQwpPgNXrx1QHqeSiZfYveuMPanMxP3FPAQmHX5HapmYftECWHM7JP9JqRx87CVzV",
  "key12": "5c4AX4UwxPpUneYZHr8J2Ubr5ADJ5DjTsq3u3FUgyvY3GFNXqmyhf1dWqDDDAWknLYYjFQF1gH6b5N3Gq59aCkoh",
  "key13": "3N79Aq2Mmvy1ucZrkNYQBJ1WRBBwux6u3ro8vMurHcSRDBA4cHMPgc4DdyotPGUFeQcrCkd8EijEN5L394Rwrzam",
  "key14": "3wsS7EBAJGg2azFL77ux3VQ8xh6KMYGVXDZdPPpNtKFbYK8pokrjSmXL2H6GaTJnFKf6ifiAGKB5e5jGJppTJW6C",
  "key15": "3vq31Pq9MUg8wsZcBspRhGowGhe3BtHUKaiq23NFhmTambT65echBf3paDrXZ9ChsAmwCctvEeWeWYunYna9ybfL",
  "key16": "4saWg7QwxUoNREj7XPzWCKw5a3E4pxxEWzfJ3m9vDTxJ67tWiezPq6A9ttPAGpGaT37yAPzjbBJ1ykgAP4Rojdqt",
  "key17": "2KuMg1hQXQuRXhaHczcGqY3TP4CmMWqNpX6zrXurrcSECvZuBx9MvxN6L3CyVdjLJ6EsjpYsj4PEkdB6nmFTnDEj",
  "key18": "VRcvomZGUan3bxGHiequ19fNX4vdfj8baTNFnXbHGe5oS8zCQS3qDKvuH1xEE9w3q9BALAyZBMWf4T7JihpbTiD",
  "key19": "5KpagKtxMUkSJjHMN7JnVBnYg6rnZHrsD8R1gXZihnJyGqjofTYKF5rSdNMQd5ZMa6E4L1wzVkZGycQinSTPporR",
  "key20": "3vtE1BjS7sS8kWQpJT2fodZp1LJ9wzrfrxhBp91TGmquEmkayyEY4LivR4qtLodwRENThxytJehFjLvH3XU5PTvE",
  "key21": "5dQFGKynrszjT5ms2FtJ9PmrwuC2Jc3KjwW4aHX36qWDxC1Kg7NJiQZ3fzwwxEhLkF7AYLXZPUMtZMLt5d9bnWF7",
  "key22": "39XwhooojkWBM1Tfer7gidj2Pf6fa9qvkCAopkkkJH1vTuDr1R7LDjmj5TbWHrQ5RFcMQojWw9buin8ra9AUqrR1",
  "key23": "3QHS72ftcj8X1NA8sE8bzPwV3irGR7Y3vijfBpJH4YrvgGuu6A8C64BnayYxhWDUWxfa9KThBQrXkaREatUEhNc1",
  "key24": "5HrQxDorJ77zDteHz1njRMEnMGdZFWaTpcF8jZksTDh47DJHsy2V7yaPC52KomC21JttoDPAamiRzDAX5XW7FLuo",
  "key25": "HoNHt3DDLesY7eWMKYbSCWK5thqkvvbdVVo9YExZB3VZMwVbNZu8rrU8wk2PouD8octRYYGYWhLjKi4b1AsnjMe",
  "key26": "3RRAqrTB4uxU4oDpgawGWhyMh1wdhNJAwhu1GGqfn6XhWtsFTzJJxiPNQcnUi5YUJjSuq2ZD82CU6ERvwT45epAQ",
  "key27": "V1hPY8wGBtEJtTi23k8hDemKyS1AuD9ErMUWC3SHYuP4VdxQz8KunxAQXn5eyqNitV5b7zDRWR8n2ThCyJPRrAw",
  "key28": "3BU7P1xpdPpgntdxPdXbA9Veodn2zTyha87tDeznSacunvmkafBiVeEJmjQnHHHuCxMfkeDWrKRwdhDqdjYen5oF"
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
