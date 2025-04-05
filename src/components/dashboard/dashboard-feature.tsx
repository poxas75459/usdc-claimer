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
    "3RSrB1Up5ZGJKYQYFLbaKiesnEJyXnfonk8Y9YNRCau6q1bYanCLwXNS1ZU68nwoeicg91t3BBugArFnhta2PYyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WvCuMgYojjf8tiN1XZJSkv88aAyCmxCtGkbFA4rjxRsnfXqMhk9MQbqLig2UAbUft2GvLiqyGVGpa7jMuUASqnD",
  "key1": "4HCwaxVAnfgLt5vNTEVs31tNDJosj2TXESdVq2zo4L2XPQGu7pQcgcgffoaFQQdc3Sdv2iLPnXq95Bn9T1zSLcL1",
  "key2": "7zoiq8jUGwfDxMCbWAgJXJdx7qHNMvHVHoTeEWUWhuxhFhD8im4di9vDEkugKDB1NkQz23hnyo4nffYYgpH91Kq",
  "key3": "2Tuzo2Vn3w6nnxGX1nfKwQqkh2dHYe3VHCKu4KQ6j86sMAGRQNqv27eboobPVtbVwo95PvevNkZHK5Pu3okoXof7",
  "key4": "62YVPXSHECNBTAtYteTst6J9s9EtHTnvRRxPibuoHcNf8MwRoPQr5QbwS9y1wA1HmMNA64DHfHp9viyNLaz1SxYR",
  "key5": "25SRYQbFLH3WgwtkLwyKyvpYYkYtERMbwLGnTpVFonrNjpD7djHXN2hcgtVoZHdVchkA3AeprccLAoZxGSWp5eng",
  "key6": "29LvA2qRFpDsQYp9Xb6rLmR2FGyrZbtVQfGMWEYDmPYyoA74AijAcbRmnp9ffEi2BhaWR8umMEn8pFzx2PSRhYHQ",
  "key7": "XR4L9Yz6J8cA44FrDAApmoxzb4v9ejdPgWjhACoaDa1nnMhtJodKQouBPJLKHWZiXnRrqDcsNGfJSHW22LdkKbU",
  "key8": "4oq1MnqWp8u8LAEkgUFvrYYWJviWcm5iHa1jVe61L91ME9FC7GzzvUVJgj1im58x6yeojzaCjVz1yDgHv8DXwZDi",
  "key9": "394psFuUgaDMPo73NvTcEt9JRNp25ndyAKm34NYyyHG88CGmWqfV7jzncEmdjDd5h49V8597AJrzcv4kQWMpLB9K",
  "key10": "4C9V5oYEZNKWv2izEoQDmGYDDYYq2LvcEE2QLe21RxAsGu3gbsoyHQEjof1FdSxtaCQXof4vgZYkfFgPytdgWwJJ",
  "key11": "4Hk6mcSpG3PRngH9S3ZQ4GCkQEuYC9ySJ2eEn9Fi7xmEQxaT3YvLR43Wn1frx7ztymwDo3f3iBpbJKwpy3Ejz7wa",
  "key12": "2xQnMUX8BktmgYqKvJToaiptWZvcpFu7mQQPad1nqvm1TeN6AP2oaeZ9YMjFZa8izrmPmJ5paVtKBgGKKD8rx6GU",
  "key13": "5uBbZxRwRorwQmECQJ4M7coFCABDNJhiATnvQcfAwRBZhUZoFYniXHtqg3xsV7Sj9WB6fQidMnqtuAnxD4YNkHsN",
  "key14": "HvaXUCNxVLWAkZPwvgGYbrPScST7R9cvcFP9wDaCYwd13C1EhEERbSJUm6oWpr6vAFAi5EcUAdirGLMqCtLSq8k",
  "key15": "4Uj5jBxtWmNvu8kDaQ4xZBGePx1LNnnqnCgLFxPAx2bA5hXc3n9afUJUzhMYfeVpZ4qTBQTAfhgLgdf8kmvthaXM",
  "key16": "3SCbsURLgLdygBMSPfYQQP1khRR9WiyZuyzt1yHXdDEz1TxdaboLU1gku5j7Wa7AQpaxZF6VP4SnMWMa79ZSZtTh",
  "key17": "SqAbaP9xLWcUvYdYegfcbVeHjee8xkMV7nkqwHpkjF2xmE5VoxjpPYSiLLzKA2P4AWV4QJbsNyjduSPcVi6rkzK",
  "key18": "i4NgGuWxRcTnUoMKFgeh7GbWXcfQymRF4BcB2uEnATrxPbtvjMLnYCKnAP56CEMTVC7cy73WtTaU7YdWmh4d3o1",
  "key19": "5UDL64bhuXcxMvQ1pFp9y31FVk5rxJtBnzLStBxXSAkijiguerknQuQVLAXn3DStww7j3LHV7yy5ByyHaMb1Hvcy",
  "key20": "53TB9keBa7W8kPHC9x9XSJ7TnG5Pan1RM3tdvJks9VSJpHfSj1H2BkMpbpR5NjGWmXfyPc5yyRBRYTCUeBhXxgjk",
  "key21": "422BwQjnRZWNHqpdeWef8uwuUHeumKKfAYKnZq2gze9MdHDVtESqHjNnbtuiqHhsUebzBiwZaptQvNHMPjhJCocn",
  "key22": "4ru1u6nKnXVcBAHp5dAXzsibrsixHyEqGNa7yWgKhXFncMaRu5rhkVYY6L2NuTjMhcU9oQF4r8QRkF378TyuAJRi",
  "key23": "sLRcW8cUQQ66gbAqzrEL17BURoRnRgvr5YfGMnwG7EPNAsoynWZe5pJziAar9JayFwodVK6yDRRGmZfYFXwwwa4",
  "key24": "5zedEWxFZqvy893ZogqyGyzpWpjBiQ6CpmHJAenWBvpfMy4i1tRGgAk3rLjmGP1nXMN2PYieSjS6ncbnNCDhraJa",
  "key25": "5QUBqhoN4Tn68y9PxfWMDnWgLuonfrBSRPof7tyFSE7yR7hjFpoxmQYqAX4P7YFYaP9A4z2xjeVSZtF1EMvTBHC3",
  "key26": "U1QETZoSK3ejiYDgwciDGkoa1HsGSm8oPLBQTxscYWBS8h1qDHdpMe5RmUgEBQExCq41XifcGcXsbriPjhpg9Jk",
  "key27": "4hdkeuxMxj8oRoAbZK9ZP26jkdC8m53ZsncCZVnf42cgrzrcQvtkTvJRQnWr14Pvdc2rkwQjp1MTBfnPWsaxxXKd",
  "key28": "2XRsFHNbtPLXucyGqPzXxehG7deGjeaUbPK9djv5oe8VjYvcz7nfnV3jMDgLgaUszVc4n7iAu9u4RUM9HVbabvyD"
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
