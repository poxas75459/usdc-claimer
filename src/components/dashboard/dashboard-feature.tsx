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
    "5BXFqihmh7LpVnpqWMBQUxVDie4ZUJATEoCpvAsfQMzTNe3GczGGWqTgZvHGqvaNuNURSZZH912RpAiZDcbcmtJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X5bYdokuGzzh8jVSi5h5apYu6MyUkN7rzqrJsPtuDesv9YERV821q52TCG7GAZHDJhZBNV8yrzgu6J6uop4ukJc",
  "key1": "2vMwKimvp2mrizHAMLXSBwkZ9mzmjRVtvDW9AWAaCgANWMnuDciQ93oLkKxqB8FtLXH9BnMWUDSKTxoWqzHQsMEd",
  "key2": "2toKK6Dg1sScNqEhvywaaYjQTaMVYTTk1JB2UvqYRonhZZ8Jx575qnpYz8YZd3Er22yMVXAHP2caj15LzBUjP5ed",
  "key3": "2je5x1byxXPYEB75WMBnUqFUb5Eou7bSSsVBdGqsjhnRQLQiQnuRZV8DUMYCweGzt2tc7dutBzctRcumMmsm5sD7",
  "key4": "43TDC3XD3Y92M1x3uDmbaFiyg2rwknx8u7frVtK5fECwBgdU7QJCw7EEavFXd5JKkkucM5gTULJiNN22cGArbT5g",
  "key5": "2jaBpGZwSs2on8WUncpF88SkitK31njsQCLfSmc427JwhsxWWFnJaSujGQ5nFceWZWqs7Fa5H9DXY1ZsuPeVK2Jg",
  "key6": "3dp6NupztBGMwq8MoKQi9QgyBuYy94u2uXRKkCzWVb1KekpXTToJER363MKiwwRnaFS2RYZZwzC5CazNcLcDZopZ",
  "key7": "2dmgjUfo74LW7UxYYeXUqJDh8SaBfB61CTAaEo3P7skFC9BrTojCvDDFbDAfk1wAvnVcgDmePnXaCKLakKze4FzX",
  "key8": "qgAogWWU9hfFc6Tuhi8926W1KAH96t2bRz4kH9xxvmNhF5WN9boL9KvaMEKStssKLuj6WhjBwSc8mXG5EGAsZFR",
  "key9": "55KLd9MiMUn9ZnES4G8fEccRN15fE76RiSi6DDZsHKKwNuKgWb4au6nE1Cc731UAUXzQtKip1Z4ctFRmHM4KjZaj",
  "key10": "5XkUndW6bfqyTEBo2wZeQ1Lqhh9G1vowMTKxEtGtyaRtoZGnUPH3EMD7KpPaxZ9dxjMDLE6KEE8czB6gVDX8YYM6",
  "key11": "2MZ34pvHvi3UpfZgGGnjZqhnNnxwV4RKLc6YqMAkoufyiZcwxVfRDH1Ut3zUcUvsE5SUqrknT7Vqx5WcZQVzw1DE",
  "key12": "4HtAeD893bxej3f2L7ocsDStGYGVq8r5Aho5jWPDNKBQf7VBxgeVcCkBuJpkj9H882UaKKunoiY4su53x1nJmeaV",
  "key13": "2xqX1FJkq3mWfpDCAtBU954fW3EeJngjvcCzWo6rz6aF8AJtoKUV1LqNShbXPHSJqb8jE1HbzEhjB5o5eCHa5zwt",
  "key14": "5mGrBW8hWsTatvg9F7a6SMhm7iUgXsNqQUUNQp1YhjrwxE9CPMNhbxNwKSNMc98rnLRVErrhRR9G5WK3fEEvkK9S",
  "key15": "2q2qAqFxMDv4pxN5tf9aESTPqQRfcwsAosAYpEBJuLBzFwiUPjxU8xrhdVc8y1qZveHrpCwGtLxDF3icR8bWfQnz",
  "key16": "oVwRxj5WhL49zbSJibHos4eegvdL3xc9dSb59Q9Kn2vDWHS6d6k7vMGkrukngznaweNw6mydNoSvFqJjLGnctXD",
  "key17": "FuCLL87eMzJ4sTWURCGqYV8ExswrFagWz59ctuE4KyP1cEztVQ6aGfnB3E3eP8sRkFJhhi7hBEcue4wZe5VaP6n",
  "key18": "5Wdf8r6oJF78icVQLqsYJgrGD84QdgfNsfs4G3Up45Mb2L4HyCQNcwKr46FLFkWZCuKJYwHCocuUFjyBhtXhXBWd",
  "key19": "2p9bdTUVeUxUgpZFvx5Jwe3ji4xB7gBHN1YMc3CA8i1jEV5fByD2T1yacntdnQ3R7pzFwGnShdCiNytiDgyPLyc7",
  "key20": "45whnnneGjVpYFLaYVXRmvs8mrVo2HZhcCQq2C8q7TpVXWH5zQLxHhjfHkSqi6HBsJ7G4oUSXBWa9YJvF1A4Ujpj",
  "key21": "4jZZNnq6aWJTGU1X996oEYajp9wMB9DVAoaJ3a2HdfoJ29wYeBkunjVgeFpmuPC8KppyAuMjXzZ2m34xQPG9MNY6",
  "key22": "3y9GAhvowwK5KYipU9zBgFTD4kuL1DULsAScBXBvjtgZNnUBBYE16rY79wdkTmS8AWR7G4FUoV5pgzPFei9Za29J",
  "key23": "zTW6g27rWZmdPjgoHcmmfFrGERiovgJya2EEL9CTBAq44nL7pvFT5qPp2oXqru5vNge9TZS9kDvNvzWvCdbUMNe",
  "key24": "epmZ5wCb5r2ePo4arxfRbAvtmMhcEv7MbfyRijoqkzyoxju7t6QpB6s4BfPAXhQmv7cqhL7EXTECavDeLndRSJS",
  "key25": "4W9EipHyQhtuWS6vfRYz2772qzD3EEBHTEqY7pG9nGJepPiV7x7n8XDTTCjtV7aiqukeqGKQPwWVPjH4n1EHC1CP",
  "key26": "xSKGoSSLtS4mWAWCupq3oQCczStg7tGZw4EstARvEd4oTbnFzA9y1qDg3v6Gr3BpoDqLH1oRi4Wxi2NWSVzaYud",
  "key27": "2W7eX489tWi1USyZSDXkbwS7UwVj76PkQ1kmWBNV8AmeRZZtcbxFZkJJtZA9nLVLKDwL7QQFkxoMFhjmJ41i4TF9",
  "key28": "pUcYF8Dn1KN31LbJofr4GBZGNL6L9Rbnym6w46skh4YTovASMGKiLhbCEhbe6kzwhbfeQ1RRZL5jb9MvkQGj29c",
  "key29": "51LdV532nyreFkskUFiSQQLfAjyApyr26KZVCL2GAFZHTVK3HUpyJyN9bMRJoQfmKVSXfz32wYPkQBe2KC9sAfUU",
  "key30": "5NU35uEGGb6suVY3U8e8Vq4Htz8EYs5aM9UWwjVD6oTa23J2vRouaXefrf85ttbBsdg4UQohnFTSis5Nii4gv3HD",
  "key31": "3MxPWnnV1oZJeRki38yMX4ejbvQ4JLfZFhZMUw61thKNADgt9mP4cz3JgDBvm8gmABJxVrzDaYFtVfEydatWnLeJ",
  "key32": "4KVM6BsMcfjhW9RVEwfGLTceEzNqmHxBjLY7R2PDrLK1WvGN1CxKrBardEze3fLx848zAL77q9nrZmkF4Z7f3H9R",
  "key33": "5AYSgKRy7RHUmnbrHvCqJznjxcKEkLYY4YEA1bt84fJbkNNvBhuY4AEnnatPgZ9UgFsNvbAR9i98AYFqgnKrg3tY",
  "key34": "2LL1jmjpGwV7Xjv8Eq1Yr3AtbCDdffHTq9GR6XuucURHS9HYBQJBsrsVWPXUFhLpSCToBcRcrngxLnobTFXbupjh",
  "key35": "41gPUMfaZgfTZ2P2AS4LpzGPhR89FnhAiRFX8ivyfBDV4T8FsTgfgv4GMWmHTCVJgXc2s5CfxfTthyBDNfsTvb3e",
  "key36": "t9xE3KJNwjQEvs2jDVEskCkYVVECYFcqXr6iDMsXFmT4j1zuYLtT8sXiS45x5yQ2ua82YY8NsEKs6f78R6cD14q",
  "key37": "5bXHpDKH5Bstd2BgFZUpdCvy4rzYLDJa76UKHkLzsVodWYQAMpLaKeRyzZXsRFeeSTRiJY6gEYRgASBcS6QEAiNm",
  "key38": "2WVMkb34Bcqrfcy5z93sWmS5yDjfe3ar3RQ8SzwtxMuXxAhjYSK3U14XbNixBbK1A7vxSN45bj4ertuwSKrJxUVv",
  "key39": "3Ck7s5yf8ZyerXUV7f2LCDLMQcyDsuYbRxkiKokR5P3FHkpAoj9sqva3YPAnqUFpfeojNWQkWCcgRtaEYWQ9b22Q",
  "key40": "4boEkFn1CRNnVTjaLZsjkrDHxYRQbYgsSjtWb5KuRwqrAA7snuSgP95ya62J7DKgaMf8W7YDsKxHfuSaNxCayUMp",
  "key41": "2mSRmCiiwKPbsmc4V65n4yLJKUZhUKWAo5VPeFH1Pnm7NzQ78f5b5DW7XxmHPe3QMjrcMaNXVRBLsEc3YKQxAJZP",
  "key42": "3xX3aaGrMxQYLTncAd8cmUEp6CUu1mWRHkCDyicXVVU7xVTT5rjQNcyJmM78e9qH6sMDRAPeapTjiDqMCxiANrx1"
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
