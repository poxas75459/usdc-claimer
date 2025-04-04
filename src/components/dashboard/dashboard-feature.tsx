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
    "hpz7YtshNJWZXFtmTsGQZQhnufDyeXbWJZKax3fAZCzRiuHyghVwAxQNihVgMoFJ9wV51HocGvLSQCKAVoUwD9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VmF2Prg66iFaLoBRJenGpmXYsxirAMNGHgedHS4ZSuZuYtDkztRa3Bh3Y6W5cTJXDCPTQsqUDogLVnNmq2gTiPS",
  "key1": "2DdxR3BFruKER1fBMzn9TQurjFdEpu5VUjUdLL47LVHcLES7L4Cym2K5GTt3TmQqzLzGrYQKNJahbCk23Gti5Jq3",
  "key2": "31zetGQqezKTqb1DwfYL5kZk4mUWJs7WjTD4dKdnCXkM2mqd5fh8wB47nn1qqzjAywDZtpnB4Rv8AC5DEMjpcN71",
  "key3": "4SckFnnsYWtWKaGvgWeaU7DuBNs3m44eq5k7kDGXXmbBbvxjXuPPrnsuUGrLfnyFw9bubY2AwBtDbJN86zSaRvWn",
  "key4": "3KeftcAFNEoYsP81ju2G3mNzJpX95iWa9hfuDvwAJurG5e6H6dQqwdrvJU2vJuMPohHMoNJpv4NT1HuDBiBt9JEN",
  "key5": "4GpW6y46WXCjk9qaVQgQkpbyd2eYDUNycecuAUoPNvzNWvjN9ueLEYXiyCyfsq8YJeYpjA68iimWj4xZjSWnjLaa",
  "key6": "2xxS1Cs4Q4ZJAZsWX9j4GgdYNqjzjbhmADnWkPi5kgTTzUocK4ifLNPVMa2Yph6JvgLMFgn4D6HjtTRMKukzCZuG",
  "key7": "QTDbksEjsr6ah5powQH7gCf1Y1mYUQpMU8d934Uo6TYUmnKKqFAVUKQ6ydF9dnhu1eKyhvRKnQyMr5KvZge1sEB",
  "key8": "HAfobAKszrwT2Z23J1ZRs59AzbhSaoxZySv5nNnAJp9bZDkFgb3o64yTK4AEq2BUyeyCFt49nf32A1Anvjnwp1Y",
  "key9": "3qauXYwmukbhPrB42rjRjumgmEt7g79QTyN4unZoqUtz7XAfcj6eZJ6zmjGWh9HZ1JoqCfBv3z6iqqcSCLQWwmbD",
  "key10": "4Sm4zKadSsTd6nDvoDpAJjWxxsXkNskGucTT4VUVyjbv9kvHe5kVRVVCDdy1qmHZZ6CxahNkiLwN8TPj5kNZjmEa",
  "key11": "2isLJewhnxdk43xGVnLeh7rxCpEnV41WLv5f8axv9pCPz8Xer8k4JUY6MFhxMo8NqihZNgVtveR3Aeb6ArLF7F7r",
  "key12": "DHq7WJpPY9kwUNsUf8mXzpojFaBgqWC8TLe8g6NW1iGMsGyqFcccvv4tx5ogLnfw9px7tR3LUEvTqZ6LEyiWmii",
  "key13": "4VBMBXJVfMjpxQtEQeRsnCSNahDzp6wJu7B6nnazj92syD8E8Q7qFPaQtjmuvGjwBStncu8QBE5vnFiEckKztdgK",
  "key14": "kUdxiUsziQyRyb9wnZUxVaWMAsojvuLJ7GqbUXGc7B7Bw2PVqX1ox8boPLXf8WuoheDyAbohrdgydX1XJZNExL8",
  "key15": "4LTtcXuSVrXQzMEyybAf1egJbzn24VFrsevrQUf13Ka82Pyy6KDaNuvW17cviTT8YVmUnZNCcxye4ARCoj59CxoR",
  "key16": "66J6EsPoPd1MaF61f4nCHkpCspDSCCyQdhLmgiWeiJk6jKoTjrHWEtjWHSKpmrLUxDvVtt69TrFuXHUUzm38sozp",
  "key17": "2MHzLptcXb5zpgd9ABBZai1a6eEjpVg7S1FdbXZG3jXeeVHArZ12HfVDLf55V8tXkv5hr3Ydq1JhapfgMTjf2SoE",
  "key18": "s1LQ1QqsWKuK1yDaFvW8CuPV9qAbqvTdCd5xweCpHnCECHcLzKX3QYjqDKT3ug3yjVtZBRKozf7fBxr96Bqm2Z5",
  "key19": "4p4WbdUzAmxpHkSeCDwVfrwXWM5whtqHSYwXEVe6fH9vdRg65964Vmfj49YWcw27XvArzRRx2MHtkvvZwsUEs8AN",
  "key20": "2cKwGm97jNSPo2ym5j2FCCrwDytS2Fhh7KPDYiGwe8VsYkGDAKMiYjPu3tqw7qVT2BQJxtcVgA4NC9KhmzdeyjVQ",
  "key21": "5Em4VB2y58CNCAU2ww5NGcY97zcE5xWsvTWdh1ShfEnMdCQRZBvUTQvcq7zmXLp2VhafPBVDV4D44JqTQRESPfin",
  "key22": "4ATERgBWxJC5J5jVG87LUN6JB7PPQxDFdvLtsneThi3uMcwbgpQbBwdm1efVd6YEPc43SfkwjRvGz5QC3DkeVwGQ",
  "key23": "2FX1kT5ZcsqNs6h5dCfjQTGhnMLSDYzhWSSR445Y5TvEDPX8f1tKi1G3BwMGcpY5NqWEHZqxggqkCaCUiFSfcxv4",
  "key24": "5FmWwA9LmH3nGug5RHviCj4iCf7vsbgo5jDZvDHstNnhNufnrTeQJkyGpLXq8GSSioQHijT6SAXSjjj43VGyfFNP",
  "key25": "2RtikQ35zMuAKacgEArwRbfEqpNBCfTuNGbPoJ5DwZKfNK4KD85cNKcuiGYzXEHSH2ujtQqcRjoHARyk8zdePYj",
  "key26": "923iW8ugexdGAoGFHcLxF7FtJBw8Ha7NeAryfDVMC34avEbaHhBAuHtBGBDWArm2wDFP73AitqpkXwvPLmvaECX",
  "key27": "nFPBS7tsadpWyt76bc8JEVH9rVkM1khNBs39KmJawn1LypLwAgUpsFzYtA1oPooHy3KcyfBXjM7hMNQwZrTAzsa",
  "key28": "WmV4y2zf2DnkGB3KP4ALpr51SAYzgzR2pQiKSaQUqE99r1aL2FwquznszCKGGiPKHcgALaFBwH8JTs274dPrBeq",
  "key29": "4WH7hBocgPNkzSrmD7cM878jeGAbXihVQTNMEnGDogifmR8AxtnKUUqoTPLyUHfdBjeH4mJUZeobPuJtm4xsxjTN",
  "key30": "2xz6fNVkkUkxFcKNU6yVn7vXWMPMRNXCoHDsUswnLt9UPgWaCvnsfnGwLc1iXB2wFvuin3rusMttgFkJjRgHbcbb",
  "key31": "53DYAeh123CVzVxutsKVSVbA5DNHAdj6qixNqCeaMjCF4xN4kuzC55qmhTFagzLt3NeEddPyEk3VHKai6kSznLWz",
  "key32": "2McuC7SrAjNMYmomtCCgauZ5V35X3JtJej1idmR3Emyp8DvoMh9SYxxVrNkRPkR8zh1sXdfePWaxYANhSR8YLuWe",
  "key33": "47fjVV1x7d9Zk7b2NTcCftuCKdwa8PMNTeyDZEMDT87wGqe5kTDvbXcpSL2YKUiYowEyhEcBMDvJ27uxEmkmNFxB",
  "key34": "3BjS5j8YHYtu16RratoGZ4LEVQUXiCHMYw2u3wpBBNUnho7DTz8MxVCuFw7G2YQtQSvg113rfLXn94DraRA7yGa",
  "key35": "5FiFFMFDyb84c36QtLikq6jFEGWf6D7doxHoxWdhitp8j8RHRzfsoCV5shQ83r53YTMVay5vZNVhru4obRZAezcH",
  "key36": "5EK4REnBEZjQs512LdjRTchcamLG7LZztLZKd3KJrjum4e44DFeGYC61TprLmKtf4EowARsFpEna6JweP1egGduL",
  "key37": "5XbM55PRMtUnKPC8yiynoiFesN8eJ7iiUi3QW7cNnzzYPUg59TmQaCiV757YvdAybaZDyzDTxBKbNgDq8xDEoHfi",
  "key38": "2euW9LvQXf1wRXr96XKGJPzWjDAVX8qteBqucjUGe1koRhD1yFrb2EH6YdH9dZE4rnwxFHzuXmWR3cYyz7uCUPiy",
  "key39": "3MdqMuxbjiHRgHttCVUiQY3E2z2m6nadXUMBN4pVqSr3rQkHRAhHDx2GRmmdF1ddP1xYsFVRHtph5nfzRxpjzHw9",
  "key40": "4AbotiPkbT6v2vrNE42DfT4csjJAH8M8BKdav8qynn7ywJpmQjDm6Au7BQFqwMdXth63K1gmfEWemPwWkdRat2ET",
  "key41": "5tG2eU5zyRNid4q3FgVkLdaLw1Fwv8fhz327DSNoFyujy7p2LrTbW41CZVfpqZsYWNmx86kdhpeYD6ESMrF3wNEZ",
  "key42": "5bJjiqmbCg9RfH6fziurFoqmiM5dsY1FpggwUNEtcF4sVMbMQKZURZAdkWRK6sVJCJcftDFp16SnAWtSsCGb3SGj",
  "key43": "4awybSWYV1hWJd15PBMHCvSo3tJDXcVz3LLHMyhdWs9FT59xRF15Z8Whr1h2sL5FQ28HGKsmnh2DyXXFKd6Yb9wE",
  "key44": "3anYJrkxycim7d6kf5HRdm4cGK24wdW7hC1AjbbGpbH7AZAwrKhVwfZ8FAYcfynmLUyum4qYrVeot9s1bSHSSxyR",
  "key45": "6ALa6DJjwenwEtCVQRfDuV2fMrFPArmdyNGGY2v1tMhpfpjnT1oLvMfAUiCXCY51QRhe3bhctVAJqHjLUBWU4c8",
  "key46": "mDA8FJrtV9EwGNiiRGh5obotCrGGZ52oziLQ4nFf4mLBnL4SgEJzaE4jPRbddb9Uu6nDyR7KKVPf4HMCism96Av",
  "key47": "53qCXybTwiA4KfRmYhr32M5tssCf3bTxH4rY9oc2LUBtfoiUR9HKESb6uBHGzVzKYzxghs4T7Vs273F3qypLYQBV"
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
