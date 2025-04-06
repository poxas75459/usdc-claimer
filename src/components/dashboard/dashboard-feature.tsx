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
    "4cnbCTeg6C99kGwVXZJsctuLcWffcYoUD6hyEVtgj8cAQNg3ecjRkbheeBLQrpr2Q3f1NWzoDHRYDASpwdsG2B2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x4StKTs6c2uHW6r3vgr8te66KDSNpyRT8zWXzA1j25wo5Xasyy9gKBdZmUBoRJ2ukPv9k8kqgXcMjkNe3sspfcM",
  "key1": "4NwT1FVajvQXeEysn4Y5Z1HR4mA6wEvPTT3eEt2s5iG5brytdg1XrGdLtU68TbcWgKSqU8taPsvfXWziUH9Gg1nq",
  "key2": "5ZJBoc2pynB9ARFjNRZsJkTYXY3rvcr4V6jmtAt7bCSXirZ7iNtZ87zimj9rz9sqKxJ8QoCwb9pqbaUE6DqcKQth",
  "key3": "2HrFkTL4UjbsPhLxC8m3wiMmeNuaxJobFZJhWyMMzEgCbZQXJML39rzehgRfC9bc5dNm6wNsDJaktVWcM4147C6o",
  "key4": "2X9FuHJJVU1KcN38uW39SWZ5u3NsLJ3aqCgUR7eqPXtPjNeCHhKRYG5WdH7i3CCZbzLGmuQNY2mYB9uvCHzZmv8a",
  "key5": "3ri15H4wzJx8RtNoEfFk9aoVDxvfdDYrBFRyV7Gi7KSgLfqu69EwSPcdgzwia7BX6hj9WVdSX8QUFvrrqaz25wSQ",
  "key6": "3FPbQqNkGdbqETGy8ur3KqiuboXvWqa2Kxh55hhcpwm9aVXFbPcSDgFAfXCUPVXyjpa6uTB85w8xuGSA7oMLnnyv",
  "key7": "yuypC7aiLx4qpJ1B9SA5uUVWavbD4yNpF4MqcN5bmVizqDbtZVosSUGtjymHme6ua5TwieutPSFTvRjiPhhsmdF",
  "key8": "2yc9FVqxy4wMuJgNB3PfCwuBFoV2tnR1tqSBDPqYjPCVfM4gQbj31Ei1dWNda8Fx3zZR5NoePn1VBm2Cv5UYbaT8",
  "key9": "26gAs93fMph7PYc6GxwoRpnYLd3bcHYUHShZYx2VPuycZGhYb982bSCKLhqjRAqFqFdVi8qKNzjsSVDHVJtYt5Mw",
  "key10": "4zvavGa6RUZbs81yzQf524XAuQrfKLf8JMnqNek86xujVxxpe34sMpsAzRAtv81ULey7v6Euh2JjoRiM6JbcoYNw",
  "key11": "35zx3VsMHxLyULcG1zNXmoRhAtT3pu7EAJYp3Lb6UeoV8camCEq2p69YPgkz3ooP19Y5VeC7VnRRJPtV59Ms57ky",
  "key12": "8TnNQmtJwxL4UXkM1zZapFtr4EtvcD3GUiSoECDcZprzdT3d9RFy4AoLHkRjrG2zeRdZc8EW1tVDYts71MLko9L",
  "key13": "3S7HsfVK9D31M25QDNctmojR7vj5vkfW3BrxKaLHX5pogoak6BhLQMmg7DEjN8iBNqdJE8TtDocaN2yhugAJJeua",
  "key14": "4h2KDG6MF5xqyWDhP7QZ65HiWMLgqHX43NND4aznBhK5voXBqsbkN3FLAmgB8GXNDpuNzY9zpAffYDgbCgRUtsJ2",
  "key15": "36ECCn1y5dggiCviLLbMsoRKZRcnNiTz37YKGUzp4LehMUVjcrVchHuEJXujpmvpuNz1We9rGfaPV7zYGTeympAg",
  "key16": "2XDhiaActSWpVC5Dos9gxFfX2wgrAViCogVyGSZ7fgRP7s1Ys4PYbN8JJ11YYgVRiFHPPz7YSL78ZdC46ndhmSXg",
  "key17": "4qXhmuxH1SXzdo2aA9UxiNVfpdNuVWGEce6Bq83rUYAqzMK9RZRyywBREibDdCmxrKxCi1fYrSc6Hrkr85R5Nq3L",
  "key18": "2QqKcYcbJCm6PVdh5iGTPm8s5m14Cgnn9j94Q41noWS3towxL6Ym2BjPo5kd7mTifUARb88P2fBSgajDAQvkeAoz",
  "key19": "2Hejp6J9JZVQTxDwcQ71thdpP1kc7xWp63df31qKLwov4aRerV6bxApLGBNXCfLVF82QRpaBiCW46ZmbWWmNhTwX",
  "key20": "5nSNiYGuJHqDmWee29AfyJPi8m4zCjxAjSEKpj4UopuJgeLjpaTyWfUGXaZWMm3YtroBee5quVA2zfgvJgYe3aKp",
  "key21": "4KZzwNJC5HCg4Yy5o9P8Gy5VxVvMoe7Hhdb7mbtde52gB2wXfv5C1Pre7TDicqfMwDvXkzUeY3wL9CCxigfT5QZ6",
  "key22": "W3WDnsYAEp5J1RapVk83uepJxFUWTdjBf6X5Z9y95gNR19FjdgeAWxnGs5Uhqqevhity36xZD6zEF8AgjSpT3Ks",
  "key23": "58o6LMBSgfbmWPFzCFB87o5RH6wfTXZZwWK9Yrn55KqX7TizxKNQD7FncGRXdQdFkmsVXhUEGBFEMvMHGTpRuiP4",
  "key24": "48eaqu61DttLimhymBtaBG8Y8jeGbEVwGsVTFAYFqJZvwwauDaThwDiRAf8nHyBqS4K3j3RmJkZu1QAbFNwX4EiZ",
  "key25": "4tsnRxpge4DhCH5YnhP5ngFLeE2BBBh8ao1Bov1Hk6etaKcdzHbxTnUUfvEkSHwfySdhsCbZH8o4diJtq6rFDTz5",
  "key26": "3SeP54cVELHb6JQ9u4UzF8cwjAChbkiQ4YUo6KU2y6Cwhi76MK1BdCesS5EPB3N6AdLn8GsrNEAHWSKuLTeFjXzq",
  "key27": "623Nnw7tmGw1gaiNo7Go2gdFdjqVF2LgjSNaEPMeay6xoq9mHhJgCew4TsB5Fwfn4NoNRjh2V7DUBKKj2gUW9rXd",
  "key28": "3TLpVvpZyAuvM8WvT7BTwkwx8n5BiT6XJNtzY5icXnfCU3oFnZKxGfyW1VAW1HTyz8xP1HYMB8qWCqfx7VLKotv1",
  "key29": "5uirA1XfcjFxxG1jBJbHdjJqm1ZRaXEB64191hAkSrKkMVEdHV2EWrPGpjyGrhSPX9YMBV2AuPEoUNbpwJHHdrE3",
  "key30": "NxmNvT4un1ij4iEP6EqAGTSsgoytXCC3EJTMfLZpu7ML4uW5ue59E2KyuLNd88YiVVYaJ1mapcVmSTip6QQchNR",
  "key31": "4myT7idN4ZHPaeHajWFtRqDRwSCGiwDXAURyKrPMvGqZaE3phg41MSwP2UYAZsoi5rmBQjVbAuFxT2PNKj2vjiGe",
  "key32": "5phkmbnA54XQnsP1sMmRkP2McvJQFWaVX6qYTR5vokdDYdTGiurBpDKNLHQ7aAqLffQf5e4cetisYy1PR42BCEcR",
  "key33": "3kXxXtoUBtod9hNyVR6Dp9Kf7wMWkkmBhZWm7L4FCNdn3PvJuMWCA2AqrgvFHUaT46UyrQUgnzFr1NirXYaaA5Vo",
  "key34": "bCNyZsABgY3WFWWQtQ3MMfuHBCmtfqoRb2GLoHRdnAudxcZhgK7u1aPXZZeJFa1da8JMshFDnmniUA1PDZ4ADvV",
  "key35": "bKxNxYHgsKhVA5smryMHN3WvjHRTRM3GdT9rZv1Vts8eB2jtQT5FU5c3zgZzv2FzvzfzdyazX9qoJSxwtcSZ9U1",
  "key36": "v8StBUEHK7gViX21oikYPGvRUptDGnab3fTFVXErcDKKEXkg18tsvfTrMFjpN6y4Txfa12djdj22ap4masD99XY",
  "key37": "3dGFGcTbnjVdMr62WY7hA5gXKKovG4dEepz3kCm1TnQe6gwVR1bjCRxYPGVqHWaR5wazz1NQx6BAGVNQpMFRPMiE"
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
