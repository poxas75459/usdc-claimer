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
    "66Q6v16a3jN831ndo5LwhsvhrxdPfiac8nL12LiesSv3fzTpSX4C9QMHki4HCPr7NDDTZVwhgQjspdiF8VoYCG8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sTry6xTzKsUgFzLbjLUo5wJDcohokUVrJidMyUK1mg5UsUaAeFSirean7fheLCPL6KDd3zb96hRGJkFinW6oJBa",
  "key1": "2mE2MbbD8GtJjrNVHem4DJUn1dqZUNgFCTA15tQutjMSbLd6Xkm7DnzxncFPkEqtjcLVEjZyiP7ihy8SkGt3hGdL",
  "key2": "4cgi4woPtvmc8MXRs1iYD52JAFp1cR2y1hJp1Nq36tnxGX8ioc6HMtWrjT6c7UYWNzduUoDkCRbUbjDuk1ENbdNN",
  "key3": "txiBYKWvo3gbvXyKmbzaRoRrLcFqVZ6jNqDXmP84q9JqcTwrN1phVhqzMmoYyETCaCWMhXPgv1J8N4Sc14y6bUY",
  "key4": "3TPE7An4HSYsRWsxQ6XZLQ2udD4DPZ9JAq3TacGsBHFjASc5yyJs3SKgYTANFfHUMEPCm4RubBqo8bhjj6Ga6thS",
  "key5": "4y8h7qqn2CH2KUTeCByTth23WdUEFeaY62HHUK5NfRbGvFeJk3C9q2dqqcMAvLXHuFiRs6iSFZvtN12kjGdsoAdr",
  "key6": "4EN2dwkj8VrSHdUFf1xJvfwB2beS65oh8XMimZ4JBc8eeQysYpJMdY15fZJ7cmSpTPVRQLY64ZjUWEQh9Bke554N",
  "key7": "5JkQ6SDnn9J5yXF6XP6Bf5m6pwUB6XXXn8VPB5GiXMuL5r6CuYyJRW38122uxdUqch9mNBvtvf5qSVjkVmAZuz6a",
  "key8": "23iGNvtVGpLazNPEwbPjFv5XXQ2Sstc59LQB1u7WPVwqqm1SwjwbV6xURqQUTuRfswLskXinUizUG6yJT1D9X4pr",
  "key9": "5kBPYT39iz3Sv3uJauhGrq7Wtv9DspH8iudycYbbjEryGBjmTGuxrx33nsHGSeRQZLB45gtq3hP5JeEi4kcemcTy",
  "key10": "4thqhtdohfrQuQA61MdcBeR555kujSWtugrK4Znx5PQbguiSGUg2RRGp8jfn1Rg3f4ARTDxKvqwYevs1LiFXhbYF",
  "key11": "2dKHvSGB4HXDLbokure5g4D8AUJrqXB1vRkLPEoZsjp6nAK31YJD3SPwZMEuBexcDGdod3hd8rZpb2hWogFCii1c",
  "key12": "5M3eU5S7CpDqFMFsjGZTdSwDrni12KPLxAngmJxrjFh9CiRfYe2oob9cqDdxvFr8i45GR3P77tygmr4QSzx5qEYo",
  "key13": "5XymbVkxH7pZ64ba9zjuj9cJhSU9cWvgCcsp7hdbQaxTwjZZiZdfzpR4PzWF2SDcKjdMoiG4sfC2guFmuPmbMk2e",
  "key14": "2Uj2QFjVa2hoDWG36SJQC5wZi2S7y6V5vQpEQCd9GnHwTB8w8deCFyxKR8BBNR8u3iaWeFn9aPdDsyXVSQxEmv48",
  "key15": "2tCJsk2s9nwCCsJx9hjggcS9SZo5pZXifkk8r7acstA2FiagByXM3Xgddjzq2PsnR76ud5S5zRwxdXUpmU99VwiQ",
  "key16": "bP9imJxMhpxFid5QvdJUMoJMFpaQvqiN9FobDuYZyzQT9jUrGc1ZfixUWZpjGrzpPeGBFchFmGoLhrrWnW4Nbux",
  "key17": "3LenA23U9aV5ewGXLQXzfij1dC6DhkhojaK3mFiLJrjpVUQtZNTqwhwf9M34PmXbqvRB7Ab6sVDuPmun8JWTjMVW",
  "key18": "4tS3kKepzuiKdRXdW87gWTKqsEFxyzg521zrNkMMjVQfPCqrXxjnFDSxVMGaaNvhzeY8WVhRnXYueUjaTB5SjvSa",
  "key19": "4GkdG99KJh3SeYhd7x4TRo1MrbQ6prfSqtzuCriSQrcGVHccMFzxsFb3txcYhX2A8yM177KrDzJJYW91pKoVRcxk",
  "key20": "3nFXqGmBbQ9zJuzNCfaisRgGUvQmYHN7Mhs2GWvFJ92AMY9Ss1scoDkZ99T49RHh1QgKjAmmBLAsxFGD6n1GSYsW",
  "key21": "KCfcJzszizW6bdBXYQWp5R1tRpcY5gDxuqQ3i32apVinqZnyxA1HWQaUCPx3zcqTucVAvfWWvhoMN26DL5xagmR",
  "key22": "66hx7iThnf3ngeca7SNim3NL2RySpbyesskAbxuNSir3p21LWRGwo9fa1Pkzar1Gp9z2AXoYMkCXcwVf5QS5jmn",
  "key23": "4gB9G1aokcqzmzuMMY2JyZzvVEyRd16wgpQ9tmwmBfcTLkG2ruLqEmDUt7jCdJfYsGaFPrH4D3MPcN2ozd69nRFk",
  "key24": "2fzDfvHNx4wh7QisnptAsFS4H2RTEhRcnb7wtJuUmZK4NJ5d2hMcRmnzwkCyCXU6mSagJRLa56by7cd4M8YTF6Zi",
  "key25": "2Z4jHrhs6czDLa6kNwrcbarBVtJhihQpEFk8UAHH6GmhGrs1wVpRWzmgRFPGwo2bBHySSSXujpH8rMTh9crvXbq4",
  "key26": "5x7LqjZF5NG7xbpwNpqP9CXhQTHAefjvmhudDrP3YKargvodbDHKKV7ZCWEAH7gS6dioWVy6YoiHURJhtPaRc3Jd",
  "key27": "58cjrpMMVstBUEZ7hW3cUPegjabwt1igbwNruvSuabivjoNbtsA7WSxvVM38kYZPy752wN9RPjxDwbuDPKPnRdmT",
  "key28": "2ZYoecobHJ4nhYxNWT4A4zuQtAK5DeMyk9FMi676gjPFrkePAhpq55B7mBJcqa2CVZnz3kmEx186qVz3ri4RxWsB",
  "key29": "5Wi11hXZr7bmVYdi2PaG18LL71HyqeWYcShq4fH94o2UC91QiTsxKmd2vxyGtJpKQFcrCpedmacftYZvxXQKyyM7",
  "key30": "3cvPzgwEUsxLkkAjRigpemALSvvcbFzKkmyZW8L6phawyKz8NMUqQSnDoS4mxsbrqyhs4kpHpxsmAXjGmezigR33",
  "key31": "51728TrpzvsEJ15Zm7daWWsLV9THSDgepUjoQfeXbDSPDe5MZGGxBYJBjEHuaK3yHfMFXgzkEVLTs5jmANJ3vSW2",
  "key32": "4QyGVqRu6HR355GtcY1AdF1StGMBBXAs7rGQofpihJwDAecyVGUQsjqumvdjdb6wF5RcCRWvUkm2YYEYeqoxnwEZ",
  "key33": "qfHQEfdkY1bDCo3Fi7sCg8EqVdJrMWGPtLpjdhBJummoJMczb16PLsSHEiPaFe1mdtW1gqCCrbUGUwsProfqeCv",
  "key34": "2hxKx7b7jSYmyegpn6QLZXnbjbV3P98sbFGNvWfuXzVArv5CcgzsvdEHfduirrPDmwzLnv4EkKA27RBENyF5ApzH",
  "key35": "5mJNpXh1cUHu5o8YCdwDsHwhfC9yMD8hnbQgJ6eZM58RA38rUZ2CbybZy4nDBJ8Xbwg4UE7bnXo2sLKTqRw3Ptse",
  "key36": "51ypu8gqthpAJCbbhCzdULFaXHwiW6rqgHfLF25yafFXA5LS6bQNSTDPREAtzR4yyCQuWDMCskPnwkRpRWqsrVow",
  "key37": "4AUcq2MRtyhkhZpmvkz1pxrqs7GYwhU57xrwEzQ4Uc3AsJVnAXFtvv7JeJqppc7hDzV4WvjvDMczWZMALMM83sbb"
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
