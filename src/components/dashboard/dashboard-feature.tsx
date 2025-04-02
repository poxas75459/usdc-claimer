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
    "58FmEqirbL4W7gY5gY3mUVjGvEwq6ZbcLJS3msiq2587e8hUXt5QwbULjpqtVGENTdpthKXj95fDk2Jndk29vxT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ykoWTiXw6f26LWf18pShyXeHUrbnrQXRQErmMwrnAT15eLvFgbskpABR7e8C2FkmkStvt6TYZDjneg7PM4mFESB",
  "key1": "5gRHK4TRw6wqXa8NnVmFLdfpLmhYCUq2pCxfM2eMTU6hBFRQauGtpKLW3LQTKR7pUEV9j7M7eUSWmCgpngDMxqzR",
  "key2": "62TRVLEvUeQ3jmDhhSYW7Pp6XVRV74bhJHFrCGjyup7kCnBtC2pH1KdpR3S1mRUFMxZd3SVi3VvCgTS5FnZoZVeQ",
  "key3": "5vtaxWxDPjdcrZ2pN72SU2vrL4haMb8dgBq7SCW7EEGaPmiCAkZJ26KfRd4mQAgveJMi2DLUbLF7P5Q4ZuwjGTEZ",
  "key4": "36NCbvumKDBSDJxJY3w6wHqDsgjSDZDjUvoFDdJZy7Jj2hcqgiP2xPt1prNb1m5bzR6xfeELPFBMNAQtjeovVztr",
  "key5": "31rQv5nhf45vrgvrvhnQ66N7ueZo6oyb7Bx3FovaMz2deJx9r5nm15r2TYevVM85vq9RzDjAyAAcDcwi6oL64coS",
  "key6": "3yhURC1m1No62RSHamqT3MZmdWMoQD8niuUUJC9fT8atEHkGT6zPjTgP5N4eawA7u5J3mwR3F3SPdDQP64B2NZBw",
  "key7": "3QEf47Woc6WyE5iYxiGScCAGgq3L1bhwYygjHYFb9yo5Nw83oE5ZZZc3odwGUsgA3DzQto2rLZ89DpJ9UBh81tRd",
  "key8": "gUip3mQ2yy4j1SMo5qsoDu6pTLK9uDjQ8CZoHxjDioBjwPRWJV3uUyQgd1Ha6xAthiS18Sw6hezfNc9fGem72fD",
  "key9": "4wHx9fePXt5ZgKzMJAkJwVpXxP1uqzF6E5KYpbpzNK9AQWesSyFwWNwXax4Ka7GVPTqbKa82ixtQN6biwVX4SDyo",
  "key10": "3yvBBTaEnpPoMTw3oXLJ4qUesBNZYtxuz42RdMBzYMpHpv6gpN8mMXN2Hi7ywHSmRUnbvhRMRx5oX5357sZDszPV",
  "key11": "2hmdwBNBrRVo42qEXH6BgbU22mEYnZBdoLKaihL8H18S2UiEP2jjgLbVFwydgiKjq5EPfMLgwfbJWd6WQYYc85GC",
  "key12": "4FiYozUePRDF1XvHsSEDbDbrc3TXBaZ2wvSTbWVuvV1Uyueh4PoH5pixbhSqU6yaE7AXbua81q3tHeDZpYu1pPrF",
  "key13": "hMYTiiHB6k6Daqm8J7ax7z4ZJqGc3LVzugK3tLnqU6T2Dy7RRxZKE4KpD3Vxus3sApEo8RivirkUJcjBteHL6uC",
  "key14": "4pQVMFLtX84rLSiEioQN2hoMWti7BWAdMB3ro3aLX8ndgy8qe72uUDYan1V6Nt4vzsreLqaMsS1jWj4GTDwwgpn1",
  "key15": "4xfxBf7gsY3rgjH41y7M4ZCin32m5dLn96Hdkr2UWS2xoWy6LCQ8kEJyvV5KM3xmM5d8o2bM8N1t7pw5TUKefQ93",
  "key16": "2d9jJQAmjgJkAhBbte6sZtLxzfVAn5kVLdA3B1MwYowuy9WKp3e5WAa5AChSrRKCfj5gt4xwHMQFC4sPJwQPVdFn",
  "key17": "u7Y1C6te1xNfpcPrSyVtP4WotwjqGbXuN4R3WgTu7uE17yp7GcRUqvtYjXmCR5HeyFePjJRjXoDyaWfmSTEtFmx",
  "key18": "4VjtGsXWKKhzAkymMKaijGbzAHFmUtb4fPqBqLtSr4iemkhVRZR5bPY45BefhxExUPZvxjxEnALgSpWTB9bSF8dJ",
  "key19": "5aYmudpKPR8eX4oE59x5Q7j7CAtSSWCtQDTrz4Yw63q13AcFpcjBmVAtNiGVxJTXD2rbfe2DHd21U4bD4PGhMTkh",
  "key20": "5f3HUB6PTnQVn5vWpAsZLpFQ5LULvzkw2648KdcE5FkwBjjEs7EDUVUodXWo6yJ4GxMnJSELMbBuhqj9iGy3CUjF",
  "key21": "637GrN4HWVRpeToqVtxus1MfUWCgxu11sH9RH6R2sYRM5AaWyowxpBeEgX9hyhJpQRzBPt4icdNB4QGJu5HAv1gZ",
  "key22": "3VVc9V4w59GWZR5eRBPtm7Ys7AB5bTYNxEtZLoAjkV5CFNtsMvyAFWcg4ynfmATGWmfdBuuLypMHoBnNKGyx8fL1",
  "key23": "5dza7tTFBJnhHTRDQPy8nWWD8oR2pB3RJ9BPGE3n7gx2XY5H5yKAxTuvZxHSk8wKaQws8UbZ25z5VA3A7imhgX6S",
  "key24": "5WT65vBHyNUZcWgdin9m1AN8Eh8fW6xL72bjY232iJtrw9ft9EqjsSGWGkP772VBNR8fMgaJxAEHZMoZxGpf7tVd",
  "key25": "4ebJLD972wBPm7iYeGHJKRgHhAH6ZSSEebfMSW451SVXgzgZUjqfoumjquexdx8vqpeVaQ7etQVRn3TzWfa54A7K",
  "key26": "5WFzLKGisSPytzvtA9APanY9kjqSGj9M7cUm3aAwHgg6RJBzX25XocRrtZxU4WrJBfW42gcxv35wD1Yzg1y9p5m1",
  "key27": "zippb2Uhv9FXVpAybCxiCkeuk4iFqcRyDA4ERojUJJEzXuhdEqk59kaMmK7rky7hDMDBHEwWKGydDDYMMRQteKx",
  "key28": "3dw2Kkgp4VfYoY1VRAVA9dSLX2MkUmNDuJgWjqcKSruDzUsKoVsQQQCcmyns78aytYY5xxMM3su6w5jpYbHKEzqz",
  "key29": "9BcxGDkHsDAdu54ZNMRpDXB1hfujRHP1UtzKA5iUB9RcTZqfspVdxBC3eQLDJiHDK6VMpFDtn1PWtdYD38qCb1J",
  "key30": "3KzgbtrRjBstbRKuxs2WvJ5sqjF73en6UdLkjBy4FMub4RRt736m7fUjkZMDDdTLbB53z7USRWTWS5e6rSjVr7sX"
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
