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
    "4eyiPBomDUDsMyRP2j7t7WfApQu3n7Y3YPowY9ybiDNSNESk3HtnjF3UWucQ6jcqzCzAny7qLhWRk5fa5UJE6czr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JvL12zRP7xa6DzZ3t24g4wFr5dbn74BKgbhrSGe3dUjkk3eH5RsYhUL8FQkDtYaXeB7hUky4X93AWN7wijYhaMH",
  "key1": "vbGU9hAwtWpSEYafDmxE5Jni9RHK2mg4EAeAh8aetPyU6PvhqW8DJs2TLKx4UczoRMQxLAMynoqD4LqXrfX7S41",
  "key2": "35n9aCCKy6Y33LLHMLDNttq2jtgoSJ5VEicRUhu2gX2a4oL5amesjFTFyYZkCDbNbvavXqW323nFsVbyH85dEDDU",
  "key3": "MtFyHLNPYHQf9DuANiuWM9g6hcFKLSQc2HaSGCpBHnp5JNmvfduAsEcPPnMQX598thGFghhcMmMWfsnryV7wznF",
  "key4": "63yQthxE8oGaQ18tGFm2usd4CJ4yxJLhcPaAt6bSs3Y55WHZwPygxvK4YK3Xm9M5qdn22xGL3ajbRTaby7F2ScxJ",
  "key5": "54d8cCUmnQ2cQ25W3tqBik1fMaV7vGzq5noGTw3S8eQGGbFRM9vAPwGMNXY2oacFJ4qK4ZCtUkqXuXifFVBPz62s",
  "key6": "F7hzUvg13d69wocoy5sBHkQL9gZTAMXcMqFDksJdZ9WntwX7XMTomt1rQLwM2Ptf4JKr5zbGcHS4NgnkyvtrZE5",
  "key7": "4wnkAUAXCpiMVZNGx2WjSsXj8q3LvxQrUVs3nAsVtHN4KQqX6xMxNadPo1FSgfQJY33qNZ8jk7CHBkpPP1vCggCH",
  "key8": "3kwiLPFPvuJ5bNxtQeg6jvvWgbSKhkfpgEdvn5FrPQx4dzRNyDueMjnEAKEkxfvHJvJGC6xwpUz2PfYpqnafketH",
  "key9": "2TsZA2HfEC5kZWk8yf5w6Q86gT6XaCNnZ69rJWcuw9zoFqSnS6o1vHqgaWfzTpR97zHbcMFcZTtS96ZS3CMeoWw9",
  "key10": "DQZzR2hWbqPxJcCpVyGSjpNU5Av6coK1hEqLZMdbxTjCzg3s8BZ3imhEP42eTydt6fpM5zCURbGpFpd6dodims7",
  "key11": "2zyG5XLCjyxFezfrgRKGKwixcqKcq78HHgHa6HExKKaNVRhoZgAvqYmWCetYYGeUqviSHsGUk5c24GDtyKYsiuf4",
  "key12": "qEXNjdQvELg6eLQpQcDcMkrytRue2vm7p8VbR5bXVHBMdUUPW1oHX2hyj6zjdmZUVxws8776zUAY9JuKbJhmUmC",
  "key13": "24QMSiEZmV1ysnY46MqV2eusgGhc9eZ19PbYashDgjcuoZ9n4xTwGJK47khLyaNZEnwAuD8k1w6DTXfXhVWXWT7s",
  "key14": "3v86s9khBLAEnwMwQv3STAtZHZrjq18xou3eYdggayRkBTBosc1j5BpbmuBTktsD3qVxZSowxFiXwn4BaFXsgN3U",
  "key15": "28GPvwsRbN6mJaYTWFcW9TbaZ3Kf9hN3nDN4MbxaprPqsaE3iNyn1xog6R5GZEA5aaSUZZcNARVhFEk8trHubHPq",
  "key16": "22q6QAPKySf5eeGmDk2yn5JQT1JUonbSDM6p6jHNm5Yv3soJjQBb7bQyFyxL2Rw1U6Q1arepKUzqCVs19aj3Qy5e",
  "key17": "3aKwe4ifjHyaNUahLiDjuoyWDxT1q77WiCgxSWnkqR1Hgmf2yGKUippr1NZNddZN3zSbkZcwcPmy1dQevTbTGdjB",
  "key18": "HQSzXdPAPFJnVEPtVyoTCbBHQbwApb3RuH8VdhzwJNK69jmyg8BY1poduvcfcFWQLWJ8fx56pcrqkE2PSDfhabt",
  "key19": "2r313hV9c1feppXnqkXiWyEaMzgZrjDqNZ7XS8pBaME7ZYjggRf2YHUpMQehJfawwbT5cHVXoVLFvnN3v8wiFDfN",
  "key20": "3qYy7s9KbuLzADqMrj9C8JfD6wZBWzg6YmABKiRQ9uoGkaK2QAiYjSQPkuA83G6TrfxnBHpuA4cbtS1MQ7rqFxxR",
  "key21": "2Z4GAANEWrmqRZjh7gdm5WNFy2jnM6djTZUGcMbeUbNoVtUUCB1SRsCxGG37TRTTcpcTqHfajXeiKVFxrpGUME5u",
  "key22": "4hSZtmQnxGM1Ey4LSBZVEebNQTzJHA77qtxbRE6t1tDTWtFC4XSftMRNnnWQT8yM3zTGXVmfPtXCzRjsxtaWAAnt",
  "key23": "2uS8BPpzamGJATR4iVzLhRSAjVWV8egVXhZesefu4jdsPMrMvvP1fg46a9ttKhsGE1Er81v8t2ND1LbLaohKqdJX",
  "key24": "4Wmfdezq1gBk6ewvr4JessVufBQt54QaSPiWZnL6dVD8gcPcJ3aazz2bo9YgmTvKUujL7T8jP5iBth6Wz5pGhDM9",
  "key25": "5HTPfZiWWuXPNgZDZAKcDx6N3ZWfoLmHeu9v3jEwGQwBFHbsgGNBs3JjPtQzQE2uagx4wusMNgBBYMtDHF7gkEWW",
  "key26": "5s7vnywvbzdQKxbgmDVDnyB45e1YbwcNXQGetempRBjR2woKcAJws8tGjaDeTtiy5kKnCBWXDKjXKEcSBoTqwmGt",
  "key27": "3kqGrmS2DJji5V5Fohba89WYBZzs6afMbRA4uwrZp9VawYRQF1SjndNBb7vJne6QeCvNbtX92kcY6mDsiRdq5V3m",
  "key28": "3x39ognPPkUf7hHgz14DdVAfmesXfXCmdTKVDjwGBSsD3AL2yZUBhphjsRo5djCofz8LFA9qhVrPZWK7A4YhkVRR",
  "key29": "4Ca9vLARPfSs8mntekuBYxx83Mwzs6XNgbqgdAuKJi13XUYEecxFkVNZDo8nV2pC5nn2Fs6wQP1q2aUMma7oLQLr",
  "key30": "3aD6EYJwkfknYbfq5xJq3abTMsae225ZGLVkcHhTSSnf9ZA1nctqz1HF7BipxrNV4mH1hMcJRAEbLUmPT8GCFue4",
  "key31": "2dc9R5VLEQd1hqjJqLDyqzGvSvPLfi2mS5uJbKd6DvTZ4SyQDS8NDGhBB7zaV4kEAx3vNkXGnmLkVq4H7z95vUiH",
  "key32": "3VSb5exqBRWXdV8r3vVinSUJB4V4MFKShL2dELp3BSMCUt2q9JQf5ywKkKxEU3TTac9gwoYfxr7enVXU4Ua3SML8",
  "key33": "2FQJNAvHzAQeUvEbLrY8BrzY7sgQ9eaHV8eq8XChSwgu88ZZ3rNddTHdzKFmuTn9Ppiazp2df98SzpNcphi3YpZG",
  "key34": "2pqFwqsTc2rQFtThFLWgr3vr7mi1XjJWC1BMStetdhCdK2g3PsbRVQMM6vzYWpjVy2U8ah1u3TyfAZgXW7sEHoEG",
  "key35": "5HHKY3EHnyPV5uZ79gwRwA7XfZXArhnvkmqF4eMEikGbmZuTotGV1sMoxBf9YKnNnN2GLJKMS3ERG7eVHQrG6TAL",
  "key36": "4pxTfLjqqnUP4YK5z2NGAPruGrBSuaM5KdRzBLrtvtoDKJJu1oKZ4s2Jqk5DjYQge1zioKj3CwgiT4ueoefXYueH",
  "key37": "4y3gUJjXvhGRhp9y91ftbAeg7XfR9gfdkcgaUVQVxxzWeg3LXDsSwGsuNsqyYw99dfF3m8BHCa3VUc1gHjwDgj3r"
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
