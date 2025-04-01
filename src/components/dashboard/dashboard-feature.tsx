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
    "3iGtYymjHwSW8Mn5185wRBCCzf74J4bDQE9popeuVVPguVgfaBvQiKxbvmDf1De5XhknHYKYfgfrTkRiSFLotu5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WHfmNWXMQbLjn2xGNfnDh4KWRBJ2jRMnqbvnK63DUPn6F2u1BjvjfcESjARrX212xEoV6pE3ijWy8f5d9qDFLMg",
  "key1": "2pDm3QQAZ45GLxAv4ba6MrppxuC4WvWaFToNQhd2xVy6Jnheue3mbfeQuFcjfxtAAgFwb4NbcWTAWDEmDD2vUk2W",
  "key2": "448mhvcdAzYhCQvdXR82UwF4GuK4mbbp1CLtA2Cw2aN51aSXZ9Zht8fZm2du2THTyrp2FATzMGoE4hbsRFNvNy2w",
  "key3": "3YmXsrpr8Fs7c3bsp6ACtbfusGSRP2dxWDcxFLn1Bmz64NVMBnZhyPbpEBezBSWx3WaT7QnCceTd4wyDZj8wkAxF",
  "key4": "2UmgsuxhfxFYE3eGDNeBrSkdRwp7KFggi2Gy4PmwNaRh6TwWqxn8ryLUKss96LZo4qvmWrNYPQAXmL7PCmdNytYF",
  "key5": "2C5V4pQt5ov6M2GQxFQRM1KQpZjdJAL52XRATQrC7iSNpTLjsFazBFqSFDDdQgK8HVt1vQF8o4QcUzYGK6vs739G",
  "key6": "2B5cUELK8uq1UDfqcfwoCRiLEzGmmrQcNJd4J7tPDUN9CEqnErouXYALjVkThqxoUToU7SmouhzrLDveDbJ9C9XX",
  "key7": "H588maq9Ry9stcAkXgyMWpiWouxsDVxt3qjVcUgYP5UQJH8MnEycMuAyPZDGDNqQ6LHux8qBkthXwR5wtEsRK9G",
  "key8": "5YzzXoKiwqSubVTCd2wnzNyq5itg1wvCnQEpvcnJUaEcTxLVKFW6evpsDQnByy1ws1SKDxbhZK9nkxrTRzS86Ekh",
  "key9": "3so3p3wVWuqFgPVt8c6xeKCheKr9pF98rUQMdtebvCVn15FQpXPcqciH8xxS1fymbDGG3KptwYiiYAGutxoxVpYu",
  "key10": "5vRh4XVSr8Y6u16rKuBWAdapiFt7MU5NWBkspKQJbJ2vCW4iAjaZrp56kKwG4oESHR3yAzGmrZ1hRjmTEe2NnMae",
  "key11": "3PV83kqtaCoafjiJHdYRZYLFksrDeLUuhHgQ1GnVKXE8sqfBkg12D6f732YZHNWzdfjCyL751KSZL7R3jyFr1azf",
  "key12": "376NG2FLXDmWDGeGCFw7NqM2rHPsfRkK9X7WbV9yfRnWZQv5C1BuJRSykNKP2uGd9jmpFdukmB5GU1JLNQr3YzYm",
  "key13": "5wSvEY6siFL1uSLzBLdU6JwUaejZSeKyYBYaGyDNKrENTzo9S9AYqyiiuEqmeG1GXKH1beH4UuVSg57cAz8637mP",
  "key14": "9AmcdJQCJ7rZS2wCYwdm42ZBycXgYk6vv64p6pVea582D8iGGw31RZp2ZMYTsTfdttmQgxFwZHWsFhbkQUrzvp6",
  "key15": "2fKnVeQokzTQWvWyhphbKRMy8yTFnDvB8LQ31pmaRrkpXTrrLEjLDru2qVhABTEzRaR1Y3PZEKYq3jeycK8nWiVs",
  "key16": "4xp99v7vzPAU3ZajJNuR9Zs3dc6pbFpssLHpRwG97QvGzALKqCNQc4xVqsxpDo6JJwdvCfVFyXDXMcURXRJT3G97",
  "key17": "EEgspp1a11fzahVb6DSrBeKFVgnXSr6qmQf4P9RGDu3H1NVyMgm4i7xKXjt4HAhGYVnBsSiMDigRpBxuSvwQXEU",
  "key18": "CPxPw1ryb1mBMhQ6g5t3jsQsifMGpsPzrLieZjm9RCrfu1qXts4rfAKd5JKH4pQtwT7okuiveof2nQpLaJPt7Cy",
  "key19": "4ipJ7yc7ZStcmLxQfDUi7BPCaP1hfWVrLYGD99W6xsQL9Xv7ogbJaeSVFRTKuKLppH7cJ1SAT4kca159zarbkSsb",
  "key20": "5SspvCu58UEUSpiUTByiL76TpBRKeWmpwabNrBZJBUGAxbzsZYGCd4CtQFGMvwAus74hCKrxQCaiAVx7N2WGsuDC",
  "key21": "3kLrXBmyvWAn5jVjMMwYXJDarfJkPwucTYffJpm21b7DRSo5vS82xSzwSKReZoWorjZSNdZe3eBzuBBYdw6F8x8f",
  "key22": "tD4jRu7rVCyTKHET7G9ZwGrHwBaTHP6LMNLLE8VBooHr4db9EueZVkS15v9oKnTLxL5opYrxF3SJKr5JEpPUwiW",
  "key23": "4ucUKDbrQe8trxnnDrwo3vUytDn1WoQ8zDgDKPWmjVgt5J4f7eWHyGwN2iMjZ4ms8P3Gwk6jzgf3ezj3bC6DWiqy",
  "key24": "2upzt3DVxmFSUchKAt3YEDEdDjUekWPJbxERaGxgBWB4stkBKFpYADf24BUNPWzg6muve9xFM3BJ8C3w7S4qWm82",
  "key25": "5vh2St7MdRn3G2sPtHHr9RX9eefKKnf4FvbckLdvuAj24sCQgkdCjexbHTe9HH68b9zzaUG5MzNak3FMTmaAtbXX",
  "key26": "2VKYzKkGbwyPjcbbUhnbL3LjHLdHFk3YNXQoBF89DSiaD4GZ2EhRj44f9KU3935bMKPdvpyVGRFXN2Av9bHyRNit",
  "key27": "369JBc6cCYJpf43Nt76tVSjoHh3Ue5Amandj7K9GA5VqEpr36mYNCDYi4oxm1wmLKCcgbWLRM8VmrrzSgvxxVSf6",
  "key28": "5qcypwBUD68fRtd7yfHT82iBNoHAfqBdqqgjXxqc2ueo78Y7f7JQoDCDio8pUsYRhMdMfjMFvY4nV5TgYSUftWwb",
  "key29": "4vECJpX22yaKbEVMkTEyYqAYo4Qrxs3d4Y3ZK1YtHeT29KdHvj57yn2iyXenn5SzcFUPfDtS9CLLaSBwuCXotTQd",
  "key30": "41Dcy1T4gMpLQAGwEQLa2fskYbbwPfj2KvUFyet6ayaXTiXUuHaaUYUY2d7hsJ8c9VVU19Mj1YzbVffUsC5xpARm",
  "key31": "2AHhkofcx39Cr7U1vfVNK9CuVSdBjtjGuuyg1dPgFT5pD4UNfuE61fLHMauqYH4D1uJvWVw63VuiQkS7YX2hWNMi",
  "key32": "2i2sr3kBpPM9R7GoPDDN4P6meukqTnHd7TsbjFiA2kbnJRfCqhMby8fWVSakqhvCyLV71twucsy49mC57q8RBibs",
  "key33": "er8i6v3UxaMjCQHmBzYrEc9z4Td1Atrkoo1BsvsxDD7dWZtMotupwoQHnPBEDczGiWdMF7EnCdoqQPrufj7tJkh",
  "key34": "2zGSaCw3zxwCeTykNqLuouiJwimqGEn7cUiTyAtXfkC6QATp3NB2QjEowTZXQrG7FHPtciMLWdG3Gau9fGit94er",
  "key35": "3zLrmSupayu71m7SSmm1V63kcAwFf49HfNQpYzgAzaLm5xLHpPSL3vx1Hmzk8bCnWesLF8t7PskJsYzEwmL1Km2Y",
  "key36": "5rzborEmvMoWKYDiRMbnstquYukSKRu6ojGAKefxFzm1CRC3LvCNyiBXr2etzUcFshumjDRtQqf4ByNAziDgcKdN",
  "key37": "5UJrASiiaM7sdWP8d7M26mkioq2xp8LhnD59rQsnAc7DY1ChY3qa8CYwW3G9XXmeb4kb2rZTg3JuApT9nzdYv6bV",
  "key38": "D7vPPmqegWhVeGTLaDqmVpbvu9Viacn9jiHdpyFiQ24axfgZLeLiHECKXSkCDaKgSwNt5LdnzS91vtK2Z5SjNLW"
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
