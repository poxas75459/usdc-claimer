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
    "cMYSPD33sftZksgV1P2tojAajkVkf2gaoxLDFmMaDsQQvoqHFkNXXBDE2y7jpry6b2R2xpPmQjCMj5ki1BU7Wjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zkupGvA4ED4k5uG72M8emtSuMkHpe4vJS3j74QXxSLwKRQDNdZ9SccMTN8NPRnLBG3psppkN2aHw1yiNAREqyb4",
  "key1": "5f2T9y9tv5v9rmD26dftWW4kQ8cjPzSZHPAEhubdx7Ljgz9o9S66mPsbKXYzvWVZQU1oDv5k5tc9vLLZi1XZq4pf",
  "key2": "GXDazTm2Pe7AnEEM7W57aDXchyn72GJgKqyzW33v9NAsPrs7ZGEGUDjhv1qbaZif7TSoerg84CxFqDxKeU8xxbz",
  "key3": "2KoBsk8x8aKQCjVWdtCb4MEJb1YGBmXbCx1D1voFYDtsuk3wsHTQ8chx5PEem7XQBbB4RQPSuKfQG8pAsLn7n3id",
  "key4": "4VumX36imza9LN7eaFCsKvwhZwymjonu7VCuUj2zZK5UfKr7zNNn3X3zwHjDZBBwwHYZyeMWehQHXE4XgzPQvt4y",
  "key5": "8mwN8EDyc96tSnFm8cCH76Gf28eyuuRuWVBe6YKf9ycM5ZU2g7ZVHRqMDZxudYvQ1PNtmp4WgT9ASsevm3eqAYS",
  "key6": "42xL86pobM7TgJegMEZKFQyr8inbQxCvZnMnLZCW1LuGZQpDPsELfncAJ8gevAayt9jmNgLeqk3cKUsf8mwcvLBb",
  "key7": "31DxpHRwZXM3z2HL2GyD9GBhBdhqyc6YY7miNZjkgQppwKTrR2gmm2JgcXAm8SQAf9VVqNECwrbK2X9DF6tpCPGZ",
  "key8": "5BG7dYzKxJmtzmeAux8PrgzcweeHr8yQBAyTChRzSx2oadjvVQTXFXr3EyW9a3BtjQPDTWEKCAt8Np2ZqGUkSHck",
  "key9": "3dr6LF9Kh8zuR6uaM4m5KGrv5sxqSkSTvCWWmbrbB8CAQU3j7QnMqewgk4GmEVcFLiyT4UedqMa3QfyiD2z4zFNJ",
  "key10": "61kcNEaEHeaMda8NC6g2diMvVNpdbdhA6zZjJW43o6iuMXbmhbGpKupy8aBXgYo7EMWLDXwuERDqLPBUnyhx384S",
  "key11": "32b7X9aMHWqWH29LX8FZz5EgyyNoT9BPjQqSrddWBkeQsHXZPGHkTwCkjsPzxehoWoisTYtn2zYMLfxTWXuWYNGo",
  "key12": "4LiXZpjuGbsHa2JiynFDcyGZ525QTTTUHp6zbXzmxoVJDjThhyZVBdRTouuHzN4rnVRy6ts7ZHjUbSxbaCgVc8gD",
  "key13": "2VHCsRaXmX6Ypq44HDFXvtHWGnHFhrzyNoxw9jtXgQnp1fWb9sX6eUFxfxPX6yC9rEkUQnragKX7FrANnLE5DQR1",
  "key14": "39vuYDSmeyj9M8YgniYzNt9ogVU3a8ncviZ2GqQwHVJRy4SfhDxpZyVGP3iNPgTYZqL1oiV1rKqTau8MKYXehqRF",
  "key15": "5bqy9z7eE6MYVJYWKzp8PU2fCphXUQUYuSPmNfRHFi8GkX4s3Ghuuoi9x7eXBidp1zDt7XTLLKSux4VHc7c6RNFi",
  "key16": "2oLDvmLrwo4hpJGLR5HPHGpT86wztK94H4NpJvh8bnnqCXZCVVPsiXsPK9mmL6CmaBJX1dQLbLE6SixKwX8UScWj",
  "key17": "2Pbzw1gNdL5WQ9Bb5gCTAyorisks1Bcc6VTJwXmqA2d6Puf7vQz2zDxEGotejN7RgVxMi2g7jkR6rhv2YC5N5hsF",
  "key18": "cGA1gzuAof55gFVj3NnE7FP7owxBzyxP1chCtH2E9WFVKNqxMLY6SY4Kt37KimJmM5whuqae9dKQVAsuUDDmBYn",
  "key19": "edH1DubYrXE21LxQJLhd2U46m2W8Uey1a6SNNeNHFjVx9cP4Pi1xD7MtJE3ZGkwChDr4SpLyiUmc2r7kqF8qHJp",
  "key20": "5hzEDmQc6QcmUpuojVYg9NStNYYbeA7Z2EkfzjSYfqA6S3a9rUQqmkr2iy3q6pwGG81tcTButj9YnZDAuTBdSDTJ",
  "key21": "2iNDskosKgqu1dhteRpRg7vamkWwfMtTzKhTViQvtwzdTdyswpeMF9WTyq31TFGSKPeTfVQMikLU56MXUnxYonY6",
  "key22": "2w4j7cMKUcYEnRtS4CGCEhtRTaRmZewpUWNYhvkkXgjjm1T3BsXebhxAq329w22F4AEN1iGLVKRjdeDcvLSaz2Dg",
  "key23": "3SuAjRT8eWibAEA1Xcwjq6rTN3g2ozgqu1V1hdXYv3P5jyJn3FvMnB65Jr1mmv1d3JtBYHNe3gUB3wWowRCPymsG",
  "key24": "55U6NH7XJJ163HSD1NsecwWgPL3zoN4F2BVvBtwLnacy5NUJANUPgpkePdUixHkVWp6ycgur449S1fREkDVU3nP1",
  "key25": "egiaw9kJuN6ZBRVCeahgUzZ9Lc3bCmtQsAC6Jd2gjTtS25YL3D6j6gdpqmtfFP8i5RABPPNK1BttUcAGgo2dHSK",
  "key26": "3s3qAoqxFeyMQPDRqWMZBSoiaGLPrW28bkSbz18uq4VePK8GqoMrvJxJR719ctPjRkYjdyJ9zVMsL9eQQbuj5FPp",
  "key27": "zyYG1tyD4qFs6RZVDHAurfypTxYjQdss54ifqg3T6kcCc78Gjo8PwGRz8WmoV1S6B3C1YqrquMidpBDns7eDQnk",
  "key28": "2QUvtK1cVDygKgFAoLNzL4Tz4zqWsdbLmUB8LcZP3vBVrXanBWaBUFSZXcgpoyzEDaMLPJmNw5Ah5izg1fZq1xZc",
  "key29": "38gTvNQZM2PPC8QwCYkyivYiFhYcHmqNiXyy1TQcy2KsXF7hWCpBf8vdktQTbX3e6xTvX4nhvU2Qe1VNFPt3bmS3"
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
