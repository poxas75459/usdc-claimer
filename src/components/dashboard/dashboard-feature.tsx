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
    "R2VHMV1c7CrmrA5kBdEorGJrp9FhFzbiTohNbzNdyokLChFGdCGS1QveJafN2zSxdKXycjAJvVX1BmY4NMha8MD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hf3dJCtHreB6zfbaMaaXoFr7PTbJ3BiBG4rNRt7Dg4pM853ZyS2i4ivLAgYKesvBd1ioJbFrF2ZkSa1BfRaYqhA",
  "key1": "wgHgF3i53t9UbD7eEnEGYRb4T5Ywvaiu4UjhMbq7GAgSDhMzxZf4LSqz3diuF2WEx4RdSsDdAGvdPKPeRJRvYc2",
  "key2": "29Efad1WK35FvFRnZ5cp5NnXdP9o4bNUkDHH36pxiGbAboLSWteeUeuZz3XXAXgp7tGaC11GPUp798LaZk3VzSaj",
  "key3": "4Z7RjYV3ZyFkFwBX7o4B5rYSvyzBRCow7BJFt1icdvHenBjRuC9GYfdcHUCUwyw9JZwiNqbcRMJMw4VsFWWAMynG",
  "key4": "55X8BtQ11L7pmbfStciAUDkmMxfEnTiF1awv4pQKh7fUYc7Z2Dbyyxc1exqfDe7FdGUewknRFMTcViNCDV5kVvro",
  "key5": "4T647xwjtqZ3t8BajjfczJiPyJCj5vL7yPj2NtXBrGgcVfD1bcPK2DL7LF46884iV44euFeDz3wPP3Z9FKWKErmk",
  "key6": "3ewMLbT6v7KRN7Wheo9oSLgSmkqSr8zXDs29Vz5HxuzX2Ho36nLiE812x7Lm7RzdVTUCSfq2T7vVtJpWhPWgvt2J",
  "key7": "2UvFGfY6HBXYLGR27yUJK3jnGVuLVB9XciKxgL3i55Au1UK6yhBoV2MXYXSM5S1a8pKLUk5CNPnk8zW4oWRQN3Bt",
  "key8": "4xX6MzR8VhBjvFGqAE8dkyhaerq2ewZEXVKgsxvbQ6WE1bVoqYRvePyEFoUBGYoiZiaDHHpj6pkFbFPsAQmTMuFT",
  "key9": "3fHmGvwM7umyKhogx3cKhnPH5NBSA3nWQqrptpB7iTGq8vMEqBtoowpFYJ3R8GA1MMW6G5yjV2rRG6YVBVgEqUBR",
  "key10": "5z92KHgZNTcSrHRZt2Zjud4hkZ6JG19Cwg7uKas6pb8zpFuSmhd72iYW6mEtu8BG87dLYHSGHfFcTkXUnKHzUi69",
  "key11": "5SzLiM56nBEzb75YuJw3r6smgXwqfc3wbYW668gnWTGMQ88r17QtAyJ1fMtsAbcYCB7UkbUDEFu7rvCw2BSJyKJW",
  "key12": "3UD4HgkCJki1DvetWu5ky7Eyd4YvKdw9He5aWBmd126efFa5URQYVQiKpqoTbygLzCiizng857coz9DYZKLCGQng",
  "key13": "Ha6XrFiQMHnAKeXBDxfBL33DyWzGapXaa2FSqbbCruerE7GLiHt4zgsKo47U2Gp13hbUujkbEFLb7uQT9f3uaVQ",
  "key14": "5Xt7QiRE1vSMsZ6b2BHzinmBPTYop3eMGPXHo7qNyd3XqHiYBZz3DDSsiFwE2u1fKiEPL4gNjBL3aQqRXV3sJa7S",
  "key15": "2wmY6VPj4qrspK2uWsRtn6Fg5tRV9EQ2TYhnAqJEirUD6eucTmwVhRdoUi9vBFPSiCsMs6YhA4aaj8fzFdXbbUer",
  "key16": "UuMmzTRBfduNhFcPBEmKnPnwRkKdCG4A8kNCA3Kdt6ksZvcCfS8jSk5jqtDnFsxUKxgmDC1tEZYv2aNLAkau75X",
  "key17": "2sSmchZkCtWUCAnAwgYcnz1aTaEQaUwAmrAFFbWFyaVVYKRnVK1sVJ8E1rN9PJkuQnR4PGnPmDcihvttnFpWK55i",
  "key18": "2Gw2ovVLnrYxKoto2gHiY99XA9cLfrXiFY9u7QCKue6pM1frnEwDrfHkEVUc8bEerbETdLpM4edFtSmneCq8Ci7X",
  "key19": "EpHqzvPZCMjQwDUocvzxmdKur8VsDY6SStuRwd8rJfLfGifGHFvtRjUq2UmZwjFFu9HckV48A44rhVK9KRg9Qkc",
  "key20": "5suXUCTTiyFeEKymnNZsiS87EagRFwxztN7dP6ZL7wPypKNr8ZQ1MkkBDVJ7j2szTg1g9sgXnStfaazUysHz6VTY",
  "key21": "2aAx9Y1sW2WumarsKQWwrMYDohyXt5djAkgr3a6bRf9C2QD3WZsS1ajia13SCjNbVNuLMaSnRi6GFonbBmcQK1cR",
  "key22": "4J5k89rUJhzQcLvjUbEzkGUCYL1PPvmYLuKnE9a3dnxDHEsm2Qkkpvnendo5ccokRuDUsp9UaZTnWpGyUzUqek6X",
  "key23": "3k6Y941M7VgTW4XJrMPrv7Dt1VkHh9zkodTtpDZsJ3gSWU3LVvgPmwLATy7Ej3cY7hA5j9Jv6TsNozkXeBWuPnnv",
  "key24": "5oFCMkkv3bS2r1S6UqWY366wXon79JxSSP2cxzZmLwKwjnLfMFRjenGq2J9MSoyo7EUqY1rBtM5Rp8xLzK4jm2qu",
  "key25": "5hVEZbUP1Eaap1W4KSY9vnFtSf1Ek8hSunCor25ziHmnCtyj1tARj1YLSoYU2iGLvyy5zPRAmDPRXv5VAdudMdi5",
  "key26": "128R3uYGsjU6gVLrhMSvY1sXsSZu3cXNLt15SfVD2ZMoAL3sXqnWQhndXvhdjyHDGLZeGZzJn9dEZF9Z6H5Uritb",
  "key27": "2Bfob5V4gSuEDvWwNfzKodWkjCYQaWX1DaPjcfEgQ7ftXP9K4wVhr4WVGkTwBf9GhcYdp6kMBBkDiq5cD9GmzRwy",
  "key28": "41AUhonujK1EwuBbaYCbVXWeHxxCbC7AByqCQLSZ8miiHhcgiArXduUiVknwPmYN1nRduPh1ggHSFDaCczAAzJud",
  "key29": "5CSNRkwyJwqvcF3PZu7Ux6BPK7oM4CKJiC7cwdZB8mv46xKEwsRcGQcNEXz4BZXZcg8TTJa864xj4GJ8GUtHF3S3"
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
