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
    "5vHcyDALGAbY1mz9HTBaG6qmbFFz2r4YqbRMYbaf3TjwzZqdDL2xXMTmeMUHiaSvjdaGR1auNVwHsx8XpNcLskzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JmhvGPY5aux4DBqugUMjgPYmaThwPu8yYRASzBMQBgpPyid6YCdPhpv2xfdhhiFJs2a9CNW8NounFwXJpc56Pts",
  "key1": "5e8nPqJCLX5jEdfMDHdT9nGRV2wojBUP7ydPXGmjiWnLoqJab9M33qDKEwFD85mgDBwK66FixUNNmV9efJD3yXEU",
  "key2": "4qp2pTeybFtzQRKUejPbxWdbuaqYBLa5fEM6xmAKRPWYjspNTAYTmjJSk4Sb9rxEynVUgBcNsUZuW3kMSzeR1YUp",
  "key3": "E8aTkvKN7vYXJRE78ibP5EerPfAhL8CtPSJE4Bz2BKUUwJ6nFMDYvCYyv1qoKUtpDBKeT3516iZ8zMCfykj6YUf",
  "key4": "4aJECJdEJZrRYDL1WGSNQCaVYw8ssTKbscvjuaeBq3YtST3TuADfhwTbLCoQr343quf8uuEnGoUEQZSsS55rbuWr",
  "key5": "5tJXhYzXPGNHN313AwN7eG4hfJ5UFMh3Nfzj1gHhdERNpMVtTex3NRbVbm48tV2EgW3neTpPv7Fv53sqamKunJXh",
  "key6": "KG2RD5nLkCjQvs2M71dQ7hqPU8doqjxbj2kQGPq8yK3VsZnV2BYR28BzwRhbAARbepaA5XHNQQNqxhhoA4Vsxmp",
  "key7": "4QFU3DGkwe1DD3nK99ei11wvEpZ7RgPmdvepsGuNi3qudsLDUU3CAuwsyGjxwa57pQTgxQnZLkWDaU7w3Hvq9WvQ",
  "key8": "3nMqpcwWnEBAX69VVsPjph2hchs4G1JJ9Uv3AR47Chvbt3EJooJXNnZUFHgQqSd6ckKTDnAm6L6MWUQ591KhmDMx",
  "key9": "4YKP815dYc6pckk9ugLXmtVsnvpSbxfwVq7HtMDRBTCjZA8bmYgr4eG5P5TTtLKBoHvJyFM3jNA8B79P6g59Bxcn",
  "key10": "599dUDQ1Qe5c6zkzcUoDDmQAADLEew3Z3aTPBBcomQq42LrqEsFukE9Ct3ADAKDCc3esHwdjWunpnNLMTWdJKdbS",
  "key11": "3hVQeL22XCTySuoofqNknrZHZ9fqaPcEX8HzV5yXVEduAUh6w592RqTqd8zwF4wnW145sek2WCKn5XTwmdD6iHA7",
  "key12": "4tjZ2gtorNLCMYXjPPpZEo9C3aeE82DYwFeKKRNNQeKND6KUetVmXKeghbsgk14tejCWSWk22yU5Qxd6svsH5zKW",
  "key13": "3X61QHJjPoeKF27YBRitdc7aigKDMfR1v3TGTYbet6s75HszZzh1FXHSNRgmQFWD2dc5oQPV37kyoKYuixq6w2EZ",
  "key14": "4xZws6pF7myJNBQhvJfnijK82fD3te79AMtZnNfFEV1MHiYG4iz3DG3kyU8vmxvHsdu8p6qTFoARGX3ZsYiwYrBJ",
  "key15": "ptE6ANkL8qVBFdNcsdsoHCTs9GuD4a2BCNUZeeWRwpo8qNKnKry6wG4dPYfVuGXjqhv9XMidtMUFBwSLKDgmS1t",
  "key16": "2DFGwxcxco7Ar2iAXh6j5Di2tWA3LtmV46dLaJM6QrDY177zkcjoUQsJJdN7LWLvkq3tUgp82FsP6MUZvf5sg7de",
  "key17": "2mSQR5Cng1K4m3e7yfXU4dYb4jA4QiRZ3UwrXJfd3kuj81TVEuqPEU1HVqHHuAp7H5t12a985SkBpEC3nWw727T3",
  "key18": "kVUbvKaQPebPKbbfHo2ZCgvmcQVvbARzSogD58u49izDETag8jvFMcNQUKAAnimwQnfCPrAvZp8B8QvjWJn6Yfd",
  "key19": "5Rzth6gJp6oTaQMmyfAv62Wnx4KVyjZeDco4rykgALUAGdRokAsj21AhMfhg2DC4KfnCfUAxKpNc9W4rjZhyZXRc",
  "key20": "3tP5bip2k6MBDHPfzFwWpZszVhPc1cAxoyffmgeM4zzA7UoufWvBhbZKJCPgoVNDTHuMGrc9pn6PHcXh5jNRU2E4",
  "key21": "W7CDEvyWznMo5wucngnG2pYLuhKyLBRuYuFsBiyf2tA9QZGxJGSvnmEJQhvY3vQgBDV5BprbCcmWehggUYDL6rp",
  "key22": "4XWbjHiaYhCZbEAL5Dkona5kF1rFrFwCfcsSoWZCxgdMsXAG23AYvvUdibbz4NbpXa9nD7w5r2BWoKRxQM2XD98H",
  "key23": "5smZd9ZeTv5JuXurVQ8w6Mea6kiNNwqvxbYU8T7mR3mXPAUkK3N1iAGfhSAvn4DMwgeVH7gqenMgfG8a3FHMSh55",
  "key24": "5NwYF7NajZrqqiPSCX3hQmLh4X3fba68hwtX9qQGCHKNiqsi2dfLxGAnns8THnFkbi12gnkey5s5G33Kgkm8uGH8",
  "key25": "jJsqFga8pjGZC7NhhAqSwTyrDD6wMTfqL9gN4Y6P9DwJ5YdBNHSnHYVTCUfZpF46vGPckf6b5DfXRCAH8amEMYw",
  "key26": "3jxJkpBQTEqSssWULDfi9hyizuKn9Dm6osNhyBxTfK7TU41pMs7WT12wohmw3RXeqr12LtBHs5ARgPaWopSdyJy6",
  "key27": "2rrm1Ntz2aDzkqJKhkL3ruuwfJ3co3TGP4XWN1E6B5xG9DUCZp64hHe5t95yvjYbvpQNcLyrdTamh1cQVBDoCnuc",
  "key28": "3zt9qLR8eF2JdwpBtBN4xSx9AV12PB6Db6to7vc3xbvRVwd3ocHqhK4CtuRtpADFcLgMAtzbeE7ivk21pfRfvQX",
  "key29": "4bthmbRe3c9FwUDpardrsKRVqcn5L2Mui3e9Yrwup2hQpauZASNegcuPPfsiu5E3rtAdL33ZWaim9Ng5LVtzBQyg",
  "key30": "4RtHie7c6ofLsGZMrPacuYM2D6kdk52qAYrtUKwQvu6yQpDbisrifY9UUQX6SJdZdDXsXNovN1jRSvJdzd4YL1GW",
  "key31": "5jo33JBrVXDuvmpHtuFsa4mCL1BdLXSzE65rWCnk2qLCUL6ArqtkKix4FA4sVvt1MSTfrt8F9avTYSLVGenGzUex",
  "key32": "2TZx1M3bVsrQxXnhDHdUr6ijhuJZ2CPkV6o1jxjQPaXmpJjjvhRRCrTbKVhGRMefZf3QzqwYLfLUAicAXp9G9U7Q",
  "key33": "5TirUhxMXUSdGBhDsmnnf751LE5uN2ba4YZX2Q12aUtqJvdYLEFrpuAGwi9EajQRzrmHHTvgk6ZcUzNoRDnuqiUz"
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
