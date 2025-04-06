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
    "jmfXQyjVBjkMoimpgmPkCzmc1mQ1ZPLnmNMS7rhzELPDoTPq52W8WbVynKMM51KAffsdXC1bEMBaw8qQWwTwNLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tA8mRtFsi78btBsLKRUm2Y4AxrZHbZ53fzkNUPhf9ZiPicBR9z9Aj4PfVzHA4ZMPboV6S5WrKy7AkotusvKfrBa",
  "key1": "3kivNGYg4svXriyYyPdR7bEdXah13s2sg148XbrLqacSQPftp5Wkup1kNSXFaS8h3csaTqyRDovPq3bAhznjzxNU",
  "key2": "46ZAMzcJeA2qkLouFuYdjZZPxQkBf6tTMVUc9S6aTLsvALUPL4XRggWJG9AUCxgSAmf1iC3UUJMn8exhrQHxZ7UR",
  "key3": "5aXL1xwvZuwyD8stNumfGtzYesrg2kyXC63tc7N38dqVaFT41CbTYTXqqvF3esN5hyd8xo2dpWjFveSkw1TSKwcP",
  "key4": "5ysmyUXr1NPbk7X7ZYksLNDmDhKFfJAPFbpD1QvGWfLmTv4bxJazbTqHAaiZXJMwktiNjEe27LpxAsWy9tjp2SyL",
  "key5": "2ZxXrMjGrgGG39X77Rv7Q8Qj48SxwUF56qZKBr6WYVQ3eS3iBFfvnWNoL8Fgo8pPXW47McyTjGw82GEcGtHiw7LR",
  "key6": "2SzoMZg7wkk4cFjapeegpkcj7pWNJhSV6oNMsZDP1UFWEXhAAWrbaxiee8JWt2d8jkNsMXRBnJZf1TVjgPEhLCzH",
  "key7": "5d5GFWb8GGPoMDoibH6BfnDXoGhyJsCmcvKoEpTuFvjhvrecJoj14nazpWEUGbc1BGvJYmvkZi7E3sSgiD26xEjZ",
  "key8": "5vyYVreGixhdpKtbb55fPFMEVhDxZfpLmFGQBtQjKdW43mcjsGfEho6TXim8dbTHyG3qHCorU4YToS16uFe8JuZX",
  "key9": "2ij5pAWrGfbKYPG2kHoKsxKAkWRbB2wpRpXXNyFiBkBFBgC8eNcoMZ1C2Dq3uKBx8a65d9mKmgwksCGPNi1cjcVD",
  "key10": "P1HvAXgtLBgbVtXortD7augVtKyNRhYmMzBHewhscPf2YZa1qvUSb56ZUWouh87mApgtSKGWeGx5EXeZTNFkFtV",
  "key11": "E7yQzGTHVFo3E5VF6KJLrsSqFqLq3tNQh1Z4knXjNdQZGj9uAfv7H1S8iL6ZNnVCTK322qDJA7FuqebuZj2Epog",
  "key12": "HS3KJ7oQRBTPc5ffMnf9Wkp9Q2fdAxgXm9wDFcaiP9UtHd8t1NGPBzBPGsRP7hvRY4nz29FYoPnL4GubgNZjTzk",
  "key13": "5hM9NyxADdLY3ecD79w2zeHSPCGfwhjjjjeqUNmSGWXkA8gbok1kB96SqeN5wJg9r2gbb7TrZqSczvpihSD39rg2",
  "key14": "2sgvK3JHCj63F6QcnKQKk9Po1isPEHxD4RdBWueQ62KwEn2xmj3WsqvM6YmjpyzLJMjC2AC8xeoHEDdtZpgtV3Sx",
  "key15": "5SYWtEqesJW4fFfA14gheikLrrpFAbS41Z3tGDknY8DbTfh5aT1EzDLVbHbACqnDj96RFBzibN9Jom8GMGFd1yVY",
  "key16": "5GAacut9scLMSCEFBjpnFZyZPbo7MswSVhkDo3V8HXWVCydJJsJEryVs9rudhNYhmv7kAYQyq9GnqRiRinbF7cCz",
  "key17": "cjim9Y5KMz6gwriQ4fuFoV76rRadRWE81rrbA2bdU8vpbXPKB6cEWcc3NAuuVkN2j53WV8fXJxQbTd7Fo5tsKiK",
  "key18": "4474cCFfUA7ePpQsgacDPcqkK9XkYFfwM2TccafFG8qcLmrbmeUrfYtqRwB5QnegXXJcFFDKgsV9JTd8QqTRwnW7",
  "key19": "4seGLpbYeB7gudaNGmmLinEFWg5aU51VrV8AC9qjfHTicbfSiLWNVj8dsA32RWZEYHhyJCsHakqqScxDEqfFy6od",
  "key20": "3dxdjD858esgexTVYi1VVAB7wMVEsQCkQ284jf3ystMndiMPhc6nLDNXktEcVtxWM8PKSsqsb75bWcFSsf5Axzna",
  "key21": "4RrNfGhHvLbTSJ2jS848rRMEGyFcfVnxeRsNJywwpWZhJcZ9HdeDkt84F27ZCGUaPwGWFQaRohCsLbKwhQmaTkk9",
  "key22": "4cdKug5Yam2BLSvDuP4skNH1NukbkTWGBEMngcurBYHM1fHZh26XNfhwbb1DoZW5avPkUGGvkfWojnfMiFDiUBcx",
  "key23": "2xTu8CuhmJUefvQpzao48qPDc87cG3E8HrB3rZkAAH3E95TNTRUW9KdjJzEGu7tYuDKMqgdRDt6WnuXFGa4iDwy1",
  "key24": "3bAPB1eM6QYqANuRzEkXG12zd9LvFHnWZjvY7c2bhb9gfYPdmiYbtJoAFVcVf242uBabMzPD6WJU48y7aEaxVxwV",
  "key25": "3yq62MXoFqRDQuJZMKiVx1jaPr93f5UmieDaXyzJuMH3mhHCJdFmxZW2ViU8bks6NwJfbxKMyvV4wsUUmHQ49uLc",
  "key26": "5TmyTfTRNBDzmuNfKspopGtUngzVkutKdiYwztggFQtFt5N9aApjwLoNwTR3jhEjvGYCVD2cgGJKNbV5B2aE2U17",
  "key27": "c4fifazhyEQqtRpDaR7XurcgoCoDrPR7HrmjxsyQ9vX3HrNTREgCnqNFML9hKwmAbKe5nrc2HZY61A5QJLyKtSC",
  "key28": "3D4BwcAeaz6Z1dsHJ6veyUfM3bEnxmAddPrbjxLnzoGdDhMdGw3niUJpU2TUmgrUJq5PAMd4HevLs9bWK1CLUeuQ",
  "key29": "N1JipxKiToApfpwnr7V9bwudYFVf5jCXwE3GJdHeZYCTRUNopdUEkGHz5DWTfN5Cv3HzhoMSL5f7eNvppAX8HZE",
  "key30": "3oXywKt6kv7D8yGoA6fFYn4Yb3yuPQhQpgvW92xUEnFAR1XjiFuC5Y7FEcsAsk3xvbXNkRjkoNv8xnA6yWMFLJqQ",
  "key31": "2tSBGJ4xzrmSywhYR9n4Fbe85cUbFepLthq44zvi2p3SAeh8gABQ63dhikvuszW8Q2dGtunmivHneQ7jEZfoAVFr",
  "key32": "TYJBsbSm1vD7WRaVhE8tNUZ3SBDWVTD7FcWMqigTz7YXrfeKCz2cY1KZ8bdE9SYCPzUkSbQcFsDwdEEmRLMi2sp",
  "key33": "2jDgKApiH2dtUPoPtmEs5Vr1C7QQHdFhDUUKEp6jfSFbM7ftapkAqgtmA72eMDQMbnJ58ufAXTPMtKwT24ZraqRX",
  "key34": "4XkowLaes98FwpdWGmHuKZ7xZTXq7DcF9zhW2pyMzRrzmjE1n2XrLGjysrDVhxCZm8QzFau2DGMDoedoxQXJEwbM",
  "key35": "3HmRp9GjTpVxUSne7DyZSBPAmUgGAcg7N4XNb2mQeCbXYQ7xS85MTPchKCd15S9gJjpKY4jix2WvXydr2x1trhB6",
  "key36": "2PvQrJ1yX8sMM83uYUFXu54FpDm9J3MgCykDU2ebxeSmiphnUgVmXrFAZzUhEwPWFv6YjW42aPzc26maKN6Gg5yP",
  "key37": "4NDwTGJDViSRroDmU1bm9T1XxczzNC2ZgrjsJwLGMzriaUyVuzy8Hqsh9pfttD3QBZjPcaqCXRQCrGzi5uQpGn19",
  "key38": "j6DYsxZfS8eJAvRg93ej454qLWjGV8pso75wtPAQ7KXpD34WwhoUwdWc8412LNPQYHCyPSibQZyvKWAmutnEixS",
  "key39": "44aFPwU9dfAC1B3Aw6mYpyiV1UdNDhwzhemCpuq64w4kWyZS48BCEcscrNEgjTjM9wHTP46D2CCaQVyCbjLei2LK",
  "key40": "4MNihjqng8sj6hGmH7dfvGPzSpgftU94smKTyRcaSUbU7EUVVVhwb69RqPv1YYAZT7CRERCZtsXrcSGPrZ9BTdkw",
  "key41": "27BVMkCRYD7B2oFW7mHdozJhPBQ39XnGRodDXi815Ui9hqvALSJzoLrNnoc2QJLUwQn8TVJwLx9R1uCcaFdnqBt4",
  "key42": "cNGM4dmurWTkHpX8udiU8XrBL25iQkcJssG8hcNBXvVHwsZQkymo7YWsYRVTpNVsMm1wdt2jWFqu3RZMoDjJqmc",
  "key43": "41qvUFXX7ebdD1CZEnDasUQpZyPMiiKdPcU35k1kYJeKXtoyxZ3KvgK7jxiRPi3YsTdnKuVnmDEbHB68MpY5fack",
  "key44": "5gQPRq3Jm49qDkxuZk78qz115w6mVE5boMecHJzaG2b6kNoCTGo21P3ztWHviCrBRGMX3eWUy7EhGax5jULLqrbS",
  "key45": "44EbTQjVnePtjQWafFiReD4Hp3HLfqW9NBrEnvUKovaiQgYf3JGrryQqrhHgSsVNTUAxDdd4gUKdZtdG7cLQteNf",
  "key46": "5pKm7B4AGvxycPM7TEzbMmY8U4g8K9f4CiazyqnQixyHeqyNFfGZbnmFvhyYYTHGXVEJ9Z8KPJkejK1rmDDGj1rQ"
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
