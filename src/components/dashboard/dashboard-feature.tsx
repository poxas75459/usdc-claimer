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
    "3V548BVouDdLBaWC6GtpC4TnDKnqaA3rmFzyhkYR43Yi5bzjXSkrweSqhKrwA4iRcgdwe5zZarjZrZDn6mEqut1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SFoUFrGJPefR9jKxzAbPKpvdWFpXQVhSPMpag5vdvSoE7vgZFvGdAJzAnpQzzJphoYYM55zvucdyfNKSDkv3Si9",
  "key1": "5334bfyybJ1ufGsyG7w8VT59tHi7ig5aJ44oQew5xgCecQ211ZZc5BuvFGAcRRXpBMZf8Rv1kXE7jG2UP8M1gCdP",
  "key2": "5BrKvv4Nkg3tj8rAzn7juKHWNecM1Hzf5H7nhFekE3N1BNicUko2xSpcaSa6SHxTVPUy8Zr6dJLMJLE8GB3wBpNv",
  "key3": "3Behi1HGRbwe7xs4UQH4Z9q3gwjmFxTcEyb3sERqTM9qy8in5MfYRNNe5ESaD9QmQzM5duYSU4BbperjX3ujG9ZD",
  "key4": "2RVZRVL4ENTB3wjkRzci1XqzFx9awcqdboFnyGEEi3cm56ufP62us25dDPvMca5vepMV6xZuQCgP1CgDcdpr8xiK",
  "key5": "ri17Qi5z1iyJAZeiSvRmS5MZK6tThSfTiEjNymEgPVv5phSpgEf6Ajx1v9KG4uVXYFKPZsNm9GbVvUGxVLWNQ5i",
  "key6": "2rDUmzeYj13541Lh64yusZFL9sKbqVVBnZi1KSxP9xvw6Fpmx1szXbSNk3E3W7r6UPSKfmWAPTGKnDGDT2gehG9u",
  "key7": "yMAK3eSpCi1qweU3wQpB6ZDgUqpnfq67gKuMyBu8WeFY3AG2YYP3yUd9DgfaXKuHkQ8XCsTDxVDV15wcHxWRnYg",
  "key8": "5aC2DUat4Qer5r16fjTJSbdUscui4Z4JgnQuCsufJNSSnSN26icDg4fUzvXLbeTcH8EHnGCY2dAkJufZFUxhqivq",
  "key9": "2M6A1s96E65HWsdNofc6VjRX9UBUF6Vo3nnynhDEEBHmH2PaDrzkFd6HCRK1FWHJCaNoptGgjEC39gBdb8jazsnK",
  "key10": "4pnhBHBkqUv2Je5zrtk5i7WJMyeNnc27nL94DTnx3zd5qt9DQrLmq7QKQTBbXruQhbfk9kJEzAWEhKFBySqUgNnP",
  "key11": "62anaefw3hBNooHZ3M19dNZHrhQ4kcGJBsVZdsj9nRf4qhCPv7g4a7vzspEZS2CMRjSdAL6ifDjQJWon8WqtqE8s",
  "key12": "3TrD6UjDYaYfo2o6bmDBf1DgLShhgn7RR4JTumj7ZkWh1J4jsRNFnD8f5Fj3pyARACnNtqxmBQC3QJqsTbHCqrJi",
  "key13": "4MrpnNbmKRk52ELdr9Av1erodsbrgxmw4zAwHAoGMRDUMNid2vmHyZ8mZvyDexuxgRxn9atgBNwQowRD1xLFg1Yx",
  "key14": "3wDiJiwaun9Q5846jxdo99AwtVe14Ccmm4GF39AgT7ZWBn9HHKmVPixaHChDvnoVmAvJNPD1s9FVH1LzpjSPS5vi",
  "key15": "3FJ8bJMeMvfN9z6rAuxMReMv3zAA9KTGg6cfEL2jYpezgPD6x4wrjALvmcBeNmtuxFXgd81sBeYanQXKcVaD4CAB",
  "key16": "5zqtz5cVZMuyhShmdaRX1ab1PxaapKEMiDUZqkgaFMAiPisCoHUJZjTg35WEqxun41vNBTsdNZ6x7MeqjyW1BYVn",
  "key17": "TNhdbboriHzUGjqMxn7S2Ma16mbdZudVkG7MKZLhWMeHmUUDR6ChjjJBfeEXL7TbVDcEthdQobbj5sdzMWQpRLo",
  "key18": "2SnC9kDnct3drRCwVMnkQdqKoyYVLrvRCYoZDkKh1Y7BzoN6YGQfwh6CcezbJEaKC1ivosivWUMWtFDDr19MgeS3",
  "key19": "tWU2z34TozbGLNyHf683a2C43sa1E7DyBq8hrvnzRxKHAyXToZHEq4fq3qZZmB39fY5q8BoVE2uojqAf4ctSk8f",
  "key20": "4sqs7zcPz3aGDW1patUshoZoMoiUqJAsgP3BWXBrxXXYPYdF5akr5QafnsDecZGjVVtiBojRSyyZb5sxRtPNWNRW",
  "key21": "2XSVCjakA9sFB1sYvT8XJRYXadPVCRaL39XgzSY7iihYnZ3HcCneDhw5kvsJPu7sWUK6iPTan2hPvxaP2zJa41V",
  "key22": "2pqsy1p4bW8JTWYYjSeMrLHzwB1iy41siEXkKQQCyF5vQfpvzPTEd2guGZdY9HitVecR8bD2S8A1JRNWxXpZFwEJ",
  "key23": "2Rs5xwBCtpFNHYFWYxf1VH6xkdY8gjtSxrq1FBMyU9Gf4h3FQ5jbipZYsmHCwoG79SzTShRFRuxqkfb4vwoKHhjp",
  "key24": "4qmmtZfCzv5U9WyNgiFtzgWjsq9SrhwwPpFogim219mxiducDH5WKntPfFQNiLtqsAucSfZn5rUCpWt3hM2LqMLG",
  "key25": "FA4fWrWa8Z2ZyXuC5Agtrx6ZgRyXAYfF7GvCcwxizoBGaY8cKqgCRbwKtXPNDsFKbhFZS2Mz2YdA7NhcczHEiUM",
  "key26": "34WFHwrVqJvRJdycmkKjwNpfwGRyAfypn8AocB9nTUG8YocmpxGh7LzcztdPEPpkEtXU2TmTdRL7mANap3tHXgw3",
  "key27": "4ScjfvsnVezRB1sruWwbPYgFM39aRj9a7vYPhbfkvPY3ivGNvr58a47UCPr4VhBr65yyCi18XFrZm8mHAu3SaVPS",
  "key28": "4YwBZpyaFtjECQWoxnKB6cRZms9ExXKADKYC26zZGuP6T4mkZ3SeqYUuCcFnpfUVxoHwrrXcNaDe2zCRJVdAz9on",
  "key29": "5u8VJE5DmQU2nbF8ef1EkX5vMcsePSCe9br5kqnVvPiQx3XTcNHK4c9kMVgeZG4zNzX3tELoqPLY35WoxijYHpN9",
  "key30": "4HRVFmvLHPjQkq1DLSVRogE1QPi1mizWoMUCTgkeujMh1tCZfb56uYK9ytLScj51vPYSBTW4M4kB29uusp4wJubd",
  "key31": "5Nq6ktpCLTnZk7o3xBxoFXBY1SgmkSLG6bFXKy8pMhdmhJ64DnKtJ74H7kVE4seDz4WwhAcWiJZE3kx8nGJ4yzpj",
  "key32": "5XnPPptykLPWRPJM2tQxEB92cX7atCmDS8pHF3VjRRzq7WNcQv8JrC3iNe53riSFnTAVP17gFJYGJN9JZg4fZbXn",
  "key33": "2dvhSG4ZQAAa7kM9oWr12sEtbCJ8pjapLRgQ3KoY6a5HFikn8xpBt4jGJAfc6VAXdysVMLuvUfKiqf9fw6Puu82k"
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
