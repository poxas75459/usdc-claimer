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
    "2wYdy2n6yxJQPc8zfT8L4KVaSEzJup2PGvCqDVMJMQnQVzgT8BiUN61HmRVWS1bxhsVRJT9Vj5ueHtEicNwfaXQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VphqRgwZ3Df1PJ6o1EHcUbFHueEzzzweQm1XwGmoq7B9PVrHgyHY4Goi8qh7iNvWpiAdFDs4ueVqS8WtA3aUTjR",
  "key1": "5JngYkN14FiXMugHLW4dXFLxpLrkzZZ6KvMp7vAkbzxnZSuuPBSXjNWEnJhrEzLZHxW3a1q1uCYHbTBznWoqQ8kp",
  "key2": "59EkvvNztNTetoqE36a7J4P4kp4vP9GLyFBuMGXP9RYpnRhtMQwuUbaCVXuqMejxD2bfzoEKEGQWRDUc7XSj185X",
  "key3": "2rNzqCcbpYFyiuDvyKQQ9zPoXAjRJ492cESxzaNLRQQF3YJiGcojPxXR9wzfdpE45WMGRvnqhoLggQzCDgArXpnM",
  "key4": "faf3eY3cMboG1FxJ3UXbGoBqqhcC6zum8j8tc8yMjADyZPmtdiHNAnUT6WW97BbFuKpa4HUxPDZRxtZVEDXrCVV",
  "key5": "2ZPGcGHPwAPBhvNzkhWviTXREbATTdvF3QZiUGhHgWVL1KCLR5Y6pHTR9AKzEG7VxupCVTzKNTiAFpmHi4XfpX3V",
  "key6": "2HHYKj8eKth9k42vhpVUyJZXygtwU1KMNBZ2NqmpZwNdsimBGTntSa9fAkT2sKavjTcDoaTv2b5wukz1FwdSMXqG",
  "key7": "2KUG9UDwNUf8VQJrVhLs7FAy4NKiaav3Noh9CqpbfizkpGJSzDESYqHCyJDz6vQAcJN9bmn3Rgo2WxXoafdcaGMu",
  "key8": "W5cE3sjHwN1kokBzomVmVmrX1TobvwhxoKBoTgvEq913k1kKegeeDxqoYhN56w4U3PWgvgN4L8Saxqr8PnXA5rK",
  "key9": "5METF2UESWudJqBSC4m5yLBSGQfPxpH15gKD6M35sYDNpUzFDuNvZraWw1WytHRtiNZNoJ7KEgnoQZmmyFv7sL5C",
  "key10": "4WEWwU4Yda49Q5MP7JimRP2X8rtdDd9bwtUHGpeYC8W5dLvZcw7VmksmkPsNFhhJURyMXLHV9PKU7pH85JRonKVf",
  "key11": "3z2ZB45o5EqkHr3Pumkax9oz2rm84yn5h6XERPbW8m14oYSfvXq3tVR4pRURY6cfEqr6YioHW97sepH56CuHpvb9",
  "key12": "4LibvdYk95hQ9RwrAB3NZXx2VPPGvtbu1dtNXREjd8ZcfNJM6sgMsxEpXZnztXkQEjAruQSg882eqaGuCurS2vpE",
  "key13": "5YWZzuj5BkPRrKN4n9pYH7VnfLLQqEQgYpdj6KKZ439E41wJeFEbfSvigovCewqUFYbxfKW9oANTaFhBEocnmENr",
  "key14": "2CvQxj5GeVJVkKLcztCBdNBw5RiLrfMXZU44CgYH132Zb5YdudqoMpR3C8W1Ach9XGD7fdRmyF4WV4dM3wLkkrGf",
  "key15": "253tLb4m1CEbUBykGf5PnUyeJbzB9Yi5rjektMiymdF5jx8n24sEZjwDgwGZqSMoPeseiR9LxpQM5fNQn9MKCHoq",
  "key16": "3FJdieTZkzdCopYv6Q733LqcFUXshucTvCtCrbSv3UYxZtpoTz5Y6HqVEZQmaDgjMSzxGAbUmsTfQNnGgmuuWCx2",
  "key17": "2MEu78H7roMic83Urm6H6ybXj9rtakVkvR3u6KVedpY8uMfAMkevQhqDPTyyRAErkainz5xCPAyrgzRL4NzSdsTy",
  "key18": "2AKA5EVM7kmYgg23LXb97h81byeXnP1AC8CvT6GxnK59dWPMAZFBr6D5qNkggsZE6dzmXanPbM55TJ8Zg4VBKpi3",
  "key19": "rvXTDng7R1ZaDA9LLoEtE6KtuHcau1UZi9KBjfxZLX9hREqYotDJn4RyP9XuSAFVaNSyx9ajCYSHA9r9BVSXcbt",
  "key20": "3yU6AXxzFE9annQVbSnwT1i6ascTULA2bFdZ3mngkTC8jdKV32V5Ss9sF6aJdjNxpHGd4rBndU6ChPQTY5crVq3o",
  "key21": "2vdRUTeJgDJ8BEMQsrysbMiXxd1T2N4DzcHtiuHAKJG1Ycoi1DeFf1ehkYEPxBasphRL98z5b7efsvfThcovTUDK",
  "key22": "3WrLoRrPMtuv5Smx6qPpwAymGM8nbk61cKhqcAbMYL4zumjCMEkJg8rhFBeSJWuASPpaRqzTg85NfyGPayLP5YaK",
  "key23": "56nkmWFD6DsX2e7FfX2s8NLWTEVFDUUHTr5xGuSZsn79k71q1EudUs7pJidj3zT5TLwTfYKhreYD3pLGY4BiNPwJ",
  "key24": "2XbSUq5CSDSrVmcztpfuPxDxqrBE2FWk4Pd8wPVyVUiHQ6bhZhYXgG2vcJW2YQj2QF2mTDprCQBeUusaMKbZz2x",
  "key25": "59JSozF3WUQtQ86oRqgvRyR4NMR5Nv7sqxH6VVbUWcKQaTpFJ9CyoynESFvRCfmBkX12ZXvepW23N5cncwDxHCrN",
  "key26": "5zKBFs83yV2DRDDEpTjnxnndquds4cxt9pez1yXQXj2YmMvLc27nEMKdq17x2nx32NNQ96njx6jmuLBhcMynzNzR",
  "key27": "42BAsX1GAB9X1C6VTQy4tAkKKnuNJ2EPw6gqyXqnTHpiTgXJy8y7JbLXrZFsZHUye6xjRpx55DQUvLkQwNdAe7Rq",
  "key28": "62Jjbmz5Gc6JzcDUXiEdhq72PaJFwuEG2hePy2Pf5UhPNz2DvDtBPwEDMp6sbL4D9foemPbbSUnGPWV4enjUVaNN",
  "key29": "4rLDsuhmuzbRiMQhW38y8HhimEcyenzLXsBGgDBsfY5hXLrwfGoaWz7Vik2mmMG41dZiCvaFErnqhM2w13gna6Mc",
  "key30": "5jHQia74rkrYqXznY9JQrtY3Zsi5ZaN3H3LRAk9owqXhAo53FJUh6uJJ7F2TvtDM9BNeB53AdiNcTpy48GQvcPX4",
  "key31": "2SCxuCmzB4qzYGqPzSZ8sYqG6G9E4ZKyUEztDFKcEsz5NiwVaqeTiNE1monyru6Js5oXNe8Tvs4nafcmdf7u4wHn",
  "key32": "dGnmQrdBkbauF2tQpkdawUhXMrHNSdH4Rjdp6iU6AxpSjoFq9gyfcBqVZE5pt3iZ5gFiJgyX4emiNFWDEzv6FGq",
  "key33": "2v7fjXRaiARgnuNH7BpUhfitoDsWEBgxbgPLVWhEi8SyghGtQLSW1QhqJDLb5S73RK9NjKKC8TcHdj3Cc3jyCGDD",
  "key34": "FF8jc338TCiPMQSzPsMj8cRB1W3r5LHT9TL3v4oSTA1TXTUDBpvX88uTK9gRUXAyxMsgiXihZsHHEMnF1sy7KsY",
  "key35": "32iXEH1UTm3JtSYDPZkPvy1Bqg1syyjftWmjaQADzhcNz3tSUaBBxHGRYoFWHSVEuZBmBJGaWadMWQNNv5efFZCN",
  "key36": "4JxBqrihct9evCbABJhs6Qm3eaLC1mGnL49vRqN62T5B1jNtdx1VRxU7pbs8zjzNREXVr63oEJTmeFE7QndoM8Jz",
  "key37": "mXZ3MX2GB7mCsKodngoTfEHZGEUNYb6u2aKfpEAHewqSJqhT78SfPXeE7N7Nf8CN3u5zWyZNgM3tfz7ehLrN6Ka",
  "key38": "2sUNhgEdsrwXuSbBkXgWrEm2GTHZCR9XGGMEZriFjBWwh2DtrQXBrKYffoCsVT7TXrqM9DiqMrGrog7sHqQUZFqA",
  "key39": "63M3D7Z8QwzWNX5fr4R6HGNzP4zVbaY6o5gtJNtdGmL3rv8UhbWkqYP5ATKvzP7bmNa4A7JUe6CUVZ7CD35fZ88z",
  "key40": "kYnuF17FswjdEM1EQgKChU8pqtCyVHqgAAT5hXpeJwCW1gjAdFD89FxwbgriDbq9D57VXGajy2NrK63AjMdebt9",
  "key41": "4JncMrHn4MhpCtvG5b5fgydCUVn4yLdgszSuaXHn3sV9Q6Wmi1DdzhTiBRDZ2XPVfERTbergFmhRD9f3VCWkoPRv",
  "key42": "3zPPYrSXqa4LfZngafsKmrwM621hWjEn1pCqCN29ZYGDAMgT8wpFQ2kNGd62Fwc2YkJgGgG6ojbHYNFYnH8C4hB8",
  "key43": "VxgA99uAgJj1gAx9zG1uP5quqkSoFLbhiQ6DxCjDmwsbHnVXMbxbCezdb3jZ5Fz5eiJTNe7hUsjVo8bJBrWhhbT",
  "key44": "3mnpkLbYMjiSbzZTverC6ZQ48kwKbWsU1M2yYiRJ8HmBVhZ8ieGaxQf79VpCogmGCoysaXoJGRcu855i3U9fCSuq",
  "key45": "5xEqznnorFbSJWBs3eGRfTpCvWbLKrrwqkcdZoee5DXKk3S7JPVGQbBbUASsANF5uaLumCPc5hn6SaKrRwxQkXRm",
  "key46": "gk4euUqvgQpaS7cNtUsDDqSzsatxrEaxFhq1iv7A9B1tDYF2vY75DencGWhVvDWemm789zvAg6cgEka6fWous1h",
  "key47": "4DKaZsahA4d9TXGxWSKjkLBKiJVpPTX6nVLuQrBdtoVLniEdzH9RyfzXp2Qjee22vU9SokVd74a396D4EKqqCavG"
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
