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
    "TAFybqELiP9j4H83JVUSMtbk7v3ozipcSyDgxptEPqaBupumBJESAV1WHEoM3uNR6xYwZW8jnpXfAmNEh5wMHdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hdcDuf96rE6M3FuHmQ2Jby3soPXBQSeSaoZ7jTBaMVDTSoF5To8xqc6wUH27yNV8juSidfqqFqQmLp8hot22Hrd",
  "key1": "rChNUM4d4jSyyv4MU9d8hQjdPaPFXYRcH4xUyx8tPKy11Gme9NAwknLNvY3G8tiQk7vQQ8cgKcqysNaENX249iq",
  "key2": "4CNzrijAwFv4SKhMtwc78geCq7FE8Vb5xrTTyLfDjwrpWpZVF5x4pgs8BNGTvaWAw92WvwxybDtqht7AoVbEioRM",
  "key3": "3Kdox34Uc3qx1UfY2GyqYqXEZLwVw9dYPVmze29Q6TWxrSY7rn5D7gzQkKEJz7QuYZtfU3FhrJQPqJhwqut5Ysy1",
  "key4": "5eiS53txRfM7RsAFYyH89SDNveCbBtkJagagejJi4dUmQycMDjkkehaLUj1S3X3Zxe3afVu5SqVxRqysz69RFBdC",
  "key5": "i9ev5SVwdVamhdw3bQYaWqZBEC8KPqt9xJDEuFxpNbrrUf7vGqPXJ2EkDyt4UXGu31q2ybcVvAC3oNjvYfAcgET",
  "key6": "4NTMZ1UGquZwjgpnaLu8F2R25XwbNEspFSNtHV3TvpGJrKWQR9rdM19F721VjEgDWMLZDDL7od9tBgf28D8ypYCp",
  "key7": "49jwXk2Ro9KMf49pYFo4bmHsZ4iK7ZxJwNzggH1151zh3LdNCtGcobQvK1hMGpEDu5n8KCqhmyDprS6NGGaPQuoZ",
  "key8": "33f8zDdwMeJrsLWjYWrXvGAn2NquSYKdY4SBrTDddhnpuBAUvm2kxQfyHw1dVgHfiDWijixfnKHzVnZBnkaSXgpn",
  "key9": "3jwwWS6ot8wyjUJTeCRbqki8HeYwGpjUyQ7nwTwJDzzm5pXHL8cJTjiyVvyRUDpcNbg4Eed6NkucqGdWALaBb7Wc",
  "key10": "3nPCRKf5qz69XyC5hqo254WFvnFfMYJ6gDXvnU1Qcjcnh3i19hqgeVW5N6sJCVySBxcfTt1wmL9ztdx3mCBoWhXH",
  "key11": "5dEwVhUcoheq8YA6GTewv2D5SUN9GTZsiFV4WadwnzXpmizLFe1GgdUXzh8ZGK3iNmcsgoAeVeB3Lj6eU9ULMJZU",
  "key12": "2gDA9HjffiUKSpcr52CZFH8ntFcBqoVCBRae9NojeQeSwzeBtTJyfk7o5UZqo4oN561wMqqaSP3YPhbvfTTjVksp",
  "key13": "54xqGW8WpNUNp6v4n8kqL47CEn2v1NDjkMuXsEKsabpvJUNRJabGBYj1fAYc9VfUSvxH8ifb3pDkRe2KWCckAqtq",
  "key14": "4RBRJ8kvA1x4MhkXqCiedYKL9ZLJfaH6QS5veDU8MJpaDaZiNQogKqgFuBzrtf9k9muBuFA6dBXHXyVeDbcbYKZk",
  "key15": "1n16XxLitwnsJNHrG5tfKiYesXCedbCWdCJNn9aG5zUDRHmX2rKFH8c3Xtv3MDmwx3JdvoqJELzjqok1xdbc9KR",
  "key16": "3bVjFynQsvCs469QsuK1Eauj2VoH27soNgHTspCspgMv7Uh5SrnzTFSQzt4vavaUDuUELPQXXQyo1xykCVAq7S6E",
  "key17": "5a4UARdJS4sqY9fbiCn1P5qJrtkcbK2BwcaHNkjK5Xugsb7Rg9uV1m71GNonXnD1dYoYcCho37HM6JeF166tRaRY",
  "key18": "2qojAPVQAqrwndpiR1KVCvefADgX13qHvevJJUv1nAP82q1JfibsqdAMCrBa9pxJxjQpJsiZ3yDHcWkdFipcDj3b",
  "key19": "3Fs35Aqb3o4jJAqcz68MsF6jEjfxYrFk5XP2jpmBtXinMLChPKobXdL4NeSmDGR4RianRmpDnbfW9Sm8QhDwfqRJ",
  "key20": "2dWeRBxC49aSYXnhotsqZSrQi4ZJfsmjgQZC92Dy3CGNTGtNHnBUbBQCp4bWsz6Bz7hfaYWtCxBsrpKhJ3tjsbeZ",
  "key21": "4GmEaRmEyiHqovkbPNQxFqA74H6qUsJLioNR3SkriAEQrA3vigXhnRZboWoaSrBumQ3f1gLdpixJYkzUY6f9zar6",
  "key22": "5SQwApSyTV3AnHjiyqAT69mR3VpHD7bjnDfw7wF8Fia5Zs2rJCJ1HQ9TBVbxCcRenTm9dzB3YnUhGrRUMqEv7Tkm",
  "key23": "Md9AtNvYwFJJEofwthNUtv96ynazsxtR6svEDwPg93HaBwQtGYWYjczW9wPseJg4Ki26LfMRabMWmToT1bTgfto",
  "key24": "65rT73xYBQjsfcDKAN4pP7Y3LGrFAouZFzSD43gNX7XPmeUNmTwN9wFdx8zuRWaEfofhugfAcfpRewBH2ayHN1PL",
  "key25": "5z8MdzU9RioAQFMyJEwyjFhuSvciJaYSfKqjtbcbQ2E13jxvqY1tgYbECkFPFyGLhNQ5quMhfNYa6BeVsSGiouPH",
  "key26": "3M4CGWCJ4WWTfXEq2LauUspQrF84w4kXK1dXx1GUXTnRsZBfCEG9JHxZjYB4YsWCNQgUZV7GGP1XjSr4HHrKzdFW",
  "key27": "65LSsMFtjnbbp2FKKcMeURc53NpdZU8f6FCNscKsWjwWYX4XHNy1vxNdqTUdBg7KdtuhEycZarosv7nVzeXiFC4h",
  "key28": "Uytwi1kMNY62GsmMyY25BSmNDdoo2pfFQj1bRDPYRzSk6L68SHNX4V1MJLVVLryev2hyPGkV61uE1XG1Q3Uk6Dh",
  "key29": "4EsqDFBCSzqhubDcMZJAnWRf6a7Bfx4EuVmcCe12LVbkWx4f2GGEoo2vuQk57y3qkL8PQ32dVKbvQJ19s4eoAbRE",
  "key30": "5kDd3CkoH7RJnQWDDywZbCdPvMYeZ5wE1vxNJkoUcE4aY9L4KX9FJ43ehJBMgMzDeMJoEbvCgLwqUPf7aTepZiwe",
  "key31": "5KZffoeg7XPzAasjAvZJxEQj9g8AMRZSRiUiU2r1TkD6MkTuKbBMJPiEukLNx8MPiuffhvf1HXCkAmsMESmhY58r",
  "key32": "5jVHFAgYJUppTPdYd1jVj18htomqyX9jG3DPCGN3fsAiMgtwMcXYpgzdnuS8QwfHpsY2kGUUDZr75E1w7bewuQvR",
  "key33": "m7Mhy3gkiifPRzgGsxJQtBQVn7VteeS24sJ2UWYpK8wk65VCmh2WQ8LymF7GA1PRa47euefXu6L9cNaDsgd4Fnm",
  "key34": "5TorgRLTkxJGuTBY9PRRNqfdxUwtVHsPNUtGJQTcamR27Y1dqGr4S1hvhbZoAp124Fk6nUbuhLYiGxzyHFoFG7hQ",
  "key35": "3XkN4ESU97Uuc4444nwJyYyz1C5BiGysnFzm8nJ9RA1kpxUExskba6x9NryumEjfQ3UDmEULd3aFAsvuQTc1aDem",
  "key36": "2m43BWGnxueMyJxyMdJ1UWAGNTAnFoKss34GMai3moC6wscoNc1LzFyaLUWM5noFvQo1anYj7o3wxAhAp3yp4Q4b",
  "key37": "3xL4aKoinR8j5ZyD7oMfM6XcnnPURFxX7C5uSh1hNhUHPjvBSBxkx2zNdwYSYcSRnMuBgLSVbzDjTA2fiSkdNRCu",
  "key38": "5U9b3e8sVhdtJMWNhaxHjQNf1WqFeZnRGkE7zVKuWHRH1D2RgnhDNbRJfHraZ77GKab5tVmzNzPXReMAMoqAyEju",
  "key39": "2HJg1frLDgkVv87q37mnekMqjo5t1WbR5gN2iQAHzdaJjaQyCEeyCzWCZCuR4vrBnKSjGwmHGdmVpPpbnJv3D85e",
  "key40": "4FALfrvWRTL8HuXmCTLRgbESMYa9i45qUnKUMpCLMXrHo7rSKzJWnCpDFXSpKfPLUp1ApMstHtPc5RXVLY6GyqBh"
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
