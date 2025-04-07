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
    "33iwBbQhpfUwUBzqkWCdsibBQpNSK3kmZhWAVnxKK6uAYum3BkFnxPmQRDKBBKV9KYE4YGsBnDtpFY37FgHyXKxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nWP9Hmmu4W4ECFcTMMskuSY8JRAmFKmnQ6veV7cha6Vyaz2sY7ySZ8Z55YAYgvbQe6ime2vte3ncjneb8dQBK5R",
  "key1": "5w2be1o4KN11gMAbdsirsdxuXdu1Hy5wDN9VzWJWSHjseK85WHQWBzsPnW1qEHtdHVoMacxdoe9GEQ1VzGk9w2aK",
  "key2": "48mAYUwbhBShPvUkxhgo39ks5ggK8MMeQS345sWzqtrKbbyqU12mQyR791vxJDthoFfXKnPrvCorGvuqDXgWV6jk",
  "key3": "5KNxhuzoMnfcmdcr7F5S2xVwrsiz7Bxhdp5yZmoEiePQsLGc96bwXNmviqiqVVX4FJzoXYAAGoVFcsafeURqj7iw",
  "key4": "2FahLZPc7dMpGb1H1cdsectxRBrU7aZSKDcAUK3FScRPkUWwrbGDyA6yiijqd1j3c13sGZvkvSVQ5mv2GKKMQakn",
  "key5": "4qj1NPsEd8TxynskDztyTUA2NCG4jpQvGKA5d4wQvWDg4dWtUK4j1JH1Lbr3ypvr5GNa2foeLcSgEiB5Cow9w47C",
  "key6": "4Z5VAtjRWctpgBx9omnBdrDpp1v1c8uC38W7BCk8kxR9GzBSjsWVP7MYs8fMqym25cgvJyjyHxUmCqJq9VJEsZ8F",
  "key7": "3UKQDZxQemKsuCLVLToFUASaT9gAqryb6xE7EkxMcnQyMpR4e64mmu22mSGVS35pfhmhuGrj9wZMW5FTRYen1NHv",
  "key8": "4t7oCe92c7Kn7hnksF7tanc84fo8mp6B7C8nkLsKZWdGdUMnQZNvX5PrztLWuBnyAZjStAdCR4kYRo83CEYRGxnA",
  "key9": "5jj13xn1qAcLfSfTwpouzhwwjfS9VkapXFytnGv1XQaR5gKNthyALnbrYU2xzuFc5wK75EfSA14PVfzEDT2qCr6t",
  "key10": "2HQbErYZdcvDzX4he2M6e7AZSJsGhJ8fZRwJxNkstoVEbmCRvqhbCFq8qPUYqkTkDPUAVXogFFA5SPqQ5jK76hCM",
  "key11": "2TRDSWFNkAuLJ2YNUE5baxvSE6YEQTwAYhRofetv2hyLdi6q1FLDQWWqNsGhUfZxJqkcaa26etQgSdabb232fnPW",
  "key12": "o76UMv5Y85yc4eixyjpNJEFYbwvX78oi47t44jU1eSKNKtH5bNU1iHdv3kG3non6BTisDW4CKVbBifEgdhaM4VL",
  "key13": "4fmNfGVXhSFqwoszM3DBRWowafbUsuHxQDDUELFyFvzTWvGqT9VSVr4itaFD1iT4VxJqZmWdffYwi4qryVY93UxM",
  "key14": "bDzexQimKrrKphK9jsjQ1QoCHTqVsRsJNGjusy8uobaZzkwAprSwD6GizRWJqP7FbVZDLXmtCfTD2Z5UxX8Mfef",
  "key15": "49sr9BiFPAhCfeT1sJ2six6M8raVmqVRk81RibwrQDpbFrTtRfLaGUwBkEmNfQ38NN3jZ3WrBNqZDoE5bFWVAsyj",
  "key16": "3JJ8wFh42i9yZu7cGVdUsCWAKqiJNG2Q5tx4B8VZWR2uuX8K1tqApkmoTXgJkbGKkLKFAV8Qfzo1nZixBkKJBtQQ",
  "key17": "3d8bZZfUPtzhLExEeS9sdZT6hFqksuLdoig8SmXF2cSAPVimjWd8WziFDV2YPTAenB6THR7JMFSoCyu82nAEpPNr",
  "key18": "5GUTRy145HCoEmrHsGRzwsUpXrMMmyQwrbc3G7aXELTydjE8aTLtC29MADQeu3miQvteA8ND8uFeox3cJw1L2WSq",
  "key19": "4nn1eb2Xxz8Yyo57fnbmZKBeSaQcX8Kanqf2E9nJLQtdd5m1dSD5BpLUWefCLkLaxtf1nFpVjAGjRE3kmh2C36zd",
  "key20": "4fFL9Hhi4LU2MuPa5MXvMPeNrcK8tSrKFw1Jw7Vh3KS1YM7CptjfBNHE9XZkA2Y6taxuHgZmMv7gxvJc7ZCwCLdp",
  "key21": "3KktP1pTevpj7Lba1442GkR829vmvV9MBHZ7whz7Luhw1Dw4H7EPCekhd1mor2rZbnwuf7RgeTRw9VjuPbEVmx9q",
  "key22": "aAyBLJ8TifgG3sarb2rtnBCcrxuqugic4MYeeHYuHYdEgdvAhMwjNt6D2h8pHuzu6aVhD44c9q5KVG85jY8MtSu",
  "key23": "EndKz1sVPVP59TVLDy2yeqbhfQvaHHcjEDVV9yeeiFfQaY5Rbqu4z4QxXnuNiETwoUyr5YVck14EZ6tjLbMohDK",
  "key24": "5nnUwGSsnxNJPqkpMGEDgKMtukWDC1mt2QJsHR9zXeTSP4b7ZRosrdshTsVCQft67WCDuo3ouZnPBdFPKhswprFg",
  "key25": "7rvFQmzvsU28vnbWBzrFrReY8a5Rxwdnsc6Q2JqBMPcQBrY23jwYkPg9qoseqRqQqR3BfngsgHCK34BKQF8vxWY",
  "key26": "oECWQ3Q7YEsv7LQKgdppfuzGNcMkfznr9cdLsE2NS3ES7CnASuusziehqcy4kXJ17UoMcTJP4dKsmwPi9nY4zaw",
  "key27": "4ZfA1KYdLpjpXf8QqW2Dopj9fW3H6n11oAwP6VAHEk45aSXf6e2yDPwcKzkXh5FXuKGtZwySJnmqzGcD7chKwm9J",
  "key28": "2qGcMgCNZc2Y3VeQwYwbgKME24UN13h7pPciVADnUYYinq1KLewrGvYfmGwqjswLAVzz7h5aCjKzRvRxmpXQN42B",
  "key29": "5VZcLVvSpVd1V9MQaGuvdLuW59Ga9Dm7iyQJNgFPNVcUu5N9BDHWLAbrhsqox6rSjQekhu1gimufqAoxmiLeribN",
  "key30": "q3eRHmRYpokxJe8x2fwjXHaEM8PYi3uLk2oetxYWqtWTTSgYnLYaRCsjK2BmFoET6rjvd7z81bJwuQqABFvRTRD",
  "key31": "4i47JwWmzV83Jz4qdt83jgUHcnH1geEDwVjqvVZRyPgtQtg3CfMy86aDotB129eL8VJFYWyBJCGkAJwWRGYQqphN",
  "key32": "4JhHdQdYYfWyRxET3MAFrYh5Rmy2btL2aiW1ew6yjbvd6PGNZjREdhsk2EGHsry8Y3XfcGShmUZbErVuYzaPMkaq",
  "key33": "5XmdGQqmmSMssSnyko3wcwNQNeJ6ucmc4sFvcd5P9HWm8pEB2msMuw5zgnD7xSu7hzb85VfQGTCsBLVXSLhgMupG",
  "key34": "61kyGAfYwkfMHfDzp7RchfiBMjbBa2LbVEMbfjSEWprcPF5XEzwr4SiXnZ3DSR5EkvVVAFrW2AU3FpJvqthawGwk",
  "key35": "2wcxpTLgRfYdccK3cvzfPzgaYJyDFN3Qqa5v3h3nbZisnxCrKxDEzrvpxyr299j1REJtxWtUYuJpjHr9Bnkasyuy",
  "key36": "842BqQPsebPMQwdgKDJFfZyHNstsNdMykHudvkAw1Cqu1Gzt35hxc1DSKjRfeh1aJtz1ppJGtpa5tq2BMwVrpUd",
  "key37": "2HjBcSyWfCAspYS3wQ3kwJt8GTssxmiXwFBoFbgYjDRMxyQHUzD4uiqpk9pPNPhWm7kRRaHidLuyBV3eCsL4JKoH",
  "key38": "3UjGsqdDpimD2G8FsjATDiHBbu6Hc2dYeikY4zkqsNvjMoQynrnjMxCSWYFeyNtEvs9oLr2YBkNpCMS2VorGiVat",
  "key39": "2aYULkqmL2eg6Cc5nPH1LgkdLCZAoS2voZFanHA5J921sNoRxeDu4axVgRKxraho5SDWyaA7K7eEDKLX3wHD4rqa",
  "key40": "3jcy3fjzBPcuK2kMnRzzwxkhdiyMFxwRmo2hroU7M82QcN5VeUzPXefAqapNpAAcigM6f3T3Zbf1MTKoBJPmh8za",
  "key41": "4WAWxDYy7DNSbbL93tXMaeeNxkELNgzeXWaMNXKELWj8aYcsHapdWMdpGhPSymiwx3dHv1u8QxcVBXvHyFZmA26V"
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
