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
    "2k1Jwzvdiyxp8KKqjyrE91KZ7ZNCy3b46R9F6JfQ84afig326JKgY9HHaoCjXyRrGwtnKDpWWQxPTHa52eMvpoBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wESwjTH2qwwHRZCDi2uRB7UPaq7V8sMdU8YZEyazVVectDEj1Pp2GE233xK8fd71xcsXsb87337GxdNBJmDxMSi",
  "key1": "2ARtozZMC9rBkKkL77opRzzDshxu1VTaPedahqhL1YqwnHy6PB2isEguGVzEMX2KFohskTT4XwGEvDxUZZjucoaE",
  "key2": "5jvouEDAFV8Nbkg8YWJGoPo5erpaRDCFMKUQDmETj8NYXgUgEKu9pA4ed3Ns9YT7KQtmGPcCHSJ2cczu65T5mdXs",
  "key3": "5LBaekY9FUgpvMfKFG6VWMh1fLj7S7Pe3hao3tGPPr1ZusKWrs8joMoGN9wwCBSvjtfJ9ryWeFfPWoyLJMhtQLFX",
  "key4": "sFEUEhoas9c4UCMRK7AZdzKMySLS6pUDji8hQwLYrEjPG16xciPW7Ef5FLbEpQQFxLj67xms1XBqbwGEJwxkjcH",
  "key5": "2QWAVr1p4EQPfYWS7RNtAZLxiCfignyvCk7meWXWaByNHEvCvm1ff2apRkcheQBbs2CxEoxhDJHT1zusLUG2X8Rt",
  "key6": "5ikMeUKryMuXuXLSPuL8adxhFyZxTZ7g6yAzG7PrSwTuZ15vDxPaBqx7yBEJJv1Fo1eXi72xAugmVKLhMZkqraG",
  "key7": "tj3U4stQ5TFbrXSHurfXwedng5R4CFmeMmy75j9CKd3tEfCynxPuJytmeRVJqAEmZu2D4TAZQ8zGiaWFnpaHxWC",
  "key8": "2CytyDzAC65SuoN5Yb23UhGk7T9bqvouWjSfH4EhtpDvJWNFdQQChob4Cc1nrzNq9NbwZyBJ9e2TPghjNz5VvsCu",
  "key9": "mj7z5kTewbd7FX9Js6urkBwBuWYBLWozFnSXRpjQjmgCbiN6mciXF9u8WCK8X3w2wXqjHz66iKKCNGZNSsFrL5c",
  "key10": "4RWUHm8LV9TugKXTeh3sWQM4eXjPK9WNb9bk7PzmTCgLKWjqGRmzbrXZAi7CWq49sLxQdHwVbzqvFZDQrcysrGkx",
  "key11": "4YN11Z265A48sKMEt7AJLECxyUD1QHRXULre45dm43Uk9rkZf7rm2xpbFdKPHMWsaFpktmeKRxhDC6W18v9VEpWw",
  "key12": "5xad6pYMA8w35ZWufCjbGomR9ZDLbuswjTukDuH2ae2Pnc8Vx6fFFTduU4gF4b4p7jGbGSeWdKp4itp5WDRRJZd",
  "key13": "4ZHq6oTeuu5qAVrqkUdPAJNe9i8UPkhpZUuKC4Edaih2U3Kfu3DTqBXu9cQFp9rN3HeU66TwFVrpJ4cN1zz8ywfc",
  "key14": "5WjK5XYhjtNyTEy9szYMe5P5MYrHz3oS4c8SwYpFabvGAqBkb5LsMqTkPLQHNaWpEifD6dfisadTT1X8EAkq6jhE",
  "key15": "5WBo3cctJTEVPFXPRYkMJ5cxNxCJkNekFrht7ocnbcw6UMowFRJhFjJu6oWj4hcVew7raaa2wirYgEksCev7QC1D",
  "key16": "4XaBR3ZjHbLtjS7yYpu5uHv5gombgidMXtrcarKdV7AEWpMfZf7e7qtq8wSCHLYEKjU41JKzcNUKJLomQ3s3AZSq",
  "key17": "4Un4CSXDR9SrGXeSpiADxXGb2fbZLYNDsmkjos7bYEuqiqmGWskSuwEBoBJHgXPH1RUpQzFPwQ8e227pbsvb99CJ",
  "key18": "4tCmPkXos9Sr2i9VQtjkLVQ4MEaKyozyeyBkmXTnhvJvxXwBToNp7Fkaeewk5CchR8B2AHU9bAXCQ4GyNtu9y78s",
  "key19": "5ZGrTeDHs3S5bBR23qALXRatodT7txnydZwPF3as2qRLPi6YRQzzyzW8zZrCccJsHLy9u2ANLq9C3rW9dzrnoeKS",
  "key20": "2JycQ2XbBJnUtTC8xccNY18raXhrxjS9pzhvYDTPL4m9Cekej9Zrstgc9jnifU7riQeoyrw2nmmthZWAsnNWYEP1",
  "key21": "2PnzxCPcqd8qV9ifEe298UsSZmjdSBBjBGGoeTZ4GnNzZvUCsDy9p7dEV7YbpSovFeM8WPuUu8eS54btNXpFbtGp",
  "key22": "3tmQjUKffEk1FJttRGZpRpVUU7Aeytmnow3aLEYVcEKiWA9sZCNSJK67vh6v3hidmakvEtoRBmjQFdQbWnxXMMb9",
  "key23": "5z6a1zVhYecZA7bDGbcdHck3g5UdqcdhUJnLdYH53FPfvRs1yt9NinHoD9zEL8BpmSX5EiS8fuy8BdhtMGcvn7BN",
  "key24": "4Xp5pxbdpwCFrrCCCbAr2z23JJbCUxG8z25xVaMBN9PATwAUy4DGRFkUwbtLX7F34B2yg3Pd1FA6ryra8WTLj8ST",
  "key25": "4YhEwphvHYU8YNffAmWfAnSbwACCgh7zzyBKPv41vCz3vbkksMciGXZuRwssRFeQmt1xPbcNb7mE1dasSnPd9zze",
  "key26": "2vr6i3pH13HueVkS335SYnvumMZ5x9GDbaafRnrSEN6gSCA1D8aNux6SjEaUPkmgVjp6X1Cb1nWjSjZoTteuM9tR",
  "key27": "56s6PWSHxwRLP7HGDiLxxkEuQj8NRxnKbtAo4BZu8GZmFymDgC2CnHyJ8rfTXmwnVeE7F2YN5QGDuUnqD9ux3zcZ",
  "key28": "4U2eApcFf8WmdJeep4DrDpYRBKmZJt8FNYMK8Ma8VWb9r5ADhP4cMgGXL2zWahghc2goLFK5f56YBf7qdGSuxniH",
  "key29": "3yg6y4FdFcKGjxHwFwrSRG1QpfRdwGowkgDRJP7ywQxB3Yr6rdMCd3F75zRUNhnCtUFt5CVYtCeo7CTHeSyRdSyf",
  "key30": "41biApVmiHhgWVLxB6fSY7GJapabnCReJXRYN3xWbn1953hDfzFJzNW8yCVqXt1Acf1SakTyVeR1FDcxrHZnRLXe",
  "key31": "5mBSLBr9eq74jqACca7Yu68voJTwgyeJdc8yzZL29bhGPtFMGe5AweiWe2kWqT1yx2p3aLKuoCxRCXK4NFJTPwp5",
  "key32": "5gWUYh8H2VLV2W3L6sYvgy64QdQ93Zej1uV55Lbox53pWuuEb4UCvBEANu5XFtyGZqdZZpksjn9ToBLX8Ea2hBLD",
  "key33": "2ERaLjT1h3y5eoKUWW8L6hMWHWNzsd5s9fQM9cXbGGreKrk2VKwkfsGcmNEZxMLvaz4yTH2ixmucDTJxkmztGUB6",
  "key34": "5mafRDKk5PkMEVsTyuuAxyMwDoGbRQwcVSqvMyMADVUiXrwwAJo9SoAc6Jda3kd6hAkTCZtHUZbdehMBhrEjdgjw",
  "key35": "4fazPFEZBHH4KyP157NMMqTDpCbkmktsYfxvg87u2WMvRXN3K5wP2pW9sfb5ZUe8hn8citm1CuFHN7HFWGPqrrJy",
  "key36": "5ZJEFp5eyrdtW77yz2BtbhkboQeWtgfAfxShTTbuE1v3Ghw73P4xU9zYwkxTh6qojvaHknEwaji4j2vU2xB8AG46",
  "key37": "2E8SoJKfWhkZG2ifYD7bWwkmsEECaMjX3irw8yw1FCKPJwaZaMzPNaA1dmLfygaw2Pzt5QGXMqHyqdXRA5szgiar",
  "key38": "286UxpFxW7qnFM4ngiNXbbmwwgZ9C9YXLpAsG4DnARm7XScxhDY2R7AegNsZiBzJda6xp26ssJuwWR3cwLFZ9Ph8",
  "key39": "4nP6PYZgn8X3kcYuyRe3QUaKioBXmdf4ujNqB3Ht2N1B5LoxxhCRkmiLehW5bhCA3w2fG1MkJu3SE6Qx7EcVxo5u",
  "key40": "2yywXZmVzsaHCBMtMVp2m5GbvDAbJPQaBN1AuEspuDCgvxtB9AU7WcD1Civf5cbvYXGvHKb7hfTVMcVaM8ZcSBhv",
  "key41": "auv1fxyeFWdvWUhGomcM2FaSVSP1Dp8JqdMzAe4Uw4AErBXantbaSbmEiY69W5atAjAeogd3Pa5UmYsaW8qmjQb",
  "key42": "2LMUVKgYcLpKk8Pi4HRdTD5AWdGuZveRnD5KY3WvucYVfRwJmtgU8oSun423z9ZzasZkugFaKKAfU8ZCB4qmBHqw",
  "key43": "nmXvJXZD6odELaxFXQ14F5mBz14u7H2PjCLEu1EUScQocFcPkfgfC86XebTumnZnUXuCp4oEosYQMmdNNvnysV9",
  "key44": "2D4txsZCS8J91u4h1uyp9UR86eXCht6TEsadiespQkTW5axaRNntB2BZ2DMDhctabb2MBKRCmBAKUjm1mrYCpGYX"
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
