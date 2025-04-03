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
    "39N4gWVkMeLhJsmGmacRdn18raYKbLftbStdtUNg9kABcty9WBzR1wHVZ32LkSRMwHLqWuCF631XEirZDbba7Vsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DojRNtK2o26bsnzUzJGWaxiDa4fboWR3ESKiC7rNFdkVNbnLMT98abb5auG79i46L9pPvgSMoUqEkUmJhu8mv1N",
  "key1": "3S3FzKHU9pNg1jF9F3vmjLDcSmGXLEjNRoXsTpjJHSx56JEnj85nXB4p2rH65btHQf8MZWc7KWAUHDTpq7bs2VYP",
  "key2": "34bmMG7YbMJNFQrVYXyWgX7fzZANd9TaTXZ29aaiVJxwagGB8iCC7D7gbc4BH7uLQzJRNxJghziN4MGN6z8fcmzM",
  "key3": "BUSsLP1F55JS1ptRy9dLXNQ6M8fS4nyE5ttYZ2Gb8e697tEKj4f9QWcRxoJ8FiQzUKkcJLR1ijTj4FVx4UP8WiE",
  "key4": "4NdsQzUammxmW47CF9BNBdcU5rY5E89W3Sa4ZRtgAmt6zDvNemzue1N9KcExFL2bCmTWXG1t2qLSeNSetyWm9p9",
  "key5": "3YVNQgm57ubAdTuG7jXnNXu2fA92bLqrPCYpJ4KmSLeXh8Pxc1aHWw2gJWdMi1rNyi7SQwvRynV4D39fHBCv2qE7",
  "key6": "5sRu8PdKpuG3Jbk4RHLSLpCiNZqd47Doj85zWQQvX8y9S5NoyeobhcXLd3XwXKzQ8eMWvJqXRkmPwt3nxFmxkC2t",
  "key7": "HSSGh8NjqDSqRNqWoniDqWj9SU4B9cGNq8YLKH85f5HHDrPcGRD3m8adc7c4aiggvj7C6wXcU96xmssy8NrGtZB",
  "key8": "4RtxhM1vzRDx9LRP3ha6xe5hXwCwqoi4kcnBcdbUB9MpiLfUom6jCGS5RE5W7eUCx561nz3Z5gVoXnDS8NHmfbvy",
  "key9": "2HMi8XJreNRRaGfV2dGnEw7kt597hDk6R4U6fx4EiGdvDxFE5aVeKmJoJETEj6zn8AJpFca6XnqAz7QvxfDfyoYz",
  "key10": "2gUp8dNodwSbzh5rkCYqEKDEVF6DC7Vv8NR8FKYsWEfXmMoSBpkUJy4Fp5663XPFRxA3Kp7AMQok5tQxhYTwwXjW",
  "key11": "5P96D7yEYLGe958vA1ZXW6PzHzDijAseagf6cnXXqLDNGGuNmwsVNQERWEZjG29ebE4bsKUiD1kLH5ZGN4g1gsDn",
  "key12": "RvsZkxXHGy2ioXAknhrNAY6HEeem8jZcJgNz9h2VrJvtk84F1EQueKjyX9FtwmtdJQ6GeQxhhZUoJpHP9L2Rwh2",
  "key13": "5FSLNbx8cezuZFLFwa8WSNryDdjaLa1pJC1bs5yj2D2PTS6gs9kZg8L2wyASfnNGq74cfXwHD8aEkbAj2QidvLYK",
  "key14": "v8Ty8Q95f6bqXBf7MUV6v6Rf1vmqfYqz3XfNLorBEWmhmwMrv9SMDt3YBdAPzEMpg2u1rB3pUMXPgzG3u5PVUBV",
  "key15": "5tci78qpXTqmGZ73YZ3XCpDg6wACgbH2qMULx1PdEGrzRFxZq7KDpqQLFQGmdPDvjzJPt6reueq5ijeWs8WV2Jmq",
  "key16": "5sT6cZ6oCSEcb7fAzTFifWLuuE1YpvL4XT7s3XBrT2s46qUSVxsS7Kb2brqDjRVyUy4ddWoRkpaR7yEe2CJth9N2",
  "key17": "2euNtgKbRJiMvZ3sv7gLVQZT5Dsjpx21MEc5DogGfvsYVaVFbrhD2cN5dCXgdQBHyfa9DvgUvGFBy5YQZ5ieoNtA",
  "key18": "2qkRDfdeEeP9TzGpTcZF7vWwmJLpT2SJk3j8sKCbGLHzJLvzS1DsQFymRNizf3Us3qda2nYWxE7f9aB3P3F4nZxc",
  "key19": "5mhTUnMsHjo8euN3fzsqFau9PHPoeJ8UToxdrUQK7VSVkUa4VJT1ctNDBhZsSKwDRj8zbx1YcBPxMS2p9WKknxkU",
  "key20": "2FYpUaose3VYuxbdHBjGso1mLgUwF9t9nGMLjGtLKU9q2JDuGWiSx7MgEEtUKye1qL8HhcmM7PdhCCqoQMqVigcs",
  "key21": "28fGxC1QrPm6x9WsZ89SYyq8tmcePKAjNpVVSpKUWpukRbCayFVcTb59hzA1EddZDsxkHMt8c42oeKcyBEa5YP2Q",
  "key22": "WEvQcx9SLJBm4zQKm2vbbuPW7PTKA3iMtWHHP7WYochUVksG3MpxV5qXkzappgh1xNN9JD37yKRcResFf5ep8g5",
  "key23": "TemAyS2qWTicGrNKivMopFxt1KCedd8Q572gQKYAYyV1mFD57CzAD3Z9i4DW6QzK3XTft5KbHs6RAP9WA5aAw7c",
  "key24": "8ucKdtQUt6STHbmnt2sZcnAByqvimGJLdYQNGdg3PnM8AZcghEKRV4GgsM23KZmgAur9KXdWEsw2yA4AbGs4cQc",
  "key25": "UCWSNXqw2QxJX5pG2YTYHQCEZW4U6puZGSXSxFyiyMGbnx69Qyf67u2rrMjp1mmnJfeMmu1V4pGiJ44jXggmA5e",
  "key26": "4qUcLNttnHvurq7kLcCAdttCYpqJNgTGqnGVU6U3dkcA63dNEqTwhaGwFAHTZfPqqxfDn3vd1k9KRwE6PAs9AqYi",
  "key27": "24jLo989JVjLLVG42AM89H2h6mFWK7c5yV5xhy5FvbKzLuyKa7Ev8fwdoSiW2AQecxkKPzJAUjUdxAcoGUz2swV1",
  "key28": "kHhav4uyFBG7H6J8fGY17sEE7ZWDGS42voGWiKkEyjJ2GB6vw99jTzDGyUHpFPriouezszGkTLQ3RVTssgQ7QjU"
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
