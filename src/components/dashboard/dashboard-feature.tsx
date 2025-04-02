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
    "3sxvZ3vtFG4a1yLK2sQZ33vV3FuJePSaqZg5Fdyh51YRqWLw3ueVXFsS2Yk86ScziGBs8nvpqo5SWLjfxrYrZH9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VD5bCp2di5vL7M4HPm83Q8N55XqxB6QkhQp7bcUgnd24hdBefBXk4iNRoEgBv4wHmuNaEs9LbCj4QP7eStQSiuL",
  "key1": "5Fgtsw8RKRQKN8DLj3YSh72UGDEftdNjtpNn3X7fb8TRnr4DVKC6zBh1nbpwQzT6br799MpxhUoNhodjadijfpW4",
  "key2": "3xPvtWixt1LvEF1vJkY8u2B8nKWXUVP3Zd8fDLv1vcQ9vDYzgahGgJQbYr53GYZp8WKH5ZnK5RATqqBJ2qLZiKme",
  "key3": "4jcupjuRSwSGMWLeAsd4NCEcbGGjTNAqCxCD8Pc6TLkHAntJYTmJcLzFwQFbHjxMUx1bkoyqz3FHu2bDGnRSzhFE",
  "key4": "3fwBKYLBdGEbw5TzVUaXoFRB6fceJpuaDmGABjdMfckHU8RoCPcDtBptqNeePyA4N3J2iGPLC15ob4k4Mwav7xah",
  "key5": "4kWyM8RtNN636wzEXs5heKHH5KqF27HmPoyGkXMD26tEc6zdmaiNNWFBVqPkKCgEdtHT3YaixNyMB6y5AXcdxWnC",
  "key6": "z7RMMJH7f5CdZZEzg3x2ifUcYMXu5GQsAmobYx5hAz2YV2dEGpUdQRBkWQc48cNd9sNCMfQCzpwD1uE1bnAvfeq",
  "key7": "zwGnqfPDyrbKZYiZ4V4nSA1rR6CsG24QDEasDA553Ry76ko3aYRXeNGvedi8NdNbjFG3GT3Qi3K7tWVY6gDcvyK",
  "key8": "66D4NSEghD8gW4kfve8pfxZLydmj5keNZ6JDCppxJ2oEcPeMZCkfV2Gf74QUzQ4jn8TvvU2ew6gH6wBjp5B8yjLf",
  "key9": "SG5G9P7RQQ1MX8npBAmZgCe8QbFp5LBoB2AR1obLtggetYGL8NotMSJxFCLEC8CdwrXPGLLkHPh7QE7kpEgXmcZ",
  "key10": "2aiNovy7sYi2dCZ3DHWdqHioP6vmva5haALXJB3pn1BjowbHY2bk7puwcRDkG37aYcsjD2RVyvEypkNFzxW2mwRN",
  "key11": "2sR78KWXbtUZKyCGwY15ttC1FZjqN4BbppcqsPCu1fw6YUeuCov8q78uJfWDCVhV6cRn35N5Phv2ZXhr9cMqRQP3",
  "key12": "5U8DwhTq4229ZHDLgsLTDGiUq5epiWAk8uFkyzyPXQhr3xXJHF1nyNHnndzhC2KhWdiRmfTrAULEEesZUJ5w67Ur",
  "key13": "5hav2AqhZESvsYUN1kGc9aUF4PEvcGvgr4ojwEW7pgYvYjXdJfygVYL9RoxKWzP5dK4DQbqYtUBitRFc8xbSoyt",
  "key14": "2Gd6hg9aEHA6pqQAGXJzxpSHusyjW1Kd1JdDR25PJqRrDCH8tByipQMMJepo9Tve3HGsXG2FTFEk7rqEf3pnMSot",
  "key15": "5DhjdkBeT6BxKLPAjiv68PrYtzraWScG5mk1s81uy23ZEWKrqG2wCSHeeG5bQfG5raevL5c1jpTja8D5JauWpYcx",
  "key16": "4Ftscyn1ZShMaVAC3xMhMSLbupoRFGD4GDZVoxWWt7rHKN6YeDG9NubmGiJ5gmWs9qgU5XWXAiLkFbb9ovfPKutv",
  "key17": "56tR3dCKXKCn9Zivj38EKTVRxvZgoRhqPuakZcuG8LExA4e3B3A16v44oy77nZtwMPrTqXVsdexN6doDk4d8Gkxo",
  "key18": "5DGDvjwSBAycbYHobZ73aawsfkrzmijYRPBzonyTyCDdR8rE2H9eYpC9tbhhXNhsMAnDznFGzMPsPA7HeqLmJioX",
  "key19": "5axzVjbDw3wx3Q8TcoyxoJpVyfBThUSjzXPNXDn4igP3jrYDH5qap4bwQ4iM63V5YLMMFtSjV7LBJ7z3LMoEBR8M",
  "key20": "HhHPGQNjrkPDvVFHjZherKEux7mLVWycMLWfB41K9h97TR1n53wmY8VoCJsBQPgj9koaofYZg5HzkXywjiqRzYL",
  "key21": "EddViCn9XB9SYmrtYkpvwAUTkuE2R9FCGxErvuXmr5Tfqz87d4okdah1Yy69xSyCjFWsnRfwNzoBAy8rLGWvv3w",
  "key22": "3X8dPww6QsEDn12mvKX1GaTGFYGELihycuUi7XPTLUg15jQ4pbTucK7dhHeuA3hrFyRaynsKZxRKj9deoPyhSogx",
  "key23": "4mxJpZxdNGv3tUhcVnCeaaM6JCfttyWVy2hn5MkR9KuYUAd3tMh1s7bHDLsLkP3eeFBSVYqo7XanPiUZ1e3aZ74C",
  "key24": "3AwPGmWJkAF4coNoWeWqp3PgYA6vSKFezKmVhrZa8HrWzauYEeHEa8rogypg2FMffsSmeD2q5Jud9ZjKj6xS6sZL",
  "key25": "38E1C47ZBp5kfKDFrnCCH8BYimcLrD5wLzwkspHC2aXEU1DTBZCSqq9JTNM84Kb1zDCkozNJJkwgKDvLkmsfefP",
  "key26": "3pCbtFiv89FpqbUdL2F5WZELDuhWoQLupejDGM4Z6zaVS6uvye7Wpq1mxPpNNdq5hzzXDctBVDPpaqgBYZGjKMFX",
  "key27": "3iaGqrG6k7W77dhcyHxbT17zVseqxtWfSbPUYNSzAyGkNw4EcwPLGY7bUg3ug8eQvUAtm7odZHZ3q1LZAdkCgadG",
  "key28": "5Yz9vn3MNrBfiFLSzgeTapqBDjeyJU3baksvC9qHUM6oNDd8R6QmvtwSxggxaxXaiqmnTWpWCihgUUkrgP4jSaoS",
  "key29": "2Tfpp1ub7WnFJyegjTWPYNeczW1fTcZVxNg2kHTazHom7FChXDJANxh2LHCVainM1NjFhhbWMjgzGR7VfSG6Uj9L",
  "key30": "33V2QUcPCma26GghT5TbSboCcb2tEVRL1JpCRkFQ6Tx3eDEd8Zzm6ywtHbdpp7dfqaz7N3r6LAtcKtqeFzvfVUNL",
  "key31": "2vxsaKDoY8MHvngMz1SuH3Spz7M2JmWMN9osfxZ6B2FuNGS1NPMZECFp6BjVk76MwdGkRP1EYFe94QkqnKqJD9by",
  "key32": "3fX5RPQBSvv5i39p2th7yzsVoTgJ3EJBM7paB6dCVFbACWgmWUkkY7wxzdWsZtg3GxmAwSTcVK1DXHRmqDg3FPdB",
  "key33": "28pVxceT4TxHEkzUwGuyC37Rd2D1YJiyquBXAiqU4pj2Mbrvfhy8ir8eM1GT2ds1ccbUdLWrjLuSXbc7U2wQkLYR"
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
