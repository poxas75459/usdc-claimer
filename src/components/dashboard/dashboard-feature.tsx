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
    "5wLkXV41bXXAfZdSGJf55S7ovwgEmY3LRkmkwXUFAoWbwie8m2i8rebdVFhFMYuAoweWq8nov4Q45g2Yg7T8oZ6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j1MQvtvRvr2MLsUZgfagUU9bZPNidxbTcSahJpfxcZgftaYBvH1Q2egFYaknjufYbijbv3TNYtzhJQtqRWGDbrb",
  "key1": "4ANFdqVNRsWGjjrcxFyCt5yvuUx2qoFaXJSs6r1kCYVgPra8uB23R6nE4gEJxd2xpzeQ8nwkXuRYhgyZtLkpN7Ra",
  "key2": "4D94ig39uZRRfFspmY6ybiNH2NH14RxYCwbcbiHfPA5b7vgL6yAwafq1fyjmNtmzbAPDmMwyP5Uft2HaejXMhrU1",
  "key3": "4WWw31biFAXj9yVA8UseAB24RTv5C8ZRDFVhZG8VoTijVy5dmgJqJ5kgbXi2zvvW2mCxyB66u4YoQETDddWRfgd7",
  "key4": "4YHEGAjCYBcfVAMDrzJLRyMD9yy9TJd6N5iGn5andwKUY6YjeedRWoxLSgvsGRbCS6QJvvicYKsz2uRdqNcDRPow",
  "key5": "3i4eKCT5YuBApWAs4Hak8YwPnhS4yeUHgqhLuebiT4tbS6fRz2hwkgjtaUS2RWp9gbPkTy9WUiDZfULzgMjoTVkC",
  "key6": "VysdJxNxkSV7NTtvDu31Pxr16ojK7KJvXGYgjH3f1RaJRTpeBHaNNDF8q8Qi4HdLBCZp7EesbpoUBXqNqUiQ6Jj",
  "key7": "2CbRgRDm95gZrSnZ2kScixjrgtwPXgqxEPbaGz11PrgziF9o4vRutPHEU4CrSLiBuPKdiVpvDTFPheCRja2eT7sC",
  "key8": "4zgHEHBm9QkD43RW5o1zdtkzU3qHjmi64W5qgZP4Cz3aiSCedSDvcELV56L8WxZB4ByDZ4cH2y7W9VmE9D2LHMMh",
  "key9": "3Z9cjArnQdHbKHfoK4uVMZcsPCvjS938X7xhxFXgG1JdeqdnYDGAYieXWKsSL7MtetkqxCnhZzod744APtUifZp6",
  "key10": "aq7VfAf4a6o6pBLVBxNMYecU7EE7aeUuGstyTzreTSGeruMAmknQ6oRcSza5ZWm22LEd7ESt1CM17x66DocYPx6",
  "key11": "5LLW1sF4o4Buahsk3ZbS7Xwte1huv86uqGQG8EgJciCatDSJFdontxr1NqWW753Rdsonp84es5UkS4RELeeMEa4e",
  "key12": "2G2Xuie1XAe5UqtpHcMbisiyHZxgMaNgarBgdTdFPTNMLiFoguXr5rekTTVKKptUQpGFhZnww9R6gB9ishRQAhaw",
  "key13": "5BtxdYgRbCe1crmR4Zwy1yrZUR3HSkFTutVnj2ca2XqcENGNNtFC5Q3SFDQ981HgMFpdUL8tNErkhu49B1geSxje",
  "key14": "2GEtBLMz9nYWZWmPbKJTaMXmTw63ggno91Y6V7TaqwnZk6zMKapg3EqFXP8fnKh2MjEhEAuRdnw9QRDs2i5X1PJX",
  "key15": "5ApYY8nYW7SiG65HrmrRKyJxcTaARWohZpmfJ3CkDviNMszGSZ2JQ7KqEN4t113QUJbRmZUYi53uCJg8uLNoHYZk",
  "key16": "54ek42cUVGkRobMLfRrwSnsLUhULBSAwze8qZTpwxaXn1MMv1KfSi7TiNC4W6DgWHSgBNse7Y5vQr39Ldjvh6Z76",
  "key17": "64RnYS6E6AAtduPCJJQ2MHaFRkxeYTZzFq6EAE6JgKRv2LrRivzH6enPouaeNYxJdARmmqBxkXu6MFqKApLDv1Q",
  "key18": "3dZDyG4w65iwAcJqDnPbVvy3iU5XRonScyFxQoyo1pu5jgTJHwrUhF5X2Yz3HuYStENkbER9vF4muynE3JtjQU2P",
  "key19": "3AwuRHBeifA3gPzCNmzKo1FT9GCuvjD1vH6b9Rc9mbxdHG39tESS1rdpwiQ5VHDCxjkmsAizQndezyRGQLmgGREN",
  "key20": "5CPfMupkEDpmzHiLuKbnsTz5MYyABoPu5MYDRqgTNt2c6fczn4bgL3c5ob7ERcyyzurJiUJaVYhzWXmRGzyxudq8",
  "key21": "5T8HpBCm5o5puvh2d5VTp7x6SamQx2dctXE6VWGZY4jHwGcEkgGqqAdu5PCTLBmRP8HBymcfm7ux1Vn2ZZRGN5wy",
  "key22": "32TAKdRAeZox5baALFQye7aHBxYzetqHQLAiuSpfnpsFNYBbcPjTYoD3PTsCmi5husXMNPUGP9cJ3VGFhjJPDBX1",
  "key23": "5o1mJ3ynd3KyYRJwskRnMQnw5LfkxRwmUDBUX2kKPSkMCEv16YvZRbbtR86H3BfqRQoSRf6dtPewQ98sdF89mmGT",
  "key24": "6157e73zw8TrN7pNbLHnsBvBtcXZxiPKYh2MAXBFZvpEZTdBJdaDzeVVZmVYeyUQM8UkihXCjwp2u4ZT51WsAdG3",
  "key25": "3DzvcBUjAaYcRZctoTULrYBoc43xycKZbepFv4nwr6TguaTe39iPMUodzu6VfxqM3pzHSuakiduZ74CwZvxTNbSx",
  "key26": "2Gxi4Jr4H8KAoeeS1iXCdzG2QDA91bVaBR7zemX8doTLjuy7axXdZ2R2cDkC5LYskcGpxfKsSAxGPMes4iEYEjPY",
  "key27": "kdA1jZ7A4yGExQUuGjNsVTAT2Jgc2yLaaJShUEhRnJ7cuHoq6EBptoztQkzgneDzkscMsdtdsBKgbjdayxbzttv",
  "key28": "2VSW5iJaYDKfFxp471Kd5xbCMDzUEcjNHCDAvr9bQC8ixJuiSoVdmqX1dL2x7n2SYWyQvLYcxA9ryyssnBa3TrFu",
  "key29": "2MRAxqZF9huKquvmpRboXBaiF8vKk5xMDHUoMyZjFkshnftoWV99YmHzYRFsWAin32HAEkZR5FnGPVCbBR9Ei49N",
  "key30": "5isZTfeH6Vz81F85K6fE1MCW4awbUHQqzEnCniiDosEXPFXcg4yWy6ohUkzMKJCJCiaipvNtV7oEazsZ26GT4JzZ",
  "key31": "3Pp47hWCyTFXYiD5sZk7rKJnJhFcqxDDjZNuxpjCEh8kanf267m19ycbuNEJ3uRyEmxyJSwwULLzboBppAkc7sw",
  "key32": "5Hwe6Y8oPd6XkLLtPoJ3zrbha559eErtX9rrM6bP2nL1vddxT8S8Uuh8o1eHfHFn2mKHrGazJyDRgMuzN92EeFjg",
  "key33": "2RinwJ7nzkQRuMkTo89PHc6fkU1JMGLdGwf9Sn1KcM76bgZ2ThmfWG36Nj3esXxd7NorA2EJ3gCBfc6bb3Dq3Qrr",
  "key34": "4WJuwZ9XhkrYeUTscTQobTaYetPNLZCMrrGZ1nngCvynaVB9LzCPxpUoxiLYZ1cqsUWMVHyQMdkJwYfAPWUu24LC",
  "key35": "3mRWr7FpJvwXkhMzjH5zD3sdDDZSSS8yv2ocvME4sWcaHhcPZxPcREs82XLgC5degqwyKtphvpFYdsCBd4LaPBvj",
  "key36": "3RvY6U5j7FaZGgNcus61vzoshrdAaRgvC2o7evaey1PByXz5TVtFrfE3a4y6aqYwHZEBoRYu65D9cHDrjW6BMJTF",
  "key37": "3vDN7UVmYsXAAbygLUUt8Mj5AmBggKMCsXM7rivrpeqKTsU6quCxcq7Ei7yu6mRDgFkb9sE4zCBB6ttRvWdfBmrr",
  "key38": "54HJm8n9gQZ3uvM815m8osgYMCNtet9P1jDtfJ5kESYrhZmgqemPM1qz8KyAk8ubq6RJzFGo8Gunnd2SAQMtXi6P",
  "key39": "4GrVhfDj1A9eqAGzckTSN4yokGLFMSshCSaae3bWrFawTqtzPF65LbN1jLcX2DEwjDJDBi7Z2Tpvh4GayVicCmBb",
  "key40": "2QH3Vh1imaEq3c7mwuCfMesNFwaSnG99R5MeGFRpYdwZC7XP1PqoSkn6xj2VdmyWJmXoPbcR4TcMkzStZKSj48sG",
  "key41": "2P6SmMxECAXXHvuDCUXiTv8KspvF6USRojUqMDTErF4knqi4KLKsm386VCS1hUtoX6iL7jZRLmCJocrFyyQem9uR",
  "key42": "5G6QCtREPcQ7dgtudmWWxsoHxfaNv2nxnjPBgqR5G9pnChx3oMZmfR9yYLDoisLQPi8aEqjM8BrTr1eHTfoVMo4a",
  "key43": "4Xk5yzsj3xeoxEEVxV146tNhK2T5GNFpzsCpXAFmgNQSRyEeKSSKVVytCaoF9BFfgsCRhC7z48FMbRuuiv32f2eC",
  "key44": "4qw62PoFmG1YHEhumwHaG1hqbuMkWKzxQteoEZhcukjkYySZie2gfvB92kdwMwKxRXB6rvzeVhmTsHN6UmXVT6rb",
  "key45": "2K11574WzkYx8RzMJoYDstNPSc6wiR5GGyscCZxjacPmWktGnA2uv4aWkmhq8n46UQHNpxKsGcZagSNkMRVYdd91",
  "key46": "rcfkjZskKiC3TVGfgGro2JR5KEb5P45qL71Mo5iY5LbphTdVJxkXuXUzTszjVzWdVUvmVYgUPE7fu55yd8JE4gk",
  "key47": "7h7kKTmLrwAS8w91HDAPo8RL8xKDGcYa9VSxsMUWHa9Kv1Vg67hQfGRhYqUZSNDrRNckA37Bc1FZpqr1UdGVhq9",
  "key48": "TiYjQqQskhfx61X96AERNvDG9ZBoLCyPDP8JCKyUzpSEBTzWFQZd1SeGKd64isHuixZcSN4wsAEWLvEXmHrnehv"
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
