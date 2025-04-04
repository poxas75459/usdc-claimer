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
    "3HTq4TinqiUxNtJS9p85Nknuy9BaKGGLPxcfPq2wZoVfJiMPX6bBofca8D8Rhn9APLuYBXERXauP2zaLjgLWSZ1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jvmuqHRvpLMYCjDfc1PsrbLmxL79wDSRjpTxeczgePPnQy8e7X7N7BAut1G6ESxeLm6xuShJFa3bgiRK8vJZNMf",
  "key1": "5Loy5tkG9yM6jh1wtzpy9AqcaRxKcNwAGj1GjUEY5VMsaENP6gY2D6CLz1KFo6c41vJ9arjkZYE112t9rmbY7zxa",
  "key2": "2VDJApS6WJYVC9wZ8WtaEBBjHYxVgtGmiMLLeUeBPvNxWR1KDugepU6hPJvyMNQzenFGpeG3m2C1ALCGAeMzv2i6",
  "key3": "3cnVmLNbczmpeZ1jcCHRmXi7Tvh6anBUxg4JMHCSu68gu1v3Eynq75NS5UzPaTxxE5rhJoWd7fUzJpQfRtCUArWi",
  "key4": "2z4dn3WZDQ1tKd8SUg345BBJCkjgMNNS8uuEFrS16Jj1GNRc9YFkH8EyTvatdE7UwAK2G88eKLxNq3sgzRHLyAUD",
  "key5": "3ic8tVjphTiv4kXhN2XYPUG8RzZxxVmpYN1LQrZDPgiczuZGhAbK2xedRqvk8KAkPrpUTpWhUpDon4Y88DY87oJz",
  "key6": "2iSgALEi7cPFGq9dpyKvikwjgiYeimgiLHFTnQ3xKYV53Qyyd828H7rmapHarUF1cpNWJkF7a86iD9MCvjbRZWFU",
  "key7": "4xi82S9hnN9YFwaZywZDC6NMNMrSrGNUeAmUxjt7X31MAk1YiDGqEEkkZQrkLKk6sVx8MiDvQCEi7J5WJjTU5cc6",
  "key8": "3WmsmNr7Tgb6GX5EuJj76Kk6Wq3F8YwjHyq3xh2dsZiur7K1uUoy9Gi63o2bAfkH5bQ8iJkxLrkHpKtmmtcvgB2R",
  "key9": "57zGsCYxUFdwD7o2yLzHRBZYizmTjJsbr84Q29MCWHiUccrKGQByhfJMVoahk9H7kUoYc75GevdcqnP5tKYhH5B8",
  "key10": "4CyAz1vqV1rpa12TxjdFQoeNpgNzKiuRMbW862GD1gPRkqGzBNa8YTEUCeqfZ7TghTtnTpLbfipWvCMwTiRd34Jc",
  "key11": "5CLdu5iJSQyYP2NYfcZzTa8bhdws6jx57VRBZFvqnGPMpZzURVXPH1Fut1cQtXXzC3oFicYyNiRjphjvNhcQwAjC",
  "key12": "3EghzuBUchD75E2Vug6CPMF4rvi9nBRSspqHM3UvC116MwJrvkWCWYqQ553k3g2HYxu9n5g8VZ8x4xrBN5ohCzf8",
  "key13": "3AmFc5tHrnA5S889n5rjFjjzvyY76rmhaoe6QKjp1HYBwm6ny1NrMcdtUZCrmBgq45LL2TKd4VqVC8iamJzq77Wo",
  "key14": "5ZdZvVyrB4mgX6qZKUwLJS4Vx5jzhpWLwH85iB1RWxWxreXM4Ly5U71MSTktLvQyj6AydBY6zUmNvL9e6YtCToLX",
  "key15": "3147oXtgCLwhLGrjyZwTK7Jh5mn4duhR5HvvcsAAD148bc9bEvZ9PWxjfnswAwxxjpNk85HjX93WDJWLM4TMN8gv",
  "key16": "59L8d9Ff2sMtM6uesfGfyy7hbgYhP9ToudAWpUdy1cNpsjVGB2HJB8cny514jTwKtZvDfoaJW7ioJYwmPChQhZFC",
  "key17": "2LuvVBSp5J1Zqw63Z7rGXD27FmqQa4eZuzbY4WWMAMfdwgYFMNDjoDoxHbFrnq4MT1mZiBS8na2TJYYXkiWojA5t",
  "key18": "k6VXVAc5qGJrS5eWnUr8aU7q1XYf8BaNmScLUpCZK8ZnPoQ5i79Y8KVCMMV7QR1mev3veYeHij8wrDbVKiiNZFH",
  "key19": "3x5uHVNLKPAVp4W2kcBe2DAyYujwhe18TXSjkKsr3JMACz2cV8Rxo6GgmAXg4vRAwdR4KaNTipZuZ94G8NjZSQpm",
  "key20": "jgLAWp7yKUArb2qQMXzTaWNeSZYCkCkEyFcbPZjqpTJytA21CEFeTtTbDey2RGqfbAPs9oKQFM3SQXVKhtyrFGS",
  "key21": "4ULiVW8Ey6XShDn2NXeYKabPovvMsJzWGKPk2QECLRhnKz2vDRnxdvuZWLMuVCiomh7H4GDiFNFgT1j2VCd1aFrz",
  "key22": "2U17zCfPSTD7GHtBCt7AoPivYaxAx6Whg7FJiqgTdcPz4uq4j83TyuNUsDxwFG2N8Dm7hXDAb5AE8waFsYyoeKKf",
  "key23": "3rAe8e9iT3wbxs5AmU1XvCXfkHs4iumck8HKsbxbvPMgEM1Akc1Bkp2BmcwAavWEZJQoxKFqTzJJKJ3hezLVE86X",
  "key24": "3ihC8JVejymFYGKvc6nMXGyRSxpuDz7BYazhHRSbCNPdWsbZoUGFRyqkvcDx5dn6dbJpS1yWa4Lyxo2SpFzULUJS",
  "key25": "2ygeMh2RqXNbFXjv3swEQZADcNjcseUvZHHBpi3eJWUL2yDU937g7rW17EBQvdXHSPB7CKvpDZKGu3DQHyKwcwXe",
  "key26": "3pLummK9auQp5RZNdYDPjRZ2p5GcP3VTC7k19oZNjA97Mj9GD1exHP5yg1hD8Tmeyq1iBieButbyZTHMAAREwNbv",
  "key27": "QZaN2EuH2igx8PeYVWjvuHM4xmPMszCPquSJmftd9XkBDTGxWjvL66eKbF1juXFNXewg2kUMKhVY3DUgPnDqQrn",
  "key28": "5ydcmvTFKmvHUD2qWqrcVkXeDxnTNtsZgPn2tE8VUPkMtC1yzH8rnJ8G1LQZuXPpexJVtpxtdgHHJNCj7a4RFxL2",
  "key29": "5bT4KaHZ3wMNjjc825azT3QNXiRbkWgFioKFqReY57W4QYoaQf5TBrjE9wzXu4rWt8WTjqscEXri4h1Upj3aSyTS",
  "key30": "4z4QtL47TyRD4gUXF1cg8h55myJaH6EXsAwYAPyk12vqzMoNz5PPLw2xMzJDR6rtCHoqsYzNEKuaHd8NcABFNVgu",
  "key31": "4NCAYoXDtrQCqsnTxLcbpSAnrdg5m2LvQHkzuMVVr54YzXVRGyZMpGHK7zzfDJN5BaeKzJRW8BACugDEfeccjmET",
  "key32": "23BbUJs98sK8ip8tgk817BxGUYecFU1KqxyUBuHmj7mLP7eTG7aM9aezCQTKcDExwCdgTpuFH9vkUAY3qa7sZHvP",
  "key33": "5T4n4CJuhUV4oTBRWHkxjcKg3Q75BeXYPWbREhfYfp4x1ZovD3j13Zh4fkBCfsAHbDmEFSvsHrNnui2qGdsSePFY",
  "key34": "31ZXrpyzXPEbgxAT3DMPdCt3suULjzwEqUqLf7FFPikYem7SeKRrJRv5AzufxKwv5etBCXFrgejEiUA2F4b9aFr8",
  "key35": "3gdQ5cvvmvGSUqA7LeSWnpvBVFqKBPV6cXKTz7Ht7LTyJ38jbATQ8YnKXfiFMozupDZVxk6ZeW11z7UKiH8yA95h",
  "key36": "3j6At84rvk6XfMcstBQ1VA36eZtTASScc2Uy1iGhg7h8ZfoxnRMYS25bFkyJ31HuYCJAsRbuzBQEruhMmAHd8aZX",
  "key37": "45TtTzP86HGN6AG1EsUAF2ZMziAGpP5As6o6DmiyaXxZja8UjQQsfDMyerENxsQS21gnga53h4EqFKpNhowPGMZL",
  "key38": "YAkeqCW1mruJ2Y1H7DejEYDUKPegNz2eaH63uH3aLvpRL5X5v5hAZqXfwR9jQyrtbBpDmBvMfP7Aa4D8vgUFHJm",
  "key39": "4TFatRs8p6Sp2CXt8kybwxiV2a6idUhvU3tixU7kreYGXWLUjaBmQ3p1JM3SWFnrBu54o6UJSKBH8Qe9KnuQYgbr",
  "key40": "5qPiVrEDmu7VjR6SLUagmreLfijc8mCzUG2fQcQ5JnUjXcgF9dwBgN1u9thNfwfEXW1hJvGasvLbUfaKD19gEVKB",
  "key41": "3aifeyYYBrdyvJopi7KoQQDGKeV5t9rkSK3iB5paQE28dG64mZfutK5QHH6fx32BagDLLGKSgTUfvuPL44Wrq29Q",
  "key42": "2ygCMeZxcZ7CLJdWp4Vcv9EPyuw7BDrcunXnzYgmSAvNCKjXYaEkAL34RHXYBubLxfm8uPPiDnxMZZuJC4JqnDXZ",
  "key43": "1kWLCxMNhiBctRCqrGk1EUicoaTMr33sBLgtcvDGWowwKoRyGqSREewbsJvYs9Uc3SirofRyjyuDPF2LGygn1az",
  "key44": "5Eg9cNMErKVFcMaEPLkLDVwf28SnJJ9xFixBEyCmmFzk7geomTo1LtDvovw8y25GsbiSzuLDhwiXwCjEf7AoKeo9"
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
