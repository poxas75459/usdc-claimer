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
    "3yDzBY1ALxPzK5hkDjZNnhAggVvhQ2h2GDhSYa4QZ8aSNpUNJBSRWDQXhsjEhjachHRYAYgVbLLQYLdcYs2QncYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M2mftDv28yX7JTbjHEkjMZqaTTXpYFzAoqrWQ4Bhcstr6Wi13Lm8Taow2PquMa6XfBfA7h3C88Fo9jD415Apsdy",
  "key1": "3UTxtEPE4YCsuKrATn8fbDKw74zekcCbVyk9t6D3cpHMrvJdxu2SCu8fCWFbnsTVBDtaZwb8tTKokpoGHhx1NBd3",
  "key2": "2x1x7F9LNAdeApMyeup48qA4VgE51ej6rm4vL68roVSHkipYQK9QTNLqbJ2HtsuHX83SMLvSs4tuW4nvsJnsSN6K",
  "key3": "sY7pTrF46fjxJDmQDvANSdv5mRJSGDCawRwCMxiytNFirco2H4KbStF1mDAZnVDxVgiSYPPKH5iSLUG9hUCHAmp",
  "key4": "63HU3eCToqrKGxRgAPMv5EntH8R81HHVWyusP3BDu3bK9oTfRcca1qwRUDbvS31ZxjC8f3g5ZpdLpcwoZymYw46K",
  "key5": "2HggQofVysA7GdatRBzEi4aKKMJhVfjX6uhA56gmTiRwR9uYSQqFBEnWe3TrrfB9x6wotvP2kePf22ovER6y6xTo",
  "key6": "63L3HMrz4oHLw4ShrLo6575RjoFepwZnefXCcCtCpTXWfAUCasNDDwoZEaDyhQEmsSW31gqkmWvP7WmdYJguoyAE",
  "key7": "49fUprRiytEkMgkJDm5v3jVRKLGQVJKLEmCEYsd2cnUgmskEe519TCCUWFc1dgGdPwzyssS65hMYjJNGrcUeHdWy",
  "key8": "3N9zBLqJRi9aLwpTT8tqMumuwdxEE8Hf5VY52DpuxGmhoTqSWNMQEppUzdnedU3jwFM3qCuUgHKPG9GQPHiu4uRF",
  "key9": "222TxB1KLfVjjAs78YDGHPGRqsYK6AxFgfYepLAdvzdtDdpnub9GL2583hUEUJDPW5B25UWzMVivF5DKVCrUP4JM",
  "key10": "5paLztJUVjBHuSvYAzRWik4DXB1jpNu5PbN3JU7kTCGTmVgcZ1tm7tyAZAokKUeriYTSmHxRiAQ935scuRCW9J1C",
  "key11": "49p3uMyrnhoUnThHndVMfqZmGXA8W1PrTaCMLxdcw9iqhHhaaBgtZUGqnRjrK8dpc94vuZbRk5q963QFRmXVPPeP",
  "key12": "4onvDVY8XCiHWTzR3xRsQi4SYDNnkJT1AHRfXdHcFZeJTimyEbXVgcYoSwkjg8FUVrScBeSy4tet5ZXvBTfGiJQV",
  "key13": "4UdQgKauadtyVAkSQTJspDarWeNoWVVMriuRqqmzLrcfvdB71Ma8Yum2vmsxrGsxkVsRJoeEsRsQeFfwYrPZvhsC",
  "key14": "3vnXKEz8BRmeaEq6RGvzC6ExeQawZELMeQ8q1WxwcKDXV4ZNcEf2xiCEXM5bjdjgnHT4Upuhs7wLVyjukSDdNADq",
  "key15": "5LWkYUd16TgJ3DWbBWr1ngPbVDxMBsBFVpAPyK4QYQYM8Pwvxw2gKL26UuKGVAus3eWXLxAcZmoLL1FRQkhsdrC8",
  "key16": "kMKPZXyfTWX6a9WLuZYHczsQJxysJ8koPQmzff1fqrS63r1yA4ZiRakwstqQeCTVsXdd5zYJf4MBp2gz9JS4XEs",
  "key17": "5fqQwQZRy3htMWmg3K9BuDhsJgJxdGce87ViFyaVig9wU1YX2ypwAsS6BrFSCnWAccUUeY5tNjyRUfjHfAfCK8Qv",
  "key18": "61QE1ipfLxnWhfnMFAyRA4p1YxKWmZyJPNfrKKJztTUP4UEdT2s71BGYtLEQjUSJdMhaZBU6ynz9f9bTUco36GMF",
  "key19": "61Xh6GWRiPCxxNAvq1h7WuioLQR1mz4MECtwhKGF33Rbo7BBp7rNYdTtp4PyKKBwktHdXWNSeDkNpVNLBhXZC2MZ",
  "key20": "5FUDUdMbA4M3WrhPqtcDzncYcKLdr7E4EgxrTnj9mRq5o4bvPMEL7QGPktoBWXHUF4T8Knc6iqd2dokpXLcKaBXi",
  "key21": "3bcW4nBXHVjekVFt6QuJuwr6tq94kEuQD6y8QHkB2Fdk4Jh9qKpgFarZ6osi1b2d8gAS9PwESnF2Ua4XKD7mdRDF",
  "key22": "3HLLDmUGAoUExf4v4fttaVp4zkChXnBpcAg36R47g3SWztq7JFdGTVvrfi6BFYRjR21EzNu9KauYJ5aL6EyVFLP6",
  "key23": "3NBCCnEcnCbLQoMSc4WoLNPBveMHyCoMZi4sFh1TW19aF51zQyzJw1Sr3b82XL32VuJ1oRzpZewFMfeafdCsn5C7",
  "key24": "3GTjef5kwgFzaA2DrpsP1dq9zksnEosnBKf2GN6L1N4F5gGL3NjyB2C6MaquPXSPiTvhpxEDX1R5SXPW3bb7ZpGn",
  "key25": "QDuBi1cPJ2rPZshcHpW4kqPq6uyoYzHHR73azhVD4CW6FWu93mWDCwk15mWAsQ27WkBVfevVEEB78uNC8z1Gs8i",
  "key26": "5rqEYggX5h9dXeDWs4JCtE6mWH8RLXzy8kQoLVPd6gQFcZi2egoRq7hYYSA3iiitLxsFV2SXCxZSzsvhveggxBCH",
  "key27": "KhkWi3dYjjL5PqhTTz74zj674GaaUpdgNxCAFG9WC3z2FXDqPH6AYT1whYxo8uoNWF9rC7ctFFyyRyiGHWw3gFD",
  "key28": "4CnBAFubeyzsHvW85PztPzVXzrCg3LUQJRr7MeW4Wv5vCnDAuvpMT2Tyn6Gt9nGGr5Bgk4Na8UEAPkQ8Fatj46Bz",
  "key29": "3LcoLoBbLTQ1a9V1y9bfAvJehPqXNYfHzinvJbyDgT8gkxWSTPBcKUxLLSAyNnUXWBBVMz7ufKvtz5VnbrZ3xHMa",
  "key30": "7yWrMyPPvcAyzdd6QfdBejfRBsCPLL52UHn6rBrzfBUWNekZQyvGqUwCok9dVpDcK2xuxkfNXEiPsWgjfm3ozbM",
  "key31": "61RDo8smiu1gSBdvM3EAEaCudfAVmvw7sKuB8tFWKJ2McrWGVoi1aa4zKVCK3uFg39A6W8dkSx6vbCPeXsGpMzVn",
  "key32": "5Vtn5XYTXmRo28JeHjdRJNk3TjkAVJ23mnKKeXLmup2ikmKE8q2ee1Jpa1AtAuVhsumbRnqd2qRagMjAADoYkbR7",
  "key33": "2NrqSM5Jz4UP3UPSU5L7y4KeidyJiV3Nt1ZSm4iFzovrBHdaAizd3JCkCkZwXwgTtUXp3sHP594y6PfKibKoiTrw",
  "key34": "kpSoW6NRL9cxtT7BrXF2Zd6jizuj2Zfp468xPjWitxnbSa3ZYAxa6EgEnHumDosemTqbkzfX5SXcomTJHVT6f5q",
  "key35": "5vvDBEe57jggeBFxVesKxaqQqseHiGVft3i4hqJKk7uV7BsbidgaxuUgFGDSwD5QV5WqhG1JECNSfwx8Zq5KNYKT",
  "key36": "4PVBn1iqFQy7BFtUiFk7pdPcPR7HNq41cZepJJgM5TuvpaEUi5px2kEgxwux9zLxnHytPshT1snaXxnApEuCdXCn"
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
