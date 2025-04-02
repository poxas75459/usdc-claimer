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
    "2jXzBSuY87xTsbUVrAhfmAoY5wC9Tp3kYVjr3pswpAhdstaST9mjiZpNypEZnbfo91XQJvEi4hjsS5Emkvu2Ta3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XYnLwJmBm9brQN435HePXUkskdVnTt2H7UZzqgtVn9Ah27Rt7sQPjjvomXpKtCthZVPebtbWw82WHg2WncuQvJY",
  "key1": "CjVCPXpXMTgtDsxkFX54YqC9oTyYNyZJV89CoGZPpZ5CqoaaoaYuGmKF6PMUjXsv1RuPJ3K1zkQjcdaJtweJEiv",
  "key2": "WCogUmRNhZhc2MLVgdtPcr3HKLZn8rxcHb6XiAnBFMBteVU5JSGeYJLY7jxyDNs4d2UeRg9awgnAHjVefjUsgwn",
  "key3": "4Qy7xsAr4gp8RovTRYSbpgh6N4WAHFK58T9iugbg1rh1VeB5JrhzZVW7T6Uj4qLNQkEUbR3dNDmCjKycaUBJsppP",
  "key4": "4tuxvdxYMNzZpkqAgaL7st6weQ3SUrWPhit7p75MHFfx5y4wLisdcBcuCJdC6Dnnvz5GbewujMLHsD6jZDMQvM5C",
  "key5": "5z9QN7WFmGTZWzfmMmpqMx2BrwYNrXPRQ8KWgTvcWdpyJKrJ9EeDYiEoP4GrETeac8DLiZ62M6PvFdjnvqBvTohU",
  "key6": "5dixeRY6MjNj63yv42gquLBRMFnPJDFH6qk2rrpzBv97cFR36zUUyb8rBWq1RynnkBHJhx7iZxNUcx68SYWdZjUs",
  "key7": "5g8ZMBAP7FMDWDGhCXbaRHGscepPj54XfvmdwbfivvocjQCUmW6WRAzyXfe4CU57DpCpSFJWm1YQ5d6ZMhe5dAef",
  "key8": "5jB5TpqXPinZKPgFkewFMF2mbjKPmAQ19DEA5xb6dwgNdfwMFj4UqMwFUEpii6Yqi9Tut7gNYaS495g2NwijdG5d",
  "key9": "3h5vBBzyncwfraJ55tVi64k6HekTv9ysj1Y1uJi8hRecQCHxo7SqGLY9ARWzncZWWS5aftkDjgMrk7JnvwyaU26Y",
  "key10": "4gtXc1K2Yh6EZ9fDbGfu5GiW6a2nZFku6cMyqyCAA3k3pxq3ZJJTGk2RNK818kmpWMGVxQCAwR894P2dkNXux3WV",
  "key11": "3HuBR5SfZLSGBGDE21nWnu7fpVQP8YKpaoQv7Akyyw2WaR7eAn83augQWTP7iN95jphew4D8G5dXkSWYFzbq5xtY",
  "key12": "4woyKfzjp3Fq7cPm3yJptWkJ4ugPCDoB37A8CvVkm3kZzhLHKX1T1RhxGgH9iUUS1A7idXv4eMhBg7jEv5LoyZNy",
  "key13": "4bZP7HMQpWEqm5X4Byyg9dGY91oqb3e1XzmXi4vW6VHi5gLveawJq89wYausDuj6mqVhH4pc6JtFUuHFFjaxYA95",
  "key14": "iJNBXN1EuaDmn19AFNEKwtcBV3o1WVufWo9Pk3scXpVuNgcXz8SiJ5n5hRBebfDhpiwfWyEsFhxraiSDH6jiep4",
  "key15": "9asvUzm4CuW2LKFNy1hgeWAKnavYn4P7uYgpDDwAsM9zeAeWv2tY3qMYayXarvVKxkuWnmQuVDkm3BLywNs9C8r",
  "key16": "3M7DabifiCaeVJyLRSXqzqQzjcJEp9paPBFAxQCZxeuKhw3T9D1LieUA6aESKuggSEhVauCHNgeCYgvuqRykuFHC",
  "key17": "27TJg2Tw778fdznj3StfHgzZTN9pUL71gaY9BpqYoYs6oZqGyTxdvgeqpM1HvGyMqNFz3N7kJNvsyLPwJqtenTpZ",
  "key18": "5YVo92Tjbge8wB6znEfQ87aKyqnq48QAGRWQy7rko4k3eYXKQHakRsMNEPxh9WTqxVsEgn3AdBXA1GNemFNregoU",
  "key19": "55oW6JefeUAi9qsVSmp47PaTCg1saVTJ6NNzozr6A2oMXKgicJNYLmpiwi9JT2eFwpX3SBjQ3GP3mhJwPfL5DDhv",
  "key20": "WMbDonvXoo1tvrs5AmxJPgwN4ncv2omk1LooLLomZf55GHL6naAaMA4VLn9rsugqi7QUA2p1YnjCc1E5WNCmhBY",
  "key21": "3gzn1SvWSn1SUdfdfExXbC6QzHm5XCoyZV3YYYEDDmenEAJF4fitnNirYgAphWMU3Q38wKvKj6i11wrAe4SdLZqK",
  "key22": "5ugxbgXnnqhKniBNJnvvACmi8WDfA8LvGwbasnwqCC9NBFexDc839yK415mSWsJqF9k9dNwVyx58fxzB79joqYat",
  "key23": "5ZJsVETBnnwNgPmnMvG4dsqZwr1GkmMJJg9LEwLPP1niRHZQd1HULfWNXApCVV14nmxJ38XbSpXrBxGeMGENqHW1",
  "key24": "5r21uSBY3DaRQKKUGv9qr4MAwzYjWptQxvyg1PHaqMoXiyjYbR61FnPYBsY2u4zgAPuYeYT7dLkbvR16VbD5iCgh",
  "key25": "HQH1WLvZaTuNqRwatBWyVj4BRiUUydgDKzfT7CDNq8xmYFkcSbQYwjmFgtBJK3HiBPCpNqD8MUChahph9r2veae",
  "key26": "3xV9zisVofeEfyLPDCvBekttSGexMJu8kYLZRjVzPGKWKz7Gwx4WHV2RTm55DiV659hrtAU1KxWc3vzogmAc2wCQ",
  "key27": "fywvZNL77ZSeb1Acw2FrE5dy5zS58AYAa7qYLR3sPEpKgbLMhERWEXi8c1HA1XcArBFVLy69H1XuSTGDFYgQSDL",
  "key28": "4w2CrapLerAoLrU2y51tQCXLVfADXGF6aBjYNH8NHbWDiDSybqn9J88jS9Xo1sAT2VC1Txk7PZ3jFuZMW722vgay"
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
