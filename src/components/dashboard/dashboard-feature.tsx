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
    "47JrDxVNMtzmQoRBX7pntAmHoZk4u3heP6GmTKg4NP4Gufe8yvvPcAaywrVqSecxS3KE4xgjDQ53gdAr6zscd8Je"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CS5w4DJvGHixktc3Wj96nuXFscVmSc8awG574DsTD4JD9QqNUCnSfx1kU9yANr69xnxL3kA3mp9Fa8udm81bUVc",
  "key1": "2U1VmwkRiUVqjF2y2VcTfEnApKz2rJbQrQD3H1pJs74bSgBhoeixu38UuCkwqCTyz8S2px2SjUGpk5fnYwcRYcXH",
  "key2": "3njo3UErfxApFPATERrfHEzG6pgwaWrrny7mZYAKEoWfUEnpo3BUFZ2oaS9e8CbLoXxMctTekrXrhrnZZQ8s1E6p",
  "key3": "sJ5gAJVD2LP4WD8jd3YxDD37SrTXvmJgQRgVfdBRrkYhswsgp5TKeR86kiiwdyarALDtAa7nzqjcujYsRyhF4Fi",
  "key4": "54APz6c2g4gJhjNPti8tBjU3CKnnduPbZSBMNeMs6JLpsFYmGW9avbFr29pEG3udxRxrmT7TCfRkwyBWyydM61zE",
  "key5": "4CQgtL4o1aJXHbLAfGfv18KYo1imH84WjSSgUYj3eXqP8xpXqytaQfDhRGZDbGkYkAP2fviW1tevDqRbykST64dy",
  "key6": "41D9CACBC7Tiv5hpvxfKuFgE4ZvVHEsDJFLR8GP9YDFAA9AWV9ZfpBWmrQ4HksWKQCHoTcKgSvDAADbHjh8gTyCU",
  "key7": "3XDptqtuV5517hEkkeFvh9dZKD9VdPzVTS2ePFYSrqeTy4wudeH9gc6r823r8dfqV8tkhD8gbybQ6h9q97oR7VzP",
  "key8": "u5QNYoakvspGYDtvfw8Xc8svPEkwutdpgwu7be1a8w28bfyaR3SDz5KGQYT8cQo8ibfUJ9qgS9gioaij1A7tqeb",
  "key9": "FAnCCXcSnZvfdEsasZyNp71KxVXjPT6udP1BxVvfDHjbhKiL7h7fihihmZPZ2LgBMT65LWfQ6DoNLn2E4JP6po5",
  "key10": "4j1pQf9MYYrQd91dbqePbhUjVY3Put3n6GuAxpfUncmBXRGwmmnvC6t43wFSnkBF1rbLhvBfX1rHMwNNbWU8qu8Y",
  "key11": "2s4SLNbanbHeA9k3WZu2oBeCG3rSGKwgWqymmpD6X1g2qNdCNiika8UMKr92Zn6T6VGq8jXptWWQGr45X82yvovU",
  "key12": "zWf4FJhjtMvt5MrogspdugT9JN3BqefhLsTMKZ62E7X4KxBizgAHSh53K41SiRS9NbaWtSQAeypk3G9FRP3VWH5",
  "key13": "5CWrPyWDiqKxDQCoaY5YhMCKCPDZvGtEKGuicjFUH5AbF1ERAMxUuj8JLxMq9WEGcRVHSTHyFDHomUASiZCYbhb8",
  "key14": "3oXivN9yiB4EQkNgi1RDMSxF6Gnw838TUotckUt83WAqr1nGaAKHperJCLdwveLKyRD7TjekpP2BmKJ6QPWH55EU",
  "key15": "3hBPdbnckVG3RANRzSiFbcKZyyTAeqbQJohbej82nFMQM7EJvU4AxtAYbNomhCPr33uRtfwCoSxFvfSVCJpwG11",
  "key16": "5vrZpoPaHhK8iiDWYyUA6nampwnMGwS8XXH2FUhPwAsVpc2sSkrUK1xCffpvwNprSfF3SguYei4e6Q9rcDmN4MVJ",
  "key17": "AjKmTntJzfXGxJmnExJU4GjGBcCJvx9rRMfDAEercifK9uVCAFfKWH1f6nZ9fFkE6gyryRgXY1nZt51xhZEyHTa",
  "key18": "4WCagWn25boEmDUG1dH2SaRcy5Wh27gYUY33Q1pkWqehfwZ9N9BfWYzMMVEt1rbGDv4Y6QaPYuCHKq1HAtxuxtCE",
  "key19": "9nX2sJJwaXy5pM9qWAGdg9M7xLThrgFUT5kH41rhuk4pGAXketKnwHAavMEzPms8ewtmLSchAryFWGtmJZGK1X8",
  "key20": "4WB8d7pN17G4psfKhRaiwCC4q4Ek1C9bo4ieYNctiPD3XoWBiYNVojcbnTEGgdU3V9yvbLgFrbLkHabw88KDwXNy",
  "key21": "5ad1KbYa2HRGSd9oMx1LSRpViaRHEnNyrkM7eGvW41fRbDiBwdDsc7svmwCLdyQ1Ka4XsZBBf4VZtmaq8SrzkWUw",
  "key22": "5kuzDm3eSQwukviGDZvjDRbwczpCWxh85kjxYnVv8TQofjyJE3u9jAp2rXgGeuYZWDBwJXMzEhJo3siUvu1kgPdM",
  "key23": "3gfKKZ5UDCQTRYKqv1yd13QpHhg5MuchUAuXRRZss54BGG7wdSVjPNe9L3NNzdroP8Tzg3tpCGVC81ux9Ln5aK4k",
  "key24": "5wiH2atuPiFQsUYF7c8J3WgVtq4f63W5g66mbBTsTok28A47vV7kNssErQaqpbLjPcTcwtWBwPCDcZvZ16U8ZPHe",
  "key25": "21CsBjB7SKt5S1pg4QniAmaZi5SQHrJ4oCaxxzyu1upGSXTZNpsiD3D5YSHrKKvEBCy6Nv1DdXYfWBzWV2fxq6Pa",
  "key26": "65XfuogVtVoyPXnFaJwKer1degLSWa5XdkoMcyRdArq5nMmq1zKv3Trpjdna4SF81G1MgQVx9Vy5n5JB41eyavXf",
  "key27": "oAB8zWDkMBoNYo5AYRoNmuD8UepJ9SCrpsytUcWUtyqGHnSzM35g2EYBcdtYgo2JtMF5wPUWH3rWzAFjWQiFjcq",
  "key28": "2w5W2raQ5cEfBZo3j68wUHetm2JXVbBKw6CrDx1GwsST59fehuoNAuF8pjsHfXLMCfpEWApFtVCDGGHbebvxDcXk",
  "key29": "xM1hD4b4rM1HqbQ6L9FPR8BkouBPeoLtrBcShBFrAUoNX6ZkgCRmqYvzRf4qkyf65w3NzGqqmToiZwu4higmFG3",
  "key30": "2Spbe4SK3NmFQoD88XuBJaCPLxPhAptMLmB6qxALdnxF6ca92hd8wNZ6awb5uqmkyrDxtVQJGCEscpgATp3h7zpf",
  "key31": "HHN3HgtkfC6iawRKz9BzivpmBEFBpdbzTutm5diLtwWUF2evQEoNEzP1MgpcxVdN9VMSL86A7F9SVYJ88UznQzy",
  "key32": "5F62SXTJLhnrsVYeLXCeL6N2HBWtqQKaBRK9U9WRmRbLXRCGnD79mid4y2pRecuCisjrQYtEbxq4HqTwt6HfjdeX",
  "key33": "XT9FYwEhUtWVgFLymxRbhTknuJRpXaNeA7X8P2X7mNttiq8WTkWGV2PuM3XckVQtoLRcN2LivH1aJg883urLEkC",
  "key34": "9RPKMArjbmeCJLTWvATWaLCb4qgm4ig31HYbNBNmjCGgbHeRe6dGbrmvdWyUv9DN6waeFmGNzXKRyJ5pcMmZb7N",
  "key35": "2Qxhei95HARrKTvfHgBjt1cAT36oaiFuzEzkddQFiao28tTcJ1GcJZqEZ3VhgcnKon967NgHhqfaQuViAwMQoZh9",
  "key36": "5cdvTBfYhA5RTE8Uz5LCk52DnbZiy3cDVkak9XS8v6ub8czi8CizzKKkM3a2xWqYFeiQidcCLx9xPznWftJPcS9V",
  "key37": "3v8iE6BmT6rjw64fX4enMmCG2kAEnwXQp21j3ZVniC5wUkeaMZQb4ZJz3sZXU6gWAZJhUgP6VDAPyWc1FwR9kYiW",
  "key38": "28zYfJFhJDb7GvWq4kzaLNnnSkVVmXUXE5HfTjdYzKv6LJb93Au8B6dJLLnU7efcaZbZV21uPH3gKVzx7rWjCTZr",
  "key39": "2ShhwSHDGujDJaUCsE7BsARAQaGh1tziA9ReoY7GqSaRcVFf3hFZZfHTfztQdGrnJmEAbAmB2otey6LTCNLUcGYN"
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
