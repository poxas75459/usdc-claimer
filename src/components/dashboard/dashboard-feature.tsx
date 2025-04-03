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
    "WDfrFmRekKvyzzU3GkNaxQNdrV3VFHWheqcCbL4RRr6k51HQxseKKKomJ4sMCv9UvHYSD7CGYuZ4FFL8uz94u7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eTm7aQZdzzHtvQjbLgcuhZiKV2fU2yd9iAFTFUMU1B5KPDQebU843gVKh4m9fx2D48Y7smAwU3MbW3ow5Ho6yEd",
  "key1": "29xTDGt9i5XC2Ks7zJaffjP5LL2nAcKr9PCB3yYBJTMRSGPPRwuPANYm4HKveQLAjC7rfbW6EDX818VYQSUTTHR2",
  "key2": "MnCbT22j2UMD7s2bo1Ku4xqLYVQMbUiHTJhWJZtztrQ8AZ9wjCNGbSBxmZhRYqSqNBbN9wXnrchGjACSB1bCoHH",
  "key3": "5FAxQZ74cNt4ePMKXedJ9xgqLRKiXTKogHrGgr7NmBN4tjhvKmtGG39Via5ZVETvhoba6ARVejbcc6pvzyceHzog",
  "key4": "5fdTEvTCio7inf8GHsBReUXFz29UiKCdqBJtnj1f3CRoSuyj4t7LtVobvWioSoKuCNfTnK23ePF7BAaFHMhTeVe1",
  "key5": "ET25Rr39kwc1RdQcJShdkypndGSaAumx6yHEC54BiaXBqEvfJAjpzRb8cBmx7RZg3z26udSt9NDJvL9jTj9Dqqp",
  "key6": "5TnRcGGw5cqZLoWHjHhwdyRvujcNcY1ydmNzZBi8QU7kC9w8vabaBwm6pmycqyenvpsK8jJ3rQ6WUNHXevo848z7",
  "key7": "G7vSiw5Fri2Vn2EmNBYCRcSo11waHypbzsRJCPJ1yPzfcJCjfF3BiSAxqE5PFD3QwMYpdkNSPRcKrKdiwou12xL",
  "key8": "LqxCQhHrvbSSLUoF4EZW4PFD5dyNhmdhpuJWYdL718a51Mtu4aSruYot19XkQ92sss6JkbxYFDLF4mkYUhzCEBS",
  "key9": "43VotkadePNTpWW5U88vu3pXYsr5EvZPEZpM4xHVD4xsJcEttPYTCrmTPMo9FHRzjLY5wxnToSwZYjiA4Tyw5cqz",
  "key10": "4aFynfBLdBgkE3NzWGiBrKVBJs4tUAkM2CktPgkMzhbeKuBmDmdDpFUpHooX44pK9Z2MPpqbAi88cLrjoquNkBTy",
  "key11": "4Anqb1b87vkL4wdPsUQ7Hf9hc1yuCtkpEggmpYksC9NcbtfG2241qsdjWg2keLomYGgpRE2riykwf8iCi2huXahG",
  "key12": "3CeKAFADLH1JiKKqxJzZCcb4GqHnu1Hn8qv6iY5h9GWRRFEZTEy7m2bv9ue9tv5Am34CVehyiwfnvnxSJFSRzvA3",
  "key13": "8vqNXSFWSBQC1DvDAbZS4vtPS8vwSPaKpjWZt9P4E1QxdPFbR7Rv7VSP52GD9konzkEhh6ptq7Dj9JJRGi9nLqF",
  "key14": "5jYExGh4RgxxoDSGuT4y6CzHF4hJHxgLoFA19sY3NpYstRbEWhFeS4qMJefVCUf91uwdViiTk8zjjsj4iacUmrxT",
  "key15": "2cshEYdwR74szDBcqDWWsDHFcCoEmiZkUCqiwx5rANGc7ydJE8asvdYHFw1AJBQY9mqmmpbACZJRSekSAhoxALo5",
  "key16": "5NEHZ2nQtQbKedw1Kx4MgCvczZ9tPfNxRW8e97GY8q8UNDPz9wvq5hWNBcb3iaoaSvpbQeHkFq1c5bAt7zoDh6rN",
  "key17": "5Eva76Jm3SWDXs1UDxLjNCbJuXZYnKLPJFXjSbrmDe9q9mXioG4qDjyjG5vH7h7XQgspy6Ngq7nHWqdf1bEwWS4L",
  "key18": "5iFsNXCRJ63E2RFcDaokLmamej8k6JADwBJ4DgQFsbHJatrHry6tNguFqiAFE6aLK4JXYYUWdHEy3SprJFfEnkYB",
  "key19": "5FdS2dL46mmG38Z7Z6Tx4XcsM7RbNmN77QhHJijM4kUKhEunYMw1N8XBiZjH4sbSyPpLphPZN56zVQzxMNsstaRK",
  "key20": "T2ZbzM8XeMWAvNTKDNr3q1yxr3dgPAeobzU76rVfHZN4b94sXnsEK64TJod5SCVvpWgKh7fxfdgrbpDtD7TRpTy",
  "key21": "43N85pE7mZAU8WLWG5KDf8wGtSqLA8wPaevpebey3QLaEGUzr236aBFsvnAFgDm9Pw8CzeVsfQ7EYkP43NmZWXru",
  "key22": "4v3mR6EGTEoZmZrHqjDfTa3iwNC1Sg2hgD1w8od9sZhuXNX1wh4WkVCXd9ZjGwhs8rwYW3zk2WbaYyMYiZcG1Hdj",
  "key23": "2Zbwaje8nEdsUmN1KHPpMSUbDUqbmbKi9ehf2unV6gLENvSWiaZFFEoNX2FzR7Si8PCe2QgRSauCUHSnfSbvJQM",
  "key24": "52U2d5sh3RVJSSNrFq8ekRJ635goAhs7rpPDjYQpAAm1mjzBCd5t3XKYyJJTZUNjxBdfnnXbJGUFsaiebuXXamba",
  "key25": "yniDV6fxk8dfAV2GSnimBB2C1ooFpTKgX1UhgZWpyfai6f4dVSPdZvzT8uwNk2GDorgf9xKGSTQs2ptM8AN5n6e",
  "key26": "2MgAjGyH6Ki9ajewhuv6o7JjNTHF7evzziq3LCXbrQTc8uGt9e4nSpsmd5tReRoDmMQ7QoWnmstaLSmtevPFf7yy",
  "key27": "4JSV4Kw7pajzWFBTYsbTCxoUXFHLizcDZP4TSBaTfFPeVsgKsp2q6ACdkqPXfUQC9zrihjJep5HTdjiyYLoBkvNR",
  "key28": "6g7pTTxTtBVcewAKSqJWdF7Qg3Scgcq9kFFesr8ttYKWiQnasHuvtLEF1cicCiigkyY49vQPHd5ZGkDQftrfrwZ",
  "key29": "ujujfBkxkT9fyCwyfpZXP6bkYhD3ksHsdfqyTPEeVJWFMvTgkUaP5ERS2UQgZTGbxZYkkKU9oFWZci3ACMPf9ZJ",
  "key30": "2Vq1aFxZSUCbeLVkmYC8uqkrTBt9cscLp8yj3fbhtTLzT7Ezg2xxT6jBjwCd1YHtR13zHhLeLkkPx4owa2tvdBEe",
  "key31": "5NB6ci5PCLWzZ2G4Yx1Kx6UhjkP7Ufn94VJvipnpsu7YPhdQFeLMjAVDvhXnMHST5JtqMKJXVdJYNvAYw4KP2tit",
  "key32": "66UT21EikM4hRwn6rJHEfrna1d5eTDy1rAZN5F8NGAbViRyzvuNV5EnTAFuxcofRgwEvkYM62xW4CttjdVBtpJef",
  "key33": "2f5RdVRJXW9vFQEH6evxSgELEDDGNCpfD1DFi2c6aBasW9798v6BJogwUPLTnDdARvRf8dD94aQGVrCoYPpMUuDz",
  "key34": "5xvmiDQxD46mn2LCKYmyhccbzR4DJrW6NVMDvVdWRj4SEU7ogoy3bUAXYm4FbVLU5MEzmQrFZf1jbs6jz7LxNy9F",
  "key35": "5e9ehwtq3pRgvK5Yqmvx9gAD77FhEi9pmadvRQ43Zs5oW17BcV98JbabvWguUqv4pHmy4TWyvEYZV9Qw5meB4RGs",
  "key36": "4XXDnJg3EmDk24B2eW8MtL1RGXr5JAMt7fAuf826vS1tqFN2PcydXWTaDHLPaeyQxgq4cgKE4DmgmXkbwSa3XxEm",
  "key37": "4jvurcZTRSL2xFrt2ht6RzDRYKAQxFjqgNuNpSpDASVWEQYsXSxHMfkvUS7kwj3u2YwKGK5yonKJwqVP2QWzVw8A",
  "key38": "2p77vaewwPRE8tUqk5ux8cd48jBHigC528EtN6Nm3vLz7gPsodp1im1tGkS16XDCo8C4j7YqogYrpNG7zmPbr4C3"
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
