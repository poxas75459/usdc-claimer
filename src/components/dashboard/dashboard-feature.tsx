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
    "4dGtas1vEZrdxDyrp4Aii2WpHhQypYNL8bRL9LiHDMdgQzgDepBWQuhMCXCqcJpvwTWeZdRa5XGYiFiF2GyCvwXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "586711LXchwgVxedKQpdcCDPEyaq6p2Ru3esAGemHoFuKiWQhgeUvXG5UeesTCQyirS5RnPYMXRR7aDhdWvxwpCL",
  "key1": "4cmfzoE7Howdk91ZGZZEmk8ST2ZK2dFb6Jc5jfXh2QK9xPfiesL1UgNnCj134vXFyFPvyVGppTvojdzPjHtcCXb3",
  "key2": "jsbt5JnF7LUFaq7D7zn3msabWrokx1e91yfqofdPk5s9KFTKMoUtV4YyFAkKKcJ6QYgUo8vFRtZqH5FZ2VmWYJW",
  "key3": "pis2f4oKoSMMacSTGRpZidkXyVzbcfcnsRrbhgMTvFQM5PNPTPakjidjoKS4kaoiwwxy4XgJbYgbGZmopou89Px",
  "key4": "58EBWj9174RECNwThXScho2odur63ihBfP6hBipQpFsPTa86fuT2zhyUGzp2bcZDHYB1NJ5yaBiwvyNwTZFGQYAA",
  "key5": "NUtbsZ6mJTnNo1vC986dKYGAk8DEuihdfYEapBo11rT8a67EdZyRndZ92v74TtHiY2imExKWuSB2VKo5BHA9xDQ",
  "key6": "3wbVYgQWaqbLR8Z4JSXnk1kc4b1vaCyqWGGoZFgjKdksgXNEBxkQbB7uethZ34uA1K9vT9rQeSi3ebPK9tLYVzm7",
  "key7": "3BM9xXHu25u4xVAVqsCj8EYza7o2JPudkubZ3dNVK2BzQTTD7kavDYpPcNbkxJWmWPuzLhtjT3PkFAibVRibkfkh",
  "key8": "4EXyCCi7sjXr33CGd8kCmiMLw5ZwACySfMnUJvCTVsjsAdtufvWmWjTLKY1XSVJq2QdDvg5UXDkfVeyiTnkDNbkM",
  "key9": "61eeAZC2pSFu2SFbEoFDpcALu9WLhVSHxKPBpJhvC3h5sbYkcveuwvqWLtbzoeoL2UgYjSdy2XxdqaYiC1STS1dx",
  "key10": "5WVX2f8NXqF3E9y5mLtEeCNbUbxNQdxczNBqahJuv2Hh4ZniMvYd75yzaqG7iXHB6MsGHxm2qYgZXZjBrgyLfKzs",
  "key11": "3h7bPfdg6kqnX8hcSUvm7z3hwfNn2J2LhyAYoYFKukP1r5nPPfrm9DbwGDEqsJAjRMh6MwwLq2JJUGHfPjTuqeaE",
  "key12": "34JbaUaMUKTTx89WRtDhAWJuacYy2fziGdUq1vKqnPPt6BDdd39tg7EaMBy3xPxvN5qKniQpTKqYYLi6vBUPY3pf",
  "key13": "3DQSffbwWB8CPCeDZhHfWdNyPkksciMhZEBUAvPgCeKBryivU6kqXTCx8ovrgsY5NXNMrwVE3QMpu3rJC5Lf8odt",
  "key14": "5EQcbC5fZ4fmreWcMN3godvPP5EuGRbTfNf3FCupkcd3ynw6QKv3NT4MyvUmFuMX9n2uGymPr12CPmGF3ijHqh5G",
  "key15": "5gsqKeQcw2HEmb963Nkwnz5FBUpRCvNDHmDC384AXVGh8ZSvfVLFufDuMFTjyqSvrAjvxpGZ9hQTRHJt6oygiZ5T",
  "key16": "2r3uTmDxGsSezCzQD4ryM7vA1H8yfVSSH4VXq4K8GAJsG2icAY4A2eWmZPNDneyEDR9Q5WHeKV5MmVAhY8p54BnS",
  "key17": "26DGbe8mT7YyhmYfWGhCf8TfQRZ928kBia2z2j59BeFa5YocXDqGZCYm9SNrckoSbFVYuiJGYo8gNY9HFCgaCyCm",
  "key18": "3tAGEYHpxSzP1pSKKJMLtjhBfwrSpxHy9q1Vnu2CJKvrH3Xemu2RaDxGgeMPrPvmiBgauoeArndaC3t6HhfX5W4p",
  "key19": "2pZXNib4ax7FRmPGYAQwGuGWM878Nb3SZS2FekcmB9rUe8By75mVDT9X3tiuzuKcEd27p55UQUHep2rHXxeNpEaP",
  "key20": "XUZdEjiKR3dmMrYuQeoum3ZcFocSk5r6pbYPBss3Kq1eS6f1e6hTexSoAh2uPH8FfH4VuUVfgewq2KjwMu9T4UA",
  "key21": "2xRaXAvisykVUFVMnpVekXNqnDMXJS8r4Pbpif61SMrnFnZQnaQwognBJKEaKYEBheg7j4gFtkf8Nt5GL4aZuRZF",
  "key22": "4FNXAbauprfCUSvVR5rEvFd54CKG1PvLeBXGawCVsjV1sGgot1nKCJZNxVkDmw6XE8RAmghzaMvHDSW1fCmKczXh",
  "key23": "ncBSxdFASYawbZyQjmjyExspddfQZB2yoF2RQDbDg2HrGcanpdjtumx8eQYE1vRAQLAog1rvbvafvVKvrvUNf1d",
  "key24": "2JjbRbfzGSebsz6gG8Mzrm8KU8otwyteq1EEFR692Z3ys885ihJtMwwR4ytbvQfnCnNRRV1Tmyk1q5QhyV7sTUek",
  "key25": "5nWXa38WvxU9JxkhaGQLg9irrverWSn6sxYAjhCHxZ7YD7PvVeUHxBjNK9EVCLw1821WwTxZnNWJAP3tsPSEWoG1",
  "key26": "2z2vDezvo7FKcWCmeUxrwNxt2VHXMoGhmsNGouNBiGw2zCi198r7c73BhiuChf6SiwGWnU5WLBcHNtKjHxjHqstY",
  "key27": "UWBU1LUer3uBWxM6XNAR1eu9ZqHPdMMn4XBDszY2v2ooDxfnLTSUwyPZ5Re4DuzEwnZFJf5qqz2GbqQJWahsbSH",
  "key28": "63m66WyiY5X3WyomsuVZtvZpThEfGNRYDuTtkEnKjcHDLwAGJucfMNMrCNPQuWc19pGEMe4ZGfoTx2vRSZZyyk59",
  "key29": "a9ymm4nquCVgeZn6Tn2oY4t8sGANNA8eiGDaFCdtAy3FEkWvdAfYphyv4fj6buWoLUxJ8thjWfxtXnSMMjo9ifw",
  "key30": "iXVizTNE7eyePusDBnQepieMrBcp2LAqfhQr81MVtMkadHWuS7LFfrrxJAKwoXaogoLxQLfmepGT6xPFVy3jmgS",
  "key31": "4NF4R32dwrfMurWSzMAuFKZcdnvJ3MRQqpV3t2rHMURUA8xB4kQp7EdCWo1k4Kwj6DqemknHo5Pdv7VGQxcqKWvE"
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
