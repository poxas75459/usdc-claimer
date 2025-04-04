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
    "bTNyge1CcNdkvpnTs4VA4hWw1XxnkQ6QKkcNkGzqbk1iC6ydjxC52zzjZAcYWqB8e3Rrf3ZFXrCMsHPPTV3G1P8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FaSosw2XKG7StvfwiVZ8MvkzUzLZG7SnngTnvzmeYFNcyTiJJv3Dbp8SMXEAzMCsL8vDG3rFCf9KkAUcXCnCxTH",
  "key1": "2JaQm7vAtmrjpDrz3jf6AB4gwZRNKvAWoXRRBS6zBYHSBqMwdovuPBgsFdFdTxEZKD22MsY8SG2UE6YYih3LWyQp",
  "key2": "Fn6gSgWQN5s1Gk4Py5LvPabCnkvYQH6VUJxhvf9S3FxXniVNLD4meBtmMwib1KKhyfaXKnYzz4xoy9UVLVQuHoK",
  "key3": "2THfbS3sqikTBhRouYmurW6hQMRP1hHko73kR6spbajomeuoBTShkZwaErWqJHFMAGW3xpgkUJ69hMGfcB5A3PtF",
  "key4": "5wtsEvNGcyojazhKHWj22V8wehaVoR3mtyJkfUn8n4oBESbhqTNxiVs2vF47zKBUzd37C2eTooVVrYgSoPWqjmpa",
  "key5": "4H1g2hxJo661czygyqy2GdTU7PYaWoc5QGTmvpgqiSwYEsDuYdUT9Qh3tkt9Kf9ec4Ng144L8MfCak3Lsxyjyo1c",
  "key6": "3AuGVEgNuBi3cKnQx5cVSqdv7rjwQozNvdcVGd7KGEbQ3v8y57xQqwy1YGe4JxHppGvhEJVDmkXDJD6QuefDFgar",
  "key7": "UXxhjSmT3mdF96oPhwxNSCV5twuSDqqLfpz8DuATqvJoseY7t181D4jKskBgqgpgi6h9smXWuAcc5gzHT2NpS6S",
  "key8": "2gcdE92b3psf5bbxWjmoA46hnLadhsbnZ76ZAbr5aP1SwA5vxGLSVG942imai2xUXVYXAebfk3LkgrH5kDxBfxpC",
  "key9": "5E6GFn1SURPqJ8uPxBxN3oqY5veJ4Kzn6kdfxLi9gCUzBDWmy14DUZNxYkvd6DVaexpmuEHEHufLawkaoX4Nu7Co",
  "key10": "3yUnCEdX9LH8YqVWy1tNNdRXDTkxPC4fEyi2D3TAHDbBr24fnBUMDtt2RdeAJ3n5j3xu16tqKXTwNtqv2tpX1Kfi",
  "key11": "E3eFe951LEmTReCE3Xwmwj9KapGNE5gCQsbi13f6a9Dg2doiyHNTbVimiMfmmGVPTCzPfjd4xHs5LDH65Xm4wJb",
  "key12": "3osVcTrVL5HW55BG7uacty1eRZWyXrnqH9r7KVQ4vyoR7VWVirPi7cQhbBgxE5BfGsyu6rbErxXWnXBqWaCL5J86",
  "key13": "25QpHPiQbB7sNypMVXWQrSk3yp82ZLU7sFjtDa7hEvu1Rho2hsd1sGRHKNcGhFZu85ZGug3B7SWtaVeCHAYfZNWT",
  "key14": "4ugzK2zC4aqBZRnEG1rtACCCF1iePrrDJbtqSdAZYFJ3K1Au2BuPBjXxEPAjZbnM53ZmMRjC4Jq2cEKE1g8bK5BY",
  "key15": "J6p7azj5e25U9caLnfx2VUB3szPrHnyP6DALTAeG8jZ1yUpfispDtiqNzSuvLvhY8RifKBSqeSoo5c8LdxKnvQy",
  "key16": "3PW9xYACeK1wdtSa5zetvtxzTreDadgzSkUMTdmqW4aa8AWPcJTsbjHUUDMQu9ZTSKDgmUWygzVFAQgKx4H5w6Ww",
  "key17": "5NAsaiymu3vkm6KgYgK9UoEsRBExxPekP71KansZdb5UXDVLUasT2CAvhMEe9F8R5wA3LR7B2Nsd4aRPB1XPdBFT",
  "key18": "4SFgSeHGeCuMzA9WqAVtuorYA68bHr5GeifVzox1qj6fw9R9S4WWhE8pTWt1xwper8FLP5Wd5dFWez3k1PRzKS2T",
  "key19": "5QDhRTHHVfqNw3iFFhCvgnJb3XPdPAuMk6GZTpDPV2jMVSMhKgXVz12cbzCk68b9CEtcjycVsqtyuRXVc3pn3MsQ",
  "key20": "2Jbnwrt5v3RMxDrY3oBPSwaZAJPQi5rzpW4KALNg1iyexbQ3K72y1UDQmNnox2FjWL41fDPs9HwknCrkTExEFAVk",
  "key21": "63oRzodGkfi3AQ6Z1HLZhfDPr9pkZjWZcp1j46hdmhmUTWZKXogZP6bQWE8o5v7eN8uuaxck6BJ5vRVkXAZSVQzW",
  "key22": "2Lz95ubYPLjntSKYwt6821XSX6RXMafyPbwoaVE4SbiryJE4CZL9RwQnSax65oRkG5usPpiGdrU6ANM3U2a4Vnb2",
  "key23": "341xBTc1iE1B76E7gndGDBZPZnX9wo2cMPA5mBCmgAGsjN66AZvY3riDiFM1BRJn24XHXX6JEEfVAB8kZroMnbrF",
  "key24": "4mKmtuHdujZLEsBBhg6pEADuJZB7TS4WgT6h4HteTbQftWNLBrMEnbk4oz1gVkn8ZtNTMrf1cKrEPqFnF38WHiKU",
  "key25": "b3LvjfuLhqrNDsXd2geFAeNUHe3ikV8Rxqn4WQmBbihPG2s2FRNVguSGruB3rS3KbxRHw9yXUsWc95DkrQRPter",
  "key26": "4rpJRZkHSq3CcXk2aAerarGeKqmsmYbxRNyB1DrNU6JwYJtrxE9f7Fn7hsXjfcrcix9BAJNuTBYg4kNMY6aiWJRh",
  "key27": "4CNzXrqwYu5LVj6gGSMNQMe8QModGBrjojPG42uJs8RSbZkRKwYaSP7KwwCv9p2SgsWZjmMUid4esSdbtjUEZRDf",
  "key28": "4uSCZ5ngcZVjB4yg8AiFrgtu7JmmECERXvPx8xZ951BiB4RCanzUG1ypQxTXYxesb4CLFz75jEnJHE91oYb4ioMW",
  "key29": "5ffuVxonAXmTLzT1EgQdKgmzbY8gVEsvR9aDHMW79Xjdg7E9M5qxyYgPYVssYmgnwqNmdSjBAeLepPuxdFvT3ckt",
  "key30": "5sikSdFTdeRLgmK3HioPbL8saG4BjfhMx7kyDGCzKpothn61S7c8ZQ9b63kPKQjkFx4NcCyCaRVmpL12zauyXGvP"
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
