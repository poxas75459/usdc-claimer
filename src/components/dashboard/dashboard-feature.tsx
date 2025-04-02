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
    "2JYowc95awhfUrccz3aPSVwKyqhnKs1qULpvruFuGhj1yfDAHrTFaJkitLGdikCBBRc1PhGEeVNFNqLbkg3Vkhiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wC3i2moeKGK8piYXtQUzj9ucQJAZQPXi3HgX93JWHVRAufSdBneKwpGg8Bj1BYfzEkohioixawZTHo1UJackaVt",
  "key1": "tME4H7pa4F2noMfvVnfHk2LkwVCVGjacXwkuLRbWSFuKnsDnoYRKumdrkySsd5rSLGXK8Bz7w4kDLT7ACU46dsj",
  "key2": "3Vky4epYQ2ajBAb8T6GUN7oyAxa1QU3i5gJEZSehjkx5DgxTwRBcb5EWegQ9HCALyuMgyLUkswQhtosiM9LZYoKP",
  "key3": "3syN2nDPx4oV1yJHxxQPG8BQiMJCne2iJzzJwdamfVLdXBVt4PPhQLQMvrgCy1x2xquetNLprTQsRmVRPJosK7rC",
  "key4": "3uqdaLft1xzE7arMCf7izSc7ai9dve13wck2pskDK6odcsSsT33fVu5jvJ2gR3bpWxwQ5knGryB9JrTUfh1Ghqi4",
  "key5": "5smJM6gbcam467moJoEtdDWShKpSEmawauJS1fDHG8X69XARwHXrgWUpBBvEnKeobto21SzkNBtnTgLoqx9EGqus",
  "key6": "55qHXDFW9iS8tGWWnKtYaPJgtNJfJddCbh9r8FxEatTcb5TEfvH3Z7oodSg3t7KDwZmP23dKNSBLsast8hcMqSJS",
  "key7": "2FgWDgVzabeA1oxK3VxhvGgu99Zi56Zg128mrfvSY5BSfDiUHLXPmGsVjLz1QvPTreVCxW32jWNd6ZKWzyxVo9U9",
  "key8": "2CZPHVrzLusoytT3sdRvetCcDWSZ3Fx9mPBTm2gHCrCfQ9tbCgSdyozXoh9TkkJZ6zGBouxjHQgCMpgSeCrQjfzu",
  "key9": "421GNEeo1QNEZALtzBx9LdiUpTxtMkYg1hTDeeou9hBuHYynSzq3yoLyywPtMhNFxJKDSoT57ntRgu8DAgT8pLtX",
  "key10": "5L9RX3s9kAGUWgVL2gaWibYBphdhxCFNzeE2q9pvXqrkjWCHk7YDUbTkudxLZDMLX5494E7N4pAK8YNDJgVAYZMX",
  "key11": "r9p45JLHY4wmsKFKsrg7mZtbBiCus1LmBVpMmNmncVm6SNa3eG5n85gtMzYyYmXGdYMPYhXsFVnLpV2BDqbHAkG",
  "key12": "3TRygYarWykPXf3mDXbCpyQe5wWzGujwiZbCamqQTevnZE1YUrsDMfcMmbB7Ti3fNVx46t8B2yE8mENRkLCAvJTx",
  "key13": "4G1hKJHzzPSuZSeRBM6QJqg533aQT6vu9V8haer7RxqKymuMBzfBVByvx3zpotXNtx5ZE386SBYPf6KrLEWoiZdS",
  "key14": "FJ62UsfBKihrLxZAck8CgYtCYNHwy7kLuH5SGEqgpSeBEPusnBNiWJ9pArAiU73ztbocnV5zofpzUGHgbfoTc9Z",
  "key15": "59RQUHfFRGzgQ7kpMZuPUj37B9u52vQbvce7rkU2QK8vNP4UTqhnzNzHEbN8CTDCP8v4DSXUE9kqqhVo8Q1adhGm",
  "key16": "gYdAuH2S3DcYN6GrCt1HprnaoeQ1PWom6E6MJ3e1tCZxVCCkEDcURUqZtAcFMvTPyRNwwBcR1cZGfCh8BLmo7R9",
  "key17": "324wDQShyq73atNzorDxeofrJodYaXVRapGS7rGMs1K4dByBLbgTiDp4WhcB8D7z32BL1nKs6tyXkw1yjZpU6FYm",
  "key18": "34PutVM6rgi3ebQMHuesYPHRbvorEhLLmfLQjsPmr5YwjhdNC8HyzwB3DGVE2A38KRywvyYNezYdLUQ6Crs5i9XR",
  "key19": "52qtia9hR9EzPgkyAjQ47ypgyYCQzJnFbxv9gbayjMujyunKWf4jrgKXeyBVFyHT7mdsYMkxC2fnMJ7Egh3N3tGa",
  "key20": "4ZfZEZrB1hTCM8Q5mWa5foYCoiEMC6xV1QCjfRhmFdL2exUDKb5CWX9tHFYGausDPp5s7MFUVrW97Jj4Y8PiFTwG",
  "key21": "47TgH38jgpQBYEyKRaGrLNf9okAoUxSL4TLyUVcV5WDkeNyQKxJP9oatAMdW3qYYkBrKuogrjvZ8beT1V3pTJFwN",
  "key22": "2tQfEbwJSBdXBgxTKNi6Q65QiX1Hj8PZQk4AXhD7bi2w3t3aLdTP3PJzRAix87aijG9LKdBQTmAHZMA5tNPyJXCY",
  "key23": "3tLik6RRRRVLs1m77Jnib8jCtqw59G3a2tAKNkKaHv1T1zoHZBLCSW4zk7tzVdjjuHGAdv25eo7yPd7rKdmijZvU",
  "key24": "21dF8kdpkYYVGtEj1qM9xx7BmFNjtvg66EhLgPp82423dvtUZUkK36BHy1duWSLrBiB5LVcNtqxE659Yu1Jcbhua",
  "key25": "2xCEgNyL6LFtURB8dssuT4XMtHbTZtUXEGpdk5dEB7fzeuWNkh7dV8tP9ktpasW9jLQ1TfVnjXKkZ8NWpdzcYDKy",
  "key26": "5r8831UTRjv1CQvDNdAxebFGj9Pv6BXNoeYzjHd5ieMWa9GkMzb8xSkSzxVmHJpzvJCW1G2TTFJc9a5eKZCBKH93",
  "key27": "5YK3aCMCojbJWFBtEoMp2sjc9qMmeCbRAzLdAUyGY48NyM7vGfzcB5oCYNCnzVW4ZP6w4pAjr4D75ec4i3SnDs7F"
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
