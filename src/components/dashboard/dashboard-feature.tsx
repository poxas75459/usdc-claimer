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
    "3pyMo5Bti3vJVETD9GRWvK1KuPhpHvKUSPxyGCfUj6G83cxCKhciZZCctnEHTjTadbLQ681uoHgLUoGB51uUouaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KjuQpqoLwf7th9f2VyipZMkL7SnrRdiQdo1nTxXcYZCWBv66aPaP6Jh7jCUq1NJtw1Unw4Hfa8YWRNC5pA5mg43",
  "key1": "53DEWXtwXYp1pGcMDXoeDdizwotxoxiGmM7Fc2B7nVAxwFHfPWFsidGkVvMMqMh52a5a1a5KU2BMnkE5guo2st4H",
  "key2": "4XkJvNWiUXs3ouWoD3dyqTLZFxZJCr9MAtXTmpSoCYap8WkPGsn86txdXFCTaZM7CHZWAu9NUMWR1McQG4KYfdV7",
  "key3": "8cd9qTy6QcRynuxx5CRJfV37JEp6GHekS1KYqmx6Y6QtYrywJ7XJipUeQ95vkYCA3ba5SUHRTKGHbLNy5mdBYBN",
  "key4": "nJKjNPPkvv7EckrjAonqv2UtnmjeVvYMazGAW1SURqWdonBED2N8Ay1wQ99iLGRcmDNwxSCuLNm9jPnuqWDsMpr",
  "key5": "5zLvqiiQUXDdpuayyqXszCQY99fB3Prksyxt1h997LpEtZA4AiNFsPgPHAKWKrLgM1u73ChpyfEDqxctCQPS7Gky",
  "key6": "3a3RUXSVeDKKuH1HmHXgh8NV8HVtC5CfJaqQ7KMz3Rm8azJeUMSxxtgud1UErVMb8LT6VuBNrySG57cs15rodeFq",
  "key7": "4LrMhUa9Civ1pkgWx9eTJAN21t5kFXf9uo6AyApC7xjYoNj5wggkrChXSMpfnagGpdPf8DU7aNXLHwJhZBSZFMW8",
  "key8": "5DhN56VNkt5UDS9i9YVSypKVCfCTJ4xdczMkfYnzumJnSKZDCJkXu5waCVE5dgdWzJMS8hQn1YFYtEFYoNDMQ2Uo",
  "key9": "4BecV28MkGngvzV6F78ppD4m3sYSoy8KNYVN9roaTNUq5LxTLJWR3LzmKX2SXwt85MYV5Z31mhcJ96nc3gQBWRW3",
  "key10": "3vjWD4yEMsWLuvK3CTNGkZi1HzYadxHzf7rZhJ6mLE96CWBvhfWcUCcVtw6xRypRqPtqWzFGFxPbgHomJKagZtL5",
  "key11": "3Mb5id8FwtoywRum132nBWNrw8DB5iUNPnraHSnGxex1ZbEBFCycSFqrHRN4osU3cCEHofT9ZQ34mfvXbrwazXg",
  "key12": "4GRmyFuMEHdcPoX1A8ZFPc4KB4tyPZ6D9aivhv99cASmCGf5AjJrWatfGRBF6y5Q8xHqB3tbyoGJqfqMi5CgTMvT",
  "key13": "39rrnew7WjkSoX2sNy8cd5zLmtMxMoc3Fe4zCYTL72vseam9mc8KuRSdE4612oeZH1Mqh3VRbgJ5XU8KaxwiZFhX",
  "key14": "egHnJzFWrx3yvuZ8SvuoAVHBFizzxdTtaeLwHQyakM8Bhgdq4QECBU74qd2Y6r5U15xNZxZw2d1sJrN74PuQ9wS",
  "key15": "3o42rNV8mQRHhUcdsyTruNoC4cAMBW17TwDAbWzgN75rrKz874noFpmuDZVEgaVV1frsFwBJqinWLZwanZ3EoZ8Y",
  "key16": "2VUn7DPZ7UoCfnDmMndsryFvWjJPjcQEFbLGYASF88R777FHY5PW8dv2DL8q1FrJLHny8DygSbpQW1JotVDNRg6Z",
  "key17": "4xfVTTteeA6vn71BCxmbHUe3KVreTdzmwB148Hpf8D7dGbXNwCZFod4gZTYSDQzMjBs4MQnLGhozFUjkzhSgXWWU",
  "key18": "iRgfpC1GHEDxKN3FLuDC1r3nzXKwaoRRG37z4NaYTTV9qKY7VmRXuFkYdUNE3wnR5LYHQxfgxxXyfg8BsqwzFWN",
  "key19": "4wG87WuZcuCS9XWaDua4ryxfRqsP8ozoDimdRtMpcRTcB1UYJWXu45PFcwN9dw1RWbkPFDD3G1vNPXBrdme4vLWw",
  "key20": "65yQDrTvxF5LDjvsXFKXL6Aq4uREBSYbJc7524uxgB8D2LV481u1znUu7C4ejf2FZ3GqzETNoaEW8H5DrUJHk2Ky",
  "key21": "H2yYCja3f8hcSkNTU7HSucvq2DDCA6tr3ERj7aKEAXfD2pt21y5hiEq5MrEASxZeckwYEUCjxADV9WH7Tn9EMhG",
  "key22": "4zgMVSKzFZc7P5QpP8Tev4GmG9vEiSL7jB3a5zy5xDcceKeigoaK28iRVrFa5U4kZF5bzC2dKWLx6J9r2JNZsz3G",
  "key23": "4VAG8BAKz8rKUkRx5qvbaV9zr7KSEJpLTEpUf9y3zZSpjT7DFeUMhpGuYhENunxoJJyaTivKJEz4yrZTuByxvG9F",
  "key24": "4Tg2VnoTM4kUXhX4mRdBUdpDfRc64LmKX1MsnzMSzpLHPxW4xh6Sm91L2fwtc2Ni6peVk8M68E61uZ9h8PfkGgvm",
  "key25": "S6hpktQnkbrHbmVTQt8dA2b3uFJEdWiiLg2C1tkh6PyaqfYUsZziGu7EYBAH2FF2wqbtFX4QDCWinG54suu2b9U",
  "key26": "4LCb8cB35jSATtusEnNSoPa8QwRBMLAV8q9Ttkst66okgwRmWz5AWVbArTSz49pbhTYTSAofZ4YULYNB2FwxWgdP",
  "key27": "3sLEJB4VURUiQgonWvAzzNh6GiPYKiBumKMP8C5EaXUuzK24W6wHmTNdsKCAKU5RRNxYDfPjbjH3N7ix8dzi9izA",
  "key28": "39po2qLygdGvH6RTbfhpALaZ5d4Hu3DHHAXooisCLfzWMNXMYTrYnvHtitQi99jD8J1N5vTYmWhxD47DgoorQDEU",
  "key29": "2FtkzSHv63wnaPE8H7n2ZDMY5nsY9Co6nt8nML5ocYSEu2c88Uu7bdA17v1kFdiWvbdSxEicntaupHXXM6kiChta",
  "key30": "hg7ykWqLTBT9v4oGrGFRu14s41Y56yXfgmh6UF1Zod3896Pc2qzFQD9x9m78K5DVUzYCi9i4iUhTR85DWLikmeM",
  "key31": "589hekdihVueHJydWp1c4x1YebzQwtjJnLjGTyRB9JDpBVjLsxP4k6dKKKjKgAYSzfX5ANU3NSYAGKT1RfkwCM3r",
  "key32": "3uHGLmaZnHwGQL2v9f3JNhyjA8fDLahGXbRZBjKL5BvWf6DMqc2ZfGLPhqdwTDEdeLw86W4nekxNFmAuHGFqhV2N",
  "key33": "3GbnyEUEx1aUYsYP2fXG1fZJcqsYJgrPAPvQUwL4t2LWbT2gMQYqUDjxgYCpCYd96CMmn3XuvTkAEcgALzSquxV5",
  "key34": "actWbXqJdyJQ6RowDJxQ6Yj1APFydNm1U6NUkSL5Sr6fiivWSamMXPNNoKqnhYL8KmEHyd449j91xcMFCB1fdqy",
  "key35": "2oqYuZYNWG4b9jMcu74hfJfKR2spK1t2W8T96CZwSjypes8JKdanKhCuVfMgnCXDRod1Fo8V8p9BsV19aDDp8CRo",
  "key36": "Z2wUYN5qYpMMN81FUryQqTzazcb3B4Ei6nyE3kJrH2H2KjtSvfpHQc4vgn7bzsBduKsk5bBdKsRtUdGn6Fq6tHq",
  "key37": "4ws9N8PyuFckFyMjb9QXJ8DYZu33dTQFZJC6XpbFocSnTT5CMMsoT2VEKG1G8jVscxRUsjZ42Ybqqu53qzLYaRFx",
  "key38": "4zC4N6QiXY4bCzaovnBs3tcBDuMNhxqq2oh2SvkCBLiLrwVRA1pN6LQ8H568NxiYtG3aWB6LjggWP7ZS6VH1mqmr",
  "key39": "25X98f6r9nFndEHec5kzXyXLNvbjPpdpTFEDKKHGuxw6pr6sygAKaxNGGkZ54mKVMokoikJ55f6ss5rAJeA343CP",
  "key40": "3THmgC9noZhC1ee3eGmQdemkkyuDV2BPXFjvG1BthtrkSBf2zQTUpBpSEt39WBxeu8Dncse7GDsRmBPdsKH4Hamh",
  "key41": "4ZimApLCvksQjzQ9FthHBLkbphz85pdqtKhfXgivyXht3qCMoXDRekW8qb8UpvTYMBS6bkx6eAS1V8tbkyvX2x6"
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
