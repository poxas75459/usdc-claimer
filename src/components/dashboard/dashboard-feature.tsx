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
    "4VFAqeHiHb19w7mNxmKR5nACycXHd4pAGeL68HjFRw4HC2TKpGGGSJ6TatYn1kU3fU3TpuYyLifGwyihxFvcT13j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NMG7CztuTfCrxAWSqwT7KqUry3HMPF4KMsDrAGrzCyxJE7FDPdnThU3xP6M1Ln27oNLycraA33SRwiXXw3RV5GA",
  "key1": "5QH91qHdJPxU45HK8szTG21byU3LyWd6XYWJsMz2c89fnqpR3Ugk96KpU9aHaG4ptWYPEqmKBUrDF8kubzbRnPhm",
  "key2": "3FvuP8wdYPWtWUQy9nWJrdh2oRkqAZFVZAzce4p1onayHfKspE5g1hZvesZXJ3FAkYhorjfkKC7xjugu1uw6QXaY",
  "key3": "4mBUTf4MMHchuCvauTHqQxJHTyKo5YB3RcNUHHX3MexNbRFncE4fc6zoh9Wz9cGzAdZakb85KTLxLzkJawAzWb4S",
  "key4": "389LzoYPMr9bLJRG4scdQqeYndzsUbHpfmPc8JXJZXjJi8db58rtUM5gzgH3nQSSmHDsfH7TEaNFS7mjNtJYxMuK",
  "key5": "4GPF7BwS7ouLxmStNmk6CjsBD3BpB37FDJcCian6XqtpRnmKnE47k2kJKaPHX2Fo6mUCC7uihQHrRzN7hHf4Vk9s",
  "key6": "52ehwKrTbC1fcYRWgyvmdSABrcS6Y95XgamDfViApbHX9WWzoY246foYwHMFXzbBAbCuLJFgaCSrRqsnD7XfN626",
  "key7": "4jGKe94sZGwkVWrEAFoiNtU51LnVxH9QiBEN3zD9diLqJp4kMTzaDFURGajiEDFZX6fbUHyoWTjfrsCzoST6XcGV",
  "key8": "fnKvbw7VJnUDH3xEFjXgrBVLzNLtwwv7TBnJJxS7gFSAxrRGkvpSMdgou1dMAyU2B4x5SUbqt8gtAALnNHvUHAc",
  "key9": "4KmWx7JdK7FsPbsFCMxNSYKabqHcv5QM6Sz3KpA6p7JP92edKHKY6yMAZLfQiNNcjFkAj8Wf5aFZNu4VnfRM7oMf",
  "key10": "3sWUCWhyAodVtnqGTSwAj27gyB18CTqwu7o38PuCmDW8JhQkX3bvHv6ZoWMKMdNpUfSr9qyvBrLCUuMNT1so1Pzt",
  "key11": "2uUpuQMmSxAkdoEQ9vK8aZdkwVeGanYZoAEXQpHg5Nwwue8FNhsGWCSz8LNunK3nWGUuyf62ixUBV7h6d3774Voz",
  "key12": "4em416XJKDDxzk1qtJRoL9JyPxsfNLJ7Jqt82K9m2srz83XJAoMQJ5fAC2vHm33wqyqyp8NgeFJ5jjBr4m8Yfq9Q",
  "key13": "A8qEGRjuJqSduHwXeqZz3HRyrvBmc3DEHr1nFNy9zmtbhYcr6xpimTHWGVSegwMSG5bEfgKUwPomMVxkdfKcVUp",
  "key14": "59ZKKUpjqBfh3TrMacxcLh1agNih7YLBkp3TSmwQZd5PtjAF1pihHQYnMHeh8443j9oKKtQKhUHCwCcV4BYwyGZn",
  "key15": "ug5PoRLSpTzEwAzjAUWjCfytoBWY3f2qkf5stmpM9YPpRCo1kubaJq7CcJeSwh5CLfsCvahsYVfsFJMnUvSoPhK",
  "key16": "3P4oB2qJBidyPqrLoT7i7wWfWV92DbFzn4Aty54FMhrKLP4FWA2vEFbWUqJaqjYqz7DYaqUnN3Z8GCRZYqURc7CT",
  "key17": "eyF2vR8z4jS9NPvLLZfwiR3AFPPYm6mTbm47qGviJK8higMc9LEWwfWoACvRcroDSM1jt9ym66G3w19jnjLEztx",
  "key18": "5Rb14gRQQZtC3MPyyo1bWtjnVZjpMj6z846vfPXw7ZzbH8DFUZSkzdfeDR2UQypKBmDZbkUYuDEHaDc4GpezXrKh",
  "key19": "CatZ9jMfZ6wkCQWWaheTcgtnML2XnGoViLBD9NDEzksmTVg1g5V1mUbpisbPdgXy1K8EApePBDE9dMsDitpeu6c",
  "key20": "gEkb2mrfXdKQwE9KmGqjd8t1a3L9ydnWbnaLSn13a7NmEyLmQXAKB4DypZo4K11UKs9Bm7PA6kP2vsTdGQuDwWQ",
  "key21": "52vw77CnZStzDaY6BU9GE1zHMVfbtzT7MWGZBQ9tunWxayryUTLv2eWrBaF61EKC3nu98Z8eYDPjaePL1rgFyhBC",
  "key22": "2UJc2QV1d2w281pPeH234rDwdR6X28JnBEEP763NhsusH9xjFAMU7jMdTZwy5mSvUP68LB6DLyjjBzubs7ivQMEn",
  "key23": "31LBDJVZcUrFC3N1efryZNni3i7nQebvPgfmdCeYjHTsL8nHJUzB4ehKUzn8dBQzUNRkfxpAsVa5WgBzycXduyEK",
  "key24": "26CxKTi5VHZNvgftKC8mpjaW4kftajhYV1G5FBntXnVFA1H1cjh5siZgUWai2wAMbJwfFewwc78ffC8ikaeW2EC8",
  "key25": "4LQ9BNHoZ6LXChWMABugKG9QhoM7C8XswZ3pDJZkJvgoDGQUk1HyGrv9zxPfRaVGyzFhYg1GjKbd9gQMSnE5Kfn6",
  "key26": "4UECAYLnDrd9yWyHMj8QNhwvkpKNbByekVoTNHRorvottcsW3eqqg5qn5GxNuZFNXqjDTzuNHb2BVtUa99fr26tj",
  "key27": "3sJ7SrGXZ3yzi5N6gbXjpzDYtsXzXAbuVmzdHfYbJPXRr2EEQzc7fXzhBgyJAKVgp2qaS2ovWsRMdWXsYFYfDoh6",
  "key28": "2xoH5SZXrWYM9qEDwAtqL6SfmQwxrxPWTjgzHZsimuUF8dVuGxfwbnEV3YoKBa8TMscoJ5gBdh2J2QzzcjWyTKcq",
  "key29": "613UWoN9vwRLdq7CDYUhrtmvg1dAFERmxhgs3VUDaFfzG5YrXkk5gcK9MPQmdoE96g9cv7gVPmztNFW31kXwWgV6",
  "key30": "5mUvvSWjTavF7889eJFmRMAtXie1PbMgb1ihwDz3pkaZWLLunMCPqnckc2VCdU1ibmARhVfgCEiSbdjXUP87AZe3",
  "key31": "mTD2V23Uv2YA32qAzdRDUbTaD6voFE2bVtrfnmd44ctKhCTJi6VBTY1AuS3s9RSaJBkYHtB9py9ijoFLuZn4Np3",
  "key32": "YZkxdkSygqxDwyZrCu1sF3JWfkBANb8vxSVFvbpuNBrzGppAxA7vGJgfdmTFEVTCJnj7ay37PEQMjv9TzRhvGmS",
  "key33": "4XgW676J9mUvi5ubmK6NE3beYXBLb9Rfxb73gs9aDRbbu8csGwxTRFhQjfHAcwBz62kvqwN9R8t3tMC4x3jKwUc8",
  "key34": "295rQEjPywyjSj2uiYNLLLKYt4tiQkMgD2T3MeKq4RHZcCBrdpBsvs7LSoijz8mkhueF3ZhkC2vBdPrN2Mbn7d6E",
  "key35": "3qbsphMEcwbMLD1UgFvuQUMZ7xeZ2R3XZYUjEjNp2ciWVMEfW2ZhkK5qK9SoiuQyKJ1rbXYgm1AFwEwr7sRtBDqH",
  "key36": "3xNANgn3enkVk7AfYScY8UxgMqLzTuiuV4yvZzQCnaEqPumboZg23zqacefymFxRDXXZziiVMcm1hKjUH9W6AtJP",
  "key37": "3DinGZ4oy8JFT4QHdwdB4iPvA4LzSZwVRBsY7r7No6XSkiA1n2nTyveyhSBrvJdTUtytaqj8n4gfdKkXRtKGbmo9",
  "key38": "54kjUweNu29k3mBMkFALvTWmaW1JVahZo1C5Cw8e6na4LrCrSdSFb8HA2DcRzjLa886NDvTvn3cDG1Akj3dA9Qo2",
  "key39": "4dAH3Ha9M8azezB8MQaQ4YC1oSt3C1znS9ZfkPkqtkQMep8tHA31AKmDdWdYaHNSJViS91LCeFMvEjqFYn1wfNbA",
  "key40": "hF7t2bX1VSArJmPRn1qDGfY2Y1sdxRK24CowMaopdr54vhtWQCwP1FzGX3SgJPbEAxQczzaHHx68mnQo2cS5o1w",
  "key41": "5NPngVo53SYtv6fnDPAE8B6x3FHu2hMEg6wfA5aXrVA9fUxgHHoRwmaJYTk631rRY1c7rk3qntVLBzCR5NW2mNEu",
  "key42": "3Bx3vJGr8mqJs19gvhefWhptTNUfQWM4ii2vEReSL3BMtXXbC4fXGvM3zCoRh9krypDMHmitiL42a7H3hcJuacc9",
  "key43": "44gxbRh2Niy63spSGPNEpL8C9PAANdozotZGFyJxJwB1CVhAfrrLGNbHrq2ts86DzLRa8vNaFadYyFtembDPt8gb",
  "key44": "3E7Q53azFpryGLetGoe1znCZkxehSbSQLFJp44aBR1aEQgxEQJhZCzohk1CZQLuMXUM5AxZf5KvQKFVKpjPf2zub",
  "key45": "5X4dDkGiWXqd1ZM7VQUFPcFoLr3BwFQDLT4PXvpmL5HChjnjjfeJK5htD7uJ5xsKMRrQ2ox5HXC8wVHXAQkvyu3j",
  "key46": "2iyXMc2A4DkPTbPAiCrSWt8cyMCGnKVZzENFKXuKrsvCjpmMNsrwpK9QeUczPaJD6TUgFN7AhwMCePEZrHUJuPNC",
  "key47": "2989bzJozD1SU8ADd2j32PY7HYTxi8hTeYfbdtSjJVRUMofp7B2kku6yDbJbGZgsjmvF4riP2amnAJF6ojYYKN9J",
  "key48": "2abimQbqV2HbQ6ekV5n4RpuPbnQEJq6W5c4dTDu1jeTKbJAFxvsJnGzgq24b3U1bAeYabRELYhVw6drmaLLmDgc",
  "key49": "3Drpfg8aq1biQc6xQ3xiK1ZKirTqJsGz399UZfKktjr5BoJY4zuaKjVRPQ5X61stZfRj9zsC9hL8cup3ZV26sWWx"
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
