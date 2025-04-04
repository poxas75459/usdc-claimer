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
    "3PUaXazwCdRnX3UU4uvGLB1nZazDVuf4C3xSv6JPfGib6ox8dDuaAU7WCD99brkJxEtR8reJ1bVVdV9kmPe9jVkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NWrfMUpPQLStuTAZKshbvzf195e7scejFHy2386dTXCxLRVJbohQNFBWPj5TRyUYxVRizBVrSXTJ1b2jYHiZLey",
  "key1": "2G5F4TY8mbAr4zJRx5u7CSNmPMQx7C9ap3zopQ4yB2Mzx9ahsVg8k9fCLjoJboiXsSh3kr6wrUcuvZL7eAmHcyVk",
  "key2": "4RBYJRGUWPFmq5HHFpsor65xcFqnQix8oKf9APpqUs5WCrAcYaAyoqyNs86Xq2V9GLCicQX27af5xokL3ZM26avu",
  "key3": "3GhzS6apn2W44n4kaWH3aqjxGXevecuGnQcE1me2ZrprvnqaP4Cw2QYFSyVMbpE13iZRtpnk9rcDxnLiyt1uYgEQ",
  "key4": "5cBUkgXH3ZqeEjRS41c7Fc8kNWMd5XWg9M5hXPmykW8YECQeTHrVxsZw2RvmEUdJf5XqCvD27XjLSDFU3CaqjFMZ",
  "key5": "32ScPyWsmL6VZY1t1pXJvqMjZnoSeBn5qhvvNxdbvnva1JAr4rVnTevXbewQ1LCyebsMuTP9QmCmoJYUSKDgwaPF",
  "key6": "63t2JqQnDH2BMhRKCExBY9h7aknLDpEu2UqUEQ89vGXJvEW7WC92yGPNZsyaHC6rjWmhhxRAjoUkvhKFnE5PEWke",
  "key7": "5525e68nxyGLnHG9X3dcaYBtpTBMknvRQohmDuoAP8xQ1z1xMaSySuy6v4nhNFHEE19or4U9PHJK7rnqfmsYHo4j",
  "key8": "4czfUYyW5LZGCAYSqaYbTkCgxD1MwxK8vfGZGFRPQxLcLMXPrzyboSXXXgGCinY4NrLbjFPBkvSegeFqDxfX1PxB",
  "key9": "MCrwZrnBVJj2mRQzZbkRSMspb5Q1L6VL8nmkFZPJ1wma4tPr6bqPk5w1XCoRr6nWReyFFmsjYtcfJW34nizGWGe",
  "key10": "3VTQi3GADFD6KriH2uCVz2CLyuhtFTKJeu5LGZe4RmssE4JXGFnq3qksTLjmad9AmtQH4sbtYBam5CnhFTjcYyn1",
  "key11": "4KkCnZuJva4d2Ng6mzdiHErR52AQpox1E8zh6XifPRXJZfYuYNjdJrsBEcNYCbYziMSWC66fwHtLssXJHptTeBgG",
  "key12": "4YE94pZQqGNmcU9Z3RuporkWRnRuhV5EBCTZz7NZvsCczBYnXCD8fNkpqUtrjejBwM1DweAaGjqrtpnoBjnoruHp",
  "key13": "4Y6pAAG6uSALtXcBPfB4RjWrLpYXfJMCUj2y4hZoKhYmwPeHMeB5VLGiYd14j7BfhjqRJihKLs6Ug4rHSMGhZpF7",
  "key14": "5rBZuwhyrfeWPPefBAT5MWSPGurEB6on4S6HFKsWqKKgPAtDWaJtapGE3pavc2ibz9KXFWTpgFozPFAQ99s6Zfi3",
  "key15": "3mz3FchtuCWpf6xE2fsB1mqX1AzyCmmPDZe9XRPSWANpz6wnzmVt7Py2CkRrZNKcWkU9ueW1P77L5ya8makzLWBn",
  "key16": "a3a1ywQhk8aQz29Bbeoq8sHAAiP5exqceVyEb4x4mJ8q2822KZvABoCFUPsADL2WXupmPAhVBi9Grw36e23A2dK",
  "key17": "2H9s1eiTNAtdR7MD8eKv1yRp4kKRPTEdxpq5ArM4QeBHgS3rdUnWC5NZJPkXrgkPFxj4MpSiVNXXneyhh6zu3enB",
  "key18": "ppwyHzgmvk1rUmzixbSUkxyFqHodYLAkKoa32RgU6dzdKZv9z6WshMeV53DboJgHpXZVgix41ZYCpApStzxVsb3",
  "key19": "2Cz8XhNK2kHxjskkWgQScx272GsARGpR8vGPRpE9EE68vTpGNR3JuYHm98nde1G3FywgPGdxqzob5RWgaaQVSsGZ",
  "key20": "5aeJojZ8pKKbskeoQisx8Dnp4AU8sCMBJ1mC8UDL3VqBCReJYUwyeJrH1u5HMhQxK1pJDy14xcxm4my9ctymbGoC",
  "key21": "3VsQwmCJ82CxVvA9Rd5Q8mJ882nn42pvmqhG1BYSSWo96ud6d5j1La1DBtAAPzJQacpvQaNt5FUh7LqwXpMEybjv",
  "key22": "5XVZo8h1UBxTrS5WeiDDnKw6pw1ofrd9EpwSVmMb71z5dYtN1Rq7D4jmZe3EArCeR2MD3SgrMHBoSLMPtSnPtRg2",
  "key23": "3XsNGZs3NgyHRijkHkbxybVr6h7mMEmzTybnpuiSLU8PhYinZ8TL2P8WxQnCS11ewPqtjS3MKVUkJBcdSez3dwub",
  "key24": "4iqbCtSxzXPCfY9R4g9K1qQsqJTfFM9wWgz73TqiKZcmLdcpcHQMzxH6HhxETv5nZjJJUiorLdEMy7VqengoiLfr",
  "key25": "25TSHgYCcd23yhztbz3QxKEtTWaBziVeZah8cBbGGJJDATDJrvtZSgL1rvqAuBFpTpxseFTTjAnyMR86K9Puq2Rm",
  "key26": "2HSp3JqQ4ndq5A4y6zUEyccpJGmrqJWWksauM44F8354rmYNn62ZZ6pRM2u4imx5FeYJSet6x8EYdbDWcF71xXaw",
  "key27": "39YpFaNWxkYbYAW4CDbP63VQGEi5a379iJ4iv97qQpBNTiDiMm9xKqKuERapDVtW7EYFYemuwxdYwoQBsm82Qcvo",
  "key28": "5WkiJ96LFrkdXqub6z8YTFJgXWmgvUNxCsRqURpx7c6WT1bTYBy5q6biBiN8BB1EAXVTFmqLWHhNo49yAyM3Av77",
  "key29": "2onLvRNnENwUnjLeJkW6uf6NhR6TVVekBJce4SpUVyy4VBQHMvuASytKnnQmqRRabJoKiG83W7C2BCTFhK6W7o9A",
  "key30": "5rSz1fgFW38somkVFEtwjCbPqR7DujfTdkLUehVUhBw7BBQw75g2ZAfZ7AnCPNyd9D1tQpBgqAbiZLqmkqhbxjJK",
  "key31": "627xPFkpGkUe7HLJ6J8dv1boECTt2p1EtQ9WNy6FPqsQsABsggGrHsm2JGwubWj2NA7RdPcUbyKGSsKZgTotS4XY",
  "key32": "2q5YGCWQpcqDU9L4ki4DGthdvPHD9C8QbAz8femGqrUQHkNHyHQiGZSmpbQUCQigpsuaNn9zHdKsWMgwQhiCFZ4L",
  "key33": "LkcexTP4yXnRBv6BTXuSagmPQWD5wTYiz4NHC8jac3m4tupN5NMgjzDqkSkXYPi8JFAGt4CXmekdpxxukXqh4ZA",
  "key34": "4J74G2h1ZHrmshMnpB8XZAMB38PfqQiWkmpBav8Emo9GLe1jMTD9Wh8dVrnFB49FQnw6GXMCkUTQ3TVztkdcoSNe",
  "key35": "g682k5vMxZjEMaimt36pnoSsTLmj75gwnfivLchiR8989S9DSi8HrV6CfpZbrrRtUiomfLXnLXqxtM2covcELV4",
  "key36": "5Ta7ujueqSNSSuJNeNCd34gKPTsYfCqcHyjBD73BpW2cZmxTXufwYFkwB3iFbDuMMNmC7SknZFEuXC6mJHhqA3yf",
  "key37": "4STNjrBXWWiaGXDpZvWGFLhckoHR6iV2MnX6q4zRWvCG5UeLbe4ydGb6Ar2kU94TjfD5q4WqvDVH8cLncKViVQUE",
  "key38": "26ZvV6pPhUippkuxGdsNC2Um4xpRg7Jp6C3JyrRee9HQWED9FWNUa4owTjToZKGtkLy53XaxQhXws2DLCksBxcp6",
  "key39": "4VC9jKsVUnjka89zzjCerJhrAgVw8T8TqEsHFzSiJgDMLmuffm3e5nWw9oRwufQhYoP8jSmnWja2U2mPDpoTMdy5",
  "key40": "4781ju8MCxMh3NooN5wogQpTX65h4Mu9uCHoSGN74eNAYmZ4A9J8hZ2DYbrmuZ5T8tJ5hpcyc7NcGDnF8D2YL1Dj",
  "key41": "2LvB6CbAnzfHGC8bLEFujNSnQ6dKkKB1JRduhPmg5n7Hv5jdkrzKDv5NiyoSJikq8wcFJPES2XCsUS5hHpsqfWHD"
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
