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
    "9bAmMCte15AkedqZtWjKFmwC4Wrfkba3pkRdhg6F92puGVPu7j39We6vZse5yrFQe9nBwvDZP8p4DppnGcnT3Ta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21acYu1G4nVVZDYhMgpRMW62ebiL1TW6LrZ7rbggHv4jJb2V34TDtMSu6P36mZW51p1EtuQfjAWGGncchsGBDect",
  "key1": "3w3MsNgUxmPYEU4QSMedtdaUojJchFpfRsQUnUxTu6gdidxAjmf29UiYy52pZmaKGvpSwsQjPyGt3ZNaE74XbC56",
  "key2": "4qJaqgd3ruuKSf9iEh25FRTmzg7AjAGJmJMjiUPmCUMaSspVctv9bv4joR4w59eMJr3ZigVtbVneefSkgPAwvN7x",
  "key3": "3JszRxzQqnpNimRkPPEs5iZnaHvYt79Mw2hhyp4U8vUminE32ioujPUmwoNyNKS4rKgVQi68mPmvjbCghLXdX2vs",
  "key4": "LU1fbokxehSMvxNmBw6pP1TyVip5CAPMZRW8D3nJzF7X8CWXk1fjKEsfyZh7ssr836v9vggh3uhEERPCPDcJKPs",
  "key5": "3of3cbqrZ3AssKFGjnwCnzNfmp2EM9ASAtbVms8Cf1dYRixvKbPynRozWh8xmGaywHFVRMeBTCoDXzogPRkcAmUd",
  "key6": "5Y17dsveUqdxZHqepmUu3fTPhZBR8DVZkfVLHxJ2R4Ht9mGc42Q22uBnEQbVTgKrH1uRWx775ErBJNRHgcdsLxLA",
  "key7": "2tfCd1askFnotzePeXkXdoFwwLaXxJBDQRavK6PajtgyovWNRMJMq3dTg5q9aX1eRogsEy3s8DVV28HPqZiDTJd9",
  "key8": "3dBg8k7oLmWkKRJwBd5Rq3H1hgQi9WvryCzFbbPSxYWZ1gscu7kS6t7sFeFeZrPDmc8iNFqe8KP8D1Bvf2BCYayg",
  "key9": "3SriVYk2BD484n7wcGMytijTrxHjg4Zp8Kgj74GUXAdmDm52wZbgWYPhxwE2te81KMrknk9Gq42yPPGpMLtjYD4R",
  "key10": "3N5SGnPTj26epzu4UWMxz6vFci8h4q3kt4dcRrsKpJCNGhEFqWdy2zHyv9MFtWhNYUF8uxs5r4xkAs7aCgBDTv3h",
  "key11": "2QNWhjGvAH6yvC4Qo3evmGdYAXTJe6zFHu23LbmFUny8bjQEnQ58QDrh1TJqMpJLPDAmgZYgQTpxX5zHhZhdnJcU",
  "key12": "4ZLrXDRsUnUmVeVt2fQYE7dHw2xyvn2VbrFc82kAL8JsQ1kxrDD2mYZZdVWunuBUDWmGsvD1eq5vKNQBTZScdorj",
  "key13": "4HVoFBTTXZEY4BafLoEv1FKsBv7gAQCzaNsU7QAJ8RRc9iiprTzrBLDNRZ64pvVm22k8UJ2MQg4MPmaX4oBphmY3",
  "key14": "5CSNoT5L9ZfGqj8LgrNqHtXWiBhetsCs2uJY6yx8AzsMR3ZkDV5BqXNNFPtqsnDJigVzrsR7PLPFpHNzSZ8gMpXQ",
  "key15": "LA1qs6cdxu66EXaqB5382Fau6MTkbAvJZ2dWJKzZsDuVoSP5Z9RakHap2UStqA1BNVrvvv61R1CTUKAJ5qXeQWo",
  "key16": "2VwDjzou2EX1SxxgRdd2atdB7ttnMCbyRzN5FaHvyrASUanfUTVEonmFuBShasRDdgTft8V51BstKy8uD3YzaTF8",
  "key17": "5FNZppomrNbX856PHfnyX5uhwtU9mDzozhAdxVnkPQXPsYxSPJ7XiLEFKmEZhr5NKonm7Yjo8JNn9cHkFL3K8jYL",
  "key18": "3dA8UgUJ1cW5QP4AVQnoGcx7wmdXmpHdDEjkFqseXPLMj4fQUC8dRVxX77DB84cLTkA4cKRkN3CpQSdGEhAwzCDB",
  "key19": "SHagTwGqUHh6Q7gqw11Dc8B7iDmEuu6xq5wvAJvv8oFTWDBFyjT2QQ9XPve6anzFpnuifvYjC4LLqQjuQHknmUm",
  "key20": "2n8gfLFnENkJNZHd9LgfRd8N5suqoWBxqjbQhe3PTjnGcUwViTLAv578ToTWuikjmAhWGcCrwLTHrK5bvT4sX7Ld",
  "key21": "JH2ccEpz8UbWwBLKX9GDv6Sdb3mU7SsfKjLigZ4ZvcXJBXHJCaq9Q6aMLsFo3tt5PG8S6RguFXDySwHbaBcPwBJ",
  "key22": "2L36iAS7cDZ1a2YJFqVZguEPyfkHaWRYzKqXFbDRhVhxRV1ks8bNeea31D7E5P3tanzLGgWBsAkQb4NSUUg7HSmW",
  "key23": "2uoez5TtWPWckmDgU95tLHP8knwjSjSaxoM7HkRnGSrJ1vEfangDcgpoL7oSfyy8cmZBAN6cKWRFXGqzorWPxkki",
  "key24": "4JMz7aoqYuhW2HuKggyBfphxscnbB2fnQ7RK1EnsFiXvrxK93EJMRdGosfyipEeroRfiVo6G477ELGfcmEGBMfxp",
  "key25": "oF1an65CMoGsJ8fGkuhukChTWLkWgdm7TC5JKo9qhYJdFfyHSNKFAPxxsmNzFCAtevX7HpSCsHrd2xnxgWzN4vn",
  "key26": "2fhhphw9kesR28T7CzdZYmFnT4tn1UKdaVV52zBWNMEaF1xX6vMdLb7tNnwT5Ntg5dqjPSzFpEWGXjjj4i5E2e3Q",
  "key27": "64aXHyB2eoPmH12iudnaBRWW57s8qdDFRMFfrZAea9eTgLxMWC4u8DAz3SLk7Aiiu3oSUd32Wwr2yvQPbpbKPEqs",
  "key28": "3dYsGqgmPbev6VKYf3feQJFNPWfExX5o7TGpB1GJZHy4uVNR72XFyH86AYVBfRGGAmfXCaiXkAvGtZrntVMGcuqL",
  "key29": "34jCLM8YdLu3gwak2VTuNXV2JHVDgn7v7d1eQg8FFHANKYgXqLZZynBD1c4GyP9HequKC7rZi8kadQCgtW15ghdH",
  "key30": "3zmxxRUFYykNLpid4oB7rRpzxS3a186cn7856crqZreAvUTaCH2LwJE6FYq62Jkg4veWXTMuvxXoAcdWbP7ug3jp",
  "key31": "5hFQe5Jescm9nVHmk53k8obAmc1tzTvq8YPUSHzGc8LFjMTLGkXYikWqb7b6z7WMCLDWp7pjK83DBE4AHghH1MbJ",
  "key32": "RSxcwoUWWLmRMKMNtAsXxpcV7kg8HsMvreQpDqPZXf1XofJ2bqs8P7gGxj3J5iVTjsB9n4CK3wFB4uwD6vd7n15",
  "key33": "3jhUbArKTpYcegD9dK7YqXjEm1oRA8awAgS6A4xMT7qmnYYbFpPAa9zhxrSaXDX1Qm9pA4XvEHLwFFVYNLALHJaN",
  "key34": "43DBDJmCm7vFBrGvgfDvEK8CDwmgnrRUzDJiP2aSVUP4U3gWpLKwbaHJMd8BGEzSomhzRSPE8Dkk9QwXedUpys1y",
  "key35": "o2xzMBtWedZHDNTgM6m6zReuyqKSrExbrBARx4zfXunjpre6hBx296daNvpPbhTpm5coen4JscAWBaZfVChGXKZ",
  "key36": "63nHPnF8ur5NL1c5h7WYKx4WP3CPmym7myN6oEEbDhwzpXSzKq1hvjreAaDAg3wRgfhWQur9vH42Nfs54gkYbPT8",
  "key37": "2VduZ3xeppU7vhYroQYb1tZBQhsCn4zR2dV8oSkNwzj9WKg9hhigikK3XizeYZkDot5KzuPN3YAnw3wy5afCSYSX",
  "key38": "FsCbH9r96KVoAwxB2N7NySrxCiMGwuvgUrX14zHe2L22DKZ9uXQjF8PQ2bdKHHf6uygwtiakoXm3uckJU9y43iL",
  "key39": "4TznxBh4QTZyisgGeEngM2EwWkStpQme5RYvhBen21qXKXwapnhDX3hDgH1kCdgVKQ6b3kd3MFf1n8xU176zFFJX",
  "key40": "5zKGvxGhcBjwZdQT5d6UriHB4ZTzSS6PfpeVvcAtsDHZG2jJTjb2BuRcFGK5THSkD4HrMeCFLXLPxbERVSN2jJuv",
  "key41": "2o3xcooiNvA3qu2BiP3H7mpLjZEisuEEkLGKZgUc32nzs15yTmQjsh2uUQ3f1tnm6nVeHvcPL1GSuiKUAf3SqFyM",
  "key42": "3EJAR4QDWf2vEWDEk3gteeDjyL1EsFPyn2JWgLX3wUUcHE2v7NEy9wgeFm1sqDV5oqk8jxxdYcXmLkWHqCJzEcj5",
  "key43": "55z59FHLh4XkGY4FToZZmrcb8ZCwdXjLM9Kkorrei9FSWAiuhyhGuJLSEZsRFZKdqyMTMfLcg2PYyPUSyuVJoR2x",
  "key44": "5drvgsBMuDuNriidt3xV9Mn5zA3p2GUrt2DdAxWcTE89Zcop4Xzud84cXyeDjhf75ALLneMpLVsGyxjgvtCA6xL3",
  "key45": "3mNzoPjHcRA6KEUurEbQgc2aBcyiFp318KS69vT52ZyFwDxbxmspb1WsYFPHG64pqB666P2MR2gs9w12LdYiv2zM",
  "key46": "1vB2NeF3x2XhWrTzPrNPdHHJvGeMnTWGtL9z4xtuipWZKC2Vf1nJv4bsQ1qSBvYkNWzdJPA8HQoC1LfGtho1LUj",
  "key47": "5aZRngy5gKAryaQqNB1mTeob5wd2bfACeLRyPsaR26fMGNnicM1GcRuurrPyYEU9YJiGRVbvyCvM9DD6pNKEDyh1",
  "key48": "2fbdMTJ1srsAG4q125fV4YSx6ukKhhzViyZWpTG4kTDxj1wKGZP3aauVc7EV5xzuFrJKLFZCx1H18DCTXit1DHi6",
  "key49": "5iAxMzqiJ53rFj47dZnniAK4Za4AjF7nUKQ2BETFkVYrMPZ7GHKCDWWbvAmruxWFPBgu6ccQNjJquVZgvhfv29dX"
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
