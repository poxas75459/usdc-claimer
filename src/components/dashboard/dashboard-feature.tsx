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
    "Q6Lm5yCdwBdkQVPiKmhPf3jmM9whE5UJ78iHpQEVNvJpDMtmbx3sXCsgikUdNPjhUUmJniaqhbZVHEkFAeYoxUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zuDTNmm1Kom24MvEE11AZ8gJBEAaaxMNTtdbuPmuNLnqHmbtcbogZZBPLMWsMcms4i1PBY8fco5zArNjAX81pT9",
  "key1": "3PBVhUYCRctkwgdpADetA3QkhceiRw1DAEmxoWEFpUMfBpswESGDdav5tE6K37HNzprtpECo2LdYzjJwShYJtxXK",
  "key2": "2RAyN2ExZSd8cP1ptGedgajEkhxjsbk57bM8FGWWstipUAY4fqqqbFmq3ZeJxh1XrqFMMrHfRg4kXAS4feoQhfZY",
  "key3": "5meN2xfBLHpkpq7xWP27FPGqjisy4UupmRNhr9MHs9hCzBFfw2bmGn19f7yqbJkASvutD8EgujxpK6FyX8cYtGkK",
  "key4": "5XgXXyTeRax6qwjrqMA8n3i1bnC5KfA7MPoTj2fSoTkacgDE16Xbt5F5cL9nx6XKurDgZyLWQDpPEeJ8QRMnF8fL",
  "key5": "Uyw99RS14L3LFkcXJVTzN4GWYrimpuX1PNraJDWpgDAGJS2xhQe6AVGi4cw3zSA2ezywcdGp7A8uVREFxJwh5B2",
  "key6": "43ASwS3BYU1WA7VKqF4fHgHJTSZofLokzAqnLy8q5EDYRCEjkJ2MuVqnB1d84zT1UT6rYtZXSvUDK87Qq95CertL",
  "key7": "3FkXcNqRuE5QFvbnQ4ch9sg6g2LmQfhEYdDUuTLBj1WU6Cxqtz82AgLueq8kYzkey5WN4ChhmsM3iPWe3yDichmK",
  "key8": "4WJd9GRnyxfWVETYunVijxMX5KUzsTTvktfBPdu2WGEfuSj2ACKdH5KNz155bjdrTaVJc7dv1C6hCyDuh7n3b34o",
  "key9": "XQRRYTsXbv8sionu3ySXxovbnEcKaNKNT2kJ8wxj7QmQtnd9T2a2WJuSTsDJRuJ6T2AQWHVZpb78dqhqgz9cnch",
  "key10": "nhAqKdPnfNRSz5vAHKtRktn3tqTgEdLDtpxobp5ysxTBgR5Y9GtGTjUnZKMdtzLmFgFwnye76Kp2wp72MzwkUsK",
  "key11": "3WBfBHhPTBe4x8py6VFDEUQrN2j8N8sVnd1r8UgUPh9LiYC7Y4srtZ3Xr7AtUh7ZQGsvGYciqdWW9zTQMrGY7o18",
  "key12": "5gsdccpgdPsNdEbnGeYGrZNaezoEJfypjX5SAKiPKtXvr9UYFAswEYwtjEW6MmJPn2jo3tW4FeaGcCY1BscrTsBB",
  "key13": "L95dZCL8VKjMfNvMoKUBGfCEfn2bm4XVEd1ByqX1jxmDwfnPUusWS1aY3h26DTyMzQS8dSaSKcPhKkwVpZugUFB",
  "key14": "5VVjqrXbuXczf6zWfeiC7tzwWNWQY2KSF7SxdSjYshHXggmhfDRJ91dWGo6pLxL5hfSFopzELhL2PVie2gBQUfD7",
  "key15": "E6cBLu6iXbG32dLwr2esa5eaonmTYef3s3J5NFzceT8mtKp7sgzaeRm9N5aiQup1K9npX8Edxyv4b9mV1EL2dxB",
  "key16": "jxEGWcVPbyX8FcKySR1vQVctVVY9iaLa5ZstVaYYV1GFTqwKAMaadtSj5B56orvJELxeMgSD8p6BqDCwHcRmJSn",
  "key17": "3wuQrT9ouZjYp2rVFEA5EwFF58Kad9zaR7ZMBqb2FN9ZjgWMNGQTNsaMLccanFLjBCQmrx5nqdADuu8DLbWYTzik",
  "key18": "4sSG1p4NYzKtzz2h2wf3NykuQGgfdBdaKzGdkWjqTnt5bRwgu2CFoEen2uB6jPhATD64XtaTnrJqQgWe2TbPr9D2",
  "key19": "62aXqDDFa6moLQvDMHEEmNWUDcBuGAjAPuTFNYX6XWKBwZuf1o5wqz2LACKuwhxDnNzG2X42ex4GnvrjRwFH8KAG",
  "key20": "4SPCaPS1NwazaS1MpYnqqFPMXmP6DoHADgdDANRBWZ55zfSKF6EiGPu91uWDPod4WTQpFxj9x5rHQ7WmQeUsL2q5",
  "key21": "fYa9bs6de37TeRFdpoLRVzzXp7hFrWyCLtK9QJiw2f2Q7c3kRLzjMx4EhRtDE8dztPSfxBqLPRRQc4jUu2G28FW",
  "key22": "44e6X6mBu1mAP2vf3mVGPB23N6ddUpaMA2JbixVEMbNczpSuQzz3DMx1HjHXCkWm9XREp9yN6xSk3AuefxShCbUy",
  "key23": "3ocdGxJXY8puNFtw2sqvkLCC4XtAG49GAzZHR7QnCS1MV9bCrtEGNDo3wtpAj59wifasVSHbKuKPyyBeyVBn1eD7",
  "key24": "f9ZRUKqNoeyHquzfqoVLES9CKpHgRcth5ui2bbYqef8sTjtTQzcsky38vxuVJthjXkU5qXB4JdoTPTrFVEopzGE",
  "key25": "29ybK6bj8NTacvD9Ls6gu83PKCaGFnT7gD87XFq8ynqSJzuY7dwcJiLPz4XB7zqbT3JDhtRHAsvWaN99v4Rc6EfP",
  "key26": "25iFidsXkJhzYFFkxwqoxyKU5PucCs7fs2RBQ3TSYc9iDYqmtJqnd41DCe4QmAqguvqhEH3Kij6J9Dk45hLBVXup",
  "key27": "3QfckvNgYDdEAcvsMmmwTUALJtyVRVrttTdYsDrUJ4NhwV3fLiqqQkeZtg914NNzkiexJhB6UzsuwsjHeksFRTTf",
  "key28": "3K8sCG4hyCMonM9KoDX5pAaPNJARcY2iFwDoR4khUs25c4Y8pxQMgBjya7yVB7iZNtinn7AcXjUXJxBP7rzcRzyw"
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
