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
    "B2uZFEy51M4mNvDVV7dacZ7ukECj2YRrQCKvXj83LewnKXBYNrnS5fdPrVmHC3UkTvk8SN512eHPuvaxYKCf5mS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2viB84ymQMfYqVEaNSJTZqZtxLSoWrQu6Tff7JyMEWGAWKB1FsUAXBKyfNFbPgxcuv8uUtgDekERv9jG7FhUmywi",
  "key1": "4LfgBPXWWdXdWAtjDYMDdDixQemJBbwGXjqjH2685zZckf1kjKRiJjueuEcT59SPgi8Kt15XuYnoG92QmR8ahWQf",
  "key2": "eRmKW4jZW1w7h2ELbpTZ9TMUiUbPEk2m797Zsz2NQ8ko3QUe7q9PvBMsySGo7uqTgZiiYzePncDfwLaCZZf1QPj",
  "key3": "5YwV9rVEPhkgGR5qM6s8Srt63Vp8vgkg8hrXCJXthGMCf9ftawigHRk2mtnyhjEvxFnbAP2n2kcAsuqJdmRD6Xgu",
  "key4": "3eY8sdpuLFjocXHzpeb1zsdnvjgyevmFxQzAJWZGhgoePTM4yjBRNoskSgy261EaB5pqr1SsWqpwSNrLVUeWnPoG",
  "key5": "2iagQh3JhnTkk2SxSq36bbpcyFCfGBfmNXJPysSnjjsiY5k2AtSBADvNXLMci1FQaUs25BZi9Y9fv7ELrq8jn58b",
  "key6": "5d8sYJko4AFA6pUdh7S625h1LD5zbeFFMuXUkskB9BNTAYZ765Vg9RPp1uTzuRo67dogo5ChkXWoTKhVGNvXMhAa",
  "key7": "21gWkk1godCJz3F5qLw1X42GTqBG79DTqomeLKRdop4fc3szuEWw2jHC361HLAA8CRTpMjB3W5e3g4Var1By4hmE",
  "key8": "4DsmYdewjfq255kJK3EKHNAoXG3DJv5gnzFLBWYB5znEj6uzeUW54rRBpGXX147XbmLgXeLQP6EuRgZTy8VeHtac",
  "key9": "HAZpTCMumJTWD9kg1qTqpNivSXSGrBvjvXcWHdtS8nMQHWus2MuTiLvrufYWSbTMkojznDviMgKGcF2Hbs5bx3e",
  "key10": "5o6EPJcByCmoXBcNPkQSoRvqNdsbdHEyLJxXnn4p1MYfMk4hou5iaSyRx82WZBFkTvkjU8ELpFUw8k3mDvry39h8",
  "key11": "5tEoeWKtjjsUJK1wjo1K9WmLPcagYboH6crs2ab7hXnQZe64vbuvEfkLWMvfoLX857PgKpnfHhJHCHDbPFDm6nXH",
  "key12": "5BGeh7VY5XXSJpcQgBjME1x1t2y8QPAFFPpMjrHFKeb6Cinb7f4GqGFBde3uuBWJZjW91Ytat7AHonpoLEJfa9Df",
  "key13": "671HaeBmzCPvKdxDEHM4upVYHkqJjS1Msi4xNrnH81QxWRzLvo54Ny45jZsQwh59TY5ek1met5A5eEQwyczG3UBB",
  "key14": "4n3zneDJKgr6tCYED3j4xbEVY46zUenXq3avVdPBihgWGeAohLu8BYLJZiXQkftXJ8KyXU1GLEc2Z4yB4iGqnHHb",
  "key15": "gCfXCwqnzZQT8dKEdnD9aXQ4MtAsbPAQpTy9ZREBBKmEgX9HpkfcLjAQ644HWLd1wguJLKt3HcaZwezpAm7vz4j",
  "key16": "RiEDC5UBgzTiXeEmQtGjRrjVDToidXNtzHx9z6A7Rhjtw8nxbEL6eh6aoMsFNUEHVNfkpF1o8JNqT77g8GqUzGX",
  "key17": "Ncnr6sxrRhT36PRxSCRC12WDUqZRzBPRGaftLWa2EoYTpkfVXsji4RyhSjjf6Sk7VgWTiGgFEPAd7wzTBNskoM3",
  "key18": "C7q6pPRPHMNbHxd88YGg5DFMnUA3v5tw1hN7m9fszMdLLjycA9Tx5tCyifLhbd96geX7dSww5pAUYBRsEUdeEYZ",
  "key19": "2k66bW63vmLsToomqAex5bPD8xHABUWz9aq8sJJefq2H4R27hF4fQNgcxM1eyKTqeBYzwCZXxZLhr3nYoxm9VYEj",
  "key20": "2xc8m8w9cyfvaXWBHnwHuJfofy9qrFbBssBevByBYPu6bFmW3zSwNsuXShCVnzwMhsPYfe5gNKyqLKBnKW2rF7WH",
  "key21": "3ZvUmSVPqVEfjeTQ3XNGk67BtN5qMZYb7DYEamQSDzMaJptcNC7PPy1o9Pn5sqkuLHhEumyAcJmuPkTzYPbs3Qk",
  "key22": "24171T2Gk1CStBVmL6XPdK5AgJ2BaZp5GEuvDSYdmucD4raxa8ftH6PbXvgGiVZ3gB4HetZXAzzdyqxRDPMUBnLM",
  "key23": "5PDY8qrDEBAcXY2ybQMMD3ZQP41Q3j2WiSHuvvEyKozg4KKLeMoVarMJJfdnEvw3cUp8tUcSd2n9xL4Vj1zpVVVq",
  "key24": "NPb7Yt62hS7fvriyGoyiVv1oPWULT5SssuGqiMzHiWL2A12AxWK1Ryh6rk8rEvXYMxEumNmqLACwjBDN4SXpZHS",
  "key25": "4th29pzM7K3qQouD88SpcwBbzEr95uEZNdMfBWUNmhhFuqaTR17cGSNCjcKb9CF2jBbWhiY1CFszyheB5T7AwMFA",
  "key26": "3kPwBCUjdGk8rqPPNgBPavENgip8kZciekmDFqn61tYW2ytw4Xx4Zz4sUpEGTDyrJbGRrnemG68JS2z6NdVV69vM",
  "key27": "3FGxXKKrCMuARZJDeyndQJe9P8qhrGHwXzrfhkVXXihaMzqFgzRRAvW8PWQZWx7AMA1Cm4vwDQHuzsMbCga1uPZY",
  "key28": "4sLjuhQRaBiFYWEfiQTihJgEMzDbqqVjZyNheTDSppLmSSDS6URc5RTH4LFq9e8dGgSKjNi3CMjXkKWJfcy2Vfh1",
  "key29": "4ciktFwvrsfYxssZdgUwqCsNLtKCW3xL55Ditwu4ihtBxp82PdtvvNK8FtEUEhRngS87igJse5KxitkSoF6Uwe2B",
  "key30": "3weHbNkREpLc83jpuWQVj7iSh616CWjnyy2GKdkToHJsHoC2mUwCR7Q2de62dcAazzdu4HBrohP5thYJ9uMwC5w5",
  "key31": "4iYpCKBZyMp7CkbUnFKxdkjZhBjjiGwnbNMvHSV41Rr9oaFe6sT2EdncjbwgCYNfpvVtLfnUL4LHBfoQQgBk4Lxa",
  "key32": "zuWWvsxz9m28VdaSZB7TeqbBd99PygVHR6DmJv7MsjcWtD9BFKAPne6PZoTet9v7oTQwwe7Mpuf36kcnao5i9AJ",
  "key33": "4o7f2i9xBUcEgen5kRNyvu7W2nUpgVFMfJzTKZ8uHzSWUmjGTan6GpeJU65RiNYdb2bsHpELqrRvm3DUuJX4ksgU",
  "key34": "47RfDvZmGz5Vh67kbaVKvGpL2azT1yZ5TNPAcW7VabGTN5LY2LmWegSNypwP7ZChm6LYED5X5kk6YsP2WBTYh4aw",
  "key35": "3FeK1wjVMTyYt7e1RzCAzdn3TsWVSUuCdydfNDkHwUu3j8Ybn9TzMbUCPurSDP4kRsMrCajGbBohzVuxqaQ723Qi",
  "key36": "3CoCwvKAdC7KzmuJUHgJ5WZAxsFhoqDWfmPXfPdcMPie1dg7D8qWgdmWK7t4doegvKwKdpZrDXNKqpejoagFWhwC",
  "key37": "4BgRGNX6Yjt2Woa815ZGvYC9yfQhf5ycT2FZ2b4s7B8wXc7nUr91a7joQfg7kWBYU8QyDPuAN7HSRb1uedtw9ray",
  "key38": "3fexddyrkswArGmi2xKhVfV9u3hnb6ji3YNQ59Are3dGNqftiZQ52TsaLHTZsZFA9aG6rd6r4rayEPQ5vbBmGZ9a",
  "key39": "u4VMCSDrg5tojsAsnANoQBxjj5rx3P9ER3CiQbm7hxQYUGq8zkSqXDEuVk1eTfpA2GNQbEsQf4Qunra4bqk1B4e",
  "key40": "CmcwsY17LxPt783MuY2S9pHt8c15wceotma1wKHevLZARQESxzm9683qSkdL938EbuUYYpeh7tX7ahWkNsvpb2k",
  "key41": "5mS15wFk8JSvRFnyhTMLKXSrhTa6RHbkkmTmU9LuSVNkzyAg1VTsVLnTz4eMhQZeP54i6kC6157n55okqrsDsUE",
  "key42": "21s4Ask5XtTX2A8NMjKN1EhMroiZo839DHX2eoM6x55XNHgwUmbR1BTUqfMgYtEpoTuKqYp34s2W1A7LWRqi4yUb",
  "key43": "AqHNLZgwX4fNCxt3nsBzmeH5yCcWhtVfzvFykBvs7eL1jHZCiugbWyTY9TFvukoXrCszyT4BYzJg5gf24Gct74C",
  "key44": "3wMSGWYCGYrGPpn6qycLFWeJviVcGNk3m9t2t9GPMZh89Ba6aTY12m38gTg2bGGsko9y2cjRaX9GKqNZEAEsoB59",
  "key45": "3HZWQfqNyxGgvKsA6EVMEqrsvEcVVnBZVSUyLLrmkuHALtj2Q52pvvTn8LcWz7d3K45uS9xgM1CGc5RY4YPrJBct",
  "key46": "4K4tBrxvxpocetdqt7vfQnJaPRrmREqrDjAXZRWa5W8j3fR8HgwZ1EN3co6R8XvTnSnSY6MNcJopYmefnMWNrXst",
  "key47": "3PdSDFCticAmQ54KLmzCAQ5MHN3vGteXLWX4QSHFLHP9hxTkbfks9i5HJ41cKUz9vxR11Lkzfz2Ub2YkXzJtG7cb",
  "key48": "4A392hAgoY2yCmtANq7BeoAMYreocB8ZZhy4C6hBtR3txCnTES7c6Lso2E2jupp56xhuFJXdt4FYgVcgpCmRnzZC"
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
