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
    "4UzJTjbJ1VpV96MvKEVeCysuNEzB1UhviB5fv6gv3yedEGtvvPPbnbFHNDGUtFeFcPdPpGZFa9PDbg62mgQmqvHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W6wDSj5Y6zaWZV299ozJ5ZuR4ZMoYQRD5fMuGtRo1eK2vFM1DtVwejNcuVTg9Mr39NgqETRXixUZD55p1sQhrsg",
  "key1": "4MQG2j5te5a1reqmkaNSeTag3cHScCs7arXcSa5QczPBsSu6JvdzmYDcdKercwPstzk37wwPr3Go1CocAGxrGoGS",
  "key2": "5zcNbHXr1aUfryVV4KXg7tZxMKFfbArTebrWXfJHUnhxUudkBpdkaVvG3s7AxUMFJkyjNudKNiLixhMQadxcm4HH",
  "key3": "5YJbEWrsxVBwfTVvBT2UXqY6UtC6HJz3LNxwYXb8SyzfpeyY9bsdoTCsaAaEnR21x8Uopfu5WJxV5x6AXc7Eh8es",
  "key4": "2FDvPdMwby1ZW1URaqa9F7zidQFvuvaDaaPJ8nBvEiVcZrcSrjH2ehvv4Fmf9odbjP958bNNPeYfwPrDUj5fpniT",
  "key5": "4SDZrxgnGzt6feMajmfbFafmBWuFi3CoFJxDzs1zvkteXH5Zzuk7dmQsc4okhTv4EeFLgeaqXbjTLmjLZRe8FxuX",
  "key6": "3FXTwBbhML5EHKuw6BDzjNYGLPZ7Q99SBe4aGezZ9R85KNbGZ9U4TEWYViUKKX1QBoWhZ1thCXwvQAzuUAXDqSKQ",
  "key7": "TSChy1TZ3H38HCTRcP6xB5hLPXGt7JBkQigDdcaNySeY7mqpQJ1VWWr5GDUWi5gUrAHEiMHJzYRrg4YExoossvH",
  "key8": "4JefwEaJ7Zj34Cwf85KHXGtToXmSHqtZgrU4tTPjTwvDxhVLv7QACq1XgoEBbJd7YxuC8Uht6nAg4UzdyVG4cbRT",
  "key9": "23b5B8W6LfVwMLNtiNWU1kWS3znZuXiCdEgah5v94jgqQrTrP8JnmDDWh5ZuD78ETpMa2SAhh3cuivrbCopUw8Yw",
  "key10": "5pnBAGymU4vVNNAgUPw1n1q2WkkzizqeMRFErBJsSAF4excW5iUUX6fJdBqSGRKnBvrWiT3Em49hJ2DXDQ3ig651",
  "key11": "5TiKpDw94rmJVQAMMnQYWMzSz7MrbAzcovVhYYPyix9BE4nFVMASDyd13bhKHFQQkPbaUHbPFg3Fm6ZeT57SJX2A",
  "key12": "3wQtonmsWVN8TovMTcscPDcuNvQjjtRW4y6c8rzKAd3MxD77YbLxfvYHtrESr31MCx1uQ16ADpc2sxP3ivR8eBar",
  "key13": "625y4JHMBGrbcwi2dcj7XtLHYN9YKMa1c9Q3gTxgQVTzGcUQAQH9smEeyTRVZhFjB2sj6ExtEPA71mPjcV2YxxAe",
  "key14": "3tNKfWXW4cTaqdjeTevFZ6Mxf2Z26eA7QprSCgi9hvZuRrbLPRZQXsPVaMV26P7hiJU5Z9je5W2N8Wukka95kmK1",
  "key15": "r1vaSQ7S5s5TFLJESRNg2oHutsNRRGs1h7xCq7uePnjVsfCYNvrf5ypRm4oySSinLcgKZK9kTeFXT5gV9vj3CNz",
  "key16": "2odKVARPzzqLVuw1QXDUPYLwzkWdaV53gD88fSrViRn1yaYksKpXmAFPasj8JUWdmmKYT2PXmrjVweMjJJEXcif1",
  "key17": "4mPe8ESwFWjksdSxQgbDZRrD9bzsTbGgdRS3HvmbwkpZk9PNUXCmS2BC6bnoi53jG1Epkt3pNbe2hyszFFN5xrg4",
  "key18": "4eSJBBva1f8aEzriHJ3AqNS1UpXbTVuov9c31YRHJM7gwY5AFZCJfgBYZQRbdokY69gdJQTnYXc7VBkUUZvG7Ffx",
  "key19": "38HTwBquPVm7WJEZF7MBe6tCDeMeU7aoS8aEnWsq11PCp8KhYxfFaLD6WWTercKw5mdSyyLrsQVNtVhNVHXyWf1h",
  "key20": "CndRWBdnayFpqXj4MGzoB7ZijVhrduWTNmNDgrcNwwig4C8DPudVzVW5UvuF7sQJBU8EE1pqQ56zjaf9KFtPS2q",
  "key21": "3C1Ag1DzGjuCQtdPREhJcXXYTVpDc953aNFAzxxRBBYgPMyZZVpfjGi7BpRHjYVCY8T6ZZsm8sMpbbBebVqh5ccn",
  "key22": "3KVMpXk1FSdxWJkdWNHg9muTqHY1RCH6VkLRWzgMXa91esQHpw1LDZw5UDtguA2K8c4QppvvdUxAJc1L3M7hB9Rx",
  "key23": "4LbkeiU8fRCmubtHtMSY2r8MRvTc9tJ5tNNrsU2vDUj6UiPHJqUmZRGEzhe8d4z1c8L2i8YPttSeStN5hKybc5E7",
  "key24": "kZcQddaepYuWTh22gakgfigh2qqRbLxpNvzfQC1AAwUHPb5ZoFe4FSM13Hf7immnzF74FPJSYZ1rsJexFGNuuMB",
  "key25": "3pnxXhDmyznHaepfoUCZ9b4y9b8dCHxDNT3SvWWiKFTXgPkN4emWNocTh3gEekLrcDMwBje2ZgTvxnKiuJKyZ7kF",
  "key26": "2b4X4WTwCjAxof36HciVc4vTNcKmEtVkvod4BFprpVjLfzP4r1t58qWmwamX5KuzTvZyrt6RuBJbqE61v5BMsKZg",
  "key27": "4gVa7HBaCf7CtPXfQyPFNLQ7RhXtCQ5dPG7TBAieBTJ1Tz4HuHY3Sjaxz2ujSnRg5zfsKrw7Mx6k4JvBJZc4UqHc",
  "key28": "5bB5G5prbTAVfQhctLTiRPmiS9fA6BMLawjsJnhPAbyYzFhx8NiWbaLFg77cet2gVVMiHLWUc9B36g6PHQdgt7vs",
  "key29": "4we5GVPnwoDtvV8E1HEV7ZeE8ZJM6brBy8hudMCoSoocAoHMrzVisdZou3at8TVEgcye5jfea9oPiM93VyXDYDEY",
  "key30": "4mWufYVQ9Zds3QcVjwhnqdYffiwezdDU7qxp18smL61NP3qGPCkRAB9VPXW2jU43zMF5AfPLfWffrfvr3E4eQ5d7",
  "key31": "5bkci6TxYAT6gQxFWGVmVjGLd5rnmboF1EgmhzVyAgcb8sySfgQTCX2N8BaB7e1kVgySbbDAr9WhNifpbEscxtNL",
  "key32": "5fcEiwdSgL5DQeXM3qnQY43eyjYNprZkkydUoHVscJ7SzgsC3hrfCNZvpZbCN1CyfdBBRQLPMgZWuRf1Pmf2VZAQ"
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
