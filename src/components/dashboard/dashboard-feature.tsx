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
    "VGqN7hd6mQWyxjG7Qecj2ntEkW2CHfT3pW3EwxaYQkndYAzrova9gJDi98RbHyVhbLNEkdEtvye1NbxRr59z9or"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uQuh7yr2XZq4q8zJBfsFkTitov7e8K7hF5LtXSuk29mdKDA3bVeFEwM42XrxG7TwsrpoDJAQnWZh5Q4GpB5GvCk",
  "key1": "2rhrPAi7bSukXTQspAEADtjM2CX8vMvY54dYSDQ77SB7R7eKV7NNSDKnaSTxKtW3ysMaSW7JqYmkHu3uAwpVkDvY",
  "key2": "2Qnvmtomg5cdtX1djS3kJpWf3NTAL3t2sH2mmmzh5JYeuQRhyCGaVsfLnKVvAt3Sf7c6SgjkuJXy1uYS2ySnatou",
  "key3": "3oed5czhjUFTFdxgKYZJx1V7jauB22xjdAhvQUbSFiuu9GXWXi4Tz3mEtPjrURiE9s98daE25NHTKs2X1c9oviGQ",
  "key4": "5DaUyVBzHFWJJ3wXkmBZWfsJfFfQuQvjRxiSSsuHZr7hKQaTiEA5ppgKLRiPgMfU1jbX6WffeZm5vhenUqBct8w9",
  "key5": "39k2obaDUxHhEqVvkJtW5YNZkwQygpJban3eYCJHoBhKQWZSajQpYiCVehKQRshJqeHbHqkXBorot45aTy2EsDGJ",
  "key6": "cioMP4uNe7ttZknFKutmqrmW651R7auF2VviMXbDC9VXFsGU1tWL3eyuBL7RxUz9LjVjcgcakpXvoLkkN6LebXF",
  "key7": "2j2hU1d7VY8LHCYCWQj5myVRbqLM5MiANTXTzJ5PRMDEUWCPASKAz24X9ft7iGooCHiuDwhK7YzyQTeppuegSZaX",
  "key8": "2mH5E5DSxh2aNMChteEHmxDiHRiy5DgwRBt6atSJuM8Zj8e5SDBz5sfnaSvaxAD8ud2obex8EUrr8xJ4SKB6SzUT",
  "key9": "5hiNkBLUNggkcsRtMYydyg24Ru11o8d13og39RwjAd3dHniynFpgsQyaXfs8J9UxaDqsZUaxn1hi4kg1veBaavBc",
  "key10": "4CMYLLEYoqRKCLR9oSZsHHmpFoL1HyvvV4o94y4VrpjJYzZTHkbi7zF8ywUxQ6A73udpD5jZM4fKkThjubFA96KY",
  "key11": "5ubLUtfS5qk6FdpfPrMdZsdCrWzio5j7dA7JBZkqeEKThRMBCt4pKfDCP8iE81v3rpEuvs7Qh6idzeA9uYxyPnq",
  "key12": "3TeG3FNpvS9pzimnPcmbJJe83Kmoa2RuuAoXaCYqvoYdY9yWz6DRd2Sy8Vn1GpbKff6XVstYXkPUQgStZtxj6ntk",
  "key13": "2tGDkUsz1J7oCDNsXTmhuXVYnBzqVh1evcNGv4dYSb9qHZYnujZMNrJumgW1ZtcB8TGv5aoJpoWApLSixnPL9Bkr",
  "key14": "3GvRDfMgbaZNCekKosSNfcxRxANWN9iTjH78d73u1EEkDq3sXB1ycAoYCnEvVNJmHbaoUNb9EYZAm25L1FDkeDvg",
  "key15": "mWzmqKjQZ3RYRE4gifM1QACrkf31siRGmWTYQwTBjKMwChc2wM3RJx7zvaUGKv2NAJk96k7sktw45RoJXGSuyXX",
  "key16": "566P6tgvEoxSwZ2U27QRfZAKJApygfJtPg2cZCrDAHYhygyZkj2811mrHYtkJ9XW2Qmw8wdRNqathD5nnsLE55Xx",
  "key17": "55swMEN2fFgeazenP5iVrj12rET2PtMXd55i8HxxkCzWmkgChDPsNDM24okN6auZcn4ppZ3Uo7sGigF8sRJHf4ca",
  "key18": "5X5QszwcUisdQ2PcCvoeBtMSwAbuTbf9RbdAG7HhfEJZji661dKGq2CoK2Pk4SAPV4hHJbw2JCei1KZ32PjN1coZ",
  "key19": "3zgXBFofNBb3P5UJHmzCdGJDEZ9MuQ89QS1pkf5NyMqWXhbxxWwY2AF6sz14roUCu2Sv5HDauXvXmwev8Er8xmyN",
  "key20": "4bRz2sAt9toNjsXxmj5nEpDQW2gvaXC28MiDXwQXkBy7i9oToVq4qGLKi14ZGfCvjDFe7XAEELgdvLam5NM9JGKd",
  "key21": "33PU9gQReU3nfCEZouyZGWVvW1QCSn4kYyYN6ioLXGhpMvdHr5JFfdroN8Hc1Mev93zBBaD6w3vS8qENLFcPpirp",
  "key22": "Nc8QB9tWrM2qebj2cxqyLewcA4WvzmSN2yT8xMX6K5pP1ab1kBPtiZ8u7zSrBtuHWuHtQzpLrS7xnSpBgkpUkvd",
  "key23": "4fChuKURB6zyWsxueGHq8ydu9vsdWzqjCszeJgseEpTDwbSQC7vvnUMw6uCrN3SzbJMLUMACFZezgWsR4warnw3a",
  "key24": "2ox42jgz1Yx9cBi8EEDU3cTrGt34AJC1E4Qznk5eHVcQpPt5cg43YXEuAYSJmGuAH4DXGSe869g3y88TkbE7T1R8",
  "key25": "4ZwQDhdnGe4pNpPjXThnyyzn1ctDx6iJnRsfzYw7HLmgcRiPq7fVXGuXewiTC3ZPq1G5Q8i6xJHJVMZLn14s1fsF",
  "key26": "aUHc2ZXVsqfUxAKssU4BBFbazEceWTWcdLN6a5Uwi6z1N1J9FrYNK9xc3ry1wQHbcLUzves1oYPvyEttoLLUNWv",
  "key27": "3SqE9xjpWRc9wEs6oCeU17HN1WeuYE68xvruPfmSi18sDQWymEGZymyFoEUcfYCH9NTTQhKeXmoXxSYwcRnPQkZ9",
  "key28": "4uEmNpoGYvw15hRY21wYg1qjmRE7Bik8cEHoYQjKnXYZn4muM6xGKd8PBU26yfBELfDs6baVpSzfLh5CnjVQwoez",
  "key29": "3PRcwvdejK1cRHSN1ExBr2ahh5pUuDBj5meERfB1orkUmhMfe74vooEzaduo6hPwngaKo7whC1pfsumssmQD8zjH",
  "key30": "3SZkuhqHTpQgoVi4gHiKgdp65PGEoGxk4nUvLoRicuis88TMG5Zy668YkqaJ1puDHEsaDiocXkW1hBghyCmwrBeP",
  "key31": "c2dWVv9p1qbRwcQJ2WKnHF2gTpGdwccZDapW9aShmV7KmpDrpKDnWyDrkVCj2HZ5j3yc31jMkpD5zAZ2BEJALwD",
  "key32": "58iAxHfdaj7Go6chFrCF2HLsqtPVRUZnaNeAyDPtMVohEp5qjBvnGRcrCzYyoopEZDCEYZ7XQEsxKbq2PtXemMH2",
  "key33": "3uksv2oTUvPTT6nMaQxax1EMzxPFSaRTeCjHT29HDQhLHHbHyNs7pKQCH96FoNTUm4BvrDediwuDNV9q7QKWG1zi",
  "key34": "2bGEvGatbzgwkEDheiaVPW7D3cVn8g7UkhEN6qm4YWQS1gWwL8jPpqewuyxz7ytHTv93Dfnt9pyQyAP3jZZAoTRB",
  "key35": "45D9NZUMyWMkmz7jsTC1TS5kehhbpqZoEqRCpRSKYw1D76nxiJy7URSHvu9a9tkeXf3kenrCrfbQqk7Prdjz1Nwt",
  "key36": "5o4AUkVE5vZFpJRGdkgCaYHfUnhE5iy1x6s1khxyUfSCuDLSmBxSoEnVm7YP4JgdPWqowKpu4Pr4aTrs4qUHrLoJ",
  "key37": "YHSnuvbLwqNNc3VZavFqgVE6YzYQDA1aE3zr93SF9iAX9yyJ4wadxoSeN1xUuedsuTZ1YogJMducEk7YYFGStrt"
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
