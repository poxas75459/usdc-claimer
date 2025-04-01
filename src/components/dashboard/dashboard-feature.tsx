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
    "3sP5DMkqiJahK6R3LyMo8Fcg7U1DxQL9ZMhMgNy3hKsWEqewaXqGwCsT1r812JNDvX4MwEmyrrDJHKjeck4miC2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7UgtRwv636v3VvFBCoWrM1ZRki62gzXhNgufZoLYJ9HGqTXe7joY8eCN2jiPvcWgesWTpMMbpQowFu6AY1GeK8M",
  "key1": "2DBuUdZLu7iCPgnYpqSX8ngLL8NNKymQRzviKiHv3RicjEe8ZnrsJqDsVmdxXd9fb1CeEQ6sjpaEdoERw7dDhdam",
  "key2": "Y34DHmLxa49xhPimeY91Wo2zwwb1zqouXTBsD8prsknbLiZJoj9RMhsfEQxEhq3jexTiphkuCA6LaSZwYkXYzZg",
  "key3": "FtQi2wmL8vpNLTnXi2UTrinq8m8VZzZmfaXTg8PHQWm9rEXe2erG6FN6iLWJBTLsiJgNdcnPXr1VngJydtA6EvS",
  "key4": "3wpk2WWQ47ojiy7KVKfub7DdNLqBohWBwoFaVinAig7MNLwoEeWoJtHD3cbTsmbfqCnArAUJCT919Fiw5wk1WjKp",
  "key5": "3LcUc7Ui5c86uKNWUx2cou8B975ubvsgkSnMySmTHCCSi2aAWB6c78zRyFf4ASWz3ERaFp7ubre4Y2k9QtLHVPb8",
  "key6": "Mcf2dDtCF2snpRaGDrPJPnFraZtqQ1nF6JCurWiMydHzJk2nx6MwVdzSyzK1CMw41nXoRvVTsuCuAWWb66KEzhu",
  "key7": "5dEgAJUBhXiUtbzoDthQCwYvv4qjixgoHFwgFQ3A7TT7yKPvaw6AUoZAuZJj7uBLahCYvqTkxMHVf6S5YCoyuB3k",
  "key8": "3zG9d8eHi26Ma1DsUv2QQs5BLodwWC3W39N7KWPpm951GrQWQDUFz7TQe1wsSTrJ3isRnhMmvh63kDR8o78wmEHB",
  "key9": "121oe3tMjLTKLkbDnJieHqNSiQU3Rzw35d5vyZUPaegzYgcDuY3AGjUm4rg8WENyVnYLQen6TVxgZEraskvTsVEA",
  "key10": "yaAkscqhxvmp4PconS7dKDgVPDZsoyRDqRkJgcsnxVmrekXrWT62X1ndeRNjpUjkp4TRpVyXzvo9hqLBAz62Z6m",
  "key11": "2Hb51fYjTwvw9QrPJHmbh13CGW4sTVVPRe3Ag13cgi9QC9sbscFKMhY2CCaAsBCaQuAJs8UMLfYdrQz3rjQJHiab",
  "key12": "5ZcvSECqUC89Qy8woYV7yDPHMRtRyg9XgDrJvpfaxuowXew6WVR2GZfqgdjwgykkEPrQF23LTmK2KTvh7zXMBQ6i",
  "key13": "3sPvak2R7sv8NrYdmeVTqLC2WxpHhQEnYsqRbhBPLNdH5J2vf3PB3K2JkzxWrw7ifHWxJCKUaNT4MRz9B9gMjpuF",
  "key14": "2CUCUCcWSkmJwoc3EBd6JRHh11Eh8Wiq82v7FudZHMBL8VeXjPfRfyQHcwKUKmioGpQsbHjxpkQv4fJrzYqCT2ob",
  "key15": "2kg7GbWau97gyn55548cvdzfsn5Zv8cEa6Lok2Mxew6TA1zB8ipQrsfEE4EaEC25CPmvZ2vSGHyJtR8uVXwpGfzs",
  "key16": "5nt4GNkfL6CkUmE3FZLNuDWjeGRH2DXGy4Hi9TbcGZWPGCYv56qeQcrwuDwoyKz6T6xHVNFuNQZBmA8884QcMrDd",
  "key17": "4dH8xcD2xFR1ENSFu2SdCkjFaivJdPZPD9izvqPwSpnagCS6bEncF7mY38KVvGS7N5rMi8zqSuwqNvS9vCesEwHt",
  "key18": "3vsQHFYW9vMNDZm7eyFCkrfNKwY1p1Kyt25eZ6AJAfK9ygDgsR7mJfxpJoMS7wbCKjoQ24DtMeo7nRQeManuqhvA",
  "key19": "4nxxqG6gRGUCWXZDFduwZaj318ZVvHK37yQV8HVRiU8KiLjZGY9nr3uUQ9xquHBuLYE2FpjdDS5Pxc7x1jSdpKt7",
  "key20": "52qAxc2BJHsGfa5w5xWW8d5DszBPkcspie2bUQQ7RqTqbb3FygpXMuqiUcbya1LgLLrRgNSYD8KJrkwPycTzgAum",
  "key21": "X61ooUzK11bufJtwD3aKY3bzWDCQDUV9ksTQGzSzyY17e4cnb5jPPPZV5G2Fa3xXJhPpPHSKiYMPpfazDUQHH86",
  "key22": "i6mg1SQVgmXD2BZnm5Pz1vjqUe9FVYCMXmmoDaSeRQXxs97Bg8ynH6uNvvpxPy8UrfEATFnezZNaeb1WXrLGaAb",
  "key23": "2gy1aAKnzdyU9aKPkbfQk4AH28pbhAszBnrqU8fJ9QeSBt4VzRE1WXUDJixFDtqug64rhCfsMJBuhNYQXvwmapnd",
  "key24": "2wM4MddWxrMMDhJDNftgTgsfzZds29aPPpFhidS8Sb8c4hop4awHdu8SJBHSDzggaYYMQBTXkUuKAuUv6wWk7DFo",
  "key25": "5ppG8nvYChEd6MMavyBcwVfkEDMLyPd66XCWaAGkm6KaW33eEumgtDxmzzhWHFCtm6E74srsnq5hXePWTGMV9B2A",
  "key26": "t6tffDzZLqb7ZtDzvpgiYoKrGkvxEgX4TcMT9CAhp9L7s2YNhEC1QCPBCfoo9gkY7HywjUHWpob9Aqffadg3wja",
  "key27": "3mEkmuboAfnpjMj2N9Vp2VdSu3gCASc5nchxnPe9yD3Z4D2aTUXcmp5jqWnK2sgQ1hfdxKFkAUhyTD2uYN3Y65a2",
  "key28": "2a2AsiDTTikc7Rj4J6snGDYkf5adPz5gSRf16JDasYFLThGJjxRNerJNWWfi2dAuA1Y71XdeC3CYnSjGCEFpLWYM",
  "key29": "GWHYh41zRv7KoGETFyTSrnZnrDaxFZjChgSSogsAPZzWvDtQg95EcJJQ6ZsDAecS9h14qaFy9E6yP853agiBMXv",
  "key30": "4eNcW61ub23neCyLKgQJTDi26ru9EyZx83FSJTFpQkmWAFGYD1GSbUVUJbv5L4PfD4VZdT1Hb7rGTzD8YPTmCWfv",
  "key31": "oenWTWH2jeXwB1B1noGe257qAuCV2YfPqEjbQAmxqSmDrad7tjDpvza9WFnwYqD7TjG55tzMsr8ZpBztBFqRQCs",
  "key32": "56xQALFRrJiyzJj5VH8AS8cotr91vVPpi2B2Z2rACuSViLJGsvfoA1aKmKCUBnVSWCPmNBKEzvWE5DPf7iwbvTJX",
  "key33": "ryQMuiDtiC6ZZ8afEnrwtEKkbBcjcvk1bGQm1wHKtuHBKLpK2mck8xxeJoXYw7vkjo2Kp1MvPMirefjwNHYnqaY",
  "key34": "5498R2BMrrcRK6TTKiU7NShfJiRzJB6zM4ZD7zLgYTuVxX3mFzWtSXyMg5MengBQDAAogXUHnYua1wWjv146XRM9",
  "key35": "2JuwrcBa6EHACZGFthQqLLtKyVGDzrUSR3f4oGPTnd3GygpUS7KyPF3XVoMiox2aim1dPqGwawotvXRCN4pBM5H3",
  "key36": "4sGzPgPfBMjoSdj7uf9tZbcgHthCFaAdi7T4JCXqE8YPHsXra5p86EQTZ1YjcQ79Kqy6H8Z6vDWMhsAZN8GVNU1y",
  "key37": "3KdmhoBXXgBArMokTfcXjaqGP1timNYPt1u5Q7LMjonJsRSjjP4ADKoxEiYGzuNVtNnHoWbCymoAZ8MfmFopqH7U",
  "key38": "2ftbzGgwKq2rVFYtV4rFtubBDXmTuR7gGLXVXS1FH8h8pcbiXyGYEpVUzwGHGF6gJiC1CvU1hdvMqeN1JrkGko7i",
  "key39": "2bf6yC5GTKcUCgxZhErv6Y1cKnnF9MpkMVJwm1FUBGshtd6RFtHhHyGyboZXqHp6oZJpeB6Dp3nPVqQfqCYKvVYv",
  "key40": "PrytBtJBBKtvnBugVRPcbb1v9vnXi9dMPkALQjqDNFbCErFdNhaqSUzRP9n9Vjn831MbiJ6gC6s375XkJwxyvPo",
  "key41": "3SGsyTggiGjjvETDybbUZvNduh2Hf5FpncGb1TCm9kpkqGigr3DPm3DKvpVWUiEg3P6W3QPKyAnZgpWMUrkQSHyS",
  "key42": "5FoCAPvC12TLNnjgBdgJ6SdnmSotzRnvLqZwyp1UbSQutLfvhi5qKGW27cjxvyvYzkmzP4U9R8coUuW9RxUrKe3q",
  "key43": "3tkhoziv7MtZtf3nDxCnhLQVYqsddYAdwWR9ruESw5FLvbwdVNvU8z6ZGXjhf4XUfpf6HZNeotQzHkkxrVf1ukFE",
  "key44": "2jdHznvgLojkwhqQeywDDfMVvCA96XKszrn2b9Gty8FL6hYquUCjMyvHg7wWTafkLpvbSNccAwTak3hNrZ4D1j1p",
  "key45": "5X5toWuNGYdwhJJbRMjQt4PFJoSBWWgkeVG2SwuAmAt8Y8dkBk58vqtvHESp6n1153TW7tfK7gYDjdPraJxJtkek",
  "key46": "1HHUdJDPNjTxw5wi2pYzCzhB5EYrueosfMbBBbHnP9AofeYi1Vkk43ouWUY6Gg7f48dHg5kQRGDKQNf1yWbT2PA",
  "key47": "3epCsffPZPBFUB9nXRWwGYVoiBXPiWLyARBMqWthhBtDBcbGZKSCeQERe7pVtJiYsVuKP8BBj5MYKAKm14XwxaLS",
  "key48": "FwyS2Mq9bJFVSg7w6Hur6drNsfdZqwSrU3VYbzhBN4jsSCGbUeDqFcQYvn69PSRHqRyaRL4JECmJjH58bt4547T",
  "key49": "3oQVv2RBSc36rStGN9L7j45AHqgmcB4Y9LKQfwA7igRpXHFqTdVdzAxTHaZHonRZ8uz5vyGJsRnefyxSqEbbeH7G"
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
