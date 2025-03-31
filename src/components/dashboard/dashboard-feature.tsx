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
    "34V4w4mLkKGMDPhvYukZVmLUNdYz3GDo4YXVRgaPmRx7Q18Zouh1BgsxBbdwiFtULjDvuMWGb47CExPZthhpcRCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "18ezidi3edPNzGu9VYN43YukYq1gpSfyaimTB9ofRGRL4ScBXhfA9j4LBF5GTmoVeCGzfry9rYCntHoKPXEyRYc",
  "key1": "3TbYvUbYHUzy2m9RwzdScWTvkvZ4nS4AUKy4M7YuQnf2ohGedbQkwrz7FpCTFXJCKfB7HuekXYt81jBWf2vcA66H",
  "key2": "5i2yFhzuqD28CaEuZEoKEzdAwdvAL4VQ5gmLXhPvA9HWeu7RtK2RH8wcwCTpCtZt1gYuZPTkHbcScBsLEUJq6rAp",
  "key3": "5Ne9k7pJQLXWph7njBySkn1pXi4cyykM2vdyCMByKDyAEMjfEduvgBVcdmuX287WsXKrF4sFaBwfgsFz4npq1h9R",
  "key4": "5siixS5SnEiBArEYQePmNeHrfT9KQf4vat8ocs7nG77t6i58kYPxLLJZL2DSuqaXmH4rUwGgnE3wk8QNWBPnYzQe",
  "key5": "2zhdgv6g3RSRRH76dwm6kLYhaequk79ApCQttYEatRicqeFq3SXpU7mx3X5Kzv6B1xNBwiZfngH7R87eZMisuSUM",
  "key6": "4FBH4z8CnWSFJbtiVxcExPwoihePcwGo6rUJVQA8xo4EboqZM9MDEYmeVkbgbBKmP3HCbEd6ktVkAyU4tgcJjnwQ",
  "key7": "2fcm1HirzfG4xs8EtZfdzMzVkyq55t8aYBBkNvber45Heo8NmnFR4isM5LGL39Hpg6zHgyiuvJidhRNqUgwNUU9x",
  "key8": "vLejCEZVcM7SdRwmdzDijGMgw44hoAZZVZAGPmA3jeCV8KGgjiLDUZN9veiUYEr6WXuSbrHCLU5AatKVmmewn11",
  "key9": "12tzFNaau66mchg6Lq6DsAXUezH1Qh86Sihhy2px6hLb2RN72mebSzqbiS3VHPLDG1X15Sgmhg6ZFT5emhniHmC",
  "key10": "262Zg36bdDnT8rwe163EXMwvWuDE56n7AiAnNknenQVhtcqENLqp9Ss3kisdYgQPnMzMvGCdVmqxvJZFGQzn183h",
  "key11": "4XbsY9LUA51LH5kxa76HDXvvS9ywAyfr2ARGsjdfeZYkosDuxPqajCuwqG5h7EpAhSkQv17Kbc8FXJvySvSukfpq",
  "key12": "5HGBQkbxfrQ3eyYaUQ5dRURYXepMzu6bc4XkNEX59Zn7GZxqwABYP1j5oeiXpDiL3RDRDfbuSdReM9GhvPvrmTDK",
  "key13": "2jkFReRF2P4RDfdVd7mc7W8CgwEfN6pAy628DSAJsJKsGSzTcW1qprDQTZoHCKBvLUR822cQZiJ9iYmCJRW37v7E",
  "key14": "2TLGrJDQnDdUgyGcCjMticFfnG7vtce3wNryySg475GEAjPHgkJ8ynC5nM9wJnDACRWhhoN8eyoFvGNfKko9KocX",
  "key15": "ePUaN1ox7kP8s6uUEjizhDdhvbrqiz8Cp5WE7YkSZjqUfciu48fPG1DzfKf9iQyE3XaNYjnBxaGvoFDjdU22k6y",
  "key16": "41BvTGtvA2hPARAoi9YUmc1Hu2L6Ksv6byhMj42SqXCSyY7YXNjcJyhHYsaY2DCcF2xJZH1kMUc2j5AwxggVEbtH",
  "key17": "33TTH61jobQdobzoCTAMASzJL7EJVpY49yrZ5v3JwAmGDjxdesVncS8VrKmzBGwPePz8Xf4yn7nVabV2Y47ioojW",
  "key18": "3ECKoAU673qoBncNpgvBrWqM5fiovFcjX7sWUEoxqoDFSCBz4nGGtCVyr53UiHP2mepneJbiFCvY5BfmgwEmoTBo",
  "key19": "3SzvwWBSjXbPPd1Bfy6QuLCRuAby9S6DqBxV7XiNNsTRrTYWs6zigbjwAvSyZHksX4Dasjh3BARz7BNgjNhX32Lz",
  "key20": "3uZ1GFxCnao5Me8K5S91rKtcLLpYiMfJqGb73eFky1kKQWuchEeSYH16hzYdupsztHDxFRiZJqwmwpH6XA4ssYfi",
  "key21": "zZq3AkQ7P4j2uMeoJ71m9bU6zGQtvZqHetzLJW3gDprPSG2puJW97cahLDxgk85K1Sps4EaxsB7amxVyxnDwCAw",
  "key22": "9teQrnZuCeVvA8j1HiSnWDKynJsCJEwAUvLLfoMsDT7tvNk2s5ANUJqPk5m5qRYiTxyejPmgd9Q1kpXFfZkzSw8",
  "key23": "5TZBGujxEKRecrdnZG1ggkS8y85MFox1rd1iVd5Zf7PYf8TMrPLJxWwvtJkcPsTXhHZHhG5pZ5g8FWhEkHPcgFQ3",
  "key24": "55Dwa79FgqJK9A1MS5VwgQFMptauoxSb39QoQ7TxJpjkjLixEsP1x3DmLjKzmg3qjoMqa5Zs1TjkT6pNXS4Kzo1D",
  "key25": "24rLuzJuFwPaE35D2DtCUu8ZYykv7zyTPbwV3RnPCFzoDMmRRsNbcJooREgz4EsfddCPQU7Z3gMsWEvbJywRwUkJ",
  "key26": "2iZYLqbM5kv7XP6d1LDsNhNX1zRgaMqUwaEwN2tqdYYichPZvLX9ei578NuMccvQtGtx5Wx6N8tdJZaBNYPVLrF4",
  "key27": "2n6hjNo9bzf81C5tnhfxzaE6EsD3fqsezAmowPdEPymv1mUVbuVb78UT72cGRsUZpA1F8UkFbBEBMWeLBSd4HTaX",
  "key28": "4ABwcmwpuhDeE8sfPy9sFrEsyU11te8Eh3kGC1iqxu1Y3HSxiEYrcsPEkYLDxJwtsq8p91EZKwjfCLWpn9QTZHTo",
  "key29": "5AMpAPoHCAgT8tK9mi1XLqNnDQu1igKf3jUU3sPcPo34CPaXaKYUUv5qjyAt1qouPVwWaqe4QFDq7DbZHYDBp2RE",
  "key30": "63zd2M4BsjMxa1GvDtyYrQ4iiG6kokhdpPaRthpjuanttaZVRLGPyjDdTdV2qSm1ydMd6got95ob9eosdyPVE8LG",
  "key31": "3CV2NPixUrrgxaLebwyFWix7TtU11KW4RJyn4hiGhB2ftzHAFW3p9Rsx5t1zJkHE5DzH32UgotYcZpnWkhQ8nTJQ",
  "key32": "4B99XeyPGUU49hWLPEED6kWfmEgrqUrhEVSmeXP5anbq9xsZ7UdGpHtbXa4AUVwbWy6DvzPFHt58UMVdGPcMUGZd",
  "key33": "5xM2Y6gqBryqZWYVTJq955G2y2oeQdDDHgD4uWF9TwBA3K6LEX1Tka9gfGHhpGjcmVBd3yGuLdR2kaYB82b3unYf",
  "key34": "5TE41dTeRW799L2KK5m13cdHH8Xfuham5eshrVwMYCixPTtXcrAAiu2th2wKTmSPB48vkroocPLinsqqQWZJHVm",
  "key35": "4NDeo6PcQ3fexcHNs4XdrjefdGMWmeCgYpbvQWTwvSAxeeC1nJ2eWApE6jRzwSWLUnuhD1RAk4ZajEJTJL3sbx6z",
  "key36": "3TeeXk6CFXeqQfbLMq8Q6HdaNboyuSHPby71S9PTrqCVSZcZeNAf623431BNo3hNyy1b7SoipXH6T4nsG1KAaiq9",
  "key37": "4U13ijFxTanqgsLfnqE3ehRd7kQ7oYvXn2WDXB9pjTyj9WnnGerHtTULi1XQKe4JeNRzvUM2H7gvJPkZbzbV6iEC",
  "key38": "5QeEhi4J4MbCmwrX1PVxRzfgR6EUkCmg7vB82RDHDv51ykoaDZDYAXCFiZQaWcbfUa27vgbd8BJs2GSqi1tcSgfA",
  "key39": "3eGPQ3qEQbyADqogV3uQzUBSQYqfRvfHbGCLprgZf4KyHqTe2soVvSRsCFzS7NnVbjRmHinTXPSPYaXMNCMVSy35",
  "key40": "33gskJpNVFJxoh9w49QazdJf9iUmSXBZxd1vv4so6jebh6BE9YVEgKqEjrjdjFN9zN1gFH44qrFpAX86dyraGoUd",
  "key41": "3kyqWGx6CoMmnaTZKjLPPM38L638zxs4HcyCuSiSchAkTeG23UnRGhWoqmpdHEkqtomCPDbGBfLJXFVgnAvvsLRV",
  "key42": "4C61V8RYnhiak9aEgaZgFQ9WSgMZTB1bqR3cpnJB6iLShQ9rCE3JdM5Ee5HykvNGwQQ7zDHQgjUaQ4ZdpTKqM2yj",
  "key43": "4mwokWFot62gP5bsh61SkjewieGwTaT3EiLriu9JZrcVBAQr1ScCH4jburyxcVc5p9RaXgQmLpcgyoEzd27duMFf"
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
