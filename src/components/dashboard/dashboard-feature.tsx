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
    "3brTA7NhgfaWgqpYewLSzu6GaV2jJXCfcPuwg4zrsQYnj1znsRswNrFytuT9aM3yYSVGuQyQ8r9zL1Rj5KuBts91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TZFprZxyechJxeZStvVbrpD5uopvgGdHApkoWasacdevbdsYmWHXKAfeSDrhKTJQJMMLf3N2b4FwkUSccyF2DgU",
  "key1": "6aUPP5xEx2YXsBQedfPDAxTspPCA5GGwDLu8JF3mmn5cnAZGioJKBLAW2CYaEUAv4BK2uFmK4SHqi5ot5J1qWkx",
  "key2": "5jVaKpPbfAGLvKXSSmLkbnfHsHfjV5LE3VDvJimRcYERR2nqgVH8twBaTCRg4f8QXbCtpuP6qk3X3RxpV15odEL5",
  "key3": "3xYoB7VjtmwAUTVhYHZCnvHkuXs4ChP973L23yBrYh3H9j3hF8gAWeaWNiDK93B3XLEBr8wu2RAs9ziXrtBLWwCp",
  "key4": "3gTQh12BeuWGSv4kA3w5QFG8rUqDfRPoQ1mTCM5PgbneW7DRY7SnohF895KyZ6NGkv1q512TEQgdpDnDXJxUCYkp",
  "key5": "44yacnQEMyupDQ4QKVXuAxPzWqjdvNWD64yj6iBJfzBLEUeuPRKCSBA99deCWPWURDEYzGmiW3255K9A6Ajmh1Pf",
  "key6": "5G91EJndhZX3D9e6xLPEkmGF5KWgdvVhYfrGHjVQpXn55MjDqJSGhYG2PtpvryCjVywhPEta8iwbh72T9Zz1593Q",
  "key7": "5wMJ2pJDfkq9AgkFhnLUBPeZrojRbQD1goFabsxZVQWP2kP3eKdSuzDmqEMgiMSMp9Kg7Y2F59h91JD2ae2mmYmf",
  "key8": "3WEG4Yvu65qe9Nnno2Wwde3AbTapDf81TFfny68XnXE1tvQxteTPVGMUcZ1Q3DCCsMfABkkwDFGdfub3hP1j5Em4",
  "key9": "28KvHvZDfb4HJhtMZW7oGY7Uchb56RSYaA9J59DJxsbqydwQFLYmDb5g9QqAxwfan2tPD1zMo2MEmqmShqhAMypU",
  "key10": "22wPfVfYaBorje1b7oyS1enBPn9teoa9vKMjGV1sZqcaScbpKBZANTjxVbSabE6rKe45et2W85f6UB5se54ybpQU",
  "key11": "2nJq3VzyQCPB3HX7HY5UpP2u7qGvyQd1JYU89BRkm2QncMZuuPjHX2y4Tg8mRXducVsogmxfAHPrNNy1LKEJDf6m",
  "key12": "5SuxLCNtH6wLBJsES3JhWNjQpRZoMVtFbiSNueqGXeBUS9UwtEL6MLmSAMYkkrSnhxaTn9VPE19MgiZxNu43H9NG",
  "key13": "4bf1PAg7Hhc6izKF19rjWAvMf9pAVeqzXY3j3N2Kn3twxLiJdPzn9XXHuxe5dYejcJVnCriiCjAgtrdjeTMaETVj",
  "key14": "4aw4bRE6apiPrJhJ2PqSEexXpJSaxX9zsFRNWTTXCz53TfeQq9TUCKtGaNxExup8ftaebrCx2LGdu7VCSkKtJjaf",
  "key15": "5xqgrq9z1hZg5Wu149TVj7kiZm6fxJYmkS3mvfvggRtKp8VYJRJozYp1xtpzzYV7eMdxKe9beMYZMZkRvoBqmuEr",
  "key16": "4ZNvGe6WfDucNGfpbDvi2FNYKJQPXCyjKmG8rgzsJCPK3kEw1jduQzpfXNaNVUtdUmpEH525Wzzad9sB8eY9zF4F",
  "key17": "3z4qe3oMpP42nhsR7kchZRVYc8kNF4j7FPm6aYCyGXeiu6BBE5wrXymijPuohNCFLfHHmVukh9PQ23xdALxpSeAH",
  "key18": "252nCVc7nTjbeQHMC6UtSW1Fr5cqSTnfh9PDGUQwqf7mowaDfiAVkMXvE9yBZ3Z9nfnnF97tzMpusyZBVc8d51Es",
  "key19": "2QkSfXX696f5GB1yLFrmNWzh4F82Q2ph8gjHU4KwqVZEBmxLsoXsws1q7gbBHECmM5vjVNMFBeoim2xMvNR4pP6s",
  "key20": "5SX6LCP3Q9e18wYBMNAW2Jb5HuYzTLXQ56cPmLVNvqVP2MwZPYYCBbFgLFYaJzjDhZ21rqXdDG9NoTWVcjr47y5R",
  "key21": "2ixohGmYj5PsLULcL9PNT5gQYp9ag8eHJybKWf2TtgUNrYKjTHPVLupTxdB8SLTvvikUog9n1o4k1b3v7HQAXDyU",
  "key22": "328oVL44xH6hsuDifaz3AdBbqfoBsShBCHqWRsniJqBjCJ4EoqkCbvLYAcCa8ay1zf1QdeBog5J2G9HLbDwuuf3C",
  "key23": "53xpBmDAExaSvuNdV2FZUog93Asx2bSS9Ssofh5YzjDZkfZXYGJtnJbpS8SgoGzCanzD3KkPYtWPrjE3SuygAFKF",
  "key24": "cw7BU5c1obHkR5yuYeedLMcRcip8zog53VU4oMkiUsTkBHr3jsu9jZsrsfHvYHyJjseJzZHnbpWae8wFNLzgF6H",
  "key25": "5dcAsQPpuVwagTV8Pbt37bnkC5yCqWWxr74ZrDS7mL6xNDJuSo7hmeZ4g36QjmfqCf5nTQd3FFA8Cs4aCXMhRnVz",
  "key26": "4ErrXiatc3ANFDHnnHicERU8uwaiYsDGoRZ7L9KkC3cCCqSaDy77oYxs4ZZfaPgPe9AL74QiQtXC9BPYeUbJdN4X",
  "key27": "5NovTKJFicdmKA78XYSU7WgUh3stQtPD9aEshv7ygxgxWtMBXNtSYcr9toL7KCbnvxTi8NFV6RUsLUjRw7asRbqD",
  "key28": "2aiDgVUtNhaJuyHzwLkbkVbgj26yekfdLsv9t6Cs9rbgvGXbFHQdjFTj3DXQahDJYjHjxikmBBJFAio24P6tJQAY",
  "key29": "HrF2xTsxmeH4KZGBPgbdMBfVTf97NXHDUx2qR4KTfYrZbChQBihtR45ekR1V5dYLfiEfp3xQZ3UvQL8BLk3ztXs",
  "key30": "4DUw8Dh23QeQac7D7rdjppfjPB8uEyy9Cr4VWWQsLo6XVqvEbF1XhtrUkc1UcBLrJdbS5LSUqE1MfoBFC3sesofs",
  "key31": "GYpEMaQSrzruUzukwERh9bR8Xi2CJzVF1bwGSQUYzvV8vFb7VvWi2JUYHgfjg1XAjzEXmDdFq7jiKLgAJuoGSoa",
  "key32": "238S6ZNfyyqhpA2HvVXbjnWUBmiBuTmj8G24Snk1nutgeRtA75kSXREvLUoBsPUzfgDG7szdrQtQWeWU19XjU9YM",
  "key33": "3H94uaouRk95KPHxjtrSSnKFzBxuaUQp8qLaEucWXDqwqAdYpADo74kBCRhKxE8cmP6r1JLoN8oBT1KcQCrweU7a",
  "key34": "3dHxk3EHDK1zJyZzuEAYEZUPR4adPn7upAFEKaFrAHaxHbQ2rMQEKdHXQwXUhXV2cw5KgwoTbuWAugHamGGfQedc",
  "key35": "552g1bketPMk32Nx7bDcpPqHa7x6JbXBR77YBrytLPnx6X1NbFCXZKaGaopVbGEfDY4TPNXHz52jGjxAGGBZKV9f",
  "key36": "64qAZjDer54AcAcm15cdawUibp5ozw3BnNMuDGzJNGpAXNDqpuWDnUByFJX5jf6Cfh9bSDCYW7pdRx7Czr5ZVyPc",
  "key37": "421kECbcZ2fHADEUx2wWGqeb2DHo9aRSpNb2DuNsjQzwXVUFSfGaZEroWSyHS1GJTUCCx9Np75xnXGut6MFqgaik",
  "key38": "5dZRkHa1ksFwhGfDzZcZYjoA83Caxk4sJ55Mh1bDcKfvznX3pE4gLgLuHuxPUWiYoBiTU3qkRtDvBtyPJESfr1rB",
  "key39": "5Jg8RCD4pdDFBTWBigphPMtEqRYDwQmsRoRLbbywS3jFZ4qtAk8peKpVr5u6WZv9c1vxUAMJucbfKgtijyaNvdVw",
  "key40": "3qXLPEbGe5muS3ErksaBpLK3aZA7X3Cs9Uf2RmvrtFx469vrZ5gKQHCaLiMDnu8iaSpxFK4cmJJpmB5CyPqssxo2",
  "key41": "5NarA1Xt3jZfuoJah4Mbi9ychbJdiaK5MMXccgaeV8xhH2oMtkc4reeNyceMMEo8DZRf4VsG9ToEMpsBCAQ8ZovC"
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
