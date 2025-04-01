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
    "3eMGicaXHjuhbgYcjC35tkP1xACP75WJYLTcfJMv8G91wv6B6yVFpcNVcUk931odN6tfeoJ2LUc7Vhh3FfKvFsKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b8YP72DU2BD6n3UwjKRx588nG22K8oUabaAmP54KKgBSJUg74FiwmLdMYMPcRY1rZB3eDDh4zi3HUn4jnWVMZEM",
  "key1": "4pv9Ur4ivoZHvXAz9MmjZyHTWzURDR2hJcY2YbDEtTJzXDdJVNV36nwxG6J8fnUxrNBxCBekiWvsLVyRUoVKqL9N",
  "key2": "44fXRJ7PVRVssZgTmZpKKvE3QhvKSXgz7pN3haGim51R5aqRrwFEAkg1ziyTZsKXir8vZfTkqwsePa7FwYyEuVsQ",
  "key3": "4wxigw9XEFdDFWGzampSNcZWoWATRq32JzPiaF2WNhc3TPpcJHoqvV6Wa9oTTtFr46AVjz9YkVMGM9RM7DUHws7k",
  "key4": "jLSrrvxnGLURXnC5Dx33XY7kvA6yHHdWhf9MGpR9DWm9cF4vPXnKyPLQi3Cf9jt8FV7rHfCX7SRAzNktMa17L7r",
  "key5": "DgNLvqtCNw81nQ4xXjiNifyKrayHd8S3SGGG4jLGwTiMkFnzoiyqkMPxDHv6jbxtfXw2VkdaUZqjgw1vqvt7cA2",
  "key6": "2KNHTVddqPfkvFDAN7u787YG9c1Uf1ybySBQwRUQQmgQVwDS4tabR3CrxZpjUvZp5KWtX9jUTToQUCac6Fai6URU",
  "key7": "5ox7wC5cgXYwMtUPYQh4VcjBik1zc4XLubqiZGLrhwQXrfQ6vgz26sV46EoNDb1XpkW6zyn6EAnPsWe6e8fr9mcB",
  "key8": "zqF11RGRFNgohL5nYFahk5RNRjwDUbLGWzq9Fa9Z1YnniJJq2CwP175DH2szHrZ9aciSihmprBin8LZcdeXjWSF",
  "key9": "4ynqgxyrsstphwroNAKeLGHUEtrb8aJHqvyrE26au1o7BdjgUwLs4BAWy3hXDBwR3QSZZojGDQGziHPP19KDJLmA",
  "key10": "4R5MSSx7gVhFKiHpkKm5i46AEP9Jh8Sgmdj7wwR7B3NWwqBc3tP45KV9d12RwPG8a2ExnSnBPNRxrksQ9CvisiHP",
  "key11": "22hZACaN77p5iCzpmHLTC9pdFoaMhmAvgsjACvpRLM5QexEnRzqDZWMJgiPrtq5w8Y19cJvpfbugP13QrYc5wYf7",
  "key12": "3XLA3uX7JpTfc9xRF16RGxkAzms3xaSBeWHs8aG5LLpPfusJFPZC8Cw22rnUFAVFWJ4jCYfhZ5Dzk23SWuUcweGH",
  "key13": "3w8uquCSvYAa7ayrHTYBouQ6DC8LnjSAUikNBgArxYfD5JLoQWttLawVVhomL6oDtCzjVor6JjLE9t2aEEjLQcVc",
  "key14": "3cvKvWUJAjwHZQQ8YVG7JkskJrrBte46cPrxjq5V4zfXF9AgzTBdJvGxSiL6av5dG5DunYiV6AK9bbnA5aKcP34b",
  "key15": "wXrmedUukzQeTwM4w9tjn3CMJmQBtgfKMnJUhhdhnnjoCRg2DRWyoc56NGMrStowJwheA4GqJi8GuNoyae9F57S",
  "key16": "32SSFvaZ8wdTzhNAiZ1YkgK3tEx6VBEXAZWFap8vnfiLWzn5LNztAm3ZTjpqHriaALywGLVVH5V1ojxbzE1SpfC7",
  "key17": "2VcKvXHesJhkwUnGXBsFVNRe81Q9tmxpLb4eJDrzZQcfsFnmf4h2VbTRuvtC5Kn1bCj2EtSaJUQDcPYeJj1Vua7s",
  "key18": "5sYyQz5JcVTSdLA4DH6kZkZ1tsGScA6BVj7duAfCKfkAqNDNmEpBZyskCJxrBAkoCDEEXpzXNrsSmQTKdz62ZjLh",
  "key19": "2igZFzUV4GqxLMfSBz2Lye7zXTaF77jFYCSruaWtmr4SKAJZ82NNWvSm1PDkRcZLQA4Eije85u4m3tLiLKeAJdw5",
  "key20": "4iSKnS88NQC7vSXj8AmYwfFcRNB7A1oDTmE76bLq3cvsHLPN5YQf5uQGgAscVKSVTG2AuzgbarUxy2TAa8CHdGRQ",
  "key21": "2dWQgmDRhtdPWNCpBLYgKiZYJnSxpkZQhRTMB2KutP4sRcggK1rSzCBgBacECybCiWZHJopWo5rVVyHW2xftVqXn",
  "key22": "2mUxkmsb9AWwqSpoqphjyAAUNXjj4URshwvMbmPa6RfCo9Q1GDDB6BgjBeJnAJ3wVt1cpPGY7DXjxNu3B2F7tZKJ",
  "key23": "63mhwyfqCmF892QcL6wyD39mWPyTAkS9Pdp6hgNUpTLuBiCbMXLWHXv3XXshxTLRq619QCBue69fKaJiR3sk7fZG",
  "key24": "2gfZR15mxeRqCc82ffWQMTrjmnwCFZ1VqLhFQj8kZYFrj6HX6MrG3Uk5N3tZRyFaSHKhTXkFm4JDNG7r7g7jTDrK",
  "key25": "413bxGhHm4EChV2RgkBuvJMbwHejPppwgo4p7cwicyxgjc5AwtrcRsd5fRAYTH5D39qzaHQ1bLWLcNrocukz22eM",
  "key26": "2zq1h2VSgeAjW6HhKeyPSQswPxuDfvWmQf4414fCKeZ9tWEQP3CpwVrCfNfU9p9UTZYpnVTTx6kHgMYDBUX73BQ6",
  "key27": "61HRwJTLqJ7tiwwNJMmYBD5f3Ky2Zu2h51Ee2ZsdQk1Lzk8aGiXnkfxS5XbEn3EUmVRywVeSZYWL35WQvXjRjUjw",
  "key28": "3SWH2wkNu6PrEZiep11bRcM7qVcJunMdG7P54PkMHPmH31FnqdVWj56mXsmac5RiC3p58sv94Pq1o5imy1L9jHwd",
  "key29": "3FgsSrcuzL12RxmMb4icWYQUHBDJA5m7JFcXm2URKw4jCj3SCxPsJyosCHFfNqMRmVvWQrTfpvG4JL778ajYAmSY",
  "key30": "9skFi2DwYafGnutWKcdPzhQF8cSDDexTSdN1ajj6F6h46FnGzqi6T4VDhXpYBFiHXeJga7jpX3Q2covJS9RYBBa",
  "key31": "2Q9mvEn8S6Tqhsyh7V199gsHYuyxZEuzQJunucP6idBzAs948EJkdsrxrysvmGTmudHTPTPDQANZs2H2Vw7tdd8",
  "key32": "4fhCcWJQ9vdQbgJ9Z8b3o7pXRgXhAtRzG1dzRg8fo7BoKwfeG2WvMTDRvvBnU1vZ35iJ67Xf28sqg3KU2o4nfFJt",
  "key33": "458EWxLFWHLYwKLBKoYVTLQNW5kJE2a5d5UYo9uzwCAP2MDp3gA4133ho3GSQTbnjVYvGZQTyFPabceuThrDyABK",
  "key34": "5C6JwRWm2QYP97TRoRDEacF57xxuwbq8pMzBknd8FthSoixfCDxVzVuMKdKGQnoxsjVGoJFMqNtwfdp6KN7b5BQH",
  "key35": "2H3MSVESFsVgQ3RKrry6nXbnoy4TfoqvAacj1uQbDCydfYLMoy4ucUoUenvGorN4usTyeDkG9SJrnJshDwMAYPUv",
  "key36": "4vyusvruvCpL6kA8Rz5tHZ47JZeLdFbDDRfxS4u8qgvuaaJa91sTs3QePyrXbE2yX6MUaoHnfxE4DQMuLeV1FXoY",
  "key37": "59jLT3H17teVBbAjgSozMJC7BnjSFJUjcrmBmWCtpoG83K8JdEBvmsy8s7Kgzd5bWx1QYkCC7D6jHfZz8ZnNeQG2"
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
