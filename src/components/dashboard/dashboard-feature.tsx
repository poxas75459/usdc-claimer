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
    "DjZDpBWdf3M5Nnz59iPkJauu27bzweMcUoyV6amP1go8sPis3WRokGWoHKYab6FxCrZaRPrvbMrXD7cwZ8uz6fm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4baAfMgSwjtN3bUy6kYZ6srAFxfm7R5NrZQDozRagDsigtimidHWYTn8wVfPZhWHrjM2vYNBFPKjb71ypdn5MQFy",
  "key1": "4So8kTpo1s9g5SeGLx8s211E9P2QNJ1P4UdTeVn2oRTW88G2vS8Bd6AYDzvkb4TVb8Vns4mkR7LhFZfk1WsNCfek",
  "key2": "31bYfytLMYM13jwDoivjEF6TWZzcxXHJUehyGYMFpE3CX3scj7XYoxrLBENwuRzURC3F1BRxftFmkBRaLkF4kkY",
  "key3": "5Hw4St18JUHJpTuxcNMsojzXD42uEd7ELTJ8v1xspNSiBdXrLHjDzNWfLgjKUCBPzTTYdFAi2pL6T2XVYxw1zq3d",
  "key4": "WLJrPbdCAu1u2aAmwVvKKag5mZ9iKd3w4HUE9Am8AeyB37KTbhxtwstfRfDavrq3DFfWnAPHFyHSqCs4mkbYjXY",
  "key5": "2nUar7jFqLWdDNpBeducZKpvyVXQFaTk1BjwUobzZuBYe7KafioxBa3wibkrb8necgMZNQeXyjjK2MjVDRwiw72Y",
  "key6": "zHgM47CYt4FwWZHtyTPbQp5rzKsq92pnRDqq8u7FP3FfejbCrUDMsKunBk1c2P77pQd3zH9jTU4eXRhdHmvakvQ",
  "key7": "c9j3pRYx7CT9HWn1gWbbRXNngSpGKfUhLQ5sRxVNR7WbnCNMTUKKSXoc3dPSFQEZU2mhdfKEurNKqVSDBcYxviZ",
  "key8": "5NW8e6hQzwgMGSCq2FctixHXALJSkNPLLFwrHffGDVkPPr62cwjcRqHx5YEwt3GpvXL57BckKPkf2pSPaLRV7HqK",
  "key9": "5MwRevavtZ8CwCyFUU9whmyQe2C5bmo39rVwv69TAaTdNCddJGZgPjb1CuT4i616GG6HKUYB68JZrAJUzFyNkJ9J",
  "key10": "2fCiPwguFTEAPsWhHgCXXQwoV76cpSj7ahvVvopHPMXbtyN3YuzcNXGLqMKPBQ9rGtaEEu6FnHDAs6Hi3vd1t2Gn",
  "key11": "4sTE9w2KJcHAtCj8dQjRz6Xmmbz9KntyN8mHqQjxz3WdPfsnP7DB7b5Z2Bfu3xVSydL3JRUPLZw2H7HdGfaeTv9L",
  "key12": "2MEzTaQMsN88Cck15Kp6tyMM1ntJsmFitfkKjndbYYFrgdjmSBHrnMitGt4EipseeYZUn4NagQQEhrFAceFzMN3G",
  "key13": "25jhTtc8BaAocse7s4R8Yt9gDXXrKnHdiqhk35KSY9AaM11Efvp6dgUWTofYsvCXW4VnAt5CtqpVahKgzJuoDPs8",
  "key14": "3jVj8kW6mWgtLPQgT2CKyU43aJdFbmDT4vWM1FHGABiB6p5eDVddgCf3SWhvBbg9idLcJXHgHcUkxA11ei6Pchkc",
  "key15": "5eNz2u2sU6oomsLfSJRgpgLoH8UztTkSNcfmrVQDtf8NQHLstv2q9rPrQQaZU3HjhmbKEPMG1BdrZQg6EQ9JLRCj",
  "key16": "7z8gwM2NjfeNSVEiirz3U63aUSsvg23R49DFjM4QePmJUXmvSYAUFECWn5SiM8CkKUJMpoiBt4ws6if694d4HDt",
  "key17": "5e6BLcMQKu6pGTv4JmLgcKwxtF9K2hCXFsMDnpuyMLaErj2Fm8614M99ektvhNpnN9byFKewFCxMThWfU1HJrsVs",
  "key18": "VFGHQo1wxayBM3ZoVEhfWCJM8i38Uxxan3AoxAb8mHYJzTG5gm2jMRhsTamSP3vVseRJK1N32JSiFZGUAX58FDs",
  "key19": "3vs2uNYu6VAiJdhqZa6Q98P6ToTFgSghUPHqgC2H6j6epbXBViUxymh4XqajZXt3pz3gpLnZdgTfTgqmv1yTJq4X",
  "key20": "qx88piifNsVJrSXYaA9zchHY9LnYHCq3KJRReRvREmS2sqn5vAr1nbB6r8DzYEQzJ2Q7S9xfL8z3yvQzHwG1XGY",
  "key21": "5cx9zddeu2bJQg1vg5Bic3o1z8uNpNhh878woX471KXSzUq3636t5ZoPXbqbB6ujmm3ZL18XoJNf9FYujRwURPvS",
  "key22": "3UeQduKP853skaSJRjPfqiCTJ4V6qpCzCGZht9PzkD8p43ZKhZTLYRm9531UEUxPoguhiezUbtZkAUNA7ifU8UNN",
  "key23": "5RcJGKjUTP5GhsyxPFB1YFegQwwinHyWKEtJngwy5yuYAXk5KSSTr7Ne8wdN5pGwrngVVK2tqfuxhgfcqeUZNJBm",
  "key24": "5HAdnammaa6CU9AmqtvCrxKPW6Ry2SSTPG5X5XMQ1WV5dcTXskyUkbEKS4zHq4LaNjDkXm8ZA5Zuux1x2fEwso5E",
  "key25": "4TzgURoNqG8qjd1C7qHJpLt5fyjNkwejfphi1PEyJeRQSiQEtcXSk1vzz4aiseqvZhNTWKdi2Z1pb6XWmzndF6Nz",
  "key26": "2kj1rsdi9DcdnSph1MpBTpECv2Mr4Nri6NscqeXbosYbZHJTHFw6AwNseJXJYrmSobDRrqqTfduR3tf14P6MajGi",
  "key27": "R5tyW7QPDAuSKPVkkuVbMby9yKweG6H5p2txVVE3YG2avTJJpgZY3oQqVKaV2ejNRdw76QhuU5eB1ck2E7E5oBN",
  "key28": "3veEGHiKPhaEosP6bCd9BHjK43WzfQZZpUdzT1HH3iNydVd92N4mBLBtF3BBoe9EjhdmXCpuAfSaiPPucsTBQHfH",
  "key29": "2mfGWAvRqZuddJpQ1W7ptboP61yt7qGnixT2s2x6rSQ18QqGvy84hgebELKN8z3jMff7t2wdyzpAeDcKkUKCuLBF",
  "key30": "5Hr1L8oHPXDbRnczgVNHUq23ghbbi9VAXdScyomwW5cLcvVxPv7yonP5nnZ3V9Nnh7TQzcKEWQ2LchJxQqCiEbHK",
  "key31": "3J7JNxh6XxX33on4ybmGyDfE7WLjTysV9pcw2bfLu2uo7o2FGiin2oB7xhRe2w8hV9NS8npa1KjfEQtJkJLagRpi",
  "key32": "2e52M4YswGLVMXXJ3wABaYEKL1KxGgCVZRscA7Xo6yQW6MhNtq7Qh9ztsphSuDGWnXeXPkNpNQy5vQERpGw7AzBq",
  "key33": "xXP4ogq2HL8K72RRNRbGD9sp6bwUYfswWRn5zfYeWZh2wPMCqNxeBpnUkSUAbyWPhV6r2wMVhpdhSn4f4gJ1tPh",
  "key34": "2TPbrhJXuDKPiqefii9FvEgtNDMxKy74xNFUaJPwBHAeiTQJFTQ3W7RAmfzH3jC8RWMrCg3PjYsppvjdrEDb5tY8",
  "key35": "gJgFMe1p7167rPcFbke9aEe8YBrTiZJLDYUvvdtUNDjG4zNrc7wdjdgnaqoc2JHUwqbxRoDYbAbd73rrrjj81G3",
  "key36": "5tYDCBNdgqHnJifQb8uo6w3DU1pRT4D4JTQVgLoML7raAuViFhQgHaW67dr2tA92DDDdmaLSwYygeqzfyebyMk3c",
  "key37": "5LAAXYn3Tza56naokq74Rx3B4WPGpmqR7nfZXb2shD1UNSTn6ZrMqBEWh3Sm2Foy4YEQzY4pLMDemAAHsWHJhXjF"
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
