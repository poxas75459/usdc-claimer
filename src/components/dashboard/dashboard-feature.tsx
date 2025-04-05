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
    "5UAJqUCZJZEcRSoijQekEYPQ4itVfXdQcp3Y21QPpbLUWnVDwfamofcEhjojznfqWeHzgQjz4UXLSm4weujaf8di"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oYRRcbziYqhstMCNMzLQBCnVTjAT7V6iQECPLjYqE65gaYrBsh5u8Eb7FRLQbdmfqCpw8KaWjZNwwFHhZrYZLH4",
  "key1": "5wtsChKdrEPHyDrYBdEX7aL879oDPrATYs9nJMnKvCUgEuu2L5LaS54Paj1T5jUEhq7XttbHiwuR6SHipiQURyND",
  "key2": "4YQqX3dhA5E5ghGVGg5ubHYjXcpUe71GtCixN5iatb2UhVziLvQ7J9SRSzSXP9TwBF5y541FpH8FLxuwdTsZ17eN",
  "key3": "5yPq8QaoNcXbn33CwD9PAK5La3VRE2XuZrHoordiAJLt3oSkgjfpioQS1WkbjykL7DY4HCG7Bw7FpjqCeJsCittD",
  "key4": "36DCEaevSgXizt2Gfk3oXk1pc9VnyJLTEcNRzXi3j5u3W56yEPQ3hVFrvnUsKBEVPsi6htyyTKqdxxJeJqtxW2Yj",
  "key5": "288zkRs632AbzJUvW2gwEuhpABQQH8QCgbQow7TmQoKuAocaaBURVsgv5e2z3hNAYaxBBmAQpWKuTAbY5KzmN2V9",
  "key6": "AVKszkQtkc9JjACLDyaqtdkdCCvuHBKvpifgVGfm69P8mXhSKGpqubWfEyzUZyxBZpNzKoYj7aRnZWk6dLvwYN1",
  "key7": "3qjWr7Dgz5sxikBhwJKJZ6fKR4pgMGZu5DgFzzRepNJS4yj6VXYvxBkDQ9VMGVJAdQ9hgC8qDhgx9uwzor4qUEXK",
  "key8": "Ynm1NFi45vPVqrohkcx2AzsEx1Qc17efeygUwiAe781chuETBPgKahDhY6eRArKcK8TncaWv6AZZy7RZ8T9wW6W",
  "key9": "37XivEpUTGN2yApTB14ucDg62WTmxCu4UxwPZauMmrtBWNtNLtNVySiZgwc2ZjfGeJvX1zTMP2m7xuj8wRoRC4Ze",
  "key10": "qGrcgK5RcG5Hhkb4ty7RtfsdFw5HPhkJLzHiTYRdd4rAX1oxckzp5oD5Tdkx8nzu95hC63wkycosDbawoRCRc81",
  "key11": "3oFyLeXJgfhuAhGHZksfZnenWYG7YWvjdjiHmEpQP4JDdpxXLPowjCsnw4gACoMQMutxehFW9bUxMdscLrSWmkj1",
  "key12": "3WpxDJm7yaNJJV1YcUG63EgsF6x6gudd5hA9FJcLhQxQuSMKrYaXyBLEeVMzbT3MbLuVPQAvvdDVGqjfU7WZx93Z",
  "key13": "2NmaaEWqg5Knqrs6WQwgNgyRKG5cXSnKyTPfmJxbCjhp6EZazsczdKXVfo296heHcYaQzDDUdQkCQJ46MZWtw8VH",
  "key14": "5CwXuDGYoY1k68kM1iwsSqazUgt8qS8EY9LzxvgpuSL9MpdJhYbNPgEt7kAfMU1JNiFN6GjRjbGnxGZWhzWCQva7",
  "key15": "23wASp6VQSBWLHm5ka9DoNQ8x7WMhXbY6tE5oTu18k6k2ZYUoYqHPb9CQWreoS3Nd36pLpDDy4ibbvHHcgJEVmKm",
  "key16": "5pNhCw7qbajPtfRinhJhThqaqURg9GZ2Dgwf9CeDGGSdL21SyQdSHMjPkjoujHADtp8rn4Yxpqe7G3chPV4dDcXR",
  "key17": "5wVwb2a8GujgDzvaFiqiFWiqZpMpJQDaCnm8EbvvChFMPinz3U9CY7CEz7ThQWoi3dmmcxFwdnRxLcgGnTvXd2dF",
  "key18": "5E48U6GicnS8J1N3NiScfwjxDZKnAZswX6ECLg53ETtQHNPGSxtzgJc6FKgbbkR1vEGYA1E7GFEAozTHmqSJt7Dm",
  "key19": "NnSmvzw9JprVRS5tHtYSKtyihm2fct12izBoRPqB3WMH53EUUBGEH9x1T9T8JaDidqBS4qJ8QFBiTuXbX3aEwGV",
  "key20": "4E7GbrGM9qFqj8DVZTvUAEhTuamb96vpQ2vGX6zgficUAEGJ7CHfVcMZrJphgBmE2BDQ7KZmFEWHEqDhdzyRbaXF",
  "key21": "4E7BdZXDEfHGkeD4DdJQx6BYJv3jWL3hLABZ845CZHBVvjvajr9sDePcC1MUGHpjpNY1SfeQ3LEJBL1jaoGm7H7L",
  "key22": "aZ2iid1gCsG3kG2AjCFbf4S9bktAyfJgk6NPDAsrff7EwuTYGk93bMceVhQW1Y7asnK5PxCvob5zixZfuWaFmyz",
  "key23": "5kjyBTSSC5vevBhznsxvjL755dQv6BhPjXdrE7z2ZR9fDNexR7Guv2U371sw5C6PkqZivSv1RYJ3T3N69fnaYtaN",
  "key24": "311KRkr51WJXemKUztRyn2NgLsh5o9zQQJkZsNeL3y5dtF2yD3wFELARy76BDPT36SDccApUyasnDjAYb3MZFPut",
  "key25": "5oSVZWv8L8yeUK2coyf3NbLdosDffE8wD3uvPChHyAkUsg7uf4kJgi97BYbbKXsJqKr1f7CBz8VTpVvaZzAWAFq7",
  "key26": "4R2CQ7DATfpFnxUPhMFUUnpxkUwutv3LWLADDyJWmCc6LBj4Qyv31fZDMULdX3yf3QzeDb9sb7zvAHhPPpf2zgh5",
  "key27": "3taf5gVHsDFKvhUgjPR1yPnaJvWCPi3YkN6MTd8fF3Ur7jotr9TnNuCqJL5CLowAP1aECFCpYZiSorLr43TD4qfQ",
  "key28": "5kcP2UyTWorRWtKhwUxy4bSjzn6Y7cxJyyRQNDtFutu2C1xMmnvBQbZwz2EAfvUjS6h6KprhuqHoijKNfd5od7hc",
  "key29": "2RxkWDFDHZFMHPr7DALdgD5wqf6n2PnpdGKAZw5kHESgFMm23TD4nLq4P8QYBRaLj9XSyB4MZhX3r4FJkWnWsNan",
  "key30": "xrfjG29axsS63PsFktiJE2wVUYyZVhuJT2AJHrmCJ91LshQQ4aRpgfkCkT7S8P1sL7EVYLceuyDKQ4oZpFjBEHz",
  "key31": "3a88RSw4ebgoSt92pEYptemnh61EeqGBbasEErUMG5owUE9Jn9txihzAiXrGrAuadc9W4AkWQbmfu58y1eoyXMjj",
  "key32": "rsMfUVgGG82hCF8KGowFCqKggJ1MReaaLNxRhtL2gnv9ABbTgocc85wPXHz7VTg48ELY6RMjh3SedHLAiqHaYF2",
  "key33": "5dHmqoRzdzpq43UbVF9gJ8SfjcSfo9hhXMHSiW2mUDrUib2pY8icZVPM6yxFSPkFR28R2344oz3KM8HPPSa74Yqg"
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
