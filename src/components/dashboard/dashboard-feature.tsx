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
    "5h4RFmc3mXPJGukNZ962wtcXAjsgpgchHmpSm5u4o9nvssEBULmZ8xknDsatDpfLwA5FjwJAc93xieRtgGN7m1XP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z5gLpnH1fyBXQiebSHdwVwMgXiEf2CxG5H6vGVg6kGMPATkFAmpG2m4LojVGkpjuggWLDRkmcH9g3vPavimHWae",
  "key1": "R8Uw11x5J4z9uFhDysRgy2KeDfmQNV6Nwj6uGQC11QuGfacjuWCecX7cvEjBeJ4WN6d16vXz4SX7en2FvGy82YK",
  "key2": "2sEz1T5PoUBW3QBhozxgK4tZKZ7vvf1uVUYjCktLGGuXSm9jQP85YRVkA5b4Xy6cXZmrYNc7JGhCRxzcwj4Lu77d",
  "key3": "5ysPM1V6D3Doybgvy18scyq2wDm4CyUpc4o3C5WAzLCWQkcZsjRrTFccyMpwiHSMBCZTithMULr8bbVaokRKcw9X",
  "key4": "2Kn1gwS2hormakJRdtt4EYFmeh6HwSVSpg1MKbMDY8mpzXXAzPbHM1N4UB23BYX52x2QjhogARjvSJmJrGPsEESo",
  "key5": "5QbANZfoshHYzUHjwiMp7hk281i8JS55sL9yGFNDtMqWQ64Svj9cYESpynhwDLV9y7MFvVHTMyxLWnDrBNi6UjyV",
  "key6": "3PJzC7cS4HZGzqNbB18Gkj1p5k3dZEjyt48ah1EMZYAfiZqDHqZgTqvXoWJS47ZKM3TKB6nDxxUF8Wwc6Dsg2FuC",
  "key7": "2hnG8pxY7HAGPDzXsukJjzN6E6UmUSf3TSaHzTWHmDKdQt2Y4WW2fQUTeEPEUf986v4WDvAfKKF4pRWcUKMV5wtc",
  "key8": "5XWJtWqhSvHMTKz7fpNHe2SzmVNZXJMsAKYJeuEhMniEB5YXeEa8BweoHz6XVdZMxYZMwdCSnU4vi5gzNs2DB66D",
  "key9": "2GPRUfwzxSf8SU485Jxj3X9Hb1nR8EpbtkHGynRSL1VnSz1zmwzZm8AGDKcLF4dRcyT1vPunmAaYTY2wsHARGVo4",
  "key10": "Gov5nnSuLNeYKrBwXPnuh2eezrUaFFHWRu56MokUPqnKnVgVi79mUCkq4r3TddaHNUWRzMDsLi7hztqqa3GNS1M",
  "key11": "5t3qcJvGYMFy5RkJXgNWyPzav91d3ygx3ozpD43Nk4EqK5P3wGHe1WrwgpQzHtpaL4aRkCVkadxkFdt9JDFdzhDZ",
  "key12": "4ozxLY2kmv2nmMTicgH19Px4HvvQ7nutvZmFLjg5ZuRALKQryyi5d1Lz68t9h9Z5qsDD72s6ph2mdcUhKgykmdSu",
  "key13": "pNZH3ddh9CDpJTAn7LbY5cGafjyYd8WLFeb3HkfA4HACgUuxwHMHoEztN9p5ijHuYdmjJ1KgYNvaRnKKUj2Gf7o",
  "key14": "57gVQukHNkQwdPXfp22yNkpG6xUPFyKFd9ZRTjU39iEJ2bUzuvF7HCDDdELRzGm4HFeXd91EcBVfE1SKC6xUpqt8",
  "key15": "4yK7BijmpVFe9yo6dhSkZUFwfYXWdfoMExJnsufd3Tjvjv2XuW8Eg1BEdL1oyemTqE4UiqPzguFezJhWvCMhDuJh",
  "key16": "5J2gjnnNhyeCW6qt26ibcQPmzN2ALxvmANM9Yd7RARxR4bitYi8owdwJN4bLpPqu2CisLQiZPgKofEFshZtro58n",
  "key17": "2shteLABqDY4rCcEFtjC3wjQGoS8Y9nLcBED4gqvroJjVVsh6db3zipQhNJZ3TbshY6WkazxHDav9yEfLRuMduiT",
  "key18": "5P63TSK7fG8yDxVvNvA5yvAEaoy9a6DcYKJERuyDq546Ew9wzQBsrLmgArDrhocarnwjMUkTR7xFgUGHWH576fPX",
  "key19": "3YPgqqJxkJHf9zogjHVsCZzs4nqvzWfb8Tcv8PmBNhWBXbpFs1uhP8fVt7i3VjSSwji4JSnTb2uJWneCwquzGWMM",
  "key20": "2QTZksGUSXKT6f8u9t2RoGohREgwT1jaPp6ewG9r23gFeBZwnUGFtH6t8BWsGChkZwiH5Jq318RiWzYCHLQH4rz",
  "key21": "3pj3eeqESxNciz89QEQer5rWW24zZAUiW5N4tSGMGzUZipmqgdpcdoCsKjseVEzLiYg4fNH1t63jNzEQWZQKXaw8",
  "key22": "5Une85nGZcWNiN4g54RSkemsA1VGv5BBu4P8FYELH7GjS8XqeGVB7nUep9LFSnmJvFeoWg9Z9qaE5yagsEyLRUbs",
  "key23": "2Le8UX4s7YkkQ7Aoj49PyCLnZUe73qRvc8wvFELy9gJ7ksTdFzj1Ui9VJn3YQJMiC2CkhWr6pgMBobHskJuLsGEC",
  "key24": "4Wg23jR2GVcoXM5qkd9Mbm2FCzdwhXtiYric1TjqbAfcsSew2kza9wfCqerpJ17GNP7DcrurkTjcSL1zE9S4c5Z4",
  "key25": "2yu4Fu47uohs6WEpevgr65Br25xroRpkKqi3yqKhCfEYmfMWRn7nnXVQ6jnGTbaBBXq4sk3sZ55mBaWGQW4vsoSD",
  "key26": "3dANhsrFRHDtdmLVauKbq5KG7cZqRExZXZ65wVuJ6dczXPS2hqXUV21TfBPZHbXVD7P7TA5sNaM1yRhF16J35F2N",
  "key27": "4x6rTtveRx4iYyBbUDrKZ2MPq8tL18Hw4LbXrcp2b6RVu9YBoUQPkcck52VywDwt6wzhVRf9F7X27mjtEDP1zoDu",
  "key28": "235PReZTfx2KgZuyKEU2MTcpDTYBAv4ja5hB5VQ8xc2vR5GPPTWDVwRQuk87xEnYtbxKQNzF4UhdAutVHB97f7no",
  "key29": "4cKeKMfN79LqwohymrMkCZ4wyNBPaPZ2pBcxu29PzrN5oALdoUzbc41DQ3E4BjsCWoYmZoWSXR1ygduffopi727A",
  "key30": "5L1A9kRb6JyyJgrzU7Hb7J3LKDnkGhtvNX37peQphvhZEZ78JE4cwdFvhsi4vfE2TxekunobHwwCga2RPsLUJqDd",
  "key31": "5j1sJbLgVeDrFk1J9cCWmxrA577ZbwQjyG1kHMZ2QvrwCtrAxe4UqoM2QuXvmUXAJP7VBWs5DahBxma2FAyBcNps",
  "key32": "4P4MBkQQXWuJBYWcMMrqFKZn3QaKe3XpN2yNQxdenR1R36yC4FN5ZVtDiptajHhVdC3WX62t13Qg7GML9acbwhQk",
  "key33": "QMkcnGEqNNAvg5evokSMDXEgWk4ZZc1gE4Wg6VN2Jfc9ZNAY3zU2uvPT4uvVC9RAjuYc4BjyRvWimzFtyf1Urfx",
  "key34": "2We7HouYUGBLH4vTuKteqawAcGtow3U829CyKUo249bYEG1Sg9tb6DKSbnu2oTc3dcyazqYupZzy1EQwP8SiotiC"
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
