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
    "22bUcQJiD7RwUp2qmkEd6bbP72SeUdVMDT83hdkE6q33pAdkctxhkSwNLgwGKMcFC3bseVDbM82wXyMwscWitucA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qetEdtFbcQ1dsQzrkUjEgwUkqucWReVAbJZQs6ByVGSSSRWdN9Z8LGBVyNKb5dvWBkZWBZVtU1J5pf3EPdWroWn",
  "key1": "2Voz4F8JQwahronVrx2Rr7trJxhmG838z9qBiF17J6Kc1faa9TiztWX473tCLZMJaVaGHYATQAbzzarmGQW15X4d",
  "key2": "3EU1k5DxKa3HUbXkTiJvmRHDCGDDJ6gDh6gP7Qp5BqAsNTDLMPtE4pdWgMfa672jdArWm4sKCZ5DG8Ung4rHmyZx",
  "key3": "4VufyTmbCV1RL3RpkVnnhSm7MFaXpgbKA97ybfb51UgiVvqovKzeWSf2kJ16QTspV8CbxRqMimihu5bjshnfDbvt",
  "key4": "5HKtA32ieo7xAewdgFPsV6zYurVrfLRt381cz6UxJEgHqaTf2Sg1AMachLMAvaQkn4UWD38mQBFtDax5bAkV6mKi",
  "key5": "Khbd77v5xxtJLoax74LdFBmU6c32ZZDfPbuwN8LWBfunHsWVkLEAzVnEXJf8L62dcPCZwC7xzYz79umsQ98KXvg",
  "key6": "5su9kPXmjRZ4W8T3PEpXJJCdmWxWYwYvQ4yRDLCNJnQur42WUGFUn2PWzFgT3TNdst2bSwoUnng3dSJiXfSNr64C",
  "key7": "52pqKDupXN4RV9DUuaAraiWUK1euQCPyMi36SGu1HQx2y2dEUtw2rJMUPBvaeyeod6gcbqi1tTkosrWfabjoF4zN",
  "key8": "29GPA7MVeEMJRPjjP15DpQnB2gQQYhg7Mj3hngjHLHX6srvCrwmr7XA5HUFmACZFwQGBYLTQytJ2mtN1JjmS1s6V",
  "key9": "6CRG3twTkK7evBcru9zCXn35QP31Vhrzp1zoWWcurk8XpDzfFs7zADwUzEoCRQQ8kkjyZkHXxyHoP4jhdUZ97tJ",
  "key10": "ScpM66E8JAeA6H1xuXe2DcPGeskeM3uXPJZ8TM8Eftv7G1VHhS8CCznmKkR9eFLxiJ7sPLLSSGvkvRw8HUTybXD",
  "key11": "dyPqYbS9X1LL2SN2zzVVjeRBJeWvumzN2RMVnaWHZsK7kXSYnM3dSrUUPncXR2CHky4k8Xp34jK3TFMoCqAscjK",
  "key12": "5vZYGJiM5hzF9YSDbgRHgRrZo1JGJxozBj3XTUXZehJyv4WrYTNzGHGSET4niVMtJBhzVMB6Lvdmw4cTVpEKbeUH",
  "key13": "cMfeVYq7x8YKLRkJxJ1jadpaLN3ynfwPCqVFWn8X5ABbEta8GwoMSR2ptbH2aT8Gm3CpnLpmsBno7noBYgK62w1",
  "key14": "51iPbmZA3AEgojmjbJmAjoPXkYR2E5o3XCVGPy6keC2A1YWmdNgMimwa597aFSiiNKTVXf3rP8v4gHJfBsCmgna1",
  "key15": "5VdHLPU5tfQjtmxNTvDuGLBdfJoWp8QGjyfXmekrZZ3EGzRujtS8CncM7USkZcYgSLaqxsri75ts6SGh8QVBbN7d",
  "key16": "4D41khY1jCskvcPz1W11iY61ArWqyFXXsfDgjhUmrEupGZzL65g5pFx6sJJL6kE5uXcZpzWwnjVFaWH1d8LJuwuU",
  "key17": "LnT4mDp1tejxZ2GqRAbo6W5ZKZHfnXkycuKRMt5KUpj7BMVJssaFuFG3FS34i78mwTT8BnHYxPWsUc2bwcFADBq",
  "key18": "3U5ZXQxAq5M93ruexaJsb1fPAaEWLGa25bs9noGemSTfncWkQLZ9bjKwejqNuTgNiC8ydhLY5Apqbq1iCUnnTs3W",
  "key19": "4ZcFRWj2J9b8uzc7Beg6e81N1Lyc4BX8kp9nnmz75vH22ApeP3YPWPFm9cUxj4oPLwZhXkEqfcJgNUM1tgX53JaB",
  "key20": "3njwq6r8v7CbtgDsPKSHnWyvBWCVj6EEVvgDGr7Wn7zcCHWd3wzH36wSjcRUaU11Ths22aSsDNAvLFmKBxqXwy3W",
  "key21": "2AbYrhSSNHSSVPxdgHrkPT5Had7a7hiJKfZ8TLM8nfD8PwqKpYuJNbPiC7MtkqWqffQ4LoJTmGJERi12vu3HuMdU",
  "key22": "5XqdBfaygnsv6UuvrLFWEpk75sGQAyjQL7JM84YUVCiqfMjmG91qK3bs95m82NgxsmFp3mQpsfxMdbuxtqLbsAuY",
  "key23": "3ySSn3As3MAjZBK3TRFJuZoH6uN71uavCPCpmN1kh2xDPj5ZAS17U5Et2uRNFwGndeYRYr72nG3NQwfVjPdcGFcU",
  "key24": "3GErE7sdKZBV927giGeYzCfkxyB29aTkrNfkRuWWwvPfwjEQb411i9cwrtauQhVbVqL5YAbovyaznMnFK6Ew7Uj1",
  "key25": "38oQkVHceQmxXzd7Jxy64mHikv8MsgdgpJuczhenF7amVFjNT3CZ9o3sUbWsYcYXwi9CKAudF7umjbhDgMd3CAYQ",
  "key26": "u2PhRYHwkPRtTxx17mebkDC2R7e63Zuuz59QmYHLGvr7e4Am7ArRUAY3zEB8JXWtzM9vG284AnFn4TwCLLr65dG",
  "key27": "57u5qLAs4wYi5i4uVqKCUZeNCS82Z4huxvj42UXnzojSNjH6RMUimDsnNLu5gChqJdbyJXLa5zRovehNCexxBuzo",
  "key28": "LkuY5tzRvcJzSMg27XCBHJaXNEfcMYtmwL5x9BvFQbbVbLEngXGDCCxYPzpC6KD4g2FvcQbqkdXmWRgpCtgh7oH",
  "key29": "4jKgWRA9yiCNZ2XSs9Jne6bn5h1vjJRGyv3BuGvUjdh1aCoiT7pt2ZXyEQYWdWAxd4VZ6aa3tKTUEiWN8myY5RoJ",
  "key30": "2Vp1NiLtNeije4Vn6X4v52rdwKmdYhHA3c7mpTFAo5bnA8qA23TLJvuy31y3Knq5Wkrvm82bWyVVfLiHLrqS8VAQ",
  "key31": "bu7Gpb41UmXppwLbE7Wd7ufpt7vcsZhii4bPdbXWaRvP1QjadF7ypjUppWwiADCf7DhS1Un5FYy856JNqDwRVBW",
  "key32": "659covncATJ5f48z9UYSwPHwxiHGAy4p1yN8ETwgx47LHkKNiNVQqxaqjUd2hWfAPczLNq3VyQMFkPNwncnHckhM",
  "key33": "3ttVzijHqephFiLBPaX41jsz4QYyqBKph5Hp4ua3zYCfcm1gsZjX8yfDg7dhjYR9Kcq3EmAWnkwPJXEyZYzKHxSA",
  "key34": "2jx2fz5Swg5ZTwLMbFC7YDLUdYAsS3hr6jEYwPPvk1v9usDa68fFazdCZkbWLUmwp8duW33NxZPk3PhLyeKNgfYh",
  "key35": "5KpzC83hUbsXYiKrd8tMLHjp47MtDjTuCFuEqoC4HzpcDduWNvNGUmXRrNA8GRPc9zYwErZUyQNs2zAY3q2RsWRv"
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
