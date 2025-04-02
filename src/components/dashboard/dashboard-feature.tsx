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
    "4CNWWAsgxXMwk9KZSDpTZA5dpBryhHYdktCrUnBen6srBmQCQj9GpH2b3sAjnUjB8667zPDSeAQVdvup9pvwy9B1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TEysvX1ujkcRdaryRAon4CYd4imNPvFvGetHjq8Gd51S8jX5N7C56DMARZS5cV2sKvBrkou7HagErk1RGtoVG1W",
  "key1": "2JspeoSRj48TSk1JwzfqvojQiXR1cVxZC7KENC3XWza6sxbskrG6Ruh1jbUUyUoCSCmM29pMUk5xNxN82azpgFDM",
  "key2": "4ux55Q3EmaLzRgGUzdnftrDFyjpVT7NbmgTGwU1PA7AZ8RGm6K589V73miTiJaEEM1zxcBy9xxUF546J2h1qWUdw",
  "key3": "29pmF5CAR9PjQEpHxR6SDuNcSmmAhXrCSxxyJwx9Af3qNjWLRr7WfdxCSRJJp8CzuykQBnBGbD96SDRgaBYnsfpr",
  "key4": "D3jzZwmarMWaWzswUBQhpUPg7ioMTtd4CMRAphnc6vk7fvps3dUJbu5AM888s9Tw3HbQcMvXU5q6mdV5cYGhqkT",
  "key5": "2CBePz7GrbgojHe3qNrEfuRuU7grhyHcjZT4r94gXRvfAc2xXnMFbmSviFeT3yKQtkXCfShqFMFyuoaFVQSwFfHk",
  "key6": "3xqd4314dVQQhyFLRptcaBZ1XnqmUkLh2g34bxAoXz2y2R67rSjpreGt4sNJ6ZgbTsRdjT5LbMSHhmaFriN7fn2q",
  "key7": "2PdiTNxZVuM9Dd1qWN7sVRngN8NwUrrsQhHKFoMs9VqRoe5CuPuZaM6ZNC1m8D4xXFWTmL6F32FxV9uLrXd5zdaa",
  "key8": "2zh5zbhCK2oVU3ChmAVgV25En6LphCs44Fgk1MjkVMRurW2Z8sfBPeeJkjaVK9h3NhpXKBjS2bJ8czMzEaKtAnqf",
  "key9": "2HfSy29tKVztZLednGMRNyspMgjfRJHXx43tDpUrDndCyMZuT7Z9wXuTsDg9a2aFBH4PgW61w4FWw75KgueiNgdY",
  "key10": "4EqSYu8J2eyA27PBHq4WN2DXPaJwgVM2ssymzaweCKtqdcpFPaKMijNbGgbw8AQmsC8mvD88kheCV6B77PbHkiTw",
  "key11": "4X9X8j6BLcRUp28Kw6Moo4uowEmuMEtatYiPhYEWn2sGGWxp36Jfa7CoQro83sPdu8bT3d6SKpRn1A5C5yCCPimP",
  "key12": "5cS9te5JNovXGU9PL8NwnqT4jG4zcEsBRBJii3nX71wc8m4Tr6jVQof83tjuLnY8bpt2tP7ejaQofoRE9Lzwyzdz",
  "key13": "4MngS5UAyBs9WLENv6FqD913Wji7vUQTDJBvMAHhHjvoScwSzk5hugYTjeBQgv84Ce81hsSyMoLJ9oCJFDGTUN6",
  "key14": "3dpycQPCzGW1WLvpXmhT59f47T9yx65S2nuRzxjAqcSubwJfrZKhpxQRGuZxhTRwFxYD14CsMv7YKjtghX1HmewZ",
  "key15": "2oWDrtMRBkdn5hEbNrrjYYfukriA7hCdgx8u7MAhemsDoMd2bHiVhwLqsRe8EfkrZCt6DFqVDNgps6KmVL9cB52F",
  "key16": "3aRRNNUW43wExgrgqsE7qu8Tp4eG2zGZxj8T1Pcbupwz28Rf9GSmSQA7sD2ysX2GsemJejXKGbBmx1gx1gAK6EHQ",
  "key17": "39NL4rJADiJq752WeU2Ar5RxXT91LAusRjDnUWcrFmQWHS6iZPMsMwvBHR8M6eYCq5CUM8NFAb9PQ63VfFUozcxj",
  "key18": "2EPQbx285cM7W5g75v6hibyzjfyk2JDuEfbGcvm4MEMqgC21cksmnXng2uUTyL6Vf85myLmSCSKFvA2GzspagSco",
  "key19": "4WChbVE6L8x9tCphrKxj5LnbFvCBsnZcarsnXGBDcQdKBy9QWqGFoz6ieEiGdRi48veg7Cv4szozpVcb1crhpYEf",
  "key20": "HWyTSsNXVUYBQPaGrYNTM2Yeqq5MRvFQBobbcyZQtX7hhKb7giMP28zESoV4TfnCDfgaJbX4HAAT9JhrbDh1pgp",
  "key21": "5DuHpUNtEn8y4DaqTW4gyM1nbkQzQtESmjYx8RwZFTwCdNeUpgBwSVw6sMVvSj9VzJ2nq43XTKLcJWCNupmHJEAs",
  "key22": "3PrHfcvbkepjsfMmgidtsNDRmMVdMBebsEt44Gim1S41tmdJc6xyv3iW754LtdTPcJX8aQw4rWtjjpKY1DjHrgRE",
  "key23": "5ACMajf11CwFoFnQD8X7xGWZyNxr7sBR2YY9tMhLwqSoarB2C59FKmdacRHbiwxVdmvr5GqSNYcNombYZ5TGVTQR",
  "key24": "4npm62yA6RFR6zYiVtcjzDRU5XqbKh25hd6fEviCLaHVu7FgUp5GfuZfA63x3wMa6GL2FAsMcgw6c8crzKbXBRef",
  "key25": "2bu9hrQDCiqyqSzfgRXaGQi7fXrJYm3zpaxzDytoohztVaA3rYKWSpMjVjTRhHPV2v5NzgmjJgVGT6ugmZC3t734",
  "key26": "5Gr2WM5xzYzKs3nmXRQuHkpLXZtRTzUvnCPNKe1LsSdpTYbBAHYXYwNCXNkEB97StDZ3vNWz25ch736RwTxUuaJq",
  "key27": "3hN1rk6Li8bDNDZjofyLYyVGc3pfQMGrwM1Z5Jv1M62zssTnfJFH5tfNsHZJ4wU6MJYZV15JYaj7UMiPXMqsGHom",
  "key28": "4FfapeY5vZZtMUNm3sDvFuz4NBRRLHqcB2bK6wgh9pamm8Aa79UEfkuikU1vZ4Ucmx55BiGoySzKDdZdGX8M92b7",
  "key29": "4o2NJs5TCk4W2WzXw7xJQunBJ4qLgDh4bPRe3qFoQrV5pdSxQjS6Wo29ZtxbcNsT7D1qLLRki3gDmreb4zJxeaDy",
  "key30": "GNBSTbD7faRgyxppDWLi7JpaCB5kVGLvZHpMacDnprD5yTWXFgu46XzxtSes9bTE6UNpcBZnHLfDC1Y3e52gRw2",
  "key31": "5BhSWafiNuwEXH2FL5ZBLLf6CV5H5PaVj6GxRJivGBnni27V5jhib3ikyUAA4p3GxdjyTL2FUehyoFkoNg9U1Jz8",
  "key32": "4uVZcUUSuSiKytruLd5Qp18WRCtJgZQq4ra25JpXiEYvgkxbq3nhH33Rm2Rdrjw3Vkdt2JJLL54b51n7K3fp1tX",
  "key33": "4wuXBp3br6C3XxsrLKNPBtwTEPJ752rW31oTDCTkPzLL4nbTWj5CEW6YE9zZe3jXmCbwUhuBziwAD89mroBjCj67",
  "key34": "5AEuJjz2BhEvTAFXKEjUni2jHVxFAsjpTHvKLn2L2zVodjj8xy3TA9NicJb7pYSFh43oxTAqeLLDjgcVN5hULDdJ",
  "key35": "Gd8scxrtVLwG22tnHdAD6BVfsQPt2Hnum36B6eA2TyfahkTkiPEj3uPrrH7cUPuXyuD7pb7uATq9FS3NDueA3D7",
  "key36": "5THsU1zf3ACczGaRd855EnzN9C3ypBa8jrdR6PMskh9HNwrDAqrVHbtMLUxgvSF5EdqQAWrJw2yA3YCAUcP6yF2T",
  "key37": "Gnb6CqjBG1JadAhAtcKyJLQNS3za2ixUrg2sCNKQrzR6CaAJr9GjWNsFrGkJZRjMctj46RDrtmmokUcJ5Ngn5Qa",
  "key38": "2JH5cBGKxYF8tjhg84NfhKrSDKtRJCMmkVMhHBDXjXatVWWn5Kxt3kSEhcP4o3LWgpXKDd9swxCrLb1qcTzvobg2",
  "key39": "2odaoqRt8ua1rb8xA2CNrnFwkuzbsquhzGY9yBVPcYvgpXBzmzLAroq2DCGKzvD6UWsicWjLeJGLUiLcDzB9Eocw",
  "key40": "z4HykeaRZgjy3ofAutCfoBNuQqgru7vW9SmFuE6ppXLNqaMG3yCXqR7k73HM62cyBgBCSniRGYPVz4eTfs6gvFL",
  "key41": "3us3KhC79tzx26n6jvCf8Duj9f4T8eqKrMbcnYzNDK4e6r4PXf4FrdMx9RvvGoszRbrccKagFoDcrcttJXS5gP4Y",
  "key42": "2avWism9E2ZSbdczQfRXE6ZG3nMDznyNCkH5kgLaKuytGhKi9jpqeF19NX8gbzz2YbH6jpuw91CwXA1Z4q7oUKfX",
  "key43": "5i4frBXCGeugZeEuumT16Kh9ZMwhpHqungHp82nzU2CaVkeNxvKE8va631buk8MvHKnbyRaQm1AazzDLKNEK8JYv",
  "key44": "5CzGqYx6j9ETf7JNGicPc7k8cxCYGFBZfuNCudjeuY8cdxAaGYjryMSbYZZDYqnRSWFehhvdQQw2etpZnaBLuq2c",
  "key45": "tihcgWmAU1HAtwGXZp9wfWyoL8vNLHo18oM27dwoYcsAg2LeBL8c3mnW3uaFwHwRqJwEZZwoUtViva6G41Pht3E",
  "key46": "8Rb3qwqWdWV6rJaZktZMZ7XEDXQFZ2kxAuhw5wCwAzQkiJB2c1qnNBay3yxU94KxsQfSDVYnKqzWTs7wGz2sdvJ"
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
