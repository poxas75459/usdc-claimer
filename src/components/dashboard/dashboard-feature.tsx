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
    "7K5HwMmnx4jRV7R33uUHzdqypaqfSz7fk5qBdCXcgucbPYTp5GQbQCP8B6AUekamKZbE2qq8Tp8NJMByA7cZFub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JCPY4jndSFwhWpVPigb8xcVajqtYVd7RnZmBFerzTeShHKCLHXRRLQgy2hL6EWsUTaHY3E6MUy32iUZLC4zV5mW",
  "key1": "5sedaQ8YMnHjrMH5FFuw4KPgmWGHzy8WPVPeayqT4epQ7F9kR7RnWKqUiN2kzifzJwSAFZkSthhsuCkbmcKH9nQy",
  "key2": "2hffTJYV24gsbeJMQaevrkdvuFsyomM6ydEfe8tvoUFEaKEj3A4PRksWQJhPRYwXbcSFo4W5ghHhFXGnyhTCaPTN",
  "key3": "5Fujwn6iR6PYAUwPVAa22rPhMdxi3ZkLo3APJyMyJAb6ymKdLqMK9XXxHsU6Y6H23sN8SXRwnmG7jZVr8hwvfDMd",
  "key4": "5yLZ7bFd9Frf2qCc38ir3mKiCUP42HbdPCLCyZ2ohhcBddGwnnq7DqxdotaPGWboSqD32PnreVHbaeW8dENVWrWP",
  "key5": "2GAMpc81fnTDqAGZg2pB3ysr1CdJ21UcXZvBDQ3GTbNTGSz6LoAGkGX6S4oPtteainGB3mWvUZkevqDtFFc8YcbG",
  "key6": "5BkM2WXU7NQtCtheMcceJ3LJsLUmvSQ6W7T4o83HMW2d6a2E41ivtZTkCGXLHTpaVoQHtr2gYsfmydiXBDKkzMtL",
  "key7": "5YeRcixc6s4WqA8D5SvWJHjfAGUKffyicwLi5ganvpx2fL6L63Ym77eyN74UAybBmCig5i5C9iSw6VfcCvBujhss",
  "key8": "4dEERCD5rQ3c5RZzqSpNYnrhU4VjL15GkGA3eUxfQHwCd7dJo4sTD7KrMd17UytSD9uaL4PymC5tQAtsxuPonLYM",
  "key9": "391W4uzT96xzgr9fcPCdw8DJwLvtHYTLmwkR8ova5rJozZMvxXHVvXXBsxipGjkFg2PLZv59odbMAfr8thnPwemD",
  "key10": "29vFfBEU9gRtA5ocSDTF7p2nTqmaUAhFRy8piutFUQuKbT8t6jHHzoNVfuZQShPCy3i4SWrDRdS7kxBdm21EKd5i",
  "key11": "3GC2LmoitKySRbaPEFDRShi1SCD7swnmUp2EQpoy9EQeYc1AN4ufuUqDhfkJqAyvd9zEPTkzk91zchv1iUjCZAsA",
  "key12": "3BV1aXWR7PeogY3Q6G4TFqjdDfus6sb6dYonwVSFkAP7Kb2x6w3y1NzPkwPmuCgoqu9MynmQ4LLCkQPMFVvN1E9p",
  "key13": "4vuiKhmApvcJ1Rsnk2dRiNBmJdiR9PyXfy24NirdSBkHP6xjERF9VVRm3z6VF3JsgTzmP5fADAKzkBRnnRuMzq7z",
  "key14": "3FNghCt4aXEDJnhqAxtjzLVn423QbHni88DaQ3XKJEmxChvLPTFzpR9wWYWchbKAkCFhHMR5hc3b8fLGbqA3dBEq",
  "key15": "5gD79JHK3BBPeDSRU8zBcAV85kqLWJ6domqnUBxVi7cvVmgdzQMSpHX5PbUtJD47gi5HjTaS9scEN5vYdvtFaZg6",
  "key16": "5aWdNcPLq85tgJkdcXrYnQGwKtxAaRhRZydNJqWwCWDiTJq8zCND33HnUjww5jU6KdwbRmkF91NSt5YPLxEhaGr2",
  "key17": "5RcF7v6E8sY3vwrZHvPc13apA2g4Hw5nGipaCy7sg3cTBFFVsnyjrsKaKtwbATZwCouxF7FESMHmz2NfyLCVodko",
  "key18": "54RAx5gVet295e6mGRPBnnTq54cWrCfrtY3nUm2HzhViPqQJotUc9xsxpkxrGEJNJELaRPN3nhCD1zrRfaoeFdTp",
  "key19": "4aeLhAPM5RwQi2tbuuRaaUe5CoWVRSLK7KfACrG8WnnfoJiWZRvymmvVwYaaM5apWLCbyUa4XimwZdtnsfr67v18",
  "key20": "7KJaFYCxfB7UCirWm6th59JtA1ZQFNXzMHUJDidnwtAdaCwXV8JDe6Ra2B5neZXL3xBZQkUL342Zjh47HjKcQhR",
  "key21": "5hyfiWHUCrboEZcyPUUR8nA2hPco3oN7YavnY3EVYsKnYCBue63AxdZu6SmkeLkMLrbGLUEhiMv7VcVvHDnb8WCz",
  "key22": "3LfBFiX6sfrfwedGKbyZCc8ShMN8Nphf4V5hCYWPJJcmVTEEUTzRookzq4BAqPi3E41SfNQu7d2DUHsusGcipk9r",
  "key23": "w3imtwDfXNP5TGwoj7VzshJqnJkQbXaLawULsUL6CtjHozi8vPzzs3aA8gu6rf7SA7xrLmMTx49A8Aeq7PdeGs5",
  "key24": "4gCus4f6wfx1eqFZkC5a5PqwmiP9XV7DbHAhed5WHGb4caM15tLD6pJpDs9Dkvs4ffJYEvQgBHYFDu8EKdcpGQpC",
  "key25": "2j3tAVsTAxNHp2VDCR4im8T9QjyJY8V1jsf8FzmiSn1oLJgRudjRqhhcGLtBRvmivhA3U9WB5DsZtSTyEQsxKVvk",
  "key26": "2zf95BEyXXkVrCgHCV7ebjBofGQ137TSgLuzZUdiKTUr2iH17utChfQCCpXfNqKZ5Jm8JiCLarD1gVNtVDXdr8tz",
  "key27": "3o58fDgHHWbUXjQQeE79HqvnT1JyBU3CJT2Tz3iEC5oEurt9ebEPF85JrMo1jYytXo4NeUbDTmgTWE8133QcUwYE",
  "key28": "ewPuXvyPMSN492JtdXTHupa5HAkYUNrkaQtpvJ555T5RyhTZCY76uPf8MK4AVXckPndCMnZRCyLaYTcumCa92Up",
  "key29": "5zyUzfk9vAaZYTPERcZx2t2X2nhi6fnWqPi12h8JtQcdH8sZyRiXqGaTLZ6Qv85WFHLGsggoeoUVVdjVTyUVytsb",
  "key30": "28cCP36SmN5LizRjYFbqNZRe1udcFmfi5MG64GzcMY1NpqYnQRxzUTNVv1615DjtDek8s1HEhRwrRvgCRyuWkmGM",
  "key31": "2i5mpNEbwB7w5bN7UommqyLn31PCquAuLTtExbStE2yvFLz7k3KpGg526d5QJTNbq5rGXrTjvBKikstSnTGzSPSj",
  "key32": "4ujS1C4b2678ELLtcb1T9k5fC8QydNu6RrwrxVJPXMHsDUiPDW8AbGt2yNgsVRknsBvhDo2sTsF7Ui5sf5KxKeDB",
  "key33": "16gt7sXxhnUmETKyGt8BfpDp31R1i5pr4LiyKLBQ4aMd3baP9j1ftXxsfuiRWcKa8Tts4wJd6BFsxD4U2fpDJTh",
  "key34": "5LTujk3DLWWWV4AiHjhCXZKTPdtxxGKZwTs8HLhoW8TRQf5XKCqe5SPuoRChvroaaUd8BzN9Gvr47pbYahFDL98M",
  "key35": "4KLpQGXUYFswAyuCq5JNzYM2XRwVkCLCP3ufiapxe5eqXooe6FHQs8K9gnEE1nXLvpL1Tgqmsm65JKtbuBv3KwNv",
  "key36": "3Ekn72ewxTjBStny5Q4r5wwZ3N5p2bCGoNqpXqQdgbT5QwVfKkPESQSAVrdzya3HMFWg6bm1krMWebbd5kzoZDDU",
  "key37": "2k8rafdQgAnpm6FBZUSpTVp5HDEsosLbTrxbVtngAVsk5mu54NJMUkoZJRR8GntK9hegsV2Vi1mnAshhgQvvUi8e",
  "key38": "5RgoDmdp1fHJGfDDGKtn7u3KUBPbdf2sSa94GXytF1banNm1AC75AWWX5tCsQfajbEyzwMvJF7VH6A6fsTmoBMAz",
  "key39": "4CuAfbtBg3ULAg1aJJBwoPgKxez6n9ksyg7QWUQycUxnNiKpv4DZAKQo8yGcybZ9x1yCphqnYS9Y9aVRMpLVzTUf",
  "key40": "MHsoLEuEomRAUEFuTPDARBpBK6xVyfTeg6ExDT56vs8kjpMPYfXgrPCJRDtMKqefXMLne8YY1HjCv4VVxu84jwc",
  "key41": "5AmTwqun4d8ya4ETGyxZW9ZNkjuUBJcZXrfx8npXLnsGu7VhnMpe6TUs5WJtztvhqoYc7ekcwJKet4iKcmfhYv7",
  "key42": "3vyiZCSqSNvTzyFwNzivV6rAwMrnVoYjFr3PTzmAn3rMnLbvJWUp75CAcCw2B8hHB9MYeSzwkjgum6hjgP5bFGuS"
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
