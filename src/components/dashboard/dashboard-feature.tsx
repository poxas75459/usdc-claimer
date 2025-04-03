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
    "5VvrJwAdHsTH2YqsJybmV43xPnuXNGQfEsJHS5hF3dYpPk4WwNMG8FrpxzaEzBnVTf21a41LcLRce2qWQo2jhywM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PqmusB4YTjcraueuCJrxBwJ2ufir1r2nk3enaeWufcZAdhhzTaG4jF8JJaSXTurmQoHfwyUNzqZ16mKPgPn6nt1",
  "key1": "67PFhGW2fLiiz7NuK2U9EBnxAuNo26zKFWrmepCJgi3mjHaQy9B9aAsqW8V8UiZhptTucuVpnCVjKo9ZHNwxP37v",
  "key2": "2iF2uDD8UgQ76ETa9AL1cmRSvsNMKccLo7SiRcXLyvjitkiAWwhQqDuuQSdd3tmyouRfZg2W4uTnzgd5x6t28e43",
  "key3": "5UeJYqtXnBn5cJQQFppZ2cs2cXmYaLQbCrAYVk47DsanHtx4LtRCPQMzGqQSX9CvUwdaTBfoWL7oiWUcW5PyUsrx",
  "key4": "5zZSsouxxoj9HhA8hEVn2dTPPyaDVDSVMQs8oTpgW97za5KgCtwQ3DKuGPXwfwbqiyG6GA3eqbc1Q3JFSBmNDBHB",
  "key5": "5mCojDC4rgGYLAFYRAbcnbpwsuW1dEm7RZwun1hMUPADu4w3nzox77oGV8Tizijgp9eYD6hDwvGQ4fUPkKQVYgbV",
  "key6": "4uEnqfVY6ByC2DHgGLnVyd4DZvPmYRzyEoSzX9VQ4VY3jqhd1xeUXaJQrgTYZo8gXFB8RT26K1skTPQdywDt2C8n",
  "key7": "Ev5wQXqx4MmC26NdvWw9GcSbt4q2xekHbPX38LERxFtuv9wU8N1Gne8CTgw4yXHT5RinFXDaB7fs48dtnfSFHs5",
  "key8": "4U16kyswmkuJhdG8TxfoqZy6HnbXJHob9P1m5PQgjoMY8FkagyozVEN1h5s1PVGTN8hAu9mCu8xzkNGTGNqv1q1h",
  "key9": "2ZK1gUBCPtbVxUHMGXYE6yWj3vygn12LLkJN2n3QA5SKCiRj2NmXLNr4QVMPPmjLzW2cou6WLgvWfixTruX42Bmq",
  "key10": "4qj7ZU4RcT5xD2xDixPbpAxvV26Qkkh7nMbRQZw52Cwjn6rcAJ8dy46KiHocBcFutyr1ELNd9m1QNarf7X5drwXE",
  "key11": "2becwm5n272ccaPs3HZFYnerL3aWKwD8EAJ1CZMtyyphpjNVUfVXT43t6PqN38a6eBkgxmbCbcMYWf6vpRhSw4hb",
  "key12": "4bUNKYimWmB5J25umxVmgCn1Pk5CHXkKNYfsAznvFLrhwDT4wfA4fCwcYKNLvGtNJNEc7V4FhBqjgsVioEA6A93M",
  "key13": "4GSwbXk8Xho12pFMtFtzLhe2oMnX1QWmjQc2uHbzi1UEGXLWucKnQknHzHxRpdLanRGsGzQgtFHcGEyTbpeMyXXV",
  "key14": "5WyNc9seCH9fURhUsJ8stCE9NS6yTZ6n5powEYYcj77UZsmpzXj8eqGHS6PeVa1meE3nggy94WPW74FeKn95G6iW",
  "key15": "5SZpV5FW4gxaoQtT3YPZ45NN3L8cfF5hiH8Z7WwyAwcszJCJjGB7dKYUCjqmEH4U9W8bU98PYtvgKrFogsspZVW7",
  "key16": "TpHg3wVkTFiMrudKD4wgvq3RnQFYZgGP6TUDMmRUdi9iPi1Jmtn1GAsoGtrp1amWD4c6iHiay4Gfg6quuMnDsrP",
  "key17": "2kjVXopBC7no13KYujfKA1AKVQ4ZP43HLq4j2hBPozeBL3FFsdK9SHQJ52fBGFxk3vxdPTLhpsqZ79BHnTxtgC4o",
  "key18": "2hDZXpmf8nHLz9tpHvcZpjwWBvHExSzkETdxm6ypWmuPAGYK4JgwCXHP1ry4EdmFPYhxsT2LXhdLxBt4T68Tdb2V",
  "key19": "2zYcaxYASciENy9Nnm5fsAd5H8paLDaaJfko9CLN4T5WmJKga4G29sYf3tErVCuZZ56X9KmrXehSzt6pXMpDyBsA",
  "key20": "Kvx3AjtptZYNpRgQPNvqggqWDyt7CmT5ZZMvqRjUCFRF4n2GGzGd6ZnKc4dmVGv1EJns3K8hdzfezLxPxVipbqv",
  "key21": "63kujer5bo9mavXSKp4jE7EgDaTGm3us8WyGgW8rEmeMT66CLJfsgLGHeqETLua26radHyCTVqhtZMN6XYEZzv1u",
  "key22": "665vLFZGjA3Pai5UdwDmREy1i8DBUZjENrjhUbzycb5Q4kjit9Yosz57nrm9rYq9bEkvrYk3H5guw1ETPhgmbEkR",
  "key23": "5Pk1zykhiPgx1Pnk7NMKymQUeYvRVPSRw6GjosKmvofi4pm2SbZQ6rasoREmSwMEV8uTDv9mUm9gi6oe7g6wb9vu",
  "key24": "4twPFxJj4JSdNsHnzEeZcEp2VGo2f5qaX6SaMmVkrLLmWnqS8XkXSdUSbSmpXg8dazp2BFcfdnSKsK7UxygdTfad",
  "key25": "3XvS6iCpyLQhaiSxSW7G4XmjkYHjjYPYg8yv7HYRqoA3wXEi7uH44KZs4tQK5iFqMdqcKreQzfPDcZ8J8ScskH9Q"
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
