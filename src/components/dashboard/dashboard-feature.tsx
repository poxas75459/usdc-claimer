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
    "5iMpLmiw1uvuBxekixTNdxctEM8xm91fX6VSgpXSzhWr1Mvqg9UdbPWEnk89CxaHhcSmTR8uMw6yWMWSN6hEfzjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yknfQpCbkEJLLXcRDiBERi6jvgChWYABJDr3Ef8CUtsNi8UUsyUBSKXJrEncgBZ7HFjpZCUCH3CPobjkNuuG1D3",
  "key1": "4qb6b1zmHkTUA14AJ6TQeQx6zLZ2VQBfgY7n3v6CxEgNP6UYZJjFLqwoAsVnRKqy5fX4NCovZPXrp58VWgjUhYNH",
  "key2": "248qgozGJSezKD1DijCymb76RKqqdfKJ88a6Fws277zn1CbgmjnWidyNedEpmjVhYkHNdwr4ERCgnQUX9kLYiGx9",
  "key3": "5E5tB6zAMsTqpG83L51Q7GudR6PbfgCya7U8YkQCYTt1DVEa6K29engqZPVjb53XbP23ENeyZ7qh6uTspLeoUCfh",
  "key4": "4SfWkbpsvop5VLm46HyqEWGrGFTe8k3nYWw15jkQeo7JwjocGEVvJg629Q8BC4ARtKTKUr9qQN2yoYLbVZjzbHkQ",
  "key5": "21QG5QrdQmDS33F3kUTgn8hUBbRzbEH9TrbQDKZFn7XY2Gd1GbXwN8o6iykxF4nmc52hLthZwteWqLj7gDzvm3X8",
  "key6": "3nqTNWbtUHo1KTf4YJwLcDoFJS89xZUzkW4NXzbFCaQZK7SJEhzmHqEoKTdTSguki1sn9G7UTpBCF2UzdZBahxct",
  "key7": "5cXEEUADwewvLf7nqbFcyQ5XY4QPoLjV9N8MW4zCVcmWpLWovvbYcb4hzD75XKv5QGJMA1pENMzxYtT6kJAVXnVJ",
  "key8": "5pyJzdd2rT57eZncBGFUX4Anoexfotn2URqWU2xUdpJthTHTarGS5DTEXT6ceMoNsN1osP7mCu7Pg2BAZoqCKuya",
  "key9": "1G78WBbYD2SEK6XyM6NodEFJuCjiwS3C3nwjj3d2UgdGA64Jx54zv18wQqJsaPgeDoDSvZ1KdrS8iovAnH3eiCi",
  "key10": "55dXnPdJ7v8xiP7U5BtX8XjnaDHhKLZk2M3EdD2BKyvLkwK5pCoZXLxpGeZkj4bx22RVc6n4uMA1vaCxogMWNpdz",
  "key11": "5gYiKemgADqWW8udSwdC9HYrgcHgiAYToTGvHg7BbhC3TKnz2BZjyihcoe6XcUJUbBr1auRyu38AL62tSb5wCkYJ",
  "key12": "LhK5emQ9Gkfk2Ed4SC9xqoYmcfJdjA7N2fghRrygHSzP2WaiaTmwGiArxVui6bBk75JW6dL3rSa2one8SZFvmdT",
  "key13": "3cmE9NXcVqgADKqQtV7o9kY8qvwyFMB8nPjSQxG52dAQoSnpz6xWNekeYYuneghQt3oWYWz2MxfJWaWfdQpsLjQg",
  "key14": "2fUhR2pcZutrYuc5xwVvYZ5DWdyzWLN6jqEPPf24r4gf4WPQsiNnAumrVwuxczShgwDXFYFd7v2e5mFmpZBxA88Y",
  "key15": "4X6j8VtWf1g1erFDioLvMsmdp215bbXjyEvHNZWkTieLubq8XHnrEqSp4sdB5PHCpmBF9SLKgtbLocwjq82PzZPk",
  "key16": "WDxHmrsg4twqNRqqW8JKCrDioBnp38EoxkzQqkdSDqy4Tu3KZu8ckxhmWbyYveNwXfioS5rPMr2feXxLw6gnu9a",
  "key17": "3tH6jqRkag7a2HpyTCEhx61Uu3U5YgkwXAQQWY6zChM3qZDpgsSgGQmCFzZ4uo5dsAjXHAorN5ivEEQSKpXpuLgF",
  "key18": "E61oJQoNUnWDSCz8jCCYQgnwC4mUPzNM9iNFyP4VyraFHt4KU831bTJr1n3G4eSFyZyLiy4M2ZJmzrkL8nqV9GL",
  "key19": "66sJLbH5YHKfBm6hYB1C46pse8zgFQNyrVUSN4y1eTwe7ftAjzVXDpJpcKjsuRAJ4tFr2yd4xF9w7j7sV1vjWPbk",
  "key20": "3pxcy7gGLAV4ftYEKgRDnTv3yLECCxYi8oA3wZnivGFGVShm3HHidS9zbbNC1rHFXitVmUAnF8583nUcUbP5ufX2",
  "key21": "2w2gg8pXh9nDTmGXgBd3UhnjxGGK7xLdnxosihYXkvmEfWBvXFsFZNFT8essR57be34MsEFr38gmTGEF2Qbf5b6Y",
  "key22": "3wMjHPjgoUVbwU6sHvgViyVP4WGsMJCjQqC3artxnDSVChLV3VpDbbdpXHVdQH45yeEJYjb8yD6WJcnShTCP3wEy",
  "key23": "2eYfLFsUZisjd5rAbqNNc1dntcUVHeSSN7QDrz75RK288mkJVB6fy2iEvyDdmC6Ezn1LUjespNNSdY3Evjwssoqf",
  "key24": "2ce7qWzoWBMPe2MUYNZjx1VVi7QSBbgFCD7JukWYhYr2qZn2TaREtnBLa7feau1JqYgFbaZ51E9NwPDDFbw1KRwi",
  "key25": "2s9zphkgLUBbYj2qkvewxpA4mwa7QU554C9hPQWvbGF3P7WJ4zEYfcSnmWAWAFdsLocDsnw5vzXrYCgzz52z78qu",
  "key26": "5w2L4MMk6wiYYH7rRUxCNwY9csDbhgrkWE98ivV1DKzg37NCN4x82PMkp5WBLY49nVmPUGDGpstw7k7EHBcZvak7"
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
