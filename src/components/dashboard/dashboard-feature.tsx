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
    "2SfDPCsQPL8T8VGNHvrocwpqQwEDvTK9kPibrXeuc1HVhV8W8n1PnFS5v1vEb4fPbD8Tght9D2evLdLPqNT9LYQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WFqvi8AwFAYA43WCA2M75xKZQNgnWQg2riFEAsTiueCw5sLEdT61ikSCTJzxtEynt6Aeqh9Yuyyp2ABg7JAbaB2",
  "key1": "4ydBfUtx5szv1Gb9JCEJUM4fZK1A2Te6Lo4qUkL6ZcrHUqNFRBfUvKjVAqTRrrv5Zj8zf1RGqc3fQE2DpNT7RoMs",
  "key2": "23yq3eCvxuLEjYxoGsRpFrP9sW8ZSi2SgnH65KVnXdHWnk5Nbu7zhrTpzVXXEg424zWXjDDyTMsnB1MZ24qdWVby",
  "key3": "UA46rTmna38vks6B6Ao4ytA4W7KoSq3KiMhsYbgHKu8dP9ioNU741Kb7KhvYLMHRi9bSjM3G8YMgdGXz3Hb7EB8",
  "key4": "fj9NG7tGA32P9QWgRFKG6z2iSDRWnaBm3D1DFxQq6W9LENjk7bCA1FHH7XHaG2Y9JAij5Mfu4fLVaciMQuBxX2r",
  "key5": "2qpoTswqLdj75rySFMCVasJEbP84WneY8ughccShf1cxNhVCHoMFxAXpDXnZYL5nmnKoCcM8MaPMpy7nyny6tMhy",
  "key6": "3fpbmY81HxEf98SCoqx35wFoPW2euhnSZozB9DD4qwa2xCHxWvHNZgjV3UgyY8pgLBjXXfzW1qwqTv7Fc3beusSe",
  "key7": "3XbVgQrJkCX3j1u8n2ssc2oAtMi1hzBtftbQLPpgqhiAhD2VVBb3z9b1jDkdeuoEQcuiHGnqdwJZHYjfy8fa2e3G",
  "key8": "65vJTfYdCxL6fAQ8nKTuESeevcbqTb6byhEuNLX2pDxKhWnvjaigBagA495ymsZN8JSNy6G72hgszXPBgM3PPkKH",
  "key9": "4s9d6PjBDjYDfEc1ZQXZoSwkXp9cN1noCNaEdCJMCpn16ikMTBLNJZ4njpLLimx8Yt7FNQzVfTmjpVFDspYdh6Jy",
  "key10": "aWYEBJn5RgKBmwnfnFb9p8P8aj9kZHADVd7DJWdppBc4UPWpCk2nkXmrC4zzx4thxQ5p4FqKNHHUJUG4u8LHfDd",
  "key11": "TrHh56SJWH2ZzhANuuEBaneScQnw44XkcRziGWgYHXo9YCfkR7aPX28j5Q34z8wk4E8yaxu21xZNeNrxfxpRD8V",
  "key12": "2Lkb8bCRNQUwm6reASrbZw2sSG3DFLJUNQJ2dq1XqJ4NuX8AevRCsYNZFW9AcskCm2WJ1mJRuesF2Lwr5sapC2Md",
  "key13": "yaEkXfpMy2Qnkvu7djugLB12xdaPezXpK8nuCUbB7mbskP6AGe4U4Wcq5mVaAomPR8WWMB1ARA9S56X8qHvu1RV",
  "key14": "4GjwzLCSmRCA6rMjCRYVE4GRMVdCReUWoYAPSohUigMNDkACez2Aeo599fpv227GY2dtcLgNDM357yuqP6BBtPG9",
  "key15": "upXe7H2xPDvFZy9wVAawZ1JBaZUW7RnnaBeVnLrVLZSxVeqtCGpN81Qvcxak4yPjvvhVLNndbvzwmrEsi29eGkG",
  "key16": "3dAPnJ3hwC4cVraKqwhHp2coAT7qqKJyQQf799yDa1wGK2iZ6qfNbaZPGCAaUF3yNGYqzF2FygBAG6BygEWjDMPv",
  "key17": "45YQ5VJS9NXE93veAoLwpRuBcy7WJF48tF156FTEBvZxSgXqHbKmUH8TzXXvAXST4cJFvD4FnGMo1xuSCoLZWjB5",
  "key18": "46ScH93dvc15JrTj92WpxrYsSBdJvBS3136jgdLz2G5HvR7V6XPfC7KUH1vhFdkxVvztCw9id1GPgFcS6sHz7uQ5",
  "key19": "DXp9iJd9TCFDCgCDXhTFJTex1vymHqqKeCga9Y4yXijFpNx61fToNQegR5J6Jen3oRP4vfpH1ipqg1vs7n4HwXG",
  "key20": "35miwGfEgMn1qi2Tiy1mqA9DJ2drQQn57HENDV47XRLxP6bcoV2VeHQEGj1bgiqCLwq7EiSqKf9CyGaqqdTbEUEt",
  "key21": "28mrGtQgwMMC2t1n8VdSG4gBkTZZjGWckrKN9bh4V4whvHnfEBBqy4xwVetgweFw4rCGoRZiZLVDkoMoJBpn2thy",
  "key22": "4y8gpxC3dHGW4EWx8deZk2t1LGBGj9X5jdq8NaRcyjAMe1yAqYtefuebEMAahAveTRRJsDEd9fdx2TPnct53XvEi",
  "key23": "4VPAxF4oKnvv1BU89iSA6zuXbKhGXFdQibTCB4QExhmbrSPNqiZ6vdxNTusLBANwq1TwUYakSJdAPhBpzZy5JNxp",
  "key24": "54a4t4DUr2jVJ4oLqtGC4ckBZXc384fZgFEfz6YNpwiYXTMDXJaXPVXgDJfhwbhVeF1gw2ctfCqmLCPZNDxYavBG",
  "key25": "ggjg6588ddn95Kvh1xyw6ZVpWhVASark4bBFAWPH6vkKnfqrWEhGff65icSXxdrbWH7j3WCm3nz1MN8fUnK9BcK",
  "key26": "2QnNWzydCYyHb7GoEFutoMpuM21ccCxi5khjCABvRcUpmfuTJexqPEdtRcEnGnapicEwykrVo8Qpe1V8vkPZXA4L",
  "key27": "5JBv7yxjQTSvtMAw88WLYytgKVeYhNKr9h4WuvtvXw9e3MrkreT9cWwmV5XyuycyhwRSXm5oVeuw6G462LxhkTdc"
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
