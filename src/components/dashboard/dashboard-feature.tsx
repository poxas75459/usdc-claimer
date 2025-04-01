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
    "48N24JURpfsdkNJ7dYCfjeJPEbHZbbEDkNiUDwEKw4CNF6v9NtLYDkXFyvNchCQKAL2oMsguoVL85YocRJVKwugj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48AXwRSn7apK7A5443rNugQzzgWaoSRz7AZGncMhdLvr29SLfuvwfsabGUe8cvNhiVaDPfQsXBmtAFM7XHJaDp9E",
  "key1": "kh5Jm163RjdUUokg1Z2g7pAu7VD2KLVHgtxNXMqRtC5uwm6JzDkmRu6VPxhBZc6NE6dRpW1hvAhVBvVi9Gwpmw5",
  "key2": "3evbZwDoDY7Y2vd3YtLoLGARSBvDe2TfSMJn9tw5KJN2fy89YAuMb4qNtU9S7H177THQxp79vFk7RhacuX5HZgwp",
  "key3": "4MMKvmG3ScxPMEEC1Szq5EJBkaSh3XEM69WB61KoRMSVRb96kBKpHNcjne7ePfgCeeNMMLybh7HRxt6kbVhJ52HZ",
  "key4": "5TMVXj8xCnWMD9VcQt35w3GUqFBGNNUR41To5FhoJUegCGhP8QzXAvKXsX99vDetvHQGfY17AHy62G3Fhg4YWFVq",
  "key5": "3mPa66nFVVBLri1KrvKgzBHiuDAtDbDydEeAS1WkMQzMmvUfNjVnMt4ek998LpCS8oJ3SreFbcjXTKzaC9ncDKm6",
  "key6": "gG4WDTtLDxqvTnNVfvSUAQhbwwWBPJzaUjATJm1VbQF4ZBytKFVeM5BEZdG1JruagKKReQtazyeCiVu21ZNmcWU",
  "key7": "3Sy7HnE81rbkiZMxcgyYAUX1pgJsqd33LEGRJrXLj3JgJzxkAJq6AfqyZcw7CdFFYuquXDWiXCyTRhU7oeAmwxF2",
  "key8": "3MMXEe3jJQa9swRiJERQUxCWnmwzp5yLD6iPGDZDALALg9GTUX2UMCN5zUPcQ1Fwu9fUWDXwucx9qGkXj4rSQjoQ",
  "key9": "3kCHJ2pKpgrkDbzLVJ3m1d3Cjxn2GYx63xjzEVy2yXMRsrY6f18gCX5sdjyDY2QnXUvLVf6YwLcqFhoyoa9fLLen",
  "key10": "3GcPSYC8w6RiWf4GZzML2dAtgSsbyEgpu4TpRukFSufi5s38Rg5hpsFaJtu1RdZiirLkA1FLwKZc2fMtHqXi5Z2r",
  "key11": "e84ivXVRcviFYBMPw8oWkBsLWBJdXsWyExwQoZ7MDscnG37B9hjhVQmjkv7AQ4HdqAQEcfzv689k5n2qNpWEtAS",
  "key12": "5e314j4gZ9wgmSY6Qe2LYpCQ6ynh9BnduyY7amnunxDnnHykEGGBxsApz9c6R6VYvqUPLeQccqGThFvxcRrVrjbG",
  "key13": "2hxmVfLkdAwPmCydWB8xAzH1njhyYjYApTSXUuFmSyd8FRRogYmuQ2gZSsWKoisDgmX7FMHGgpWeYmBi4rBKPsLg",
  "key14": "4wcEg9doWB5xzBLV8W1XsfZcpVCXTAXD57vkEfY3TPpgcT1bV7BfZtfpWwCYCYR5E5Wph2JnYQgsXtPoYmhbh4dh",
  "key15": "74UJwuxJtcEp2r12ujFuTkPSPAPdz4NeUQn6X6Tihk1pHvSJjWhUyFnTf9jmgtCnYw7icXT17PfauLec7pGAZB8",
  "key16": "HmtmY6Q985neEGFbb3Ct9HK3nWeKCpVtYtCQjkijg1hvFbB7ZUqimJ9WZnJ2oEyxo3sBUiVDDdNkLyuJLWGjJwP",
  "key17": "3CCuWGze6JbsEpXPRgYLsMqRzX1rE31cWoHebxVhuRgEiVsJM3kFsJXyNkVfE5Tv1QWkJqZjPwu5snyrWqAo2ak3",
  "key18": "2p55tHy6roHsMBX3ob7kCspmQxntRsxLFRWfHeWSyZjFSQw5DqwQ7T8MdULxx2moDRkdhEfnymWWZ6pyMGUZm74T",
  "key19": "4ShzVbVzSNDa1YErWbpEe5hqFikARyQVkuaNLyBTKoxuiMxnq23jZVgBV1g3BYgJrrpuCs5uLKNwVuW1V1dyTdxc",
  "key20": "FYMVsQPuK76qVXmELLzcTeN7CR5ooDyAhme4QKqDAPEW5GoakkxWjHHRp3MPMDm7xu7rrLwX3nb2wugci2hwnwo",
  "key21": "E2FHQXP6MWJWDzXF4kZykPB42USj1DePFqniSb97raVvgwEgsbL6hAauhngdT7ufNhqijnXBQt5hZ2mMZmpXuPN",
  "key22": "EcPJuts7jUCqEAr2RYW87VRqsTKWFjkjs8LTv4jp4He5S8uZ1YpGMzUsQR6XNnUj1J5iKuKk8pvHFkp9nn9Bvom",
  "key23": "3SUkcS6sGhKJizg1T6NfUYR5gm26ArWhXmxGiaN4oAtNVi8zsxHpNAsBUZuRXzVaSSrhTcesLrv1KLBop58fYTmo",
  "key24": "5JKA7DizXciu5om6vwZdMERbskcWCvmWC6b7HCM5gRGijQjKyHTgnoFCJ6ViVyMuryTQH8uCo6EQH4L1zFdLvQPF",
  "key25": "4XbdbKNA525q8xbCdF9UUG8r2GnsvfcAmRh3JqiC7KCTBjQ7zygJ8DQNrBkedvoz1iMBJL7ArxZtkkcjeaoXFVaE"
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
