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
    "4xeuskHF78PYh4qRXSHeWDpYQnLAC8Z8bvLUtDrAJue5ZHVJxDSgBPZ5aHDTKCcvAE8TuHWANvNsuNPjNoiCfaQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vkzVnJPor7Nc3Mjkvm4HSHZHTsbEAX2M6xAmafd263hxt64rkJXibPHAZwFpqLviR2yE1MRAWPophSiYkHmcny3",
  "key1": "4ALLqZY98ZohnUuqfRra4ThJy56rexAsv5atGoATLjPX1JnFMQAwBmt2rQ14FGH1QfEUqoMyisP1jKA6E2vA6MuJ",
  "key2": "2xhu2FzRvHpkgFTGw7j7rHHzdRDzXVE3VzvoWgZsqQ4XfZ3RSKxraV3kKZ2rj6TfL14f6sEdpds9FjsegYuqG3WY",
  "key3": "Yg91Y76wbMVk6YK3X9h6vBdNh1AGWcQxspJ5iqPmfe2pcCnrv9T3KYS7jQGtStyykxK13ot4W31jhjLurhitmgv",
  "key4": "3BVqCfAjaGgKp11McQmZs9Y48HwhUMXC53uSVVcSqx31Zr3BgqxZ84XFNZ9R6FooLAU1PyGXjXHfDigBdnGdxwUA",
  "key5": "igTwBBCzYReSfeQSRYLhecpfr22W27dru8fNxcNFXKv6kvrL2mxfUixWW2KciR4eQb5sBFY239XNAJm28R7L7eU",
  "key6": "k8JF7SziPjLxYbc7TXzqtGz1ppNgdUTa4qKvcfzRJBcjNmfeJYR7VSF2gPhBgnEzQHLis9Huw1G1xCsMUQveHS1",
  "key7": "fwRjzU7ZqPGKbswJZfM8TQd3QSjvSDSsMnfcr2rMCJBUfywbup8dkf7svUdQEXSqXMGNmwRufXqYjfAD6UHbAqf",
  "key8": "5me8ELKwoyZiaudo662TiaBv4ZHqwTMj2x6BawMDCaAPAyzeHbyYx7GtpEe8yWiUxV1avdqb6FzGPyQ1L1JZTTse",
  "key9": "5aRxUnkM5BvoLuKoT5j7r6n1XRfxGCg16ifSSJ6CutTKTdosxbWE82zR6aRHQy89iUAi3xD6kydxfDkqvrMtfCGD",
  "key10": "4PfgP1FpUNrGQmf126YvDf424jkbius7g3bP8fwi6v54MJpMEHEfVhpGnqeMT3vHXTPtSydBNsC82cJuZGXg49Em",
  "key11": "4S8dEVH7uEXPJm7fYbktwHsjwdRm9nRhh6oEmWaneFj2wkcc6up2JH8cRq7nQHH53AGYwDpn2dgaGCU6jbS9Vtom",
  "key12": "3UQArekkrvV22F5GrFsdiTN4SpcLDSi8n8M9aDFTD614foVyFc953EZJKBJ4fXCWjkwnewVvwZ9uNvLPS6erXCHv",
  "key13": "4qH9aQAEvCzTKg7b6FxxbtFMvcNLLF4iks9HfaQNUsXfBp5jB4Un4GwCG5qEm9nGgVf5Wcy3h2K2VCZiqqiMSSEY",
  "key14": "ZDR3ZNC1u8eKALA9hLz41eKi3nu1osvzPyU3HdJuPFfMqghwjRq6jk5bwwx2egn5X9KK2GZc4Uch8CjcX6vBVzw",
  "key15": "gaCus8sTMq2MZkGKZUvcr26dBTCWyAroyA1HpjmFeDZ7L4VfJc1TBjUHbwSYw1kDoEqbseM5xQu1LUJsRogUch1",
  "key16": "57kNCysLRy6uAajZyFX7k2kmqrcBbYqsFi32xhezoaBNNKkr4mZzbLYthg7ApGATfXT18Gmo8dUGpdmfAPJHciwe",
  "key17": "PcUcAVE4HrXa14Xwfw5VrESJECM7dbYFZH7BvaYziMSoWYEH4rN3WsrEUxk7J46tgV74qGs3CTX9iVnMnZ3YKyz",
  "key18": "4SjUUTStv5PF54wwUr8YZ4fjixXZSpQKZVm4YiRn689GQCpCRwbWxQWPJDXi3ua4TDLVLriWsxhEbVKiKwjHUs3t",
  "key19": "JnSegNsLae9pSmQnTisTHsyJ5uyVvBcmyvvasnfhTtNmrvq7KW2Naq7iaEq33iKHdx9aPVFPhBH1hMMY7ciKoxG",
  "key20": "4QiSD67tVGUQVEuH6r4UVWnjXqZc7CLw8b7a4fRFhb1812iyAguHxNHNbxRrbKVPCisAUM8cYJtCVgYxEeogYr2x",
  "key21": "5ej7WYf2g2QqqUTGDoY21P5kDMHTssRvEC1JYWGJUNduRAsdba3pDPuYLMwQenLBMFAFKPpc56SLnQf1PfqFSPEW",
  "key22": "48uHTbBrkVvmqepedjdeXUockXMqziWDXPx3prAzry53x9L33F1Bj5pTWzSXrqtSVznfjk1pPGnCKnNEwF2bvwde",
  "key23": "35S6rf9JXh2eHmr1LMq4UwWpJY7LABCjbNNq1yqcvj8TfYksZ3wg5Y6qHZF7iQ93ZRqdPQnmwihMQWKoHv2VfVrx",
  "key24": "9KStv5cGi9ptbDqvJj8QnbuwPM6Laaaiqy4ZTHvLMKKBZV4gSBazURvecv5rxUcwWTy9NNVoMapnz5j8thYyXFM",
  "key25": "4h8bjTrWy9jkNFa4DbHxen6xz4NrdT995aiWZPZ9NvgsrEpTusyVr1cdgYHHtd4XWgRtLJq3vbkmY3oXDRctyCis",
  "key26": "2YBn5desUNFdTNxPXZhJncnZBdYFcVyhw3LZzmQfzXrK78mj1aMSSSrWiH5Va5mA7Y4BPZH4eLedKKiLQhrTuRnU",
  "key27": "3Kxdna5Cbiy92fK7ovWYvQHvuwMXhoRVJjUdcxyGw2GfG4QtBKSfRFcp9L6AjQMgJcbBc2NWvhowBXzHxs1vGgW1",
  "key28": "5qtdQwvCVTzKMSgPKsTt5Za62hPmjHCsw6K7tWubKgEdCBNgimszxZu9QGVuatyu5ovMduM2SG9hChF9fTFCCAe1",
  "key29": "4GMFunE7s7tbKyaczNUMFDGwktti7NYotwHS8q7ogDsKoj3SRT5yEBwbHohXUsuMZV2fTHzUJZ3jvdraon7R8fvG",
  "key30": "56K4ujN3JaVpTrLpx3414Nzt4DrGmhyndVscktqBBq2B3oxNvtu8UpqkfZgnijA7tKMBmmDXCMJ5osyXxiBYUfQU",
  "key31": "4qHCimr5rgvvNkv13KgVSdUREepY9mcLFCGyqQPLMsRGBgdx42b9icSp7ebzWVpVY1ut9C35suvbudndCFNbbchU",
  "key32": "3bQpbtHxd8dYGmdcp9ABUkaR9mLnPuqF3DRnbmMK12NL1ZNYL4hAcfwGgU85FaQVeXitBHLdpkaEzk6REjvsoWaY",
  "key33": "3xKhYsyMkq8D2TxndBK31icwxB46fKKBZnVqrV5rXfKrMsMC83B1QbtBdxY6ZzzVQ8KZrv6iH1jkAJnLJJqej6fu"
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
