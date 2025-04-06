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
    "YibxLi7KJNhRo8T4XoTxCuuJefEme3GxRH1w2pKizi7iz4hne52XMKMQBQ11vvwT1rsxSZSq291qWYJzk8kmuBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cimF2jr71mXPmvs4ZdwTqjA7BkDHEYKAMqWzZK6aFZEjzxhdDjJYVM4ATdxv3NTC9coEaLyrhSeUjfyqZxyHhd8",
  "key1": "5Hq9e5g2UZjd4pFQRLwB8DFP8vno1EfEQ8fVhhZ9fdL7yWS6LfdhdBZjjj3KfnSMLxcqTGBReS9PGLrtLj7zJsfN",
  "key2": "3jinAF8ADLa5MbvGNAqwcPPp4zBFwSGTwK6bNm8XB29VoekEZCkQyobXDY9mstGafPzzfNT9VnP5bncR2n15LJ2K",
  "key3": "3R1bHA5akyt2CbeTMtN4NFie2uDGFFfhwpGYfoaM6iW2jyPPonsDz1D9d61z3pSPMHoYPR6PHzn3VbJ11FSoA96j",
  "key4": "53peHfFmQqEuUoDysg79YufvbF6XyrYLqy3ajz4m7sPS4rDWPtYdTRqsTo2asGDAU2uf5nGHzype5MeJjSnXpZPb",
  "key5": "5b1s7iXhBcrHUTJVV5Z4AgtLutDirUM5WtSjnPsPeLzjJ6SuahGnQ8P4HbJZeT6WiCXDUFnbxceoEoxW6afiiVe5",
  "key6": "5HZLM623u2xpH4dun1v8VG8bypyzT8uiZj2JncoUVXsUVGKV2W3fs4QqmcNLN4sjdKnyE5ZR1FNMPGAgwkEDxq32",
  "key7": "5c5eBCJLibZBcUyUPYGv7ezHzEryYFLXcsVit4f1EfLNqfLRs219UmjSrCQLNvTMSyQn6mxsnLN5t8kmsB4Tpduq",
  "key8": "5XNzSa4r4UYBeZQafVBofroeh8sTACEQwptz6ghy1NkUcNncAitsgJCha2YTBrduzfm8EVb9ErymJcuQGoaFkDXo",
  "key9": "yB1GrzuufNe5UGSh5quMCQsmHgrzbNb3Qda5S1rJxWENNhCrkaHKij5MN8seQqHiYr9dSD5PgYE2yUjXpoTL7K6",
  "key10": "2qBBxkDQhwKyzR1r3mzbfUpFvwnPDxXnyDcrr1XtTgLRzhuUAaxAcaZYThT3n7KLHCL2ySJyVBrJMkhAVVq1ZejS",
  "key11": "5AAMAha7upCDkxkut15QFu7SGVpMx5QKu7ufDsBRUTirD79MdiNM2PSPPfNB5VSe6QRdFCAU1zqWnmPJ7dewEMB6",
  "key12": "2vwjaexzXLkSt56WnDU51dSnRyhGTDdvNDq2UdjitZRtBp6guLivFdbq8LxYjaJTUF33FcqBbEuwNXu39nH6n1LL",
  "key13": "3gWCFjDADQ5wZins2HvdB56ybkehkJ7xYx5EE5XUcYaVLcoFuZbQRyFE6v9KGPXpDGsjyL1iq3cEgucVbf1MgDMP",
  "key14": "34KkPhQwq6sGe11fEB3MdqKPQPTFUKNmKq1RGo4nBPGG6nUiwJ4dZ8y48k5xGfoEtxVEi5SpMAxsNwP9tUfc6fbj",
  "key15": "3c9HnwdWeFsqP4k8uFsvNm8nppxcSHaMJkAat7AgsvC9S3HKU3BJxd2faxRT2bMt6uC8p929D5mh4VN2VAJeXwp4",
  "key16": "2P13TUAFt7UQ89Zoe6BxxNJdUPavgBo9vq8TQuLpgkxwBh2YFyzJMYmLw96qHvQdRx2RdLvwfw4xzT5Yg23vwUp4",
  "key17": "59y6x34fGniCofJtndQzYxZBDaPRXtq8KePkz8FK3nmcSZmHmqKhAjQcvDXbTop5er4kHRWNda38TFevEEkCE581",
  "key18": "3dKrLs5MCCfHUvAKixv7Rr6ktPv5jU8aq5DqY4sS6inRhfubvVoEd5yU3cH7nrqPxE8w1aWQiyi6u1TftnGtq1jC",
  "key19": "4UuoXqbymYhzeefpq1Zz7KQugy6YXyeUvUuMog5wy21vMtfMdbaGeYMDs33PpvT7gUQGpixZGdD6kxB3zCA7wJhP",
  "key20": "4rHLG75mJ8swJDNXGPMJXahzfu2fjRHEvH41mHmCYF1K1SihHodAULfBjp9nezku9nMGcjMsxDpMCV5eaMEHVFGn",
  "key21": "5vuNFusKuF82Mkk3v6iA3GELbZp6A3YR9s3pqgkPEobmy4itUvC74iU1Q3M2KiPQewaDR4kUxTaMLv6E6h74kBa5",
  "key22": "477KpPLeugKci7ugbMpVy5Qxg3tcMP6inEuWdegC5LiqmcEifk97VSF8KqjQNZm4p3moAYuLdzgjM2eQBQktQ1iv",
  "key23": "56SkUVv3Qm1RgwThVW72jJCVKz9BZWQ2QomBRG5mPUtxhgKBEeTqBhUpuWSdw2MrQbUZyTuut3kFRFJesRW2poKP",
  "key24": "5JZKBGhx1GLAjjS6ojWRK7xuz9FKkh8eJLyhjSGyE9z6ke3pNRCuPTQuN9vA8xU4wPHfVZ6R4xFkEHxRt7Bb8mYe",
  "key25": "3fKZEhcx52RvEoqUfJcCfVM6cWLT5Ax8ZYukNdr2eCfNCcqDib7Cj2s2ghB5UAjaMnFczimSSBfy2ETrqdujrdCD",
  "key26": "4zkKaU5WcSAw3FS5KvbMCHXmPdvV6VcJDWaBzsJKjMjUj5aanqCWqgBg8HH2jVuFTq55fFRAGHsHatjaQgVVSyAt",
  "key27": "5aJ881ktcEgownZzR4TgBcmroB8MHCiGTisbePF9T4MrUQR6M6inP15jPtbhjrUxVv5Px2tFzGBWV83CZzuRTWQJ",
  "key28": "37Gkax4BjNPYt5gfqDXXboXPVfdicw5B4C7MBrmj8H3BUwPRHfsFhH8jBmWU1wBrupp1ium9ktRa9nsVr1REfxXZ",
  "key29": "7cEmaz17qypZiKMwfHRYDRTJiy6EDPyoxuf82Qu5Hh2hvssaoPvqJcECEnUUtmKbEByYTWt8e3AEwaPiqxAEPZw",
  "key30": "2PXJ3F8NnRuQKTh6NgfFy5rMZWR4cStFT3Sad8N8kdCUhN1MnRNUAFqbTfCuz6rx9RgWzxSY5PkzShoj1ERVBfTQ",
  "key31": "4sG1WRsUqZDrh6Emxf2mSUvBYGR1n7Q55Ufu3q8rsqWXEHvxcvjoCfUpiCJ34vkPXyfDnKiKzqw8UXY3HeFcotHk",
  "key32": "3Kg9FEb59atqwVu7LBNs3xGutZWLaTRTTeThxZyw1ysEmvEtqyfDjtfG4GrLyZKLNbubK2mDE4JauShFihjR7TMM",
  "key33": "25dCqrBYqxCNQZJiA4WVqS5HjCtPRorBCuSftWi4uby6B1L75hV42surmbQ8sXhhh3dm953WjHE7Zo2mtXKiHBWx",
  "key34": "e5fyEbwEwu3ksNoNakstDX67FicHyGkMXeCmPrUrwP9zcqCcje2ZTqnywiurGFEqqHeTpY1CRe21XNgbmK4w11W",
  "key35": "5RnHNrXtcb2Gu47KwjanBTWS2VVqBudd4qYBoyYBiooVkp4TeCVU6e2C1K5Fmz6hh4fYHpgTereC9c8PCjznKR6L",
  "key36": "e3TGAcUFZEPKH8uhYq4DVAwh4Zgm49KEF6VwEuLhE9rVL163AYLcyr7CHQs9JAnbcwUfCkZHLACyhe4JgeRumGT",
  "key37": "3BgKW8s1StuVtL8Nq9VE73FSfagPhuK935ovUNyKxru6JAHH3u3LYYoY6o4PgiMGeGNWELJvypLYgNSm371w43sB",
  "key38": "3g161EjaW9R93w1iH7NYS1RPJgtNqAN6JwELuQTNJ1cq7GTUZ5zXS6jXm6k9hVAL2nrtSoqWeHuX2EnqBQTMrHJA",
  "key39": "3JHoW5f6v3UHnakherYdFuuL2kchtsT11pHJPgPt3H8sN6r73GbZjrwXQYtAWQS5SEiCR4Sbbtacnfa7UnfQBHW6",
  "key40": "2BCuEoobwfStR1L1nSfNfEJrTS31GswfKCTjpZ2eJHnKqngg5Y23ydRgqN35yYFNKqvWgqn1gn26y8f56S8PVKrW",
  "key41": "5QUy841uFwheJrJVc4BY3ZsGh4t4jYt5KcuBgQqKsquPxEZwmRDRUCQ6qngGRswcKwUsCtdxfco7qnwzUYpU683Z",
  "key42": "4dnuv1fCZj8swbviFVLzcjSG4AHh3R2FhxSpBDk8EpADqUjhiwKY2jcZ9kmAsk7nGtijUTTVAbb59p12RdbBEwnT",
  "key43": "5GjZd5Nh1hJPW2DZjz9k9nLeNesKC3P9zuD3RjQ4roWF56f8LTiwEfXaQSbPc9kRRVy9in1zuTRFbz8Ba1vEPgVN",
  "key44": "2SfLV6UbY1JN4gWwuP8FCXaP3ohLMDxHiw1MFPjPbBVFUXJDEJ8HWKrPVJdm8RaBfibTRpFgmnCUnp3XzTz9L3Sh",
  "key45": "3jb5fzNXnbrDYJmfE4BtthytEL8jGjPp5GwGoGrmfQ6rRsfQkUmx87GQkzYtHptV71EYev5Qgk8FjwZNoZGDqGo7",
  "key46": "2EABnkLdz8hk2qdaPy85USifDWGKt3V5DaAVtAKbqcnyCp5DYx1WMAQuaeQUf1fY7EDiv3rki6V8jBeeom2YvrsB",
  "key47": "122kb64Je1uFusR8JgA9UGCsbagqQjorpjPayovCK76mBsXsWC3KUFUp86Rwe4afDDJpXRWnfiptB5mkDKtVtQCy",
  "key48": "wmdWyCrjwksRtHGYAsu7DHnfjvMrk6PLTKdbvnhPEfPdUHzAUzyf6i5G6WDba8eMRnyWmimGxEFMPDjZYpDzyTf"
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
