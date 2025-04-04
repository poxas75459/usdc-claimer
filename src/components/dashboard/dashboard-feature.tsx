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
    "4x23cCioG6wDzYtTkbN7zWeUhDSGAxKboh9TtZfvzWGiJnGKuaUjcmXqAwoYzM65TgzZktKg9WoYtUmZtU2efu8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tPUo66gJFbHEJuftgCqqXFkVh5aY9F7qjDSxMnDAMHQy7qiA7HsngqdiFN9UtJ8Rx5uTJixZJcmibUhg6ga2eA2",
  "key1": "3ouMxagkAmFbSKMP9jANNbudAe7dzQuDeEVseqotHao1rfVEhcQ5aNcpJ6t6BUKUwarRCdUniAWGGBy7FDn4dQ5b",
  "key2": "5PaL2p92jNgScA7twv44kLaNeDZnBz2kZNMgre19YGMYmcUs1DAXCH2fh9dPhVo3FQpStTYv7ZUREqfYYoQ6JJb9",
  "key3": "4rdKp5N5ug3VC89cKTuDpbcfsWzLZ1EwuzFrnqgxL1q2LtZzNKUcsqHCsdzgn388ryFRU21zFWc3vfpf19HFhsyC",
  "key4": "33t6tmtU64s8hhkFtAvpUV9xTG8X1p46Ztu4yDhuuxSF7wD4cVFgQYVE8fhYaHNn8GSAjUTs7Zz1gmLHuKxjn6ZZ",
  "key5": "i6TnVM1nk63UU8BNiKXFY6vg34VdyyttLuN9GUPUHeZVBmtxrP7s2pbNjUY9UaMzSjpygFajKN8t5Ci3LoVYZ16",
  "key6": "3g5iZoFMBbTPk9tD7HZUvirLa3rPaNsw4Gpp5ByqQHohXZgAs1A3ovfXpnvWCmQv8MJ7SFCpTeJTiz89qy7hhouC",
  "key7": "3NYpo8HjSkqn3z37ZBWWopT3BNYDJd9cqCMFrRZPou1MEucStDoZ7GF42BZRJeUKwYzQNZH2guJNcXEhMsTe7gvA",
  "key8": "3PeTvJRP7JJTt6KTCLodExVQSAw6ER7KEQK9H8Y4wukcdEniNCLMWxJRMWucXafuqHf5UnpCSgUhrYuJNJ79VeSH",
  "key9": "21FpgHcxcy3DsSBAAVqK2BjLPfwP6LfpdC4oQcQK7P5d9VsgnLrzJvnWV8uTJzRgx3RUbq3AXD3DxcLuee5yC6wB",
  "key10": "5YS24tX6GDBuv6URCaamb2Ka5TUCh4pMzhuDfV6rT9H26jhcmPZ4ipXs6jN5TgD8vQUZdN4EhoJ6JTybD9jcA65H",
  "key11": "4PKXzjHqWsVWkCGkTz5Bs5RNUHo3hbM3S1UgRzr2rSxWyP5WF92sAL8r6fu5kNMdbqsboaZvkSgD878d1Cv4bP5B",
  "key12": "5J6czT3H8GSq8zdhQwAzjjHkYA2wxVBg6PVhDLbuPqqCQ5FrPbvKrqpLvDzX6iAs45rjpZsdGmgYVYnsMmBX3PcR",
  "key13": "2FWE1E5kKAExGpAgWoFSqAm5Ny7BEFP1GKB9dDbqwNr8BcxBNTey6gEPi32cXuTdhWGvTSJjM1HyC9gfqRkfLC56",
  "key14": "2nMWU3on5U9Mq6BHYg6GYttYXsH499ou4R3obT6rrXj8Jb5oDoAhTDfSCbVx7iJuPevttnurCN9KsX5Etkkt8H7L",
  "key15": "5uJuZFA9tEoEuswgESgkthNaTroXHvB2HqK7A1AuuzNNNGSSQYamJQPWg96pnu6kpkx1BZR3Ku98qGhnb8Nkry32",
  "key16": "3tyMoRuYH97EzrqBhcZowLMqR8X788DxsiNhJbipzir8L1LFt1KKA9j4vsUrPNUxLGpidA1YSZCL8p3onziweeMp",
  "key17": "tH4MVrL748bx1rtpHggJNRXuz6WEiXWRAEdtMpEW7LMsDtLLm7eN5N8xzq4xssMo5aNJ71ipGETi2PrH6jSiQed",
  "key18": "4kbSq2s9Ki1Z8PQ6YEdiArvTSKoBWjJZkZvxURzwvZnoCWb7DAuh5ogArFmKmpKhuvYyyxYRYQB77SpqG8rtmSZM",
  "key19": "5mF858TyKy2mu8B44wN8iTUbNGW6W3TA5Cj9qVkUst4X6ioTrNQAoiBxKo5hRX2HTaYJkwFvzwyz7AEof2jk8siv",
  "key20": "3G7rNB6ebSAYKkUWx38EuhpP1ugfa6PgMo1Es4STXaxWUaGgWEeYB5g5DhEedJ2Rci3QQJbTfiXGhx7duBAZSFCK",
  "key21": "4vQs3m3ckvr2oJqkZiKSiYBzKYc7Q3LpqRxrLVkDuY4UngE9HuhapmPmTrnaKA22VRLfsZfBwumpYpT2sySmonk4",
  "key22": "4d9h4mf9DwFzDNuKMTziPACa5ztsizznG8hYadSUdPhuHUkbByjyjwunG3GUxNHExB9tectbGM9gsKGrFvUFsfBV",
  "key23": "3EfvP1Q7sSok5CbT3xAqzdQQa8FtZWsK8vTCBBS2KRnHU3iTu3FQMJcC1za7rNX1YGrFo6P7Rinah69XgeJTzRw4",
  "key24": "3pGwtjLmXzcCYhrSiYffE6oLubFXJq7opEopQqWyMCScJ1i3fb8b88EueQKdq8KuLhQKZQg9VjgVc4iEQqw2TDFe",
  "key25": "4JxYrqCtU3dvJjbwhSoJvFSQ9fRyzmBHwUKmSsRBKrFbmXHouyuYvQQscNcZnnS4KWF6GZuA4LSFW1idWBaQEg7i",
  "key26": "JH6zBLg3zeNwgxP2gALqv5QnXMUr3NyTRwRb9aWjo3Gk3p2ACeq4WjaGrXm7akJ6uP7Gh2ijQRHjhVEC3C4RwdF",
  "key27": "XHpi79AgRijA1yZ4KqGL9JAgj5zRbbQQZDp52GAerpEeashKqTmESfCKLUXnzRRVbhH5e1jDBk9yCw1nLQdxvTo",
  "key28": "3oeJmgVCcTZEi3ykHPpFMkqgiFcKhc1r2Zp2XrsSzLtYtS13DCXTD6a1362XSPfudX67MmV2N2jjoVBuFKG9wNwo",
  "key29": "TATv4EdetAER6aYjUxEjjBXAZq3DfmeYoYBKb32P9pNBRsDQ1oA2YXborgTSSL8wtLsA2Q66zJYwXCFEeFF1vrc",
  "key30": "3uXX7DU5bgnAyVrtHNZyxevi7icyNusWpB4yxfCjRHjGqBV5iPYhoPQUShBiVFWTxeGVHTXQQrLJJwnXobaZkC2T",
  "key31": "2M8GddWJ68SWCW8az36XPgJz64avDKjohJ6k1XDFCf3H4tfXEL8CiScFMPT8DxHFWifARGiRUFfzXGgVqVpMM8F9",
  "key32": "2VwRkzHLm1DbtwePhjPgy7M1JVaLqVKhyRDKcR5Ax64BCF1wWpxpYHCr2NyCA1oU6chNSK3KS6bP72LTmqhX1Lgy",
  "key33": "57xDoUcBw2rAVTdkP7sWZ835xhr64JtwX4MUAQqJuWkz5CRxLoYnCzjKUhfsNZGU7Sc51GhKkp7rhspDS2cpa6MS",
  "key34": "2UsU9w1u8vqeuDeASWsgwU1o2BSeVEfbESXkUHP16hEYsNnvh9z54nUS3khgXboXej4XxsPTgWWMWjsr8XBgGTyU",
  "key35": "3dYxijGhDgHbfdTdxWgVSHuaiDqjqagKAnws2nPvS6frEPXfR6B9zMeRgUxBmcFPfBqwW1k5Hi99MSgQ64FhTYKU",
  "key36": "xsNHxA9zBFQg9W3Ch5uRivVb1kv9bqhwh3WPBxQMKGEEUzuzGdn6JmWwEmbkDEzV4ShuD7ivr1ZYeGKgqgZwdrc",
  "key37": "5qBXZf75em4oG2WY7KPv3j91qcUSNq3DiktmKT3L3U3GjHsjm6cWwUB6pVWFfiV5hq739GXT7neLEGmksmAuuzkT",
  "key38": "2EU5eP1PZ6cURAnf25YSAnGkpQG5anabbEtdCeoRoRnmJS7idFCj95X2zr57f5QyCu7RrS71EiQvKbCGFrEyWFvB",
  "key39": "JzxWQtxupJUYrndvehrtGSzz4KQiTXQ5FfgWSLV7UAFxPvhsx9F3szLLbvR7Bn9Tqbnfkca3JsTNCUo97k3doXg",
  "key40": "3b5JpWQwKp2ZJffZeGKimq1uK2y1858jpkS8ovYDAFQbNYdJr7MvFK9UjhA3fi2AeorrmmLq1z5oG7xrMsq3QHhg",
  "key41": "5f1KgtQok4q8Mba49B2EvCsGh48sth6CGqL1rNkNjPwL3rZHKqPBtzrHzjUCH8HygU63ci6npcQs9hu1qq3mdapD",
  "key42": "2uPsyKMss3p9b1BHN57EWz5U2dRW2Y9KTjL9gNPU6W1KuzxeksLQ6vy1P8iTQY6raJ4id6ocx5FbxSETCBhV9utj",
  "key43": "3Q1E3x81dKrVugSPB78a67WLBX4es4Z718TcCZu3AVMRsvtJoJNyv3HkRw4MA5seNishzPro5xQj7dSqAjudBsX7",
  "key44": "3mGKE7AKQaVsGQqtq8PXB3dR2Ky6MenBLZjKcWm456kMRMc6dZoEQR783PAgmCGER9nCmSXjtEwyDpm9ViUK3HjL",
  "key45": "2NebyfWnDkje2pCdugbAtxBiCGh3LS2bBE4KFTpmBRsv1hgwoAVMzwceUtwFGABc7S5CBDovwe9L2oxYJRHbRtYf",
  "key46": "zCgjRBk6pgJeGa54Qv3ewagi1AtY5rYrp5W217LVQQJbmEC4J6wi1x5ZHbaf1Ekmn2vzQ4PgxQTw3LEvk9NLhvG",
  "key47": "2ERWkn2gwH4xCk2788dHGpttuW8tw7pN5SgPstSJUz8Hz59LmKt1aKw7uPUqBpHttpT3NzC7Rgb1n9zKhVwpr7R1",
  "key48": "4ionobbP9tCpn5k3VBWfTG6yJwHLWQaSLEG7AKbwiv4SFW78LhaCFYSx2ZwWsTYDZEtruqTi8qHbhBm71udhbJDn",
  "key49": "2US1tfcZMY9gRSh3G9idsH6pr22T1wDFLbhF8942teHo19fohpxj33dx7BvzNcksbfDjh87kLiD4qYfcxbfXD8py"
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
