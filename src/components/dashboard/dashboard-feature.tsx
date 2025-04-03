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
    "vtRSXgCxdrtUXFKjFtvPAYRAFRzeas6qVikBNputX412aA8bLri64kAE6rQvcGghSr1Jfc6JyW16NbPCcygoP1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rH2RhhUkNuaneLnGMTjCca4YZDAcUz9oBP9Ax8PJmnEtXMC3gAKDaBppvDTY2g13gZ4zXmb8E6JaFaZdkwfn83o",
  "key1": "5kB3uybYm36hJEw9JAupPSriFwukViAtDXRRfKhvGLMC91o91R6Sa5mY9ahGjFnEBQLXUfn8UnBcnu98o4WjqmhD",
  "key2": "2TkAjevhkUcjTYujfTcQSM9J4eKoay2zyDiBGXLiaW5QfisYb96fG4jBjr6uGxtZubayXihbVWQo55mM51xH9w35",
  "key3": "4SFnXVGEqgEW4wA3Ub6ebdLEAkWBWfi5kKCok7B6aMY5UncLmBueNXkqSzSfxY37uWeeFmom2UGcuaDDrb3HUecT",
  "key4": "3YKmbKVyQsJyxqTCBNVBML9pgWWR4E4e2uqznnc4sdY8RpfbGkZ3XtKa4EyAwPDctY4hWQzpESsi8Q5AvJJjUCWn",
  "key5": "5GjinVsTUucgv2Un4G6NJpzEVkALj22sDmXyZaFR98E1D5zY65cJmKadKYrxUdojT4TwbYNWQLgQg3PaekzpAZDj",
  "key6": "3rxkRAqWPTovJR18MqmLQky1JfMTGxTWqHboUeY2La6Cjk9NsEYJgNx4yjcKWQqykUJzzSPvuWY3jF716m7qt5aE",
  "key7": "21UmHYNmuhii2Bxnc63aoqmWNuZGuLATUEcbKwPYqkHqLKnRKN9c6nZ9qhP28R66L7wt4dEDkzCWetwScs96QJLR",
  "key8": "3d26JRqto1JsvXt5vCLUhPLH6irdXaEKCC7L4fMGXGBXonWgQvTA57WeHxiS6QUYxJUuDKZp2dagZN3MTVLDZfG5",
  "key9": "3BGYNY3FDENxHJNw2iWQPejhEEuULToj4wdzxSSKyGKSbUKmxHfo9pPLDf5tiP6tmG87rquc15jCVoGFAMpUKQ7t",
  "key10": "23Z9vEjKknx1qDDqmyCW9hxCfYdXqsdi5x1kuJBUzyiTU3kNv6KMoyNDcrzqXxwtLERvDGWXNmzC5hHUhsVxMqgD",
  "key11": "3wQza2m4t85VUej333QaQ5HJDLeAeyE5XMQvRd9vnSrqgrhuPB3iFvYd9Ct3aahADtfNmeo3xs4Qm8usn9kZGvhU",
  "key12": "66KTFLcDyaXYb9hMQ7TAwDxEhZmS1PsHQ6LXVoeX4Lr4q2mueBa5nj36jcK5Ksmefrcd2uEijygeFLocyEoZ9V3m",
  "key13": "2LB9zs3uYpmrLa2ChFf555yyUPp2P7nZvswSDT2iSRHDhocPjcD11pJYyQURPGp5MENFusP7xpYgDroUAv9PMHB",
  "key14": "4tkAhFVC8HuvkmFCQ8bA5NcmxsDB8qdmJLpiio2Zya5gBhFpWaKyApnvbhjjTVEshoQvs8qqQ8VkUBJDo7ycumQV",
  "key15": "2QsbzkR8db6o1TBmxSFGyj5iSAttPgpiucpKZUD9baUzAHVoZTUGNNxjVwCGfuXNqhGndx98aMnChj8x25oL2NY8",
  "key16": "3X5USC2YiWssXdtMPpnRU3oo14xmKTB9E9aPyt4QMTietT74MEnwippWU3Sf3w9QK87oVkuzSg54h7MScWQzKxba",
  "key17": "2AJNMPXwLg2rYz6spE747kBGtW1NZZ1sGn1zLu6dN8WYRrB7ZNPFZPFpkjtfBuSj3qz4xcXwCmUkDbLXuLfGJ8z7",
  "key18": "2UWr2bC7Di5Fjcrpa5ehUJXD7rhsmADRTMp6AvGQWHTqcvuHiXdKoDFLgDPzf6dL2hR5WeoHRPwkg2Eeu69JSggu",
  "key19": "2NtKkHD8JSoQtnpjDo3Fw3MFwUhSdYvSxF1jb3YUffakKAVcDz7zQ7nSUQ3DR1kkkj16fa6maSD8PM1RZHiNNT6H",
  "key20": "63e7izETqg1LKZRdMBEk1Tx2dQNsfFFW2QcN9s7G7haZMc3iYPrZ6CGax4wrMFQrzWn5VZXEpcEjrGbuWhEyMuWS",
  "key21": "7swq8n44aTBwD1MZmLPNYXNfnEmevdErqFrzNAGw9SbY8WsNXPBvF82w1JoCqcgQFgGkfbYF4q5w7ntKAa82LgG",
  "key22": "4QsV2qXWH6At4N9L9a3WoXqLp7LA3TTaNLqooDCkNsuWtGnpwFRagMaW6Dt3mjDUqsMabV6uGP2gcJp5Fvg6QCdh",
  "key23": "3meFuvsgjGGS2tLs9pb8E8m5pD4hCufaFYKJAsBqDB4tLmyAdc2kcEn5BkHzboEPM9tCJL95yJz1eRmzkig9XVtp",
  "key24": "b4mAjVe8aJLGuyxgF8LMiHNAatD9c7wUSvhVq8B9e5Q4NutqN1Nwa9BVKU99nDf4mMqK56BzrYLy4XZzJRahq6K"
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
