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
    "3ec9sur3x5oZmJ9iT64Sdrr1gJ84vmp9AuNodqYCiAUDAgSHHjAxWRPTGt1SquBRZJe1ftpojnz4LY8hDvZLjnmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vARQizpCTJrjLvxKdtp6sB86LsUA9S1EF9xoxZyaKbiecWvGMgqgPKimFDUHB6euhSes3EdewwUPGb4q1L2GDKj",
  "key1": "3AM3nNcRqj8fhCKW9SwLJCbqD7EiQ7LHApo7neeraJR5twYXyaCeByHTcxnxGXNLDdxbf8n72ewKf2q1773mcmrC",
  "key2": "vuVkiJai3Fb43bs8GVTRKo7UVJKKpUhuRPwTwUdywTxvyyLiywpTkDBQ7vN8qbRgRLeBHFBZP3Wo1CrhW8TSTcD",
  "key3": "4K65NZcmtjuVzXJyWdHiJ3ckQfvv5DqHEBYmxPaa9zaWzNdvH8VSLo1SBMajUV7p6czoD3JGZtaQvqzbjfQp64Eg",
  "key4": "2HL9LRxha4fCCwdyQ4B4MLDCGWqqdbJtse2wkbGShXnXMN5gBM2qCc6nFW5NA3jgj1BBsqXvHRoYnxZwZxX5iDNg",
  "key5": "4yrYBTvP7mL9NJPTKYhDhULDV1hhK4U9v6s22bcDrhBp8goE8JAHWh4bM2z8rjUaG3tp4wwRuqpUTgZtPKA6FrPa",
  "key6": "44L2niLD1zHBpueQqzoR6oWwReMAywbGQEgcNLCW5Md5ZQTgeH8Yt92zUfjMyi2SDMyoeXt7fTzHoyxFGs7PZ6C1",
  "key7": "53uzE3ZyTLHs4LCkQpAWbS9sjDpuac5ArnK49E7s1dvPj5bxoL2xSNTxQspsPDVKDgwNvA4hfL6qzqcTitcpAydR",
  "key8": "LwnfosYQZwb5tCMbWP95AYociohVGXmedFQEHAT8YyzC8NYQS2gx8yzuXUSjZNZvgL48adCNCBzNc6euhs1Wt57",
  "key9": "382jjBYsAcgXbvCcidUKwTxoZjkzPk1o66v63Y1h9fuR8ijkfHfTAiQTCksAq83EenHEiFu8sqeA9MRsfRP1Bxzd",
  "key10": "VQC36m61NHZe82NHWnntGPLV7Q5vT5jS7RbFH8wGbLKmyexvPfVBn8mJSBRxc6d9s81JYQP2wNufpZetfEryoYe",
  "key11": "3XfhV1QfjBe1dnDmnwq5qo9N1NR1Q6bT6biUNAKNn35uhVjBtq8y2LYrVrgnmAnK7My7eSCUat61sA1PuTQWtXn3",
  "key12": "4iRiXtn89KsSMb4cUnWPoFG7rHuHGBV8sxuv9JAYE3yqXFRyU2eVt1JBBtgLebSr6MBQZgdK65kgn25XhWckqCVo",
  "key13": "2Gc5enyvtbSYR97fsP1F7T69EvyPR4u1Z6ZFdXBJ2B4pqiVmjDqrEH1dNpCKmfrwAUcBb5zinNYrbixJjY4MZ14s",
  "key14": "4UJVuAgtUEE2DjizT3crJJNJgfykkby1TQHcAUeVeYpqXnbsJ6eGZXmg3wPsX8vTB93XWnTW1LpmLduyMC4Ez8VS",
  "key15": "2PCUVNajTR5mv2x9hMRPhkjs9xghrP5GtV6RcT2yKQXJmwGBqQopdwrEDjpwYShnGR5rAGzy2eF6iCmty5vU1hhs",
  "key16": "22KS2mvwi8TidEBRVCRyPq1bjxkXW14wmCycE5nxxmCT2i9o5FRFQAT4F5QqrGoqH6SDpNzXbbojhYuD3rA3WJSJ",
  "key17": "2iAN9qkhNNyVmFzF3VaGRHoutKxu7mDRXMvAsbbxauXNKUNS3gAxQV3JpdJQ2Wms4Jj66XLDwxaq8tktsyk7LuBM",
  "key18": "3jyN55f1uA1AyDoU3McL2L44Ubgd4c8Qfk14YgXCB3nFys4U6BafAcyCJjhG86qkmprM67BK2QFt3dxoTwGEodF1",
  "key19": "2rTY3qs18LTCLBGcoLw3vM3ASMza4sSomGL7aXy237rh5bYxpDyeaLaNoThAtDHownmcxQoVMmwbRziNH4wiy2PS",
  "key20": "LRPBC7ndQFGcJNhG3wFWP1fKWauP2WvkrUmukR3bZLhk4RRbYDcHWGTfrgBhNmQpSYcThGnwZTycqiih9iLLUGS",
  "key21": "28r3spcSHYfv94H8fSdNy7yW6TRn8UaWGdaVqfgHjMUs42F2BkoSiejDx13a17tSjKJwUP1TzkiCcRvhkuNJmUzm",
  "key22": "4W4kvxbktRhHnszQ2u5hNG7FsjGkNfm59Y3L1P3KvAR7PVCkr6TKPAsszJ4g18gUkfh7ttRM6P6tpaoWy7rfZwL9",
  "key23": "491wCqQuFoKS76ssPsJDg8mKQWDtvdATTyWwDKX3iFaebAiLSRv3uDsz583PGG9jQMLGSFVufiNfKXCPfzZFXbwu",
  "key24": "2gz9EcVm2tA7qWNsFwpnc62jtJK6Yc9FTJ9ThLm956vf8o2V5r3LhvoGdkYQ9v2Yq9659oJ2cR7DiyXVreKB5Chp"
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
