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
    "51zCVY44A6s2eBpUKuBMCChEaciracVoEdELMZxpKPhaD3HKy9RdExaajREFBwuKVZq5L7f7sr5UdY9Xu23D4h87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pGuV5HdqKWFyNbVE4qhGEXN14pSmJRVeujBLuByreqx2GFC7UFkhxmhQBDNgkpq9cpMTX3fcwa25wkdfivDLzd2",
  "key1": "95UjEm7U3ED2UwSKLiTHNWvb5Jb6JsdCTG4VTT4ZdTFNdY5DPCYK6mcthSdYrPGkN6qMwHCiUqEd6D2s6VDvwD2",
  "key2": "5hM3oL1rmz7zRHGzYyUZKucGs1N1Q81piV6JtypHuvHrtyeGXoVenHFQTJenem5rF3YJeLANP62fMY84NDGB3u9V",
  "key3": "3ZhLygmviv4Hwuo4X2ZKAuUP3m4Up4vADhrcaFmYbjJsixTRX2RTwru8axgx4npByRX9kQNypmH23GuoPjaszREw",
  "key4": "L5cxP8wToefbgtow2frpvUsUKF4rx8XRmuP8JfEPGoBmDtC4v3yKiozRDCoyXWoq3zDfTr7s2cnEbbNJJCeJjs8",
  "key5": "3pcc8smPRT2DXpvvHxGBXrag49v75pE5UssZ12LARECbNeH49SrbaLnfqBEsnnF8yFsp5NpJRHCVqK9zCTtxBW5m",
  "key6": "aG8b7SxaZKp1mbJwKFbQQACyZDjRTzJDsHL66sz1akW28piaMNibJ5yAwgoj2urY8Y2nUiQ8UXkCGrmsEQ39bM2",
  "key7": "YTYVzGJGsDMah4DHCz8ZLNpomByvn9DykmXo34ZaG2zoVyBZQwHXg6EgCJsUoJrNiKo3BeE2LBzxTPhXn8RRhH9",
  "key8": "5DUnWiw2gvJUbMgGF6nSD8DGtLCxAEMkYUuj7nCJQbcHCsGdyfKoxi1ZLoUjHgUuCKQMBFXsDGCB1BHiDCkfCqwV",
  "key9": "44oQqbVcrkP6HCGyxFPLLZd83e5gHrHETLFAXAcytTx3MFiuC1i4XKnvhehScPtdh37Y9tL4t3TPPNFqmAWBRkKb",
  "key10": "45mL3NqninjTWc9jq8aNHMRsTFRgkM4eW8qtpsQfQZ8FM3S9W3W3ix4Bcy6yf7r9T9zvuz3JCw9eE3FAp8rCJbhv",
  "key11": "DGLaWsd5B59qg9hbALHGMnbmFLzbGwVdavLGLBVvFupfFVffjRoyDoGzJ5izeis7V38HRiXZUJPZtuxrTqPehZN",
  "key12": "47sWrr5z5Y22xmz7oJk33U5iYPHvH23A7SPiq98bvbTJiRqKSATaBFkaapho5svh4epCjEikwNYJtUWAXH4bp48G",
  "key13": "5ykk92aJaPStVVvygcKgVTdUJgjGLpA3vzNsc2Vox9RgoWTPsZgyP6x4qcYhzkUXJBLG2TJyW439okrfRQS5wkwx",
  "key14": "4jmnpfj5rBASWybBnbHzH8gCucjs73hrfAmZvY2fGvDnreibRYrL2HC1JGE23Zw48ymf4je3RtB5apUhSAKgLMhM",
  "key15": "4bkb7MvYWCkNyCYgWqZm9D6sePowYBMWDmt9ZgtbFFfTHhc8Et16SpSGbwFudgCSgMDurESCzGdcafUgL7GjMD8M",
  "key16": "5718UvG8hg2szhtbbtqtmsEuvvboavfwENvpBCFfuKiz1Wr373PsSLJifmmS3hwKcp1ZBpkisUygaZgosLTw94XA",
  "key17": "49nBu8RNtv8A1185z52qRc9Ax4czcFAFsnRhw7vsiYFBZvby9fTuUKQJjnQdbi7AQ9JcJEnjKMsQXSj7iSnpGpUM",
  "key18": "sTSiMvJftFBbTCHas317UhHBpfp3wPE9231V9GVSo2AGjJGrDN1Cy8JU9gxnsijvnRkiCrcCqr2ndU2Ri2XJJNV",
  "key19": "QwQEQ57NAFJ4NfLehGTAVXgLBAn1mMwG4ECXzowTy3ezTKNafhXKjasyyv4ABWw7BrS9QzGuJukTF2JzHASeEHH",
  "key20": "5yTGvDJpJRZq1rn9kExAAJztjC9vVbinPQC5ipKgmM7n1PhUxwn6GFLn7LEw6QBHv4tUyVre2zGPTRArhBxNuGVe",
  "key21": "9CeaWahBfxHWbrqxYGVJBDFKQvZhprciPJKZPyMu6t7DjFhUUipHYt1xhF92GPBBBU62WQUh3TCaL9ViUYnn6Cw",
  "key22": "34MB5miegTt5Bcr1yVVbES2XGXyYUfdracp3SbCZCS8LE5BHJDa5ZC6V31MTdkaNut9gmiymamaVxyfzgRtvo7eg",
  "key23": "24y6XGHpCc7NoBLYK5i7ovKQpu5CKfR2PPRk8m2n2796dodS7P9t5eGpczRxpZk7mQfqCZXU8ofsvziC1NJbjcP6",
  "key24": "NWnSgyCCoJRdYbcSGxaLn4CqADYb2Lr6hrQh7qVNj6UsSmjs8BnT9or5Dk9eHMmt5QnwJogKwiuX7uGYWBcQePC",
  "key25": "4ezcebNNMGFWLV9MFcPX3Fwxh7bhjr7k1qebT3bzAd6H98DvzQdY14wjZ5R52HKPJrveomftXkeskhG4UmvPW24i",
  "key26": "2w9NN9tjv2XGEs6jzSHbPi62vmBDi8WkwjXVgUHy8vctGTL4Hvotm79Cji73BzFphiQ1tVkXmDnmYAhj5e7zT5aq",
  "key27": "57VUFF9aNWAEYh46a5NGpr87tsdVHht1vesP65knvxvPi567Vk5JYzBGcdYMEzpDv7k643iGGDdsndAuo8wC9PTD",
  "key28": "5BVQseLRg8gbUn1Qf9x9zCwfJRbC9HF7uAh73dAJewRpyNG6GdRKJj7hhUJo5nT6Mv3JSwx2Gy3riYrft8wqtC48",
  "key29": "5KQGJ2kRjES5sNxh9SRmuwRnToEJWQBRuCaNqqNPxeCnWcVXUjNi8ukK51W1FrmVrxNftDRoDEGTBK6zspehPPVD",
  "key30": "4dcRcWqvTY4vb5uR6A1hoXfRkEM1SCreTGi8AAJBExNAAju6gjg8Bb3vENkisPrFSfjZG7oeA6RFu4sNce6V9aKx",
  "key31": "2hJeDZL3B9okbXeLGD6W5AHWQ2C9en2MPzo5fCWmzRynz2NAJxXFJFtFTtCBjifMgDGviVuNPFtwLPmq5kCXTyFh",
  "key32": "2tMbbZ4GYeBcgLa9cQMRs4MPu9ER7rhLEVPN1nCq6MbmpDLwHXpa8RodsvVTyisaSM9gUMP1eCDbLuuoUAkGQTiD",
  "key33": "5AUjLwKoj7qtJWpY1FWoPCztpAuUaZ3GfDrpn9cistgzLAeNS8thu2pziCJta5aXUBC8RWANFDLjtQsZCWTj6GaC",
  "key34": "3gfmoxhcpiGTVe91THuKxc99QXvXrUdrUSr7TrRQBHVvkppvnW3PHubhfmJHFKv6YVNiKssmrctwVGBAwUrWWTtS",
  "key35": "66LRiT5zt66SiLg6itdveZpT3fyBLQsp68tnLWiUUSiLLB6o718R9nPDN3RuKYh6x3teuGjbDBp12y9Qvsr6Rm5M",
  "key36": "5VgFXEzrc8uxrCJqH1RfmsctsD4e7oUvjk87Vr8wPLoF2orwBj4pDsGZJr5NVpNeuUe2MADjZk7d42iorsEMEHZ1",
  "key37": "2RiXpGYGqi5s9X9we5QPXMfv49SW1YRhvCdqbc7Eat796ZzfV5nMXb38iLiR26d9PZoACR7wTkyX251YVhiJPRru",
  "key38": "23iYA4ggruDtuXuPHXdLvBM8p9TxN6AtZxMqFsb74sVYCYED3LiRMyDMhfCEqXxZJi2RVXNvaebaUm8tydtEavYi",
  "key39": "5WKCynmiKzSP7AVH33pvvKDHbzv6j8UddMUNubedP3i5amw3FGazK6LasBqLHuYVn41p6FSaVChPgs1rybqvqNFG",
  "key40": "4ewYWcmuazfh5NFGryDBv1cZPSTFJdEfE7reNbdg24J4sAxc8LPoMKedHDeSiLjaX1buj1CxSD9PdMs7fPkxL37Q",
  "key41": "5JHXrZyRfzAjPPzaiWdQ1DRD4E3ugkqKMsfYgHA6oJo5gAHuwiEHWPVX172aNY1aKJbFRYtJ36D5X2Q5dwV5tDHX",
  "key42": "2Jv3Ct1Pckw1FfiDue25jMRDX2gmGSgr9PHWSFK6RJWmRQGzNcer2rTXPaRQRjB7QKiGXyRjenf46gDDCGGBLJYk",
  "key43": "2aQgvpxSJinzMBmu28DtvPTMhHjAgT2WMMAu1NT4aC54ctVQo3tcs5q5a6gG7VJpMzAFFnQyBPYtrNUtv7GCqk76",
  "key44": "TmNau2zFYzEydXxmU4d6KjZ4VTP9zRqHH62uy1eqxeVGAYwzvPdWM1qPDCQDvbNkLoRVi9TvqGX4XYNbzv8mJ9H",
  "key45": "5oEkzWxnoWbqeZzRd9qvDvZERJFfk1B2CeFXL4xuQwa9qewFRsjS4xVBSxYnXMrpYPVGUfaubhLZay5R4KjUE196",
  "key46": "3FbFLAsa4UGvBdTnXjxQQTC2WQThDYEctAk6ehEEugK6RRsxuo1f4TGHJ92S7zS4oZWQefUnw5MU6k6i47WMGjw4",
  "key47": "67hcch5Ny3imZ3wg2WZLm1XAgVgncDwju3bAzvN2CadkwvWxiNPBVz88ME3VrtY3wzm5GjHBBWx2pEegGS3akrNW"
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
