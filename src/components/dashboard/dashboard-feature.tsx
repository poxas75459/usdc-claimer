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
    "45UbyZeSWcyzZpuR9nPyTcGDHMemUa4dFxCtWtiuKMf5Nm9yNB64yfuttncY5TrpDADxu5zu742vcuJzVWBTCdat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q7KmA5enWT8DWq83p1um85MxzNAKN44UHT7ujsBobc5wUGdD5AgdA8Ryy7Q1Sq2vp2eThQ86f7DqFHocqxT5GHg",
  "key1": "43Nep6Fua5gYi1zdded9pywMeLvc3T9FLcBPM8WUc1pom9RBm8tuxC44RkMRMth2oJhHqu2eMsGuV47d6U1cXgqr",
  "key2": "NknZrfaWZmSjuh4DZVo5apJRYqvPUMLNMZ5wSysshov7K8xcqY6PLd45ndtmWqfWnpk5vqAHJJdPezkv33ZofSH",
  "key3": "GmNfEbMLM7tzyb3BJDoYrv6TP5etcfC7bmpADCzHCQXLtyUQv2XdtpKSATGBk7fYoCx4P4A8HhzQzyPyUmTMnP4",
  "key4": "4yZyyTd1FamTZnoJ8XipryRpJfiBsr2q6XtM1T7c8MEWTfe5gq5e6yZFwa3RvkFSArcGqHkyoRbKUBZZfZa2ir18",
  "key5": "4gpMQVQNBjixBn2ViaCAndd8sxjYfty9Lti7ikFxJkGXAHpFD8d7khwowoUuAZ5k1QT1ZRaGFTNb2pNVWRZnZ1UM",
  "key6": "S21Q4sM7MaLpru74SfmH7Y5UxKTDoJ88vx9twBErfEbCUEyfVyrXXxk6KCajoxbCMr8UY38mQEXVVx5JJpJy6Jo",
  "key7": "LY26JDZGitLyTGEGa6a9mK5zvXL9U2W4J8xkviik82fjoBuJytuizna5CaMTZW4XJzLcxvYKE6eRdm1hyfzgSDA",
  "key8": "4U9zTn29ugAPNAGXMu2rxkQy1t3RWibQpoib15YP51MCuEvhU7kT1Jn3Wf6GaZAJxAXSMSbNJjvmX3d68qmou6g4",
  "key9": "5Qh36KGuL81MBbCDfDKb88NujnCo61EQbEiK1hHTEvSzYSeN181Y25DrUsEA8yjZG6sxUTm9ZtrT1C4XZrKr3KXw",
  "key10": "3uUELt6brXaAD9dYyEgK2PssZCgsiVsiKXXAUy3HNeXW9joE8Jb3dSbRH45Y4m1F4CW7YRa29jcmzZVo7B4NrB3u",
  "key11": "2pzfXUNa868nVAGxtFofAKmGym9NfbLGx4UctvKrthw2DPWpERfwVzxboNSAqxqzQMDtJS3DXy9rtdV5DHj22Zok",
  "key12": "4opB1JU3WowGrEkFNvkAiyayt7poyqKYMLVjZzEwkQGzdaXpxhaLegYRirXUeVPJoXQY3byZvLtikGzc27fquVuo",
  "key13": "43KpbWPvQCJyWiQbBuren4ETTiL2hCJjQQE942GhFJAb5zqRPWBGje1dqGi9Hw5PGTVfehsk7rhjduxZNFzVei3p",
  "key14": "5ryYJYy4PvfFNJnr4AzTyhKcJL8JpUanc1KsqBsqKSqZmTHF5NdEzsAm1oyxHN8zmLn4aD2wuWpG67hriYur4WdQ",
  "key15": "4Zpq5P9NH7ZnTK3eAsLAcYRR46tTeQW97hJ72rGiD3pq4tEBNDPhJxc1pvVEWPoCpcDFaz6Fi9MBQqX4hLNh246j",
  "key16": "3fMixw1LfpT6efd9siX6H56551e1BhwYrAfsmodLsZKNV8EKSLHFnD8UyTFVZTeLF6Jtk78GGbd9PU355UmTVEA3",
  "key17": "Q7rvUgnbv71Ave1WK9narBj62xxsERtXNKYk5Kz5H9ZW44DLEyZripSFV1QvwZgPkZV4pbWna2f3kqQ5n9kDKHR",
  "key18": "5KGvHTgKmu9n4cx2fR9vKnVRh9BDGfRFNR1QxBCGwT2yMik2kBZFesK7a7aaihNT83X4auHoR5TmjwuTAVN9ER7t",
  "key19": "R95p2qkGfEGGjk6ZkmA1kZa1oQqe8Ls5PWjseZC6PFXoitdAwdgSnX4hPXDaEFaSKhyou8V3xmia1QqmRzT4Cbp",
  "key20": "3oVmyhyg4nYZBsod3i3vHWGv7mzWre6moTcn5bVp7cszhMCzbm1PtomCP6GRbx8XcLgfMefhLPqUK8Pxp2Mx5Ccr",
  "key21": "U5WitNT3Ddco9ddx1ZjPnxYCPDzBUccPZ6Nv5cJdZBrTPTYbywfEungkg3v45nT95Shp4nE7cjRju6MsCRuyG6f",
  "key22": "2Thpbqz4PQNA11VVGxEm54NLMDYeCTmypRJJDtBAD1JEdpjHisSqLWwaVgC7H9mUBXZdh4Zj2n2fAo4V9UEqyyuG",
  "key23": "657dYKWomRGFoJZnohCbUdCmNvesiGnx9zj6msfqckh4W9TdWVs8Goaqvbcr7aRVv5A5bAAiY477d8Pd9fCFuXWv",
  "key24": "5CQRXxsS5GHBmS18ZSPfwjDtgyiUE3JqvMbo8dautGNdBfCXVESbXrtkTJpURUaDhdHd7sdEUVT9n1nRsy8vqFGD",
  "key25": "ydGoz6sYprehSgKhWRyxfDqzH6s27YN83XroVC77oRPM2B8wJQdJNGp8CGn3HUycmayYMNZnL76MeudJzUFQ23j",
  "key26": "4V6f3SUGqR1dFmE71ijy2uUgp3ju68gWTStvv53nNYHMWsbTtyCVFazw97hDLCr9w9tVD61f3vDHUqU9wUfxinm3",
  "key27": "3bfrsvrc8pok3sTRZ7Dxvf99XWRKFGDmfUeTSZ8cFKF2XTbLt4czrLSYsfQfQCqTP9TZ23RceK6SLpQfsRM69qFb"
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
