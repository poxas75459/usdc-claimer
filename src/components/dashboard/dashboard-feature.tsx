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
    "cEaWs9ZYawvi18dq66n33QSLMdzBzr2ihC3Nj5MXQTKe4YTAqWivx3jRXh9RdrPUG1kbHDwKgFFPvQBpZMn9WF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AxNH4wbn5rqUqKHko6pNfBB7RQGAGGpDPUg27KJJPcHK1N9oJ1A6qoQ4f8HNv4HBNGJTZji5Meyw2YVpkYqBw2t",
  "key1": "34BueTTv5w1oFi9khjojiDea8gLGbuJXZeAbKKcKPj24dCAFzJcUYRTV3X81rCDR2WuoY6Mk5gFYckSer4UkY5GN",
  "key2": "4Wx659svah39FBZVFoLYRaTHsNkAkvuFGw8xCyhhEGfihNyxcvP8x17Eyu3mLj8g3NDFmJj7tV2YbZDdr2EtPkse",
  "key3": "51e9RuyUWPmrTBLP2GC1YVnCixTBytr36QbJfqvEvuhqJLkvetKCvMoUCQKYc3EmKP6FSUfwCqR3XbdWJNiBKu2P",
  "key4": "4G6Yv4snXtXcmhCh5cQXnPMhk6yy1MUS9JBsqWY7RS9PKJiCxyHuY9oWXZr4Ku2vCMSkQsbfoFFWTqdPRQAHiTS5",
  "key5": "4tNc41noxDDVoByUhVFGm3ri9S8NkAFgKaeNb4KLhfrWk6JN5sy6Pt5RfaxvZHDGoRC47vQqK3u2WYgnAiEv2ThE",
  "key6": "4iFg8brq5oVQNAMTVSpy7SRQWqfz9RgFBFkdsWdW7VZKfE3VTE51HaxrDLMnMyUu4g7wfk4Q58erAAUDuKSE3Sjt",
  "key7": "3cAWcBV2VyjyGQ1HBJPBAN1vipDmq9C2CH5hLsXJ8tSxbBdQnNSXuAjgYTeU4ktoVBnt9FSfeHpswLNiC5QrRSup",
  "key8": "3LzkE935XxheS7YpraKogLJTbq2MXrLApP6WFFYJj2ZpoTensCxhJMRmL7SnfqgHq3YJiVM4XW24hwZ7GxTKWLGb",
  "key9": "3FKwKVrU8X88udAzDmQQVmm9EuQSDuKQ733TtcCFC57nTCugU7Ui9espZZx6xbaQCVejFfkerk6xsgdqw6qRzudN",
  "key10": "52PTQMViSGiWQ7TkYV37XVcsB5CwdT5zXz7HraG3bfbCCWDrranftScnqfBoxp3LwCVZpjpaHKPiiATGoUyj2Pgh",
  "key11": "3k2da5AHfVXoXgVAuaom1V9hncjW9NaSLgWycvD9y1t3tLKnpwvXCN9eGDQ7sn1aKZ1ZZZGvF5Mt7eefcEhSNrBx",
  "key12": "2Dgc16ncv4Pb3EBbAWKshdwLKVEbEUCjXiTHq3cYDq5gPfaKms3yQxbwQQre2SgjtyeVtudPtc4jaYT2sVci78Gy",
  "key13": "C2h5vnGP8cg56oSJeMN6a6tryvK1ZUbZNpsX6ebgoWfDm3RMC4XsVCW7HbA82rC7Z8xURdxpteKGs4prUnSEANP",
  "key14": "5mvHpjRiKVzuhuKZcfeYvq576hcHTtFGnmGTjUnjJMQoasJvWVUqgdWQTRKnAQbSUJLQMSKaLXPi8tVqw8gSiV3v",
  "key15": "5poHC5KPJLYyTs7NxZp6RjZemQFMV7deoz3AsPiSvVKce2FwuL1L7qk3fBWKapK9CGfSG7JLtBuDLa3aMAkNeVwq",
  "key16": "4wyDxekfHmQHNdmKcBuf2VtLHN7LGkBGrjZuNHB7cHVqJHytLD9sACBzkxiZ86zxSQ12C2fg3UzuVeBewJhhDwcj",
  "key17": "YF533V7otMPX8BaW1eDBEmYRmkuoFehfGQt6LRtSi7RTyAJWiqsNjquD1kmxU26g9chTiHM75x8nGwaFK1RTuwp",
  "key18": "aUsBajezhuUMfLPKfACQbcwoyycahzraedav4ypioLuxaYTASam4coUtMJFPw7W27vkgywDhittSQyqZTF1veka",
  "key19": "3srWfd7g5VQD5mzqnjsmvAUMY7hfk1dTDnuFDx2pSznxZFFChxpJX2Ytwfi7HPRpubg8j3ES78QSQKqesvt4oJ4U",
  "key20": "3t7mSNXoK1Sv7gDdQiLs3wVjX6hhJQR8WdjLi5GDqKGJLaWZ6V24YYtSjmR9yJ49phjd6LkYL17mvmmTs8MAFCSJ",
  "key21": "5HjRRFVT8Gjz1qzThhNuxsej7LxGTYgeeqwQmqvLxPnXfw1TuSFkwoFiwomQhrfW1j1Y4KZhVkvN7US1jByfUxHb",
  "key22": "3cTC5GJQJSBuAxo8KPWyvHXTA1EVqiiNGbLeriWEufwMGXqYah37jDgswLmY1UuZp4bDzA6ps6Y4JWDJPBmHRZES",
  "key23": "X1fmaAfzBYKdmVM7dt2U5U7Uc4d3LDLePBo6wNYR56VzF6ZuYLzEXhoZmBs9KzSPNSxxd3GjnsM1Gz2Smy24hm8",
  "key24": "4jACfAi1qawKiv223pmBoNt7Hv3xHXr2dpn7SxE4LsD2GtPzizQjFQZj8KuNLDZoagHVJj4PeGZmnFUF67GMoBZT"
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
