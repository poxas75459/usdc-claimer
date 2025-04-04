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
    "2SDevh2nuTSJdYsHRCzBem1VnUaZ1z7n76ZXB4UwiXD21zXvfjtabob19p1mzhqK4rBpRe8X8xYAJeyd4EA1hUts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nbwQf5HRPCwgpsbHsqJs9DPtMukFaUckY1HGvrdFM9iRZRnkfVpY1U3DZCdbQ8hZGAEaqmc4enVbxH9Cd41dCQe",
  "key1": "4DUs1GvR3DJU46oK5bA4HTbPNmoDNW74LCojLBc2bCCUJkkwRyhcsDoQiMUR7m5417fdfwzQcehzRBNbdqqrjwWo",
  "key2": "4UKUiv4bQi6UukgLP8VoFzuskp9NnXW53wazaybSBf53VuoX5TUtXgk1MoXei13UPPGGx3fT8SHndSdFLCMnuhM3",
  "key3": "2opg95mycf5cN5GjsEAeZ57G6wPxjEqgsxAhK2NHFNZgack6JXVui138WBzuUx6W2pGK6SuU1JD9uttcXNQ4Hbuo",
  "key4": "24HyUGgsTL6aiEd3F84AZKuwUG6neC6LABPj9db3ooZGNK8Y5Qgpz8QBB8RuYLJBBJVTvCr5fBvBPg9zsPS78nA1",
  "key5": "5K3hbRuBgbCQmeTe3ckZCD1LpD5YPWbucof2PGWB8oo7TTjVHWag5gkbg3DuGf3pbb94PAGEAu6ez7eY8nds14Hs",
  "key6": "4DzGbNsTBgMDyugJ624GVZzqXow3W1wqw7gqR4CZwKmTwFrTReKZZ4jTiDGfGqg2N2BPPdgcmvur1DFZ1Gs1RqtR",
  "key7": "fcGWydyMCre1GsQ2u7HytMG1MZDcdyCyijdjK9HZBiAVHzeKzESK9tpSRz9DAieG8TA1wsiZuYWhjp62SkWmLzj",
  "key8": "5K8iH7hwbF9neAzfeHM1t8xnxWXXoQ9aVtxkNDXRyN4FhSZDNyEeWLontQqBkJT91sffhiBzoNj41GsJHCaSb2j2",
  "key9": "2K7jo7nHqR6UyQsZPU6yXxsCqbiFjSreYitLaiAg5m5znk93EF9LhhGcmP8kkcBGckBsi15qxY6xcbMd3pTku1pB",
  "key10": "16jQsgECfAF14JiVZajoYZCqdm1cez7zCMBKEAGMBFff88gseVhBjhiEBZxhNo3e2b3CxM8AkS345JR2LupynDi",
  "key11": "5mp1vP9eCtM4RcFhgyp25rBRTme6RWYc6u9wGJ8UNc5rCKeRRCT3a54iikCVC48bujLkvGK3HkDdsAq5SEXWYrcP",
  "key12": "uWN2KwUpViTFN7WUYfpdwJfWTafNxs3zmmPjpmSHNaSbxnANtESTEcxRQQxnHC3dV7F6w24adt5vgWZ4NS8jz8T",
  "key13": "4WN3Pe5vngnKyjkgfhkSqS4KnQ1hyGtBLX5aZPqcvGdbg5PWGNBgzDYDbBwY3T5kFhrF8qc6Pumn5Zcpip7bW82q",
  "key14": "471dc7vrfWji7GjUh6PCofu34ec8muTkxrj4HArpu3wmnkDYAhQ62MSzuTMD7wZpUAgtLMUTPSsKFPejiL39XSsc",
  "key15": "5bdywAY2mz8Vi1TmToyKPJKUAipj3i59cUQpMX5ramGb2LwH635u1WTixAAunNtfGQJ9WUZ2M429RihisuLVcnJ8",
  "key16": "5VyFMVSj4G1A2gHL3JD4E1gqiQfaWgzcmpQhv2STq19rcWTvujbJH5FLq23T7smZZDQZhjNXhY1auyuDoZr55feG",
  "key17": "4JojKaYgjU5k3R4B337MJuZm6FwXPW52jBa8WBQrhhTX56F7NjCpFncCHRUGsxaPyHaQrAdTCXZcpmTuPDXjX5V8",
  "key18": "268H3rREDFfsa31hyNmi5179zCQvRayMpfHqyX1FhE5tVm1KXNTUe76g7BxQeV5EVMGKFKwEJeDeffjSrX4fiJhi",
  "key19": "DAD2kD8wRQGurcTWi1X29HQRafhZjAfnbhpWDurWVfZnwjuLdMcJH8SgSPyvPNErXAnUdjBXLPtRwA9kVCh7CZM",
  "key20": "2VnT1EQMF8rH1ebb8vSZKowvdPbbDNMZ1AqXM11TmgDfzjwhnzQjsaeHVQyCW14U2btvZ9u2biF2mEVVbAPwh7z2",
  "key21": "2ShWSdZaxqKqxVDeg8xvFgLe7CmxkhU4KPEG7CLnwaKW2ghAse3egJwgrsSAdhRu9Sy4i6ExoyrxqhB3euBFPFSz",
  "key22": "2JEorexjz5ymWoNeJbN7MVspzVKQP4oK4tNe9zbqWkj2EABns1aS7N8KiJBXW6W48NGWU3qp25fxHNU6vUvY6jMX",
  "key23": "33KknsqkZmYjWyoD9Q8evq3dC4hBw1WnGutzNimnEXTastj2N7etekqzhWFaf58J4U6e4p5LFxWctCmwCJYPVNBb",
  "key24": "Kg6ZAQSHLCeYqjPc2pcRfy6JVSyQhMCp6mMmESo1XirFcjuoz1i2Z321MQjAbCr31ihkPEpVYFMHynTSsMpoc13",
  "key25": "22RgzjJBDDE9LApEqEMNJWC411oZK3WhP6txyTQbpKM1NyQJGQaQWHZ641znjSnh2HVG761EEWdyBijLaPLryj5x",
  "key26": "4niLcXu3osrzGTN1nQWt6CDizN6bWPyuGSh3QfVHi22kfjBak2GX25PnR9UX77UsxVA7eDas3Fo1r7rQSPwT5QZw",
  "key27": "45VEbSowuE7d3oDZmnv7iPfwpEu9u3ijDzz7yc9TpvVrBLMJYFD7JT5QMqZ7Fs7vr5tPxJ1G5T2KqRimTVJCCFor",
  "key28": "2bzeS4YdAjWnwD7Fkdpf9KNQyysYzVMSBanGbiMBNdkapSbpdxtqH2guF6eHfwrTGdbJHy1XFFdQ7Au4Sfs7arwM",
  "key29": "uGpw1254w18VCbNF4GdHqdfdEocnSXgAmEqXQ8QspxpVxroo6Hq3dCAJmyTRpNc4Xc77etdURiQkdqzBarMBD9e",
  "key30": "t8pVNxu1R3iR9AneVZ5c53ApgvV2Fz9obF1nNtkyikN7emmVSoTjHqtzH4fitJUmRqVLzvdNMq61RV8ZpuGGW7P",
  "key31": "66VME2fcUXkSot4WT5XMiY4Supfnhx2rsDY92611VwP2PTs8FLKHLB8mupYjuJPo2cPBsUzyELbnRn9U58VQfiGM",
  "key32": "5WgATgeNzU9zHx1S8iuadnpyok44jG47Uihs3XKCg1LcL259CFbgvuH5Z14EGs1TtWmuxHSZncsKaFdjo6n4E8bu",
  "key33": "5X3eM3xXVHJAV2F7UcBP6ZwaS9rKXy35r7vSZ6KhdUcpVqmU9YqoTBA7u3bPGonQg3QKMBkYgztMbN9nUeELR9m",
  "key34": "72D3q243gaRpp3QmTr2Lqe6sV4njMT3UpMpbdrjrAYvJRmwCGmzwuSerXBxpzfd5G2MoMWcoARxX8oMy6NWT8qF",
  "key35": "2LSpLVBX4PgHKbTsUfHVDmJPP7aHuyZ8RyLbsqE6SeH72NMabK6cD6kuL7dPGNXivEXUbBm88kRsGHdaJx8zuhfi",
  "key36": "HAYUpff8o9EQN1TNsTAw6U4jXyRvcBRWKY5dyxBuUAWwUEY7887H4W93FQnQQfQrxjxiGSm4qKoKMKBBtUs3KoC",
  "key37": "2SghyVvykjDVgmircEMsZpLuEcqHpnd5WuRw7NnSHMasf4nGd8cCnzMD4osy9V2HpuLnyELVSDBc2VfQP61gAeuH",
  "key38": "3HqqEPLwAxgYj358QSrZNn2t8n5nM2AQsNquPRTRwaaP6C6py1nxiPc7p8ecqjh1rqkeWS7rh65uwjHoiW2h3fpk",
  "key39": "5ieZm5b6K9CTNsNS1h9tPJWf9cwv9zv1izDfCR5fjy17X9a7YpnsKAG15tK9NDShRdMTF5hDfkvLWKrxS81RPqt5",
  "key40": "2cufNJ4zCknJtnKHECCddU1A9XBB6DyRjMxUhirChLaS4kTVnqA3QA6HbgwD44U9Wr2AKmTnUgFhX7ZwZLKPJd6S",
  "key41": "Bg3gsmcZtFMpuLMzV9qJxZsXiiP6t3WLFMXbkfCW5YAi5ubzactpdWfVCTZnmLGi5khEMPq1LBH12bcFeZ9s8wu"
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
