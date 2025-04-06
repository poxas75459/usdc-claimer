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
    "4swAAfDMyRYbJs515UG4UjRtcRYkkxBtYctYzc2V9iYNDKsCnnwFoPZEpHLQX5QY3ZFBXxYuf9movTvphRo23nsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UAEH7cFF15PDcDMfDxDc1pRcbnWoQuRq6GJxt1RkWpHXQ4BaSezg5f8SPGhGTWqbskV34RJoWZbXKWf5uARm1dh",
  "key1": "2yaGWYhZzs45Lip3FzuiYc8NuTqJoFTiLkCuuoE26kxXD9gTa5bp5BJTamQrfoZ7wLWvNRGXd4esfyFMwyP5k3Hh",
  "key2": "54mTYs7GkigqiGpUCZTfvvXveWCMenHpMwvyBR6QFEZCH1eW3dbem3iFnourr3mRzgfDYFuehsQFhK2tg44DPD9b",
  "key3": "2JLDoyQTFhJTTUSerbifYWB3cRLxYPXnaUGJ4LW2w6KY6ws6TNs33GevFqMbVREx4EmnE5GjrPAXbwvy5CZNeV3c",
  "key4": "3zCJ5nYWHMveyAmFVB7rvVjVCH3sSF6N2RVNrk8pTsYM2Artm4ziKtK5ShyfqXXSp2EAbKeE2CeyFWMWUW7moRh4",
  "key5": "5RY7UK8EwAGp7qjnvc79paSZgtaxgHSM5jJAFwAkKHpUymDrKeyG6oXWzfmq3Pac6swjnkgz9FQmJsiyT8dZKvkV",
  "key6": "61nr49dbiTjfE8KpeP427p12BbAbfWHDTozXKfijB2e5VurvAHeXCHG4FSMxsnNi31rVBDhdfo3b9LHp7fiaeN28",
  "key7": "4cVEAnTSxqe8sfXcYmVM8GbWqhuxA3J8fWjm6TJok9Vj9adwSadZA8G2ehtBHBiCbzrP2zcKMhrZj2P2YjJqtQSc",
  "key8": "E8VKpjS9LfmqtJNV8T3F2YMobG3YXHqTxe9kqpcmbYNigj4s62nsU6nmPKkCPmMrFPEfxSTk3noHwxQpDd4FRfM",
  "key9": "EAujBqucN5ZYHbUo7xPWgd6zmZAx9Ex7KZZ5mxS7VqPcq6qVJKJt2iqtZ4eiKp2BsQ6DjWo45UhpdnPamEcG86A",
  "key10": "4QbYmbH1DuqMpFvrdne7hC5RWJ9BeNvYb6N24nzDZjSjRVBia4kGcV7NGfjZjEL14NhBzmQbxUBrYc5y5VswEZrD",
  "key11": "4HxmNDwdgqzmYPwJxXH3DtAFGJuA3vsrTPUy8dBYVJQWPMRTnFMt5rLPpDEfxr8VwHhZLF2g4YBWqmfok9ER874H",
  "key12": "5EektTG7qnP2fdLwwfC9ucydpbLbC9uS8YHVQH3Wf9wSNsNTmqwHkxHZrGP266FAZQGZnNEFiuUbdPB32opsyLkb",
  "key13": "2oZ78mKJiMTfKVbbZvJNyMet3u98VhGM2LQqGEQVd4nSNNjhpgaibS3v6469Ls5u2eXYC87BaQx2qDPkhcH5Ur9F",
  "key14": "2tmtaDBroTeeJKfF6WmeFLBM2TU2gTpMpKgr6GZNVebdxrFjuSYkhpvWkg6oyBATHM9GwwbvXJqQvoPT1Bg3CMSA",
  "key15": "e2XKaomGYWN8QfASx3SxGTriYMeScvypy4qfZbWiPHUP7TnU8xpEKbEqJzLTBWV4p8bEZxTitJKDUFJedqREBnr",
  "key16": "4DwWbeYvvbEmsG43V2fNY4w5QN1fZcab9sj2FQSsBukvT53HAXCMCDBcnhbuaP3GNfwXLn4YRHPKDkqtq6MPz6kZ",
  "key17": "QvsGsJEXgrCodsH3CahHegEwumcPhSstTFtK7xDgha2cRX1DQtMyJhWqk9w21rsf385FMV8SNaRQ47Ub6kkd1tq",
  "key18": "3CmX5GTxzRdQuJ8cjK3q2jCJDut9ESmM4YD9dQwgSQFGk7kAG7Dbq1mRdAX1oyWLyELRhLtsALdts9j4dvcQCePB",
  "key19": "2t1kBVYFV2o9UaduL9QGc4ZPGhj9qqapm9PGeWE63CbZoTitRSJehws4YykGA86JvB3Vip5NT4gy3UqWZcKhTGKA",
  "key20": "2X2MZiBVCSnQmDa5USsZDLEMJfr1FLk83ncB6tfCbPMDnDoiZ6wPSKdfmDRcb2AAEHj816FavcfwEXF88ruZdBaL",
  "key21": "3QG3FW77xjJVeXwgkZz4hYw9yDEYegxSAYqCaNr9ykaE8BsBs3DjU8LkiewdFEMMET1822msVzUzz7b5V6Bp7264",
  "key22": "5FzaFxUTpZCz2ieLTtVwAWdtwbBsaHSZf7bEfJSG9nMqymDQLWTGYUow7r9Ton9iw5xvxgug7FUf1dBfMDEaaYgP",
  "key23": "2DEr2grteMPfrJt1zzwJ8rTfQqJcYfr3YLJBqJRqDmJUXDG11c9ESzNC2uFoKULrngmtpBMyfBm6Rf15yWSu5JY3",
  "key24": "57s4ZyD4mVW9vLmmK9uQyZy9FZatdgqx3n7Bk4yeEDfjFN5ERm2q7adyXZVETxoz6g3tnBnsJfvevqmUfdhoJhbX",
  "key25": "3UDe1R5MEbo8fQasDxkgybLshwCjJxTtQo132wHMgQEgurtraczDU7sWqgmKTPfH56p8hy9B8qxisB6iDUz8WmNK"
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
