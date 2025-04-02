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
    "tAuKisr8PhMBmZJDqyRxFf6FSrvSeko8UneDFMXjruoaYCiUVjmL76n9W41DupzWdCbaLNKKCsYbQeA3aHauVNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KFmXL9Q5iut37sGrtYf2VzkfCKfTQaySEqVUp9YotiMDXxefm7uahKnjDA7GmHZTaDewoK5954xyrTLRR8HpoNR",
  "key1": "2VTEv7BPreczg3NMJKheQ3KG9ibS2E8Ef3VYrrcEF5dysroHszA5yD5XoRxErhDjr8xoMZr3Ffe8bzMA5FghCkzU",
  "key2": "4PmdZRHLfo52xha1L5oPXbN2L9fKPFKwGpnftKKemkqBKDFcpqGF4zamTnXNrGp9jNTALXXj6gv2SZz6hyxAFxnD",
  "key3": "V2eyN6yrFdJ2GfSCdj5v3Fue6MfYrr3qL4joSsuRCdcBzQLur9ZaP8J946Qf3oCgeaV4SMKPgQNV8NXPnSTJ88L",
  "key4": "MZ74GfQmGHyWuRxsxygPYKMe1sj8A2shehVBXVpsarrfy22SUzSvw8BddtDBiYDfYEoV1XfBKrAAkgNe6EhhuC7",
  "key5": "3KLp71NdkFycpgexFdVDBr6rPCbY6rqwTEaMCmrPCVA7Edgu7hCz9wNwGYgneQdUA3AuZkiGrSKuDypuMMmMjL3D",
  "key6": "JkR5hHZAxJv3qz7Nv5uaxHVhdXebhDPLxRhBswX1zaVxcr7guXLmbFVHQBy8zX1gpkTGj3fYfntEVuyJNTnhezr",
  "key7": "2wjVK9ggwHfyYSqzZVCq2o7LTFpbNet9uSbPzotkUFak4nuVSdgt1jbDNHGr8UNFGX2HdcaTyRNpygTR5jfDsHfa",
  "key8": "51BKuiyrXpniDzgLwWBVGfADnNXRPEXPHaguCtXRxGuF6LpKyQRRrvVeNgJDfwXBgQ3owHyaMEJXNhU2j8tbN9rt",
  "key9": "31T5NMBgbvAnSQoqbK6VewBSDrT2gVvp6GCdAoVS3MCWKiewFrNM4u8TfFpRbGLXDvss8QpVUHkSbAATLNLJfo4q",
  "key10": "xXGLd7JzFW4zMeu4LM46gukaSowhtLXJPf9pMBTBL3VjCrGDuJFsFbYXh6EL7pGKQGxeFhhKh3rwtv2JPgX6utM",
  "key11": "5ZwT7epo1ErkkVy7orpbvdVYwHSSmiZu7BEAQpiuHhDdzPEQ1zY5dSVYnqTy4yeHxJ1VvM5om7T4sDvf3CTtQgKi",
  "key12": "4mjcaR18sFtX6GwKc5Lp5h3CWXWvLg287naXAJxUHHCKvaEnmzvcP5nWdvUBt1E5QkmSH1T3Vh7DZM1fqX1RWWZc",
  "key13": "PzBh79SfVLJ5q2RhgiSbYL3d5r1QpEabisX8moojE1noQR3ntGMQTeZ4tzdWTeenwG5gsirhMJ8JzwLa5P9XP3C",
  "key14": "59CBGKbfWJm33xJcSeC58MEKEe3bA9pZP2sgBfqCeAdkwee48eKV1hp9RSJ6vfPttjJbc38sgmCwNj9zCxv3jw1h",
  "key15": "4r5RkX4KRfn2J52oPpbrAqdUXHFM6XqNKQkPBxW8LBsekZciFXDB3AZKkAP3YQZjxazdBAKVHwF7MDvH5WGgKEVs",
  "key16": "4PdYyP9SGrqGcAAo24sC2pav8H4jWR1btwFWwHLNyFJ3YVQHwagF9unD6FypfzbQdSfXDoW3pwKKsKtm3hLio138",
  "key17": "2F6D7kUskxGexdDdfTspmgQn2U6H1A6ypuoiC2vJNU4n2wvTpLHhTwzDg6ZF7VFvQKd3kyXbLF7czJVW9ne3okss",
  "key18": "319HuPBKjYn1vKWn83x1FusWp6i7Nufeo5D71eAofkAHckSjiyfVLYLneihuMZfpdcGM6fpFapuU2P6CfXJgJT1s",
  "key19": "HPga3oBoit8DzDoD9UM5nMPbYvdEiiNt6uMVRGuy4fZvymYAXRKjkRFsfB6kbWiSeXLgURuxWdPbDjou9FPiPoV",
  "key20": "5o7UwMLxFtCjBPkJ6HM7FRJzzsdbutSS23Mt1NNkrEzWrebkgVLuQqrcN6sFVHDQ1C29swpwxNePESCPpBkvtiCJ",
  "key21": "4mEcetwYSRLHHZHxVBvJcCK7XEgpCTQ3oKVWQz7KZpKt27rhrdNkiejo83B9V8zmPs4CCzdcLscNoyeQytPGSkFU",
  "key22": "4coZeMCQvJ1DyxUHPC6ANfqQGKQ5L9Dxd7bxecJ6scZi8LGaYr5Z6immcW4MjKrzuPwj2q6HSDaLG72Bo3TRYj7h",
  "key23": "bmMwzAdQXtUNdXZ1hFEUuRWNmiDeAem3RoCbArfzvJfPuR92iwBgK71wkpJmLqe8AmrSU4vkKT5Sz4YV5brdo78",
  "key24": "5dPN7FnBG5MDKQ7kQTiY4iqdpMVrFqXfs3EnpbCpgQJc66B62vMMhjQ8RnpR7RAZkcvPCebAPEReW3Zr84svuKtV",
  "key25": "631xUCmBHF5x4yBFW8EijUk1HtLJbQpi6MVpTpH3DvvqNsYfpgvV6iDHf7QHSBGwswjJYrh5wjq9ube8bUD5q3zV",
  "key26": "3SWkEy69V7iNFRUdfNREM7Uw5hrzbsvFmYaJnsPfUnyp8t95dYiRD3jq6EKFwmM41EAHyHTapQEanoaz9fdGiSR9",
  "key27": "s5EvXCdrd1yTpJjPd2SVk8Myh4hH1Qsjf94oLvbKKHNjTBmj8BNiK6fU7xR9a3BXPw9Yv6FYqiC7cXLU9WZmWUH",
  "key28": "2ri9Vm3KevPFzrjXQQdvqdyx6ABvjp4TTTTV3s8idTSK8b97qpAs6p7xv1wRhFyi5CxgpHRE3THNXCcN4GJN7VeD",
  "key29": "5pDjRnpXz8XHPi9NhAUy69aLBaUQnKiDwYGFRji8ytCNAywpmuV77MrS69CeV1o5tTkGX8eyaHQWrtpgAmeZ6TZC",
  "key30": "5uq8dWNS1KtxEL1d9XDvnXr3A17BwyAKFJ6nyneianh7MtMNExEZunsSi9XCNUdRnLyaai618nRk7RQAqF86zqdE",
  "key31": "3UHiVELohjEuEDStwHDGJE6GBpWDpYkfwg9T8BLsQVNxxP4MKoyiYnM96x5CVJnMuQkEGkcbZdcMZxWQGhGGmEWg",
  "key32": "6w7fiUkAkfg5sbe1hXsEGQbuNuS8VKEy2Sr9fu4kLA6XzPTdTSvmppDdV9AGMQ6kmagXZ7rtEH8yM52dLGNyhJu",
  "key33": "4kTt77ygXH9VZHpvKRtaZmAiaAT2SmsD4YrAegk2Ld8C6mJX96f4ELEStUxg2o1e3CLmLQoWhaRRFPVKM6B1JoJs",
  "key34": "hv4N34xYkTZWLGB6GUcnxyJ7yDxzgYByYYc6kJTwewtTyQgQZEDdTBA2zXGQQJ5UgqhpSgu3EsPUJWKmEBWtGPc",
  "key35": "31Edn2mN6emCpKdMsFjsAKRmdHMu86T1exSZu1BE9FWYMGqnzYqdqgis5117fihJU4hVhSe1FecgwjdLdZegki1q",
  "key36": "3NFBVcxbsraBCnQPB81ofjp8tjq3inXxRuNf66myYnBMQxQDyKmw2vZECkKiig1bhVK6kgcd5QwKn4oi8qqcPYvU",
  "key37": "56tQTUXFLE89eW9vFSdg68SWukyxq4Z5TZPG2wyFnfy1PiSeP8tfR3FTitqL9YTbZhB9Usy9nE4Tmoi9hoNGKstR",
  "key38": "5oRquJnSXebp7iugHe1Xa6twmon5UwXhsuX8S5x2vyWb3pGkYJyp9JoXPb1ZWUGaw9mLwb71eR7fiJmgZxVADs7b",
  "key39": "ChjdtizMsa3oAz6hS3SESqQzCE3dsMSPs7fwGisKsVgZnn3WuR7KzLcmjsVmN86F1vxY1P6jrmeMBNrj9ym2E3T",
  "key40": "24zU34ehwBVCoN5g3CahhhoJ9kCErTuZgdN4PQiKR3pmgjohrDTrpKxDou6xvuEP91F14Vge5ZNhSVW11ynqfTSn",
  "key41": "4SWvimhgQpShM5zmrw1oHAnPkZTVM23gxSiRp6ymZPaMkkuJJPCMPqagM4Mdr2fd9JZ1Rn2Wg27sVCb31HssM9Yv",
  "key42": "esDrbSV9CJXoMJUpSW2uxTiNFXQaW6bDKivergZbddkf8t469QWgsRvf1Z5VT3i2yah6GWjhbZEftbX3MxhvJRx",
  "key43": "3azAET1AtD1uaJWdHcS4owKBt7RXEiw15Vr7c3C4Y7e9fS1L2CJzMY4bktNA7qQY9Wn25ZPXJAiLwqKUcvJPRKrn",
  "key44": "5xbjmyRpf2E6mqJPnSo5TJdF8EeJEv7omGPospc77uX2ytAncMasc648mAEanTpAVkAsBzuDV4KWBdGLkxBWfzSA",
  "key45": "UiuYCQb2cjKnRTQLhQxHg7cerXtDbfbu9aLUqSwcnnicN7UTafSTjHwrVVEc876kAMQLffc9S4rsW86gDe6c2Be",
  "key46": "kU2aZZ21qJnWJmtA6DxwD7HNEkJE8mLJrNjZ5RMAjNXjw5aEVYqTYhEVvghWZuiML5dmn8fhiwhJyFoqNDQ8iJA"
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
