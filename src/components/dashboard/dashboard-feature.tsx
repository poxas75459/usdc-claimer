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
    "DZGJxELjwHJS5xCJ82NbxPMJNqFqt7cgpAwJvdGiMdGbZJzhK69iob6mdUfnRLGpLLiovTsoHQ4rum7EGx3PdTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ry5LRqD9RAkGPEpQSxtn9Nvx7pRqxgeyFNFNtJ7Dpi7n7Ed2Hn3dNWQXq36MeiwzHX6jWWiaDKGK6ptqWoRAziH",
  "key1": "2J2i9ndKFZ24jev5C2PwkheCktYmizUWyPaWJjZueTAnPQ6MHbdyg2X9ZwhWDmY4mYh27GpZx4VG1gzHxG7CqzKj",
  "key2": "3QnSvszQVvY8HmoHfkEVYTTgdn4ncMNesNtZrQ9JfM3hGNU78amrxW49wCX5m7BJZYVE8pQMP7ZQQRnEgKierQUp",
  "key3": "285FpkDynTXvzNV6uAjyWXsDNEWzehMRBoRmzwHhSsEh8hvHNzcQ81SfPeyQfN4CDSMfVH2uYKiSZjEhcUHBuXdx",
  "key4": "rjUwd64gPGV6E1jVTW9DF5E6WPpdCQPFQXSUpimMfp4Fsw9VrCehf3QrcVgmsjgbVRrtZ42SJGyXcpq59XeVXaB",
  "key5": "2KVZ7ZioeN32rDRoSBzKUzVvKWATtCNCPDTp7XgVVxGjw3Veyo5qkr2qZrB14AoTqedfghjj4r657wHSprPRSeek",
  "key6": "cNQmX7Q2hAWRZN5i6Tiow51NDnrqU93bQ9kmTs1sNLNVD2WGz8RYJfK5p69sGiBtSn4ijusiBSiGMuhi1EzK118",
  "key7": "48ttEPP8sxGEg3AthVNQqUJ4SzznRdNrntH1eKv4ML36ScECmApkkfR2pBQqC1hnh5tyxvgvz3o2REq8vMCqXJ63",
  "key8": "5MU6vfmJn37JSrocJUswsZWGQNcjHtZSk9WFb6xhyV3AG25AbDBwhMgKLaNuRJuyPCj3R3bi7KGpKJr31f9cRbSi",
  "key9": "ZSgo5sKHy33ye2L9PGbcvh6QtwzMQB7P4Lea75n6vYQ87ynR6uGM3hoLSoE46xNEJviobTp2VP7sj9QWA4dFFXP",
  "key10": "uN4DzA8wiDhByjjcufhgs7wS7kzRKD3wNEKrFVdBJFUEUxJAepDYstCavsvbnCVizUgd3txaZUNa2ifL77UpatN",
  "key11": "4Bs4JVrpe39RqaqBFeJ4MEbrFzeDvzPXt2BrA4wWD6xYCBktGgQpQEzbYYHSXRP5m9a4o7snNYSuREGbdq2R9pZp",
  "key12": "2Wzwsupw5WhqRC2Z3gkrNSWyTKCwdaiPBE1Rx6gAniHcPCEd6WehjxaxJmbrSRoUtT6xehj6ug6sxhTTAQcBvhsT",
  "key13": "4kWuU9TN4gdgqU3Kuo4PRZoKm9Tw69JpUCXWfJLtTzFrDbtHgvkbcnhmvo11LJ5A8Qtq6EB77Cj6xyPFpswqx6Cm",
  "key14": "3zaBvfkaUBAgDmivmqFYBf1vT1otWyUzTLaqPUrCBmDyv83SiAQnjSdHxUH2kpScq4SAd6MBrximUp4UNisc23C5",
  "key15": "2TwBe9fAQhkte4e2pdhiWVyVs7Wx3vg1GBcT5trKmjka1BvPJUUnS4XMenhcWSDTcanUxNGoS5YyC5tJFxtpCa4D",
  "key16": "TtP2WiWGe1z9LGbGnbEmUxmLdBMRNtbhLvtYWCDcxYcb4Sxu4tJz8LkmATMdxLcanUEVTgqziqeTHV9M95ecdzi",
  "key17": "vtnTKECffjBBgDHHoDqzBpFA7qTKEtrrmibgg5QpEtPoFxeyR4eYb8TY16uEy5DZ9NQZx9jyHe9z33LoXRXoJ2j",
  "key18": "4T7KgXwQPJLP9NP5RoPtsUx6TSW67KaMhkrebZq6YSN4vwhzRwbg2mJbbPfGsvb4YKftUFiY3q294VXre87tYqm9",
  "key19": "2ywWUMENs1Q7tpLyJAMrxy48PnL4Xur23c1UryuQEFNsbnhft5NYb4BubmTXzY82YUy8a9XrMiUFscKyd9LJWcBV",
  "key20": "5fcPb2ykEGXFXFc75LNnhqcskdM8R4dzy9Rci6VhqRZEgNejHruxpn5TZZ334eciraSXMaxyQKmEf8DD94r1AMbx",
  "key21": "2Enj3Hf2QGMMoixq24WzaHM8gbGCFBs95TndMjtrvoY4umk8aEXrxpN4jvxzf3JaNk3RVvcwfrTxEv2FPN92ReyR",
  "key22": "2UczX3bmropZ1cUKPP6TmJc7U8R4h2xZiM2buTPzwkdmxgrrbTXevfkytPjdDfn9y46U8R2F5cLMPQi6TAo786cX",
  "key23": "3JGLk7vHmohaCTejypcCiwDs9YhX5zwBQ4WShT57qk2jz3ULGYRpAFRdkwQsQbnm2BwYRXQFU9ZksNh3RtnbsctH",
  "key24": "5m2NeVyMc5Cin4FAnU3G74tG9uVJsv15Qy1YVerZCY1mjBmTufb4xHwYMcVx98CRnAvvvUsFYJKV1R7xrw9uneCk",
  "key25": "4aYC4VoBEeVTpEymHhQCkxXQeNdvqZKc6Yy7dc9nKiSbDcUaaNKgXNquXtaMGJCqbgtRuTfjwiKsaV64LEgnC2y",
  "key26": "amf7xCxnzPkexakLJDjRQpSyL8E62jevApopTkj3iTnuhMzUnDuYu5V3Gcy7XLBC4U6KKA8DSFpXaT1gyq3V2qb",
  "key27": "5TzLezXUCSXRpHbBDVxtnCv4uPR19V7LhfXzjsRUL5viuNPrYaZ4De6AUvyUvjvNmZn2KnDBGWAVPiQeZocvqxdD",
  "key28": "55oZDmx8PjGbqkd72Ldv5fCyvGQpVQZy8e8AmqkuSzaXYjAp6T3dd1dHiFNct3xKneqPQtLTyM9pj8ubJCk8TP7G",
  "key29": "2JvnDfgxEai1a9QS215kYiBhHDZXGuV14Hu7zkikboRAwp9w22sAKZU84m9dCitJYH1VE1Aq2kuTm1njZYRrfZuB",
  "key30": "mFCiHtQ4chLmE9ee29HP9aFidS1yHytgs8gxHwZ77DGceuEWbWTLXN9V8RcQHJ1w1CgEh9SKEgRYBbbvQCKH7Uc",
  "key31": "2hhm2tohakXkVgAyUQfrrfQTck5bZfFsPMUYhXrwt5kyMjL8kGbu4wv26rLodQSpUjkRmddjqW2ubh7KxkqjLnmc",
  "key32": "Q9Vbqbe2zk3BinA3hyjQ1vRcgwtWYygA1LhW4EGcEUhveMw4wmt3M2uxyf1SzCL3Pmt9wdPQTweDXPqKbJiJDo7",
  "key33": "5nYvrhRS9HB4U7R3otS2PEFex3Tf59Aw8URq7Z9gK4nD7XoapdqXV2u6rbgiaScFvRjPULHsdnZVP6rCuabURp9J",
  "key34": "4hNBz446GbiJjnyw7j5bV9nKRnYnirGAkfphaXyPQvewxWusn9wksCBu1Y21NTky71W3uhXMiBeDkR3oEMeUZ96r",
  "key35": "27jZjeaaArfYMbbfAxVA7hrJ7jumBNeZqSjg1xkP6gj9Czt152tWSXg3tiDqiaCGgED1TQhe6PjLfC89PyyJXQVp",
  "key36": "5EJdu8yNDKe4GbGndDnk22JhLqKWMt2gMT5gk1WpfSUM3nXgjPnCDfULxyg5n3nD2176xb1eyxtD9JgVQPRQgbBV",
  "key37": "vHvBLJcZ4kufEBr9fXDhtK7DAsJQReH6w9kZ9zVAG1LLCgnL7GwNK8448WRALLwqYrSA51w121UCSDLKiVowqV7",
  "key38": "tf4y4hymQGDnzq1tJBYvcUpNoe2SeMwqNHhVKgbWPueNUuLjRYrEcpvKpoPrM6gjnHuVDpyL4K5PNdQaQyzvpY3",
  "key39": "5ceHzrUzHevMWSz1NZz5gDpfBNx5zYzdpLp6FJ3Rpjy9YUxx2qmnhEVTaX1YSW34pC731XFhRAfBc2wHTTHJ2f2j",
  "key40": "3Veix1NudtKFq8ijNzmd6d6tmzbZBCFit3fP1Ky7b9jyQCcxFh4sYdscHJFe7QFXD1aR1G7aNokwBF5YXD2JDYeU",
  "key41": "5oNuJYPo3i837h85QxTuCpi6wcwnqbNjCBsqL6NPQJH4Fme3jpXKpFK6dcPYoWnQeKHz4dn42NUKi2QpL54nDSxb",
  "key42": "449uZEtXzQFHNWf15XmfBe648XHw3eqvaDTdZ4bLn7jmdfTxaAHFEZ7eBWKhkygSCa84ZVSE7eKeg64sGPraLqbg",
  "key43": "2TSLwSyBDSFsVhC9noTTCAFrjNwExis5ojmBWn6Hcdm2m9U8iqVZ7MjXdWrUUSHomJAWxjXq9euk1EEBVcYzfpVp",
  "key44": "36rCJ3eWcVMfTxFXc3LkDTPXdazaCw3WvnqQSHsmG8DK6dTfjH4dEYe4dGKo4Grwh86e9DT56wrhnoNqYThLMQKc",
  "key45": "4mUcoYAWSQsWV3yKY5cEktv3B8rmnQ46LWFG5sgwNookYg94EdkfwaSTxfq3VqkLc7un8xnJHGYDJcAx8CfTvRo3",
  "key46": "sUmTFRBoEdQyUhoefPkgt9ZMFwFjYvpMyTZpGadtWufqnmuu96Xw5ZpaaW8iGQa1ZSuQ1BncqEf2mQDLk7zR8Tr",
  "key47": "4ufmfuoKAzK1SmQquVMikqiVm76eKAU3t63ZKthyoqdTYZD5ktze8THxXmSSjRNsBhxWHcJax6cpMmVGgtfYRmvq"
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
