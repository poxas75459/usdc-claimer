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
    "5ECrwdhsjdKhVBpa4NzVYstCDaNnswAdCiE9pNP7AkpyF39BWzo39mKsL6HNf6LuRbGnKVMxdXdx5S5nihVMf6zu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vTUy1QZrjwn7bUCttSuJ1prhAP23Voyd1Nao1YPJ7GthirVSQthYEicZwXz8SEnfwT5HvG3zRRhnDSwWpxDCwgj",
  "key1": "4YwSEwmmMa7YmtVh7jkVDPHjYXsTEAHHJwidZnbiUcHUSsyMEJ4GHinNXWmzV4UAD5GfkfqUwyaqz8pfoMoUJGX6",
  "key2": "3thmDae2qjz6jd6oRgoX4W7Wa3rzpWNrKsJD5J72ftP2oc8m41oCWLn9ch3b139QTZb2NXZkjswnfsv5sApHBHBj",
  "key3": "5hE5oWS3VnRnZmZpri6pQohsBTpzpddgEj7q43ugkZiWPgjMU3FbSS2g52qqoo5z3QME6n3fsibBTLtrWk6D3Arx",
  "key4": "276i4Hc24j2qpPnZJf2ccPjsohjHhNQA5qfcvsGopSEuE3MvivsHF5AZzPZq3NFwcg1AE2VHfcWVv9wqACDVeFJ9",
  "key5": "8ggvYRrXY9cq7Ejdd77kQSEACBFMqXHQ3iXxr1GjrqQo4xQQ86zFiz8Kdh2uQDwSV9gerAcdYQCZEqWJF7664d7",
  "key6": "3TPnQr2RwtXxZhekWMZWxUKyM62MHeds1uCmV6daS6hkybWdw9zvf7y8NXAjdGaXWSPkiRfk1JCG7JG7RCv95opb",
  "key7": "t9ZT9EoR3zMurPNPxfJgBWjq5iPtu6keNNDLMRt6jz7A4GPoAhmbsbEFEoMmoaQK5zFdWBK5hgMstcAYakEBv8p",
  "key8": "4ixYaoQxiCihxpsgw5LDWdK5oNwrk3yJnzhJafm1nES1NjV8xUPcXN3r7gxs3ZxzHHicGwM7rw1AEZQiUHEiCQH",
  "key9": "Ch8FsV2buv8JWfZh2pdjMgjCMXVZhCnUXhtiotYbj1SnVMdPUSYUC4mALPZj6vEmXUG1JkcgorBEMiRePt1pNtB",
  "key10": "4wu7F5sPSjk7u9RfZFTfZfsV2pvF9vxuY6ohqYCJrVmWD53Afu9Tnei4YWApC8iZvPj72MdgJK9fG86LB2bCyqwP",
  "key11": "54B3zbfKpN46oSWdbpeHnQL718Bs7NFCvFCfcFFp4NM4RTVqj6pAzrRJ17A8rnFWc57KeHh2LwyW4LhWKPJgyL6F",
  "key12": "2EwuVq88YcBCh1ubqaJtRv56eZXGxZzDfj93deiV6ckw3uY4W3dUu3XAdYkkVvhbSVB9XtkJnknprYFRnaKm526B",
  "key13": "4YxoATrB9pToVJtNwr9cqnavGuXBraNRNGVJyyjY3nAjkd6vJix2YM9vos6dJqwM2btnHf3uPnmgwcDKSVPKcMwr",
  "key14": "3EZYw7AgHQC62k8JB2v3rSDk1ThgZ77TxmHBNYeJPK4YXeWzzns8NPce38HBwoyTynmyU4JFU4DDTXR6Jj7dpYWp",
  "key15": "ZDBTpaW3XKnNUUu1AVrHA1Bb773Kp1gdveQZ6GCScJo8ZHfLW5hXuaq8f128fA9CiTMVGVvmWEJs1qxdjPMoPJE",
  "key16": "3rysa7hdNBnu3tw2hajHVRGhsjJh67sHPXPJJv9brj93eFkmXjw3quJSDA2QJS6Va5VfJzwPrC3cNv5ZTmNys3zi",
  "key17": "3oLjD3rmaP3V6xHddkrgC13pHvEzh1mRDku7vbBWPMWMZYoCeoGhXKy7kezAq5q9BsoqYhAaGCEtV3t6Pg1J4qU6",
  "key18": "61cXjCSPZtp7DvkSqvrhYPQtxjcnj2YHKCbUSgmZ6U2CUY8Mm1M5MPTrcA2HtX7hxonLgDmqAgWZwXxxjnyZygiw",
  "key19": "58Bduiir8pfYu7VbKdBdV4HGPP38651h5xvUEYiqLXy6XyjQcxw7BW4HxPJc1ETik9nxZVNi8kdfG1sgZ46VSnCj",
  "key20": "3jK3ubBnZ5A2mzpZHjFwdqfMYTmvijECYmS5JuM2HhfNm4nAAcTRJdHpojmFEZtNMyCapBQ9RjSaSAvzcwCiAKfv",
  "key21": "F37aRLAAm5wWoAQVRsXexGLsX84CA8V5aZWh2WpBu4w8DJkKR8tgy14QkKuzdNpoug7ZwtQtbJX7HqqJDf3ywbJ",
  "key22": "2m771zx8kJXwJMh9K9mpTEUkpEdwWMHP79CZ4b1H3WmEeTmhPh5nUitTaq5jQRSHqkB8LDp6BPKCsX1mPXjdXjxn",
  "key23": "5qDzCizZi15FKVwTfGXrtAtS5gQVHCHZrrtAZDydzRn8i9agYjyEyFHvrmdCgrecaM9oDYvfUBEw4duV9Ad9Mn2f",
  "key24": "uWwAkPomYq2oybLHHosMaSDzGW6UYBq1adJaMZQ5PcVRJRvdcYpDkxB6jgfzk9zUyT4wCJGwdz2bBzFRLExjueZ",
  "key25": "4DM3PUaTDsLRXNWxidSkn2jf6ruKwgFPTDeDhhBjedLgneF9gnHHw6hdfZJuxtvdpnvZXUWAmt2NZ5d7tZJGGMN7",
  "key26": "3UU33d9PWrYKGHiTkDLCzMty6yaNs69ny6AivwLEUxV7AZCa9UnfKmSG6GfjrS89HzRjKmFW2erHfCdkQPauxnfq",
  "key27": "4Bo9Z5RGYZ6vDPzhhRfX93xf333FAfAR3RkATpMCPQGsJ9jNAvXwYsdhXWWFzZmZ1DNcpkX161qYgArt49S47Tzg",
  "key28": "5NaAezdTQxXD15zzzAuAVbc7oeSN3VqrbmGFfR2UbomVLY9BGdNpCz1GMwstLqx5BjaehmgKZ8bq29B9mdEUEfaL",
  "key29": "54aqmpgJZQJ68ihQ1gUrBf52dmgRZvHiGXYnFyVYfBW1g6132jy4FWbjHPo9oSWwkaYknygvqWM11fYxuYPaU4fi",
  "key30": "avMymTqQxFGdhDxPVrydiT4Xj5CqK8YhSQTF8RQA4cFGpkMAtdwjFPoN4Wv7YHzVzyWSeQx2Rzbazna1t51ooiw",
  "key31": "322hSEHgmXXgaCeXscPzVEeTv4bpKaq8FXnxghFtwzAL5s6aiadv2njgfB9AXCmWLyVbz98YsxixouPEK2Ci1Axz",
  "key32": "3zpSWBnNLQGBqnNG2nfcpch83pdgd2k5BVjCFSdu12zXtyhuxMhHbu3f5Z5uhn4wmsJZUr3aESoKMBmykaQafoe3",
  "key33": "yCzc5xMic9amCkPkGCQg1PQC9k7tpJcZ4fu6bXBmPkq7KxFFPNfF5UZoeCLPVcNRCjKbf9VgtmSi4ADnzzrhpJc",
  "key34": "3ZTFaivx2JJb2auJwrioCedpKaZ15zFHmppyEoWbaozWPc6svzHbRfvhL8FQQHqvi3UBfVUxbzgQ4JaLCKmQLwnf",
  "key35": "2cnFZeKx8mWqhK2i4YTYh9CUkUT6XzG2o8wYCR72GbQAqFq4NA8TmBzJXSurCj2GU4CUQz1VgHsAFhPTRhjxuYzt",
  "key36": "2V4h4RgFXHhJLCSybRvb9cdM48vZs9tjxRp8ebcPDci6RL84D2tu1YQEfPEu1M9KU3P3EaKJ8hjMmwo3gUE1jKv9",
  "key37": "d3X884ecmgcQiJKsZynCFovvqTQKZVxWynWnHNaqZcZpPV5ckphVAEbsdBLtPAunpJwFF1PrTQMFwpGnEX1jAwF",
  "key38": "2f2WLZiRxF6yaQX2bf4K39SdeCy258xniM9fGxrTzPTRHxafajQHxrnco7oUKuvUiz4967qpGm4Da1z7HQmz26gC",
  "key39": "273hhvqGjXCeHkiiLzxFXbY1yBaC8NkvoCKZFZgotjXWwSKPGDPVduv6nRgKZcKxBNKdHXVgUDAG127Cym1gZMwJ",
  "key40": "2umqH13FLPyak9gYG5XzTdmB2HQ5Ap9yzeXw2CrdphLmucQQ6BefCeJPEa47zkYw96aKPwp3EbtLvbaARcrnfC1H",
  "key41": "5nv4ApMMZdhgHBkL7RYWvZkKDUoruWifzAqf5ZQNJg3fghBhSewnMM2DXSed9AMSCbuuoQ964VHhu98bDZVu6dkg",
  "key42": "221KYAP5LQRHKEBHrzc9CJqnvPK5wz9LZ99sYEdwRjbWx8sGLdF2QNF8aGXJCxZewA8L6tLttM54rM7M1EGmTjNY"
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
