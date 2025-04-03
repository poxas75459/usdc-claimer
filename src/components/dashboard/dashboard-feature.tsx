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
    "TQ79jRpg8GABwFgZyzny82sTjtH3MUNLe6VBG379tozgcNXuc48vYfwno6vRho6g9T47CbDnzUfRWD1Xg3W4Tk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E7yCbNyNnTET51VgFiBZbCCkDzcdTctn9KcDxhtpc8AHR4qxCSmPE6XFUqhRcdjNaV6pmS7PsYqAZaTq7eyKcB5",
  "key1": "64aBGUkHp9CPdrqrmJ3be1ycZS8kwFD6uxcoSeHKcwyhMNmKoWU7to9T5TvMShfgR1xUUy5Qn2wqs78BqkzEswHV",
  "key2": "4zPyP4fsA8LLZdANciggDLkabVpwvVo4TA9q5k94U4uC6t83HdWVRavjVbHx8NSQACnZLMN6FMxChzF6kZj3cGJP",
  "key3": "3t9qRZ1H5oeoG55keh7r4ethwzMco41X6WhMYgyPYVtGFf6aDM1zZgV7PVtDHb1VLFSY8fVrNHmj4ePBsYSpXFVN",
  "key4": "3vvL4JS3Esvp5TWBeuypBeang8twC8dX3ntbK4UJDTvkk5nC8ySXddYhgPWiNQ2hcrAgdipU22MxdFb4FqAgnyZ3",
  "key5": "DkrL3AM6ZrEm5abcM39YKsuWEU9kBrMKujUJqyEtyc7gQJ9kuvpxX22umEGjnthXiBHKf6NP6sTjd38gZo1Mp4s",
  "key6": "3WK9WxQZLw2CsJ6nW9K86XNACiZBbgXQymgjK3w8SiuRiturMzxbuQBMu7KXJj3kbAePug4SZX9JvJaUsxE5mXVJ",
  "key7": "4WhZESEMXqgyQk179sB27htvKj859x1a6GjFq2WnRJRBa3qWkdvVAdgEK2VWqkkCuUcnjUzFJZeiw7a97vmdhRGY",
  "key8": "AEZ7QWwDkcaEgSu58MfYEz9BpZRtjyVvgArt3whKGH9QnCYLYPFJkSHKpP1nrKyYpM5AFNmqGKafMyG2oq95tMR",
  "key9": "2fCmKwUWMjVmnsZxd96rwrTp2P7t8YaUqAu2rp3HcMqnZYWQmPUuv1g9WmBFVPA9AxzAoPMpUkpzuLCavaqhcanj",
  "key10": "4P3m6yqhfKVAhxky8rBK4PvVV672ejrzej91hKGf5GST3DZ4i8Tui1Ji415xjFPY4GfWsseBPr5CZYgPqKxLmVRx",
  "key11": "cDyz2QFXCEb1UCQmmGobx2KLtyrixCySJmxpk3RgL4HzSkAfKWhVHmnx9BdT89Y3aCWe5LjyG7t53Hue8Y9rkXt",
  "key12": "3nNvW5LgbhHq8hLVabuyCZegLx4uEs2NpG5g5CU6jdV9ihRDTjRqaBbH4gB1pvHhbMvEYEJxVjabDxrL7WUiWH3J",
  "key13": "59f3xJ2RX2Uj5zBtgHBHFqnjHwZjxNjNdQ4qXmupYPtpgDZ3hCa7Cp3JfZJc9QHq7f2NWxTrzUEXHbkPNPYJ44G8",
  "key14": "4cXkJ1c6UDWqc8zk9wHJeBJBCHHn6GhyHqnjTu9Fize8m92RN29TcBRYNBWiJRifjuWp7VwZRPVQHD5sLYPDkTPp",
  "key15": "5cWvDgtJcNoVgbZEmD3nXAq1k6Mv7vLSZVBEphyr6q7SFwWEwmsN2Nqa6tQtDfCwfn2P4wvuFHF1LgHzzEV6TWKX",
  "key16": "2PZB192eC4UWpaRMiHS7SarrcqCEPu7eEbBkaUtUYG65uznrxsKdSAHnihKGdYomgLcQrgt45Mt68ok8utoKZwd3",
  "key17": "2WQyqj5soWyVm5Xgpjqo9p2E3s8s57JfG4gCr3uYvDgMvMJrnnQEPB6bTRQiGDgWtyTLw8G9fkZ9KiZqU2Yi7MJ1",
  "key18": "LqsJdxkL617ifok3uFt975p7imP3C2xhbdes5cpnu6kzzeiQ7bLWp1D3BuR3s36rvsB2YfurFJ2PMY9725pNspt",
  "key19": "4aqSEvKLtVhSFx34tY8Cj4KaJLrasgpDsVLUaCSwwKxiPvErcrqK44KDp81aKVcoSyPbJJWxckFiGTom2hgFyo5L",
  "key20": "4Dj5vQWTRMC8GBYuUSfzjykA9KRZyNbAsN27sJtHinuSyLGgyjEWvjrzxDjfdJ7RhfmFKtrBcUsoRjoCmPmNn7Ap",
  "key21": "44x3BTKuAM6dKLt5ezyKdM4p9ziFmiWbEsk87YztGeBD6z8QBvYgbWeB8HR3oSp2naZS6mbtYd6QAepM1xi39DBV",
  "key22": "4dfUwGJ7YhGUGcg4wHEZVtjnb6rwqwcDyfTD3viv2nLGMxTKKLPh2FYzLiDzswBz3tjDsPT1AF8obrWtsw1QFw7T",
  "key23": "LYZxBX3hvC7kwaAWB2vtW39RRAkUDv512N7jMTCvYnGyZzug8KQfSCsueB19aNmJT5grCSAod6FJ5e7UhqYf9vz",
  "key24": "4TTtRXjGz1duvZRqUzHtUf927x1GzQEM5Dr3WpNpSSMqfZJjpc3BKXk8ZDmk1oCBvDQUFM4p8hZHRWS7axt77ysk",
  "key25": "63cwwm7TwJTi2HgYzFdd3EK4syBvZXs24fwBSsXzrMy6EukCRxBKySm2Ea7GEPwZAdVeybQXP8ESKskUuaHmXp1R",
  "key26": "5BkeP7dptv2EfDpDMdyPGdYEF1TZXta8yd21UGvukFS2WTF97twFR4L1R24v4GrJ12Auua1SeHTMx5uohAA1ygHG",
  "key27": "5YMBBKhJnZ6cXCmyhteq5b3bYfCLdahnJxmJJHSS4NcyQ8RQTTk6o438wRSWmFjqFK2pBrSVQBSKCey6CNc27hCY",
  "key28": "4GEoTkKQvxk8KaSANLfsfhPaxunvM3ixCtK4sRDWLXhLywUatTVdVjMLYaxPJsoAoTpRJTqbMBbFrdNH5PtrmzZV",
  "key29": "5Vz5g18XpHawDrE1MCRMKMd2nT4V67ngJBFhz53EmBrnVCax8nDt6U64Tt6iSBg9sbihBvwJEyj9Dsfz1g2LURF3",
  "key30": "4WXSiGt7DseJSxdZJPVQWyxf7XWihoTgzyUpnKZeBVw1FZfzLHstJ1eQoYvPezST5E2Ck3SXFV3jxCpegGgzYwAm",
  "key31": "3pZ9zKEDeC2CpNtCKHgxrP1eovXzRrULuWCTPAeEbZzaKCSy7PWhr26qsLPtHQjjye3auqnqnE9oZ5hKzfopK5hh",
  "key32": "3BqG2GfW2585xYdTe7vRUHFhZU3yLMzLAcJ5m1D1C1jtpaSErpbEV9f3D6Pxh6RGGaSFi4jHXH9NsK6d3MNx2yJa",
  "key33": "3MkaxvC2Nv2pKcYbe55stQostugC29T1LBupk2C9CyuxHpzqnC1boT9tMTuWydHVJ6wFAaFsCvmdUwnJKoY7zJBR",
  "key34": "62pE4qA6bVGFLp4VFLot8dVmwvYtAEoCiBX2bu2AdDvqkmYGgtM2wmU756YjPK49LHHHWTzYTMR7zVfvg2MPHp3T",
  "key35": "5GUyLmKNcU2BpKUGRmVfUFV7iDaB6m32HRR9sC1M1YuzLE8zEPx25ujXKis7ejrT76YE67E2GphgWbXZ3VcLQ23X",
  "key36": "e4EYGa1vEe2vn3h8JU8MDofmKoSbYAC6nPmyBvC1VsfJLKc6bQXw5iFDEXrrLvyJMsCSDQAHXnGLcoxENWPyDos",
  "key37": "2eraWPC4tRs8xCrvamkVegym8yGjjC8A5Mpw9Sk9NoNEHxUiuXUnfM8G5vnLDcREyzL3eVx2jbMEP4BWsiJ1pfcm",
  "key38": "4wZGfc6RJDXC8bGmAXppEB4V7UricoeWmjLruiDR6nxtjsy7BaKy9jVouKb17ruUwTRqwyU2inQ7fxMoToEDCvJC",
  "key39": "uVnxHsHoqfS2rYZagSBbw8Ag9A62Gxd5XR8FLL8jzcJLyMscV71uD3jiRL95koRVfnx3cRr7o5LDSynuRKgABSF",
  "key40": "4PQif8Uq6uh1MQixeySmfHWCoKV3UZbgMyNk9aT8K1oGvvYaUq4bSZdcy86nKWniDH4TuVEzvmXEFy8thrs8uFbL",
  "key41": "4XX3dKT5KVCCm4AMFFL2ofhQaR8wiSakE2aZbSbsJR6mh9FN7R63ff8yaQiemLDKPG3YdQLFwniWNKSQde8zNXaX",
  "key42": "5QfZaARmvkcjK1neJFQiu42ckhnsnL3GgDSmL5xRjfzoSFVVbEev4H9taug7eyfYmLyUkCJRtrb3TU3HgUT8L4Vt",
  "key43": "54JqqgbYt7HWbUXbzNjTNo2Pb5hLcQgkXjqimhaQVe7hyqyaFcyHMu86Ec6wMDc7j8wUasV4RTiAxZXJkwVVoYBR"
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
