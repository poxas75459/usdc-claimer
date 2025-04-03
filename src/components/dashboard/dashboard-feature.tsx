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
    "56ynJBhuzJgxBaqAFByHiuYPbA4jAGQ2sRVzM8zhY3KprvURxCjSucNLsntUdwodDqzAVigPhek7L6aT6V2LjNp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MWQpTRoSaCZDDndwoG7p139LELxeXmaq8thRtRh5JfU2LJV9CijemHCHLMf2wo4Bg1pCtTm8Pvoz65EA43GCouh",
  "key1": "3gZD4iwMGfF1ErXcvtxUToDB4VHe3MSXXj4rd3spjYnRqx6BoJDDrWfHtr8HpV44Li4aCeiEC7Pc4mftjtj8pieS",
  "key2": "41HP2bU1aBgW6WtHAY6S834f64rGTK7FTPgcwWCNBrEA3bBGCgP1ozeiWXcmTWeUZZ7uk4poT3Bog1KEAaWiWDJA",
  "key3": "3oqoxPim7LE32x6FqebVds2CtMuhnvSMXxgdyTYnpMvgpmtFgyDFPAEvxPpd4EKxMmtU4mvQ6WRfJUxeHureWqjN",
  "key4": "5JjfjoDbo3SjnsLqmYqY3JsiTvDs5HV23rfDLMZerfyvB3v8Dn6DDZ2PtCE4Qfpn7mxpw2yzsT3gLYJYGWj42nxv",
  "key5": "4UnDSLe2VgSTmKG4rMP6ZFZqTNfBHrPHMryoY7HBnNTiR9UL1SZoJ7bR63QKe5skAejewUd2X51N83UgsaTnEdjb",
  "key6": "Kybm74jscBzUFZzaMtMeypB1DgHbP7t4cPejGBkwuSp1iQoaQZdYh4spk677SS5NwKMqMS9pLZXTRAr67j6bvZJ",
  "key7": "2hzaJMf7mdoFGyZVxmt4PLByfq86PJGfPK2zPNeCF4im8pYfHPDmGdyKvzmVEYYLByC1F5P2HZSpdGrpwrJoCfHb",
  "key8": "Gsr7hRuzvgkcFSD92Fts9h6JSSDUL7eiWrzYc22jZehksssSduXDwpdSkyXqs742Lxuim3YyVos3mgK7bHREmT5",
  "key9": "28JjZ6HyKsAoTezRNuRMrfJvfMeDGxzkJqsCmBXFhkiQfGkFPQBgrTMicF9HqwFdwB9EnE5cLsskY9sBStzrLNk4",
  "key10": "274vEHYU1ggLjkjLQ4dKw9tyezvPh5QnPTBah5bFUuMqPxuyE3FnnE6P5bmXgUNXgVPu3nHoHv71mfSNc2zxZdFi",
  "key11": "5varcPqFM13DQ7gvmXfrWKdWriFRD4ewrpidU4E9kgo6qmeji6SGRdxoVJWhvCuC87L9wm7aeVyi7tCoeqf6LJt2",
  "key12": "2VAwV3qq75KfuCexmHLSM5j87QCxYvxgP5ZYJiPPmHkQNhdwCxvpAG9yeya8V9Hm4PuWBpEj8ZriFR6m7mFnQuGQ",
  "key13": "2Cquyo8gtMQuhsfmsTAF5e3PewsJMBZYCY8xaKmRVtQHHVkuhcL7LiNAzcGnmoPZAkSEwYbQreMst77ybBBUuPud",
  "key14": "635cH5NdwV5Eq8dTeuDo2xRDtosUbMFBxswbzAn63mttJAg9soonytXAiKZnRAAzdbwDaxXqYHdxKbyNdP8qQejH",
  "key15": "4s452pw8Vwcmyu4hgEbrj2P9NNB768m4rsKCZLxSPbHWHvBYr2h49Qka5qQXKWV69LCZZzX3R2BXztUGnb9C2uxZ",
  "key16": "4ScQRZUKB9y9VK564nSZP6LSttGnvYDg6wpmftRNcwC4317enMCowtq9Cxg9T7MsAHaaC1XoNbNjEUhzkinyjKbC",
  "key17": "5emfQNnh1GpZy74zzhZhXWz89tGE2jJAnNfNXkB1fBatN1QTQj1wDFd1m2zPDocjijqhehryociiTA12xJ8kKrZr",
  "key18": "D85t9cesB6MxyKfThzCYfHjiTY1uaQPCteQq8g3Wf2NxnavmGZWNGUZ1BLn3sAg8Ddr3HxKSduj6CAU5SzN7RAA",
  "key19": "4fCqtSgw3TJHhkenYYdRDKPTUCZRo6jh6wqDmse28X5vYcmgFcCyaARaBj2GtUrvUNuGswAF3fYAKDUy66Muvy4G",
  "key20": "51y4bwdPvu3aViENCcxJ85XzT7fmBYfYedWuy5yvkPXictf7pFag4KqhBDsPw3HJmH4uG7nEivVA7SuX7qNhK9pS",
  "key21": "zPVkMCvPF8hzJ74GrTAudo9A9UhEtSDPfiWrY58cpBvu5yWRjCxPHZp6ihuLbfJWFV25BC599LBuFgwTnyNCgfV",
  "key22": "pshWLhAvFNh8HAgfyncLQfrngAqhDhYLt3nLeXQHcispvfnhfeURnQvrDTyqSYfZR4VMUAQJ43bbPVDiwks5XX8",
  "key23": "38V1PbWWsdH6qzUo82tbf3s4hQDz7KSVzYFRiK5a68gwDfbENwdVWh6jMGnaytjywLtH45FGNJRHxh8EdpjDMkMD",
  "key24": "41WrRW2QyDjjXZkgid1Xnm8ctdRgp4ze95dvw81sZJasGX8guU8C2EHQhasJT6uJaHdSt3tByqyKdqmRRvJA4kfr",
  "key25": "5QUGn9cQgrEs3MNgRcWpgmmPDiaKP8h8sc9tQqtxi2cchT81fA6DUu2bm63iiq73CRiv4FKSYVeqSTvWHVPjx59F",
  "key26": "5pP9g3e8avcit6WcRwHgs5fRX1dLHADgGXr1A363DgL4MPAsP7Xp5g7Xvi9WbZKR1ZPcmPpqy5qeZcxfZVEnHZQU",
  "key27": "2b6ahdiJhLHX2jXv24Q65oiPFh8RAQS4UNgsYP8XDFPDiYaAUByEDsvssygx2QL21j4vX1PKeYjzyYgCi5uRAiDx",
  "key28": "9CGrNGSfkqTGmKpRQnsi79TnHXCbehRENd612GdTDbXjXXLnfmab2WPNBSRWnTd5FGBX8p32PfZBJFqJz3PpQ1D",
  "key29": "4uJie4NhBLtL7KG5dGfjHTN4LoYNus4ZnsRDDLTsg7ByhGugdrbbH6GkYgtxEr9bBSY28Vnmgawt9zydrH1pu3dK",
  "key30": "3vVRnn37NCKLS9g437jXjstMeWGQPpoWsKyFvYNYGHiyspCJeSRLV5o2WfBv7YYmU1qWjhDA22jaPNDRKYtQptvH"
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
