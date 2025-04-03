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
    "3eRWgj5dRhvgq6WoW8ExRr8ycqnuSzRxmQukDG3BvZUVuYviabnxLo5bYPifRokrvEcW9Fv1aivat1CHNjd8sdUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NsBK1RkVU21GambkT6BNzYdLtRrF84EKC5Le3tmweBkgd8Ph3ChfzPmsJkgWPFFtg7vstyZeo6Er6uSMU9nmV3P",
  "key1": "4cHk1yPmHPxJzRXSknDHv63MzmLCYzZvMAu9aCyrTQ2VNpAtr8FmPWxfh5Y6fTM4KtwcNojHHXmcaDdnjrKYApE3",
  "key2": "3CY1xbUoQSGdzDVGr5Z1dwwE9BLsVzKtgPt15SmZhU6np98QoxS7mCN6YjYXvU7qEKgXEsSSSjEJimjpvGPrzXZk",
  "key3": "24gbjm1rDxCRTHVXp6QEoYu62kwbEpHLYSVqPzwQC8GuPHRNuuGnhW36zjdv11QGsnLjwT8357BZBRyxE3joBWr4",
  "key4": "2M2Nc283MezQdvTHJCGbazUePy7QTiY4XcSEECp3DfiJRbJma5GeqBn9Gi7yr1LBrxersncVuZaz6Wnzxjn8re42",
  "key5": "toQbB7K3QzhmUp5Ad7ZzHTsV2fcnT9NKckYVJDfoM8hyNTHgsaMYToM4sK5ETBTE689yamijANZ4J4kyiL3RNrJ",
  "key6": "38P2ZRSEsRhuf1HeMYVvEMiVpLz21ExVfZw9roRuWqN5HVjpENn8Hn7SCzE3XmTZfnev4umXiwEYfGPYEps6pyEp",
  "key7": "YfsM6r9YUJrZhe9phoUoHZEsdymxqgjjZqfim5vKyTxqr5wCCsvSeJQ8mMptFRnhd8uqsDaHrcosE1Rg5Y5ysTP",
  "key8": "35WAe1EYRyatES1pSVEPtzv2a5QkpeDqpBZoGawq3BvfYTpTXwE7t9SDsPiU4ZNjpSd2mYBTm7riMLXVLUQK4Tvo",
  "key9": "3vLCNu4PKNXc41eXFgrWXdwHaBVwaAG5N7spSik4XBbwPVPkDPBhdo6nEjVdKzaPMeJ4pajJSPqkmeK3zBkH1q9a",
  "key10": "2TgQaJvXDmszaBHs4LFAhmLkziiGeoGuKgvkFBsG2BcYhRNWimyoEFccubQU3XpKUBKHqFbSHCpfsE2hHYTHuMNE",
  "key11": "VGA6pfGhhWT9cmDSkRqLkNCrDu2eCCoArrFn993yzkXiRSsvoQtdxuaixLsNvuFWY4wg4fEdnu1SnunFsWpDk71",
  "key12": "vMrkUxrgsCquBKgvNriPyPvqsbKEoM5GtoZwPNk8kde2TA6NiQzhT23X6Qej4gpggkko6uC3P6Mw29dyZfU5pme",
  "key13": "5q7pnEHCgfN5sY6GZVYBHqaukffBW5XnhRPKkcAWzgzwxRyN1NmNV67wrYPqf6FZNrFf8citn7WavhweGWiDPLtL",
  "key14": "esr6Nki2vGgN7CKkoRNhaau4PAysXdXV7rQHjG9FNXdyPmWy87kAbMwgANhVQeXo2r61mrqhyrKfQmgVUxfGeo1",
  "key15": "4yxnQg5fSdCwZb1f1YAYTmeLz4co7SJV8AdRcjdbqcgy5ubGJf6TkBhX5SNaH4SzjXmJve8YnQmjcd2cDK7bWa5d",
  "key16": "51mrx8niPR2jub24BYsMwrbceuCBfqro6E3fCFXxuceDYE5L6hh8o7kJGcr3q6kGaBmkvi2mxUk7cBhHLuGaAjwM",
  "key17": "2VHrGZjkg9HNVwLhnQ3ZPexvroFnVHpyThCZWmo1KWHpc8GS8SCChAGj5QvqPAWCYpGwjqCtPqWXvTtGx75FtJbr",
  "key18": "2N7Q7BHWSsjBki72vvSZwHhDZMnF6cCF4NsKEq8UgbWMcrGzq6Lx5rdGf73rTgp7JyNCwf3KbJHnQm4ZMEZh3oU4",
  "key19": "593QzLWLmtrXbzC5Rkh8WDkg8XgxNcLZK84pgnZER4qdwmj63Y6WELhdbJvzdVkGsDCh2Gbs2MpSouSUAD6sUddr",
  "key20": "3J9rZEJh7Rvpp6tBe36NwTX9fHxbxjPmZ6qcshFULo9TW45Z9FWbBU7T1kfegQ1KcmWgqKbPTvMsJFF4GAaaeZCV",
  "key21": "QjNZ21MGua23DwkfVWpvpzFJCGAZCmbpG6fo2xETb1F33HS7zL8pZXK1yhJnaHkY61c2Etd9MhtqXNVQHoRAjxu",
  "key22": "4nLfBg51ugDD1WhoAoQr7iZkCa1KHupNSdPQsbKh4WnP4XjrUiSvkoBKouWJHX5CvpFYg4zrweaEUBrDzKCg5s8h",
  "key23": "4rz4Nksrm4mzyFZsAgYKAXFxCVvKixnerKqCXTJeCELF4tg5YzbEvjH4Sdrid9LSWj1y3Vc5vHXqESsrdYfk1YSX",
  "key24": "4t2UbcaxRzhGDuKaHorG3gxhT3vLZYYx9GkkkoUDeP3dC1swpJeDir4A5FfTGG35b3cnaJmRdNhUfzRNdVjL8yip",
  "key25": "3ngWKAWeNiACPTYSStaa1Vka73VDVeJrqsdnPoqCqJBwamLQ8EhCncjQtfHeunimMxV2yHL1PtXwUkFNizjg4VZg",
  "key26": "57ocSiCZyNdgPGdscMtqb3Zv1HQdDQBoDdsbbJDEt6XenMZdnK3QPm3RHyWhKaTy9yjTNqzgSoXxPVp3SEv6zhto",
  "key27": "2gxPK8adRUMJvzLkaWEpXT8eY3LDLBNZuUVgxmHW4V4Y51Wahys61GdCkNP7SvybfGUSui3oerTo9q7yHrYDXyrt",
  "key28": "5AR9T47rPgmuTPmwcmADenxrcKwozfte88D8XNbawXRZU49Lwqxbn7iGQnfG7aAZ7f5agcp2igSJvkPztBGDmrW5",
  "key29": "55Mmy4QExsaXvEWozcGrxYvJLkwxnVYWtq9N1WZBTnXxUfUdjaBgGbAEQRuYds9SLuMNEPkhYkgPe7MTRQeKxhAL",
  "key30": "2RpTV9wyqecUSytxv2Sd8pfs68SCYXaNJEuW6kYNhh64ruBvKCoy3RdkmLwLH6yxL94KqQaUtw19ZiS723SSwHqc",
  "key31": "Ne9qfBmGCZHwgojNx8s7gBmRq4QQVTRcHMzvESP1tCbwQHE1VXggF3RQA6R7ffE423sAQqH2wkAkbXzAaF2E9Up",
  "key32": "5dGCo4cHiumPzMsAxc485HLjUQ8Sp99mKFzbahGcspc7rpYx2i8mQunXzQH3HNvD2sbiuHEKCm81bRDnZNz2jxMG",
  "key33": "4GKqLGjGYvsSAeQLvPATbpdrEvy1dX2UX2dV2U6QrKtt1zxRoPJmMScBjwJ64qBPoAQqFtBnK6wwLtADNaQ2EMPo",
  "key34": "4wWbx3NnwYoTwYKdoTCPVMUXLhxnfjHLKLeMAVF5w7kMgy6seZSZr5BnCrwRu1ofbCJS7apxsd4UYdQMYLKXLz1b",
  "key35": "5xHKoiyhfpydj5hL9hNsUReaDViyPTD9mMT3gPHh9WpyJJTLvS1WFBcSnpx9dXPY7ptkimME3xvyK1QFG4PXykGF",
  "key36": "4eqEW8mkCu2htoKPsESmzSK9JGiGZdwbAdBT3DW3h7Zgp2ATxBRgGYAfvyQUjhZvvwTfVctLSq8xwyyNPvQy5khf",
  "key37": "57U37vw9xXGnq676mWEbo8HBuExmjssCGLHznojpebypxaskqVPeDJXirqQnDEdFqHKmiBTtCoarXZAnQDvUUqhB",
  "key38": "5tqq4bRHJwGYTEcmx1CVrhkUKQt3FtoG7M4heh34yFhFriV5JfsTUH3KLZapVRLyx1utQA9RZsTkTGd7fXmPErN3",
  "key39": "VhZvndMPQLMsJL56vrqXBtLSZayfdZw3sgs7GAx6m7VVUeSBhoWwu2zCGBUnkuyFR3N2FVhCjefaHTYLtsDaz5X",
  "key40": "3uGSQ7RGBeYYTF8PqD6LzZrFYxJWS1zvLJA8gHEwo8A5M9PqcdgHBjRJQVxZtrNMdEAx5cM9idfaVAWa1mmnimyF",
  "key41": "Xeaeym513zJY6J6wPgSc2mD4XyafrxVcT5kRQ6q9TSfxw2gt8bU16N7hNBvXsUqUnbSkk854yayw88TM2VDDsba"
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
