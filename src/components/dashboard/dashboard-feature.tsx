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
    "59Dr4AkDMFyY794b8a3Y59XQbQDi9rXxzt2Msv1qpyyjAEgLbHuqYHz4WD7g7pGFV9H5HX9VTD9aQEGnvy3QSwM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MjwgZ7T9MfgagBJ5MN6hgi4Ee8suzWeWbDdMijTzM4YHWwdnWoDNeZEKeActu17aKRV3bqqcUPJamfyy1vfGRyj",
  "key1": "2eX7kb21e46NFxkUJHrQSsXSAY7EFr5FPco3AifRDtrTwZgck1esh7HtSMSyEJPhj51NRVsBzrgjrkze13o51kyG",
  "key2": "3PQcxBMkzvrmdvhMPoFBdp6o1kvy6yTBwvzkqVYiwyZHjpBLs3ohE2y542kACM79pUwtnHgzPwdne498M5oqecrF",
  "key3": "5WDN555BLA8LoavPRerXZGYV8aPbFSGU7mJnSPdJvNcWmoP5gGKZK5HeTHkDYVC99cTYxNtyvzkdhvXLSht2jzUt",
  "key4": "XvRnA43A4SzBhtRRTEarpou28iaiVit4wddrKuq37s2WKWxPtWmQHvUTsMX1syxoMUAJAQpraE2Ub6L5T3mu6pL",
  "key5": "9ZGqFbykcxvJ3VjaphgofPdSWWAHaxKo2P1C9hUfXk8Vehe4mjp5akXhVuoR4PPxdDYJ7p9Dk1bZz4EMeS7Z1CH",
  "key6": "5DRX9ANG7F6anu9xFatAvHcZPnRjAZNMazK4uYfTHJkKHccYK6dYPvNMSbFGdoSFFBbascZ4qD2F9TSjJyUquEqY",
  "key7": "4T7Naezfycz3aZNgMx8tC5GoJgAKcFqFX7i68ZqWLATSGtepTJqkDEe1FZQR4CuGVFiQfXC3w4G4j4UcEbByz3TV",
  "key8": "2pVtYyxzH8gfSY75HVPrXncniUgVJWErkixDHtvQebvVANai3SL4dLkuNWCqGYVpdShqssDsvir3jJZJNY6H8NVv",
  "key9": "5bqCKtZbjbjyYRFkR9CozVqahasK92HojVPvrWR8HBzbMMVfoVFKAtzfKhQjy5zoNseqJiK7ET1zcUZfRPAmSADX",
  "key10": "598ppcnvVAN9MKYbugQQ59H6KrMH6VRg2R5ARmcdZqNjswpFbXhVGb7HCbdHQp7aqynU9ie6ZXEqNZyzU4QA7qLt",
  "key11": "4bqcVWMFLb1623Kcf8PE7eBa93ZMdxVSSG1gTaHZu3jnt6nu2ip1F3U8cVQG6kJeo7fzSorrVmdu4SWVAcZnSgXx",
  "key12": "2nvajEcyK7gLcy7sCtcTArNxKxPGNTxxwgGXX3nNFJLeUzP6Vcd9roSP6zVxPFt8mP7qE2oGRLcm1mKQX3xVFb5a",
  "key13": "38eV3nLfVoDwXyzjThnKrToNV5KtwpdtcxFyQt9rmUVdvpCEjqWSG5MPPbW36Cgsmrb3UPyiWdBwdgtyYXEhxFZf",
  "key14": "5xHJhABZ4k8JcoWJYTLkvKyx9iG9iGr4ZcLZ2CNgdjxMBukqqnVzRCB1czSK5jmdvAeCW3EvWJbUJQuKHHFvWFiN",
  "key15": "5n3sLpg6SMKkZU2FHNv4hy7TVr3Mr9C3iwzgqfWcGZY8yeQkxyJ1GiATw4pHkv8ewPR1nN1Jjp9W1TBe1ACBTC3h",
  "key16": "Mdhfhqoc5q3iNQgWZEJxy8J8BdnXSpzM5dqwuNYh8Lb4Eg7rSDdJiYob9G27bot8qv2oWx7HnGqdk7o8maiDX5p",
  "key17": "42i67aFRVDhaPpAuAUGtnAVoTdkUBaLNokjeB1RV9RvzUcvQhfam93SnwDqhRzjrP22zoArS5KgYHie5F73Tg7fr",
  "key18": "4RYsrEPjgjn9vyvhwn97jyCFPj9Jh94qiHpAPSHq41kPQTLuigGm35q5vS24EiBKA4tYHPzTwZCK2HHNkrPtCcyn",
  "key19": "4WpVQgz5AUvo4UoTLjBBWNs6L7VVYGbLPVw2NCsA3uLipwiNaZZNJVDF95ddKGmCGVz1CXAJGWs5PQbW7SrkfKdP",
  "key20": "4i6WDbgDUVMLHup7AfmC6rHjFJkpdBqiddqJ2MzpHe9fivxtbw4shv8hh6cuw3hXnznNUrJPqVEUajQdLZAbMSF5",
  "key21": "418KFrkmAjS9PD6QXeVEPKCkBvXcbG31XuY6EuHi9d8VkyPQSPwBpX5b2F6VqChTaTJAHmUgGjqD6SBu71dsNmFY",
  "key22": "48Mf9AtaqqhfpbJKZMtMF8YxbByJEyMXQYB9vgMYpfQ3pviivFvHzuCLaEs5tCyd9r4JZcXG18yQZpa3eQvy7gAq",
  "key23": "32di2tghJW1UD7VnGuTgoSoguNo31e9GRLxRfnXijA83WFmeDGiApFr2vUvh2dd5x3q4CBGSjt5bMGCmYecBfAqy",
  "key24": "7C8DCzpYQB2maVwEqo32vxNcyVXwjBTwhXL5vbMK2DNrzddEvMJnUQJStQrFeq5pQKBioue8tmKkQVKLLUvjcTp",
  "key25": "4GzFxANPPxZKhm7gh6oGLragfBkHMwEW6Q5TLQazerDWpKjNYuHf3K7J1qfhBhmKS2c9X6LWPyoMsvoUSKXzXjWu",
  "key26": "62ovubrNmyzZQY9TuatxxU6CG1skw5oQcrQoyt2WuBQC48JaYYMKnxCzMeFenYVm6EJskf6g3K7dPprxNagmoSqN",
  "key27": "5XTgDKCyZQkBPhCFJqdDQNvyYV1KX2Cju8BDW2ZEjncCM2K1P8bWGicFovVwqk2YvgPk2GNoG49nnE7Q8fMwRA5d",
  "key28": "2D3pHyJdTtQhKW5oxVzftiky4H5c7dew541dgjeNviqJXdTXmbRgoQXprQmWvVix7JC4Vg7VvdBevMr64zfRsSDv",
  "key29": "7yjnNEzjAV2UkNz9GTnjSbxqxgGFwWQdjVjgjG6Z5nyEYh2HbJxmqdLZJ6Sb6Mzp8fGeN3NYeQPnc4eSjR5iede",
  "key30": "2dULPzZfE4E3qUM8R3pp3CAHtwZemgBpf8RkBrjDUaBkWGb6DMQtL17aUxXS5y4NAoT636PFP1m3EPJHixqCS87q",
  "key31": "55wkyvLhBMNMGHxAmFwzfiqRDgH3S4Xzrp5TJXWsGGHpvUhp7WpqTEnLVfQsHuUH6FksKS413xhi7CvFN6G2SNMX",
  "key32": "4SwQJx4iLwWKW6ge1PJG7cXWA34teBs6oPPNw6B1a5tzqXk2ZFfkQtqzp4rhGfMZZ7TBC1FHpmsWNS9o3ZMN5pNS",
  "key33": "2it63c34QLxDhX4wjR65cpT5CcM2XsyhkRByBp2176geKw7hXvbpRQimQ628rzZziYBGqD5AEGqD363c4Aqya97E",
  "key34": "4hKfmBWGTGfbpkH4GgmJRPf4qGrRjnnGZJL1BnQpN95mnFdE22zxgfVPXMvCfhJ64CdxZP4RtvbVUK9C3PUxUWfu",
  "key35": "2nrSL5nM8k21LY5L3TLB8FmS547tkra716PQMnJpp9rbjPogiiNiV9FMmWcXGiT7BunA7KisBfJd1M5mSbAsVyGJ",
  "key36": "cPNv47Euk3pLQRDtkLqVZ9FVteAtCCzv8sQPhJ2p4uJ8bv4NmdSqiPGeHUXEpWr2ppfV5ah7MxXtAQDYqdwFYq1",
  "key37": "5nJBrvkrqubNP8fSggz6BzMinxadijrp1gGTB4KxMr4yMLfacjo8yKFsnJ6yMaPHzpZwxUErbZkLkm5xUSJhmfdF",
  "key38": "4H9zvg2u9nFAyjujGm9xUfh19SWJhyPgVdEbsVuHzsAkGmcP95PKuziJQUSmw4iuJZ7KtqPqHP7oRoDQC7M3VCZr",
  "key39": "5K9p411K2UzEvXosumyDA6b2Uk3i8RZF87GxSXQqW43Zpre5kqrkz3S2PNume3k9N6kAs86F4GBCXiL4z529XSTY",
  "key40": "xambPYb9K5qMoRTrCCV65WTs88bpX1BuBFQb76oe27dmurvoRVGwAk13R9MsXoVpQNcDcvBLtjzhxWi1q1KECv1",
  "key41": "3vRwswZEE666Qbrhr72EaHiMtVLvnTci4pUTGGWAZCuxQPN5S7ED8DGS9scuhdkmhvc3xLafNVFdC5fm6dDycB42"
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
