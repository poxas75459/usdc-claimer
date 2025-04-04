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
    "2jFttRL36tgWMYZu2ePFkgJDEy3LSrWhgfzXmvsdfg8o3vwg9Ro76iUj5KW23qXqEsCnDacBZizFCmgH19rghuvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sub1bsqiXX5fPBH8wqyaGaDuJJqXWfRgMv7KTyHGsnrYivP1eeG4UVfhXNPrnJHXeWF9DKLrcCaxaQHxao1uf5S",
  "key1": "3GjKj9Ak6hLHAYCNkG71dF5w3i7owJDMFFFtkWUfQMg2wNfZfCs7xASHz4gQipgX6DRxFSAcT3SqRUr9zNF45CWi",
  "key2": "4rQwKsXVgwVi2yXN64NBed6xpHBevVne9VzhLC51528D75vkvAFPPHBPRy4EwfnFySKEKuP8JGtVkQTEsEF21B44",
  "key3": "3ZUXdgX6xNoqLPuvXPopgp8RZbJZio5yV3Fc7T6kDXyTSE7MvVzWWPgBTHgKpwyg2enC8Y9mVdK7PkFhdYEAscGn",
  "key4": "3g5UdJEE5atvV6ACKhKFKo7tXW9GS7MrqsZnztr6ZtFRWBPsyQ76mi31scXV2rksoFaGAgm1JeVTwdfKk6gR8ZRA",
  "key5": "2KvdQiB2XX98vzfwYLV589sL71iK1ThDXCtW92s88ttbHryptFXdczgLzXuDfjmDA9uYesMrkz3wxDAhXT6yfC3v",
  "key6": "3CetdYku3nnPhKZtQSkF7a3EUoHFeckdm6i2Yo5oq88ixWgYvdG5uUJL1x2SnQqH5B3y39yX7Hr1YvZXYvzuck2R",
  "key7": "2jkwuQjNWWhhocHhrQkQu6DLKWCksTMMR8YJMFziM7ruE3KNbmbmUA9mkWXVR4ZHUpjoLtA9GNfgTV5FX9eU9HH1",
  "key8": "46H7LekC5M2icSvHSQ6wYXd2AQNKLukDpsFPNpovF4Vxp5C5QGW4ZyCSfZrzewmFGpL6cbGoFLmQ8Z6J6xudu49c",
  "key9": "3wbXeeN3vhrfeLdT3AtzrMj6LzJLFDVKzJ4jH7meX4LvZxppddbnebgnhcKJmXdfKyyPYjN3eq3CiMYknJNAba4U",
  "key10": "2AWQo31NkWvQYBwwheE178awYTTpSpdKxG2mn8nPTKpUEc81EJ4tERyMd6QgSj2pGRmBKmgMGAcM58T4vGBqvUTL",
  "key11": "CAuWZCbhagXv3bKY5vsrb9cZD6RyiaZxuJSbq5D9SWzedPEQrNZrPB76AV1CqrWJZJGfHSBmApoVtUyjv7WEmgh",
  "key12": "hbb4idiRgiViXvyK1r8VDxTnqmfuGaoExJiXzyYLPaknqcYbukTJR2dPJaxUyxvBRSrhdWEuh1S64K61JFtN7bW",
  "key13": "4fy4bwGajU2hF85FJwaE8nKpNk4g7zXff8m8qh3MkBra48gPNWTSY4HAUen7tgfMeMV9YjbtcnMDSNCGoVaT6C8f",
  "key14": "21m8oU5RxGVhsb3WwKp1EGSJ91LWivczf2Z898HGrrAfMigW1NpC9txLbBzrBBPbnCidrXDm6Chyc9sg9SrWBq1r",
  "key15": "wn93hUTfakDQE6bmp1fbdNdBe1fs9BUGctLU2zFiNghWo974ndFZKnTirFy1rUbqJqdscL9oEa8tAfAG9VFZZXw",
  "key16": "C214fXxBVbGvAS2BswKgQ1t8hDd5xcYDmuXKr2ZnEx4d88cFN6q3nwT6wABzkBrv4LpfSnrdekS5qMdnsjvfn9E",
  "key17": "2Aa9AddpoHszVaLXSqhX66Mw1wXGiZfuiJwAR1PthT6iwwf8jZxhJUqzGc5WP9yuLcYmkDrDuHbotNMQhZtVLNA",
  "key18": "2Dm5Bv8c3YWSwnqEgbrz2Ph333ebp4JiyHi94Zj559Zi7mZCEVcKnYd2ufZnXW87mCWeLPDhn7tShBZkqA1tVUy6",
  "key19": "3ZM8AZ3vLE1yR8fqc9MAH6qqW8WUaw8Sj6jRA5WbrkSdL6jHC6A6WnKNpCuoF22fyizJk7yW5qCfeH6RK9erR7XW",
  "key20": "5jrAUetzJcRJsWVLFXSmjvsRPireJ67ZfUbGy4iEdx7zGmnhTbXm4GWWEp2zVuWBVoUpUMRP6yqevsHrRoGrADGz",
  "key21": "5WnWcuNtunHkwWGEhrYBziPxtHDgNGN4wKpuMeDgWL9WDcFyaSFjPzri4YHwznLwPMHTkjDFrt5Mg7Ry5HLkm2Md",
  "key22": "916cjgnWkUf7qRmN4nJ8GwTpaksTVHF7EHqhfvDK2uWeRvMZKyaWG6noutozHfq52wAxxmFGrtyZRBtega6XVRX",
  "key23": "5BUZiYqM618YcUCwdG1X6AGz8HWpJRRC4G9vs25FEpWbM17btEqod4cSqFVtMR4tjZi7vaXS2wDTxNLoRbkPFoot",
  "key24": "2BHKc6BgpbiSRB8FT7cRVYvWicrasWoDmjrMGDeRhv72CMw5sLRh296Ce5kVneEtdDgYBt1uL6MQt972bFASdbJy",
  "key25": "5unAyZdR1BffKFdfBM6vGqsUK6or8giWjiHM6tpaP3TMWfp74cTeSx6At2HNuwMPf55wJRxKqz41q6BsuaBzsMZf",
  "key26": "3A6pwFsbKgJ62e2LPYcfngTusBjAo5XM95NWN33LkhJJnyFZJQmGopppFuUBBtRA7M3LACdGPD27qhB99AgvUoQU",
  "key27": "3ozUt6EaxTYh7MG1wvmFMRZnZ4JX8hBdd4qXBHGxvDhG51yG6665UdsjWXeftmXzH6X8ZGuXr2VQ2PCMUeeeawAB",
  "key28": "4eBjRJxPfrdbjLPZ57hk3fRwrwqgu1FbyY4AhMxbjh3iQnGbUvdoDGawFmpf9sBkF9JS9HpNjqqoZVL5A3HCG5vP",
  "key29": "3wJcKfrN4erHbzbRzK5X6frVBeSANZTFVfygnJM5AdYQ89divwYhkCZRBY2VhzdCFxhLTt7LYmuyG2gNYXmM95Ad",
  "key30": "4SbGyoxkaRSDtq4E13wx1GgQh1ESUcmhjqbpHSfmKta3s45B1VFmE5cwiqGFSRHZPDfzHsCz4sN2yFpRP4QKDX88",
  "key31": "3ohhjMZQmcMEV5iHcRbiVumQRqSuTkCnUwHcJDrhe7wZYpLWdxtgsdoDWNV7UurnRjeLeW45cSaUeDThB2q77mX6",
  "key32": "3rmzZsRDWvZc1XgEjfZmCrW9G7MLRD5Rfhd27NXAZyTUr7wFBg3jfwhUVwEFmw64mmwNKGR3icJcL7AqhtPKEiGW",
  "key33": "5fmqiNur4tvttrXV7aRWevDfwRJE6y37uTjccV8dNXxuH5aKcrmjyD3TUAfQzgaSuy98d1BEN1jezgwqusdicm1R",
  "key34": "uAv611dggq12M1rjcgCvdvxDHhLANeWLj37LntVnZz1MUi1DtzNBfPfFC6UUEwBEHKRsn7WPCwZU6M5ygAPqGTK",
  "key35": "3wf61VzisP9K8B4vRHGZLQV587yGnPirsYfnXRKKmnx9FGpbA7yTpCS3qdkGLh5GQhUCtRFcym2hpfEgKGmh5KzW",
  "key36": "4MmQcjrv5ofocXwLwQwPAoCn1nCG4A485RPfy4oDQLh6we3NAPwRRSAgkuBvSPGcfc1cy3pqYwQPe3GQjHWZqcgK",
  "key37": "2YbpTs1NgWL7jrDEQ5sR3h5rBKqkoWB71U1JYdUW7RunarH7AxVEEdrTvsxgPqy2VqTW9xnPLNbCpa3FgVah2pB8",
  "key38": "Ghkr4dufwYPphsA19Wwzn1y3SNDkPw7kg56vMYCTMKt1pEqjN1cP1amLzyP5pvQAWzXvgAYvaaEsJC4TRdX1aiG",
  "key39": "3W6DCmCmKKVFgSZpcFZii8jZTeHoDyJZMT16RRWgvyGUqZXmehGaomNV8EU6bF4AsYJ4dhSiTrg8WWTRHR5CULLJ",
  "key40": "4bDAkXY2tKyuuMV3EDtXTaL5TqKmbiJQBVJv3zFZXa73qGyeKEm2WsxwN2dGDyE2RLjH6epQeZ5MwSfqAgaHW2qf"
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
