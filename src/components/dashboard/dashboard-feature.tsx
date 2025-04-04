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
    "3XgwkFV9jfkph6ecurvRFoHmTjfzieWZviF7yppskaZqDmZ9oGNZ7pEpBEvDRB6ikb9cx4RMeQmcChb6Gc1STbG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JtVSmK5ZXnpXkQfAUMfPA64cjp5ZHbAUz4vJZaRYkzCSN6kGi4rwoSvxcvSTrVFRNUQSGTtE98MAJGkq8kbkVfV",
  "key1": "3URaCWwWoMqS1MumVsX59PhaPpDe1eC3owVUybC8Smc7buvTinb1Pi88B3zwGWjmKFQZPw5hZCAWLKnJdojUG8SH",
  "key2": "2hCJLn3S9JPq6bnja2uZaTW5jRaFSWwQoxBV57Audj3gnW4eHz5MBrCDmuDLxkX6uXcVaLSDaaiR5pxwKfodU814",
  "key3": "5NjjKH6LG3MsN9EBN4FZW37SnzoMYeXszaaRfxytpnSyv5tjKJCbGz9RuSQXtXW2sWbU8EnYJXZsUUpr8CCnoLZv",
  "key4": "3E9vtLJiiMUUzKhSyBtfzPxiziXuiQZggc6AKpWqSwVYvEdayLP6TkvcjtR9vHGm5aX1j3BCFnYXbXTXe4gAWGVA",
  "key5": "2Sidfn6R17Ho2tJ8BTxHkLJTjNin54Wrhaz9gZ5rrNztg65hB1rkCdoCWGH4RKfHXuymWTLVCcHA53j7wjdAMFzf",
  "key6": "peFdaEd6A2Hv96AXCiuCGKkb821TR8WxJEv1eBm6q4xURKhHNPhB5dw6GoY1HYdjeVuZsDNrJvLrJ5XAPt9KRuQ",
  "key7": "5rsD4hDQNeAcRdyxBN6p31HDsuw9cjhPZhdNQ3ZiTigTCwRKKXy92LUQKa4Qsfr7AmbeaBipCtngiWLuBMU356PF",
  "key8": "NPnYWzvifNwui725azckhraBUp4Z9D66F4R1PWz6XVsvgNbuzJf32waozrBS5ppd3DcDGwnyi1LqfaQBbVUiP8A",
  "key9": "5DuUuX8uQm6gJDCFqrLujPpyneFBbYGvbLJ6ojMfFvTxt3KAAtS4yYdt6xEfm4SYh1yta8rLdMSWsTFfAGURCzsU",
  "key10": "395PFDj7NJduCVXbgLKbQ1s1YeP8ut96nRfPHAKSUNqFzp7ebqFQggoFxspW9P8pJvMA15bh6JG8gxk82k3BUMCb",
  "key11": "2TGfrTE7h5okqmdbBzzAgcdjTAea2v7KB1vXHPzb14drw66CmYAsd8JThUEcJgwdGAv3sMLWt5yYZuDq9dwXwNSN",
  "key12": "49e94uft2QcpH3dho8M5gersGryPivVUZkNq8DD7idKnNjg7v7grMHbxQph2ZqEpwMyeXFKZwiBBvoXGam2rSNUE",
  "key13": "28oSdrA6WmmRVNkpVkJW5Hg9tbCMzhfrB4S78iedAVHRyXBe51gQYbAzKJbcdwrYQnJePKcsucxbSd4oPJJqiYSk",
  "key14": "5YazFqHkqsYHSFwkzKKY748zuRiPAHMhfnX7XXjuFwN5gDPxiY42RDVHjaLpbEifAFX9wURfxjzTxx5qH49y86Ub",
  "key15": "2kwxz3NdD24BKqM3Jo15kwUGmHubYn5ThCpTBnnMX3opqPRGBhWkirvpZvsYrtzDo4HVj2fLDXWTrtRshwHW5iri",
  "key16": "4H7kxmQvrtpVuC4mNzS9GCdceLuhbyspUs18EDMfM72BtT4Fc5GnUZfdx6Zk5Xasz5UBP3ooxphgVgeCMUs58j73",
  "key17": "5WSE1N5PoMskoxvbjzfbUiB1MYxGysuXrZa1NcrrR28Dentijaij4FJovG3SdDhGwmFMJXpEmJF7ESSSaGeybFoW",
  "key18": "5iZjxPGZ76koL4n1Vqf6h3SWqWU3mmQsfAcaCtQNjVPwxHThRm2Xc62BAGxAnrHSDVvuABk7es4obSxi68gJ6tKW",
  "key19": "3v1Grranfda5bBZJXws7jVeXHECmB3TNPMwbWrAum25cYttJbF2pG6QEfBVe1EuSyXyTdbkCjPkqyLNxnSw58CA5",
  "key20": "3fQCjzhfk1vPZTDXyz39VbZTn8mfYWBJs3rFwASVAHxjZ7hwVvTzY42YbknhqikHUVVLxRnhecrAtCt2KayJkeGd",
  "key21": "4Sa5j5UiS4phzYe3RwazK4yy3VoafozPJeHnzQHWCtgSvo61PFDKPQW4xvk5LkxAZUrx5epqa8wLHC1zEbkGbQN5",
  "key22": "3SevdpVFWbkvuWCJDRstSLpqJoAqJvBh1RiBbosNnxYG7N8zFZ3M8pCHRfgPBqBAGNhQnm3REhs5Hzzy1m5B5ppt",
  "key23": "2Ht6uYpqFM4U5TWRRkY66R8MnJ3Qziw13NhMR38eFmrcyXWs1RecYG1uYFeJHx66o1AXKBEdAfRG8rRXdMD9uuUU",
  "key24": "49dXn7PSZsvJBYGksZfpMUv2UK2yRDk7YmCAdZJ7upu7j2o9vtiXfSH4ANttUd5qHhpp6dA3BRMQKdfY7HKzhBFS",
  "key25": "5aXk1gdspW7xnJuPLEa1zvkaARyoPsZjAKbX1hpWR3okuixgLKTuALiZyUF3zUnFi3FUVrivFzFKZBKrG1LKUnie",
  "key26": "rzLPKQNbEnrwYUY8iLfCzpzFNpRDP3PAfWpQkN6BiaPiUF4xKyqpWzQUSY8CkNJUmJuAYmKWNvxN3j8uejRkomw",
  "key27": "5bYQYtvCv6mfNEafmaFXgw6jEDvrvFVUUkoKts6JXFemNegckjfWaf5TmJ9VtxBMJ8SLETJ2aD1LqhKWrRaQVRT1",
  "key28": "54zPhoiF7q3t2SWBHJTqJ6umg95oXRMLFh3uiM8pQWwKmswd3T8ZJoixUCq83tB9P4Ho4x8h8iverxmvFsf4EUxC",
  "key29": "5G3veqrzZjL8gCWX1CVs39FYQn7yJwAi4BDVxM1qN3mT5tkzksXLsBmVnsb1wT6tnUxAL9M2z62aVcnuwXfEcbFM"
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
