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
    "2URe5BE5WB8uGhHNfLAPWLF3MX4GEn7NqDtC2GwCNwtRp3C5LTWWdxdSBzGUrAi298Df6Anc8X9RWsQEqf4qKGxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BLRCki4dhHXQkSCJeLi4yeVfi5m8eVj4eFTUzaQ49MQcH5aw3JLEEyQvSYjpXaijWs88BwG5s8VwfaBQZRUJtYo",
  "key1": "5LPzrBGXi7GcWNimsA94q7eLHw16AVJGGon22jJR8pyJrkHBdEZvhFue4Uyk3Grnvzde1yjTKRAJrEns78PcKkyV",
  "key2": "2aoCjVpgvD5YgsZpUPpJaykwvRrX5X6EmEQEWowFj83nYDVg43TM9nACnonrW7m6ZcVyQ2pwXMMBxKh4ECJr1fbU",
  "key3": "3As3Rkd8ZBTj1XxcbmDPp9ZXZGDt9LB2R3837qGSu3dShpJ2y8JmVP9CnxSniAq6AxbgQpKSVvb2AVHtraMjrknZ",
  "key4": "3LGntJ9pjFbPgo8v8CyQmgPZR8L2r6mbAwfWUs84kKZNJn6fyirp2NyQhpcrrEXTzwBark5HUF1e6LskceknV267",
  "key5": "K9CaMKFuA5Dts8ZjuGkNR5gFwgEzYokTBeijrBuYeg1mkDtt3fMzMhZCofeXRKnGzHuJjBxegYQWkhp514YmSSp",
  "key6": "jojDdSGpFHTTaXETRRuTDQZvZ8bkNPERyWqzsxb4SsNYMPKzUKAsbCEFkvqZSArFpRAMwamBmEbLBvpd6tuSx8q",
  "key7": "zyXzoETTigzMKc3EHn5bquxsZs5jSzkuACLmbhPH39P8bD9CP5hsbAx6LwhKFhrvUhzfDZb9W44Ud7VqAq5UhRF",
  "key8": "3dFwp15gqRkho8FHWBNPGf1EEq9mfpJgEwSmfaaM8gq4bZzqcYyAG4sA3bZPkRBEmEW21yrZ8fwoVuhrx2Viw48x",
  "key9": "R7ytiUu9PJG9D6ZfmHeoU1k8WR3CMr1DQ2kTeZYVk2SyJdniRVAzQsAjc5Vo5mEdLYTG7ydjwWSZ2VhpPa5AKUJ",
  "key10": "AXo36odU9EGui9BUums8sawBhWYGYrz2oXZoUgoLv9bGHpYp5GNJZJ42aEK5AsbTTBS3mfwW9hnzRjsG6pMingy",
  "key11": "2tsvyH7coYZL82gG3jfMhUA2FmjL2u9XKYJSfwdaodJDW3ouyVWFF2eotB9yjMR4m6otptas5A4JCHyQgdyhejVs",
  "key12": "3FsVgr4Xim7qs64xbwKomh8Bv2D2PYsVps92Y34yaXQkCMdyTgswn3VkwjmvFRZPNHMCrnzVK3vqgGQZD79f99m6",
  "key13": "3fUXZUZKSZnuRUQhP6dz7Eb1b8B49VuGpukb8Vs3KdDqcQ8YpD2kMX16v1YsDoaLt5nefRi7oLYzMy2fWuYUHbc",
  "key14": "3jetCzgMBLGij882Tkoc3d3GZoa7GzGiYSqqV3Fh31pc2JSfBgMc5jqfvabgW9AtKUz7HyiNVJjfqVweooS4Kseb",
  "key15": "5fQzQQGpdEik1EdCii2QwenvSDJKCjGxL9fqdtPHTaomLdhbMfmo5Aa9zDNqsdrTxzjcFrSpc9KeFgcxEU8kov74",
  "key16": "5gceh3RtqqVvivndHYZha8wEYSX6U2GTgxKvjrQp1P8bX9HfzZdQrNL75iNXUEsMQD5LDArXEnW8XwkcaFJejXJw",
  "key17": "26dVmLNpdd2fNsRJqoqitNb1KvAPtjBNmLYX4fGXfRsHqXDyDimhkqnjLQ87ay6NjUvAPazSvZPu4FYnov7z7KaP",
  "key18": "4NHXBrCkV28QN87QHLa6pSjA9CZxTbsDku3AdAmYtbmjMA1kZH1nFQrHwuLMFs5McWLtA1ddD2FhAHunqSDNmp8H",
  "key19": "4MG75D2gZE1L2Vqf1xbFXM9osAm7GLxrk2QEE7EUc5sDVsFN13ESTqk82e81yoEdTJonsBPzKhPLzSKrCTELTXn1",
  "key20": "D9Y5rbaRTmypFuWp1g8T4LBr9m6EABQbjPd6YqnNy7DW2hBceveFnjJnhVQQwzXdGLtRGCGc85zBSYVouYfg192",
  "key21": "3UzksCqa5VNWGHrX8mpqv3ohoYJJk9fcyrUp1z1BPDEZGF616U3EZVQzmqJ4h99TazwD25juqPyWGSMABmQ1oYqq",
  "key22": "53U2FNoAiZ3ZQWedpis5bT8hZq5CXRoETa4wwDPfm6a9KA2Fr1wfqhfZRLv8WQy2taB2bjRM97Ea8n8PKgkPxxtp",
  "key23": "3wfGZCcqLkaYpo3fLwjczYC6uB6A2oU1zpgkZ8s5Ne48hpdj7mrvYb5jatZovT8UiYyhUpzQSGUxiFCmcqd4HZx4",
  "key24": "3ps4NtZopGypJSK3ZZTuywoyp1hepHdgAW1p23nSEMTa95UWUpBwNaSnsYF9fURYTF5KbrWAnMkcdscAS9uUT9zD",
  "key25": "5aN4WYcGb69SmV4PWZvyxVjWZZAmjrJxHWY2x93VHPuRrTagpfa6ZAizKgynUVPS77ym6rLDFEvwp8n7fhhBT2Gs",
  "key26": "4K2h1tMgb5vVM6W4dqzAB4hCgymCBv3NHCMSS2KgY9w9LxkdMSL5WMg7tBV38EMiDjkCisaZjzBd3W5iN4y8g7yP",
  "key27": "qXS1x2B61ZFRTUvJ2VVME9piSrAP5t796XVaFJ7T5bB1WyPKeyLPQh7hD7SXTP83jXenSdbePRRyKrCYAFMtoUt",
  "key28": "5kbekiMxwT8SJsa9LhNXUAp4159DwNZcVVxUMEH8uyuQAvu4rvxWPamBMD7HPArQXQYnuYsWoaHasd3oryQoEmj7",
  "key29": "2AQJUMKQrhDEiYseJsSWT4cLU98CEmiWGJjZHEVkMaYqfTBVqegXAPZuDGoE6RNvNAceNLBgTH2ChN8D4dWztK8m",
  "key30": "4aN7h9PcDk6K7VG6biALhZR585eq1eUiPsiELupSocgsvaNbodA6ndWJcgjFkjHBPfVetUM8Tws4eWKq57V1gQBT",
  "key31": "3Pkp4pjqPv8Fgh9Z8T7SW5p9XEzL3r67Gbq2b8BArM6GyG4q3gM71LYgaL1koAaFGGYzenf1qQW5MyF7QSeBu4AS",
  "key32": "4yZx37QYgvUprNffrdbx7WUeFeVP1LEdZhUPqswfojUiPc5E3t4joZ12prVJynj4WRe84nYX2HRPwKVmHL8Y3FSm",
  "key33": "3hmJCeRQ7K8H2k14SStyWajoCkc2HcLLQqCyWjbs4nBP3m7kWzQkkBEjHL9auQNxXendx9oY79Uvdfgb3i8Ygygp",
  "key34": "49EH1si2wCBpigtDe2NUQ6yeo35RL7WeJWgfei2VTfUZvf5neCiGDewuq3UuSipWqrC2dTjazhwFJadnuSAf4JXg",
  "key35": "569jTCSLW9j7ZVsheTkSpoBvBoSd6ANZWAjYQnnfgFvrmdzQFy8Udzyyg64kbSmbWBUCoMmD19KA7aPw4CgjKop",
  "key36": "4pdtfWvn1aMTc7cFKvnezXN9kPEEzdbgGKNke5X28A56saeDAuVp32tGEqH7DwonFhPSbkGGW6W7iCQsRC5YrjjZ",
  "key37": "TPgWGEydejD4K3XTKBx1Z7FUedN8ffnCkDMAUJdb4rJTK2ruytysAEDKRMDWYtWHHcBTCqFRQ5U2Xha8nQRQoYD",
  "key38": "46HyxwodHBc1o5hwqfkimHDqpMzMfHgVoHevmsWSZRxSBKRzU6KyeFawd6TnDgcc7GjTTKD5PsgcwFNWztbXApzD",
  "key39": "5nF8zVo3WkmNLZ6Ebe1n2u7z9iTPQzSTtZfckctbYMKWX17aB2diNWibptRvszuwFbjxRjorYRcz9HHdTp3xuUg1",
  "key40": "57yjH3K5fAirb7HEmo3FfXQx2uozRsMZ6tHDNsUVXXF5NPug6thwbBj9toLfXkAKKTXHpz3BeLFg4J7VWomepGfX",
  "key41": "3cJBGSgZ3xftaHcWexjTw5iDhBfcrBSY5F6sbfPVaVFK4TevLVWcvW5TQn3jieMUUAWbaseTndrzYosEmWLgH1GV"
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
