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
    "4EQeEDSLAqNRdvwmBdag8h6UcVAxjZNEhMWQEXvXbJ97SPkhSuAWTsoyDXd22FhCh7Fue6AM8YdDNDpUWcrRrx4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eh6cTv6b2bkhtyJWrxpetpsZpd6JUUtY2B9XWD5NPx8DwhEktxKJXPBCR9ZSNw2sDCNNp4ZTGtosPQJqAzfKmTs",
  "key1": "jUrgUz6nxTPjqyRRq45udsoEBHMWQTokoAbESPPr9kZ43etv2h13tNp11rDsdX74nQcCehWuX69vAmj8aTuVZCW",
  "key2": "2hRy9yMj6iRTgHqfjDU98nu4Z2kKHSw6ait9n8md6UwUTBmJfAqE87ztGEun7yUkDfn9qGxVsHN2uKn3itdbkivr",
  "key3": "2NEnru4DgXR8i7dJv1VNu19PW23chfLcqkoZ851vgx2V6XYJkR12A8XSE4qKxeUsL6WKBgPHQFChnGwcGokiAutr",
  "key4": "3e91QAgC3zAAixMEJy8A4mBgcaG7Gxv9dW49EMkkwxupWZ21UEBkZvb6TrW2DccvkgeXjXBxpyK7TmALY9GTBDMq",
  "key5": "2Hjy3Gb6WRUQxKgnjNsg8D6M63KuXZeNoACkxaMJUEiYpARFM9iY5LKdTys3iu6sfoFieq9sMLF6uAz861aQ9Xk7",
  "key6": "3ehoXtgoTd4SoN6q8ss2N526op3Q65v6NdoCcfAdJtFCNDGPsTN2RRrHNh9x23uT5BDM7ffk4oDjzEKnbdFCJn1J",
  "key7": "8gG5tykeAxdoXVBHwtvYtK9qQQFb2r2KKfEnnNZBBV6tHyqoquqhqZn6gWxyGidi7pf3LwxgRHAPy4cm5gkmD61",
  "key8": "qpNmtEHGXYDKTRgdnqp1znN28kyPTe1C3b2NmvfD3yEEPf6CLUmwHWALSBChCUQ5SfmsR76CveZqX5SQGDTjy3m",
  "key9": "2bWqexvcRk6uNKieMT3FiWwkmy6VojviQrYgi8hE2Eegpn3TkFKZF6ob5QRQTTK6GygqWcZ2G62jhcCdhu4DeDxy",
  "key10": "38JVQybawAHEqWWVAjRbVUPxUkhy4m2qRk1W2mzP2uPdBYuvcdqtij5mWa3AvhSqSvLef2mimLnfJFZzT5Xsp7fd",
  "key11": "2v5LV1J3oZvLB6oXULUPKJ6dUzW6Xs7Z2zSSiebZ2yPw8YzcdvvfNdVatsdN7iU4N8HMikWBadCTvabhJDYi1Pyc",
  "key12": "nmLd3hm856SA1JJkKuqmZaCHtsur98uCn2KD6Fu1UEmJAe3fDPBxBLFua5sAFqfZfX1tHNxBdCkjmgoGjciBpwo",
  "key13": "Kc5ziJwsAqzxMXK3NoTgFKvdeHFquuXxwEcngiMxVH4phfemYmm5Hx8UBUdBYJWDxsYismQF1kixNZ8JQE5Jfwi",
  "key14": "41s8J27Qf1NtBcrY6TiCzGNaF8XTKnGcfQEhcuttqYod6by1pNyPFYBHjHC8BCixMsFMv1skkDpFCrGnbqXRfnAs",
  "key15": "ixDJboBw7gKSfsZgHW65B5amBWjPNWkVfzrRx9P1TMmQ7Cv1FqGAwvyEtfHBsVg5ftJNfqTPVXWHNreTR6HWPjS",
  "key16": "4gRm1YJBCZndtiv3XuG9XsZAMHx8UCoQHxJDmDcrEPHR61bwroNiRQz1Mguu3bzobF4txBPs45sCSyukSZdu5bYZ",
  "key17": "4a2PfbXCu9MFEVQdjssoqysL4hV3fGVac2umdWinf5ZC4MSnGWH6bgeSti3gZFy6HLYEe9PhrU8EkqDDGQyyZobw",
  "key18": "2k7w99bAYhZyXdmmhAAmLGib4qT7g35LTfhGpemwXGv2y2T4qqG1uogaZbVTHMtVN6vUCbYk4qFdWs1ytRm4E67n",
  "key19": "3gxodLXidkEHwZPaNjccNQVeT9wekAcdDa7LeR7suSB4KVU7doRKrddX2T6zT8mAL4PvPy8JsvPSJWF2LqbN4hhy",
  "key20": "2JCdnxoBnd3FKHdbcqhgJwZmmhPzxe7SZUcRVMgmjXHSEmXdtKjG5UQg5W2yvoDLoN2csT4QjyQ2BiNsoZf4CePz",
  "key21": "2wrNNsqDjhf5JasT8Kao4jcM1jGUPeo6EG6RZ8Q8AMyaBL6vqy5mJiCyxNto314tPLJjhF9QdnAB3yPhWvhhnaz1",
  "key22": "5APz1atVCFM2vrFS5BbwXAgfSjJXyu2ubSb8Fs9xbgPSRXE3xZ5FLghz8Yu1kPMVYNQgHNnRRyuCZhbg3empAyC5",
  "key23": "pvcXzmrc4mfziSJNNip5qVHQVTEVp5wrJmmnJo9Z8joaomojfkp41QQWHndub4ABC1eS4bMQpFhbbqaLVoVSVAC",
  "key24": "4Fag9e1bj6KvwuadzvhdS8t1UEphmviEW6B5fEJ6fN6ZNKhmtJGHt7SoDGJLrXyChVJYmMjgyRYty8cnweKJq5u2",
  "key25": "5Z3vJYNngEJLyznFsgfDJt2TDMRBP6jEMsjKMUFJpwSJtLPkrXQfPvn5KhWVkQhRJ32vjuEVcNgPKir9SY3dTCwi",
  "key26": "4FNSC8xdz9pJQmmqk7etTWPGGCGR3fqv5NjnTydSjxqdofChnAvt63acAKDuzhYbi6ZRUS9vT1ATu7LDNjq1eCFr",
  "key27": "tyXWbJ9zY1xkMx6YgBsf7uBzBTXemNL4aTucRU53DvxTir6n2iWt7vgNuxHa7XZR8UdZXhdj9S2YQAXNH66VhBp",
  "key28": "9xoA21H4nMTRSo97nQ59mK9NQYHrW6r8jjvMr3HTcmhawuAkLv3V9KLT1H1QS4AJig8JVAqeErr8iZEFdH2bXtJ",
  "key29": "3G2HcEE7iycbrASfcmDuLPVgVkywnTrQcU8Pu3k2hbBa2oBuGBTAdQaqQiiTn3m4ZogtRKeq5RZ7Wnk8nCokdeJy",
  "key30": "5L7FEWsBPfd2W7xTeZTqnkxyAu5q87wjwPf2fuUAzPpGKJKCu28jZxqTHa4x13L638AptkQuuAcgPyMEKeiFcDGr",
  "key31": "2qTVEuRhrEm4UPxVbPfw9U7sDvEC6URRmroghVQaW4oi1pv6PGA6qn4jjxNT5NfJTZ5NsDV3fBeqaCtotekSN9gV",
  "key32": "3EutCzJkkS8DyPjXZJHiA8iLPizbjjghDA1HHEYxwoR9sQc1esipc9mc7yFguDj1zWYEKdM99vRSiBrd25RNVmE6"
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
