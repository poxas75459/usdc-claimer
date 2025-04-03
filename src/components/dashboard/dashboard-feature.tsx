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
    "5yLuNGHEGdWeLrrweRjCR44ycuma7k33RGfHbdDLdhEen9D48gGJo6FoFkemjAMXLLEsRLEhbg4z8gVooWhSjdmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45FEENY5LtyMA55NcMzTP5cwYu8kvWxwngs3tV8YdQTg7U6FU7odP9upAgbD3xcZokXsdHxJbaEtgWGUQQ4o8msw",
  "key1": "4mriSN3HzxA8CE9TMk67Y1W9Tp2bHfQHckufELVnTY5qQB131zUxuwo429TFtwSD1K4KC6FkJa2ooWCgHsKdDxeS",
  "key2": "F8zEBvcTMvzDiDPkuop1s6cqcGHHeZNtYcVQSapxhB8zBe9mBL482fsoTNZaAr8nBegucxazGDW3MSBXrp42BPy",
  "key3": "3dXJetvrK8UWpHgbF66BtTDxpJ8vjoo7WE4YPuxoCCVxZ6oe99SvHxttnh4nbUqWAMLRkHFn6DMENBfsVw54MhwE",
  "key4": "36DeSKwzTjDgcMuedGPcDExyYJvuX3Cgke6D3QF5M8xhz3pREPw182M3T932pmLpjuqawunmf7cjvjNvPw5s3tFd",
  "key5": "4xp4J6hKyhqsm7DTyvqo1kPxemNgBwxBm6Cry3Tscxde7EZWNJPjJ8YQzqv4fQoM3WSc9JiXEoc3DZ3Ssk5ygQLv",
  "key6": "1Y7KyutKChuYXsbsrfPrEqTpDmJR1QyhmTGCE92NnjYcMr17mExeTXZ7bgQifhSyLz14EwStyRqSuo6zzXkDEXd",
  "key7": "5SyxJ3mLkhNzWo8zCqDw5Qccn82UNPYUk4cSnDwmL1hDoKB4Qpk55sJ12HETJupzopNiv9CHtXHErbMfuAwwy8B9",
  "key8": "2dmxoUytqcaUEkUuwCmDs4LGMfieUk7jbzwHK8yFhZaaCAuckeyxZnyASKTbUeghBZjgVQmdD5piK1QEc4tADnRP",
  "key9": "jBEK4YeeHXTGdtLPirrXHDLaGpi9BnYYYDezW31nztWXN6Dug3nFdWLep3augJpYWLSrq8zVS45WRasuoSd1SXG",
  "key10": "5B5NGuJtLwatXr6Vpbd2VHf2LPjpyPMHCZjqiP2JhvCTTvF6GcDVpUzBAbHnmeNH9cJLrMLWp4EmF2thjDufmB8u",
  "key11": "2376W6ZCEPyeEHytogFrQ8TBStEx8d8HidCTRZ6RXGZU41NJzov9zHnLHQH7qXxcHoVQ77rQb85nJciAsnASiXHe",
  "key12": "UXYXiWNELkcYdtPdxs3aQA96WgTAoug5kgprSGF1ZGPeb9saCgaukbLP9HM1EYQjnWayFZLDeG3D5j6ELkYXFmU",
  "key13": "2sycqxAKb4mDhVGgu354Hyhm8FJXJ5nyWmgqUzQdWAozt8Yvq9BrZks6csSt81vJ5hxqgokChL2THGBBHC92igUh",
  "key14": "2EcdAbDYixGnXuyakDa5Qknh3SaDdVamsRJMY3KxH4CdD6vsMs2GnB3ma5qjxJFB4xwuqbEzDecfmmYMJ13WoPr9",
  "key15": "5vHjVkAaTCRp2n4bQJsSY35DLCmTcPyje2fiFiEcgXLxdjXEwJpPhAddaYTxJqRdh4pM9pLWQCMcorVz5jp1bjVD",
  "key16": "56XASZAiJ8XLY2bcoGUdbNEddMdWpYfdp35eFFKSWShVJ3vy8baupVKSXoQfEbiTqF5raidA5S6pZ1o6pHzin1UE",
  "key17": "4MWxrBhrGSCTdZdSf3ZXGCkmkm8Sx2X826E5KT519YpejFQri2RBvqMEKaXXUVFpogC1KwkieK96rZLGhtwvB6ny",
  "key18": "5owpdnCmH4BkxVDSE69XfFJG95yo36GnnJN29kGAnEU4KYqYDyjMv2TtKVD8hEenyWn4cgSny9CXyoSwcYVfv9LJ",
  "key19": "XPPbtpR7GnTprC2W4aZeMPdhP6K1B1gHSmreiEVjzQAgdDgjgwHamrVyUEK49avDXeXesA8RiBJAUWwVrvvLGVo",
  "key20": "3fCwLHcxabqJ93jrSUbwZXjmkKKZqHAzDo7u2FFTcX8AAvRvM1bg3dt7HK6SeCsZYoEM1sdsdt9UJieSWUYvYaKP",
  "key21": "2Z8XtoVizsYjnSSBJoY4ud9JLRcHT1rHj3S53NMiKyBVaQXxB87QnCvtjXzviuz4hvq6wtA8SGbrbGzb3fGeDq4n",
  "key22": "5NeyxMbwjkMQw4Jn69vxF3mWSgvGVBbdjpvfYJzgvRyzF1XkaZs8wKUadAduoRkwhevDZf3ymtu82uxDMfYcvV2A",
  "key23": "58br1LhsqRRPBMEUCGcamH44ZJU3qd2ZdBYnphUVJex2ofFXPUG7mozHKk1Xbp9kD6uR8kqzWxHCzzxLDMR7KqZg",
  "key24": "2UsNk2oFLoc3QNsy4sA8DE2w8fNfL1yW9tFo1ZkEMwUBGcVfzPStAP7FSzQfQWc1vMZRfe8XPADuKST5QocMCPbc",
  "key25": "2tDZ2ZAndarsiR4xHccZVpPUDSJC866T3S9shCdVhZryhhUecRgiigPJPaNx48pQNtYZEMpYgFuqQKoGzw8ERp4J",
  "key26": "5LVcKMjdNk5Am2riUcfHcV3bp6sbJYwKLPPadmuinnrXFJMqQCRoKifPrFUBSXyK86MX6PwDXAVabVQSUrRGc4aF"
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
