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
    "pEd3eoH6r7e2XLfBsT5uUiy5LTR38E2EniUe79kKFFRnq2wMmgLDtaUvjYV6Avs65sEuJSzoZQV2n3L7FnyH2rL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gYWj4GWGiWaxqwqjoetbzEWtNMdXAP22fPsuSfUdu9vURMvMFZJcgHJ1PdhK3x9nMfzxR7bt3z91aXLFVcxgqwd",
  "key1": "3k2mN9sCvVsERsHLn1aw7S3o4QR46cMxpQzTciqQDuovW4ntBWxk19Zn2E7Zuj2T3rD7wQEPjQP8xFaETpqdiVRW",
  "key2": "3tRsU8rxuTCVJ973dCAp4vBfepVoEytcKTkULj2vWh2pPq1PdhT7Ln6zx9ZbUvuoTzqF2rKrG878z3za6jt8ZfxM",
  "key3": "4AAT2sRk4etLtLiTubUJU9mnuifuTYqLhyJuVzWHitaSgyD9Zufu4FuGPs6ykrqq7U4CJAxz8GfJJkpAn1ZwLB4w",
  "key4": "66vGtmpE2WTJLD8gHWAP46WLKMQHvV6GGddMhzWvZsXpG1aNsBKX4k53wKKLNKPMjN2TzizqT1WJPppj1gXPwTxb",
  "key5": "3gSgdrm3NmB1zrjYgpHRajsxaqWZAAH14VsU91DrN6NMyKRisjfE1TMfEjbRfJCUCrWxqSKB2usJpFHgF8AZcSoU",
  "key6": "46QGBsa7oPodMwrs89ecRq5A2JBnSe4UC4mWpZthPoTdTLRKhUoJzPBcBB6i1JTgpioS3D5GErqRoqc4aNm3gBNd",
  "key7": "4uqLEt55iBNcg1XhnutaX1SCm9npd4E1XZyyWrhnaAyXMwruuQmdegi4PRZZiL9tjreCTWwPKXHTuNDuNHxZL8q1",
  "key8": "59PMCWrcA5W6G5S8hHPxcvrtcTZdNuYAP7aedbMpbEeCzF6NNQ7taGvRutLBpmrZk1tjXKbWvsZJtqwSpHrZynKe",
  "key9": "5VSi6daGTWZBZ1seEo1rCGB8CNLD969QEQBH1Ecw2YRBA65kcN7HXF1Hc98CXijis5VWxzmaANhjpddwRr4LAqDQ",
  "key10": "JMtVNh856gJCbABKLbEotoYRg8UDyyyNvzmbwU8ZZm9VTXqFTzcfNeNj6NFGAC7KX6hrz9ZwN5LM6Yh8cuS3TGk",
  "key11": "8qMwTHpv6Ue3R778BSWfqEFqwCH9v7gg2bKa4EscVFr1TBuymmHYKFZeZkWG3cSW53uwJf96EoUcc2n5kqJ5kUc",
  "key12": "4MVzMBJW88Kp99vkcV2P6rwGpFp61PFydBJMGHYS6b1w2tGbGaHhL2K8JFX9BVd2AhwEssAwEDZc44vRjJnpRoG3",
  "key13": "Y3bze4ws2bbDWpHyi6YZQUdi5kY9WSLgTYKtyRRugA62AdDuPrYYFo8mxm6FNgt4dnnhFusdYzbHTufb9Dzz9kX",
  "key14": "A7LsBBZ45AroPmSc2oW8yyteBPx9WgmG7sVVo3jq7WsAodXxdCQHeHz4xaPKgNteEfcLeLWCxsmJ41Hmj2WpXXe",
  "key15": "dJdabctdZZGiZwiioLknw3w7jXX4tcMu3522k3q8ho8NjQxw5HK5PFCqZY27bVPsAqs4zj3BSVRwfuFX9dp1K7k",
  "key16": "4vHeFvtDYB58LD34nRRJp5h693x2xZjdiLfmS81dAjysBJcN2Vsej3hskY411Bk3rMEZ6G3ips4oaYfxN7Jr1iSU",
  "key17": "2PE1sbDqzuRv8B2ZZbmEzpzP7FNi3eDMr3qikZ1MocfZ4LJJj4W8t1VMogz3kDBd41sW3xMUt9YvLHwSEQciSNSC",
  "key18": "4CAEqgviDti1tHQSdqNnWckegWH7X259RZSuyLqknQRWcriqewU6nrfXnDxZgkTkmd7qdyALq4ZsXbFZHHv3qLPv",
  "key19": "2ZY3zADzDCrfzQ1eym46g8aUTpk652iCrQW8VetFz5H3jGnLKapSj9YeCnUDB8hhQZdRKzSMev216YjJ7Wq1rXrq",
  "key20": "4N4ZLJQoMpUgtxUfdM6aJgDQ1aCjgpvNHQfbrXedZsDsKszEocUEYA1EVAEZzHiiwmUzz6RdfSik6Mfxi95Atwv2",
  "key21": "5MyDbxoUUYXpWG1M6jKf7JWgyjuxegEyXM5HB4g5256qmbSYQVRFHMpHGR2Vt3iYSyRrWa7Ti5ReWbFdE43Y3yPE",
  "key22": "5wDzHExVNMkQ1dGq78E54EJcCCbZGzNB5weEVmTkdjQoao1vd9PabnYVPVJQVemSNGBSvuR8pvzN1gyhCX98pu2q",
  "key23": "GaLsueFXcbzZzxVyMjjMeh16RC1gZuo93FYeGxjMWzUVGCh3aPJY2Q4Lw1xnfKDZpsiYsN98dpBHMfWFcScjamr",
  "key24": "PnDQSEddpKQSscA4J1yvsrLieW4FCyLoMxMNY98G3f285McCrJM8Mb36U26rJT5JDW8ivPGwDT5FcLX64NBWi5k",
  "key25": "5fT8apVSNeoxdx3quSSVm923F4G6kEWxMZXNZ5jF4Y1gMCrudNXYju9YdWMJX6jHurpnZPs2ZEeb5ydtKA2JD71k",
  "key26": "4c2ShpGwyH85Hia37RKBeZUr1Yip6g6hxWegDEMGhE9jHEuiWmVTn3j3HCyDMq3YxoWgzNxES5n71tUMFR7cLws9"
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
