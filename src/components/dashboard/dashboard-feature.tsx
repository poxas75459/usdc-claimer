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
    "suZETwirpEJjksbfCju5vAQGfhj9ZfJ4cKEX33eSHMnYy6mj1SbVp6Gus9cD2iefjfCfQMPAzqXy77Ht7xLDdY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k8QKfWSvwUxEd3MD7aBZ4t3dP1cCzUyJni4mVyn45CoXLyrfcyZ7RHjN7XHTnD7i1WH1ZzuQh3m6aQPeeAimH3P",
  "key1": "MetWvyHD8iegL2TCCFAWTARUyg932e5AvJ4s8aRA41AW7bn45MsYUpd5YjqoDDqDYm3uHnvLgmJVYdqo1mH3v4i",
  "key2": "j7hehkajDkcEvKrKGvtvCQVUF2YkCUh2wMDMRCDF1EQJba5KVraRfbAoQRr3x3wvVfvTYHQaaNEei3DW7TDuqdX",
  "key3": "62HymwLs4DtetyCQgLt2mW2KgybdpRMofSiQoePor1GoE9PhQhTnLwZ2XSkoujY3oFM6BhFmU54tiPMpddg1zrV5",
  "key4": "31Kt2PWKZhkUxvpX7xHbTUozcEhyrNktHWhu7fPaf9eZpA3o2vrJaRpYM6jvU2vibYweUs2itGHY92epWMz9NKAi",
  "key5": "3UHJFcEeZVeS3ePyFGyD2pzcGuxn82Eht5Y6ng2d718e4z473UmX9uRkWAhvWcGEJDaFTK76T7ZYnhSFT9adukHy",
  "key6": "4rjinMYrrcSRYKRRrS3Fk57qUgkXYMRp8d8D1vcgHDQPSMxULwZ6G6JiH9ZCi2b7WX1LUq2xj4QnGPMBoutmiMF9",
  "key7": "2RzisYXXjv2Lh97ALWW6boCi1o6ijaTS2xnC5LLttiPUDKznvKqZgt3kaTY9UayuvBD3A2ANWTgkpr47MkipzGMW",
  "key8": "5tUXPrzrQituStjbe1MW3s4XbuJXksLua1vrcYaaqDzPnNWUjaHoXNSKS1SHbB3sBbNCkjNWg7eUjkeo3jv72tS8",
  "key9": "3CaLbk4u6P7MUGXfhePnkgXwuB4TTjDNGhSN7EtH3aJiorMEmZJcKUovTETca7tiPuMhrGmhz9GVZnrZHdZDbSKm",
  "key10": "4kbUobQBdezYMXqkB4A7wy1T7yBY43XeDzf1fNTsoGFTSVrkzAHnp8rkCLhjUSp4Qew62rsLxAgUMYY1NfxKrWLM",
  "key11": "RMWmqbuZSgH7A9r42iskkoz5MJPcDpNCrtmRrxNbT6UGqb5YTKmhf2SEBtNGT89jHapWJr4vKFvodCtmt3xLH9e",
  "key12": "34pWJgZPqUaDd5kZSDHQjx9ZXhYseFScX4oJaxscGncxgzGYWUVNYWrfJJWdgZtmpG4bXbhZdoULWZG1cXqzfV7Z",
  "key13": "22fSeAZeMVEAE2iTrVcr9HsBfv1wpGfKUWHSUGWzkabpE3WUa5nBStV8uKdEHvUfpQfSxhaPoXCkx6z7wG6FqXAF",
  "key14": "2Pr1i3WRXwWFNNpJv89Ci2677WpmfLvvYVF29K6xzbZubnxANZu41ea4KwCmwstE2ubB1zC4xNfq2pxX5T5CVCKK",
  "key15": "3E5jTRXnJdVa6r3ofRY1sDiNc8jPP9kCW9jvs2MSiSRkmktruSu59BZauqYJFzqJHHKAnRZdQoGzS3iZvHNaxTxP",
  "key16": "4QRVxbTZNnq6v37TXMtkBjobqp5dopQ1JdpASZbvfiJz7Cfb2KfUQpiJjFGMWkacZy31z4qeL4G8S6rC5zbkRQhr",
  "key17": "5cgLZtBTsdZAgVW2vPcFeVV2c34SYfAzMFNmXWKPujE9tjoDBybWJ1o2Zuo3DLbAJL4cUXzaZGARgQ8476cRaDPh",
  "key18": "4XgvnZJPR9K7BN2HL3azFsGDXUEmvfibrvfnca63wL2BCdaw5b7vjCerfoNuCVi8Mhg1bQ9UBRcHedvrt2x1QYGe",
  "key19": "2BFwYiYyaJxvEZC2jNPy7SRUjwzn81t476xRwYTVV9nxxHQiAgWzzWBXcnJy36bbXXZ5737ASH6F33TNaqxHk5j8",
  "key20": "2v7mcxs7NfZxfTkejNKaEjBvi1EPx1Q1L8zQ6MkhJSExYSVMfQDDwcKyfadJYc6NwvUcLYhopyD7Qhvz9DxvrJMV",
  "key21": "4MJLokBzijpPPCdvQpiwqrSGksHeEW72fCozLVY6E1HemrynHddeALx6V6s9nZnXJCrXCd5FB5BJrsRHU7V5LSkL",
  "key22": "4M8nFem4zVLxbQrwrQLZpdCUYPvMiaENPGDjWmJcdkbAmxozrNMT4Fq71FnWoiYzuEEXQpQHxQiWuaPyvt4nj6em",
  "key23": "28g2bEdPkBFJF9254FpYqJo9GkUZzYQ9tYm16XsfBCh4NV6kBcL9ysMFpvcMDcLiVgyBGCMN1VqLDg6ReiS99w7a",
  "key24": "3Qn5pYHWKebRGeAbkHJyKY1gfF78suse5Wy45XvkAj7ekVQwJjLdAwDMunTYyfANw3SUcm4hqLMP89QLGtHKSTSK",
  "key25": "MP5eSdackBohrwFZFVkUdbRpwnniu42yZ8BpeZf6Qy2qGVMfurJogzmwrPCjyjS87f8aaebU4sp7pWeW9eEwDjL",
  "key26": "4t3eg2AndSxZNKPE5fe1zQ13e6DGh9qvRKgC7Hz2JQ5kVeiD92cZATr8iUp6QMUMuQGD2eyccE7s7eTg7hzkgZyw",
  "key27": "32DB2eeQzMobnEQ9jTcUwwxxx28dS8aeJ5PmM3UV9XAQaatrWLJdXh3GAa9fGqBcstQzNmZm1KmGVSiXPneSEdXT",
  "key28": "3Ui54kM48goz5cFm3ps2gfsuzRjaF4ofmgPgpe5cXinpTGcMZ5iREEWhBTNRiFpsa1CrTgabqGchjBE6TmkvPdvQ",
  "key29": "FzQhfmeBd1WmLcBydBfmBXvS1FcbU7zJ55RQqja4Vq4LEvW31pnt4e9JiYHvnbaq1DjkULGVivb79zYp2HmU6Xu",
  "key30": "2VtNvHKi6GFnnVuNjyEMvZif19yBLR8KQccfgbDLvMJZNV651SfjaBpJ9J9G98GP9ZA8LygMj2nShJZcoNkkeoSW",
  "key31": "5tgpTBKr9Ee7kDEo9Pp5DKHSmWcnyKJYxhdGxJbQAwjqs8xwjG9nmiXtZdj5DbbJKggtcY2rTKX1SPVEp4cQfs71",
  "key32": "fDXDAmqxkwh5VT9iP5MNUSMnr5r7yF8r4qCLg3s681fxopnMn4kNt4n5AMYVrAPmuBhfS4psaZKhCC1gvFG2cTe",
  "key33": "5rg4VFNzEmMauwTFbGcnFK6KdhuuY2mJQ8RL4v6sVKuZo9Mmew6ZnvjBBmkqRQ2Hkhfkc7FyG6KrRdWcTeJycoVM",
  "key34": "2u4UkERSKNSZu3pvynJAGEZmyehXVRHfqZqcKS4BacexwTz7wZZh8KcHoB56bFbjaAAZtp2QAX4jpv4AcCUz9Qsu",
  "key35": "qaMVcYKgoQWyk8FV4dmCaxUMe2uivwtvQ7YiT3mt26WX3KT4sykc5PXTFS2YBQucv7u7e7hkyZBJzKFeZchwBVh",
  "key36": "3vzCzakbjnNMM2rzvMcji315rd54BjAAJhQpKFDKV5HNprfqbenqN3MFe5JeggtezjucThBKbhzTD38fkivT8PQW",
  "key37": "3B27gCn3gUYJGZjopXmbgd6MV3PUCyYxmVBXvFLhWwxHDAPD9W3Jc5pTmNirCDPajpMrqYnvryFFu3DqtStoJA5y",
  "key38": "4HCL5AhiqYN9TVcvdd7mn2i48vXivNGYWTyptoD8DmKA38x2FFskzvxCp1XLBLMpSb7Bw4y5jCQPXH1EJJAipPj5"
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
