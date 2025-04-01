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
    "2ce5GpEQLnTTAPZnq9gy53imjp8NMBNCdw9WmAVsvfDDYJocCFf4upPWyHZw1CWQCB1Ls78JBm9UYm2JpDKYcUP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aWj8X67WCCh68BA3a4WpSRSM3129UghXwacwE1GsEKUvrtrvaPkrQtjde9nAA3r1ybpZB2T7g2W29iL8Vwgp2Az",
  "key1": "4F8GvuJ8jWU6j1SZgmxTZrkpvtzZmWinvx8VuBXVHFfQSTaSQxvbZVrJfxLc2VrJvPSW2nDVaRynoGHCVUeqkj2h",
  "key2": "2vbvmC6oD5dTMmgfxdCjPNzfNW6cztZuSWgEvWMA8TXX5HqQ14yvYhTCURsffuQRLjJ3XrDvJdChMynTsLtUjZz1",
  "key3": "3ijE38cNjTeXTHcnZE6sCcDfCqDY68Qk7feMcNcyKuhMCoTwjfEM9z58Zxh2BKFzVoysq5gQZpKdfHbmL9svbpTg",
  "key4": "5wZAmK5T3mEM9CsAR6eF7TDHrBfnegdv7qtpzHSDC8WB2B5PCp8EvBFiU23eEfkfAsss9phwnkW8ts5CLA76JBBx",
  "key5": "4EDMcL4E3QKsTkQjMMQbtph5xaS7CW6CgKLyFapnvTQwqUU4qwgVgfp7JKEgm79LTQD66jD6ojyfQymgVbvNrW2U",
  "key6": "2jM91sAY9bwMBatNGyYL8HcyVWLSCMifzTLDJxg9NcMRwVJTuY9F8aMZqFyMtpyzJ69ziKF2T3U9YuhwqjwshB3B",
  "key7": "2jyGndGFLMQkuepY9pfSbptNbq3wpAYcwNkFP72szav5ybC7uM6porPdUubwpXHwegNbEBiWWWDsuSFAGeZgE3PV",
  "key8": "ZH6839qyNhcxxUnu1mHNcQSFwG5zU7pZEEubUsvWki5VXbofNQfcGRhCEbTksMKELf75CZD7npUMe3eP5bAis5S",
  "key9": "4d92pgWX51zEEjR8f5X2VCK6uHnqAcuzcXCtVQyh39vdCahmxKqJstSQLChETs1zddH8qc1AjWJ2fxiXdZNE1aNT",
  "key10": "2VfytuqDWS5c7eLYeXQu9WBoPwn33feWuyRAoV7RF8eUTHu82HZVYLD1xqFsXQ9F8EhDounoxpG3XaVERxGNupy8",
  "key11": "2Y7nbvZCStWn8XAUDE6smTNukRVcpaU3bespz9QcHU3yFhiji5Nw88LjdmwjizFx2f1eXgJZS4TQ2oMt1tyGxssB",
  "key12": "2p2mF3C1UwXEVeTPrJuZyYRzompHiMZZeTVqfnVTGppQv6c1rA6Woo9ksaqjpydAUsqYHHy1WKBDswq5GtkRjBU7",
  "key13": "29zj8LEQgT8DBcZs5w3bQutZuJPgmko1VmiZCWj67tprhVPCE16Km39riGwExHy84TaNxokk3XqkMoLoKbREuLJR",
  "key14": "zjDetKrvdwyWq1h4WJcoSdpfrpTzsuotiUhxDqeE5NpHoce3GFkmzoXvBC97HdNnSfqyWrJjqSmfak6x63NVQzz",
  "key15": "7UpHjk2G6nfLNff4mm27kjupqXHuiYFFBbtV1EbNiP2Tak3MHhvjU3bSWZtYZL5sRdvRAn7GpAasY9QekxFjRdK",
  "key16": "4ZjVgKv9BjimGvzn7pzxVUQ7trXZcAJgXqbHPbEonVUCn9qoB2Lky3EaE2ZcJHcnbepPAn1BJ5h5bGibf9H5TQyb",
  "key17": "32uuGgGtxTcSYF4ZWMf1jo2CQYpS5FrwSHmxXCiApgh7kNhZSs6vmcqcdMmFPo1ozAg2RRHH13D6EKbcedtSE3EL",
  "key18": "5k6rppL8APuh4FGNtfA3m9wYKg9J294afKi8AuGYxDe2C8EMwpoJ1znsSbrjyZQQzhK27J3gHNsvMv9h9epfxWCM",
  "key19": "cVxtrfWYexWSnzbgDdjzbm8yBL3Aq8sKiw6WndkirrTNo6fUS4FFE9Nx1zb8YHCLQRYi93zi4UWLkMg7uikQpsi",
  "key20": "3CczRpFNLA9aonDLpFRA96AVtxn5dzqgKFVxpXLfAnYzwV3AD7xGKVw1YojvcHhnL6FiCV5TrBkZc35pZGKvK9XM",
  "key21": "3DZJDTRsN3hsKbftibh8QsLDP1MnLXsMuqQBJmnARfxB1NJNsJf5XMNMkYMKXvotC41FQwZwfAtn6TaWzWBEKz2Q",
  "key22": "5CArFp2tehEvTn9Xz4b2YUARhWcFN7VCJurK2D3ZFBaL2NQAuWXiDue1E5wciRMR36McjweDe4TzvpDFE5ZgbFJh",
  "key23": "zUvmiWYfRq9JBr7pna2a79uvHXQ9xTQcKXRCF7RQizx3SUJhgDVUjvVsr4tZkDKAZgse6uwSvQwZUsjGEsoaBtm",
  "key24": "3b3KM8dr6FVe3pjZqemTkZ1jwCLEgdZdMSEnLGqHwuA34gX4hLaoKPdnhGxB2xPuPpK6UXBoykRajdPNHqs71ySg"
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
