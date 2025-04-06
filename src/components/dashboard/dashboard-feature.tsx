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
    "348d9S8H4dCBm6cERX4aW4KSiz2E882ygUgaFUkXkR2pKg4e9HQoeC7kgyb1KNkYNAHj4CV1VawSKuxAQzC8F6NY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GFHwBvgQzaPmo7pVts3nyrEfsP734zjkTVSeFbQ8phEWBi13xg1b6CXs8LZDdWpeEHqz3Mga4pMkydPV2auSMKu",
  "key1": "5ffkwEpQgZo4SfWVb5V9dP7Mk6UH7RCWSgnmPABihbiJYKsmRjF9YoYvMxNbhQmUaTPD6JEJZnZQeVtJh35gwTdw",
  "key2": "3fj6aXTUUGUdSWnKyeUE5Y5BWp26rDqui5fcjYCWHLuja5rYJCxZfNqQATXZQoDnCXAgqX3YmmoB4ovJ7kTRNkoR",
  "key3": "VCrFABqcvhh3kZUpqkjBGhkdcYwDs8a8wGB56ZrRGz1wvT3hU1yKKFLqjduCuxgnJ4hhqArsPe4cAcTPnyU4SX8",
  "key4": "nDFRu6tqfyvSmNyoRQA7wp5VK8Yr36msLLDuLLiL4ec9wxWyAtyizzh5Rn4EzxoZ8QXKEFg1naCEne46MZNZiR2",
  "key5": "uS1cTEeEoAzUqF3ue7YpG13xYogXgfhr9yfRnuUeeFRTkCKa1rYkuRA2JKHciQjP4KtkDNjVtsUVFKxz8g4Avm4",
  "key6": "4tJLDZeTLVN36asAxNXDi1YQhJeC51iZJLaQWKcYhTp4M4ahEpQJkmdSeL2A9gGkB7VRByRQoK6V5SB1WL3nCdUb",
  "key7": "5EEPmAg1m9P1FxHZrASMXYcbSY4FzpgSccdoMC8S237wR1ZtBTNmS3Pte6UwNuUtZxYCkVbjSGMANNufGGGknigN",
  "key8": "277gMv3bZJg1zR72wPK84kdDob5MU1W1T2X2jDhEcw2LXWt6CRzAUNFscyEdT66XBoZnawq2jmoHMDdcQKpiUDQ5",
  "key9": "251J6FVsJw9PbTpJcN7whze8d9HqYwHnHWZZck3Z1ZGA9ZBL46yPCGmyvLbg7qoPYRdPyEq8fNFie7aKrotHEisc",
  "key10": "5fZR7KDkLzmbbLPhSpfdoAFGsDnGzEdD5FAUw59BMcWCFmQWdvN3qzgkoxUHhX5FGSYvDF55SqRRbvfW6Cq8wHb1",
  "key11": "61ZDKfvrJCBCivXChtQ5qZ57LhMep5UXRv9o86sPwRTPDdJzQdpFbsoVm6K7EAjpifn26CaU9zZbnFhEH4YVZ8jB",
  "key12": "FVmhsQLRE5dpFiK2vKdjyhPnkuvp9SwUFgqRDo42pCdqAu4s5WVGk67ds4NnkvE7oYtLRDd5DqRSG8nKu2KmzYq",
  "key13": "5cABbuijVQPd5HLECixLoZzMPPzmGGGKhrzNE7oZ6YyJEm4vPyfUgcHRGCU6n5MyMkVgSx32qLQQRWPFd3YWaT3b",
  "key14": "47VD2eAGWgdXzUe5aozRZF7xf4qm4wK1Geus8VQ3mKg8CW2wsTiHwNEWicPdcxHQUtFCH2kp3LsAorahWwuk9DL2",
  "key15": "2g5iBtsZGkXJTKkgVi4WrBvMc6gp9kFoNcvTn3mboh1D8AbuLnRgL84vjopAKjAajYt2trAuMykciL8ZoEqd5BGB",
  "key16": "2aRJgWCSAjLKsSvgfRp5xaNEvESmqd6NuTSvyUWrq2cQDzh9AoS1c73tksmJoEQAFMTYvBXRL2FKbr5UY7hykcXu",
  "key17": "5tNP8jzfYaaEenfka71ujEwsmG53eFuuTY3W9PmWBnBUpxL953QivtoPoFe6RGHUdpXieNG3NtrrNFNBV14F7zT9",
  "key18": "4BfgrVj4xFBkauhBErU38wwakfwZBSm5HDbrKMzbLfb6kkpij8qiTLpHYGqyxX1S2tKNx81CwTSn5pcNb2NgQrcc",
  "key19": "4V1HtqUA8eqD9mBAeiBKGVJsomUZzgpdbxbzAAFjaDweSH1UMhkLJPH3gFLLxh6gmWgbwSkMA3CiRNgnxLtaPxb8",
  "key20": "4LS3q3EBABj7YxNCWLq7kQZd8s7Y8ZvxdcJscMmvEB25Ja82mLtnVn5HwAm1bNuDAKy5uNMgZC8zDXoFJNaHBNUS",
  "key21": "4nSkoTQoKe3jZpeGhYDF9g2yVc1B3i3NWPGGmQ7PMxqt8CtWQKrQ2VGZWsh1zUcp7teqtrw914Rp5r8brvWacTyg",
  "key22": "4sEjtsMuQ5oMcp4V6v9i6vgNEG7jsDwhNs57J6eELAG7Fc1YyoBsfDdhnPoRFy4NCFfcSU2mac9ee9NBA516tZqe",
  "key23": "5EqV8RsXm3Pm2hZa5aJGkfZdc8Tw89gYQiE4AgpEHtpcVfrrAwXmp4frvRxCZMBR9jyhD5FUXRid1vGk8v8JvZMd",
  "key24": "4ruNeGNAj1mfKTvKE9WE3AQyuiRoqhncH1rQnVsGNKjPr9BAjfKb1XNtto1v18t51kTbhoA8H2ECJzYg2QHAoBXp",
  "key25": "56ZefR5YAz4yDRRpq1fFdtnxcQ1bMqvuZUdMied1deQGgpD9mCW448g657gHbQxMcJ28hX1qNTYk9wNUC6o8Z5U1",
  "key26": "5NgigLncw7XRFZ9DnDTZKqPujkjrCe3iC368Ry63QFjyKFcTqhED2SPW3e9c9y3EPrRNCQtgp3s8HoZ1cmaS9e6T",
  "key27": "2uyHhwM7657ChwZ49EBpH5kRVBPrna1TaihFnW9yNA2J7fkDfUePi5DwWBeoYkvS9M45aoFqgQG3VRYBj65bngDU"
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
