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
    "4WVDyNzVyqKbN58Xdj99WXYRu97excbzT3UunS8ytWCHzeSWgDN8hsnZ1CTqo6Mef4jSC9ickXfezetJUGfCBoUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z1uc9LDrGqY236gNaBjosUjp36MCmL3t7UBKyhS9aPYRMU8fRgHCmAWg8kJr177aPPtkVMUpCJX3BqEw1oY6UHz",
  "key1": "4ajDHUB42vyifscrbYFqjvD5WjpEPNAJgqbh91xRKfdeWQqnRnVjsFWb67wa5bXZQv27fBznBefNcdPXX6Mwagdb",
  "key2": "3omKvUdiNFb8ZdLYrqbdUnuaESb8zkjejT3LrcRvDYqc6kEsGjFZKJ77XvFjN1NNZwiMWfhMtkfdbXvLdWcnobFN",
  "key3": "2Gx54ZjbBWNF1PPKMrwrX1HQVNUYuqVygYFQdaSrocNZWi8bR6c61BaLVdNzX9e3fQBDXBdercUXMYRqmEPAtXYg",
  "key4": "5SgqpAijEArcNL9cjC2hAXfWBF3yc8evL6518bZKJkokXMuNH4aJGcDyh6zB4NcTPF3W1SuwR9DLYvNa2GCjC2z1",
  "key5": "2v1k7w11HpXT7Yi4CadxFgdkYxvdA7GheE2Pre1MCqPEiKP5bYmZKx21h46QbFWZskF78zgaNC7UfvycdR9kjC5F",
  "key6": "Jeox7EbWe8wAFyaqUEJDKDeoQgqBCaZiaSDPaw95fRCjviSj2ahRsPXgpsEC44WiyAZ4usaGg2pLUEJa7H4NUci",
  "key7": "23ynX2eK8j8DZJo14k98Ztn5YFT5Y5eHCRiahA1LBFSYhxovgDjaABkwrrPKncZXd97he3X2UeXekwDoQnGz2wtc",
  "key8": "vhCPHnSLhCmBcvbkAGXoETkvTqfrP2Gg2jRkNbdv15sp3mzWswVbMhGVRMP6DjcEjcVV1MLUEeVb42CWRMDPmsd",
  "key9": "2u38BYgUf5MNoNbNQZ2gfaYGJ5vARVKotidRDsXNDntfec8U9jhEpvPpmiBcwNdEiJhNF46f2uuGCMca3jTEDiMD",
  "key10": "38Wa5tvJ6WrMjYpEEmMoZ241SGGg82Eb5uJouZkeTaFbxZ9V4r5q7ccmJzY7ykTFbzNfSTP43zYgTCHqJy5CBmj5",
  "key11": "418TU92JajFd25uadpxZeeLHQehx8tiGJEVHRtynNT2Rt4vRGb3CcaibvZgujZYzHuWU8iN4yU8AK8QqmMVgBxDX",
  "key12": "2MytkR8CDgJoXPNX8KZg4igHsYhcifgPdW2TcsT8D7sBiPSB6HgNb94xryJCLBVSQK2v4FrgCHkAEN2MmsM5CwNk",
  "key13": "5uGaYcqHwHZqkucjibq1ugCHpz9MKSZVUpKXM7D1JYw59xZqTjeApS3GF2iMUxGmgzxNGwcLByx1fJCi4K38VSPU",
  "key14": "5bgFAqHt46xiph6vsQSayQvCxuv5iTY827NU5DQjFsiWS9nzAn4oRZXLhZHtZN7TMc4gCs5UcsxFoEzkrG2JA3ZZ",
  "key15": "6SCzJTpqPmamLfFa81VFLyYkPEEu93ru5snAwvQGTyFpnYC2tGuvG6UmfdpDWBsw7FmafW8kdYj6Den5WkRwLAi",
  "key16": "5R8JcGeDTH2qeSvbq3NapkahoGYvv1Jn3n9Hwk9uMma2TL5DJfBJGTKp2pmWatjY2Fu769QyV1uWyvga3gArakRS",
  "key17": "2eoemgxkjsjGTupmgExKfY9d8gRzoXPrys1wKTYyme6ArvR5ezEAVMGdy9DpW4HVSjg7y6p9LeAjZwLhz9wiCezs",
  "key18": "2UnhQqEgdNaE1AymB72yPWkUPsL8fxB4o4Ej44CssjwsvfSciRZTggjhVrSHQmL4m4gCAkmhXr77N8niopnTCq4y",
  "key19": "z5jHHMcpEVq8LyAxXm7iHY9M4xkQUjMPd7rj9TeXp8FCS4YnWrzyCLNZqME6m85pqhzyKSpTMba17KSMjWFcKi9",
  "key20": "wjtX3MDoRZyy5srtXq1MHp3xbAN6HATphiv4zcfESs2yGMQbKzwb8zactDvbp5w4Am1ysMHtAYibj6LsJPxHHay",
  "key21": "5QbATiKKzZ4E4wmLukepobQZFnvZQVSf1kpHYTBCGc5U1rvdDEhGaGRabZxKvxnCFRxLXUyLXatp6i8bqR8NmiEu",
  "key22": "XLZvx9TjWJEDpaSsjWu1fG5Bak5C555q6pKMVbtVCeXchwnFaUu8tN5BPYN9pTiyxNrfrP4uB119Z4g2jfZ4QRk",
  "key23": "3jq32ZvtAL3NNoBMS9H6pcMuLDDbDBrjwWh97BNjAczrdF3xdmEzf8jDUai1P9YcpgjzUDavg4rspXHUGgu6ySJG",
  "key24": "5kyBLJ5MVkqS3A8j1PxxMACgPbWdRS4wZdQte4ry68GsY5YzoRJ8Cou5rpkUJFoGExJL4GQAMjeAjoHU5nHDV9Xp",
  "key25": "2B9yB1dWBxHR6ZMNvt5hB3Jw8yJFhc7GdNNdxhpZbq6iJ4sCJDNvTH86hqPMp4fHrECaQBUSuQ4cFnHCSpF1tExB",
  "key26": "2jRcGYBNZazpGMCsyKkVhZEx3UEPY8Jqw8URYisqHpBZSieymTcdir6vjUUppsUNgPZwmMJsPYf3ZBDQddtCSvsQ",
  "key27": "5Vgvz7w5JGFYjYR9HikyPh4MkH6dqPGDoot8wowycJsR5idV6zjBciBDmR2fphpWFpxYi2PPSpD9cJN1LZ2fvAQ1",
  "key28": "2zckk3z3CjF3S89Z5bEJnnmXGCaK2ScpBSwaGZQpwefaGUD6fjngFp5iJ616tjV6UcwKFjNqN9byuQz2trnxS4jm"
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
