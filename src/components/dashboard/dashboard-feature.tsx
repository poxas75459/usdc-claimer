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
    "63mCdFF8kYMvBSiB8hxtLFyv1mbKhzu6bQ8iYZa2WHsCukaD2VbisbFeB8EspJE9xiRWByEf36ytsGNbwTJox1V4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E5R9VbzLUjjDLAHDNSeGuJSKw4GHzpHB4qZUQ2UGXpT95P85CMZR2aURfonki3A6iQT6A5RptpNHEDSWDdZ4mm1",
  "key1": "8X8e6wsF6fpiDWQNEHg7DArvN2Jnr3sv685ZV66eTkua6UTsfuWrxw77KbRQALqN4eDgEc2AQUwSCQo8hLwF9NV",
  "key2": "34Vm3kdmcgeGjwFxt5uxupu75i2xauhfKFv7AZE87Ag8M5uu5uXBAEvsPXTTVTja2YEJzE6rdhMyYFrR3zFz2Gfh",
  "key3": "5qvWaMQkJ6mgdJPc7qz5rDNhWg39DrwexZZqBGcPSNEcW3ZMfXVoorykBC5NBf1wuePe5Gv3s2fE4UmRqdY6RXnD",
  "key4": "2i8cKKX6ekpBPtdfYUsvZjtCcNLJGoF6jhr5LQsqp6oNJp13GDdcA142PA3hUeKLoTRJMPJfzZAasZ62bQHhD13L",
  "key5": "4Dku4C8bwFaB5CMGsPZGEUdmRqKyUtyXfR93L4BU8TVCtAMKpwyVshz8nQDDdX2W73o2hNjZ6oYTTQ2ChvAsAvYD",
  "key6": "ptSxfrKeqGEBthPVpyR8QGzKPpF47wc91DX8QseXNzdSbggMTSXfw6sYSR4KoH7hCQGUH6BzrGwSZW26pnp1SEB",
  "key7": "5WW1PUtF3Kg5Ly9TKXDUFGoEKZcLiUqzchBr175SkThHPzxD38YtHybYk3VS18nX537g5LHWeRaMaTFvztjrEhRL",
  "key8": "m4Y6nLCY7U9khTa7zLQAh5T3CjfNUjM5b84b3S9BezVAbEJLqKsDbiiPQTw9ZJYKcDk8aD4JJXqGazu2dj8ddTr",
  "key9": "67j16Bv1jChyzD3KVQPUChjdFxUxdvA4uN64ZpJCmj9UgR5xMxLSd3aadDbKtbdD7GZPhGE4AX2nnpS8JSodCxAP",
  "key10": "5Rvvs8tgta1H6Aqh4jGLR5uSKkYbLv6BjeNymmsCN2fCGJBNfzNV71kw2LYvevdUaWFnq1kUf8v2AYATBsEwLkbp",
  "key11": "5JexSmAkqCPH7Aeyn6u4vxfnoMNE9qAcoHPCyvaT91nEBNJZB1Wd3dNmacTuDcdQhCNfskogs9EjqsUTuuvnXseA",
  "key12": "B9GAzMBNUq2qBVxPgBR4nGktw5YjDj51yqn4cYQWZBnZeY8EdWiZeWZYWe2Sxq6hS4yV8MkREZkdiFcg2qPQGYW",
  "key13": "5T5h4zr2GGgAWmKDhA72QA9xfx4JFZzD6Tk7rwGMoWg8odvMTYnihZ6vhCpBffZh7hY8j9Gxk8S9FcSonYedagSv",
  "key14": "4pzNMgeuvTFYnDsv7ew97b6JMyeeuZAsGrJe1BLtp1ZyX5SRs52iqf9D1uro7nUirKtRdLnPqJumqVHMShdBphuG",
  "key15": "2ba3e9sJAmmT5j8cB7Yj655dFCPtGJbc8rEpam5zJBa4xJNMQyVxutDyGpmTwutsiNKTeEpht2sobgTpg8fVpVVe",
  "key16": "329rMWC13XCnVaYKcASGh2YwyAfqpnASd5yXUgWKyRcncg3hPKNMfxi6wgW5G3NmxoQdPKCLGM9JWhB5niTyFnfi",
  "key17": "4e3whZ1VM7XZKHmrfBD1H9D9tVQFv4CyVsdM3Zx9sY3VTVYb4v34pBQeshK2eX3zyUpntMY4ppUJzk7xYpDyu3G5",
  "key18": "5SEdboVeHgdhZM9BFixoM7iDT73CX2eYVba1DJhbCqNVC39gGmMTjD9CEvi84aUVvDVXhPMTrxW8KbR8vWChBzyH",
  "key19": "4PyuZgccv5zW8Eym7JEHtYgrMrcGrTpCX9widRP42Ca61mcnW7swC8dLmsTyhm7SEF9qPbbrobpiwCXHkJd9fTFe",
  "key20": "3EjxrpFHRN4B78WEHUSYnfUBAuidTzg29AioqXpxCGof8uyv1FsTDtZmM54vobjtboi1R2ELNNMMHWVrd24T2Tov",
  "key21": "63i4PVi8oZyJzKzCuSuKVfX2NrjLYwTXoqjAHFsFCNzy1dA5G1XWdSBDdXm1h6sur1zJ9W1gWuh4DJsSTpXDywD2",
  "key22": "5R9pgw5hHSuNruzeqMWh75WWgFvzAT7ja246bcpa25asCTAFmgsrnwEbfbASCKwNQRjqcHusToJwMHvJ8FrKwGWT",
  "key23": "55f8GyXFtYB6G3SjL5k59rtUmZSQCwCtT7vv2dgNGA7Y8mySSvBVQPv246pZY54qkztHqeeXV2BZpzNB1hhd38BA",
  "key24": "5Fsejah3XdxGnvE65v9dE3ghSCmuQCyQrq7hnQueagjCFmTkQEz4iXmg3wmt6anXpjMSZoHPBFK84ucNDhUqethk",
  "key25": "4W6CVV83tZ8DUEjfBUH9ELBujwdE7v41hZPMUKCsJSVdcQY1Sp5AkJmJ2mJJDofQbtXFcr423NWyG4M5q5jc7jdT",
  "key26": "2unf4rjNZmhdXCTTAP1XU5r8MTPi2sSE2waGfAZUbcmH6LZ6kTkRjDrd1bvVkoD3wN6fobTcGonYLpvbtUyUyScZ",
  "key27": "5vp8wwJ3Vj3W8nLCFWkTM3aVV1behqzPBvtNto4srDTzhyCBNAa33iNPJBZn9552hAyTcrERkKhC2FnxVh9DBzru",
  "key28": "3VFUCGY4Mgr43wAF2mx2MrtWykrLqz79heqSA5yJxN2LWMQpUXDqy77RKZSzbe5tDQhRSabdnqELTfX5RcqY8cjc",
  "key29": "2vjkXXCYhxVvJSxh4xD2Tbd8cDf4ApksY9d84wbDiWaP31ifZ84HSRVssxPyW5xkJNc9FUwCdf12BHcCsEUDhpAX",
  "key30": "5AfmVKrBRBgaL9nckE5TqvwsexRq3YiYf7MDS5btCQdJHaahUrqLYb5fNBGLjWW8gfkbfbcjoehS7Ju5exwWdheo",
  "key31": "yNQph9QuNXSCb19SGUBfxfF9hBVNYXqMrkY5yXz7FyAobZbFoUGavT7AQzxhcMhVUtE4gCNQFQyPKLTWeWDfrx6"
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
