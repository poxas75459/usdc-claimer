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
    "3XJSK3WMzYJPvyzZ4zCdFkWeEHBZhk5fBU844xbiN3L3cR6YXen31veRtKBSUt83MyeopooXJdPEodonwwAbHmSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j349AAgs255BQVWgMWTXhju87osZFFkVL2akJcPnD3aLUQ2BoGP5aspXZFCkpfDD2VA2dDfwACzkxaMJeodMtyq",
  "key1": "5RJsmaw1UtV7GWhdNDVUbtQFNZSwsJTEtMCBKnAPnJznt1Bxc8ynLJyoJLjr8MmxmPQMLSHBiYp8AtXJqh7JBk4b",
  "key2": "5H4Qw3DFaDJHPgkKmcHC2KqSg2Y79fA1x1gRhxNm83dcmSEZC1nsGxQFSYS5yFMDRjxbEtLmCStHSLrhP2PXAPjE",
  "key3": "2GMji1e8KwLtuyAtbDu9fNdZxgNP9JZxb2CkSd6ncFsjpZRRXzxgZi2AqBuf76EfT1igQSngGPBKS3aspeB6c4kf",
  "key4": "5i91yTmtFCXnCxG4SAQmEY4E1NZbVp3CUF9ouFxcqWrKjdr29qPRY7nR3ss6ZqMocLdkf419nUKvGLvqt2g2nN29",
  "key5": "3nKZkxkpaRsqyEQWQTDfGDw3EBM8ZoaVx7eWam5XYoMmRA9jfaq7hNTYo2YEJ4uMpn65m7Mc6M8KQwxfjDKBt7Fe",
  "key6": "66gSmgeMRF1UGQFYmbHPuLxqpSRmr27qm4wKv1VXVpVW8JRBqjbn3JauGz1HLec1oGsTLL23xLn2ehxZ6xAFUY8Z",
  "key7": "642oJqzw5DaJekjXG4SEPta1LZ6AiAhtPvjhMtwKMfvs1HpENhdofGeneNKjt2zxF3dP5pWmsS8U5d3uLxTyAXMt",
  "key8": "jKD2R9U3MGyAaBeT7iji6Kn56cqHyXCudv6XXp2MKiRwecj2gDzhc4bPTbqj6kV4Ye8F9kKk54oLtAFcnQqxGvU",
  "key9": "3w87fSPe8frBCJgUB3UjBwK7DZnFtqrK8JLEJF7ePDZLG8jEhsbtrzHvQUsRjG7pG4s18cwHijWBN1Y3yMsDJ6X9",
  "key10": "39QeMXFDpZmyAQfViPECdS2EkHcRkfKaxuvkXG3aY9UXktVyBTtcPNv82ivnHxznTTnWGWhL7qHjA4inHfcBC3jL",
  "key11": "2LE9tKknKdjaAWinT5a39YDPujmj5boKBsd3tPwCpuWxF6YobeVXG3i7FdF4nsRrQ6vRAbaZfk7sMZmUeFWHeiVm",
  "key12": "4nt2Kh5TN112yU4mTPAFYe2k39CfA7dqdaejTE73jWpcVGA55gLMCuAcrPEKocUegHZs8SeouJp9d3BZEpFqNgpx",
  "key13": "2AyHF33p67ntSFJFa3DWX5Z5MeLvDKuJszi6iJPdMCfuownYsAXSxp8Nugz3voyuW41LCWzFt6PUMPamTpsL89cN",
  "key14": "2kCabS8bitpVpqYYZRms2XLey3KaMQK8oggSSDVorSzSM5x58CvJmgKejEZcxgnZpJ1PTw6SACQJKy2tUkD6zECE",
  "key15": "3c9TS1spvJqDwBYF62ygu1XstbH2q4T4BRxsLu284MLdx5M4A9MxxZ79BtAZBfhywko513Agv2G3kMHj4CavQv7V",
  "key16": "5B4km5EpLSCfx46tnzTHyqLUQ7829e2ZjCtoeFo96dgfKwNJBz6fgPWp5fuA2PMsrYackAbxAmB3H1uYFN5K8v5H",
  "key17": "2MkthLHNUEhzXDGqnCj1pCNmrUBaZFFGd5VCKXu62ynVi4eYr4HZ5P1fyBh4MBqACHpAEzXb75CEKj76RjaSfNtQ",
  "key18": "27gF7T9fi6V6P1k9uG35uDPDBPJGdXc6nkjFSKhKwAV5YBZ2aphhqZu2CSKx4ZR1dVcQJ7x27idxTZffHXwpYDL5",
  "key19": "3A1kfCLBGNnsyLFk5dXXxBV2MQTH8HD8Pknj9sFTWAiiLSNbvZfD2KngBTr6n1jXf6YdvCYbXYgsvdZWViAUTR8N",
  "key20": "38WB6WNkoLpMsv1k7N5qU7Pi8K1GTniGqbWAHQEHVGJH1dwaxc4KU5st9kgtqhm3BQ3UEJdz8k1NvgT1PxnqAVhM",
  "key21": "jw1PzqxvKJgRNpkne7GQckGg18iGdr6sQHUvDH9uKGGKU6W1nqCJwkuftmS2fQUmnwpEqwqEyFvzpYgw3z3kccQ",
  "key22": "2hMU4o975Ptw8FUFV93g7ZHLx99AyDPsVKYKTUyQMVeD6qJZAW8zMdmB2epZN4Csg39u65VFPsAdKbG77ZsaGcpb",
  "key23": "5bmiEhCWNLNQFRWng4gZGkpNe3Yj77Z4pDmWAGMHPppaCfi8xHpwXwPyHuQQsZvJpcw3y8xqdtHSj9NVGss59h6x",
  "key24": "jBtJouoQMGZdtvb6V3A7o3ZQZWyv5vegns4HpXn9P6akMGTxYDNk4APRzoVxjXgpTwj73AFg4tNbnifRtPFb7S6",
  "key25": "5mUuRfKRRu6HRaniFc1VXhwwHdngkPoaEHRGaYQWMfZLuabNgHGwbEpGRcgiDkV1xnizjy3VsboPnPRXAxzHx3Je",
  "key26": "3imPdXgZR5aY4WDaaazyX8USsp4su5MJJzSiVeRHtn9Jq2KjBJev2SBkbitFbZ1J4zamafyf5aGUASuY67RoP3LX",
  "key27": "5E8JFnwdKvZY15xBN95L1Pnv3DemnPpd1gGzjYBGSx8giNGxdJfLwuWSjLJxbqP6thQB6FcdNw8tW3MpzWEpRhQh",
  "key28": "4tbt3VZi8GygEu9pXqF8p5jw4NmFuj36Mcgf7eGX9ydUVzFTDfT7gf85zaNnWSh11zxsC6eugJHhpCQwUHujpDv2",
  "key29": "5NCNGpt7TzfpDvv1ZDiZx6SZXYoqS1Mpxfs6Nku3BkkcQTLT8XNvGX4BSTvEuALxVFD2vXN6A5w8644JTcLTe8EY",
  "key30": "3GiNsCr1p8adF94Y8Qj29xr5yveS8A5taYbBCZSkdR63MdcSTxqN57A7Quuj4rrrvYENqtpPBhdRvr51vuahj7qe",
  "key31": "4QtFTcRKwNAooiHYgBVvefUaJEapQoLaJCa5MJUsfD95jhfr4xesGyqQFrdjFc3Tac5SRctoq7kMUR2UEaVqYSQx",
  "key32": "Ha6Pi85FcBEknQKiw7NC4poYC6qNCobDAX3bfSFWMtmCccfVmjvjXNx6XwGtBgyP2aF5CmPRBPkCVRT7Sh39BP5",
  "key33": "62QX8Z5GUjxfP1FWyzbzsUP6h9CosaE9YaRhApRuToTST1cYGPnP7bqWNvgEVktxf3UqR7gtCui3aZvAznizrvSq",
  "key34": "5LP9YhjiXaFZvrnFjzYUyDn8nLCLLBtQaEEkAUbALj3QQGDwJMAL9sfGhojeotJxye4yMDQJCN3JhvnvkHWUkjSc",
  "key35": "44KbQ7mCfdC35Cv1Qz7zvHjRsjGnyQwciQ5jKYBmFE578UUhbWi6nqbTQS8R9QzCsu76JV36Mn8ybFEBD2yfNJU"
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
