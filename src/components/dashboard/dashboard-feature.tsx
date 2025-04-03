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
    "44u4oMksBnU98UyjyP6We5ZkeFHsbyAYpgEiMthLFvwGdSm56mj2GVtNRWbV4UWexQBjtDz5qB5CBqNgBUvKiT88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TrnSxtv3YaJLUuDWafEURA8TfHUkD46csXbt2MvuVLNpe1XEQxGdhRt1EoQMZDGwrgwLmQbjoAMqgsKai5C97P1",
  "key1": "BH8biXtQZjA1jNxiTvv7Z2iEYU5LS2QRgfZK5vs344SVuvQSwe6SGqepUYveE5TmLd6Eww9uG62RcGy11wLHb48",
  "key2": "3vaMAbkBsB3g2mh3RUNdubaWPdPggBvxPGHvmAGuWbcEZZMwnni2DMP1d4EqWNqRnQjoX9qJoZwFuK6ymAsrq21a",
  "key3": "5GMD3kU7fqpm7ZngVCr9wybwgGYez5fPBJxH5TPb8dMgGAvyKgvDXDnuUBMMYJNaHf6PjGSroQj1mheuzLiaV2io",
  "key4": "5WnZ7ECdvE3k3Z1Er15Lbu36SwHQtrMoeY5KUwvMJeJpGHddu8pp2ed8LJT3rSXYkZodDhnAJKzBkPc3PwJtYxng",
  "key5": "36gkAitpo8fi16c4Nx5EFL5UJb6EiZGCY9FUj9ZSW1bDAzsXUVxAuPYArP2VZCQUNcpqHoEAqBBAm5ogxyYxp8Ei",
  "key6": "66gHwv4KCce89igmabZisaWVfAmB4YVHKJeBEQ3RmbTHdxgH5zDeduvEL66J6dUxSunapVZx9C3mqJqSSEgaej7d",
  "key7": "4YRve3N4xqeu6xUGsePXFjdLbHWq18GY95CA9HJz2LrgNtfR9iSyEtnXbL1NxmbpcoVahhxbYrmXfEH4xfNH8nk",
  "key8": "2Y5TMPcbkzN2NoUKCKDzzzcy2pme1CxhcHFt6tg3G4LBGX6goVFua8H5ftiSsSAwJAJAuy5W5QaFDZtiMXa1a21r",
  "key9": "55TwDbTAtzY9rCRwLaMnjsF7AzzeNwpryvo2RuzmqgjzTQdMTT1jUCozhGtXAFFNAkkSzcTzteubrufTkpjegTcD",
  "key10": "2E5cZhk9ANJ79Q7hEPJd8VJCg4M49SHCDR8rjuqtf6tq7apBBvXrZC6NVNDTZ4M73xbhr9VRyZnU2ZgFey9Qir1V",
  "key11": "kfcjrVBATGYBmNEfWLE7s8a6RxVVE2NuMcJ3Z5CT3mFrHhydtwvb8BemG6zFfEGhR9LK1ufcLTYA3yTNN2KHnvr",
  "key12": "2JkAq4GwhYYo2bZtHJz4iRDtZ7AG4ypJ4kf6GcqoVrSuk8adYdBvu4frspribmVLFwAtaPYdgHQ5uVgdG7m2A4wJ",
  "key13": "2cz5wd8cZxjWwBqJFwxJJExuwWyA4rpaCfsVca2YKuaa8v664XUALyPQt9qzGoyH5wgaMXdFAV3xeT5myD2zMRBs",
  "key14": "47sfa8P4V2TxADBphTnxAyLcKomUjRvr4t4xeQcBeKtnSJm4UJo9eibE67CZNynkNtsSEar5S9uevDbn26x4ftM1",
  "key15": "2jRMpVkgGYuP26Z63jEBzyHyEHsC4C2gGyRkH1qb1XJ8o1nDg2ypqdJnbbAdbo7M4x3n6Ty4BZDGw45cZHjP1GjX",
  "key16": "2TpE5MzmFRkCx65fi25hqZ8puLdG5r5ajeZwhzaYCxHvzRzkmBEc79UzJGnECvevmrPdQqZsRSfGbmj3xCBLU6qh",
  "key17": "26H6CjmEqf5JD2FmeiZj7uYkQCsjFwBzGiJZF7p72DGDmbZ9dZ8dwoGq3P3yaLucXHGnyueS1Bf5W53N87utiq5Q",
  "key18": "2XuEYjkbVB5cZbC9LGuNXYyhxmbvM3rYYwL2rDdBWCCvZL2GmynRxfkmjfx1YQJzbw8yoLNmq2hjSdKgixV4Nsz6",
  "key19": "2C1gdEAPXqdAoQhaYbvf97MCsQr6TZ2HfLXGV4p91sQahFdiKH2NqpqtCXjGV84NaCdBr2Cp7mnvwi66raEN3kr",
  "key20": "r1mdP7a8bX2Ap3hAt6g9Ec1mwtzc6LSu2Bt1QVZaKjRZBbvpD7uM6tiq2JiT8EAHuM9H7PTmfpAdV77ZNF9RmHi",
  "key21": "5r97VYNxm6QwPFkSjKg8E3Bgr1rrotgdE4oq7p2zemKFxV1v4hZGcsgTUfoVMH9ZiKd5RtthzRJnNrKauRfY85i4",
  "key22": "36NiLRxm73Jw5NHNVEzPuywfhkFe5atNUFtReXdGEywZHbSni3Q22J2rbGrCPXr7yrxYHzM9rrSGSYPWgi5ijqZQ",
  "key23": "32YAjmWDeW1FXDK76RZ4QAxUgmbJGFjZRvS7Npeqr3vXG2dWNtJWxFMVY4rAFDsXSP3oFKjUFqm6JJMTzBP2aUzA",
  "key24": "CwcVSujYWYeUiVqoVXHvHo12jiArmr8yaVMmkehZkt7ZFHM3h81vzXDTYdfi5DAWbbZtPCdbmXTTho9etm8oaW4",
  "key25": "3uMkRHs4FCqQgMuDXxvS4FWWBqX4KePL2qcsL3FMXDUjmN4J1WBZoZVP7Un9yQFZV6Yg5Jv58mE5Cs548cHwhCia",
  "key26": "2KFDpxru67MEKLqv29qnbhvuXdyuqXJHZ81FPKiw2ASdacNPhMHUYQxCEKAPnVEQbcjdtct9RenFQy2Vi6zH7E8z",
  "key27": "5noAPqnmaSx92q79nWiSg4ypQvhuevqdc6692ZzvmhbFgBdXmam24dfbK2jZaSWNMA1sFbD4vYDHQJ957LyssS7s"
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
