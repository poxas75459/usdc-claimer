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
    "5zJ4CLFYHU9swKTNvbJEeTuKxAwrgAb15RAsBSQ7quycVU9csHE6pokgHioLFMHC6wiu9JG9aiZFw4mat9jpTLJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Novg3dLTujSRaTNibU8BssPQmauZKvWL2ddr6iEERmDqpFMHt99QAYsP45taEaqgPq7oca3Y24s5J9GPKRNRPeE",
  "key1": "349HADtsAUWHa46BJAApH6jJsdqcPnuDtWFmBAxW3fHeTSG8qiFc4bzHu97HtSagXXb6zb2degWK1FSuMdnDUHc4",
  "key2": "2o9z5zmhVUtXTSAte9nxgisiDk32wDQkQN4Dn8qgw1F3ycDdgafTwDxv6odGqmaUHE7agvBuJPVgktVG4G1DBNKK",
  "key3": "2fwrz3pj6cVzfR7kEBhWuqj6KoQUr3V3hfJHsDDbVCGBkb1nDguhmAQuvtVjR25MPG5VkJj6tnoM7xcK6LY7J2Zr",
  "key4": "4xgSd6YnWQQ2BopgDPuFQ4GKFSNN1gtGgPBmmLic6oFJWduDy31k892cQ2Wn2pX9rCdfDPUwFKrZrcGZ4k5P7zMC",
  "key5": "nbYvd1VHd58Aq1tsmzHQmfeRzkorqjsSgSvzDY5Ugwbor3pmL1VPpXnJW6cZkRCXJqg51m6F2qg4v97Cyikn4Dt",
  "key6": "3QrpfHTP9kxQx2y3GiU2PkgTY8vXyMy3TyuCtp4cuiny4Sqh5BXzw6pSoWcrESYWy93rc3rwurPyWTtm49wx2Syj",
  "key7": "5aEmrwziAMVz83NfbPZWtP4DosZoN2m429Sit4yQH5r4hPNHvcJgfktZScficyUUzr3pcciYjsKh34UGicwskhCA",
  "key8": "2gMbFcAAx4FMkcnWyryaqakAqu87xCeQy8anirNZHSHMM4s3PxGBVHfDvd57wTpyTuERL8uwnGMzLyBAp9TfvWZx",
  "key9": "3b33kuGFu2Go2DHbq9jEKRK8wqjxajGRsJzkfEbZPRybbTBSKMJDCnMG5SJi55e2V2WEporrqQHm15Mdh5eHKM5Q",
  "key10": "Hzr8nQTBw5ktiGcFX8rk54e7WmNdFJ71G1WFtvaT21HxgyrMVn9dFihKvH1Hc1mrTUDtWssD5VQn5XmauZtXpoE",
  "key11": "4dbykNdHUg49KEZUFNfde398fUYt2chWekDgEdT2Y1hGLnSei6GEjgUUBdHBuL9vucJhot16KMs9c2kHWjc4KaLi",
  "key12": "54VKPHR5GLm7L57L8Vw46pCgUWK3q2CyfST4dYNPcAZ7PmbHT3i8Dup8keC6rwJbSoCvyGYsEGrUBjC7PQEQeJxq",
  "key13": "3n3xDemoBZYtrwWZX7ZzfCJMN1xtpro8SQNTK6pCa5LyVNgRfJUqGiw4oodvnayHoUs2aWAczLmNsJMXWUkMRQYE",
  "key14": "4pAqXAHhz6Hg5yrCWWkQUaMxNukcXH2FDCc7NwgSh9YPm8W3tfRVS1MLZUMas8U3FkmnHojfEHzpL9i9J5WE2rty",
  "key15": "2uerYLLGwv98Nu764wn4UobZoakVp45Df8rEhVkDp4A2bEpYJFzokZhHQpyoLvmSjewf6Te9N6kgrnRwxPPTszZC",
  "key16": "QDDED58Rz19DFvggKSjj61MGAh5NHVDPQtTXkfL8KNkVSmXz3NEKfy9DifKvUVHJEpL8qM5fo94Nwn5bKPXHAUR",
  "key17": "21uhNARbEWY4PK7Vza8hTi6TGuoLSLqFNGmzyYote34MvVZRcP2s4ED65wGiDQ76vY4tZGhczxuyFcgGeNQ4GQo6",
  "key18": "4ZHyg6iACeBK2KDsYUkPwXRttqLs9AjMLi68UyHub5k7Gq1mWnnwaTimNjD3vNxSzC1WpniyUEV1eMBzJFMEJqJk",
  "key19": "5Aa1ncSPBnAzDtsatXhdAu6XyaNsPhrT57tfvZvknn8ezKcctCCt1BnFfTmdA1fVgVpBB4XpaSpVGXFhn21V7Wkb",
  "key20": "53UhAm9UTEWhTRF2rVcK4Y3tpZu7cwqKTuaSbdkHugBsXTbgStdmxHFMUQGg4SXxkefN7DCtHtM9uX6UiVHaNugf",
  "key21": "2zLQ461o8gKq5KBRK4YrJGN2UUVV8kKsnpGR75fuikqEnVesNeBXkhz16Ku6N63AjZGcYNhdgVwJ67MKA2vHrHUE",
  "key22": "3RN58WmJW5Rrufr71V5bhuMJZWAYVYMrJbDbSKD28fQTAHGjFAZCMomAqdRWZN8dqJEcbzmJv2EhLk6c29tvboPj",
  "key23": "4hxwExrUm87SqBPCTjYEL7Kwamb4zDaMsj1jmdhSm46j71UBtrqaGePsCXcaYgXJHD4MgSLLtqkGWqFucLy69zgF",
  "key24": "4uLbX36d9G8yTjso6pnjVjFFmAjLScNTvkWipHKDF8y7XYeu2nPSpE4ZFoUK7USFAJHcciQso8gc9Y5Ec2ZK7inu",
  "key25": "3JESxxPfwV55QSw6zAMyy9Q7fDwyzmtCSHxRM8tb2oSeFTq88H8rw9FGMBkdM3j7ZiZJSHfb6dheY82Z5MuGMd1C",
  "key26": "5BZQSm4pYbi41xYsABXAAsapPbHQxqWjxCEfznsGNV1dVcdruxDcuSFjcHQyxphBRATtPpVetVxLqhbK91KrdGuF",
  "key27": "2BWaPbWGxebaCK3LvtXPxwEffYFu2Zi6jyV5fECLpcivFENDRqhi8yxUM6Twdv52Zqif1TpwvKmdfihKahpZEEQV",
  "key28": "3kZgk31g5wcw4q1SQLxAsg8G3zmCHv6Bseox93diJyvs1uqCHKNg8ri8xx1oJNM4FZd6H5N5dVkAxZ7mWQffNqx",
  "key29": "5x1EVAQ7YmsL4EuGoa8umWbx14TgwDtweTHxz2sCvHAGxtkDAEouq3EuPPcRZdQGCJDtR5Einzz8couVoK65L3jg",
  "key30": "2vxSbJfppQPfFoB9vRkrcxHFKgvcfkCDGc3nVf9uh3A4i4UDZCVHnujjK51xSFxgMXnt6ydapc2gsz3YdaUMfjj5",
  "key31": "Wprq6cVhormGqHoxTskJnMXva3y9kDkoPCdogytcjmga8vtQQyCUyarLdhq3dovaST1SfyQ6JEE6pJ5cNn9feUt",
  "key32": "3rqQm7EavinH9wxP5v6ZHpuGgQfH1qAfZtSDn8TSFU1pZanB44zE7RH7J9PbECFVb36kKFUg3tT2Yp6qZPsGEGZw",
  "key33": "3sDJvqPbX1WridrVVfgejf7QSYCiFrgC3Ra2yk9Hq2cYHdbx5x1RoSw6YGJjLGAGyFz9h6qMhcRFV6FmqTTKhwX8"
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
