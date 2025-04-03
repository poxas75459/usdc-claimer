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
    "R7ujE4bQZy8prMSnVsWWdVPyJK6NN3z3WATc1ssh5aNxCneYMv1oGFDWVcLQfjoKtxrKNTEep8TSJ8DSwEt5AMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HXry9vxksRZkYZdbFyDeGYn7TniK2qpgmuWuQmaGDKoubnnhmA6UcDdnBH3WvC3BmCaLjEkufK4vYYEfJLggdd4",
  "key1": "3r1BDvRkWStGb8LJ2DnjwL6ggKaf6vKDJJsnEF8M8kvVBH22gotZDouxkKcYvmz8A2g3YLSeqBd6FxSHfF97xrAK",
  "key2": "4R3Z4VLYBN7yajsLuNgih43Y8QDiM4PsKjRVKBDsU38HY3rrVcMexEL4mdmWdAxgVvmcR1FyN3zdKMMnQniamiL8",
  "key3": "iy564pYzyLVFnf4wFbZqpxQ9XR25peJoBcRXDAMFKqtvAMo54xWue6KoDooSrYk1GRg1Tc44UZdkf3BMMiNTsNj",
  "key4": "4U6dsGtJwKNLuzGQQGXfBTNVw9NoX5EwRcbbRYpDetZkMo4VBqeNYnRNJr1aazWheoMtenHtgXeoUDrotgvS3mfj",
  "key5": "3PdtP4D8xHN5SNUKDY9vivLeZj5ApvKDudWyVV6wEYkFb6epBCtpuSDBKaVJmQMyswX5kGAVbnzC1tfiRU6tMVoC",
  "key6": "5AqMBDLew3YsoSVLzz8sR1ZnKDPAgHECHaLf8MJMXsAeNqNUAPwze7BPJEFAzxEVJv3EBa8Z15D3WioRm6QjQL7r",
  "key7": "2qa3SvN48x8i38UjhT5C892bWtggscf5RwxFSH6CjSVyhiDJFeFy8VWyU8623oVNG5yfEBL9keaLAbE5efck6adT",
  "key8": "5dTphzosdda1Zso9cCpWUdGKXYSJJVxm2tZgifHxFiXCfUGLdgv7yuaDg4izxUHLhUCzFJh4gipArmGCLHoikL1K",
  "key9": "5DKYoHpBNGiFbeLWBzbsXCGBvhqHCLTDAxhQuE1AzzyJ1nRAeCJifPNDkZFTQooBf44cXdaNGy5yCk4MZcnKu18q",
  "key10": "4icrCbHCmYGBuGwbYvzsSnhrG4JvMxoXYSre1MYLM75vaWJ5DCt8tD5riciAz6YJHaitiSpHX9GjhW8rYvzU2rjS",
  "key11": "59GzQ7EQmFd98Rjay6RQZjH9g6AAEb1Sd9oQPYYezXSk75wKtSEBHFscpaduzPcDUxTExvNi5t6nFuV8GPha8rf2",
  "key12": "34VNFa6trmfaoRevrxAUV56Mrnu3uGFUGnMdrkfSxDJE9yq9916618RhitERyyfaGqBo1mEKg5hYC2ccGRfipES2",
  "key13": "5ZToCfbK5wmt3u4u8shXwtgKortsWMmG2Y8Px8v2CS57tKdgcGFk7ZPLupAJujZ2cCPHBhLteA4r2oEwzxiJMfkU",
  "key14": "2cr1VZEzP2tKjw6EGLiyLcckrkaJWAY8bDUFDRU2ChSV6Gio1t5nxP7KKrqpX8msoPmRfsQjxfyjqJoyQDgC9m8j",
  "key15": "4MTbS8NvVDt96qy4S43HuETzXqXqGw2dEBqcxgMFYfriHZv4PQuBczaVBUxiH4fq2Xk4ZhYqWbbNtMuH9UjY5kFU",
  "key16": "2RqrNkd9fBusojiv4HV3ShFJTHcCxEfNi1pd33c2pXMLH8K4bnB9BAHJBSspT28hEeygay4Yj4fztoZtdwBJrVbg",
  "key17": "2UjdFeD3Qi93bZDbQippn1p8MdMEVqHbj8t7WJsiUadPdmTDhhzSQGvempgdsDaePwhjD8Q5sUn7zRdafnps56RY",
  "key18": "28mFKdGYeoNcsG38vemY6FCkuowp8zXJKGsoLCBrqGqahnA1id2TYvVJXbFQMMQE9nwGReibThiDTFaFavtRXiqc",
  "key19": "4xgFCXSewt7VgAHWgk4wmLQM7DTJ3SLaC3Mmfc3mo47HYVQk6vNb4RsEUwziaSqpidLcoXzkmKAqDtoXU77ekYRr",
  "key20": "2LnhGnP5HTLiehsFYWRUAJJ2Sfwy2dBoqwCnNcdFJVYV8iKR7Ruzijeb79yxvUztZZW6a9dBmDc9uCrJa63iz3Ht",
  "key21": "4U1SQBZQZYFXB3qRA26MLTS5szcRrZfdQ6FuqDgDL31zkSV6DVYejDZAZmhhETNSvTpewAEKDWXU6ZYGfT88vZ43",
  "key22": "21RXN5ty3knQPW7Ta2PhuAKznEfXS8wQ9xZYu5Rsx3zxkY9XKCyjRFMKixewL8sTbMNmum9qZDceoExxuumgPJh5",
  "key23": "dMsRjW7kxquwq7LVokWHWBmsN6zSeX4W8sYkjUutoGwgtAAZhcY8DTFPRBXRzEao6oVMuPcHPhzxj1bBCBK3bUW",
  "key24": "5vMt1AY2bNCKSsxQZbrf4gnzRM5ExY9B3jcAgCVxpoT9P6W7v5tFNxbjsq3dpUHf7qN4hqpBuhzaFvY18j9g4Mr7",
  "key25": "4rVV6gJRdYnkGJ6CPqDfUDMeELhNARrVYZSPyRjrqGpYNoumxxa4Mr1iNyFwVq1GQkk9SXSBN1udhUfEBL8ekQT2",
  "key26": "FPNyGEQtnUfnEmy3tjeciaqnMLcR7gL3ZkyaGMN71u4mDYNLuY99hfJ1tbcq7AsSMXnoCwH8gPmPMi8CRMSYJXp",
  "key27": "5WQQcaEVfncScP4xiCURxHjRunHQFq1XswU5ijmH22WTRU3Ykx5xLLR6hHF7XJCizy4Ezi7fGHvc9byZ258h2y9B",
  "key28": "218ejncv1A6ssNu2rjUzRURPH1GGxtUZJX7cmJGU5QM6LkhY7Hf3F5St9qF6u85j7dewNhynk1WbozUhWaWjXXoT",
  "key29": "4GR6TaFfzvxyJgeYfjzJTB9YAi1d1YMkn1Ck23RVyyWjVRzAQVp6JgrmwLVd9ozdByzhU1w31E1d6CaZ7FUjjqoY",
  "key30": "3jMHyhqoMtD8jjn2PpNgvfaburbXy4z1D4dMURv6dSZHjk6Y368pLqgeXxncf2ZjnkcNX39mVmFeBk37aExCqmMw"
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
