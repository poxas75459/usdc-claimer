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
    "4sKJi6iaEug7kASc8bZUSoihjbhCgm9hkvzvFFkDK327Y887QmELWbxb1iXztE8AUs19nsUmToT7k4K4kWjJJWEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49NwpFdRFW6ZbYxVjpWbG7bgHxcBHhCuX2m8HV7WhKcfCQJBdhe7m7LeyrvRfQgua5T2oFCxLd9r5HzqVYJNDBgr",
  "key1": "5HRd5HqBxZXz96sSYszmS4g9s3HDY1SFzn8pMCQuk681dorsBM5XaoNgL4PsQcLjoNJRe3ML3h9rw96sogKgtxC5",
  "key2": "24jd8V7higPtnCSb2JWgbj2t5kD8U3srogY8xPredC6enRMoUWf3xrKDFYAfxCzPMBcirQs7SS9R4vp34sca71ha",
  "key3": "3SvqQKBjSh2d4nCDb9xRfb8ABtWH6HwdVLgqeecncDkVrNaX85WgWWGafYzKoSchmZWZ9BTiAqPkTbaD7Gc5rHE7",
  "key4": "2gxCywKaServqTuiLjShPpXSuyT8q9CPsRCgmtjT9888HWL3rN9QG7u8s2V9CfDWui6sDiWStz7jJon31gmtmoCM",
  "key5": "37TLwqbuzZZ32hWA83J1xpSfxjRDojdJwXeA6t6kgwQb1xFjYJsLzLuw9qW7nAdX2Dy7zZbrEa52nZMYPK1GPAuS",
  "key6": "2bsKvqFpTty8KsMEcgE2LBmwdocmrTo2NcgacjWt7p3Co732WfL1k6ezjEuS5cwHzzZyhPjDXx2vEQV48Ewpkscu",
  "key7": "59MJ4yqsJMmBZ29C68p1TFzkNognHetcpjKpf7Fb4JhD1pshbmSHkyos6iUYVpKgThV8PYnUjc9VMs6BkkPiGn9T",
  "key8": "4TDps9kqyBESVwDomxbQnwfyBEUNJhtDCt2Z2GGkQBdQ66uVq4mtXuLfLjoLD3J2RuxG1h9HZZU37AtZPwwMfEFj",
  "key9": "3QAG1cK4zzqWa6XTW94pLPFwkRTjYUHJN8LJzuYjF9mHisRswoLfxvvfRtFK3DNxGUscPUnQ5GQ5RT2kRmXD6HHM",
  "key10": "4ELALZYpqRthYizx1MjEeofVhPTDfvip1xhYYSDGy5KqKTAubzZ6z8MAUCQ3Kjm2VST9ixDa8aEeYWaenW1Jh3q1",
  "key11": "5kDJXE1hfMcqx1RBJDa58o7Fhi4HmXsbAa6YqX3PKM6qUuW5hsnTrfyVu3kQy4o76esHGzzmStRCPUWkBrshSHdP",
  "key12": "4ky3fn5sTe9cvZSeXLjsKaKcG26n265hbKdrqqWn19WENDSAPbAYvdc1RszWzAsAaxNWqXf48oTajp2SjWPSsxF9",
  "key13": "3mvhDVrGCLF9TX7Ar1Yex8EPZ86VsZLDFyEXQgj7Uvij4fJSHkTugXTQKsXWohuA6z1VeMnx4RSqbrHLxeYmtGQg",
  "key14": "qLnDdL7zgnmN3DAj4oihqXwoAfzVzoN9k5sZRjYUSGpN12X6xvvJv3hxbTNTFuxRw7biLJx2SH7iDuxWvwARXvR",
  "key15": "4U5kgLfxauy9ohNgqC1V7NDaCDYYoJyGW3fbwzvGzNPNFsa2iRJHY25iMnmJd8Ewa33i6otZVM74HdRDMkAYG4Ly",
  "key16": "3t6MfcKUjVksW6N1XscwdnQHQqNFmoZ7ErNLkdGSVSyT6vGY9NjueXvUzUxN8RXa1YBLSymVNHA2AcfvfdhBJjoo",
  "key17": "2wy4jxrBdbqWTSCRd5mtwzTjqMEUJAZVPNsRaML31oEX1xsARXXPHxpefYWgruzmS4Rk5HuwuArigVTm1WMJuXw9",
  "key18": "2yTh8c8pgw3AhvTF9uKGhnyjt5Sf5ku5Xj6jW6DUPUWnQ3LAgCtnDrtQNjqdQK9xkHNGmnRjKVaN37rqosU9EXyn",
  "key19": "3m3LBSvVEgCAbF6785wAryAfN3CDy1x9q1oxdPCBchUUZE5FPCLqcRi5Yub7peEovfMNYEBQK37WXxHR5g78C5hk",
  "key20": "4f5H8gFAsopZyZtfkZpUn96VBaGXsn5AgR2zVYS5XoDoXNcqEnjRWZ8Ewi2a2xFC5KG8iRRrdwczekoVED3dCUsi",
  "key21": "7Remaeq8KVwwSWaStkQUJFtF7NY9Nu1SoYzKuBQbo3ixW4RZUDfQgmK16K34Eg5c2s53Ez4LWRqVUS69h4bw2Uo",
  "key22": "ecGcUVS733qVwDSpAC8GSbtS2JHHV8c1VYSy9pi6PqZyDrmKCUZcxSALchqJduX2mrULD6KzrghhtrvufzYCehw",
  "key23": "59cqcsK1PnMiU6Sk1b4QpHjPLeazE1mG4NFAkEes4E7wmqtwYeYuBaCCx6PYnjxPVXLw3AmWrT6zRxaYedsDr259",
  "key24": "3MTg71VfphBEMnyAuSnv7okqaScr8MS63SqcKEytvEhvbGKRWD2r8mo7s6ha3NkA2pFPfi2tFkZMQ3ZiMkrLXGPq",
  "key25": "52iWqrZXPukDtPZwVVgk7pdzxDSrAQA7uZTPM7m9LGNaK9n4JKiMBTPj31FpKQdE81Az4gefzPdm7H8P3PtaKuGh",
  "key26": "CERZDcVVFji2xPfMxjbbU8d7yMKkHkiZNA5ntMkxU5QGHKY5NDRhCpUK7y5xxCsYFQLfp2KaMLJxzZ65Npb71J3",
  "key27": "3M3mRdxgxKXXZ8kvDfdu9tJnd25K3NaqFrwiAbh1dkPHsTDhzqKQnsZqu9GeDb8sHL3swkf85F3aF7e4rai2p24b",
  "key28": "2qSGtPDnRTdXnZNjZjzhp54mSeKNAuo6L1bq4VQFS81Cv6zMtQ8aUTTGMRuWF3wpRPh26MqtQhsxfa5yXdMzER72",
  "key29": "4NPYzDWo3MAvhHweJB1J9hBSNSjTB2Vcxp9uRpaJrQycJ84WzMiATj1AgLsQGxq6YqEETPqMqHAPNrTVKAQQ8WEC",
  "key30": "kwotkaEV6m483S8w7xnpcnqQM3xPkFpoQvppmk2ikorirxj9h5B23LYZX4Q8PRVsDYYeUPv3NYn7ksmsp7gHiW1",
  "key31": "5HJWbyfSrRqGavokNLiKp7NTq51ka4xoKr7njpjZMyHPxdA9rkSF2KwwGafbZioU58mgeKKCGrW98GGojC5xtTek",
  "key32": "2adxCdzAJd8eg6Ry6VqjnCcZVHN4JVsKix9idBdCCJ7CA61ZYzHKSq1a2WcCKxuGBFTa6GBt6PyaFHuKZCUy4a2J",
  "key33": "4ePYT92oX6CedoreSPzPGLk7rNrhRCiS8kzbbmsznLqdj9t7ygJCB6RBeWa3zRgXqT6RkLLw3vxs4Nv6MuFjyW6F",
  "key34": "3qBLeYZbjqFZd2dMiy5V1kZQKBCBx8igTtyD6DPRqwxjjHwENo6ERk1B8oa4bGCnvzABYXERjnfxg3nf8BA9uxrZ",
  "key35": "5Gz3sHmU1N2D97Ee1CLp7PqqgtLcYpwegRhbMGid3Hiz3n2QG4Kkjz8LMgRAhZj7PqZNkgoiRs34spbsg4CNMbwA",
  "key36": "5ThVeXAAQj8Jecvq4U1Atki8uoKDSDPiaxbd4oChZ7uk4dx7ee2xLY1Ui4qVjUX7yEzto8QkUCQja5SEka2EuThA",
  "key37": "2f7tcmbjNo9bAHguk8jRTAhzaFq4zRuLXmeyWzbmCqR8LnD3kKebdvUvdjEZkMnckCz5dahzFcdhzjxw4MWN51FZ",
  "key38": "47DPWMkZD59xxnMZQSCdQhjsQkZYzHUKLbYR1PhFJUJkZnezft333KQKjRrAhDwAqinKNZkq1fEWktqSW3Zn6PJL",
  "key39": "4QDD8TutxYGU1BXRc8VatmQ3F6LyCGGNKv2Yp8abf32s3MhJ5DLDyV7Loi4mpnZYp4HbK1tvBSjTCRx5MW71BLVD",
  "key40": "2ZpkxCBg2fTTm4mZZ8bmuC8adYXpz6RtTQ1L4uyLstuTVpAMaufJthbsJdMiWP6ipaiAv6LXZjSTrBjraBb4AEA2",
  "key41": "33YtyhU9zvSd4gmXygAVjryppCazd5bLV4VvSK3xMzougyXDWxrritdFFVx3pz56QDC7tE3gVqmX88Q2V5S4fWi5",
  "key42": "5FX15YdxnB99Z3JpTeifVzqxHgKRecttye33iNGh7BURdQuxQMGHy7dnAWTKZXT7xW4rLFBPfeCCdV5fnAdS5a6",
  "key43": "5NdrW2QcL2pQawBUKuyYrQ2pLy6mBgfkovv1GhU7XTKHoEjq2i4HFJLizDCfjUP4oepJ2RU1rKb1ZdKYKFZzXqGd",
  "key44": "3zvnqegit8gE6AfnYxxX4LhBWmgsJ4dVSPGnvdqMLw9bc2kNQ5UFzbnUvDW3bTQHHavqnoPJpRA1h55gPoFgx7hq",
  "key45": "2DoneRLfrVDe3Z5t2qLDgvCDUP8THXd62dS78bjyWMexjA5yC8k77LkRYBTE7UEaexMMSwXnuYWnVXhi4cyHWMzf",
  "key46": "5r6GuNN1WKWjKURXrnFtnaGtSw9fNahEVGspznfTpp1bwJS3eitmg3gqudDHXB6GBpNKxfLbajYNv3wdH3MQ8FR9",
  "key47": "2vNpwbo9ejUa9gnbN8FcQVpbh6MRCBLrNLFAA6xqbkCXU8SeHuUaCPj1EdkeR1BMAx2sRY8nVmKqmKscgFbcnsgd",
  "key48": "25G7Ka92XEME8koHfcU5RUFNp62qf5Xt9s16JMoew4JNuitVjtyLzaHVPgKVGLRzjDLsY74RkMUoxDBdN9Kj746T"
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
