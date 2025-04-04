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
    "5czdJTrd3SKfKr666F3p7wrwQoaib1nMUKzf4j3kXKKqLUKEpGvbh7DZkL7imM9KYuEGupPEzvdSmaUVadcnALzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h7j66Ms2i61prUcWQucAKWEgC1LawzsyT2sQgfNug9pa7wZCodL6w7KxUA8sdzMayRHi7NMx5J6q3onTsqdRC6C",
  "key1": "B62DeE3ZtA8PaiNNsXvPwXiQPNscodDg8KCfGDppX64A5yCtGuZowHuN5TCx1ckyRQ4H8zeWT7uYetWaHJgHYVQ",
  "key2": "rZvhFxYQVqRHThA6NiZegJBb9htaep3HGaFoA4gpvVRjpiT7fsDYEBeWMjjLEkyczNByBMmBVXp7GvvwCzNErCR",
  "key3": "XHqvuELYpmrSwns3KBV777K4xnRbeNwF2k5hLQhsmSXNWy5WVtypjpZ8tS95fjGDdJApkKbjDRFDU8c3qxvABwe",
  "key4": "2ebRNJpXDvdueph5GXhJnnyDoMqRxEWps878bX4npKhSgzhaCZMNvrS4prnjCqp2Xs6DZFxzNSVEzVaRw2An896L",
  "key5": "8odj9xTVxZjZWaDRZM7RDf5p4RzvQ4J9uQt4fayZpAcFyfWQfqDqVp7h8PaUTD5CCZG8R6x8j1G42fmSLVAzUFk",
  "key6": "JKKojtNCjQfa177zqxCrbaqyLUeZVkYLuF4hH6XkfuseyE1RCfQgvhBH737rTBrzmtfQ94aVyJcykkcsGULgxav",
  "key7": "JuuoG7GSF9SYyAmYcdLG6YkcdRttZEG5Nz7xTiJN5HAvoN9ZxzFYNe8Fii3t3GPJz7CQsv3TPZtrq47A5oMRATR",
  "key8": "5qAWEFuBwhqkCLabyMywL2QQyKAD8pumWj5VNUvmwR3MvZ5zcYA3nj8acdLjCHvxJsz2TNanKCjUAgiTmm7DQ1Td",
  "key9": "4v2XjmYuDjK4jQg3UXwXWAJBptdLGYuGpYevcvDULrAqRPKDWh6h4z3ZGgj7o4C2VmvtNXBkoh3ETrmrABNPURSf",
  "key10": "vJEhBvohvjrWhXnRPkDczga95h62YF333J4rpabuyHr55557Fi4hdQfoEtepGEzgWwkhc7wekNmUpfaMtzYTnS9",
  "key11": "z1EpQE1SGLmy8G8ewRVBqrau71VMdJjLkjvZXykBeh5hCsU37utzS4bLbuz5wyB8tP82ZDJoB4aPNLJCFCTZ82G",
  "key12": "261BTegWZ5ZwXKELmWWvdDM3vUdabi5Foinv92ZMf9qta5d5E17yCMjaC6PbxnNDegxdJ2GrhxoofZbhrCVZievN",
  "key13": "5vwH9JqXbXndNzUHRk39xyaAWQLfdCNP8qvhHpL4MBkHshty4znLsgPDAMj5gb6DG42FEUcVrShP33ddNQF4cudB",
  "key14": "4TX1amrrBspsEgbrsWaFWXCXCSUrBBn9Lg6G47y7eSKMRbzNAQgbBGhdAeacD1udDigB8jCTz86MRjkumPkxoJsc",
  "key15": "4feJ9h1yaztvBFonWywny3cd4Lj8dzDoXWtGhLJT3WadmW1tfuFHKd1BSsqvyxJEVNFTPLT3LBfQogj6AC838vGt",
  "key16": "2DMbPnU66TyGGyec1BEGADq8Xqm9eBNWQABYPtpEMXiKdrTRo7PXvu3n1nMLahejHKNhLGQS79ipBkDbVobEo6kY",
  "key17": "fFiAFu2RJdEkA14qwasjsMhg2DrhJWLophbQsjkPnVnXQQrWpFDGDLvF4jHBdBtBjdPMmA6By3vGgogp1ZKBDgE",
  "key18": "5k7qkFmLccK3Ygc7e1PvSyyzqXwjomh72Rt1k5Q8CMqjJ6vr7EEVYsZJhXLjhWMhvEanciLLtY8avFTy5wrooWFm",
  "key19": "Y3wZHMDs9isLAz2EP6q1tpp3BY6a91G3XA2CEUJdVYvkWTZbcLBGhWmxpjf93WnNEzbSfPGfuAAtcPXU3n5zsGa",
  "key20": "2CBCFoVL8YHLw9HHLehis3GRdE24yghrd6gSHcFmFZiifQfnqScx6BqHK6FxkDherfdWZTQ9pzUj6RD3JQxZ3prN",
  "key21": "5cf8RAiYrqndLGsBXKUAbgGVMGtv8M4X3WLXCrbjJByjGDe9v7m99upXRYJN4cE8PR5ztfbPJhBarubXDs32qFJD",
  "key22": "5ZYpyopVweKHRdYfAdVr4D7jrwtcixcFwKsriZwFEpB4Sb4MkeGcqaTEdvF2skHVvM4bP1AFYDt6ZznN7b8CKRYn",
  "key23": "3E1EhjMHkdsVx4MDHUErhKWmAzYP6teEU9BntkHZJ5gEB6j4fMjhwgfwSasHEMjiz77rfDZRXfdQRkegpGxEQATW",
  "key24": "3WG4T8nYehPs3tDqEoVuunRmuRc12C4WyVaKVzqoVpiLyEUZh4ZCEXi42489BQWNDXXkAYysmd1oe4ZqmcCHwNwn",
  "key25": "zTeKEcirZCGUoNEwXZ6pF5r8oGNkyHrvEwpQnXVs6qpWJrdak6XKCm2GXvGKHnZwCt8attFbffKTzbQU7mXMsBV",
  "key26": "x242x6pQ6mVx87TjfrB1LbNg72nD6xSdYTs9F8NKuKSogXUXoaPUXmgaKt6DeS4H3usJvj7YvLkoxQWJhY1DCGp",
  "key27": "29HeZgZMkCXHqB8oYYrmuS8tZuXRPiHJBSxVy2eYZEjYcNjYW8noyg8XvmUJXpkNJ3MxgthT4pq1qDPkh6XeDcHk",
  "key28": "4dJuwg3vaZtgZsN5YFHK7VpAj9aET9rqpoDK4dRwpsgtQE5sSHMuoKkMbbYqWksym4uZ6skBfhxhc6BtWsrqqNRB",
  "key29": "61ckdFE8cYgLDmCD9DohrG6wNHfZVatEiJ62qtD5uet4oVyrHpEVd44VfpR6HuqXaShWJYn8qJ5i33MqaPjRKjG3",
  "key30": "5GNP2pWZehg1LUoLAdD8qpZAjk4SYZi9iccPW17vXnuHGmArzd9v9bLV8KfsBQnYsLR8vDBA5WN7A4njhTmBy9sT",
  "key31": "4jKwc7osVEEanLbQJ6xgTHV46wBoqcuu9G26tjLuTFtxPbuc3MyFQNVS5VhA6wvZHqxr9tbsrwj5ipqQJHJCDV2b",
  "key32": "5D2bm5bCAeKJYHVuXi1PZYCPuqhWDCbwYaMDGKF2cCytFX83rDy3Av9c6cWUtFcqBWCp6qwVuXa8UgZ9WC7ubKf2",
  "key33": "P8y6XQnfMHuBPVi4cANZvJNUVsqfQkvZxff4ZqE1PcNrnfigDCt6JVCTipDbRmMnqgWrrgbqpZgtycKG8aVckYg",
  "key34": "3UF5N5rFm5GRunJt9KQMMQvC5iK2kdUE7n6GxWx2YNk3TtTq8pQe876Jpj3urwcqKdfDF2upoL8L6LRdnXXrZ3sz",
  "key35": "4yAHjLhWnGK12eovBmxyGyp3RZhuBZkUcJrhBzmaJBuvEkk5x3y1sUG5MFPR5yXGa3MAZZz9hGZHzeN5EVwBMmBT",
  "key36": "5HiPQWAiTGF5BhNEo7nBTfxdr2hfqrUiMaihkASbRWS1a3msYWDkwum81xNU2gsFhmu7wMUNnqEPBMMwYys766Rt",
  "key37": "XiirmHsdxvKGZ9L5TvNzC5SKMNbKWbqxATvzwpVJj973TLMNTB4iZb3eAiAWeEcYsWxqHNgQ9FkZ3vD1t1A3PiC",
  "key38": "46xG5chHYqnLb7YC8sVg56xGrFLccNC1PUWnX348DkiGDS3YkvVdgdvoew4je8ETtGB8arqYPZSiWCq6W6UJVXPg",
  "key39": "5FVizag4duBgoGPEa8X9PpSB3Bbk4oM1EMfwBbbfy4oAWswGShe2HRV8QRcy1rgm1GZMY49LfKoAGLFnfEyotHVt",
  "key40": "48zit55d8pYTd6t1zqh3gzkZphqbrQiFQpW6FNAPUNGD7Jzi1ZmMEyvmVZizxbxkZbVTh6HqEywUdpP5XPDskaei",
  "key41": "5Vsk7YWFj1ikhAKeYJfNdkoonWwhQmmVCqLXYEoTxPPYqyQjGysqavjDxnFxwrBHLZjij1cBAFNJRp7dusDi1A1p",
  "key42": "ovnqEorWKmwdrzKnaifVPbUSD9FVVAhMkNNLC5S1XZaqqEWTAgsDxhMvkhqDrhEcJSw4RFbiKep1WMF4GaTUPqr",
  "key43": "2mXUE1NvSJF1j3ytXhTEHTLje89XpQ8irWLy24RWQrhMiimAApPMhCMXcFQQTu9b7uijHi73XVMoWfiVarruuzN9",
  "key44": "2KTTLjMaUXaesBCXF4666YGiq9xMbbP8KnuuHNDnX3WEpQ7dufdUpbKuyZ9shBaicwEHxAkBiQr7x57zLBemg7bn",
  "key45": "4X9B76Gvr6TwkPCakjaoKEDJLKzrdsMcLki9Q3mcKS1o1d9uZMh3wmoYZuJtUs9gAHX5cj32AwGYKxiMZDoxA29A"
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
