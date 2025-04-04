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
    "EiMBj7mYeuKk17JHD9gAKQtARrw5KCZ9x7oaGnKopmPY6w4wPf2iWqRuQDDoeWP7LYP2vonJzMRpj9MybyxbHnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xSZPFwfEVnsVWgdS9rbjuwx6ypzVnewfjiPTYVcm8eyA17vrVY6FrwHKi4Fk5BfTkAPpEyaW74KBdSNTB1obM7i",
  "key1": "2T7kYEG6hY48VduxeUqvssnxaEjvigFoVraoMokeBhqFFNavJ25p3RU6vruEqMfrAzcSHMhNH4z5aUNr3kNM76cp",
  "key2": "3hwX1qcxGfu859sTYnTTCo22WHbJjxJA6n9SR5SUaY87uvZPEP8T5m8CY7CtYYtr5QKpZHTT1nrDG79T5qQQBEmW",
  "key3": "2cfZumJsjenf8omspoNVCszpMmrmhss7z8gx4GsKQtp5oKNLLEJDbLL8C5qgD2EZXXRxqBETGk2scQxW8VPwp3Eb",
  "key4": "2oWqvhjZpJmcuZTsdHuk1FqGq9fVeHRjEEmBfhkm1MPGd55S5vh8ZFLVsPj3v6KizC6FEBSTJTJrEfa5ZySz15S7",
  "key5": "2MiMMUgxiNgLhWcu4gDkyNKzgF9cXWeLJyvTFtohXVn11ZJuwSAvNYNkVMrTr5j5aLtzxWwF1Gt4jn3bPpSCZ3Cn",
  "key6": "4WcinFRHandow1DB2eFNnJJKKNZGbxbj6u3eE2RpSiMGtqc6dzdBt1fe82vFyr64R3BWCCyM39fMcYZLgYo89Dzu",
  "key7": "2HqKJTEVz4sQoR2eHx5RY3QQg3MuFdEV8s7ku8MyiwnD4Uzc3opkhrzTk2wLZK9xiEFY6B2rYiHT3qhprfgYShic",
  "key8": "uoshoRBhDnU5vKf277s7ZMuH3ead3Tc3L2CU8StHiC17siKfxsjnhDezVzCqu6CTBwuUBmZPMgW9dHx86vLiBSF",
  "key9": "3U9XrZTifFWi7E5F314D9Z1eCUAQ6u9FnTvqpjDLuRPst69i5oUemCprY6w8ybD3mvAwvJrfZVnyL7zbfXmWsEhw",
  "key10": "sTCoLV2Gvc3Y56mtdZPLMw9bER4EJMbn5zc2ZUFFP3HGfKVV1J5Kaxy999uC3mfhqdbMrR9dVXtQhB9rR3tSoxB",
  "key11": "61fMtkrHNH2CQ7mSi3nKDbzyETs544psVEaxkEhuhFdQ6ZYNcEXaD6AnUmByqew1G2yqeqWi3HUqptQLy3cUA3mp",
  "key12": "3xVGwE15aZQTCseLpnF6tZZTAEY6XyBtdAoccPnQkbcnszyiAVtvhwSxKmEchi1BjQXYeCSStd5JvEMCHBCNumh7",
  "key13": "3cmR3gygnZHYZXzQz5i1pQ5yjyBUCTZYDQWZxpPFPR6SheWBMRsaNZE6ey1cwFU2hawaiYJVjd4SvuKWnPh8sfSs",
  "key14": "hGBhyqFhEv2WjeALaBzjXvaaks7yLyvJvc8Hi9tG3JwtBXRHjYW3AwmBF6yHXZLHyST8mZmAwJbKeZBunb8R2ae",
  "key15": "2Dqgw2dkFJpwafzcM7mLHBHPx52i46YmM9cU6F782Epdy5fj14uLiPatdmxmshG4YX3pXVcmUwYyvd4ZUpVAKnxQ",
  "key16": "Z1WoWzWQSprhpZzAKWiJYS2TgPS96ujERKGTJitPKCszSsXENwgKBJopYpgc72pU5JW5mC9MJ6CTpT3sXP8khcJ",
  "key17": "2xSgr1ZF7ZDDyJrv1uYZm5eQMk86H9sYxXBfFcVJcELb41WT9NYxcS1ZRAZGEo1KqKKnoiwAT5hE1fep8zqR788n",
  "key18": "4xLmFPRJPqr29mf88YN5BxjLkrDWsL5eN6A6oJDpTagsYu3h2Hi9B1sGqSXyWre2aB5WMXXFkHZbDigfdCqfgotU",
  "key19": "1J5ngZZyqbyM2SDad1kq3nQvCWdLCPNjkVhUU5xptWx1q7iJ59JqsLjz8jFoY3Ma8a9sm3mjY4LPzRzc5BUia5a",
  "key20": "2vWnG9Finu32JGqRHuYmwRPNMNnHR3CbYEQwawg1pHw3EwjTuUi6aXsSAUNKb2BJKvZX1ZW2Jho2xQmVfxUYJnQH",
  "key21": "4fxqc44daYBeHLqpEMmu7FN1oxD4GiMPGG9ub5DiuRaudFdvG5qaWKtDzna4zqXGcivmYaGKNoF5c5Z1fxrohBuq",
  "key22": "3UJAVLH2JCUj61ftJ9PeiUWAyej2DqpE3S6jUHoGGCeBQLqRjkbs5SEK7NFK1chHTG9hZXuu9TMQbNUiQPVpAfZw",
  "key23": "2Un31qHNHj7xM24SWxofLQrWLnmeqxmTghiSTFDurVVE8bcPjH7hKugBidWLmSsZd1C2pjEXCDRHFPaAoL1bEmi6",
  "key24": "4D7Sg84hmLFFJL6h77pPAHbcEuYdUvACvcotauiwcuqjy5ZjpJqqhvro3V6MmEAL7xTc15qrey6HPBGcHy6kwtnM",
  "key25": "613L2jmCcGBVVCpGg36D4KjWj3scbyfL4YYoC7Rpf2Rsy1J5itG6zpAzvVkUMUxFmgu46LU1D7A6k5Mobpvy3ev1",
  "key26": "26Zqsksz6AxdpquP6d8RnKSA6J9u9LMUobrKeoApBH5hiZLMch56gYnUYnfG8mdet7KtnH8TMtLKdQEarEqHfzyA",
  "key27": "5QSrz2tNfmmYs1fBAxFmqRr7VMKCGsBT5wh1Dj3nbb1UWv6fjATYv9mbWmjVBxBNuiD2SwDBi9LJvo8SH4VnsDk",
  "key28": "iyiZj1UETbHyEoVER3H6qgu1KL2cKs9wNpqk7S9iHQxtvAk69CKDXZNXpSQgm5cVWr3tGVm1eoHsg7YojD2XevV",
  "key29": "5rGzurj3Dgj6f4BBffV9V43w6KgR23JRh5PFaT9xcwEKTCnAEf3MuWifAe5seg1kUo1U2bY5UD4DtAUS64bw7F8L",
  "key30": "5j9LazQFYWahM7uHqnmo8wZdNSQaU9HsfLgVmb3oBRvERLTyE66ru7Yd9V6eruDMpbTeQHpEMJXeSRrXXB5P24fY",
  "key31": "jk69AZuxtVoUm1npPjkowrZvYG6RiWT7pYFRCW58ExkFX2HbVGrW95jLsB5vftWPZNGV6ZMKCw8REsm6oVDZjkx",
  "key32": "1Z3rfcfk1hc3yBsYiNHXsEhosM5LUGTwbgUsXYp2YKX8Rw7W9QLWTAKa5rWsk4aF1zqrw7GKGh1JYottZbwmLGK",
  "key33": "4Tz3cVc8Du21LoHsZegBD16sbdJENZvTgWeCwRfiURQCRYGQMi86Cwn6cEU7FC1pL7bPkPRFrjc9tDsVbuy5WW7H",
  "key34": "3EGTepqv33LijdApmGjEME853YvdE2K3e8FgHab8FUNWXsTBWJqSEUJWWcEjwe758NPShHvPkGgH8kk5QUMdrczD",
  "key35": "3uj4rt7pv3gY7qgDR54zf7XSZ8GApafDDfpLq9xUE8Dvt19eHhHSKJa3tsEn3w4v3ca3KywFz2qbW3XQQbUPH8QB",
  "key36": "5x43JoeqiqmFTbf5ZQgSTds4Pr4mq73cDPYjsCBb479rsUtmRu6GfnPVDtRokrLvq6pzVmQnF86PVMHS4h5QWnH5",
  "key37": "3K1AzUkHy9WhsVjDX29u3KsGbqeYg12zypH5Vfojvqdp85v1dSMt22fxVcmTujA4SHgsCnZbkoSGhb2QSsW2L9j4",
  "key38": "4E6rgHZ9D8v9fvaJQkABbkywnA3NfsePsLTJCD1xvS7Q9gDnLemL5EUeKQoHHSmJe35JP131WHzEbRx2ucitpsVJ",
  "key39": "2fNkL3cyEK4HLyENuGgTA1xkYvEDpqnjWk5HE7cVuZSMbJjXZQV9ooiiFFe3SXzUfbri7spgS7eEwuP5jjTLbj5Q",
  "key40": "igw3xJ4Q34JUwN81EgUcfhCmHTjkLmomyQX6PJNZDCdSpgPy5vM1QT819WXJzKY5r6y9CUwT3snKDmQKgRKEesV",
  "key41": "3rLcpjpfRpJTNTZXM7pbUoMs3DG3P5b1nYT5ySRoSAmLCktxBzLdGB5TtTHNuCWKVqxsEsjrrhh5z5CDwMrvy4YQ",
  "key42": "CTWMr6seMz7jk2jr1c8g2etZsy8or1hBxbj467ghSsh4jYkwUFw5X1vdw7on5hk7hKWcAeHEGVoTXVjkitg4oKP",
  "key43": "2TFEeNp78ujH8F3oQmnEo3gyGB3ugyjDcNzpNNAZCY4WXg5Ae8YcHSz42NxbRcx5t3URX1MqmDbiZi4Bqk1cxtn6",
  "key44": "5NSpaxTjUg8hG7A6Qd2eJFv3A8qwRrXEVtTDTM97J81YCWV6zJ2isTyk7GabZX6kiuCSheSG8TSUaVLkzhy29497",
  "key45": "4L23qeTASyMEzQqzgqaZFiuFjs5aM99e1voXnn3B7E5Yqx1cSkgT2d31x2S6nwfgxwhBRDKxMa28TcuRHkGP11Qe"
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
