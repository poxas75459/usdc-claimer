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
    "2yr2XJJNsRPQZAHX2q7vGBgTNy19UwBLot7gEiMJ7p4VcmhGZVcBhnbZMsXASGbSViErF9nUqqqZaAn6mgDU56bX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uW8vAq2sL6oQRDhHoRLSUzMYBNnXMMwxh55H4gHhEiCUZFEfG2bFHxX1Q4mHnU5pozJ87t6JL4pujvw4pbC1Rnz",
  "key1": "3sJQJ3ZqbSvKCBk1MmPMrqVRc12vYkCXzj1SUD2YGgok5uXmkW66Nsxui9kopevfusV85c3ERQ2fiwp7x5PQ4mKC",
  "key2": "3ShyRZeaEzD2MZfYP728BpqufmsrzrnGuGyP5WERTXoB7VUzzMmECSUEiJp7Sv1vLFjSUofbCE8csF8eovLvTYSq",
  "key3": "4FHdPaxDMXZ9MNSYqDaziVxrPY2smdyK5X2Rvf2KHnk6suJPvThrnSSQqCapsjJGWTmJdT2jg5NSssmws5wrtNaR",
  "key4": "5cYY2XtPLbjowZRUiKbdepMHiGs8WF3Bz95v9CgNuC2Nmzn6FS5V1LmunpZjMVUmMSC77Yr6EFV8xrU49XvgUskW",
  "key5": "2DnfQdHmGtWNm5nhtFGh3ka58KUMTzECDW9ojvuaY1xXJimcNHRLUnjydqeTwJYiJH4Q4Sbh4En29NWjuAvExb9E",
  "key6": "5QzfBi7AGq45ES6AnqjtfZFq6xUJdAcVfJRMJQmw749PEKgBceQM1xrnCcvtEUZLg1qygS3tVdXiMgEXtgEj7Phu",
  "key7": "4RGbfSznYNqyWX5hUavpHN5YKdyE5P91VwQWLdfi32pkenkCpSCpkYbC4ksKYGTV63Nv2LZ3ttGC9emFMTLaYqWf",
  "key8": "23mcK96Q6q6YLRmAVectck5ankXqMzt3hGYBYeZymB5iDWdtMyukmr5C3eC4G4TNn8kAHkH5yjxxdjYyqL4uWZNv",
  "key9": "oV2kXs5V2Epb5Gp21nANjqdiRdo6eao7wqWBcxcpxDUiDZ2Dw3te1Sq3GqomHC2g4Z1zcQNcuyR3GdP1jAYs4Pz",
  "key10": "5p991fZTtoSxgUwty98xUi9M5KPMoZ87TZ5mXtyd4hhCKdeTwydPmAfcXjQfpFZbeHTo9wYzwZCQakddntu83C3K",
  "key11": "4facBnpPRm2Mb5inSfzjx9X1WCTwfyb7YN5SpWBChSqLXuGgnjBfhV4LkuMKdtUyHQFAzvhc9HF62zkfaxJzQ34s",
  "key12": "3jg9AcPTpmeFjJgPCt1DUG8LeSfBoxVE1BjmFZSQCMitsfuRiYDNi815CnATVmFzw3nxFJe1NKRMAJbBprVRyCVj",
  "key13": "2kehZB63vzLmoD92GNo3mjTgV6nDqq4F4VsC2Yy8vNcaswsaFeaVWMrXPFa6FrUAJbi12AjvyW7MqFJK3p19xxML",
  "key14": "4yxM428V2Stz15Q5CQqXd6k2abkEsY1FotUJ4LshZ67FetXom1mefCWTPa86JDh8bKaPJiGYRzZ6mCdHxhkWw8GP",
  "key15": "8Y3qihnCmgsraUqssf57oshn2HLdnEFMapKcs9RFYtaZ4ijy9AEpGkVkyoc7x5SHS3wGWVHnnibS8pYxNFS8tx4",
  "key16": "2AJJ2d6fwdxV1WpPwLcNGYNbCShLSpMomS3z7vfYknSvbWtTwUKzkTiVLfwvq9kZB6gy5hVaEmPuwkqyjF17b8QA",
  "key17": "KxmJF1eMQsEVXc86Xbqq3qYeNxEjZDCtLPWw3Ebu2hpMpwUccifkxQHq4gciBtGwS9sBAoEwCUwZTsKiEC83Tf1",
  "key18": "H7pqqYj4v2WnNAf6PyjFM4dwUwFLfDoatQ76UvEpvoknADRfERBak8MfjCSshPQY6xX6P3Ag6vVCErcG2pMaB5h",
  "key19": "oCpTRRsEqNnJ44NN8mGSGxwLK6YFrVyy9zHJHaV7ZMwj8xEPD6KqXoDDSe8Ada1XZCn4o2gdU3EW7WQWzNnakhr",
  "key20": "4QrR5JCGgJSe5G35h8qqCpZXEJH4njBS69BjdSdgnifKyjVZhkzv9572Ncjsi2k5dedfH563HVwkhMS7NiHqYX6u",
  "key21": "QmtxGp5sAoA7c9KZX2XG5GJ7GmAYkpqwgBD7nkkw6Q23UpuJVNJ8o5k97j971srs3YysBNLWtjGRxoL9mmqj2gi",
  "key22": "kUKUCTn8P16Hk7LL8wJTFzYjGwuudSdPkYyG4kNgTWEiCdGJjbjuEvg4fZfqR65vQiZuBaxbpv5jN6Gy3agZfoo",
  "key23": "4zmhyhR3QEvrWfLBr3ejsMxhBvkciez2tQMhTMDZhZNBwAFUF39VDiWoRizijMyXLn3vEfnTy6qXw1AYAUdM44DR",
  "key24": "47c3wTwnabDtEBDevd5a8SkS6bz22mE7vGb5G4F4WTHZinp3PqNbu7LyoT1joyPZUPthWXt3DPavtumXKCWyncBk",
  "key25": "2A86BGvnnyfcg99AagF54jSzQRRnzbaAf698CpxYs6RGWfSqqLVAJBQMWkKa8B5F8pFD3ReffcyxL8ymeXGjQ34W",
  "key26": "5arSNLAC6JdXTEVoR9hTrhYeDB5jHBdPM5Bh9aEy9ryGSHBoJikQM9y2pSKeaD3b3wJA2qS4BNLpXhuqL68NFRKX",
  "key27": "382zz7SsKnoCxW9ZqZU7tedfkeV84fhdneR7fhLEuJLxDxCZ4PjAddFh3tBpy1W2S3iyXdjCZ4qvRSNFGKwrTAio",
  "key28": "4eGN8jUDXX9QmhT7pbumFvs1Jn4jPSzRpHsAbEiYkaMrxJ7aj9L5wcYpyTWh38F4Dy6fv758ztYDjMdRJnW7RdUh",
  "key29": "2hKzfp3fewHVptLAmNqQEVN1hFbAHzB3Gt3cFMCF3hCjkwSbEqn9sBpq6HtDhB6jaVEVZXLd9yAZACE8HHvsd256",
  "key30": "227cvLZkq6Mx3ydKof1zE4pdGMdAscUdeo1QVTuse8zdAFjQKzLpCkHXhSTgBefsHh3hAzT7KK9K1zpfMzscx3Fv",
  "key31": "2y8sC8HzFv1EYCs4YwmHJ3k3JEzwpxQPqE4aAgcpPhChzoCR5yn5pgaiRV7RY6ALJvf8crC3qggThp9CSz9L6Q6X",
  "key32": "YwpgTdgkDtfn4awikmjnufoSdcbot3WuNN1GQUEs3ofqRD9dvThkbTUJqsYcMkWYxrrrDHpb7mivcHZohwRkgM1"
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
