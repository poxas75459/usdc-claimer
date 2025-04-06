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
    "2ucvxipDQDKuV33F9XyNW9GY5Jdvv6TEyEA2KQKaA3nkP8u5kebNh7nZB8tTTxyuKFV4LKXrG9HpSWirWLZ11Gmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yd3rw25KcheVGhha1gC4niCJ5vNM92QanDBPKpfr7sBhCitLdBDEESgWbqpw7X2ugQwfxE2ydfw5qCKDMju4Cif",
  "key1": "4yd8J23jJD1FRSFNWrqBWo6Wsqtaro9g4PS1D1FQY5g3GPbeEubkPzTAr7VpYCi8ihsCFXjKbtF1xDraiwSkYqfu",
  "key2": "5LA8RZ2g1p1bbpAZwfw2gj8RzD5Mb6rVPthJ3QxNYA8EupgYMh2e97Zk1coQ2ULqUixBZrVEpVRUzs1ECJaeRnY1",
  "key3": "2NhchfUpN2zFa8vBDRX5wsoyNovtGVsws7j9LPAnqX5o82QJTuM2zUuiCr113zkdHK9HUDvoqLwsuJ7vFH7Jokr2",
  "key4": "2gVnVyNm4QGNdVifC27juQi7rWuXCojJ6uANx5Wu3RaHgEgNs7VGQ6bQ3KfeqWidU5xDqKZepLUeq6duwBd22ks6",
  "key5": "5hhge2c3jJmCt7d3RuaVHdNQBz5jQvvoSPC1LuKrv73xR3ryVyxU2Yz3KmGWfTkcYjVwmWV5vz5bNgeocvqddsSx",
  "key6": "iTz5LYbs7uGLdiDJ8fUFReVYQX7yGmXUHc4emyMpJeySwHrYDABsVGRLV5W3KJviiMN6UzdNqoTjTbVYA6Wy7aa",
  "key7": "21GeXrcc8ux8fc65ogdT7tYyPh1ZBUH9S9ASoVPXAtBhuM339vwA4aTsQR3oYVTKuLxkb5EcXyDvKXqVUeH5P7y6",
  "key8": "9s8RtUjVybUZeCcJDcv69Kpxxebrgpx1u1a3k4ipTATA3cTbhumhW9zT6UKGWdsRo5e2YPvkmVUs8c1bSD8X2dj",
  "key9": "5QnTj2NCHAKzDqz3H4HGopSUq9UbV5Z6epyqiQWjK5GQXyLqkPHa24nggY9HHMHvdiY8vERj9RfytqPmgJB9324H",
  "key10": "4avjhhxSRnX3y6q2TNb3qfhTq9n9UoZqatbQdoqtpEXMPQEvE1uWKHNmB6vu8vbbb33SLXe6g9nPba6DarJVbdr2",
  "key11": "2iUQ5es5G3fpkebAPrfdrKRwfcAxU1ZFmRUonX5iuvx6GnSB2Gzis7WtY1Az64h5B4KFxuQKVjhDddV21i4FpbKa",
  "key12": "3kG1mB74ixUTAq8CydKEBJKAMPvFgMj3YVkGHLTRCMsxYMP9BB97NNUnYjk3nE9ZV3885tufi72ocT5pxDKKiPGS",
  "key13": "5nNL6zEb8mJqVWLRkHXcALfT8aeRwUihKKpvpQr7L3mGv4QnswgZoFpXffhajUUV7a1umQo9bwzthEhFHcEatN2r",
  "key14": "5eF3XEyUiBWh9hHaikSoHEPnzuvDMB6yv1pCSKgeZ6z6nq8GARk8xGFSf1hiS1MXrdh9zhFtbyUCi9sFGkYxndCj",
  "key15": "5szv5SD1hbtggU4pNYLFD1esZpp5F1j5ZAuWA7fUscMxWLRV2WpVc2NKbxw7EVBRiavLFExnn65RqjsgRn6gSmnk",
  "key16": "WCpuwFcLF18gkGpg8aikdoEvhhrkzbWiAM2cPbpaz2uQUJAh9pbR4kezJqccSJuhPiwUis1DNxxxeYYGhZRWKuF",
  "key17": "52KFgCLkkg3Js7iQyaSNLywWXRp5732a97kEAWp6wnabavKuGH1oyVvRKEG9GXhGGzGnQyBauT8wmWsvDkoCpWeL",
  "key18": "3Bgg956djdchrh9SBQM1UhEKMNtintbR1XdBjbxQ5dPxoyCS4qdAvoP31zB9wY7rg54SLU8it7FKQ3p5AVv6gppA",
  "key19": "3hunDVdio5SiBH7PAQpaiJisbNcpK9cxqro4FK8ZEBcGfwLXnV69CJj5FziUHyx7Nd9yrrUiPkkD8e7mJCreiuWS",
  "key20": "2B9zhiUVbeX7jeXD6UY9BoC4EkqAhtQbXBnTq16CSwXjeaYdb9oZ1E5t2ST14kf4A8VPWGiQxndH3nSVfTU7MWEL",
  "key21": "5H7WHLAYLm2H7BCvoBJVc31Fc1tCNYPhCVyCF92JY55AjbMuTtZeMJmSxEaXVaX7ifNSAGRko9yk6Uc4G7gVWn1g",
  "key22": "21JoYmVQLaxSjDnMARu2iNgXvtwWye3pL7Y8UPWkfVMRfKwVLcPDGqDi66mU6uFyWjRFMi87aEexVH44ip8nxgyF",
  "key23": "wRmTh7C6pZrXA1e8HTtPUpXreVoHy1aa4aFKr4qZv2KzzVmgunemxhfXa2WzeBE8LCTAfPAQbuyZcGwaE7jSbhp",
  "key24": "5N6hzr1WxNydLE3uY9d5NRvAnHHihZCVPDeRuQJNWX1ory1Hs2o8e5cytkaFUrnYLC5iXNW56tmjZ6XFdgEbysaN",
  "key25": "dKUyMhyGSnxPpEoqA6S3vy5VZWn9dxPytTetG8G1a785jFP4369swEmkQYgGaCEATzRQLtsPPa2EvemdCJafRhm",
  "key26": "5RnmnbJzxioQWWXJf3LnzBEFc2tnAQmPXESmE1PZ57RAscSYT9rZ8kQb46x1hNoM5ZoaZLxnBvt5ZkrD11LXisLs",
  "key27": "4FGj3UUgfdjCjk5yetwmXh1U8nHN1Uo4ggnFB2ARSpC7hr5umPtdKEGbKRqivEbvik71m2uGbkrafmbsYk7ciYcL"
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
