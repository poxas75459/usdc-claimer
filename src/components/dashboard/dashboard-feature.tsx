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
    "5e2wquqXJX4MeXz8KNQWtgzmfiZwAaPdz2LjLA7CNsGxDL7paYboLCTRCVFdB1ZWk4eszgki4R8QxztTwVpffYy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cv9TFdnM2xYEZiDTpPqRETkDfHnQk6jdftHyfNLqxECf5DX83JT896jU5DGaBLvBCaXGz1k3GjZpfBuLArMqUJp",
  "key1": "Nr21BEcdUoSsWZKtKQicXMbke6KaLTGAZMkJ95q97Py3dzYFd2bWPNzrTtgVNodtK9e89me6c8JfzjhahC3ck3n",
  "key2": "APQnK4P5Z9vMUk1ywHp6bAPhpzm9d6YUWp2DEbcSDXHNxS6f4uMC7ytdAPJ7AdarYgbK4AUWUpmr28sqfRwKYWQ",
  "key3": "4QUNKBeC3pQMm6G4PV44eqM8XXftutSp7Dfqtm9GkuC1kE1m9h2BEyVRcBa3AZNX6rPXFP6eFhs8j9HPhrcV38MM",
  "key4": "yKaYU2pVqpZPzUqGWtfcts45zJtBgsphw2aSv4Cs1ccKk5YPeJnBe1tiMT3tMngfznp5AfxdUomSutth4gfPNFL",
  "key5": "4MrChpqQWHTEvA1tMFfKVXEULGQpKu6d2TE5moiQDd9sETDjs2RCDbkKH9483zngyymKDwEKjvBLwo1jeSNdreps",
  "key6": "67S9Pq1ffteW95F75EXBAGXMR6RWEV3bLytYPRA9S6HHM4oPqsuy3ft2b7d8zwKi1m8xsMKYHrafH6Sj4Uqz1nob",
  "key7": "4hLUhNx4NJnKy9cadZoYZg8SCayhbCAKiVahWvDVvgN2HwZRC5off7j3iwoTVH7Cr3FJte1UL4recGonX2rkgTP7",
  "key8": "HEBeqSfSfSN2m9UehBeAR5JJ9FXH6NPEmRDm2thgxbaXTBqmCxoZvCpMk8E78R6ZWGVZmLNhbAiLcqrceCjiuia",
  "key9": "4HMw9jLuBQdLBF8CuKyp6VoKCWmGdTiNDu9xkxeR1ER3rEcTanVuvTPcMhFXm9ZySMCCSKBUaf4zKQw4Ln4TtwT1",
  "key10": "4VMzARM4KsgeaWF8VC8oMCgZpcrgouwkgGCLH4sYRX2PdpoANrmeyNJkkyxoTKdWij6a8ZpbwehGqEa4H24hm5jg",
  "key11": "5Cz581MWYeUuxiCFtnVYLXQ7Pk8mb9StNin74wx1cGmpjQ7iSCx6khpZKDg22nrobYwSDc4rwCU2o1oYE5FQF79m",
  "key12": "sViehZsB3VnjdWgVz1UZQdPBT9MaHUQ8FdN5Wox7UJSu1QSDBS3iDQ2DNPxGakRXE5928P6JTfE6DH8hHfQgs36",
  "key13": "4wudtZaRTeeFWAU2YJqdAAtmzL2ebnUnnPBd99j87WnrsbVVrqUHKhVyDHghifEZwqqpEnmNMkGqLMEszx3JLKc1",
  "key14": "4pmvdq2RxnczpupxBon9BaW5c9pHDNu9XHx9RFWSKiPcg7Qvz6kaB163CY8iH8gmqnJZhEcZ17BhLwJjZk8gRCgz",
  "key15": "5FFteTDisrLshw31M4HfQLjkSLUCBSYgVyAaZ4jVhTokXTveM87gXyXHzpFRUnmgbRbtgRkXA4FnjomMDNvohHAG",
  "key16": "2MNgnQRNw7Gc32dwTT3ujRSJLZaYDBwx5DBKpQfZRnPYQVDQTy2iiXcpE1TY8VJjtHgY95ihWonBdSZhgtUBNH8j",
  "key17": "4FWnbqjxJBxrhvKJJoMSNWsxg4Yk7QCQpzvfTmoCj5Kwhz6nbStbtcjLm7VtwrgcXVewPCbbkAHeQmjWuteRA1y2",
  "key18": "3YxczR4XrMKVn4cU41E4kGa6S5jbF9McFVZefkdeoyysvwJfHbGjXqhXDYgjjkHngGVyu2U8tEJnTM3iS4kxcGtR",
  "key19": "SuiaqLBHRSKYrgLptUSZUQyQG8wujxoDqrUvVNK1VTc8B4Qn7aV153AfjeE6stJFguPuWZ59HMkJ13XRvuTgtun",
  "key20": "3WsG42U43LiM377cqtH4Bqq9xm5VPFMbz8fF1Ni66Ax1Gut9JNGJEUNJeoyD8iBaTQ2HJNz6Nsjf1VRoSTgufgJ1",
  "key21": "5fpGKYt8EQm197jLrYhSyJmwkEp3R8CAxVQi4wcAL1KeWsWxnTE1cANARaVTuz6T9MA3cEPu5Cv5NfaUARoc2MkL",
  "key22": "3ycRU94x7oB1sQ9dex3UynMXhP5Rv6RUucqXs22rjEu7JWdW4v8BnDT8Gy2k2BepM8ng5647GZrNh4zBNRSWHpDq",
  "key23": "3314sbkyjHpkbvzVWHgdSZjMmrfvoQSSCf2seJD9o62zLuWamKUpCKRMPxkurFLWbNfKj9iscwNeDeveJKYmPuLM",
  "key24": "4bT5MNz5HFxo9nfddWfintsRuD4wydrbioDbjiQ1iPYLwnBTSBJ63dTeZ4LgnTrYmPneHad6X1neq85XYNjRzNZa",
  "key25": "4u9Aw9bjFNLnUU3g9Y6NHsYxZNmZJ5f4DRBEzSWEF8nJoxF2HHWDSfHgW5TAeZ42kQxdXKstXwkWBhx3mGmD6ZLG",
  "key26": "w495aZZk5g1mKG56wDrqrDk7cmgrrc4s8S1Eqd6VEgVnvgsfnJwomkNzGcWhwVPp9HmEt9xDjtvjtDSyhdwfYGG",
  "key27": "2YdudyZTLWPiLkGAFWVJRM2zdB4fmJ1ULcU52cmngFEgKBw3mPRzj233xyvFUqR7wGEuC3X3GsqEUmZwNU3TTDEB",
  "key28": "5VTfvAr3maVFhGAAo4TmeFDi9n6NoX4mo2g2WvJGVrc3FsGANaFFW7iA6qvQnU6NM38ozGTq4HDNpvvuV9fDjJix",
  "key29": "2MGLCp9us5zDept9iBwc1TrobJgBvJtr6e7jc71zMjrjKweWJaJnNWWE33RHZitya36qrgiiuHuMsytZ41mNK9UT",
  "key30": "2G8gatbmR9sybGuztRx2ebR8jXfhLBK11HJ3133itrJqoyj8aZgU5t4DhQwb79q4fJnFouYC94UZDoGZduL28XCa",
  "key31": "2pN87FN3tAcyuqp4impLNcWawC8yb5hgBNJuLpPiXQh1w4TdHBLU9GXmzNZdBQb5oCJdjozHd5fQamoKyxRm2k9i",
  "key32": "uGyjCuQQyMezzKqkQz8896bKdarfZWA7rzM5vHAjYJtBRR91BeyZNsX1M5oK4eR7ZTXXE7VYFrUFEzdXmTVf1j3",
  "key33": "5hpQR5Shpub2aXpDTLKx7yKiU46ik2km7DDuXrYxiQYurVMptKiPr8Cex948MxrTy6nwFXsLhf4mRgK4MJfmKUzm",
  "key34": "A2pyf881d92jLudz1J6xxdC9D7TnBxCd6aGEtXHjnNVEvpTD81X2VFNay4WhvJkdp9zaoyGPi69LPPBU6Rrm8ew",
  "key35": "5W3F5rzjm4aemnZXTc3GBxRBwj1sYDngs1fPpgakN8nug8nvzJbarwQ6rMnEjxHdmg3LTZTxjpQ2Sp6SusvBTfCZ",
  "key36": "5P4dATkfi5HDeidhN1uxE3TJGN4YtCj3cub3QNa5ARzwQ8X9U1mmrWY2Sz8hvQRr6Urj4EtojTRYGhfFR7WZw6F7"
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
