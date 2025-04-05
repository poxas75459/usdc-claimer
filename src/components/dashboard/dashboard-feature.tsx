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
    "655ptFAEic7SSZ18o13w3Quosjrgg2A2MwpcatiGcbXMCfEtTrXYnG1Hur9SKQDQXi4aSa1CEH8tmEqU7nsmKkMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j1QdRAEgrvCazEGs5XCUeZm9YuvQ1c4QrVgDS8WqaNTTFy4X4PeK7jh6Lm4e2zQyyNpEh58wddTpTMaEMcW7kqa",
  "key1": "u3xRteFyFfL5WX3VDNEwTx36ZPV2H9nCqxqAMi1HU8MyHb7nsXJUAEzkzqFbHiSrrw57zmsFymoudtwBQe6fTtU",
  "key2": "NrrcmTME7r1nE7TMSkhRoxmnLfPAWsLemFnQbFUP9yJj4WdfbjtzdCTDWeADZn1SrNoXCfGy5ePdoQ7tKivBWNU",
  "key3": "4SemU19x71QSxcgwP5Xdqz5vFhSSe3xyaWwNsARa2SqgrvaQXv5n4Sf2vszPqeGhN7h9P6Bkg3vBgcK1JLfdCdyH",
  "key4": "3MMq6wsedf5ABbEmJ5ScT1C5NWPKbEXJGSpDbaFBj6CBbwqFHzP54gdjADZXk7JLoXEARKKdFmjQMJ91HdC36NLW",
  "key5": "5544L1w29yeQncwSzy1QKBhxtGDuvHDY5bStq1LvbrSWTijHjuLa6pAuemPnrgLLd2DGPjrQYSCXfeTfDqeP7H1p",
  "key6": "5mwywUCGYZD7PgiNQtbK5UzW76eeRJupBEdaXMyTJuVGW3fXneXDNebq33kjtrAAqyLzsQXDLQB6U91aXVHLWbtW",
  "key7": "41quJ73V28G8furJ7A3sjJ2TJ2kadGXXzrPhRg3r2z15pArh3K4m5FHmjXjKZ948XugDYQYWiZyyL7r9m3znJdTi",
  "key8": "5rmcV5Z2wMeXaFYaUL3xDNumPe676zUhbUwYpNAKu2JdnGbYu4F7ckFAtnR6bQh1o8XAvyM67Mjzd9vfpY2LDdWW",
  "key9": "5YbwsJPTmc8dfunCBZk6M3xwLgpz8xKU7xG7ay5wEkbAtCjgRjtT9fUVdJ5yhT2x59fTGjwV1UxoucjEBUdJc9AP",
  "key10": "tjG6JUt2FDQcbedCW7Y5S2LXzVYSwirDfNPxGfTruxRBqQzKQNnGPXvhcMDHLRtt43n9YFeANrAyqvhvHcp4q72",
  "key11": "4exYKqVwWiZEopzReghRmjXzG6k2tCWFU2SPBpq9KtiAUF6vTHypqQrjrk7qKqWur1CgGeSgfoCe6LDyXKCBjebQ",
  "key12": "3PgpHHSb6XBgHpnZ6uaiXyLwE6e6qWwaidmZi5rqwKZa4ThmcALHuMBcFuLJoUKdBCK4681JYwjZkm5H7RHK28Aa",
  "key13": "A9jhU4Yspn9jrUTSMz5k1wW44xaVStK7tm8MYLovhjYUdeYPvkFoAoGPkVN8BhoAAHe22qc4Bfp2DayFv2ix95Y",
  "key14": "4kvqMRhaW6tmpfLt9ECjEo3nvy64srde2ZirBAvQmEeAtoW47mfWjzmjChzf7xu7o5pfPx4Fx9PDFnrNYEEm4FaU",
  "key15": "3jYf7TYahSEWQMGWRot2gn9CNVKQrvvBCXzKojywWYdLbSCf9c1x5deUffACvDBeWEN1JgiFwnQJNLmVhrNVEpun",
  "key16": "7a4XLxG8w3TRmjUQg7nxg4gKSRenXzw5vMt5pQF4tYQDhryMF15dw6JLuAipxRuZvyqwY8b2zN9xGJcW3fS3Von",
  "key17": "4d6skhnq2zPVsH1V1X7JKQC1vTq1Un6m86ww5NzhgiV6k8PCzeXgQx1CHRHd3szqP7grEzjwrqHGD3wfdtG29t8k",
  "key18": "3KfUoFZjCTWRFmEDiZaZtsSFiPf8vonMrhJHuTFzMJBajaQMi8Zjhss6iLwE8o6w4o6Xa9iPLNKsH4JAUXYeB7fA",
  "key19": "4XLUmKSVwdUwPntgbPVXksyUUV28MgrKqiU97R1WrcXKbUUG1gxf94iJgeExmiL9ZWNikXgfWNEjG2gbebx7nzic",
  "key20": "2tv2AtYsymtquP5vDjGPAkDo8qQL1q6Njp6rDzMqFj38cNGzNMe85QvaEFSB5LTvDGryAbZp6SEUkDEKTD9akrCA",
  "key21": "2RPeWcVGM8awCsVixgVb2CtwL7MPHoZf2JxyfbHxUrTm512aBFfoNzbFtQGeWU4SkVREFMoVWkN8as6gr5B8YLLW",
  "key22": "5wciE1oNn5tfiwCMrkLhXwVaKv2HbeJ3knUdz3LNfAb7TbFZ9HpA5j2fe9Dg7CUwef4YiC4AkRFHr8YQaisPWc5s",
  "key23": "5aDbCNBrJYZa6UCoGzFeyTYQtP8vMBeLD1R79GS9KRzE231tJtbiwU1KM3yvY2xKpQVv8L8FKU4J6FdZY6Fw2BuR",
  "key24": "42YjtnTbpk49urG7B76Eupa7KYTQ9x5qXhyeRJh5i8rGZFn6LsLwzW1ubrrRPqt89S4Yy5KMs2D7ZVeKQqcgy2Xr",
  "key25": "FQvZwF78j3eo8BJscxvRN8jpgsp7QZAhkJfezwXAKKqqY1sPgszAZyi44NzULvxTsSHBfiN6tENfxCiooaxfUL5",
  "key26": "uRjXWaCab5eMhvNff5JnXtZhiD2LQhta1ps2yy8ADaPe4zzfBgWDEbK4vNmCvaUSohBeiNghKNbSrXJrmSu3igt",
  "key27": "3eQkaq3mbFAwuJR1sBgun6VJBvMySCfjoFMVeB6PRbFtVKqPZXVRxdfFHAEiRyaBWfEEHPfT6Ye3zs8o2CXa9j7f",
  "key28": "46WCiY7TWEirtyaHdohtQ7YAi11Xm6mqb3FkcfyCkMmkwt3yYtxN6ex69RN3pXd7ZFDqzgqCuYj3YLvAk5jKjXmt"
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
