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
    "hcEneP3awW5YoQ9EqxDfjQDM1zHwYNxR2e6Fdcgs5E8hyb8qukxPMFn5FJ44HBiqnc3ienHzwAg6t6oCUNFV6K4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PZECbwX5Av5ndGKsPGRQw9sTmTj4j6xMmrLQEMFT3RAfrx1pyKfLz7XsnUUhBx426GqraPwMWWzeSatoqutSupQ",
  "key1": "2jDwn5W68jtDBnz4uRecaoU4CFEXaPe9C3EjvZWwCv1Dg3fnXoLEuPQ46g5qVS9czD4yXZnbgAoGfVwQno9GRN4A",
  "key2": "4scVVV1NCa1385FMjv8jLg4TdotanYnjtebDHKaEJpr9zGxKv4sS6jKeV7vJPbGYGAPKkN28DrEFMcQDLNwijPau",
  "key3": "2jTraes3Um64rtvbAoAd4SRivoHBQeodAKXV1L4ACpZBEerbtEAmaUhAv1JpzrQXeAWEiZzR2GeH8DncZmNDung7",
  "key4": "TEM9suGGFfhwWHudtzscgDCpPk9yMq6gY2Wvpgqb4CiGdpG1k1NjjVPFHp7eisPS9k1fd3t4ySrtDLqyM3C3Dhz",
  "key5": "5i5e2aRQNxKagSw9sggbtXKqBKj9tcNhicrjcYid3hv1Dzf5QMU3nLLB8HEDSP6wvH2qVbX8dBs8xhwQEajhDcEn",
  "key6": "5ZeoAAg83XukD3xhLizaxqcikkcR3tvqH6opQEpAwnupxc11DUQMGRzviiSXg3boKFAwFgJJQWJAGPcEbUWXWHN",
  "key7": "4J1cMd3zXvfrWmTA5TBhKZe15CheVwRmorUu5TA8Xs4dP1Ji4H2Ujd5342gGc53YByjkLxEYA4zSDwcHrNWgWjhn",
  "key8": "3SZEhvdr5wP4Sgs3mXDYH6zug7x9GKgztGewSku8XAzd815EuBRYXwFkL1RP4sG9BEwRuzigLxdA8riZvBqEmpAK",
  "key9": "28rySAz3zvpHumNyjdKW1VShgVJdBuPgeh1MLtcZWHUw3S9VsTFo4ygq4HadhNsf2WXkziAucijYmSd41cZEj6qD",
  "key10": "2LUNiWsZuPMHik1zK9hQgkbHyxGSsrXRQKb28rQ57av2iB1RLqP2aHwCK8zkK9cb21igvkht21ajPykp7vDjYrgs",
  "key11": "4XeNxVQCcrD2G7iE89W38srhaQDExseAuQmzTMFEsR1phJpiMCx4CX7tfNKsgJMB8p77LTBYcdPax3KXw7k5esk5",
  "key12": "4gTTX7JkU6HWDAhoNSu6V9tAQU81YWV8WEStVBafZz6CDF336r43WPzAA7xJYMoaCXz8mqf5rvgVgX5qwcTzw8XQ",
  "key13": "22uTZ7zUni39sPTFczjaFjTaT16eHqsuekszVViepi6d2oD1x7TTyTWkoLkiFK5tvmWwUD7XmbYP21BP57XwjrhK",
  "key14": "smHuyy31Gdjq4Lg8MKVcmP7TbyKFKqwYsNgE8joGGbiRroTHTxqsAYxj2bffcUS1wkGT32VhFmxfPqPZzsSUR8A",
  "key15": "9y9Wi6fTgNdEbPZGFXnLD5mjVLAPUDxfzcLjyf5L1xqFS3sPHTuDQg9Xyv87mUYwkoatfPSNr69P7BivBoBrwGx",
  "key16": "5XY6H5FRM9YCSD4JrgKiVtHUfxc3Tmams1ow2jErKBU7thx6h7V28F5EdqEfcspwpS9bvZASDb7a2VS5BBoaugbT",
  "key17": "48U6JchTbEVgEwXUc1BWTDqwCXrtmCX8eNrr4vgKoRKzMRTWpp9AAiNeKnc5SQqgvMYDsFvU2qRptkayRbgL1ivn",
  "key18": "L7sKnXEwi19bkMuVQEia9BUK5X64Y5nfs6DWdVf2BwNRFP2tzBeRqmDqTLWUcRujmVEEXUpAPawGtauL9BhBQvm",
  "key19": "4Vbzj2f6Vdse1FV3q5SDF36D4KmpWMazR429YVwL8Nw7Z7zoPsPUDfoXMhs1W2sQqh6wD6CKiixb5iYb7aHZzAKo",
  "key20": "2NsFbjr7MUFRG7FchW9q9U18zxN6psbZpiLtaK9X1EHA9JRjYY1x4jwwqv8PotkQLzJZLAbHLGAePsWQsJcDGwA9",
  "key21": "4RgGvt9uaUm3p8CEbb93nDpCdygj2UohiG372pNKnJmE68z7kpVhqs2BZjLDAALy7Vco7uG6ear2PEwptg4on2oU",
  "key22": "adYNAi1dVgqbsWNWVWh1PFkfe3eLyiafDRJQJbgQTCF1yzSoacMEvMstS77xqEoEd5RddqrRWkw9F2t9iXbJMMy",
  "key23": "3Wz8gPhn3wjSesYUir4aP5UCMGAUXM4QFuTobc1VdACPJNFQrEjrMht7wQ3o24ZS3DH4j368TzC86TJeUkrWXVRV",
  "key24": "497LgBYW75LmrbPku8yxq51dWo7u8ukrPP6dSpjZ3eRNyRxvbyEnfNojoVRcNuQjxxPKxFjHcrd21KRFpUWt4H5G",
  "key25": "4rZLDYayrufgYKcN9wmoxxem8pSqVhPa7jbHFf8wFwU5v3kqwaHQbtepxDxPN3EB92Adgg2frG51oWhNmsXawTBv",
  "key26": "2uSZpWx9FR4VKZx7iD1upiGHHxtW89jMrEsyfNSPmGLh7mw5TSdVKPazth8Adk21e2JB5XfvZ4FZsVygkmUctwU6",
  "key27": "57cWhawRBggZsPWFWNJMLnAwfcRMz2LbcXrEPkMF9Yad8s4UckAN9tvVQpUdQUJpYeicnTnb3CFYkvqja7Sc3Zqt",
  "key28": "229zrftX8FGHgd4wHVPtPVKX2H6LamSrRDKsNEoE3c8QJ9326ZX9VDVTpjuGmvzoHgNX2dnVRRVkBa5qw3f7qvpJ",
  "key29": "EXu3cL3ccaWVdguQeGpY5xek94BxR8352ajXJGqwRvdjJztHSBmN9gWBqe1SMw3TDzFMb7ea2xdWwUTamiDgksa",
  "key30": "65FtiGW5aCzCLDv8Mf69Ns7dWdJmXZYWPsgGA7DHLSgwUVtWd266Ca9RJKREwsCwuwsbe6dpP84iARdgXAW23wsv",
  "key31": "5P3jaKFM5rxZmZAytQx4nFJGsqSmauHbve2p7NktAX9zK5zjmm9AjEA9N7ui4wndNKnyU6Gmr6FGZDHwzgDsqRxZ",
  "key32": "3yAffrX5RM57HFg2b3B2kKSBqbKLm1Y57GetRj91p4xvSarTMb586dnvQpn762jD8PNzXVkUzVwBZ4mHXksLpew2",
  "key33": "uGbtUn6gphDSYsmbefbEAnUnaUGk57kjhQWeXFwidGyxvQHxta99dNt7FKpdX7CJeevTfRFNHQ7gpvBz7EsrM4E",
  "key34": "5pihhRZXJEeBeSA3PqCKeyWii74tPebSGYYECcW78RDzUePhLXjRFF3ndbEQ8eBQy8EiaKuMAz6ifZfKVvwcsce2",
  "key35": "3Z8JRY2s6MDFg1LcXQKPSfotvBaxcPTD1Wq5zjnxacRqKGpTv4Uhh2sK4nk7yBruChrG5fJLNeSJF9vCjBtUevzk"
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
