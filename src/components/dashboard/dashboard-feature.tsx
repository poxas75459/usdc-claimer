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
    "27JugA4CGgHaJ2DrKaWD3LuzmRJknsignoQFJ6QB2AAJEStwssLsNpkMo6dKYw9BbvS2phj3TysFP3FSYVCJu3kw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qvU4LWZW2gmfhCcn2mr8PveLGEg5neEaxU9KeiwL4z3XEwumqzUnxrk4xHhtcQhSgYjRbEdPcuF5WaBx7FtUJ9L",
  "key1": "4MpftvEpBPBVcCNN2NFPKYohwiheNxFQEVSSHfWsGmeCV74guyf146ZCzsUJFWJPF2gyXqU7RA6DHq5us5UCfuLE",
  "key2": "2mHMzKEzQScFF5gAxZoAitcHWLAHSuxVYgZ7BwAGAvVZXRfe2za8UBZ9LgNNvGbcg6D3JVgHCCqcnesECBK9QpXV",
  "key3": "DaAFcHHcV7gdyEhM2fs427LyjNsYPyRhspNaCV3SMS8vo7ZWDErcDpuRLkZuwmrkF272Tx95xN5vPdqJwkModea",
  "key4": "2Jhd6rh4YqqzYwoLjaAHRAXMjoHYfUdtnUN6Bq22BxvUgXeTTDNEwDrLnXsA46NGkzWQoxmcz43ZXqVqAQCwndZf",
  "key5": "2zmxeWxmVNKHBo4cbjehBJqqjuTWYGyXrtsPzk7a27LedfZ92nmhb9k6xMAF5eVpAVvKaAwY2vUV3zi7YHZYEMZo",
  "key6": "3dvZsZ1Q67jsy7Pf5zmr86zNe8msM7LMYKTzVhYdcoXotEwQotWuxevwaUHEXq58pvNpRGvWSjCfJsFf8FPyREEi",
  "key7": "5dVaTZkauWMkmDzvJHqBu2vJ6eG2pCStkoHMwcTZBfTaf59rU67Fu13kddNjZ2HaYenzMTvnE9DdKMSusPpjnvjN",
  "key8": "4iRCWQjocy89yvR3y82rrSDFsVgJXjJPdTrcmJhH9WXhEmvnqnUozfoQj5NTaGNjMYoEbVWCMRny2BNRrXsEMdN1",
  "key9": "4X98rWRpzKfC7g9wikx5KXxNfw4EXRBcepWyUZjNbRPBQE5vTTbusoHZUNBDGcxte5a4m6YwsUeyb3Yjj3CGr4Ko",
  "key10": "5EM9Dqesc1w4PRfZYuk66h9oemGzmuPvMk6qHG3K9CNyLzagcMxk37a7vmfeUpnuzrDxkZquZYFohVeneGvWkW8k",
  "key11": "4QFmo6wyWzvUh9WTaq4csAsNa357ExuAYun3615w46BrdR94xQTmFAqu7bpJMZDSoqCFqRaQY4Zy9ZjmxNiYAFnW",
  "key12": "5zvWuGeX7pKyhTqHsycYxRDcfQ5TGD8u7pRECGLDwDhbWUX8jJXdpqPdHvsedJQNvFgMw1DfUwrdwLmwoovg3xGb",
  "key13": "2VvYpCgz5fyGjbaTtpxXGNWNuLa2s69yVE2WewYWNYor9R2agkf2Nt581qMugicdSL2rwRwdUitVChLBoQhXG4jK",
  "key14": "4dnYSVCugTT7y1p9gscex3jFrNCVyQkpp6n4b3RKjEhjZhYn2PXxNMsJp8MxiGPxUeJToXY23H2mjEzjz8KMu4bU",
  "key15": "5cfkhp4b3Z9eiMx8sUxWQbb6jw9j38g2J51z3eKBwKZpDbGiq9Xht9NCfHvzMMHXg5Bv4mHdj39D2hBJVVEqUtyh",
  "key16": "dtPpkLVtMCgKvJuV3gTsfVnd8Mec1tspxqbq4D2XdtsZFGGyAV6R5Tk4KSh4aEL8y7NRud3ZCuwAqEvyY97CAND",
  "key17": "4e4Ld8dRCdLH1g6Fx25z4tyrTnW5wYZvYxsjn4PknzcNqgxSgXf5F5cfhWbRuF9skXs3ihDauCgJtz9BqQAXTTEh",
  "key18": "2sGAn6T3WkHTS73GTkS5SJ3wqksYTnRiwQ2MepQrudXYmXp9jq8MBPLf6paW6qQMvWZ9oW1ezk9dePqAW9HVSViy",
  "key19": "4676CjxuLtFmvVziZeq2HfcYcfy4cE5DQ9W27qWi33gkee624CL4CqAGunLcuEL89cmDQxd2AEMMbHegenVEkY3W",
  "key20": "4mNsQQRKDr4frv45pYLAAgASMAhULVKJmfE3UVjy5Ep54kZG97yvK7byQZCY4YMyChbneoaHKS9XWBjEY6rJpkg1",
  "key21": "3Z8GsZhYvEXsmu8sbEpxJD1ySfdDk2avqFsPXJKz1LqAigwBVWRciuUsijERYQAivoZKErfq6kPKwqjZFp5zAwub",
  "key22": "3dpNQvugGuKb9ot5HyifTKKQmUpM3Bx5fuKt4S1zSpPNeGXbFTkDAgGNyqDUPmQso5ueJtzBTffQHgKJhnyPPobh",
  "key23": "AWpNVX822xYjyjAY3QJpTJSEYbVDypMN2WNkLkdqGABRDQ9AbtFVHSBs862ysuLfxpTXv8uswMSGz6HU23Ffjnr",
  "key24": "EBYmQNhBfcFkoHeUmHJ3zbTt6Kn7UD7D3r8F98pAxGqkVkZuEvHgtgVHpTGdmMamfiZv2xJtpdV35K5BN7ieD6S",
  "key25": "3EnFLTYCp2rqk9XnChqCCzyjkTcZRDAS8Ew7iozrCk1dTr3iKWgzydRgzJCtqLZ75GHUoik4kXTQnCwfF5RpZpvu",
  "key26": "39fkaUN5fknUYMuUBRcb2FJB6rh1kHG1fnDKLabtnVW9Juw1Ex9KXCXVszqJhzFXQ4BD7YjesMZN1v7X8JEUSpiW",
  "key27": "4fRYf7vkKWG7RpXaicFN7VFXaLjCvtsNAq1ot3YVtHd413ZK1Wjyc6LBfFHDwJZy2nmBhAVnGfJQeBa4R5ct9G31",
  "key28": "3L7WGfwQz7SUPvYpFT14buM8jsD8dfhy6UZnTKTQjrrrZG3yfP5DRwYUx2GuP9SRZKPS4uXqKp6jjSS8u64bLRRk",
  "key29": "33u6vyjrbs1Ta7Arq86rrFsHRy934nKsi5bVP1GaXriS3xrzty4KqW1cLF36caxYP38FgWntCnCVy8npniSU7Lp5",
  "key30": "oRF8HL3gymeRB2AXgey2f7L837ggdUL7BVG1b5UA3NEt43N9Eqe8n24b1n4LGRtaHmhPgQhVNWjrzdAaS992GfM",
  "key31": "5efM3oCobQjqUg7u1RLB4SLBJH2VYW4H7jRrrFrENchpMVEWQsRKTdji41sMd8D9pHgq5RdTHeQciYS7PB5qYmYo",
  "key32": "pXbS4hCS8dAJ1bo95mmqyY5dScPpq5VZTEwnUEkXYSBHRRNVeQDzb6tHPpGkscuXSrGWk47uDujQ8tDECuG1jzf"
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
