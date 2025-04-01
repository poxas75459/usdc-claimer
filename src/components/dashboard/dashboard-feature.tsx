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
    "3Z7kJtUAotatdYUno5xSochnVxSMoTpwgXRDpEvGcs2M8gihKvx88vGSSRXenFN1BdEcq9Cfh5wJeirEwSbrSuGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bJW9i4RZaX1H6p8V16ALedTvHR7ScbRrBpR7isX9HoExYcxVQvu1KuQ2nMBfqpPYRn94KU8YjUfNbEaS2RNYuod",
  "key1": "G12sCVSqJFBg9Wzo9VTbc4ieaaV4e6U8G8ZkmwiYRgLJrg6kyLzb5wTSSFFK1SiqktzEiyRJZ3i5qkGr4axVr5K",
  "key2": "57Z571JKpct2pxfqtkxExQJj9YNdqrgBKDvaVs14XktdVWzyAxymJeYRgGEd5Eja4VtKShGAWRiQVhGHptCEJ1Ft",
  "key3": "5AjG8KVSJwzk2DfCRhcgcydjCsq8WFkv3nhpfoWTbjfagNkjX6S7cqwoQZan9pprGK3KwgzmhdeUcqnofNDoYBmE",
  "key4": "5s8kvwSmYgHzhRcU7FTuB4reXXCdw85RWbSoeKHx5cm2N3bhBsse1tAV9P98PSinauuMFBovjDZSKRxRG7Ywhb73",
  "key5": "21NM4vptWzQpGTqxyvgqrrAwX9BdaGZx33hTZ62zAyT4dRMccnvXd89C3hcXaTeeKH4arKQeMP56hc991Mi2CWWw",
  "key6": "2E5GREpoYD3tUAUDv4CyFYkUDfCrKepPG3y2Y7NvpVe9wNP4FgvsBSQjQVeKWsJSwrjJAnYnbHFHREkYBfT483oA",
  "key7": "3L4LSkwLMqRotfYGf9ysMEJLSc49UUFiUHMeRgnryMAQMX4uaA993Yya6ZTUrvXzi62idwg5hz122cQeQTkJqFt4",
  "key8": "4641xKgk2qKhfKvhPjrmXwLRh222PRZNn3b1gTGMyWK8uXTyzGckHsvEfuy14tMtVitk8wKbfGmqEtyLksJbjSMb",
  "key9": "5TgqYtngs1V81JhGL9GydJ6riFtite9h3ibtdeWABo189DLRsZmdpFUr1n4F1f3hJ2rzjEjG6tsTes7vQg6YhQg2",
  "key10": "r4WBhPxh3bGjTgPWY12MHfALNcFr46BuErSKFGBDox3jH3pi3nQGiqLXhtJv2ac2Zy1xgqC77fZ7AxjiHUChUAs",
  "key11": "3LJPxC5xo8S3svXdjiJWECxymrW6qyvYioExCjVFSBwFCpdnKm8nXVynVM78b5f4FK1PKxDdchAX17mC9N6rqW8S",
  "key12": "4VhJyquS32GRD3mULirNPUuWJJ1GJUtb4GrPfMbM2nf4Q3tGy78xvMGjbanRweBXfdXYwigZvefB7WoyhTsE5Psd",
  "key13": "3yQTdXzLtCyCyLXrp6QEa4ayMdBLqtr3N7HqH1TGLiiwpXpQDhp7mjRUwEgtDBNZvZqhJmzKaGKA1rCZip5PJFrQ",
  "key14": "4nHgzT45hcFBqXA3A1jyHedTxhaSeLKudZSNDwmQcNyoA8gSjFrPEWCw44HPrEigA6vKTUjgkEVXy2k7XSTzcAZQ",
  "key15": "H5K96PQAZhdgs7bYUZXpu1mjz6QTsreXP5sKbCMa6SXVPWPnAPKVnZPBkLiuFPBNn54yFR72PXJQHAvTt44YaLL",
  "key16": "3ipPK98kXxvYu4pYmS2UsmV7WKSwDiQCQyxySxTkYNo5bi3Pt4ePHtvzqgYnrQ34uZLF9aCGe3TEGHYcNa54gDeM",
  "key17": "4fp1pi8wuQj9si41nRxGn6qwmKKkxLpiPPiA9ihdLqwaamnAXzSKQs6Cnj8K2PcCDxWBEZNZQf26uYXFuK6PfKmf",
  "key18": "f5YpNvYQeUTRXMv4JXSpXT4tViTnW3a4mCnyZk9Lu8nPmnHWAWML8qTi3R9uiMhGtAS5to2SpCbJwzEqQJAP9Nz",
  "key19": "2yeUYwzEoxFMRjsqEqPeqeTJkVkjGRARhLFE9Kz1XB9b1WiPdgeW7E7Ze8duHqKuoYFgzjywC2RxMAVQrPfM3quC",
  "key20": "4KnEo1PZB1LtrhRpUi8H3PpRNENAw2M3seNmGKmx92wVpFAwScFKgLpgHYcsdYnNi3NToCvg78eAuEdV3y89sYEm",
  "key21": "2N1e2L8vWUKCqiFJzw2JaSojjQdtUieV1RZDA41BacneePH2shjYehDSf6ji4PXJgfoLavntMHf5EABdxPNZZ3AG",
  "key22": "2jrTBd4LCcSv3JCWj7drD3mxqhftbPW9fV1tWtLhpQhJAiLw253xLpPGibFSEiZQdQL8v4t7wVZAHuj3kngYsFwU",
  "key23": "46HjPVGmBZgJ87NhcRbRSHDfwcBd7cHVjhU1emccwctZ1p3AY697aHXpSUmC3sETVu65PSAGVx89txzUHTyBMkRb",
  "key24": "5poL7HDsc9nMck7uY9EXqRk4D6xXFVFKrrosCRbyDg7SnEHMnaMFrghu52FozMrnPGpcC4aBpYBasqD3QDrpbcmP",
  "key25": "2maZTL39Mkxi5xbKxXKg5zGCPpypnZqCUzEWm7pBGYWd88FVFhi74c8h49EYMrdXsFMRsg8iYUBZpLTPCEqcGQd4",
  "key26": "61aRsYSPezSpWWvTB6EZfJ4cxQuiezc6PH6qH9vrT6di1JScBYSdfqXBq35zJUWZayPsqjsHetceB6CiMTCjS3Pv",
  "key27": "3dUv98QrosLBJXGqS8eRDKBhQDQNqFD1cDK63yNUubQUn5Mm9VjG7tGgFzUu1SYXWG74AkgnXfgxPD6kLJVLwb8o",
  "key28": "2HBV7JFKPuv6NoYimABHfWPzSkdg8Ly8GSS65gpstrFtWXx3441h4DHXd4WNN4bpFsxNmpf3F276YhvP8k8GwNik",
  "key29": "3Ydb9ovrHkM4EPaJQvrCwBGtB1jGno61FQxDY27TAq7qzn14q56eGx2u2y8f7jkKVwxDiDdQh3ioHqvjkxZEwPR6",
  "key30": "ZM8CUn5vKQJtfUDiiq3VS3Ge3maEJGk4tGwzN6GdRe4Bn3JB1TAt2egCzKCmkMkj2Mx2dy1Smhqy4wE3TfzrNFD",
  "key31": "3CVJShC6ysXxbtFSu5BMbMDfqFxavonHvxQJKofj79avTTr68Lw16fHeke1JHxjPnqf4sfNAoF9eZkpG7w9E8bso",
  "key32": "26SSTHPU9P9nyVRnAg61GAbHyVJhJ1mpEK4Xed8LDCoBsmtXaho8YnvsUFEaXtZ13N3txqzaer7TXXNFQ151Wt1K",
  "key33": "2awe3ofD3n6SmNWwyJRh4YJB1U6ExsSEQYUfvk7yo9NsdjBgjph4TnHNqqzuGByodcJ17rUnMxEN1Fwi1bnKGFzs",
  "key34": "3rtGRVY7rvMtLqWPCD8tmJLJwAZkG4LFtsrQZ56y3423V55dMPJX1gqAEDBS13DtWkqPHLQbzMF3vaC7Pjz7BtHB",
  "key35": "5CkBTu1wmW9mQxjWhja2hQREF3Ndbh8fzNpj5WMuKZ8DEWGwRqr8ecsBMvrmkow4WvTiQEEgKeZFgGjJvntdr8Cp",
  "key36": "KXweBcgSSqtiqv7zV9g6xmDc6W5sL31YuHQyBrwqSKh93SfUfA2rSGZ2TDH5pmASMXcuy6x6rA9DvCjFht5WJdH",
  "key37": "5ghDW8EH3uuXrtRNNynhwcPvxDQa7H8nB8ZTNp5MRYqXxfBHFRdHi63UZkAcJewqyKVNqjae2irJUDDim7gMRoC3",
  "key38": "DRkxeJF1JC6t9PMJYRHU5H7YU29gkbYqoJxCvP6AjZJHR11RHxp9h6z2JqLEKRtWzrpCy6SLBHnYWxC8QkBiEW8",
  "key39": "KG7jD6bHiaMMgHX3sWLsz1fxL9DEHCngufaNpj5nA5ccw5QFDwZYdww3iE7hKsQNovqekZcVMQXiBpGR6ThxjLD"
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
