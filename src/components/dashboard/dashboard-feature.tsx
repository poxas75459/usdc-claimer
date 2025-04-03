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
    "3g5tcNu1zPvyoXziP6B9uazhPkMyLTiofdU4ofQWQHZrx1dTk2NSCkx4uiuymUGzuzsbfEeSxSDqBShB8dPdpWap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SKUsCgkdYqtotVhppANtX5tNKW5kcJbcLV21VKGzLtsSsKqnwJTmjTSGP6aojsZw51eDiE5jk5kPVwf11dhQfJQ",
  "key1": "wf9iWbyku39o5m2KtpmHMiHG5QoahGsgnqiSTL3VKsWCrXEWaWRPpxvB4GpnuYr7RwiioRF3F7u2yGmfo57CHQH",
  "key2": "2Lshv1RPvHMuWycLYhxCL5fTFCGtptka1tVxPQNxonfSQasrqycUCCccE4hMJETaex86uPb9VMo3PHvmxptdvW7z",
  "key3": "5HPNVg13VaZpnwXuSygkPDPksmGjJCqf8ZbpY6iMmw3Rvr477Uw6jR6tqUPSYUVVZLkYQ6Quz9JXFKWjZwien8mp",
  "key4": "54bko7NBST9bghZdw9WgqDd6x2rdjJHb7xa2WZUadcHKvJB7k9xespKBcUKRk51eEWYwVVJGG1Rz5SfQ89Q6Q7ut",
  "key5": "22ADMbS2Ve93vrZJDaurGtFwoxtmR3zGH6yfxxg59j7SZYGiMUsUxryS9mbS1VfvYHNUR4SJ18Pv2coYrS1VKAZT",
  "key6": "58NsX4BdJbfaAxPp8bPbCgFx8EQ8YW6dTut63QsjeuqEoWeaBewYUHg6b3svA85mbR2EsAcLXS5d4hkFHfRfci7M",
  "key7": "2HRg3RGvzYUg3cAYQxN6zNCSGrcxp3vevA15vecWNG4NTRxmpfR9hUdsH9fhSgJNVb6nTPunm7rApySkipFSf8iR",
  "key8": "2pvJtLVVgC6c6vWFv4TcXjGpXERHhQvoYs97gdtVCNr4MvDMxsypvfvhidyHWzWwg1StYMf1Fq3UK8vfi2RSzWnL",
  "key9": "85ZJ73c1pZoxCdxuHxwyFQ8A1Ana6YjSobyhDciBwFtpj2oheWSX1SQ5rkHYW1W6sh2LYvpQMppExGs36ynWL9e",
  "key10": "2Mo2XC6QtSkGb9e7qezR9Pb83N3Cd22GUWRZc64meCV61i2cge8qShbmQ8hnameupP9k4WgdoCcKgfu7RhwHkXcT",
  "key11": "eaAdRezRhWz3wy7BRX8JrJGsb3eW3s2Lg8cmejteaNABxen149xKgcP8bDiqYSV6Q3QuYtyjoZRzi3QJsr9j7aY",
  "key12": "3vZLAEVhc9yWCxigGg7Asz9M3r6GEGyTsyqse2HKX3Ecprk38HQxWquwAt8zZVXuCwzZJuADM2B8bUj9fypwk9bE",
  "key13": "35wvbNi77MHy4qgoHKyetY4AZKufi4Nc6aeSJgv3ABswSkzoCCg15hVKTfMsnFT3ciZBq1rBT657CYMJgRmFbWNc",
  "key14": "48UZAxdoRjxvi8VgMdJogzfo8crtsy9eZNxJnUWm6r5U2iRvbT9nn9e78cQextYQ9GCrgE2jVyCvk3xAReuSWSce",
  "key15": "4NRCF8NG8ePTCuKwfYH7dd3uBtuKSiVr6adEhgfjHqsQ9GqPbWxAKqEeCkLfTD6zMT8Fj3UrbSVJUtnNJou9jddi",
  "key16": "CZyV5YYYWR3Kx1ZBMWa9esxxHrDjWLV5uHxzasRM3pu2FArLsQw8tQsZkDMGrHNtPK6Q9XXApATWNnye26EsQSs",
  "key17": "5dkVNkntUquimPhEGaVo7sKzUFwheSsDiq9T8LCpPD58hPZ8WcbaJ43249sX7dzX14WKUSnACZRJ6bDM2aq6UtVh",
  "key18": "4V9j78k2XdwtTd7vg1k1Na8Veb8Vcz2XHY4TSS9HYY3ePtQoJFMwjbQDawCgF4qpeKxF566VygJNeZqgYYZNfLSH",
  "key19": "4a55bNnpjYeAGTkkWBeiys2uB8fmiH1m1ixDdtcxNa3DPFTr3ZBCobu4JRqaqfGA8RmhDaKsTmzGNYzHnUT6HuUr",
  "key20": "5VXTQgdmF64u4wD3LjpoWowMBExUrQyrQ9hcqUVmqXC2YbbDB3fRswsB4szkSfoHyToSXE9FAuT1roqnRNqEATE5",
  "key21": "2At7SC8TCwgwSPg2P6VKb5wZ46hXrVx6tEATtdfF5K96sx3YiQN5Tm6YLN1oUrT7QAPYynsewN3dvgDxwJ5iAGtw",
  "key22": "5MGxgHUmnirgqKVf4bHRrBXJoPth7RGXFyi4mfwjZKQvv5eM7Kwv72eXDM53PHuy5fW2vzak7nYKf8zoSzJPDZ8j",
  "key23": "2JBV9miA7V92E6H9vgmj7G7qVswuhLFHgEDwTS9Sw7JUUQSGAgPf5uGnFeT1o9SMR8L93j9LjtMx72PMQJnYgshP",
  "key24": "43mfRw66AJxdEYPDqz2rjUFQRucTWQFk8hgRTJkBnVLfksmb32feQXZruACC1EMzmU35kCufsQZc9nJ3Ni3SGL3r",
  "key25": "3BdPh2yY1PuT1XUHmMpr1TmXtCvkpK1kY5qtMihu5jQTC7N1aPVk8yAZM53kprCcyg39cWQJ9NMTaTkVKtiVk8pV",
  "key26": "2kwfHatghj9iShNonGKP61PHtBgXsoYHnUjPsBakH5NWqRqQJDJG5naoWo35ZyNLErDb5Y6sshKhrYLoM2GG58TV",
  "key27": "4GRetoZMcWFpMQkKJrGvUFsUsy6uSsuFCeq5Tg18cuu1ABRzH6Gwpu2nCs1VaFnMJEzCfX8CSgvtgFta4eHQffsD",
  "key28": "674pFzwnnamN2V2bozoXc7xBsAJiEbJzocCM4gmJsL6jCinNUQZNDJtkGduXgRuyPVbkws1Zt81dFZGGSfqivyot",
  "key29": "5HXUaguptEU6MSWcDdGELUw8CiQSapz3aCDE4rQC3F5sjQ85bWREJsJ7rJCnQvvVP5fojZ5QtAiJASrWW3JUMKix",
  "key30": "394ba5UrPqoh1zQukD98erHA2oBczkyU7pwUWVDaBoJsXmQc9wk5LxJyYxmNiEBdqLN9gpnawTN2tbfhPFe1CCiw",
  "key31": "3rWK7kTeEPJfgfTrg1P6VK8qi4VUT1Rr1LGJ4dCGVH8SHPVuZBfpVyPBYhQrhBVj9khbxpBPNgjY3uVmkEGiHS4z",
  "key32": "4AicWfqym8Gwf5umKvaju5z3LXg9b51Jcq8SdVeeUnQR4ktwD2XPyuPb43Yqr8eQcUeGdhS3Fdd2gepbmph2Thgj",
  "key33": "3dYZ8RSC6k5RHxL2g8ANVuxbetJb4Kin5vKmxUDeUeGHY3mgxCgwgbCJzJHrQAkcURsLGPtxpw9ugbVo2eppY7pF",
  "key34": "2VBeb9kfLHT39Vg5xZmSDTCKNBDsamKiJ5L21jgGkm39MjYUtmQCMkESJeS7MiM4p1f8nwpowXsQmTHMbR6pGJeC",
  "key35": "5H2N29UX7qZLrSjvbm6FRqjqf5kBJd7tNEZqBQ333P5UrWPay5rAzhsKtxgTZo1D8679hRDd1bzWenMP7qKnY3Zf",
  "key36": "2jfMc6xaB35Xk4pvefv1cJEASjk6oKmvk7rcZspjNrHYg4bPffkiLGXXUPsSJcZJB7jz8wXMZSSqYz7zdR9qVjir",
  "key37": "2bjMtpcbVTgqGQE4u3UMo8S2EUMkrrKqWVxS95yQUYuhPkKEpan9pqetVEfgX9rEGMRfDWZprDicwzasUTLxR4eJ",
  "key38": "2fX69DDd2qRcnLDuscVaT7efycZA5UDSA6o3t4woFxamonAaijC5UvCdnKzYEEhVHAx4RUt5P4EuM8Su6nytuzGm",
  "key39": "2m1vbEdFJ2UjB842YnsRakCP9LTP3vQQFhJYJnN1LjtoUHqhAY1emSpQYWPJ7cKWcSkCkphdKkMKGdRsSgeuAsxL",
  "key40": "5NHCvGmX1Lqme1437WL7gprcGYc5g1RSexR7kte6QC7nEcmrdzYkrH3u8VT2HXk1kRU7L9tADMGzybAyX3SB3Yzd",
  "key41": "2rphW2hyUyoYLzeXwGK5nzYyg9CNew6VGeUhG44z4LKSy5tb55hXiwRLHZahNkFDcEozPPrWKLw9y9CpAQHxsGfx",
  "key42": "2DpTB3hyMv6z4v82NDcEKJhmWmw8WBUFmy1FXcoMPA9JiV3i9U4g2ynKb88eCa8aTXCMvHgSnZLeUA8BHNn52qNL"
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
