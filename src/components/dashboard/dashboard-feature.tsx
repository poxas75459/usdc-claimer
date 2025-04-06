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
    "4xzAzkJhqpGkjM6Ptg8Qyz6AzZoAx6a5CmdmzvVLDTnTJP9JpY6HBCKJQuBRd8LRf7Eba4zFG3uMCXoY5tBgJP9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DVuK1q2g3kLQJgtwWUawpM1FyKfPH3PfbYAr5qyJtebysPV14UNxSwQFbxKv25gPLKVqKXQt3jLeVTiFkQ51Px5",
  "key1": "4FkHB92mrCTsG4QcXgKyM4uJfekFmR8GT5DM6yFcFRD9ahNiRA42JpaXwwysFyADqdYQDpkrNcL1rJpYT7vocUA7",
  "key2": "26Sj4F35XimwrpgFJ9adJ2iXBXm7w7kdcJbZVpjzgd1QFgAYqJNzhHukiSaVjcR7kZ6fr7f277R8taJP5HGUnGJd",
  "key3": "48db46atDdrr7UD2nsZus42NAZNd3JL34kdaV3Bte28dm3uMRoubNTX6BUhVTX35aTHoo9wjFGeHgAMrfqVfDGtX",
  "key4": "3LeJJkntktTjAjQHr3waN4H1qs4GyrzX5goZpTfNZG6tMcuLKfwepzvx6zmpE3VTPttu4GBdpYRgXK2C9hBCeVAu",
  "key5": "CvWxJqCRjeUmL84UGVXSmgdUUxWqYBScXwzpVznQnwLjgznEydNKX9PapyLSPG6RYXMahuctd5YVUB2AKEy9iDr",
  "key6": "5jggbi2bF5FTA2QjbsesenHiBKoCHuFpJjg6vbKBbPLHBBoNLuox6MLuQD15sRytXW5hjETfYxy78GqsLwGwP68p",
  "key7": "3GQSfp3tcKitowJM9Mmfaabi6diqYszpv29ibFNvghkLV2cgYG9AcS4irYAP29CnD3Q6LrAXasKDaHWrbdjurnFc",
  "key8": "56ao7NU33ojvNoEEUpzhobQvQiSQvkSTo1u7woZX5MVtg9hmKyekMJiAg1wF9KBHh9nNfztf8Zhg5F9AG82fZQ7j",
  "key9": "5HmP4hyGZY7G74d9kPSDneCpeaD6izWi68vxfqqzbKbwxK5VHLGbtVV5FfSsUkB2mzjv95GAHdL42VSLrQmJbr4u",
  "key10": "5TVc8pyzmGS8pBRYPJrmz9XicHqxu7dUURU8jQeup6subSdYx4Rg1HpsvAdEMpE2k2yPBmbEJVvY9HVWqMrgUSJd",
  "key11": "4uhMVzDwwdkZmrv7PTEV8jnUCQ6odqPmRfwThdWmfiDytxnJiWNmdBNVF2W47yF9M1hKyv5ovUo4sRx6cffbd1hR",
  "key12": "5WGGC3MVH9deRRgrvRsBc5jbgrZYcfNWxKr2JwYXfDeEQRxZsEd6vt4kAaxdERJ8kvr52Qt6TWL57H7cEMJn5b14",
  "key13": "3t5wJf2K2qi8bVm52KFmGSVUG2RWZtcqteLMeWAgNhEvcAvSTHa7soZ6LPNqarafvWLyCBA4fPtsRoAvqqdkJBfv",
  "key14": "2ZyfvrvZ9P7y35kkQsa8VuChB6BBe8PHfybEBmKvLtqgsCSUzad5Y3354ehPT5JvxPnp1uTf2Ds71jrAq4nKhKgq",
  "key15": "65q4oFgfT5ZDXUXUDgkrYfv1jSqRMt5Jex6jHks1KuMrHgT1aoQ6a4WQoSsAQAZtXzyd6xntyccXH1uQmKtgJm1C",
  "key16": "5oHxm3ixy8bi7MHYWAxxLaUnHSyHroE6m1XaiEMU6ZJgbyCPGR8WY7boK44Sufia65SLA3baovt2aPD4tnSCGSPX",
  "key17": "pSKASuy935JXxUrMXnUb25s7mpkQCvc9Yf14HzyJuJHr1554DYKTQFq9fnwsRLfkRXL64bBi7VrBDuiAmLVCW9R",
  "key18": "3ufpNGmvb5YREwJDy3T9ZgHxKyKhb7jRAp2xa8Adkc51NvazfZLHfsU7bKU4aQrNbsXmh6M1XAoPo2PYzd4FGq5R",
  "key19": "62pV8dNbZh3KGEaZ9cueYyNmy92vfa2EMTYmcDqL6bhca5bjYKB2GRV6foYW1gQiTsmpKFYwtd3ANJHpawwC4qGK",
  "key20": "5Tr7ckaBmn5wMxqwnyVQk7EKc8uzvWuJNd9CuwGeTshU1YJGELPFuiK5wiicaqKuSQZVA8JzTJY4YogYdZeYbJYu",
  "key21": "59MdQejjnerjRrLspmACwy196W6gNj68FsxAzfP3HhEwb2ji137QRMtvY4m9At2YTTKJeP39NejhQSQfhBTRhMuT",
  "key22": "2EPHA8rin52rL1v3sY75D8GsBLqPCHuND2Zpdi71321gssQqC6Jeg92BpmDuLmnD9kJVDQdqXCc17KBHXdX1859w",
  "key23": "3r71XFnUq4JKwStx2Dc4F4A3Xa3TKD81qFcAmKoAWydKrQW1tyAhh1nzWszbLxjvaJ3xErDy4xe7abmfU6U13jq1",
  "key24": "3RK8G1JuMcr7bwSNFUX2Pr61rBrFo88xCo4Skoavq6mwavrcHFgW1NS3ZrCcE4XxxBvAnSo65S7gB1QzxgKE9HyK"
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
