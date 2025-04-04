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
    "59swbpcUaqqhwcoKNiCkTsrYgWkbZTHm1J22XP61LdSXJqUCgqF1DV1iNdAdSBXUbou5uegnJen9GK6Zo463Tei5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57jMfpUgowawFjZziQeFaj8RXRthN4rqa2drDsUDssdF4Z9FPg9z1HUQjtyjSN1NzfCVp85ssEvTLyKVqbxzbLDM",
  "key1": "63ba7JepASpzVHkmpFQHp1ht29DRKMGWeuLDRPMNjhvSKwyPSw2zsk2GrAHoxWw84Hm6VUzNVx5Xn77xxvRuoHJT",
  "key2": "TBjTjo96CSspdjK7omiFmPQtve59xi6UpFLdv6fksZK2Vj9jBjsXV8GWJKoDWNgPrKv1hdwmZQougfVoSCqNZCD",
  "key3": "5sNjxYsLuosdPyE8czz8RmhDWoo9JXco7UCreSqkA7So7oJthpfNYbgPQKxW3QMskg69jJnXQ9cfJdENcvk5PBEM",
  "key4": "2MEZSRmpMZ7smUM1KSgCTCvekU5MRxkpkpfnPP5GUvREoCRhMaXfak9xq5vXBfUxs9nbpGQ5AfRjgMG75QjJep8k",
  "key5": "5nQSmemzDcAQDkgo2wXpUHXa8cELMyJg9KP34FUrmd8fTzq5c9SUvazNqayspvLvdoKEoiiK4XKT1BKHQp3jdez5",
  "key6": "2u2fdSvR6XnF6kXG7LvdDXBhELY6w8fGx42GCTBythzP24FHXk2PkS4fTtZD23kvWkEUCYSCShtB8Fzbu1euXu5M",
  "key7": "AuvWAPyFt9pQAobGKb6Zyc1g47eQprbWUt9fGCkbQWEUaCyx9BuDqCkTsdMsD1TQNf1s6XJ49QVbZ9iYQkZzSZZ",
  "key8": "2xUwxixaWy5AXy5sq9j28zgaWCJMCVbWFHGuhueDjoRHZwLxAWzRyVTejjmNFJwm8tTRKsdDG9ngDnLjCNxJwadf",
  "key9": "4pKkeunuwswrffQ6SsGfwcsBrdWhosQ43fVq9CwyzCLjZeJqdqCpXaqAW2KPGBueSbuLj1dozGgN5j58nb865Mej",
  "key10": "9Bh8DwJdHsdmAx5d15Lmr8gvuVeaJiPKpZgdrRDQTDS6q6mdUwbBPbYAoboxL3aP8JsZJowBkkGKuDNY6EL4jaa",
  "key11": "3eh5REr7QLDtq5on1ahkqiansmjzTCLwMhnbbgP26rbGTpqJHSdDpZYRj1WrGguzRVgGSaRbMUYP6cLZgy5BKND",
  "key12": "27bWm7hwPENgYjo2KyWaHRv4SbFVSr4q2EZo6pbzXhkGJcgXRWhVbKQmj5MZcB6k4qeAdshvBqdT3TtNk87CnNgb",
  "key13": "4FepMpFhTzCtN28ynZYUJcpEnYw3eAz8qDqesXzqZ8A8oZuMnT9VBhecMoJReb2FTtzeskLVezDhb5KNVhT6RoLU",
  "key14": "428kp7KgGzCm7qZg6GMyotDqH7UGJuh25XSm6UK7DvfPoDboWTtaMgZZGHW1Bh4wFMXRwPmcAgag2sxu6LWsWrRM",
  "key15": "5pGcyc2nmv1aGBNtSCV9ZRqmuiQZUq5XXgp3EFWJFQuvmwtvYpqL5icraANY9YHUG5KW5MUNXRxFfsgxwd9qoZGB",
  "key16": "3rRASFi42LQvc93sfnepxraSyvYDFBdo1PW4Zb1ZgrQLNCFzVZFtzdqkShyxvRP874d9BtQ5hYCV7BckGD4mLYfp",
  "key17": "4vpYwsdpdAjwJ1yqnU2Y27dY8waMMXQaFjLRdvWC6565gFVLHFNPXXER4L25DMnf4RhatSyWnMgxtt97x5P4Mn4e",
  "key18": "4XzGv5VuLijjQ5jH2N6m5gijAvTRnnECXXUbLBKFLn3vKNJ9AYsfgn4TAUCnUD9DNXWSSMSD6Vx1nBCEeCoGP9Ez",
  "key19": "5ShNViEuAKjhtXyNYV1oHXUbYGTUpTA3NoNgxLMqvuSCVYzVAaCJDnFkViAWuttNggjpPpx9cC2Z3n7fYLRQmwGx",
  "key20": "ZTGBmnHCBnC78347zhtM9xAw2k52ofMM2ZfV7HsgfrXHw3nUrqtYHYEq39NH5pM7A4bRy1KkeFvrv13rkmZSUiT",
  "key21": "4DnZni6b7QaUZCD5y4VQnfhhXzEsYbVK1vtB97cfmD7AZdWjyMwAdEwsMA8KsWPfT7dC2NTik9inLgrvFYBWRrou",
  "key22": "5K2gRcXg7TcgoJnZ7SEuTNrWQixaLrLJj6WCZjLbvBAwEeqM8TvtJx2FCxYsVFsr1obQvqo6dYAyz6KbsHZFbXrL",
  "key23": "MiAknZ8T8XS93KAAsgQpNHMNhmqh7j6N6WAe5uc5pZxxU5HiWW7majDFrNFqKuTiCBXBfdxXevv1gDMv4Vp7AXh",
  "key24": "3Nnz9jgZXHJZTwM5cfPuF7GAFDQFTvWxUnmEWnEt2eFKcuqArNvZrES6gdtY8TrGgZmRHwHxWXBHUW7dx63Fg2vH",
  "key25": "3TzNbdAZNwgA4eJVc3wQ3ojEiMMPndUaAggRg35ZGK9Q8LQDhxyPz64EmSRWfHFSuWBPVEpj5Fd3sQC81tnPhAgs",
  "key26": "4ViD8Xw2XNBDz4Fp9TjV3Lf6ab7RP1GkuwuaCnk9YUgXmnpeoBoeCvc3xSBcFLZBYq2688hFdfeTq5FGXhKp7eQd",
  "key27": "5bE3sdiR3njQ8d7pTtNuw1TTRmikJJ2waxWV99toF2pecxWbsbMbDNXU7DRf1m6GJy3i3ZYRRuYRPZqeXx7e8X4H",
  "key28": "42qMc1AQCNxPkCqEBJUS2xV5Wk5SYirDFp1Y79ydZoiMbQTQi3bCHTxm9DDunpwEYk8fdtMfErNibq77xQtFsmrx",
  "key29": "2Ua9BLP9sx2dNoiWCcezC1bgnDAet8yrkC9V2Z9U1aTL1epKBHUrf9jPb7sX8bLoVeLqyUGcK687Mq3g7zwXvAaL",
  "key30": "3yKMRQZk6aeDvPZxpSDcQPDgXhS3wFodv4nAGXg6nBCMXSoaZVMuv5Nbx16H4yHiqFxtFuVaR3WetKUgTPea16k3",
  "key31": "3bohqGqHHcvvxcXosBGpaHrgBS69gwYV99bbfiaNXQjKzFmMdAnV6cPiNZHf9ioL1eCkkWr4zfAsjuxN1bsrvrfq",
  "key32": "oQrTSWZhSswyt31Jc4imPAP68M74tubanVZ6cx99h5MzZ3GGxhJXW5wV2aMsMo4dDsa1DK137AUx9dwY8RJtnQc",
  "key33": "3jyGcjLygYd7rJcKTjwLc5kdN7Adywhvab9oC1YrnjgZYzsyuBfTuDdDjegAqiShSyC2XQBvfmMEL1rTkosHx42F",
  "key34": "3Hmx1iFbfJtqB8jVSCnLu4azuouMdYRcdBKhPvAAmL1kf1TKqSoozShA45rSj3QULHNhrhGdXxUrKCDAFyazvpq2",
  "key35": "3XM9ekyFtcUy4SeTTLFT9vaWPuMnzv8q6a2ycsKYtmLRyaHVvDjrcjJCNGCPSRXfqdajoRdJyndUzgRrscBxqFsS"
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
