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
    "4321nATkESRvv5xLZ7VUicXBpqtmQMJrpRtKcasCxozx461JkZLxRG4nR6APDzjubuaFWXGUskapGf4Z2SDaaxwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sAvJRitW2hcKyFxrnWTDvx3B9rK513fmgTpwHdbCTZADgSN3pLgnyLHL6eDk2YPwQM7vdae6XxyJCXFU4AuUfRT",
  "key1": "5u237uPJM9a8K8FLCCGzYKQ8VCi4iGcV4Yoin6pqwWq3MXBb2ZdWvNuZeqEqkampmENSJB17ESjDktRYvPWyNEUu",
  "key2": "44RT4F9UHYeLzDdiKsAV9zwa6MdN4EwtigLUGExDvVtShjoRQTDw5N9v5qaajd8wcjCkgYQzGsjuAoPTBG9oWxwf",
  "key3": "frTHAZvaEmyGwGScQt7w8QC5W3JVPopxXTEJkPcvqvrBqzYmvS2jaGKHMb7tkXYenhP9xRHUXDg56j1UiW56kK6",
  "key4": "67CMN1aBoi3qyxgfqQb21Ycc1WMVtdZXHvrYRq71WjSJZy4SFq8gcRPqK21RFVy6rceJcwdVSuwcQ15PJeAkTQcZ",
  "key5": "4pq4h49VdFzDYJE4Vs5CDez3RNG7E82128rSy13N4yuJXb5uPuUP9dQMnUH6esGxk2yCtqfLbMvE1HJ5txPgHUCk",
  "key6": "3ijjbTsDQCP5k2SakQe9jJQKTXbrfgFhL9kiG7YWU8rvm2Uy2jN4cRPGMC2Gr9NLVqmqaYrbFX5F2KRnj8CibRne",
  "key7": "2imy95ScTKjyp6ehWpBxpxRFpxKUD9gYayhBREnxbZndmVVNoWTGJG9FXEY26cGNRqzpqzLdFC6zxwq7oTWvKbPv",
  "key8": "4ua24hKG6DFiWHMnHYfFTszz1MGx8fmexPJDe2gW8QR95fDikHKh2PJcn1ZLYEmFVdU5oEt5ZwhsqdwmnAT6hsws",
  "key9": "4h4NyUjoJfhQNWCB8tdbMQWUiXFk6wyM1QMyPFWgb3QRDzv9bhLW5mizMXAE8BU4QShg8SK71YpFWQFmidVMZ4Ee",
  "key10": "3q1A6N4UuBXZphaaUAqCTuNwMeMX7CXeKnhBoserFUM8E2La4KnFzeKNBcovps3YQN558Mpbg3zWsDVGpWpBHV6y",
  "key11": "df8iUUt31kqqxeuiRBabxzJ3A9swoSHA3baXrKY1MSuNmurgLMYSRmLVJ8KekCNi5obtPHh4pmMFUPEQaHjxWfR",
  "key12": "vAWCYA1eUBqg6uF4pM5H1RuNUhDyLbFaFnHRk7FNU5muv51jjxdfnUVmpZYSt191hmSKiMEqdXZDczyEbbH7oXS",
  "key13": "44ru1C9a5pDcQHZyHuDJ9yNsZjBRGCnhDJKH5vcsiEYcwzQDwqbcjQHmSWP3aTm4tPGUHPs2kMoiYhnbfqUvWtzA",
  "key14": "2zLj4RREhJgsFuTgpyGPTukh7FEAotH6XdRwC6RqpAS9s26K2ZYbffSLXo4bKgrqqaJHsEkYPap3k9Jo1e4JREWZ",
  "key15": "4HZYRCYFQTcTjef12rvKK8K6LbHiwN7EcCBu6rMT32sLXkxSb6ApZde9Aj6BVQMPiGLkSrVznmp8DLoYQXPQJbiv",
  "key16": "5ZD1fYeoQQXo17B5LHczWodY5AgtzFojc5DXghqV3mmAUwthz7RYtN8pzVuRNEmX1xHtA5oTH4nxc659mKddhRYN",
  "key17": "3wQMcBStNZF5nU7Qma4mqQVCo6Ez4eqSNay3GB2uRbJpDs58jeBvBZjoSgdbYMjPamnj7rBsb932H9iiCfmFt4V9",
  "key18": "3uWs8QRGsS3193h7vBHVKUH1syrw5BBjLBbjzimroxPmCxRg3bn6C59Bh648X9eZujT7TZ3RUS87a7FLRftes4mZ",
  "key19": "4Mo224VSWcSgzmUBdGUR7zuRjV5JsnqeJopGCJLtuapoijWk3RmekHMWaneByxfhttH1v73UGvb7ig7emqCGoC3j",
  "key20": "5sSL4fo69oAazaZNxVLHbxTENNmmGTUyzhCgcw2cZe4nscje5dMpZwmNKQrepu4fTJEkYGBhfeMaDUZjCpM3AdCD",
  "key21": "47xD7y3XnamTU3uoubmZ1Na7tTVSufiFek9NbbtWrYrqwsXgdUYhsah8iF7t9BV7A7xqzqGXwWLwxpHPCF2JxgSx",
  "key22": "4AMLZyqEEPb6Sp28oYCUjgvstsJ1iZbXPZ3DZR1H1y4qULQYYxUP9cunZBo8LNNoxjsL2MrNjsUQuVH8s2uEzEtB",
  "key23": "3Vqwwm93LPQ1Wp256Ztggi9FwfbEWdY1DHpg8NADhbQ3Y4QwrQjBqg5C1Ve6j2wkY8S2tVS1KAB9SXEsHRH8gPRZ",
  "key24": "2SFSvKLV9qK5pb5Rb6D6L7KHxwdLTRmQ4NrVPV1ouA1RzbQaYaTACDbCkwLbQMHbkmy355fcWVobaqriMW2XezVw",
  "key25": "3b4DTjZK7DbVvJdc3jHqY87nPe12dj2DaneSW6gnvf13cFdHFum3cGZJRPnzj42LZCCMsCte3Nt9mEFtjrEArXHx",
  "key26": "4Ky6X3qY7K4aFARXuhGPd4wmCEmvaXDqksVszdULmCnrV7TdGCGJbieHV6WUPgY85cXqdsRbNJJ3F9KK6V4zy3hf",
  "key27": "2bMSn6nq3YcX5YxV6NQU3N34d5dSjWtL61p3Q5oMWvmLd9wVnmMb6hdXsXJQMxRDNpGFez7vmiP8MLNgfQYoGhsf",
  "key28": "5oEnU6RvYGSDDjGk8jPVVi5hHYQu2kBH2H4CW5r2VwRWBm4XxPkhynuGZQatHNh7Bf1FnUSVJbPysTt5TgsjYDYu",
  "key29": "CfNJdndeqGnhEQzqxZtWCvBsf1CBpAgSKQoSjx5xC5PhYjwmfj6s45ePg9aDx6UbkDtHhi8pRPcBwNH6xA8SRpA",
  "key30": "3JqQc3XkB8ng62a7aWJvUTcjff123LvQUJTVmQpKzvct3SLL63MeoKZ2VUSBp42SVZdBfcSki241eqL13XwtDKM5"
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
