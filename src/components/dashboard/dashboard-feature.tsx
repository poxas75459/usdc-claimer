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
    "5i6RJDtNUuWua3gAC3XZJiSCbaesFAyYeE89jJ8eDzuWCakhn5stCDpzVYEYRtcPgQwWHe8uHBKAESEB25FzyEv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fVS79RMNq57uZ9zTsU4P9NN4wSSdCdwye95b6xAFyYdZVmWV3dM2KVGVBH6AZCdiBU67xrdR2AUjJkpZPNXPKc1",
  "key1": "5Pw5bQDFad7Qd1CRJtUE1fExL4HHbpXBBtfkjAjcDK2XgZMUoYeHRaHhUUReu3xuZJuPsdaSJC9oAeuxf6stAfo8",
  "key2": "EzLHU6DHUCQou6Sd9KBfAgAvEkhBuVbf1eNyYqGzPh6iBoLmju2geXx1HjN7qvWfdBEpujHMCziTrB9BkNzhB6J",
  "key3": "3HbnBvozjXRbn4nkRYPVt6e4gVBg9E2jLjEWvsEcECzJHgmr1gS3GkPBBFCQVpu5p6iptLWpXZtvBohQaCqsZ8BQ",
  "key4": "nnYbPBGQUUtp9dymySJvsR55JeVxHTHR3Xt7PprtVc7rhdfuuuJRqqj2MNhgDyjvaRYz1xuob47EacDunpuKuFE",
  "key5": "2mewpd8E8Wf2KPKcZTiWz2E8iYYhA15dKSMJpHkZYX6kxoggNzQFDyQ8LP8nWKHCbRc3e353PXMTdLDCUBaeaQ7e",
  "key6": "521KSjsi697DZHbWsfrBmss6K6ogQS9MSbnHJgdH6wzXh37JtSvvLPbBqUSoHobEVREbCbbtkeWUgMeMEtktCauU",
  "key7": "9RD7J4zKqe5UztfYsBHf6WJcPfVCGcR4tMx3CCH2U16sgu6F8dtWLrriu9cvYa9KGrWeTaG59nf3Ss3wB7hTTzU",
  "key8": "2kKTpifSzxejqn5r6BBwVtAM6Rk5kLqJLVDU7ACFwgMZPfE5vfaPyDa8DrumFUVBn6xAHvPG4yoMykHs6vZf9ssb",
  "key9": "63KCmPuiLR5QCErPP2MphVv6EDb6Wa48AwrKBM147kb7dSNLHWbs5kXm8DVmPkMEGCX3zHSVfqudxSXHEV3JpSes",
  "key10": "567tYPMicQ4jX9h4XkaGcM4pJ3ACrm4VjaWmbRr5KawMYRV9ioj6mjGUsb4fYN6e9cubPW38FgX6k3LWRAfPq5i6",
  "key11": "DAtrVTnZoJrbRrJL3Gnoz632CrSdiy2gp7vPF4UY8SGberrxNxFLnsrX7xhkjfnhYRF9h1kkouENPDiNEFpyS8u",
  "key12": "2LYgrfCAXFeTtwQebtMnvUjRp65AbTf1jHDSdpQwBQwrh64bdzQLGXueUxtETZk9tjt9W5E2vYkieE69SgpykZTN",
  "key13": "hKtpNQXfL8RR3tLFYdoMmMLy4TZ1moMx16xQ7fgKkSJM1nJxQiSjwJSgQVXaFYRtJ36BzAz6P77yiYKsVPQ1evd",
  "key14": "4Y6YdfRjcCBrDzk5S8wQJT9iL24DSW9JDNP8kiGCXivmZqiKkrFUsRtyNcPig7rXtiw3E4q3tg7LwYmebksA63vk",
  "key15": "4WArmzdGuWSupd8aPETYLrfZQpQUNsj896bxLBho7BQPjy2pK3WLinRLoWGxgod8cQ3yeb13eBd9GT6pMznNBXxA",
  "key16": "ZjkLBVqUkAfDBkATVyb1VZgZ5HLPQa6evjosmChBNfDBW3XwBSrX2H46Qrnt6DMdeLEKjbvYxk61XRJ933Jnh8H",
  "key17": "4cmGhxJjL3V7Fft5Cje9jRSeSCfjVaFuQFEqgnshuKwFUz53aygkQrXnoXaZZmvbEdqpZtbgYc18bzrWC7KJDL6A",
  "key18": "4oBPJGzxvATvyvvrGiZa45uGdjmtu3nuWTwz7qfKjNW1nQj3c1NBtTSoLE6qncsM1wt9NktHTneqWKQ1YFe5wiUL",
  "key19": "2x8vQtA4gc9o8hP2MMLFLSG3n4rPiPEFd5vSAHnVBvXV8WkuJZ2yozE5AZMmTLM4w6RvHKXj9YvKCrEkHLULr6Yj",
  "key20": "H79jBtLVNjAPcDY49uQTdoEccTquEQFfK2C5k5wogMkQVJtuZiGBiNGarutLP7bSsUnP2JWFknQs6UvcTKdbnFs",
  "key21": "KyrW3Pz3SJAFfFhV7h5XqBPrYMAi7d19asr3fXxvhroMQudwQpXD6TgPGKYgccTw4Tt91qfMTMQaWgrpQ435ma3",
  "key22": "3ZDtPH1y3dQj3Ck4ScpKttdxnkwrW2efXGRjMnRT5DNqQ9zhRc7bfKppo49k1wxavXt4P3waW26zBq7tduzgUetP",
  "key23": "5ANm4H8pJftvwnjke1YQVsxqYaaYho4Kw7H298iiyxSVanmKQH9YnhPJ33rTGE8BVC3WthRXPpDomGrestRNUL11",
  "key24": "66WDfW7Nm4CFQ8thhUSpNdunjwvrhjHhETGAhUdeScZL3oxsRG1YHNfzR18CfMNyg967nqWw9EufGCogbxgBiUGx",
  "key25": "6KsVpciT5543puwSLHbHgumaFVUoXY1RAw5gJpTmEdV73AM4ZUoXwT4a2nTkzME3meW4RX77o6GGSkK82H6MVaT",
  "key26": "4iNx21rWPA9dZGFjDJsHgXpB4ju6Fhq9LKL331MuqEFG5hYeUXKmSNuaqoyLqrZ5dUqZDDXhnSkndavEgqWA9Gnh",
  "key27": "5gPv8kr9owzKVWWZfFEPkY95oKDQU49pfNiF6vSRJDmShnxgYtoCc5rhu3bvCZrhxLWK1oANvfbCw2rBcm3qRpyw",
  "key28": "2T9N2mjZ6gSSaALA7oXYHMxCME7B6Sz44HYa6n84YmNqSDDHS4qWF7WFQuQkKfV2vrrZYCXEynTH77d4EBuMQsSy",
  "key29": "daZtHL5UTPQRdqM7pv32Wv5fAqVkUzY3tU46DbdLXBqmKuZumuarbsGezVoG7HHrkqqwdzcJoeBfYVCByuTrs2c",
  "key30": "65DSw9ZoXiNB7XVzceND7AcQqdBKzLYY8BGYbBX3bfxoSeaauRZmkRjW3so4UvfEPTcHaw2zwYzvTyMevKREE4vT",
  "key31": "3SZ6ZMcRh9VEN2ih7NT9UBVvCRsRqs42fYKs4FoCY1ujcRSjqUCYbUXnBBrxafV3mbYskvMXZ99aDmBLUeQhJoSy",
  "key32": "5uH3bkotPFTyTXfcCetDm4H97VEvXE4myorXuGjuHEQN2wzHFfgzeuqzZ4HW1cE4kjUVgCtgS2KUDqGvfB9EYp46"
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
