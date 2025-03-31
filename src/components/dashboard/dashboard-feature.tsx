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
    "q5xdSZwKPcSTUEjH3zGfzA4Qyzkv4FK2NDqg6DM6Tv8CoCx97WoLth1fNe2aqoVA9WKCgqRFSUbnaycoidY4ysA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Mmqsx2CPPoVzWavw82mBodpbx6CKbv7jSh7hsDZkAQEocNTRQrFaeXWzYBwVTPEcVD19PLEN8CkzfscJVUq9uf",
  "key1": "4Ta9RdfEain2UxAmNZ8LaHDMzyXbp52gprTrvV7NiqxWxCJUwAgS22pF32fqXsruW3ftBPCPeMErLJS3FS1DVALD",
  "key2": "3TccXZBnwMUwUnjMA954MmN7SqmjXx2ZCGxDaRYmKG6gDMG5ME1SfmxJiXviW1k31264R3G7NsgdoPmNGjtAHquV",
  "key3": "4c4gdq2H22h8nXpRJtkXHVHEjVV4Dau1eqeZMZAMUZkjcFeJwViQKFTuDYLhMmFrt71jiCZSr1Fz22cU3a3P9cNg",
  "key4": "hjWfrHqhAmgcBaT8jD8F93k3ZfxYGteh5a1qwVezHv7vpegZLBdjW7TUrWo8uobz3MN9mc7YXqSV9FovN1MmAi1",
  "key5": "QdjkXfpdwhf7QtvfR2MCoyHoqy5VJxCxeeEumnTb2HsQJBAyBCENXqLq5VgY6QYwDAm9b3VHgbRiXC9vc7BmoSF",
  "key6": "41KDzMZFXA6ByLaA12arcEsmwiUCenEHn2Xe39YbPEW54ZtLrFdnDQHBqzUqfZS7SwHSQZYCmmVCtGLHS1hHLT3C",
  "key7": "3qjeKNLD4EaC3rW4yBtvZ7sTWHtz8KJVwZaMZLaKqNywNLME7YFQCDe56iE1uvTGiqR91MeEb3Wg1CpjrBsAUa1p",
  "key8": "2AvyrQeozFgKp2pFPE5JJjqwdfczumWnm8fmcnsehFfS6HzyWyNFefgbQcKPqjNNsj7wAJhn3d82u3kKY12uqt5z",
  "key9": "RD9FRXVNk7ANzHJiRqkj3rsnnZ4HNWN9e4G1cb97xoiLEKLaLALQKVoTvrR6dGjqgCpdYpDYjXK81HTJmNXC7y5",
  "key10": "3JcssTc1mDScxudN12txvDWdF5QRH6EVRphQGEHSR1arqDB36S7PQjKvxyWBptNSX6UcjBheWa25YpeB4m29MQLC",
  "key11": "59Nnu1qjLGayMuCUfSKzD39XdnvemRwGoYMG2cXZutnyFLxf5iwUbSWwuoiGmkWL5MmdhTHZA9sTC356UKnuN4Pb",
  "key12": "3zuAiZvw7SVHqWKMHFLyJBiCrkjKWBzWx22U2SeGeknEHJ3gfF6GW4NZMB6WU9tYqGr6w3n9T26gAtKnS8Azgucm",
  "key13": "mLQVsqA4R6HVq8JnXdkXPpHJnnwZE9szY3K7JK6cgaeyXMnBoKXuGFcZQE19EA4wxeH9FXZDrHoojkznqFQPX3u",
  "key14": "5pNrWu46GjviMqvrboCN8d9e49aFqn8cKMmMJPBGmAHoZNGKgFWP1UURx3DydRQHrc8NVPVDMGVR7Vyd82uPbS3q",
  "key15": "5MrHv2Us1nGCTTXJogmnV5zq1xbbNGaG3VVVBCpPaEDB5wa76tq9NejFPEEZDtvfDHMBVZpqJUgPMVCD1azrGK3U",
  "key16": "675N7nnERomwanLFCdxvu1KinwgnsXpYwUBuNJevLUscAbi45pvumQWbxfhahp9CUkWTq3FEhqkLbiAPpWvGDQwj",
  "key17": "4cH5M58rEMsx4ydTqLbo5nDBTUHWBgHoDWRCnH5tHnCraVSGz2eAZVof3V8U27qxe1JU5e9or8kt3VNwUegg5aWE",
  "key18": "3rg8bQtuTp9shByxaj5egMrbMPaRhfPHt7DFqsMB48hpxY2qmASSLQidE2J2aaPuJjhMiWrc32ioyNs2e2T4vmVX",
  "key19": "4LtdjyawvgxutSmw5PGV7RMcbmedLLWXygsgmEdCMCBrEH2ZD5cfZJvhX5gnaViGEA1ZX2xeEm2ipbnL9GKrYvAy",
  "key20": "62fVQy7KF18LGZWBJvc2Sh6stcDAP1kEg21MQ1dpfSFnDaLcjZmQU7ojLsP9CpfD1oPDaDtSm3V9He1wVvRQvJoc",
  "key21": "2JnYyFNmyuhQua2ewEafjYbrHzvzZ9HcDvsBnFWDMBeyLR5z4FYtNwTNaW5hLTyqh3UCRbG9WE6EAyUeA4RbJn75",
  "key22": "55MjhinHfjbmyDAEBneMg72UkMaEuUzGdBDWBzxzpAFcCLN2tCVB2T8NBEz6zDHrWP2EcGudR7u3Reqt8MUak6Qe",
  "key23": "3H3HqyAJLdB9cUFDfhW61Tfx9N85oXLutp9N6oxtj2nSjbhHRFTbieW7eq4ikPiUcs66dMdUH6K9HXJY7MMpE7QH",
  "key24": "V8s7AjCcuad12oKimB3AaTQWhUrhNo1TyMAnM1SvB3G8rTfLpTdTKTJ2BVsFCPQ7XvUkeg1JNWCoRQJvs8Fdc3v"
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
