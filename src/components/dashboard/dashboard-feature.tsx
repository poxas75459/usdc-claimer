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
    "U1zQPzg4P69LHcJV2Ht31w4pG4zG9zzzzjwDkbys5jdpmuhmDNtLLt244krAhdQoPN87Lpj9Z8ofRRtGyPWFbG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wXWBKGs5742tvHNMm5oNkLzwQTUUGniRyszn1wUmw4nWRT53B2mZg8Xc8GS4PZDuNxUHgDmRYHQBQbmWp5n4gxq",
  "key1": "2ankga9WcGr4wTu6ys11DfcJQkP5LzQwVYaSZEMLrFDemc6QzFzXcuTuXNg8PD3Fajpf1CmAowMqmmiRFzJ247B3",
  "key2": "2wNnTsX4aH5ThRtN16egy7YQRQisUa9jSYdroTJfKUkAaR2z1H4JhZAfqgTa6Cgd6JigtuoPV3Sn1kpmv5fb55NB",
  "key3": "5nei7Y7LMUnWc3ioave3nZfZkZaSUPBaZs2Dp6UWDNVvNnWzbpnF5VFEeDxvewJmxFgVnNzQQ2WqBvzbgy32Gyrz",
  "key4": "5ANNQ8eWKxVHFdFohKUeNjVEEZ9hBMscFb9S8jfvsDv1UwCX4Gtg2JtDsCV235wWt7X25VvE9gzFKCbgTfLkb1st",
  "key5": "4wYAoMhddJTraGa4U39UYm4jq2MUaQEVzaSSkrrtDCdiwZJDK9aU31HgouNcUvoFHFJtSTRzbwmpQuqD4PH1jqRy",
  "key6": "J1yjuazrN7jNj8rSYhtzwQzn4oaQt6D3ZJ3YkXe4rPi4teCjrTswoMXZcU7mD3FhcwSnssJSskHDy4Ruqe5BGaM",
  "key7": "3J224zDNRWZm272N7f43QC8VXnDz9gFyL1KZkG5atwxUNpp7H7EUa1c7KEq6HsLLF5gbcgVi1N5DtMLjFq8cPoYm",
  "key8": "41jHq2m43y7mkDvoSG165Q2yK8xEX842vR6biubMzNoQyKTNXUfdm9qPqT7aXqAErfwf34pTRBuzr1ckK9q3SSoE",
  "key9": "38xWkoSv6XfHT43qfLnj7a2K3BJq2aHNTcYyZvSVNM1uMvQPzhUmZSfxKFfmg97kQNwiWBEgHgq545hoyuC5oKUj",
  "key10": "3WNUejX6rz4fLM6U7fSAM8PCP1fb5CvPnWjNeSzXV8fDggnLNeHwfohJTU9xDH2YpjXoXj3xu3QWJCEewq59HcFr",
  "key11": "5HJ4pHpJjgFTqSCgZd5Xt1RH4w3yCs3M7HpQmtuapZcP4UF6jR5372niVLdFN5fH4KaP96i7QjseWHFyRmxzEzYj",
  "key12": "2NZN9t4ysk25xkQJvhSWRtcNFcjiVJKVgUZttrXystCJ3froM65pZBM4pquEbgHzBiy5JUZge1U9sEEAGvptYaTs",
  "key13": "4fkLfdogRRcdeQifpoDdRSuowC1yz7DUmdKYVqoaVRTUHHDxHWHWAMkC2P5H8MGoFtXGXPEam35oN694nZZf4Mwx",
  "key14": "dZ7RovXKjDJFMxDAmsHoo5MCpTd1YBkcohfU1eQhFMUqcqEhXV3XMdfDhwUWrPoTzNdphvULUnjh2XML7fbC4nJ",
  "key15": "4BC2i1QLUwjCd5Z57KQ9aVNawFYePY1kLe4Hev2yDGGbWE55C6J643g8YSc966oTohYNzrYXo2QmfJGBqcTci5GT",
  "key16": "61W1wNhx7kG7ouv1TWCkJFKazKTiTAnAjcBKNjcr7Ti7nCTB2Gc7S5kjUmeYPzks3BsfmVV1b9kHdjaFuU2QGCtK",
  "key17": "2sjcbSsxaiU4VbDAn1ut5ia6cA3T2DEo2kMXnwfjuEu2JNUq8ngKohKb62vLRvogsBRXtP7rf7gHYAJv1UT3S5Mx",
  "key18": "2Ap3UZoMdSJyo2FrBCG5BsNqxjUw4LVjaERm39VNAt47kDrTQj1RPrRhMMEEsW4vnesFsPioUAL6XEvTTG4Zx5bw",
  "key19": "59smzMJMhZehNj7pqpWjVh6WhM76xvxvPYt5durMATjTA7Qzo31AMhiKNdnd7o4vq1NBRzr97B6J2WY2PgWMxt1i",
  "key20": "5MJN4tMeo5p2GcaS1rYTj13PyqpY7TQVLzrkH5MDubpcChhTUFQj1wjJBk5PMUdL1uty4xw6BrHE7yqz7KvFdBNS",
  "key21": "5Xy25UAYzhC9vCDnKdSiGaBbU8nQ9mkvfTJn2mRH6up8kCM4MrX3rFUsuH6cYAu5hF9JtSrFgWPisxeBm494kzW3",
  "key22": "3RAcmWGn1nxzUBFfXKN1erba74FFe1tViLCf3PGgbqXepDxmrQgLoti48RrkPTFSbXL5HkeAAYo5G6TY77YyV2bs",
  "key23": "3UkHTesNb59Y7dJf7UoDPDZg2pqdtsurEetdPirXLa2YsRbMcJXrSSLd3g8g8aNSKo7KwWxWjPtzVPnoUm5aFqav",
  "key24": "3KKg8msRb2aWLf7KWaFnn7MK5ma3JwTSCF7scJMcnNbm46MoANzA6CF9nmQ9afJKWx8pr4YJ3fdZqBj6aPYrBkoq",
  "key25": "37jBdYg5ALgEp96HU9rJjGYZ4HA9eZzmjBEaxpL8zk4PWJpA1M4J354ocXkWfAPneHziPhyqe3FBNqmKA6mnsKXC",
  "key26": "2h39sb48o2YUxNFgKj1W2ys2U6TgkA5WoNmnpdY4vrD4DwZ8oF8wmxRkAVuMn1tttQAaf7Qz2BdoqXh17pnuHNXE",
  "key27": "2FCVtLoCXvN85Qfotiob9bXRCQmoSsuFE1m6xVsmK3AELCE1vH1hJHUXdx6jvHscM45Cc63L2DPteP9DZrhPNLyj",
  "key28": "2hTEecHMv5ZornW4Redj41bd4ZSKZ8iFXJMe3kwMJh9QYugZHi3b2TpAhcRNm6z8Ev45kCoc3MP5m5eKpKEQ4fvw",
  "key29": "4vqeNwu6MEz1UYAYNfuL5e3dfvrw818knKH8W7cUjFKpksKc3d7KLuXc4o5u3N3VCSisdf1Pmh5pqmE1KdgLQmzu",
  "key30": "5Y16v8i5bsVZNfBCKjihFSNfzYZGBA35BJJ6L7LwSejcHuKajTHHTPDP68uMDv4H5jbsD4eKtETHLVQKFvuoEkHJ",
  "key31": "5BAYEXaSxhPbSftgoCZ6x7eiyet8s56gn59CiM3V4Gn4WA6cHi2vRh17YRuaAyY2dVFRBzPvvyM6y9D2gWv136um",
  "key32": "4XttzvHY2nYc4ucYwxoBhKiSEvvyetwSAyfH7ooWuiPc4kmHtNRjWZAAhtvfDHtu1ehxUEDZ3CJnNFVkgQSUmzBE",
  "key33": "NMN7Pb2GHd2TRJkuecAAVNA3rEXoahYBb6hRuM3JtWKaXa1UAfQdnmHhYGjzL5d2Ker5DDQackxBB3RDebrsdb6",
  "key34": "4tSuKka522DwUZUDB99ZNJHjXvFG4qU5WVEcpoJwYsVw8ETpj5tKmDnxy8Srzk1peiLq2xb5cL4e1ZSS5EJiETxJ",
  "key35": "3UqwSjwzdavdoKkK226FGigBx4eTqTHftRzzbgnU7m2KdXa3T7Wcoc8pCZy8c51eCqi2Z9UURWiT1NkipAukJmoB",
  "key36": "2LXFzPiz8C3TLcvRbjpA8iwbahKoMbTpiYaCbfUM3VDXPVXbiiuqG8A5WTdqVphsASxhRo5qEH3DiTG5gZF44Usw",
  "key37": "TRqiRcxp18kE88jAwcE8BTa2TGbjgzLsNG1dnsY1yhJTCfYGDLizBvKfNQy2Hg63mDnr8eBSqCXGHr5s3guAd8i",
  "key38": "4RrdunPwNARKdLtC6gHpC3J162RsZgbodHon4NUfiGsK47WPDNAGk4n4qvgmgtyjJDEAsJ1ZHMncLzc8YNWerzzd",
  "key39": "64Kui7kzqzi4Vc8jLDtKDBcUtYcuLPQ6Lh31cDHB5QFbXv4aiKZ58g89cubyQv6M88hqCo7bht7L9E1ap2CQAXAY",
  "key40": "2QbtPRseV1LbvdJW5YqYZbcLVobDVUcy1MRQW1xVJKRFSmAbwjs7DonZwfGy3D2GnFg75MeKQqyzAom6obP8yn3L"
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
