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
    "yFsGqK5dnEoB7mdiQa4pntrTP9RMu6YsFsHWAjRxbp1QcDEw3TfU8QPqHr8Jus5J5UzrkoYzjp2SMoeMSJroTn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Km78ehZcGCnjxsFNCipvBQVMYPuJQmkcbxdX1xZBZjRdNocU2JrR3NrX55goddr9B2ScR8CT9mrRfovsiE1T3xp",
  "key1": "yoyTAt93U3v27QyCYNwWcseLxUNXoNp6x5R2qrLZjapNosN8ex62YbuRVc8QUMJsmLxCNgvCPPURpJxoFPBzGpE",
  "key2": "25kMJRmbApaLAsmPQ9gMrmnr3dnfsmCS5drUjzvMhXn7hnoFpZm8jmN1T4BCcU2Dsvzd1c2JbKxPFiQp8qRiSzYq",
  "key3": "4zFJ5wugHFmc6GuN6yBzSqZJPRCVkfxJW9mg4gMhLmUZEWdTVVEx72qmgan3HujiBYwZDQdWTUKxSxrBLDPjrGCH",
  "key4": "4m2DS5giJ75aGStgEpXgNh5PTrE8wSTUiL6THC5RhapwaPdFMbUv2aLbq7Rbfq2mtQUDt69oWF6sApFBBTr4TSZi",
  "key5": "ziaEwp2bNsyc11NQz3Fbyi3yTPYCnVXcWbvWatvQxcBoiPRVX5Vtkc5Jtv4JMuLuFeQEWeXugHGKKLqky2VUsnA",
  "key6": "NZ6ZJg9Cd7kZohe9jsxi6EXJ93SQFX2QVUqXMngSmXjkz5D1Q8Ar9yuJeMNS8UmLrRwYVQtsrt1Kncj8ah9qEqK",
  "key7": "5vXdbmrfwoTCavr8bvju3dkKhVpHamHCPLBUgSCd7YR68JQH1ryfAMziE8QYzY8HnR2Bu1VyfgTPGiUrz2anrSpx",
  "key8": "NPs4FBLjJfWk7cLVLAUYdpdGzWcAEGX7nztMzwimbqqNz9EtpYFpCgtDXJwK41pfZRyWeEbirCKttFeTsiNJbei",
  "key9": "2gyvPgdueW8iAci6eLBwbfpULr6o8uKVRjij8m8sU18kJvPmQbzsx3zML3BSkajZLDpn2AHPd6DVFP45Ho18Rr85",
  "key10": "5UMZCfKeUT9Z1GzziEH6Sx3Cs5n5fepqGNsDobavqbFXaSsZoMhFnvC9DfE8XQhkgVwTs4QBvKjp33yibhz1gCj2",
  "key11": "25sVni4xDyJDCYnyAJQFhBgXqLJxXwffbtAqK2huVM3P7TEkaCJ1R8tGhQc75ceqppBiR2tHA4o1VriAGe1gCdKF",
  "key12": "H58KJ1xThhYvpinVQkhSJQgYsj6mvDhZwRVhWGRKDyqD9eFhkNtFZ5wZM852RzFizPS4ZB9Exn8KeM5aRdpryy6",
  "key13": "5tYkf7AGp4RGb4nuAtPsz1piqESgsDAxfHtewDrVqEt93oRhGvt48xtwZHfAwmAN8up6sihr6BLWbPkLxnVp1Rn7",
  "key14": "2SRF8Do3KF3tCzKG6g1FRjMVSQ4qf5zdbNV7LYrzarmd6J48Yv69EhDrBibkaEk2k5K7NgPchDujevbgDEVXTAPe",
  "key15": "4C5FYCX58ZDTWgbbaEZ21S3F9GzEy7f1RHbvEoiFd3AwWasWz1W34Pc1cxVZkca5E8UPZWc9zhhi1ygMpRnWctkv",
  "key16": "3VVzDQR9qULWgLPrKP6x9u2QD2Y1U2tdrnu5h9EAkSpn7QkuZNZ2sgA1WvGupPjvGGzsQSoFiwX8yUb5Hv5eyN1U",
  "key17": "51NwuEp6R532hVxJTaBr9okCvvkBQ2hpTve4o31gtuyBdm9UBJQ51RpDs83k3cMSLu4wGhfv1VQAjky8mPSgbEzk",
  "key18": "4ZAdTbN3U1VnY9wGMia9wHveTU8vfkPRgSCq9j5Mv3Pt54MQAY37X22TBeBiPxDgTdtgVhW6GQq9sS8n5QHuAv5L",
  "key19": "4Bj6NZrkki3KK9zz7bbipVXv5GgV6RfGjuWEGE7ruQGxPnsdsq8QxiNu44HzxmT1qe5qTuza1KFuuFNQqVmCcSvS",
  "key20": "KThsPExo5nkCXPpHv88xSivaewJpz34izfwFNq7LAwXACyM6xSEN8oLhipRUqm73kcby4QksPJu9Xb3MYFQjcvL",
  "key21": "3MN8u7VdGkHd9eEUV8ECscbXe2YQDPesAyFxEsCnqFsMuRHfkZmRJrvohxMK4YChnWKdGBgVssy8vs62rk4MC3br",
  "key22": "3252XaDaeUy46H3bP1ny6D6kqDFzchj5gH64ghdALS6FDksGc1sD3TpsorL96ZMPpfxPpbzQHAEPZziujXDVzUaB",
  "key23": "LME8o2ovcfHmhHAvsVBsn6SAqS7hgr1MwJNvwpdFKXTPAHMdWv4fik2WQyT4BH1H12GMRpfbDm1wTBppGEcADX2",
  "key24": "3EMK2kFLryJWL9EjpuGaPCSW1EBGSXtL5Nr6NNSr6jmvZiUSscGJJAR637nAR5yktzgwqYWuPgoFWtp62aeb8FwN",
  "key25": "4nqiLyV56N1G6XtPkAyoPsShBNeH4ZiWKcePSEi1SAp2iPQ199vkv4Ztc7D47nETR5WT95B3FUFBGnCeZGBxSbMi",
  "key26": "xhyVqBCTDu7a9cMGVSwTTkm4EFL5U3DsfE6dPibDTaoKgfx8v3ZvzBRVQKzPA7c3ZFtHjPgYQTHSbLrBVQD2G8L",
  "key27": "28gq73YQqpqHGYcz1Y4FKFVjSZxwV6WTixURScHgdXfoAw16JruhhdyAH76x22Tt9kPJmuN1qnqHivxePKZgtRQ6",
  "key28": "5omjBpVb4rHvNZahhF7gaRYrryQtDAVVreik2TKemtZ2bCwzHgLx18BR1d3C8F3HZrjpRzbwYDRZc5eQean8qHLH",
  "key29": "2Z4cCTFVGpfRpT34BURT1HPsZszWdTkxhmmkdXMBc8nwCGc6YgxJyqz1Jd2FgR9XDa6VKr1VaP3SX9fztpLeX4f",
  "key30": "63DpeUri5Lu74XKzJ1DtEuJuzLLP6K5Ji1mZQeCWojZoKaYhtWSgziSiCMWgBuqqdSaQE94qh7WX6933TcFYUxB6",
  "key31": "3mafe7qQtYjGDNyyV2TmwHoriQvevMTjMFXx7RrpWQGn5vKZwcQ8Y3tGis2FMhVEh52xwYbsNGB6JKvihsUxd44p",
  "key32": "38tqEH3hNK5LyyTRaDzcr2yLm43CDyfBpRWe8V7XoQK8kiv865TX8QGFvvmiGZRaxqgaHymcwF2JiLmqFVYbg2tL",
  "key33": "9AC8moo4wYZGGUVikAwktavi9hbashe2hRiQgMAZczA9MjB1A3GLMunYVV3v4j4JSrXrHrEh7yvE3154ev5Reic",
  "key34": "2UkC5ah5naA9UDqiBo9g7HLf8cjNFdAhcXLB1DVCwz1Tz79AtKpR4KKACKRckCJnvonPmczznvUqWjVF7nRvUbwf",
  "key35": "48pCt3WW5mMjGU5zrhsjcvtbckdoYeZb87zKYinnaXigyFYNKnLkD4ojzuyjPn3wbcaAj9GiVrRWa3vvCjeMHkmy",
  "key36": "5RDp4ejD5qrPYCEV1aJhT8wvwyAJUXHCVhrMcTRzubnfYjrmFze69kM75qNc8EfzmWHPWtguh3chXwiDdBAiZPV9",
  "key37": "2QApgTPWVeYn1m2iaXhQZ1aLvRveUM4PfDmxoKYqjYUvQUn3VEDCZreBeje6nYufEVgHET7fu2bt2ZgkmRupWHaM",
  "key38": "2xB4oco6PbbecKcbGpbUzqQdsdGuvbLUjgS21oBte7Bz1kp65H9nwonojDvbdERqFNptraPuLcTHDyW8y4o6Wse9",
  "key39": "2K5dqBbxe8M8nCeK8eHUjMboEZAChpnPWFU8Cji3ULdMJuYrRS5Z2rEjFvzdFkD3QyJNnb3MEu4eHs6pm5eEXAxX",
  "key40": "3WoWxyWooBva4533MygDTQi1xitF7uYF34Kba9aTHU86HPLZkfGymHMxdgdCBTjjdE8DPDusNN2VU5o7sb3j5xU9"
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
