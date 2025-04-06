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
    "66oY9BF7pB18XZUj5TRGQRBBNnfdwbBoHXvU4s5hpuhZsgy1ptPXhVkxyZmNMsCwb7StCatPnuoKhuAUftzuvukb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jf3WvykCzmxzABMEQPfwjAhSYAcpyapfLg6j9TR2KfNsvBZBTmZMKuieewMguL5TwhDy3zfBQJ3Yo382m4HjSs",
  "key1": "PFQ8v3GVYzkFpu3XTiiizpwxcCW4tAw8meujPDnPaSVbaxGbiwBr1eBNmuLizpgQBNSSLt53c7WUER8obuTWPM5",
  "key2": "2Lom1iHafbbCzJ5WMEF2arJyaM3Kz6t1bMHJEiz2dZa5t5APHViDkbhwRx2JPLvwkvquyXiRiqZRJrJ4xm6hAJA8",
  "key3": "aENzdeRCnmStTin4fXLDE1TLS32WBxa5xy2yyPSV9rJu2Dj1uXd6MZzHFfU1n3KiovZBzBBETMvPgjFCsA65mv6",
  "key4": "2BzFCdDamBYeokdUsUMZgojPrb3dHgMWa1fZ8zY1LQuKnqV4JipxQf7XM1gkr5sprk6SyDqroeqtSVhmicd8cDBo",
  "key5": "2papBr1qcFkDMgG4AvSaERJSiMr6irMGnuXMyuqJhDz6hxNqb8ha9SQ4HMAAa9z5hpLMGQN6FNDryRbKQNEStcw7",
  "key6": "5DUAKCMZv48sB1Vso91bcNqebruJA6VWCx7pF6JHePxFUm7xFo7FyG3F2JoAdqUseYjrM9XDc2DBuY1zRoca8nQv",
  "key7": "r4NYF3CG4qHc4yvZ8V6QZ3DqayhnhLrhkZXFgavi7De7hkGVkFc8hShAxqeJxANiKotjGZ2LVF4mNKNgUbY4qnN",
  "key8": "tFLMFK5Dut5e7aE3g3CKYjXzK8mF56h47gUvVAkuRJHVxHwAS3btrxuoMxKUEa5bMXUput574kbByBWCzrTUSuo",
  "key9": "2ZfSvDSHApEomy62ipYVCpfLJ4TL6vsZPDHSB5TP1n2G2CWreEVWmoQQpWUE4pKo7396UXaYvVhVQNzfga7QXn7g",
  "key10": "3AmvPstuQPcUmCVVPv7nXGA3k9Kp27ghVEuF4YmHo3jyHXaJFRg7ZehywcTd1j3Kzw2ocE8daASiaXJzEgFTq5b4",
  "key11": "2sWuge4QBKhAGnTmn8ZYhnh5oGPHSPo71tBr7WPn4RSTcEpQvf3ThXKM94Z3stb1UbUT7sutvHGdLikwmpDRbnw5",
  "key12": "35HmtBqF6SLijkmMnNiogCohNnVLyDREjEyn1587Mby79Bga6JVhgG3TeKoEmaevvFXYphscN41E1Y5XVXUvqEJU",
  "key13": "5UxC9v9DUVA4E1Vn3tgMvstUhpgv8hUDhJBHoTpuiNNtbY6Kf2N1shUPeTM7HyrUBEmX7WenWtxkTJQtiEEXVWKV",
  "key14": "27uVpAEzJMoXGTFxg4K3Fz54boo2BPprCiMzn8J9X2HNAvVS8jHK7nUjhRgKDybDaXXz6rPtUZpGeo1ryRdVCXbu",
  "key15": "21EwzCMnTz73a2QBd969ue9JhidhVC87KpZeKPDnegxEPKwdeihqYQzPjKqGkewAvb9pCwMPz4HSHysK62unptUq",
  "key16": "2g2GCFXkaMSALQoCjHxwQFWoevQgk4KwJApTUEBjsywWn3nkbkva3GKJgs96kpEKSJLMoPcSfwAdCiqHFDMgdido",
  "key17": "4ZsFbLma9dSEQmnpYvhoGGz1q5xRDDY9PFRjXDm2fTjZpVmBaw2N32YoEWmqx9iPu9bdvTTazrJL2xP3CxyQxRia",
  "key18": "3uUrc9QaHjaPK5CWzjHYgzHSNsKfEuhUfZqYx9q1nzZ55JvbucG1uX2gFNkRhgNPNC86cwQSQGaGi4Xc9dAXr4c3",
  "key19": "59D8Y7F7iRoKEgHnRfmEYUCiwDAQKXfgwPJ4uDEuLCQzDAZBECdwH4oZs4CEH78T26Vd5VF7EVFqPDxxH1RLXNT3",
  "key20": "sSNvTikeUJPwDu6ZJ9HDgBtnHej6fJLGyBf1RRKKgce5kn2pGPfmHPG1mHpHhBBXs14WTnBajuexd3JxZGQn7AR",
  "key21": "5qpsKSap22jTCsT3w4d3GHpUaBe8SfWp2WtNffW8B1FRGDY3MJweWKkqM4XfXDTqE1yDF2VgFM3vnWpkQxP1W4gg",
  "key22": "53EKtAd3xaQBkgjmkF7HfySCcuMCjfMwqL5Yqy4osMW2Zu91v5GgQqpXwGaRLfSX3GMWFi6JZw8Q4J1KntiZtRAU",
  "key23": "3bBMoHqgX4iWtUHsUrqbEK63hHzAQMBbYAKcgjjwTLBRaxtz93p9E7b7Cre7zZodKLfc57i1GREF3q7hxT1VBQx1",
  "key24": "3W2VsmzXJLCjLdjppzA3fnw3Z4sxHn4vTQ5BWYRj1ndqcKvq2NQ1sKWYGS7zy7cdT1QRDzeGUVGgPhkPyQezFeuZ",
  "key25": "5wtXGCYUa85JxYKKaLAybVkF9RDWeQzpPXiEz9ntjJTFmzKsGauTbRyrEganpjsgrxSKphbiWspXu8GGv96Qrx8P",
  "key26": "48ABoSu4mNxuY87rKyof96WwQktZPmpEQ9TG6zPGupoMTJnSTAk5cnEdosCRAbDhDVM6XudhEN6qZez9ngr5Q36W",
  "key27": "3KavQcDFzeFms3hV9K68z1nttskBFWZM1EH7vbcsHajwnLbqvfqu5J7GS2XCf6g6s4Ma1mV6LFYsgz1CqXGD9t8x",
  "key28": "97Ua9rPdwxzpuzAbaurNKRmN6V24fWsQXvNnGsLiVaectZasLBrnpmzbFxToE3DEivfS1cKXErpZJ9EpbZuA5Uc",
  "key29": "5k2qTyXDpBxaSXPENhnGd9tXZ6pEfF7Xtkif2cxBN33cXMeZ8MsYMKKAvG5smWK7P5VFhiWH4TgZiGyypA4w17ET",
  "key30": "5ByhvraxFc1V4unEcNcdHhE4zMAEiwvyywRehT1W7TN3T5KbpLRRdFRNQR4Gk4uLi9SzPP3Hpv5QCEyziAKwKpzP"
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
