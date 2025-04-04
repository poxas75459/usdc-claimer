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
    "R1hYHR9NreCrjdSrQ3HHgGGHH2Cbm65767Kxd3RVdj9RJz2WsJ6vYhBsGtV72wj8KWspjrbJKEj3tvESbavqMFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LavKU3sKDq1D4KyT4jeVrae1VAtba83d9BTvLxgFibAHTpAJbCBPTxvsHxZ7cEitkeYejPc9UXxWbEq7KGHEexY",
  "key1": "3pcpvxYDSYsgrvoXXoNGHPbfs8sNqZ2i89HGAF8pBuH6vmmYxuXPxnyHPdcEHHXKCTaNHMtXzbGJeSKnXjvzkXp2",
  "key2": "563E5GDjQjCXVc3ySgRp8kkLC8yR6X5n6naFw3C5fwngZE2PRbR4b5Y33vN39e2Xa1EcFPAe2GeZWx3RF7GX821E",
  "key3": "aVKJ8Qnr39cb5p9LRvgPR1L3armioGY7aNyb7p4BiuC5hvXhnjoff4n9jkQK7vCKBckbmTJQhniajQGdE6SZrMf",
  "key4": "44Uw8WaJmZk6S8v22SyqzCSzeqEuAqBqhvPTy7s1BVnDzuvERhHFFHUUz4QMoaVvU1vK8FkmkReWw73ZCVXb5MXu",
  "key5": "DmaddtVNrd5GR2w5xxYaFwGB3KhaAihVTGGnmnt2Jd1LghXUBRDiMDaEsJkxN7AHMGidS11yKbLJvhumN1jFMmr",
  "key6": "5TKqapEe8hkUkUmMMQ392uBoafKBYP8mMsi7LSyuqxZkXwMuKbUvYbnPbYKzCYqmhtU82aUEKfRBgNxLzZu5jc1h",
  "key7": "5qNjm7yPLhHjCoNPkt86FafDnYEpC6DctWW8cqfHMeZP7vHo858d9AqB5hFxD31giVPfaN7MMYGtCTeyCA3KViGZ",
  "key8": "JsTBnQePjLWo8Vvf2zp3jWmWP9nEQN84QDcgVzgxXe6efNEXzHnUw4QRa92gMpDEv8ua5pL8kX7xTFxuujfq13e",
  "key9": "48cm7FuXxFm2sPH8F2prceK7eMWWoK4pxgAkvxAcF4QdX2syZamFUypG4wY5ULDyRhh4jpCLnkF4D141cY6T2SaA",
  "key10": "2BtJQPzu9LazEoTGXTJqdx1bZcQmZnFy9LsoY6qnCzvkzUWVgVgwC1s1mg6NMhdqfkEJN9fTEpZ1kXMPnaqo7mqH",
  "key11": "49TU86XCwg32YZxNMNBoSELmbxMLEShYDASH9t9Qtr2MorqZjciqVDjEie7yaAuuzgCzGuhey5ZLyzobJ78c1A5b",
  "key12": "3EWMXUnfxS1SFkssjj1pvKC9BqULwnWsZz4XLGfxdDXN5a7SEr9PDp2vvjGyj2LiiojyxYJWX1fRWmv4UAuExwQ",
  "key13": "3hH8Yk5gdP2sAoxUMntBe6FFYJyLonKtkrrT7cELkisCBDaeDozP8RhsdgnnwH8ZtLhkPTjmi1jcrS9UVGGzqNSF",
  "key14": "4WW3aQbKPoTW9A8oKBYMbqtJBQqXzdDLMEJmx9ccrMjbBA6XRTw3sMGmMLHvE4EYHmeM9RWF4TLeBb8GyqrGEbQ4",
  "key15": "49cyLwjgBSPjhyo2FJDEhLAYigqf32Nty2c1sE1Fg9afK9TjPXFiea7RjFGFHA2ZpMVzx2UJ8V4GizLtATT56bBt",
  "key16": "47u4Fgzm2n3ykAomU4Qdh76cznPWteQ7ZrKXqy85FN2NV2ga2EDEQ9UEBEDmPqR9Yg9y8FTZH8Chk9hhwbh26ZNj",
  "key17": "4ZSEr9SQJvScyqZ2Zkt3T2iZXzExHgw8DmbuDvFNZzx112sCThwH5ywTwHQK1Ag5fWFyG18MwKHDE2k5vqH9N64r",
  "key18": "3FnJS8PN88rMWQrVY2V7WaM9SARicQ1ZasUdN8L1o6KtGdYQMfnvQRdkyS7Ww61S4nSSHYxdeND8VuprPuN3znu8",
  "key19": "5fUZMTfjVHZNYWr33wx6R4rBJiuCxjiE9CF8ivEcfkFWcrc5DufWYuoeFNkG2jaywyDyfPBFhmj1yCxvyNsR6dHc",
  "key20": "5t1CYi4TfVb6ECqJQccF6DN7gBSUWL8AGN21KcP8du4Fu5uMjHbUWaYY43THgzuDhmx9Qkwmwj9j1hnjg4Le93Su",
  "key21": "4aN9XNDq6vWDMGrxRXox798eaMdPA4o6ZZRuoCBTHjaJaGapnGGe3TkEn4VGkvZD2e88FAZFuVnurD1gKPasrdps",
  "key22": "5JU6pJkNspSUXkr8Zohh9LDKEtmJWx1PF5gtmaK5FCvcNftZAhYtysJSgBJEpHif7Nk2fYow8ZB4vxvLv5dQHjEd",
  "key23": "2LYN9PM2zL68zb8coJQ9RPx7MiLTSDinDsZ4JVPktfFvsiaxrVVtFnBhvKVXRSYBRzwUKaeAi65Y5zr5NhzbAmw8",
  "key24": "jXivsMtePDLTj1HFSxAgpYzrGmovLix4Jd5ccfJYzuzqXXCrQZT9pfryNmpmX3jKmxsMJ96LGcrr4KefJUBGoCy",
  "key25": "4gPWjeASSfTBiHZ3a4K6L19JFHk4u2vZefwfSUhA34remEpPDS9N8FzhLeY4m2fv1LKay7ZJNEFfVR2t3SFwvxNr",
  "key26": "4veg8HohvaRX6Atcembnprq5oea5FEpbTm7yrxLSRPZywiwCfHxPuBzfmDbf21WajLwq8xU9ryQ4arx5DrSQQRnE",
  "key27": "5aMnzgtsBJtBoxhadAN37MCB2CAstds1tcmojTkRLkKJX9Xiv2GgeLoXMyQB5Ptf6tYqjJALE5ArLE1JhamMCRhD",
  "key28": "2DA5uAwUgqAwLRNnXuuYRm439EYBsHJRP8VdqLM2FcxkZQjWcbBZRZ2vmjY1WY8z9TmzkXkfEXrBLQSTy6wxWe3S",
  "key29": "ryeLryJn1qeVNAcmjKk8TjYdVmrw1RWRGUhnfwg5SEWvY6BTQ9ZubmKii5r77E2SFNZLnHhxFBnPVPzDdzu9uuo",
  "key30": "3bCuUGwEHHv9HmNtcsEm4bgc1ouYZd7Z8PqadgC1rQxnasaUUGU18NYbnqSLKJDkGuVEoMEDp4yAbmitA8w7ogn5",
  "key31": "LJP89JwFmwvr5etGsgkUtQfe5tPiAgoUZPDTRHNP7B2Xcns6dCH5V3mBihavuVaGApk2pyTAgpyqADHh1T88pUf",
  "key32": "3DMDyoqwFPaLTdm2fSLUm2ZDXfhqs9RbupZdRWPCXSZDPEm5sTNQ7c9NNsXiu3phcP37zbrgQpayVhRzNQnzxssU",
  "key33": "4NFfVw2P1ycHBZ7eEp4v3yUrosQ9EJYUUyFkxpqaMKCqkzUQ2E45ZFKcvtDpZJG9Jp7NrNFCytLVMmk62yMNHMHZ",
  "key34": "24n53HJGTdbbAwg7ntFTXbjPqEHu9P66XtZHUQfVx71YyMMCbJrTwUgptFqWKwimXGbKUqGurs3XQfTTEv6Cwxwa",
  "key35": "5JjcNGi7oGR99eY8ZpvS5SzTkRigiw739uYYo2CAaS89DJvxH2avdWitu91zXHx98e8Kzni1K9L1rvKttjXr45eX",
  "key36": "Q6oCfaaDTVGJ2fjcpex7NPn6CwurYAorbzhDSYoRiqoRqXjtXw3DRzQzGmsA49vy5Y9A4opNiT9HvXkJgffAkUk",
  "key37": "MgzpWYLEYJsnjK5LhpgNEhum6D9KNU1CYovQczhETucd6jzmUgKFLvQU8S882Tva1fW98zy7LQwBwj9WLxTkE6i",
  "key38": "5wfv8MwQPzAKfyMAjg2Q8P45gampeuVNxjcyCsBarQtZSyfMdhWr4zgB3S7vEP8YJGSL9Fh5RVFg7ZAgbnph7kHv",
  "key39": "2KvyDpVx4Bw5yysBXgMjC8iiKFeAtrGJuudgBFtRhkm9pKB8DAK5nKXhVgw6EZaK1MWCy7QSjia7vu9bGSEg5pBg",
  "key40": "3wCNoEqj7cM7e6FYS83t4C113URsmqhYnSkHLRypy85XRV9WEv7x5Gyu2mo3ej2fZHJhXzdsiKTAfu2vesrsTuQN"
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
