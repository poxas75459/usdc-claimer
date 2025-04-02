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
    "5D3HDNUfVUSEzZoWxbEhswbxJJuRoMnhyYe5WGdgMArTx6EN5Lb9g6SghNVizku79TypFJi4c5tmivxvsrFLv8Ee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LykyA8QGYNQYuh43ZhHkBruiqBkY388RxLcCrvKGGfYaSRU9QEUDePxm3minoMj8JaE2JDg24zWBCp2TFAALCsi",
  "key1": "4fMqsfJgsFWpMiGr5BzN4arbmfuZzontc5gJrJDCJo8v2866zx7ZgpzQzYy1MFMssHN99TakX2ZjQfEZwMHFLWKV",
  "key2": "25i5V9frgAqPzFshbUua6CfozYoELgEKeMHYfuqYfEBfaFwn7VJSuUfP77xFzuYJGvmGnTBWwNAitVMMNuRhBDmy",
  "key3": "44R7rNHrPXPYG5kNhJDnW87t2QqnVKkFStPw991ryYodhgVZtrefdSHAmDkZ7GkgvrnNF38needhGXHzRw9wwmnd",
  "key4": "38yr414Re75dVvfMUUp8eVT1MH17Cc8GJQSQ2V6YduHGLcMCEjpVmsgp1sbdap2cTdnMruZ7ZwQ3zCAKUsGW4rHf",
  "key5": "5GorCy2nghCJJgDNzEd6oZLbZEunNiDiHitdjQv26wPHugtVC8C2mAetw5nTwEnPtJCCw4xwx1gawNLNjEQEcUq8",
  "key6": "4Kj8Ujm3E8FA17vGUJ46pcAdy5UiL24AQ3i7jkRGeK9gMcmWQrFo32rqVh5cAaAEVL6gaaDHTBHnFqyaxNN8miZe",
  "key7": "4VexpPPSrxPsAogrdr2XVZdTx2h4xGBqKypvrfrj89mvhFL1tSJPg5S6XjEvTdWgy19zuMLyiAyXJtpr56DY6UGq",
  "key8": "3WXCRrsm9wxh3E8mQFGbuDZd5Fpqef3wJ45iNDxrHKa7u4qNtaYTz8BTBj2Zt56EBtf2N8Uhut2nksK51DCYu7mh",
  "key9": "47MMRAfrAQQAgewXBeRcwgCzK6GWU8A5yRQ9JGj1U8N4eUTMtQYDebfvVSudn6V3F3zvfVqs1p8oGCywDxf96QGF",
  "key10": "42xNyC2sjvxuMn9nyJujEfZcNsqVLaz6R5JQxtwzKDdKfZjJk9uSnqAJBbN8P7gEVhzqW67Ppz9PSAmYBVqvoFQn",
  "key11": "JuJNmMjj15tyf5GscDS9uca4zzpkv6EgQn58S7riQEn6wTyTfa4DYbqCkYkqiAa35TMYdWxNBaVzs1mQpPPDWT6",
  "key12": "3MLGchNncjFx2QCTanwMZLkE6GJE3ZG4NmfQdscR9G1o2YAfWbLy3HgWqYNfUy7xwASLMmNnR7pxV8vtxN5Fs7ZL",
  "key13": "594pimARbXxsnjfePGUPqQ9375EuLxpbZnWce6gSRLNojddQRQKfT15W5t7qi7M28MhAPy9aDFNLz8TzCZLEvVQW",
  "key14": "5PEGVkKcNekonGHq8vB14U4C586X5MM58HB25TbMbNqjx1ZAYkBGYgWACRS2Qh7YjrGvBaMNoJRzCucSZqWcRmT",
  "key15": "2sSUVHcyfr1P8zjML6U3Kc7hFhWy9xLHAMhK1txNcHwBe22uYibWBKH7ekuVrA8nDt2WT6Juy8WiGuSSuyV4rtFP",
  "key16": "37HYZQxbuZRTY4YJtEHkqhPiN6MTEoype3sQoXiPKgiwNGE1utkpU3MVFS5FPFfxxaT5hscSg48NxdPxaPtiagEo",
  "key17": "5rn1qDSAsGXpkJP4JxSBXDJRQdY1yua15fJwtYJGUQ8LzJcTESA15vdF5pNnjwcbKCrtxLHB4XDuAXm6sTuhDLoC",
  "key18": "5QHoiiWhi4rtVLYVmrXxA28QUKfAuzREVysRJxvpWLKvsKdnFTvvrLbLKKunFfzJgS65BfT3i7QDPU4jRn6rQKwe",
  "key19": "5kZPSAwK6ye8Ydz7sbKeD7mjjAL2kCSaWaFteGDeMTaKpmTJvkMGeHwNPRHkecD8u1Utbar6k37zXDamNzTzQc8t",
  "key20": "3J1w3bQa8vxvRm4GU9ucZcpt38SqEjHBC3y3nq9WRX8geJc2i3wxm2fNqeYUThxCvzSHkfRq3fsWu3HESmPBLCzG",
  "key21": "4EP6Ec7aZMfJ8vfN6KLe6SsUZ3pSiraiRXEJ11uRzkrpNwJY4WtkyQvcqKzCuxteCWnRxkgVT9f7FdR2NcwXwNBF",
  "key22": "avx3AAQ6zfDtaE1ATp8GuP9Tvcv3mzhmgw5dvRxaKLssUvprrbiUjMw9hQKsykMdwGt4ZK9JAkEv8AqknzX5Jej",
  "key23": "3YMmy81RupU99z98UuUY7AohWVBbhXnpbMsW6VHWhUuizrPChnaBX3fiRsP6bSUHdgQHNZRLsBc7RuLt8RpfGLDT",
  "key24": "pQ5r9UTqz3k39CU9oJW5oAWaz8Upj6sUiXoXNe7R4RFJ5RDHtBHfR2LfYtZ7L1W6SoUgZztemGdsbkgrucaKu1E",
  "key25": "4eqvdt2eVwJaXZHWWWGNHXNsUMp7JmfCPJ8qxNBfWYa3oj2WPYLojwub5nR7aehvumsNDejmAty41JLQaR92B8yA",
  "key26": "4ah7amL8bB1ZwLyKmBYLdEk75KfBNQ3H1sa1poqNDop9DqecRinyxM51YW7aAVfXxmt4NLi8H7Kug4wzr6isR7Xy",
  "key27": "4bEeEY6Kcbh1CJTn8Esmzis9xrN6m6UN4Mx7LQUXMbdbXxtVDtcbjaZTxvynXfej2MzgqYXJWiBYkv4gbDjEFwyJ",
  "key28": "4Wq31M4M3QAK31jokBJaC9T2XRkwPwgDe3JFiWtf4qoS3v6dEiNgEYXrDoSgvaDGUxonz3QEdRv5kSjtKqQHo9ND",
  "key29": "37t2pvEGw5PcAUx9Md48Sgx8hsuT13x66Psw62CP1mHLVqncPpzikf1mY17S3z1dyVJEv2S8zNA23zLH6J771hQP",
  "key30": "3M1GmuEfzyC39C4BA6yVSqrm6UBrqsi6DNCosudW3s1KD7x8iqMEgoVzKT6sT2AuivyMrXFx4fyEm26n5LGgGPWG",
  "key31": "3JaVmaBXckoQJkrg9nM27sgkxWxGBC2q8YjAUtdjbtBJdTzDyYqZw6Vfnc8MDCHNPFLCES6KtMY8vCtE4MLuYyHD",
  "key32": "2iMkxTSNWazbsD9JHWe55ZYAb1zfSmDpYhG3p9BV4yU89yijZCb4sppBujf5FzDaGDLKvisxXWrYXSQYFe1UtWYz",
  "key33": "W2s3BpW9o6R6XhE1fjXjejsFLYHiidARoHgWfj8zeRKZVhuVUHKLgXxjdV5XMh64EUfPALCYppbDZ4fNhLhPszp"
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
