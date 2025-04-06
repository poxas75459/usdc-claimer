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
    "5SDebyLUnwfb4h6jMoUsmMtwSrH99QDuvwXdPNCqiZYkZkv91A1pHahBVcxxmKhppuNgLNfpJtTsSJQ3q1zsXU5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oFR7P6bySLbUXr6HtaxmVen5ai65oegrsWa2RkUpPsYtmYym8vjTMWUJ2e8hfXMHf2kQUmQrtgN8jV5HgtAs4J8",
  "key1": "49fP3Zh9RuGovzK8NzgPnVUmw5M7xf7i6D1ip3FPR9ogEzYXb24C4ccrBtfG7ZWAe4gb9JDXdyzCW8MdpVmbmFHH",
  "key2": "4RMZ1Lad8g2DqbJ777jxLyYqpXiA8s1GDkmxPJFSepiVBEUy43cSAjHxSZ2x9gz5Z7AQHxnuSuoNAadquTD7degF",
  "key3": "3Jg84VfDS4MLtuNLuARAJqG6eax99U9Z1MCMq7FLE9zeadC2tcKsVZtbcA25VUurFTYfR2V2vcDsgxyS4zWVN4iZ",
  "key4": "4ZjVgoRwjPw8Zhny2izpu7G4g8c4ZLeDzugerAq1ZJvpU46Xas3voRSfnT43f85Rc8TZrPf8LJm2qKKrzKMbma98",
  "key5": "3dvMqHWKEGizm7nwVd3TdVUXDTwkS7MXdaLNVHueEn3FFxLRsU2Gij5kWQbJYm7hTUw7pNTX6vNQxNF7ZYFYSwxp",
  "key6": "4vnv9EZBe44vQvP94VC4sSD9dyHsvGkx6XoqNYwiPp1jbYWSZQnphQ9d8ZsK74fjm9YB6dKACRyek81j6pXKDVgH",
  "key7": "2q3iPsHpjYtSEbTM5z3VRM8Q85RfnfdPUyUPyorK8oKvWhxci7CL5h4NHKbv5eJ71PSdCN4cyE1yAwV7FKz6EWA9",
  "key8": "5VKTxQGRuAuSYQAJxZuFHkp4qLnHzB42trwMizceHe5VqLjMDVfovhEyQVbAdbaCmT7fD9uB6ZJmGXGHwMn7Xmwi",
  "key9": "ofDWTnbWMpo61GQprNVM6t1Vkd3nkfSMJjzdo1sLBHUg4Lgf3wm5pZbEvS7NXi6FhEfc4sQDJ7YY1scDS4SfYqw",
  "key10": "4MidNWG1TMzBqEaiJ6ZkJ6P5jKNmvjMgYJLJr4CjH6HVErp8XANggxNX2WEXia6rQ2r5G1DGKGNNN3fnfRSSXCbo",
  "key11": "4QRwZPWNymFFV3ZJ1GouPnYFRuFdd1PD53tsA2KdDG4EuMG4XTAgEjnkk5CgNLaJWr7hAQuK1RVzhCHdVqqSi2My",
  "key12": "Np7Xddyy4jTwUF1E4c2ripMP3e1nVpxwGFQoTrAieQpdsPwGoodkPyaZoDrEGDp3W2NXHjPhZEQkEzxt2YAwhYi",
  "key13": "PE6r2gVFADmEV5t1SUvxVUEpvzb7jDwQh9nyTSHQWsNuDibMfUtZXaaaWmiohc7WMGhMWvNDYWASd6X5iLV56U5",
  "key14": "2KdbjKLd3xEumMFhAf9gpReNRNzJhjTvhU9wvjKCvcNL2PPo1UUnuZCUqZd8qWYZrdxVEWrjmhVd7UeC1TALWVVj",
  "key15": "2ynHDy8ejmpdm5V2qLPSbE8Lbf4a5wUwnreCT6iEkoum45rQtXGDDy5NHFH7uPm6cgh1aPRwXrraFZhWgAj5dBd7",
  "key16": "4vEAyfMbNTy9J3GQNvYHvn18188VqyCXTzYejEnSM4ha7kTJDfHuKpnX6ybHhKzAkUJsEhcHKuHg8g3fnzPqwHYY",
  "key17": "it9hse5afeUA6t18zRHfPxkv6vRixmbVMkrJgNe9M8MneWfzrwmcczpM65UU1D7UMpPJVpGcbp3Mu2uxi1H9Job",
  "key18": "5u9zUy4SDK6DwUCdtxWGoBD5gdbXeAihXQc8MuXEmpigsndWHJEZ4SsKQKWGUTRqFSJnnnZ3t9j2p3uo2Z9ZHCag",
  "key19": "ebkkWcuSTuB3uD85jWzRpr29hX4ZVQ5mg9LyCPuUwJjVM1CgdPQkBuEuZMJXsvWY3HAfhuSqmG73SacNcyPmGTk",
  "key20": "61CqDx9ss8bnqQL2XJBhA89kcbDbg7wAvxYyEQ8pD9gCJALWzrfGQmUvpPUYsyqemDVDJZG7GKq6thtefLDo2wyW",
  "key21": "3Db5t5QH48xGQK4SpGvZJLU1DRT5j7Fvdaxqdrd4xHDfzCoeNadhPXwEsTiQPmTAKGV2CGcwXSLsofRi1uHW2BKM",
  "key22": "4wWrw8qitkCqeGLPBuSo3mEHZV6KKzfUgCn6EywU8bG6X9ALNu8p4i5Lckxpa2DhXvDsVfsuNTccvVguosjVCX1y",
  "key23": "9hk9h2PxKC9tPodCuv8WkiZPG8Vcd5NK3D1KcxEu84jqpi4GunVcojhDZrStQzztrVE8c4V3rgZYqvLv8UDCbFC",
  "key24": "5ptxb8xZrLsHjeeneG2HH6MypsGJuRA4ryYbqgBcFQ7TQ6CuGByhfGMAehiDGZkEn1aNW4UDeT93cBupmJxUCoDq",
  "key25": "2ZTSs7oRADjsa6ogTGKJGBA1enAmujGftAtEBt1RuBUM73q7CRh924uP1DfLGnp6jH4usJviHMpQyt5sQf7F1rSH",
  "key26": "HjmbYU4sX77TWE1zPY7azvufgMfNpF7BN61oe6KcJx1VFD6vdP7ryXtBN4pzTfekABZa4aVXd9Jb9hRoUKJRb3m",
  "key27": "4b7yd6vRrdsnfQkuymXM9NoWxkVEPfXcCBZoxAxYGpqCJ7Z8AssUxp2dm2tZx48PsgywwdHamdZdzfwtpWUQYc1G",
  "key28": "5YhqrxubgFJ7mhH91BxszN2cVBtNVrLdkTjJ8U7MMJXgxotHkqLbfteBkvkjc8QYLsCZKskohDCBxWREzFPRefwm",
  "key29": "ZvvVKaJAZYHeRVgWN3Xqg7sz7JTHJp5XeM9nZh4NCQAmVnF6uf5KoKd35DvBXgb7adBSbCTJfHtARhFRWECG8ci",
  "key30": "2WnCPdAyK6mVZ1DqMLrYjYDJHEbKqqqAiMn6ppoY4HSrSVbrV2eQbC1WuPK3JfZnppd1u3uApwySzZ9mEehVz7xc",
  "key31": "3okpmKkKQVDDr6yW192L7r8jn69jsLCit9KZcekGs6hZhLSJLNeR9nmYL7ivKTZzstJGFY19cenki11iBuQoh7kN",
  "key32": "3pVgW2F18ZsDNQjm8zTSGZdBot1ZcDFSHjZEDmbkKkZsDhiBu1L84WT53BMZGcmD8R4ePX71gJef9y5afHWyeeuL"
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
