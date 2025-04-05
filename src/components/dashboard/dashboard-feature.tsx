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
    "FDTxGNFTrGztwmsWWVZGbimb3rxP7jcLBHGfJ9aiS9QZqVtWKM2Gt92MVu7at6dX1cLwURGTTKQsmbAVT3AU8zm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KDySjnUKoFQe2zawfHdpbL2QhkDXNWNZPikMkTcbB4nRiFgagL9i618UexdQdJ8WPtV7pquQCHECPVGZsiPE6L5",
  "key1": "58hvmvmQvsZ4NSU6aJ9AQ7yMhgziMCQLNefzTKJh8pbhnLjNEBZAEPYf1ZiEMsVhoqdPDmvPzY7buFfvspAhodb2",
  "key2": "2Gy6AvS9N2kmnbbGmjhWHJhPwJXzH76QqdaPpridxM7wxAJ2tPqVxJJ7hBQkQH2Wdapi82zu5ARXr7ASBK6mkb5c",
  "key3": "4BYtEQLdwwDPA6PdA7JydZS86VRVcUbBEnMDERAuSk347kg2YbwhFDxQijPoYftcEqevzFsPubzjtbZUDfY3hq6X",
  "key4": "5aQ23VXZTdpd1yMQ47wBFKZP4cPbm9D5AjpVFbPw5JHYzDYrNdvrBCDah5VZCLPy7TzUuea65PP8KPeALaCcGQ17",
  "key5": "4pNuvZ6kaF7eqRjeR2CEw1HDdnEJttZKe6ZZ7iS5EeqiQ3oXFUw8eztuS7aJT5hssexrmC5giMdz1J66dqaBuWeG",
  "key6": "dj2hWGwvS2FuRkZdwFERpJSkJzYXu65Cuz42bbW8o9VqnW7DYH5vmrovxdq45JBi72dhzPN8UGynuBmFUXgrJkm",
  "key7": "m1mzXmuRbLV2RzQ7QtcQw7xDt7eCb44JajxQ2EHTeZUz57vT2QPA9DQWxPR7ZkK9yB4BubryZoMiSz8VmKMSpB8",
  "key8": "kv5pa6rK7EL5crwHjeeDZhrjcKX5fL9eFUtdV6VrWbxYZrHNG4CtKt93SXmecZpsijUNKXPjLLo3Ydm6TXZbuJT",
  "key9": "sUg4qjjUPfbbPmXGPxcppRjfesYCu67LYvvMyBqMd74Uj2t5WKnrHYAyYYDjQ4aigNiEX3kQXjY88pqVjSKJSsH",
  "key10": "4qaRWXX34H4VRGKRaLAnb92jz5tKu6rzjBFNAzkgAkdtM1RmqWrJW3SscyyAAEXca4AiSWpXcNtCcQVgPvnYUXoV",
  "key11": "2VhkkuSScrFQvVPLUTZxKrFGL6KrtxqixKfsfdfxq4VgNfaABd1QiBHLse85xzz3DSnWYpRwcPEvWemMcZCNRTcx",
  "key12": "4xAjLh53ytMxcjrPRP7TzTvpAWUqt2wXK2GjqnDnByE3XMEg7ByVNrj1mU1XuXkeaXeLR8DPp9H9mz161F8KC5mS",
  "key13": "25rdvvHxtoX2FFYb16qQrKUjiyZTGWgsUL7Vqt7g7pHDsoGmpiqi7iAVeZ2wQoJsCH4GadzC6f8jDq3SKtF3v1ND",
  "key14": "5NsT8P9bpSwJTpqBbPpYwmLHsha2TjtRM7os23r2jViBhig7wdDZ8gymEsHg4QKigpFu6H4WCmuuBoAHhfaxcXsz",
  "key15": "2VgvHH1dQPGAihjMCAb1kX9CwVGdam44CSbb7pEGEDVCVwBQeYRuvm5jgXd1giGEB7vu1T5okUYLZF8WxFdFDhjL",
  "key16": "3T993oLDjCS9fesHXYtPVLnY1p4N23mzqPMMQommEn92TRRcZs3K1396GemqrBjksTnhYrRxDKgcBpP6kCdHhy1Y",
  "key17": "64QvFMeSoBr3g7cSzn6LvscXFYppc9BMKZ3ng6wUooax1mnA8FLoZTdaVMFVnLe9a2AYW74WuTz2geVWc7EmN6oU",
  "key18": "4d8i8McwvNDafBwqWXf364iNcpNsQBGXNeEARzvzz9wmJRkLi2puXqYzwvZvFTkWTCaHEmVQWsQEBTs1aTUnCHaK",
  "key19": "4Jd5B7Ys7o2VJRrLUJzGKCRXKjw6unDzatBWxtBgNJUwFEPMmYNkBp9t9DLfDiB8vVkFMZTiCmNiasc3QYcRccCr",
  "key20": "bVMnm4ZCY8NHbMhJhCsAJHcxwu9zKWNc3jzL51NKRFfjoyobtmT1xznrBt4TcKwMqAhXacAauDtRFbL7zowNb3H",
  "key21": "NnXQ35xz5HivaTpP7shcd6jLMQHXFz46oFRHEp9CJvK5zB8Syw2VDTitNC6AyZdu4hitU96afixByiTWPpZNiN4",
  "key22": "31K2qCgPjLu38Py2gyC55zVLwTfMQ53zYVpnpsgnpUR44Cbw1GoHfTvMtLQVT1kX7NedNKSYD3HCXyVg3sNrpxSF",
  "key23": "3MzkH5N7hN4CuYFCnGrW3A9CinLYdF7yL1tZSvwFWgAVw6rwP732b5YVYjRtGUVgYmi7bSL9cm64xw19m8JeFxPj",
  "key24": "2sKJmgv2KGSTTeQHXvJVwLavsQiQcd6ztYTYtZoKc2m4cLcqXwY6ZdDtQn2tPH7jQ34K9kfvPArUBamkqipon9do",
  "key25": "4rsQqnbgb9U1mckPqLto3BDwhz3frPPr3Hf39GRU4dYp6gZhvmuiASviVW25fi7qkBtagGEHH6H4hZ44WzrL1dGf",
  "key26": "2jFLnVaitwjpUvWhhGTxZCh1pFKdStDspr9Z9ic4rWJRNREZ97YCTcVWTo4D3ADqzU4u1NvWqK8KCK9YmUUS8ehd",
  "key27": "AgSvhAETKM3Eg5Xz2z5D3TxpDswHYZkF7qRfCJMnrwLGucERGdNwsAWYntnghd4RNEZDhibWj21R9YDvpZ3BwgX",
  "key28": "61PhQwjUzSKmyAuMGWBZYB5xc523ANEohJtsqhU2jkWWvukp91NsDBYcRrT9BaHAq9PyW3vHoHyu15eKf4W1y7Zn",
  "key29": "4CXeDkQ5bcJQUZran5J9qctoBKJqRpB5CiSiix5hCB3bjGvRJtuk3Kze32aSX2jdrMCmSfxZUdbDXWWo4ov4MrE7",
  "key30": "5DUyf3DCL138GKkmQQ9XaMCPDRu3Q36hzxwAmK93BSsg7WMHjjhBA2jEL6rnznGmV4PY4MNDNCDPLAqZj3VbEywp",
  "key31": "2JbtfTrUWQyazoiDAvCyyF7Fp2coPttw8tsHDwmsQYWVqpn5F1X2dcB993KxQXrwcn3vMCdRXov7Z1Wgg2U3CojC",
  "key32": "4369TrPu4VrkzTnyPCMsUnqLdsTACk5HW4SCn2Meizz3jM4C2niUrR4wGzvbkYjFeTd2qbthCSAe4Zjjv22UF88s",
  "key33": "4XdKETSc4m12FM6JZn5AfNQ1TdawemhApzAYs1cMvGqJdCmMckKj7tBNFg4RqjDv1tp73DSXrUkjic4UnhSYpp3z",
  "key34": "63H3mXEt7zW7b7aVDvDYeSDZTKeuXjwDtArGKwfmCKL1j2GHj85mJB8n4Mh5qMD5z9KS9SbbMt6UoZFHitkobwCP",
  "key35": "514xSwTkAey3U3LvBzhKji4CWgsGtAqm7ZdzfF5SYa1cjqhMjovnMfozGAjiknkTQCL3KDqPDX9Je2EBEw1UnShq",
  "key36": "2KQXzpiDNppervSTGQPbWyfRrX7za1cTR3GFziUWWzVR77suGF1rLWzMPfDew4mpYfY6VTKCVVMv6MyLfPVHoAy2"
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
