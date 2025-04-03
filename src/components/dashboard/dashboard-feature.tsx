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
    "3bg8RMD4BVdQtdMu4GkxjwvHzMm8EfEaZ3cfJkSWoc7MumyMHgfWbyBHoNMSx8WxRLR8a2wGMA8PmTXDEEGjFG9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Q9bgDbf4aS7HJEG9pCeShkysMQm3vkCEaysodWRDLjKA1T42tv7zKDQ8BkyuN3ubYeVZqXL5TdTiwv3fSPzoCC",
  "key1": "4AgPeh7a7QzSW3Xx7W5mVGrggMfwrmWRPyjWUUvQtkCBQBPvGAMFxposhZRZ6SPUXbpcX3w5tgfT7PV2W59ki3AE",
  "key2": "26h3p1eQ7KBNK1Hhdtr1T3kegXMAY6ifRy3oHFbgB1jE6ebZDUE1PtrrxwSqX29R9kvic2PkoP2nG7ah85WY4UQf",
  "key3": "4WmJr1QGribuzDm2pjmFDvtc4N3N19VchwZenmhoAUVixyumGnrfbsFL8CRk7iBW4DcoiTwQoqKauCV5BzjsNzrF",
  "key4": "565wY3skWWzr38J5sFKigr9yYutd8PZu5mAWbYTpWwN758KGFy3Dtgn2YH1BBGPqTawJQyDLmBK6QjbGSkko5X72",
  "key5": "2skerUN7bcaUsRiJV3AJKA8RpTbSc5xoNGBz7L8Qp3dzj9PqXrcKQds9BEbbn7m5tVBSnGhgudC6bF4js9Wqvuo9",
  "key6": "2wHzuag2HScYK3gd1348CxQ3xEB6wRqnnygH886N5RXwppXYGdZAHhurw1mBChx5voVgbMqQHsHF95kJLFTmMRbJ",
  "key7": "39CGiVWaPkTAEXcbBwqknuaKMYa4HEovAf5ZtGmGQchBs4J5BMRSFsBq1g1JjdAe946bmEgH1hEDiFQimzCgo58T",
  "key8": "PUvCpfuGhjW9NBixa3SnGMdxLcj4DnNokYt6tuddzfgA5P27XtYHLW6E5ukPbVU9XhiwmrbJLVe1zcQcH8Gt27g",
  "key9": "hVkqaL8M8b5W91cPpbLNGBbcxzUMUE3gDnUv66gaNxuPxWtWMFkChoLJzji1aLniRpqudTkZGPUBRJmjvv65Wwj",
  "key10": "3bHioLeggEj8AAUbJiRnTwi4wCczHoqsYFwj4DcymkngYoiwe3JwqV5JnXK1LdGQSDNRSJKSwe6fp9Td7CUiSdgh",
  "key11": "49qt1HMYuJrxWgWRvqkuqHoZkPnR7qjzA4iqVDXoYQL1hCwy1PprR4Vu6FbuQSjYubBZs34pDv4x1CmFuipRVws",
  "key12": "2fvxbnUjuD6f956RxHBPVJmKGUD24pjmgvgbke4ysbBXzy4MvEiPg7BB9HzaKPnghXibuYzHBJPFUFxrASm7nb2q",
  "key13": "2XFRnWtouRq9qa5Li3r3Kj3EQRDccAG9FWVM1DqBYCZrsbn8vHmyAajiRkP4jets3Age67b19CM83g11bzPEJcSV",
  "key14": "4tChkzRMJnaospDbbeLetGEgBPd9hvVZKPoPRobLS7vsD6eRBc2BkfTwhY45cRCvexWCUUmsuaja37XE21csiyvt",
  "key15": "tbBngQfisPtafRDy739ZUAvoEy2nhADUqUCymqcyfbVyJ875PByNpWUwcQHAf7tUX7b1xXnfNoicMBqVYPSPBcm",
  "key16": "3PMjVqc8CiCXcdwwudvpuXVKA9yNUsi91KaxwzAdQyQBKa1EJwXvjALSuNGjjDJqKKFFPwPHCrQEMCuCR4TVHqRs",
  "key17": "2jSHNMhtLrxBm983jcw3AzRGT4Q91UYqWvUe1B6wGT9FJ3b6a1NajTwEnaDgp75vE8zucLrv53uDdGnh67mpKWRD",
  "key18": "4zoaMorb1weBvB8t9G6U9xqJUYFqUrwVyzdUcTNsSN85zbH9WAocJJY9EmxbYzY3r8HFjiHqzmGLvHz2PrPYKQph",
  "key19": "5czhCty5DSjQPuuPeB3t7m7DEQX5mm366NoWKjwFRV19yufpC8patPiTsqB5b71iJxihwcrUtxXZLuhLTr4CRG5o",
  "key20": "sxzooG58Jqqx8MmtY6NRpthjCVX58G11yPsYYBqE7NTUtPfaCWvWgugYkikhGwMK9pi221rSK738143TWCNT37K",
  "key21": "3faW3GDnsT45XhtzZhMAp4Tm4HUHC8xcvCuA8Mc53Fhwtsvoyc5RZFfCMoMvVWSkabm1CNQMDPnutnYQBuNJAcTC",
  "key22": "5HEgDZDVNani8nGy8bsnAyk7Aen7hwvsKztHjMP2pSbLswqY4R7gJUB7Z131ZRoypUmnYdf7JYKy1VQQDiETnVB2",
  "key23": "5fnoJuJw8kXYi7ogEBwPHjyd6K9zmmNvEwaiUcg1X5aNgC4EGD7iEg2E9AAnqVNP8hMKcSJW5xgykfTtPCk2gsxT",
  "key24": "4XaRQtYJNBVVSETBkj2anTgo9ZcpjFcHFAHS7BbHgk8dGXjwWnGgQFDqJnH79YQ2vZyBQiSNTNJe2pQrUwjLeAdz",
  "key25": "2cg7hrq1nbEqAcugpsX8CnXMgEnfCSH513ZD1ZBWr9prWv8EMJkBS8RP3AzRyHHb7NWaqDcMWNoKW24TtdjJKqqq",
  "key26": "5UMHEfXNJPGvqr4fk7TgAQq7mrKYhFuYd2DvdcsXEB4EAC64knN3YnP162jajMdJxsCn4DxGajeDqFA9FN4egyfN",
  "key27": "4NUtiqEd5v5o2kj9DYYQSV2FeWgLkrrBiCYdWQkwKUQpbqG6GbqD8XiND1FxmfoUbCz6ZSxHPPWmiXprZRFtaFEW",
  "key28": "2ikNu8WyzLTnTobhD8LAP1dRbB1a6ixY3JR5dvQP64TTJfbvQpj77H5qkwwnbkbAvakhKXbxuJKoojEF6eWcJYJh",
  "key29": "2GSnPSy9rLf4CMVzuzKU7Kp57MUbVKK9mRVPUoT3t5WvaLkDuwB4sFi8n9PQfAZspSppXAMeVD7BDBRVjBdPiBie",
  "key30": "3QWWVFBubhjVGLmGzwV2MGBnj3yE5Dm8UcWDopWk5TdKytNcXNaPBg4jVzoaCEY8Rp3E9fTT6YAKoG31ErWEMxeP",
  "key31": "5pX1iz1yxGz6kSEzzVuGGBKYNgHUoP2QPtwUqjPXnp99tE9DfYAG9aKtJYMKdYmVF29DsZoP6zLtCutTXggRMApk",
  "key32": "67muytLqhYEikumacWkbr1jkxnKmWvEcuRfqa1pcFzFAzPMBuQAGkWV54VweoWNxn9NKqc9dSKe6Hx5FJeDxvdCZ",
  "key33": "2U38scLbhaZQV3FwZY6jsfxb3eFFcWgUAgCyY95JMkizDn1PPE2HiAQiU9TzBLmkyeR1zi8ma2cLCjyrZzopPh9a",
  "key34": "5taU1PK3sX7CzVHtTGybWtWB2xMwkgbDRRkGKE9b69maWiNfXDwwWT7UEc2F5Sy3sGEnLQM5bK1WYKKD3TUibB3Y",
  "key35": "51fZj7UEpXGyRhViEJTQSENWHNWr2gFdCsrjKEBz7S5Ugd2AoSHHCfGtXVaJ8BYJgGWVFxshayGf5YpJVNpsPKxY",
  "key36": "5CzvkhboebCFqn9wYdfZ7Ry8DFqDHa8hwHBVmSaWQTWuhJE8dkVuEtjRDgcy9GSaqSPKULDGze6aoNs7hcs9uw3Q",
  "key37": "29fg2R9P7uCgvusiAbrW1DGQKuyWGxx5W9MALy9ws3KRgCp3RhzBJBEPNAUZ1uHVsWMd7cxCvsjpWDxEKhnoQbvb",
  "key38": "n3Tj8Vw2yPvfgmyEt14eQP8hRbox56GRBVuQrnV2JmgZSom6DvCwGmxpZNs2wHWeN6juTeDujy7aqN3saQS6aKW",
  "key39": "3Y82sGbTAW42AjZqFDCTWntszynpPQLxRirY6erzPF1gBw1e2MkzfFKYhfvVDWiFiF1P4xS3LDJgEFYGiPvbHSAc"
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
