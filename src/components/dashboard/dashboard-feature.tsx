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
    "352QfLCGUMpna3KvoKD7PvpFzF47hN7wQLwbHDT3M85a152tSVqdHJjSLi7YUnUbH64i2TZr4PVcwBphGHk4f13m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mh4FMaJsTR3G6GywY9qyoi3HjbRXSfEtHYtfrHugH6yzN3DpdABV5kJTCNcKQXwuGP6Fkfsd18yURjbdciCucms",
  "key1": "3WospquKV5hUPU8w8cES83vDxkieUki6iCKR9BckP8ciJnzghSCYEfnpVRM3aQL9uE2mmU3Bt2P6Y1wf6fpBXzMT",
  "key2": "5tGhdUwVCVxJ5nwBY9U73anQbZuLuyr8XaBTUiyLxurmb851K4rDcXJeE9tbap6NEsDci9zTd4UyS7i2ahoYw2bu",
  "key3": "4MvnPyuCyqVjBjLMhqxAoKEvLvzcLU9LV2oBLLEafftWT9hhFptuzYQDG1EYBy2RCAunKk4LNA8GD3vvC5QEYAj9",
  "key4": "py424M3B58WKGKfs7dTXpYudcdEzbPVNR9PfpMwuFb3jbPkPaYGYWd5u69HPGp7LikDuCg3zaFTkPX4FrCVqzxS",
  "key5": "2Y5HZ26G9hZkTcSy1hvahYCfkURVNX7FD2CV3RvV7RkFGchg4GQTWHQFpm6jZQkoitb5QhEniM7W4HCzFFEd2nZW",
  "key6": "3mL3BVGRAgMKMDEHD3xbTpyQuyQcsY5Z2Ly9uMb4qEctMR6iU8N4o6we8cnLUaBppJBnC4DbBm7viLvUVQ5ekJiu",
  "key7": "3DCvg8eQz3VMCUT5iWmTLm5ANxcmpSxmMys9TLp6hhGtJpGUcSFojXf51NhGjHa4wZbjmPyXbmrzuQz423DsD1SX",
  "key8": "5x3PJfQ5tW8TbomZ11SN2KTEbWTm3gmzzTwCoBeRbTMk2FomrEzmPvPrWUsc9kd5UidX2e2fXiSqBGmfrTpdrATU",
  "key9": "4NcRoexfqQVvxVLhkfpcg5Yu5jzxY9MYu1zPvEs6bc5nNZvnRH2tS3ddPJKinygNBW7npR3LQb79pWZNBidfrawK",
  "key10": "4yv5s94V9iXbNJXnPcaEYy1nri9o8Fkqoa1ViUXfETYYdcCfjApNr3BLmYs63468D32rMGb2NZna2HHoPPk41gYF",
  "key11": "3A6owPBPKYqGf65gPmWyaTJtGnTwRENB92y53sVemvAGM2R967ntqSGWycGq8WHqji7Ds3aZRKQcjxU31pQG1UUx",
  "key12": "38h2BB6tV5Qkwdc8cERKYcnU7y9x9mSvNF7dGzrWywN3eNqaP1GsMCPEYjitVREFEy8pVufgGue8E84A8BRrqM6o",
  "key13": "FdsSHGet3fgcoZRKFBNqi24rsbDR1eoZUGoe3JcWrFXF5dqnXyUCrK5gmk3ocDLrtTDDXsWhwYQ3EHy1uANL3YN",
  "key14": "kkbFaBB5YiqrF3VFdJJvg6P8majwRQcdsWUkoFmxiWaLHQHo6BSxxSeUbXPCxhn6VGr1mvzbiU3ivKqWiaoiWn6",
  "key15": "48GMgiJPpPcGb79Zrc7BxXaKSxm6hoo6BCCNeiiJ2uiB8QBJKvQJMDBo6G2RyxiXZdjvXjaMtV38doUyVMpC7jYo",
  "key16": "22Dwg9cmCEQTv43PvGQdzNWnDCnWX2jcyt2ywEJMjhp9pBtdFTeWxu4hZdzivGG2pHHQpSVTnyqUAJ85BouRfgAw",
  "key17": "4v8x7GNrVWT1kwXygYq93v72ik3ainnXVRAapGdvstQ7dj76gkfhRhDkNVf7B2N3LVNnGSiU8mhz4TZAbxGG367N",
  "key18": "63pfGcDyi3kxk85mhw8jimWJDBVk1dk4mFUQNgMw2EcDnrfCCRBFvcxB6HKoQtdqsVe1hZp6UBFfGyQwm6umQNaP",
  "key19": "zqJsugRHkLxFeDs8LQ82g42D1W35KU7XQGBMf6oAGQ5fUiE6X88h5ESkyDNu1W1BfZjYVfwPhhyZixbum9C4E1W",
  "key20": "VtpWZAM5ireZfQLwAF9V4ovoVunUASVfratGca5w5xDdV6sgZfDRsg2ikEGkgGZgzrpKBZ7cLqkiXVngdrHZPrb",
  "key21": "4EEpiAMXMGaf2bpT4sEtDAQ9dqwYmkMHURXjGaF65F5DtCwymsu7LLojRcJNhNQpYpCKPmTeNAT6KXW5nM9enjSD",
  "key22": "5o4zRYhhUN5p13nZ2k7z8ytowz9SNU5umMY1FuVuvQaQvtTVU3RVcmWSPjKeEFVhUVPZ3TwHEz98pfUcYsZjrgWR",
  "key23": "2iCWHSSgoFVWrXDSZcn5EC9Kam23JSfWyiQoHDVgeMdwkXGEk18jVzBHJXbKKZtfNRLqpaVp61cAhxsGEAo18bVo",
  "key24": "4SfQZP6cMrUAyTgQe3jRfcQkMof7U2vXu6SE2yHEWtyeP1dxn1v3aME4XBy5SBS3J1bZWB5okJCXFNAYhPcuE5Xj",
  "key25": "7f3wD8D355P8HrYZrX7NRWZu9k34izm1sYFUhByFh8L1XC9Tufx26pdmPgGNsfR7V9rtWPMuNtD2u9PLG8ijotf",
  "key26": "WC6b286NBZzNQt5TRmPfd2JjoW4DNbKvrXTttyv5cbjVRMBxbovpkbMjeYDEB8wydYXnSphj17t1tYs4wvpqu1S",
  "key27": "yHLriyvfLFbxpSHxCjeE4s2WiPV3SquGnnX968CJB5bbKGTX5yur9Ggxq8W4jeBZ84yKbC8yE6hk58i1GJq7PMN",
  "key28": "36w9LzSDazSQSnrQ5ACt4dKSmbMtdbCX3sZbFDRCSdyW4A57bJ3BgtEUaz96GqWk3qCJReu7NBnffqDrhkgVtxGw",
  "key29": "4pPhMV8QBPYr8R1W2KeAVJbZUsMruMQjsStxWUKDgJvsS1GgakadM1QKJMbQpqZoZbJKeF8uzDy7ZttRumZHdvr8",
  "key30": "28wpKv4fYpCcLXq6WLt5mFwzKzsUEoGRbaVyDvFpywo2yAd5pH8qxzHpFGgHgusfAQowJFbM3rJUF6ycQYQ5HiGJ",
  "key31": "4kUxPf53XktxaRmWVMQ4xmRxDWCrNKULRbWtnJxr8zGv1kaDsA15ESZDbtqyTsbdSgp88gArfMadHup9kLjfHCgh",
  "key32": "rAsZYNxZe6kqjEkgNc7TsQjZLkuyjpyVvV7fYEK5ArZsmVt1bpcovbzmGUpPB6cBZrXwuaLQLgJgRTBJK5TDmab",
  "key33": "FS4t2onFVw3u6f9VGSqmLifcyCgLMcWbmUw6zscBc3edWL9XDRKxvqRecAUwP7TxfsGRGBHKSnyihsuRqdpeKmE",
  "key34": "3d6EShbDG8YNKjVve72vn2oNcrVkgsq89QDhUtPK9cX4nvrGgjVqvmp3q2v9zzdqAzmCdk74LWNWertVvE7UrUMm"
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
