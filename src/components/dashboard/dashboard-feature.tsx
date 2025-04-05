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
    "fTikLMYrp9t8VF77QnFoXkL9DbXGvqfr3UJnMrEgwCK3bUpRe7Bqoqg226whewJK9Pb9XhLcodoVkXMHEwqiTw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qs2Ah7gB5bLarBTFyjTmMZHoLXeBfiprCPy9Mvp3w3gNgyrVoGfy7riuEUxC6U26XtnAekXuxo82t4VNdSoMjiZ",
  "key1": "3vwaq6pHbpVuGi7XzRipGMDzewbk2r3iLiXLbNCxHd2LagzjqeZUzZZGngBEGU9b2dEVww2udsXRTT3BXhpyLRu5",
  "key2": "35CinQPLXV6PZEfX6maxskuyEMva1gJ3dy5thTWoXQs3MT4kUeJ97NbdHpq9N9VvSs3y5SYuuf5V5We5hxtqtNBz",
  "key3": "ywsUnEX9JTy4oyvyVmqtns3tGccpSU79hFSCHSZfy67icoqSeyV7m3YrP9XvNDvKTJcV8riH3TYsKTucj72EMAx",
  "key4": "3FtQnvFFkUXTTybibt7L9XWwwfAAokK5KNyhBGWYyHr7NrKyute1PG4BYrzRB9U3DYfGRSDfS6N18PxK1gAuk5mE",
  "key5": "3YjVNNNSmfbZ28mnx58hNpUDQ9iK62Z5NPuGN7yVB3ijkUa46RUy3C5h63CtpVW6oMbqxt14yd5iakc2DevVy6d7",
  "key6": "3N7sv7Fnaf6FpaakdWDoT1Y1yaoKGFf8WJt5uw1zzDgwNqPQYAnUCLnBav7ybP52Vkgu5qyGefgaxQFdjmP22jUe",
  "key7": "5NpnbtGWtG1KyzD6ZTFctuir4y3EwRLvNwF9ipTfbq8yHoUvfGd93afMaX6UiFsPaxFf6J5KFSfKtnLWo2oQn2ws",
  "key8": "3oFDFh16fBbyymS9zQrHTui8AiYSV76txgZHgZ23B7EGDQYvvoRzVeqsKUshfZ7e4QCvvMB6M6o3yQ8Wec8ZPVNJ",
  "key9": "4tCCC2VpAcWYjSvknotWYqQuyYywh2rktBg8sKUoBV2fq1Yjxgp6oh8y6Mzfm4shknAsq3gtLwcAG7pqRwXMaVPV",
  "key10": "4EFRXE1qNanC3kvuPj2NJiYFQsbMCRwoQwby3SoPnBAMZc1pF6XKgyoxYMkgtVdovCXB7pgNr6fdBMkFq7BUchbU",
  "key11": "2xKu6kz7i6LdvwB5vsugxmaQQpGs2DAyvU2aKsBmtDCcC5aZY7rbeRBnii6AeZfLRBhNAG8yTcys7zHawND7uN1R",
  "key12": "kWcN6M3dead6F7uWktWfiHMbgXux8GXSpQrNmtUKHc95som8ypHAmoP5QxW1GnfkYZKKuaQJXbFYCB5SEXN8pC3",
  "key13": "61Chd5QZxq67j6AMfEn7sCJYXjSZ3qLTLyPvpBfnNWiNLMH9K8My44hkVczGSoZqtuMRaojHuUEZVmMEdtzgDN1n",
  "key14": "2csvB6fmW6TGdTKithxBusY1dznwzQwVCzCgXSY98imEVeSXCfvXcyHC6yYipxetkjmmWtohuT9gDSTXg1CeMoS2",
  "key15": "5mDUGMKysfucrar3aNkSuxXAWrURAuV6iqviR7QXNPsLvU3p6CVT6RDGAiZcCnjaHBMTGCL6YJ7tNyysoj8rkkwK",
  "key16": "4F5o5oh3Cazn2DpRAz8rxTsSSypaP63oMv6ZAiWPJ5Uq2FKmnVDnCcVEiq78Kib9jk3rGLmTVd6MRBmRoUTQK58A",
  "key17": "36MMZwnP5eHyRhktuu1UhyU5AJXHBhxhF7DFvFcQncTPMvk773gcGn1kP1WuChtMaVgg91VUhfqs9Gy6K6yLz4Hi",
  "key18": "4GA6H1c8hEXVEsTCYyEUk1u3euotvFHRGb2WmcTnE7scCEvKL1427j2j4ZeFpWnXetZukeZSXyL5cuNwUyVjU1AM",
  "key19": "KTDGLz4hNiXDQbe4UD3J12YeaNJFxFgsSuwbfmNpi427UXpLvcRX1DcF5SSNn1o8qUrhce3mqzFJ75fgVNJNSoK",
  "key20": "UWfFFMKYxxpRZdVaEimA34HvjHF2zkpuaRxeYrnNgsmkGf2NFgmdpucH9WBAVCa6Bfs9ZS3ghWKBh6xYm5gaXT7",
  "key21": "CtpPfnnQu5doeBynidThvBPtMn61mNCnQqd5qpyqAp8mdKA29wTjmwPcm7BThU3R4Q4vGrv3txA12ZTSmETwh5j",
  "key22": "PRhnBim8vJac3aJyj8yjVXRcp3bM9vSEz6QYNyPigaXR1gatfYU4BzqVL9BLNdmUmrJa6k4DVgCrqoe6XKK1i2S",
  "key23": "34FphhDaQStju3nsDXetjBbEEHvbwQFCiBhmgTYWuZmBGtgq48YVpztik7c8Fqx4zPipPfRp8sDYpTbiSdh4GX3x",
  "key24": "66LgiuY8WccH5Yex7GcHhYZKzfhjq4QHDG5xBe4191ztevkdTtcVWuteSdJQZYUrHbCugV1C3Wz7ouLgDT64Jt73",
  "key25": "61nyWT7zBeukLcTNsPkdXKLis5Py5v4juLb7eJcqtckoeaQ7KWz1WaFG2ZNxU9BSqXEnvQd2scDTTJpBtyRw4pSr",
  "key26": "5GtQ7V6XGUYaFz4JcucbQMNMhdh82MyR6bv5qZdMLZUutStdKWvHhdcxpgRuUKGFZ8JhuzcNDsX7ozEJDdALnzHC",
  "key27": "czjvRi2bNYEEztPMGZpNo3aNrsDJf8PNmB4bSVcY7v6DhsoQZnmbuCVarQeEe6L6gVkz4BAEhWLrvQkBURaDwtp",
  "key28": "4srEp3eyFyiqt9KTnsAVkUpfejF9UEAcXKXocNHQ156iF2ihLcP6ZgNutAudLpJLhVJ3Fajb7fHNM8eGT5R28tRp",
  "key29": "2675dnJBjsLbZcQ1HTTnpPEexzqVKsqfkbgixN4uhALGT7HMuZHLg4vWG47gi4XDyRZhMk4PgVq6SmhoAeU1YNu6",
  "key30": "5WVDuJTZChRE8G3MSjqPhn7GL4ChT2JUsymCNUxe2XqY95dTKvKMmhH1VUSNZrQ5XRAoxGb57T2551ySvBju1JtK",
  "key31": "2LCNm9iQz5rXDAVFmrsfY7t5Pgf1PnhoF4aaYc6w3QPgShBmQNUDcskSgEWNFNfro6TTm6y85GN63NUhW9BNCtHF",
  "key32": "4mULWqTedcmkS5UNeFbg6Ee7LKaQjNrBDQTrqZXptS17xXpdjKiXcctsdNEajtStXjArmw9WwFRzurkrexws85b",
  "key33": "35qeVcorRtm3hRJQ5MrnY1siUiv8H5V4onXJoB8ZWCKG4EDFre3sPUieW9JUP7M94FAWgD1wCRcjSk8ytEfJKmsg",
  "key34": "25Ga7D96t18AXFPNnbaTrGE7jHpukkKyCSSApEi8M1NSNhufBgb2Vd171qG7fYDx3uBvYk3mxHEPEB5K8wu3Cf17",
  "key35": "5aY44u86z4fq63mmRP7v4Y3BAVjXLhdZjhXRnfXjyw4Xb2fQk6qgnjXrh5JnLhaSNG9g62i8reiHPT8u3h396C7J",
  "key36": "4QdyZTwFHPAZxpQdx15fX7wrbPZ3GR5X4WFvXDNbyWyYpwaKCc8tCkEgTE5uUR4L6eB86KzbuLLTBcp2rRpaS9GC",
  "key37": "3JyM6472B3uF86CwfZvmkTRRDsfYHjnT5yMDxtPVViNh6MicFuypZmiKmwFKjkT9K98Xhmztk7odPR5SxGxFUVM7",
  "key38": "28hLhrKdjhVjEqpoPCouJkc5drJJ2YWXLChwSjMWB2HBCBio68obUV3nEkGuznMY1MPfLvK8gvmJxLFMiA5zm33k",
  "key39": "3bSBsNR7VxTsivzXAcx5kgHiQLs4yJrBsSPJDnia7LD2m5hnnrRBTZpSauvjtbGBua8pJyQztes9BzFTy4dbT45n",
  "key40": "5RKMn6sjBkVW4nkcVDtVUAAM9R2TTXekbWwLhhxk58VQiYdKr2Uw5WyyLmcUANHB6sFzgSojzsWsXfcS5r65aEKU",
  "key41": "2XFGsfgWdkFDhHDRrpGXgDq9xuxqVaSidtYS72Ab44EYr4PAVH3q2rQtXMVuTqXjXsKoPfJ64QjS5eYWJmicHBJd",
  "key42": "booiu4uPcsEJnBwAxRe9mx1JE7vEtXK2ruPzyuPi11VCJv6DUmHeRa1vAAnWZncQLcJ1iP61LD3fg5ikcmL7diT",
  "key43": "5iZJoAz4qDtvPv1s4HJyUQAuHJgXMSmF1Nytw8FtJdEz6cDjEiDBoqXqr12Biwe1bhNy9AEcgLra1McZPpmYohrP",
  "key44": "5xANwFXdQwWJbJjvyo4Z1Ss8MJBMbnfYYKjc3f2BBPhptqNSBUVByyKRTjyQDPbSBTEP47C7ATY5umum3TZkcNiP",
  "key45": "2W3KYpp27ApeAAMouJrdmdhCZ9cHvjcihQ77VLM4G59LAEAcnW8CYup68MFAJM8ZqxGrgyP86nAQcKYtUMkAaUKy",
  "key46": "E7E5NRvLsKBBttbWakFsjaiY62RHeg4zBAohv9QUWkRAS3uayzkwNP7ae7Xz1yRYXbMcSWHSCEoeM5UP1Zc4DBU",
  "key47": "42iUiCXk1H2bgFZ61XFAmkcNSfxoB4yZykUy9MRVzNmNoH1A98eoJa8mqzUeNPNPnJub5cMPWf118iJU9p1PdoFa",
  "key48": "3kE5mjZ3Xnuat6SWv6ZVPDnBmzQwZbUdQLSuB3rnC7K76v6TTmUqb1QrJm1LSYHo6rH3T5K1ffmhnrMspaEmVyXn"
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
