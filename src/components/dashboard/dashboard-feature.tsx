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
    "39PyHGNyCbjsuvi8CvQgUikLZhdtGc85droE9cXBEdd8UsRWiPbnTuYrCEyJAjbF1aBSU37AAnz5cTUMpYF2Nvzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kcjMgmVqbvgZbnN7JBvZ2CB71XE5NNW32jLigZ3wyU16qKnnDMmPFtHaTVFk9CqSVGE4dkC2Hp3dGgSX2GrXTGt",
  "key1": "3PheLAPGTSwxbJq4kC63J5ZzvF9yQELN4ciXj5tnRmK3PwRfTDR8KeWk7vhnm21EYByrEDjWaT6Pn9J56mQXwPCr",
  "key2": "2vhvawxXui1hxsGQikFaQh1ED48kJ6Nf5RpZ5nPvAHYS73Cpa7oAB3SpukzRtAQL8JHqB355gFMSzo7cH8utr2KQ",
  "key3": "3rSyGPVFimpvke2ggYGAYCKAiFMW9Z2aXoTLhjfw7nvEdHjJXbEQUCCCoaJGFGQrbCXy82fozaHGGVfC41dVurcA",
  "key4": "5uinnGzocAWpUVQNf5ZyPa1J7uWP7Xjqcmj7DgugHhDPsA8YG5XdKr1zVv7ZiuZa7N2RrrDaAZPQRUd6oU1svkLJ",
  "key5": "5jQwn7fAY6c9nmyvH5o3adX1YdyNkqsr39K2398iWoyaae4CZZbRrLwzvdGjYsK8v7oBA3QdsY7xSs8V59HyzjZP",
  "key6": "2MFkFeanppSo6oarpQAxc7yxBPFZqv4kip5wPN4tE5mMc7maqACRJLkmFcr65h53oZh7HUfyQ4ZHHfDWT6QS4duD",
  "key7": "2Dyn8P6jPxF13HXkXCRtG25tr8rLFQyGcthwyg8c35pUnvS6XQq3XkQePjv94ddhHUvciercJpNg7xjDTSph1mbQ",
  "key8": "2LZgn78YnjZw4rJrkyXc51HuEiC9HZiCq3F2cSoH9TfFyEf6vu5J7oVmdy4jTWkU8FpPFutEcxixmdx12ceRJxBb",
  "key9": "DGuG6P2yra9mEf7WsJvA3FvPdgwU3x2wGkr9u9dSfuHHaoxLYsoeBwpRUffBqHnAWH2qKSPLxigsS5WUUprNCdD",
  "key10": "25depoQExqrBNTMGVryfsrdYz7odqBet9RhQADNCcreo9CmRQABv4dgHKEsiM8KAP9gZtK4dMY37nt8zX5p24HBF",
  "key11": "3L9SuyzcR3nART8e8iDnQJ1rjYu1sqX36bXqatAL1TSnUeuGSEhVSu8nbZdpWGM8WTdqD9r6hTnWezjbivk1uowR",
  "key12": "keqWXo6rUkCYTRpNueALyAqzZ182th1VeNKeJqjrZxzmAqqTaTnHBHrrPpif4AUeHAErtGjDHYQ9LhUXZurieSs",
  "key13": "2DDm7RvFmu9yid6xkro9eNFcum1eeuHJwRMhB1tnsRnUJTJoNtvioS53kxmnmfdggwLZ1hdjRK5zameh6YrgKZCc",
  "key14": "5spEiMDwSCjAg89h79BSbfU4oEUdQXeWeHtCDPFz7FhZRuGgkh32X8r9Awc7N5w2wW1FKVnb5VytPub6tX3ZQ517",
  "key15": "2rk17P6nxK42zkVWzVVbCRPsPR1nYsMzhAjj616gp7kTJbMvsMjbpQry96ZKugdaMC8wRQBDjEwEgjRdvdfV63SE",
  "key16": "3PUMJqfUe8JCeCxV9ivhsf9eQJBnm28xiFQgGokkoBbD9HpQ3eX8ERaD5JYwe4kzS3NG2tQ9iCnFG8R7XJVAULH6",
  "key17": "2gaQGU81GpdCfo931CGAGYmjV9PuFh1yjyCuFPXhKEbKutyy4T6WXuv8NUTuurrfKnrT3sbQiXqFta1eVTmdMVFC",
  "key18": "38XnajtYVc6UdYXJjyM5UYhxB9Ms5db5EWpxaS3iFDLG3ky3PRKMxd64XeMH9BzLgigUB9Giw8Bnsncm5wBGu3tV",
  "key19": "2cT7Cvc3zsHNUit4b5N6CpovcUzK4FwaBq4mcutpo1t22sGyVtEcyBe1Ca9Ja1hBiYovgh4JB9DLyrVGnX24GWfK",
  "key20": "38MK78hqk2bcB2JYqqPiESvF9K82YfHKLAkLHdFnthYZhcHGq23tqxJNr7JZ9DcrbgYM1DpUKAXnS6dprAio49d1",
  "key21": "22SY62avyKMTMpMgB43kGSfnX5YXZyTs9gkXxQeu8e6dAwyHuZn5ZFwjuutjXUi4FcJ2qQfqTKcNkhS7jAPgB3y3",
  "key22": "kfBgWf63dJTbKvfmjTsv9kNLcpze7BmdBoDmtnMwQUr7Sr1T3wkBQ77XTd6xyGm6rUrYKeah23FeVYAiAhMwHiY",
  "key23": "5cVNNaEaqjM55o2Q9ut3yAxN2c58PwKhA9Mtzzt8PeZqWFTcxyuKoLfWVP1R4CoWRyqyq6sQnFZmwHFb4j1xXCje",
  "key24": "5Pobu4DT9YZfWNGDKJD8tu5QntJi4Gre5X3bifbKFZ6QXtpqcZXoPjkNrPywHKEP9qYbLDVHFqyWcDpRb5FcvXEm",
  "key25": "5GA1hcfytbkyz6fXEudsn8Nuyuy1i35YfkZTqLNoMKQi6SCutpBJej1hiM5C8Mg4URLTvx9BwtZdpsaBXrnukKWA",
  "key26": "4bBAomm1p9t9X7SvPKDDp6Nrn231pSyDyWKF2d2yo39o88TtssXiFyYuTuVFDSTHcnSN659YsnaNLnM1W4CUi8xH",
  "key27": "5S2TH289kxMDwW4M13H5KWuqiNZeUJLCHFLRQW5kmPRpvZzmrTw8qtFhZpQPP5AVtronEX8udqYLshb9TV5Dw27d"
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
