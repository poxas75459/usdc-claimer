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
    "SGaaQr88EZgAaf2UFPTALrM2bUF3Aeya5TyyTjEwFfWTw7aWerMVyUQkw5UKWKCtEb5bWp2UZ9ftmehzZatsr4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FwzFhbDfEvnta5EdckfNxJXzb9UwxAqGJin9DDiSgtshi9FLUiWF3Aky72FrL2sh4k1AEcKQmBg8EMXWXirScRN",
  "key1": "5kgJYEQA8m6hkB4zhZDLbHbvD8moB4EXYJV3qnGFT8Uyw7pWo92Ch9RZNuFTn6HRExtTdQmcSemVH5KLaKMVeRTs",
  "key2": "5zzsvGXgXrHHzpgdjC4MYcg1sVyTR87eJVRVwHePuphxPh4k2coVYn5UbaRrXRxSbXrMFofD2CGFyEXeCBjQsHYj",
  "key3": "vBMfMaoqBwZtzG46thjot4FTwEVgYwVfHvXKfzJwCvabNWvbBhbsd3dAvBi6et3gBHQtZA83GK4Qxkbpgrz2Cn7",
  "key4": "3Dk5gMecZjRS1RmgYhmrY23YLbaGJ8Jr9WWHYnoBQGwH1yN7wxLU6rMCvNsTFVTYDZBXLzUsb2N6mNEb1zztJT3J",
  "key5": "5rREkBzvSk4noEKmLsayVjCpK8qAtBkNC8oZHhELbNrEZTj1HbDzf2ifdJQoJ2qKZmww2BgcBBCKbKY8ZK4RoAWs",
  "key6": "5Zwo7mJhWFAHkBXMGo8ao56Hd6jpBrWRqukrzPNzMPFP24oYe9X7th4M8bEFzLn4FPs5sppzLnQQkPxLVw7QvJ8U",
  "key7": "3qYngNW8XSR1Yyq82CFdCEa81tV6GxQqrHmbAq4raKqQGfM8kQ9yMzXJc7iJg7XoDGcXfxg5PBBAVHbhnLe2xsoX",
  "key8": "3UgauSVKPQrhMww4k9Bbo1R45qxjEwW5cpG8DUPMjmzeKe2r876kvEcmPcPFfHRzrpAy2ndamUx4i56oV1hTcwVa",
  "key9": "5dLvdR33RcmzS7YS2Vpn5vDtPkZXSdNhfkbHkVtWUB2L8egWbLjCk5MH6RK1j1mo9yhoynFrZiNFarBUwsc25Tpn",
  "key10": "5vAH44uhMUTFZWm8LdmVChCyH9BN2Fku7QYL9EiyT9ZSjuvTyTPtiJcsob7stvZsPq5DWPHUvCpe3hFhordgE4Nj",
  "key11": "LqaBHKTXzK915Fn5ttTVMPRadJdjJjdCh6C4sPTrtyeNLyzQxBw8QCkWUqA1QgAbGry7FYwEqtGcrFvAk4Vq3ms",
  "key12": "3YkQB6KTRWs36v3tUHGs3swXNHKfqtSznt81aQ1Yq4fa1CbTm9nPJRZjfiyUP2VxzfRrEq3rZ8GE62YXMFAMBJnt",
  "key13": "4M9JpA98DfA9YubQ3iJfFQbyNiz8PsRpViWVSu5EepiSeV3wh1bNF1LTN4wgzsKAgvpF3Gvpt8prYT4czPLfz5T4",
  "key14": "5F74ZBcSdeXK47sBDcpxyLyYd1rMzPyaRCjRFMGQ4oTNuyduFFo94o5SqHswQkF2cWSfDjmbgxjv1qavyuyKa8Y",
  "key15": "4cy8gQ124oneudhXyZAHGqDpVGLg37V49B8HJKUFc6rsk1mvXPTfusV7zp9jzXd9nJCjsBKMk3tYs4cY8Sd9rUUn",
  "key16": "54Lc89H3Hp6R6a7C2m1BMHeDFCGksHE5o71GALFEQNh4h1XJLe9SM6NzoqDLHYyz8myvMACHkcPrCfg9xMtipJ6e",
  "key17": "Tc8hpBwkABC8or9k6mjY345j1MesSDS87z9bSJjE5wHY3Ev2sDcWRSB3UjpeC1aqenRr56JefUtQbjY2RrTNA76",
  "key18": "3iBxke8RGk96i8dXXcZ8fYgKvt7D4JPJmmJPPjaMyXNZhBJUKtUY84WxNCGqpbf2aiEuoZGZXCQEGt4d6EgH16ER",
  "key19": "4ZbteXbVp1Bv5wMQxryrYMdw5DC1dtyZtTPwVta3wxdj2tN6Mg1dGANDjNueqFiPAdeBLFxeg7dhbqKTZSer1WNs",
  "key20": "29cQ3pNkB2ggKS7uyPvBL54vc2nMDGutuVHm5dCMz6vgEQof5jScJzJH8JdLMfhBpWDZYEERXsAq1bchposueTiu",
  "key21": "PhpdqCbAcghJxGGXNMhZRjREmgDyS2sfJLEzU5zdVAj9ZshMHLUJ58Fts39YD7c1qnDodCXgND1Kru9UyqpkxDD",
  "key22": "3MEWhBjvygHSm4bmGgEGebMUNPd4LKC5NYEuwGDbe8xTfoW8LQft7oBGJTPss66H39v5x2PP97kVFTCJHwdYjkJr",
  "key23": "Ht6Mpv5MR34zfPmiXi4RxbVjVtTZyjTr97SxU1qo9kFmXsPikbjJdt9inurgKc3GxNUV74fVKZ1vw6Ej5x86urY",
  "key24": "2fBQLWznGbTLMuckWyzCakbXEwr24ia8ybepgN7fAa2fLWv25JubnNm9sPVDQHBYvdVLEM8pkXGg66zrKb1Q9vTX",
  "key25": "4t6fheEFk3os5vLAZQB2XJvTYCbd8vvxNcRjJuFnECN91V2EywSGytUfPhPP3gRPAqEwBd1UCMHvYNuG5m1qX1uG",
  "key26": "5LMRPuUrYoJogWqjgB2LkJLWx4h4hDbe7rdQTi7m2AZyX3q9CviZc1pJzTSDQV5J52ySWCviUb5zfy9mBuBKYZkh",
  "key27": "2p8Up7WgC83oCmkqYmQpkf7wPo1nF7zz6oLaqNwnYuYe4hFBzW7o7ZkFCYVFE2z27XUUma2Gn75NCX6X6yJQnfEw",
  "key28": "66cD2ckMxpx5Zh3KS73mJXZZWkzcnFb5v8mdg63Pr7jBFQVe2ggTJHfyzyjBdBgvg43Wy9h6PHWz8MCnU8jRNrwG",
  "key29": "26qDhbQL6JVRsQHqgCdQwL6om15WjZd7GpHtv6YbdHPpfJF2rY34g9bmErdEJAmrCGAXeLfsArEd3vYM7EBb8Z52",
  "key30": "4v1fzZPuQBvJxHLSEeWtVyuzmGcB2DmTPKs4C2fVAbdTCxXpn2Ehb2zyw5SzNR1tZmKgQTy9jNzPAdsufjjK5GVk",
  "key31": "4tWACqozBi7yKhK1awCTkpiGrUVcdyCkb8TusAr5wN6MQZATCFGBBxkaFAY1fJG9f8UY428CbChdvuJf3NrkEt5m",
  "key32": "3ki6W5qzhQZiG4AhSMze5sufugE9MMRZVnNQBpnASWpztAgooT7mEJMYi2nXkonZb7iCw6BD17H5B4rKhyovFu74",
  "key33": "3Ckufe9xbDNzcAYAttM84iD22H6gSfijbhKGhDsGo69CgDX2HTYUxeYndxwVAorgD8dR6v5R1W7memYwMWTPNjzJ",
  "key34": "3D8WevtFhaBfHa1899u4qHkJWnGPzztndZQfeWUWWL2V65Gt7Mte9MGRGSZ5C7xWiosxPYuhiFGyUoC5tAXvFkxk",
  "key35": "5SNGVMVNtRNBPeUyA4NjGY5Zw86owuooCL18YriFC6tZEETs4LCiN2T5wxFW7hEmB9n326nfCdU8MgwGy7jJTA8g",
  "key36": "5QcAJMWZqMm9cRzUniNzmBNvADdZigJUQMbCQmabEpWSXvRvMUuHGF3AQ8zmwbKG4KCp1iSb3AzxubDNArdaAbH",
  "key37": "367fbvPE7stdyniwJu3Cd7mEKYo6X7fd3uA4vQQ9PVqa6rcHkdj6Eka6zcC2N7A32gcHdwbkRa4NpNaMa3sXhhvr",
  "key38": "2YxA3rkuEPZkUUi9edobrg5kRZx8QB9R9epSrmuGJgYdp5vDXdkDEztjNEGNogwakBBi45AuxZzMhTuAgc7B6BWW",
  "key39": "4kegCeaUZ917ZSeJcThNMVtbNZeCMXMcaVjj9ThsaDCbmJEKtDiV21P4UQzuAWDqtztx9xwiRfQywNJBdfPznDY6",
  "key40": "5pwcP4hT4xzw1mUSs78WE1r4otuhG4rx2L3VHeSoGrbRjn7mKPrHD6Ydq2kGBpCjd9qdYgaWjUDD7s4Cb4puMwKi",
  "key41": "3AuTNnNhw3Ywbp4EysN7RhHL3fW7NfKd5rZi75NfbVQwbfLk1h6TzNeRvjWQ9wZEsGfqC7bktbgJSmkpBM6uW55n",
  "key42": "4PiNU97yGe3NU9t2a5WBmhtbzPQhBKGS7wwt4hYTVbnqYwFzobB7wa7x8yJWrfJaitFtTDxvW7vrhU2AaG5gQPH3",
  "key43": "3uQFeALJ1fbf1LGDtwgS9y5dTsrNg5EH5rYpHWkmJ1HnohnQeS9ivs1sN8cvvCVv8R2AHrZQD97C1avrXMKzFP6z",
  "key44": "32VuC66i5i9jSr888vzf5bQkXy8pAmM3GxKX84GnTFdHgcUqVGQTcgTEKffPYzzjMA2hvCMDe1UVak9LdYPq6Uyn",
  "key45": "4GKRoZEQfWm9PNXGLvpVYDFXpyW4BZeb4BEoagvq5frV3RAJQphq4ubBwaFiLKG87dmpSjPUAZMCjBxZg4cCXirV"
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
