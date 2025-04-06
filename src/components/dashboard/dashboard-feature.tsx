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
    "3QRQGTBUQwfhH8bw2g5yN5B8sZKZtAFUYoRyc2M9tZK5xkuHC751QFC5rJaYyU9ZGS3pSkZb2aeYmF43ay2aqbcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2apxhgBfQzcYJAdNLcqG3ngfvt9ifTn2tkMKatKktaZKYZ4QBG4fX4DNSZ7yXBp8JVXzeJPLofB5TdBTrjKAgzz3",
  "key1": "3J2Tvv7p8tD94RgVL8f3bWbJUht1otBp73pdZugEvo7gSGJ1Jk791ndkktNZVuqAA1XG36SoSEScZp9zwiicvBtU",
  "key2": "61HZPWbCbzqRPXwKDPenCc5RWsBC3CAxWRUR4QU5A65rTfSd4VJUb6HWTqcCqHo2e64PmmAo1G7uYUM1NniasKet",
  "key3": "2H3R4FvHM1m62avtaABaAZ7J6pDrVnyLaYJWqpnTHhghdtbUdPRk2zcvba5dS8kiRAArSBFMUioc15oqZZSvG54F",
  "key4": "4bryYz7VDj9V6hVTkG1hawYbnvy9Q8Hx3LqkfEjJ2iAV3zYaAnJELDfzC6Ag5qqUkVvSEmzZNNTAntCZfsyvXzxQ",
  "key5": "3QdM1QrUgnasXsXKg3gektVpJ4TQCMENGX4mcwuHy2hYDbrGGjT9AdMxjDYNyCWp7YTSdrdNzqbUpFKCD8FfJwGQ",
  "key6": "5qc82sw8YKf7Pe8qcwhgdSL8DTsowCFwmKEyxENijCF3MzB8EJGq8pnKzAiKgjTvBgP5y2dLL5nGKPBGqxh57brU",
  "key7": "3s9UtVn6tR8B1MYNYVR3RwvZK2txFu2ZbNdebpyub4MmEGeKYBohLfmuBvFapMDCzCgT37SfhgFvkTYGXG7HSvy2",
  "key8": "4ZpMRShBx6ZoQzJhf6jF4AgzSmNXcSDgipN3pXCixPDVikEcKuJ3gshj1b9oDosMfsTKeN463y1TfvtwjKVR5YYr",
  "key9": "46dKUna2NVhB6bHFMedN8fcf2PefBaQ7KtM3LzfNsv1itVVRJGXfAwpYcgshYjpwkbC1z8NrrvXU4Eir6ZQV7q3G",
  "key10": "4CiVUTuXJHn3Uyr89DeDp7SmmCx7guvg7mm8cL9y2LyPy6DziyHzPy1y1ETsHTZjvs78TgAqvat3s2DjzthkLpnS",
  "key11": "22Y1c433E8xLejWm6GNZRGdzFHUZCWDJXfsKCT8kXxLptJ9dQvsEa5aYwtwN9QZ39XPMsH5ia2QriDz3mS2X9Cgm",
  "key12": "5a8DoP1Mp1s11rC7xwiQ9Bsh2PYgGGCbhnDi1iZmCnB7Pjokbowe8aBU6sUxGSk1UynEdLMJujw526ZGGSo9AfsC",
  "key13": "2NDNRzcMZNdJojHifoB5y2cm98x63rx54E5tBgA4mPhU91RSt1yLrMcW7kZ6vDqHCkSj324wgUx145Khv8M36nP1",
  "key14": "5FPM7P6x8J4aVkLi6eSrBM7YDPkXbFRGjyZJgNPUDk5geNSCYPF4GnFepSdc14fc82wj8y4JVhxwXZzHBeo9noYi",
  "key15": "2vShZR8GBJCFobKh9xXRJCUHuFXakmeqHPVEia9wrU9brmeZxDr6x7sNZTo2TsVRXHg2Wzquz1zBo2G1ikzS1Xu8",
  "key16": "2LzsWq4keWAhvf9RnBwQBkDmscFw4jMZ5V6PJnFPgeZnjWdq7LycCUKY4NPAQc7Yk6qr28sJuYFqRMhJSsqJdR7f",
  "key17": "3tXJ3KTY6eVF8iG3Svdtdv6n9moQknAvG2kJpH8aa3Gtf2ng1sUKiMasFmN5JrS2JA6agLRCwhob5opDCKHDN5h8",
  "key18": "4PoHn4WQfF2XKPYEo1p4ULFNPYUi8WErhj7Rfr3PmbmG9yyR9uRGoJcWaRjYvNJ32hQqcJ8ddCWh41zCan3BSPUr",
  "key19": "2eLuAGA8N54gZKeYPoKK1Uvqrp5anFY3PDsqgBHTboKYKGfb7B68zw7Uf1rAzqdgNHaD9nNxX3tbfeJyTgvRcrCn",
  "key20": "414kjg9sCyob3vq1xjDktY1B3zhSGRwmtfgqMBKGkGe4w4wmpzku7nvuP62SWBm8tCVh78HD5fpMWkNB9dwiHA3n",
  "key21": "2sBUsUV1XiYE65urLxbV8E3bh9Nc3AUdkUscRPDLZJtbm9iZge5AuUxdWuU3wuHK9wgG9BXdTC9gRQCUUm3dSE2Z",
  "key22": "5T5ouRbvjWQKTR9is7x1DgbCKAvefUemvmbiZpqhHSQuwB6Dn63KTfAiKSvuhn8jCFHHiDDxas2o7XiCjkMR6nX6",
  "key23": "3jcahj1i98tpiqeAxoqSSStfWYA4afxMDkf1Xc4gCdBi7EnzQjccfEtyjZmnQ2nyquz6SBkcNzJ7Hqh3KkcLe7Kd",
  "key24": "2WP49MBaHYiiGWM9kD15KxSGGrQcFW4JTrcaXVNfyMFgHRwgp8YHbGikfJDbASoqwJA3wAnodx6cCxKq3sw9cBry",
  "key25": "RSLxzaDLeLsr5QxkgTQCCVzEsef3ScB2jgKToMmKAS6j3A3TDvBTmzngR3iKLvkkkBPPDtLH9tMPdeQbE6rQbig",
  "key26": "4UapWxkKoz6vLCev51VGymzish9nWH3w4odJyU9a1X2HRR7ivphbUD1VeDYFJe2qBn3ZkxeyMi8P94KpAXCBkHyg",
  "key27": "3pDkrrnt1CT2htsy4eFfmSGCtw8XmqgBqADYVEufbtMhL8RK54c1DCTtnHbdS8n7akv2G3WTgqxwvhpNqfPRRz5E",
  "key28": "31KtmTUYMesfbNZsRhdtqDxESguKFcWfezFFCC1vtMMTdnaBUXiXJHo1iwJoKBCcZHwSswz99xk44g1xCkAGNPou",
  "key29": "5wb4hhaaXjoDK4Hfe3jQX52igricYvu2HhpwczpB3JK2uVoYyyQjyASQoQ1R9yS9kc97bou5FbUQZP5PBHJq5XF7",
  "key30": "5W9nCQxv8BGLibnhWBcLXDuzxmZacFK87CPLr5hBDuxSYhKdvUGr3tz84Hg2zS5N9QouuSAUKu3VBFCBcMrcGFmv",
  "key31": "vh2rbfTDoJWsj9CveHEZ4PRdbZT1BVK4yUG4x72od8fKwjCLNv8HTCihgVNxb1DsAmKezCtw46fHxebVWmBKert",
  "key32": "2LUBy8dJirPPm5oXhDogyyQgnVMQY62K136GoJuKbkYgvUVeoGr2TRTK55s7fz49KPrHPCZQNjgp2HmynzQwDaPp",
  "key33": "4niomo5W2gSWhAjnXHToar9ePwhWZHK51hXp7dg6tmuFJJxQ9HThmg5Fvp6uWAL68xugbeNXKBmKfD9Dg4fN63eS",
  "key34": "5GR61KgAFRBrCHQBnCYPUzeg6X9i7jgGaM6meJopoXEtPTunb9GPMrdq8hvSCvsbJ7PGuB97LedkBu35rWT1m6Kc",
  "key35": "33A3epyd3dgKpjJao1WTbVN7aHcK7HZE8XDJTkJEDRZ2egq7je7QkcW9jirv64BHUAtRjWGdQYT8GRu5XUMtKLwp",
  "key36": "5iT6CAtz4fSfv637Dk8YLbhpinFdnVoQ9LuY6T9ri1z8vPm3UqjfDgwCebjWU29jwsBpeepPpFFyntAdf16nhhSS",
  "key37": "2vHjHUucq8esi4yQkQwibuGPnXHdcgGNJcR4PpSMNFvzMJtNtzmdb3bj3AWvChopbuo6dgmmCxnmbQhifntBTn6y",
  "key38": "64N2roAezGMH948NKyaPGDs2xb5t2u5kbGCzFG9jhvFFw6Eefd6fstRxv6ccX9KG6mfh697R4WjxzLg4hL28DT9o"
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
