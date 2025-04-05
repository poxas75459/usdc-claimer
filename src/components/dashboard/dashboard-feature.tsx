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
    "2UDJxosDQ5VP4pD6YG1jYXMju64ZSZWEG5XbnMuoehvDkmH8Zs3hh7YuSrKNBgbRPsqAwNkmQAUYDEUoS5Rsmo1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V9dBaknfCYERdJcomt3GDd3CTDAP2WShmS6JxZYFBQeXCHouRTfspUSk7rbZVWBqF2xUPuFn54rDDVvwg7URUwT",
  "key1": "4pFuhhZ86RqTyAhbbR4dPi8aQWALS36ergHDb8i6U77eVj5fDzKaBeD4m5G7qVaEHzhc71P8S4ZMtqCZsVZ3WEUe",
  "key2": "5raoEEpaXJi9Gq51tDF7Xni91mq1gonkpQbdTaCb6gW5JH2zKgffJ4PbmmYc24fTqehntavdGfTccmkqAMhXhAHU",
  "key3": "2tyBGnWS6NTtMepJf2znSTFjALHqGqpqNseqxQzXvxUUn758jisCtjHgmzUDkwZBcjjG6kgwszrzF5NfN4EpTLfh",
  "key4": "15dg6z22qnoLdodzDbpkjLk3eM78RtZ5m9NidezQehN68Aj8iWXYvHYQqvket8QR5qvy8hyHS1Tkh3Hoi8MQYh1",
  "key5": "64hLXU3uEdzsgr4tjaJTvtofvnxx93fDLz2dXuREMMFdyoiYBqKpZC1hj21c9SExxnVEuPKVH4RwGHZLt2hs69yE",
  "key6": "2B9e2RNPiRwD7fGmwnpzNL9Eu9Bbhe7yWjNXNRTKTEjLActLwQgohDwQdc1nHUKp3SwScJ7ikRJDgW1BZ8ghh3eQ",
  "key7": "ST59h8pui9r3vomb9bk7YKPxQduPAjZWJBdbKkgVR3yeRtWhzbMCfKtppoxug1LekMaKa2WBYPPTF5vnVgQde4F",
  "key8": "3kN8GFU8MiqtvAFdvbWGFaheVJnj5bjPHinHejK1JdJQJFozppTrJ7ighcqtJaPxT5Y1SDQT7p7YieyR71CAr2yA",
  "key9": "2ELFcUii16yNZeQDAVqcQVxj7SbeqHE2gTfmqcCrRByFAUmnMHZkWz4LJmEiP7zhbLuVHkDTR2turoQwuMjsT7Qq",
  "key10": "4nyKUXhUBYo2wfZNRpHjKpqkNpPDNDpRMwdoYTyidRFJ3B4o4hbyuAVU6AesyaPdwDNBS2DtEbC8M35mdwceACTZ",
  "key11": "4QKLZQ3EU3yNsSNxria4jeNnaL68FXuSdEwa3vpiXx9wH3Xr9NvhymM8xsWfsadoPY7MfHtHAgakNYqFPes5tazU",
  "key12": "4pdgANPrnmA8vqyoLputQSFQZCiMhchUwGrXN6QRLdYgv7MsCeE17x2GhvnvtPpcKtSNtJbMeHqcbx5DhUrkqPvT",
  "key13": "46qwmB7aVuxnnXXmjnbQ7YqVpET81BqTfEMd4pG98mKjWWs3qndPvLuy4MWPjSbw3678L6DdmdEdEQZ4buprS47H",
  "key14": "4oaS8UVU4KATb8iEadR2DfCBedUn6yL4AF5x1Svp16zKFBS4FYA1vFdSdHKWrmGsXB2PeBiDyoFbHsmw6oSoLVos",
  "key15": "5js41osrmntZoBgXJBZXbTt7xszARRKGspAMVtFgQEpscBG68RupfZaKEgMXLBaFy1wgWST6HNQd6CQYX6ybDjdx",
  "key16": "3ni8cnRRtbScuRAbBUDT8ffQ37BWny6a2wjfZYZNi2wYKZwjk9viUpbQYRPhV8yxMKz8Fgjxgu7ZxKAdDbBveD1K",
  "key17": "4cNNUJDNtRBCz6KLo3WeWAaCDMNQkpnNSiKzMCgGmzTf4Um3w76o5rBxPYpTS5F9h5dp92qxPLzXMmQBpLpC7RvL",
  "key18": "2uVe17V3HgLrbJTLnKieQDuE2wtkgctCCTh1QmcTkgHduTzrv8zyv4MALVhUNRgg4Jc8ExhsQaLzvUbfxeYJuoxR",
  "key19": "2ih9ZqT4aof8VpuzQqXzy54VzsETBfovNQWTqnTUG5whcym3F1duPnFhFan6ULEEXHYZ1Wd1DfwXesyALjFd9SSa",
  "key20": "54vAMamLpdd8XfmLHYTh42Fs9Pi9qJivjRFDxP4QicE9Lw35MgYVxsvGq2erF22GtFx1TArxXyrUMrUhd1BHt1mB",
  "key21": "4vGKnR1wU4ADjC5nPFz9qG5n261UYA952vDg2eTX3XstYYDiajspgEtkKWp2VNzQMAY8usubjcKrEfy7JXoJSSt4",
  "key22": "2yUgQ2qNsjL4fCVM4uGrYu9drMSJ7anm7q6jTeqFMWqnMYoMprFY8TTytDoBP9LEYfyQ2dnXJHiQ3KzVtEZSKYuC",
  "key23": "3pHNYyHngCtZuRreJrBncU72PTHHA77K3vH7mbbD9Wh9bJyUrQHS6dNvsofMYGTSTGmmrifrUY86oebME8dTD4NF",
  "key24": "3YzWJZ77PUAd7uPS8xLvKLSEJvs3cUdZdfy3Gi7eHjhKT66Jx5ktFF32a6YH8zGHBHamjv9YBBPYQTSefEfemfHk",
  "key25": "2SiP5eefMBGR5im82unMcb5c2r16DH5P9dBEtN556FeXki6XwHJhmZHn5ZY3XtT2USb4BCCMSJFKGmu4fuH3HqZn",
  "key26": "5pKFhDCXmrat3oU3JoMDmEsyABUfi2omnEPxnpXWAjFe8kWrDahH49N3cm77At3bfQvw6dV6akg3n3kCZpDBFiN9",
  "key27": "5gxdAsW8NBoqPtvVHS9tmXJ24dvsSbZynKrEa4ajDkijyaJveGFHCA65R6tqNhbL2NsLDsKG8aDeHoH8BHhZMUWx",
  "key28": "27ibHxrKP7CzBe18e7AneU1DULwuUBFe1y4Vgy3Aw1oJ5Vd8MjCHuCp9MTNVrV84w5st6HBXfkSubwzNSdFVjE4o",
  "key29": "5BEXDsi7atnSANGTtBE7b7pb6JggHreEEvmUjBLmC2nfG1Ak9VnCuDJHb1UW1u4AraPBo2RUzrMbHkzWMstGWN7j",
  "key30": "2dLfFRipbs9DP2deTrtgfLx3cPC3qiTuMNBZLZRBDyDJxxw9zUrvZzn7mbWqy41jesER9J95aTxBdWVdiooU6DSS",
  "key31": "3T4zyjdt1qKJQE8ZcJuhUCH9qX37wC5GQ4J8ufSbKji1UqGRNKTmiajcaetUYEAeys33QgC694E8pSAEEC2xvTTb",
  "key32": "5rkzTYChauj6r3QyfArtSUygtQNyS6GbuqsFxH1H7ikaJPQ7EHo3MQBg5iP84dQS2tSYH5YXUbU6eeYZ5NpJDzui",
  "key33": "mzPcYcXAXFKxuTj3Hot5Qvu1JwzJMXYewujbvL4vdN146ghzqVEj1eLgREdn1fpnfgapwRivC98T3dKLHBGnCSu",
  "key34": "3BMVNLWJXcNqUbujtDmbVzg4vjSH9cDDPNTmtWecrhHTYTsUPM6RdyktZwGxkCj1f6GQ1dzXeD78TCggbiE31ziC",
  "key35": "5nzxSTKJ5ymQnkipuKicNQsoj2H3HHDJZ9vnAxJxBvqedHL2wrXfKcxcdunz2SaMBKRW8hXFrpvjauVmyT4iVkpj",
  "key36": "48Vmrq7HXmJvRRmaj2pcNsyevWX6q4ZJU7QuiftdaiYfPan7njShRL9gq2fUUdjXHoGXsZbDTyRKDz4C8jBq9gFW",
  "key37": "3G4dBNmeUVbF5xtZ6bGRR3aDh87udzyJwWqVobPF8aewD6MTZHofSSBQx7sUhy2N7gPoc86FyqHQsvEiN3mZ4SbU"
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
