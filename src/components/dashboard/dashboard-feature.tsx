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
    "sdwnmc9rTdYaC8eUdx6m6u1skpmKabfSsvHG6mPGYqww89DFHKHY3uMSh2ZTJpqPxp1n9pwraqc49pQGxuL98AF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A529utGvpJFXGAmjF5UNBoTrWUfqo147RTvdZ26PcpLrsDc5rcjyZnoyN7ZZ2umFkbopMSUYPA4yNtz3JTsC6rs",
  "key1": "4jqqGwi5pDMDDuN1pmHwLJjpW4c4vvbGeUUaX3m3Atd4fbAjv9rQAYdhwpKDuDboYeZst15wKNb7fSgSKhV5BXDP",
  "key2": "DFYTgbZAcfkUpQxGLeQi7w4PCG4rKTNvC8gNqjpaPAY9rv3rvAudWfEJtJVNxE3mkNmRi689s8XAeEDJoiwJN6t",
  "key3": "2aCoDQJaTUTbNVBZMdS9BBV8rDabbLgBygcu8CaAJL2drVau6r227H88oEiMQSDhVgtdM2wJmMrTQG9s2KvzjXto",
  "key4": "4vpcW6JK17aJKZgNU93ZG9QbQWPsRac28mqZRNaJ5YknPEGA8Ec6DPZLe3yu9H3FD6HNHVt7Mx4miA2Lav227wFS",
  "key5": "3EDxP4RjSLwbxwQCWoc1s4QXAXHiwLX2SRZna49ms5QYjpYWSDETY7JcET38XbkkFq8D9XK7rxtm8s7vzNbKuimc",
  "key6": "3bi4N5sQhN7PzX9voTAzTsaM4GdELG9exgh5eCujmkpjCmhAX2pvcFQkBfP5X7vgStEu3UUmBDBSZbdqxTMvBH9x",
  "key7": "4gziqjRb3XvYHmnaUAu13dxDfFmjD9mhh4ft8gRjLFw3gPQauyKuKvDBRMtoyDCgwyf8rfrA4SihmckeXVRYwhvH",
  "key8": "2AGiVqK447ef2qJfob6ABzsC8JtZhnQ8PkzFms5Y6eUeMFbHXdXJ7S2HqgUTZ1YJDY2owKBqDTZ44qy9UQ4KbrTY",
  "key9": "2qPpCHN4dYoSaAqvDvNTFaGq212mRfQuoA9QAWapWbx2pwZNk5ioEAMvyRKJvzkQ16bRaJuMN8ndfVhUrpdgya6K",
  "key10": "59ceDEtdb1hDLsn8DajDRgnV4PoGBsW8yBFtjGmbpzUMUNqxo9rHEqRtseJrfgJDiYsKLgFXKmYWwNLTFBNPS89F",
  "key11": "te9acPsc8wf24SXpkvLC9ecwJkapFQPSCcKPb8xG4dgCBaG5CwzdiSwGYWWZHFT2S1je6nYKD2zMrrTspC7eqpT",
  "key12": "5nEs6APisoqbS1tVMYkqrDsF5tzbQ1EN3TQ6Ejx5QpKGMPQgCLkyRQEuKT5f3jkB7xSD7Q5jzu7LGJm6fvRTXWs5",
  "key13": "43xePVKXFWjwRdhEyVz8kLADfcamA2VusGenkBiDo25ZehPG2RCaN34Q9Dn2iDGs9fzkCERoExVibgaaLm1a8N8n",
  "key14": "3BdBngFhz4YAdDnX1TszSmp6jv39kb4VwfUTBj9kpdy3mbx1Jd3jb7N4y8ukV63EusKNdAJfFwiCbYM9iyfeCwKr",
  "key15": "52fY5Lq6HunrDMvsQTz13npLXAMWxyFjUJJFHqM8ThKRjoYcetMofFvVqZ4Km4PphwnXxhWzMyg1j85UooPMBLaR",
  "key16": "33ty6m4WoQ8RhrDPpyxG7ue6XbAuCegJjy8KrMyJgEYPzerZEju5vwWC3Bp6vSRwyy6YruDBGwRreVVAqyMPmfZC",
  "key17": "3RPmnjmqf9xEMDWmuuRL1t361WmVLFBbu3wk9zhqQfuWJ6gPz8Uj5hhS2pCtZaU5LZAhiKHonxeuWfQioWAH3yrt",
  "key18": "2NsGNTu13CGh915dmbzxyi7LDfsyShsPWBu4pRgXaDGZzPEb8ZoZQP4wAEuqiALpacgAa1tKTNTMDoUqDoirDtWA",
  "key19": "46aYA9UUQ61JTQ12hRwRJ6uZEYnBJgkRwwbxirNVaUexkkhXAWUJiett9pPzBvEnt2d1wctMijtTLAvH7H9ZGiup",
  "key20": "2dQ6jvKPALcmUkFSHZjTJ8rX9cQjbm6efe23G56qxrs4699PyaFmTVJedTMWSXfxdc52mVTexcBbyqDg4EmcQm1T",
  "key21": "4abobssGHP9nRzcfRdwPKFWWDmZ9AhZSkPaxKpA5ZXbe3L2kjwWrzb9LmiD4ib63BMwhnqrzsgJBShJ2Wg3NtBFZ",
  "key22": "CSS1EYC49xjH1cCHFT8MJUQra9ERKwFY5Scp9spoGNVrLdw7wjyzMA3iXYEvCEw4ChvTixgA3tfPDzy13jQNg9F",
  "key23": "4GDpKoRHwGXuqcYUdr8n8mkBmdrdS4LeuaTMhkK7qkR6nzp2ibEhrLBMYLDLrL6zjMgpfxA9xHVRBkpis34hrSgP",
  "key24": "5yZRrALQfAhkj6nmSKH76HrVNZc9p57QZ6YC1zeiq82rxq8qYVu9HDsB8mNNFpj6WP2ftMm67SL3N5gsvt9qJKXK",
  "key25": "4GNjcfPCyhqmt7k3NvbaH5NJndNxZh1muKNt7RCQNz6QErAG8YonUFiUkmByApcY6ie7URRtHcM8QaP8nf7MEcGD",
  "key26": "4iRKWKPXHHTEkT5PQBTQ5R14pmVtvvmifsa6coMUtscV2P8FM88RTZ5HT1en9KbXCv3sCR382S5hK4W816Kb8PPa",
  "key27": "31FNS256JSE3cqRT7hxKtsBq2Cvowyk3BrAbEhQN5exjyyeFqgUjL7k7zZpLrPTmhrrrd1n2vyKqTgNJ9Lp7852S",
  "key28": "4ut4mwd7cTS68xCVCBahpHtpAtJ2fmHSywWdZW8E72MiYie73ZRkykb5xnK8XUAn17upSMPoF3KfygCArQ2gdjh2",
  "key29": "4wK5fSAMbTJbWEX78AuFEKEg3TZekuJzjkimTLoBedo9mzYe4QaE7CrvKRSbhu6pZusZhwVSvER8y96aiZtbxYdy",
  "key30": "4j691nFgZmJN3umSx5rudk9jWQvU2QCaxgGubTtTtKMHhu97UVGAAUpBBP6id9Z89DHP1syyjMhhQcuKd1tQWZCe",
  "key31": "477dMVdecKEzhJiffuqiU7ED1rhBax3wA8dQKxtzfadHcXK24hfvoM5fviHaLCKNgsMfxj48LLwnEecRsMzkTg6V",
  "key32": "3g6egoePEos3TpcnrL7zz2gRboyQNiVToNJR5LvVuw6AJwtvCTVU6nZUgnXRhLBghVR2MVPQs4YybVKG1oucondh",
  "key33": "2EmUrPfRd4GTdtCbG1S2ixQ7nYcG31TkFf9KS7obg5G7tPmqe3sbrDUZpktQo6UtC7Pknuofz5pnhVYMVWfSStRU",
  "key34": "4n2FBVbPJn21EzHKZ84tDLZGiFNWwoFG3sdFWaVwZe6pFj2ofWgw3Fgqhm7x34VL6nEofNBvKiFzxnRnHuQqNZdC",
  "key35": "38nA58V6w8huTEsUq1y5tMNBNs8ZE6DL2uD5sszFwC9etbMCfWyS8csUMmfVva68RZ5Fu3Bwnn52XPf9yPeH3f21",
  "key36": "5EsTc7bqjTAHoT1718Jrhpy5auCGnMguyyM68XHUKxwaG7VgVZsQ1pnsYYomZRvfLBe4v3F3G1Qz773MheCK1Ln1",
  "key37": "5gfQV5dy9btofG4VcyxfYS4TVNJWa5NmdURkxw11HMANT12yH5BM5tvbWbKJe3kQQtRekbq13hkKZqWkZAaSmZwn",
  "key38": "4YKZKaKJEvT1nx2oxhZTjGkw5cvqGiKHW2WJpRA8vC8g6AE5j5EaqNNAd4d6hsApRcMWCf1AFxaPau6XWzu8kiYG",
  "key39": "4SaoakjVhQmJjjitD4zH168668RW6DumUUcNF6uNmU6NNGyBjDK8GHNttueMowK4Ez2EpvV8wpMy66WdcZS9YUeD",
  "key40": "36KiCv5s5i5nBqpXJPHh2jMDqNNbBSVcfrmBmxA69n33eY3SSLrwRJ1vudPcDS1nZUHKgVSu6Kcv8gSgzL44Re4G",
  "key41": "3uxco1FYyy7NkgndZdZDHMceEc3T4BAdXE2FWoPAVm2Q2Z1vfLaw24wqR6dssV7bq9H6wK8LX42c2fhfPMEkQ32T",
  "key42": "SnViicUfvKdvVT5btaMLaqPpVCV5xhtShmPXgfHxzYjUJ3Qnixpo3bF5q8K6po7a1G8aFrrsV2cfTLbFmgAkz3y",
  "key43": "sewt3Q5kg7HjrC6mdYSTxfYjY1E9JyNh1FdNMHDXoCTcak9JDi2HTrLoAXmPos45HgCX6VxkvMrA3Ns8EPQ7cV1",
  "key44": "4LdmqcdDrAN8WDtoWdGDNgZc2gwJGuL1jo8Nz2PCfAaBMRC2e1neyPNiqw94LVkoYiGT3qH6mCwbtAcYEP91HCuA",
  "key45": "63d8WtyYZbxVtCcTpRLkJZQQi4NPmvdwgorFEWtAnvtA4cHjxkJdaYaTv5kGRt1NLcojvZruPk2Yjd3PNd79eLda",
  "key46": "2nNDpkuYDeYYU14EE6VX4QytnF8kSoXrsJbkiudMJNueCdZQo5ud7yRMvA4tq6uqBqSbDJhNLrP33svJ1mcbUnZJ",
  "key47": "2ePhjjjwS8eAsf4hWgAdy4Cb2H5UenoD94wXXKp8qTckzGBGRjCzeBL2nwCWAkhrm3rjE37GBpG1thtPYNbRuy7r"
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
