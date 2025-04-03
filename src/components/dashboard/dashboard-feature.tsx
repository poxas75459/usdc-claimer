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
    "2fUmifx17EaXnmk4jm9a1Mv1TgLDobAkxDmArU45GR6yw1imKMekAVsDajs4ixXCSfsu2ziJfi1E2K47TfbUgKQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VwZUtBYh36fJ3JT8nbUQJNsEQzC7umxPoTyxDuQcmuEYppqscdf3imqX92SK8r2AASfaYP8k67tCv3gB5h11BTu",
  "key1": "3faQ2AJxjJWbkFE9WgbPxbMpxfcCNH8Qwtj6uKazHZThrRBArquwiZc6vLL298BkUNuBJMu44nd46knzPFJaQvng",
  "key2": "4g9sjXBpchufKp1SUKXnfyG4Tc9v6BQ17c3FovsJ3i64JrQ5WCvCpx7uiH2EyeNwwDaUbpUbryk5HnX6w4YnFx1j",
  "key3": "2exF5LxiivZDxsSb5YbU6HsyQYfyFDLW8k5s1dyPQBtZR2GuDgug2qcSMNdDwb2LssMaZqELuuyeDZd6EPvNzg3T",
  "key4": "2hRcNhanuQXSJzXoy1bMWEJsBghKEyKiYxenxcLHNV6E2GCFz9yWhqVFmP8i2C5XynQAdq4DFFqbD3ixjqEzCaqu",
  "key5": "2BnDX41RJAvVegRdpXFkYdPMaVQkSQqYBdgCDkVjXF8DzgiMBDtBvSVCFcpViQKCREH9zVTovzAWGSx2MhasKsYZ",
  "key6": "2PzJuGCjDqM4EjJc4HS7Xnnv8NbgN9xZZHG8ZCobgmRHdw9WddQoGoscfJCTcZq79n38zcn1Gz9pTK2LgkURdcAG",
  "key7": "3dUWZR89Y9zvcPRbZXW2PciozuFVZZgup2eYJnDMW2spRUhQE9k5tgNNVm6pbW5pSw9StU7puj38zsnTgQvefFXF",
  "key8": "PRJJDkXDXbvXXjGvQdABGaaimvLXXCkPGzpS8aEZFTbvwfLxANyQkvZZq6LJpsHoG3L4uqkCnp42N883Ao1v9um",
  "key9": "4uXPLa4R6WPvtFLFqyrpAikTAa42FH3txF4mngzyD5o19UDn3xd8fmT8ugqHbubVjTEky1XthnXLuuqxeoSpRhjE",
  "key10": "4B9aUujaAkuoUGL2H1kEoJgarXGo1fnjr2KMnaQy5vGVpYumWG1Kg7axwpZW9GiNXdA4dcSWyNCoVuRHnR6jNRjE",
  "key11": "Ck6pmkvTnZs7QvasQW6GcTxLgR2oH63mGcK3rjtd6imUcqaZZUtKsCsT8NTftNLNmhQLaiAEytV4hiERaRoGunp",
  "key12": "49d7pD7Qyd1NenSQeD3QZKqb7GxE4V23g1VYQWWp8JUcu6ZW8g9b5ugbK7ziqG4ENHkJc5YHEb7QWpYtLeuFn53f",
  "key13": "AyvDRQkjXYUkFe95VJQSX7ghnxRmYLEpexg7LhSNa3m8Rk4BzTeLF4wVjD5GzpCMwCMm9kt8wQjcQ8yyyfhvC2k",
  "key14": "3JsiKrSXxk4uhyyXHmr66Zqa2gCCPBXeHrLBKWHcKnkRHKAiWd1JSgijByQCQ8UMdojuUp7jVPHBv4vgig7HQpSa",
  "key15": "jbpXGQSJeHbmHCAdwvCoNQ28NkMdS4WUSZnqNAEirqErk9CZbxb84YZyWo8pHZP93thC19A55u76J2Kp521kFj2",
  "key16": "3E445uKKVQsGduF58av58yZ52yd7fKZonk11XRrJWGCBEqsbErf2oqjB1mNSjQsJcECc3TN4pfNrkdA8WkLDfDcN",
  "key17": "4eYTaA1JyUBQcL8LpfAnCBXYfCYAtoLpUGyUT1BQMkmYmPa3tis9tyYm6G1Fxbd1NgYCprDXLrt5vusWkWrNZaiz",
  "key18": "4TucttUBaZEg891pEebnhrfenpNSFg1KN8beqAR4a3H18eUn6dpimgHGSwdjcuZa542d7gi7aRYT2KzwrPBjPZAq",
  "key19": "kP9rJpNALCwYiEySoafW5Lz3tqR8Ng2tdDvUC466edthapn6p4KRfUSytXAcHASah1FbKJBu4i4aJXgt2XtiXQg",
  "key20": "4MstJTEWnZGM86xiJ5QeEjjw51mzwuqUp5WqtQpjYNARJ5thSfkFsXksMqoj63DKFY11eD5tXho7menY3K2QkRw8",
  "key21": "CFaYjKbKJEjtvEwbTxc8w5HFEqACtavLvRR6Gu6VY1r94SGa6ZvckujaNb6L7Uat6dhh9dP39vigwT4T9tKvN6h",
  "key22": "43EXQH4xg5QcqBLSa4AFZQAMXVRpamQ8BC1tSgR3wG2yM9pKX8GeVcJYXemwbnaneKLSRmv5GnFbwXE7E1B95UDK",
  "key23": "2hadNQrdoR5nEstYLyCAxCx6Dr5KMgcKLSLX6UgwVnwGh2kRS4ntFUSDGLGVdLt5hhVW5F1uyHjr7F5FnWXzSpVm",
  "key24": "3TdEhgSwsog1hGCcbNMBBefrBpXs72WBJBXxsSsHrNG8d8kqDs1teLaMTgqGdvW5mMVYy7o7Xr7t1r8qgtJn3Zsm",
  "key25": "48DpmydKRe6Qek8MjUanJmEb7wS2mdf9vTWtEYAPHWnnRSCD4xmJfCiDxBunARXiXBGdHg2ymDWppenbQrutckBw",
  "key26": "4xoVriwvEtBsvk3BEx1UkFqgszNhkkE4hF6ZNVaVre7P63C76wm7ork9KszJrLm8B2NJpHzmTukBu58kRNoWfJju",
  "key27": "3kwrCut5dX8DhsHLVw4nvh3PwAtQjen3qEhu75JsY1ML7EM72kgm9jZzy1u36NQrTHtQpEhH933mGtUCCQmiu7z9",
  "key28": "tYrp8RKNJyFLcD2e4kB9zRFMQG8rK8FHzUDQz7tax2pWdgeX6Ni8Gesm3oBFMQTsnneUBrxMR9tWrXrnFFmmiQq",
  "key29": "3RHd5c63mvJUMs3CW29pQQoTGNdmeNHpd1Lu5v3cwtSKPoemHMuPHVjA69wCPYAuXsjR7JPNuSfEeHcbDuuKav6c",
  "key30": "4TZ4pCQB9Ew2K6J2E6QWRuJM1ip49RfK7Qtc5XRdxsWoUQ2moZ56ou7zF8QdzTVJ7AEENRNzNC4Fouw7r6N4gBxG",
  "key31": "EMsvi5QUfVQkYbGHYLWTnY9RxJSEW35a7qFBrWpAsep8K3Kp1ryB138gu7qebZv6kPnZ1weNeYdWbZJaiU6Buji",
  "key32": "5W3y82pem9YMAVUgZduYeLh8rGhwv1ZPdVsT5ajdTTtU4BEQkXaCNaHMTPc6uhgPdgJXhiJcM5tTh9a8vwMcC8om",
  "key33": "5EEai75o99w2VhXoJtqPVRFD5NA9iipMvVb315gXVTmCNLDxSvMoy7gaPqtZ7NKHSmQCEYMqX34xiLddwzBzDT7s",
  "key34": "5MWnH9mrXTzyR2cMekD9drDkzcaH6kWjNh647opmQDDMG7LEnutXgPf2Mtj4vBvXCTxgtjLAecbGbJNS1rTDRUHJ"
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
