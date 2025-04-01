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
    "49HZ7vzvmCVjtvbyTE8EkEvs81fF73CzTRvA7VbB4Y6tpqqwZY13qTnK2XKWABRz8ntCkKzsebuXrJv96sYfwQcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C31z5Z4TfLFh1orAcWQfsWDgGHnxCNP3zJK69eh26xw7DsyewFSQ3PrHHm9Q6exrTMjwqmwPkrp8aSEmMRjmmWx",
  "key1": "5H3qLTn9s96anX2j6wuAJwp1hWSpXKsqcg1MTNfSGkva9LVkunQ5jT2ZvTJezHoW2PvNFcpfVYmfTZLT2L6nT4Gw",
  "key2": "2Ac1RuFmVJe9ByR6E8SkKVoBrzEZNGk1PtSq5J2TmZMWtVqEcEQWb16QEFLF3itVnYA5qzkEXRAd5vj6wqPEP7op",
  "key3": "39dnbLUWP5ppWYCXRmrYQpa7NkzpBWMYTBMJTAUXXWvpKCCPNUd2cjVUzpmaXd5JNB18QQn2KR2wjzmakTFpZzYs",
  "key4": "3BaPAQA1pgTRXb7SHuybp5JfQZqBxdxC677kQcJezpf2VVDCNzL9NexjNjTnr2fZVpU1r3c6KvVU6KTpK8zpqJXL",
  "key5": "5mtMDCzKntB6qDTHVrjg2bUSFK31KrXroEntyXXcMPGJ7nW4XG5XBZE95YqdaRv737A7JRyTNaAnngmKoqBBLG8Q",
  "key6": "28bAYRW3b5ceCkR1n3bK4pZxfdpSaKbaSUqud5itSkGLdd8bnejLFtBnzYWBTFnMuPFxmsTEB5QNgDKAk4ixVqre",
  "key7": "42gb5xhfbXMJY9WrRMQAVKKGdny4xf6wcuBgY9JXv2jSSvoa9NvsWsegqZbDG46TNYzM1uGHcELsCnxeT2zVBF7m",
  "key8": "5ohQnUinS6mwpriwxCsKLPLeED33GAd7XTQYXNK7YFv4H9YF7iLWLgCCAvUdjrQ63JTFqnPL8sq9LvMr1xBfH3m1",
  "key9": "4BgJwyji8eBMxFUmc3rrmxdx82wprdxrNhV3gKVk2Xa5oD1UfVWPuMe8p12YvWowEJgpuzAeuUcsEar7tJh1QQKM",
  "key10": "2hixDDYee1upBA7yNo2sU6uNg2r5EVmHmVhJqKQAgHZcB5P87dgcnyvs92gf4d5zuffkWz3ccobJgEVokdRcQz6k",
  "key11": "3DBcmpcZ5hRPkew2LcGuQhgEsMgkgQE9C5ctGZGTA5PYo4ga937bmLR6vuDKixpAaBcyCzLocyi1gqZdMxJNZgrN",
  "key12": "FBK2GJP9kCHg4rSaYXcwXQ83VYSm3p3PzZERfWdUp26xDN3y5x7Tjy93kAUom4JzEu5wJbyx6srcdfkR1CspgpX",
  "key13": "4tpbvzN5mq3L2dapEXbZzKUKPniYdLwvducMtrQwpt8GkjgSGVy4fLbvSrvPFbFDpL2qg5tYPd4KQyypwbj5caww",
  "key14": "4igT8X8pPGY5XLcG1C4C3vbxtm7eEJTCRnezM5VrXD1yW644Y8jULyrN36Q8bAcAHzF1jhj92s7U2YcM9tL54SXs",
  "key15": "4A7M8ESkr8FPqpN1qkAHoHCccjpkjvTjKA1vP2aMHQMUTWmNGJBJ6o7GoosnnazfiC8aWn2mqV96qZEN4Ps5sYPx",
  "key16": "2oD5o2ogdxH9AUf4npuNBHais8K1D2NU1G5Vcmn8e5UbSsyu2Fgx3VzJFVT465PYfUEdwokDWEw4qyKBCuQNcXox",
  "key17": "2u3HtG185hg5Brubkfnj22iHc4RvXdT1CxFMCNLZnSVsgbpt57WG8HeJB1ZbaJ8m43mipfmueNMmYEaH5fUPdt2t",
  "key18": "2GdGWr8v4LrFYgSwPPYDCdiHcdSMutf2ZYPsNGbgfcHNkgj3EGhhkFmNyiSkMEsEqGgPVEPwxGg62aM1vivHJYmf",
  "key19": "4yCrxRezUQrMTfXff4NgR11acDqApmzsg6G2owHcua8WGngbAYQwt24go1AQU8CMPCS4gBnb8UV2CaaWcdNvSj5G",
  "key20": "27zTQvFmSLpy58xs6bjbpBiDqG3h7WY5gD7Dq2FcHeJtYCAYPXKwixLERv8J9dpHXnnJj5UgfsKKD89bx71WBBnU",
  "key21": "3G7LJ52FUmuPqn6AcPxKyU5CmcB1C4sCNHZmUkCaZHgVcvLjBeTsKutMgxxS5iUdSDjKfBnftaJyEC5wnbwBRMuJ",
  "key22": "4D1eGqFpjhwuVdmj1yLMNns9VoxsaMoBUoTtnW1arEuSfGbhxfeawEzFjhE1ehkUzJKQsm99hbxqEurYM5zPQiCF",
  "key23": "4yKMeGMbESqyPwVo5DapRvq7t5mVd8TeJ6p7PvtgD4XL6V1ELDKmFP2zvQtppb4LAKk9wq5iYug9Tnwq3LtKMLbo",
  "key24": "29PQjfY11cxu1fTefeVEgD7Vfs5vX5biLXjYsNyVdrhmhiRPaJogvNapUsGagdntDUv1KdoBt5kAzkYibTExfmwK",
  "key25": "3QJ9jHVugoYuLfZkSELVyb3nwsGrUEjfWtR6AFzLvyD5MbAgdkg1xu7SthEkoCq41DtW61jZmn8JD13v4ykeyXQ6",
  "key26": "28fA33FV5dh3XSrhGnfHsxHnmy6xi23e8QD7PyPH3swUpdYHnMeXYBucfThS9no6q4jk1sGxeXBUtbaMDcnpYHSa",
  "key27": "3raUhRnHpvfWCjTFTh3pvQPnw69F6caJ11bt2vmhFbampfvN8Ez86XdPjLVWkphkiwz3LHH3iSh9C2uS2kN1YXXn",
  "key28": "66v1KZJc8pfp9gdHYRiDjnf2R3GstWfNSF7XjbEsBwVQ84pzrUmZnuEwYqhKQ6BQfjrNt55vutQQkvswpTXHjRg3",
  "key29": "2Bwbym44tqiCzkjhWSiGEqjGbi2pDyfLMBpu1xsLAF7fhCMUvukAHq8yZ5dEWSALKvd3gPp24c2P1gbdNKvbXhCS",
  "key30": "5uSMJzx8oWQmJVhHrX3awpZv8cMmEg8K7woBBjRWBRyDZiLCJQCoUQfqciHP9Ujh96CR2NF8H93AoF89MbYse4ve",
  "key31": "4xAyTPw6eRn53WqTdz4dQnDJEhYUpQhYt68nUKCtrgLDFrkJUSidw9se71qqH9ySnFxM3k6SFUBgfWZntMy4Vre2",
  "key32": "UA9kVDNu763833oPQUh1UihcaLRJYbfaQmcYf4ZcS9WAFRFoKqeeyEUAuD9HZHMQ8iFrgnfpozLNTm6AgnaKRDw",
  "key33": "nDTvW8BsyAuWWmwufFbNvouD2Lf3yDLTwjKgmherHC8fD26MbCz7Mvrow9jqBPzyaP4uwwb4moM3EnnhAkphMFf",
  "key34": "rEF7vUL2VDvZcNj3N9qqZvhkojMKBC8A31Mnz3sqCDg1kHy96D4BvAELomMPJ3CnsAYQtpktgV4iuA7BMUp4uqh",
  "key35": "36kP3xGYb8EYWZoukHXEcg4gPfEq9z3LxzneaV32CRC8cCRqLApSHeoMqzhPBfQCapnxa2bbp1CxkkqcMf5rNQNv",
  "key36": "cxdvyp5oStLUgSAe1dzaNBszXUWYwcuqYeSNutbL8CnHyafpDnfcnYL1EWa5KoxbDodQnzCTD1RjY6Az2TFWrR7",
  "key37": "4bP5jinqqTQxCN94WzR76JKvqWa5SPoKMkk2bjYUrLrK3qqybVGpD7cx2DHtHPVMNoBZqteanugBTmSAQp7eLXHk",
  "key38": "rpA51t5kcyjymJGdpdTb18AU4SQWjyxDvSJ4MyeeonjaQHZqxTtVpHtJwc35Veh7imR6nZ9MiZBa3Cp4SJmYVfq",
  "key39": "3iA1YD174DDvKUDehtHp9gT2TYmarcMJDyBh24oeP5rbYxcmGYditLt8ir26akPgKJNfJupSJmTcPew7gUpJ5hna",
  "key40": "3ypfjKUKDZ4onMLicmVpJPsTQScB3J9aSY58m8L8BCfCV9LvVF4poLHV7hKGGf4y3wvzkVDZPpwHpzDQjdYmCJdQ"
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
