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
    "33h5ZpWAfjtmPRJecsZGWUViaTssXRDd8fmY7QMAr4VzDuSGFG3VYUmxD2Pxw15uENQV96PYNgsqHeNiAK9TcAQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35mfa9AA8Hh2EGF8fD8YDKQTvhXr9xkdoXTHiQz9iDxsK9TVV3e3MMKh9nH1qttsgMwhvrjEdCBpvavamcKS7cTi",
  "key1": "ypQAKGogHq8gMNj6Tb7LnNjrfvLY6gsMoGns1xmBMZ22HHMA5ZMU2ohsfeUdjUj9vdCgpzoiayMQxtLw1T5gni5",
  "key2": "4VGozaGFPDNf5Amb4Etwpw5yY6CyKWhT6YzwSRJyvrTVoxVeeJtgmSVTv5dSgAdVgYtiHpYARbBVUvjjesmyzL4n",
  "key3": "2cgJYQrXutEY6xLKcLgi4PRZJZn8iTXCtxodjFLPaCaTjdKcuK8SPHf4gsG8iYUNCBWtebNdsXYDtgWBnR2KXxhr",
  "key4": "31DLfCSwAL32sViY31py5SdnFxAijDgwbCYbsrznVAdMFbzXu9YDuz2aNBZ16D7EadAUFqGgo2LcY1aSKFz7VaMf",
  "key5": "YUc2f1w6JCgEbXSWqX3vnpgAEUhgKgNadgtaxcsRqnW1oFTjcRGNe9cYut5vPFXEz6QWEuShfosbsevx49Cf1yj",
  "key6": "5LdbePX8v5ZXc8TV1rdoWFHkCWKXsJiq28X9yJKqV56wQPLrqa7hohLgitvstk5Az1aw7AJnQhi2mKX4t8yprcH",
  "key7": "33r4L8E7ezgabYBdCT18Yy5jiy7EJN3FFpkyKcm9oeAFx3txmp8NgHbb8vA43QQD8bfSuJk4KTuR6CTTtE77JD41",
  "key8": "56DFB6NGmJbp7ib4ZGZ1q5joPdhnWxyCh4eSVPNpDDGxuMZ8SGGXGVp48EoRXiPmsiwnM4v6MS19JN6m1fdLYJ5c",
  "key9": "4k77wi2ZdZ8JtNuBPcXogiWsTaMwoYkkzTWgfNEefy2yg3e13je2JptGAdpsWszW9hWjULsq1hCpXyJ7pwSPist",
  "key10": "4tfh7EnesDyoYAfN1jP77YreDLuuUARoTrwss37pogCBYM7iVNkPbaBjkMiiAc2SZAFpCLe1ftbVTvG2F2F3hDKB",
  "key11": "Gkvh68CFTcSC9dmedxC79JtCeippZvwSRe6eHaBznAXXBJTqWVyi3toCvbhSK2TRf1pTCAzu9rJmxECYEwGmSx6",
  "key12": "5QWfhWWQn3njFogjg1BcbTgqBS28hhjUDJng1GwipGoaqitu75DgT7DBop8xCBaDehWrTfJK17jdWqXhqvbMDJV7",
  "key13": "3gyDom2sEqeserJKNnwK39ez3nh7PZTRNUoauHGQoNx35xdZNUgcgXzpReVmGNuwEbTdUaguBxhxYKDR7tNKbhMX",
  "key14": "23F3ihQGvFSoQJTpp9gNvcgFw2pgp4eMV1tsugjTBNQRNPpgAcVXKa821UeDovDASDC5Tcx1iitps46v3jXHFVLy",
  "key15": "5rdnPiGyyCnkYpTny3ou8pccq4pAqNeXVkURhbKTx3H78CKpbFUwzqMRomAnZ4spZqYM6wF999q8GQiAW4qkrGpa",
  "key16": "NRZhBh6q12DxCUa8qhQjFjVXhDkauAdkhbePh9AE86gzEbLDpz8N23NjsiwA27RAcG3UAmN7G8V5vp5j7A8kRbH",
  "key17": "225NTyRUBBSEyZuTGv8XcfLZh7Hqd9uACfw8BNnULtGv6eQHTRe74UM2v1GJ6jKyCGVNru399DwfQZX7ugXwPowm",
  "key18": "2QfLWJrb43XHC5qWhw8dgC68bpeKCdEg6DaygTFvwaLHPo72Lw5TyQ8HuoUHntDFHyMbudwj6uRU67HHj3ZNEMFM",
  "key19": "3yQA8GEGehmAVVzEKh5xxkSrk8csMudU2oCHqaktqBLCMjgUaMdnmxk8h62LbWs4C48xJ4bAc464BykgyZVzzr9n",
  "key20": "4WJrZPUVonCtcDmkfUqGYYqpVfY7edpS5vz621GP3a7AdHnSCafiuUqD9qZBndxc95kzxDZCSddBmLbfLgrJ9Wsp",
  "key21": "2bBAC98Zx8inTpxmYMyQaXfVX1XCV7hDKj2tHy6Ti39TkhaJv1sRKSV1xKHz8NaK17f2MjsGEPZ772pWUs89YK4J",
  "key22": "52dKnQyAWYW74pKysD9iaXaDBGVKC6UP5btpidsGNxKgMgL9TkMMfuRasiQQPtzjT4T97Jo8vJboH6AAdhKH71fG",
  "key23": "52WVsaT3xTKkapTT3XXpFFksTn8gzLfAwhNxDtfgkh8JHab1LJTKgkcckXQR811FNN34LemgQEaBB94fni8GNS72",
  "key24": "4kn25BVxeodgVNnSRvwDd8EnNjSVbk3JPS8zkDLko4ukkFwfyPJvxD92zpSyo9rTj8yHdhjpfcN6736ArgMzd53h",
  "key25": "2zU5gTtUcXw91kjdsmEbh9epx7fTQHwM7M5DSmRFTwPhmJr8Ah6pkXaCNPnE2rVAdBF2kx5LAPAq3oNFNnX58Det",
  "key26": "4G73W2QAfKyRUQrtXnQ6hBK5T8Aw6SJD2yZmr8wgbbRFfhgTTncHdwx2Mp4FDXnmct6P7o4v4wGCUdbSwQ2xKKtC",
  "key27": "7fTtLXky9k1UWWy5KeyxCmaVxrUaCJ56SZkPECcsLNeA1QYELNCTa5iNCdcYy4xu1t9bsEBQdzQRjLwtsnRWPjX",
  "key28": "X5vs6hsZJrvrrwQXpBjmdK9VHR2Srpj2AFN5T3dUwKXG8fYSaSxTRUtZASqgxseMsMuxnTtSJ89dsB6Y7Um5Szd"
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
