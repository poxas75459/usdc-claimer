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
    "2FKJ9AnTRwRVCjC4YEAvM8tiQqwU9DZE9gAtEpSMtcemeYiE5ZhLpjrxi83xYZGL9Rm9ovfG9Tm3on4xvtCGJhSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UCT31zevyqAFoyWYWzn74Q7yeoVsR68EVqG1uAYwr6MPwe3uJpy4JVxJ5nrhTq1ioCvKW2DXThV1vAMKbcy7gdr",
  "key1": "4aZwzUzvhYSauF1nktvhFRaZhQQvQP2EnDmNUb4JXAkambE5PJSHsBvDRzkvFQwNbtayVax21ei2AAQ5tP7CLsQm",
  "key2": "53wWnA8wzWcHw3Cytgn53YbmYcog3v9Yn2V4Y9XJgwEUbCVU8gCDrAsVmsRnLmphLxNgNfttMfCeAR4A3yTCnVbB",
  "key3": "ssH4mW8x2XfzQTNf2KkiiNNQT9mC86W2dBAMbb3dVcMwnSn4vbL8wa3Y3h6cxKV2UfmWEjydRnCbqh3mxvdi4Ut",
  "key4": "Xyj5F4m3t8Q3b4aikX4PZhsMej8wvMXQ22tjZeDiFvjbMP9UhvEc6R1bW5nqNeYMTHXG6ye9XjibNTFhrzEFgTu",
  "key5": "2yDUmr2zKJMJAwRAgEK5sQerVn6fJDpRt7bsvxSksXF6y5nB2eHjYM4WSETNR9d67srRBRaDhzmhsAWqMfj2QZdB",
  "key6": "VWJ8rSgXhNW3jQkbDZmWue92CYvnsJziee7uQjEw9xHjBEWqZ2CA3zuqAKsc8ZML7NPqhpdgbQQcyUFhWFi7rao",
  "key7": "GScrytM6rXjMNHbdPj62u9PE4TKtypE4miQPoTC3aYjj3vQiWFiCb5oLYFAZjg9RZcAu9ui8EpWyb54NFGQe6sD",
  "key8": "65nMA97E1KNKbfDxAfBkr3xxUyuH7NjPG6KmiQQSgWrK1dHAguSQ75x54TSJxe1xWx1KV9pGXcURGgXXqzuLdTef",
  "key9": "GTfGUdi9H5ysVTGESAbRazJuMtxjynmFHpaM7J4dntufdbFYLfQQd45F4uNTVFKhvKjjxSYEgZKEowhtuMurypP",
  "key10": "2HvgAgVLkgun17zkbJuvXdqbujzSLdJagLeL73BcNrMmsZAuKA8Bsq56VwNFUEYC4f3EsRVrVPT3VxkgxCSLF85g",
  "key11": "2sfTdiYbymp2hC9KT2pUB4Hj8ZeYgxUrwHPgsQYvKizyofjcQ3U45cs5DxrmTr1ojtytyWL2bay5wT2Gw2g3LrYg",
  "key12": "2MUgUUEm6cEbsPpWLUyAsCK8ADaCbZJoPDYkLTrjGvBeZbXigfmHho9Yt3KhJf4r371xPX9zpefNmp69KpVhEf2t",
  "key13": "b1fXMyxaQEhgqeDvBEq4514T79BBT53JRuM1zjK6u5RBMfq8jPWLNcXFh8hpi53jtJDFPRVqj3Jj7GxmN1AiWmr",
  "key14": "5me3ZgdRRiLirVhTtzTbHv8oV4p9UD7kJZeyzaWdN3GYT8YmWJTVcP3Nng2rhtah79iSYpdFa1X41GKx9Y735a74",
  "key15": "2GdoRj1ABFPNsPLyet65KQxbT3V17jnfdcDk4szd1p7ovgardn7CbrDud1pxNvrguCiE65Ui3zU2D1Ssc23Cvnfx",
  "key16": "39LRAz55Xnifv8ziA1QtHE9NUKQj31m91T2cPkCf1PbGAueGdYjuLjWvY5bYQqazsSYJRZuA88yjYVyPBJAR8kSP",
  "key17": "4xFRF7gBxdBEkDQZuzjQnNS2j3HC9RDm1GrW6nhQT2orYKPUoHEAYfAJUQN6ZfRt49KKpGjgKST76QmdavJKqok1",
  "key18": "5qgdoxHqnfA8asQpX3Y7Jm2VhSLc5Ssg1CkuY3wWQeC6a2XE7gwAn2froJi9r6bVWYppPuBqes3soaxLdsfqzdaD",
  "key19": "63A3oCfMHwnH4pJ5eFNDLuxGbyCg6VBYc4ex81sYEnj1LLf6p6aQdGwiJK16rFPnrP9Ud7UsFVdy4yM37YP5a6eE",
  "key20": "5XErHAhxCYJ4F8qBbyx996WWUmZZzJLhnQAcLx3gfe3ZDr6thvu7TgGdaMwGCTjEYuhEjQDkqe4AT2SUQPdeiPyc",
  "key21": "58eo8MVa9c7qmmi5BxjenU9pPo4hr9SWrkdE64WuBLwg1AcetE9FkFnQeQvqdJKhFYHazED5va5aBvEqM6TxWY8B",
  "key22": "3Za6iAe69qPy5w6g9qMmmcCi9TL6WHtHZuDWiC83TKhFx14dT7xJLgEWdTNcisd1gKPjYagt2Px3vrGAPHhYtMZe",
  "key23": "4AGsGYtmS1wrUi1G6VNXVKbWY224rV97PY99ZXF91FUJVhrFDAg51Ux4bbryj4PFC9JUbpVrrFGXh4d7PU6CnJhk",
  "key24": "3r814pp2LKkeCnFrVnQZoPfDfHWWnNjfbmHgZkLEqXCfdKwWiiu9uNVkAgz31hn86hrvefuZQYhHzXKTPoasBGYA",
  "key25": "62Wwg5GcYRZePskEtNHwEkPVNXT8qWWNpzsxqxWnpPk4TdhpJMMFbZWSiZNmLPV8wGnNTBaB9menN6TR481dSoWt",
  "key26": "3EPk3qwzHfeHXChsFphNbSLAyn8k9B5uQoxJybpEzXx9wpMRhGGajrzrqE7Fy3WiYDmN4gNPNLmBw1ezjaf5cjQy",
  "key27": "2cbguadC1hFtDP4hTbkaJ9hENfSAjFnWoAhaCowAaaBCpGe9r5SYytXBpND3Zqpy4Y2QtUdhHyKQyGd6eGhJiAVe",
  "key28": "4Yeq4LYRJ4tK15jFFCr7DDgbwY3aZLDnT3qEs97anDHkcPMThEC2X1N54zenvY8izsCbNLJMjCgA1zMfL7SHSLyK"
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
