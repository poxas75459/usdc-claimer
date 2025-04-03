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
    "5iphWWKocd6fS5TETJgs9meYpai7wYszd8qjQzMfaiyLdMZ5duo8az7Hgm87SukVQcJT3k3yuN9EjtPvLLScQvsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n2B5UnedakzoXkqzXDJTNehC4GhjGXfVXHUJvitLVxQvDeu1MbMGhKTA7jxqZ4ZhNDoMaqtv51vcHtbPaGHfQQ3",
  "key1": "3AruE8hso8xCqkGQ7dE8eXWp7hCj45rAspGVj9KBFaS4r6VcQDsKUxx9y3HRmdQVEwzPyAa2CtqPEwK3bhn3o6jB",
  "key2": "CDwvHfypE62HvesXoo96KrAgZ4kLziYX7MwqGwwNunFLr1E7HFc1Kd2xYrVPnWC4GjKmk5mhiyLxb7qwmULERRR",
  "key3": "ZHZ55nTh1XNDxfx3j6AAsY3oigneb9DwCVLNSgroFjUH5vZxp8FYGLZFphBFjAoamiaUK3DjG7hhh7zX3cXUiqS",
  "key4": "5u8NPVHrdQxAPeLMDMk3PaEaiwk1JtYAyEwkVVeNdULSg4YuJkRL8v9WZ5ouQs1VjpXT6ZYXSGLb5KuJT2Ny7vFn",
  "key5": "2n16wJNHAo26ok5SNC1KBTrwrZDAymzec9vTKec6JHyw8xznUqWXmJJxg3DJ2GDzm9vvpAqq32QViXFrnEMV5UGm",
  "key6": "3AjSk2povEMz4tPsQB1c7qLdpJzz9pFGmB7tXxWovyb11DQbrSofe3knkXbZyRMPJERH8v7bLRJMW6NDyUx326e6",
  "key7": "mBrfx8Jo5cetjcTt8KfGRAXLXqzvgJ8WM4VnLiNy9AhHTkS9sqFaXKHXWiP2PFPdckBZfCpcMkFn2dpfkx1AEgX",
  "key8": "2BWtSqTkN1moYuFDMLbtbjMMPGXe9YN8htiSSHFzsaS6iFNXsSWQLKuCakobZs7iknhWK6L7eEAVxqrpfcg675jm",
  "key9": "32roknDZz4qEU45c8d2q6WmLK8aM3f5VydMr4MmE6PXqJx1m3dvqB7nDFPb632c5KEQWuMHfkd6WVG8BRYZrzoom",
  "key10": "4pgt8ETxL3aQfkDppsLEGdM1A2BckkiZT1U6o931tGBmQNpLWXPxS17XVT1DpSgt7MvGgoHscawhVEBoSUzF62pi",
  "key11": "4uozmEJtfR7HiKCt2yqyHRH2Yh7TrYVEQ6XHjXAFmxG6uo8nuh6CT51TE5mxjtNCDbHL5x9QPiTyyBHLNBTPbzhc",
  "key12": "3DTpfQV4VEeKDmLPod2DGrmq1UFtUUWKk9ZFFY3mx8qSf72URNursN3joPUxRQSWwDma3cykPzRNQmJaJTUnVx8d",
  "key13": "4AEHUJgheApiv17qTnp5diT6Nadv2n29CbKBp3MX8m6ivhmaynBKY5XoJxLirYMVxAqybzGucwKqGEs6m5pCyMKV",
  "key14": "5ZFbUKHEG2HBV2toGxd9LYnymRczESTaueQaV58upPEVPxYup1uUzjLjHgSoGiZB3dDbxwWN8X7jswtvk1sJxBJu",
  "key15": "2331k1VAgfanN6dND3JBiHdYXmLFmHTBF24H3fU66xSzvcQey6bbuVHjqP6porf2DExiBsfqtCaYfG7VkcAaZ9Sv",
  "key16": "3pdEASgtM1QbCUWpEJ4rr4wK82P43froR1DWSA2QNQjd4FfYJ2yRBr2f6oEe6nZzhxKmj3nq3fnRUfyULb2MUjio",
  "key17": "4ianQxK63Fg3ARG87keiqb22Cu1HgA3EsuHuikB8Y8GYk9txMuY8G2i6tepKf45MfA54XepnnHdBNLzZnLDbW7Bw",
  "key18": "5a1ihVUwCc13HXZQ7EhkLaKjA5VraqAgcbmL1MgXTwMCaP9UND3SmxRY8fqxxn6pDBoTJpsTjrzPvTCdQtr9JcSS",
  "key19": "L3P4ehLDpCnQhZnkw9H1PPe2uQbZCEes42kBAAPUdhXdcUzsnHXhGfLMw2uRVpSMMFWBh5C3wMZLcDU6De2Eutc",
  "key20": "28ZaBCf9yX2wMfBrAsFABAiwuJcftdFQY3vjZAZ5jjF4HHVvcrwz1ovriSZ8ScSraYs6b8SLkarWFyg631MG7H86",
  "key21": "tFeNKtLLhPmvR9SHjTNafwNNuMjSoarQwcj7ugmeoEudYbLWbmpcwbWNnojgaXyNteXeFSBS63cBUd1z7DDo9p6",
  "key22": "5DZq7vuVgz5R9p2f7DLBTNEsPMfjE716ybYqETQfx4L1zViqGZ5gcgoePaS1xqd3Y3rHNbx3xqVwFKrVEZZQ28Ww",
  "key23": "5EwS76DauBaDKdE38J5jJ44CyjwgbqtayC3zsjSGk9k1nbceCKriC6XxtZpmQUYtyh98nBhdxjDJ8LsfCegsWDdf",
  "key24": "3BqEQcmNwgjDgjC6HQnjQbmJkx7X4YmnVn5i5tRYPudLtcyxtet7kLYNjBqDoadvhRUNdFJK4opnYJ5cRoPZsVgu",
  "key25": "5aMfqbDBhSji8K4VQLThCo8UV1hgkno5h3JoDygmzNpYwd5ahmCPFhWcsginzSbfCFT61L1EBTh52sdMs9tDGWvw",
  "key26": "2u2LJJTZspRmHpXFXeSM4eQoQQpbbuQYLoM2Vimj5Caii8woDgeJuAEZA5K71DMr8AkibCF8ymHxvAdjExjFXSys",
  "key27": "37ZfRUpea4kUVekRWJ23shU5jms3uvt7t3QLUurAFUvWxkE97mZELrTD4T3U3V5TyPsC1nQoevtiZpVwc5N6c92C",
  "key28": "4YRk5J73Yu2T1x9bntPHNRsQ9jUZQ8gM2rgBFT7birquXhq3PEQ728VLobn3JwXtLouQxbRMohh2HW4MJB2W8nMw",
  "key29": "5ZGCvxyP4kY5xadpnNnvPXt4D7Wz8ZkTkuYvPp2htFTFASNuip7y2mq5bPF6TUMk6KCYm9fZ5Ci2dJocb8vCYaGg",
  "key30": "3VTK5knfPVjshs6uMFFCaqHyjq4cXXeAjLu1tz7tW2rae8ecXnHUuxBxzLVSh3NDwogLDMSpG1DEHNetwj8zTAmd",
  "key31": "J3av8PWw6wGAGnHFxTBHLfDVZMbXBUDHeyz8ev9SjMmzE3LGjZW2w8puuCZTyZwL96QWk4nAHfScTYieoW4hekN",
  "key32": "5AQTjPw43hJksYGBGPGRSNy6icu4hkNQNSjTo2vxZnsPriNMijt1cWSgxUYySTqMGzPTxJxrwdgaiFADvkYDBirH",
  "key33": "9b4F2UmLL4YpXiVhJZjZnrtWiEW3J6WbhAzn4RbTydzoPzRNERFpfjYgQBZCorDzZAHEpJWBrVbjCqetF6xyRX7",
  "key34": "57gQ55xEvNgJbget52CqF1EG9oNrcSJicM6Tp3krqvcjWxM7shX1V93k3JtSS1Vr9KzEr4ULv71wSDGonksyj5JQ",
  "key35": "ePuZFo5oad17LAGgFYYpGX2vzyN8GdBJCDprfE2yjAsHnSxVD89tP9ofeDWsxZkr6RkmvMx8eXvYAYZvkJiYXoZ",
  "key36": "3b2b1t8NWZMjjRh5DhBh7fSSrSvKYEfdTyBcZm1nWyaQYicEPyf1ExVYwk9iYk1e3CPLWuFcJCPTSfuMePeKkFXV",
  "key37": "oJ4QLkgcF8gKaw23ER6sgKCQaF56n9swcYQ2FtqmGgHy7y29156cwpa2tH9SGbbNxTYyD3PW4LKSX9UMmMxQS3i",
  "key38": "3DorjYoYafSa6Aepo2ifXm8vKGK2wMxwqovaEuY1tPPMXL5WCp7BoqP8NRmCYjt8QPitneGjqKKAFSy34EsQbcNx",
  "key39": "yMTUXxb2fSfKKT7cHc5Q6ob5bnPW8z6KyFV2gz6Tie3LYrz4N1BS4jgxSrHdiGyPMgr1vYAhZ1vn1eLJos7gnan",
  "key40": "ipmbTSjXC87yqJMuBx5gzmfDQMA75kvrfXaaSGsoAybmAPv43AdbCPFshmYPjau391X2RFXMVP4yCFbMnYngcD1",
  "key41": "xdFDw78uZ7gcewkSJDS2LvuD83MQqrka2wSwmS9EnTbhWUebdD9RAQjjVr2zjcjijNGs9m98ofFCfbJXRSEaLiT",
  "key42": "v7NSabPJdgbTEhVTtfhrUvVh1xXLEfmKFzErypwBnWiiBGKZqhzbXR9inc9TiG5ZBvwzYieS668BoSgquYzieP6",
  "key43": "3i15vu2cdhksyb59a8PZyZ99KWGLbvo5kVtE2Avqfvbpxug5wrd6vUPmsvZJrpEskjW7wk9LX9XM3kGMjbUxWF94",
  "key44": "4bsCUTgZCZcSuogt5avxYaDjXYRKyFRcXJXvZioJo9vyhjdkYSfVjWQqwcEmpaKQWaVS7FEzWZkvvW1762qgkuwS"
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
