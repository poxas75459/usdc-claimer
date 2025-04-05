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
    "5mWk4JbXXYfEVFwVrVCFnKrjV7wdnnG6bnEUbAtCWyDG4paYzckhqvqtpL2QtXM113dN7y1PpSv3bq8px5c6ZQUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3icpwYucX3qXpEAbc1LbdvhFRV46HjjYLeeNbUKYVEPDQWa3JJvVFQwfxC9dTNVg1fKmCZq9PnfkUsm7yQASoFjw",
  "key1": "4TMp4r8aLDAbeWKhCTZZ9DwXYfzjxhFkGdxLeyki5Gb45txjQWhMUmBfKzzgtJyWXvEnf4yRCQRHMfbTHqBomaar",
  "key2": "3B7dcXBiqYEMV4KoYa8hsVjpZqvKYyVuuUveWR3NELzwFAoc7LP6N3SBM7z1AjoYfqSG1Y1PSzv8h2yp3qmjjjFc",
  "key3": "59yHDpuUHDqUYN4SuZDiBz6J18eWBuqALhSwCXnejJNWDxLgFdR1zNBuGHx942NQS7nbFM7PmXJtkbPNRQmYmep9",
  "key4": "2356p6gSGkDpMWj4ZRayz8REESPed4k8sbwbMyvTbtBBngUBRvQcArcSgMspWseEA6MnDyMnHBUQ9bT5zhCu5g8z",
  "key5": "5oMx244bGYq3m2ar287ciepUUQgCe9jzjmGPiSuSbHQoHkeAeUGuDnVLSdg5WNhKCXLRSrVS7shNyZjx1QGx8sZP",
  "key6": "5Z1t78UhmajDNntNZKGWu1Br7E7GVyB5hPXcVZxSJ59aTMLnXFSBiYPf9LZFX6fuY6CWxYh2SVMLbdBdz8GyZQ1J",
  "key7": "EPUkoVXa7DLp6XCxeCDwrd3vjB23vkAbDqEyhdEh6CEZV1783HM8iuNu3aLHEp3CEvoRGqqePhvgjvrzwemguos",
  "key8": "2AFSfxFwhHfV1f2BaJipNieY6c8oNUmTEU6UKc8JCVLioBYNuuu5niWw7cLUdeX3stbrTTZ3jH9T43ZodnWEC1eW",
  "key9": "2BQ3QWwsUmjcwwDpovJAmd158cwGs85dUx5LtH4qbkcSbSDmDsQdXBj28HqWB9rxhUiiW6FwmMpnvCawXg41fCe3",
  "key10": "3MKxZmx6h8Gf44RtdT7bFsFhaMNhfg9cgjDJe5rCmvL26WaEWWySkxD2UqZL5vrE14TGqtpvHTD5wJND7D5nN3xP",
  "key11": "3YqPeJBz7Mm1riXY7fKo64evAjscLJKRkYMS4qoHzkPtrKUWvFnZyfyakFuLmbhtNvAxH31vW6UCPBjGN8Y16k5X",
  "key12": "3tfqCTP3CHHx28JadCBjFMMc3hSTu8cprZhVkRR4gWMoLx95XfWUiXKFEoGRawkjAKNCGaJ2YApD32TAmr4UrfMH",
  "key13": "5Cqe8dgiQM8jn1ECfCyZPkxVqv3Zbrs5A885QQYpstV7C9PoGsDKQR2D7uzeNP69ZuK9avkTHraLZR2uKkBsJoVR",
  "key14": "C3KTf8wjw4dH19n31ikZMmiMR9yF8RjKhefPRYxb4PcJvoVGV5cewD3RPqrFKwF1BbiSs7vs8CmvL1DkvGzxoxz",
  "key15": "2EPL4n8Zy7zNqVy3wES7SVqSA2qdxmmsDaiKWVubHYCDC6NfxEqQGi731YheAyPrGji96dn97S6Td5PbKQQTq3tT",
  "key16": "3jNk6h9LKbWMTUjHYr8NfwfXC2PottMM1JLNP47W1ZFA8ASX8Kxh9sU2s7HNiFwL5gn1fqZJewsLnwb1t9KZuUuV",
  "key17": "tBe4QmeWXbLhZM4KK2r5yy9X8pg4sFWATUw2rdWYQqMQVxUc7HZv1ZcqSqwJQaGzFocivSMCU2AGwAjXRiRAtE9",
  "key18": "2SXdZjX2dhWBDYe4NQqQDh24CkNPkchrwdc3T38gDKQWYTvdc1AroMxw82GZRCEfq7AjjjqUQSNXe2qHZ9kAdRoA",
  "key19": "2HfxYDnrL4b7TzTqR9tCyuGbjJWWCfF3QwYjSLX571BLBw7iJ1SWkLmQKise43VHdaAhRr4E3n75v66oUgZTqXpp",
  "key20": "4Zn7kW3uCiTrSpyi2YdR21599YsL2W7UfVypfBw26ZKMcHBXaUyudw9q7YBmvQt2amKjixpjqvvYA3Y3tVqcigcf",
  "key21": "3TuBtAz7ty2zXYrxHH79npDP9Huo7SgHrNAfFBqK3jaUUq9Tn27w4PJJE39FoGUAQid9pUg4EUKXpiNfv8F5aQSV",
  "key22": "5a415PehbojDUG4fBqhk7Gy5yBUh4HKk5DdfzTeB36Ddzru5nR3PWcq63gdFwPU6DuBQr8MzkD9MqxFBGXwECyCg",
  "key23": "23bqso6X8h8CXww8jkdRPaxTgEG7LcAnjuLduqAdJ7MqBVU7Ygrxifd6bGKsL2LZ9Vnf2KpJGLkmDjhmur5FCAXL",
  "key24": "eTNgx9mJDerAaxA94rJm92xcKBYgBWC1N6ndHJoKPaCUKcgg3dCQ6mXnuzQgVMnGAPZkhZeakPT5cxc9Ba8Gh74",
  "key25": "2DnhhwS5JE8ofLhgNQgGm2DJ1wovbheoK3wcDVdipUoq2F72bVM2fGKhGvMSi2vuNtU7NQ5nUyPSrGdPgULSGny1",
  "key26": "25KBwk8CJcFtHa49DSr6vQcnkrg3oDs5hefwfR36copDaqV27C8WcBmi1Tsiuv3Lw7tLfbJG3KeLpHH6AbWFkApR",
  "key27": "65KHshaxg29DDBZxyv5UiG9STAnutpuRU7kqMVwbJhjqo6tuNjrB6MHcNHk9nZeNHZkKUYeCwtPc6vaBRCkLhpnm",
  "key28": "sGA3wwqnW1YTcN8on9KE1URvWAQE9DviCAqEnCXFCTHRj8i9TMDwibYpbisFykS9n6PRxCpiEEp2jWz9NAYUmK3",
  "key29": "5kEk8qr5KdMk7s2nykNsbPEn2epazaFKNpDB2cT6Quy29ANFBGCoyis8reQvutLApQ1bxvr2Y4EbziB7tfNsS1AV",
  "key30": "4RG9aLmdHiGJJ3pYBow2wfoSfvPKBDu8ct3Sj74AfigVghmvbcbkaes1VPsRzLs5EtZmdcFqYHUenU3x3UbTrPso",
  "key31": "67bn71NMhcDn6DJD4ASkaKaqwseyEumgJnjrhnze67n4dekCkrRDGbQB1CmP6RFZBpX7MNTAxTBMSufePPLHva9t"
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
