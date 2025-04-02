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
    "ZcqF6SLdhpPm8kG5z2VZEA3cpMPB8DtNybty6gVfWV47DWtvhoi9YEQ5JeLr5psx47GfJo1ocg3xfptXr55Vdp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7W4xhX6RCuX7VsaUg5pJNyfunzonREtfkgymfHn3dz6emzsnMcQ4g9QeyeEJA3p1aWipPpZWHJVyHUgy8KkaNyb",
  "key1": "3Jm4vCNpDws9Egg6ogG55TFthFNmgRLc6pPPZ3Uuh8zaHZwtxgBMhrURq9Pj2XVGey2VNakkBHw9HjWkQzEZGotB",
  "key2": "4qAuD6MRXhPSmiG5wAbzRADffUy4P9x8XtzQKfmQZTdRC8zBJ54LfhkG7qvw4jCgw4PH2ojFW3vFFRMaAzA4pT9m",
  "key3": "2kEPkdxSCoVHstB92gPjaYE8qUqAP6uwnX2kW7t2A5S95jbJu8P5ZJ9CLPAbcMqVChr4L8qD89D7nULkBhWZNK3J",
  "key4": "2LNkBHqe151D6xrZtLGMEGPYfFHPSFsXGzW2KRQ6xHgXSZTEJVBC93oEuNfA97pMiXiMdzhxtP3oVLVveuguQ4mq",
  "key5": "5YKgzxv7738BSpUX4DPDAvvrdK5iXi6hPRzy6Kx4x3UP1ZyzjEnZjjvoNwJoWpWW3bDLFFPnxX2DZ1ujPEfhsS8p",
  "key6": "4BBTZk8co88HUvSU6rLJCGEDRnid1X2i1XWqRsgEjd8QWvThYssfgGnGPNbYuXevzisKRPPhAbNarX6NQm3doLVA",
  "key7": "HovkMSSrbfZiKviUfuuRA7pmtKBMytkuDqhSPr1bK1RSspKxiJyq47bKX45GSNYUnk7DoyL8HcxSbn7VZQGV2Uk",
  "key8": "uZEnBrABbchny8PWea6fEEBcnEGpMJkoDViXLm8XaT5RTvStLFThVHhZRgSMhhyYZ7KYA5J6kBHnZxghTsiiq4C",
  "key9": "2BYtSA392c4zbZKyViPrvLwdEaxG64aKjVRU35SNxVR8egRVfAe2F71k9c5LWtAJqxWDPYLXEeR1QtGsPhpuCHWx",
  "key10": "GVXXK9oK7PXsxcRNQh5ShxzfKokWUaR7PA9CSKeCj9VrH5t1PQ6ueCUmZUrQXVaMbAw11LNixewGkaUZza8XdRC",
  "key11": "2MePfeYXt1qninekzu6GKnqWTv3ZKvrUVM32h3x3ZuXh64woEwvWHV6W1W1uYVKnUn1mZLmh5YX7R3o6N7hCR34Y",
  "key12": "nrdGA62JMjEEFJh8Z92Z88JDguz2BwAx2GSNXG66YfMCgWjt2BS8W6ggG4FsLgygzQLznMBvFCjTmeyfgjV4xpt",
  "key13": "2uj5vE3go6joXR5Z3P7rbX2doAqkNwMC75f3uuLwbhSf6e8saeWmZnQPgB5gVkrZdw6W4g4fR4AT81o9AA42EtHZ",
  "key14": "4xT37M2JBEj4tJuxmBaHzdtnczXd2JKFv1Z4tVXcW6o3kJupWT5ctYFWoFzYPmc9igiUNwwCgPxggtSReDtmuQvk",
  "key15": "5cpP4Yfti8P2xmJ1FTdA9eGmTooRZur2qTkcRCMqRmp21SNzDmd4nzCLhLfW7znumvFCkvhB4CPXu8ULEBTnSKuV",
  "key16": "2svx9sD8J6UbP6TM1WTtPAFiPL7MGyjkHdzste3o1pvp2p7ewpR8fs8aXLYsAWFMjNMVEvV64px9zvvyDBqsdPhY",
  "key17": "3bUuRtFiy2DF57M4UAPK2zG6RhQUKxmc4YzEiVXCbX4L6pSCxxMBq5XxXUnjFH4mHmXSkBEAEUrAQ9RZQdNSnZ9d",
  "key18": "4BkagRvw2XfDs2MFANsdkzaTjNwHWt4oQhyb5LXAHhdbC4vfW66i3ArKy5HYLhdcpCuFeJaz6j4CAedyd5rFk9Bw",
  "key19": "4n1CgLmUPhenqPLKRdrHytkLwtBDpqCsvBgeXBNAPdoKdkWXGALwBvScZAKvYTquTBXKAAyoCaCoLzkndo36znmG",
  "key20": "4kMnXgQfyqzoPCWy1KNs6fE7n4CDDPoucQKuE7k5raZTRQMUandjL1nDg9EgQUBHbmEiQs33AvPY1B9khhR1iDb7",
  "key21": "22eaRBRYcqTiMFt5RShRnN1W9bCFM3cXNnF91A22ue2QrJFggquW3TTNfYmDVHg5fAcaa4Qaq9PVGLiatjAmoQKs",
  "key22": "zSNYMraqyJ2BaD3phraie53GqRboL3wXpnMmm36ipXoHjGmy2x32gCpTPUuYYkzp1kVZa5nLdPU2cJ11ciMtCdQ",
  "key23": "4PBorkpStFyz7tNx1rULHjpHed1yStr7xVhAu2V9mqRRPaCscnddHoRmnupWkeuAiWV1nyKrisKBEcfaU6Dm8Zny",
  "key24": "5G982SR7DgP46Gt7kYTDjXUfaWh4ETtXztRX4xMk2PDxiwWCNmaHjEm5WDuQ1PaTL2HeUXc2NUbcpGy8Hnc3ZBBF",
  "key25": "2wCSAxEwANRtj5bUf3FDdVULtB6cvNULX6CtT8LFB3ZdWEEk1WFaAvBL9H9yt8kpRde7YaX6wGM2uM7KewyP9sG2",
  "key26": "4jZeHDbwnQVtSJqqJxsaB6fesN1vdUJzGhKPNDasW3gvFmh2HAJDgepDDqypbkx2efPscY6aBXrY44aEUv7dy2MC",
  "key27": "YpAa7Zmng39YZnP64eRHzw228MchC1m2G5LKiFmfe2vfH4WXsMEUCX4TSe7ZiuJEX148tH4TcFoaUBpUBLwkQmY",
  "key28": "3hCKUwPsK1WzLRWUKjEcEocd1rRkoiJVYDHLuZLrbFX3TrRGZJ2cHvawfR9HPNrDdQSYSq1oPD6utuL5WyUMou21"
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
