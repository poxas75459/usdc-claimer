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
    "5oRAbdkjtgDrDU1uzynNk2xket1GEBgjN8mjie65BDuaAKCckyFidi2TfPavdwgXNz2NEW8dP4WnkxQCh3uy4d1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "477uXh4Qw4GMss9RGtWye5EsNu71L54vCfW9j2PqMCrvv8EWb9jHooAviAL6PhhJ7s5tJez8bdpggyBVavfSCkc",
  "key1": "3Xxosfh78eufdLaZsfYgNp7vJC3ASKwmEiRQk4Uc9E4W6yAgqKcBbCtXgpz6tmDqDXDoJpn7vpmHv5eW25u54rxd",
  "key2": "2QSDmv8BLHGT42ekTK1ZUq7dhEaFxdDiV29hsprBkcXsTAgRbERRmmoLnDfRNyiTDjBVrfkyhckeQoUL1GMh4cUY",
  "key3": "8nceFhee6t7Y5ZWnMCAa6v5XdXAJGdBScFANELd3gn4JUvgmCDznRKYYZ18GRPs2nrGTy2yJ27yoSWA126G4cD1",
  "key4": "3L41xmypJTFMoQ2dLDb6n39Ht1JnkLFeY1VV25sWxacsRcbX3tevcEmwQtB4umpbgZort3tkHH1wcVgVLSgXuRSo",
  "key5": "5jkS9dg7npah6jTAdy9JE2tsvpFa6Xt2fND51UtS8reCvxG5oUEcXDhdQXu3vCve8rNKe8jdWjH8SooPCbZmoSiY",
  "key6": "5tzSf9Dt1EyRWnnPR7UYXEjH5uVrHumena4WeaG6e4DgLn2RKz6uPWVugrc4zpyUM4dXLqRLWLa3Wrek2jf7RcLD",
  "key7": "2UfmhJB4RGMGCVVtcQCUD5YoZB1pFgyEHaUeH4tSN6cdBLSX6667nN3s7fAEYHYqFHMGuEiMMeb7Eh7RrQYxXeUa",
  "key8": "2885fNuSZ5x9EyVozWwVmGAYbmN33PJszYJKJDjHNNEnBqiHqCCP8EFotg5SGk5wtakCXJUrsKhCR8jyUwNfieyw",
  "key9": "3kMBny4p5JTZFsT9LRoAxWbnMSyWQTX58HVdKbjXMKhmheyCCJmBF9BT1DFVp93j9hQGNvecTtPZJSwCmgihytSe",
  "key10": "2QneQW2Ca4q3KYi2FrPGox1j2tfuVRx9QepLUcWxJEWBEtqArWRmjzzdDmK4dkJgqdiPimxRAKTee3E3RfZAcmfG",
  "key11": "4oWZoocsEJKS6zBA62VBU24jS1KmEVXmSQyQjkRckpj6uJ5Cv1F6STV43jNFTHugfxSL7FLvJnggRmFtvuhHwv24",
  "key12": "4o4sG6vmpAEYfJzgvUMRYmjtxvgLCDL6Wxk97bmxuuSEJXXNygtWFgXkKXpw4xhC5CYXuLZn4bsq4oK3kQ7E9455",
  "key13": "c6NTGYF3U8yF6smj6YPhnd2k3rwHDLwN88hdE477UbC76fFEdfqYUSY5f3FZM3Lx6nTQmBQvjcurb8rNeNTjy24",
  "key14": "4NxHvkNWDByzBjWwg4KSp21qd151g7Nubq3YkrPai1h7MLAnF2L6rF7tkWbGTKFCKWKQhGFGAV3na4ZkWMFnm975",
  "key15": "5YnnFwuyhGVxk4k1g7TRRKAM9azgV2dM7LPTWyn7SyqyEtS2N1sSQM9tXGsAfJxEW4vC9D6CxMSWy5tXMU5tQucV",
  "key16": "5RUrMedd1tSKAqybEsSXfWoVMGe9LF6BA8UC4rxFvPz9KY7PudJwSFfq8AVKZn8dHwz5iGhM7u5GHpKRcw7nHjMR",
  "key17": "4GLFcR5QiZfTWXnU5PH2c8iHJixqY6bqv9j1fD7Vsuk2z7btjjAqZs7UyB3jisUDF72paTcCrUp3Rt95VrQ4QXzJ",
  "key18": "4WVV6biwxmovtdUHF31rHiM97su6GE8TzikBHHtRYZHr9HiEsSw2EMXcU4Q24iyyDYQexpirqLj4KjnE6De3coEt",
  "key19": "29WA8G2R1fiWb8z7rRjYfq2CLipjhkSaCoK8QPA9YPjoeDFj7TVWsE538TuxXAavrxXTPKJ4hSkS4pXinLsDrApD",
  "key20": "4oUK7LPBRH7AwxnFuQuWedUoCeCn7r1YNuAyR4j34JKdvRWD1uUrjGumwQJQmbL1esTihznkREc2R2pGQGCFDfsa",
  "key21": "36K7GR6GrsNWvT5BsbHQCLvS5hukMKM9bNTkfCBDdimQT3UHkY3MfC9Y8RcDj6orT1eJZ8pLNF5BegWcpkmX76Zc",
  "key22": "4r1MnsgRusfHrqEkjBRRXSo2N5BPcw4MHB5HKB6Q1f9w4cB777uc9RafKyZ8vSaFRntUebPZfNPyDfMd8Ywb2Tk3",
  "key23": "YTKdKfC3nrgDrRn3C2i5UxJDzM1mAyM3EGHgvWZTrerGFFXkj1pb6DwSG6ZgYZFqzuqyb7gErwwEoczLuHdnU4C",
  "key24": "49FD5CSgySqPh4GEuHCvYLem6degP8L32yTZDir4eov2LJNXHNgdgWGaMmzC9TjVWfk7MhaQUPihaSXih5yZFjbG",
  "key25": "2qyq8Vqq3jgotSmWNyuTsxNHm38aHTqG6vRzBQYph4G9atBFoz9PXDqvsp8inUq7gRHy2y1PFLUuqZwgoqdbRMGg",
  "key26": "5jYu2MHQVjSR4U6DBnygBLpbWrecpokb63cnsysxkKxLwUckGWiEgf3889rziWjqF6WM6iMU8A7Mzwacq8YGgj4Y",
  "key27": "3amHLm8Tsapfhd5YieKTYpfgKkLpDuFKKCxmuynjWEZwRWU3xj2TgQHHTvzFCJSRg23FdpySLvBPoacouWynxpAB",
  "key28": "2mDWnHek9T1Vpjo3VDhB3BwP9B55J2BeumkNTzZH8KJJwU3wRyhdwwVYngtJt1ZcEdYVqpFxEHhV9RmquFMX5DHi",
  "key29": "3TeFXXg9MZ481gE68xYeL2JuzaDu3vGG18kCbTarpRAQ93xdiuhMGQmB544JjSutaE6xEqDDp4D1crXaGCX8FaHa",
  "key30": "JSfgx7YxLQtHq7PGKvSC2D7NoH1YwxQ497hrfKgVN47VHC9Zf6EV62MLaWok2ordEDsP59NwcPmorSaudfCCvbM",
  "key31": "34wx8ohtgwvu4Nu92pkbNm2urMYkr6ELazroAwxdXkotHBJ1md7hs8ZamtBU8mVytLmacCmRThbDVxLdhsBrjEpR",
  "key32": "ufbFp8dmcahSNWcT8Y3rLGqw3czuwEiZEcMSQ8yzJEEHYBBNrW59RqPacG21asdxw3kMtHzp69rwfimk8NwwN7p",
  "key33": "4M2mSfixuX724z8uWaR5rrQbKaidmUYHDbbqkT9Ho8Tmj9Sd98PNsYaWZrvQ9jtti7Xva6irzwZ7NWas5Cfygm5G",
  "key34": "35g61pfnkqsBEN324NSw5R7osFTy8HSgXrbwHhQtRddCJL3pUMine97Z96EHrYBXta9d7e2CGXywqSGoZaMYEENU",
  "key35": "5PqV1x3Ug3uiu6b2cgv2ZPXxfks9VTJRsFjnLXWfyVmD1bwVYciorH4RWPZ4F3zCUdve6WrbN94uBsJPJjuKyWxg",
  "key36": "2JzuXy4MFcBjfybBW8nLQSmR5eDpFhV5dw4EPBfejrQFkyUY5Xh1UFRSbMECZ8m6YDGe1JQyKoDMW3Fw7F4NhyYK",
  "key37": "3NMNXqPMMbseMGczsAL5uvNaDFgQ9WvXAA6gh6LTiEQzcNYLEMeYpGyPriB4HRTRjrKZvSjdZCqfRvkDxGzBhMdF",
  "key38": "GukEfaixvhwMWGR3eHo7JikmJbJMEwZaFFVbuboosRvhgzGQAFH62QMYRUgrExkfTy7xZSp4gdVqDveEDhtZtPN",
  "key39": "5hYffpAmK7e6AzTsvWqUjyS1K5b9fPzYcc532s34DtotJVjoKx2guGx4iFZd8BRSpX28KoeNxzTAkkSrtTLwVbyD",
  "key40": "2duZc8JrHag68dcRf6C28uH1SpK98WWVUDo86zDChWQ7V5qFtmR4Dfuha7CLYDCF9zFAMU1iwCDk2xhhCkLXiUPw",
  "key41": "38LEJuYwDdpiNyWz7z1Vwgk9vkQfnsNkGyegNg8bKvgegL7yF7DgMA3TbBkSNn4oSa1VkmJGSXeGGEiFrdmT68hc",
  "key42": "22WwjJ22mUQbqkKkDRh6EhveAfDVxJ85612xp3XEBNCBBcW9NnSjsFZJL2Nyj61UXtD97q8Mc1ZXChTsgGnUzwWN",
  "key43": "4pJbDq8on7SvJz3PKfMK1AkEFu2nn3prnf22gf7ej2PSLVhRJukZ6J9dGKPZ8tDY9QQgP2nCiENcBo2UnDVQ95N9",
  "key44": "41TBSCA2tUbsTTy7NJ7iVjnmTQSxF4iqcTNFeQrvziL4H3QevtnVpz8arXqdThz2jSZ5BoT25QKfYKusgPJ4jEyh",
  "key45": "PppxKqAgrut3hZBEozp8aAWxkzEkH3MVRs6wXZm6Tf4B9JdQ2PKxtxnYpLwT2QVp88eudfJwMnKPwosKzRx4k23",
  "key46": "4kb5yULWQqCJCitDLSEGg4KAJGpg7SKEGbUkNyoZKoBfZbo86GEs6iDSTGtctBwfGSzNr7ssXttNqjAko89N2tQz",
  "key47": "5gwxDweHoRPwx5bkan5f1gc75KnvZx7TiP549qmzHFYTtBEmkAHpxr9e38Nq4EZ9XhV41sHN3VSKn9RP2WJbvRb1",
  "key48": "5cPVWQNW1zwBqm92BuszzvSaMuY8Wcq7CofWkDuDqx2PYAVjiyLxMEFytaL6Q9B5baV63s6gcQey55e2JnEKbcDu",
  "key49": "2j3vUJp6wMQY9zdLJW7RVCuHUFUCfE9uTxFw6Qagvb9DcVSwkrEVFE3gnnDRXCSe3KFVL42TrqJwzLKiogGb8tSJ"
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
