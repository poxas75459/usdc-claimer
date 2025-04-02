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
    "3yviFywjggNGprnWhTScZaevmHJZ4zABiNUnzPbhLeXfobby5kKTYSizy3ZtQepAmvstFwQHkGAq5bgLTTaUsCcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JSWkt3foZb9AxYbUtibMjSWFdtxndeXfTSbFypdea4bw6nTgLbce57sEge3TtdRBfiLWrKhai7KP86phm9m4QF5",
  "key1": "5QFoYQXLfXY2gET7izBimecBFHet7zSurBvvaw2XjGVh5iov7js7kQSvh4utEEsLD5ScuPVjz5uWBUHWMrkWwYMC",
  "key2": "5YigchJUPdn7bBybYLKGMF8rHHX2wZLEidPWwfXVtTqsprrJum5PzZByZBsWr3M3VFZHen1y5TS6nCcaSmMBorXj",
  "key3": "5hZkWYxWtcTHTJhfE2jUjQpfQpLfds83LpYqx1f2kKWM6McjiohD2ANXcPA77LgC8Z8sF53oWxM5WzSYZSGoRJPF",
  "key4": "4YajDPJbBkDD5fkPGJEfdrBroXzXkPqZMdswHqeABYTLZREEqnZBdTb8G3RbasAt5oMBEUDM4Kf5jmzup2QALSwP",
  "key5": "5fcWMyKtWo8ud4WacTPPMsn6jaVqKohFW2hJPunjeYqd2ZMqfHGwmp26D1XUyGoDKpzAs7DVp5DCRQzwoJ4A9YS9",
  "key6": "jGphWxwEgLBSXxBq78HWuBPgASPVi8VPxkmfYkX3ioyDstx9M2kZwSvH8nRzALexdXa6phGKAcm99jk3xULFt4m",
  "key7": "5Vwa2ZSEFttZqe8FdyZA9si9VFwLQk5BB8NH2iQeUcskBP2ytsKhXHTVHgLpcNXcWFUZozQAvMhGsLeVpmprcrmT",
  "key8": "4nzbaDPHunrfa2X51WzuEx2Xx9QF4bS8N4kFuUjfWtrUSbgiY1PtwfFKXW5PYqos1q7m8rFYct6iT8snyJuo9swg",
  "key9": "wYH7qQPLyTKjd1YcvnQwQGUodmXiJPUtF32m3F9CymQQK8nXiUHT1Skzc23vivaBfekUEBPpz9bnUpaKeS2nLe9",
  "key10": "5yGcMuipucgptAwT8hZ7hDiu4wiAUmkHjhgKRuvGjHCf9L16NB2Q4b2FagQvfF1pJ2UokN96oPkE54bFw3fJ5iNz",
  "key11": "A7R4MudVNkWMyZ9RVG7MwL8SqU8Pm7tAo3DWtC2ZLJqekMifGbdAiwU6A93umrcMu9nF1Y1ddkFMark9x2AVf4w",
  "key12": "fyZc9UtqNkVCbGwT5NUmebAKWX5yU9TRTtNLPUJKgZXASrSn3uTqMaPZswJWjJsp6ony5yy3HPhYh6nfFZUwaBx",
  "key13": "2RTYhoZDMavuJ99RpmcEbarFB1yJsBvudyndnNwzt9L9dYxnJpke9WxuTa3gkweDALX8AXMgNGbZc6faf4wSanQu",
  "key14": "3xs9ythGxMfqAM2Pvgkfk1YUFf21RJFFxpwXbWHVkvrhc2HpjDxwZ7tBQbGvxwKzteCvMTpSPLQhUvq4F6gRJy8T",
  "key15": "3gdxzJKVZDD2fZxHvmB5XNPtGiYJekRbhkvqMbjVomwroQc4Bw1hV7jARFQtLrBY5YEBNb42CWJJF5YkX2uzjLXf",
  "key16": "59gKycx8ZEkxhgazrQQg68Gp8wbBJJL9ZNNgyVU9FkAg7QPa9MMvvPVWFtDNuPb3daeqtwS4nFLx2XJcrt6tsD64",
  "key17": "2gLA75uUvZ2RSDDxztRuFSssZHL2ZN6ntVgCpDbeg2vxKfDVHRAsy5tHNaUCcZsLCWy1C5eXYxWbMZdxzWZZWKN6",
  "key18": "3vjoew4nGNSkBBRNagRU9TedysuRvJnx67VwfsXixV4PkqYq2czCsUGbV57nKbNMZQbfJ4MtcZRxATrbk9mkiEbe",
  "key19": "d7Frgzcorkew4sa6Taz2qCTuwK7qbXW9r72QPt2HXEcr8iHZnzdKwC9o7a2XyHZYr7dBNRgbFPrvYz2fYaGDxnr",
  "key20": "7KHm2tXyoQSQQX6nkfgWvLnRdgjbRAzZuHz3eZpCqZ8s1S7LDL8Jd61xrmoz2Fc5NBo51YrVULuCc5WVrZH1b4A",
  "key21": "4AkK9vNwP6PPYvrz453wq818GTrVW2f5tq2pCdWza1Ga8abyjwdHuJBpGHjaWBkB6BmTeArbwa8u4rH8RoPJtjmx",
  "key22": "2aJmuy4zNJwkEVSqXbYRj7onUgoWkx1QaPSsz9Zt73GtigUy7CbcqxmycjBuoqAa2WcPDwmo96H2h26akgtK9SBw",
  "key23": "cA58uQX2rzuLcSiLr5P6S4qj7akACuE3Ha2MSSkYc9mopJz8Wp1XBh22LH6bXWnstFwq4cekJckykskSHYvNdgg",
  "key24": "3fDcLqfMaMmnNJTAQ9HZjzdEpxG7niJrHD2o3MK38wDGQDCsPpMig21XqBso8h5s2XR3otFyTeHU7dFcwhewMEYN"
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
