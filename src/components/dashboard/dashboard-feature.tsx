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
    "25nUbu2Sp9mLgG3ctTUyphTesSNMwyy6MPjU7yEeZC2XwvPtuzfGTgbi2X8qEpD52NGnqm3xHcXycnqKGDQ1PuTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hVo33rrqw4Q2kkbWouFFNv223NxxpPd1cmXTERjs9DMVQHPvmAJsACtjiHPJ24pztk29geLwsz2HG6FkYHjbE7p",
  "key1": "48hpfMPquVDVtg6P7uUznY4RjGqwwuFBWgE16Hyg5UVJeaFTzp9gMg7atdhJtrRix1CGPMgugCyYh2dvJmPfGcbN",
  "key2": "58H7aut9TVKzYBBGxvTqzHfcvW3oNMNPzR49qYVxWroQ8W5DihqvHLa6bFXDNtqD4pnM8xS81Q91cqLrVUDUkQ6h",
  "key3": "3V9WMHPCHZDRx7sJnz3rQyQCJ12x8temH8MDNCSkRDyiVtaBWHEGn8FKD751s9J5zNUf3kvUYYT7kz5Eo6vDv5bF",
  "key4": "29kK2njrrhGXA71nqQknst5Nuk9qJBypdxuoRVyxPF5AtxYkMuP33HFSYXhmkV6hxUG2XwHtK7UCktDG6YYCvMrh",
  "key5": "4SZg2QA4PGvLG5R3e9mKG5xpgnqobPXWLM7hFwkEvt7khseUremAQUtLw6pTqZcxKd82yHt3CJrViLictrWs5JXJ",
  "key6": "3AHm6C7CD6BgG5wHuAWuqLzqgBrh9NqAcvQyYp1JJ3c6dahEuCZFMuwndms3syc91nDoGECifc1iyZMG5nPdA6ew",
  "key7": "5gF1hVRsoBhUKsPnbERxFwFdgL8neUkLN46dJ54tnmRkKFJWtushBWm3XuLS6XVkPc1SSaRFLn8P6jrHSKUgMWRd",
  "key8": "5nJWSGSjJfreajMibg2RyKcMVMS5qRuX1rhjLZ8QhQmBGCya6VYs3TvzqR7duBiWMXWHRoLAyEHbEe1HtzCT2zqN",
  "key9": "2vLDve8exZtfgUeEJBbU4CGaM4qG1sBSmAwbNXFrDXU2FazGZUEU863WYTCC3rM3qtUnZ7oNevrx9D7LJs19BkvS",
  "key10": "LY3uXWFXTXJPaVxqyCqSdvR5ZcHBxQ1VorG5tK4d5hgtnd5rNZN1HX2pPPoc95GfSx61iPJ8AsezEWYq3ng3QKE",
  "key11": "5p3c1pdt82RxmEskdw8MpeuShUzsuDVhSMdkEPkdBzqRJNv7Un6h6mRk5uhvByJka61YsHZgCC4SRd5KFrDcoCRn",
  "key12": "4KzwKCuNRAaSqQ6cwRkvfVokk8zYq91HyurNbTGh73NAcfAbbDXNW1sVkMpSRpwBEgcxDZQnjxFxXG8LCdp72A3e",
  "key13": "3PZ72ECPwF2KBgLj4y7tHTwnZbvw5t5euXydH998b9EgK9DfQ2dxsuHPvmBxkpEb3k4HMW34kbJNzLwgRoNRKtYw",
  "key14": "4NRbbRVrzxVpUBUXYFGhWQSgGRifqBXmshdeZGkC5FsoWpSFFxvB6KYprYAq15SYeZHyDSan4HwGxvP1pmeNFXz1",
  "key15": "JV3uSKoqP6mRaaf5bcHASGhfihW2KH67se8Zx4o8EBcNFu9WtaWQT6jkuBedb8kJqpJTGSJxGA9sqJSuhr7R31M",
  "key16": "5mBhEPkGszngDXkHFV6m7SGJKcGvLB2EpJ2CnTLkFpX84G9qZz6NNBt2F2mfW3Wcf9nVRNofLuSxoWowswDS3s5N",
  "key17": "3PTbhuw1JdCvgf3cB5VbgXrrQZEGXpauMjAjhrvTEZJ2kaodALSh9xhzH5JScmE4JrjG77hiBj5RyWoSnGh8vD7N",
  "key18": "5tuBtXAAyuBJsq7SDsmZi84x3JADb4yMBFRyQ1YNZtPmHBfTtV9GvafxLQEZKskPEmof7LcxgwQChN2GSBBe1HUj",
  "key19": "4AJmnKEN1Ywefd9VEVHLj7JCrthNSXqr9DAGp4jrR7xd5LfwXXH28gG4g1TGRRe84GCa5mMSsGB2A968hbRADQcg",
  "key20": "2iybiRCigGFSpFHEmAhP3nnqGqA1fa4b49FTZGLuXPuQAo79vEm7vwNFR3H1vA5tAn7CTPdrvvWty5Yicj83p6aP",
  "key21": "49H3QRjoqUomo3wRafxatTFRiwk7gJwPAMcFc6REdH93HDerpqMegdK2G4Kot7qx64PDz9sNAoCN91fdhgjdvvt8",
  "key22": "GPkbKdYmQHwaW5CLcBmRoLbgGueUSn9L4hNnnQLxavU2fHNfA2sGfvzGNEDqFNNu4J219urkWvCvvxfqZ93iHin",
  "key23": "wPqKhW9MNVja8nZd8UojgKpxomRCHXc4SSi6uaSSLnx7NJ3kbBoy7LXRzGBgFKWK6UXZUMXv9K7Rp8LWhq57Fkf",
  "key24": "3Q1LfzcEqsrxAhaB2fBFaU3YTkaKnaFueYUrsUEZ9C2WpiRaK8ZSXAD6B1MPUJMfE89KCArDpT6YRYCq5zmfEyYG",
  "key25": "2LgG4Ua2suUDoMPHtNn9SX5g4E8cNi71mKhe8HKt3qqp5xf6cqcB1evxi5jY2W7acXocqkiYmb693Cu5sYq6UDvW",
  "key26": "m6hoqvZiwLkL6qSLsgVpxE13vCLf2eNrqsgn5u6vByZwgK5pfLwXmBqjsa1DigNhiWgYuiP7RnCyF6cqbqsZYU2",
  "key27": "5KpSoECkFPTVSNthMTrfBX3ZRdH8dmaVo3Xua958rJjVNeJGtmDCPx8V5fXifWBzJr5CKasgxixvDwf4uArgbmvZ"
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
