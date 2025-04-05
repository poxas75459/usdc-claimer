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
    "3p7dbpzkUFpQpMvmdkKfNCu7bWC1Uv1XgmgkmZFCP78Rscb4J2R1mRrDJ7k1q7bpANeawGETFNaJ75TYDtFo1mUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3APc2hjz7CrEvpMxzXwupgqVi1bEMAk6aHRghTZZAXCubny7KXhoJq6LkdokPkU2p7UefFGvgTbvRg6EmkDqmnNC",
  "key1": "4RUdRG3JW6JKBjerAxqhJ12cQhdepszyqxJs5r7dYPVBWxr4EgVZ4HxMDtE5X3kjFN3RwPZF8FYmcd1pv45aRomo",
  "key2": "66aMhsetpjCpMD3JqtushUu897ZPP48Mmh3SSUAmVmP7pEkmCbbGyuji87QoVbTWa8kmwjeA97n5nCe5kVWHQjTR",
  "key3": "3aUvmiBFc837Avj5Rnfgdczd6byx3MpefHruKz6pCGoqcEbpdsDGuht9dUU2TvbW6rQhUg9PqroQGQcFLfQGrX54",
  "key4": "5qMApMb6UfCC4x1pWkXn77dednkLwFcbHYgGjoeaTy1ffXms2XR8AGV7F7QRqCLEPcnaro1XpwJjVV1mvk6G6XMa",
  "key5": "TGyY8TkkKrhgFoEiRR5QmgMy52LxbjYTUBszWBDx7ZR4MvWnkf7TDqNFfmkJHNFMGXbvjDmh93eojc9HEjm9KF8",
  "key6": "x8LGedWsQdQU7TPL3rC6UcEWFqEP56a6ZEA3LU9ZPPorNjiR7SpuLQL9jpEdiMshyWXvot1hgsfhrpdot5mou1o",
  "key7": "4SyWaTAxTwj5vyLqxMfz1BTsGthFteFj3DANoEuPsT7Lz4Vnkwbmi9dWhR3cANfdHhz6M4WV5R7GycGkqS9DEm3u",
  "key8": "5EFRGfKhEndHoHMKMEEDnBwgXht88oKGY2Z19vbWddfCWZMK74v5tbh2woYpf6sa4S5ni2HVViXNuQQxKv9Tg3ZE",
  "key9": "gbGNBX5D479i8SKJbcPkLqjR74rtVz6P35EHGMfDazyFzCjpFZgbTFwwxCH7QCuEW8mpRe81u4DESgBvQ1rXdK5",
  "key10": "5eEMueqqDjYo4189KuTDa86j6N8HqjjY3zf1GvfP35LG39cjtWh79JjKv3kmrrrfHfVA72pCv2Mun9PDzswhrwcr",
  "key11": "KL6K3X94z68su8XMjbcvpVVaxCu7ZFnbqMqRryPHPGLCUvCLWnXcqAi4x3f1eNGswLYhv861SrhFcyxtZ1qDdGY",
  "key12": "3nN4VW7yePeBkLwXevjyy1GRiCBteicjWojT9vJri4oRsAMBXok2wndrxizRunRaEEvisTWCPE8zKK3aCrUsEd6b",
  "key13": "5uvzr2Ry6DSUWo9e6LNe2EoAiKNYdqC5p13W3aWQYfystUjkzwwdAVVA4igX6yaVfmDVnMjN2a3JVsKWCJjLnzEU",
  "key14": "3xJxBuEbRrQ5uF7kNMcm6uiTUhL1JAEGWSsLDfuKs2uhr6hLSTrghzpCnJVUxNE9asjXdsitL69d3nD3cLNS9rZN",
  "key15": "63m6zRhmRnVnDR3FBy5SmArWDWdsH2hU8KT6bzmodTTaUbj1ansMgYepmEya27K6Q4k75qdMMFfHGkaotEeHhT12",
  "key16": "4BcKaGUNdeGvZJszboNcz4B11QgKk9erRn3NfLDgpp1zjpLTHUD5UPogKNzfz2ZeJmmy4SytNjBoUzqr697s2Uz3",
  "key17": "4ms1oasADL4PtrkFvs7MccRqQxeJ4hScHXCDEAoapiYh34JG5swyfevGvqGZ7Fw9CfdZ1JS2B1PBLePzmBw5as7z",
  "key18": "4sPcE3c2qD4Hzv9q63uN6K9sKmbaYRtBXYUmi7k5KWNvsC6oMBYNE5jnnCQjiu7Cj3aCfX79WgXu4F7DFhbgisrk",
  "key19": "xmNNC97GgGKCPhDMgorS4cAj5D4wyND2inEFLURp5Cap8LTjsLk57uEbjCe9RAfyQ5E2wUobzP9LjptDMA37eGg",
  "key20": "58pBBgE4Pbsxzjx4AhaRLEht4q1f1w2pmtydde9FPuzwXdYMLjz5TqiJFRFJyXA3kVuV1YdrtLSgg2utNSN6qa8q",
  "key21": "5M87Wzed86yZ9EkL4aD1WRGggUFEX4S233HCVtTbXJc6U5UVd8vsw2PVpM2Nr7LBS4cWNh8xP3nw7KEYwWvppdqm",
  "key22": "o39KpkwYyfv5qdhkKXixEFKgeJbkc4rLLwqAiqkVu96JnjTbQbcawC1N9E45ZevCxuz8wZAazkzvu2RvkvmLuc2",
  "key23": "4rEjFGVdmCzJ4Lry4FX99Wtyyfw8nQQqqyC9C3v5LdfyBpgoTdcRftDxiL6KAv5L5ppY1d2NZPXL3jqQ2AqeSMZK",
  "key24": "4Z8w9Kiv2X7TT7u7P2UdwNWRCk8TQrbm2z1Zq2ycjCWEkgSkBPx3mE97kZMvWnTLaKgUEfGEuSkChC6Mf1zW3VA4",
  "key25": "5GaCiDaYPbhP78YoPEoeaJLe9N1s2cL8NpJZxAnHWGGnw5yaD9ihT3fYysDArgT9pFLnjygo2XqQJkHyuzQ1JTc5",
  "key26": "3RH9fFthhcuUJp8ereAAJqoZ8PVMaNbPyQx5r2o6L2tiFgXxeJctguHmnZWHHEypbTVEtUMPgk2amUKywubfXSwv",
  "key27": "3vLZeUTsk2F2qkPmRwrAEpxRha3CX9hdcFGseF6XkdRMiZ7NHMgK11hcrKuQ5MaQMAoy8z3FtyT6y54HxHX6BWyq",
  "key28": "5fbBCK1nADBe9x9WNtWL4Mi6LmsaP4T7z1gYxVjeis4Nrot1gWjDPWm5jZx74DegWpXdmcJeUD3UfJwGwo9LoSb9",
  "key29": "3qTTZyiq4yXfGFCfWuUKKJax521UnYNZx3b6E6vAQ5LqeT64u7z6bjmtrWn3gG9Si4EjwuqeSSxdrA7JhtQf9aUE",
  "key30": "5fFXHWHVoG3ueRhVHFXfA6RKcWk4c3WKk2cFCCssrycxXXMxdAcbAkSnAbZ8UBUwG9NsvdsV6MXo7NUH3YnrqRFi",
  "key31": "4LrN4qpMzeYAf9kM36Pgyk6L9hivZ6cfHRge8rCkrvpookECru66Fxk12tyGBThdtjEHfktbcsEgLYgLXjfk98Zf",
  "key32": "BVevJu7bH8xYmW5JcyStziq6RMkov62c9jnP2E33bU6pFJte3RdHuPmMaAGzGFrzrxFsw7E9FyNqV5r3CWb48mw",
  "key33": "41P5eUJPnvmTFd73LVE5fLFDoJa1N438nTyS81Zj9Q8EsZuayVT68fvUZ4Voj4fateLgsUhjshDJkb4FHamtUHGK",
  "key34": "29fob8v3t9yNipsyYiHEGb8VnqabzdJuFnxqrZgEifqs6WoBZhcLCfpJJ7WfZ9VxSprsJcStaaQsE1UAdLQLFK9g",
  "key35": "2ihLHRsBWaVSRjBkEx5JjNsTA9gFcuqFiGrESvf5MG8C36RqF8SSzCjmVdpSBgtJQRxBEDP7VEdMgDDMrTkUJmvB",
  "key36": "31cFS3GFxj8rbRP879X41TkGWaHwGTiESL1wKqTCcE5kgz4hKnXEweMFQp34j5UciEZACQjKUyzXzyeJsg5VQxZm",
  "key37": "3vpnKYsUe6vpYKDqH3yQowzn6oRrRekMuV1YSVMMotPE1w93VDt9XifcS5a35i4twrT5WNVqUC5ECp375255aL8H",
  "key38": "5n5zKbbZ1hXW3jKUQdPZNsMJrjGm1zYgLm3Ht9mN2F3ccWJ5FcydHmbXRbJgn4wjN517uknM6SCqRkRBmxAFo8VM",
  "key39": "4GwAniGJM2mXuqhrkMpJwesAyeyCy45uTMZ1zncwAkHico3uAXRFpL4JtFPQsjz4AC4zT1VVTHWU4jGyawUZ4c8a",
  "key40": "5cK1JjhPWsS9QP67uYejDbyJSHJ56Lcs6LNYpBZBESQB1EmZ8F3JnNEqjkS9CbdeZ74UW4qpC4UreMD3WrcULfcN",
  "key41": "5PehNaffZZRL5N4ThGNMVCXTMJ6eCMDcsT2wrT2MqgRMZGzq5dXErUajkfFeLL49wjzYTzoeedDNwbSc1BawSsnJ",
  "key42": "4cytXFQMsNEoKWZrJPLDPeFGr4VBY8yQkC95RVqTNAVyb6gsB5P4SCzJLNe2hU5bbro89U1Hx34YmACQKqsf4xP3",
  "key43": "2v97ehTPcr5UcR3iGnFZ9YaFoRM8qyjX9edy8fDQGEpN2qEJuNwLYYqxH4FbX8wmZXtHB8yUTxR1eRv21DFVyi9X",
  "key44": "22GBpWERPkKd3RxwbK1hBnjPtvmtRLvqxRW4pTH8e123c21xxfhcFjjSveJDL8P2L5dq8mVw2Kg9B9iMJjSMfqmP",
  "key45": "51tEscPJ5jUKeiYfXzJZJS45P2m2PwWaZubQGj9VmYoTwh1jMfzrjpnABeMvE3FeKuAwDNjYibLv9vtYbHWVnzAn",
  "key46": "62u1ejjz4tDgG5mGYWiEQUuGwGpSgBREjgcBYBoAK4brKNGrEwCpq5YDsVrpA1aKpzyZKrhGgr38y7VoUMgXPUFf",
  "key47": "9H9RVmun6mJ9HRzzFa1APLo3Ljy61DuZMWGtx2UALwKEKGvFCAZZum1hbjZNwCD9Q8tzQSyXURHsb4F3aCZy4KT"
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
