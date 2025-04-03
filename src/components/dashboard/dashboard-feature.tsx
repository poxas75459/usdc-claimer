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
    "2eAQLmKGHzZXHZz1jA4ZxpT1SpKWteiZ8kPnL3nsoGoB2oqVU229oe8UynHX7Mu5dXwosB3tDbFKLgtd6JmR5Mw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49z5LY4zoXrAHUmiBwdy7Wh2d2zKKcqTYTH1BobqRqC19GCh6JgNS9KFkc2QJjpxyXtjrRmXKM3n7DS2UQUvLhBx",
  "key1": "AnUmU1mh5JTRQ85sxYAr8gYtqTgmH1m3FUBU34veynyChnHiVrxN1v2HBPDco4oNqo57CT2vZK4tGRgP3kZSUJu",
  "key2": "5WuaeQhAKizaWwjVHMTESPgNHz9v548wmR1ibfKYcGXbBfdYaJDM1dXtwMY5KuPA4NUFNPPgxBRgMvCUW9GvdWMn",
  "key3": "3ARhNW9qMVgBzRNbb8YtwqSRyUqS66HzSr6QYTZ5MxaWkWxM2Q8hyW3YkcSNCLgfM8WVLdk7K47CC9UjRZhHKdJg",
  "key4": "4c1dog5FkhzGnEJ2FYWBXcFU9VPYNUDjBc9CmVet92UFqm3c82cs3MbXaikaBcnJ6MHF4Vo343BQfpewGqJffkru",
  "key5": "3KGmTwjoYAKHwNwNHvvEWxQQz1yWu1aVmz7BmGDEYeym2Lcts2zmfEGjE9G9dQUdA675wVgrtz7WuhFhbja8FVaq",
  "key6": "4BQXHou6v6zPc6Tm5hz7kSmw9ZFUS1METaRZ8oWrQHH3Vb2itdFRQLFoDFX3NQ5AznykXHKefgsiFvhQTUcuAsSr",
  "key7": "28JPZC1K2CjFra4CSZwsocEu2ACsXmi2fdrd4YR8pG7wBRz11fr1VgtTXtrR8BUgoBb393WsK6UgnGesg7Whquu9",
  "key8": "3swFnSQeJ5UBa8FY9e2LpUfPxDNwDKmBr8bJioyVLThhs1Qwk76mZHNKp6EsXM2yPgSrwFzsStAruwsrPS19t7jV",
  "key9": "YLvE3i7wQe33TmRhSYZ1XMp6eQFtm7Hsi5i7DLk7oPNVLQEMiS9kTDQ2qrHrr46XEJDY5WhiuF7jvtbX7fR3uGN",
  "key10": "4DE7cCEiDTuFVHxKNsFGuzh5YGugrQudcjriBMGgJ6jqD3WqdiQd6vNm37gB6Kqm99JqkDZUHMueUenbVhqfpbFC",
  "key11": "5NGBkX7mA9Z7Bruet9LJf4LoosNEoCPkCHnfJzRnPovFniYxw15JLyCbrJtf5zodC8CrVkTg15RGMTHupgi3dkKq",
  "key12": "5oDttB7wVCBMbcE8QBREkWGCQ6wqrTLPFDXvNLn86KjLxkxueZDwAepq2LBmEBxUGnKkjbGvHhZooxjVWNxHqwpd",
  "key13": "3QJDoPvDviz1tspiWktw5o5CN9tPMRCHQ83RpM1k5nuGeu4zgrV4w11FZoCD31oqa6Dfm6z6VnxvZxhyCpLQYLSn",
  "key14": "39mFTakTXw2ucLfxES13oirb3VJC9FWe193XqYtPCrq89zXXp63WCbiENNQKEbnTvmZQ1wPwepXE63Kaguwm4zya",
  "key15": "jiTDMBZqUBKqraXUhMxknUNBwbJ818NA1YQirKh1Gizf6byedxLhAaUixZNeEHoKCk5wJ4Tej6yFPJToM1Fmy4A",
  "key16": "2Xdh4VbFhBGBsxJ49pLMVJiQaNHjov2jpT2xUD3bK5LZ15ThXn8HTKdA5qquyj4f1226wTCrWjH8GSmj2NCxkrRe",
  "key17": "5xrzqXHPUtpzsCirsUEvoxaiDB9vyAc5RwNoX3LJSwWi3DXedHL5s8sgz8E5rWnKGkQqjaAq295P2ANUshayBJ7m",
  "key18": "4rgfrKJxmr2JmbkR3ZyJxrckrYeDaSQKGgbrsDFXF1KXAHwQm4tpStsXcZUa6m145KbmGSxPsn6uN3YLmss3yvuD",
  "key19": "4KTLYbpfghn8cWC8DzYTSKVyGxYTv6Up6nvXjkUfVKEdzVKKjjH6QBniJ4ZZpzeLWFwiBUKpWp318ziReDJtVN7u",
  "key20": "5KZquxYX6scoTmfaz4Pmf8xycuJpQyweLWqdBnXPMmAyvvMDxcdXP5m1TBkQK5XR223rVX9ZVuvVvrQP2n5VZ9eV",
  "key21": "2zCBatSDj5Q5iiJSoajDZxpLfwTQngxXDUTBWGWkpfAmj4UtJXJkPRsP7Y9GBLvJYHe8vFsRQDEh3ZxZsr2dGFyV",
  "key22": "3eGuJEJzt6BudRYXVit2PAWBfpubThH7UCtziNF9Fh87LufGnUe9nx47Aki6idS6mqJwJx9YrLyLuW9g55SWTxbf",
  "key23": "HNd8AvadftzrU6RgfrZbBhrTtXeT6tbUc5Xnpv61JmmgzLamqYbWy7fGCkzB2zRe4aMvh2UMciQeebW87u4gUUy",
  "key24": "5PmzGd3RAMTpspPpza6JPt16agxvcsiacMyiRixCJcUyigr4XDCMWt4mR34kbERz3J1L753CzLKwc5oxcDdWMoTV",
  "key25": "5T2mmpqxGP4btyAArC1EpTWgdKGka6QggXvDjZzsgFwAqiThrqoZGh5gpYQ5pWak42Hqca5Lg9Yr737vDEue5oEk",
  "key26": "3F3nLubiBVcTu1Zukh9cghUEDCGbCHTRLXH5xw4Sz54fWKDobFgwqVTrzLeiz22LTLyMKNm8PiJYreC3wbXhDQ3v",
  "key27": "5S8rK3Qpp77zsTemaru84ozRNNmZAyWQnkac9bS5iZef2vH8ggvZA4kkb1t3uUr9JErUhWHj9C56vjm3hzwUGpCC",
  "key28": "5Lcv4qXF9KPFihWm9tpRwkhSyXjmwkaau3a5KW8Yy83RRcjDmeu2FdsGumNgkBFryZt87NrHb7V8stSYHWqiJZg7",
  "key29": "s43NiTYoH1rysJP5TcXriC6WAiE2fxX1WxzJD53VzRCJxTtBYTEmXxTDiHtmS1tzkyDBbhvgb5jPJ7VthZaoGfV",
  "key30": "2Sv9KRYi7uNbqQLRmjzvnpyzdecDovC8wFma5i97kbuyDiaqPBRoHdJLpMh38aub2Eti4CtZMa3hJRoLbGTMnpiw",
  "key31": "4wx1HphNvUGhs3y97q8iJvVrSi7gkBR5uLohWHREGRn2DwwVbUzLxNFMhNxt3p5pVyYvBnoG3d5U5wcFm1rg8Kyz",
  "key32": "4GF91ZjDz2ndhZBH9o8U7NkcwYLJwh3wfD9mbSf3AxiuofQUUZJJTfzyBFCiATwzXYa1jqYj6MdUQqWcH9JK9Nhg",
  "key33": "AeLh9RA3n2k7RkkAjbyVvTFE9cfE8XkQDSFTUzai8ntzdnyjjk8DXi1iYRbC8nPH9o4wHtxYpB3n5ubxNDaMwou",
  "key34": "3mUB3e4BeEKtxGttGiiGoQXMYM75kn4gUFHipfRdUSQTNGw1fhBCPt9qEyNSm2MD3DnD5ie83zMMWbvQbCtM2ab3",
  "key35": "nhpcbLmXN12b1GxtJb21c98rspniZKHf2CFhibytiM83oEFZuMRHGkUuVu3y7MdxeN7Bdwmiiqg7fWtN2UVNDxM",
  "key36": "53eQ15WYioyarC5PSVdqpgEi4o8xkYeiJkK1Gd7McugzeLGrBrq6Tn7Qc8p5gvkGvCJn57LogmyYFS1d7ACz7Gv3",
  "key37": "24Nypc3oxuxPGwtSeixk2LXZKnEEsZZeCKtQ1ubB8XD8DQXYw9DR6grx7xsfky8wHZLFfPMNJAjc5813JoUDhpk7",
  "key38": "HJT1XoyzQjuThmjsBLjeQJumR3frKvdJQPq99umSdNRCoqH4vGngxcjnB8g2Drbpbb4XooQaxcynY2d5Q6X6t3P"
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
