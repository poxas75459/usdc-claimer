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
    "3DBTUJZ89ocZ2He18D7soyB4V8P2q6FDMiZmq9HAvVqGRhCXgY6e2ZDTnCySbwFaKy2Eitrw8TJHXmSXtCy4KebQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CQxZS5juqMfvEEhp7dEoNQdPowG1J13rJoxbfsyd9uvCpntWGwZtu6LgjDFhTe5vSMrtdqUf5P9VhUAHrshjyWU",
  "key1": "5xmmgqM2U8NhkNbpxRhBLTRxuX3TpJjZE89JtNoLrq8hnnQmtXHWPa7jySh8NZ5aX6BAgGA2oJB2MDa5Y3dCbjDV",
  "key2": "38XE8oikvog9xaNjB97rSA5ds7ZMYGi5AypBwxoVqys4CmrggpDS6bv7bdGsFNoPhGTkCUi9hXsv4DGsJtFAGdBW",
  "key3": "3SCQeh8eM8ioo8gmp8FpgKLAfHJ1Roaf8LNzCgkLEmNFL9Zd1YGPCVydDWD4hBbSMLX3gdpQHhKNBd5B3AWyzY5N",
  "key4": "2SytxVe6QzX2r2C63rXGdC1LkViADyyF9hFnVQmtz2uiJxWDJzVULmLTsMYRKtSK6J9K5KTvogyxeKLgrY4pPDju",
  "key5": "3GynLHLHFcg7hwt1DKCSxikegoF5cpaa1kCP83H7LnpsrQTdPAGBaxk5yMWUqxTBqGrLoUEMmtuBBrBFVFpjydbm",
  "key6": "5Xh2QdgFsZai5Ly6FpfggRDLoYXL78ZYEWsxKC8MBHFAMgqFSjcunTT4N1rxfdmuEaQrv1gyEaFazkoMNH9AYqZz",
  "key7": "3drkvj3ZaWzvWpzG4nF1UAe35dM2KbvAtK3E5Xg19A86FHggEsCZh584mBn9XYZe5Mw3NaLuydsrM3pxrkWikMEP",
  "key8": "4QBJkyD6aKhgqCbMW9fbjNqaw1wM1kzQwFf2qHzdJSyJHzVnmFUaxSnWnosY9BzGySPQbJ4fqagoCxs3aviXJYBS",
  "key9": "crWBpbGFqxzKp5RcBsin4UH9Fc736MmusApeohSkSPAeKXz6eyUVZFyJ1zRx4JQKgM7vws1bukeJYiFGy6jXb4f",
  "key10": "3GAf1s5pxYwyWf63ohvo892gMGY6rtsZ7qJmqXGPmWdBZoimCvuNgaDdQNd9stBUk3NW3TJGP9A9zK65kzQ8NZRW",
  "key11": "5cBDo1vYZNcZKh8X4AM4BwQaH7wvKTRmWVhS7Mpr9QYBUTJ1oug3n8zHLk6mRVn6MmQy6d45EAtAXvBByaJnEHJW",
  "key12": "3RDxNyhwJzyhvmTrLbTRoPTd19azbasTgwQcAwvFAw7REsdNug3TAGc3ZB4tgSbGok71Va5hzTTKtr553QhDSA7Q",
  "key13": "5eRoXSzCJAm3WDY7MoL6UwEomuGxytegHztr8BZUMcDid6Xggvbt6UqFrQSD8hUEv8zsGzxBNH7i55BCVf88WnZ1",
  "key14": "T1KaPBmnhr6cKDGyHCa5T9PqwazHwMzA3A2rajv6N1kmgPyvEdTCP43RUAX1jEYHpF3iVqvUFwNgEZFZtaMdEA5",
  "key15": "22wHN6jmjythTynAWAHZzKnhCLXi9ARB8LAHvxfSZpg3KATVE25Zq8EzQ6jbgukYGAVV2R6padD2CLUu5qwbMPYz",
  "key16": "264BpXH1viiFZH9QXhrRhvUvVXQ47n7irU6r3yQ1HmbUdaVaVrhVtk17EUY3unnnu8VWzoxL8FA6X71Vqcfgm6KS",
  "key17": "3wSptRx8U2YgQMLaxkxXn3smRMZd7vP6jXNNpP7s73yvLTqXMcVYJbd5UVVhjNLr9mvKjLecH7KEazse5wzheX94",
  "key18": "2Fc8iMrizrcq7PbLQ5rmLynQQsoiCFf4XyoEfQGSoEZMmzoMSz4M6dh92SdmBCaDLQY8P2vL4PpeTh6gKB3D61j6",
  "key19": "2P4Fo4DnG513fWXNStTKinSNGEtPrmyyBVv8emkY2MzqpCo8o4n55RasU8eCW1PiSXfFQ7xw6fHGdRHos6ZULQiU",
  "key20": "vpTkf8tf5kzLsGnM3tHsc88ShxhNSd5uiogLpjjQsDYgVrDmdc3QEFJBTi5t6oxcHAMZwbsC4mX38tBHbk7cBVS",
  "key21": "BxQxLjfDHZXTQbVfGSckmkKddzAPUAazoG2NQSCbT9j2ZWDhMfTfhv7h86kE43BTEBwVt5Wf3a88aMvK4WUNuaf",
  "key22": "orsabZAT8eoMeb9iFzkyGz6ZWM3EW6fjT63wknLC3N4G3XupHhQvtSH7EaDDg5dczMKKQ1Dpp61QDkQYbYyrNuo",
  "key23": "59GULSHDDKqNEdU7GGV8VEMbNm7isQTFFG7B7LMeVm558MBZTux9YhdM5pZaQZdJqHvgqGMWZHGfcv1JDFCM7Xfx",
  "key24": "46HibpfAjbs47o9VSj6qX5Na6hKdT11hkc1CbmqbNnUwYiteXdA7tzWiya7MFBjx1Z7P2PpEpFkbHoEPWZoV6Ws7",
  "key25": "2NzDKtysNnGB4eEoha2LjMGSMHmABkVfRSusQQrv4DH2LZYsy6eRTrVz5KkDAbrgWi1RvHqRQMNtspdAiHasgrzm",
  "key26": "5P7xxWhYm2qDAHsNvV5GHnPjtVzhTMQm1KPAxtyTsRaNiJTAtJqZoL7QY898yDVPP8vHZLQ93654bWthc6t1CqDH",
  "key27": "5xFFZnEo2CyUPjJoC7SdoeyRmDoXQkWYBf9PeoPSYYeb5FibLYpJXJWBFKeUBQNgbVq2vCcLxftzHX3d63V2zaN1",
  "key28": "29BLHyUxCNeguRGekvqqBJpDEXEgqkTPbmdcSqFguAJKDmbnZvVTnEhbD1MaD25txBMWBX3wHws2oghBJ774YnSt",
  "key29": "2BpXKFLWCVnJj1eo6srYhggcfJRSWzQcDnei4eQMYVuW2xsK6BXygR3Tgz5AJ6T7nkS7M1cRF7K1fxARYacPUHMi",
  "key30": "56RoEzA19wQ15fbrbfrvmVibQmVd2rZFRYwyPXTGgeoBwy8DERkLLVamM612NaPXVjEHHmF7u25sEUu2y2Gssfdo",
  "key31": "434dtW2ScgAdQmrMEiie86L54hfxd5oKf9DZtYGnq2vt7ntb6gvmyh9dxqxjs7RjZouL9MNzTxBjfyGpMtq5nmFf",
  "key32": "4ujq9Ce7XXwbXBKh5EfMiyRWhQDyhj7BEproosh6AiL6yXXSFiNjyAAQkUua4T2vxi3zGbMAc2Tb2ttAnAwnLp63",
  "key33": "3g4DS1Bs5kkaLzYB1imXknsE5YknsV4A5zpDcBmm5FoRVXifkaBErHRxi53RfBiyxMB1kShvNmG9TxqMrXLnK4qi",
  "key34": "4sP4ThUGLaevHJvZ31NMVcTjDzeLJzjfYnpot4FMmSQKWznDQi4AjZkMQ56Av6gN5qy4WrFTEKASx76BVcbkqyxS",
  "key35": "eNW9wfAophAQinvzQaKnLc9b5qDcPR1vW7KCpMo64kMk8RqXDy4rznJcd3MdWe1vGCEKG5XCX3w6APTP2SVkTZ8",
  "key36": "3yuCSSBkRezg8LHWsjGsRnxLAgX7V91vyh3iudG67Vpe2yMzPiAWKZ4vrtbQ573SVuB9ixk7pUtdzYvBaovzF3h6",
  "key37": "ptUeCMB6mkj9mSjSSa5jNv7xwoT86gur1CVydxow5JZ7fhqvFF92XSfJGALyMYhXpHzGXCXBAnLdKPJNBZud2a9",
  "key38": "XQuLydVydypSysWHwdh4Q74P12tpfkNXt1eequZyJD3YxtQ3iVga34iLUwjgvoBDX98Ziwi6FJh8hDNu6Qu4W9Y",
  "key39": "q1sGzWRG4B6GKeBMAEmbbp6k12YsndDBgN7PLnd6ujDLXn2dGwQjWYbNzjSoWN2E8fiAmH2MCX1CTGFxYfJwyHm",
  "key40": "21jUCQRStmha6B2NqtLbd8r91zbfbkLKvHtpMMSDvXvBZT4jETRvzxRA5HjHNCt3DDvfgoBAVqWWVKotw8QJ4s2f"
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
