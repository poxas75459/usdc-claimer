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
    "5whpe9Vevp96QxMvmYi3BwvUWDwoY41Ye93RWP8TcqDYL4shn3WDPGXC9q6yw2CpCjhMXw3RpkJeWjovq5csdMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bQMxsqYVXwFL55bNqCDdZAiLRR8ix2kLkXJ4gyYNZaMhVmGFXqqX64VSeaxYJm7UQ65gxGpYKsd5TcqRqYgr2sM",
  "key1": "iyQd1MuHgBCHEiKFSFfYFomD5APs1wjLA3uwAqJkE6iAARYaxQNiwwGho7YbQBTWnnr4Z744rCvT6hp7vJ5hL3N",
  "key2": "2qKxKQHQwHHcjC22zZLyUR5jBA2uhtbRPVADoscR4ydmE1Yb4eXdq6cARP13Q9xAYSCkJhLed5Eimtsq58yDpKUu",
  "key3": "61toweXJpUR3Gp8DwYVPQwec9DSGXbtwzbSDzXCBUTvEonQb9zXCrz1WH6uzv4fZTGKiSesKtdPzqCUHtSUoWRbK",
  "key4": "4Rw3SXsNpcbUgzWZLtX4AB7LHB39xsNr1WKdVVoUhjMDUNid7u32KnFbzNrNFX94yJ6H4b3j54AxneazUasqaZch",
  "key5": "5jRAMGDZhCq7txA2ZoZXWVjM7Vdh1wARgKab7mV7nH6S1Fp3kjxZ135P2BCRaYjbDfGixbN7eMNmAzp5GPsgMhHa",
  "key6": "kkYYvks31LHtDZEYjcmUbmnTbyAdUvZAYxmgwCs8vsvDJvNyaST2ZZBuH2ME5Pra4zHHi2gbt663GzRE3edfZEL",
  "key7": "4hD5VA93PwGpBSvZWyabmBrv2bgUYX6o3DFJxVHbJx6HbbxVkw37XQGcjW8XyK9WiBb4WLK2aFxvDx6ZAuUFaABK",
  "key8": "dv1V2Lmk1ZfikMR7DTrKyHsxM1ZqePcwqjbfafTHf3qKszAsh1VAnKxLkpWrmenn5Uuyr6eappQs5XqavK2zJgx",
  "key9": "48eejSb8zZXd3QV48oVnieY5Gu9pUmGyfhS3bRJJhL5vPaC6GibpjudoQdAeEjdCnGTtgk1dtiAhYtCoBBW6WoDB",
  "key10": "4Q6pHB45To5heayv2qjyrAbPxDtaZj6EfpsEjktDnuRKUVd5oDL7wC8Gb9jPyNHHHAA4gs8JzkgpsBfQ1BYGd7ov",
  "key11": "5JHvKzruV1E1yvkNxnFsEvXN1f1RPyiZwUz24Gi4RgyoVaMKYg6e4mZc72qJf6oNgezpt9vszJrcEkauEqP2FfsN",
  "key12": "4pY32okPDhb3U9eFSkmTnQrCeQ3uZfd2chYjrJZiGabUwELK32yneQWje1L1K9ULVwQYrZVnRyN4nonqm1f8kRCW",
  "key13": "GP1j9r5HxzwfY3LZ8Uz8Ws9jAxs9esM28RZAGLG57Ce4TL8mmFYeiTQhpS7rX1ehe3LcZziNwzJN4WTNynkKsmA",
  "key14": "48x7y5PksYeKyF2pBYa5TVRD34sJwpbs1Epb2AfwMq8ptdFDHt1Cgk9K4RStn9BfirSha6tJLxB6mdRMhKDz1cCH",
  "key15": "4kJYneBr55QhMdR8s2LtMEzrZ1stL9cP9AHo7WnNzkPG7s4kiEUsL2PNyvpZXGwTuEsNwR8zp8ynUtZHC9DeQVWC",
  "key16": "sg4WQANFADqZM6NAzKRRsj7iLAcrqNLRyRk3tbE5fMKNbwiKR64NvpbmAkBMhcrRY13o54KCFwNL96n6WBkYphV",
  "key17": "v7Ze6QJx4WfLnLBN5uMnABdbfPenjh5vkSeaxuWx4qzU6jkrKTjfo2uUT8w797MtfmNN9W3fLroEbhrxq5fEA9F",
  "key18": "5VwKxVPiYdm9eygsbFZ7xV1HFUkh1jjFQ5hbnuxWRanxCpqLk6yfXXJCzUbhLY22UDwARQaq1d9fHCbm9aAhzQ2D",
  "key19": "fUyNvXwp3jnhtFnVdjtbfjL7VxRM442zrBJwSqA2r1syPvRW6yrUHn8qwEpiCrXsTheQqcuJd5m9PSYE5bqdZDG",
  "key20": "5Hz4Qcw35yFaGTJcfkTjhWp4RLuh7oTZDKQUzXBAkkZZyxW85D7cQpE1HWSyoTEEcFuSLaH1d1KoKUC7V4UPqF9G",
  "key21": "3JKn2rwJZd4Yw5ed8QSabbcBm4WoR9R9nw8eR6swKiP6HbQTqFkZXz7ZGCdxNv4LYw7B6PahRYziKfxvwwJb4Pap",
  "key22": "sQPNacX3bM9DPwnm5Ze2Re7aidjziU3fUtixyDQgKH6cm3fkDQBE1g3FssXUgPfn4gYvALHMACuhjEyuyj3DYFd",
  "key23": "4EDUNRCh2wQjDPUskZEkggKXkrg9T3X6wQvxQ2vqjUrnTaXg3BhtU51CUvajLPmgWyxwpDR6Ee793epmFxyqMxgf",
  "key24": "5QEWjhCoTBwGsUu77XBm799uHHfqnRigc4t4BpUySG4zoPboob1FCNQmnGmf6DAcPHLuntKkEsudB2YXYyim9Z6b",
  "key25": "uQ9VMxhGR8jRKzRcJvBqyNN1atJsB7UqoxK687UefD9RtCREsdkujKLhetF2hHhiE8aCKDFWpQzNiKwxbzWg8uc",
  "key26": "59tfXYjYwprdZKX9hswm9yhKxNxTMHVU6Eo8T5zkJrxACgy2bS732eAeQiS58h1TkT5BGP9N9Ch9MRbM2swWgzaW",
  "key27": "5dX6ArLkPuo3FGtKRBzRSoZQGJ7nmRnVkrwuWBWNeJc9bwN1WjZYk5cx2y3TuRnLZHqzYQoTVztcDJNegeYyWAfb",
  "key28": "3ugkYdN4ZDKXtv9LFDG2MUKk9F7ta6cC8pCkfW84f5iDHHL1Dt8QYr15ixb3VvSesQ2WiYQpa94aVDE51MEYuZUk",
  "key29": "4uBWNZmLgTy1g4xwNoAvTVbBPojkw5yqRCuGdad8TYxyRc5M7EvfAEENidzaSzByUowCLkPiXvcSkEzinzVV61hh",
  "key30": "3akQPCVZGfqUkb6JBSRCTtgLJUGvetyBrYGgQykShp1P1XMMvTCM5SSeupwABu9t8bBZ8ngL57CUmL2SL7xymaeu",
  "key31": "3LBVsYeMrkiqcyGSckziq2vDu4CREjwDNwN7WbgSCCcT9QaT3fy1oxBJoNcR5bRTXq8dP84a6BMwg4Gd5wnUMMiv",
  "key32": "4TrzPRovCEZ8ExJZxCeLpJheXaJ594VanqxnmWcD9aynvzZjryZQLicuQMNRmWeHvPqvkngWkeYSbRdywirwmiQf",
  "key33": "288iC6jocBkYvMr78TvFKL3bHzcpfwyhCDAR96nggdPRD64dsperJ3hzUEgm8Rhoh3KsdnArSWtnTZHstHUxYycb",
  "key34": "6QojGdwxSRoe8P58AFAe9owQXq8oYC95RvopXDmG3V6Asx9c4Yq5NK7NYkDfcMDR2rvosybDdscc5Ymjq5n23UK",
  "key35": "46WH48eeH6vYbMEdHQCgGsZMQbDpREJ97vgeqCEeoXJH5hVt1K7H9cPzGZD8GZx1wKsXjxH8ix9DXZYPSjs9X9Ja",
  "key36": "53QptTnB7bdpFwjBUb4NrLoBaULus4pS92WmqbNvhGwT6eHtiWTED9R72Pio3feKZUQeswAba18r5DN9rnaWLm2B",
  "key37": "4ixRu8wtfUh8oMUqXUi2DXBQnuRT4vvK9xWVim8BbXRdTGYwrqccAbSGxQMhZgUGc8Vf53GfWBL33JPptaHnzDmf",
  "key38": "5x6v5Z3LPmCdkmVARQ5gXbdwgvyuwRiNNxqzkuMKWmNqBd8JcHyh7KvS525DL7vQdBzPtggVm9TurR4VDPwMBYuM",
  "key39": "zsGopCaa7vGPX5gbKBVxe2ZGSrTBZKZTLWf1k3U1FSFLW6qTHSFYisn5RWaa6u5gM39N7YRvqMpbPK5sco5W26n",
  "key40": "gr8uByRjqJmdburDfAXhgcBWZBFYhyMamGzPVd1aFy7tQXSRzsg1kqUTGtgTC6ndJrVDk3nnBD4QGUZisruFob2",
  "key41": "17FdPQbPus7vGvZzyZTXKaMDXrMTfjv9V3KN9xMbZWdHU6nFQMxYtQ1ribacFpMB2SBdEDC5SvjuuMbLZEEgRvd",
  "key42": "4khdk7SN3ZmWGf6AZSYHJ6uZVZn8mUAxmkBNvLJNiBU1FbmjgtETPQTvTyftEGgfPvUZtsrELLZn6DHXNkQh5PS5",
  "key43": "5J8i3cjswN85iihjUtSpKLyriB2KyUa9N5T5ANrdBD4BrY57Htvz92VHRPBJX3o8joz2KJDMxKrNHZPTBNHM6Ybh",
  "key44": "36xV1T6Fa5k5rymVzv31cL9KTTD9GB5iyAL2SrLKXrZwWDGr33qNK4sw3Pkk11beix8wVoeftft3ZEa6Bj6BVPuL",
  "key45": "wEQKDxUH8UErjvBZPzstvPnDC1gc3NLqsDcUXFdvKZNZR6vkVeD2ZDoWtbf2ufRQPfJkrfQNJ82ggzAQo3mbBGt",
  "key46": "5DXuSE8fW4cGSxsDmsLKhS6QHF55Ez4D73FRW5bVekAwcmKQ7MVFq36MH34nCaNbzeP6vY4pKeQAWnPQKadZLHsL",
  "key47": "PbAfe17z8ntqYaGGLqvBL8S9YDwYWPX8GR9g16Kf9FuG6QaakUqKmjhXosubt8mz813B7AqSMXGALc6pVyD3DUV",
  "key48": "4LTU53RR43GzoDg6rMDfyb129hyJRW8jkWji1rnsRNeBhPxfKrQswE9kpLrf8AEuvv9pC7JZX6hXA3VyYk8nYctV"
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
