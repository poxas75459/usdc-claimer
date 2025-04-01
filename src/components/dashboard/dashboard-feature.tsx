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
    "xtKPpXzpibTiZ22aWRrzzpHctcKrBSFqRbJwmmAejpaYbiDw532niBWmyVSaKYB4aAdqHWVdbKcmJfRY7te8EeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36dqAEBUHkQ29ECEsASWn6AyJ3uSmK22RtSDKtNqhrJxQMRBqHkzjW3CcrW4MZFpjKbyfhGnzr1DCE5kuQhY4Zdi",
  "key1": "2Svjbq7DWQJ9ZeDyTEiuFemvswqx9fosmEpSHTHNyBHwTLpVe8gA8qNAMhmYChfdQsKbc6kVpHMJsntNNnjenfHe",
  "key2": "2bYkvzzaxL3RQsvuM5wUdKBE3mxw3t8hZn11EQyn64VrG9hDy1CgSYWKkhZBWYicckwGvXW2QUjAUWetR48jqvr1",
  "key3": "2G6q9jKGbWq5hjYghT2ACNA4ZRbTcEDELRs3BV2eRNopvamNmEEu1SmMSPCYb5e2CUQtfExgPAGXWo5tiBNEq6FG",
  "key4": "5nZ56bRogTBQXk4kFmdCLzC9aH7WbDujWHEuEQqdzFbx4aVzzNSfhLQMk1vRos1udd9QmetJeu414h748u7iYFNE",
  "key5": "2qWLFea9J9AERJ8NXBZS4zK9cQ9fEVuYxfCs7vpkZX3fy2Cuiu4R1UqcyNB81AgqdRmFWQZuchxyu3fPihx6Mgvp",
  "key6": "2DVd3uMMuyYxGinnkSHw1EDhuxXcU2PNGsvHXU4tJZtLcRTYrZqCCsgSiEQBNVS9ZnYtGJ8rSEqK9NDWknmywFwn",
  "key7": "3jZscTBUqYfRVd91ZM9bUZzTcToJ2rG8oMTfHzaaXed1X7Mh7xUkUeaCcXsV8HXxsMrtWFUwTgodgVyA4MU9hnpH",
  "key8": "61GUotekxXeXP6jfj5Ruarf1JPrYUpNCZBE9wmRk3tNiSqCfV6p1ANH68WBR5VJBG1p8TfCWxoKDtr54GDYpDW4Y",
  "key9": "5ji7NfPPw4923Ay7k6RtyeXdUH83RmfTSbPgVivTSC5uTwBchE4WQVqCCjghD3tS99yLyLCTqeGbGVYCQfhC8WxJ",
  "key10": "54nZtUuqRreACiE9y5sMnC9WLT7TdEVo2z12evQYexDHT7mwTMt5aKLdVFZpFMhMdKgwcr6FVWv2b4USuqhULgX1",
  "key11": "5xQzp98CQ73pghrVWumjRfHyCEyz6QQrKhcfFRoEMBYQ96isSMiPgPzDCJZHZsVYDvKuw1jXgSHwCxU2QySgyc3m",
  "key12": "5qU6Q6i5UNbW3Gj3zFivNdX9pLDeRE6Y1CDM2RTUaDyBmoauQ6zFRLwW8woxSRoVaH6KLGJa4hnde6xXQ48XuYJg",
  "key13": "KRhbdMAdgoxaT4tW2kJNMBg4VegcHqiHfBm3s6qFWHE8WeyJh24Muc1zC31RYPsHWsUaJxd3hgmXsddyqS4d2Eq",
  "key14": "3z3kg741xwH3xRUGn2WZD5EL9KxSTYfMzFWx5rC7c3zMCJpbWKsBTA4wttbw7jLy1BfxDkEWTVfBkatUwwTLPbsH",
  "key15": "3tsWpY5JX3yDNJPpMLGY1dmsVdMf5883SZN7t5rQWVNiNafXZLcLXbcb44mCutghGWYZfD1RX1G1SpEFfL5ihDjx",
  "key16": "4ufM3XcXF2ZLBC8nUYj44fLM9SHqKGeb4aMcCdqFXT5Sn1ehKPWZNnisMhWQa1iMgiG2AbvSCYSUULYn4M3frmN6",
  "key17": "5aWpZLiCfH95wpTMtYyzJtA4YTXpEytbEgyM4rSnXU6axpuRBMVN2krXzop7rPHJHLehGprhNcVddx8v5edaGAUV",
  "key18": "2zTJwjQGhpADtVLp6fd8hkwHkQoJ7WfpLRRE55xGLe7gk6QPwSMQ4aQ8fCvLqcNgUdpVXJmCtNBJvDc5Gz2AYyjF",
  "key19": "2dFMBMpvQdraxRiuFHCbuwGSxgMTdN9fuR2GKSoMQvCj8oz6QdqS1S3VxugvtVY396kecJ78ubF5zW14Xx619kXH",
  "key20": "5W1nbbpBpjENanrScw8eLTGGBccsfmuCMnLN8Nv6ZiAiDzQfQkzw1Cxr6cbAQruhirkTh9zR1CvSQYBVT2Frs2kV",
  "key21": "owkwLhQg86ttCKxG6ESUbHnyWUQukpuTBJ31H4KMqXq9qSJhPX8Bzrxzr6TS4MfbYA1a51tyBVQp7R6ZMK7gQb1",
  "key22": "2r9Rn6SMeafFkNVuu2wu3hoqnsaqoptLvZPBcTmKDQyDjjLivimtKnBUVLzfpyRhyNGN7kzyH97X5hK7PDanXcFT",
  "key23": "5WwvQ7tvaMHb7DM1Wt2TiZpBADy3r1iqu8L4k5eahsimmuqf1aum2SH8Xj3Xm57uPB6kSfYBGjv4nHGU1FA9HSeM",
  "key24": "3zpvg7Lws8jdAAUvfaDCEzGcnJzmKCHVzoxP7DYFrTJkZqot98K9DEfZyq9FRfVEVXnNAq3UuNWKmLEx2MrnKKb5",
  "key25": "3t9ewoXKLj46kx1Ge36gRj47N724v3tbAEY4Pc1xm6FdPR9GMoAFFKoYnbsSciQPWToJEkCASUXnEjGNCpBSQVsY",
  "key26": "2QKiqMZ8TtEC8X6HhBcg9a24TsPKUqffP4wfSCn3uQjVAkgpZErGVPiNa6wc9aC79gwF6om4TM4ccaJb7i6BmE1T"
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
