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
    "4aBBK9HRMMSxkyoPT8uAsHMfQffT5EGXHYjSnxx8C39aq1cWJEpJc4rGv1JLSimiPuTnjnvE71RricoKZaakGX7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pECwaLXD8tZizs7BfnwpUjQQZZGWSsx1BaRtcuzzdrHuXU61BJHw5peUM8F8svGHrGum9ELZNH5iQ8ubgCgawF1",
  "key1": "b9qJ4oZgdVJHTwEhSMRoVEZk2W7zdoTKo8HRJx8ntqfkxUhGL5G1kVP7YDV2zUXSiTWNb1g8e8MyNyEW7nv7c63",
  "key2": "5rwUFhexLfTMF6nDbk97uwkXdYnpF2faVPoswJbgBPNHuKFoGiXzzAuxhqYw3qbujaPiLQdtXFpT32nhSVY1bawA",
  "key3": "4MV2MwrU81kVJRqYjVaaZWjKL3KU1pFvzZhEva4ytkwxfP3X8VpSQPcf26fK7n7XsSAb1AaYMEqXyzjSJX8CpFFR",
  "key4": "3MyjbuLygD7PAoKkQ94CinaqD2JnMuMNUKjfXiMVkUjNBQ9i25Nq8TCYsZ9vQEWhvR5FQqTRTAjNHkDC8eoqGTWB",
  "key5": "3SEa5sLBLvYhaEfRN5KmqWRd5iTUghY9BiAXhh2PL6wRHCcQeJS8enGdKGgfeCZc1hwdrENhzA5j6wviwUCbLCoP",
  "key6": "HCrugx4EUv8KuenBCTetsFjbGZfVBgs5RcFoQMJ7yVHyR18JRkTTMr7FLGChrXJms5bbqc2cbgoCPrLtxBGR3Ph",
  "key7": "4qk7mZYRByWLzWuUWVEas4QfTiruAy42u3QKoEh9QioHFZyANJwKs2tAhqsMziKJwNCkzY2Cgu2UUk4GcQy6Ae4V",
  "key8": "3sVbuybnmwNGcFJnpmWL76UhoCq5DbEJnm3S934LFNU5gmpxiFV5wm6x9hpVkiNjWwRAwwsEqSMErdqvwQqWoVEJ",
  "key9": "4kmtbWB1TCbkzpGBx981oikmL3PjQ7aHSGuJXdYP747kmquWRXXK8xQzg6wJc1KVac8uN8XvUBWDz1CnXPjn4PxB",
  "key10": "27cFQqKwbYmN5LxE9hZ2zAkZ6Aa1jBdAu4gGjZ7M66n2XQzhNA5ZVvZqn2faZ6sUNMuHxWoayQ5ZLcKYFQjx7ChF",
  "key11": "26Wjx1poyArcCaVRruGzLD5BTd2mYogxbshk512r9qnBQi2Lxa128bTpdb1MS5zaBUhzbrm2EWjjyfi7M3TVmjgw",
  "key12": "3MroieNkawJvTvMhvvXZUb5vJmk7dBW3VZeKXVTrbLQQxnKPanU8oQSsvsEquaxDxK5zXjWoFJtgkJxtqXsAc3rc",
  "key13": "5dMJyrqgmbzjW9u8S4LXsCPBKa6nveu6MsgEusZ35Doo3PbZzvvkJUFvfn51nsPuxXFX8MPJG8RQJUfthGNeRCtg",
  "key14": "4wqeeHZAoHw9VxXrz18h3rCrVQUE4bQk4dMPkVQVbKAqk481oznK9fjE2XxJVMk8oGg7Rm56qyii6Lzx27my1Ba1",
  "key15": "32pZyM1pmHoufGfAEiSRizaCPWU7vo7ypBgB4Ysydd2MgtiQdFWyYqd522RSg2s9YucGgw3r3fWzornVkktjZeQq",
  "key16": "28gP5UrPc6KRZHkSsZG95YfDSipGgip6q1mJjw4T7Mg5qduSCP7kUfFRAad9Xtk9gQdUppGFgSg4aNKjysYQW3RX",
  "key17": "5FAySZ5swQkKCdpmB81CjQxfWRjB6mjdFqCEPSM5wYawmfYJeXK8W2NE1JDxx3Hyo7dYWWMZ1BzNk44Pwq6zn1be",
  "key18": "5zkX3uT3MBwFUrXaHmX7TyYiohvFZBKQxo18R8NBUFne9apuDjw6U6vorXSYwbMjcLxqKbRAS2NPfyuRfJ38p8P1",
  "key19": "3CarCJML7iGaiT8LznZEM6E1p6vfx6HqaLMdhx2dxxoFFyzVttNi8SdcVKzzwcx1Cnv5uCSbkdNttmMjjHDauuKb",
  "key20": "2NUpmHQfH1j4TkusCDDGsjWnxBqxf4BeiFWTKo3DXs3PCus88Y15dMtwtkKYdmmDf3d5HfLb3MXgVXdHybRgS8fe",
  "key21": "4fotTJoTEATPZcLCuVbxeWebFDAAAPHtu8SDT45QbYqRpCFtwW1zhi8CMakDAK3Sw8xfnMMLQKP1jRA2T3UoVX2E",
  "key22": "2ReUtAaPmWouK2Utjqy6TScNuA5oCc73GV8Jk1YV84MbrTbLzh6X7MqdFBWwJDjiNLsXaGFPqE7yTn6WdLTXmWvt",
  "key23": "3nrGGxEa5RKvK3c1UqB7saoxMktyBkzgAA4iLqoSuHVkxWexN3nBStSYmFtxA7g7R7HaiM157nu1bUxz7KDgqt9z",
  "key24": "4hYztVf42D7Fq64uJQzZnEtm79akaMssVH7gSzkn3tV5rYAU6bxFajmZrQm2supBNrmT8Dq4npJdpwwjxFWbBt89",
  "key25": "2Nf6H6TSrsgrjoGc1DWKn7wjC4QajT9dDKHXz6kqRFPd2iiypK42Y9QPqAzhMGEQ9mAoqukAY546sUvWfNpZhjZa",
  "key26": "4LJcFatQu8NjE1MKEJGRwPFQC5Ng5djj4kMsWPzvf4oYE3xStgpUV2wF4YHv5FYvQsXSqEAZSeHFkwT7gsD5QNjT",
  "key27": "hJ3zBDyYFTZD6aeVTNYE1Egok4Msk8tVwMc3FFh6RQF8yYcoHZYGUCn83ibVMBgfYvirG88achFuUumEfZSF4Gy",
  "key28": "5MefkWt2xqpjWabLNhmJtRafn4pj8ekrg1VmEU5t2wytfshrrESoA8kk9Ageh54cHbH9pHbg1CRZgdsrkiGwEo7j",
  "key29": "411u7BijzFM5YcDSNfDfVmJy4Y4zYGw8BXU6m2Tqgmg9FHxBNKprVGaeT48VCnm54cC9Wjdo6huzubf7zt87cgAM",
  "key30": "ZXKtMkYjUmqKmUaJeSQYkAoaJx4qL1XNPsC3gjmfUT3ymmveMmcjiGiuyeq2uDxpjKzyR9BwBtGxAFNddE6R3B5",
  "key31": "Hz7ZWCWfNJfNaJb4tNVLbWHvzaxJVMisGdN7E7ioVxwdpy75UKNK2eA4YSG2Ux2tsuJjZaudGaqzmjoP4kZUopX",
  "key32": "336mYPDLfnzGBPKMtxYPP7AcgkBFnAeSWqdugX7q9ap9y61TnUZYWpiLMN5wKYE4wh4LGqxR4KC9z2e8x6W8c4yR",
  "key33": "2c72XbYD66pSmPwB6AxoHJTChkhn2wG84V93ATEihWwXhnDzbqMQtA8tG374vRGqQ7Uj7fhrhZW8TvsxqQRXtvpF"
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
