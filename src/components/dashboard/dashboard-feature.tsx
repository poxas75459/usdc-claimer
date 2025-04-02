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
    "5AGUgfeMcouKnXvJmd1TBzSSaqPoSz5uAzrxSRh3Tp9t2Y1enfZXL3VFV57JHuxDKWhXt4xfD1BcaBMfkVukyNSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c17iXuVLz55xLXGN7mupaBJQ4ffW5u4bYtmZnRC88JBnUKDpBFCH17jjeyaJthH64nJzJQ1aAxmg9Q29GiVX6Hz",
  "key1": "Qjm89ZwBSkynqJDAf3jqViaZjkondp2yqHZT5LPBKThnKM1D9Y4piJRw4s1JPNVJLHkNaHLwPtHLgnF8HMu3Ezk",
  "key2": "M9mjgq7nLSYeZEJKxsPAgycfZhyphghT4DsVZQG5LErenGJoBVEmsynHXLwCR6cJeTqF3EgzssSCCqRgpBU2SGk",
  "key3": "67VmLP5j33TR1rrLWRFxr91ATwRMsUDNVyiLmmQhaDiew4FJBqasJd6K2Yx5dik3RxesAMjtv65UVhFf6zF4zJBg",
  "key4": "3rmS4QFGhrvL4PssajVromCCbvkECWW5qWtDRxB2s45estLLkHqMVkH6pp4a4ViNg7oXMeZmBEbqcoSTaVUEFzgm",
  "key5": "57yv37gqssaFBuwn6Hrtkd9B9rS4mpBWsfDSQMo2qnXBA9mhFCWUkDyeLWsXciEghUZz78Ng92RU3j4F7WP3eTYJ",
  "key6": "xR5FFSBX6AF83XKgWXeeVETdY6cDjkJ51UqPyohrt5kr5tEHYAz1eH3a4X1KaGtPeH153aYDSboYi1rp148yumE",
  "key7": "4ZComTQsy9qrAApU5dJDZfuyBpd1WZVX9ao2VtDNtTpf6SjHQSzRYjVNWPsqGQH4tsez6Sj6rAcGHeoLyTRyu1f",
  "key8": "4YFhi8F9FmKwQ6LhuSLFPGtX5m1rL7YkQqWHh22x9deRN64QaY8bkKeHEmsQnVex5a8a1AKJYEfiSDvNAweQjbkU",
  "key9": "DKpMevKxN58Nn6vRwFp7msQ3HEU65GTUceSVkpifdxWr5ZkutgaVtqC5a3BGszG1g1YZJ7PDrA8SP68vrTJnj6f",
  "key10": "8HTVZMLe86ocufrEbmv89LFcz2LKuxBVXVjtU7qhvncQ3YQn3FjTwJA3NFDE7fWdC24VWQbnXyXD2un2qDp6QS7",
  "key11": "KjyMG6U3B85g9GiG5SLp9se4nppuUE2rvW6QmMNQ7m6JfCdFYiFEVAV6aFsbcQGu7pFFQYqSpVwGPJ6oeYa6Zyu",
  "key12": "4z197XxMrNJn8r7AQVxw6HfxCrk1NrqeKDrSYYfMroSDRXYfQcivxJSdmDQwMxvboFGnxAPvE8iKuRdHgMqMaXEa",
  "key13": "3E7F9guihB6BUG895CmhkFKpBsSSKLJ12qzmUbwio5WLHupeT5nQc7n2YqbQhV2fRtsxgP67j9xunCiL1ecm94cY",
  "key14": "Pu2LvMTfezeYAUdHfRezwCHb2FS6P8rXmNbtPqtTsu1DsTXrvFzsYs6VRzby6wQwKsgAPiSbgXHmhTi7HagmdpP",
  "key15": "4ESWg1xvnDKyseAyGaa6Xas9LB58cecykjUKGHe4FM4oyp171i8XYT8C78ZkyW41V3JJpeQNvyantbsabGmLJAjJ",
  "key16": "26QJu1Y8A2re95AWi7bsisDn6VNQx3JWxWFA3A3fPYqzLjHk2N3wYx39Bp6M75SQp4YsQUsu25SaKL5Dz9hBozSC",
  "key17": "E1rfKBmdGjWs4B21pA1CYE5rKBdYV3cEu8EL9gsHNqQt3uDCZs4iAmkBX9z2KTtew28cHRvNYeVZ5rPAjG66zf4",
  "key18": "8t2axgWdXqzsjvM8NxABLh9pHPzThc3PphNow775F32cp1nE24EkVmpeQgttNB39xMdmJ63FuPxsQtfa115bWis",
  "key19": "NUesL1Tww2KQ8PmDfhBS4RofQHqvBjvKZhiEkNz6gGRw9YeM4XV9Py7PnH8H2HEvQjJxSkaK49z1SoHSPYrGugJ",
  "key20": "3zfWsLftuxHkZWAfHYV7T4dv4T8DhYPFBBXjWqxPpxmMedEM2pZTDV8x7wykPjUtRHk9XAuNi8eTS5YHuJVEFzKj",
  "key21": "5WXXwBAkgikGoMjdbUrpXKqvgxyxDLZs9eyNro7sc25mWyWf3C7BrcegFvk7ToccgzaP9jkxSb5zt8gFU5uGKiLj",
  "key22": "3fGZw7Lu1pV6BNVoo8N3DLvAbLFy6cKPWEN6TxZjtv7YkRRbjcCfWoPRovsycvsxcgLLtTP26MvJgM78ri7FsBYq",
  "key23": "2H1eT9jKH4f2LzHudVsYW7WWNk7whKBKESJkFWubSgxt2812bT1cEAc2qr5iWNSW2hxNsZnoyhs7E6ymQfYwTwbb",
  "key24": "5TCigSr3yDahu3kxmYNSiXBc9YtsJVgMK5oDr9Xbut3WgUjcMaKn2JFtedwnwE8NEtP68WuKf8Adi9Xv6wLroX6v",
  "key25": "2xcyTCyToeHapA73H8NRbKMH9PtgBuGay36ZBk3C341SqohTyGtbynPoC5PzjZMsuTPuFfvCrsaccXP4ywG2ocF9",
  "key26": "4JoqhnRmiLf2aGmuTf1XfbxKvHuT2azJwXRY6wj7HLg6b7p53JrRSXAJxRi2QzFAEcYPVtqTe1iV78FdrHhJ6ws5",
  "key27": "3CqYkwTCGxWgpLWV2oQPKgFQohxd3mEBoHMMgowQkPt6YvKUJy5Qn2Yk4GGBvt3UXSJqiaLERhYagnW6FtxDDdV4",
  "key28": "4UhEjsw2291gFUkxXQ5g9kREzYYLPdENiP5FVXHcWwMeJimqihRoJZcYyhSa1m4GsXxKgRd3P8qMEJNF5w97PtfP"
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
