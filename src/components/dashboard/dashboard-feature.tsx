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
    "5HnQRcFTnJhoep368WzzBEXSc9EDrYHzd9AfAEkgz3LqdPAEu3Sz4DLLVLWvm9gijVEQpGZogcrVGcfgWC6szBCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JggvmvXGTGvuJb5dyLaBikxawjDR2URXNHEHTXjsq4xDPv3xUfxAe5TNKzL5DCEJpQEpUFMq7K7CTKbBdWFxPUc",
  "key1": "4FGqpipELo4DqZhP48vWt7oNQPTR1RsHSq3F9pbrMwb2GueDUcdR7DWJvCaRwPFP8RrMnQ4wdhgwTfn3ysscSYCh",
  "key2": "s2w6f9FtRUC2sbJvV8rBG8he43m4adKQPSw7i3GUR1XWmYatLpnSkehdkVDjoinzRRP9AsvFkh8uyohMnaVaNr7",
  "key3": "5LHnbwnKdoQkqURGFTYk6v4NiSJhGjLd9cB6pcV6RMdgYZbgqgb3n34g1CKmxAFKm99ekCVrQQC2GziVpB274Dgb",
  "key4": "2VEE1TTsnYvfjbNJu82FVbgMgnV6QCZyw4Tb6a33z33SGV9kxetnACkTN7ToNYXr5E2eky58ej3YX3iCqWVDKuxC",
  "key5": "4Rcgq8tYkwM9kPcZ5dtFDUksrgE5CxK5vLpmAm2XkG11xrSgVHN1fybgrjsTQqyj1hGWCnjy27iniRwTawPqd9JX",
  "key6": "4vaqfsPronsA58xiLcjhzakHA3XrfaMGdWw4QWpL3ovZa3LCvct8Qne8n8rUFZm1H2yVhqqCmG17G5CraxDhrnNp",
  "key7": "2c1cnMniFRQd6G1pMQDkrdGxiVEunPPf8WdG4fHXGP1rn237XaR7UF4xUFHJ5EiV4B7HjVFGb7iGyMdA4FdVMCpp",
  "key8": "2MSaySxD2fwc85CJeoHp4WkYMrtVRQP1bQnBDJ2kXZPkQAsLCyBxEfUFAPXd27yiiKnWwcYd1Ajet5eVk9KkLC5K",
  "key9": "5JMjjW2Wp1qVbfVcqftff6gP9Yk6mS9NbyTAiBSAB9mMtfj8fUYJzqBzRvw3J5P7CioQCtWsAh4D2o9tGoYiq9p4",
  "key10": "CBQgsPt5EFQ8RkPELj3MGQJo8bwFaaHQPg2ncUmaH8YZj8TiGBE3H1RBNjwdQyN9hkZPKJdzMH6RUh67AWpLxvD",
  "key11": "36oLTq9BjGETadLK2JuoKFxiMhQf74wJ7pGY6ySvxGPvfi9pGNP4QMedcu28jCposXBt9uLvWEkyEHtcjVw8eLLi",
  "key12": "2CgprzL8Lg8beUPXFVoNx7PotcUvZU5CypaKSAyhRtBzPZcoz2fjUyy2pUDhTSz36A1pLHiohnjvQ8dzvKXZ94mw",
  "key13": "pdsRGGEPnw9Vv8mC6tgdmm6tBmJmb4rmrL9KoQaXQM8pjnErRSie252ghrZE1wQhLJLC7f8uWnFi29WMs7nsUct",
  "key14": "4so8JcTsnTDrs9sSNijaZxtWqa2yoGpzfX5yRs9Mat4bWUBmq6QYrWE8N8z28358Hs8Tgmeqz2Gz9GKnWn2LgiXQ",
  "key15": "3EEaz2sRj6qurnPgizkg3dTGp9rA2Whri9fZWK5Wrm39wrYu96vNePGiwnZ8xn5Vextetkx3Yq641VcJviGMbg6p",
  "key16": "559sJwLYun4PJXLJTjhPXm22YMPV3XKALyPkUbSj1N6LkycHBAGL1RwNmaH6ugrBgDwLRuXt4y5nd8UYS3j21pyC",
  "key17": "3fPAnnKFT9WxZt2jQwvG8pkGpnhMZBVBJogsoA1H5VhWbGoy2cU9YqR9eoPLYZYqmX2MVwn4Hj2FjHs1H3fyyiSX",
  "key18": "2dvn8UWXzDBih2YzGqopSFKEvQDZGhAvTsJQ15wGFzkHjveVYvjp1gD6CMxwFCJEMcy1e4gjtQcjbtxz5FPdjJi2",
  "key19": "3aF1bmiw8jeUJbdQWLorub2t45hhCkhrXiRvGNhDnxgzV4KrKbikaGDkmaf1BZgVtGKe6uB4ZcaRE7rL4W4qnBPw",
  "key20": "44ty1ZkYETo6n3nwfznTA9G72h7kPauve6uTCwnQv7XLPbBhdvuMhrnKQWNG6DqqewyAVkd5BHSShjK6JpKjHc49",
  "key21": "28FAT1dGShd5Sug6KsLsCtkqFVkUUApM4dprS6h7mnQyV6XBvdypWG3YqgCGcW2FoAoRhUDBrQHg8AKFDNMCR3tN",
  "key22": "4mVAT1ZVnqzDsEgrVhQLW3STPvLXPzrgs4QrrRhejLa6oyY447s6Gkrtu5A9oFFy5AzVEFr6NQ75cGnqzS3b3mc7",
  "key23": "3sPMB6D8zoD9k2xAtN3uuix9s6JgqkGFp3h5evVctqZPthsGoWtQdTUYQjYTqa9t1HHR2WvEyM7pKLR6yAEfA9c3",
  "key24": "5FHCPWpUU8hHvKFbxRS5p3GWNn4rJgBg12Th8BQJvR4eSLFe6XSUJJYiuWFWb3V3nEzAGvSQsYPUvGistHZWBse6",
  "key25": "PWHNUoHR9kH79trHpabELy3ShARzJhdEfVPYeijNmtkGetNn3583Nsb9zZ4i9eHP4fW4S6xLqNWEar4mBwNPts1",
  "key26": "4k2JFrnTJqKB9QMnFaiZrxNq5B5wbb3dnxTFn1tvpCRuPASTfkeEMaRgvtWAbsZPYB1CjRAjVZwCbZugfoB9Rj76",
  "key27": "ZPZf7sFxHWC7dGJiaEEUDgzfCAkhN1BQdKZDMZnsxZoJShxb3hX2YpnVuNMpJh6weipMxeDoNAYZ1eQPX9LvhNo",
  "key28": "o62YzCHLF92tvWCiybNB6JXKUXfJ3UQocZwjxWe8jh82u2MsjtfwMhohh13g9BVzA1wAGroRwbUgMzqKUH3BfXT",
  "key29": "2gDZW9eUzdNHQmoDepCi548AWkMoLCty5WQRrHDw6LExbNS91cedRWZCiPx4foBhZAriUSboq1dtoQSjM9i66FoW",
  "key30": "4wNk4toJQTQFEs4jUFr5txWbud4XVvEFAxKDwg94hTAUKqZXMQA7NsAjCw3hSx6MztxQNZnMTnGKSZPJi56g4DVx",
  "key31": "4iqsWPER4sezbHgphsqADt1mWSKtGSRy1rFH63wNdhGZkL6bg1G83HE6n7WJmtRN9C1AhJ2AknJYLQoQJaaGghqu",
  "key32": "489ABxuMUgKYJ1KGhA7NrsGegoroDGwD5rHgZ8zXiihP79AY76fR5JmALWpTcJPsmLwA7Me7taoPNrMKs1zkZmZB",
  "key33": "bm1gHmJhWGni7HeorZYzJRqLyGZKcfXCQydQ3Xsof6dj4fQUSD6cvekEZLo9gHQYFU7mcxM3cmxSuqzzZvRiHif",
  "key34": "UwMKEgwuD3gL45ft7QKLw434mph1sYJRkxnsPQGYy6ncN4hzLXVU11Vv4y2N31a61yBvJSKhLHj3tcTXzAaBpDG",
  "key35": "9UKrUx4FjSTZkgGrhBoYSnzNoAsTjidR2HkJVpV66VH3ywNx2bZHHxHswqJEghYRHEPHgz7t6FoKw31zx3fLbKU",
  "key36": "5PinKomBsViBB4VJL5SGNDN9oXsTBLhatpAcVAKki7RCvG8Ebrr7npEe4cZnHn7JAob98NcaZbpndeBLZ3rQfkA3",
  "key37": "5Q1whaxjGmJ4n36vrX3K292pwty8NepKMGsZK9BhXYkkEwk5k4XMfLMh87jNb4qWiQaLVENiwGJAT1SioPZre1v5",
  "key38": "3jUo7D6AXLf4r3ABNf5AvyQxerFLcg1pdwo2HNc956CFGeAhJXPqEje92MiFuTk3pZSavumfQLWAwbmE8Rugko1U",
  "key39": "UdYXT3N1wGDBqq1fe8ZYuXhRLGx4CkpyM69AmeqwbdsccpSAxutnpXEBVsFvNZWHuJWhLyQGAGr4nFTcNyrjBBF",
  "key40": "2F4Ptjt4kJvb8onmwLnNgCcpxXvo2svREKtvLJoGXDwrZT6dQpftyD6r9ZxgdpVCTv99eU3GVdtBv3cAHfCge2Rp",
  "key41": "4bDahTs74j4sHaBKdXCEiojDnGBJkADEu6ViZCX2Dhmy7tQWwiwwAt9tv3PHZSs5iUooNkVc5V3ZoWQkSowPwjPj",
  "key42": "H5eAeBfd5gP9ak9JDzZThbnsjhUozcEJn45ZYvd7hbfVZvj9fgzm7JQ877o5UgVoFL9gpu57x9rRMQpQUbMpHv3",
  "key43": "4vCH8sfYotJQGsd5p9t9GLKE9Gj2LQGwr5qKKtV9jgaUMPG78SJWAuVtwBX5PJ4Ub43Zw3c7jBFZhC1Mt6MNP4WE",
  "key44": "42qKDQeSnkRXd86VkM1S17FHyyihRAu9yxEq5KA1Mcf6nDXj262XWxjcd17SVwfXjcsPDiePDNZJ7uhJTAoigxj3"
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
