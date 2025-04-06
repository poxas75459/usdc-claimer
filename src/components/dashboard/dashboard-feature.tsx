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
    "vRJ3SvAZYAcyrEh71nG1DrNgUEpUXfUnJ4baLsuADY5K4it4uj5697Jp33NSqYJ43vfLJZEpLexvxtZYnCemrRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5npcj1iSdntnvQnGPtkLh6vX5Zyw5A8mS2cLgHRoA85MKxjGDsuUoYNUUtysLtAFFdXtsV14ipK5dDqBkAa35amT",
  "key1": "5kh9DgcvAQsPq2vExgtj9ErnZUWWi5hxZmnUQ8juVk25JXZ1KCc7osSAx4sCcPiSXYP51nsCSdH1qRcsTfk2troW",
  "key2": "Cum4Ggr1kkhTBPiVR8cZzVo8iQnAfceWFZbmKhSAHqEMH4trs6tXpGBrEZBqmtQY225qUKjsWB6TFAyJJDKoHKK",
  "key3": "rcsq9dmBLwiNwjgWHpveMmag76aLV9b7soqsfGBvFunhvVEz45T8Mvjy5Dp6MubQ5964ffGxBByJ146DzdfRwDF",
  "key4": "5N2zEAhqCuGZkJty8tWn42HmnoBhD9CtvytjanmShoLYt5n2659u3LU72HDhezts54Hw4DfEq2QdZoGBkXKkwSm3",
  "key5": "qcp3LNNbr7kcXzBsnC52AsfnEff1Yb31nGYG8BSqaJx1Pv5VNrcD5jqm3po4JcA7PcYB5oHnLkRwpvh6fbDDjZs",
  "key6": "3cShmvaeSATL8EyNa2XfuspufGg6wuJoamk27U87y6mH57jtTzj6hdo7wXaFWXp6dpomRRTuGK4tYE5j8QpyPdqk",
  "key7": "2cYRw3ADVoyussufqF9Y9rpEdDPeUnToLrHput5Co5ynzj9sMBnP89A5AgQwXKPD9krBHWmSuJXvbmBAi1t8Uyik",
  "key8": "Lyhs6HsGS6c7cEcriaer9saYdE4zyimhVu6LoKyNGPRrPEUSQFeGkd7zCTaHXE9CpQryDeFargMfqHL89ieqdMC",
  "key9": "DjyTjd6g1v8gSqikn5cbwpLTDP6UY1EdLV1wMWwwxLJUxKFvmcy59mFA7UtfRgwQCa1ALNPrgPsvBkGC7A1Faj7",
  "key10": "5K7gYGYdNAYbsYKEBSxArFwMqopcvFwc7WKpXPyPoBqckrZHSD8CNp1qtqJKNjN2StbjFAs2sF1Ywu9bDZB1tXG5",
  "key11": "5jDUKZVXRuCCbe94RY72tAD9wziyHQxBMcQ4WD4uHaLH9DkYVQCaEqdE9XEpPVe8rSScMKud4aW2n1BGtPhDfS7f",
  "key12": "4zgqJeRPz49zZhJvExABzY6aP5ZZRZSU4pyWoRwb5mvszZrJ5zD5SnbuZRhvbDib7enexmbi5G7jYshY4WpCcpwp",
  "key13": "NvLVfEmre851qJHNnEQS1zd8W1SKHm7CiiHD5mPTzNNKsgZEXnR2oPS4ymLDCV7ARTQDkXbHJ1hgxtpuyMQ6pGf",
  "key14": "4meoJjWVUF6WDoBH6jK2LFx25Lu1jeHEMb6qLpZSRjuF5ssm6K2gt9fadTTWW3YE5SVBBCzsEUoUxLFt79Q3W485",
  "key15": "3aPN8hy1N8PPUnRjXZAH3jU8Dt8HARrLs35GdY72cSGzT9a2PKezjWVfd6zZ6j2eAXVsDHteyLf98zSQdshnYjNa",
  "key16": "469zGaedq71rXgugV9DjUvUPFtHhgxqtpM42K9iXibzy8yg7BCUywqcVYth9pCNeuNr5YxBgcT7HgNDezDq1taJL",
  "key17": "4cXMheksjwteJ7BQHxkXB78hKqmZV8U8xDoACRP2B5os2s1DPDnxAU6f2M8cwXWSfJLt6ShUh6jpJWC4h7BEPmLJ",
  "key18": "4sTXs4mg6WtogK8nhqHTCdQFpujMBLmPQcutC2tEKDxhNttYCq5edFZvpY5D8DMTywxEjexoz6Ruw3XDR3rmx4wF",
  "key19": "2fUjN31vowQuQXtKHrpKfy7cFUBLv5EkEZ8apUDUnCg4dC6oVT5TJBp54nEJXZ8fHFBwMx7DVEtFtv9F4bCMAN8q",
  "key20": "54PmExhadceyv9LT4ocpdWvsJigssz8MSWNaZFZuzJAEogb23ePv7LkAC4N5cKdn6C4rNYbjSbuVwYbHDGQqKoEZ",
  "key21": "2AconSBPm7NdihfdeXqmGFe3aZkugKNBw3fRVN18bprACpSBQnSUrC9LGuHzGJujdKXpKBLrKx6XHpqo2VbkFzhW",
  "key22": "67dVyqhLFo1kpNDjoWPKjQuVcdnXPE46tzPEXS5K9jcjdkjppqMfepKVe1Z4VGrG8umsLbTSoiuYXZDKXwpuCLPB",
  "key23": "44NjLQvBKyiX3JiPEhZG2e8CPR4Y1y17UGACE7buzetpPYv5zzLwDCjHNViqt3xWcyZT8v5J7g6f9nkj89joYgfq",
  "key24": "2qq3ieDeM2azA3VZvZxSDJBC9FiBtwLp6gqhLVYESFQs7aJiXKkLU7FDtyga8BkuZdhGsA3PK4CKW3eaDgfshbMi",
  "key25": "5tjWBRSxU1CFUaZTXfsxtDGSCqf6j9bohmb54Ju1pqN6Lu9QP1z7qE4u6pZSzsvRPq8j6SP7EVYbBdAiaKeGLeL9",
  "key26": "2SwgEezixHQVUqbkjNABGxoVKq6N3sW3nwMpiRGcp6GtLQ6adKt2TS4LLnkoHBfhVv4M65sGmJdSKpEHVGmhNUD5",
  "key27": "35fdbqWeYEpMRh6t6aJTRi9xJ2yFdhx8Fk1MyhDxSoRmFHUYMbJDY2DPN777J8KS6YSEGdi5Syx5F4j3SKhN6Tzw",
  "key28": "4K1tCuuRNjQaPjGTgsWuJf5goRh93MZ5DQorF4hmq6gdM2oEqg4WgbvDSqVGYGzJtH84QmjzHM3dC3oySWnfAiHf",
  "key29": "4jV2rVQaBtg6EmKDNeaci3FuzjNSmQdwMVTMgw7LgCFxPzpj7PsCfYzZHdEB4x5h98HHP597Lz6WpJhth22ExdPm",
  "key30": "2a1LozV2syzzVHYwipXc9kisaxNcocABJpr4JeR4EBUMLsbpczcjKv7upv1ggKbeLKzzx1jSWoTemA5uW1byDdv1",
  "key31": "5Ym1VyJUbjKX5vNY1cmFw4ekCw2kvCy2iUCpdXYofxuLoxBhNzMgT7sruYDWaCgYGsCoGrgLuQvTFjiUYLHkKd5J",
  "key32": "3EF1hv3AVifD4pQeNXdCvbn2mLWu9WwFEXnrEHB9QQxrWtXGPhhLmCiAhXkpYHbaJDcH1Fsen3XydAanuX5P1bMd",
  "key33": "4VGSUyb7qM74NTrSVzDgBjFyg6J38cJp7S1VQwbN8XBVFhQkvcjPxcgkUxdq6nTpghZx2s3fSM39KyYeuvkb4ADu",
  "key34": "tker1mBsSixqykHKUR5QkcFoPQQuej4Y584h6QySAzDyPhUkWHzkNubeJ7kJhkwkeYykZuf3CymPT8kYmJbiCyC",
  "key35": "3ou6bKrHVJWBTNYf6vpVNT9bRZAPEbeT2rqGs541dbgLDvhnFqvNfgdLDS5m4V5yja4jLtfQutQhCd7DQ8MEKBh9",
  "key36": "3fGUdWXhgUMrC4CsVikvtbn12bHQYg6edAS4KoLVq74XdNAYxm7RsinhQNTko2uDY7usAU3V6UVc3R4g3woeqyuf",
  "key37": "bd4CgAif88aso4k8XoA9LsLKRmHC1zJj5dByEKHBdvo8joSx5zayLufJYvHBPCYczZ31yjfPqyhtEkN8csw4TbG",
  "key38": "5idcrgeh8C4kuVdKVFYTSsLrYJQpVFeM2PPq6DCjwsRdGfBWf9Uiu7ThJoa5JNcmsjmovCpsNjQAmdxAFDmkYPT7",
  "key39": "CGS4dFB6XkW3s4F3EvmkyEq1NJAweatdsT1kEM95rwyYSwRFGC1gxe8AECEBse4YHdrJHuzZipo5Q3JotJYtYw1",
  "key40": "2uncMNLGevqbky3v7g1NWJQFo69fBJzjfq69Z1iy9aXNaFfJNDP6wwRCcfu6p93yaTZRgJMUF1wZqr5ZQYBrhQ4E"
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
