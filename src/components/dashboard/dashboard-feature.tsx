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
    "39K4yZFTznzBABs8iARvZ5VoQ5rg8gC6Z4rPVxrzA5TbethW5utffBUGCwPzBwb1p4tjnAG2n69FbpyQ824WAe4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2De8cC2r2oeXNdoiFAf4HfwFz2Tg2vivHDw1nR1jViA9DTq2pqNj4Wg9pwJeCUaUkJbgX9D2zEDRpw1SfWVR34Am",
  "key1": "3kMttoRd5bP7H2XTszNCe3Xcy8VxjAGJUCTm1qbTbceqXGdt9evPR4LXZNtxyRQncDD2exXyeLA1HBAufvWwWBY8",
  "key2": "UNBgAXpnSoPAy2x6N9cboaxf8tySz3q6zVqbeE5ugjiexmcF1jsHSUkUoMNhG2MTqHRgRjTXsbHYvMc5U1uD6Zd",
  "key3": "5JE1CJyJxXcDSbULPBBhow4nDdTGVkmXQnKp3UvzR8xKKKdgaaRHLVDQXj698271GBHXJaQVHpbxfHaEkWUXbzgW",
  "key4": "2VyAfNKsJL5oRqFAypzP2jou6pMXLRtb7fc1BbupDGD7DdJkcG4WHzdwTC3Jzc8Y4i6PAXRGCi95NhgroW4Qgtgu",
  "key5": "oYVcidqip9hWQzNLa2EEbkaBnUKs62SvpyAP928RLmuHZNmEHgpYccuhWj4cDyWspQMRLHHgeRBNS7xz3g9WMXw",
  "key6": "2qvPMzmgAx9xmXCM2BGJUVr4t6ZyVxPK66u3FmzQMYNvfFPFDQRDmyhva5ybMifbiDz2D9ZhuT9YBbgP6zMPqHt9",
  "key7": "2kGWVNdk87qfxxem1rFwxH1zin8BjEPr4YEtkMCQv2YG9JiiweV5J4Upyy75Thqvsyia116yY9EWxcG2MfxPGgqi",
  "key8": "2YGiy3PV2g1xKzYd2Hyw8G75csUThSKyAk9qCEZZ6psrVvp3YqC18nb7sav3E6bTuZygS3bscuGrrdHd2fmpec96",
  "key9": "28s8N2XKD5yMSdLmxguf4F1J4r3AkXSmmqy1jHrBBNVRSGVfNQd7CjQZ93A1XPpivUAznwLXyw2UyzezM9MgKPWw",
  "key10": "4hUxZZZaavewtvpmekjF6xTzUu5gWdrtuL48PjexwDida6pBUbeSkTa7SZST3RdYPoddzWeGssU8QPLAiEFt7i4z",
  "key11": "4GfCqkmpYcX4wj6Wyac8tvJEv7wFv1KRMSjd1wJuGvXcBLvTcwThSkxjQ19GPpSKgNJaW35AUDbCrCWFXR1T3mA1",
  "key12": "XmHxCWU5TNec38rNizTsDroBffQ87DqcQ8uCcbcN3Uvw52c9BqHWjiGTeGERr5hTSdDS5amg648hoCqLwFS7kqW",
  "key13": "4mZ4VdH9NVnMaGKRWhxeHxYCfsQdHAb2SEy7BywYToHqkzkujbG3wReGKMnrx5y81w7xiNEtecJqAoCGSLUJgvry",
  "key14": "z1N4RPoWXqjeRdRWC7GJHkgTMe7ATv1RWgBVxV2md2NDpeHyZJSk5UrUuvGAc57prsnLLjT6fJKy8eRuezebwG4",
  "key15": "5zKCfUwhTEsXsVGr8HrvWj2reATUNn89Tnwpkpf1FfESqwYWMbGyjsD5gf9r6T86XQCruEL9otrN4nFQTi5T7VHK",
  "key16": "44Dc8UjT6yXiQLPQP91Xxnorn2xKVV7BHyPcdKRSW6wXXJVCjwERbUHLKZrBVco66HBkQPJezBdgRq2h74qDzxYZ",
  "key17": "3PuDvBEfynRT1aY83xXThJK5hvcgWZx43u6Se9SNBgD9nVaFR99w683EZJxgMUBdv8sReAAiaMezF5kyU4dPgnwt",
  "key18": "262ni7YM2vVMqrQZmxnEiHrFkwZaaTPLsJAfTzBREBXkFt8FTpKAwCN5VQL9e2MaHyonyeJvvxcKZsidt1nRjWtg",
  "key19": "2CHv7ZZTHEvgVgqsVNebY8cGP4F5KgvxEANGut9wQ8ULbinamSoANJhrSTJmaQ4anXi8DuZJtJrC7q3JoL1dpwcD",
  "key20": "34JyuUSLeszKn2ahVXvu1hjaUiL9Thx8iBrK9gJH6doXwUrFmu4n2guMjXpKnkeZ5cPNTxgrkEw3iXPZfojxkTBB",
  "key21": "qEoqLWatXWDKhudroChh7FUxque7a4kchxZUoWLPp1g5zMNL7Lje7xsxu1p74iehLBstJN3BfJPXUvfgJFYz9cp",
  "key22": "3537Qzx7ioNWuCsJshXUwtkspTHaLo5duo5T81PBcWPBLgGkrdVHufGpCiJp8LUVqD9NmpaE68R1jvfkQSLyDo97",
  "key23": "4vUdpQZAQoMXjqWd7mnjfCwscSa9USVxh7VhVgyBGbSzYZtkLDPFGPyBDPoSKro46VnHWQBZmDV3yh8J9Sz79BCD",
  "key24": "4RtpTzfjJnBuiPboJep3WiKL6Yj8fcnjVkCyoDD85iuvSeGZVuTvT3rQMrpYexQKvfspdKX9hFBqQEdu1tbNLGzq",
  "key25": "5qGzLoSL9Y3LQs4ySbgvdKs4428pFKNMSp8DQ1W76BAoyc6vhynHmC4NYwqFbmkhX6DjbhSqwAMrREN4w4paEuVi",
  "key26": "5LTeWWQtUrs2aD7XMkW7foJRp92yGSgNVz4wbKGvKKLywiXMo6z4XDEeTQGHXHiaFqby2FSw1gcHjF3EghpNkXs2",
  "key27": "pFfsHRFEPfM7HKdAsF6ndkSHtf73LM7pMdjd7g9kVgXZ4ufM13ae7Gs4MPcpbGq2R8vuuyQJ2yqsatcqbXPXzZz",
  "key28": "2JsZc1GpUw1zuox4JjzoPCVp2Mkt1TyAqDTjMRqQj9qKRomK8jta6d16n7LT4RnBvoKyUMNfNN25A1wrZ68aXzQy",
  "key29": "66Mtouup7rM4GxaRJ8r63tdDGMtAosGPfU1oVirQ3Qz4SaNXTk9LGCEg8QGaYRKefgkJxRVsxSwowdSzCbQpsRU6",
  "key30": "3QVVwPYLonGpdJRkdDhqpYHUs1HG3wcr8yrQggUcsjhMuY3DzP8qGV22tvMqPJvyCvFM9Cc19267PhjFbtpUyrez",
  "key31": "4rDXKw6keh8bLDPctjrEC5awRrHzPojTkshgRuZm5hzNvoXGuMhcrWnFHdBuxCyxE2zY6hgJawLq8oCkpKADXKox"
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
