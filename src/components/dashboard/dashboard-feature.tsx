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
    "2qd9pqnnPVmMuqDqJpJgLU4rgkbXjvNnyhziusxScWqkXF2aPF63EqGtjK1kZx2Gr6GeP7qQSRFFR2PZnAdTLuUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dRUamcbLktSZVfDGnz4VwJkDZWo28uMP9cjez6mx81rzQQqsv1aTg7mSbcmEm5ud73NxfHuWMBJ914E3aMoUhTo",
  "key1": "3LKNfYAnYBuEFawHYG4Eg4gG81AoeiqVvhNiFwJiLZm1sVKbawWxQUb65H2qhEvpBN2JrCd8xeWo3VfXfxFz5mAX",
  "key2": "cTXe8Us5tRo4LxTHr5sZTVVs8j1Gy2Dgg3Xoehdm2oQXe2GQMSVZPrnpDqtAUvGraRw45xWLEQRf6i5ek3VqBfV",
  "key3": "5xUuQ236VLcjro8hNMs1kAy5tcGKGxhvsgrU2FEHr6YiJ2196dBTF9bFwKCdaDxhSaUZFVjYGJ5DRBksQ8rf4HQ9",
  "key4": "2uuw5okJ2sKPhPwhGp6HveD4tMofdDPr9RsykNYuCVsrHpaCWdPMQKEyDYkCBcHNJubPHQXuND4gPaZERdzRPeiz",
  "key5": "41TYnmnte3V6pucLu6tB5zh2yZk6JU76oL4mxJwSfeiLgD4G2FWK21sNRxpj619RP8inSkogng9LHWBYTt4xzjr4",
  "key6": "nqcEWi4CZstLj5NYkucg4GWj442bG4WJjP2hBkWB8x7uUW63cUoMLSrVh74amKKsnG9dySrH2j9En672FyK3suy",
  "key7": "4FZqwvfozb46mhkFVNFTVkK8TYkENgWBJeAttnYxGqoCVHPhjTLWSwHgvnteefuH1VBjxyo8QBdbHv9tJ1iv5AyS",
  "key8": "2bBrBz6zg7xjFBHfpRrzSxprAvS799kTneNwFENS2o8Bz5k7h7hpNS8huCor79FdCgcD2AcWjRNvB4xq1HJoXdDg",
  "key9": "5MYyCpe8tWkhasY8QE9s759iECgDp2oBJwMKnD38HhDNPHWdeTcp54qSEvV8mqSKixXMYRPUQgWMLf3Xe6HL3hqA",
  "key10": "3DtjQsYZC39UkrYZfw1MpHXQiQqxhEa6zE54hwb7LSaZfqaneopsX6CLQFE1gm5B5v3AdUGtHprDz4zRca89s6Lp",
  "key11": "2yPZkoDBdsFpCvUkKDwAdPmt2wX97yhbVL92zsjXVx8YXXEuG2yK9CphTkbjHfA1iUefrpFJKgmQowTfNYTDXaUC",
  "key12": "3QKpMLYs5vdqcbRt3XdqrSaQTBRsTTpF1ibS3VzyWoxPqAPUKuUZwvuzRXnBh2UhnBr21cMsQwRbGDKeN6Z2eK7E",
  "key13": "5AMYc9ocHAvf8BeWk3eb1CJ36hMWXEHTJHAe5QrwpMNCN6a9gH1ia6PN5bqsXGdnVaiKhYx8Zdq4oZ7AdZUy7J5X",
  "key14": "5EL3YzfbY9mXEEWMoh3H9HxYQjNoXxpYWDRk5ThQULA4ZdFQ7ZLJJe7KUJKWiL4r8s6uhvSjihXfPTXJsecby6Tp",
  "key15": "7WqaY8pUpCCUhVhsz95HX2bL2czXXGnNgoKLy24SAg7LLfxZurvajRiRA8bVfLxjFzgicQpA6EZyNCp927yeGuv",
  "key16": "4vg5ozaay7QoZnn8FKzivisksKsSGSDLgn1jvPWuKebKgWvs3xyqf13dZoCXY4RY3DABbPKoQ8paf3NS42NGBheS",
  "key17": "63Gv5AERnzTs18BKGEzQJHPs4cs9Jg6pKz1AwQFUm6EV6nsNKoWXGoyRmZztKv4ZMabZQxGX3HSYiMQwe48gjUGZ",
  "key18": "4pPHdqmEwiKQ13LZDYQWZP2RkpbqkG7rPp4AJZSDWNix5LjxAPyZbygncvkr1bDJyjN3zKSeHDKLkJ1pijmemBwc",
  "key19": "5DrDjqNWh6zmQfaMZ8Hwn9EwBoJr9t9Yi6o4pVjiRZXreo5of9ocBxpmnLYGNDrZiqmGNQ4StghEZDyr33Ve1A3E",
  "key20": "5KcA4fU7tiFVusGFbHYCR8idPSJrcXiE31NbRxQ7FidfMJrEFodR784U19utWAVNZxLHYR9fysRuSqehGAU9TiSr",
  "key21": "2YNixRCPhBZ3aExoSPzdi58NbP9c9VNE5WoiwWWszCHSANyN8ubc38sJSvAexPgNZPg8223mzrx2m5GiJ2av3TJ9",
  "key22": "Qg4c7L3zmhMmo4egtP3pWLBhynTzsvKbj15eBFdRBEqqX6aweXa1KMnc2bzbZfxSmDJYzMT62eRhbVn3EyyU3LV",
  "key23": "y82mNKZ3E6Tx616nNZy8rD5Yd5ee9uYU2VJDiP134EbMKy2EgCpTNc7izJfn2Gi9eWu1kBgTUUt6Si2JDXn1YzS",
  "key24": "47s6kUDdj4g4Ac6mMGWdfTnaBcj7s1Xsg1bmgrDTwGZcmh6sdqg29CjCWfykzhVaMsfKdxHfSVqcv93PiwFhzq5M",
  "key25": "2eN94eCwdAkZWtKVoUWtNASuW7jz2kX7yrahqUVRBA6P4CJknFmgy6uSHFtQ5QhQoivpAd4ZQV6aAqNjdPJ5ZWAT"
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
