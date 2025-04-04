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
    "2GXRZj8UVQvnC67tbPkBTUbGRtVBnT1ymUS4rZacaTSf6U1xBeYpuLkZ8QcNbLyAxLW5tPc51Evq9AkVZtShuZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b16fNS4xwp72rNkmSG7BsEX5D3rx8oPnS55P8GJRFnJranYxL4UCrbxy9uDRLCVbJ1FNkZWb2pk62eCwSgdsp4q",
  "key1": "4hu3Jnh9eJugV1PZoXocMpdrmhuuUsKffhXZMD5cPV2BZnTwcqjwZuBFxVAaX4xsrSTFmgCbKjJZcwQ4N5oDtQ2o",
  "key2": "9gzDH5irrhEtrwsadrrg2nxabvDMjKn1fxMrk5BLaCFxpT4oVoozakwg3ZFSqVJHo5bjGYpMVJdHpHWsJUCYLka",
  "key3": "4YtYYKRJEE9rRdfQ8oyzK7PjC1QvVocQAsUK1q57UZAcgMarqxKjFK88M3WAmkaHVJgixumdzbpUjLDRwbSa33FL",
  "key4": "doMNTEV1B7aA3fs8hv6wHyt1H5UtFz6myYpc5bRKaxrAdwxMKHqUg4KMBCtKH1Dqu7yBvrPYW6EkRju2JuQyCRv",
  "key5": "3Xrm5MPWiULMTn8WzmA9u4utDaWsPSGwzjWJEaUJDLAMVXKzRfxVWZAZwo4mFJFmuMVkntQF5NCBDCaER1FffyLv",
  "key6": "49aTVwu6ruVEwg9YiroYCJ6tKzFRdcG2qCKwK7cxnoUdaaMRCQHDr6nC6nZQ7Rs1HMBbknPNPRpshyL99qcbCfBF",
  "key7": "5Tr2JNUVREC3k5wrj3ZgjKTcTss4URR5JQXFJkCZSToe5xj3UknXUwt9gp9XdNonhBqCUzwAN58fuvjnSLznGc2v",
  "key8": "5oxxAizA8rXSttWU8WRdRpQCVjNztDQwUz9oxdbinRdkQ4ZqeUTPA2oJ7taMHaiNHm4qDn9vz248277zStexd198",
  "key9": "gmi9tFn1Kkpi9bwhgS9mr4C2T1FFwoqTFxwZZx5mfDG3pAdHZRTc8oXE7qDPtgCcWeyVAdWTvQbnRE8xSMSjY4B",
  "key10": "22bnLRRVVjMWizHX5V3LBoBnpXejg7Q59cuX3oS15JEMqHxazTen4yZhqLTVy4Lgyn1vrhBFmMnkdRk2QePkCCZz",
  "key11": "2Nv5ztJLWSTnSEkag4x8fx7qYTgNr8PNksMWt5Mvpy1B1wstp5xFs2zRwjFs9UMeDALAWL7FKmFkFuVqTdfpJABa",
  "key12": "5Pq14YkAMvQy4vPU522b5YV2MRbDyEoM1tmrRSLbG8QBmfQf6Zqh9Nv6FUvE5PpFpvRxErMVGcdQecYBW5D3nP32",
  "key13": "2qVJX7hL94NUpzS9qeb6K5ZXqmbCNhJ6LKxKrFbDUKxidjZifg9aNXk6NLkzyyr4DHYiNzkL4mBFoZvhtCEEWJBv",
  "key14": "3KPVkRXQhWrerMdJYgdi9wQhi2fH7jLAeQLaN278L4vmFajG4i1dz9W1REicgDjLGX4Vts1z67M8441WgU2U2jE5",
  "key15": "49nXZy7nhb1KD2ghJj3g8bTViwNyVuXp4NgJXbanrfikZZM7MxSmtUiDoHrPEpA1zATuGJP5xroPVZDrZrQxc4uw",
  "key16": "618YWdNXgReD9uxNAWACkxE7pamN6qqQyv5NrvB5GFFVg8SbNK2EtECtUjxXo2EAq3ocuRa4xToRCWF61pAJxQ6q",
  "key17": "51vKBPCL4oSt7EvC6MVnns7164kAVEUUvtAjhajrdSTjmBqwxvzZegf9QcJtYATAxLUHQ6gzzyWcmcgoeS86WC8U",
  "key18": "2n2RREafKnZY7qKefgepL4xzvmnBWes7jNkw4SqHdoQRdxXKZdFtQ9fuND94ttLVaBf2FrY4ronb4GsXz39LoLky",
  "key19": "4Ytdimru4uuyNyXdC3b8KzqFoa48gn88X4Tc6ZFQBv52xvr9gSn9YvPbNHDv9WvCBTwPEc9XxtskwaNWCLa2bKrT",
  "key20": "4QSdha5Em6ckM1sFjroWGEKkBXfr6PMRuPRkm2BmAUjLVjB6bbPSyokz7bbscHCTEYGNaF1e65T7bN28qkJ5Y4By",
  "key21": "22L4QB5aw5osdu6PBrEwz7CtfsHm997mzrDCchvveuxoKt2a1UhQVGz64QrNYfZpp4XQfM6gNKzCM2NbQQqfK27W",
  "key22": "2vsBpck3VUb5YBehBPeQPUFJavBfq6esaWMqZAdMWokNkWDERZuKYSe896D7TVcxirPBhoAN6S6Lc26sfH1dqBRr",
  "key23": "2eUFFn6xLjCwRzLvHzHuNCxkMHfWXdcisXbrktW8C3TnouripFt14cfGb2XYa7N2kTjHsvNhK1mr4aXTwPNSz2rE",
  "key24": "3p7Rfq3yXTqQSHCrLD3EAmTJ6MC9UNxqZCxBpLa6S9ecRZHdd8y83nU41gJwfJhBCHHLegHuRdBZuTtR65LKfEqJ",
  "key25": "49bSi91MuYzdS2WU9ED9eVsEq3hDGLXpaZTxtVYRa2S88hNhQqK9EieTFDrBV2ikJwhFyMAVmPPr8a6DEqZxtXij",
  "key26": "3ky5assR8GjcaMtrEzmpYhuKtCnprv3jBgjcrysEhW3tgTA1iyHaKWiUiPStgX9NwnhWPvmDPVXm65hE1czxmxFS",
  "key27": "5zfZF6513YuJE2wg3TbYe2Xwmd3wsR8p55UEqyubk52R4hTMkCrrhgsEbqdkZQv3BPnhFJdzLWFyEzEvFDk41Xs2",
  "key28": "41UNiDpW8MMqaHYU4EmDBjp4bMQ8qm68BgnSofyZsp38p5L9aqccdzRQQ9ph5kityNM98FQy64ag3HWSSuXo4Uxy",
  "key29": "56te7ZtJYnZFq19U1kJegf1gnZ6fZT3YyPEtUhv7RJWgdMY231kXo52359KHP8X9i7pwqeYTHMWfMoCGL3XKnaxk",
  "key30": "5GXK2mi2s6V6XtMUpTS32bh1DYPqfDUq2mT2e6Tnc96kgZGMPEgHUoLcUahzZX7coa6MaKEeMkr5DtqFe69YUJbL",
  "key31": "x1SN1rzJC71h1iwRJYHLFCERA8pxyqDLRXVA36bpUPuodazGakafgcRH7aJmHMz1danivKcmFcDvZs6Z7oLH9Qx",
  "key32": "4YP37Ngj7g7So3mzvr28u7euxJMNCRvpsLqHZAUeFrtK4xmsnruXHqoxqPDeN2UYWKy3frZ73Cbo6rehFFoDRcgg",
  "key33": "eewTPc7maXuDEJRp8hUTg1ndWNE4jYEj3ZLLxZxcE71VQh6yzAarQuPouaj5gPiN7pR7k9TZL92iy5P9oX6c9dr",
  "key34": "4mCB5hatogMhwdo8ri9SZG5gaiBbZwpNxLm7V79vDznvoGVhDsYLw69DKf9X42oznP5yC8zW6e2gw7cfhQmwr1FH",
  "key35": "2R5CfvAmtfaPNMq6vujXKrZbUkEojcVaqgfzT6D8FYjyLAxaqLWNALCU84WPe7jWLoSW6sMi1mfSX1zmH8zfukAt",
  "key36": "36jiW9prCdzEjvBQYmc6NhMiTL3H2M2i8YiByKAbvLtpFH3zcJire6EagEZe2RD8fFYAakARJZb7fCRpRET7uZoJ",
  "key37": "SjyGdZCiBU2mZpAHwXUQBmEThv4kJZmWvBn6U6sp7tz4tVeDiPVntKkxPpwNBMVB5MBjKyP1VT8oKycfJbuSRmb",
  "key38": "23rSpXR8paEKwkyyG4XSEKNYjQiG4kos5xStNjxVXsZQxf6vdditRWNCpqdbWpj3Pji15hrQiKT86JhwufxTYQw3",
  "key39": "z55NfBPoHaocDBunGHfz2piQWrbjFKvfmpnfiFm4SHA4KTFDdFYxTajvzrut4w2NBL4kH4goWqaMxx5exeXbjpV",
  "key40": "aGNyckw2XwadwY6oU7FeMPK5JbDVtiPHwr7Ws4DpfepSE58y9bQ8NMCxfqm5ru5H4WciDPTzSdYyQkqXKgQvGBf",
  "key41": "67WdZ3Wv4u3ikUbrrdNjBgsCA9m3bCrKkoobyjndPegiH4Har39pFVHWZCLhnDVNf1kwQc7Zeod91cPftyQCh9oL"
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
