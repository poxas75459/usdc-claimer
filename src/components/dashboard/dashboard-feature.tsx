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
    "5yGpVVqQi126nakapF8NReCaN5kC7HhEnDy9L7Xz2BY2S3SBmc3Eyt7iCUSk4c1HR8vAYtCto5qViUx48jFjfvHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43dKonvyxRhPWKKUer7dzcw7Ekqty7RhuYr5rZ4av7VxnKCJxcrkwxR8P3MW4J7Xway85ZkdSMrAdrz7RYPF3TRq",
  "key1": "3Q6TJyypzS7FL8FLbt7uZeRwmgbwfm4w62o1YcyhQQtNT5JJzT47dztorW1yhwjB1iV3kzAqPCsbj4CJz5pXS85b",
  "key2": "uDSjrvLg9VEYSF6F8p79jdaa2QySXgFujXKwhRrSfV5re7L5QmyUGUrcSopnUXzPAQpSZ248yVy1hEWtaW83Hur",
  "key3": "47MMiMw6sDnvqjiZetopMNCGMyAchhhev6R3YaouVYFvqjki2XmiDGp5Yud4spZUcokMmjLmHUFC3ZaF8am6s8HM",
  "key4": "3eqyFejuVKQNvWpzGHTCazUXxqJDnnhexKeV6dHnHdjFunZuTMwdy7Juuake76FVkpHsHRTis931tgmgGgzyLqXZ",
  "key5": "QnATyhPHTmss7VxYQhkdqgfaSc1XVzayRnfrBaJ8gN6yYDomoBx5cPrQXeu1KHoy8rAaNG3EthcfjGSjxypPh7g",
  "key6": "3q5chRuiqa55m7U5K3d7CapH3bhJDNGWZxPsx1CF61XGkBVkwhWSCW7b7ErMXvJoYFcZx85M2UQvEWuNFFAdDkM5",
  "key7": "2CZuw5m53QTkCHtJgMBq5pB8Jjkmo4s5QGaDvewRYsfNBaTXDnRupL64cf4Uronba155fwtvN1eBVNZRvcTFABr3",
  "key8": "3vypTdWXz8ZPQLaeFDRutxo2ygRSdGssqP9eUWjzjWPvhV7icB4Q63bLXTWS6h4eLz1BgTWhuayG3pcwyRFAvebd",
  "key9": "33ES7TVBtBz8hVejZRJLnFEthkpF1awiwjU94u5iuCT9JgEyLXVtNx5Hu9UCm1PpfWzvNfibPjhuLE7pGASkVKjK",
  "key10": "5a2rJmLWg9j1QoJffqZUbyz2sRiuGrrGzt76jgj26cLqmJagBRCMEBR4poW9bvADy66XNT8xmupumLm8GMpzbXdK",
  "key11": "imtJcdSGDervi8TNnHt14mgmvyBRVpdgLFxTmJBF54inxTiJHHQi8rZik7Z5BiHs4VPneiDMWJGFR5EZXn6Zrce",
  "key12": "V6kdoR6DyvwfSExqMwXvwwBFC2PjjsFGnni1QmSDSzENxMwDaATHx6f8ikqcBovwGhigq9GXE7veyNpHaLG39HL",
  "key13": "5oF3wWdKXwm61qMexGeD2U6FxNZrkqgeqsrcV7QdYfoVCYFeK27aN3y9H7AUi6unA7M5ZFwfm18QPSD2eK1rGXS6",
  "key14": "9HiSfkDUJSVpfUBW5pWYwSehoYacZi7n6juz5n9fgLcUkDV5onZ4i4VSrcQjLVEzDPwh14xuZiPekjXmH9Mw4Gj",
  "key15": "3NbQKp2NMysd14PvSEeRNdBmGLNEEArocBRdLaxWgFc7nxzAUjdwyXoHCZfm12KqcHHAvP4YeefGTDP97m2Q6DEQ",
  "key16": "5DwhdPFCf7Xg4VXrPbBV1GuZp6HhFEx89SRCvHtVGcGuL4SrSmKrKyNi5bVvT2KG29vSNLcwqXPGBmmrpCgUPKP5",
  "key17": "4GAC6PvBf3ZJJAsnS9EKE9JGPGBzQYgLSbBTu4gVDFcT84akT1cnte86ioPd5Jh22bZS7hGD5wSnyekskzaKKb2K",
  "key18": "QUuZbmvRsbeNFzJvN4eBzMS9r5J3WBEA8SzvJihVDT48zD9Lp6Chvg9AEtX7zfBfdQczLfG9a3WphbLrC2DLGwz",
  "key19": "2Zs46B3v8U6eWiXRLx4iH8ZXniMXs1o67GwQNfzwtUzSuU6JjDwT2bXC6nDd9MqQfLx6zeF8FXisBsmH5vCUrJ76",
  "key20": "3UWbXafBQK4n3hkKFxhK7rBXCvoD1BBXJqLJCE1t1i37ZkJs3FnP61U9Z1B3QCtBYxcHbwSPLVefUbugVqDmNjFN",
  "key21": "2G3UkWwZP69DKMMPe9aJBVyh2k1GHJTTzWpvxRx3W16QAsTf6jJyuDAdG8so56mrerM36ShhiLphDHEgxvh82Xwq",
  "key22": "2UnnLKcHSFXTq5TGgRoQQ7SeTaHPkv7Jd1eYCqicSdJWojKRTQyoru2P7K64KttyU8yuhQKX7fmENdb24VF4AEvX",
  "key23": "2Tt35BPXbYGUjC92Xxzifuia7sodx5FZeBmwCKqTbwT6JcUztTrt39YddYgFixuBQPEghYdL5bcrKiXqHiQCBW8i",
  "key24": "4qLDQ6THkgUFksQSjQ8fayo9ZrBz1pmd5jcqS9Meve1pbD65vEHJ1ABr7TPtqEmzGnSRoZHtfTLAuToJgs12v7Nx",
  "key25": "4xZDgZVQYwZ7ALAUqtTMpJxTTScz1QJUXZEugqPpjrtXCSzJNqwqvAdiyGMmnHMN8eCthgun9vEpcBts6JmqRtkh",
  "key26": "47xSuAjCeyZPoe5CSa1YD5aSgQZdvEFhUPZb1dRDjZ9MGHGLjThHi3gpWBEFDwzuDhtgWk4uEHSfH7iTv1guuZTB",
  "key27": "44jaaVeqj1bAYeHyy5b4Txc8JB8erF7WJaNLr4jdud6LwyNjdhLBfmyPoQWhatLeHuEdenKAkkNz47ahDk1BbzSw",
  "key28": "4xMEcemTsKNd6GTxXgdEnxrQ751Mxv8E1TXAH1LfFQsGn7Dzr153QSv9UMbSyrLG2KPMkrbcomCNHYGCaw53EWtj",
  "key29": "3opj959F3Ep9A4TssujuyUS2JkCLK2w5j6YauMLeuf6yGoLBMMxDCk55nXMs9eDSAPSTM9HwW44WsUwng6Z5HPMd",
  "key30": "2C56GEf68TEBy8WneMC86PYvZFcdRkiSp3KnGnPghzcfQLh9dRXjhczyeyxVyL9R8ToRfh8yLYw5b4hLbW1zS1zV",
  "key31": "2xRuWPqdNBd4d1wzPPcZnzthj4rw6eBzfynxshqma8LtDtgnzHFHPNpQqNVr8aPNqzjuLT6ouR5EPndMyj6pJSxj",
  "key32": "3WetkYqVTv7aUiBrjVK5PikkRDhx9pLz11uqxzKYiqhfgzbwqNA6AVuyKYmcTod1qbGYrZR6YkKHYYFNHezCDChy"
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
