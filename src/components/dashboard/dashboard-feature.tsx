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
    "3uBfhYTgUpW9WQC9wcsw1kTkrWw1wa5PzHUyoycijLV9q2EeEMXNYDjGxqpTQi6e5awf87rnGCtBgvjYb8GCL3us"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nfQX59sJSBNb7hehMP1nQiqirC7mXnaDAbfq2HxYLxeWdpVaMXoUa9HEw4ad2ebDAY1GYt3Dycksha6URkTEhPN",
  "key1": "2MQ5NemfFQRZFpsHFrXkTkTpBpUjCihVpCgJP2akiu6KjfsHA72PrjGn3qTtxSBMpSXUEdDwmsrY9G1bfbmDyPuD",
  "key2": "tZ42muKrtcfkBMHmTTHctzTDjTPj8EmMwaT6szg5yZmVQcH72LKo3qCiiFgrEoL5ytRHhkWqkPNNvbUqjF9Dvcx",
  "key3": "46vr7jkVdzTdCQnaKbXPsuSBB5uRVFkE56e9qq6t2WhyV5QpnZJVY9dE4df8CbLN86tNroQr42ZkXEMPBtH7RtvV",
  "key4": "451BHk8izmmDnJUQbsLZ12KpjQtyTkGw6QiVC2rydk8XgFPd2cJbyZ9RaFmby62x8Wnw6LuzEgpyoym4Dn1Cjofb",
  "key5": "ma3NgDf2kkVq2YF185TacLjCUfbDoDX66EoKKCved7ATXR38wNFZC8E47psQotK18D4e4LtMTVXXk5Vi12T2d6e",
  "key6": "qXHW4B7Km8ZLVdaUjxacd6LnvghjH5D7ZY9eVBoTrgxTF6gf5KbXPZ5dWvgYS6mJgBVndCVWPgT4ZD8RtN7nMnE",
  "key7": "4juyC9NCiiZ84K9zw3fa99z5gfFcgrrjHu6nYNSkGxuaMgopVH1uSDdfFsStmqzbGSgqNhX3nTogf6KABztA5W5S",
  "key8": "3C6LsFbGvFydKuEvCi56xWPiHdPCQBweBWcc2rsEbYFk3qZPnocirpAHdDxpRSD4TL7trXXFfX7bDDf5MZRCufiq",
  "key9": "4g62naML9nANCRbGG1JwheX8hvm4fyQjoK5p8V4LStaN4T4MVrfEG7FbXnyrFRnoD4UdWfVHsygiELCUuPyowgdh",
  "key10": "tkX84hmEyhaVYMVEmqFPRMxTBhfTB9gkyjc9wyeJ5ddpdTWccG3usEgezLqWnbuGLHQyGeCNi7TENZRnumjBVtv",
  "key11": "2xU1e8rAKCirZSPmdjXGTXncZ3rQ5B12J5WH29sL3Dpe1Gk9MhYNQByhV4uM6v3DdDpUv8f2RhgxpKKuGfpgkQS",
  "key12": "3sB37aMp7NtuRJFq6Pjhf2PVVZneFc8qT7veuStnZS4TyNCEwLHPnzEYtfX2pL5tmXVEUmrKLAX33rNWFT4CCGQt",
  "key13": "thyQQhQQuXW9dud4LjivNpNJE9YeWz9Wzio2fSESKrwRNay7kAzAzSM2zFzQ6h4mTAvoSiue1aeTwKdSS7vjPcD",
  "key14": "2tqsb2swhCLNMHEMbW1xF3RYvF1JJYqvyYKAn5fdYZnBUX8pbpR5GXeBiqhZk7GbiDjcosJyrrpGBiVWAfDnn7TE",
  "key15": "2M3EqQR67XEDVtEyuY24VW89f87gss6PPZmBioBxDgpiDxy265n5aDby4jMrXV3osBtCxjdSFVs6it8YsFdbynPh",
  "key16": "5f1qwo6Pwj9aJ43sHTFwRxaxkaEjiJZ987sPbUrxTWtUbcc28k7FrFa5BcMvNxLBxiXfJAPpaFauKH5QMPmLm1n3",
  "key17": "4JdDQe1UdXvRrVp4FDsB8AqsektyWUZQZdUnVWd7MdCP8Ye7pcDcXDNqjsif3KqtjUoT7pv9VXf6BwEQvZxp9dTG",
  "key18": "njsjhQN8GeyXusAupyfg45BPoTepvMxXbEHx3kWXKcvzBAaRTwVqYNakgvaPp3ZXQgb7So5cmkRLXgvpUCEVKaW",
  "key19": "2EYA6T11f6Begx3jfemTgXLGiRkZiyHrkazyJNBHAdj7WLyBsGCdmmu7D2JejFWKruQ2MkTkBK8FNR8DtmR44xrK",
  "key20": "4zSyTvGzhWJmyq3huuy2eQq9d875wne8KY92bGe6xz2zDkEmRByP7CRAxD9hcNs4SiHbYMGWvZXCNzPssVXtfsNK",
  "key21": "24TXRDQxdriUL2ANaAf7z4c5tFsrbGpogg3PU9CRrnNWgVvz6KTwsk6HA6HaH9X8ndRYhi3qNSzRRyJVwgKaNj2a",
  "key22": "AoCRjwp8eLQemAfzwn3rLiyvLZLvj2dmFPx8ESS3VRrfF2hS77PaTw2nY8fCghbkRA6gTYTsApKfFw5JDNPwj1h",
  "key23": "3mzUqCpmgzHECZLdz3phhYtx2GWWxU9Qp8eibZUBi9x7YZRT2qvKXSFmwxeKhB57EcupRbaDvKc1FBu8RS7aZmRq",
  "key24": "58Xv6Lp4hXn8bZBbSMjAbALFUqWx17W7cFQnpYhJZbk9iMDz3HBxUb9UaRocj7kyhQxMXRGaSjitc48BuFuC1CK2",
  "key25": "2bzzPcn1kQGvTTgUHNvEJQcQAuqwDYLwhjMFDchngQ8DbxrwZVhx2Nx7X5kidr8AVgp2u3zN739FAETjCkZupMKV",
  "key26": "2xtQBmzAxRPgEXBtfhtYJ4w7AmwqHHGQ2hga3FL5XGDki7tCQifcNZXZj559zrLJytdRKtA99aqL4F12E2TR96QA",
  "key27": "2Zhrd39MCgc6FPS93ir5agcBjM9z3BC3mFiMKzyGHnAxxgxQTSSQguSCmXo5E4kB4AaZX7RcgvopAg7pckw26bYP",
  "key28": "28T2Ucivsg7umTA1XCvCXFrfXPrihe9W1W6L8T4ZXpFcNAYDRyLHtUiaHrcs9gDukdQzG3V1pMiUKPdX4hmAoF82",
  "key29": "32s1NgmHwJZaZfDgofaLBb19UZTULQCvV18sNZyZU6GYyAw1hRHK38Navzef21ARo72R96JfGPyBykar5Yk9JUee",
  "key30": "4DrmAiTZNCzE7McdJPm4FBwGqvW6jFY2phqGmAtro8r3DzEgnrZjGdpRmDyS85eJdsDkRPWiFErrJzGqvt37BMBD",
  "key31": "3uB6LxxQbHCL7upqaVqbLuLtXtRvbNaK2ZYbvSxAS6FBaibBq9R1VAKQecrGe1XXTvWHCizawQEwRYJVdg49Rokz",
  "key32": "5iBWkuCQVHpWayDt7H9Mtj9iVYE7RFSftWUkjcWYTJgyR9ydPLPchEJhfe69CNNbf1QSVJ7rvt6HrjwY9DZLfVw2",
  "key33": "56buLjqA5GBYDNh4pESxZgW4qi7JLTWNJ32pGZWTu31CPpPtSs4YfZVczdzymva8x6H6hMAkCTrP3wi9UDKM64ZN",
  "key34": "2E4nRkWkSNGGRQxzSFZtEgrGuiDVqsh1aMo9ZCGwAmkwGWQbzANPsxcnEn18U4rQ1ryeVskbUXuxdcXi4UxJgM6",
  "key35": "4JgRnLbwy58SxnvpaivXG39NuDYmNqNo6H7yFq7K6Nw1ug7GaMmQ5gGxj1DQbw29iPYCfpUim6tCxNkNGVJhnmgt",
  "key36": "5eNosRpPyewk3D4vNoMNmqYxouHXFpa8nbm3QLmFHdwXQjj49frBHSxtAGy5uhQEPvkJt2WGhPSYqTwJg6F1VGKy",
  "key37": "5kAovzjPKjYgjTD1wjWodq32vNs2KHqkR1AtoH3dDgYwAtfgpqbpKBPnCrLoTED1HhEVEzD6epySCPKj2Kcv7gGY",
  "key38": "XibyB29tTfPFpzXPtUqMMoq7acHW2BCP5T8mtP6A6VNbdKFwrDsT89kYuujp5zyhBx3XoZmK9z2DuyPhp2CEGsH",
  "key39": "DSF2f1xnu3WEBJMP3Gmejh7FD6AxGXM2RXXqmbm249JcfsQQyL8JVnfwHzUYBTL2csK5aZ6wEAk6QUwoYSjN5rq",
  "key40": "4Hyf4t9PoxStXdsnYJJpWWi3K1NCvZ6RQW4LTKJhMY2kqLBhBZfMbYVyodsXYvS63r5uiJC8JBMk63qSUKeyd1MA",
  "key41": "2YEGHNbkqQC32E3HrC15WakxPZPTTVq3yeBpVfbHvjNEEwTjG7wE1MgECfzmGXDHN1YSA1ur9HfEAKKzBMQpvAi3",
  "key42": "mwU3E55PoHvJ318cLmgN7AL576Xoe79ATeApcfBd2Hvmb3KRP85YGnuREKsixEovAQjGneEgpJgRqX8uaZbgGV1",
  "key43": "5aQqQXkfpo6ApxVbRFMbDB3EULmdtpMWmkxzi9Hyi59EKsdZzAtaxLckcz4n9F1vK92Lgh4kvUG1A7MU9MjKLJvj",
  "key44": "22cptewhn3AxaequbhJEFGRwtwFETyamKDQRVxSr7pq14B8mS2BECihSUPmB6FVYmVFRNkjj4NcynoAr5W4Qbwvc",
  "key45": "5REUTePQtnnjxq8x2gUZo9yHjoPzwwPY3mfXCxPDcMnbnEAg78mJVfX5DQvdcriRCVfRqGDYgk2T9DQPjAi75F7W",
  "key46": "65xEqhRgcDHSuXBTVWrT6EKMBEMoBnsqZUjrwEg9bPbEKJQHx1eetvRmNsBTEEBWuG1k6CCqJopitRMPr4vzHqD9"
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
