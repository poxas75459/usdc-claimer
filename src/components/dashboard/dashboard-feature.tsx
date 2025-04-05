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
    "2ai4xTN2SCEFz1XFNwG9nu3te4PRdCEoPgbACUJAKe7MiGofRNkK7CFBNusoaPxocxnNX7SUBrrdHdbMsaMC2NKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5coLz7Lo4u8FJeaWqKiQZu6K2sjDWyLwtWnocTbAkXhMqBd7BACvqTZMPKGWHHtDoMSezKaGCeEVjGqDEmT5zF7o",
  "key1": "2jzyVjxc9hMkVkPD3WwvrXwoNS7g7UedcvdbY2mRDvqNwWFByg1hnNPtLyNnGPSawzaYzKLLj2VKmRjRN4kycQBD",
  "key2": "2VGgHn621G6eosoq9Ww9P84aDuyo5bbzhGTyNpBx5p3cTYsiVbc5T98FFsAiPKsvw8pr8Pfsko5uap4DLsLf44hi",
  "key3": "U3hXCRktMP5gBHfz4DW6RJhowDg2vtZrchHZRicsQFh1JSZyo8odHD4wZGZPQiErGGNvv3CyR7TfuPZvNwWZRDe",
  "key4": "2zUX1GAmjov4tHehouA1mooaKoCc8qbQKjTjexHTKLtUK8JF99Yt2SuQ5Lz2SyvDxNP8AgXNSLyptBqx53bHYeoF",
  "key5": "5Nbmgkt3qu19phPfiLKoe8yHPcDS7dzppBHjiiBrmRj9zxMtcCZqwt8AqSdqPBoWc3zaWzzS8qhFYaUFuhRVMWHu",
  "key6": "4qt7K3RqXkizHC7cSfpZyPnvNGHw5niU7erb8z86vFj7eFvVbghJg1Byw7AeBBxZHbsp92jDX5M8dEtrfwoexmYM",
  "key7": "4yfffMzW42PpqUDz8RUZGonqMzCZVH7qrg1xgZVtbaez8e2JSNJn6nbkwTCESASYDM6T4CqS6ow8Jedv2sbPGaYd",
  "key8": "3shdkmqmcuh4QteuRps1cPvE6pEbtSMCvbFkTWQet4Hantt8Q7XUM7bZJVTiKwGM4C8XCeW4ncuxyVpBJn1GkNZv",
  "key9": "2cMNMEgyfkSW8irfn3eaJZKFVW8Q9yW5NbCmyV5AeLXExVvCY7Va3Z8F9rSraCcNC2XyjVrAFvG8r8ydgYVDyYbz",
  "key10": "2gzdr82Wsw8muPShqvupJEoUwrg8wi2BhMN4pa3xUkav8ojg2fb6Mx6RL8BywqawPhvoPijipSuLcR5FXYojFaHS",
  "key11": "4ngmcicjyyhPVaokV9V1YLiwAwJAMyfXP1hsyjWuVg9tjHCv94UZ5dGxjxwqLg4wmbZjDzhXfTXsX5S8n4ri6CQg",
  "key12": "4yqFWbDzwRVHw5jW4Q6azSfkzne3HBBARhaDe8u7yK6kEti1MMduKugSWNtn37wP3kfznYpzBREtqDbMT7KLcNn2",
  "key13": "4bZ9XRN562Diy8AqC7dTvFEaBhHCdKY9pjhTGYbmQjxju8URcaf9gc9nDwaGj8KLQkDgbPyRxu24Bz7nN24BYfnC",
  "key14": "UYcdLKJS5ntLCpzVgW5NmFo141H7ZjCp73jfV2vjdJLKzWLuEtaAuJ5VVyjtZYk6tegkKwYBLr2tGaqFuE9zczY",
  "key15": "4MgYvtQdUMeFhRkfMpPE8V9nw8pgsUVY1BTVMTuidXCPSHYdXopx2nMdHLYYXN6TNd9KEpngVtddAZoTi6utP43Z",
  "key16": "3TXGzGs4DRCBuvmLfJz1ch1HApNdkazivxFwbksn1zXDLsADSfYtTxJvxe4zyD8KmofFYgePbXH9ABhkyeAmEFBA",
  "key17": "3tvfT8KPh3nQubCpugM2rgAn7U5Je3LKxARyyRfo59gYWnXmSa1xfjrqheVMrH2bC7F7BKpV69Nbb8MJ6eAGrvfg",
  "key18": "2mcPpE4Sd9QECLpLAY4MrGAZZcvFh4mc8L4tixXQi4cSsb9nbszitEkK3K1Kn15HTkAXdY3pFSAAz4mHUD1RhDP9",
  "key19": "xEnqq39K7vTCRDzN5ZLo2vFuJ3oC9Yz6Nms2GtFShqvvnQkmmC5ShKqtoVWcLPnTxQK4oeZgPDfQXSu9HQKY3gt",
  "key20": "2gHkUJ5mLYVQi8KVJNx3njnMo8LzAXzcoyWwoAiRiB5YwukVqZ7mZVP9V1EVsppZLqq2Da9chiVAkvTweXdraSQi",
  "key21": "5NgYBk4eBKzxUteHo1QHD6DM5sXyc8k7efqDiVuZQtP617XzwyFhqFz8zBTUyWRJtV5CuLNSKB3M8DdagXCRwPpg",
  "key22": "26KbZpqM8rBkB3J8eADRdjDw9KYMtqxBgiwaU2o87PdSPh6tqkqUtpbKxeQpSvgJqSmhV4hB7pPB1k8qy4gEWthx",
  "key23": "2gqze63u5G3NUREcUFPorsgUVAX3AEQAfKQNurEgsK3gyV8szC5w7VrEvUfDE6x89TehBHkkkJkFxoQKqBiQLxtV",
  "key24": "4gLVrVEXfTqvXigt3XdD8M1Sn6CvTUnAVvv33GEQZcMyUmU9P7MCTPvrEkQgcHtqzc6rRbDqmeutVteq8pGXYoeK",
  "key25": "3NCB4whdo3JAnjzFAKdt6R8WnUwLqQbdn1pDBvBR1PqNA33sB7q2NDjWP2BPzkXXiQGfcEEPtktaVbQ2HmQL72N3",
  "key26": "4aJzCPRvvJuBLxPFbyTF2Tvhv1wU7E11Bf8huEpBuzztYhSSAyNoHEBGoBELXEardNDZRmz8L1HKUCwE3ZuaFoX3",
  "key27": "3iUhoYdVQxjiBh9iFD2498NDKje7rMqseMuZ2KnMhyDChqnZcDVuHTj1dZ2NW43SVfiJruHu1Ehu1FhgPY237pZV",
  "key28": "5uP3QqoeUJKHYLKTU8o7kGJgEhKXUNfdtJH6nHWnmN7jZjgPcQf3QJHZs61ofiCeDHiJJVRVau8Gm4zduXhMzM2H",
  "key29": "f6qcpirkcmL9nwM2k1FsUQy1rwcJh9UoYGTsCXfrXgfupWureHqYAVGhNepBTsyx6wfnbZsvTAsiEjD1ZPLgAAc",
  "key30": "5E1e3j3GTc18Gz1vkzJ12L3ryr23KwqKtgbrF3wNwbwzXrd2f42MqYQ66KskG8xbwpP47pigVn3CWPo77t99SCiP",
  "key31": "25NmB7bkFvP7HWoyrxf7ftABVRnp3Z88xicTdqTJ5cgmQan4aHsPpCtMv7pnzzaLocjQ5fCGZpUpupgZ1C3xFAQm",
  "key32": "nvhP4dvVEPi2yEMUvVsp82nh9AaS7e9QoRyrE32WBwufhLXPfd4SbodLUSntTdQWaK6MdX94S7UncDPS3HU4kPf",
  "key33": "gU9UH1qFGNKAcZyWrSTc5gb1Cwy3ztmmpDmajtzRvV5Gmr4rqjbqtmryzobcR5cXuRX54w4QhkvBSqgsK4JpWo4",
  "key34": "4Fr3T8t3X6BgeLrzFGXd2VbpTqCZ6WuzeXGhGYaMSweXbnoAfg6gkjMyrZPeXrZspvBL9hTfe29AxcqpTG2TSbtH",
  "key35": "sRxgEHGwVPu4yjyYCCPf54hZXXVR6EEp1ptoaVRBnwBZBMkZ6mjdrEqzfMfrnK9CCZhwnjjQd5uiTyS6tXpWRAk",
  "key36": "5DhG1LeFHzF9YnsmqBTEwE26ybWZTSubAbQRhCb8sEPjb9jhk5N8j4jk87uukfgm9mKVa4YPiQoxyhM3XoimT2tk",
  "key37": "3tf3dfjLAVYK6ubuMHHtBQpmVTvt621pthVZUow3kRpJ1s8igeXLdbfCoDaLEqjjjx6SF9e2Mg81XDrzaRWVzsmX",
  "key38": "5YQPw74rVai2Q9fet9xk35diSUMXMPDPPkAFa8JnMmmW2m8z9yVwngaeeg4b9HU5pYDtyVxRVP3BktQM5yhxddoh",
  "key39": "GyYaof8mdR6w7JvJKnUvNK2cbDEFcVZGKUbV7KYpkdmDxUKqCkxCTx29z4gtae6DsiSyKNJobeC5CZ46Kb7qeVW",
  "key40": "2GUMTnVUZgaoNAXyFMezWZDb6Lqajz45d1fTKReUhSoL9P5C5dGWVWA6V3yYYT2PCFVre484Ma4faNdyS7ar9AaZ",
  "key41": "5qD6n5XFjoMDUa9XS11igkrFoNjSvxjrG7d46VWz4d3up7PQWE1nLmY2N2ySaMm3mk7ke3hAFyV766nNimeBZk4x"
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
