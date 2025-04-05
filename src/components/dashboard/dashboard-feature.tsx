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
    "3VBQhRko5cAFkYd2nRa5tUhqV9icynkDmfMBng4xqtihrM6hrE9URkdPhRAr5aTEnN5LFDuBN2r2EG3Tj8KD3aCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tUMWo66KTxJo8vthuLkKXXx7xN1NFmUeQjEeiPQfSyiC54MGNAGxM4JeAQVmKiL1KLnHRHrNYGKRhAbGsCQj9C8",
  "key1": "2VYmWKgp5HK4nRqKRZeiMXQVSwUT1br5heXK6uZBeoeVVJG6xNyo7LAd3dUSagG88TcbyYMygaQmFYk3C53c8Axt",
  "key2": "3xpFHzWMndqEfEgryrsewB3yYtGcUYsXnrySwS1jvdaX6PVj3nh7Z5UvH12qEdXF9J1qGFMPcvbesXENgL622GeD",
  "key3": "1SXv3cNf5LYH1J47MDBsKT34STpWRrYMoWfTFCFdAu6fDNpWoX4qBcqgFtJYMdNvVKwBrBWEyMUYBNunD3RUUFF",
  "key4": "24dTynK72fx6si4F8gJWjMLEUzbR9M96TnwZMJcxYLbm3dbwVB8gVhTv3qZfB5cMVSFLL76kS4QrV5h8pUvoV2Lu",
  "key5": "4zDwgq14g1amdD1sJmGtc9h3q7j5xmaiVfxgchhbnoyaTodYVBbcengyGqY2eHiPPpNo9EKzqTEKv9oVYTDB5HhV",
  "key6": "ZEoF2uuLvyrfxctDJ23ZokS19CWvpyBzZKfz5XwSoJxSk6bztvjQkeFiQCwpPyXWw5g6qg69VF7g34nEBqHZ8FY",
  "key7": "y5rFHXdF1xo2PvHGkG6bETyJ6xZiHLUTQrrH9G4VGt4VniEgQCjeD3tEczFGSxQQ4ZRJqm7kK2Rbpupaq3XEzVJ",
  "key8": "4ttZj14R88Ta8nurW7jijcXfqTo9G7jmwEsqu9TdwBFR3wHvmQhoubGazfsRER5wz9k5mjRHjN7iQav8NgxUEsnq",
  "key9": "3qQP7kqWAgQmqJp1w82mm7WHtfKyHX5ATYdXhprL7rJNCMKMeA2WgLWCSVvvyWZKzdcafwYBSHLaPTCzPJkXsRQZ",
  "key10": "CvQmNtx23XciKP7PhxEAmRpiVjm83ubJweJqGUANHRwfa7VpgEgb4VgGaaoU73EshAt3ycKQ5BpJ5PfjMqUwgsR",
  "key11": "2uYQkJQSbXSjg4tNmQn5zcKXjsoyxPtcdUZab1pAmo1kZ35duf4nfHbmZhmfZtWV4mzqEZ8Pp1TwghF5Kwvmj8cy",
  "key12": "NNV7B5EL2axfQre8LPBFaWgzGz7dxdXBzDMSc1nZm4Y1gPkqYCzgXcoJ47Wz5Lkxs3cme5AJeDXpZr76spVTWP3",
  "key13": "4nSgb6v7XGmd3nLRLWZ5JyrQaNtwLii3BcW4TRryewPDYC1YvU1iyDZqj63EDJzs4ipRiEFP4i7d4Xdmh2WzQP4K",
  "key14": "5JLbVXF1PunK93BNgsmmBriB3xSLLUKXcavqnivc74dw3Yq2djhtMu1jdoC28kVZHDkxX2eNt6TFPDncR4KjF9HV",
  "key15": "5H8kitNGu9zjQzC3B2DPY8QPAi4YcCtd72tmsQ3vKFU69uo7WcQS6PffWuZkyi3HuunQte9P6xs56zKCqiD7m7kb",
  "key16": "2RDFV8hY67TbTYBnkwabRdanJonAFUt9YgHsX63fKf7wYZ4wiQCbCaA3TZB4wMsTmnr7TT212xZ1uTzDMbNfsc9p",
  "key17": "4pmGEtqRBtQwAs97qdY1fKmBQy9G6rsF6h5iDBtHJ5VJW77WjJehvg57LTUm9bjVnVSMTpkSJ6chpbUAUX1hyxDL",
  "key18": "2vLU45Cr2PfEq1zJt6dXYXPyCGe7aAp2g2iEznSz72syzYn7iDkrvaH3R1rURk5zJ991RV6djWXUWXtA7VQz6BfP",
  "key19": "2FbXGywrmkpSmB8McvSZEuChkTDbrV9MqqoDpY32T9DXiGEuxFnqUYNHVUUFvgENfehS8NnDQYNjYMn7co3uYvxe",
  "key20": "5p3i67yRbwjJKz7k1YjxSLBZxi2GCMX1rFbvdRFhdeJEc8xvvPBBgmNydAdLNDwUSLCEcsc8gYJRZ5ojd7NYqT8S",
  "key21": "jDts5dVju2xmSaFutyTVuTHcHX1yXiWEfcovp1XJx2Bqgw9PFoFeCx3GZbVWByBgcxKkKdxjKaLW8EHSHiv5ugr",
  "key22": "5C8F4EbwNbCzvzavA3bBCn8ZjJGyPRRC9VtLizTceaXWKoa3CGcK4zPGc3bH92TdSJ7mAWoqyoxGnASN2mUk9Ywe",
  "key23": "3pmR1Fbjfo1QKCa5o43A6cExcxTHSRNFGR67TemFhsWJBS5fVm4zu65u88Aa42SVHTBJtXLQWTm6QKL2T8jYSJzo",
  "key24": "3BU5rAWzRCd59jeuA2n9zMRMyFWCUqmozdfZsjMcpz821Mjv1tqz7U6Riq1mK7w42Xoh4dVCDNa1Ga8bzXtyoRQM",
  "key25": "4xAn4gEFm5xDhGuckfWkkoqWKC7cpK7ijjb3sgLTH4W3HzM9SHFqZaCP3hA5VhHAhtxhchkKc6im9EZ2CpjYHrSe",
  "key26": "3cqbscPheh7iqxLD7zMJcygJh5eZjRcgtbKyFKdEPLjGaiVb8N8s7JhtPDHSWjq5kjbfrw7ThiiATEP2mXMds4uv",
  "key27": "2Cxr4678Qv75eiq5BE6agnB6ZXo67uGGfXbSpUxCGEo1Wc4TCikeFVB58e4gDp9dnSHoc2LYL28rfRT8KTQW1JkH",
  "key28": "4eGy3GQFkUSwkwDpqJdGL3xtHpb4xJcvkXxSycvbKqdEUF37rHdRVEHnadiMsiRuw3BqLKnT7FpT8SyZ39qkhi4B",
  "key29": "4J1PyB8sWpSsykfDgpoUmY3txe3JizH3rGjK77ifZ3PtKDoAcnxKNQjNoj21fnp73YukMZh5BrvxGjhBSxcmchkt",
  "key30": "xqg54JSqc2GTnYBSAF5RXKQAmCwReX9mPs14QdC1ZnxLibzbxtXq6MeL9uHPYyapNFjGMYpr4JbtJWvZN3e3xS5",
  "key31": "5eVbEkJ4v6hLu3XaEMcf1RvrNjEMA1WDD2XYfYhruEQ7vtWBe4osSTtKk8WtPWMpquoJBCdsKA8o86DX93VrnHfv",
  "key32": "3j1nLjNyPzeVQ6vXiNL4WSJquXU4WiRXDnYm9oJ8U4ozJ1FeCe7FihAC1QCspD6T5TrvDR9v88X5YnKRmtKd99XD",
  "key33": "Lvgio8SiCjxWqZ7S29Lv1EWB4A2WKQ7uBRTp5Xfxz1AM73ak8NwAtoJEMnWTT9oEFiM7RsGc9a4jY8tj2tmUxV1",
  "key34": "3RVUSfPBcnBvYvxSDuyAZjwi7aWDHCSn34XcPzFs9Vnnq2Fn9iM5BPeG5LpfFgxNVMSPGBmz9gPqoMFQoi5yJYG"
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
