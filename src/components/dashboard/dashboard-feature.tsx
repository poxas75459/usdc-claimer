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
    "5r5vhf9CdXbbiDpjBwhuSwvNr3xAkdXiZdMrns8nNwco22cupJWKyd5VhL3R88pajNvxRWYoLAb1366BgYcyopaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65bNE5YkhHTSQLRfwLt3QDQRovDrWZ1Uqay4tMcyGkAtkeUTFh1hWay51DkgP8JDGzuyC3FSPRH6yEDdXiNwRJDg",
  "key1": "KkGFbKTwziZaFEpE22aDNFJ7Bp9QHVbwRKPr9NvFURyDywrqro2oBzM96922sUsrcRDWQtCWLr1vZ6DJsgf7zeA",
  "key2": "4Sh97FHravjL4wm1epy76rfpYfqBQ4BFewm2TbfseMHfc3duDPXQLDVEc6dUy5cnvyg7mMjHWg6xhk86RCcJpLiF",
  "key3": "33UJZy2k2B3TfBgKHHNUM99FKCxcpXfRwXNq4Zm4J1rpKL5jCiTr8nQ5wUGCBTuamxMTMdHctkq1K8hvw8ZShC4j",
  "key4": "2DXweeyS46oEk763qQz3UcZcSuhxKfyrNhJ9ijCnRNNCgGyVgvLNeuh19hwzAPdq3EyLUshXBnvzZ3CeYamcoNA3",
  "key5": "3EHkCDSdyLmHmyEHsZuTxiPQjxBDEmNSTyGvWT4AG8X1TeoxiaHghqh5uCBBcovgiUXJkC2ZyTDJi8jNMbEkxAaB",
  "key6": "2tbu8VCzUhjJY2ByoamqLFNLJLGJtVM3xmbjavZaqHj1w6RqmXgShR4gC2T9DiWBx6R5dgetjS6vRAHWXG75qwgy",
  "key7": "2ciYi4qQWajkbKqQkmnXbxGk5pDrdA29XxL1RnR8qDj15VwsjvoVKQJNiHFZQYaVmM2TCph8hXdXVhxDvX1veBeH",
  "key8": "2ZS4MBFsKrSW6tGa3wCGP8zTNf7df7TvYrxPCbgp58DF89ANsy8XSzC85LFBB6ZUaNHmR2Mq6iuB8tkZL1BPJkSt",
  "key9": "35A4dcQeax5KwKfnwKEiDNkhNZhRfdNQ7H6StuwUVeur58TzH4Wc9gpMhFh9b7p7LC6NaaNu6X2YZWNdKZaKeMcv",
  "key10": "3cmvjTgRQZEiFWXMXSLkk9X6h5PYtF9Q5FoSQEagvQofNapKDZ4oyidNPhJ1rgfLoBV4hwndFMGaG3eLDA8bDWmJ",
  "key11": "w4H8mHCY6KZGv7bDZc9Ut3ycURcLpxokKLJFyXrPoido2VNbWksrFbdL2gmvXGuG3HbTW7gSAWieFaeztS8ZQbW",
  "key12": "2MZfNLWNDKnuWf7DwdfQrgSEi9mLXftoubNLNUD7fXvAAZQpRQUXStsScQVbYNmpeNuZmT9L9QGWGqouZkt4FsBD",
  "key13": "3wincTymWXZ1gwic1BpvDjzN7MVNpcmwzi69KgqjLZhnhJecjSyhhZA6KB4nbC1kbmFqeeDEWRRRKW4yPeWnCvoE",
  "key14": "5PMxpUw7LqFq9dXLV54U5uxtqn94xPJgu1ojDyqCKRNY31x9FRMdCjPKSrQWbBvPq1jtfA4bZHWnmfN2ri3xgVJx",
  "key15": "3hUb4EoU9gdm8Y3BAnRgsSPEgvesWskpVPjUqABz5ZMGPXWzN1jsyH8mi9Md3yUZR2cxpvsjJh7SEmbBL8mSE7Wk",
  "key16": "5vRz63M5hAYZctfSnQindcBDAkT2oHVkTHBBgXL4vxc6Ltqu5ztyuNPv9VkFq8QavmWXezcjAKdgVcFS2D1aTVKc",
  "key17": "5AQr9snHgJaaUQGTYkTE8FKevswDmrXHL9cCi176LQxNvHDngC8wUkCvRqSrwNmtfiYrxgQbNLebjL6z2q5iqnsJ",
  "key18": "3k8LsMtvxjeYGGpmEjXrHFnMGHQuLRfBmBAdppGEKYFG1hnzVbBewdcjwJCUaFodcp2nssqrW3ktPz7ThSao1Wys",
  "key19": "5pmkXfPQ6BsMAeUhCaQ5Ms4saz7ZtYonK6YVHJWb7V9iw9W6Ezu6ZSdDXsZajKJ8c3ciyHMBdCosxxRYUFSWAtgx",
  "key20": "3bDhuL7YokUv9aTeyNsjswq2JdvmAV8baeefVF3VqyVKgQcDKCMw1Bi9iA1mHS79Yd1dGyuhfmVSgGovkLa2rZuH",
  "key21": "39fBkeqPF8k5snarihF3WJruGeBzCosz2SexzNhh8f7fnX4izKC2e9vVmycmBS4ZwAwTBwmzoDVEUjPJGYcyhQTw",
  "key22": "3i3ijBEWRnfXLb2usLVFiW5gFvQEFPhjPExnFUoAQJkKAF42E4T22ECQQrZ2jVDUzTqKyun84cv5R3fhycYiDb81",
  "key23": "3fU6GztRjHKL1ioTJTrYXh56SVgGhUVNwz2odkfsWMAh4TfAx14TAWWA1ggJdhbErFAofA4qrM4WTvu3317J3TE",
  "key24": "4hnzSEbw9vKrxskacjieEuxctMnJaHMRpLHyuwdSZjtgQH7K7nCCiDZKeH7rft69ZDrE4hX4P59QzQpsqYswAjq6",
  "key25": "3yyqpupT6bnQkhgW9tJVzXJWj865ZZPwnfr2JR6HPZ2BBRmNCPpBgrJXnyZqqoTbt6xZtytyM5jETXgd5NLRww7J",
  "key26": "2DTPdUUyp4F5kbeNuKpMBLamQTcc4GinHvUwZskya7HU7zUVhwwg5j48KkG9VWEFxsUMxQagR1ejBDPWB5QehWbH",
  "key27": "4hqp5ruxqgZ526RJfynVMDyB2JePwC7d4KHrDMvz9T2rWcvWXJ7meiZmYGdFJ6gwGoPEcXRAqQe5QVgVsAJZzuyK",
  "key28": "2j3tdSCHWSqt8jfXbaFvf4WeXD3reFtadw2SoKHNVQ6iLSAbFHuDqN6rKNtGeuykQF4QeAU4H72AYfSRnxL9CGuA",
  "key29": "79RN7xiNJgDZJ88L4H3m63b2P9AEtf3Co6iRe7c2yASaT5ZVETSwcyfcg1hNhHPqsnaUHX31Pdf6P6JfAqfqxE7",
  "key30": "291VTVruJyKBwd3hCk1TJcL61a2pmbUDJGQTzmocpHecFZV6FabYu7YDwnoLJnTUdKZ5PPtvFoC8RDJZyLjJfMSr",
  "key31": "5NnCSjHMeQaZLCkQbcrY62WofJ2NhqatpXfqKrJUwgjJitv98oeeszetiNvtsXv4duEH1HQUUdJZYoQxWnWQQJrL",
  "key32": "4vpNKyhNyH4XoTHNV2rVUkdobp9EnrScJyRBhAAHiS2HtvEGuSd8LQfUP7T4QwhzbcNaWXV7T9toP2qQHwsojWDJ"
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
