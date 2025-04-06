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
    "45N6R8DMvSNCAXypTdV5wPrrijCJbaKN3wZ3WnMhZ7TenQzuDACQQAZhcctnpjQEtJkv822GFWv95Wn6PiUNPu6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LXEJ2nUqVaH9tBmouopVNunYQtJxKsTidH2U6Zidc8c3MuZBfcZDcL5jQT8hdmM1wH8Y591yvgwD3G1karysRBr",
  "key1": "3keNDCcd1RsSoKtByvL32EzhFhrhKqqzjJNDgN5YwqtNkraMuHuND4YASmG4SLKjr9vicukdPfeQUAR21DzKKzJB",
  "key2": "5basAJpQQdxh86wUjUfY5fHbgLRaqgi7RwM7D9PPa7yw8CJYzqz7DMq2uLWc7XUFdYwRa6s29PfP59zwnQC9BxBy",
  "key3": "5mzwUUNgAwAHtyFnnup2yGKMXiDKXsgxhoN2GzojQrjismdd2wsunMp94nRe8Q11aVGdZynaBofoq8yNTq9JeuJn",
  "key4": "2owZTDmLmWQK4vVufw8T2RH9miuQj7mdp4Z1vSs129FBAs8SpSS3CFjVSYqKDuEGBq5fuEsBgwHrXVaQWhthSqxH",
  "key5": "2BPZZbTK74RknrYVHRwAkyhDwMieGG7DmJck86asyexD2QXKRbez34iHDBZpwN32QAMaENGBdYZyVSG3bsJpggTa",
  "key6": "3XB8V3m2mDk3gwSs94a2o7m7jLgEWTCqweH15GJu1EigfxoSDUyZzb5jVnWmdEw51yy6z5KzJKc1Nd1jEiP4SBci",
  "key7": "5kR8GYrhvrRkrsEvHgjHmtLCqKS7KGGvTGVqyv9oejskgkj6A7EWjYXHrUBetucG1zQ1ACT5vc3Zk76nEJrfa2Jq",
  "key8": "211zdktjfVp11uqaLYQC3sfpND52oBVPW1oCJNA7iPSjmAoXR8JVppSaM35B3jsY1FVa1G6SYC8MASCms1SojdQq",
  "key9": "2W2M8iPWhcuHcRBbYhv33xr3DB9vAgGuFV5Wsr1Q2vAfgEtBMgrdMD7YCLxFEM45LAumLWJa5TCApxAWbb6eNcag",
  "key10": "2TXFJBLpkuzR5FVEKRM5Tietckj8QTrNdBtUjnYqG9gaHb6V2nTXEMaFeocFJX4AY9aiDVPnTZh187AnQGmJHzmD",
  "key11": "2Cg16ZCJHqo8PeoS3RyhEuZ2HBWEWd5vsJRa2pdCKHWuEQZisNVXJxuXhkU8hSRh5k1Wfk8b5aygrKUf44nsg6B8",
  "key12": "3uLRHpQzr8scsQrhNXiQWYjZ399bKK6BfgM7URaaQM8qzY1LAVWhTsqWKdjNrJxSWH2jJS4mMdZTgBL4FaKvN1xF",
  "key13": "5WDnxv6aUjZXjPydSx2b8j5k7bbuwdrRmZjunPMuGRt5ojRRuQrihRk3sVqS5ekwzmm2Za2y3SxSzQJvEaCextmX",
  "key14": "2oGvZHoegzK1S74pPhpmUuAGqQfpJEk1cTSCEwe37Sqk74egxco4qPw3bHTFTqpoZKfYdtNgJyaijJoQA2Dur6DE",
  "key15": "5NaKy5cyLk47Cwn9ZT4wUHYNu6Z83rpMcUBeGcAPkYbyFqnjigNxU2S2uNFg3SR3YTGNvwEBRVN1gpHX4LhUmMUN",
  "key16": "5H2zQ9MKLxtqn3CTpAE1excBWPtFeKTky3G82oU89mgvNDTYT2KqZDGrHvtReFdFbuvUwy2XqwWDzeHgKTaeufBw",
  "key17": "3XWmKkU6AQnHSWYhUePtz6Kootd9gsf8EEGwxrKNqz2v4vy4eAMssRPNwzWLucjMyYRRxyeRcfLafGZnj1TtzMWH",
  "key18": "3omGFezuJR1aoS9dZ81YHhGTCF1vWHMijJgaPgVJxARoVY5VJCZ94xieWjnqW79mDn9kajB52rEDRfUfqudEnEoS",
  "key19": "3WHqRzKb1XDVGipebYPgxtKLUXmLQwsQMFmSFiNrKeE5xyd5XtfvPYnwNcAH4w5AwPdzxFxfZvLCZiSbovZfyKN8",
  "key20": "BEjRzMz2o7HQSH1LgWQEx9wj99F3rh7Hr4KnZ4PbsKP3pDMiNX6DuUhJ7D68rLiyu7Hv3bh8bKFwQySu3TFw15E",
  "key21": "5FUdkuvjGTDQs3X7HjyywVoe1S9h7eM3ayxWaLWXAXXboDxJXKxzP31gpyDheRDAvYridJP8Gr6yTxBdjCizoAuH",
  "key22": "5ZzPfYRVqoBWEkJd5kGhiLyPDXALqD4Qt9BXRoJV5Q56jms56kCzQS13v4KBGLGQB7zsNQbK9KHh3sSFJaiTMHeu",
  "key23": "aw2g6y1wYiSPoqtMWvKK5sXV2Q3Ea12uSHRLuAijtvyb2XodebUDRTii5KsHpJgcjHEK21uR8heZiqqjWNp8NAT",
  "key24": "3kQy74vnXVGE2FBefYnuSeHaL5BPYt1SG5zsVmUocMi6HMVC7ejuSMxTukPGeNiFv4s4yBT4k8NTsFUy7jPfFP1n",
  "key25": "66HuuMm3kbWHNRA4SFRcpkyqz6EPg9E8TaJdmcoKav4EuNHqesjPCPmyUx26nkYrzZLKzMFhvgBhAZWfrzGGbxuX",
  "key26": "mRcTFcCHp8sJ9ydYEXMoaVjF54dD46aHsYnC4WNe5ErXTFJGnxFThSz132pQBoPRVo1yzCvvWQS9dWEJnjspsHF"
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
