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
    "4wdS9byYsoaY2cptDKAgDDohFAT9jt4tL4WCdvNuZQaqQVmQPZj2jKFvfnEvWp4h6kXsNfvKS5SSanr2qFPhB7NW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zfzcqw9ZKBy8KMvd7oy8WKee5GF7t2CXaFCnxpEitK7LVpXFVAHesWNY4Ussa8cVKnxXYnBbcHqfAaMPyVXMvjA",
  "key1": "3qBZJf3a1jzhn2abYi718ChhN8bh14sgPYHtjr2YuCTNvL64jCXKPhSRw6MGY769uALNHJGC2FPsYXYAMMb5Dj3p",
  "key2": "5EwwBKB1tNH3p3SKaZeRPdS1GF1yRewQM5NdWwp7J7Bazw9G7C7osexebmurYiT8updSTcViZ6P468s6gyhsg2Jn",
  "key3": "3qFMvg2nDJKxA9zULsEZknWRgPu5qBQ9NA9iPkBSp9hfriDYWAmYzgCiZLvnJHbZLpSZ9mC7gGtmqb66Vi3dWiuH",
  "key4": "45CsFDZSbXFBPyksxF3cPsgid4fMVtsk8CVhBN1FJSpyQyEEpKCFyVyyUaDwaF45FRwpwG5g5LdzHkrQMTggz4Cs",
  "key5": "3gSYFtMexDTYUwUF6DY5LAKk8Sav5Jgbpf66JRopkSztPTSZsWt1VGkQ8BfeRnGtuskBJPVSFRoL544edWhrSrLw",
  "key6": "22FgDb6sSzrvnDfNrEiDRCYxphecNpk2Xrv5HGoVPKJZKv4brZFdYnMw12iGc5uB2TB4MayCRNJwT3maSo6yP5Nz",
  "key7": "WBDHvdKqMD4FGAToGP3GA3zEYeYEncsV2oD72Z3xJXd6tZQvdvM9hmFiPFcFYL36oZVG5X58ctjHqwEguGJa9c8",
  "key8": "4H8PCR1X6QbSuF3mpnd6f3pWJGL4sgkQP1qp6EydQrHqjZLWvwaTf6QdwsJzUirgaNz3EqurjHSpWNK1fNagkYc2",
  "key9": "2VBnDDVa4cAEwdpVLVdmvWrn9sWwBnh3dvsmaVB2jUGyKRAG1B9wA3gmhfDTHQHXsem9FbGm9YzGRaRTj7PxJm3R",
  "key10": "v7YWXZ5HQw7Sb4zKoN91VNGu6UqxPg3xVDdmWp1U6pUfaTx8LMTce1Md9yaZTga7yzCcUjSUhyzVsCFNw7P1Bac",
  "key11": "3q9ADvdTNRWzPZAoSGehz2ebaqUTaJvx9T4CuL8f2T9iYLtNYVQ635gKBq94znoRAFhgnKiUi6vB7ZimNPqqQHqn",
  "key12": "qbw8Hzm1yFoxeBGYJJrr2zjmLmW73zDPhtdjU3x2JTSfFeGEXfpLj2kh9ULNiWyidf69kmwN1SLxU1J4uygwgM5",
  "key13": "38KQGyQy4cGNQLWTYts8Td4ArvDQEj6ydBu187bAq4v2HeoKGGgA6SzaYfmSWRQKp3Ts5Fmi1ZeSDGtNTbtsgk9y",
  "key14": "5P6HEsfSN1iVpGfyKMx62YFHgPphzRB5sKrLsPWZRC6cFyzQcZXUUC4Csf2NGDD8VXJDfL8n6nMPH2QeGvN6R6WY",
  "key15": "26Snk4yC6YMhKmfvbkibE4vvB5qwk1eC6jwPNXF4iJNGMekoiPCcfcgmtwRJC2HxMhBkw3FQEDA32kBBJ4niCGub",
  "key16": "5pZpTQyFCrZV4QaEisiosFdgmGpGPNBNvsTVmRi9Vkn3rbyK7L3WFNLQVj3UpXna1wDHbggm76gsSWtU2Hrjqxkk",
  "key17": "LnLN2QeqXTUDegMk9RJ2dSsBAtUQKx1jtq6qafJtXiBj4XY79Noc6wEbC8fLUTWGex8v5hHdu6mngnxUiL5M5FK",
  "key18": "5CTdh1SqLu41mdDCeNLWEmuUzBWqtjgBuo7ST3pdUDSkUt9ZN66asmcwPDUsEiUjhRZDAB21MiZufUcpFbuKqYLo",
  "key19": "5SJQutWzwoHM56BpRbHzDjKEDMxeRoQoP35M2CaeM2RGWRBaGKrSx7r5X8iXhKD9ySGyQYW1JR3M7zixnzVbCxAU",
  "key20": "3Sq7uhHdLATkT8KnE13UudSW3KFfvpNvkctzNLDxKzRCVJiescNNRuvDx3RJgoA1ZURbMt42WTFk8MbduD5jPZG6",
  "key21": "2oe24i2dRzxDv12RXuJzTJyt98uKWS58caYZv1Jio6QaM2hS4YUFcgRyohXc2oKrn5LfJym28aCJ3ghAnPWWFKUb",
  "key22": "sZmiXdeqBnAHagzS8m5rKkuiaGsfXwYKwRcEKDrLjuqXZcGTU3SWWUHfDgBGjpP2rJ6Q3tbic4qkiD41opRTS3k",
  "key23": "ibt4hcKZo58tfgd7DEpuT1LbcCNZfeAdQU3Ytt1csPoAFCM9JLfMigNZrstXgkRzSRq867c8iiimKv8ZehLGiZf",
  "key24": "ZVazqdFLrK34ZRoMk2WKppkhpMPAGaTeEEqt5wNN2g1X1PSquBqRtNgRbTNAho2rUawii4tX4uo5QZ97aazX2wk",
  "key25": "3vPvmsx4oAwo2UZ8vEQSwvTFo73yb9LeAQfBfpKQyK1e5sTAMtC2ScXJV5LtZ9PUsHXNVYoMGGLekajBamSMZuWE",
  "key26": "4e1xjRhH5Rv9ojy1sUTqBXYtx7K9chYHBxb1zc22Cfvc9EuUR6RgSVAj3EyZ6fBXJuuedeuLphJAqCH5Qscg3Jpa",
  "key27": "2wxXUtb6GcqxnwLLTPULfysZbtxKvBLzu53o9mR8ckMtRgBy14tBiygn1DGG6rW9vPcncEkfSXKD1iGN9ySVmvt1",
  "key28": "4UJu6thm25DZmg8iSP4b1yC7MhTpFDYwqi3KXHdnSnKKMpwLywyemCTRdoiMvsQAT8epKk2ahfgJXnkTYxff9nVH",
  "key29": "29JiRCTFERtQGYEsfHk9UikVGHNNUXfxPGFonkasxoXmTPJWX5xBV7d7rJgofHjwVzu8XMEmTr2VdFfo1S1pYC3R",
  "key30": "2BUWuZV7KjBuPzSgRqU9SEatfpasS1Y1hXqbWWJ1omWurfb5Xw8zcYXTzZHstaTEN7aZXHCDiv8EAfMimu9VF82g",
  "key31": "2AsBphtnM9vWtafzRZ5c4LEkgfnEp1b2YSvo8ikscNGyVTQqHgm6Vbcqrd5VkDNwPqaSTbkuwtSjFzmH8HTAXfBc",
  "key32": "5UjfZCYsFYkW7zKExRiAUgs3BTQhYhvndjY8wZWCYa7dN1DBCfDoNBE9iskRCip2RQBGUAeeBz6AKjeC6KnDRSAZ",
  "key33": "5shZiQXLRWFaj1HzxhJ1RjrofvY4P1xgMFK4Ly4RB8DkiXobz9D89SdFfWpS29b8F9VF1y3rGsBy5Whgf8wxaK95",
  "key34": "3cGUmKiuSXi6BXUaCRmqyuoPjSETe9WE1GHPqsCeZMScvLNDRwNkTeDxro9Eosxt5cKVH7g69TCy4eSUoMsvx1ov",
  "key35": "4nkT1AnppjyPL2a1J5iJyy7wiUk12s4Y2J3CdXBs74enT9ASRnhqp59cT3SUYrBCioNyeqHWvGYuijJBwjFMp1dq",
  "key36": "3YEVhK6W2oQiGMQb3cQUHrTGfMDSHEvejVSVccXHyrdRNktbgkFgXQj1uRyJK4wXEP4u6a64gdg7wNKD3F2c8XZW",
  "key37": "4nRy1rhyKDFEB8yFSwucaLmrDYXkKfccVyTnM6JezMM9ZMzSXa8B9B1Fv5AnGW7sQyeYYv8WE34aS4CBrMbgGCTv",
  "key38": "32ZLjywymTdWasWChqcMoUwCtNosZZN5ywJCXN1kP1JS3YJky3GU4YxJgWK5HWbGfAvn6uUK1KMLysxhxG6yok2i"
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
