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
    "4ru8vHLQaTefePkkRbZA6C1arRgRZ5kbGJvHE7z8aevcN5YC5BofQ7MX3X8AnCAbccaNHhVMBiMA8QkiazeZxGfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KK6dtW8zujCtVvWwtdMW9yUporJzU3CdgG1c8LpUzonhHaaTaEJtyA77NqG3b91J5HSY7fi1g8b2AW1HytSqxyH",
  "key1": "2mVijaBgKw5YmNmu6sU1Ghjky6hUnV1Vwe5Ei6uKCkKc75siWnZ4nmUxYSXvTN6btnavjPtoaoSp489hv4RTbQs2",
  "key2": "4Ea8CAf7bdhBPbSkmykiv3AQEAVUqeGPysZDPYjZ4E5kSujhL8JodGTTJDzAJ3oEmeEsvtiKjCChg4HNUCYrd4ju",
  "key3": "2fUPVZ5GGUbNq4gNDvEDhyup9n7JNfJzzWkPNFEmegNutczqSzEfWU3u2xq9phjwd5fLkKgKYZutdCrHPA3K3U59",
  "key4": "2as3Yub8sbr7Vb69chZZvwMgZQcnjDxij5oqauHYLhegjqfHYRPHBGyJChwgFdiC2Nb8ofv9KJhP8RizJMmDPZqF",
  "key5": "eqpnf2RaHifchGfKk749r5LBrKYsA3yyoT9C6GC79ax347Vni1BPDmYrVcmyk7bundDb9xEorVG65DtuS5aLLbH",
  "key6": "ZG1qmbKCVoy1fdDrAQ5eCK8vQ1CwvxxvVgYVazzcb6aveRBEGzH5yAD4AA5UGbFPQ7PSwJK3JPAsShACsEgsiL8",
  "key7": "2wrg8j3JQ95tjs2VMxWhxLhAQF8NxLbgu8wty8FQCoN9m7BToPxiJBu3kLNLnbc4gXvrzv9E8GwKNtUqSPKnB75t",
  "key8": "QMaoTKoCdJfqqG5yYf6FXcrx8cGbh2hBz9sZfJ7uMqkhiVSQrTA2qgGjJwwKR6Tn5aZBaaNULxF3nd8he6VH84V",
  "key9": "5fVDABsvLndDSRhhs6guHo3Q8PnnBHz21jaSXhyj1vWZoDuZDKxA6SukZBeJtcrx9jbr1h9mdFyPNVQ2WAFjSDqZ",
  "key10": "3ZStsyCjEx5VCrEvBZpEouuMPivpLPuYLyqDWWXkTXFPP6GkFMsbRD44q4qgyfHjEu2fxpowVaboX9m3VatfGPyC",
  "key11": "46s2ChZtye5LqiNyKgbXTuMA4HnTRQ3zWRVHSkpTcpym4BEvvj8xKmw82ytfsRnSZ8c8gUNazJkGsvc173A9Fgb9",
  "key12": "4ej5MQPEFxPWss2FueT84MKuTjkGfEH75M6rCrXF9n8LSG9CFVeG5TdRxf7bnAYpj7gn6nKtwyzxhBcmGY1RB1fc",
  "key13": "5spcuPYQy6Z9iTGTZ2FjEMfJbnpr2DqvmfDydJnfy7gKU1jgCLkYwVA6HwXQ6mMfxRYLwui6Szvdsv5D7p6LpLPS",
  "key14": "3q4z9ySyYw1CNRaQrNmjaFq355BSRyLBtowWgFKFB5zDSKiCApGhWhYjfRBD9jYdLn2tfeKR2Nep9piUcmMqcBQL",
  "key15": "2FbjfFA9hN9ju3PNmbZugGTyB6UudsxFnTmKsKrcNuz8EnzZTxkDw3FwgpmQFGLjkw9KAzbEDF8WLnHwALHHT9iV",
  "key16": "4x1wfJj2AzvkwPNF79Af88DqrFYyLZwmQbvB2B5GbjqYnn7SgGxfQHkdro1ncpPh8uQh22hntXdRkbBbX3kG25vM",
  "key17": "3qxoYPktRfNEvcoFLNZj51isBSu2hk6bcjbbcRapnq4F1QiahdrYBxoW6KWtMbbJN91NJ4b54FsgjGXY7KerAnqa",
  "key18": "EujK8FrRNUX4vh5mpEpzGMZTYMLvWS7o1fqWtVmCj9GqJD8WHWKmf9dzabaCwzLhAWjfh4iY4ieXDGcN2F9vwiB",
  "key19": "33dcHaLmNzQwGzP4ao6xLJn3TQMezoPcP2EHG85CPTixzZAWtzqTrVx6GYiZeBYPspYm5a1SxLGotb3bfGpUXoNB",
  "key20": "47tbWRhj3i9B5yMEjbc21gLqBzQhJSDTrqcgw4tTQ6pkVyzaUV8Rnvx7y8nST6teoRZYK2ekY8b5joM8gaaMkNMj",
  "key21": "2JJuHAh7Da8D2q8pdqPo5SmUuAV74re36Th8pCkS51C94AyqHQGvLwAms6VMJuVVcUgJAmFfFycgXjxB54NuF26f",
  "key22": "2XUubb6VymETT74qT36CJQz9YtVSbVZXmee3xmNEqp6patSQj4L3ffBR6fL1AkTsqBAJayxLH3KVTtPyZUyn741H",
  "key23": "4w4cijHQEwoozLmwKT6pLnoZQAxMsCTfA45hK14iU7bu7YmGDWFaJXrFbQNmEhovBUF4uVHLBuxFDsq1osdMKcE9",
  "key24": "4Gih2n7MQCpQGWdGPw2U4Fqm6He2qZh1UVvzcaWDfugZasYkoXYdZc25TAumwZpprSbRGwPoRJPt5PstKyrezAAJ",
  "key25": "5pTfvSHWsa2aN8CnSXawoVPUCxJ9fFUrxYsH1cpM1ekYVXmWPGyvY29MC4FjUrAyGW9DPLTQVMvKtK1XBdnN1quo",
  "key26": "SWLcXNLTdYM91ZsuYZ3yM5uTNyC4ZnTCb1L9wX4nNgcao1vnJRgce2NHeYjfxpZKCKYyLc7Dfm6wtnE543neUfY",
  "key27": "2HyJigJ1STSTjRDfE76GjdDK9E3My9x3T2zfbjhLJ9iYJ5mDcTqH6XA5ZreDLX95XeT7ebT5FJ29EQFj4RdjLRRK",
  "key28": "3fgP9iTqq5BPnYEjbuDFPahANJGp65ZnqwVjjXH4y59uyX6TMmVKxwWNzB1LMDYz2wTMBf85cMuTSBzKkmwdFqaC",
  "key29": "3PpanQLyZWta7foX9j4ADF7JP6KGtBSTCVhxCq182QUHeoQxMVTzLh6DyTHvfHqNeL6FW9dnTcmHFQfVWCLcB5nm",
  "key30": "5XcYJcQti4PUQRqF1cGHtr5u4c9Ln16oMyDCrbUo5TzA4s6m9vnQTrgmka77MSwCQNQUESMtcjH1oZye8kc626sD",
  "key31": "61q4u53vSfEYm8v3Job8w6Jda5rSEcQ6Uk3zGjjNVht9nmyZxFVtYiKwPu6y11oKAnEcPk2uY2FiWPdyMzrhosyH",
  "key32": "2EtbtJD2sj9rVVz1wraYduMJeANi7DvruxCdnk6fsZpjgbkBr1veaBZVib3Dtj6Uc4XKRt7Huf8HWH4gmpQa7G8X",
  "key33": "3YVgqVGz6xxRbMmfXRkNv3kLSXJZT2iEBuRddeJeM2ME9FZo5EeEdofJcwEXaBMy6Dr9kUi8aEmk1xJc4Lii5juM",
  "key34": "4cKEpfH27oUL4zSLfQFHF26F4G3TpYnxmkzkGYasXmD6NiXqNYpRv1dDJR2mrYB5v5AkBfqr8bQeWhyh3AFNwa3a",
  "key35": "3JogW2bPficAwYrLiLj5hswnwBXx8Gi1Vx1hic45bhdCtXsmVY1R2UWyxhFuQnXCztWGkjUB4yq6NJdXjVeuuCCT",
  "key36": "3J8zuCRx8ce4eAsuyqFm8dunL327uv6vHTJ3jSvEG1rXotyfdeDrBFaAzPx23saTVXmyQF2qjbDyJi5pv5EZPkY5",
  "key37": "5Aut8k9qB76mbdKWKRiiFttPaM6xxiiZU9npujerH7D8sLkVq52K8ATWhn64v7jUacqtiyFTVvu2w3bS5Vs3ia9k",
  "key38": "4ZJGpb9cLRYnsypEFN2bt5VPXduU7PLkRx3Xf1f7pZXGcoFKT4LdQgKFHYmXwXAck9QKXHQWAru2AvGXGLajdSyT",
  "key39": "2n1jYp9LVK6Votqj8hgfMPGM5zsuEe15p7gEqqmaQZQf5RTk5WmfFHyezCrzCebMCV4qdHinYasG8XKXJ62BZRoC",
  "key40": "FoWgb8u1BhS7P5okypCA84KQjeKogDmidsDEWKVYVMXE7pdGMS2aiWjHFnG4wnSKPgoxZM5Rk5KzQ6Rc3JLfdtW",
  "key41": "4yYKxqu5DrDkWLA9F3SnYnmgafFyqHS37Lwk6mhukPja5P5EkczHhcDnSPcPmsFPQr66UPCivkeoPiqNBv4fqAjs",
  "key42": "2swPnWd68Q49UfPzqpAF2RK6LaBirpxfqSoaQdYkzRfAYmwAwqthCMfF25pvUeMYyKFdGDc7rJUYAHvGWjGnSkme",
  "key43": "5F1ftQBCpnUGSSvNwtwuRCHW3GHCUvcNMgB9AvfApVoGcxJ4ZM54fJDk4bVuRBiUQgV9J8HmdHs97wA1ZQVd8iBS",
  "key44": "5of9yW6BqpvJrAAhU6wtmsmekXijxEth3nmUKkWz5Naf5thPBxE1qaMyRNsnPwbYTbZqeJ4bZi3tYiirCQrM2gG8"
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
