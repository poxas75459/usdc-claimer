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
    "5E9ARosrNBsvZijTX5Pf1YHxFZQhfnU2wTc7T19tbNWb62bQTiSYriiBz79M4jGYkWrbJK6MtDCRHtcbrXr3DjET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ouY9mUYsYgsEChKHeYtWWwi55N3YaTVuMLbQBk8qfppsQj7RSiERti4Pcpw71Cz1XsSVL5uFhS8E5HNYq23HSrj",
  "key1": "35HCu6Pgj824HgtYKAKbyAqrBsmV6ghtvjVDnFLWf48Gwe8RtwQMCMRisN59d1PesLr7pxSEb7JexLWBqL1ATc1v",
  "key2": "2gczSnEmdtHkdFu4UPUNJY2yR12G5PtKepW95kqpXmjiXhoxRKK7dFtyTKXGbb8MDqYT14BahsR1ZmHB1obBr7oB",
  "key3": "2PauMQBvX1Ra91X1qnvXPdzyviqGPoTkvdQ97utQRsdF7eauiASDXKrLu53RS7LFYNNMrRANYzx82pbKxXrXxM9e",
  "key4": "2BPfkBVUhYqQNKeqZfMQSswebcz87c7ca7JqbkpU4MUx815JwvFYXJ6KTUM7it1ewr6zoLbufdZzHDimE3Q2EsPc",
  "key5": "3LhDp8wDpGEftvktA2bvhXwzeDw1tESw3UbCxvpZYCFQhiG8ht7SWr2wWerBQg1UXVdTrKQSpBUJpziHaACpeK78",
  "key6": "4r1TduUpZKaq8yHbXGJXuEU3dDhWVHjkv8ySazxoi3rgMpWN5SETqbBNvxxHXszUwX8x6t4EUNUJouBQDvcjRHHT",
  "key7": "5dpY8w7F28fnJjfxcKYVLKvg4A5yBuGTywwSADvBbzBccCKN48JhWudxYnWQMR6joq2JAKqgjVFCdg1S3E4dSxY3",
  "key8": "YPjQGuruN7M29kbj4SChvfXG4nTUpHrEVUBwrRdvxpZPocQ957tWjEZ5rsKdTm8E6tFiEM5RyrC6EzZtfhREkE3",
  "key9": "4e9CVYz2tS5Z7koWHaaTmQLJ8YYcZUeqzaZgDMPnKxAfJZzfXc3oY7M5FKtwikRxatZuTNHQfSV6QrJrUtckzHLy",
  "key10": "3uazCjizko96kmvFsiGaqYgoMLXwxz9Ldc6NHBbWEMVEpAfKHM8a4S4vJis8tUB7sc3XtkDj4xGdL3t3ra6VwN2w",
  "key11": "4MeU5npbgu29fqWbQhtEoXKKbBRfk31zeSM4QMtxSXrRRTyxveZwaiAzKX2XjTpW6DJziUUYBN88nGjQJz9r1j2H",
  "key12": "4Nfnpc8Dyx8hnqAQ1FfbeDEfcUMbGMR8tdwEaUo6X2iJZrB1nXtQRK1yoVKs6joXm5rQ5gRcPmAMXwRf5UCUcu6o",
  "key13": "5yD6WWbahqyiUvf17C9FXcTJTQVowigrTw6ZFUwWLXewKervGeUzBGoL4C6ha4vDsKLBNm1CcRpVHpjKEX9R68QH",
  "key14": "2QmeBturaT3KqqGy1jwaQYr2fDoSrDnf6qxewAqwfTrM6RZbbrFXRoBuoHddDND8Q6B9sJqTvNhz9NNfnTyH5WQq",
  "key15": "2SGukRMX1teqvPwaHz155KoiCwtXVaKNw3q6wrRRqvrE4LMjKSfvQyt7Ccva39swbyosAo25y1QB3Gf7QcHYKXUQ",
  "key16": "3ZcQCvexz5pvFXnwn1ShdVjcYZrbJgiJ5caahnqBWCYa6qazUZba7DWgM6rvZbD1Dy6nhN6Ca9tHfQLM7z8siJcf",
  "key17": "4vX1Amp21ETnvmeopzVeYyVNWtcCmoop5kMgw3sxK5gKRKmViDhfW6BcsrGmYFdcuSzgzXPqwhqeLTcZDL5yY25c",
  "key18": "4vvj6ca7cBfk8VTvYaxWPqbjqdRwSXahkaKpuXkZJF1AciAiPqrJZMprXrbL3Z95wxgZghXD1VbSiKsVZK9PBwhq",
  "key19": "5z2hA75DyLuHdxuGUZWJ5oHhDBEJrDSNj53QeTMVXrKCg6itC3gp8rNaNwzftmVrbEjRgdRxnNe9dP9dQAEU7Mir",
  "key20": "GaSjprHjFKhiQsdWDPqGdD4G3t91qEm6PmFeLqbeMzZtFeadAVcxV9Cdfi2Ngyfvzt9gwzKc71LPBA1qXqjvCSu",
  "key21": "5cVvifeejBm3TbRpHP9APL2NR1K1CpD2C86DosepfL5eeeqXA1HUCzgoHtSNuXm6YGD53qfNLVfmNdYvxkktEd8j",
  "key22": "2Lkdwd97gZHgSr9PHNMmpKYi6T8JFWCVwjgRSpNeHBSskBxWAnBs56q1Km3zy2wo5PCNCGVtw2PpSMM8kwxPXme5",
  "key23": "3Ca8w96s4r6FaTYZ5xhd3pF7JbXXB5jZBbV7mAXF9rkqtu23idUZ5RqDfd89vNtEPqSdctxLPCBs4kEgFW72cQAi",
  "key24": "5F73DTXCLWvsyNA3u3S3wowMxwgJFnK12CFKetSAhknp8zB9uGedSgFworTueQrHDyNfEywey6uBiLS5VaNKCouc",
  "key25": "3xmM5zu2ncKr4cD4CVPWxAWc7CnWppJkyUWnomtnJCxeuKSbZBpbZKRWbnvn21DW8JEdH8XGe41EAXBpLYJYwurj",
  "key26": "3DVVZKX61d7o4ct8gvuWxne4aToZkRuuMHjRi2jqH3dnoSiZue7bv4QZVRZhoCD5tsf42eDZtNj65hR1fYNEPPhc",
  "key27": "4oRTYdUUcEpWhqHbj8mdUF8A7GbQE3awirXxwwJU6NXQtY3AzQUoGFrCRsxHzyxkA6gVMD3aRiZo5qsXFUiLW3xe",
  "key28": "3ZSJQxgQxsCAKEPu8bhAMQyVYs2o2GTFP7m5ox69xD14f8ZM1d7BzSgTj4ux3iLMkkxT6Ya6JJoG6Dpm8MVhJds8",
  "key29": "2iqE1keCXbvZdWTHrZSjdqjHtyhheaLVHkrshvnAnptSSPafr6zd3z4SYebkKWijbDJBVfZb8ooSe2qb4ydphdXy",
  "key30": "46XTdM6u3juK4RM4e93AEvftFa3BQHUJUno7ZPr8pzeHQb7UFtHwQhQdMfzMZCp5dPWPxRiHKjWGAQQjxuv3en3L",
  "key31": "2tApc8pGZSBc2ysiUTqg7mgkXBJfqKRN1UBFFUg2ChxXMvV98NG6XQm9scGu3Avwi7XcH1mgfhNndWTV6EkgNrZ4",
  "key32": "4pykFKCr351xXEsGf7MrzKWmZuD5LfoGALZ1uNN2VjfgVQaFYdPwsbXBDoYCFYmk4zxfW7K3hugYYXBdDtVTLjMK",
  "key33": "33yes9Nscni5LEvALf9qG8mNk9Y3eLFSRcYkbLapyCwYDCPHZiRjNsLnTR4NqjUNv2hVqBhg9TfFaQPgVdtGmP9M",
  "key34": "3M9S6yL9XscMYYbNngYWCUiPnZYUf6jYENrjMD1W4pFEGPvdJ3Gb1aRSbrDuobWHTgwT8sg4Zk6ovVzqptyXcmWf",
  "key35": "3xzGh8zcvEwb4ionzo93DPX3WqZNsNMgzektyfkdBS7uwc1cgsmrJNPsenh5Rjk33ZxXv78Mte9cqWd4DD7VAu93",
  "key36": "23YFfwoiefudMrpB9Lrto3Kk5y3mpg7zdkr1CgWhmXMo7unW54tcyJ8uDH3Ljkda1Zk1hPF2vYDodUY8eeCE9FCB",
  "key37": "5t1zEWPwjugh1DyoiCcpSk8djziov2Ww1SKmUqUiTQAeN7pJubA7wnTzfo2ucwCnG2osC4x9bSqmGGYN5vN2fL2",
  "key38": "2hatn5G8VBHSkqpVT4ehLnfMwWn9bYBNrdot4Pruo4g7H4fydp4neRte3yKF8VKSg9ZYrcsBitNkKNMDPLjnMPKE",
  "key39": "3KWAKck8b4kP8eFZ1aqHMxGmKcvkMQmp3QwtCkKYy4RLkk4KJUp3ZzBoiat6Jt1jfWasTrCsmS6nE5w6XeB5uXHx",
  "key40": "4v6NMydxxfbBLY5Jv7hu3WLvNtvdBDYzeQKXof3GZdwRwCJVma6wgxbKbiU9PsoXyzLDccEjsZ9XGgJKPQEenUqk"
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
