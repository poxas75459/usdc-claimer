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
    "3h8pEfcppGWwxynA9tWuuWRvtRMgpr7UdUxU1GSSQfAH2vyAz3VCyBshUvXWEvvk7prENtjGb35gNBADf79jfN9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Dfo9pEaaxzi4Wh9XoJ5RnNbGcJHa73mrFu1axGkhyRNRUdYZxcY4rQ8XE9XowEEsU3C4wJHyQjXXiPEAEga7os",
  "key1": "3em2EGYMgiEdAwMMRBQV2RcefU6tKBDcwbHYQF6jrMUhVpwcrimqmseta7TmhUZ7RsqSrjqpkTHHn5BeKy7smrot",
  "key2": "2dSUuoYwdCmpKAsAu2hyxr2hA7LkwvitjD34oAxiFNaJAPZdifZvRdtYEXPK3EMnFGbN9ZZsrSMighoDCXKeHgYB",
  "key3": "9Bp9PTbHov6T8iMAKuHMCESkML9s2toqghReUYuv9hrUcJia6Qs6wJWt5YJbYEvv113eoJWTLnKs2bqo4Lvd4VJ",
  "key4": "5zfXszGRTCu8VTYoq2CxpVUyCrG6HHPQxeCZpbXbe9tN695MJKKu5ziCet55LLzz3jSfaQHX9aySzoXyJ7kPTcDt",
  "key5": "4Gdkn6ZsbTYmf4rdJXQQGFNszV7TxBCGF7EZCP7R1PFGgpSuScTbuTQEmywWYLMfLYvNAqysPVzsgWoHtEa89cs9",
  "key6": "4gSKFpTG7BErtyYSh8zjXeab1Az15iqGWFmndpaRrhQMF4RMtGN89xRtuUJxhPS38xeGHTq61WZtS5EntjdGqW2H",
  "key7": "52uai8tfTmWzKSsnqmbiPAMPXopq8mxFUKSS4mwSGJZ9RkLFW7A6Qj3ZDZPQba9UQNKXmCuMg6qKNvSvE5rC5uDT",
  "key8": "4pBjL7RAoPYQej5G7sKJ5B3o9BukqvbwHghv1bVXQJn9JrYSFV7h8enFXtRH7ycPSD9HhRnZ57vK9diM1svJrkEC",
  "key9": "4pQhThd32qrs4zTiuSivMiAbWNqvLq2mV39MGk7uBp1RNxUZV2KTxLq983xokSYh13ML2GtarF2Xij1L3ZcSsUKG",
  "key10": "5hj2y2aeYMHZya4CmYaUt9FVaNqU2GLZCmu6Hz1q6bPrrFWgmVe3kf99WriHwbg5JSo2KiRaETbD9R8TPH27Dekm",
  "key11": "3GxEvgDvHpk1VXTJcZ7BFhyw9AvsBaMfvz88w5WAemd43mbB4wVYkJvFCHLzpMcPHBBH144WCXr3BvFf8sTRQ9sx",
  "key12": "5D7he7ALamDwxdA4NZydiA1VhaV1UGBm9XuWJcwVemgzx6wRcLPHf9dLCCWQxChJFdxQDRhEAwGdo5HZRAGzGcyp",
  "key13": "48gxCnkKvGjrvTNqBDcmfoyiHBpaeTX3tpGuN3JNh4qCrjWU1sujkfXfuhstdGHZGSVXLfS3VWmJJYKk3JjRowHL",
  "key14": "38Fy5sYz1cPtopccAbJA2TJuEnbGJ84xKzwfw4WhVhjPeS5MvhqcsKTRdmNxU4UPratsqJgeN1ZpNy38Azw5oCwr",
  "key15": "26oCdEPzJaEMddFUcCmHLFKjpAhEHxtPZ2ePE4HAvRFrpdXLLC2iCTxZn4EtABTV4oDCnUS1UHVobZtiMqu3Xxyk",
  "key16": "WxW2YnWPvANPKje2MqAMXEwzPUDhx5GCUQc4ezGpAKiSV852hVAz25C4yttp4Af8m3AoBvLeKCdwura1g2fdRJ4",
  "key17": "4JStzP59TAz1SoxxVdaSVBb26LMWqm93KSW7YSB5zmXSXrwWQeVDYtgTKR1VwrvAkmERyvFze3ZmUXohEYoxeBBT",
  "key18": "3FeUsF1j1qLnhfemjGRHQC4csHNyimepG4kfY1CGTJd47Jz2WRR29puHP73kE1Ekz74M38RMUUiFWk4HvEyGPLxn",
  "key19": "3EGAXnoz532iQqQDeyo6mPFH3tVsXQKWFxePKGcCRU5VrxFtdfktX6rBwZUvjR6wWcva3VwtANX6A5YXCCrgtUCx",
  "key20": "3jPoY5zM5QwWb7FTUKVLfKLY9UrnLxyNtJ2NibYP5iCKFpzf6zqTeqxZAQskWKWH8wk47zCbEkTcXL1GwYWN6buK",
  "key21": "2rTBfYdHDqmb9wJYukgQxaw6PzRWwdRhR5ZJ2SYuRok12UQj8fJURYSiZnDAUhP1PaiJFB3aGUrcYR6fjHLyrSz",
  "key22": "3wphU2sXhRiZEnUdVCC2LMhycTE2SqKihVBRUS16TTtgNKKdKbusuMoxDH37GQbaWUA7voxsngewodmLtAdhrgKk",
  "key23": "4NwWyE5Uog1KwZzqxL6b7Ui8tSRdjSM1S3CvaNZmatmn3pzYtiYjN8BgMfsKzQMjqcqKhMQbkRsfhq9eRH9axRK",
  "key24": "52rmy8S1GBhfbt7hP8KoNrHDAkHPVBCtRGH3d53d4D7VhBiAGj9XhPM21kDr9Yhgkcxr2YQ5UumY8jAPtDssUPCx",
  "key25": "41vLAbWxXrrZ9yKwUcgtiqXcEGdeK2khHMJtm5c9ZWLcegzSE5ByxWH3dPto99XucaJk8HwX2Wiwrf6szrMdaCnr",
  "key26": "5u6bMbMJzoq9Shriq8HuXpDwDSgajGfbjAjkNte5VUowTc4Hfd9ivqkEEi32fecFEseFDy3CBPBYNNVU9m7XW4Ai",
  "key27": "2dcmR78Yy6pW6m3oL7tQy4aGbDoE8PyRfHCKtRpdbTKn5nwxzVAC7PkGN3GAkD2fS2dwek5E3buLUrh7hEQZLJEr",
  "key28": "FSDjmyoRZJXAZ2FVcM3nTbpRiY143PYNUQZfFjDxsDC3ybap1KhnMMrpJRqDNzSPjq9Tix9Q5h6h38jz7qUHGAg",
  "key29": "cJWaMbmWYtmmMgnd5LW1c31QpYFGgwQgShCHZtCz7mKt5KSV7cz9FuUGVyTR5fi8eaPDwck9PSFzrFYKcK8ikm7",
  "key30": "5kgaiNFrkmuJRngksfTCNfkiXxuMrxAGqGd3PoDFZ3d48dJNira8P4HR8XRffj1UmZVczN1B9PxHdpNrzrMWxHN",
  "key31": "42LGbK1R6vpgMs44tzvrRJZkAhBS2wuZyNA79GQA8zVuyZ7PuoND22VNToMcpCFKvexr4Y2BPTTXpr6WaWt35h6a",
  "key32": "5rJ2dN2PhiX6tV5Eo8k6fzAnJG9USuNrKRAAqKL1JL8aKK7KAKviq4YpRsQVf1BcsWP5rdyjtb9PaU9tPWCpbivb",
  "key33": "3xqUx9emJfscTyh1dhgiXZpBEVEb5a4dvnHhCFnZk8NewN9hCTMPyLmSgWWAdMmsYqdJUW2AeBaJ54jBu8mFgShY",
  "key34": "Se5QWxSkqSDcp1FS4PRCHh8rY8yJEXiwhmZUQoaHCweB3zhp9hv8Q6gaLbScAebRUzKQaKBZy2xZjtxrp4S9J64",
  "key35": "58wVK685ZXiqeJJd9eostRqZms6vnNkCXZHWvt2ebZUH6pAnGmsPToSHy4dNV5QHyEdaMiMSufyJm8bWpZQuaQpy",
  "key36": "5AE3UU7sdp9RUee2CaXkbjxVJARwaCCvrMfMvTYmeuoESyYJVhJ8BDXYRiBy5wqJmsgJynMNaT7uuM6KcZofyXQn",
  "key37": "5UZdZAKhd1eXYaMGtha9Z44Je4mitRwr57K6V8RyoDbkuqAe8AoNqQtEp9HbUZS4zKax4DEatR7WuokupP2F6296",
  "key38": "5XHZEWb2jaexrRAPerhnUXT6CHjnFioKEbfVuG8fKd6MYCx5n8eWQw2XCLpYYKPgLFgYfuP7wfd6EYepFazUjSbU",
  "key39": "2j6yARuUCPU7Ytr9qKi81q3JmjjJ3XSHopZ2CxSBdCG84qohJwoJRp7JSLGpnsRQokuhQREZypzCQeNMCZp5j9oE",
  "key40": "3Cakcx4sPqUHC3HPGneSwNFEtppU5e2TTJj1HVdNSkKoQptg42Xh5RHiLHPpQqwVWyVsBjUaD64TcYThk5r63vo",
  "key41": "vmtAsJtY9DbrCesykopvuyjNtgKcxKx56XYhTm3TQprcbiF1wK1EVRJi3Gwk7Lo9UsmPxgiD5r7yqbwa6Yvon5g",
  "key42": "zq2hyuZpNJGEn9YzSeyyuJaBJtdwzfEHXxZYmrqw4eUnnZ74ETZ2xSz7vX6GYGGahbqBfUidjkX4bLt7jgp6Fpn",
  "key43": "3yk6xEWjbL96Rtaopujm6UpafAyawyquePc8RAF1NeXvA5PdVWbVX7a6pSfiuACTqXdpxTKr6cYutQubNiPa41VW"
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
