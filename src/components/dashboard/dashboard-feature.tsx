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
    "2we4LTbT5SRCgvrpMFMLPt4vaJiH5TwPf1iqDvbsHLrkBH4pQFzt9BCDPLyJa8ayN5Fny9ZZRUPSHwR6aTwbUUYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31fvqrsq4XHG3M9PBC9Cx3kwHMgc1nSHxm3ZurGcg45eX7qNKnxURQMm2kdvq4xbsL1QAzyCByMqT7zy4trSN1Yn",
  "key1": "55JTk5UU2cxm942KKX2uuBVSYyJmsZsfkpTT8rzV72ppcHc5SJgRDfTgPAZ6rmAnY34QHXypNaNwAe8uwLoa3xZ",
  "key2": "4sp36SrS91i3tMGUyEjEjg4X6fuc7HHjjvcPWFdA12X2gKQ6hDTP3cc3XECEFEXLq3ycvGLziKwE7ZWjPrsvvL1E",
  "key3": "53AmiGvtZs9y5Ztf4cjKQaq4yGqkp3WPTg88qbAGeQMTVLc5DsMDzBemd52g57u28H1nLyUucyuUbWvM4E6pBP9o",
  "key4": "6SqNbrMX2Bb44yMxBDk5gqRVvpByvYjn5DVDfzuaAY5FNri3y4LGLAFwXKaJZeK9FFB5iofSaAEgNJJLxZEUuBG",
  "key5": "2oBqahBgNCdz6GH143itrqwYPbLwVuWp1kWE44ZQTgQvUvmBSEuRhXymbpua9832Y3RbBXfCvikaVLw2ydmBxme1",
  "key6": "5hwj49gMSkVrhrL3fKj8478dzqbHG6tkyGTvFFebzKTXZxVJhBW4XZWzbpAxLX3i7AfyQCQEj7uBqLMX8GHwnztL",
  "key7": "63AGBC8WDkrjWkXFoaazy3iGkTupE9D2pnWXrte1yN3bMTmWoiRGfnYeqPQCFoE4fVuq3qwFroJPnVjp7qGH9Qco",
  "key8": "4chTWhH8oEiec4BfFy6mZcTFzgTJuYmhDDVGpibL7BqfEc4NHsWpoKeU3gwguk1qLGuKd5svSauV4yQbgCna1Mej",
  "key9": "2W98tnsamEDfP9BkxXM2TsKvBnKL1ptK6z6rrG6ivzoU4HEeyRRM1cfQqA8kkyJ3Dwg6V6ECD8E4CerZSZ67TisT",
  "key10": "3WKF89CuHaJ2zBTpcWzph3ySVsYRMa42EhAqJMnY8QNTKHBRM51V8QryC4QVST2MSLDCJemVRRbKeWB7HTmcb3MD",
  "key11": "5SPXT5w5jXHm6w18upEdsUwFUtyXQnsHewf6Q5gh6ikGtjmRrtFU6Kcf6Z6dqoUWUyJY9ESBipYyV5h8xg4ELWj2",
  "key12": "5utmKxot7ZwE5WW3UnbKgRDaDfBtFdHy1B1HtzVDrx2xJDmtMCtbHnLWFx1WtMEMWN317KN9XA85VawLMB1E1A4x",
  "key13": "3VNRqeDad2gSFDVjBYcyZm3TgcGr2XVAGpPwNLHEZnv4yymFpiBgsPr4rTFnhuA3yeZMJgJ9t5W9sFFPF8k2QyPf",
  "key14": "3FZ5Xz1ipyYJAGXUWWxCmLomthM2yHkjuzx8SzwkCebR8hrTKVVyqdVks7sV6iCj6PRNoqP61dWWzXCMyRL5hG2k",
  "key15": "2gfL4z6qT526R8BAX6Qi8CbXtvU4YaH8SyDga8SE2xqXj4SY1ZJDMP8V8oiXoSn9EFCM6iTavB1CKhSTS2i3fA7Q",
  "key16": "4MRi95BH8DM42WUeG777YGfWi338moJmUVD8z7Fc5tPTJm35NEGyT4U4QwKPfjiCbnLgZo32vCTxa9yCq5exL4y4",
  "key17": "4F6u6EE7JYj5vN5E7U4Lx1YE2141xzqeoajTixAgdKzsgobqXdPLyPbsb894SUy18N8iY4TfEMMxxJAfs4maG5B8",
  "key18": "2iQmhS44DWJVb2Qpdvoo2wTHZo1i2z7ykwrui5ugS2xocncs6t5FmURsfASKGbNsvsbA8fYw7BVy79EPq6bh45Yy",
  "key19": "42s39ark7hbTuK6X3Gz2gp3wesbNSY6VfzKGBydakF9miL4SzookvR1A1zvcofsKgPAKUg9autCCgZ9Mw1sQeo7g",
  "key20": "2QVbJ6czbQ88cgK9of1Ttdn7yHcHpiYHKkonYaXo95VUkLVAjfbK6pYdB4rB8WpT4miUFDiqij5vCjdY6HPn48W7",
  "key21": "5FYgu6B6bVV23y8JwRP72mm2fG86PJNrQvxWHxhBSkLVhGDXvRVxygHe9ERQkcouiKxfo9LFYq7MhRg2yrBDbp6t",
  "key22": "VFVak6AMCUADvXpfixFfUkSJKyWQ6NtWzGfMa3uR9fw8AsunazdzEUmcuYwmX1xdKdkTiG2MMuLqUB27SebEGG9",
  "key23": "5vKih6B17YMLq2jY7efKNMQTMnCNVnzBHn7Lvvu3xQQ6yjSX7x2yikrJZCKLev92VpEeiAmt3uiZrjw7JzGEiz8u",
  "key24": "3cDs8wtzwuxFpcJNnp7rWPSW8nLkxYbuW6Bmot8VnxuWMEUUv6EF4849USnhLbHh8TYRjU8BMrryX1edAijT6fFc",
  "key25": "hoGMunD23vLWjR2dJr7kjDqoUCTAEzyaEwJuZJby2dc7o7HL9iaTXQ1VVn1CKPqiZrGeAANarP677TX9jFSPVrt",
  "key26": "4zZto4SK5J8gzHgC3WMt9UEHHJxyt82ssMoLE1aUo6iRvxjEe8ykooc1DxbtKFBbTJy435RvbfTXVPDTQb9dUg8E",
  "key27": "4kKwDADV3D9XbvcEfN4DTs21gsj5ZHDeqkNNtE3tsfp35wSeqMDBnxWfcgzzzQ2A3zCdy76L3UGKpow3v6utM6h4",
  "key28": "ucoLDdHKGGDdkd3zBW2cMqBEPPEKArN9HgzguRhUyRCy5gU57XD6vUoBGddoN97YdYgB4QFuLp87yGFd8x3fnjP",
  "key29": "57cEP9uMvbjabRU1yqXbpg5pwVowkqv6aAZvnWQhZ6gXcK3rZmHZZouoeuk8BfRFGgQ8jXgWui3bQvfhcn7ddSye",
  "key30": "NbaFyZo5yh5tMr3a1JHM9kB4BvaLVdiTVFLaiHWuZzpuCbsdjMjoVUmWAgwcpBjiGy4e9ovgS8bjDSeo8jQBykV"
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
