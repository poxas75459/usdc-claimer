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
    "5ndePWsYgqjGBMf3Ndm7WfjJhdRcncFXLgaFJ5VHu8ynJSfdswcXykoYo8ZTFtp5Eeot4b9F8jGDyDjLWBEB3Bbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y7fwjv9FmgnYde9dYsVcvSmkpZRZrK9WfUS54A3ip2V6RaN67Tr6rt5Px8SbK3wTPqwPEeoyp4q1fsxbaR6kE2c",
  "key1": "5yQMJxCHFwcp1Q6Uvh8htUKNa1pEi9TwfgPMGaLAVwmipKYfnu12V5QRo3wnQthTrGmg49BBei1jo5YSyaLh6WTb",
  "key2": "t4jMcr5vZJGEf2bxy5st4NVxqHe4SSfMDHTi7GtUyGE2DDRpTszysf3Q5A9CMtiZw89iAC83RpaNURbD2Yqrohm",
  "key3": "4YSrGbLPzv35qtixjAgbD4zo2Jhakrdd9nUW3EkzkjLJPPBKty7FWvhgPuBk2vnnR2f1pLVQG4SZ2VeUmbjm2jJL",
  "key4": "43fNzxmXAf44kYRcXngbYMxDpaeZ2ETvNM5h82Uo435HfjESt3AkPVCBvJn8DGHrA1NWQQ226BKNAnEnzFY8J8Vf",
  "key5": "3yznwb2Y1KWKrhJBH1EuzqRkJxnKaiopmvV86BTU6UsUsXvPkCyavaGAhQLGBQiP4haFGDrzXxaSyeZnxME2sp3J",
  "key6": "4Crm4kkZACbyPZ2tPeXv1TraPKC7G2ZwfQfG3S2yNJyrqA2nctB8BiCVeG61FLeWmQiCXRXhgtMnccVF3kb9xT6",
  "key7": "61436McSpYsMiYYE3ryAx3sYcvjbJfBBybrFYfvHdHP3wAR4jjKiJvWow4XL1ANXuf4G2XMHcZxqAy6mXWrAzzzY",
  "key8": "21GtvPbEKkPGZjH7WYDhWTfxqQxCk7RjTJKXm2L3j6mTPnj5jwpbaCbdWNjjKp8YFw6EqABNfhc9gtxVzjrxsKJQ",
  "key9": "iumYnX6Z2wqNhPWpL7eXrfHYs83YAbwoKV4tLW3VzDMiXTEFMT1mpwzPcNAukb99jmch17HwP3VcT3pgAes7wU8",
  "key10": "2jW7hfV9BKMnk4H8ca22dzZNdh6VX98FazgsKDCJQ78PuANhX4xxjo5yWTCywY3aA5bbZtQPFm79s5nf5NS5a4FD",
  "key11": "46LCBSBEVu3XKPdkRz3VN8Ji6hDjAmCowky5KWcezt81irjiMcepM7wgpdjkrr9dcusj2k4Jyq6r7wz8c2TR19V4",
  "key12": "37uWZ2T5M9AK3JtP8iptZSz7KTjFVtuzGDt8LYbTcqY4h4hFHu9Dbnwosztri2cUwQ6k34vmc4yA7STbgbTVwrjz",
  "key13": "2bs4Jf61Y9x6HhWQY4tdmi9Y8wqoskHen9VPi6SLPCnHS5SvhAQU66DqT7Eta1mp7A8oYYyw9P8sYiq6R7B1iayd",
  "key14": "4key6yeHCQVTJxQ2FmW5aeD25SbGwqgDLiLbJMg3ZAWN9PYYfXWZYryN88xBi4D9CjQHVNtJQZNnEhLhL5Bme3VS",
  "key15": "4sDh3CTJaQYHnX5LPTc4A6zSz8RR4y4ZKaQMQr6W71JEAUWEgP62p9Jf3tXzAqDmsMovvMaSwnaajL7hndVVPGnq",
  "key16": "3jdjc8oLfMri4bLNaY6NFiKjbt2xkPHBvkLTzhvZwxKVisJjTE6yQjXLmqtR4bHgbtN93eDHwkgR6f34axuL7Qcu",
  "key17": "2NwjV9ACHoxeiAKwHmBezZBpLGCsXm4ts1kQDsNKLo4oq1w5csXscv8d8qoCJTPKu71AAcGoTPh2bCa1bjKfVcSf",
  "key18": "2xxLafC3cPTEUtucTKVf6y8pjnbyJbdzYRHvcHqsb5H2nF28SZg8fZo3q5cMxmDvMuCNv2dpndUhzrjCPgPP1hy7",
  "key19": "54ZF41Hbx1uuHNztseF2KKe6JhyjsotuDiffV4826ZjsNVegj5QSSEEeqGuZnQv4dMDZVBnMMCiPtBUTd1ZkNgaZ",
  "key20": "3vSjast5aFbPEMfXPKpEbyGLTsutBVWHM4SEurB2uuszZULyJQy59dcQF8rb6LBGy3tgQnFgtYMiJPdajKwdaB82",
  "key21": "34AquW2UbutwFegSJGrybn3DPnNZvvCF2PhMRDcXKiiqSfpL23MeVTnVKv58Ve41io3EDw3M5UekuVPfJ4pP5xvt",
  "key22": "4HMaMPP3yqZUzpWctZkyXgXV1vYrnwHfBexgiMQWSHaVnY4UDV9Ymw5nUWJaBktgWHLb5YmCBM6PeXCN9o3dzFC1",
  "key23": "47wAYhppXoSVS2LY4P37CCJeXAKrGU22dPCGvVTsfpkjBZ9pp49vCQ6u3Wc3MP1GQDkjnG5PaJ5zeqSZzUV4V1As",
  "key24": "4TDWSZjYXATyBxPRsdjpuncUBCnj1ALEncEYiZszEBd3EHnEzfw44YGJqgf1EwBZZZo67xftYvNgFy4F99rgb64B"
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
