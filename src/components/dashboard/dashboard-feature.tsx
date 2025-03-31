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
    "1BUTtQJLa8VGgZJKqcaQTM1gf5xPnpdR2PoNGzM7PbTwcDb2aX6p1s5fLhRE3M5DS2V1RYZdiwmLcQPTiU7jNUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TFTFHmi21fUEyUptTFtRcAaqLrZADDep4qG4Kt2vTZVkCMQNSEBgdvxWLZyfeCFv9JHN9i1QrnJEP7q6agXBWpy",
  "key1": "664qY6cSGyHxGKRH1gE4Sba9Vvb7yrk6wE1GaURKSvhXBfz6WbCzkWpqUX3efrxd4dS75YjKqHGd5jCrPQgQ1k2p",
  "key2": "4UFGF1XPKibTN4HQbYePJEanCfhBh6R9pcgn7UEwUzLQwvVsXokJcZekesNERuzYaVRJq1Y8MpkojTM3gtzuhhyt",
  "key3": "4FZWSjhpGQNEhnbWmkg21vT5UqTvjtzVBUUGr9iq8p9exbn7qdzKXE9a4M5GqrrRCGjzw9iVNjXD6ov518BpsJsn",
  "key4": "4fK26Y7HTFPw4qZQw22sfZ51p9epP6zRonqnbDJv42qtd1noy1XuEWTMcEFE7tyHUzfwuMHd6Tdtf9CwvHDh3zUb",
  "key5": "4boNbsMNt6c5ms1HdGgbJK6QRdp2dbaBAVg7yw1tLsEqDmRgxH29VHCV8LYzEtX2H9Z78JzT1xKVBfgZtuSERcUd",
  "key6": "4i3oQ7NmrYaMSGvEmQJW5wxBEsZsFGty6XBLVuUaM9rxBa7KMigmd6pUCerxxDbTgr8jdNe6LzdqJGdQ7fdJKnwS",
  "key7": "43D31eKzYjwbha1qxCqQ2UjqDuwro2k1bzgTu3Qm5nJYbNUJ3dnH7iYSb7C3kPim42PGUv2S2DVQZjSBf1bXNxxK",
  "key8": "2itAyLKfpJR1dC5nRRMALA7chSN2EVMZmL9vkkcTo8Wb4paCzAFzXvQQsBJmgYuW5iMzXeEwndpvvL3jGCadz4jb",
  "key9": "3yG7HjHavs4xamjmYvJccCHTCkoEgqafnK8sZXsdWME89J2wYRqkXW6EVbkkoZrD2yGzFXiGXzrdxoRdBmq8yRrZ",
  "key10": "u2LqskMeMkjggUu8XZg7tD51EundpQGNZmxidYbhJtz2LL3yBMpXufPLLJVjP7cjKg2PfmpAMozF9Gk8pMhib2S",
  "key11": "5saPAAaj971TUAxhGDnwu4uaYJdGdzcdyV7erAPZ1A9uopmM93xquWtyMFRbw8U9uVinQJTmhbrxKZ68677476mk",
  "key12": "5cDTNjic7pGVbzQSYaQk6bd1inwQd1N2SgcQQEM1conxqJb4Jb5iz6k9FYrD7YEERGx3Kh2PeSRu8ozNFcFJDhHc",
  "key13": "4oaHN9dbQ8aKQ4QAVi2aRMG9Ancv22xYbxNyirSn6uKiXEQ6umkTp5YhvAwxEyH7hZgrWkwAfFShs5Rpt7aALavd",
  "key14": "3NBKe4RUXRT6ypn2wpzh884RGxnccEoNqhPPXNzRvBqBAsvU3BsHrTSyg6kzTqtLEKLnpw8dCKCZRZ654EkYQfpe",
  "key15": "czfZNN86BBv2RcNaJi6UJPRPBK6zxMAUBfxnDppWYRcR6nzWizFanm927b2Ae4LRb81aaHo2qkhafxpJfSxWBbw",
  "key16": "qt1F5ZMuFCDcMdb3wsDuzNAVUYjKDD1eQFLB9vrASSrVuJ4UVQTHe6AhiwJAAs9wbMc1L9g2m2wkbdKWPHELztS",
  "key17": "2ZbXyn93UVbBY1tfGdyjxuBKS71VcG9HyStedq6hUjjJCqKCo5D2drZiAnacLADbHa7HG6UhwqzxNxJBpaPVAUAN",
  "key18": "4ara8DNPua7apUUjiG294e6rCa96JPCgwxyGfm49UVfZtwSM6hTeWvpAoNPNZ9ocj23RQSBMdFkME5UuUJnX6u7G",
  "key19": "5CjLLU5dgoNsb8gt8XFDCCJtkuLtDvuonwNiQoXvEpnpuWVyvKyjLtcqRVMaqGQjUsLWyV4oDE5FBHDhkQ6Tryvy",
  "key20": "5G5Ck2gxmNDst39cx21kgmg8cntRfREePMAN9Y8PUHFs3JDQBXCJDHxA45q5HdVcNRo16BX5MpDw7UxqKhKhHdey",
  "key21": "4oqC7J9fkRvibrirCJyNkwXRKcw89ZFNrWzazbcx8fQWcktHYwi7DLDFBVseGcSpyUeLmxjGtnRt4h3n4hxmuxb5",
  "key22": "41NqefikLnZvZ39b9rETdATGZYqg34PysJHZw6mYZPtSd8c5tNKizLfPMQ7Nwm138Z1BBZABtnGRy7dz9JhT8V18",
  "key23": "2DnBmwvV5frC8v1YP3MooanyDSBnticzLyQPX29RJfoyyTDeHXvTrq4f1SUVphsPGoe6Kq2rwre1hb9jH2oemBaX",
  "key24": "38vzoHzXqUBczYssQA1XNeDCG7wnjeDp8Z2doAis6uBqCY4sjcbHvtuStYpP72rwAxSmbdW2HSTEXMfqHZqV2c7Z",
  "key25": "59YafrwXi5tbmoPwJcnU3C9rSnjBGu61pcjgeDb1wRPU93BhiY6ZhpKaxr7ikDXnKHBDepSSFdKyZBXYtpK7wGgd",
  "key26": "5gb4Esg8ewuU73tQa1g4xptVj5M6tq4CxBECjwAB37WhXfFP9GMd3ySjPz7aP3BNcrEjBwZmsL54SkMSjRK8DEfi",
  "key27": "56ZD7MWcNfjXrhJFK1jRopw9zH6ZFNpSfk8m6CKtoZZ9AUyguHdP1mseBywXxMt51PBXQocD67jAEtmoVtHrbJ67"
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
