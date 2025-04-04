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
    "2RRij3HgUrvUrKQ1c82SWZf3WCkpL1MVVNbCAoRH1EvsFDxKkzsyBcLvHbmrt4gumnNsY2aUSjdZ7weHqbp22hv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oetJTubEagDJZydpZTWo5fZ4BzbDSyR8nGp4tMtNuqhoiUF36ZNNoMR1wAgoL37aYmhjJYCsNjjM6f7pivSkAqV",
  "key1": "4FPCxozFLNbsbvh9ZzeydSnrmP5C21zKmNDAiMb7qhkvMZeVNHcuBCHR6dpTximb4X7DgkkunoXJTU3U6sYYB33X",
  "key2": "5igfJfMDBpZP1jgy4A1aPwuTnNGCZwGRs7wwDLEQcWr4nCKPn1Q56MtCkZLSGQjwobTguipdFZjj5nUSjgPfEc6m",
  "key3": "mVC3Kz3K2HDFs1zKTyGJdCDtruCUmiL12iSk9358k355Qe6LCNrAXVcqajJGakkBQSCajvQDgbaix1KpoMWTXcJ",
  "key4": "25X1eXLR9NdqnQb2e33N5P6qN1CPp5yP7uzLi1mPy4ZTAYHKEh8uvpKsKXqXPS6sMTUh1MnrQgM2qUEHmi6CPhzV",
  "key5": "4UDeKvebo3b1mvTR8eeFWHPeSsjMMjz48Hat3cDmUuzp15orRmC7Jxa4uyaC7TA1NMvsG1toqd2pzc2BhDhn6cSy",
  "key6": "4iUV3A1dV4HiP1Ks4LPtwvbeezBJqScc4d6jcY1KFFH53dimMBqwMu5xsHPN43yo3iWSJ71rJf7ebjPBhv4SM9F2",
  "key7": "45ihjVjNfbajNws2Bd6Kzcwa8gSaL3mJnKVsrngjgXbXwZxcVSPb9CMGYWXqqJfmNSup5265DiXsLFEsfvNcmP7b",
  "key8": "NdXmpoYdHtYJuKcQ28GmKJFqtfD3Mp5wSKCz4hUaqYuDhBkKGYxQ6wZrxLVUeoXfFPxSbDzJj39sYMneHBnCzXW",
  "key9": "58AJE1f7YTkzKFzEDVCTZEkNHJsjXobhSyMYwswnheFsJHGvDpYQbtnK3dNjAffHZHxcS6SyPZyX7jsibYmNbnx8",
  "key10": "2TcpX3YCueki5oFwNmwfAPCBbZJaoYpXLM1o6XdTugo36oNS8feas4c3xkWVBziLcv7xhEzHDPwUkqEsBGWZ9RgJ",
  "key11": "syhcZsxurnD23ZxS6DCWtXb5ejnrm5cixScBSM4KEE5Pq13Yj7gExKfGCgyuHFgtAqPT88oRUKhqyiYi75Luhki",
  "key12": "3YoUsDwRa4dzentnfDdJLA4bL7kUGPepQeEsTciGpRvhDdSTXZ9FdvbjYCNDXC6XBcx364kZ4whPagHDp23Kkz1G",
  "key13": "4yYAuYwbhgTHk2fnyKWVe7jRszaUoFSvRQ4hCLRkzty318TA87bbuAQqEbL9xWTy29oBMHGTu4E8kWG7estcQq1b",
  "key14": "5UUT5vcZVuBgDRhN73RCZMLMP5XpVM1zRn2PVbSt56USENcKGQt9HmSXhaiWPnd5QvXsV5w2RvSyQCUcJCA2vzbN",
  "key15": "48SttuMwG8UsdyVfvfusjYq5L8xypmLqgTLS6C6HzTxfdUEUnvYnwbaDgA6vBctnpxxK96Tc3QZG9KW7FKvqcYcz",
  "key16": "boXsjg2BWZoq1sJfGRg1Q2P8qPyw8ukasu4ExNfPHGAi3WZwiLWgiWEAHWmwFyHGFXjx9tCT8pUfHcz2fKBsPhr",
  "key17": "2jK8BTDinZLGmQyNcWQBzrGtnDQEtvWu5ze2bAz4wRZwTQvUdPe7C8S7NMXRyRtpAR8y6m65ihxWxa6JPZtMdvvL",
  "key18": "37hnmy2f5r4ovyYNHyw2GCFky7L9T97pmKwEb7zdFn9MdqJP6mW9wwq8Mjuzk2sqjky6pWr3jTrLWLLZRZKN77NM",
  "key19": "3kJAFoFv12Swdt2evUB3cqLhwEHHNnq7Hx5Se1Tv3XqJhpg3sTqaZNa5CP2uGFQs81Uu5KLbFasEzsTKbpydd2eo",
  "key20": "25pSuHtrUo5BeUZxXLS9z4avMcG85GvYgykNPCfa3xCSvKzk2LnkbriURgwYWssh35n9yfWmywmfZxLrHqyb5oiG",
  "key21": "3xMzha5gLDczWKc7htaJ5YgZG7znTuzTnG6ANnr2GFyo38ekjpYvo7KSN5784TgmLrLqX9nXwpRbBjJEwU8DUCrC",
  "key22": "eErx7DUMoXWiDXdPK3Az68ttECVaBZEf8ikJuyghG39HN2uu8vdNUnN3YJpFWD7j1MuwRpEpwdCEqDouLT1Rxh8",
  "key23": "4mvfo5AkHLdQHKtjpmpTyi4qZhCTaKtXVrUVFMdM4M3JRfjXJHYKFxctSUQeMysp8a25jNcUAvm6r7hHAhdd2Fcp",
  "key24": "2eQ2gW99bQmmCWfVayMbjJdGTPet2Mw7psjEnfZPz9HHJVuvY1eHbJhxTThmKHvDeXtszX1uyvUBLgvS35mxxjkJ",
  "key25": "3vaUDND9ZGSv3SfJBS6eQbJnygK4gpsd1vyJMSkbD5LK8ky8kDvSqqMmLtQjnmG7QN1zrDPVrZjtER6367CXh2EB",
  "key26": "H758sdBz6Wu7wwh35tprff56QooazNERaA8GcQLCDGUDUGY8i91xc916pUvz7A86A55N6EXAEHU4KdHuLVPcnVt",
  "key27": "4T3U7aKZkmksyzCwsVs7GojEGd3SxmMK2brphrkGyvgT63ZG7Tturr77sPvD5Fhv738qYe3W6LZnkgrt4E284Bq5",
  "key28": "2TfVMGdJXpJAc4EZVEzRRCCLBACxHf4NCpjgfDC3kYnd1DAnj4symnU6FtZYhZvmYVDeinHbfHquqNYzewQUWzup",
  "key29": "4DToHRVrhN4XTTZSFWdspFEX3ppngnzBADKTc15rkn4UPA9Gpdiy1qoARKqAYTqrmJNtVpVHHoSszQxuRDgG91H5",
  "key30": "paJvLpXHWohk31BkJZPfsqaRfwZxs2r3n47WRRFGqM3rVJoTiApDpr4nRVHZWJ3kCtw7EWghbER876qvTp2cYBL",
  "key31": "XabaJppz97cN4eEPFRxUCpkd7JmRD4BrU2iR5fsxU1Yr6rRde4vv3sfB6A57b2Bb9MyhGikK4ovwKqfhcGYqBXM",
  "key32": "5R366fcZTAQy4Syoix6pgM4wQqrzZvq8kAZ9H9dYhMJXKH6hSrwEjXCNZv9gQYLAun8VgtystYQg1rAv3fy2WEe",
  "key33": "ryFYC5Ea73pu84PSttjPgGBfido6NRnR1cjUNGgEJNP7Us72K4F8MnS5ecriKn7cRcw2wr8op3BE5AzVv25F66e",
  "key34": "4YA6r8A68ZNhnSXW8gZMmFDwthwpAvKVybGxskVjUuFfbfSkxY1X8iS4Tg6N24uUzzUmFD51QQgnkf2eQTSnEns1",
  "key35": "3xkEXETa4CqFc2C9Zz1cJeV42LvwQHPr5HXCuYjUwgL5g5Ep8odJhDAL7XQgJvswxX5FJqhUdapj63R67g23yjcN",
  "key36": "5zF9edvuiij5KsURuXVFfLYvRjdziyde36Xv6tRHAYWfvQYNVAdm2v8PM2K3H7dQh5qJQsgR59ymX511Qm9iEGiG",
  "key37": "38reUhVBbAMho72BcHeNYoedb8GioxJtUEDXQ5Bm2DHAmR1wMC98r9jk8AU8qZnhPiZPY4GA2AHY3Eg9T8DNJwxn",
  "key38": "4v5FqXH1y6VrqPkekWfsspujRu2fyFew7HmATHcLV47jjv5tyzNeLvkPGBSgYbwaxZuSFEMsbbLgUGGnz5Nc5jhy",
  "key39": "5Ny3aCjtTXnxD7GH1BwaR6vgJfZfLUwmb1iogYeT8VAbvEuzKfLfRqxzwBiXvjKpmGWxfzsMd5EhjzPtzs8vAUZx",
  "key40": "82FfoxBNA3DUNcge3BdvGRaUy9ngQun9zkRigMKqaEz19WvRhsaDW4W8bz1eV1K6pcXwPUBFoqP6GrDfDLwvNbg",
  "key41": "2atCw9sFFUJHP1iT2xJQ96MTVyqoTmu28TU5mwSzEeZUJQZuf3kPr1xCtHfjSGdJdrgKaor6CMaCSC5ZLautnozB",
  "key42": "31wksNopGrCGGGC7fS7vksn9NJuev2o693Y5uGoxw9mHWkBe4G56Rv2NGJsqJLKrTATkHaLmsJ3d1yPACF7tv21Z"
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
