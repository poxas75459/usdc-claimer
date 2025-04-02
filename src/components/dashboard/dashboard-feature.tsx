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
    "21LzCERBWzTr9b9DNXXLjL6XNZt5KME8LnVQJR28k7zgUEEN31CM8TboqjLiCm3B5abZJ5yYC9ob9Cm6SsejLpeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NaySDgbxmyvW6827FXnT8mwoWjc4UipHv9rKq7NQ6gzczmxCA7xyfrgHZ1vBJr9Nu7E6QM3rB6bsoar7qgZxvM9",
  "key1": "4X7QdrK6Wx2REo1yVVx9wgAsjF6siScE2qiSHHjHQq9q2QLYe5ma2WCmsCjs7hUg36Rr2gx1hGWqG3iyCAqWGDjo",
  "key2": "5hrKAgvahRKbjHmgyiVu2bsx2kk4s8Lg2hRdktAVo5ifbTqBCsmA4Sf4V8XR5PSxSgPGwZBV6QRtk1L1NJEwNkD1",
  "key3": "4E33hT9mFXDV4App9VBzbBwVBF7zjg5kTgzrNGezNgokyoCrc6uyXGYPptK8AZQN3bE2E3SGQJ2U8tsoguP7HxM",
  "key4": "djBvr5GihSEofgo5STrCi7hetz9y26MoXqTFPXcq37hGnVdrkJoV6YPPvX3h8Q3pNAtbYEMc7KcLvzVVfLWrjXr",
  "key5": "4jvALcef23zfedAmcMRbwCe1mvK8UFoxk1bgZEkLew7HYAg6XqV9YNQ261D6exyuLYocrRUaUrbTsq8TwdwrtyBr",
  "key6": "c7sMg3X2k3xR8MiNXyvna2gMh2TRyvjnYtWWWHVPMjk5j8DJxJfWGxwYwNDNwsk4oKHe249zLFfYaocyUKdraS1",
  "key7": "4n3deQmxEhTKSvUaoMLzHdiY9qXC9R9V5bRersW2wMN2yhcBV1fjjjCHDbqQe69YmfatMchgWRiCbTs3srkr8gsc",
  "key8": "CaaeKU6SrG7s3NoXfAqpNZfcvhn1sVYyukahXSeU1o4JyVnbE4RhiwMt1GQhiGpgeQsAnjbztu2s1h74gZ4UboL",
  "key9": "5DY9pbU5pUwkiuqrW1cUejgdasfcrwnjfKZM71wzARFUq9ubp27FGRTYf5y59CJkUXFRwRxaBqU7ASb8XS76E27j",
  "key10": "VwFZY4rrEPmVQohcXuU9EnceQvxoz2HhePtXv9mc4XREyQFQLVadp9LLMYUEzZyRbaYWw4WniZLhGGQbWAurjVW",
  "key11": "5Hi4tWK1Rn4KBHjSiAxoDtSptfMRWfEuDUwMcdcmXutLPdUJjNWjCr3aVW5hPAwFBAGJPD7EENnMxX11JfxnqyCr",
  "key12": "5fTYonnbLZnEDGdo8xeFBqj8BDMzNFji9E9t7u2XdWPDhbtrhV6WCDwVQZ2SmGFN5DDwmtWEKo7HLfzN3L1MZzgK",
  "key13": "5ZDaMK1kk9kYM4kJ6PxZcHVYhTXrM5ZcR7bjHTAeX6BXun5Y4T7K6pcHhqyUxkoCr6XPjJNWZkCY1eDEsp2b6nsy",
  "key14": "5nCJM6qZMJ1RX6YJrY1b5bZCfUfWsSbdB2Ab8cPsH1dNv25eG7obEXUvH7jrvGxN45JE9vuoR4JtDVbdVT5FLY2J",
  "key15": "2w2qQRQWecC5PM5RHRPaW3noMGnEeyZTbM59kPCRMs1rWH7CfV258VR3K7mEXr7nsDCavoNm799FXFK8LhGCsPLx",
  "key16": "3yAW3ztrGicFsAWT82iHJDRFTQQ8VCtXAsqi8H4yinsoA57N5RJvpixeU9deCyyEroEdq5MFBCaF5NFbjxbaT6L",
  "key17": "4j1N27A3VkmQmipREvB8qD61pxBYncxstPPAfKLbdDYfWSp1KZgo1vtHnWCyYYS5h7TRHHU2KEnPGAwnm43ntUgH",
  "key18": "22ZsHSaAbqag9mEwLT98wowPJvGCDz2Y5KtWz8JNcvpYfwQrZAnL5KEpJYkFjPHwNXkPuEJJq2rU4HV5y5xmxnPt",
  "key19": "67RUrCb7AGnV8dgtrHyCpfv8eDimVeVcyqig6nEjifJpsjmzzLqHxG9JhV1LyqDsFaGTcbVgzYcTYEZ9k6LuzKEb",
  "key20": "3VaR8vqs9onDsdT9a1WHdrW1bMzkRPWVk3BNyVF6SdYPy96sgMmUXZpW9YqkFnYLhW1gZR51Xw8sX35G3c5N6imf",
  "key21": "5R31VPgGcMumvBvimhnhjfcupfNM97QfSvkpLyC1qEyd7yNh8ZyhQWMwuRE8sAzzzTtkr3LpYtCCx7FjbZsULErL",
  "key22": "4BiYUUAZLYRVPPybDieFtdde4tvhX4WJVXEX1p1Q5ZpBneudkMaquqGPkig5r1mL6Cbot5sQC1mZbDUJwSHbjsnA",
  "key23": "35w3EuNPPWnqWVfAdqpf3hcbPY8ru7F2PZesCG6NqNuvU2KaG1FuC5uhYbYwA9EkLCLyPaDCa8mcURRBraqDuLVz",
  "key24": "5PmPCgh6QPQcvx1g1oryqzsNQuVTMjn8LnHqhJn9t6nZoKZCMrCSoa6TqhK2fqEkFrTX9awvuc36rAzBuyV3rZg5",
  "key25": "4ZE5gxYhC6uPBH4ACNeboAsvsAvHX8JBg2mdNyyxorvBE1SWTFu6b1esh8VdiKZDKUoz15uvVJw5tscYk252YXuk",
  "key26": "5gb8kbmjCgBvMT3UMsSjA8kTTHymgUKp4RN5qV4p2aJ62XNchNsGMAHxUXUNwFPCK6YsVBctrMU43NpDV3SCzmkb",
  "key27": "2hXViZnGLt3dryi4WDNYjCimEaFwAkVg9XRWPc1b2eEmvePNibHiSTCNzdpnWfhYRk5ftyH2xvcCrhEQNCd7e23s",
  "key28": "2V8QnHLZUgCYTaSHBKGGcpzuVTG6iVV2W1HJ3VFpJVeyF9qAHnNyaKKCyGd2BBz7uLgfntpP7kvtWrgYneWv6SRP",
  "key29": "25zkLR8QvcqZ4CSAHsvCvBFCHAMaAGULaWj7rjV8bzvNhkg2H5fgzeAU2vAwkEkbLEFB2H6zsnj9TLYLujEyts2c",
  "key30": "2oMPd27RW1arUjJZShnLenaKa8jM7LvqktqJziMgwTM36wxiJ85mqkHaCcGkbxh9dzC6ymFF44KkV6GysMdBcTnf"
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
