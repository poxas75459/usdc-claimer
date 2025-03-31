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
    "3QgH9GuTDDCpndxVzC4y1uWGrE4ca8BV7uaejQrBVmR6oYdiB5Fsb4feQw31zeYrbwvGmUwCcUSu895meKMoAgD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NPZrCX5a71VXk84N8QHKW6Gzupqr5HJXpcXiMfeZCwALREzDkpkCB68iSQT36TwKc9JKY9jkGLMA6Jk7HQGRira",
  "key1": "3ZFYvnDFvWvvuCQU6gbNVvm4PFGjeTSJzoACyCL73eKJdtWxboPNafjhjMXLJXVYSJad7qfr2mNmdoqJXeZK4vXi",
  "key2": "2EdwSthVCEh7naR8jQ6Bhx97FM2d9ZbSGZ1RRFfMWKKLkZau9FjJjX4FESumbD2sQGC8R3UmVMaEJa78wdvx97Td",
  "key3": "4PBR842f4B2jAZhSvXhtM655RV9UHPkiV9j7VCjSByFp2cAG5yZCDfs58U5FfJFbVYQ9xtbVLv9U93YMuFVfEfca",
  "key4": "WKp32yC8gUaNXYc8bu5anDco2t51rBn3Q2ivPzupAvpYrp67VDZUMD73iK9rxV36ng3g1n4w4izdDLHatM1WdQ1",
  "key5": "5MV81yWHYyxwSjY2AzF8RYugDuRCWLzUEbSPPtwQiwZR3CuBdApm3b72KXMP2QkWapckxp7hmqcKTGg79DGQUY4",
  "key6": "dGmBfcQAgsivR1ibTMMzbdgWZLHnJPHbtbe6JtZsuLFpLJffC6QNZXrbZGtrGQmGQszFVgi319mwo7XZfKoooa9",
  "key7": "3Mp8UTrurvjy3pF2Tu4uSMPu5p698MdwYFcBhvxuWBXZPU5mp4gexjYZmPCsXe849CJwYdgGmuT96Bp9jLNWMW1q",
  "key8": "EFHgUQTSkfpuY3kJEbxKxb6DhrFaSzu16rZjmQ6Uk9jqvEwfD7Qi1Ae9kxbVt3RaXfc4BxRsn3cP3xC4w3z31Vf",
  "key9": "67quvv7Qe2yEnuLsy6rDNfAZ72QshEjPh2ssW1iCJwARUQskeQHTHEnSMVT9zGfXkZjy98viGwVQbPHiWxtYQGpm",
  "key10": "K7yUXU9dJ4t5seJY3P2p6TeZaVsEvB4nW8yJyaj8Q2w1YAd6egAmfsLeoJaGsYMRB7RWUU6TShaVSHNcSaEjxQ2",
  "key11": "5xe3jWVxFD4wXq9QMWM97oLZM668p7zJuwvRBCRnpsvsk1cHEUuTtQy4ufNt79nDDnco8zSqDBd8gzSmSkj3ouVj",
  "key12": "4YZ9qZKF7qgLXf1o8UxAZoHbv7uxfS1LfP1xSQXAgJMgoCtL5umxHHa2Uovo4LuwNxzy7DtjfdhxtSvnScTLsehR",
  "key13": "52GjXLMqfniTE9tLuNyV4fxRaVwCN7wc585i9DKuSM5yaUcQXNonjRK5E3YTeCvZT3adwFXLcKmXpRRYrWSftK9",
  "key14": "4R4yYomyqvBJzBr1pHDDcMySQaYcBoYdicZi1JLdNp7YLLwkJucfhH7L3RkraUf6LQ4JV41tdd4E4r7WCv3tZFL8",
  "key15": "2y35WsG3QrxPnuvzhd8BxCH9tyneYh7kH8X8y7fNc5iumakaPt7A6DdYbP2uDcmTzELZSSU49EZ8EAfDxscG6FWN",
  "key16": "23e4rMHPjexhscjZruE8vCTYTad9cUvsjL1jB1xSgXQc6aSDDYojqKCMSatYQyzuDWwGwtKrYF6wgnywVXCUfkHu",
  "key17": "28GqaHcb2kWqeyZSNG13Ww2BoqdtKwRHy5YabuCDMzHQe3L6EtsCjeeuw7Y94QBBpLrKRvezYtzsANuTFSeRN4Y2",
  "key18": "2SwLcxPUqL2Svt8KgEdtfDUY1ye8PwewZrdrbyAQzazjCi6fFt3mPEfVKy4tam1GsnAoHp3gU12CCg5WZkfKrkDv",
  "key19": "3vVHW7XKC32vPTEm5Gh4TmDKCenbcTaR5cRioZ7QC7dkFGdxb5jFqjjELtaGb89kZUZx4pmcPF7Ju5KAEaL1ZSyD",
  "key20": "2V82sZCCe1kypt32mJ6Dj5DkA7DJY9QeeyvgswVm4WxrDG9zgx7ma9KBodSa9aX7n3PtKhxfSKVb4S2iu6rpZxqU",
  "key21": "3gWVk94TCSBSy91wuKsAFK4R4QyKNeP7skEjqVK3Vy2cVQZz9zxpqhts6zQ8qj2GbdqBVyHp5p4HBpBfT2hUussf",
  "key22": "4vnk6nZWMrHDPaW9swAHGYmJ2PiMbYWaF66pL9xKUpNBGS2WVKHU9VBviEf1GqaYD8fu9xNTfM7o7JVLwxLPms8z",
  "key23": "4f2CekTkdgYwYHv2JSVLmLQsJBtC74hZTbqhx6516FGiwMs7R8Hrvdr4q7wkwG1BmAPoEcqHyMf9amh6sopZr4f8",
  "key24": "5pcLYUCkQn2xnwy2R3WWPMaWbMYsSX25riyg1sXhB8gzfyzTwyYEmhs2Dip2gZdVunFcTQrj8fo6f6biD87npzQM",
  "key25": "3fitwrhdnWScaiH2cUGw3wj7nVFJeo6KUsSvxE7Q5HvgTYrnRQTYi4RUUFG4ZUNUNGZxFo2m54i38FtmeCw8HMYX",
  "key26": "zo3K6eRVvKwYeZrf7JH6PgozPZxMSRywA9s2UfPFZXAeYDjSGaVThTYDUp4oUvauwn6adS2JsbnHRiaqsLHDhg3",
  "key27": "5skgKT7U4szcFCxbnKAPLq8dzjCKeRMmSnQs1SKksphv9Dw2BXQxBGddJGmXnhqPQ9hW2y36MGhcbXJDPxDTDHKd",
  "key28": "bubUUYMzaazEqhBGcFhdghawqkiSK6bBydCVtQTS5RaiEsWUvGorqW4BxkDvXMmrWzac6DGwsxYZS5enEcHFa8f",
  "key29": "55LQkWN6HBAHNDKJZAo4nEc9WbsEQp1WvZGFTnmtisfYRpy6smvAk3RknzTAuGvRgtrQahs8oAaUxhoJHeB6wtqq"
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
