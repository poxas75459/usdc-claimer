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
    "VbmcK4tezsJm1T3Dvu9UbSUsJX1UWADpYgHDL6cDLMm5YCX7bjqQLFCWViAd4wwWtwuEFrSLcELESsEKxN4EjUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GuapYMaYtg1qJMcD1Z4HYzH7WzuJMV8Ui2HvfYv6BQNLcCZozjaWKdwRgpa44sVDGB7n4qyCpHe9uddoBSQCBpi",
  "key1": "2NYZNkuguLT4x3kKsQxGTx2WgaoW3tsnFjduNqcuuYBtmioh3MduAQkVT99zXb7CinN6ZzoYjkwvzAC7UcN2x3jU",
  "key2": "f5vYzV2q7Ho2LymzzEr9xyZWgXwQMsJuY3ZTKhVNsFd4jJguaAC6fUu1kewHk3sQoTMzYfXpToBuS6GnsVBWv4j",
  "key3": "3rqm6fdLsMjFWFpa79FDJFgShJjDDZiScvGyGm8attNjQZWpkZ9KhMKvsBYG5677gMUc1R9NghxTKonJTvMevC2",
  "key4": "xCB6Dxk92nXDNteV9UrHxkHXjDiG7eUaKnCgNzz8V3aPWcoseddvVhAAH5QEDGm4c93rwPPv3bKtBNr3vzEHLGz",
  "key5": "4AvHBfaN1Q43CTSiwfuYJczgSjhzhXnrmKBdqon4doSoNxfsiDL5ePMffkDaxFBy8ipguExaqU7UA8P16XyFyJkS",
  "key6": "w4asGZcRn5mEb71UgaifPwAeYZsEZnpfjL86yWrBd1rWMciVcKHV3S1LHfmDEN5MiPwSE4X1erXbqaacwJTtE6r",
  "key7": "5NWvHtgQ4bRdNhJpRxWFgh6ZhAN521LXKhp2wwHtCUcDr9zkxfCAMw8ZKDxf9w1sfaXi1FUXzx53WS8KiubJwk4J",
  "key8": "3EQ911mtDxqE7ua6V6xfBWkf1sv74wMiC6vszv7BKGKcwjwgHCGitZhJmnBP1h7q465FoWnpUwKGiuwAHsQrs8kb",
  "key9": "2tDEham2pHgzy4ffpVs3Ja2QAsFvD1Sxy5bGQBvZEyprC8eaSS3RSQ7k77JuTH1WZMqxjqPVrLhdoPF2Tm8teaFX",
  "key10": "BoNnW5yDK8Rceo9bYimmJaGCFBJ3nKtdtZBV8SMsz4SL8T3cVkd7ZreYdnS1u14vtQkTHyBaNZohBCmXXjFzpWu",
  "key11": "HvmECj8D4SVRLKysDiLKoy8GdeASD2SYL49esFXD5AZEvKbQLpxBdU9RrxD7JquRTCdwmCk8DY4Mov8ma7hPiry",
  "key12": "4TU6USj3o1udtCS2FMfFZv57Qq4oEMJeLS8B9wLZfoJ9ubKbTK9iHriG4LFiMphncYfpz9Yh6eHbLW6pLXJcniWN",
  "key13": "4GS5UeHwsRbBu83Xp4ie92dYiLWmD233tDtg3HVNn5V44oGarDJA3mkDVdfFzsGheG2syZVEkHCw65ptwqm4M2Kd",
  "key14": "5PcumUBRkp1NhuVsJTNU9AK4xmrZHGbXAw9jEV32hsDqy4PbLnc1vmjyGgN8A5xsUX5ckeWodpcEh15XaHgibMEW",
  "key15": "5X7qYTbsmH7bznkremzv2LTULD5mJrfzc4fEVoXstUNvJUPKoqEkJGaXc3L4sty9j9Wd2mrd5BzerxMfEBSFCiEv",
  "key16": "2mRyUUbbeY2t4JqY5Df8Mud2nngL9PKvjhrAMk4QMUYSVczFUTJrA2rbDzuVNcBKzBvQqw31LhbYy3bF33UZEE5Q",
  "key17": "4u9Vg4gCpVNuTAGGPCGbvJHhMDc5w6UuQ2PjS8tyba55bkzwtePNzQ3rXzFmLRWQo2k6gciR98nMwea92KrAgQvc",
  "key18": "BYWjTtBJDtdEzvK37sHJRJWjNBhMgiDs7JDN815JmcS2WikVKqC6PVkNcwSpPkfsmmS1knAQBz9T87dZEVDZ6JH",
  "key19": "5WpRdLuPc6wU1q8pub4ptdFua8sB7pPnasJSbHcuzr5jmmqmsAyTMvUkUGV6edwSN2ftY8agm1pVTWM8wEjKuXww",
  "key20": "4u8GyMaiL7uiauodicEZjSRTLse9ksQyfp2WQqXMPjpcfxA956N1v141byLL1425vCNenWEzUEsAiQXVNfQQndsY",
  "key21": "5AHZwdHArPYxz3W4GjCr4Kie468qUL8ui46s7VsNpttEhuPfkCfC6iubtrZTjeCJNaiApy5i5iibUJAvB3ttz3wa",
  "key22": "5YjYPfbtFmUvwvuBzeju7PLPn4jU5ReehzVdnAGsnzymFhmvaoaW8zcQx1CeuxYRo2TJjumZPDt2y62aY4FwrHoX",
  "key23": "j7byCiZ31UpX4VvrG9zrw23k7UxuXZHCqwMa9uWxAusFK2ZKwUswXdmAibZ7X5HrLxtmm2CF8xF1Fjps85bGF9F",
  "key24": "xAwk7auanAos7SqGExRTZF12Z2acQbk2q7J1yFy7w6s8aiiAHUdYGEhRJudZpFKwCfL3TZWpVCKFFPUidQMqqcZ",
  "key25": "4261EChwC4Qfw5vzz74gajATqfbnCdECFcjzPpWmGs4yfnH9YN2F4ebaQJ7MD37R9RRAEkELeasH67NVDJp38YMM",
  "key26": "2uj7KPhsA9UoD61kdshAQR3KGtwVipBbdYREzeT3mymUv3bq3X1ZafiprXeYer1VW5HpmG7KQkqUSjGJjw4EqnXU",
  "key27": "nHrKdcQSxPTduS5Gzi2SpBP7N4vWLLnDWbhB1kNThrE5TmdhtJRYNzEnmb4mjoGDXvoQHH4rAHaQFdG7EYYdB2p"
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
