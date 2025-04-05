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
    "2uzqcJ7Cq8BFFkQfYuSE9D5YusJ9oT71tYAc7f8q9eGnGrBvEkXkySMv2zYtNNAUJDZeQxRobd89gPCwPC2aLnvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BU5oCJbnKQCdpoTCw1mid4A9XMnBLMAS14oaqNbe4JfeDT1RrfRGG1ExEevDLtqnoD1epz9VdNg3jCcja6pj18F",
  "key1": "2N1cZk3sUGeTYtaFhJd6redPLzrmBdDZifUk8rWB1d9BTh9nULseKiEZvpm7UDvZvwcjx5ZLWq2FkaoakdM9Jr3",
  "key2": "2AHaD4Tr9BhjbwAER6b5Um4MYDgdLkuxYKukfCmyVtx1cbg1ptystCmUyLzAHKVe6WwmK89uHbwa5Mr6SW9RLkkm",
  "key3": "21W3whxSFFeZgha6NuazAhUz7zHxCCEsm7QBXazd48desAnwVcDhrWhXwmB1UzSUbAe5nh6LKCkK864Gub56stHp",
  "key4": "3CmcDxorE5QDbLYSjk7jYsFgcGx5FeJKQf6Ad9DFJwqnRtmsuCAm8YEcXarKqBHBRvWxQQmaLkx6K8fSZKVe534r",
  "key5": "34rVocUPYECeY45zAbwWNoBh9XBxcdwdn3ji4nAEAs9CjRtTVxX19m3qWPJxLZX8JXWzbRvKyyHiuSvjX1AFfyAr",
  "key6": "w9YqMiJQCtrR6CFatGj82byZS92QH2gs93pgVgmfS6bAQS3Y9n3WwqZXxdWbJBhTpTdVWbZtBp6moAVdGehfkk9",
  "key7": "32ykQYkkirGLFAifuEzh8NkXnDgHjKSkBvPGo2GB4QqiLn7hcqwBXSVRaUthrscnSx7F2WgugxwUFmQPq4WGn2Qa",
  "key8": "2BXpW99WTzGd71X6ez4pkb1CgPoi1LRHpEv5Kqoh6KRLvS4jsPnFMuU2YrGYCjgZLtaL8siJEeHCPDvhxsg9HVEs",
  "key9": "2VCSjBD84oeNajikkLcVoLhK6SpKCXrrKVPhGZF1eSu64XQ9AgzQcgTEuVuxDn66PYhQjEeotvrC8U2buHRMnqWf",
  "key10": "55pZcGtmbQHf1nm9xprEV8oz9i6cQrbFwUYyJaQbX2dr5kfSDS746XLg6YWNRacs5pyyakvBi4jmHARfiTB8RUzK",
  "key11": "4WcARUdyQQuGXNbjzAaKqZFej2qtSv8oHASvj2VQjkXFpyeyM9RgbERvamSJHN44pDvMeS6tciEuUyPbCEzpueXT",
  "key12": "3dkj56vkWDZbeBtbRxwEzo9Q28fP1Mkzh8ddwLxcSNCWtTDk2WhUHf4Nbaji99MXJUU76E5BgjpdTJwmJwNGTHjg",
  "key13": "64kcmqXeaAXRrftQzi1ELMKQPj53sib7kR1am5C7whQpnmeg1g4bup5aYvGEpxj13ZQGCmuC7ivAeYQoLSkgRWt5",
  "key14": "5DFxH3is4qopiSwvMSNVMvQPWMRbFzChSb97gX17wCCysQsGRG6i3hUaJTJfqKr6rFQ6hkhaWMQ2vouTR1aW9xCn",
  "key15": "5rdScLYN5Gw9B65WptqfEjTrpEw9qYcRDSTz8dBbnnk14mprsDjHSpqWfixBeRWmL9GXRgi137Y5zvf5mkZVG3cK",
  "key16": "g5cCEqtUoWFr3Bv6BPBL3ozJ2oiTzHGa4dUfAaksmE8Ya4wuHsEXHMdta7q4NNcRBpM3g3BQKao6ZEXWT52Jx6y",
  "key17": "5nAG1sNkALNjUXghwCiuhBWLNiPb1MbXx7Z7Dy78y6AFfwqsYLFBsid8McJQBFCnxNvpMDLY1WXoXJhwHxmFug1x",
  "key18": "3PZm2PBgzsdY9rBShFYuyNSWnzac1DmFxZuMLUyGDk6NmJG3N6Gwq355BrMHJScYxHgV69wkHiVmrsrDxFzcZ3d9",
  "key19": "57KaSAtELScCS2x5tmUFteS5BeaxENsWtJJ3HGxDbRUXozjyZiAfndH6nqqXuPWMu9npKFV75wyzozmsmMWzSbhL",
  "key20": "5sM1oimehXcYmZUhsHpdJ1MMto6xVL4KCFEj4XFjMH1djE4hWtmWDeGCTWmax5qqHRXbBrViqf54WtZvNAbZUPRC",
  "key21": "3TbGx1dKb7bexbmgYfrEcjfm2HfwS7RB5vRoUpzJyqXFayT7mJb2pzb1fXcNRb2mMmshvt15V3RwJxGc4G9bC9pv",
  "key22": "5Jsu8cyvAjdA9eKHgsEfnDjTscZ4iYyj7h43JG9pD3Tk3dVKywaXzh1QQ4rPjMEDirM84iqbYQxZW2VABy4e7qrY",
  "key23": "5jKhETa8W9npfLPa6xKmk7Ja1F42o61i3nzaBTw7mpVxC3miMYYHhCK36jDSpvsJo86T9qBEUHWVurcrgg6nxEN",
  "key24": "3NH5wSfiyjo7ko9JcvneJJp8K7NQDjvr52Uh5rdu9A9RUy2ion6Axh9ayVjhZZMa9opPUC3f3fJdEitG3SaFeVVw",
  "key25": "5xZKbpP3z4Drhj9GDycJXB9Pww5UXhWSzKypCyFD3x8iYbacHgfse6rxPGjXvsK2YN9LzaxV8nptW5EKQTHNx18h",
  "key26": "2hZbQeTFJv4egudL4ak6MH6g9nhbFxTsTmQLDyq7s8ZjKxvQKQANzqTgA1XU18CrM5yyvejiLbTTKmqefw6yBqU8",
  "key27": "5Kr635KAnkMt61WzxchNBpprpK2YWqUB83nB6kXUjoKyS5qXauP2PuQWrsJn1gzdDHWrZYqsM7CPPX7M4U1RnV7E",
  "key28": "3SyDJMBqjNoVaBUUgRVMDZWpzT8wtLby9BguCs85nEjvZmoVTrWpTKaSh6XV188Zie6K9bGwDVEdcgdQAR1tverh",
  "key29": "JzV4TWzqLftnx78wXZLcv8Vdey8WJVWuFtZ8jbhyQpZPhwQ9uwvVf28yzrcgi5gUyPXTfTLcsE4gTGBejKKuG14",
  "key30": "2vBTYUfVEb21aN6BxacrDQdLbQitjKFCCAJrC5MWQHRBL6AuCnW4C4LHjXneD6PZioq6wHrNYnd9Q5jdi5vH6ynQ",
  "key31": "3CRTK7shoWo31zbzTnFWL7YjJGHZqBm4v2JJYKLXUKrCZ8TwKUjnYZFuF4eP97UvbiwhFcmotQjQircvApjcYEFj",
  "key32": "3WacmRnWYALQd3VcNT8FEm7otUAERAZVZ6oFp6W6oUT8sfZPMHxYMtErKAKnCftkiPyha8Ljp3aMsMGaABwbsJ8j",
  "key33": "5ZV8L6cSXDCGHyL1MebyBYTPqSay8cvJrwC4TjNJ9SxK31ngyi5PLUZWmJMCZXJe9UrTDpDW28t59tuuWNbBR7vp",
  "key34": "LyaPBveCSvgLR45hxW5yRQp6rNuJE2494baCorhbc7CFm7ciu1CdP7bWtqNqt4dVDgqawErDLsp42rnX5bQvHws",
  "key35": "381zGuQL29jUF2sbfd7Qbj8sRs6cv6vVfRcxgCwXK8P1QYq5QH9nFoMKXzFMKsnxfBzPkdBC4p9JDKryxTjxazme"
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
