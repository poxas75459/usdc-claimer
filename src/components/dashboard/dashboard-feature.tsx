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
    "3CByVDSD4mnsZQ5rwbcMULppjpAaCTCaogpm9BFicQ5CvzeA8TymCeviX4SebiS1ShQLW8yQ8S3RBVDZoRDnXnhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jgoQbL9eoHkCACnxWjQwVmDbE85XzHEauMXhNntyzziRYEqvjTnNjqrDAqQQaNFF3JvA99hhuuoYhHW4pd4qFHk",
  "key1": "5ZXsWifDBkukLzcNS34eUKB5FTWkc7A9KwsVbFJKWDjcvUi6eAfMTshmojowuCdmGPxyHCLJF1eY6ur1w6utHx9Q",
  "key2": "FFvc8NQzMb7yJ9x7HmfLWbUUW8Uo4uYQzV92N68k9f4H2yqZsbgoMziiN1sxUdhf1ifPmvWJ9XNQuB9z23wWrfe",
  "key3": "2ioKWKWEQzEe2NBYRt58eBWc66fuKT6igGEdLLwiMcJxugEe4ZGYRkxE7hQDTeSz8zfesiHALNwX2QNt3vvRkWZS",
  "key4": "5Mwge2GBRaJZPQBaw7wHX4hFufRnwiP6a8P6cm6x4x2xgj558mymM7UDaEqbLyt8h9xZEqp1B8Sibh767TBN2hWG",
  "key5": "2p7oemPbm7oPhKUqxCWrdcUcvtxhy67Lq74fJFK4ThGQ58AWNjkFEDrpHhwgvE8z6khgwUwedyi4fdtdxEPKde2N",
  "key6": "3rywdjvYfCu1dRkbSndajUCVo6yELkJCisaoeJqVxCo7Gnjvx4Z1JMbx2W3QX382B4L4GhHtFK8Ah6y8S9LNeHVy",
  "key7": "NzmGBWJJQabqadaHTzWkXrExVt9JDV2csVEUhD3PgHxwsCJybEBMUVKZkWdpJKpKTqK6WTkuLEEhoMs5dQXLaqC",
  "key8": "qpDA7fsytRirv3qt6AM5UH4pUF1hg656EvbQZZGjqMVHxPGud2REy9tPQMj9FJhWfXZn2zMVZ6wYevsLLTaus2Z",
  "key9": "4R8sTk1DATr67aDU5Tj95ZeNpp7TaauQFQxHSU5qcFYsNtrZZ4oGLSuST3kyZ8xhiqLZBCdmijaFwt2ZprPgGq6S",
  "key10": "M3PuFNt23uS4udwEBJgm6sm74LarvAj5UH8USqbMrzUpQphCyvuG95ye5LSQ9FGE5JBiAPcqHTSqP4scNAw5sgf",
  "key11": "2WR2MJty3vdQncuCNVjHwDhDeH9edTyXHNN4dXN3zVDuj8trYGv4zhJC3U1p4Wn3ekpqzM6L45TQfJP6ZkQHSFz1",
  "key12": "3hSPHKBpSjHD1Zy7hVjUSzRm5sYDTtrEkC5CLcDattaPtAqZ1R68peqfskPymaY5qcCh8dtFyrzLRJ18tjukcNFe",
  "key13": "4CJUfZJ6hzjTx5a5TsNLMDViN4L1ZpFU7uzUVuQeUu1zGxTCPYoySzShZevPSkxMzqh2RxPwuL5pKswdcvT1mBFX",
  "key14": "5Z631K1BuMxAAMKChbkD3hySAD69xWhELPCe2G8CHEMaMiQz8NpacvxorMbN71vGehNp6WocNQZL1fAuNdBen8BS",
  "key15": "5g9CPrQxY265EypH2Q2LhC41SMwzpBxbE3LxnwsQQ4CWMRynjwtVNEuUMNzQHKkRTqVDrbU1defhRT5rA3hAiL5A",
  "key16": "4cghn8k7Jq8WKo2SzmUQKNL8Z24UhmroabLbEvdFoBLfBKA6YQYbF9xh5UnU3vPGuugbcnAJz2zu4B25pfHtSiwK",
  "key17": "o8v1MhASJexN7ntRDREWhyeaLMQkx6HwzXvPebcMA2xVyhZGFUTZsPdLg2CoQnvDLd6YcWM5Dp8Cx1xU4t7H9AG",
  "key18": "RjSCeuVeptukUBKdzSPfStiUS3GtQforw4t54BKUzYyMFdAHzTPZ88eUkG9aPUATzWfAyjH1PgvZ1mEejTvR7bu",
  "key19": "kjFA6iyhPn5M4HwdEorys9Pn8RPYeYUDjM2mgk6zyNqBMSyowWrr66Qqz2agFZLGN4Bm8KSnQwNAiNwypkodweK",
  "key20": "5vRpWMWh86dejWHGRVqj8JRwUYMDQGXDqv7yiTRh6PnrYZNKhN8jBnW9vv3t7JitMVrXFsfjnizLfr9TSiZkUfNB",
  "key21": "3MmWn7HUBYVfCKaNkudEtKQmVanr151tAHdbGC4poCPJMSpryHbocNYraNSoJkQ2sxUUzHDH5gbivyH6HbJVWf59",
  "key22": "4D2b6icWJpZwSiosaKVLMh6LrHyVpsBR5ACmtvPXRJUA3LGVcSCcwTmNMQSW3EVbTfhYfd61kEpofYyBj8qZVB6i",
  "key23": "2Q2HucumMqWYstuTPuFm1Yu7K63FrqBsiGFZKheUZyNH1DvsA1G3czjmDvhNpgRzDWE5LqeBtfGTfURgLcjZjXtp",
  "key24": "4LT4TSb1T5KnSQXPise9sFL4RACDBggLFRYD7iuUbTzCcwb8LYg7CUcdHzHb9hu6dDUayCTTPVWDGHutx4ggGZGd",
  "key25": "2Juutk6vhRg6JPtrPv3GGQqE3k6SPeNPhtFBQQCmdUzRDNJK54R5hhjstqxpZ7iYn5XRmMrfFBtrAgVcGWQkbcRy",
  "key26": "5JnJK6Ktg3p6Sx3j5f8pWg173vg9Ec1NB5Hst2xPH6DxJY5NA9Bjg5zjTAv5SrqLu8QXYh9XrjdKGpsKzykEcAme",
  "key27": "3dF4RELaz5e3cwmYeCavYrRHySS4LLg55fTvr3sWHJHYpSVxKimPQAMpNSyXfBsSBS3zMJAQZFgy9Xwva6UQ2ZZ7",
  "key28": "VR5ujgX98KGUVzP2C9HKcRbH7BJ95E2tHvGjcgUKMmw7ZNR1zKJEVWfAmzWC2iWT3BbWU6uSfM3SNhRZfDbLKE7",
  "key29": "4EPv7ErNAga4CDsChTZpWbXKfUQB5pK63Y98uf3Np6eBSHqyeVvWeT8k1WqFkVRpfyXA2C686i5oyuqTUuwGrxD1",
  "key30": "4Fp3Dcbpde43LHaRJQxbimNY1JZryqFwcW5oispawvieFXy2uDvNnV2f1NWVyt73FniC163S8sFvL64LsixpTorA",
  "key31": "5GJu5gQWm1TEFvu1vGBN3Jc4AzuXj6dSTZcYpyf3FZR2HhoLv5VkFktUdcrwmJyUo3UUVzXDqV4s24wRYHiGWdx9",
  "key32": "4tKF2BtZnmhcb7mrvgWeL5kfpSqFjWCdf5UtTi1jYxgqsxx3ZF1BwXqUCsqgop1Xzj3MLdUrFW9T9JBPs3KDXJtM",
  "key33": "SYerWEgC8pUawvrUJTtFXEi4cC9CmAYEhAsPExm7AsY1dJkJCh9zuxnVtRxEwpLXaTmckVcBSBVNwR2LHNfibmh",
  "key34": "WmeweDCK6nymCN5aVp93JkKfzH9Ykr5iUDJ4Sug6cs8TzLH7999rE77e8C1bpvhXaerNzJJ4rSQhcs9ePGP2Lwk",
  "key35": "2v4XyXvNruJf28aZJryNSiPsJs8GFoHyEDDrALYTT3jnssvTW6jwpthYuRrQKeejv58syYcT9pyvLzs3rWaz7Kyr",
  "key36": "2FFLAnok28LUNC5GCUWLh3BUD8PiwuSdeVEbxdSe7Ywfbcb4NFPKYLcucTnDh94vBARn3gZe1aH8RBVwiBnFJu92",
  "key37": "59N5YzWAW4Pomk2QeoXZUuBEuQHr9sWrZV2gh9tVHMCKRX8r3ULEJbteoJf3VZYC5gsTubn64S3f1md2kjxHijaJ",
  "key38": "5ii56an725jih935ifvLUErmLC3pTKuKXYtnVB4CUu3qNge1GZNnwCPQLNfhjkA36defWDe552o1gGEbpyKqYTT3",
  "key39": "4sYSx2dbn5QwFDSzuDzhPBUeWh3N82XK4Dk5NXwSffikz2LgH2yfiXakBXagnDY3A13fTNzVMdDd45UwfjgsWMnZ",
  "key40": "2ScnoKu7YPyD19ALBxBZGwWuTiJFfo4dNwzVpk9vEiMoNZBpqRfk7BsrDBTJUUppaKoxcKnFdaStniv7nrnq3Kev",
  "key41": "4TEDDa4yowWXGHkuHbx7PADzSAA4scbdeW1WWTTqwJGyZbpqLVFAZ2dU2eG23oUGpRGLqRipPEp6MTa9f8LJvtF3",
  "key42": "h5pzrYbtpKzc9qFKVGuzKUFweTCvx2NAtnLWCPBvCjLoapwFmRqPBHZYhzjZLHYmLkCvVLetLdpfvYNC9DTMBMe",
  "key43": "DfzygCYmJpnFGPoaB4ES9WbkoAzfwWNqbRxysP9taddP9KEk7UJA6wCEv8Rqd449TLkZoAbEWgpuX1s41LFAKys",
  "key44": "2P4iEV1fcPVMykdp95J8wpzEuPpu8Mq81JtpCmA6QdpyPJWg8VTXgokrw2WSXFJgWt2sk6qNWKsjgdf2hitk2y6y",
  "key45": "28PcUq4JaPcXUxQ6y4DsVmeNMUh8eRwUHLtyp6pkx2oSQ5VN6Yk46MLYssVTLGj6daNGJU7SCWSsXXaDrvCjmRSb",
  "key46": "42CsL7Rtymm6Q6RyWA6zLKDpDWh5n4nfbLsfuHsoH6GtHpv3xsuyL5XdqRtefxNf8DinrTp6rFCSDQVanQ6fPZbb"
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
