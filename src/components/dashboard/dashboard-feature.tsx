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
    "2VEUnUkRztcgnCJw2VeEJUrp9YmBwBLzns6fBXt9GFdL1mgiTwaAKFY8RLY7u3mDv8mWvfSsvqDwPEgYj7zUxs4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R7TmvPuPhVsvu7MYNFaYn5TjFTV44vodFuxXquQejnw7aHudbjqAegdYCD1kb3h9w6Dd4zw7SwumjkfEyc9D8ZU",
  "key1": "2teQdEeDmVch696jar1NgCKyUBptdpgUaMTpfMWvEjXevpPPLAMekhMRm5SXzqAiFBvfZNyvU6rY8gFNY1HBWhb1",
  "key2": "31zmt8xA5mY7LBcvH4vPV362EfFmU4yfhDnj8gtNE9Xf5TgJcYdufKAa9jmQN2uWoT574FY5zYBsZsVgv3bFMdhq",
  "key3": "5iFWv9gvekWrEdBG9t7Mhc6WPNkcfrGpxnP6GU9VPbq9zyLayEHuEuEubQkQ6GfFa2UemmKb74QUPFD8qT2koRMB",
  "key4": "2d1nF2vMW1zd5KaGYf4iDVzuvwjQ4SWR7qjqxZrRC4KTV8xkeHZCCGrnso9FwRwCcYNH3w2pnKwkPJrQmN7qDTxi",
  "key5": "3ZF3bLyym8Fes5W8MDLjAwDw8QfxiwfzDgruYRjwEWJiMPeqsSekiA43yEME2r2JfQCB2dj34xghg4Tj1QfUb5HA",
  "key6": "2yNzyrTYTcW6yxgyJTuK4PbzKPrapvZ776rwYNTbwZ49WP1JUD3D52p9RKk2r3qoDt1jrDqA8M87S3XMGYxihQL5",
  "key7": "3rZxKACt7mfsAiJJwgoPK91goD6X2RxEDrVxy7cbMvUdSEALH7GQrZWkCTZp9fDtXUHphKy4quRLPsBjpGusW6tJ",
  "key8": "5DBh87oX2dUnfPdDNszTguDGsh1qxnD6sQfK5vJjyr3uor46wB9xr79Kb3dgkZKXZb1DhSMGEt7GTroEEUuRrN3z",
  "key9": "qvWHiUNwmDvc6oXjPJgchazy3z235dJegwj1EZE7hR2opBS6Aedr2s4kpckh3hBxL6Q5yygU5cYMjwUqyFL2Ej9",
  "key10": "4zFM8F61CjxBYJrUg6kA4Cwz8o1xMPW9WSm5XmXiCnvzti6SCM99i9AdwjDd684AdnD3m94Xv3wZZtGFe7ABcxCx",
  "key11": "64hT1ktS6ciLzLcFde9mxVcmEzYP7irgjazePzos4rBfFSWHqShVfF5SF9TFdDLwew7sKNgfYycmLkuswt9UbsDJ",
  "key12": "5qx7XqVCML3wEaD8ppvR6pPsUcVwK26k8SrfXqXg76FC7Vhpx3faGG2hyK8UMETuuzfcqNCRdZX98fc8Qh9JLwmz",
  "key13": "5xAsChBdzw2oaFcDS4nwywTYTVymtGDHfuVXznpi3E4zsAZXoCMRerjxYRxP7fY9QU9yVbmK5NXvxLxuGDH1LT9Z",
  "key14": "4dz1UdqNXs2moQbUsKanzwKhZ31ez9aHtQvqZEUXt4v1HTFXLEnCHs5PEJT6VuNV9bpYWu8R6nBkRJn9mWzVdVA",
  "key15": "25XVBP9fFdTMeA9aVamNB6pjqyPUt1gx928RZNbGZ4ed6W6ogBBPvAyTtfF1VbdpUAF3aKvxqK2mBhdRFMTszgn9",
  "key16": "4x361UAYUqTSCeP9euxET1TAimk96rdbQXCicQu8RCPGCMyw74TDyJKfAa17TURWvD4AnSLmX5Gg8USCesqKFpG7",
  "key17": "kbUhRZmBZmHbEVeDoDbVmct36KCiSQxj2rEVrEuwCxHnEdxfBgLHNHKZr8Pc2MPupz6uQkp1QNgYkdnckziBdBG",
  "key18": "28GTcm1cqexS6EhYufd5EFdpdnEaoeqozKVUVjfXBP6Siq94xqKw3GK2LzmXDkWKnypc7GPduUoBQ4g7wGN2fret",
  "key19": "5YtLiWgKSve6EdZCsgPkdBx4Jxt5zW1CLhTGex92HLbZASKcnEwfFm6wMUW1pvkEQLmxPiWVAZPvZ3tGCC2yS8XX",
  "key20": "4kkk7cRiJq1D1bHSrukP3AwL1reJWQTRWXE4v7yuqkF5Yx2dcAjAwyaZYTjUdwBnDkQeLF4iRXapDkv5B13xh5r1",
  "key21": "4KPPiysBvFjTbQytR9FTojVZ41zjpQHEH4FhgPJmdmtPfPTBnrUmFyfJLLCpt2yQ8nyJrRsW21VNhPyZrUkpprVs",
  "key22": "3CTFV2fytohK33xJRJ1tdPZnReg5bE8HTpGwPvvRnZB6ZGY7587dBuWzX193epaAfZqpyM355qs69CoGuS4rVw4t",
  "key23": "AxWUGCXQ7KzrwoFkXtPwdMXjckc8m7ZbZYa53SZHF5jnDqtWArCqjJu5gxhDfkQ5brkjJVR3CrNurkEoEanQWKg",
  "key24": "h5RxAU95hzGic4ogGnkENbjpZtwG7WmwPUJ2A1YGzpfc7mB2JF9oG95MkDocaDmhZS1QfF3Dw1zLUqEtv1R6dbL",
  "key25": "3hVXgdbWzLZjmY77Cuz6uNJ8f7m1ap5gf7y8swaemRoFCEgFQzRj7MVcemTGExirGTH4mbRbbATBhncc1rpLFmzC",
  "key26": "3wfdrUSK2fRZB6VeFWCd6tbRAuFXUvuXkUemkMpDs2fs78xvTBvb16eKhWXwrrfmjGE5yzmjDWMk9NkQ6RaZVwCm",
  "key27": "2vJDBWMsmNoN9pkF6LDi2bkqSkpt3aZ1vddLn8QQsWguTFBCoDaQntVpTY4TQ1Dwq7zTCasxWvudFdMpyDujmUNb"
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
