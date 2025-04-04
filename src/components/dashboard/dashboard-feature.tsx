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
    "5n755xkogzp6ZDVYCGqMfGvpourVHyr6gYKAtnLsNwCDRg3iFtwyxjLGmZV1uRBp9for39sNhMEskNCPUd9GtAZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oQ3XnAAxEdNS9yZWKWbJXUdKhQ636sh5awkJagCwpJRBkojmp9qRG8i1bnFkTZPN3us44YpaSuCR9qaTRFr3Ym3",
  "key1": "42Kzka76sWWRKdCfXZbyHsV3HJyBbZ7H2qBsKujSKuo58fxfZGQSnSQqY9SkLQ3DaSp8BoeL27nyJV62mBD9DZSM",
  "key2": "yUgTgBT6xqAtq4PJffPA2U9pyznmaDi2f3QTpjvQhLDRasVKTLGZ4iBpKqpkGddvnbkzMNYrSa31Gupa5mAxmwi",
  "key3": "AEMsF9N3HNYo22GXBWeHaWVdAwWZL7MnzViPS8BFJitHwTVFm6SJyDnatfWAWVC4GtK8sgenRt1z5JArrCXAzce",
  "key4": "2MNTxAEHwyLkYoHdNiAniUfxaxcHoRbzZVL4xu3ZyH3qhAd4qfrG21XwkmJ3yCT3L4hWNbDxbZ1eagVe1YSyCRh5",
  "key5": "4nnkL5PRAFcAiWbcjtUyTugHfZdJQWh9GHAGDppJtDueZyLkCnCDbzVMpnENN6E1S81T3qhE7WLWDbii2z2NweDF",
  "key6": "Htq3ELZNjgN1V4o9JLDbXEr6DjSZj9hjXrVCDy7s3DWsDiQsaBzjZyFEKwQmWT7GQM6gupnC6HsMfnzQnhKwYkh",
  "key7": "337KjXQsM3W7qypBheakMuwaBLFUkJmXxU9QtunGmt9EfDQqpRUGxh774nr2YvMaXVdELt8w2FhKwp32qPK5zJNd",
  "key8": "5jxf2HjBa9MWpwsciMupFiv1PT5ByUnzEVTGB8xpuKmhK9Lp1jX3YpfddV8qrWQnn3RN5bRTtWyT8ovEXF2NC3YA",
  "key9": "yvZ9ri5YE1FHs6c7g96TZNTVgeXKyg5rLk8LxQWRY8wskD4Ag4pPJgBtkMu2Gd8bJd34wdvvQCffK9FvHz9Rsyv",
  "key10": "2U5BwGo3Tcxjha4hhTNmcw4UTkz19esKbWXJY74ugRoe9kueqqKeFsHxZU7nLh5MrgjVkSdjqfecq7YXpSXTEP4k",
  "key11": "MktnSoapRZ4mPe34VVj3Rb3pe2sgeep2iDXmmaQxUZyvnJyCiLWsDtBhzSUB96NYknsVaVPq6J5a5NnagRdLdEM",
  "key12": "5B7ae3P5SFgWDofoZQgvRHAV3CBiEjyaWUfa6ZW6e5YMppC3yZ1SbSuCqxED5YkzxQhuF1qg648qs4RUEuLVPPNs",
  "key13": "KPY3dPgmVSeMQzWg5NhYeKMfZhaer8ZifxqupPwUP6b3qtMGKciQtsacEbahRGDb1uCRrXXkQRsmDMCjYXeBW4R",
  "key14": "4QaAKmuuNwthXsoKckTgoYL9ht7J8h93XABjk6q4c7yx3ueDoe57YqKGL8hujYC7fTAnpaN3NgWfhE6uYaDZQB1c",
  "key15": "2AojGvvg141FAhbKpTBxWq6g2bKrf6xD9NJbbWrcc538dPNRsPdEMmoVPwwrEQ1HEWs7XfpiVQ9zUbUdpziptGbz",
  "key16": "sPoCSWGjzmB5X1YFdGtdHzxaUDESCVM4hWrFoqtffLhHQJDWzY6tswgiQ1ZXvihcAczwSKKX6S217JW5snBTS5r",
  "key17": "3V498Yeo454rXpYAtUyEVgu5CfAbjXqujpzV6HcPcPngnUgY8r2us6qnT1pP983YbnHgequXo8jnW5nKfnmBM64n",
  "key18": "4TVH2hEZvudrBwyCYkemCwu8AyNSxe5uVqd6GuW9Lszh53wDJDTu6a9JW35tbRXL6CHwpQpQf2H2mJYfUpWD38Wf",
  "key19": "QT9uNhasovzCHgAVPSXLXiG9N2hffwDsqAXbWMhCbC4yRzmzMnEbtGjzRXRsFWmpsTzSFisd1T13qG9f616GfZz",
  "key20": "44LZoLu1UnSdgHvBiw6sXLnXY4H3YXsniQQRhPVsKoHG56FpCwmshrU2KhrrksoRSAqFEPf6yj5pyGJ9Df3QfqbY",
  "key21": "5jT7HL9uAgPseLiWChM8PMPRtaubCtqBjrfgvGyUYTgQ9KcHo9AN8kMWBjND4vQNV5EiSAJBYSZujyJnfJ2VJPPS",
  "key22": "62EKMrcm56iAsrdVp5TFBZi9fyjRLydb5RTxWTgvkSRUkaLmRd4YUMYBrL5cbqskSRxeysy88YsrTwcSW5HzhwuF",
  "key23": "4b2LEN2LXaxy97qSZFdBSmqvXqEWrmkNp9ASUiPuKyALEQKz3u5ySL8PvVzcSN1iiWDwhsY6bq5f6oEK1fsF7Cjh",
  "key24": "4wG5k22Y8YE3J8EggEBPwX9FhBgxJJDeFVssFQ3n6AAgPR356DTtbHSTqUetTZCHmcXL8XievhfVfyzju32G5WaH",
  "key25": "4Qga5Uf7rFHqhVu3Ne4vemeVXtEai3ULejUUU3aeDMQDFRVpJZL12HUSkW9762SLQaexLHrWrNKWp3MqaH7rYrhC",
  "key26": "54PhsDCysCfXSm8oB5CQ1qRhtuaDtzWJu9biRwsKRjmVHicTcpcdqi9d94pbtNRB9zFRNESCz7h2VtVxKNPPJbL3",
  "key27": "4LsLzy55BCqB6RF8JgJXeSVNSMpFGQ5kVy9Hi8QZ2XUDc5U3a9nANvttvqVMmnHqGmRn4iDcqC2T3qq3vcu24vAK"
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
