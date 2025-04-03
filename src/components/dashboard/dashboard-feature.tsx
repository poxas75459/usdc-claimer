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
    "4BqzrAzVjbscfXdBcW4ykCS62dzj9KTt2Eg2JcfFzjkkDwxAAM5wcFg16un3LqCZ792Ang3gEgEh2ewdSA95UHJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hi6MTMV3c8did6HEEn7qV4gUZPmH36rqyngdhEodzPvwtahzdsUCAKY5dzZJwVNMcDgTUDNrQ1aDsQZj7JAgjHe",
  "key1": "RQNLDvZ8Do3LAKf3m765fh9wu2sbAa8zgqqjC2tcPjX3zZdpJTsAernjie89sSvdi6354vUuBsocCwssYHr5hmd",
  "key2": "3uWyvjR7s1hA8YaezmG9i7Wob9LCRS65gZ7gxzBCAqkeiWxD5rXadyxCVAyQxBX9XsgDworpqXWpzPFfFMNdwxC3",
  "key3": "28meMNoDnZzV8pFzN9TVvC8XCMr2rY71TYftmNg6H8eK6hihPEFkboAJknQW4N3zy7tYDwHhxuj95VGNkYb3mHaG",
  "key4": "67n5YiZyBRkym7BWVotbHytyxmykCNzkoAUddKKd9ibsqKSLzcswRMGCcBsLqibcuNg3mj3Ug1B1B9GjkfjLV5th",
  "key5": "66uGCACeCX3oM5uhZTr36gxG69Et2H75nP1aPHs6spiH2K4cjtrYwe6xjXvNg6RwaYGUvMpvZJvzJ2Lyd4GWFPo2",
  "key6": "2JRGsCxKSGqLPwdWa7w6xSq7fBvMA8QvswwjexJhYsYjDkGHBMQN8Ts1U3fSAdz2DGBkovjR9iVB79d1D6dW8sPD",
  "key7": "2kLV9szoWHyGbJSCw1jaWctaYaqvvq4qXry4UQz3qbwHfeL3E745EjteatU46LtX2soQUmxRzUdhLDsPNXoLSnnk",
  "key8": "5Yt39PbDtatMNq3cJyPG73D6TTw2yuDJsj5jh8qfdbbfdMJ6esKUZchk2DX8ZoS7GdnUYPKY1ZywVGZFUVThzkw5",
  "key9": "fiSjSCJfeky6HHKfSNdJ5KUuyo6XNn68BCYAgn8bfj4oTQb1NT3JpJ2dkdUwhC8hkdvqmsoVpsbBmoDv9VLXFy3",
  "key10": "4fBJuzWcqwKRtBemAeP4VCBg8EcBMfvwuRheamA1kuZKpq3oBLkQf657ShUGxo1xD7MnUX9T3dXv4MSEASQ6Qq1w",
  "key11": "3z79z1Wut8G7VWrmBoGuzaGj7zXQ32sNTSv3MiC8SmHmS5cZtTY1rhSjAzSdpFhvWPZLsWjcbJRiHZ7qrnNZjpa",
  "key12": "5SgZYSh9MF4PcvX39pkMKhXhpZY7tkGmT6s8uJ8R1zXmcaeee8jnbqwqFHKtQP1XEcSFDGxvYfNaciWJDco291E9",
  "key13": "4Jr5ZR1gtEQP4pJERSPf6pJpfe3Un5cyaqzjXKvhRDSNDTnKmLmcZDESQD8rwWzVStJpPSx7KE5Dr4mfMu9XDi6q",
  "key14": "MaahB8MqEmHmGh4Cda7FJ78zf5myXb8HieymZLmCgvCgEiwanZsUjKx4WgT3uAvx3wjLphfH3CQJn7o42xnUKXY",
  "key15": "9Px6ibNFwdr2aiuuaAyk7CJYEdAd43n2nK4o8dSGnPqq9ysy3nnJpmKBAxb43hJ7FcU8iLfmETXTXs9gRcg3bZ5",
  "key16": "5BpR8mXRg7SCTRTLfvwtnZvFJcByCkrPJmT1VuzDydzmpRRjcMMrf9YGPFkKRzzn7k5hfCY7v45MtTCiRCH3jrJC",
  "key17": "2jNBDdNGhkCb1gfEiMgAaR4XiHgTzdioedYqWG83XBjfFKo2edxexpcfyGUxBKKec2kp9DjysYzEEmtcXhpanMFj",
  "key18": "4Hk6Ebia8Sog9Qy8ky93d2m7Sx9Jzv7VZbAWomAZ2PXtUcvbAGwbAa2LWXgzTWBeuQCmetA8nn41GfUnfcf64wVk",
  "key19": "js4Rcnz6dS8vhjxhfUveJHh8HyabKAaCpQqHg27XKQFzEXqaSKx8Aa52a7WKPCcuqfgraJKX6YNYUYewC2yJft2",
  "key20": "2KqsMf7Er4BPWXF7wYSuMtQ8eZnz2gxdYLx85DviJtiyGrXBD1ELtRKUFjyvn8C3nUgkw6U1cTtPuVGbXoNFEwTN",
  "key21": "2pZDn96GdtDC2qNpAv7zAagWVC2z1RsjZzrKxZRUkf4NtX5PUi3JbZakCP8JXUdpUnMcwYyJiMGieWmggJ47Xv3s",
  "key22": "299FviKfQy2H2gc6zycZybw3dgPwHmhTw6xd753MLeuC4oEqV4aFue98qKMFfn223vYmpJLv38eR14sPLyaRDGzx",
  "key23": "54xWabFGEryKgdsTigsjMcLwCBvjxqwUW7gdXYttyJ1doYKGWNusHKHuG6XKZ35GUsUWJz93HDEidTp7UZF5AxLh",
  "key24": "2j92Kh5oyfFrj54rVVSqdmUTJkTQ7ecGaAN93BiTsQt1eohtP8e7ydthJoGum165PHWHiPoERRpVgxB2DF4DQr5S",
  "key25": "45o3VPxjMgFXnRXjESnPfRjNLBcshjCdVhwk5LFC2BNUj8QrJgRtgqnRED9SAtcjNN8GxgzdBfbMWPNRk9xJxevk",
  "key26": "5GgoBRiCvFxjVHoeK4kwXbersUw16VYUVSBfysAMQMfvMD1FgRmYPSrHPq7fqBGBJqZV22fynvQsws2sPp9oHmhf",
  "key27": "27amL82Ym4s1CSZJQzcbdj4rQjYBqKFtMiWeNWTJwvtgEjuDomcdrAZeh1KrXbxJWkEPPTCBzGHvHV7zYJcyjLSf"
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
