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
    "3MFWMwwdQkXM9KvBPsq9AriG8kB38NvZ4NEXSjeNa4kpHsboGGpUutycPqNWpeLLv34XjNEsGrDuwLytbnDnSbJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UH38x7U9EyW3dwvZypKzQUp8xdJCJoi2yGTAYKJZsY8PTDToyBu2r9vfEZcehZNrNNCyrkmRyZT7C4rS81cZU1g",
  "key1": "3jpZgdz7M9BWGWsX1xj2JZ89BSKR6g18UxDT52mNGxnjbXNi3xaoHpB4W8TfcmYHEM8gDcQrqMQhXun3Q996EznJ",
  "key2": "5kd7uyV3hK7NJCd1njavJDFg3t8g5a86FutSnS7BSNbLfExDhjuakukXcNEAjDXaP4DKmo12vnQXz7BtknbHHfNm",
  "key3": "5CSM671g8UfYj3XtcKvjtkEwPwn1vHC8gNhdz1p37PwH7C9BqMot3Z6rDyrGMNdsZxbthGPoXdHyTMPHLXSGaCnV",
  "key4": "2auALZH39sSqkPByoMJeY7j2no3XCZu5MDG4Su2mpEVWLKJ2u8ExtmzSEgvNkduB5WCUfqAJSsucURJqmsstbRgr",
  "key5": "2nxRfyo22kRqTSNeRtVe4LMbQyDnPhTCh7Dyjf1k9nSUp9MZX6g36QQvK8fQxAR7bNzMhvooeovM2TuBVDJiCthq",
  "key6": "5q8j2UAPXdLwaKhDYaBuZKrCcqsmtFaLAYGHiQmox4BoFY536iAvWmEhEsSCxyBkJKyj7Zzk41LpnoCyUdYoRm2Q",
  "key7": "5vapZRHr7838v7faQC1c1KSW7kLvy7396VfuGbr6DpSAuiipowu6RdShDa7g5BFp9qe2JFR8rfBZJTa9YG4LknQ2",
  "key8": "61sP2bBPjW49H2Hh4ZUKe3r9d1s2G2aGuEoggeAn9XHspXLcgR2WYVHwBu3RqHRS3WbfMjHzEH5SiRajV7umj4zn",
  "key9": "3soZNdrWwuEdAQg6T6iySu3y8wzPxTbRZKgMq9hSm4YpBtLhtD11e5XwHMBxFVEAgn18ejoBChHtCQWP68Eubzc5",
  "key10": "3DPk8vbZi1GfeULBiLmEtGCEkjVP5nvHSxM64fFSs1mYwYubvSXUwe5S2YpbHMFw5EfMBwhWPoUpetqreoh6vNvE",
  "key11": "mbJ9nCHbVDst63otnaaQExJNmccJ8Q7xBPDk8h6XiZzPrW2BMPnQrBnNqaLyt96RoQHpRvnHqXDPEUZqPnNFFUi",
  "key12": "zrVBfVGo6H4xA1Xpf28rH8Z8tGBez7r4qEoq5iw2VCY9JZuU1pnA3zsWJJp2NbV8b2Yf6TTcJ6NJWySFqt5iVvG",
  "key13": "2XoM7YS94XfXdLESkmUNYHexBSrEYmqE9v6K38bBjH38nxkJaXik8v4g6yhtQQuTYU2i3fhT2rC6uuJosJYbEaRq",
  "key14": "5hHok26pjdaA2DeLkqBeTkZ6yaNn2Hym65MqSFX6FArMAGNFXyM5h1GctNLYEhp5D9DU5XSTwjELVfaXHqrstoVz",
  "key15": "nyTYQq9GuPYGozoQ7WoKhMfNfqqpqAd7rQ2f4HisT2cE7oxBqQCoqNqmRcmqRmtJvcCfaYgh3T45VpdstSacsqX",
  "key16": "495VDjHqZcYXcD22vWiZDjKEnKZy4bb5DasiHJYo3bZ75sN4pGWmgh59go7vzFs8Lhw8zAdx1WLFkq59pWC6rE2E",
  "key17": "64kwr4nkL3DGD5SFdxBAEhcBEGYbTCK93re8Ce7Wfh8Zg6TaY2U3AsTmb4xPceGjm4E1zkzF2sFheKtTxG7gb9TF",
  "key18": "47GsYU3qDuG7MTdGtUmji45u1jmC4TSgZ6dDeFEofvNtSPTuDqSsTPU8tgT5jLaunJnB1Sw6np9oxWesupwmWifv",
  "key19": "2NBh7bRhGQ6gU7Gc637D3EhsGBYoAExpNMxWtXuho9wsdXfppZaK4fUcj6gn3zN9iDPyf9PiHcXDvEG9G6pigPHe",
  "key20": "678q4e22Hc9gpvKNVdrPJLqBtzs7r1VYZFcK6XVqeQYSEqY2gvo2wBDnB9kYfCjnRunyB9z51W3mZd61uwnLUrEC",
  "key21": "5huYSSD3HknG5HYoxGB9aHZ2tnR8QR6V83poz4nKBwMeN4ApJSGJTnaekdqX25r7rdv7ADx9tRm28RAzh5zxRUpY",
  "key22": "2HMb2krKhxiEWk7i25hR3DAANmpAPJt1Bj4HmKfwCiW5Sbf7TZPtMb8Hs2oH63Gt8hF8KRxNPB7ptYRbRQnooySp",
  "key23": "FCtUSp55hMXxDQnzzWDjNPFmfYPR3QtNACV9q9Zv9kGVyWrzaSkATNYXzZsx6Cz5nkC8gbdArhyQgWnMAKthiZh",
  "key24": "5msijnygiEiZydxb3LSQxLMF9KZZiCveV7qvWbJ8o5KRMyf6K2kjGnMVXPkAxyxneHbGNKi9MLhGWagu7bVN1qq6",
  "key25": "5Dro3tvCcTKJHhXPpiwyup7TSiKt5M9P1zEay7zNn2MigLSqCMBKAwVKL9ucVLdToRRyMTvYvm7HvgJg1GsyMpbF"
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
