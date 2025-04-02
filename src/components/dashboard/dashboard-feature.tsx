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
    "4e3UxJ9m1tq4CrqfERfYqVpjjQMzsExhKd73UMNWUDTDMbr6FhBEp9UrQeCkb9wKBaGN8kutDHzUuwTjDbMZDJRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SuG6c78Xxow96W3n4VkuPXU9Ad2UCHTjser84gvUmBDutAAc21y66NjPLXNDcJTWymukSycS5wAzVLGxhjebTjc",
  "key1": "4svqrnf3FTHXr9QyH6ogeFtUmdP6Y8KKoGSPXgAA77bz9EPFZwV4PP2ikhL4voDbsVgPQNfpc48V3khvfqgDuZWm",
  "key2": "5Ccibn4B5QCjYAnAPDMj28NTUrturmxbpkYkNx4ythN8uLsBpoajyrFg6dGZnbjqeB7D5TtvtsAPLxjLZy5dPJN5",
  "key3": "4pE1LePtaPg8gHQTcZhwop6TcY8akB6U1KkTdZ64nVp7mv2ToMwXBjD3kRukBiyuYEg16Qp6e9a5LrDA4xFQQLi9",
  "key4": "3TqkW3Mng46AZA18eSBKVZiNKWau841p9SVwNkN1meDwBru7m5HkZcSxMGyZXQCsHzqK7zc2riUmZPV5b65ThgMz",
  "key5": "4WYU3b3u2R2P1K7NsZorYtivc3s9NiJvYm15RAdVcrF8FEeDYNshWY5NRT8DfnZFwDBgBtEWEpjS3GB4M8xwjHZG",
  "key6": "3hnwoNtSFmgsFEB5YkoyXNXRXgUcwbTQsoikEMrocTW8XnVgjmiLNyQ3BCXwGcz7VozSRNNr8oq38tdhBn5qXc6W",
  "key7": "2gwDGqYfq88DpDTew24XaQcwLBUZSdWMiMCSYXp1jHRujt38gLfLpPpLK2ZSAYCNHsqGC9ifUzrGWugZYkgfbdtL",
  "key8": "217UcNwyaUiS9gDuVUKfVUmiukG7R19nWxeS4edWgU4xuHTqsgZqAuVXfHvKNmj5h7u7ogHmrjBkcqafHcWLEkqT",
  "key9": "4DWSUvBh4MicK58bGQ46wqyeL9ZTaUzi183o2T324dbhjUFaAzTSr98WdM18XanMp2gdBA1ZamT95hpkZJGA3Nzs",
  "key10": "54EfrAg3dDzFs3BpYatSmjsNJEnbHwuS54XKV4RKRKsxmdDjfvygbStyi6LeHMwvJ1qnG4Jst6LkGAJ1pD1CXzkS",
  "key11": "2hkYXkXQLNLD5urYZqxx2wbey3hi4NWPg39dELe56LfbjUnK3yxZJkmVvaEXvzRsH7nR7dekMuUU4326mY1qMy4z",
  "key12": "5iFKYtFC5yEoLiAM5BYAfcdxz7kMtG3mZ4jCyh9SZ5TniWxxhgbZr5zu2hLgRVjNuhXcTHCE1gW6pSAnk7i6nYQh",
  "key13": "2Wuh1prGb92gBgZMGosy1BPcfC4beRFeaWq2anWKc9VM9p1EXq4ZisjjUTNqtKXuUaH2JeN7wMieTEoHiiVS7q7P",
  "key14": "3p6pbi7DW6BDwDycr2ZSfhX5VcmmHcHFgg94M4cxuBnyd1Wek8Yd9RJBreMvLqFqjqvTPMbfbRF4o6HQz9jjoeis",
  "key15": "3G7n7xhbvcxVDzD9dS4V3fyR2f4YVoZsfgRmYiiHcnqCznHtoNKxukUu9Y2qWVtKXpvNTfbTKLYEgi9vNhk9K2RJ",
  "key16": "57JonVkMgvPuMo3nVHezEwoAoRVDC54WyarTG8eFkkMM6DJDnvCXr7mnYxZAS1HMYkRZ15FVE9YzWp7H7hrpyRt6",
  "key17": "3sjhp9TmfSmu7cBy7MQKLpyD74MawaQaJouk9fTJpc9npNU1D9dk2L8E7pzhCY7i65NoEGSYKZwJyb6vjYAb3Tm",
  "key18": "5irz7qaruxunJqHfcvGcwwdksVvMAJvmVYShPMLVxacaav7J719826Z17UmrUuAvsp2NLokjGHUTSGGNAtpicbD7",
  "key19": "3zodZHooCmXSsX3C7H8iuhMQBGzdGqo1w2kYiCR5N1XggSd6oWEZpoWmWn1XLY6N4RuarecSomZDnWxss5NXTyJ",
  "key20": "635FSytnCmtsQZq5WzA31Hb3vd1p5kek1f22hCvHaFnLf8H3UZA2HCytaVqzzvrAMrhorQioWXAns6ZgzNjdCrzb",
  "key21": "27BcghuLgbczBtFxV9LARFPsFQdJ2MjzeisdSyiELCB4SyubS9h1kJW3SX6y3WhFywvHxSDGG2JMkQXpCMdiQcQY",
  "key22": "4YS6v9Tbp2jHmmLoRuZQBTVuKSguFKqeCe3UMvgZSqqwYHgGpYREmncVaBfkLHvyXFHVR8moNV5dt9B8zU8GyeeP",
  "key23": "4pq3BXwxASwDJQAd5EnzEZzckKk9sTwLiRqU1cJzV8JnLMoPBWaEPCDE4PXSv1kcDwW3adn6mB7oJTMLfbtQdMDN",
  "key24": "36EGepo1W7nNVnaP4e9v7wFJ3uLm2QYPVVsZfxHLpBDtfsbuwMfV1GiyxisrwEs1PHgTXGmiePePF3GjA95NHbVy",
  "key25": "3pMoxfn4oHPDSmM8MBSUSHhrfTEXL3Ro1EEhcHzWMkXjy1qpooJM4H3oZqddpunUumCGYYAdtEJCkSoYqe5nmFRe",
  "key26": "2ZvsUKm5eaMtD1S9txAYTqCHAANGU68HMLsdCePRZLSAKFL5j7PJFGpZ18zFn7LwgETMPSxxrszRmmYzNuLcLiPf",
  "key27": "2EzETkVbuXsBEpTxiCESr184ZZ3i9aa69dhqZfDfKjBbWqW3ob553n1FWWHcPV2Z7EARZ6p63nWrwr5zEkMvzM4f",
  "key28": "4S8wjGCtRrcj7qknxXqkvPPjc5etPXoxUSRfFU5DuFMtJtPgeFUkXbU7P8RHao4gTSe6eKt3etzDgMFgJg5BPgxa",
  "key29": "123DtKAtbpdqz9m3i1aTN2kGW4cEVhD3KuLN218tgt11pDwMCtZkSQvDQCnuUqD4NTRtRxN623bUYF18H22JCMud",
  "key30": "65w3t4Tj6awWRt75nogJGeGnvoWi9hYCGdwCT6S8uKPTvnsXbHwqJrgFUhZw6hjr1reVGqizN6HcvvopNuyWhv5B",
  "key31": "Ekg9DcK7ESdws9NeXSC46WcetdbyT2L2AwEsKqeyhEndMiC2stxsxbB9kcndPW6RMVLsNNEoPnM6iwSm1YNfR2w",
  "key32": "65S98CPMcwk2wDAdasEuA3niFBibBqNbG4TFArEEF7jBNvg5GybGAegHJAUWpA2Bo9mFdj7CBASXNUckuXErVN1R",
  "key33": "4v7nzwk4PPfXS22VuW8YjNa36fYzHWHTeP5YMut8Xq8fMMqvcKEmjxthBvXHsfLxu6B8Z3VH949oA29axcHVZXnQ",
  "key34": "2KmfqtXybghqykuosdzcXGp5LvgnT6SYPJi6hzqoJqKoPLna7cZ6kcQfFmGLPnAXATEEwNAy3XJ89NQG39cj2QNw",
  "key35": "29iUvskERpWW2UbaTV9bXdSS4oEu1nNF4oCUkigmFP62CLMLs4yCjfeE5bsTNw4NDMgLfG28D7MBY1sUzEyKospk"
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
