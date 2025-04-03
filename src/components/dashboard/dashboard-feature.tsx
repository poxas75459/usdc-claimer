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
    "4ozoZxJnHZhAYoHubXq9QzfaW7D77jhUP5iVvMimZLL2L5AsRSZDcYrTftpDVWURo5jf5DP5xUuWHa8rHH4BjCSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38BHzsRJGVVnMVDdtPFxyH97hsHhSaR69Kc8gmJS9PJKBnkGsooCQqJgH8q3UftxwJ79Trrkr6AxfJMeVLCthFGM",
  "key1": "GdLuVMV7BSHwexPGx1NdpX6fu7QrXGMPhChHawC1GPSwMj5CJ4haRanuT4BhfRisk34xPejoE4eUQwgrAyGwHhr",
  "key2": "5NPPmnJtYQwW916TeDqGwzaxU6i1mFUiWBRnF9RNDiW9SFPr6FsNEoEd4UHnjbPwS7pE5PfDK25zJN2qmJh6LHDq",
  "key3": "qVZPqDJXbeW5dxnPkwK4q4hJ97gxJy6EVx6zxUaq2h1E71jWwXosdpuX1dKKDqYwWf1UPBwNPGhzXigLBJdMRSA",
  "key4": "8LajFtrYyYypaTZUB7iDYd6CSVKpnu2xRxDeo2DfmF458pP89EtPfkv8G4BDdGTrFroENVy6hb2iyat85EwwQzS",
  "key5": "46LPWRQ1pxoLq5oBoqVs29Yh5xxwS8XNdJNx3W86bwvDMehG6Y2wXKChQk7SfNHx3JYzRi2tpmttwAuQtcEvZSN9",
  "key6": "25F1zNo6RMfiRDhNycVXZw1nZX22iEa3qDZnqpe5MobyRo1DBYEh5enBoGbwK7fHYuuNAiNEfdGg7U6FMmDV3tv7",
  "key7": "5u53yBaHqckiDQjW5dpX13LtpY5owRuAc8o2DXCSdMMnywNdfPUtVhtwjw6hfzMmMX2uuqbAdSCQqnT7icCkxLEb",
  "key8": "5RoMxMmjZueXPtpQydZdTp57PGWq6d5Ugy7erA8WdsWZrCue523XSHBvzzaZfQGNKGGze8a5mheqy58kaQXcp9t8",
  "key9": "3YvLjB7qrivNgVLBx9rg8ApSZMgJ36kPKx3khdMwRmxsxFHeQ9aj644QdXhpdHAuSFCzWVBrEkxCYeaCxEQA62T9",
  "key10": "3KRr6ihJ9WbLJQJ53r7t62BUAqdDdphDHDcbtu2VyPNy5hTepApHZKpvi41DKdeWCQnRYPeyiAD3wTR9CMkJhfxL",
  "key11": "4APppmpgj2vh3k68UYggXvzhJsiSWjNf1Du2LzfeEChWVSc6rnwN5EfscZeRTQmpwqzVEY1gEeQnaacWEacfCGjE",
  "key12": "NjVShx7WLDVYivCsg1YVoxFcWB4qQsTurHNkiEkgC5wpN75TgowEnFQMbXnoLFFZJGDLDBr91XxCJxaE78fg3m5",
  "key13": "2TcfJUiyEMrf5jZK69gZmB9aeZKFMesgrF5bQpZKMDoAumzpG3kgnvKFa5v8bd3dSA8TcHvY7R4qRy8H4YfxBDc2",
  "key14": "2Ryn6PKNrLP1BHwCxp1AXCVEHih1WTdE6akVjjEq38ev6jiiHuMFMGbdRZ6j4WqKceuVZ6BBU8xhF6WRaPH7eLhh",
  "key15": "27YJJR3eidH9a9hzEScnHFHBuPTQqfegYSMycYt2XjfC5wszF6eH1NVFb6KhpQMRTDJig94c8f3s9upfvB9X8uDW",
  "key16": "2zoMQsx7X8fHmSnvPFDsQ3QzCc9LzRqcZhH33ftB1yW5KV5afGFuvp7XCF5UPMdtgiRnAQMpNvG3Jnc6RJmBBEaU",
  "key17": "5K351EYhdiKACRgVyL5Ru6W7xQ91US29droUVSVZvRmQqUBFHTcfDmaixDvETBGYJD5tDSZXfQRMzmtLfxJq7C5B",
  "key18": "4jkkHzZuxHmVBxtdjm5UZFpd8uYAB4cXWqTbczhVjwv63B8uCGJupStMNwyc2n5guAoD5cBQUvJBKwJPbr2RjMf1",
  "key19": "3HV7Ndy4QpXrEvxM917ED4vZM82epaCFNY2pFd8nB5FhPdGunrwuJLo2AC6YBDYMWcNBh6vjEHzv5VwZ1iryGTDQ",
  "key20": "3AVLVW4H5RKFNNGA1kvFHReL3C2faury7aDQiLfPLSJdQLYTZLEVnbNHPp5NMcCAttLwCVyLFtkyya61E4mV9f7E",
  "key21": "3NiDndfbvfMtiCaDHmc9QNkqEFLeSXT4PoCUURxyPWT1ZUTeGxD9kiY81ZrzVikqVnA9tdmDxKLEvdP6u4oruBhn",
  "key22": "2xqRrTiCRFogNsNusAP6mjpTgh5PQdHh3QuY8fVLhDRVR1YsFph9npthiPXGtGe5RGLXAz8P9PYfqzUWNbXHEZM5",
  "key23": "4B61wTw9fS56c7kxRYprqot9qRw4J3Dj4qCr5k1dYgtgfcLBB3VNz1kkRwnPsBJMbh2nqtde7Kwn4cWrfyVo64Vr",
  "key24": "4rUJ5Mj5D9Bwp8wodFiQJ6rb9ACJ3qncEjN1fLx2wgQcgk2Kcw6B2iU1PpwGuJwPXMMR2LMhRwot2dSfrkWLZzqr",
  "key25": "3u4pWWfFqGP7MGpAPfe1b7dY7sENwQHoe51y6yPejF6yoZunsFWkFht2diRCyKqCy7vmZYBePYTePp44Dgj66xDS",
  "key26": "5yu4EFhy9AQAC7KQdARqWVDsodNvuDkmvx4bPnbDgoRx6jez4F94y1PXsQVmJSPFTXjWryLuQMfKsSJSpoM1oRAE",
  "key27": "3mbV7kYE9sPUSqiNypymY3Meq1Nvjoqx66cTJBB9LJCCvi8czLZXRr632mCLEcJ5kzYYwVRasuJniwnhBNykQY1K",
  "key28": "3satP1PzFqprVCPTsD8CxW76yjZuJdPrK5bE5Ssqf19ykyH5GSPaYzD4aBWjyFfLH3NsP9uKhP2nVtbKhi1QcpGT",
  "key29": "2dJs8ooaA5YqfxP2hTZWaUX8pzamVxcXHPcVFjxaJimFjn29mkZmV3RnWN72a5LLE28FCyUM9Kg5kshUyuejxkUk",
  "key30": "5pj4rG8AxZcea6GXJb2yi3unWFBydv56tU3RoAdq7RREbS4hfcN3N6zGR9ziAKhKomfBG5529pMMhAhUQP8CKMFs",
  "key31": "3JCZ5gTcUKceG3qLXXLGw1Rrsfi8v12rX6PxNBmToEKbGkb1pQfNSirqa7MfYfVfQXyxrTTEV9RSK3sEUnbVRgn6",
  "key32": "2B6pUuxYzVSPBm47x1P9NdM5XKmNGthrqaFGLoT2XEbk3wToz9vwcD1dc4fRiQsPLr6ZgS5ud5sqs4DJBAgw3eLR",
  "key33": "epS5KZVXJvsi44HfEQVZdprr7UcZfDyYgXGAjCa4qUdqcfjwyuKcgzLtpob6bJPPAenwikAXuPVeFSYN5213HJ5",
  "key34": "5vfJT9pQj8ztGmsVV6rWrTwohJEBgzv2Hi6AVjGfFtREM7VCaTHu3AkhyAwCYZjFbEPE8tcUt1WyW3oG2GN2Ss78",
  "key35": "5iQ3QU96VzeGZjW14AzxQfY6LWmFzoBQHaWKTRYopKJ8hB8jMLCygrDzFjGn1Uk3oNcZLgRA6t8XME28uETsfwQ2",
  "key36": "5ssdCxaTQhnrGWNTfnjrnDrgmDjcTWUhQ3Qmm1EEojiXdKCzScscSRU5zAW9ZGeC6NVQJqb28CRDqSAFvfSk7Top",
  "key37": "3BXNDg3ipYmn2chzwXqVwvVvFou7xgMAifbmRmTzTHrE6bBccaDZAVSJrHawemFkNgJxiaShSXRfx4xzHUuLG5oL"
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
