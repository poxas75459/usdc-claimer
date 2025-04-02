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
    "3zGqV1YxTNysdX7uAau5etWrBrSDh8gKYpLi2YPyBUuiBweweJzFfVB1rgEN9WX5fynanaMFjeuJFpJ4hAU6TH7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B5CfDfsSZGbJ9P4eLhPhaSZhgg3Qm9Kx4a6LveczgW8SJEv9kyWDVF5ZxaYQo4UqbQXDeNN7uiCCyjYUx6JW72f",
  "key1": "2ohQAC4niSuh7fZXA8Jc7vaxLciGRWZVHs9YFQoftHEHeGXyiYsxog35EnvTC7Nc1ihnSEPxwAK9MUHpXMNFGGTp",
  "key2": "BkwpZguCq7Mmat3RrfTtEWwq8dTC5tGTaLYjYWr4ev4cEVcMVePLPWEHEJiDfZ39jyfhGfoTgisSSELyZ5hGudm",
  "key3": "jZCaU2N5oKEEBbnZxfhAaemFVHw31RswbGmFTdefFjYDCSdLPiDh1Emxj2eZBYdRn9dxP3BmqxAFnzKkw9GMQxF",
  "key4": "wdtGqai1nHaE1z27DsnsB5fLSBvsWD2wBCr7hWPwrNr2ptKbamAFnvHbe8GPTBn1MHnunEMRk8JqpuZ4GWUf5cA",
  "key5": "5BU9pDVqMxE4yGN9jDykTYLFXaYBMU3eKeGKUHMTDaZnTe2p5zseK2rLWjtufvc69SWZyp6xhzpnfvFhMAZeeEfZ",
  "key6": "499x7YukAhTVGfDB85bhYdnKUX7VpqPDvt6Qjza5uL7xhDcPCpTiP5b97WnqLMLtis77jgwXh9VR6PNipenLnvZK",
  "key7": "2nd7hoo2KEuBRm5jsLiH8rGUbVYyBpevGEjzqDwfgk1RvPZtGefMpUywtkV8rNdmdEU23NfBisPhVdB9paDEETCN",
  "key8": "2aRv5Gx2w7vh7BvU6bddN6BqPztwFaiN2xriaJd3Vbzxi7M7FthLvwc8LjNVKgUPyJMnbe6YyX7obEsqkB4fpz5j",
  "key9": "3qgaGJk4hT6pMhkTUhYyaJLk9Te1NGQgT3AXK9nnHgeAgnkRSm6NT1jmGmSS5SXvVozrEnEXpmNF6wJD7wWZTVU5",
  "key10": "5cbVkPE5NuBqyT9SH1EhA14gHEjQEaSHiwFWHZofNvSo8s8adZj1tJX1fSDfoFXE9pDVzqFpa26mNAHGJ53SsPHL",
  "key11": "4hcP6fWDkTnqL9jn9HsBpJ6J3uo5eeBjmy74Qpysv5j4nnaEmWyJZB8pnA4rDkzw7f7uF19MUyrogYgyLNE9xR2r",
  "key12": "2MZYD2BJCkbku6p4kZHiWsJfMXK8wQESP7PCWiqkqK7AvUJ7QkdceWz7RsYRsESEDEjGY9TU4B5T9tcLvLmNpFte",
  "key13": "58dFxdXKbLR7fPiJaJF2bKtpyxRVBWAyYh3iddAwHKe9Mm2gqCUimZ2VCYs6yhR2z5SHxP2R7sxEudnyuhLrrvYA",
  "key14": "4dHtBmbu7h4J6NRTN52TXhd3HXZoe76D2tKBhXJQtus6qsG9fQZEbiFPJXvDAPj8dhkwGm3NYfPW5eQvSAZ6wJWV",
  "key15": "3xwaBidd2EBaqbs6dUtj1Zzi11HJcsk5cdriuYLw1F87vVcnJJTwZo1TswokG3Cym2F7cDY6D1czNGJBVo4rKJ3G",
  "key16": "TdTEiaRanx4otybTq44LNHYDeKcAgi9S4sFBcin7iw9c3jcUfuS79sGNQxmAc1isddiv87Xg23aEVioCCwq8Kpv",
  "key17": "HJK2y45a7Sy4gpjDMzLRrkCatTpU2pifFoeDMpfgUHw8jgDjVY42LMhNHFKTfMBVDETpb8R1nYAwUT3rFF4vpDA",
  "key18": "3evz4PLmDyHe9aT7sMKx7hMPdaAU5jq9SWaezpmt4NZ1c1wXmByJG2xzxgdqSp8cLb5LXuy29vePEtRTp8jStBzq",
  "key19": "5RADramwxLiuQVUWKbK8tYNet6c73vJVS1sFbXYuxVxSpBL6KbwQ6Ziq2WsgfY2dQKNvaPGqzXoTrm3DumzfjZuU",
  "key20": "4n6B4mbgiXWBEEuHytsLVDejt6NsR8s2makmkj9FKSascKknbnSGXbxBchHoPzWdZxTK3wmU3m6EJgCMciiMv5uY",
  "key21": "zwUhZEvyyewcQGwnNRwv5Mw4PGyn1KvDwvRnvRRB8oUHzJ8k8TujpoPiwWim3Sge9Zy3HEmZWhip2NofhrJvCEJ",
  "key22": "21sNbvnDtgCzDNDkaUUtcaKXeagQEfyg7xgVSmitE4bqPtHsLzzxSw8Nve3qGDfgijLpvsEVNSdekUgzxHCuHnez",
  "key23": "64Pg66Nxod7UzrSjtZt5bj2T5dHrqd5RDpam9g5PSECbT1kb3JMuTeTTe6XQrhGZkKXowRA5dMZrP1N9Hbgy3VYL",
  "key24": "4G71iRsHEpJLyjs2FSz7PRptMwuxxEgQENwXqKJvzzrkjYvJ3R172NZ9T8EJspsJ3dgE2J9NXXdaxv8gt1wkuuFm",
  "key25": "MsY1GTGdjETJSaZv7TzzA8ZBj6HwP5rpugJuZ5c39rS8JxbBwkrUyCpchbSqeuJmUv6AkoXqXkjnfwRbW94cURi",
  "key26": "5LbyDj7FMSSUmuFyGchvm6UMQpnoctVAipE59Ydn2ptXhJif4WbWtf8GZLBcoKewjbcPag7UEJdsRneqzLtp4SnB",
  "key27": "5TSHzeQZNKhXc9Z4c8uZpJC2zddMde6dqBdJKwv5XQjvaZn5QBoiAKugGmWveVrUf5cVAkQ7EG6DBAF4Nz4ax27v",
  "key28": "65SS6hzXMi9Dqow9wrZojzo33FJcMnCGz7VuWEHpTtveEqfH8WRLP1H5ZyFvaeVNCHZVmr3prH3CTuynqzT2dAPs",
  "key29": "3STm3uTZzeZJzTnuDzEcU8rW4Dt2myck8PvSs1hLDMumoiKMsvApVtuBj1WmmeekVRtXgQyNqr5qzC3cfkSSfDMM",
  "key30": "3Hx3hWsZN9Mq9YVwBQtP28nNjTuVbQzcXEbx144ZaXnb9LThiaVmsXvwLE6fxTxgcYqHtLqduhUWWgahobnmCYNX",
  "key31": "BN1aBTo1yYLH3fn3mYrjMSGZQsPiZoQSzVNxiKX9R5M7aC5wjFJA5jSMh41fx25TyByEbU13DBaNZv9cZ5AJ9uY",
  "key32": "BEwB6URQsB4zicYAPptxiLsH6TrCujfgG4qbSVF6JojcGqntZS3xdA9dDHfCdEyDs6gN5yL9gDtXfsndhq4kTWU",
  "key33": "234gsDGn4ioLkgwgi8BDvE4ZMX7GrkcNjZHcqcZSJed8CHv2vAtNQAxhqsVMXESjaKEcafzoNxFrgxgvbJ2K2fb3",
  "key34": "1qCBnz9KzobXbtQsQpZ4VCqMDLGUghMVnxXZ9maYqoJ1eQQGcf4aFXYAy3LUM8Qeupc767nFdetgikvWfLqRXNX",
  "key35": "4vVP3DtfGcr2TbccsevhPgGteC9MaNoRkqSbireDhzHDZEaMgFQVFf1Vrq4oXBhremWZgqdSAi9NxAXTyPheo59w",
  "key36": "5WBvKG1wUJws9xM8jnRUKApPSS8EB4EMuXB8CrmfCu3bZbLLnGsHfjRieAKMCeHxsK5FJbru41uFx7XiLakabREf",
  "key37": "3JQiWC724DkDHXiMk3yAKMDEGQhdbatGRwiJdarzKs7uCCaS5Sf9RdQdjTH3mw13eR3BJmNTDH57N5dpVNowTtQy",
  "key38": "5ATiX2MARQvPET9LqnovNdtfNxWugGVpxRSus4MfXhMNiyuyHhx5892jh3b5qHtkY2iBBE5nwyWgA3ervztyLZ11",
  "key39": "2kFj1NBR694YsqKuWLjRdX3U2MdCkR1R9aTnm3tFGRZW2uTBjKQvrc8E7U12riBJdSDp83sAdbEbLJEw8nFu2pfh",
  "key40": "63CkwY8jxyyPDbyiEUTEPMV6yqvc8LS5eR7EHSGpjcfkoB6csDTAgErypcfS8WhGaKv3vw9a7UMbQLcwpGrMVPDz",
  "key41": "5MGR3sVByNUeziZfCc855Wdz84tWSK1c5vicXQt7N9R9hwzfpFH4T2Tcwg5wPdDmpcFJKJ3KGSQe1fNtXndKzur7",
  "key42": "4uSsjHhajghuqNuTL2PHMsvjQ7zE5SjoATc7zTZ8PPzw5Pt449pTCrBoU9EbJZknCVX1T2Js5LnsxPsFFDRiioig",
  "key43": "8J89PHkaecUuJYEqmV6K2wWDMFi5NRQWB4yn5LiwiXBy6nnFTeYQvH4J3go5E46YTkJqdNs9DtKyDQ9f65TT5Ec",
  "key44": "3aZ33jGh4pWgVGbPUPbqVdLg7rz9JpV6YkqANbhR962hkrfqjzZHVzsn6SM9ZGSQ5aR1Y9RmaeM1ke4WRVvRWZ4L",
  "key45": "5FpV1shLZwT45c1vipedYXRSkjKoB51iS6vPDLNU2yc2PtXtZUuGy74QSYoegqQP3Tt64T3UP9uH8KH7B1Voix1i",
  "key46": "5rKKKrJmybm1kQeoozKhh4KUK4XPbJyCpy9hfDm8WPVkmnU4BbbrC1M1RntwFvM6deZWSkWjdX27J3EA6VTrcRpK",
  "key47": "4oSM21fVXDDcwuiUwnxtnQxEi1zju2ufG326nv6HMcwaH1BGiuprLJx6xx5HoxkygJMnsDJ2Mv3gFGs5ggw3Gd9N",
  "key48": "4DV5LtysHKJaJW4jtDW5Mas6dnuWuKq6VvyrpW4XAifxbf8qjagweSKpfzyLhSEZ5ySx5yrfYx5neShZGjfpkevf"
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
