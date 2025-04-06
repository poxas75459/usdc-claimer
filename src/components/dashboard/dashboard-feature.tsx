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
    "3EyVHzVWSzwmT5L1mAfPbffGGtNd9uneorsV8bNFaGdSjCk7XaZYJRJshS2juUUDvsdn6kwp3wdQx1z6r6KXzy9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o5hjqbfRGRvup1ugXz9ULpvdTPvie6kbunLHT6yHL9bzhG6Abza7LYp3kcXEnfdVjYGC5A4HCtd4QjEUtw5nxth",
  "key1": "4P6Gpno7C3vcsXP3EnMkJ3N1w6gEfsVKTHR1qsBPtVnXbeGVLyCpsBs12nKiG8CkdX1hrBDRhMtpxZL67VmhtrGw",
  "key2": "mci8VDJ54XzyPDEduhgkxev3ATamPTwTbqK3Unhf67fpr82jK3K4LH2dpY9xFvipvHVWFgK1q4bpiowY2UwrXHF",
  "key3": "44qpkNoyFPFBBXGpDTJJhLyXZge9vJ5U15mXmMK3yWUmQPWAk8X3nKA8Nrab5fUTJ5CMfLW4X1b15SfiyhjrHqVX",
  "key4": "2yihX16yh9b6QNbYHSbMHVapVmohtyqyj1eAjNJXjGaCGVgCFBzEysKiTQHVPhXsyY5jmBzGrm6d4LtT5bJ8Gxhd",
  "key5": "5mCyc7DVs9ZLss3M1QQQMd9kfJ6hPn4EpKojcHQmS4V53xTG23ALeWn66LqJTUpTdUCZQkEQxuuPsnAHTQWf962i",
  "key6": "2VcMb4bW2abEdD9ZngDLEvYZB6MTnvFfECHVVQidmVe3G4AxyhrtAwW8HbCeoGnup9J2B9VuJoEMtWjJX6e5bTpZ",
  "key7": "2y8Poj886JWyUfWLRwbD788PHeU7TGinYoM3TLjgZdqpqqZFMB8ZmnxLdhvtqKPj1Zu5HANUiYADGALEkm3ZoV5p",
  "key8": "52EUGqD3mwQJ79AmYEUi4GKAXX9JEQi5STfNETmtij8hNPyJcTj8VNN4KCLJrCZW7raRpBQ2SqZnWBMnAcixz97A",
  "key9": "3E8joYtKzY1tYNmWxJs2afqXDr2DbB4NEBQp8HUfviFJGGqcZNgTe3PLNgNGbMBUCQQWPLou1ubXEzGdcnfKJojh",
  "key10": "LxqZs319eBDUaQte6u92zEjkevLMQZ2ubrH1Gh3JKKVkRTurw44u7mLoaSBMaDbEUJ1FxhXD5vek36kQfikH4PU",
  "key11": "2Wjzekaw53Ev54NN7Q6VjWUeM4kYpKRPCnwH4cmwYe6EQ64cVFYVR3geJ8ryToon7Ky8yqjW3CM4oknbvxk2GzXD",
  "key12": "2aKPFqwm8jMpJCzyBir2YDqF7Biz9hj76xNTwdxPSAhAzUFkjVuj2AXL7PhBqtmJDFFLtDbS9qpGik8DrpsPo1Wk",
  "key13": "4TYmddTqMNzhBFxTznGSpiFSPTLr4AiaXjxhSzBGTz85dvRYANtGDosPRYuXDqSKGdxWHmQ2zZU1TUF5fkNr8huC",
  "key14": "36ebFEJWGcqYri1DtAdnFkHh2hXtQxTmoYgP4svcSvtVAYbbuNpwdAABuzNDEXGXcnhfr1cU4f19ckMUJxJdmhjs",
  "key15": "5oHEVaiZX1whhi9udS9KCVQuziqWnWXj1rZa6X22RQABTmAZmBz6KAg2PauuEZqEvDEvTAMNaiKgtED3fLkPziTp",
  "key16": "5MtuPhnX5YAGpYGPdawajkNyY2Hiqjr43dzrpBofRrUv5LzHHwVqmM1RKVE9wqW2VG46hWA22kQjPYgdzd7YFXpr",
  "key17": "2jM4X6P7KaiAYLYrQzAXE5geSWBUUqSAxwzRBBA2GcTgBKZwcMEM9ZYnLr4iaFxDzLdV5uGTiMc16eFJMZdq5Mwz",
  "key18": "NrB2jmC9aywjSHZ6F8arQi6MoaK7jyCpnfUX3cMxNLpeXM2uSYtjYWoiEA4hVXCpg9NAUGzvMhPjmPtASmkd8Xt",
  "key19": "26Hr6KTgfwWJrB2qhHdTyUz78WFFP4Ccp82fURrA7XC7hz4DniZXcbxgne9TUec7BtJg8XGWCZaCoKF2CgD4VRgv",
  "key20": "5cmNCPPXWcgBydnig43tGWfefSTRbbiLVRK3Cdo4vv9vBGvdPMrkp5fiwGtSgXwed7HEqWeYsrr3uHmgijBaDdRc",
  "key21": "3uehQAsZZtQzLcVypRzuouk517JtGuLHvC3p7h3MbU3F2jBnWvqyg8jXWaczTWypnez6FnKd2KRreDHHPrvc1aho",
  "key22": "4D3ykJCitUaDENwRyWXC5YVxijpzLcap1pAGbiAx1EefnaeXr2LQcmNcDrzPbig5iXN449gEv6EdDiv8FmnAVCZK",
  "key23": "3GDRTWhcusA1st1fMpRbYC7JQFbjcBGek4ptAFVTAS3XFLJU6ttrZqJxdqv3vge9M41z9yMsF1rqVoLp5XLYA4Fn",
  "key24": "EhJjhpQwEaQSX5UqrfWTSB6kxgPFtJs8MCH4knHMm2anuyZfjkaTdeVgQeDnYQMEDWtrr2QqcmEFGw2EcEgKEhH",
  "key25": "2ExqxHo1yWmK7Ksg3Guj1HWAgsEbv5nnYQoirExeiAwu5P4egfiFAQJNJg29i2bJh8KfasB1xYGgRHdJP7xxU28D",
  "key26": "3q3vvHawzgsGsdMu7c656oSLnMQ1smkwTi3SYXRrzmuTHpb7myJ4bZzXbjra93VkFHCYxk1Mcst6swgFoPenJaY3",
  "key27": "4veHgB953CpBZKyfshYoMenUVAyqYzTVve6F8vnjdaELkPB41QPVhvxruzTWRjpBqiN3WFMwW7hF3YBVooKcNpM4"
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
