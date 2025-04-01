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
    "4QafLbFNTsbqyQwxc5hjeL3m3BRVjS3KGnnW6Va4UdkVyySanXdXKKy7rZ7n6MtCmEtMBsWPiFTb2mRMeRCk39x3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KBc8F5fYQC9x6TvYL9x7bgAsdC6axJHGi8gvC5aipj2AVt2MV5C5N3XUnCCwXYuUXHhrPXaDudH9ZZivLnzvfSk",
  "key1": "4jodLtGV8BuVF9n3BnC4N8UMCoy4pd7NAPZKGsKPhMJAdu6axfJwdYpstoC3Q6PQSLs7tsvCCShrtQiUAqrufaiP",
  "key2": "4kGiaAWThqB9CDemtDZyMyBknZZdu6GB4CjXafxsLywd7vVzagafXfnsbXUYNFpFRugrkuD4gMAqmictA1wDthAv",
  "key3": "5Y5pTkQzRTnNvQMb4S75GPuvirBCmk4KN3TynoMCTpFkditBZUeFspZDHZQqnSGeqzmKZRPanJXAbYwpJAd9yDE3",
  "key4": "2Hx9TM7zo8YUkTmg91k3kLyjFM8CFiPQRgcu7Edj1VnheUiWADdjG2fPyhhkTNyLsJcEwcRtu6ZgofEeYwotcQnJ",
  "key5": "cqk6b47AueJrojJyA8t9dDzcQSaPhPeYXRvTC5a7EKxViWSM9yLsTcaNPxtaGLFPhrCntwP59TdwzJydW5sQSRm",
  "key6": "3kLwd2motmBSBR8SYYuhWg8PwwTSEmuBzhdbayGzwUNKqWNss79Fs9S21gkeQiGCgfyTgDjn6YV4fxemin1ZWB2T",
  "key7": "2YenXR5zav13Gy96eKsBxT2zjL9H4R2BLVWTTTCY7VjresU9iCaa4e8UqubUCRPgesnenoTkSc2c9kBSgAVmRJQ2",
  "key8": "5UEFcC82Zgi9DLKJ21fbDLyagZ3MVuyUuPfbhG3d332Q284FTTYj6EigQaFJ4eaDGejuzPNg6mz4jLeFdjx5taCW",
  "key9": "4QjvhuEmRjgzcUdYzEfdKTCfkU73kDwkGQkuFzSgYRvuosRDHhLnrFqSPq8aqWdHpsSWSWCXik7W3wDLeFn7KsUD",
  "key10": "2eifWZGSZoSXh9UtrAS6qxzq6zGPxbQe8wJ5bGn41WVjzcJY8gyTLYQCxm1mWKCiuexbeKb6UY3UbrjhLva1GoDx",
  "key11": "2YDfryuTr5npxtaC3ttxx3vUhxa4vcCeQ9kj1tTEHgwBg4FLdb1BJAAAHnyFhQZw9tsnWMJyWyCmvuWi7Y2NdVNA",
  "key12": "5m2t3GNjB7sB2m815cCVR6qk3k7RU1s9F2ycezhVW18KEYP4rT89gkoAz26pjWW4dAxYpxtyXnMThZPSjhCVgvRm",
  "key13": "5kYE2kkWfqFjsVGGoWG3eKgfGLimBSTpGxM3BCgaevXJ2Gvmq8fYK3HGs7uern6cc45GmrPjFoBw8ydBryvs3PY6",
  "key14": "SecJWq4v4CLPV6NbxLccz5zo9h7C9CpkDJBSvYGDyW5htHxBCTPqni6YHRRSNQsi66FKx1tGRUKKB2HeJAPJq9i",
  "key15": "2DJ46tgHZ5JY16ZhfsWfPvtcmYtY2SpcS9jUP93SnxDuZ31Zwj5bKALHpWrbS7TLsC7JdmdytoeLSuZYXuFqMymu",
  "key16": "5jjMyHzEjtfNFXKtB43bXdfeUKpSyWTaqvtfNKrVmAq7t9nwGTmm3sc3JbykfuBdbUJHpXxhXScH2gB5vWuyGCev",
  "key17": "4YqyBETJeGs7NiJnc6pDwcoTPZTPVe7NngEAAW9QibeoUTxdANzWSzb8AB4kfpgiubYR85r9GDZaaSgLjmQ8f2rF",
  "key18": "E7dD9wPB6UMUf2pg4x46zaHs5bt16sxkkyLKAXmuHVCB415oXbRjKpnBNc8FHen8EzhZSCXZZG6R3Fe3ERPqTGR",
  "key19": "65vXfVf9efercUt8sjCXEbu5XD5bSZEX3n2kLUZEq4ahLDDawpkFdiyKjZvfKJAGYLbFTe1iuXxM9uYRupuYY21J",
  "key20": "y1wuRqNztXLqSwy49uucEDmuQXgEkLFr9VPpJ1jwEBD97c4KshFmmadreV5ephgUQmPDd61KC6w6xNF52QRyAi7",
  "key21": "s1QXdaSHMx3xbcMgp5AaKxsK1dk4a2ewE8e59T8Q5gqvigibqHe4dV4NEyxV5K5Mo91Ukyj997C31EPPvahwRgW",
  "key22": "5XH7EPKQ2mXyaYEm5GukbfUkeWPFMtiX1XD8vPB36XsPsQqo7BuuBEUK5cpXbC2tG9XuMBK9uG3j9grCk6YnFrZ6",
  "key23": "55cPB6oSPQ6pDN6ygLGJdUpcwfCaW8CbYDAUBUtZnqFk3AxNViiw7XJL8tqSZpHupbtSSTjCnPBwrjHDir7DKw34",
  "key24": "vbLL5iusdnDWCbfvtLLNXmf9dMrN6XVpDwGJP7guqGg3gkW2WzWgMU9p5JTtk1L4BTaucnDurgZSS5C34VcLSMg",
  "key25": "rm4d9hd4kso3yDYy3owVmRkMoSkz3XG78heU7kNyVV4uUVcFHWYqQTLHhXbndKmSHj2hYyqArnwBSdsAUecgpQH"
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
