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
    "28TKUTkw3KPgfbuf2dqKZNiRmTxCNrgh5Ji6gZFo7w13vRxthEwssyJV9b7QuJHsurENbTqktJ164UoJWde4Qtw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AHoshfMKWdv2LsAjpm3uUUpyfzAvjKohoAxeRagHxBPvAwSpFfkUjjFMW1QbbxdPYSCyG1eZiURww7MCKw84qEn",
  "key1": "47eqW6a5BSNKeXdasJ9jM4oySMen1Ke4n5t2LHnJ72Dg4P2x41d9SntXzHEzvwGVNXXGDqGXpmNA7T3R1xNoFtHA",
  "key2": "2gAvpFmKrEVws2LdcRJWjkbhrxKCihQNf6C8EEKGHNnHhLCWimFkKNBDXfASE73PabEvixjGpByXVCKagSNiBnhJ",
  "key3": "25uCPjyDR9z1255b7cxD49rPRBrLo8Rn42HdTysPogAeNsAUDmcwiMJxWhkTRviT3vc8yaxD6CafNXsTwnJ4r63Q",
  "key4": "3MTCKfu6SNrd6ABYCaHeK6pJRLNJqA3o4RXnfJ1vZCGJLab5jE8EcXz2DjaQdg7nmNvjykpaQQJh8m6akXQJfwsS",
  "key5": "2XSCVDLbr5rzPBDQUoZXyPs6D9JWbUyn5tPMtGkUdRnbw4L5aJvtN2sRJ9Dvh2tLVoBTfNp1c6zHbgi7VRe7rUM4",
  "key6": "3sCkRAMEtdCCydMu3vmAhtewyDSQ5GMdcjLX1APLh6QzV2MYseBLK1CMmCTinVUq2VHByD8sRAe23VLyyJB1xorQ",
  "key7": "2EHUm7oMaTuPz3PhMtcDNerDJS7eX6xDcJN6Z5LemyZArBe8prcPn5fJpxbpUWTTYtZ3CZnwMSfyuuS5JCZpFPV6",
  "key8": "3VN6XH6du2C9xegVd7F9jcUDtCzFUz2AgWgqYpTRQzykpjNkfthV4QrQt1UmQnDFHSAYMgGHTWgh9WvuFxjmwxXK",
  "key9": "5ig1x3DLP1dpUQGmLTbUjSkgSMtjzLEgZnEDRPYvk2fCySNLonjC5G11bE2KbzWABeM3WxEN4WPbYJA593z32SW5",
  "key10": "5pyUuoSqSBjt1d14nBs1gh3KQ9mfUvX7RtBtRFXswkkvkzbeDAo4phEUzq5o75L6YL9SxENg6j7CS8WPVquWWRtf",
  "key11": "47tM4SRLFPzkGbfKwtvcmpNzSgB3hvHai8osqP7x7RTRiNMWSc428t6BaCa2QVpb5HQrpd1mo1RU7PHTao31XmEQ",
  "key12": "45gmb7MgDbmT4SdxWcTCHZhSxgEdKDwq7QGjfWX54XUfs4bChx1qwC1ohVoGFwecJEm6kCbJoTwz38P6N1wX79PS",
  "key13": "4j4hJL7emGAUvzmLtChwm5yC6idG3bAfFa8Uw8SEeetsvePTKN8cxQJg3GMgCWG9SDSbrem8bncbJXM2h2LYaCyR",
  "key14": "4Uj7QbZDrQTBUpTdKBRWx6CeJeC3zz68Rj9L7nVZa6WguP3zYFSrmLnYuksxHmnZzzkz3epX8zXsGLp4HPfC46YW",
  "key15": "4E6dKY6CPK7EvVo4ipUKPZEi4MHSxJEEYtvNNy5iZs2rbsr34QyMgLAWo1jacXawiZZVKUmqWuZyfdsLoVxWesu",
  "key16": "gakAuMniP7qkKEmMmLanG4MDGrdgj82h8vShKF1FpjqBAih68nCuguSbkWcWZ8GAdQxsj7WfF8MNKvFApxmM9nm",
  "key17": "3rhVP1zfUzqjw6zNGZdK8UM7uEDYTrnkqgSkuUm1bq27uLs3bEeAna2fCKAvatQX3nNpHsXM8UV3LVoZDj91aYDf",
  "key18": "3mrvyiiGAK7p3zqhrcRkmcVqJhZUcqZrosgHwMoiJjLqCRfGUo7wc4TmpDeSoLVteN5N4ZJW7bZxVksMhcQgJBnx",
  "key19": "2AbzdizNL7iocSNs7MwWrCfffmkAaz6jBYpBG6mGLAtHqNEXrBiUEjrnv73tKEv9K4QgrbRw1oGZ7HK8eqMTy84J",
  "key20": "5VhRfgUrLG55f2ERX7bt6dXWe1nKokvprqNiQvun7NRThoBbF6Yjx5u2om672y1fT4rS7ZrTDND1YkrNE4nwCiZe",
  "key21": "2iqYrxeCMyramrLGd9SdmLAuHomCC9ZDestny1121zBfG4JwHErPFWGJBGnDfnpLamaZxjypJJk6FK8Fnfdkw2hv",
  "key22": "4uMY74Yiku4RZiT6MJLKGJK1nJjk63qFgJYA7Ai1i1yaGkfG6Y9CANJRfFA7EkJo98DBenKJwP7CA7XLvaDZ6Gbr",
  "key23": "5AdWgbpKRHj5WD6GKaqYtpVS97wgzTBRhSxNiZNXogcPQvg6ebyfZi1E3EqZm2qBJ4pyXyeowuCPe3VwfZM3U3ut",
  "key24": "2W81w4eChNx2RvWxpVp9f5o9UCPMSfAgQVoRgprinE2sKFMxdgdVFQ6f3DMJ2YnZ9i29ywvFYMxMSWDLbJwBnu3"
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
