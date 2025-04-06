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
    "Rio99eKcCfG5moD6W2eA1aQZkxWrR58Sk4SCBcnUPPWukmMzUgtb9J5KyQCGY8zt62s5Ab5bckpQYnR9hc6iK12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3He6JWZDmWSivvHUMbWmURiWinWJS1bwXL88P6YjawPqYZoKszepCUXPhS8XxGJGW5K5W2dJHgNe7tVkQ5MXbG95",
  "key1": "DR3G2MynoB8KDe1myaV7NmxyrzrXxcM7oAbdFKG74na33CCbNUUxYfQFb4uyKb3Qd8njXxcNy75L6CHZnmhvAgT",
  "key2": "2Yn4bRQTZRN6ECmbTLgRaPn5ZxJPPvTDkUA56w5Jzxw8oenQvmLVf7xZsfjoLtPcm79iJvRaMmCSuL3dzdGkdHx7",
  "key3": "4yuS8zFRbr9FsZpkfqFzbcdBVFiGrVm9hvXEFJxyyQeRRhQWju18wU7WGCAUQrzHk2np77gb3A1pGoS5SyA1XXp3",
  "key4": "5z75mt2qFBpbtTpsYGPEAsqhSDb4EBb9kSPdrmB95ZTBXZC55mZfjN3mZA8LCzbpjs8aZX3B66ydx1Azgz8b12Wv",
  "key5": "K44yEyXMHpJqphoYphc5s1MiJL1aoX7SxxSnsdyvTGw3tN1y4xKWSA4p26gJ67ZDQdiQ4HNUtucFxuXhrrDKER4",
  "key6": "22BzeEUmDNaL6b1SKkPmnRbPHJHumupdjS743Ro11v4XCpMLcge5C5eZz77khpNghX8RVUW16bGizbL6i8ybzMS5",
  "key7": "5gfA3orNgoLkr7GfEQo3tnpLneU2mBQoxCUHNKm8bMVtttA7aVHtMoStjjbzjpL1EfCRX3PwpUUnfz4S1hKhpT6o",
  "key8": "3fpqYVQd3KDMdQHKiVTfFMnDpdBx8fri11BVEcZ4QdSiT8XhyeDzFyz1ZhXRNqNzxQAZ371XoMXwZ93ruH1N8MnW",
  "key9": "4PrsQcTRTeHzJcTsmUScNvUaPpVqm6hpxtQLTkyY2e5mVCJYBKEXqqPJXrCrxmbDShSzbLWQDEhfWuTHnadX49H2",
  "key10": "38K5ui3Lr7fGwW3TM1ms5ZLyhaP5zRjZPfoJ7S97wmtrRS2phkCnRKXQNy1HQEVTRWvvPj9r4dwphJuLayHNRzvz",
  "key11": "5e4Tf9ussHxVaZ15hwoMgMSw2YGuYSBANPA78VDFWNirVmbkMdfZJqutyUFFtE8RtCNgH2gS5KAKT3Gchk7fB5fh",
  "key12": "4XyL5G3hyi9PCVdfvFWeweB6sRUBpfjixmKf1hNs3KQN598uJhKD5Hq6YYszW9Fsgs7aH1VP9GeAuwV5vvr1WgQ",
  "key13": "1xKJoTCs4K7UwSUfiSr311BzyQ97hMQyayWdNtqGVnftcv7V4TGv2Snr3rhxM1BRM2MYH2pj22C5EQsNaFMJRij",
  "key14": "28Mre7qMCm6jv61uhpJFDdryTNmjRopwatuJz9bpLb7yBYKKRpfFKMD1hkgkJuzftHsWmET84tomRgXvLUDJAeTC",
  "key15": "zzzJqfe1YD62SFs497AU1WdHiLFofhpsLbHrB2qVVrM5hwZqFb4JdGxAJuSzMSKqSJqMLHkTn1dxd515p45wBD5",
  "key16": "5TwVLkywEof3HRdndLwiVQw1c7n6yrytshGKqr7RfZywJXCpXUpBK47UzScH3PHdJYa32jXjKcGk1r75upo688Jf",
  "key17": "2trfraXpAdfMWt9hSQetikpJUx4hjwkEaa7UNXMDgRPbmvuiPmdRkbkStyMKEVaucdqJdz72kKvXtS5dR4G9ihfL",
  "key18": "4KwPMJyU8JPTS8RjG38ygd7VCVxYmsYk3QQFt2Yoba46KfHEf3GMQjTda4bYC7Hd7ZnC8HLs9PapFCEcfMjsnqcS",
  "key19": "66HEEUQakWQPrUDbGzmcivgYcin9LTkMLr3srQuNUN4bFLB4MkA3W2u516z9xbFA4edDbKGkJ3f59ipGNoZuNiv5",
  "key20": "3HB1KzqiBVk4xMcJefttNpZhmScsArKKNwViyjYrmDYrsoQNub7aYPYTHEdiJ6CzJcxGmpTDVKGmd7JZ37XM3PEb",
  "key21": "47Yoa2K1f9eTA2MCVJ3cvDWmRnCgxw4QsdJcuWSS3kp5MmGHZpDpkJjkmuMky8JMEFGLQ8TSnkvRdbVi8pcUjwR4",
  "key22": "5aUj4QnyQjxKaoDhuCKjvd14bFTn2jrvTXEhGweDJUD5DCsmpgtDoxUk5YU76YkFNMyn1R4f1NtUcgLVdkgr5BQR",
  "key23": "5B4ie5JZRuBiQd3NeMAoUCoHSkHP45cxUsJEJn5VzFcmuXEB7afzyvAcL2nnPTt3os7kmdWAcoEuEft2vjWXVM54",
  "key24": "4qobjBw5ah2WoTZbPbewF6Yw3n6cJgiqh2jGJWxxjRBqJP1nbosMPyvm2YSByASwBJBi3LyqG1wdJFywWtaepJnh",
  "key25": "4KiYwDnrxiQK1WHmvVux14qUG1NDuaiWhyiX5KrwVbcYTKiY2YYQoXtWqY6WWnaZigdsqwoQ5c9AEjPqUMVfUApQ",
  "key26": "3uXSam4drg1F9KEkpjbCmtSsa8tk3XcwfnR3FEEGdD7aejNmUcuHist6L9hyUz95VdTBqV47JLz1WCk3ATCnWp3F",
  "key27": "WPKtkN1xaPrE8z1SxGNdkqiM8rsAW5Mt8XhrE23St5PSCZr1tb27Ag4orGiUQaJtNS9JfubPbabSPxf6dEJ9T89",
  "key28": "61igLmKAwr48fKmFC1PCuqSk1H3VXA7onWxQ4Za39p6Laecq9M7s495K88KfiHycvPxkCVevs62G78Qot9sMxPNR",
  "key29": "d8WMDhmTCwq57525r3hCLAuwPmjmiNW3MRJHpcafChECpyjmUTGAdCEpeukPFDdydcQ9WU8CBuSsbKM7KJ4x6ia",
  "key30": "3QUJrJmoWTBPQsxxL4bVrp5PBU2ATcRkZBkJXpUbnSQUJMgRgtcPB2i6tipKytet6WwpsxEjZbkuhq12TSYbw7ua",
  "key31": "4SJ9gaE91ZCosnmRrRo3ggm6VdEkvM2GbBAHDhZAMKUTEXCvcQnQgXzxyWvVAssR4zkDNW2kxtW3K4knxFgVgEjN",
  "key32": "4GQoz8amvFK2EYVLkpkKsunurNb9nNjM6FvAytuEXbSWZaJbvJagt6UEbBHF3DLbAscg42PPiS1WPdyv6N6QR6fm",
  "key33": "3TYGHWNsJkSXDA5RLNfwHXLTssz7kbXmSssanMhRqZ6PjGZLXyvFTxCN1DJhXZ8QEbfDekNHUTrGhVpTLt2AScEN"
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
