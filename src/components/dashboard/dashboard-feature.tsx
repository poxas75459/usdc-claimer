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
    "4AEYcCM9YMUe7VnDLb9rkf6YeBG4wt3LR5r6EDtJYLqZbSWHwsoBxUHfUNSXNvrrTfqSymjzQ9oxGvdG6FkoJVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3byhxoTjvvwHL12afKQt6EnU9GZPW9hFba4iD4D15LggQcsKz3YN1y6kYGGmPvwDkkJ2xd7gZsHc6JkfgwbWAA2X",
  "key1": "4Wfs59agUrHfkptMzUc3vwKTMvr7SuDjpfCpLjjuW1NwC3T61f6eMm2YDbuhUbdgnusK6nwojFShHEnBEo2ZZica",
  "key2": "4z8NDTPEkbRJf68Qm2bhWqMPJc5HeYC3bcqLtfsJEg6jSo23g8xSrTVVWyxFcMGmkgnnRd6Z1jUpeBf788778JYU",
  "key3": "5xE84ECxtuQzS63R5kvonU1qePS23LYBvCXDr3wiTT7AEvwTCLPBCYVwFR9QgVV8NBvohm9FEJZ9HsKRFbfvAGgN",
  "key4": "3FpPbv7N84GkLKamk7ADGitCfxBYfppRFsVBbHqQHtKXHFxQRZ25wvVZTfofcFkoi7oA7BQaDbKrMUBtDrwXdaJD",
  "key5": "MLg2ii7FoAbPHLqVwr75W16t9DRwtzdnY5C1RZKeZJHwo8f6xWsVtKo8v4cyKPAVHZmE9tPfiJipwtQwFCyGDUh",
  "key6": "PqZdDnGSVkmZdvK9XbuWA52QTUtrBeUDGKCvJ1KE8ZJBFr2YvDdtXqYYWgzHJ7WhzvKLw4vLwWjnEE3fi3zxpKr",
  "key7": "LXRM3YgrGWW6qB7hDPk29s5bXiKrcVPqsNNc9WcsE8TVAfJXcFB85SWJQbC6wLoJMDK8HPjjjTCA3J2Z8Tcqbnk",
  "key8": "3rTSFz8oKrcNEFM2ARtScUeemsmUcB1VG66c7C9fHgCAqbCrEoEVUrYhKj7WFKVgb4jVgB1mTbQNwXSmfzAR5d5V",
  "key9": "63XUAc5KXpbJRmuRARGVwbpGDRsiZkAj4RzGcnpGhjHYncHfAkABLZkB3Rzh97UrpKPPNHeqh43Y39aW7NpWA871",
  "key10": "BgQ3EahRcfHYnSrVWkfnuxeHViJydcS15aL8x6UFxJNLkg3vf2sQUroPSiSTBATDMtep5CgLhFGuNRPdp3Gpvso",
  "key11": "2FBNRBvnASrh9hWSET3gdZmDwNiTHnV9Vcm8X3p4PvUVDhF4j1SLKkp8tvQ8Jrh5yMdhvQYZhR3KrktXEUL1eWTv",
  "key12": "53YYYoXCQarrkmD4aNJm5t4W3Qn7uUciLrEyx6p5UrwDrjLtxADLJHxQpeiSFWss58nT4PQ2bDnH6rahvZRmy58B",
  "key13": "3otxJgFS7qSyw89AgRXrNnzXKyc8YpggiWvYD2iWbQUs1MH62UVm3w8FzQ4M724xtA8FoY4XRoP8H2bc23Kxakoq",
  "key14": "fT7GfdFb2h1HwpzfDwzYSJTpC2aWznujn7YUF9DWTWsyeSxAY4yq43gMprFm3UtUdbzwVG5VYPf3YRyvSZqjCs9",
  "key15": "3YqkihmJaxkYzMxVJSFh2cFVJ2kUzzhUw6yYFDB8Ss9XMbicnas25DGNAhFnAg9Pg1pXgVJjBuftuyZubCBKPwuh",
  "key16": "3mBBsYBniJhik3UiLPKNfNVjCs6mn8sRuZKmtUZuz1SM2p3NG3tRmCUZGRtse6mtwRe44vgxEZYwgaBrx5HCAjeu",
  "key17": "5gpoQbXQjcViLZZRvF7sYLMsmZe9Ms4RvwmxnJbJU25LQVSebTB3okSAUjr7SXM6AxcrxWUQKEwPV9q46xTVRemz",
  "key18": "CW41EVLZyCb1d11iVtc8wzLzXBrFKEC3qtHCzZBRcLbQ1T2BXaMx7hubJqHbxHpGmTsYJwGRu82kGEsTgHqwaUq",
  "key19": "3Nt3eCyrD1nfejNjsRVwDRWMhpmT7MH2mmN7mDrpjAmZLQNQyCDps7uwmaoRTcgMeEe3r88WBHhXN3Mdk364VmD6",
  "key20": "3iibZ9U2xyt74vpDn4qb7R1azHwJL81nz3mXh98AbWsVVxvjGVTQ9pvZURSi2CQZqyHNfs4pX5tFsXm9F8wrPVNF",
  "key21": "5pjntcr1qpY1Bvo459nM43t8mHpFTNtXLWYCEqxvHXCPh91t9T4FikApacjhN5V5hQAfNywT5QRxqXiRNMwdHZU3",
  "key22": "2qnPDP6qZyQMbhrAxXGJgeTgWs1zdTmJmHjUMWReaw4X9tNxdzfVXUYzcDrFkrwGwB2PtZABXX2j2GcnBdLH5sG",
  "key23": "y3AWJN6tGNFwhVd74CahZriJo8kwKHo1cSQwhe1TAh47qwG8UEFH1C5fUufbrqTys3SwaF2tWR9rJSVa2Vcq7Ab",
  "key24": "kP4nyfthtPb3DjdTsonnFxheAYbp1pER7gwQ3zWm1dXtGc5XNahwo1UykaG69nnuS2xMNLQhRZpsDkDFVmkhNtA",
  "key25": "vPEpbJKgA9oNTScqyQyBw1egPhDhAhmpEWBfb8tSkZKCLWQcWmjFfGZNTbsFvmvk3wDPwqoFkbvfwkDqjKBEpnx",
  "key26": "38sXr55jeyzfHGekcaT7VxWMoAvyv5skfWRNfyKYBgfAMrCTt1ZaLAXboYTd9YtaHd6cjdXBCbiAUgfTEVn7GQ1B",
  "key27": "4XZ5vPzyMBWfNvPXi4GDKXEyGU1XYrAeuRYpEtvoR3rtUp1t9HxeGWac1FpVaCybCawogVvsdcP22t2ticz8EDYS",
  "key28": "4mFzYcgN57QZpNVQsGeumoqAjxDwQNJnM1iAmoa7z2xGHsSEqCqZrVj9Zv8JeNBGNfPRcrVb9bLNSe5Rena59htb",
  "key29": "3hHWaLuLkSLWkyq5JSJb7KMADQXEz1LtCGNXoYJSUZu3dUca9WDm7qYkujBcsidJ7Xy2z6YgXsSTJ8nJiL9eyxuX",
  "key30": "2He9erfkz1d56RWfVskcA5T8X1cJsCs9jBKK7yDzMeXQgw6fzw6cgGgiZ3BK9gRdv8RNjzw1ppULMMkvWQw1FXdn",
  "key31": "5ykdX3E3Be3EaR7eHmHBzdnVpEAQN48D9nYZu9ocg9LqGmweTRhoYhY6staCbLjdYByDHMStEyAzzNB56RNxYiCB",
  "key32": "2WYgznftRDhKvht9pL1UGUCVGrN72szsAjVDWkRQ3zaPxqVypZxyMw3Y2gaffGQ3qo6wvdQxpuDrLRJQUFZPC5VR",
  "key33": "3CmqijQgL4ApNsq1NG9eLdfAArB8vQg9wggQ6zMxcGwMQnELpiRebahKZWu8x8WPkqZWBdXnH9pmaqBDRmpuPA7F",
  "key34": "2MFpnxCyFWxXBZLG6A3o85hXwZsW4q54Q2So3sw1MAq3rAkkSRveNxQiWWi4Jx8yMe6nSBiVrbNvXPQmTmffUMvk",
  "key35": "53jxjhfCgEotipsNRxY1HALUyVJB8p9LgRXYZ62LipbtPNW4ZiQpT5dAxJEGotUciF4shgaaxqhLHjBZCycpxqeY",
  "key36": "5hzU96YXNVcbXjxLJ5jUNQ1VKG8aH6hqDEdmeYhzmc7DmiYsTKViRiqbLt7mqqYZ9xDfEWVwvf4TzZhB6fAHVwK1",
  "key37": "4QmvRmQt9MYTmJ5Yj2Yz9ZfdfJ2it8WZkxNPhQgn3pFV9iL1ViD9VjCWvDwsDqxyaV2ixYMWHNWFoyxSTSbxwbmz",
  "key38": "3apcbrMHBTgc2Juun6382KRGipgxAKDrZGTbcbzSDW4dZ121QDVBTAU2cwFkmspUyD27BZbc4gvxFdjDUe65nXWd",
  "key39": "4WrrxS5XBKwkxkCE6GkPeuCDovKgRUfSjdnaS5wYYcXRCzoch6cwf5iKzKnVpWqbthjxgo8dCj5bEduddrFWzLcE",
  "key40": "64DQvHMauDTKKZDRYrgNDXhcKBrjwChLqEHZUmthvutgKNPFkSLdHYQgS6DdpntReGquyvNxannWqMMQbvHmY3it",
  "key41": "2f2rHp3bxG7Wx1C79XwXzeAWMbUPKfnpTeV5CHYx4LBDKGnAUMoDnW5azk7RN5iv3JDzg6j9ZTd4panM6G15Z2CX",
  "key42": "3wC8Lb1xrxQ2RiRk74XNjf8TuDMA88gg1YK6eR5mSkPio5wfy3igWyzWUzR7nwkh1TRLmBwC12j9QHjJuwBRRegY",
  "key43": "41v4TrW5DsxLwFSvotMMAKuCQb7n1jfNNYzdfQPsaqDduyyr7kE1jXiFzsjcHsAwuW38QZ5eNsXbkHViDDh6dKqN",
  "key44": "26WGxhNL5LVee6Uv3LrAdqeuv7ZrHyacyZf4skrZKeZA6ZbybSDDeVHYYxLd6sj5cWMGyNMhsVA11Gp4sGXpiuqD",
  "key45": "66Gz2q3s9TjEdDMh8Zoo9mkW6FDfMeqj2ETZ7QY6byLXGLbNBT4wBhCKykyut5oUpBmARcRb6WCgVY2FTvDcYsw2"
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
