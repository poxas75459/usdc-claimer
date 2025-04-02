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
    "4mszD2uhisZQgchtE5aUR3vb8YUtKzGXDf5M5jHC91FpqqGXxXGr4pr3XEMkP18pHBiAwmQqXAhhQfwVn3uReCR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bF4zb4zL5DAJN9uLcJURa4xfqF1XqeqoELTRgv3C2oCbKpFDBgWr3K7WXUFfwebrCLVYV7K9CWhrCbUEmoUqFMY",
  "key1": "3D2FjcbyzS36kGS5Kc1G6st3YbSN9VgeWx6pvfhVgsLheZQSDZpZFeciigtKCHqkTzscVM6fSdw66HpwASUUHitv",
  "key2": "2vKELh1kT7Es2QVq89qWYpVsntRxUfCJoyypA9gnK977Ljsu8DVH29T3kFwJ6taJY2MBnVJwDz77jdTeKJEyzML5",
  "key3": "2oQNGAPhVsJEeKeGTbZQgUwqJPWthvRdVDH4TmrEjEcVkL7crB4eRGFrcqDuEvTBnc9uznfs8yRNymTqRLuqrja7",
  "key4": "2QKg4UTqoogzuoJPrMrF6wq2meWKwsnExPwHvS6aN51PPYe1cHn4jTQKZSheMsxqJ2Diyj2XNyY2W1Qpg15NfNaD",
  "key5": "4XTsYjmHDet4w87WV1DyaMfanrJSnWoV7EHm4yXPkNmibWru4gReum45Yt49HxNXU9XXQQ1pUzWLjbBCFiWeAEet",
  "key6": "4aKvg79JCY26hyxHWwv8AfU4wG1qGHmEFXkbbDqpo88WtWyUgYkBa1uisdDHGx5UPDcTP5ogfoLMLoZ3emGosSGL",
  "key7": "33EYrwstyG4GfPHMANK8PoTY8XBmkWj8vhcJHMoUSfUhi3A78MKXjhN5RaJrfRSgRgjrZbhCDyXusG7epUEF54Xf",
  "key8": "4CwgiLqZFKudKX5mV4iiVe1NVNLzMisRkE9S7Ex9Xs2mCV2YPsbAgvpcr11MEkc2zhDUnAzjzFbhv3mhwph6H8Xi",
  "key9": "NmZHxaHxrFGkDMe8MgiiW3MbqgVJqC7qCkXpvFQFiCPPweXV8Azx2Gtg1MUAbn2P9yJV1AYeAWo8nwFN4qsBujk",
  "key10": "62L9KmvQs8Yc7oefno9c7M2KhKQuSWupJocdVJegmfyLPC92qrtevvVmnxccMDY785pF5SQjy4pC1wexM6FLYSsJ",
  "key11": "55Pan3GfAZFjrfVKBv98pF2FdKp2jycwdFa58JZf5XUPuLmrqbLBQGYqq71zPUYrYT3sHtXVCdxKeShknkUG4t69",
  "key12": "3xqxyKzV5fHYSsor57iA6a7sXkvhHPsHHg9NET3Fue4Rn3c1ieASiy3qKBiCnAFWXfHEzR8krtVvwQiYYHbgoPqq",
  "key13": "66cNrbrtCFs8QbaHktehJ5mfmw43BvPzYHj9Vsu97haLuJ2E7vttyGG73FvrWmcDtsyQ5Tjv65vRTCzsKGi8DYog",
  "key14": "5UNFZjzUkd15HMrrtBmpRNYiVEyWcG14K9oinqEEv2LeWfd1TP9ve8aHKV4A8c3bNJAAbWNPzqMjuurKEgujEB3k",
  "key15": "29K5WACXEyxCLdSVfVoHvncecmwwc8QhcrTXi1137KgLSh2KD2UFB4xwJrpUkUomoBQCZNrarP9rdjaZA8Cf3khj",
  "key16": "3Ey7bd1LZR4GqLGf9Mqot9PdLCCPdBUdb2FQvA9VfZjeFWWKfvuDGc3m9mU2UGNTxZ7y6cbjj7LTWUG6dyD7QBh4",
  "key17": "3cUFo8E7p1eWTEr57ktyu9qcSCXxWhqoLEo3KCw7iaZye3rLjjZKS3pMSWn4hPoByEQHCM6uqL6hVWgLPt2dPwF8",
  "key18": "5J5Qw5djX8sRNUXkDCWSXcaZdxRFYmJ14Yr7p5du63z68A44zvcsa1RGsqiaKDAWevspwi25u43qQdMFgRr7LdvM",
  "key19": "2vnubTbXqKjV7ypDkqCLiKsBMKzGFyxpu22dHNxCLWDobEoQisoQSemv6edfHYDkbpKRWpDhmBqcfg3jLnwdGdGE",
  "key20": "3aJ3KKt9VwbceB21BobQRt7qaHwhyxFc5FcioioEmt73T1myKY5UTMoN3DAwoViEG1jz67DwBUHWBwYp6Czcg3vQ",
  "key21": "4hJ5NPoBiv9eJboHVum2BNHHAktgMc2HP2R9pALFBdRotEWPdScLP1iYn99JQ5BTCdFeN49vKeXdHDBCms7Rmmvt",
  "key22": "3JEkNBJUMxNtXQX29TCv9CZgBvH3316rc9oDfknCJ54UUK2iBZiZrhsJTL8M6ZB8kRBTiKX5bsGJQ84GddUBJf6K",
  "key23": "5QvcYHWDDjP6jL9gLcmMCnz3dAHREoMWM6tukusaVPeTA4iTCBTur2oEmLdq7FqXiftdXgMvkYenM3hnJ2kbJQRm",
  "key24": "2x9ufhTriGc1CKsuE4DVi4Z3ahUNU6qfEHhj6L3U6rvgYVVeTCbQHV3y3HANDdPFhhgw5rPPZTLFysLoQLQpMu34",
  "key25": "4xt8tM1eZ9nm5XBC2RKTP1PEbCNa4rgBnsfgpodxPtTY2dVT7jB9LumLmok77WXDpwzUkfBWtpVYyS8M2rxoMqf6",
  "key26": "2sdYGSeS5V6oVECE36E7CUtd6Uvhmwz8F2a9pnP6S4fodhvGe8K2tCmDWnkaYnDDaGD3VE15jG8pPncqTtKQF11U",
  "key27": "SSjh8dbeyUMHMtrVyf4a9S44jeVCuBiVKtcnmLgXMjXwmpuJjfrGW7UaHcUus7nZa7DTDLuY2ehr6tUkMecxQBT",
  "key28": "2DQ22Kx4Bu1FFvNW1X79poBi1SKqPSsV98X6svhvMKvGC6tRCJvqohuBEGFKMptRjBSqmyhVftPqwsNrxJnsK8Fb",
  "key29": "5J9ZGvuCeeVVmmfrwNKmRf9Fe8inYMUG852rNrurTZvG6Vgbi5q16ZBb2QyeH7KM3c7NSaTJzr99CyNdnthfmiTG",
  "key30": "42YiZmC8vQBbB51PkuYmahukKE6Xa43Daqkwu6XThTPXbjFfqCyVAqx7C25EHdnhSZ28N4hDFwEcZtVNPxSMBT9L",
  "key31": "52p8rjyG62iRtspbePDV4cQNGEXuLiJzMMah7LhncAErZXkxKYbtCfVQMxrQ99TzeQBFNsamg9mjjnUHARf5Db6Z",
  "key32": "2Mkno5dYfDbCfGtffSKsQzg6hQam3uxSGRLr1ecxWSwgh24zzf7n83vWqhLuxMk6hEWEuFFhit5oKvFWFTNz56fT",
  "key33": "4JtXnyzQ98GZBRvCTDU2MLcEvcFuq7MJfVnBuzt1miEgkAKoGgVeg5p14FCCR3QRCKjcNLJHAVMELREHwfQmYxom",
  "key34": "54QjnnQuQwdsbkSXki8dkjVDrNXKVVZFivXuNxCL5ZuT2DKP9ZU7dY6EAVhBshCyHiD6iHubmBFvD6YNfKdnrhJt"
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
