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
    "39w2yUzvoRmT5JPNcks7AnU8zWPwxkUBCaMjMRhe5ACzhztjpZN9ycz8Hj3yqotjV2TVLNHJpo6g3oJ93zuQyTU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v1y7QYCqaUZi1ppPBs6U1HJJF5no1ukX8ihhXddJVRCgFq2Tv8BxYrn9phXZc2cBYZVYYszmB3rfqEmYUE5rvqu",
  "key1": "5e4zTJtzNpsvdKzFV1pngJtVarYWrTt4dqfVmeAuZL6SLAwusSfCWXZeYQcxHf2orqsJnG1XT275GS2h221u17ts",
  "key2": "2etCkP87jyd8jcAjrRgpqoAemJyfy7nvpAL4TZN9SfKeZf6QALHbxmxvgiHNgLkSTeiWCZjtTimbPcqNqASEGvRz",
  "key3": "2oqMYy29K5jE8KGkaXa5bJbXyCyExdXPUGeEiaV1mhdsYhm9qHjhKyvbWK8hBALjJzJmfNaxbtBaKnmF9avhU69B",
  "key4": "CEYMpDnr7Cu6BHm8Fog1sj3MCBPYRhBfiNUP5AXyz71h2qNyh9Y6czNSbuEWm1jqurAESQAkDj7kvWgbFYRJros",
  "key5": "3b2ACfP4NUfXrbUKf6EwNkcHGFue1sZgYnCB9Hd1j26XqWNaUnX7x78sZF8fWFneapo1FxwVD5sSs4JYcgtvkSuS",
  "key6": "4ant5vyiiDy9DZ2TWudayFQHvaGcgpJmv57Xq9gdr8L4aGJjVvjM8sAGoqjrHm6YhoUsWivr3U57yUQDWmYdAbsB",
  "key7": "2jVC2RBkMhPMQ8EQf5U4Z9HACusChh7bMgzveQRFZYNctTHRXv4eZq5afrun26YzPPkJ8bE24S729CZPNoWtuAaa",
  "key8": "3WEPU7FKAx1wv2vRrT1kwdVsRQbKMk4JWGyFwzbVWczW8j7pMup58DAgQySixthgPfiKoAC2NuGKvyQypnjJ9juo",
  "key9": "5BFgHFVP83huarvzvY3dBDw6QXyA1VTuNhgfMgUrMq7fAcwmMnxtKVeAB8evKqBsyLHniguH1xLoYEaDJRjL4Lje",
  "key10": "2tP4Xh7ZjDvtmNesZuSYYdrznpf2KP4KwRwtCkiPLExTZBT2CMGefZ6jBg2EUu74WSrzkGnod5mi9BM7dpKs69vR",
  "key11": "LyNRjgbMfNdx8DtUALDiVcG1fWgJtGr4hE2HTTjjBcjcKwcQ92NpNKWfXPMHq5QXmgAwQnjykFYCMq12ZC5Ndqq",
  "key12": "5LxpJinYAMt3BgtkoAsaydQnsXmYwtcNQkeAvhf3mNmWD5xKxXkytEHUvBak3zQBUs3yS9cuKkDozg22Jp8MxhUP",
  "key13": "Z8cf5RPxv5XyehvhAe4STpFLTKTn1oH5euKQDV1653aUeeeWcV3Bsn3rZ6GGTaaoEkK4dxG3XrjBcLeZ1cQ1ZML",
  "key14": "sa9LHHa2nrbnYKrfAjrnHQAoEniRvRpZe4Jodh3kYtvqpceCYh77iCysr1Qrnz4p4RiufAnaqfQiqT9JyiPba9r",
  "key15": "4xgkB7pVLiXTbwEwTePZAfW6VKUn6SeiwQfwK6oNJH8hCfj5BsjKq8k4LYXkXaq46ExVF8eagpLnTJir1ipM1BJ",
  "key16": "35BvHBwa6QuS9Dn4zNbPDLAkDQzPt8YKS8mZk4WcyYRQds2UUgL5QdakUFTjKY7UD7ADQX9cpURyP2PDqshBWEoc",
  "key17": "4WTe2M5JyFeqAHNRctRMaJdpQn2pe7v9AHAikyGmZPwYtevD6RyFqsBgSku6UZbhVs53fmwE68V72Jrskn81GzXr",
  "key18": "2dJ9zZw7QoqFZbuVFKCSp3uiQ82yASrgLKGx1XUpVMGgFTPKcjue7idNxYF2Sf9LjJjnTM6cLeKhDXRyBeYfpqmH",
  "key19": "5ntoKZbgGgoDwLfi4cdxhEscZcfAj9Agi1gPBDqofhLKoTpuCyS1HrBYck3Eq7qzt64Cfh2o9eHRneFUc2JBAjak",
  "key20": "2ejHcjBvuGqgpZJXSVH9cZDzrDZACpwWBwKUw8TxxyYJ7MbnTyhfr1MhMfMLZrmAc2SBVfbJgChCU1ozTyW8UZaA",
  "key21": "3vyux5xjQCZtuRnaPJKrzRRtmdncush2pAsaeipTtgmj1XKGbEb66UGZQTJjnaiTzzuJsYHD5NifozDZcp9hw7bx",
  "key22": "4ZcDtA7knkXcbZnucYHAuqWuwiDro2ETWTQTxLzMA6NaXdgWkwJm5TZc568Trjfu86TaDHscK7UrxcGzLzLyxz4d",
  "key23": "38WNpi7mhbspNtQDRScdUiKrm6chVSeYEd9VFdh3X35jqPY6XfW1rp32WzvJAeCnU5qw3ZczMFHiAYxEz7w5dtie",
  "key24": "2iYBcAXBkKyUKVhxpa5YVHv34Qv5qnz7kwJ3vevSLJuCMr6JAh9dzCa9qpJBeCDjJAfX6sJXwhHdqrn2voMyrAcQ",
  "key25": "g7sGcdP1apX21Kv8kr9dCLxJu6m2qS98rRzupATq8mThHD2o5UPjhn769vhmhXtEJR5AAvoc2Eyb6G65YeLNURC",
  "key26": "4HLcYhfEZaQ61ZbAGf7VMba71UyZxKuQL25BjZTMH8HxevWXzcBJ7gCfg5g4xDoyDicFfj9Bn8m7zrMYfecHY3Eb",
  "key27": "41cAzLZGJaP6oh1B3PTfHuFWW8i3WdE3qo7UgfUyxNy7KJEhvVbZT35uVaZAsXJuYD5ZCFT4SmBqwrg7SHC729zF",
  "key28": "3Wei7ExqEfYjPcosu8vnhoXD6xY9KbnwtEjb4huKr2Mt1MQ2GUJPxxs9ABAX7CCWG4rLhByKafKMa1DUr2uZ3GYS",
  "key29": "5YCF59eD3VzNi1KRSyVc9tVJwGgkxTTQVvCSUW4pPe5UMZrPHVtXc4HFAn6Qeywy6v8nwDUQmXYoDZzdyyoTkPjx"
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
