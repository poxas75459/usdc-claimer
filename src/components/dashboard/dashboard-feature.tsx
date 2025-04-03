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
    "2jqE2ztCNpCv8VK8rkvUgsWKNPfpVACfHjDn89t23XezEnGm7tEKfNmL89SuRv9DfDPLS6eKLtwRSkN33VmqYGiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bh77L5kPcaTX1Ee1TEz4PmyjunNC5Svdre4KqXP36Sf4TkH1wGTNvCwUzk7NGbhefcaKW4X5rMcsyUoeoMeMMnv",
  "key1": "39N5GTeJLtrvuGK6xLK1BD3bf6mLyxukTyGcfGZnKgYX3q9qXLtfSFZVgD6u2YtwA4MMB4mjZNiwFEZJrDFwkC2L",
  "key2": "2F562YP8bh97uQFzTM3ZJCfbrUx5ztxfXPTy8UnrUKqZCG6GE9cQPM8imCNVTgAuq6DbExuoLMbVsssVm1LFXEfx",
  "key3": "5VfAY3Ceg5d5RFCqLUPjuyeUw2k1Y1cjuuJ69CkhtvK7r57torkup9Wf1nPALi4DHQdp6HRrvpP6AuhNURV7cucF",
  "key4": "3ePDqvyiLzeKQbd6GoPAWAeEigpxNW1L91FVFEkf5j7bBB1KR25d5ksxqG22eYTBk3bDufR2errpPLmykUsafQjR",
  "key5": "58B1ZhaXoZgDMcxuS8G8QLLiiX3zebn4ZXDrbWHdKSpdLQqi1EJPqAx4rTF673FDnhp9B2RcDpyaMMsgMdq1bsEx",
  "key6": "4XzBWxqVRMLwhfkKKnaStW4Kfd4NMyLRmaoTqEzNwK4qv4hwzZ9tKGriBYvSpCAqxtZCaGBgUox6K6cafCZxAKxF",
  "key7": "4vG78BpkNHbQ1HawEoAUmAKBPwKiZbAE1q4sn2sUDFZa6LKVuqVUi9U45Kp4qUSJFQoascKTFmjVhaCqPKRXTDQx",
  "key8": "5YpL5UoAMYurMBEwKXUbYMrPUBTZHuXnA9cEkDwN7pWLYr9mEBahxtXJbVBiP1z3gXdzDAqkvw8onj2C8c9Uv6q3",
  "key9": "5gMaekv41hn11EGNqEMmpf9octm4R7n55mPpaEmwjPCEB1negp8g7LSb9mMCuQSGrWGqn4WCuRVbK6T9ezKRZkmE",
  "key10": "Hf3ieQWpKN6uVRUAKTLVwiVpj4Naih37YSoRdgP6EkLAmrK6B4UKiXn5Ebim6r5M9dR4fqptn5DkU4F7nZjgXoK",
  "key11": "LUdL7Bv6n7mN5DWgrgHaxVQQK3ammd3P17oGvHwt5qjZeRpr5ncRYLKWKSiUFYyzvSsLK4qmZPT5tNiBNXpw9Ke",
  "key12": "632kgWX9PXbjJ7a7r7PNcK1cE5ud1VUmNSaQyRz1Kmet5xd9kS2wnz4hKFDRyumXi88fTyttChF716fYsxu85ikj",
  "key13": "5crr5wv2ftfApdbKtGLs4SnNUQPMS8k4hNsjDZQ1ojaxGaViroPEAgqf6d37umiEG7xzk4hCCyG5QCXpgWPAQLdD",
  "key14": "32oQojP3uTbCZeuvsCgKyDu5LxQoNheguiypCECZzMsgHtrMHEnfRN7xKKwSGytscdTDtERtek94GknYt91RnpFu",
  "key15": "3RojChoXAbXCDKvaGdW8PtWk5r6oDgDe4o7Wm1odLThPFHYvhUY8QuwiGFA5NhyhmFaVM977DWo3ZikwSd6LbCJV",
  "key16": "4tc2x2Y4NCAyUrY7DQ7FtRRSq5Q4VQLj545Qd8ZbRB7dY6MdCpBud2v8P7kLHJUtSgJZ1jUZP1MxNDpaqXocYk3k",
  "key17": "2zrrD49NkDyEwVMbDFHVYdrLVEZ6X5gMDZGb7mfnqVc8LvsiQ8n7cwYPzqLTeAEGbQ2jsQ2tY8RyyU2FPSPWBWNz",
  "key18": "M3ghuwGuZ2vSj9XsKHReozW35skGapBdWQZU4Y78YLmhLTTGiCPPyDMASnUj9YSEmZkLK4QeCBDX9wKt1o42Wot",
  "key19": "4zoc3PHENVg6vqFB8iVF3Par2sYvA7jWdFcXEp4JtaCM1iEF6i2YPN3gYbHQgZhy8ppnWj57GX7sggKU3QuBKXGE",
  "key20": "3NW7GyzihkdqGGdEaUmhNW2vsiaynTEXCg9opKXFKJ8Przi89QMgDJPsMi245gZgfMXfPEnoEVtcGPnj7jTJKLQi",
  "key21": "57E3TTovvRmfJ8V4zMu7Mhxub8P4sjzbKsHQxzVMAhvF98XDT7MgggiYi5mepS1KXcExVAennpP3Ydbx53gfEeCQ",
  "key22": "621PP1qnamkThkao6atNn5aiEJWa9DTG14oMoCpJdGG5bnQU8SaLbVgSVTDCsMfTp5tnFZrQiT8PGgJjK58w7HPR",
  "key23": "5XjhdGMK3UgVm3dY65AxgufvZHqZbbAddAYDRgWXeLqZUDY8JoWUW8tUnXzjjbRUgGY88YuiqzCaS93iw3HYKbqc",
  "key24": "EoTtLqh43fqwgkT1apsXGvkG3CNAAHu2zP5tq19emhpg97KXenyaVVxFJjZ2uJuqjHHxCEAYEgQGnpxzKKrLZgu",
  "key25": "3zNWPFEpZgZeTqBxfcAtjY91fM9M7CF2vd9rRaE2khd3ENrXYffvb5e9hET6mtkLS3r1ajwFwPStH8DRNGcanUGH",
  "key26": "5JpWyjUDAK7ToJ4SWAuSqqiaXEpetCn88c3hFtqV4azVoXS3HpVfMMwaED8FRUkgzznDfkmUQeMNNB9HAtucRT9B",
  "key27": "53BPaSxHpLBRLrDqoPu5CqYzWwVVwDNc2RxaY94w937if6e8JUe4D4jbUx4GizS73S9ZZieRpivzuUiij5HnPsJE",
  "key28": "JbZDW4PS2wEZS43t52ugTLb2NfWoo3rJCdNyTvfKQqnH6w2GV82R4dUf1fafrXYsJFXgaLSh9UKeTNUev2Me8gs",
  "key29": "2v5pZAHTmZJdG5yV53SWqvNwdHMpHfnunXc3XDD7gbbngrY8JekSyxXRW1Py4sqBvHz61gLkZ6xYVNA92kbsMthg",
  "key30": "5FCYuMYsw6UPQwjY8xXZvg7ZvdpTi9NCsc5HXJhxkCeqpf2Xrz4Fo562VQFM6T6DuyDYecPnCmRPbegbUonHYNsn",
  "key31": "tz75V9SWm6iekTXi6kjg13JFGidcqXNXADwVoQ85uPcZ3z7UvWdeVp2JBmaEBu8yoxFMoF6uZhU7fkjaeJNSEsL",
  "key32": "57y5YdXRgh8FQDJh3ZxBtEVDqgW2RyXA4HuGJGAFyYzqyWmZeUgW8fU1MZWDiviKmJNvXpqEMyuFFdGXaU4TMpmB",
  "key33": "5mGsEKNKJUj1E5KDn2DMnKXMozMomhNRZBQppcVzxkkf3vA878GRdHrqmnW5tAKAF4sfb962sJGSjwyANJUw47Pr",
  "key34": "2ZG9qzxo7N3btVU1DzsKRAfet8CfanAxtCsPXKhF1cpSpFHax6s4SyZQiVPVLd4iRUZM51t6JJFd4EXxZVY5yr18",
  "key35": "3TEA7toPA5eCSMhVysiynpb44c7pZNHBoysNKqLHeojGSGUGHM4suYgvcWMXuSP5VJq6M4Do1nyuHsTszUeikSkw",
  "key36": "zAd4WJJXFQay9tqGCScg6ZteG8hQ7zzEAgDVaWZ79xSGUY62fKJyFa2uk9DvB8vyrGfYe3334X3sU2hARqV76Ej",
  "key37": "2wEsyFX2u5DS2DV3D9HSWyuP5RddtugQzx5R9mTJVSv3AnVRWQh4MfFs2qjayxxHU79KRx7RvGyPC4kodibGzitP",
  "key38": "3DRD8QKMSuEt5SFA7SVNETFhgfEkPhYMFC5GjuBibGe5xepejTNUQhiX62vmX62N3SAbWUeptpwYtfRw3kcmgdZw",
  "key39": "rzpBPPuJfmZJsNbS2JDJLN4hdN7Ni84ULy7nezmDch7PJuRf8sRy72S93RVVcCm5fJPVpSyFtVtcwyV8bBGbezG",
  "key40": "5UK32ZGuMMXB89Y7JTcF2MgNDZ3Rxwrt88YrHCicFHFVXNjT45rAoHDHvgbEzZZy1JfPA45QzME5aLbPfarfrWkH",
  "key41": "3jzjMDh54EAZaMQEfVmd97qUz6jydf4xPR2VkUwPuh6PCprAwWZXS6aTKpmfN3vz8WgN6dUePd6BocDN42ZDSumx",
  "key42": "5eVs7BnaRCccAbZ4NPyDpJwr9hkvzB3ToYV2ysHMY79mix6hh3ZTZHg22LD7YKwR4EsAV6r3T6TvB5nvTTZxCgcZ",
  "key43": "5Jqxwa5KgLtUiauRxJhv9CDgUxx6TypRhJ2BxPKu1tEtbTwq7aCZaFxn5rYEUSmAjqTLQ3WFvMpPfTMSZL9EgZ7p",
  "key44": "2jijkfDzuVpWZpM7m94vzeYrDy8NuSYuzLQMdCYR7S56uW1RCTHgvAKwtzqg9XRfo4m4GAKuqSUL5fJGJH4oTyYr",
  "key45": "5jHD9Mdyvii2SEHf4QeAt3pbcso3jQnrKk3uz92ajXBUd4crj1RSo5MePHzZPUzLMVXp7fwqTdw8LVzUFots4zmb",
  "key46": "2ENfaibeFKXFfDykKbzgW9jVrJ7AqX6gEe8UEYkrng7Qh5rZctx9nP2NDb3AJbDMDnJj88sfxuoAkzpMeFDETRBe",
  "key47": "4eWXabV5FGwPoiXDCHK8XU8SxTrWwRPnT7eaVr8udvEHacAaLpfr9GMbdWF7dj752CYNTSEFuopFqRCEaiEWyrNU",
  "key48": "3k1ucJ3hjCATZhcc6Q5rieqvHfqVvLh7SFyzoNQVw5mRsti1nMK3xESzHdPxJvA5NEVXqvak3EthMMVn5ZppVDYZ",
  "key49": "2tqwDDpTYxYsSbjLGqtzUyvTRtnLtTGJe9TpeAdZxcN3Ypy8SkPbeqdyjWRF3sYgBJdkxcA4jNL56LdVy175aF9L"
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
