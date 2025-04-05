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
    "29oi6zGkWM9ScYCmb5ZNuHtzLA41n6nmDsr9JtM5BQMxXX9c8t9haVxhWurcoX5rQ8or3hExdSsPVmmDmPaEjQ8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hym7rutsVHFgWpkyf6UTfFTbKXqYTeVSDRuQQhe49NMoA3ogSEHfKdFvW5Nrcv2ZjthVxaHqQj77FBwSKefrgC1",
  "key1": "4PrD6pQYaEC6Leihfewi4Km9YC5m5KB3XJkokiVx7Tqke1zrsY9639YKv4cnK42pxMm3AxbriYWjZ3qeiYXQVoh3",
  "key2": "3TocP1NjBCUG1hohk8dZFoXqG9PKq1JW4Mxn4FNaZY7dKZ86DNUQzLTMJqEUxKgQSnafGwkGh8zJVicidQuWrMXt",
  "key3": "2UuJBgD9GDumJij2h4MTwjmpzfXrdjP1zbWGoviwD7WdRZ3CqU18utNFKC7oS6waiMqZFKEkrYokLekpk88hqYsn",
  "key4": "2zBqGBobWR8V8KvDQH8kRDL1e9MvGLvKG7Q2FhAGyfHYnz6wTsQpsjLju56F7t5qbXB3y6X1L3bmyQZ9ehGgWRVS",
  "key5": "2qwGxKNFPJQnrW2bcRYhVzd7vhwtk6qRU6NEz3cGHYys83SwpEQ1uTjGged6het1TKpBvbtp7Ln4LvVqGD31vvMz",
  "key6": "4vuSMgrdHgWEupUWi5qEc5bAG3F2FFGWfezE5JZDzdt8sBeBLDHxb4svZz1PgMj8dVhy79WqRfZ9tBHbyyeiCmZF",
  "key7": "2MfHzgibCnZ1fN1wLynyGxJqh2hMaqRMTEeAvnPX3rnzF3HUHQ14CYmKoLYeNkJJV3Q6s1tHKz9PdiHEKq1ZJQfv",
  "key8": "4cTvCkBPVHqqdBatBYvGM546u3qzWTbiDcVcuMNZv2yY44nNab1FW74MkKVxxmn8wmdGSXvNZUM96GXp92Pqq4WS",
  "key9": "uc8GQwizQxiTweYBpW949Ng3z5drqFX4hfNmHgvaSque9wo172P6DfE7hFUNnVKv5YDYaoZAY4wZsbCKhNRpt9M",
  "key10": "5nyw6tpn56ANSuHMXN1bUuuv98nAByNNkREsu28MBdJ2KzNzcrnzNfJntkbWWhkmBdj1SaM6rxarEsFfMcDJHE8F",
  "key11": "5LuyXcP9ZwiLTuepJ8gT1hD492LquFMQjLMnvvxLDZTAyZgnmwQkizwcAmrZjsRikVxK16zq1vcYy4N6HUbZCrMj",
  "key12": "5Sk6B9HpV2rJfYeBNV3jnyScLexqGjGdNydMQvB49Cy4FuXqNYemhyERNfQc41XJ3SHrr2PXmDPgNkhtYQySLQQH",
  "key13": "44Hs2nJ8DZDMCCqe3zirDoa7ufAfNN1k7BdBF9z83SuawJtxWB9MmASchSdzjLxfjN33sS5EoNrFdrgPj3sriTQA",
  "key14": "57BJ1ptpkCa9vBrBzSChiJBTcLcmuDmei78y1HwgpiJ85puZhEaRGdQYcA7ZqtHKQPFh4tiFdpCkQeenKysr57G8",
  "key15": "YiuJv4GwzyHtumdMRFqRPqAbFGCuiwY2j3V1TmozXK4BLJ8UfQf12XStK649XEbSzmo2ee2XHTBNUmsQxJofd3A",
  "key16": "42saCeQF7VtgGbtgxeF1mXHYFPWczkQzmp6JtudQSVGsRc5RNHV6yRBNqkyTYHz5MHsUNNHYJ6rJu9jT6TZAU1eT",
  "key17": "9P6iQqbeimLXHeKg92sT4uNM1NPtDxJnsWhjen8kkDN1ZPUzA3zsFeFaaZymnaBE1nirUk1SPUEqJgSZE6XcXpr",
  "key18": "2H2agXKemmkFBe6ZvWSPJigahgN7v8kxBJRrG5UJ75cfFAD2jSATTXDSreJahsySAA1cVPKcSAB2mnps4Y5FqpFN",
  "key19": "5cozDaJuuT18RgSEkBmdwT9v4DfjjtGGMRqgyGPRrsRsoeemmNBce7C86yfViTFs5JSCQZMJcMZwrHNC1TZkG1VC",
  "key20": "jwxSJstUsQvdqVR6qDoTu3utgW9ySrjvJo3u64tVUZwoUz4Hwc9WdjJoyxna4yLsuZ3rrHGnQ6dMTZYBMx4Q6EU",
  "key21": "3h5XEHMkw72aLKRxSuU3uC4gXhLrMaCizG83en2zxi8afRtb3FWjAXx3UM5FGzEU1HYzRuQAd7Fs9evGh49xf9dA",
  "key22": "2WnjiA3g6wNxTaneMTJVo3VtAqbsgGR2oP8WC2BZTnncwxRovGPV9XjsTrcnHb3iyVrSYmmGiEQKp7cFgWiHE4S5",
  "key23": "2HxX216bBKo22esoQtYUGQt9a9NZUt8yGQ8SYLZjKnqXUsg9MSaTmLExTMQYxhb5YZ3dSsWjnW5zzMZis8n8Dh3p",
  "key24": "3zkUzkxm4fj1ry5VHm6pFtTdNhynospScTVANmMEBvvmWzXptZTUKXPwtNDbchfqZ7mtkKPAGweroi9eUzL2FxJK",
  "key25": "T414ix9rk9xsCSidDK47LEtF4o7DRc96C5qP4HPZzXnxrK13MiFe55p2DtHtRJeuaMSgZe15eadfM5SYjJsG9Ah",
  "key26": "5MyZLgknYRfSP5HuwE2Gc8VHHdHsPHUJSoXt57Smtefj6P5o5ceHGebreeycVWSZMG4v6SUy6ug4tnzazczief5n",
  "key27": "LqAnEoDS1mbryhwydgYKJ2z7dNumEDJRawQrZoQgWxCzCQBrkBdNcvEws1esZb7qCY14Rada11VR7nAVFTg9PvH",
  "key28": "3Yiuv7U4A2wAqkvgeKyny3JMEy9Us7wNdeWRBAZsH1tWu8EM1VjE2i8qQBXrsx3pcHEixueYFLJrVckdaUG3qjkZ",
  "key29": "4NcH2VA9tDymiHghM3yb2iXujD555FbwZd76rhWrxi7goFY9BnnRToeNo8pDTEzNce6MTaoZq2fwK7eMa39uYYRK",
  "key30": "5ZLJqT5cR1gT5XcFo3RomYogb2cVWLLtF6VwWRTwUd7sMDXczaa3hU6MR7VAVgtZDA35j7s3uSCHTB7rUEM58qY",
  "key31": "T4YYy5zb4BfaNQm8FamGieBYiRBy1dSkEHs8cDrFX9LpfCDKzq8fBREMB5KoFoKvmCHwkubKbnfPitv5uQpnKLq",
  "key32": "2BdWLNqmHVTgWNGZbisqwUwyYuGPFwKowydiJufKZKuEcMYnB7sDt7FPjjJznM6VqnszVtRMCpLA4VU9reLco2PW",
  "key33": "2nwEEgxBnWQDNDqeEXbCrT7dFC3MYRR3n9oKNbCj8X1jtxmscqUCLxihrmqANsXRgjTC7fnCvoseRb1VxSsQz3n9",
  "key34": "2W4akm2xnXgUqA1qAGakrtdrfe6rL4hrtb3jLZvukizFsxDSZLoPAYL6PXGQHq2i1TUVRLZfBUe7TujNUnZrhvhG"
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
