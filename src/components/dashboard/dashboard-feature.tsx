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
    "2q8Vqqo5MBjNVr7rfCRsLFyQk59u8iSEpT8V9fbkzPPGZHr5eG4ywoW3yJZSy14wgwfQv6cHMTsdbuY1fhhZWQMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48m6527RZwvaq6bJC7VLWVriNfDNqVSYEJL389crtDaRZZMohA2Xn2fdjQQRBjciUHDFmiN2JNP37jjzdVj5rm6P",
  "key1": "4J41oiNtSkHnACpqXuJ8pn736pLdVbnC2mfi4RTH7PPrVHJ2cVeVhXVVeEyeHUSdytN2DrMCQyeVoviVM4JvTjG4",
  "key2": "2RzKm9N6pJkLMmZ4BZ3esceBaPLeBG6tcsSv6kJaSudoJKLt7qS19FzTsAPUSR8STbUQLyzWzz5wRN5hgA41Y7p8",
  "key3": "2Y2zJVcMcCSdQFti77KZkCds2dfYDS5Bwtuv6dUecquFEDo2gH1Gova6sGkbEMMFCsLu1sb1Zks8vP2uzY7MSUus",
  "key4": "3Ui7ZVp3iBN1gfxVsWrGzkSGAiwP7NABCZ1U3X11KjzDv8kh9RLqW1XjH8MJmbkfqye681oRyczFYapjVHG1MoHF",
  "key5": "3jZxk2sQuW2dNSg7zYVWukJnd3nMAt3aPY56HGCanEQ2EdXMamNxrQb2Qo5bfM8jB7Gu72F3VGhwjukGL2ggtExq",
  "key6": "chBUeDV9NZtdjhHeiDxx6oMDWuHQJcypnswmGx8G38uQYW2vcRgTzWfyTdzN3gi9TxJd7NepddLTcM7eJghtaJh",
  "key7": "5grVnyVotUnWP6JoHyX5mYt6mRR98yYBdSK46emnULRS21yFcjic9J6RePmKkrnqHCywvgsMLL8nLWMjfTKaUTQj",
  "key8": "5tYqfT5f6QVjQgZdAoqK13jdJ8VVdxTRzL7wQuDqS2kTrmVht9JKAfTZCV638ZKLt9kGWFQq7id769frUBvtDYgr",
  "key9": "3uLuL8Rnr6BsPDWpRi1Cebc5TTMYyzVgteHfvZU8oqobXGZnuXxc1oRoQrzorsReE31guRMYmhd5LMex7j2nCLLH",
  "key10": "42pDZuKbcFiTNBQuoCxTTVQPpxmHJ3vEA691i35PoCVJ59ebtUnMdXMSp9Hh7Po4UZUfBr9wPjvsVyCS52yzKrb5",
  "key11": "32DC7rmwyND3RukkHJPbnUFVEAKGpWiCcfjimzaxka8BGftuCN6CzDfVa8C2qkMEUokQTmHxEDmb1TXQuqk5APMd",
  "key12": "4GCaBnNxcKS9BV8iUUY51XxyyLVHXZEqdXYzW53VPFP2kSLRjvXmFjwDMkBDzLFoYUnDfnucq3U84DKk4cMhsWKX",
  "key13": "ru3mF4mNTfyzwSRvYKgthio5Jb3AN6gSZwn3VUc8Y8tB1zjkc3vtygE8n5gFAnE5pHFRHAdAYVbMATwkUsg41uv",
  "key14": "2hpdoSbWrxdu92Bec4ibJUtXSb1gDfRSjPArbhkNpv4qJY7XXE5b51etGTgXXNYvCtFXvJsyY3mtm5Wbm2PpMWD1",
  "key15": "4as9dgZz1KqzzxtHsyuHxop2Wpw6FnbYkL2JvtduNj4WREeYmMn7MznCxLWbiCuFEqMYZMbLzsJJMArKKe9FGuAv",
  "key16": "3G7HC9BeCpnREedqdBy71TVFa2mawfaSBGfGacZmUpW4VgvsxExrS868pZ6C5NCFwPMekQ8j8yJKEGZseA3ynHox",
  "key17": "nW24joUiyBqpnyCowRvmAvd1LPMfNqsZDzXe39Web1YkpVaXz7t44n9wVfbLpE4zdnUxkWR2j6hyP3vt3N1Mwon",
  "key18": "46JMCBAquBxTjQa2FUL3k5cByqNLkPzPDvfbJHMH7s1tvTbxBLHjYr2i4ggDmYVV5a8dLSV5wptgrHK7sujeKkUg",
  "key19": "5XcPXrkwUXB7APaiPjYNWzVj2yXC9sY4oN98KF3eUq4rrhyWeGcVxcBwCcZpKqaPMGEMunHnQEkEcVuni5tNodRL",
  "key20": "p2L8hdMUXQFtpSG3D1RNK1SL7mP2xQHPYfqsVqXtUuXN6NCBQBqdteVcAb8vq2JWLcCLcSu1otDfjhMXuJ6uiVd",
  "key21": "5NgpkRMgUKJ92r7qBURqqeMNf4qaHCTX25zouT8qxVUGMgeBWF2VqRgXTz6DqkhFtAj5hJC4eVPhDgLUKuooL9bd",
  "key22": "5XG7ufw44m1zM9PqWBs8sxw9ngMi3Bt6bgD9gKaCQMExpi1r16CBCJ2pRxKkVwAbK25QRyNNm6zEx9kFYR7obgPg",
  "key23": "3tCxG2Ydf65jRLPBUWV9xxZEoYauvcbMkRf8TMoLnS96uxi7uVXHhoMSiHJEZ9jGUNgV8THgwaukd3hP1sAhfyTQ",
  "key24": "3aMMKW2h2NZuWqZFMd3vzt3nuBzsU3DBrsevFstYoLJsuHLQuLiimmn82gC1Fy5wTAJ3aixLS3JZF8MLTCN9Ue4b",
  "key25": "32j1VGEdRZLQcDtCsCPL2aSgQAa2T26YnT25ZyFwhr7bsDAbCz2CRntiiCHmmve3rnfJm21YynvrWvUFZcjUxqbZ",
  "key26": "4LqrAP2reQDgLKYzxGmyR4GRaeHsjgh7mF47Rmw8o8JC5Q2AF9fji6C75vPCTumJiXDWrqkRdQ2C22YGF3zrSqfR",
  "key27": "TSSdyeZXiXZQMuwC5wsyZEYnHqLW77muv8rEMXdQTe3JdDcCFEfeN55gjpxESJEir3r4XKRWd6tPdVX3uGsgST2",
  "key28": "5w4FB7h9c6QhRozGsmc6VMAp4mQ6WsLZb8bKe4iFwMFvzomYpsndStaZkj6v9bDgAQm7Pm96xSkkqupLWDw9DrRB",
  "key29": "3yJkqt1x8NjigypnksW4xrv3EXJTCRUU5yLFBX3Gqr1uknWs2pQVKr2rVbLw9sau7Z6kFvo93SqEezWSPN3DkM7h",
  "key30": "5U2CqHG8dwbsTPp6CkRd3GrGzRzoQVHAkW9Knud32rYTFT1qjnnBhQPibiDgycgavDjwNEm34eFQc66GUj9iQz23",
  "key31": "5yQPckcQgNncCEpZFYbhDMqsBXBFnSjkZXsdi1cTVkPF48qqaW9n4YeH23M7kp61NLdYn3Jsapk25XU3GAd75UHJ"
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
