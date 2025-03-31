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
    "2DsSFNAshu72ePAnMovuxZ8FyRrCJe58AzB5LkpA9wvU4eAwQKrK4f9YoDvj99rgPdANUwghb5bkFdRyyWmhVCgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3koDqv9wembxSveKYUuuVspnY3tp6E4gwF4W3PT4B6NS4E1XPDnkTEvZR1wpFj59YrS3x35cgRumR6VpXXsWVQuU",
  "key1": "5xwC7raFZSbxm4q58WqTWgbLEMDztK4iQ9jFg1uRpHYgXGo2FV1cuhbiZLveR7zkk8oKgUvPhDhM5aCHGR1tjR9Q",
  "key2": "45PCgjybNfW54ttPKwSqhua7Emu1KAJfzX86N62ybaDTrPjpBpNKtVn8ep1z7EjiCfzGwzhXWUQAZFantb6xj1TA",
  "key3": "5cfPBr2WKVh3Ra1vRy38YQAsDxKuiP3oi17pYo6XE6nW46ApXdta2nDsQarFr24wtjmnit4ACV5McbvekzBRnJ7p",
  "key4": "4cVnoL6tSjWoiuLG9K3o1t1GypVhFR9gJsLo4XQeCembio4csJpVpGJ8hBxWHTWoXnfUenKX3cerDKxR4ZV2KHQY",
  "key5": "2xsX2UTDUhaXTyBE4bvd9QEUNjKEq2GqasuWN39Nv9mD9UAGdBhQvy13SBzaLadCyhUaZDP5tRYXGH4jsmUnytDu",
  "key6": "3MfA6HAtT8FUa6b7wZKv8bNYDJ5xSvFJpCoTZN4E5k4KZ72R8iDiZFXaNdcMHJAHaUw4CS2zjLdjL77JUvrAcvtY",
  "key7": "3xWTYnvvpaadKaFRAdPoLeHSDFJGzv7hTU65XLeddjopdwd2TN3rm2uef6EDqg7Yrz3AW6H952Lwm8HstzUcoNUK",
  "key8": "5ni1yCpzvHoa6PH5fVBn9YEwCPj4mHsYxwo7VrCqUf8zMPN14ZRtBXYU8tUqzAMp9eHrFRxnV4XPLVZuEt7HtGW6",
  "key9": "4B41eQMRY27hny19KkFgMvDGBgaJyh2fqVpx6ACdwbE6Cryv9jJkZjyKeWj16Fnu2dKaWsy6m5dbM8d4fFExVwdZ",
  "key10": "VUDKgKQ7pg29ix1SFaL7kTM3nugyqNMG131Q1QMPwEnE9rC3VpuxNvNPdCYC3WGKhQ3GUcxbjDbpKMJnzc3U4rj",
  "key11": "kGSPUBnWMAMX5cqPvjD2at6Lr666u2fvHQPAo3gFsTXFBHvcwPgXSmcmeXekicGGFWFXRck7gP2VDSEAGUzJbK7",
  "key12": "5BUay5CLLoXk46su9DbPKksrEhxp5XKG43hd6doxMa8tbM6ToELsxBCTuj4S8pgBKCRP1hKZzmDeQyX1SQCfJWNY",
  "key13": "5wUBuJrSq2SDbMeFhgHmKFRayR6hPxKJpynebb7ytghtwFwGBUf2p7S6vtEUh6mi4TXRN8XRMrT6Y5neoahanVHq",
  "key14": "2szo2U1eAJp5dwVh5LKqxU9ssXSPWW5yxrSbjT67gCVWmwFdPRQwgtcVCga7JL3eVGRNGFDFo9WwHJzUZ77PT7pr",
  "key15": "2gzk8f5MEqUJ9rfnEkP7d1nTuZDzvhnseY2zETNR1URHbYGgQd3i4hwtCjsoTsKqaTtzgKrabSH31ksRW77onK9s",
  "key16": "3E2wMqB4b8mbaDMkTF6PxKCDVh26hKqSeQwLbQUitiy3MyndsDwxU7wj6zqFi6HWmCFUqoq8zCyWLhNeViWCZMq3",
  "key17": "35yPFXH3LJoSY4PrFuk5y5sCb2hPXGKiPUxVySQYjg1RxYjE7wNWCrQAPsVoV1iTnyA8NitDV5FvWdEuuEw9ifye",
  "key18": "2Z6uBP3sfpQR5uY82MT2rpLYnZHqNh2R4ePYBKXSK4E6X1ymfrAHsJBvmvPDDNa6Y5yK11wLaJBrDbyD1e2tffBC",
  "key19": "5st2QucQKUrt1jG53TxqsizRVs6PUozar7iZFgEvpLXVnz9Sqx9gPfcm1Q5n523G4Z2nXUcpC23hP9vMEBsApmPC",
  "key20": "3erfLJ2VWcrHVXuYh44EeqWnxCnuUys7aggsK47Tgw28Cs4KwtqWL3VLniiok6dKTH7g13zUj85KiwjueLgeLMCr",
  "key21": "3Ttz6QbTHngKpsKnGPkLSinECXUfwUtsv5o1emuzyUpHmhcwApdmj8zxte57Y7q84i5aYMQj68G3nJ82eUHoDGZD",
  "key22": "5iwT3DUSvyNa6gwCk2rsmgdanophRSkN7r9sE8n1uwkuK8kScKouhMNdxAJesWaK6JqtKgpXbuViVzBiRYDPKVy3",
  "key23": "66oNSqMQordVRbGvkncqQCbykhMG3kzcdsLzRCYowgx6CNp6yLoxLJmXCmnBgihCSu9gi9Ab477yEJK1kAK1wyZx",
  "key24": "38iyCoW3aFkv8y7UNAGE97HEGT5NypqnEVixC4vXUr8PW4eetB6GEWqNaueegup6YRoD8LSGfaiiT9fcqtCn7b3Q",
  "key25": "3MYcJEGkoCW64WnHqGKGo5LeG3zaQpsZMRpq3hwT2q5uk6ziQR1c2gxE6fjdxPwYkdrMZ3VCJPAdyaCqFZpBeVdh",
  "key26": "HdNbs1n35PMSimHJhbQLM2tmBc5F9UyCEg4tnAVARH5a22vfGwbFueLWGP4nreLuBsNrfHY6Qo5eC5uUwswEPZC",
  "key27": "43QvhXScAFcdYfCXw93wAWxnaugxnfb3ZrUf8uia3kGnnwobDFX3M5NYY7fGppyR84YDHH6vYukBScayy1rxygDA",
  "key28": "4Hu2cv1KKJk19anVbFgWmUtHrvuh5aVivweLSp8tdPBgGEqhStLKavi3uE54Vtv9udLpcLe42CyCm6ognuwfW9su",
  "key29": "5EWU4YPGaV61JrfVu32bAQ3wB8fV644JorznjsaJ2aKp8onjjqAxRYtG3EBaRLDyo91mkhULspLFDdJVu1bTx17B",
  "key30": "37UaFjzkaiRgJ5yHycZtU38naK2fNN9PJtGTrR8GLpYPnVQ1BsVnAVGZYraBeCNqAGJXVGXMVfpgVPGUNfw1y1Am",
  "key31": "3H9ysZoFMGssycMQ19KL1bxbv45fhufpmvGBTN4Qx1sgSxxgSrj3mQcBVeBAUM29TVLybhtp4aajmYhLHwJie547"
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
