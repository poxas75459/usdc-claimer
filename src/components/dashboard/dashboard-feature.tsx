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
    "74Z5SwyaG1KcYinNdLpvb9oJGei8wYkpch2fRszk6iskaFTg2A9SZfoNuAC6B3cr6ua7yyPaN2rKEpyFkBd76Yt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RBHds7XEn3Vm8LXSNP6PqxCP28AP4fRJuMDKDKKmCrLqnpuDYpRVYCcbuVrf1XTgNToPhj5hgi6xvQ9zBwpHXSe",
  "key1": "3iAnsb8Yrd3mqQ1BgnpCBBDtWwQBskY99brHvD5hQqURvKujGTg8db6ydTJxtVxQEkSb8TQonS3G4UX2fEUfVHFL",
  "key2": "pcZqXGAsegsF3Kdm3QUGej9AQW9x2zhZonP1GbUDw2XQ9FqMgsW85NHaVcuFb55gNheGxvLAteXzy1Ty6fHwW7q",
  "key3": "5yVV2fBiiZNGHaWGxARBVtDky8GuRaMaf6KMhGmwHzjF2RjqjzqLxhjy14fJXye3S7HNAvhQjhNEANHkod4Sx4vs",
  "key4": "3bNiFeMtmhToi3A9XHJEK8GdB6EtrB5NzqUcPJhfHbnZYLt5J6HQEvYZLURx4evMHmJ9qdXs92zVvC4ZWQnQJ175",
  "key5": "2VcUFzdbSY7zjx9xDp138nagk7hyPU361q7az3cGF8LxAkebUttVS2iBxWAEwo4wNf4QUNrkuyXsfZUvXpLYMT7L",
  "key6": "4P5ZuPWMGYyAs5WfvNEUzReGikexLz4uw9E7hJ8hPTgZFPvPnPiAZNaPb6wFm7F2huXXqwDXhARBbuhYbtHum5d4",
  "key7": "4z8rLqU5XaQnVp1ztWMogrHHSsmMp6LZePgyqZUFy22ZocnBimxm6zKxUV556pVFL8xuwRDpoQGm4ntKwyxazabX",
  "key8": "3MgMho5CcUDxqy3VjsPyVTgNr83RxgXYXmGNAEc5Woxxsks5xTmXPNAwDTjzUKuS6W3pAMmtrMJgxbq4frHy8oZH",
  "key9": "6ARDuP9GJUPbToq9kG3wcyChAjKc6oc1KroQZf7Y3vZe8ihLHmtkYfVFrmJpGYkfcG4DTSXpx2pyeCS761jNCpT",
  "key10": "4KCyvh853Nyw7dqivtAaq3V2ccmeNeiMQsrpjyUz6X6iNhsvfqJ9nTQkvhpBQ2dzZjMHfGMjc91PCqeVSSvuUWas",
  "key11": "3g3SHYKNfBFeRhVHNkBZqnBBZDSrxVDgeLnmuXAhGdfSESeD3cE7wtMXAt8iXdTmY1JuMYUcfGLV6r1P6q5RsBAS",
  "key12": "5Hd993iVpbvu5UwsFuAx4YPfG4j8w5gyedc8fBdKMZi1y2VN9fhDMZXErjSSHwK8R9cCT2sbzPnkXPn5w5VQqTW8",
  "key13": "4UUDenGuyfzyKV7J1kDe28GcWA2um1NSqZSBpuMiLvguMJKyEXcwh4iST8V7oXpKqtc7wpYGKsRYjnnuwchof4Ce",
  "key14": "bUn6CspoMhqm5hZZTfj7nJuz4tVN62eUvqocNjGhr1bKELeVw4DEXBUHSpu6W38d82t3im3xKJDtZ7QyVHh9jmc",
  "key15": "2u3cefuDxDJAPAEQofaNTuheeaZqbC7J4g6Ed8uW2733RbzZP7iG1rQyeRTVneL6FBRHbP1FJLfLffBYKs9GeUg2",
  "key16": "3YLpF1gZt215HdiPi7TXLkjaoM5MDeuWV2mcsfjLNqarCZi2Am8LiMxtWN5gUW1TAwxJPBuw63RvPgpt65GeWegJ",
  "key17": "3ZCB66DDiN7BKLRWvMj7QQ22HtWbzfk2iz9cKviPNtbPGEEri2egPtv4PKyS3tBwqypK62dk9RRMEHGtLiAT7QwV",
  "key18": "2cz7WacuNGQisKaHBqMGKbFT8b7hPAPp6JvJVAdceDZ1i2Tn64mdHw6jnRHkmnfduLkFAvWJkq9BQrd17VMj93iP",
  "key19": "637N4oXQMXKzzEoiJJQQbJy5YRowjmoQwvH7BUFGc1p8KVYeaGDCCYYot7gQ3Si3Eg63hKBZ4o6PYMQwMepcJRQa",
  "key20": "5EmDgFWyPq36LP8HjbYFkQ92hUqqwmChFNj5ExXVY887kNgGq2TDwQ5B94NmuJ5b5vsu5jrcUi8cYyRcMXWgkpFD",
  "key21": "3tRKATjxVhv9NBsy6Jka62rUSUd5jJzUozEmz4P9kimAs42ewGPtXDpz4EaG7Z8DrCAc5Y5qm6vyWBBCiher2c2t",
  "key22": "2sHJBGiDLZ6PTu62Ghsvmhu15Tvx5uNv3CHFTG3arcH2xYeUwEB3V9iLJDwb9jZCdhWCUzLDQNgggWD3feC9qhE",
  "key23": "4tZMDRWyf6ZryPt4gB7xgwNuFNgMQwsWAXaBHzYFrnoqrdUaAapoa3LAm7vBW8jp65VMe7sHeaxJMyCzH1nYNwLe",
  "key24": "57DgntJeAQNpN9U9Jj27RFNqXGkWtPzcEooJbzwf23RtKRUFkYoLLx49iKR7nfKK3qhAfha4saG24y8LiycfzpBB",
  "key25": "5pL2szChHGZtPYGGcdM6HzkhZca3L25HxCvRdYrJEtJqRUSQHNBfDBaFnaSvPkRiVj6j2T9eLw5pgJuse4VR5WNS",
  "key26": "4ZGWBoHDASzvXNu6gPXa1byX3odZobtRQnZCm7zLoNeDbLS3mmhzjjh5MQQaSh6qpe8CynyDUZmBTvatjdiWhp3G",
  "key27": "5zsT51vxZCQKQW623LTkQbXKshGxMaTnRNETDx1VBbLVph5tayBqcJcPzvidLzq3E5zBYR2TUqAk3RTjn2hnGdrs",
  "key28": "6FgqAErmRPJKeArjyhSdB9MYgWXEq6jvGkhuvLJ5mQWVz9mFYzYeeoLhsSvPQxVD4Ln6NiA6nQ3nAE1eyhbTQcb",
  "key29": "26NVsvHGpgPSUCVpTpQ1UrzhbRJBandEtkfmM8QnApRBhxYZ9XStkKyicGyxUmJv47XEBhrHRHvPuGahY3YpKDM5",
  "key30": "5ckgHhEBrn8kGjr6RT6ga7uoQo39PwvsCYts8TXq6RCHqjWXHMEt9XFjcndTKXBGKP9nJhDYx2tiCvAUN7H6PaEE",
  "key31": "eGHPCa1L6p5VrUUb5z27ZjVqh5UWRWZvoZGi7d3rzytr4VK4hAgiEvqPSp1QUxR8RgC33mKzdLjYXMycHouMviB",
  "key32": "431Y2JL4CEDZDGgykpJA2kXFokWrYqvMTwQvBizXp98TgzsHsWDGtrcrjTUrSQ5cEsPGtM2qZw8XiXEpjMSE2Umn",
  "key33": "3HKGrpfiAo1NEFtXK65CjQRZv5fAoNU3ZnEgFdqYg3Yzf6aWKbmXtFmzDvHo9Y85seQUxaEP2ZSzdfhLXoYjwTyQ",
  "key34": "2pruubrN5L1koHKTiyzMrY1ZdH3jsBUVae6g9Q944F2B3rmod4ZqEkkVxNy2goeR6NPsy32W5Go1wm8sjWo5iXTU",
  "key35": "4jyuGvoNBGCG6hgyaafifpNxPDT5otyzd6fXWeFJ6zgVRdk8vbwUsLYKiKJmNMwK8DMByHbNaTmQaDzggDcdPVfo",
  "key36": "VsrbjpifrSpiyCxYeKT1bSTnXiATodJj621923qM8qSRnYc8ZMez11WHYg1w4RPJzs7sAG3oN9M783tKaHfbANs",
  "key37": "g8zvZpNM2roDLZemPsv9Edsgak2oQdn2Be1rB9XDnLXkhKUyFWKaJfRNadFSXvMYcQke1WakVBSdV1EmTdMTCrv",
  "key38": "5fJnEP313QvyHUJj58qMR9xFtNhUUyDU7YonHj89Zr32LCdGJwqv4uEYnuLiA1GbrKpNdZKeDhEsYDCHrdpE5B5C",
  "key39": "3GUMNZYQq1yYd7vy1rpa6ade4UcZeQoM4Vzb7JPSd2PP2Qe181M3cNS4p5jzPmvjXf8w6eb8VXpKJuWao8ctwgt",
  "key40": "5ZTUQwBgVdjEpfzYMeWZW1ndzeTJufdMGJSnYyf1cJV1VVT8Xhs9oaWTXEHrRnH8648Zu8wY1A3y1tK88Xrgu9gU",
  "key41": "Z1uYoSNSgtZxWXWFe9BBcUiCPxXZqGSU8cm8swcPYa1VTVmU6tUYskncQoMX7YyTYBgVnFWFPbMuUF4YE7HCs9s"
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
