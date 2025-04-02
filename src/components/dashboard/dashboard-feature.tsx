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
    "373k8nKdz31vCMVnS11j1yBgyYegq463xRCEGbNR29H1SQAhdvxnwc64aVjHt9gNLhiaiv1QNzoXDAFpHKZdr2pS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PSVAVEX2BjURcbe3RpYkfLjeb7ogdTBkBvmfUhep9odQJdfYHKoZ13xeQQj1Y1g7n5UTdwUqj1jqV1ivyH1H9Xs",
  "key1": "25WLZfY7nAVtV282xHcqNex7LG4UhXDpKetUTmuskUP5NKTQpf1q9ESbXQq6Mwgh4rAZ7i4MVopqCTsvSBpkqwEq",
  "key2": "4JcxXtxPvR8hHsb19eRxtBjuoeDGHAXzXdG3MyZZjDfNb64F8Kx67EzLwENavHm7Kq2dGTD3Q8f98He8AqnPCpkj",
  "key3": "5VvCAZKDw5k4327zaPC71PWj1VEWTarBU8ffharw75udg8Bmcvw9FYxpT87QzV5hCy2GfrV6GZcqYLzTY1RCUDdk",
  "key4": "4eTrB8AUtW1R7yKE4YEcDTxoEkHjeu1eB1DoGw3W6vzgbfjCMumGQ3QHnjMHM6MrqHNHFmZiaZ4bwZS7mMHonpF8",
  "key5": "3AZxSEhdJYguP7XiQzFGERXDhA2MNRJUcqRmY7gruTLyXgzVrCFmCdZUnn3UovQKvnqkekWWf3PhGrMER9g8ZjRJ",
  "key6": "5qHqdNhqwxhA8AraNxmvrbHGaZ3ahFyeV85BLRoLBsRdwqtkGPJ1mf8JJphFjuRFLWfaAr2p1YErLnm7rWBN2cx2",
  "key7": "4eCygdFsddfKjhQT9MsFU4V8MYsomjGY7kRCvPwh3ZxTSM1qYwBW48JrV1n7wei1xw74CEScURfoY33BBNyRSwY3",
  "key8": "2LxpDyhzh5h6D8P8etDgWtp8jFFki2EdRozK2N4aMD3keP86ptqcuApV31XfGAptFLKEBQ6Bnt7UXodic3iQrZic",
  "key9": "2GVViW6TUMWvh9ENM3tXUULgQTGjaLE1GTace14tqEXZ2Wz8HuWPH7vsFMWUGuRN7qJdvJpVHcHjz7ihz97nJmnQ",
  "key10": "2dmAY1FmKFcw4npzu1wEfSuAZGQkbT6TRZanuvoEKQe1enUDLwPr4LSDJVheYjYsABN8wDJSZNkfkTjzZqbuwFQD",
  "key11": "33LP7uLn7cpQBTR2zVEszxbHzNboDhSzmHh3P4kbShix3HuFJVtJwTuoR8UFyZJbXCP8o2EHj4uhuJwQq16dRJ72",
  "key12": "4hGKERX6D8m8oH7WVKKtowP8hMko2DZEjTsBPg5jxzhe55bUegNFtMYKdw7s2uDXUA9dZ4U1hYzkxwa8oLpZaqen",
  "key13": "4wRbP6Y1WLorit9aWmUPbPGagrVQ1Sz9XFZHopTBdcervwAhWbV75CWZuxvuzymXnkp98Kf8fv2iAfo8rSgKCxSF",
  "key14": "3PLQRDG7GqMhEJFiCoK3YaUBUogGMMq6ijFesaYMV9qnuzXRDsFDJcgDm4XXagCmDK2JJtD5urjQMgtAYCEnz5DF",
  "key15": "4RE2AtntrKnxgHKN9zYha6uzpJjKWnQrY1qY4HxU3LuQsEUMGVpssQ6JTAXL3BfqQEnLVzpPRceLFutzbtjJuHoq",
  "key16": "5y3KzoctNJvYgudf8YJPA7ziJY4WMZGnxUw1otQG1dscieBQ1pLMi7eUW6qgHDN9wk86v1SZ9GV3F8isAsAuNPn4",
  "key17": "35PGpozTgnUxWUXYu6D6ZnGMX2LAhYvin784GwXqK64t7zTGX1QEhbwcugNqLHB9TPxVYjKu2jPAXUksLZKZ2Gme",
  "key18": "3XxZo2nrS8w7i5DgL71v1vKTncnBsk1fzpKqwjT5atj2CsxnEMG6MU8c92m9qA194gyzMuUWUrjyyg7KdcETSpLd",
  "key19": "2rpTRAc1Ty61S7rHhYtWv9LjoGJoEvHgah6sjHwRt518UoeMHJL5gVYMUJD8UAJxHcEMhR5SU41hXXraRSinEvwC",
  "key20": "551b9nLGg2hTgFKsVNFKP5SuWXbyMBr1pFhmbuMxzsU8fvY1CiSn6yi5qydaZD3a9isGHrqUqXn9L8CZN18rnCvM",
  "key21": "G4PJAXyVpS4SuAjyWrQF46DCkxiXH7NDSsW7yfiQhnFhHq9izEKG5hmSMUnMWHJyHRSRh2HdurkW61TemsPLKda",
  "key22": "3tfc1sZGA4qEwmf6d9c1uefe4dxqi7vCjsJvZYYM1Am9wxtoBRhZHJYNeVNUbHB5A6noPfKN7XMRZEQacxZvE2U8",
  "key23": "E7d8VAL9DGRx3riPVcrLMw1nMRzprR9wB3cHC9hjmEVTqS1LS4k31k888bhL4q1g33QnBZzGEXKUP2L32KvvjKa",
  "key24": "4LUk43zDYq25JD7hwnW47Pnv1oSPhFUNKF9ThNEtr4fLQdTH1gjDbjzL2SxvYc5iXDFYL7jDN96fVdnJvYesop6k",
  "key25": "53h6DE8iytABo2bu7ERzf5ifrivP9SRcPq3pqYKohhBi53xaqonvQcYPqUSETuHaEEJEVvyDryinr9Eq8cmZzeKg",
  "key26": "MmdVNh6dnbuCbi9ZZpFfYWRFtQ6G6tPWvAAiz8iRAZtQJnhbfNzzkU4r5JxDCZRRwYfNqzFjet13q7GGG7KMoag",
  "key27": "47NnnyrFEvYubkUUkFK21i67cWieRLPftcK9YEd32ZKUU5KF96kregAEkNDPJNwgeBABC4cvSRuz6T1RV943omE8",
  "key28": "629FsS2DHp2prishchtTdR2gaKdXhS9ddaSXPmDWAHMG9UgwdUkZPjoJzy2dKv2hBVLuzwRHFAemNTCu6B2GoCtt",
  "key29": "4o4ECC4yCUkNm1N9yPo4uo9Xtshe9WCE3wKJ3mCvCMYeVMnTf33mnoFxiqyZTbxTjJHyEWGXXkASVMD1yHMvY9QT",
  "key30": "JRbqeU5YqdpbFCgahjXPYvQzfHnTCpxsSHe7Qpkt7Z21LtMp6KbSad4VPzPrfsRjxq52yTXKewPcyBSeP37qWMz",
  "key31": "2sdkcgK1MHNULvZzbp5DVYXF3jnXa91Jocg8hrLfzU2BPVmkFpRbv6wvVBDBRGPdbPzm1QEK1r9TVkZFKe3SMZyp",
  "key32": "5jZiz1xHTmdnuWbr3bhAMykGshSsKFL5xtGecXDm9nSNPymjE5BxqkraFzKr1abSbRu9ZitM16ecz7pgbvBPY5Y8",
  "key33": "4D4vqWmC4VCrJw186LDpq97Kwunn5HagJ7sViYyfMGfijjXF2EqHDxzJuk4qtPGz4ELcZJMkfJdqvQgHRdHVg2Kb",
  "key34": "1649EzQJUC5zSWA9QKEB2vwfxwmF8tkR8L7PHZKuY9RvurXHV4jocZSw8t5SKFbxvR9d8nPgYg5NobFFyqQXiq6",
  "key35": "5oy3vZbRfABBfRHMnS1BwcNvYUVjh3kPTCM1Z2daFkoKR8nNZSLEFi8ZY12hgTvcRF4smbjUgt24AqYRCRwVktuo",
  "key36": "4PmY9r3rJt6Nts8FnKCsWnCS3VpX7Sbmced7fDSpi3gRSbhW5i8GrEcX1iazTu9TAtogWa3iDGnNHjC7CaPMkLsz",
  "key37": "3GP43wdT6hmvfwQWELYYHrgGyfEd2DRkgpcgKJoaWXhpR38s9YEDHhVb6KnmUB3cun9Etw46uMDa5RaJ7mmrh1Wg",
  "key38": "63bumXJwdjxd8YBJbZFH1CNRJLdRB5zfQVBjqUZd7WQHv49vHD6qVkiHLyirAupx8nbH4YNPbuU6RwAmVzboa2Qj",
  "key39": "EgABNxWMbLvHNe2dLfc6vz45K9BVo6DFDdeBnWjSDoTao6v9PJ773nhAeHr1SMpunYZX3ANck9ZxZSThJbKDLHd",
  "key40": "27bpMFpiEkKR66wB2CZxf5TxAJjLwWdDKG8ZQMZNU9fRVucjzbsnHCLRbk7XvbPWkswwA5K556MFf5Ho6hTL8BZk",
  "key41": "2JnM87iQqsj9EC58voDmFRZ4MoP7bF7P2x19sqQrrSqyYEepbrtf9WFwy1VaNpaPuwzMwdNf7RReDRwtZKvKAUmf",
  "key42": "4xHNrmx2XdiJzNY2NeQJTkXdg36eZTcKeCzYkLqBjGiqdGN6YRUwxGvXQrtJj6h4LCiH9oXgvz3RfNM6kHCPp99R"
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
