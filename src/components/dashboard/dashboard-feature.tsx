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
    "4W92hgT8xtMk2XSW9Sp4vW7NoZWmzX3sqF6rgcAiSmmjr8XJ8PrGL4ocqiH6UppASPLqU51gR2Q8G9GYZxuwUiaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SDpxMZKhGKHJkQTJ4XXKuAuQGo3yzuDvaeCRVzf9W99RevuNz89FeG4n6VsYUsWYMA13AZ8NZizHyP2W1XYBgZQ",
  "key1": "2RGLKYezUDyVFHZZ42UzE5QoThkkYqDYiFZiZqs9BsDZNYof4EVUhfEG9WTbk4uQQPKpCypMM9ZuwdAqARe6HMwB",
  "key2": "62cWR2dadaRFS6SkdKUt9gM9C6q3iGZuX37uXx9JFFcnkGP79GuzNyuPmodM9U9Foxj745nDzB4512LnDerZLAJC",
  "key3": "3ZGTaf28y765VJvUr58fWdfdXGnUWEeX18cWMbK49pouvLaZyEXBQKEVTP2EhxvTgKPQpTZUgyqQyQE8D5RJ3cnb",
  "key4": "2V6cnBZkqtuK9YAdE1nj3gS4uMXPY5QAPTqCgyhv1Rs9ZWSJA3k8ZMAELLnYtrxC2cZtoVuzxBpq6T3qrUqfMfj6",
  "key5": "3o9rn4hPie1z1cLHvdSpYswA578CGaVW3ooZ6EwQGAh7XyMbnE2aDeFNAt6gJen33BffnGCJswNNiiWnJ7CQQU9n",
  "key6": "oTbagV72frzkG2PcuTMb8jUTvH9hJXQpoB71Y3GzVFiWhPnbawHhdkhjyhkf1RxVdeCa7F4k5uT7rTgSZYtvKLR",
  "key7": "5nXEokLdMdTLk5HM74HfGJpZ1G1TAVCG341sXevPMWd11pG8W3VqHzeq7fPXCT7hN7aucSaLLJSMAjMPTkBb24b7",
  "key8": "3KFLTvHn2X4fQtQSWywzYmhLfUVfbXS5pQ5HNRHivrPwD2nFjakFdfXSCnmTHVcJepaLYNMoZecPa5YJuXbHE9GA",
  "key9": "378nos4M1GN6Zv1bERteZAuTjVnSW6x4VzyQ3qGon4NgHJpbv4P7H7Ks1vYjm66CgqL2TonKSre4MQFvRR45xbhp",
  "key10": "5JtrmSi13p9LmiKyaH4WaZr4jx5mNH7rdbDeowAJ9psUsocLv6t4L47mYNzbRtGv7KnaF8nDQYKn5X5uy49VmU6s",
  "key11": "2QyCb8uPn7ae4wMSkFy7kxp5sQjVMJjD2EBSMS4TNsKRkx1xiDMmoZiKNDnHxrhrTQpcGdAamCSDC95wCrmkx2Mu",
  "key12": "v2Kz2dS9frUzhvuLr2qoLR4jCMJN7Sg1SbuEEJaHqTfcxSBe5ELT5FqJJ1pVZMsd2XV4VgFawUtRAzJXXRDuBNr",
  "key13": "4WKPJzcPik2duCYxuTxJmKst1ekpcUeKceAbJXaSydaCPeDomSoHgrkAZ17suWpEBuhMkDCpXGGgwWnjAj74z8Mw",
  "key14": "2VwqAaMGkS76N6GxCzdjvLv3CxgtFa3HBbXQVYDMtLZ9DiuAs19FcszyXA5p76W8tuUeMdTSDHywqZ7arGd1aNzi",
  "key15": "2NnRPweZVorUW2fAvaNqrFkz9AqRdERCc2LYu1NeefFXdQr5seYejtdt4oFYmPeW3oD9seHomFuteeKyzN6YSJA5",
  "key16": "5jJDHVEHeksTHn82FF1S1MR3mvcWNb87f83XNTYfDv7GhJJHnvtDgXAhhN5KgD2wxDboHnECGQq3HBCdqHSPLQ1h",
  "key17": "52CgZ8WnSh8if1VZGjUwANwEayJr7Yk2oBiuRhoiJ61W1tTomZTMmmf7fi9mqFLwd2mQkt99P9HFADcNXTjcX3U2",
  "key18": "4HhymGHZ4vuCqKFCWPyiUeVsoX4grssYpXHC66EU8grt39dwGhuUCaNbTKx9AkSG5yzrAUXybNSeR3SPAwikAz4X",
  "key19": "5nd5wFFGwdjGxJtUPtYZ6o3HNBTGWAxtvr96v48wodFKAZodPNF4x52Zxo1qA86S24sb7YKHksYHU9PS4LobmPg4",
  "key20": "4F4xvKys34rAMKSsA2G9SiSEDrTg8uyYCzDvpMfJP5K3CsXKrCHkpHxjmoYFeCx6xoMxDRkitx7wuGtEydBNfoay",
  "key21": "5ApAQoGiirseyeDY6KQ8jpzkghWKNceDyeEiyYTxoYnQHSE6i7XUcohhENkty7DZfVpfhon7jXdu4ZczmjafK4Zh",
  "key22": "5r2sGJUfJ79P9SoyUGorNGuWd81nqPrmUySXsA7RvbJhEwAjzXLNGuKYvox8Sp6SmD6W2DWrueXQmGUPPe4SL5n8",
  "key23": "65W6s4UXFVCVNPT7LA1ZpGHrhQkdmePVPLoi8mhUS87c79gumZR44zUC3mbLc25RDsUN13jcXByivrmJxcgXB6ti",
  "key24": "5y2pxd8eEgPwoEGYpZ15mkG27vZvNx6kbSnSpZScgEw2RKfH2RDfAUyftMqwDfWkbURMGLAsMQEWiy6Tcb4CQWXK"
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
