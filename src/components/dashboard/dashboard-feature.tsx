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
    "4KZfsr62pp4FCgaN2pGebVY3UJTug7aRtxSAkEU2fQdVDUi17KfFvn5A8cTPFgZhffjZCqgEdVeH3HJ1VfyjQMEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24atjRGuMb2ZLCnMMSQXmEs7EZsCs58UgYy29YnXoNqL439miPJXo35Py3TKj7Zrqggkvsksx7oWj86sbQGMhNUn",
  "key1": "3g9C56SFx5WLJPYjoFfLNCKUwQRK78ksTdz2gk1Eg79pdDr1AvXjtp4DCExt71urU2a4NSZAkAJprAQS9oci19Vu",
  "key2": "5mxZNV2tALgrn8GQUPmipWgMPF4yzKdPQvH9uwbLpfLizg22zanh2yqByWibCPjGfZA2rqAmg2L6fGQ7DsCS9VBP",
  "key3": "kafQmjFUZRRTtYWavNwKJG717t9w9qJSLZy3Cg6gdCCUj8UM5Cti6KhoRtmPgdLfQ5qCKDfsEi34VxCogQN9H7s",
  "key4": "4zzbogtKZsnKK8yP5CXGsVk8A34XZ7kMUofy2rcHKVS3d7DPPeApQGHiCvDNKej5nvs2auvDL4QmT6XziEdRxXx2",
  "key5": "5FqB2XoReFap9jJ6w1BBGyyo3jXQTgWHQcLCuFW1LY2SJZQomBdLbmFVgTVoWAXdqsugWJTXUGFd5nmtcyviikhD",
  "key6": "4mJNUUtF84raSfdT1a9uUkov1SNkwomuZ1JGtAfVhcrpvhknBoDrvQTX6zNKCXiJLQxMSoNJpqdpHtjmKgt6kNdQ",
  "key7": "3WK3M8de1HvksPcSmGxSyK3x2tVmC4jGjNq9oX397Sv8x31exje7GBsKArsyiJq9hf1xFiFeYNk4MdNuYg2f54sy",
  "key8": "48BJGifQywxC9x82BTHt4iQRJHjAfDomMESEmXjah83T57EmR26Nw2B7gvfnnjtCTKjko7qG42Bv9n2xLGUgPRRy",
  "key9": "2XmZrKHP6p8UDUDBxJgdAWFRFK77x91TWrJu1SghQGS9r6qH6HN3jQwD5eHauuckCz4ChfhWcEhaHLfPrHmPg4h6",
  "key10": "4TBQGP1cE345LkDgZ7yZzmh1ucsPx28QJQDWMvqPTYmm58eqJE2PVzkQJVat6yMjGHNVeSWvYvgaBdJGyqwz9arb",
  "key11": "313zGFZjc73KJ1oAc2YNqevFxu5TWUEEAHhjUpqpkfgxQVqxbmDsH4xJAkJt97jFs8WFRhok1p7SnhDKdwJmWv8c",
  "key12": "25WabKxHbHGWSHGz31gkaEJRrvvY3ATH2n8Z5UrdQjb8kYSamYBRQWMFwSmjKZhYw3mUb7Vdv347SyBArG6N7jmY",
  "key13": "5XmsdMi9EaLcKM9tLU6nEk79PSaayvHHma8hwyx3UeExAXRN32QZtshaK7Q9ydMyhH5AUkYqRsgytXEc1cqcKxSv",
  "key14": "Ekwku5T8ZSZEk5Y9hK1PbemTYHWHzWeE4darYYWBEfFNWfgct8a8iCr5Jj6Enhx9kNZAtmQ58dEa11Hz7bx7KQ7",
  "key15": "4FNnmJA2vkMmtoE4UiN2v2DLKb5PkxiA9Hqvan7GwNH6grrDsxNsEcfGsNX8p2AReUoiRER5JHWPpy27RGtqb4SE",
  "key16": "WDcUrWuQovAgwciWNrE56LFddRcDKZWmaLhpLirtuHiq4sj1oNToyVv2tqUaUFzXb48hxGMvXLvqhZrVzzxBTiT",
  "key17": "2HDYdBRpA8X7X7fhEXE6S6zfLkjBEmwM2AKVMz6Ye3B7VRDmR5qx9zwDhAs2SUTt9RW1A4sWJD5rnahCvxmFfALT",
  "key18": "3HgCwcc5LjTZ6ZaykcK89EZqYvcxZCBNJwAYj8AbQ1BUEF9duyzGxRr9xqoAXqkBZCuKFncrJiWg7DpJZUyEYTWC",
  "key19": "2JyWRxjhFL9Ayed4r7i5DrshKPNmSkqsbJCHGeiaos9Fp8Dm5A73JWrhEo4UeVoGZ9j8gmqXht7HfZZ8dpEhXvwe",
  "key20": "5YpjnvjJuFXxFYsVanJKotvtS5shJdkht2341sT7syay42rtRF2DQBNS5uSbuzzF3qHFEoWqiK4Peaoqbr1KVF29",
  "key21": "3Vspvx4m4xW4HEX1LXQPMVErKeYM7cvHYhKPFGcGnDiU83GLofM63uDe39q9HrNmPFqEDnEocRbCpsyWdVRPsGzQ",
  "key22": "2kmXuZ1t5DjTt3MFkL8NL2GDPrpwToQKoG4TgcD95RmFnuKYPYEy8oaHZKh3CFg89pG2wZbD6LQdu8ZDWNwZbqqm",
  "key23": "3y8AVpgc4Myw8oXML2TcE8FkW9f95Reefd4P2zDJDkJ4LkUGcGJxuiPLaZxp4rCbVfZqtQXgw8paxjGt53Z1SPvj",
  "key24": "2AT7ktrGemciwgpBVJ9BbbLyaubTC4EKToQbK267eDVgiCHH6fCv3zZ7QhKQXgbTg4SnrcQCj8KX9LDBTbzMcFLf",
  "key25": "4yQhjL9BCT2h3wNS5gRrbw5tpmN6LGoiZsJWaQfRnwvYwPUqURewrTGAyi5HAprfSaSiLRq5qPzmfksqDbaUZCXw",
  "key26": "2VnpctRghhtYsct7Q2spR86f4wx5pRVoTCXti3jyksrrEpfvbrG2QbQczoLr1wgPc7aiAScfdY9kpVnrYr2so5LK",
  "key27": "EAAv2ifpMT5geEMJpQ1xrtSiEC1bEvwE6ByLBb8pPjK7kWHegpGkAEYAywTayAniTe31D4jq6tfZc9vmz2XcXdH",
  "key28": "5wuTrNACqzdZZvYP4vMf2TpuLVuhFfwnmztW9RPAKePt6hNMSYHvaK7i6YFW6GSyKHPb81QSQXcjtnRQioizgkqj",
  "key29": "XTYVPxUFULCeZjzdBY4Y5ntAiCw44FcKokK39ii8DG9TWnmxiQ11hLb12fC9FeZwf4CVbkNkTFpbytpqaaayfbF"
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
