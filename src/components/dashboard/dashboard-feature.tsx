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
    "4oCN7PdNzzJmE7R3rKhzXhmywxy2qzoNAtBinTHbpeiYSrHFDKcnNYG5jDmct9yxmd7GB9Fimf7CfhUn55hzmkev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41v4RCmtnedAjus69ibiiDDZc3LHAX1S7Spjb3VmBk84wZPa3tKf5EdLaKNNYEV6PRU7aH3AL3mtfFnR5Fd1W4eA",
  "key1": "2bC2PP9dn5aYgL1Rw4ZHPqQNC7t5NxZvf9PTaw1qgGYUot8eC8Zhx1VLSU7nmWxsy91GnuietEgcGeAuiFMYUhqq",
  "key2": "39kV2dpa1fXTkJxTfjU82ac6ob9kNasa8HHxd1af1ZDdyvzPjMQMT9vkvLUvumUKtaUbbZh7db2pbmtMq8zVdyru",
  "key3": "3sp9L6sSuXxcRcbZoKoPmMUcxHsRtJVQzZtzGurEFqNJjH15Ademvy4XRM1aWANakP36eroctTx2zjHvYJjLHZTB",
  "key4": "4Ux5gux1vBQYmkaxyVEBKks45D44yjBpAJQw27yRd5vaNrEkmfuTswc6K6VMaM8Xg3tEBmG33b2WVLZcSDMD9fJN",
  "key5": "ps4hHatvQtWc2FjzdVdaurERwfvmFKvFhajDjfe2xphmayYUHMg7JPwv1o3NVpDUzi4aKxPnDXBx8jkcW1cChMh",
  "key6": "5Siy12Y3ecgonGdYhdik487sjUfWfVrp4zd8DYQT6oP7uv8dpg4WBdTYuqLtF7vjCQGAcWXqMTrFAiL1H4uDTyZq",
  "key7": "4ec51FrUj6qXjUbd3TYEb9J4EZn9AcLFtpvyDZo5XGVahcmnW2R36Yjv9V2uZ9CDMgMR8F3FaQMBvPaHGX2hfePJ",
  "key8": "EhMF8DHYWWgo6AJK7oDKVAhCfvzAFmSe9DTNUhfEoN6vaZsyPgNv2vCGV1ns9XeSSsP9kY6Hnt2HqZtRqexKEMS",
  "key9": "2XeoQLWQEQmbXcjYmSQtRsFXmwxzrnNBPjQizUiWBQrLh6Zt3GkjJG1JYnFWyas7CBaTXdrSnL8dnwV4HKbfHf21",
  "key10": "2tePAagnpjNwAEvTCQXsUiLjDAgPVGCXziRZwnrDXn5hKfGpgZxcUzpP5tnCaDuTfznANN8Dgm5z8vkUUVdHN7Xi",
  "key11": "3QVrcLDpBzv23ZN4in7sW7VwzMGJwb7GNEYWN9MfPfdDui339GVSzMp4FCwfBnJMsnwpcbzExPymudjQ1op39Fjj",
  "key12": "2hM4kL1qyysSWNxgeuiV6AmpC5oMbuw6FSXHAAQAnByVWZzjwEpgwRudi9Bry7hXK7Vv8z15D1WjRHSyNMci5Fyw",
  "key13": "4JqfF1AwEEZfhxtt3vL6gs3aFVi5aZaSBg47WpqTff579DtFqnfa9da26nAaenNn7PDWGFHKm2pnMkriCYy2T8wY",
  "key14": "3thvY6QSZk4NRBTxtX2kLpfoJihikQP6EmjbephWM67UzkxLXmk1oxyYsUw4p9XUiQ9XKsXxATFYcQLPisSVN36C",
  "key15": "35zsHgRpJKT8tRDshN7Af2bUooxPM8RrsQhFbeJnjTN8A17ayjnVgG5jbKNrXSJpx18Y12oHu4q7W3Pb5491eSyn",
  "key16": "vrPeyB1HFfZKsh41UU2zqVfizrsW8CtKvTzAFmeN91pyQk9muq35V8qwNFqe4XqLSsDoh5TsEmTTFB8T7diHiJA",
  "key17": "KTdMnBvkBrkPPTjPqMB3pBJhiJp2DtQwXeT4eHjGwdMJZXuqSgTqw5p3rBnV7YcSFCEuPJ8bBaVCKUsc2SYS33i",
  "key18": "336EeKv3sxYjFH14mKWzMr4c21WuHg28sApCPtzsqNwJSKHCAAW2YBmZpSrdKDU94iMAuYad8Kxtm4FC6DjGodkT",
  "key19": "3VG7VfdCheEU9MHQM2CgKEKgRGMqKTqZnsk8Uk7ryuNPEDv8NaovcaGPyb7BcoZKUYZ5FMCSMsNe8Y3YEUkMEWr7",
  "key20": "4oRKKn66bGtqj2QJ4A9ZrnKohfZ8CsETUMTJKoBzFj37DjG4VRjkn8CP4pyW5bv243HnydZhMvS2BEQfcMEQLjxT",
  "key21": "eN8usGwxDB5bHKwG98gki8unSva5w76WR13AfDFShXhJzjRT2jgyBYUEzrPesJaLnKfnWCvdwYGW6qx37dJf55R",
  "key22": "4ECWrp5s87uwsZ5gRCUNQoMsqLUfeUf928EZUUBq8n8RrJZC7zfPRtDEZWEhAdb9doS6MWF2FFGgk6azfy8nv8dn",
  "key23": "4WPg2PtyNcqNZNtunxWTLKA4dzUgV7Gvvo7HKseH3fMymsGMqareUFjMbhpmUXjbSYnEZ7ajk25ubzfyjL3ov1JE",
  "key24": "3Jb5FFiTpfUBjyUQAhR4JM4Kwq78TPUcp8Z1DLekXEpdHth6q81tzUZUdvA8fzzpr6ThEpLUcARLuBZHgECaY93T",
  "key25": "4URVqmhhqx3GrkXdh5TcFi3XvESmoWxNmigYCzGxqYsgypr8hBYocoaNAvnYLZKVUjQJQGD5QztN1Ric85kVFyon",
  "key26": "2RVdSjE3TvGSeDn198K9EazD8NtcLnHesQu5SUibA36QnfSX7zvKGD5A45TFrc9LsWitMM98P25miSCa6PMk2gp8",
  "key27": "5usiSTJqEkTQwWRRgrRCwuUFLd3r4HiSuD1SDyn8pkNsYx6dZe7S8FpUqFrsbGV2rRXRG9KpYp1oAhA2ZCMi4g4G",
  "key28": "5Wxtqkf7fsUat7cfWpXFPTBfZ5Kh4xnxg2DpW8pBUEQLx3kpXToJdfkqvhzxxybXYfKyd3fKYF1BhqaG7kmKePmc",
  "key29": "3MrCcQWuqzHzyKbDHzU885LJhP69iUFNPRtMdgghgtzgiftJA88renoRxJi9rvzGv1u3UjmVgw7zDHr6HDXXkQY5",
  "key30": "3Hh6SmkaigUxoNN73kGEhgAJGprsaTqDttTNhGRmr9JNwb2DDSHYNnPiRpSVc1o7gBuFdaWtMcFnsirimGdzrHBK",
  "key31": "3Uk1DiyaNkofwzrR43P1uEXvtcRFu9TZvDvsrgWyu7KWfKWaeADRPJuhYYXNELPaFieCTrkS52fvJT6XGPR3PbFk",
  "key32": "61WuMPbzBpPqiWstVjKsAt4Z4AWB8ncj9i9BmoGj9JM1M3pSr3CtsX2sdVkQojS7rdhYKbjowWyrEWN1MAH1rJjC",
  "key33": "2eGsbhqTv1EVsadJ7PdXmm9soyT7cYPRcvMib465CtwaZNrPdFDVVqaHVFNHLzY3TjD7KzwnjfHyUg24J8jzrATJ",
  "key34": "bxxUcBVksznLJbjJF5vFZDhBhRs2Gp1usWTqYZJazE8tD6YksHSzjp3C4ndy7zTE7LKe8Aws1it7Rrc6zRFHx1T",
  "key35": "64QeRFNMQVRsxtcF79czDvx3xExLV7JcHCoZ3Kq57Ms8cDuwhEabknDnfRbH91VR3f2Y8hQ2VRaz9LHq8gBekFah",
  "key36": "3cjegjAkZYBoTeWJdqEgNuVxopQRAjE2wqTMrcrSFUosNmbHjeMHyNSKK1krPWTjChy3pLX36ZZ4HtmA9LXM9EZk",
  "key37": "upzfu2mb1r7AGbEXA1QV9omi3v3nxndrzeGh8fYVkapAMm76hwdgxVZ8RwhxCufUMSBh2tatN7SKbh7LBLUZ88w",
  "key38": "3E1jxKofeRoyqVxmrx1JeHWp4Q2es7qHVaSbXEREkNWu12dC1fC3cChHYaDEc99czCGu5nCXf1gRSbfzkHBRuLsF",
  "key39": "2xTcCz3dZdGWrMJBZBFtkwiokwsNV81NKzV3gxd3rbFbNE8jS2uEvRJBqqBk8iE8BWmSP2ycRVgPTKTJR2h5qmsk",
  "key40": "CYWiUfXZ6W1tSr9eiEeLNfS9oCchAPfHW9zX1Dmiot7kXShueEx3UdFcRASDhV6Uz6pmrBHLRZyZP2AhcQi7Bcw",
  "key41": "cB6nZbKDU6yaToKrD4B72WQ5Hzob6oiyg7z5yEPJaj96JZmtDHuCVWnixvwpzi7ReA8W5muqvHwe2sxmEPJSk7o",
  "key42": "5QjM4tMtu6EFpzgS3Pv6wLkZgH4cRv9e7sH2NoFXfqbLXkzUet2zLbQdxBPVPv9WuA51nKJGNauXZGuma2zGw5T7"
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
