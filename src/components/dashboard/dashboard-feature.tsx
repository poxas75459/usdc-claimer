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
    "3VwRyNCVXXZnsHsLWXd7avQUjXQzMDRUQ4eCAKXSt84WrYAoNQrmQiutHywpENuAmHWJJVgnYv7hhCsooGadAmVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9sPSMAgw2KWpMsYvkxeJWKTYH3dkTwhnXB5E4gdoituM7jbcyYDCCYpn7YuMhG4WNXNWy1XMthCsAhJFYESv2oo",
  "key1": "SZNLx7kyWcyJdWyRQ9tBojh2HGdG63pPoVTCZD7KQ2Xnxe3tCKZiZc9KuzeyRhmbAGKpt43hxgeHN7L6iKNw4Ck",
  "key2": "263VHiVBtStd8w6Dhy77b2VuVHkX5NKyypFdatRETzM1vHvnXDqgFbV3eQPFH8hGzqEoaYjiyG6No6CfKSf5UqS9",
  "key3": "3Y81rEZraSrSYYCYX4iFfkj676zKa4LBNNKQcs2SELbW4H8CwoMrGM2ucNqpDTtcyxsvA5JEMR3cRusKoRJcUi5y",
  "key4": "LSwMZ8f9gbcFpehggCGmeuJrgxA7b8f8JNAdkuKqA6xSLGVZYsecfxqBw5f4nvbMB8VZpqx9LKYH1r56Sz9AELH",
  "key5": "5juiSLb99aKJrPzYwj7L4ZT1V8QxE4xUcW9G78TcimtfS5yEeargroLQVrgSfgNkpzyNaw7JU8fBWrk3a3LX2T9v",
  "key6": "5NC4FxQFeeN6mNPfNjGY5qEQzFMxfwQ7PYuL1n5EeQ7pRBM6QHPSvt8VUJKCx4oHd6ZQR6RvdYiTUBdNw4gd44Jd",
  "key7": "2q29EUKzxEGVsfcCu8Xr996Thj3ZxBtFMtugaAsH7LgUDJ4rWKk5zWYvTuxgdAMTwQcebuvwFspiMj1pZUKPyw1g",
  "key8": "pFi42hTNgPaYkdNFPcf8t8PUAUnBuQEp7T8RoJMMQ59xRa6p1EoiTR1jSp4YqYTm3iHbrDDSWtsXJQJNk6r8hKT",
  "key9": "3B4XjrREcbP2V75AZJTDfAL4gXj4ovZntRmz1NafTses6B2hu6Szbo61HoKyZ9eUG7HRi6wz1GjYcdZHm225hYDH",
  "key10": "4q3xqfhRTVrLVvxn24BNVejWhRqA2RQ9UJvxGxyKDTs9LKDnyYtMzUozGypjno3ie5ZSEnbQBtToc5rVwPS11RXp",
  "key11": "4yvet9UgRxe5wiWRuXfhVuLbFV4hqMhNn2ZnF6rqQDw82TDDV6Eee68fc7wWFLBh6qeNBxmr8DDKEd85NitUagrC",
  "key12": "57ZF1RibqDajxVFjc6y6Ec6ijTCADcjWywM9wfsNPDHawS7fHrjsGLizWTyPGWwLhNzSu2CuXVin9SSMoZj2k9aM",
  "key13": "2MFW5SFVH9LpykJUwRkLYJU4Wa2GEuVCbSWx1FqDtu3hGpiitWYmxWqeAGZMKA9GuCL644U6YiJwxmWCd8PTgWSc",
  "key14": "3rNdFwukVexW4oiPKzDfAXHoAgeZBJijoVyptWrjVXuwuoCYfNh5RM7hF4opBAEiAiHp3J1WFks76K8r2hQmzsrQ",
  "key15": "5h8yMwbfHs7RofUxJU1MgZbbQzzt22tmNwbYHeKSTpmLwaJ8T7cVZJAu8CoVEhwC5vbSEa94XH18xK25jojZHvsH",
  "key16": "5DhzQqYWibH3gJJNR2NtG5U5jS5c5dspcTDAcz5o7T9CEhvZ5XrhZANNwva7ZqSvkxCpEXyp3LQbX7121rvjciKm",
  "key17": "5dKNeNjmmpDSWwrphiWNEYfAGWZYaUUxF85mkVShzh3hHWgoUF6JfdvpqbawbGZ72fswbor8PwMAVVwcsiPSExR6",
  "key18": "2A6ZeSKzotLRdvKN3Mw55Ghs5K8SbSwY3a3KAGgKuFideysrgApDREVrDdp9irNYXzi2MudHrtrrpZUG53x1Ah9f",
  "key19": "3cG8VtvQ8kNtWfLQ4PFg4L4yhTiv4JCatom1bacEXahz5snyX7r8xHcX5QPkXh2Yr8AofVZwGhp2qneFMHL1fAxu",
  "key20": "55UcTpXsJZKZuWKpv3jvx7JtE6d8x2aipUmkQcbSbV41DTPhFt1SgXS9Q6raXhXDxwwoRkcdzGf6KtEcyyFVdKbr",
  "key21": "3zusHvvvrMdggUdKnfRp1FLWLbVQKohdRpVkjGNwJSqJRmUo1dxiYTj1DxsfEAHdCjHF8CnQSd66NiYvbyqcoXhU",
  "key22": "2JidKqJHfLKD2ZWax4wyyCCVB6PoCpsQbGpp1Wma1RoAGz9jR4E5cqUMuzbhMTbG4VW8bYj3uiCshw7hE1vQYn6i",
  "key23": "64962ErfQtPdLw79DqyNT8ADCtbhkB74wUcLMAwtd4oY2ReciRndsaSpQYyXKZMCbo89Vsgm594CVBdw8dE8kAHK",
  "key24": "3cX7oAhQMUEWj8Dadc3Gx6d1ceah7nKhdMKEevMpDsjXUByyX69JUTpUMymHePCXeY8dYNLiMrwf6X9PHwYyGFxf",
  "key25": "5Eqrn8SXkcXeZ8tq4xpJzvPCPPFxyJrvXQ5neLiCH7KkorWKinGZQr2AL9BjSzWnMpmYwPYUZvMbMognMAWAeV5C",
  "key26": "4GYVjwaZapBiDYZWej1FSF34T1EJuSRDnRx9mZtBmyNdc7Dp9X3kufQrr556j5nt3qiUy92Bb6KvuYUsu2TEz8w9",
  "key27": "5tjeYz7PxQiTmxymP4gHnsvaBuzzgVwUpCJTAMcFVRb7rFbexXGegWS5jNbss4G7gK9uyCeki6TKeZ22rmMwytqM",
  "key28": "2HiaiTQ7z3kb7nh76LwUhKd61U5rBTCyf9vkFpffK9WfmeegC1JENKH9hbuUvpkccwa54fyepK1gfn7x1W5q1UUP",
  "key29": "JXsJdw8NEHEQiZtkna7sQdraUQkXDWpw7rBneT7Squ2zdi4XBtpbrtWWv7o41qEZSBregQs6yhHoeLcH8D4jYfo",
  "key30": "tjhJfEUXRnBHPN861K7azqx5APUzX29CMcxCesdzxP2azUznuvik3c8CWmwEp9r4DzdG9qLw35n1ZRqkh1GQPfx",
  "key31": "3JNrFAMFG5Zz4XGuhYfYCucziV7bAfLrdjrq8VNXnns4jy8BXFUyvJLu6QBEtQT2fPCSzxFE6MX5PtuohS2KJP3X",
  "key32": "3qZsksuXGrJXunv8a4CTK5d7TofzbRbfqwmLf2ha9udUn3dLbrUzvzJN24k6Ysv81Aoe14ZoApMjgvJrj9KQkyp7",
  "key33": "329CNs5Ay4FQ7PJgJfNc9tWeSjeFreGAVA7CKWHavNKQ36XFT5RGn5pRu614PNp6bfBMytBuJmnhhLtfe3BaWzGS",
  "key34": "45Jt6K72sZHFk4Pbd78hX5FgFfs4rhsLLbof2joUtHAwJWVsD5Wu4HQRpoJdHcx4pSrZ6eZyPmLGq4kFLQGi3ik7",
  "key35": "4758N5VuaJAjKFSW6pvFrkvrbS8Y7GyTPhkgGdxrnMHiDuaas6ySezWJTJ1kvXzdMRb7BpjAxsLmrp7X9geE4jri",
  "key36": "514h3H1okjdTDn5tA9cyJ92a6CeV6TxiBEiBPFuhHHQCVgEQgGfHFC7sbsautxy8AjrQ3XEitibktg5wKj36iMFH",
  "key37": "3Ku4Xv4WBCno2Ja43F9ZnRgwzvyyNrg1LAreqHbgNaEN6m9XZUZYyf2HjfZ61mDNv9mP4FJ2ZxEqMmYgyvAFvnMi",
  "key38": "48SrzXbNhqAaUNckZkWUwtLaFXCszSodZ7Ug9Ym2cU9cukYCeLAtR6BVML5f1YtUh2H6rz9ecnEbh1iHhatwatCX",
  "key39": "5yLAwvk5FqJ6VcLdreBJhHjczZD3QKuiT5Y6QuTJfp6TSnvUGfzogg4FJLsT1ozngPATm7wkTFq2kj9wohfULNzV"
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
