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
    "5mVpuV9h2ZtjbbKxqvhvRCqbbnJPXDinLi8kqtwgnwKoohbYMdR7PqTmuLap9Az2DHnMwqrnuMZHhhrQdxH8tedy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eT2RXAYMJhFVVP44Gyk6GLWF66oiGnNRWpGdW4jNALrPnGQUPRNPM6vyopPr1nvNRvrYPt3muLnoeysixDCz3RB",
  "key1": "3MXbGAJ2LkHRjtv2AqEfQH7feJDvhJcaLonbr28YJZX8s9kMR4ZdvSjHbVKjEhni5xNWSnfXdBqyJQDP1bqS86Pb",
  "key2": "3AZRpRdjyhcWUN9SNHGBvkARe81s98i7yK9wgRzjdC4jLPLvaa7MZ7AvYzeqGVGodhewkamHP2ukabpL4P5Q5tme",
  "key3": "2TnxcWJgeMFuQ5c4GdvmMVWioMeZ2AXSjQekm8K9bJtx8FXPexPhLJ3LvrSyqpjPDksVmzv9fWaZauEMyKArM2uj",
  "key4": "5H7MB9ydny65WyQLPcD5dSgeZTgeQdVWZDNeDUpaeJcQWBRZs389k7DJoYCS4kgBbDHUp5ewimF9pwBGUJkNscgG",
  "key5": "3qPq6bZ42bQeKVXmf5YSEw1Yc1VDJfFSd7PKDJcNhM75dyYF4nLgpJUu9nNbWrba7M8ojHYtqFpoffebowG6PFPi",
  "key6": "5NKcj7fW7FpN1ULih7tkWwxctrTajPRJadsyuwZcnDCxJEfx6TBqb4FUbuTsqe23GNB9hTXyG381me7FvH6xgi1H",
  "key7": "16vdj15zVQ1EMuri7KGMz4eU7JudrMHJhn4AByMrVtBZkZskDDjktbahqwohxMujhfmCMpPGiXczNpn7xT6VJrQ",
  "key8": "31fx4SBuZR3htGmjuAGpFKtkWcHWJuTiNvtdkqWj4Utp5Yo3cUWCfC3LKhW8pz5UcLW1mB9b5CC2r3x4Nz7DmnUC",
  "key9": "5ZJvVkMBBDFJSkSRRcexwUn6mCUJCzo9xdNVkiznVFi4CqpoAjXBjVTn1hE1y1Vbu1xkFvipn6xW9PNPWj7QYfDk",
  "key10": "421j2HgjomJFYfJq9tgwXi51eTD5kiii4eLBtApAEHsB4cyeCwLaL4keZFLU3EN7Q97UNf1eHzYZZ3BhGUM5dtuw",
  "key11": "54tyoD7XVxsnEwVHx3jRxYqi8u6YvzEUZVZL3dqYNrPEygBmqCKKavBtCw8QQYKhbT4RZoxJnKf22RXXyeGe1rX3",
  "key12": "37xzPw5Prh4JWHZfY6zW1QacXVU4xmBNLEoKV1kQujqgJD7nZG6M8UmDEALNFmyUgLvtLjy669kmyDssbtmMDxKS",
  "key13": "3eZBk5MBM9HUqyozgbWwNdVxPVA82SndaeFCMsXBWu6wSjkw77msGkEd9DijCfeo5wbHtm42g7ziZvaTa6JbjpQP",
  "key14": "4g93L1c6UzwpYR5uG6Biq6ZEkvhtqFxaeMYdKkT6uF2nw2RPta6JVW3n4g7dq63rbLzkdwMqeMuZxAVAKDDjeQsu",
  "key15": "4n3itEQ1pCfmc7CPjDPkxWBTGE2F9stVV7dQzFPiHsjaa8jNEfAmxfPiQgtEnpkAGowe4UCtMUsidoFNDg8x1WUq",
  "key16": "4CS2P8sKb2P6rPTdxcNM1582j9ZevwQgFWNmeKApPff2vACbym2oRJC3FqxqvoRUvdFupqn1972AMi7jF1vPcmys",
  "key17": "2kHeE6aX9Eu8udUmL2mqKb5t9QogEpJm4o6acJBauKthSr6fbhKQ63NujrpnE9TzsgPwTc9pFEy3rKraHdJvdAtf",
  "key18": "47WYt2zJefHWZo47ub1r7kMEzw6NbrkWhkC2R1JbefNCsDHaxcZRJxxGFrg6EPdyfLNmT36fpWitumwgcPhQnYz3",
  "key19": "4QdS1VEi9mX2n9jNeUs6Himyi9wyGzEwQYuWch8gxM7tXTqvNUvcENtdvyfSTKGVcmrbJhiBZUUSzxGuWfRf5oU7",
  "key20": "3q2y25hwB7gAdZmrUqQMgfV6Vo9xjzcGUhSP9GDWCVxpe5ng8qFZfEAHDffwrzkADmguah6gEzAP5HkHh7ekoWP4",
  "key21": "39uyZndtGRnBhNCMcksaE6WXbX9qfZ8f3xEWfbQR5oKEid3xtjb4veCeQDx6GgL5t8cTHCZuHEmjCiYv2ZtMWj39",
  "key22": "zrxuNgWW5YBsZxWPxe9HAZjhkW1NPBdsV5B21rJdRmjfNGy65dR8j4ZsFU9gK5CqNVX3GA7H8UJtM2eHEgy4wUy",
  "key23": "2DrBrfx1xTjrJLxEBaWTUPfA6dQ8pjB4TAfK8F7uS2fvXCLVG4jDUyHMyCqHy4fnicuLgDu9mAxoBVkf2y4Yz5WJ",
  "key24": "4hSctxx4jQx5vguJeYz7YxQKBkkbiYcJhiBMEMmYeDSwRdSBR6aDDBhh7ApZCA2yMG4anUmzTqDxuhrr6WSur1mo",
  "key25": "VFHP3FA5ZtMf7oAnqGr6m79gkcC82kbTX9S7HNHi7x9TkM6icwmqwiihhMRmDUhrS27CBKutsDKN7MM1rtJ5JF7"
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
