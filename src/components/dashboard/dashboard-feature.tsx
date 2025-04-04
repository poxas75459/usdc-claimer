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
    "5BC4xW9cd47THQAoUHHb2S5MWyEJHaCqw2k4nNzSZJ99Xgf74JBVERHuHWsiH1PWUJyNfi4pBsU5BFRtPT6EFySf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lws8fRfQdPKGE4oSmK8crPHVvXfjwbnH8CG8dxUsbkuBJ4btwspWKTjH2VCcBHVTiuwznwVc7Y9yVMQKF1tHxDk",
  "key1": "C25pjzwRu3ajncWrtZvKd5zGk9iyfevBMTrXSVP1YqAnetZyBnks3wNHe5KankZMPume429JQvzC11hgHLeXJZS",
  "key2": "4fKUydVBBSxXfsoWb24i2dVXPofp1Mfua7iGeT2DuvojJnu3BQjTJ2nV8uCSihqLm3AThADv1BUWWptDcL8cP1k9",
  "key3": "3yVfY5KaX7zoJtKQQvCBdKpJJMLeunroA4wYCEAKUBH6vxbrThocmCJtfbm6kbqwun7juwroUFhYJzAKGXLTdXUn",
  "key4": "8nwHeAQZDKBW6qrYzppRnJiJyLispgtiGvp7cb6Fru2T6XZrg5fx25FmV8F2vmEhaQLASpGzL9TV2urCYzzSx5T",
  "key5": "E25hnpC6tQwvfLCVmE4qHtEbn3qtLbq56nAXJNSBQsSAojba3VWWvRGo1bgqd7auXAPmHUzPvAeA3A56VoWBdYG",
  "key6": "25Uk6FZFujZ1TuDLMrzLeVxoXvjG2PjaxG2k2qQ2J4JyiAmmBgmhzr33qbxirKLS92A24gXbsygBSviwt8nruDRm",
  "key7": "19YdjyTiQfvxe5gKkRThwfH6zQCBMXL13uT8LawHQpVsEzwHrKhN2nJAz9ui6PJgdre3zyWvZFLprK3JDYNTvkW",
  "key8": "4CJm6k4DKz4AbK3CZbgKKn6an4FWBQnc8A7VKaqi2HYKezUD62wB9KQg4Hrnfqq4hBQPWjheDjwdhhfWB1XNe9kj",
  "key9": "4kWKDaMdsqo8rHaCseKmjNVAfv567FjyLsGE1jPLwdq7DBjxDBjXXsCiKtaKd29yK15hk9ZYFDsaX8xnVTTYm1Mc",
  "key10": "4xZeT7SFhpTTChHDNJ4Shm5j3s7AYMF166FNJYVhbZozLZCVDD9hLrQutrQ6gNEzVvwnYYnzCyJNpgL1pN35FWf5",
  "key11": "36evYCHjbdh6copjRgYgFFnkwojuqmH2jvYP1gE2zJeUwP5zM9L1tYUuJtTDNEZUm5aPRLYRiJARpLLvvutukcQw",
  "key12": "3CTPo9qaSk6QfwtsfmcgyjQJLhWkgdXGxmxWn9XGMNeq5ZtbAmrW7D2pEHjftPdAHHPGwVTycCoJu8LNwExj9ZAC",
  "key13": "5ph1Azez4gERMzLn1tgKeM5VtZSy8kdud1PFafVn5CGPgvaBHbcwBQmVvBhABV7cd3szqEEVEyJ4D4nNNdBhKz2u",
  "key14": "5ajCTrfxQe8stynNs7hCsDRXAJWmzPmwHThuPdo1zE7ehiWQJeFBAVAhqghAADoCbC8htCTiFuUUgJNUxyt8Ldcg",
  "key15": "4Yvaf1u4RXqzjm8nmHL9xU3AbTRjh2wcPry94gHMQCGEyTK2K68WS78t9nib3i8sNJhmDVpHy81JNJVuJPcX2rFV",
  "key16": "4eH9bSMfMWy5tpu17cjmNWPU6JFWLPPkBGQMx26wJvh9p35uSvaue3CamCVPgX2971h71nATs58RFinuZXWMpC74",
  "key17": "3YcmwrDixoHtan76eKsFq4mR5WGE4ZHXphVEufqtz4iBgRwbjTrMFw7r3T35TSCCaJhyJNm2WPcgazvRuNCkNVHH",
  "key18": "5eG8zKiChLa7qE4pTX1VdYh8NTTKjW3dJYUTn8kSpE89JWR8scu4v93VSDE1otrnpKZYap3f6hP7f3At4aDiNndb",
  "key19": "3CdzRsmzBMXyh5zsmef4aGmi7t3XtCRJKNdy5dDdqSgbZt2VaaPqraMn1g7ag7nuoKnkLmBohLzrZSTokD9aajGk",
  "key20": "42SXiw743oqtnQ2yFzmVJzDR34X51SXGnJnvHTeVjK2LZbGM6KuBcUzHBTBwfoNQ4tEKn9pEVyyqqbGucp3okpRY",
  "key21": "3GuVaxGq9cx4Z817sN7bK1FBYNfFQE2CxQ8s5N1W4BeRpBwG9JXdoFFmNtL6V3wYUC75r6XGuGc41dibpgMkK5Qf",
  "key22": "3L6MuxZEhqsfVVEX8PDebMD6fUNya2SfgfjQfDDs1PS1CdTtbDiAF6WTrkoC2zjJmJv3jVhtHcH2Y2iAK9kG6pTH",
  "key23": "4mXo74fjJXrjjvSmfjwikC16ptccjtKXTMRC5XzpmM8bFKxRfhv6sbBJZaYA3oPNPpNFh27wGBmS2hQKLkcrKvK1",
  "key24": "2qgtBfRuRonxn6ZbXai1153ym8P7gCbJ1g5Go54EfmNargCR2FbnTc2QtNuByH6mte9xR7sW6F35gUA7sYqysSap",
  "key25": "2uqjBP159y3WBSh9apQVyAzTopboQZ12rxYgDsWcAbETkbE2MxX3TmnucBasYb8XwwAcvxSpmTBCTLR2QjqVYakF",
  "key26": "5N8HZZUnNLeEG5T3kkVnjrVguYuot7DPc4jWUtzPA3MojV19zGaLpuD7pcmwLAi3KKgKKc2PoHrJNM8M1rVejJ8",
  "key27": "H5NLYJPuJHFFnJPtSTfxhPpFf5hgirXhniwcWZP8ooL8j2cJUGrspnFa7V6PKUMa5ZRSDqEhaJZnWkrN2zu7BFN",
  "key28": "5jEv4sChk4yAJ3ZuXpbepvmT76k1rPkFw2Uz17BXeHrBwhNdGLWkEu9CuE9KUNTLf7CTuty4oaLtyaTPTNrDKwyg",
  "key29": "46955WdUeaLcFfUYCJPv4uSoDZMSL7dchSv2dSQt5pDTXVxCuV2fNb6aEmCT8f3kZ2R8LgypgD4UZc4fcYGCodS4",
  "key30": "5Yn8PpuSMkGkXhvX9NFxUvz9iPcGpNMa7DoFQm4QcQUdjfn9w9dubCBrD2HQd1kb9USQtFFYdiDmc3C1TgpELuE8",
  "key31": "MqmWjZPapxXHRbBgvCZCtgEHbLogZkY2V8b2wRzZzzm4WNHEKvHLNJoKYkJVfpzHLYgQkqxx57xMbg6WuaD1DjQ",
  "key32": "27igmGYh5jTW6dafujcxzFEpSzTxbJMLs6T3PtJyafceWot6X4tNwo2XBAhxnyxH1z23isyyDEr3cFknVnX6i47S",
  "key33": "2WWyPkp6o5dtTaKKx1aSWiBx6LiK89uy7noEs5VT9yydQfEMZWZSzFvXGasWdne4Cbu4gEWkg45kJFxDjRUe1upd",
  "key34": "281Ffj4fEqppFUYGjMZEyPUni3r99trztQWrntDgJwVbk8xa1CpL2DPBkTX11ymw82ZjSjbzRUYdD5rTyUv14mJM",
  "key35": "39KUgDoc9JWKY8V4MByLv1bpHRX8M181csUtAJeMPhuZkGmJvY396fsLAQcvTD82vzYLwvji33KePjRkQbxN6m3a",
  "key36": "2wZCDgj5RjqT1zmJSjXdngZy11LEKvCDnr16NZruEwz1Bzes5iwyKyhB4SRVpwDwWo5Wsb4WZYzXt3XEn94RHgVL",
  "key37": "8AGbUtcUFAgH453MBA48RKiVQpsQrH1J6toiypchAWVC2YYXJW1BATWZ77L4oXcshyHjACvuV22Da89NNQVVw49",
  "key38": "4AFm5QvqieujDQKSu2R8nFmCiSozGpY4bSgHxLhRoWU5mwAhyq62GiPUYMBVChppcpMLDR1q834VNw5XF5jjp6Qn",
  "key39": "4kVsR3joTHM1fQ98SZcCsJvsksB5fr32ZEmCShNAsxfosEciYKjkHcJtSPue4bZvcXK3qqDZwAW5CAgYY56e1Tgo",
  "key40": "1UaVnqXKYruWtr12nue3WmdwSkQYPLQrMkG8kRb5HpFcF7UEkH4FSGwZf3x9jhYaiCNSsxZhKRXFBnzzEWBcoAz",
  "key41": "ojhVDTwGQaUn6wzwXNbj83h82XzUbZLuYMk25aNEqSCooxC9FAPz8TfiV226m2HFgV2ufnprcwYevvFhWXVX4GG",
  "key42": "3Hf6LrEW82Vb1GHp6SfCxrvHqgUedjPcVc8cYcAntwgXDb1BLkLhbcxqBVpNQ1L7TJxQP29MzDEHZe51Upxf87pH"
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
