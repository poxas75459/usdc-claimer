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
    "2YtKKndwskFiNceLT5vdgdZuKUkSpXPV9qjz31kcwEWXyf2yM1poffk14RDTvFSCzSCRxXHuWWHTTHKYiPzyBL8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p6v75ttNkt1axGq6nTRuM1KxS8DDssDq3SKBxkrHpRSgpQukH4F4KkRxkmZK63VyfErwG7XJ5dofR24VvEp5PcJ",
  "key1": "eCyGADx8Xe9MixMzAdJFF1bojsZCQLLNQFBB7SNtGfQ9bpgoF64eN3o1MHWwkub6GMdPuLdSKyW52gEpHbto627",
  "key2": "2oVLYWUwpbPG1vvjBCTNPpvA9Y2T3vkLuXmkJFz2A3wPiEzUQePGYQkEEd5RCjkgGBQm5KEEMdN4r6cTwuTqEhpF",
  "key3": "UD8P6XtT6pxWuUTNPWQRJFctvgGBk1iRuFKjHZFmnWx8b7p5AiB7uccbBPZSNiPtdXvrBD5J8XP7Lh6nLNKdKqn",
  "key4": "5945yhmMyp5BYyqxRvusYFeaejrgHCzY2px8e3pATJikU6EFbWndTekS8g2bTZDjkSB5dfwYR5aHEUsjs8Ldnbr",
  "key5": "419Kq5VRKDMjTT5GCZ7AThAeMVCVqcGQTz1tevFdADrU32cC6xpbV9Ujvk9DU72g68YUDVvpksBysrtMZs5oqW7T",
  "key6": "5HBhm9VTe7EmjGpWvF5VgR3uwrV8WCw4fK9TCwfzWyDZ6KrpKd9L46ENwz2GmAAZNuNXpQCLZde4HWxBgJTKh8Nt",
  "key7": "4ZHLaHK9xDC4YzbWFhJYR5ZrmC5LoRChtA7GRLxUP8kUkYBstTGXpkCKdxrDNiixG2dVZ7gCnE4rFsLbecygaZXh",
  "key8": "PeRDFUzgSjGrJWxEKjCca99nq7Bw2mXgjtVF6fBghBFuuoRZg4yxeHeL2tWCvfMjUeie3bDQ3Qw7Z6ifWQi13C3",
  "key9": "59gBxvhzav9FKSx71jWNUect2gvuaYcgd3TvfjojwnpsdepFtP833StJBfPfz1b6oBTBWVPNVqtwsv3CWQVt85Jm",
  "key10": "5iqgx2uZd1i6NjcDCbce5WFFyuodLzFVJELXxFmMpCgKDw96pZ2pF2PRhSCNxfuZijgUJsjzFbFx1c9HDWDr7jBy",
  "key11": "2rKumjH9HeecVwbtd3oBTBa1DYC7iVJH49E6a3mxGhHgB4dP4Sq1fFeEuLK1uBbFKCJeFMYdQ6wpnHwpJCH8ktBU",
  "key12": "w1G3BYBQMSRoLsPFbZpaBXuuSRZuBQRuUU5T3FjpbTP6zDsbAtauYzvhuNF65tD2VxTrFNqUKoUUJHwEWPDqP38",
  "key13": "64mZhJqqgpZFmqn8mpkTm56yFfmy1QLxFZ1vj3YRdmy2GAXqPDJJL9jNW8pJiFLHj1FA3V8dGQqFbQNb7oU1EZDW",
  "key14": "31CKNERZn3Ufnfjhf9gpB17mGM7um5vHhUv6hJVHd4ExwTbMzT8QfBbRXYE3MfiwDgmE4N9NZM5tG6HvVpwTwqa7",
  "key15": "5uiua7wqb5WAD4gaJGVFCB3kY6wgcQusxhFCyVmHZqxtAkZoFBKc5hwQZZVR6xhA71VP5wkdwNUmqXSFva8p4SqC",
  "key16": "44AwWg4G44SUoCqqqdcsxMNe7bBLq1tms9ug6AusxqayTMi1d7dYCT2RTb6fHjsXQgkRs1GcU6ugNbUjX1jVaCKh",
  "key17": "T5ZiUBRMyMcDoG9dhccBgdctJ6YTinjqzBKz7ugvQe1BHhif2nXuNRfihYaQEYYDCR2GY5i2pLcNE6NZ1cQJhx9",
  "key18": "23pVRCHjsmwRdbhng1snp1HwkLcxN1cDnxZTjcL8v6HHsBRwGg3qdTq6pYp4LFN2Hhq1LQQgBKkW5YMP1y1iz7Vn",
  "key19": "59HBJ1TuRYnbZGrU2ScGdXjWPBKENE1pBZ6nLYTG6qjBoy9fhDNChpMh28SG2kYNqxUYKvdLfCF5rufb1WSDPnxk",
  "key20": "3gmVjHgk34QwFpyf7BmVv8eL3JxdU9ieLY3dYut6s9TQXmPcHYUsAg3ttGc1R82cBdRffBf3ASqZBrCJZc2e69wR",
  "key21": "5KkAquj1CqqQVHAC2AG24XqaLkGJAWAWg45Zd76BaGioK5gn6Tm6na6RGnnKr2tSo59Z8sjr6J6BJRYBRFwfGvxZ",
  "key22": "5gYLqxU4jvcag6EfM8Hz9tuHBntgBJ9pb4xQDubqjYt9dpPFhQprjnzDqgKCBFwHefei1WeMmWEfZfNsDs1PqW9A",
  "key23": "urTQA69TcVJ7Cjt2QY2VozF8pd2r8Ay8JZfDeVhp9DbCV8NVrL7rYdVvSxdvJMRZWC5H9Qw4zh7sJHiNKrQ6JcP",
  "key24": "2SyHLKfywq5Rwoy8FDcnaJGRkrgpoew2suHSaphwSUtdy3p7MW8MZsccTvQtJrgqR4CssxoAexdcarKtruanUAC6",
  "key25": "4RazRc1wduiwPcVzqbjzCfeyuLEZ8VUaddPW55PEiXDMziuK5kvcuKT5EYtEBDnLGd6rQuCfE4gE4Dxqf7VYxRDt",
  "key26": "45jaL5EW88tSh3C6hAhNTeuAFGfmWvWEY8aJdeaozajCZ3X4wn1tGyoV3vP7oYpkWwpD5bKUQqjQ1r5ESJuqaBHu",
  "key27": "5GEqd6MUMWEgRhzUioWR879oxPmNdvFYXhY8Ux65NEDZpr4sd8SkPXqyWMWEwuR11KUnuChMe3YzCrsugDZbi6HV",
  "key28": "2Xt9j2SWaCdKojFCksFiyQZ938oBAeYpHXMM78syJn7RKyy4s5E6nyEEE7zoiCo5KKP7YopySMKLKFKqjoPSuL1t",
  "key29": "5vnYfq5bYupU2sF3HYH4j5cMxgJ42QJB7V7cNrN4cYD2znbKNbjsxkHNXWUPeJJQY8vfDDY8AmNHpx3zH1EgFXat",
  "key30": "25i5XuLGdQ12HuJ9NX8AbeZ2aTpgj9oJ4dzp4gjCx8ET21fEFFYd3XcjxX8F3BNzvSWtFZ5ABgRubDhKt3FtSb72",
  "key31": "226V14tC7HJ1HxxVMEQtooaF3347TdQgKH968QuHaN3YtwbU3tQgUCMDWj4YyCHp7ShwuzRLhJjccL9w1kowEWhi",
  "key32": "dRmk8vqtrvYCgqdYE3bvp15jMJXbFbGZARXzUHyxmrWN4gN1bL2Sm8ZZ2EhweapxriLeCDooxDD2gR9qZrkXUJL",
  "key33": "NHT9jkAMusykLkU13v6KyQZ9zBBLXWVrUeQZuMkQ2ryiaGk7ZNjJUCcEqGAYQtXkdhXe9TnFnsT6Vs3BXBqVXPD",
  "key34": "45bdc2gHHxJSZ3rw1BXcLATaHQSnpKcgrrw1p8Kmudh65XUcuFsGWH242uzHHdvhHnfguLFwCJi6cMAV7vkB6iYi"
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
