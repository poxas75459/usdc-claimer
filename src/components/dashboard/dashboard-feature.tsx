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
    "42wNB2UyQAbfUEWKkWP8VmPxAG3rhhUWoUCbUk7m6DYE8xqQeF53jcZgQxoiSRPtvz6n91ryZ6UGsyA1Ytet5ZGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QmbBackir3CJU2dq1AhjrdxJEECmqryqJumhQqQzoR8YMza7AgBMWXS7nnWdgiH1WsL4eRRwMLJd499qRTih28X",
  "key1": "2xcsQxbYtDeUzh4aBWgBVmdbkDrVBybgtKZdbiTiavfc1akcJmCLzcQCXqDgdNWNuYpMQNgEmBEybFw4K1LfK4nV",
  "key2": "4r851E2GkpAwh4GNgvcLz3vEK5AFsBHcGV7gjMCLHGawLgZdrGXi9DXcUPEKzhQtFoXRGPpZnbHgB8dxNjKpEiXC",
  "key3": "3S3WAu2oZvPddd3NM3BR6aLFuCWCjjhh5cE9oLeEEpFGBhqGJoVZdM9wvCfb3FXCTm8ZtnTGgMR6sxvuoF7nADBF",
  "key4": "5w6cGdTDqwYvfHYUvyAYgySqTkgTecbGQokk835ikeHtXHGkmRVnGhrsNZJGkhyGTy6LZMcXZJZeHXzaE7ZRZqd5",
  "key5": "4uw3xT7jdVdzCvq1pFFH5qkvdxScqUF596uuvGaCnTehgFEs7cKBE2vfgxaVynxKUuFrsWCXAuDbMxtevgKDiAm7",
  "key6": "3FAqrJTKTm86kEAb6VnDKCNfz8Gq3zM7CFShHttgDaAsmVHbccZpGe2qufui2HQGx2VANqpDcKPxo7bgCMn7EAqt",
  "key7": "xD9QxcZtbdQpANsVZZxQsNvfqPnVkthK9qFpomW4V1fzcYe9e9Fjxq4YHryfqb9f18VSQXpqvQUuP6YAzJx2BZs",
  "key8": "5yLN8qfQHJj6yXKevQwieRjdxbyEJKFDuFeeQU6gmz3Ddwkwn7gJkob8279u7SGwYb2euBeFZdgffoVLx7g6AbdK",
  "key9": "2FEkRTLmxWMYaNuBZabHc32WnXq2Nz7G7shWBUKAprAvFoGUwezJ4FGqVa3GouECYg4TbVjGyhzQKrWkTMxrs39o",
  "key10": "2LJDoRhZ7QB2AJnf6r8ezdggvTtJ3YHnt1CTdaycEfqS9VeKqxiRrJbBw2gf6sauCDpcBzbCXgpR4VzsG3yEdmj4",
  "key11": "2V28jjqrrLQxcmkhkh1qcTey64miAL2zMibmLeE9vhXKPpGLqaWa4Nw2JtoAc6md6pjsqCGFBjm55oLkfQG8PfWt",
  "key12": "57d9yGaHbcLhaDyFsSEGXVLQFiRgb3Poos1SkhUWT43UpbyGJKEbf2wr9a4YrpGqU8FK5UhQXBAy4dyEd7wypP3E",
  "key13": "ctrbHEqFToK43dX2nCWyP5PRanfESEKJj4Psakh1315xSpXgsYc4s3bocCzMJ8TQproXc98Lp9SueRzwV1bbo8h",
  "key14": "3jXogGFqR4mF3MPuq7Qrs29AZ8e7MV8ePUYiwfP8BynYqFFQUJZfJ1GuWxQSX2y9VgFKfMBfog222HBwgzLimBy",
  "key15": "3hqV9qX8ytpmaSJAtNSVjR7SmBGkFfZq2voDhZEvcXzimvgFT5gp6xFXkC69ErsNHyUsPCDZtiiUwQPMpcVBzmSu",
  "key16": "2Z4Uu3LX9sbxurGfhY5xmn5QiUNrcNqPcHzyFjsT3UejXQaBeD8gghPupeLtpvPaBCsY1b2bxLhDbp1BLsV1EQ1P",
  "key17": "4Kv3C4HARC3VFfCUxsg5sVqxrPRc52jbnoH67s8xWEkZ2VcWgH5GFPNyzLZ5AaqG2QD1J2wCjL3RTM7oQLkVPreE",
  "key18": "3WQNFaQ1ArcxYnqwhtE919wSMpuq4hFK4GQwh77947gYYuvmpzrdmEjoddo8jZtE1iJMSTAG7WZ2CE663ePPoi1w",
  "key19": "5TqMMNEnY2uXf2XHbHqKVwRqsc2XrxCfvDjMk1EnaCUhZJ8bdE2XL5AsTU9wAVdCc3aS4F7d26pD5o5sogWsn4ih",
  "key20": "3WAv6apmaNwwvExVLvw2gz2cfKwuVsr8PS45qNPAZgH5hyTLaFADq5VYir3WKgP75EdCNQJ4sQVxnypR8J9mWaG2",
  "key21": "3NBpSCcni853wGJr8AJUbbD3uDvYRP3pmX9KGP5P4HLUEz89u8BrYgeVLso12xZ4xkyj6oo622gSTYPS1c6hB9Fr",
  "key22": "2S3evEZX7jnA4Fq7brZU4vjkUCzgrcooWaUjGaQN63SaoQjxTMDnzWdYHJHp2gzy8ARSxd9WAmGC4QpGsuYZ7yuD",
  "key23": "4CPHoFfWEFBqE9PBebEBVV54YK58S7WYiF5B2FCjPrHi6uHXSVGKD2mTPdZ9i68tJjwaKpzMjp46wvsHCzaeqRM4",
  "key24": "2MZGt6Q59VmbMkRgAnMMb2vp1E2SS7zAmsKnQ48Eui6syYskxg7tHVtkUVR1KTwcg64T3w3sFttfsNrqCMDUnJe3",
  "key25": "gj4USoXLn39AN7oHgmMCTguQ9rkMEnEQEb8qH4Xt73Rp8uTtgQxfnwoooMyJ9wMLwfuTp8Giwb3QKzAyCYooF6m",
  "key26": "2eD1GRGkuUHBAVGXuACu6ZdhSkzzJwgDtFyRKt6p6RZekRg2WzTdhCc6D6w7HaR4ThhD7DYTRncv9dvLuDnVAu8F",
  "key27": "nGcNKzZMg4qGKBcuokMc35RGtA6iXwjv2gkgB1YELFFBvyDGSgb9hY5wtJVSF9sqqCErH25anJW6QWB2qZcLDVd",
  "key28": "2x6HUoDwwHqv7MtcDD4fW1jUBX8H9QuBjCHoqSrzjkrXpsb4MaEuvHL3dLZwgorvY8xSKHRXE7WoeLr58xMRwrHL",
  "key29": "5NuZbpib7V9ogrYSWy9kMbescFcHCz7rg8ns7NUPR8WB7EsuKfq7Uin354DrZbYCX9PR3uTK4EuSyxxjP8SDeBjQ",
  "key30": "4YBBafC9fAuiKVserEoGxQk2gSKGWy1kn23Sfhaw5gAXkZMBoZSTbA4oCoj9pF2bNwm86MJhz7oMrjFFLuxLV3E5",
  "key31": "Exycff3JbztMEigpYUYaPu5BuLr1KeQTCKARi9tPeJTBMGhk7C7U7hc46QnvPuWqCL9XRXffFs3YmcCbjxbXcq6",
  "key32": "2AenxXM5figG19KxpPtx6njYpBnQT8CsMg1zzKstfAaNXejgsCCQq7M8dGP8XcjwHhqwincBHx55R5txJFbsd4HL",
  "key33": "43xqpEqR7aLxGtCQLsUS3c4PFHxEn583QNSfViaX8w3NcKXG3ymcdVELwu3kYGGPfYpyEZ4LYg8nanYeegmdn7wD",
  "key34": "3TeHXPVGb6GozzSi5UibsfwM7FBHpfhv3z27cBAgFQ7hrQcXm1UXh2sR4LCvpYbR543GUFiT1GiGBeAhhRwxvYfX",
  "key35": "3vPFPHkGfH6WarswFfHDQuStVwty4HD49i1ujstqBfvdqh5Sf14VAUFaYrVPCnH9gcwtfrHqhaZxYinRGqW55BPg"
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
