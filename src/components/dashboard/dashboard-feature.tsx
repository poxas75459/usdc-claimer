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
    "kWLve31KAqgEcXUSqqyKhJWVnkRudGkBzXW5MJVMZq7Bn4GJsMaKLPCby1tpsYYTV3pyexRprTzjkFCKcogK7eR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c5Crdb4dhbRv3tswkjrw4dA6S8Jcvp2w1HgWx3Nsd4qZ8TZwyac2TfNYwmHV7y9c8SkH7hcdHtwFVLTiBb3dKAs",
  "key1": "2Wa24GyCWHbJZFT3ieoREVprsNfm6NKkDrTUHszzMVkQU3HwhzD8RuQWjdzAsTerCZnH64CDtGBSPMmCV5LnLnHH",
  "key2": "2mu6E62RK3ytTJsnoENCaUVaZm8YMUFAfXyWscdZrPdgT68fw9D8uPEmELX4XWMFxzz7GNb2FGx88qrRNwD7v1vN",
  "key3": "3UZtjuh6BDMf2wegn4YdnfmS4U8527hWr9qDMtbd1HBRmStahyxxed3AcocWVWBYPC5ENWzotFaXQSSkHkqHEZwo",
  "key4": "sbYHkZU6bXcPixzKJ3naf7CU1hBdZifpDRBqnqPw7d2mLeXUjeGDZnmyXBL89PHRHdRPqVmULFuZHcsdbAJ9i4c",
  "key5": "4tsEsdXNaRLkZXDEbWDbPeoJ2WbbX9YKFcSqoAUiEyhgf2nLuAMHbuzdpV8DrFDYyNcBiSsQJEaEeYhU9jPCfsL9",
  "key6": "9ehVk2jKRcwFLnHhPGxScfxVrVxP8Nn5aEPqSC8BPB9ek9ThMiVpiBLezV9erud2u4Dy12WuhCmWPa5pBo9ZuzZ",
  "key7": "ipfkdpp4Cu7rd2kVWcRGNhKbU76SK1V4BSSfrbpKGWmgnDfjACAuVYSPJsKsPs9KwbgtTJyK7Q2gCR58F2gqDqC",
  "key8": "51D8QhNfSnj6Rr9FRtuZZsYxu4WNygZeXG6LBVXx8wzcs9rUdXBveFi9M4kifXePxag6pYqsaas1jMgywsbAqxXN",
  "key9": "3qKv1VDKxovjoUKKVwhmgedJqmRQhocAu5eQVC3zVAgm6BtWNSufBApewhoYGVe79aFSJREGEaRQ8CVumn3dTJyc",
  "key10": "3hWTK8CZ7FUP9CtuvKbEKpastkyz4D2JQzx1oCorGgEJ6AQwM1sM6etvgctAwveYdxNeV3qWG7AaDCpTEaHpuSAQ",
  "key11": "w6Q5uqgnvq9VaVba6mEWZ9GDgFBjt5outZMYorUtji9jFkS8Ls783FWFpkcRUrAWn65ayfAeD6A9i2NYnELfPZj",
  "key12": "3NC3PJq22LwKUi6xGum4yDeSVuP4JjMgtzoPqfifSKf6zHsetN21mnujMHqDHwnACmWskcohVhXGdxZrsAMc5ey6",
  "key13": "ADxXexVo2zQz8uHmFwr59LvrKqz6giszb1PH4GnPmLKyar7KWL5asSkjWq7AFPHX3DUGYMdwqHpa8EX6pFagPKe",
  "key14": "5EKXTdqYJ25tB5JAiJrwQQXkJzLfXdcFUMVxCfPh8L3stqrTDnkYNSbNWhYXGKahqMfPefhZCiv7awPbuS3KMu5X",
  "key15": "3t82UEinpjEhybWvrSfFg1SinQtMzQKozUEgkupGPA2jsVgMiAbTWuYitHCJeagb7kTFGM9LirmHPNtGoMKGh1YZ",
  "key16": "2QZh1v1SoBomZEg3iA2uBVzWz5gJTX7FuMsuGD5GC9k5uz7zL8JEKGcvqHHsnJ15iqZcLcZKZWpRb9mnrRtomtUm",
  "key17": "4Xiei3XiSfxZmZezsbpCbDXEYfbb4E9ZbdjPtVxhK7LBSRBTfw4hTyvbmGXzRm4P6Y5p1zrHmMp8zqSBypUCzWJ5",
  "key18": "5Y7NoqTDfJpcnRUfFagSEgfuKnRTyrZJEBHq2RGY1avQqSRrwx9Z93jkwDkv8zpVmxgVb47N1NBFpadkb75Fwx1Z",
  "key19": "2NzWvemn4BmT7XWUCYBYMedfuQ8nZ6Avw1jvQGmueCYVaHtjWjaDJYeK8GoFc5xNWmmpviQDRLekDeeU6SXFqP53",
  "key20": "4wRmzVwpbLcyiDziLmHx1AUDUmubt93Vhtqj3vheVg7T71ezfHS7RhmjbX4s2minLKzmq98WwrjdLAtmzohk9EFb",
  "key21": "558Dm44R81PxR6iwYJw8q8C5Yq4TCw9UEDDvN83We54QW7o4G9TL1TcBhzuJfkkkeDF2Qmmi9MKDip6bw9Cvsuff",
  "key22": "2sQ71yrwQGNgVTquTYLgqtb1Pc5J6cG93X89i9YAjNu4KFDbfCEA1Ps2EtZWxG3ohinvNTxZwWBE8P9fUE8P4g9g",
  "key23": "4w9zzZgnENBKLdQxQvSAHq1diF1Nvx2hcYTQZKg5D6zYodgZcTftjmACajF6mnt2mAb74awUSgYp8jjbCgFx3KWw",
  "key24": "5M8B1zA5Nioy45k9v1PmDBUot6JXXdDYuL6twaL8yG8sMUAWTcSjHHoPZhGVBkax1xYZgdWsbZKqqdCRn19j6poE",
  "key25": "21qnHexaGzkY96Mj8KurXbRAXp2eXWjx7sjo46pw3KCiaFSakN4qTPAv9d5jrSv8vWee2aHngP5SwKpKrhVewX89",
  "key26": "2Y5L1k4AMZnMpQvi2PHdCyFasfp2BuovmUWuRaynUqD4BunnDPboKwp2BE2aRSVEzXv2hxAAgWkPLVSgs6BVAEKh",
  "key27": "42fDnWLwVnpoJ1D86tExAnWBn27x9f1g5p4LopNUrznC5roqhN19WvJpRuDgjSEn6ZdeVna2waNQ3dNAPMJtD3CW",
  "key28": "446q2ia76zN1hrFsNzarZYxjkrA1mgd52RyCJaEQABCQA2jKAmVgHSzkHwu2zaD8sz3R3KbdxkZocjfBwWYqucTa",
  "key29": "96pA7BJJKwE3Tje4rbr9K522n3QztTdTkoFA5a7tNECXy7L4nWQoeWEbMEA5uSGn64trwrBR1GW8vjZmA1f2WUj",
  "key30": "4JB7rYsWqb4k9jQWiGCZeX8ggRGsvEvmGfHxJVvE9sMNBT8dRKt63eGs9UtkcNULbUkhr1ockiurEsdNbVtgCkoU",
  "key31": "4aoRqqHjJCC7JbnuGd8BvmWGhbUfqurLGZ16cC2hugjQEWTfKhLKxB8ADf7te3ZTPsEWfY4KZoLsB5Sx4pbcybQN"
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
