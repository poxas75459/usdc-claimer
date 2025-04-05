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
    "3Cpm86eba3oYZaffV4jsT7xi5cdGnLwtCkDoFrzhZjfc5Jrq6bvQ9fysS18FdeZNFrWUP3s9cXWsCbz1rWy4TSiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aGhgdVFguXcM2CSbYvMmfUAJHsY4z4jsug75Vcc8L7YKuJpKUQFzHbFuAwYb373TJMCWG2pbikNdtxVMPKshGsS",
  "key1": "Tr5HtmCTNT8WzFyisECW3DQtRgKqXbdLfXKWhe2uWAmjH5Hue1HRvg1E3gsB7RWfzAx7xhbwtbJPFpxc27qe81h",
  "key2": "28VNHbzaaBcoUhiNGF42tnEP2VmpdQJnc4SqDZidT4WEJYGExwZniedFSS8oVqXcoRbBrsv374VAU2zXzxbx4KqB",
  "key3": "ihkRW4C5JQqtUpSo85NpDfZcTTDxvYYBMs3rCftgnvRcVH2BcMiGf3GDUZSR26ayUny2JqjCy7g29HTNGejGdCy",
  "key4": "52ajKTGomkVbKnKriKeGhBkTmdftnRL8BYeyLXy9PWm4MoDYo8xh5SQ6MZCY8i11Q4jmq37KnfQuxHE6krAE5MV5",
  "key5": "4UVUfpo3zzfvnyXKcsGh1ouG83Piav9ae6sF3R5HBcN3fvctfU6QzRZMtQncWrg5rqtBEz1TcgyXqfJ6X4VjyfEx",
  "key6": "5pRSQ7vtY8X9oGoTwZkzP7bsMnzzMF9x17qhXHf6MNpUExL84cCibQXvRoDcvjbnmnw7LerRvQztwJMESBtBDFaq",
  "key7": "3xYB6mkzdp2KddATSb2kKBLvNobosgvKDY4W3Kbardi55Hfyk6pwDiCWHEr8Wbh5zr629M2qBC5E3Tx2XZiWYxdi",
  "key8": "5VWHRiqUDBnSVyZNWp855rg8gt48ph7JZn2wQ6fhho4xZGjy9xdwuTBciHycyCAijjuxSjKZHgRpMRC4ELtkKtEQ",
  "key9": "54MZFwoZCJCCghtqzpQhAkTLinRaHuJFSJsPBM6R61kWa4wpXay1C5PHWvevj2dGS4JjWjcxeeP8ceDVenszipXf",
  "key10": "5rBKo8iGhGRJ17Jfuyp7fR3S8JburNTP3KytV3S9AbiXfnykza8SDHKLYBogXN5voC6NFwtSVArEE3W7gUvvqJD9",
  "key11": "4xVfG6VGGGM8dBLrMbi86jzG4tJTV1KaTSyLv2sUkpTdMyk67NaWdMhvcbGUZkHRDvn2CTKoMpbcTtNFszZYEfjQ",
  "key12": "5bsoJXovfQQnVeEVuP8ZYQKeUVEyLo9BmjLHKrdknK6QEg8g6nkmk6EuVjx6KYd5CLRWEVdKaTvesBDJoj4PWUi2",
  "key13": "39V8EpZu9MD9LgHeo7sb8wFeyQ73HcXfNFtkpfDCGoPbvbwy6aRswJPE1H6yG2khdRnch68sRChVTbeRpYxFXS1g",
  "key14": "4b2hrE8YqxG9e7YHBHQ5iV55e3gAAWDL8Ls2V6QLvQzi33SkiSZcG3Mq6equ6fqsXzy3XLFRPpbHLqsmAQmxNPhi",
  "key15": "JboW3LpMWjnonHgveSNpZc2fHYBzEMrVCHnuFDL3sPTTwuMMWPJEKFaxYB2CneNDtcajWojHUm9wmoHV9hpRern",
  "key16": "4JFRxCV5ScHGRLSGB82ZegkpgJk7PfFLzb4PjjjRsfKcdMRW6y38ro5Hd7r2hFHcERrBwamgVPaEFEpZmfQ4h32F",
  "key17": "3RyP1BVVYJXPnf4jNAUCSs5zn58bnUbp1iXjw6L6vJqypdqZCv7JYrSJ35eDuJjPYn4boqEfch7dZV2HTbXLdhHZ",
  "key18": "gBi1aoKNTvu3djQCDF3FCtLXF1ZQ21kmGEcMUQiqqT8MWoqkQxVSHDukYmUs3obfyM3FfsevWggVqm12nde3jj7",
  "key19": "3CLBf1cWGXtFjeQZ5svoCo7o5UaUCG8ShLwymjPwGBsTk686RU3bojYiSXJQKDJLbL8HngcQtPLSCDNpJ9okKhbc",
  "key20": "CwpXFX5oT1S7UjQKLji8xzpRWA376ia6VSX6QHb3QRcUNgX1BrpP77L8Q9EmbFGQY1yMNj7Ts75aboCecBqQ6c1",
  "key21": "2YZBCEpuA13JmBD3vwteXJf6wy6xX5c5rGNfq8fC6y6GuLCgynUhU6bAgKjLXpqtmoo9hjLbMxBGtsseUfLf5yoL",
  "key22": "2ibcj3y2MDifoJb8srKGSRCSPfJhAADf83RiYdM891nbwR9cRf3ReHVazoHDBtQYgvjCbA3cxa1EyBd4gX1YgBXV",
  "key23": "3hfbMojqo4WtgwXhdA4P8gmaQNdw6LgSeshmeSxrdRPUyXcuA7ud53p1b4wEvYVhpBuwGZzYy45abEt1h6V12eVr",
  "key24": "3ECe8MxrRVRQXGc2iSdURaaJ6S2PcxpizLgV2CakmyXZ3m4HfHRMGQCH6JoJyyQq8oVnrqVHQJQY65bYkWsy2Kvq",
  "key25": "2tqW1re8sQ4iD3mofFrmkXNBbaEevBv4ZzyVsSjt5D6EWDFeQdR69xt5gAS3TX8UVvDUNY3At7ehhHyVSAjUeTSx",
  "key26": "5bD4K1NWHZAB1F1g2Myx9XHLHLjYndxvRCGUAftDEA23L8zyWJ8TReb16CT9abnWzVaxnS4Bnc2Qd2FtDLs6iE6h",
  "key27": "2guWZzF6r2YRCE6r4jBYayZfCmZHdCpbY6dLnm7TE7Pj4sE5WzDnC6EyJKvCW3Mdss2Kweh8JokRBqGe54gKmRMG",
  "key28": "278maQK82JAG1f2d7xdWkgJLWdmexENRxPJXFcivyByG9TfSwszAqPrgrEDpzhDq6gV1MCXtfKs95ACwpf8DeF66",
  "key29": "2nTiAegwcP2Dvn5nhmxirudTv7zMF6KLNokUHL7nKtY57JWxpLVgdCqk5X8uWneqvKC7WhKFgwsNb5o6DZFf9qwN",
  "key30": "4EvTWfVzsZzj3UvAa8CvAhUeVN1v1EjXNcntvhLEDPdbRoWkRaHevvurGSHsVkZviN1mcUALXHb49LdHAYM1kvad",
  "key31": "2i2GjXdEg98fiTU1L4nBqjZ129GBxjRxCyhSJRXfq1taxfisy4NmebBh3SgYze8nLnW4g1kDu1ju6tEqpb7P1bxi",
  "key32": "C3n9DdzKrP6xprRGy9vvodjCRd4GDNCwdvhSd97VBHqh2tcpF85x1FLKfvwTpXgBYvNfXh3cN8D9z3nC6in5xQX",
  "key33": "5QAEkRdadAgrK3CHTzgTKyjWexFFUc8uVgPFFkAzkKvhMimpZK6w9yPAEc3PoTPeAT7V2coZWKQ3FKzLucBxuVcp"
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
