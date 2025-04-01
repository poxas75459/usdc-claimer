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
    "4cVw9f8zFyEd1Jb2BETNXvF47S7nQyda6CCnc34D6cNF25ETXo31RPLQgqXWffiKTXFQQwuLCvCaRT2XfVE9TyFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2egW4tiEEBiEmKok9X3nm4oyP6jGLC9RwRFPQvqv2pMR1D8cTdRtUgtuscqbhqvAM2E9mUpf4tRQ2rYLeaGU1RW9",
  "key1": "3aCXwnDbTvj33ZdZkTbp2d5vmKQJFxML8X74ChAvFrwqZSioifZ5w1XMRMsrzgyLWXDHuqcwXspmzQXWHkhFRgMA",
  "key2": "SJ448FBUZVEsGYGwdq2jDgtxEhquQTDHx94xdFMm17R81VbNebL1cm3jthsoTUTXcafKQuUEp7XafaDMjhyZoLY",
  "key3": "2JfWR98p1qyyF3GCJgUbER6dSGQXU6fEXC9cb9tE4L7suyDaZBw8zp2ZfaajBe2javNbyzu43VR1NmKrghXyV59",
  "key4": "268Ae1eVvcAUMWcJesJJndMQCXYAk6X9akiQJzkYbbPZiZXbdCBqwgoheMqAULQBxMX35JYhnoJkK8emFvaqfR8h",
  "key5": "2Yy2bDyVrrP3m7RjhEZ7YHT2DJVeMgwjc7ZCXCcc9eTbhaXGsmH1H8XNipcbaZ86mSh2W4UvkUNYL3PTGa8Msqbz",
  "key6": "5q2gMHSzUfyCBAhRLfGAAFFtxVDM4vwDSdCCt58RjBto1mbqNZuQdLGg5EQjjzFK6KJSa7t6K6oA2paqGRD79cs8",
  "key7": "5dM6c6ETcHiApDGtiPZuowg6tCzpgoxnSADYHTennCDVSiDjNbwYKQUFutWgeSXoddkBMrHFYUeG37SPVbS43BfW",
  "key8": "2sZdoeBXAUhBUgDA8VsxwZ8xy8TX7eegB9rytzUPHAdSMLxVa9soKQ58VNBAmHUVPXJx6vsyL5AmBCLGnouDJTjN",
  "key9": "vXwRgJ4ECpsXxTzjryznBVjK6zh9VYbhXRM1bVDEESFYoRQSyTMMRP5yQTyvwKtbHigo2Rm3m8xmr67Pk41qcop",
  "key10": "5Atc9ExcJ8F9B5DVMqJedPVnpaGmPgMW7rEifbomiVFNScCr6PrStg5iNsoGNGUX5RnSzkrdNnmYeSkkW6dTKayh",
  "key11": "2kPSgZJ8BXvoYuEcrBothwoumVTkYN8zZduJfzaFvGft9A31y89H4hiwPB7TnsFUnuaQNyEFBFt7eG4uhh8qXvKS",
  "key12": "49KWngMSAVUbUryWmdo3GdER2g6FhS4j2sKBvJTEBw1JesZ7uRDLcHAWUMUEVZSEJKoQrWCGZtWQ7RKDn8atUPwp",
  "key13": "3WRjD5F5PQdfZJaYRYJ2uxHviC5pnE6rLkN7W4TPUZyynki5J87iPmV5gBXNEVvMDG92rnYEeNC42fHJh5HoiUDM",
  "key14": "4mfJ3LsPLbJMQXtuZ48Tmp7TTCi1d3jBKhaWsgwK7FmFNTyAphVQcPrc4AM9PLZxd5djsLVTG6MpZsP6DkrfYxCQ",
  "key15": "51R7FSWDV2KnQZusvdbdVadkMKMphcJQpzGja5zsVDh9zhPkzxt5YovYUgxZ3SJyXxT6DZSHLcvJ5icS9XQqF1so",
  "key16": "5BVh23hNxAoVmG6bto2zomkqxzrW7Pmf6shhMNtMuMVZ2dYcCtTyxCMKUqvBD5TvHSuXrrpWV7gnd9aaXVPFnpgW",
  "key17": "5avBNeDGTWU9WwyewTryrDW6meBrUvbdQcavCUZE7qUXxVZ2ywUhwTacBF7ovgUfhpc88m1Jdc4bEDtd5ErW4z7W",
  "key18": "4CnwUZdZnwWkxA59kinToeWbMFQFddE7HAYxBbpuvVrMXtnrujDFe3Ybn4qm6oaw7N5o8CVwNSiogDPfEBgBuUgT",
  "key19": "bbMVrhvYxitywMRw4BwAEsJQwU9Y9hSdztgrSbFhCvBDxGQdA4oarFwZGCeWKcK5xjhBUCuXoAY7KZYJSfeoAww",
  "key20": "61gmN3o5GJDBHTUTEYKG4GhM5EJPcfBWKBNNkAfrMj8J6tiLmHDEJVuQGpC4CtuhMq2Nud9KFsqAenPwTv5bouxs",
  "key21": "5wJbMDmDyFeVaM2K91dTaqwqnHwyP5FJcCXW8AbEwov7ATzcUKyfoJFyAqK8ckyM7yeyvxRsS8WcrWAqqUZBoA4x",
  "key22": "B9SYn76DqkU8oeWVt2ZnBpRSTkLYbTiSGepUa5Yjb6VkYEYJeTfzwLf9DJp2JJwnatepjUQKtf3x16rTqZkPHji",
  "key23": "4sjDe2KJnqf2Ry24aN5USUyuJ7XdaxfbvUz8y7PR5yTFDNLBwnfHptaM2bvHWnbM2Az8psPtiiYLiVkrtveNwqxX",
  "key24": "2GAiAAucqH33jM2AgYaPGrSGZqJrgCcEvxT7Tz8jk4YHMCgHGm12ZTVtCYuvG3Nbq8Aos9deMxPsXUXAvieAa32f",
  "key25": "4soSNFXNtW5TehreMc1ktMdySgpdK1o1wKmx3jTzD3sfpBsrPmWEufSPJf5CN8ynrZ8ErJe3VQ2sN5YzWaKFwjv4",
  "key26": "3Y2WM98prs9gR8AJvvHWUcRrsBLWtYtCuxhD2wzySPRQRfL6hDNU6easZTnmXdENm2yegqzWc8NoUx1Sanm6z7V6",
  "key27": "5jRxSXhGu9K8aciCurAvr9ikAneWeiDpjH9V24ELDEKV8hDWZHuP5kLLP4ynjUVii2vt7fm5k5oc6VVp5REsFV1c",
  "key28": "3xtD2iCqBaNmcmymykYcHqozZ8yEgVgdPCa4jKZHeaAtvYYukM6gT5rsLE4xWaV5yJcHeniDz5KXRyDPKZ1VDeN1",
  "key29": "2gvYon3bULqEXyvUbTGHmxwNM4LXGbJQ9Vns3936NtThfgyfnMk8B4Erii4qsVuno2pmeY2geQ3yU7jEthN4w5qy",
  "key30": "4Qu223qhqDv3prntwikhHMMPsvfcxYpmdK7oiA2voD9ZgPgJbe7oisxr1Zn2CBbnAAV9NKJMfeaMrr9oskXGf2if",
  "key31": "4Zotc1RVyZZ96yeTz7HbvLkmgyhkHZgQFqkttbyArMZ9q3BZh66ZuxaDd4RYv85eSUw9eZ185W3fzNgc8vP9QEL4",
  "key32": "3JbrfZvMc4raGQc8W2oAY7dWL5e27sAst45s7scqrmKwUm7pKyPWLEFgsBmk9C7xy7ipQmmGSP4j2Qxnni7RqFM4",
  "key33": "4vSp5Vaezdnr2eiET74ww8NhRCEfDNkegper9QHPkRgyYRQeiazkpM47gHoNu4PCDaFoM87gfzvv4WcqKRp1833",
  "key34": "4YV7HuyUJvge1neHVkyyQwWf212XuW5keva59xEM1HYfPsgYbenJ53oUBPpp7jRENTZGYkqZG96wg3dqSCr8PcAw",
  "key35": "4xzeYGNnnpF6LBV1aFM1PMjfxYvGP1jDnY2DrSQVPNRy4twyuCAgMDqC8o1xEp1q9n1gQGmbQJyfwXf3QVWtow2H",
  "key36": "AsKthKkeEALPmJpoEut1DwvAyeuFAoRKN1Gafeed2hhogTdcfaYDvCshuEAG21YzL3XbNoKUa71ySpaqibSzyyg",
  "key37": "W1xjeC3BRezHMnkjpSNEvPHF9PMUMpur3qwxdXPwVMLHkgLatzYaMwXjN1yWDZYoiqn3rEBcs6UaKdF7WivD67E",
  "key38": "2L4wQ1jxxYY5AuvVXkwnBG5sk4BAW84F18cMsbmKanZzoA5eAkfEx7wbjVQTwtFtVQTbNwWiyP9wngPRsuAyBUCD",
  "key39": "5qUU9aXBBwMdUuvBsFT9gNqbLcy4r46WjrhtrWibFg1uPC7j2EnLpFPP5k1qq9UPaoJL9HdTpPkYH1kv2bUXRT1H",
  "key40": "4VHev9gavhaEKLcpVrKS3vmJJ21jFKBHoYLc8xGQgjxijKUChAzsLTktvAcQFnCEMYaKaoCDM2N41rTZUjAHyAWf",
  "key41": "3w19xQSKsLyDZ9mg4kNZJQNvWZwVybrLBMmajrH3ZoRzpgVA4X8aBLxVaicnwVH3bEzk9NQYS5r5Jd35JmodckDs",
  "key42": "4jCqAAXz8XVx2FMUyXDutYy4U1WsibxKQfxRGWodQoW7Lorfv1zjGhbJGCX6agaHs5uRmGPh37PGqdaUczhpjaPY",
  "key43": "2f6BxCgBaoi22khkcAtg72dzGRsXm7yQX11c4FtE9abvPwbaqR7ozx1derH3aWiuH9cRPPVfVDo7N2ZUWRDnxdTH",
  "key44": "v8VEaBnf4maXfqQvMAJCQ8VSm6jckFefMWT4rk8WMPBKQP9qqW9jQDRD2rrnhiDe1YF2Cauiqc6Cjfz22AeEGDb",
  "key45": "5yj8y1sTbgvbVPivWvxftpFRydYYkaLXwx8Xs71BPu4Djtkye3w3BH9uip58JiRmYgLv9Qj9eN5tTYPTuL21KNrr",
  "key46": "4afrRtCxXJz4JSLPPZSFViiHXVkpxWUpxQaZ1UF3jgjyXcfturnwM8YfMFqcyXjEj4QiYdzmFAdJR7tDoURj8RLo",
  "key47": "Xzddh3rafKkCh5nnfZSR5eK1bZMfvsvJYufLXBEfmxD3ZKYG6sTC8GsmyvRJ1f973fqVrzfGFcRB2pxGoWSaPbD",
  "key48": "3uvTbitzeTkfPdTK4n6fT35qNkARoz68d6mD5RNY6BGRoPX2d2hEm1QRHyVATZumCHR7r4gJgcdkmBfjySrbPoGr",
  "key49": "JYuS8Z4iRgJrY3Zy4gWeDZbeCEgKN7q9nVdQYZ9Zgp3xAf4BT5pNQn3QLNswX9wWRi2TBaer9vBvWg9LdGhHDjj"
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
