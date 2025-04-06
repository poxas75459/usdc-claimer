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
    "53wA4BVtxFbJXZy75ghrib5m4ay2Cn4R42nxH7R4kVp6zc8S4VDbCeSf6UPLGwdWhbrHPtyLiEVQwXTno4Be4nea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZJWdf98L7duogZsrtAhUnTEUR5rYwb8bsJDjG9akXaoFycS9Vc2tJpGBPTmAjScTbFVSozNq6S7pEWyCmPay6j9",
  "key1": "Vj219kdzcWiH4T63EaLQsVJCLhUdnr1ik4aLEnV7pS5Lf7Ne37eaZNZsjbDGbSpuns3KXE1CFKfRMnatGimTtHD",
  "key2": "36bTrXy4qUfdVPSBuhHBVgiJHvtk4GzXCHXbfg4decxzRJX2TYCMVmVNfnMLwH9zWiYzRwgwMhNBD5BiTDreAUEH",
  "key3": "3sL6daJUNvDYQAMjDurFA8JK157XVDUhtBqqTPz6aYVBRDWGTULei7pYv69AUEjcnB51dN19WJpDDgtNBt8jSDpE",
  "key4": "3z6UPgR5gM1oMXwdDWgRWjs9xZboZPiofzAkLqYYwXCY1mxo8rcakdi3m4jYCNWf57q8gubPY6oxQA6rRfPcHo9",
  "key5": "gQCzbwngt995apz6ArtsxyZSkpmcxP8N2yS2K86CKu3vZEB3bU3rYe6dgDiKbw3K23QywacjoErJGAvToQzfyLM",
  "key6": "2ojgHnnMfp9rH9g7vBRN2CX9f5tnvYWnXNcap6kzsZiHynvXiHdNmaynSiD6uwAtUBoh2ZiUbefnX8MGtHNeJRDE",
  "key7": "uMbbUt9yc6yt2eQADPJ1TSZFgcXF3NXoFwj1hCGEMhqy4Wu7NsmiaBqWrDSDREsfiQ8s2GkueyUcmuLuKz2aKFP",
  "key8": "3e7KU7n99rJF223A6MMnVvVXeuCSxzroTgNCSFjnxFh3zSzdBKvJsZPExQxJdaKDU3j71hmWrow3SVBQ9rdiAZBy",
  "key9": "5eLZ1SePB9hL31me1dzzTfPBzfFhakbwRppSLMmwBdVW532pSJVWWWkM4HHiBXAhAoN1m6oK95uApo3aToHSoEoa",
  "key10": "3A9oTc98a3QpmT7GDqjvGHEmyamRAjzVSHTMWAGNU7gJGDrYYMXEvdgfLBmAcAkKKNQB958CCiGsAR4vJpdh9wtR",
  "key11": "sTb4Y33rsAanWe1gH3kKpooZJP86zGNynfxdfrwd46egmP1JJa5hWdeZZCmYoHB4VsRk57LsQV1AFA1ikFPbdSS",
  "key12": "3eS8DZLtbQRnSa4PAdf846SX8Vtv1K3BKqbBgzcVgwN1kWt1cTNTNG8pu4nTPmULeTE312Fd424Dy9jggvEfAasT",
  "key13": "2yciz5pGNMGhSkoHiFB48FHNz3Dz1ZFBT3tyKA7esDhMeoEQAPEQ2kaN2hFH7HGwq4fojtd9XFfkAJv7MSFaLNAD",
  "key14": "65itCUXYYGzfrock8M1pi5mFJHHaX8m34Jgsts5DQDuWXA6uWHkxMk5pkVArxkMtLGWWRaiWR9yoEtvzYoW7peHJ",
  "key15": "37JFmkXnhypddiT1f4iPTnz2ENP1xHgXCip9RAMeW2aTb3WMyJc516UtJY8u3npPRx1amtr8qXvbHutd49DyXoue",
  "key16": "5Fv4v2x3CxRxvcJSyS4M82QE38e1SqVXCJGzx6CvEUGc3dAL76JJZuA7rz2grbQhV1jXJKfPZDz86id43DyqaBdF",
  "key17": "3MrXDgb4oYk9FkfJkT1hGrkEsMscB9EwP4TNFmoD48DKeDKJyursZyv34oLw9Tqom2BzqS5vk3Xt7jMsyNE1NcxA",
  "key18": "1Q9NaLs1VPZWzPZaUxNmipytVnDJyiQhTVt6oQ3QuwAHFYrUTf9jH3W3T4VFF5yBF4s5psZXT5qKCmFNxWJhxb7",
  "key19": "x9Ei4JDQUs6bv6oyM67ALhnMX6GZKrZ57Tsi3BY7W7aPLx28qf15icJPtTNymnq2QNKDcEb3nZYR73fz8vFqWnq",
  "key20": "d8n85DP3XzY9CwcVtLcxt2jX13LXvd1vhK3acZ52hExXtCe2ucySNbsu18sDfYh7ZVjjJZjEmWrKabnBf2L35SE",
  "key21": "4kmv8rRQyoJD8zv4ygG6jSdvKZxtfBQN4bKdJDNf34fcwZiTAsX5YLMXUGRK7DGTNq4NT9UkrB7Az7hkKHxVLvrU",
  "key22": "5VD4Gd1XzaNLkhBbcbzij5i3EgmZqhJTvi1K8M1wCHjBdbDn2q4bZHqvr9cQAxPxeXRzbiHxMfSizJQV5gGyctYZ",
  "key23": "7TNGc2BPuePJohKbDjV8FnPTtBWNR98TbwyFQaWeRUyU3qgr14znuqYKsL4kK8NczqMACe6rcunKf7R22F7V9fM",
  "key24": "3W1E2ctJaXuNB8hsnhEPZLhjpikn4jXewvnnwjtGQsStNfBVccFZu3R2h2cu3ewQjDvsjE3B3EviQZWwWgBHeQdk",
  "key25": "E8Hpgit6NeuwpW8musYCfEn7YxHYAexwnaH5k5Mf7Uo5UdLt356eRMKfTyMd3iWqzG8RCgJNrudYHCBBKRtoeDe",
  "key26": "ab5ojupykLoYjrRxVS3Ga1SZdgyNq7ggvBwEmKCzADSwMAAFoQPvYKVF4zYKGEiN8eeXYrWaKYmWACy97dhqkXA",
  "key27": "23eqxsRqpsssRAYCasYUaDC3HUC1WFw5s3jcB6w5Rs8aa2CXFM9s6buBVakRemD5peQs7BXxVxUeJGQouAd8R4rj",
  "key28": "4Xcv4whkPBrxMn2ZTNkAf7FcjWR9Hr7GcKs5iquMmR4eWxu5DA56m6PAd4kbkgVTedC7L2tfGGp6GaQuuVDrnGW8",
  "key29": "34CeMYFZuJcA1ZU6PWXhmTkwjWCzj1SzMoqeBjGM4uy6CArKZQ6LcgZjw9xrQiq1ibNQh6f2ZHpyTfAHjB9esbJN",
  "key30": "4CKie6ATMYvfVQmg2f6Y8sqgAjmqYiyb77zZmhSWKARZxFpaUJZNNDKafgCWFRXhFHKY5NrJccWdhWkw2HcaPMFh",
  "key31": "3CjEdDB7a9mgJbK6hn3XAcMUf7Vf1cBo8UVtZV2MRVHKBhRo8TqVLPr7jViN6oCJXFZXGJqwNSQTEZ1RdAJPbdAL",
  "key32": "4VuD1nFfMX4GsGqDKBuoAXmxH27KDAcjvCEt6XRnar1oDh4dV94eQYmCZN76QviXHaxSYNLEvTtXXHwAooByJi1u",
  "key33": "31scAdTMSKsHeEQT7RyGCv52AGiMBhj3jTGBYr1yJGdsTvxyqcnJHpXPs1a8egyo6Cdw6XhsQ8HfEtQUfFAMPsF2",
  "key34": "4yGZmi4MsT7EA74dzqpuRVSx2W7RA5RW7jq6ucBid7du7qydR9K3ATxeUVU2FqN1r3wY3jYcefzw4EtyhAikrBAP",
  "key35": "3AUvoFicAZofWxGAMsonULhk1HAywKD5VkrRTXmak11xdrEPRVHj93DSZFoPR2FP21zri53kmu96A5kVzGa3NjHF"
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
