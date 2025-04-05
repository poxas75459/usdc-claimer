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
    "3Z6y8Ba3RPkqTvx2okrV9pmmvJ8M7Awk1Ew5RYSroC5W7ufAmjstbMTwzJxw3iaS7nfnaEuJbu4f2K4bLgBbU3DM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vh8EkS67HgYx5FhgSZAkbpARdPb81F5GXx3WceowSN4SWbMAYwpJnJNrXSA4tYGStCZWq8vitMhUtMm6yyP6CiP",
  "key1": "4YGLbdgdQMsuQtAncZYTMEH1RLbCF4mh7S4mUeG5J7sR2hLYDeejoaaQy7mK6KJS71we6FD99xGpZUuEMJiHXWtv",
  "key2": "4Gv7QRtcatGPK5uhRKRx5QysUMCf6xFxNkGDeh5sqwyY3K69xiPzcz6qho4LWap17J7sLCxjLseyqQKkAQgpDXy8",
  "key3": "47ZgU1LCTntibJKFxC7zLba4RPZhKTKSCetZvvspcJQaZW1T566e5qsiBfq3jcEEfsS87ib3qZjmGhyHPK7LqUoZ",
  "key4": "iaQTYDvXKyRyZjY5v27izTMRZBu4nA7DZjRoLbFtdArVHnhunpV2eSqJU6tarKiUEzzYMeZ5MtxwUGEb3oNo5e6",
  "key5": "39HNAsuzCBv5ASf3x3sBU8iomPvq3ypzk2EN5S4NgKyuzZWditJQhgRi7a6NACJWdDmUe26L2E2Fet9fRujhQTHC",
  "key6": "2RKC5XEePKazDeXcWf1e8Jce7P9w8BKLkp36q2FnsZYL7NxEqkc86J1q33mhVfPfNdu2kuPrYKmtUuKAxiPq5moY",
  "key7": "4kuu2aiFLg4iYhn89vD5aEs86cwVJf8mg4XNgLdw3M7yJHdC4cM19Eprujj7dqpYyZcSev4QhpLzRuJetF4PyC6Y",
  "key8": "2WdAm6aCrRkF1vvZZzwJnPyskUzgDFSBUAa8wbvT6j4jzjZw5S5Fdi7VzwWBRVX1D9GhFWKCg7gmZFUtS5AN7PFc",
  "key9": "4gTC7HcCsnmuqX7uBQ8dT1yGJBU9QGvXDFC7ejP31TwFejzsme6WnrQxZuz5xB6YfCTUhw5t3nRmdMvzxxCqbvcT",
  "key10": "5aqZrubygK2ANFTswZSBpURXpmEfQ8RjKnBbT9E1VrK44yz2JkWgKZatNXFbQWffZ2KpKBxnaX4CXdDFBCrX5dcm",
  "key11": "4sCgwRQFRw6AJ4JgLKc84MBKkKUFXQs8gw9tE2gRCnX2ZWLFCfBUCsyFzuVJw5ygnawq85UxgceR4EUGLaDb4vg7",
  "key12": "zCqUSwRFyLSec5QboFBXmx3tkF6tJTXLuBKAKD9UfmQyPpt8EGAqN1HBdKu4SxErbKYx1HPB1XFbdRrwXEpJ3Vo",
  "key13": "4RmBH93dngTDYmggexPSuQcUMmASLyqH6n1YNEbaZCQj1c4rxp3i2cy6w57fcLa6ThWzAvmkKLuySEgiBz5usnnH",
  "key14": "ZFHyYqScEAym5NhU1Z5Xg4H8pv3LsFSgYCbk2QBYhjVe4R6944JAqarH834HYfk88XD6kpfHC8cAoYUqDjjyfVr",
  "key15": "FmZqDDf1kYYiPMsystxcLAw29kr6YbWo7imhqiJNSXSaPir85o57jCmmFENhS5k1uRFWeaKMovfDJoiqnvy5Cvw",
  "key16": "2c7VsnDedjQfGA73cT42d1spwgUHRkp32DZNCPuYpkaBoEPLn58a7oyW36XB5zgnhQaBR6mQgnhsJ3TDPjG1GEva",
  "key17": "3EqK3jrrzcSz4g3LLvPxvdizztCshrGGZ1vkVSKUX3sUZGMBMzMCnVe9LYjvwfHQ22b3aT6u5mudcuWQwwcA7Tn4",
  "key18": "4iCu3z1BumgBF2V8nxUBQZTLGZykhcEnQh6cM3nJ42MgUYXBPvPk1kmk3qsGrxyejBDJeMF3szTzHaoRFCTP4mdF",
  "key19": "4uAspmXZ8k14R4xyabu3qBaU7hxm1dzBZ45PdKosnkoZ7Dqzx6bBkEpeEabsDhF9eNTyot56nsGjqAits6G8reZN",
  "key20": "3357ubktvNoUo5idxtDViVQE6AQC6xAhB6UtqbSP5EYSC1m54knURDHuqUVxVfVuAo1xkPXsGHjRmduDsZXXUp5g",
  "key21": "5XKRrTpRT8YDHnGXpzxkhKEmkQiXUfkeMNVEfzjAmwtYnfUe3uWZkEt4caTfLjgfFTyziuRSeNoXS4sMQEy4o7Xw",
  "key22": "4XF5Uw7JpCNcQVjXiWdFf1yKAEGZWbX26Eznonx3bgYsG2QXUd6L3HxKrxFZbJPpSDUddD97rLffCCLCTvG29hEW",
  "key23": "24gRZ7Pb8iBqYndq61LyTsuJd5A5qmmUftZFcScxrMcrMtxgXdSaaAvPzuJ3sNdXEYf67UhNVfqgxdT41Wwg5K3X",
  "key24": "2N3d9HhJJG499FXJ8obw5AQbtYqs3wp32CNuV9ALLDPQEjwUrmUh9tukLSuWMGSfRMXyxTuXYzTkDxwF3RkwYeVt",
  "key25": "5FZmxDdpiwbG3Hc3XgL7vYNLNRhsg6AxYd4HXVMXZfcnRYDejnagjifxLnFzSasGkX3rT2d2FgCN6WTGabS1iD5w",
  "key26": "3yPGVrrd2maY1KM6XV49CF53Hxg1wxK4vqGwDFcfgGPN8hphrTguGzjJamqwqN1htHL8NgQhfmGnNhiUyJ5gX4Ca",
  "key27": "3ci5Js9zf7ofVuPkxXty6PZ5P6UicW9RFHgyc3NJXRoyZo89CfbXkXNjqHZvEb6RYorYxFQJUXHTAa5Fn7dYXkWv",
  "key28": "QhrgxCpaHdM6tfEWGrYL2RDcfjg8Ly3PtCeQrRRSn9HS9fXKM15HvLD2MwaXbvWjZ96smcZNYDJawi8ijtbMM9z",
  "key29": "4u8Gj7uac2Aj8Vduj8vDVYx4TwCZ3zKqzwA6ueJzVFBDfmozYgxEksHsbSmcWW6SQn2MWC8Qor3Rd7jbWEaxEeoD",
  "key30": "357Q3wfneWNoUQN7TowFUxWiXpXbzA9Uc4eziBXLL3n33DfEY1x6zLPZi6hTjG1SkKDjXhiF1GFj3u9C4ioHaBwk",
  "key31": "Qz4U9E5XDzvTfsfEi1CKVhLtx86S8w19A81VT1bdVKAGsUBV6aJ2BcQ7gMfXn6DVhuHJnVXdP4qKXCgYzfrFZMS",
  "key32": "5qyh9ADz17r44aFVNXDZJFnMjjzdKoYa6EB7vCXcGGtUneNoB4PVrLrH5KziQdAQpkBHouLDBfkXDPnumY2PwumE",
  "key33": "4nBieYS5oNLhz6DaVXdkhV2Sih2nYZ38ZtC4cL97PMrjYq5X8vFHAWu64RJ9YJqkgQQyGuYNHqDVUHkqjF2taJs3",
  "key34": "2oLTHYs9j3F8HiUXANJXbkBzKRoh41trCxSMVvzgCaYXW3F6RCX8SzJMzLrbdL3th9CQnqrDcREmPeDuQvZFdXFY",
  "key35": "5tqsiDH5KSXvKuZ5AnJ4kpnF8yEYgF89e5PmHxzEz6YoWixR9M93NqztCKShLhRbtcAnQ84rWNEA7vzZx9YHxVfR",
  "key36": "2Z57AeykqrfiEy1V9Q75nczkBAteatke1HGmnkmSqBMzTqWgQLE4HhJeRwiKQiyZ1nH52vhNvgz6bUJSf5zcxQUU",
  "key37": "32Z2g96x6b7K2N5eDYbeGMoSXVh35SoLtHMuDcxwmZwCho4iHVq3F3MEHZ6gG6A2fQ1EPc7wdm7xWGeazVNEdByz"
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
