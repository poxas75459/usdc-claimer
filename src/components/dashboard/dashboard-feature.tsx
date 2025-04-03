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
    "22WZ8mrQkdCwzQ54C9HSgxAyo2HiVUsMNhDzSs1hGUmttThZ9yXfP6rYdtYMksddbZ6YHqYqDEVGY64C8wGeyrTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J86iMW9651pwVEdE12kmG3NsGazU7XKknZY37Ak1rLgmqaUfddeJ9MprSuDXUNiHbvbjRec6jT5BNnJd28UbGtz",
  "key1": "nyBvCbhLb6oBPrQJc6wyg8BXJk5p2mtxJEKpgJUKGzGzqRHoAQpDg4saDurS6PskdTm8SKjqzrfmNK8rzznywWq",
  "key2": "5YhK5AmDACcTDFLJn33gyboserxHU9pwarW5ks2gr262AVDByfHr2Hn29Mj32K9BezmrxoDXq4XR3W8ThUbwPQC9",
  "key3": "64s1jEj816yf1rzJAQgEoNxmBR33ynbk7dH81AETGzgZDTtTbkxQHrooegxzKqvFkuwSW3wWCHpS1aXf3DNwBZWE",
  "key4": "4yRu5wUTtdrMGzrgrVT4zwAP8vVq2EH4BAJm66M61QXyNtR8535KWRM8wWi1bowad6yifJ3iQnM5Gw1jpZPH9zGQ",
  "key5": "5DnivASo5f1PGNgbVKxceuHU5ASZmJAUmvW523uf7vbui26EgWSBUGRrRhDWEy5uzXHdQE7F3cFbkCHypeC5obiX",
  "key6": "2KtbHT349Ku6fPWXTJkqjeFh467nfUgASCt4wLTMYHqTumKrEF8MU7g4jCk47yHhhb1dgnHviwD7Cah9FMFbNDbR",
  "key7": "4VvQsJbpKvG1toAky9heDG4P3ern16MqZ8DbMGMn6R2VcxypfEeBEJtguXAgkayci35KknsMe24qKFHDMbxm55uT",
  "key8": "4PT7dimUSSSDkMTPBrMj8yvu8dTirL8ciyNGurawqFpMSUws6EQeJdyet2r6PBTCmzybGQgYesZAcpTL3yRBWmNh",
  "key9": "4p4j4AeuVypqtUYLZqPisD7ze3wGquv2Z6s6GM2QSBXmfFzboEoEcjQUyLXuyEovucmbKHEnYCaGo28N4pya61qa",
  "key10": "4Cj1buRiTDQxgzAPG2jtaaoMRXAzHSZXsAXEJFWpifXyn8G4RjT58fv1BRtKD176QrYFY9L35WNdDrknxm2RnjKV",
  "key11": "3PBMax43bPzxCpMqSmver3JZdATCC6YW7tCc1zPLwMfAwK69EahTcKkWCFgZm8EsQfmMN1jqw9Xsz6LMJSurWEXo",
  "key12": "2SZJboJ6TYzZoJAFZNuhzrB7ETquCiCh4HqHhFSDAYqnfdaMmSsgrjT9xjAeSk4nB9qibKXS1T7Jh52DFSd77HP1",
  "key13": "Nr5djAycD98ghc7YsZGsqzVcJEBrJnNmcunkxsXKMDn3eoQZuX6aQf1icuqPDL5HaTaPLzU1vh1ap2mLCnCnbga",
  "key14": "Kqxueafaz4LBMJuRXe4FE2wA1pLC4dETQ3TDFyLwTa3zBZtfjGRZspCLgBEz6bcWVfhkbFS1SpXJtkaQkvrfCTL",
  "key15": "3vaqFj6GrydgqnY8Mko2hXAkJNqtqyCrCbxE4qS5yZgmj6rZv8cFZu1knH7XDCtAM9ZmUdqMP3uPLKvh73y2wbCq",
  "key16": "4Lh4gGcg9g66zsqsDNqpDVZWGEFkX1gubURDGctK4BMurAVTX4WwpPmyo9zqpSDUDmgVkGzKjb7vo55nQVLc96SN",
  "key17": "CPAVU7q5uat1AzwqN4wSda4VUiihu6aSYfcpck8MAZ66LjGwmf2AMWNCJGFsyRNjZXyd4QDb84zJt9oQnTvDASb",
  "key18": "3qFCgSiN54NHRiAWy4oxS3LbPikG6y6hjMXyU3N3uxeE1mSYxbMFfyBqNN9AchrfAyFx7rM3ed3YsAoEP7vZPDLd",
  "key19": "3FHSqDBXzwtHt76YFqV4oCABEL5tLdcqt6dZWbG7NgNt4UUhc6Xrq9PP9qie9byQVPR6WjosL63LcLVscwotCSRN",
  "key20": "5YhFFKDqggE9Mmnyk8sB4HrmPQnggFkzS1LAPfthrBN9fRzDDQ8CFVbiUq6t5mdffbS9JFux2Nas3w4a1bL3xKa3",
  "key21": "5eec8omsvvjfmz6CvLzRdh3t8B8ufJPB27iQGP3yanHzJiA4dBpYyYAcWpH3brR9D2HkqDsixQMWcjgFq3AeFpxL",
  "key22": "3tfjW4N2RVgG1H4zPhDkJJP9dxT4tKXudS1BEpKgDaQqVZJT1BTeEyG52GfN3L8UtHbcCrW9WkFDTBZmgdxCzoS5",
  "key23": "3EGrr5EgFMHVwJzmHZTSh6TFDsB9u5Ca3pS5TgvVZSjiiztWSPUcpCrjmmuXGUoXhpssVoG2bUMfWDy1AczG685",
  "key24": "2dJf77CgTH2dQeuVZngTFbgJncSYvWeCr55MewWGiozJHqzxu3gJ3p7NVoTNR1K8142uhuamVKSUupdT3QhwJxnW",
  "key25": "4i9bCVoDafuXkQf1PZEtEYv6AQbi1DEeuivDgoN4fAuADiuQuBNjJ4Xcz5U7xXTQcG3BM8ZRGXyBtxaNSkVgWgmx",
  "key26": "2U9995ZQYzPXFajqHCjoZBTzAVPeUdYZ23ksxRe5Z8cv2JTYZiSV6cu5b9aEC3tE4EVibcuFs7AvLGi6ZKdcYzhx",
  "key27": "4sxPb3z1YjPbdjG4K2keDmQMWJ1qmdvNRHpVbNNM5MtVmuf7rBDEsLF6mNYa4JAiZgpL84DoPQEQPGSG3byiJsrv",
  "key28": "2PVfTX3afKcrHQAPUJK6Qzn939HZFrb9Ec3c3EVC1b6VMsPUWowSy5KXo6cbUGnCtg2TGV1ULGFKuRJgrBsrcTSz",
  "key29": "3BunsAXJd8w4XyD9WKoR5E9Yy8t9fMejMJq7ojKoN243wWq7HPxmVgr2psFiU5AxuALBmPTM6CPyjCNLA2tSpkK8",
  "key30": "3ddANqdLiZ1RkbyPcckZ8CoCAQYWHLHBjE9y5TzrRM6jZAgQdCQnFZfbuosYDJ8VDVBQSkKiXr4h9V3R1uWMySxi",
  "key31": "NXs8XgGFdma4j8VLMpoNLsX1V7duuTo3bCVHYAmZML8rZfCBw3eaZet7jY33UP3N15mWuR6BBFXhnvSrNhtFbnz",
  "key32": "3zzP7kqqeoQLrCuQ2rTViVyrceHWTUtKS828jA3NxqLHiKwCVQFYysaRZFhYNbjE8cLTCeSqGiT2dK3rVjQvKxWY",
  "key33": "58ErVKpLkjtnbJ6WHfeGvU8kGzZhUBkmnyggHFR3P8RZYF5bTJNRp8fZpVomahrk1Hdc7h5crFX8vZT36B8UJDWf"
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
