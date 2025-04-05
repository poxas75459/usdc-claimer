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
    "4JRe4oaET3qYGxzmjkoQWUCAZpVmEdLkJsrbJMrpMzTJe8BvswNfDDAMbQYoNiXLDATvEWEQXNtWi9x7QJ4U8idU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZcXGsZkXfYnqDgF3qFJJzmii6gXCSiau7QTSB9mCt453zRymsZF2DNGkCuS4cx5kZ9W63QTvEmfYjBzXfTj3MZ4",
  "key1": "3Sgp9orWpse9aLkeYRNiigJyibTcA64y6pRuZwoxTFkDu7Mdck9BpM6RcQ1BgEDgM2MsCe7NAJkZBLYaV8rQerqG",
  "key2": "66yobv3SDMuMuDaxAg7LK3eQRbu1XRfx9jm41CgMdGkAfBqhdcSCgXymrRhjGpSr7FaSnJB3jPZjtK77g4UB5G8c",
  "key3": "2w2wPY7z9TvDdGQcTjNU5GUVexxa8HRv8xTMDYtr3Vc82p4b52ru8RnNSX1B9s7WGR3vm2FuLYczEev5VrmFZVEE",
  "key4": "48C7W3h2FggVeBQ8A9EGrzWVdofLLam1otyTLhBHN4D4pEQfENNL1QNYj9Adtgy5wrJD6zuG7i8GVKXGpiFJYm2D",
  "key5": "43b2i6MkvbdqEpLEF3EWSC2nPnd6bMnNV3fTVbTYZDMuNqq3do1YUeQWTUSmYdjzzpMKtkZoLY5xKXfpE9oKC48B",
  "key6": "4dEEkDMv3UkeNbXDreHkeDEXToSujy6f2XzsGQVPb5TmW7tehe2hTtqUu1h5eNfkmWvP1ysxkiRsFVLK6akgZrZL",
  "key7": "5dX1mpJSJ6vxZdHoGkh7C13wTtxtatnaTnSedeH2PRGXMfSeXYhWycrhZdiW1CBvDHvVdMtrALfkyAEvDtgvDegn",
  "key8": "5dx8h1fFWexjjgnsvKpQwJk5FYgNGri1bRGBSWhZSE1dDis5W8dvxBe5ApaeqkoErkHRwEMbUgThK6J47PuuA7d7",
  "key9": "5bTGfKWxp1YPN4Rakm98kSfuVRnX13VnUhiK7G571RJimjMw1AS5meMYNAAhgPDBR4bEvFRBRKdXLLS8UDxJsTBw",
  "key10": "51k58DbBjdWwJJYBF8MkmdD9BagTe3pRJj5Qk3JgteXaReDUGrVVzT25zgAbmH4eFZAfvyn74hNK2BqnD1UfcALS",
  "key11": "4JxRe3Wx4HmbQ2SJ4pfjMqcvFWwGNPsMchTDSM81R6VwKtj8Sww6qvd8bERyhjQXu1gGyNsiSQ7TkXVVo6GyQBZP",
  "key12": "uKvz9y85F8EAkUEDvLB7KYyUBd6oTRSSaSpVKk2UyY5nv71GT7fZd75RUHq3an3kwATn87qtdZqVM5GHK7fQqvv",
  "key13": "67HZzCTPLGNCjcHmgfQpghdn1dY9QtCGgey6MJDRzQVUA1oveUDwD33sC4rMWBWMbA85URv2M5guYPjno4i6uoRy",
  "key14": "3EH8NBW2L9UnFDabXKcq2CB213JgVigZdK1fxo5MYmgFepL9nqdhxGApLtpEcko9L4o9vnaHWMFNaJebQAZPvPKV",
  "key15": "5WQDVkbYoTdDRfAHrXN8fF3r63d2aB7qJpAUZqX8GTo1PAAig5g4WGURqVi5N4Yk99tFqsQP9go5RHFSR8GtoQ2k",
  "key16": "TwouYBEhfJqPv1UzKikUx56ZnCKtnRkvuBMzzy6XkKSyaNiFxSwPAKmo7pz2knkY6wSoYXGPyWMaaKCgFo5QxLa",
  "key17": "2KWXbPEC9pg1JPvdvY9J2smoi2SuD6siwh23cMSohg4rUvitgqxrUJjts5mPtnnBL4FYX1FEXBna7aN4r8S1H9xL",
  "key18": "2KYYbpdpT881mW7j7qqcnu4qQJ953KcVawEvznDefeUyjff6ED3mTJcwN8HFQDBFu7WKVWVr7AWma273e1f1EE2D",
  "key19": "4ou4cgL1TWhdjXvknUkhWrdLxdNSrQXeCnbSSe18zpziyiM9bN9WSAT5QQKSKw9qxGmF7SG9Xdnh4sBqX2rBPUfc",
  "key20": "PRBStA8M1FiJ9GWDoEDXSuNtXMAKzNz38J9bshgoUce4rA4qEWHaLB9vi3Q1kXWzyiVG368TaA96z6PCjeHxWUj",
  "key21": "5CqmVxSE5R74sMj7an4URhft5GPHNSZhF6hmL6p93jwXrSh7z3HyGdop8xKaGDxatGv7iD9p4rqhAH9jGrKQWeCh",
  "key22": "375or5w3ZnnrFYQgSZpuQsjCN3FVhyCSwNpUPPWRGsZQZMTaxVFWgCHrpZkMBfcLgMWVqG6pVubwQQ3BbzEXREXK",
  "key23": "2xMXSeY9uygiki9a3Mqwveq1X1BFmks11K6R4ULgeCqQ4WsK9gEokF5pa2NNXJz4mRD977bjJmTUXasfqxFvJpDd",
  "key24": "4G7WEz8wZixGyPrjbD5PqhELTfu5qgzLhHtH4qndTLVPVGT1FRDbgGdXvpNhA7G2v3YBSQzaTYqA73axJZmuU8PT",
  "key25": "W9QDgrcmeXM8p9Yr6abnx5YZKm4hegjpte5WZYgkB81ggsMrygsvquSzCRrWm5ZAJHQ2JCKsD6FJoZK1DknNHQa",
  "key26": "2QJFAa8dUJvifDbQSW3vZ7RtY5GfeiJUvsF88LWpSMJ5wW8CfVK7krB74WFkxRNmeZNjNGowcdXVjW2UVsoKcbA3",
  "key27": "57GgjeAwVnySoi9ox9NdstPJey5ri5oEaMJ1LGhKsgWiwuGabxTNN8EtUZn4kT3ozFWToDKPDM6oReCXj3JvRgkA",
  "key28": "3fqV8iNqTGW4Q2fJMCcw5NqZLv2qGsQ2V7CPxvYMMfUKQgZ3z9GxyGL5c35o8ioQSSdtsENdy9MhGWi7C6ekwGq9",
  "key29": "45U4eddMhuH1dRGtiTiQLq1NM2uUyenVPbcNuRNWnSue2E9YKNpqNSW9Cn21g419xFWP2gfx12XLW6UBN9cRYwWC",
  "key30": "63957kpnrvZGyKTBPmvwgR71yV4qEMrYEmqz8iN9mKQzfnPTwaVmGqbaSsbV3ySdNY2afYLTRNcbx2RT34kLNFzx",
  "key31": "VygwXiwrUv8x6fbRreaCxdpQNpuGVRdrecUfqP62RdLBYoMKbmwJaxWGA5qni63REtmsLEbDB12mkqAyDcZAwj9",
  "key32": "2CHgpnGaQGmLHZmJ7NaCG9u1DokM8FgUUwdQWC5aYwnounkqd2AyS6rC6UUAPNaKm2EgzCn6pS2vfYNtPM6ecNJ7",
  "key33": "vnirD9nff4gzvNddyboLKmudM4NRNrrmkGGsAPimzXQbp2CfTMp4FRM1xfJAxP75M6RbiZiQH98CUCjfz2EM4sF",
  "key34": "4ogi7Yu4XrYBz3EwaZo5WxBgEyQe6rv1oSLzoM7tsRMKj2pTgBc6zzJJGqGpHGx6Ev6nyCzXNZ7dBcdkMmXkg4kz",
  "key35": "4VcZaE2GYj6YsEm1f1nrDq14RMFrbFT9bZYG8pnR2JzTQQzcnptreJURNFDaq5KbFroV7LRsMnKPeeptJohHoKQM",
  "key36": "31oczxaU8NFBJMwtvL1t4UFrNEUQso9ZPS8UBHFNA6JnrPnhmJJK7vs5pqLPR9N7UztcqdqGzwAn2awsEfqfRtji",
  "key37": "4UNsgEYa43QXQyzqAtwv2mRL71A2VMe1U1NR26aWh9Yi58EGTd6q6bh1PPvcCZ516gCggdb9WWEd2M84QB7xUcTa"
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
