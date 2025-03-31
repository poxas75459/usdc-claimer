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
    "5huwgp2YE1iEPP7XeWpjvMuTB7Aunf9CamTojJsCCZYRyzo9bgkVyhh6aRy9A5tnuJtQCEsLKtNFY9Ug6WnHHbMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dye6NPSLLzb32XFPR1hZMorVZ6zZ4gk1jf9WcLRTLGnJWvaDr6LkGof3EqgG2hRHuqgqhz6DN4PEueS3igqadH1",
  "key1": "372a9sCwqF5NFKe2jVmiZCnyFoj9bc9oyB7gAA7JuQ5cwh38wTNVaWPQv3KQy4oSVpUinnygU1MzSynuvte8inWK",
  "key2": "3UALKB39Q5i4xAp8LbmL142fNqHV5XTfxSt2ccbYV39AcxFbTmU9taLdrvMTkGSUSyuo8giymBfv8Sd5bjzp3PCy",
  "key3": "Z5PCK7C842djAXznAjoPDkkY5ahKQLDFzYfwUfDyLe6vRxENTHp3B5VxKoy8ZuJrg6GtrDzi5WxhRNHQsdaNjHp",
  "key4": "3jnvSuvvitpNGb1r3WHwUNLy1X67FnMpasmwc63Jzy3PjEGrdxaT3kGnMgGDN29T3Xhgn3e5aA1eFFniFryUxRKG",
  "key5": "43SzGrkNoMZgFzfbd7nLgx4a2WsNexFS5shcqsbfhJrRrW6EhMAf8p7z21zKpwpJhB9eGNwnK66pE6w1tLAgt9Aw",
  "key6": "4NA18RbT9pzcTrryFdJ4aDNDXE3HobUGtrSLfpN9SCGcei51HtUHLsYcjNZQ2xUZ3umLPAXzsP8VqY59X6sVwckd",
  "key7": "zCEiACuyNzP4WYJJnVy6WcEv1v1inhvJjic9VJ6UN3WWf1cVDt6sC5Ua5jP12Ja6H7toEKaYU4eHCoyFE7ZLi6G",
  "key8": "65cmJV6yVFqdQRqfoFupYgsEK32iibZ9q4qQ8wQeNKSXhwALf2BjdpcYuUyNhky25CiFZJ411tGy3XvnNY72wQTP",
  "key9": "2mxSztTzz68HK2ZLYEi2VBjTdkX2gwGnxRtjexTwk2tW79vz47RwDck9KMy6WkPLnkFzFfY93JwVtdwtqVAhoV2d",
  "key10": "3QYxVxAHQtSsJKs2HfUKBEDXyNshhmeK936yUic6ENF1pPxuYAaVnkk3wfNsEJnouqtChs6uJPTGDYZKTag2jbgG",
  "key11": "2Xq9btagMTFgZAc2EQc6EL2sGGGkno8bTixhzfUhKyVne8HunUZKQnfwUMVcMqedbwKeSa1akzYTE4yvfToXc4rR",
  "key12": "44L35DfmqFbRDVNdvrg15SHEmum42cYjutdRvauMaGwfWN1SYzDcvEh8s5GLdhVDTGif2Lz4gZGbQmYdM5AnSNet",
  "key13": "GNqy5Yv5kcjgCSfvRsbFXcejKbCQwW5jXuupf2QbHVHo9ueqN1UoeFtuBMxbZVoUVvkhdmGzErtbdLyQKrx8PER",
  "key14": "3VGt2CKgtTBPnnt4LT7BQx2jRLoj7XeE84g7QaXmxnhwaAx4geQt4m7ynjYmc15h7EmKsp9QUFRVbcZe9QqHPGqc",
  "key15": "2n1SjgNrPtE8HNQQ4fLprJ1UWAqDubKiyFbFthDonS284v5tw3g8CeT1QzVa6so7c46VGGVhCyyNZv4eQLFnymCc",
  "key16": "2RKE8AcW4e3RvUv9U9HPvjtvNqrFmHH5XucXHGTdGEaDpgyYKL8EM9WBrTVGmsR57o44G9LQnbdb26geDjv3Go9B",
  "key17": "31f18NzkfMaaz4YeFpQ79WpLgpvUHWs8DZr3tCHLF3TeA3wRc2afovsNpAb5bbUNr1m7L8F5zqf2aBGDtCw7RACg",
  "key18": "w1GQpw1pjxcWQHW5cc3QMurwUaooqjpyn7yoEt4pEGxiY18c2Tr96kb3FFunKsDgoVaidn6LYcFmLDK6kqhY7DE",
  "key19": "2PZAXCGGNrUZiLKdzwciinv14Mbhw4PsHbZCg3N3DGF6oiLqs8xZSj1NnejNJVfJUR9DzRmhK3YodaBJXUGBH1ZS",
  "key20": "xGvSBvKvuVUoYmBqMdraNTsd6ZXoWFXJWXVQ6YdK8ZocVMo6YZ7Umj7TpPQEQBeoG5edULHDctYt2rXoGdAQBxJ",
  "key21": "5bTNNcUkWSiboTJShuPW19KMMxihcaBMaDW4Ddp8tvh7PDcM2HQUMm9Bn4Qr4qEerTvm6PKQShTYUpgJkwyr4STk",
  "key22": "3EAwUHoYTgiHLZVG9KxfWx3hhzHwgedA6MbPC5Sv7eQGZJwQwwv5hdk2z685mkRaWZLCn3CdC2tfMigDTVRvm1bp",
  "key23": "3zsV2gFP8NVdU4pkXLrwSJyaTF1DxwZ3AkLf7z7k4FpFiHuYuWjZ5CnPeFBmoCqtxnbWoG7xWwTYfCnrJbH75vhC",
  "key24": "SMZUzyc4dENDvz5EZ3znxh5G86W9gqza8sRPYej39uGjXbha8zU2CvBk4rX46jwzkTEMQqkrs3K14z5az6UBbvF",
  "key25": "5Q5ZnovooYRBUoQcMFkpinjpyiXkpyxQHXtSd1QfCnvF6yUneugXfBvDWp77dQ2VCBWcFLffvkVXegCyaeFQANbw",
  "key26": "2hLA3xR7GWWNHYKwaKGN2GU6cCkHAfartwvzVBZJKwQ6B8yGN3UjBMhwQNshSWz5iQD2NUYmFPB55RMpse5AMd5F",
  "key27": "S9FYwiQ7qdQUNoEhZ321yXhKQMQswZYyiMXTWB8mNT38R5Uns53WiG3nZ5EUsWhbVpufXqPMLLZBbWh8c4Ns5L9",
  "key28": "2KxeJtRAMZyxiAnaxyKd3bhQ1bHVfnFGEyfX6z1nHv4hrrPsS2EyZR9dmpQGYd9erwroqBfK4pdTT9Ee1wwuTEWV",
  "key29": "2N3EH1YpbDoyU6LHtdQNANWUQ71igN6Gh1y6nfnJoavRME257eL81FYgmAfEnx7gBG9ZqqGcjSSZ9ov6DiJcGn8g",
  "key30": "48j2cZyPgXp9r3sH49Qb2LTh7CYZoGGfnfTibuXpUt9W8xYX7zBf5VCxvCM7AdNxL2VBkrkXCphQ2u48PUM4gEAa",
  "key31": "TzYxQ34deL1E6VcCPSiakvi11uRC1auucE8jgoynLwRWGdrjkccG5amjY6pqE6fbpaQY7KgsTug5d3LsYN5gH92",
  "key32": "eXMNawZwKXBFfXTUA9A2MoRtkC78SQXoZSmLJM63SVfaucm9JptHoR8gDucMrZFD6Y2w31rhy3tvgeYgywpbLQg",
  "key33": "5pJ93WRQqkHt1AVq4ZxXe2BbwrXUD2aj8qCfVytcxMh43ihXyCJ1epzZr7jGpmjHw4sRwmaiqZxtVqoc5Fk1zdpF",
  "key34": "4T5diNfD4ec6TjWLpGmMDSmtJ24PSALRF2niCq8DtCDc8QtWXqyf7ZSxcXM1G7zMPpc6YJDxTCg1N9vvfogEzibq",
  "key35": "3QaUXdKzACpzDz2w8YFpc86mWtusAvU8WkD6VR3FYPeCicAq7io9oKJHodjq2yhbqnAb2jSNJ2kYkZ8jnmAcW7sv",
  "key36": "2oo3Z7S8WsFEWCkv2r3XXCLwpth4uFvbGBCTxxwFoxau12wL9mVQLDK1xFUu4scicHybNeYXmcKEVoMigw2zWMSw",
  "key37": "4AjD4gpBvF1WoBT5A6KJpq3RKANGNt8hdD5NEBFTm7V6a34otbVDgrdDDEQhDDE7pHtamWNsdwkfNYkvDwudGq36",
  "key38": "38F18DUgoYhrR6wzJqPgUjUvTca3wLFBmGrLyCHfGgbroiBz217SDXrnne5zNnS24vs387bWwT16Xpx3xJKHyHYE",
  "key39": "4DtKpcohdTTfJMTPDNgu67dzV4tpU2TzeaM3GrksZdEAFmVk4kkqkjjfdXX72Cjb1Fk8fwmMpzj6dn37bUoTw96Z",
  "key40": "64WBbKyAFkMGan8aVuaFS8pBKhMVizV8zb9TKoDrzXkxcy68VKgmkvQZ5ZkU7SSurVuDeTTxgxukXtMzTApnk6vV",
  "key41": "5opNdH3B52CBQYzRFbu9y6MqYiyu71uYExSEfu5MPFojtmZyoQMxnUDB6vnpfSSSR58Wv1XoBBvuFiU2Y7hMxRqK",
  "key42": "SorrEAh9Nz4QQM7n1HWqGXuUvuqckpA9vQoL6qMGs2dp38h9c6jGNf5wsdZ35TeAe6qA4foYzmLfvrnAHMWs8qx",
  "key43": "3Ngxad9vuhRdfuKok2KkdSyJLxjtpDVsP1ZsZMJh1wrwJweZHps5sh7LkdKQJNpqdTcRn2ywqHXSm1j9jDgzcf5T",
  "key44": "s3BVosoHXvC2nCXZuMyxJsGvfsNn1k8epKBgTc5CuDtPHZLGPi2GmEnnjbPXkqrWatMDY3UAFrPxLwk7ht1d7o1",
  "key45": "4o7njJNvAmTfKzJJvmscpjUqNDuVrP3XvsTYQAtBTDNqQWKiVrsjuVtaPfpcPxT1Nicp2WnP1eqUWNMeJaD2nYsh",
  "key46": "5B5FroMqyG5QgZFiUP2JE2Kk6zzEykoPiVERdRkvrmweBwMNYLgZs14H3zCDP9R3piuySocGicJGzCnZ4Y7DGahq",
  "key47": "2oob4NR4HpYbKnYySaNk2mvhNWELAdw6L41whMyqYyqMMZhGQR8VNW2qehYzQrXnvGF8VJcPayrUpAdUHC18yYoo",
  "key48": "3WjgsNM4w8ZX7KKtMqZpPXHdcSbiGKvWMC6nPooGdWLq6CgBJiHoTf58uPLKBjNvkkzYu4wsNLFv6ZvhCxuzJ8Ao"
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
