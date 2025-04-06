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
    "4mSeHJ9WCMPhh8MiVUzZeh259M5ixpvPrrLyzUG7QkYQhX6T9aDhFWDn1VKnprydUogsbqAaP9kQctuPGbKjtsKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s8bEBb3LNDrSsEMReoqDFJStZaXndtHJerUR8PXW8sC4iTW2wvYRvKFEH5ziJq8qZSbdojcoLV7BXsvPRVj4TDx",
  "key1": "21XG9wvrSmBdGwph8AREKiiyEhGb9EmvmUdgDG5LxeBjePd2ma9AVZQFpmidJ9Zfhm6ELMh9ndF1uTS6C32xkgtG",
  "key2": "2FnbBCxPM851jEtuyRLBjwoUiwLap6cNeZXLmVyUSfYLBAX1EFeDGiSNqoqtFEahNWJSohLmqa9j3YLccE2Fexav",
  "key3": "65W7vSYsazoKGdzmZSJLmaqtzqMt4ydw5zF2MUGmgyc26U7JLGoKmDZb4AMnxAvcb7nbMjohKoLLcH5XpQNA9wev",
  "key4": "3uUkispFbMD5wu5QYmhwsr6DLhnjbLqjdTsMzBT3DthtdtpHt8gY2sEa962wGdi6eWCBTpKgCg5SbfyT42PqGYbM",
  "key5": "3hYQVKqopbw544Nq5KtFQkkdsCPzqq38WwMw5w6dRhH32eeiwyrmgntikMJZkW4Ug9ZV7SEryXbzYajHk51Q8yWH",
  "key6": "5LP2TUXo2xA8YfhrSRLHeV3vUbCHKzDHPVThhABmhQPLoktgzaKPjgor6vUuUudPsWYqDwCdKCmKch2gQ2nQpqHt",
  "key7": "3H6Ea5vL3EWgWXqVVzqresiQbzvHMWCqg31C4aucZajYAwfSrFYs26Xg3co3cM4TF9zAWFGVLWDdX8Y4czgd3En6",
  "key8": "wrLdXWo1D89QvUKMdQAsfvpNBKfJKcEYuikWw6VRa7juzJkRDkfsZ6mRmyr2CK4Son6nqFCMZHGba129JpwCbFU",
  "key9": "3mByHgCw13mtfMiz9Z6bY1WMu5y9iZ7jnru1c4iLrg1h71y1vbkzrXLwrCoWzFxX3Nca3mAdRNJoHbjBhWfi3vj5",
  "key10": "2JmAXBHFT9fpQhoEGH8hf5d3ueiVGMGiTDtXz52MPoSFwFp7rhaMfN3gPuRFphXNPvD6BzR3pRQmZfDuvsK4rLZQ",
  "key11": "5qCcKZLE3yQQg8GrgBrHgK3P9wZzB8uneNFdVPMeA37QvfXcGZLqPQUzGieS6XtwQBeAyseckzBmkwPnkn1fRPuF",
  "key12": "3gouqAezD9R1gX6jyVyfjq2fjPp93VKTKWo8dP6UeVT6UbW5jKfVbRANsAxn1dwURk8eMRKFyifLnmPCr69eP8HS",
  "key13": "24PyXoaQP5kgP6XU2ixx8quxViYZKAzbzN5XLCH6YzwLSUNCRo6nLdRkpSxJaPFXXMXvV7SkfV24TTo1k1XtXAeK",
  "key14": "2e2XbGjEENsmsn5UCNQqSD7D4sssJMMrfeRYr1Mg6fYcJ78aXnecyP6rFDvzyZQ5XGeChFWe7J89gNBKsyxCVr5k",
  "key15": "msZ1L1vHsW9mJx3WRnA2PpPDgZ2afvkeDNfkB5qLKX1Mi9ctivQULBqKYo75CadSdQ5GPVntAZR6Nc8j5YFC1Je",
  "key16": "4DuFZjh5QgVyiXeiBs5hXq9XkJPd7Tn2ZWGGfdge3pfDgWxR9ecQbktgEJG46i8VP6SSgJdxvrwoXhfDg97mWBb5",
  "key17": "LA3oR7BySU8jWfVm6XSEmReTYkgnU4opEbDx9qMNQyLJr7xmzWQzp8bzode291h87F3AZqEJK2DqwXXFQjWd9tw",
  "key18": "4kiBCBJdBXm6QtUjrbdejY12MYSsG4DGPmgXcYUGpv5s2giP8Tx5Hg4iQQcmRtZfUf3LS2e78Rx445nfUA77WNMG",
  "key19": "eGby1UgLGy5pvpQLUyPBox8mTiiMjGLL7UkLMxqtrRYLwFJDBdexugEZi85cdv4zmDxvTjoZtYgxj8ZxwBAdGfN",
  "key20": "4hNNtvb9dUyoen4qraECNxGZ6xXTxqqmxQEgyg4CAeSSTkwVqvosAQ2g3Xg61jD2jA1i4kW8CQn6w32XTJTGYTbp",
  "key21": "ZVXJexrk9N5K2stF91S85Xo1FoqvbJ5brVY2QJ7s7inRWNi6in4LEMJHxg5u7EdPsa7CnnbNw7VC7qiZ7q2gmB9",
  "key22": "47kqEBVLsFcj5q8NC78UThG5s9Q9ZVJeNGseU2VKKriTFoMfY3r2qikDkmvBipNwrbo4evEdk41LwWqRJm55TJBd",
  "key23": "NKqiwCu8ApJ3rTVsNfXR5VvE94xJPMT9WbZR3UDR938LhtnXeAAdSX7ZB8wp1ane8qSw72poFYqnBn4tiiz5z78",
  "key24": "3YNy5sLtU8uo155BHu3sD5eXtg6ZcdiPNvn3AX8A3j9iQGsxJ8uH1X3UPi8qUnDJvJUSJkcPcpA4d61LWuSboq7V",
  "key25": "2EASAe3Xfj8eMJ6xP5MBvJfKxPhdFT3q5zAaspbRq8M2sYHmNJBn85QGjG22bhbr38moQ2DvQAGoRQ7cCeT5LkVe",
  "key26": "27xBqR2aPyLstbkGiPpUASthEBVA6ZeA16AYn4PcEYy9B99QyLkv8pAFprRSoTQyDwyu47fTNrMq32unSxuoYBzz",
  "key27": "ztrbWda9SLfc9WrLMPxK5K4NxXaaitt3DRBmV1Yxnqwz84ZHPvvPxEXEeCG7ac5ZYmqNfTaAzakSpqs9L7QNsXc",
  "key28": "3Bv3ZBckUEZTx6E3uxhtHnqu8wXYcKsC4vvTDZU6PPBBe5vPMS1GmzrgCrpPRy7qHCEnYUrCZsaKXGxhSUbcw6Cv",
  "key29": "NXCgfYPGBuZYTH2UjBLSsKVqwbauWK7Ff7WQTYxJTWhR1fx6mgZrq45g23gvJNopNbhzSVeDQGRNCT4smizZNqJ",
  "key30": "5TVaU5ELg9g5JmbrPogzi7suPHUDMzocQda6ZhcrLLRLud7u2mBTZPcX3E2oFVkDz4uwNtjUht9ZXUW31nMjGgej",
  "key31": "4YPiSw7NH6nZm5DeT9tjAhEWNu5HCS2zMYaMWGQ8zoTUkQ77ANLLF8SF9JXEEPA84VShoQMqS722nXBXUMJUYkGk",
  "key32": "4Sv2rt46Qo4BGgz8e89Lq8LfnBhAJGVMaUjW78oXCFbicnQfqtxJZ3Nztn9E4KjXYtxZXFX6K2FdpbtSMApZ1451",
  "key33": "568aEn3aP5vv9UJkVKrmJFNKJKUTZPUY1mm8xUDx8ycJ11JuUL828fPSp6WkTXT75MoqTe1w32VXUp9H5Ce6Lcm",
  "key34": "5T1zurZRXpRbmFEgkM73XQzC1Rny9uEPTCGGJJtv6fNfCfPQKNmDGRHD1b4xBf5Z3A9NaW689KSLHuwzQ9JceKEo",
  "key35": "343wngcJByytS5SWJ5uYeCyyTRNMSo5ntCmpihDTpQk8A2zgq2eiY523H1yZUchsHjyfavgC7M4HxwoxLk4w5WkK",
  "key36": "4aXXyZLf3YmvbLT1x8WxFxTYFAASv1XamMHvbNjgafxvN2dZh5pxFyCU5U1o8gUQRKrkJK6nasYevERwd1kgY2Xc",
  "key37": "3FAMuRS27MZBSmcxkNEbhXXcErd4sX8EJYjres3SZux8vZtZVNJTyRkRT7tFuQP8VAGXyyLJKUu13oyhB1FjFjPz",
  "key38": "uLA7CJZLW5CXpr32pA5APYx72giqE5MTdnYxQmAWB7Bhruh5R1wTrEns7LXLftCbXrJxeUhQEtxnKicKGPQJCvM",
  "key39": "2L5HKiWVCZXSnpyo3mYGBCGSmxbudaeDFVv91hE9VD3yNkpmFradpyisUJCRvt8TWJcycFDjLq1jh7nX97kYwYH9",
  "key40": "57t6YBqTu4KrBMY5E43G1YvB83J5dNag1LVfHAnfBT7ud71XmnRBTG1rUJ8ya8NdXFuKFUcGPsBgHECZw6FmWgGK",
  "key41": "28gdLDJBUBkqT267NBDFDGCZ2HXgXUMEzFoqgUs3yXhfyTYmwpersfRJ9Av9d99wJvDr5kh4yZ33Ub5exa5VE3ct",
  "key42": "62C7FT36v1H7CW7VMMUtVE1ZSgjwq9riXjqN4vQr2aVHpTnCkKy8NdQk8Y629d4AUYjygrC2eXyLTuW2KX97hu4n",
  "key43": "crghkxkLvxqLe3DHiEHfBBxCE9aT7tf31d92VitB8S2TrCy3kXpodUSG7LLvoLmShLmTi8dq54FWkaQKhVUsrCV",
  "key44": "4QLvQUx22VjhdYxVnMjJcUZtuWD2q41DLf9X8UQL6WuNCRfDdcu5LiAMXvbpmvmsuvvjeJNvxMyiG568CmYw63GF",
  "key45": "4mE4QtWsM8xVzvXwy1KyMeitoQf9HQbW5XM3RhJSPD43YyxcX5SmSSRw8FnTC55z9bjyKPEJhrJj8ha9ojVBvbi7",
  "key46": "5c2WZhM3zeZrgEZJANbDobe9yFn5yuWYLMmz5f9mbRzcHTVxxeNKBcBUUCN6BQc4vvnPxzhfHAJ4ttj5yYUujeeY",
  "key47": "4BESQ8dsJ2AXNCCUxwNrVpQhYYZZzha2r2W7vRLs8CXuNfifP3vwiupnvt8baorGFAmoJJ69gaMSJ2p2apyCmJJW",
  "key48": "z5864H592Zgze6VcfstS4AFyAXJudiur1rkiuvrzxWdfcdjqRpJSAfPeZC8YFGoV6gfFadjB6LeqMVByhR1LZn2",
  "key49": "5uZJerGBMzseW6ghHJwvqvKFL4mGBdiESo7Cy4RvvqmJ3qQF3qZTMbSquZ6Zc7F46gTWR3cEVMa5XhkEZnMBwrKF"
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
