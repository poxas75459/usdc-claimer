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
    "5ZBir1ucqMYY6g5c57Nq97LmjGeLq3zWdMWKHNLr84L5ah2RAZnVT1cyiuh9Ge1KvXAiyzbKUjTMrUy2uGZ48zSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GgKozWJB5JoZewfuNKdJGjK7tVMUXHJoGoj2aYWrMHknaFbmehDLdnqdZt5gyXZTRQYS5dfHaaTFcN39rVWjzTJ",
  "key1": "54gaBmiNKyAGXjkAyThrADVKWBbyXzZkPBt7VKLYB98BKvD1Y1WvRpLBbUhWH4zYRZff48JyWhVfqoHPWLtdK3vW",
  "key2": "2QwqA48LBXx3y1Xv5rDn29DassXTbt6K3oQNeZxjdKK9zhgxG8udxzVvVMMz7sw34YGfHJE7yVs5urVJN6MeT8PV",
  "key3": "Wzn5VpZKRhGipoGb1yaitC6TuqAW43ydxpwimuBvE4MQfSDh9yvzLBRcdpT17jTDw2AKd3GY6DKMdp1Tte8GSMT",
  "key4": "3NFFbLoj6ZH4GPzsqJ7P7bnkNKoLihVtNppobik7xzSYL4HHVdqpswct3enCZLmBXh4QNWs6y52WdJA4iwFwzniE",
  "key5": "2Q4oUKzxzCQMzUody1NuXGWXmXPoUi2wuXzGCQDTJPwrEjAe7aHFzBNmAJthsaSM74XpacEzSZ2BAdK2j9jnpZr4",
  "key6": "XSDXeuqYwCwipin6Nhw7fY7a6FmoEcZwsDhzTGgvMxgK9h97Yy5wcXEaf4HfWLXr679bQDFyUstvqeXBKy8Pxyi",
  "key7": "f9WStX5EJPant1ikPEgMkipWXkWb2o915drp3ybqECkNbD8VTgqfn5QLn78vfn97dCLGot4MUsnaNrV4hJra1Ui",
  "key8": "36H4X8nYcAVA3Z65yGEywyx4sZRxj8pKHDXHrdNQ98Qf8PCUtCyc4BLkPpsuVwNfHqaXSbYJ9m6LXzrTVQEZu25i",
  "key9": "4KJXtm5wKv6Tnzuiqn8hZcwGauxVBuYMy2thyauNGyr9YdSAyRwC5x9U8njPYd7V5ib1JobyKeGLkLzgwAyevxiS",
  "key10": "5kyiama349t2j3L9CNuGNYNqDT8jLCjs3eMNbmLQbb6XGZ8DR3WzBkRARjJcbbkBtntDYsH6zAi57HQ7muCy9RTs",
  "key11": "3dahB5WQUUBfsTq36wX2AwursRkLVGb8E9wibgYRfDg92Ze2RWL4ccoFhtJV54w1ZfMDzyQishdeznxv3hSrAkev",
  "key12": "5841s2dv5z6c6yEtAfnwK4TDLB3wYkydf4YTy4WRfEUxgyHghrdv7D5NPmMd33YDQzp8vDeQo28fXaGmaSk9nLaA",
  "key13": "5oUm6GFiHRzuGBiASwNVAquzjAaJRVchXFdjzcLK2ZWZg1fn8fivcwB55XWmVveM317pwRVGayrwisWoFGnytdSu",
  "key14": "3m62R286zmL2FZAnKRtRCHf41fV4dFaruTCQUt5j2pKTf614dpnwGBFiSqPdj785QKzk8DDTvSuzRw6zvXxSXYx3",
  "key15": "3TktPF4a3uHQHkA5p19qsWVxBEzvjcphpE26xNsgp25nKJVznM8nDQ9GzLtWCgTq1Po2S1aqJdJv1AvDfS6n8oCv",
  "key16": "3Ab28N8YW18AUrRsiDTyhrDcR5pd6DbjYn3ah9xtMksSGWQJTMTb1qPgiT4RMg8K2HuBf49YhFnBU2fXqwDF3gHw",
  "key17": "5anJLLJvY4cfmZriR9Ua818tpC97M9KQGKGrWbiNnEeBvynCgtsaF2zpNqpReCLXveWmwz4Yr6Ti5GnvpZYQpgfX",
  "key18": "5FSSBowxhB4ucNytGcCBfH4Ws54dA2nK5CpKHH3j23wd4VEcYqJwNftwKV3imFUab9MZNwDvL4FuTMG8cjRt8osP",
  "key19": "5Zd4JsEUMCJm2xpu8b1BiTDLj5qsAaBJg1L6ZAEe5c2MgNq6FBy55phz2HB1KV9sQ66keGAMnQAFoJhwCSRhCGk5",
  "key20": "2bU2jo3h3HXoe1T4WczARF9sjLFnRsrWUJVRP4FmrUKKqLsmZRRrqZvfTHjTS3BV9KHfsKjyTchBMMfR6vBUhZ7s",
  "key21": "4z66weeXZAqRQqtQpzviwzJmzTgaaREp4m596w3R3fkPMhV9DbLjBJyvAkCUWE5APRHHrvTzBwuiKSKAdr2maXXN",
  "key22": "3DNnProz2yzGkuTVp3kfWruo1cEn2iPunGDS4wKXeiH3trf5hi5P4wcHDj7Wkkm69KvMmqkg37bSzZDepnZ279bh",
  "key23": "5AyALDYF1U8F62L2HxmQUEcskL1Tn1JRVu5aYcfaYqQm8zQVWTnvXrTdh9PuHazA899S9Y8C8JmDdLmNBvCpYECt",
  "key24": "4Hv1JVD4jbfbafgNQ9u2JBqUZMrBk7YSTH5UGAFUDPUuPJaV5jTiMVwAPMQGZF3bHH1AJtX5S83KRzgcSrAZTaLp",
  "key25": "4iD2g8jDEjtXE3Pf2CkPmfS7ouNbFsHiYfRF9qmCnixG1hDEywyLAkA3Zt6XZUUh16K1wzXzoMYJW1UdrudkWEPJ",
  "key26": "3F6d6yQMeR6soTrUoaVzYjzBAco8WujXmu3gcLSWyZohs1MKmECXN5Umphzkqr1dPgZTsdWEVtD95DNBb4gZysnn",
  "key27": "3a9VtD2YpzdrnJj78MpN1ACSsZW7YGqcF732Rr5m71Se9bMue5maZYkesbzLLrGp6ceqNFWCkecj9LckesdHbZUM",
  "key28": "3Ff1FrN9XxPLLdkvfrutkuN3MwvMbgEoqU55tKg7o64sQ7cDQHCCkqtr838cGMJzc4nvqFV3ewTJcnnaD91npKDp",
  "key29": "5vU8LBtJbUFTqe2bFhJgqg1CTkndrwXUBVNNnpsaQFrx7DWiaqXFrRgYoDzHrDPywQAin2jSftBtEnr82u39xDNj",
  "key30": "2GeNtdNDqev9pAjdM3i1qb8XYGypFPVtc9FmjCBp2pj2DVSQyrR1DrQHGhkQR2BVFnATV21UymyHT2niaUJTQnPP",
  "key31": "5SpPYJN3t6Ta9YsfQHNXvchvg4ggEC4VrC9Wp2g9iBByWuZbK6PAWgWe6CYRYmSa25u3G41YTDpQbYyZT8Kapufx",
  "key32": "2fNExJQWPBPwRjs98hE3WexZDtXkqUG9qLpEBFbqf2Q64KsWhcGZfgz87fvw4b24M8X8QHqDHSZymPsNyPu9uMbV",
  "key33": "onqjuyqj3ZP4qLfCd99ZD7H8fSFWfMhbTTqHdXNxCV5468QWMgZdfvCeEjRqtMyHMnLPFYSdnVnSvjxRrLqhn31",
  "key34": "5pJxgdyFSDdumt4M5N58QLCNuoiAaMtgszHc97xr5e4RRnwNhbUb6xWMFus7raTMiGB8a2vXjoH5eMQs7mrx4NfU",
  "key35": "4tY37CGPcuoMYCkesHX3gyRvnkFj1HcLDDZ4sHQCaFz49bCW1GrgobSugYT7nQt55wWAUWFHw9eoaHwH1pKJ1zuj",
  "key36": "3P7eRSMtgqMdM1bSkEz319JqRzEBUzUPBbf6oaRQgx6Q7FM2iEoqxRpWYyT3DXC2rVhBpekrzECjvmWerXNgoZco",
  "key37": "25vKPc5wqjYkZgJNTg2dEivAmxeQb6HrJZATfr3uf15eTpK5aVHGHdXFRtcs2pAVRUWCp5GzJijiUf5cjB48TRfP",
  "key38": "4HDxGiLxvWt4VdqiEaAmf1fksgGTg6RKDNaQW3HJN4EjsTzKxbVGMwRJyVv9e7cjLPqqKBZNhrTmk3tvXVEQ6Vjd",
  "key39": "4tHhggdUugMhSGg2f59m48qznsReRpbTUdQHtmts7UddHE7VSj5qAonvShcdqW61hoa8hkH4KcJgRde67s2CJFND",
  "key40": "44wKHFTJG5V88HUJx4HxKZWsbzgiuXB5GrUKK79a7E2CQL9KnaFSAaxq8RksEYJZCspKan2tu4nd1N3fQFtSMZQR",
  "key41": "4YW6yXuVMzcTY1GyyRPbFMGb4oqEHtFxtcPWCRo8KD1s3LT2vhcGdkWzMC2x4xyFMum6RsocrbFX8YgnCL9o2eE1",
  "key42": "5cXbTX6nyL4TKTjiUjxQVZUDbNW9EL1FpTLtgnhkLaVX19uFujDgWgVbinggXFNVq6sHprrzwD39nu2fHiQgzPQ4",
  "key43": "jNeTjBa3DKknHqDwM9eLbefjiTkUr7y4ncRFbHZTDZnZuVwzhtEMYEpqZqjQ66vQ6aa4ZYQTuXKvK1GSowXzdJe"
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
