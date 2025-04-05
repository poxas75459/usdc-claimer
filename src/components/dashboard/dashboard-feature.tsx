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
    "5MrEPp57wky48mP4PGyBY25kPRecAwWryC8CD9hgq968XMbEWG7ePwSq9SDrV6hSmdJnTDfZxTfUyY1qSkBqWG4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57nZUJ4g52RvLbSKFgVgB2VXGQuaSrtPRygYp5g1ZkE94DcNjF36s2U21tKHX2vmqeUpKzrNVBRpjQv88fZ9Qb1f",
  "key1": "3gqstKD67A42rVQrds2owaBQh9WRy1QY6zM35DAWrfjwTzRSUuhu4PoHQyUC57TKchwD7kSxVxqeS9pEVVeE2cNC",
  "key2": "4Khr3nYMv1yEwNZ1E4Jjy7C1e5xHCj5yfx8zNx1iGHaKQbABBUVBJpoVWq2oCLyRDtoSeMfTTseSjTHUpP7kKWdn",
  "key3": "twfTEmUADdv1MPFSDicNUKGTb1icgsCqQHs9E5XgnSS4tkrEgbKv4RVCtfd5JPQpeSCE7FDmLGyixfFXo7UZvFF",
  "key4": "2q26UAS1qv2wtGsAam3bRr3mc2a9imPHbmrVb7y5ajJsBQVGzh8Hwp3PiVrrTkx1BPZtt3eqDvy1HGrndXcW4Tmk",
  "key5": "2MC4d7fmcRGNJf3uSdQFR8XzMiCSfFZrPTyG96cCC7addEuZEaq67Nm4SsYH4pa8weyd1psRoeQqbLPpo6gyZRnx",
  "key6": "55znuAaaJTC3BYVqJn9ksuioRhdbQeUCbydEQgsp7SZGkn4vrrt1CEqjwA4P7E6jXKW9bfb8QQDRgnusVt7xRum4",
  "key7": "5GrmMESXZbrEjzoeQ5hm4cTZybT3VRFs8hDM4geFCmUB5nc3YwgNWYy7Rr97deBRkkMMhWwnucUFCmVLb6CCPhqe",
  "key8": "5bvg2G9rKS8keJmQrkK6HYDoeuEp1wjswCrHKBumgEmBFt5RAxUjQHWGVzevisVTfUqX7BLg1GDJjd68x7HJn1pA",
  "key9": "5K2bt5jJTh9aDHz2L9XqQssm84X8mCt1DJXQv2Cv3guZQC8ACpchyH9oHtxb1FKMG9wJCfyCHWiY2XkLs8NYLmMT",
  "key10": "47VBAZBhtN2jpeJU8nanCsspcj6YD5Btr3yHQVxo1mvAEZJ9EF1ybuA6QckPBFuhSkiSntdpUdgzNtewTmuaRKnE",
  "key11": "4pWzCuuGE3tc18x7v19PSjiQcjEEzrVAk8NbTMSnoieymkrBk2WR5BJw9FjBTuYaDSsRSBdxjqSHUMgySfnn1ecK",
  "key12": "5YbbD1nQvn4dwe3imZ3kiknnY1iJwMvK9VZwyFXWBHvqaChTNZ4MjqvMkWuThwJuNf3VHCfMG1wTPpvynwqFY7Ud",
  "key13": "3aspSdvm2pL9HyUxkFbjqJzmBDM4BrKBDcEEo3DKCPpYjZxJv6iBG31z75XsxhDANPRJ2b2DsFVdohFLogrMC7vQ",
  "key14": "2WaPsLYF6Dj2DBrpdt315thPp2tV4HRqC6VnkEEo3J5oJsR94sAV2GtUZfZjiJe8PWYBD7dzHp8xtSFm1eMZAnrK",
  "key15": "3nULfvgbwcdkszfqoxc3f1rStXLJcwzeUgyjwe5jH8LdvXTPk3AYniSrbfkfsD7x23bJ877sKHPauw6varJMbi4z",
  "key16": "3LsnrWWGG5iDWYyV5WAKvHPhuiTjWSo1LJ3CLjznbvqDYFbPSZirctygMggjFo3hWKqX8bUbcH14yVCkKApLr3DW",
  "key17": "atKT1mCbxRLqzSncbDXLE9GxXQUDm7vMgsiRwjKRSvr24A4VTBDeKRzBY74nTvMzKFEmApMsp9aXnz1R5oEXHfw",
  "key18": "4aEb6HiWFjBLeF3ANLDbwRFWCqbwAKG416b7DbfkcSafmtJbezU8Z9RMhKn4NyBwrmxHKWdj8vvZMgBpQPVGgnpN",
  "key19": "4ZLib23PZopBevPDtCccNbRyjgdgoVyzPkeg58ejz73zpk4wgLSim1dd6dEwKVG2QqzMGCwuSFMSnBJtFZNpLvwN",
  "key20": "4MMgWXbeV6bQbDvTnYf4UwLHrvs7taBCGbMiwTV3qwukUfPwvvdUu1ZRAAyWi813i6m3LzHC2CejXf5YjckFy5Nf",
  "key21": "59crDgeiRoxnKs13NUgh7A9q29cQw6dTeahnpodJEL3Ar2jP1KHSCFEQpfn51ixrdHP9cReus1JP8L4Qc4YVVwcx",
  "key22": "3Z5BqYa62Rzx3yGAPBSV6JW6RfrWAayXfgQrrnhJREjthLVjNeAn2zjxoLAkm4a8Lm4QCmjS4Ts2nQhLK7SWd4u",
  "key23": "3wZCZC5HGjJfJg646Mz4ysRkwk1sKz8B4xkU32VGbAbXnmiAaSb57FLhsKXXbBgTW8LBgaKGePRcVc9jmPcL95r7",
  "key24": "2eUeaF8Z9PsiNVuGXAgeVrUBiQ7HzGmbcDrrEr6kVrLJSHrCX3XGDed9Tua9gaoa2b2ddbzfYa5bKoTnhz6wmGv8",
  "key25": "5CtmB7zEf6qkypMQKj7XBbriGrNnPcqk9Cutug4TZyMFp3FenmFprnm62U9A1kPr2fs2nw2bU5WyAciFpN4J5H7j",
  "key26": "2ZSqtKYtwDeyMNdhj3rF1uRFqYQGk2ev14iad8db9ozHdXqAqCrYhUYKpSmwgfVxwovQa77dJ1NEDQBCxiFrvP9m",
  "key27": "4D1HL8g9PzSpRS92Em4aykWJTPyNRWrZhPxr1aSM7PREvhduhJCcJXwjXND3TKZ1u7hnzaCNJx7VP9UUJAiXHxBi",
  "key28": "58YWVE3KzgeeUT2MfY13xuRTgbnaqgcSiUYaDr865wxkZNBKuzVYoUHTvP243CNaTBpkaCeHpL6b6LJUrz5rYCSX",
  "key29": "34z4pAKb8i2onG1LtRxZwL4H3DpSaAEurCVE2Vx8kiEHdJLvETsmPEKvNK27R82MMcPiA2qXmei1tqfrWhAnEZ5T",
  "key30": "4X6C9NKCiyJaKuHJBrVd1ZDyJguKRhPk4cQ4rXUdDNJit15sFiWx2zd3Y1jUs9NsBiAKV4qCJgLrwtU9MWUTehfy",
  "key31": "4d8NCJdfNC4oGqV1mPS7Vvg7VqTUQnMeKxUionVKMDwpKYGqb8SH9wpEWMTAD5HosAwzkMJVzsdyPXxD7HsgStf",
  "key32": "57qenjoiW7pJQ4ThX75XvoMghV2YUWG1bvi5fmRixgibgkkK8qPskzLsQKtuG7ynMghAfH3wgXT86UcGGLeGPeju",
  "key33": "4vPWkBvkzGovTZKQ3NYf8v8Hh3CN39eJjnaymiWJjGSF6WBhh5bSWDjd4eUavJHr1RVFyPBNg6X3hs19B6v1ddNT",
  "key34": "KJpL82CRz4LsttAJJjemycnJQUPSXMkLbSoSQNp6ZM6XVZdfUvHn2Q2jiRG3D34JRmom7wBdF1sM435vr8YsRCz",
  "key35": "5CHWPMUaJYKmkbnNweB7otUSaPAhYoLNu7gcxhu3bCfMpHdPE1DzaZJp971bwDh9nfQAvjqZUz5Jq53wLH4eqiEA",
  "key36": "CTL2DUWUcf1CewRSdWhkBLf3LwWn99HrjCKVoAAPyhCxN1rFoJoRZL7pU5ZNhfGoXgBW8q9BtLxLPYmDk3SUpvH",
  "key37": "2MZQH1uqoPXL62JheZ37d5YUoL9xEmUyowFPv8mPPy348AtkUqLzmFGkwChaqMikZExAozfuroEgRTBxYYcrRrVd",
  "key38": "2LFSu9btwsGVYHEe1CwzhSzSW345gHFXczeZfMxQMpzviiCiQSsbAFijMnAjSpKH7vu6MUTphvk1JxBCzQiQX4tG",
  "key39": "62NnMDgDytNXcsHzdBscQPonCJwrhAHLZRMbPiRGT6cZwBwUJyGRh2mtjL8YQxvpfagm9T3oeZCcu4RVggUPXBkB",
  "key40": "4BrCXjtphaCQ68ExxvzULbY8bbuopAaVDZg1bpzcFv4N6eeqg6NRSeQybUTB9jZM758YUyzFMpJcbiXgLmi37PBF"
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
