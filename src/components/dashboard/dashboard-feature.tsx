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
    "4FFVrg31W8oF68eY4D21T1VdccUHeXmPbrMftY1LG3dRhE3hvLB1WPSePzfBpFbihJVLKKX2h2m9rtFCzGoueKHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h2fnbqZJj3wDrhFKAoyj5RM7em7eub2HXNcmCcwoGjGX3Fmwcjzd1DwoMZGoXNBy9KRaHjw39jomcsg1Jv7dAC5",
  "key1": "4d7gccTN6ZGEgnbnDWWmBdMtuQ3gGrPzZejG5TnrXb3KmVudKmpCMLq4iiZfpyiZXjaNVQ3QmvvoAP1nBfQtXmmD",
  "key2": "22KXUhfeGqj53pf7B84GNYbZenNZRT3AEBZmncMXh1AbGRVNN1xKyd13QUL5QbH7CC7cDNYdSTgrgX9Nt2eqyvdB",
  "key3": "FoQANHj6dTFb6wxNNDsVqTY23puQyHPytVpENVqBt53GdvDotGFv3Kg7qdEbJbF5XE1J3HuNdKxaQ6ueKhq27tC",
  "key4": "6NYaD7obL5bM7DwR2SdVQaEhDhMFMhSDN1nzGBCcNPumcmyBBdFeAUywFpHWoEEBaEXkFsE28GKLdDTR3qvUfeQ",
  "key5": "5mJeJRNgm6FYiamQjqMEaMaBAcTGbZt8Nh6NixaTQPD6ua3DUFADgSmABGo8Hfu8cP8PVkTjLouqsR7jVoWxiZqG",
  "key6": "9jGPyDujVaQgQvwDGMxUrvgtJaVNP96fHVuVFG178gdvTAGCdr4NDjACHBKt5R1ddaerkfXQ6a4ehF8uzRxZjJG",
  "key7": "4eP9RjPgfuyRevQYmbd6Z6KTvaq94DB9fFTMGUXaLrrhTt5NVGXLyKQkUG8975zpKSUPfr9qmxPywjEfTvfKt44P",
  "key8": "4M7DbosjqqdMNLa8P7cxuYbmp1qDUEMZLpCvRPy79EkceTkRU9PLM8rPp6w7xapbuaiEAywQQvS6FhgwYPqFJiuR",
  "key9": "pg1vBqpAq12n7whF3u7XSP5NSbu72uxCoVfdZrBBXcZMp71zwW1eYvh5A2JkSUpZPWXBySLQD4nz488cFvcovHz",
  "key10": "2vxSwmL2koDQ7FaLYkSi5m4pa1XdYzGL6cwFAsLbPzGP445NgfzizMZfJKqezjJnVREwcpwcyaQc3Td2mAgyvvBV",
  "key11": "QGs3pJPHFZGwfTEN82b8Br4sekuwLxgbAozjFoab3heeVKCDqyNaMiXRVjHp2daCoXxYarWPSdxGnxz2buJ6AQ3",
  "key12": "5g3w5KcGpNgX1GpGytEEsbi1wyrDEhF7PpQsAVm41CSspbexzuB3yn2VbWQ2rjR1NESLwiK99UiFwBmijjpSma5u",
  "key13": "4JN5wTAiBHMMUSkzZfu7T8nLNG8VxiUdvAWQtW5GgjNm4GPhg8gRV8RCw8MfwNgobxbhCdjLTzynLrXGCMQDYPt6",
  "key14": "4ho4eR3Zam4o3TGAQtAEo3PkVLJoFXsMRSuqo7crmGRMEHtS8Z9fXnoyynhxe33z46sRGfdSK85i3hZeAdSTHje4",
  "key15": "5izvTcx1iVqBmYfV7Fh2bQjfFjzt2Jm7yA6jHKgo87H6JUtT1gUvnaJdV4DciQgDwndfWM9zKgeFZ4WFRAZh3BMZ",
  "key16": "5kCfxGEZThcYMv4oj8SaA8W8Kk3vne4v9xRWG5RajqjuBVtiXkwSnvGNvVHCYoFhtzC6ZuZSpKiUgwLo56EwHgvK",
  "key17": "2qNFiqECbx3SdHvJHP6pqWYZJK5guZDiutNdDEHMLkQsbogGLG9VViWLfbxsBa8VJXgV8DimfN223JWr1eXXW5MT",
  "key18": "2ewWpxG4yUMa9gccLDMkfbs7V4Dmr8FGwNL8fGRCq54ERpQsCJjfKF6K8jLf4GC46GPehTMDQX9qSNNkhiZ4rgkf",
  "key19": "3MWSN4pxsJDxi7cQVTXVyRutLJmFcUk2xvJUmkkh16c1Qt4NnDTPavX1XVzetv2G9WTbmnnsnf25hNZhMd7QDnyR",
  "key20": "4zHCt8nJBq8oSEMoDnEYnKgqvMjx6t5THMnwGYEQRZgiPtMG1G4pQVW9hHqkmreF3hCTexZwYuPTuNsVWi7R8uyf",
  "key21": "2oBzrHp5KXrmZyJZc68FpcsxW669MzdgeHE8YAXX189b8VUFxuWMkMkWjDY7UPQNAXH7giSzmGPgj6pF6wH5vnWD",
  "key22": "5mvgJB95mZEjyKupWweFQCMRkPCR67McrMxVjMg8rvs1jHLFS6G88AWqkLPTf5iyNzx24gfL2A7RYVEEYQwuAbtq",
  "key23": "267ev1x4DdmegdocUEysn23R6EpD7znhhAw5Ls6vLCWSWp7UfQJ5C8pg4zmGPJiyShwKi3FHgNaERDMi4F5GQy46",
  "key24": "57NfBmASNxfPZC4caXVsEGWE4LbNoxSSMDbLLrzKCw7GNG4Bqgh6vVvYc5XNshxdW2R4uw1UZ7dFYEc1CZasQHrk",
  "key25": "2UUah41s6eaYHvXr5KjRzB3UW3crVhUzZ74JW4pvBqHwDDj5aAvDvt9S2ADD7HYyBmqZEAd2z6nQFnyUr6zKu8B2",
  "key26": "GbsuuKWfjvTM3RL6czMZLyj5GQqZkhDFuYbcwgc4qFnTC4PGfJ4tA13pAdFqLGPv3KkG4iEx3dXC17ypAJgdtfS",
  "key27": "3vw8wMd7Ls53UKXAPLjGFcCd8unfBtkCjjaEfFGdgoHr3a2a7fGAbppGFpZ4q6SVg53m3XN4e6DxucY7jGn7aeFD",
  "key28": "2asb3PjZxDTEyjih36hzeEQAn8p4q41KtYJgK6p2nLy1tSF19dfBh4d4H4p68dixLGpPGGKQESaXH5HxcjpWafpR",
  "key29": "2mDpuxusonTMbeJoao9hxTCUr2s4kk4J5Bqy5aa78AqHQMRwXHynm1cRbyZtVaroq6Ah2PF4tU18CNhRNSgTYSGj",
  "key30": "5H2GjjKXK6YrMpn2fiYAjkQwSRFu62wjSempoEGNw4exWPfY3VuwxLXiy9Kiw9AF1DRumLqiVMj63EgY44wKwpYc",
  "key31": "4sDAbQo6woBYBQxwTZRTXZtx4B6q1k2LBryRWAZTo4HWRzrU4ZifxzRUqnx4bbU1HzDzeNSvG6FfRsTuh3tcCTL8",
  "key32": "5sczaT7JGiJrJrjUKjQzuDeGJoEiQ7dRQVXYFebgauXByhkpQ3JcFiQs2VvqnmXnNZY2mYkJEPjRVcAEfT8vAiVP",
  "key33": "63KLGKiiUSg61bp3Awxm76aDPjccn8HEf62rfekmNYG2TMAGXMR2cioRdGF7vv1UCV2BrWzZbmcT6ZsVoDTtBieA",
  "key34": "R94729sgBznXDnPxF4grgK2nS8xcGhWo9T2BGfYcDcS8n7gHkTtDDnks5zKn4YXmsbkyLKV4wk2XrpaYaMUnbQu",
  "key35": "5AnpzLLhpgvQ3eQSwFTjy8a8iaYjn67KkwMtU2iGFJ2cJe6bG6hc2dhMFSh2C2JyBS7D1tJo9fUNxUpFomeQLeUv",
  "key36": "4br4fz7Mwca8qEGFL8fknpBMaqgQakjPftqXnQ9xY235PePCyjuV8BiA3KX8zWxddoLFQYwst8gxDZFUcecZpkgX",
  "key37": "2aDV1VR78KjttWUUR7R5KckAGPRCnSMwNedhWfMjiPuUpoyYJwZ8HUAAj1fd1WC9wzVU18VLRZmMAqcB8eyqG2zh",
  "key38": "nrcgzJuDLr3mJps4x9YQpctFYahoirH2HahUstdsBLPc6B3fuQD5mtfhGw6NUoAXxXWtMSUAz47twX1nn6j3wF3",
  "key39": "62u6kyX7wpp7iW9i1C6cqZTTgrypPmemhzAEBhRsMjBf53nxoSQJ1cnvdM49PoPqCc4h5c7gbFb4NwBpKpNjTw72",
  "key40": "2JqFGS1Yx1yS3eF7fGVkUcAV9VRBm1hYKzb4a5UM6ryYiwZe89APBi9DoriJMzNRep9W2WjCcpwCnEMzCmDk5HAX",
  "key41": "3djxXycfFaQ9S8oduVwamAUdN8oFq917bAvgmtBT18AJCzExn23un6SRCKePLEJgXqfLW9GHRADnMENzPvYbhbZk"
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
