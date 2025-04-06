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
    "4z9d6b9rHuXHzNozjvptq5Fs5s8QUmhBhZJHbxAhrMdNagZcraNWbYDbheBdnZhWAfke63eUMGRMyGrEw8eoEdYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x8WxkECEfKBFex1TKmzX54cPCarmvNbQS8HMNFTuUMARmDV13Qmkr33V3fjQNELNgzp3CHCqqdTh99WE4yincdC",
  "key1": "5uWzhfcKPHqk5DoSzZNgndWFgCnpjPgwFKBbBj37DBNKbQBAKP6oV2X1NFjaVPQKKc1BbJ3dQacLdzQxCtJCwp2R",
  "key2": "4qzdf6LGPRhCsw7JPaTfoG4YXPjDsCtZLuq3U7xh6r4azWAyyPQ9vb578cj89hjcyWaTozS3vpE2VDBLBiYkHnk5",
  "key3": "2tZFnBDfeEP4KuQofTJXqmY2sBxcaaM1cLC8Avpa9z9w9qyKzpPosVBBLNNf2THT9y8g2ocH3FF6ZBjzG2KL5wd1",
  "key4": "2g6YLic9Tbdx3LPyVohszMbEA9F49auFcY3uiiyFtvAGzThVTJ59cfmaVm8DUvpAuktuVKB65UH8qgfZniRC9mZX",
  "key5": "67XUGYK67riWUQWyru5YbMw7pjoUSWYWbBS6eJeCxgcKhuBVZuAMJXEREd9Vut99gsQcPmmSKg5moXGbEvpg6t65",
  "key6": "2FStWawa2U8eynJckSqLUqyZGvBgRkYjgCx8eLuxhYHtk1Dbadxz2ggfd3nF9Mzy7NbLggPtYTwhwbVqpSBMo9BE",
  "key7": "59nYdcmAqtocePb3FNJpuqAb3vRtWKcs4b2gWPULsE5LArzUh225LcKurLEJK6gvZoSEHeDTMHK1USR9qJRTp7A7",
  "key8": "4ViapCzahVSD9M6AVftLGMZ6yKZqBriGNpdq2zHY6cbLG6FoEa3meHsdjaJy1k3ZorL3QpHzgwyrcePR8xAMbPEN",
  "key9": "5GgHtyS2SLWBVGZNNBwnc3PSSuDsySmpKG4tC5EDh2XkmaK89SJWpBJcxyUMn7xdRtmx7yrsxbToaoWiTz4mcGRF",
  "key10": "4y7CX5yQ33Ca3JHiMgLf6Rh5rfBZFKxBnTFaeFu6cA3rZHicouvzoid3yqyFUKojCCPHLBmmio96cyRcHs5beYT2",
  "key11": "5aUP8AYdVTsePXSeg6hFYq3coFJ8AWG7XmMB4XffHWh56jdXZgY3NrHRHdnMPvShwA45jodFyog571TwRRfbqWGw",
  "key12": "cjJMmCNPDgDQfacdhzSc33z4zan2LBVpbgCKN9krtF62fMbMQyq95LyarK649urT4w1nPPEsZs83TUFVJjfbEGa",
  "key13": "BZ9TEnF9mRHbJoV9VZidMdSp6gxhYMznNF8SjdUZ1tgtAcvoJbrEwD8yKcycUm6XommX7gNGc6QB9JwXjk4WGC6",
  "key14": "4qAL7vVwy3rBbAdokrTKsGFQTMM68s8q5CzSKmKyYqwcDcPhThRRnTin67Hkw8qsA29p4A6hVGmiCmQjgLoQd9rt",
  "key15": "39nW1BmGvqedftv9J4saC595Wjy2dkrG4EmnUx6gtKWW17buaGZeDUkUXZ1EdeonWf3J8vhEVgJGw9LUBPWfaUFY",
  "key16": "2G5qkpAzc5p5sAZc11f3gBkMoDYR3D7nBz2smFsACbWEvz6jdW3jLTPCurdM9UNtVc5bHtdfsQHrhagXYzFRQjtJ",
  "key17": "S8K4EjjUH2hisSVD1A5RGDzUq74xcYN1WUM9SvZ7sYH75kUKzXMWE9pYyNqafE4sTmoozJshrm1AgSK5WsGQm9f",
  "key18": "Aw9xCHsraSMovAMuWw4qnF852rcw5LNp4hv8VttUptXei11zTgTcLYj3v3hLkLUcAHk2ZNyPDozULJqDiFHzKEr",
  "key19": "5pDXi9XcihxVYZqvfvn2SSKtz2HAZ7QDwcWxqVD9Ep9XVT3VU1pzPrBRGqti2L1KytbmB4yPAzeuyNQWDpwi1h7q",
  "key20": "36UjfV6mBoALuavNcWVEhzKcxNaaAoBixHk8F6iDZBNjNrwhW9JGuUPYmCUN98HZHAS8C21xinrZhT128C9Mon34",
  "key21": "5Gz26g4dzT2wqm6eNDGFcmp1zcCdRXf9simU7AkGKjL93HmUcn6wXtAGah99Hf5akEV2REgJya1HuchqDBT56cDA",
  "key22": "3ebPUHXypT6YsPbCpYZpjgNiGxf9D2nngpU5U1xhuPgnGjectE6BPx8hgkL9kwv1zXLsfUjiggg29gE8XbwpnRUN",
  "key23": "5C4NDbVGW7M4SgpC5mXN6qKDumNhHqWGGjWK2QnFDijyJsxQ4BgMhZwnhhMVit94YyMvt4xf28F41zWr9EKeRNPU",
  "key24": "4ehJmL6cA287TAaTqgXLxu3wpRqzUq3AqEBodc8tYMUbzAb2dPCHTE7BiPFFvKSNE8nLNLxgohfBbc511L7n5B5E",
  "key25": "5wtoJYbMm63UL7W1iFAjReXJigDSE5RJrnK1EEdMB5hcYmfdGNZfmKxW91VzooyrD1SU8LjbBNfD4XGNk8XAVHwK",
  "key26": "38BtrGiFd6wnzjLrxQjWpyPokbazXiNGGapFK6VzhcNmpmfmb8SvghR13uVSxzoefBcqwDuKEAPJUvjuaWEWqEyQ",
  "key27": "51jgJNzGtLc58zWdUTwHNn2F8F2Rd1sagWUXQ4gGSss9j8hVgEGyRtR1TgYAjkBMpXCDCqt5t1eZz334ctY8vWfu",
  "key28": "5dzFF6HMv1vx2kfsoq43BtT6bPJbYWixopYFoobKbJg4EWCSREpkYx66fJzZTsqkhD8DxF6GkriAho52QStEu1GR",
  "key29": "3BtXeEaqaAzefTpCZKmnNo7356VqNHmThv2431ec47fqdfb4PUiFLPp7s5GE1G1DHFoVDVdhM1MvawFeV5ZuzVqe",
  "key30": "3gFwUnz9a5HiPg5Wz68kJGNdkRWuBiNMDTSgsQFfmx8ytNHe4d4A2wwTCXMjThxwrE6ofE4qv4vSeS2TRt9fHT6R",
  "key31": "3bjNLeUiX926ddiYMfrijPxUa2mmEmiaPe4E4EUFodME3dtm7eWE7Jnziz4F7r6gxSBB7v9RUzHtSyxuFhThD6AL",
  "key32": "4RpV1dMgN9Dxdcgif9zW26w8hBXXXJajZNdaFpJidcDPycAvqVwM1s2txf8ih3cTB2FUszSvG451NC9Yr11zktWn",
  "key33": "4FkhWJGwV95dBAgqPhfcx9e2KcizdgweGQ9dMfig9yCDdU67Akio33Y389RUNvN7ayxRe3KkJbLEzJLRohJ5ZyDj",
  "key34": "59xEZckhtfL5EeYMcRRaXmqjLPswRRMD9Q5rXSMKYJo7Z4GM8fk1A7kYH9CB2Z8FJjAsbkicT7YPmkQ6KyVwrhtA",
  "key35": "JFUZoqGhbEms2C9sYW3LUfxyUYGz9w4QNgEaqQNspP4cvyjaYz6AkknEaswKBxKmUpAGdHSjkwGzKFr6VMwqKGa",
  "key36": "4t6rSk8NyA93Xp9sD4EvsSWScj8Lq6DCk3KtX4BUzzBZFF9ErEsr2w2uKowNKxa3TDqynqLmCfS95frwyDSCfj4M",
  "key37": "436xXX5gnYSRiR3CbWHaZ2MEFrvhjU2FiUEg16vBsarYrW257QM1sv4ddv32NjBv2f2QBd7284oGDCARkvLEk7jM",
  "key38": "3Zon2bHNS9MwpAu9Y19DsaR2saWm2KrERtG6xsnKrDGUZdTeD2U5zsbqMcq6YeCkcNtjQNCiesri9tv7EtdKBTuf"
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
