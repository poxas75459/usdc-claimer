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
    "3KKZEWqZQheCyVJ4Sd1hq1H58stufHtKCoAppZcNa8goGjR2yyr1JRB3mqJAA2Aw7UcKVRDpG1zx2ETQQRba2Nih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YsCqpQuenmAmp75CUenXk3CUNC9GdEhMT3gmH2yNLyth7T9NHzuAaZQwSUTm8FgZaJnGybiX6bMFHT12PTYhTqE",
  "key1": "5evw7oFZgn16gt1ENYrXgSNMoYG8XN4uageKK7sHW2uFzWXkaJ2ktEAmMAAzEy4BthBM3N6JBggKFNXd8jNFdQH3",
  "key2": "ap356iQHS9bLZttLgsmDry5eXgNPP1fHcFbHjqSbdzZauQUJtycCNhmB1g2VdCM6X5KfqetJaCDtuXd5itYjrDh",
  "key3": "TEtmXaYfAgzAdJw5eQdrp9rfhE8DAmvaJMtC1cusJmBKia9KCtfWPs8z33ui46sxEXM57G5rVjjxKVE7JPAFLgs",
  "key4": "2ibpguPA6YsETuMk3Rz1LFKh4t1tNL6RDrELugr8HhywmkytrytDW2vSW7ELJTqav6uJjW621uHypofGWMmmhkZw",
  "key5": "cU5aYutmDpLtKqA7NRx6NocsE6qfuZkE9492jC7dtB4Dgkjk4SoHUbLhRNNwP7cNBQxCrHJsaWX81VYZcDJN8qE",
  "key6": "2uMJPLuzZe5DGyWyKnvuHiqxLByec1aJxPVYchNEsH9taJRPnp45rmUiETt9k2n7xhDZ5oeMP6GggURrK4x5g5Fi",
  "key7": "3wCd9yAvrZc5czBcs4dG2QUSRCnBWSGZ16g3ecBeYUhseyTXN9pc1TFVkH7MdYvR5j9knJNd6PqwQNG2myZXSLEP",
  "key8": "5GnY5GhnetGbjYEW4JDbf3eC6rZY9mEsuezRFeB8SFtx6wsFJRGbhFFk6E9Uj357xgG4ky4Mt4SLMfmxqa3LYBZ2",
  "key9": "5MMqomnt3ghQTsSAePtQeaLEBhhWN7jFjQbZAry3CW63LD6KG8ThmM8nfJf7ru3gTgbjoDudgwMuBeoAeW7nw1j8",
  "key10": "31FAvMWPrvg25qxiNrorStZeqrRPjTApHwY7V5M2BGjkmbTWSjczmB7cKfGPZwMuCg1SobnQviS2PKJUfXz8Nzhh",
  "key11": "3rYgw9BqaDEjnH7rC2mYF5kLfHrK54AZNaSrysEysuhXyRdo7dgQRWGP11F44eBHWCvCqZES7hJKFhvBNbbENSp1",
  "key12": "4GdvCsXcXiypvKG1M2ELaoNCJRfUjjVhK8Xac2bD6dsZXmrSJX3deeVr8yXNmQJ8d9DyUWNbgnXzpg7vkp3zQHZX",
  "key13": "56L4sJhUCLNVqjGzwsF8pX3BGRHcKqDh9SZ1HLmNC7bM43xT2srWsthjLJ7NMeNQMFZ7APDajVdthVEY7v2a8o2g",
  "key14": "g4mhm4c825sTnizDkJBymwFAxmQcCypNiNDoQgqc6PpMVKR7hANQX68gB8fh1apqgVgfcBxxzYB89kUhRPx2soU",
  "key15": "3nBzoi1srQA1fZL4nhW3F7VLzjYWiCJNXQTWDF1yPWQyTCkag47ReHeCh1PqBKGRdtjMsmKeh3y5qDHvQUNNzf48",
  "key16": "3KFZZUeXWh5NRxgQ4bTxyQaJkTrPrD1fWqhZViz3mDCosUX6ZujB2dycHYcQKRhwAPsaQpUraVpjnceYBVmVWxDM",
  "key17": "hnUHvSY9aSSWTSaz9haSDz3jiH1yUvJCU2vxy6tBHWJ8g37xU1PYJ5kCzXTeGApopZNwbVdsEemHq6mekNaPPqJ",
  "key18": "3PMw1h4SiU9rAUJEJugCqVnAENP3kpSpeyrREuAVeZEmNQUsxobdaKhMCGmXjAM3YE8N1dLm9PzKTockn4733iPF",
  "key19": "4V4KSjUP75LizjFiqxFR9CogC9dHJjPw5HxfWUPkvFy8qTXhfZn6DtxxiwdmDqs9i2e8x3Qjtu8wzsxb2JmbUTuW",
  "key20": "5zPuFpoxT8rfo5doAXqCoBgeGe57omfNuznRtE6JmF6YBqeyVUZy6h5mSHafS7YhzDp1KmZMpd1ZshR2kjMLThQ2",
  "key21": "4iWX3kUXVnR6GmnE2DRyXdE4bpdMDvC8K4Nv2xa6zi1L4ZKbZktDuSxBn5Mb9w5or54GnQvLXM98hd3fynLEsEx6",
  "key22": "cGprQWczX8VoWVC7iCbcrTKoJQi8p3p9t3GjveQJavxYvF2ehwjTDjcMEbMwuGcgTLXbNmRefpTmTKdiQL43FUD",
  "key23": "2f4LdhqkmsjsD7jEWNdcTWZeEKwSWQEsEuV9gKA7QP6gqm2JLW4zjADMcXJ1W4uKet6QYBcbifr6CdJgrGAeVDSN",
  "key24": "3wCjjY2cRWnoJqNaVJFxYiSeeqcbh8Zu2xu9FqyDr5y3Yvdr3ZtkH9p9LBZVXMDLv1BxRTorFNdvD7UDtU8G8rCc",
  "key25": "3dGLihy4qQ5vuFvs1rLYumGUaD47Em3SE5NiKBbdZkNNRLGxm7ghnf8RgcUaYypnxW9xEnq4FdBmM8TATwvCa8JT",
  "key26": "4nwNWu9Qo6Z85jk8PoqGSP7CwahQyks5sCT6gBdCmd4sTpcAJXNNC3q3KUyag1hvAMkNunfnzhejd3Q5JxhE2XMd",
  "key27": "4xxRQFT3ArXZVBHzusHxittkU3ZAteLgRN9KZmUNy8jnuANhg5o6x1U92TsrotAyqTpJedZ9CFtnbnLfdP1ec3vy",
  "key28": "5Uur1qHGKTGKBt57ddowiE8KeUh3BdknnZ7Dh5Ms2MFvRXUaADz5jo9VzBZe2VDf6r5RakUUNn93Dq1jSWD4yg2X",
  "key29": "CrQxMG44GZuJq67tbk1e8LXMsiVcoBqdDh8cCCWTBPLHsvjS9vQ9oNMsrsH9GE9nkje2L27soBtNdM79CukWzaZ",
  "key30": "42kYMaVm9WSHD7tPYDSbxCTSwsWjDearDUunY8ZEa23WnBwavwbSFzUSRS2MdZieiYYwJsc3HDhpWyYqgM32sQC2",
  "key31": "4aRWpKGvfzgak2crqMyExbseETjg2a4ut8XhEkFo32mF8AcbHv7w3b5M2cC329CK7BJdicMPNr8T9gp59dMzzR72",
  "key32": "2CMzoEqUDZHLvbWmVFRuWiJbTGfagqXABHLfMPJysnouvcwdUyEbgphc5vARQwXTLTqrCqkD2KZXZuSaQnozQWwQ",
  "key33": "2Yi8kjPtjgPme5MEUKVTnz4X7SVsS1z98jwK3W5xL8x7BfizT2yrXaVQSJob7jCnWkzThwDCvxahK7m7aFFVS67o",
  "key34": "3tvhw7ywjNRt2qqSkmGMGY18W2jvqkiPL5f7t8P1YaZQuxJXZCbjuECKwkpE54UiZr7q5gvvKPYJb1JU5uiiGxwT",
  "key35": "5P9F6eyUprEFFGp23eqbuq8xR6N2bSFsS97VpzAH8mB725KP5hSg5N8foAgGsNiCjbYVaMmE3pCdigK5NH17DPFm",
  "key36": "3bZVAjTuCvAzm7uB9BcZzZLcbLgR8J7r54dWJGp3vgMj4PH2SiTnVCC17o1XoXWNStvf5RAmmzkhizsYgTquwVKB",
  "key37": "2mgBTL4GPf3hSu5zGZkadELFV3Tq39pqHksqQr6dNRj3RTTPadynaifkfVFA7Dae7cRPDmVefjyZwUohUBTMsSne",
  "key38": "61Sf4uh7hciemzfBXhJQfBpWu3D12zQXyzsPguHRfBbTwRybnCziN2PWEGvbxjKSPZ9o8hpCKK88jhEVzPPHZ7Nb",
  "key39": "5bra12LfCofYtzGJdc2aN4wvF4mLUSmzSS8VV3Ureg2XG9TsfBaQGFUJ3mEXEogF4iH88RaXr8uaRpUmFAd7yVXh",
  "key40": "339PzhJxbdUgNPuWSV1T7FpEDMiqUundySdJ4ZYqdZv9zkMe1r9JfZnixcMHeoeUvrEhMvQNs3VHzLmmymM83nfD",
  "key41": "2MHtb7Z1z8qxfYjMoS535hbKjcrWqy89EhLVbVEWJMC5PJZHvjj7UkW3kk2SVxRxDUiq7ixRBwtmeDxUsrE59pVY",
  "key42": "3vyuFvUYhkwL2FiuNZWKkpgRm4LMo6KAEDk912Bg78HazJR4E7whEnTa4Hf2Bft1dn4HWGXAz99gnq6i4xGSexCF",
  "key43": "4VLJ8ovGFZ1PF4tUCcYWp6d7QG69kwoVhW78uwmZBTr758iSBcATZhbxKa3o6QyEat3SSTGfBn38MFA9nXQ2fJ3D",
  "key44": "3z41gb3mQYS6V86ax7imirW96ks2DPH9itipiFr6JAH8SHcRxnAFmF4JNVz5aMaCGQ4RBsRh8g2zwKYVHBhMiq1D",
  "key45": "2ikfAQKXyWxpuUA4qUDGd6R9ZBjPMDpAFvoEuD4XcLmVhXSVXWuW7ogsUfpLLUaS1zHNxUrHESisXEqTnrmRUJTx",
  "key46": "3nzwLWHDJqKL2sEqFPxmAHGD1xCZBgRz9kRfAAuvCAt4vS6z1azQHvafCKXPYJ77cTL7Q3Nn8p1ZHAvXbV5TcZgs",
  "key47": "C179yhShKtjXqX376sZ76SEYo8nvwiKx7nKi8PRxVPfg9Xv2FZ8pxVbpG5sSfzQqDejcBsNHewccLPjWhU2ds4r"
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
