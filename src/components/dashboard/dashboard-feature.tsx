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
    "2cQ61Jw5R5HRc5uGLg3c2cVNizZf1SQ1dFiB1x1nmyYCPAj8DgEoEwHc5bRvGBM9JfVyFvQxhgoBHjmz9UPh9avi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RYdmDUTUB8MkLfu58TbfmBLYDXMYLvqBgEnvXx5cT6DUgCqoPR4Z1N6uM7uRicr67XHJD1oosYrAXgVinYPutUE",
  "key1": "59TxWsgL7cvbrRy6J9N8iQ5hpAcUpyoWHtF4o5fHTZFCEQ8weH2zAEZzvSj49Su2BC5qTrP57xSN4xqtGRK9nJ2J",
  "key2": "4ojzDugcrb5MPvkm16LPrM15izjQJJnWALC69QUn1KspuNEE29o6J7m6dSYSzumRbEd4ByPs5zKh8Wptv3rmLDa5",
  "key3": "2DgMjc2uW27RMX5nWivES4q4BRXFfGU6HLC7cWMqo7sTEkA1D26RtAvtCzZZFfBH9CEJyyiaYmrpYLhSE2gKwmy3",
  "key4": "28RKVRkz2R7bZGBPxTvqHKwL5ZcRucU988wXdK7x2evTw8J43bho2UdK31ciKNc7mQcQzk2b68b5XWaUSrtPL4RT",
  "key5": "2RpnNa2VCBcd75WuD8GhWddYqPLfDxbWN1SH2hkFkXGpMAQAm3fAyVk3dkWygpaWWpJjEsmBeMkAodUGswWcLkDb",
  "key6": "s3R99CXpGYNcVtA7NmhjWzeqspzxgZCRaBw6MaHpm3kLK7oqwxMyVXQG2RSxLZSnwaW44W44KR44athwsxUii8H",
  "key7": "3wRPf1grdZDfx85dhdt2eRBAVPFBZWYhijHsHZxxiQKmZcTBzVPuzYjXZHhBe9MgsHs6n4eWhofWd932KFbtZyJj",
  "key8": "45L371Fj9ZBWZYSBz7zLDobHFk27J3csNBdcfGuqKb2JZUhcwSbDrhM2hNFgzYeftu8BF3JYB8aiKeG4KTzYhMnt",
  "key9": "EV9xfEE3omQGu1P7ieRUiPP6nLmpupQeThPn2txaobtGYfAn6ieq2eeMuCnbsrDLkMxJicfSgBBjsU5S4MgL4hS",
  "key10": "5tYJQ8reCCLVk9w6XaCE6CiueT6epMP7m9PwNEDEWLfrAJBjk4qGc2tNYpaewTSagf8BN3FKVNr1n6Vj73WncQj",
  "key11": "eguYhmdFhH9X1ZLhNyaSZjnvTD7ZQyUWt5wsrS8b9oDRf4NT7mHYUM14eXJ5cBnqbSzcBgnYgtYrd7FvHBBEpiq",
  "key12": "54mcFGdMJ4KJn2uwfiizyiabPRV151j7iuwsEfeopRJihhFg43ND1zdkyGRfPWUH5Lu3pTXJxLsd2z8F9xQq5iJE",
  "key13": "4mndXvtmUb35PiNXgk6piBBjs2TqG2Fhr6oMzAYbao4yvEv5G36shr313ws3ffnqJXLq3rMpUpCpE12cDZ3bqYkY",
  "key14": "33jrKG22KNKqCU3HgFDM9eLc2NDfjuccYv1PfF1JiApZ5x91byko3XsKfJo7kJbd1pAbC4QnEyBUMEp6ioHcX7jt",
  "key15": "3qTfBhXbB5camNY1FaGTKjBqKHcj2wuDTrJWopDrZzAGoHck8nqA8YfMccr6Q3oYfb2b35RVE3MwJfPT4VSJdGHX",
  "key16": "2yhnL7GsN7RBdK29pcMymNsj5qxXD63aCtA8dcEuFGExVuYC5AVxpafZirm8kZ7T841oHkZ2GVBqkkKV2T2iF6gM",
  "key17": "4dvDsRv88Jpoe9radewpDkLYxeCVpcgyDmgUGEYeauF267YrHfnqrQ5Zw2GWXKnBrXDbNzrPpqmvTLAfA7vf3Wfe",
  "key18": "28Ve486Xbz3AvydssZggSgyPXEaQUkRuu3pYfqjHRdZWF247C3GyC9r41w3MV1f4LAPJd1ytZ3rvTX2d4bmf7x45",
  "key19": "2z377ZKGYhSb38ynXmUAyjKGbdMbaw7tDvupdHej1ADJkwHUZnkeei7Ybvtp28kufavFzy16FkD6hFDDfXPqeogu",
  "key20": "5uC1A6a16TfiEuEa4pd7eaPk5BKioonEsB1KGtbQAtZ93ugEDkBfU7cRr7VmPSga6bW14gewRyxxrtfid7ECrTJ9",
  "key21": "5r622CnV89rReSguZvzbBKWSBAU3YuikV6acnM8JGLVbpGa4cuKU7gRAFFK4j7vmkSkzx8z1K5UPyeppK1pjoGeF",
  "key22": "2n1vQG9kxC9NYVztUFawQYGisXzAfqMFawkWooyezUzEhGbeZuSuACXWGD2hQRW9nVJuMxu756Fo7dT4nitaH5ae",
  "key23": "ZvZiAmAD926PxJ3Uano4hUUBUHiBtAJhZ2BsT66dLmMsjM2LWTMZrcFhwAUZNubDFPVgfrU1SENLnmgJMcRA7w3",
  "key24": "jVH1RmdLQp8DeFKrvXmJg7euS7PNpyfZEefHXHprDhq6Z5kNWR8kcKZPMSHwFYWcVWbA9MgS9kQMbLZQQBXegLM"
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
