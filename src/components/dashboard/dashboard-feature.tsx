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
    "5Dej6iPykJLHadHUU7rE4cCjW6SRR4JUXeoN2LUmYYWEmmou9iuGjGRMMzHZ9W7VMKEY3E3oUB9YMGk7DRqoWfL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29XNj7xnUNvZaB8oEF6cCxtbEP43coV8mXEEzv9oFboxvhL1UZ5Z2YGatgrLPKmMwojQwRuDNLjusDjfgXpcnJQk",
  "key1": "55xkfQUs9azNzhrKQuAz1dZCDQDZbnHszAvu6Qdd7PdKVNMPZzwjgkQBe6dUuuUGNuF7ehhGU44AL7iMy1MfG7UT",
  "key2": "jsPMBhYyjjbLDneMzxLh7mVBrk6ftECduvnAMKM5NoDrmKTw4ViTfKabP8EkUuC1GhnMDccbbGSxgEKaivSFunD",
  "key3": "4PMzpnxtNJd4vqvnhSthNSH6fCbzi6KYywDkJngj4fGL4ULwyxDW4BnDt9gKB1YKfXmVZwdp8c77kT8PZXtpBUFa",
  "key4": "3rCtTAtKc2ofnT7iLVpJKyXp41ZePNigAqWwW1GCz7b1kYa585BwpRxfrtyndGZf1KV6M9yQR4dQa3vwA4Cq1u5F",
  "key5": "eFRZXVoDvhRPxzRGuP4Gxd7LkMDgWpHfwXWBWEfEjvSnPajmQhz45aRoJvoWz5QBa8qWLzeaySCjnsJ8iboB9YE",
  "key6": "3w6PRfv5iSzC3dU4AH1MbYiG9C7o6Gh34CFvx2dcdbEkg187JmA3eZNmYnHcwYN8zTV4MNsNmN5RBizRn69xKBoB",
  "key7": "879cCcYCvkTvQN5WqTSuAAzVFmkpteNxXnkynxYxeNDjUWq24wDKZAc3vjkT1pE96CZpPdwzVktjkvdszUN595c",
  "key8": "4ih3GjuHtPGMTm3H97Zd3gTSPTqu7eEd2uT2nsiTYhnE6QV6QjbjjGRJWJ9BijkmP23vL1s3dhii9GXVT7L5JDri",
  "key9": "4FenHEp4c55wSX8ZU3XXNeLqYPUsBSxFqCemBia9PmnMibfYGdVjbziiomavbDUAye5b6kqoyYQwedZaqRcmB5hb",
  "key10": "5Aq3KGd1Hpp9Ctc4zyR7pj4a7zNfirdmTmtia4f5xXkcUFtuJtLuz5E6QkedgawfwhSwAK5jvAfnesLiyMREJzjC",
  "key11": "5cUptE8ta9rE7YGSBvCTgTPTvreNJZCwBvSqxSiw64wcdsakQKDr2Rh5hjHNKPWgJZaqYdSieCbxvEi6PQsg1umG",
  "key12": "2ta5rQ9Aecyp7NeKnA8a5BY1LwXjRF84bDJQVLJBcb5GWorM6vFj2C2EbpST2JRrdzMincd7KfkRQFnwwb2vbmKD",
  "key13": "2wcPovx43FTviw8nxKQNzKKLGRECDdpjy9hUBypfndRJ7VFeitMwKBGhKQhj43agPD2pbKi8XBXCss2pf74Tpzk9",
  "key14": "4unRjCAKBraxspMBn1isUxWCnQn4FHoN8fn5SACmajrqXF6RHT8p5Cd2QCzqch8775yX1RHAZF9Q5hSBFR9GARZm",
  "key15": "5jNzNnxCnoWf1owMpSPcb6TDfsvTCaS7bubwDpRbk1NTgGHHJHmmRL1xEs6pyBpjLeWy2yLZCppp11tU6vRXc3tU",
  "key16": "3BjX3Rra9BQasvdHnrYud4sEoRm47CkERssbmNVhrT2nY7ZVMdVtR3KPPmeYGREmUMEQPEuFrYoyeks8Eqpq5yob",
  "key17": "3nRMW9QXMgXH8qAScGeoDZ33PZyqbUpR9vQfs24T9NXVSGr89qXwxQYXsU5miVawFt2vjjYmbEx6KGroQ1GGaUZ",
  "key18": "3VJuXhr7iAAGjVmEsQQkpRmpsEMJFZwMyC7G6pHJDuC7pEZ54W4dVTHqPPvaSYbjtbRZxAm8fD4eLxWe7UxKp4M7",
  "key19": "5xavL4P5H9eEK3gcNUCBHNsPjhHWyU3FpcqDx17mbFRosjEWCagzrr8erkepY933wQKYkf8bBSBJw6nN1WLp86H9",
  "key20": "2rvQeFupF1NsViUs3kitezDeaBLMZcBjVXup2EKHXReAgXaGmGViN4UoftZfiZzLE2eZr6yszxNQsucHoXCbMoT9",
  "key21": "5AjrDLvRoivhhuauNFgsyrU7iZu1eNkHWoVmHoDfMBQDos2en5RXtMnToxJEKzV4n2svZZXz3sJn6fwhJQgMPgFb",
  "key22": "2ED7CETUQFj4fyvF8AoH3LqtpFCAsYneuAy12qCiSf1Xrk6RoLmeXAD6AkBkkQfRGqNYKZahubxnwQg1A7iq54vB",
  "key23": "5wjKmaLSnrg77oomMq88zCtiWr4YiLjQQNwPnzasQF5h4itzXsSPaLPDvRCdTTfQRsmroQZNpg237f9s7pn8Ar5v",
  "key24": "3f7LKEHEbxsxP4Rjr6Bk6zeBUDNDWWRpN3FuGs3EjJ9kHsu9r5bGfcQG4Q7w92u2dozQ2WSbpFd9AAtRv19XVAM7",
  "key25": "56JnPUmgNhkqE6vLdErkXptxmWFPKnVt3gSHF1ucAinDdkkC6UCJsYWudNri4AdnWAHZtjyvE7LtnRyUQXV3Jhyh",
  "key26": "3TqBd5GGBqzWRZatmfYSrKGiA3FndmNsJFcy7GWsKAtJRqV7XbtKKcFkYYDZFHEdprtkbfM3vnVcmMBvB258RsP3",
  "key27": "2Qo1qPku69vPcUfKtQJA9AhH7AYMVThBJzgmj2exYa5Zjd7Ufd2ZRuTf8BgvfnaVDR3ZVSWmy2huFKhaFWBs2psw",
  "key28": "35CTW4NNhrg2nhFikNy6yY25m3vQgYuG3hbGNZKSE22dj8vgY8LLJtPTGR5ew5W8pgvJZ1AkKzyHuE3nB7xzscgi",
  "key29": "4UcunjZUi3vwc9RrydmR9T7ScGZVtbwxyZA7mwUCew2VfB14SNHxYuA5pq6WbEz9qAtjHzQTGi1Sh2ZLEK4CEqdM",
  "key30": "54B4MPaUmvkppfcUhECBwmcauLCby1kNNFt9swtoi5pUyZ6hSywAyfEJckALBhaXyrQcfUcWjMhmXfZp5jANnhjo",
  "key31": "v5LbuxT5JjcqAn85YFd1FYjhvoFYZQHK8vLvcYhrST97wKjF5tA94wdbiwqz5ruDYMKgP5Gg14MXveoBw65pGC6",
  "key32": "5w5qMsGGgJYkECsr55Tr7jSAfm33Wc62TcpV2oSa5vbLJVkvgaRPpNWV1njBSxFmT7xFuJqTKamVfHBXMs24krYR",
  "key33": "fK5SZgvXvTZ5pEZeUdLqoCB7FqzcmJTDoxZgBaepAtby9gjYJkNeJ7dCbbDLnD7E4ZNdfcKtaJkSgAL1UTvr15P",
  "key34": "5xjZsZTZxXqnENjiFE6yGpRW5c5y4LWMKuCBnHUmdsDHNJTur1f5rzeByXAdwUpd7b8YCbi5HD4JJGGXvV6Mk9Nd",
  "key35": "56AK3E1FYtaYrkoJsf3yuSXFVQJjqwWSBZdomt2raQAkNkC5mpJ4qFpgsNdEPvDxi2MTPDY8ziT73LcC2qpnrySw",
  "key36": "2fhqMP4MmFFd5EpDpuc1x2PpJAzn3SpJUCZh1dQgux5ZbzbhMxZ8dFvgVvPYnpR66mM9irwTiXVRR21UgskcG7xS",
  "key37": "5wbxsoVHdCAptKG8sbLn1x2N3812ZVU6DnZzWhjsPS1tSzGhHYRWRmsyusrc3jUYrHSPHcT2hX24PFNicVwSjU5k",
  "key38": "3Zc7aXV2Sjtoicy7jJ1fz6LRyd4d2Pi6fA7Z3WB8iJgidRXxi5MAJu8BVBXtuncQXX7zZ4xNqx3AU5Zaw7aFtCTY",
  "key39": "buYzJupQCyHgZ8crRw3mYPbEWiutHqEGeRnfxvCPadeCwSJYiiEe8gGEntZvpZ97o8iAabD9i6HeHAiBepRajXa",
  "key40": "4HEbx5mB9cLGfukQ1s3FRPmNj3RRgEZLP2dJet1cWjh5DnpdrVh5cE1gRPXYtRrf8ytSEEpkfe5HeoTqcz1kexni",
  "key41": "5MxYgeR9b9gS8KR13ESMKTUzKyeP1k4mWncYcZ92a2XLxwtZPgYdMYNzBrxe6EjJJLXkRhM2FChuSt7GKLK897w1",
  "key42": "3SL8jDopXTWkg1Sh7xxXGmJ6Do8efhvD5HR6eYNVyg4CFwG1NJAEFnkQYrBHijzYkgrfmoJgdu1UpcYcxDAMhr8Z",
  "key43": "4Ntf2TrkVbtd79agzo5HkckRMAUPZU5hqjBmZhLFJniTDdWjfpigUJVMn26FRgJFGac818xQNkXhaQPwKSS993eH",
  "key44": "32gFWLrh2EMwBs55mtSVazLsPudRvL4Bo4q4NsJmPZzcfWf11LhKSyu4FYekX3NfU6kcSfnPfDQexXA8Zv4iywhw",
  "key45": "5CuBuusQYHamwS67pcaJz2DqW18WGm9rnxnMcLooZ5vkZV8k9EnWaso3EKrGEPcUHYDE8UynDUR7n4Zm4M7sZ1a1",
  "key46": "i9a43zqwZFjBnWQBngVWTZtssdD2QTTJs5qg5TQm2bE1T3yuVqPQWX2NPJdxcDDbwBaNLJ9SPwmDmdJRZT2UR3K",
  "key47": "2AUAbfVceqySPeX3fcEqedGaUTyGCmP8nFezPjeipi32BmzRMbyx5ENsF4b13b4bxLXPuvxbksyzpL3q6k29Wscg",
  "key48": "rej5mHJPYCVk9nxziMtDyGmGPTkAjgLNMx7iFkCEGRMdk316iw53jNDnkrnYunskDJSbm4kCWpd7hGELd5hCiLn"
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
