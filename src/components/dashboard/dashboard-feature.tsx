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
    "3EpTCroYS2i5j92sNm5Te1w5TCi4AVUe7Q1QkaarfbJdyAHKhwiG3uSPCgfx3cpMfk5V3vVTGv7DBYytCFNnpN4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pXAaBSwCbczBjZWXnUiu2PpuNhRoREwDU54L15h3hAPuT2qFUPEWxqEwx6a28D9dtdWDHe53naA72iVaRPwxCSF",
  "key1": "3B1AFrf2F9MU3HffbXhgh8MmJL3pt13tvtPtACjzsUmivTfF93aHLG3mbkGsEmBs84SmZmCENLb4mFgUM93KPaD9",
  "key2": "63bsnt8e94pnwDJqeZ8hn4fMoHQq2z8CQNAEzC7GBjnKpAML9TfXGoJ6j1HghfcPn89zmbDDM4VNh9yhwW8rCQbj",
  "key3": "4n6WpV2cm9SgpW91fF3qn5KLQEYRugj53QGYfAp9yzfPoECnToqXJki7jAB2VvDpNbbUP6jeov6uAESxdFs2w55w",
  "key4": "mdRFyRXJ7Vjp2jPEJVyootqPBzW7b3pxE3bZowBxjvJWeNXRpRU89ZqSfSXd2efvVgB57HKpLNzDqGwtZRZeMct",
  "key5": "4uY7HMrzmP8t2NBUcDYxxYyxmU2RBY2NrmeHN5pwhpYUM33y5QszsHpAYbe3PCq9aJUsTLS7K4w5D1ZtpMzBeVMr",
  "key6": "2YVMQztN5UELmABNLgGsPiw5TrWdrsRqufnqLj6xjspY1HVojiZfubx6jDxECGpb1pz3BLhuKvA8azpeSBzZeMG4",
  "key7": "J8XE2TmXjrAnNh1wiyJMLLenCToTEZygP52W41XENYk3FMR3Nd7BsLkumUc82rQFA75jeFnwFhePWCBEDnaot8V",
  "key8": "ES9LYDMVtLW5ujfZnA8wpHkkrNEie3VAyCAgC3n8WZ2Vw5qRbJpuJw2DoHajxz7Bg3BNqYTnRNu6GNucfEvyJms",
  "key9": "5NWpDX5q63i8UCSZmJxPs96fedsXhxiaHEhnGiCiyrQDYcGXxvYkw1Avy1nWtwmsw9xnm3cJ4ptcXJZz4f7ysQrM",
  "key10": "4KUGCLj5YevjMbqknuYaUxonXGgiEXV49eYjVq196ZT3ge2iNyPruqLByGdhzExSdXa9XCmyVkK3zjSagQg5gjT6",
  "key11": "3JuocdbiGgRudu3X7VJAxFTV3xXUaemsAdSxKFPDuTDH2HhBHFDGuYfkad3754TmTgWC8rDwYjDgJtLEKduoDwQi",
  "key12": "3i2CNpSwbzJiNRdXpXp9RAEdT5Uc5yz4ciE4NrNuCvjXEswm4fHyizYViXVDRAkX9npxE1MM9Hh4JexU6MjUaepW",
  "key13": "cYUqXpaJiLdchywYYEpEvcWGayYvhFRh5ssZ4cfYCZ7Bbm7KFD7qBWNonsJBLMxBh9Pj8e1kq4QDCnJjXaM2Ny5",
  "key14": "2PCW59YzHyaePayQfBmMAyW6ojs54wNbRrFHu3t842nThj9wf9vWipaALWnshrypbbH3xGRpGSWeWvABpkaptXY1",
  "key15": "tPiEncBGcJPV76com9tHKDPf3QnadATbReYivBGnCdNTTcfrrXbPj5rSumqh5wrwFAENCUZbYYmFH3yuYfd4iAS",
  "key16": "2fjtqHzkFZoTHEmroxT3uzi35oXEfF3qN1d9QqPcdP4fDxJXkHQpRvR8nL1vFvc3GBg56f169GM4wr8xUaFBRRCd",
  "key17": "4NpcBUQH5cCHzayS1UqBn2Gjp59vMiPaayorp3qQqQxxKJMr2jcupDnZCocknA2ELYJ5NQ2Tpg4baMn1gqzBXhVX",
  "key18": "5Ugsx6bXt5jVqkJHJs8n3BSThgaHtZD4EUQZDkR1h2UVMW9R9AJ7DU38RfF7da5QFJA5KGL9utc3xzeP5YzSeEsn",
  "key19": "BFXUfkPUME1DFiqFvHmuzQiaGm9ubXyptQFgXU6gUTutvpuSknkMMBV3rqmVd874FAcK8GE6exvgduanWBDhobE",
  "key20": "4NktdrnyLqS8KztPP9JYpTM1CKnzEW4qc8gVM5dBWNugeg2xt95wiSoxLCek2XmUnRFRmZUQarTs6XuA5D8xrqR6",
  "key21": "2GxobZmoUYtQunktYfzSHNg26fEYEzyEtM3BFqMjbKSahpDjB75iC1zdHZNLbL2MxajmF4sjbkN9ZkFYci22V55V",
  "key22": "3X2cRd5Ssa9DGxqr9SeMgpn5f9PVsFnFf9pxWJBEs12JhMDNASxcBohb45sWE2sBq8avL2NBb3bRGEud1qnZqTmT",
  "key23": "3eNrBExFfuLyQFyvnAoQi3bBtL5pZm8A7HZgha5J7GQkYRYzxKBdx9yN7GDAwdykgPgXSKZmVqQbRPFaXpvZtJU8",
  "key24": "2JsLNmcW9D5kBozptUZK1WwnfhabGakGbZnkAAhVGmZC9sBuaAtoXHtfrsvdfpCeKBGA9pdgEcM3GsivfCVp31Us",
  "key25": "AaB64YeacXLKwRfBuotemh6f5qJQYb5XgtLKTV8PgAhEddpWrW5WsqhYyo5srUKvQsx16oKvmGU2RwGdUwdmPt8",
  "key26": "3BYDn7bjELzqN96QcbbeFo1GT3yFeTiwHmX3aog97ZxfgFyAu8hm5k5N3cmrsVmQneZEPrCp2sK2jC45WeJeSuC6",
  "key27": "2vTaHoaQvtBRGid6YfTeCQKpEE6FkUzxJRKJaChBxjNrzdegdWJwYowLNxCN9ZBvExFvp4gL8UCzpxgMJqBsj7Go"
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
