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
    "4vJwS8CHmXnkowCaKCdiHLFdsyrDUYWJXojP829oTXPo4RTYNue17uDpVZdR3h93xvGNFsbJzTQghdEfk2RaRqNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34JJYPGenxStATHD6hJaeukPaRDa9bzPw8y1QNg2hQBPkQMnP3rYgjXSw4xACsscNKDYAmDZEJDF8gSHRTMWLyyo",
  "key1": "46NFFXRXUaFS94Ce3KXmVxBEzhvQeVsgJDXdN14MJGambEpY2NaucE2seWRUkKRxpw2aZuzVabBqgAyabqjaBPJf",
  "key2": "2Nzd8PXAuJYnzvNoM63suxDg4SED6xkgWFVgTJqPV6krcu7WB1b94TgZhXF65nL4B199J7kCqKnGui65ZKfjtB2a",
  "key3": "fVxudsN2FjQL8runH9xnCAeoQvDuc6AzTpfuWnyeNnzTLaBjKrCpYv7WW28C82xGEKjXi8QaiXojfvDwMcuXC8K",
  "key4": "zb3vaUmEi8eA8XsaDA2WLtsBL61aE34B8CJ36xMf9ErC74ncRsGkfUfGiDTKNgQb4U38ysz5bGydLokVYdPcYdH",
  "key5": "5uQcjCAmR2gQSeDX7ZCvT72G8SUTNx1tyi9UxZpb7UfkWcifhxnuceAPjEBqn9TXheW96QY35coCY8rA4UbHC8Ng",
  "key6": "5Gg2jJ5QdBRAFrBH7Enmg84B24XGr3ragxdqYYbn3CjxT2UEM1f9mZqxsw5dAqUgyqwmH8hUfJvU5oGUwjZtF1Zz",
  "key7": "45W41raoX3htMCXxmKStRSFFKncoLTW56evgBc2b5rHHQFuCegA9FwicuBBQb4kohWcjvDF5gZWLut9hdEuZDmtg",
  "key8": "35RVgieUYf2DsPdBh4toNJ6AqwouJr5eVmQZCCan91CYcPLHCBGEsotr1Zsz7Y85GJdJL4usUuwqEdzEqcZHY2PB",
  "key9": "21xukCNYWhNNJjHbqqRfsjy9u2s7HnrztGipxW9WsypVd5GWWoa3H21AxxEAgrujYuJ8AWxkQoXaKfP4q38374sc",
  "key10": "2YZMy3WkcBrUDt7LVUz9Zz2qqpHsXkekaPRM4Vyys9igvAL2gsSG1ZRszPDk7VdCeQ4Cf3od2aPzgZt6qSHL65VM",
  "key11": "47Uahic6q7gpTxNDiHk1CQjtyXqTa9qHanFsq5ANti15pHVc1YEbNrL4Ti8iKXZTPeP8FuSMazJ1jzvajXwbNJLX",
  "key12": "5snHaHDWSJ4QHKePn2KQoJ7ErxWiFjr7SQPgxCMGgWQdk9bUge8UTUKx27r54wgArepUbZvHVJ42mDeBnYan42Le",
  "key13": "4PRaeqg8yBx4hAoKZ4VQtd2zEihd4x7xeBQAtJoMpWqdyaQhTU2QQxrQzBkTaSE4XNtTFDrZernuRmTcEhJxafqn",
  "key14": "4oBjbnKH22kzsaAM7ebYkxJtcauAmRz9fAVMV23ipaz6gyc9bhS7ZHQfkq7qXx3RxZTKcUVV69eh4KWA6WifX4kq",
  "key15": "4UXebXCheVkV2tMdZXQHHbSMGmiPrBhsi47ZozCRNaCE2iyZd4KW2hjQHcjHwfwEW1gPm4CssvuspLwegkn5tivv",
  "key16": "2zosbtVMHACqqCe4B44ymEhtpu1rueMM8DuAqCmWUgou1VbXeN5zaif5kewpkZiSQ2puNXp7349rSJWKGGQt2ERr",
  "key17": "kszXEhxi9DXUAdM9r5sWepGyS5h5FjUMcWb37gZHp1hMydwySM8ttqEZ4SbwvwbY5Xx6ehZe8NrYCyDWC8bXPBD",
  "key18": "4wW92PgwdauZbsDADs9SyaFLh9CokFUW6eoFcfFsU8M4NfLhVtCZT7MdSa2GTnPTpEL8pU4muAHnSPkcLrnzyvg7",
  "key19": "28K9ZBQabfRDH5bHc2K7184AE74PXv1LnxL2ywzy2N2FbTAXC71ySSCJPKP63FDX7hvH1gj87aEyiaPjH33wXCsz",
  "key20": "3xjKU4k7N9weECEEWoMbdvzo9pkMq9p4p7Xgxxy56tfB9QRe6gS2ijCwrSHcy4WfZgrV7fa5ZWkhVbaS43foYYmS",
  "key21": "2bxWrbyLQ9ZqcE7jhemwP4NpkZGr3D3AJibJksq6zGPKMSs3AfaWyMXtmtB5ErE3iYL62emxBnLRmCoPtQG4BeK3",
  "key22": "4rnrL2b6SmdZgrQxquv2YUtkqf9BZFUaS4Zy45YpMXnqX3VsFKuSLMqMJVBtS94Yg5p32e2Zt13izU1QABAPTPCK",
  "key23": "2dU5o8yuzM4RtHdVokKNG5buTfz1Jh7eHcSvRFemegR3knpPFiG4jEWPwy57u3s3Z6TmRaLvxkJ8ejQjtNjxYJrU",
  "key24": "3T736niB6NixCR5JCdN6fFP3aGipfZrVeB2v7oJDKfHGgRxR6MhrR2etEvKXbptPWKe6LYUdbH4cXEhwUYKyENxU",
  "key25": "35svhaschN9GvCtmemDWjy9a4TSzGAUPeVxE5VjTy9HMhmM5WByEaYjoYCAWTv9x1jfqc4WAkqn4bRXvtFZZAs52"
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
