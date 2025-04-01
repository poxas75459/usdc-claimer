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
    "3pgqbmTnU8XLeQ1AhiPJTHwzwyaZAxA279dsobuaC9Ymuui8Qqb5RA7rw345wabAiNYhkq3vCWDduh6GiPuFdxGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iCdFfXZjDp4F1pyDtATzbnbwDmyLwNoR3TMVmyBW3MM8stzA9QSmZjj2XJaMwH7ah7zDHfHpdqvABhD3E54SnGF",
  "key1": "5wFhYk413k5rS5DXBqPTnGRczESfVULFxf3FHCGgZgzcnxzbgHY9Rzv3RH4TMsitP5kVPdDhiL8fmDdAUigAZRUv",
  "key2": "2fabwHZbcHjCVZTkcrA4E8tsKhMDZmyzBiTgEqRZnt8HZYkpZPbpRig7PCndwXerFrj4keEB1FwkDxtMFgzrEp8D",
  "key3": "dxLiJffRbZuQ48FQdrLiKwMPmu4jjr7nuMAzaQfD2xsa64FVNFhaMSSnYrSjLfV7iKSwWEbwpmtem6bH8Cy73nv",
  "key4": "yumGZNDBXG9yaQuL1TsoEjt4RtcrWijnBgUNAtRRZVDeAavNSZEwMVE7ck372rSSshF3Q24Y71eVKffUnvjHZpj",
  "key5": "4XzqBkkoV5yRvtushadjhaQabMs8KFQGV3u9xTcKi3EmnDxybq7XnsiJJPxnXeKtsjuzyGG148QSp1rM7Fy7nwgp",
  "key6": "4bUp684tPv6UDaEJPoGMomQ7yZHkd3PQfndVGkfpdsnidxVgjDHP4FDXXWi57WYBVVoPQZT8wg76mYWo1VW9piim",
  "key7": "7goWd5pjc33FBQsErHM7UJb2dGgpZKSWqvUMgGwzHzy3Hqkp419NK41NX9pxAKPVrmKSjMFxLcHKBVwGrKErPuk",
  "key8": "3dtG2ZQzpw5nhPEs3y4nbcdbMbJq7AmWeknw44C1sg5qjQVYCmAnv74oUzpQzwBdu1B9BH9UK7y2GkWZPKcbuaXh",
  "key9": "52zQrM7SGeeN9LNPYP9DnwAUZ4eARmzkzNyrTu8tjSygweMkGXizSgigBFQ4y6QEMGW2kMc6Vftd9nkKhurC3hZe",
  "key10": "4V4xh8k2VrRtYibuvQ9CaPDSk74MsNv15RfuJSQzChYi7MJ5AvjCG2gKHxZJn8Mrw7eZkkSqafS25CpfjLRDvecD",
  "key11": "5d4QZDGS6hwX5EsP7LqcLVc1MCfWWsQJkTQi7FBoWx8Gj9sxK97iDQkn39QQKFDx3BXEndZY1AZEPRbM1AcfRuC9",
  "key12": "2ePzNN2S3WWSm4ECTSb8Vyq1kxdcHedR2tH3LhvWziWiJ74VW97Hoa1goHdM2w5MfCXxpp33BNZ4XFMd3DpGSMr1",
  "key13": "66xmy1KPSECU2Pqyjoqw9tPmjZgvJdNvLPKR16mmdXkTaKnWzhcgSpQSSa7RqQQM4iMzq3eCiQFKinyg6gbmxeAX",
  "key14": "1YsgunRgujWp1NrQvZf1SCBRfJWUcjD8sj4H5KxLVkPS1Cytrkfiw8q5LwovFb2ieDRdoVn584gMEY8jqP6cfR",
  "key15": "5B96bRviToYEjSg9zFZGt8HxF3Gs99M3JSx4Wr7q6XeSirTBV4dFMTJQjuN8VGdQzc7WJhmw1FMwSJeYDUWkSVfu",
  "key16": "3svcjfHnVFyDmX4C7XEqX7iViAo6hEgbahcEnmN5zit1yVqFkrJH5mAX8EmKpdH2K2rZtsSjcgsJJFqA8MRbQ7ZW",
  "key17": "4vw9nLXCFKYRScZpJLJxTzGMmvJKGVzG2zd6jmMJLhLjre34fqkD3roZCCENuXRTwcmL9VQEGdgmntbUo2dSy5R",
  "key18": "3xkyYRayaBaeuqnZQbmH923VByiJxAqsPqSCLANGjGy7oWJRet7SoskX555QzvJGwnHJvcuKzsU5q6oqRNYPtnsF",
  "key19": "5h4ERvdy9gWhF6vgWkaX6KDu9JiWBZ9iBuQcvaXLJkHK4Czj14suzBcgPe3M8TGbt7jvJe1DRZQwc5JHcV2H8Hcw",
  "key20": "634DXhdFy23BbNzidgALcXNMBHfpfNtXnPYWycYNVZ1x1Mp8u11AJGRNoxkwwTW8mQJfHFyyc8CnGuNojfYpi31m",
  "key21": "xyrt8QvTr3a5jETJoYss8rWQGHJy7LmpoDBPFv42JMGwzdNPNLmQCAVETxHnwYwJTaW2u1NYn93vRQYkKyEtoA7",
  "key22": "3maBkgxswdhZu83whorHgdhLWHMoxazHPdAhd1qf1euUhJebEEynfcYVv1HHSoGtbnvq7dFSouAx262ufdqe9aRS",
  "key23": "5NGcKD3QXbwLpgecGZvngNtMHS9ffYoTq2KvxsZZNrDKgudTubFyrVyAPeeP6cGicgh7P3f7NRzMJZDdrRkqvjkh",
  "key24": "5q74szFj6zkY1GMJ3QYPsDpQR4WQQ3fxLuTC1J9MnUCvu2iuvn9WAkYKEjJnH7PxEvmFHYobFzruLni25oTjtLN",
  "key25": "2DLVpRPK7QB6VZMKnM58rXEHcjfRL2jBQBXERWVVjzKYE7Tgeusv9dC1G2pywjkrKyzpzaUFiBL5EtUw3EFTTzb9",
  "key26": "3m8x3DgUzWnNFxT4QjdNZm1PK1bKzFSPxk22nTzynYgf5rWhW1VF4NJQ3iZYM4Ag315Bd4N2vVhi4sQk9PRvkXaj",
  "key27": "22jx5JJgRK47G4t2xnENNZ2gsjfaDZiDrm9WEeP84EoQc5ozpj9NiDujg4m71iLgSt2ZBpfwfoaHD163QN7KqX2X",
  "key28": "66U4RdomFCKPppiezCbqeqqRYwA34iwufTDTBabxrHJ3fzLESKsUTFqwf1i8NhZizTvKLCf6CokXFTuSypaqZXua",
  "key29": "2mQhxooPbyDBnpn2mf4nWyXEi9F1UFkFukZkunnjM7JkZ2MDuPD85ojXgSMGqT6LvkzPGipyFAkEzaZdJxNei1xC",
  "key30": "CjD1mjovKL3k1fqPsmCjbwptWNNxUj72FtZvH8M88RerGtitCxtagzeSNiqvJicV64qLpuYoDBQcjNp5GMXnSXF",
  "key31": "4k2L2fv4uW6atuCANGi56t4Df6y7xY1dYXU9bxzWDTyjupEGXg8WVCzP2NPzZpbUryHukijokhhrop7nLB9ob44L",
  "key32": "5F1uo46dD6thtmFZmsWfDH8mDhFjoujd7sVhYt9P58STjcwBwqJgsk7PvQwnQ9BnGTRFhE44oSBoxcBiYC7L6pWe",
  "key33": "5ArKeH624mGEBiHLL9CGteeGkvyx5tZCcdY3hV1Wdj7bNJN8vEbc6Up2PchEYsPzfaEKrv3k5BzJL7PVEKepe9bR",
  "key34": "2QcxZM3YNS3hAwMH3B4pg89Zow2ZpcXJPavQXjdBr1rvjmtk4AwNv8efoomWe1jyCA8MxmtwRh4fQAsY42th6zuR",
  "key35": "4MyCWPLrauMbQnWnqMxiJjkuFKHreAU6vXCL1cVDakuuXb3fsrVtE5DXLUTuEyD9Yzcp5XPzYZXX6VXPVSCmLfv1",
  "key36": "Yxmg5eL4D3BCpmqRgVgkCB27vVUDUGHwghDbKRCsF5ZN2iZBfkVHQEfBW9wWs4XxmB3CPwgHkt2ouisQJaB5pAS",
  "key37": "2scaezwovfpHbJo15ngBihZkBSvDeCgEQ3HpQgdojzDxeAo89RNZUzTE3FbUzhyMBid1S783kAgae8faYv7NuZrt",
  "key38": "3YZFbAsLhMUaMy1Q4oA3LZ96E64S5tG6qV2HMZB9xW36JwZWj6FR7B2dx5a6xUCExFJgTLse7LeTGP2y5bU1qqQT"
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
