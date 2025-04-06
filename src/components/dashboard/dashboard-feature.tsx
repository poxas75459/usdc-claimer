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
    "2amXqiSw1MKJQkihAvPQdFFrfEiCeASNtEvACUt6vPCXbEgw6S8dqH6AXK1Mm69LmCzNDsEZyYetAPWCJHoj9fjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AnNFqgBiNrt2Y9MECH7LSQG3z5bSpu2F2pQe9ce3sthq5CjDEMsKfTC8LPBtpMPG2DeoYaxPb63y5XXNefcpg6N",
  "key1": "5KwWDoxZDi3QJbS3yAePD9CgaPewfV8k9Ge4u1R9vYZb5mYwb1nfY3Cv42S3wTFdvGSzYr7k2qdYZZUynB9t2vRW",
  "key2": "4mG45rvB2TEWGwXJVarvUkGg8ppiWf7NVcvsXmRaCHUi8vWjBtYhyXvtyQrrD5fv3Le6uNuaCfvo3Lobm7gkYX2u",
  "key3": "4BDqyNQBYKUZjPVvZjcXcmfxW6YD2jqd2MMnPAtn657cGYTmBhkv1ErrYoJUw7pUKicwcYAUX4UUcLYXm8nNZfqi",
  "key4": "4x6wu5WZ2zjSZ22Nnxr8paR9hap5k7ezXPQ8NkCs1AbYFsemq6c6mJraxXiG8KV23iKRSvMA8r9CpipFKtmXZsEu",
  "key5": "4xg5GuvbMFMbT86BvUu6aunHc2JgsRh3BcWkk4yioVJMVzcm15FEh6bEvQX7oEuMLwxuxXECzALYRE2Pf43xai5p",
  "key6": "XRcSJ8LGhfwTM5iXWmvAVsvAgwCRBySKRhEE6QCkWXWJB2t6aXZCe3mDwPMUyYi3wbBw9zcfFK4HdCLkLByW3Zg",
  "key7": "5VYQzaM9RQvPFo8t3FMPSPz4PntXZq1RPQp4mZUZpb9eTVAQFcjBxB9hEMSeXrfuJoC4sqkiyDDQiLyojVggdAfR",
  "key8": "3d8a84zidKQpghBnvGGnWNW9jWSRh6p55Kn7FXqsLbdULekVpBQZqU5LqxaP56hoatmf319ToV3sRG82KUdyKWxz",
  "key9": "3M4DiVwEq5mWAku9YSPGxBCVEQpzasrQPrL3foYQyhtRAfJRzDoCCP2Fh3Et95eL3FP3wRBtUYCZLbDEGGAxikuM",
  "key10": "2LG6aFtdwJjbzzDCQbY441nyCwoHab7MCTSx5gXPp6i8bwVjvGRRoSyTXrnDwPVDY7mCEEM5zhWqzC3EthgxofJQ",
  "key11": "2iZUsfNkhsfeXhs3jAN27Fjdge8V4ZHPjr5o2JHxo8NXewHbEiZ8Kkievs5SMFPegwGR5Go6qyRf4ryoQF288Cf2",
  "key12": "3s4BSunZUeJWad96e51hrYLczfjdmvfb2C4pjGBeXXHCg3LWDkLQMXJCf9biYs2rU5mYgdkHkcnZejPC2AfnRvQD",
  "key13": "cpR5XzhWM9DkrLem6aSFUA6Xv1Ev11kMG8wxxj3spvZY1DEUr1fR7r2RSVFrjSi69u1xbwL2gsEinDUPkRWw36Y",
  "key14": "64Tw9S7gvvNUeki2evUmkdnAewoZo97q5CCG7zKhxmR42wq9bburG8QTDmqLkyNwHkRFukgBtwJYML6sqCbSWmr",
  "key15": "3pwSCE9kPn6wRt17ZWVuYk7Vt2Fx66hGnKQm7CyjNQLtPTCZrvLg7xewYUu5J2C5G6rwo85ZRQgws8ngYtnQzvY",
  "key16": "3hQiy53zXGCS82NTs7L8hPuqbhNNenQfnSvCATtM5oLHejeqiwduwGDcvdxQwNrfQmdH5vgePdHBR289K1Lrj2jE",
  "key17": "3YswCDQ9B5KYJ7W14VtpnhTiS11NgMwJnaMxu5mdutLPmQDKQRqABfqnWYbGynLikKSjnuGiVEJ2Z69xzH9zjV3Y",
  "key18": "99arWABAGrP3TdP9rJwF23BA3CVp1pDh8WzGB49T6yQvNwVjM6AJqz6j2XyvCd4Tbs5Ve4zuwZKQtjMaHYJx4FL",
  "key19": "4bpKJcLPC9yLKfHyzkrnrZ1Fv3tsF8couZwQfiJ1KzsWao8tGjz4aeo8vPdFXLG43McUCBJRyerrg9poXYSNn5xV",
  "key20": "aYeuQAg1uPgzqQzqyTm2Y1bJWRtmJqECaS8LH6sZBN6KDaEHjZ7Y1LmU2tPnPjLfJZ9QaGP3L1drG6YjsunRAsH",
  "key21": "4kyneYoJVckEtbB9PxdouQjBMSQSnDDa4WpdsdZU915KLfkRA5VCPbaTbZnAQN3Yw1ggrc1uHcZ6k6hGa2RbLjU6",
  "key22": "Dw5dQTRiKFxnHJcEEfSLoncJJZPPm3BZoP8v3Yw3tGmVh1NV15i2xbfrx5QbfNydtpnQoYJdM7bbo77QexBwdsP",
  "key23": "X8M1s7NJCGMvNZWuuM2HebtvLap3Dve2ZX8oTRURcDgxexB1BJFpnT4mw7Q6zVmRyJkKYCv1qxuwzYhJHzxvXxj",
  "key24": "i39tiLthJxeH1zFadUe9mMsZHdQFjy7T5vUySLd8GdgHBVHsGsQvXbfzK9cbihkjPXchBhk2voYjC4f6eYKSGR3",
  "key25": "4kcigrrYjutugjmdxSdiaCuobd9vCyLizAGYau7c5CpJczuyZg3uPnTYBmVN9Vib8W63gGCsq9L6DvsVun6dtrvB",
  "key26": "5wACr3C9NfGGGpebarP3DHVywpGE4ZYtmGcZ5HDkirhiWZwHEjkvUrVVPzWgp5JiF6h7U7RtqEqpez4ZXAK4vhnG",
  "key27": "QjBttp5Mb7wXwCR2MnpKZyy8pRBToRVWEtQfwM4ta5RSG1DeT86XTc8VtCfqpCQTnQBUABUaGnKJfwuPP5PaLjA",
  "key28": "2KcBurJzEPtFpzr9rMRgxVKch5pnChXfzgA1wUMnU9JDrcgCFumpQupSf4JGNZgZ1PeibBsf2bfCsuDmN5E1C2yH",
  "key29": "3A3y24Tb4DBEWPAJqFx5dLMJ4K76PeTakyP5N7VMR4BSUXM2V3XJacpo7MRjEUkweBLAJET9LdqBCLTwBhfEBXQ4",
  "key30": "5qcW3oWFyVWrd1TY8cQwGhGwnyGRfxkX9e18gRNS1yoCwmvCcK9bAUSxrM6vCHG6KBNVUb6Z1PMk2kqWHttdS3NB",
  "key31": "4sVuZz5A6koZpqxoTh3QDGpFHMBvbkwZnYKEBxaQtropkj9etBhg7vtc4Ae4Ly2LbMRs35J27pBbabDzVAAqnbYR",
  "key32": "3jM7psKHeLBVZX7LY27B8HnFZhtWr7H1GCv6DABM7z9EfiHWkPace2phbLNrH9ZKX4KZy5qQkzAfYcSoKvszNv4Q",
  "key33": "3u2G5adyGjKJMge8Dk8YEGztdk55oeQvSVKYHfs5S2QqC28yMDME41FpGnA9spQxT1nwVsBoU1KNA5fHqUpDEuaK",
  "key34": "2Ukc5DgXzPfaXFEwsxcZSTiCREAN1sCCaGxGtZmNfZK1pmpzkoaQZzBPAZNc8xbMVf2XuAM93v8HqbSzyV8FeNNf",
  "key35": "5rxmiBXWiGA72GUsczQjK95UA82tpwBum5bZnA72x45D6f4puPgTy4KDjLE3KeGDm2uvNaguprvGQx6cKQ3RrjCA",
  "key36": "3Yzzxg31ZnFNRCvqc4HAYzcH8pv8tU77pFMfKTPf6LV4KSjPkNNtyhRcprdRZekvnNLgmabJg8fKLNNJ3fBmWHg2",
  "key37": "uMDa25xDjJAmKhqhH8hk3g7qwD8Whjy6abwVjN9eJmFnGuU2EF6i4KmCb3LTvnoeHhfhVzH28P32aevW6am8nx8",
  "key38": "5sz9wfaFRtVD6mxACeTKgvjxddaSHV6pEKGZX8uKRDnbuE36rx418eFwWGNeP9aYSiqL8BCfZX55Uu1ktNRDiz6D",
  "key39": "2Pid15ZiEvFZhV7kEthwgi8CFg7qGTo3gxUPZsy8WA7Z9ZVuzjkH5BEV8S2Bh4RJZ9SJSNwn3mrMB5LovCPRzzxZ",
  "key40": "2637vcQbm4AZGTLikjDyib9rpc7vexaj6xDeVKkvuEd7kzU9odV6mriTyYCYn9QSZwJEKFaNotePmtb2K5TTxnJG",
  "key41": "4ndHgDNwJupc2LWJepVHS1Z82ob9pGvHseRoVKPPVzmYi1XvdA1HrNY6RhEp4vrq49FnpaNbbDWKWxCTG51tH4hz",
  "key42": "28VNrK9DZLXMbKzv2sLVrTibJBuixQP6VV3Nng4Rhn7xSPx5qBesgwVwtiXZJ3kAyZB6Z15dEjVsUh2btQNAik3L",
  "key43": "5cp3yg8TaXjCchMmSJKT5PLFgcmWWGaCD5FnQ5ASQVriF8vHFjsHbJRfUaDnWVpFRdw51RWWaGKHYbusVGG5Rq2L",
  "key44": "45GXHNiwgWkZhS8vpV9cfBG498E9sa135nvMpt8cf3Uos4azbxVsc5Ty6bpzwUKCsBsivzU1G8eNdUTXYuwbqMPs",
  "key45": "2Netb2DZWvWMUY468RqKcCB7rYp8pWaLLFryozhAP6z9FyzT86hNVm4FwiPN8x6ix4NoSwqbidLuFy9wxhRnUXoi",
  "key46": "AgqNmmZzBb5oyefK59gaAzrUabwZCa1WDCSCPKsV5RaEShMbLJbFevCS3rhLAjB9CLg6pubLYQBTC7WERUzywgU",
  "key47": "FYS1hkexmh4HMepPabVPJHnBwKsJTwLbuLK9kYUJdxUyMh1kmxhx26jwoDWpv6umnpRK5APPpH722PD2MPYvNuV"
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
