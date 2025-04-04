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
    "5pdvV3rs5VpgWDhHP41oXSQkpjYwwiBToefa4V6ShYKugiQzEKQ5M6L6x4YaMiJyNHhLbTp78CZyYz8AEsUwYQyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T47bLgK1zoQ9WMnPbSKd3kcnT3HhGtN2BWDcmdiBFJ8qx79bPs1qzaHWB5eByVM5mvqoYkYcCQq2U2Xff5pRFVp",
  "key1": "64z9oDE2vwQqy5Py4NHoY67K9bL6kCRjc3MpAbh2J5TY3CRhB2BAfNfZaCnhjN3D2T5xNhbKngVtP4LSaDeRQKGk",
  "key2": "Y7Z3m1w8KBgyuHcw11dStHe57qBGM61wELtc4VqzrnYJF84H3PCsarBiRYKhrmiaRY1ERnTYMwSizgCgYMw4Hyr",
  "key3": "2e2h5PWH4hdQ83UwD1JBZYwFqcVAmBH836w1jnBBvn8Uo6JsnMdsFeFFLP4oJhy97tcEduc1bxx4rSACRhhc5S5b",
  "key4": "9KujFiVRzqxorng9JVE65w2ZtQAMrCEhwhrhXxHZmbNFKh47T8ZzU8eNBkhGieVanNP6uAj39d6amp58WHnJjDM",
  "key5": "44k4w51eapyLrVe1veB9mGKkY1LupaYFRaCSASWYctr4vkJiQnW5K6UCGxHjaTtDNrnKhZ9XTb7nDsXCyuxFW8EE",
  "key6": "5DH9P8aSk4HFnx69WmcHwxReD36EwcuhKBe39kJpgQaJikbx4W9U3KQMVtxKb8fKdTpUjdRLRvzdru7TVayZpt8N",
  "key7": "Kr2ZoB61QMbVHQ3AziGyd42iQgKyGHDNMB5m9i9MUzsXCtzbFWYME6PmTEhFzoH1CLoGBf9oQAjAJ844DaSAAuN",
  "key8": "5eu23PWx6td2aDGgLRZUJD4y8HB9UgwMYe44ARRTizLPv2SoqGSqCiQMxmTS9vv5aS5pUAm29Th6XoHaCc5DNLCs",
  "key9": "8uJg4S2SXPZZ6csjU8u9aZCCisbhT41U7V2UEDC5EpZ7XVaJokPAjtyny6pbmput9wNziVY85o6y5DivmtuFtCB",
  "key10": "4oyRf5TmLtcdb5d2YwAeD6CNGLiYBkatq1yGVZJZY8Pr2WRDiMsKvBHM8LYa48j8xpK9PxUbQNJNasiBVx3JNSqQ",
  "key11": "46TP2vpsWfFVrkMeNEc2NmVKEqA4WYe6iSaFNPzDUAV9f9nrDgpBhGohJ8Ckab3cLrV9w8wpDa4F4BbFjo6Vh8Cm",
  "key12": "5kq2Y5iLXf8K9gVFGte5CeRGgizrtk6LHjUHdgAov6Jw6R9fWi3hFqz5hpzft5HUixAg5DgcbN75tpMiGG89yT25",
  "key13": "39zurV2GMdb2XHapfChga8FWvho5251R3a1mopU2n49UUuh9XXwcSugaRuJhRie947jiVKqf2XMxKtHU7c5Pvztd",
  "key14": "2D9jHMaaTW8zgtZkaXsSRbkyod783wmPGtpWcmoDz6cZpA4xmNRC9YLSGHdPfSUGLV33mqjpbrqt7y7VNcxBbnj2",
  "key15": "7Zxoci1fKYbyeMxWTajtmjus2QcPeKcxmbkxNZzqMk58S9oZE4jquQxqBpZoW9kcyWgXN6oJtVxjNLcTXdPUApd",
  "key16": "3jHBLa6NmFQ2fcAcR5wKGVio3iHYyc8kznBGDt9iRJxnEj7GxBhgVoY5Uq9orJ31ZA9kmaPiE2UZEFnsGqmYrrZ1",
  "key17": "3AbSWrCduRZJ2AgyKchep54aK322HSwpPEg5dHF1Hq3Z4PbBk8XuJjLwCeMC8zJvYnbAydMDw6z7v7xWHqQtVADj",
  "key18": "kmzS79t47xJochwqPjtrLBEM9YTkVEkpxg95ZUrkqKjjZt5FMHKnN9XTRcQEedS5giHsBABLpgZ1NyzLQg3wxfb",
  "key19": "122BpCvd4gu1v9kijmhgaoCJBTQ148bqtQn1H6HrvUDC3GjGGKmcXUCnSFJhf6VJYPNFc1guotBzSsVvCGvSbfiN",
  "key20": "4DxYqhvzVxC4RUXJCkdCDYDW93kt12tteM957LeN8wY4ECCDR1tHvvfoJFdpPZ5GKayegRb4Qmt3pCsFDm7wE2EQ",
  "key21": "26MynFiFXsacDNKtmWPiLw9TvYEAG6N45APcvenpt8C3A5RV7m49cNmJ1a9hAdsZn5ayKT2tj3LV9ooBYXprLctE",
  "key22": "58LXR1jsANBLjG18bibfzpEgQwBAoaMGs3UotTJDJQgdex1Ne93RbGN6fJBnvRzGCpnFX9dSJSVNZ4Apw9CMR8nw",
  "key23": "2eK11bS4x3wKfcHnzEjrHLpSp8x1Td1D6XfhZrN7LsYuwRhVem4gKsecPhWSLb5Mwd1FPM7hEb4gdjHYXGRWgo2c",
  "key24": "44UooEaqWYuAB42bEWBnosYgaq3sevo81i7YsPKatE2SqTg79vKufow6Bs1FS6vmD5nWzCSYgk9ud98czCYRtR8h",
  "key25": "5SangP3LXk9YNtcH8cawssQDJ3uxjbRnVLP8V49naa52Grn1VEDVAZmHJ3hyXXKJJt2ebzTvLehJvtKrhLeK4Bg4",
  "key26": "3RPvwGs3wLz9sRpeuUzJJ2GUR8DK4UcbodVvvYMSYmnghAZjJUeyLFaqRfFJNVTVJjphZTzZGZinWGEM3kGrTwqC",
  "key27": "2dCGD3FjxFBabnQXwFBma5AKH2oCAFDoryhDLcBcjfPN1naZh1ti94xsMpuwdrRFkkS69APWi25cAyWpMByYyUNb",
  "key28": "3y8WoDN3p3Mq6mC3UPivkdbBaXTZBJiUBAxP9xjshpgiGVLS3o6sm8ua1w21HM75Lv9UeDCzDWFRx5z9z51v3f23",
  "key29": "2rMDJ2hGTRrFt9VUAcgUAKnJr8upHmr7iyLDU76UsyQM1kpJeV9Zs1eKwLKVYbG5EeB1FSEyaRe1uvfFgarUw5V8",
  "key30": "56bHUkNgxodkBVysNSVHPbbV81QFndE56aN6xDKsnaWqTeBPMrWozByabc8JcZeeFhUJ8NuPnmLiEk8MtP6KWoVK",
  "key31": "4y3R8ryQVqkNQXnX3ap6vhdx3bZ6MmRucQxsaA4foYkZWt9GxDMuCwQPsNfXqJkXXzCPnZiLaDScFsKovHKytgN2"
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
