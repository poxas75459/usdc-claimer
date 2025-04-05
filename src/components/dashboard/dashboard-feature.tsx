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
    "4Gphw2VtjHq8RTvQrxxUqpTgVcvdSDm8s3Nm8o8r8GL38t5pVtqZJrcsjNWR3qPr9QamLA9RbRju7BCv7v56annS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xExViMWp7MTFQBFAQ2ehcAZxzc5rqQsavZ5PGPNTuZ7B1vm5ek2SHBx4X9ufSY8VodCQ7MEiXrtr6V9fyRdTYRz",
  "key1": "5JVHZjRk7GpERBvRfQfVmC6dCt3oJTDNQxmBYcPPVHGvS3X4byGj5P7jyiQyC4t6F2Hg6qQAQQFC87j66WdBcKvW",
  "key2": "2DZZEfSSfRjDnsVxF8evoFEXWwbp6M9aTwtjdfJgK4MsYaLLqbwrpZKQzkgML1qM4DkyBtAa7CVVW7nMjeV8UDrb",
  "key3": "3PmSiyn8AgYqmUkuxpkgr9PV8UfKN2Gin5ThNtVZueV6eEeRSCpAqQYBBZZ5WE5v7mUN2MbDzqGzADSX9NJR7Xgu",
  "key4": "57XuKB8Gy5kJXLFcoCNDF8ikpADHu8aTFGmo8nutfYbz7twLK41G8kYc2vHFQ7PKMdHWFcgPBEwVcR82CYiHvbmr",
  "key5": "5nAHLEcumjE8zVwj3D9XfSQZRCMiwfcoKwQiqT6t5mhmozJe1SvES6HiT7UMRoYiBY2T1u5c2fTaV4TTZMYJLHqR",
  "key6": "5h8jESqVhZmGQDN1hoTdqbSirp87WA8h4TzhwRLz9yWQMBkJmdSZCfAZQ4QDjo73WeNikjkHhWqcmTKfGA2G3gtn",
  "key7": "2hgaViaw2fe2V8WButVzWUTwd4u1oznjNKJLHsT5ZgMpTeLSym6dkV5QyXxoSEojf25ZRkGgaLeLmqyuEFGoD6jk",
  "key8": "2VmsCsvwGNwbiCkRnQbYo42k2FcPFgAMM6rK3zpSC9mmjaZXJU5S7tdha3hwFsQLCyMdjLa9vRBxQ43AHvG9NeiQ",
  "key9": "4K3fvUGs4EG3kpbSTC7emMuWRGsHHcYiyx6HEuVWUd82GVYJQTZXwfzyU62NqVLhnR4K8mbffzPJe94PoW5bHyjt",
  "key10": "Xa9bEvePF9FGn1XHefF9tfmR3xuJQwAJDnmugjbdSouQe2oceidkENnq7hUwNQ3bPFc54K68wywxb2f8rv3quF7",
  "key11": "3cAeSWFjtQAoKypyc827QJKi7rC575gtkX2tXi78WTWdQcNZn1d7hnKMWWHaXeCvGTdi6SGwuXRMGrdmjKbf8nFs",
  "key12": "rB8TSzSXFEuqqAq5PGKxGKWuHFh1q8pgiT9ArTbfNTc2qgVKF1H3WcXqcW9WuXBXpaGs8sjBZEYqHC86ZkotdYA",
  "key13": "4ARWdyyPSMaY3nLsR3YGWt5xJm9d16EBx3hzdsDerU3iVSPxX8MWa6St8sRQGtXfXsWM39nNDgtph16ZV3eAGwJk",
  "key14": "5jYeDEB7krHbeGk5FPJbz6j9rr9GDuSAMzc552MeiW5ZsXBPaWJiuqx713QVA8hNMvBxHJbkwTMUE7op7dscoGwD",
  "key15": "4YedwSBPT8Rgf8y1sWwAuKn5qD5ZwXX6bss9PA9QVncxyvjEuq2M145DKjt6oX8cMjFnFhipxJXigz5uxsr9BBmv",
  "key16": "3QcASoannsABPyRtMBW2TfCJ9aUwwGmCmgEJiNCv5Gu4H13p2Udb7ZsSddjxScNJeLXMRier5VYgo9uone6LbZcu",
  "key17": "5LM3nEt6Fb4w4TtoJ7NQVPNHSNvwzkQhG4WkSky8xrUqsguDv6TcF77KDb9aksDnzUA1sUcQ61DBLGvjWouXT89A",
  "key18": "2HwTuhrVnBzThC58CbFGw3BJQyE2RMqfaVUW1e8p3d65EnRUTtNYAtMoj1XMzfjoB5D6zxYUUscBCiSN4TpMP5Dj",
  "key19": "3gjfh2q7Q5MF5w9XRLmsRrNR9wZ3cKhvTbPrxngt4rhpwEghPFvwixCzvtd2JA2Fz2MPKgQHH1oCoaH8TsCPwVtv",
  "key20": "3mrf7WpqX3qAAkzPee3xAoLctzLDQFXCndX7cK5QS4aTiY9qArZEzBjbHyrNzhdMPZfAC9usK75cXVEgj5QUouvk",
  "key21": "56rSBJWnzqSQrTZ5QynNNAtLNa7PXWYZWWvn5djScBHtK33LbjT4AF4HnEEUxVAHqNL3Tx8B5CqjDT9ZMXSdSbPu",
  "key22": "2Bu76G8Yh4B3GvfPiUQ5XWaoz1zQGyzRtTqY2V7MkAz5crm1a75fB1AniEhw6uC3UwmJotai1kChYUAxNCubyfzA",
  "key23": "4LrdTrJWHU9PRD9Py25UtHSVDs9vD4SyKYWyVtZcipAuwCDDsim5exanPuGDPefH91QveVMpZxe9wQuZH3P1SxaX",
  "key24": "4ERTt39XPp42WvpffCMaRtz1aAKUUQE97ARRNUG8Z53TfSLAa9NhozB8LqQr76DNmsmPu3rDraXRGzut8zrUGqHq"
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
