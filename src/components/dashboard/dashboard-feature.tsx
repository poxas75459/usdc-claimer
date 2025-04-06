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
    "g1T1ubh9i1TRf9rVxPwPs7tG98RQp3pCcWzfg6X72G5747B6Ah3aMtHe8gJx7WnVHUAHgxXydrSJ5bk84R7Behz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47AtaBuq2AFzVQQmPrkoq2PC52cY9DXqbTax7DbGgL4SZtwxQkST7E4q3umxiKzhavyrvMytVVT5B85LnrY4CxvH",
  "key1": "4g6krmqXT5uVCyhDhiSj9z8sbBeE1X1APQ3RumcL97J6emE597tT9Csm1ynK8zkma9J6awc2nDqTE9iUfVKingah",
  "key2": "3UB9ahsrS4oSDMuSXEW59wv8EVxe4piAK8UVW1Ani56AmF1ht8pDTDA9RF6rsLw6yrXBSt7e6DN6G5AErXPEHQtd",
  "key3": "3ukyE5zmZvwrD6DJVLBTPS3c8sbouixNZA6AzkkA4ukbYjnUkimLB4H9EK82y9ihC5sg3KEJoqqyH6CSi1Y6ogbB",
  "key4": "8f53NMrt1NczpD9kL4b1pRdvNecpZREF8hHcKZidmcNR2H8D3DkkrQgbvRseA2URHC3LJcwDJgK8TE6fNVeNQza",
  "key5": "gwA9ABamQKC7XNZFH5pQLKVTK667qwDom8kj6XVtRrGN8Mj4wgFqdXRRxT5jq7TnH9swykpfMgAhiH9AiwGtPdS",
  "key6": "QBq8FGuBnwQGhJ3NNsyhopzJYK5f5LK1xT7DtSwYiJKfhhs4KnexthNNsGAre24T7UoomJ9yZEhbngjAhsMw5Hk",
  "key7": "65V5t3biV2zcULN3h21LUYRBmUBJVbT9wTPaXYViN1qYLzAPDnfuhcfh8syPqUPALLWisWSKrNTxhL3L9kBx7Qsy",
  "key8": "wwyk7TGhhMBs5whAz8mVMfLtdEhYdL7ewy2HJTudkEPHWTqUoHT7Nj1Q9KtagbKcW6xYfTmDbLwjYrdAfvS61w6",
  "key9": "38ZEmLM67oaWKLj5y7HskgxWzjo5FMK67KRhCDf6omgLDBFGu9FV5KiDx8ZvGmJE5bXjrzMwdBA29mxfoLWDtzgS",
  "key10": "4d3SWtCCsucLAqNtCXzGdDV4uNDQErPv1VBoZVKPo1RkZ1s6m3SNFRGzdGR2xywjpXP7qQpUvxQEctVT1tygQdXN",
  "key11": "45KcJSSS9W1RfSNWPdmQJLkLqPeGCH93dTUre3mHn6FFGFj1s5Fq5pPvjr6e1Ka3PcJagpjcHH5GGxxRjrQNzHXh",
  "key12": "4Z9nuL8yA8fV3Vo854JghGBPsjEykHKM81toergaQMqcvktxSaNzhUXu86i7QofQDgUX3HhJmCSuhM7dK1XmdkXA",
  "key13": "5LjfVRbuvcMU55jn7CgiKDMFTqKzdPtiivLqAX1tKaM7G6BGhK5DkvYkjj4ax8RDaQgYQutxeBVmbFhANgmqNExh",
  "key14": "36136r3Gq53GoaXMw7ZUmGFZHH3MB2wxDwPKdUHtBiYikR1LHXGLvnQr3kR5gnKZj6pyckZtPcq5NrMQssRVNZKB",
  "key15": "2D9VVLTwPdSbeGcNM7Ee5Y6Vr9SmDsCkSmAPpqm6vudyPHFeyxgAWNwG9YdYUYsZuZZR922YLqc98g2xVXQzbPeU",
  "key16": "3uoaGyCVC4NQog86sxft7KDojmpHP4NFZ9Cq3Byya3yhFY2E8vWeTfDu9iHZCs67ECcx5go14WPLmHpLLZX3y9Hf",
  "key17": "wYs3VNDQuVisYbxoK1ZkV4hbfFxmkPh9TMU3Zypqf8svMiaVUefockTxcqCz9ZBBYZCKtNSJSBE7z49KAggTAtL",
  "key18": "4xZBUK3E6uB5JX33ife2kgKBsuy46zMSs8deSyVUGsQbYHbA3VYD4AaevCzimxiyoUbJjyE4gxSgKqhiZPgRrABv",
  "key19": "3rfYv6A3ZmRY84p3UxfdY7mYFER9m5BrKo8oh86nTjDrW1vKeLsWgbRgcoBtjKHWc7kzgbSC1C8JNbowMgpHi8i7",
  "key20": "3mLyNgebrLZ42r5NZidnpvHdwTKtAnWfTBKkYFt8et8B3aLZ3VsVY2EQcdmd8nympDDidSfLiFrueVt9ywwGSQQw",
  "key21": "2U5HTzRaT5HuTsevFnSFZwCbNhmmCr6CPHs9b7v8dsxayfKHZjVYn9T7nWVVCibmEo9T6o9Mbbg8umscfWzs6rCj",
  "key22": "ShSnW93ZQCUhgJA8ZFSJNQU3tmGqumUSms4ktdmg2HoeP3s9qXcBduqGG3XXwZmcD4aBVcamsFw7qhZYX5p7NAe",
  "key23": "5GmTbfiTB4QNCB7VjpURR5ko3hritoEkkVebjiHKdGK9WYffx8zYXnuvCT7zBRSjMSaYLUERZte2KrVrHGdcfVgu",
  "key24": "3N5G8s1gQrtKNkjAYij5eC4AuBUeHct1fv4obSyUzLiULQRQdjJnf3xS6e4TpHpQp42wy9CYZsZwj5NMjLGc2Ms7",
  "key25": "2PimZQnTVZhDjdVTnsDe7NWPeYwuqvH9mUjFTZx6cYmj9aCA1iHqC9o3W3BH9x5PhC9gNMqGazDudMXocfLVrm7j",
  "key26": "7TXzeePewSNfhswmmYGh8Ezo9Wsap3poKdXfXqDvd3Zm1ckbbaHAeVXFuNKSSqrBfNdpDyx47XTfJfsFL68xtpV",
  "key27": "2WCDfouMWG1qaMGiBNNBYmyqQPtRuV8rfrdELKsADRSrXpaG6RKC621VQAkq5rsHp348hmTEPGkRRfHRZyXaxmjt",
  "key28": "4kE6fxfesFQdEmSqzcmSim5wpS5TCoNWTD8FgtD92hGzB4KPLm1XKK6c3mUkpxa4FMfdjK9D3WrYbNJ3tJeYf1tz",
  "key29": "2iUBhK7ZLH1EwHLAVcJQx6q9tyCAzc7rvMZt8R3CV9Ku7qaTiQF4LRaJiGXYQFUFYYRuiJBJKrVjN8jW5S5ccCJf",
  "key30": "2J6cgeKkBvJRk7891d2nXgdw6E8Tj7CyLyiMDyvs9gLeAuK2pJXvtAdZVp9kmPurvhijLkGhQacg5jesSbAPdj7T",
  "key31": "2RhPwXUgyXRcoN2rtHTRQNWowCbRP5BJoWmwTgpLcZsNWeP7bVGDfhiVyGUjwJrGAZ2zC8WBYajNrhRaDPiMYCtq",
  "key32": "5fUW5D8o5bqEwmF3PWdSfjZNfRbcus8SBVsJLsAzGVTTM5sY8y6MkN1AAuPtACpx6WkqT6Te9F8iv5sSaKTWyUvS",
  "key33": "m5m3M4uow2VHmQP9VnLgZ3Pc3gCq4uySsKayHqk5iB4y3gDqfzr8huAnbhn8d3vbx3r7SH5JoqREdoiGhKM6BF6",
  "key34": "4iJhCN3GyTWh6yKVdcrbE7n3b9hahKWejoygJLVbNy59SRYk3rEDXvDj2opdAw8c75wGcEHvYTauyxTsNLdJr9dR",
  "key35": "4U2hVRVk85Giqr3PVbQ4cTP1YEX2sLBk61wcMJKMCTo5RAuiAkYZTCWVuw2kcVvLZ9uL3YvPzY4DDntwobKG9awH",
  "key36": "3Ts9yD3zgPTrFvjzvATujTuEMtC3Ks51f2egPK5fp3PeEzSnUwqPrGyAUFuXZYSmrcdEn7GkGcRfLYhqE7VSVFRP",
  "key37": "4H4S5KubJ2hDykednBqZNkQziA9VYhdXY38RdncNDGaxrzyJBJtXbEgWS8TQMJ6QWKpdmD1Sd1qUTa5ZVG76X1vP",
  "key38": "3yGBfHMYkVpFbrxj7wbqqNPF43ChAUFo5NUmvSKWWJQ9RtgdVhU7r9J4xsxGt9s2iMP4uZBJxEoc3iLddsSrCyCn",
  "key39": "55aTcAZQUTkz27uFTBAh2HkqVf3GbzavbupZWa7oQaM4xTwF2bNf3b9Nq2yYYRn8ZeBRuyZcbMVg6FNVvYkz7ehd",
  "key40": "msKQcubgBjJLnyja5b2Q5Z4ZZxcf7iBHAgJjQJML8HwujAHxbH8myQ6e7c2PXBeyDWU2vtba9PnAYtgktS7zJJB",
  "key41": "3QMjM7J62u8pfafcmTkVnEuCtLCFdUnZb2jfQxVyx9VuEqX621HRKchadb3LRXVLQ7EdgEgASabj2BXMkReoLjZp",
  "key42": "36RXSoX9JQe66ZsUJkgo3BkkB1UE9wpZyqWwApGRDpU6zcGqBrpsdajnmzR1x6opTfTj7jMMbky4xXRsR5nz9dev",
  "key43": "2xcMwnu9EefP9bJ68vW3A78q9ySAwRbmN9nu1CchRNmV2tBibkixSiX5PhQXR5LEFPmQdLSAPJiBuDumX2gwjp8X",
  "key44": "YwZr7pZeaLz4imZ59fMMhEtDCDXKbMHoX9aQRz16hTNR6k7HkevwcuJ8D9JXF5aNiPSDFQ7UU2BhhkkMKNbLtVb"
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
