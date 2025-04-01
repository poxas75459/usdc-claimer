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
    "3NbPsLugdDjG6LixEqudkGzrBs2JtmHHoFHHTXoSxPV5e8RbLQTDHW6QJzsLFu96VkNpBfuQk7HSoRC7hGMLMY9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ko599sV8fBj3339qRHfbMzX3nTumBRk5ezAuif4nZWZ8ES6YaUHTzcS2m9L9UgR4ALn8m6132zdzFvSUZbpvq21",
  "key1": "gPgL29e46LUE3qKhBqPvsp5h49YJEVUw1D5CkvoefZSCmoFM8cBaaQf69ZWwU3RCP5eciyqUcmbwCby3g45uhT4",
  "key2": "2B6bccpVzubk6z7U196Ncev3E2axN98EyrrVFyyu5UvseEtCJpHgvhUtcFPnbL2UkW7MjwKa7PfNvwqhLZ4EuKGq",
  "key3": "52ZPyKjtDLR9zWVkg9ikzpNeBnRNYNBHU1FuMNhg8mdXFmk8EXGXDQQdpUQ5phcxRgfCssk7X5tHjQWGDRTWSAVE",
  "key4": "3DBsxLJpjhr13pkxo2bN6QEVcRkiZ4qPAPZUtizMvJpsRq41M3ZKsngjDydzZpFMZVzwf3csGtVvGDkZGkzEwppX",
  "key5": "2rbEvehFKBbcV4ghmoA7A9nRS9ArbyHZFVqhJ72aHaKjnMnhRu4HhMQMgUuigsQEcA8r5FM9RmNWWXPvoguxpNKt",
  "key6": "4DWcx5QXuruNwqH4cR8vigzwEmsireqVzpg8J6TpofdNLGH1MqhLH9LEfbz4T1awJqQ5RjiPT9NTvNZbwNnQTiUM",
  "key7": "5uCrbtx36awanHLoQ3ZtvQ1QGqHVstqs3kft3p7kge9g8Pn28wMWW9WEU9LxuSC1gGSq1qgTxj5kYmxMyLbuQPiL",
  "key8": "3KCeFGAZaKtiDaeq1fojPKiRedp8qg3wi5uhZuX3KFqFmgErCZ6xF5wqt4oYE2ZydUZMFKhBkeDyZtgdZaugKRqz",
  "key9": "5Mrved68jjGFttn9kkDpeKrZEBibAfZqb43dhKcjRHG5or1cgrnVmjy4ZgzvBhQXygVPtp5SrEqVLjX5qnRjSAfa",
  "key10": "4ummtfLSK6mMiu4btCFADT83XDXTxsvq7qx2pg6Vx6fDUwh96VS9WCbu9eGcu8TvcqB1UpqPt6AmKTC1jA3jjN7a",
  "key11": "QesFP9x7Vc66ywVLK5WCgLPKLvp396AFiaCtctXvx9EUCygr7YuWburGkA1RLpTcNSphWNdXdGSLordumLq3zJy",
  "key12": "5RS21BS1ZJL8UNmnvxKEFTFns9mS5gzXgBbqwvHPRyFAScHFZEFV69S8RKyT3qPDnYxGXmB8qYVfvNGqZN4y5D57",
  "key13": "3Y26RiQhZgcHZfukGQfrSa1s537V7siS6DsxFKC1jotC22DuRQmRuoDNHV5w8VtW2n6GwzMsNYVbV6r1SNDroH91",
  "key14": "3DYK8vA4QrJ97a9xBi5skSekz3fwj9ZiJEAvsWV2RwUXb82svjGiF6WSyXF1SoJfofVDnkAtAg7t3r8x5rsYBdXd",
  "key15": "4ZAYc9avskFPN9WdJFN5MDYpF49mTcB5Kjp5m3eBfPjV3n3iuWhH1NxNTHEWo85SRbtfCb25vyHyDqdmeddGE2ea",
  "key16": "2A7JcLy56tkbk1Lw4JuPpwboqy93VrkcCP9pNUENb8Naop3ugeNQjZAQb9AAEWomhbKA53vRfvtWQ1mEfonWmQBv",
  "key17": "3hdNNSSUU9rY6Kiz2xGwXdkhyShtgwRiUqooDD9wvPYtPso8nw95riW5WyrAjEZifBpk5YZttXHD9GZebbo1X4JS",
  "key18": "25woSa22A1phBvBkmHQndsnGyWMa2mQv8P5DxC9sKcxfUaiMCzGKMPCcbFAChZvrdRLDRrz1ksDWmbAffy3twzyu",
  "key19": "4H1UKxspEHPayNtu5AcbzgyLKRs4U2bMXTRvmvFALnAjHYnxNsykAfk3dRDLobLTQPweGfTjC23HCw9R1YXafEnM",
  "key20": "3Nc9nJ8f3t4t6KoQyhj6firZeR324LFzAdzi6yaAqYf39dbsrx956mqWasEFb6pf7ogcDda3F6BegBJp6rnMJoto",
  "key21": "3BeKV6WfnSSxamrHCJg3zcKko36fgfuNZUB5kMsVnetUafq5EYQZvsUWNT8XUgRCnhL9ELQbn5uQoF6kJ7RJtQbj",
  "key22": "2nmXwf7U4ZmUHZZzLjXwZscG1KxueaC4JYVgT4tkiL43QEHfUC4RRQKPmMbQHRj1t944R5cg9ZUvfLkLB4djGp1a",
  "key23": "2XuCJLi3U6EhL9D2XoGQoGdhp1hTdZwYGTgSyzAuWhEEbdgMwMwhSWer759XKBuVcHdVRxwpAP2uutqDuXLkSGqv",
  "key24": "23SqWumkakdp25ZvD19qSJfyiSufzEGLNzi9SvidJy3wkhXp8jqjjC1Vj3GgX52aU59sWWWHL7BYNMYGtu6RvPB5",
  "key25": "5ksfxoiyFc8nLdtb7JLSgwoDTHXxSF7EdnRWRcoQ1qsRD4uE7G6GggkRZHHzS9jFXurN9epMcJbWDx62MjPR1XoA",
  "key26": "3rsGXgw28EPuodrsTVivPM9PWhjs2nvikNFAZJYSjagaYm5Jn4jfPD6zkh9hEcfmd3Zj8i9PNzgwdzJdx7x3aMno",
  "key27": "3eAvypF6fS3bWiNv8ChEsZ2LXmAePeYqYkX7X7UjthuUnxWfF2KjgbXR3XAKbE6KKWPyXWrA38N1z2dJihr1wm3R",
  "key28": "5CgnufE6v1G2fqgAcdeb992rMfgQpfAF7G7BkW56317ApPSFZkm5hSg8Xu9DHCKnBfN9zVzZmB5JcH4vLgKpWEP9",
  "key29": "C6Q7wC6WN2dSVw7mZfWACxRdubnQKYR7kvB1kF16dUCexHkDPQ3PMhXtxvV4tsqcAQvfom3mT7eFj34S1n1Y1QE",
  "key30": "4ZDivGFjNyZeMSRBJsYYUL5c3zvEvcC4zvbSSaqWY93baTXRzhHa13D8Ws326EbAKzJfawq4PWAmGcF9ppZJao7v",
  "key31": "2Q9ZjTX8stTzSRH8q95hdPHo4fDKNurJD8WUvuj1Amsiwjx7cgjpxfiB1Z8QUdUpUhpULhzHc1oSXrSVkWRHAqKV",
  "key32": "4d8ezspQbvFUtfHJrzHe8TG2d6ZaP72Q55E95jzHinHCuYbwuDDi3eUKp5cHRG9MtLbZ5N5i8KbSa1TrX68qVPp9",
  "key33": "3t1ZZQtvX4cEAZtNLM9y64VwGN9NDqAxy2ENhoVdDdvEsa4d1XoeKv6qxtmsiE72bGmwiWWCpNwu1Ns7W3DunhgL",
  "key34": "J4Z3G81KTnTT94j9DqjDMPqriCaPrFHZ335LBiVzRk5MCeHuWymZG6F98oATj1QrEE6jwTBe1jJFNVTs6nTqvnY",
  "key35": "2ebLCLuAJbhSgWfhnZo1WHXqbBGSXoLtqyVMAAAPhsJdbVgjMXK6MdvB9UksA5hjDgAbjqsxArb9nDhHR7H1sBAC",
  "key36": "5AvWkw54uriiyxRiJFWyh4tutJRjh2LaGhiiu2fpkhbwsXhxSEbY9r76FgWHEdpBJauC4yWTNvzLSJBNTLRbYG7M",
  "key37": "2pHALNxJK852tFVMChzUYV9ctqy1WFXPpv4gPuw3f7C8xpL6BjmMnAiYDvBht9qoisMFzosuFmuepFUbTegxYgte",
  "key38": "3Ab5Wk4jXN1VyDnKkVnJWVB9tiHnh7LrLkAnfwkbVYYyX4GX1ZU5oy9Tf7F8TvMaxGPTmx2djJ72wbdSy5Aq4guS",
  "key39": "5J5vnSQtAeN3bB8GYoFX1uCGDHr3kFpAT7fvktRrVcY1CwDFSFbdsz7KVyB5xqy59Rhc4xiTtctGda2nh4h4n9PP",
  "key40": "5bFaSv3QdNM29XD3Pdcau3zea9XUJ7eo2hiKQgPdjd1BDLbjiZTPkaSrBdG6mFXfyHm5t6THRj5hFXjmeAUXbpAU",
  "key41": "2foAiwhDTLRwawBH8dTJcN7qd7w1wZzbJg6XMKKViuWMGVfhejkH9hY1KT2Cz4bjsnJg5mu4fFt4X8rdJBxPPRHC"
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
