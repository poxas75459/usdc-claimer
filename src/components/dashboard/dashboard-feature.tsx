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
    "3YRS4kmrA1uxmPd7nk46jGdbbgFJR6kq9JHkhkqJVA9qjAGyT3C5beQQigPvTcJKw4MJ593aLApyZzcyy2hpp1BE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G84urrt71zbDvNq3uboX4d2xE25qXc1f613VkmXyDvUyvSyCUijLWwFsBUxqyAzTtHjnuWVnTHUD8eX4gVajnCv",
  "key1": "22aSWby4mSnesWdKUm2UtUUEwTBbUVVBH5unS8zCHVjWxjXAwv36ZGp4MDUiKBDYpGi7euP6zvbD7S9z7s2RwtG6",
  "key2": "2jkkwNqgov5bmU1YfogKTFkV14SrEBTcQcuDUeGYghcWscLDo5QjTgH8ooNDXdwMGaYxtg9xN9jiucS6UpocPAGZ",
  "key3": "4eQRWAjWLQNCCn5DPDFW6gRSXwGbzNEfS31g1HJDBWfZHP2PwDV2vcMfiBSqfSc9Xu97dwHf87ytooHnDk1yn2wJ",
  "key4": "3EpqzSQxtR1GPkzHwCYNr9F6qizVE8wYJ4rk2juDMUmH1FT86CwCyMnnhwg15Cs49Bb1rTigYpkiC7PVYfzyqoQq",
  "key5": "4HEQbbQEvG7rVEDo2NRTWUD7vhc8fQ68L3z74MSFXMXowSiMF6XeAaBLGqshwKooAyMtVHBoTtx9M4nZQ7MM7Aa",
  "key6": "3MsRbZqMLf6JHaCufpFHJANem6JE8ewVsmrnLbRoKgv8bfjo3MWgk5v41gdShh5S6kgkL8K8y9tZyFJuEyQxXLp",
  "key7": "5epJar6VkKaHd4Efd755dA1MG86hzqeoAg5YMEp59Aubsks7AT95uGcBrL8F45cM113NUf13eXZoLi9y2cG6wZ2Y",
  "key8": "2GVL1ZZY8eSfwpaNSaRaBeCaWoSicf4ARpiNysjXzmdv5JwUV1iqYSjVRUmSX5KUT1GdgM1EdP5NveM14rf5p9eE",
  "key9": "1usmtrFe6LcLURieMa1oNx6qGvfRhdsaKLMNRdqDiY52aAVkiMTyAdAneqghqh9k1njt842bAVSyCAVsw3MBxzm",
  "key10": "4VqJDabNGeZ4ok9avfP66QTZ9gRtcH2ux5Tezi71bHjTqu8zFA4bto5X7SukcEktk955ygW7f3U4h1Q9rXEZhEcF",
  "key11": "2rnbCemGZGSq9HvCV3tnQkJeSbsuVMByhUF6ZRhKrPriUurFo86GjcDG1yoRhMJxMVTksKWDNPs2pyYtAEmLVr3D",
  "key12": "347PQn39ijA3q14N7CbaS6MG4Fa9pcyLfn6ELQFbN38Qm7p9pNmyCzrhg8NkQNzjhKimH5fHdCj4SsTEMVoyutLL",
  "key13": "Ghbj3L1ZG8Ae6EWTFLSfiRn248tLQj158BqC8DLdtqZmrYYDCnbkXKB2SkZiz4XEBp3WYW1Haq8pekhiym31gLx",
  "key14": "5MoKvzaUDM89YToV8khD1skZnq5jVPtM8z8onxDdS1r6TjQWBKySbkokYrgs4fu16djm6KBinM6KRsipS4GrPuZp",
  "key15": "2UxwkaECDfJ34TgCyeg5rKG4ZjAJgXemTWSLLH7XFyPW9N3N4m9JcY6VWfZumDGKzVsWeAG41P21mB9LzxjF8G46",
  "key16": "37xg3pJYR43SAF8StW2gtFdBWwFFXLgFMAtKsf8Ed759XF69PkWA2PNugD2nQHhsxfQusjazcsw8qWJmQCbTkUd4",
  "key17": "5nqsgKfkQacZsUSqMKxuCBbeU2BZH3GX4RuZfo5HkwxPTeS6k5qpKzPKMTboMh3cn4gki5HnukRPH8sKM7o1ndTq",
  "key18": "2cH771BtrekZqjd2h7cBRTpegmkFbn3ezqoJqg7sxUyVvQhVxq63qas7vcfEekSTnM3yJNSqvBbxnwiFifCerLf1",
  "key19": "4N7oUCPB6zuFuW9arFwR9CAZ343v6sVuyTySm4nUiJaAHDf5krGSfXcYifR63anSPAz5QjakTc3DjVq6hxpu7AQ7",
  "key20": "cuafHNmAvgSc3D6fCtWCrz83aJsdMPdFTsAFUpazYmFhCZLmwtGXfRvSTCog39huqTckmfqdkNFs8c7em36XHiE",
  "key21": "VyXk2mrMdr4zrAFeB3HYdwyyZfxK4ncxiq3oJpXdj1P7Z75Bo8QHcQEv8FuiA7VFn8HEYoPLwMfzHt2CCBYEjSf",
  "key22": "3E8GyZsGGSeFWfa8wQDuumsxKHjjsY6NSs9Nfnq83nqgWZSGeSBJEEPEkdDxH7eJw2PoTniNDLGQHiWKsyvHiT1R",
  "key23": "3V33WDTVcrp6Jos74W1BM7tbs6wrypwZKNuPacGEHCRGMK7U4GH4duV6d7kL9oefp7yNyjbAHDVwxsAMjUDkVVTW",
  "key24": "ABhq91bigxZtrEiq2Ym8Q5qhVtr2APuVZCFJLkUqSMdjvhLxft86rpnx8kmH1zaz5oar4d5aoMGUEqvMnpkF79m",
  "key25": "21px7dm2ZkUD2ARTHFXmexMUzFkiZiPYn12LBACbJpcBKGmdLyrDMgsPTpeaG8mYaHv5HcJatuBtvDV74Tyig2EL",
  "key26": "ifA4piMLALRuoAJzNU28QrVmAbuFyMsjbDV3cskwfug93vcbup14VcBufhczfjnnuT9xd8LhobMGNP3FzvUoY3b",
  "key27": "ESsaMsv1tPjzkQc7XZd3chRY8yypj4xvAJnKu1W5Ta3WQnqVVEGMCB82rK8YuT4pAwmVmgBrDDbauamWvT6eo7R",
  "key28": "3M8so1mQgNuS8dwfkDiitMofrMZenRsjtFNd5dxbMzrb2c76cEXg6dzgo5NfsdSKiYy1pRAxhvvLUc39AHXqm5Mn",
  "key29": "3pXv2SACacUFbWmX9yQFcuK9RRkhk5uz5coNKWkSK6JEw2pqwr1MJRWNfTDKZpZXaKo9vyMEQp3r17HMYXMgsLZD",
  "key30": "51t12z1gGkbVzKvZ4Xs1X2bGHYUhpqYkuZ3zvU9QQuhg7Q4m9DgDncWWRndfbuj4fvEYFdHMhyV2bnbBpkF3YGiT",
  "key31": "5KDzPY1keCnozDpqGgMXD1mUUdQtKFVkXfCKNZ17UTc53nxqYqD3bVGro38adXtKt7JZpdDWDPRsQ999cUDUxD3c"
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
