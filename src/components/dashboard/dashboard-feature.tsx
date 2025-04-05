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
    "232yuDAfrwn7w2JN7YHzU42bpbpzTFrAMzvYyCamaY3j8q2WyEVpfrjbRJSzaguPkgESVC4z9hLrxDiHsKpTrmcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o1EBjobtkmzdVQVpN4mQtSGHrzokH7sFzd3kwHdf1j2qkq7DrTTJfTTWjwKkqWkpcLj7iQm17pC81SAeLwaaJ94",
  "key1": "2TwC5yWvUSzxnUCkC6mYkBrLNT4EWzwBgV1ip6w2kJHqwwJ2Pe6W1qRMsDpWtHnbRhXZ8fp4vNT5Ef2Uaeep398w",
  "key2": "sbMFUPybMsei58ByERhuvCbL4LJZ9iEb2vfz1nUWNfGYXseYHCxRrAhutL54gP3mDM2mx94UWheT4XSv3SLsPVm",
  "key3": "2xLw67cUc8tChjobeTn2wH4Et4LBASKxsaz9yjaEwYuTYVf4KQb6dSqpc52xsdkG3YcUJmnYAMZrgLKNNhmk5xAL",
  "key4": "3MBvVNVCZZBe1krK5NDmgQd845JcszWxnangCqVAZDbBPdzDK9AXaxMGiVJ6i1j7bPPg5hZivP6EP5E1ZvFthC7E",
  "key5": "4AeUrsFJReeDdnDGkiiicq5km9xHeehzvPtuZNdWLvLjCEFEDPQtEB8thcgn6wEr2fPGscUiKPwVZkN381RQJVrZ",
  "key6": "5JftRR8u1izFWjCCaQj7PjyAzvj9cq34mHx3XnmdejMWqjE3feBVJNcLfPEYF7W2BHTrJX4mKbS7YHhauCJbQCUj",
  "key7": "5kmYZKtpMgxd6qberdTWw4EMBMmaCJnhgZEobEZwpDdrtNbfBCGqqLKCoy7DbBEy9g9DEVr4mXzG8PHFnHcau66c",
  "key8": "4prfCP32pnVcio2YYLspFuJUAZVyyhuj2cRJmpfx1hxesg1Mcakd93GwEqszXLjddTvoBHEGtp9TKJC3apNmTNVa",
  "key9": "4XKm2no5YzporFAd7p6HpPd3pC3P4pZMAqqW1uHHVKCBuNKDeXAZMERMg2ytAnFTpbM2WrtF1kCEWFF2d7xCojB",
  "key10": "2y4gJZfKWDgmnrHBTsqkjPT1z6XsJMLCEYKK9TTnvfR5LTQJH5iVfkP6efeVD6XJQy1gEG6uBEDJit2LEeaCMXcV",
  "key11": "2mgYyG4Kmk2WHuFrpbJD1ESpg6WQGf6YvfwSN2tbzWcZ4twPtrNSe9D4Vcen9TB2yJyR6wX82Pr57ZU3CvhDy2oY",
  "key12": "kUZCWGhKLCRGBW6idcyhG2BphEqTs7mH2mM6Kwh996Y58e7MNiSVEX3TcSAfq6VFmjxk3dnCd71bitYkFRCvchg",
  "key13": "2bhe68Pt7JNxW8DKKxGkLTkWKqfNaYNBQbTekzSiF5Pz3mh9mvqMjWHBuJiF2sohp6Ttj1Vuo8st93CdoFX8WWQs",
  "key14": "y6oet6ep1iiXMEA7niNvE1BxwQPLpY7p1VYcEZVGfMYGYnRWE5Kqp2hakpZBiwbrqY5W2AFyemckPyfjejGdaAq",
  "key15": "SsFcKNYKoG959Jy6uuarHCmFpKCZQLD9XP9G9qEScTz5shwauADTy4eXxcnHjVbxRz8dd3xbg3sWt2MF42mYKGw",
  "key16": "4jQ2dcim8g6MHkc6w2Hj87CEv4mLQGz1ev4bw6nt5nErdKzYGjPPtSZjkLPJeeq1gCnb3g7bogc1FzX3nVkRYhrc",
  "key17": "PaWRAGozRbKMk9tdrr4Z55uWpJKBtMu2QLL9t5VabuZmSYFffxX87U25uC5bbjYH4pQ6mKjFgNoS55Dgwhd4oWa",
  "key18": "23Lgfg9zkT9ccVRPx7CAB4khg6Hbn43bt6AN3Su1UU577NSZVnCSvrr8JgqLwUKRmzJEGZBj9XZvmETb5Hx9MaEV",
  "key19": "4YcU4FpSRXhs8pZ81yLr6MhSRV5oQAwsq7MddtNie7v6UVgnXhboknqGRHsH7u2D3yD4tZc1tQTs4oaKybhmuPNk",
  "key20": "5FV6SAV5PQswJQL31X3xrCZZm7cCwxyZ41ckE6KEDMSUE489rFbSCc4sT1jnViMGeLhxitFp6aSKvir7T4HJJ9o1",
  "key21": "3Lvx1ixrNtEDpu1fWZUJvApabxfQKnu6zeQP3Fmy6a3zLqeZJdvik4kdPxqhTJYWwxRYvPjXWFdRSPGCsbzhbV2P",
  "key22": "42uuCJApV3F5vJTTrnXAjL4eQwC9CvqhGuJT4bSpz1VDZss2AjHgGuJXYUPchuDB9RxacKzrfzR9EV6QzAfJVq1E",
  "key23": "2sS61JLFWEyKbDXXdfNQuSqjjHcRvFrVc8bAv9wWJtRcvAhjjjfeJxnntcKDJ6RKj2FaoSVp2GQUXYy4mWxyDGNV",
  "key24": "4wcWPNjH3kQiVTPQHSUnZfsDTWUvGDXW2YnnkcVwL8RbEFyMJVoCJ21vAWMCR4E6fPnE7hYux8DGVyVENWnfGXF1",
  "key25": "4HhwZQjVziR16Lf7SMk6eo92P31ojFQXwBniKF4xUdqiiTCVXBzLUqCNYjTip1LTQJPExU2RtMsdzR8bD3pvpMZG",
  "key26": "4b5ibqUYNfpvDmFGo4SdLZBZXL2XuMWDami67FzeR8LiokzoFifPuffrFNT3J5EdLPq2xrrBkhUMiSNqoVEDQzTs"
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
