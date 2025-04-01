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
    "28GsXuVkS8YPd8JsRstnkfduVuYDSnXph6ViexnQX4nd7exu2cYHgBwKxQ7zxt66opbPewxcMP63RLMSd5GTWz7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66eMhLui7Z7bHEcRL3tr9Uby77x2Adhp4bgXX89hf6uMJ7mpuYaAuieFCbhb61xmnmcu6qycsnsARTvT6F4fDgLb",
  "key1": "5zokbHrvHVzA41wtboFZWDYvtUqiTQ528nKGtiptz5oB8EFfEjGTnKB7xJqqU1fZNDjtT9eUbjAaCsoBBWgW6GCG",
  "key2": "2cG2uZhybv588NnnBczA83SqZNisT1qMKrdPV7RuKa1vznhTRr5Huwyx4Gw9bnb14QWtbzDS3SgG8docENjTc7qu",
  "key3": "4NGz3jjeTezFgaS3qKUynesdWpcMUJoPCaRQE29KWrRKmWUmdePE1yZeuR2PMGDhv1z6GVHop8cdJsE7QUjURCm7",
  "key4": "4y4PQYuAFCS2WhWHTwfvobyuSqjsXNEYF1qtK2QV9t1Gxk3sH1bKdQpoPxViEJ5usRYiRGcvrq48utgdBgBgJk5i",
  "key5": "You991qHKKhcGyXw1s9rsns9GuZ8W7n1KbDVc8x5xxugE9ZLexJ9Q9GhPxXtwmXUd2hXEVK4huCv55nr3kQzLQE",
  "key6": "3YmJATPwCSyJr1tjAmXMtqZjKYbw1SNVH9tEpUjrrL9qfu5U2EpUmce7vXdLvwwgnSdjtvt1vJATDZyQ53Upj4Qu",
  "key7": "3uJwcrnddsG1vwiU7zvhRXJeKgWetZNMwyjNZmUrNKfyprc3xcEXUpQi73hF6AaXui9xez5p2RtLFrgnwdANqW7M",
  "key8": "5dAEJacsve4qxkHGPT8XZtDduTTaFimgM8QNa4QC2ZuKnwSwM2w9ZfANKSw1ugPbZK2YQsgYSy5zNuhVmCcRbPdk",
  "key9": "4RyVyJNQCocSdxGSCcFhhypiiEHvXX5Ddrq6f8Nhq1eWgQeufoAKFr7DV6ztSbu9e2qJSiq94CNA8py2pHwYBwur",
  "key10": "X8zCAXykC7wT6u2j5tVXcTcR7Wj1bcBjvRA6VdPG3jUpekaFe351vX5HDwQ3GwzJgWtu84GVsG6DuxuofopMU4z",
  "key11": "HExXnHSruF1W3jEuAAYevpdYXT3BtSd41aJNCoAz94AVF6gfJGKHDamUTLwuGYGZb83He4VqJ1rGBsz7o8HxUDb",
  "key12": "4pKHzi3i22Kz4docPShm39tmnf63nR7XrL38iyWpxjhWMUoGM7gvBSsSaXUgLamoCRziSvGrDUuMpx8aUQmPKZ8z",
  "key13": "3KFjFhk61XxjrLhGhZrJHVHNCm1tieByn3MQcWdhgA72WhYnfau4Zc69WrkGWhtY7yCHveooZH6LHCmbMPTfqvHi",
  "key14": "31svoivwbgZ7YDcEjGqsU9ggVfb6uLR1GTxTYv2Fd6UkmwiDL4VJfZnLfx3fYkYn3PE7Jj7sfrGbvpJqnPsokZYP",
  "key15": "x86BVbZfU86R62TKVR5A8yUQfuSdkeAjQgUnM9ur5BshDx2rvQZdGV7bA2rsLnu95kFA7eKtdPzqfJA9q8PcAjf",
  "key16": "JHYP8CYwyZ57fs1ntWEi4JVSjvXoZrgsa6G6ivC9x1reK6Qbj5XR8rWDgDYyMDsM2rW5586YcwRhGnp4CQ4FKj7",
  "key17": "3LfbDsSWEfNxnUNJLPjfndhNYcGeaDSWgtwe4pq9WRRdKrBLcoaXwrhicsyNtvCT3ij2sSCDjknKEXkpZuYHXaPA",
  "key18": "4Ttki12T5VLAqTXhHKu3k2ipLdhZ5HA4YRnVLsLXAkkDnKmjyKmaUsNDfsxXzhfzMyuFbagMZggRJtu1mMNehN7x",
  "key19": "5N8MEAUs4EMUhxK7oV9kxSAFZQ9ZnG9Dd1XZ43ywr2jtmHiqeia8DhkUNXQhmHBp5iPFEUabqKDuK3nGaRU5YNK6",
  "key20": "4vRpWuYybN5Yo5U7pYUYU833zDr6Gn6a34P96ZQrD6a3oEv735TkbeWnC8oUx9xdDsJUMRNo6zqE7EdbZayJHmBh",
  "key21": "4y1SERDDmpZ14qbHzRgbCE9T4sYEjWtjEs58vpv5a84fU8G7hJHMHqyX67PSnHGwdeKWuhtmNRCaXixASG3VH4rq",
  "key22": "GqJMibwsbH8TCEgiymJKNt1msBYfFD61S1NzZBg19Kx88ARqZEMSSnbJfdR6oSCkGc79HnDUHm7PfpLmBEk6ZoQ",
  "key23": "5kHPxh8tHnBP2BYJoTQGhwhT8fDgvKMxu4BVPDnKscjB6D1KVKU3X15GNbJWAoCx28DnjXBt5xuvBu4qKcRw46BF",
  "key24": "2TYwhJBqVdm7ETZnRcbx2hM8UxA55XpTYd1rXaCjXBGMdMJqJZXL1NFedXsiBUuocHC6Jck9SdmAr7GB2XSq3S7K",
  "key25": "S2XV6PrLZFj1R9FoEFthYMVzuvnJuLkqsmtNDjhKxgbfZFiLkgf9bNqty1oaGG1XRjYJbpiVBPVT7miVQ7GSnH1",
  "key26": "4y1Gh8WGYRpsneTF1oGb8ne5dByXizQHgqiXZHqMSEp1rZmgSt5tL1vswHwkfLmyK84ZZ4dNrSvR7NxTYecDHCyu",
  "key27": "3MZVhgZ37MSUHhDrjZ93uq8nKZu6cFZZbUYWHJ5szrT21EhjGwvp2hduxCPEuj1shaBfwXVL36qfbXMXw6nNyx4A",
  "key28": "2rSYGFv5LEMZQFW2Hj6fnNJawpa4hNtYciyGev8NoEsNqi7ZPwJ5mQrK5n4zTpyUinzut9W6nCqHZizhbtJP32n4",
  "key29": "25qhwUSctW4fGDeEo1Me24K5YEyJWf7kHJtMt3ErCUNkJ7cWb6vZ5G2ytNWFEyjLtrno98LuEfvnNYuDMGmDkKe1",
  "key30": "4Hkdb7WpH9HFT5mefWF7GxesgZyRev8LuqaWqpZFjVzJ7uYERMVsM3m8rBmXPxwww6aEu8Byjt9d9s6pKNvwB7FY",
  "key31": "spbkV7YqFQBpTd83dNyrMFNYSbGp7rGskEf5YXLjx5v5GLXabxicevY96V6wTwygTLuijJaohPeumTfiZMzAcvi",
  "key32": "3FhZiWgUr9oTXjGGXo3csCZU8G8K6cZazx3fZ12ncafDSVDNv5FgQLvJFK55URjg9quUnYSofJ7nBmgGdsuTrnhu",
  "key33": "27UN23UbG4YEAYYmh1krfwB8VYksKjCZ9Av4p9HYS5sJ9QygKZviniKvK2MQ3NZw2XnNWBXjhowMg31Qp5Sw2G2w",
  "key34": "3TgcB6LF8imQSuLSaDuALHxCri6ATZFmqbwuMFYcqTznDdwj5bKucAY4C7Eeh6m7mzsXeBvh4mNQdjPJxtphd2SH"
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
