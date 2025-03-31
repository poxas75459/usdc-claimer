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
    "3zDA7JJg4AbeQnJcJpeFwZNuzqRdZYCsMEvAUau9rtJRbSU1fRRXRLz295t383jqJvNSMnMgnntidRkZZY8XDVsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yTkUSsyMxxkTjVH5vK7x4VGAmZt5fbZPfsM6hJd9ZADeQJoDXQhLwgT22jqnHRJchef41oZN9CWxjF2f3YUqeL3",
  "key1": "4QFXzSvxPNhsAyKNXGcWEAJF7hnTPVjyWa3FM2VKrnwvCdqeptzeRWS6eWZP5nCuSoJ3BLpo93jnFhDpVnRoDrN2",
  "key2": "5xgLDiUajkk7Uo6NPLr5ptTf9emnMnMxSvZ5b3CcDdsk1DzY6CnrdU1wzdtAdttVVdNpgS5vGk19wPrw9h6etRx5",
  "key3": "2W3Tp9MvgSsprDNPdeQR2c1dNJoweBdzyyQZ2Yj97gF2rHZATpAzQxbKbfmYSRA3HSgqGpgH7LojRhLs5caRLkvu",
  "key4": "2vUhEgTd7xaPvpx8SC8EiFWmgP8VBzKCPPgknyakyFqhkSk43ZLacVwwa9UadzdBCFubtQ9VTe2M7FxoSnEfCQmu",
  "key5": "5wSc4kK1hH5ZshLpfuu4M3c8KQe8nF5gncBWhjDoKyPNKuNrpH2mZfmVwt62iELLiLUGtTY9g89CtzMySkXRMPoG",
  "key6": "4EYp2uaRGfu1d1SBg4bdTGqCJf6BLE9dWWcWqbmRvbp6jNuohsHiFUNB8rLs15ZRCqUQ3S5oht8xk41J3Qi3Zxbe",
  "key7": "52Rp1j7L2Ljgt1Lit9S16JRk5V8q3KNTWqSgDCTUQf3f2BhQV7MVbWkxNjkL4BEMkm8Uyn4RXADdAWLQt3937REK",
  "key8": "2bNUnXAPMBJH1YxM7dZ9dhTW9JntMTmzZGfjHbDvoeBmb3BLjcHLhvQ6MQNq9k8BHRVxcHtnbdupJ2HRdFrS9FBX",
  "key9": "43zw3tiCNe9hpmcZYRAAikBxbAHsDPBsQPVTMaCo2kANc9y47BjBtQnowDvqWkaLwogzVdk7iPuviZYHmDFNtpQA",
  "key10": "2LZEpKFoswViD8DDvKZ76cu7d6fXTEM7Jkn8jusrreRBKxaye3MQvq2eNn1NsGnZtF2buuxbcKoFNurAac44BCNa",
  "key11": "3vrp6yQrsV4MmpR35eTPf6ZjJsDghAFCujSmxMih8g3LhiYeKedzGXC4XBQnzUFpdUEDW1GCzsJo1b5VvU5FtgWM",
  "key12": "5eycyNGWejGBVL1RrM3ntTCAK88BSbHLVkAt98TvCnqRahnuptbcjVG5SZSudxuWTmB4bYnheSnfQnGbM6GUBg7x",
  "key13": "VWeTt7z1GGE8DdG5YkYzDdSWSttrrXd9wkqh8MnG5aTpwn45GUNBZjvwVnk644XNn9yHSqnnXqg9Mz7e3NcKfvb",
  "key14": "2n84AM8XYEwFXkH642XzQS5K64Px4dTbXqq2NcXhqVn8D8neUNwZUA27wbowyxg2YoTov1rN9auiFkgEKthPJCj6",
  "key15": "3CnZC5piNLpjyVj5NiukkKCGtokrP6D4zSQJ3nzRFdr21Rbt1MUyxMK8wdgyaisvichPZ658YuD21LLMdKHegU7k",
  "key16": "4kEqMs8uAJychQo5epMGBFp3mdHVSR93JgYvHRhU4HmsunJsWqxJDRxzBD52zdC9gNywmFi2gQxTxEf24mkat3Zz",
  "key17": "dMB8ifVptRHX1FcagB4NXetgLczxvBzHH2Wd4wQ7jzkFH7Lgt7wzrMt7Z96urjAE1CZGj4KqL7W2wpQKqoj8PL9",
  "key18": "2UdCBciJ9Z9pt2DS6LtUKjWkQvB5ezMv14oHbrgCvpFdyT5wM7Zfgj8H5C4vZgpgRw1vNmk8FQoHavW6TWVhoUzs",
  "key19": "5yMMjjpdaJTbkUiMQNXCKakkXcUqNnSHLMoW58goc4TA4iDpfzqHZ4coyTy3oSfb8CvEaSc2NoiYwo366KxiaE9i",
  "key20": "55XJHHUEFzBgnB1sqsUi6mMjDqzPPvLLBG61bDpu3p2QWVRDR6mX7qmZKQ3vqghJo7nrPuewdHbFiAFLRcX6cp7j",
  "key21": "376Un79mTxGbSTHXoxYogEdTtGGmC9do18WRnivgrJS6cAXamfJ8PLiHgApTGFGzxkrN8dqNnntWxXwRS6ghJNuR",
  "key22": "3zN1SXff59soHjXVBjuCppfm9fhk8n9KamgmL9dCxibQyMpDcvHkd5jXhBxnJaQYQW47LQsNV1hqJStU5cUpLAMX",
  "key23": "2JqtTo2EXZ1DF9y4NUZR5Keaq3Lr8oQFaFZexF2jyFqa2BCfLSCjoMHADeCo569s17YTYS9F1Y2Ssa6cJZefgYWb",
  "key24": "2Dwave4ZEdxac4eAg8q9zsr1z3UKcfGf9ZYUUgNVuuVcuxZLTrhdAxzFCpoUjzDzTA72NG2Ld5C7sVe7UczfHcBc",
  "key25": "2XQ335t2HvW4fkAnawJ6PMhTtEQ9Kkn3hdBCPMouXYj5en1RM8p2vCYqZjRRyGkRptqefv9HxuqHtzmUQFdKRnNh",
  "key26": "ws9k2qeDNLTTjt5arjbDUhh3TqVHkkaRqCPujbLCp5iYWNkWRG2DqX6E3DGcmtKbuxndzuv2KbJ1FEBSpiVsidY",
  "key27": "5vZhUgNDBWNxTyoxsnpojnRbJwWx3FoJnCNXH1thmq1QpENG6soNFyagHRX4A3hJAjZZ8V1w5LJyw5BcvdRu2yMC",
  "key28": "5CGC84spNSGAuPrVxXP4fWCPAQCQLQVxGXJX8gf7yFq43KWqoTCwX9jxEkjhAcLwnvyJhLAeNAD2drmZiBiR8sk",
  "key29": "ZHhFbJicjswwHN3Z8uPQqVULuw4Yzq2nVkHTh4jaP4uiySCF5r86rK6QKycfPFtpb7TqsePSfdWGQGN3528xtdU",
  "key30": "4avtPdoaDTtZLxTec3HsZHZx6pyZ1Nd92TDiMXMuymsJ1LikFtasoXXfLVz3AVMNrgDt8nGSSvP86rKQAVu69zTQ",
  "key31": "4itZTLdYeZeBnELadhTp8t9UQ9GsugSKyqyRhiLcDkmD6vZMnK7hksCuvFbbSEGeg4YRXFqcY4YLikEiSxbqT1Xf",
  "key32": "55vLBMTAWgoNpzfPpHWUgpTXGg5jynQBMiYT6RfBXpgymVqL12BUanCYD57QmGStKXLtwXz9iasBGxpJW8nheoPi",
  "key33": "kq52nSrtNa3ZKnTQmxEEraXXgG8DpC1wZ2cgjWCSb7uDZ6hoUrJYFDbgWpo1TbudWvhydYhF1uKhwVhox46iL7Z",
  "key34": "2A5YdE2sCsKyy2DPQo7YvELbpzoLNTUbk1EcF3TuxdQtuVfto6RxUiE58NdseMV9ap1cuBbrNaCRATFBmjNQcZxp",
  "key35": "HTSLB3gQbQP8uRPq8hPmKQt1Akuyn8siy9HkTeRUYuNDL2FEMGrbijb1KghcD2JxK6XkRzYBaX5LmumFTNb77vV",
  "key36": "3C1djmDWkUbv72c4BvTgoHUh6s6295Knfeu19tiEBM6yCJYtFjeo8EhYmfxC5KN8eWdoTmTnnvYrtJRJ8XP8aBRL",
  "key37": "37HrKjBtfn5dpAJpDJ6XXyP2g1NVhSUAMGKfKmeY5pdmQ7vNXK87BP9ibaZE1jG8v6yq16etvNUL38QpZnyG6xHz",
  "key38": "21MfvqE2dYfu6aeXqCek6tFFDk1RcZFKFWAMtSdKYMV58DK1aMgjrvABLTbqTgNbaqWmZFYhWHz8fSn9xBoFvjLM",
  "key39": "nZbRVNuUC3ycYRn9icAEi3Pqj2dsKtRacwDjypDTHCN1HDKA1cwZBUhj7ahonKRAJjVXbNYKSyfGDDEwVPXqq8p",
  "key40": "5X2etEDk5viNeM9DCSfEo2V8zMvgjMciDAwokoPpodyy35afsiPCtxZrrk4NwPAnP5DQDEiF2a5LwFndXaKNJtQh",
  "key41": "3L92wUR97eSPrkvA7AyHhGskJxc1BipPNnucExxdaMQtG6AGiGDp1cWrKUaUJGHhZVovyJoxVJC4tFZdnpwcTEPf",
  "key42": "5e6v3FWod8Kjhn6wB5ot1RV9Qfvrt7Lakiu5ZnFjThrgxNujdMEYAVSuRg7bLwULmLYJvcNiCn1xMERH8u84UcL4",
  "key43": "4vcJQoxWVztyrYowPH25r84z563VUKqjAHdA36Q8hSqMEsgCnh2ATgP1DySexcZkSJFFC1kvn7KUTNDpPnLribaz",
  "key44": "7FfE12PpuUrfJx9AUiBLTjWEKhFSYsRwqUF6HQKbj2M7eft5hiytZrVwBYbmMDSATQ4MkhGRW9UQq29RFZvgLiu",
  "key45": "3J1T3svDb7NUhBhT9g22uoDG23A9muviYDCCNWeChVWEDkxtuJDRDkNUqHUjZeCkMH3V7W6JuLdnwaKiH96KUxiw",
  "key46": "23hgJXZyZK6iLLU7nBRAMXKXck7QNyzLLk8fw8HJQNZFN6fsPP64fz3LVEdPezijfYiqozXszWyBopUDeCEvsvFB",
  "key47": "5Foj4oufyBngno52xdZ6PNezrsXPrEijA8B3ErFCw1RDYmYWW31oXkJP2JjCRzfkAJkq1rpivPZ9pCmzXb2kEdiY"
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
