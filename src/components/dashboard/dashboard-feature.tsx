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
    "3rUef2EKu5iDcnguuSKLcWaV2XXMzXjGsy7JBFK8W9TRZN4goaZo2rP2EQerdYC9gNfGb9rcAAQK8XBu8pTQ4t7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4awR55qyAknVAW8NMSmmFshsX3RohszB2aAvshc5vmw385vHBCZrkSzBQccu5AN8JozjSNZCBtFzwMUEDc2VJSxS",
  "key1": "2WL69uFPNrzartZ342bZqKpTJfySo6BW3KnX2uAKjFjiPvpdSN3g7DEgNhj58UotbRd75bggBh8i4sUfP9Gjrea6",
  "key2": "4n863YqEJzud4FXFpE1v1jkF6gmxst8DCzfMRf3p2qmxwmhBUyAGDfWtYme2YYKirYGtofZb2ohvxAvtH8rS2dKf",
  "key3": "4eHSJFCKk7cC1ywH9ej5XAx6sA5neumHuSB3T2v5W5QjBXLo6LgcNonD5obEZRF72YyR2StPRwvCiwpZCCemStGm",
  "key4": "4ZbwodwVe9gBzEBeUjWMdhwSNAJvRzH1FJCmfpwhpfuLPZ6JVrxEhmaYZrcNVpXQgQ8oHEvsssf675n25f3rYj7h",
  "key5": "2cmvHU3ZMMEuimhrRYbw4xKUDF5PDhkpvRhHJPE3HL4kBPdA5SztJgJNrjCU6H8sQdR6uqAsg9AMyyCgCNCnUX79",
  "key6": "2EKG3hjyCtUfPzg9a4QzZ1qv6uBncnoVmFJtVhNAS3wZapXuRuFWZBXHVr1To7nzpD5Hs2NJ8E3EjMAYAwH5pwwB",
  "key7": "2K44De3PiBd7DYbB5Z2ydVCbuaos2pCbNP8YfzvGYqCkJe7EkPuEMZJSRTmjU7qQ8xUGKL1LhXG5phQi2aRx8KQq",
  "key8": "3XU8rDDUfYFz8ntTj3eXeGNi8RLDdFHNpAQWjga7uCvubwWicV63iP76ENU2Nq5r3GBkZfYqRzHFeGEhNxiPsbu9",
  "key9": "28xsLPERcn95mQRVgDVh6PBXqWtwvzHYuzwPzTZDFJeVQDz2V4VWmaqo9ncNuSsdF16fiSt5zaH8RrDgpYywSdTs",
  "key10": "3YKUBvViadyEKXB983BJFxbb4LkzXrg5QvCW8nMNZLAHo44kiFSp64KWbq7QBRuv7HZp9Ja7vBeLq4QsPfgrVbsn",
  "key11": "4PFBkaZ5a2xSzsGpndsSWBCFYk1bwoaiughN6E44TCQPZo9rpzyP2F2WGadaxopmBSBX6Qdmb7JCSanx6Ghxjo9c",
  "key12": "4yPzz7aS1VWcxRwTiwZjbv4LuRZ2ikUmD1Hwsw8mFoFpFCNxHnaRPgzQYPQPqV5j9kJDrqnATyYViu8C8SmLisno",
  "key13": "5wUqoQprLe4KRdn8UrnkaA4cAQucLPtvqfdduFm9TKVnfNJekexW4627awD7PwvcrF7AxssWDhXeCdsEYHBL8kwL",
  "key14": "U8B1YwVCQj81UMfqPbbKWpSBn5adTJQnjNPdDJmb9h12oDq1BxhYKLiWYZTDm1f7w284xyKjm86m7Bwd3iuuPVV",
  "key15": "4ySH3EdSU6cDEsmWZRCWxbhW2gEiyXjDDyCqFEG7ReqtUrQh6XabNkVjxx2LQuw5mJXA9gqo2TgfsYG3nCp4dKoU",
  "key16": "3HcLhcwtKg79ZZkaA2kA68jujM8se2kvmQgbEkYVjixKBUavTjjFxwF3PaC2r6fdKo6WPdwNyBrD5PjZT8L6N3E2",
  "key17": "4J197wyNxCoBeB6D7ScmWCxo8Rfh3RXVG3Nrf9gaoH7RkWr3qe2VUxxyELobsox6t6RmJS5ci58FVT1rhExD2Ru4",
  "key18": "WUyrFYoiBJfRAaw1peS41WFAz8Q9mQdAPk2zjw2ntHf6VEEYJG7jouN3QzwRR4PsULzcFn3fYMSw3j1TUzrsm5J",
  "key19": "5tpcmDJ4yBCFoW9QjwgCuyFDwSN9gyp7VBNhxeVQU1ATQPkng3a9cDqzCig17MdPKAwbCULUACcFj5oMmYNdsfNu",
  "key20": "3bGiYT1ozyWhAkQvs7fAWxz3KWLZ1JEQ2AjTCjcc4QCvP49oxPnjE5hVmmq8Spy4KcNeoKtazvK6EeNwUAWuL33S",
  "key21": "3szTTEhs6trYtEp6uNRUoyQwuBSZ1dC9jJfe9Mm4AqqJu2HcQqxt8qeqMmMDdZCeAeAQFvxJUBPC2jsQL7WDAJzv",
  "key22": "JaF5hJ4ieGsuLYC4WDJJYKPDu8P8mmQEFm3PopvSzG9wKMtBiFSBAExMfEpNwuCBNcbrYH47Aj4H9V4C8xAzrrF",
  "key23": "2NReXQHWhidfPQgagu8Ysh163gFufNT4NqBS3AuCJwZYjChmQ61tnFpqht3x9hQ9ETyoVGU7Y5xed8scPCUzViKV",
  "key24": "5BiFbPuLPjdDkrbzJXkj6ngxGxFtJCSb6dZXCFLE24tXBQJPrnxCkkkdWFnXrv6DJugR2cd2z36RYt47vNLEpnqE",
  "key25": "62Wufb5R9hmLeqMNczFkhBmGFJWKyLtURYEnESdtCtze3Vb6rzb18j19EhjjdKvZwFmzShbQbWTYdXuAWJzausYJ",
  "key26": "4F3VDNKD1mxMZu6kC3VvXWGbZMXzmuSRpTBc1a8dd3T5SgXhn4itzRqadGEudtycZqMTCWcS15G8sg7KU4vvkQSi",
  "key27": "2RijAWgSqt7APuo8Rb6diKTXiu5hp1G3MVdCELGn1EcvP4Tjbf4smmNKGWunw4jcfBPp6MgYBEia5FX5cQwAJWLx",
  "key28": "5u6naLRGqVfPPbUBncXEF3XZY2FqX7PoLz6WoiyWcb6qUtn1tQ8pwv8K5NJExXeCBCLSNSYvjhMiV6Dm2vNfesGM",
  "key29": "xnYptZs2AQ4KpMTSmUoZTn9H7d84nUfWPanTmGhP9KNbjMJb58HCYovMijG6Xc1g7Myt2DTiYfaCEqWSn7wiQym",
  "key30": "5QRRfVZhBGorLMrfpny3Tk2CFLwqizwcnkUBkDpZ6ZkwExyYaG9gnkYdfy8gEFuZVzrRXabRBiB2dBoszTUyCP2o",
  "key31": "cEMA3dko93X4jfRjuRvpwppSt1murNziUAYtuv6C42v7xexrzhER6DbPFbPGfQX74AWxUV1rasJhHAKubmhQ2Y7",
  "key32": "329AevCHL2uiS8U1f6inQZirYcjS7xX6vVUg3xejN4yhBwBoEsNwuXwpf6wh7HmE1LviRChRVrnc7poVXYtpHkWi",
  "key33": "64pok6Mhwyyhf7TFnHaHLHDVgQhbW9uicKKWeGTBJARytnVBQbaMSGZooRo73c3T9XDscw1sB7wXdugKDDgs9bYS",
  "key34": "nfphm3k3SRSfQuMiBUoWUerbXvkTVgG539Jqd2TsuqXDyqemUxMZpuPyZRrKzHcYNe9VsLEsFdnWMiU7bHxRQyz",
  "key35": "3PmrDDzdXE4wgGW9y4tUwJFPoLGvGt2KTsdZ7YchoFA97Q8TH55Ni36zuPthM9TVw29bFycTdbPNGeSk1Cijw1Br",
  "key36": "2ZM1L8ucxgzBtBTSmicRdTBin2CYUuWbEqBtoda2xzg1aKrLf4B9xhN8JwLEj4fvFt4aGaTgtW5XgjpJ1fTr338H",
  "key37": "48FhM7uRQyjQ32b6UFJhQ5a2VJRWf63xqdHUsyczQ9VoVeHXkx3prirqRf5FVJsFCUfzHx87eCefLUBxVprYz7Ca",
  "key38": "2y55QYeFqfXw4LMQEbXRRVNJ5MtBeMpnmwaAmX9Fi4XNA8MdVxRjr4WsaLdw1zsww22z45QPV8N1E8tcaEkuFQp5",
  "key39": "Xg3856vSc57mYS1JnGEAXQZKZXgsbVgPzo15vt4PQXbf3nVCfULwXmziV6aQD9RFWBjGfS82sVzUCwupLDMfBi1",
  "key40": "m5XrC6qDNyzss9JCYxBw89vd2Eug9916JA9SNa82bPcu3E7fzTJuhc8W3aesVKqbPoQUXVV8g9ZDQGsaNqtndQv",
  "key41": "2WZW4PQQrYG3aCuHzqiVQJcAFwT3UcpYuCzC7Rzd5rrunAQNgdpZWqN1yvXVCxuEbrtLZ1zTQDLvdaPusHKcs9XS",
  "key42": "4CArYajKvms71V3epc2BNfK1YZ8JPBM5Cxy9WUDNh2NScSYA8j7sixd6K4xLfonm6cfLFikvBZUqHkV7eccR4CyV",
  "key43": "2vRqWwxGHXC8sg9ENkkmkpDzgRffvMEewohsSw2M1rScYHUZDGPKC11PgFEzjcnMLM1qB39xAs4xQ9RsHHMWRGzy",
  "key44": "66t9gNcaX2JsVJdLMgVoU5TLVHjZRGTAhY63mxvBnUfwkn4UVi8yVam1RLaNMMN23eZHpvCWmvyPuGZmJkzozCHL",
  "key45": "666Y8cZcnnq62C3mSZzPPD6WucQK8bxXpKnJEEafSMxnFdFFkdvdXx2uJG6qkWJB9mMSkW8mkEaL5htpncFubboH",
  "key46": "bWR8watdSvi78CvkzpZirjAqSTNQfdi1haSVH3nQ67ceHf2XbtaGad8fEoTCowXCZ2TPoykowUxc5UzhfaFnZgJ",
  "key47": "3EqZw8j1MSRyowRYpy8Yo8Rz7kBqYWm1UJ7QE1RuUfpcLQnG6Ffcbeqb3wTs4w6yssN17C832enSTE5JDDqQMAFU"
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
