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
    "qeomeSePzAG5r5qxt1aeL8xHB5c3WYe9ZzwunqtpTwXSFPUVthCq3qVAtfXcTsnMjHVeMSo8M6yNUb2n23iLyuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jby7WXcf3ndm3LQcrBGG9RxczTgEsKQML4rro4yFxhbbpMnoTj198XyEuQEhVnXLFVzkWhMg93jLCjtUKNDoEFy",
  "key1": "3pyh5VyNTUYAZef8SMfHCrMwk5YJmEJsB47vmrhGbwYS8zXpKuWvTi9Db6rvTTYDuZJHovifRMdjHJa5V4vLBBEg",
  "key2": "2RGQQKJYZAf1sizF3tkt4pg1qvWrEYrssRcTP2rnN6Umx3NSCtqLoKLAHJpj1Uni2Q13TKqjtTeGwYPB4EVRiP4i",
  "key3": "2jKp8jfZiTBKoVTRniXs79KQjAFaFu4aV37sagp73VzcePN9GJjQt7TeHJmTFVu959B1dX7Lj7UBtogSyHDttNug",
  "key4": "38ySS3DnD9oNGcuGmCh4czSREMkmnmrsPtSR9eZTwzwZe6kXG8yaD5TFZLeoLCcdGgda8ykodi66Dww9uJwPnmvL",
  "key5": "2XUMrBK3dp6czjB8AnespyCVEf7ZKXpTRbcNj5ZkPFT9pyw2pBb9peo62kQh7texvc5EbAUnbMG34mkRhxbAg9Cd",
  "key6": "5rEFbhcyPg9GBjpZqUbwBKexNUsuVwmCFmUofC9KX3tG1WJiQmaVSku1UXqA19pUQzPsESAmk4BPLXXvt92bMreW",
  "key7": "3qw4MJcXEVTt652fvdvtm3pCDnfTUyksN4NNarFPtKgx7VTbUZ4vT3tpRFmEhBnFaKr2RoouXK7EtEMqcBmhAkDW",
  "key8": "4zT6xLQYHQx8Pz3bbheZDAxVcjAMhG9UPriGMnrjnoLXGW15XsS3XhgGavPVbKK1tn7gri8g5h4a1KpQp4WaJizd",
  "key9": "32971qK63sWMtUY4C134Q69nub3KGsafvviZKBFBB7R5fhr7XaSuFiPgTa5pgz8myWpCNYtDyirvPVowxVc1PuyC",
  "key10": "59Adr3zbVjMH2qTvaSCat9CZh34YbQdQHGUDqKfRJyLveLoBzUFCN2M2TAVxDLPuQiBxaQLasiqPrXwNk1z8p7VZ",
  "key11": "2KDkDonPHBNvRe35a13c5pCQ4ggzPhJHCQ7NTJmhn9xUDpYRGAqSW8S7AwxfnzhM6U7z8VbZaHKs3KMcu4waAYvG",
  "key12": "U9ZbCJqV1qbaeY1MrH6WhWCRaQUcaxnt8jKKu9M8bpEYA8EdXTepvojLDrwQpUy8aeMYrQehikCQuUhAUC7Uh3T",
  "key13": "36X1D8Z4kZBr3TtYCvEhFPvnHHkGL1GXoAFLA6a4XBj9W3ESVR3daF5c6v1SsTfP43km1UypPeaPW4ZdF1a1VvZR",
  "key14": "Y2dkssREegNC4AdyJobRYdYFiNPz62ZEjhPeaySfHLYcKgGgYZbBCjjwTjyMMJotbtj2o7UcuzmUUYC9tVHMmqM",
  "key15": "66RY59p4fRg3mrHQQqVvKnMzj2EtF7wfU57tVWiZvyFnBuFrieR6aB7prX8M6twCFYpcNdcrQzijYgjaZ966q3Ni",
  "key16": "4JwyF8VNH3uKoQVWEruhgTWsLtNhnNjtnZzdzvUUPWrCfZBTkKs2JTfTwo1ajpUmUnsYUdgd1dfv8jVYgofqMJ3E",
  "key17": "5bX8BkXJs1iKpebmXmw3jJRVdA3Z8r344UDKKHMNyDa1EGjiEKFRw5kriU1z125TWNX5M1Qb8T92MzT4ezyEJP5V",
  "key18": "5wgArB6utK99whTX74wKUnYDFznVwixjAUTKbFjAR7RrTAgnuCeC2ojxpF7sR7m5SbEL9eVZu7M7T1QFFRfPXQYp",
  "key19": "3uRTSfhKkzV6zEM7Tx4QM9X1xcdtTTkseD5ADzbEf8PmWDa1RT1NjUmGc3Pe5JefSnq7QNytuhowTwWmpD2DqdDr",
  "key20": "5eskDJFrNWRY2aAoMFvixnYxiWjek3H6Lfjr5WoQ4CVuadzvQpsepgWrRDQSDZh71EQz3NBrrF3RM9PGLAufthRS",
  "key21": "4rFNtiLCvsQHU92825u9ZZz9YHe8sVyZngTwwF2X1DpynvdYZXL71XQuCKsMy7mCQ5pH9WutYbZ83ojvymETvRcW",
  "key22": "598FDCbMYhvHb8cFT1eVF1n3C85BA8VVgXPeZFWYBrxjU5ZfpjAxfYqLZepLEB5DWERYCWnG9eYvfMsPZuuzWCXU",
  "key23": "Ru9iZLRJzwiJ3m8qStQ9WSmsHMfY8RVD4bhRk2XeSZhDtYSkA4b71qM6aqPyxMS9ibjpeQCvTuMWw2LCCphYZEc",
  "key24": "5xC2W3RMAEhLT5H845oDofHQoPxuYDgUyKg1HvLipaUpKmxNqLHz6AgHQNzQH3bKLik6H9hwbBZdKSC2uf53Cn9d",
  "key25": "2G3kahXRPJsNfDNQFtZ9MZGocTbkMj2gjMGoTxWPvnFcgPSkBbXs12mzpix9wNrNBr3XgqQUtbWWFdfuyao4M8C2",
  "key26": "GbM4cd2XuGSP1W1E5TykW9aT7sjdgREinioMxSidnaXjMnAamwj1iVgbVftUV55rCXcQsmdLQ73q1xpMz9daj2s",
  "key27": "2tQkqctdraLiAq3HbsJjsNsavMSEs21QnuuYeVVvhYacGSvgGo61wx2e78teV2Xj8NeyocDaoHo8dbuXScLfeA24",
  "key28": "4sbGTRKGmpL2g9zTJSygqbGhpEZrCNUaPq9RzLjgbeSJMZPqw5Cppsjr35Z1LWezyHtgfygEKENioWkJX6XMR7TK",
  "key29": "mtftRfMhz9fWCaHBcFwUNRDF9T8N81LY4okUsBjpByvrggt9K7HzMKAnY2ysPoWmCpd6uFZ95MhZGNKNs6G9C47",
  "key30": "3vyimXRKTKXYdFT7TtXpUcescNv5KvB3ULqugLmwCcE15LLVm66RXZ55TtKrA8yUMXtvhC8JzoKKRXp7UqUrEskW",
  "key31": "3M328KVPLqjcHo4eCfhDn4vSQ7ts15HmRmt1PAf6Ypg83JS5gnivnrCFLtDPQV1RvPUsVpxQj4CHGb9ZFqSbcFwV",
  "key32": "4SDbMRw3nQhz93KHUtUdGhfr2BkftkHXBez1MMLd8mVwdgHxWvRFx4kRB73WrUdtUU7vwZLyRQnDZcBS1j1636oc"
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
