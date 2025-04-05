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
    "hqBFacbBiwRPHHjQwBtQkXS87XK1gHKg5tYau6fKfYwxW3WhsSoTi6MN8XvQ5r8aoWk4f1wQvGbmtiUyRZ5FdPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cz4hiX6sgs2Wt78rSCL6cvWsiCffCCetV3MWhdpzAEkhGSZkHexQS3TseLn6gBMY3eAtaHdTAJLxDQnnyUTcKMQ",
  "key1": "3eRwemnXXULpzcdtMQTWujqjdmEisuzTXEYdHGiFFvwzd2TaT1T2XJ27YpsG4gt3994FqpepMs9KFSSwndnaebZQ",
  "key2": "27QwgQv9P6Vw6CJQg6haqHUxuc6g3BhCm6FwVkz4xUsn8tcHQ8M9bR4wwreZwipq4tBibJuF3XLLuVCngSDMjNrc",
  "key3": "2dgHxREcPTjpcULQfAr2BEqpq4TdZi5frQR2gEfjSYqAVcjNXoGbSZ4ZQjeWKREUURpr9oaV1eRvExy2zaAPfMiQ",
  "key4": "4Kj1YmYM6zFQHvNKdY4WQQBxPZ9sHGUXeFKdQySMerQZdnoV4jZ4BCWcdUzmQwunVw83X12SkaLhNaRbySPw6wcL",
  "key5": "wD7S9ebWMZzuThKGjRX6HoAKRminYDDnGVTUtX3QbSb8uho8HsN3icmk4cath2HKQfuFjgLmJeSxoFgLLvUGmNP",
  "key6": "oN1f7PydVFes41bZtNcfe5nEhnESrrwXLaYyepz6MMVU3twRdazYwBsq2KMuqfbHcSwnt4ieqfRHyj9gjwvTZ7N",
  "key7": "235PtQ5GkckujFD9noTt5g84DZcULjvPsySS3DX1abkThG3QPqC6qMjaRZbWwefTvbmgcxLuiVBMDmgrWniQTJuc",
  "key8": "5gQzP5a6o7uV1gC2i8XtQMcbcmCUvbdKt8gNubf1essb6fTALGM4VDcsH4EHPS55K9uBeYL7Nf3k7AbWTcevsK9n",
  "key9": "4sQviworCMUVwkmByje2hvA5rge82eMtxTQZHzUaqPSyU1dZDwQfyKxAx4yNosJqQeUA7bXtWnTeSrgjw45XtWWm",
  "key10": "2L8a7LXga6LUEski68X5ekuyEFZAxooP1CaiH9NHfRgY6Jya1XeXg9Y6SV6R2bg733ZjkbPQZoUdtNoDjEJhKfQX",
  "key11": "2E4wiKkfX1pn2o5QKLZhPDTFGcujwBu9MtR1Jz3Q1Q5sxdsmtBGCTrEU2e8oBefYh5MwDgRv1k9PqGfUCun9ZbPY",
  "key12": "511fpnMrg2N9uhez5Tvhjvcf5yArcHHVxL7JUXSjjYBwUfP1LX38Yu7c3LaKVthbvgvhWcUDivzMbQF3te22AxNB",
  "key13": "4Wo66TdJ1eYANiZAK7AchxbMc2K2w7svzBeiegHFLbcSpvqxVzYz6jpYt8WSvv6dHmYqyR76QhbXw8z4WPygfjnA",
  "key14": "2Sv6MB7KXTEwrdPnzgciuWVQWCYRzLPC2JjDBMbMygmfageefwnaBQ1Vc4VpFFbwyxCW4VzwfYnbVzGQSqDXmgri",
  "key15": "38s4dXdKRccZrYAz62hFiNAGTS9TNKgPkFVGszLQmpRr1XJ59nGNmdYKGAEo3nuM75BgDa8WsidrxW7WTdwehUnW",
  "key16": "5eWo9gpVGboc5sZ1P3H1kwSfdCLigNWGBK8ziYPDrpCyUja5px7FejwssysTQGAdGwLJti9aSzYAoURGo1SRpJ9c",
  "key17": "4WcNeoCp38ZmfNCXjmqujo2b6uowWEhaQRdmgBRenED2qDLpQFpDcK4kTbGt4e6HK9URxsYJiQsebT3oXDGuR8sQ",
  "key18": "eFNAd18dRQotwn4XujS7DjLegedhcfaM9oaE1DKbe2saeaLKJtpNmezR8FsygF53chjLwvx9JXAHwVCVCxuFR5C",
  "key19": "4B5Cgfbq7oTz9dK5PmysFvgijpEqGpR6dVbXuTsERv7ko4WFutEGssQBUZ2QskXiSuKuvyP2k6vU7vzCh27FXG2z",
  "key20": "55sn3AdwGdN8iLmymqPu63EVDnFkX4u4UiXii8u1BUnQ2jMnTwMSxVFKYijT9kbG4wyQEhzNoJxmGnXEYAQKPH6Q",
  "key21": "3G21UJdnXkyjCwAu8kDCj78X5Up1Qpbc8zUaTJG1rdtBLUCqToLjD366SjcHUJ8xNPceGhGfb9mf5jGv3FeWApV7",
  "key22": "ejdkeYDkrhAafBa3Nci52FvTbX6MiZ7nUAUQhSqH8ExhYaW6YCKgu2fSaV28AbgTVSmzEtG4CoffQKB4jMw3DHs",
  "key23": "4ko1TedpbVopGg4dJwEtbsD5GVqjymWYomMgqaSnvCibDPVfodccvyHDHFFcHUcRjweeqqf3ZKax4Gz8xNUGKUqn",
  "key24": "21KHxzAhwaUs6UWweSYJnw1XSAzTThmjvNfYkatG3HtPWcoxaRXqjUyNRqCCWeV5ZPzuJadpHLLuR3CyP6q2Bzh7",
  "key25": "2GwKgUt5xV5SeSE5pMtLbBSFManHddhcPx8K6TkRwjZBiK1opq2LMhTJLf7fnqDcjYFgMmo8RsJrEUpPTnp3cPBs",
  "key26": "2NAmSGwR4rRZdXb1ePPaLqx7joXDvQ1A6eGx4aiHKCmMYYd4Q7f1Bo26t4sDbvuqksFCP89ZxDFbm6GjuiQRe1PE",
  "key27": "5GprB4hqvEHsTMWmheFkkSHWdNrgakhn4emE8Mxmbf5sQN6NBUXo2yDQdRFEp8cy2tGK576oSUCJ9pWv6qkmHnjp",
  "key28": "k1npdSM7uuirxcoqE4eR3vFvwoC9GLiswEoH95mgsisxCJWXeuZPaL7U22t6xxSEbynH9U4uNpLR6jTwSYPDNy1",
  "key29": "2QqjCmp8fSKEtj57UMq68jR73TMkKg5fsCdAR6pA5XfNbCcrp7xfPRLR2YqfGorHjP9kbS4YaFcdy4E1SRYBv1M2",
  "key30": "ffpNaeF7tSqiDac7Y1Eysg3Nx9Ww2t1Ean7Nsz3Ygj9embsyEnEgDJDAv4T6pEzj2uvFs4aiQuy2TY3isQnbESW",
  "key31": "2CdJfsHvD1xbZmiGi73Kw7TJoGoqazSc3m6v4x3tsCvwkH3VKGUqoc8iAWrN7Afxcjc1Btbyirnzk7DrauppQdZb",
  "key32": "3iyK6FGxqV7AXe33kqNkurNRy3jFwBPWnE7pc7u1aJsJL2h98bqCgPoTLMKPJcwaWkPL5JEJHG4dAzpDV2LQPGnn",
  "key33": "45N8rWTx4LLcSgdFohuapQMJ4awUsCw7CmUbwhmqbY2hq9zBn5T3jDw2TDCN8drMnJKSuCabUYXGafg5WmJA7ht4",
  "key34": "4kTzQrpga6x621sCnC49EcQrn4mm8wNjgB6bJ2BEfGe4pN4TboGwG4gPHKDdhFomZN6gGsXwZtaXUJXPn79PRLzT",
  "key35": "2K8PpzUaVRa6g5FbdxUDCH8EHfc7CXSqopX9EZKY3CZoPUnMY93QBCLpcB2EVXxpyQ7tQt7FBdn9kCWqcQNzM96",
  "key36": "2AvUo6MpoDCLZXzVMLw3SH36JMt2iJtQA5TAP5mv2zqPMN3qEJdyyfLff6CxTe6FSq4yCkLWxmaYYqRxo8rN1zKX",
  "key37": "4QCW8xaiQnnQReyUsmRh6tGRxCSdBrf7phe2xhYZVVmQPGNq5f8GfRydvq1tYx2nG2swripKUGyK2RGnTSx9nQBw",
  "key38": "zgkX7cJq1SPjGMZZYT7ws7cPFwiSJnZfF6d6qcdAzyan6WEQkAothsMr5TNBwhuSUnDZtuUFddgzbzk4cwKbn7M"
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
