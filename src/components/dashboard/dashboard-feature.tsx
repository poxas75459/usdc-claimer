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
    "4w3gcdFfEzc1twMQUg6bYgq9wCsu4c4fuHEQJMPvNK7aFik41FFpadmFCknQ2pYFhhHdUGpd5EAz9LXv61WXP4nX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Aast9bYuCXFv3UbnUNwZkorXAT6HYSseFQuM5eoacVtBouaeayaHxLs8DipPPbD1Dugf5ka42F8A6P89w4F3b8b",
  "key1": "7sef23YGsbNuw5EJwyTjXRr7LH4BjnQVJ1d7GmQaEXZBwYDRvuipNh1vwruVSpibUZwfFKNqrdejBqQCogJyFcJ",
  "key2": "3wxNtCfXZGpHiweHqwRmp8gRf7wwGqMw1oXzwdycH1dfHZrT9pWBBNBFNcUpNUynVTP4Cjz3y1eCZytvnFs4kte3",
  "key3": "3rrGPe624YnYhJqAcHUqfvfgq13GsegjhpZHPVHnb3xAHyky5ejgATT2ndRvKQvjqdWyBPjmdSjtuEwMfxoVURPN",
  "key4": "4iFCi59MH7AZxYAT55VLtBES2THruLFKjh7eggejtAmGRmUMUqTF9X7VBDKAEAWQezoNJJqrBBiBg6LeiPNy7UKZ",
  "key5": "4MQwmwywuFzKK2t3VH1Fkq39jRrzQcsoGd2go7Cp2yKY9umg8QNgCyT53oJaLnds1MRmEkGXc3YF7Ao1XUhsTtef",
  "key6": "PtpNcQrrujTHhPra5Yp1UE3J9i1Ja6Cck5KHHFzJvRGB36QF7pyfkLwt9Mt9MRybL5YuW7umzWB2FQC9zxr6S5g",
  "key7": "4ewvUyaGBCcitVysTATVusmsjHbtLqs69DKnfRe7k7og1HWK8axYjf7gzzyK7aeeuukJGiy83bzJBkEw88wahN8D",
  "key8": "3dFJwbBCMyekum7zeHMsi26vZbqn1BDu2n4WK2w9ic5wsM93b1QGratdo1A5wVvkeRFhXfBmWyhD3gtybZv5N935",
  "key9": "44kcZWvHuYL9MGE477jbCENpNbjCNBz1tAukHL5ZvmmJ2HEKtStZhEQ1Dy2faWbHZdBZDGzvreoX59yizYZdQ4e",
  "key10": "3gKjGUb6tUFJgvFkS5pDC818Q4iANsAC65j7VUhwziRPtvxjKpPMs5UYdzWe7uteJgEsDUqM14X8yY8Z3PdtfStJ",
  "key11": "22ziE2wH4ww6y9PWfHVngDzYGsSDed5JY14EgQHWMKVV7TC7WbbtEBitt1T7SGN23RmZUiRXmXmLhsU7eRRG6R9k",
  "key12": "E7K9dPNkbLyLaEyVsoLdp9LWGvCYKtFhGiZYUGqTEhNXJk9u4ZshWKNdqsMgXkKcpwM7KgEXDMBvkpAmu1z3fuv",
  "key13": "3KDUu7zxfiHKR4KJSGiF1MhUo53gQCFfRypTAopWo1H8AkMJnbazXBDm6diYWyQA9gbZQcPEuboj9YP4bJUwEyzn",
  "key14": "3Tv54FdBZzx4oYu7AwYwwm3XnZMdrSC3nYYyhLScz4jHBzF6uvRdhNwFhfCo1PA4yeb8cHca4su8enSxouES5PRB",
  "key15": "4mS2x2Eu62m42u941DXA24HjYHxHosaD2S5V4C7tybKn6G7RUV8XNPiNmnAMNAfXYN91BBLZkeDWmxjdM275J7BF",
  "key16": "5MekbqJKZZhCYeJbBvkf7TgZxFbMKqvjFUs2bwBCm7icRrHozhy2EAFevHMujjMxrrtD7SbBR9KuDh1EZMQgCr8V",
  "key17": "4ixpriJixhE71HYhzBUii3B9TYg38YjwBiPueA7D7xnd9ygQDKjF7W16oM9nfsSvY2MmCUwUfHL9KNeUYebJSYAW",
  "key18": "5waM8kCE77Hk8Jb1KUWpiUYc8AYNt45JZpk3MGP4KP9FP2E4BbnAxxUWN8P7ar5jFSs9BgrmasP78fRMrbBfW4UH",
  "key19": "2rp5VyisviMCrdfcrXxT35Qn4jajD8mCUWF7QWi6gkwikK1bzEPTGjqoHsuM7ykfM9LP6tb5NL678MykzZmRSGkQ",
  "key20": "3Pwr91SnUZ87yU6ZMa7JU2iMciRkDY7Jb12PZ8m4tihxyR9PELGHocmyZFAo9rLTPz52SbcKa2eYtjoGJDyscAaP",
  "key21": "2qqR82rBs6Fw8mj6iiQXfg1g86xem5K1gpRQhwKr6fQLF6yZD2fXpkzn4GVm2nuq1XPoAv6v4oTMQLRc1dhxPQEE",
  "key22": "39ZdT2efZDWupHKLB96Er12VCXWaTD5BroAh2hjMgCMboTK9yUUrT7Z9uAyhTPWFSDPmTUUAh1cdsH8mYyoxSE1P",
  "key23": "oZ6nix3bi96KMD87LrWNqvAG4sV62uiE9cTPM5KRVuyqqTCYG3cynAd3vYQpbE8h8XAr5eoTj2aNC7EgLX7rLMt",
  "key24": "5bd63wNhviFYdfY5fEMJmjuHoWPS5fuPtWfoJ4WVhGpP92UHQuFgqB6jpHFQisEtciRX2s7xqf1RS5SPkhRPsWgN",
  "key25": "4fNwsNCvLcT5jeJTpcBzcRYoqBPaNtH2ybqDZbDQ3tNKvfBsKVkuwCo46mYTPBQWKYZA8YnoRTjo1MczeG2S1Kem",
  "key26": "5WTnM1yLzHicNZcfzzsPQuErob7yqTEfQWrP2bAJ3mq6JshVvEksovoU3ANKcYbzBtYUadbtseNQuUyRnEHdjhsm",
  "key27": "2onUmjDF9E8vE6y8fDNjmVYfSFC6nRs3fFG8BXaxNhipHerReoH1sHmFdvN8qojfCFjmdvaKQ3XhjJcYKKaHHyrA",
  "key28": "4k2ZzQ6wer8bJfhXPVmeFqnmJyiTF6Q3WqGh5DEN2Lw2bVg9N2bAgD7n18LcYfUhBcZmnjEgG1XmukHgrpJHPwS9",
  "key29": "46kfecMvnvpW9NjsGEtQCF2yUKpoMpHEeoUcY6JUPPV5z3RY6zD1PngnZpBuqaTu64gwPVwBZS9JSUnCfjBukxjg",
  "key30": "3R3yyavhBGQwbMCLbQfjCJQr9Vmcbt8tAPY9CSnW74j4YUng9Zf6tmbjcQLsZTh26ytuCMax49FU2B6PnJFa4huk",
  "key31": "3QQB4iAc2Eo5VLF2GSWAB1d7eStb5yxk5WLXaGobEeko2qbigW99eiHAeRw1A3LqtQNeUVzkbzSioyqWsj7LASnM",
  "key32": "3rm3W8Zt8LR7FMadygEky8j2Y9vxWGn3DocuHkHkqKm1x7eYhtwY3JaYhXmXicqtJ4BN7kR4TiEFWCYRdrnp9XgG",
  "key33": "jcT6r3amVg16Zoo8vPFf2fGj5QsoQsU3g3zGtEevPo3yp4QZxjtmDfpyPjhyZoLTM6Yt25skoVpnoRSnz5wgcTb",
  "key34": "5x4AF18cG4aysA6cDULVMsLfJeAgKyRaK5fbuvguTwnoitmQUohCXKiQnZwpK1NiGL1dGQktD8KQzqkmjH2kzodm",
  "key35": "5BieSE8syJ5DVXEUTByU3T2U6TYkpXukrEuhRoU7DtzLEgafYpjQarNY14xHKws8xrKRWuvonERqpJTisiFaE1N8",
  "key36": "3qDtL9gY761QWEWXuzifL4pKBwPihb8nmvYds2YLjmbHkt9F4dQMVBbWu4FbpvSJxrnJXD1BMJryxy81vNYg7omZ",
  "key37": "7dkUmm6mhDWTnwxPjYqFMMUpQDv9BF12baQWsUcQWL3zQXoZgBsMXdoDwgdvmnWs3HGbGHZnBXaGTZGcBfSZA1c",
  "key38": "33upmJzZcmWcck5YSfh6xYC1U6VPmY9eNif6JxFzVXxGoqSDq27ER2Ryqgh6yStrJ9k7VX5Nhhgxo254HzBS21QD",
  "key39": "4dx1ikiZmRFWKfXh9NEnMe748Bo1J2FjTJtGAa7RnuZVxs6dFzFtvAmVt7SxBNbrVycvXuv5KAMmUNa4k6WkbuRk",
  "key40": "4zjb8mPLBfa41xWtMRbg495PvHNo2vEzVHVQoSkBjNMdnHVRwPcY5uBxsxiwdtZhDUtwiH7mv1NFmnVuWRDwtcGN",
  "key41": "2k7Qe59J15vLH4J741ywKURwkoA2CagmbrCSmzbrocDPxy5uaEBdGesTsMnQ2ENDtfACzSgiJsis27UrKkFumQJE",
  "key42": "3dRAggZYpJr3Un3542W8G87r26NsuzDBMFYjwPq3XfztwEcg4EKLR9bELmziDTL2mHMv7ASeJxmSyRcTk8fvMPVY",
  "key43": "3n2pmbnoBWwwqNCPLEitwBfEQnC6jaq843BtyuWnfMg6w2oB8iC1y2TGZuKyz32ZQeoaafcj7yRBhcbudXH9TYSA",
  "key44": "33GVi7FDSMv4u2zEHe37sLmKKgD25gvsuBiLJWSt2Xpsp5xeeeAaSGqRjbaYYt9FmARYeQmmVNS7W8mv6JRddvGY",
  "key45": "633LVew4LquLmnv2z65Z6vqEryFtmg3whUsqgrZRNoKnDC2hohHPnWUQ9wd4twD1YShs2USJJcvGnxxgTgmEM433",
  "key46": "7ZsSVa6RSbYo88f94qDveiiKekhEmg7H73YwMEYt2qm9PTcnYvjwPTt7yc941fi3jE2SeuSvrCW7WnCkUrL4YFA",
  "key47": "2CLRwK6fYA2CvvBvE8TPDPQr2NcW3Jw3zkZSM28HGwAcheCLs8aZcHCqyN5aX5uGTj4kPf2yE3ymV1naxuDaf5oZ"
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
