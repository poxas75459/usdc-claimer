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
    "33qS3bvo42j2DK9BBKE83nrcppUPZGc2FGdYX7nLe1d17TGsugBhVyUujdAL4fv5uaiGdTDA1diKbJFbvJefrFL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QoxkEwTW4NXkKsD6MuKVQpcWxcQw3ud56B3yPUBYyhjXeXMbuQrJhDRwE8ZJWsS2ubxp5KDCPLt2iSfMw8aYHQ2",
  "key1": "38g9FWbPZDd1Qbo5VJdpEUGhjexFmsvQiWc7QWdiZuCj4XwkESANR6FwCpUrb47GrgfHrvgoz1RH3Y2kHQa8pQ7x",
  "key2": "5ruYAZtvQkcNQWbvqbwtdYmhPzp57N37NTf69d5KJfsq9nMqqforgwq8dDjeCC25FqivBGKKxYX5m3LjW8iepAGF",
  "key3": "3r1tci9dvVE8cPBbL3A94Lne6k5vhw8B4KRxD4cWkSUt3tvcXNX9sRxVYpB5zmG8hcPFWSGVUkT5zWYyoz4NUrQb",
  "key4": "3TKNsSdkUwzCrmWaD39Mpq4hDKDUSVUGHMiGD1g1yUJxYruXNoyhetrghoeUnJW4xUge9kBD5Ea3k9KHkhUey6Qz",
  "key5": "2nma5j8FG7yRWeQoKxWa6eaSS54iPAZak8LauWWStBjc3peMPopAXykzXzyUVGuTJcdcvr2We3mdbRSAVLLFfoLk",
  "key6": "3DuNRrRRYTNwSuM8cpLzXFzkG7CsMJGTqhUfS6cZhbHarSiZweJ438fQv9ovaDftf8bMBCBgLnvnkRKRJsEEEbsC",
  "key7": "4Kx4Qfh6tKtw8HE16ghWbUvsnterwXiML6zW94dY8S12eoLzUHoyarq3QZjYouqAtPZ9uGwWiaqo11aKB4thULzS",
  "key8": "4nVqkDbmGZSWkFtf2wbxVxLBKWRb2UDMJPohtgAxNCCPgP4otMEfzSEpr7KpTptxdbYYES6egQfpZQeSkw3y77gC",
  "key9": "4Pq5TGTHDFDtsTt27i2mCfU993jXq46nVHa1qFNgHBYxDCDXPTB2PwmwQ7BTY9fr2b4gwY6VTt5PGjievW3S7KUm",
  "key10": "2ujZphD4D5BhAL7qiXLR3wWFk7C1oEvRaFiNwLrgeYKM8xi18y4DuWCmoDaniFUsLv7JSLongTVtftVMgT7EaAHc",
  "key11": "3Up33SLbjTgJsN94dP9dd3vhREeFMBhA2uwLr94dHPUpsqfhoWNVbB9rTAg79utbzkY53p2EMPSDYX84JSX23m5B",
  "key12": "65YLpFJoA6j6PKieWR4FVrFbegjBwM9n7ByuahdZn9v3QWfRfm9hxJ4FYB5xSF868yr3zmGxvFhyf8LyqLzWntv9",
  "key13": "2SDRoJoew449TTF1wemVGPufawTpvNzDR3xGknSFKCVhYdLhAxLBKsjJshC5QH92YPJkgsEQr9F9qH3SYPF29Y6Z",
  "key14": "gJMjcQBdYxTw1MnL1byaNaBbUFyKjtgVMcTobQ4FBMgPXqBHXM3A1yGCuFE2t7HKpetd8boCVem9t69AqNyqBbV",
  "key15": "2LWox7n6gq3jxNWjunwTQpcjRttWyAmDaJu3ub5v3AGLsDrzZK5SJvTwSEwwm7CjNXZNarndzfhLMbABGz4XFgFw",
  "key16": "5BQy61QG4HU7U4Mf6i4zYTgMLqqKVDkxVcmy5KzeLLfPt8cUzkJJTKzCnq1YmUujDV4D1zP2ZExSqLLiqFXMytxa",
  "key17": "4CbTY1smXUTaAjwuth3Q9FVF51WGRpVV8S5DWwRskBfm1bdbZ3qv1KFfyi5MP8FkfTh7A47XCVQV7ZdPNDgwgctp",
  "key18": "FM9dUQEdFYJ24inHMBLq37DJxEBj2L7Af4txwwNykPUdhTbpFpepWMrh1sPD1A6RwfL2qpYcaVZ3Vr2rewBU3XK",
  "key19": "52Yev9cxJRnVx2NnLcM8oTPcQrSSfQTNWQV8YMHX9fduZAvFGcZmuUshfNHWLYM5LGaqnvV46UbLuB3AH6x81aL2",
  "key20": "5WpunasBhHT6N1KwjAmqehnG9fZg9Zk9DCrr1JQJn9nYuCYM9HpQXKH2HY9KfkdRCprXoMZZFpix1rTwL3W1QV9i",
  "key21": "2NrkNDCehWR13qPxPsct5gNcLSuSjBFkPBtetrAkmUohJ8WCsGb5x9CsEPgh9qDULLtTNfGTokXjL1hvpQFLx16t",
  "key22": "2ogbd4c32qwJoopVHbtgd3fn8qPqjoZC8iuNp8ueVQtduhPZzMhRsZ5rMxeekmcU7b2RQQRNQiJUF4uArNCVqnX7",
  "key23": "36TzdLKM3384wxwokTyTgfeGoA9FujT1v47ArMtXqsAnyiSDoqJBZJvtK32svecMeWwmZCJQnHxUMu84ZZdcpaZo",
  "key24": "2CENXbPFbsADZQRtEaSkdnfE4Gm9ogkzteDoFz3pvdRwNaFRmxfRoPZtbpBnxZ8HRFosuXNY7B3zfo4YQ9Nwg7j1",
  "key25": "4aHKGtcV4VZptF2sSada3pTTT1Py9NP4tFePjb11tJ84HJsDJVxJ7yvghmFq8aH2WpR9t9GeGXYB9cH1rinc6WWf"
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
