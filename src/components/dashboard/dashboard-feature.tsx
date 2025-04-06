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
    "4dDndXz45tm81kgjjRy6MyWYaT9cmTo6sMtM8jQMaepjpXrEZacFLgGAfkZVV19fXBKdkDv2HenT1UU8qsZE2p1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eTESNdtuSciAZeh22hYWXc8CcsY5FznEutuKqbAobyrruX9Gm96Me6cpNaXxdgqSN6f9gVhZsbcFigH9GnTRd1w",
  "key1": "5DXvt2yGwwjsCB7rwTjoXkMHhX8tDm5QZGDj5AhV1iAUrLa8p8V85MNcNvgSV9hU7CLdkaRqfDS6q4hvKM4iiSzG",
  "key2": "5GVrCY97Yv87TcXFaa9v8mHme6L9m8F5K5RQUrSwe2hA8AnP6UYjr9Rg8mvFWEksM1TseFjQoixqfdjyVMXpjujT",
  "key3": "37pnNnvoHJ9LDbD9BtXoLEZQSxNP2XfWZW1ZhkCmPDbpGA6SMXWAF1w9d6z3C2pYEDgxtzWmnwubne1YkTPPXTN6",
  "key4": "4DnK2kMSKtNUg4bxzsLkhMswkskFrjcKYRn9Ht1GZmSi5hbQnZPPQqRULb52idyMhTRNBGQQ5uuKxv3YJf6T8kSv",
  "key5": "4UBdkXBcXsEQnwmAvSKyxb7ygiRzhVF1VQJ3p1hkMs4L5FRVLJRJAVUFPHix4T5RXLTJRtrgxMqtyqFHEH1uQwLU",
  "key6": "3s8YAfSF8TprpfJxatCFqjDyzi2MW7RnrYM5FXa2gjEqWvtfhTEr3v6vLoDj9ewMZQ1u99a7s1bkgJ6pgPdSFqYq",
  "key7": "4EFez7VLcoGoVxQtqnPWZhSLW7mvhSxUaP3JJBUhM2ztwg9iX6Ja77RioVuY5y7SgPs55cUZo6z6EGo93W6ACJuQ",
  "key8": "4Vggu2fgQzuUuESFmqyLzPbMoKsQW2DR9QnPB1cZJcZAWpm7B6RmaSp1uL6Y6qbaMvNNzBkwJgB4hSr9qf5NstG",
  "key9": "5oGKvNx85eLvXk8gKapTa5BNJ4kSRvvDifPg8ooDyg3nbAWW3wNH8H5hguUBFkL2wjYeHYyGfXkZorMcWNjAufEC",
  "key10": "DpFUG7dh3kgQV4CEjVMTLsQzFDdTRAgmYfLwm8KKokdb1mFG4o5GmJRuEUvgpF8q25ShG8n8qDc3CEpXBggANCU",
  "key11": "4aj7AXmJZBgqf6MXm2jw53S8oCLfVSnSpqqGQTx56nsPVqeqVba5WvDDjfy5pAKjVF25jDVardMRCEnKjE3ZGDot",
  "key12": "hJqGjwdku6H2Vv1Yp95ABXcWoivj9vsG98ufkQJcwLj4mDnJpHXKmescodT8qLkzNQLWtf2bj1pNE9RgfeELoLA",
  "key13": "3rSNNZg1GxhAS4Fxq7FsnjsSyvtY3EZZs2vcdJ36cuyaHPpTsAp3gLpALQRXwjYQpAVAfbQucXoZZoBYRkfw4vQR",
  "key14": "4k852JXqP5A6Wk4yNkLycesu3cNts9GeXXjEKZQwppDm1XG1W2Z8w9KofyMSYFDx3BqrTu9VcouKAzG82hfyZwKX",
  "key15": "423N7ajmuNh5tSvVaYqFe3pTX4vQynGqLUmxUZgAG68qvrYcQMq5M2bcrNxLiFci4z2V1Hajbh5J1gG8FfvP8ToA",
  "key16": "4XVfUKnzAcadGREjghBMFNuqgHGKj5yrh12CrzfdNauA5wn4yMthQSVEmztpGPMB2BG1Mb2CvkJS8vF8f59VyVJ5",
  "key17": "WVKVFfgANKTjhToT46p5Hc2TshbWovbpW19U3ykAudThoxhLGg3vxWmFmLqiEkMuVR7orjoecVVhehX6DB8ApBh",
  "key18": "3vVvFJfsf6oqCXhDGybcSf6Dzh8S4G6r3HetVX3embV2Hgkh2QV3TdTL3eYgo4wWXd3YcUp4sTHUfXsC56b4AZQt",
  "key19": "4WHAQsy9Re4ac5Tj89jet8e776xQchudV1KMe8anzaGWVGAGemQitofkHs6qQfndtSizGyAELAK4egiK6LynW6iu",
  "key20": "3ZzLnT5tGhBpgLyd9wtbuok4Y5YSsn5XqLaU4bCo6Qt2pu1yvKjEWepsbBnDBjcNjHmgUY7b9T8PYbCj4Rkr9MDN",
  "key21": "5w3ut36q68rGudWWSTfYuC1UBDfRFF1sH8KoGXu7x7hRbvGj2B61cM9phrgdLhXRgkTx6FKqa5ePr23A99SEsdNs",
  "key22": "4Q22T89MMEErumaG1A8yy5M7bdmHNupHh5qqUx1uqxqfHqRL9X4rz5isavHDNZqDRBVU6nbHC1mGJ8SehBh3MHs3",
  "key23": "eDDAogArskxcv3pef8McZ9j1i3sjNowsN92mqakiZ9hJEwNokFoA9GRZaPrkg1vm12xEyoaUXMx12816u4y2BCU",
  "key24": "5EaAjtnd7vAvcW2KA4DLTWM9UzyCjwNymtt7ME3SM9uEXJGn7MJNDgweqKfJjdQXtYcGmMU3cf51RAxbaJYchVYx",
  "key25": "3iseeKAUWqrymJf6ABweoKy5yE9jEhuv6Krtrziky5bDHmnXuXcwxakUL8eMVa1W9RjoRkUoyPY7rmU58vnPN4So",
  "key26": "4rJcT2wnPtajLpNUe6wmJt3jofajFCUMqdrnD5bge7X68vAK3FyUA8bFykouWxY4NiqiXKq9Tg971QvxefmfDaY6",
  "key27": "5yeheWcPgQtL7zeCFxW7vAgAuB8R91DHvecBUqoSMpFP92kHWgBQcqfaiWws7injv3KRGkf41oX8dTE5ZzKjALY1",
  "key28": "4WnBYQ1H92erAk7goYKx3o9FKp4cZfXKd6dA4eWofqN7dvTpTdmVMuMZ4wXmGK1ERGfsWiKnZDG8Qf2Z4F9Xx8kn",
  "key29": "4o3efjYbgmgJeQaC5zWAWuvRcfaNEEGBSoakzxnAB73mVzeM9Db4n2z8vfapLAmFLRD1X4ZpSjRny65CCybjAfaS",
  "key30": "4ooTvE2ShZdmk3QjsqdTSSShgdTDcE7Mr9M1KtGuWE8A7g4XCRogWyMrStN3fsKhRXFbYGQiNF6ZyB1k2mrUUdYV",
  "key31": "TMXh6sG8GDWPiiLaTyNXJ9ZWEfZ3Jj94xEE8kht8ADuMNTFwnP367wBH4d2GXb2Dqt3rgLN91SDyHQ9XZvdfZpJ",
  "key32": "4Su2ox4GLEJvy91kjZQjpYsK9mtqLF9LPoira7RZsVGmPbLa5YaE4NKAhnNDC6bsSKfQakZeCK7xeRv21DTJRTjm",
  "key33": "4KzQprfgRBt8LDe2MLrHkV72NuXbHSr1VKYNcAkbiy7Phsxi9kkm4YFpB1bt7DpLhtksiyJVZq5k32teQ8bCijq5",
  "key34": "23kNAwcnrJbVLe2uUsDLF21N3cS48mv3HwNQEFMoC4KsukR9vg2neFxwN5E53PDuvRh3whvEdW1aYZqHvbdEUR2S",
  "key35": "4QF3Mvt9Joj9aEfNM2np7k5qgrnKEaZHDebMQZTDyvtfKdRKnADJZXis5zgbPz4NRkVjjKbmUZASUDWpc4Mj38Uk",
  "key36": "H8FvWxvsGEzLUw5ib7ju1d5WcPX2kKJZZUdoqWJfpEx9XrPYgZNghtkrkxJmsSwTYdKv6fD1QRrfw5eRNPJBXNa",
  "key37": "qQv7ZzbCidfWLR5WTPN97mfGJbUtaWKrzkSZBJV4HM9daRi8Uin65sgKrS5rV3Q17NGtwT4GgM3xyzXMFz7bYxJ"
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
