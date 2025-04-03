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
    "37Yy2YLpRMrfktH8wZUMaqK1FMj52gA7ecaSaoyeeKx9oqWgTxKG7WGUoJ83r82mw6c4vHPc1pQiXx4u7mGaSVzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qqi5DVUkWAgM144W8JAfzPLbZvYpZNhqBTswghoxyHTDuw1zGmBM63FEsYXaHMmhH2bDhh6nxopLmPgEubi5M6P",
  "key1": "3NRnjhs8nrykxeYjisP4tka4u5pRVzXEME77KxjTRVhdBrnCmji3dLvQ4aBTE2gHkLz8W4dk2veQZuv23ijXR4k7",
  "key2": "3Ht6LpGGEGEm9DQQjGLViW9tcLC68y2kZgAVAQ2FTt71SySfzngVNgHnBpa6RnyUDKjf7q4TvasyeV1GJYvr6ZC4",
  "key3": "3TP8sN6a7CbxuPAqgBDUc5F8NFSH6XfQjxLqTpKDVQidAeoDJWpJUP42o1nKCcJEuLzsMHjMPXZ5K7TAGGJdwnNf",
  "key4": "2R5Xj64ZZUNVuWbqQevNBXH3oamDVgvZ5wK761qXRHVXAFcR91gyCCpnx3DUAHKV6QGN6HjWuTVqAhdBTMMpdDMk",
  "key5": "5zEnT716ar7qgdxxGiwNEGKvGXQvBrufLtCg8Noj7bjVeR7mFb7CREaHUzYCANVC5DJFdggJRHJ29SbZMXGsWMs2",
  "key6": "6hoU8NQuyfFuMB4CHQyFwcc7L2qwwAJ4Vgy9hYeEkzbF9Hpq3kcSpreNFAzjnkfdp6K5rbTCG5vhAeSJvyUATMY",
  "key7": "3yyzQWcY7HdT8AToQd2pVK7dMt6spy74gLrkNYmHJrsEaVW2U2hkZFm1HEeujuK2mQAmUWZsRcoR3EuoTSoCjr8e",
  "key8": "dUL3f7csWVTuqSUC2iVodQLa6Gb61qCEjrzLKV8cDAuzZCv7kc1ivGjr5CE2KLdo98ksYZjzEsWZbYyatQhDU6r",
  "key9": "42GkfuwmyDeoUkFsq2aVasJ25Ty7kurLPwjDGQXvu6orzrVcgncXQKmcuteMxqQ9s9YCovmec1b9bEFQrRtHtUyG",
  "key10": "3m7s4z7euniZcDdjN2qZuEyRmxSFEz3NTKwTkHw3qBhvTsuk9LCr6RgmA56SmsMugg5y6E72vhME7rjgHptvLGQR",
  "key11": "434uhK9oxiEAwAa2k1iPShdYdmDeuhokaedpiEwtfNqoaxkXR7BqPSnfRLerkEf8xe1T1K5bHrU1aPREJqi8cTvY",
  "key12": "46Ly3Ra3omxzT3b1stDyWLCkoSJ9i4fywmsZLKgghiL4uaJMhsQPr6mgU1RSw171mCwXhV1gRQEvPFy1RgDUmdoY",
  "key13": "6GCuZpCAtnAzCy5FDSLDwit1PEUisGn1qYUx3Fyhe18Lo1Mh4cAVVzagJhtSjdyDcoENzSztoFxo3svZ6xDBmmx",
  "key14": "4by7Lec4WowEvsJXmNPTjHs1K7EyA62H6CiQDmEVpbhGFiRMNKCRdRmN8i36ozWF9BqyYrfAmykBWXoRvhFwLzB4",
  "key15": "3StwePvpzkKMoLP63ZU8b7UcA81E5JXzjCi9xcAcc98qbiRuzipFpSusGunhr8d6ZD9Dz9AZyzjjT4tbVkALcL6k",
  "key16": "4L6ZqEmLnU72GniDAvmQbyiJWAB2TA7sGHaxAVTZSv6tjKTFsgjMTBqWCUBWNyUPjdd1BdVUqE9XJpm6NkagPcR3",
  "key17": "eCP1x8PrNjRyhyQ259dT6G3o5oACdw8iZcBMaxM5Cx3UTyWputbY1Umh1D6ThCNtEEKAwhixmm8d9afJPYpYmyB",
  "key18": "KXWo3QCQDGMsMJPf8YGcLfffei4BaTfc1UYUVrceBqAxKSApjUfzTKU3EbFUaWWcrme44uAWmwEE7wC8rCwU8MZ",
  "key19": "4vPCsgMDc7bcZqt1S8WYDtVULbasRUthGnUm6xC8Dmiguag9JcmHDwHN9wG54h8yJRk5YYdcsyFQESi5ySjz2p5V",
  "key20": "26T1ZqRUNX1hLtC6D5goAD9xUBkDMUZ8gjtSMJqie86NH2pNHHaEthTh4jf21BfJxiKoAMnK4rqrDNAwU6HX6YQn",
  "key21": "5HiukLApT8o8x5mEhrMXNH4YWL6Enuwz9YFhu85EQKEtWVXZazUgNG9bqZJYy8yxCyCABeaacz3aP5cRaiP3ts92",
  "key22": "2UvG4AsSNhrALtMj7qfuWLJxh5gXJcZKXkZ83XB39SbWMhQvrTGSC6GEyqM7TARu7vCQPzooYGiXG44naAjnSWGB",
  "key23": "5cnvi16Ak1ebnFefXqFUfh4YXyaMArV6cZy9wQpZe141WsZ42qfc81BPQoHp9FQbbT4c8wUmJ7b1wFtqQPeKWyfX",
  "key24": "47KLrciiruM43SLMdDMT7v4BnXhmmzKpvMG7H3bismVPLHsrq9NS9U4fmYw5Lso99iwpRzGRMMT8Ux4en93YFB3u",
  "key25": "4N9TZHmyp7M1fALVbCG8dSSSJE2441MDvJBkxaGoqnXj36SnJJYcH5uGmgs57xW9yJqddtEALFFctUSJnLB7dEwi",
  "key26": "HyHMEntMbhPGuvMDRZtndJrvHQ4a6FjiyvPWxwm2RKTX9Chz4jbtBMwJbL4mH724jGXhn9QU5wpRSLNYFFr6p17",
  "key27": "zXrNn44h4EC5fyTr3uYuHU3Sj8BD6Sr1pqBv7nmjvRmHhe8gsA23eJcSYeuF6mGESJmWBAprBWKGciSvSNxC9PF",
  "key28": "33sPripQUXRjHHUp57zYKPGQ2fCeNUE9Eu6Li3YvAosMAfsfn6ZfEXgARbe8PTvW5WhvszmE4z6Dx9PjRtGc4YHV",
  "key29": "3eZRFsS1rbVDAZAERrfFvNTu6zEPVC3N4ykDbDcgmXtZzMGNdvxy3G2roAaiY8oHosT9LEWnVh2uDhf1mnMAW6fH",
  "key30": "avJK24P9C85AJAebiHbT6i93frAmJPRfGcbwt9s9DG3CF6J93oowPt2pQt3FCfwUD21RRXByXgX7gVQhrPGBJv5",
  "key31": "4hcEBCWTd4jEDajrjAdvGfw2tsukf493HppMqd4SNBsTaP8SKcTSRSvBoHWV9k2z5DVPrUah82fVbND9cScQqQhb",
  "key32": "48hvMtSpivvYTh4AxQjFFrxEqNwcEHdMd6HrkA6HcsBSpJ55316LJvNhUV5M1JtV7hKaK2hnLekZJuhxd7TpyZTd",
  "key33": "3QxQchz4W2UrZ1ZCEzbxMQmHibhjx4PXwZLujtwGE3PncGG93n19UHMAL3c4icrtd5L2XWxBYdr2dYEVmSc8WBbX"
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
