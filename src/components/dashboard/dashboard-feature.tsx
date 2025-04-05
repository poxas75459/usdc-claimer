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
    "2mJWxroReU2VbhXdr8NW2zohepDP8qssDScYWM1bk3mtiHvJyUTJp1RBA2fbC2EykAsbtNFFayZ7vbTCPwb6UJsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qz8Tk1sZYKMYqJmv9FBkCfWNzNvZKsYgwdAgFFMdq9f3yASbzwj4fVCQVmDZZiSMjTDMwynNDbhG1YCBSihsFzJ",
  "key1": "4KnrXUBaN3nhqbV37X44RE1KScLbcuup1yQck4L96E3Be6Ej7EwwmDqwUf41THbDPpAy46vApzMeDJsnaun7wdjZ",
  "key2": "5KMSWBN87r1RYZkmyp3jFo9JGvS2j9FNiYrhMisCVQe8w1GBQsDvRe1MxbWCMjgz6idtR7vL6fKFo1JX6FkdCA3u",
  "key3": "5p5fyt3a7VQwYaSYuBoEPRgjbqteCsCbPY39yvubb1xAwof3QR4gAQdozZAxDQuMKYorsw4vBjnMAKDw9AbvThHV",
  "key4": "4cknb6cxDPqyRpR9qnyWRaM7KMU45GTqyVcYuPWmmDU49MXe2b5L5zCFX2ZkkfW8mKDj1wZ7eqC6qksWCNjqskBT",
  "key5": "5D3i5Tkok5wXb7kQxhTuSvXmdLc6p3twr9mJonj9j54ZCTxfjhNGULiFtWjUknvWwQs86Zmd8ysaxfkc6zNdmYxP",
  "key6": "5tpVUaW4brjpJJYrvEKNgwVXZE2xde9hUiS7jELp6jzW5obU7UYFVP6FJmAaj5eS9Lfrwxbh9hV4r9dmuockC9nt",
  "key7": "3BShKkwXpgypPQXr2Wuu5ZkxAkqy7U2T2LYcUiJhvGNZE4QSK51DcHAhzkJcbdzHNiN5d4on5FpmCKxhC3StBbED",
  "key8": "9EVn4QMuYdxFHY14pybJYJW8UPpRJB1CkMpQm9ms2HMwy6oS4YB1kdpf8E2qexxNUTkYE9dNqXHypAX5Cammn5y",
  "key9": "6187xw1qe9yViCLAzoejGh77dnAL5LuiMSsVrDWyLQPB1v6edcrth23YuvEeQE9phHzLCLYubzbjXKjdqc8yX6y8",
  "key10": "3fs52weys9KETeFn5m3PfriovVPnDH9PYZk3SnU75YwD8ckHwRYDWAzJPfFrBp7XPAA31mJnxoenCWUgDynfvkLt",
  "key11": "4rncPcRo3JcvyRTscVSnFucx3fmYSwAq9gegjrof2Xwp7xngtJZqChUGn6ncTQX6rePMpXdHS8VuLnm3pa7JtF2G",
  "key12": "2bHRtrwdTJ9iQmmkQvNqQaQCJwMFPkWbd3rH3Yq2ZdxwE6bezCivAhXSakpeuaJoHx2Eg2uP9x9neuCa1s3ETLWN",
  "key13": "iKAUQNETmKwNg9xp7NQaPEMLWQAKG4mB9Ta5zhCZkKr2t2i8736dgmpQiSLQzG5ciuDt1TvphkVVR5XrtKYUFPc",
  "key14": "5kES3s5QicxtYxoi2LncbADUFe9yQvknKRGKmKPXt2ANjufRv9wTkfPXznDFUENeq8RncrSA6EfVDbAyBUoWw1zh",
  "key15": "28xMAYBJAdWyVRezM8Qtuy7z9dyC8jG1e2zxFwwRTgqCNJjSkMuuSwtktgLV9s8dJpX9tCC6dRBi29NKSe8bg1nT",
  "key16": "4EeD1QeAyVXiCyhsPQ97Bovdqp4781A9BiyiY3ja94nZE2qg2VmvoCQpYRxNUF9dhXi8icaJq7W4tT1qKGiT5gkD",
  "key17": "2kRBWCPcXA5iALwSzRg2Kv4Gk8y51jENhWQX8pTpWeqpo5EyDExT5NPotpsAmqhmtaeGgUYYXYDDJfW8by1NsdKN",
  "key18": "bf7dyJ6sRW7jdeugP2Rbdsj2P1DNMUgJp86116UuVk1t6ifKRUJ18MevvBzpNWHG54D7yG1AinN3DkCNiey2bkG",
  "key19": "5J1Q2wU1HyiunHnkFVFior8Kg3169k2KrALzVtGUsV9bXJmwCv538LAohizKP3dFoAdcvbocxQ28j5cV6bscxyv9",
  "key20": "4FtZiR23etHBZDmgC2AXxnEjiEsbLAT4YkLR78AgJw2dUBYtkLuwCJKGuFpkdkr1DTNfhZ1mqhNxMmwEdPQmQkkD",
  "key21": "4cj5PwicfiMzAUZJjuYRwZiu9VdJ8AXtFen2qHiWvYhHsa4kBWGyXf54hDCg61mJR2CyJvP1d9XsYPvfSmvZgLP7",
  "key22": "xEFXBxaPKHVjxn3ux89CZifhgPc6mEoKzipKRqUuM1A1HbWVX2nJ41LaoTD7CCkzMvY1RRNXL4VhDLm1Zyv9Eci",
  "key23": "5Gk81r3yH1XEZQTM8iryxvc3qe2A1uGLTic8SeVutFBHzvS3ZxHsTa4d5rLYptJmiq3tfeJPA2PpdC72TFLyye9B",
  "key24": "2kLcyvTz7khx5UVdBbxWhou6Rm3B1VqM9nADuTd2vngR9WvXDTg97DcMDD5Gxa8A7Zr69ou4U7cZe7joWqAh6LKH",
  "key25": "DSd9P9g2WDpYFkWANAsH8hnyGgCtCtcDFE1KhftsDbGNi574hyywv2t2gmaHyYjVpKVk42rQZQQqNscDS7sP7f4",
  "key26": "5yCB26dj4oHe13a8AwUHc99RVgCRJpfmvigjn3jL5xUihiMNxrRsmS1v5MmCVBFfpbUYPywFBqdF5P1PRdMXBdJH",
  "key27": "2tzyPVShrmcooCn5SQeuW499Bv7Z9VLuWamyVNXCBTzpc9K5Mh5dGzPw6Tm3pmn7G2tMV3DN9ieoWNmHcFrMUiu1",
  "key28": "4B6rx8wbtjjFpjmMpfoYEqU9oXLHwmSs6nm7vgLuY2s3EqDuXkJDvgZ89RDYWtHnJ3GmtSZSztdamepAsNQtrD7X",
  "key29": "55KS7HWe4T4j5brhcNuyturHuLht8cBe75eLLVnsnkgqN77x5fEhBhrq6PaSxZBBSNqKi6F51DfAv1b2MmiieiUU",
  "key30": "4U6hfAvdZEdunSiP7UcTnsagzinQwaKAi2BqXY4SFsYDAwNuQF3hAaZdBxdC6kymfQc9apq1PJnpua8w8g8G9Jvt",
  "key31": "3mCAmyjtbc1H82GsJpCGfB4JarAiDK1tRZSUauw4BHBCkWR7UHesqJ58QsLf46fjs7jN7FY4eAJCLp4NWPGoqyTy",
  "key32": "5oQN82etVM3CRLLgegQqEAjnT5w1Ve8fqAAsR9CQNnzFYwJgWbSC9bF1FWmWkBbRGxnFxE72vTx4VWgmPDRnT2vY",
  "key33": "23gbdszdhtUEPBkWPRDbJbohFfd53Pzp44KpHCPDYcz4h8kWAnyFgsLMJyghWNDcdfn5SL46BmPzGniuNYNj7znQ",
  "key34": "4dEQvb7FfRcLvXmFMNTui8Nt1u5URsgZKxNPeQpY6NowkFLBqS5ifbbC9ByGiuVZks4czUix2mid1GivWvkWBu7W"
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
