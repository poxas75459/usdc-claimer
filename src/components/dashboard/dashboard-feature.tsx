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
    "4pp5GPEsXeRerKT5waD31imLF942RRv4jN9mMfBFtt5RcA4ehYTzNZbByvSh2iqhxVFD57MB5rdzhPsHB5ctp95d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22CtpSfB3bdwDBuFbCxWVVMd9iiZLG2Wh9rPuvHBGFqrX6vNgMQQATaXGESbX95BDCxei9gTihNWb5RKzw58p1uQ",
  "key1": "DyX9A5go7zNocRu4zS4LsHiWnXvfcyXdbZW6ktwhsjnHqcSt1sxMq9qwT6CwjjqB2yg8Yt2F4Te2qmLYXA8B5Cx",
  "key2": "3xfPvyqqDUKYYLejJqLnU7rqNeiwaPQryndYZXt86GzS73MGrz37DEsmQ3sWBRHnp2vvtDvBQ4Y6fUiUKQNsDJEE",
  "key3": "2jf4NQTVMhKXgCfadtzmwf5zbNoEzE1nU1B1z65dGGiDk3zytfMx1mNsTpNRn9drWSJ7ruLBuwkhnqLBa2Knprn2",
  "key4": "277UF6SeuouUfNjSPhxtU67ojapN6oefTcuUD8oEq7BiSLoNL15kCRXPLT6LZmaVqye8HKoDLbTybSbdLJokvvcK",
  "key5": "ihAgFEXJUV8p8gE85YnjEmujzJ2pU5Gmk5hL3XyWhbdvBrNztEJizXQgxc2TaFBUcbFCxLZCgK1HdbT6nBVGNTD",
  "key6": "4ng8saAqWQjLcU29vX9ybofx5fVdABhtHpCy7Crn8UnY9Y17Adpoo641U3t5U5EMLCtq6D42z7ZLQuQGqyXbaXXW",
  "key7": "5QPDJJU3J6f8dNmEENjVtyBRhVeqkC4pPJbfDAyfSQ6NxHKCH7Wq1aUztLc4XczLyHdFYDb2FWyjg78u8aiJyfwY",
  "key8": "3cgchqWktEBf531HHF69ghN1S9PXyhq9BsUdW4F9MoTBvjHG5mvW2i9TKUYx6vgFV6gzs1sJuJv3rU7EJjvv2Ggi",
  "key9": "25JdZZPaUobZmtnfv1ooYDgGMdFYLk8TWgqXfLrDhVAqLvVqgJFc3vAQEfdkdeqWtB16MRULGL7PpQNF4zoG6XqU",
  "key10": "z7RirRdnEk1rKVQdZ1h1M2g53yf9EjF1uEmGCtdJDtMdBWE5m6iqZpQ7JC5mh5SC8YgABBp7aGk71jCfm1jCByq",
  "key11": "5cuqL8cFKCA7ThcU2iP3DGPre8Sku4HH84Egz3vAB6r81s1QCWB5pDy6eAkDvRRVBwRDCCxurKQriCSPfATYSGAj",
  "key12": "65xaMU5HQrxwnS5VrTChByYg22xSjZdpvsbtbFRs3MW9863ZrXyvv8jTfEgrccqnsmEYf9oCDZmFDkWZ4vpWTgjJ",
  "key13": "294VS576nwTqNb8Z7MN45RCKBbXsuzPdTLccPT1gvvVmK5FspikWZrkKNYdnXNPM9kykt8au3EBZqRw7NYocAWa4",
  "key14": "PRefc4mPTRc5DgCCbqyMhqR1JrMy3CviiXQDegafS6cbzsY3uQkvYDGzGYm8ZhAC8hkVmpvAA6rqEmrnmcZD79Q",
  "key15": "hqjz9oVBhSXkasABULgNLoNzCGiaTUVpcmSEyqwM5ntdFCBRQSRU2j2YfNJdaL2BnqpMQcytVCn6xCkTnMZMsKi",
  "key16": "41vR7dT29qPt4aAHJMrYbRTQgYma12E7fp12SHwdUDmqwn7CQNupo35h9eGcjfN1K6czB43dELjHmUH9topskrVa",
  "key17": "ErWcb7L6rEGru1TyPFUN57oPUtxzz8nKUEttc2qHGA5EDj4JGytz9beEJxq7kMowmWfBsmqzP7QU6dXvi8t33st",
  "key18": "4kKDMJMUE4wj6U3kCQ3SkY1547QiS4PYXjK2u1DVKWqXhazpiUa9zSf9UNsVETqDaZLXkhjVe1oeZJxufNGC5WDz",
  "key19": "2nkNjLSjZ76pw7vUCiRXdYkeL7thYJrrE7aWMaaMqTYab2vM2PDskgk1B1TPoq1e6nYchEwpDGQY7W7y5RTHCXsx",
  "key20": "McTge6HRKKGH5VhiefSKUz5FdJaqxB4QuybnfhjDULeX6o2nJiFeRXYxyrbMV2KMmj8QKLkJU5XiKJP2NBk4HAW",
  "key21": "4c3YjGjCLsiDdEC5Rh6ZkrxsKFAs4AHoLZqKebBkEonZip7tEnqhSbXfeVAYgB1YhGpxPJZm6rjvSYgGV5RoY7LB",
  "key22": "3JBwQh3FxDeXCR8BuTeGWGyCspDkmKKH4QYTZgZQ8vv9NfhLePeUZ9GebXcQbvspq943Tb8MLjhoFoGBjghnbnJd",
  "key23": "2kSc8uxoAXEMDYxYoAu2sEZeXjUfGhdisHhSNkkjdK9vPXEBUiaqzEyiMBnTrYMixjaoAoWFcSv6HcWyapU6h6Qf",
  "key24": "2WtsqmFuJcZhPaV1qkM2u4oSj2TTbiwBdBgoCbN3RCWUHSbETt1mQL1NQYE59dbBPPFENXHhn5mffcft2dUka2BU",
  "key25": "4ApVmYovn15zYkqTWK8ztAeCTdooepRpKSEvxR6wwVtwdjUeJ2RV24x181h2mr5GmAdPhAWcYRZUp3oconFTsGG3",
  "key26": "42SsuHerBW5Xf7D2wQTo4LEcx1ebebJyQyL9LS5McnV3rgBHrEyeFBmCdwpcNSbiVWABhEVC5WSgMnE92ss8TNUS",
  "key27": "5qaD6rzE9xzNkbe4teN7SD7RqDQigv43E5bjTBJtMypWrjpXGqsDtzT6atmhyTLyjir5DxZhUjSqQcEx46bHdG43",
  "key28": "47PcZtbFQ9jVr5cducjFYXMtyYFUCt4aur9o6DSJCgTFQ2zsB85nw5GQafSyArfbhyfCGPQFSZu1KmJa62bzcX4F",
  "key29": "4oiCjTLGciZLj64q4yXLyZCaPAjy3T57e428Sht1EoUKAuB4yVYfR4MEXGYLabPQYwg6PWAgw9x2EFdvyX7jtn9B"
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
