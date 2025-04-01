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
    "2mR2qwui4braF6jLBiSYiosykVJnUhMDm7Pe1QeLweHf6nJVdkascginjL8pkQXfLi9tV3Q5W7B4AaeRQfX4k3Lm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "321JB1SkF2VXDpsveKqh3Yzu76ki8KZegiQU7PEodpuzcdwx4pNB7VxpEUWBQDnKQDdzg47mfgkqdUznoU9fgKqB",
  "key1": "dprFM8iHyzqD9Ft13T8y1c6mvfUmcEUswDA5XMLbD9eUoCdJ9asoYYnT8hrH4dWhkmR5sxfUsUxhUA45pAHLc1w",
  "key2": "6dHVkTGYiVYRZKNTCg2Bim81ZWXMDupoYiv7ZxSzcxEZQeQkGqVh1iVoZp2ZspY18GtPA7wBHyYzbfQdfbqP47L",
  "key3": "2kULSUMh7yL9YDYHYnPpharanzoNQJ3MySn37ctekNyDqyFQCC8ZNRhUDvK25XhWRB19GKKoBzm3m48rRtTck3L2",
  "key4": "2Wvyc8upeicgQxhAvYvTvmr8TeK9hwMUjsueVXRwwNw1Puz2EZ1Y99adxkxgdRv1Zj4HbjPCinecjeNm6BERaTAc",
  "key5": "4t2ZecLzGd4RDNhftwkWBBvijMMvUQyJaSFRzvzH9P1z5TKHgng4oXNn9nJM8x2RcZjUzghKEerTC2c7o1zyTNsK",
  "key6": "3A4EYgN6Mdu33cWVTqsRczXcCGHK6EBKVhnKeUit4bzdCx5V8gucTtDuGdJgAEhfKj9opuQQXngQSN1Py6YYcSkX",
  "key7": "fCmTA1kAASoQgHR4ZQcWUNJtdBbqrzm592ubpTCut1EggUFA2e1eQDVWs8XjVG56RsVp7vgQ8qyf8HzL1A6t1F9",
  "key8": "4cvvBYTRxVTcFbCo2RvDRykJJQrTrRc3cebi2hesrpc3Zrs5sZFohyGw7bPeVxR2Va94fTT2H7Gtph6EkgjJwqV6",
  "key9": "4jRh9vPVRi3Qo3JM8pAV17M1mo1xP6E2k7L9nPARQ6MBS3bgNfQCf68jQtLv9vxBqDDmyCz7kFshTiMiVCVYPJY8",
  "key10": "4f9cyzzDDXBra4pEYaEdCuXqr7LLU81Yf9BUjSzHBMsF91DnvseMVBg9kcwWXXejJPXipuZAC47QTiPP2A5E9TpN",
  "key11": "3NAwAsdyNdAz4H1coi3AMHY39SKqebrfBukYUFuv4HLeDtLkF44YjAzaipRoTjUHq3DaLU5SnvYuusgaGVURXDup",
  "key12": "2Y6BV81gwu4t8jtk9Cdd1KXKeoH9tUJMLekSJ9FBugLk9CtjazFfhgiunLJA8vBwfDwzbGb2VVkryrmUeGQkYKAQ",
  "key13": "JWJnTwMwq3oke47PMM1i7MPLp2USbZX7iFUjNHGhsba7FRTpFqeCC6Mc1nPfNkPpxtsNvYUYehJ4PVJEuNYCV7C",
  "key14": "39ym911PC7x31UZBxmVrJTfnwXGydLRc2oxUGxwHhKRZBTqkhWvPF1BJoJvx73nR2xF75omLwC5xrKzfJjsqau4g",
  "key15": "3greY4cDSpEnqjXFGacW4iakeubn5B748oApsthZBVDuqtZqBRcibLcRhg6zXQX9b2TDpZMBEpM2YWuC4rDbfZJx",
  "key16": "3GKRPLdSiaN1kfG44ts5VodUPERVeXzPcvGAgDdn2EWRRywHgW9DuvZJtY2kJ4kLs2j8RzNFQwmTD7WTcUGvd2Rk",
  "key17": "ugX65F47DXSrgsL2ff1rgvNUK9qwPbboc27NxVTMY2YT8fpRSduaLJtnFt2m719996Kw8djVptXH5KZTprYQwH5",
  "key18": "3N1sXryHWVQmRx1WvEFVNC2FmWyPTHhgCnHougM4qHDJjnp4E7du9djK8yjens65mi8XdeiPy8nY2wnJ4Lc44Hbt",
  "key19": "EhhLocUnvBV4Y8Ggz1re5XKcMcteHemov4CPrLzyqQ2GcCvjD1MxqrKapZtpR8fytkXJ6bv6yj87qzuB8zPh6PP",
  "key20": "NAukvHjNUPnBFKipJMGWeENwFkgZSFWjik7Y3tiM7enorq1TFUamNAL55rEaLa5Ty6cZ4FW6W7GyAn6aL8BPKSp",
  "key21": "5qLBJeBM9qPty17MgrpiAfSyn3ZNAREk4JLpdRvUv52oc7qmqP5fAeD9cyRcos5cTwpUTAv4riUiVepGoHT5nPri",
  "key22": "38Axt4vdSWtKmzMc3LXtFFDn5chanEAEKfzmNFRHryC9nXhMW3Le8eQ27GVZgBbgWLQx7bzDwiXewfvoX5BYHzUa",
  "key23": "2huCb4YmF5kvCNZqC6C3o6dMNjRntz8V4gx3wwF2zkk9tEZ5nPuqxMcseqFpaVnxP1t77YfayVkASo3GNy4abXCn",
  "key24": "TNCs1F25gkqoCugM3xTH8n7Z8Fx8LpmR5JxL7eQN4MHwsJTxtrao5DpakadRrJqbNDbViLZjfdfpA73bsBrwNtY",
  "key25": "4J2Rmyk7D53UjCsmxT1pbJ7iY1DdtTmrnnAHn6dRzTWTysGkSdthfZvZLjSkmD66S6AQxsnSdcgE2MrvWGRmau3h",
  "key26": "p1P9qFCMcRnsWToXuAnTffLMvrw9JYvNLyfXLPePgi68uJt1AHMfznCxaHcab7VDrS56J6or5PWaSBvWHXRCthp",
  "key27": "3R5F8RjArgtaGqJxTtE2Z98N5T7Cm763x6CAm9JbSqRFxfUCj6qZgvzjVuFikDRiA8uFDWJpnRAhk6FYkoUhyvWm",
  "key28": "BqPKs6jfh7zDNBgGvYK6EyG72BejRKSLHZEuQV2oX67sSeA9exikzSG2WdCxTbZ8ofnvaN3wxjU3sYsw9bjmJdz",
  "key29": "4gESKB11ZipuwwJ2kjqiWj5AB5gpipp9EZWBxkHu2r96Ugi9FrMsf6FH2fgW2EeiJzCZhYkmhCP4XKKEZqXBd25p",
  "key30": "2kXxc2BsaxbfDAV6rz5xMYnD3eGWthyzswELuW5UYkioxPR3DpGUBSfxdE68HrcAmpKG5VC6zpY7AFHj6BRMnFMk",
  "key31": "4mjCFACcA2FfV5W99DEAwT1C5c2nkTN8fYYfQDn8KPEDQMjX8xr17U1synrESa5Nz1dfEWu8LmnKdW2hZaHLt3t7",
  "key32": "4HMww6pcwdhfSvWggrSc5TKVfVgf27jKfhgveQgSL4AdUnFGoH9vdM5j2uRQoshW4z3BX6kdmj8LEzzfzQ5Mk9K4",
  "key33": "5CKA5vGvqQ9mvo9h8wnwFGDP5DEuam3zY2b8AvdnEEoVnoHm5vRewJynjLWvCkxsuzZ45xNqmgKeGCsp5HVE5gC",
  "key34": "3fyTjWiiYYRUHeYQ9tcoYb9GzHpZpWhMoyTJ6nE8dGu6zE39nVR5ezfMXFWzzwJe3G3RpjApBco94ZpCTrvTpKRN",
  "key35": "u749sL6xnLvpdwMfF5NiVayHPqzMjrN84aoixaZ7CEcaqCqvMqnF6yGUQ4xk17WnDEJb16PGTvzdGAT8fmeAPXp",
  "key36": "5yoBprLWd6STm7bCRvV1HqAoaKZhmokYxau1Du2bhrmgyzPbep4Y6rpHMQK7CkacZBtENk4TXJMmumhj661VHEhD",
  "key37": "4M3Yzrn3LikuoaC2R67A4kvgnU7EQhfjtuLV33Ls68VD8x8VtNvzfWBuW8tA1MAf89VWZoK8LS1jo2k3uxVwoYhp",
  "key38": "4q8MMMmamXssdmt4CRQghGTzBxeU24bM8tYeuJBsuNmMRHpGfPs94VL4jrfRj4Q4etFMYFLUz2QYZzsFBxyNjqYA",
  "key39": "2utLAyHpn31zS8wNNLvaMt4p6y6z7Ufaocvcezk9zVpboKHvLFJXmh7Z2vdfGjKhdsXvxgddGXZ3V7ENTtnam5VP",
  "key40": "3zbfXEjCmUWcv7JUTkMTUqW6AJaFQfmfgDTyuUCQWayCy83xCXCQ3W84zYDmoBZWBBUoMtLNP9qwesYqQUmAwYN2",
  "key41": "5zhBs6yhzpbtxjN4zi2W69MDgqPX5kNYhrrf2XUoD3qMXzHXvXGmTqHFgjn9Y2o6dv4Kgof2h8iny14XAQioqENn"
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
