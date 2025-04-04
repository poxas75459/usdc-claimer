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
    "2myCJu22PBrAGgnHDAQzJ6cTczB7dEpFKsYSsN7DW9xSQCBoyUjTLAk1dieWhkE39b2TZra5dXfoWwaQzLmgriyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28vwVZNcQZN7FirgxNRg4FRxdkcxU8mp88SS7tCg65XRGQtyCbm8ZH3qtLQqvjXQxMzqCz2mPiaRkTRd8EthrNy3",
  "key1": "WMmpbcMuwLPzKjtY1zGZA4eQGgrFGYfFrPZepUzyRBo6phwkpZTK1cEacftvAEPxozyn2EUu7hc89KQBvNu5GXn",
  "key2": "31mbLUU3je6Fkt3mP3MWo6hAP2GKQrQGSNMoSpskQbAk1ZzMtETdf1jaeTd18cc6v2KqucGoBVjpfdZ5rknm4P9o",
  "key3": "43pmBJ6SWgynViY1ia2F8fH7J2UyoGSud4L2hGTptmeLYcEtw35LdXjfs58qh9ECRS1qz56xdhLAeap9MJC1TFmc",
  "key4": "64GeNWcBjybECLGEHUFTmGzQa1cCwJNnRkz97tPwb9nDYnpSJQThD7Ug6vAWGQV2B5pbQVgCgGuiLXo5hWCYbeh1",
  "key5": "48v3aNNmSsUfUCi36AXWWtnSb7v5cMhJbBRUhzPKSK6j8n8cpuoypCqPevp6zRppV35dmqxGGcDyepGzaUeeL6xY",
  "key6": "35Z8fky6Fzif4RFAGNqpv8xvwgaHRtoUT6x6nnf1P1svnaatCDGi6XeTWtxChVYdanxrgmUi8CvhRDKj9gPXcfxr",
  "key7": "34AN5zcZ3ZNkUvpeCqtJ77W4D31cDDgAADQ315oDw1sJragLS3N3nG1QdLYVHtqXuhy2ryNyjQ6vpLti1C2YSZzM",
  "key8": "2DihkvsQkt626cN61AFB7MoBrKKPnsCBKSjwut2JPH8fs5t4UnXeQ3zbFdRELvc7GRP3Udhbi82RTJoknRCBW4fi",
  "key9": "4fhAA8EvYpweJrNWH5ABDFDvZa7ttDiG9eRY3hfQ8bDQMJn9SMpgwwudziUUkT2YKFL6zDLqVeWcLSZzgSRR1365",
  "key10": "4c5b2Ku1kHCTefAvCcdQe2k75MPfrCrt8i566Lf4RqCnRTMM6HC4DyzMrYL8cEb9CrxFZuLANGbSKJDwD8e4bjz8",
  "key11": "4tDXCWLnCfg3VBwNNAyB2o9qNb8CD5Xh7p3kXGqdD5Ct7Hhxur2uytkiecLszsZSTjVGmiwiXXVSLqqsK7cKD8Y",
  "key12": "xPDuTF8A1gDbmbpRTn6hbikRcFbycmfSyfD1oka3dPjNRyAZG3fw2c1J32GRrD3inKJeAZZpDUcABUkh7eGjyLD",
  "key13": "5csmKhRKCocey4dC3cn1nmsPMyavjT57Q9z3RiXb99V845inJ8bZ3uSakVMyY1CsbL15sCFbM19hhPdsWno1t7DJ",
  "key14": "5Zxzdsq6Wv6mDEFWeNcZSp76bA2gQLizEZa6Y4tFWbFWy7TKpbWb1irT5ZrdkgQkQ7X3KiaMLKhDFRshm66bxheG",
  "key15": "52zScNpN7Q83vF1E2wxz9w2ovUBbEjiVEg7SwSqjq9quLKSvnQrBPiYAKvHBQckR1xj8yuTy3vXFm2G6NxKwsUMQ",
  "key16": "5Lqck6J4H81HGebhNNo5Z2oDpaATzf7B8D9HHGCVPeNF73z8nFRnevE28qRahb67FeXwWYkkTUD7csxGtAin19dP",
  "key17": "4VLdjabwoMhaDtJoqGxVf38nVKV9tWNjp17UfHoUF6F4vB69iGq8srC1psqVJrjbK9PtDBuwwgizmEW956XCPzL1",
  "key18": "DtbmgsPBdomttJjoK9veFdrBQJ8cJiaZ33dhwdnoYUV92HeHeH2ToPXKNfUX75ayUqiz5n95fWFbac7HRk3kKB4",
  "key19": "53HCMihpis935LFwuuK5SF24shZky22WZPsBHdKYEDSdmtMeTufLVEMdQ1Su79urtrkWSYYAk1YMXqmD6STpUWzC",
  "key20": "4wAhDbdc1ZFQSM6uaumzdpNk5q1iPi5UVnDKwP5MdSErjtewLrkXvMc5MYBkSqYftiuSPuPDmZxmAgLWWPKMLsyL",
  "key21": "iR7Pg5GfKhCcZxEt7kviKPzWakMwFpsRhHNGeKvPyi1Yns9ydBsG1fgnd3J7ciobMuhqGRAvS3sodjSjXdYFnNt",
  "key22": "4ABbxApvcodHQD7wetAk7yMVtf6JmS4rsjw453wfic66fzAi5W93mUeru3KWYigJo4jvWBRbNr6H2HqCwicx9cj",
  "key23": "4898w86Vt1jzzxYJ7LwtdkUEEtVZFVvCLu2EXkqFQERfAzJSrufZER5vv84AJw7TjfhCyyM4fvDjgnU95mxMEezx",
  "key24": "5MKmBNnSs8mTE1Vzq4krMEPSUhAYcLiC39jBNkx2dt5XwsLaUsUzQygawqaYP74zQk292UKbmRcvZszZLtz3UPCN",
  "key25": "5Wn7MsQrfK6VyXoj9URHy4Kjq4ifFUVArXbPTv7n8xV7zxfDvYLWjBR3UH8MnfLD8mGcANPe3bLKKqgYkTSufLD",
  "key26": "3X5SznuQ61qJJassVE5rUJkMu2TBe1SKqZxc4bY2k37zVYRW9hX5v312FKesNDoaRrCYeNCYdH59AjJMds3MH2RX",
  "key27": "3DYP56Jb9rAZwNdhqGwutbJu9euTpzJM7YmHorEUjdphtqkCAGLhYEFKfR1YjuTKYDJACNR12ZJHvBZRUrYP12G7",
  "key28": "46ee8dT7AbFm7jcT8zL939unrPsh68x3SSZfTzAYmbHwiUzV5CjR6iqXDL16pVi2mtcVfvERh5hKuPNtj5Pt2TQL",
  "key29": "5YKXxxpco2dFwEzSpPbGXnxVYq1Gxzy6sT4jJJGmCvZTjj2sdturh7Xv5Lp41u4dpjM8LZxr8hgLNp3CGcfDRZQT",
  "key30": "5vuAhocRP7ai3tq9FPChP75bcLDTjKKknvnJ7FKmZLb6gXx6uFdC8ke8dArQa1VjCVRxxj4rJraxNU9kfsqRLJ9V",
  "key31": "5dCzwzBCE9iQgtgmPyjrk3UqixX3uS83DrKq3a1UTuEkRVxWWYs8yaHw8N2yJzKgAewGzXQSLKDnVv3oB88YDGqa",
  "key32": "4QUcbEF9jrHvCspBmxUJVjxcUKUcE5cigwT4GKk5jDDxYoGe6KCdDNdspUDmhRqVVE67JuUYWEs96v67YvQycXkf",
  "key33": "4ECvZi5ub8NbZcWgM94j35YBAMZ6rneN44RKs1E8R2dteD6cjG3WPjJfGo9KBWsg2GrhvFiDAwH4YVhp8KCafLen",
  "key34": "5ncY1pRxKkMFDbi4qsiviBiwGjQCQR8frtYrP6zSZDeHrmyHohdAprkZzAHi1FRMmd37v6d89zo1cYdAXS67UhT9",
  "key35": "5mtNxkjmdVucyFsKQmvfY31K6ioYVWTCseBCh5kYjQnZTexnCidCiFUT1XyMfz1eqWBx17zGcFZYbGnzWhW8esAx",
  "key36": "HqWcVj5DUSTwbzd1PGMVuA79emMgpG6pFg3v6qYahYiHPGaUS6tzKRh3Ld1fCfYPzBPRqYwSgtwPddbfdon3b2o",
  "key37": "sPMU9B4QCAAYaZDD48X6UUDUhJ1YgcP2qEGXJsK2jAiWXSpBHJog7kYe8xp4hFtPccSNcew2VLqGqsBE718RaW4",
  "key38": "4tgBV1kyHnJk5TUTuqLKNtMrrFWNHpkAoguKYi7HAVdn5p2cU9S6uYUXAcYcyCof2M5ABmr1E7JoDjdKWQi4H82L",
  "key39": "DDRYnC7VES5vmNUW9tndkqZnpRZNTgYRr1D9nkxkKEYmGBi29TSr4M64W6ra4of7wfrLqdY7fHkAxRmuikAu4Wj",
  "key40": "32YDdQozWUREBCPcbXbUHUn5oMeMJisVKGWdbQSP6eSSB4XAiSVQb4mrmxzxoxXdnFQS3q9KDr8TULifQiE4T6ev",
  "key41": "5RMTuUwPbEGx4hLkcMhfajF16xScczejEhGaXtt7GizCHnPikB59jRuLiuEFpr5h6st1Q7afAQPVDbPMLGz5GpZZ",
  "key42": "5h2k1mPgsZga6L2o4wMJsdcj7fznTkS8VFxkKGmFnYPQctxHg9eY7uppS2AqNmygH6X1MjwiqhDGX6kfZdohBXhu",
  "key43": "3K9tksP41wMRXWQAVzyb2HSspYCptNZ2m8xCCt9mGCVJuKJWAzM4Wtgy5iBkhgBhPz5HNkrWK4CnocPNwi5RCHsb",
  "key44": "2jNCQ4dumz7EuA4tc6ym3gwk3YT7kGLsFqAXURHop1F6AKKS7y3gKhRtQiQ9TXDC5zyzmhFaVkFQZiJRjKr94ov6",
  "key45": "3E5GMSNcrQrhvAZdVbALx75E2DLB25AQz5uvyeodG93NXbXN9cfyyHtDJjnbjcUcfUwfEj2yXxSjqbtTt1VTgGGw",
  "key46": "LREuxq8bYh1mLNc7Vy4GNGEGoBMKNj9LKxq6HwuL6ULQMiLzbumdy7pc5m94BrQR5vRBRCy15vAqKPHceyxUJxR",
  "key47": "5McNeyJeuXww21nFfodKNpwm42VUzox3zFQETtfK6VdGJGk8qULxnxENFYw27froWm9poRSkmbXjtsGbygGra1fF"
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
