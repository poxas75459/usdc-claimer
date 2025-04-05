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
    "4r6KRmD9ouCTHtDmpNviM9raZnz6wuWssVDm8SBbQGJF8wMcPfdXteR24EEDP5no5pDHdLzToztHammSF3qpb4hq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EKiLxqXo2FZH4DRTDC27kFRoLyztMML8JHMy7yXGiYe1wK52pi5S6NQMZ27HF6eQvm3syuN1QdSwvkG3dVX2EjM",
  "key1": "pErpboX6yDqRCSyZrkeft1pG31VAWHVTXH9qZeMc8b9m7Twc8gZpTkn4Pp8NzSGpvU65SyZ4z6K8Ddr7b36tVJa",
  "key2": "2ofAmknzKhLG3X4TdEeGV1Jr1vyZkAbEkk16H9XLTYNkxvizuHqtexbYEsSwjS792kXRjkiMhF9whYj3uXxRCwKe",
  "key3": "3HswwTzHm3XqMQ6w4QWkyAv1uCQas24uM3LPYX5JAAdLjRdECjoeu54u1UNMsEq5bG8gCSdjQZWfUDgzC2BMFctW",
  "key4": "tuABo3PWdpi4VEbkaw88X7iVMMRX7PsTciBcdJRntpnvwZAmUjGh984Z6JCzQ7fVDWdCGzcUnC71XhiAHeeZypg",
  "key5": "5h2czbLtU6tSJkAzH7vB41eRWSK11R6BQRsT9Zi8Nvg99qaxmC4ZBaVPUro5vcd2rrqLS5nhA5QCgmuFiQvMgtGP",
  "key6": "4sSSv58VmNufGK5NroKN2tWqgYJFDn9YCyycQauPqjYaRvVQZqe1ZDiSWXHwghik8MX6nqu7FspUnnHnbdEeGUAw",
  "key7": "3J7vVZtm3BHZgnNSKbVKJMty1JFvBoMBrXt2rTjxgq7ZehzR8dMA53w5GuXsok3EcR1gvdtMxH75RbJQF2diBNBW",
  "key8": "3SgJC5z7QJ7uKpjUdT85H5vEpBgZxRzDuKEYX9jH74H99szF561ibKHLaY9PsqB9ZfShSvfHtCvpM1rA7VZn52RH",
  "key9": "2Wes8Gzzqrh9y2F4Zx1Xmfz1GKeDfgSAaSiSVFcjByUKG7U7WqMHzU68cKd1nP4JnJvo5LAXZL2jUkZcDcEoUDZM",
  "key10": "5cEsz38tFBoAnz5GbT2M5akG15bMTV9y3HApDXrhcSGELQtB6us9hHvU5viTMpvaVkeyimuiM3o43sA4e1f8M18k",
  "key11": "63gVMLDU5H2WVsVJXV49Q9u3zSpMzje43NA22hZGmvzdnJ6YHksf85p7hCcgT9r5p1pUrQWtEapEZK5djFdXxhGZ",
  "key12": "48MNZHuGC6QPVvhTUnBuq2EAKtJ3UkmiZoLtsKrocqespiccne569esFCQvv3Huyocfj6yz2ZhLXVKjAb6nS97n",
  "key13": "4XKEetX63fcUgFp4CbQPPHFwS8Ae5YvDhT6Amv1NJmqPfDmi2SBtsQmDAwPK3z3m9ke6YnnosWtBRoZierA2x5vB",
  "key14": "2NaZUp74wXPcqnrs6P5sMEfYJmB9Q1YuPCiGizDC93EnUgzfgkvYLQZYnGewUWsDxuFQ2vCfstz7VP3GXWMcSqgW",
  "key15": "3Bm5R6CpEvn2KVE9Guzs23RckpC3B5ETq2EnU1JoVZ8SzmarJNGH1vKDRmMDW6tiBCe6D6iAtdwCWmsTMvkrScwh",
  "key16": "5nEythpXFfMQhHPMAZCoCYbD14nTaFN2VNfvndcJ25Bu8L4es8ELjfPb4HDsL27W6AGrB2TDR9FoWfjhWJ8jWW8g",
  "key17": "2uNiLm3tm2f3WJRVvAS4DEvYUnxonGG6Gij8p5Fjp4Sn3ZuzoMYBRTsnaBUrCP98Y5GUDJ2kvB3w7SrtCyXfZG8u",
  "key18": "5XmbLekyUqfzkX6txNxncUJiqGijviq8inYeafpU3JnuRRNTktQitJ5MQ19QKV5nduL4CyetaeqckLJTaJbRAnXu",
  "key19": "49J3DFxZp9FKjyq6jXC9RbWuBqYQVw9gHZLiP8JPR2WgZKbb782tA2iQwy89YduonC1HC9srAQmcdaqt8Kfo6gfk",
  "key20": "dkKmHFxq2Z4veSp5segRD9sWoW7fM4YTs8JHaKt4VNCRRqnLwrzqb7PdxNdTpqe8D2fDx6X1A2DKmve4uv9kd2A",
  "key21": "5TVjCb5jizq3o7LCjzJk9KkHry41LoJBHoPTKqkWoitC9UCMfMW6twTspm6x7L6Rn458zhiNW6JK9GDz7iw357Cy",
  "key22": "4beV4Mu5XrxpdJxBcDHnU1fp4WeufV9KfYHo4DCgHQ5zeFVx9pThSkb8z2duW8VfbuhVZGxVMajpG3m1LfKBkFeJ",
  "key23": "2B8ACPsAxm3wJksx1YxxyZz2sn3qVj47CygRaLsdiQ26WUx1qTHsGP4detHPNt2TYefQLwWifLHN4VuJwwoLxX5C",
  "key24": "2sJ6ZniHkyamFg5j9WozgkfmrN1emzRazspY7erzDPg9pUUcwv99aZnhcz6eQvBzuunWUn8E6BdJyuAstJcrxE2m",
  "key25": "2JS4UvVBs6qjs8JCsGwp273h9fp2gGyb76dgf9pz4wGYU56a7ZfqUwW8JA6TgMdRU83psg6XvVQkpjtUU8F9LGFL",
  "key26": "2hrS8uRYiq4pMLc5zYzucS4s6snWCUPxcWw9cEKyFdozZNex7j61WTUBQ6PkqbA1ULtG8YAX3mR9b1bkHEr7Yniu",
  "key27": "4m1VVZwP6MEn7n193ibiWVNjmMRZhUJTYQv2kaYfeYRMjPkCP8DwhvRDa865RyTuos7gPXcherNmAeedNEWTpZ6x",
  "key28": "WjJTencWHLnYMYeNjtR9HYM387fcywscMbabxwxB4HyKkHthEU8Q2hirwzmRb4jAnudc4HLsQCDiy66c6hZsGk8",
  "key29": "2FTQZKb2ebdxrgMcWqHYSHoQRHnLkgn6YBsfrjEUufUyo2X3VbCL3eqHYsFk8hzJ46NykM7JYDVcrC1SwSV8Bes9",
  "key30": "4UpZ7JZnJmdP3gQbZurjgy9MLH3LZA5XHzARinZNVbm3zncseTs6USGNywjX5GkjBu54fB16SrpkMXQJu2Vc5aJM",
  "key31": "e49t7m7YyikJ6T9Hvu3jqssa9EV1h8GvxpoYiiZEdKMk7NmGhvrpaUNCoUozGFyu9qGwYSrWKHEULH7a2pmHpKj",
  "key32": "59JrhuTEZJaZfB5UCoSnZDX9Jg2DMbhRrnFdG4Jh3n3TVnWCttBy1YNTo4heghMTUotJkoc2Sd3mMmfGhkRU1TCd"
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
