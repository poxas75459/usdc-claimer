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
    "3UA7KkWtEXBbVDQf9H2yW9XhaqWCB7q985pUAFD7pcDxgqjpP5KzZJTcmczpEu2Nfavmqx7xKsR2oaCNKHyD8Vbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25PFCHvQGJRT9Rba6UsnYeydSnwQpAVgcQnQsG1fy1B6LYYiktdrLrWs2DTczCbusGnjVPhPhEhcaHqWHecEw8u4",
  "key1": "5wTVLAs8uf549dW4vy4X3UDSNLE4QcCYhWCP1DbGuL6VYURBC9eAhVdK5kLmNDKWWneza5hGNVw22JdEU89zkikt",
  "key2": "2q8oZyF13vJ6GYvQSxjHTePepCF4Qu3XxmqPHUYo27dSUepHx1M4CCYPe8UNxsq9ohgwNGTZ7giBULtNpYNSxo7j",
  "key3": "UzMTH9mui4Umz3FAvaBry3kde7QfQP3gSYQ63cr3qbLQAt8TwMWN7ZZJfy9N8iSdeRfHWSvUuFsFoBXJ8ZpTcvU",
  "key4": "2LMSSwf2r7r5E4a1iWKcFXSSVDHauVqswJ1Z5X4Su7PSUtVKyhmb1DP1mojWm6cqxn7HeTvdAz2uhBy2myjR2JNR",
  "key5": "2bLKmCRZB6APV9Ms6jcsgLfPPjQtsAsYmHBfTPMo62EC39NLKb6svk9UrFknGZThXQ36RGm2uSG4gYTDUSiwD1za",
  "key6": "3HWXLamsXp8y6QFP9zwtP8MhbgDgqWHhkY29YX73oQ1R5r1yJ8LXkRVDmYQoJtkuqEBTaCBjNf8rn1d4VCLLQdeY",
  "key7": "KfEfx97fFtKKFegtdLSyiiX4CifraSEeDCpj8QAh7s1cVrZUvvGPwcjPU7hWXa4jqSWVNRccGgGeCnMdXfKaKut",
  "key8": "4WueQkTGVjYgooyRfmk71ArgukTuhXpherGNms5jTpEpTfFdz4Q9RuEH5NSJ1MgxmmubV46Mck1xKwSTaGdfrmmX",
  "key9": "27LoVMhyyY9NmPPTwQNcXfNKyzfjBBc1bQArJBoDWuGfYcn77sLrcYhuPWM7QVurGBdN8bLR39TyxLXLyF2dc9eL",
  "key10": "3UkMU48SdAPxgNHnjP7rs3kN515CNNQDLgSmQkWvfEWWzHNrDRtTxKAjSY36oSpnkH5YCicnnZ1YNfDQ1vf6sbWK",
  "key11": "5NitNSGcedud6i2oaqfBN4fTo1g6PtfzyZhiiqsirtARUwd2irzzwZ3cYYXdEEYP1zHp15EyvaAS5Ty8rRP1iDQo",
  "key12": "36H34XZFnpKUkmzP2kP6GyJsfMWh9QLQy9PCHgRtaP3hewfgRDNKNpFBBn38jMB4PUYevjzFi6fp9gYR9e5tvVuA",
  "key13": "2FHh9YxaPdzEzXe5KsQQJxYwMjksUWM3WGqn6PS3YYhWAa62AYfTZrsSKuzoMRcicHkaRndbuc1MtnKW6WxsqTHZ",
  "key14": "5duHvkd8h9Sqr2YVyCniHnxz1BYZpZboLjNSymYJnz6Lku5ANtj6XzzdccQP14n5gwG6QuqsXnpmSRG87i1kz6AT",
  "key15": "4dt6SYagL9mvVaJsuZTNMH4nEJrbECr6A3FmQWkFWr9mTrp5xWAYE8dg8XXBwY7YD9mKix6CNNEU36VNgxaBZATf",
  "key16": "4GnEu3PeJASUCVdSRC7yNLqHNugv8nwEvnjEDby1nSUnKYhSuSoLsfhhH2dUdEmNKjnuvtHVZfNgY7y9u2aN47wV",
  "key17": "4vZ25tjWnHWwC2HQkRyqcVMrrhp33iP8wnu2QP6JhiXtwTGeueBWYYpp2aJAPazFEfEReAx3nv5ktZHFTbALsTu7",
  "key18": "2XdACY5tbpqWUqbQBkYGjzLcC3y18STFaDJWH63TsRhpjEpFegZvqBkwDj1mxEbJkuES82HPDT4QoWWboXMWnepA",
  "key19": "55dwQ8nFhrs34GRjTHY1Bih3ouRgLzP7Qe7fwTE9GtQCKsbHA3DUN7zRAqLsZsmHS8hXf8kRYEv6BtosQp8BRUVo",
  "key20": "2EooE3hW4wms484CRfoE1zA3pthAVnqzbm519bRd3a5YHWCkWfkUvS94ySu1k52oRqcswM7buMmG6cYZ4TC4TPbG",
  "key21": "4nbSt4Tydfrc679D5QMpEEUYUegMmrBp6EYfiq3fdzxTyv9YgRMZK34kL1UY22xykQJ4L4xWFkBZ38FPCuVMzvZB",
  "key22": "2n7PcV5zhi9BKP6RUmGmndk6dCrKFkckFfDvvFN17MrqCMoAFKNQYr42HvQBRcKq7NRjozrwmJWf8Gj7v29wV9cj",
  "key23": "2FQYCt7UjwqtarbxuRuLHrmeL5h4gP83Lwn3NrQp4YnttECtSjz93GXWmpYyaMQA8MnUTYeRtmLLfAryLaifE2ER",
  "key24": "3PrXiSvhUYQDT4ipvhdriuFgzaYmtzCif41YB2ngJdB5tUPsqmmMsrfX57dCLxnMWb5Ym7ZWvSiuYHXb1C5wkFV5",
  "key25": "3Fr1yxpW9K6NMHfhzqJd2puVeT31fwCs95QYVXyZ9dqwLoq1jJWLdf9Pifkyrk7fs6TToXx18D9V2AtLNHXqGRnJ",
  "key26": "4LgeSs6oLR84bfLoPDSmZ3Y6kSjJ8WicMZknphEXYZUSQdwWVUU8LKVfA1g4tKfhrH4DEW9aKhiDgGsUscWFktD9",
  "key27": "yGgj8JfZNqbCp69N461xMwakFsjng2vZujy2VAkpQtnzEmbzCkHPHjgGo4ybj87qUxMEd2DVEEenw5w5K4mHL9m",
  "key28": "2NmbSsFvGMkZRTDZPZhiQG21bVJENLemmZz8FgbFSnNC8inpwAbrX5DxomLjA8aj7B7RaVNAS3Q4hTaKJUjk17fA",
  "key29": "3PAFYa9jb9rrWoBcsamgQpnGViMjP1EDiTEArS6xBkoaDmNWhVhfCfcUGFyFopbDNdiTS1M4JHM4hNpAfnEL9hG6",
  "key30": "2csZLC6m4eGAzuJFuZsToWHzQLXfsHpYHBDpHbcGvR2krUwqC2PtsyAPXGSA97qg2p6Mm25t9yqYv17apiLmB1xp",
  "key31": "4qJchz5X98LyPY4JJERCaTKj5CE8nHuU2X9UkQokxZMtMm3tWNavcma8Tmp4JWKwxLnGG8gsqkB2sxxFXLoj9cSa",
  "key32": "ixesaQ5b6m4aQES5mLRjBKDMfvr6ZYcihUbfR7PV146DAx3xyq7yXsgF11wfCSnA2b3fx1x5dgeV5CVe4C9TFJB",
  "key33": "54S5ssoAyNWZ5f6rYfMd9m7vijzjKSbkV4e95ty1s818FHpZrpjGJBVUQ8jyRwssJLRuuvdiJrQJYaRxnjCD9R3V"
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
