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
    "571btfhi1vMURp7f9Nhm3Drpr3oo8gjGchaXotsaRSYa9sPruGLMkjk9yyYu5aZsncVu6CFS5PMZJb2i9Jy7f7Qi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KgDQ3QzYEfrCn2MytdEkcas9z8xjqBgbgF6jgTtKvqXiDAxjhBdKof52i4PUQEACQFExDjZrEQBzeaCZvMSuger",
  "key1": "4uZ5rsQ13aHvTkaMQbX1CsL6oETaFtMLe9dS9TapvueQ7wHza5Uy7gBmgdU8hhFL9nX2a6uC6wG5CYnhyqnvy4oG",
  "key2": "29t5kLKfVkYJFb6PNEhPoytS23WNRSy5bQE6iHaLSf3Yb1Mn1JEjcxUspAZxZ28HKKSu7tayidzpoecAY8tPrn9L",
  "key3": "2WyMitCaNc9FvrHQN6LZns58GKtd6JpbQuqz1cFxjRbtS1DbJg7kvxiMiti26izceBwosM3yZUxrqpKdt5iZLzQd",
  "key4": "5b8KpMwjKMmk2tPAMdityoBqCSWvqmUgFfpMoTndbrANPx8i9CJvdc29hqDFPo7a9kP5YqkPcka2SaJfLJ3trygx",
  "key5": "5GGD8QeaF4rAoHJY2SiPDoJwPm4tLNghw5YXSBkHXz9qi1ggQERn91kSYs73eG1BrXQUfzVX3j6HQoK2gydBqGQ",
  "key6": "4JbhfWD9eXZ1RMkxh22D2oZ3GUVd6e8v4WzAj4qxfCLenuCvvLvxmqVWpG2c6QF3B6HL1mTHtR5WPwHaxCBPEkV5",
  "key7": "5mGEKmZdysCvxuryjsKibYKUSGEm6KFCeyMVaBrvpptPw3DgaB93yA4FYwf3AFut4txR6aRJYSrQJJWAYfDwePHd",
  "key8": "WxzywAVo3ooqqhBTFt5PhuSrQrqGoK9qDkEg9G7mZmAS95fvhcQsch77DMKux9XpcCSFjoDFZ5WX51LMHSBdfYg",
  "key9": "34fML775Nz9iVg5EUEmMtv216BTFaBBfk139WFYC234yiq4r39rAPirq2CRVJSPpBzdWjsNiVhFzErPhaJa98xA8",
  "key10": "3QN6YQcUNqhDwssTrenfnTtcHdKfo7CatP5TMcsX1c8qN4z4Xz8snEUirCkgT5F6igXjoSvcJrP3NdLdxuiVXMNX",
  "key11": "67AHUrThSbH2G3sWLwWfPjserrAvWvkRmddQCRe89BdW9rU2jCsDNevtURWD7TwvuYgDKuv7XsugzpixpH9mfcBR",
  "key12": "5Pzpf4dMC1wn8UEW7XLieB2hhXhZwbvyVjYAWj6cdsX4X5E6zyvdAz8fBkzDMQPvWUWs6Txu1mpUnfd4NxC799kq",
  "key13": "5ndeHYguDqLUNvQFVAeTx1CsWmQpsHP6BzJ17CGFRSeRFtvQHSmX5UEerUcXRyTRdLG5YsRTw9JCvr4FjTCXdvxa",
  "key14": "KattLGsJiEW7xahAuYcgJ6wDGFUFJft3GRxvze9hR51fXLQE1qNajLoDG5XHo94u2vUbsQVp5xZdp2KdNRjrKSD",
  "key15": "Kzfm9HZrWyWEregtaBLqw6NRbQH65BArnAjhTpAyUU8W2RB7bSVeih4CV7Z41kqiirfAYPPsLFPStu2oZRn7PWM",
  "key16": "5cVz8fiZw9Z4Lwt73XMTzhvtL2pUKEVhh95uKqh93guH7CkvFVUfyEjo5aNFdQW5we5D4sdWGh7k6GBx9agpitfj",
  "key17": "fxiFQAAfWdNJwJiU9fzCWusEYETaPehJHbJ2HWeZUmhqfUpwtrn4Kb3viSLHAMnWdxCDkdL6PwJVn3Uq4uhJBRZ",
  "key18": "3hwiSZExZwWie9xWd78ufkXVfZUK6NBy2VTmxDwk3M9oxEtp1kehAqNUSRp1fu8USwCQJEeGLfks9anosrh3zQqS",
  "key19": "2RVoS6dFAq5FxXvvRcNYLcMq1jJDwfLpXg6vY6i4FmBzKY9UPUg5KBUCSsDCv4whUJzWPdNkG7GqYoBJ7Y9xE2mL",
  "key20": "3n7gR9MN8U7Es1kx4hepSQM1VdpqY41AKbZbjhCC9YMVSkk53i9f1MVRXksCdDSxxun1idkxSDawwx6Ej1ikjY8C",
  "key21": "5Xc4sAmVLDGrQFUDxP3kysSWdPxCMc2Warkq6gM3tpX27FSEUBaGDPgKeTwyJSYFeevVGA82SmpJ8Dowi85xnGp6",
  "key22": "oU53uatGPPF23FmgakYLsEEEeaTHY2tuxxUBFJ7cNEoMUUsPuVP42HP9Wq5KiVxoaMjUstCCHYNdYJGdZHDpM9A",
  "key23": "3iYLvmY3QSSaWD8zKkLVpcjdD9gB6fRz7XXx2wJ6FL1qgggvurgm5CdMo1ftaQdqMSQLxMZ8j5yp7LsNKLCdmZ24",
  "key24": "5y2Un5jMAbbawsx6LAeB7fjCigoeDLAMKHf36JQioCWNxLQYj7895sfhAgE8uDpwJvQpr2xXr2dB2ccvgp4wgUng",
  "key25": "5jsJygrMJtzP8jYzQFBEHio9XkoZpWQBLd4jauqYGBSXGzUiL5VWjQ94eZP2UaZgsU8reV2LnrwCvMyRYPUyRk5A",
  "key26": "3QeuBeGQcZD1ubaYwzx9TcoFTSez3mGAK1GCEY9x2dHP21b7e7keZY4UCCCvJQTHaw7McMi1jZVyQpyw8TvS9nTW",
  "key27": "mBLVLPFpWKc2aUQaJ5RxB3UBSofTCqQEUMjFGQ5pABCKjbvKjsuqZb4AL9bmH5e1mmVQrdHH5vhRhDk22qNcQ5c",
  "key28": "3f8HEZFK7mbr4yermNCA7v87VRdWcaxfUfeUj1AgyW9ZQuiaiQnysUeMfjAbNmVuoMwiXdPswnp4yj75M1HjxLaY",
  "key29": "2xm2rjZy1YWr98ebz8hvaZcE2KJ7MgNrAV4qh1EAPnJFMvh1mhbTFDumZTbVY7M7NpYjQRuSgw7W3GG5j9ZtpeKC",
  "key30": "5wSNdLM75RpaVNS7kmZsjqjJVooBEXhrR3w3aPF1mxzdUYCYt7zDFeL7zEZT28iacQqJNcQYER3xGMuFysy7kecy",
  "key31": "2L6sTTFnpbC4uN1sVKc99rNbDDZJAhaQYC1vQFsotYXosRgUw8dehEDJ86DMbqCJqNZwWr4Dz9WzhfM4amR21iVP",
  "key32": "ok3dab3Qyt9AQu4JyuYhsPqWZXNohsyv2N2w9JJXt3r9t3gWh533pJHJ1pMaqTipKsaMoc6QUu7P3Fc7362PzhT"
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
