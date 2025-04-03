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
    "2GJjpweXHujFN1AQBQrmSe4zELVvevmjFVvq8ScoYv4mM59HyitxRvtGrkDdMGXExibp4VxzsgwmerLJMTNASqii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BWQuqhBTwKH6Jhh1kep5es2MzZBeyo867uCPxRBZbLMdUGnuDdh8n8XVruhEY8Rva73LQcBCqQqEidgzxnMb6ih",
  "key1": "4y5bAPuygWsp7omCjkGZGr6EJjX9DtM9mQnZTFWwFfqKZRht7CG9GGxqHxcGDSx7M5wfGKM9dH4skwDufji4Ssvq",
  "key2": "4Zgn3Q4Qcn46czDpD3FVZNu6tH9NkCyPKhZKLi4GQ55KnjKNHXak8BEmvcNAgS1Zn3aaUA6ssu5UoortyEFS7NvS",
  "key3": "4frNsFjmemhkussRjvvcBFvynkZsVBBxEFbj3Wwekg6zDCm41NA9X6bpCx3hdvJWHiLbyjWrS6tSEzKnhrztMXCP",
  "key4": "2eGS8oxtvh9swNVp69GuQAEy8M2T2j8Sbg7ni6JuQ8igh2rNWk1WBy4U4A6PhbRG8G6DRjyw9bXUBp8BinZYDMRY",
  "key5": "45689ASJMbKGb91Hejjcnz5TPErxtNxtw4j2DkfMgipDpJEFwkcNuE6vNkbgBKXfkqszqHJrSipTAUwBfvk4EFCM",
  "key6": "AQfSB4KhyNPpHSfKyeS9CdHH5yMe2Vwbvyd83Ks2bpMpTtQdvYs6vEkRFAPLTQCF8C4Xk7kUuRFHHJmZTU7w5bH",
  "key7": "4jHTtUQ7ug4GbfDRGCP2K3dnVCCQCD5zEzY43My4iCQu5NtswqHtunFCBzfUFU3HM9Fa3BceKPtt3M3Ah9a4b84K",
  "key8": "4PydJyABQQBmatvr9xCD1GPwHC3fAYv1ovZrwFATPEUsZHDVqJA2y2tjnhViFHs4MctnKnnT3AaazzPciwWkkVgX",
  "key9": "3zA81FHLFfqBNPWZLNZeBBDPRQ6xsg3DiabAX1pwyBFuNdyT3xnixgU2wiVHuSJyrdAXYYohpCE1WciS9E41d8Gx",
  "key10": "3rY4z87RmWLMkXxYwfw2xcDWEW3EsBRKUz27A9poFPjZcjjsRGPDon41vt5PVUz5fZM5J2sZXFZhrWqRxusk5nM2",
  "key11": "WkKMizDjiva3Ka9t4KwBma2NjmALj9xx6rjJr3mh12WhrQ2vxQBbhkCNEJ9GSzgg5oqsNaCbSttc766RNThCgpt",
  "key12": "58vES4QAkFqa1jCqdN8nehbnWEXmn8evyTULKPMS8aAbXkGSF2FESvo9rAXUhF2CkYGJ5b2CjuGMzyUgEgCQWbZy",
  "key13": "AmXniF4pXHF31K13sCXKE8DVRQ6BzBozgUoBindB8b8jnceW5EaZcaz21BAT1FSgYSPLi4Joj5poX2aRwyMUKUo",
  "key14": "543C8QELY4RwTnpk1ymuZRADcaJGoxS9oFSUf33KJxxhT16mUFCCsy7JEz4Dq1SNSiQ4LoihG1yrsCvEntwqpV3S",
  "key15": "5JQ71Tfe3DtysCjdgz4h4CFe5LPmwKBGrjxLG8q6bkSLdwdVLbce1mT6fAt4sGv6rqunzc3wFHE6WyvNrA7ieaKC",
  "key16": "4Yj3MwQ8yX6onAHXFcLwCsSaGWCBULb3c46PUcH11pwARyLZkrsXCqi86SZkgMbma9vLmSpyMuae6HVPQVkF2LtY",
  "key17": "crxx32bmmRBnAFh1o4wXgNAw3Nh3Y1RJQ1KX3AYeZXRnSV4gNJ2sNvobe6kQGanLD3Y52APPhXWSVUkF7KXJAHC",
  "key18": "42HF1nks1TLYBGBkzgyr4WGttL4QeTXSeK7Du2bjtwrZX5d5KgTSckM48Snkcqk6EtnMV16zZerqBimgQPG8Jeuq",
  "key19": "1jzCR4RzZRRZa5LBq7V2D1rxkdDNwPKbGviykU9nHMqqRdHeLj27hw4DBPVCxFnADsa3xajPwEwuw4m2Vvw2uL6",
  "key20": "44EzcJFiLpPUZdyWXzTUsS5bkD767asfAznkMVfydEbesBETKhvM3gLaJ8UcDo3EvWSFHBXfmJzEXb23CKMAbHjA",
  "key21": "2BxdXJa8fBgcWqPkPmyxq8gBjCuResCpdbDhFfXzhzittkAv29FjBZtzMGVanQ73TvVbdoP9jB4gorqN6qvRFfBK",
  "key22": "3HZCEuSAUBqEoyFpgQhD6AXZ7ESceVSfN2LYVLzrkbFRZoixe4BjEyTR5dQ2PAAeoVDhpEF9ZN6bPG6AP7LLoa1b",
  "key23": "39DPanuF5t7fpAetYtYf3WsiwymBjvzPhCRcy46S8gLkUzfPJjgVCZ1dHEigQ2GXmePVEvFwTR4C2m7iSnMqsNN9",
  "key24": "3csWKiHFUJXRiYxrW9sv2aoFMhfFaS2dMJhg2ZS7vjvFLp7QJoRoNkDA4SEt9PRUF7rqCqD3iWc1vBQ8CuS8QAvd",
  "key25": "5uYcyDaB7ihgWn87voSVzokxos9HQm5yknCPkwM3uPYXSVF3iu49rrpwYFt9mjfDik49kVsBK6rysRwxambru9Gs",
  "key26": "61eE3nDcywJQ8M6WvEiUtjFtPBXjRDznSxVrWKJGbMJUst15pSNGYAUWJiBPTNnbUvW19Harw1q5whw4HoHossVC",
  "key27": "4iWSt51didAqeNA1QeKmGXUz6sJQ5k3h6CCeNXcEdi61iZ4Q6JNiDWdzshZXMrCR12jLwqajPF57FVkQoA4JtwHu",
  "key28": "4bS4UmwZhyx1qcfey2H9xyAio9tkP8x3fgpKkN4ZBw2RTVVW6qiHCJ7oCGsjazUY8j1HehKDC6bG7EBkqd3v9A9w",
  "key29": "w2n1qJYUMFztJx5M5Rn4nsTRMdJ6uJmvVJN1WgQsxf3iVYPAKrZTF331gk2Zb7QQ9788Z8tXXK3Sm28DJcNVA2R",
  "key30": "3acEbcMWtEZsVHMr3GNAVRQvcXQtSLYZpSq19Nht13iz19FeNbsjzSvABcH4CRSCvGEQTEut9MkmBfpmYxnp21Gg",
  "key31": "4gyg6BDU7xt8AwH2Hr5LPDXfH8cCR9cpMybhoPNCPeRujbHU8Dhfc5FmZUV3sTdn1s8TGqUo6CToGMHBcQYbeLxR",
  "key32": "2t7QJDijzzHQJncDjsj63PCMv5KYC4qjxBo3ZvLrzYkz1KNUeSouDwcm4r2BprBTabS5vFTfHsAYKkZZfRV6UHp7",
  "key33": "5vRJLzhqXEV1bqcgMpazAdKVvMEG9TbdeoSdJNfvo75xk8eVGazxajBBPT6AX5uJB6FiRnXn28k4RAEsv8MrUomS",
  "key34": "P7nfx8VpcEBzwQ4hWJdqVeVnzhbP9rN7uBCEqg6k9mqfWQgH3fAP8Y8q2x3qwcLW1qZMtiLtmrLpTtqx2YFsceK"
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
