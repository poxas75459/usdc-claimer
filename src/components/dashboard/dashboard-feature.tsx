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
    "54PPUW1tWnsSiPhooVitpamk5k5BMnPLYZfXLrBKGYUpBE82A721jZrABiA8VsH9ySgpjvwjeoqKxUtRNz3dJV7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hu14sfTYMVF2kYWSKpDzQdNRZMWnoPybBP5PeZQzN31ZR1nYojgRErVHfGT8LRZVdSEGyM3mm7KPwBr7z7HdW5A",
  "key1": "3Y9ueaGwdiqznhbEXEU3kwkAnYYjYLgAnkmLG2cbt8fN69mXgSKqKM1wvVWFZbCotzhd2Jo2dbET2M3huBJL3Ka2",
  "key2": "4ByyT9ZgfHWSieyVTBcWc8UFr4vLu8HXN3ayZ46bHkGAx6b9ShqEFAZsEgdNPtf2w3UiGMtYwcT6DVVVe6VteDSq",
  "key3": "5w9M9G3NyXQUYjG4QN3MbGkbqtXgDcxn1nth4jRoGG5cWxFuCT9sjgVEmE36HykMFviysJg7t6oqXKAVt5GPFU1U",
  "key4": "3VwY4P3cP4DD5nwR7BYWgEX7VhULUtZf751VpJXLpCUAgGT2Uq7ykoBKWxudoF33pk73Ho7gr6fUQmTjEvfXtxop",
  "key5": "U4HGeBke6UFRjyASwv1UfXaEuUpAq1AzWciumN8R4JwTeZj3J3MsBnvBEMt1FTYeSc8f3iTtkzVAegiQZkK8KjC",
  "key6": "5jx8KSBak3wqAsBWxzUZ12PYqcEfSPYwBUn6YMPPbqr9ahFxkbASDc9GycKAvhNhRxcfKNLBG9vr2zHADoWgDiWL",
  "key7": "5ybyBFZwjZGmHhVW6Uaj5wQRdVgNiPu9mr86cc66KJ25mKkgEpjRE3HEpzMdmK37JWK6C23tZriCxb2xMRcd1XU7",
  "key8": "5MAECp1u7LcFwJPbwbciCpsMwMm9AWrNtA6JyjVZ69nTaE6PySdXiz3KBns9gdyrBYuePZcqqckZsz4yyozxHWFi",
  "key9": "oCihRm7CUBYA5xXSmT77QvpkZYQ8gyyN8pqGy9TSgte5qyq7T9X7So4JnheTch358cAj2a9DYG1TVUfbXSs9yvd",
  "key10": "3UxZ3PLSJHCPKz5Fijw9CJKdmGipQDCV1qBJu6QKGusPBGjsjhd5C2iAu1624MHNXS1WzNsmdMwarAKFesyzqe3h",
  "key11": "3CZAHrhL12uCzrUopYiR2RwMhS25de3FLqZ9Nqcxgowx2RoiRWHFRPpq3QpYDyDNetMgrg4yeiNYEJ6XAFMFmkad",
  "key12": "2iJhRrxzE5UneHGJK5rNTzCjDHMEfnGW8WXjQ5WqCQKrW17xpLDa2syEzNqCiPpEwtbUjQBjPPYNKNZi5nCfEoPk",
  "key13": "pJcyGP8EPNaTYKtHRb2zdbQzfLgiG6A5wCVadmB9kujQb6hP7Ddhkgw2QgVbS35qNjbBiRjb8WBbx4v4tKTsavn",
  "key14": "3utAjRUdRSLcuUdos3X3cEryUEQVbX1K3GjysvD3P9SmCFWMNhmJ58LMTydckqS5nEcx9LjLnwZGirBd8sMtYcbj",
  "key15": "57qfvdnr7rbMdFrq9GPDirzVKqH73n3rWyou9T8UHwLg6QE7b1StBgwLkfMPLRBjeV5SFy214qSDqFSBp1H7M26Y",
  "key16": "57fuBWb1D1KZjXQg25DNmDsFkc1qS5xKY9UDZLGjqhaZ4cVta7RNdQo1FUxTXy3dDKRS1Y5qNdSYLLWGsNbDjknA",
  "key17": "5bPP1jxUsF9gKiyiDRS1QDfwkTnjgbv7VY7DX6JMKdcWER1Z73FfoHWNDFvw3c5eoS6nLZpMcZ5s6qR4PtkpvhEf",
  "key18": "66oiDD5XQzN6YaPqUdxNmJuMGXstwT62kimHCGBT5gFDdKQzzsULjS3D3J8hgDHGTumNCWBDbRebFL73McXz5V81",
  "key19": "57qUHYUymfxa44Qi6tzZqQC7crnbiAfEDmQU1LaCriUyyUEPkrxkUjuUavUNgWnrGLxCWiPdbxcWA9jug2AFMagy",
  "key20": "58Dj6ZoKPJeJM7ZHEsEPYbpo5VwxBrCK9BpTFHVUtWUbryVzJKJrkeuCGjM6pGntWWmb4zMxAwwSk5aevtPVyrBr",
  "key21": "55egyNvnuigRbS9wwybaULuaJKZx1XPMggXWPp5kGStTG3E8peauZTco7NbDJmDGQkBcvs2ic9wzehoaaP5YCGWG",
  "key22": "4ufH2RLFZfR6432qy6nRvUkvWGqEiNKJKTEzKbF6co2vssfhNnPHVCpo4QjrrYzB64DNstGnTf34qs1cv5JYF4Bs",
  "key23": "5B9j5W4BRbt8UBXRAvRCyNBQcLDV3ouSe45h8jzEioUiimH2yJoZ1yH67cK8daSNxh8LXmKWqeZjq2tufYR7ymGN",
  "key24": "5BX4iSTdnsf8wuY3eyzrMxtKHqR3E5JbDfA4dj2kfdXVFNacNF65QP1UGDjop6jjvNBRA9xvFsbDHr56PfnLrGZa",
  "key25": "3DxiAbN5y984XbYyyTdPMftx9eXNW4KYcXvAmA2BzzK4zzrMvd92TtKc9thF7SpBx8PeFJGzG4AeskXd1UEhxMbC",
  "key26": "4uSLKfphTYkjs37D9msqRgt9A4F29ivtyJzHKffdQY2Yr5x2PY9yYQbts77k3CfYQJ6mD3ktqjdyXiVvLB7Rc9a1",
  "key27": "3VYQnBSwR9ZGRUT8b5jQ6U2ctLBF7sNeMiPKBzQxzA7gqYmVefgyE6unjMJuWfdbdUovMUuHRYxwQKRyHeUHDYV5",
  "key28": "2Dkrwbv17msqDfhC4fLg9t9PyQRdSVMudoKsi4KkfA3hxTjHnHDjwiWTdXKY5hjMgQcyyUiwJu99YSJBt1c9i2vd",
  "key29": "2CWvgSrmKYDfBAAqrowhUv3qLQk4wCycGf1TKwxSYheq5Nf9fsypSVczkV8Z5XNYZPxquDNtHdiVYAamG4HwFYnM",
  "key30": "NKvawBHmKH8H64Yds93w3hrSJ1VuaNytKwPLBB5QjEvtYqDYX9XXMfDux8i9M2Hp87fmEyquDn7CQt1H4CEib28",
  "key31": "5EwGSbLkMhVh8XHiVWD9k3Fo6af9RbpGeqTy28YR88SMzPTQe9VFesB15mGeadEi9BiqCqV89NhP5yo2ZDdBMGPN",
  "key32": "7LNbjFCSE56YDTCC5aLsRTD6goRWZAgFuX6pCDd51oDMpMFFdCLkYpoHPkFAK9HQp1U6Mb6usvaDRnZjJScBSyU",
  "key33": "3buiWymUMSvbroCXeUTdYgzsmcSraDiN8a2gCz768CnkMWyESyDdXMf7W56XNs52cvQYHJXXuCTYATemVdr1pfkm",
  "key34": "32soD72m7EsdN5vmxMEaD55YKfZt7yhzcvGJxFVHMUqajCx9GFhY4jAD6iPfH9ASinKzxAEeEGhW4ucJ5TEfgzMK",
  "key35": "5wjwmF3gxoW1J52XKbWRxfe6Qa6VXNbuD7BJm2nur133uLbBd1UEAJbFVySfJupxUispBsaiadh71Tjdom3ucokn",
  "key36": "5sL4yk3VPDv9Piv62KhtNnbzmHc931Ajk7KNyaHawTm43J9wnWM8Mph7215xhVt7DSFEseVA9TuHx9j1eg4BUCyj",
  "key37": "5yiH7mwk9Bz22rbrt94vEecspBDP8vnUqPt5mfZcC52b2ARjwVjCK877be6hm6Ca9wkuV4MVUf3Qcd5SZA5J5v4k",
  "key38": "5RrqhBMne6wNdFg8wWYvSDFfo81mjxwZ8MmDU1AvRCwd6W36rMXr4PdyeCNXjUJSUZDjKRkwpvUvWFyjekywVB1w",
  "key39": "TsUyk9t8EpdTFqYWPY7H47QwsTiStuibwFSEbBVW8SCtmthSsWkp66HkCNXcGwe2KQPChLj1jbfTS5wxNCyozQF",
  "key40": "39nBYcRBHNVYPX7Kx2uz2p8EJnSk1JjtroFoevAwrurfJSKeApB5xiLiH1Hs3YrtE2oQDRJYfH5UCgcoeJBfxReh",
  "key41": "41N427jHC7EL7uEMMn43BvX3n9HLj18MPGweaRZcSiPm1X5CYZBNQgTTZ38zAgG9HGsbZSrnLivv3NFmMTtnaV1g",
  "key42": "3gkV8TUoXqpZfS55gzfqAn8kvtUeWQ4BEFqe2UaE57vQwfYfeordvB9TmYqhWNjdgzdPiEiockRVwjaS119cB3qT",
  "key43": "5QFRyCXPuf4XjTKfwaGC52tvttvUVbJ3qQhoGHUdLDtZL2pWVBtFEQZt4Xnq2Sk8dCVMRg3wo2eevSChhBbtvPJr",
  "key44": "3EMZHMXvWSy3xeXRKVK1RfZEp2YcxYzT294WMdsxxugUiurbUuVZczfndyrDV3TrPfcLrXyG7JRLGrUb9TQUtV2",
  "key45": "2hvpzo3UQ84mdfknmd7cDiB1CnDzmLtWzETgmLEA8VF5WqNWCD7RDzSbz4sGbSnjg94r8dDycqjUTkZwaJ5pYRAm",
  "key46": "5x9HPfKdtomzDpLzABc7cG5tNVyBp5mcdjgSU2cke22SEJNvitWwtFUhHZw9ALZ6HPmT42Cw3JcYXur8Z6TFnqmz",
  "key47": "26aUeHamZG4Mv6RW6yuUrY66PxJYATJxZC9Rqch92TNuXTFiN5jv8CX7xNDcptVSZ2HpjDwZkkVBC3u7t55khaZR"
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
