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
    "2JPiFoXzwaeQKpTvq6ZJ2VjJ1xkzi5DFrEjbY4QpUgpMgCUbVjPGrP7hbNN5hNxgb2bSGk39WKggcSfochyPx8xH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dtWCQNsaucg1vdEvx46QirdPef41ZXNx2cWrS9KNEijYAnTGRLQTK2d8BtsPPMjuNC7uqXmpCxaft1zLBiYdYo",
  "key1": "62PHYmwe1k7KoTc92eYwqAAB9BB92WJSFLkrhSnUKkn45yHiRD5YtSqQDm3xo5vVrJ7eQNeUW7a8dQCV1uH1EJby",
  "key2": "4wc3SaPX6vupbTP1mcgDb4rrWjVeLKRhDjzKtmEmj7FpnadUD4skUGB1k9PgmeWBHqb9uaXQs3BHQN8z3a27wLWw",
  "key3": "5otcakYzodcBb3DFWzQqtdhNzv6P4R154Vv7TdGd3Seb8HXhkJ3DcLzgV74WjSzsvSF8SARu2aowzKtwA6ofmGgm",
  "key4": "aZGEz7pjcX36mxjyhZHUJ1znqS7Z7zniisQ6ASZu52mp5UE9VKDtgXpjwZz4m4FAjcUniSMiPkxG9WHTLxrsAzg",
  "key5": "5fo2US7N9yTmj6rZudys1c6PciLDkL1WFaJGhBqkYjtDZw5k8YD71rgfU3UUfjcVjoW4jHftodnMDgm26AAEt8gq",
  "key6": "2EegEU1dqNEwdYJkAxgevwZn3KPCDmHfmHeqmDKAjLxoMD8N8jwrLqjRV9yUh7AEBURGno8GuBwXoh2L7fiuBYPj",
  "key7": "5oH6Rka5H1cnnM47thYfPGxV9MXew4f4V2FBfU8KUhq1QrecaxuP45LgUTiQ5nDXF8MGdYbVzjarfxLTnAkooFQu",
  "key8": "5g9KkFekZ37vMhmBGshBbHVKojHachkQCaoD7avY6cXBL1i1f9ra34nGV9T1QNcCF3ycEba95VAnpA63X9arG9cb",
  "key9": "336Ljh1ycQUMwcxpAeApQKD7BoLcbeSKrwU4HtfR5GJVvZzfJUXHUjymVkbAGcpLd8ttb8R5xLuxpEzN5c1Mag5B",
  "key10": "2tLKVp9gsMiMYgVohxzWTwFp9ZjexyFHzd9c96UE7vRZRyVTmRw213Crdy3wcq8ZzC9HrQ2Zcca4U5EDHKLAD6jF",
  "key11": "4u2AqCYVFLJdDbcLJ2P7yzDEkFBEyNojJkYZae7edCJNMPSJnv5zQRLuZJ6rKwxaCZ537iRYfx8Z5iJqyqw2Z1v2",
  "key12": "3HtXBKCnHv8q85iMFPtnULAnmr8hRXfNyhicmvefySCsaaR331muAdbdfXAdzpPLnkSDemnu6JgYeT61cfVBYa1a",
  "key13": "4QvTqFftGGRbRUZA5vQpMQPZaUpDiCtKG7PMBtGcrHZZDEfpy2oFpQSmu8PBfTwR4gWhi9jTMA2o64u2FM9bhGw4",
  "key14": "4KfZTVf7CfHnjLTZVyLtTyYaYWVtWsy78EuPAhdhZ54w2bJpAYarT1fXiym8mvHND8jrf8J6TeNFedcbMjDVWumu",
  "key15": "2TLhJ2HvNGc3tFfbpiRXZjPS214PRsi3sxTxaGoxfGUPBMqtD62V2p3xHhHRd3mVExUgywF8PQJSHhEeHMoSpBVb",
  "key16": "3veG6XHM5SLCt7nwTkRQkiBZLs2ybVJFygX269rSAKkSrD13EtcX2UQNLjPJAKU9R9TxA2hW2zp72t7JnL3gQxPP",
  "key17": "wWKMkf4mnXZEgtuSw8hcCeQDXs8AUwbhG5y3pN7myqUwSSDc1q3JBSJkGuvrfCtPDeaVtqQwfCw7GTBUvNRqTri",
  "key18": "221Fq4GnvFV5Y2XxsrGyxaERP5VL2kMtsd2REVjcYmtxJMjyjL1VzpaaA12aUmSXtKMHMnaidFZ5ZFEzhfsQAmkG",
  "key19": "4JTtuxuMj5DFQ26zYeBW4AnTFWBAFERxUZgUpdhYPqbaNnjn2M6zrzTBnzyithyX8oMzESjshCFGATGyEaqw1qec",
  "key20": "3VD8yF8aRmYxK1v7XbimLUer4c2EBkjmJDdkJGJdfLYQk6ytTsKrur7ng2ydfGumz64KY7AJKGDgDft3qQ8ccjX4",
  "key21": "3S138bDRm5qzvritzv5PA6rMVXb1qZ6Ku5W9WE7xtxSW9H44AUKcDQVCXzPcaad7Q8DV4sXtquPnz6qbbjFU9gHT",
  "key22": "5MeGbi3ABLwZY1iCgyXEXMzW7oeuvotrwVSBzBM9sh7BNWEGxYLy1GN2v1y7Rep7Y9bXXqAW15gL1icxnVQPDM5W",
  "key23": "5q5XnVT5tYYRUNezvgLFAMr8VgfVHNacp84xHAdDnwxYaGubUemTwGAnj6WKUhZXXykzyBu9smvXvyWGvrmvuNSg",
  "key24": "5BzjZQBjQLGxVax3RXo1cJyx6KHsGL5eDdTGYSfXc9B4qSfmspapb8RfNpdj83PESZ5oC85fwsUhDx22rqUhU74U",
  "key25": "65etcJZLUDdf5S14RD8UCxFqYKw1tBVsjcgc94MPKjZs1uHvZRDk7aDEoFn4TyumqdUoHpdd1J6Dt6BzwmzRihU1",
  "key26": "4txG6DtXmK24x9kZNwGE2fkpT46VGUcANihWe2bWTd6wabgaPeMHXZRRx5DeaDKryztnCSjYdFgupFeAriBPogFZ",
  "key27": "3wZKHfQFsQXcssUeYT8vaprpfX1T4oMGo98HaDYQm87QWNdwQBtAkpVqKkxYrLXHynCmBUTMckfaL5eAo6sEjVfe",
  "key28": "3FScoQeUwTewUcs18zhZrji3bkBqkYPsTzAEy7wWwjKwjndFFbdy2zDX2YjbTavjJ7tVZW69xyHuZWwPZRwE77MU",
  "key29": "3TBSQktLjXhGYqEjWp3Q6oBfoLYbom4dQpgLVHWpipUxv2Brryjhf2Yiu7WXyaQqUrJRQWSVdwBRvEpM3bQ9bJGX",
  "key30": "7vaNUWCFzJk4jiRmEkmFr9QQ4dZkcA9BbZ4LFjj87dDGPTS3A4sM6WgqVWMm561geniq7YEwhgsyM81MZcXKvKi",
  "key31": "43C6FkQdmLPKRAdTUCdcpyw23jgQ7httpNLAoJtjM1G3uBy3rgJ1wmWEsCXVJ8uDA1c4nVGhyUzGyXV5M5BL9n9b",
  "key32": "3MoWYjYfMnXWbTFhZHFgyV5wjiGrWwPgXVZkptVo5PAtESi1ESG8NeYBWt8qPA24x4Ku5CCb76KjqFKiw7Et2kWs",
  "key33": "45KL2qCTnbjDEkf9ANMcSq9sr5i4AdQMZfAF1BvEJqPHXEjoRh3PWkSzSVU81WuDiQN7ZgZJZXimJV9UzhCN1xD7",
  "key34": "3BoLgxkRUwF1YQSR9PQzzcrqcHpdJmmUsrHBzoaWKsobex7neJsVWDRkYpuJqhZeDQNRpW2bVjxDNZqtVdpL772b",
  "key35": "5sZgvm35qQgDq8FyTRCHeHcSbzf6CuNbTfwXADhhhyg6fxhMuf3Pk2SZedqweFXxzCAF6kG84LDHxS621cnFBbLr",
  "key36": "5aqoBYiQ7noArE8xNbSE35DxDqxtYazHYBraDuDhawCu2jbLomjvBeEPWCLwdFzmwnAyW8znB91YnaHdFgcpx9Ld",
  "key37": "Zfih8iakPTCQXPx38WjtHfdkG1ebCgxeMSwBp6N6JrNrWeyAZGGVsGue6yoWnqGQmrUUZi1EkzzjqWWKMnxedXu",
  "key38": "2ZhQrQtDpF6nUmqyWpYDWaYFAktvxo5BY1TkdCpScB4mF7ccqTjKxDsYgEN7AmwxsMRr6CkDMNyzJxCdhnvDitpn",
  "key39": "5JfGcNAWYipKYEE6ntHsSr7K8oVi1jWqizGzVLBuCwRxVFgkcBaxcthA3UdTQByqVWynMTDaaTaUNeGsmtZziR84"
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
