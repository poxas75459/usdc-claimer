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
    "2zFcA8vvEgQwnzAa4jt5y5yqTUdj1AZsXiuRaQToPYZF5N3ct1PcJN2axTtXNDe1tWgT9nFuwEyTAas5VgA7mbrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pby2wr6qUXS79qT1iicn67smVVivNMYuXubNCqgRcenJspWbtcdjuBjLJuLuhrjHsVsigDmDU8PXAeTmsMJJgD4",
  "key1": "5dvXgMCAXFCcko1ZbdP27kQ4HCByJa8roESpGo4BdhTWmDRXkEMjLndaTByQspKcDpxgGfQpjPVuwWTDWFiA3TkC",
  "key2": "59wBSPdGz8y7wB8KBFPVM86YGUZ2ECeWi3fVeN36UicfsPynuxn13umSY3U7y5ohbZtgEKkBzWbmE3iArgwEtRLg",
  "key3": "ZVz2wF6mAuEmHuKFeKchE4WBsQR9jCD4n25PRm3dicXYEXsNi8VeyFFwi8A31warUYx7qEuqrN6NXTTV43Pg4rD",
  "key4": "4zNMVekX957YXYeEG65UbwWKpNFVLWBK2JAzxjDhmw9ojPZMt1QKxyZ1pmZraoGUJ9vjng75kLetsN5bvki6KhDk",
  "key5": "2hc3MrRyyv6uCZMHEwoXvSYECc6UnREi96e7noFUEhcSX6bfMpim4Z5f1UVrmq56VEnHW3H7rpQQkTtw5mnqDAvL",
  "key6": "uriz5g8jx6iLJiLsZ4dxyyo9CR9C5y2KBRsWJMFtDm4cHQFtGcLFMtseGX44wsWrQRsqaWxPvbehu7ejTZNXETW",
  "key7": "4uyRTho5H3qtdBoGwGzxuN2KPmcWgL9Q8cSxgBgZB2Hpj7pNvVu948HP8qc7yYzn9tR8XeALZfM2XU2u1r4wRpxq",
  "key8": "3cR9syt1ueienqWRKKX4nSEneJA8aT31Wvbz5aBahmuao41M2spgYtnRf1onCH15AD5uedFjzm3Cczo3jqm5zoQ",
  "key9": "41vob62xfmvfkK2FXMMr72GF3PQ3CXK9sz8k1goEdmej5QWHe7CLDGXAQKXz2TA4y3kURtHycCjP2b7thpJ6c7e",
  "key10": "4jUD8SDSp5RZv2ASk1cFjcmkGcN5vdyGVNnkV5ZsCMYbcbKJAr4h3q5UJUjsj2BxV3wVgRkn1BcmTct1DkxKi3NB",
  "key11": "5QUurJp7BQA9zqc4bfdz194ZLFizd4E8r8c3wqqpR37Z2mULY5A4R15vW6uXJmXQKH5mD5ZCQmx8Q8szi4Lo21ba",
  "key12": "48EoDBeervE98XoPjRZAfXCmFzSiTHbuxjsVyPynABSnHYzyNpgQrvitgNypEFsnjkbcmsdncntRJ6vDTc2UsUBy",
  "key13": "4TZHqboFgofu1PLWxch87M1Z44AbMKT4ucK8AezDQwFLqVs6HoCqmR9nKuFNN1oQHPFNoPrPD8jUdmjK9dHC6PkV",
  "key14": "52ZvbZS5KSNtKTMsZWsUng3AKRkryv4Qiz3ju1ru3ypmENsGBB2z3ZUfyMJEqQDnPoybWAaX382mvQR58P9eWSHJ",
  "key15": "2b3tyUr7kM7HAqXjzfyhLLNA7F7MsRoMNd9XR8hVqXbpfpSQqjXwreSv3MLas6ES41PYzdDRcoU5y17thvqHeNQ8",
  "key16": "39pnyt9LJ7WEgywfHQBboSF613XpWe8UzqheZaUanzEVYaSs4j1zQHMwnKPWPJsRfqQDoYKfkSCaGsxBiVzqt1uU",
  "key17": "P8ZSEzpFJkL2xEkCqa8857kKKYoE1uSSdsxdwZ1XTBfzrcHzKb8m8htuHXeTSMhPsLGNNgbuTA6pZ7EVkULsG6G",
  "key18": "3GoAitv96nv4YTjVWdfA5gNVfLGQ1dqbi5838k14AGTXda1UhyGggMVKjXA7YvrzZ6YwSVzrwXhBuAN8gDXWt894",
  "key19": "4cnp5WF5ZghSwerrisYRY3LfJ3Znd2bS42Zbaiv5xi3vi9nNMekqMj7G6LieYR5RjE1TNtp2gReQuyKwzxZnaXPp",
  "key20": "zijY68PoqWoa5L67noV77JbdXHDiy27QhCRUgxa7YUgntKTfChs5mWbXrwW5E2p8nTeVBnxtMFA81DY8ShGTooa",
  "key21": "2tBcFhbv3iTU5QsyyGoZUMpbz5La5yGEPwCYrf8H2AyGBAJoLx5XpXXDUsesVJ5G5t6p8RyE8N3mtqfJUB4pqYdc",
  "key22": "4Wp9YuTNRNdHUv8SWStiBdEQSnwqY7zPg4irX9bdxcpWbJyeCDVdd89MVoWgjrEzvXJ8eNJFt2oSCHMCVbfNcVdL",
  "key23": "fTdP9Yk9LNJf2T8pRXz2PuPgDyG6tT9UH6z4YbPxQzB1AtzUt4aUQ9GDd5jrmETeUhqng9uyaMxpcqKyEz7MjFV",
  "key24": "3U2nVaikESwosa7EYhG5g3ZU28KxaYHd1XhiZEi1NEgNxCyudMmKg9ga84FdSQDbXxU4Ph38xvuEKHQxQF2aLuDN",
  "key25": "4yKdwzyRq36z2eYQ1ASPsuW7EBdqgkpTph5XQruxMWE9qLHttVEqhxgCf2zNBjMqzHhRsqWewBr81WXkXK2xoyxm",
  "key26": "5HUyndHzCzXj746Nd94qMCNmyV6R6heY4nC46PPQYrYY1R9qJ4VZHKykdJwjhgwufYhpYzT6GFrqjoKJXQ4jhXbj",
  "key27": "ynECh2JYCr3VJce7X4MEG1GwXtF2BEEfgSfwaUFi7KwEK56FymY3Vjq1MzKy6AqPANDp7bSUQsbdU4hpu7akaSa",
  "key28": "4Jh2aPYBcMTdv37eiVyP5tdHDgf566aoVqmBC9biW2gppSPyizFnAwCCbYXCP29DtjwwGoizmRj8nseuiYcePXZ3",
  "key29": "64hG6Yx62Shmhi6vKesUEfomfMBh78CioPRgnfNtTNpsyairDTZCZijN6XnuCL1Hoh7gQTe2t1j81zgqT6kxRUDv",
  "key30": "5zkR8FinQzYei6tzLaGZoyuq2Pp16bTVJqgej9NCPamv4pXCiifP3LWcbWZTduQM4CQoyhXnGcGWKRHAg9kVSfw9",
  "key31": "2nkEdGw4wDWweW19bgJFqGupQLkqZKoXAQtqspzN5WPBukh5guyWEDKBRniQCrwkfzfNhzHoDXMiCSJzRkoi3TR3",
  "key32": "2m35mfb6hGrcLdvkMeVmEqowYEGvQpSbGV3HGcFSBeufbVgRZhnYh49FQMDiEmBWrc4QLoMKZAofGiZwF8CNiHKv",
  "key33": "3HcfwCHM2AzneTAwhpirwzp5Gaor4BmDqtcaYS6uLDtW6TT8gyXQhn8TFxkLANDCZQV4FBt9XjL4AJJRQnBz9pW7",
  "key34": "25WFk5ubjtj1duQk4canJnx72VgKwyDi7PZtsCCtMcWdSbiw2MX4ww3W1ZRmkCX7Jfvvta594KQCAVQU5eekJD8C",
  "key35": "5jDKDQWwwVUCFij8qKShhgiu5wdkEuUQrqwqNAgnAFMyigQhHi4ub4PNJ9MFSdjaRYedFgJJdsAEsB7Anwzb1SPa",
  "key36": "F39EXLMm2QFQGA8J3pr2w7wcLfsgkrwxMzEaqbyRKj17So2Rnx9m4537btzP35ropKdKo8teYAfE1aMB62VcxFz",
  "key37": "4qVbEVFhVYEus7wrWwEJATnkiNs45AxP2R7q7WkgKHxVY7xiwPVwmK9sq5KzFY7tVkL4f4CmrePAoChpUShKeKVP",
  "key38": "4mjm51GNoz2FWgLiGsFryjpE8yQyz7mn4ZRjzPvigJ5xGbKWnKCB2uKj3TfsvCEdMG7JMNGiTBnZXS3TN6t5hSDn",
  "key39": "47JYvpijf4Ta6ifyAhQ8hg3P4zWqCSABHhimwh4dzzRosJG2eUK6244KdzHEiXQUGUwLZxRrkUMvBC3yRiyzh42T",
  "key40": "3QKfouJzZHyWohaVXSznmENG3bUdEdpU6gVpRW9mMugM9iFcMkrorEECy624Eh98FNd4ENBSS1GCAbGZKsu61Sb5",
  "key41": "2t8rWgY2umJ18y3xh3NTnZkA6hxXE6CujmXQ5pTh41kB4CJ9tXJ6mfrm5nw1r51UD7u8YYLBh268xBnJheZNp1Re",
  "key42": "53XHsL833x86Wg97hPKsuCk7auYaB6QMsmPzx6s7hUER8bt3Et88rWSMsn6VTKsv3JCJLkZ2x2637mqPZShoiypC",
  "key43": "2WH4m4PderEvDMaXP3xmnGjKTLpgznDz4ghV8mDSWwX2qCxDEg4ijwKtdkuVhWkP1aS8GA3GQg7Sfsk1TMNHzXrB",
  "key44": "36S26FL4DRe3XjiBq1C672CfWwVDou6ncL4ntiqd9ahn872ZCYghUyiNnzvQrRu6jUptUuCpGhVS3NrayA41psko",
  "key45": "4YDa6j4N6c58B826edQXDs5eZyqHoSPUZ4F9sGDUj7pibg6V3EmZ1VZgCyRUseBtx67Qf2eWQLAdvAvFipC1vd6h",
  "key46": "613CjisviYF2DpQ8YgedMX8N8n774BXvLaW6vBXLpujoxyHrUjHW13Pu6M6QqGGuZUeuCijePJVNBqbxpwa5tW4G",
  "key47": "5Y3SQweypaYUPLdoj3vydbNztEhBoH7MzUrnknZHnmrCo27gGMNcNE2RU6K7Cx5GN1vf8syqZ3D34shWNLbsZ1Lf",
  "key48": "26Kfjnq8RM2KaJP3KbZe3es1KVjGd2JNAR1JhPBedQpWST24tqac35Z1Xx7etbMHpCXQWSN7LCRs1P14JuA6Rz2p"
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
