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
    "2FJ6XtXCrfNZcULc4p3ySZsddQzDdjwF3Qsg7MNGuvV7FFCia9Ah2qat7Wuh6CVZERjxirux6TMHdNPqPSACVLDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kxUiPqs3xLUuJU7CS7GFDLnCzjfxP9oM1JhzSC8MJurJ5vwuX2WLHdWKWuTHix3wFiM4UyLDBmsWDZhUnoT58H7",
  "key1": "RBwm5MpGoWuL882FNPCek7dZ7d8RG7CSgdJWArRgXhunupPEDJzcPDxVMotQsrv8YoDeJqV1b7D8eWhCZZzJZ5N",
  "key2": "5wbF9uoakvSay4KfUjF4nA3fcaMzbP3fAepaabUiRRo5yWjdSPj7frFtJMWZS55LG1znfVWZHXqA1zW9bJRzF9r2",
  "key3": "1bDLjrRLMt4B1JoYSX2Y1SCooDx1p3GnZoGbKqi7RKfyMCAME1onyBQyNj7grZYhetjQ7WuucSNiTfPz9PYHncS",
  "key4": "5oim3wGxTo2pUR9XJcKoqL9W4FVPAKecZVUNRj7ZeoiRuZTh7bo1BLH2YkzzqEArKJu3sLCcLXLLQ555UvWsejTN",
  "key5": "23kF5aeLbanL5MTuRBBb3Cs5auCUX23KbSrsC9NjhCTUtbrMm9biP2q7xzpZp7peioqWerMoX8L7QvAk2kUFcvPh",
  "key6": "3wxuD359FyyRD1o4RNPQwKx6GiGENsZ5EpVDxgh7RSoomPZyWDruvkgfcmQSgjRKstvWK3BkNirqHxekCydtGg6R",
  "key7": "2FJMHPs4hF9DjVGjVR3NREgqAdtz3KBspsToYBTGvmSaNM7WKsdsBCWLVQyDjFJSii4SRY8xbkipeUNVrxgSxMXx",
  "key8": "WHwifMK292NHbbe2eqa61bg3ffs6FoRrMcWDSCSgiAdmTzuUeLgkFuHaWoTfUTaNuq8pfGBEBvCdbdhSQD9Rz2T",
  "key9": "4sDXS7wr63Mq8R4kie5iGL5sphXeqAUVb2YStNJ2jVbd9GhyDvo8dBwp83YK9seAxnLwoxDtNQpnNhDpMBsyKLnm",
  "key10": "3xBCcNUvu5rB3AqvFdjJJNkdEzxLpA6J7qL62pyTmy5kPdsjMPjhQHhPJcgHrdByiL6xmN3u67AXpD1LszLPwGns",
  "key11": "yL2NguzSET27cjGbt7G4sJ38MC8Suz77ThsGhgBoS9NCtrz3LGp3RVL64VpXq4vUSZUvoeHmJcG3Xdjj4LpH4pZ",
  "key12": "5j4B2KdQecVaKBBXb38paDUYCJKVABcmu1re8Kax2Tw5vw55jJCxpVrM147pU25QpPWDCTsWKz9uKashEsSxTuvt",
  "key13": "4GG8E22KfDTD2FcEs82s4w1NHXmKErJfbM1feqA79HyeM6mneP5rjxAdzWsRAL5gfBB5LwbZHSikahBgPC2PExrZ",
  "key14": "f2qRQj94f5UvqdEf92kULi3Cb6zZSU9UC8L2VdmVYxh3q5K3PVyiKvoq35Df2e6vouc1AKBSc79UjMtoH4ZiSs9",
  "key15": "2LdgZeLo5HjN8aubhMUCXi7hYLhVjEubAKbWDjBwe8UH9TTXso5gXLikFJuqE2BcBDZ2Jx3sE6qTB4AGVzYgVnZj",
  "key16": "5J1k8WM6fJnxV7dxfHJXXumgRW6vZswXDE73mAJevx9XWQ7HhVDHAVX3cawJqAhpHNxJ7rVLs6aYxJGhquZyZZqV",
  "key17": "2dketYpiix6Uo8QCizjSyhRuFUCBcSFbdM2TSiJyfGaXENwXAY1BW7mxe8DQohby5fzVjJT6zgiVS6nuMh38HSpk",
  "key18": "4Co9FACZqTdbdcYA63fGkNSsMjAZXRBv4RTnGwuZZb9RAtye3LFdTUvGreqMB1bThXXm1sa19VvBXgDBLDwB8s9t",
  "key19": "3hX8BCx1EJshCyic65PEromc1VZYnNVWW12NiQXwzZP7EEEc6WoY3QTKtMuNqJEcpoqks2zhcFrqySFS73B3boQm",
  "key20": "2PYzBjkNjYedTvhxagMVpDSrATZB8UMqNJ72EdV5HA2AK2XcUBxWENNvGgnqEcXgF6VSaDWw2ZsopUYkNGzDc3Ro",
  "key21": "5NgtPWUurXw4rmEEeBDDcwcSdJykQRM7WVXnSfghZnubDB1iPbYDtJVNMNtz68A8ZmhzJ616ztvXTytDryGoXJjP",
  "key22": "1TSGfST8RSomNPDTA8NT4jQxAybQLzKHUgNcRE8L7b8XEXCanJTwustmNgKa3Lg9Yu1ypDyhfS4GZjThWbkP6dW",
  "key23": "n234L1uF1juMBLNThTJcRMmPKJ8BGLPmdTEaH6DYx9vK53TTnMRK62GQQ3APtgRZxF8rr8WuWUrghaYyokBmWzE",
  "key24": "4475Ect9tGCQYQoDBsNL21jc1DQDB39k1MD5U2dGVmHT6FKUHE8udhfiACTpsyjwZW7baxxunh9mWsvXTnAgr4ew",
  "key25": "3E1EkxMzb3w6TDLSuPS4TdvJghiai43RRMRjBUuNxjsa98P8GKgADVdAQXbxXrQVBydV8JGQP8YjQ9pTjbPQwhPE",
  "key26": "5dPnCphd7gRDTgpzNMrPTPtiFSjas31VBKDUUQYeU8ZM5nSdxxwTWWSvzKuYcn2K5ro5Qo9sAvBW8jYuseuUJEM6",
  "key27": "31r5Bed6rK7BZ3NJdiCnkrnybnGccMpTCxPqbKAKVfix8oeWpQ6BamC1hmMNY83iNoBcpLXTRb1gZsuyQjShJsvA",
  "key28": "4ueucAnrBNt1nzCpELMSdzQkpRBwATK6Z8zc1Nui9BVcKTazfunio7exqPLNLvGLiDFJHNqZRfYJXFdBrDK4CTR4",
  "key29": "5bFx91hTEZaQNFvFLDWxc64dabx1pqSWqiK1z6gya2QeXpuEqJMV4VMDjAbrBrrt2W8WDM7ds7DoxLVeZZc7J6e9",
  "key30": "64UvFuGnhjvGJsY1Hwdg27LghJ3u6iBv6PeiLCNSLXvfDJHerVMNj4nRsJJpJ8puvUc87gQ3iCCTdzsPTjoEZnCa",
  "key31": "hte7mjT49oysGzYFMuhdjUmuSUZXtXW5rPYoMC6rHKAAeTdm2rXgtrKDap44BhqJPErX1NcU4AnWtUEhmJg3pcj",
  "key32": "51n1bZoKz8tNsnMX1Ft1xGXGGvPVy7cAdDFC1CRNVGFdcYEAWeqzsrpEPrWHLdDbx9HM5rXAoporHiSCVSfmUcY",
  "key33": "3KgQZBXf7kYScH8WsbrEMGhm5XVaPm5pk3JKDWFKiD4EgHawSKKJW6goq6SQrgJVvU6d1h4bZQ4yCpteq4WcBHmj",
  "key34": "3xLsLWZ1GicCxWGXJvkkqS2VTRDMQ6uo7PzqxYJJf4qGDBUgmQZnbUanX2o44wqAVn6V6UD8XMagpxDXA5NkqqJx",
  "key35": "2psNQCs2t7W74uccDRbsfHT2t9bfEshdQoLxNALPxt9im119AGcjjpAmweKE31yJ5gUFJ3xQLtumMSxfo7vwaqfp",
  "key36": "5rSBsqVetJDkckep4y3DHkv8S9gF3p5vp19TVjGQ43vMJoWHWNocbiqnqepFAdvWFyjhYBJGKUNDauATx9eQUuro",
  "key37": "4HwZRtzRcxJaaDKa2symhJnaCyKP6TrXFuPkeAKnGSMMWDMnb8MRaFVDcCUEVU5fUYrTk7ZLkxuEdrhAyqYkyppz",
  "key38": "5AbGrnf6mvifvtjQJYKbbYjf11jqfFP5hznFnjyKuvk7aHjALKoEQRwrXnXqe3uDRxWfU2wK8NpUo6s2XSgBobdJ",
  "key39": "f4DMSDqPVWTYaBToNDbMx58ARjDE54PxeTFi5H1j69ZHbCZvgyzhP7NZagCBTUXwteKqDw981nBLYkM4eBhp35s",
  "key40": "2ZsFHDUJW8e8b3iq7XqhLVmzaGHFzFM2J6wkdce3HjftcHyL41YiCjoz3meE9TrcY5UoM8Nc1jDAek69rnNsi8j9",
  "key41": "4ea1dMi68djDQvuv6QPnx2EzV9UZguyPZgyQZUcxMakTMHwteUxbgyvBUZEv86egwp91ktVrtEJmH9JvGaseBdx8",
  "key42": "4171vCbLjSjTqHrwTxBBP3QMUZzZqDWtUJqZT7wUgLGb9hpaYWvTKN74rVjSD6WZ98FEDy7yBE5HYBV43r6Z1xCr",
  "key43": "fnBmvoXanuz7CX8w5BSv3EQkgmMbWCD2yRuBWeWbYBENAcA2Z36FBYks5jSa3cLtEChxro4ydfyGAJgF5m64RmV",
  "key44": "5nKaADizaWyJBtqetwGgbHqSz8W4wk3Ku5HU3waUwrqtfQeWjAu5mT1V1W1cnRNixgmLFJQCMYDXA15pQwSNaJPC"
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
