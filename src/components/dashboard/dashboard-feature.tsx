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
    "4ZUp4xPGAucoVsx1VtkxpXY1HMaEgS7aGMUo43v9TeNV6RqSBJvL4HCaCfb7qn1FSxbjRWFeH2VgAftStKbLC56B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C2syukdsnMiaPtGPHYaC8m7Qy1iRVpHLDJYBXsd4CJJDgLsmV4EdcGeVjRo1PJbsYm9rLi8ZE5uaNvk5saUsfcP",
  "key1": "2GcXSwnmCCFj2qMdPRK1D2YB7RWwAbKKa7i9sThX6YV4suyNRSxTMNmoG7cpvJaUZmbgdSDfw4KvJANMV7kLfExS",
  "key2": "4EvE5W2AbacY51guFnezTT95C29oDS9Ns5rJAwpHdtWhFbbWjFKBphedYPvtL9u1QPfD2z8sW7N5rAzg69WGNXQm",
  "key3": "27uAhRnQQavcpooknxNwGfgrYiECiunXPgHBHHAaVQJ3TfLkeQp3xsPM3RqCyfGRct3w9k3abUg2jo6W3MfJavSo",
  "key4": "M4TwmqEjtr4XGMk8gk6wGNm8NAzMvxPA5hgtyaXdYze63cJyNUuunUhcmV56TZtaR9goAx4RzzdAtiboGJtcZrs",
  "key5": "5929JGWc4nscLk4moxqAfMf4A5XAoa9mUwgPCMv1UnuSiB5zF79BXb4cTiShdpa3L3rbht6R8a3F1SpmtQCLUarB",
  "key6": "5hY1snBgMc32h7NPBD5UVnFA6D6JUPgcuJ3Tcoqq6UwZcLMY7gatkWAFpHX9XbGhvo72Q2SQhqdRSTx9mCqK45RQ",
  "key7": "hNoMmwLG2JAfTAaU8UJXZds64LVta15JB9MXBcrp2YstMds51PJnBsdiVfnwFiqpoxC45DQ4oBSxrxuGu9aXCS6",
  "key8": "55VtTfPrr9dQAmvErBhwTptERimm7QXYH2dNvjvt3Pyz81B3j5PLo3fAq36tVtz4aaDzuBkrhzny69gBHTyRNyRj",
  "key9": "5YWSTBqKzG8hBX1kYVk7HuQB8azBeePDPAWF8STh1uqzBYeEPTch9E4pdS4hEExuHpvtRxbgLfnyNwY2SAcGif6C",
  "key10": "3Ztgbu52f8e1PmbiEEEGLiyeP7hKeMfXfEW3XgVsFRgASEBHYprxriWXiiprA8A7TrmDSkQQ8oGW3sZs7cqcD87w",
  "key11": "3GeewP83W2n7S19Rd68CEk4qkBY9E8dzKVqtVNPw6Mgmv5pkbXSTVkFr1owwR2qkM4EcBaxcDuCnpbyCkzPnuG8P",
  "key12": "3fyBiJiF8U3F9JG4RJzpNhG3S9eNR9Jc5VT7EPEjKYLBxqcWhp12caXp4bGhS9vz7o5SbenLhYKYzET4mNHEeh4X",
  "key13": "4RH1gw7G8HqQ1HStTwu3UmY5Lgy6BSQW7hzJEvUZFJH7eMn7x3zqXh1yoSJLsmH37E8pZ86mY98QDjtMb6SY5z8T",
  "key14": "2C4ooDawvdhCeLcGQuhJyEinqFVntDhR3WGqnq7xUnTnmg8MWnnAGo7M52pT3L7W9R1jmCJ5kKyfhJn9Vn1p9Rjk",
  "key15": "uXuYAzK7haAGSXK8TNcffZurm7YKFmKwDYxbZSXTYKqKf9HYaWSBuebdczo8kpXg7C1FWVzpirJTPKUF8nDnDu6",
  "key16": "4MvP5EnNNb22oiVQ6kLvdg7KJhERbggsqG9MSkqpZfAU6yyGboCTUyWGaLfPwbrzj8SMEEkEMTap6CSgphU5Zkiy",
  "key17": "RYrUYHb3z6CyGypwJ67N7fgjphjDPjrmLkhzVwnPEQjXKVmwucEgZvzUW2zwV92SKJ9epBbNwQX8t2SfBYGyGnq",
  "key18": "2AF1doHFCVLDTS4qr291LkVvd5gL5bvr93iqia3fiRwvPAe8CAWQncb8wpqZF33RUD1QkSfwgzd1XYEHTVKKjfs6",
  "key19": "5kVZJ3NzfrtbQkJgiifC9yYCFkqFJwJ85voi23QEKC3NUxvXaK4sf3PQrRTDtdMtUs6cFAah8jbaQYN7fHEuHR2h",
  "key20": "66t9yswhTVzAybDL9SPqV7gfmhTggoGDFoegBaoPYPNG8cziAizcSPkNv4Zip844CHdVVnrrr3BaQHgL5ydpL7H6",
  "key21": "L5eZCz58bUe5MeHY74C8wTLMMobpGKY5M3TuXihWXUQje4o31PZdNQeKjCNhFs5PCwsziio1tDkYpWahToVpmi3",
  "key22": "3RD26BAn4q821427McCTjmrugxQa5EH4gsGwC3RRfpsbhR1ThngyyfrbZqdCanKUGkxxM1khRDQh2iuHWWNvXijd",
  "key23": "4BsGvAUiYYTMAweC8ZuKsSp5SsXoeMu8LWreuquygJk6fD7c5iy9BM1556rKDT1AZ79QFxVTLjZvykLzv79Wsmed",
  "key24": "3z9jTpQeTZRh1PEXVEvhDjq8D9mRXJm9sXVr4JKop4yC9f86NmHNV82TctXt2ERQnXrv3baXxxLf8jfbBhZWi19r",
  "key25": "5vwZhjxXvCXzXDqBaoCNTjMFisfSLg764msCixYobZyu6zd2KdJQ7SCpj6e8XXArEmYRNmFqGwyWMyZ3MGHNPfre"
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
