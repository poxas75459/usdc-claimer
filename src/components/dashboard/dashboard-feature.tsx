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
    "5V1jZ7nEpNcKotXAW7rgeccqKyonu2EAhiHyXeG6MVrNGDKGUmVDN1JKZddFYE6hvsDdykQxEUEwTbJZeJ5hRk7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9tRX6tUdtvjnMCCaTxU7VSGG3wjVbvTRZQF8oSDQ6sseYiBPji2RM43TpHPaehpF8v6tT9mh9n33n5BsDkhk49o",
  "key1": "2SUm9zy62EpmmF2XiJdvDqAfuAPCTNt15LbiUixF8StfpQAvqnxLGGeuy3FfZeMM1MLH7MxxdBxeodqsqX9D6yqJ",
  "key2": "c37s6RnHCiXzW71HejkDirpjx6fuZthT2ib712PmpdvTPmyiuucdnp1M58MrusaihtWH2MrjWiYyWpeUeWvqP1w",
  "key3": "3skYmjaNEAWgpCPzF1s7F2YpWtxTZx7EtWPjz2P7qf5kUUni6tyCTiPg92FuTetwAASnn2yyTa8FmnUKknH1LhAE",
  "key4": "G4w354Q54EVoGsME8NSbrTCKQJLhH9Haz29rH74NbktmpLPjQTzZ1hDTSxgTNTcY7mN5LAX3mey2D6f4ZCvGqZJ",
  "key5": "3jCbMLEmdKmbGaDJL4XFfMh6gXuB68n3UoKDUVgsGENGnMUU5ECm3GErzt9dDWxDqiS2QcN9JftMQjurpDk4FX3c",
  "key6": "3AiGFdRHr86wH62TFvemK49usygRLjCdFXoZj8XH6hNxDDQKsUVVXNXjs3AUGbSkQkMugv7yPL422aycYVrhJrGP",
  "key7": "2cqoUsrdCkHBhUw55qiZZWc78UCFq5zEBAEiaLcerod8DNes4RRZ5jfLHs4kgt7RxUa2eYnRMTNYnKcbP9BTobXx",
  "key8": "37wHdNnkFQnVnMPbaejpzKmQr7kE1D6ShtTvcDSBk1ouZbWBowtKNCNzjubRhMxvzY5RFffZmMHnocXbfdhgHY4b",
  "key9": "2K2W8UPmT7dsDaJcseNJfSkZC47HNhUQf3ZchFrmfKxK7dPMVHTjYXWQiFY2eqBhFy9bn8SR2543Ti5vrx3KfFsj",
  "key10": "21zKMftSAQoe9UJEa7YyrPzpxs8cfEZA5nemZfJcGsfCeiwjiqzU72nGsfpjLdjG5s26WzEf8FRL8qdJsEmbmTB1",
  "key11": "2J4zmLzAoKEc4EM6pPjKPw76RKchdLg7skDKaQXTMx9RfLgRDCrC8EH7uzFj1CKE9ohsbYgEoZLAac1QL3mdZyxm",
  "key12": "2SPXxcLA21xjMLbFapLjrBa1SpPN58TVNaBvA2iiPWd3CTQwiVQ2m7PgKmeToEZc9E7bXUyHAFCde361MNdy55z9",
  "key13": "5zqBjHn7XvLPrNhwNezKGL9CgS2zV8RUJXrLok5X5uzSgRuNRCXjbkGzkeY91Kpd5sXGCAkP9MYbJRirbWaSn16j",
  "key14": "g7Tj4NfMoDL7ZpHTkgKGQHbUgHwkBh3dp1jGQTR6RMscQsg2iSYwQwU8HpTYFWqDStyZpeFwoi2DM5TGrtuF6zM",
  "key15": "45LDjG9mkKYVy6Sc2QzUGPgSfTz6sfs8mgWeT1LCqMxx5RFnAwy7vESjZ2BNwmZuZg9REXuEj7FRxQ1G7DizznZe",
  "key16": "3TsHMS1GD8Z9yDwT44qhsFea2URdGVDheSicW7CQE1Fp7UEqDSCvB9gSqyA8FuyiywbdYrG8Wh3viniLX3AzigJR",
  "key17": "iDZLwf6L2hSh5KcrTb7QXfwgi75kZgpP5pALPZZ1GC3bTPvwqEAu2K8aP2K7f1phoYuTBtoEGeb5KLmAWRaq1cJ",
  "key18": "Pg1YzGAXXvnyXxGk3CVq5ybTr9yJMxFxdHAo1C5v2mKXgXX22FRZaobZETuJstMQkSLJbyUPUsG66dRC4oPMxjG",
  "key19": "4sk8TMjQJ8ehwk4h9vBojFvBWx9LWJBdg7iReETS4cdAdQsE5Bi2Ewu1DnW3cdSHf8AcdpZZhaxioc4DG6XGCDSs",
  "key20": "3rGwTFH36EWCUi7LhuF9waHu7kMHJCuR4USvDqzqCR47BGbTY4XHkJMgf56cDoy6rACHzgkncNVS2vSYam3LsKt8",
  "key21": "NvoDyYcSnyRrTC62fmQGAUnXNscEUAMaX2ToSHDboBcNwrLdeJYeavX3cPtAW7z8kXp59dd7Wj2DJe4sNFAtWxh",
  "key22": "3NhQZUJeHutjXdnV5RLvSQ6d7BySyd45R516RfKxGtDZ44c2qRnRz4GAchMJUJ91wuh2X1nNeGGXrbP9Fc4hvu7e",
  "key23": "rG3SE7SGjtagFWnxCVXCQjNSmvsJpuju5LjmZoWQebMhWJkoKQqVxmczCeF3oBccCJfnWCTgPdv7d8dMN9Nmcbr",
  "key24": "4J4vCE8qRW7Fn3BRm6PcyjF5S4ctcVEnjeXAdTkmjmqrkijtxQyag1rkG9kiB3vqpAuFXTFJxyLBocWj7MhporeK",
  "key25": "2SMyYZqRVwUcMhgWvNuKLLzMi14wo4HZCfWSLMJy4RNQAE2yEwitc1Jy1936rUsAchiqDr1WxA2njTa8XGMo3ej4",
  "key26": "2h9BzZNcuZJ4tgbPsfwgz1mKWLtp2AawGs5gJmLAckgKHeRQDs53Q1bCv6o6YNcT1zoa1hkSHLtejXLXTKGbgJe1",
  "key27": "UjmzLrnADAUAZaW2zLPD4DYgeNkEYY1sHNE4oYe7c5LAWeKM2ZEJEsxb9ojDZ9H4WEUJyB1iNSRnMfimoWHuvKP",
  "key28": "2StmpZ6vuzuaZpWS6xBqBcVphd9EBGGcVG3S7HoWgD8acF6vdBiAdW3gnFDTkSJS9HGD22JwdVhSNRrCNX5po1Md",
  "key29": "jkZUyhK2BwSsjt9qcsAckTV2Zb4dBLzhSUAt57Duy5FZx5Wfc5Uyv4PLV6fxNYz9rcjZdvNxLMk3DDyN7bWwaPh",
  "key30": "63KtMHdevLyfxvUK9JcxVFJ91dDQqGYJ96NwQVXWhKF3WRKSZTNzMQQZpsWxYc92c9iuGR7fBJoRpG87ssNA1Jt6",
  "key31": "5LXX9Qn35smyw8dVkRjqR9ToZYn7FfmSZiHSQQmNBiwiLRBBxUnqf1KEhkKbyuqpRZJ8ZmLAHL5d2uWADg4pn7dk",
  "key32": "4Yhx6YFmvMXzwu2Hb5ycKL8cz6oqzZwzPo5cNmy8Yzvosdg21HhGoRBPkH1TScJLaFYpsYSUYntN13hC2C4qdkqW",
  "key33": "626mGxAnbJMsQVesjNCPRvdh4bkTCAZBydR8U8HRCNnmYNJmb6SaLmH8iYrV3m5ixPcyVy7KeTQcicmyfcMEvsT7",
  "key34": "HYFT9aEtrQzyZiRY39zFucSBMZByYJSznMGikcFdsKNdk7xjz4PKMAbRirpxybXkJmESG1vNyN9vLwWqbhTcnpN",
  "key35": "3yDcYyQ3K2EacoRc6TBcYk6URizDkvoUc3hPfzSHwEd1TM6F31MQ2V1cx8zPMPCc5Q6PmHiWkGxZKgqAtEZwpQpt",
  "key36": "2tav1sGttHMFgymduaqGGvMH9CfWCsNXSB2uowZUPcvEW98CrzWzq2U8TAKkGkVzTK1dXsbdmRm8Aq8gTBDqSzua",
  "key37": "3iFWsxtraG5Uc83B4dcccsxqKTtJnRt9YPK5gAkDAN9abLruWnmg9cCbVZUABACim3FaaLU9qXu6Y6A22Qw7beBm",
  "key38": "36HALoALPu5W92Coc943wSZeshMTuM9hUzhYq7ZcizEPnrBNUSLob9UJyXtmfrj7mCrCYWtwH3BhLeRsV4quhNfd",
  "key39": "5puPW2BZKnniso4C4dtwQcaDj1K5FzJG6xeqV1E7kwC9K3aiA8VmGb9sdwZ67w76mLAZ2N4RVKvWTkQbHAn72oFd",
  "key40": "3d73jApDFfSMYc6cif8WUPV6ekcWEfZ7pNEzudaGoCFjJSk57P51oqeBeaG3wS4or2tGcPvbeD6EGEda394a6z6G"
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
