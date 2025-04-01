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
    "vFrnuPFrobgCH2YCVgNumqRbcWC9TymmE26nbNpJTSd4ws8Zn651kxaYC4sZKFkauZt6sod3cisgnGxhtz7qQJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33nKHh64J8y5KEprdp972VFf3PhT9PVJPYgmoe9qvDchz7gpZYbvZ3mfSWuNVTYMwXqESECzPVn89cjoE4njo4GC",
  "key1": "3tU2HQuiphiNGdEWCe7YifEAW7XZgwVh3QWMinRhgqywonMCvmBXqK5Ut4oVTMk64ZoHyrHmNiV8XKZyMowh1RRS",
  "key2": "5B2Mw8StVrN6WA6TiNHXA3pCVC5jYxT7G6otnksGRNcBSyjEdq1Zie2zqTA2ARB59w8HaehX4ngmHug7CQYpaLyt",
  "key3": "3t5SJY1sJooszg4rQMzgWYxLNbS2Jx9NhuxqTGeh6pF2zdrzEjufaPtWwbqeUFNiLeFPBShXEse1r3tBVMTbFKh",
  "key4": "5sHbCtMFZgg3uD2ZAeY8yXJmACryuK8asVvxfUQLaksdipqQ3EeWJ1cwo2etcXdb1DxkVCAL6Zy4G43pa1Hg3Zji",
  "key5": "3v7z6NSfxwVg3nDDx8LgT4H4hGmNCF7hhnk3Twhb6ytH4dMi4ieiPqZLR4U6yHibPRknsdK2xpdKy4qhqFh4A62J",
  "key6": "5NYUKWvGUPVP1CtLALm6SBHnpBdY44vhyrrqoAB1ypTWzbWfX6cDvwE3X5FiGzwWd1UCppEqc6zb2RARuHXtzXJU",
  "key7": "62WntszSuHUnjjgfJmL46qLQ2ymCwkGPiMZGr4wVaA3Zc5Ji7e8ov551DXmeyxrw787HiELb4hpKLwoWsANqi8Mo",
  "key8": "4HvPVV6f5mpuRqjY3FQtT6KbjPTwN5521FjNUZPaqSvtDcevJogRJSqLU7sau55FCKFtRm7yY7iJtrFfsd46viGo",
  "key9": "BwBUtFUKTAuF6VPeL9RQo8XTxufTD3fpfgcjBLQZq3Pog1bHbfjWc2pmwFaCgSuBWpVmfVQDBoWZDXMeyXjKJnt",
  "key10": "2YKMkgiGfSbAftomhPPdZZ5inWtkpn6HSTFUYdNcp25kLxCpQDYo35DMkVezcioZP44CV4zmoBnnJMDBq6kC4Aw6",
  "key11": "4ugzXzirvshJpxqAemAGPpUBufCBaeQw7mJUJ9gC5kdesRG9GEfKc5kZqyFRgHrsoURu13ZwedcT3xmaNGz64eKh",
  "key12": "DVbYmgwJEZiRCuLfnjqabcrzRJ9XZotdrdajMCPjunYBqybVPapvZcDJEfYeFchBB98YEv4f9wWDBRXyqmjZ2MC",
  "key13": "h9qwAX55tBVhAKzF7aAfLga8tRDQj14DVEv9Nhaj7J7vkiL8TaNoVbisWn8eweHHJ9ZBdHyDjLa9MGwa26N3EMh",
  "key14": "4xV7cN66iWYDNBk4qzmSWW1HxT1vdXBMEzc1bHLtzpj5jugXBDZvSYvFMHjW5tEp3sThDZjqpPQn9CShMNobxKYZ",
  "key15": "2j7sBx3EF1Xhjxhjk9Px6Pm6y1CfbrRSiZtufcT2XmMLSubCJkWm8C8wNPQkM1zRdGokaq2L5egB5dN1qowu3WJV",
  "key16": "7zsBSraabW1eckff5bU9KZLkoYMyMjCh3qV5DKrWhqC1FxJaNCQoeej6hFc2KzB1G1tnUDcuccNejHeSLPtkpiJ",
  "key17": "2NQFLfAd6JZCCJT972vhXVNcMTRZ68L4pamsJbtXmdbZHfT2JAGiuNVSg2a7zBA2fQD5YcuUVPTK7qFfFdzFJuGJ",
  "key18": "515aLGYvPYyeDWtPa3AntkPAHM2E4szdrwLGJUooChKgVsmVEyA9T5rXpGwJHvn3jWyifJvnecRVX6VradSEw9Pk",
  "key19": "5TEB2NKVrXsaisbprf1LPd5MCH6ZeXfwEE39yA5vcjYB3gvhccNXfRGeu6E4h5jf1W2Vs4QeXvbSsi2vasnkhAkV",
  "key20": "2B18yodkagKRogkn7t3yv4DaEZ7VQGXYR2GRHSwRgMUg6A5jz3pg734CbzXwEwXFu8FGimmc8necSYW4BPz7Upw1",
  "key21": "3zeBMoAZjJAKN3K7fKpbVJYpG62TZNmapLmEuRWj3nDSbTcDHszSCQjMqjEXGzRwUSKz89vFHvZWeMguUBKPLd9n",
  "key22": "5MJt41otE6eftCKBoydQWEjnbq34tXjVMMvW7666RmscaQRWmjiF1ZBBphsbD3tXANnys6rNzP7P8jvJnN7UgySz",
  "key23": "4WzLh9EtjCnRpE8vkpV5zYCDJKGHXNftkB7LYCd6AuU3LAHu4WT7T5rc7N186LTjEMcyL13Rsucbh28d92hjczax",
  "key24": "36qobSbg53F2MXHzAk4fxkzHagCArsrqdPMn6Lv3jWutDAwcCMY2jThtxD6uWUhYBrWtpJnruzpAHygTEvHQ5ogy",
  "key25": "3o4eCvcABZ4iKa9AYKmWShGNgknFtf7wM9kLHkeMb38kSaEzDvoCN9gNuPtRJyuC6quAkKvJ9xffSi1iC3jsrQD7",
  "key26": "22YPD8FaTrSgJZZ8sgi2U5Q9SJwhw2qEgVay29T5qkP9eR877JadutKSafXQBXtAzR4N4cAQFLKU8U1MZiZd3Dfk",
  "key27": "ZvJPFLDqvc4Vfirh4jNquK9bmB73cTmiM8ttSAUYAgwCx8fhQXq1qBiQ1ndEZxGqZkYWFmc9EHf8PPsFANi2XFu",
  "key28": "2bwbQQSw6sum5Z3q23xSEDbnpmvaJT83uXsFM3znwBJTgwaxbtRVDfTducAxyfSvGhqry58vCM6EtsGKcQG3nHJT",
  "key29": "6sYtAhv8ykmUk5Kyx7mbAxXHMzefLFWQYnTvddkGiq3KbtCztXdBdQYJHGjRHhEHDjHrhF6hRjkNC61We5LfZiz",
  "key30": "4sdkNFRAp4SLY35vRwPciqDx2KN9aaSnRjurQNdRGK5uPP6C88ZjR8UwEDawszjNqynAvn9DJVvJk7x4EELjmMcS",
  "key31": "5tLbfNb2BnAGFGfr2kPhRof68KaAuBJKtGhuvYX83DmSHr4K3Ey6Bkr4rKCyHHrnMGirAdLck9rdoVuhYbmn17mg",
  "key32": "3nbsT3qm3AgNcrYNHfxBjEXcQf7yLQ4YyoVzrq3r4PxV8dxDFo2t5n3u35egBnKrMzUgafnyzADEG7dCo73rpTG8"
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
