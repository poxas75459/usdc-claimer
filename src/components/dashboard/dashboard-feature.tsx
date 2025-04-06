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
    "5eRDQQW3f9MhnxhA6mQdqVRh2595C6ed2uWFo3FJBG5XhAoXrCTietfa2mb6rYRd2WgUMcvoxRs4P5vvi4kVt1g2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47cRHmD6zr9ewJuwayiGqiiQiEnNT45PGgGRdEvt15uTJgAL35kiFyzEWdWEXVsHPXzLtMddoVpMikyrHDNWQpH7",
  "key1": "3S1rZnuuzs6kjQg2Ntc2cPadcKz3Mwa3dzsQxufWt7L2NPLarUnqqfVRPF3KuMPNu5C1kq6R5LtaVjRGpG1dnKUa",
  "key2": "5LS7nR6iCBt6X23cDuMdP7KD6E26Ebn2YbZ7uvYumDgBQzxpurpe7NpEXZd8Ud1jayBBRLBRU9zhWkr3y5dPsnx2",
  "key3": "2hGuN68G7nehsvgcPHh9SqpRuWyczZfFzZcrhidTrh2tW1T1n3MXHFgEiqLj58xeyukY8kMeHMNpWGJ9DwoU9DJk",
  "key4": "5F2NJtR565cwN4siqBroG8zreBerMCbPeKChF34dBCH4voE5XAHBBQqtPZYRdZycd3RnydTBVcnrPvjESGda43Et",
  "key5": "59n9fdekMwatCwhQdS2EBxtcj9Kqk6pu1y53NqjiXTPB6Qk7eWTnP5tJfSYQQPzBLStwbia9GN1Jefgykuqu9UE6",
  "key6": "3gYHKbsHHfipGT4pTZGXZhmkF41gnFXc3nBVpFfGMQ2fcNiPVWWQzWUXPpzCAgPhwuTnmaqm9FK1FrNmanUR2x2Z",
  "key7": "2VbHKDFsfmpompdbdQ1N1BmfjB4ZYPpswSUGSZAbJyohBgtGs3jSBc8HxkgpNq6HUKYGQ8JnfXGW3rcDV7mrpkW8",
  "key8": "396PipCp5X3NH7iNJSGESjMqWSsoRJs8qGvTApro15Mk1zb1psiFQr5aYmmZMDadxFwJbTgWWw9mKXMHJxZMDBF2",
  "key9": "54YVau7jqtvCF4RJZuDwxhxCbm6PnNU1SYbpF4hFBkqFkYaekKvnXRL5QMrrt9CM32YsmF2BjZ7MmiuWmcWqmCrg",
  "key10": "5neHvtzt1uxiuSiCbZXx5RAmkVcps65yGdLg9mX5c1cbQy1SAUbbhSHFhG1UVcNwMLbjrPkEBqxjki4cxbZAXh3",
  "key11": "8eCWrWaoqjHjyfGayL1rqyV2hDiqr3zdJheSTTtvfD5rsECvawHUVnGfTYrVAZo3EN9jZJgzixeRRo3QzUpDrhs",
  "key12": "3yRpmzpsrUQYskGumnNYDm3ciXeFsmQLkrmzPqRKkNTyBycs4PiqgK3HEL8LKjyJhP2tWXdPKv1eGPuEm3LJZeBX",
  "key13": "5ZjeqZM1zheNcVgpvynzh6YRKzjypgCXgyvw3rUJd3jbyEJ8Qtozrt6Sgqjp1VyzvU8V2s8FeARxNJxa5SVGeLc3",
  "key14": "hLpapZZic4fT68Diu3w8447jzfShVGyFktTNRxvxYLCnKvaxi3WL9C1tSr5e6G5U1fV8Le5icw8hRTADnEJyTu7",
  "key15": "JUTQEoJuTbFWAYkbVeGcPFAX29wszYWwH8xbA8zrpx3pcB9rLypvGmrMnkAs6yzx3mJe3uLAkqhLKnzz46hfWib",
  "key16": "2YRz7VuRQ2BeGQPd45cMMFdNXcveo8CtghsEXdNh56K8HA2iKEyDr1yyCTNciCqWYziRaY8utojoTr8EpxLiFLQq",
  "key17": "3WfaqkbYueEov8NMCYygBiYMNRU1HJ2WoXeQ6wYLK5tPgDbMRS5B72fSJmLiWsvh2kmJj6eLZTB6S7ri8T21ixHv",
  "key18": "4TFwe4zxKaDyhBC1oZcfYqVeJ3H2Y6BJv7Rb5o2bnpUoLkzffQmpzd678Gr8g2et1scFiUr97fpjUWjk6o32BPqN",
  "key19": "5Hd9qca164omirFVWYnRDU5yPeGyQeCPRaYX3riPEbLqgJcJMGAnkfh9yrx9PPMh41kAx66KkPoFKmhaWoZdUjp7",
  "key20": "3uEGPioooiY4kM4mY9R6kbFFt3dq4hFHGHHvXxddMmvwZrZi6nAPS94nootcLAfkzEcok9mrBbZpfi2GETzsWZqZ",
  "key21": "3K5XdhhWJqAVEids82zUKSx8a6Q366SBsCUzRVffnMeNANPWgu95jam6WEK3WKsYcVujeXMK1remsVaFfyevoE34",
  "key22": "3E1i9bPahVtoasQ4TG4gSYEzEY4YKEJX9XNL22AYyuhmy8WbjSb4HWosJjJiD7Nc9CzfycMeSwcqqEXrCuM547NP",
  "key23": "mRSAcPvxpmf3f54fMcQPn5TRG8svDcWkW9iRo9wL3rfznNeeEY55ecvXbuxfUQFmi7pmF9wuPoFiEg5LdV4ZtE5",
  "key24": "3d8JLp6KWHNtJmi84ECqUBx82Sa6qtFoBVnDdA4dwHyzHy9qbzG1WAJELXEfJFzjTCQumYPhVNVvYm3zkbr6QjtM",
  "key25": "2jz9ANXf4SkDbEFbrzU2PGbJTEdMvcipG7EsMtSDT2weQaJ1ExJgHgTUJLvndFG8BeRkb3LtLzN1HhssJ9fpHU5n",
  "key26": "59tk6eMMXDydCWk547T29bdM1qUcTD2ETgqMLDig6Cky4KJAYsLryuqvuM41aYLmkFS2dK43DpWMJgnqwuANhWEa",
  "key27": "5L1doXAymvMDsNdnuG8Z7jgVWic1WrpnqQWonPmTnbQ8KXMGCHe1gRetLcdTCgoJTPBfG1QHWnniHBU17wRrCjSc",
  "key28": "4K4foSUpv7D352aXuZVMLMGHvA3jiu1QRG3kwtjGAN2hDMeNQpnhrkBvbJMsCCJcZUVRzGmnazUhbzCNHSV2E9oP",
  "key29": "4JfLG94Ga2npDtT17BrQhnDvGfut3yKaFFB2Btr7DTuWepgSTJq1tGXogzndovW9PTYSX2js56yAvSFU8tNrhDnC",
  "key30": "2PVfnBDixhUFp9CNUjee3GeMsXfoiKsJLntXyPib1LP8Xw5hSxyrQCDwEkYTsapxCMGkX7Tv3rR8t3TzALmCKwAu",
  "key31": "4MZHDXGS23W4BEzd91amW3zRsQ6F1KX44mkoW7SVAQwtkSYPvvMua55243QN5YjivpdMtUfpY16fyKCNTmEYAPTa",
  "key32": "4Kb6NJmG53hnZMducLtLRnz447HLFm8JZsoBcYizJ3Z3zdZgnp8qWmLfS4L9Zx6pMfMjGAr9Ta6Fp58aYpqb7iZP"
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
