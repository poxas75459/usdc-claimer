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
    "56PHtiwrrt9FmcZx8pinPZZSEnxo754RZMnj63Y5jjFNPnAroFbYiLVjDRgE13wcasDzP1a5keS1K4LjPnieXJq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y9Y2gZi4LbvFen3HD7dBnLAFGnm3pMCYyS2gUDBNC76eFLB2HXZcvhHQQff33YAyzy8nmeJMooooaFxWj81Zukc",
  "key1": "2fAPvRukeC8G6dN8tU19qdreaN3MZfbWhQcAeA5y725njKB3aQrQPP17ZCje4HeMgVJunDPzhYQrRLwaZPBNPX8u",
  "key2": "3jpHTDtrvUAqV4hGSLm7smxMnFndKu6YRe77b5xA3zA9WygScfnZKkjEZqQ77hNuEsNyUfwqFDHs7hek3XFAQLMh",
  "key3": "CV4iE3vA5F6tf4fBfXRNqLX4gVT31Eb2MrDipyGoibSk8LTyKtUF3SFPBwF4NmTbwhwrFvKDu295LdXaGh7bRqN",
  "key4": "SQEK9qtV3vCPc24m9hVxixcLsZgN9zTrQB34fJS21gDG1VUUQ8yrUNMGArntrd9KXXyM7xgVqhCNr7b7AzzDeYL",
  "key5": "4LzURKLzbuBBZ5ToZ5burYDEm5qA38KpPnNupj9tkfpBahr6cZdPN89BQkZ9XeDcKfAF5op6ti6Agv4zHkRyNMjy",
  "key6": "54rxniETvohpLPppcz8VLa4sq4MfARaLvCU2EQJ3ZUh4aKUbY649MZkFKWGbFTcNHbtRtSn2hDSEjrbkKfHpd6Yn",
  "key7": "4GspuqUkM2wgNYdMVYq2nPVio9QPDL1LvbGB7RexcARzw3u9wMo15Xox6p2Q3mR6oiDEDys2JywKM8Ky8nHamxia",
  "key8": "63KFRKs982Q8oNk9dWKCDm3aeAjkesVBuccVkRgvoVVhCBZP1Rm3azZMmWTmsph5gpPpiG6TVfHvikPGrnti6vhi",
  "key9": "2qv7Avr9QumwJ2tTgkVfY5PYWiiUUoEHSeZr134Dq2jMnUQ4nv6AaFKj96rZ58GvdSCbyGvBvTSvep1beD6zVTcH",
  "key10": "4gqgK4ZQt55sXbXSvRxyPEGmwuiry3VqTkHpvHQXVYF1uhQwgYVAWPVCYxohjSnuzmazJMTnXEVbaYYvf36ArDg4",
  "key11": "2DXMVgMmxjZmfdbuwKnm69kfeR6BoQD1jESpyzmGCGQpZRfT1osAHvxAGa2osXZaBfk3z6cJdyi4LDorZHm67SAA",
  "key12": "5iMeFnLLqegLMirKZFHCyYScni5rZD39zuogMTUu75RTKWbv2a2uWcWHpeH3wfvPwTy362NciKxfttyhir2vQtcH",
  "key13": "QaVtFnbyQJ181tDcF8zhfTkmYaq5BnR5Nb9Bknc7HEqy5B1iL9whK1fjZXPduRaSFynKmSMNz7XSGcfVHxGbruS",
  "key14": "3R2kA9sKfCEemWCdyBSvCbwSmGaNgXNJxty6qaY6F5NvjJWiu7MKQRGkhp7bpw7Hr1mY7RktW2dg3PbV2gX1FpYD",
  "key15": "65sLDu2Cho5Wq4CUuuSd5dfEBJShysvyjSVwEVDXf9EECcBXsoQEPJrH6vpXMMiKf6GpwNb3cLJZyVtFpFd9hnbo",
  "key16": "3xqVZU8ZMkFKw9KckA5iXhQNaJFZQBy28Xr4N6MtWecB1KqQXzd3ZMfy3Tj9YjXmY4jTvaB3UedazkoDA2oiUnB8",
  "key17": "qz7DZWmtUL83fyK8ewZaTQY7bhna5UBHK4f1rpywptnWZ7KLd5AKziae5rBQ7LAsdQAMWcDTHFFcaxstTSvS8eK",
  "key18": "4YFJY8ScSS3o3EQtTvyqoNPYLKCBY8AjRJsXQkEEQdzi7V178sNPx6ix6sopmtWnEtJFC2umM5yVjM9kKCXGrPki",
  "key19": "mPPsSPouAGK9KfwcRir6hRCuh7Sg3j4BGewYYHkFnrHKqrxGYjiiRnrfDKuLf8vghKcd9rkdBD1Nzo4g8RHdnUB",
  "key20": "5zVocEMPxRHTG4qW7pCtiMYZTqH1VMgWQ32e9CA6JaRmEYgvEXcXi7XaBeQdzxnMiPFSabkKVDuubrMyAeTUX3qW",
  "key21": "2QQst69WdeQ6wyRZc1R5ZH5jH9WQZAV6uLiLP87MhcFmgmBr8xyrfxC4icwLDn7GvzCDCLhYsGoEqmoZMU6W1y9g",
  "key22": "3bbQhXbYyL63zZYA4NEcKPX44MXms2hgCom1SKRRHgYsmW2axruQYvMrbJhpAKZ3sa3W1BhhsYpVGU75aZSHEEuW",
  "key23": "5jNFDbpvRuoCQ3Fmbeutm62RkTD6qPLorjibNtrTXzFcpXYcayTacfMjtrPeSzd553Xx2cCEC1bBHpnpBV7wMU2S",
  "key24": "3nFCNsxkZNhAuyiGN3GALX22xCTBZCqKL9mS3yQTJZVSiE5bCgSzDfZ6knSqtu8gaYVZRjFq2jZKQmRdsm85yvtC",
  "key25": "4JWeTCPzhoifnLRhdWX8Bp54Dy766EC8uBaR5sWgMWpeLzG3VvR719JLzyqio8MksUPhzBdAQFTQjN6T4fXL9WJD",
  "key26": "3LkqDznY5URtKPZBpNxzetKLYs5rAZpgRsVpCvo1yiSbhKsazYGy8kRF2GPPwgpodgBuTYGbV9dYAwH676qJamyL",
  "key27": "4KBS5PnvC4tW6jgQPhHfPoeVuqepfZPLoQQFv7pnC98Gq2DrsEXoCckMgGgtA18KRHxJNo3KBBraXwJhhMg71kxF",
  "key28": "5Mp3dSLWZjiJR4TRK1ibFWDeN5Xt29x65HNmgTPu9SZZCvoi187VogmoLQmLkY2NM1nu8FzScibRwVpiE942AvED",
  "key29": "3597REeiyvdyE1Z29wuvas6nTKDnaKd8XW6472UqX22utDSxPQpsUW8MCDx59cCZm8JSr23mVMqe5N19qDwueG9h",
  "key30": "3yvdeJ7utLsw8Tuawp1nPQMLcVzrFikCvWAjPbnafSqcmwgWvddr8vh1oUHo38fHeySe9sHfNjr3QB7UJ1RPBT5j"
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
