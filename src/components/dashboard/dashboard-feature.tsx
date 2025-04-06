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
    "4vT7gdXwZEjzubmoTPqQdWwZLsa1GMXPC1SDYj9tgznyyhj9LVrM3BRte1akPZmwLrNDz8TsyvHb5E6eG59AzhRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D8TRhie4A12cmjMrjsdYBQieLyYP8acL6Pp1Qy8QEKNY4QnusdnHtzW8sZUXomERP8SHp8gyu6SwanU3JJtP6zu",
  "key1": "5Zsbs5Cf3K8cb5TDVSk4JP4Bq5kJjHTeWf2mcxaTjkyyrTs9GbReAwrsPC6XYg8ELiNRTkumSopirKdFtLijfKjQ",
  "key2": "2uJgKgZmgca6Rh25iiaxc78AXiyTKBY5qv9sZHZFNZA98mWAzwk8zu8haGyMbJbeTXj59Shdg3k7TSSymd9eR5QT",
  "key3": "Wn1agabcg6NKwCdFEXisLex5rypp4M6BKVFGZXXC7oPpe3yuenwWKLVa9eurYFeQYRX9wLM9NrL6ughQF9iL3HP",
  "key4": "R6K4bpY8bKm9FcZ8nvSkzph1TDwXZ4BBCLFLnisBhoH3gvn1gHiRJpUHMdpotjjC9rZUdzbf97848tsSLgSpcMg",
  "key5": "DHZJKXuVrCw7vgmq5E6GWzJhmguxWPvE8pbaUDG5tbodjYaos1oTtgiZvCcYY3o2FL6Fuj5ZoVSwhpaxHy8VQR8",
  "key6": "whMeLthnonJus7zEPBUuXJ9wVM5HKCXbZSc5rZkJ9rBiuCrJ2K1C7XxNqmC22dd6UhtpULZA2HvHTCpBkLYsZqP",
  "key7": "4NZQmzBWPnfzCkLHPzi3X5fyLVBksKdQkxoyXHM6512jwk86bfQ5fY7wEy8dGj9zLarErxzN9p8xiWTQPyXrk4t7",
  "key8": "4WFsRwiMtjxPTLRXYLd1DFutKLhkaMR1oaPUECYWJbHnh6yQ4HzD7n9eoDxRBYydjuGpdLUECGP2pbzhQqN2B4Ym",
  "key9": "3y8oZLURPikPUrb73LCEm5Q4aQ281eSBChe85atzHLiSJ2PKHF8HdFUxZhCd6TdVNwmMSasr3UecTLmL9huifx86",
  "key10": "3iz92KjfedLRWbnJ539sg5cM1F8ZwWj2u5caLtEUcsJ4bMEecgzLA2bLMvA2iFBq4LkgEe6PS92PjhNePcPkrYnz",
  "key11": "5XnVEm5nLB2aCWq4SWJQC248UD5LjtAZFYgVmxHud7QmL6grNRMzxWFyvQyn64kBuCfFtzd11Aao8YzzQDd4wjXA",
  "key12": "4id2UALih1srRTPTJrfagfjs3aiteFaF274mEBZnyx1f7VwRg2kTyqTHcw8hoUurziCAx9fE87ohoyLDdZaAAUbg",
  "key13": "4aiKzvM4NLdP6qNxs8xtTdZCmDUnbyGYYszNMupmTZKNQK4bYUpL8dJJLB5iRy7U3sk7hitr3cKQUQdYEk2bsXiG",
  "key14": "3ebw6ZgQUPb4WGXMzE8Gsd9Ji5fsR7iC3iiS2WnZmSuQTMFRP1Nc3fi1jH66ndhJwcGSpBdwsULRDSbTfAi1L3GB",
  "key15": "4cGkR6BWPZt9tBxTfJNmDd9gAgrgBKP9FcYBULF6AxByyqyro8C5PknS5ZjE283Jb4nXmYAts3wT69aFzt3jvZLy",
  "key16": "5C59T5B4467j5p8AY7pS64m85h8pPwEK1W8e7GhRrRCQk6M3EtHTzH2VjKMh1JzKLPWzWeWRxQ5fDE7CeJCL5UW6",
  "key17": "2tc8BjnWYBs3GnrGgEXmSehKsw22VC99fujcxEeQV1U2s8LL7QUuWzzZkKdmbUqU1U2unVsgnFhxUBGw8z92YeTr",
  "key18": "aF7zwkGvvF43T1EGpafChkW6cfSxFPknaeMtYUeudXARVsWMCQQm6RX7zXHD1BTsuGV6Q4jXHqwcT7KasNCeZtK",
  "key19": "4eBx8h829ep42sJLXsUfdcur4p91SeJUYi1EydhfJt6QdpQQxm2gD8ujmNSAUjjkoT2WWy7tpXPhjcbLK8hxps2v",
  "key20": "24RGwmisHgy8fdzC7jVVrQzNCFxfoNJeMqrZ3VeYTmpnpQ1iV5spNho8kKWDg4LXbvr54apRrfrZzFtZXqEsM9sf",
  "key21": "4B1zeer3xcraG3WtrZwBAJYwv6kRnR2gT5jVQUm5yyYt2nRTaLvaD3A9ovhxn9g2HoD6eARfkb5VLxvpSd4BSPzu",
  "key22": "4a9RoVFv5fiajacwMiGBi7uHwGSr6xR9VY5yoyxPv6ovg414D961GHuvrqoB7gMwbKFHsCZsW3y9vTd3bkvZG4FL",
  "key23": "4jC9VjP1rjf8yZ3Njj3pmBwGHo9Bq3nA5hiVQa3zkpk66wBjLH7yvmYgwQ7HiMjcSPGHhq4NDSb86HzebsFKXQXH",
  "key24": "2KKQxDrXAjUohCFP3WANTrnm85QrXtw6BfurZYo29YK8gNo7rkXnSWzy2TKANinWPPEaGKeqXAV6NnH9hAEZg8Up",
  "key25": "38kq5GMxdetNfm9vxcajrVWSDBdHqpdn4ezVTrVvJDQp2FKugsyRKCLJVgsPNW8KVpdGr2Te8TiVpvTS8j5eDbV9",
  "key26": "5KKUwLaZKA61tL67grkZLTLXg1Uc6k7EvYSnNwQ1cKKTEaU8Cda82psatMZC8CFz8f2ZRChTQLcGBgpkyfLjBTqT",
  "key27": "ktLA52BTn2bTJDYATw8ugLTGKCDXWuh5uHZBitm6EVmaVYy5oey9vkbBETzkYzTQyStNdo9VNhLkykT3CWfge5G",
  "key28": "4BGU9eo4gHUPqDrtwm4tfJoUpb2qYrQywFAfVoe8VDJ92WBqoNBSqEp7DLA7Z7U2tmvAQjYLvaooi6ohu249SYRV",
  "key29": "2gWSzvb6XSVuigAQ8yj6gJxP2EGt9UESQ1NeKaoa7KKREq11dWZ1E7kgPWTvLAzyx4xMxLFG4nKyMJ7C2zu7aBor",
  "key30": "4eqQBPVHPYRE4342xrLuAn5QdHFcWDiWF4o457EXc4q3ZDoLED9JRcMYJWzV6kZsTYr7R36BSyHGGybnsJxjMacc",
  "key31": "2KSC8bEXBnbi271o7QokFj6wTqfH5NQ7SXGHSsSC6i3bcZBD9ayc3APcGKKrxUfUQ1NyQbGFofdybXB2XySE5r34",
  "key32": "3bAL1xRi8kC5d5tCsa5zr1V9V6ajnEWUi8rVyMHL55knmuN8DiACVvyzZ6uDHf1X6RfFeGJKG2rHrd2KKyo3HGf3",
  "key33": "3iBF8Vii8uqD1YzhmG13zcYP9pjZeGWkHh12e31uknYfKjJvPKKkfF1EjqW3Pxv4tSxK6ckzxD61HzPSG7YA773K",
  "key34": "5fhKYMp5AuLkfepnMCqHFGc9pW6B2GHDWop8okx6sJfdp8swjEM6sS2ANMjiPA2LVe6iaSgusTzSxnhs7D7LhCQp",
  "key35": "63Zw6of6evvquS4mgN7EUdDU2CCnWSca9d63BZVjVjSpGVPjpfpHBp3jeaoXrmsUUQYN98ibSUQ8yNGeqpKQLXtK",
  "key36": "5mwyxMYxzU9FDLj7sCGwa4FGsMb1Hp4b1fiLeZFauj6KFWqmq5wg6zQBMEq1vQWjXNLzTdJC2QkrkwQenYD9vBym",
  "key37": "4y3q4uecBbMo1BAA6MLpd8PQmrJnjVduUUNjzmxLuVUmmwgLo3wy4qyCHCUkjXir8PkCwnx8FPpDzosTig4DXQDD",
  "key38": "aGE4SopBn611YXk9BKDGmmxeJWyqLRZz7KeWBVhnWi1aX97JmR99HVSsYympnxacBQX4nZhZrfdiX9gAX9nEfnB",
  "key39": "TKpFKXMurYfnnh1qsaTqoBTQrnD81wicDUYbZpRn3tL2pK8MMSPL5qVpjWEETo3GgeRo8KZRpwG5KyaZJnWhVBU",
  "key40": "2j3rtYjPGnMJeLLmQ1jSsqo5xahDNg7YVpk3WVASJ4PHkFc7TeL2jhhv2BmUVuBpfw2QjVvm9KgqNHUvUxJnJDZ9",
  "key41": "2DLXXDTd5NkrbdnUoocYfmiFfXZ8BBu5Fw7DfXrfMSSkNoCVr1UttzYvNfeHrUe25szH8d9f1tg9WyoASPK486WY",
  "key42": "3fbYcjUgVccJzQyLDc5dSrmD6dDefVkmdTinZcRNG2u8oFR7k8osRFgyyajNbEcEVwojRrpHu6V3Q6zzafGFevgf",
  "key43": "XFN9A585r6GoqFUgCE7MUieZ1h1q52wJV3ZvJkTi1oNXDA51Js3R4kcHsgZGmD7T1f7Y3i9XVrrbeR8EwAV76Yg",
  "key44": "5vtFoPz42Zhhrk6d3e5GCrjv3fk2CykvLz9ds8JXr2CrLHcDS7MwuoQLYiAVqAkpbx5WY4Ni6A2Dto7QcF5HDuco"
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
