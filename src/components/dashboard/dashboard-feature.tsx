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
    "5F5CnstbF3iBmp8E33QP4JvJ5LE6FrWK7Ky2fPpLuqqLpdn1WSiBGashz212PgerJ8ZRoSeCKw9g2hpi1js4pqDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Du9h44BsyYYqkugYBHzMFS7DrTGjDvumMxxfeJaxTXRsnB4icJhh9D3yNEgP7AQDqEjczp98CE58Pi7jMmuq49A",
  "key1": "28WDPtk3a3mRNSV63xoyVFTRtvbZVMsMvwHBHh6myhmkjKrijD7SncWGoBwevinZMC8sHWycAbAYZy1nsaXeAuDp",
  "key2": "gKXWkGgmjC8xBVbj9UxKT8MdEaX4pNPR45rzEeE9Zt9rZ1JSthMkL66zXWj1yBwnPFVyRTkdKZTP5R8iLb7gNdP",
  "key3": "3aafTr9URXtonG34iMRSRwfuMhxQU4whyRgD6wSVLTTqVsCGcH1R3Kkk2Cy4hLkPQVyf9gQSSnyxLjfdgaeDprsp",
  "key4": "2dSCvgTaG134Pce3RfWQVCAdHAKewARhe45bsC7Y2zTTMbTedLTQzS7hECfsvdeAME6mf8V7GQVPtS7uEy9FcGyJ",
  "key5": "51ttzRiub97PH6ARAvngxR1biLqLZtGY7Y1KjbqdmWSVL3kdKHeTAZ3jEQm2Q6X5NghDNq51H2w1cGKGpMuM6xxP",
  "key6": "t8y4PvTKsMX7WS5darviQj7km7imkEi6XWQrhuXtzz3yYEcRGYXKs1VhszWGWw44K918B34UxBoFpXGBe2QV8uY",
  "key7": "5vvnpzwhSeKLSqBRst2g3WxfBWGe7phCBhH46DjyEaWvZbVJfn5Qo2Y3wdKU2VQ5ximYc7YyKcLCYUpXK23Z6VfX",
  "key8": "YwbF4wzHL4WxX4S7ACdXzP5Lwwt3ii6sRdR42QcqaVFVqFEkobD4qL8ofeu5CZYB3RoM9rCsL5g5G2H7F11iujR",
  "key9": "mMnWedFqeUp46CNQFE1cJZbjkVFwLntabMRnDkkVrMT4kbyocp7smuaHa8KpzhLZLYt48j8UiMayGJjrZfvZbk1",
  "key10": "3mfbCKh7q1eRSndncR2C6eVNfCS6v3tgn6RM3XyPqEXMfv1semVCW1MCCNtPxYGMmUPCtfG8p8ziJjfTBu8PXj2Y",
  "key11": "4WGDv8TmF8H7Apvw7Yc2qf1JsMBsY7TQWUfwpmjsAeo1kLjLrTnJebtnf1B6WXM1RS4gGLNxjKBr8ZgZuSK3xPKU",
  "key12": "3hqLV8Sycw2P5QFy8cRzN8RsHjvLGvbebuRAZMdJFgJx94njqRyNpFCktAz5Q46ke5d8tdeoRpH2Ucdgm1UBDm59",
  "key13": "28CZtoJVKiDHkVUtUpKmrHDzfDHznRLUrepr5ToTftuTWHZVGDNEXu48BdKe3V2Q73AhhMyUdg7gVZuywdTzPJRh",
  "key14": "GkFcJZ2EE3R8Wk8pyKPigjBTBUue9Gh1UhJAtKtBy7y3NnV2aRzVWvJd4u5AuLqM8iPpL3hsmmT864Z3aJQQCyy",
  "key15": "3cJ5GctfF5585dRJ5GzK96Dv7GdBmQqVZwsrAX9UhPuQJfE18BKqFGSGWjJPmg4YaF1Cq4HpbMhHQcUv7yN465fz",
  "key16": "DTcTGDU4wXM4cJHrG75P4AiXDr531qWw8CjXjMnS7afayu5mF9UkknCv3W6fN9MjxFKtBfc9BgTCaW1XLUciG8S",
  "key17": "4Xqkz6AQF3QDBDC4GGZUYsbgQATkoHZh3MiijW93RmZxuxb4ZDN8udxHQkfUsJTgRPXFV3sdPjZQn3N1yqwHn8bt",
  "key18": "3TtPDP4p1K4CTAZEXuxdwEGyRW4EVRA3mPvGmpKLJPvw3qZSR1gk365Wz1FJVPfDqfCAcnTkQsyYia2RBkKigCtj",
  "key19": "5sko5mM7aReYyBywhj26HK752ez32iXXzY1FxGUoUExyh9e6KTePGqi26x1TQiRsjLz95YkBuoAJ9Ad2t2aGibwr",
  "key20": "E2iAH4wpsCwfRBq5NfqR2nwyqQa6CKbLNqzfbTvLzE3tgeYYTzaDyPMJJy9P3KuhmosPMqETYHPrzmffzoQpe1a",
  "key21": "B2RLFSPMZrjmoXqDX8KevLvswZVxKd4BfngTVxESzG27VUPW4NrG9TLX9xLYUwyHqQdsdsxXBN1NpZs1SHhruvH",
  "key22": "34qLmyNV43FgF279TDhnJtDz3xGUVyKSpYQWSWKoWdpTLhE9o7L728jk6BmRNMGrTpLCE85WFcaq335Kqtyff4D2",
  "key23": "KEX4kcayKGSv167zw6iv1nbC5KTZqMP4UJbMKKQtNKUdgM8qw2Jmk3e1puNaRC9nMHb4CiYLiCwsrL9SxBx7Kaj",
  "key24": "Yg1VZ5TCYBPDdjkyo6pZgS5ixKdvMCBTSiamE5rog9dzm721bmiY31TVoq7f724w8JcufKQTmuxvmPc4GBep8PF",
  "key25": "33W5Ae7X4oiHqrTLchaf8SL7waPq9Zpj2oPKgEnurh1jx3Cdk3WChMG4R5aLCzHmJpRZn7LZyhP866PW4y9W1WpT",
  "key26": "sXDaHeG1KUtp8NAiYu3U81dppE6dpgvBwQ3M1UJkEtZaUq75ozLd6dpUeoryZ1Jp5JgrDfXuzujixiP1NTSAAup",
  "key27": "4pWvZrrYichWaNaV5cxJmB2BqgvBdQFLGxu7mQu5sYjgWNJ9wyxtPYiDcCZaXPWeWXopUuP7pxf7i3C4QZwHjXBK",
  "key28": "TNVs2cYjbhcKZTFVAqbcCa9CpPHEoYHn26gZXJXKcYYzQ2WVuhWUhUH9t1Y5T6Vfg3c6q5Cahp6CTBCnFS2dR3n",
  "key29": "5ZvwV95L43KDWg2r5n1UtMKLukduuH8ZgWFMqCsRMpL5BmxBHbwthduoiYjusWtyTc5WhMA7zGTbfUt7BRqzoJc5",
  "key30": "23AFqiur39poYvLvVn9rwi2AJ6f1gCNHU4kjDULHbJB9ajzsTs15fkZs4tHTVuDKj5giN8hEv2oNAFFgm4rJxq4s"
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
