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
    "5vkUtWEWKpUoxvxTxC8cReTssRqftyvKL7iPaqzUnJWcCBSbsfX3PEuS8uWhBByevFT7TQ8vLadXh9Te6v34CuWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VM8YQYWugNZK5xCixqVaysnitB4nhx51sYJ1Lmx1v1MZMXwJ1Y8jN56q8zcpCDoNY4cUNWhpCCCfYEos59ghfJV",
  "key1": "5yM4jQrUbRRxXhkhZS45EzoHXohatcP39cw9oDxwxG8FKewM1YXoFkgGoyv5VF1mKjHo1yBZjQ2B9ct7PLkLNejG",
  "key2": "1ceiHArvBrMBNRF1xdwk86x3kgcdqKcs2FuW6b1XfEPdan8WyUbugrLVbhN9BF8HJaMy5Ws4sfAYtLKhDMjGZh3",
  "key3": "5XBjzT4g6HUttoRdAQAhshvV329YBnrHFfZS1GZMQd1qSX1ng1zmxAaFWtfrpkmyVCjnRVy71SnPUMvQbrVvcHE1",
  "key4": "iYN3bQqQuMTi81JseWCMxU4eac7c1btKjWzqUfRkw4bTUTNATNATN3JwbGgXTbEs96WDKmmx8nhSsKbmKThFht1",
  "key5": "wu5q8FDTBFBQ4zVFyfTK2JFbQF4wA95UWHWaCf23QFi58WYRLvCNd4TjcL7TqXesWgBHbxQsewvzZ11gHsCEYnB",
  "key6": "5dCa6yfzGLXKQeeStxjTJ38SyqYX6G6VmKX1cg5rkCku3FDueku5y3VXSfRoCckgYr4mep7VQcEBb5SwhpyT4X4z",
  "key7": "5zkdzUcQq6iQh2fFgpNM3EFE6ZGufQVzFNU1YBxJbpvDTi8L8gj6exeHtdkBFrQfNmZGrcoymBshJVJAnhzJS1MR",
  "key8": "rdocB1oBPjXhkNhnFn1QDXGqgvk6x2tFLBSsTuvbEZrtreg7BNj49E6kZBau9Y9SN3dBNKAaHBD6kB7PwF6CnKY",
  "key9": "3cBycb2tjYHztV4fGWn7wLveDx8eXkbmoqP8M5uLrrx3orXwpsVbV9ucRxA3mVDSU7mWkzgBE3WZtvYnf4yeMX67",
  "key10": "4nFi2Jw26RFAFrxHxjWLvZiv41QSnvDti7wiTuaCUHAEnSdUNpFFtGBAqGB2WNLNfa6CjvnxEXRwaLcALenXtzMR",
  "key11": "2X6gqvTxgKE1keXAteqofwjjcLPGXD2NgJ3gE9KPmgKcu1HBAmniN7g724Bc8rMgGPrRJTPMtBCqy4pUwK2q27xi",
  "key12": "64z5j8uTLMouo7U3Lsu6hBWoncSJivT21TDFHzVzdY7zHViivCNFLsA2RQLYUhSfW17kYvQYXAHpJ584EvxzKX21",
  "key13": "65NnHgWLV9NttNVvzYXKvG7DPRNxVhSEwcWDJPAojgpBVdfDTXunQ1iSjS8dWeCP1n1hPTHYezRKENpwqyJ5Mt7P",
  "key14": "GB4ap4C2dBNzVUcHUAxfYPs3PvpNnoVRtEU56tnY35mEwJsndghWBhSY395m3K8w2A3MfGN8AoeRuGRbnozo2ES",
  "key15": "2gfANM76omj1JhMfnpb23efRp11LoBzxww2ibM21v1Z5H5FEgwTJTR2VbjqxeE1eGaHym4F9fmYjYCtdx22DoCAQ",
  "key16": "4RokJGrRrrZxRqk5U3E8TyDtyPEpcPz4fQ2bDYp5Eav6cK6CcpTfzxxhfvgU47kEQNb3rRDW2XWerb3zUeeNaT5v",
  "key17": "5GqoTwUXyp4cnysgoEnZhZ4xRcz4nT2PDxQvo57ZH35DksznuWfS995eahhJ69ukLdA27fRSA1pLEZiKSYMD97rS",
  "key18": "3K14SCVqUPgdK9DZekVreWQQBPfNFTmqirmU19tD6RHsujSxaHEyx6uhEGk39gwBWg73anqAcjmfM2Fuz6eTPVbf",
  "key19": "2SYEjfqmLc3Q4Qqh7rsyc7p5QcGvp2DEmUQhwbkEcxWREMrMkwTZqMSbj3JCZ15Eocn2MBfTtjpTTY47uJu5TMKC",
  "key20": "3sXvkDcSnf2EV78Y7i9FunM6UwMcbj9dR3HAuzGmvaMJXKpjK2kNBRPxuV8yAS1Z2YFKPyMoB4oGtyqNNSDbGjz1",
  "key21": "3kmWvZP9ix5PjwKLk5bNGiVjvjB1gNVKGE8LTcUKndE522Yu4JDTw9tppTyjduGvGZvJKN2WxLoWJwFtidf8Vehg",
  "key22": "KeSzhmq6XDtNrvxMr5RC6z3BVEjcsnc99PSRcwJd45egLZhq4oeGUJZDjJ1tp1EUCqdJ83UDYdaj1hthbmn18yL",
  "key23": "JWmypZ4VsQnEVb2b2BrbGVTxZXWwJwTZojRFTC7k5hV825KZij1kze63fapqKN7MTAdTMhNLesWjJyGwAiEUoKw",
  "key24": "59a7UrHqhzfD42pVqkHh5ehrXpP3KXjBxMbfRDwg8rA6adpTT5ZWt3dDTK2Sjrt27YiMMi4sMuQVVkpYzov7ywg6",
  "key25": "47FJknCP9FwtCCG4bBfLYT8tXx6xbXK3ccGge5bem1BKaML2PmkDu1SrYDg8Wxfv9ZQw1fUP1S1eGJrPz5kv3KxD",
  "key26": "3uE5PnHByGFbLQn8K9KoTEGzmpHh62Ti6tgAshHSCGmeWUmVcMTMng47ZFourHgtuqQEdYkJfHEGADUKnUgjAf4e",
  "key27": "3BenVesq9ge5Zf8xNQBv2bTaKoUgVSbqB9qWCMweUxJrKfZFWdsgUyReNzdaRodCMfRz5TteJSk3iLTLTuzoJeVd",
  "key28": "2aawrN1aspYBGnv1RwP3uFxKsxtnznGqK1ETjStECnR3VZeasrRaqLnarjPRCptxUQzoBCEQHys8Va1SLFhKCCKn",
  "key29": "2ECnkwArMHFFJbGh1GyPMc4Tigu8kujkAGCxpc8BT75WrTV4iV3pMTcnfH2Bnn9TDQW56defhBmqzbgERA2aHycW"
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
