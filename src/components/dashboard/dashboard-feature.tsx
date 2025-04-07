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
    "51rBN65G74bYEvAPhvfQwLxvKUfzGWUv8c1GJYu7SHxQptFqpEZUGU8rraXC14CTCAsDyWjjSA3qonzcc2BgfQfV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CYhgioreRwcoW7Ho2uC1An1L9yyfhvhPTRFSMLWGvFoZnanX29niP9xrzKuc4CURadrBAiRwkbSiGWHMd5SU6ML",
  "key1": "g7Cc6XDxaxUTqJgdTnRWQQ5dgjSS5mGvzyqbm5VdVgbbxsEY1yBzsxucxezBgoieRBwyR4nGmG2QyTJLCBH3fZi",
  "key2": "4Jp7Vi3DfCf8NykVQYiWB3X9UHcDTC6dZm8AXyF6YvrdKqu4jRpgru5kw1WKDTrSLcYHmDP3wmMB6Tdo2ooNteKw",
  "key3": "5PzvHWwEvLRTx4EaXeU8TZ2RuUvo3Y1QAds9P7w7DmNQ1hgz7ozvFjBXAzm3zsMGxGpvQNxEkGD7BYp2tuzTc46w",
  "key4": "YByUB2AcosEiaUs9b3HPWwXUv9idpEPdUMBBx654xovAT9e9WNkyonpcGZAGsf2dFue5WR1jGuDH97Jv2nitGDp",
  "key5": "3qcEwMHQHgU7EGdAfqKaiK98wkjFEhBsQDpj6fuawuSbFP4xyQASdZjcfUay3n1pm5Ea44Qw14q6qq1PU6Xw4kC8",
  "key6": "416cbHd8oFQtmxkUEzs8LBJs5kerN8Z5vDYjoEaK2UsSZXSJzVcZyUeDA5kjdUC7drZrmfUEGUKDVM6tmDjzx65L",
  "key7": "5mTNtnPXNW7b18mhxpW7XLTeivnvcsHmnazrsqGFynpDeVkczDugxPtagghZHj4ngo6CKmsH8oBXNz8VdtDArYFi",
  "key8": "4BCYn6zXbW1EfhZsDoHkFc18XkaSqNEkzYQxY9JLGEppkZyhws2rSosq1bKVjxJCDJYb2zsRhfrPcres2NKBPyJ2",
  "key9": "4DbypwFQYLD1W3CSzBkSVpwyFdcc3uuK8Sun5qZE89d5N9Fv2Cg87K1nPC2JNcesMedAcv6ZrTdbVTWsa64wWF9W",
  "key10": "3tzDA9ScMAwtfxmXpvrpLbU6D1SZ1mj3RyEmEhbCvYvpH6HKetViaunYcXUdKk3govQxFc1sNru4S4y8uAru68n2",
  "key11": "4Bqe2tZPD2aAbRrfnbRAxCzkPLSNoktyR4Q6xdx38phDWvstZNV2vESdBXdTn4XfxuKPpMTtXocH1cMwcH9qrEkZ",
  "key12": "4ryrbvSNNyBXzXwQB7gDATKyzbuSJeje4zWzwfi9oVP9zNwk2fYCb3J3yJ8aTajJ2NTCCuQuLAkPv9nKKNFEUmUK",
  "key13": "2Jkpb6GA9TAAH7SBqdEsSybux1BaVcCSw8diGaxvodLSHHWA5ezjeRCeeZbMTGKB8kRBHYsXr6wNewGSyJTpJyeJ",
  "key14": "3AV2XQ3DHurqPYRTgxopARUVZxRoFzJH9rsVMV9cEf6AAMkHZLqx8xJibxypRrn6QM4urdn4gCNzXNkhGavQDyG4",
  "key15": "5sdehaQJTGJU9y9fhmrMQUeJupoVos9c7G8TeziuoAekhyk1waMLYqLDqC4McccBUm2h6qb6BB2RTvkcRbUADfhd",
  "key16": "4iXTrYVd8yNP8xosmE8TNSLwjtTHs3aXfsDJ3xXgGMjqETKeTKHSbd8nchU5LsHRRssYx9zad21Lep5qeyJNK4Lg",
  "key17": "3DLvZ1EBVJbLBL5qpDqij21DPNdnd566oLzChxYKX5s3ttcK17b1ycUVHuo8N81XE3SUK1nEPXbRQ6HRgdy8Zm6T",
  "key18": "2Phh87yNMMsfq5ra15RsxFjDMkA6R6CLgfh96GfaEUdG2QLpfcUVjJ7xDFGqDSH8NjcNMz441hvWqAGGgQEkikN6",
  "key19": "2D9hRbjnLpDBuYL9HNW5noKXC1SoTmJ1VJm1VMqDCBP3yktJzKdbR7tsREXmD3qVZZ1yivVDqmDxHUfUhzxHJDTK",
  "key20": "5fU1k2HR3P59xSe4nGE1JRaeA5TaedgpqRuAue5zkncYenUhK8Xg63jNzptcQLexEuc1bcs1qts73DrF9PXbAird",
  "key21": "4VcgaaAvK8Kn96FfUUUYtypXGMuUhJDedUna1tzzTYDL6c1m3isj2KUD9beHSnuoBenyXRuKgbRcndGUnjMbqWsG",
  "key22": "AYgzHsK2NCdgj1hT1GsshH8Vc51hyyXszMztgdtt6CmL7LQpvPza8k2XSePyEr3wjCeArxVYNfZ4SMDaZfZHGmZ",
  "key23": "kV6ZgCcyUKN9PT6vMapyUzvL4MFYDiVmTfXBNHyL39M6Cyn7kphWRzDmnF2XJrGrBWUC9dZ4HZ9oUDNSprCzMX2",
  "key24": "eLayXXDc6761crqH3hMCEZQShUpntfkejc9BQ64jW31U9RnnaRPmyuXomuheC6ZYzvDtFrNHjapUnidYVbR7m66",
  "key25": "5oVeAmRnF719KgKHuU2fMzNmeq8iE11CJSaFu6yKsAXa6cEQfYfHbPspnGhHNeSHaviAnRRbjJDZ2bBRPyoRPhdA",
  "key26": "5nW8WbzcqmLx1r7jMnH58yF32n3c3fKWdhVYxYFEkT9rkuxjMmYFAL8AdqYUJXyAS3Kxcjo8Gqw3VgU2uM1bmwy7",
  "key27": "3kx1HucweLqeTDs1jtYjDd6P8hzaPTt28awGEKkgRbu7CbrYRUEKazazJy3MuzbrQa2DfySJvAPU9xZHh71t8wSx",
  "key28": "4A6WGfwAmNcvfDu36rjSAuKppb5cNFraVr1ojDGHDr7kRAPZWYw54XzyQJsm6sRDaKUzsvqYh8Q4uwUeLdPtAhYN",
  "key29": "4DxLGSHhNTkeiqa9f7xA4yHXZK1VTjvrDxd5za93JrBzbshd1akrhzGt57jSrZ8F84zFe1fv62iV7xMKUWLXeYZ8",
  "key30": "5tzS9kqeJhGRrL8JY968zbMM1xq2ZTupYjrfFfSt78o12dDFsGsCgoJZdtVp9XNkEm8b7miifVg1ajAfsJZDzFLv",
  "key31": "3d4hVh1K39kCsNxzh6Pr7JaoXanBBz23FwP13R8a1QXUjYZg4TiT3TPdpMYjmuzwcRjGBpN2AiRiwex7pzg6LwTm",
  "key32": "4Fh95jA97NACSZr7CewrrWp8ESpn4Gr8YoUofSfaweDtD9PUadrKyJ3VvWq3hQGUQWmXmheem8yFGViYUv2dx2N3",
  "key33": "42GekUzMZaG9eiJyZ8rJhqGSfcGSH3TzeKKTYxLnpnZaXZNzM6QspTTYpFL7dfdLGJsLctfsr5nLeqT6H39QeVvU",
  "key34": "5dsYmrsuHtAiQywnZnMwLEotPSTzcsPe4c8RSHY8HkKrqAtMzBYbCtwqZ1cQFzgpmL7bLUhZDxuAg6RF2gjUbeFB",
  "key35": "41LkdKZaig3je3QJuApGXVjMifb3R7YhpnkgFgNbU4dXeLyNJySybEL9yaGzbkEBe9awrdHmk9zHaFCjGfib1V97",
  "key36": "3x69fP5qwjipCjEuWxJiYNa6YLPubZaaB5EivpmM5F7maKdwSihn3oqWQFNPKgDECAyRESksJ8Yztf2xUPeSzEB5",
  "key37": "UYjW9HnVgHZkdxy2GJcu8MdrN1THU2Efw6GNPVUWcvorpEPuPy1SKCbrJAY98HRtkfFH3LFc6XX2ATd9GrS5Qyx",
  "key38": "22Z4qvLAHdiFrPDzW6f4ybMwjMUMj9w4wbT8KKBeH6yQWBmLcJDd4hjYajvVB7bNU6jY5uLWSQ2vQLkeiCwZK5x9",
  "key39": "3cotwpVvTV8MTra9ecaE7hJPrVo5ZfaMEMAFj6n4wnDWNxZazGg4qz1bxeUEYwgqS7y86t2sRm1fefvqKDTe8HDG"
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
