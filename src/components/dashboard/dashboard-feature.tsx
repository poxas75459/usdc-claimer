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
    "5iaCdzJbSENmGxxxcDVCLiJi5EqDyArzk3VLcbWW6UkB9Vx8LDySntRuqrxfbceE6tydhXUa5hrRAVFzbQCQ8rVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mojzD8vK3ckuG68qmM8QzwRYiCFzFpYcV5mvthQoSz1B3E8FiVpcEANpyH2RAAef6Z8HzzPTHYY5brj3KicD4ht",
  "key1": "3DiMvLKwsCH1vsLwxzcysaGPt7B7CnbL9QF2Wwh1ZdYrnz1EJzKkTCd3Wkwadw4FJHRvLGm2dJWhvXRQjv4NRqj5",
  "key2": "4D5MBRF29qzdnNRzbR2bAeMSnpz99FFWRgaczrdZmPVvYrvJyeJvTLkXNVkNmBCtyry7vnDTA7qNSsMiVF8Wwuvg",
  "key3": "3bA9soAN5RBUgEX7cMtLVL2F7Eyb4d53uqCQvJcVUNvMR9KLSuev9rtazEk8QU2rUH1mi5jwJtNKNYvKoHPhnjC3",
  "key4": "xJXAYJC6xi6J5Xrr734VAHz762rBYshRZ1Sg5qs2aLXA3YpG1duqTvfkQkzmwZ4Q6Nyg23CaEqz6dZKv4sGJesD",
  "key5": "eFoNx8XgWwNJjhjTBuS5p7rBq4ucv8KHhY8uEcgDjw9AUWzyzgDv7ecdzAB6LWSTN6Ar89nk5zjtR3G348rU1j4",
  "key6": "3WAMiHv1pp46VxR88gaS1zypXSmm23QH57NnSivw8i1pLoVu3cQRwXZNzcv8rKvsc8EtsnUHYj3naQNdkfkEgxxF",
  "key7": "6395tnV6ESEvj1DSRzSiyYvmbGhYhfr9FqiTZbWMsXUCVGwi1SasBZUcb3RFZMiqP4QbsmCwu9NKv9YzQHnEoeLa",
  "key8": "5fypTVUkoX6VFhdSPzVy8huYXdFcNMDT3atdbvfjBUceq6Sjc6X2y2NoSCtLHA8tdqnrRa3b46ZcPhgk2fUM3Xjh",
  "key9": "z6vrpUGnp6kX86TpZvdtjYdP3uoeLoJ8EtpuVLLahJk5kDJ6q9MYVJPGU49gLuHTp9kADThnrRYc9EWZ11gmhLR",
  "key10": "5dAwjA2TahadgA1Ks5iaNjXAJPyRWpP2yo1uxTJhrs8AhUJanBxfz9tTkPavHSHeZ1fpCXNpJ5qz3DUK7RbMxhzB",
  "key11": "2it1jwoUZGyqqJiULXjZkdPff2x7uptyjToxxixCCGaWHsv2HdwmeQ45incWAaLceZx9P4eUsUg4ZnLjTuyf1AJx",
  "key12": "5r3NZqsuAvectRQxNPn4fXjFVxvnKaZnSPKnApuV7JxcTaNtDKg7Y8Fi5nCnJ2pKDDpuEHD4b4Tzn5SuS9a1S38",
  "key13": "2EUCmM3Fk5YesB1Qm7unN5eCPtNEZLgNCpzhTJ3aUic6Gp9LmwfMyMvdjLn3zaJRexgkHof6sW2dqyhVDUnwCMFj",
  "key14": "21cA2vApdqE57fb3VNSMLaXdth1J5PTev7wKzTT9VubTfBiZoyDFj6vd4wo2gLSxJQ8Uey265HK1ZvQSRgeztPtN",
  "key15": "3uSaL31ahfaAj3fbpBNc7vd8v3ZBEMP9r3jhXZ9NswmiyzZ4d2tm7Gk46uMRgKcCZmWRRcGMeeZjHtDL3AsVdTHC",
  "key16": "24q6xgffi2XG5NNrWj9b5NuVcczAVprYCDJdddc9oyoYrFAnyg1wgEf1xpLVvUVMBt6BQhWAXsuWnbxEnUPhJEBC",
  "key17": "5eshBWHZ1ZYfu3qvUQ9NAtELdTzQ5J46CeoKjmB7XcCgj1EqiRub8BM7V11WFxZ2gdR1wahUURRzj38NJoPbz4UR",
  "key18": "52mjSaV8hrkd9XG9VtLacsAnSTMnxr5niRoii1ZCGRM9wdt89aiEMwtDrGJcbQMQoaQApA8gKbPpNt8ZJq7PWxBr",
  "key19": "5oS8Qmtb7ETDw61zXGAeeCZUtaqaa9AeyGd7bNAkdUgsDepenPKVN2xrDXKQQsYJ8NiHEYrRGdR1fQMnGxS9tZU1",
  "key20": "4ZdqU7dmLYLTmYH3cNq3F2pKJD4ky7Zb5WJ9niJ5KePX4JzNSSvMVduVsT4A6TMvmoxCzmt357wZ9VxoWM7bBm1V",
  "key21": "35nNCDYPohwJrdaGYedbHVbmLKUowAxnQeB6Lcr1cXuhXhbybBTNUm3HCZdaz2Bh44AMnXuyRFryDWKA1bi6a6Ma",
  "key22": "1288MNqQUs6s3fqfQ63U8GwTG8DeMa68LRq1KG2Ns8zUBGS2YK5yQ9D3f274GgtjuLTD41LcCmiE9CVbRjdjHiym",
  "key23": "3zm9Fuc2tEbrcGtE1a7bTpK7RB3BhVFCHEekm4yptAeqZ2myAmTXmxzQqec9K5uNDk49uJsYzoqv7WvujZX2V6Kx",
  "key24": "5dWQsQL9k2o9va4BYdxEVoZuVknLgG1mRQnm9XVkbZ5ZtmfW8fbwhvAoNHMMMYKekEjGSyvtJvYC3kN1nh5fs1ik",
  "key25": "3Pr6MMDd1ijJD3PwAUwWeq1RHTKapsuQEBkNzdEPS3MYsePs4tkYjXUfL7JvoqcUnppevV8nvswQT1NV9Cp5aGV3",
  "key26": "65cWiGb9VSf6nQUrJMY95BjRtdv13YSxizhFPjnFDJjEauqaz7e7orvpuh8VBV3SLAGV1CCrhsVKY5ELy3iiBB6n"
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
