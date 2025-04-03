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
    "5QfEBPpW3PnMLNPB5hpGVpyf54bdSMuWzJdDLCrn31NcNWv8HZ2x9aLYAE2Qd3hsy45KUdNu45rGM5BFzbqPhApE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49mZ6WK1FiiiU1j7ntYh4phXCZJiL1MMXyQAKGXFn58BF8neyiwRKp9jc8ptn2CboZytmvnTiTmfSBAHBDibnMPW",
  "key1": "2Ri5oK7L3R9Aqeho7UpwXF2PkU8V3r2pYckSeP61QURBXYPonvHNGFSj53y8ChVfegBcHvTo41fsXnJfjqyGTMQH",
  "key2": "4aY8x1xDC7DpjSPbA2cgWoJ4AcqkXtiakDDgUdkDxT3wHh5xmj7wibAMaxswCGgK1QXqd3k9xWirLbzBVM4Y1wN5",
  "key3": "X1QH5C39XKkeqCvyuHYNLNzZb8rH64SL7U52z7qX7UsMQWSCv2QmQEaeVyPBaJcLjeSmKfrgePXaNWkyrw6v5UR",
  "key4": "4u91R4tGWAeG5cjqC1BvtoFg9WDg71k5ES4prxSMBHDzjy3CXaHeF3pRmEjLxkyAVuFSidaWTBVp6pkXVXc5zTCG",
  "key5": "4yNZaiziWZfeuAJPiAsHv98HyYnCT6iKtr7x7J12S9X8d9TLu2QWsB1HQrxSNHX2Gm9wBhjHHWKMX3HSbfaUUGRV",
  "key6": "2jw27KyK2v3xpmqnLxbnrxW1QoHdkU61Fonk3Gm2XP1U64bEt8HnRpU2twzXxAyDQFo2mdUug3k2TA83gQpeiRw8",
  "key7": "3XKEeSqYXUcuTvpSqTTtHzVMdpsgAhawY9GEMLqo7bcpLKgqCVvnsrAQKhTZB6BExwrK3TfnmGSfCyjEfmhQBygV",
  "key8": "5im2s4vgF2PNZYFz2UH1MaZviyVLS5GzuZK14g36jyjtTVPsj2isys9tvP2bAnJcyiNMUwoqvE6GExUEbHZZdH8S",
  "key9": "xbPddmfFeMJCku3DNqnE25sp6Zor9K8QXbR1DDb8HQ1Jixom9DrdTKsgJVeKi1mfMu6DceoMbJSL2BjxZUemFvE",
  "key10": "3RKGDuWHAT7jeuEdJ3L6ZSv9LuNB3LTUZY9AVAsJgCch2pf7F5fkMB8igiPXJd2FF815LiWQvSuyCdJM78M6Mef5",
  "key11": "3wB3zKDoKfo7g5wc5WLAB7WPHkbuL4b1NqywAGH3tHw9WnT2AkiJ86WBzampaPww8Ba91xjz2yyxva4D5qYv7oNi",
  "key12": "5jY6HArF1DggN35SqRBrAEafQ5r1wmPq4ndNTKJimuc1iM5i4Z8KFeU3Wk4RJawKo8DS2kewRnJrxMJdZHnNenh2",
  "key13": "czYu6Bmzsw4Ar2wP46BVoxx1ph5fA6Q95RDmFPQMAFKrhPXUcBDrb5vpNozTnDUDNipDrF6DVicUzhsrarpCXdC",
  "key14": "3Asa2Naiuw1ywGWi8juqy8UivvSPiHyeF2dwnbPPcRf2FRsNhnsCWBpHys34LSsoCMXWXZKRGkcVPwnB67wWNybB",
  "key15": "534qsB9aSnEoQCFxQphT1wdytBHtyFjH56rBPBU4UQkfzbxDtwvrNXhDJppnqYKBWghzHQqqdFj5bv2e2Vva66kg",
  "key16": "RjER5D96tgqpVqDnQNa4ZSnpnhx8qW1saMZGwiYeB37eqvAeSYdHkoS38WPA2pLk6wFqjLSvQc2B86iiUzFH9Zt",
  "key17": "299nrEt4GAuAYN1wx851eR8WetikJepqpCrTwTaeEL6tgTo7LaMp9iCcpdFSi5Be2hR8AmB7tXjtNxYU4ZoUSUJs",
  "key18": "5SxmGKna6HQxEawkm5yhny128XDuHgdZ8Ff2qcCJmwRThtMH5L6oLDQn54ikfB1UkKTr4PMHEvNiHHaWubFheHV6",
  "key19": "29TvGPgNxyXZCNJ2SAAsDjfZGoQkM3VHdUVjTT7d8TUHxBy7hspgaUwvsnmySefpd7w2Tbqh8f9pGaPjcDS2bSRH",
  "key20": "B1QBjTarKNnWjNo3KA7Su4NKRNdktVME1w8AFnonwjQ3ue3WH5uUYVod2X7JK51JU66LLptuJJzMMq6wRPtwbaZ",
  "key21": "3jTBmoAuAbt3RteqsdTx7RcHPQ2rEAzV3iUFQUvE4VtoAPTrzKEgnyavLwWN6EVrgtQsL7UB9iL3NVhU8KA1DEkv",
  "key22": "5mJdVPyxuTGx7QGnVgT98cXTseidWS1G7rXjkcmyLS8TSEgasALymrJcRWKRv85AN2SMdPDNp9mENAqBch6AcyCo",
  "key23": "2KXScdwdUzTL8QWvNFWhGvJzfRQwDArhbit2ntX9KjgRH8GukfRonLCP1zScMJ9UtSJrEuop6y9CScx1GYmxqXyL",
  "key24": "53J5uHiFgVLN3XUKomfkzy1dA8JgkH9FrFDsGJ45nnH1hJP7TkaNBEREgYGSz2f5HrtUPhJ1yoVuRRB8wiMhu3f3",
  "key25": "2Er8x2hqenJvoYHtwSJ5pJdiYaVFqZ34W5mbX49cBiDn1rSwzSkN8hstXBLWYJ7roKPHSJf9Woyu7Pc9hw2DpXmK",
  "key26": "4K9jKCDC7x5UuDLgo9rTTiKN847jVvKkqQcqdZ7KGZT4Hz1VRY33K2MrvhzMmr6wE2mp7AcXCrd2cgqFe5i2pFAo",
  "key27": "5XMmYARzBPy5pzqefD4dP14u596pUFoNMkn5ULkqgyQRtmb8YYkt4BN24n9bom2tK98Vg2svhRhSmYj4EZvhEHvi",
  "key28": "3Cg3Rx7GPxrASC516xtchM5ov8HXjMBiMacfKbQdnQJEusfoyMaxVBvfEwZQZ7EM41Ke4ydKXHrty7FoYmQszhWx",
  "key29": "5WqGZji6Zg2FRbqyfcpxd5akCyxJS4Mfp9rz6fVJ112TV2F2pNXATptePAPNCCZ7K1LG4fTujQsaYRUmL36DCc8g",
  "key30": "DFQgEPDamEvG7FQTBTd959atudfq75V4j3XiZX62fuxpKGDA1WctL9oMYQqMaZxmLhqt8ZgqewfNpvsVgXYJjy3",
  "key31": "4WumXKvTxQjogZ7FB7Zj8XmZQHh12bEjyP8pso6sJfiAeZdQ8Z1rMFM4nX73eoT1RksNLXecQ8q9QrqpnxTeZWN8",
  "key32": "3R5Lp19ngfBbbTX5X9XckxS8ot7gPuXSBeSMLhmGyfWA1YbqKL1aEDL5Napvju2D66BqoR6qQz8z67NV8G1DYp8P",
  "key33": "65LsVAVjzGa3e27PUJgXPLxMxWp5JC6VBJDezksiwhriFWS5W1eeHWXmCK72Yg6qPyiMgnQN3Txk69K75DEKrYt3",
  "key34": "5jYRqBiEssVzWCvpMj52v8PnqZ45KBRVdDrRkZNvjaS4y1Uybn5ZVNpRMqdFWzJNn9UYUMVSdjjcpa1ugR5D3TFs",
  "key35": "3fh2JtDAFQnUSNfhmbSWgPReJeRDWQhfzetS4awgduw4K6yH9j6b3chHrCuuNnCtXWdWzycxkfhFkAegW7FujmDZ"
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
