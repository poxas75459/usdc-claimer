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
    "4M7jj1pFhYyCPfZ9zPRKjUjF9qqM8qgdqhNXtXAcjmRXqyUeTN7p7jpLv3PLQbGfiGR1ziHjtDiriz3PpaKo7ZBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iNakzwtvhvtwSsAVsKnQyHN8LHrDESX4kkEMEiwQf52RnjgCdDJSEY6hgbjX23gMyuoRFxkHKWt3mvSkWSY2qnU",
  "key1": "2MNmzTScVQwsvmWYxt23Tzjkxis72JRviMCY2zKYYaD376C34vHne2xiDz1FYhXpc1peTachrKVSkGdWvttaig7z",
  "key2": "4DHmyRfibBgSnN5tjTkoq242sQpTgjeVoMyPm6aAXonJYozZz2HVHSCAuBHohDCDwXRbrCKQ8mZHXCQodQZrFVse",
  "key3": "39CcncQBH2ZLdgc5HK4F3hMmegT7ybqFCdz82eud6xJ1w42YJMhrBYZj6uT1H8uy3rESysuHgkKiSMaHmHNY5XqL",
  "key4": "66B4jP98idvNv5Cp5DmRUaz7zCDZx92pTx9wwvwnomFtmW8JGpPrBHJjzJxYwyP1tKFEQMQmoXL58WdT7LxNrppS",
  "key5": "2f4fgsshfLTPUi99eXus3xMTMb2nEszfUHrr5EijrAeNmps57K8tnnmA4E9XXz5JnLAx7f4JaizuxWzzNeFcf6i6",
  "key6": "5NyeXfenSzsdpReE8M7b8k2Fg7LckJxQZNpxtzMRa6XWHxUsqr9ZEikYXzQaUaN589xofk9hBCvG3xY38zyXDBVG",
  "key7": "3RYJWTMtfiP7sHioSkvH6jZEwjbxL1Uy9xaBwNRb3Wcxii8GngpbPD4eQGKTjghmCpZkjWPS9LgCTgS6fXzUQAv9",
  "key8": "3XTLcbcNAZkUAfe5zNVeysM6cEZHW8EKB67dfBux27zg9QuxjQUrPKSbC4T6oMUhfqiok1HPDwYgNWGbXFmRkMAP",
  "key9": "51Esp9PtP93zUkiA6VdRDoDY9GySzHKKmgcLEGczYfJ15X1nwELZ51V7Apw94v7277ocxaKWYc8cRBjWWa2Td33c",
  "key10": "2udTM3aAUn31X655DeJCzp1uhmEhKzgmhBDCWUP8mrXGwv7xtJ6yUgpCdRAHp9CZTJq1i7TzTob1BmV3t9zWT3Eh",
  "key11": "RWeTBKDhfmsQmhHGMB1ZEjsvYUoFzYyGouoPA6E7TK4QLH13KbTHJQbBmVy2mGuBMEEmND3UPhFzAQYTpNRoxYz",
  "key12": "4cmV5VeE1kYYXpbfapHLSkC2mEvxQaGoTL7XcBZeg2T29JimfqrHWw7xJhhaQwDGSYkxyACAT972ye1NajsbpMvf",
  "key13": "5RKV6W7QPFsLDz6yHtwkrhDD4NfafEZ7ud3x9xt4LqD8tuEzpBy4S9XhP5iVuwk3oU46AaM7Nwjjsk4z9F6H7Dhj",
  "key14": "2RZBSuDQdpdurj74HqEWxHXeCqcHG1yxUPstbDC6nnvhzAomEDRUEt44jbiAoKU9FGkCmc4L1nB1ZBSyqqXASkT5",
  "key15": "dVGQXqMbFMphbGfGAkpPvrBgW2Mv5AQ6DoSdGb5HVK1ExughMHHUF2JvA9RYqNFm8q3uodn6fKLqGi2Z2rBMuqM",
  "key16": "5e8cFhL79StzJdgEQv1Un4vEmchLURPdmx1WAJAZhQScpNdntant1dcpDVJBd7pgzgFZTzkr3vJGPQBeiW7QYfwC",
  "key17": "41TE2zoZPAxnK33Xhs5kYXkMrnHhdWAdf7oHfJUWo8L7PgJt8355LKVN9nZnCwHTizyWSJVMJstWtpwXrMwq2Wje",
  "key18": "4NyWZST9JCSLgDDmtr3jHHczod8qJD3JXiQxHpAPRgQjWSDf5FPWqopwv2tnGFtbjGxGKsjieKRCdeA6QH8dbFrP",
  "key19": "5EkdP5AUVz7wXiWqmAG36sunA2Gy3tnj47WEhCXSYMushPu2TTWoVnC9XMReSfSsj98aBieymQGGxucdmzwnLzcm",
  "key20": "RgohJsUX4zuS2xVy5mK5EvWzQPHBwbRs7QUyYPCF3qT8fpy3EPReZPTKzukQGAQxpLtzzzRvqtqY7TTsDHnMV9o",
  "key21": "5L6Zj1CMHThfFc5TABdZ8LqNJSibdRdQ6quim9j8F25ETAjqX4VpMmxUy3mWRR5ucj9qhtuqXTnnH9j4vAHB9jXd",
  "key22": "4jnQvcfpnYcB7k49jYmFX5CGARRxovmxA73GmEW92FgDxaKKVgv9tSB6mHrNwZmqNidtLFWDbgowUUjqm2vShaex",
  "key23": "aYw8vqd9RKFegsBHHxN2gXAorLhSz1Uc3FbcFQUNTCMCY4ydaQZVocQVZYAWPGn5VeRA4ZKpBe39uRDXaB8oNuE",
  "key24": "5LVoXQsYXtpiR27vcfw4dANK4rvh21wY9Adha6qb6AsW66jHtSNsurLQCQikRWNxcFm6g6XeUcQRdJXP87PzSk9o",
  "key25": "2xkA6u3seZMxn1U97YRJ3dWisnqS1FAnj3zxWNDrMpzejGjLtptrY9zspcsutxWBrfcZukr1zVnsaNKpuvX3sxrf",
  "key26": "37tmpYcVPCpayY8MnKtZhsQeXC9NPLco9XjMznMoSAUy9ixAS8tEF8eucpb1RUPbxKACa67Cxd84aQxCe15gP5Cv",
  "key27": "2EMMiivRrev3QUQYgcE1Vq4mAsbBKFi1DYjdCS2Tg6uxWb2jS9imrgBrkDSTLc2TspuxGbo5airCEwJZtCDmjQuU",
  "key28": "39ef8DpumcGrG4NNyDSvuuW8sWiGt9rGqZWTgsUabTSto2cDzbNpZU5pD5EHjmM7vqyVNzuSrA5jcXpkXZJCQ1Ki",
  "key29": "3CNqLExo3auzMbqdYYsSsHQxhEZvJr7vUxw7ybQKTxZFyBZwb9V3SLcaWwoFeXskpkH5cxBx5nHaX5snVpLrWCWw",
  "key30": "SSVWbKjxVnx9hD6H8GDKue1YLcoRGJ4yK7VVvCQQkNQkPtw9VKeoo2fYRNd4HPJvHoMdLSyNVMKbG656Adwpv26",
  "key31": "53Ya175NR5DAdCEK4PvNy1WHn8XESnMGT5HPbJDfXFnoGa7QVZjzDW9etDu4SSuvdPSz6UNg47bdD5WLyGYQmuBf",
  "key32": "5D7Eboz3bzAhPxnn6LP3F4S26NM2MRrFqYze3KSWPDFmWfCQzXFnzzZu31ywFk67k1E6BSAueVf6BZopcTi7G8GZ",
  "key33": "2WG2M9VkqZemwU1ZM7VCo6Mdz4emjTXssM45rB43TEn6VTXSNC8Zjjq8DSrCzbf12JZNqsMqMVK9KnXRYXc6eG5w",
  "key34": "66oPtDxVzQjCzY723m77mH6THdo5EWvDyGf3PUX97XWj5zPNvkyyUQj1UU6wtMqXydCPZuiqdayjuBPFR64rZFGr",
  "key35": "3ZWpvuVNBAEuiWCg5WZh2RpaeJto69vr6zYvPiW4EGVTQjdjDAeBKsYpbikdQ22hEAH71A246oCjFdYc2sfXidaF",
  "key36": "5XNwrsTCQgMEWAKStb6yqrLgd67iMK3Kw1VBT5dFNUZs55F43hxSterVuWALjK4VajVQKzTHjv6MFcKdkMSULk84",
  "key37": "4ATUsD7jBL1Aro3gP4S5nHGFBkn7jmjSurzuda6chyHTUyZpWk3x225NXgvjT9egLu6M8Jn7AaGJa6R3wR868sez",
  "key38": "5f4ZHqGZfL5CyzMMUrxdrvv4j1By4dachtgkkDsUm9mAAgpovQSheh18kJvgvhD9DeBnSAC8bZaZ6SEwJPdcWbJA",
  "key39": "411ZuCwKUbURMoK7DbEQkD7dWRHmmTRtgZdZyPzUyQac46zzs3kcKRzpkTJfo36fTbwgT3mNL91ciGxatciG9N73",
  "key40": "51oPRNjZHazVLSMmg4MVWHjmHbdzGyYjPm8pVuhNSQNomRnk3pczAUtSWSxKN3kZJGyEmSSR58Y7LJqbsM9GjxoZ",
  "key41": "ijCj7p5z148sxiGEsqrv8wQyR6pTgZQPvkf6EBuDY3tJDBTFL98NGL5VWTBfr5oNmMHEtX2MJz3gPLiM3vCdu93",
  "key42": "2czQetNFvtnhKNCYyWfWXG2pVuR3CkgQAxFm9mgrnFVQNRPy4mm6X2E8EZPUM4JysBTk7gSoeZyFRQ3Yu7pCt6a3",
  "key43": "3swNfMegobEaqd2cUVCRa7k96zPRpif24XxWM5m5B8b7Mv6cYkSuEPpJiStsS6gf9GqWuxizK2Xo8orXg6W6AQXQ",
  "key44": "4T3cxXXVpx6asonyq7Hrz55DdwLgPC1cNEsVZbc8VPsUxiVTFfc6Fb98FNgHmwKQNsz2DAAcQnn9FqCefeFG9FSE",
  "key45": "3WgWpVMyD5j8kJiZpcGWDtNSXAetFrTRZFbonKqGEde7xxkcBArTQ8YWUYMoWLVDzL8Xsgc7WifG6cj3sBTs3ypm",
  "key46": "5evG323bJjXrCepiexv8VeazmsDo6F8js37nJWyZw4PYGU1mnkP5bRSBiFTza5m4BRkRXWFUpdMsbciggDaRLKYU",
  "key47": "23v3fvQCMdnEWdiNSQsfn1t4665zu2QbtcLr8D5BW9cPXt9t6oqo7fp63d7iuwc48wFZ9SB5AuETxLn6AtjQaXrq",
  "key48": "2ypPP8YuEjGogbMLGLrFtjvLA5W3LzAMsRkr1wuYPWh4eqRn7DZRG3mJMfZo4y2wtRdoFqynuXb1Y38N9dqrQ5kr",
  "key49": "5idsjQ7MNiJFczGFG3MhX6qV4ZC88thXnRxXeJ8YgS51amS9gzpGuWTDbwjYA8Pbuqvc6S7HaDG9iVnvVLnnQGL1"
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
