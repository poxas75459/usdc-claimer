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
    "hts4PXaV4jxXpughhkyzU3k66yqEUPMoFjQf3wERjTAmDkFqo1US5EjwmwurKQj3xGvE9TMTdtCzG6j9Mwwvfg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vRg6xLGtU3XFDJT5Ur6BWBbM3kGkJF46HsKZju5bTvTNgSgXGm9L6zWXRiAvvQYummJjytobYbgeTKA8qit75Up",
  "key1": "3i16o5Y5EFxeWpyNpsSiaavETMF2pUfbkTZXCEcFL6sYCmGJGC65rGkjZ5ujyHY7197FyvnMWyUqfKPeVtJc6bBH",
  "key2": "b12nfg65GpmcghL5csaJS7wEyLcseVdo5Rc7hszQn9ka3CmF8z231EyzkmmxsfTXTCDabxp1Dd5RBjp91jphVb1",
  "key3": "R7EEcRSRpJZpk7RYzSuEKi9YyuFM9twt1Kptz7XMPncwu3sfm4MJzPk8nB2AXR7JARmYBASNyXHYUCYRsDYGQUc",
  "key4": "5RWbp6ngmowvtkU5PyU5oCeiweet9As696jHfHe1jkJGpWkzBsnDGo4WwheBNsHwPVVmRcDcTonDMLmrjJZPacwD",
  "key5": "4KbQjQ9WAakijb8AgxV8MfaoxBhkMsCfnH1ZwV19nMQxuHY1tNmkKUvbxy4kLFqM6ZzvvPau1E1FbMr6EW1L538E",
  "key6": "2ew6w1DKxrMAuxjYK3VVEqdu5GvYTfujowxJLJ3FdUYMAob69eKw9kwE3hzdcJW4romiF15k1s5tyc2ehnzFsoUy",
  "key7": "3f5fDRV22qT7LC9W4ofiyMayRkastoNFQktPLh8VqXXWovSfGEkV4Puwi5DjqEx1mRsKbQs1RQwh3iLJjoEr6rSm",
  "key8": "4eNNjgm9XXWUKF5VPReyWRuyyj4Ztdu1ZXaH4HrJuC7PErgk8wbaZaEKxYGZmwnP9WNkWLtbRke3DywoZ9Em4J6F",
  "key9": "651qX7NaAiYUVMsZmVVwzj7y8dPnUhTU9LaWCtPPXjybXtVyBwnavwbBugrfbsMTrNmq3gF1PVz2e7Q5sshfdFu7",
  "key10": "4XPWXCiYYqC4NMci8GUUWv2bqagRb881Zu5wzGspduDyPiUwsWQTdLtgjjCgE4JgV5JgT94NzNFpbUcgjpZC4mb1",
  "key11": "4C56a8it2MUti6jV5J2iYqJWD4vJHzw5bZE5wQVfUrt9YFCh9FZvqurVGFf7icn1eTvf3dp8SYYauDh2bXvh19Hf",
  "key12": "2Y4SsLPRVYQtWHXzmcXFzoceLvFaktuqLmLxgy3qXrfZYGJNHj3VXhn6Ac9gfSLxXhYyDmuobZKHr7cFKFj7u4pJ",
  "key13": "5NmYXLNoStg6w5Jc8WfrVonTLZyLTMW4y3u86mNyyEVtBfNTXMwLMHfDKKw2wyRZbvUsxVbeDJdnsKqm6hCtqszG",
  "key14": "QKYWcMzEX7yvyDphCmbS565s331JzaEEtMDfSkyY1EKiD1CmgJmZzko1Dt26WwbF8gW2cGZZn9Smq85Q3WgpjGQ",
  "key15": "3zqL2smNpLVoCS1FiSiU25TVqGy9Byp6JwiF3YzD25eA8Z43zByXnbKXoPyRcjRq5f7mELnVs9Pwag9ygChsvQS3",
  "key16": "54gAxeYGvKTLh5PDrpWHwdW5QUrtfTm6iFHPywD2jyV1int2D8ebuJTppfxh1QGoMnLBEM4q2FZTCRGeABsK1nrm",
  "key17": "c8VdavHrVWpGG8dQmTc71NjNi1zok1XZSNpAVNtnCFWf6EN9dr6wqXVTrHePgG81XFdrTHvbxvnivY1KaP8fm4i",
  "key18": "26gUqsiyZ9Mb2wKmdaE5T5XBkUwhfbUzJvEFqWYXHLSwxM5vuKYDphckTwRHjmHfWMQuSUFEW3TSDHnorXxFfbz2",
  "key19": "J3VEmg4eMPkj2mkkU3LJK4TtmCsYkPoocJj1M5Rvrgrsq9ajgHRmnXyStnBBhuaJAXuGvitfQTKRH3qSftpHPBD",
  "key20": "5oYkykodS4vh5UoFB98JRDsVJpKABsbXsUQ6Ab31eErfLuyeR8V3SdJPf2UZHmxHVZ2gkuMgPPHjaDZR5Swtcr1H",
  "key21": "3CRj2sQchizj1DyKH6oGkUiDymBEN6ko3UyySETMCu5mR9XnaMJXe1gzbh35vVzW6QhfTB8AZ2vWKjUGDdvBviPu",
  "key22": "5MqLeEgnkroeAE2iXLgqoAe8yBcB1rXSYtXmKvN2DXZdxqhDdLYAAkztdiapBgYzx84hPqh88KL33Av61mdEAmkC",
  "key23": "2NmPMgX8ZBgFWJyhp9Nv8vt4L3gKPx7Q3yDAiSMsiWU8BjE3rAYLcN48fV6hBrRn3JnKfVGU41CYHKDyr5vNmBrw",
  "key24": "4XbziWRTnPUs2hFwti5zuMPpPAxpX5dd2BxPYpDWXmcWeoDHPr5DaQuGcKmY7T7NuN3zyA9GyjcFrZscnEVhL8yP",
  "key25": "5siyJoSkz84azjFqEQ7E8QrjfC6V3euEv1SsKRAmFy5riQqmGDX8Nrm6xbPEjmpUw5V6WEMEXm3KtS1y1xneXMrC",
  "key26": "3JDBj31xqRYMeXReEp7LggdeZHWBNP7LeB7q4q43ARDUo5NS9vVf6fhr9qrFxzDn4Bdfu8C3aE7Yke7ryHrzNxey",
  "key27": "34ZiwoM27HjFaJa4ytmHUzYXgDXkr9xeVM1zSvfUXEg5uPc3E6uJgvxECV1exUESHtjJjWnHUuYgUs4oCWULkGXw",
  "key28": "4hLoYwv4kJscd7c6qf6a97FcQbaFREiTQZbBZNJ2U398BB7wgdykDqRsSpZTmrbrKuvAyEmCrWxUbgwdf3eB6oMk",
  "key29": "468HYpH8owLXtvwVWRTffvV5GPmGtstiGy7Fdo7cs9xYCUCjutbtJwqyyxRr8i1Mzkg6v42AezseNSo26zKnDv8",
  "key30": "4b3G6hn5Bqm8yxfEfcpCwBB5WBwpmmArtyehZ2eomSk8qZubXuGpGPgykhiTGiNFbhxXFmgg9hg1gnSbNp5mYWja",
  "key31": "3AzcYHeV49gNsKCLBn1r1hv92ze3VgYtmSoFaTd8ZYrv4yohYrCDzzjX9pfDAGNWqy63JuA935p8a7NdqELxFJw6",
  "key32": "3ojLiJndV2RMkxu4uL1hmQB4PMoX4P2xSiqda3PzAd7H5UZW3JbNVBW2oYeFsp1RnUDpmU5DQG6EA5nG6jCcA2Xw",
  "key33": "2TCFPWDThA8LNFvkXxJ5aVMMSiKF5unXn6T7G9JhHtbzZ4TkekRCNAsNT9yF4roU4cbKgbNdYufCP2VXQ7e4Rac8",
  "key34": "bbHomr8RESmv9YVr8Hi3hpb6WQUWnXtMv1oHFfopv5vLDeh5f2XvjtPhQs3HFLpTE45sGaTEU6qZBqRf9ULYFbu",
  "key35": "2wP9CKKg3Xce7r9zTBdQ9DhJXZ9W1TbKryLdTtH54V3jYFrNY3SaioFLUBYRXQUr1pngxekLB57MQ87iPAjDX1LH",
  "key36": "46Sjz6hh2kSeXVWZmdok9zvirEhsVWh4WZaT1xK1TK7TjNw3bPdquydssbME4xPVNRNwy8G4aCVGuexa4mLhZnJT",
  "key37": "3gWqrE5p1dSmRNYaBLLkS7soH9WvsmQHjBBMr84QuAfnSKd9sxMYLqrbtmvQcmwmTdXEzy7veJwb3ntrwgpcLgJv",
  "key38": "66aHFZHGa7fy1kiZZPJ59hfbaboRFo4dVskpU3QF6uciZfjkCJCa4SmwoHcqtJyxc1R6dCg1br4WKSzvBGRBi5Vq",
  "key39": "3jWg1uyygJLhpNfjutKEJdwkrERKKHwN271JtUFoY4HG4AWFsaT4dZ2bLUqHPYXCh3aWV27tnbUHbsvockHz6Px5",
  "key40": "4kNwncUjjLVXrpwSpQic92EseW4DLkfQrt52epnb3V7vYP6vu9xhpMGgpBbgzuam3jFufKmkRftDxyH4HTTsgQa5",
  "key41": "oHeDAUAHoAbrTfBVNJpw9wQX7jbBx6vgc5oof8NCeDAKFT5SJiHfUpDL1XmRp3e4jVKoX4aKGT468tCQq6TkZw7",
  "key42": "2dfzNuAbW8rBpg3422GEzXMnNrVJhTbBkDa9AwVzhFMpkfbAKwhm8QFQVUbwL4J39m5Ga6mkHPX5PvHS2BdZ6HS3"
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
