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
    "5quDeBN5dzrtL16eFnKduc7AHzzUjZahsCMYDxWrfAeQ9sJmYbrus3JvHBK7dnJQi3m6qhpiF6V9qFZLjQo72J5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HtM7PnNqFxouBPHhXe2sEJpEJ5KExHVL21kDYGbg39BDm7LAXmZDsTsiQi8DZkCfTNuFmQQardfdrfSivetJiQr",
  "key1": "XDTnRfdzMbEx5EubAjdNb6NEEnxxqPVVe5XYAg7hm9XHyF1TFy1749nuYVKM9LF1Eh1ggC7ToUkaWzzX8u5oYsF",
  "key2": "3QZahmCCsQvY68koGZzYjn4StGeuSn4knWJg71kfod1btU1XDHR5KA2HTdLjG8PyuBX3GJJKXhWeqTX1VAj1vCiS",
  "key3": "57UeApvPwRbXoic2KetHuCvPY5QAdD5UN9Q7p4AeiTQANGpcQgLXpznS5pXZMZpwwuPawgJFHtrtBRtBRAuAKxfY",
  "key4": "2uL28nGKYLdzU8jJXEM6bKXurjTG8rnzBVKuBoZkkeFWz2B3kRayEedSwCLJY748aGL8A6ttZrJALsLAEXGBLrDT",
  "key5": "2fEHWhGTp5FaxqzuuWXw76GEkCecBWbjhAAeKodWE9QhvRDPvx3GL3LvEuw51BnmuhMgFhV89sEFbW6hpCsgeVuu",
  "key6": "3V55j9w3rCMo9d6nyqYuxtv7UF9L6JS5ze4MUVkHvsKpKrNEsrThcSyitTMFUxV6hU13t1TzLLyU3wFEoFtU6L8S",
  "key7": "46bb8Bbpcq815hHaLEeUmR9992zmq2MhUWSAzAKdBExCefgq8iYcuKB2ZCfPHgKGURGw244fh33ozuN9dDxCiJ7y",
  "key8": "4kXkgr7yrP4z2s3MfKTmEiLnMtajDCEbvkXhJ53rYER4cakKWBA3CzHNYdqccuxZGv6ywTakmJHiU3wWjMuJQCk7",
  "key9": "5hQQwKg6xy7cEzDdp28QPZfkgpBChHkveoFDnWf4L4JRoP8WQAov35Ho3NQYNrRSuxEYgPebxDy2crjWBAeUHXCS",
  "key10": "5ccuCWw6PZLGK2Q8TDc5tWBNmr76MLh8QrXy1QGTSHkj4LpjsBPg3NxtpgFyJ3Gtz7vp2Afb3LGoSEMZn5yEuQBL",
  "key11": "3XvW4bSXqPyJ5FLLJZRB8jEPnbSJ8FbgWaPB7oJiwYoM2KRWbLqgh36xmAUmqgsvUzJTwUrcgd7pf5FB7zX1Z9o5",
  "key12": "Bwr3SqxmguMnFPdFMDV5cxLiLS4wZw6YzSEour6jEGSGTpd24F6eGK79z5dhdMCibJuPTQBbUZ7PcGahZn7wpCP",
  "key13": "3FPhtHH7pAeMvkWacCwGFS8S7SE9xQinT1tyffH593taR93HnVDK6tn6EaGHNW2LFf5YzQD7LMZs8bbCBGduNgqs",
  "key14": "2UCRFkNGWdYoKWeu3BSAriE7KA9W4siWt3hANtDtGcU4BbPT7F3x92wncChhz45Wpvia5uY7M5eph6rwjCyJUDot",
  "key15": "53GmwyTrwdn5xvFvsptrd3KPZSmENUf3uce3oUjtkXeAEpveWfRxvZ9u87mcbsKgySnhyYEp7GT7unjPhq3LsWtJ",
  "key16": "4TzHR9FTzD8AfLfGqopK3HX3yUXFZNc5QWyarqEgXKT7sZSa6WNBjD9X7BdUQpmbMm9WpNUWyApP8rQNWQzQfaC4",
  "key17": "3j3bQFSEBgwUjJWhZtNV6UdDBv1Q3FD3gGq2aYW3nihjVpWaVCbSvWxvv5Zbc9DcjyFFMZAKDijodVazwrXh11Lf",
  "key18": "L3gm7oNbBW9WgpWywvJceQFLC5BPnRBnmG5geYqA1RfTLyHth2rg1DURW29diTP3ew9D28sRdaLSU8zjeZhnPfT",
  "key19": "JjPgMmh68AvJoLBeFNxztSAev4TGtaHext6H6Y2RvXByXx9RXMJcRSHFDa1jhZn8dvpPkmVruHsu7Lf9yMDFBML",
  "key20": "4FPxLHqEBuzgAAbnWCNfvpooNjVhDECZwaQKHmmQ4LbrMnBSX3iw7WAeXRa7WsR2P8Tx3Yodn683pdCm4VqU4iaG",
  "key21": "62D2ZZxwcjrKiirKqY5HXkB48rPYYzKvotkAh42V9PwVb2rzVx8q18rnZzMdnaRq5piXgKNkpyJ2pHKvrbNpjr9X",
  "key22": "NVDhGPZXXZeq5UEVdKQz5Wd1WMSbwuU5CbBb96DYqiagCrnAAjx3qNTE3CsuSmrJ2VxizseYP8ptNN8jXHqnzTt",
  "key23": "65D1LJKpjt2WHY9tr2W7oo2dNLhabGMUocjjuMKVPBowFPoJndPwD3i6tRxb3vvTEqEJkwDSRhBTKJ4vCKfr2rxz",
  "key24": "2gtpD2bpNZhHgfbpJTu3TnqXPLEyyAxGfCJviAuTxAiz88QP7tRmVA4FPGQat45h7Tkgp2kANZpmyxhRoan2Ptr7",
  "key25": "5L6TbSk33mCtxryLvpSrKWT1DhwpZMt22NbXSwVda6e2uL7FbgDXws2DKUTt6p6Vpd3iD1MNupseXFmwjyJSBWja",
  "key26": "4Njo4pZ8TB6cnYYdZoM6Z9ty3Etn9J81UuHPFhHedpcRj2yUNENrvbAdbgr3GdBDdHp5zh95oJda3qPuogjnDepV",
  "key27": "PJMCCqZuqbZuGjGqzduArxVkxF4RmNZGM1cu2dGgD13no1YEXpWXJY5aDhMVnwWZZuKaJWUSDEx9foXUz31Xso7",
  "key28": "5pGTt8qpDMVXUsnGoCinQAD4rf89c5hNrft2BC6YQwdxtWt6M7RLcbgqgGbNAQdSr1avsED1T2gp1z4Ysag9fuUc",
  "key29": "3FsWXr3GfJSLdWoLv9ZVMZSN8MxDGTJJCmyFV2C49FV9kgn6CND65KyQBVo1nREqJ12otSMsJoMTdrUZtgBcdb3W"
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
