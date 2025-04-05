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
    "5zpzpK7Ndrc2dnqbhyjncxe5jrodWUzeJQUvNFaEuMwzU7cXZAZAyKRMRFxw6qdGow3NLtHgh3uQDa8ZyHQ2XchC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "srD2VTNrmudPPZcoRWhVjTQ6wG7MghM5wam2jQAJm2w879o8aiCTdu36zYUymPKWXb8N1v7iEBq3vuLRB4nQf4r",
  "key1": "5sKCXbZZEUYxzHMs6b8j1wMUnnbPo9iw6mXpSAdKgGwVMMmN5Ji4Pj9GDT8L8X31v57mhcLwGhM8A4jYi7LMhXXh",
  "key2": "5WazZa7KDeWBt5pU3o1rKaedbVLiEU9168488Hr6goScsX8x4gqPZtomwf3cDteFP2XhjCsTMY5AunL3mFPoCsWG",
  "key3": "43ZdvGhB54YHnnCDD97UFeaUdcb4wYjjMzCYSTjdLJ2q6CJq73XztuVySe37qshxhWnqtNrdx9aUfvFJkSWUud97",
  "key4": "4vvXa5M4aVHEkzHJ39F7SEikYEbKK8Krtr6uczbUhrFLuV4hpvkR98AEfTdyMZEFK1ih6uQ2oarSH9Zye14dsbXv",
  "key5": "2ouk9y9sTkY5xQciDY1anF1JGakC3SYL3obRgE5MsdiNe2HQ7KpUwaaetzsrakY54VFuWGVXD7vSDaqu35troWFr",
  "key6": "5p2GWYJp26ouu6qDNxbbgdEELGhFJ6LWooU1YoK73WLphW5VS357G5A32kztTEQSvdVPn4RnBZj8LYyy5dbWzZZt",
  "key7": "57TWk22acaixpLx3UUqL6GZ3DDdpNe42SWaqWyUupA687SgfwNQMCM6DKBJTqzARHtzvoF29CZxiQR7UfPJvbCHd",
  "key8": "4nStyh3zqBHbFUvsey79jFp4w1DrFzW1M5JwnB6Q5ZuEb529rX8ax1XjRrK8UTD1MWvmxbHMEfVQJWLGsjrd2qPg",
  "key9": "4ccKeMvN6yeyYsS59kNnnxkpup9DVcAEHe7qegtXMLDttiaNrGAHCbkmcvS6Tm6XhvnWHSpSRUvYSLAkK1q2Q7AK",
  "key10": "2A9hMEnv1YXDcuphshbJaLNXVNQCSJt5LwQ8vroskLGxi2LfLMPL3pDDFDMvmjXtgdjD4LcnL2dywnVz9JV4e8yj",
  "key11": "4KBgFobsNKponCYXGXeuZVtUHjzf75dj3aA5fKztqEDPYD6x8D6vgocMspw35td5geuggDhf8TSWs7phX9BMqaC6",
  "key12": "4dKnqreyaorwNXGSMKXPykA6y5qDFMq991q7Etg7nb4WJYswtiHG4oeMvwCxeJ7h5yDKjh3CwKd9Gss26xg33H1x",
  "key13": "3gtuzqeZK85E5H6A5Hqnntm9JUZZGHdpzFWr8ENSXsZHGCp2QiyyCn4rCfcq2Z9kDE9pRVxuthrsQz98KaUmRRNC",
  "key14": "3wENvLKncbBLJiphMJShqfWCGq9azSM88VpbHYn4NmYvmEyqjjsjBtN4PFxSA3CjAaMX5BWALwV5AGXkARYiatvK",
  "key15": "3hpnhqCEJKW1j8n7QxFd8JTk3wuTB2sCqbdQfs1fs6t1yTzdaKcVUisc1UVZGX5nMemuRyE2sLAHViNHLuRNuFSP",
  "key16": "64aZUB8uckV4UFoBnDPYmYFhaDDjEUsDb7g7DYgxiKhwGPpD4fzXwbQ1BFwC5Vrn5xdd5aVZxRLoMLkkMgHyEwQj",
  "key17": "S1gMuQUCkry9RcgRo3n2z4mQV8sWbPFssF1xiqjPQKWRwedMc6Uj9joaztRV1LSdUr8iLa3Xq2Tqs6MQqjpxH9u",
  "key18": "2gh1mXStynDo8bwSvCFcSwPqwq5pTErijaw1ZiJYYtYkdsbmk6LAjzQ7GPh5gBzi4UkoMAT5Wib68XQnyLQBimQL",
  "key19": "5hxWXCRYnSXRruuybFTv25ZRgZd6gBbjEVfz2gWs3uG72ZBbvKxev8GXVMa5eTk8uyZVTDMULySGPNwT1xSCPRMb",
  "key20": "4MQfDdCPswSrHauprnNprKQJDVZo8UVBGrrg2GM6UBZSn1nwuCRm7poqHRKvkQVvgmzqXgjEYy6aVhCN7x1yBuAv",
  "key21": "wMHYasy1BE1EGCiEWJ5Zp3pSoUMXuNdAeZzZzCZXnkdjTDbHzEHqVa7VqAJMyjQaigWvPVW43p2y8fxy8Ubijf3",
  "key22": "5Ye5V91RUXxxyLjmegUELqR6QHNNQ256ZhuB1x5VEFWF85PsV8RFc9mreNzKWzDGUNaTUq2rRaFNMLk81oxcRw8A",
  "key23": "3vzGMPADPKTChYPhAyJmpg3PNNzmYQDkYPFV5WdKUiJPN2HhVyetcQ7TcHL3x75vG9PbDnHvLEqtYZotubWqmAvN",
  "key24": "4Latcc3j1gk8ReTFSaFWBYUQz8VxPHfeCA9XwJEseqUSD1xnZqCEa4zCoGsyL6mikakTgY8xLeevD6g5GccDo75H",
  "key25": "vqy3hi9yx7yFPsbdXD7y4iKghjhYRR3xsJai5Yh6jTZfzmiLgoJ5umF86YQ5of5oZapsEgPt8q89mXdJnM2JrJA",
  "key26": "LW3patcytYHSZ4fR3xZCQQiPeQ95Vd81uv24TJPSSjnzFpi7ipYAWBtp1a2F9FbXQBnjcgHn5Umun5eh5Dggsys"
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
