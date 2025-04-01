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
    "ToyFTA1nFRFHm7btMmETRQ3tkq2ReSQtRSovoDwgXcTF56hWo3phbcsE8u8v3XMjLVnDJJegYQZQKgUmcfv8TG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tYQeC1TUD9ZqwD6VitZtCqkxXqwbcgkeD6dBAQ5XpXL5uRNMRjtAEc47iUA6MEccZ4GmPXPG5DCyFCKzZgkJHEr",
  "key1": "pUkVu5mo7CnC34G12TyY862uQcuS8nGSZQaihwLSjRSXEmkbSRvJT2NBPJ4LJZPTCDvsXVBbrB3R4pvwE2jLfRm",
  "key2": "kDY6FVRdh6piu4zUkM6AbnwQ1LmeBmJ9CQWzH5RG8HSg1VEEEPTjanUvNoYKiXVuyrHuQJ9XvPoyrfjqtiiWPSi",
  "key3": "28P2UdrcJ292UYkPLDzSmeAXexJS13ChGAHizLDsuj4DnAvCbpLTVMYwwxsqy8i4uHFUwV7v72wdFpqTPp688HY7",
  "key4": "5ieFu9t1quwFAZVQwD5EPxstgQ4oeyJdNuPpK5s4kqMuQQSjtB4czDYRBy8oaxDfkKVEtQE7MU3uDkyRy3C41Vka",
  "key5": "3KZ6jDaa4bbUANxDhTyGgm4JmVgjgRcy1acfLQdyKc9MWuCY1E6Q45PHRPQzLKxmfVcSgfR4wPhcSTZEYXx86zS2",
  "key6": "4jNNrmDQ1bVdLXK4Ln6p5uku5815coYUVgxxKELHQpX6U8BZatZCS97iVjJK1ydb2N3sd9zm6V9svWw4KjAsCQqF",
  "key7": "qe8VS26aqqDRFkeQtxpV3gBuqwur3FJENX5fqoNd8GqEuPBvQBxJPJ4wsVkv5ZLfkT7u7Dqmf8cVPrNFHrKCiAR",
  "key8": "3f2jrpGX1KagVB987ZE9kHFTPepaYm55DxeMHmAHugWLq6n68nGCN7zQfqYL4yQD5k3JyMxmHz1xkW2JxePchCRJ",
  "key9": "2AH8pJX7X7fg4e8cW8gL7F4N8UQ4YZbXYyeNbi4CWhn4K4Nko3eC2BAMcJopojzfayfjEnmW3WvoEpJMGYWQ64Hq",
  "key10": "D4hDVDmToDvKc9CjvhJcms1Dpt49KnmCb4AuPNvReA2BAEzTMF2QAmB8HnVQC95CXJrDezxNSpVVzfBpFK9pXfd",
  "key11": "3gcQtjLJL81H2XrUGm6KiPezNVQye9GfxzhRAjtmgTYTeZHQedKa9PmZmukrcPLDHy2use8xwuPUtRdgHPHjVkCf",
  "key12": "38VmPgzLE2E3uwebrrbfRu6L9KVw6nbdNqpNf9U9ZSnZV9S6SY3Rk9S6gNHXT9ByxCqLGwnQvo3K1LNtUDvteoif",
  "key13": "MWYCqtPpTPnNxX5iSUBwVq5RcQVdynpjzuByNPTW3wQMsDy55KyWsN7hCvDW2Wf6UJMJCrsRSwAM6GXg84ZP4Pz",
  "key14": "49Rpdo2RV8oovvyG4bPAM798UVvoBhRuArr6WcQAnMEEQX49ouKW9d6HJscpntXuGHeRJMSbzCEfUvVBTp5HJTwk",
  "key15": "5BMRsH6zzeBqfgaWkSDKJUixhv2cbrdfEx3eNh3Mkk8spEAUDmMyUtQufW8RAeDfMHhW9TNzfhve1UYt4j356CcB",
  "key16": "2fmBQ1gB7zvmcwzfV1jXYTerF3QsZphhxBmdutjhTEpQecYXFzRhshYZKovAVLiZAMzsR3RPiNyGKYjQeLGPRQYJ",
  "key17": "2Cs5SneQg6LW13RhehVEr77UzKnFgR5ce6qmkRNnMVm7uLL3F1WssLRnmdoGX8Ghq2k2CDdbWpH4d6dCLJjBPNhZ",
  "key18": "2iHaeHTHW1wQDaxfwiSx3BDGpHGnVj2u2mSsDg89yP1bzEb5oENGLppkwc8hify6BvK5rNxs9Afec37ZUfybSqqU",
  "key19": "jbGRG7w74VXyzSuHCyfik1mYVexdTM2oTLraSUzsmMy5TbmoyLPcBL1rnS9iWf5R5PHQZtKnfXZN7ZGmpmC9Jff",
  "key20": "a3TYiMown975tusuw6HU35ETYBm9EY3iSHi6cT7WDVTtsmgqcpyoiBwfExxKzpKrUt66AAPPGAMchbK4GgaRNo9",
  "key21": "5awnvA4rLtngDcA9xBMLhYpTYuXWphhK9BgtAQgnv2Ya4WF91jfyutpzZsMJmj3BAU1g9ASff46T7nUpAyccYhpG",
  "key22": "37BhgP2TErcXNRNqdvMyJTSFYmYwEVfBgzphTLCWBihtSQoP9rvSWYBuhEie7w72VotjXp4f8z97mtSqDYGUxh8n",
  "key23": "2RTDiYoLwy7PzkbFc1hVkJXxoD4Q3h5FywU6CN61j1W2w48fnbPhkNygrHbiAqpbvaWQg7dA8t6GvkJ8sgy5WTFk",
  "key24": "2WnoTCd1EauazLB1SR21BmZAM1sQ8BBu5fe7xwJ6WrakdbaZcMruDQnQW3YG3qyWG8hXMoaSjSSW6NjRruAwC6YF",
  "key25": "ndK1szbDUndeYjznrYRjhnBQW76PK3HUnMqpnVcJ6ZfCJ8orDtLoRy45yprzt6YuCPqbeSY8dScm1Jn9zfUw3o7",
  "key26": "42QFPiZJXHmrxJaS8oz6gxZh9CTg2XcNFW8GCivbMbPrpXKDWhAfEz5oL5D6vgJkzCnBVFXJjXNpGQgyVXrqSRrD",
  "key27": "22yATBSvYpD6y9XiRkaPh57TnP88HtkZZSyfQnDVWQoRpguRwYipXSrE5NrS173owjyMXeSBVt4mnWt7en5crdyx",
  "key28": "3dL8GzHvZ2meHHEczto1KUBLQF4e1a4zKXAHuuPVDdAwo8AgLYgdw8X3XGnqbSsEC1s7obNJtY3x6yBgCfR29DPC",
  "key29": "5SeXCmmTaP8YwL7RxLMn4MiKPHe3pN8fWkASqBstGz4RaXFs5zTK2qtRDKxP6QNKc99qebpCDWt1cgr2xraF1kw7",
  "key30": "yCePpBR3Jt18E5eDUqgaiaQPcfmb6SPRTqpAgEkfcpPZ54gU3q8fLc6VVCxyE2wSDw8uHoMgTa8vHGjN3U2Yn3v",
  "key31": "5uNf7cPNH8LYtc6BEoFpNgXYrLxMeTrbFcHhaypJM8JVFr3W5q18TEV743TnFZHLC66ywQKZyaVNxihZVpakiP5a",
  "key32": "3fT6wUEoXm41k3s3y3Ghc9XgbAfEqfiV6KUm7FbYg9mwfAQvzppaiLjxSaYC6AEB5S7BHxTr5F8VhTJz4X8LNcpF",
  "key33": "s24xqDF34xcEk5Nrk4b3gCzxd96tGVSvDf137Muj7Dz3QRY8gKWAH3PMtHxmqW5Nea61XjzUFGuGuqFq7EGpCP3",
  "key34": "43tBnpgBk1pi5vid528ZeknpAyEm3UzbGu6Uxu4S15roeYeS26YQVTrgF38YmpRA1CKm8NwnD51feaqiBhb35AQN",
  "key35": "2JCfJGywQkjq57aQvJWrRuycBoet8QHkxA1gqUG8dYxi9ngqCZGzEB6JEhYBnyZF4SN7w6KAWywKF8Xf1hrAvd61",
  "key36": "65HxMuVD8BX9o5332GwYcnQed1VmAoEP4JA9zoBgw5LHqZ6YLQHNha1EForZf16yVJxumGfdJduS9raGtxqQRLqm",
  "key37": "vt8w6UwUbdbABE3hMjSPMC383VxhnrBtzfaysa93SASJnoyXa3KxB6PgBNy6PwjG3PdgB6ZYLAjiZpjNkTggzgu",
  "key38": "2AEmuZ98gaQeKoFxTRyER6WWrAx4qfwejtABuq1htXX8ueU66a7dnGCjaJTrkTw1XZsirDD4TnGnmTXm8gvsugjZ",
  "key39": "2AXVqTnHkS5SfWsLdFeEqo4RjVUsjEis7FJuRk3uyoK1gEfz7CxxaYAxdvEUybKFC2LYtRsDgbwHnwn7LGaQ1TWS",
  "key40": "3VisyRkX1tWWkRZUgaHbCz3nMKsUPai1WxjTYPvLpZ22TBwrtJsTemjXdUfGyzKzbeqHazMSvdwjY3wPyzjPHAQK",
  "key41": "3FwA9emGDGpjcy6raLev6hMx9bV8TMtWicHapKjaxrTnBKVwMMTgmThDmmZPCnK1sKpKaJN88z7fc89bYRSgg3qJ",
  "key42": "49pcWBxQ8wkSHTTm2vXiv4wSgfWbYEcHdBiuYzWNZ8NEG2QewPhAuYgVsHhEZ98G6tSyEVgfurNzYZes7XQJ3PRz",
  "key43": "nAU7vG6yCefZNYRqk81CSLhWRQwgsuVsdRYyer3LyZ9k2SbaLsFdJLHFUtiBe1tUfTwGbdWfffAm7E1fsXdBZxK",
  "key44": "5BrzHN8U7Wga6uozMeTjJFVXmTLSqrGbd3uPfFyRdtjyCmeawY8mqPZoV22j3kSdKgd8naGNhw3fJF5wnwhjghx7",
  "key45": "5TdU8QeaEGMiZSyQF9JWStzb3mbQorTUvbJ8JRJMDZYBsPqmLE3fAtS2U1T59WmsrwaoY2dJqzAZhnnhEXpEroPe",
  "key46": "Q5w89FSvvhphZ97hTgkJKX47cBXhbaijqxHXrKx427FVm6tpxCpoY7xfRdJ8S53BmMburCMWwBK9HGmSryvFPjY"
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
