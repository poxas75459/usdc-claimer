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
    "ddpjdMKRmrnXHWQfc7BMLLaKUzoTK6xnUZRYJ24FxDhKcNjvopUqZcysnhjnxtKgKQb86ogCKyPFiYFnQnsaKed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qZBj7eeGvueqckccjxaM5wUACouq6c7q6oUsTfJqgiVFEYdXrAfjzLpM7qQDWNxWEEd5x1uBskNiAXUtvuEMCq1",
  "key1": "2DfmaU7ERgMzhnebEsHWwCvCL53UvqcQ35wpP7toRqLRyjgt1AF9tiSafBw1fqa6ctZ4zp844qL5FDuKetuzEyex",
  "key2": "3mjHKnCUeZg1oARZL1TbX2uKZUinvwAWfUVtUHXyiZguuZQEZi39NjxxdJtdHhrwuvAoPqndZHzGaezhNyoYQfoX",
  "key3": "4vZtJheLkxWnrDvFnksRz1LRiva9jHGiZWr73MTXGyBoZQBw9bBbaUChm3zbUNVjrKuSmrBVwZ68KSmiSJ7g785L",
  "key4": "5RENviS4UDnPXc66FtKb741TvhJo7RBjSsEADC2NsfWtaCBh5gyqY6WnKDe6YtRQuYqmeF1eKzCse7wX5giFyLsW",
  "key5": "4CMT4JNTzSaicya2ZrMFWFHHc8TULErAiSFxHznCZPnTd1n2xoGdcrtzbWobXX6RnRSHunC3sbZHFFJxLK4ZmxoG",
  "key6": "47hemrr4UsaN8FHTvB1SkV2LBVuaihwPHNfeJaxvQJ2yTiZebkGdsaoc6oUmg4bdEnJAvphmLdFSnUz27g84fsrm",
  "key7": "WKNGXAxFf7dUCqkbLoXUsoFfJmaCEQPaDN9yKKNyPc8bz2wweKcHeBj2VRxyENJAQTC6oBFRwYvMP7EN6hvuQ17",
  "key8": "23hpG1metajb41zP32QMR9icVBnnana9EAy4eLQhqDqTrdpJsa8NWq1ULo4z584vWVdVVbLuAty1MRKbYWATT5az",
  "key9": "YHQgShFtWc6wBHTK8ovg5GAEj62Da4MawyQc79vHr92mhF8Dpv8WP3jgeMPcsop9x4wQEDYVeXWmjBHqvghR6GT",
  "key10": "3jTavTrWMBCJpRDxJMBvjL2kREmYdaRQBgoEKEyvT1hDu6S1u5rtbhzMgPLNo7ZZJnQeVk714wcHYevZBsUM4xBH",
  "key11": "tTJBK2N8xtmJAGNawQRJZQg4rAcCCLNfaf1FzHZoJ5NEa3BshKys3RvcFw9y22fin91YDMpexnjPqoLzkzgczNk",
  "key12": "wMS5AuJe4fM7u5ccTWgCMgwrJjmKrJXijVcNaPdoEuBUqmv386rUMduLZstmrCY7GR89qSWAhUFqVsFtBqnUHCA",
  "key13": "NSH5VVwLMUoe4HCokFFok2ZeKMa4QxhAJUL3rjrkkAcBoKwbct5RKgsZVUnvMuHxqJ2P68NHn3M5X35VCcMfNzm",
  "key14": "47cW8ytn1cuC15bFsPBzzqabmVjFxtjxWbRiZmjTyQW3HhiPAywMkhyK87BLP8yz37rAHWFtjeajRw1Kfo653BJQ",
  "key15": "3U4ka39X8gU6Zm1ghu7aLqwZEX3vNyqhgn5uep387DyVaPDRBuha5TcMfgDH9BkpV1rR8v4AtvZczBUMN1SVmgnL",
  "key16": "27nRtiReTE2CFdptGDJUL16fnV6CZe93gCdq1Dgupkc9Z23qobkd5hVYZjUmeesdUNNh1phbr4MXnwbn9GhgLLn2",
  "key17": "2U7LhmQkhMtKQNhec9q1UHix4hr4PsbvxsnzAHfxjxFFdDm3Z3f5uN7cA6pKxtr386hPLoXcqVS6SD7updxtg9YA",
  "key18": "3MHd1rnJQGXDUN3Sf5xXoLDLYYmoPmUDMpSk53Rt6gxbC82qGcs99vymPPe9ttYthaTY5V9b4k6RpUoV31tq9PgQ",
  "key19": "Twnxz5qhMgVbscDNCt3SawLVdu2MU2pNcQgyz9FH8xD4av679ZjNbgMWgvh3jkCs9vjD3keUDfGzwGLzECSL2TF",
  "key20": "2ug4KfbZvMoGDPwhLmufMSZGwtaZ3Vd3JF2tq5TFBSgWWqiiDsRHBD2EzUb4eYo5uH6p7L1ejoxfBvEPULhm9wBM",
  "key21": "64FZrKboj9cabMbR5L9vnHvayHtDti7s6L33gSFVuhbDAPabuo7kcBesgZY4twyx2Bbqiw9aiPuwVWgwSGRKc6Vp",
  "key22": "5WgNqTj9xERn4NMhzc92j5EdnqU3gSdAB6e4NedWKGNNwcRsLtbohT3QYYxZXr92c7cBjKmDvXhBRv1WQWRc4Rxi",
  "key23": "3RXm4mod3PHzFEywbRbF51VbXxdupdzqZDzVW2HbnKEpa7j4djXh5WvchwLbJE7hmDMBPHQa6g9NDMZbeUFUkVX2",
  "key24": "2nrUyudrf73NgWQusRPQXJ1BAVzj8FZHAicp2bmpE7a9poqXxK8Mo5ZrgYfqEw7eQBaRvgV2NNFP8LKZNb77Lw2v",
  "key25": "59fPWSn2FCfsWPHpukM17JB3Ta9x6tnEJkFTvkYM6kzFCsobeKTFygbv67vKuRKH4rNUanr3XnYiLRbKqxmSasdJ",
  "key26": "zZRSdg3F2TyFrdBg12mFzabs34P97Tsd49dzncHfkbY98n7ZBzE3BAj9MwawCogq6LQQcMYEY77VBU39EuKcSx1",
  "key27": "5i3ThHyphcdZ2bB1AcKqazPAX5ZwK8LCmwmYRei2TGiFrMJjHVP8ZriSfrGT6j1LcUfQ5JS4Yee1PhKWbBiKEopH",
  "key28": "4aKmEHLWaThMrj1qNsCK1SqW2P9qoEM5YUtjuT9uVMUNyBEn6LrvaVcfanENdJEg1QbzTj8r94SSfXDfn9y2YH8G",
  "key29": "UQyRXBqsCfZU4z8sTFNwy933pr9aRT12wWdvGynyeji9BA935YudbzVSBxD6AudbYi8BFAuKxzDiMRfE8Qsuvrk",
  "key30": "m331PvoYXuTS4TKyGTwf6LGy3uZ8EFZ5BzhnQ51CH7nUPuQkNY4WYAuqE7fpAjrtxYHEBhu2ZgaF7dooGjou3Ke",
  "key31": "3fqKCXzsnbb3k95tS75petyVg94NkLUpf7raPWrxCYHnfa99xyt69z223AQJS7qGUHeCsUTzmr47eMKT7CL4eqeP",
  "key32": "UDWMFUtwLrR7hL8vKqQvrsBaxMPKanMGPAXCSGwCD2Tu1BT1MJ3SMNHjiszChQHxvuU9b3PbcxADj4BbgraBqyW",
  "key33": "4YP2oVStfnHo1mP7rP2x2anMgu9REgTPfRK1vpW3nEE1Zn276ykKyzPC6gFQK3KPcprMeY8P3gB7GChhiz7QeCU7",
  "key34": "3wJmMCHLAA4q9LmY3r81oGyDQ6FWY8zqpYTDT1piF3q58GAUS3ne6A1JVhGomV2qorX6QjvfoSXvroDmzXpJzPdv",
  "key35": "55pXG4sJKHR4BCL9TrEe9BvnGBuwsjtuYofoZ86j2LobKSkGKM2XEgBtaR58R52sSUJWWzuXa9wZRVz6tvRVtrt4",
  "key36": "4vEBuEffZxCsvNtzK1WE2UD6czZaiPHgAhwVoYz2rfewjgp5P37H2rr1LcUqKHeab7qS4U82MdoMdMtFXfCXnLLt"
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
