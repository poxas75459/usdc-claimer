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
    "4aWW9gM5osbgKCuYb5NTChHFkP75zf2NSmCUwNJsZXh9Zg5Qi43JYmYpjURqcHMHEh5hQQfN6quHtxGhsH338yeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3whiV8M34dbRdw25gimm4jZshudEbg9CRJCZeGactzYSuVYY19S7g4nt1wcUbXf3DJSFofC74wd9Psa2v4JDqqqg",
  "key1": "2HWpwV5a4eaemEXspCrwJwYeXKTtpgnnhtmQb4XFiHjKKkjzRGmc5wqYYBZRFDSyiN3bMaQNJCWMU3n8rvqePKrb",
  "key2": "4KYFNpoczf4P6aF25jTpikjde5DfKPQGNs2j8pRzighAaujSuhN4fEGCgox2jCJEmqA8PWX2jEU8q6TFCanJrf49",
  "key3": "2FCCXRzaZMjp7dL1681cy9d5wo3D1SbGSm1DgwSBnhz8fuhhdo16f6FDogCBn85jSZhFWwJgWsx4xoPyMt3mPjDJ",
  "key4": "55yj6s5JECUYb8cNbCCr6rN2C6e8hdKp7mp6owCqduvR7GkLATn5qy6TcTF6W15YktNyjwKYfrRHD7vgG9q5AdEC",
  "key5": "3GkTqdrmZFLV8mvUcq49MgRGMrS7ausv9VsVaq18TTu99ynBpcdn29ojvyFSr5z7jDCiLYjCoKQ6H2Ft9MGemhE8",
  "key6": "2mhXTsL6ov96Qn9KkgCF78YK1FBiGVrdG7jaFahJkSjaYwer1py7jecETHM1WGEKeYgWwJJkqVDvtgLd6YATmpgv",
  "key7": "2wLErnoXxhM5h46GYmQaSzaAehTQNwJZ5sPHdABnknCUBrGvivgizuNU87rsLPSi3BjETf25NTGeFV4SirggRoWv",
  "key8": "3Qn3Y7sM5QzNfcDLWGY2BxU8dHYXSFEdpNmB69GYtSQaAwkShhxEsbTJUUdydrpz1eU8ee1sgTVBvgXTJPnfMhNk",
  "key9": "5PZmeqTaQsC23MhMzDnA95y6dE1J3QGVvd8UFoVYB4SJGb8CA3cQa1LGy4wAt2V62BJEBEj8yzXWrEDApHBK8z69",
  "key10": "3RkXbzreSoHdvFLjbibAbrgAJmRivgisayd7ChC36rE6haCDT2hNTXnzSNAda1XkyCSaSoPJ7MxotBDFUyJ7Jm9p",
  "key11": "65MVfoPpE3XjiHbrhM5oVGmBMr9cwGMgitiUuESSXs48WcEph5DdzTAreDxvSw2wwCCCtrXg8EJCFDKcfcgDfiQ8",
  "key12": "4ZniSpRF3LM8YFyHSwowTGZFT7YKep9bWDxWhH4fG7e69mKCrP4fuB2xeC2P3qiZUj1gDuFuV6rTidKGVi9VA7J4",
  "key13": "KduYJ58EHX6WKYLUDjTVCzNCyatgcQchyejEcKN6cNHbxPQyz9nJL7vW4CQhY7mhSaYfWHW6NR388fsmvUwvkyj",
  "key14": "4u455ASgCh1wFVNRioZPjxZLanwy6TNBJqYUg7593J6p3uSn9bfhDtBFa8KZ8XAEnsyRYy2FJD2ZRupfUsk9nMQd",
  "key15": "44ooqdn1YH7rbTCJiUpTa7zfoB4Co7ZkNbQTXgfPCYtK6Lipq4TNTXHMJVEnQcLUxFDCpmsCmzeRFHVWhv6ZC5qW",
  "key16": "35gXnJMgVzmr9NFvGVG6zVnKSjqxGY6reJYYvEVFZJ3FcdGo4A9P2zmXfzkDj7pJeVBaQuxcRk1MVCFEeXReHBjX",
  "key17": "4Z2e2QZprJzyY2KHjNQKpzohC4VA8MyNLeGEmSfeUo2FzMHbqsVPNCrWShYzAr6PY2KRQoD6GAavQwyrBdCNbCwQ",
  "key18": "5GEmfGAMLn5C852Jw1ZPTFwFUR2jEf7o4a75UtE4oD14nK4gwegJ4RjLWGFSSG9gSkankfNQg6seHPJYtYK4Lnme",
  "key19": "2Js4MZBtSkxBxowmRfnZ6vmYdEoh642QynSg4fEu9bwxnvcBVNeievdoqvEZHjjq1F7jvD78H5aFMZXeF8rujMYu",
  "key20": "4ZkyepPT1Dxugv9WwNMzrH3BQbg67KYxjD6d3MXWoXkrbCYeVsVuTAgA9Gd864UkohNmUU5eVEn1a7z5aEJXYtCA",
  "key21": "2FfjCgsBjhTFoS7k5XAK68Myjf3dh3PHXEJFjTSoBUYBxm828r6HUbUNw9ZGQaSmFyVt4mtkPYZvvhGSTRriEvFR",
  "key22": "2D1e75W4U8F4ATKt5e9PBKzt6oCzk3oT8q6k2jhRkm4vVYzZ4qnHHu7xJQtGx5eVy4WFtG3RzGMmciWRkn3gz1xS",
  "key23": "2ky3cwg9qzEvogBXAMqKZr7g4Wi7vfzStDAEFN3y2MCXjRKE5epumab1QDerBBYjvxBFAPr39LQWrNn1MmgVk8Qy",
  "key24": "5zmLSoAyNuUnfTFuePeS9qpY2CBBkL6RwfgvdDdQCYJDcaLASoqkBuBF1MHL7HXguewUbZ5qsYSL5wEuTTT2qyfD",
  "key25": "3TeYqaRafj6NqPfU7SkxfUhCmUCUyrPXDfUwvtVeLFyZKoNiCsvKyJmi4dUkXe4Yhx3SU85qzaZgayUuSaUw1LK",
  "key26": "tos93Yuzu4gB8Xek7YpABp1qPfh3gB6sTmNtvPoBzZkU1fLkwy5JJvca5HNHenCpQx2xiMAHjGvfx5fNsgxfwJ4",
  "key27": "5tzoBckgKz5R1kJ6296Ax5oBLXUPM7J8wDtPDnpSGqzUDLko2gMfWf98T6PJSFtkBupnw8ZdSuQoxNCQDVaXKdor",
  "key28": "2Ux5fkQDCszaEb2wvbki62dfM1UK4EKZB5yJMw6PTovbdPdzeWn9bxwpMRnSM2XpfkkCeeUUBissMJrFCtiodL7y",
  "key29": "4PmFSx47GNAQtg68fziyuUDAMjftQVFKcsZCz2B4T84rDWTVzbQPxYkoXmFwz7XqPMVFGeQ4e2crLRUrT57hgygc",
  "key30": "xxWM1WH5D7W6NVAt9bZwzDS3Ttk46p4DB75jiBVEjeKDDdTCc7A3GTHyipwgMK5mumXyje96d2YnTkPP4YMUAN2",
  "key31": "2E2yaaGErMP3GJ11nxP2hshhfPxonviotmaxAJmXZiokPjv91q1m4UKurhfXNfUGmdViDVh1vRVSMZBbUWLjMkD7",
  "key32": "4jtuM2dEs4fdBi6pBmpkwD4JMhBx9LdT85Q7oygs7XDNCmYEx9cJBoCtAR8Jorj7pRhkR3CscRTRia6mLMMrdAa3",
  "key33": "3Lury8FFUUrU5gx73KZNuPChWF8t8HK6jkbYfrMkFCX3VaK1bzmbub342secyb5dSKGrwCZJfaL2dXCj417JRW6i",
  "key34": "5y1zzKG52ZQcQAsuiXXnhnce6cHfedFLJakWHhCvvz7WFGLW2otkW22AKDDwAWbPkFP1RTZNv3jDZwxAgADW3NiE",
  "key35": "3rZgo2Jiiqv9532gfXL2VENUDzLFi3X16qCwDpGb58E4mbtLgZAaF8sCBtoz4SehQiicjKhKiswYzaSiJJs9uYDt",
  "key36": "oaZbwLxF7M49RX6UKLyxiyZkt7hf7PAg3DgbDT7vqazfJRdGfUCPMFpHH9eu21eMjAgnpUdwpFRC3f7UCU8vGDM",
  "key37": "9tJ8om6NtxhfRiGDGXDt7NeEm2QjppjAB764YyANsyDXicts5sj25HL97LbLfB44mXtYe69d1wpnsHDS7BRt596",
  "key38": "g1QieWCCMcbvkYnnuADs4pq83nfTbD5P9Gr6btCuCmNoobiTr1oju22HNTbmHiZ6VPBaBJ5VfVBpEbXTN6EX2va",
  "key39": "JfGCpJ68VyURyJMu3azcK6MCvmwgEYkvbnqzJDBbtaa5P6BifGSfa1vjFVY6mkYmozLVrSxu99nY5ijdB3LyEKE",
  "key40": "4n8FcKa9GSJWhi1jsrF6HEb6STqmP6gY2S7NbSNfUzWvvBEDXnYNJQARTgpzQpzv7ymLUXd1FCigU6LwPYFpw2n4"
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
