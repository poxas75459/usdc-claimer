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
    "5FfQDBjZ7j4YU3pJ7mRT4mAyTGd5kWt7nxEpsosaYexbqY6k4oVGC22449QFFfsHcfQd7pJCQDwkFY7Y3ujnogFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fm572AhzCgbM6WagKs3HC3KCxLXqRf2gk2kJ3HQdbs6G9CjAQJ2QTrKHMRYMi32LkgwLXktHRzg1vmhbDnuZn19",
  "key1": "44DkkzYLeRZ5yMgjnuu8wPkiPPWsH66o4NNzao42oudoqSTsv1WmvajNy8XhUubV61LcAtnfPKG5piMTQ9rHie5e",
  "key2": "tSCEFXK1mthHb8sgLY8tqgWLLdy4bvhmL4MBW3HyE2PYf4vm5tsE5kSXcbSjjFjP292vQRmsMwmPYPQjqTJsiS8",
  "key3": "4Ge8mqzEYzVoUZZzarauhejJxJB7h6H4haGD3S5bCyWUpKH63Ar9F9dkZhBSmSUCePRMHMYCULG6Lonk6fcrpHtX",
  "key4": "3NFcE8BFQF79tg6sju9jEYDY1qr6htdY43nA1V9EhXW37biRj4VqEtDqEuUXHouPkXgPPLow1W3mRT77dJDrg9js",
  "key5": "tzw2aXLu3xtutpYjuUHAWrJ6b8u6SXDKxeA3h9dmtNtoEufrjQ3osoqsYUXtBHfBDXsL7WE1hzqEy88TjQuePAv",
  "key6": "3xEkkM9s7t6NXRtfkNSUNBzMqSwotTLy42Lzhm1fLcg4yCvb5f4f5c16VfG64WToxx73YBdpEfo13dzkymDBdx3C",
  "key7": "31QXqWuSBgSzGQXKDwz3BRTjwZvPpU4D7M2n5gUbNGZ55cNEwHuik2q4WNGY4BDX3S79iDoNiQAr2R7GKXYqzkX2",
  "key8": "4XnDjRWB3Z2dPm772PaLDcMd2JDXP5VyecgjMX3RtmoS6qGJXDMnwtrBzjaFL8HRGS5Tk8WsENv4fz9duxn7Kwpb",
  "key9": "3GKdHizz6CyX1cbCyvQGgMuhPstDMsfWA4zdadv7K8PSMfFhv9E47nnE7fmjh6Ta9PF99t1CSkFmPNLGupXdTDsP",
  "key10": "5hAL47x56DPG1ANBo1Vmt6BU8UQfMBgpSeYxDPnqFvp9o6SF4q2Ec8DLpeLjY8ui3XyP3jDShe3wqupmBZiwFe69",
  "key11": "3RzFB5MFCJAoQYtjaLp2CTU5CE3y659XgVahAT52oKbSZ6erGBLEiPbu7ouTsoeXTkGDP8ecA3jkwFcZ62vMmdGi",
  "key12": "3v3q3qDv32VeRCffPGpVd6LhE453xvqywWJywXjsDjTGGLmLZ1daU1mF2pNgoQG7Kf86x7CNG5RFPeCvjateTqY1",
  "key13": "2UEQSCZiYTETv3Hekg4oNu8mfkmiWgsvsd8rsML1fBfuDcTTjgxeEKDybhGzzfb3q4MBxkT6SKzjGAtDK4AzVn7c",
  "key14": "2ToDdWNZfXoCJVtLskyZiMG8szLYe1JZzgxTC8K6qz7A9vVLWBPbkJNhRnmp7dzhobSBzQrY6e1tyWorjwYnqH9",
  "key15": "4TuHe9jjdtnrTfpwVJ9EE3LZLkccKh8VqGhk5yc8NeYQ6NsiLVLTncP7ahUB9VHfjwHNnTjrpjbzg3LVQP3opnWo",
  "key16": "5aH4CR8Xg7rXiz8jSesBfiZfuaxS6guDoct3NsbXDLkacKyUg1S1TeC5gup2bjMMuXySZPzJaKx1xuYq7LJkvxrN",
  "key17": "PePPtagCJEgh1PFx817MaaUQVYJQUp11WLvKNZH4piLgGtumWbT7eemShH6twWy3ifTqkVwCf4nerNYkjPQ7vrL",
  "key18": "4RzTfE6Z929k7kTtGPkXEgMEcWGBAdG9B1L6Vrsurz3vFqPeGCEVCymyeRVTDnyqQgdVNyTMwCdUMUcfvzapQGLK",
  "key19": "27ds2zAsEd4ommJMcnRd9gfYvs6x61VmkWVeSMzhc7zr8M14Wsbndpa1ueFm5FQ31NkuXqT1hFkCnx3bUc9kxsm5",
  "key20": "mJD9fJ1vmPB75EMg8Az1YBt7fmk1TexFWUKwrDas3ENRjAkdPmZN9tNooPiRk9J8EAPaBoAcEmRt1LLqJT62ZHZ",
  "key21": "3ecer7a3h8m6UnMNan2ctNsGrM6SS2jjLiJTyLAUhQR3CaAFV3EXU8FCBQEednD4N1R6bXC3iV5biaK7e7LApxRh",
  "key22": "42JNN5EwcoSjz9krjkAQNKYFwjKNpvDGsXJAHn1E8JEwUP5JjXZd962YtiS22fHq3sCZUwTW8bzXkuDfpFoSsW7q",
  "key23": "2nvNjZo6bQMVjy7fSPbEnspTYHf9vwxAkwFK81vHqFXeDDMsr72nqUPa3wrxHtRaALtVKDhcK3nEkyuV8RKotJef",
  "key24": "3uXxAZGBGmA3bxRnMqJsv9LUTXDFQTTFNfuNqgdyHTVzqYQk8AKqLCH9c3KqSZaTQzy7Y58JygRiTXkBbSGwHd43",
  "key25": "VBXYyLft9iF7zeoke6aeC8SniMpH6QBZJdYXnkyn7sz9dfrusH1ST6vhbgAcRtQzTdoTFUqMGzjchrdATUA4fjZ",
  "key26": "662QwMeAEjbEhdtHZH1xWZdfRtW8HfJets88RfhhrrWa8c2cRyxhbyV1qt6CZVX71irdsFuM8kBHUeuBGRmfV1gJ",
  "key27": "Ma8NigP7gpW2yMm7PHGvZxBS5PJ1sYKYJdNKDdMwNWCgxxqPkfnoS3ev9EkCH6N3BtFDGhRKzdAxMRQNcmqnvDS",
  "key28": "45xA839xXdpS3RfC6vTF5CJrqNxGLxgUfbr6uLAMwHNstXS1T8XStZibeRtzFxVsUd5h8FPWjfxA9uuM4WxtaCBs",
  "key29": "3q1QwipZDxjTyK4MPvfZoUetQRzqZDFDHHz6QtsLbaYSwahYc5F561vSzK1X9Ft8iL3YvfukygTi5T8Q62G8Jv1c",
  "key30": "pB7KPiLqJbivu4aGiJt71JDxryU3cxTUnusScBx33UpKonH8ny7mpw5ukzs9YJvvSqUUk6vDYmKQYpzzQx9Y7H7"
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
