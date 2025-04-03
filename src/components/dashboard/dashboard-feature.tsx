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
    "ynxMmLYPSiWveihAAbYrQbm88hKZcgN9wSuQXfq2We6ymk9eDLDhuzAd9pUb3qzaa4ZerepAZKxVUZg5d1WRGJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HvxpSqx6PSPpD9nfNkqgputMnSzbWfhFmGL4AQWFDLjNmY5nCsK7McZF7f8BjEU6751SNaMpaBCj69pBCMLmFMM",
  "key1": "4MKauFYdeNiVYSEdQEvurbh9Dqty646ESp3Qq1RZS61HcWgXuGydmcet8MVAocG64jAN7nww94g94SqhdLecyjAV",
  "key2": "21XCfTh8aWy92dgnudVhgr6cS1LGnu8XLnDvczvBBUrxEa2mxTkbo2UXHC9k8VDzNZuMdDgikRoQpJ3uDobu6jQF",
  "key3": "2xYVeXee1vDCWBYT4iUnFh3xGWeLrpr5x7Y74wT6WapxqBsicfQLmuk47ZRhv4yVL1cXMV6pEAfjnLY45UskPJov",
  "key4": "5yNQmXK6SxfR4UYBa3WSicipFPqNxpinQtUvddCWNyDCGzaSpFggeL7UPn1dTc4KmPcMKVqnsf5R6VnnHeKvdM9X",
  "key5": "3q2Rbm3yxPuoucdu6BzEGtorm1KctiEVXe21ZxribYqyj17b7TjgGmxKLjXAwhuJNV9cFDJTEKeYbFdnQ6Dmf3n2",
  "key6": "3o6Fuxh2K1yxfDonkb8Rrp5pfE28saac25Qj5sgj3ZiUmmBhV2cLZYy8bZwYkaGRavTioe8daW13Z8nQdEoLuMGG",
  "key7": "25bu2vTZGq2fw7dt8LJ6B1qJmcDgVto2x5NvgqwUpNoikMDFSkJVcJMuW8UbH2eMs1MzHhooEXBmFzqQupNS2nxd",
  "key8": "DmVxQWfCnLp6GoEqU1TTTo1wgdbqPZjvSBx7rSx6xrTHUtBGnK9rVGGN66iF5PfagwEyEfEagt1RwoEn1MDH72k",
  "key9": "2KvQTud3XSw48bMJnEBn6f7EMDAtgBPkCAL4zhBm8WSuewQDsfcDgTA8wELQyUA5NReYguKfVfeRksnV2Ei8ythP",
  "key10": "31a8uXVtMiGhaLeRDMgQBzQwJM5g91ag4BT5GamEjvcjXRmHoREdABXsGx4n7DD3Yiib4U4S3nwCyECJQoz3vG9t",
  "key11": "5AaS3CozbU8p4UXJKUXP4k3BFPr8HtMi9sMyKou5KVnv33JJzfyW5Hz2FgRoRHHartdL2g1rKjK6dxzrSF93yipZ",
  "key12": "4dnA5Gz6GnfcEpguRMCZSbySpYnJ4AYiNwShBPr2mRbeZEQL3MqrNNPokPEjXaPWtFGqbKJuo9bWrrTJva77HwcW",
  "key13": "2qkRw1ChRKtkqk7UwT6kfDyrDSKe2gTQfDJG4hmjW1s9rAYwPY8T6E23nqmSUCsY77qfZmzL1m6nKWz3UXt3PHGm",
  "key14": "5FYvTNW996TwPeY6hGviZugvkzetfJTRyxVH37cuoJbeBG2vrpG3N9a6KkYbQj8QFatDtBdv4McYZCGUmQRbAE5Y",
  "key15": "5Jpk3Y3PseHbXSt6UC4FVtphvY45f5Y7m2avpUzJkk4yw5YwPoi7htCTtVYsSoUoeSveuvzBVvYKeLnXaiVAPfrc",
  "key16": "23p6KT9T5bxGahZGUjAJQi8xVFbkkm3gkCSGvqaH5HbqZ29YC6ABYwtDSAFWcSJnZBc1amSLZghBmH1mjGZoTQrM",
  "key17": "2VDMw5YYvUbxVQJjEcNQPFf5KFnq3YEQmLUSoKE1Zxrd64G8DVMBApSzNjptiKtztsrXFuzgVq9WK8tFQyLhZLjk",
  "key18": "2Nsw1NbNy6TpB9vz9jwc47r8yFR6jyprpYG3FMiurvoRjt1sP3Z1er2B8846dGxgp5c1HEJv6sABekwYAvhqZbzj",
  "key19": "4nrPbAvxmjSq8ZBUx4md2eFbBbnuPhfTDRGTjb2FXuEXf1pdhZst2dEL1dsxEjTYdkWHsJt8SQcSTgpeZ1gVcZRJ",
  "key20": "dvNNMPkamZPoK6hH7V5jsXA9LskNTSccpGouK72acDSThfXEtCGqHtXdxxFCekL5jXCbVjateQG34atFfK2jFaJ",
  "key21": "2DwM6x57f6xEB2tfLUMGx39uwZFX5HEUMoPsYfGucpU6HTqYkVS2vRrBaC2AesqFaWs9L7fyXYUrGytMSo1oH7bY",
  "key22": "5WX8HjiohbYFRqD13xqknaMk7nguzqTR6BdxjBcWrvjYPVDCVgncB98BsU6WLZf6AMEmRVLG2m8n4KaLNsG3Vccc",
  "key23": "2sYuG8fix1BTgj5wpmF6casWYJge3JeQhqa76gH1rFCmgkzcmfC99M1Xj8JMpiDgtjYU3VFrDGzpb6rMAfyDwmCM",
  "key24": "5Xp6NeM6V5e6v61Nri8MurKBKhc1U5gpT6R3ij7Brnch3qkECaxqCxeWBz5ws7oMdyq9Fr6CAG8grn2WpcSq2Kt4",
  "key25": "3DA5m2Y3BD3S1xUhkoeVf3AAzocZGZufx1uuggfvt5VNMSwZon2tPQ5mUoMLGcfgGRus91FPWKZ9oerSmD6LCXRH",
  "key26": "3MtzNNHawy5YFgjPZLXj8jXvn4HkfPbLN7NK7L7vtBTCmk41EaciD5cEueReb4jNr7MqYyzC7a9kKWqitBH68dxD",
  "key27": "wYRx8AJ4bkbm6YUrtUUakbeNJMha8WXQMGY6rK9JvcjWf6Nfj2zqixt5mr1e8XpBoLnQGZQo1HRaPJNmbzEA7Z4",
  "key28": "4wy9Gajo2xh3bVVHKGqUVUU8XM9wcFJwGt2DPThMTe8BczyZEBXzA6oqgzQfC9WjJMBJzjffnXKbD8aAreUCiShF",
  "key29": "2TUU9Z9VD5svmA7Dufo7aZ5zXKPQAYNJjZa1pjzuXTGY3dDtG7xotJMtHTUnKiP1LVes1fN3rLkoNYwtHm75V6Gq",
  "key30": "4HqmVv8DRJXjRRTsZpn4GDHCtjnB6cg8DtAxwPGn77VrADow13YDtPMLGu6e99tg34GN3Ez1FfvC8GxWLKY9JNqT",
  "key31": "McvaKgkrk9zfAFgzYM9Jb3dmd2rtbgkob4atdiniAW2fnTNxBiaT4K6dDgvXjLYCiE1G3Qe4HwNpP8UdgJk3Kyn",
  "key32": "66AYbwwYdTor3CpCNittuTd3jdhzr4ujK6WdKPeEDKkx7b6Wb7ip2QXHHeXD85ZkkppEMzATHJEFBmwSh1yahNm4",
  "key33": "47cZvChH4HkJ4vQeo7ScjNujv1KZYZPXiTLmYEoc4qvPuTXVMFV2sYBTPcGybPthgm9XwAZNtkDxZy5mKUZdSiiJ",
  "key34": "3XFtpTiGrnmqnaz9qd1z5sKxM1yQjmVpD2Aj6Rt1ycNhgBUy8jYpjQrEAULg6mrNwpW228a2jVxeB8jVoeq14pCv",
  "key35": "2nQN2P6JM7g1B5jTDPpzu8sX6ivBRmNwWBHX7fgnhiDs2VfdGiC7aczBKbF6RfkjkvmFZNgxX5JsTCqQGMgnWDs4",
  "key36": "5MCxvMEHrRBEvp9VPbGD1HhsMT9Ndiv37CnhsPYCtLajqBgDbeeUXUJLbUJMKz8YwejBUSboF2mvcBKsDR58Qjia",
  "key37": "k5NpVnwHiVfD5VeHhs75574cUXhjnx3PicJpbk6fjL5Ttg2VcPjteXbZmCaPXkMnvtTn729kQQFcpftagkG4SUv",
  "key38": "2pN4dWmbJVfcW5VvQeUK5T7MFDZVxCqDXsG5d1e4F2MUFbMB1wK4DRQqrBy38dRkJuKXiCWHdF9daF2ZPGKXgE6N",
  "key39": "4zAqtBkyiZeXhResVKhA2cHViYUF9NBHJNvp4W8zX3CmiXW4DuJV8o4MyDVH4VAwnVpnhysRHQHNP27jTWcWgszM",
  "key40": "5K5VWd2ddyMgDXYkNVRH3WwS5wVytTeqPdPrW7xNP7xrJoW2XTyEA73JWGNmC9GpbEcE3fDhPDLmNmLQfqpFqB1D"
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
