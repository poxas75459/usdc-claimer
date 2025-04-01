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
    "5otRMQcuanz1UywLb5BNafNeu3CuHyMXMwuNzno1HyiTW1sRE2bM6mV3Q3ZxxZBXbRu4gHx6r4y51cBa9FUqRCvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rC9grz44ihMGcuLHRtLQMxErcxMJdPwS8Y2eMpCRKab9D8F7T5tFMAYvQAzNhPEAq1uNyVvcFmvDu7khNG12EZ3",
  "key1": "5q6ZzCCdyg3wAK3usiRCzYHa8SZWJVZAuQqFMph5HZ1UwobJjjJijKN8bPZyBUrbPqmyRQ7ML3AwnSbaMWVcaoyB",
  "key2": "5Jb5bTfXsNJyQbn4f17xJgRAPpdRCajbryfZxV5yBpMYxsE5vcciLnsdEzRMxF8a3v35VTN6Z7mbTadL3CavLGR",
  "key3": "4g1EjSXET6rKsAb53yronvRaAbni9BX6gdGwXancFkmLVr9nacRTjGfWrvcVngtbsheLPXdx7EsUYfZbcJtz6jV2",
  "key4": "DBjeyCUw5dEEisqYSJdVCa1C8beUSTgmegmVLnJeqse5pxkAkPv4QPUqK9J7vmHs2kif6f9sSEJNs56A11jLtan",
  "key5": "2ukDSrRbdsEqZxdc2VFaicyeu8TtRSZWx4NToejxpuyDq7Uv1HGLqY52nYB2qCCcNnBBhhqJtpmeK2evpot6biGB",
  "key6": "3BbeYxCrwQpkz3ooXNiD61AcyBjxytVCVZwqoyfkGD4f8Cr2NzC5etNdR6EzTwgWffQzKfajoAYebuU4VA1m3W8T",
  "key7": "2f1mKzpYXEhHeabq4ZLe3XV9udMCrCRsyogCqms3UnEJZ2nShQXz8cS5RjCh7NACfdjwM4v9fdpw7Pgffqejcfj8",
  "key8": "54XPPxf6EoL4LumooXRLuncLwaLsDGg2sspiukV2AuELXPQd7b2n19E6R1dnULnHgzW9rs7KE1g3cHnk6YAJymeq",
  "key9": "42eUjtwxYxGq3zg4Fonpws7NmsVGf67fj6sgVhYN9sfTYZtjvgH8sNhvVphJ7pzhDeUZcKEuZQRTqm1rCh4KiTnr",
  "key10": "3rQ7iRVUk5LX4j2J5hWvuWunYc3peZ75cgaK7wQE3tt3BmGYVMa25uSaXNHP9fXpvD8iseXvqJ5fMjT23NoesdrJ",
  "key11": "3jPAFcAacDaG4GqBm4LkigrFToknHxMcUgSLfXnQ1R9Zep4YB2tesY1NS2y8iLRwNxV6eaUyjV7HbwCj54DbzZRX",
  "key12": "p3VN4XKZM4s6r8j1AxfBHjjJNs6U91J9RJhVwdfqt11QSxGDEVoeNJmEXUdCND4p9Q7vKPQkiK8W1yhV8FaGrFw",
  "key13": "2v3Amsx9GSg5hS8yG9KqZqErkhrCHw2VHeqsCJFKTh6eeP7Tj3sXAdBbp1Hfj9gmX7PZSBNtoyyATKFjqJeG1XEk",
  "key14": "47bxGJdwTjf4jLvtUAwjSU6DXgAVKV364Bg2puCnCp2w85hgMUEHQRgokJmrDTSdG3Fr2pXW1PrDNdsaVs2r95Ya",
  "key15": "ksfSaejKu2DGdHwJ2QFCVkoCj94QfG9UZyZdg9Ny4wtZkSSNf75N5uCUFoW5kjTbKtqu3T1KFDRfYqCvpWzGkCn",
  "key16": "39M7MBzXjvZqx8W3bwAs65ex4Ee1QAKutwBojuic3djsfXHYWhwyX75z4xPbNUN5ANWCgo9Ty7VYK5ZSfAe9phDP",
  "key17": "4yErDmfihv6NfhGfTapRRwP4BLYZazzvNa6z99R1uLVxSNj7pQyS61rqvNjrUhzTcAjddLBJzYb6Uv7evoa38aQH",
  "key18": "27mftonz28wwmtyGMfr3t3x5WNs8eJFn69xmMNGXgqiqrtP8nnuCmuZVfQMpYpeuXz2yZDSxxXLjzbxt5KjnrPkK",
  "key19": "3QYp5MavE26gLyEyoPP5DDSrJK3yQYncibEwPmhDUqfAnrc9213bQEicZk9sSVE8DnrRVKHDeKg6Mpf2yBwKHrXG",
  "key20": "2LEtxNasvsxK2fUE88txS4vuDaLcock6bF4Kdu1vcCedVUzbpzbd72z8iAGAhc4UaJnUDnMjbc82m8H4ncExYsee",
  "key21": "2cDmF35gM4LRbVuybaPgHbNxkfUrCLBuf2xPaQnxnCT1QeD8qa34TMUSSAWy1F546gxgSZERsQBLwb5dKbUSDdex",
  "key22": "hVrwXpvhsh1fHRbNgpTBAsNWNcyniJWMFEb6wBCrdAsDx3iLJWz917SEQzD5UDvtF7kCUMDWeAS7ihDcDn6MVkY",
  "key23": "2g35iszaTkGFzanu3rSscWCMXugveaYQUcUxTTSM6mHMhicDRypvVFdxYow8SWLcScYwmibxEL75qXu8mADM7d3U",
  "key24": "2y5SStyAq8sd14qY3RhX42iDB2UJe3TE6znz9kzkVsTnH8mD84n1rnP4pxvBahGzPjHmQ7QvUALk4GXSCMDNGVT3",
  "key25": "5iUvouYRV7Pw1U66a4bhkTice2GCqwR4NGnX9XgNWCrZR4nrc5KcVPtNDpsuPdtg1eWyFWr4vJQLjrWrKUxJM4u7",
  "key26": "31aEvbJRhWdm1H6e2PugJpKz8UozFx6L5oHo4mzXS4zMDaTv8uxbjTNtbQeti5crQdS2TvonMxYrYFWxQjSe489s",
  "key27": "2ZzUNYJoMdX8dAAhzvYd7k7Z8T6TE84FVc2d5rkZiVZpiBv3eSdwoACpir8i8gtoXugNmvmQBLo5wEXJvGDtpgHS",
  "key28": "5XmaVmWTkdCGhojd6GE3mT8VeCg5h4heAXAaZSYZAcDpV9ePdK4aTjpZFK2dkmXeXsXWvjzDHxzvF99enpDjSqY6",
  "key29": "4rG5LJcNi8DFTrT8S7vEitdHJUYSnM4V7RWQcEbbKRdqd3DqxvdABHZPBsGCyvwzGL5vetEchK2HfmJR9gJf5s8M",
  "key30": "2HWyGznDwwzjVP8pVoYy9gtSvKTWYPLVNhkvaM7PYDRDcM5wPME1nz2J3X57qbVXiic4hDfDAEuU7aMm4v3ikcUB",
  "key31": "4QpZ7uNHDRgjTYXorj88Q39Ft5kBWYSBfpjMWRi8c5P24Qwio2WVL7984zc2YSbDEfbpX4wvWuwER23fyHfvJaqQ",
  "key32": "4JAvwXqP48aLRJGGUX49SWjMPKHu7novrfi52BGGfXuAe585QCL2P1V9trB81AdhgCFmgFaJPFZ7spV5kWSNV76w",
  "key33": "2K6pHLyVVQY6HtPgqNvy8bg4XpA6Ho8ym8KGF3CGfxGgkgy96W7LswTo5XLTzDRTopMEXqahgKubK7Ej2C6TB2wD",
  "key34": "2NGMJezFpbBeGVWGzKUr4sGz7u1tT3sLTaQ8dDhS4NSRri4Ju9UhrZhDBCRhF2TtYK5ETjhpKLbMTBCfxzGBTzTK",
  "key35": "4mkZQTwG5ium4DYYr7uDo4rntXZfN6bG5GdncQWzqw9KsQL6iJPmMuZVzjz5iJxyDMAsoEZYYWVfZhu1onkAagVo",
  "key36": "3NYWpBThNdNnLCou9x1C3YG9F6v5s7jWASVg3e2tAbxfBBBn8DsEMT5JLdFsPFshrhQ2BEkNyacfmQvtNXFcqsur"
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
