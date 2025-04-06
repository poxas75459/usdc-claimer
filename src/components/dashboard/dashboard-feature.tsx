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
    "5GvD9s541Y7coQcNLQ7PPmuvZnM6Vb96twJHvoM2sjJyinVaRDc2ZDxRM9iCdpSnTyuKCQ5iqbGHr85B32oidJ4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hZiGKyNSeTdAiFEouQAAgmfReYfxzoDd1pRayEb5vCVC6LtzSp1mP4E72V2QcCDFgTHgWu1io2StenjuG6j6oys",
  "key1": "5K3Ys7WXkuLBFbQjhNZKnmRsmWGaEAmg4jrfe4hyYhyyGWmsh37THh6cACdEhpVFy9qbCkAPrENUYs6bPctNUejR",
  "key2": "4QVFWDqZXd9C2xtbzTiCBgZNAnPz6a8m6r69fGrv3mkahWYSCtwAvxUJGEEmYthFwfj7UpA1u2kHJGuqrsuuJhf4",
  "key3": "2yFBfzKoqV77LnQZ9QyxzcNwgrSMTuaVCzSn8cZMUZUqFDbPireQLmDeuo28GCXCMi9ytBfZAicmS8ytn22bcYGf",
  "key4": "6Ve1nRs2aZvpZNxkRX8tf7cDPD12DdEWMSQnGGWHLo8CwcU1FtNbdYvQdQxysHkr32YePXmzg2igqEjUTaAdJS6",
  "key5": "4FYpzZyDDiSau8MdnU91cbnPUmK5RpcszFbUqVYt4TiydPM58bpyXLGap4tRiEa3zzwo3KAvpg1AAg3d5QSdwqNs",
  "key6": "33U1FPXMqpWoGWxe73ViUvrjzAVFLRmKrwZappF97iDJmdxWrdm3e7eaGuKCUX6DGgpvazVp8iPr5BJA2s5ZwSzk",
  "key7": "2ctNVYNgeeETwFa23oJoXE8bjZXDTFve4DATgrKyv1eBqdKMe7BE8A1Dt52A1Parha6jmVyZzHKKAb9x3F5e1vfN",
  "key8": "4z2TBhw2Xmn8ntELuxsTbN9B7x7B7pUbT4wQEKLWcU84jbToRu5K3ci5ESMVnHQHgVTegnbQKTyfvZARUYwX7Q79",
  "key9": "DRrgiLfsvFRNf5ssE1C3Auf1wt2Koo3aADk7zRnJ6PayRNnSJqXBGYjfBTiq9FtcXEQiN6sw5hqhWNcxuikgeX1",
  "key10": "4deWu1fn7i5RZf5atJJdDwc5agpT5kw8hJMA58pDqGJyn2iJsEemfzLPTqb1YJ7ABRpphTY2fU3Pj2VUY5VVhnEH",
  "key11": "3rj9aLRUUsJNTSuHKpx13JPadmt8oi61P7ds5zxx4WNHeUREzBtZv9GmGGr4wjPWrtGNgMoNiDnJq18AHBNiTWnP",
  "key12": "64iBMd99yM6kM7wRLddvBET9zNpwUqsKqXhJEvtqw1cKAaB13g7onRkXMhqRnomCcezzGmsKXT3xN8mgRSDJodTs",
  "key13": "5gvfpuZvCQTCWEgtJA2Koqsx9g2FceYrAGGYVQ9jyiXoMeyZr4iZuWmaDWjpq5TyyQ78ozTU2g5DPggb5zJ9A2F1",
  "key14": "3qc7MhNxebAAdm5ibQpGCF4cY9jpvcR7GodyRY6E2PkyUUZK5sj9ir9iCWeAcr1FrHmDggZyBoJNMheauaZzhzR",
  "key15": "2f9bQCBMmr83tyNYWWgKb5dsyWcradZi3pyDhsTJX219sLctbujxgTistwdgquwcscrDBRY8UFWyYRuEzj8cxbpN",
  "key16": "5hnatppW8GMh2rLURx9DmYoVJnRebZrbtfAJigxkN9ocZKAgDAjB8UkQmY3NinoQF1diMAx2tSSQqabY7U6S9Zzg",
  "key17": "1ymkakqLFZY5gZX17SPJGRJqKq51994yJRfkYQbUsTVUUu16dhVSJE9Yo33sborHZax5fjo6AjU7vHmtBPn69TN",
  "key18": "4jRE7greTJKC5iyNHet494p9uZaNLxJMphaqW6BB7XTsJH5jzi9ZnChntQVa9iTpiuNxaQE5BboTtrt29aFkPLnU",
  "key19": "yzECJhVNz8ogcUVcfH7cTEK8iXc5GfGGaojjsa5NgbBcp4pJSevZce8fFzw3S1wBHtttzc3wyFdKBfMKjtk8pto",
  "key20": "4FZfuziGN7ti7NMF16a75vJGkMsErF4vVbG4GfXHudrdyKbMukAUzHgdzFGgyCPu5GYeue87b5j6DA8NR46aZraN",
  "key21": "119Rhr777RxYSxLgvtUZRYLV4Kgryu4PzUDc7eVX1UF2aoFUyg4FGVSQc2mK3Tbjz32yM4QH7Np1wUnVioiVwDR",
  "key22": "3vDzVeppSxpfXmit3VCBnPM7zT1GT883rzhoRuzWL1YCwEmiLWyobBCZ8U4ggmtN6bRr9vD3ymKU6STTzyQvEsX9",
  "key23": "3HpyCoQxTHJqQVsfv7WjLuUhNA9SNBSk4JMUX4WYCMzU6nLrNGh8mXdFvzkV7Zj9pxq39jY5QojozT883F7sLDn6",
  "key24": "4HTqzSN4MwxHMTf1LtLpP1npaFeWvg2JTR2vkF74AGcmV1V3ZVbPBMDqwFN56V6Fbdg9PTZhkpLyN36EGcidBS29",
  "key25": "2uP7rPPTKPhG6BTJUdExmz8ApbQQLWM1R2NqLuepr6fMNDp6L8n1tqVWVzEaE19wwNb1z4LVgvDnJ1wNsMcreczh",
  "key26": "2qi4xDW9mX7tujjAvX1edhjzJazvhSEFT72mrZ6WrFbAv9rhvmcUCdrJJ2fAZcyfhZSFPCfUZUJKybM7gkWKFsez",
  "key27": "4HejNqSSTYibGpumawCtxE3oEYjnS9EWogx7YY7QATQGRSCLedJ2PZeZiASenWSVo8ycK6xhWrdC67xnAn9s3tBv",
  "key28": "UTMeEFKrbmupFPuXYuVFEnS1h6fb8mJZT7o88gTZXrv9GD2ZdGRGKrweExHwUJ7kPayrkAVP9o4FUmvohB5FTGc",
  "key29": "yxNHpvf96VpmWJGZu3e2NePnsR7AAAXoYu48835RCom4WgdQFnzPApVoZJxti8nTv5wgmYHCv2R2SSi8TBKvDs6",
  "key30": "4Kno2WbuozJNSRvgsZ7i9qBhRFfEDkie8e9ddhCLrWdtRGr1CrZ3EHWcy4VQrqtwdbBzrr3T5NZjygnEtSZx27Nb",
  "key31": "cWzE5tAUguw2jmVT7nC5YbH4vnUtXDsnzMYrm9BuQcTgy8WwXrL1yzrKS3wRz9Pqp84EuVEV12eUyRWNk8Ce8un"
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
