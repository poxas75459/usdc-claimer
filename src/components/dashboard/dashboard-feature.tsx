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
    "uoTknmFZusf3JVkk7yHXWL32ABpxghif8sXEK74ATRuBUYFdEn32CudhSapiqSAANjFy9ZkkWZdL7gbDWWdUhvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vArXmfQGFdSDH5jLHhBoPZ2S8uD8fFdkewXtMKWgreotgVC81rSnJfv1MikhF2Rc6hFwY7WpHE9bvhNZSbXmNzv",
  "key1": "2fTVowjcWDiAd43YAiWguk6cVPz4BtrJAotEWxm3P8nASFdb7oPGitZ7So8opngEwv67Gv7LXEK2vmd8iys9BAnw",
  "key2": "5jMrEkRFyRn5siYGviX2xkSDkrS3wWX3qWdmvpZyN4BFHn5zLGafNLoPMKPFBmCD5xgsLxqphaXyPJqF7X5TwSxN",
  "key3": "32a5XLLxFPi9WRwePsbGPPnz6rRu5ARKVQnTACL2gCxqekdrcUqRVNWokFfTLzQAB5Q4UP43WDsmS6jeHzJo8qJM",
  "key4": "5zwfFb923Lrwp59HJhjVGbg2HsRCjPB8AbssY1THkkaX4xg9Ujpevfc98PXRRXtSy4Nk15Cco28qmGaJXnqYCWoa",
  "key5": "2DKs97q6bMQCtF4u1YKyUfpU1p4dyyHEbbYrBHAK2t2kB1LycbrboJKeqxdLP3kwyxZU35rXHqS9S67HbZdXJ2o1",
  "key6": "52c3Wox7wN1UDQLofQs1xd4vP3aB5vUCQAuTcPzSwJuCexJZiidcuC2H5PwCPYJXHi4peKCxYsdU2c4zvBgf2Akj",
  "key7": "4SpudRWpzLxuoidjeEYQU63cFZN58cxo82PRRVhFi5XcHZC7ERxXZ1dzwrXsoYBogUnfK3svJtT9LQxQtsFZNCF9",
  "key8": "5buv3wNBHvU8X1nohzHZCTKxf73Pn9GCvxEFmQRXFo62cFoQpZr7Fko42wJU162W4ZHTYhseYdz8qgScMh3C42BU",
  "key9": "3ufYg3LL12uUYQTbaD1BZuCAcFhEkpoAMHzfNmgF5QuspRfq2KpwGh4dhnQtcSPspZ9aJcgw1dsNzDfEi8TLB4Bj",
  "key10": "22XB1L55iwe1VdFE2fyeE8LYP7eWvDU1SrHV7rs3TpJbebqfGes3JD3hT24Dqf6aJgHqNq8yoKkXNY8PwzpPpybc",
  "key11": "23gDmVBveCEP6J37ynYk6vbY8h3ipWQieDVR4pcfxAY3V9WLHQ9x4fhcqbdDuc18BQChDpLzTJebVm8aK1LYCuok",
  "key12": "tJ5FpwbZtxq6kt8ZJsvRnncAnBwqTDG47xAXzubPe3svu9gCQ6jybSPMRMpqsDr7LVkGb6J2B4EhNnc9sUimyak",
  "key13": "4NdvzwrEdW7g4GvuY2Je3o1BGihyHcDko6namD1rPj2BxoobceUxjBDoML89giR6nFcGCTTrw1a8srF64moWmYTx",
  "key14": "65DtNLejxwhM2VNHgF69zyKVCwruyhx9367tSpRr8CwGccusWXo4gXneW4tA3c3NZwP929WyBPZHnA7yuTLnzsrh",
  "key15": "5Zmd9SpddJBfE42PrG7b9Wd66WAkY6obdi1yp7SKNcbScvEo9mANRPvJ2tMN3uC78RrXp1YiGAszu8omuDFF5iQQ",
  "key16": "4aepS3YE9fRc7cEL1Xg1EDexmSdPENFDTn58fz5pKnbGHHrGurGGAqH9fDPgQVk3odFE4rhRCuExBE5WNUViVNG3",
  "key17": "28syY8kebZ9DfiM33m8T1tcFN2npZiHMMDP9vz9zgdR659sUW7YEGSeUzr8fnzpn9RRaNL1HsxLxdQys2nzRNt6k",
  "key18": "4waGYSZ7Ty1egQK1oFEobzDCKgcj1RXheRF4CQ8ikJ7oZEkrdxfRiT7GgRRp7eeDYz6S3kFGEgDAZNpmzgGJhjjJ",
  "key19": "2z2g1Jj7agGrPhYhmeqy5LxhNyT61ur8oD22aZfyEd5sq3pF3TipWkh7LME1Xufcg3HHv1nN1ikQZmf3o9rXzEmu",
  "key20": "5ymPE1bNHcswdKyyYtWN8XF7eLBkZcPZqQ9CZeRrz1PAN68ANJaBjLnb8Y6vfvHcGgwMaE3Z7YTRuE7Jvy6UYxSK",
  "key21": "ii1wHk1gmLN7bmqQ1zjosb9N3SYEZ24ZmMJKXihk2uqNARzkjBvUepDoiWNVeYuu4yuXM1PeCnmtwX3shVXQbDp",
  "key22": "94y6ZskTYufTQ6bnx4r7RC974uTFGqGXcDeyJXfhY3TqSMmEFWv6pVwjMdmeuv44Li76xs2qGLanAjZfZV3brmP",
  "key23": "CV6AwjjTpjb8inYXuxJqUMGbBp4FMNDiCQfLgfGLY1r2WzqBoCecw25td7VPCCyKsuyXx5Ld3CoCH66r79APZEQ",
  "key24": "4KfVfbSPuXcchcUPrhhta5pbjdsRk5kMFHBn1daV2nuC4et1DYZbhz7vZN7gEai5d1PKiX2KQTmrMtE9GvDeVqnu",
  "key25": "3dQ3C6mNzSwiYxht9VyJaTHYUM7ebkefBcC2YTEGbKexwtk2StYneD4EGbUkPFmzwvfMtbFiMhomWwuQ4nER1Tdz",
  "key26": "yMtPrMvuf1fyWV1PoetZhaF3siLqjWL2zNGW1X3HKWEcRQMftq9JR6aKJhRGE8hSUd2zr1mUcCRed3cLzisaH2N",
  "key27": "4XErxANAV1frZ5s1ytCyN8BRqh2Fm7on97sQtVsnPevWCJucM1f8hhQSAsjGjWur4TJeuQm97EF6q8rrUcP9E4ea",
  "key28": "4uieaKHrw1un4X9m2Az5rinUJ2JbYVsoK21bgpaS3uxHpHP2s1wazDsBBcxYuxrpRnw9SPEf3ZqyTBEbiZoMn2uY",
  "key29": "4WurPd5uQFrBDwiq4dbNASqgdC4ryJAoWreNJK8Gz1Z5z9sKEUNyet5SvpxkdTbbU1DBKY4ryfuA2RjpZrYr3Die",
  "key30": "2GSAFsYL3tNjnzT2qPUJEvXRnfD2X2crh9Whb61Lyo3JwG4iF7SFJiKovHeBHy9JQte8enRcH1QZAMkMKoc82qFa",
  "key31": "56XcwsXkmYQLKm8CsDBpdsWCeAmawrq9Z8gLZ5Y1ABM1TjRYDjZHSatQHskd9mRC1XBVQ6tNda9G4ons2Kvdtfxt",
  "key32": "3GMMVohe9X8Yz2A8dqf7cVEmXF79NWZRxvynxx5gboXqYA5jNe4tcfUmmU3e4Qywf7YFLZJAzNdCefMSuZkpuPNr",
  "key33": "w1kbMnk8ujZ7oC4KMR9aSgUVDELGXx7CmVkZ9QTbtqXZE7wxVRPa1YBZQ739qbanDqBi6QnguEnTjmQTKkXFEah",
  "key34": "2jBs33Z2kjw8t36cEWZpfr7upv1NtYUHgVkg9oFM5VY4bYNTLjhpEK2GAXz9SctbGRHR51RacgHf8SALyLhUzhCy",
  "key35": "4GHPkFNUqKsWurom1YYVp1z5cfFEFX6smMDEohUnqodAqV9XBR4kCzenB7o4UoRYiY1mjQRXUVCnZQutrx6CutKS",
  "key36": "2Myycx26qEaHc4GjqenYHPUukJGP9xbWYWNkMzGawiWBZbJBtPK86SYNyuShZrtS4x6kGG1n1uVURNThNZUmXzHG",
  "key37": "2YCwtPtxP47ReYiugtdvYnHcUxcdYcsjqNVyJG3zFZPQpeEyDNTwXZ2FSFXXFonpn4VJ52235J5ziFtyhyTPV7GH",
  "key38": "5W1Lj3j2pTDyFnqSU5iycLYovDB53ED8Te98F2ykybknpTjWKuj8sajb4rdEjaUpPUmyXjiFmh4s75WWttjDnSGQ",
  "key39": "5iRxBgxHvzRkYaPqa719wTtLp75TV7xSAdGVPHcH8EvsbsnsEETcMU5aSYbi74czExuu8ZzW1BFCnuMh8Ji4E3sq",
  "key40": "3TYEn2kXSy2eKG9HV34vtuYTt5mNVSWuwq5Z5Y4RdqpYKoAPvHnAPtEEBK6PG3BnCeF4uRm7GnmZ8KDrWUbyXb3m",
  "key41": "35wqSL1aerWd7KNANDYkfV72HfPhKR8CRrsq8cN3fSnLau1zEgNZUnihzgXCwnm5X4ju3w7CgnkZCcbxTGmAWNbi",
  "key42": "4yr6eEiBYADL42BUvaKAcG2aPz56q7WSZqi82FU1Ch4ee2KnUQmHfqrVzhtXaaAfwEeDaP9f8SZuTQteQbDeUB4g",
  "key43": "2bkmsDwuh3ZF6FdA4f8ctPyJpT4ZfAZk4LKw3utyLHgq6nxa5kVDEjByKieQfKw1mQGxbSK3WFUEfn8VcUVzDvV"
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
