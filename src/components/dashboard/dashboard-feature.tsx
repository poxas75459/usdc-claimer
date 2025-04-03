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
    "5xJEUpsYFhf8CXfXnFMXvKMU1ausHipFjxGfDH4WfsjpahVLFdnBiZUqcbUUqd9yjnPQso3XgDB8Z9DXJzwTKfyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gkjLrS48peeUSLgPL5RtJH9yee9m9NWrcPpHn4Ao97QC3nJJXWd7NaEVopAGHeiMgxpiD1Vp9njcQxHfudxgw5h",
  "key1": "2W1rG9orm2j6HyPpLXk1Tos8UUAKu7dJdXzmgxbJheu777dafcZk3oeLWNptbB9f1JCdbF5FdQ6KMGK5NwbXRZzs",
  "key2": "9eUo7MAwaUV4vnn66uPdsimFmrkyysXehQos6YuprZmoDXDpe14fizQZgfRfnGK4sxgNE9uv7HobLdxgeA52R24",
  "key3": "4K1djPSAtDohocuSWkoHa8Sor4NJXLFJvCMPzGHvejfQd8FPYy9K1Xqbfk4s5m5EuuYEf6C2NgCtcayouoXd1SES",
  "key4": "4t5rjeeddFacQg69Jh8GosTGZmRxLVMJM9dyAYqQxim9y4GggB48XeHr4idtAUoLVBUwms2cK2BdP7M7c8a1noWo",
  "key5": "2qXvimrvEAs1f583JoUnamAjU5CFQUMi7bCRrGDqphSWpS7MWYMXJtbpPJAzjsHQ7yaJVSaRi84d9xwr2eaTXbL3",
  "key6": "2y84nKb7d5qVjykEDaX2114ppVzxeHMty191rozdpkM5Wp8fp65JTAqHdG8AWErPoYkMdJcFRwf8ehW6DMa4ncVM",
  "key7": "4xkV41Trp7CREbQfvdsCsyDw59THWTPoDsCBdk53M3whAF7casYVGd11fzJr4FCoKepfAegheQvfLUvbxAGJy3ev",
  "key8": "2vw7CTdk8GaDRmUdXFPiEF3Y3NUL4umV2Qw15a86Z52n5C6hTBKUuL5xEPsePS21ZvBEsBxE9WJQJjNgeMa5yWVX",
  "key9": "5Gq9SSzGApSSEheNtCqixbB818ynfr8bN7gxHYK81bC7eWVyzF9wuoD3y3HF4ALYaZq6tGkGFsqsVKSJ4QtQStk8",
  "key10": "v6Jj2dx77Vt8m5nBjwgNvafL7YZYb1VWer1bt6vtncFAs3xxYTK8MVN7syLaBiBy7unUKhroCZiLk9afKyTwstV",
  "key11": "5s8YvxBowfH1viVGpwWyMxk7b3LU3xid5zLioLP5Gk8L3iofZe93jCLJ7cioyGmyasPkHi8U48yDuKdPsiXFmN9H",
  "key12": "in6YRMdTndv4G5fPJCDYEdpe9f2z5rKw1pp3U91pweDcrQ4Ly5wtahMXxWoqYVQ3NrPprZvsWHZF37TfBPEq3tP",
  "key13": "3NiFLzzHWPpPFKYeRT4Mb7x4iRZ18bVovWqYLPkJq3sUNcDNTDE6RnAAFKb263mrMjwWxtbAAsXPNPWFs4fSMrA5",
  "key14": "eeCnmxAAAtFraS6NQJCH78XAixzQ5UPCy7dVgUaQjGpGv38u8Un6iBApFqN1iXgkfsnpmFk7gweDvpVZZT5n9AV",
  "key15": "43wsAdzvxCng48VjjYmQTJk6za8fz9ngZXDdkeBzA9QY1DjQV6oUNJLRt7DXPYVYLcFZLNC6PygKBbTUX1rDuX1Y",
  "key16": "5yuWKxNaXvJhpDNzzmztGDD5FXAyKa4c566bRpPKjGcCom1n7gKazEVejxMutTMNDtu9Ga73rSnZMQahfoRhbN9F",
  "key17": "34YKBM9M5WnQSFPMzzm2EyCj3acPyFWzGrqwTpPh6MPjwTjYoU48vNz1rZah8AQv7BWv8B4GKw7ZvYFndHqhdTmq",
  "key18": "2bP7ENwQYwNPeUKfcwhNtPFUczexM8ksPPWkyd4AV2nKmGTPZKy4HJC6zptf4cZbDTkHAvcrxWRz52PDUjGH3rHy",
  "key19": "QmjixoEftvkTzLwKdvrdy3ZX2CKkoPY1bb8cRrRXMrBRwU2pCoxJ61cRVn8Lsu1FZaaaKoFjC6hmJ8qbLB8gSDB",
  "key20": "3aSJ61qT3v6smVDHTtvDE6fpHNz8zeNsg4shZxCJCYAqZUbNYVmnpq4nZ7zvrvGfdGqg49QGrLvKGabF2mJ1RJUa",
  "key21": "4GEfgpSe1vMaKXaZu6HzdqBiYb6Hocuojx1TRgVNt5Dk1TmLCbKD7hCkJbLgaiXwnQFjdWGCh1Bvt2SSBE9Fhk9x",
  "key22": "2fvLGsQeZSJnFAKpAReEngxwjqPte2omc2Lioc1EdqcCJnU9MiJ8Q5TgGVAM9fDjWaLpXY65e5cfrbu8ioUPdXRi",
  "key23": "3RazBAcidgnPnrWTyph1cKG1CaNX3ZSdVUAhmfTcUgc4DJtpvtUTe77jAKDUC5oaJA4u6zycaA6exU41FUVh5SX7",
  "key24": "5Hn4MuY4eEucHRpdZ3PD6qR2hxjQSBknBXU7bTh1qsE3oQbcCxWEd58DzXqYccfXbpnGgsWci88EPhYE3m2dMXiy",
  "key25": "5gaB8bz6VkQYLPst5KfkAogitxGYW3XLYbqrU7Z6fvH5EKzye93nnaPbadjN8vUW9wKLAxURpVaogQKQNDMUQAjW",
  "key26": "Z1QjYjqoAy7fPpABR85YGm2jEyfuE3nT6uKgWGL1G4k69TMhotQsvkH3LvZWDNj2KJSLh4hP21fhNz77a9iGPfE",
  "key27": "5j3vjkL4AisDGNMaQqW7yjGkjcsWrzNuEavTZtV8rFXL7GH2Beh7w2PTnc3VLDSucnjmePHRpsf5KcDTmiEimNq5",
  "key28": "4cMi41hP8DAFr37WoUiQPYdc8YCHR1woAqqni2MBUYyg55JZVUU1ngUko5q7E257ijvtvfBSrYE55gmBNKmwGe7W",
  "key29": "38nWbtnhqDy4z1pYWaDeNvRVdFohxiWUkNrCv3y46s6VuGahgfFnbFuc2Ho3DuCFPSq9YyMhfjPPzARr61TFaVAj",
  "key30": "5KhoTD9hyPCx8RZ6XotAECr6itZDNE89Rmym5Li7og5gh8zAgDHvLm4PTDNZUwZHBa5W1jt8mSdmsvFX1VhurWSi",
  "key31": "hVqYhy3JbxwXDqemDKr2JSLqum152GosmKuKFDpDHudji6uRngAskstepJZSi5Sua3YYxTLoVLgKZ1rMLLpf8LG",
  "key32": "3oC4v9DruFnJi1MD69DcPJXC4usAHWXt5b4DnA3dsYZR1CkTJczds6tMQ7FjpQpNJeyQdB22dVf5xfmjvN5BknKY",
  "key33": "2TZh5HAwhAoSmKFgXhon5qDwWh37eshSiKjAPGTJ5k3WSivdjdxjpqroghcEevaM1Wc3H9DAbvA6U2xKkDoDzNxs",
  "key34": "5cgi1Tu9NcTyFH1UkbPzfbVMyu1qWwdVUBjnoxdSbPaGCe99xVc9kSSTUgrBd4EQuJzE4zojmEWaY3aaXd9q6mXq",
  "key35": "2iaS4TeSHHSRbvhY4zeiLPB2MkbL1iAoMPt3Sm9XN7ccgGS2TVLBWcwpLggGY9HqZ4bnZ5SEJu13L1BB48XLD8zq",
  "key36": "5UvCCWopWstnFJuAwTLeYXLtKHbaYG4FhGCXvJgwNnkNaMKdfwBF5JWMQpJP5fabN87aEhKgxSaYFSffWrS6zn3h",
  "key37": "6ZAeo7URMVm1zmzMvrkqWgpsJyhgrvYDfKWXUAVu6PYwgGKZgyetTPfqHqr7sd6fmrwDPMGoQn5zuEGcpnWBnDv",
  "key38": "5rCeRb5TnZghbde8UseD5DT3qJDs6MAqTcP7oGa932YuF41oVyJG74UkzuL1Sc9hxcNiaNTKjzjEZhmWmx7EzJd1",
  "key39": "3evsJbkLBUxNy45FPfMHRKYAHCqj8Yy79WpKpW5FXLthzZfpmwB3ohrbMb7s6iHXiphfmDf2SSMEjaSgdoo3TbFZ",
  "key40": "5eQxg15jSBnu3PujSCwx3hfYnk4DJeutyCT8HGzSGckLKreQacgQeZkPDNCdjTCf1WG3hMmMzey2YdPaozbNzrqA",
  "key41": "54HVkgCxiRiSWAEdU38ztxYz7KubPDqAFeugDomf6hMSWMY5j9G2qi2Vs1VEfSvAzxyp9jJZKs4hUmbf2pA714Vn",
  "key42": "4J6VNEMHpgR89CRVw3igXyUYWJnBnhU9QdEK4k6P1ENhaVvDqnew1QDAb6kxEs7nXanCZHwhAtavsSWRprn8idXN",
  "key43": "2BLFnXgdgK2QXssW441NuoU3vK6dxAf6THGTJ1vzpiDMtQVSEgCqrfmpXBQXNiy8opvJSXywyPRSEUGuLvmKMAdA",
  "key44": "5ZXxA5Y4Rix8QqifwVRfmyn9bzVVHFiW8kwL9C1gDZ1LE2R7iYDy2GU8iUiuK5Sz3FB2YAcrfH36R3UVyRvqi12u",
  "key45": "56mr5BVy9zCJCeQXYah9WbnxyjtoUxHjbTYpjP2t8zR47mfWZUDApwdCwcD8GGmCCSbj7Lb1UAUEBoF5NLzUcxc7",
  "key46": "y7dJxZ9TyAb4ZQvKL6RqDNwJfjo7H8uG7YM5BSTDpDbwnMGZXc314SnDPxU76jVXyKkvjp4uieZsnYmEj6sUdE2"
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
