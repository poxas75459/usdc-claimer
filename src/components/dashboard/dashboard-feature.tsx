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
    "5UZDWVGpw85gkPNc54JynSMgDr8D25DjK2QdbEHjPJPJLjLRHpxxW8LEsMY11oa4s8FCYPeDYYJL8RJ51HZ3VDGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YzGa1gk7Xk843BEajzVcJEHzPasK7A1ezrQ5jKyS4AaDKybZXeCtRTjBvq6ui3bnUY75GGYgeoKFMhBdD4ZLPEQ",
  "key1": "57T5FNQ5BvBHTFwALPEo7qn7eECdYCftD6uy7VGafroN5ofaTkbWLfQp6KKwRnR6xHcYVA21PxnWFk9Bs6k3kPLW",
  "key2": "3ZXFrBKNpsBjPCEjiTdtxZXjgcTFVfcPznVPtriKAuXYaLyxY8zu3RZQK17ZVhSzQsPohpWEYonyXs6NBhmLznpv",
  "key3": "3PBGok4NF8381eJGFUvtbYMQL9bDikeToyPpmym1c2L2paN83hQLNk4cFwGyYYq9u6yCHP62dLfkSHULVqFjGT8S",
  "key4": "5MApYcEWxBGo7yWSsyWQ3nXoWH3kZwCuXSphZrhJawkH1CSkuzR6VUtVBs9fBgj3XKuv1ukvG9vVUSb9mjaogV8W",
  "key5": "sLoLzEk2VUqnyoeoKy8MXuK9VkM3TeVDVMm9uJge2D6wr9FAJ1EqkvwwTPKz59qgDnE2EmMd8cPNiFM4cRA2488",
  "key6": "F5vqq1Y9xhVZmMwEiX6D4d1YhafcAkaZhra9L5xrQWNeMNDM2H4JmHpasVu4h1CxYVkRXneHDAGnMqAy5Hi4to7",
  "key7": "5fzE3TibkGHiMGkgac9W25rpWzRvNPbQzQXaLuRow7n4cVJSExjanL5gXtVGxAGJLqhFse1p1T69x9EoP2MhkSEu",
  "key8": "5tpfUkzFjjco45rw6uvVfYTjvb5fWgAD2kiA3FTYFwDbdECTVqyLaiHrKE8pNhw3x8arbjrhTAEsXG5ABJSV7w64",
  "key9": "BjdqdY8HPWHfhF74pt5hL9zpGhwSucNZZyr64h5QqAzeF3EqDzrxcgNEnZgypTdWzBT2sBzbXQfSMVqiPNgLab7",
  "key10": "4JBtwhtzX48p1VhmnZhdGBUDSMvoNivdsGUceZ1P4iHrDjsozkXXWEZpzgprvDf42gZmeqxM77mYCkw8QMmisrom",
  "key11": "3f49gZaQ25hTeG5HDxPeaMJZh12cxHpChyLj3KZPs2YNhmJFcc9ZLeA63GLn9EVtTsbQT4z1J4uaYqrq7AdiivaD",
  "key12": "41tjx356dQA3e3fdfyskGTjPpCCwsAyDYve3eZ6fKKPfnQnKh4peU7mh5CgjKjAT8UQ5b895tzdAgcSA8WeBU1j7",
  "key13": "4Aq3xHtPFEoesSWozNcmdY4QXULYtUtPvryKXKVvhLv4QhX4Z1Fu5CZPSDiCsRMrUZPekvAnai8VnbdSGQVw229h",
  "key14": "4Gipy13xp9qpUHF8HJc9kCy9itYnws6qUh18hVQePGAu3FvxhAXVHNnBexdwLLFp13ix6fMxbidAiG61kx99Vaqb",
  "key15": "46ANU8rMPe91E93y3qrq9UFXjzyTrCrqFmRd9jZxgqFQT1XctVM3BCECZ2S3GesYCqCsAPiZWxxWVpJNEty7LeQB",
  "key16": "28SLBvht1V4cwShPr6fuMZRmTvk5rUcdGor4W6GxETMeCnuV83eN6V2NRv3EkM2Xb4DPnufvJZ6usxvNF2cqH1Ko",
  "key17": "4BJx4SGzv3iDa1ucPzbxLsnveCkaaJDJVsyuhiDZYeubXBMvAS5X1LARCYMTHT1gasMHwQ2p6pLHFyF57JLTcpuS",
  "key18": "4ZqWpCpLBvhdMGkXp4Av6DEikGrJ52U88AQ3nTsyrLQp5YTuCCP32kreDcFtUdfoodDxcXs2wtUwDMsheR8CmJYv",
  "key19": "424yF1PjkfaVy4VJAeBCMgc7J9cfXKmVnQj1eZyiGjcwA92Zw49XCM5yvq2jFSmmUpEzAMhiUEZ7TYD5kvmxLR9P",
  "key20": "JYHNPDwhxkRm2xqNv9UHSZx5aV7XLUNLHHL2jeZAqC6uksWMe5AYQ3YpirdTxXu5bUHCNoPuu1hLJYHvcJiArMj",
  "key21": "3ehgwk1i3WAgLRbwF6LZviDYN9UQTx7qCkpAhKUyNBCn8De6owkjnmmbVpY5tpdgQsKSP55uNJKGE4ZfxsSmG1XH",
  "key22": "rdvX2YY7spHpWxfkkhrtJXP9oMuouZBDfVZxGd8pNFAdB22goFeFNH6NZLKK8y5dC9uwSG8jKJya5BMYnLhvz5c",
  "key23": "3GwzrNstsjGSBqkDzXT31oAPK9QDfccsYFBL1o28cTsCkKpPwEKYwVHWctvbKV5TZLobCARfBDoeUJ5DYEy2f7hC",
  "key24": "3zAdg6CeEQrUcyjWYEgpryQpbYXrvSrP6UfFBzpH12RnF5DvnqLAYRLTD9gJ3PNLvawYwJxBa931V2dwRMTaQgh5",
  "key25": "4aX2M44kEhc1xEdCsVzkzXq6bvM6UxWVsk2huABUv7oejnp9UhQ42tJSQ2691r7LHAW3WigPTwTRoFn4hjMHocMV"
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
