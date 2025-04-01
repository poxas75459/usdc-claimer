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
    "5GSQhtvKZkQBGNeysfJMKysLc8jDo3Hiovdahu2cuqvNL2s9oYWKjyrbMp2qZ2hL7tKj354WhYQGkqMJbgtw9fNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zjwSJHNhr3MhgTDmHoq2ZQvxuqrvsJauxkpaLBio94tKCksXG4rUQ5surSDTS7XCa4t2WV4omMm3yKW3H2igNyW",
  "key1": "3jso7HYCw46p2NdCNRi2QsB34FQdTt5dbFXcrzzLLJfASSs3bkyyQt2gGukw17FY6q7UJXNar47uwMkHSb68owpy",
  "key2": "5yYwxCwN6ooGhCwfUtat6UwkmRiJEcBXfwroLv68Dg4DufL7CK3eMtTUpFwBsV6nBq48nfWr2Q4TZaqfBNGBpvRC",
  "key3": "2KEtVizSy69L1F7n3vH4Eekz274kQCeMoWraBpxZMHgKRjCsWYFPR8YM2HdnUikWPR2sJNjyYzjdAbF2PS5KyYV9",
  "key4": "4GFv4B5csmu6RLawmCDLG27zga7Z9XkCJMmN2TS8DF2CQ2iDa7q4QbG3NNX8JgLGFXr8dgz9KcJ5Yfof1q6qzHyM",
  "key5": "5ou8yNGWRhSpb36FQUqorLsXkkj8yNc6uhcuhtx2TFVF1Fcq9mAaof4qA8EkbU7iUyaik4boCVhT72LYxpisFgU6",
  "key6": "56pnjNfiQraUcLNxYxSRrBM9NEF6pXUAF8GBujkwg1evA1rpRQoXmHe2nqJa4bYcjH7xQi2xGd7CUeCA7XmoCozy",
  "key7": "MwLMiDrpJsn8r3T2u8F7DDo9UVsRzRkDY8au8G8J3b4Rdbd6bQ1Kw1dhV3xc29bXx3f4mvyoxvdV6uiS3QeRwzF",
  "key8": "4TCjsQPyU1qcjkx3FaUxnLZawHv2J3TPaQJX4uq1wGp2drdqWV5gYXNLsLD42ajBB1GoE2vRPVoGqvFRAaZsfaW7",
  "key9": "4osPtsiabzPS8ni9CwCFaHE73MqcjtXKxo5pE5HjPf7xSNtUSuVzyr6y9UN5bhBBiNnYQ8ahYQyH44yka3ZLgaHz",
  "key10": "43s2RhmHXpy1WaLaei3QnWLWmiRcQcECnhgTCT8sA7yRs6AbiLBFMCxSp5WUQZFiLfndDR1Woyhr1XqqFq934obU",
  "key11": "5bNTqDY8mMZ58q9iSZVwER4GncY35twyQ8f5ZLyKvbTT7Z5BsqM28mDp7P8ZaG8LY2WfNwGaVYQeH1ptaqfwfxEE",
  "key12": "3PFtEQeU8aGQvieoGXmBCBadaJrX3wDyxK5UFGjstqk3ZwRcSK13bZqgaq1EKxTwquzAJknCdytrj2aZySTze2Ko",
  "key13": "jXaHZZbJVQpt97FWkWDe9FBGn5Prm1ujuyjd3yEAe2uz4qybJvV39QBGi2NRKsTcP7TiCFrCzXPG5t9w8kvZHFf",
  "key14": "djZJeE5UnbgrCD48MHnMm5BURmWWHzXMLjBooszZQyCdrUviLue4gJvX7znLAJ3uBGuqXX9vpeRcpNqMrKSCjiK",
  "key15": "3FD4XbRNoJxWWq4dtXzTNc79BbYi2eFF1bs9MVtTLaBj3LZL75jz8rdh9L8gR7w5tesnX9yoBewftwJaGGsA7zHW",
  "key16": "5eHamCtyNvrKrjvMWihyn4qxS4UQFFLhqzsJC1wqpB4YJmNW2pxK12XYu5QejUbkQwjAFY6j1pWg7WrSd6NPPA9f",
  "key17": "5MmUXiXypnoCCMqTQquEH8fGB87cWe9FVf41Yt8KuyxDigQboafWQXZAF1kRgStXgVuAUJWLunuPUU5kRnk1T1jQ",
  "key18": "5e5p5TDoMgteZeY4pnYbWucj8XcNo9sJxdiWz9q18ptgH8tEwPxicCpoyCzeeR2Wm5trf5PpMckrhAcbHcY3sDLJ",
  "key19": "5gnRtYhaf4KddMzmnjrVmy6zcnNKgJ7NBPUAcmDLXZtfRUR4GNJrThYwLq7hqz53bLmtPgAZuEwsxRfujxibxwdd",
  "key20": "4GPt1D2dPzsS33buxrtSz34czQx3W5w5nVy5ryd1NM12RAL5DS4EPhkxZ98ifBCUhGWgDEmBwZtFEiEj5sdZntd3",
  "key21": "5KADCaCZq99reCPa4ubXzT3DKWGy6zrigd3dVdTYwb52XugHvGimsgULRMYZBU1AQsycHvMjCKia9e8r67rZUB2n",
  "key22": "c4bjRRyMPePTpptPxHp8mkgpHdEMUEtFC2ZUpqRUYwAH7ZK8JXZpmEmkDfm4mGQ84Pkibx4GKHybKbseAqySoEU",
  "key23": "5jxDGdrEric9RKEPRn8nrFWiNaAQVrqLMvqAgeXuVJpygfTsZhh8wGg1Xpq6RRtdnteUb7kS2zLUEP4JsgXWXLq1",
  "key24": "2xFYEn3FgaGLfCPK933jbjfH4oALitwxs67ofN4g4vMgpQthF8zCtXLj9AU4pgTNeJLSVBDvWBLYgYGx429vfeur",
  "key25": "38jjAwdeZNUoMM7C7Gkx46ZSx6YYsDTay1aPP4Zv1uEsNG4rU9npQU3S4toqM5TEYrXnFcQGJvVNGcNS2ouLfSgD",
  "key26": "4jgUqnVv4kmRyy1rJvVrABeELrrRZ7XngE8okBViuLnJxz1cpCxJMDGTGLWf9SqNrEbdmvytuTKmeHox6iCrfyqY",
  "key27": "3YfGns6aA8ApQw5Le57neWscJe7sQesD6WmSjnZdX5XcQAvNQ7HvWsy7HUE2ZhcLBkV82RuiYbNmu699KX9GVCuh",
  "key28": "4RZz9sSbvmsUBt1iNYVzLCBdRrqaYWdQjmtGmQMyFBqEtAfGaxBeWXEnonZqpwX2SGdNWeiUFAT8FeYxjBPe9WM5",
  "key29": "2RcefBGaLC68TdA8SNqibvFg8DxngqthuS6XBNQLY28MNj59XVP2x2evzR27gXEBeyJFPSP83EKDRaBHqT9jiWdw",
  "key30": "EbaZQvtCtCiJ3mBgiwjRA1jPn77FjaR8QJnwRR5FKoxTWvFidppTWQues9gYyf2fMzBWkoPtVe8UsHrYeGHX2wy",
  "key31": "5L4tSdZ4gBck1dvWN8Bojp4CKmt2prDefsofm1ADkkeXkmrFoUJwEtohNvcsRGXiCnaYu1AKq85RFzwN6Z3Wu6kv"
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
