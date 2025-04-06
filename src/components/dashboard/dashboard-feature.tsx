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
    "3w9snUZyF6fLgk8LRmLR7t1AayeCkJ6EB1AX4tccQTEpgRNcAXTsrFDiDRWBrcymL7a7SrDxjvsbHRW3U3HfeskM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FGhK7Mi2t9yvoFXjCioDoS6cxt2T2gcS2fYRwnhuC4DH8Rqhu1gF7L8o2GYunD1AnrkYaKojLvezQ4HRSUC1DWF",
  "key1": "3bhJsQskLx6WYS42cD8hgZmZ3BDYTM9xwQFb6E6A336LqzF1mzboTr5eoLAPmSXAQgSw3LQEGZvwGtsKjCUmFFED",
  "key2": "4hmqzU81g1pwoUDqU8478SEqjCXXGzULnoPRL4LU8N3N6eDby7p3psB64mokdXun9tyXHzDZbUPaxerSTxwxEuV2",
  "key3": "YiAesmDMzAGzwqGi8vEUkbBz7Vhu1EmLPDFSzcXpN9h2CCfC1dZ9kYGsaWjZ43QbBgUg6Sm2AdeCoDWWtKuHScq",
  "key4": "3PF9MtREJuC2uTUTWV5Cdqyb2sQauRs1MhMokiN8majHv29S9g4qkn9bor8tFsc9NHQF2mmB8UXUKQLfq4CHjrUs",
  "key5": "TsXznnZcmi4GwyxynSm63YgKwxGYmsCsLQtwszk8saV3pHzSAVRKZSbZVKFaBraqgiV3HLnHEoAS2gygT6bdcYN",
  "key6": "U9rpDXeAuhSVm6EzYq9ZD8CxeJUS5qv55FJveDkkE8rYqnMQVcyfu3cTByUwFWDw3De6Emuj5mGuxWKGsCWsUD2",
  "key7": "3Fxp5D3E9TenMzz7LgsbtnDgvwJE7dfqdFZ8N3XdT9ZRY4f67s7SiAo3FrQ5hQ77mZTq4w7fx5JJzi5F5oMj4Hot",
  "key8": "2MjfxcJyrUH97xV7MWK9QHxSL4EyWDMQUBXgGieaiT3CLXNKpSQ8pav89W72rWJL78SbycWhoSxGTctjDFeNjGuE",
  "key9": "HUxRqDb4LMMPyVdnkRmKSNAD5NF52kjNrvn1ZrEgRYpTnNiGwA4cBGRr2oz4U5iauojECKjuFs6NTJeA7WxUDwp",
  "key10": "2c6UufdnSnystBQTFsr5DTXypgcS1Tie9h7ZCBBwZoTQjX2gBDzA56swtz7mvNSAnA6kYdCskrULsgyZPRHXrZhz",
  "key11": "fJ7MLLgp1M8fEVw9sNyJ2KuR7k3RQJAaX7CQ3Gut4Ln2uwmGGCRH879g6MK3irGpkE6HwHthz7BckegF667eD4V",
  "key12": "4KjDTkJRFXU18dM3C4Fzfta6zdrY8M7sCfrctrjycXA6pMwEDDETT9gFsQ7tSXaEVHzcVRD86JKkejRoThRooThU",
  "key13": "48motjVkgBbUC1gpc21i2ibHp4NURhUAtknnvna8TpgkqeyAnXUai1vHCSa8hNwo3i7zh6Jh8nSWZWWrSWRjbBF2",
  "key14": "sNuDi7zYJjh5PrTwumg3L3j5r2h97VZxoeoHQ9waynQJBiLpcV8teh2SEUvB7pSKtsNJW67gxsVWhLMhPpdr35M",
  "key15": "5nFPZKHc6eTeyVE5YuyTRbm4aC2qTWcoUEN8HcYGzj4xwDErMnw9AQS7e6n4eH7C6AYmN4sMKa4MAZFdQDMK9VE2",
  "key16": "U6tBCvMDk3ipBSs1D4yKicbovtJ27x7wnuiGs3RYks3QqKjpDtj86F7xFAJMY6qxgAgocDqo8rJrqmou8odBs6X",
  "key17": "4CbfZ26oteqPXQY3Tp2TMoNRST39PYj8HeXgeztw6xMKE8NG8MayYyPFzCbDTxbVo2aW23WiYnW3oxzBx9DqV4uk",
  "key18": "4tBwwbttsag383HuYSAywJwhJgP2GJQmtsAMPsiYsLpyVdK9husy9jDZZMs8GrrxEjXBApFTQybKSfUhC8ChbXWJ",
  "key19": "3SzsbQ9Z8WXZrPLodB2Du1UpfbC9BGMXYCoj62iHaCkkmoo8coJFA1L7FamVQbWswb3YAxhqEPotpBmXWHFwRKTU",
  "key20": "3nN9KYirS5kF63qRRiabJhaMZZNoDQAmxy3Ndn9EeFnB54vkduvaJ5GYQJnecnc9d7yDucEf4wpqEirDJqU2ikxu",
  "key21": "3wBUUxMoCAKUi91mmuQZP3LnAkdHtAQ7ZTkTai8m3b77YpviTTDatXq8xb7MdAEetGu59V8TghU3LusRJHYG3sc2",
  "key22": "rUnPM6k9zRAmqhgZsaNLLnBF7JGL5ppSFfG7sYSj7ygFwwehZJ2DYeRko9cHLmMd6LrkNnpGJQEXE9qsKcojmpG",
  "key23": "3EE3DNRYAkqTkChZnKQhY74Cc78En6KSVrBBb4Z1Kt5nUcVfDUc4huFEJnhgeyK1ADtgFgXvyzj3gYw4iyYeGmSb",
  "key24": "nZafgZJ44v7hmWWwmN1YH92QERiWEPAMp4yv1ZZd5zDEHYCkQ3PLnEZ1h9qCvfk3ionpcscKuKLYXHJizGfeiaM",
  "key25": "2TZnXakRYsQw6Ntvg88z3PQUD1zU91ZyctBMHFk5HbtCM7dZFe1hK8EmEXux4hk72LYP8zEiBb7m3VrDmCDbYn9h",
  "key26": "3ceomNuSCmtS9bBecxzjHSqji4zSL3qUW65SsScAs9pTCpnG4BZZ6wj7ggfs7QV3AEPRe9h4Cfj4TsB8yLPp5QgG",
  "key27": "fjm99RSYjWRzwKmSLPo77mZiT6LB7m6VnY7FUjJcdzvbjfJa51JFohg97GLKS6hnuiikSLarDhPF2C9jS6zMBRt",
  "key28": "3goFaHXausGvDyd12Fa57bUKW4p1vhRCrwkeLaFvz8D54ZdKzvEgzHLqd6wAAJMAn8Cd264sCAnzL31cYNnR9PYe"
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
