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
    "62Mn88843rRsLJ6swSap4vTCvZ9mKJxL1GwHV2wi1WPABQc1dyAy9yTGyudgAsTvfYqH9UvAzy71H5AsS6wfpN9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MT8qiUnazCF5qhnoJUPTtboBrg4YGccF7UABDBXjVSnxBfqP7HVFeCk3daay2JiA7GFNwnqJE7N9GeccRE4qLax",
  "key1": "4TL96NyGuuGkohkGr96sqTEzF9ATLmhTPD8wo2obvCDeS8GzBvfgkVzyfNzKtVYPhLbDcWWUuF9WbjdUyLCVjHE3",
  "key2": "2LrG8vQkiNbPybNXjGRzZaFoUR1F2nxTP8ntYsxwn9M3eLqC1DjLny8xstEfjDfYTUiBhKKVHkcVkcVHyn8bS785",
  "key3": "55mvFaJsjTnDKKaa6uygRYJBtbTTTZYHmVGgHiUPFYaGqhWbWoois5y3Bzx7nijqj1Sc8tzRe9TtXKNLw33UgjU3",
  "key4": "4rtfryqzmGkznPDXPLejLfDZ7jYyXBPYGEDxVZbxY5H6mLdvkdSj6j3gv8AgEDe3KJGekyrBFLiYDuif8xriZyFd",
  "key5": "34y6kFGfLBBSSY37JgJGFHefaifTYLLZBnTtYrtnZ3VzNZ9RmfXoSy2kf5hsgbmiusJy7MmpdjNiL4XN8VzxSYYK",
  "key6": "39BXtciiMT79Bc3TrFEpwB8SCNQCsceVhApMD9ZjEvLwSWRfbHpsyV7Q7LyQHFHJkyMytmjCAEFEC2kkmEP9DQDo",
  "key7": "2bnVqFKspBA4APXK6L5enM8LB9XtkFMj8cfD2YUmxyejUftoCCwwXfmXXjoTpU75U2MByNdguZtPbWY6tZhNUfUv",
  "key8": "47eZtgeXFLX3d4XEBmYZhAnZfVGAyceRgfbpb9eoWZp3CkKrv2h6vkR4j1CJ8TT93Wa5mnMsC4MkLRzTkHgUoy2B",
  "key9": "5SzNrEm4vhKE2oy9k5keVmuSL9HpyPNJVsgEnp8uBR9uJ34Uang3ingbMjbngzaZDny2eCHYzMLF9Z8Jgh7Vq1sX",
  "key10": "67NaZm4jDtvpPKhHegj19en2PWJwJhEjK1kkmyYpithFXBYDUZqCsqsj2H96zxFtuG1g4xigvoJ9EJHoxGLrwuYt",
  "key11": "2YrsJUmi68uQEiotcemwyQF9wxdJKQ2VSB9diorja1aCstuU66CkfuBSBqUPiAcx2t1XEPrsKudem8TKdpBD2CvP",
  "key12": "4PReiaY58qE5KyyABRi9NWjeJgjYZhyFQSq5UXXtBeqfA2jkWLhcvoipBkL2UngtiEmAEPKE4oCYnJbskoLxqw1j",
  "key13": "3NtnZmm3EW1gsh4b8Jc8PcJVQz5vgfuhHQ65tH7ggVWcSEfupvxSdjV8PSdyCF5yGY4mcmYaxvEQiUzzn6yGN5bk",
  "key14": "5UUgnzzbT5GvDNQauPu7C5RnseoykBR7SwkjFjukutAsgyZYZW4GRGRHbeStjiFBBtfMHtkvJJdQc858F7gyPjVj",
  "key15": "5xMR5kXwetuzrHcLoKNvGxr8GwVv1A1uR7TyEVgb9x893jWsbHYZ37K2t76YVNCaNH6JzkRAqWaJE68zhNy1T3Ej",
  "key16": "5fDjY1vLzTFDpjz8uDwnyzmW8oXXrLqRSwrg55mzL4wAwe6wFc73JHsmHfLNKgkGC7uZtRhfs9ZpmgDtubiY1jg2",
  "key17": "Pg47BLD49FTRQmufFwk42D7qdn4S3YKE4XLsw5ok5ELFbnorMnktNhyydMSSK1NFftmwrzbvskpZ1i2TU7LLPer",
  "key18": "4CeHezLNVawza5wmTjPa6tx1DSPFpuHSap4A5oQzYE2UCnCU185dhmmBH8SRzHA5R3CG4PCZvqmRxHB7673qC1TJ",
  "key19": "3Rqe7f1oaPLWqLACuuYa1BztrzngQUM798HGTfiZAA459YZx6aeesN9nXwWjoKVMrUK1qUkcTifACGPfmFkVcURf",
  "key20": "2j8TBcDXb7uAy5ZfEshw8LKquE24hLBmPPR8bsr35eZkagww1EgeW9EsEm5v2Gb3qUfe1WynRPJGCWnxvah7EZKv",
  "key21": "5gjjuMkXEwmQ1UqXKAkmMAB3VMdYZiUuh26DJpWr4cyiCDknCnhEfpskKrMtYR71MGcT1dxiq6xqGQZM9UNzHUx",
  "key22": "2MMjwBcT6vSadq579zKSpYEqAtujxaF69bjZ15Vyg2z8bDrVcEDZHDnzgvtQdHaW8NHRhAHqheMe3EzSQUHbewxz",
  "key23": "5JxQ3NQTKygLManXDWrnfU2M78EojFjEfCBrBwvRy4XBqHmGA5CntPX6qZ3yKA19tU6DAFB168YYnfTUE1UvTVnt",
  "key24": "2815hBT56RQPBimnsZPziGDqPfTgAUtVr1NBLu5YEJL48DawUAW4NT3aV2bR7EbRwgXrMZmikvTcqmNS3eCZEwfA",
  "key25": "5mXEAV9gmvTegxc4834QmAFTMEz8URGJT5XQbMVf7VTF2tqUjNwVmri6gWDasiZ3ywRkHrHoZNUpxz6bD7oicbGV",
  "key26": "5idiR8Gp6zdgGsHAs9rvUBgyMDCYTyBYA2D1Jyi7KWpDaxFFTo4mAswPCYutfW9JjU8VJqhHpSPXYFSsUfyY6P7L",
  "key27": "4Ne6awwGvM1naqW6ksG7R5Qwvj6Cti9cRzCHhjdTLajHqZotEZ3c7BRGkoqBXnARvBtSMTUuZaGxVYX1spCazALU",
  "key28": "4A88VZNNAwCyRKjaqBmXd6W2W94V5AGmPrvZMfJb3gYrDouLXo8HeF2AZkqqU1Nw8b5Dwn2nsCCTBKefYcy5xVnB",
  "key29": "35VnJwFiNAKG3aEEi8MDc2rM6jnYwCKhNzDRqxPJx81ecWfskshrLoCdHKhUfawpHf4FPFX5PeN3GNqxpteXJhA8",
  "key30": "35Lqz6kNFPnMHYrDgmr3JT9agNaEEagx83ihNR8FmC5Cu1irffehkeg7LQFdZQTjhkpBe2ngXJ96PY6Dppr6mMhH"
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
