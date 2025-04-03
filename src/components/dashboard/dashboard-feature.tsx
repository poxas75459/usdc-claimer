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
    "98DPLgkfexLWNT3AzgcURDVbgeRXcWBbHZm2S8A6kDtxzUsZxnpLcW9MtYa7GVtkHyWU9sKaEKADo7Lo93BE3gz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nf52fr6BDMVfVgBjcPXXhvGmCS2w9YTs3wsYxJjXNEFaHsJpiVyZtoRedXezYG57AoGSTzBt4KNeiCT5dJbTdzh",
  "key1": "jGy67W7zvQVgPcU9xGLJeD4Mq1mELHP7Lr2ojFjCfkn1omDSbT5jQs6BaVpDvWN4okgtNvs19LXzrqEGxDhA5UY",
  "key2": "3C6LphLRv2iavEfNEYYRpHi49JUnuY2BFK9tqLhE4YpsNgSZcpwoBdDyWVrtkkSN5vTPXaspTAY6WA7UB1rsqxSz",
  "key3": "ZUsAjui4rA3stFCA3MnHKKb6xqudpUBgMbgUuXKCwcNWSytnQHJrut8ZCEfGwqC67YcorhTKPdAJ5efYYTHedCj",
  "key4": "8JzJSrYxaBGS54uyRwCiuAd3CTMeFwgC6uEU78DV1CSr1P4tJeRPHh5wAbx1JNY9Y6eq8ff5Q16xKxrwUv8R6ic",
  "key5": "5z54NX1MqKbnAaxPNDRMufK1qUWjfR8gkY5dxrGRSuTbz3Lc76mm1iNta4iZLyvBrrgax6MMYAATqs7a1ztBgXYK",
  "key6": "3L1U84wj4dCs4wahDD4WRgw4FVEXkdnSfuabUpUyQGr5B5o2uK8TJu7baLtXXYDVaHBB9EcNo29NWaWcbHgKgZ7Q",
  "key7": "meBWUfrAAoVVsvDGfjMzLNmCBJ8wbDfsQ25GCbn7eV8YbpRVuQajqJ9FcKURJVd36VsArxacLo3VQM8PuaTSs19",
  "key8": "53HpdcvYMhgVeBnNmDshnFYv4QLAx2n2KKorSBHphHfZ28p6SWxyyDojPCrYYwXwAP2xwPNgikjig5g8W8g6hi4U",
  "key9": "6278b6BD5rdUuRQMbQJqmgVcxTN1gKB5t2UL9txFSdX7ycVDwZ3Yo5dywtVA2aabUv3X1LhwT4S4cr2S2S1v5VZp",
  "key10": "5F5gH8fvxoWwZiEU6gS3dxwJUAn8JNBnTJoxJhyGnUGTbXLUkoLbYbUEwN6y41uCBBBMN4B2XczBQRisWL1G9Q5t",
  "key11": "kz5KqypPbhjxwiXJ9Qp5q7uTN5Xx68evF7ysRYMAnK1wZZyZ7coM9zBtPRdTpHXiuFHuKeo37dHN2yQUNq6mPyN",
  "key12": "2rgWYJ8UZMjArjiF9fAvSBCP1tdTCMifiChc6JSa3NedyfRXgnBx1Q7agcKHPJd7NWGeJfFAHbWYJKMJKiHFpxZ7",
  "key13": "5mCQD4tzfLcQLj54KU1B3PrhdoeZFoDhsaCyhJ9usYnYxmjRnuEKhPo7dwjAfFb7zkE82YgK1NLb5nBGD3c5RUbK",
  "key14": "48huHb1PPRmrF1RrZfwrFEmfNxCSxPKSLbiZ7SCxpVtWjSTNVZXaYFkAo2ay7AhBDWzfsqpvyZfu4RJKpni8moUF",
  "key15": "5tyAm8GmuCKt8DeZaMFovnPefaBoZbRkDDvQkyM5PA39bhxwYd32zWrSizZ6pSvX61AzPLTMirirHUHXtaVkv2cf",
  "key16": "2Eh8vnLeYGYJxmC6yjrh1wcgqdjQvFVFp2Vqn8WCYvpc2bUXTA2H34oq1EEmpfVL1J2GzQmrX4gR5nGpdCWsiEyg",
  "key17": "4ax5mEm4mFLsdvRuwsbeTXCXkfJnnYUyE6rqWYySDA7YHtLb6PPpGUmZ8UCr6YPPVPhpLw5zsKcatDz5yEwVE7L5",
  "key18": "2i9Dvc6bSgavmEY8HbgW6XupBnuKFF2dAHvfg3TDHE3Wuo1X6CzhiDzJos1i865R4oGPt3YaVAF2PD5BCZdX6UDv",
  "key19": "U7cD6KrU4KtpzqGz24SFP2U2fCb3edwWaieU3AyoqedAvFzBCoPWDK9GeuBWXsA3btXNBhcHziauPCiGfQFgwrP",
  "key20": "DHyG7ziPuD99t44rkz8E1yDt8jC1xrkvMEEPLJCSyg9opq5aSoJrGdpBU3fNmSrrkvsaQ5xwh41mGWSLmgwodMh",
  "key21": "XLptpiLYKxwTGd9syyix42xD2z1aimaAhMsAnT6btuvqmuyJMJN8t1CMQzAmJB8kQRAvf7BoLDDy9PMZEdizzGk",
  "key22": "nKV2LR5nFvka9KZMkgF2sQ9TsJEhKjaohSVuCh6QMkeRFpGVmJpU7V8XASA3Q3RfUXZDQgx9nRPLhC2QGZ4xXTK",
  "key23": "D1CESy3e6tteCBRVAhdE9Uq3VbdaMs1tvBW1JuTZrjfTefb8tVRgS2cbzGaqdwp38QJ9h1KqqTj9UTqA7WJhT8H",
  "key24": "5xcfWRS9A2WxKDmcJfRB7Kd2itHhabCx9YNAMXhJ7zutum4LHiZFdkUDbYJGMddooqzbKBH6TsP5D7NJX9NXXKWK",
  "key25": "4oSZ1Krm5jdXAqmmc8ygXqAXvov6mS1A9uhd4cXWKdKoSqWKrxFqyYBqCE4AQT4LLC7FT9LzmtEH8a6TPUGuNhq3",
  "key26": "5m1nDMWDDCCrVuSC9cMBscMzZuWi5yKRA1KJ18DFhb5BJcX7coNr47uWhqeZCKfUqUVWK2C7iBM73uqTMbfyCdL3",
  "key27": "2RUvYrVHaw1gWbiwFAHx3CSTXmair5keozFBzbmDFqvZW2eVHiY8iPcUJq3mEAKDUuswnvMZXyNWG1DvSmdeW6H3",
  "key28": "5HhKXy3xKEU2qAgAYEhnhQFdYuLVWtPBC818v3tDR5ehQxBrk7Gmbv6YVf5oigDWw9ESef8PUVQcqkMMNmAZRfot",
  "key29": "5q5J2FgGzcBsHJ4TnYitbaZpjn6vRsqCgK9fYT8pB4RdjSTKMJGg1EeyGzewVSfpFtT9V7khMhRS5NVHQo3CajGK",
  "key30": "22gikNHvXW3WaLPMoNd9SxeNyDErNc1MtV4xPuCXkYApihcBNSwkL69oZSBxw1H4dZMygMNaZbhrmMgGuqas9Rni",
  "key31": "cQhjtGacUKMArSxDnf3FDfJvoeGRi1yiQpf3Rc2PZhyjMopn1sVW97ry8nwEejiMo5itEmjpkkLQHM8WRmp8aTA",
  "key32": "UTuioGD7wikdeczRBVMRdqcJGfLP4JPfng8C1SWcFqHHu56UfQaV8XDjKyvP8t2YkKyTNbUWgWPU4iZzZScLxaG",
  "key33": "3YVh15iAgFReHaymb3QDgZKSYm3dGxuqZ5UEzAxL9GjNr8vhA6NwpyM1a6Zj98drEuYRR1bkU6Rptvb942suCfXo",
  "key34": "3HeJkYteji1ZWVfJfBySBsH9xNnC8RbKLqG2HNs95GUF9TTrghheuZe5z2GmZugof663XUDmZv71a9YB95jSkVr9",
  "key35": "3dJ6wb2gzzdMS8sCTGex9G96i9QvAVzVwmgRzseuXrW1QiKbjYc3JocwQ1teJ71tJ37fiExn8Q53dLzJs42vapP6",
  "key36": "5g9N3ixA62AAHwtLhGMhML7mjZdQJPkcpAw8Gx6B814tc6C1UiEHjRus92s43KK5AMoE87FZhrHNzVckR25RMGQD"
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
