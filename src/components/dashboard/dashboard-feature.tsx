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
    "58znooGGKKvNthVR4y1bUySqNpTcBACRPDCWWgyiGrUb8WoL3qt8oew8cJfVYr2A6jeyJQDJTEeNhBWwqDt2oMHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wLgwtBCzz5q12NAQX8XEK3BpvFm2mo42XJnmnvG3eKCR6dpDmS5x5ricWRsHr74gjsc9beqPJL3hfJ7UAzTcd91",
  "key1": "BLUJhQbdZDCeCoWiCxrhBCRJdY3MrPLQUWfBmHb3pigJen7XTyTvmpwT2qx2rQ3bsayQcQNJaGd9JrBbvcW4bSD",
  "key2": "pn6J6yMfh9XSDMDp1Spue9gReKZ4SJnbr83H7aXse3BsdmiXWLa3Do7ycE23iQjeJrct417oZkd5e78Wx8UooaV",
  "key3": "89xU6o27i6kygGKkhQNN38qE1x4HvNVz78RWQDMozWvrraQyYcy1SUtPJpNJmg1RimoDKMwZv8npw6D2sxYHAyh",
  "key4": "5suuqKnvner9ixrLBD7VVnqhawpcp4LrjMvc288Ghqn5FsaCRHVHoUJfwkTPXKKaJYCP7eNYwpK9fWpf8Ygrtp9i",
  "key5": "4iBhGaAvScMsd81qXD94cEe9MLr9W1F3YEnmJ68ofGzqBKTFdb2k4myWLe3s7xLyBxe5v5hcYxzpcfcsapeaqVw8",
  "key6": "3CLXKqPYZMJeurTu8EKCfRRkoHZ2Z23aSz7BjQHuJJxSrd7HfXe2a9wp6WE73rBbjW5py8TXG6KMoUWRhQe7mgXU",
  "key7": "3u7ZucY3QZT3XFspEEiXx3eKmSR1hKQrVLzZrFJMoSsDr3AxrKJeahkS2oHiF6UETv7E786ocuy2hX2kinX6nFyd",
  "key8": "33DMJVajZY93pAFt7SfUD3Z3KBX4phQvU2Q9TajhAy6W1qsux8zcYYvJXt2UhLdVTMJPw5hq2mfwEoFFjVJyuByz",
  "key9": "4KEK76TLzAihkUn4byXrGLj7VRc58yFY1T5zpyzdVCtyPcoa4mP9mG3mbDa58ehgKWe6NnyDXPjhNY4gyn4tUBqi",
  "key10": "5xmi9QsVPmgGztDddugDqcJUjxZ9zukZAUrQSXQWpfEU6mFvJyRtLUc4dYGnkgwMbfrqHYYUqwoGCD3Dngkgc8RM",
  "key11": "2cPVc3SbKZWeDeoydHhnkpCNmiwszZTENbQrrhcELPsWWHntcZ4ipXoS8UPQF3sSiHTeYUQZLpAriNSaxJKpkwPM",
  "key12": "3bKvQeRD82feeiJWDbLH51LJY39phSBgQLFaCCBL9hVtPptvwGFbB9zQbRrURvghNP1XejWSWYoTZrvPcoDoNDiW",
  "key13": "5foMfGnoWLMGNtGX2WTAAa2RpYJPEAk9vuhAx8fbsW3Wt2Ej2ayLBxhNyuavXDfKZJGtGMTDj8BnrvLH6x45Cdeo",
  "key14": "4PbbeBmfREJHmZqxWzmT1srnT4E6zkKyHVxFSR8zMjZDj2GE89sAEq2qzHQfHXGNPALfLpkdXvtpqauNYmLsMJKT",
  "key15": "4X2RVSmvugLdrQtE2RNMRBLz23upEKTGowX6nr2reRFrG1Lzh5hRwhv4EX7cebzMuL4Cp4Lfzh8sRQrMpkp4Tzjg",
  "key16": "2ZCTVBZta4RGk17HToyvSPZQwRosjRX1eSPZjNTgV8cu34Xkd29yPJg57DqbDLYLDdAmtNrSEfHM91i2YownSSqZ",
  "key17": "7WuhBbXBuBZHT9s8Ki9wsR446uLaj2N3nDjNquyZCZTA9auP8Ct9ZFQv4HbSJVM4ceKhJAPYzHThJNn7sxgCeTc",
  "key18": "3Yemi27UceuVCwe6f8zuWA9zmgzvMJ61NR5gwSZbGZBo4uEw3KmduZTpK1an51HHMaTCKhGKToKtvcTmxp46vzF9",
  "key19": "51PNNkgv1hHsLNtfj4mmvN7FF4Pwz2LyJdaUgRfQjVUMHfxLk8jiE3LfmZmKQurMB6iQM3ucmjrxQ1Y9Zyu1k7xC",
  "key20": "4GJJTTS32vfvNiSb23kPULYGRXpxFki2RrEZ5N9kiUZNQ5LCq6BAqTENwAgkLnqmidQmBecyFrUKWaEQ9XZzuFPP",
  "key21": "3feReC3mrirwWR5mU8kHtpePWNSEP3Qz5ZrcHnTDmHofBvpmHm3LQzhVKQrrALkob9TK7ctqnv9NPsKHVUsCjh11",
  "key22": "4hQFpgDDdTBGsk1RPJ6HNCfVwfpbSRTvqY3A3xXD9dLaTXpDxcHyHZgGgRCd8smkdS1nM1LjDZV8W2B8rUKozQFq",
  "key23": "5U7TY4UoNAvZCyVR7kAtmBZm9oezyBrEXibYaAdRM1z1kRarWpe9aVMDc64EnhehGcXXYKYH3Ud4LJgM6Uiv9fD2",
  "key24": "4Kv9R3xpS9yDnrFLifHD2xH1nvMUMVnNU84xEZgPxUyEoL6i3Hx4ZFRaqnQDNFKqdbaPviZamDAYcsTfEi6J6P4A",
  "key25": "3CG67zeHxrLH5BsrQq8Cg7jXBG25gj84ka6yf4W6FpEAqt9BB8hb2Qzrg682Ym8TohhrvKGaei8yqdpQjHNKcf19",
  "key26": "5u9TJHXCp3KnzbP7k1UtrxMD8RGjgWFvbiD5fes1JGnhpCTMaQ1EgxpQsEJLLm8AKSmSXmn7eRCMgkgks7UCUFx5",
  "key27": "5C9zENVYQdGpoN6QN9M6FV6voP65UJGPuNMZjYN1RgYN98FUb1w1N6m9bR8CRKpJ97fpgLfBy2pyYTSEr6pwcPjR",
  "key28": "st4GnTRDVnmPegxRLGghvtyEcUoBd6fVVEoXwW25pSprXx7rWLBDqiPw4qDv2JABtEZkLpMCcf5UaSjSMeu9zDB",
  "key29": "4WzoCGwJiM6sWzCgb2qB1jmErW5wLPRSTgBiU18wFwMFBdWfV4j1DAvfEJBJZjY6VGUWR2kkeabyFVw3oZKnoDwR",
  "key30": "5Bbe8JauDn59NWmXHpX7wx9P4pDANCQP6WkozniNADJuMFXYRWVLKkWiwtD46xRnUrZMFUgiNvZ3xs93cmrBYM3y",
  "key31": "5quVco83fHJqiyBsNmVy2MuBTjPR4eu86MRMHFQnstRaakui8uzECLY2wPhea7qrxrnKfBp6zHUDVJWJ6h6tTR33",
  "key32": "2DsdXsT31ZebqhsoEdkd5t8Nxagw8hLgFbhH42FQB7tcdhqqeYUoryYKBxL1oXjyU2Kf2xg2hqn6RrV7DwpxpY8r",
  "key33": "gwA5qkiuMYHadahxYP2vzQPJmu4Wo9m7vhfGDreRngmrGU5Lnask4yyemVG2w2RGCraJjukdtYtunoHgpfefDxc",
  "key34": "4xsdBqpsbouipLsA3cP2dZkw7M7tXViNJTvmtgnqS6t5DRkT7VPGTbciefZavz6GPec4zbFXVGoF6eBopY5yE6aq",
  "key35": "3hgPJDjrfG1QBADwEAW8zWJzZiPNKDJji4br7qukf24WGCfpR2tHX6LoH7atN5u1d3r5aeTjviZj2YW4yu3gRA6w",
  "key36": "3qSEXW7d7u9kyR7oPQnspUiTGfHVJYEh2qHcEnh5c2xrx8dP68nrczEVLdzFtjh3Gzcwy64y9xvyPpsgqGLRvCf3",
  "key37": "4AMzqayksQZkLUSQL37gz8skKVjBu9W4koUAZUkvQSA6WMbg33qNEg1uN8sL1bZD6pdjciWtJxyaEmGYmD8GzJPq",
  "key38": "4xQQcdBsF2kpSAazvEFijUpiGf3JeUQVBXJYDN7M65KyccwVVXRhJWgiBrMBut5z2rs7CMpjHWHYxWvvgvGPzDe1",
  "key39": "3Ri6MdnZGPwe1d6PK8ZZ2nDi3oLGdcWDjtD3YJtMeyug9kXQJxYDmh7anR4RJ4cEPt67NjUqir181RfifY18SYkf"
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
