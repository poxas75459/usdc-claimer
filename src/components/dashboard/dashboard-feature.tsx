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
    "vhc6NRGYZfaXZ8hK5GBbm4d4PyjqA5EpeBANWJ1vxVYkuortKZMsbF5yhPMu3ph2gwtphsFPa9rxadnZzqzP3wk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LcmVCQBNjszZqK8HxkVHmn1ZJiK2XHATRzJxg6gCgE3M1BTa5VaCDHc2yC7bVwFXSueHdom2CLpUjuUDuW3xd53",
  "key1": "36KPfRKZJjiSjNmG6YZEnE8TLNsBHBfYwiriTVy4c1EUJ6yww2wZVYb19UpzDNVbsMDgYdJCULibmuC3QKxohFWh",
  "key2": "XdmiCKX8vfQ7kYaFNbCM6MFgfp62RmghcyUQok83at1FFQGMBJWb2EyR4d4k4n5mpepP8K9CKqYnVib8Su9xv5v",
  "key3": "4rhVT6ByNEppRLHYyZ2isnTU4vG4KPn32fGiYMVoCWmrRYbpwHceF9zXnLiFozRbbLiXpFGB67eRy8yrNtVByApx",
  "key4": "AfGBVokXwHuFcoCyoQvCUfwVLov8HEKMwxGX6zdCdWanbzapggck6EjcXxyGUTVM8ewXBbuqZK4tQacCznCVAnc",
  "key5": "4zRYXxUZ1j6nDiNs6pUM1uWfYf8wWAbRRXDJZb5FZemaZkiAzCRbePNwDiJ2ATtGPnVCBj1XivmQtK6erZY2N9Cv",
  "key6": "3R2ea8Vm8NvjMYhWL2my5GgCX9YP2S12ApCuMyJQSRNoAmwunEkWNhmUGR6H5k3R4hCXwxXTV4edbE2js4Nb7Ro8",
  "key7": "r2GGL4broyz7DoDRVGWfrZoibdGgeXzSoyRWLWhqBc354RDJ48BKawzhiX5RaTME5GeYhTCoPVzaW6uSx7kcaYF",
  "key8": "2Cak6GcBUddVxr2MnZChcfiA7ZPGjvj4yUxS1cDyc2eXpX1vofbv6dSMhkjoJu6RRubeUjBkpj1VNqnJWEr6cDAK",
  "key9": "62fTZMKcweNPEgd4A2dynz6Em2YReGdAxin6SUbQWBAJBxpPiatxidcbaVsYc3gTZDPyjjJ19go94CLccdWdGF8u",
  "key10": "4zm18KJtfXpauJbKdRzbSBLUuTZ7DkenQK5jxkES8JWknTHyxc2VEHCCFbh5SfoSsQXjDmrh6rWxeY3pTYXWfJJD",
  "key11": "5A8uWzshix3LXbp1GyP2UtJvyVYa3ny5t5eqtWErdRYbjQMfyHDRGyQNup4gL3sB8gD252nC2swd1AWdGo2M7Xx1",
  "key12": "5YDgs95BAyGXQR14X2RS51GG7ejgqQ7eZULqv8Wvcv22or2RUPAFVafjdWx5tcQj3AWnbBXQNJoQ36hbkdiF46DR",
  "key13": "5PWmAC7vzpmybh39ec1JKzVNFhGmZJxMVKJ4dmNR7d69dqY5qvS3ZNWddGpwGM3sqMQxmwkm3T8uw56TxDnNqtFk",
  "key14": "SM53U9NoZwZ2BTgWCe1wwzHpNMJbsHUveNRNws6vgDQFobdHnFgvreSzXmuAPfG68uSU29rKBw4eLHbNE53Tz2U",
  "key15": "27o653tHLXeeVf6z8VZxa3A2STAmDVU8rzRvNHCv3QGigtRf7BTY7tkacGGdyTUh3YW2XyftFkXjTVdo4yowTHVD",
  "key16": "5pASGzx3kF9ffeEMH6zfcsdq26WXb3oxtysQLJLGJBZVxr2y5yBqyRNZFqVSNJFFnWqWH1kwP9WRor9Zhy8cDtX1",
  "key17": "4rNgouZgowcuULwNttwfYVCgxNHFwdNk3uHdAmEZMcF7eVwAzCEURoh3RNZhdndDyKBUGGYrEB3zCMz3BGK1f1kB",
  "key18": "2Rk1EP8d4KNTnVGhbCjuPsywyv8jNmSksSQ1ECUhHAsaJ84PvMFAxy2PAohjE7aoFVENyEP95DpKmBMBYCceLo9y",
  "key19": "3DcQCVV4eKAtfzasUHkr1HCfSzupfBYQqAAMZ6PZmzj46oHWv5cix5X9DxQmrEX5fo39MJfwPCakRoyJba9nKeAh",
  "key20": "3mpgUuQNMnwCnKRpaQxSwnAeypNqr6dVwY6J2iPZ8wqXVFFBF4MJqfqEahdeDixa4WMmdGcXkrSFvRmgb1GJNWN7",
  "key21": "AFTzu3boxo9DBrngimxxVTE1ur7ny2nwSDZ6hsTZGJ37uThhBnHppYHKXPtp7zSKWpNghUn1r9qaUci9vzdFcsx",
  "key22": "J3rKnob2Nv7Tg89XYdtf7UrFqeCxY4BraeDVLDYijoELNxU7kxgcaXETFBDhGCyoKfeyyCvh8D5BgdiyUbZcJj4",
  "key23": "j9dioKkPnsdejzr5WpqUGWVRAr6PC27ynZXPbzoiPFkSE96NskfVdScbvEDB4ppioZeNK3fVTgeFRyLU28W3Hd3",
  "key24": "4Nf36LRF5tRsz7Rh7bgwALTzmNeCTPgB4yfhio482z4eKTZELvaH9Fhpdh3RRTZhPR1M3MLGyVLkmdHZQ7Kym2fA",
  "key25": "5rnujEypQAqZNrB7zmyoDjR9Ah9n29r4UWE5kdhVyJxXvtthzyQpHBRJHdAwyuAtPNQpeEcu5BYXxanbmMqLohc6"
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
