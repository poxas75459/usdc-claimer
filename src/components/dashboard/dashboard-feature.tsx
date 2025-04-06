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
    "5hMQoTGE2RFswbN1tZB93YzctG24hZoziFufHh1LbUgYQQBbLH8BKMWATNcGY4r2FdjQwM4fErcfBSCPuVhjMLmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DyvmuPaj5QXae4c43VDa3E4P1fjG1S9meTNmHdgUoez5QZqiUkexqQY4KAq2oVhPfscnw2gTXfwvb3xYQxzpYdL",
  "key1": "c13ZHkrDV5PZT6go8FFgk5qVBMfgFZP2M4Zbqz6qXjVXvGGm5wFV4c6igFSvhUP2XCy2agoBHuJrueX1EMm6tQk",
  "key2": "4SLnRwFivsZyy8HpNvkQg4fmyBKC4N4woNKXyrQJVPXnqdJ5m9MiCA3xMB1xEo1xsN7LuVRwhG2cD91YNd1D7b91",
  "key3": "1ivG9m7SEyA7rL3sSRqFNWxYNi1rtzQsghcQuT1YX5FjEnWythKXLVGy8C8rv89MP66WNFDEFYg3xw9ot1inghh",
  "key4": "64z2L8Fp2PjfSSWXk8Dby3K5xwZxmBM4uZx7mFW1EDw3cJeTSyqFzcEq1e8NRKXav4rp83RHmgWV3Qu89ne13UtW",
  "key5": "LW38RtSZKpxHgMSsBR2BZwR3D1oeWa6xjYrndghdBdy6WaskMMjKXBwgEVJKguuMBoF7rmk15yqvzz6yu366f7w",
  "key6": "3uabKrS6MnRZoSZKyXJHYHeu2PejHB1GSAjD5CTqyhD1JFRgLjSgksQrW8uASA516px1iShNKxRYbVxGNX8MHhVQ",
  "key7": "4pyiL3RmJkvLgp7AXqccLa6n5D8MrayBnTMjaJg9DVwkQaC8rthVw1sd7kerfHYbCuANGFFPGyJsS6dsxvbFu5mh",
  "key8": "2wAd4Uh4LuSqG57rNWRRuoee4BBsSmeTvDj6aKfMYem4iSphqiDskYes1AmLQJ1eAUdXv96W1zVr74WirqKMQzyH",
  "key9": "54cbGH3pv2hZSWbiTr59jhcGWGaeEzC25TGyE8b8gdcziWv4d24uJ6Q8aQubBrpyoCFMPoQrQeBrtNR2LxRNqhNG",
  "key10": "3birhjjhhYavmyncQszZYoaLcwu88uypfKQPtGunmxYeXu4eZ7KzEcHDf2ZGNChC4rEZ8DVtQyQY4n1kLH5g8v2Y",
  "key11": "eo2M4xR7s5WznsP92Vs1AudoCtD472Y3vvQqrA3dx4fqSwyc9xgwucKQ2RJ4Gp6QCmTqeiXyYdazuiT14pbzzam",
  "key12": "3owr4wFCWU1Mx3reZacR4KnFL3JmfvFWuyYfmmGWs8aKucBda34K5gHbTyS13fTSofCooi1QsxYmyyZHjdLcAXyG",
  "key13": "3RUYmDNkEJJBsnMN9GjfFfGiTnmSqRGdBTr5SmK8qEKbpvd37wojEJZeEFrRHySusKZxhwAr4YYaRWiZ1738UgKE",
  "key14": "35hxRDsWMu5CfTXWmoPPZdKmJB2spXUyaUmgto4bUQcFcZeBdTDmLUc5RQoi1XcPQwvAv66EpFgm2U1Etg1BfpP7",
  "key15": "SuZfvFJGWoAJz8MHgmmSV3CyWB7Gbmx4G1cGfkhSByUQhLce66hQz2Xcr29r8k6zKnmLpmDWkaPdEAVfkwoEeCn",
  "key16": "3pxQ6HmLCqR2Zr17ViUKUqDLGZByDrRXAiKnbymx3reedoKHaRfPpKJmbFVQFoVpBZWDp6LHuEv1g5Lb3ZRzTA8c",
  "key17": "4K9TdrV7kAp3mSSTxCDCrrJWpWzcUFvAo7mXMYteCeUQSu6Qou7yadfV5HD7LoCSjKnXNEdUvfzYDbsRGUDZURJj",
  "key18": "weX3SxmGkzde2PQGqg7Uu28DsxdShQYeLhYnHduzpek1jY2sSE3spsiz1sYKrgX2qAAgUmZETaHy6V2ZQKMv9KK",
  "key19": "3jyASDGAjvzTxUFE2nzo7YnN8apD6Y3xNVsX2pcP3fnG8JtDsfLSd2xhK2RV4Tpsog795Hp1EdsMZ3sb9pP1V5WL",
  "key20": "4UrNm8uH1RNsU8e9yiGhJRiXKRdBHepnviFiVofoTR7P9P57ekU34LJYmpuGAstqHMgHrigogvfcEUVVx8YFPaYa",
  "key21": "2LRwVEXHz9Qrbmrn6kdaT2vVS58sLT7VZS1TvFYeJSRKEtACV46949tcx4ye7zrFDAHXfySmHSbMy444by1Wy3YP",
  "key22": "5RLanmxsx1ViKHNneSuUA6hzAtRNaVuHGierx7nXrG3kVrtT6fdGWnM2AHC6NAo1r3u5HHNszrJGnZDrCTi6RKXc",
  "key23": "3ESkYxQDLVvTrRPawgdqcBEFeEzcJJCkQEGGKtZUfSgbwidC9r6qzJgactq5DDQQkfjSEpGXKVqakQeRirLQdtp9",
  "key24": "2NSHhLHHVgXQByRvpMvYpyyfjnEKTXT2KaJXQuiWqSQZ8MgNYUaJcUfRGwL5w98dyp4xAns1c5suRu8VDpeVMpu9",
  "key25": "2FQQh6vdHPYV9jvptPjcQJPaJd6yrtRx5Yv2exELbsJVddHqH2Yqg53TRpwWuUANyxSiPnrum3a8sYp3amN6nN7G",
  "key26": "3B2n7Hs8PD3qwNUQrnpW2b37pGZxc5GaomCqsrjPvuZXVDEp4FxoBiVjECJ9cubvN25mq41GYL4gcrc3XqAR8mjT",
  "key27": "5NFDjN7RKE6GEtcA4YCxkhKKPyPZq1G2ZbAjYYQxwNYws4uNHzNrRYkpdbH9xkZALvkVDLWSsobGymepUS9d7X81",
  "key28": "2snJhaSqG9VTC7qMUk7quhm5GHo68DN2JRW5JN6CHVYpMTgkW74ceHJCC3HH7hYCWbTYKgEELVKTtME34AGun6Tw",
  "key29": "D4ZXAq18EwpSEE7MNw8nvrTxwHSqZtqR36M51zEsR8CqHomcLtuqBzwn61uFyiN4zdEoQT4C6W5KHEBYAqjWRUb",
  "key30": "2cUrcd53aPFicAjrvw3zcqHLiZLAZNZzcKtjVaBzDEME6sZWygBfJQBwmrJP4cr1rP34CVswLn5QnbrabXWJsDT8",
  "key31": "D5qwoo1DDcBmyKwSLdXTXKftXyig5c1Km6XEttEwdtDRjK1qK3ZasNLNjBxTNJYkZkYXY5uELz2mWycWb2zDS58",
  "key32": "2acgao7MkixTTFYuoSrRp7sHkEJAAdwzq7tN3Yy4kgFoLqcDwfhfWCY2wM7d5o95oywVNAfTfzHN2n6EstnrYFDq",
  "key33": "2CbMHYD8PmAAFdpZ9h8QDQz6F1MmH1XrRGCVQcfcR1tT7fgYgmWkWtjCS7A2Mt7Lm2TNuxH9hdge7Lw8B6MPMaqZ",
  "key34": "31xN9a93yaEuFcPKCV1M2rxhw6eV7JBkKfYXdhoQvE96Zqe1poq3KbR6QKnFfVUm8hET4rd2zWjnhEHzctnhkFC7",
  "key35": "5yeFB1cvVXb5xKHkud7D9H6ktJZ6ya9LA2W2hv29uyzfKD6rfBfSkvKENe375s4SebHdiqvuUKTdLyZ8DhEm4hye",
  "key36": "5eA3NJCoWfSFuMi3fkt1caskYoekwnLPnjbf8vNr5f9huAhJvN3cdor4tMxtqaykKFWiybTTgvpBBbTw2oh8cvcH"
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
