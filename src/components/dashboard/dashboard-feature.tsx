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
    "3oJV2s5fSNzN1vaytHDfPaAaEiLzigGQ6feQv1vfTxLGCs1WBkaSQU32tZZJ8ojETtbewFBinwG13NgvjoJMFYMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Eh5GtNeV6ns2UxdGsaLqRkZA2vrsZ8FkdRvKTjPP6yy3q225GWdzwEPmvy1D45LDUVR1NqRssYsYTDmBgyAjk8f",
  "key1": "4VuLvn62B3aHegb3ZkUTYMeRkVpM8VmUvBPTUXYh9VWnc3FNF2FVtiKz9nyrJQ3Q82u1NFWAsR1LGP99ZNLGCmRa",
  "key2": "cLfPoJ9QBLpvXbiJUBecCCntxLZS6kNP119iYQfk8e9bvnUx9pGKg1HsYsy3NRnCKSGWGxoNQLcDU48HkHQMcvy",
  "key3": "3AqUCsHqwk12KEQHVvSQhYZEYxndfdvLihvKmNpqPAenb28Qg8FgCz8rYxhoPZxGqjDfExFsVFaZX4egC4RHFX1t",
  "key4": "3hDmVVEjF6ZjfBAreRRPFLvc1yAXqU2to1aoudaYiAGKjqaVZaKFWQiMUoHcSAFezSSvWt4dKj5NrHzvqH8Nb6Bz",
  "key5": "44yrrtfWWCWnNqpCfdMKhaWSsgwFEBqhskpTbos1RZTec4BnGTQThTwzai8XdPcZCebujz142AaYjgvE3RA8Zv2z",
  "key6": "3UbqP43VeSkrCodq36wbfJhtV7hvpPyHrA5tNhYJvQuoRt2tgG2LK9dNj4kXciy9fuje4xW2kYhjdTe3opXsCcFr",
  "key7": "2jx8Q6M3tSFfc65YWeMUQuYxVtrk7J2qrSdc5DwhsGhnr6dAEUtFnbieUMLNUfNLnvyWMpxhoemgafqJw8xbNm7n",
  "key8": "64cyrVq9W8hq1TpgMGgFvCheRmFZttvhJtvFepDTTfzHCpJbyEJBcTsdpbDwb6Xuiz3csj5ExWxA86SFztJksVmJ",
  "key9": "3RM2E8phGma7nW5wrV4M1WivbmWa3gQvdsUHiNqnhfTJyLbb6T1dJzduVd8kku6jvmax538nxQdFSrHw8xdh8WAL",
  "key10": "M4LefhPUsr1Fub1wBTY2RN8DXr9nZ6C3vCqRYhKQ4P5fPSWFWxEzzqvWrPgTBCcgMnLKg77BKnFhqf6AZWTZBRc",
  "key11": "5fjLPvnRQDbnvadFX6x2v8fiE3k1K5Za4df86bSUprNuegpmqJh9QfVba25ec6cX6jGm4ffF7sUj4KX2BFiCYpxM",
  "key12": "2YRChwJhx6vGHXY9tUbxErMphkAHcBCJFsituYHF7ahdCjZqynsHCHmCxyTinENixqXydqYQPLnPy55CcKft9mQR",
  "key13": "28yH1MUTNbqMbKair7q54BTqRYgtPWSdYYtSHVbf63h9Nwn7LoC6o5wZ6P5ero9TRgjPipZ89ne6hi9ELcvDST4F",
  "key14": "3D9qwiwzWP4zgq36V162PHhKrcWArNPoPXVZvAuZoNNpfD7MZCpto3PKQUzFUTbhci6kZR7V1ZsuvR4RD7Bq5DMC",
  "key15": "4zMa3D48DAV5LDn3UccuWZv5AQXAUrFM3Yk8J5muntKfnucpJdWCoVaZvWx3SBbimRcqZVU7iDXwdJNjsZXfXGX2",
  "key16": "3MRegkst8auYsWQdL5BFz4KMBEuU5DRHiXwvRq8druGSh6BFdyMK6WzxLEiH8Hso5ZEZidfg4hLMVprmox1XCtsw",
  "key17": "3q8yupQLBtuSC6L8ZJLeCBwwzBBrvp5axhjypgL4uxF5oLumhJRH9NPJkCHNuKpvcoxXMVZzy18fdWd6ujJnJ3KG",
  "key18": "3FtqkPa2iMoE2sJJmZTy9DZisdJFraMXzVaNcNfgadoW1YQkHokyDZsw5CdoWJVoY1iLoq4hAm3ZeHCjcg8d7Ctq",
  "key19": "4gMtzHxHsGK9vLAR8QjxrfUDRccGDFF9WxKbUdNGwfumEkyZNXqr1oXYyppMovEuAsADhC7LMTT8PTMQ5wBt7oPm",
  "key20": "4pkFGrzvEL7SaUVidyJwFjDy7j4B5JeaG4HhksT26GTtKV1hgBGzLcbYdCTcE4rbK99tukrxsf9StqMWXHwzTyNh",
  "key21": "59oYDNPF5Gw2enxJ8UUexwMiDhpMAPisY3ddHfRS7KSHkBeFvzQmynw1E9suWaymkm27Mqox9mNQnfwy4uRGYL3h",
  "key22": "5M4gx3aaj3JdTF2RtMWLDZcSZc3ivDE1YmzjmVd7MX8raAUrCN8qzJoFcXDBkVC8GJTKWtFjhVDhwmuvUp2m87oJ",
  "key23": "4u8B1v7KCdCNoTPv1Ch7VjdZqqbYsKxtNwYmkSXuxqVFYYyk2wLXVc1Vkki5kahe25V4nVUbkYTtFiEeip4BbF6Q",
  "key24": "4hE7NYztU4H5UJVz8LkoZBr9AmYVSu2QztaTP7sCHUorKqVySZAx6A57Ruwayjwpq5DDK9noZW18eFRQpmVaUVgU",
  "key25": "5VwzgWLjjFQBSymWE85iZC1QbSSvuFeLV2xyriphmkFtYVc5HGxzDV7LfCiLeSQzCzNNBmVymRkpMTLktxsoyw3n",
  "key26": "91wiWdtK4AxzZq2gxrEepeBoYS9zemsupebK2UipDEpH88hNoppKtEjimWppo5S2JnJpdUbHSajuCQT6joDk2zD",
  "key27": "4XuYGMFr6nMcXG9WVuGFqdxbeEiMb1rZxkEXrdYWW9KwHD8Z5mbwqDBLbJ4c69sN1RTUSGkh8PTsUiZctXQ55evn",
  "key28": "2GCBLR2TWsFgeZ17RX3vFcPKbxCZNtio27HdQYm7ttLn4Pib6XmkLQnRzudNgDqbf8p34eVhhtvBM2AsWCRkAp9h",
  "key29": "3akXfjzo9y9vEJiRma9YZ2c9xy4dgNxfNjwgq4r3TTHjJrAyjc5yCby3xt7VGAPdnwejPSdT6yGM9rbgPYw88qsZ",
  "key30": "2kK6gDVycEdRdUnEJhAZat5cjiregkeHXYwRHMDnEKDeybbnsh8iXAwVjai57st2sm13zTZyAWNFewNatzMYxrow",
  "key31": "2UMdN8ELfVCZ1rDNvd4Gi8MhDmt3hUizCWA826ftenV81Q77LwLKEGMqFzxobCUafg5xiFfDFNPG3iqTGmPJavKR",
  "key32": "4WYiCerRXCjYubkRSwrgFwHpGcYNvEXVVfaVknzBg741uXmWyRwGHr5iobP2L6f2hnopGBieE1uPFnJGoNrnQL2p",
  "key33": "5bYWHTYBicCtxemyZvLQcwzbFt9Wif2eHdWHTA3LKiuXEttJCTYeuNhfgqeGnBM6f132FqdTpqWvCfj2133WjgdZ",
  "key34": "2J7xN7vLFrL9t5HEML68s1bRfF7vuD9ZvGupBp2GY2YJR8X8aMvRJsfYXy6EjRXrWUib8pRA2fwaVJijbgwKNxxz",
  "key35": "3b9Yw7WQ7G7hWS3UjgkYNSkXVfgMEqpgE8kFN5D5K2heWXhU9CkVbcc3mmYRTGMepZCrvquzeTbkMq94EuqzmQe4",
  "key36": "2BZFany1eoNqaSbH1KX1eVPmVy2TJtgTTxNnXJtrphGqPW85yihu8p9ntR4Q7UhRq8vSFpsUxv19CX8QWS53KWjF"
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
