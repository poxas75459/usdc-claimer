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
    "5ptTMzwxprSaNjAXBr7Rkn5t4oxGfP8gGkHpLNW5G9oVvRvcmzimMxSXMSTiNCBDEWrV7WpPTaKke3vbm7u1zBZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mimVAJxtiEqmydrCYHGpyBJgDF2AKYufZBPjJNZBsE1mcwSedwa1bKq9rRu2nZnHWoED7fMLmGwsFNa8kCyGfyi",
  "key1": "5hadR7RBkjJkpVBt4kaAGgAgysPrUsXAuJmfFw1YzndkAzckxhXxPjhVaYNLpVUiJYWTYkvKgPCsSvwgEoZ5gFS",
  "key2": "3m7eMBVsiV1YaF5wDvdk8ZHW3GEZ2GD7Fy74tocmJtTau837cjYV8FvE6ShnKaizGWYLMEM8W41NRxg2VknzUH6t",
  "key3": "2kpGz7qJWedY78hT8bPJobV1xtEdtiBnnoZMrMSfvsEQQmjxTbbNcDwrFPaGSnHUjtbRZdEEHCFTr4k3gZCwqAub",
  "key4": "5fAD2XpqW18WzBMKeCdh2GZqX3cqEZY2yMGHemzd3gc48ATv3dLsTdw9TdEtWfGwy2N9TSCwdztJkbkz3BcJ29dB",
  "key5": "3e8w6peA56UzdR2VXTYsyuMxp3QS7wtgdcyV1XVcgXUi7NQZrHw3cCEQ6SiQVAKoziNTAePgM6zxRAfAWBUAFjtu",
  "key6": "Nxp1U2siPvsvEkyS9hMPiaeHHKWaJmr9JmYtgMr5ykExsDCBZDM532LhHBmD15GspsjLS77RzXqDxp7NpyMxksi",
  "key7": "4vWfquqeXBnXXy8A9Qk3rQbcmbQ7S2ZcudqoKeSSrBLTZJJ2NATtTzSf6DinbXCT7xL9kmhRFYMkKRo4rv4pDyeR",
  "key8": "ybV8M6s5gEyyPrYHrGBFi4zviX3e1Tg4evJT8oX4TrKMEmBVgi4h98ERtPAqB5TsxshVUjdoypHMT4uXkuorBFd",
  "key9": "389KhPoa1afQU1jH2AXWt4hcT6QDxJtanVLxgwrsY5yhJ1a17kViDjbNyaTmJsnZjxdLNkPWVa5K23SmJsbgihyN",
  "key10": "3tpPouFaUMZp5AudiVDhC6YH67Ec6m4phNDprrgDkZXHGnx3FsA2BqY4yadibRoz5hauF6HZVPKtcA6S1rUrYTsA",
  "key11": "xhvdfAt9GHbZaPsHFDUyW7aZXTpqoRr1xPeCKeJafC16UQxnGVu2d7Gi8nXeJ8EuEfs6Yiyww5NmGckFYpx3FnY",
  "key12": "4qqpswjiGak44nUVuLfK5z9hY2kmEm2zVo5ob6idCEJ9E3t7CKzu5mmGJwrjXFtfTV5Xr6KfLtdrKLpyoyje6NEN",
  "key13": "5sHaDgiPVyWfwHANLB3FW1XcPGSHe3dYdx6VHMxyk3Uqeu1FbshoSo4yJkHowuK1gr7i9pd4pkj2W4LR9zM147hn",
  "key14": "5fYWnSz1BmUke4cZ1ZKFvfhs7ETBrsZjCDpYVJN6tWmU5H1aFzPVymMLC2xfKKaD7NLgQeC4LhNfFpYyXB4GHmJU",
  "key15": "4F6VK8tJXi3k9MDu4WVxfoprPuoeiB8d1V9R7Zww4pXUP1awXMPsz9fGTF589yxSHxXJyw43Wh46vxNQyVLctWFm",
  "key16": "2qtpxpDL6ACAEMCYA88PHnp9tThAt4u3ppYWCqnxS4NDTb4LLRHMD8osH5Aptmk7AEzrvHuGJvfZKKfY7TNoXMXj",
  "key17": "3fayG1tsVBm9driYoqGzZA6GoQ8r1Sn6UgPRbRqm67uKWr8pUGT7XC5AXBwu3TEPabMh9HHxipcvCmr3UAt6H75m",
  "key18": "5QDkXwgwqwu2zFehRZugaKMDEXxhNcBngL55uTxX6pLvWwW17Vo8UDcfmh9Tb5TCWLH2tbJAKPLkwcCCxzEP3cLo",
  "key19": "2eSS745Lbfjo9Jf2tH8MhGBCZMNFyNMrnqgxQqFKtdK2CouemHXabQqeabomyfLekjbJYYHa7wmUw3sHMQNTuPrF",
  "key20": "5ouJ3WFzTf1qZ57zs7nUqm75Nb8ZR9Dkk6VwqhTMnHWuTsN2c9RBEWe97teu6fVzZLz9HvJF6uCd6j9iVBXNXLQ1",
  "key21": "4BgoHCU18PKGaYUw7QrY9qxLRy7ZxPrkeuygqzJ2XyLFdPXDesB6uBp6U5MWktG7SH5Beqr7C4Au8j9rUxxYxtP3",
  "key22": "5aeo2cyaZuYNWUPed75Dcd8wx34K4HkXqML8wZL1RPuUWaMKmxBooJLbmsiazWVzLMGQgS8dZEr4Lgk7kYsnDdh5",
  "key23": "WaiphoxGF5ojwTNreXfgy411SbkVL7cSaRAYCiQW7ijduWjVwajYjzFt9xJA4gT69fTe7myMkxosEg3P5SFfjM2",
  "key24": "z26ErQfCG3qeTi7ddUZC2dCqhNF86e9AShdyep6BYHTF3T4kZ5nH9cqaU66XzuJnEwm3gCcdQjpDL2kKgKGTySg",
  "key25": "25mB3vu6UwgeWNBd2SV6aJ3RKdm1bCevMDjE7i1E5VA6qHUoTUcKebRs2JF6weNj7wWDFKCJtJyQ3g6RzdPUjLh2",
  "key26": "2vcQFLeUTpE1dWLi1rJ33oHLcL8zVNZ6HMkCyPYMBBAqGz4BWHJPbYmLrjvMB9ircDsLtgU11oedEhXLRN97RyAZ",
  "key27": "PTQ8HNKHuGnDVUUXFsSDi4rLijYFyEKQfoFRnbUGHAyLv7MHLn4iZLkXKjQFh5sh1vVekL6RpcTdHC1LbCWjLcR",
  "key28": "3FQVW9DYQQYiLAMNqbUR7dCJaBduGDfYhTWWiM8hJgd2zc7yKF4WHHUrvxMCi4TfFwsvtXTFRgN9HDSTfRTdP74f",
  "key29": "2RY7qAUDcqkqn87TzddUYdBwNH8uSb8vz6dgJKEMwBWkcKr3RV8TzahREceFQTJEtTTtVn5gbYDWK3nYjXHMf3aG",
  "key30": "j1i3r8cEzfbySheLuLMAHazKUadQ1afp2zzzwLo8bruSMdvRwG8YKpyg3eNi7gQTUjufh99ZMdEJXUb4tDQth5W",
  "key31": "53Ah2cmRRJzUannWdFzz7hfuCm8KdGfmu2EbfRwH1ytBRSFCtEEh84uwLabZMFvxfkBACZLDvoVhhbvkhCkz8FV3"
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
