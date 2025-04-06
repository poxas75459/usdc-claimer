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
    "62RZ93GRKBsKoMUkvb24dyFjrdzD8HnfixwBD4VMmRxspfadh61FEB59xMoXMsG6X881mUD6fHQShMtSJpDrj4YG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VZQcPQtz2DDmAokNLk7V23Zc2iw225bW9iRz7wZid3bj6TQuye9E51ZdeUJN9cDPS4CKDxxMZFajGxQjcavy6Xi",
  "key1": "5mHbdBmGbj3C7iYdPrxLVGGzdaApHWycj1dQJxjvWMkVVLTL2CvM5wVYbWsdksPAMy2yj4KiNzCE6NFo2rjXV3eb",
  "key2": "sJEtehy8FF7pz9nEgBueT5qU8Gaq6tUHRFfDzhMwXALTDfQnEQozmru1VuioHTmxsHXqEiUtuao1Wvn5AtMHHFb",
  "key3": "2wF6z84B5g43D4EcrZGhdFxxJwDwdpWss1NWrs3yRzHTAVGYR8WSELwbzXspRVu5LBs1aY7itch9YfP85yG65zUf",
  "key4": "2PMbzaYm68P5sJub3791aJ4yzCmTzFgdrHiMyANcoNPUKip25RhYYDcAN4SK5vj1yTNiTXAFRGuacQXPwPYPEgDY",
  "key5": "4DyKvTRWXttiwZKGm8uZBTbXUwwB468wsbmBtmcs9vJturaQxwGos9r7Y3eWKpwcBSjvfnQ1hJHP236UhKP33paH",
  "key6": "22q27SiKCoid5wXuR3WDe75GM7ytJdFXbk9EyvPahLcAznUsHPTgYoBeGPPHbtnEFWGyudP1NZvginUqVhHDbZve",
  "key7": "34vWt8vbNGPGGqrosWHj8hN3rKXHxWBvgWS3VW7CTLBYyYrGbZCkWL99zj71t6QLw8chJ728WoojtQFq1hFr3Mc9",
  "key8": "5AtNt2erFRA8JKua1JaRvaDocE3oG7DUnU7kZ8woTdqi6RAeT6oNXbeY46gyEwCu1o23VxJ73V7nUCfyDgJuCbix",
  "key9": "AShPsVV5Z7ivxNMwwHbwW1NfGgd7HWbKrPTzyMr9TtAnGArE9fape3a3h9k3J3Lf9mvzu3YjAfHSh1wrrbb9U2p",
  "key10": "4N6LBHHBf3vDAnornMoq5V8SWz3rHLWcUMnGupUsBnoCuethKYA5iSj45mUhVu1JN7XwK5pU2a3gwL7USiVbB1kY",
  "key11": "4Z3ekbETeV5vfXZfq92BSaoAWJqy29FUwX8aZcZ6tBftRhZ5eyDHMojzhY6pr12T1iKoEwv9pnv8D5wuE6Awr2eu",
  "key12": "5TM1e8xGX5QsxPA6zVo8V2FmwHrXtMD3zGUcuhGE8sCZEUa2jeoGDcqfKX6oHw7BjqnwsEDxncsCUQarW5y9FfEv",
  "key13": "5DeovVmZA6WArKf5f2RsgndSSareDQrZ97rCjMxvxcPFvNiZhLp5BtftRSsheZzzZ8XPD2NoL84XYtvXfBaUjxFo",
  "key14": "3pNnJbgqFQCUNPzpenSTdSTgxCsDLr5nRxQ8ZG49wYjF7AUwnbMm3mjXnV56VySFZkAm1daPKEdLaLmjp58V223x",
  "key15": "4GR732SHhyjHGe99PaCYzSc7yYBAqe7Kgfehp4kyVdqs64MWLrLdTJ9qhFmnmddjg4VfApqxTHE36ShAPyKQLd1h",
  "key16": "5cPax9ZB5Ws9GNLBhu3v74tD7VdV6ZxN1TFyrcPaVk34m6tVPBLG7iizLp2cMDsnnbdGEA3SisuJ3fR5bfZzjPdG",
  "key17": "5fSTG3ixDEf1jVRQNywauuLShRQFuB32HRZF2zPp1voRhE7UFQd9rSPK5knwnJAJf29rukmbsSbmXZWtn2ANidV6",
  "key18": "4jxFad58xFUvo5uGiaWs4gtPEeJ2hMK5T2Wbj4S7N2YnQ7gqt81u33hRSWEaScwZtKZgesDx3uzkgcL9QZ93JzMX",
  "key19": "uyRkptHofuYQ8wVxGhiu8GD1iJRzaDGnSFbwxoJALHSNS93Qi4pRo2g29PPibf3EqTecXFyhFfu6P3dvy6Xcra6",
  "key20": "29zksQrjgz1sCfYwkusysoR3RxLYq1MRJQKrgwbMy3neZZX7ojfPDc8e2ufhGgPRsWF787P3jZ1k1uovs94E13Ue",
  "key21": "5SipLjumXweTF34mFs5iLbqy5fEEC63awi3jCsXEbfAsMfEYuBUCopHxCAUHegGGZqbf9pQR3fkJ7mBsohnGaqaS",
  "key22": "ZMkg4TNm79RH2irvrsfq2bEb2nrEoZeoGn3gJJv3REfv8PST2Xa3t1DYYEaBKGftP4Z7StWCxHPDoHsn32tkJbK",
  "key23": "2qugtgscehwNGVkXkxtCAG9HxivrHt95FLapNnscGNTDQZ11N9nTD6mHbBfDZgCHYms4e5Tv9dhR5yQ5WeDhkMBk",
  "key24": "qM7d93h83pnMqg6Mqj7HBYat5UwjEeo8zgBYV34Ev1wFQJ3RHFHSB76PmxKiMaL75Wkk1QutE1LCvmvuGivSN9w",
  "key25": "3VtcpswAe2is2QLm5FpiC8MPHzXbu2UHdt2i1iBTreNcAU5YrB62VsAECPiDYz65FYC3cnnpH1DMsGFLYgdtjyNM",
  "key26": "2kzy7ybd4n17v9KFJ9gQSC88fo5SMJM9FS6jZtid8EAZxwjKjB6tB85NLnYrnsMkp25zZYViJuChEmL9bA3FHxZb",
  "key27": "5DmhR4z9X783rQJqesTKPcz2wJnZtFaFjyBiveGWp1prJVcRqaga2yxTgGyKCS8jY2dX6BAQQxC3gk4bYeeEeSGB",
  "key28": "5Dq1gBReBbHVW8kSEQUUg9BzJT2gQwZrgZbjT8zV4oG58Ymnq2FQNSgFdoJeHxDRTG3UbT4gbNEPfa4CJpcCegc5",
  "key29": "46VqZyVBpEhahXna2xv4bmdDV2qQPSDkDzShB5JtHGyYLxp66iuTUqezHYZdcsJYbpcBfwpue4aDBaethTCLfUCA",
  "key30": "B8o62oPL8YU1ssozzFC3h5MbVNL2xWg8TgGLrHSccxgHDEVaYBDwoqToRb7xncNa7UWVxJFD7DFVxExooqe9fH2",
  "key31": "46t6xJ4qMJHznjGMwdHS3zhneiK9nGHdijv4t8k6i4bHn8mA8aBqJcQ8Assz4ta8jnj2TcvA7MAFuCKas3M7eD15",
  "key32": "rCuTHh4wMyMEVSoC7ik85ZYjKv1WNL9VkwYVQPah7dqTcLRKaZQiFaVxcSooWyYqg1AksEXecjwWa6Xdcp8X4jL",
  "key33": "4z9aZG1zEsCF9xAhJegtepsZwAXE8VHnKPjSgv6yZUgJBJqbAAo12H15sjH9NUtMsnPf39fPYwEuNiVJWfVvJFPr",
  "key34": "3zcuZeFywaaDWpSEXPCfoJ2BHnTyPpmjfBtcyfdzvATQYfrXk1rENofzFsAs6FhKEKVdw2e3LVsdV7V5fGgLG5Z8",
  "key35": "3Vrcx1kCNPPtcArnLS8kNxxb6NW2Y75Y3sxNzBQgKe53bSf7mtL4tjvt37DFXx3EYmnWw38Zsrc27K9TLv7kyYTC",
  "key36": "4yaavxyEXAgiK9Vs4Vp8WsvKV5sDzg1Zcd3SzUjud8Nxmnv6rNnENaSaYpqqGTqY7EXaexNi862EqUrUTStb3QD3",
  "key37": "3ywvMr6hAwzGETMf9SXWggFiC4veNFmooRf4s5PEoaTL513XSe93tzXawq33cUhvAoZYkZmEi2vPZf6F9a8a7oeg",
  "key38": "2BqVXqyjGQtbazQza2m876Ze4GBfsQeMBf5dXCd2JqEGmPpnw8VmEHNuPxNrsxgg24XqVymjaeH8M8KVFUimV8gj",
  "key39": "4kHHCcNAhbQ1iSG8X5a1VpJWNCHgAuZHCHKVShA5DPtKARLEjAocgzPxyzz9srQPb8J2mQRYcjDAAH3kE6462ozj",
  "key40": "39hqThrczL2iyrGBzXHeNBJj5C3wJSZakJMvqXVF16v7ebmbFxboUCETzs3Q4GsLqFRKj5uBMfRrGcruKMfdf31G",
  "key41": "1ZHr9GiYPfrWY3U9MwF3Lghbt2S3kVvC389R2kFLsiPXRyyUGZAqArUgUvTidWKSyVwuB3r9yVW6uGSMYD9q7Yd",
  "key42": "4FnJqdjAtCkay9QtgBCHSxTdkJPGFtoqLRb2NLVitQbVHzUd2mMxMyZkgLdtzdhizTq8v1ntGdDNHoeqQ2skk5nJ",
  "key43": "3rdyNimNmGP9AGgfSg3mPmT7c7gWYNirZYaqQFE7bgxYX6a2BZRrKQRfvJEqTKVrJ3myQkDLMDpUccsNvwzC9Yrh",
  "key44": "3bWBphiYRQvkYZZXVAu8YoMwz2fxih8nExcVgePBH5r9w5nDxAxv7bN718FfEkeBevBb3i8Fg4LwkGJuM9psngAf",
  "key45": "4DF3aq8VE8JbdEEmCp94PQDq6bckmsi2XkAjpbeMveoRFcNmUQELuoGW1WKEd9Y8ntXZ91dCikN3ouqnKsCS4JuX",
  "key46": "oThZoYagMC1NNRRKyAQZdKZtqUx7pFyqwzfXXZd2qZxmRiKfi7ui51BJTdYXNXfmn6EH1QTP8VSMapDBcsECSEk",
  "key47": "5vapKCo7AZ9DGF6yWP2HQ62Ec9CAz9aZJWkKYKTxki8ywW8T6xkvvu8JNuBH2qvJdRUyq3yiR4CMCvEj6P4VafAY",
  "key48": "2vkpgBb4RENF8Fmot2SbEktuTJ3UeXZcAsrep65jf9kWBnv32hab1uuU9kcqg9jQMv3GVJ9SWyKd2JGZaPFLWG6A"
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
