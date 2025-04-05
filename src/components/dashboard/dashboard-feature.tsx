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
    "3RaGPJSAvH5qsaQ4QBgS8JH7RC7QeMir5EZRaWv8gpuRfsBrLXwwFEP3QCy53hyY6UnRjkW9pHwgzj77FKmQoWTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49QomDTEMSJF6r98WJxusemEXrkwi9qxrVkoMmgLBUMHpCCFm1DxX9GSPNaVQDD8DExjxtdxncc2bTzzVDbHLLxB",
  "key1": "5WTm7J2ax4kiu6Lhors8GmoQqMxQWaBpP5LSveNqdMRQD55TYHYosoio93cu4iGgH7BpctLnV4jVmpGBttiDtaYX",
  "key2": "4EdoEMu7crPt1sHGuZ2VeMRCU7q87M9ucrh73sZP1RDBhPpxSPHwpwr6u88F5g9VnuAR2X6Zm78j5db1Q1BxPhCa",
  "key3": "37EUes3WwAdmBaQnn4fp9EEfdxrdHjDauYESgkJC8xKJmT7tmStjKNiJqnfE1shJFqse19r1TFn8GW7BSNpB4yh8",
  "key4": "34JR4fyrB5RHE4AkwouoAnuvUZzxFPqNN1CupjCqJYqu33UodYaCZ4G2dbF26amZvkUTSPMBgtJysQKCuV1PYk5k",
  "key5": "EV7CYsY1hFsumoDePf3Es5dfa3JvXLaWJnm1YgbGQbKYbWDk5Dj89pyEPspAgs1JkHXEVBA9Sb1tAcvEEGdNGKy",
  "key6": "4gZsEJoL1cWkbPrJXNqweQkkv82dGBJ1SsJh4d7hfyBaMDw7g5UNzEst2caoTU7YuBXY4a9RV3pDi6W6WE5Nggny",
  "key7": "5ZjCs4vuVJVPCZ5iKiZtZKQNFDX64G9fUBa9YeX57tpjWrmnR8hy6f2g8TNND7EmUiayMctBRour279w8ZWxpsP",
  "key8": "2PFajoQLsv6jqkUrVnnCscGkyT9La99mP8w8847DkwH1bJ4WRe5KDME1MhSvMCRZGY2xS6tUYWKSKAv28vgVeb9m",
  "key9": "TYctsscZYjaQKNyHrJ8a3g726H3RoDX2PiyFpw8825UNx9gT8tB6XmqYVN466JuMx4Gno68krqn4qbCVQvF5jrN",
  "key10": "2P7QpXxSXxMgg4BgFNpMyVxBnzc7r9PrcTDLx347Zhdq8XpSAU79kg4U2XKn8uurTak8EX7dF14ErSyeiCiEmJpm",
  "key11": "4pvYLTcyc93AyFnXxY4wg7sbyh9eS2zkiyz4vcq2HuRLFoW5RLcxHpQCCZr4sq3omQtAH3U59GmNnNm3iJQ45HW6",
  "key12": "5Y86uojhVP55r4inH1v3tyRahbRMSJuV7HZCXvqwxmanbyMJXrZUBqKpNBmG4HLZEa7AxCXoUfEELf75Cym1XYX4",
  "key13": "3UFTZtRuYLJuGxaqTYXhAhHwBXaQwkXL9Z2NH8JFJGEEDjDq5Co4jYwhTv9xaVedLMfNiaBY3Ufc7FfFD5q1Hsnz",
  "key14": "4w52XeVM7pgiDQLGSkMQhf8dxPqFSxiq3iFem61GjN3mGzdWEQLAK3YJxDGR8cGvgXAvYqhHpmGMSMsb36Tr2mfV",
  "key15": "DYYL92YkmAurkjNY46rAekm5aUvU2dF34eYKHDJ2vq3owEX6yikXhy75YHsgnA6Cy6Xx4Lbx4SfjLMkYjqyyq9g",
  "key16": "U1qQedFsBEWVtrzad99exQG3wE3Rcj37ST7EEFzXeJKUNx52Y7kUuVJsL3aDazsbEcUXDs67yGkBUQN9DrgJEwB",
  "key17": "g2mZZVrzmUKyyxQ7E3GxZB8vArwtpLjK1cxGNtGi2bSDTB8mhAi8eFW6c3WVyqHT5vsditASawZiP82woWFkZhY",
  "key18": "33H1kddH7kVXDz7FSgHTL6VGn7ukGP8uUkatr18e3gG4LJ5pW4DVNFdyDs26x3nHKTjikYDUdWiji9Ewi5u1jMJa",
  "key19": "3zgn6SjwdG57LXdidizeNdCXermMUd6PjxagDwYCSaT35SNCVvXdf3apxbfCo3pUvvhaU8JqVvbUrBEsg5UjGuc",
  "key20": "4qDSjDnidpDbMQ9hGtzqqA9vqJYjr8qS1gnHUbGV7V1HtbwJf8Nv96ho6dMH4q9RaXTusRXjwGswKPgMiT54bfHH",
  "key21": "3QN8ygxSpZFumaVkfaTpoz355bUZd23DaTd18FnnBReieJKp77xy2VVEiDtTQnuFRsHLYPCn53XP16jFawiZgTSb",
  "key22": "2u5RwPo5WKXhSavMCiVME4Wyix16mgCMxaWfVDjLMojFpAs2nrtbY1KVC6ZpKkqnZYuvZbHdQDKJhhtPjNRAQ1F9",
  "key23": "5GZqKz75Xfk5VjH3zFy37ALgRKkSBQJrjRpz3CajH4NHxDv6jZi9VfXgtcdmtcpCdav9aBf4tb6o7whc9oxkTjAx",
  "key24": "fo68JByBcdp9YL8Q3tMspVhKCEa3T4WtektuHCnuZbzfPNLeNt4WRYkiMYByhGCcxssJHkR9NRaQwxmMu1FMXwt",
  "key25": "5Ksg7gcezJGahThikHz4NjQq18C3MRNUsE1SYwxRS9XvX6W2CJbyuu459U6STy26NrpwaUw7FgzceY65VMyM8ABc",
  "key26": "2j9CYTMjzNdkGQhoHpHYoSz9zLRSogEkvJj6PttukBJT3oGbxk789Ymy4Wp9LNUTH2Vi8xcnoMosdcou5kQixByj",
  "key27": "3XViRmbJXdTPMsWXctqa2br555yVXC8xRM5DcRN2tzZh4CmSYLCeWwTioQ4zfRe55gSmoNJqz528uXKAMda18prq",
  "key28": "n9e7mcMwLBZgCsKr1hQQ5RfjoiVMedxzGWutT9kpvubGN4VvJhBtC1oDBn8zMNxYjVewgzsRs7RoH2YxwSQUohH",
  "key29": "5bVujwTVaaa9p6PXXyLpAmTA68T77ivznCrTgV69UiuxbuVrnvtv9WtfZdoSD7EmdGiqzZNhxLp4ZhFX3TkWQtmR",
  "key30": "2DrrC4RkZdEGNMDiZfSsgkt1dMDiWaC6pxZnsE7UetgSJvFsyBboqekPpo7KNv39xskRcTzsj1s5upVAtdFaSqNd",
  "key31": "5QZiGZ1uFmuXcfRLu2fmnDxsfbgoT6KPpNm9pJe7kpWv5hzavDUP3R9m4CD2KC3cRQRLv1QXAz7mkQv3hjHbbA63"
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
