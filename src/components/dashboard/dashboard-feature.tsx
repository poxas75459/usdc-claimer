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
    "QYwZLwL5NbmCDBGGwmwsWxtYqGNAvJRVgesXXuXv6Vyk3ew9m2SGor9PxQBXnqTKxFus45g7Yhq52NZGaXwvnAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DtkKs3KmeHenPAsnGuVCfp4vhgW9BpPnVnE9AkFj86xCYRPEUhECAe7WWTCreFLzGWgjWLr6sb5sFptNvWx91ZF",
  "key1": "oaKG8xczWsNmEHpAHPmxhgGdS6xVrY8ycmBiqcV3uPZM9Sb2A7ws2dh9b89bVS6h5MWF25RY79Zhib2UUxAJAiM",
  "key2": "3irhQJh89WKKhzBhEZhtcLuXj9pAhkLhNLioU3Eu3vu8QrJ9iyaJ295BaMgGTtPBoLF6km7NY8br6JhyQ4hzgehW",
  "key3": "2N2EAJuGuEqL32iK8sLYSAEUtoaxJ3iFjFCfbfht1nLhVVnuV45iUmCaf8gCwYJK6BKrTtKowoXAEwk5yjExb8zA",
  "key4": "5a4fiGyqRbPr4PdNBSiaNjLDWbma7oDycS4m5ZfekswgAPytSjDrg4Z8jncxqXwn6E43H3yJiwvbfKFJFW9cHByW",
  "key5": "3Fx7aYTHtUrUY3NxRmHDHa9LhtWvjkW3Sy5qWvxtWK7svXDMwS6vo3s52ziXTWy35moWavTPRu3tZJMWNKE85aNJ",
  "key6": "zg1WzAxnqp7FWVSHhLTne3hyBna44eYyW1T1XHjY6ujuNEmvLBpg4rmhkeAaCLzUoB2sQ3Z4suxjoM4tiSF3otF",
  "key7": "4UQcj59Dq8Kwn2KEbphak46GrqurC6WdXCDSzfNkyTTwhJL7Y3yJEg4XdkNj6ZJrW4dyohCxphbu3KqBGsd4VuSJ",
  "key8": "5d72ekWRB2Lg4h4qa8zrYELkifgHM36HeNKhCxsiZ37PW6aiEeXXv9BT85wamb9RCcmytFyz3stkP8z8o5i6mCQy",
  "key9": "3uLrym2xQWgHfWWP2T43BAFzGvwmFDFL5sM8MM2JNFN3tQH5whcSBewMZq9Ch7qXyNCiNxoe9ss5fe7Zix4nZFRd",
  "key10": "3qmhwY1y2j18akoSRpd67a1JKkHVtT42ABrYY6ufGLxQcR8zbfAmNhra4n2GcKQR1Qvg4u94Jma75SSw8arz1kZB",
  "key11": "fvZYLEdNvdq9ZySTgVNCjtWJdfJxuiNYqYw6WjRGwdwKmevgeJ3XRki6c37Tc2yne3iubcQUU7tGj1N5bCUvnEZ",
  "key12": "3SKhnjeT3LzJ9QuJhhxjHSSrLn3nWH1KeyDwQfMQkRTwdP6jahSk7f4RxRVn3RGJqds8yniQrhPziw8Pur1TqbA4",
  "key13": "2gSj6kMSfJiCrHSLvcAkSwefbF6VFZFL2o6pkcEDg2QtghKhM3oYkRvFh3b9DNdpaREs3yh8zEaYuzjArykyopAu",
  "key14": "2tzFEui2Ufuj9t3xzFipH97WE8BXzqwSeMp2PSrqw5YwC9aQizhm8CrazioZvvN72A9kqg9qyN8FJHrXnYDTpTuc",
  "key15": "3meXyX6eZpQJyzRCMVsxDdpeLV7kbMi5M4tVWCVrQL6gUobFMCDzDV2WgXa5xjaQseBfRV6umyKgZ2r1mScwRNP",
  "key16": "4DnkD2pRfgW4fnon6MaVdLQVi4ueUDKh5f4reUfPx1unNuKEQJMKnb4UCP7huZ1Nvwyq57LxwRenmrMptXJ4BQxf",
  "key17": "59exL4oFtpaZWvADjoE6heJVm1FjGr56MW8sh2aptPXBk1UA6H2VhDG6fucMyzqH2fFaEKNSHdeFo7U3zzce5ZUb",
  "key18": "4DU7LcDaBj3NQ7p2RW59mg3weWszr7BG6haMR1Pz2eWcf58kZoMU5rqybfwbdWcht6ECKw7Tjx8t2xSA3Qy9au8n",
  "key19": "4frTxAHaKFNgHccVzVRBequsK8SzLPLiCmmJGFnbTS4fpskMF2omSHpGtEcpB2XkyUpqiyAVnS6UV5Grg5D3Bwmr",
  "key20": "4LLueJyhsoeB5gHSmEoC6pwe7BW34avEtqThtJeQXUwUuQczwxiPXBGMkA8vNB1Rt6eS2fwQTYSL1NDMYGtWb9QT",
  "key21": "2TTR2ZJjZPc8odPsQHiqw9Xbq1Ecg4VxskfFmnjX7UF2gnMbDGsBunBLBfeW6eZoyJtvnnFJ8igg5bxYReQNdMME",
  "key22": "2TgN1Vf2GhvFbaXaDYUYWBVsYnvB9gLKsHYnbpeJmCw6rMt4HxpDi29RS1PB9BgYddgDyvmFs1BVmG6LwdfyxaLn",
  "key23": "SN3CSk97kKyCEn2PwjUYhwU4ViZpjhhgxS1v3QHcHcr2bcvbEeykwNM3K2XhPXZSfcq6M4Q73GhjiaHJxAtWjgK",
  "key24": "4TBaWZyppG2Gjih7bKvsEVb7khKnhqUkSL1koQDdHZsEkaVqUVtYgLsZbfGWxTgE3GTjCHvAUzS3XJUyAhH58Rzb",
  "key25": "fLY3UtWrJ9BNbFdLSPyac6swvi99DjrHxTQ97dxg4N6rxDRDq16nxRs9x178QLvRw9vzGyFRFnoyXrLH6SEFKjU",
  "key26": "5jVv8nFgxigiNxW7AZ6tQTLVdKYPRsWw2wHh4SGjNAGZKyjugA2hQhMhAFnWL5j8LXUsB8wdKCaLJ5cEkwQkNVEb",
  "key27": "35PhzDRC3im9K69ydKr4rNZJJFrbMHtBZ2TzDAayKx3ARGPS2E9G71SEW2kGLCGRH4SJzE2U2CPnonU7EhxQNBAP",
  "key28": "31g8Emeqgnuu1auFprNsB3h9JtUdzCanCx5wkPPRcUecEkuMX2mqoi1ngn35UxHcyNcxoEYryTpoj6h6Pf4wzeGT",
  "key29": "21jj4RmtgvTEh7GJXM7MMhvVQgqi9jhnsWQh2PJevCFcpV2EBNsHbzFvUEDPSqWmHCD4nrFkb8sZCRwMrSUsbMpK",
  "key30": "2y2xF3QmjnpWhXtvNu4DAGLvuthMMD74fa15xyGBQAN5ur3wYPxp6N51o27mcRxpFNcbJLgx2VmhcntSbDM2dtuZ",
  "key31": "2EdJPLR5mujBu4uXpBfB9FRXu6k446ZmcpEHgk4EiTFu7B4iTHaEwe1ACou1H8dB5WeLwnMLUvQaZamgVXz75G1T",
  "key32": "2abf2Gz8QbZqCrgcojnGE5sJYwhaEEJs5UvtfjHp4FWfcfvksFdgBNoUq2ZtTw4TxuWz1pTyMWRfCLgzugbTNJN1",
  "key33": "41nx5VE9ALVafmi7gJgwTUeVwyv6UTj7HL64zwh5atNNsLSggA2c9VtGN6ieCtzVQ5wmgmYKVkxJff6HbDECrkPF",
  "key34": "2qWRvENafuEyGK6tvnMF3UcW5mCvN9a8rFfkBmbpmB5yWmuuh4Bc3BaGUr9uJ61zhR3xTCYtZZMcPK2565xRMMU6",
  "key35": "5ADA6X4rVZq97B4h8kVrqfTtzDhR64ep8VYFxUoN7mFqiyUX9DZL57ErguELjWEMDcp3AVAfV2GQU2TJj4APxue8",
  "key36": "5QzzEXH5TpsLbYrKe3uPVgrMFDEJwxdsmCckMRQ1RaQprKxTRCiPXSuwSFd5e4mFMTciATJXefR5wCTiNBgJ5RU9",
  "key37": "2x3a7zYt48m1fP9f6rtWVRPh4Xj7wNECBFEftBSfMcq6U4Xumy8BcDZFYtZvPyoJr6RaH4YKanmq89WZyPgpbMNN",
  "key38": "eUfSGjHVqP3jEN7er2S7nsEbGmVhTDgxeCZztMPJzr65o7nSXEmyEZqnFQfHGrTcoJ2DZVhR8RAzfX4q9bXUZJ1",
  "key39": "24rHGJFbcYa6gCeCP9M1bFMoiqszqVVPu6TEQaCuNbL8R4htNeaQto7Azkiy8GVTeKT9WrY3ZAHVzDMZGo5yH5uu",
  "key40": "2R8CLoFmSskKpFHCE67uTodCbXFEK1EdWt5Mzgcipc6wEYzJUijxGi7qavVGX3CSyjqJeSSEBAzQPN4cNdcQnTSw",
  "key41": "2bMZXHGQ5tRjNj9bEXWhRHScGsqymZS722SvXDiJ5Ks4eEhBjSMrkvpgpacgCSf6eL4ysMfkpw2Bp4m6PaQwEvY4",
  "key42": "59GcLsW8EDo5ycE8LDifJvHFPHb5M6AFUbu6HUg7Rexk1N41CBUd3wu3uhCUD4hanFmDcVQM8Zn91jxyHxpNriGx",
  "key43": "MXDT1QXrfMSBihpSGwXz7vEMeFrpD8V6L8f8QHoBzjyPtF1pcA6BRDB38XuYhqRdmKS41hwR8T3bWQSzE6gp52R",
  "key44": "5zQi17tbfoGUNiDYcyvWpiokR8jAGry7dmXDS4WQJ4mrNx7RnX2za3D17RdjMkTRZJxaB5vi8gkYSceu4ntL2Ue2",
  "key45": "3LW125n1DJAk1PeiptWcF39g39WANFa8hVdBTyDUrUtGzpshaUcvqushj3wuJtXtbT6p5hY8s2VKquo1q9Nug5TW",
  "key46": "2saoGYyS9GktraBRdETk7ertyspHvbujhyCgb2Eb1BoSpdb4nNdNyt8VKiUfUG8DhYhc4nfRJ7DYPUXkPgPYa7kM",
  "key47": "4iXNVYNNTUN687bmRHde91QDR5b9FccozpmuA4MULYvnwHvkksv5rwDv1G1U7q6vP2HTfe5DWshGAopHmZxUbkFe",
  "key48": "3f3B81Uhoyxnw93Du2DjndwketQHgFx6cC4fQJQWAqF9D25oAouGf9m8xdnaz1NjCaSh4YmBkMLU3XfZGXCkTmv"
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
