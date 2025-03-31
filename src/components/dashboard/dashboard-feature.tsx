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
    "23BTumBVSERVzrLsUr8hLnHBfTLgeveahhc67tMEcMKtocgARa7BUfS6iT3BgsmGNtNeYwnrCSy8R242hPDoJ9oK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21BqCM5xAW5b6MXJxtwpbdBXckinZTw437gXXHeSVftXWrPEp1sFgpFJnLn1h76mfVXpJUx5gRXUvMFCnfHujn7p",
  "key1": "5WxKdaPadbc6aPTiAUFDt8UGy9TaT3WKzKDFArf9W6B8s64HhJJamagVo3ctzRyAukps4ZUsaQ1KQUQ1yNJhfAe4",
  "key2": "4HHx6jebVCWchow3o9fkWHrC65Cityo9WodDv81ttmsJ6mbHi2pdXgoXEmg4hHF29Chexmz9NasBjeAeK66mfjV3",
  "key3": "5cCjRsXGStqAaUbsQTZMekFpu5uG7BLSztZ4MYtiso7jispPjmXg7wMzSyJNckixRMnxL493jYR5WsAW3RAgQ6cu",
  "key4": "4hfGEhfcHeM5UbeH49a5BKQGhLUB5LYTRS3qjPNS51czgWiu3sGim46spQAVk9Z8arbY2f35x3LEQ4g22Bny11zM",
  "key5": "8SAusxATNyWyTkgW7iTYmazk8hgQXZKjt3qUk3p3dkxeQf8hP1gCiBLxNHM9ex1kfn3vzH8xdLhTdRtfrFte3za",
  "key6": "4dvfJGrKCGJt2CFrNGJa2Rcny7v57yJHPxFh8pUzg6s48Gd7FAKGdRkN6ZVZ9Yja5aDbj9iRf9Qr8M8dxwrkm4v1",
  "key7": "2PaeYGWozW4BsqYopZbeEjeEdvQtr9Hg1C6b7miMYzemnESA4NSGJoFuhMPTC79HJugU4mYh14dBRWiwPJbbHhQb",
  "key8": "4NRLoqzu7jLSTUCnGWSDkbvkJTofXJSmcsR3criwehUW6QBXFzD7jzw2Biv4yesSdPSRqyevjEEQUcHxyaH7KLC8",
  "key9": "9jq5aqiYSCMAvgfiZgFcwwmWTnTXMkX8LZVYJXb4YJ8jEpdzX8wJWvQKLBfwW6qLazMEfZWAtNbYJJsaZvNqzR8",
  "key10": "5aTojTbkmgm4rTSFSnE7sP2yS3kigocxHSth7QvmwL9yc9XmEokN84bRtcAG1K6cGVSh4aDvFZjQboZjk9xeVTW5",
  "key11": "4xrhDsjrQ9JsRcbPuwCdeEDX9eoRJ2PfaoDvAPN8FkwzmDaSzsKt6vJB67CLYhhx1hmig3DHkFhsfPomrZRM4dwJ",
  "key12": "56o4GGjnzgWHW85wJKaP5FjtGVZzZoJsiBQPGF9KArFCcpEhXUrhPXd3w6znqeW1GosPjVU6HB1QQjrznvDcCKqG",
  "key13": "5L2S3s4Qw6NBmZ5PMm6NWF8TWTGLQq7dsgJGqMpLQkqZXirDvWYGifj97EkYcAHB9MjN6r9QgbNjiJYEGCavuUQf",
  "key14": "3Cpx8MTandGNQPhNjZk7PmGjhec16m7w79ggezXWHLv17DjREMRGx4dhTz2FMJpi8TyrA5JQ4uNdvWuaKXHZHEZQ",
  "key15": "268XRZFPMu6BRngpffkDbmniGeTAJJzcTR1sFM96uzYji8gaEZ3ewbSY1AuAoVxWHyLGATm9y746uAkC7C5uNHR6",
  "key16": "5rRfteuMuK4mYpuLWrd9GrWfcSz9t5aGqEdg5ykjyqmQvV683zTu6zpMhkVPjit7KYmp8WWrZhF1KvZbAxvW1GFP",
  "key17": "3xj2oydWxJ85DDw2uuqcWtPEL8kEDESyc8iV46d8JW5244o7WD9FwFCiyPaYrM2X1GhVA9yg6FgS4qMyrYGqJuoL",
  "key18": "5N6FGKA7e81whoFPjNq8sjPiGEXNSJWgimts4TrpRttjBrE1GoPxNzp2oUoBvWisupng7rcooQtqvxJvinuo5imE",
  "key19": "5z77GHbirDkGMeRGmCFVm6fxQ5o67hihym2ESGNdLVQDNDRrAACgg4AybVAHv2MU3kjaX5YVtBdhgVEWD9yQPFrf",
  "key20": "mBD5C4eVL5Ea97smYHJrZgrt1RjStxu2oTz649MKooFNvn1XUfCQEVdjLUxU47BDi6VenHGhhLR9ez1xNjdrfjV",
  "key21": "38BiowwVXKqWeCnZd3kvZ4i8gykLGyLHPs1ZiSXeQNoWGPa9h3FgJcRFHGeDf1q38xVJFsPZRZGB5czmEMcAHha1",
  "key22": "4nsUegPSQZes1EscEqRsr1Qx8BDav4QAHbBjPiFBDosz6Xn2he9NDaWrCGqkP4m2J4hbZgD9L2tUKhAiQvLksmDM",
  "key23": "4Mh1HezsLrY7ootocqfkeU2u5g6vEAZwd2NErQtKuYKenpFto19w9vSLrZZ3Kja8omgauerG7y95sAVELfsF3bjs",
  "key24": "58UEUboc1ahGoaNNFt7v8ziU6rhUf7FXduQbtq3oJkoe5T6VnLyhdrNWGZRpSngmPhNQX1NMemyCxhtgTQSXdXQz",
  "key25": "2ayLaorofFfnqb6wyWF2oU7M4ZcHR2Nq4HkEoiJgUZZyfsoqHYZaUiUuTtifsXTFWyzAHDoRX9MPLfH6pydJqsRq",
  "key26": "2ijpeViqv6JUXaF6hKg1sCJbQGjz9qn59Gvsb6NnGesh8UM9jAnqUg8h6kbFhGi6FejYrDqZiBKsCngv7pQ3nJpJ",
  "key27": "4udBumukkjDnwpSDCikqP23Jq9jZ97tX7QnZWuVHpwPP5mrUovqPYVkz6FbLJff11gQWGshnXi8rEB1s2SFANURy",
  "key28": "3ksryrPFXZQqT9aFiVkVYEYf3NE4vsDrTVP4rcvoHdxEcHSqZozCXtSnsxnGCaaThnnZ4Z5PPD12iLvtwYVAExwf",
  "key29": "38iGEqMVc7bRDrPasRaknTATwX49XB67GDxzX7UvrucAmUpgmoHACTwkJKihdWDsePNikdUucg9auphcJBH44v95",
  "key30": "3CyX5HudBHExD5WPyi2Pwz192fL712KagHxjGzNZcZQWf4cEnTM2dUFVGLSqidAT7WK7qypVsVbToT2nbfYQgzYE",
  "key31": "2WzgLDBYZs7vGvzUZrbcVWACrDbetMmcjT2s2TYSGEjAw14q5LDP4D6oS8ibS2Ga4c7RVPDXeNog85QkNiuMHwN2",
  "key32": "3tk7QJuReLRcYUEo8Mzw43DjnPcwbpjy3qwuQAj5kCZBSjcwAASMKfPEKAoPieYcZTREMhL2LinXDnMxb9rzPsyH",
  "key33": "2sFBxDF5GEVZfcUAwHhksHZQrXEdtZppq4Nk2g2Jzr5tEeHzFGmMtWfRyYKvfchB8JXoXqSd2K5BqCbRcRxMoePK",
  "key34": "oFQyMfnrGh4JfzkwkEXZTi1jgbnSYeiY8anoyFjFBd2YnhuwFud6opDLvWVCGo1YkNPFuqAvkJVk13AbTQfLHBe"
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
