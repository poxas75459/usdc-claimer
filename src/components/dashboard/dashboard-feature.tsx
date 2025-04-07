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
    "3xxLjxABbTpD5iHpK7uGysFkzM282HGchTkcJfXUhgFTy1YzTbWznmoTXdJpTJ1Ljydr68HQPgoLrxiFtMDeZyMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48y8LUkf8pzDZM2RUYKVTeCQV5k58SDpX7BUxPCyzJ5qGA2oxhwDDhKyRcBaXWXZX3DqqcvY3ojFg3f1D5Hw3yYr",
  "key1": "4nAJ2ZqBBCyX4RryaMV5AC4jcRvcpemC9gcQSosXG8yKZC5c4Rwa426DPaewyXodARyUb9dm236ifJFmrm7Drfai",
  "key2": "4GN8B3wWDwTXmhD5Zo9k4E2ADWNSp3rqPgu71bgEXwSotuWFEynWW2wsnbBBB7k3d7mYC1ELjdbJ55hX2bft3BVJ",
  "key3": "5keAVojDHrzky2XZRCo4Gy1NTvmath7snsJJpW8gZNMMMQ4W7gfBz33zd5fL4NnqpzgFN6NuvhjLifMg5gmCwxEY",
  "key4": "4xGfjeFp4CUnD5Ht1hiHsoPzttrwRrVr6Y4qeKPRUK41rYnddAVfzQeF2hUNoprf7JVUWV6LEXnM9yJm4FffdkWx",
  "key5": "46TmWnv7xTiE8xx9hwtVRUU1sBqTBEnJEFPhhHz4Aouwzj5WWHYcZE38wpowLzPzi9khk78j3fv6DtjZHGaxCgo5",
  "key6": "VeMUHoECrHwbfjTbKd4etuTmdND7veMVaTREV8nxdE2Wkz38DyE7MBTauXvi87tYU9YVP6XWcTe4yzrsvuUZLp2",
  "key7": "otZhxLbsdeUrwyeGUvqRtzZfkjnRuR7PzgXNQHVs83DkC13P4dKVyKaFoYQvkUvtoqMowf3dWXRTBtXvX5nQxt8",
  "key8": "3UzxdYyTSEHzmMycpGqzUiznRitBbELUDe3CDPmfqVtUnRFZTV6MoB58iJmtsXyC4g6axX3BHFYNx3Tcw2wH3W3d",
  "key9": "DqsUU7c8VMcX1vzR9LZns8rU7w2L3THsmvyr946mHJKtL4gpNRNCqFKJR4ip7p1uyvuQbjbKsmEDe3YSUaZuisk",
  "key10": "ik9c3tgCQuH85CuFTv8toz7Wv6jXBmL3vzf8bMmByuSRSeHcFLNaPGSSpjyyoUpixaxsmMBeLeUEiabfDnVNn2Z",
  "key11": "4cBYkaCAN656WSt8Ut1jsXyQhSPBBKC4nkZvNSLLuHS3apKRftcw3K7xYE2r1S7oy8cGsbw3TaWu4k4wgBnNQaNK",
  "key12": "2Sp6tXnH5dbQmMGHFSYTdoKeSZzgv7BaiSZ1o4q5uzn59L1rYcNffunyBDVnu2XVXPPu6tC2tZwLsS5jfA6ZHbUP",
  "key13": "5PaFdriVxknpqiqxkuCrTkhXQ7muewWBiq2sJokDuH2PJsDSfBMQfyLHJsWHNEenm3KtYsxA4Kw7oPnYLpJTeHLF",
  "key14": "5nzcSH8KoBoaqg92Sa5m2tf7wJP4BKcXZBzV6gfjZdaQLKibuT8vAmMM7WQ3EY8nggaEn4UEhWs1sMn78vkgLSYd",
  "key15": "5sYb1wFtMTGLCZGD5kLCnxB4kqJ7gKAkFvYqiWLxhAJQvYwJri3qgjroUVyk4noXbLqn64L3pvPVpEdyzRrgeE4R",
  "key16": "ssBbASyeymsBXXPiLCuxTWSHHLE2aimACC2vgD6HcWVubVT6WazJsvy2514hP3VjYjB3Ahr93Uq5NMcsY5CHs7j",
  "key17": "2VHKgj8B319src53LxHxSBHcSdTWTHn3HCzAauBSkAeexzamsN27UQAwyDPatd3tXFuR3YZignA6Nec8SeNC9H6m",
  "key18": "3wnwyr6VD2PirZuxoXYspSBznQtYyB2R4rNveEfKS9EqvWTZwobjgN8HzWbXZURiuSnvQfYyhxStNs82NVkyVVgZ",
  "key19": "5PtKjRyd8ytRRfNj9mGJAQPaBPfvEuQmjpeDTDR7gZsQXanStRRBDfSjytwH6PWFVujpqWp9CcDAe4TP2zpUhuny",
  "key20": "34Nwq1bGCGH3k6wZBDGpPX9RvSB8kuE3P6RHpcE6fdts7owjYXYBBCAXuBgdTyPCo1tUYVZ5MsvC89qRxHwvhd2h",
  "key21": "391gxECQ9V6hYk6pMWjGjkRzXcr3ov8skt9xqVaf4XQCtLj6RE5dEqEZ73MqUBoxmBrfR9dR77kgphZW8B12Jejd",
  "key22": "4W3nhm8cS7u3dST25eWEshtGxzSmcr7K85UCCw7aAPQPDq59akqYC88QPpzGmN3iCbZpFyDqGopBxKjqr5953cSd",
  "key23": "fipDVEfVq3HgF7rcLthzi6FsJzaD7b3YmSr7fzqTUC9WRDcqfiDnAVy1LwVeVeXQBXCE3KyfXTHCkZZwhk2KewH",
  "key24": "4KByKnXEfzMrf4jPRfoVhxpYrSafS2JkqTKxUCWeM7oCa8zseH9W4EmB8nUMCtT7gxTotoK4GQmeHa7RW1db786Y",
  "key25": "3Tc9MZeWN4WeHobzihDNCYnAMFKtVNPwhkxMQMC79EMzsCYeXuJVvFGWx3ap71fE22mXhS7P2XB8t1ozvDdt9P4s",
  "key26": "22ALdp76aYcRxkvajnDAhGTqB1cM2h7An3TkGkEt6JCb6xdcoLbV9YLHBEbDSRFPXX62Eg1MqaH7YTQT95YVRMut",
  "key27": "59TVjLGDCpVbokRAj2nBaWWcSY3Sd7FsvSxKSXofyamSVTdsX3TQnscw5xmAu7ShLw4e4ZHnFcK4VtrBroDCjL9Z",
  "key28": "3pBC7bPDXKe7eicTjitpJQ5bZ81h7gibvX3m3eYC1sxktExReQXTmouHWj8yoh3Hus5cBEz29t1oZUZVDVJzapD4",
  "key29": "C1HKYiREU6dWhRkTBsgHngzafz5JvCNY6Hnphmi6eNYihQj2AFsDLrgSh4ENvGEiP8ZYLK9uLPXUMHutFsVVAtE"
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
