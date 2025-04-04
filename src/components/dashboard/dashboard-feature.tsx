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
    "wqHRYWk1opdVsydDJu6M7FJ91nKsgy6kTGbZ4Qxq8G67fztP1VLpsomsMS2qcQWbzztqNXKYkzfPNYZYqjxy1j8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pDyH8SARHeMNXGqPZpAtFComLZR2NTQnkxwcYD2WZ1LBZaieo2hcNMTFkrxjoEcQFihKwV3qswrt71sEnTHvpWb",
  "key1": "GRAcVYn3xh4kucNo4Gvx4UMwLdWkMauxgnjqLZErnhhLtdAzMbpfupaLwsXXoSvx5LiAtFD6doB69WQChj2scaL",
  "key2": "2Xz2BKuLNEfwuMCVNwFMDqbTJsQ2n88h1CKzV7UDVWegK6QeZGxHbdWhsXRKnj8kRykaP5gTQcxxWqABDD9NLtvV",
  "key3": "3VvoQrjfmjWbFt7Gcvk2oRTCPfZFbNDXKvwDQZfsy5uM45JNBS97c262R9iTSodEGNBW9DmeLvC2mjP7E2kXisvs",
  "key4": "5c6MPQagGEUZesXdWP6zADqpGXfJdjFo6rzveBWEPZW21nB32U9mTyz22DNijpM6apS3poQDbH32UY8z1BJudb75",
  "key5": "2xZEaJV54PRBsMY9Lq4SZ12S8yzXBa8rmoiJ9uqnQpZVHaPmBhEyVvjSqXQyUWgZwPzXrvyvd5eAefTtUikwxiS7",
  "key6": "32BydCFwACnLkgHsr5tgGYHFWsgQjF7YFxTrPALkJ3443wtKRGQ3C3YRWKjK9waW682P5YsATWaJSnmhrz37n6w2",
  "key7": "3B2y1BS87XqRuaPBsKh9WWfwqT3ewsyTaQ8LhvT7zwJFJTzgxaMvkbgR71UT9MKDtjXF2BXQP6GNvUB7nWoXFwkf",
  "key8": "5geAgHTdYRHYFqYbvNrsf8YRfRvtisKowvUn7Vv3i45sWG9p5wDBgwpydGsH9pPH4R2uvLchSLkZvb8mLtNf6XdH",
  "key9": "64hq3Zsqry8YZaE2k3S4Vcjb8uYWArR8opa7FvDRiG8GXxHPa6XBvCVrHLLZ47SfS8K7GwhJGcZBqSKHXgGd4FFW",
  "key10": "4JRmA5spfmsaJDwdZWTs6t1J4PW3tMyi92Nxbtfii2Nho3wvunsPj6ZDdsEa6oehvQpf25uwuE7Xqbjaup4rE1Yy",
  "key11": "5rDNrm3ktW5oFbqx5oqFdx25HEHPCByRh6AwtKTC3nmP1GjvF2hg2mrPJrD5Ngr1wTUpgTD7DjM7aMYsd4PFdspw",
  "key12": "4tDfyzNpJbAMVfn1a1ad6Y5QXaFMXeL98ftUpyk8mdQSgfEMxrqej4yTZYoyh95DQiethV8oVhbKAtJZv5PJkres",
  "key13": "4BaUdXcRR4AKNWjRVuo5WqhxQ9Kz8ozac3UG7z2eYYhrc1kNgskSvAxpRKJXZ6LC96Y4CwE1Ubir8MUhnKAsevUc",
  "key14": "2T1jhuusuHBigJZS7cqqVXyfvfgen4Mrnt8NUaXyAXJkh6zqPmuYbD4ZsEUhabdB6mve1WknVH5C1J2HaAcX2sd9",
  "key15": "3ujp6JbYAeRHqUF9cXTttfw4dzz13gfJ178T5XFFFhLf5kBt56wvgi1H1MLvXoaPQahiBkpBLNJGSSaSsPcjY77e",
  "key16": "5kdfrnLmGDL9rVD3cofZ9MKy3sq8TjoruduMeizcv1EnW2V1DY1K1tK5L2GgW1yyi9uqFUXLedLNSrEx6vXkbCKX",
  "key17": "4y8S6b9p8WNFogct4W74d3tZuDtrbGzGo9dMocban3TzpbWqkKdJFYiZjA1dUohjy1vHn5jpYP8NzsGxLmC3KXxK",
  "key18": "3Jaqe8QtSSwrXrCFKTDiurXVi9d55yoCQtN3BwvdpBgEh5GrPbmbY9Aratou3Lqp8NBTA7yv8dRh3iUQrPkbQtsZ",
  "key19": "27J8vim4vwnEmM1hTvinAanaA1zmiFDk9S6ULDANXXdepz347g1sBfRmKFhn6PiZ3M7bN9ajt5uLPb8TMRpf2PUL",
  "key20": "3VgkojS77yEihhqpMU9hYmfbnDExvp7u9CzChirbhgZA3Zjj4mZqjNxBcmwGPNQabTGsVVHN1DELSuLUN6Aqb5kb",
  "key21": "4SCrDFbcfc2RcvQLkU83nH9Tnk3k4EyPXTGLYRpeHJcYAeXYCYH5t5TH64mz2SBtefVpUq6ZncYJx3Ch9sy8Sp8G",
  "key22": "LKXMiDQvrA317VML49nje6EkEssGcNXGAotsjryeFLe71apnMWTWpEP7eshGG99WXncxNZPSY7bJ7g5mY8fBkRA",
  "key23": "5vQUrWcMuzuDxsqEFiUibv85gXRGPUkiqkUbHgw8o8oLcusjfdAxVLPc87fT8qUGT7F16JtgtftcXL2jGn3e2gED",
  "key24": "LDAPNk3UdGqCRnmapPWdaW7E4mKQ7yWtSVcLG3Bhom5iP2zeFEbGBz1fVjf3wMZxsYdLhn7VNMZqRtowiPZytW6",
  "key25": "4yAWEek2qiX69t2DwwEV6sQtTFDnD8hE2f65XKs7Ex4AjpbyrDbxnpXmsyAU8MDTbaBfTe1gri58EHD6hLX6zSix",
  "key26": "mADTnFaDz8YRHE5EgPoyJkSEEdAXRtFqYZizSXTn8paGSd2yG6jJJCMAVVUWVAdQtt3LLhFVsVPJLyAbKHeXwsz",
  "key27": "61SYc2PQCFuEeR2TJ19kkzLofq5FpCuigG7M5iAZyrkWCoYdqL3eSqxEE4QMkiNebKt3VNAGxbiiTgF4tUP9oamj",
  "key28": "4dM7qA2yi74b3xVzoLqsFLy2ccVRTMYj54UAFzBzmepcXfrEfB7cZs2zzBkLTKT2rKHp6epYvWVFe6FvStnnQcXE",
  "key29": "rhnNKpWU5LYT3mY2n412SE912HVFjCvXbYqNVr69up1MbvZ3ZRC5dK2dufBRocKzgzwZdctvAMWLoPn4HdSxqWX",
  "key30": "3Bwpok5c93pvUzt1CYfr9ywRCacLVkWL1o73oLZUAJa8u68efQx4NhqeWSsYLnwoze7frrgACWr8MU5WfFeGbsgU",
  "key31": "cvp2C8otgGrwyyDMcmea8yHkYQESKRf6KoDBfHwuAJ8txhh9KEdXYUfVxWfEt9SiPaYW2jYfAebzV4hvmBcV62E",
  "key32": "4DpnDuZJ1noWroffnLGoozBWAuS4LvFgdpHPpMUsMsBXYXLwyccQLorpyYJsYir811Eyo6Xzjx2Tpp4bD3wzqgpE",
  "key33": "5688iz6THRHiNbWfxfvBgyqZHnFBYfanBNQFSdWqvLzrjpuuQfAirJpPnZa4ktM63jYSGtdRgMktYDArAqcf2UT3",
  "key34": "3u9rj7LTZAoz4rFadYXQupKPHaPryHm5peGwHagustx84gudHD2Vs9wzAmdo8YGVJXgGLowpGpa1rwKNsqe5pDQB",
  "key35": "2sUxkuxos3pknbu4k78TTPbMyFSEH8yfo3gSyKqSSFABRAezJ6AkgRxjkkuZF3uPb78jC2uBUizu5CdR6ug3RRVV",
  "key36": "5yuEahkaGvWWtdEDVB33YnN4Z3PsfKTGuH83UAu8MpmfJjCe1LShQWX54DPJVrch3EwjNDsYdUeNUhhgb3VU9oU",
  "key37": "2ca9bj47JgHegH2gUevF3iaqpo9LH7QmRsVesbGvdKiWM1VaKD8ByUDDhnyVvGRWqztAj9obKsCc9kvQMiPKWTnn",
  "key38": "2KMtPWk482kHgMgm6ZQw3eQYbWHh7bP4CL6RxCGcnppdp6nD2p4r1VexRQYSy1Kd7Ur3DKbPqWrvaK6eGehWGemi",
  "key39": "GtuM8qRvuMxrSBNZCjffoG6RG4vf2H6kC9cqRVckKrECBncuJj7iVjatew8xvmjcaqzk7n9YCNNXAxSPJpR39XN",
  "key40": "3LLZ79i18DydztB2h5QyKjfehnbkwojARmi1zaRS1fnwykBWAu3Yw14XuhdFFeisRpz1EWELsE4F5gTfHSHs81L",
  "key41": "f11dGsNTv7cRorBefFtaKdPACupMJRxYRnwbGAfstxiY238oYkHD2GXXTk8GE9K2trbgUbwbfSuZaswk5QCJzv3",
  "key42": "5EVsy57nGvnAoHkSmQ5a55FSwerfDvV4xFBHa6Zsbh7pLHTTubJ1eeUQSGCUUoAywrBzVANRK8pmcbRdhaMtfeqb",
  "key43": "5yaq4tyboPBpWmgDamc8GbqUDKAExdHVAwMxwaRPJvG1yXTXjVFECJ4PT96Yv8rtji6h7KAbwamjgtDF79ZLKNZw",
  "key44": "2razotY6poeZb9iNucDPBpk5Mb76fMXyMnzNGHwC2eQhBJEHfzWWa5L1B1mtxchRfHenm4x4xFR7iiEtSy822fDQ",
  "key45": "2tNEp38XKurp7b1ui1seSuhknMjAemYhsM3iRgRV51jDX19S6EE9LWqSEwby78Vh4dPXkx8cp95Wnwvpwqk7gfhY",
  "key46": "4szMzHD6WmTpi44SoLu8g25fMwshYZpzKfW374jL6BgEZujvjst1Ahjdj1BzDp6YKeiGdAb1XdKcBWXcDuFrLrNj",
  "key47": "5gXND4rLZVah7K2YUeSJq5zuFbVCWGSNC7oyFA5ZRhLCop5o1RDnfgwrZ3qDrTZvV1x8rHPogC9BSDHFV7PSGwqe",
  "key48": "8o2W26KdAez47ttq9q2WcxDGUdRapz27X6aY72gjEC5zBGoCvHywX4cEG8VFtjQFRRopSJ1CRwq4rQUgfQUELAG",
  "key49": "5MX9y5nFTgWpMiF9BLbQoMG4P3qUrTzjLk9H73MAmJFhJ8baVKe96w8SPaDvPBZcKSMewa9BN6DpUUVwnBLrBoTr"
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
