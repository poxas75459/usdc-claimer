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
    "28zymZ1J3qVTyFC8NuajfPQuxxTqVaMXwLaEb3fJ6NqhrnS7hDj4SyMFVYsLBPwMDDCEDAkhcyhwWvZvhrupjtYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aJCLm1TWBmSCt6CQCdeuAnZWxxaNdUrqnN6N6aTFrqo6ij5bPSrFKA63kMzxAbjcz7E5PCWaTZToh5a9LfZGw2z",
  "key1": "NDQ7LtvdcQTpuf2fqAs2ZtCwGw249y8swnDLRBHwrQiXbhYoft57mvjnVGQiiojWB9uKyfSP1dHG4sMLmAysWvc",
  "key2": "2i6oW8ezjNnBBaFffV6zLirvo4rd61ubnzhek6dgRzsuE5L6KncLaoML2ogcTjrQ4bJ8W6yU1aqbqfY11W8qELLN",
  "key3": "5ytxractkjsgtF1KvKw8NsABmTAHT12ZwB3G1AZDiaqy64fMfW9AGpBjETBkdgb89eocP63i9eMzC1xRyUDRAc5u",
  "key4": "2S4Zi7nGXNsxsoiSMFZPQNqUt1QqjzTXNXnvnSfpAFacxd9YuaBqooCRweyBNPV2aXGSf4TcNbMZizcsvRjieufh",
  "key5": "2tWxfimHHdG4hSvePoCaWYcw7F7rDpxRNUnJnG4Rk5hNq7kojGvcXU9usc2PwuhBxcZAHPm3smx6vdy5raknRb6L",
  "key6": "5JYnZtJfdeuCNaNQhthcd8VvgS2MJrB9s68u1Xakb1Y4cvgdd1sSRMQ6wpDZBhCxMMuaKrJFr74S5DgeaRsrXwsi",
  "key7": "tu9F9Nr6Bx3xMi9iFTf4Ut6sRRxdybPEDHJnNSaTAZdgZXawfB1D8cMvtEcYcN36Rj79G66WdCqVR8xoJRkYfGe",
  "key8": "dBfMVx4yZJM392w9qEFzVhyRnu2EmkbUhVrosoEWnEdMEmw8YcSpH8wvxBfgcEb5Gd5oDtGaoj1KpXYK4DRgNHs",
  "key9": "3LbRBY1ToMcuP6kkZHWnFWzKYXKBcJvnHCjsTkGgJyA6oiP715r6BdYe5SkMtprVi3KXfshVm7xpDZvK5RhVUMyN",
  "key10": "qD8JH8KePKdJF2BNAS5K9NDyWnhBtK1LiZoZkbTfbgjGCHJYKeGrfGxH2LgYL3r3ioCFNbRrDzbVexaLpDruCJ6",
  "key11": "3AZt74RxYkNdedpc2MrBMUK1nyEibawUVHWSg1swCEQjLC4Yi4WMnh8k19gTVCwT49myUchPtepfcwbzfgiBFAPV",
  "key12": "5xdcskJ6Lf6Tue7dabqjjJEVKNhWL3A1s13t4UNe31mZVRPREBT9P8DJUiYifNSVft8eWvvieTnCdonxRm1gih1A",
  "key13": "3DbuavR2v4R6gqZN8s4VRynuQ1gefcMMCPAG4d8sEjAGKNZ7qkudwCqoLXL7sYkQsWWD6vCaNHzCwWbsMsdrf7N1",
  "key14": "5tAyj1Zv6jsynTzaWkvEibJh6GBPFNXaQ6CUdeRVaRuYefTY43qfVxhd6aH97iNr4HRRuKpn5AtCjUZxPd3mAnhz",
  "key15": "2RzspvgdWz23KE3Yd3U889DBbPdnDUaki988zEbDAgRP6jh6D8CXtaAL63yEYEQvSANLmTyHwEk5whj2K7Bh7Vcx",
  "key16": "3cDYKACJLnL7vRD3bFu9y42nec3yHYUTe3ZRvpeLKofBfBsGd4qY5ZSymeF2ADArVVpXgLhf6RDreKgZ1HqCAv6M",
  "key17": "62GidwKdteVd7TJo5eSLh4JfYDdy9jskHdaRNTLrHHK1gSULd4KicCq9Y8nR9mRhRfKo8RRsb5312uj4xPHSPqxG",
  "key18": "2Y1y7aHs2z4CzC53EQwuYDtmumxTHUq3LdbBJmqBsBXenEE4bb9fFWSCY48hL7TNdU9k2jrjNyWofDtGMK5zfCE4",
  "key19": "2QjQCohW5EtJALbFr8jK7p2CeFphbU5cZFe6DtyiD1MASEgJnVnSqsMbpQDtLVCSkRsvmvJbPaQknGdmAeaQAYxp",
  "key20": "5Y9FoH4W1FJo3sPWzbB7RmMtjVuYKv1u8C1RK4SPh5o3JtCaQJbeYq77bL8uSTzbZD3ekMSBz9NyWqNkonJt6yFF",
  "key21": "Ewo3YFAHrSsJjPnGb1kbV5GxkjaDbQngMDPkMtJD7a7MhvroqwfyAz1qzoAnuDkvktYp3E6C1x42DQRAoC1C2sn",
  "key22": "5jkksZEFujzZfXXVt63p9dGr8vNuABSKuGD9nVhGc9Pq8uQvDAtcQMDkweQyoqbbJy5FGyH1XMHrnJ6wkmvc64du",
  "key23": "4GsoWnBHHAACMcqcgxCo8gCaTvXLeuAgsRGCxFTmFH6eok8k3jAHtr8cPnUEZ8rgZusbeBzPHP9C5TzpWnoZAHF4",
  "key24": "efW4D6h7XL4gySv4Tc56sDVcdJ4v7ncrtubyR2Yw9FujGsJvqtWgsoWyAAiNDmFmMwThhWZkamEB65TrRcUzYtC",
  "key25": "4ViJTPq9vmpbWNSDsNUcpoJY6oLoB5ZPCPCA2f41gh5seAtzUD6no2ttbhedB49BTWRSe9XPu6X6ZtbYzqpLo8S3",
  "key26": "61yWe8ikYtFLrCBJChQ4c41BxmtiZ9Ni25qVqCFRG8JN1nXk1NjtsX3xoh6xh1TSZRSWvoyf2d1RK3q7HnP851ig",
  "key27": "4ZgnHPw36RCzmeCGoi12w3ga6Wj873UXviXuCcJhY7q6ojyUQ7WAnAP9CNh2E4MJcyEk2xZuhhw2uncCHvRdTjeg",
  "key28": "4w63auW9awTYVtTbfkXiDsUAJKoSDySfDWxkQA4eWtdgpyE8eP7LCohdpXzpm3r6q2WKXi4A1s3KjkxxNJMw5UHG",
  "key29": "2Nqmkvp9mhKi5s3sKAnXzVEr5xkQhtE1aQFxsVMHDZWwPq7Rf7pYDxQkQ8iYqbHoafdvN13MT6TsNLxRiCrQJ3Kz",
  "key30": "5UjcwqLDBWNXDp2Fbw6XniRJQmFsGuwHpgENgVwWAXTFCbLpJARZ3EXyx6TvdDPGeaV23xGU1T24Pz2qytTBP8Ba",
  "key31": "3jjBbCaYmaQ89ertZUAyxFhdjaiTgWBJPuBygzL4ur8gwuxjeTBag9mBfg7dL2Vo7tx2gsywai9Fb2pg4E26QJSX",
  "key32": "4rm5unAbhYZG5XFFdbKmDd13BDUjx6js172m88P666YGLr2wKHx6mhoQSMX1TegxfqUKVeMWzGnr474oRv3REE8X"
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
