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
    "3rB1ZB1UkSh7kfwyys7VxTVPHVVG9A4FfKgjp5U52RQrSFxsy13Yi1KBksHDidRFkDy1bEqbiUXwndGzi5PdiZK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KQcmFPsESRvyy7Q7AUjr18LLYt3xcHc2fsLxB7op8CbqjPoW8psUXBz4X5n6og6andCwSrTYXomWYoKkSYJcSXL",
  "key1": "3d4cfgQhX7Qbybh8PnAyyeg6v2F1ELtevFXM5seJxvZqC6c336YfsT9bGyFHGMq665kjFv7x9ddCLQpncva3GBa3",
  "key2": "2ZsfLxq219k2XSM2gAz7DULVHkqauoGG77o3wQmMsBGA4QGwCoq7UxBG1i8HToUJccpMYFCxNrg3WoEUenNv2TEn",
  "key3": "62ZrX7R2NaikqM2dFpsoTz3F4bx6UmffGGVP5HLE2mn6EwLYy7vopdasRbPWjCvyoBmENrxYKJzsUCjtajshcm4z",
  "key4": "YsYSpj29kmjd38HeCmKoJ38d4LUMB8fMeEh6iAiBNPZnVyh27K5BKKuovBEjd1RVXP4P9u1JsyWG7txSiLw3vf4",
  "key5": "5ZnYRpW1TSGQ7PgBPQ3pRAPHZ5tA9C8RYm6gqhoSMz8z3YdN5q53b3oktTcETuFWnyFTFMSBWCW486t4vvsQJQm2",
  "key6": "2CvEC3EMKeut3vXeuDWACB9pq6seKETHvqdT2d194gJxYyqXEY9UoFfSKnmHGMHQ3tCzxtXWnB1SnvRonBLuukqV",
  "key7": "4RuFB1xiEnkTPoSnnnypAMVALqkcmjfMxr3cTYETzLDJJmNxTZmGuLuM8FciHt2e5MYu1ru1wXzZmfpdgwSBmUN6",
  "key8": "YaWWJSg4jbmWDnmMUhEQL8WcjZLUjNLahNXWYHrMS26NtDVwqJxGQYiDZobo12mu8uy9n2rnNBW5AqQaFxYZMnk",
  "key9": "2dq3WbQhAoGvM5hZaEpxoHGtaRHJs2hWWFFPozmrTTs9v6wNrA98SpvxvV9a7rMKtWYvfxN93LPozkhuGCx9wGjQ",
  "key10": "3TgRtXTV8LZMFuuK1biaGQ7jiuQR953VTyMatZZkAVw1qAhvWhL5hkg9Cfh2bK2otRTcw1Cabo8GpMVxPxpgwydE",
  "key11": "ejDHQ7PfmscmQkEYZeX6z1EZ89tMqG9yeexta6c5JuJ9La87xmebgeCLrngB5uziayb7X4zyzdxkYxpuT8T8qim",
  "key12": "5CHUYupWNUp2S328i5NAv1nzKYLFuud6pbDFDdaSKo7snzWfPpWo3hMWE8gdhVuk23bfuFqZacTJqVZWbCdo7DX3",
  "key13": "2TcPEBy6f2u7h6ebTdN6MeNMnoR1NU6J3NrgKiCZi1ayXgwkjrzFBhkP1QetSwHpUCqH1Lyytm2FgxcFTDPi4ga",
  "key14": "3xCZDGMfoqHdnvtaCBGs9GCM1rq9VxgCqi6QjxEUwnouybRRbjAEPEwLcmexDNjRyCSXczDaCsW77nnL3d2CppZk",
  "key15": "2C3XA9z2kt6r8Av4Vcuiu9edsr9HsZK8fAxe5hA1fvjpTSSEzTGGpC1vXoBBwkW9grQ9DANWDuVXTe3RCJM86GPk",
  "key16": "ypEhg99o9YiTT8K9H1EPRffxLt3ZpueVaoUuStyZFCp5oJexSrdsYksxudHAU9Reh4sPqqkXzZamEWhKpR28a71",
  "key17": "3Tx9QXiuX8ZiS8eeWjy97VsyLf85VkRg7WtmBKQGPB6PVpHHFdyFLVmVeHLatuQ1qfZL65o5oGo49pWghiUgtiUM",
  "key18": "7vtePVaF5dD1fReCoHfgqq3gUGNmfx59AXQrVR2acN9PUEaG1Z5zUwcY9BSoHSMNGepJirMZsG2s14JHwS7ZjGA",
  "key19": "3tUpudtUMKoqHsaAayuJKMNHnuYjuT6Sbq7aiKFtHdT16xQSBon23XAcxG1hU6Fj4UjtkAByo1vFSxRDqd6XkxC3",
  "key20": "HYcZhtRtAfDwiNEWHPjCuWW6UtyAHGLxTcc34KPkiSsdMDJKyBs2CfjGnhHa45gd9Bxq8JY1UFjiXU8AvEfJvz3",
  "key21": "53LgKNTks81GVAhbaYsjvW8Fu6yTqo8Nr6U7ah1xKqswg51C5UVk778BBxFJ4AkkYS13fzFR2smoTsSFft4T6Lzj",
  "key22": "4b94AN1Ak1Gvcu2vXVJY7ZSE9yfZKkPWGVzg35cex5yMbUcDnNuyhymAyRf3T3fD6U7YZexkxpLr69YgEpWpXuwg",
  "key23": "2Afv29ucYaydMdBAy1GDtVduZgFg9VXPqv7muYmHErb7KhFvsFFCY5T8xAcfZMdFZFE2QgtuPXDZG7QHntTmFrgN",
  "key24": "sLhEGSbtkjEpzmyFYHfaTwsphUPyjsF83T8SkSqQQCSWUcLqp8dyRYjZpzb4Ay6ziXMPVLSV7cH2j3k9CDighK1",
  "key25": "3Y8A26fBXme4ABEa87keo8Sn36XGqZ9HD4re3dzfXodSefTpdC4CV7m2SvyywatViNwJzpn2aZv4qWwA3tkf4Y9d"
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
