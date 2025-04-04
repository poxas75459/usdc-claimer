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
    "5sCHZ6oJr2PQvzdALxuNF25oiRWbZWgJiXrSk1toj6FmcL7pk2SoWe9AM9C6v1qFeBnw4ZAoUvmZKnxNHRCxZCKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pgHwYfrm4iR3YREYUSJgWF7VuR1bq8W7wBcZ1mtDCrTQYVh79AvoomVuKuLKVswYzJhRVnnupsemZMXxD6bjGuc",
  "key1": "Nihqiy5ezUQ817zkawfwQBs4z7JoyeiBvu1rbk4gWK291A4Y9BrVbrf7bDU5DzmSQ3YEweMbEWLe8FP64pAJE97",
  "key2": "3zVxzqPhvya8L8NDnPqgybrCpc7m82ACM7QKDdqWDcoB7BgCWCiQ6Tvop3vZzNu4pASRdMBWrFqLKKcRgX1WHfw4",
  "key3": "5Jv88pfidsms8RrPqfYKEAPiPzGent5RcoNHhuP5Z4T6bygQftn5UBrGyo1i95xGVjBGaX5uCTnqd4ZozGb58hmK",
  "key4": "3DPCwnVH9iTfkMXn74gygBFXY2471iREfgZdwbCWV7MhsquAK3KzQUKNx3iTD3RxBbK8mbqnT1Bjo8WqSZuCsfFF",
  "key5": "4r7jJcXtqorVsCRSk32S8XeBSMk114nvWcFBYCzEH12T2SQJKEurGCY1fYcqVPefELq8HpmXFT6SBAt1UFzP2XiE",
  "key6": "4UDeiqrJLstqwz6MxMSbMABs77kPoccKKma7xvu5CQVBc7vqA23eoRNGRVp7xF3Jrg1BYeic3yib63QbWept6jw1",
  "key7": "2subi4rGtCRDuyLyUKEq2JeVsoJAxZWpNVrbUvYGo2jgTiwMDhB7LkXS2gfi2xVYEx1kkB4wuxY9kvuzzqXPdn31",
  "key8": "33VPt55rPNFYvgRyx1edcyArfhQVqy8d6nciySnuVrbCkSHyrK8QypPXT1aMeWuHdoBZWPTzjLwM4CPf2AC6chho",
  "key9": "5gRMbhGzrEeYPh19X5LN8uFvdALajf9ZV19BbPfHhbZ4fLqax11F7koLtp8KWwS66U7AVEkgCsSnPXZA4ypkJTHS",
  "key10": "2dAZ2pAMdstuKge23s6zoRG39BFdXYg99cqwx1RF3VD6zL3u8Mvmc265vWGDPYFo9umgTbfVByUy2RNWDDQ8m8uQ",
  "key11": "35z3xhditP8zgbq3MsyJqEpAreRphmh1M8X7dAA1mUK45nYs7WSUWJPyQDxsXXgZyuByy5EtDcsiTBjKou4CZznp",
  "key12": "4dxTjSq5yAqD2iUPN8wuyn9h9r4vnpzo4HGCf6359A62Bb3i6NoZVf8nYjBngCfbZZHhvqXMEZ3sRmLmK9ZLkBLn",
  "key13": "5cProkUKqJKx5NXAweDA2YjHcWAFhCtDYJDyCGQ9i1DLiFxsqM5aw64FYUd9ajrn1dpJvwGRxFEYBdQriocWumax",
  "key14": "5DviehHK85WBrFMTbyPj9qd6m2MgF4DEpU4mHVUpGqjWyVm7GsHE6DpEmnERFUfGSzThF9RTZjH3oU3kvCMxJMnt",
  "key15": "4Bn2KQaU3TVzkd3ChcJzviHzPYibzpcGi8VspEr4Ssgg4apuWea7ep8MtJuMUvjqATFTTpf1A51Sm4BWtRseYUnu",
  "key16": "4GLoadTKN5dbQ2YMiwmEtVeCKhZd6aEkGs8eSUSycJshD3qtKuLgfLA9zh8mAv7bYWYho6LKYoDfnjBibxKMC6u2",
  "key17": "2CxJmCHngW2PAky4CWnLcv5hdV4CpNz54b3JEmRvmvaEx8f3qHUTzc46ZWRYcALzvRHGeGVMp6rc5L4Q1n1EK1q1",
  "key18": "3idrmhdw8PVud1RHvUQdPWkcVadhk2Bc5Xiy5ifbTY8AZMzHVCecgpSSjhMi4NiqVVRy6ZYYmsKRcRE1fZYdhNeT",
  "key19": "4quzGJStoytQXwbqySnxFGqcQ93onMJxS4ne8Huwc1Vof4v5feB5kVfVWWSZoB45dNRbicRajZeJrD3jmtxVfXnT",
  "key20": "4aXRcmmJFERCtHXfTHcApTupQiMLkhfSm3aq6QmcH26dsLRFqymgVTcqBrPCRk8GYVQkDL29CYtSNhsGKVQgoGuv",
  "key21": "5rxyiMhPFWeGXBH3p7VuD2Z8YqUnd9SdoWb9HS4gwNzfASdHkNb8wTc3fZz2HjwEzJrEAoNWT9fU9DXqjgmgnsBi",
  "key22": "2d8YyrqxvU8zuBs9nTWxYM2U4aUzFVGcbRC5MD59Qm1vJzuCZNsSv4QpPtCMtxL7f9EodwtWRAGRC7dP6NmqTLA8",
  "key23": "SzHgwNkFdRn9kw3uikEpYw9fytwwwM31yRDJKgRvPCZUhtmxfEMpegYfL5AcPCboTrQxeJWY9hcxj5FRBN1ztQ8",
  "key24": "4Zq5MfRiQdn8vbBKSSizNRUm8725CBENTHBa4JvRuXUfbq3udDEUXKtCyPqgavWsecaum3dm8Dh3xXbSHidm8HhT",
  "key25": "3yn18UA9gEEaLz4iG3Uwo91s2Zc1aVjZPRPzdL2ugg1EyGC4cngcWtjXujN9QvZrs1ifWQRjzT9CR2c9nyHD4Zpz",
  "key26": "tpENSjTMPmvAiYbYdtZe2Mhv9JknrqpTuEdF4uefiWMxij1cuCVXFj8Ce4yAZhZCxCHiyQX7A9SGM46cCkBTKNH",
  "key27": "3cSnA3na2Ez62n8tfdNzHBZbc629Ynta5adzV4fxXVmuGCdDKtsweRhxnozMXGMeZwHEahXRZCNdSAZ6ZQAAVTQs",
  "key28": "5CG9rmv7dw7yLV7qA61nrD4jrDzEiLnKcAnRSCBPbR8pCtetUFct2auvpGCzHUJHFffzeFCrvvP8Yc9f2CBrNh5a",
  "key29": "64J3Y2p1Dszc8Kgoop27zXoe3Kgv93e1SY26y3QYLU7WBV48Kj5oz28AsM89nuA4JsRnPpBi7taVEgTtP8zFf77H",
  "key30": "3opDdSMSBCMidXkr76pV2jhJY9YDKxs8vYvMVsuAz8q5Sx4SCbRKjeSqQsbwJUwx9qxgRnXxB4LQzakBpruV4sWF",
  "key31": "3JLoKoDjTty4jj7eZW2JiFK1ERKRbdy1xg2W2nsfKQzP3QJV4XZ8h6uUcWoFeAXQVNzykvrTNjxWbMWWkQpar215",
  "key32": "23BgxMPguTiM8T52AeLXdRdheyY9R5T6ZpFLLQEGJe1CmdnMMQngLCYk7wq27ytRaxwTh1d8knc3NkA2Gn1SE5EF",
  "key33": "5isxGKnZVttcPWmXtsASM1qUCUnrCoEZE6cADEfAuMoBaPy7J6ueKrF9NqhKzdjYYd7pDPAxmqG5uxmK48vXBkSm"
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
