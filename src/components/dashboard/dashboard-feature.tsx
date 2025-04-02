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
    "5FNuLv88RRg8kWArxtDFaQy8erZ5a2PJZMJnmVXL5hACtX5avH17TDnQMuQVf8r4BicGVTUYW2t8AQc8mHr6RC85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pvwcgmiV9xq4G1yCknDLW3XJPemzTH1pJ2wHeUP29X95d3gN562H793RnYXdCJDFskEKYfLyWajnjxhFE8Eso54",
  "key1": "5bRndHNAB54kjghgFtoK64waUBJYqfjwsU9fRbQHxfKZv4JMH4JZEPaCVZvXF2bK6eZvAR7bnPTiLiaT2XxFBtTB",
  "key2": "65zQsjzLuM97a4oYsSvUQP6gEJATgm8hj54bVYxEiYC4BbcxwJvnTwTFhZjkQFWEEsSwUrHDmK14oJE4wgW45nHT",
  "key3": "Guw2JKBR168S9MzyUYAwMpnYhbHj5byJAe7d6kzXtfsmaCqbNvDZrMHhrpmgm1sxTPAXXhDmmeFzKxfiVwA7w2A",
  "key4": "2vgeqNNoNvn6A1qFf7mXuhjod4mrBd5LqGh3CCiCWYvsCNy1fp4DpZgpAjVetR1sMwJdMb2VoohtHieh65E4bkRf",
  "key5": "4zyLj3Nafr4Kq6y2LbuARgfBTMGWiTnFzBV6ySi54mH2NCmt4zSCpYBiGMccL2NmdAUE8gZVTFDp88NmvegU6Lxf",
  "key6": "HGLWsdMKa6iHWAgL3yJqH4iat7NMx2u8VikBJmmUjt63uVs4smeDsr9oCFC49sjiWSKqb7F4sGhDddodxtBSYDB",
  "key7": "MfsYh3FW5x9yYnJ2hPNt95EpEsJHTtqvaoqvofVLhuaL8wU5EZFtiCwRqgP5jgAe9rB12ZBGPQEQRiZ7oajJQKR",
  "key8": "3NpnmZEV97evfx2JTgJpdQanQnYcNhFvc6jDX4LZ14x5nAZ5RmZaTavbWWikaA7rCLgm8meQmFuQWMuwApRzcDpu",
  "key9": "3Hbybub3XSnuwiCgLUfBPxdQdZVdAKX225EDFcTDuNSJ3gUwYuTDYupp9jkdbbUctVqH4XGmucwYE7Cb9WDyNSKp",
  "key10": "5Gihu9ncQgqvTCWqAdUcVtm9yK5dmQa2zEHQgAi6SBnFzW1dLdxUDbUByRPoUvgJ19969ZRX5EkaV4wk2PvNEA42",
  "key11": "5QfxouVm3oeE17kaqCVWEx7WGnH8515uDKqosCa8yYBXVVTf8jV6FaQnR6PdWMDuRf29xKKaCYHiHFLCCEv12hFq",
  "key12": "3aEgWfWDXCWj75v6beiKrgu286suXiUULwiC6JpmjoSxtqqWUshdh7bdFtxVNw7nB1J4Tko7U6AYfWpGbstPpTex",
  "key13": "2WvS6hhHgsDcWuTRFVKoNWDJbu5mSfthB2GKE3UBY1XRJqgx94aCsafduufResuHaKeLV5mL3oQVE3H97avBWf74",
  "key14": "5jCCfpdDzRMprSnyqY21c1SRTvBUya6z165GnXfXrqrmvk9iw7nwRSr2EZcrE4Z4cbAdh5rfkHEBgK1dXtj6vWNC",
  "key15": "2x9Q9mrSgoAHqPScdP6csKuteAcGU6nPjVxQLrjtFEv3pYDqzwZBUb44f7cQV4RdEoDPfnq9UtpseapiNGsb626F",
  "key16": "BJqPfaxq9fGpHERmKjUyF5KKWeJ7cM2mtq63Bp7x29urTxPDNYA8tHYfYbMFURGodqLGZ6At3YENaujvdubdm4h",
  "key17": "24MiUXyLwjagYa377o2zVbLUGcpdX8q4Sd6Fy9ofxUBzKSaGSCm9nxS92bGSNYLh9BzW8XQR7w2bhSYzikHbeFYk",
  "key18": "47Er1kYn2EbU5iNjnCVoTW7SMmZfDQuEncgDpDPPyg7RiWa9MV6z97y5qVta17RrUG7VGSEAB46QThrQwQXvV1xQ",
  "key19": "3fmJGfXUA5yk4TnQcDeXENU8aNN7uwL4eFHLXsUrbXeftwBJT1j8ck4byzD2dkr4kNzTfNdHgfqgo9RVEsbZYS4M",
  "key20": "V3HoVMUcxsg8GK5aMdpD98H7h7Wc3SmmRczSTWYL6nCDJ7TNQErPtwVHFjGUh7Hjz5Z61m6j2NDtko3zaMmzedz",
  "key21": "5FZX4rxXDetiQPVgmVD4MdUSyi47iXgVBSngVUD8EQf87JHuCer5KTw1hMxpLj6U2m4cdXcXXdh1rEd4eFfZoPvR",
  "key22": "M65r4KSRhHqMrqi8WysooiF7iSccoGTkrsMAnw8a3wzQqgnuWZjX2iHJhDJ6xFrYFtV1UPnBRtoZcCwuA7g3Jqb",
  "key23": "45LVJvEWedALv3mHVg3oQRRMscHxor5fZurfdEu49TGLyWTL69PeM6rNF68NRHLudmgK9M6XQHps4r6nc6vHSqoH",
  "key24": "4ejWPFvc7EdjFTqydDkBbeuJ7ujsR7LPcyjAWqNCqo5p9SSf1WC48ikkSBnqurTGnyttVy2PgWNRJBqPuNxbLSaf",
  "key25": "23Gvu8aDq4gcjLRDNt4RxUA9dCx9BuAu5TLQYgVni6P3AcGft1EZriDbBti3hypYXn6xGmKRcZ5ge9TZX1DnTbcM",
  "key26": "2NQCTKopUkaDgHddiEMcVhDaP98RaaR9uWWbdxgfxvmYRzRPeHT8JyZxZPEtPc3v55zyQ7YcEPRYwFaaNGt8g2Xf",
  "key27": "Fqt51P6Lgydi8SSkKdhxfmCTYyg64NpYx6xYKBhasxhcBs8nP98HzTDXYLP6iUWYGha9KpxfBK5xHfPRd9oCc9u",
  "key28": "6ig4MDuiUvdsvCPfNmciz7DfF4eGnJfygVVPATmVztzxihJSo5zDJQm9NTumUJ5rx5pMhMyUVUimcif8sqJBWYf",
  "key29": "3BbuSe6Q4ac5NzR6QjLdTC1VquJmocZPES2H7NAwbwUHC5uRBmdszKMR3ZZP4NQZouCSYq5iYo1TUQFFS2fcScHa",
  "key30": "3ZurrDvkM1kbWqefBjFgmZqnMFXoipxX3ZdmnGEKxGbs7bWn1FjwUcBY82k5KFmjGqYmbuXGyDpUahMH1LtZXo31",
  "key31": "4mgbrVP9wo8zBSUQXrgzq8aJpSbgaVnAfQqst3bijk19ETZMhq3PHmR7darNJuEA5NKdA7vVueZTJrzJUMq9x8Wo",
  "key32": "3MiJP2qYGqqc4yr4v1n4x6HSDWKc33yC6UuTzr9zKAw1ikPRyY77CD4AwEDDGYaoHty8CWxTw7gUKCexfod9KxeU",
  "key33": "44trbXi6R14CXp6UwgZvf1o5XFrbSJcyCAtJ8sTvhve2KSDqpq4RmaQQdYW3mufhoxeWWoa8cx4DXpd5B7ZKicDc",
  "key34": "2wDynanyhoTZFhe5YMgaXy5mbiDtWY4sq3vNQUTtvBopEkPsp6ibZkUVwGb3cgQmDVjJ8jHdqpVDNYHhUc1XFb69",
  "key35": "neN1XG1u5bM4CYbYu9AuGXaduATMDUnFakrAy6465kjtCYsTbQ8KvmPvv4p61dNmDe63Fs4buM63CXpHBry51yd",
  "key36": "5DXdvpruFq92o2b6PSRFNG135CAJv3jezA7R1AHLoxSbbpynFMMa8TstVFYiW7jzNyMRcN7PznfvES3bk81ZtmZ6",
  "key37": "oRY77zuQ2MRBUcyQx6EhQnwEyTRHypHeVXgyGzAe9wtMgtTBG6Ms4eFU4DwUQZttYkHKzopThu8mMGahXjahNnS",
  "key38": "2Z1LDK7xE86jrxRg9kyj4aT7pLvvEpVemQmLsfbb9nUhfVw3oKXEZkQ8KDAWTszBMxuzspqoDvm3vHCeP1WHJAP5",
  "key39": "4B3puRRvX7qYx3Z2yvTfxATZQVRaybrn6FCZbNn2y7wVzdachWiTfyyxFz4978ehL6aT9nHaUxQPU6Jn6f3oW3V",
  "key40": "4gtqwx8cMTMTYmkduRhGRzjM7oAzUJEYiA8Z2RXQiA7abcAuXB3JYeR7W9Lpe7T3refBTn6ACZ9HzCofrbUvJSmq",
  "key41": "35CSn5HWuTphHgEPAyBUyRzvLh5cHCMnPELar4zw4eHHSmH9SybUWJVChFqyYm8C3qK3M8PzGvAQQV2JToU5hNzB",
  "key42": "GE6RKBmjxxi2gtpKW3eCGWNtomo1CBgYBcTdHfmEPB4oKd3VHtKCi7XN4Zw16Znwfc7NbZqmhMLgrx59UoD8Qme",
  "key43": "3abhdMxnNFpmrW59xWQ3tZNFTz55mb1YD8zLR9KyvadHb24rd2tyhQH5zcHAgGuoRUcg3T6wXCMAVpGp4uNZ2RWz"
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
