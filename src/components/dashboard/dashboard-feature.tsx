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
    "4aBga98egRQrC66cKMscy2rE5ofBHR8GFGLXPrw2fparSouhU7ZXmk2WqG2G2exS4Dqtxe6dUEktpSKoX6DhGfZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gi9LkFJbopf7W6gVyAHadQbkRtBMwaUFWhgz86nBUyHaUWzYrN4Nqa5jtY8AMriXSkhLnJ4S3kcvCex7XDSGwoB",
  "key1": "4YD1Nt4uT5rNLdRA8HbJ3MCJ4i6tPCSjkyFy2AfcYLHrEKnd1HSa3iM2nGFP1otZWLf1ZnTYhy6rtrrgZXzvWKPV",
  "key2": "4k5QVpWUJQAXYKczvwTEw23VnJ52QVybpetneysuW1VuKt95Rtr6jHPNFDXfN2S8CHfnFWnvCXP7mX75ZVMZYC5f",
  "key3": "5vwcRp3LBd9xpnu7JipVCdE23VzzbXpYTtKNcQYR6x536MR5bTex8nGHeyR2h8iJap3pwGKvugRGh2N25XgJFa4E",
  "key4": "5RJ8iirZEyTrrtyWUFHRdEwoMqJRvxqi19xNyGeKCRkHqkHph3hpKfnSmBWvE8YWgESPMJcoQSqKXau2oqHF2CyG",
  "key5": "bwgUX8Y4UToVGEjkFwwdvqdPcerAiMVtUF2ppUKF1zZ1HfaQfj3KnEYw7UkhFEYFfDM7QUSwvYtB2mg33iwDDGK",
  "key6": "v6m4E7qcrtkxzZzDE1zzpyW3KVsQw4BcMxnHHYSNSQyPd6LjHhxo4gUF5BcCzFhCL7XyaUgGKEtqQBC7JfpACUi",
  "key7": "2BVJPSDtdMyQnxuVnzAsNqT6KBMWcwe9ijzw59Fqx2ZhhAQHp56FWYuSTaSfXQWs6fh7g7KGJZ2XaDtzDBhMjuxM",
  "key8": "37sxoi83Uch6Q5j4jdNWJNtePHq95y1gYhr8nQDu6XxozyqZqWuvUEtExoureNA4wyViHCFkjdeZHKxQdYFeZTR2",
  "key9": "3YRkW8gsCmNgMM4zgbUckwm5SWDcos7LgLmfkxtBxKwZzJ8ZEVSz8c7uJZDu9E4SEwbhH6PLfHVVnzA8sRFFryZX",
  "key10": "35iZqrUn22M7gJnAdSYbxe3CzDpCiuF1yY44mz2fCY5b2Rs5Hs18kcn9UvxocVy7BTqPiVE5wzaSkLymXRmVjKA",
  "key11": "4bH51jRwTEev9jekLzVUVFTYseFRHzaTUEWb6sQakYFiRBrUuZLn8bML4E2QWjdg3piLsR3LMfkCvGbAVv4fkKWF",
  "key12": "2VrzFC5pU6mgnMPNndWYYemKtqYr8Y95uocwQAsAM3vQWybK4XM9pXG7azYLDJ5YT4xTYFaYk9Q2SEDCsij9mRaH",
  "key13": "33Ln4qz53fYzhU7buVWmSJ5F2oC2ZFGAMKoERXwGTsUWBJqbq1MJTekqWKkm8fnUommmRA1Lco5WSrsBFoitCXPz",
  "key14": "5PWyxRn3mKVtvi3ErpGo23zJqJfF91VkBPo9DHfcZ2AYCQJEBG9q5CLQW76HRToGvwVs6ZbASEXiCYXJZkzff9ta",
  "key15": "UmwHmoEPSzY1rKKrGG7uXMCqhMMvW9APZPvZG9EDcmeyLowCZwCjto68hdTe84qiaZ68D933A4TYxmGUDFpkXRE",
  "key16": "3nBepMoVNZ27RCBmp6Zs2nDoihAgtNdhowFjsZG4k2a4YL2kZGGHjnJwHEd4upzjTnDTEvVgvDALzv215BZJhCSN",
  "key17": "5FbfLrcMxjAxLquhFedt27qMCJQgjvEBAn1QqDmQHgryhmKrB9NapsozZ7EjetPJt435MPHMMrQM5WrZXEbcNhAn",
  "key18": "5g2G8RaoXUthj4nVDdPATYKKkXr8HXbfot3a8wmSqRzNZem1ZrhQqKusSG6BjiyZQEsFBaFnFDUQVFmZg1qJCs8n",
  "key19": "2zEX2FU7iSN6aeic5L4P72cihMFY7PoaEoHFjXzLQfFfz38upvH3g1ise6YAsrBxdmvFgKD8U9S5B9oRbqvCnDbc",
  "key20": "MpyMGC44sgcmaY8mLTgqUyoSqqnWHZ8u3i2btenNJBf4aKYQKGBJY43ZzbV2MRfwDKdXwcJEExrR8xAboPXVsbz",
  "key21": "2WkSk9TWfKGE55tGXpUgimjYEfGHi3ZiB9vUzcfSgPyocjcdeiZusFrieZ1fxPBpYNCvMQ8PUjm5iiCerSQeeQM6",
  "key22": "2AvVCPE6oRDAGThaZJUdUmEAAYSPaJatNTRoxozZV1SYVpavkxKgA3xXxfqk1taWparksXZWm5Jc8WrebDup99La",
  "key23": "o9SYm82sfs3RsxNG2VKZwTk1fJgrkYfvx3MJwnSg3jmn2DUgJoTpqUcMW1rtpRRqPXxrGPcsFXyLkCMmJv6XGKx",
  "key24": "4CydrFr6tfeJc3d4tpCm8tqeD4RZjt5Lg1zLP2pZ7t3vtZh8ZBaevxcaHczcB1NWzBLzcrz5SRb35VYh6EpXrob4",
  "key25": "3PGsSTaRPi5RboJ9gXwippinAWqBvxWN8QH6fXqZhdZHRyNVXq2jLxrt47RpxfSKWv7iYAiyPjaSaXrG55khcdjW"
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
