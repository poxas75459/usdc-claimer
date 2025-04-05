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
    "54joREm4AfQztM6QYvMapmuqkWuoGNCzbeXbx6zucu91rrkpn5LnqM9goMyg2xDyzFZ9kdpNTHEgQotkHec11Vt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HNuprAJ6MkHh5UE9cRkP2GSwQLbV4xJTW48wEZmSUrQZ78vXHbWQENEk512TvN8UwbHzsYGxKjyanEhMVXjvdVZ",
  "key1": "5L9GgtjNb4BT1k6BNDBSySd5Us42NWWP2N8raszo8b7oSVJyThn8TG8TDshDtB3AN6zRrWCScQ2GxJd6dPZT9j6E",
  "key2": "r6LRoL6v2Lt6FLj5zgHZmhZ9bvxgW71FeEsg81y6B1hD76XotnsYKpdzGQEQQCaotbmkZiLhwJhenMoppn22Nfg",
  "key3": "4veD5vTErnoiJnVCR2drtD6QpVVHAtVnXkyNXtYetDFdsQfGKWdx3bXksDwmX5NZ7MPL6ZxDwdLiuPVuZCL44opY",
  "key4": "ZYfuRPtFVaiHZKpuesfSzjX18Wp4D1K5XGss1BpZvXCM8rFJs2KH5xSYvyDDoaWBGHgHCEJ8BL7coEtAC8kCgHu",
  "key5": "YfggYXKGNf8ocEwxNJaKMFemcDz9hyPiv7KRGxq8AwXxFu1MKrXDzWyzAy6NEQ5S4Gp8qoTgJpuHQ2fcNxi2XXP",
  "key6": "4jbM4y97FtiNPjLJu9T5KE8wvgbuemcBYU538WpxvfcqgAaQTPXUC4HPLswQuj82nxeG8rXyci6hZbESk1DpMdE2",
  "key7": "5tsGokcuNej7wiUZKexDvBkfhxKCGx7SWg1YSHo3MC7gJt52i7SWsZ6Fu9xfFBXkWDY4QxKBtK5ce8rDcyDDD2cn",
  "key8": "2jLaDsLvJBpFqJEnJidqC2fPrYuSUXvBjYgNY1S7ibdtWSdPVP838eSYMZx1EccsPChgYkTnnbWMTPKb8YqzzE38",
  "key9": "HM1wNkCyPuQmAhtmZX7X2J3KQPQvwiAbVe87PBnDMvW8c6y9iqmJDtBeD2rgPuvb5WXFLAy5osX2CDPfksxLw8K",
  "key10": "5bkzyEGMXezwQWUuQqpnendnd63YjBrwAwGi8jCgMdzdY9J3eYvGjBrEV7EJP3Gh9sNVV7chZLk6TbW826MLDn77",
  "key11": "2d5ykggcmFcLzetjNmrKvuSmvJ1hdEovyUxmZZsBzhta9wJwttt7TTtX21AVXsbheEkdFDCftg2J2gWVuT2NN8Uw",
  "key12": "53S1LjvkxvnwpuY8r4AhvwmgYMdCkWJrpDTCcRxJvMo2i9vLS4JiLuLyknzg2wsuD9fo1qWVgzw6LE2gdffk93kY",
  "key13": "gfMR7hmSiGox1EZ5YyMfk6fw3xdK3RtWop3ZLruHGMzt48xhyxU56ynE3vjgPCrxdxq8fB9Svs3wgAQ28BKJBcF",
  "key14": "2DsCeo3YRPXaLmfPCxJbSsQJMUgAG3LyQLcYG2BW48QwFHqFtvBfGYsprNKgiFZvbK9rtRzu7Mb51zHmVpxSc2aq",
  "key15": "63XhWatQ41gBrkaeqtcharpj4pGF2qewSgJcQKyDGmNdmhxU72K7tFRxbwkdnPa39QSnzvKA4gNaVST6GsGG2LhE",
  "key16": "3A3YYe3eCaxhMihDxqy3EsQ4rQLkrUjDRWGGmNrq6ytEZq75N4tLFp5gbPEP1j4vDiZtfJ2ZxX7cmWk6XvyPTfJf",
  "key17": "2yufrkxmfi3Nx4ocm8x6tCHQ9qbNd24DZBEMtjNms5jVkJfRkRVeBDTUJPMNxWsr3VcbYcBUunVVc77KVXCKjFAN",
  "key18": "4z1QmGgNQF8sBr64ATgc8aM4Yic3WGzBE11YY8diqRhcE37m2fdVaZrXZPy5w1YRb61hY27mWNejpNey2efWxV9m",
  "key19": "5wbATUgPMaFnHBDPYkpopDMQTAoN43yiCxWJAqi1e9tPEGJaepRS8KSonebYq6tAEihV8vCQ5AQPrmWm7NbouKBu",
  "key20": "4aeYqXDNS94eFHoPZbDtLemdHcoY39fyZWPBJw9BBzGby3e7rNaP2oBXFPTV6WpsduJRCsCDfQBFd2uqTSuBPu9U",
  "key21": "2w8EDLWQUNAW1ihKCuXocpx2oHk8mQzfASZSnCHLdUyZ5N2Ni3qER4jKjVboCHbQEiQdyzf9A86XhoBN9SQ8Scbt",
  "key22": "4fF2nmzC4paYTFQMVzxhce1bEKUt2WsSZTJcrdEHtv65VMFUYTjegs2TSX7QM8kxxaobXd9cQhZ6658XnBgHv82S",
  "key23": "w7S73FUUZ69gdHezQU284YtJtYb2bcQY1kuzJRNujUS45eDi6Pnt91UF5DzAGMXuQ1yUhqPCnFVL6VZULrK35YE",
  "key24": "YWCMu3LrgFfcrUdMULeCsqwrKzfvLJhRkiePn35ZRgMimfx8VdyVdhdDZckXM5hYW27F4yMPB4vkVrzKcsiLVSZ",
  "key25": "4m4EuoYviRVLFMGq3njR3qLqRcN171Lf7ng3kuhWiKgst4W6dACwK1oDhRWygqewtc38SNHNwLKEWaLBBaUk4bQR",
  "key26": "5TR8eaNSmdcYUXbJRafc5adtGfUMLVC5J9QKKh5dEuZmuATXcc24VXviCPxi8nptnmgoQDdzwHLtiB4119XjwSzd",
  "key27": "48oZKpcLQHEQkczUaospmMnLe6p2pSYyZ9oFca8b2qykeHqZbjUAKh7P9tn6ZVvQ3bUF4YUTUdS524vAk3y1zto6",
  "key28": "38RkHzJX3AvWbNAwSZiQ3TvzL8hynRd52tbH9FgrtfMmDjsQ6abpY5YcXPxTKefCMWhTXjHcPzUfT2MVqTP4jPf5",
  "key29": "4mHZ6BvFdTdB9eAujWLCo3ktpSgc3Lk8uD4GH8amQhqD67NiZHzwcNuPqT8KKJ33jdArwga4VCd74Dyer2BLBxrA",
  "key30": "58ptUiHhwzBNvLxwMXveEHcBgr8kUcxKNvrpw5eNcEL3KXNGM3w5KCBcz1Mr3x7LrPs4ySEgHhfruCRkpnEsUMFw",
  "key31": "NrojGhzCrY6ZEr7RxbTBBibQjXHwEg8xThdDBi9ad9ormw5GehykkAt1oxAjQ7KNBWbEWwa9WgvHFK6HBLs55Mz",
  "key32": "3WecfKUAPp6vrdWLEnd2AmzkjxfXnVMwLRzmKMZFBG11Eouep3L9r14tUkEajJb8Np3eopwSrFYtDb9nBbG1N9Gn",
  "key33": "f3cMLJGVvTZxNRMFt39isxvaY7M3T47m83vV66hrhDQLUG6cv5Zffqg1NJYCVR8fCSe4BcCMRrCTZbqiqJcirh2",
  "key34": "4rfG1EAj5CkxE7v28k3egBjzwSeGz4gu2dnbK5mdvJQ3yd6iDKTLghaCQFQ6QNAVSGRg5mfxhxofJfYn9JTmDEF3",
  "key35": "3RGk8YT17MGsTWxyLB8rsAbtFjVvXQKLC3MnXeyLwCXV24pVaU1CBYBCFoNBqmo4hbp9QniHYFEE4JxgqBnHnj1E",
  "key36": "5rEimCAnhBAhLdxRzXbb8WTF8Nkx8xZdMGJkL1Ysqzp2h7uZPciSzPcraBwYLEjJHzV9fgzaTz8e47zUn7SyygrU",
  "key37": "4oKq6ChYuf38sxiGiXfntDLyrkEVReCKykEdF1Z4RUVxd8gfQPsBVpJdmUc735Y1nxeJnGNifXuLc9Bsx32dVUcX",
  "key38": "21HZGJtXGPkVw19wGrGeNe8FjZ6cRJ4x6EYCcHT5Mf2JaadC2TKBuH69LrH64kiMpC62TkYvorqqGY5v2YX1MyRR",
  "key39": "61dqTmbYcPqBiQi5oecwJEhuXmNpKEyFCfWVUYVDXMGr9CaxgHoW5BY3BjLdEm2eEZoUsUsZweoxbXdCkhe1yFwN"
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
