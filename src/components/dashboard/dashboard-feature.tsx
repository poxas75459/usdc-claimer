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
    "8KwgwuWGC2UyDqdJgfWV5SpeNgRPme4G3miBt4hhzkZAc9wERJWXaXwM3bakdKC9JuKtJ1Z7o2u4JKG1xadekp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42AeUXuFsbkxbSWxYAjzLUWCV2Wz9cNefMCgkSGCZdT1ejWSG8V2XAEeVFDkGGnw3Cujpu2WrrfF6N7fJH6SjnDg",
  "key1": "f27uH9nPbAcNSAsZyijW2VVq53xMoXG1j53dqaiGGaTtrhe4TeEDHSb3U5dSPnerq7pGTFFkac3pFYUiKyjg13b",
  "key2": "25Vfvki1NMDDtJF3hfphxXwbgKHx18s6npwXPJd7RuPkgH6c4qgW1PUaHdHCihHedLnF5evyRmf8pPyWsXknLFfE",
  "key3": "33dGPamdamxLY7jmibZ7p9ProjPpUQRjTkEbusa5buw3TfCoaAaCPmSgoex687jc5UHKw32pWbKefFig5MFitZsi",
  "key4": "4covkk6xuUK8Hmb87nub3yp8rDVqmGJtCXnwbQP7W7jqCiwHT5fxQ8dY2ggye1Q7z7XGA1qWoUqHcyFNvqKYaCC2",
  "key5": "2EGJuNZ2P6kmHfN2n62mqbpJTGBqSnCQPe4bMGqiXM6TN1ru8wyjy3AqBn3Bm7c6FkdNxNrBW3V2vt1RiUFa3j8P",
  "key6": "4mcu52s6YBuVQp1wnFbukorRuc5YmA2bCioeYmHUE9e6Egy3mHL8XcsKmckLqfiE5iKVXkfJ675E8nAVxtudvDis",
  "key7": "MYRx4RgwRMryJDjBhMtbs6cQq6crcvt7ATiyfwWXz8Nz8oiUVRAVX2vDPL4AXq3EYk8xjBwqVV9Zq6eu698NKLQ",
  "key8": "39zGsng8mffF6xwSpyUoMJ4ekXwm1ctGo8ys4mqNTrMZnQrrUtwRPjdLUy27UiE2QYQdydx4eKwY7uubsKBkU9yc",
  "key9": "4TATCFUUbTw2AR8GKxFWSu7LKL7CqYN9TTNzkCGJzzw9jphqTfwZX8M6xV2oADuXo2qsHRQ9UdGs2ezt5gHHhz8A",
  "key10": "euAnpEixNJrSPnrPNuVGBnbvSUW2RBZErbwZjHBQvWj7qZSSVQFkxdevQ6vjAq6x7ZBJ6gaScY3bNGoRsEGZuLh",
  "key11": "4aWbMt8t366yj2tzsXwsx7shMsgxT9KvAwaiUYbRk8SjTqAM8u9EsZ6pQjNrRcpPUzf7a9ECeQH2jDznBFWYLLVN",
  "key12": "235fcXG3cQ3ZDWxoDn1ddTTDCpnMZv8nF3YeHHFwvsnz2DG5nkJBgkFrMi9joYTTMDvXEC5Jx8LFwZMQBnFF5oPm",
  "key13": "5tCAtLsgWVqfQWKTht7y4bLpV3WxaHFH6GDav6V1tEq8FdqV8L26bKoL8YkQYDVEN88ayVTjqXAbuRCCkdxn6Xpp",
  "key14": "4bPVWWMSEU39t14eSxSCfih3KnWsa9CgdmQhTpAopLFLiMEKM1CNTAWc22FAhBb7JZ53LbWar8XpWcGgRk7TyGu2",
  "key15": "5hdu9JTwhcDdHhXMqMjgTig3ZLWvRHE9j18q7hXNsi1fwr9BSdRNv2g5soFPTad4HWqyZ3artVuiGZW1gnQAZw4g",
  "key16": "5pakjafAcadNxPaQvGML9U3hecgQyphPfaeYict8YdsQHQRUrgGXUEUZfH5W8Nwm3MmirFHUWqp74LJsT5RdPQ3b",
  "key17": "5FqRoJ58a1TjNokXLX6NgHaAHotJ17iLdveWJCWKARZyrtLxS8droFXUvF8Jfjt1sGhsDCiDJGivWwZwSXm1P35U",
  "key18": "5vP1TzyjbVe7bcU4Yo3Ae9cER5WRQ2ZqXP7LUg89uJtRcvYkxoJw3Z4AZJagnaVrengT95t6n89pDLhXwiFXriXm",
  "key19": "4Lvyy5soLQCGL6UnmVoL2yDNDh493kYH3o7x86zbKUdmjysavMW9AB25kaPK4b4ojYGV1tDt9hmcoiECAPLbgWEe",
  "key20": "3MkRoUb9kckqFtckzzwUjHoaXkReBQEeLAmRhgpgAbFJabCC4imtJf4EMsnjrZHLkWyxnpitMU4g9gdxLNwuq9YZ",
  "key21": "3scAhCReoMpgCTiHGsBUqJ9Rgj4hrKLCmLxCyL7g1qzKHyFTagKfxaixpDH3WFycdduxd5cfA7ppi2kuAEHKbnHM",
  "key22": "61yTwnXwrB246qXtJmhastMsBn9B2U9krEHnDEsKnEMdH5JshRFnZPycbvzUegMkyNTDAxWjXpd45vFGLNTWde1q",
  "key23": "3JG2Z3qf1rMq296Dj57jLWuEtz5qytxdis9TgjFez6tN3cXQMfTJcWzHQUY4yvBCa57Y9k5gD217CCdHdBdQrfbN",
  "key24": "5jtBUceZ5jHQwR4Tv28G28ie73RedGaY5C7ZBCH6FT5e9qQGYeMCduLG746FEnKTW6gC2fg5xC5f7HgsyZtjb3uR",
  "key25": "2k8HXg3QQd1QLbEyMfjpKzZ2SayfBjnEkUHGzAsy6BFfVfjfHFqs99tePXuyeLFuegz7rAB1BAoBFmVnN8DytPFL"
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
