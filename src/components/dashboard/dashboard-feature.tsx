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
    "5z6S1aKoPEQUz4b5VaArFY49jzTZsPm56jnDh3QB5mxuDcsPrD2cvhHV9WCmz298Njxcx6KLeRUr93c4K3Bp188D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LQbqWBogkaTWhz3hQhH1t7hWMYHTXdQ5HKQidJoG7yReSjecQ5KZWN2rrHHi9XMDJi6ouMPtUkn1kEShFkR7YXq",
  "key1": "4csB3PwSCGu12rBZ7Q2bXrUwrBFp9eTJ83dB8jjq9JPGqVucmV8VQ6gD96zrJL4gsvAUEqwQztHHgiMFpbBBXXbN",
  "key2": "2n6eA17u4g6YiW1Nk6dTopqaWye9jATFVrqPAPviYeZ8gYTqJfsaqKKG4yuaGouPyWiXsm6ZsEcHcshu29mSA5EZ",
  "key3": "5sRTHgxdLv6d9wdzSTp4nKE23AhwgCjqPVg2oDGTTZZFpN2ipTSKnVsYWASfykYg4jgcyyTPb7KzR4zsv4eK7BkY",
  "key4": "5vj64YUFQwWuSiV1Q6R7JAwXf1arJNdgSZX9axr7CbmMLJbZxNRnEYFc6LqiobDmFfng1ScDjpksaEPEcWEPQFt",
  "key5": "5h9Y8nmnS4MP3ojtEwoSjjLHcS9z3NZRjsoYEbvL2tHCpTDaadyxDhAwYTBoGpKRZ7uHMGs2C3wdVJA1fu9agH8n",
  "key6": "MY7FodrDpxgH8QToXwviZMVc3H8YdcKcMfLTuAACNLfAMhKB61vJeeoavj27XecNxdxvqBS5ecZNuckkmp6ywnV",
  "key7": "35o2jta3osxofmjhn2BqG69NjFR2k1TzARM2xEsKrVbhDHRkDihn7rksjXhVMeeLnXL6A7vtv4EWkvxYnpw4BtcE",
  "key8": "5vMdFgfpkJ81kN6s7FD6pVeJA6KykkEthAFkYE8EvmhEMmN5K5xmjkfDH4RbwV4CeaKDkZnkXJmjEfJU88zVxGCT",
  "key9": "3oVFSBwhodyJj2CLXnkbAstK24abiJaftRDM39QEC2QAKiFxevQ2GsCWQsoz6G6GTPu2xbi3SM2Lp4dfcuPxKW3C",
  "key10": "3G8XL8sQcdV4MAkkBqUfQfQ8JSqcL84V6EjAW2suqo1iZebhSH3zeyS2NPjYYL45gxtEnZw8MwomDcHmL8iE18fn",
  "key11": "2JV4kTBNdxEcu7aCWJ4p6UoryqAb5bd7Paap1NoYWj2wRZej6rCm921AHqoZ4fLgEXGRk89gRBxVpmSiopVhRiqH",
  "key12": "3cAByor63HpZt85b4K4jaMMDPcNX3DhPQ99nxLywdECz4GisxnfQTboE7gZVVYPhWWeWEcr5wAxYWfzB9jrVJia",
  "key13": "67S7kN8jNQEfG2u8LKgNbLYHhQsfqbE8s7nk16z7KZiW5K2hTWMYvk7HppqEtz4aeg5hqHVTYNXMZi4rddgK1VaV",
  "key14": "5ENbtBZXuHEvnBPDrRM8AQnyjWuksLg6bjZrpgnuU8nRd91T5gdQTVMJPQw6Z4QCmBCxKetUyQW88YJWdNCMbNQa",
  "key15": "3roES5WWZ18x5KUVvU97qZV8bD9oTF6sfZzWahH1D8hZSeQdG5zvBLK35TkUHaZALmzn33bQ99JtagPWBdoZ3bEY",
  "key16": "9qX45g4wnyKodvsCMHS3V4FW5Pi3ZSYBeEXoB82mdiSmWu6yPwjiShio84PZjEDZfNsmJoHmspt6c8AW18fgFqu",
  "key17": "3kSTVHq98ZuFftr6o4K8P8sbZnpFMQbEoPxUo3VDycZvU9X7SXkCYrusSrP46VsupiaXJL1KfnuvP3W9srLauy7X",
  "key18": "29qcAPYvJ2k3RsFHQiyvMwixepWqCDKBm9kepXcRDzCQeuH6WnjH8VPLG8TsN7gdrVn7iaTXnT6FLUzZBsRLNmxH",
  "key19": "4medYTwEkDaUKoQY5AqqgunHSb9rdP3szNJHGYsSXS6fK2QTEk9x84jyDPU8dxBdKzbeKmc1VLxJaNoQuJtoR8ch",
  "key20": "MKx4T76ZCFiAZAUKJ9z34LZck8gPWfJwf5tMfK6DFdtyZPZ9rZRAGNQt6rJrGFbcS3yRbCEaC9tfP7Ubk6Pi7e9",
  "key21": "3AaZaWzyGx6ikVxwnweXbjLq1ZNktKL5Sx6aZRsq3XpsQAKP3aM9Bd6voYfvPQaPSvRyfqzwAshCuFt5upsCDiDR",
  "key22": "Nqvivo9AFGamCetMsZKnCLnjRhexb4LWzRoCpX5GTcUFmc8oYbxguXVAQhUqVFvUDdcijFfx8EFTpryfKCQriSu",
  "key23": "67hnU9AAtTVuhkAjyuKV4LLBucN3idTvxfXNuasR8Rc2nQN1fMBrMr7EgBkUBqP3qgUEGLs88KSZa4FnnobHR5Cq",
  "key24": "527kX28PLbW26ATGfsfQnuu5oPdjbumoZX5A57vbAZLXQreDKssrDCbbfUWm2nBse6RDpvhoLYMPxJj3DwCUaQ91",
  "key25": "3wb52eknHGaQ5ViKZpAarSSomgK9ZjV7xYiX2ip54XJhSt2PBYwRLn3P5UwopjmSZEjSu5HSo1MUidiZurVhj8uL",
  "key26": "34e4qa4kvLDg4qzJdQBuWgvqXK7H9jqPzCf3cA9ttZfFkmBcwDNoWAVSGTrcsjZ6yY8g5hdK9ytAAPgqUdVK68c1",
  "key27": "4GCcscRvLjzaKLT5myMapwCbv8PdWfDYYkczrVYJJdSL7ZBfFKJShVjFhKDwH3qk6y1j1h59ST9XZvNfTDUrH1wT",
  "key28": "571xZZxWSgujYzhj2J7LSKKcqzzWyG64pMULw4xLZN5H7aAe4ZGtToagG4oxswEj2pv9S3oEVUC9nRu2sT9MC9dz",
  "key29": "2c1bE4VZsaWTyF8Peem9smV4nd7PzNCx4yMAzsxZaojjrSFP61ceiShhX2KQ5u5F5ZJwcqWmiSw1FMCmRVzyohNY",
  "key30": "2ts9kHuNfjdcwGxwLPb7b2fDVUXu1YB3r5AiyRd6RRkNQbrnCzQTgA7ueRWjGr2hqSrV53GcJcvyAVc9eBEQnhCP",
  "key31": "5uEvwxGn3EW2JWgnRRMN3Ddqax3wb6GfmYbGNCMoZt1ZRWCQpMhjj8ddxzP5v6ZTt1aPcr6zeuofD6ZocEPXdWfd",
  "key32": "4Y83U6PBhw4uSa5RMyhwxh39hV25z6HVsR2Bpe3gpmDDdY69JD4VCvqxa2SCTBa2CUDQAfHkWsXZvjPorUicLedW",
  "key33": "5emPDuELfKHyN1S8jn7UxrsLDpebhiWnCQC2HNcbK8rRkZmpLyZQUegDkqeZYDFh8ZDTtf5zcfaq9AVkdGr99afJ",
  "key34": "5QCb9eDqUXWCBJnNmzTYWPx2EEQ9ScwwMcwyhaq4P5FBNK5zEwk8wCKYkBGQ2B12nZg6H4sxjK4Ear7b1i1vPVfE",
  "key35": "5TadTjV3p3V6PV9QxdjiKVtySFs3uBwvjZaw49xt84RvCTG1c4MeWHnbXBBWj5hqxvakZjSeEXY8jfwoPkXg6TqN",
  "key36": "2HvvfqZM4N37W5ZMRzAMoahCvdSUvV7kCp5TAEwwHStW7aMUd7fztbq3MqKASR78NnjeUx7DGyJB51cxcixQ8TZM",
  "key37": "4iD6WbJPGfEMo8Tq5W4aFytCMeH5zdDVt6PRWfY9tjqvCGMzuLv7nGBamo5bvBVQaYKAuC3aZAzo2GYKTccDtEoi",
  "key38": "4CHyNArGDCGp9euijHLiEWXfWDG4QTjKiinPGVdYKSRAcMBhJ5KjeVQ6BGzi8xc5sXFLUBFXtYek1gSNAf5odUTj",
  "key39": "2B1QGnsB8mJEnkz2Dzghgyphb61HD85aqjS841gTkPRfLTcoEyCrp9waf78MDdckdJyH6bzSFNsv5ya526cjQnT8",
  "key40": "Q22wPcrHeyrfrpbpV69yLydLqH9hL4Nw6GS9TteZVxEeV9LTxfHdk7NThhAm37J8jpa6SZyQDrLZdpm8fxmjcuP",
  "key41": "U674VjLnKn6HTQbEU632d6dKuDHYGrHJA4VcHsaMevsmXoyFGo8tVWeKne9sj3MVaaQ5aD1Q29AfyubuRshb6Ci",
  "key42": "3fCLKdeyQn4JcaBx3kRZXZY87hZQHKe4FquNEtqmHkuSRH264xTkJXKyRQW7dc5bZpHBRXpbnE1CY4HNq8eFJLJp",
  "key43": "uzvG2zYjtQUVFWdJC45E1wt9ErYs3ArazDnQPeFv4hNwx6ytCz7w8JC9KHeJLSfcMkpt1eQjjjRXBJz5NA49TmG",
  "key44": "KpVSyYbAYRZ9sg7W3gDNfs6jPDFArAd9nZdKtgjeZHgUnsjU8HopizPCJKuYqt7j5iYXD4G7Vfxt8C42jFH41um",
  "key45": "3gSSxodLBFXzM4VwBz8xd2GUrh6odP5szBDAGKdxs2nQ7E6eFiETwFX1DpEMMeH8pZE18PVdC88p8GJ5yr2QajhG"
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
