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
    "4CZi4oubTG1QE42Ew5yK6h9qPDv4Eymxw6Qz4D29Yt8EJ6GiJ74D2XZumdiEcrVy2ikE63mJtFmmYDqcd8FXj6sH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4imnP2woenmG3RhH1fVGKnftsoDrNsZ9RLqxGGiWnb7boE7ZGSAroyqa5w26bdhe3WBdHMuapSmurdZuQmHbvnZA",
  "key1": "3JUCsSTP6XQJaGjDBmMgL8uWNEiiP5AspsbnNb1W3AgZT1ZYnojWJvnD6n7e3dYbvbU9psHdR4MAskA4njG2dsAb",
  "key2": "2A8xNZLNRJ93pSAN8M2GSUHXM1pVdRGsvgu3Gc8hDuy4j4P9Kp56hjFdrsKbqF4cf7BkdDWzNzqNSz649VdXvEuJ",
  "key3": "voajxQ5LAUhEdv9AjR3WoL7UsBERwgwc7TbFAv3w7egvNPdi6i4pnAy9swi8b2uVWfCamaNo5pMqWkjTcKuLUzw",
  "key4": "5MB2YWCsqsZtzqnTcvY58r2HLNYCGDNioH5jaYnJkAfkrT8rKtWQuPzQc4kQWZPMCP552JAkKY96t4KE6tG3mWaL",
  "key5": "2B7tnofK5v7UaKQRsbGKLWuXGLKvoGQ5ef1e2TZspof5TCQ5wsk2Wdq532UHeVBpPuHSUESK9BScwMcCZLS67HFQ",
  "key6": "41a66ePh2ikcMHWXYegJesUojZLsRCdUsvCE6eYjPSK5pXt3BaVqC4DR7msopSVEC9b9FqVEPs56xMHV9GSQR9Q9",
  "key7": "3wkwRksvg8BVExnqsBZv8VZPTB5wRgnTiGrqFg6Jbq5wdj5Hjkyj4azs6FUhFTGDTrtmEMz9J7FKJZnbZxwNC3nf",
  "key8": "3KWhm46TLh5misVErN4yADDkJQ3eLH1EHocE19UTvtmt9mr8w6caD7JKTaiJ4n67LRvqSEW7JLskNCjq4GA5VfeF",
  "key9": "5zGBbbAcbNHWf6ykNoKHfcLP1qVu79BbK4Xk6Mq8NKwtoSzmwrjeRkGdT24Szbx7YoZ2rdm5hyqqaHKeGbbRoeE7",
  "key10": "4kr4uv9AkJh13hu3BGTb5vGYFzLK24ST4TJQ3pG7zYXFRpAeJgdARfPcESEMb4vo3gu27XCFNJcVB3eLKU4M5jyu",
  "key11": "2WQMfAtXnJmP23kzbDqpyc9Fd6cbXJ5XyuFvj8gKZGSrb9kQwSL1uPSMgCqHJiH33SLL6fH2UYyPv1Lpmq5ppkCt",
  "key12": "3ka1dnUWj7Co6z3bJwQFnJGdoJoEMhgP7B8D6H1ePWSPUMqqHgCmixmcbYT3QmjnewCikfuj9qs3Ph4M7eKWhCbW",
  "key13": "48o4X3GL5qJjwme4VxZpWEikUq9kxfxv6MrhHE95znwX9UX3e3v5FE6Pcz3uzPCY3nd7fMib5xxkxZiifX2nd5Bf",
  "key14": "2GTCoSaif3unDUK2Vd7hMxudy5NSmiYkgKzwgZKcRLmdrdZJcqM4M9dBWSdmwePvgp8wh8EUq8XCqyT1QJDogTZY",
  "key15": "5cFmD98sVH3wXY9QMnhcSeo2qXJgx57QCvGdiip6kSbnP1Ki5LP6DY9Uycq3DdsQuACCc6M5jq5xkMtumjtHYJ4",
  "key16": "2WAWxtHw7GuLJjHpqiCh4Z6fzY63bir7ha6oR5zNdb6LBX8YM1diUhpLJMC9D6CM2Fit5KGJhq8EDFXL4pzaBPMo",
  "key17": "2T8GaHThELi72veyymUQwek7VyHoD7VyT6pdCPaG4ej9fyZMZMadyrhNrWC7ZMAbU1cMVc6j85hHMjSjkVgpKP5R",
  "key18": "Qd3nt69B84qV8hKttag15zZDcwht5nEJBX3FDNJ5zNVrtTbtz1ZRRjf16rL28A8WeoorLy4BuW9m7JWKmycv1t8",
  "key19": "24CXDHtCK22FR2jZCSKXkbydRJhX7Eg7FnZCMZrjCLPJpkjTFeXZuc5qCxzDqGyz6VN4xEgaHsXbLVwWpSGRBfHy",
  "key20": "2kog2NCJwnUvGfaFP2yb1XaFzwxx3pZfKLicHrzYGmt9JSNuxsYBzamtUvEftP8d4iBP61L6Q6SU8BBwqeTWAQZw",
  "key21": "4ySgjtjvqRpVZzdLwmX6zK9F29mpTwZ4FvUriF4qEiydkxN8cYk1Frq5KhKGG8cT9kWu8cz6UMQis66EZsPbCqy4",
  "key22": "2ktg28iaarK2kzPX5P5syNMYTC4uowVTRuMLhh2p2XmNcXhnwYB5oUbCgq3UtJ8r9pGtNZgbbpssaBeXRxub6nhT",
  "key23": "3sgQgjajEDvmwGDe5LY6txLovapbyusgMHKspDkYMidA9DU8pmVxy6n9rVpMGJhRciVtpBrYzBCDMWiNZZrHDKuK",
  "key24": "5cKevvj8TAa3TmDidZnksF6jCJPQTfR4no3m9Rrr4WBxeUZZx4duCE4J632QSjWwVnygtW3J1v8mLuhgRx1mo1Pa"
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
