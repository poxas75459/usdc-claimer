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
    "35PQWd7KChfkQrFZdU9j17HwVPQrZEFgTeaDAKrh1g83w9tr8Hx5ZyFjvcADMDbLECJ5HAKwPwrjSnyMi8Czf8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yp2aJ4m65fvd88A9XwuHW6Z7tvStH3tqNcEe5wuJpnLi47VYDTpAuL9QKfAjpXicxY54ySjdKViKVaukUPLaEq7",
  "key1": "5DRpeZsdHExcR1qmoBqRTUXWbX8GLvCfr4G9XZg2nxQ4eHFGtyDkKpZ67mmjv8VgT5MsGNNpmwAxtUqBBw89gAdg",
  "key2": "4X2jmTXYcWkMGRm3Mw3UgNHMhnWEKLJzCnJewooifuEYsxfAsxnen1hhDz1JvqxeY1mn7peZFFqVtTGAu2snqCs1",
  "key3": "4e15Xvnmb11cWpn2kxqYWJxw8uz1hdxy76dSqR9ty3etFtAKQ3JKAksstzZ5hVk9u84BusMyn47Q6GHEPU62QDm4",
  "key4": "5i7UXNMm7LgLRv7XRFTVjfwthzNVhmHf9TmDqypT7Kg9av3tfSc35ZZNxCw3Tov6csfEkT6BKaWB44F3shnWPHEX",
  "key5": "4Jw9EXPrq3j3k2pFzns26i9juz7UCBz3fkZYm8UygX9hhRRyHyCTk6U5i4jjDv5FJ2wR2Z9Xj2QAFHehzD89AoWd",
  "key6": "5GpJNUetKBa6qwRgz79HJpJVixx6XYNrELEX9eRRY9zo21KVQJYo32JiaxkoYDqA7QxJApfiCRvCBXibHEUVMaJV",
  "key7": "4RqoHhmF1kjyyP2jrXxViYAbisJowV3v3LWekXAwcB8TsT5Po6YvUWCnTFfit8tP6pKEDRb9r3HwQ7XqQ8DGU7QF",
  "key8": "3K2rAQhFkKmjefiEKBCu6HWFMG3XTxW76FNHxxo6yqerzCdpST7MWzQHZEsPXKeKaXyW49G1kBFMF9DwvrQoNMWj",
  "key9": "3iuZJdLkYaYEyyhWzjDWydBsq18JVDJMeaqJAo4783JdPfzqjXi5G756Ss96nSZfqmtjxEd2MvbRBU2Qj3TziZv3",
  "key10": "XU6DApDVDTakTfayXzbg6xzZoucrkbPa1RN2rswDEcP8yWSroVHigEKM1nLJ5bpd5MctmuZ7gc6guQjcLjqRagp",
  "key11": "xLr91VQ2ogSK4usE8v1iAGDXKBp7jdgkJGPwv91fwg98QN4j4CuCA5Xtvnz5G9V45xzLhFhJLCvCDdjdWYyV6U3",
  "key12": "3P4YHGofRgxssfL5MfPojZTKfUp56ZzYxPV7mBv1bW36eSTL83CHKDbG4PBdp2zhzMryTsivcsLnJVrAYBHaC7pt",
  "key13": "5YmJxQynMYKRceSk7kc1B9i2WKroyNRzDq9AkA5jjNAqxwrW8RasqHK3wZiG9hbVA3ZF4KxMsWR4f3GBwaUv48NH",
  "key14": "5VEAJxvGKpYoTcQVPi4DktXPNwcvL3xMaSHGwf7VGaMKqEtbA26vFRGEPLqHeMne7p21A6TbHv869zd2V4C8ypBx",
  "key15": "d55aKzbYTwap3Ur3iRjBm5dARXihqCSDDsrcfGjKdfg9XVHkTYWymaWT8X8sfeRscuYF4CGdq4DozhAqLKrEYs5",
  "key16": "5UdKm8YBhqY8R7nkXUHmVB79aaLR74YJCQ16yxCpTdUSffvet7tMpP6s49ncbAw9ZTb6XdffDwgUjQRaoVmMpfXu",
  "key17": "5g3Zio8CRQWmFCMNFSV9DcGjBX9i39fN9qME1TD9HmoMwUYZEPC9PUUZ9u3fbyceQ8X4rvDM3mcA6qwERnmQREwF",
  "key18": "4WqVGMzMtnTKvfQbWGE8TzzykTuxV72sMfKC6Lm9SUrsBSTPoiiRCBZPmzW1agrg8Jpde1MXomFMcSNGpGCpMUTd",
  "key19": "3SserHLvFjd9gF8bStGsQZAM9zBY5Acmg1GG2MLVx9azeQG391EhFNZeqhmRRHYt6g62Wb9bZLP6AU7Rs7u7Etov",
  "key20": "5B8enATEzMPHLtnqHuzTNoJCupKnsgnHg7h1mmSfrVE3GKSpK8eSTn2R3Rucr3g8x5JitguLGNVWKpjBskAwasDR",
  "key21": "2hQCL75joum6uVQABhzqHq5mT3oUkrnXfBLkCg9oLeFPWboTA6Aj5A3bFsppTNcoRcF7kPDEd95u6ZsoBwDZ6rxR",
  "key22": "4dzQ5WFst3VQZvbCkdapEmhQs4iXvnbmwedHX8vsGzQghYg2yTYq1CK3aoTK1DXWYEqU9nZHRyWY9PPZy9xtgBMF",
  "key23": "4yrjcFhFvC37y883YFEA9SooHtGyz9QJB1nSjE6mZ1AcGRntKCpjNXaW69nc5Xm6CWJZYD6RDWZgpRAXGHGq6HSB",
  "key24": "VtSdbw53wUZBuekv5f7wvJH67KEw2ZfHYqrBm2p8gqwTS2Hh9uFiy51iPbir2FZ677j5Q9oDFgV4Ww29myV84iX",
  "key25": "273HWVkYGfTxZP1cGtdkk1HNf94Z5ApTEpWXNvwoY8dZiCYMJuq9LEp8YtQNrfLwJyD4cxEmXRqq65ZdqGBPtHvT",
  "key26": "8v7CMKuqnnnzngKXFPCYiJc5AUjAnFPtdpJs6E13fRWYTLETEesszDNg893Hjori4iGWTpsfQwSorqbpJX4HgAd",
  "key27": "5zesP5q5EnofkuK58aNevHGd5H3fFwhsbbFyZ3dxrrfAFfbQwDUiFiyu6Vp4WRapBVvHHocmrJnHSGNQz4EGzsxy",
  "key28": "5BP63vWXYz9PAhrZsJWXbyDeGzxAebTvdpCm4KA8VshazYNknFHVLqu81WFizDL6w8MkrtKw8ww865TH2G6iA2Xj",
  "key29": "aW6xnsn9UZj82d7v8jMw3jM8vVUX1nx5kAj1A166ejMuu7L2tauPYpmZk9DnMHZy3RDRcjSzQyrJS7gS8J7zqNp",
  "key30": "4PtCAC3o7Ey4ReJjcRcbY5Cyhwj94MCnXaWHnDTiZpv6LwQRvMS3gL4FqGreXmBLRhwMD9JNCU9meZDZ6nT6cMHM",
  "key31": "34eYWem5cgrm7JrHTodQqkcRZgPv9tV49CWpDUarJuxWkyJ1Hx6C1rR1Qp5kjDa62se9SKMxJfDpGpBMULUB3T4P",
  "key32": "2nHZtKgbaAHGa3uERppBYZNFdBjLfbnpJCd557dpMDmmuPmayQn37EuwYucnxKL5p8wAzTBqQyppiSg7QTprUkcY",
  "key33": "2ihg1aMBghQssv3KRyxmMDL3M9UK437oPmVYi4vZa5pH95MFZXnBbCA4CtWjHVLC4WZ4agb9zhfYWWf8beKYWPbK",
  "key34": "4Mox5HPEqnzFrZVZGkDJ35qscV9wMLmV357tRHiC7v1wUKEPDkVwmzAhL7WikkmEecpCAWKqKJkMfxyZA8XqPq4s",
  "key35": "4ennW9ACttHuqaojcaGqQTZ9qcV7wt7bhm4YgSEw6KdVDqRgjidphjyNcj9i43jc4JxBtwskPy5w4riqxN4frQp4",
  "key36": "4zGRsf7FEFFnUm4VbaL3jkECb18fgeTJgKJuzmWRU3oo7AaosELgabhH9Wr9i5USf8zUEXyifPw4ZCtqok5b5co7",
  "key37": "2oVH1Yo57wuDJgVPdhK5DEgcPPy4HjWWSY7oLcK8DVk8ewVu9M4CYbhmKPbE7we9hMrhdVqHy8d9Ws5ybBYn91ym",
  "key38": "mKvHmBCSRPdZ59gN49BvjHbKrt12McpmyfrjnPg4LihhccGT1JtEnQQ3EhbLS5oQMR6n8TQfixFc2Aitk679Afu",
  "key39": "rY3QTm1t2e9hYySVUAKMeXPigyg58Bh1grHrJuGx2qgpR3ocGEs8ZFpe91nHVtba162PNvFc45dySBXxEmPjhyY",
  "key40": "5e9hu68YpqF7uKeJLf9P7FsEUrjownVYDa89VraVREyKJ4U3ncK8s4mSvcbnhynYnvaJPKqG958t3LTJ8zqRDGet",
  "key41": "5yZ7dcVBFc4rWnLGBr76ymAfmAEMbJ1FgA5i5uNVQrQV2cepRY8R5pSPGKtFMTn2BygAEf3QXKkWQPH2UpyFFLAF",
  "key42": "9WDPAfXSHVeMK1Nqc8cPmLSz9TFo5UATBxd4Scm3BmbdiyX2WqBeKVZJgysy9QkhBbx2GvgL7LUrxwoj5FUW8wS",
  "key43": "H7YnePwWFEXv3i9ftK4gKhu5FReSvuK48yzuRn37yBLuVoxKkd1T33MEBT6imWkLBLbgMAR5s4Ru8guVh8DcGDf",
  "key44": "4gszsRYHjmSL2rJjXuhVzyqvLWFQRUhN5m5NzPFEPP4LtCoxTZZv37CVnavUUY64eKEZG4CS9A7eLtYCWkyZGJUm",
  "key45": "sXAmNaGBbTzHTimAtUM8gjD6VCPxySspu9inmEjNdgsALuckvce8pZdW3wpymuSEiCg4H73G85hjFxAy8W94o9b",
  "key46": "5PqBmXroSTSqtQvFbnZgrTvtP4TMV8vPY8XatPYhkK9daRGX95BymKhqXqqVUmU41uhKrdiWqC4up34gmP5E4Mv2"
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
