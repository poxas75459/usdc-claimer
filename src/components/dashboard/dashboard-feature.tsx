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
    "3LUutd9mDSpNvZFjQXCDzqZPVnuCmCy984D6ibqoU1okUsJrLHKCQuPPpSJZ8MDsry239KMrM59MBophcKTTKiGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a8Lz6YSJo2ZWkhMC4hS6ZFdNZZSFg4g6P6ufK6dbAMYbuUmBYyDhuSYEmcRvGXAaf6HEw2v6tcK9sS34BN2StkC",
  "key1": "33jaiNcHg45jm98nHFiWMRGJLUs5k1PRvoB8SzuPEMjvzmXDpWfumzkVqdZP3dGsQWPZW3myxkVwB4toXJ4XwgH4",
  "key2": "5SVbB7BwWTsdLsSLmSgCCBx4ianPRBACHFmnL8cydBMHRzejR1i6ua8kyrE3KqemccHB3W5S5x3J5oSbBzbdkdQM",
  "key3": "3TJ5VCUjc4X7LZAXbNqqetv2tVsSaB7MP4ETQSPCJWHMQTGsY5yFxigH1t6ES731hQa17T88fcgNgyciZAqMbhwA",
  "key4": "cTTw6dYh7JSsWAgLj6m5yP3BHmd4BWMeo6mRmdJx612bSYsEDtQFw9DZK6svwTGPAquuRgrXrWEwgsNNBD3ZTQ7",
  "key5": "3ryMqzvDxGGJ9qquNHqHXS2h66xMuufbPdwimGMdnsLqEbnebKicmSGpsiQJt7XswKR4LxgGAUYtgCRQVz7r2awy",
  "key6": "2e5WxQPpC4n96NrYVqEyxRPkk81jENpp3vAyyFouXj7ZqwJjjhEy1UgQzRDfEvFXAdQHpMzJ4gHHSkw4WMbYet1g",
  "key7": "28X2YakscaFBomSKrVeyy3TAgqsM75c28tgcPQC4yo9TdMgdtstJ1GB7HxBkh7WvWrFeBQHqDqAByUymtMhnGgUh",
  "key8": "nRwFp6d9ARzhces1WuGdMcz4SfnbBi41wdCx6YkKmBBhVpMshTrYm2Dqmj7ggSLmynLsQpZdZBYZ2LX16R5WKrg",
  "key9": "Fq2EnSWn9yQqU1rpSocrhaQZTFpGX6jtrAeV9aMaoKaWrZKb7BiUTiRgUfoVvdm2ZjvU1mseGaqASew7hP336Nw",
  "key10": "39WMgH7Grh3jJapunnr3CcFxuRZodaYusvQrk6JmXRGfiZsAQMN14s4j1t8CsjpWx6C2nrd6KncTuEo5RbnspxgC",
  "key11": "2zBqVrKp8jawSa89VeuZqeTCCKH3R9BboYhbQPp9nDD1KZyHzYgAb9ycZh1NpBYv3SsaheTAxLJQy84kvLtiGxRo",
  "key12": "3WPsoyA1AEtHcVSjoh1iQM3224QXBUifT5MxqPUjnTAhoW7Uvo2ZfBUkoEkepwKneQkSgophGSFC2HzQvcXv1ozg",
  "key13": "5BzCLPc7Et3nbnZN5v7YaCxR3ohWU6T9MLq8F4gRJHHr1tXNuBhmFNxjh1PGnEytZpkHXsNcdJYRetANpw54PvHf",
  "key14": "2LC7hixQZvjguUEDq4LepfFowC6RY5t5BkXbZLemYeuTgqTTZCyMfZdkKaQCCbx3rNdb4LZiEmDt3c8BKbHtZfnU",
  "key15": "559HHKF4oLxKVmmg599DyZA5GA9xw2QD3JuieyD5qPZnrd9YgvyPLbMMHLwmNJs6ojJKXR4hAoMHLccakXRptTu5",
  "key16": "2vvkmwnEcUUxzrwJSq1j15xpNXhsmGswjNAGb6nHWmR9D8GvfbSuwGeGp47fZaRGa2Q71ApfnMyi6RNWPK5SRzoF",
  "key17": "3eNYngYwG3NyBsMef4niDHHLzY1ZNThgarB99zorriKvygF43tZXKuv7Z6kNZXwcJQ9jpgjmb16Yn5vtYPs6rJXw",
  "key18": "j1mwLPZwHoUwdBSu4f3HhqS7c9RQdRuQhQxVSVRoMbxsh5M4fr57Sqq2eqMgSfo8HJe9w1LWNCdL6TNWfNrjDmV",
  "key19": "qxVJepQikPLjiCFifcq27vQcZXg7QaLdAaz2VknKYz4UWy6qwgRH9rfKd7fuDX44Lit3L5QH5pcMyuWuHEmM2z3",
  "key20": "3xtWHgWmpNu4doWF7kwpQQqvYpouy9LafxjMJFx9SHJ5vUF1gLpwiLnrwzR6iZzNvKm3UtkiKy2jCF6SwAZp11Qw",
  "key21": "2ka9p3eErCnbUCfXxAysnwSnYyVM22hUVmbba3GwnDzoiWehCm9dVLc7PXEuiPbStVYtUMajqCALBRZsXfjDyi39",
  "key22": "4R91zEBhHTVtPVC9t9KCXhsRehapegstijKyue4XMYErUpNELTkrpmCAs9G3zgSxKi9k6rwpFsoPSQWwDaznmb5b",
  "key23": "251pVKYMCKRhdBG9GWBitQgas97VuQAp9z1UhMC7VvTS3PDvaULtqyVftGEjJYKXuCa4yYcApE9mSvQGussUBzXf",
  "key24": "2Z7KPcKW5t8ZmGJJoxDPvomrUi4oCsgjPRBS1m8NpcaNKarbrVRsz1L8xpdW8VRkShgDi38ZyasnAs7jVKnNnZX1",
  "key25": "3mquhCM91PeM3cG1KYKpA6is3dh2XBzHHu2QTy9tqXWisPhxRYihSyrFgSEUwJTwV6q5eHsQmvoH94a5pPf5WtmU",
  "key26": "4L1STNu2YoEnCvYzkQPFjX1YKKVPs9Ju7dHoxHVdxAT6zbgNBFvaroMTQxUu6V2gHh2snJ3tP8KJnAvWLirggUai",
  "key27": "13PcbSqY9jnfbUzXu8fsjPhjWA7hcPVBUpoAF8sr3mjbVDAmyVzSVKNhaUhCZoiWG83TvrWedMjHuA9G5grh3KM"
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
