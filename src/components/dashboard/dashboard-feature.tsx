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
    "3WtYmZHmQGVZRBbL9K2T493yJkJAR8W3MFukLEQiPtDxUNC52iXLNpmKXSXfNDcrwdrz7BVHDPRKzy8z5J3jPmad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i6ELQwEgZsuk8rN5AM5LC7nmeqH1BXyTEzXPdZThpwkBkXkvuRRL2MkJJChgDdx43bLg4G2QXs6VWSKsYqxnNjD",
  "key1": "4vsjXHdcWnBums6pmDj7FZiTTJQek7ohbtmEd3qMXi6FP5MecfgyFbmrXezjsNJn6TZeRJZiYzoszT8UPSts2riB",
  "key2": "s6z95CvPv8mrMLTuy55nNMDpgyDCF4siXxKdio5K5vt2PUPFDmQNqRQD2oARpw32wXeho3z4qvZh5otTC6kMZo9",
  "key3": "3YvCDxqm1rij86gXFLdsxQpmzthvqM6kPPFPFiCxUoQfwPHnhjU6jxRNdY7tY2hjoezm6vbzYUyZNJ91VwVCNfPA",
  "key4": "qMz25z82MHk98ZJJrq2n7ycfrpuEaASgkwGi6kNcWNp7NrLjHsQXhu8SHC37RbB7faEMJMWWSwQqVuDA89uvKcT",
  "key5": "3YxXe2WguFXpDF9d1mgbYA5U2gBWM56SerhJYpdmUuP6tdMdMLBfUXUPN6u38uGt96gkpgjrSQvVj1NeZbNKJWAo",
  "key6": "HYg9GZBUAEjabSNxAnMitUjpd1i2QxV4pTLwKk5bCfyUuCUiAJbshjjzrWinTBNLB3GvzKm6Zax1eXFWjuf7wf5",
  "key7": "4LnibESk2rLTeUHGcmp6vSnoeMGjvu53rHX8XuGXMNsaNJiBfJPcqVP6v5qVF7GYn1n86XmxmZSEDUwXtxhUQkub",
  "key8": "35SSdW2ZPRg48a1AvCTxuecVZmH9eMT6kWkqNWr3oHgKgccDwAsEkvpRNZpoGzEufaXSNVG2Bj1Qg2MvYaGRCjuw",
  "key9": "2QcntDMbucNJbDGrhJv99k1ZxoRqi5JYgnMvGsdQMm9fsrBSpK2438c38bKK3q3SVo3gwJheFQVeBLGtNLkAoFu7",
  "key10": "2GAo8tTQquAQuRcbFQRgndKnzC8A2AsHhrnFcyZsWF1nqAQTZEVMbqq6PQKxQ4TfqMuFTFgzkQdHRWfaTwHN1LEn",
  "key11": "64pyHbCog2eYDQL2AW8h2X8C5hNNMcF3Zugt3zxVSpt9qNcZAAnXvs2YzvatWz8cWrqnsKRYM44G8Q4p2Q5dcPa1",
  "key12": "stT9ECrJNmiifELMEwJzafvbxEBJh6bX382Q5Hux3Kda8VU942RXxjCiJxzLp7UWtRg5GqjgewQHYej7cJzKgSq",
  "key13": "2D1r1MjGKCHBWmRorEtg48aZ88uHeGiseMEhshkfnKKESUqSQ7JdG6bmWCSu7wA9hnBqErhEEXYMPTL4rVZi5ZZv",
  "key14": "3UehGqdXXad7SYhgmzXzqNRKiXZcGgP1JZk6uB7gLPto1ePqJMUn1bPKQRbXicbePWJnZzpiSaLSKEHoGTf2GAsB",
  "key15": "tp9RM9z7uaGavoC7uUAMjGyMFqHUMNU1jgSc3HQ8zzNSK7wZat62Du5Q3aWd4H9pwbDwFMtF6cp2Uxn7JRAPtcn",
  "key16": "3hZHRW2jM9jq4VqShAnTk1NxKJirBaQdMRuAVJmem9gXLJVsNmmepXAcKrtEH2fL3UmEHzsGN9gmWkQwt6jwMBQo",
  "key17": "5vi3FGYuT7DT75yeiSu97sq1oNi7cLxThXwKn2nbxFsCxJy8HZUvGySQrouu4yAL14VoH7no2mTXCZN1bRR7KDNP",
  "key18": "2RCQnxiLQcnHJtwBKEBHacUvcuvor7YiS58SP15Kk6HS63PELzbko1SqLmYiiWRspXVJXt2xjmHn99T65cca4bQq",
  "key19": "D1Gm6GNMfr6YPqABKfQ86XRHnqx41gacs9ikffyEWxh2ijSKUa32fxDLti1ZydMUDztvD64Tcq9eyRAGz9Jmdkg",
  "key20": "3tCTs6ZvDioxnMYZaTU2fMcjQnnYUgar3SdQWB6QaEpw14aKjLDZwGYhwd46Kxk9j4xpVB8uDZvnAQQqMcMSmHUG",
  "key21": "3cJ1SFZQUmRpRLGKBkXdVLDh14Ls28WVuoXZkRvKYC9kWeW8Th4gYrVNYppntFFsh1pcgJZiyHhZTfnUGCoY1isZ",
  "key22": "5VatE8vhG3Rdz8f96erWWvGcfJ9kNPgdwFwSpti2xdvsPCnbXAKj6DphtH5LQJpHffTt6zD7SqGXAL1Jofy6v9uB",
  "key23": "angxPbHc815iXuvUxLb6gNNbVkH45oCaL3XqVmEbUERf9Z8TauGh5nEpx93TJZ7ZFk5kop9i1ou9UwVZAQgxJvW",
  "key24": "2eKf8cNLhrW1h3m1iRJ9xDNrZMDmFn8HyzTyNEpHERQM5ePWkbYfLVhBt6tihVaQkULE8ghT1QrDoEo2ArwtVpFy",
  "key25": "67bmWiv5NBw5a8HnuCz3fH7BKn3ZZHTqyLjpwRkerpvDAh87d6ALBVkmx5iFesosQmRoiF29f8uwjeZ7dWi4WEjt",
  "key26": "276UWhRwxbNkzVcbnhNTbqVy4Hh5QGHFas5esvnyVaiKJqJStYYBmcPyiELNzRBA2QCebLGW9QSwdqsEBnAhUfij",
  "key27": "3DxqPCcFEEkUuTWVy2b4c9d1KSWs7ca5Docare8yswWTKD3QBc7EPu2zo4Z7KqdEBh3uQRmk2YEJogsy5LcQ16uP",
  "key28": "5zD6JZ7uYEvk7NXeZ9GTEq2o15v3tPBdfPTyFwUgkYftkiWQL9fYdtXcATH3aGQGDzy4J9uj1WTaQkymQTwYT5Cf",
  "key29": "3z8PWD4AFVt1zf2C7K5SDHcmPEkrVNN3VF5WUAtwpgGEaPotVDbcWmvan1AS7mXTVzWQbQWucWDr9DuFvEZTDWdm",
  "key30": "55DZeXE1XNLoqUiSSwbecVG6NfdBbL72jczxGesM89qg4nM3gFJuGmLHrFoWTM5sxneJCJU5MWKtMibuVbQEGubi",
  "key31": "4KemWJsfPkn2AZWKTD4iaykiqMsJ5XxVL2zmaebsRk58VXdAZjLZQ5XxKd5GG9FCJumsDbiBji4uiC3veWHnioys",
  "key32": "29j3pRT5NTfy2DywqNRrELDFmTdY642vRPZ8ETDn7HHcsarxTyCXSgwP168ZsAY3KC31YHEgE2PDXGrLCFUX1bJ1",
  "key33": "4tcRbAWbd2BDrYzF9J7Av8NiHLVgtrKQcV3a2RPeZ41Rahkvzak7M5hoVWgL4MpqUBjYQEUKCZe8Buz6pGZ3QPQz",
  "key34": "54yvv4wwmrPXLjptnQjSksHd2S43mnbiJ9q23PFy4ZfnWVT3t2yTXDtJV5z1in2PmwYxFz5Ci5pYT6RX1o75LFtc",
  "key35": "5HDaRHiANo7eEbDtiVqmnJHNhthVH2WRABKfY3qpoNn1pX4tQtgynNfc1dVNdWhjL7KrfchhVUVL6TN53kdvUjcY",
  "key36": "3rKpPNB4kqFWHhEmvGeAJXTCfbgDMpCAAztxRdeYEPXXhoKdyuEgUSMxgb5cVTwpdTWzxuDHqLL9QuZNUixLTyko",
  "key37": "3MZzLEmpEuEboGh6Rvbi1yiaeCexGhcXVeUA5oAChNKQmsnkbvPCcWothjZxqbzocTm4MRkyAJvR7zWTYszdqPxZ",
  "key38": "5w9NYGGPzdnxV5E9hjuGPtR6564qhfj8LDEtvgwxNSjfNHXM7Pa4fHSdbkfLfiukV9HpjJtVmUz62uSdNaeb2ZDH",
  "key39": "MkMYTmriTmaYVFdd44AuzCDd4JqPuXoWtdTBeFxSpHZsCfs13myE2ctpDwU8wTYSBPscmJt8EU7S2NPC69MtRAZ",
  "key40": "5mgrYGC2RtHGVwRu5gKrxuCng15frf1q6mmpSdEbX5AVzptMAWrFLqrHYW9HfgdNLYsS7ZrDZuWkCJfdLmAxmWzn",
  "key41": "2ft5xFsUtpo1sCciifWGBL7bVTNYqJ2b4MDnvetdxFtZwHvjffNBBcdvCUs7BEdPxi1YLuyJCLBWTZQ7y5v5Fgwo",
  "key42": "3wCYC7Vzthwntw88aaaszspfg9Ami1EfANbph5k8m1vUgWhgRDNSzz7byBiHJ39sMRrwEtQWg46zq68cVLtq7dVa",
  "key43": "5Dq6UbtDQZAwNzMRZwsUzdnQ1a9D8kTQQinqMwReuWk9XKMzUniM4UWcCR5T5GUrnYcTVBGhb6b2FsW57KHaP5ap"
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
