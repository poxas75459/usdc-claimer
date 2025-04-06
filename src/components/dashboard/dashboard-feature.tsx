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
    "4BpGqZoBfMksFN4Zkhrp5XzUwvyXnwaFwuTSb5sRwBLZ9DrrAs6YeW8L1nehShLH6c29dkCdUztS4533d7yDqadQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JZHYUuKthqn1j9oqknmf4EyYPiHbzEvcMogMHWYyBZpYjVetFtmAj7rmaqNo38H6yXLp6vsony7e3Gysfg2J2bs",
  "key1": "4BPFavEdWrkgDGt739gEXbSz2Cmj8FnH2N5zBAzMPC8zhjgq81MmrvhTHxNUEvvhyN4K2bgwvuuEF6z2stRY79WB",
  "key2": "F6hEowoqx4zXz2onqdxKkdFksKdRg59NWmpHtPN5GR9dUJ5Knx2fj7km3TttFVmk1d7yGDif8RHkj3Vk8CzkQbE",
  "key3": "4MXohCVfZozQv618hrCeTK17XrucWwU5zfut3h5MYj5kc98rTcUThK2LHYjoMQmzpz5mr76VUpNDxMBbwo8dp6cC",
  "key4": "FsuCbpjctmcPz2nmCCrB7hVVbtq6ZJTkjP8em15bVMqbs91XfVZ3qqyWSUyaZt1zBtuB2PihLmCzoheQ255dk2N",
  "key5": "2UZUbpo58NpHJ2Xp7vKdJ6kSXcBzsVe4YM768WGCKYM12HRwBdHBVBVDqcU1FcRp5tnNCk4hsj2sDf51sDJ9YAuG",
  "key6": "37CoUMpKWBtTXLuN8v5xiBJY63JVqCudse4jqQybNfMYtGYCx11N6BvgFnGBdqkkcjESZnHGhbzBtnqWkSX87kz2",
  "key7": "4yhTrCNfq96JzeTE9EyL3FE6kUZ94tbih7cbCvvSooZjUXybhUNshEK1s2ncaqNo7TfgvkmCrhkFJ1vpm3oQ1cKa",
  "key8": "4RNeGiXjutpjakJdTmy11Ftv498aJm1D5Ssh5oqQq9GtarPPr43VtZQA9qpFxLHaspbExmFvSTaYQfZpT5DSgnco",
  "key9": "4iNMK3wtk86TZMSy9tS1ZTj97HFuuJogGnXSR1cpGU1uCoF93AHqwfmDxFeSBouv7gjdmK6yDNe6otZc7V8UtWRf",
  "key10": "3TorFtMihuxk721RZoPFA3QYgzuY6T13VM4oYMkNvnEFLhBWKeEixZ6EDycf8JHEGhKPBg8CeaKhTGZ22p3rc5ga",
  "key11": "4aAxeqF2ZV9jjsbUDnwxZJNQBSrshWvqJJAibM12zThMLmSzrFm22NUJKqTnjSZG8y2oCuEfLaLJn7jZTWiGkUij",
  "key12": "4fBs6XYZ6VFgioxnniy9GFDNZzqzVWFUsemttKM2ghs1EspHsTxBugkDMTeNJyDRMXMctCDfF1cWbxS5y4RNYnsW",
  "key13": "3D7exUUmV3puCCxY3ab5WxxUtQRXN4DzWmWxdSPLxv6NwBQGw32yBZBaotMr783YHbGX3XUNN6NfxCB4Vtg9pQr3",
  "key14": "2LFsawf6ZgCqba1ijjY3rTy3U7gk5NE62qZKT9QQf6emsEGZfwEiRz4FJXGqkF2xTW1K8h1LWAkVVSCHQk6p8Lu4",
  "key15": "5YJjUukwraGD4GF2iPs99x2r3vJvy3jfgZsX4hRCAYwtq2yAVYRtdGTaGkhSiWwcpjwWPUyhbeKE4jZ5Fy3Rbj8U",
  "key16": "58GLfothqfnB1doYwuWxB1vZ4L7XDU4NLwkuugkoYoMCxLDbdiiESYv1pRDHsawpercjAKPHQraCziFmmbmzaqys",
  "key17": "2CNvUDPShCaeb2GpkaVqmGbpe9FShCn5K7JwBETvF7fJTkrhJN1wc61BgDGTy4brjX1SeVqQd6PdtvNP2UUzSngp",
  "key18": "4p1GQcdAj4V1Wyb2NvMuqTYVWewA2bB7Rg5atMm72E6UGGocq3CDum3YnVqx7VByxCza4kokRnhuYgSt6u7cz2PU",
  "key19": "4Cv85jCxCFVPxw9cHZq6A4kYFsp7vHy1xMUqWR2ipsR6bU5JC9GoPV8X63VWv9QRDpLD9qcE9n36Svkt4owx8TvM",
  "key20": "4j7utqyGmoNhHa2WZGjivsUbTFgFrctYnReYhhPKMSJTjuYpoXnQxLpbFe7zUUJGam67LrYAA8BtWcKNLNeYsBur",
  "key21": "2MScYPZTms8uEn9mJQWNQKMTjEH2J24BvYoNpMxmPCP4i7BvF4Lei5gUWmPNSBty7zZ4TP7spEt4teN5KTR9tpn1",
  "key22": "5ritZzwJzTbEzTmxQTaJmD1cAirvDhVmCStRkbQkApB3EEMu8ryPxwkfJT9gVvNtR4B71cwoyUdY3Dqv2UfmaSK5",
  "key23": "2KEZyNqAak9EmpAM3jGQ7rHTznbqwvWokSA52ELuBdDZudGP4fwVgN7gQ8pGsmgHY6ZzDEjhrbj5uLGYLqgXPbMp",
  "key24": "3R3ESDPfJ3kND1PxEbw8s9FSkj44pQHAs8ht86RdSnYzUFxnfVkn3AcqN8UXmzkRuRX3nAXAVhNZq2Cj4GEth1Dk",
  "key25": "2pyPu5Tzy9m8hPHPQVs5oWexb8Hb9Z9X2rxraVRvreTTXprRGXbYitWE8bgA8iYuYGNZbgvQN8e5LXpaDseCwU1R",
  "key26": "4HEUUgQkncYMZtSNhDoA6qSZZ6GPbEF4RgHG9uKpTqdvQSk4XyVSDiU5VH32haVKUR4Lyr92zjX1697D5Pn1F9oi",
  "key27": "n6T4PJ3yrvWkyg7c3EBq9doSRAHiWjrZquZc3uVsi8eRonVz9MySNsFG4uiZ8bgxJ2u3kp7eDNTAknrdyh4zrAz",
  "key28": "2SvrV7Pgme8eZe2GNccZZaKcU7NWwzhXQxqFtVnTEEbkotVtdMaYfpEA9ChVhQrmdfJce4ps3wn4hZ1UbDNeoR2k",
  "key29": "kMG7bCsfZkrwzn1zR8UwX8uXNxQj8hEM6zrA24Fm6PxqyiYEAsq3WxDR58rJxBq94qYv2zRtPikv8ohREF5988b",
  "key30": "27MjKLocyhU5xP1Pr3VMVSJheG5jGUofNDugP2nqeJnKnmhcvkWeQpXrQefvyVqfQFVA9s2Xka9Sc3cixNQLj73j",
  "key31": "2qpuXAaYPhwKy3kPT9rQPWj6WVrzQt617EcVKC4FLDYVBxRTTbYsMrZP1i54z2YrPXmZJJyUceUFS4K1LS6WBex8",
  "key32": "2yboQp3PAViuPWrEbkZhcqPajqZgAvJdxQChDijFz9NxijucnoZ5zj4yL6oCfuZ9HpNKVYABAjmCt6fbPsR3ztta",
  "key33": "2GJgYhWYM1bSzKg7tpMhrL6Lv7xaoWKYxnehqitrZAEi3jq93ifCdVmJosP1qdU4Amnn6qE3aRdD1jtypHyJAL8H",
  "key34": "Xbbs4uEZQ5huyAZy6QgMdUfkrmJ9eD26NZe6qWNWFmNPL5iMKbLueeRN43tNHEqLmuEtyEa5qVMpWSgm5k9khPw",
  "key35": "4uDRbyCTyreFv9yYyHJCHRT2AJeKQdMA4kvykupLzPEepVdmQrGPhTDpPHSacB8KVWz89sjjmr6P8WHFCt5sedZB",
  "key36": "4uDKHUW8aqiSv1c29dyTXVcZj9bY9jUbsADkX9ikkeTyhsHaKzRx61wAPuPthDpdT9xw5n9YE3o1oyNYH4VJ44Pf",
  "key37": "UKYd6c4DChk9bRgUGww2u2A2qtXd2jnViWnx8nHa9zkiGDELfoLUhXGuxqED8WWUuVaxMCteHNZHyoFVq5DCJnc",
  "key38": "BsAtT7E9BoYT381PVW49TJWkxUQRmfUngpZNsLAuPPTWhvSDhztPJS7ooGYtX62d6y1pQUX73swdJdEczwvYtPy"
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
