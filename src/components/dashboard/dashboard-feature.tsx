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
    "4jFe6uFSgVzcNgVLdZuCvZfSf6rGZvy9GxcBVjraWcLcDzUbGe4qBYQe1JDrtBXxZWvsHyLSAmS8g4ZvU4x2ZZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1RP1QGoNucJdeQWpqdUzTwaCWHdZgfAXbnD7vXaqvdthNNDd6Fin3QQi9MJXffgYAfF9XARZHTpk7vT2Q1Azmmf",
  "key1": "56oyk6G7cAPJ7SUEavw9NRHswg7ZqAkurvTWwx5Amhk2dPycbVBp3wq8MbymUNaqRNHCrtFUryX9j4t19KezxVST",
  "key2": "4yMRARWRyfXm7XCKr5mdvT3NJKCEbNfP35t8a1oMj2NzucFPCVM1RBGKcGcfeWt928Dho9Y7cpNSq8upHe2DwAzP",
  "key3": "4eg9Br4UAnzhgbW1jeRy7F7QDVxGafdMccRkqKNFJRgXKTa9ArqZheAapNXzkRPZ53oFpFmZ1iLP7F5ovPDcAroj",
  "key4": "3ZKXXqufdz74jZNXzyCP5GgGhLK4iN6Y3VTHJ25ZwLTRCGueHLPmLmtQEi6pjtR8cAHxjFChpUSomreu4u1Rs62k",
  "key5": "2iLE8tUrWWpBzrZm885wKJJ6kNgZEYCntyxkarLjXSpkPA9ABAPH6qhEMuiTE6qsKrTPWPcdiRYEGjETwb3FsNBv",
  "key6": "5Tmh1QKDag4cFQ7HSHKKNj6e5Kj918NykybhCgugPkDkAE2WXawg8267E4aT6eq6DniBJeRKxLfkc7us5BGSQoY6",
  "key7": "59o3j6ZxFYSXBWpn9uydZy2v93pbJRuRSYgTYZifA7WctJQKi47thRqvpnpPMmW9WbCfVPP7t57qpPfNyePKgCn",
  "key8": "sM8KRqrGWDw7ipgSRfcNAqYkMaKKbYQUcgrRTK32b9Y5h4LNcaWiJYpdJPySWwR3FxuyA7ASHZmEjGLmMxaCyrs",
  "key9": "3AAjMxtvfpmV8dkcuLVmLcnfASzWG44RDATyXp3xr5YFSuH7xs2Gb8QXCR6Qqa3dhYfyBRA3XzrZGnmQzfiN9Yrw",
  "key10": "3Ts4LgQrEZwsA8hpBFr5FW4rhWgiLtnq22ybMge37nyMXTvjbgCZ83AbyEr95MPsaXPw9D1nMwEP6RJnAqXccUfT",
  "key11": "5LdGvs5WHWHuaQMeZTAe1Cd3EoXfTGfWTvEuaUBR3Gjo7nCWwQZFtzjG2npEULfK69AHPLTjUaP5HLswXufzz6pr",
  "key12": "3M6uEqTWz9EcYcG19WRrqVzyGCKKBGLgLHsNtv1hXetEaRxuhvtmo1cckj45hdYgm22qt4j4ojfrdFKVKVLVen3w",
  "key13": "8n25ZoxuRsfAqVX4CQmFApidVVetM7nUsr3aH1P5namASRS2TbuDQxVcSjS3XV1VtzMJh3uBncMWQEobByNptT9",
  "key14": "54V3453mSp3tXKwx6qH5qRPwTiSsRFzAnGPjt97cbcdnM8LxNe5qgNVPk93U1RzWQUA4p7EnGNPzsn2DWT46qk8r",
  "key15": "5vRaDxHDwotXsBSj2suinh9jqPhVnfBf2sa2GiFHBYbTLh475N1St6TxbHtZAEnJtLSBp9z6hpcq9RrNyL2YQFuq",
  "key16": "4vedVoLuSJNQnr21cCrqo6tnsK2ww63Xy8zL19DXrPf3GLfyj4Tho9MS6zXWjHxpiNQEiqcG9Fu15FDT7crbbb7S",
  "key17": "LebLn4qs4WwRcKLQt75Ez32X91LqKRWNsdk1nTJFzdfnvhNxPk763uQvx3Z7ANu6b5Hd2MA9aiCkudA3MYY1p7Z",
  "key18": "fhhzp13J4gvzyUWvDXX7zyVhSmNB2u65NU3P9N4EW2wCChzvMkkxcwiiPPVhpjdhiXKExz78QEUYq4jx3eTTg54",
  "key19": "2bH3NVoZkXSZY9xeTWwdwoCxcVDuCWL7w5bGvxYTqBCyYQYQpp6JNUj17Fn5ub865DqkxjoMFaxxxe5621n2FngL",
  "key20": "28WrnNvQTvc8qnjSDnmz4HXG5dp88gRNyj4GEdhmCCH1efV8fH2UDd6b3Uxg2rRGqeCmqc6maQcHHqEqmknHQgSC",
  "key21": "3dQzQMXxXAbBgxkLPpQceBHMSJLhPHcCdejWSLMDgAG8Js9vFTvNBL7RQePFndf9futNcSCDr1V8c4DJjeCVSUcg",
  "key22": "pptfoBr6HXYgyaoi9bu2vUUpjbVjvUVGdUJ5mDXu4jJEHP9agx143N8Yui5pnEpob6sELJJnuLzCHZFPgEgpotb",
  "key23": "5Z2g8i48B3FvirVuT84hXFtbKtbxu3BbghjM5CVweQ7b753KPSuWkX2T3vXF79WuuC2aB8LcNFpmxsbnKxgNxTDK",
  "key24": "Y6j3Az8wMHfoqXeMywhsJQRgHs2ukjjKiLa1JyvnqsxbsCHEafmrPcGjEdMJv1QgK2AWXqtQyJ2EXnnnfsNgGS4",
  "key25": "2twB13N8fkBQCPgid5oyn9dBBXNFxMmEXss4pPqBqPw8Fs1wH5C7jGsd7UxT4yxpMLmZuviuHocYsn5rzsS6YPY8",
  "key26": "5oJUKsNuuyj5wTa4ToeBRL6RNYYYG862cv55QtXktUezXnSKVHd4QoimTy4URHAMauqBpciqMUimwLWJRUfTJjRP",
  "key27": "485oDHxn8XHJoptwy1B7GywjJK2HxzFoYmsnUb7RCjpjauujPf3mBQ19TYVPAttbwDnZpacLiHk6rD7uFt4hKibg"
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
