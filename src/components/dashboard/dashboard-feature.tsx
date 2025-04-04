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
    "ECmH81YGeLofA45WKGghYDfYCRF2eAdfJStVXi3TSgGUsNLMRLof7j1yHHjBTryVnLqBcmQqGMy8UpELgvhkw5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GVsFTRRWLxXMMtvTmS9cyFqd7qZjp6n6t5W78DNM2UfAGLxEb4kjCiEB1sxhEPtwY3cZVQwhD58t8CGNCnuiAnQ",
  "key1": "5paKDW3ULjpDmx6v1ddKPFfsxsZEJaPzXZDohwxfCVdu8PymbX1cdkom338JZSS8GRP8P8f6WTcJcnL7JjfYVVFy",
  "key2": "4qwdbHx7YuLEfwykxPpyBzP3uK5FYeipnjG52F4WkqneYNXL15Hnd1Ra7ycsoFgHbm9GHT4PbiUed42atTqFuB1B",
  "key3": "57osWETXLJnvYFVTfj8zKjatN6pD3vZc78e5rNvuYzfL9L1cxUg1Q42sD6NBUVYTbCmWC9hzxXJ2xGWfQZKXwaUm",
  "key4": "5tba15utnaCk5aQuhP9vLJKgkT4TTSSWGAQTeesPYq3p5zYzuXHQ7AZozNuXEaeK7AitdoZeh8u9gZYDBzj7G8eD",
  "key5": "61ZfT26c9ogk8kCicZZ3tNeq7XDXmURRxywki4hkasSaTreRtAPjPixLRfqDDtMMatVHUrBvAW1QWU41n3AQFXkK",
  "key6": "36TX2zdUuVPidsKVX6GrsgydiZjQ9ZSqUu63RbDcF2F44yVR7XiBBSY5bToXDnYobEFjweJKfyfnk5R3VRsUzwwY",
  "key7": "4fZv6vEPXgt2c5JiD8XcaMg1jHu91VCie27MC8oVhUdzF6oVDdzunS3ByXiNDVmitgEcXikQrjZ3tAGSmSrknn6T",
  "key8": "2FPUfQx6x6sKzZ21P1PLxu67fHfyVVabz1QtuuQ8JdjVX6usVUYT62uTBbF1JDsRv5uRKLQmKTvJV4fCVHbegjTh",
  "key9": "5ftv8KMjRJ6JFJm1LnUjaAC3hPctoHtFkw2HFPeVYWC21xdYpLLvs3gUm1FkLLN3JtY7uuStxBK8eNRdjXAoMJ9Z",
  "key10": "FUmXtUMw6iMwGMFWfaww2iQtMLepQ9uFqUM9G5F692CeJppjREjx2bGhHWKCc9eyJnzsEBZghD5vXySz3Ru5iS1",
  "key11": "QB4euJNRibz4JLjBHYUpfBo2pcFeAnbqQ2J3uER1g8Rw75nYaFbBardkMFJmXPoMBA9zwZsh9U7J7rCS6FynHe8",
  "key12": "5c36qrLHqR7F6vaa3Pu2rAZQ366oax7hqBriLEqHuANP3FNF7VSabULrY6EgStr3CQrxuKpfxL8CFk8NkANZ1ddh",
  "key13": "65LHUXG5GW2JZ2RDPjJj9r6S8Rygswoh2WfiA7C1FLqUkjekoEGu4Zh7s2TnQ8gkiZe2iaPHdt86B1d5dmoAXNB6",
  "key14": "3nXPyYKibxmvMvfpgRWfFacTarhpt9xPf2WyN5HJdLH5t8vhJXVvFJZEn7RRNikXTVH8JLSunyEdpZLeqyq5WHff",
  "key15": "48hWj6xGqE91vPWQYJeUK716Kv4xdy9d8KHZpD36A3ZqR7RALSPJLtTAn3yoZSvj8DfB5xiejagoSsSufD45V8Vc",
  "key16": "XPwqDYpyWQcdQexPHibK1wwv2VWS8f27DHjG9X1HPeENfviPvkoGpsU1Pd8cHGzV8b1Kwo7qBb5M1FhFWgNRJJs",
  "key17": "bdAzsFFvoQQNYrV7aguTw1pRfYGYWxWey7B9uRyKh6F6AqqyXmvY9pKpZ3vBY2RCmJamB6A19AVSa8xd3aFAm5d",
  "key18": "3mMStFHHm12hAoDtLTeMMfa5fRd4wVhJzXSPt8DUe1LpDVZZgfF7fCykUebyZ7zrXCZnwQxyrrmACpsnLBfhbmPA",
  "key19": "2b6m8Ji4jQVP5rPMuqqPe759W8MKhPVHccoJ3YEYUpTUgmVRRoM51PSRUc4WLyNnehd9PzFTahWAoGW4jX8nhywk",
  "key20": "5QaiodgxRqKVLiVjMhRUyKJH3CSe4jztvsKMNpsV6YA9Vy8FET7gKRACnU8dars5L2CaPRQJjkwBP96QuLJv8349",
  "key21": "USFSVLLhwoAB2V1fUxTNQ7Qv8s4rmL2anyuF6Pow1VUZuQtuT4xzFgBHaxfXDQiTFB9h2Bg3HU1AZh6CMMupF44",
  "key22": "65aD9jHmwtBW3VjcCB52dSV1E7BLxmwMjgK7MN2gxUERirGCKY9zFKXgywCZJT5pJsRtYodFP2Q15gu6BLafdZgh",
  "key23": "4MJBHo6ZYAMXRXfhiaqELHzVbgtFQYPee2jRharyRNR6ucoJiBDkhmHfzopS23k6U6DtJZseaM9qifnvrA5u9B1z",
  "key24": "Et9eSYkUn85wZU1ygGAsnaKYuY1KxPn2b88EC7rQuevsqV1MCqCJv3hWbg2zpD3ucTYJeDSBwSGv3btBQYEiLZK",
  "key25": "5juYEaDyAxPNkJVQj32krYhcygVsSdYmnzc8nfgsQshTtKmYdF83ETMNYNwJ6FM9y5MtKTh9aQQtaTKawE6He2q8",
  "key26": "51n65Hvz7VHSKQxdZhTt1XTLxvMmiHoNGXwPpFq4ZRtTcCLtn2L8TJnSS6d7myanAgF4wmnQturSCaSvp4ZdyWzX",
  "key27": "4FzbwfxAwKz31cvWUEUrTEpfPPN7HNj4FeVp55mAcwezuhZ92yTShX6S9ZNBaC6gNLkmh88uStJMach8z3dXp7jZ",
  "key28": "445kwttLYgdZCGXNako9Xs52depAFaeNnTzqfBtKJyNTAYEY1DbcxH2NBPvqYjDb1H3UXAsmsnj2mrzPvGmme2MH",
  "key29": "5MZopBCDsovra2nPHdcE9QELFpFtkaQKGW3kGhFkXhpaCBXt3PntXdh1JzejvtUGanG6KujfPKbkXq9aJGPRcuxY"
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
