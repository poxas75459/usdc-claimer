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
    "4jWqengHS1QYNbDkgX9Wqq8bxhEbumSt574ixg8LGust7EzWDePs237D1aJBQBvp7Ley5DFVChM4zyFLrNgvk894"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YGAnMd11v9AmS1FzJHGVRE666dDXaLjz5ewucZK2AFu4Xu85iSP87Jwn5igsw65G7zj3xxBHEcE8xTgRCrMXmRs",
  "key1": "hfWc2iqTBBweyDoqv72j4Vcw6NG6ap1bSDbeP9AzURTmoS8QisvTvspaiL4nqRWRs3WDJTCJjaQobZw1wPXF8cv",
  "key2": "3ZKk29584tYt2MTzLmQfTQQHJQcjEuCCJAiMWsTWVigYUM2UbiydWBn1oRRDm4Jsu5RZEjyh8BhzVQpaTSAFic3X",
  "key3": "2p9nmchShFPavRp9NWtL6oQbjeP5oStzL5F7xHSoZyEn5sseKTR1ejp3LV9T8uDd77PVqAFee4CoH6frkB3UgRG4",
  "key4": "5MhroeYU574Z95NFpHweoST9WenmAHNx1A3uJvqZ7hANgi8QRnDUSR6kxSTMG6bym9SH7MjWGjaCdjNdRyjG28uv",
  "key5": "4pdZMNYo9LvYP67aL5noRXDvW4iHR9WDDZwGzuUa1rdaineUrfj9M5ZRu31Ghek5TMzdDDKuqNYiAEYxEpFBn8jM",
  "key6": "3nED2JxPrdu4am2Z1NQmADuHWZsj593Lgi9PUL2mMaeUVCEKPGBdPrffbtdkKwrLeyszXt865iCk96FGusYg1HRB",
  "key7": "2pe9q4RLA8vtxiGhf31RZx1AtBvx9YK986QTg1KGYFJmevxcsLc6iiX6mPByMbQ7FBHw2j8KmMPhW26untimpNW5",
  "key8": "5iddkPZZGxfZpS1FrxpFXGQDg74pQf8w9KptZisFmxgYDepSp598eZpQGb36h5b1YmRYt8Ao9uEoEcn5HEsK2FiC",
  "key9": "4vvdNrJwQiUBrVtiJDsV2RS1o9ksjD3LKB7z5PKZEGFyfvfWXCyGsTigSdnM6n8EnNAfBDDHF8wUd3NaQbn3Waqx",
  "key10": "4hstCQDzPSRyoV28Akn4rfUrH6WqMCQfU9hceAg6bh3ERtsXaYXvCAKqB98KEgCdeMpCMgZF43owP6B7N83hia3c",
  "key11": "YGmYDvkwMBK4dqEkqA4dPkXytf42TdgGmbURwT84ze7i8Pd35YSFh7fmhcCrEcy5vmKhp7qweSm1VE5Tn1ik8ki",
  "key12": "3YcLUhCfpuSk8we7ZvPTijhFPAit3CVzq3g9sTbEobnjq4w8Yd5BN39bZNnPsXQZRrjhjGncXncKvspZUwc9Uj7a",
  "key13": "3odTmX4okismrbBT8ejeFLmG23UYqp9ZJTKzj7sU9ZtP1cb9sPmLRigDHTj5ereti5Xyb3H4wWGokQ9XRx3stKuH",
  "key14": "5fY2DCQuYZc52MgfVUgdgi9gehhNj2ce2mJobkkRYZdBWMkDKKSiohZM4DGtg7rfaMGidXRwNJjWZpuHVUqtHrrG",
  "key15": "4iSeKLLLLxrhHvQvw3jCYZYwFcoZ347XWAXv2yLMDLugjhTCixzErVXGA1WbSzBe92eWZT5PUdztnAx6XMgeUYrk",
  "key16": "3FG8FAQnSMHpgE9TxauGrmjjyViNeLUPePvpEQZdtvXRc5xpfotfRbNiSWPuEsffDDK4SMGD1UgUKSTGtsYyS1J6",
  "key17": "2bTPBqpmawQXzuYfscyygeinebXkU7kyDosQ36qkKBne7P572zQVR4TEgYMiaM9MTBEaGGa53pYFJcZtsxtDbULA",
  "key18": "D5h5nSAsXFhDufrLmgRm5TXSZ3LTv8QVH8va2G8n51tvYzsprLHHTkzmsP2LxKmaQ8uyYH2pTVrsHHQEyvPq3Qh",
  "key19": "3tzm7Tsvf6GTxMnkocZAhVGrV4TzoX6dmD4wzRphPos2deLikkj5tt79GymMTY8Mno9TBG3YmB2qr23DdZUo1qq9",
  "key20": "5PLSfnJVrmvNL8sDAWwe5qSdV3KPDcuxU3QLvwkh1f46SSNs3vngj6ML5R2sDsB8JkEEEfc3MHuwdbQi2UUDHN3T",
  "key21": "4VF2XB6C15DkkF6N32dpdPrcUZcporZCxcXR8o2wzPMFf2YcGgzp8fBf2fSpLHEsXPc7AE5yJfLMFzcp4jGLEa7X",
  "key22": "3vKtjuohp64QkzNNzHvVW8RYkuBbkdVu561KEar3jntWNpz6D2rhLNcaxmg6tbyi9Nwue9viedS73Q2mZTNvNhR6",
  "key23": "5TC4sF6PLBL9vzWkCi6Npv5vmG9TnVdRvUCfPdpCFroFi7NQM3YjFNTxc9sbcWDF9Jo6gx9VSM4pECpCcyEMSDsP",
  "key24": "3EPUukwp2dhuaEDaQX1NwaXJsc72scNN4Y6cbA1R7qn3SxXBZroE2aVXzF2iPkLvkSEH2DqS6oURe2q2WocCjRLp",
  "key25": "JQLh3WkhswXFy5xqGqEW2JZJYUfEiDLk8Fdn1GLhFoD88UFmoNmbfRS7dPucAPRmTk5vZPRWTRREABi6dZEK643",
  "key26": "puXo6AnV7UH7d7AZvGwqdewzrSPh34TZ8vWYjUS2YojsScSHZmK5pNWVVZEqyVuiPrs9A3htR93c1tbevnHipe7",
  "key27": "2iyXSRy5Ba11ycUQzE6SvCtNSqp3PmwgEMfJZrB1soBpKzE9wA4CqXFXt6K6xDo3f8NMLTRbJkSfRLpGaBJE6beB",
  "key28": "5bPbg8xnmCRpeg6kJdsyFSAJt1BAZL4FbqQNgmSA1BBQEDngDRGoHdMUqmwsNUjk86J2m5M4Y7UKD6waXFwyYEfD",
  "key29": "7GH69X9SxvtFqWTxrj19p4r671NZ5xAkgdLyWHyjAWcoXfaCLYcfx356JYLRgYxEVzQpcN8hZ6bLnJztnXTv6Tr",
  "key30": "2PaxxDnkkFcQHEpdznt2VsGeSYo4vQJBKACoZVEsrdhx2UH8EgncQXqTZSPK32fohzFBGKkKs6t26oU2Wg2BSMwg",
  "key31": "4vPWyCHRFCdtrJHJ2x5cgKTvMt8TLbDjvE4sTVLZuGexWMF7aEocAw6oTbfqHEnfQ7hxVomPGZH4jmztXsagHTHW",
  "key32": "4Dob83yq6MLq8ktJ2Ps2zCyBRD9CeAMakn2LwvTQNUq4qznk8e71SR5KSkJvrULEb2CJ69Z9wUDyyoKtZ1mpmM4k"
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
