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
    "4vuoDASCh4AWTL2WRs2KUGxQXUuAYC2iiETih8JJ6rGKG6muk4DhJjivwCMTYMwTZhr6g5MJBBQDTx2xhpPJCSMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F6n252sSZvWovHbr2haknZ6drGj9rAi565WEJ2hKL3SPXq1LTTCcwpwnh3PGpt6pJczyXLxxcTozCrrnC2naLT2",
  "key1": "3cGC6TyRKrP8q4wEtCixK2rA51N92UhiA6kRCitnGeGqhJYwrSue3NXDDBujP7AppSuDuTYGTYJdE8uJHZVxG5zP",
  "key2": "4ekvSgp6XYqLDCA2TEFcNAz7Sb7UTMENt3Sa3NyN5e3QsoYqFBCk2ugv8TeU4B8xJJZnyFAsYfZ6XKF6UnYmnLi5",
  "key3": "3wxGcSPNoHbDNrXfjfHM8MNSQrkpDQtbuo1Lt37nYs3xkTSmc9tBu9ydJPJSdn6Sj1cky2txuRMgk7Z9j4AaXua6",
  "key4": "3Fxvn2RJpXvgjtqbjcbAUKJc9Wp8HpNuCzwChG9SFkKp6ty7aNw6WxFyUjY2VcZxTHMkzrsJShuLKTU53BfmRp75",
  "key5": "2H3NoQYuA7Grdgy54qCExzcnF6gFNpwjstYbLWUTomrEDu2SJmN5Lr5SZat5tamQTaa21ciTAUoUPipJCsiR3bqc",
  "key6": "2tmdbjg9yTHZVtKLHbu4fthHgQztu5xR6aWhy5p3mzwmkUR12yEBoSA5GBeUYHMNFzF5rEqnzKnmaiqD4yFrXuH4",
  "key7": "3gMZ1webge1gmJS1KSFnxP4Vur8RmFeUAsHEJ6CQoFHtCr9sSpfzszuMtuDaW2QFLExwN6prezb4JWC4RfBiRtW6",
  "key8": "5Q9cYQmXhWf3bWxBv6aFCCrKYP4U7KVJyQDpPa6iq4L8ZfPncTJeuMr68VsHEHNXwgWV7QsxaceGuiPeiQZDHcWx",
  "key9": "5HDmgKoZkJD6i8oYPfChW3tJHWAzG2Q3aum7xNL96b2PuxAVyU8umAxNmK5eAYDGwDSs5TGBUdnpzUSHF3L83EqA",
  "key10": "5iNgCRfM15HohBVLkotGgjC8F79wydzAZ6JE9efDmANcsxuMkMZh4y1227LrrZc1K2aikbuK755duYC3ScnpiqH5",
  "key11": "3UQsfvkwEocpdYFtoXRxGWYSM9PiRw4zjmkmcrZ3T1a8tSHyxADS6URir7Uhig4KqrKVBvm5S4ms3ms1CzeXBEQw",
  "key12": "2yM4pkSRj35aTSsmqQoth7YFnZ8sh81jpMFhjpsoBadWRpyAKqF1wQbsBicybTLh3uhnJLLwbExfXsB4yytPs4pk",
  "key13": "5ubJkn4P8aWESR9JjXWjXox7bKN2ZH3cvcZGvXDicqCh4zfny4op5EUtffHiqcwCGE8jtV2w51jwNspdWNCkp3Jw",
  "key14": "39TX8N69PD6XXEC3rM8unAKmjNsf28TqyUeKiwfCmCYEj7SZvmSDsmiafZPRFPzVYHkeVdapNQHoanNqsGB7LZHB",
  "key15": "5ENwtX9zUUikN52eb9JviceMkr1HSyMHrReYQZbo2QaRpzynry8WadprM7tYyz1sCqLCg2AgjHG3bxcwRQPN183y",
  "key16": "2e5sgVVd385cTdnvNMfvpC2kUnA3T4i1xq7CvuPzHt8tVYB197QF4drygLQhGAkFHPggq6nxnPWZKHuEkgUVSTqN",
  "key17": "ooE6tfUtzpZdRRXVJqHfhDnSUhSVb68BSL4isJcbHCPaf1wWraxRLdb857zn1Z2QsVeK86HEGyr4ZsgokzHzuxg",
  "key18": "28cDbgm7izLmFhSVKBKQ4zKjLGExHQyF7u3EwGdrrFqh9RjLu51rXMuyQqprmFuVUQmVE4nM7BzTk3nh2Gw8ctz9",
  "key19": "4Dr4qXvuEzQ6fZip4iq9uk28o9SvHWdCeT1dCyebW8hDK7dd3r3L1VSZknUw3HkQF3bU8pR2ZSHFba9GzNfzHSvN",
  "key20": "5MvTpKYAurQjDrU2xAMadtjfZAFY2UGV2eZCtNy2HEpZNaHpGMDX8RRXsrnZDYdPVSK1Z9dTJKNY2SioHLFbzQ4o",
  "key21": "2anKWRuEctjSzzmbqCiFrwKpqpUSt4XwU52VC6oZw5uvSrRnaUfuGnabVAFWvMDbiHeSMp28Dz7RyNZx4aRyqSo7",
  "key22": "5HmxkkBptdSBjDA8QU7wmCJfRVFZwCiNKiedrxsaB7uiLG1at3aBKVZcNTiDZh21EMKTGVhhd3GKa2RLyTMDtMp8",
  "key23": "4w3s6JVFuMHBjGeRLqzEDmR4uyEvFdBqsJ8pq4oGtY7GZ5UvfYDJwBdP7aF7xGJwATNoGuqjQYfWxg1DLYNoLPQw",
  "key24": "4GwTf9pmsDAAGFquh7hQJkWeRvr1PQ8StwFAAWm2h2LpMNAKcf8WVTpMSJUH6mTN81rxS7ZrP7Na5t4ziUsAkjrk",
  "key25": "4NFoYjd3bjSNxCrfxGf29hpGehYF89aRqB8ZDK738fviCdd5f4GExRBGorpkTaNuZP5a9KpdSriSjjMFjk7hokzx",
  "key26": "kxsyVgjuD9RyxdBDShRUFEexCBwh46p4cgxqNx8sckdjPzaxzVgHv3LouBohxBZkqQhmCq85H1H2ZXqgqLhZ4Ji",
  "key27": "4JTpkQWZo72NHwyuqKwQrZQ8EfVKX8Pi6CaekK43ajViRYisf4GazTiP9iWU1ribfMRXM1CxybcS4zYBiomJftVN",
  "key28": "5JqHEK2SGrtTjLyoPKcrkQyDsokmE47v51VDfkx5BDirXfQmU9MrvrWE7QpnfDLbiddC2VLTfqXz1znfGUUmjjb2",
  "key29": "31waus89oKdrRuBSCizwesojWtDbBUHUXFvLr3T2BHQSgGtRHfcF88qztrzQaWvMk3ywtqCNv3MjWM5bir4ppKFv",
  "key30": "3hmSFgZGYJJcGVcZckq3PVN4w1X7kcZZ8kD3fG2RciGPnGiLNjKq4h88v94nfMx67eyNWgoiq19aBTL1niSc26Qq",
  "key31": "4aFPeQgnqNLGsvTrdpDU8GxoCGG8gN2V2wbNttUxzdjPB6Dmew9UHdTf8JYg5JSx4CKi9wrQSNXUSkGxkuH8qCem",
  "key32": "23sgUbx61QQHgrusaHUeRRaMBSaXfc4ghJ2tLYFHYwJUBrXDhixvcx3eauxLu5s6Gn9uGNLZdknqZXbxHt26vChX",
  "key33": "59QEURZMZJMtWcTKwfnNCD5mHDcMHtAomKBjkBehygsFs57bKGXGJpVvwd8MPWA9crF8UuSRXp8VSDUJKRproSQP"
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
