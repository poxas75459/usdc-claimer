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
    "5sHFuui3wm6URrAfG7cySTrJxYJwPfFX3hZDn3SjMe9ERf614mwAWGZk4rk6bkU47iJ6f5eoBCJnm7MafXJiqwMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43zt24hgfcH5Qdqm42oPA2Ec9gzN8wcR1HmkUJxV4w3DuuwGB7WAV6dzwWx5Jt3b5Y4rn2EmrWqADXzYmiTN7VFT",
  "key1": "3RusD386Ri3b1ZoKUiNUbzRRGBtPaJ85JReBvVj1Dbaj1xArxv1S7nQhk1ZtZchSeRH6ESVGKeHq6E7CrXng4BAi",
  "key2": "5STspJgjDVuWEnBzJrGHEs2YVnbagox1esHcbg4HDqgLY9VXD4q2QyJJ7KQcof5cG7AZifkr26UsfCiKRvPG8HUX",
  "key3": "s4ceKeM3Wg77bpBdn2SxqFCcW3rZMJRWyQSRHRNfa98RHCn2AgBipUP3Dqmsny9kipgdsqyiQ7Z9L5DkPMFWEZt",
  "key4": "3JwPuQYcpT4wq6HbntuRfMxSFxFSLf8PCm1WkeUqPJ9vF8cykApRjMCezbxB6vkkqiXWwfk2htEwCqSvJTYCG9iw",
  "key5": "2h1cfvvNN88C8JNHjQAu7xxN6f1twnXTHj5Jj2GFhiLFJJYBqtPqvsUGhVbgiXQQeAE52TP9voEbXUGKzs2mQZpG",
  "key6": "3LHjLS17kEdi5atgeTGV7REahdtDneXBEgYWvMJ5m88xGjDq6DFXMbPToVBnA8UFF7BYbDbnHWqXeHCrU4Udiqsg",
  "key7": "3nJzYuUcnnnT85NBEQiuapmoKfkG7ASmveAFnSMeEMoDNJhaNsRKSRGCaVDcNDWZFFN8VkXSW9VgAqcfspbJnQcs",
  "key8": "4ZSgtUzA5dKJs52ArbTQMRaAyZXcEKkYiX5XRqNsszGvhdxqm4JqMEf2vRv9SjWDMqEoHFyDx3TT6f2LcVV3y6b3",
  "key9": "3JkiGkWpBjiFifvDgnyxBWoXFk7jscUBJFH4g2ENZAzQJoNyPwa4nYAcomTtFn9LoCj2vgz1wZ8UJk2JzwVZkVzS",
  "key10": "Rp8Nc9jcAk2iYFTXAau7DfKnRtExfTdtxSNux3wKHeKbCFBHan5iKUyKQN8vU3oyPiVpyAZeViw3CihV7skmkUo",
  "key11": "aBwVTgTPBdCU4gtfqKFzJqE5pA7qPnZtzQj857wj7Aey2U46aTvA9W5wP7BxT7Z4ipGb7jEAP8jzwpoz5NvbBiQ",
  "key12": "NLaExrNGzbnbuVmf4NGbR5PqW9YmM5592hhrWRCgbpX2nHtU4d1D1q4ChY9jhPp36oUZ6RF4NwPobqQ5zakLF7T",
  "key13": "4MtMqf4RDDz8LPxxvToqtxQofjh5xFJRrHpJNsznizBGMyzmtHvrrv8NqgtMb5BpGd85jEPcCryMenjNvDsG9dGe",
  "key14": "Eki1413guJzwoskVucMsNEmvaE56UJaeDKH1FSzb82J54HMNLFqXxaJnD3W82pr5Psk6TXnoKigssaXV4Hybiqo",
  "key15": "2QenKMT93J6mgDNKyeMrdoPHbYhspDZSFgwrRAErcvsRhdmfhHeDfTuT7MAvF9R2L8S7fseJ85KN3LXFQ7xFcAkN",
  "key16": "5zxNuDN4qdxeP2icuY16icakE56NkQ5U2enKPdGszu9bXvBMw1K3uzLcMiYSrLuyAPz3Y18GAoqdEJq83K345GaN",
  "key17": "236zzxaqbpBxWWtLetgtc4LpzYyzoQu4zgKDz6CDM2YSq9cnG6d2FSCf1rNwdvZi9ur1FxtW9Td5EC5nHb78gCe1",
  "key18": "3NP3uBgt5Mk5h8EMLZ6mcdb1WDoDtw1CpxRA6wuVDqkNT6YzGJB17vtQrYS4SiXQHqUDssFdCQLDndr9U8u69haN",
  "key19": "Texeq4XffrsQykodk4vYBrEYEBJuSunujMAkdPCFmvTwe4zrKmJW2x3Z4eqw5uwiuG9R12794po8eLAFRCELZvr",
  "key20": "2DTb1bWY18tyAJp8PapzvhkMvSeU8RDEComb4JrrxHCMJSVvd6jngUXanJ34ebZMMjNF7T4FV8CNcKAg3FhPPLpW",
  "key21": "3CEYGdoddCUpGic26QabW4s7tMwqaqfRXiWx8nUmz1b6ADnRKhDoDtoK7hGUY6bCykfX4H32m6cb22jdknewR8cN",
  "key22": "2u2sx2f9vVfVpme9LAHaUarpob93cCvn84twJ9L61rva1YF1Rg51PNuCmGrtvu9vUE7LpcmkmYJBofew9Cjt4Rh2",
  "key23": "37t6fSBTs1x8GRAWwmFnyVVgaAHDzV3VMzJtM5J3Ea5jQkZv3E7xuWF7KRVgHqUBQdvaXXwLyaeLc76xQwH91wD2",
  "key24": "3DhXLyZdJU46KDhZLtALCYT59Y5Czd1iQ5XwtH58zcAaUDtpz5YGYDTX7y6DAsrFAjhqetebaakDnFe6GLCSzYoA",
  "key25": "2YfhiiLJnHH6UFY7awrK7s5oudyouEBY66pAe7MRs9eKWeHGBJVaw2DEyE9snzw59gwJVp232f4HtAV9C3GznvRu",
  "key26": "4W94eotgLN4grPzdscnix3fkzMsrxgXbUUxVKVUzWqeBwTBLjZEEQ9CMZ4trfW3q29dPB2MZgxd92jSYY6LxSaTY",
  "key27": "2wmJuuJKkFVgedUi9M8QkqAKFfeejh5MC5As364CUgUvXiBpHiJ4gojEGjsbyG3YPK8Zduc4pwnkskkr5akPY1tv",
  "key28": "2x364Z5vc7DQmohA7WpdvoBcZSKrSk9XaTsn51nNQqtDjSK2GfNVMYcQBHHBR8kj4qhdvmsavFgRhgDy7Sv4MPB8",
  "key29": "4H6EEhScvvhc8vLc7ZVQx74FZgDUj8AeaGEF5nJBfvhvWnDUiezcSJydLXsqqLARNPtC9gLoK77DNifK1TxTQoFo",
  "key30": "5NJfAFG8GFv9wDQEuSUhgnua47FJ5AacLRx4WMEEudfDfmMYJjhVN3JY1PggW4uEhWVWo9ANf2rxR7nCCgTdG2yy",
  "key31": "38zpTZSXiqGprVZbbgr4FjJK3XyrQECaoCQ7HSsum2XNfdsjqEwbchFJiTbSZhdeLSWBFYFjmdcrCwpZNejpdF9W",
  "key32": "5iUKwr1YCB67V6adTjoz1jW5X3DFJMJmPM3JgT8VZGRGsTN847pFSkW5PW99yqBYueCoPGzoFyeNA4QKDNNtFpaW",
  "key33": "2vT8bkwJThrdURYQw2Ki7xuqeYowx6gfDfdVRa6GndATzP7vR7K8cuDnym3Tqcb88fsx5Ek9XMCaah5p4ncvovJB",
  "key34": "3wPP5pR87xZgmLrKoSJBDtAm4XDAs1GXq8gjoUqxte2zFPLXbazfc6JGXbjgpxmMbsZsgjDwKCn8Ej7GXaFoiJc9",
  "key35": "5X6gXuNHnL2e2NCk9VrPF5FrHx6WdojKPVb18HBKxX6b62Zsck7JXyYvXpzBWibFB1TrBsA4oejatU9H3Y7LTsA5",
  "key36": "2vRKFpc3wmqcEq3MYw5LN8cn3RizuTZX3kKLD4Li9GFBHpomootKjY32T83hpHnJYimNwefrsBFgoTGQHi6Ld3ok",
  "key37": "2HBuioSE5TE2AEpS9CxkrHvyTzSwiouQTYG1guhFm2C3umdCvFmoWUejT3GdpLXHU6XGXvWD9g8RnpWmb76S2eEp",
  "key38": "2NJUwm6QgsfeNo1T94epvx8N2vxyAuSCM8hCH3BGHWHTbjA2Qxyd1KhXTk8FP4GGXAhgqjnA9REQzUS6sDULW1aJ",
  "key39": "qrgspxE2K61ZaM1Ur1BUet38HexZBd7xYzgGv7yWKY7MLijpXqtUuVNXHSyaC8xGYDEcbuZfrTWVwdcqnnaMZh3",
  "key40": "TEsmo5hkVspg6trei6PVVAvNfYXJATkP8WgB141aZMwLbqtBR3KEBMhAJxN4XXzonyUwN3qo6aBZhvCByCkfE4t",
  "key41": "3XapoJZ7qCRskcCtcZCZcuVdSNsto1n1KFbGGTQxYgddySaqf7R48Xp8AiRkHCMAokVNJTYQ9PvjuJVJoLAvqSsQ",
  "key42": "4t5Gifu9pnovCCouHETC3B9UdBb6joDD5Z7RfxtQnNJVQZUsRBKsv6e6nuL5xFUB3R9uUk9cAKeecJAi5QaCHqLC",
  "key43": "S9nmE3tssfiD7nU1wTYLh6QN9H428ePBm4p3Da3orBWQRtTgWtB9dD3yaTMJDgKza2Gwk3Eu9ayBE2aiJonC2GU",
  "key44": "9ACXyssGt7TKufba6ppsusKb4B55VsawFmH5HCPee7nHTpD1Z4LLhabCFpU71pzfCZ8tQC6QJeXJDVT9TDPZDbg"
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
