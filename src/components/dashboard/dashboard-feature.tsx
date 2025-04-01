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
    "4aeC89iLQKw6bPEJvCFb5LrYm7pYvqvMW1ofXxS338VTUsqwjPgsZHch3PGhcQHfxTEo8N1P1Qp1vM86PMHHe5ZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MoQyHjvKmQe8qJNSp7QxxurW5uAvfVFdWkvcCqPGJG6pv5QgbKxQrPmvuxSgvTvvt9HoFRnpoXZ51vDwBA6wRk8",
  "key1": "64NSvosz3QorTjbNBZqNA3ReUe3q7km3UWP89gGVKjDqGcRQEFcKTnG1xh43PKdS1YdJXeMeNhCLHk4Vhy7eEgoq",
  "key2": "iHy7gtRqn9Z1kouwsYp6DtfhALzgHZJkj2crsAwLhsUkMrCaDnaL1PkH9agMi6FtvkobFFHb5VyM2Tmc5LcRKkc",
  "key3": "3BkNZiHnCcp5AH629fMCdajxwYXasXxfWETAJLgParjCAiY6vez9sHxJKDvTxUSzZTyM7yr3w7fJ9TAfiH5H7fDK",
  "key4": "5XYqUasKkLufFcN4U6bDwiobJbXWcPXWtSjWcZvVCWiNNqQQyv1Pp1bfK144Ddatw2SHLX13j9L51WHBRFfApfzF",
  "key5": "4tU5EBJ9CdrJbPR2PBx59cxf4H1jx8AebLEkWRHt3NmaMfxWfxGqp2RUBFdsrU2p6pJztKEs8P74YDaJFrcnVCWV",
  "key6": "3e54ZuXiJuQ7mT6DoXUPeaQZsZVNSdrTPLwXtBvNsf7U4s9W5TQndL1eg84EJ7ZHWhpV7JRDCtod7SEUpbdMphz6",
  "key7": "3NXptp8UFsWBrTmZ3eAcATyRyy9svZkmLqhBQgSw9KxYNruzBNqb7VgbGBihFTseP8sZbcZYvgFHodAJ5K558qPy",
  "key8": "5Tp9hcbXBX2tfgLvqzeWkB8vjXT88vqPaQv1sBwoPFPexKxbikrDJoHDwHv8T1Dze7EbEWCPXG6qNB23SsD6PAca",
  "key9": "5X2NufnLtxpe2xrkZXakhURF7THMPedA3ZAQWr5sSTeWKnuyWPAs73ZAFwNQoiFHhEaCJKnEHV6evuhQq1eoN1ZF",
  "key10": "2VA29gXw6mRd8LKM3MTDpbukkfPxfpHBvNys5nRGEmqWMvuyNbUdKJaMVhqqWDEwD6ed3pG6FTU2da4NCd3Hzavj",
  "key11": "2koSv5UTvX3orbyeSFPDvN3RxH1wDV5N9bfrMGLUXR3vVjRpgU6qM6TbyqytsrHunL7vbVM6y2HXzK5uWC31oAWy",
  "key12": "3XzUX8mrBUmHDLE5CwUHe4H19CBPnz7E9xudNxwXFp4iG5VcMw38B3Zg2n48MBuGG9cDAd2STTq3Cw3kn85sZ7q8",
  "key13": "3G7FuYEbdC4ZWaNhJsk3JtjoPeVKMjZfgJgtEXRjf6EdAi2B64Xm2JBE9YVirHEFgbbjVeMgqfej1vi9TgXg1zb",
  "key14": "5JomaHbkptRKWnP28xq1HUtJ71YezLvx1P6tJttGiE2ghrinYFV3jpiGxkRn1iK65Rxoqu8XvXx3su5nAEMXmUV5",
  "key15": "4XEDisTQdnijjGvBigUgrDK1rdi2uzmuwtShFdtJfvECbsjFjBNZgdtFWuLpmiDtQTcBt6CKFPePkXkwpx383eDc",
  "key16": "3XXhAY7Kdgu4dZ2FgWKCjLU9z2Ar97btAPHeznqmZMtQoaorNZtFd38gNzThUSJwYLBs7GqZXCaFbacnxCDRt86X",
  "key17": "2vUqbM2ctsEL7P6L8yRA3wWp4h87gimE2tdTqqzdpnty87iPxfDH2Neqq5fop9ySe1X7gjodEnaC2H3ounty8D1x",
  "key18": "FaBiBBoHMN3L8m3egkBauR3vwtGzZALydubaCAREWH4LMK4WyHexwMKdn3tMvgAimKCNfJ36j5FyFtpZNWVkcnR",
  "key19": "5Q2L1e2kXoTMbzcrPzieUD4SGm1RhhHyYBVNkmdH2CASPsRAx3y74z6bpUugRpNEgoKvieLUKPDwLL3pSC1YcSw5",
  "key20": "2iN6N7K6tbDw6gLmai96n5nZtKBds1a4uqHxZYUgbfa4AZTM4U5REkm29tYUQGq5RTAUk4SZBTMyAbBU8k55oCyP",
  "key21": "4AwRZarXsv4DwMAc6WoqQXXZVxBsegRo7T9RV5HaxQP3ENhgVyukcYZ7Cib3cmKMEtqodS4Q8yXCnYjRhR3rVPBA",
  "key22": "4UYu5xLFjAj7oPLsdGSwozKq6e51mGb76t6YnWyGh6ZKUzZQGf2STAvTQHVEuh2YM6ndhG6dMe7roL9LsREvCiuj",
  "key23": "3yHYrRrMNUZNLJ7QsyyhKZjhEwZrcyeu4y1D47zK2KKmwpQv5XgmXoBp3PvPtVbBKEokdMGX4a1cwpnFgTpNNNmF",
  "key24": "36cMQpnPG3LJRfnT6s6bZvvPc13yQJ2PGH5dq7cBUB6GUuDdrDtYe2U4qA9eawbTJFdq3RkawQcGQVDJXydeuEtE",
  "key25": "2k5cqXU2w2jkjL53A9UCFe9gG2ZGAXEXs7HADjf9WGMXKQ7j2TadJjx58axPTqLPhndWoEkY5gRsi3mhXPBzRMMo",
  "key26": "2GacxSqCpQQBKexyWg9ETe8j91ei7ZDeqsDvFVW5uQCi7uKpDVHSGDDX1JcVgwQj3WyH7RKCSzA2w6cdhhZTHEzF",
  "key27": "3PfZapnkibCyHk4GyfTr1gyder5WkWLyAvtLWN2Uee43R6RByqWu4h3qf3xd83HAKpyahpjp6RcNStNdmHKMf9h5",
  "key28": "mkaNi4SY2NsjqZqbXBUkWMH6bYsHufXghbAVu8UhTnWgUnbB75ECr26YFUnDqzqDY5k62uUUAAPJTjhRfPPMKCz",
  "key29": "3sAVYXfmBxkTp7YGWdEECZwn52WVqmswLgX8zSyBEFxbSGnGVzzzmfQYP1tjyUChz445nZs2MD24g7PBR8Z2TZJT",
  "key30": "3Sas3aWddpZJdT5MwWXXcGAYt9we2cjgb47hXuaS9woXGRauGu4Y4n8kVGUkFUUMuzcLbhCqxLFYHUkXeT45DaH4",
  "key31": "4Auxbx1UfpdewkPpdvCCXsUyoQ6k4792zLxx8CiWjACQ8Lh63MgKfmihWadHEuEVrZjCnodLCvH1dy1vFKoaFJxj",
  "key32": "2RVMTyKH81GvBFLbJyWvsG7RvGPqNmFeCWPyuLV92hxJDwFertjzDZFby49kSKBM21JBQbDTBBZEVv7XTx6Lkhg1",
  "key33": "2hFe115HzozdrhBhQSSYCF57XC1sLZ4J9AtUFAXoVGYGK2zsRr2YUTdBeXR514nVqbYNAzhHCKmf76sAdvheaT1w",
  "key34": "4gtDm73pmHeuSPyorcxGB19cAB4majawMCdkqPVRi79MNcMYuADh7gRaK9a93BoAQDMJvSZq2TsSPX4sQKxLTqNz",
  "key35": "6SrosgLrk6gVBuVoaRMNjk4mTcgCEGZtr5ZqCg1AeguZNfCSLYVkXqzbmi97F7kSfWVkTRwxyBFwKswFVenosWi",
  "key36": "2ngDu2VwwF9ABT31uQ7ddZnxUiZeTpRnT3oYCHJG8tfXaqNNXH5cGDNd5CWjgfwqD9j7LnJ1kRn5MAbyaxd4VdPW",
  "key37": "eAAHpNXTmsYbEGEN3WjS3Ea2ZQ8ERE4DQTZ5hbTkrtgD2ed54CsfzmhQDnfUrmToHyQFJmRp6oBKB3wHmaY2AfW",
  "key38": "3vA2Ph9saEfswUFZfMDTMWbgcwiRU1k4JccpuT5fjkE1jmBNfbeLyjqiFWvr92NTnPqChmMtZMf7pekZiYvokso8",
  "key39": "4wufXCUu9ELWPXMB56cWvrFyb6xn1QKYWsr6cEPY1QPvnvuRQvNYyehifSL3F5rLG94tw77Je4cvVYdgWqdLckox",
  "key40": "4k7mKpvZpyJ3u5XtXtpLKVCmkPnbQC96pY4HpGgbehRjBKPXZEuzr1HqiFo872vc2RKmCmYuUJQFaNTNshMgyfjH",
  "key41": "5Z6qTiVKwXxYDNYLwAsQN69jHo8xafBWd8S5dTKtD79V8CWp5YvPiwva3ud5UtJn6M7K8JjKNSFak2kTrssztmuT",
  "key42": "3HK1Bgm4dMmZ62WAEfeG4S983Fb25NcQ3aLhvByPXhBfFV6J1uB2eWkouj9kDCPGiN9uwNngqPia4Cc8ovShywKh",
  "key43": "4Nq7YLhWifFK2riX8APrAooeVSMK2SGJ7NgHLE7gD2DQc6CH7hweeirik4Vz6FuPPNG68uW3meqTvbUDGWU67v6s",
  "key44": "3mjSpDaqwn5wRowCsfLNfL5Q2Npssetns7nQABMjKLuVfZLLRY9CVTU9rvBfXRhth8yHoiF6r736VyyuTVWduYxR",
  "key45": "5wNA5gjnrFKnQAfbE9TPdJF6P51yvFw3qndPADZ9snYuAK4ReMdDTsBpJRRLVoEBB4kAVnz1Lwce6t1W9rwM8hjh",
  "key46": "5Bjchh5Qf7vnNuaLDpcUXtwfiLn8tP3bYQemvBSPwpLCRqQB3qpxhEBwScBKQ7cLNgj1sQxuWLFsTJS91hwXXjsu"
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
