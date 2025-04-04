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
    "2qmeAoqUpuBB8hp3TcZH6pNw1BLvdspCZ4RQK8yvBib1C6SLGocQxJei4tvYfR1j8MBG5YUqAcTfqxaLgZpLkfdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jruFN3gjcxVYdvScJVDY7m2xqJo9fdHMD6GMiEW1sb9kuATmhwVCUFdcPPwVWah3DCHX2qErwBf2SEwpsDyEeNP",
  "key1": "3zwytBw1ENdRDLwWDcpyu4aQKcWQhUr7KeFXnUAbS3pUZmXfCj8iHqjVKqZTPXK8GMMqG5M2tNWcs6zWhXM3ToR9",
  "key2": "2jEn8zRM6X92ktg7W84Zi6XkXLZ8NnLDyxXVSNehGivofmNHPspRudWA7WcmmeDBtjRC4ziGEoMXWu6eBYctLJME",
  "key3": "4FnRsGiTwUHfeEPZERGLVwQRdw8fHxn4yX7zzDmWE5uL89fiwRfzE1PHdXJBo2XZcEUHzsJqZcFqTtnRroycixmw",
  "key4": "iUt2T7ChvQNzwYM8xHergsgqT1ooWtwNo6wzsdoRvdU8gPenp97kL2FJKVCeKxaJdWyExtb6CavztAQbCR2uEKv",
  "key5": "4Ug3JkW5RUgHiKAcuM1kTMUhuQgiRbYAw5YAj642H9snwQsrQhFryGud9554xpMgLKMKjkGav3z5wpojWRma8LB5",
  "key6": "2B7axuBR8zGjjwJC8coWo4DmLdt4CuFPGjqPiTuMjjV16ijoUHSumfaagjfV6SeiTeyyNSH13eky2KgGGKkNdFvz",
  "key7": "3MQZ3po9Wc2MoUs8xqDS6XgPnwoA48D8NfSrzsEdTEbL3ftpZhV2BtAAs6uis5KnoVvQ8xobi9qGCLhaiKmkt6xz",
  "key8": "3Q7593PWVNp14nFNpyMvYa6r1nBERwFAZuqqyuVSVEFqo46vZR9HNQsAeyQQd5sNLXQ7dkvc7Y47HFHi678oWqmP",
  "key9": "5Dd9fUvvkpTeCC5npMyMX2fiAeqR4X6p493aJ5qr8bEivKBM6GGL1h4CuwUxGt6Cvum7S8FbBTWjwYrhofVcENsG",
  "key10": "4UhU9MrmYkMfGMHx3xMhyncXmfBjXVYRqT48hgkJdHss8UcWRjEeo3qF3aBMpHzMfE8KpeZ6F9CsDxdmp4oheCJb",
  "key11": "3jqxwEP9jqzwxcSWmMo51MU8UhCmSQMKYAUCnCC9kDr7gY5vUTHb1eG3zahYRis1eH6Z5zPeGtugHmKTzzUpuipj",
  "key12": "4dt6QLEJjYgxoziXabkXWPZTSri41ufEXwwgHrbyWP5USjNWpCEqsRMo3SVtgS2yXJhvzVKvvzjxJVYRZBarVZKB",
  "key13": "3oeZq7Gbb2qoqBUpgDjZD74edSVtNMN2voPa7E1PbDUjbmdm1pERag4ppDoKX3bQDYRBLfPRkEdumFNZzeBmSgmo",
  "key14": "42xZAr95pB5EtbfLrGPNaVVYhcSVpELpCK1uJFWcxWVVQVDnwgjba3gMi5QKe2aFNUTf4oDtmZtU4MZiaZ2Phe9c",
  "key15": "3gNwUeE76WH4nQxkEU5NagGaEp9nUnZnAU7bEgHGZu7U9KbsBQj36Q9EQLE5CdZoDG4SoT29781xpE35LyfH4kHJ",
  "key16": "4ggDg1rhtgJxeLypsdHgegB2fdrN2bT7in9f6zyFSokf716AsiRkTbnCENyNZRZN7S6gSFjFWrwgAyk2CwvbEbkY",
  "key17": "3qdQQ5bx4bjdam6R9ZWAYJZv62JpgSisusgpc4Urq8ufLMuo7XUdbVoP8DjSkERLUEND3p9TTTUknSuNXPmXYw43",
  "key18": "5CTzY1QZJs42wwg39Qd4H2WLDAXYNFpPBG8fKGRLqgRGEvU7yz7dWuutFTVrpV7LinnWxrzR9iDZyfYqKNF1kw9q",
  "key19": "4uvw6vPvNSrDig3EJrx9EKGYxTHaRpK2g4dSBSsQWxSe6ZccoB1s5iLhzWZ4Pzx4C4riU3Vbyyaz6SiwbhGaBM2b",
  "key20": "4YMmQpFStCppSMmLRWWTqJ3SFKHqzJ8yvi4rqVuoKeENsr9J8W44B2XxT5Ba7sNLjhSLufVysyvQQs1MYJFGLzGf",
  "key21": "JBnog5yGsor2PbTJ2iatR19TYi7j6DoTvm5hzTmx1Rg2ofrb9xaoQAvoEVRHMLQTBjYKaprwoCdeQrzJyeTAuEw",
  "key22": "42FSAr7hkE4s9GHig5HSGarKRV8aVhEWxevRZE4GDnecrmvhzHA2H4D4zzcjBMJStNuK9LhLqPmaJP5NvkGekVFq",
  "key23": "39L1ezv1Roj4G2swpTcyE3oP9AZ7bWLvNKadmb57x68sphqjm2dkqa8wTePNwXdhVYuPTUomQAsY4GgKGcH7U7TE",
  "key24": "3G5MJQFn8ztnNdUThE1Gku3g7SBD6XF91yyJzensU5HPv1aKoAuXYfmJq4Q8d9EZaGxVAgU73QWYd6C9W97rmbhv",
  "key25": "3TqcoZMdM31LvrE7wzTgrbayExhVKF7rD4MEXsnPdjeDspVkRakzGweSzyDMLGYXvdsEuZPNiMvtAjWmMthgLcsw",
  "key26": "4mN8BvJLp71ff1nzD3JfLWz2P17AXSpH8tZyBV83UdqmqgBw1VNf6K25KCZFxDfqgVBQfoR4fNXcHDbEnp8ranRR"
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
