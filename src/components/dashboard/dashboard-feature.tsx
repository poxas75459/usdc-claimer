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
    "3cGceB49e2iKVYBTef38GftMR6j3pHyi9iN6TWDRTBp2Yfc6YMpDTfdoP8MKnrqtkGQN2Bx1LVRqSwJjtXPmWRNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KWsNRPGwdSVtZ2s5xPocktYmEaJVkKzbdroMmde4CDxdV2THP7URU1qfAyS2na66cisXekb894wthb1F65PYXoF",
  "key1": "5tdnRirUFcdaKLD9A6YuW29xT32Saf3HaoQhsBrr3PNdbKw6NESXh7wa9U56Ck3n3zM8cRv2ZSHg8TaT3VKbA1X7",
  "key2": "PnHMpPA1Va9W4idBsKsHKxxBf3iBFHEkyrxvoBr3SkUCgsJG2dEdYzNaEMwY6Z1E98fR2aXarUnMYXGcKvtbueQ",
  "key3": "5w7qWhECs5eLqx6BSTWsKXMseZvzqP3JqiNXZCjuAgibXrxvchrKzxddyVRxi5uKR7HpkyPij3qDC14aoxyY8vkj",
  "key4": "61JQPc4Zx153LbgDR6FpE6K84uKLMQJjQToxuL5KdccbaZB4e4sSWDBk1UBTwAjnyx4BBTz5sY6odTnua2VaGpbE",
  "key5": "36u49zUXJKYsmM6Gkh6DSE46d94VReK86ccrm6cBjhgSk4nbVhH4vxUHi2SQExPCezhGUsVPkY5obahukm5Y6Dsp",
  "key6": "54yxrEqBoEHeAxjmtpbegeuYh327EFG7hUHaTNbBfnG2xocHoniT1uWNXagjk54NSkwPzeizGsEXphnp2NoN4BqH",
  "key7": "mULULMvHttiNRmV3jqXwFGpH1ezKovhksmRahjzS5Neq6atNGk9yb86E4QN2hrvxvt74a6Qcy8n8MuPSdPzAMBE",
  "key8": "5Gornjb9Wanj2UTMW7H8hqxzwCRsrgbcKM4etkmTbd8MR5tmuRFpmRV6PnqMXwgN5Z8rMGkjEReiTfosC2aGenjm",
  "key9": "3DXfs8VDMjS5RMnH5yucaXqhvnYkwj1hB8VP9vwZYG5wgDfsULzaxzsAJT79qDrkN1ddaMcRGYFipz9eyV8c2Xwx",
  "key10": "4ZbREYPZqn2yNiMX9kEryo2KRUS7mn2XAHxKEBcV9yRn4K8gwCcf7hyrkC4E9atCxURwg8BqeEjgny9exkwbgsqj",
  "key11": "2xPs2ntydSQv6mgS9yBqBGVdfzem1FEsEbwgsPcxzqpDMDXPBJbcX7dZUwamSsA3VZ68hiCD9N4ck9SGjMFoj6cT",
  "key12": "6fdLEreF1gyHqUxdMnNcLPA8wT1FwbCHnRDqYP762SBLA7JERVPuPQkCwdUnVwuE3hK9pbCr3XHbgAirLry7DcT",
  "key13": "4us84KHE43zzf3BHCJEe45KfutgRdzar1xyzyxQPv7MdnohB4rFLmfCfHdurhRdczP5p9Qy8UQq7q9zQC6jmBmDj",
  "key14": "3sF4ZiUMfwvPPrQMStW5KJUFwVDy26X8tSPhUekmnrpFQCG9yniaVL5A23H98ZDcMj4gB7jNwA4W873wet6LVR6H",
  "key15": "3tnxTQsEqf9SkNGicXB9qkb7QoiedRPo623sMikjkv5uQSkKqzwUqqnrnLkWxDbiniSRsDA5pYNnejpKESwtpfns",
  "key16": "4cnDfdCyNpAKFTXr5HhYr8qS6uarVbbEbTcJ2nz4jHWc4qsGyoaxahrKz8cjHLkUspV5mkSvKRuf8fvh4bKpEErw",
  "key17": "gSp7u4N1cJFPFJjxqdRUKgxm3nWtWaG6d2GzMbU2Nnq7CJMKdPaBWtTW8BdgukNedP8icjoJAi5mPTbuRiH5aW2",
  "key18": "4BaQE51PjwSDqaee7SYzmn5WmukmWCVA7fSkRWu8Bz7rAR5advmpUhGvTANpqQeXhynqBQonRAcPQUqPAzxWGhky",
  "key19": "4fAkcHaz2gpwFs2b5gVhB7pdKy4uMvKRNy7W4AsGgHLySTX5upV1Dwo27cTpugqa3w3jQuLDwWpT847UMUQer6vC",
  "key20": "8chyeWsQRd79dSKZ5BsrkrD857tAve6kvXdCeZEVbymbyE3WsVQgHa9JMrFsX6BdXQu6n97i1rZVS4WtWLEp3Tb",
  "key21": "67captsSfLFshCftzCcLZLdrGETeuydEZP1uDnWUmnPTfGXKyNqL5k7RARtwT2LELtkoZvPCEfdoiMev7D1zZhza",
  "key22": "2GLvnd33uqzCLzE8ESMgsq2mNcnRh7zYJn6eQQ8Dx5XyQ1TSaUwMUS4eoYHGjTvh6v5oyWFRBkHPUpYZcdgwuYWJ",
  "key23": "3zU2T4tergm7gpT6nnKNFwxFB4u3H7tNrNchy2ZSBPfCoB6WdL5uXDX16pjyS2G8HpGc3A2dvnitgrj3bn6eWzpE",
  "key24": "5NGmMMTSVc5yYy22Txbdy8uqqB5CV468GUT4DnKFbszugtWKCrcpG3VqDa53TgJtGE6Dkg8yFjBSSzeKoZTh11RS",
  "key25": "RTPoNZA8sEciC9VgYjpec9n4z2JFmvoPix9me3DHEW7ww94JqhwrvB1nYoBKwQbm37bDfosKJyFvqTFmjKpG3Y7",
  "key26": "2AZhFzbmhLGwrTT2Dg7uXJtade31VLfsJy6CfS5XntkU5aYdwBMzqJhAWSnyjEmLZZ6rT3d7JekEhf6emvKeab72",
  "key27": "3CqncuBcQUT7L2YvgeWy35VyKVB2Am2iuctRcx3TG3shUUYtkJQFecK2HihWD5FDmXBrD2CVFxZEfidyGkG47PwM",
  "key28": "4wXRf6wqAZEjrQna577727h9QhJsqeDSvWyq99UyZCZV9bzGneKkEJJfRwTadcwXVopkYYmWqEDiPo9twBsDSeKi",
  "key29": "4uX9cB3WpndESa1z15Fa2DYsv8FVQYakd54mCFn3YxbMGxgfxJnMamEJdw7nMo43JNj6FwJQeUEHer7ZbmaUqky3",
  "key30": "3wuzKnKUhyz7zYDjW2kmCHV1QEyYbAk6iZyEoCkcPownV6KqBrhavY98ZsnMtGYa7qxXonMGDhsmGxifBnZ3oz8u",
  "key31": "4vaie4X1vVY18LSfDRNpRyPgGGobRUH1XpjisUdckoJe63eoYwkXCnQ7fVyHwwsv2vAhQJFi53tdSiCu8wmd9oxE",
  "key32": "2c19HBF6HDsJQqFsg71fKiohKc8nRUbeYEn6Rfnis1osC44acqrY5nNFZ5SQMk3hYRs3VcRmnbSJaayiokCtDLJH",
  "key33": "2GTFuiKAZaqLY3F6MZPLvkeabB1CaJpyabucBto1C5BA1XoZcqSPhis1rGqyQswhBCotb3T6gxZLUMx7tSwRBJUE",
  "key34": "3PVtkHrExfPpkY3NfUhVAvQnM2MTBE3c7d2WfCFkdpq5afoi9TMZwXsf4jbF6sQ6pvzTnzcP8fNiFaJjPZ5dAynH",
  "key35": "2TSTH3VcNGraDYXAwM1wwfw8ZedHrbX2CwjCwTNPh4qxvHsHj1U4vjAG1qJNWS6sWET4JR6ZHL2J7yQNuYzqkoV1",
  "key36": "sWaJKHLYCz436BcK2EGJ1Hn6FsffgqvsT1rFMsJ6PhRaqw2mVsR95DiyFDSPVK2jrfJzLrgjyhsCtwqD2sXbnUe",
  "key37": "5tvDxUwBXgkB8DMxzCvi2Lg5owUEqFm8sgaBGRVJ57gebhvHbj6BvmcS2UUsjXFhoCRieDtcus2WBdJnUsYYQjPz",
  "key38": "4tMFbBK99S2GZipS6cZyHWsg4dD44PSMnaSmUrGvDvEWZbRZ9udZFnwWkEQKDZgQLJcNYr89C8h15yyBK6hJVaaz",
  "key39": "4bdT4V8ERHLH4xRBt7LZ8aJyjkugrpiVRwBf2zUboF4Qj2KYGxvD6hfrGT9qQneDui6TwtvWRxGysHWhVigNSw9N",
  "key40": "3RWUDCzcYYEcEsLY9TAJ7Qd5b55LgU32LTt56ged8BqPipm9dsxcYRvwdLXQu8eT9jsnTBvd2fxWWWnoj8TbQvWp"
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
