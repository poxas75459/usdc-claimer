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
    "3dgVipGzDX9DFAFYTe29BiSaGatJ7RnikuXjgCA5EcAbkUWEuUxDxpzhkooHWgN9XWtwqvqfjKCcVoJTWpqwJreR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iVPwSdWvmS4NTH7nuawPVxy2HrA2BFpxF1vgXJEjwSM596S7UkzB3N91LuUpqCSsqoZJ9HNfTwCmdfu3smKVJ3u",
  "key1": "2H4LyVRFVXTdgyrWq43jDdfa8uwWgSjASifs1Gn3rfnzJHb1ZGpEgmgFcUzVnzH6mVbgAL4Ddtf7i3osfdPKBYXV",
  "key2": "n3AWGjGqH1DCsUkkCGRhUcik3TTWv281MTFLHFYzR6vjqTmwhW8ew9WgKeoMErdskDdi2H1eTkddv8dyeN5RsAK",
  "key3": "ZkpGNYthhJTHNLR2SuQgQLnodJGhmqkU7snGabw3bubiBueNVccrGA6r9NhMe1ALUKsGZQPyauSAfEyP7Gzm7vm",
  "key4": "5k9xPWcuPYGPyvw9fsSTHaGkELHnCKDJgQ3ZjXVesEAcCvsqYDU292S2LNeKiuzrTWFcT2JftRjKvkoMFbdmTaDj",
  "key5": "4FZZqMuQmgvmxXHh18WSpbhxw61Dipze9wxJdSBmQbmdVxLb7NuF4z9YexsVeQKxCXkfuUHpUSBV6y6vUs5YbU15",
  "key6": "pe3SSpnVqW7uEpzGWLTvZ2EeK8D7PMCfs8HTkaNoJWgbeE5A1sAdNRQ5awYoy8BVSBkyfTmKZPEcbLjkmZsgn72",
  "key7": "2swu8M1PskNHVoRMaPbarCdtgpve9kVkR7yp161BzE7kDnAbn4usS8Rpq9NnuVCXjovopDT6YKKi7M9A8CGNXHUb",
  "key8": "48DLHFaXpkGFV6xU2hPwQrrfUmfnzsjyKn8R3MJtNS9F9L1ScycydBE4Pw7HLcwwLWdqUCan7Rf6oLibpXdMB2BF",
  "key9": "5KxH19PDaQAgmL2kaHswPzR4NjXaHbcZ4Y8r8roh9wd6ZPiSQz7CoEeQnYBwPpn68MjQYWvJ6eu1bExcT5MDdp29",
  "key10": "5JeY2fTBPiTARUQRNyitW5S1oDcpJURy5HGJTdMnnP2zNyfxbQ5coiqZxjbgtUWo1ck66BcxbvJKJ5ABhPpjqHP1",
  "key11": "4cHCKKsWfynozeTb2EQPFd5KkHaX3uWgmCnaEoUZW2LoVQJ6FdNAfoUKNpbEiKVMFzqvPjNZLeRGTXvN8pYpvi6H",
  "key12": "2FfsgX451S24Hnwh3rjirBuKioiCQdNd6bLPk6ExHajPLRd3MdnE5K46gf2JARRSaoXPZLJk97DF8dtaqdYxc6gf",
  "key13": "UBeh13yiFKHiZL9FNUBPbaiBhVqrwkMHfDq3TusgpRNrFQnyQE4v3oas5FgGVWVw5o2wvCNui8PvUhNxVaC3LHx",
  "key14": "3audkh9669Jh2e1naijw97XnmY7SuiLXu49uAmqScxF5kKdsCrJAirLNrseroVYQKEzDFrN23fYpJqQ2apbuUHZL",
  "key15": "3Ldjyb9h6CLDjtrKzVWHifq28rSfWatwQZ53p3HaWAbjQyywAC1k7ZhTauPU2Q83aLXmQKdgsAMzNdCfFaiyUNEr",
  "key16": "4Y2q92d8JPFrhYvvW8EXiauhd43FjhMmNvcCuF3wDhtVqRRBVrF5f7ExS8tyjfzM8LW9GiEaASstHgHWEskbo1L9",
  "key17": "PEM3X9ouPzJoTdSivLUDqkMQGHkaGsTvzhhCk1uK1eqh2V9NQ3SdMt8CRx71y87uxajctYHTra7CwtcfaCXR4vm",
  "key18": "D2sfcpDDQ38WqZuXgB9U3SSpSKBYZKc9TStFNge5dpitBBDXmFqvFUQbmiy5rwFbkDn5XbdfyTccvFc3GmmUWQE",
  "key19": "2e2G5p68j8FakueqYMqSZC3DsVye3C1oxETZJfbcrJY1sQtGBSnXJdcTQ2Z6XTFvb2nNgWw1SvW9MobUZ6RkuvfE",
  "key20": "4FXFhCrRSom38Fk3v6vDwkp2NVud1hZg6gtwV8EkgfWYntfVL3riBakbHqx9V8ttoqFKG4hG9B6kUENrfbJf9NRa",
  "key21": "4nUmv6AyW84RWxs7QjJmwZxJr6KmbGa7H2xb3HsMS5Z93St7X72tSFKp7YiqBGJguRwGXaKFZWYToHkPetEF6YJS",
  "key22": "3e8tyzUtUeEzzsFFhZ63GiCMFP59N16W9UyRfaHtbbRFi1VVWZaaT741EBx8LpjDaRuQW6QhBVnK1n8rk3W1W1Q5",
  "key23": "4Wm6MUciTX4ovssp9ii2FiVgHJLf3Akz9KNCpxiJugewc2UjgZyb6s3PuuU2YDm5yA1YW2R4mNdF3n2ay7zkk8zC",
  "key24": "2vbFHTAUci14vqBj1QF2AJAPBkPr9Xo1YErirdDGEGqJG5PirCfKwQEC3HvMUTeEQoTUKVwXnLhhBapqgai77r9B",
  "key25": "qU6Hxgg8Mqg3cspUzrhtQdC1q6AWe9jR9n9beV4nWy4Yjyg6Pde1sSvcTvptocat2N8ox7LEVbfDvr1uQa1CKNx",
  "key26": "3FhxNCQqmDEN4yxfxqFNGnYvCxmDQ2S8e4Wzfng9Km8cg6uWfShm6JozTHuwC9HzG3yGM5u91W17Xi676ipWCVkY",
  "key27": "4Smv7NUh2H4WVnvSYF9D6amkoCTNEfmH9iQydBmYMjRdiY6nztn1AUyb8xRzh445Dwa3ckj52tvWpazJghepajsU",
  "key28": "61dYXUDDVoz6o7VyzGfd3NmibDkniMUE6SUzeMPHYKg9BEJPF1XYZu21vE9t9fQCx67aYYfHyo2A7rKQhoTnxcVu",
  "key29": "42yHpq62ngEZzT9xbzTqgttVKhurAWPMW1285xEtDeshmKvcuzCtNqgmPvJKptJa8k6RGtUmqJqSHwb7ozWr2Pvz",
  "key30": "4ey1HSVeKVxpiWezQ4DUoAk7rFKpmpWZXWd5qryw4bzrnF35hXpttEAY9kj4NnuFT76Evqf9xghoWBwHgXoLVP6i",
  "key31": "2upx7xfmLTWuNs8veJpGjdMRPsLV5kc6tNbtz9jv2fxgy8E24AaSsBQidzXJhUdYc1pLSwsBwYzb6VUEh7GsMVRF",
  "key32": "Bm4XuRx3pgP1kVNTitZSWqFLfCPatsapKn1wsirtBLTXkbDg7E1Ud2AeE9NqNs7unqMQaibz6AD5CZFc4rGj5oy",
  "key33": "4eCAgHSvY2fvSExzDQaf3wGAVMJkvQZHJwu6v5HBUKzusVqRgpA12y6BySoWMyV32gMa3sZJ3htEZ1nWTMj4nGkx"
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
