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
    "63TWJfmeWiCNgBeUWfcDbF6C15FJb8pEiHaUJZHZTRfgYkCobhQXV1ubx5mwTYhT1okDoXsSQ39EqaSfvhYE63oR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cebnNpygDyN8eYjfy6KeDrUiMUJVNUyLm7dDGZjf9AnGcdbUon5i5RiDX91sJ3QjrpavfeHagQzKtV7ammRVfGD",
  "key1": "SDSGTerE6EiBwkEREh3iNj2otSnchMxGjfe8HDjh3C39DYqNBt2ELf8qnY4PRKvuvdqGAus33vAZ7nbV8zTKHy1",
  "key2": "3KN9kZJGkiRU3JTwUWW1wsNjn6kkFTSorkDGDgmocS5mskjTkbXgFCnBDU4cBGUCE1qhYRwQQ8ge4WETRwwXmAhP",
  "key3": "5gsyqVDennqUXfqSxCLzfCyncMxMENzxjigvu2npqdnVqyLsf4YFgj59SprQdRrrWtXgHS6C4Mp2ziLyoNRiijhE",
  "key4": "2Fgb2YmeEVUjWx9uRHDn6iNDiEfYm7spfCrxFp5cxZe68CUe24jt2FHuKy7J1a5jgPCbQh55vEPYrpxTGwLSwb5p",
  "key5": "YTC5t8dTRrPeuHYwifKsuXimmznxZw2KF51nUKBmCe4kTmqf9G5ZNdw4ECW64da2NScY4N83vRqhVcxNkMSeJuH",
  "key6": "4XS48D6g9BvRJLmdmPv1B5C8kD1C5YJaQX4fM9nKsjtLpUZAM8rAgEkak55saNMor8HoCQXZxMbz8QizTbdQCbsX",
  "key7": "5SbHGDKPvz84CQHGobXcsESAwPcFuk6qeDx2FyKdE4b7XUPo3Cm6nLj9T1GdpmxH858JzUiZHczPiV85QXSzpFQW",
  "key8": "5D2nYhRcMFjxmBPqNrem2XZ5vm3G1nYicYC4NSDXyp4buRXR59QGDvABgTbL9TEVL9qGZBTdFngq6xnWzs7rgkA2",
  "key9": "2zdz6tNQdqK2AksBhcjaewRT9LNM7e51v2pDRMJi68e4Zi9JcS9fxHaAjZ7Mh4uv81YmenqRe98yyzPsJEP1CHTU",
  "key10": "1yKxMVRJgeCShMP9gseDdwQJvM2JgrEt8VRBcKyMZGhrTMFkBkiCj8UWD8isSeJCTSg8JY4j5gUB93RRwCbSydi",
  "key11": "4UPwAGs5ieHm7f2jdyFn9y2JH8GF87mMaEfTdwL64ojVTRj582JAPA4gjcfo7yooH9nv9TJXFB2cdHnshYW9Aihd",
  "key12": "2Fca3p6xVZrg6YC2NSKLeTUUDajZB7EWBTwTTpVUq1KuKDNiR1KsU8X3wDaDn3q54hcd7BqUWafDJwAho5uqUnGb",
  "key13": "3Gn8wHXriyqihqBVWHzxdrLABGhPuopSW4ETPDq8MHP7PskH4aNXUpA9KHZsMPUKrhW4nLReYHnCm9dLsCrfsJK2",
  "key14": "3GVPGVacPjqUTmcyrTATomE6iuut9SMQVbd14qpoxdBRHnAAGia5E7dMiEJfxXXHYQumejL5xzFpWhd4oEqKuata",
  "key15": "4QvK6P2LHaHgDLEv1pyPVBQ3dxqaTeVij2rnWnvqVpT43hYxu5W6sEdPc36tELZLfamJMhKqVHaJGqGuWmEkegQm",
  "key16": "47DZVnrwz1iGAix9hBXJ7d1HxTyyWvyaUeyUuVGbT193oFjGmp6GD6LiixqfeNCogejo3egeDSqZJGLGuoCRs8aW",
  "key17": "3o23Cr1Lu6xgXeH1gjW1bz4Am1ZCBELrJKJTQTk96tQ3U4SFAoP9Kxrw2FLwL6q3o5EwPghoAvZsmSsXd3bXvEYP",
  "key18": "3Xz4Bc71b9GxP2bEE11WsWRu56W6XQXSpMLFP58To99owztSajA2BXSa2Qj8BXP5f6QeQji1jv6sytd7eLpC3wFW",
  "key19": "2qt4a8JDmi5nFaYxkJtth2LRDJzmAJRTDzy2moVj6gu3qzaGZUt594TqFuhVWsBAUo76ov1K5kxqLPP5YYD36Q9q",
  "key20": "3jRJisdJvmgvc9zctwzq3RitzaUhtcpKfnLwktx2Rjs3erpRGRaXYkkqQRq6GS7hSPZ6wA93dWGwa3S2cF4F7kt",
  "key21": "3nmCBAWCneCphARssyg8hbnJQby29GF58AW4wVRGbJZkuNJxSyNRqTcvPm9vHouMLuJ6kjxgW7pdNftKa9qJjGaT",
  "key22": "CoLpUbFu72hi9DGUR9jT7P2yeiaDGyaFEYxHcMPep4HZhcUuQC7PFdudwsy5MxQM3fk9FVpd1obiJKDkjuV7vuC",
  "key23": "3BxsyrDJhcJjkdGv5y5rYDxqPj36SGDQDH4DbCwtkSeWcmo6SfbteHcGCPtY76FDH489gsq7KJPUkdsLepg12oTZ",
  "key24": "HwxWAhRwfiBuf4CJMJ542SbibRyby4tw4428ekprY8o85dec8C6hpof1AqKf7kBpiXcTxBwHSpN2vVxhSMwFWz7",
  "key25": "35QPXYHsT7WE6t6vD8yHA4CyDZz5KDsHaGsPVESMXjveKAkBjcViMnTLu6VMF9VB7QiMJx22SXXWxtHpnBdJTG2a",
  "key26": "2z2v7vcbEYZvThoMk3A3bWReEQfPVkAageNjRBwxwxCufXc6tuwZGzk11p2hLZHCnhaQbGaSHdaoyA3oHwZcH7TU",
  "key27": "4p7sDG6QaP75S9JEPBwqbwCP65JsTpzbqijcVMXrxLoyu2f34bycXLchsQERvjschqg6t772CUGM4B5Lxsyjeh8A",
  "key28": "FsTke9HVcWa7crdouwfJJPH5Xc5B7kXRqFn3cRqQx8PfjTtomrDEHjBWK2AYPwnA5YhXkY1jGQS4XkrZCmdxi6M",
  "key29": "3Z6JZ6XbeuSWXnaxo2BsTCbg5p65yUhondQSfEL4YgWq8rAYnRWEfnVudyBXV4gnC5s1SFBfz151EA2jWcCpWXZS",
  "key30": "4LA8tgpY9EJLCCjw4zpMJJYwp9Jwif4ih4jWkEQLPosunvtyTUGgMRi6kEJ8MmKWL3eGFZH9uwofM6DKmHuopgn5",
  "key31": "4WpyjDDzZhrsbr6VfHfGGgYfUDRhrDDCkP8E3FtDzPUcKJuJoPzqRs3mHvwWHii2dQUfhTVaggPW5KDE7evJhbLT",
  "key32": "2JAwUqFXVTxcoEZfhaMnaLoBTFDrfGyXH6qQSsU7aFfNhSZiAgqAGc9fUmS9kfGmgcjkRyk12vLWxJRprFKoAHEr",
  "key33": "5PCa3TMb2B9cppPD3ppE1rusKpvfaXF7Cr1zEuAhSTXYSNXTzAiDu5uEno8H1WPBeDyCaZJr5yhYAiF6vaYCWrfh",
  "key34": "cY9YNfafUPvLGHPHGL3UatMas1CEJrW8sisq2wU9xwghgLNMYbE2J7zPfFtsPtgJGQcJ272eMJLaT9qBUvjaoCx"
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
