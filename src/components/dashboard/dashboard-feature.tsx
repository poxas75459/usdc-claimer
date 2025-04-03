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
    "8zF5jSFHjwY3DuZ9eHjhCzjmGX8U2Cm9oJpAbAHfU3rW3Yhd93yLC2b6b8UMMEHaCMyV3o1sRHK6Lsmii3P81FZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y9tnNTZztCF22DtEipGMf8u9RqQ7Yczu56J1WeznSJnGhmtV7Qm2R4d26wZobJg7tnsT6kW8Zev2M1WRV5i9DL3",
  "key1": "5KW4LkMiTXL7iopz7vGVnQx8WJgy8LPiD1fpsAdHYyTngXREztn3KcnMS7Vjbb6GU8S3yT1cFXE2gbKxBMQFXi4i",
  "key2": "3yzXWqAR7U3gjG6mZm26LRmY8U6c3oSvcCZj34HEeoATiTch5dJcyo3pMHLDEcdHykAYkwjHTg2eLAncJBzJw937",
  "key3": "3eGvhnQ2A4khJ9xvHKQGtvdy47Bk6CR4xSb2Mrnm7YA1C7JGnikNbB3VLrHXea1mnFsUX6fvEAZX7dTMsMsbvcJt",
  "key4": "3rpkmiK2EuEBZWFhpnnkd4cHeoMyiEXNvRZMEc3Wvk4pP5SH8iiezSKfVCkLBgpCGfy2jJRHZSJQAkDYvbr9AzyR",
  "key5": "2rpcubbYNjUM8h6DNQv33Wqe21kTdzQKPHziT8Ei3mHSnZEuduGYPLtV72kiMdcGdQGs3yo3UV4PFPoJippf7Xjt",
  "key6": "5geGXrnEJZAr5zEYs3AHu2EkRW4C72uDre9sJKxDDWgu8ytCeaW4y4LtPPZ4t2h37v6pkZpYySwgr7SkcjCnYvhc",
  "key7": "5vuyFfSZet4ZRB7PQbRfWrcn8muWL1MMJ38vZtDvfnsV3r7wC6o8JUJ4BV5M3wXCskcXz2dTs3H2zwXoTG5ibFpX",
  "key8": "2F6KddLNjDKBwopnr3vbrytRQAwDHuikoHpCwRNv8mrAGpUvxvTWNQTtb3ksabBmSz9kDaJo61SHcNhzimfvtJJQ",
  "key9": "24AzUnRcLh6c35idp7BNRyjDCnwTJYwk9QuetSS84e6xotajTpfDN2Vjbv2KY7HRd4WG6ahBrQnBhCDHvyauEvFT",
  "key10": "jbZGeviAApp6f337mRuDje1CAcxaNsmGBx1smycCHR6v4JGMdq3Rjo4SmYdjLKkXSVhhchtk5apegwXAts5f3HC",
  "key11": "4YEQajd88jDwGDCHYGimyWV1m3X5DHfR7Ktx7wZQAg7bKHvKtkdUQ2LSoHrB5o6Yf9D1jUYhcf9LuoDpk81ESn5",
  "key12": "4FR7Az4aV6UbkELZeWdChByMWwByCWSo1Vco2oK91zvHDt4G9VVfpmkvcbx6f1jB5N9frMjckYZxs52HLWRENWSu",
  "key13": "5xtJSqaEXC9cgqXNQLhUNoizrSjLZTkCAW9Jeq6zenSQCpoMeRccZs7tj35LqYvTd4fMEDyZ31Tb3HsocerL2Bpf",
  "key14": "4Wq4RkRmSPemQSa6DBLxa47f9WnBvmjvWbtKyezrBVPuzScc8eZW5GK87xKCncTgK7Y68NVpw52RVtBe34ybTmur",
  "key15": "4XUm7YyXdq8eftyfgP78rmK9bhad33N99dAADbrmyqi8gB4LkkeaQknU7HdhqBdHeaXzfJoacLRkfuCsnBcFTCSt",
  "key16": "5rg3JbKspuCDSiMw4A8BCU2oaB1CUr7CoB7ao2bpA8DixQJ8omebNaPszVu2LajLM3xxuEr8DeWDejJVdxs3TWTC",
  "key17": "4wHhYLd9SsBxGQRVzm1a7b7pKa6EU37eurnnjCApiajrTGDPJVJCw55iujZ1eAR6kEsZGmXGKmyTu7Ae85N24fbW",
  "key18": "J1qADj1H2grMqvEyVPaU55ZpbAdHXu5nFjTG1CMD6PGfwUiTroLyPSuSG9m1usKPT7U2S8V3mjznhGGnXUMQ6Dr",
  "key19": "2JkrPVS7DawwWpUavTyXE7CNoLnw78nsX2B6CeKWfcHxtpo9aS1ZgxwxLEpNQ7U6jba1bNy8T8R6AsfjfDCRJ6Wp",
  "key20": "2ABafhxm5dSbp9dvijGcLrPM1ur9HNKhfvHTG3CcfVdt9RcM8RQ4M1fTEnDVqAffBBvdeai8U4HjbmLpAgwTkKcF",
  "key21": "2RPkY9Gb6uxH1bDxzEjsvjq6qbPKLhxLHZE6ApwXu44T52uw1P1CE7diHjAVXEznWfSeiGx1i1gAsDNrRTMCKYsK",
  "key22": "3uuMu5VjipYudVdrZ8eE4X9dwQdaGd3NFBrFF6Ro3XA2SKcKdA74YpXeacNis1p2PZecCr4N1Y1WBwmofPy1fJbo",
  "key23": "2esy3VAmeA5PuJyYivmouT9YsexkikUXuUQ25wEzV19UBAZA7vNZnvKQBmufA5BvY6vTAfFRf3HTQwdSUGKLBAmz",
  "key24": "3cw2CRHeb4mGSShqU1s1ZiS4vjTeH5LcSFnUpZbteAjJF4tyrzB1RvR9xAXG58y816NhJ8tHFfttcAUHmzNKN3Fy",
  "key25": "5mMBtoNCn3y45wfhtaupVrzRtKcM2xqzRnfuCUwpbuiJmwNVgMtS2TrTjkjT4ExLe6pobwuiqnBEvbFKKKZVPfYP",
  "key26": "4r8aV4MFyeV1AdAUvYmL3dtTutviELAjykHGydLbEj8YDwTaYMqvK1rmyUCsU5VGintKtUixS26n27uEAjiooSVL",
  "key27": "42EDXGdG7ATDwKSN3MmGGhK7m5EPoqLydmcznF6F3feQkgH3YNXVKvsrQwSSsj2suiKXEPK2KRkBingV3pWLxMt5",
  "key28": "3q85AubL7c8NZeAPsjsHJWS1SDR4vzyE1ENPnPbB2Q6FGhHhCf7F259bd8q9Z5isW11HjYJDgStuBKCRUTmu9RTE",
  "key29": "27F96KmuNnaPpY6zpDhCwBtvGg545FbuGZJAYYvCGuQNnut4EvFS1hXNnknoEiufZwBR7Zpz5sFT2dGzrJtE8W9C",
  "key30": "rKAJ7qvFjYwBfH2WcHQQVCvCFrfY8GVQF5wGFd7MfA38ZTqiETpPkdfv593Mv6SzJDT89EXzvpadJJoAH3h7WoW",
  "key31": "5iP9NdSgxrs8agg3SyXMYXWuZ6Sa2TWCcJnsktkyfGcpK1fqaBqSA8VhKKR7B72nwP67s3NsrAeXzaiPjd8xUBpd",
  "key32": "5chnsiUtpHffBSucCLXAb89cPUfPnySoFXXHBF1kmC9TAjxLtiN6p7uGV5NUnwzdWfRmw1RJLCymTfh1eJHynyCq"
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
