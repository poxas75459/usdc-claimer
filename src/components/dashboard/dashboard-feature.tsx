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
    "2cGx57eqets6of4fZLELdrigDbd7kixRR1QxQDpmokivKrT89EEwgQAhq2hzmFnyU31KxPXwhjKiNHitdbJRkW2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c9bXjGp21JF38AqDgbEjdpRjmidUEjiuxjnGtPzenQKwtYbzVFfmStpEMdx78TrQfLquw9ayL8bNUdo3HhjM1ZA",
  "key1": "JXxnJd2NJdTyiRVU9QWDcchGkwWmCHEAqq3mxTApy2VnKt3mLbYgkTFJQbXBumFake9mUuX6bcqpRKtbtFurRMo",
  "key2": "5gacghZLViSAaqvSwT3u9wMfG9XdvzmWbcpKkCAGqJbWCDS86hGKfh7Bu9GpfZNg6ZJ9M1aScTBSP5HK7hALcmfR",
  "key3": "iYKu2Axcb3hiSqfe6KyQS3YrwdaJKb8mLM3akhsQxWP3RBbXTX2Njs4qLcbYRNKwbVxShdTcYJr98fy2osREJ1U",
  "key4": "Pu1VHqt7jZemTA7QpvE2fU9s2CRKSperHn78BCzoPrg2UgLHBzoyP5HoVu2ZD2CTsuksUkcymfM5Vvp7Smx4GJQ",
  "key5": "2Rvp7uXSaLAkcTLmS5Qp9dKNZbbbuJCsC5WGsyBD79dqCfE753XVrQNFPgfxHz3NkteD3GUv5g2opN9yeeR8Db6Q",
  "key6": "4XuJJJsQnKueXugWZ5tjX4LgBqX2Cmf1Sf5vxQjq19gbEo4ecU9rjGeTsrLixSTe5tvwqWNFJcMHw84989sgNJDm",
  "key7": "2uiWSEipKYhRKtexno1ehCwg4Ea2qCAx1d6LM7vKNkz5uSDTXhydYyiFo5rxWYFQndxJvJbzDzRXeFLBeWYxZsdD",
  "key8": "23usoTLfbCtufLXi96Q1A6V7Sf8G5kAMU9zzhpHzE9UptNEd4C41jBvnpGkVSNXiBfbnNTw8oC9ggsEAoqoGbu2E",
  "key9": "4oueLWsaEEhN4TXnk8nP4jZe67hSQDxJ3vfonsHRQBMH3dASsdbwxQswwVo6CvWeUR6g97d5518JzjhyKU6FTLVm",
  "key10": "5A4tNRCwRVLA4UmRLLgduuAoEVtfu2DQdW6pUk8qmkJverrFYDjaE19UXUonrdHBQwqatREirDoGq5b6S9W4ABQB",
  "key11": "3omF2SbB1oRWNHxhyZVAdGptPxc7ZcUsG6Hn4uJN1QSxeDPmtQQJCJuQxVP63CQTg3SojmPS8RNWUKwyW71FRenh",
  "key12": "3PoHspQvbDBCCJog2cufLsTJEMwbh4WFnLUD7zX7hUw1WbRCogXaePeY7cECKrLRY3tBLcKdyunqYPdhWEbAgj27",
  "key13": "54ZjDmsEGch5UYestRyoiJUt8yMf98fuWAXGZM8kkfWPaxFiEQyg5gCnmWMaT6LbCB6cna5kZS8BZ8uSRrDKVFyj",
  "key14": "2yWaWc34xAQoy9fBEu6NFpdZQxP1BpokrJQEz8GQBe3d6viZzn89Gxkkp39tpwjQrjripSa5ps9NJF5RXkz7gAvP",
  "key15": "67Xhkd71uKfcij1udWdnAhDNAsLsUAahW533GXYLkewXAzYbuU53K85SijJUbu6ZB5q4YBQqkB5wZhJTso33FV4s",
  "key16": "PDxtGAHV78jrDscASSf9hWsDW9aqPrqeFNHHv3R8sLB2VVL6Eju3jCyGkjHtvAtiyu7JMQoyxUfSJJg9fgp6SpP",
  "key17": "2pKMRnvaWMQWLJHuaKYSW74ZLS93ySHmXirBwpKgQqhJaVqg8pAuXPQ2cw7EqbxN9RtovThhaLCGWNAjzE3cjsDx",
  "key18": "4ufVeApN6EXseiZU8MScSrr5MLnuwCHC8y5F16NYcVr9utEa4UKo1SAqxK7FzkJQ8vYn1bVv157C2eSmc1WWjssv",
  "key19": "2TzXFEZSwAKb3chritsXDUv5S1tQuNXbeZbPi8sBUFA2P3t5weag1gNy2UTnxDixdgp9DDRpk2Dd4UPiuhFhyGMe",
  "key20": "5uekycpBVrWegy8qRcx5z3oBzzerQd3inNL1ctT1Su4mHkmTMXPFce77em8vzRaTkDienXCiL9Tyki94po5WyQgn",
  "key21": "4WPx9MyimU9QmhzQWozBNYgk8jMvPEM7dDUFuLrqVJ1SmfxB4UmyntzK6uZTPut9yZWUW5MdsNAn6xSRfSucvBT",
  "key22": "4E45UcYtbp3Htw6PTUgw4K8yQCgzrwDa6gryvKfAsmryrxBottnZjEikhRL5ugumir6V79f4YQus9n2Le9gMzUCH",
  "key23": "5w3BnQtXU1fpopCmiVbKGAJzx3QRAbyueSL7oQCLtLjTJi6SkiagXdK2heC7SjQpZA81yBjzyZBxtGj6aKdLNrxy",
  "key24": "3pE5UZja1m2PhYhc8vXQ7zDuN314488yL9hgSsqnByCjSiHsm8FwN8egLHRjhWBDC4ynFD5ccJkNjMn6YtUasJyt",
  "key25": "4xrJe2mSUqUJUtGPKWFcpMguA2pYptrhp54J4kYNdZVG47EN4bV3TUyMb5yMMigmRfrP3gCymGb8MzzX3BZmBJw4",
  "key26": "47BtTts1522FbmVtFwqLQXCAiRurYxHyQv6zuaxyCAcQe2xFaHKoF8LqSiocucRzjCk8qrqpCXhLBH87NjzhEnn9"
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
