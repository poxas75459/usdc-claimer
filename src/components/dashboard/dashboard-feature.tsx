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
    "3rdK5CgUcJxuA2PwWWJvf79WtVNoZEwUTZkJAt8J5XNtLfWdA2UoAkzMcTkEkUCiQweYGTLMkpLMNHyvrGxjuKwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kkcmqWzjJGR5SaxiZD6cGAJ7KFQtqswE39DjSUhcfQozcjtWeqNg6tysHGywm1M6apZ6o1hXupUcyWTTyE2n465",
  "key1": "3rmhBMSjsJwT12RWjDJb4JPsieyNQuQB5prrCnoGMaghMQNwJQDpZr9LyxeKkb6qk7Xs558qUZXCSfPwRyNKaAxE",
  "key2": "5QLYJEnxpDXzdkXnpnkYGq6BHNJv9KBR6HKDNPJYoBXvpVSuJyVrHmki9zUeJkfTH2XjNqTDPddCKFbcmqasMR7H",
  "key3": "4g69HwpYRiqWF8AaWyoczXc1jNakFYPCg6q4dogPzQvgGbra86veuHjejtk4JdAgBqCWimSu6r7AiHWaRgnsMraN",
  "key4": "2ftrEDugWwktgENnHidFmUapAFbbfYDKMW8i8PqZDiyUNM2aC14b32APT2XRzrrxAagAA1k4ucxt8SPVYqxMcx55",
  "key5": "5RmNY6gnRjTmNbpcJxWRxqMScmYfo1FjgBkkE7H8J8sHpbjSrNcBaJpwTfsEj6Scij3P826eduURU3GyfRiQgP3X",
  "key6": "2Bt2TCUcxH5sBCshXJg49Kn16LePbxFoDBkdEy5HaCo3CFBkyV3MY7zu3UxvvhpmuJQNkVrYT2Q7nibebkiH138Z",
  "key7": "2qv4yVMZ9p2Emd48ttY3eN28hLQnt1X6cWUJGpvnx279R511FeaeRqsJHfnsERbMXicm6xFCaF3t5Ne1NmCT8dHp",
  "key8": "2AX6gFBvgsGRzhvdB3XVLD2zJzaHj4MVwtGdpabjD784JdhBjSdm9PBir3LtVwqaXQUDtWJW4SdfEh31BpvqawZM",
  "key9": "5HzmjaVCTpazbVF3upanPFsQm51CnYNhUFEcsgPWFZdUCC8pPdoNGU2N29bemJKLgvTEhdxpd5tPzSY8MFLhKbBG",
  "key10": "3DScmDWTrtQULYpvuntbCWpXSb4QuoGpSHWfmjvWy7Y6oJpfhLawPYRTrVXz6e4NTGhZrRNrXH6Yse1qist1mNi5",
  "key11": "5TvzoitggUQ7V1WGQXmVLzF8AquVP3MiZ4PBVBTNzrjPzuQ1ttrkSNpski9WuCmSh8PdFUcSmbzpyXr7SPmb9XB5",
  "key12": "3xqxMN9R1o1ink5WhQx485JdQsTdBFpfXtuoQPzPp6SjKgJnvhUdNoC5k1yqRVBTbYsypagQvZpsVMtmocNeXbhp",
  "key13": "32xGZ9soigCkjMva16vZbcoL42BBgeZbYwjE4W8k3RFcGosanTEFv2MXKxTsC8BfKe96jX4FRvCu1QCtpytuxcZy",
  "key14": "5qxn41Ay9Cv5kXEn4NTVnSex9ZVzEze7ZoPc1621NNqPSt1WT5MtAne9i9h445849HoBT84YqsK9JnKoXWZTaK38",
  "key15": "2wcPJkuwJLdXcPjva9PeUVnTB6SckMQHQ3QMFrfyJjaNQyBEeCBuWxEBUpuXGss23Ymp7uiV4n8WxLzkRfwBtrVH",
  "key16": "44mQMd1aCdeY5JDZnXaD5Zhi6eYpEzqPpPrcfWBZXRfvZ2Q5X2gnGMPn2ea57uUDcoR3C2FeFoz4XAVoBenTLWQc",
  "key17": "2oYLtEdmVHRjoSZpPtRZmXYDzHJqZMjZ4S5ckwjnFhMdKm23zbv1Kpp4hNeLC2iSFzwnkm1NTBEvf2pVrb5aTaF",
  "key18": "5ajyTtVxFG9Kzts59CKGin3iAMY9r6riNHopNyCLctKerqQeL9vTQFMMeEg7anF34Wu6JdhQjc2SJoKrvXk28cas",
  "key19": "24PQwm34qVvquFEDsFwBBx1QbKrzqdP4Q6z9Tp2vfJe3PFBGKJ1QmJkvqzsEy9HaVPGXU19jQDGZiQLcR8uDVzra",
  "key20": "4n17FB25Px6ma2midwp89xzQDWckebCbP87tLHCbkKtoR5ZdvC3vpoVsPk86rvrgueKFy9jfCUByuyd93X3ggrrp",
  "key21": "3y5xnAvx7CMzszhnTqeMXjyqjEHRtctw3fg552CD4U8vD4vLByrPhYxknsfJHcAob6GRaJhwQJ835D8LHWNp1fu5",
  "key22": "4G7a3ZgrhUAtV6ScWX1Qv1uNhajs2Ae5vvpLKJyqVhpfKJiG4DCawpqYV7TtsxGD3L8Fm9mgDu6wiMgGqKRooyX5",
  "key23": "3LbStd2UPU4uiN2NJAs3Pa5814t3HJ1RfJfhh9STrir8hSdtzGeHEW89PsLgfkfLQFUR3PDueBsRrX7kbeMedVxN",
  "key24": "2uGg2RZxtCwqD9YNyFehXs1ASeExunQGEK4yPkJyyxa4nGLUgCQoY93aRuv6kGQUsYhqyGSbsQfaxDxWB9uPawa2",
  "key25": "49uR6x9o8iDPZZKdUWKx2FxcZebry5UPJV6VbbQzxBwoVYCjZRb3sJpxt5u1SFuH5RHprX8VCR7eT7SZLa6hMycn",
  "key26": "M569pCmfDUA8kZKxz4b81MTAcbMMgvfvTSQdn3xEfQ9rjWJkedZ9LitoXfuX3LfNsYsF5MNA8z49oEtELkKWjAP"
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
