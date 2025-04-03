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
    "3UbanYWJkLMcGAzwLjNmtt8zdXHj5AP5EuvrCoEh2kgH5wVZsHoSLAfJNLB3GqxBDVLwoqk4bdBrTMxvz2rNxc7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QG6Eh7nQPTpwLNZxou1pzZsGnXpiomFUtrGdLk5Q5dTVqJx5jDVMR4Egefi8tchBFVyCjfL3Djyds3vvxjw7rVx",
  "key1": "44F42bVZxXu99BpMeVRoSJMrcRhCZvJKUEYGBHT7a8xoFsiHdb1PEA1UnEBj7a1ZP6i1U94ZZvcYmW7mBzDxCAGj",
  "key2": "joHj6DMzTF1VroWHeHeeqdFy5NyBEQ289sTCGH9DCdL14G9Pgg9cPzYfYgwN4VfKr3Umrixmf52J6uXn86GVpYK",
  "key3": "2YdVLgS3cGraQKXb4AHHQC6bztL3ojXY5jdAw8R11YrMEedA9N2JtEn7Zi21FeaL9heepbm3JXpnMdtda49P8ZAL",
  "key4": "5dvjwNSVcTZpPqCVmn1DwQwhTBUD2EVQsRjAzAveXpZHbmFMvddyU5nakt3f8bzwt8Us3k2K389oK9kg676VGK7G",
  "key5": "4bet7ztpBx9XGwCMdzmTjZy6jJXu3r3EugtfsDrjVjdvnJ1jubbdN2vApFhMsWgy2DwuwkW4kScr17AE2pRyP4qf",
  "key6": "2GQrQzMYPAtvCiYHvjFiut5e9uxt7TmNWKcQhEpaZ73fdpRTCnsZf7XyNBTKHNH8CLLFuPneAAew2wt8dBGJ77su",
  "key7": "4v7AJxNa2fC65RGMRc6vbm5nds2agL4n7u8Ge47FG44VQJN781WwHANpQz43bc85oseUVbZTMWVPu7knh17WoWh9",
  "key8": "xUTRPG5g5Hu1U457NEsmFo3kCw4PDwjEHsUs9MFY4fhS6WwwKvdvhy8CiSTWoSS3Jyh77ypJkh37Wp7VGRVwJLN",
  "key9": "4LBzJVgcMt4xiSQVFQ9egcXUjFm3ybSgCufAk1iNx7kdsVnVSt66S5Q9v2vfL1udPyBH5tmFUtCn3nv3i5Tqoreg",
  "key10": "5RLUyn1Jv4aHetaguQozAuxMJShn6L52s1J1PbazThehmfqmdt48QQsuttCMfhKoxqosyuVazHyJ3i8rLGbhTQof",
  "key11": "Ca4Zz8VNZj593LyDSzxmARagWW2pRSfcKLJYjDRxMxMFavDTKq7mLsYg2ie67ezE5Q4XGqVaJB7N5BV5sfcbT3K",
  "key12": "5MPvg7DCdUdu1ViPsPCk3UnJEMAYSMNYzzvBoDkrEJd6yxD6jEDa6fFwFBLbdC773XE47CcQ1LLguEtxJs32XWKD",
  "key13": "2mG2Hb9TqopXBivToZ2z7URQzpnTdDMaYuBcAXEZDZLiW4dQ6kmEAUBAqxC1sWYawh7atg3KVgVnsdV7pJUBqFWZ",
  "key14": "3j1gVAskDmnNhzJkwAn2f8KQFFqZ4dhuDFWuXUbCXJEKTnxjxKNEfKTWp9eeNVtboGvofrbjzCvYrVr88K9KtaFc",
  "key15": "4metUuJKcYJ6Xa6bjkmHvrK6ZPgEX3RWNJJGRrJv8dPgnPhFA7jHjqPpWwiKXRr3dVEj3BoEALHPrbhbCDwxh7GP",
  "key16": "2kcXUcAhapd7RXW7zo3rXdseT6DMCojUvicZRb4aMn5niimiTKYZ5YpKtUrG9BrfLVmzNDCgXgGU12gWBHJT7796",
  "key17": "k4ZX9muM27nrHtriQMJU91AAsVQ1uz18icwCue6rBjirx1QWZaCMqvjzkryDxMmseb4og7VWMHHwUNy6FMSTiVB",
  "key18": "2frqcvdAteej42Gve1MfLcHE9GJ7KSUwejBnaDsyF6wB6vnBwhpLZH3rgxKdDoYKZJkgqX86iAjg6C3j2dLbb75K",
  "key19": "UveGJLenVQKYZCao9rKCaMLAe1VDFNCkGHpVterJz4ZFCFSbz7NNRHuJjmVByfNUUQbZ5p6JE2TZHYnr2aPXvMc",
  "key20": "41JRyfnz3p2DageSD8JDwdqksYiZqYp1qiUeYAf6BLVqc5GG8CpzQVTA2oVMW2QQHKdRbAeMXR4UEXtd6fnMv3uG",
  "key21": "4tMNSER3xqHhX1WDjkzneTsdzXHnJmRcQPMknzMe34yXJgH315WVuvv9hNaLPmic1XJEi1nS45FhiFchtJswPEjm",
  "key22": "4CoreJ3BneGqgpZykQvJHcoNC4bGYqjjVBv7Rn6f3AuNzUA74oax9zwS2oU9dZ9e4AUZRfZJauU2pwpBUCjCuSQ2",
  "key23": "4WxNhpSPwCwKdN67qjdE7qsiAEfYM7XRrzF3KhFB8SGaubb4fdK44QukJPs4zQtd16wFVHveAmzuPxW8b8uoPNfF",
  "key24": "3Ak1PWGd4sUmvDTZxUwigNWGmYyNnVLyxD6ypBvwJzZ7YpjwbA7BFCo7JCnSw27eedrbTLvhvmXhhG7dezRGe36c",
  "key25": "3WY7nGcaf7mZebUZFdpCqVjCX7NQZZzXddKFXbfsAFAByysHVH6QgDnEtqAMyw7GRLuz3vox64Fv2Fpx526Mm58K",
  "key26": "DyL7yqYoXjzyZx7TjUEed3fhbq14iVEiDM8LT5wzsDaD59nJUrpedqjZ9bq1E7xUQaUmHdEqQuJkBUmwMP4hNwn",
  "key27": "2gHSUkbyLv43EcANNZwyerV2nLvvkkTtLPDCVjwmwHVTua5xwU6osSxrEnNtwiJgn64K6gQQP1K3HP2T2zVGtmrS",
  "key28": "3uQHvRNKXjKP6x5zkLzAuWdoLQsZWWfUVcZhms1Vvu3PvYgN2Sm2wWLGjLmBZbvHtDmRM6DnJuf9zWJH4Xcv7gmH",
  "key29": "3nhvfRee8D3SGDN5ZqtPzBwe7fVn6FDTyQa4eqo2k8n4cxUftuE8xGWcaVuhvcNTuDgDwJMiW28vMqYNn9xfBcxZ",
  "key30": "4vURDMzvaD1gTQy2f6ufsQXL39E8P2hi6zNzzgKNdb3EKnSqBQLVuQzfEt8fzABHMaZGdMjhAtSnw4H9cpbzvcYA",
  "key31": "ExGxEvhSWvm3V2qkiW46eJPTRrzcMRbz3z94FZfuYRVmJxVqKN6biMmfWidgbBiTbHWCnVJSsX66jy6m5ikpnct",
  "key32": "3W9dxfcsGWt7Af4X5UUwxWQbVCeNTysvX7Lds3Rh54ebfyfYcuELtapDkCgrZim1jBzk9S52M9N6s3Hmd2RDmJUa",
  "key33": "4AtbPFEqqyasheimrNQpL4qpgPQWqM3Veso1GHzEfYoR4q2bhX8cdGNpCjaTPfcGARrpHVrMr9WjLpb1eaDzG9Gk",
  "key34": "2JnrESCGN1x19UzD7tk56ecMMD3Et4uT5JUd1rx6m6LvRoXfuF44PSR5h9ER22q2PhCDpcvuToarsWZpaPxtXTtw",
  "key35": "F79DDmQcfY3WyZJhqVHh7HghUc6D2WLREypNKMZvWCqzp6mmsTpT18tXa1gcrqA9ZP6vtKnHPXSeGUSNBDWv7oF",
  "key36": "4vKsHS1vgt6GpozwfUHRQ7mNs1unYb2xhTA4ZmZxeoqnStR5XZaNV4Wiby7EjXy7qSicTySpDCiHJVJiDmo8A5hv",
  "key37": "2gYS3fmAvy7SF3Upg8M9oERXFpHMRU6G8goEX4Gr7DhRsZdCCFbUSwqfzb4ADeXS97Xc9vY6ujkWV5QFwBhfERrc",
  "key38": "2itBniBFEqbYomD3BsG4xpW85HA58xa5EU1xQLi76agmQxuW1TfmriX8E7fgmVvshHc25x3VScod92nK6aUiqSZU",
  "key39": "39d36NshhPDQj6PDs3RciBNgWR4TkuzGgeBiCGgayHprDCDFxXfkTdPSKmdSajBtDyQC2dJFc7RXuE5dBz9YP3sE",
  "key40": "5z2mGb2PfvA44f8K7TEthq5Rdx5MKH2daqrmBHStgWk4e6ANRrxPuPCmgEyo127wk1FvoGtVWAe47CXVSnqoGi3D",
  "key41": "2mCQFeRtB1KXLdiJ8Lg6mQi8gwvK1fpdgeqijwUYrL8nypU39tDFBx4LzUaFFwJCqq7hNCv2EFTzf7Zr72jnZbjz",
  "key42": "5bQsnmSTxvLxbpysy2prd69D7ySMUBYedTCJwz9ou8cRXmQYrgDEtfqTkVa9Ag7dcFEBCTEC5R75o1pBFc4WboEz",
  "key43": "4x1Ux2wu1oqf3AMtQkA3juzkwphTigAA9K4XeuAqiJMwCntRgLm76A9e6nEM3JFGR8Ahwit88kWJMXq8utmN3Co3",
  "key44": "3mh5FpPW3xRrefUmbPPERJDusapyPAvXNCBuhXRboHsVQeCGowzJRocMDQoivrdL8CDqjpRJy3c1rBnwEttX1nZp",
  "key45": "5WAoEu5roFPKJ8C8oJUu3SLSmdV78TTAJrMEr6ejTFX2tvyRapoBBemwKXVkCVHdq2FsCkVbHGjjrJ2mvZEyB2LV",
  "key46": "3e3H4rUEsH44HBP5VfYNmpZGiYNHZzyCqRnTeRA1BDjaZujRTVEQEz4yzT7RyagUfZvCE7Vd7LkVkg8VzHPgLhEB",
  "key47": "SXJJDVL7pA574KAMXgYyWR5mFjBASm1c2ijKtmypQmMCxSRP5HCtuxwpGNFLGfrh94azFGhgMRu7H4wzpnKYC4o",
  "key48": "3EfAThpGmoRuvGeGbWRV4mfPkVyMLAbqL3YfPj8jAHcs4pEeKTx9mHxTdLNwaEpMQUCGb94VQNjpF1EJSXKsWpwK",
  "key49": "3JFMivbnjoWHaSzruoqvZvxr3wgH3E5BgJ7QNYWo74NrFmGWdRjn1A7NfzZovmXMeDxw88ksVp1UnEwweZ6fdswc"
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
