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
    "65RwbjU2szXt21Tn97EvoqcNyFkjbsR63Y5B4sscagFpzizxyYYBFcYPrkNF6Aa4zYdDpXf6cDSidqQHLw8aMtmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25doLK7t1F5v9LPgUoTpfFwggsWzvrTZXD8bSnftfcFDx3VpJPbeGDhHEyKsCso8QGWLoDmkEom6oHybxyxbtbjk",
  "key1": "43ZqCfXAf5QiW9qxzeFWMMYwSqrKy5TJfNV9PMsbSTZD7SHfSsaeBiV4249c6HRz8FXhXGH8siuw61iURTCWUsWP",
  "key2": "QFFBFwHisBEaLsJ5sk2YJLUtM4YoywDELn45yUwgNeF5b77rJErpXNiHDoWTnSedFykZpCfxS1TMT9RJ4hA5tbq",
  "key3": "2b5JWhw93PFiYAjM9caL2nKrByYCfEMEDaj7pSgiqvVqqCJwBzqUiuEt8NnaQDohK9LAFeCqPEpnp66NTY5zcAkJ",
  "key4": "5H7AAYC2sPgxhfhQgxqKjCwwy8mp1QMfrTAER4aF8d3BdKoqrc1givkbQHHMWtU1GSWa8ZAkjBhrkd7zxXQ5uyqC",
  "key5": "3QCBSjcK1Brad1RLDwqV4RFDv3vxSvRdwDakTnPrwst5KxtbjRPfPmPmJtHCzNxv67ciBJ1c12paWaRbaAzpAfKX",
  "key6": "xvaPHi4xF12WS8nBBzADCgkLMEwKS2wx9Um8TiAYisGEiuMkbJsCeYB6qmEGJmb966iT5WqwRR4xiCaTUAGGCB5",
  "key7": "5cfwFM2mSpVPvth2N59hyVsKT6dD1wxXc3em8Mc31dnqMci8pddvWJwoiqyE7rKyZc3Hk1iJZ77cYA9h1fLrToWz",
  "key8": "42WQCxnrRdqoKviCtntmRnS79hXAvEy9aAJxyMdQiVNav76xFwCYYmc7BV8s4VqFSrWYR2wYM11rxCpkijw3bTpX",
  "key9": "2yQWfBHec45VnW8XccdmuifnvUNhY4fwKR4zkB49pNhmL13u7oZmvnyo24KnU1xfUMvaXNMUEbASfJp8ZcN9nnBM",
  "key10": "2Jp4gVUKjAcv42ndHxucsXRGRuLFJ9E9YwVMbZ6K6eKtvyEbdEdif2m9kjuMte5np4gsgHwxoi1kKUjAwjj4X8Gc",
  "key11": "5sxmUsfnmkeBfjopdwg1HCEa2Zj3gZiaMrA1bLqY8tGZAEBgHYxZajNvZ7LvCT6bviSPp3kp26natZWbAgBTUBnh",
  "key12": "4htTYfLrw4s6HDkA7xmpadyidr2e2WDqcfyWNeEiZJDu7FZ5RZo5Yv2vgfYm3GNem22PWisdAWZvuDiRTAcjUBDf",
  "key13": "3vHFjR4pfgDZV3EvwtYU9kLc3Ra9md3tnEtJQZTi1TeZrzJnoq4zpcxvq1cqCGohuTd9xAAUfLexfUS2ApTRr5CF",
  "key14": "3QnTvQPrcuZkWuG6jv9SaF5oDBUysnFpuZuY2vXVAvxuVVth2usq1rG4svkECPqdFBT99czn1FX9S4QyXVhvd1Ut",
  "key15": "3RY77ckm9EMxcZDsYa62mnpYojWotxbvGGPmbF2dkrMiTm27ksYgt5aozYvFfKD9GfzWT7S8787pUHEPJNPBWhe7",
  "key16": "4iSwE6pHCmxApqbqv1u2S4nGUmAjDD4Qnw6Lv5Mc1Vw5QqhLqbUEe9ETzUBesgUC1msQQ5iKy3LGtwvCbYknNcbg",
  "key17": "615eG8rFzJsVk1EJmJKRrjekGUtr9XqSnqWWrmJVekEGDcjBHa3yK2vHULChXUcMdPop2CbT3qKksMqmMLu9cJLk",
  "key18": "3idg56fz83VMnmMYvF7hHpWLXGFf9W9yH5UZF9NEHETDeNeLqX4diDSQaYcBFoM9Hi9VwW5HuYo3w43qunBquarF",
  "key19": "BzU8giPRwtez1RLihCTU99tWqB1EuakfxiLXE2iZtBejqtDGkmr7v6eu8i3yw6PSXEy72QvsxEr9xRVgAZh5F9Y",
  "key20": "fcGtMqQbMYQKvLrC2Gxbu86csitAGhTwgr8dssWqJMjxSrjvqXfGKaX2W9LUAZS9Bmtzku6s4AA564eE3jfaqEk",
  "key21": "3BaUcf5i4DeSYvbFBMqZpKJ3CiYiiP3wJf2i8RfnGAXfizD7VBfVUrhLPrY1j6hRuDb1s7FC84iamWs4HhF2oTF8",
  "key22": "48vjy6ivaex2qsN3Jx9yeHkawygJJ9yFR5SdeoN2wiAyVULNopcp76XcLoEpbSzAF16oAhJNUWxbzZkSP2TZh22",
  "key23": "23UxR5tJyX33vBKKwCFHSZxCaNhaCtDL478rSfdD9siQfRL1x5qoijGP1zzgFjyiqGmJnKojNYRzNtruweUi1Ego",
  "key24": "ru422wyXzVxXfJ1MD8uViWjQzN4n3GK81SwsAYFfANuVPnFFimQqfsA6poAsvJoQVuHK69GcUWCMob9n7t3Pkyn",
  "key25": "2nBc7doZ5gwLNgwi9b9MxvGhuuFLVpG36w7yx1bvz8TwSK5X5vpirjdV6Q7oxLtn1TRzrf1BjC8MXcoUzvBi93s3",
  "key26": "4CAXpYhMeUSeWjxJR5pZCD97Wt5G3VtaNnjgi4FAS6YuGfiCWC6VVNuN3PmpBYCuCe4mpejzhrDVKwweRN3vk8Vt",
  "key27": "5r763RdXFtiJ8CSCA7q4EanxnWCoCEC9ESfT8JnzqR5irSS3NgA354a2yMu64e1HyhPKNuoXBij2oPPbtb4phGeP",
  "key28": "3fjU3WK84zLrdRqUQJHQ9TMkAhXbUw5CppLJJRsr3t2Bv5xXGM68eUdZqM5pRk9gjat7EPEriWxgLa5qqKYBqHH1",
  "key29": "cf3uFtZ4UfGqA9j72WdvZwvr4N7kVhJtYZwrAUFy3phWGUZoHbd5ERJsWS4XpTWhPRoQThufFTkhQHBuXLvDyqt",
  "key30": "2mCPBZuYgzbekoqLBizjBX9JmshQXz7vensyDoRq8hHJXq78ZzzZaDsWQs4ed4csLUU5BpeTT7T3whTHET7MWi41",
  "key31": "amkfVtkECkPDbsbWXKR1MuzJtmPrLuVoHvfo1Xwaqj6Yk8pK1sYULgov7zs6uNnhZChQg7Yd5tjpuHbFBsk6pSA",
  "key32": "2cWc2my3yo5zcZmfULmu2HyWB1deBABAwWgHXinnkD41idLsnWRXRUxiTZighuDiro6kbVNRtGhH9UdHiwQZ5DWR",
  "key33": "4jAGr22dapi46manYHQYjg8zYZzZgZb22xGBvUZ8ZGPuM5ZghdZQ79LZdHDvQz5fSmP3zikjTv62UTfKrUcpoVdG",
  "key34": "3jG2L4Vjnw4cGtJjDR5S7Kg9GXzroJvsiQ7Bd5yCe7y7dckxepcvwtRuDhvacwhsUpuncAzGujfMtGTby8WBcmNd",
  "key35": "2RT3LF37GhdQk411Yu4YzEjDWfDe36Zu3ZLzhetAdhsBiEuGmGENvRZFZnF9EGWDdxar6BMULeyBTJsu5X2WbsTf",
  "key36": "33PM62FifEdurMLGPUnnfWai4MrRVKaEXddyPqLewKgo9nLGbY3y3fCheXYDhthy9XtgH2M2Hetq2mh8LdvExfsY",
  "key37": "2VmuANmJrdb3ZodJvgheR2dyXjHoi4MCSDc6py6b69uHjfH6PmaPPYMBgJTQBtLeB5zpwnjm96wmSbgYbCRVvqwj",
  "key38": "3sPtoPfmXqtEpNPyfFnciEQNt8N7QrNWFc67YUhqmiGb31PjyzaW2rs13aeRJXtSAVX7yeGbnAXSGSqPLWFAJRMs"
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
