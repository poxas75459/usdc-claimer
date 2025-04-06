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
    "2yYgixGGQ1vAo3KCSzcJKnr27rxCHU8bWxCCGBycPzg9ZnLeQsQdpF5J6gggiesMZ5Gp9tX1p4XpMGW76SKp7ak8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tHLUoso7cCb6H4uHPU864WiNP6CPEjQyvKvvyx2Uw6TrZgJ347gWKq7eF9D6vxSB2p4wNGvXwTeBoHQ3JAYoyGh",
  "key1": "52rEVDSehC1SfQUatR5w9ejng6tcp7J6rKNtink5ziLkdzc1XiaNPbWMnLM9yN3jBesJA2YKDnFPp6AmGsgWYJXL",
  "key2": "3gAXC7R7DFti2UKs5YWcB4AXbsx7jVJ8a4qd25KxSb11xW7oLuDAbDHq7rSE7p98S3uuade6qRezNkm899CKLx7Q",
  "key3": "5CseiNCZS7FUABnLy73S25dEgknYKcVQGsxqRWbfy3AU7UHPWk9T3Vj5FjKp7WRkrDPNH3u3x4rH3kbV86j5c36P",
  "key4": "3hJ7KFqquNzRQg7MmPML1SfDFfeE7BRQv94isbkRnPKNNDiCa3z8DcT3azfPk2RWodp1h2RfU5DvpTcHXYx5gCx9",
  "key5": "4pTnY3RaypmN2VgHm5MMVbTnd6AC9bHfzwq6xo8kbMs1QS7Qh84cbWrdtzqZmJpLjhf5eqrNRuw4YtR4J2v4p4NR",
  "key6": "2fiGGMY5QoQ35d8VmaoKbjuUbgfBNP4Sw5RTkTBjNaZ8TCmCBBFuSJuufph9tcYDvBQAodBkwy88uHHZBUNWsXXw",
  "key7": "5YMXcSWmxiyFexUjyGr5ZbcRUF2d7Fc2D4AdAS3h89mMfGqFEUwg3dUEWDUmndGpDiWhXLXQnbs96i8T277fEddh",
  "key8": "3DBG2VL9UVmq2xqMJWd7UNAvQt6i4tBsC5ckDNKGzHuV9YtknBc43TMijKhieL4q3J9pWWbnrYrSsKNurXRFj4Ed",
  "key9": "61ccmaa3VJ8LEYzBrvBdnN2Cogdzg3UTAMHejB7TQPrtYR3JuYAiANdm9LXgVgoFNMf1AUEqvqao4DTG5xCvc61g",
  "key10": "2gdn8FY8nnmtKsgwLW2H1pKspWbhHLGDc6BXHC987ujT9kEJXLv7bdAXUyDzSj1Dg4DYf621pPd787VnTSaeATeE",
  "key11": "3GVehEDXnf5j2Fn4QedBTdRtfipdg2DciXBLZAQxksNJRjEysi8pcuCohVj5UbKA1YGTMCsMoNEU1d2va2Liw4zs",
  "key12": "4dqL7HNnEF9kyzBq1Wz5XMGDE2VtF43A4zdqNoM4e9wWHXF7fghS7JCD82DwWCefj91H9hFhdhKdSscuuiXoYdvf",
  "key13": "4egFE49uAdr735ZWCLUKPqVXzpmKNKNyvFBhMybr85V5CwWANqrbBoga2mboXjgHgGJK9yhafb5u3ojg8cNWbkMw",
  "key14": "5aU1CQna9an9snKBCPtZok1Nc8VRUAK63UnQ3NCnSKikhkpZZCTuxubsSBzkk2TvEXfqx6kg9KRvNVEovEbC4izi",
  "key15": "5Rsha547x3WXPdZ5ZSKyyJyWXb82F7FEci1QDm7c3obW6ekdd8q3L2ofm9MSZCKBEku4aQUKuxQbDdqzbavQXACG",
  "key16": "41hUm4czDPfbHZETDb7FGdkVNQuepAMP6M87HpYMtjz5rCaPP2y8TGJNKY1rgwcJgqa1XTTzndYxubJs296Y2m5m",
  "key17": "2j8C5zTT3QgDVRUb8jnGc1Zq2pMk2fKZ3Us3SkR6acBbJ49tpECfSyntumNuwLfheBMNwwkNyuN2Dq6AEZeNB6Qi",
  "key18": "pTxSuCcZ2aGCQT58QqXunhupX4BH1kKf3JgqR71SZRtNzeyKpcHZM22PpLTxvWiY4dMLu66XUGqSYxuxYMXjhko",
  "key19": "4pcNmvQi5Qx5Gk3vj6zMSqp3zqGbcpTsojUgSLTz3aVVsaFDB6WXrpPibpc1h3pADxos1vxUyYUVEhjsiZFeoPau",
  "key20": "62ws3nk525xwcsGEFA1Nd4incxEkSg7VCTbxftfHrECqq9DFovye7y4LJED8PLrfSr99MHEsJ58jFPLAqPQXWv8E",
  "key21": "4bTQwHuTgj3DUJhKKKeXDjZnB24Wap4RRDn6iMyoyCsHrZfJwmE2ssF1Xy9XWU8dx6CH57ga5hyRppVPFG6WuZsR",
  "key22": "5HYpwoHA5vGk6piULtrhLMwUFESeB4A18e47jwXivhXt8mEbUw1sSDyPhaohyHpXPfE4WUWbtyqShmcCSGkcV59w",
  "key23": "2einLR9yaVNoD1ASGpDkt35yPeUtmdSjM7hAZwEYaaQxHB6m36PrXUGBngmY5Zt1RWbQNVY46oeHX9bgketMhWxJ",
  "key24": "2kQCdfNMPzn6eqhb6RtuJPkvf3HBBixT9PtkXeUuGJZ5FbKBtMM3tgqYKarY3ZBdrD6HEFJgpNKy4YJuLoN7mHSD",
  "key25": "5aUCPcjW2KgSGnQHwpNG6rdQP2ZKvz45USg4JKB9tWhhhY46yHWMFbEde9FzEUSuMWrGwU2uEHCa5mcS8qZ7CNJm",
  "key26": "53m6icXFQ1jxrJxtgLMxhTvVEFRjmdk5p5n5Uv4uA6CwLMbCm619K174CcTNGk9Dd8U3pusoG3kvcv7iSYuJQXf5",
  "key27": "kfyqgx658VaZiWn5Qge2DDFxh5rxTLdx97T3AKhzCc5shEmE5uMtNaur9EFHEGW4ZFuemZp9d9GpZg8AdUDVpkJ",
  "key28": "9NDVFAXQwgPRZHCZKFStzQDjCUEAr1p6SpPFVpNgTiJ2QgDqWQE2zCBX8mmDTzoAjp8MyETX92Kdq5nYUS7LxMH",
  "key29": "34Y77LQ3zXstx5u8RfzomJ7fipQCjgLBqxnAxwCsnh46ctZeKKchirdYwvYJjpsH2J5jebRTmDctv4ckRh1GZR3w",
  "key30": "2NJxuQS4hXWfTxRMX5PPDdzeNnQPbT3Mw3LxsjVALLHPhyzPE7mjqNRey9fWNwuukWocRwRimQ2NVEPRfu41hF2R",
  "key31": "5VzJ48dHsMPGmnTxCQvckkhQFKR83ak1WgTMBWZVcdruXWkJCStKGgNZbzDiq1GennzSKzqd2Y3pxxJvKU3Y9F8c",
  "key32": "5mNukbcVMYVSqZFVpVqAsNXLz3vLL8pnS758Lamu1UAYi57UufZfqudEjHt6DsoJjj7hirHHPPkLS3YERfEUPtpb",
  "key33": "32UqAmyKbDfaCiNkFMiUc39VSN5W51JXgHawYLzKqcCXSrF61wfzRMbYarRyqcXEKmS3o8xYCVLLS4Y4cBk6HTZ8",
  "key34": "2HBQdHn1mtV3vFRwyhuidMLe2Sr9WZQvLj8yNXkv7mfSHVmSgoex3LB8zGsqjpxgUniKwtPT3cXNfZMRjhfJRCbd",
  "key35": "4T4SFvpfTdFk3Ygmx7umJnXtV9GKQ9AxK3ga6kW3ZXrgDXu6sEyXLcbZhi1LvD4cnrzc6uy4BVURf5yuiG7M4qrU",
  "key36": "4LwC9igN8EELopypNVdyhibVPFiaaxmmXucSAWrw8XMkXfikwqJWsx7xwHe6pKaCwCo9GabZJHeSJ9vxc5Xwxk51",
  "key37": "3jxDSf6X9A7EsULs4Qdch9eyDa3TKXW5GFjo2J2tdYXC9cn2huRcVaf9w3uU2KY3gNqjMo4NaSijKXnxDXGDMcp3",
  "key38": "5WsRv1dSf42suz8QLK1yTDwwDA5ejMTTr22C3MTDdp5jwi6g7mSiVqisTmdFYPmV9kyjrfEt73rnZDiPNFHU56u2",
  "key39": "44XRGdKLdoqJ18NLjic9vVrakC4vkkuxMaCPrcEsVwxEcQ8ZGni9ZqNwZJbo8DtDUfa2MsFkaX351vBVgjh9Rho",
  "key40": "4XZ9U9hwQnnXFPcGZpocj3D2WEmxotzVMDpiKPLteD4M9mwmqrxocy1HmxWnsfq1CfxoQRyBJNLgTdZUfmAVsoWv",
  "key41": "4oQTmUGYVYjoUjawpuBu2mAiA9ZPrZtvLRoTMRwdKpWG9djHdN2NA9bGEtDRsMmxYj8e2vU5Wi2u1rttqscRZ4XY",
  "key42": "5YwGneYZBpTwNZfbTetKc8gA11qbTdawKCparHCcfyUvQCsQjFqnyJEjQEx5ymsdNnsdaPTpdL7nUiM1aKTkWsRH",
  "key43": "4QHVUTmcaopX9NdTgskq2YvYhwQmExR3SYESAgKDNYjufBZYEQczs9c7ktxfnTc1mGeZuK9UJH7HTr1FiboXcPAm",
  "key44": "g3oytewpVFGhV6jUe6ydBxZrenDoYByV19SSM7i1DRoW2eez19tLMWUF863G2KmQHwRckYAEje5tMX6vQj9W96n",
  "key45": "66nZxMPrNgjvcmDuDQEeWYWSNJ8ZY1bRumnywuBq3CwqwvShVJuRYDCQ6TAa4Uc16TuqdMUZSbNX3gf7keyDQk7W",
  "key46": "4rbFYhMDf9XXHb6sJKkuBGGXMehGqCft5r8W9p3J9E4eDwQfQ4T5MMdDCD3yUhZ4D5GTkFr4gu38BM2LZwz7MLHj",
  "key47": "4xyqqsLTEY6VvDV54YUmb4QmgUkjbhNGsZYrTvpGCTbd63gTwTe46q9PmVwrSimmnvW5QHtZUCZaJXrNsBCfbMQ3"
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
