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
    "4ra3nX5izVPCXfWLQMjFK7z3oVgzNYDD5PTu34aYkT46wegPA2GBJrDjA56x3BD1RL47gwdMoL9YS82vuz9cFzb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37ouCdVmCbdKisTYevTYopyMbYJYCLi1bqESSNGKuFm7Myh62SvcSMJ5bMWz2LTzBVrDMJ12oeUid6w2k8pZ6Xpa",
  "key1": "4EPqtv1oNVemg1rhZk7Vx4gkx24nzDj96baVrnvzzutiMXk3Pqrx2etDbu4G7ic6hn4s5SBD7xQjwPQYWPB2P6FJ",
  "key2": "49FCfBGMqJZX8FGUFJn1xX2pYrvEbh4uBV9AKQp7NAuDP9c49sGzjJLCt7WWA6wBQCeqBzD1c6Lira7zuk6V4Wcf",
  "key3": "uLWpxYGYHKczVFPhHhqz41U5NeMSBF6w2bfAhHsh1K5tWJR4AXYrjdc3jsa9o9ZYCg4kcm8YJADZz16Hsp1pC2q",
  "key4": "32CBYNgWFuhNKCdA17ECKbZNUSd4LSeoz1gPve6LP88YhbzfUsF9SSj4kBxkCUqcHTTcWZUAEnKQ9TiBEJrt5HRe",
  "key5": "3NJgUzrFwk9LKgGKGsTbBuoVDcFE8kkYkZc861WYcy34jqmmxHsJxskMCRrHLjCUmP5AWVav7ZxRH9hdksJ4f8Hf",
  "key6": "2LbAdoP7a29WhraEjqCwugfLGWTdbHTP9gL729NYNBxPK1xhvqWiXreRd6YUBKVWjspGcepntoPPRQ1cVEwvEsw9",
  "key7": "tn8ZHq5VDewy42iHhwUDchPu5FCZNJpRxTWwq5VxzfrLu3fbQrXrpfxpZN5B2PPMq3Ziq5e8c6iTH3zzPAH127G",
  "key8": "3su7t2AonEuexgJDGjmPj7PAkNiTNC2ZHfUYjSrScnYUxC4A378PsKfz6F5bDUzBwYmdaHNKV2s1LuNepWDKScMe",
  "key9": "3pZkgYbSi3WvzvbAhL2wynpma4Ry9CsEwzgVHv9w3uVWm6VAypkRssrDcYjvZdC42muWPUiPt7kM1pKsZDAVKYhL",
  "key10": "3SLx9JwZyU4C18X2LStiuLm4wURpjfAPGdeFHZx3GSpgjcscaSj2AovvTEvRLu4MvwR6xkupZ3ash9PCDq8x5kMn",
  "key11": "pqqDMCKPrE7K92p9H6CEU5qL37JjLKJPXrFM2Rsn6TjQmXA4veTCU1v1eXD9FnAyWxMkkrcm6RAkbGGbVGjufFc",
  "key12": "TxnVypzxKCaKBYseq82ehDG5qANiLaLzKAAyUe2WLN4BmV44t6WrTC9X5faHt8WeBz9Cmmf9wKsGLown9oa8xd9",
  "key13": "5zLAXZjCojQSghLDPspEmR2YjGmNPy3ymBx2NeSS24dF7z1PNB9cUuNjYraKjAcwwkbWm2ZwVvFLbMLZVbjpUpxD",
  "key14": "5p4wHPYUw5494JQ3Zn3nBQdFJEFYT6rhUQdedfvtifnKLAnGbw2zpy2fX4BFwCQq2egcU6kH134hRceZCZB9rPmz",
  "key15": "5kZTx7LmHgXT9L4PZNqwRSQbU7Pob6vGUxpPBf1xtA6so6e9zxDYEusGpnPhn6eAM77tKrPyieYrrtTyTg11kLoc",
  "key16": "my73HnD2EcpFFEaHazi84y3CdmTXPGkijVQkDLJzDXyZZcTeW6TLbWQss6HqYMypCcY4FeU3174oD3dNL7ih4xG",
  "key17": "4sBFPnnwHYCYTQKpiJraisgAv6NEDCt6muiHBSn42xQDSF7R3JY3ugJwD3u6Kht782eTrH4KwXGnVbt3wGNJaZqJ",
  "key18": "2YuPA64zp9egJJ2emBzWispXUCpcme4Z5Sc3VYFWSkHCcd5JpZxHNfKnqnSc9fkPTzkRpwpLoAMEqS5sWoknLf1P",
  "key19": "2BG26KSVSwnAywvQBLDrXZgJpfUtxd1d4NjSTPkRJQaJreFNG4oWGEkJS8gzkLCS9m6GjLjepWWPNPKvz8EQmAe3",
  "key20": "L6kLTKX3S9DZnVzCDTMcs3uuFNM52ntTMwfEVAxKL8kCZ4wC7gwDuv4RBRyNQyntVbBxWTjBZ4SQBmFMbb2rEf8",
  "key21": "23oYaeTDqHoTTUaWaR8teQEtg4PtUatkBKn2XJEJAqRpK6UEqfFSBZcjkFqyAPs2CX1nByYpeqxnV5nzJEALTYUK",
  "key22": "48fqRiKCpTjxujwoHhpXSsAViPSPg6pePW2QmXCvP3Lk4kyKxKuTgXhoNjCStD4TGnsaFrqrZEHDUufM34R9mDmg",
  "key23": "3mF4kKmoU4Az22S38bMMPzUf94vpSzXyNW4TqDFPXp8FESNBuK7zwr9XEf2t1oAGtHNTQDBLNTP7M7bnq3EKZSco",
  "key24": "5bRipXBpWKxkjuBNSomdScELByR6HcR8ZV9tEB83wwaF7Xt2Y2FHFNPRZGwu4rPAW6UuXM1aFaguFVQa7VphXPvE"
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
