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
    "2xnyzqm4qyvuNoYhCZUrtJ9Gy5j6KSEi3jvP2YKUamnCa5awiQLz6qzHFEsY5dM8iTrfZSi1LXedMAxj1Q6dhQCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aGUHpMHZ4fr2D8T4uBPXWopNbd5iNRHSmGawJmQcNw6npu4dD7onmKG2M9AQ5bgKevmuhhfHL1MLBwd2CgWX9Yc",
  "key1": "3pAhSMEgMfDsy3fPgD9gCBngtKW89ZomLx1YeYeSMYVxq2EMzpByer8V3hHjkXbGQXe5CQ8wPqJKZpev2m7fGXtL",
  "key2": "hTVJfY1LEWJhbDoVh6u9MoaB2EbFB3oichZeFMmxhuLff2rjw5w3FGhcpELVw478MNUMwsuNJCbiyMckrvSWGK5",
  "key3": "2aB9TqJWYiKM1enzmHZEh6dFgU23MvN7TYA2UCx4bcgJ3PvbX6bfUV2XrXrYtrWLNNJrka2hHJoVF3Q9iDX6w3b4",
  "key4": "RuCgXyveQcG3trkj7TNTKzcDosYfi9FwjMFULJKjsDNNYuMGGXNrdS5qZp7wHq9NizeQLBayMpz8G52jfG2fhgT",
  "key5": "5fx1dw9sas8Y9aiUKmScQdEVgqceHfHTJX2E7rbfhLQGYwgopdCNH7bNR1CTrzGVcEV7FgdXUhqiS4WctkAPh9Dc",
  "key6": "4CiCFKzAevRgFW4yJwQeW6qF4gv3YUzjnM4GqFkJshswSCdfeREzteoitwKqwDBCgyNh2EnssaXH6sBRsTYgksus",
  "key7": "37pLPYYWpu2mG3JDbBRYEDgF55cUnqFdF7W3ypzxZMGYBnCamRqNFdmPbSikbHhqgAJxfpm12opiaXQe9FxcDGfr",
  "key8": "4TvVFLBJp1k5HcBQw5Fy61PpTdBx3N5xe48s7ZJfGBZCGiDWMLdcVGuJmChb22wZxZVJskzZLVTrrXz1xQA8nfMd",
  "key9": "3Gsi5hDeDLPse8SwrXDbPpoK3K1dxRYiUwEBMAfBsiGAJV5uGprEci79K3VLKLHx4216vNDwh7qBE8dcpTK1GmAg",
  "key10": "3m3Fo6xSvhS8r62H3DKJDuKkC7FTVGZUgMaSDRba7SbRLkdAY2a786R1uDp11zaBQ5r29F4W75MksgTaT8QkVnVM",
  "key11": "3rCrWRagKjNtyFr6Wz8GziEWw6H2kuHN7oVXtfsyDTcekRvNpCHqiVbPjpAZD5KgRDP6ze59B5ruvWgZWWNg44BW",
  "key12": "2NuhnLSzKmwjiALhiCmqJE5kVUbMNjp9akyRRt6m6nHTuBok74xNNhwCkwHbC5wdLvuQ8ZmTkk73L9VZ9WKax4oK",
  "key13": "2r84iPLi7j2fxH4DWf2bDthVpwhQo2EbU7VwFU3R5MGUWiSdW3edzzA8gMv66P2EifgDzRDgBReTuX9fLdM6cT54",
  "key14": "4cB4xKStmt4AEGHbUZoaGs53hXnpqufBw6Gp4YEMYykeTVKfYXbqwnTugaefP8MLUS5hL6XH8MBT37W27E4ZbF7D",
  "key15": "44yMzcmcji34mwMD2erJMMQ2dfTUqv512zNBCaPAW2fTZR4zYHuG3EuM77AmPx1zz9rEvMynEVrX4wY3f2HZE3dc",
  "key16": "5cgrSWTyMbHpgSoYXDYjArMLKra9yPvnsue8daZf3FxGbAuEWmA5f2xKt92NnLTraseYdbdd8Q76up5k7kTDcwDC",
  "key17": "UDJsnxoeLWJRJexeyTKa43j3jLkum6HLUFXmoLhGurQeazEmj1gQP9qVqXj7E49ppBfHycidV7Lwkf6TeEaJ5bA",
  "key18": "4TfM6kcK3RbTJ9NoS1xdv5vEwCc3FmcGvz8edwiKvK5yyR5gv2mfS5sttHVKoJUgDavzAoz3j5XLUwif2qdu9ivY",
  "key19": "46tahBerhVu9geB44robQqQM3bWgEtrtELAqACEn2o1w2GDiq4nMSLvuYuvcvEx4jpoq9ZzGWZBi8E1yFvGs9Jz2",
  "key20": "5i8D8oLasgwjnBLinPgLfSapRsC6XAqSWCaU2SN8546hUvAegogf3HcbEQ6FZWjZRxwKe3ZnCD3WmgBCNwMvYhSe",
  "key21": "5W7AqGjQTrFjkiMPLCskZZaZJgQzy9f4JZeK28XcqU8AHG1Wxza8ch2jCVrFrffdoiXA4rfZ7cn6oGk4LL3RcV75",
  "key22": "66QvtpcViyLmGgzXcJUpFxbEkJGQ2AsHQm8cwCExgZHTZVWaC1JBD1sqac8tSNpBVEBqD2JW1xqZMcb3CEXQxtFe",
  "key23": "66Tx8LWu237t825vFMsMTcZYLa8jqiJM8NiajEzrgmAvWkrZwsw69EcbL2Gaqi3Svo9dzmrdzhMopiyom4p8sGag",
  "key24": "4XVnZ6yyHVSoQXPUNRNEM5jYyWN5StidFUH6VhBXcs7UcxeptRDYkUCjh1XmXzyqrP13LZs8B8wqEvQVKDWeVJHj",
  "key25": "5DvBBTfZvANjrP3NVZE8LHFkWt6BkWTeX2bCkrZTRXpaP2tYM9qe22i4YmLLpBQp1uqKGrUVGrHXxZ7X5ts9oNQm",
  "key26": "59Hg58jmvvpag9Yg6rBgLg1yp4p1DphXUfgcKFNaxAH5ehk6yk8FqSj7DdcrziNK2xN9gZ2SD9VJ6mL3g433hXHN",
  "key27": "5ivpuW3vkHA1Vr3rdAz89P9yfn37hpb663MAzXKy3vXUvbX1KfmkKr5M7RZLNQUYxMb846sTrV6o2xNGGjtJncy3",
  "key28": "5MZVoCZh5BzjApYM5ULcXELWnPJZLJBZAF3cGZMGkrxeMfJWASFBgibeD7zyxxgfiWauSALWqQxJds7GZTCMMTUd",
  "key29": "A1HTiAfHjm6kEogUUrehuKHnzGbuD7FaUg7LAejwbszWJB3f6cUsACe7sktjGBx9e7ycWC2HwMVkq4VKSNQu2cM"
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
