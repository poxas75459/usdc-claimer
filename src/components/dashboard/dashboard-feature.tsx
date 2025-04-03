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
    "3W23N8c4LrkcxkkKWMSGdKJabKq3uqhgQ5cK8KfjFF141HFzVcwAuhuGfjJXMbVzcWzMXqR2qjVjehKtYzSgH9g1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NxkKW75he1q89fwZoENTmoNLy1LfdjJvuXRCt7nCdDPF7WiJxkvqtoqhEkfb9LPspn7GnLPaA1YtBP81qyghANj",
  "key1": "5PUMacyWVTBkLap3PLqxZWtYWgVtAGaeTiRTgicCksVRrrxeLXtL5CFcgcYZXDCugM2Pe5PZ2CoPzkRJcTvmMjGK",
  "key2": "2KNoA4g3KBXSeb284KYTtmg7pe8LVMEDJaeUmfVs933tTjN5vcRxaEveg62D743VYMhoBq2bjKqUNn6TKriNA2jR",
  "key3": "37USfsq3X8ZeswEwAPWhfXTE4cRjuB9wQaUPUbdgSbmpeeNRBsShttV23rtG6F9Hk7hXAXKgEyPFGdUDRZsmhpP1",
  "key4": "sBvroGTsAebCd5LWmuPALEiD44jPBseKJWowgcFU7f9yddU3x8vFZy8gMjEafDv2mpE2Mnvtw4GxCKrwjRfaqzv",
  "key5": "MzdZMnRA56pwF5gaajzBidcgzKq6a86ShMYMjz7Qsyc7q9D5jTXSjjpqz9TwuYX6txUg4u6RExaLXa2fSRbWDAt",
  "key6": "5jLbAnv2ket8Sg1bLFtwrvPVNy77m3oEV441KjipDMeTxL2wvate7kTPeGSjrtRZBaCMawQbD8niVs23qAab3x3n",
  "key7": "22sgxLgy3RbVvHYUfWyQETQNMySCwFzJSwyrK5PN1FzRrFidG6Fq1MAewhP31WU9zuiusGNLerDkQJ6cR7JaGyum",
  "key8": "5K62RKinudAi2titafU6v6rerz69kz19YpeV7eMRet4goJHHPqmojYMoovN4vwVWyH14kpTnF6dtXR12QX7cEbLf",
  "key9": "4qnAMwEvsq2HegM3aYpkJaFZwscBdrCLbF75nYMPgb73uwM6PpMds6M1n4LfFog6n5PWS7uUWXgcUnxYnrgeTQZe",
  "key10": "55s2v7J6WDgKdRehkgUUSkUpwmCDCrKJkH6LNgwbgAqC4HjSFvvDjps5G68p8yW23jdZJ4DmozRDvmyRphYxTJtu",
  "key11": "2wo6UemTjgcgDQFrG85LrWbTP41HWgC2QNYUxBeeJpC2fQghbS4q2MLCc1Dzy57Xm6JW2CV4ZE2PQcZPV3n7PARp",
  "key12": "3H42254X3ZcpbkM6TThqU9Tb2w2QwS2hqoSSzzufr2aoyjaCkuZukHpySTEV5891XMduPMKfCWwb7E3ummo6Zb42",
  "key13": "5VFCUmWQvbUAbPBcQiWqiRyETL5kFpfsNBae1cC22v3iqvSqG3e9QGDKijrxxZLidbnqy8jtxpDqSq1XgSYdtKBC",
  "key14": "2nhP184QdRX2dZT3ngvLv5dQgs1LxK1iz6Y2UX6Jg4q3zJ6Zop2zCSoPDm86jvmWb52iQ1rxnv5wo5ndetEyXxqQ",
  "key15": "3vYdZ5gDNSUFzsotd7sA9P3BJ4cvTRRp5dKLzy9q3BdjdVmLbwzRh8Ke4BmrxSuKdta6QrGJ9DzpgZfpr9wY2oN",
  "key16": "5zQd7SzKPpXkwLGJ71PtAfWHbAvuM4aa2MnaMGWbXX12kJZuBs2Tghke5Js1PDQ4V1YL29ijWSaFF1qTYvfS4n7E",
  "key17": "36k6PPaJr4dyYkSc9DrZAxaw5S4NezjTPWzqZW39TrWBm2VcRBpEHM5sEvkbYts2LWgSCFhfxWvsTWaoxXtRaFqS",
  "key18": "5KS2CWz85MixVxqHTtqz6HK7aYkKyDDJCTpPxBdrzyW2jGN3uducBfh5ww1xCRomzLwZupR6AHLdpjkVVB3X9Lje",
  "key19": "4PbKqqyk9hoy3HbCCYPpHjhkUTAL25gPSwzGsvhXXvHKZRGi8D9qwVmYATvsxvKsNWtHESWNKuj2ue6KwBmoe1vQ",
  "key20": "5Efaq4ypfDT8bfCGaLtfN2QbwHstNuSrQELw5sznK6VtYBC2Gu8PoXhcw6q7YauooF3jN3ntU69UF36Zd7xKyaTr",
  "key21": "5icdqVEVvYL11sKb7vdyW8vTvw4tte6UUmmEf3wg5EG4oGZjQGgz2UoAvCPikumCvRbPFEWsvCgTem1AQGCJ5c2H",
  "key22": "takNm7xhWfFA6Tzcz83m6ychTiegpqvAU1VU46kT1Vj87rTUKDzxXCg3iU9mCrv8TvbMyPU9PBs3bCp6xbe4hJC",
  "key23": "2qgrVRhnrL7HV7NAZHEwHnUeYBoe2s43NK3nKhmqv8AdKFwdLbxbuPZd8aCWa7hv67g7sEXbx3ppHgkqHgdLd9it",
  "key24": "5PfCtZgjRk1XZWn1kPsucNA174ozU2C8BAfbhLmwna8tMYp89PPrNqgFixxwvg49VcdqN8YBWiYFKNT14vnKmtDh",
  "key25": "3GuU8K8Bta4hmQJTpgqftPD4z1wF24k8VgJXEH2jSrqpNUpA1vtce7JJHQ3EEM18jowbA4SienyNUT3JBzZeddyj",
  "key26": "5ipafXkN6iZAzhTc1gKgErUZwAswhZPR7JCFp8N3C2fmSc6puRLHog96EaSTNMaUcq8sXSKQp8wXdaGfooTBawKW",
  "key27": "5JUfDVyeLBEBpB87Eftc7Fg1js6adeXMzQnbsiJHFEQqj1PZqXhprM2HRkwCQLkLrECBPLiBSdwXL8RsnSdJN81p",
  "key28": "4XwyNBudHNU7RmQyRyJjdteo1xd3RcU7QDzxdKPyd86jk8qrgC5BLKeBCfmWBq8traAmiXUhn1gUD46fY3jrSmUF",
  "key29": "4wP9dWJaihA5FKfStCjkGTRFKVMdtPa1MF87J9gx275eCka4TqPqLQ6UF6HMTeo7712udqaputMizrf4hQe9VMap",
  "key30": "5EnYvmYv1WHp7EaQ7jHFupCJ4iREFj3BPedkfEHh7xBv8CURFYvnes9q6fP1jCr8bia82P9y6nwcpejhdr4E3VZs"
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
