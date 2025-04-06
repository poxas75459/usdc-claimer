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
    "2s5inX7VH9JA7nBjbwVQw1hc3LjyxSEbtxHTbgedSLZBHvRWG4GENZSUYuCv126go3iHybA2qCut7MkFeYSRbr6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yLrMe8PZz6QG6hhRtohSLecc1fbtC4JqpY3QwqtC5DkZ5Yz6VVAf1oM2MQJmNmodE9JnTr3wi8pQUi8Cxkhfc6A",
  "key1": "5VAiGk78DiZvXBU6QY25bHXuxmKDvjs7ieeLhsKFFSRkcgTAuyG6oeerzU3hkmYnFhCScuHgZM6pDGBdfnMSSQho",
  "key2": "2bqGThAYAPm7KpyTycxs3DFJWWonRKMfvSxja3G4hdkDCux3xwKXciH8fSDw6cEezcdLJMrc3QfaxJhd9GXfKWir",
  "key3": "4GkyM8SBrvBjA6CGvrE5AQTS8p3ciuouptdETzUXkGpS8Ti6CABzNnbKKNSajr2pKjwaeuG57jNDoJL94E4XDrBJ",
  "key4": "4ahAhRZWXA2e9yn23xzbHfxb4FW3a4rStpbZiFKsHPxWFq8HVEth2TwaUKCwFpshoZtxxV5afVWFdd8H7gjEgcpP",
  "key5": "wYMkVtkgDymsmyKhVChZHtNWre2gf9hLTWu9X5gcZXgNDthDistTp2C7Wbqcq41d83zVHYW7YLM15HDyYVc31s3",
  "key6": "38c5PcPj7nw5egFpGTpvh3KwqXdPcMNXzdG72EYGieyhkrC5KNG4NHxjQdyEVnvQoBJZF9pyVrXTSZjRpHsG1MUF",
  "key7": "28dWFUxDn57w9xcFjaL4pMaxjEqwQxsaW2YbTVaTMqrFpgoANxwjtTac6erb7iuDqqJdbvZVNX4duzfnnhaYmaAw",
  "key8": "2FvszsCU5MRnNzHwizHzMWRFFZrHsk76hyanBYcg8UWv22dsbK3DYNsThtjPYnd8UTAwEzD6UFDc5Em3xFqwJZYh",
  "key9": "3KqwZ6mrUK86XCGvop9bXiqsiQQCTeSh59JJRKXKk3otREPw4DWvVBGz1cD7orhA9Hm4c7hRkzJc2VjztPNT81Yk",
  "key10": "4Xe3tvmssqbNAThDC56KNTmh9LSydCkbS788SVsK2p5FhyGEzywYLqDc9Q5FBDgcfegmK3RP24xpbCd8FajYr5nh",
  "key11": "4nq7BrLimXwysLHF2r5Ub7mXVu4fA5Dg938m3Gcgh4juHwDhrrM3mZ6tgtjj7UCusGUqm22A5YYmm3p3JD2fiJf",
  "key12": "2is3Vu5ZQHoMJCZL8k96EggVoWH59FmCm54GdRkWDu8VnQJDgsEZsuNBC95DmTzPB564jUwgfMgmJ3Y2iJkBFmui",
  "key13": "2w2iexsoHoYwcjKb6HhwRFS1XkN1Psde9Y1DosefmxuosjMdg1ATSvkaL3bQWcc7opPEsh3iaVeK4bZSsC8WGTqk",
  "key14": "YvB9SXfFNXwLAsJNAzbM5Uop1Ln4SWh7p7Kct7xU3uohqAUDTpWCX4GLJQpoTad7JSH7uBomxwMmEFdGRZuVMZY",
  "key15": "3jCfmV3jKAL5nuVLxgdTXbsvkdwKaFxhNMGp95K6eTm6z59GLp7FqdKV8eowQPq4cUfiHzyQN4kZ9aknbtDunws3",
  "key16": "4M4cpGtUrFpbxvMK6QKmmtjHCMcEGdfDGyE2PhHrse13GYSmVTZtkEuyrCSV2P3Dp8TowSDGTeT4GaCggDgd4qfj",
  "key17": "4AUY7QmV2JXqHQJzSgBNAg6y8CQZjryGfj4u8QiqdqY4mwzQxh6FoXBHYJGQ8dHapC86wpL8AG9xvdZZHeMbnh2v",
  "key18": "2ZJcPSoGMdLvvnaW6NvwBYaWo7R2o7m3bhHNJeE9SKByR5fKTuG9F3Ld8AcDmFcipzjGGUU8o4tD2uLDFZNTqHs3",
  "key19": "5NkeUjEUpwV7N1eN3iyPeCUsgLT45CKc1ZtRg6fmG1Cr4nYPu5WHSYc5zr8J9RMfvbNQi4MmZ9mFyUH5xT3vmvWx",
  "key20": "GZiYYGRiYtm7XSXufWozGMVPerjNGnJv4PSqguEZaqmnHKT8CUyqbDy3akQeb3VmExL85R1v5yGLTg88KvQMo48",
  "key21": "5BmnP2mQWQ3SkewyfAtnQKtsZ2nbApDVt6DZyp8GnKoToU8gobq8T6GeK2NRgBY1AUnmNr26xF58AByQbxCfTRCo",
  "key22": "55tii5cmKnsMKW5n7ebdBNRAVuRTazHduS32s3epeUPcyXiX95VFCTyAzyEnzJvY9MmXKNA58qwm9wz5nQQ2cdEy",
  "key23": "2beTsQnJDrDp4tuqBGe3jh5uGVDy6GsJbjHfYptiNvTGtZX4RBmN5Z3wsqMeqTJ3YJfertbKRv6tYiDJQ5URvDz8",
  "key24": "2SZTGv4aiiz2byZws3yhx6uod1vi6pUznQK24jLFVqa3NnAWnk9TZXdCQa8HLr1zrPBe847f62SceYCcgUSbo7qp",
  "key25": "3fwNUt82WPeUfhH9xZ7ijwKTeowyfZEgGVMYo5BumDUKTMaWvLC1ULeyxqep5LdjPVVyBGy89js8cUuWWX7wxqRp"
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
