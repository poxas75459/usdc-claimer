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
    "2dTNLWb7AdoGbLtWgLrY2BkjnaqFXskojMenwGYpdbh1q6isFqGn5sstJPy18GsRKt9ue2DZtTCbh9RsXeNHVK6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UVkNGZYx5W7k3QEursq7Shew2WkJ6Tue68FtqNKz8j1V5SZEHUW9dsXWLrtVVsJP9e56H4fSPRP4872ZejJHYMA",
  "key1": "2MDrnohkRYV8eFy4hEacQPTMzDVkRPWJ8Td6VzjieYRH5XPP9bjVzs4KcEfWqkRYCa1rtUvinFCckgx1FMf7B89",
  "key2": "2ioYycEps9Ue3mEMcpNJPGTpBBCNz3Q2EU86qqB7KYUqXf1g5p2yaV9cdNBgmPCHrqhsGFvEHh2UdT6yxGJS7wde",
  "key3": "L45hYci1LsCjabcoMEyd6FX6KYopKCdQyptkaxWP7xv8p8EVG7f8HN7FwM14wa5Hpy2na6Ac7vyWZYnstxq5pkK",
  "key4": "3P4KVYBN54Lyg1SCoTKoFJtNbUM4Em8cJkwMid1heK4HwguWPJpo1FE5gnXheEvPfh11NUqFHeQSpcGo8yTVdns6",
  "key5": "2EBcFho9FCdo8nRPcKAAR8rbAxpFyovbJp2ERNyeA5AaTjiQvBsWHuUEj9fa6B3pVnU4Pjodt1sjjSytgA66zJrc",
  "key6": "2tZZjeoYhNFJZUiwSxsF35jCuegmAB9WKkD7mWN3jkvnZqeaDVfo4Rwx94erzhKLZUFGXniJRMRVF5gxzMd6TrD6",
  "key7": "2JPvdU4UwJCR4X6i8w66VuRsp9SG8fgwBEN2sjXXq9W13pB8r8MZ3dT6X7GCu6KLSAT6qmyoJ5RSeo9oPdxb94iu",
  "key8": "4WCwy2Efjkakoude2xusLmmarWyqDHxEyFHh4sjDGEyv31zy3pFew9ZMb6sVydxBwAGmcVFfAXGVarPW7mcRxKq2",
  "key9": "4V3pJmduYu3qGPZtDq85eFg1okmCr9EJ1tZq3Vvhsgk7scaRRykMRyg7giB8AC1fmGaQ7UE8nhwVzdeFf2sbK6mt",
  "key10": "5tpiYYTAUCxTbPJwdcmukPnhoCKioMvjnrKdTg5sEFyqfovMxjne3UqWCDoEV1DxovZENTFACR4r4y4kb1vLPDrE",
  "key11": "3nEHfbZjFCGXxMP5ACc98P2vDp8V2SFZtyQ13nPt2pc2dkUjR2wCtYavmmAS7i4Bq66yFDdTKmdFXGYoBYsgkjDv",
  "key12": "4cgJJcWqSicRK3DzurRSFsdFc64CC38S4U3czamkR8fEtUvJCdLMC2CCGHAf8jbiDFCgUyKRkdPWMYPkodf1Zsg2",
  "key13": "2AqDvPu5GWwAbRQ9si5voDLRBdKRJyr6GAsrHDjgSpLY5nNukKqEnEbtR7J61c5tDkzB5qbMq4utPPVyRotSbmvj",
  "key14": "vTtMhYbZLoFTnVALHXV3zzzUA7NUWiEAHWfEV7rVGNHSWUn6f9CDcfLunC4yuRJDs8ixJbxW7b5nyLi5zMEL4PC",
  "key15": "4nvq4b881EfNh1wyS2erxNKyiofA3ZqVtZ4vdymxcgTbzNp3FX5w5hLU3qgQccEfcG5dqSpSk58j8khjgCbh2znX",
  "key16": "2Z3vYmY2NEtAJLkXezLEqS4UST9RKijdRsJWmkHSrSTfNH6Y5Pp1GdgWBhFDXcXAEACm29gMy7ULYn7hgKCtgz3F",
  "key17": "2piRipjjaP6JG1UyzxyDSPDgv9eyaQ3qkwnPNtMuycjCXXUSpuhK59ymntqY11kKyKScLZBGggsAASDurhYZA3CJ",
  "key18": "5kSsjBzq7NajjAvZZcEgXSRo3yss4wn17vbxSu2GuKnMgVrBZmJoHUupSMqsF42bFrJD66kemPgPLxjmQLwmFRQN",
  "key19": "38xrERf7rqrq8FK61UdHTNKKbpKfUTzCEPNzh3hiw6aKBW7pMnyExLDAWytBTtd9zwFHtwo1DqxFBshWzXFwgex5",
  "key20": "5ovdHmH924HS1yqqd3YmSqbWHxjFUvbgznW4VaNc7nsbx9ofKcKGrDxsr81Y6zgwuQCVvVyhyMHjqFCXPQVUMWRv",
  "key21": "5BS2ZAVXuYHo4CLgRyE6miwdaqmHDsJEb46io3kCJ76Cg662DttVUHoTV3qoHp2oTDWdVtiZS2bdT6BiiM8isZiP",
  "key22": "2j8XTdti6nPmR28RAt6HfqJwLXWxcFR7NFvR6Aagbt5QCWn9JqiUXvQykxPpZbnFxm9rSVCdHEzrgjMBseRfNSkD",
  "key23": "65BBhWAGLkbLqdx6ZmNuGEuTR3djCAcec3xeFzC6yKPAD1e2aN11mDdxCJgu8bHZE4dpqsMmfk4QVxxtkX6guwbb",
  "key24": "2WK6YvmAjHeqMQnXPCETfengCSxmRfuoemPqeGjCsL43m5zM9LcZ3rZ1hb3WuKmdEihozf1CgWvgS5NVUiTq6WS2",
  "key25": "63HSqpmDVy54TCj6hhVS2iyEoKdFAd2D1siW23cyqkSpM1Hr22RjKidmXv89jyND9FZRpzHLDEeqDeKQ7LjFFoQD",
  "key26": "2NYMWyJ6B9vkmwwmoH5E63e7A3o1wjhExE1p6zeAAWkC9Ya6DgKa7ynVKJjQFFKM3Npxmy7YvSSUd5CanjYHBhV",
  "key27": "51XDFR7m1hRqyE5G9cp97HCphcUcWULf29fcJtDpixBNzmk8HJzEyxofREx98UWtuNv2xUcoXfkTVaXa9LWCyN6u",
  "key28": "4Haz2sVMZrKFvWg9xj2PrxQvrQTKTYrDYVUgiQXRz5RWEzJYr9mjxsqtHneFJxKjBUDxCps5crWeysqysX3t8AJ3",
  "key29": "3TnQybSvqRD7yg5XCaJYduLyEQE4tTWRRGKUAz47mfKedxEkNk2raMAAe8rvZ856DEHriLjkp9VJ8GMLp7Ud6C6G",
  "key30": "5y2U33KKwUDsf4Jn5pSbqZyTgtZsVnnn71UPdjjn3eouf2md6NLvafcqdtFi6pMkHZvr3XwdeRGffiZXdmRGfwmG",
  "key31": "2uQekzcsU4eLMq6eWUp8U7xe2Nw9p7CQfuNmGj7mj9zDtmimxTmGQ9sc4aKzwkGhDp8AfhLdsMRakEoV1CnmZqbR",
  "key32": "31opjDVj2pve9phbimd4iawuNL8PtwCeQfQDy3zBtGmJyRxCaBqfgpgfbMzgzAPeMcnHYNwfMhynqcX4VQ58ofXh",
  "key33": "2H8WExLx4JDfeR91YtN7zVxdc6Zc3eUXN4vEos4oyrZDnd3AtS5yTmAoineEvkMTeezvAi2DS7Rry27taciZxvqF",
  "key34": "3cJwraxikem5KmZEizG6WXsMjpjN4PRBipYVmsEYddU5B62vGuwL43c8mYEyM4EntJQxwtmoxBNaJq3ELW1iujLR",
  "key35": "5Z3HieR1wUH6uCGZLrry2C2nvhjo9BkJL7oWLVKHgJU98rMUsiHxmGAnjHbPE4djuVqR61ELpy2nZuyZaKPRwgc2"
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
