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
    "2Hszt8J2vAA54EHHFAWq2vMcJN1KVBUcarJqPk1fCTDsAe7LAnFTrGUFEo83vEnRDFGsLV3DS3BX7VNZKQaA42Lm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dkCwZspc7YetWJVguS1vcbYMTy9VS13YaKUbZrxQid3bkmc4HcqXdXEoFEtmmQ9ktgfz4JjjRtN5cdzHs2t33X8",
  "key1": "572nvbfNoTjsH6cVwggt49CQ27G99TmwZUGVdGQWjfA3nEf3gFSu8gTGi9xRhpdYGAFr1UVCSyHgPep6n6Jctw58",
  "key2": "3ASpUPzrWDBBDEPUNJaoBFFyoHhHZ8pQUgrmvoCRsDPfTCQG7y6BLbApQNBB22gP27rCZf2BRPHVr16wd15Rz8A6",
  "key3": "5ou8neog5yfdepU3h7tDqtqZEs756Uo4Y34W5b35hB8fXu6SAvhexAuFbzxdVd8Ac6ZWh1XBiT5hZDAYbnHxtxgL",
  "key4": "4uQQhfJns8WsfixJHdZXhxWS9LERZmnzoCzVx9FwTZnWhFvug5ETZJ3u46xVCUTsHZxcX65SymbgRJ3GY8fDrWVK",
  "key5": "4yWicCY1hrz641Z4for237hDQrPqvdvXVifviVmUQ8JufnRWouVvNZmossRmFaWMFtLH21jf4PjywNGqt9k9pTis",
  "key6": "4bgydYPE3KPmdrYZw5yJDeGmJkMFhYGin9pwAm5EF4WEP1B9xe8HFCFJioRaNELJADM9V1ZZ4Yzi2aAH7TYnMv8u",
  "key7": "44UmQf9jK8JujEAZStfMGMHo4v1tkPgZxrXugFjSqWTZGb1c6aFNok55fguN6JpvCxiSQxuHZUxXJeL8mtYVd4Zk",
  "key8": "2Vk8XxDwGXjL91559ud8uot89eCqCAh7uHtWEGykcsnGubB47sacZJw1Wk7YqCup4YSxL39okzwqeaFcjoEZhfJF",
  "key9": "5MK4tjm2imyrNzekpgKEa8rZNsY21pcZ68SL2sFAViZxE7pmWDC3eBJSwAYFtv1GEEJdnocnDnFVHL8AdLzshXUD",
  "key10": "4eF6eCQqJihLxyGLwAbNLo9goGBW6ivrJ8BFf23MH8gadkY5byqFENji2UDKmWVcub9A71exkDWVpJ3KTS5fqTJq",
  "key11": "rrud4QqdjyjEii2ErdEcrCr6n8YNCHkvJ1ZPDcTo82KVNTnAx8e18a8EMZCE3hj9tBaacwiEv3ALMfPFcknSY9a",
  "key12": "2SRiRxgzVeEev68FvSgUWyURRVogsr6ocVA5m6ZhSzUqBqUXKQMatfcQ2Dnnyj4ZbZPPVttgYgWrGkTMmxbjX7K5",
  "key13": "E7HVM3hJrYnRV3dMAkrKttnjqXDLH4QZD2ogQfwkKdifF65aWHmSFstvWqurGV5GkiCUZz57NFfXXcVoDwh2yd4",
  "key14": "2HESapF9ppDVZBx4LUDUJ1CWAHN71xdLqRcxEnsqXSP5vKvg1qgmaW3CbmFNr56Z3pQfjPkEmC3sKDRzBwKzBLoo",
  "key15": "39sCTsCSdaLXvP6AwyoJwnJtQQoQ8qEVUKX85PN4XiQCrY5cMPzMjLfDDBuTQQchrkPnJzvKG7haxnApZ4eeBHxf",
  "key16": "4YoAwqyvyTA6WHyMMbgxr5g6bZmnJF5vHcvhMRhsSBGa4qM1DFMkVJSM6ZLHXtfm2LRVpuSaf8Kj1LznZcWjfivv",
  "key17": "2xNYrzGTxzaaWZCT88LHEHiwSynwFNxmiP5bqGBkT9jHKWbCR2QdfN1wUPN8vwYoPqyuSRY68JUqotGYBowNPVKv",
  "key18": "4zw3XBXQkFfEgyHAvtmbw77MCqVysPghZSDyY1kArwPf6unq74XbTcec2QoDJMwZumj6pnzysYeu7y6n1miHfZcY",
  "key19": "2DsVtiZaA9UjdijsEdfFP4vuZy5PXX7beAbmixNKd67q1yN4dzVRtctsa5Komn56NhmT7oq3S8bqeXPFz4KVWBgx",
  "key20": "unXsbVpV33dWxWW289nTdtEHqh28RAAG4TSgbGGguTwe4JVALxWVvDQXUNXehv3b6Rqg6Nm3EGNcbfHtZ6R1aMf",
  "key21": "BtZpp9o1JPoEk3ntrWp43ebxPyPZyw3SnwVCDK1DzUM3Rjfs8hC5sRGu3u566tWFHDYXWneDVnxVv9oqet5yY17",
  "key22": "3SbYxRgDzmSWcGkwoWwhyBxyS5gCVodP27dEiNAxFePCs7F8oLTuxMDntMavN1RQtEZxV2fNHYpTtv1EvjWutkP4",
  "key23": "5tkJG8rYWCPaRn9ULbt32cYuGYUEgAce7fXwuLQRCbK5PyCMt16EvXARXpxaaezKhb3WjDdH7HKqnNDCpGFfEjCg",
  "key24": "43t1cdgpY35UUvbCWY6snQbjuByN5rX85RAQfBLHcGGhjkiZ3vV2JCPh4wwGNdyCoU9hQ5aaLt87yAumPemX5QaJ",
  "key25": "21tpAyc1wRs8RJKcz1YmowfjpN74scMiQKwiAeDmExwp1hHenc7WHbWutWoKDkDSBHduKYGx88kosGvz51F6LnYB",
  "key26": "34hh7rhRGxb7BzwfuLmTsNcNdHSYjFKk8LFGEBGFKaa1vzkKvt9EvpUZocvMJvEFLXhcEVbad5NUPMSQ3wEGayR1",
  "key27": "53tcv9CgAbZhWiAjuLWsH46A2SXZkd7Rajs9YMhRN4AUtchDExsmKWWkoSt2tfryQoPgwbQLVSSvzRyuw7iNNy2V",
  "key28": "36r9zNKDeJgPJwsYGq2XNMfgmv4AXH15VNv6G5iheTjqHgfW2UuFphXXgbctY1jKJLec3Wk8aaLX7RKitMbbUXcN",
  "key29": "YV2uwonxEN4DGBN2kZkKUtew1cA3gcAiTon2xu5Uba7qzCgaXz9ywrgTkDHZQPqo2MSpYmWfHi58jVv9v3TP998",
  "key30": "5k4CDhRTjN8H6oqSCUx7vcUSXCuFePjXn12Qt1vmJNWWkaUpUwmdsfLqWRBr54kTpe3KMEoKqYok7J49CxtEq6tv",
  "key31": "5DRVNu69etmTn6F3zDCNjQdPcLnMGFBdG1wXhwLBuqP44qqE3vMdgnWUGDj5HWKoTtDCk3phBX4d86s4L8XLZ8dq",
  "key32": "4z3XpVHUYVLo5ELrbJkSd6ByASSgwbkfwrbnu41s7FSDrXkWjSWbQwfDJBrn2DTM78kYhtLDE5Yq2J5yRL5ZUKPb",
  "key33": "3bMUfXdQnjdc1i7FHeBai4YdT1iz8ZsJKPsVNQEA7jBU6xXp8YgHc48mhaMca6JVz1WZovACWDuJYACSX2CTZu7w",
  "key34": "55sKP6FCDJweHNPGbr5eEbfw8FKGJyXhduHtBq7xqq2PRiiv8mbqNmtGK3EJHxDsbXc9WKck3z7bUiHAXXWzymK8",
  "key35": "GyVHyHvid6eD36GbdJjnBPBdCh66QofvrnS3rdB6WdETVYMNLjGbgMCYY2FbJpa6wNCqom8UqYhhThL7GiRSavR"
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
