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
    "wDzxuUDktWJcA9y9Kir1yVkbpmBP5aVi5BdxTNh1DDpRocW7gKeoHTsim9qGChUTySVkG9p3nfnMkPnSmNGVBB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M2rhUDVbLG5RsVahhA6gChRUSLEbvX5LRQm7k2EWcHCqiqKGJheWW4GBMjmRwxe2pSKggEQ8Mp3wpN58QACYC6r",
  "key1": "4DTYSGuh6xWg1g4x5SrQSXvNLRKq5DMtGa2rcbqpn61gys9fDgCjs2EYqeWqddWuP1nyD9bgBxBzuFMnFCjCRa49",
  "key2": "4bUCZUkraXnbqFPKhp5rFwrUsYQxYa72NGnr9DVAvTtJgfgmr9xVH42zY9Wbq3ntnuMa1gwRzWLGT1hAt97YWRhp",
  "key3": "5Y97KFaYkmme5cAVrs2Y9RkTyrVTPkpQ5mEEi5zqojrZBrkCLGNouqtw9XF8k1sYE9wSM8t9wznpRki2hHKHpNsD",
  "key4": "5iTB5N5kbcKJ7sESXFxbLSyn9vZRhtSRN398AYMbddn3s7BNKtkuPVbQFrwB67k2rurG2jtYNPF9uqnC8mn6ghzA",
  "key5": "3t5NhyEjutCDk558BcctwPkPY73CcwhQLxH7HqAs3DcjpnQw3nN6Udp3g26DbjwCJxXSbjmbfos4CePveV1Z53K2",
  "key6": "5AhFP3y9GUh3PiTSLLqtRfbcbXVUSGc2ytnwpqwHPvGX24yRP43VCME2TykBgCKueyvEetEpskCfe4fPRQE7TWjq",
  "key7": "4dSKBSPvDWfzkzP635maEfgGBZR4oNwKiaGCiVU4Fs3WCZYp6SBsVbaUpmWT9tqcNButPHRLgL7SBu76TpuLVTYb",
  "key8": "4uptwA4xMXBP5XWNEeuJQ4tYsAynCBiS55MwmbxnJXva86vfG5WaGdWwrdXW7uZfWn53TBzm8XHHPQxYrPZvWWQz",
  "key9": "3SP1EQydXCo4UNH2mfK9skTe5TSCHU7F3a3PQcvvyjmfm6iQzuaHZX5CtteP1re1sC7QiaMCr3ruEnzuJFKZXJdd",
  "key10": "4kVxvqmyv3FyFQ1vXTZfdCr6F98AH2sT7GK39s6U8Mjyy1kJ2psrZFc5nrm5pNUsBbgSnzCA9DL8YAAzUX22dyQi",
  "key11": "5EYwTKEjowxL3YgjR3hWSjGmnJqq3JnimMMv2FxGbNdvem4ZFXPCmkaEBEBBztdERYagpVP5ez1s8X5jLx5PcP46",
  "key12": "pRGTWyo9b1kLkhxVNr9Q7S6MVQuhgJnvCSQSvNnBNAsJJbWTFnm6WT3nWdiZEPtBm8EHVP4d4XAiRed9oNx6ZcJ",
  "key13": "4kjsLgXavu2J8gfAvm9pPmLC7c4YMmSuVHZ2ZrQBne35fMyN9Cn9dLju6kDCetEb2BUUY1Ru9xPWXqEJx3oCsL91",
  "key14": "2XH1fnif7koLuhyWKoSPJH8YJq1guLu1uwWuELn7FyyBcHvAK85hX8C4w1ALKUcj5FRBGXXpH3x8ZLMvSEM4eYkP",
  "key15": "Wqo6f3zFfq2gaLZgqGehiR6oPvFvdAmoaMax6sqTr3NWJeQ19Z1xu3Y3wtrv2dKTq95KtsgSKcGhoyMGK6E6CxG",
  "key16": "36WbUHYVAfddEHFNnxWFd1mJMLm7on8CjmvY5n4q4R9XYvfHqi5JtLKZTHbg42NX186aajnrNxsuiSB2Fcg7f7de",
  "key17": "2RaATxW6xoUJXh1tubtnHxSvFm3wd4SrYZmU9iTHqcyMtzk1z8h3Nt3BnNz82jyZmx3TVJZ6AbSzCNwQ5AVEMivy",
  "key18": "46AXGxcfitLwUNBXSq9WH9WdXtc2Bc3GHRpQYeBG6PdRYXjuMEtfLN8yYSvmEf8HZpnkmaUdtaeZiPFiR4fH5U9D",
  "key19": "BG743Mya3p4oo6p8fEwKuLjcHqoDDoTFTCk5uDf14bvn14JixXfTZn34umvh3xfsXDrs4x67vhZ95LmjfnWgLA5",
  "key20": "5bqEsRanrhjNEUjy2LJk3NaceroZRyw7v7YQ7Q7iSewRLYJjK4ZrjbDzPyxMs5AJ5NcnRC4ixvXnJ6SEer4rQcT8",
  "key21": "5d1o9uD4iGJAd3xL59LiMaaBQw1Wh3BbAKqS7efxnG3YSsi87M7SV4Z41SM46aNapFABD9fSm9dGXv41GzBDzAh7",
  "key22": "5a6PdW4mY8By4EQy4yyXSyPmp11B75SP62FYhpJjWkfacH9J9abFyQpHryNzqRfCLkLuDWLh2pRs2RPbX1XuPAoK",
  "key23": "52YZkJGYthxZMpEdyZpo41YwqP7DePJ8fmXd345VSeLRUVukNsH1bbLoS5uqFm4BspnQceqJgiSmfTetLiLhh3jP",
  "key24": "35SVEW49Da1ouzCewAmDiQN986LgURVk9DCFznhBAhXc1SPqCWTdrFRZJZ6JukVVWQJi64CPouDKZW7M33JWogv1",
  "key25": "5s5Zd7gBxi8gCffVXsjLxrr6cTtGSkAsqdpAvcBnFozimzHD9xGFy9YDMqR9tMDNjCAcmYzyDhkKgj3u9CEThh98",
  "key26": "jJQqDSrZURFnh5CefQdv6fqzxA3o3qtqau9KzUfhMxBog8Y4nfhoLT7us9YwCmso6gNNgzZWkwBNAXTStzqSyeb",
  "key27": "4LUkGFndy9wTuzMbreEHZkbdTnqB3q4Ar5zyGJcYKWAp3ndP9N7SyeUKFKrjGPRnLAdTvdnRYNZtyJiBGqHiF4y5",
  "key28": "5Cub8EkSNH7ikWZSLj4W6f99fLYhMzTDuweDP2AWc5DWs54Zxo6dSmENaTRhc7LTH8FUavn8rfBMHYpt9AYq3nTY"
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
