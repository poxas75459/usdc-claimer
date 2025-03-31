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
    "2waVCXxcTdegPH57Tbpwufr5GgCDR4vnuF7vCmJstxUeW1TFaVg4n3hXJZEWVTZkP5AMw5q7MEyqtV99E5bPB9UK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XsvV8UGoypHkT9KDu2kJL7dCMYsRyagDiL5r6ssNHWfpvWW5jCzzfGv6UVrw6VRuhRh7DGrKCR4CnimQxY8KDFk",
  "key1": "5vPPcsqv5k1WvHqynqzxU4UJoNVnzZ9LPE941Fj3F8XizqgTnnhRggGn2dFoxEZPq5bbjJdRjjMExFtjwuvcFXdg",
  "key2": "4NT5Tq9kbepGzsca41JGnoaAJx357LHJGGkUysAE9E5keEq818VS2GfpD1ttmYENXNu5tQ1JJ2z5EN3J1s4mr55C",
  "key3": "NUFFq9wZTeLR7ngo5jHzpiVhvJsJ325c3uo8sNtiHcnWbMKZqY9jK8AdcoMJ1uGRHBqFDVu9rwLQ13Mvo6YFoZ6",
  "key4": "3aAy7T3z124upLDEFX2T3zevkCchu78GRme6aiY7Yzs7C5PHMcUagT85QS68BJF4628tm5cVpGXoUM7XVHFZxzip",
  "key5": "tqRYZeEpzHBcpmAC4eJMbUYAQVPpALTgMMCGucFqrizzLmsAuzqipCDKnGrdpeYiQRCacKREcXYoVA1KAVJkM2Z",
  "key6": "EqVHBbNnvKoDpvHDrS7wHbR6ySEJr2xqiXYqekzkqHUugsx1iQAFXLzHBtpg9AEwL863bBemLSp3Rf3x3mMBLVM",
  "key7": "48UiEmQ8cuc1uvVXwS3czxEs6w2BRVKJGAJEa328KcbUKkuPt2apboPFRKrB7wSc2kD86SfxMZcwUUzQNMkaWngd",
  "key8": "3AS7FNpxK93RAfvHFgexCCQqrTFKiW8SQiLuDYTw6XSKLtErunXLpJCRTDb64wrngW66u6E4kqV2g6umYmarxJpf",
  "key9": "5VYxzuE4uZNwwW747CtVRitdaPXUBy1xFRkpwgpN2m9LaBcquUDo4kyfYN54y5L2YdUtqQA5gFUJbyFHhrCMrQue",
  "key10": "2PnWh45XJCnYRoRU1GwCwcpWjn8qn8aCE1s2wS3SfDboUcu2L727PEFwbfTYE1cmFPAdJHhPLJHDgQKqPcUGki5V",
  "key11": "5zAkX1BNHiDH4dGEbDMiqaN6eaeSG924jUAuXczHwu1B4zbQE1Z1ubwu6rULopCPNWCgNTMph4LjfcHb3q7hXwwJ",
  "key12": "2ygpxTEfAHjfyKbHHPZEbFSZrum6tNwWtJX1FtuwRCW2QAzCAxkSXr8qFmRDwMmULPwxqoMiLmBzmeqKD7JrKgCM",
  "key13": "5e5ezNBvY8QcC4qS4FLZPWGHAquyY6pe56u7p7e24d6jqpdSbgxa94dWxMFdrGJaaxmAN8a3tdebF4tbY6hujBm",
  "key14": "3cG7C5ECWtp8maYnZzirnQYLaMmA88EtYcJVtMKAWJZMqKxYkSeLH6tvrBtjMd4cditRakGHNv7LfSATLuWKQbT5",
  "key15": "5Boi8NiGjU8AwcD61jSXCaazdtba7STLFiqhzVCZVp5sTngrArKJypERhpFybY167yiBdbkGdNTwNtaTtLe8DpGu",
  "key16": "Hcm2kJmoSVhfeciapH2wxnDwjFsAdCQ7ey9T6qC27qSKxgr6yct8VNV7BGHtZ7QaHhknUY2JbkNdRW7AJERWH4N",
  "key17": "gbDxZWgW4CZDM1W8ZQzyLp4V1ZQ8NAjjdu3Y4p6QP1xMN7c8DQ1X13dWgVi8SbihLc1ABxDi3jDJ3rGM28dr7sr",
  "key18": "kdYNEdvr4GNshY9n4YJv5hxLseyTzm9GhEHYJWrV4NHvdFHLhFg7poWXZ31XpuzpdDBZbEW6TXxN1Fwwfq7RdtP",
  "key19": "5p4uN7rqok61KJZkSigSUX2xWvGFcC6w6nY6Ppu1oLkuEPjjRDGV21nKo4o2wAzKt4VKLG6wuLSsssjd5Zog8tGT",
  "key20": "5BV6qG4TUzWxsjnJ3Y6141QU4JTMZUZV72zNbCfK1v7KZ82pMSuLgeLby19Mp2j2tpvP3iHCcvp7KuM7w87fGEwb",
  "key21": "3cUsCdR6uh1VvL9jjUWDn3tWsvYNDMsT4xgaspaXWauKBmikzevy8RaaZd6cv6Gj86YETmNbdCVe2kXpjCpKeFw5",
  "key22": "9EXt21DBaczT7VkMFFPJgzkNWSqf2vCMhW1yFAmJCFwawkGwwU7ozJspgQz4tAnQuot1g4g6y2HoR2Ejsc2bEHc",
  "key23": "2Z2heCfLexya6Kf5J3V4cc5oEWsri9Uyit6WbcsE89n63zAqiTyjycPjtMiADV2wH3p9rRJaUecRJmToPwXqGg3f",
  "key24": "2WCFEforjAzZwgCx5sHf6oegJZRWeC7yPn4dDeKe3NYsMPfLFVSbvCDdKbKxYefAzt4o1GpmYdicMuJk14Yp5qqy"
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
