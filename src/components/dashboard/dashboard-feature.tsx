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
    "25acchSPhFMyBsWV2NLVdhGuW9qWJcLhiAc7KVUVNRxQGEzEeyAxyd5kwqXUMNTSHHK2xPHDnesReVpgZn5REa2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yX1bkmWm3HDZqPYssnRuJCXhuw9djCQ4jGLyRuwHaccxu7Na31Ey7Qnf42rZXMq3zRufdtyZZkQ2vQrwVzrsewV",
  "key1": "3CHHZJR7TtUVzrctL2ssDi4mdnqbaXFQDRD9pRMMr58NxZ7iEgcc7GFA6KH8h7uKap2FqPc7HgznqwZDVjrfxRBv",
  "key2": "4yUvBB3bwGJsbW9TMmjuXRoqSiJrYJKZeFdAqjF4BLe7FgWKhLTG1rMNJXb4aMeRuWLDVtdEHfYGSG83SgvLWuPs",
  "key3": "kNGecjb7pNs58iAchuw927aSj5GcLTWKmCSa1kVemnh3XDepFo3yzeYDwt5EbfezZBXxREjyVMLzQXM3uEp1Qpp",
  "key4": "3TKz9bD1CfKbWhsuJapg5F7aQ1KUTFKHJ7YVxsg9Z2w2qPUM7tpJhSWeHksk82c4JaZiJrPVcLoEhW8M5GDBsPfd",
  "key5": "4gaTVK7PrhjpdtZeTeYkia1bksLpAmoZb4oV3YcFtxrB4aG46w31z4bimd4JzXGgx1kKKwTXJKYySVn1pUm6tw47",
  "key6": "4jftLQAencg3yxGGYBvZGB9pCzZKnHcgCbMAXJLGR9G9cwsJPBUvq2vp8qecwjguSSQqFMdawsLCR1XocgApafML",
  "key7": "5JVt2PKdi1zDdgWgMmS7BkDvwQRspM2EJtN8PuTdwQJQBEjGeqCR6BALUo7CAD5bMKnzXwNBuMbGApozFUBtCZeH",
  "key8": "5ijx5uifztpHcR5qERYw4KwJcRXnm2kXitLWWNhTwmsq9rsV2tvuQUtnA57rW1LzUTEwRXFBQUJpEfutQKkdK36W",
  "key9": "3cNPcuWBSEfqcLuMAMtjtwbPZgvRuD9PxYffdwHbD9cEgXTS3bEuJRW5i9FqzzKqLBrrAxJtZ7NKn7pTB7o3RUre",
  "key10": "UXdWALwxQ93CmWMNkbeHbgEF3DG6qw9vzbeuekda4is8C2zhqsskHYC1Jm969f9yqH27BpYTWLtabSUJDyPtQYw",
  "key11": "3BxfEofsCaBfuBh6HWiS7SfuSLXRjBa7VRrPxsSadT2ePzQapAhuZZm3wBnMqtTKLMzTPMDhDsk3eoG2WJX7uCLi",
  "key12": "5RApwwDWJi3LGK9pm8Fu5imX1jGabqg7UV4E4XMRmtG4Fzohy8DBUzJDcjxZY8d5NFHAKiDSGE1PLAdCEs71GeB6",
  "key13": "3z1jC8918L96VE2WoUm1Q5hWqKgCuwcLGPfUyWb9UzrFdRodDZ1af18YgVL13hyvaKjzBqQs9PxECJHDzsuVTXQf",
  "key14": "4Y1AibrkaBcjffgRqqWZkqejGtvcHVms8jcLpzWB8nv4VQrzymwQQCKgyDidPgduAaVfgKBJd2fdMDxRxbMYFk4N",
  "key15": "3kWSEitP8XRVoy697szwDUVB5PntvYwR1EwwgUbcPPwWGhan9nFw6Qro6RwrnJZQgPM4DitgCuETJie6Xq1BW48R",
  "key16": "2G6Xbk3dXv2p3pusxxqhFYqSUifLhVjCafc2mR5DzHLkFB8E98sXupeovPc6jfPURZe7sbcKJgJkMmaxGm7rFEat",
  "key17": "5Uah7CALWvKB4pYEDYB2RsUuZLzMioXx1wvWeUVDRfdhy1bXfDkaWqNUdJGHQEDdbVvbNyNNKaBQr78bY4JBpRQL",
  "key18": "35p1KGB1PmCVAEUKs56cXZwquBQ2kaVXBUEsuktHehEjh4VAJUtb6ne7SjBnr9F55qZyTrYDLAmtrPEWKXPAcoNQ",
  "key19": "2CU62REmjrCvky25K5pJEzWgvcFM1KiKLcyD6ctaCECjWzKaX3oJJSXLTUh5e8oKndhksgkTtRw8TUFaejSByXhV",
  "key20": "2TGkL59W9bkP6fHeeJ2pzNVUhAQWFq1uGzF9vpdUKTdH9bcRgTZ9p5VGTqid1nAmCqqQYWHwAScCStvn4wv3Cc1D",
  "key21": "4uVNNkmBFrUzDDiNj3wL4yJnqvNx5a43Xtujm23C5fx53qjg825tanFm1mz1yRChshZK5jHqsGpW3KjEobjBLM5y",
  "key22": "3UCtM3ceCDSPcvXFptG5akCH5yaFfai615SiPwKNu7Px8P4yx7Ab3D1HwZAFkaYiHFK28Y3kWidLtQgwCUkrdQq7",
  "key23": "65Z3J9sjNFZebLehsP4W31ggwoDmQTuy3xuQF7jwn9kfmSq59csnsx3g4m22pccGxvxWmgewR6JXAH2edgdPMapx",
  "key24": "uhDYmouLasJocrxbDxXmvFx69FzQxk7Tgz1GP5Zsp7YgLdo2SarcD9pyi2k3UVUudZXE3sEM3pazqRpAopa7sig",
  "key25": "39yxe2DTHMkYwRX1i5VjDbQVh6htcB1LY8nPd6FwyCtTJnPJeyQeZwwnTdBY44edwtBzGZvFCfKTM2VDQ91ekhMC",
  "key26": "2eKY1jT2qh8XuyLXyRGpcUbZXTJetf1Rq4tnNj7qEmXjC2VJeDXnvGkCqAZV5zMyjJ5RFCBmyKWxp88cgi8jabAF",
  "key27": "48GfhQz1gf2cCgTeD3JTbYu4Uw5ABH2Un3rj2o1wPDVgjrDsD7KDvwcWVKkSGQtMg7v95bRR5QujfL5zoiPBKMde",
  "key28": "57JWNBknApRTLwGX4eUfJmn22PhMZvdgkNdrQTeBwpbbPnuTY9y8a8xZsRKYJdDf7rJsrkfEzrHCMq8LzStnyGpp",
  "key29": "29vbKPCE6og5avEjZsNh5TPtvoPz9fJHgBxqYZtsXrPdi6uW3c9rkvrTSD3yQw4eu2H4VWq46FqvYcJhia8pvb1Y",
  "key30": "3CqCva9WF7k7FWzGawqxdUdYikV1CRRLnAQEHQyV4pmJNKhdxrhoFkLPRyDkB2CBtTE9K1ZAZFRKEqCgonG6DXi6"
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
