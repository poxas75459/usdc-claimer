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
    "aUtnZ5XfY9b8CYb7MsdQsLrPedzNLz3DJ8gK8e6YVqWat4crbpQeUGzpcBFwFpUWWUtc5RtvQXqPr729GB7QKF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5buhZTkqGbpoTB4xrFZEJdmg9xgPDQzAqjDqSyTu6EgSnwL3YeSstFJ9zzmE787cQtvQTYcME4gQ7KRUe1ynqxGy",
  "key1": "4Uqt89yJvriJbBLKfFZ2uTF672hhTK3v9HppAN7g9uXfk4QD5KuKa6RBk7S9NDt8Uv9RA6nTTU3uqDbTA6FUWCeH",
  "key2": "66dGpaVFuLuY48tkZUtnxZo19kHbHP9BQntaMYN5c1ktjUXEQyeFNU8Mzk9favdTbrK5gCa47FiDJsdRzqGAHRMy",
  "key3": "31AC5pBdNkkwRVH6FWnPdGNQ35DmF3FS4cMZbGFCerfnkPBo7FfotPCq8gEU2agjTUmmxyi1vEQCXwbKfZGsj5iy",
  "key4": "5SsRrFuNPCKW5b6dd1U94YfyoC39zaLCt72u4Ki5RH1eP7sazpFuwRZa57vmauDQwmJWnf7gL3FkSEBj84Ak2d2x",
  "key5": "LM4KWLbJGGbWtwfKzuDHg4ggtZNkvZvzWQuES5zE8j8C7woTFTNcyiBkEev4VynsD22torXEmw5Atj6QWxtfYfu",
  "key6": "4UcqNufy8jRzj5PCUTLAAfFyaG67FiDzMGB1HZ9E4KUFUCHDFNVG6AHR6ZW9cX9BR4C6dFBRAgjzYpVn6SuLFQtz",
  "key7": "4krngZVEoh3W3jvTi4csKGwpHYKNj1n4GNSzneFQwoExD46vgnAZLbAJxXpVF8T4FAsYPTk6zpdHJA2zvr6aW2xU",
  "key8": "2WofzoPmJdEXJY4yuUoAwVya1Uhd3QCKpYXoN6Fq9eMz8GR42YsFoEHjQ93G3Gjx98V57A4CHnVp66TygpyyGVAF",
  "key9": "3bx8yVMWYb6pNGypNBXzvucVKEKwyvAhDYLJoZjMuz6VUhKyQKQe2SX6wZhysKws6HzFsWuK3DDjJzhSqz1krJB6",
  "key10": "2nfjb8hGUZ77jfhA3aMZN2B5KrPpabVT312zteTuAWCTpgsNqKYEWi6txTziGy8m5iFMqPV2UxPzYubeyfMTDkkm",
  "key11": "4JZydWphgyeUToRQTmeGH3p4fmSACcU6bRtapu72FxBVS2mo1tqL1gkFPup72mb5A36EFHBU4FDbaZmewJ3tAwqL",
  "key12": "27V2RATkPRHT2ST9LWyuexsMoCHzNMdGs7pVJZY689jnc1drwfEq7nHoaSovAQ3osxwRjVTYQ3d6aXhokGTPM8e7",
  "key13": "4wvzVxrUt91rrFJpti7NUvt9i4QxG6Mv1eY4gP7CesQWRRpJExGnbvrYVA6yX9RULCHgZ6LwDtWNSGybA8MD6vqh",
  "key14": "veGvzWk9L6rQey4c7Aze7Ma4voK6vcZCkbH8SvaGQkkx6RW3buKfzj9DC7Y777X5zzUUFHZZUdNTqrk7XC42je3",
  "key15": "4SPkkvuNRuvp4WbdVCAhZMagBzx46m234U5MUKTR9qu1aSiTa2Sio17zzRpfvAvuBgAUVK2Z3PvfLgHxD5cNTFuP",
  "key16": "3LXn1oFPPuizTsmfnG3WqgrcHa8P6qrk6W94dPH6Q5ZgVZYJGmmvFRJjrfruawEN69a1borRtJvnrc4tqRrRLuXr",
  "key17": "4ki3zeAoaRinH75edoV9m9KXH88G1NLH74Edxr9TNyvUXFD4ZRjn191BhDEmE1yEtWj77PFEN1R2d5BUuDb2ZiYT",
  "key18": "3EfqBA8ADdyphK3whqEGvnFFRoRAzeYrpmPzGvrNLr4vncFCVByev4wgzApZaZ92MCEG2htxNCUQj9mS5F5fv531",
  "key19": "3yX74Qa4QDzNm2K2JGE79EkUHuLingvJcSshwTGJgg2g6yX1H4pmagDAAdmqpJ31DV6aWz7m1nuJDEyt6g1yP4dG",
  "key20": "zpV8eXQq1RhF5Hr2Vmz5fJJk5fgoDVpM12EnxcarvxMSR57xHe5NmchmADr7kDSfHdP8k1YaAzfpqF7TD2F5rC6",
  "key21": "3EUkduATNHXj4oMVxYMApCrd9RrjjWeidzrEJBzw3EB2iUD5tnZTw3WF5MdFgUQ1zVRRPEp1JnG8juLSKb6Maia2",
  "key22": "662QNZ6csSEvXrrB23kV57FkKBaLVCE1tfD6ZFbmvtB7D3ZcVZ9Zncet2rDn8f6S4yyC1riSSM4J1u4UsiCXi7P7",
  "key23": "PesQvAtApqyn2cWvgLsMbG7GMSMbqMh1zvbzxK7fpEF33SsFjYrx49M47dtZPn16zKkUj1NAffzty9kX6hEEWZC",
  "key24": "3VymcjHjR9wa7ph6YhjQGbkwUeEGi4T9t145iPhkkJYoN7h1sL9zxwtageJYM2A4LWC5ubtmXTkUyDfD57u5MDUs",
  "key25": "QAF65mR826QkqKeMDYLm2T9FFqVhe2svZW3u6cWQr22oHqtFY9MquvYZQyGrRani8DAC6ycigxGZzB1evEAWwgt",
  "key26": "4iygNQotjGEqAE9ydWdQAdPKsBugMfb92vWwARPbxbzz2bnfEBUQmQKLKuGML2b918P6uibFLfTMtbFLiWRvBjzC",
  "key27": "2vSTQ8kD1NP43yH1c4CHdayMRAChV26cRcrZPmnJrJkoTD3YTf87e5RbMHGxEJXotqYHR74gNFPVSwnvakAiYZLD"
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
