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
    "44SMaCXEKjVdrH5LJQqexKGLRaCXJ6G2hiFzgri88JNWg6akwN5xqGpc2ksjCJVWvtPJVTmAyHbiYJaA2SEakFoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TcEJ1jRcv9PqaCFrzFBs8Nv7yhVWC9ninoQ1FchGh2xgrEkNJZaFazNTY7Hav8tSCy1BQGSzhEZCNJywiQDBRmE",
  "key1": "5zU42uupe8Xykpg5aPsRpgiTsw8NwQhbr9iYT46VPvzaFahS1K4kUcgt3ZRT4Qhcjjbwib935TU9CUoryHm5tTUf",
  "key2": "5k79zQJraNqkT7F8PU99vaLmoxLJs3k2PvEfbN2LTs1KnfRJBkaxmcG69x5wnd1uPSdSQNcEZEpvhVGSA3K5mQaL",
  "key3": "2xCZwpDdLt3QS3PW6p1dQ5szCkBKowufTM9YDE9arE3RxQaFvLtgo8feYYnURhdvNeGAh73Ks1r1SDxjNdMpNQpb",
  "key4": "2UW7SPgu75wLAdnQy6vTs5ZaAGssWUerTqrZY8bV1FwZWESreZAPDfDymr1TJF7xX8aViHzs18QFWA5eGZpeRLhG",
  "key5": "nf2pLP3kp8q9tggz5dp1EuZ6kMX2x9TWDKNfc9TZY1RjrsMR2tuqsZiZxbqg8LPqsQHBV89fDkKxVrkguWNritq",
  "key6": "nKMH219GeZFShZmvCzVx7fTfy8ekWZMgWtosf1H7i2cxHTTahWMuKSe4JXQsEDovz8d9fCDvTD6aPTzRuisy159",
  "key7": "4M69HCycFvHTHyp5VusZhWLYfgsVvTi5wknTUR8Ai633RXVtESQjE8kL6W9zTpcz1nzWS7CDW8dnuuT8KK2eaAdH",
  "key8": "5XRuDscAPrRsSkyWwkW3NBBUs2334tJoXojQvUNKV5VU3h5rBsUAVsVzTE5UiGzj6rBJNHcLLps96gEPmwoZkDUR",
  "key9": "2mihdteuBufi24j5Jt29V2zxxgaR837K38nheZwtndfYaUeVJnQy8SEpsfZWSbMXfty2cvDhKC9yqrmrAJRMbUr7",
  "key10": "dYDhSgYpjN13HiDveRUaAK8GR5uRfKcer6cYfs7sd4vqTDdTyAmmo2BJcpG97AUAn4HEtj6GGrr1afCHs5qNNPt",
  "key11": "2sLnQGVKrNnKukNVLzjqWYgmkMvMQ2cxBJa7bWHCnkQr1SbFfrJMh16HkKmTvEx8Rm8haPQjYqDrD6cd3aQeJ1Zi",
  "key12": "3CRVW8aM1Lmegza6zvUk7MaCnUb9AWY3VhME43wGoEF9k5DPLHzJVureXxgSsehm9S6icihcmJ41S3keoBHxCUBp",
  "key13": "5vKsfAcjBhRxmcxzWsN47z4f5Xgb3DLBFPYHmw2Q9z7Gmk2Yxec6u2qPDDH5mAUj2K27eMs1uu3uzMPWk4fxd41X",
  "key14": "4hwsk9hqFzDgHQUG4L2goRDWGTJG8rHeWwCvn83b2ERoEDwAPmmfaM3dMxHoB7cS72X94sFXvTjhYnFFyfgnfDjw",
  "key15": "2BqfQEmDfY5mPuAbU2b9N87phqCpuQ3KbHb3rxorm4TG8abyGyDvTaFXQ7mDd6Cvq1G5GaquAgNnYzWk2ccY21nQ",
  "key16": "DqLmHeXxn179PWeAS2vofQsxfUZHeYx5Vb2UQ7RQRk15aaZU4Kjbw8HAfRTNsy9T2zth5uwVspBwdGC33yYt6aS",
  "key17": "4DD9BsudLdT4vjsitDHFzfRNropqgvgpWR1qhtWDNuvnPZa9GEU5KoGGPrUL3p51X4q6pRAvQKVxcQfdnyJgRiKU",
  "key18": "5AjB49Gb6g5W3U1NpzfSVk7FnAKHjcreae4WsCnemoyrUDf4pEZchS5oPLVgtE3Ve5mLdR28A84YfvWvuy35ikJG",
  "key19": "2sG2aJ9NhuGy7KQSBtq7KEUR9eWEZ1oX452qmxCRRQkEaUabsPQDoL9R2hqowFKhvCFpVsGXow1VWGKttqwr6Zz8",
  "key20": "2Q3wfGifBvdne6rtTDvdoZwWP4eKGYMG6EJq4r4df9dAGe9CRvQe1cfac5rbKgqrDMEG7pGxGXeAURgHvja35Mcq",
  "key21": "3weZFz3sg52fmUJjQNzzfBWNGkybhvYT6zbZ46xEVcGQQfcHLi9dTJhwNZWFgeqfc4QFPMzmqkVtUzPkfD1kxLtB",
  "key22": "5rkTcSEHR9jZzzzhEbk9PcbeD24zwvhZfNQhD1K3QJ45Vh82sgLWQ3c64mrKfdnCKpXuvgvz7NFTtDyZXqXGwtYz",
  "key23": "5Jic53Xr6qrtmnqrdYHu1q9CrBHaxEeFEukTbXTw1Pnqo1LjqybJ3UsQYirh8SaJiVXPhmAf6CjK3go4pfwk9uMU",
  "key24": "5F6DpfWF2t15hXRKcHaYaH5i4Zy8HNN4ok3DnUVNeu1z6HXZ178j1pWcBt9PWC3z6TPFmXYV5qHWVPNwRqayximk",
  "key25": "4NDHRYvD7ruayuYT7FfTWrn5Nr5Jusg9caUmmfpxqFf7UuKCL7aXK6aX6YofLu4raHDALKL4k9911XvUKohU4yUn",
  "key26": "2MWGK8wyZoEqApZhoDfdoHc6emK4F9hFt8y4hjqVtwqXdNUfHWZxgAyfDMX6GWNboQFZS5D9JgBNYiwdVQbuFGKe",
  "key27": "6ybZPyJ1XnjLXA3muzX65J7ZU5ZfNGbXiJSQ3QGu5pQP9xB8UbAud74Uh2WzJ8kPvVTEsqt5tD3GmwiTb9DP9cL",
  "key28": "4ivWXbi4ZuNJ5dNkNfrJoyMXg6H3rx5kU3vVHKRV9rfUu2ZjvAw29K6N2yiQeiS5AwrQabk1cYufNJr8kQbnRxZM",
  "key29": "5Tt9DkPhMiNwmY4W89u7G2XoS6HaLx2gT6t2Ex3iGM3rR63hbySoEAPeXLtF8gLZ8ZGVYNgF6nZZmPzRuz6ffneY",
  "key30": "2mKjjwk1KbyFKqm8nBJU8kBVnWnjrvS3aVWArjz4KHTMqP72N6g7HpJH6emvCZ9UYE6CR2aQd1zwm7HwkjJJimTj",
  "key31": "5TSm9SMbTJQnyPFGNtDX3cgwGrkgYUA9sgw5XP8Pwq9djBUdLrsnSLihJBA5R1HhLDv87NbuzVhdX6Tc6zkrrfLf",
  "key32": "zJZRqjADvMnzmHGayHTbQNQHYiRsCx7tqQXpCw3kpP2huR8c46Bmn7QxYqrqhx7nxGW5Cs8i4eeKiZvy2J4ohCQ",
  "key33": "5ZaV1o1xnj994UDEM5A2T3xbK1dXo3k2Fx4uvbNh5UEYszkVN8m2kwMy4D1esQzYK72u3QG6PragU1kbfKU643VQ",
  "key34": "5JdyYivy4gAmubzYWDsoeGfosjB1s9HFYTNjW9fpDFyeVLMibyzMf4nm3JhV4fKtooGSMtsbxo6QZetFZFqcVDpe",
  "key35": "3MMtmAUhyPA32hYrPsr5vJcsfniohz1VHJeWUizNV9epsfcwk5KGd6GCeLEK4cb2zT7zm76rC6cRTRUVeq5BxY4F",
  "key36": "5rScNg6kK2bAk6njhA8VUtL4vqv6B3SzQ3ZHsFcwPw6X1rcZwNRzJ1xNKB9eDrEaxuwudAosKS47iAY49CcjofEq",
  "key37": "4LZ25zvjjvcwfWzUQBQZfEceLpd2uAnFkFh69P4D2Wr2pVVPFEK2wLefnGoFw8Q2uE3QN83AJceRN7moGw7yzsf2",
  "key38": "3V3qSaAvRW8zvTi2KkHUCWkqHCDv94X9JCcDtQUx6ABmZNyv6td6BR9Q4cCFRvC5HTCw8F8z8B9HzfdHqgFhxDvc",
  "key39": "5qZeN15uEWKVUkhDkhDrAuea3k5FHWx4do6ENkbxoSLXAt6WBJ1VhhwuiBSpTNUTm7u24Pgpcd4gPFHYkMpNFXno",
  "key40": "4bHZybRn5pWjQXWvvS4Z92X741wsppkGPehqLVRVg2sVp5gaHybuLJnUYpiWLCvN21UifU1kM8JNQpNLXy49fQBN",
  "key41": "4kF8CMgm5EiaHwU1g1baWNXeovxo9Hjpf7zzJrGFUub1Wn1ugDEdDEJkPHV55X7tP2otgSnqXVjbG9yFNCZZsGNP",
  "key42": "5G4jcJ9sYcyhBHmv1QBR658N3VGERVUGxPxnYeXvwfiBACJZGgFa9wgqSWR6bWGNMEP2sEpYw2ZsS7KR1Z5fhhdy",
  "key43": "3dNa3JWRKtjrzx7vWx6ymcK7xx4viZ24c4wnpAcexjfNoJiGvyCACQsFwvpktHYCfTDTby2eBuWkQqc77FtmduK2",
  "key44": "CabBF4K6ZBp4WKxa4Mxr4di3vkiENbmM8UZCg9KaqwSkJE9kLbdzjirhwptoXysUwVdngT8TG8Db3x85Pjn5Bii",
  "key45": "wLorPunfKkK26o9cVNGm7NaZRgtPK8LjKZHzrp8Ah1VBBv8qJv2eAJ3dSp6SLmoa7dyuDqUsv8CM4oho6X5ZcXX",
  "key46": "HJeaR2VwoaRC6UN2i1HA3Jx16Hjnw8TQMD6dhbAcotVe9xULnF9ijtDgn5UxMfrzwDEhco3r5JKmMZmtX95Fw5V"
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
