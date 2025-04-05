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
    "56pkcYnrejkoZVNkeTcYoEMcHn8H4d91GVHHkjbtVJbg8QCKzLcrUfLema2Cv7s4tSxWgw5qa1F3MjRS9EJoaj8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pZC9oQQRPJeN3DScfMJmCqACozxrzs9FFMjQvZtwJeeXusxMfEZFxJNSKwuma6p1e4EXMeYooJVV4fUn4wpmGRD",
  "key1": "4uadQw6KyWNPc81U7VBzQhsiUkt36HuQPnWWatJfotGRt433XGjTqPMRGeRdZHC2Cr2WF7VG9sC2odkXY3WYDEUQ",
  "key2": "5N2aXFtpCsr1ombbFk98aUuwg5fxNqwdN9NCWmpLkyd9mhd77MJHkqEeod8ouRAnyAE1XgRCPU6TbzvYMD7Tw9X2",
  "key3": "2bwdx74opQcxYXskTmBjM24AC1uYwQBMcc3QxvHJuJ7nCPyRVb4sgNvuiukzjGcaJx8oP5QuujTrixisevjtU8Fd",
  "key4": "f2TxqFjvUWL6XFjYFK2RFw6meBLgCym9LpFkxCoFaCsAgDyD1p1LfEXPnN3PSQf54ziHioXHf65Xv5kz9X9T7aH",
  "key5": "5zwYdDnFfS4d58DBJsr2n2BdCMvWbuQuXdgD22W5AQtZycJvFahYNcZvrbTfPfdhqKCtvrZ7iP4otgYxgn5LtZ8e",
  "key6": "4CBfoJ26Kr6H6WjTUXx5ckyryLnCeBHSndk6MyXpQg9sTUozbtiSgQy6xqoA6xATGXQ67atSpCP2fRUAmSuFocLJ",
  "key7": "4vcbpTe8Lr2Fe9X2aan8PPk6x6tH5Se6PD4qycGRJATrrXeszcZ4PXys1H3wvdvQmebSJzFfdjLL58DEkvt81JRE",
  "key8": "29P8phbKya5BeaPADizmXT6JQeMhuMuewk9vk7nD6Sgs32XZqf7MqS1csHhGF7MuwgVNEgQCcPCHi6okvXt6cAYt",
  "key9": "5MNmUKYCTx19RV89H6nmYHjnkw8gMxndroLkPeGsJLcfFgN3DXK7mYn8Npeqwp6692wkZ8dJaMFevkRWKpx18AvH",
  "key10": "2MDBzCF3d6pAAsC8nLiBWwVJmr7e8775YYsC8RimCbFY5US7bMHbHovRAmNrbnHLajJB9aFBppsMG2eKiezt8wcN",
  "key11": "2gD15hpgvRbAudnL5gTFF1Vy1URhPDuhweNPy1RHbbhmtmG3jEMtJ7NUPhAT3b6sHVU5VTZUFGSvVmYeVmdU91P1",
  "key12": "51WCbebEUCbT2Bh1MYhbyEEfyPkpJBtXFW7Hz7tKFnyU4gKT32M4ToE5JfHjHjL1fNqWjpTZyP4HgtAVbjnbJYj1",
  "key13": "38MDep8gdAgRdSAx4Thz2UzfTTEQSjshQMfUn8LLv9j5siCT6Bagq7Lqhmj8LU6qqLvnr8dvxHuXy35F2zMwnSsm",
  "key14": "FzT8zfdsa5zrdU85MXX8ezpYQiNSpPQwrA5uuHTJcsYzpMjJsdvKnd3dMhkKkVGBDyBZCZJJVXafvHKNGNs5us2",
  "key15": "4F3dXBG8C7nc2GfZsXDypw8KZ1LVNxTmjVWggMH6M5dykMBVEMekc9w2gtUGmD4cSwdaGZLC4QLz1iVc8WTDgDo",
  "key16": "qU6uFoGqwCmiyZpuBKhWoxRrt1TJLZvjHAm4pKN3ce8UHupieLUMi139XjrCwpTsRgVmCHDezDYv3rUgUrGsPAa",
  "key17": "29Fpi95eQyGFfhGaasV1bHJQJTg58xoS3rNK1UJ2vdyMvy1bM6ojiHX7aFSB3ZxqLkiGqE3wmmKXLkLu3znyLEEJ",
  "key18": "wNV8K4uXtcNozZSf9YbC4m1wHdKFcrfphYrnKcssTpxgdEbgxnBX2mixG3gSztMRPAREhDg8Hq3AsYaUHkTFcWi",
  "key19": "5DvHpxqVAFJPsUbUd4LUYRsnCmK9WAfDWATzf24UXgEBcY6qWjuFa6g6T96G4A1KnReUEy5m39QQwv6YTpy2jpCx",
  "key20": "2VS5q43bdZsGzfTNVpzcFRvvtyJKyAjm2PSwSSuWhB8b3ZpKsnaWGB5Go5zVXGcaSX3AjWxYGUi2JyPKGVumYX7Z",
  "key21": "3eNTo7muaEjdpejBzYpXpYTWjE5YT9JhzvhmCoggFJPPX9snR56Pjhny8x6pYn4a4H3CEUppZ1Zyp5nwnQJPe9Z",
  "key22": "3x3XNMvCmMkyMU9K4qWx7CHyJPYFhe3BcoD5LYrVm3qcQJDvtyAH6cwopbyFFKqPVMPdjY6ELe2rcnpVxhdYCrMF",
  "key23": "3RkAmjiZkPWf9BnxDGtxuCTTetJEoH6QjBdvGeEYk5vEF7tyLpSRBuwjEUtbB2gwE9xCywdJZpyUo8MbdV2YNqcM",
  "key24": "24Fb35eMHsKafGPdSGJ5GbMhRajc6ZcoqRGSDsNo51SgKyvpXU2CpnSwjunXtkqtQaEKXAsPZscH3wcRLmqrjmtc"
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
