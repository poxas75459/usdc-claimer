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
    "2kqKrvsoR262njYwzkwYURwFuBFGWJrko6BDP9FznTbJrqQSYsgL6HBVPLBJV3Noe11MDbnQAQEd1yQuqS5mGbpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KRcStyXw9CWdwABQdy8GKpM71AbrFGgMwQZXmLSewDq896uBUk4WuAEh8wUc6CC9J1vi57iWqVHjgSAJ3vhw1ig",
  "key1": "fRCX5UCFr9L7Xies339BDTJY4nF5oVks7FTJoTUbxkUqB5LKW4FcXUraw2i5v8XLJa3VumEVnmyuhsnssBfeBbo",
  "key2": "1TmYsshNbFw1r1L1uaSWbfq1ZWGodSvMiBAw42J7TDes8zYtV3bjzVbW6A8pfrMsxs1gB3cVP7PpWTXo3MzcKTK",
  "key3": "2NyF7yQ1F83C5PucWYkcNp4bGYwPPWBqPodA1z6T3Y2Y31HcTDa7YPiqzJv9fKCjELZCuupFzHG4xQMNfGPnPUmz",
  "key4": "E4P2SxTgBKiXDAmunuzcWfHSDGG2qkQBRBTWPSamDcobBBYcVFZS2Z9FBRFrDFajVL7AtGcqvuahWzCSUQ5ri5x",
  "key5": "vSaAPFuXoAsCoprpBZaJRtJ69unRxjqyxDCkSu6eVLnsWN4rbJPnprpfMGPxnsmKFNHXMtjJPkryvw7x5CmLc3R",
  "key6": "3bmVNAc2SX2LtdzJexP2MAXDmcVrXaV7jSBUFz3KbZed89iTimRg7J4XrshitVqEULqNCMnK7DrLTP2J994STfgW",
  "key7": "mCf11bmB7cZvGr3WibRoUhvkbzRfBDdteN1c9bkcnSJnkKXTVsAjHtHP7cmuNtjxPSaC1Hu7EGPPQAqyzf5mR3V",
  "key8": "3z8VMMcutbwpPycWJ9yCkwPZEDCESr1pjaKmyVMDKGTfY1SqoVGT72U5tcnPqhRBXnVyWKNH4zz4DuMJt6qvxY1y",
  "key9": "5Sac7qkCxHgNhqZemRw1ZUJoXhGmqW1gbd6WBPvseaMHeksE1ragNVuHU2WbZKJiGn2ekhxnhktgxXDd7EJPgL6z",
  "key10": "3mxy64zo6kPcXryogCYdV4hBPJeCD4h9wkaSD4pW2Z72hsyLCQHRexyZz6bgd491xzRi5vC8CALNMtaSAgYGzrC3",
  "key11": "4cpm8aBqax8UnYZLHadgfum4GjLGyyFFyfud6cgYKughBGsgWTJ9wwduZ2V7rYbx2e12SbY9yc9KcEPDqSdPd2Lv",
  "key12": "DvqLyuqLFd9gnLhJhVHnPNFJ5ZLR8RW6j8ZyrKqpjH7VCPM3TTzztHATH5G6FeebyLsiKGVqSx8wHsvbVYnhh53",
  "key13": "3xZ213cchMZ4PkmwbXhDrVYLjHpHGW4AFAzXtAvcxuyFq5pb7R2nG3b8FFD7ufZFMF2qxSJ9HZ48An8r6zwvFzRp",
  "key14": "5XaFWf8i6nmV7iFwSkXM37fJXZhu7adX919tSpRVWwUzcR6ycEs9WkiSparwM3DRzbhdNWqdZn6MBq8yKdk2t9cW",
  "key15": "2c6AWUXFjybq45jdazTVYcZqBqGwszuACXF5UG1uqz4ry1oYVnKjBP3zLuifuB3Z3RsRGnQCcj6i5GpWTbQAeZUq",
  "key16": "3TZm8YFg8JPtx5dXB25D7KtRGg1weGMWn49xCSUC9Bx4zuejUXScVHnY2wpCT1UcxLXPKH3rn2bwxVesCpZbuMLk",
  "key17": "5ouW5HJYBzMdmzCECGoFtN13ajc8U1ochUkgQCcvTUPwtgJaGM2y9wtVPD64ythKVSwbeXSTb6WCs46QGUkWtcCa",
  "key18": "2qBawjunGj1TtA17ineewrY93MEMbrng52sGNsWwbCuNia8wk6fSR1BQjg1yYFr2ZHkb2y4oyY5w3sNJCfmVnd5w",
  "key19": "A6b6GeoDuEgYvMN6CHG7dBkAzLVH3nqN2EQVhWQQF5x6u1kZKNAABTqvetEhnSrngi4P2kXU8tmtA5ycK4c2U74",
  "key20": "5oaCY9RtpLPsbKgCbH1JB99pzapx7UGDGSUtGHmWgNPL3o8AaDPL3AomyzB3bEnEmhFus7oEZWeN4NQCoygmC6sg",
  "key21": "i4V13jAsTF5QcCakswH42MuJShZWnWkjyydLQufksThzLYwBo8FTXpU6Hc4rufSns65yZZFWLjWWUGTW6osvKoC",
  "key22": "2x2Wzgf4HsCBBSnxxBkwGWGw6FgyKwBBKtkq1ffa37dATuAQxZdNbK9oY8TvDqUa8b6dg4aoJ17Jk8Ukw1oq2zCf",
  "key23": "3qUWRULTnXW3fiSN235tyVGxnDzZwUhj5HAg1KEQMjNnFCDsbMSeifPeruTyec3hoXPyMnvzWr6UCDGEKf6gCJod",
  "key24": "5KNAnBJp3J4rbc5z68NzfW5JPCCaoQD6e43E6sbJZxQHnYnrxq5coKp6ZTEttVGsZufB22vbatpK1smP4pXHQ2Lr",
  "key25": "V9mXJc2BYm6j2gewZV29V9HVv9Ss66aEeaG6pF3Hku62Cabkf31gq6zNrn4zGxdttw8WGDTHzhNnw1q91z8hdQc",
  "key26": "ZtfbyTBWZ7wuVWh6XvNqXivLazPcmNiF8dee28HXTPmM1x1MQDfG9Dfc3r1SyXwAeccyJP3WgeXiWXYVb7o1ZJF",
  "key27": "PqvhRE9wyyoTk7rx82EZh2ir1vHUxHRcE85BZFsjTuK2LYjwou85Y3r7gd3E4tKVammEs39Eh8mQi99NbrBpqJh",
  "key28": "5MigNyi72xx6d6iTkpLaDDUTg2KWG14mXKR8Ty9TVbv2aSkDSMksZTijDDm1Z3RdBpG1vMiHMCWvtFEjNhNwLEEx",
  "key29": "3DCJ5e8utEVTy6R4kmHP22as6PWSNBCs7g51qijDVpUfC9iaNzuSGgvLgQSuZ3PJi7sNwHtfj55SUtijjonNrMFd",
  "key30": "3hBNRsonEeTCwSms12BgWnwNBFtRFPFycaHungWcmpp1bhsX9mgfFv2CQ1fG137Rcc1AAHWkiLUW88RmgrcyZssE",
  "key31": "6PcRLH9jUDxmVFP8gDNeE3YNKesVUiBaRZNtLE98BrfEBnCeiiP2V5T4cucp3fye4jxLrwG9nx2dQYDBhRnFv9i",
  "key32": "55aSWi9upt4gpw3Q3rBrJVtYfSLAb6r4NK73FFu5ay1sSLY9xMANX5R4vnXuFvEVLdG9Z5amN8ZkSsEwVzNTmJWq",
  "key33": "nkgzXnATws8W8KG7J63baH16S9UHRKk91xRK62q244x3Tc1nvD574DJNfNxGVsu6vLJMBaynQjPEFHnSv7wssAq",
  "key34": "5kFAH1xRJ7C5MFYWVbvo3akNN3skzowUwBvcmBmJdePtoPKz96oAM5cXmMWyGrYpHYqDBHFAhb8TT3yJavZbS3ix",
  "key35": "3YGtPTwEcZXWZ77CSCrWQkRzHSd2o1wAPbiz7FJ54sfd1SguQiXbQDaRH5wD2tNfrNzSrBmnKrQfdaqjzNWmboB",
  "key36": "58LqkbqhiCFgUb5PHdsTh647GorJWNLRCJoRdZQ2cwVAa9uFUDr6gooeJZs5LjTF8KqGNAago7JEKcU5mXBdn2JU",
  "key37": "43f9JdUEQPiJL2oMG5tNeFhaL6ybqc62EcSVTTpw3YwVzMdD7qaBHPKo9kPzYbpwWFcKZBxUktA6mM7B8T4p4o8K",
  "key38": "2DV7MU8hLSTCxtSCgq98LYGi6Cd6gZLojo7xnduVRVxonccCbWX4ZivNK6cCHdbGH588Y6GqXRBQopQMzTGWoL89",
  "key39": "2tph3hAUFsznmbskSThGyRsthK2mvUbwbs6EuaHNT8V84E8MywHJrZgtdRRj7GEttvcvg76TxFcEkHXJqThP5Uo3",
  "key40": "528BXxbq7rXxEBd1cfph5PuCXoK2SRH99k1khj8jHbKQ5oJgfbVT9wdzSJMikQukHTftNjDTtAFRiSRCn4jZVLkm",
  "key41": "3ZM8JiiJW1dzvgzXRBd1y1guxMNNn9HcSmEtmrh55KqbQ1NU6748aTAkoi7TcnCWvJmffT21bR4Y1vsDqjmUH3rM"
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
