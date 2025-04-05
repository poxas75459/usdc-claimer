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
    "3FM2EbwkzSSNcNkRWWrrcReEXne4Sfbq6GS2GPMyrQ6pjssAu1vV7P7rrpWnciekTTXBqK4ifu52gapu3Vk1uoiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kVDhoxubminveakF9PiFrXFwVPbaRR2WgoCLackTz8PZsXyKwfNjxw9pREWtN4Z8q2GZdfgFQZjjCtaHiX4TVic",
  "key1": "3jWEwdWf3BTtwzFgaeB16gQ1Cmnogann5N2q5LGcU1n11iBAw6Xah8hZcd9oBcg6kMXwwAsumDLTLzuukD55GDAV",
  "key2": "2j1DpPs94Ue3XejjKH2qG5T24Bqfvpd5Nn3PSMTy9HTFdErmqfAbijLY3uuKeD2aGqhruXHEvh6iVQGwfoTk8kmM",
  "key3": "2KZ7oBJHybxrodSqmow53wTDJCvmtYTxt8M5fWTryuXtYr49kLj5ioBUyHNnjeqBwmZE3xk7XDkVaJ4AM8j1dLwE",
  "key4": "5kGj6qm23QRZF9LmL9GPZ7SPmQLDA4yw938Q9LnQBhmBfSXECdxcS26DssKH6Ggpe2UKvDEVpNeBz63V61mUST7F",
  "key5": "33gME7D89iQJks7VxUKq3ig8QW7zkW4bGiNdMpRvP3oQV8YViNs8Kkx3joqXhCbdDRinsiN8QkNDznnEutrcZiSZ",
  "key6": "4HoCsj6cgCxX91kckuGLo4dhJR6iN1rCT96s5iTFYcA4AJe4f6XQzvAa5yXnNzAbctZeDAEPxFahkXjoSLrH4bxr",
  "key7": "3gsm9artpaQR4qL3tXxjHdP87FwAMnEoJDmUKTpkECdid5gqbx8BD1q4m2fBbt2iHiEbEt9EifJ98oDZt7887cdy",
  "key8": "3XwwyNFfYScJLBFV28e5i7NP1aP4JecbhNjkn6jgaKaKEeHwXv5QfK1EC6BtppyjV9dRgBo2vzhcWJrNhNW77RtK",
  "key9": "3u7WpzxiTBRwNCGrwDVF1TYgUBbw7QCqXmH1rCavwyj4ccrS1SKcUhFPFJTsWwWnufceckcmpYogSBT3xonxRniH",
  "key10": "c7a2CTsCbB3kTw4p7vG9qnYBqRbYFkgZyNsvZWDS1QAMwPFzzTahzAtUi5AwdP15vrMsEEEifw4r9ghDkiKFX1D",
  "key11": "2Sv4jzHvjzpfW3E6mj1paZN6E7gSvDxR5bRM7aVu8A4gbNSzMfZuMDsMcuotcy8LfGXQ3QzT4hd5DgQvPWiSZ2WK",
  "key12": "3XmhPSZoqhXcPbHRz2S16EeN8jGop5T2LYuAYJPKQLs1zLz6JnQ7jgNb8RoQAuZ6o6vtmRPYhswth6sfWkZ2kP4Q",
  "key13": "4Dm5j72aMk9SuJ4fnQkcMi9VLoqSwoD8cJzNVZv25BYhg4SSiB38t3ZVPawVqb8ma3MKR51d1Gxfp6PxngTcj1sf",
  "key14": "3rA67UoTTMFhtWnKj9P4muBBzmseCQgbPvRN6wKnXtJeRFxtJBooDmniunaBadsQbyNne3r8uzsdigxVJmVWMoHu",
  "key15": "2JUK1ePVR8rAhF4Fk5rY6Lz6coaTPkH9QQ2gRg8hcDqyYdiQLHH5UZXwDVx4NAN4vtCBZxp5xNT6JV4JCDAdnmK3",
  "key16": "5zBUiA6jUiWQ8F4HXigS3iCN7ELLH1LkZdSrUsnahmicUbBgNZVfXoRZJ12LMsHE8JdnYjd5tQT1w3VdLrQK8QwU",
  "key17": "2q3eKyaBEiVYkNP3ggx3zW3szE7V54CatcAX769YYpPs47gZDM59jqR231akwBx4Tv36bzrkUm9B9EWLJ2rLmFQ",
  "key18": "2Nbb2nZJUBcsEiNXS8Z8mZxR7kWHKgfsgBL7aYfsrWsSxs3Dx1t8SJ1ikb2dRt39BxaPkGi1dLVfPJcpfYxcB1uf",
  "key19": "5MJzNnPYRfA8zCtaxcubFaGvTTdXXr5ZnVZupTepUG6X7Y19tsnirAykKZdSZrWi7tvRw81CThr5XUppMG8sqUB8",
  "key20": "5pwqCUyzK9z3CwszS1FrnJc7dfmAEhY2VW2v7WmVb8bi2mTYv7FmW9hVpvZyd5zDQgwgf5kvKfBtkpNQuSbCnak",
  "key21": "4CFWAvYi3YXHBSaw3eupMAiJx9akutsJs9ppCvSmwz9agVipeZT8MGxbZaDe2wfBSLFWLSmBLw6HVhbVpcAfBoQT",
  "key22": "nphXMV6j6VSYJShocXa75AKDhabxWcPFpGL4X4qLGJtxz3fRkhxZDcyp8Eu9nLRYWzvWZCGdY5Gxv4QfL1HyteR",
  "key23": "5uErtEBzAJRhvCu7Yz9gnck67oX69VGXmzrcwe64RjbER5DojUBTBoAtxeFPGCnCHVmjSk2KyG7UGpSdFUEhTaRL",
  "key24": "5GMvx8AdpB6ahEPP16mHV6UwQ7fMU72Ko6Hmm2UrcXiNh9fbdUAoi2qofo8ArALqknGYxNogHYDRUahYYCWkZurF",
  "key25": "37hVU8yWQk4LxsB5tWiK7YCU1NUa8HkRdDZpfnotvAGoToiQWYajn9gh2VtPAK9D6Bp5ZSWWttbTE4UjsZn6nogR",
  "key26": "2bs5VoePHb9BUiVFiX9FAyyvfoWf7EAudMzPaFCQEP7UZKKMdmTYkXzBZBs8rb3au2NL6ZcHp2gu51pSjT5aJxVD",
  "key27": "3y8FcntiHik4H79ZDh314SoME4BxA6XUmHDQgy5GUoUFT8soXniB1XnYKVau3DnQebmjcYvt8PfQo3PAWmbeiNtq",
  "key28": "3U1Ef1mxr77vXZZXkU8LRYEz3cajxrrDsNJrsJFKH2zPoDvEtk64PSWfuMwiebrrMpWZXgaRr2begJP6ESjoFNyB",
  "key29": "67oDGSdPDY3Q2WfBVZzEUEaHRHVUapHW4zZU8p1yVoZ4Aukp3EY9goH5ixG2YW6L2YthFRw5v5LsnbWUCWCD7tu5",
  "key30": "3NW5CBu85pqN48xGNWvxsr8meudHQhmSPGgjFFPNRhZMPPgPazqUd4K4ygsWyaM7TUApiRTtfjsP6VJDgxGbJcuy"
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
