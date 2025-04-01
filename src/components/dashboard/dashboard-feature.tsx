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
    "vEJjUaFpLBrfaxBYJR6WZCjHswtPz7FJ16qvPGEsrChtASu9iAdrrFxtaTc8HZHXYd1vv5ZC8sboVgwdPu27WCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vYZKaqYeZTjR86YdeN6PC3yUVqav6knW1EUj1zwdiZ4FcY8JrnxFjqMVzwWT3bQaBJ7ybCFy5wm1pgjaocttfs",
  "key1": "qDNWFV4zAgC193Px33SkLnEFT4tMzfpTMpujekDKngqMzuFs5YpVAb78VTxC8nQgte4VFqXtfmZXz5VvnTcLxxY",
  "key2": "uNMHTmyH9y7fUvxFSJLK51XQHmAmMPBV2vfPCpnTArjnYGNHnP6TAht3qBCXsrFmKDAC9DB69Dh6fbBcetMBAQb",
  "key3": "2JtEftq2PhCu2A8X5BTTxcLfoEvVYLuq27owbcXjyN7Er3spkGpfkuaBzNYJXWLzKHzXY5yCByWjJMoqkZyLq1qd",
  "key4": "3NVw511QQ7imPg5apntF9wALybxsmm3xtuxsbXb5uxzZTWi1v74bYZkSxHdi9QvkcbJEu9bnXLSzLiERP4Vhw8Eh",
  "key5": "5gouC8fW9vxrXY6spASd1m44VCRs9qvCWsMhXgcL13ws31yJsnyteAkyZQ8otwbH696GLEVws2fi6a7bwuT9Ctyr",
  "key6": "2bM7dB6PK2WLBJrS4Wb9yqincZamrVvxaSi2aKR3NpqFTcAKSpZC8MX5MtxBcD796JbxkzcFQpvboUTj5TZhnkwG",
  "key7": "4Lhg3DxGJuNkaFxYdcUmuJMKiB6aXMGmmCcBeR4reiY8CHfkt3MmAim26e2JGNkjwXDQARmha1yANj1NfhkHjZCa",
  "key8": "4is2VmUesW8QNzbUTxu1ZC5U2EAZb5bBL2WVY1iZpveJ8GzJxo7ZozqvzRxKqngGQP4rwD25gGmawxWiiQvyZFDY",
  "key9": "4Nxrw8TMWcYYSackRbaByH3vJ1YLtADvwK7bUcyjZLAcEcShfCrU8NsKV5wV6uQhPyeJdWeUVN4y9bf7vcTmtcmJ",
  "key10": "4w5Z6PV2siQRnAMUb4TJZbQWJXDeneU2bu9es2uwuvD5uPFZrRvEDyfED2vAXbpWGS97RiAQoGvwKXKVvQ8Wmfo2",
  "key11": "4z18pkmoJs8Vez7rg1BPDVVErdGbRJnkmiFV7K9X7gWsQNtttawhpRUyokwue4yMFquQgD1Hn4hicuGqZHrrAF4V",
  "key12": "XCMtBgv28PBRv97aycooSK3mHQSnfPR7cKQrUhAoiYcZ28RbuW38GKJEjg2kJbfcxBpxr78uWtHZd8LpZr1bTZs",
  "key13": "45kcEZQ9H5hLRdCkZjKA2bNzhRig6M7cCacseeRJAdtnvfFwFwopLYqnecGzYQM789n6LN5Sv145Cz7G7cPLHier",
  "key14": "4Q7WxnJidcWsCfiQadvAkswqtQVt7HzEumMg7GpnFtzMMp9M8LiRV5j6xrRsEiLPd2rjZbxjCobsVunY49n3gyqw",
  "key15": "3ibTuFZWo3ZdUJshcxCS65GBazxR5eHDSvkGjEfdqn1kK6hAFCPqo6QZFGjKebvMSQBoG3kfHdGvMYEACsXXxG9p",
  "key16": "2VK9UykJ2wKN7Sy4CZddM1P6P9Hqec6Cgs7BFX23eeENcUERweHZERwAECmsngWodHhPquBCof1RTTHiYMV22mmG",
  "key17": "5kVhPF2ffP6CWEpSFgxVnTe55x94LsTZRu5V7MxgNLndYkwgDUJkybRshMgVXoYVF2rMxqneb8uYvFCyGcGLSAtn",
  "key18": "4CFqb7wvcSnt5d8p76WVkY5GYYMJX2HcUNYixGfsqbgmDfYccLRFVLJ6ztK2X8DdHPahAZBQCARdQ48Piwd5CzzV",
  "key19": "5882zS5c3fuxwEUReqRSwn4xPYFN64PaVjTH23dmPinC4D4dABah5YdzdiJr7SEp5L3cMqS8mcatUGQnMPXb7ZuH",
  "key20": "t54xHCr141u3wD5ZWekir9VE5DpvX5pPg8zYw7BZth2pANVfHA6FDQf2pgosQHvWC3QBfymH2PzNh7cWW4Cq7rf",
  "key21": "4xHaYapx8ZEqeUhxWEJSBcPGYMiqxTuDKt56WCksy9VPzPdw31N5xZjh64gQ6krnXU7bAtHW7QhUbeJe9nrENmHs",
  "key22": "3fJgTGHrumDKHsPzJmbVdbRD6PWJ9V8pReP27f2bci3mZuZFBd3tbS5swCxVc8f8hqrZ1p5QUtx8oLmA1CG2gyBb",
  "key23": "3p1kHnheZ5ARmxsqzKwBvsE3M8fRsDAZUYJLJrEgYQeVpGKj2kCHPLJ2aWFDsumGxsrCTkcs3JAxjmDAP9iYUgTz",
  "key24": "632EWbwk7qaD8fV4wQMFBSSniWKTw2tCyaZFwCsUB7ewr4s5vJHTLvc4pEpYifcYTvTb5ahBwCex6wHCeSfo5CgC",
  "key25": "wUXPDXuZA15JYWKgTUZHKEmfdXbYp8ZjLxjMNLf5djkxYsyCPi1yC9cxVBg84gDN3JhudjpWx1sAua6bwJrJ5mR",
  "key26": "Y3cgGGCX9ZL3PQkybkc3WVS1gQmu7XyyQeS5XbSLCiM4obyzevFCpU4q5mYPJea394R6zykSURdBHjdCRsrbkhH",
  "key27": "5GP1bZnuAYtXXubvmdSECEvH6Rgta1jgGti47TXXsx5UicTr6xohtK426BcuN4t4dSRZzsP9gFN58ZxpjVKLS5uj",
  "key28": "5cL2tJCxmrse2xyquc8drVj3MY2cebvuBHCmUHyYRa58MEqn1iarLga4Au9dZFr764i1jrCqURLtoytiXE3i5vC4",
  "key29": "3RBzEUxiZQPMWPRRd4oF9fjNQRuzRpLUp7jjcjPvmwFezipVKdboa9MCrAGwaV6rhBScKrA4EzsZ8MEHYuGeckku",
  "key30": "zwpbDXgMyKEEV7aRAjBdzrgoLUanvLLTiqdRPgLMEQpTepe7HfjErxzxcuZbX5zfJZZN5tNf2P83j5mqRQQD2TR",
  "key31": "U8ts57d9eo8AYWE4FdkJvcGowjLrwBHTd7cKPCydxSatr3FUqaf12rvTGZQbnbUQeZnrnHD46G3TGgfh2WwckXt",
  "key32": "2g7SryVzKzupZPZj7pYAMhcFvSsN1swpH2xKvff7XL3E6nnrk3zLxz2DENX6VVknMubksKYdBA9TJjMw2XSWJXYP",
  "key33": "hF5TA3nYYxCWcXTpuWNPsMvg76nswLegvvuF9ZRxKfEXkm87wXXmiWvi2txcwK1ivWivDJs1hbJpdkSp7N7rhaV",
  "key34": "5YsSrxMv5wGranD1HXt6VouHvYQaDvQiS2QM9XYu34r8cBRo3v8YkSxHfrgX11zCxTgKmRqi9zUNnpeZwiBXteYv",
  "key35": "4wZGS8g2diQywPyfd4GPJtAePxELqEpeF6GakCX24kHiFSM83Rk8yoizuQQQn6X7M7VwQu34cQKfcXQZSPUc3m2P",
  "key36": "3px1Hge5UgtbcaZ1oyHzmdNRuTYVxpuZ1wc2aVFNXTVaocdwUw57xcyHKD4dGAEpcvPHVQT5ZSF5SCWko4W3eRTi",
  "key37": "3fhoUa1j3vm1Q5RpVB5ks6xx5xFvoDxC32HmeL4RwBCWHwTvA7faiMGgMGztVh7hq6v7oLBi4PhLNtFwnEBdcMCF"
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
