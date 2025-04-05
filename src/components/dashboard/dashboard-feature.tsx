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
    "h91A9PwLQBivrQAetVgmFJrCfeJPbCFbQDJCuuQ8LAhzozZ64h3AHcaUzPKDV1zoVUuwM9VfYMChWgTkiGah4pK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LeVrXfJ8HNapPtcLqLWr8kL98ZT6TsVPUZzzvCfUYwxzrcUXgYpMtzwg8dpUkDXh1nT5s5YfijT8evaGw7dttWe",
  "key1": "2jdKYoWMDJRoMNWFKGXMym4Nbn7Sz6NurKnxKAfMqPC9Vd9gfk5vw9FUQrr3GpywTgNSjohsLPS1TyDFyFPNLEv5",
  "key2": "DEg1SdQfZtLRhHh6HfBmE111Bb7YGfzL91UTiBtyjHm4qYHAAi3fuKMexukb5pcX1rUbYr8DLnRkHbhyWHhzQhE",
  "key3": "5Q3oywS8WW3Ex7txArvTf2sTNBCC58TaDTpWoq39Yp8h2KLcTMzDEYxk3S82fEPMM46FPsou7kxeYUAfg6rYfrbC",
  "key4": "4oLk2Fxpu4ZoSTrKpNByoNxhjAfTV5dZRNK5bV52VWHYEcSQcKvNbqkvB6dQaAkKScwQhh2AmRmsr36CZUk5iSdi",
  "key5": "5KMW2keFJgUNd8WQ8C3dzoNjyPvb5DocemCbSLkR8DTgpsdQX4RnmPbWNnyNK3P3WU61wCsYVV6KkJxM3R15bykz",
  "key6": "53NzzTTNEFBpyRuDWpRL47EDa8YygFMvocrMfbjnAVoV9cQCeDbH4F7MyRHXwQzpyfmMg2G4unNvCmFUxmmxq4tF",
  "key7": "4sYkrjiaWm4ePVG4wgPwiroW4sNa9fZqvHmBvx9j4KTwkSwP9iVLwqXYkEdtgfv1HxdQm3fS2ojop6mxPhHX883H",
  "key8": "4XtagRWh5ufWa7k48R3FcNqca4BCDjtCzRXqQqmLVrtsExohf5rDNS91FivrJYUmowUbQZ84RgSrxcP9eQwf8nsr",
  "key9": "2gpCg4iFp4HBU2qzdztnnk6Qyf9kTGdRxNvTHmsh8z3bBazMEHdSmBw5W2pHVaBrmVrh7kWU43FKhqhfj2j7Hyhr",
  "key10": "n87u1TSTo7rEU6TvCU8UXWeC6QGypL3V36cRQSbKZ7PqrJ3R7R7vDsGp6ek8asPy4hwX9CoaJx4nWRePLjrd4kX",
  "key11": "2Xehqoze7VjNqAnY5hZ7Ty8Hcmftq6D9p7aHNzikyhDgdK793rYyJ2X4JsbXo8QtfBBfp6UFNCsTiJBfRuF4RGyW",
  "key12": "iq7y5r7CQFiY7AK1NovstJExMp7xErpRMrnzKUX1qy4shYLynaPLuTH5PBub49aVStJF7uueSr5Cn8niczWjYaT",
  "key13": "5YxqNpYrmcjRANnyjMPywFReJchAPjiwwL8xRZETRX7uMkMRvknAFRoiJB8k9sbenYyHHrzpW5Fp2YdkMFsLw5Hn",
  "key14": "NEuvoF6VB9Q8U48fjbhebyqdEXnKMJubyD253pLtZn7qSFdxi9XojuwfW9RFGXZpzbSQ6G4C3nVKBkaUzPCLYJv",
  "key15": "5cet2ZQJZsnuX4bjiqAGrtZZZ4A5W79jQaGNdFnJqjZq1YS88x4GV636K6tx9puA2o71tqoPkJXZb8U6chgA7JGV",
  "key16": "wPkqAyWhftd8Ljcm6vGtGB3dKNfPSfwB7nNwsjafedDaymPwkMpAAqoeG5zTMDJj4UqoyyYmK4HWxsZxmTnrAFN",
  "key17": "5et9AdbvTNAt1qYFgfs7tvYBgACnwm7gbpa29A2MTTH5ysPfkBHg338ynZTyRug28PJ6dKxnCokhECTtTLhDzwsM",
  "key18": "KbcqCwt4bpVbS972fdGNc8DErbinLuSpdBJR75bRFX9vmBqUcjEZTAMS3m3wD9mMTEkvgg3hsd2SJusRmCxKjDN",
  "key19": "5Emmffgi5pPgnyDtpZdubFB1Reayj1CMDrj18N6soV3xJSxTdJWKbsLV9WzjpFTsXwcoknGuYRNj4AvySt6wPdW8",
  "key20": "5LDQvCBd11KXeWcd3waTqaxJ37XrZuLrcw34DYipNzByoJCxauo8TcNML2tPBj7rUzQerHYb2Y8Pr7tmVbcQy4Dg",
  "key21": "5v9pyB9yNWx988ZuEcgfZFzvxaskNoof8QYMWC6196jcTHMaJEhDAcAEGnsxkPVENAJjN44duz2Fpe27LGp1z6ka",
  "key22": "25SUNvXDdXV5tmnrEFSksEsFsnW5zSLFBrarMsFDki3wh17ucSmtFC357NmrT7t7i1i4DEhqBH8H9QFo8x3kib9G",
  "key23": "53SE6sPHoDpW6ZGvB2MPqDPjR5uRwqQVmT8MRteQ4hkiGjDXh29xAHoCs3ruYGo6ugAqkj8HKkUh3NdBDHTA3FyB",
  "key24": "5kw2voftxE7iLmCRabtzWpYcuYBdprZGNGfSMd9HkrVdCuk9gXw4piqaojj3i3jF6wXmiXUELGXrKYHieL33dXKb",
  "key25": "4fyQdviG8jDzxBgA8YfLmB99yGGP2hqWiqcs1nJJu8vKNacMRSSn2CY44r2Jb5SiVvsy9RUWBYUK8L5EUWrWw7mT",
  "key26": "5uBayqrKrezvNcMmoNyoWkjtknNFBie47WnHVo3VfKSD3EcAkKYpfdUD6URCY6qTrMG7coaNBE9WyYt997CUgLSn",
  "key27": "3qvMNpqqbkRSJTRtHZTTVfWrLARMKmTzwFzjo76QgZs71vwAph6VLakcATtz2oZ2KnnQ78u9LtK3kP8nHP5LUJgr",
  "key28": "3KK57z6jGai5jH9K5mhwd2yXajKJyGk8ocsP8MijsfGG9UkQ18xWpnSXYbJDt6ndQftibuRdvhX4VKkeb8rRhFqn",
  "key29": "npf9syG66DbiFdu6HPdEVPef5sM4cPyqnuNU3L55jdfHLQrdSDdbjCodkBWQ3gyybp9XW89t9WNB3TVCNKjxNST",
  "key30": "2xTZ8YyrtSTF7XTMtyHF9yCH5Zs9dwKgdwVDjNFPPZdiEceNRUT2Mc698QyDgZfVHZBdKbR79rFJk74db2GgyYp1",
  "key31": "eYwpqAt4EgynVE8LHjPkeQn2bmMXFzfGRH5AnQ7TsdsekawfBvXPzFFi9WCNcCkF1zM4tKVHKimjSyuFmiNNEgi",
  "key32": "5KnfMwY18LDDn7rT9VYRu1gmHKa9DFYRMfj2PmbBQQzXhsu5R7T2rDXB9nCRPN2SFfWY7X2PvzCdhjGZeKvtX9xN",
  "key33": "3VejahQ9SAT3gge5oNPTmjwdQmmsZAfZaZ1t7kNm6hQvQky1j1AAZH2wmTTpnjrMpfuUGQwyHNjgy7pACe91wzCB",
  "key34": "soGnM1gQ9aif2w7JQDbSpZ43PW3s14PgSXaGxC7R1zjRZuew9eSW2ATjFqyFX87t4xMyqn5hd6EAnvrB212wmZt",
  "key35": "s1XXS2iAWW9QXnJXMVqyJrLCgrrsUPcHGYwkHbwoJ8wKYbahm6bPUy2mjaR388Kj95Gu8tzrSSEWmh9Xd4B5G55",
  "key36": "ahi3xtYCFEcCBocZhtMbfkVWGiP76VE6yrS7azqs3a1fYhi97wXmCEXLB1cegpdZLstemaoTNCGYNdnU4Jmator",
  "key37": "64dKggNZJaMDc2qj4hP3f8kHmBzbftUKBtjkKYHv5W8jRUW9FccPFUkzokX1Pd6zrzpQzLp5nNoC3qLrqaaukpSo",
  "key38": "5W2oXqQLas12JMeVArpwGWiErBGPK737YAs4LSEUeErdsQTCS51QGBKkDx4ckJBZuedkPC31tg1yiaPFjMNNoeFW",
  "key39": "4nRX6RizrxwNfPt429iGsFdCXdENBeM3oFz2P3yP9pGM4mVXWgKdSRYSTYhhxrBDtgVJ3qsxNVME2vEWXF8gCcyY",
  "key40": "22pHKjFHtZ17QxmSz9AhyqqxXRc3WRejM6QFmRVP7c2Kjoymr5qDk8DyKWCdkcGd842tC8j8jpL1kL9GbWMGzbdW",
  "key41": "589u1KUqpjGPjsbj4Tbpa3uPYwqfphYkJP6sBSDzqjGAqK6fBFskFSm3ZAQhjUZEfBWrwWT4jaUrQkQTTr2Mrcyr"
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
