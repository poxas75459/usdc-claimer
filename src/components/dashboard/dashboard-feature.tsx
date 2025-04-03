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
    "2aXnFWNpY3MxoZjRVLcXuPE3CbzjKZHgJZujgT3b3aMnVpWXBjVUcgDxENHKHVXYMNW6PpnWDNUQt3UUfT3A8B44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EuiA8SKsLWZcccnRymRHUhj5gohJR7f2eyvGn9vSnhbfwh1coshHZ2WLZZcZqJ4Dhwjtj66STVTsw2sshWUaUDy",
  "key1": "5ZEd3M725XGw77R3rQN9jBZnf9HPVUowwuVDzgfvhwJccG8xi5D9neh3x8L27tFruP3jBGtjkUWVHG37iUKdk47a",
  "key2": "2XMQ1KDJgzWA8Zz5VAMUccWGaH3KFufHhjozpS69ogR6A94wi8tCaeKdZ3LDbwxoupCyULvcC82uF5Y92TKUpaQG",
  "key3": "2d4Ge5i3s1oHVDJ5Fa4ev2D1tboZTMjSztxmeQyHwhhSn8Rv85kEy97u4T3oMn1xkLDWszGffKijjUwi3kksNHxP",
  "key4": "47ksdGoiJUE8Zv3TfZCxCNBmfiACcMUNEgLfBnNhsUcMnBwAvfoXcuMscPSPPi6bZh6mLswa8apy2F2U2QkjvaKb",
  "key5": "Yg9unXUDV6AN8RiMMeVofWfoPpTKRDfcaAecERSpaRn7u67Aj8KjefYxpEM2DqeCLkZjw9h9orS5rQRUTCtxPSZ",
  "key6": "2vdAoBTrLNLMSR121MCpkM6kgPkG2XNk7qPJ911rXxEy1tf6dhCQHLDbwxtf7M15eRQ3d6c5weUJk7TNixMpYsEX",
  "key7": "4fxuwDpbc5A93kKA7kK5PE2vPdCBmG6MFWLTe3GG7fXPUtMQ9T7AigTRZFbP3TpKCpWxanSjN6GQazJB2gUdcfw9",
  "key8": "38VqPkUnn3hbqD6sKEE5JanPSfPAEe139Cku3Uvq2VRuMqzafRiLTPWoToRA9JzuwfbNE2sRcEyLAWtKu1AiT7n1",
  "key9": "2Hru3xhzXsk8NAQLThoVTUkzfPCNXjmgYgdH4USyaw67SJEfewD9kmFZ6NhXzZ44dNnqTL5dES2awUNbbMxpFDzK",
  "key10": "46mfn6z2aAsLp9vhcFTMmo6ScaF88AcwJwQM3HT5ubn2YWDgcvLN65EK8FvcPWZp8TQjLoiJYBYyN2R3HgH5kweo",
  "key11": "CzELDcXjUB6VHw8fVAZn4nyGJpcn41fuRxWBHqR3HSwivcRn4QK3Jz5oMGfnS3j5eUuMsWUb13UN5tFv3ejqCbW",
  "key12": "237zKSHr8Kqdr699YsgtA6EHpJ6WgtkVi2g7psbMBKNF3dH4a6M8wbWrBr2weYT6AKDw9S6DrjW1w9Rp7PNLeTug",
  "key13": "3SkzbpKwaT6WNQURTQpWRMRJM9Rvykcv5Gy8fy2wXEKyPevo4dkMUKtFbmvkWK3HgJyzDLTjkbfEzxw4dF7g5EHG",
  "key14": "5CGgXrHHqa23RSHdvQwQa376AKqufmcuFek1GaSPqm6bFAN8yZVyGHF6hszwqPaMfHCemgeKBDVp4yKu93Wt3oGX",
  "key15": "4S11t7NxFn76H5T4WR4HNduC3FZkPJBn2sRjRuLYWTTPM2vB1P7DsRox6KTAxCpCyFcwbrJT1sGfpF9zruCBPJH9",
  "key16": "254sZZL36LPF9ZfL63NwWkyBv2ECSURR1yJ6ben2BkDooJJkYrBG1LfkCT44HWgahKovSKoV27aM9hpVYoSTkT44",
  "key17": "2n5tjCAwjf3JYUJ3iAW6osp9rXG2cRiJfub8u9HAMSjog6i8VP6GsKikGwdFhR4rYVWJh4iziRHEYeGPF3Qe6npB",
  "key18": "3oxftyDr29t5rYEV4zYCYMoKQka6QApy9CQBMgEpZidEquUJhrZEJ4prp429iATWqL1gtaxo7BUFhGLcnSkuCYeF",
  "key19": "2xR1r1RhQ95HC7rwZ7MVeDWp8UkpH8YHV7gvyMr2r7ehr1DBgYNaGrGALdhXipwfPNVctjqBFRgvFTFdTohGXigh",
  "key20": "4dpC5bqgVdQanp5eYc97M66hauxfe8TXq7oiLk1tb9psSSBWLPwSKBYJQr1eeHizVBFuhJbUJTSwPA9hFc8LTEp3",
  "key21": "2a1VBQK6aDZdqEoLEk8GX1ijfGjeoN5cWMbs9whLvyzWrUhsudts2NUzfNcSmqo1NVjLiTsXhy6EvZxnQqZu3YAP",
  "key22": "5SH62QnNrS9dLK8A5LuH1jBko443EqxMrbSWUzVjNAEN5qFvt2wRhvRfsM15tmBjPw7S9a8ivLD5y8ECJryUDNkA",
  "key23": "3box7jiSUUcrgXqzaDTgY1KpFQdXhEcheDHtVAUcozMRDjg6BMg8VYX3LeVUwQBMHDFHVn5cizPvLkz8Vx3A9iQa",
  "key24": "4hYWVNMiJRkngcuVnnCn5DjxqtrpZ3fuQEPRWYuoAxZEtrWKzpFTGMpW22Jvd59Fz9sSzvQCfTftqiA9UFjEiJ47",
  "key25": "5dt8UrDR2S6t5ij7YpyhBXndtMztmmqaQjn8KCoNrD6d7utA7fX86k18xavFDFhykYck82r1k3yShP2cJ6Skj7YJ",
  "key26": "4LtwZdJn5KqzgrxtoVuhCcpAyrZBPAfaNe9nHaT2izd1EL15FE7oaahMMYEETwdFmiwMdEhfBm6CV7vY7Fpvw2R",
  "key27": "5hkdvuZnHSQZia3GGYxP46XxiybCHEDAA36HTP34upCrRFp65SiEqUV35ztvWmimk16poWLbhbiv3TCCb63WrBJE",
  "key28": "3ncLzL9n8PzPevC94z2gvS8DRShLnsfPztoryfYFes8D6VNfutaWDhaLBZYEqAa8U72YiwQfYEGPZLT3VsosxMNN",
  "key29": "63cFvWqgyeMjAauaSnG4fLpxAm69ZLRuhfRYv9fWnHXHJ8poNzx7Z2LwU8txvAkqcPKtbSYh1xS3DM6mkNbs5NNC",
  "key30": "2AE93DfdARJf3ac7uXGA37oqu7qMmoGEj1GdjVpmu5rMyotDHhUpzv5qS4Se3PMK6dA92D9yCW382dG4LhShDUXx",
  "key31": "58stiRy3EJFHWufM4okp5EmrbTpJJvnJDbLodwaVavKmDr3M1a7At5tfa211MJtxaJMDN17gPG57N3YYoKfrqaD4",
  "key32": "4eettKLmtcjrTqBwVbKQCgCnt4VGR29YPHKbrWmjMeZTUGJBNpjHokU1qauVd89mRCH62pQhsLNBGu8e39ttjXpe",
  "key33": "3vy3L96afJ5Ctq7g5w5fzy927G1w1i4BZLJ1C6UwCfLiLwezPN2LLU6C79Ej4VqfqTuv38UdU92AYSzs435XZppt",
  "key34": "3PZr1c5qQd8BuEjAgKcw66bXHqUby6Zo6oBTcLLFSv7vUhW4NE99R8eBZ9TZGeQGEHadrXLvYmBdPGGgHqrcmBni",
  "key35": "4hgjABU2NR4whFvCgxWC7jdsoegpAKZFY5edd2TLcDH65cuiB3VCUwxzdzvRyitCufo8ngvWTynA7GvPtCAEWMrQ",
  "key36": "5UPkncQrfsUHeeFUSbw8gqLAmTKjxRVnuT7Zjpjsy83X4uhoa2TBRrkiBx5ggxJRENpHA2D1DSW9nKuyr4T379XR",
  "key37": "526PhTf8G1A8VuVeRXSuBCZFCdKxnEns28wNUHvcrHwsYwgMyYjrb4MsFAxZDsQVYEkSCF7Dqe7jFc1joXitsxyF",
  "key38": "5PUirAuqRCoPgXS9ut1MHdoFT4gC583VeMTc1HNf9Eytc341bt5vAy7JVXefxLsL5cbPComhADtuwtZvyJEJifwq",
  "key39": "5b2DRpwDSHW9uuvcBCQYksunwQPo7qFvSsa4FVWPtLEXTPFvDBrUVCht7M8p7nhyVTU3YL87QJX1iGuRuyiaeWJ1",
  "key40": "5EL1eQMu4sfv9Piqwmi3STfuAzxjTTwehvPNy9zUL5SsFNmPbT1P6TGKXAr87DjnzRDzrKaFZ16DrbUVhNQBrD3Q",
  "key41": "SSwtjq6iKZXB8PGbhUQBEzfhNXX514vpRCLasqMHLjWVa9JhqFztV8gdLuGF5F3JCBbQweDNs4A6RrF71VjtoRm",
  "key42": "5evGXWmkoC6QHaXcX3RGYfRwVbGqcdWw3zbxBwyXoPMYKnZFH4fTGB7Wvs9bCL2xHfQodrK7amgRbCmKLxmnaVLs",
  "key43": "37EKf4HHoJZUz6EzFEwxdT2ymSLRUQyjKnpteaJwza34Vy9nngsuqKrWgiGP7xwbohW4HySHGPtndb869yXw6E62"
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
