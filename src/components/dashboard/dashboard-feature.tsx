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
    "27odSVCVbneNydgfhApYPcWMYFa9y2nE22xDdV5THjk3q5Hiu7aXrm9fGpxSLck2rvWRBJMmvPmD7LBPWGnE55Jo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vahof7Y9pe7JDw35Wq22r3394kEXB4R4Hxy3nMTxtRjJ5cU6D6xn7LNbP2ySXWPNWkmQMfQDVZshWi6k6kUFkLS",
  "key1": "5NfA3xCeDEbE89yZuqoZKpdjahGj7zWSjXtysmLG9vdKFFiEJaNnAYAD5uSkYP3HMb4pr4inPPC3MVS2WCXkgqme",
  "key2": "53jFedKNs1tm3NbQY5e9vjXZCvZbfiKn34d35vSFSv8GEXvZPcsFFHm1vfoRpX6aurVpEyb8j9ooFYN8hyEpR4Go",
  "key3": "3E1i19RzKKjYXpUKRoFe8XJgmadH5Mvw1UuJQgKRzx3aGgbsozqdsF7nFVtsy6ZVWg8dKmdUny8Z9DNVb1EoNLgA",
  "key4": "fV3a6KuS6j35Rqu16sdX7ag42EQsugdQg9hbXbiWYhRFmkGdm7ozUTnaDknrR11EgXn1jmzkoBwsuyx1D4AUUZK",
  "key5": "2iCifu1p5zLViiGW33Z5dqfSM5ZUZjhxH8mVzPYRMjbJmZ952JnE7L7RSDL89EcbeqfxMNP7C7FQJW5tXKHunE8q",
  "key6": "29U2EsLuovGc2M23bk6ZGvp9UW4hvUjP8SSgQHPPLqipgeKYntwP9LZg7p66uBBP3w5wuK62EKiumHpqYVx1t5Kg",
  "key7": "3EgBLeZnm5nhXkyoq6tFVLu1yr3hYYw4j3AgZzED2bmAsgzMkpsU2efvP82jx2pkeZTfDm8dTRgS2fEANMtw4wbk",
  "key8": "4EXiL95b4tJEaRGfRQHktCKwMi8sXm89E87RPK7NLtqTSWGBPheX75y9Ytwi7wU6SSNocduJAHK7AYm3a6pSpysQ",
  "key9": "2SQ5wTwe3yCwzL1NEhKyDnVM5Dqu4csRmX5pFnU7TqA9jDJJJyu6gPusi8zTZhoscWFowZMaezYH2vaB1S3JK8Ei",
  "key10": "4t4cqaAkrh6dTx3YEGjzbxmJ8wkW56nroMCZKtbwkCcC44x6HMHmMQqdWt1yFDyhprLHJYBJ9eQkTxKDKxPeEmut",
  "key11": "3LiHCqD7jmjYdJ2MJ1YyK8yoJ5ANRj6eNUB3zQmzzC7j6D7WG9yEQ6e7L2H7WjNnZPTVvqQybwRji8PATN1V2Uvc",
  "key12": "3uQvnP956TAryEWbiqdAcLvkMFs4Lw4rFeeNSYUYsFUPQY7P4JuTGS1FrmT9mQVNudScmk9txV5H1kgeKRxY7Kat",
  "key13": "3TqChodJssgExkHtG2Ckktrm9u7Tbdh3eyfSRLVVy6D6ZKmpo8sQj5jnCgFaXtqSHHJ2aQWmbVNJB7h3d8ntxgxX",
  "key14": "4ormHPG7tF7qqdcjCyqRCUjcT5UEPZPpHuGWzWdqqeyKwArLCDNpjDxeSac57YijPJukqNAXYuzdLsLCqKLdAjaY",
  "key15": "5jcYFvuEUH1oa1fthntksNAHSZWBUDJTpfkj94d4CDML7qnSk8H9TpvSS4zazjv1MUBtN5jMZBqCPoyo9SvynfS4",
  "key16": "5wpRq1wTekjSuEkKDYLYi2tu6MwhSewAjwZb8enLN5FTfuKNS5ueHBqmnLi8FUJXik6p8kAq6PSwsYYsxoVyUtDw",
  "key17": "5m41RWoNko4bocERbRAKvx7WB3Ff3TRvznRD52XGqpZ9SCHp4UTsjrNmr6s9qobcXEZVKEXH3SWHyMcDrzN28jyA",
  "key18": "42tvgKNbFtRdGBCzePBgqvMBLynMHuhFF43Sny5n2UnKmErS68E5hF7etSrCsHN2HRuwBaDZCbXMBmPrVrEBsKj2",
  "key19": "w9s1VNpb242QCihGqzqsYUWmpnhuSnAR2QKik5xEw8v6eh9parLPiC3Vm3c5JP8D83hZqHnvrsk4pTiku3EtzxU",
  "key20": "2ABBtS4vEEM3ryDYxfmj3b2pbYtXNkiYHM2X48JqRfADEwEBRvVru3fkhTz7PcRCaw35GgFshNDofBShHYnSJiX9",
  "key21": "5DucMXfhdhTctznxx1ETZFzET2orN4m4bzYtrKy8fJwj2o13QPj85MdPhehLTpupE1wHkD8To4GU6tyvug2ujobZ",
  "key22": "qn1rbQw239jWiop6ERRgmHWHkF2UmkvhEENxjuVhxuAEQPmachafUpc1bLGCywYvBmRpxHmUyRnBTTLZWXHGjGS",
  "key23": "2HKgpGEyDrJdi1E8zHTVmtr2ro8R2aRgarTcDFYizmfn3FwJ4v9BBfLJAc1vQxoa37cuPtUXcceSh6x9TN6wUoW",
  "key24": "UGRiRsudcpcWt1HECfoEXZcZg1cSqUSa4aFGwCrn9qjwujuygb6mmaTuJz1tcMAk3QNdyhW2MH1xzhYq3Tq6jr9",
  "key25": "4CDd82QvraJ1zQz69eccvUybDtiRwLFPbf1uSAfHcuHZ9Le6ev1VcwqTCzmvmHSQ5g81wTJteeFF8pzZ3qz4DtvH",
  "key26": "5Qb25zAtwRwPNa6bf3WVB3mdUeD3Aqm1WKTQDYeFDPKxfUARUe48XMMoZj8whi59dAzuKLLgehUcmUbEFNfURPHR"
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
