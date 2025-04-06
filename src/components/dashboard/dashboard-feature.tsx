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
    "2caYJ2PQpRBri8W2jVfqLPmHGWptTZkneCaEFDn6FKaai5cHGFV7P2YbHcQacL7s7hLKRRg5jPc8TuQi7cRVNc4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f7qzurBimfHHGWKpEgGhUj4h9YCrnan5LdfosSJKqUMHpats9M6FLTTzWpnVJUSyMTeamCcuuF6ZH1ZMuXgSQs",
  "key1": "3M8PEbDsFVPerMbs8djnY5uRdAXpaJLad8i5aB24pZjuqExLwjC6JtMD7KBjEoEdgiFskYUnxzG7FySjwuS7KF4f",
  "key2": "oT3QWF1RMwz7NPh2WpyG7Q8hfoBBgC8bAqaRrbEJcCS7aKWVLZD39tGow2PaPABNy2T6AP6XfnWPFiyGiLVjaGw",
  "key3": "3UDTMHYtQjvo4d3rHwjXmh1JiK1u9TBgBPukQfbSU5kRt8chuEvC3CTk5GbxuDuxRvXfgsxf3HYqT8myeqkmdwR7",
  "key4": "3k2Jckmqk9GDHNTXEm853BL3CZXtsBo4enG4dU1Ar7picXhhUmHKXeXYSvXDdtKzmEXfNRSTMHuSbELZZAJ3CCxh",
  "key5": "C5HweQcyb2SgXZ7P3uA7uyqrCuT8xowrkdZNC23FpCoSqhPxPBg23CbGbT3dLEUitoPUKQXHVUq5MHHcRtk1puK",
  "key6": "5gFLv7shDXQ5epXpxE25VnsSvxAQhrTfotinL9Y7rb7fXpjkhYNYjCUbLJ52xjGnBkAici4mbKTRJ7ggL5xWX4jq",
  "key7": "DJ4RusKkq8ELsCb1h4D1rXBXJUFiWfhkkUTL6nXFhPGg46eP7d1J5Vxn8bs79Jvh7zpRTLsbQUVYoEpesSSksWn",
  "key8": "2RKgWu8ft5GWrcauDf4iDwe6kzcZoHPEREdWKZYmmyK1pMqxPNZZW9CrxtRPDVkUoqNyc46NfGmCdFdczTH5qugm",
  "key9": "4j7o1JJiim5wiWDPjaTyncrPH9CiT7S8hzacEMuGDLq89rrzEA11NEtSrUY6kCepwMgsap2L61MeuE7aN88KXJRe",
  "key10": "227pvpt8yLwVUaTEetMwqgs19YsomapWX2aaak5KC6AJjBBX9AHNgveH67MoVfAvPNTd6bbqmKrfHqa11nyScH2c",
  "key11": "2uj2Qkk92nZFQoADM1bLpp2v9RM2oDz6TRuwgvASt4eYYeK2E6eLR9Ji7pDgpDPmx9oySS1vPbsbaaXp192rZF2t",
  "key12": "4zqudZxV7SaB7HXiDrQ3hd59FVuF94fZ6CcM92KYS4zyrPHUmuyBLt9iNvyjA1Jf4vyFncg4Jros1YmhhmY9kJbu",
  "key13": "3UfpUtc9ZXUXxUbAfMRQLds8RpjK6GSMtb9EhSYqKbEAEt2tXg24ixY9buoftgoiFD4ZvxRe64jqyuiAuekvURcQ",
  "key14": "5QUdxMSH66XYSVPEwbC8FPbacsi8Ao6UhD3gD9gWZkF2TDzUXMcZA7WqadCZrecnUQb8sgKj7FGegq76G5G6Vxrx",
  "key15": "57a82JHSwKdc6z5adXbmSAZkHiMcMLoeGXGhJa3EGaZ46Q9xvASp2CaopRzCYYSjdC7HQxsgy5238FyC1bmc8ZGq",
  "key16": "3St9XHrkSFib9Vvxm24WVBLErNovpeGrwsqXMSZ2FqareQmVY9hEVVoPofeLNhmFcuzcJWrz2N5HHTojC6djF9F5",
  "key17": "2ggcE1HpwjMoJiFEfPqro3dKmj8wUJi6o4ZeR61usBgMtHQUDHMfV5sQrNYWthNc1ZpznoQ8wBmaUkRaA4FKu9p9",
  "key18": "4dfzjB94K3W1tSPRZZ1xKvpBjkJwi6h6oGGVUnnWYaBcxL7WuwBkjtCo6cwfdYMAteWcTmofrqdo7Q3KbgtJPNU2",
  "key19": "2Vp1ktuXyBxrbuSNZRowaSdRMMjtWY5pgEdvVVrPnRY7aLri5ENhLQJn8Dw4txJCbpkDX3Hxn7NzLGbM2Nb6vuSH",
  "key20": "2BsCSz4YU8vKJykKUWxWe1uEQVYd3kWaso92ZgRJ6faRYtpzVi5DpTP1y8shycUHaKewCuxvCCbbdMXaq655wLfp",
  "key21": "5YKsgceGA7XsRJ9FVy25d4LZRBSdH8WkLxQwWrDGwFNRrA5k118yyihj1w9MFG9MVkkusjYUEZSyTkE3UaMeT8h",
  "key22": "42gx2RzdJZTKPv54s2Luau4enWDdMcL6ewN6QtJFA6jnbLN1a4GgsXag4MeGnkFT8fzPK5a6n9LMh2TUgevKaZgd",
  "key23": "4iyj7MpxwJbkhiexQVSaY7KoMtP5C3Tp6497N2bH3re8iwfycNKjvA1ZuEDuzK4xQk4LGJpQhSdawspbRW8hWKMJ",
  "key24": "3bUPxEgniA2qQE1MkPHNUvj8n6n2RTdzrP8oXntQ6J2wFrPQF9b1ybzuSY7h7jGtgrJP9c8M72o1zQ2unfKAJWAv",
  "key25": "37U3x8vNdXzoFwrdSELUiJahotsQofgb8jqGwspfidPkew1gNEe4FavqoG7fCGEVgvxy55iSVYpArF6qTvoHGmJ9",
  "key26": "2Ffjw22wEs3pPRJnkySmuDqvGXNBEV6zW8fFziKiaC4KBniUYPqDcE3GcNoeGasxQ31sdysQexLWf8uXRQLyuJoH",
  "key27": "3BKAhaKf32cT7BcjA6t98GqnkveB46T5FvZvzXLwHhHMvgXPky2iNdsAMw8EW7z3pJRXxvVmk58WiftMaPXTG3oD",
  "key28": "3AZEFUrUwgUqptzwAjzJTgacoHoDFuJqzyGEUMfESmbFDNan6JbR4RYJudckUYAVLZqF1yTMSVy2ZozsbvY1g8q9",
  "key29": "4UdPNVM8boUVymfVJmwYSkWzd39jmiwSLXiZoq1oVHabys6SJjM2LhFnAdLd5tQMZ2Bf4hukugXFyHdFK1PeRmMb",
  "key30": "4THDLi4jscJgL2n8ZaSK8a7Uc8mNejXorgP8Jd9rcpLRZUZ3WYA5e4VXVpBX6BZAGaS4AoXxgfr2zSKkGMvoKYjG",
  "key31": "x71YEH8gcagLSKCGxd41VjFicpUN7qdCu1nu2zbBAZAfCA1Hu6zg6YBDVi5ryYgUsdMKiykEUsbtfJpP8SMSXCL",
  "key32": "4ebAJmU1aS6mgZ28xsqBUjECM6mBqaxmmZiXnErbNzYsfSygFoXRYCDAcacaRBQZLouZVCkN3zj766mLw4KXE3hr",
  "key33": "4eia9e1Q9J7xtGBKEgKtxc5rAtKHTK6B1e8e1ziB5dbD8qTJavXcNQdjSTQv92ca1gaZRXhTiBa7EK1TwgXZ2EUi",
  "key34": "3LphoWV9es2gY1cLahs7APiHReMR9Nw25hkiyLiJT5rVhaBoWBsU7F8ntHzWC12nTo9khu8wZrpNSCPFdJHNWEus",
  "key35": "56PdxcuFdcN9SvprG3NpcLS5EKpqfdK5VBzRo7oiTctytZvfZYPHV6mJNi9tBMidWdK8UmnYJryJfSRTpPZYcApJ",
  "key36": "2XP8ARyFmZsMNTrorwDkDWa2zrnSkbTrQC6wMYyGSk8LEgU13eQbuDucTbo6GjTkftQY8p25yEJDURiMtjyddzac",
  "key37": "4KaRrMRyRW4oWvZfKHex5WmJvC3dbMXACmCmxR7BY1Un2rNmBZybV42XRuPVFJhapSGnmC4qsXa1bp8ZQ8VU9rNZ"
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
