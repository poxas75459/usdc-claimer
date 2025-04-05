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
    "41oeCqnjj6RXaYDDEr82jT9y6yFbe9CafEKYzmmTweknFJeLDcANrWoHYPapDKzukj89j9UijhLuJQF5YRkbwPr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j7g7A44mpi5jZ5Cqp48jNNJjMpimtruzDKLBXsKGDigpZSJk6yR9FzSDrAnwW3giKyvE6ovQ31wxzyLEmBnDL7m",
  "key1": "AeA15gC6tAUZzKUen8T67ywuz6YvCYATMDLTA3zSMm8hAQJUCMYJbB8s6J19kU2Ldxemosh7DPCySH7w4CbF9gr",
  "key2": "z7KHsXsdTs5467VRCDeiZRN8pVdkxNyisXpNoFENyYF8N6hJpGqHUnsLd6Ry7FHwM3TVSyt4CX1rn5bXkrbsj57",
  "key3": "4eQk1dKiW6y8Eo3sMcwbNXKKyb5YmwKhBWbmzwPKX6zoUJW956UYVL894iZ4qbuba7uhjoWdAHokBzfoTXJ9fRM4",
  "key4": "5Gna4DSUzBWS5VjNpnZmku9d3u1FAJUMiHdaPeqso2b9kpNqTNZPQQn9CsfWzGzNnsuEuYGAwFzXVekjabrqW1Er",
  "key5": "tznSg6QjWDiHVHT17ZsYNaAdh3C8TzyBHVp95qaZtJV2SRk1fya9iWXGph5gdi9xqtouUL64digmEy3jW2hB3wZ",
  "key6": "QD3sTTPQqrJBCBAeiRXM81Ui53ULvECnKKvv6JJ2cbYSNQhLrBmZpxU2b9cC9bcRXNMWS5EZA2NmrwaVCajfxBy",
  "key7": "2NbqLuCa6DtP5THiaJ9TfDTtBgKcdsdvyq2tcAjpTM73djzNsYWwBWbQPE9vpfG7MrW38NatSwPJ3KtJ8uQEQ2cq",
  "key8": "3RWAoLggD1LtKom64JBvSgm6KujK1ZRwYqNaGNjT8Cc4ow8hNeruNLQ9Kvd6CzozZEmKt5TKysjVgzgk9pQyFzbN",
  "key9": "3xwKz3wqvd8FGHDedxWwccLusHrFMSGYRsi9Afpdz6jVBqhwmXiF4CNDzxEG2QENFt6j7E9zJW38J9bfGNedxBxy",
  "key10": "goKsZRVqawoWnrBvb4LWLn3mU9xJULT3sXRkzH7HGwuGw9tC4codiawsbjVGSCtKNrpKphQrHWLPnuPFSRjXvSm",
  "key11": "3Bw5kmf8TbHKREBMn7pG7JfAXDMGGr4dRip6AXu1UqHRNSe3CNjFewhqH5jSk1GmoPfx8czbe3ej6Dkp8edo9gVx",
  "key12": "3JpqYRJzjMpD4BBzNmD1hExHimPokW8HX3iYaBTiEoEooGaaZaNQetMGuxcbeW6Vtcfsyepj9Gor5arwaWN5yn8Z",
  "key13": "52bd9B5cqDjjrVDakkwFy2LgT6TubyLdpYBb5CACFFSZu9vv7uNXnxnEZvTZtr1KcW3PTMeFg1qS9m9L2ooNWMkG",
  "key14": "25xGvTRVfPvBbEJNnQjXypdgMFdyZ7i3vkS1oavZGVrkshGLBWy28W27fhBPMM5ihvTMpdigtV1BS1RwidTctSq5",
  "key15": "4FaA2Yzx5iPePXLWpingme9KwHw8Aen6GfRtfAz9RXNjsgLQVYwnsjK9UNDBL4PxepeQzQbYMjJQFQTuqcvsDRaU",
  "key16": "q7BpLKKLmyUks9g3F9T5ybXbYRNK3xxzZCcGzSyQtzdLENvuqsLbyEYxwpaW6EQQrEpXPuQzFZDP38cLuuXigVg",
  "key17": "NeAXGbVVDRa6Ko1njvrf7BVPSmjPVNzdWZPfrVsVyfCoRSiTVXNnYEHXWZApbLo4TdPji7M2N3r5MmtkmKaLjtJ",
  "key18": "PwTrX8ukCPRZLsWxDuhdNYfXkyKwSymYP3Qjqtaj5xt8p7UiLcTnmnQxG2m6CkgRd6faxC2PNurEqo33gaX3B6u",
  "key19": "J2cYHw9Wo5jhLKvkFnY3e8M3wu16csbcTZ588mWUkVTaY81gKhUFJvAP1AbBio2mqq3jxWMyTVVyC3Gfs8LF9Pc",
  "key20": "3CSYcCJZ9xQWpLooDbCnNoBbdUZ8SE7cqAF7a49CswPTVmehxqtdVhYaB8mUfd91C7FWskcPSZ7qFyLuYyFmqqi2",
  "key21": "3zTNead2yaYNnfrYsw7RyBip9bwz8WHgUhRM4xRXsu2JeWm1vjyp63Nd1VBYWXosH7jBAKoShuKKJycgNHvqHjKk",
  "key22": "3YkJUN7tfdyYk6ma4cna7hcB7gRJ7hNyQHc9BudxfauwFx756BEJZ2FLybgz1bwdaU1bdPb78FATCKX6fCMvb9pY",
  "key23": "RULvaB3mLVyqdvPmEvTuxVWz8vWZTAGnNjWatXwZ3FkojyQZtARW9G5fo4NZtmEudSGdSNfAXwqHBoKhcPUfZKv",
  "key24": "4nSBs6HSmwuE59WDFm48uqSA2h8MjTtFmK1fRCBcZ3stdvj1qeqnTnFsbEwN9cBqxkkWtPVJBLEevdxBG5PVxbps",
  "key25": "VydDRK4y4ghC6ZSz3gLUjpNcuZdU1bs2hzZ24GpeEfsMZxSHNDV5Q39D3ZEHkVLfcdr3fYCMdmyrdrP6vT6Me8s",
  "key26": "4STfvpZ9VgpuJiaW7YMURRmKWHECyqcV4CzSoUYzFj6yuRK48rwXAKFP84SRfHeSxTXbtTtqhH6oBKNPsegc4qdc",
  "key27": "4ZA8e5gqbksDpweAy4iAZ6kXDxrpYPTmgqg19Qkwcx9uAcZSnsCh2SGG9Ts6exphmcP85NkKmy4Euo5kMqcoBJ72",
  "key28": "39dgbUMoXSM2yT2EuV93zNGmdt8E5F8v24b8UGQKzVgNG3GB5kRgWs71eC7vTnsH8KEBdgQavxCLU5JF2itJTS24",
  "key29": "4fKPF1ArrGyFs71Lqm4Ri5GjRH7gQdLHfdKPr9dwNzEqMRdj2FSPVwxJau8b75mrLZR8ZnTnTNXGfBs47ZRZNqmw",
  "key30": "2NM5Kh59nftv64FQzYxazx9pKjDb6GwWvxmkh4kDpkT4VePF9S3ZiUhmwPctKVn3ffatmQQvZURCgmZCgbp53Sb9",
  "key31": "4CXgfjXLd6gbPSPWVH1GVmUjBBpfnanFWU3D9mmDPnTcLRiNHmaZCnQqWvB88qSptQNkkMqgkbp3zb78mFRF5F3o",
  "key32": "4QLCHeahMffe33VCiMa4Xiuj4F44yuMxJ4mU3bcTnuVBeiY186Ku53ueENjYW6PZ5zuR1G7h4sHpjLapKYpFqnwg",
  "key33": "3VhQRDEMrVSUmG1J82nDmdL7PLipDu4M4fJNsSrFnKNUS25QH2nbKTX5Nv8Tx9rCNssCWTAxMpZi6RFD6m66gBEb",
  "key34": "4RazFcCkoFZJHrcgWUowjBswH8XSvb1AAYsBmnCBCK4LXhaaibkpcvZ2yebGCKapA7NCAXy6mrafnH7kSar9UcFH",
  "key35": "5UVKxksuxsSKaK6JtWbfNCxcPJe95vjxMxAaJmeLssBkFc8KCr9EKtMnnZjuvFsBittNryqaMxoN9tMfxKskmxoy",
  "key36": "2ENRcssRLTVETAu7gx6xyDuoHe8QKQtg7YPoDMnw9TrCJsRzSPXoQdyXp9oHghYoWbKDHxMFJvaHc4vGyEUqWbSd",
  "key37": "2yTsYzs6hPU1xENXxJnShvzXn5qYa7pG8j62JciR2qYAdviH2FLfH6ZZn84F9potcTm6XGcM3Ks5gns7mKufk6PY",
  "key38": "37QSLQr4pZPX5zCZMJ28sLJ6cfNxeZaUZDJupGMrDJWsBGuwsstAzhCrQJqnQ8bTMUbsk9ZAySPz6Vnfay63sdCb",
  "key39": "PbikyBBawqZ7iHz3jT9HjkC87HAiNhis3V5F8h68bAoUcCdL68Y1ngwnv3xJBVfutzFMh3zcDQPvVg4S7dmGzF5"
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
