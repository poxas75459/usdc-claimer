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
    "3sqHbHVnE4WeWgtFNw6UX81xkJXY7o5BDg1rAcZtAcefSFXoqwPfWactHgD6Cu5fc1MSzBwG21FNtyhe3h2vQb3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g6moeCaTdwP7hgURZfh37RiKWBqjPtx4GpQNx5s3dx5mAnbhtAFBsbKCwQ8ELjrisw5Wifriqy5V7dm1Wvoh68V",
  "key1": "4qLL3pCfGJPk66SyB8yU82ssP5EyyHF49AsbSN2bLfzmVVfDfTFCkoHukpxyjwxq52PKpxiPsB3QWB9e4t6mNWAx",
  "key2": "3TXVXozHTyZ31AWFbsBUWypDzdvEgrkXWPsfbfZVZ8a37c2tUCe712EuXMwi52DM4ECMnmhqFCQ6xNXjGKDsbkzq",
  "key3": "3UpGpZgJ88hcqgbNyre2r6HDL6NZCQCPsrjTACGYrs3Krh2hia2xhuH5yy2b2j2A9FG5srY6NWJioA2LHmZqQGbw",
  "key4": "5aY53yXvfrvZg6oF3tq1VXp9C7VWSmuHp5NV4SyJdggZEczMQyGLc6n8kYRGuct7RrEQvQUxxAtVXFJa281zAiAM",
  "key5": "5YY13J3Zhb4ei1CLPxJ4ABGEvP66RYyaG8AMnXNcjj5dcUv68XK6QmMpWuvEEFZRCoGMqsN9CJJuim52c3Q3ntU8",
  "key6": "2iNj79gWiMrzJw4LG8Jsdh1BRhGries1rnvroDRpasxotPhs19Y6Z6v6XMPxSEv7Gn1ZjztTwsDw4qzRW3xzgdsd",
  "key7": "465qRcsNKYvzWn1SgSMa3s8U1PDMcmbpg3u4cqQCTzoUDTcm4TBi1YXVHdywwg49SzHyjpiAFijr3hWmBYPYs7mx",
  "key8": "2fzMTQSogiEREMiKy8w4RupADCM7pZiaAf3xSsL8eaerWFUZB33LFD178AaWRT1dQroewqwKGyBtmFufQC138Gt9",
  "key9": "5ggJzS9EuEJjUXK8TXBaq5Um6XCuVVdLYPJzFuJgn5ksyP7sp6dPDuUDg3FWUAEwmDsg5jbn4dPGyTcZSYtxxX8P",
  "key10": "3XFLP4ZDEZ5tA1PKRRphDuEQpijMwMJHYy4H9ywg2azjnEgrEWSQW8yooouu6D2q96sLDRhSJKZp2avpRht6Lr4v",
  "key11": "xjgJExmp9tB1JgGeFteSZ8yQ1sb3JmDAzdvCNnw3dMGoFMr5s1ubCPDuy7LZJzoeeVBp5HS17GnqFL4gcP2HHze",
  "key12": "2jwsa57zMroD4zCda5g8JEngxvid2xViHQXh5ALdSSXpwWbDmirhbEEd6GGrJRQwe7rAQiXgNhbcrKXxsrP4dT9m",
  "key13": "3R3yLDU5BsCHyGo1DKCtaAsAtDLfrjQ4k8TMfsedui6gC5jukdUbvntqFRPeNjMmhfpGK2foCDwDoxs8d6jCmpr5",
  "key14": "4rk6Gzftj8YUxa4BXt9DPor5obdNkY8s74jNgAyrGfGpQf5iNspgSw9CfbzbAzuNbJCWfSLRLuwt4Xz6qrFFUy8s",
  "key15": "4TwLthjwH1mxWfeAZixJtMbRaJ3rcPcHsxuQPmvTiDke54vEp3sNePwfzEYDTdb6n6Wvsjsk5wpGojQYu4DEUUVj",
  "key16": "AguqhzGu2Ztv34vFvC6c6CxZQecQELTpJJX5eYLZW2FHdVX2918BQtezbsoD9BeKMvkhW6Hyx6oy5Tp8gAJrg69",
  "key17": "36NYuY2Hyjqei6aTkCTT2FYjwUTR1nkbrp6ZyRBUqGiVMtHZsm2uj9sNRjWkMwstPUxV2hu7dit4CZTDFLugNuJz",
  "key18": "22eiDH6vVSzxUNk3FpV2y3PqMS6GPDYjUn2QWxwzc1FjaWur6cVqxVTSm5BzoCbjhL3xzbV8ghF7555W4VZtvcJK",
  "key19": "4ftSy7v3YhdaCUDQi1Zkph7rA8UYapNBpiJ1p4dbLdKiAdahRP7Z7b2d1x3ss2PDeWaYtRduFgDgQ2xcK7dukYKJ",
  "key20": "3e4SrRTMfSWYhxkKVV5Thvpub4QuSLpgpL1dM9tsoqH2dGLmigELoiYYb4eS6jsWW8EVhC1hfuncfRbUx8f59vuG",
  "key21": "3ahdn9d2DWNvLm1EwLnNBWRTtLDUtNbCQocnfBD1Z7uRS9sHH8byGG5nTVAEPw61up1Z8N9JpjXafUm8TtqrL8sR",
  "key22": "Cprp5sFa3bLkeLJDrvQyhyAyESbC8ARjE2zSUEkSVjoQ8y2qXUbfRNN4cYbXPn8179Kbw26vVzZHtY9SS4HExEP",
  "key23": "2HFrfr9CQ5vmTkYadg5hun4ZL6uL2W9B74dcbnWkM6xUgBav33nX3HnwgCoPeDWoP1JhvHjhrGzqFneUjB1wXaRY",
  "key24": "3p4MnFwXMZv9jscXkTBssQiYg8RAhin7bev56kudQz5UVqNimcKJDcNC7v7hnDc4p84uX7twxAsyszRNGPWhDWiq",
  "key25": "22P6QCPjXwgLU5QPdHdXbQBPhq6EssCYLroE86c79PFqS6cSZrSZP8sb3hwY4REzisQGioB7PZwFDpqMum5FXAtF",
  "key26": "4Q66XNis2Ld64Gnd1jKmu3MnqJ2yEQVn3QmN2XVdaKRFyh1R1x8t4YX4QFvGCtxxrLQwcFLk1YhWXqGSquwctxKF",
  "key27": "5kaM4Fd185S269xLeFDA77uEPTgv2FqKpMHziGevXcWEYJg9MFQKmZc7tDabDFyYRRc5z8SBf9NW93SZmGmyBsP2",
  "key28": "4H8B4HcTvAmqHJ1AePHX5HU9LzaqvYh4wNyryp52djUUFh6R2gm1NhaEzG8WvinmEq5hoLHbUyUpimMbFfakDKmK",
  "key29": "SmqHcUosYeREN4TWh2HMdrZd1z8DReSqPSdonS2zmKbSyXaRQtbwVDmi3gpkxgeQ4WZjudqk9s3YQ5u2wr7oy1o",
  "key30": "37HvVcAHjiRSfjBAzPwXowFkwx3kiEos8dmByAWZWPWfotzTnctLFbwvrFo4Hxcdd9AbEaHyFeaAQLCeoaKiSPVB",
  "key31": "PqFiz3QcjPcMSTsv1PUfqovrYzeXBZYNQbBynAL7Xex3pDHiXvyfqdGRJVUYnnEtmuvWSVLkQdNrKoFoXQ6yj6Z",
  "key32": "57CApVjBsHoeWumbiCFN4sWa3pFuZHgadTUG44WbpmcfBSfVsWTBSd9j9E5AbYJzrKCoQdMQdYPN9bJL4PBQ6VhW",
  "key33": "2z4LpbEA2jW4Fe3WZ1CtPuQdckEYu6saEhMQtQtsH7rvzvkxqhrtPhu3a81D9cRN3EutyBSfHqjFea3kUu5d97az",
  "key34": "4Losoy2puzpCmu2Nw34wmzGPwGcMWsLCefzcoUbA6DmFnoZrv5kpXbXPLuUupXGgnZ5eA4UrCarDJJ2RiqJuK8qo",
  "key35": "afYCXyQcXqzwasJDp5xEFfuZ9BDNg3worPQK2qarNSiUiH3FEMwdPpG1nwCo8sDvNTUmjm7YvLC9HTk7ZtuhV8r",
  "key36": "2Q7yAekzm6p3umtMduMcf9FWsmZQKP4q1JR6smbhH1XV1nKhgB7pxQqRZeHeSFQ4nenSVWAMhBke6ERUhVPA3W2K",
  "key37": "5Ay9KWkk2GEY1n7sE82PeyyFg9jgGCzCNfHnnfYStZ29sE2K7AfnxTd8gWjFYjbs9xVFJ1WuX4ryPgeHgxNpZkUs",
  "key38": "5hQY2uyeEiuAEoBJvhByeGZtqoV7L7i4BFg3Rvc4cz5ttcD5UERvVYEmXEJxpQWUVwi5rhBsF7kLUZFmSMxL6YaB",
  "key39": "4PuaSDb8mXwc2cCT2mXr3hfrAq4FvzpxwTEiZ59sshmjmtaDDkAyeAgHGUoghL3Pm8iskNwqaALNgH6osxaQ6iPB",
  "key40": "inp78gLsStMx4MLHZmakEJVMo9EJHmtapPNRuMSknYAUTsShL2mLiwoEh9QDbyFZ4pzk6QoJXdu9VgyPMqHhUMV",
  "key41": "63Q253UEifoPjSy52D1pSyJ7bzZtwJS3VWFumUQdK5KxW3MyJ3U8bN8cTVv7JH3mixdViz6w9JqjdtHxgtWkuKna",
  "key42": "Kg4qrDfQJjT5DsEn7e9SZZodexRof9kNfcSo3psTetgNUQyFX7sMv4KsFwF251KkT4CH1Q8iUkHwHoR2QehBvi5",
  "key43": "5BUvA6tKrxGJ5yuVsCQ7D42gNMum97i8P222PReDMFTo49vFDCU6vMFMDxrij6nSEZxpktNr8ECmVqkdMKyuQhwN",
  "key44": "5ex88z21vRgKpZArBbWAHe1R13ZiC7DE87LELsUUSCrwG8ibd1osw8ENdQ545xz84Vwdn4JQBZjsEo9SJ3s2t7YW",
  "key45": "ZMCFEaTmL7zaV98d8AGjRxYLQxrRxySE8bZ63fSxsZo33gfP48uJPMRYP8um3n1XHDjGLhJ5QkwshaTVrw1bMLn",
  "key46": "2Y5c72xkYnoPxsEGMiz9gNxoEvb2ieXFPwhwK5ZRumaaXRPGi5NM625U92puXhgBDd2n3aZENmtT7wKS4tpV6woG",
  "key47": "4sJ7ecxGGbctqanktiHK22bXHQqMZbpxSj1mzAhQ4U58H5bBQ6mBWsa5EJ8k92L3pfHhCCsHYb8QUYgVyP8PwDCv",
  "key48": "5HC6sY1eDgJihSjyXPTL3TX6X7BjGELzCyKVZsAojsNmai4W1esoM88UZEnwPYvmFp7V55hg66G9VGvhPnz1bWQZ",
  "key49": "M8YQxvgsXA3F7cfWbD22xaburs5sWBRNipuvwyrLGvArEkzmqSdbdaqZozqLj7aop5XLrjrYLG7hLkvW9WxXcfy"
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
