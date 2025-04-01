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
    "63gCbSojF3TWBNM7BkE8bcPjmfo6W5XT2tL5BQJccXkjuVZqRbFmZ1srRnv3KTa7VTD3WDsYbprHZLg66f6S1coY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k4pakyM2b2GVjrsZu6kejfNPgVJk2TmmqDZUtHCpQRAgcTGyh3nPGRLTAgscZZjoCJbQmnb7pHABXo1GPZhivZ5",
  "key1": "2YcwH1XHYRo8DxYaxm6ZhnUemETdA7NnuCdPxAxKxZ3aVRaHyw7XWNWXw9BjTe5J6n2RMnBXxACrJACsaRbGrMvR",
  "key2": "5aSs2pUiek7MXSBTFBAEuCLCXxDEX14uuagdDEaB1nsfA8mXJcbaHjzBEepLJd6ZmaFM833PdXjLRhuGkrbGaFCW",
  "key3": "2dDFHyY9eiCSmP7keoZJw3zHh9cRhc5tvCmi9gfgC9zmhHRxiocUx5c17uZuyMdZjEQmHB8ik6YUUthRQTQeoYcL",
  "key4": "fv4GJ8Q3Fw72tE6pTJWhULe5wTT5Q34VNYeCKoiABPY9z7G41ZpMRq9ewAhobJEKo3DT4YSXA2R9T3jbGkVTTsK",
  "key5": "5wU2mSuc2tyjfD1Uw5aaw2i6ACJzpdts3bB4ZPktPXzHRTiJ4ywyL2LmgaqHeqwHdGYYufmEvFLeJzmzczZyCrQF",
  "key6": "4eeajV47guNJrWaAdawtK1hUtHLVcgCjvJURn3EFZSaAw6fKecErwibnQTCwtUUGWpgusw9guCvz3uSzJhTH9gfK",
  "key7": "5u4bp5LFtvqBkug9hk9gsqFNX8X6KEmPWk3ahLkWfEE8S5j8SzqgTwud3BUh7FAMDLLLQveLWcGhQRyN1Sf77Y15",
  "key8": "54rbvU7KbwGCh8VPX4qqET76LUeWFT2F1S1NCzRo6kfe1M6zaLmbhGGhBZM8P3MFE4Q8txmewvE7g9WqE4EY9sJU",
  "key9": "2gnuVLzHKFPVneC3sLRRC4WPXg3uYsnmf5iVcEwvWooFjjSPkcck5EUR5XLt8NdArQeB1GRzZKzNVYgsmK4qm7YR",
  "key10": "23Pxt4NaCbW4wBFKbArjvM2zoDVPbPUx2BFQhYniuQPwEdBMftcyZWEVb3Z6kGsxBLANcBk6zz5gjYQnkukDXFhm",
  "key11": "gAPbeTwzPnJmnQ5J6ef82n2NAutok4MjYAJHaKeFoVyMFF51JiPmUEaEFD28Cp9RNpdQQwLL7pzSfpY1HQ7A5mp",
  "key12": "2Teo2yNeCir14ri55DiT4YJvhXTueXtbXDceJLFmw5eArtPKSiJTDaCENkYQLmcEnBtm5zYm6zRj5spytF5zEsya",
  "key13": "3oCqcaidhJcPtdGkrAXoohMpkrfe12RevpJsqgAgZRKqVNufE4deENVjpKQq3c8r5AT9NcKRmHV4MprX6X4Q3Nrr",
  "key14": "4XpPu1DDLxH4M6Jn8ezUoc4nfCwjZnQyyTzjKrpQM2dcuLBfqQjT3z2xyzoT2GKrcNARaxF6Xr4cpmLtJAaREXXG",
  "key15": "3WK3CzT3zv3UhvC4oARZ23AfH9d3q8VB4BQUf3oc9GCE3eFMtW4eAgYtaxBQ93jZir9nFvyBkY3SgNo5SNMt9m3e",
  "key16": "3cj6YLA7aLzkSycpzehptzJ1ovbj3trLgFZ5gGEe1xncLDEns476B1DRLrFCshBk78xx7wj7ur458VXH7RkrCbHQ",
  "key17": "5RG8rVo3KB4Tu6WCWzw2sxK28cLiVTr14bkYyLadaoC5uP1w9N1JpkAKEeY7oDK9ENBi7wG56kgGdvY6rBURbKvR",
  "key18": "49jMWmQu88nCNQJgpo17DCAqEdBm5jR2vciGPSNSYnDwYwgdCo2BJeUk2NLxtQFdZWYSwaZpJt6aLMJwv29KrZwX",
  "key19": "2vNR1QodaDjom7yjpQYjqfATfaQrNYewDqjMNrY6UiQHEThwg87FV9KTawuaZ4WKZgBHp42njYkq51yRiCB6bsML",
  "key20": "iEPUqExxURL3qD1P4Vph6SX7tXa5NfBcFqrNXsizWU54rJ9F8J2YwQLeabj2AL85pV9qoF6qcsRqchsAZe5kezX",
  "key21": "3B6BVqD8yRzmXUdp6VmoAg1KQu5koRQyfzeWpdQrfK1VMEJu6b7dHnZ6H4QWf4rrB7sFVvUWYa2dE9n1JFRmYRxZ",
  "key22": "2An7PaHu2fPHsvmCDdVQC1yGNaM31tSh2fYnDp634mhuPqkTuZZqDB8endSFAE7qwPQSYteCza3JvJUBaw9KutQp",
  "key23": "PXQBJ6GKSZxDzrEspEUEufmLhQRNow7gT5FpsWiHBctPu11W6MbL6fUVWwXUKfw8stVp2sSNoDqenL7wkymrAeF",
  "key24": "dmMNsunW8as9XNKxBc5erfxTAvaFiGvwaf6kuYNvGUUtWpX8goEKbbThfvQeVye4LjeA37mrpgCLqYAR87XhnLC",
  "key25": "etTRQW5iV26SUihtb35Sn921TRFxFFgpfp2WxxNAnWeYBoRXrciAYqz3wZorPMPNPVt74GHgjuwKfCqnsNMT4Qg",
  "key26": "kpyDheJTkj5pSjKjLcWYr4PGUgBBMReBtunmPf1opa85d1BzDwvrDrAzWzQGGQF9xoubH6khTFyKUxxQRshXjQW",
  "key27": "57DhKshNZknwg8G3d1XxvF5yNrjcK7MhuVTK2ghX6WG2bYskW14ZDMWmYgvj5V1hPc93FxMxWz81mtomvZX4M6nB",
  "key28": "2kQpPsq54WgqmAsszpNrUhUNoxV5bnztRZaQk3juYr51VWG1wXzekXny6Q3zkebtpiaNvoGPEthXWBomYes9fUY8"
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
