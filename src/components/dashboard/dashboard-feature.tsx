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
    "2bBFUQTiosnD1e5rXhYt5pWnErBdmFhmGNdEJTi8Qpf4cby9WEFvtrEH61fLYZMYtntzCvhyTQsLVxKyFQCyYF3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AQwb8JxxEnPhyPKLN3J9DXtooGPdjdRS3piUbRzH6mzvQhtW1GtMBJgALxgG59CUpP6D4ugc91SKB3gWojATuZx",
  "key1": "492LKbrQYt9R8k97RjP9N1kBnastemWQm4VNjyqectqVN3xRADqra6djLAjmt9c9DgmYUm2vnbxZQRvBieQEGmXn",
  "key2": "3wLTVa3pisA1ZdSKsDqxirznC6Sjo29UCq4MnfuYSHBVwUmsJWJ8fgvVm1nUfaf7d3gM3oWcr1aWBV6zX9gRox92",
  "key3": "4ZuabsACM2CeTy5To2tpD9mAc9SNeJqkf7r831tZ3peh4XfWxTvVgBjyEh7GgdZ29syYX783XT8rerh1DSy7HS5B",
  "key4": "4xKgKgmyYxWTbiy8WyzCQD3JBcgzd2D91SPeSKm3QZcHSX9dXJjBKE1hSLTXGXUPQJVZgrDYV6oiN1tCvcoxG757",
  "key5": "5z8CfDcyQBzvqC9Xsi3kFpUdDdjhXdnQ7nHNrQHC7tvAVMfXYaqXQehT9MC44YiMn566msBvHbQKbJgEDq9CiLfy",
  "key6": "2zctGqwXgePXyvZPzmUVhV5ohCYeK7BZyuDD9C7cM4WwCXhTQEvgBt78DYmDbW4WNSMnq1DLyhPshWCraWJUmBgs",
  "key7": "3cuY1nVh7UN1xGQWKfxHRufkLHWX7aM3GZLViQKtnTd7pHYVZAjj9VJnxG1ANvXypjRPrS3j4bP7KDm1e8pVR71e",
  "key8": "5aiNuj9HYtWUZfR7tyxxeEimjL8YwicqYfXTzGKjBxSwsdFvTyzZZd1P9bnP29s72yqWfzhdXDRzCvyC9BRVxcmB",
  "key9": "3LGyMi4GeMMu9SRjLB9xM5GL1BC6eFW6XuCBNENw76nbQ77Tkt2xy5Pyeq5z3s6GjDmMyFFeoFZfWdnF9Lps2Ch6",
  "key10": "PqnC2x3meqMn5AehKPPBo5RaiLdbuyPTA7sA8vQodC5QBusKzgQrx3jSmj3bds5nVAfWjRsjh1XsP6gtfCst3pC",
  "key11": "4yEDiLrvixLdEZ5Brn7yATPNZrgykz2sTNpnirpEkE2aMge31pAMsd2oCHUnaJczBttXMES7bZ8He85jND45sNAo",
  "key12": "3TQs6usWLLppNZnuQmrm1X6stXgxwWaiA1FzwLjuMBiwsKTZKjL5CWpLm3oZC5azmvpUwTbjmL3U8VnvqjKnmpeq",
  "key13": "YR9msQST2mpKpCGjifF2KV3cPxmVwXmTa5NDKRta1CxNdD4ewM4QPPFKyUxtdvtJJxMGWX9nv49Par58u946JPk",
  "key14": "2VoSrsPMgqqApzMoAbYVE26dU5vvVv1m6uSbvNtnBYHEvzJAp5LKLLUE2WC8P5RNW8o3jDVbwBUgdMtyYnPi9zrS",
  "key15": "TsZryscucCBw36Vh2cswMAy9jnGZc7258fGTadgcQf86idiscWThoP6brXvJWaDPmj7ymjc4dZZc9bqWWhPauKd",
  "key16": "JJFrdMCVPaQDdrCatEqW1RbGyNkmTwFyEpZyHgRsaBGUv1zFbdj3bRLTLiJ8WrGn3KEz2LPeiLm7tWKdkkYEopF",
  "key17": "4Z4oWP1kQKqteZcTmQgiqC1m8NzqcYYSkTETpy8nQmkos4C6KEbTz9oBP8movKS2RhNDjLngvQ8WLrs8MEoJFrrV",
  "key18": "41fHWiXHP7ksnh4WA3TS4a3dVNTLUpBw3USb1iQP931C484tD5yrjjvnfdfZPCyQUNGj9swNPdmSX1rgBefjbgKT",
  "key19": "4FnaqEdxz6LpMApaZtdV7Ptz5FDpeTqtKNFnSCN96sB1M6PFcP8Rm53mf1y5Kb5GMf3mgkyPPwb8kv5bFkCMYQV5",
  "key20": "41kmBRcjQRq69LJAu4FpRH1nJ3Hkqwhrs8KMSvF54nUC2KqEJyyYC9NmDmeXf3FyEAEJ2FsuwKT31xCybipmKvLt",
  "key21": "4CdeXDafXRRxGoY5JRGZTxrAGpR1BQ2oNzaF8d1kqFuQSCcHWnLFMLE89iwnypQMTa3DuDrbJfZ6kHfLxvqo9j4N",
  "key22": "65P68z7ftxVHHC6mJ2Mbge9f5RXMqfcKFCu6wKnro615szpL12b7XvHRShLyZxbxDAcqKHEJE65CoLmTALG1dJYb",
  "key23": "3s1sEuT3CazxPxFXNjsrutLibUsZDEVefbdr11TVT4eDMvjCUkb5JLLqqjwUvd7ex1DJ5sLyGSzSyytMrZqttThD",
  "key24": "3xinWgAypu3rpcmLnRHHhscqEvv6fFeLqDkSEsREjeJ5BpWBKjjeMyQYCr79Eg13qD2BvmFpAkAP3gskRk8tvgEb",
  "key25": "3gYygvNYDVV8Y2Awx8jSAUPrqUFyksaKJPEW7Z6p1j8ohDyu143bD96jwT3mnVGQftgQLgLRuAN9DgiGtcks2KTQ",
  "key26": "t5cNwcZ1a4ruTsbqCfV4crZsLztntuLAuVLF8etrxqtYeWnauDXroS6p785tFkXLipAghbz2kVK1mMgZvUvTMVb",
  "key27": "WYvYPSbHZu959oxZU3oejygQDsjfr934CR82pozFARuEfDQy9d3W55XwvBnLLHgbJpSh3THcWxBhpR9r2kXqGuX",
  "key28": "5gzhhfGKvBVWihNhTpSHKM3EgaxUe9LH6NJbMsXsWQbvcKXBUZfk3Q22kbSdUgiaPVPo8ec5EYj5UWgRK47rYqEt",
  "key29": "32Qxvo88NnNx21z4Xhoi5dEfVtvGj4tUgSH8ouvMzdYdQDwPTQz5G2Az7ACTKn5HgAUEWnJUsZaDVeUNWrBu3aVm",
  "key30": "2WTrJGWBDHJ179xhzid95Bym8boFDNX7Rm3yjcJfrNWHbEjGQc7ZJRFn3FMLmxhFji8reQuEEWHf5V3iQRZLKA2v",
  "key31": "2nsJoz4CjSiqfVKvstmhA4u6EkUwQwmHKdt9dprmAfXk1FGTYrfc1CnySEWrLmbHxoRnhGJGcuYib69r55PhsWhg",
  "key32": "2PwNeFhT4dyo49qsjDgQRjenDabPFCgWyd7bYCUd4uf7SVjtut8GnHiUM4MV8HDGyUqYqXUpJNhWKcbSPhcxhv9R",
  "key33": "5Jkn7wKwNUrGw6tg5Mysf1V8xYz7Ka5KSsAB2Vr3Amf3xPT7xLnFAPMBV14bzuQEqXpkRXhXE3c4k6RebA26UFTX",
  "key34": "27hSWACTojJDQtzqHwYZuJyTJWKTDFQZoXdNm8eQfuLiCMeHSU63kq8fceJaLpQDMg9fYV3VAbA9mtYYgAZzawHC",
  "key35": "2pQfnFnjKRs8dpX2H6WFxjq7dg17dp4NiFaDgW5rb7nJg268EGFSaFhg2HokU16Kyazgcxx3WEawiZPjKx3ZrJPE",
  "key36": "2915dRphW5Ems2j1XEgekLY2qgyw1AYumxYsMoNWSjm4iHf9pLcCkX6j1WZY2waqpusG9cnh2GEM6jtw3aXQPvef"
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
