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
    "2mcXfa8CFAGWffRSUW1Gndzxhd3iEvLvefRyniMNbx2J9PEPRHS4SwxgHTzccPdusB2bUJcbQH6PRRBnifgVi7in"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VP8sPq1WVFoR23b4QMA2TBh3YhvWX1xGuLKXE8HyAKLMX5EHmwPQsGuAYB8A2PehoHANC7SbBqF37spadASS6xn",
  "key1": "E6GPBm1QDp3Ro9vgt8XNqgrjH5194pnxFJswKL6mvkxcpbsZC4nTW2VmKz6z1jtZ3WDAmU9KQdvuKMtRzDkCnVY",
  "key2": "5GnwcHwUQ5EJPrLMGnddeUjaPvNcQLDhN3i91WiGaxZCHWrJkxRoi2ZaK65nXETHx9F2gU2BvAKDwhJqr7Yr2xmq",
  "key3": "2aWJzp66QpaQchDiq1Bg94V6aKF5gK15C6sLY5JmstB6jyvJXTLfycDFPhVe9k2tsNYxGdd793xAWhroGcyjS1Te",
  "key4": "McztuEN7iRH3fLSew3MnhKarSTqsfmy2oL81RmrwzybpN1mWAhgm1nbuhbc2Rbtu8gZRqwSZJkEvm9ue5AdYSyi",
  "key5": "5BDogv2ND8aNMDJXAtffh7FX1WhDFi5dDZaLbL6QfxiKPJsW57BZrFmZrry43W6Spesqa99raoTpknrqHN5b2wJh",
  "key6": "3ZDVcko7T2qKyK2ArCjnBB8DH6NjKsyivYnZRux1L1mwf2fjZ2C5Ad9oemHTTrugHXBRn3kECpMr8qkYY1YUsTYi",
  "key7": "33f2uCNrthRJJhnkMz2bA2xQfuFVnCza2ywP5mMbmdigQ7P3znoDydvzqRiEGGjVaTJUC6tzXry2xtqQKmhuEfRw",
  "key8": "2Y7QcykGxymBN5FckDw1EzDRfq7DpZCrcYgMFF4PitRxVvr683vhXqM9t1oqFio5dcNSR5ZWKDMkjbiticPNp8Pn",
  "key9": "2sAhtzRwtGM7M167W5CKNBSM2nxv2W26UJFULLqVFGF2cvMyPnFwgNbhwZVKFyfkhaCPFr7BEFpW699EFmsEvuk2",
  "key10": "29pMsXFhvidPBhk5QgsmToDSnqUx2WqrKGVeDvHJpmTnDseDPBUtE4P5qp7JumDoF5D9zaDFPFVDPehJGYqFN9XV",
  "key11": "2QQ7RtmvFa3TVeHeYPacrJc3ExCXffAG5Rohz2yGjUaohCPxCkMmxvqxDFAbW4M5hY9HL2cFeeVJdNT5YsPXa66t",
  "key12": "4xSUW54kPqdHKeEDUzBBZAUpgyTSVt6rS2sm3vYnuXLr3KPBLhbN2w9mNSWtLS8Typu5T1ZL72PpWKws8NxqrNmz",
  "key13": "56gajLu1N9zyemHRGTPQLgd9vHKLKBzXg8k1CXmvziQh2AdtzqyG77E5frdQDRRM17CRP2eD7VTkRuEPgWKmMcZi",
  "key14": "37RhBdXRzPC4kK37kfYAHd2ZGvft1UhosmwzBrNBk2C1YTT5PFrtzc58i1HDiquTx3Ls4xv3dvRqe3yit4h2iYba",
  "key15": "358wdsbyuMjc9v5iQijLmSLvmTwiVTVjYtg3UN9kQ6EGxQTDCoALT7fxM9kjBtSHUjt2mio8T4Ca9JCdUhih3eMs",
  "key16": "2WSoynLbxQKRctvspPHLp4iLp7hGnu5ZoC7sCQos8vLkzk4MuZeDFggb9x9XY25y7ehs2a1QNRhzvh7E2kT2wz3f",
  "key17": "gwgufrrPA9Dey8uP2Ejy3J1UwAD6zVpThzJegcaC7w1Dws7vzsmZ3G7g8Jonj5Q3xQHmcbohop641UKrNZYspYM",
  "key18": "58iR45EQMx1jSYSjebnw1kgHnbzP2Qmf5LdLp41NM4nxCL8Dq3H75XxokNZBAmYcJhmyWCZRGNabGMiSGzFNoSXJ",
  "key19": "3Su5TsALVzbbq9yiJxQjiWukDMxHKX29q7xct6tVwSSgotWtzWxSffJq3ZCfwsrXbgY7tEM6DrLB8g3asH7B2j2u",
  "key20": "4wWZzRngGXmpzXwhEdkbQZoEFYnny5y8YytLBv7Y8AhGZYVC9KQ4rYP2Asff1ymr5JnKQTzm5q4w2FbVJGjk3Gxx",
  "key21": "5Djonav7xw2eUBx6NEesBW9gc6sTZ1vmZeU2aryv3w4AVnMCUaiAs2uXF3TwvJYu2NaXmuvo2ASkASgmpHfy4ano",
  "key22": "ssyX7nj4Lk5v9VAuURHdLy7AGvb5w6V9euQgHt7FA8suap7d4sNhzhs2kqwV9dqiV8Fb9wsvV59PFoJPHGHPjc9",
  "key23": "36PzbAqCPNpSp3hBTbC2baoEQNYLE14EMeKPUZBewC98mU4ccyQvDh9GRw7TkJha76FyQMR3iJiRW4ogpweVtsfz",
  "key24": "5LnsLeDDxHvrKd8cNhE2LBrxZzL6f2wKLuenjXMa1sDJgUg17Wyc6AwxKLVADn1mjFKdC8FvNCno5JkV3rRko2FE",
  "key25": "3Ey2QsCcxARmBpXrtgGrxn5Q26tWwei9pBT6G1jfhHboaN8pwcaxFYtgBHNzsnSX7LgGLvPQXMwExv5UFoFjtNB1",
  "key26": "3zL9d733PGQgfqfyTsxvy7NsumC3sghb6cqqBPh64eLtzm1c7Gfo3ddbToAqXHUgMCD3kv6BXG12K5NRZnwtWdDD",
  "key27": "2EEGN4rCQ8szAeWwkYvccQTNSowvasDt7qeFqm7vZyC14H8Ek5Kd82ggDZmfxLFeRJP4x2Z2dorHk4GeVLzRYzLf"
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
