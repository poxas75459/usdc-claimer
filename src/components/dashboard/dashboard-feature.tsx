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
    "hmA95vyeDwq2ybyWhux15LZyXH3FdW3fy7eszgL4VXyniQcNAgmf8Sk4vLprUR7BkikkS7AnxjMpoxUTJYYPAQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dQfbb39akC9QLf4hCZBArtniJo1rqbmpLpY9aCdiQL986beYot3vsG5acHdGvGiYaU3tzc1zGgwpcJD7NtS6BUJ",
  "key1": "3KLEQBdAim9Tk6HqfCMYjxgiPqwg4asAzbbQwgys2uiCK7SQe7i39Dtzv9diyHWZoTZhWugC17RGzWvtZxe1ksVN",
  "key2": "2WQrMFFp8BHt1x9tBpnm27L71HHDrkSQPNZEQkAUTGQEHsZZTeFkg5UedeBLN1cNZLE1e4gAAU2qh5qTsWKdS9RP",
  "key3": "57boqarULrDsuuEcGmx7qFc82ip7rPKFqxMvN9gLs7nSZnUVAoswcj7Lom57wYGHiiUE1J4mSWqZdHrHrNtDgott",
  "key4": "5fUgKL254JuSfgVcL5zvr3A7AtZyAny91w85H2yKnL8PXpxezojNzLNtCzKY8aH144Mes9eTCyssonxaXwL2Eyi",
  "key5": "3QKnqhEroQRYri2xcxXfvkFKXs8Uch7TXuS48ukoCUvMgsvK2gYe8gAryadv6hyEowLduY9qVghyobse7varLAjg",
  "key6": "18XjNYuF47YNqDfPFLT3Eop8UyKLDHGYdvRBXv3aizEnLQjvXMMtHQ2g2Q2wfJEi3GnAVY1t76KURMug9KsdbiX",
  "key7": "EchmDdUziGLvu2FYQoBH4q4fxZjoEJ5Pv58gAGFp9inTv8YF1mp7YHfxRXPphgkyojz2Nocscziqi68rBJPXbM3",
  "key8": "5Mz9WC7ite1Ha4C6p5g5u3Jf9ouayPhc9eTR1Q577qntXUzyz12uwhmbRnpkk5hyZBBT6YKLjLcnVFYD8b41QBub",
  "key9": "HzP8UFgKo8rKMgKCSF5vRAQSY41KH9ANgyTDnoQRN8hiNtv2mwi7xAXDCV4RtarMortMMNUL54rEAZYUubUEQ6o",
  "key10": "jhYyL5absNupzXgSzwQ1RawL76XY8wsT9KNbMDCN29QLPEjvtAxWsHU72zPCps8oF63qfogJNUu2Hi1B85kK2au",
  "key11": "4LwY4K2xbQjWgDrL7uSXC5BwnSYhAVKHhshop2j4VSUck97kH7jc99RNHknRpaBxX3xAvQtcjGE2n97Hb6FV445w",
  "key12": "4xt2P2UAXivy6quNzvCKMhQbQgxyF275AovcQhCwY9oCebQJhcPjBfZnzLUjDBJML2jP9xzweVFyVYUCTdrfw7Jh",
  "key13": "CUdyv6cQGYrnxS8A1dnqzxvXtZVkYoFCSmnX1D8HXmp6GGQkGmBopk7iMGFhnx6ZUbkvJP8HUUxR5LChzjLy3DQ",
  "key14": "GzrRLBpt7JwJ6GSfUd13ehTzGtqWs59PPC421ZXHLwukpVa8LdLZqBWmjXjsV9L9d5uGRmzAu6gXRmsxE9f8qRE",
  "key15": "4dY1ikSD8AMpQZyJwGfN3wbdn8f1hdvfZXFtEKbfk5EoYjRGFtmHQsS876tB15ed3zhtcWtY4vn1AU3SECtzLWem",
  "key16": "5SJGSVD3rnrykVgb94tMdWv9akFN4dxAyyyVucuoADLqUuKzpsYmG4ZckLswhnMDaCNHemea39WZ2ECmYBr6s2rA",
  "key17": "3PSmXdmbw2CVUxmcyLTSQKXTy8CxSewEU4NL7WhCpWUSVd7oNqQyjs6iiWMKFmYWpb1VJGiQ74T1Pt7wUWzAQN5W",
  "key18": "3cR5JYRw2bw8GqMyQmsyMGi3SaT9CFLRZRm1yHkzFbQTyLu3UYW4ukRQGhDpiWGic5ePuMhWwYKFVyan58mWyUXB",
  "key19": "5TKn3nYvBb79TNK6V2Joc5RckWtF21Gyi3gb2cpiokgjNQbH6FNKZs8biqjaaXfdfZaFoSpF13zHFxSDvN5Tba9a",
  "key20": "3RwHs9B5C58Z4AwJp1GNipB2cPneHqkMLaPbZjrTpoeFJtCzaCoh9CfTfoxAm4nPAshywLK9yBkzsncZVMvak9aH",
  "key21": "58sE4R5XM2FDQ8LmwhQUWbSYqarXAE9k8oNhs3KyaHLteaR79PoN4ZzY9XwK59iXr3mVQRpvrMdX4N1d63bX2hLh",
  "key22": "353gor4TfWV9QEqNyoQvbYzLNK8NEuuj19CkVNiazTZkAA9ZqFxJ7R2m3BRNrtdutWbERKTWL2JbYcpQdvpie793",
  "key23": "214AevwN8DFQgShFfyTYdpduHRYzQ3XcxenMzXy9UpKGL4PiCQ4EpbgEFQaku6uX9PkvyBCPPXXJM1YKHMFA3qrU",
  "key24": "2U6Pic1mDzY4YNppCjHCTxTJWuEpjK2U6iTsYGRFoYLsU8UZt9U938hRtJfrYmjjZPkKXMTr5vqUvghJcYWrFezz",
  "key25": "41FbG24mWocvT2ZHKSTwDdgP7oxVufewr56Yq6nDMsbCToRkDo4xJbwg2w3NCwUuGtTuw23g7KbrJU1jVzhscdto",
  "key26": "3QTz9u7fKZUMRdVHg4FaEPiFqJs8sc6zq8QxH2bZEkeKNE9UaXxL77uaJkasMpqo56HVYFxRreChn92p8DtY7B2P",
  "key27": "v6L1eCm2mo3u2Lu7WeUM5QJ3h7skrZor3aFqcMpJyWbX8JqLBaEZtb1HbgBw4rNiC4Q6z1MuqTxsB9ujP6Jpsqs",
  "key28": "67fpsydpWkApvEfQAjK6qtzhooEZBq8vU8ioAsFRr9ittTZ1y4bDakjYp3Ruvh5VD7UmSLLQKXjx1MiE3qQJRF8Q",
  "key29": "2UKNKMsjFa3aceJ5GZgRvFE6xgfLfFeZ1n4GkajZzydGMXDeQ1hMjCP6VNH4oS2XeG3HT7ne63edefynD6VPFHNt",
  "key30": "3AbmKSw8peFbQgvvwiZQM76xFXjvhLbMPpcjCZCZv7ifJ1MLgYau62f8bdbL6tFeHdU5BjLgdEjSXoxMSezsFjn5",
  "key31": "4ecG4CeQPf4Y9TSuj6W6xNFnDPLBhKmaDMSsLaZCE38KipXDFBbKFAyvCJ82esUKJFA47VDAYb9QX6Rhqs9Togcs",
  "key32": "2QbCdrWhpz2DeQUmYgaramzcE749qvv9KmfkbWAH3jEqr32srUJ5kW1bTroVFp9WSseosPYxjJjkQs5gvMKYmuf1",
  "key33": "4akQufdSpKLWQcHKAq65Ts8Z1aJF4mVfLiz1DYe897CspioswZfEQZrmXKNzgGs67r6c7kTzpNExohLCFtsKE7sT",
  "key34": "2Uj9Y5phWMKWigueTVjppQxqfPkDi3MQHrp54uWE3HK5GZm4gdA5usyydY3178uUDhQ8BADSe1xBVtuozHadc73w",
  "key35": "4d4j2s9EfjuLisYSmx9EXz2dh2YhkSMiGNZCUtZwNdtMFb3XuQk5qcC4sLBsuVwMwdhcCQzUGudV2kqvCruiwhHq",
  "key36": "nMnNLU3WvvvdGtit1spwGggG7fVsfxZHsLHy118bFz8juKgKPYbZBwkcfGxrNTdrUn9yAWCX4D74qFwAUeSZTpt",
  "key37": "2jygzH5rmkwtumyeT25ZfQBRvNFueavd1D8nSQXYmBqqwZMC134bweCCAqGTLHXZWYUGJoY2fJzqai2ejCsvs8X5",
  "key38": "4EdxQ6anaMHhrhwYjHT1oewpesABknBXV5sXEzpSvUeUM2iC6WuqcJAQPCpRuRD6BkGF3S2QXCrpXahiCHfaFgFK",
  "key39": "25M17qLpoxtjQQ3Z2sMbbXrCCsswgLE24Z5kNpz6qvE8ncAFjqjYMLwWRQGTLEwa6sK8ZYCXb8mtCEjJqgGXEq4h",
  "key40": "5nd5PnSxhTqoZ6QSW327YWAVonB7793y4Y685GKqZVDeaiSSvQw78QJBB5i56W5f4PJJffAiQYmouEmz3yUsoLw6",
  "key41": "3EeC4z6H8amE96x5FDLyyTJx8YznwWT4C2THEDRhU2GwxmgkyedJ2aMUYUkvdrvwDbm9Mz6QDjfVUXGGuwNFwBWE",
  "key42": "e4oT7gbQCt6PZCajCYs2jest4XJNFzSF3KUMx5FZkHZHNqoT245FaCqUxDENmWWsyFHeKLALd7kdpwJUjkPPsUS"
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
