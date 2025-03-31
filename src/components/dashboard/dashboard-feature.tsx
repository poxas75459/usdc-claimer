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
    "4BEXhmtNXH1Wu5iCyqunxkJTLwmvjayJnikkdeWPGjGMaLUmMHaCCGkKxfrpP765i9SacBiyu8Xye7pw5asAXybw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JeHCihATRp55JFEKs4HDxYhgsRUpFv3sj88kAAonKBbhPKNum2NW1ACF6d64Wr7NQEVpEPrtKmA9PXkw724d86D",
  "key1": "xx332CgeMBtgyFsWziCUKk52Nw2hjqGKdmC4L4PgV9xqLfJ12QhsdzVCFH39wTNbEDMqAh9EzPx7qUxbAb4WHHd",
  "key2": "5PJGdgTyUGQVHBqdMpMGq2fCjyQJYVw3A3oXdY2s52rPBtL7PrYZSHoorgP3dGBLWhSMUKBP59CvwLNXW6WnJtc5",
  "key3": "2xBy26DEv4ucu1XCwrbnqGf7fce6DVERCZVAm7amK3gPf3mYHi9K2a3gV6pRvxMwoqig2uzDw43zR7ukA2hXgMGu",
  "key4": "2EcCncPu5GAPC1HQ5uNgLnuvg9YqQ72M3LWAuWfjtUg8ZbPbZTWnWgojNuPRrtrqK38D1PwNdnrTJWiGyFwFaj6o",
  "key5": "sQjETyNfQ1JAfAup21JMS49m763aTvMHCAEggJLYJLWsCj1qCc3JbEPHfQbvtZ6siitrEGD1bnJUHLMkNqQNJhg",
  "key6": "4aovgFV6NSQa4HpLc2T3mohxVsDsjgRwVoGFY7W7sjF9g9TWHrhoquuoULvFMjKSkaXpvBaxhovv4VGaRsk19DWB",
  "key7": "3MGXCiD9iTTYoY4VCAY3g21RkbCZFbtwr6bZiQdCvrZeBuAtaPaQw86smkEgkTyaQ69NoXhRytFE1mESAg9wcQBg",
  "key8": "5256smkU8pddJHoYLFpRjWa2mwn68gqZDkGMPTxxKznmC5W93BdGfVm5bvT1wwNzHgemmw2oQhHBe9w1yCzNF7hr",
  "key9": "3c75XBqth8WGq4VgrVHz1vhNKMKuegHw4yHZ163TCJSft9gMLnp5prHNcK9fsy7f5KQRsXtFMQE9xwdwoYhLz9TA",
  "key10": "346CACjwZmMyKdSaFQerF3TjATNfapQ8Dht7HV9JNTVG4MVsieSYNmdtkdnLFrdPR4mrXkxVmg7gWZGMtstrRp12",
  "key11": "qjZQ4sDwC1ccup1ht2KiAxaaiT6NW1S1Ekpiriqmnk6QuLrMK5nGQYSJ4vSREB49pJZwjhkg9X8enyLkKVWWgqY",
  "key12": "znh5Cza5ZanQrKtmMa6NJecbqZ7RYEnyQKZjG1xUFbuG8ZtwfYCgmAsQEWryZsvG7NRjEWz2r5W163uNFZiegG4",
  "key13": "3bSzYU8bsfqnPpZLvyoQ94i7HrrZ7NSZZirCwGbLyeQmRfd7itmMaQWtad5jJFgMTzUWcspYHGLaF71RsXE8wCC",
  "key14": "5DBw4zQs7u6Uq6uAN6JBR6zfMsvL6CLfk23hFfwaM9fVoSSLnCkagMN7fyhdpVaNMeNcodifhPWNDhLWjC5G5hCn",
  "key15": "5i3xR3o8dXJb1rqXLBa6FWZ8KqwQFyEwztcmbDhBsrze5aksw9RjTZFoR79yovrSqXTob7JpvCsegoKsFdCH7Nf2",
  "key16": "4EcbPET7P8zTYzNApXsD4UUufPoJkUfS9k1zSeR2QKTcY4vgKiHzKWYno6mZQPa276N1WSwNskmM2txqQ25JXKDW",
  "key17": "44me3Mbnffgni8ihAJ9UZm8HCrCmD7hdYV6f9GN9CLK3HyTWChd5TthvpF72SZbkXS564Sh3uKc8L6drFwPsdNQS",
  "key18": "5kKQ6ufMWtuwk4AFzqoMZLmersWezv9WEF8PgWScd81VLK4ZuqnRxB9KjZeLsw7pLueX47NMmiKPjQDP2k7P9KJp",
  "key19": "5fimrBWZ5riXtjgksF8y2FRKUtCPQJ9uYr5CUmiu7rkAhW9gs9mMBNjK1nt4L83aEB5vRgBtUJH61F1DNRcP2bR5",
  "key20": "55ERppumT46Qxpmi8t6wcxc6qjauszGksrCW1SXH9N8myQtADg8Aadatwm8ca4V6rUq5hbcCtkVktfJBYW37VMFZ",
  "key21": "hYjbusMeHXzmE9xS6f5dm8ymBkFxnsUQLD1xhxMZ2S5cYXF6HjxApbN2L78tJttMyphcRmREKMazgf2mdz49hmN",
  "key22": "4KBnYKgAVgcPApgHGC7chckC7vEXTNLJcbrKFuzcBkqfY9vFgF6HKhsKrGNHCHMPZDYBgKCXkaoKYjFkA8tWj5Xe",
  "key23": "EMWiuBr7kPDp5chBi2mBr5zURvn3jvgdM5yQqdPfAKA4Rj8Y48E2JER4n5zbDBVbu59z7FyQMrptCrNRptjpnUj",
  "key24": "4WtQHv77SfjVEantNpiqUTj8iWHgjbMJRQxdm1RWFpQS7eNSa27WBVSz1kbKuBdymD9J3CvhsBFshsYpKM6qnLFQ"
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
