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
    "4tv7mgkPFsHd6BHfizSvX9XgzRPgrwhKFhmsssAKKFQCb7jHoCDSN3xH6uZQ244ZzSabudmqETtcvRvFz74WY3NU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NWopJF2W1Xn2jkEUPxxekGGZ4ghVHZV6SASShBsTwRbvmqLJMJD8w9yurHMAevWknyRjMa1zEERsaBbbeAJynq4",
  "key1": "5UPYSLru8V5D1BbAUE86MTj8X4nuvWnrtdwKAVFvuPFDJYt6Qi5w3Ly8TFHmzQ84H3HU4AdU4r44kebAi9mkA2hn",
  "key2": "5Rikk8cPe2FvwPU7HCtnH48YaqJFq1crChLiSfsgiWiUKGvzSfKEWB2EKYUYnv42gpaxkuCMimhz1VBwuX99oJ8Z",
  "key3": "3aE8HK686QtxcZbUjm14jSqbax6Fbm9HENSssSv7T7u7bKgJHDmSnExGxambjY6zLQ1RL3Q7qkVm2Za7gjB5B4Lg",
  "key4": "5eSRQTfCS5bJjYEvrS3Gk15CRf5KUPN4NEHsXKYHgjRMPee32QJxkDmv5mV4WcGrrAfab77yxENSPwj5ryYLK91D",
  "key5": "5aiGaXPfPi9tLS15dbXhoEK5aPgux49fMf1x8ZHDNo2CdXYiA5yJHSyNfK9KB2n6CGsS2xtaizPFS6PBYuBFsmmh",
  "key6": "2YkYvYjZ3CQGR2jU1wbrbvFWsAaGVV5DyibVitppPaxoffjM8KcY4GT6q3FRU9t8zRB8UPt1Ku5a8Tp6uEFMYhgg",
  "key7": "5NxkXvnbrNFcp2DCWAvYpGZatYhQanx5tWiSPc8t2W8ZDWKt6YAYoEPsNftwBRLG1jusee3uq6WeZhxq6n38Hhy3",
  "key8": "4GUfaVQwvz4UmmFiuz6EhM1p48dyrxGQmu4ugQBUxxJciuEiYFzXXzTSDKzpr9pmGahxqbEaamqze19E6XoBNooK",
  "key9": "4FWnzQYHD1ec4zHeJmz4RMLqWG2BudNyWmcLXUP55PLSWABzRceRUsSKbJs52vQKf4Biajo8XejbuBArptVUN3S1",
  "key10": "vdPCAhCdosBa32AUUnteV5j3amfju4GjQ6pwXj6ixdBPxcwD2GfjGWekDr4ZyLj7F1QFC2DyAhTUSUE35Z4CHPh",
  "key11": "5fmWFxBE8oLtVr9D3fnCHPCB38NxqbWPZvgYwhR7HMPMz2Aa6jc59uW217wt6EjTJdeSaBWPC174SXmN4D67DYCT",
  "key12": "wnYr2ucTv9PdMmL83qWukWHJGwA5NKBer4PmKLQPpBdgtxzapLsSxLD1PwYbJAcVadBeLZFQe1aMkRrScv9dif7",
  "key13": "3rdpTZWQEjpp1cuAGjVKVcvCXhc62BaQQSGtcj12mjHhHi4WmDoS9MsvBrrfQPQnwMZDZn9ZLcB1Sdmo89S1tmU6",
  "key14": "2AF5GNRfTw8fjdQmCuX1HfciJNz2Qmdcgcxughh81Zo7SUf35qD1rgaTRBwzzm851ZJG3Bk5xJL8o1RNi7pUZCRu",
  "key15": "2ibaujAiWKpkofSf9oSzVh4DMyT2wTj7T5sihfZU8Pp3MNTBUn9DY52mMo66ZrSLJXwVS5DWp6L5bQRk9CA2pyqs",
  "key16": "e3ZRyK4dEK3Zw3uZRRiei6VXUeeu7vKYxy5kXLGapxSxSMQJGf7FJzC1iyd6Hangv3VyidYJaTga8xnM82aFCTe",
  "key17": "4x9QYY4abr3MAjuCQ62K35RGLorfQruVbR5VGuPgbkqE4Xo4z7KAjAoVqfcRyKD83NtJArpAKoFsUTYNoyKwM4ff",
  "key18": "43jobs2tb3gKMn4ebiY81HRycCGMfSaqzS4s45w9PZSAXCLjBnvvoAbhCb9i8NzsoN41ma23Xj4h8pWRu5NeZ8FU",
  "key19": "4Z6ucuxaEc3aYPAMocVV6mZ8NTzBm2N79e6iyf9K1mcLxFFaS8aCqN87jeVizLQxY7y93S9JzePuKpYjqEGEbsMg",
  "key20": "4gXM2EZREbBxcDE2hZyBh2Rg1e3RfqKZQJYKuxPgsWcSNizfEFBxiB23fqkDYAzc5oBErRFAbsvGoBH4HdMovw8D",
  "key21": "2gEGQpvEYgKfqfajXwHi2vfkbPQwQAebkdFJJjMT3jQrcDhHbN5Q1GCDRbBSrLmLEYQ1J7njtWnzL5CJYLYebce2",
  "key22": "4REH1reMNHWsHBNqHeMYj5JC3JiC36XJLYJaNfVCYRQChHxJydxVHmYRZSqppd9RSKhAhisRsShMeL9CiJtUwamg",
  "key23": "3HSEmur7i2uzbd6citk97ZFn41EJLFxLBy6mjwmLxJ2trQejPvyMcHQzZMSW1aGakLTeCtzJDv5u6xh47ANi2UiK",
  "key24": "5sD2EQsXoDR89CZQPQnWQe1XPV7FLRwws8X885yAWFdRbquaQMgvRyHctYZLDa7mcEKHdZQhXg3ZYoTT6N2cXtz1",
  "key25": "c9Qnnov5yAAUifZKYto1FRbKzjYBoksmNTuiSmbbQ3jozMTddQ7yyeoKCsaheWhcHQQkSStmfUDK9iEk28go4GR",
  "key26": "3iNmPi97knSTACC2G54NuZknvwPRUvbJ4ApbcJKZGBRVN2wfW8ZFoLfGoMEg9PZBUMQ3UTFcgsRaRLPMfs3AXmeF",
  "key27": "2Yh6RwbTXUUVT6nBC985hS44HHDrMwivr5oHVZrK9jeE7Q8HFr4nFiqeFTcMXbHCxLnEPmcs1Z6AjJvimyjdomW",
  "key28": "26DRpJWDZTn6WoT8UMiDuiHdkB1HgRSdpn17y3CYcpzQccMGgeENtmrgfhBRHoBqSFstsoDC1yuFdZZx1ho9UzME",
  "key29": "4mEiAaA3FKaCHFcgg6wyNck4mZG13vrRLmsGUWPut4w9ymp3d93FFNowWbDpr1KGsoUm3fvaUnj3iS6DiKyVPwtu",
  "key30": "bhhqFJKQCXN6BNbmFDUEfu6HY2dJAq3VNkgmnGeLbgq22RFTit4SoxGVZFQRAz3HCFVRWBvKmNuUpGngh4jLaZL",
  "key31": "2JYHmQGVEcCSUGNsZVSeKr9QkgyXzUxSqxFpxZ8QWxrUJYhxTYRtivQADcg4bfoguq1sedw6UAzixMCHK4MhTNpF",
  "key32": "tonoAmHnHzqZS2WGxW5Y7atzBQAzbmrwmr4nbZ37rGD6nMf6XiBstrT8dD8jc8kDYupfgS8Jy3xzaYG1LcLf9Cb",
  "key33": "3wNwAY8kNMzeknYXKKDGuProvk5eVcCLDSFT3WYUjrsoh1PB5hYMQPoUxExbA9Ys8PNdCtcKuyEhrAYiTz5b1nDu",
  "key34": "554bVsWaj6CtL8Ysb1kA84q2RUEFGLAx6XCco6JzrvWEsqs5Y6Yrc8CnMmnR4j7cjew8xiFRDSLZX3TaCqDdfZpo",
  "key35": "4zxxHyLYB6yt1S1J5CgMDp4pRvrHqhr5uSatnYPgoJA49Za1SdUZ4z6Lkw5bdbDgKm4WaSMfkbKW6XigHVjn5qGn",
  "key36": "2VVRYeNSfd17L6R3p2Y4vJL3UHnovWv6c43zqqW7dxGR1X1xAsgPqwA64AsEE6FAYLyJ2tLDC1UHYDqohPFC1adH",
  "key37": "4b5EdbhTJsMwe8Zdv3zkeyd3NKZSEKXtYNWBrvwDpgz15D7vobVL3mxdwnhZw7AvvKLfBy91Rj3qVx4hLEriCutK",
  "key38": "4SD1ZxkV9t4vD5CHFj97k1EorsGLgDWvmKDddrjD7mDnG8gZoYwsAq3dReonHNHCzbbAiShypGh52PHUXZwRMEF",
  "key39": "4t7P3h8XSnJ4H8QgKEERA2FgX2f73Yakq8P931B7DLdwWwzzM2g8snCJLtKd7eQ5ZehzH46ijy5x7Dhp1XjSJhd3",
  "key40": "taqvyaudtQ5vMQe4w9rg7edJx5vj23rRGCYTXPVEBVDsvktYVH7z4iyTvWKVxVT1RsitFobfDDKrgbmuZsqWxrP",
  "key41": "YLiyDKWPtZWHXMvGMYidQipPSWbr7SfUmAUGx95vsQPEvSEp1JBSaNdT62UQnK6Bx74Rx21Eqt3sHGA6PfWnVGV",
  "key42": "3i1a7xkXMsLFL1XwiPc6QTUgLxrVqYb9vmvodzMJyvr9P4EmNFHzpSQ4Uo3PZyuAmatQtZWjh3eqoF3zvm7cuX4Y",
  "key43": "4AXk1UBhQrqGdsbWhvtZQERK4ww1k2z9gVL1LMmnTsiB4WUmGtP128ZJsgfyfJ3padP3oTRgeBWtW3yvypaHynRM"
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
