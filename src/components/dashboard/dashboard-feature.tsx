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
    "3s2FrFx2esSZ2tTSNrbrUxjekQZztZhjaZ9SgDLPwR1v36X35rb4TE1iRkdEzG4Rcua4g1sRvEDGknJhExJUzG3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oFkjeqNNaNRU8EPympM98g8e6Ls43LmAZ1vhmbMPUkD1oWiQqd6R4thwYqy2L5TggELmNdXmBYkR16dqFTQZLfz",
  "key1": "3QembEfiejdNe8grGYo6QrN8fMtjJcHwr6yBWWmicnxcWSo6xgJEirUu6q4PSLMfM5ypDFzMECD8U8d8U7QNUWy3",
  "key2": "5WNCZbaNXUpn99xYH9XSGGCjLvG3g5FX4rQHUhRLQ8gfYZyf8orfoj67yzrf3UNJWhvV6jgfdKAuRmUgwPGXbBTZ",
  "key3": "YPdzmxLYCjRivkRUV24gG48b2fy3CPeEfo1rkhoMAPKccn7PKdBfghgMHmyKcMimMbGjWgQRvWqm1FXE54w4jqc",
  "key4": "2Mn4AVvcqTxiA1Fbxr32zKJoVJkNKqJsexyJ7YewW4rciuHdZyDftJCB4RzRxc6Y1xMjdADTQXBktom3dPtmEucW",
  "key5": "2CWfiAWYEm7jupybipQCXt1W3zxfc3AUDnRTPwrosvmjmndMtsqfJ6W27VYqSGub61bjUmQUmpWQHHn7EQGnhTvK",
  "key6": "4BV1naKL2vV5QXRNKGSngTjESRsPLuRmhnDN4Zrpv4WjSvV8LM4esqNSKjGa7Y5PLgfG7WoKf2yYEanb2gc7JZ67",
  "key7": "5sW9qiiuXrUs9sL6DnYbS1JzWrDWf7eKL9kLndtqvxvGsR6T9oeSi1Uxj7KPKa5776K5gkrkneM7z8oBzCcRHY7g",
  "key8": "5eQ8aEUNd5JjfStA322fEceVryqCMwZCtNpqumssoKc1DUzTjkP4SH6ztdEF4762TXRz5Gv2vYMeAkigvFHnCcoy",
  "key9": "5GWzowueBS4dCVCkfuYcTScPbWfcwf9QoivNrW1G8ZdJpDykGQPLpub3JR2U6AhrGovddZ1PuEaahZBnZZAPHNF5",
  "key10": "oW1MfL2jQfevMV4moHJLLCghtxGW2t5Vf93dL8tV2FVKF3ZTs4166kZGSMZthy22m446Y8NFk47X9fMtZhzqjw3",
  "key11": "2RSgW3srxjSUmvPder2QmFtvvJhmbtSZ6E2DskMT7cgfCwAk7hHRngiiw6VYTDZ3WDynA1VFXuR3kvWWScerHb1F",
  "key12": "2ACLy9G15unU54KidybLf5N7stpS2Gg4t4qdzLtTSV6Ead7VHj72PEvD4idu8w6jqvs5m4MchKYQqqPZrTEibWTw",
  "key13": "3mWLkjLcjoj8iRzSqtNfy3WRgCZi9zPQt2zZ7dVuJLuptPK2xU78YZisdvLQnjB1uRkm2GaxxnJv3xpu9HaYkbeq",
  "key14": "2ZQWzMQKZPWVWtcRVjvKg9qgJbo7SgU14jxVWBEaNin3jp8BWbioVaN18vk2avHDz5evxTPGoqrKKW1sPThiaran",
  "key15": "3NB11rqw3BcvS4FNg4e34BK16mNBzQWefLTxhYw6TPeqSYwbcg8WH2jggkb6t3uh1fTZuL8ndGTLBLY48Bc4xUQC",
  "key16": "2WFwUuen9Vw5Bu4wtS6VqDoLBJBbwZbW9ks4Qp7fSFxd3JpznL4MChGCTP95ehxSiURt4QBCJuQ55Gerxqi3SE8",
  "key17": "62KWgLfRGLWKLJnUyCXevfmtCD1NPw7Y8z6YxH1iB7sbdSE2s7XWPeTs5oEAMBTeSFHBPRcQQuPhNwu2fsbFdegx",
  "key18": "2Dki1j3Y1Ztogigs2nuiRfRnQzaHaTmmjpt32ix52AqynK3Y8o2H1i72L223bmojJaPPSYd5536B6eismGQw9rr1",
  "key19": "4TQrenPfAvzKrFMxyccrVkhTouBF6KhtG81ofiaDA94g3gkjS13YLYEyJigmAzjHV6qmWy34fzDei9Hh8y7M9qR6",
  "key20": "673nGkYN32AexaBHhrDUHpa6vcL7wYpn7LC55kT6GswRPd2AthxsrwkxgyLZKh3DqwCKB57CDnycXEYBAReHcF5a",
  "key21": "4wKGLm1WVRo6esP9rDu15wueBLbu1G8REaUDKUdow9exfxrwBr9YhUGMiz44vz92s3Bx5omqk3GpuynveiRPun99",
  "key22": "uVMHXUGiHX2FucVQ36zzU8uzhDc1Uxtp9272gVp8rXPrbSct6rHDaCvFsmRTrisSDoyNDg92Nc1TZwCWs3LHL2b",
  "key23": "64j3p2fvZEcmTR5Q9eSTfb2bdx8aPNmhNsZEgy7KEJqSMYT8MBe5UEa5WB7DxjnpDtj6FqtrAgCNm4quYgbD4PmR",
  "key24": "yTzuDYJcFQDPpAyKdahegAVs5NdtxVrdRoCYRqnNzc8ndvuM4rUx47enKKvZgCqbadmxYc7gdUyPX3PCyDWZaFs",
  "key25": "38rAM5onyfC4CckeS6LhW1xgj9eJF7YH2NZC1Fa9DuPVWQPdVG8FrnGR3ZsawxJzGKUnTZ3GVAtZS1X3gGSbfbfw",
  "key26": "4uF7haK2t7XzBG9Wkze6ya3s4A8egfXCxvWxjAMZ5rR8s7GtrFgZ1V9916o7ZCifhAZPu4CRLfQbPvr3upsHfZYk",
  "key27": "3MYKWE5GKNFhVr7Ve5nA9pDAJ6GofJ4LnXxLMYYdZUeWAdhBkgzjFprCttSur1BMcBMZ78YVvG45eDH2gJ13QmEM",
  "key28": "YM8jathdoG6eAZvKkv49Nr6BuFDm1kV4T6yj8zawWrJCvwwzXVFErhH1MtU97yE1KZjwc5s52zJ2U2oXG3JWjm7",
  "key29": "53veAGbW26SWqhzVyqmJsXaPw8rJqFvzqT4x2LQZeUqqvkK6SRGefCfbjNLTtsfyi8CDEKJL8T8gmtMKFPJGLQuX",
  "key30": "5sUR31w4WZ7wmNzzgFcR34Q4q1aw8wAaaf3vne5RTjFkbsFKdRHGHBVzTEMQREsHijTntThTSxuyBaq9Z6NKiHDr",
  "key31": "43jq3nd71VTg9QQK78KNe2VvvWMDkKmUqBPnrTLefBopedM9cwFdgJv325NVZmecbo1CYiE3vamA6VZ7MSsD3hbB",
  "key32": "3186PWPgH5ZYsjRCvGiYC4zkQrHFkMunyvyrqw8vC5DmRS7VQTnQf7cDiAQhVuwqyoDSHtEp3BHu6nUBXMpuuGsJ",
  "key33": "5Gy2fYqJaQjyAs2RuQKRkSZWcDtjChcQ83Dubm5Vu6kUTNQMqm6sYRoW1ibKMv2MYuuJ71UmaiwCb1z8e9H1RWqT",
  "key34": "3hSd8nvu5hmRLY3d6yudiMrA1xYDQYfsdqpjCL4MqN4gkrLE3JFajuU88G6CpHsT3n2TKyhiMbhaf97YKkLYPf5f",
  "key35": "2dqoioG9LzBWVM9zfKDwvacrdLoJcH2gynN71GsvJBFLY6zT3ukFc7dbjKs4EsoSG85Mu6CNDRTNW7tXbCSKBoMT",
  "key36": "ADkoDeQAHu3j5EVJHgDQUqUUdzhYd1Wsy31F2YrJ9NBwHBv23cio8JPPQXTh1BvX9rn6xMpfCvGT9Qm4CGE1iN3"
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
