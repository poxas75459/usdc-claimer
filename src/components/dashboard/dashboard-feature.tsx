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
    "VSNb5NDw17pAgKWCM6aDnLdsh5ezfFSCAgBsZXe5vtsMp9bpNw6iTXqkM2CrLinzEJFKvCymGzxHYhonJbCzf46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "349PMHZVV6dWQJvgK3NNiuus2jm9LWbrJQQbUTGbcZu141mW8xwJsnoTnD6ToMLjNxaeSd17YqpAsWko8fGXdWvD",
  "key1": "2S8mM8qunYyufKpjJyg8jpnCTX771s9UpjUHnybm6CqVYhKqQTdjJkgXUC9Uq9QpCTdFFBdcBqencdWfqdCoS82F",
  "key2": "2GceouGJyD9RxcVSM8BQcUgxN3QBdxSwiqHD1zWYSMmynqoGBMvoVmkjngXyqU6d5Qdp5um8PMQjn5fRABpxMfv6",
  "key3": "5ScSd3qpnwsFvkDjRdNX7mkspqujtRHNaPDViXcy6eqqVko2C2XpGCaXHiXzeQTx1WaWR5kYNd2PUJp5FcJUbUmf",
  "key4": "2A5ZHSd4Zotp4rD9E9TCdHRB4He8LzF2RYTZgMyY1DGbdqn8As6PitrgFKy7e4h8LBVAWdSh6zxgypQGHCcmREQG",
  "key5": "2qLNpmEJ4FE7KJq4iExozTFXgNCgexbUi62FjqjgZoGaMkmAdsSck3MaHQGfCDanqcsXsuskVbGw6enV6RNag77N",
  "key6": "watZh8W8MvdvWrvH4fpiWKSUu5eAupwFM9Ar6mDFf3xCsCVKbQYMsuxdeWxnsd6uR49rDWjzCbTZPStgFdvkF4v",
  "key7": "4vt3FeR2sLqUGHBGgrj5Nz7joiPEHGXbkrbx5TL6uQmYCaNqDbcy2Xa1JJuTTgmz3fSLbqrsRNJPwahUfRBfBLuk",
  "key8": "GdSNiSmuRZ7keFy9VeVdSa5XfV629vrH67FTAbvNjbknzBvp61LdBFHSZY6CMDEYT89hocWpc1FHsNjvFPwSmuJ",
  "key9": "TVDmvmiDRwnAEuxaVWPXLXZ5dQGJqFC6vT2Qy21taRr7cFKN6trHbGpcCarFZhYuifQgSDBXHhYcrXR83KBGfFu",
  "key10": "3Ec6xUCEoKhTqv1kxh7RGYeHr8LXn4fckH74oFQRjGsk1WzyhPKBD3XCAqJPWVNpedciwN135J1s4dW3P8p5voWn",
  "key11": "vp87SGk8Ecx46L9vJhtKCoo2Ju6x9eYf5mX8np8MXTnvjaR5LEDdWCWker6UJKonywjB9GcZjkLyUfbUhBwyE5z",
  "key12": "3fdTGmqSkNDpM3sAy7EA7H4zGfmbofeWyEHJjSDFWH4tW64Qxary3qfgCUHP86CmjjVE2BYJyYoK3aUn1hkwhWJj",
  "key13": "3vReqz9dY7hftL2cFunA3EsVNKc8pa1gVXZajyQ2GSJSRsG9xzF6n8Roc2HrCW1p5Rh1ZJ7ZwRUdnA9sPeduc7TW",
  "key14": "3Aj5VYt2Dvtg5tGtVsxn5M1UXHSnqH9yKFJa5Uc2JyVM364D7hnUZqr6EpSC6kiThaXuEs5F7FbeRvYRR1hpNyAz",
  "key15": "2fm5JXoahpzxYVCTXex57dXFWAAmf2np78VavsCSv7rW4G6E2P89KD4jUN2tqqgT74cbqvAFxtYiXYFzxz6REWzL",
  "key16": "3SK2nUqmx1Ji5ZpEGe9ZfaCrTdTnASALqiyxJELEUBEmqz3RTGKLkpRfN5C2rTdDRNHw9sgc9LfyYXnJQWtFj1gv",
  "key17": "3C4MgKFZYhGccQvkP1F582seTBf2tXwohe1oonTFMtWhAQCj89LUrRGGbSXFFQYY36Uexnk6Ug9kLCwzLGY5uoX7",
  "key18": "2umUNL1k1QKVcSL6jtj1qChr4ng87ELob1wuS5mkCicxG5h9L1HSS9xrRQgk2cF14s2Q9iTQYd943QHR7NYgXEBK",
  "key19": "g1DigptF3WTJSA26iNgjTiBBKfsVL4EFngi88abf9YJukhAaqZVvNmQFWgYy1EmZSdsHGx6b7MaWCCwYTSfouYi",
  "key20": "2Dpjv7VZe3DaiB94SEi2PZsNABwMRhDkc4pzw6k3rSUyNwyWhCqzmHBg17KLMMjBCJg2wTzzMm5sm3xA8RZW7FKk",
  "key21": "2fYPJpbpRDk5V9VEfNEgB4HqS1dsDgsLYmKEAYRGzWW3USj5HCy1rk3F23qTUSNCSLufRppWoCVUc936huW8tRoG",
  "key22": "d5bxkBBdZZ9J9jGJDXABqoFmCTANQgz4c4zY4ivhjJmcVKsz42y2PQQawgc7j2bjpxcjuEqoVjAxLmFX6geUxZk",
  "key23": "4LpPoh4FTcXLZLDbD1JCVjLAmBiAYzUdntst9cZuhyUGkznwHnXnvNvfsEMbHYJTbRMM7osQW3uAkNwmnRoB2Tze",
  "key24": "3uNvZF2hU6dCFfvRYp8NEyBrPWPJpfgWgGofmj3u83mveHw15zAB994wCe6TFZqrvsBdoQbRStnkN4yMKgKvycse",
  "key25": "2Xaa9VEFj7dnJeaBw2t1CscSHLeiomZ65B8fnrnQhytnthhJ8NuXQBnFduVRsCj8Et1uwVeGDLU6NbkAf2tKTmms",
  "key26": "H69xxMbsz6AUZKRdFT8dneDVS72xA5yfhuj74Yh6e4U9KCpwPanzBWm2k8k9vExCrcd4BaW5QWYvMBkXKcwefA7",
  "key27": "5GPpsRDNUS8X1qzxoVQewNqBVdEuPBGpkZD3Q4P2eEjdDojVJxQyroF9GXo1qm13wWARo7MKfddxZzDqVK7BdJrY",
  "key28": "bCRMstPC25eUbqfLajTqa3t5riwXPmvtW2exkiHVjrNSnThDQVzSmr2pjvxc56EHekxK7aVfaE9JAekeQNXpZtX",
  "key29": "5kzakYUBg4T7NsBBWw3om5krD6hqeMiYmZCX4TfutNDMU61sjreZzFyqdcoZidW9LLBRErGj7Us5F6RKtBA8ayH2",
  "key30": "3S5A6DdgCob1xfGavL1EUrQeGVvQb52f6aqzf3JrkNnyHAH8RvJb99eRULnYAsDNpD5ML66t5R8K6EKXs34REALK",
  "key31": "5tXNFjiqmErxpJJjYnyUWJCdHjuyHPx1HBWCiKbiJdLEVuN5zdXY1wXWiPW5x15Zi7Lr3344kT62LPYY7RTMgLkg",
  "key32": "5zgymd9nmFxn7YKig2eEWGY9tvjG3aAf9a6BJVvuStfEAoPvPWqEGEZqqVxkkK6ZhkqvfWMCKeJyjUcMymaSSzuS",
  "key33": "2qb8EgVL1QxZJ6jiZXpDb2ZjchGUk1YfcRVhc4tYpoYFiCryfKnc2D1LDYTw4XKmhu8P1eF8qmYsGnoexrpK3m8x",
  "key34": "22Zyw4ubhFDNuDs9btYAZfAJNHK5aVnNHDk8w4SqeuNTJ9iCkpxPavJqeyarCeURhPbnKvfeDKzn7jfjNpfkfAMM",
  "key35": "2fMwuNRioiXfVwrzE7cEP4dMFGiRN1S89GwXx3D1CvU5VPj3aoiBzuuiVwj1DE4Pu5KEqWj2LDxoKxqNSHuVRQqK",
  "key36": "3yDvBqAdq4GVh8BioqHnyvkGvZJFK1Vxgtw4JGbuxjzAFfwpvyFqrW1DBCUvCKdiy3trKm2dm4QFJjro7QXNiCyW",
  "key37": "3u3sF8iqpTp3c7gm7YaRgvpKH3mcpTujkH8CuePbeJRb5UJi1B1ahtGNVCbM7Fv4FLA6oEkteSNGY4EbzEwshd4t",
  "key38": "3W9j64PAKEpVzmhb6efQ3KQdoChrMXYAt8W2Xoakdgmx18eD5y9td7wLypXgaWdwGGmBtbMLACMGdeny61pWm5cu",
  "key39": "398RvcM1n7ZM1f6zjbKPdn1NEHhzyhxQRw7v1qYviUuRzrXo52TyPkvVMtMaz2ncMogU6qPgAkFoiFsZ4YUzhTo6"
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
