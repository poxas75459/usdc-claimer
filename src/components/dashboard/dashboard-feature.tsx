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
    "W7TyscMKvZ5wTa7gZdb2gXUrXkeTFSmGMDdr4GDZGtZJ18a8odSSHki42yUaHsMBh9Ve22QwyXSbHW4DqHmuQLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49YAwqT1DvD9mgaaBHsM31KXn5N963bRuvK2sbvvkEXLR9Jy6j8gmpHZQHtNtVT7Ymjt8H7p1ZHWZ6xykH9xQSVH",
  "key1": "e9oTErQArAxS74SbWECAjyau8Hih4TVCu625bnDEHuUieVHYzeNRGTXm4KyHz9oSjfQVkAUKPz9AWcxaotnjQKL",
  "key2": "5KZP42dgFeGPXA8cMDFzBtaNQQ14d4kgLAV4Ca4AgKMxnkR3xBSmhwYByh9DDdyP29oLpm8agRnYCUsUSoNvcp2t",
  "key3": "55SF3iEeCC7UHqRnpJoPuySWqtF3FUXV8upVvaMJCzCPVU2kDFfogU7cenhGP7H8N2coJD4ihXfr8pK4gprXiaSR",
  "key4": "3RXdwntvtDH1uEg2j7YdDpontApz5ro1AdrncYZQUaAfjGFq6qEEKR2zp9cVcFm6ZB5eD5mDvZEK5WGEFpB96DXn",
  "key5": "2tCDZU7xw33ryZhdHcawfzDqrxbJ1gp5Eko7nVVgJjWLhE7cwFWGqeVhiE86VFUsk4goTMEvTZFYGAn7bEmcAiN8",
  "key6": "3u2FM9pBmr6pFJkCE5yXPwjWQJM4pXy9PEU4JauXrcWYDpMfP4z1SesuXA29CcXvYpKNdSCghkJoa521NQ9T4YHg",
  "key7": "PAeqFUMbLtYAYXhrsvhkwPWmTeJiXk5xbE3nMT4T2zgo7SK9ELgc4HiEhLsqznvZYBApt288pNtoW7zE2HsnnHh",
  "key8": "4zrE7pWEWRGULVoHALtuhHm4dfGP9Eod7TnHUTEr6izJy8wZEeZQJ56yiJcvmpFYPGPgTDo4cJp1KgKSoNdvaCr",
  "key9": "3Y4pckJCSSwTRjewNnNdsiLdXhkk7KpVMbafmQDUyJtvwn4DvRhk3qKwpiup3vXUnPhEfmPpnQWmrnXzAynuEqHm",
  "key10": "2y4JsAHDVtw3dUUy7Dbxn6RCQbQ8igpXpPhwafmV6RrBXFUxWEFZdwhQBBGhrkS469VaJMRTLB2GGinEPvXKqyn5",
  "key11": "5avDeKhzJByYfuQpUTTx8obaVEKAJTXPPQXNcnxADjNjrTB8wL3Z36T1ZSt9BFKvciD9n57rV1qPRqSf4X2zK7wH",
  "key12": "5G2Q6ntGrScNBxiaV78hMH2Kb7o6EsD8xU48bTTomHPjK5ZNxUaZfugv6Vjqaz429A2CFFbCZi1F2CpXmtyJaDdC",
  "key13": "21udDYQKqb1n2swQmqBmBbyv1v88sTTq8XK3Z3VA6xb9mgV1TmJj31DeGv7L8D8H7DAp9vmcJnhkG1oARpWQmFoM",
  "key14": "5okNoCo56WoR8B2GDxybypYvhZiPoXquhDBM5gujLhrGUcaHVxNtt1phdJzAa5iSn4n6F9zVVeuK6w84QhGwMjTj",
  "key15": "33KUCTPTkxmmG8rS15AD6mwo1KQ4KVvpiFvEFNx17t2M9GkPDFVDMDk4T6GSqWQ4sKc2ep54woaMpxN4VWaCWcdS",
  "key16": "2gbVC9CKjz7e2YgRSeato3F7Fie2CdwEfEAWSJ3GVEq4wfa4bbRw8HrvZbRH5VWJ4BpKACj3nTV6YrMjWzgzy24x",
  "key17": "AKtDjw8QsJG35EEjtKBGwRzszokXMukwogdoSc62W164Pg7uCeo7Guke563kHhzhnwtGUTPX6hsfEv2jrLgrPms",
  "key18": "5MwpiBdq1XvrdGpDtYjomsT4dYapDeMjosQy9gxzNajWRuDGNoBqoejCUTfks334fzE3D4jj9G45i5ZarDFPuTdN",
  "key19": "32ZAdCnFFSRNz5u8m5mBPS6ULvhWTYzDwCHjUYkSoLBPKDjHo4wo5tkuACHPXUZtb6Z1Wm6gFTHjradbWtXqo55d",
  "key20": "4KoQ3EPmm5JWbCZWFa1qwre8HJGkZPgkqzoeHTgeK2NkUkXbXSyRGkTQY4frYZ3Y8cU6kLX3D5RrFQQgMQ6p4no5",
  "key21": "3NuX8JJTx6zZBjUo1HYivWLoVnRbwowFHLNWEYXPv7uWvLi36egjRk7hATJ2R2F6N9rJudKMDKutaT13VQrSs27T",
  "key22": "33LFAbZbZSPjqSnM1gvFqXmNdQAJLvdAJaeQbDP82ESkryVZvdeopHYHEMTF3vj9dkKKUtgkEtZZny46o5ih9Z5R",
  "key23": "63EATvNHSvo4aUsTtSuaM9vmHAPAwKkRgLZx3SyBdSKG3hi1fDWsFMRXMRKhs3GybBJP7nRHTpRxwvU9Ux48F6CC",
  "key24": "3BsKogPyWhpDUgDLxDCPjrC6Dbr8CbekQoSXkQPjPhbnfaoaxY4z5mFadNecwZcY2UuTcWNP7FiQ55mDYDgYtK2z",
  "key25": "5ujxcVedhhd5wcjjbYDxjJ6KpX5toi4o7mrJEcZS7nM6gomdPaHgkX3bZesm4s4mhyEJC2uP7G3t7vPFQtGx9YLz"
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
