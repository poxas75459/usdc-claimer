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
    "3nKhzFv5dfwSNdRwKK3CJf3D7aFAduu6G6rzwyiBTUhK21y9k5dPMoUwjGMYU7RxjMPYPD5rS6wuhoJSMX3waJ8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eGHrAWaBefNd86jue9UfnXdg44r5ENkW8wLFVjEmcvsmqJ3AHjNbardQN3Ki6xLoV8SLfdnrNsbizyoeNw1jAxg",
  "key1": "5JAaKNtnfyAhJcfnbhmFdCP1yCza4RXCPwtpsRCogcrX4Ep4MFt3ZsbotkrdHG2W68xFuRW8SPcyrjhteSNbFQTU",
  "key2": "3vTo33x9WJCYHzdYFNH57aJDdgPXTPPpuZEJvSgPF57Hp7Akk4WXfQWnc5Tga4J4kJcXL3GwJBtNaXyBLGrYYiY5",
  "key3": "3uLG5NnHUNroKedHMUTQhEGurW2aufWV1fAsVB5ZSA7iKJnQnAdoqPmLUZ13yyjWuWp9233CVcB95gNXMWufXJWY",
  "key4": "5xzJw5xoNqvrqFkjszx8gYT57F7Heh9mLVtMKcRufVFPmjfLDRwso4REtuEXiKhDvZtmT2MdoFtX8a7PTiP9X6Bm",
  "key5": "3qfKRANz4CrsadBq6nepGPqaKnRwe9duTjA122eHXVP8iDub1c9AvYqz1eD2kxuvhwehH235ULXgwfFQt6gXYAvf",
  "key6": "2xPkZmcyUyqcfurEA9YNBMhiLU2Ck4ChygK28XYu8qXZP67uc49C7pBdmat3fpTiNNKN3ku6DHCqoZBGNeCUsJUm",
  "key7": "41cnycoDSyZKrxEiA8KPaFaiixa9wzJMg5ihByueeXZSq6GRk3o63dPH2m1PTZZaC6bjwYkD1dw1QJ4aazt5QyTf",
  "key8": "hPk3n2p51nPfqsoa2T5WJtatucKRBiEvNsmbbmLJULpBs4oCQ5TJUYhrAaPUT6G2CkJAPLkiXUDvhuztH3Y1yqY",
  "key9": "59HeUkNLEJQqBH8CJ66q8vsjMEHRSqpYJ8smQ5jCdJAyyL7cZx65ByMLYDxZXoGTB8Fa5ydGePTFUwkYV8j9P7C4",
  "key10": "5WLSk6tr9d9kH6imcEmfCzMuNhGdnqBZo9cugFW1kndYuAi7mrDGMfa1Thk3zEwuHbyfwmMStz1NruMteTSFgcEk",
  "key11": "ki7jq1eB5146XoX9CPAFPv7RSepdimhaE6wgVfKYo5pLBrmVwsDTc6k9mbCEwTwwY3ZwxR1CXhWRm33knBJeQQE",
  "key12": "2rH7pJnQPWcGVX72DcSim5Pb6kU8c5qKEAJkgDUyg56fvCMtY7irKC4JEsNyAZsmt6zubAAYUhMBhUeL2eVvgWTj",
  "key13": "2gvZnz2JvHYjDSCDZyCbuvz9YdRKDySx9mYKvTDLYaMWttqK5hyrjnrSYCzFptuvhBEQEdARWc16gqZGP5E5V1X1",
  "key14": "3jjiBXBWeFmi4VbNBTKoYJXWoJurcE4EpXbwQGqEqSgmu7vuUzo1yeeTsr5u1xA1NQpM6VJHXvj4oJLCKv6Z2bTn",
  "key15": "4e89ag7WqNoLKMbdK1CffRYPsGyzUXEsosN34JaMeMBF4MSx5xHHridUJV7sFwhGtxGQ4NGPZYUuRUXsqWPdWeob",
  "key16": "ZU4FEW7CzPcCj77BHGZHqGBwTfJVKK3mbtYij5ZA861rEH3xdDcsK3e1gNAJsjLQ6yVvKpwUVvsuRSFsgHefmDu",
  "key17": "n171UNYG6LYWVatoBMCvV3zhJFGRTFF6t9igC4DAmHP54w74T1A5uAjU68T9V5ZoufbTcc6mwYe2fTYTECCTMf5",
  "key18": "zX5vKCTdjX3iQKFk2D9Dk2UokKHLLbs736a67VS6rMoU8zHk1qwUtRY64fmnVyucCFbZtJgcDQ122dKEWhm1Kce",
  "key19": "DYsryF6WBbHhnqmScKSHSrxcqHEhbnnhDcQfzo5ek5yYAgDXFP37DCKqbYKJf6K38ojpgvWiWjL6djHJrJWHuQ5",
  "key20": "q43XoYf2ANvdW4DSR1szYA4UuQoPRXoqDAV4VG7g7TANQZSebU6puoW7aBX1Ksvm7hwc9iymk6Wvhx39YXTFDRS",
  "key21": "2As9aNS4n5M4NwS1pMJUdRYrFaw51QLTMgczxifEJpeBATnA1To5i7WEK8pkSGtXrpA5YM7bGM22ncAv5sbcnTQM",
  "key22": "5ksasjH4PSEcTnJZoxffxtnvuzkC7bsT2eXZH8TAuzm5wsz9gabzBrXFaYNSpdUMJeuWKUUKHcMZCd4v1BTBpE4K",
  "key23": "5epa8V9yjBv8tj6NZeqBtdb5yPDzkZgQ99nLgLiyGeBFwTJTeCZor8G8nd6vBcXvU79Wiqi7j1h5M9YgPRfFZ4DM",
  "key24": "5V1ZGLtJ1KFQDcZMSajcWVeG9tXmZFTVDeH5prVFiyVyiPN1QEoMZzegDFmMUXvdhz1SM6KXRvJsc1EzHRtEwWiP",
  "key25": "wh9XS9neQMfXpgg41jf2YoFQC8Xs8PxeGnTNeD5jBuV88CBvgLyno5NjvR1qigDZ8tjEKYGbCSQ6JEdW2hQMGd6"
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
