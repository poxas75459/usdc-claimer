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
    "9FKHeD25dGTf2wGBR1xupeF5VRLgxUQCvrvYJwEDfffAq2gnS5coBD7BW7dPAPF6N3DJFYEZf4D8xnW7rh1Lig9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HnXqXJp33jA3XPQVYeJsTWrcvhPFBfRgenkrv24LHL4sYddXdejqpfpsmhE79Rus7EMwJKUi7WScWp61YdztoYi",
  "key1": "jZZuKMGPUyhxyQe3nwDoGeD3hsrpvf8mzRVCAqfvsmVJUBnbbY83JeuqoYeam64beBxvwhWxtA8UujC7u6bWtvW",
  "key2": "2rv9fzawny3SVSkFfXnQVpPBtt41B231is2Q6HNdP3EVAX8hPBYu8btiih9RS4K8eZrfwDMJUqtJDcHUSFGPivyY",
  "key3": "4stWig8LTroGXedGs9LfTCB4o9Hk42HRHjpCLor6dBcd34g9iP7BV7yvYictThBEyujthEFTrjh5mcY7wEFbuPuh",
  "key4": "5nXMV9TNrgkJB9aSWrsUriJgyhKLb4wXWtttwNteh8Dzcak4ueU1LrZgXpzLJ3NhHNQfzvjxfRg4Y97u4PRiitvC",
  "key5": "2d2YX8EqP7FpakVw4CqB8TYRHh2jT7MbAEVMCd6EdS2Yy1Qmm3uzXEFmz9x4j1DKNemCLTLCZo4FCzH4X965Y44P",
  "key6": "3jWeDA7r5Y2KhqfL6sGPYrn4gYohgY84xoYYKvgsfpnvNDu1vhAWs3DCtvEmQccyMt2vCJyXJxMtkgi2ejeBsqSj",
  "key7": "48CrFuWxBAEWRyKSjK6Hm8tnckSw6ASjkoAkZ1Lbkfy5KicKAmRD2uVjYSxSvdehwx1RQFr73FAdDVjKe5shNvEz",
  "key8": "235cA6ZCL5s5L29XsN572abqQjV78PRpLSvA8P45e7kDj5qEpz5XTxt4j2oJdYKZtjcr7NCJbd2YXAxPAa5jTXAe",
  "key9": "4aTJwo24nSrn8F8BuAJdhDVjGV3zZXmqQoVK4Nf4fqS4XrbiQocangXGyswZXd9Ew2AXn77iXpZ4EqGnQgC2VTkn",
  "key10": "4Qrxdj8gQGhcvP9g42FcLWipmmqhd6G25fGPxhyF4wrg1Y61MVZ5TU4p4QKuo64U5Pio3ARTusqMCV9sVZ9R3N8x",
  "key11": "3uPdoRaE1Z6K4s2MTFqDB4GqZrgwqpsGQ72XEerUiF1Lu68MmbeYM6nXJfoCMh3BWqMUs2zYgHHh6u5xDinoGi5D",
  "key12": "25wdfCViR3jwPYRGTYLUHAEMp35anEHaJcbpRpM32o8SoRixKxzoSZhSxw1WkMTWytgxTLqFe1wiMNetA9w3JNdN",
  "key13": "4RU3Kd9QmN7TWESEVSSxoRCp2sLNxHjENSvezDDM2pUemZrJwN1pYjr6XvHxrgT1HEj2CWyAeqpxAn4MqqpGrPR7",
  "key14": "5EtdhXndbAs3poGKH4U8WgczzS3fhhDXjSvHjwEEAqFjWjwEXVhCVhHYjqtWzsZXYoBdbaTrtS4KnmgM39vBmF9X",
  "key15": "4472yiPdq5DCjdR2r8Fgg3JWfMd98z5YDvfDcedCUvRT4CfnkVhyW1zbSUc4mDzfdyx84Du9Vb1wEH53ucW7asri",
  "key16": "4okSTCkAnQDBBjxAdauQQ4UNiJzsMxrhwsXjjiGaonkFwg6jmmGcUzw74QyEcvqMnpga2PTJBDcvJDm2FSXdDbPk",
  "key17": "2WdpFKPz6xsULpR59GRKTTMjuMhBUH8JT7aWM7kjQcM9T1wy6GkbbpQq6yVza93bF4X57XmiropCj2Bp4tAfTJqr",
  "key18": "2kP7oba2mqhPSyb5VN9mbinXPpWiSuUgJLVyUY4Z35chdu2AoAAnfPHWoDFAkDt436Jzwfq1bJXppigSR2uyYhta",
  "key19": "4nYAZGK5qutkdwqByawC51HNqx2iqMvaKraPPoWPuR9oNJs9FwVVoqYmeLLRPyJAV2LRaUnzEGxZ3cTjzGonzNFN",
  "key20": "2jFM6nQPQzqzNKZjypreUJBQZ8HbmapekdXxTq3dXAJv4Z6s5JYhLDnps4TNswKabBdge2PevQnXzfYkmWKaYJ1r",
  "key21": "CcnLP3saUS71953c9DFvLN5hUZsumGspwucoF2HwETr9Aq4YyzuZpk8kAaSwYaSsjQDihbwzL3jgiQ3CZfgscJy",
  "key22": "BLfY1VubcdcLu6vTtRwVfpo4hnTQuUV3cqF6HeHxxRSgw7HZmBCN3uwQT5TPchoqWkfAV62eqijogPmLUkw2ncN",
  "key23": "2JJcxVsuBgaKi1TSZe6CHBydFvfchzoojXwgRdPuyDqEFDGFfvfDfgEupuDeVGfaxq2AMoHgC4yzuPHYdNSkX9g4",
  "key24": "38QVkHEVUsTjDDMuUMU5zn9fQWuEiCa2gxD6KvsaZEDiD7MhXkHfYLWzjghqQ9b7mmJPg7WwxHvSNBZetFfrVnQ3",
  "key25": "2j4FwbXN9opPPhMEyonsi1q32RGw68WoSa5W7M94fkY8fmWjnfUKnUoWbg2n4yvin9q182dfjGCpTSCqJkSBFdCP",
  "key26": "2ajjQFKMpNksSpgMZ4jjGDBr7xGnPmsEBMR8rnKdXpErPA6dnAutAuZLnpHdT6mabAJxRzyZEKwexRoMHXW1rBE1"
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
