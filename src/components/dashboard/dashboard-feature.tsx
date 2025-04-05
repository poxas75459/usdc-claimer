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
    "4rYPQuUQgupeKq99sRRqcdpjiLgEcW5y3UezhkRUyvGrmo7jMp243rQjuA1FC9SogihLZ81qVhTvGguUWNZzh9Gx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wrBPjsxni2o3sEZewLq6LEAKR1gMhdREjjjrU7MGuNJSQfjX29wVQns41gwqaqadag7RCR8dfJBsGFDtVAqpxkv",
  "key1": "2TBTtUSbGQQM2iwUoVPYN6uiEwnstgA8sNChkMCQHjFCtmhjjEULYnxkRwCTDTkSW2mZ5Fu72WNhgHmLHsmRdJ38",
  "key2": "5pv8ofm7UJDt9grXbjVrRuRQhhSzJien1oRqtLAmaQoF6gVnqBbBUCB5gYrqMQ7Jpf4oxyRb1HtG6favqbx7bhxz",
  "key3": "5HcKgKD6rLL35G9xqbd9kad8GDjcHgELLy78M1Z7L1anZSbwUY5YVcbEsftjM9HFgwvbBniRa3hCkd7GRueW9zf7",
  "key4": "BKg6o81vn3GJ8CxrXZb9tLoDAVvYndjDiMHVxPcy73KHrbwmqvsWYWceCS17fMASpUMHsCm1GLSqbPP88aHCbFL",
  "key5": "31v61PbP89k7XeTuPPwWnxhdxmh4y6DrPzo3HkgYoRicqZRk1z9ms97Hz5eayz9kn2xHuL3BVSCwJuFU6Jpz5Rjc",
  "key6": "4owuqmPb9VyzhKou5Eb1uVgFZPH5kt6RUi3RjFQw5ULgkCfuqfKgJ7XUtx4fE6vVoK4TNepnfS2vCPaPfEr5pyHm",
  "key7": "2MLk7piYBfYES8pLq3gtoL2XGRM9ukrPWCug6sg9NWAq4jzb1hStjfZDuWsFoMsgKkddFJrbTGvxcNEhu72JqJ9w",
  "key8": "5FYwU9NwbkXGdfeyv3Vw2sdbzJ11xtPkZSmB95oQVnDjky3zSKsTMCGWzaDLKy1af1yvw2Jre3hiouGK3soEuu4A",
  "key9": "Qz4cLoTqM7Wi1y1rJo4WEFgasddcJiX1rCRzv1SYznHaW9EG37i8J8xQ7SZ2ggX2cgULANAWy3cuwuXFZqFwJNQ",
  "key10": "4yZgcviGuBswZnirWu4HyeFu2tsT4mz9mv1Qoebi4Vym7uPf89FsqsVcBPbsumDzApGye36KZwnqVZ6cmBGXo8f3",
  "key11": "2TEzkuX6RaWXN1RYQxT2degPe7kCmm4sgtdsoWE2ma9SJLMFBmMkLi7E2SwMAR9B1mcikNye29BV435QYbL8NFT8",
  "key12": "2NUfMvjp4VpXFFakMqPN1ntYknfXDJJhxR56b33HybLDUL58Wp15DpcufLTNYzgtqELoHefSVkgSQ3iJeFsg6V4h",
  "key13": "47UTZhekpMdKJxVH48osJSyT352RBNrVcPEKzXQ44Aj42EdNxYmAbebGbvm3vapwbydLdoWMTrhAsynTYSbQzjiz",
  "key14": "4UBjjE8DF1jCi9xMK6GcPfqgWZnFv7pZK8TZWy49FAyfxREDtAQAnBXcDnmtZ9ai1i1q1c46xDAnWEC4Q1ATjso7",
  "key15": "2UGrFuhttbHkstu4LaMfV8jSHtdUyXMeLu992kduiLC46QBaXwAEyJzWBwAHkfqZKLXYYKkmCdNErMKaAdPG8Uje",
  "key16": "4gZK9vYu17dfWAHVKncASF7gasmXEPEkMTcQqQGY3NzDhdKdMxfzn8qoFGnii4P25N9t4TnJZF6JDj92TJDdYQ8g",
  "key17": "3CvMv5VhHix255sG6R2L5nUaVutoG4WZwodkB2ntgvoJT6zX3QDgB435eZbyjwgESo1NKdX8JpCKbqdRUZkBVAEP",
  "key18": "61Mh5DaFBTLcUCucggLfYTX3gmTE5d2Yabn7Ffp63TA8V9yTTEeBGaXidVrLXDGNxrKaxj9pV43jocibAhvjWcNA",
  "key19": "4vRJL4comEbGT7LSYfGt5hhZffKWsQnLxGvEVHQKxAnrTJF4s5PvzXdtjjZT8s5eWAZnFoGZZ4GoxPEKA8Ub9ovZ",
  "key20": "3pGLKjCmgNx7ay8XCLweT4FZrmgV3hPdneWfwbytYzSnwQKwCoeNGFNWkDZbr8hgaRPjpddj2KRP9rbQAbfHNiqZ",
  "key21": "5aQRuuo8GtoM98hXs3WxpMFE5FtAnGLyGBDiign6ZZUnykterXd16mdkjGgUY2L3L3QLmdHLHEyTbFevaTnBo74M",
  "key22": "bpPTburnXxTvdsogFCLHmqLHZ4WtasQKwxdUVjkBvKG5h9GX4Rg7idnDauhaFY5TipN9GgrgJkL7rRmTcitBZtu",
  "key23": "MUu7rvyxMf2XqYShCCaHn9Z1RSwfyNZpbsxgPo9H726hnzHn71sevAXjSM7mkToABkzy7zBWKhENjaTrbLCeq75",
  "key24": "64QupfzJ2uoRLgZYhTWrU8pBMeApKugg7rVEM8ezJuD15ifEBi6wUqa6ixQbibRgp79EuUm7PgVs67KB5Pcc2Thr",
  "key25": "2JWgAchj7nYo3g9F9cGZrVD55JuEYAdnnQbRgw45r2YbYZDvWrRvuiuo2N9Rc3iiP9C2MXig8xB1tfsXaKjhkCWN",
  "key26": "3voeDZCi2cqNZSG7kN3zRS1SAQHseztty4GM7JnU2NtqmkJUD5DvDtuJQn1XZiiwGghzHnHMYL4vLCnooxF6Jwzr",
  "key27": "3VYH5k1L7W6aSMtPXsXKjPwXyZ8ows9bbe8PMNvxcpy4fGbzJ3WAuFFXwttUBX9bwjWzuuLPQASQyCrUnUfVSPLX",
  "key28": "3EbLbQjfn3C8vfhfhUL4pHvKwSHxuC3DzUEVzW4bE2w1c7TiB6jVnhKw5Sc3zfr4Tq2FN4jWQ6BY5H7TkLTpTn3A",
  "key29": "4fGaerX3eUdAcq7EQAe9B4brKqFdDHvtMCAdEMjZELLugxFJpnYCDWu7mc3UaQXFibJvpDjGn1SSTo8qk5mrnVP7",
  "key30": "5oVpwRLGEhwHCNLpPQvMj13p3W9t4dsDQWEQUmaPE6oeGX2xqcNkRBJQ1cB8m6xmeVUDHNDgyqhwNg2N38MDXHcU",
  "key31": "4v23QKEmYXiomWooQztJyHP1LRU655DcKLidZ1wsHvQFaDbBnkURvhjmGepD1EBdqoQnRnLfAHWv7AQsFkRz3Adb",
  "key32": "BVjXkhrmzbvsA7dpeTRHvoKiyJfTdvedR32BKjiRaY2UuMjSz3rwUJbPu6m66oQ1vbsWnLvH4EjmiYPGXQ1BNhB",
  "key33": "5E9YThgehvYFoUGTWputYe5Xmf8DXHqkBXK9f3hc9oiCU5hgic8FnvaUVqdBSGiDD5e3842P2X5BitGW1EM3ocxf"
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
