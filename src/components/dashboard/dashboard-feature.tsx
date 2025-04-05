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
    "X7oyGZwLbM4S8siHt7VykdvTXskK8VFuyAoU8w6YoF4G4BJavGL4GyA5evhJ3ScjwciQYfs6MttXYVHrmgGF2mN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aFVBfZg7DNioS95yuYZ7NYwrF1QgLko8g4V3MPsjVuY2yboRm2QYfMAcK5CCozyKfFwjZUgCWqa6yTURzfL6bAb",
  "key1": "4eTpLchiDSvNwLsjwnCy3grjQssUvfjwZPRtx34VVUicnisTkSNfxwYdkAoCKbbVRN7LU9MoT6Q8zNAMztBcbw6q",
  "key2": "22cCZ51utS8NXJNnhzECrrgHLVeM8WrM1ujeA7XY3VyM7tsZhpjRrvDSVxZAtM4JKQxTu1bwVZ6uGJV2Sa2rkkSC",
  "key3": "5oYG1ripDadgHJqpQ1LQJxscAPBjaA3dEet89wB5Um8zMkvsT9xXBhgVTREf9hWfr76Dgkqfz21iQvuu7LxiXS5Q",
  "key4": "4H6GECRQAYs586E4N9eXSegSUAdp5utHchisSh85SV4xcT9SUhDLYPGv2Lf6YCUdfgY6JFmfVc4APVpt6JzfwsCU",
  "key5": "cQvnWkCrncCyhevh8uvmCJjJiEWZRb8zsW6H7g1zgN1JNNQ65S8s89TBb4ebMfyyGWAey5QBLvj4wkT4BkK2ghK",
  "key6": "6ud8GHCvFquu2VpYFfUuKdiao4iEH2BGwdQ6T9AuhtC8ZZJQEwXh3nrYi9hDGKC2AMaLHucz1qYYQ2RpnMF9NBy",
  "key7": "PqpKFQKDR1aSUYBM4C4XCevkKtvhNNhby8KGfCnMm2p1Tn3CEDG6fi6bvQS2ebBeTsnXTToBtLAo12L3kHKpC11",
  "key8": "2rp5HZsBTfDUqSpnNZxUQtZZTbTd4p88NfnKVoLnyw96ySvZ77hrjQE89vS34nvewARWCEhCg1o3C4KZ2NRVLj4C",
  "key9": "zjrTKw1gQTovHwpy94d3CZT7SAE491x6BQrmCbfwKpUsD7daXcfwNQe6xzRLtFL9gUxmThSerZZyrKvaMQV4KvU",
  "key10": "5BSMhKfbFZj2nkTFRT3ziM4Ldg1NpTQzFu6wReFXhniY4ZyFNPJUNKJgyZVBHTbmpx2rLHyDtgkHVhomrGAazn3q",
  "key11": "2dD7nMdr12MYir1j9Pamsgj8inDKykbFdLfRtnfZamR7fdJPXc4g67k2QzedZf4KR3GBFzvXQfGSQkJsL82EAXZS",
  "key12": "4xu3NdjXt3qhgGjK4K3Xc2R1jJKRxQLTASDdXyTL6NVMyKGaSf9RTaeHY5dQLHCKLduMuVW6DCijKoYL3J2KAd1r",
  "key13": "46wDYMa8etUATVthzEW5PKVkVC3j2MFQ7w3FEDgRivzDtsSzRecztTmrNhCbQvs4xhXvaXGHgdERXEivn5WzKQYX",
  "key14": "3PWSX9Qa65kqaeMY3Ne3AgStqbXszd6KQK2qDi8Zh32x8z86mxa3TkEM561KR1qCPpxkTnu7SxSZpvaPS9GuoQQd",
  "key15": "2Jx2WZdAJY2txUBPv7zoNGzKddj7Sf6UecUktKYdqPFLarJg1jhffm5moYXiu1xVbczdcWB6y5215ub6e6nS1jKf",
  "key16": "3fQCjTYT5EzEuHbHBfurkCk3b9UwRmbgr7duB5r1LwMoVQpGzydA2Bk7XfapiWd84oSnejVFy7HRGFnzN55mrj5T",
  "key17": "5zx6XVF3gupbD33S7c5J48ENHE4Tyv8WXWqXG4BT8PeRo5F6qaXwrMpebLpMt5mjgJUicQNANKXJRGpup52cnGFB",
  "key18": "3jQUDUEoZaELUvaLv84HWeLQ8onzst6CwHZVVNjmQmrvyTrtK67NVJVvngu86rn4DNHmeEMmchCh1URz3AA7A1Un",
  "key19": "66CpMb27tyAasUHx1pyuZhsVDFW1pdJE3JUN5vobUbAb9kab9VAWSjRKo2B2hsExd9hGTc9Uck4X2EqdzG2AkQZy",
  "key20": "zjCNgX8mVUj1YMZgfbefMbnNQWfTAwg2NbJ57KoLxMMn69UCoQND7hpB2W1rTJQDitTEWfTVHmFsxN8enU4DrLm",
  "key21": "2VKa5MfocCqRwGKCBshnm9ihtAjEdhdy4ce3K3xyWY6is4xCjvfAfJYkQrfM5p7uaRDjmVcATagJ4T9hbDXT9qTe",
  "key22": "3H5Gzx6YTCv3hMVRC7p2LNwNGxTkTy22uUTDduKPYoNawyrr6TVvkyeTfAhy6AiwDnCeFWupbF3aeuVxxkTi9Q64",
  "key23": "QPgcDr9ohiGTox4NE8sSghmTnH9SfmR7oZHofDkyFXbXsKQPGaFcbxSa4grSR81bjx64ojzkHfzW2DoucZHdBR6",
  "key24": "45jHx53BQKehnBkXPNzZnoNDL7K3pHmf5VbfQfGGe8edCnhwhwrSLuS3nUwArHZin6CrriLzKocK6W5bzMUrALqT",
  "key25": "3oQew6S5GkXdf1ksAomoMVNvwW1Bvmc26ciVb1ULdxLPyXbD7E8RXhL6swkcu55Pzt5nBNSDkp637V9zU22QkEJw",
  "key26": "2RHq1UEbRwJuf8SCG2VpwJ7rU5BLiUGXAn2hJSjeFGrGD9PcyaZFwCPHVMsDGwKdar2ATbrJqjG4RX2NNmGFDajV",
  "key27": "2KvZsqpciaeN1EtyGAZJ6GmQCWimyjXhzXoRmG4rW5LfT4GaKXdyP8aQEGmcn5qnrehWfVuFWb8GRPvnTKVrB6wP",
  "key28": "47x5WU882qkQdw2xViUU6uaooZsjRUYJBQZ4qYfKDKnkJ8qvEhNvikYubNCQD1NHoNJuhs8vGzoVRhNXbB49JWYJ",
  "key29": "5k1m9YPfJYCs6V5pvuJizpLEyJkc3dDEyodpvfxVyi6H8sgbvPMU6R1YLWbMSSxxkrV5YELjgVAaKGEg5CKRwDWw",
  "key30": "3TfQEMwBfffo6boRvRtkVuzXJXjhDFVyQumamUsttU3o5uwqAdEcT5uAxbqQaWkYfQrEwaYMf5KEnUnRWUWXZF8A",
  "key31": "4MryDefcxdE52dZTER5CUXFwW2XH5qJx8KbXc6yyEM9o5zzJTvoM8Wzq9qGd1gW6p8mADH5DCX6vcsGwdDdjCapa",
  "key32": "3YpTUq92X17Kf5Hn83WL2Fhz4Q8ejjigZ3jvKNZMYeSQxeXWNoVhGLZWTjZY6pgfLYUX2oy5rZqqvuZd65TuxdTB"
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
