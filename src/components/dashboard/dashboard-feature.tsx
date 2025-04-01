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
    "5Uwtt2gYt4vik1phuGvsAddEpvru64S9sxmY5NnHnyM8VAXanaocoees72MJ7Hrk7p1qBrUarmYcwV8KsiSsxWiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G8cKkWX3H7CWCyHBHdZ5cqj4hy7dL5t18K3qDsbJPfzvye9XKUW3tXRY9pkKBQ4PfFm384Z7cmEAg7jAZ5kdwWv",
  "key1": "5EVcHG7Ja6ygm4EfWsPuPNwk3KxDqYz6NV6BoHafoGCaMYhbPrAdLBwE8gY6Gy7hUkEwTxzKiws9ZoieGgAwNMmG",
  "key2": "2qcnSkeQSefsJQsCLLKbkJpp9sseBvAmbadEbw1kxPW9U7vkuiaoVyEr5DxotpenZMLANcCTJ82phaBNtMH7QsUD",
  "key3": "29n58yYn5MojMWP6ikHmX43LstxxWg8dnxXtsCeN1u7rg2z3YrCfCrfCdXoVmGZRodMT2fY3JyoYTJosVNjCmvCP",
  "key4": "5P4uLXY7s7J82WtX3etsLRBVRMF6569zip4wmHLZBid5oMLdsqdiALjZ8DENL7cRRoneHczGNuyrqXkfgk1i4iWj",
  "key5": "3rmRnLmrNM7L88PrLGHkdrox4iUCLgYZEpVe9oZc2bpsfLHqtsWEJdUdSz3RbvwVmFtgtueNYbdzT2jHFyBZxiKW",
  "key6": "65R51RYSRLHuk4G23ZTpwa65sqLCKKAwBw3h4SYKrqtLiYCvSBnvD2pKZaAtWKKPCdhrYmXty4dqL2k3Lnx4d4v2",
  "key7": "2KPmZPyku5w8noDf1npSjxQKjysMAwV98Hd85RksHhEBVziZqGxGKEwvreseEhEs2iBVM4CnQH9nC31XyJUcpoco",
  "key8": "5c4cE2MM3fpFfw3KTmzYikm8DvsxwH5zvhLVVePpwyPp9UzeMvveKp8NbrLjjaWKzVZDauR5Ff4aykTJ3NZKNLmk",
  "key9": "4VL62X5w4vi5DqFBVFFwsQzQAo2DmhSue1Y6A8UfV4kEeavyHdSTeuXLyAcCp2PCmGxZSijayrsyGvbMMwc9A6q5",
  "key10": "4TGXGXGoQM5ymKNkopcj9aqhup7nFrSEpAnF3xNUpcGVmJL5c6VdUhuvV6f3y1YNEAUXUR7NgoNqyy16tPnS9dSJ",
  "key11": "4D4ZpowqzHrtcfHmxkT3rYQ6e1KFZrs6QHF2HX8UE4pubj63PCNTKdjdsTKyKCKFQtQsURhz4aRkYY8rkfX1vSB3",
  "key12": "FYnxPhLd7Amph59m2ya2diP1fCFtcJM37FLSQbf98ECg9Q5jsFZ6PLJBmbif3tvFDQqTdWsux8kCQmYESQe8F1a",
  "key13": "2PcSaShdM1SH5eEoiJsXXo1w93eBosKWXGwy49pwyaYJtfCworpkf7VqQ9kbA2wAdBfuGy3eSWGPGoLLU8eordPL",
  "key14": "26esNHbp8QdZnzCd483VFXaUuqJN8y7oeJLxsTMJ7Wi1DtnkvGng3fewUsfMLojdARq5q5wCvVX7wYDjnjsNKQNd",
  "key15": "5hAP7qXnTWwRpcNmgESv2rawpCX6oFe7fvZeGiJ3KAQzZEnkpECmd45Vi1sAfCzmJ7MrKBCfcEZPtPoXCHzqUh79",
  "key16": "5ZCVwZKYBBuKVPDgMcJaXFS6SvHZRvPh2JkTgiRJXFoC3HmM89A78cXz9c2azpngwEgiEC1dHDCu9JmKEmDG6GKw",
  "key17": "5x18bCbzCYYSunLToM4x3tmGMKsKLsPzSz2E997stpoo9q2Jq5MR494fEL1iJ9UhpVMUQqyYGFNU9mCTH3dCEF5u",
  "key18": "3Fzxvs1hkatx2gdEZSpTrwBUNEBkppu9XWWxQPe4JbtzaTy6NhWG2JuhgSX7c84sGxHh3RnYh3GTc8Qa4LzDpat2",
  "key19": "2dPsSZj3RaeYKJkLY8AP9p3wRHbc3KbribVLfrEWSfv2TCUnC3N8a2X7Er26KSpWhm2jANgvoF14bZu9urXhWm7w",
  "key20": "2Y8beJ7buJZBRhDNAQCrfqkPcst4WtM7HwvGcpVN82PP4UCCUCkLn6BxCbdUmf2du7qUweZFVin7yQsk8VTFAXfx",
  "key21": "3u1F5fnNBfavDYNEbFGJwxtSfUKwiD6Y5mqGP9EQJg8Vd622s1asjaiXJaCcqR45GkVjutCzef2g33jKYYj6pwg7",
  "key22": "4bhtshKfn3EHUvw8HS5ohiNwmFj49sN18o4x4Bbi9bE5HxFBqQJvh5nucJt8UzWMpTPUNwmWEYX9HX1g3enjDANo",
  "key23": "1r7TDWx6rkMidbdegy1fYHvHHab3rKpUmdLnruBoHPEwiCTKK6B2DU7PbVCdN6jA1iSQKqVYQogcc9dkYbK9Pee",
  "key24": "3xqMoFaGgBPrDraoJxaNkMox84hiNr2VJwVH7jsapEgCGMRQsukyQ1DYAB4xJxzeM1B845r6eeHK7Trq763TxzxA",
  "key25": "5pXTobLKRVXXeY9ZbJXmCeQgwn3kz3S15NEX4oQnksP36cEmMa3RmKtw3KZhZ24SPSxbcafJtuPGwNY859UtDRM5",
  "key26": "32gygoWxGcWgwZBXg2qhHhypBis54pXSTAW49FHKv7oVNUxyBR6wVMAPaif9fRu5rgKKQDWBUQLWQPvk8vWrQyo4",
  "key27": "3UGj12aQK7qeNLcNJVdV7ucUh9VLdD9wQsfLsELUA2esaXJkUf9HfRzFPoWAaU4o5fcNrJPJAoRHwFQ2r6rPYoaT",
  "key28": "2gswkBKGnbzwYoEMdwML4KLT6WzBqPsv4pEDYE5tYUtroxvkWdcyNdRWJotzWCWJh1nMtvkEBdRQh259f67TrGbT",
  "key29": "6XTGbucpTTrBFNZgL4qyNRnhzwVErwStzFJEDCAU3DNZBWGudxxyszzgGZoDNDyeRRucuDWbv7U2JoLtofWXoZH",
  "key30": "8R6MjbGkBYwjSHr6Ud9JMP4fvv94EXi4tZuHupySh6oVwDXAiABnY7AyzYdgFTMGFyddQd71LWPerzj1pA6xoDD",
  "key31": "4vEj6nqo39oRqPwhTBGfgPooQJdjSiJyTusfFGQAHqMmoSWtuoXYTSZvxvHSx827S1jFtmqzvp1TLF8y7dqsRssw",
  "key32": "4kwvjnPWuE11ksGThFvpQPLdPHALHFbMc2JRJn9Cce3afJdcG5RcEvTAgmmWHoixheJCvpAr7guRVpAfehoGSKHM",
  "key33": "Z7neCYmi9HU37ZF3T6hLYY1wzJNgAYoDuyKSTqUvTqUguLn1FpNZHw1iTkPbv9g75QF8xrUzn3muoujt8z3S8BP",
  "key34": "2SM18pjDF3bA66QyVwddd5UmWQBUgNUMA82huP8tZuRXm2mpeAZfnbhqnpYuE9p7uBMPjgJyv4zCeg8h78KJUf2s",
  "key35": "5DVvDxQd9Bx3knViojJdLRU1Yj8TbXb3kW1NZjdHRC41NuDiiYHMVQaZJFzcdPzGaDG7WKWFDJYQASMr2naGhqUG",
  "key36": "2irmbmxkJUBgJP3SyHaDt5P7SeyoxHAGpVL1u7L62vkJye7YpD4An1f4CPKZVxFjks5uud2iCQ9LwZXt3D3LBRbf",
  "key37": "35DDeZyLejeMnyH1Jdt6XN7yNfBKJ2F1pQJPJmwGNiUEL4DCrU4KaC6Uwe6AQneQvp1cRLeMGU3i271QKQG7VwVZ",
  "key38": "2gYxwdWDUQzpdq2V88ttgnDzgsVMxVN5X9J55y17aHbXpMN9jrBBbasKQEhaz1nJunirkD82JnsxpY5aUQucConZ",
  "key39": "5KdEkp61zBF97FKy7grzXrgZgqSzp1LFfyUhzf6ueaTsp47RavmhKeYcpL2Z9tEU7G95L3duvCXFw8X4k6xBnoae",
  "key40": "w47kXBYX8FngqJMRkDdm7xvpjoYMZS2se919JtmbtWzNxR3EkMybnxNkoKqgFFyLHfuUwNHV9Z8DHqz75tcBj2x",
  "key41": "8NMPeF6hjw26stKfV8NdeDYhTjkoKL7bm9YMFq6UB5ryKR1o6ZLYJpeqru7usXjdUV9KfmcFt7hSZ1P2pvVRLM8",
  "key42": "3SdQ2mpJSbPY5q5QmvzmRh2VgswuKNkMM8W3QafVQ5M8r8cK3mrekBRFLtkXbax7KipLtDNCivQwLU5UVW1K7ePk",
  "key43": "2BWrSE7FrkpK64vX25AneyhkgW2CweJYEhs2GmFuCSMPF3qeoo6mX2jWMK5Bpj9o6ypdvTpPnaUnrKqvB9Nq63db",
  "key44": "Z3fSbfkwsRF38GF8KKPukmM9jyiWRiTDZkuPGoEVXdMRpEXxrPQ8kTCArfrhk9KvadtAKzD7ruNyrVtEXXosPhw",
  "key45": "4mYF7e8pxc2QYbeFH4XT6fFWZBWuwHNtwSHHHPW9AKiL7GhKJD1VvZLutyo2APBf9MPn2tYUpjXnsktSG7ggdALj"
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
