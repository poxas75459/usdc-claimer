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
    "5jmTUPaLRXGEVfphKzrqnTzLYu6MQEeGssVcLXcMEdTTyXJ3uHHuveMvvf6gh6KePSspUrkiAnHRsaGFBWRf9aDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sicU1aPqMmaD2yDwEHsfUA2Rb23wpwYat2fL2pGyyXB9XE4w3LmwHoVahGjBNXKeT5fKUV6BF9Nt6r52wT9p3pK",
  "key1": "61FJjzXaveNhujDDy1hb5PEoDN3b6HHr8Phdopu8JWbjAddL9C8XHidnjnpP3EvBrTkopJ448btCMtoptMgSW1by",
  "key2": "3mxTyF9jjZ3mM4fNuqEAhwXmLHbmJwBDzeYvYpsN8toyGMCGxJMzviXimBfb5tKiQF5HTbQx9fjDt7X4TMNSzC3y",
  "key3": "5y36m4fakgrAo6VtQQqH9Y3ThoLh9V5zAKbG6A9TAEKbTdKnYq3qBAbZLpg3uy93nCkAGDHNLo943jj2pnjw8B9w",
  "key4": "4itQYJzUEBQ4csxm6zJQ6uQNAU7yjLqfW4tWzUGrn3UBMsL8K4i6V8gP4dCjvwqVPSdGxszoMaZXtRjQTErL8SLz",
  "key5": "oWKx9mK6ousUGtWfk8rq473Jh4f1zUaaCEpbHWDcXQrgSrCPKC7ZWpMjrUYsvaN3jvrq8iBNZnjBLALXNE6WyEM",
  "key6": "LcF7EKxPMWSkW3VtUnDqem9grnbGPkhG2K2vdj6scZGei4as7gdkypDTsQH6E5tT1smM6y3nBEfujVXKQ4MSDxa",
  "key7": "5TfKkwYFoCZieuYYT9nZxYa3xwKTwSDnYm2cuKMX5eYgxioapXiungHvJVso48UFGRKUPppKHDVAqx3WAGRUsMUR",
  "key8": "3yvWVYQ243nDGg2ni2spaEDjrsZifdG5rzv84VwfWBJVtNYopMmCSfGZTSo6FxZqewVisENZTC7U2qgiGwteDLLR",
  "key9": "2YomY53dSg8JZsoQq6kcMPnymUi31J65jSg1RBLGRvM2SKTTgx3Dk4njuLiwdtks1DzAprknZ14zN3QYiDgHC66Y",
  "key10": "Q17gqmJnqMeagVH4iZyrVLvVBX1uKCq6ncEiMMcn1cCPU3kPWCNmrVdbp8aGXMmC1ozczNxvB1tTAdpoguDAr86",
  "key11": "2VCDpsj5bJ5AvHiwjL1zNxfCQTAd7wGNmzQB9941vQjLjJBrAyAwckHbENWzBh5HmfA5PNdhyscGCLxwZTBLWeVT",
  "key12": "2Bu8aqtkRTtzSnacKz7eG5cidimDacT6gTSmm8japoT9zNMqFNS8VsbWgUctYbWBoXf8SGRaUWSbr33DFjRxMATg",
  "key13": "3H4p6kewRFsysCzDZPFqQY9fALAv7yXAS5fVqxxJxC6QgRvSW56vdQHdq6x3wxxtQjk3oZ46JmobkPYpjMmLydjb",
  "key14": "58Ldo66EMRoT91fzgfGBMEXcSoobe1xE48Z9woKdvJKNt6YvM2hWyE5CJxhVtp9KjvDbesf71uH4WCdEpK68Ukqh",
  "key15": "4JvqvaBVUv2RhArEoTikNpta7PfuGMmHK6txUMRYpmacB7Pbrro3NSPHeqtvbtNs9BpskxtsoZutTm8ZRSeG7GAd",
  "key16": "3UQrNYU4pE499PPbWpcKbEtPmXndyjnUhpDS6PKk4qjc5PWcMStNfeMd7AH2sR2RrZbQ9cGVz4ifVaqBhdcjFaD8",
  "key17": "223EpARJunYTbVN682uEkxw5CHFe4MuHqZh9kR17h757yH21wTYdk1SdeEDZZm9VjsoUA9gCm6dQXY8H35uTo9v8",
  "key18": "59HyJWVoHbj7hp7AvnZTb1ArRXxf9h3bbo3vqmCXQinSQpsodygs4SsrKQuiwbh5Td2DcjcVnLZivsL6GCnEcfb3",
  "key19": "211ppEHGBjVQ2uvLAmZEBnehdXXLifdnDNgZ4jrpbBH3CusQg6XWCNGqZyAANo4vXbTW8ybCkTFnWGY5jx2rrFi5",
  "key20": "39v2hdhweTyTMqK7d4zb2m5MjXEP9A8mNoj2FkJegEznPPBcQj719uaQf97DNzWN67NNqhkNBM4GYwD1fi97GB5j",
  "key21": "4i3xRicLkLn6ugtvxb5JaAv7LGvSNgHpXwT2weDohedmhDZtaDwXdC1BsZur8HSTxbQUP2Zjh4XHLRyaky9uXaQw",
  "key22": "2cSVNWZzFdJzyPRNpgDijSZDEWjcdhVetdmWQD6RqeXqyNKKor1kUaqCAkeis8EdGQg9hP6h5YapVL77ziJUUuPB",
  "key23": "58h92G3y3gdP1M6ZNTr4qLTbJK57HJFY2dE5TSsW9ib4tMZYcaSt2AgcS4eGM8a4EwGdPnpBfWYNmzqTatLiF1aW",
  "key24": "xo4iiWJkkaXaEcNpcQxVBK1PvQCPzuyhtc9uJruGjdrcnmxQm5U8rycLZ7B5ZPdZ4g7mQsZBLUWqGjYx3Y95KM6",
  "key25": "5JK8nUvRuYAGhPnpsrjrJAemSdwe89KvU9vTgv4YeF6jC5MxcrKdKXb79dYwC4hMcPV4y8uvGWKFSAAhGNbAARWV",
  "key26": "64WK2bYPXbE7sNgW6p3tS3ReV9QMX41j5TFwjkes7NmqW9dQAwQR7Fu3PL5bGgLaseNVd8FXnDDwGCj3oSjb9YWq",
  "key27": "5ux8qZCLY1x7bH4G7LYWieXSxJt2ii31EyDYHzDLTJ6pEuipGWr4P755Qj1zsZhZGnf8uGEtxxcce4FJ9AbATQN"
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
