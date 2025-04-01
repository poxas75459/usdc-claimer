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
    "3s2absf127ADEKMcfCsp9qBowMn5RrgeTVBttuSH6ZEFThzVwDV9y3m8dPh2n6Jz9AwXTUvz9yhMBx232ibAxvKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cjnFagtRcQ8bDAcSyTHFQcarpYSi8oM5X1oh5kGQ4v8ZkaHfTfFmHn83R3FdYPY81WcEW4f7gGdhgj2eEA7YK4M",
  "key1": "j4DXajHYfdtq7dFQGNkbg3GerCcw4FiRNkPXMGpi5bLR4LQBQ5rgzT9qaadYx5wa8graWY1GoEHHuuopRiN45Bc",
  "key2": "5xz7TGwrG35VhfWRJ8qxezAv8Dsvy25mC3kPaHWFrP5mR5BPL6283KXjfXyGVBg53TaedWk4uzTQHNrmvqNpBPoZ",
  "key3": "3jPu8vTqxufJwCAxxEzEz28CjoQZZyxPWG3KkURezSaNb6LyxvtYKmJE88GV2WDgvd5HZxA5XB5mpXwwUKsyABpK",
  "key4": "5jpM6zE7x5QVHtRTP84LCcBbir9eSnS16evrAJVujzAPmRNhfNfBXc2VAPYWRifP1LnC7wpgmLYkpXyAsmURBG6Z",
  "key5": "2kuDTx3gLmgPJGVMCDeLN8kQFFHvGWn6GRFYQe69kTDJVzHTUNN7SETGn3dPXineQpUyfq5bpbsnoEL6F26cUBR",
  "key6": "42fC7q1jiQfjKwugrDT2wS94wz6UZYUrmyEbUbVXSRso81EZSFPz9ck3DuKc5PBy11trxVGjWVqXNSKJBM5cfxkX",
  "key7": "4LWWqrwGMABkuTbkHLRCy4HeJLdAtDVSnrqch2zXAiVKarpcwteyy9KYcTfFbXBn1nXKxtC2PtTwUm6Ry9ozXEUB",
  "key8": "JWi4ZWbDNgCs13PfWc7J9C1FwgXeuYM4YDdrDG6s2CwePA3NNhmZ9ErfV7VPjS6nagkBMkzy4togwjSh1fGNEew",
  "key9": "3EXay3D6GTXebTSR68tYvmTUBNwSbvD4aabEZxGsnYSSA6nadTjLWJiWdThFjvTETbNNErD8pZ89GnS1bDaTcDKx",
  "key10": "47nkpcbzhSYL4hB1hnz6GfAyLZUgvVWjL8gApvTaLKkF1mTWiiGtNKkN6CcemYmheY7aKeSEgH6gHq6Y2YLLuPVo",
  "key11": "ScrDHXimri7Vn1qsjTf2on7SVcvQj1AidSZyE3g9PVjeD4pAJ9ErCfhdLgjvJbrBpQUWCuHWoGJ2hxipVpmdyPe",
  "key12": "66BJz51Wsk6gthc2vkCvHy6J1ExA3Ft4fCo2LHTT3kNyupe7EPuv7dTFraCy3gqhea34cQ27dGEkBmiWeBs2Jarf",
  "key13": "5CspcqMPEPkaWCbqS7C2sLdNT7gv1kRsPTFuyfNkZp4ibHRpDmahs3UAHeYzR4zDeSn7ErGBHsLDgD6WxgTxaTFq",
  "key14": "5uZyV11hnxQiCQ81kCX58AnQy5tCLF4po8mrodgUY6bfpE4JduSRdmcW6oUYF7iAUrJ166zJUYjKaFxACvp1urif",
  "key15": "61iNjUt8TDhq1H55nwBL28ah3zbrVMSF4RaZeeS7ozbHqVrc1pZU6PKFgRoiq927xyXpBaRGbyQqtnd2kCcmsiN9",
  "key16": "k9GmNSBTTBgKkJtLXDskC8q12FXEsTmHoP7NyCS3QpmtnhLTTUUptNwUwBjYHojymtNbpbvhShje7CXGc1QxYSo",
  "key17": "31gyJWaQQ4BDeKUeZUfY9o9QDftWw9xzkp1QJCtuts5ZLVT68YoWzjKB5EWmxvKVixyG6W3FUUJM62ETQB4GF2Rp",
  "key18": "4dp4sDrFUUYM9VEXJErVjt5e1H5gp7buU6Y9cCyTdwkRuMjzVZozac7KtL3GfJmgXs784zdvn8QAfkk1eFJgJ6Fc",
  "key19": "331A87WZggUjM2yu5ZbEVk4vG5AmVgax6GqyUU2HEfw1GtfCVWjbcHBHmM44LkHExAJ6Jx9HQDjZHLqu4YfiSMnR",
  "key20": "37YCHiZxDPefzcSbXmFHNC77UeFKzv8sfvoJyfotPXv4R1fZmsfydkEGnDWntVqjCFeFZMiL7YDxs7V5e2o51C64",
  "key21": "48hWRD8wFPdwQQzVHdhadaAmmJoDF2JjFdanC3UhqJkc3YVP37damfBrEBgFxyZNpfZ6xJuvBQfYRZbVbramTT2q",
  "key22": "23zsCTSqTknz9VfhUMKUUmXHzcjWZAJNna2ebiDpw9tZu4yEegTutjEHvAdHr28Mpjgc6B3NbLZwZAC7fEU1NBZe",
  "key23": "3zHjrnNnKYYgos42BSG7esThdkyZjzdAG8XHraVXzWbfkTp5qY92hpbsseJH8RXaS3sHpPUGX3Wys9mRP4WGAEr6",
  "key24": "4WW7MkCTQ1MQwAXLmorxtLYxFvSHiQeMTVTnjMrSGQHgwVFfzNx7rLCYEsQXcMQf2VGVrM99TXKFc86dbqn7kJLc",
  "key25": "3U7rgZqRFWTawsQKaPc3VWkNHLfTdJFPxUbx2a2hfXpZQggUiYmovF5LCGvufStRmQdiUfaF8EBF5CCG3cjmTmmY",
  "key26": "5npuyhcuXWMDqKy9dXeDyxy4AXQsR3VXVpQ28dcmfNKzk2iVa93f7kegdWwvQa1wt3y5iDuzSqDr13HBqH8gVT2H",
  "key27": "28h1aiXtKGEpEnwr3PPSBq1zURrkdujYEFvRvHou3JpY3vss5PQQFYzbsYR7S4pYNRP2kmyS1C5EHKmM28iE9RYa",
  "key28": "4TjW9mC71EaMAv9saHq4aQc1KowPp12iWgzqzRmVEKkg59pSUpDuMGnVKDqJh57Qk3PsJka547VHzCT6LKbXuy4c",
  "key29": "5qQ3JgCwo6UBcdZzWASDmAGuTnuYZdG833XNVvQbonm55KRFmeaejQnebCn6g9M1TqfXCpFppUZc68EWeS4iokWW",
  "key30": "5e7JVBpm4bq6Xee321KNP8wuw6sA6d6ToyqRzTKpgcK8vkS4fQsfk42mAJrfzQGVzzBJGigVW9CdT7oEKy1koJ5y",
  "key31": "38mDf93wNS9Gad82fKnGnYc5C4b52drSXEuGrTtYaPqxAgb6hsE3rwy8hi9nbV6iFWEZxnHcMpSzkUWcVheyMY8K",
  "key32": "4NHivCCZ9JHqZarjmUBxsbr7EZHVjvJQF61rqwueUxXg7tzw36sEHCcvGtL1RktNS7p22NucdJCfeZu7vRDUNrhA",
  "key33": "2b3yPGQNUm3rRkALKPnkRm1JwtKAEefrhsKXtN5oVqyB3x2xGJNyXTWocBS1m3yvwz8MuxkGUNmDnhevAB5teriL",
  "key34": "DJQX9F85bbgs8t9LwHGgXsofwVQjFFBCmCzNBx6W8bngnTmDzBaXXfmCj3WfEGYoQ6cXUsnaEUbWc5cFEb8wd3c",
  "key35": "2fXEwUey8sx89qGB788uVE4YS5F3SnKT6M623tdFKNMEWpgRdFSEZJuNGcrfiprm84922DAPgF5RcxCbViHJ9aw5",
  "key36": "7wn3Wd3oEUuV53QY6ih8x3jpaVRkLAa8sbk7neVMVWAaTNmQt7hRRNZnyRyiCRwk9i5Kd62NvD3DajrgAN47a34",
  "key37": "57ipTQqC1Dwo9rT58d9UivDKgG8HZgHFyc2WAWNH3RVNHefv5Cbo8gGtHCiDV7VQMnQgSA119M4KEyXV3Y6TnuAx"
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
