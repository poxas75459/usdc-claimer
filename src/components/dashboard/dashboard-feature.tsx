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
    "2ACSTgNEusseoQnwWSaqK3u8weuFuvGrJBo7deXT7cfe71VmJTBYfqLANvaPs9xb5sSpKvnC8UEak4CLjr6iyXxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ac1cSgarZoHpXW8HXCtCb3yukYKDrEfFHexvALGtD7owswRaoua6UEQ5NJzysS2DDmamNp4JydiJUAh3mZMvsGk",
  "key1": "3S9zQrfJg79mC7NPDCSTCqpM4KzqxV59CjGTU1seqSPtKEPvuidWiFdFeWWa9zm1AL4u2Rxrq23HMwchmkC64n5Z",
  "key2": "4jzChZqn69pkazaLKyy9Y4UCfkAGeBtt25a7j9ajiVym4hbNDdSrAC3kU9FZh6dcJYLzi6JLRqu8iM9nDVY6fcdF",
  "key3": "5V6qrePKNmGCawCkjzNAsHr8xXr9rq5aCFrr1DCpuog34yhVZ5iBcENoj6WcsHqyJeqkicqArcnfKR4K9T6tNdFY",
  "key4": "28UjmQn1VzG3qgrj4ratE7KooWUj1GXa6xdH2HZ3hnQCzMPQAu5YhKXLxtpUuydRDMZais6Br7DDTaU4Uuuupjp5",
  "key5": "21GP9aMpdpHCVEYyeGd6eCiakRpZhTKRyRfQ1E74ipS31R432UpikjfVNnZSrKqBTKWTwpjYhgQB16FsYVdTQ8hk",
  "key6": "41ViUkW2imcHdQk8gC7bKvVhSgWkxru9mNfPBrPDHYeLEciVKTiU3FZf8i8miR1BoDZP9vrEZNF2LqLusEtx9odz",
  "key7": "4xQSCgqtkt6TrjXzHbx684Ms6enTGWB6HNis73sa41mbB419yUxYvH7RGLScj99pyJeJnLzsSZExi1fAHyiYgxHD",
  "key8": "2WWauqQxCZLemymjSPc5oCm3D4yEfDogdgxNHEtFMX2mvtUhTGLJmpXzcLTyYziwcnYFEbT4m62Yrsr5t8savKro",
  "key9": "89Q16GrmQp3ss3PG9raZR1Y3BMddgUVsqNn8YtPvVGEKx6HWoa1KWwzrNoWCJmHraudEzLZMTQhUTgL12BJU75y",
  "key10": "iemYZ3rB1fjNTfKJZjvTmyPDtbguMvjoVziKCJGswbGnPQL8eW698567pSb3KaJwGCTkDTqHWdZwtiQZzi4didd",
  "key11": "63LSAzmtEeN7k2CdtA81zp9cM5pvThJ3ePWUK6Y2UstCWvRp7becNVLXT95VqGWWwka45vm6cwx7FqcY9ubyLaFk",
  "key12": "5VHECRZjr1zKjQtt1BguTaRevaXWQDW2f4DfZvLj9Uj7fz4MVJNZzx16XNF2K1iDxB3UfSYybV9awLRbphbioz1e",
  "key13": "3fnY1a99qSZULniccR9bE9yBGwQgSqzwq4u1K46duWzXFxSGjP2apon681N9Vh3n2q3HdNuofxv13vzuida7VnsF",
  "key14": "43QMp14amJFWHtLPxE8EFcZonMYUqvK2CiyazLEGAfMRxBpPeAbAT5dfH9k7hFoqkvKGTjYF3s1hywDLSrvCKzJE",
  "key15": "2pSHAhS5EbhefMiQawsoS1fGpL8h1nm9zMp8C1Cb2JrQ9uXNWVcbM4UMXsZWmrYEG8w22FBcjwdfr9qwVLGiDe9W",
  "key16": "24ApiYDHvsH6j1qrqBoGjH52QobKkJaCXUDwh1NUdcNyaf6oDT4zt8af7Bh9VHaGCrcXnPBSStF54azKQWxuodVj",
  "key17": "Cd3Kg3wvXjpoz8TU3Gei4aThBmGXCmKzWj72LNx1vv7GK95nYKpPFr1QGzjwsMhFLfvYJbGjsE2geZAg2qFdN2C",
  "key18": "3AqxZaDL3gV6Z6k5a6AZfLdtb3gTFpFEZD44nVyjnVAnTSiRwdzta5TsA9uE2RJbi1oS1uSwx9jUztGy2Y1s9VaQ",
  "key19": "5Xo9qNkn23kPbCmxoZbeGss7FJ5nNz6XkvJ5QEZBJHdcRhgmezKBaF6EVhSDAahKMqkmUiejvkUHg9s5MwbybFUE",
  "key20": "5wahwvMyg177Su9NWJvVb91DExHrTAdtwDucJyC1poiQGH2HEsvqnDYMMpbwuiQm8pw6ZqrLwi7Uk4bYQQ1Q4ZWo",
  "key21": "w54teRR9NG8Gs3vib9wQDK3zfoNiyDaNVo95cNULkTaDH9vRLmCpsaTEHa8BwmpF2kvhKHv3vhtreQY3Goo9gJV",
  "key22": "5HLydmPK4r23tFz7eWSSBDzXcUmqt7bW6ixkYmu4HPhw3qdasd7YGnm8duzvxYbiQT7rebWryV4uCEj4yxEWEiXH",
  "key23": "57B9rKpUDbotHdUQogC7R2q3niaV5s1rAz92ic3LS2GgDE6R37t3VuRtA7den5QUXAtv8iJRhUr6WV4xVUL6FTm4",
  "key24": "39QacXcdvrZL6kwhXBYwG7yQNQQHVt7Yp84DA15Wott9Hi5yXzn4tyYssh9CgfZ1Bfmp5zbbmfhei3MtLbTtxyKP",
  "key25": "3eYvxEj7h3R5Wp43iA39VFzpb2PjuR7ZHki6urRBUQhhdhYkShdd7URpAxpYmVfeHn5eYN3gmRJB8rZfQXpghWBD",
  "key26": "xru596mf5dr9XbPaAuV8x7iWsdzz293RDqSdbw2mF8aHknHVR3W394eWZBAASqcQrFdBh4CqH1qMejHsF9nWsiw",
  "key27": "3NnsYCwUN93XTf4rQFb6FvQzpkjRdmyrTbBdprB9Hsg53EcYwQdEqjGBaVyARc9e68hb7GwcyVZ6PztaaZaMfA4z",
  "key28": "61p3TATBsV7MpSgkk9xeLk5PvGAmgFJJPQU6F2CTgMP8JKCUrSuDVr4Dza9KYSoEMxWAxCEPyZHbKdfeoLCJ1mW2",
  "key29": "cQuoDp8ur3VYoBXByT8v6YyCAE3qvz8vdsAnEhgkMSzSh5wNvcnEFDarUm7QnE4EsWoGQyvzyo8XqandyPBEUWw",
  "key30": "481eVs3Xn4aFwhfU1ZxApJ4esWQKwAbi8rtDUtrJoccD7TcQyrEfBi4p1WkbcyoGTbM74EL5j3rNV8ASPTFAg6ee"
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
