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
    "LW1JY3HfQobcYsXgafeDmEHRbz48PtxUJUErUsV5Nw1GYVacwhRuGVj6uSLpGpooRD7KnTyN9DAoi85zxUNhaF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aQd5MV9A6nPajTFXqHwg8GmHLYe41bKx9t85UkrHsGygYCjSA62BMM8uv9icenG1RHSCdLJScVYCrJsL3rQwFjm",
  "key1": "4c5F6V4ur5zK4Z77icmB3E8zpySEa2N47oTkz2Q4FtVrMJDLEGjJnDa1VSfyd98Pt5aSqTj2nHugoYx5JfXtaLA5",
  "key2": "3EDYhUEZLQ98GUS3ZM3eHu3d9on1hAVQBEpM71ULiWD8agpJ7WyGuAsbfQezU7vAZvDikTD5woJpZ7Qg9vKn1Hs",
  "key3": "5WvCWZ3hKM4m8BGycibmd27J7mciDhh5LbgyZ6TQLAAFiNHD8uYBbH3MiJDU8atSsDZa5KL4StCdN6a9TB8LcP4w",
  "key4": "AkPtFn4uPZmh6W9SxJuVQ9ak5PrNMenx7M4gihGxgxDK3MLaWSvSU3irPZiyqDX3opxuWUkANGMPdAeHTcGp7LY",
  "key5": "UaRvnWp8LjrEhL4f3U4PAizkDwMSDJmGeCWC8jD5bRXZe9i3mBryJ85UFAcTKjfP6SU4bxpGzka2ghJ1nEmnUMh",
  "key6": "2wudF66qFKhxbRPd2WBWSExAxH9ojRK7bEcSc9SAwCtiKYkNWTKrdUmtUEhDp53zCMoXdMUQAb4YBSf8tH9NQS2S",
  "key7": "Z1Le5mKszJbo3xB85WXmqbdZ3Q49Tg84eqLm9Mu1GZ353hZEwcWaWqv1wTBMaCMVGi5XHiGagooRgAHABjE7jqL",
  "key8": "62iMUeXU9dsNAJL6szFsrsJoF8LibNRgR62JS3G6mat2pDVp8SFPTBw4sizRizm1QPQKxjRAoA8zGfM3AERejfyJ",
  "key9": "5W6MfkTJJ1WJP2rYT56FWGb9D4mHmCHYfHcvoZVeS4u6dbiaaXcVL2FWets3w81Bodv35f25KhtAHesYovLf9Lfi",
  "key10": "3Gc5xcn9qeHxuVpWeG57p9RzzNq82WMdLj2eNsmAPoxNkS1d2FTyCzVRE2Skz69hteGfnVJ6SXz3hBG7SFUrCgTk",
  "key11": "29SDPjzrDJT5rgacuhxXw2u3LmDFZ5NdBn2e6TNHdRs1uLmAXj8R9peGpgLBSu6doSRYkhHd42ZmXQPvurSsVR2k",
  "key12": "3yNf1USCCefivfww6rFSGzuKauU4keYBk8UUKPzojbp4RSmKEHPK7zUZYP97JjiL5aHXqcFFHj6M4fSeQLwpPERW",
  "key13": "3pTq59whJzXwKgjdxmKa26JWMPY3TYqmxNAytT14vPT5btwbc6GmWZ7s61ufCavZhwXiF592sXfaXjZ2K5AwHxtu",
  "key14": "2vUwnxmgGMqx7KcaFvWfKxixEE7aKtJCFiN8c8T1wga3WFH3Z18iKS8UuaypN3B9KfTPwrxfZzbqZkbmidXhEz5a",
  "key15": "5XjnH8k4CsXQ4DAyZL8LB7VoctHChZuxnN7gdHAFo95sq2v8MSHcs6ziERrYuAppSAnYJgStcYrvkiWDjrWKfEYT",
  "key16": "2gRt6BC74zj2hueLAqCJubtrQ89V8fysQTY4wmFVo73TXF382B4pqEvL4QxaM9kCV67ou9WdUP5NGcZmFoTcc4tW",
  "key17": "5YizxdwX929RA9kZJiBixDmos6UzNvTrUaXC2xRfCFUo19PNuWvUJyt69jMoyMntnnrLuxCAm1Rw5sJL1oDnMKm8",
  "key18": "3TSZFVpD9nBq22Y1h9YeFJv48PvixQHBEc9WYxy7x9219PETCbeyoXVFsAuA2fHjzbChJjEAw1BsvHpsSa291GPB",
  "key19": "5qPVRbL32wqGXLsoBuqnscwdmDUkF5LZ1BLBfjkzqrkfRzF4HmyqT2YTKXs5pMQSMaQPYfMAQsdEeY7P8mNEftWQ",
  "key20": "32KDbFPEPCpBWwsvyrp9KBFvUA6REFB26gphKx1jtmJs16oskuL9qjdhJGJe1G9M4pERHTo1zZr7XLd6746qPM5o",
  "key21": "2SAWrZ7th47oaDaoKDAwSZHyHUNJBinvRGAr9iCkTDTJyoTGozMCXH9K6khAgt9moZThoNvcTiGK5Sb6jE9nfAhq",
  "key22": "3aHnoPCjRCNLbchoZTJjTfaVzE5wkHEt4D2Jx5Z1Rt5eXGP1e3Fw8GhdxoGjofU7xr2QB91PXz8QAcmx4GcbcTuj",
  "key23": "28jznsu7uCMwCH53DTjYLnqCfcocfKNVnMa3LeSuZNu7QJeU1CRD6L4dqL5ZJsg1F9VGjftf3WKTkPomrg5yaMkK",
  "key24": "3YRcEaPcjXBcbPJ6Ao9P7kCKBkyGcg2cFe7mSVydmmG8uZDFX5w9cCd3VLYp3dVHTxEwCZUDocgWCBoDD81FmYEH",
  "key25": "2VekFVMvtuXK6e3pgkRacWJfhNwDwg7gHQEXxt3ZTCq1SBADxxZKvRxqTu6X3gfdj3iz1sMMofzbPUFv5qt43Lvz",
  "key26": "5pX3jbTDQf5HKNGGLBvh5uAVreJneWLtUC3yd3y5eJGxPcpb2JA57cC2Q98LgEw2wNPU1z1HRWuvGxGnW8ghv3QL",
  "key27": "5XtDaQMX89ZqdJaKsnYztedkhx6ohCJ7TC8ZbhZesFJSmE4apMeXByjMRymY1vNqJQHaqdLR2NuSokdSLxG693fX",
  "key28": "2pAw2G7rPZ4Uc9fkUe7jzcLLMDvLTYqQfbqvEZgHVvXTNDbtKp81R5eN3hTNfSZNDtzm9oaHJ3mkHYSnj4neCPTY"
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
