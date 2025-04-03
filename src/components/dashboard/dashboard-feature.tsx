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
    "2CePfTk3sWRpZa1XCkEJiPp6k6NqrNejL52LrYwp7LwhfJKYprHm2C9uabLKXWp4je16GDwP2iH2MWspo6aq9XAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BsnR8pAozbU2zkYfyyQmFggkDBkAqba2oH9MmWqZkEwroCpVNCSP2K831tjYb3g6dtdcRmurT2d6bPyXwbtmir1",
  "key1": "2XrLaZju3UQxBAGaLzvq7XQC54NmmjfUzdM56eCDTZeV9qbQ9TtmnNamrwXNZwNRxgnvCDmR4mnriKnpwdthxKDe",
  "key2": "5XRugvdLFoAYEQCxQxRFpBQkNDa2RDAD9KFDvTLRBY6WJ1137EWJQsjZWwAqXt8wtVAFdUDGNA75ZQ1jGSG5fxf4",
  "key3": "2rLAk4zq8ZhAhc79eET78TnqJPdcSYb32BUmYndNet1sHEV1oN1YujndEENMx2T9PwhhonGmy4UqhLX71DqwgtVT",
  "key4": "21vG28Ug5mqF4xpRCiaStzb5vcJoTNo9qMLqMmD4T3aMFTXUFPBKJUBwj9b9YVErUs9cGMr7w89RggrDT8fDSqW7",
  "key5": "25L4ttp15S3rZTZjk73Sizwr12hw2CHB8YYW875uJ34L1hzr119M3SvwMkHYkRw8urZwdwtzboYH7zvoqQgL3GJf",
  "key6": "4Lfg7dzVkPpM8Sgy7L9cKWC7t6EeTCQp7mxZAtf1YEboZF66KMrwTcpmwEbA9n5DuuZSXF8tSftQbNNWVWUCZ6q5",
  "key7": "4KgSAzB7HMfPVkKML3p9H6m64RQb99F7He9deXhVqjAzyU3pzYbbrg7rwMgTnaoNP1ZSe3VD2TEYVZor1LFZDdHX",
  "key8": "36s1k3sza6q9VfRL4YtENiCjsvdcrqb5MYPxu2Kn3dTu7ispUjChVgRHtgo3KuhH1gHMrUzpovmfpdZhdHfrCxbc",
  "key9": "3NPSF6LsTCSTKuWJ5XeMyNuUR3XjfQGCXHctWq2NATAKfvbYjC7mFkDKfsWM6q7i6uekZqXjPxVQfwEZ6EM3Vbp1",
  "key10": "4inWQ8SBbKE8Vp2v86wsdSc1DqayXKhZYZbETbu7kDzxiRaKboz4k1C1MPDLDeWjHJf2ySYDQdU9i73uXdPXjMQT",
  "key11": "58X94XUHPwq6MUS23w7TkUapePCYU9ntCvTrPnCC4s5JW8xQqEzUH8Kje9X3wnR2NU3gUETYzvZEDcB5GQpHnpED",
  "key12": "HzGwbEthpVhxALdNQf4kgcWHrqLXVgrE4YvaqnB8DVcN6aoMmsRbDLmZDYq8jCqf6bYgYmcnnZUw1A2bLRVhVqf",
  "key13": "3ugwQfJizxkoVQjXujcjs5RbB96xdXq3y8WfWCkU9EM1EtL5Ze3SjdSufzqCXGKau1ELZZ2AGURYwQgLs3CdziNH",
  "key14": "23YR6wCVNN4K1rNn5dqiZ7nbrnTc6joVbkCU5nZowJ6SZ9gXwQxBUk7HJtkDpMMnMTe42pASXsEFZg3Th6HbUCmD",
  "key15": "5N1fHcN8zJC4rfnurj1CDvHgo3JuTL4uP4imxg4FbAfgeqr32GZHqFeo4sFT5t5MFziA2wkkFEJa47rxuhx1hBpu",
  "key16": "4JyoFugQdHDQtb6AYbGnT2Y3a56CzGJaDjHezYoyNrpXmdMcAQiQpCKDGf76M8pJjZczfgHokaJacWC4bW6F5CDn",
  "key17": "54DgfFivbdgJMHbD83A41goMkNAuwt1vHRBDeDyudFmaB1xLJRnkGjZRc2dWjBecQs2QjuSpJ7aywwKg4eNTNShU",
  "key18": "4jAtdCAjRYZpu6jKVzKisDarsX5soydG4Ldt6ZKWDHPDzMnaondANhRXMcK1WYPi7GWFxEiotCgeCoS4UcE2c9UV",
  "key19": "3ENXcj2FRJmoLTEAXmRGBbw3W7taQ3pULjYijDCweTtdwhs7yjFx6fLADeT2a7qwhwboagumKEwKMhNo3Po8URV7",
  "key20": "2yByVwooWDhMZKUW6Li6Xxv8YUf3njc2q5gJZsz8J4QB36dCTFoWv1Voh8RznKVyxWgBtjcfYs8eLyd1jbhmJ8DC",
  "key21": "55YTZCiMvmNZjAsQQosHYAvWLzJzyJTZFQJFfaVNrxE4coW1MHwauvsugn85wfJqhktqxQjAUqpRVK5D9ZyRhg2H",
  "key22": "4CPuRpep35HkvLfHKGXswz169f91vvqoiWUnjkVTFwaXyWicQ1jfvPWQLqy8atsZZFoJCE9zVfku8cdLf5pExGs9",
  "key23": "aPV3Da5r2Fc3LSLuLMSZZEhH3eKg2Y7oDre21KYHyFLGWVRPHsnaLFonCV73CyMYfcGJ9VXJZSS7vuUUgmuf6Gq",
  "key24": "2Foe2hmaAoDiDuVeu1d5ASzYoqgHLSTXh5MNfkDWjJqBxShSA35fsbpB1BsRCyjJhp2oQthHNSzssD7BDDMdamXD",
  "key25": "6d4cAUHjcvwuCRBVV8G5Zu1sHrLJCjaEreptzgwyKUoZWuFT2k8JqhX5e83Zc7xA6BSv2rWBUqkbtjgM83QJnq6",
  "key26": "4x5RwpJ6CZ6Wa2VMv1YUQyqNjZuTMmRVo6JaW8cAJCZ9kL9ur4XLdWoaJRxjjwbqye15NmZHwJTWWUhJfnFzp7Pe",
  "key27": "252zewuf3QyCvhvrAVSqVM1b6ETQku2rJLKnWz1CXxaYegonVoayitU6QcwRfGajYK2QKxiSC6fubWfN3Pw9MahJ",
  "key28": "4xM13D8Y1k8qQXRu9WwZEV8hBuLrNV8GQNSGaZeRnpUbchycnzMqwKQerDoHWXXnzHtvyAGQecBHaY3veu2cfpjm",
  "key29": "45tJbqDZwiaR9ZcKna1AKi2fhsUJgM3PoJ56j5mujmC5dGZppNRQUBqLB2TYVK9UVGZTfxjSa3WYqY2UFpe9vf1e",
  "key30": "dWEjrxBt4zewMtJUMtPULbv1D8xabJnQQscLRJoNbArYF3gXADCsKLjto3Dah3Dw4PopyX2w7yyKpeMdVep4Yqb",
  "key31": "2cTannLqkCTqDNyPN5EWLkPMGL3FhWRTZyGd5y8viTHpomHZwK24iwkR8KySNGkFzRVAM3NMutRBh8peifYZRHXW",
  "key32": "3eRzUCT8kvYymACsyfXbGRdmC8jt1oJ1CBSjUTPMuzrnCh7eoWseoPaMr4BwY9zMwXsVSLBtCuCgbXsdBGUTWqic",
  "key33": "2ZhS4y4MP4JL1GpWfGkMoF1uXan5vibzYFE8W9RuouhpAoLmCsG1dQkjyReViM4eyW33usbXoqzyMgT6J224YVMk",
  "key34": "3UBvNMXyELoeL4cUr6xmoGajM7bMaMGn5mKMwufFhU1PhfoCiwuNieeSoXPkQcMU5cSBoVmQSDJpgeqKiMfjeYTp",
  "key35": "2nMybbCW15ss9GBbRVUpR4bZUP4VV44Qos4YKejRe5CQBCSYgmj9kBoJamfeW8ZGAFybHvdzRb9trUPw8jqKdK8Z",
  "key36": "S1bPhCS7UZgNiCTXdxKxXEADBSyGpY9ixpzXz3cwW5pSiw4kBzMMMzDTDDJbdL6MUm8x8kknMm3CwKzGYPq7ka4",
  "key37": "5Yi1t61aVhhHnHxDwqKJq83AEBELhxf33fciMrZYetzA98KDxKVH6CKUSZ4XquFp58DTmuCYCMTkwxW3pChjkmRN",
  "key38": "2843StTgVBo6A3GNbi3wBHDiepv7GJiDNJEf4yjxQPk1R286q79GTwcoeuhxetiTzpabVTv2QMpU1FdFfdmYVvRc",
  "key39": "2fhBSETuvJCjUJXRa3sAxPmdwp6ivs4jmbi42jZXee1FBguhowbdvLJ3KGsMSpJ2Q6kbzXTqepK5dJ8oxf7DgPJe",
  "key40": "2E6yogCmyR6e9y4nrRLht7pcjrKiV7s9njSiGMyUtmYdatJkryZyQyJBymR4VApydb23dBxLP9PtPS7cJCXprzKd"
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
