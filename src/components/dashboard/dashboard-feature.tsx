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
    "5MDPMKiuSXXK6ceksMm82GhmmYgz9YrABCNEcFfLCHH6KjZxXhducLxnX2Y9RxADE8jSQ9m9QPjxFSsj4ZBeAdmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vm4NRsDFGjo7QeRwwgD5XwTLjHcbq6EeodUhxL5jjycSfthbDV86h6R1V3M2JmSuyks3FzJUZgf3MsTNX115vBi",
  "key1": "5DH4ZLYbcnYcaNe8HmAJ4P3uMbWpi1xzkQWbVrQr3CTw2pNwJeEPTcY5EUxysrdR7YKRswbDwREtFLXn17hhcqzS",
  "key2": "Ddr1wdwY45JzQh5wnMmKYQTm5pJW3Exz4HDNzCK8krCYEfcBYptodR4iRjjR7WxFJePP3EifJhbjqHqMY8mY7yt",
  "key3": "5t8ec7X3LjwRVgik8afXdqzkwtTAMJJPSnGNFW7CzA6u8z4UQqZQxZg9jgRbW18u4YJX2MjtXZbJwensumhyQhGQ",
  "key4": "2pP94fRJHCFkAmJ9h58BYPP1CvBXyVQ64birBxXWRZbwMk9LgshtFW2ZCeGgNyw9CPbFXGpi1NDk2s9E54nVJsaj",
  "key5": "4gxVkiqi7MWdKUEjUGuEwyAihHzkdAnRfdr1hFWpSkXEJuYxgJWHiA89Tyk2sRcp9ctWgwqfSnyBuocUDznK7zcS",
  "key6": "5CBhXbUmgyLUVK1vDrK2a7yMiNhV8waQ6hMdV843WdoSKTCqd72LzNEtf269bQCfsfkj5BE6rZv2GEAqE5N1kFpf",
  "key7": "2zEz9Lj4BSW9iNBu7VtBmVdNdTefUmxR3CAr6sa1JcH4WDxMLZZ9jp62RpTmVinG92tXeUkpWXgvVtuuxsDqPy1A",
  "key8": "3ARknLvDsmFWWKYWVYCQaZGEKCK4bakPpkY5yTRjiQbBJS1EBypfuobs5P7LfcmaxsrXY19ucbWsfp34xAG91wxn",
  "key9": "4zDoQonLc6bz8WnymGksu1YiT2RrnM9CMCb8wCVkkgpRx1zjxeNxoKmkqEXj7aTuzbZx8R4wj8FR1VoQhqaDZXgs",
  "key10": "4mTADZSBicDPLsP2Nqv3fHnYissmyyVLk5DYCx8FaA1xUo8evf89RZCZYuzg7mo4xPck1EkbyCrWpVtaY3e2PyuR",
  "key11": "5bSnhFXRDqLRzTgdTbdYpdTkm8NtTzq7SVyJBf3SMVENgzoob3YVYzYQhRRaYJbfycLrN1HzmtU1bQdbVFXqJk7p",
  "key12": "2TiTCyDP3DkeBAdR6MjfKUXJpNewN32hbpGso1ar13EKuSMw72d98zXD4BUyXwcYEvPP9wtAyXhSh3YsBRK7Dnsa",
  "key13": "5MWBngge8gZGAu14h7uzBY8Zt7vscsGcQzJdvybqqwRg4kNKruuyQGpqJqQ8dUXjrWgsWUmScf2omhDx9ygZUke",
  "key14": "ZvKgy7fLnbdCR2HAtJZGob4W2ZtqFwZ7JEGrwqU4bobT6pfvXXx8qLXcGWQcL4j3iJ7K4UdMDZ5hH9hqu5gb7pg",
  "key15": "eV3RXk9pVbRr8cxLRqN5B5QjW6UZW6nTkqrRpqfjiNuX1kyyfv3TovoP98hLyiSoMXpKMram67UyvVXmprKtcz9",
  "key16": "2FW3zDXmhp1W6DgLsTvwLZMMaFqpuyZz44td192YmgLPwL4NTkMSgkiCFc28MHGz3rYFKt7RJRDecwNoCMTF7GX",
  "key17": "44aHrbQLqWnnXPivVPZX8h6Uok1MNNDPRGBybJPGbs8W6X1dVevdjHLsnYK7f95s6CePeG7kMJHFDmfSpwvypZEZ",
  "key18": "a4Lxmqd39LHvEAyPmgfMftwjY7JtgEMdzzoBPyzxQpBJtKmfHoG7GkCLmYuAqKZmZSfK97jH1GvzR4DUHNerf75",
  "key19": "5x73c2YNwWoDVfSEpPZvhiSC9cr4C9v7W4v2yKgjqm1gazdCHQj3Bm5aP9GqsgtXExb3sGpnxtbFB6MDAu7YvjhT",
  "key20": "RVh8neM563znXpWBF2eMqph68ezLaX9yEHrPeLuErx5tPVigb7CP7h3vDWcBBK9bi9XbEwBaN9FU4sHDpzCKiuD",
  "key21": "5RvA8j3KxvsqPReaWiPL2UNnUN5xV93s9AV1bRgQo4TZmBXN6cJYtMAe4Tk53uf5vEHBYETKviSTao8tUbB3XUso",
  "key22": "4mnAY5BrkWdTQ9uMqHVzpFJBYR1x7rAVGF15iAbKtTCcaW2iCqHazs3URrc1SAaL1tDnn1dG5X2jV8XibUxCK1Hp",
  "key23": "2mwqLNHvR23pmfeP26UAckh4iq3AkRjAK9cbjkeC5dQ51B3KH27fDNfhWJcCuR1jDBqvRV2cTeVw2x1ZZM3ESrip",
  "key24": "4qdBWWZ8szP4y663BfFX6bv8TjD6JeiRqXV8DkMCqycGXHk5v7djLqCoeqZtLtvj68hHf8hEzTNKnmRuo8dMjGre",
  "key25": "5PN2KwNSf13N8iauswmnKXVAxDoPeSjiJxL6P9X2DJq9z1RprD9iA4MyKSZ28STCcBzeKKHYw1dRaGeHJjMayEzB",
  "key26": "jLWduDQajopRGavYAKJpoctuemJAwT8UmKT3JLJgFzKfhzQ2im3dx4Zd9r2B1kGQoCpKmAjpAojC8BspohYiyzF",
  "key27": "4NEbmayAxYTXHbJRyyUBKjKybFc7ymz4svxRLBfZySA6hFBDuRZUPvACEeaapLtoupYrcGRq1EQWaN1eUE92ti1h",
  "key28": "3dG7su9bF58fq6vrrPgqo32wicswbcHYCvuNpzG2z9oj71FZQV9qJZkewPAFfWY8rJ7XVcppX6ihYveQxetnVmUn",
  "key29": "4bjE7dwUodhZaDDUuWNRBRVyxdCypQWUQpcPtmAAVHPNAZS11L96M3dCaNqLgUaE9sTp4evBMZPsEERMCv2Ezsx3"
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
