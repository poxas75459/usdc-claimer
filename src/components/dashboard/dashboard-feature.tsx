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
    "2AMj9CQfeLzpoZsVh23UndLuzSrxMjk6qAFKgh3ENpNTkatebu83agC6S3kVieUjeFeRNaNQVAwmHAX2B2H9CFry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oXH9Fvt7qo3t7WdWmy8tLPwFvACSrfzBe8wjSz5hs5QmTZmx57inUWrpaUKeoTBBE45nCXkPrQKLN6tj5f65cC3",
  "key1": "3175NA62RYxNkdyEACXCYzqdSofWcKeSx6ndeFr6VyA67VnCdKu5MRrtuw5KeKpA9F4YCsNnmuNFJ1xtHWZvbMRP",
  "key2": "5hR6eWuXVjXjLoc9pZ6xVSk2k17oc7KJ4RjKpDRuhY3mVm4WHX9ZwEa73ffHz9uyLaofrX5juJf9u8RNKHi8Apa",
  "key3": "mPG6VNxodbJ3uxT5wH7KJ6RRkS1f5kpc1XNyouiSctZ2sQTKErqsZMqGVj8thtNzveqmCsAWBvAiaZf6TnZUwDe",
  "key4": "3Etc27xcpQpw4wJ2N7LDc3thLDhTvT58ZJer1K6HUXcvCgGdqyYfvoQkE71JdCmo44DaVcnYe2nCVdnJP3mxyTNG",
  "key5": "33JAD8NXBsnxRiaEX1JWfcU3BmZN7uYjdC8SP7TqaY7tAHYNicHiabxUnTDvCw6DWX3ithbiGJxXBT2pc1a9zWue",
  "key6": "4sDfqzXd7gkGLVvjoJZWimmkUG7BbdeUo8h4S6Hxf4GzA2cxg7qzGKtHTiw3Wsg2BwB3kffSmsGYSBd5dcB2aNsu",
  "key7": "2sCRpCRuJV2q5WGC9DB8aEESX5NRpcbu3CbNomhV2cR4g5RDnrV4E2cSHTKuNmeXJ8uiFqQSjUmZzF1pHFQkFfdj",
  "key8": "5ndz4YfpaHpUNGZps8FVGg7voDZwAH7DG6Mx7DKiXTzb8TRSH2n8DwsSqNbLoRwKhsjPqb4L5MHBtxGpCKWGc3pE",
  "key9": "7RgSVZwVDoPToL9dL3L9nnPYPwU9L3H8g6GwbJKr3bgiCF7haGCTgiASXCBGayEwprzyW9BBNkEU75Xup38HWbS",
  "key10": "wvjHmWyS3ctCLoucH94MaeJiww73wtWcMf2b5C8dsPDKJdYPAhjWQ6u7AEZGGnW9jB8PYKit34Vg6ChosxvFtUB",
  "key11": "3s9kpMcZNrKi66cmbU4boWogbneH8GVjLyQw6c1WNCrHPUtbdbE3WwVKWLWTAu7rfumHvu4nds9kQsWHXh8RY4uR",
  "key12": "3Nk8ZtYZJYtdk8mZPNw923p9sB9HAPG4NjBSJKMEEayk8RVNNgkMNmQjXEb53e3dsS3h8GfbpYFQxYpAJgQLTgfR",
  "key13": "2FgTa399yWoMvX8j4aQSVjCNk9iWQLCDBrZzfnCDFnuZXxdkSrPaKJeEdAKFVWwsUxqFrN5FqdUS7ZYHZZr6U2ML",
  "key14": "5rMCCqZHCzvZk5VBJHrU8rZFh1GSgvgCdacSzjmSWjXRyi3g7FWNTibYnn9C5PTvRuSPMoydQioxuD4qnGonhJkU",
  "key15": "M5xxBiyf8ReSVimzVJBDW8qXP5KYf4i1JnrwwE4FBkb6iaEPJA9hQf3VfKbsNiwZyBcwruqEks8x25bSn73kKd9",
  "key16": "3zkA9eaZzhHkUFUbTUZ5jek8VXCbC6x7cTxmjw6tn6nFg6JjtWrB5J1pw6cVRYNBwELihLNrM8ycxNMN2cuc82SF",
  "key17": "3jFVUUGiDUT6NfVXrr5VrhueXm14igC4H2gpG5kkL55RBquaRKaafTs3ovc7zJXaNLEiqmmNeSXpuoX6oYRVg2Fw",
  "key18": "HsinQtF9jH3kdZ15Rs3vkxM6LZTrnhex3ptLN8DLPC83sEbU4oAsGsk1jtS1ubkAa92wNbzebLamc2n2gqyWff7",
  "key19": "T4TLB28KANwdcQEuXsMejXDKahegznshKCy1CXecg8bCP84Z2rabadM4ao8i1eQYpS6dJTkpeUoEx1DZXvoZPCY",
  "key20": "nXXq13iaKG9kijdexv6Q8Db8YwNQkYp7o9argk2FS4A5UNBHodgFLuFPS756u4ubBWdaneb9SCSawkHjdjipcFU",
  "key21": "ggtNJRdtkXP1ggafbjQ1TKCK3R9uWCMPKXR9SYbmD3zhLVR5ztRQRN6YhTHsrHMiyRGRetervF8C8zebjdjDDDy",
  "key22": "3uPcdb7gCwzKKpLwdt3LVUR4H6JgWsou8mDtrZ3EJJ8g9dJ8xEyqPyy1zQDnMgTzwMLHVSsBAqDdndxzbMzzb1og",
  "key23": "ir4TRGxAwfzssqp5e5MwPhvwxKjcKJhQSy7FW9Jz5VXNPJwVcRty6rkZShVW7BogpdTBR8RVj6LqcMdjYCYJfv7",
  "key24": "5xr87LuiCdFq93r6DxDCvhKp73Rnoioojj9HbWZCycFFY1KBNS1D1Bi4HZAiDmVji6hB88Hfc1UaMEa5LhEqyv2M",
  "key25": "5kDGzZMFvxU4MoaFXG7pnBDWv5rCDAdEhXxG52t4yRn4Gtaa5AZoaSoXKTZqHNUhiH5DXpBi4Q1RRbjMoK4qQgYN",
  "key26": "3v1gqkwNPwy7s2ip7R319MstVpwKDJ5UdBPSnoWTmaXGPcuyXbgD9fycv6GVA1qQM26uYZXr47QNE74NWMSaT8j2",
  "key27": "4jpPNwPiTUD6QdgS71urfM9pzNyFwQmCzcUaqK1R5MuP8kqCht7RZMUEK325DVoi6rDmmxUi2aPm1r11WfaCLRCg",
  "key28": "4tRvmJgTXJQod3CwEokmFwMmHFVrumwKsjv4QiCnqs3Wd1hVsRLpcdSUXLZef64Qub2dbUkXgSU38H5wiPHUFLye",
  "key29": "LZReg2PXbzvxpwN6MSyk5pVhJL1pSrXDLMeVZQ5ZpEsgoY5DY8sJnKJxigSx3WC3pbnZoSJp9ic4D3xwdCwhMs5",
  "key30": "LZhZFwVdcRnPBtaLcC63jRGLzYhJwULhqh6unWA2eYRWwAp6R99eNxZHBxhKvcAqXvwkJB5xk8YMYhnGmxLxVB2",
  "key31": "2dLVcyNf4h4ZzFgT1qDyyMgs7sxPMXcA5wYwMcjuGPaDAns8QJWQbkdGDAkszbzBTRDZ8dXdTRUHPfd6EKE74i9R",
  "key32": "2AmAxUxgXimTbDtmCrxWzYL7AtYn3u7JCwn6wt1w875L76mnaekxnGRmCmenZbrV6jfDMkKUdnxxMQQsh2s7Y5Nu",
  "key33": "DRfkAMaWwCsPoZdaHiXCkgk5PVQ1VEoc1XSCnwQ1SewMpNPDovShMBp2XYjzs69MnJzuEyqkZD5kf2S1RRcJjbw",
  "key34": "5QuYV8P31A49iHadpPcvVrRK76gErFvKiFNtgURNuTaMV4U3V5sxne7PNamE6ChvhBmgpkbzwfcf2qoTpMeJ3H9V",
  "key35": "5ezNE2m6eJNrnTcFAKmWPPy4LkrGEreTnqfvE5zYCFBNoeR8scFAZBnvZdfFZuRVk8wACvuiaPzQu6BbKysv45MZ",
  "key36": "qrMqj3MpN5baMncvbJkhuPTDKpWPQkyXbpNuszPycZXKN4iPRGKjiqzEpi5QbTpDeHYWxsLUtYjtPpA2UCDJER5",
  "key37": "3GVPiDRe6LcriywH34CLJkcxSQdEJLCYggFANPng5PxEBBGzAXwV9F2A5jWYmthrif8YDrzaqzFhDb6dvdNUXXx2",
  "key38": "2w3jsvxGg5FK7cSXLzLqvVzcxeAMx8aAEG2cx86RZMVA1NSJ8Ef9tx4uidUEsxPxNH4htqreyX7PVWwiRfmHSEEs",
  "key39": "b9xFY3ADnJzn6y6EZ1y96bu73BQP5RQkWXTRLLQug6mg3YDRnaTuge8LNgz19zR8vSvkbuesnDNs96Rd4knHB1W",
  "key40": "3n2ZNYiUF1S2d5bJ2m34CbM32t2uowtHH6MqhzaA73adm6a9LygsfyuF6DEWeKevX8KUd8S8MtQco2HDRUuczbWC",
  "key41": "S5vQPUvdFhgbDHj1H9ok6hnNu8hvPBhCJ1aBiUCfNjoj3ZueENJgyV8TXsArcUv6qiyohQqLxUFWy9FgmAAryXW",
  "key42": "zwgb7opbR3ToduFesd47ncemzZSKcvGSvMPYpHKkR7ccMmeG39EixWUmZExwxH3BDqxtFYwZFmLinzCayoTs6Q4",
  "key43": "574mKshfKsjfJ6V7zSdvq5erSy7H63wjXTH59S7AG8vTQxXxFKcxFtVK9rSyQv6k2QDWsqNxWG1awWVf8BeWpe2e",
  "key44": "4cbFdPzNRuuTJhfrT3uk2qBAhotX5r4XHHuUazK3fGTPRv2SiTkPfrY1Q8TPLTJWBej1FMt9p6baz2TRdy9bBnUf"
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
