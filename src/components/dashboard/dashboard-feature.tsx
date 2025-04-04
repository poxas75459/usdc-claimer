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
    "3RjYXELVLaZ7zDVm5wNVoaVZGk8tU22QYCd45mJmPEedYyav9hAxMEQUbjYGoYXcZxDSWL7DnQZiYHAe6pYr5bMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nnmgndte9nBodZvNCGenGnNUD321DDwyPkt9BJXHrVXufx47ePndzSnZKwQ9sR8ZEx5eE6CZM51DYYxMMkgPLKW",
  "key1": "qCCpmgwiiLWHNiZZemgAXFqPBvYTtQNjQSSjmYy22nnXsPAxqmjJDmG5UhXkfqQvAqi6Nxuy2tZy5GX8eZHmYci",
  "key2": "3muWHSLUjU6NXJKgFSsUEP91Nipf58Kv5fdWMiSSAf74fmQKQH1DsCjjatcJ5RtkEfLK8Y85NYJgoMxiwtxTnBZK",
  "key3": "4K7FxUsSTQ9Fwse3BDNUSqrtRdMw9sRW1dAdjws94kLzKU8qDUDpfesVDQdsDv3GHnMNXYhwvapxDVJkvGAc1KaZ",
  "key4": "XFivTLP3FRXFWd919RhfLB75oM1pi26qAc7WyeovQ7s2JhZgtMeiBwQ4tBLVoByvkv5ppqfRdvAzjvorND4rGrU",
  "key5": "2vg1tiEiVgGXJ9LrPCsgaLDEPgYGjqzfHpPaGc19rDzibEYj1J9RsKDR7a48LyUYn7gNqXAA5wLkDT573qmEHVrN",
  "key6": "C3PKFbugWaiKVifSoYUjYsQrs4ZsLANjJ7GZQzXF9CnQtj5p5zZm582YUQtaXfmAN5eFemwwcGnfVes442oAkp7",
  "key7": "4deYA1QDiMFEdmgWF9WnRUNtLLgEoPFKdff8uqs2L9EFwvDrjvdQC337CyKgrJNhaqU5iNxVLikYTf15tFvB45EB",
  "key8": "pPLAt1GdvWWhMf5gQFf9kv7E6B1MtLVZHeW4c6AdobPYgUBZJeRzMU4XZwt3UgTkM41gESsryMW47FoM8YvmjHS",
  "key9": "539dfcBmcthkTYpmwxvqWPb2JvKQWTmboksX31BDEyoVA4aYmvQCjemkNbPoT5ZsHFNC8rddaRLcpSjhvfjTKP3a",
  "key10": "4TmRgzJkfYEkFH8SZt4nH4fgYE3D9JAxQGy5LWNv4SU8kVAp2B694GfMz54rMoGCwXTVUyfqRQQ77kNiGUmapxdg",
  "key11": "3LpdYKnwDpMNoCe6bSESfY1P3wiofTi6fBGK7aMPuztjesj4x27JStt4aMoT141mFhERi321AsrqDL82yND1cSrL",
  "key12": "3mFPUmAJxeZLMmoQ4RQC2NDJtWXT62GngZi6qqp6YV53cLk9AP5PX9gxniG7CiEha3mq37zN26CNY68zhEPCVnKk",
  "key13": "y2mSD6Ljt1YFHcZN517weNCz8ccZspBBv45RW4Bd7hH4QKt7TJCqfPrHdxVDPgcpfoZw5wxV8BHodrpwPKvXz1Z",
  "key14": "xaQoMJirnDtN1ZDZvT7awtHvw8Q5suABGaHmRCZLPpZkV4EMZWm1B8TNv3JfKPt5D8f1zoL2QLCoabpmDpeHPdK",
  "key15": "9CtX7DjvEK9B52zXgNN6jws4JJzeqXtNk7PKkj7tpfbpUW67N8x1aob1rvCqyZUTyootDTU39jKYBV2q91xkmrW",
  "key16": "TEEKGaohnnieuhBnckz4969RkVmEy4QH4K6wgw6bfBahF6EwBLu3bEJp1jG6Lm2emK3Z9tPuJdDqEKNt6aHw7EB",
  "key17": "49CywaXQes5xeVnVxMd3tUqNS9n5FupC23CLZPzP7YPKXP5ASDEjpsrQLC63yjyipAnak7BMNPBGQk4BCocZTWXs",
  "key18": "67MYCi6DxmnDLDqBFZb8GuMRetTBw48qZVBAN2kaktSjz45HYbYDbrf7bgy3Q5iF2ZqfTjradW7rsDYpdPTkHwqx",
  "key19": "c794LdQd9hN5rs3cJnbG7RjY1kxvxPQeLBTg1Qjs679RQr7nyPZdKF5h1Wk5rsdg4cqap6jfdreF79X75zTN1Ht",
  "key20": "8oExpN8NrBhh284XiU47P4j2XyS5pvyiZwyeRMCd4DFrpGMMRNrP3V9nJ7PGDrA75rHQS2poHQZiqkr7syrrVsj",
  "key21": "VVPn553srpzV1cnThjNuQGqKw2oHxM5PPctnSr2mRBF2wyi3uyHwhidpCBNvX3YHa2dCn8Scbkc1JpkmZVrgnLg",
  "key22": "5DCCUtRA11U48oeuKe3dDbY6QAfebs2UJ7KKi9MXLU8xnm8WCYHZQnD61byZ8ibfjz2zEztbvLN4u9p5NefBb4iv",
  "key23": "51ANbN48xjXrnTw2PzzXSiLnWePszrBwfwX5sEcAnU2Yznz7j3FyBUeHJRqSFz3fcHnkRPmWuFLR5H1AuSPm9kmy",
  "key24": "5hbBJj1QRyNergo6CKGGD8Sx4fCCgH5AGVoyvpF4XS6TvRxueKVvXE8VdW8YZx5JdCqY6TwL37bkgv76LUAGdp6i",
  "key25": "5U5F5aX2HQeC62m29eShha9v9ongV4qa92BK5FSp6bPboZZZZZaJdY43bMTYTGTmrq4DFVowGhg3xGt12AvppVAP",
  "key26": "4zHjhd4RV4AkXzZtL2EZxVm2MEaFdUccAxEZpEk5ZyfTv9FrBfZ7MKofUSQafWPJChFPZXZxuzTSsWBZyDeDTT9f",
  "key27": "3xZCPY9a8nH5j5gmRB3J43d5CRNbacM3egFYyQCX9zU42Gy3AB692YhauDYxJYxuvJ3j7zQyi27uV5rdJ8Y8BXsr",
  "key28": "fQW6it7bKb11jNxEs1SxEvrdKP2EcwShPTpHWNSjhBBTaJw9vii1pu8mS1ksMKMgN7aovvsPaGL5i991TrZoMut",
  "key29": "4YqvoNMmTr4AgF4R6kjqNoGSPQrg4woz1XYx4hc7GxZszPEAHdgFSfqnJ2wUaFtiSnRfJhVrYZSeuJfnnFdhj8Ux",
  "key30": "2KeBVBx748xxLfofw3yQ1WCzAXf6w8uhtrMYRFBmjaBLLGQkVdfoKevzpzz3tgQRsi7vQcoxbwEZa171fqEUXWz8",
  "key31": "2UTWtWtp5N9RdhgtrQHUhPGSLaYfEM2wtAGF9mAjLMeR1pLZcSecYCeu9crCiy5gznTCLBDESHrH4sKKMfDKgWF6",
  "key32": "59GwuWA6ZnyA7UbG2FDQPJhVd6nWpr5MLZ76FURUcaSWsfHnuWPKpoWCbLUipJPwtozzPzUJPUqGXT2DrcwygmUh",
  "key33": "4juXqkkhPJrJwBXy9zy4nQ92gkts7uoSUz7yZ93sXCyw1kYvUrTvSQ6AeqMGXEYqoqan57nbScrTNcCLY2zDvLzS",
  "key34": "Qkq92hbuPB75NanbpbX8b88KUecbcSyJc4L7QHeH9FQ4hVK1mUBcyoV8Qe84skJE3uLtF6wT7NKDFDbKrkPFKNX",
  "key35": "3gG5AY8CE9Uqt8k93LbnshDtmEnpYPEggJzxnxUAoNTXsp6ek8mRok6ytjZCHiNTs7FZSLzu5HUZUv1YfK2h3fj4",
  "key36": "4zwU7iVqM6LWs3aE36HQDb5zw48JuHy4VE7c4x4qtcURNmV7yGD4ycM1sAQuiUmXv1T1UTZE6z96RXzvyesMFCEf",
  "key37": "CKN1LyFKqEsz5PM8uXLKN9VyZrdrgBf3N9VuxtHHniWLkK4EAKtgTytp9h54ZjKM4cdMSRyWphXE6Y9nBXAR9T7",
  "key38": "5Rw64zjSJHHcnmpeJNyzudwycrmfePXkjkuxiXqbsVwssAtoSPKKJWgDUivqEtSCTaDji4KLcuSddaxNw38NFUbd",
  "key39": "29cnDegjPVZUc58qvqVTeRwJxVetWE23ZvKxyvtsmwwCx1SMWRhW8MDTnWy3MSJ4QWbMgiuuUkUyYmphjrP2FvMH",
  "key40": "3HUWrx4Xndp4PZPogT5WmeaTJRy2Dt28Ve24c5CS9CMCKMkzgRabeK6fKz2ynhCGZEcnQWnDiFbf7eyNGQNtMqX2",
  "key41": "3tcjnozhfiXYYTP3Y1hmcdm6HvJdpsVXUW91GeRcjDQ5m1ta9hjimDRMztYAArYJDQddNKUrWU8r9bS49sP6LtxT",
  "key42": "3Dvup1K2xTnceSz8A2hJtcYKmf7vYDP6gV9AnLYLCYzx82mezv8EsqmC1C9JUCwEg7yNqpR7NQT6YhSR1ugMrA7c",
  "key43": "aQyPmi7QQZNZu1fVRnYYZXq7wgeKgP9jt42ckb5evfmo9EVcMDAQJ67CbMwytHMfNeCkyzBURRFHb4CimPPEZu8",
  "key44": "26pnNXMiRsfKoaL1UpUZ23HkZiJyPCpAh2vz3QFxZt289dCLaHsMnEh1pwuQRhvhMymda8MuHZ4ZNvkxyn9DPNfy"
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
