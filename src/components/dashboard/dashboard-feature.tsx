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
    "4tF1FcQFgBMXpPDjKD8YfuXxTA3iKw323wV4CuZrZkQv9dxYqivwe3QeFtrAMHS2WAejAnsobY8R8u3CN9RAVAsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "465duN9Nins8cDxu3D28SyaLL13tsrDKgKyo3HK5sT4EGfYubuWUW5itxnRGSmn7nf8uYivbFFwmuM2ThM1srmeD",
  "key1": "3VBNAKnrxuyEnBnVez72QJyfPSiseAuS7i9yfxDzEeETr2AXXsabrnQKiAJC5FsCjGPmdrvT37me7xurt7YzKALK",
  "key2": "2M7rqt3qgJV8aw6ZSTqU352K4VqzzyFsL2AWWwUh9mhDVTJKGRYhjvMe5zRL4Uy8NfKqJ57s17cRsuRjBF4geHLZ",
  "key3": "37TsgtxQUZUc39QxUCLZLd7P9p3tKxjxuuZeNMh6CraroNqw55qHS4hCUq66HA3J4QLaYuuusGwZZjHVec9vLWJe",
  "key4": "4DawMZKbBZVgFzi3rzQCogayq9KijQMguTK2rixQYVo9vEdsaKwdVfn6RMckSBzs7Pg31wQ4kuHH7ZcmBU1Ev6nb",
  "key5": "2NMWBkSqk6KYxnF5vxcCVeMELXcZVbRZGSH9UrG7idgfSxgMVjLHvfzKCo3ELnoP1hLzjRnJYuCkDWkZKm6JkuAj",
  "key6": "qyCN1JVaiK5MbGL82sRSh7iqeHQ84XKFEditW3q7TWUtf7X5YiydJkfsTY2u73n2AK5FbtJHGPWw6xms8Zz58Bc",
  "key7": "5a2f41U2FRGVy1qK4MAi2Gj7AnxBLoGWhLsdnWvBiz7pCz5Q18jQqiXruJCiMp42wEK7TehiEgnJD9Y5HX2FSeWr",
  "key8": "5NWV1WfCPrxxdTjYjK9m5NJnMXeqhHrxkdSaDi5UdbpnzpTDodrZbJiH4M45ydYaHXMzipA9VLTmuMmcF6fU3zam",
  "key9": "eguFNKUu3iJ1mzPPqfexm4zpKnwbr5wWF6qTYgahtzoLRigjMKNkJK9UCbSxfKE4TBe7y5j2vG9wsA9WneXhWuV",
  "key10": "2fRdsKh9MwMMbdzqxydJcBYJEHoBYWfZLFVF7b2U3j7Y5eLDUmy5AXHpHvjGamMjxPbSLGyKhnnVqB9KwVGim3CR",
  "key11": "3tNrmRieZLMKjdnw42V25Jp8L1Mjz6e2sdCoNk5qSmHqbmkA3CtxRPmjFcApKm6eYxxLPUx3quLizKpZCqxsTGk",
  "key12": "2P29fLnWNCu69WQRr4ouqWWP2Wd5p3GWXKSXJXXFq5rhzWqYEav8BDGmQJRPeLjQQqwF6eRH9xpdCA3j1gU64J8M",
  "key13": "5BNTx41B9CbudRVZSLASEf1jrW6ATQ2xeKRyeHMjidZYQJjtrMuP4nNYeBuxzmC7Q7LUfzyoYpLzKKxVteZHEEi1",
  "key14": "5WGA2P8kVByiiPW2wcaw55eNWjJ5RJrJn6af3oLLjpNiV7oX1xtRimdAmKtWxYZ4ovvFzTqvadHqS7P7jgLGND9",
  "key15": "qzA7zWXjjRtDhbxoiLaS8z9GzQtJRovYiLQFmdwtzN2hH69Cj8iP1aFg76K9nAhXjA2R9PXBXdoctoTkufaFVC1",
  "key16": "4KAyZ5Jfoo1m5Kav5xvrjuUu9hQMUpCyJM3Qf6zRnxX4TF9aWfY9GnhkW2Qx1p7mAYmFM1LrrFHJbetm8egnyARg",
  "key17": "2FAWu2pmtNqWzrV6qmgDr91goVwFqDXJF45PituN9cWwPonYB37wquMaZMWE5z7mZY1M5P6HHGRxDC5jziyu9sJ8",
  "key18": "5MfzysQ9JXT9FNsZfzRDBAZm9ye9JTr2K114eoajdPtwxQveTG5zyG4jsXCsYRJAAHaUPT1wvwjKrMwxAQ4zXrue",
  "key19": "23xXTT88VokK7riupeCWqrp9sYyC3PVi7XVQ9bAZpWz44XF33hhpwsaCFt814ZJZixY5DoFVsxNh5pXDM2iBrtQw",
  "key20": "5N81PcRFosdDg1LmkGQ4LbxTnjazp731rLgUmwSHcFj9uiAuZGDpN4UT1Zi9cpGQyhS2UZebnSigCiFj6ta7BqST",
  "key21": "2pig9SeZ83tgKBNbdnjThSim8yn66kxkYmwJr5Zvot9krA7qpaEuDAXhaWPDSufzE42qjEYkGGECFc4VGpKnif6X",
  "key22": "Z4k33xB4ZpEk8Q5WmnhTntimFzGPgpCacbSE42qHbhJhxD9zSqJHdif5MLQMGBcdUEysKyh5MvfSGKiDB4JASKA",
  "key23": "31xthJmuUiAFMwLuEbQJUWMBziWirC8MrcQ687Fn8Q9ScqMkeRMU8KeNcY6vRbqH9hqFADxDZ6LzKQxaAZuMFB8Q",
  "key24": "5b2G74D2dqvh2Wy1LN6FmPFcLdtRFvxUR2wh9SdYLcK9ByeE4PNd2FJPupnrCQBRuhad1rhByf2msk28mof8jvLE",
  "key25": "2yhWdQshMUrD65CXafpTfiaHN7UKmpHfSARaXAgk1mg2sdVYEcr42AZjiPSHHZVCmQEw7uV7xNqYcR6DfcS2dsGd",
  "key26": "33qy6kBCaMjNEcDVUhfGsxgESsGdFFhjpu6UGFpfYknLX4kfh2cKAev9LkRDGbDDCQmg1KXevhAq1USxx4Cc7rUb",
  "key27": "3eVQi3AkAusY5d7pG3dcfGDN7rWqmHZxiVNxbbmzdxA25XwCnfPh9U8wTnj4AdAqKa9ZDJ7x36ZHRJQoFowP9e1y"
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
