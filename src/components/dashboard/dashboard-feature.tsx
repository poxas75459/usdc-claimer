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
    "5KzbnX9NnK4JR6V4bZKxX5gm9KvtRNsEoZ5fSA4xYNjbSXUNJyAnGNRPvKoSgASgHjBjR7aF33Pb8F5e3TDx2kQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kG5eJiAwu2edLom5riVgf6eFRMS11KunQATkQA3zaVszbxcTVnEXE6CACZ6F8WQCP89iFQ6SCEcSN6sAYRiyARY",
  "key1": "3t2xorhaXujSa1hRTsC3T7UmvUD3Lu1Vvdr781wMrn5DTCZMp5vXNxveZp2FLKyzM55vAvbttZvo37YLqAQ72Qbs",
  "key2": "661YA4JY1UNkieRPaCjNm3W3EHWh8YzZdc2aNCRdwPZcQfwQdcPAE4nZfHi6nUPGMgXQWKmMm9pRHFnCpauWvWut",
  "key3": "6wgj6x624HkXmDCnSGU1397MKYWjJYeGeBVU5ZmeSZScmW4r9TJnjtBFCz6417EqSiaRULBJrgZBY5fdenRP99J",
  "key4": "7UcQTAt6CSCYUjTD8STeSRogSVANRxo9P12Gmcbh3ZQrargYx7SSDkHi5c5F2gGZ8g7NJKw6zNBPerUt5FwGd2j",
  "key5": "5gmKYShPAdGyZfD9TFU3tKWGo9fqoktoXMpYE6vxK2z4r4H2d4pV3Aq3x6KWAWKbwKVZt9Aghu9z447aoH6qCqKt",
  "key6": "NZoWudL5is7feHRm6V9zXyoyWBvzkqWgtCYWgDcWoUnjZeLtd831KXWCRUVKzArT3cXpNpfGraG9ZphoyQrzayA",
  "key7": "2fzFqiwBPUgjs5Ktxwf1AwDF8ytSa5A7DdBM2bHpG18sQJt2Yb1JM8S2w9GRN6o2kiApgR3dm6hrrGBgGQn6qAMF",
  "key8": "3RneHx4MhAnrWRPXS3yAHBGFEgWwdRPUsb68K6YijbFQGDC4HEAGYDg1B6xPJ79M4Kbdt28iaUKv2CQfjCvKiqRM",
  "key9": "4u1CDJaWi65TWQzV4ckgdfUExSC3goRsqgqM6BbmLbPhhZqF3oLqdkWfyEw1dsJtVPraW5dGe3RNcNNqTn88Apxr",
  "key10": "5yLjwDhFQLQP2XGArZND7m27Mf4r7yJBK9FGBniMBFX9P6k3FaRU2AcbNL5h3dLtMtUaLd6VCEPdEAH1tbCNxDcH",
  "key11": "2iTzUvtoJSFjMLwh5HuSqkd2vKdaL7ceryGT5h4Y8se2bUJJK5gqsu5pnCCNXhrrLRCvHbsnrDChrW8nXibWc7cF",
  "key12": "2D3ZqeCeSPwvjhKpfZhTYG1hMwyeW1i9DEk7HSsCER5SXn5RJzMqmpEMVYLvPZGXJShJ2xTFUSi1y2fNofXbJdMp",
  "key13": "4Qr4iRL5RrdmfqS6ZdwbQagePzKHxxcW7533wrsSe6AMundR92JB5pdZr6Jw2tU1wZajmsZ38q39vFLzB8j2cWyT",
  "key14": "3nTSdcAbxzkpFvkrovsGkh3oakd2RnQQg78a5sdJf46eQc7wZJhFaGc9wv5LJa4uW611RnEQhhrEVCoqSj91A8xA",
  "key15": "3t82eJye8bj9T5jrKyLxxuwWio1yP7HFirxgWR5YbtKGTQAX6Rek583gQcYP2w9f1VmFswDRMfxQyjfGH2GwZurg",
  "key16": "J4uqAGHk7ZdJMgt83rB4Si5qA98pFovuT9FcvYS8yXgp3NoJYtrqEXkVStRn1k1Df3b3iFiJJoPB5PzxKtLNPF5",
  "key17": "bSKziegkvwLkH4GiyGDUhPyck3XAJrPEHZugiu21WkuGSW2eusXXtNHDngBCd6zMak2aJnRGdzxe13UpRS9zthF",
  "key18": "4n7QkBcWisqrHXDJnJEfbr5KgxJdvgX3LafyhNvhkuYo4KXJ9ZTtGcFa2ZfwfMVkHxG98gi2pLD67V2A4e56M5MJ",
  "key19": "4sgMMLGE7iWrNDavgnwsFUKuFsdqiGbqay3xZ4o8apjcuXNi4cE2rWCW4wQ9yg1kAg7yK8UMuRTyERSN67vXThze",
  "key20": "2ZWmYFYPBjMDfHJhxeyYwgr1Ldt4QS1FaXF85PDdNSXBduUjcn6rcxVQdh3C94boouQ7odLsXKtQK76fG4V6457C",
  "key21": "26SMw64HnrE2EvhLSSN1D79X7VVnk3m1AwHLzpk8jU4bGALXY4KZ1CD4AngqrzQzDgU3uEHuxLYD7PvyGGShmybW",
  "key22": "5D1GWQs5c6Kky5pSRhG2ozYEXdCSvZQuuVWPGUKWBhJAXTNMm9itsoYETFFqNasZzNTdwg8C2XR2wJqrkNq9dRSq",
  "key23": "55edfj9EU73tVQKefzk6vAnfx6UkJLDRZuGbBeXFso7Bi8ozH46uLUtPk7iCyc35ueWdw2WEGqMNjbV8tRbj81QX",
  "key24": "4FubivWX6sB9SbUKfQPp5TGnnMQ55Rw3QUyXCiHRDT8iPQCTM5DPJP84RudGoVj4YbWh1R5z488p7DeCXekbZLa",
  "key25": "2tGP1JnX9Y8trzEciE2D8pWWaE3EnrFd6RCLAFS8gtiufehPsskkAv1RJrWd1ii28AP8yuFALFmdfhRTa4Z6r3VW",
  "key26": "3G8HTTsy2v4R9RorcBqU6Cfrw6KFVtCRhypnFQLPJrwaxWe1sNs1QmNta4YadK9LnMXQNhG8UWYzhiuCdG6LdiSc",
  "key27": "qbQ5o7qV36XDtJ6hmCWXKex9fY8X3uGJosT1FSDm6jJxnFxqncSgeTajbY3NxLiNFJiNhz4rsL5EH4rSxYTxmnQ",
  "key28": "5VJ49vEvwc3WC7yPu3rHq4wt6ucP94XpXC7S9uQeSBRH8AdbqCSiz7fDF4Eg5FL8t6RGCJ9dwwFjSJLj73vrpCL6",
  "key29": "289ECCBpg3Q6ZGNvyggTtx9n9mRWzTs5Mxnx214GGM7CiZexn7DneHecrg2yAsVzNs2ASm9rZcDihBPuJJRWo9Tc",
  "key30": "5z2FarCyWU6KZzWyQXWYz6FsgYSH6rnk4f88utXipYjYtKcJEojVqSY1M9gkhQuB9RVSwYWJzCqDjgtD1RPeW5rJ",
  "key31": "5cd5PS3RQ2HybSwUCEAzLi4Yw5bmFkEnQnwjT9dipdHJUKvuoVMn1VsjS9FGCByRfu6DLSgN5EwkteAdVWN8FEtf",
  "key32": "24uPua4uMdRphs3Pd3VHsaBwsPV4vUo6PSUPutXYpdUMfc6tU4tdfAwRmW7P5BYYH6YqZ1C5fF1tyNKhxfDTL484",
  "key33": "4vU58FDgybXcdBZZUUPcioVSSuWgnWp44cP7Qi6DbC8D7h48pAM5VoJsVmFFPHZo56yUbrG6cNxvzcxMyFjy3Fr",
  "key34": "KyaD8YthtzcDB4zwMioHaz1sW1xoz7UtxiiZcmudYwCSAnYJn72i9faPqMfHAygzesstsC1nf9TNuDenQ4zvMgk",
  "key35": "HN1w67iXw42hkVfBhadfpUErmsh6pSfVUxX5UETEF1wi3QDBuyiA2zPRj9ojnqx3BJLAEE7oEtLya8Lns1WwWoE"
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
