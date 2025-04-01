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
    "31xKMiQSrgUNVpH82R3WTEmFASqThrUPEBykdc49oqbjq3Uf5RZkp8GtosEdB8LeLaF6PGLHwA6kRNA9gHCMtCTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iSKuLNs6PCQbGFK8asMcexLfv49yfPTLmSmPnR3Q3x8irYHnB7avDv1zFVWSszQ3a16sBgBnt3FJYhB3c4ibY9Y",
  "key1": "2sDPocHMnpoMzPkNRH85qWEj1bepRrpygZUgmVoJAXKS5XrbJGgx9y5JvGmvzMEyq17zHJXkb9dBEDBMzcCcgxKw",
  "key2": "5ZqquhgSBHc6WUUwaRyEiwNsonQKii3zDy86Jtt2uFFmLr3gm3LLZHQdPTtHFwhofHrATpzFNjghmkA2nigwUtUx",
  "key3": "4oJRbtZQewm4qKVzgUR59Zp1TmAc2pK5QPx7WUD2MgdsDAiKVxWTv27va68eKqX29LTiADGYHZLjxVDrQYtcx8U5",
  "key4": "643HsY3DVNxt84ExAN2iZFt8KcPE9jRzMJ93kuFEfjf9fYCseXFY3kVAroabKNkMm2f5ZmrMryHEsuW7WKRVkNDv",
  "key5": "4PL4MidCGX5NpFXrav4v2tCUiBnEzarTjxnsd5D2GKN47sR4rBsm2LBTgHSnVeSB5WHNLjLCJphGtrGLjHd3hxXv",
  "key6": "4sT5ghfquRvPKFoyk12WSPkpQDmV1KKMBnoWtki5pbMoZ6KCrhEXo69xAzvqQCtMLbx4soBGqZC2b5NP6jk2SWi7",
  "key7": "2SX1Qz67egkFQvtx5v2kdPgCZgUu49kHhyYd4CQZWXKk3Ny7SrYBSQvfVyLrJjphVqzYoaU3Rj6cRDStyfJu3EFi",
  "key8": "2CjwRiL1MXNt774u1R3RZZZu5eGQJWTFmjR3Ho1pvqhVNuT3VbfQWGind29es9my5XNq9HEuEY7nf76CCuDmMCsE",
  "key9": "54LMPsQW3Y2KVQhB4bXAF96fY4fCVQysVFLAK9sPqQWTMzC84hHvRhbkYBp3dMRCKq2rz7Z6DriJej9EYKRzJo9U",
  "key10": "4h2JvxtzjSwboHd42sTPYK6RLjcgY36GPDHG7MTwNp5QEHbAV4SP2nnZ5pgp9uhdEBSjgH9bTWCwgm11a8c8X6R6",
  "key11": "2r4m7hYQgHdxaNVYUTia5pnCa7P5s2w6KopGs6DB5H127oDPniv5DG963CB5zKbFL3V5Fn74ATBgpyuX9ZZLbyeq",
  "key12": "551ayBqR7PPmUVwVXR36mHwHLBrkg1ZpBb7GawyCw2FQnK2Yx3bFd4ABGXCv6pfjtsrohG4uHL5LqZBFRKU78H9p",
  "key13": "56VbVZcJrDhUjjjNoUdqvFcjt6RvXRePf4M9j2AMHWC8Kw6FhJnNbDB4c8fdBnKZLaucGfAptN1fv2GizG8pgwdB",
  "key14": "2mHhSQicL3dfQE3gbfU8JSBBRTRSy9GfXJ1MBh8R7AgYN1nappgh35pj7EAGT4hqUDKWCbs3ZSAwVsEvvTLdYdw5",
  "key15": "5jWkmeueSiYkLuJZhFM1LAwKbvvht2qhrvKv6mnWMVY948EH4DJvZYaHtkMvYqaJGm43it9rSfr3aaKoocMn3UwE",
  "key16": "GfcDTgpeoW6sK8W5QrbwcsZuKqHHBg8TfQWZN91poJwu5PqCxoZBFdLXGR1n6PGR5vmiBg4ra3EWKJauPCLtLoD",
  "key17": "2Gpztm5a4nMG2VudTYjEgMDYqfQtxhrK9X9gWNZnNFR3BrSyRWACLLDZ2QgGK1NNRhwXodA8g2DJ61ET9Fe9k6to",
  "key18": "5tJXbG1FME5qeTPKe8t92FMUqo3YZNBrpgMypoDe1bMYF2KBeJtHe6CFR5MeV8RyzW9TUUVSKdKAtvc12ELCshKJ",
  "key19": "EK6t1vZJYC8t6HnHrcdQUuSkwDadocbkdpsUR4DtynMJQg2BuKkAMyzmqxoGsXRijDAtSS3d7WJvPbCxauTu998",
  "key20": "4Ki79MrtJ2RFtrTVNemZG3qRBJkbVUMJty9mJbTJUrPvFaSym5bm3HBvy7SbqfDVLJHYqTXcgZswZkE1N8h7iVpd",
  "key21": "36BEWFY9CUehL5PDRZexv5xHPxyjGQSqowTpagX81u8Bn9REYfa1MVngwxy4xAgZNTi64NGn7dNQR5dki7CatnpE",
  "key22": "5RWfKqgn35kpGSogW8TAqeQtvrR4kJ8B8SRZGqHu4Sq4uuHdvwVcntm7w8fbVMjxHypWgxRJqn6CU9fEoFMoSPx6",
  "key23": "3sJa5ijp2Dv1NV2yJ1mTq4LDhDWf1wjrpPSfceGEM5BqVqtBkgqDABGGi1jeZN7JPhQKKJ24G1zQ4Qz1aeguEjzm",
  "key24": "61wNGCvkyCLMWh6XPTinSrW1PgiGgcX54SAnAgJRQAkD1RACAUeKziUbF35abgt1RM1XEsRqZCF7ncqJ2gQbJH9K",
  "key25": "2XNWRshnNMVQgy3vUywMsCzmAfmYheE1KE5p1qy5RQ4jExMXDb7JDLZ9CT2paSDHTyfJVNGYiW9ECebPzdYWYCnN",
  "key26": "4Ax5W6faYC4Arq8c2pjkgLFRo985atEov4GZM7XZu3VKaZhN7D83phsBZDtCE4ha9h5P8pccZerDy55n6TBqRV7i"
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
