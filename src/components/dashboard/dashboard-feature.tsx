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
    "554JxSk1mzXCg29Tc1geHQg8Hwqthzsy6sWXKrJhpBcunFz1fEsxbVEEZZzM9fP9LHysxy3QHWNERwrNDcahNoob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Q6oEN36ibKktvYg37XBqPiWSXMjBqmc1DuCw8CV7YeU7n1t1Kt9ZhecCYBwzjmkAB2u8PuXuUoyD6pEtRFSUFq",
  "key1": "34sS9buH79bAWsPwwqK9S9sQd5KbafZ3Z8ULmUfv5QvxZ4PJp4eYPZkbpgc7VB6iWM6Jh7N9DWg9hd1d6eLtHZs2",
  "key2": "u9ayRwv6KD6iqVVRKYcXUkXmNX88wFXz2ZhKte7BJJMevEn4XCAt1rRf23ok7rxDxvTJ2daSnBRLmEP7iBqMeMe",
  "key3": "6mTSgtM8uLPvhqkoWHRSM3UT4soYcyNiorneDghfTdVowV6E8CTpnLn1weX1GfdyoRbxrwXe5nAJXUaVYztUsez",
  "key4": "5tx2X1fgQuHkh8taCzHEqZvaJY3oGiaELMn1qnP4jqo7ns9e7a8cSoKbM4NrMEsmiutStHW7oD9z62ifDdzSo43F",
  "key5": "2xounnqkDR8t6MdSfwRBmpbMSUkhLkjvQYJ78M4hTqVExz8Y9u5XF69vV1i5jgC1rgD2F2uD3M37D8CEFqRkFC2g",
  "key6": "5SAbs89w7qKQ775Rsg5x2ptxp5LfCXwDyoG9LUNva4w7ZMm9XnV5evsz6CNEHWEbbhpgoPV5KTSPMWy1dmBwkcdY",
  "key7": "2EMorEfoyu5r7tpRK8Kdd9KjTAsFH4weYWSS7DNevcTbdBi4yhzQkiTcHJaA82J9NM5rjpzwyxx4FdaLwS3amPAA",
  "key8": "25RhTixySqRJ4fQaDVGQKyxPQPAoDBWbYXzGKcQYy1Wcqb9juQMVK331YsKo8hpMDnRpKGSDeKxHbYEVQLnt6DhE",
  "key9": "ETw6J9Npw5yWDXfHCRvABNyyuLNjXmf3PuHMv4p3CaDLPHDbHF38A4kHqwE9ini6D2j1AD4zTGLY6zRPTiA3y8S",
  "key10": "3fFoDEpV1CEgN7yvg6eCJywbVHqAzHAd3BEDwTGJ6VXDvqemeGaiu9CVDLLPuBMDtu9HRXa6nPsDqvPGf1pWmqfu",
  "key11": "5TCCM7JGX1PifxDZee66w5DC9rhRMAsKH7bj4ddZyr89r3rhiNJ4SRhhbkMwqdTkmfZcGiapx8BGQXfQQ8UmxtFL",
  "key12": "5EW6GYdGSNKoLXqCUrEM9mpJJq7CBGUxSfDU2zcPcSDisjHAmRwgmDUG8qzqxpqyWrA665vwJMP1GSERV4d93AEk",
  "key13": "4FTqXmNmtRCFMsMJmyVX4uGuNoB6mBPkfNbz3dS896Vsp1fnMPLBYnvbhiFQT4xNM4soB92C8fpSwuv7sWKakU45",
  "key14": "df548SQ49E1RzYnWHewVefZTWwALGHP3GKnwpogybuxPZ31MMhVY4z3HGJDmZUomLA2Hemoy7U9gxyii6ypgS8m",
  "key15": "3Rx4cGftdAezggeAp6u1oU7tFPEuzSvYw8MAjsf8UAtfz1nsN1Bcqxszpt8gRHuHX3pLtQ6t8JaJx4bYtW7tBZMd",
  "key16": "5BBC1r6jgpz5XDy9iGcZraE4R9hvth5QAWKSyEc1JWyUt1gAQU9sxvZfjpNse4yA9kEwcQECmJUC5QuxcCWmguyL",
  "key17": "4FkUGmf5wZ2VjfcWVoExWKGKiUJ252z2ZVanYGmtwk3bjkWY5VR2mrCXwTpQ1w8TjatuHSWYvsfo6woETsenQ5Uj",
  "key18": "34oYafYeP3GMQ1k9pqFRF7NJ66YgwDVqGzzagZPpxobE897QnSZ853LQhCnNFZECX5iSmSwPeCa9iYpUoXCxn6v5",
  "key19": "2VDKYZ1qckebVU9UjvH3MgazeV7JtmV5d9Q8XrW1Z9RGGxN6CbGokdZb8Socq9G25PbtAmBKGRfgQn1UC5rqL7fR",
  "key20": "35hG82vuTJDUxeegGPTHFPDPs6Pz4xCCzLHrD8of4B3KT1eNgNMsPNL87qeM2TMy2qJb2s7XDWnjYh42ggDDrwm2",
  "key21": "5Kp1t1ChdcV5xcXXKsGJSDj5wNhPKSKbW3wcuuhco9QWJVBkEQ4vtpfgZZi8TKVcbfvtypBKofRgea9ubRTQgJyn",
  "key22": "4bvR2CpUYc56mdBDe7eRNR5atmWaL2QFXAw88GvDMoNjZh2p3BBFqxyGPJNnZudUU3h2GgMZjaBnjMWn1ZkDr9TR",
  "key23": "CM995o9Rzo7jLyTm7uqfdyx68qopRQs6kVzw5c7rQ9gYPQgrdQEuij1m1SVCxna4Z89RipmiioU7UPdCxps7AZM",
  "key24": "46An9bwZUX2eEk8rU6WogXcFFGc9XDb6WZ1uUN3c9gPZ6BDCpy5bXR4ToNE112eMJZauDttBMpCZrcapY6ReURoG",
  "key25": "grjgKZNacvUZhQ7QUBhu1uWgGoMHy3mFqWhHnevX8HMJhVedqpNEtJ2M3EwaFsrEsMPQnjZ3uBiQWuj1x9ajcjh",
  "key26": "5ZZZAibJ8EuuUUdnc4UW1HaW87AvDnD61x1pFBx6Rict7ntfHbyABdaaiJLdTh5Tme4UZ8dzd5ygWTSaqpGfsiqf",
  "key27": "kbstucSrAYxrrxQHUujYAKCfaDhr2jSiKy3sEmJuSta47fvffGLctEf19LWpSwTqeeqaY1NzTrA3sSqxLMr6aDc",
  "key28": "2i8tSovXGQNWs4W2wSwBtAkJeGGeke4pkr92ZNSZysGU2kYZNtGFGhctwuuXNsunt3w3hdFXJSmydFBMGTw6B3uM",
  "key29": "4jqKL6tUDsc6T4k5J1RZNSicD9GYG7Ehz174vMZA4jAwFrHTrS1oHWtj1nqWAP7wzASs1E9AdeSZTxbnfCqG4wgc",
  "key30": "3sJkw5PV85QaoWcCM4oE8F2uCSgPXffXtkVUbMMmppfmy4g1TLAtCstTSAnnWu1bvSxdDsMDvmthXSkjNBGNSNqL",
  "key31": "4eFmTJuRokwTsh3F1QdRK6J9bjyXdwZFx3jtnyZb7EGLAjjhEQT7F8c2397nC33PbsRq2posMUUAcpY542gWR6qz",
  "key32": "27Z8qXT8Po4xMhZjVBuTfTakPRRWJ1taDCHCxd6PBeLcZfjHbwSssQqPrBHyjH5DMUjpMVgy6A54NMAEqcBzz8nA",
  "key33": "cUtcbpmg3RX3Ckf9RReaP7UajuLH7LKbvcNrUuYUXNRyP68vzpRbELM6sArqepUijgpHHQf2EL2MnUYRqitxSHU",
  "key34": "5Hs1SSSptmxu1nEUFHgi6EzozDGE6n8cmJ5chCvWcG1kTGKdYLiicnPEZ9rn3CEBf279Dccxf3yvaCjRRJKpRwmS",
  "key35": "2Uu9PKzDyotZjvVHCBsxch1EbyQrCEzyQq4C96fqW6pdNhuwt2WpArMgxmG3RP95oFbzaJTWydNzS5pFoFs7FqV7",
  "key36": "64rvMKfT3siPpaspEp1s67FLHRU9jrLpoBeNfoVUVjJkY4r1aYYdxpYfNbuGpN5DwiFRym3VLAqvYpti52BSFEyU",
  "key37": "2Udj5vZTeWXB5L8cxZTuoxRJLReMTfd3kqYCNL8AbMYAqzgUfuovUXJrCpDEY96or2zbRQ2pwHFTHCh8HofFLt4G",
  "key38": "2cm17EZg7sjDfgY3oqwUmCFkZyma7vUv565LoM7FsGbmdKsovyfx3pZ5dijgd39NDtPwa7LSWgQPZCNNLHXBLeFN",
  "key39": "5eWvhskBwLYgkD1pvw1SmRG9Hmw1yL5X5WRTR8PPZTbeooBBvji6PDE2HKZvvjRA2FgWKfvz5g9Dm7oc877TLvca",
  "key40": "2oudAPsdeFsofa1wCAr8VAYprDWdBF9SmX3LwsqXpHCs2R97Wx3JJiAXB1t4PkstEz6KB8Es1Qz6u3CFVpPo6kZg",
  "key41": "2UWHZ8LAR71iGe4a9wA2KGkYG6K1nfuiRePAKU6RXQpjaci2FQGGsP8n6DLWBBz4XzxRV1LHKga5yW9Z59EbK15D",
  "key42": "2g9eHT7ydFGNfkQgkSrWDGnV4dkkDLr3x9vUYWj1CrWk9CmRDVyRGD9aPjDrmTZ8ycR7aTmzd1Qgi8jJJHYYgE9s",
  "key43": "56fkd8hpSjYNpdp5okaFfpwF1EenT7UQXcXQ31pzvM8kYefLYv2GGz8zBKCaBCe9qD3Pm6HztfFe6aRLXMvcx2N9",
  "key44": "4GkBbqZPDKu811vnb4UkNWVwA6onHQgTE2AFqauyZxV8E1Vb2HeUu1Vjoxbow3RSmxXKfYtRX2p8xUuLZpmhWbUD",
  "key45": "5LmJpbFAcz9fDnvgzXYhL7JNWsfLseHSUDwx7c4P4vyAgyomfnTA5ApuR3uof2y3V48ZdLZmvJceHZPBmMaonwjZ",
  "key46": "4GtpwhUTYkZ6QqZiTMPoCRVPeZmzRHLddVNVGKdeSMp9X7v912caoBaxYZXLoBRjm3Lm3RbsBFVatkLWU4KceMyL",
  "key47": "39QxSG1ayYr99c4E11u2JKJwys1ZNToLszuKX5agf8pt8HBnQMwsL5eVkPLCLKa2Kd7ybSY2w62RHkngcfto4QaM"
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
