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
    "2a8JKhrvC8yAMQJRWczcFqnZ25vdWLbSZoStQQ2xz4bkjZxaVJiwBHSebc1WA4YZtQb4yxda2SrypqvBcerjFPCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CpVUeadrCq4ddM82CpPc7JzAE2qJ5ca9Eww4We6mwjQgsVCty9hzdkPjvygPPdGzarqzmBWfK34JYkYUD4zh5z2",
  "key1": "4thzo5p1tQXCWbB2yuRLe6AY67aSpXqsy4kD2CQ2BGFtTsBHsQsinMiDEw5iRDjY12Pd8i4xb387iou8qvATgVMp",
  "key2": "5w5whAennVQMsAvZUxB2uxA4JqokYnShvqKEX6JerGmNEeURtu5Kj3kma8ja2TBaBhb5kUugdhsTp8urpyN9stS3",
  "key3": "db7oPLxPhSebUk2TTrt4TjXYTGq5vbeSw2KTpqiN7bRmCzz6rSsGhaKddbTeXimtJsF3hUGNnm2ZKbvqnFBoFoW",
  "key4": "2sQCRCTGfgVnMr8JNQ65yb4hk3cghqYoUkdqzfXM3YHbL2uoJjrcBUSQDhGoVPMjTV8wDsCsrkkUWTobPEm1d57t",
  "key5": "2XMBtBSP46JzHJhHXLYWijry5zfp93xKDLHthMe5Sv1BBn87SXLQuns23KjgWinuCjbeeC1tMAkfd7e3gZendF6n",
  "key6": "2DUbpHJKKb4jgNa62oyuqrV5XPzxLoFdLeYgoCTHqKbn7unrNLEL7Viqd8PtXBaUsTr4mDJAYfTgSJc3mcUsbimt",
  "key7": "PYE2XreGnLpTU2dMyrPSA3VLsVLGD2ZNiocu5nWg7MgwYmCYSfAcRpxxe35B1uHwgLPax8LCRd7CD9tk5Hbh7c2",
  "key8": "4xgEk7QiaNmScEBqqD4ARiabeQ2nnQGa4cQQLX22ZG1mYZCKwCRhT6kxchN24kh8q47f2YjsUycZmuPu9a9mCxFx",
  "key9": "3PeYCkHH8Lhs9zJiaZDbn4Nzd3DyfnhKxJuZ91dxp154d5rUpd8WUMAq8i4EDPcscCUHgUVu29adjAuJiwHDdBGh",
  "key10": "65RmTZRjzg81eR5kmsN8ugTyYtzBxSNgZyrvn9mr8zmnA7AtsCs2bg6awLxD7n5V6XFWmKpsPLar4kQ4VWdr4kDa",
  "key11": "UT8J4Jm3BDksTtL72SkzmgPSUcXtAxFTWstqxuHTyUdm7CTfS9T77DggfRreMS7C2GSFPgfJ27UFgNaZAH1zbWG",
  "key12": "2pLdzwFemDyZrBvDTGfGwNWGQXhbtuQbEqkt7FdRL36gSGoRNd4R5AreVB2GmYfpRCcytZ9THZibTndwcTApVEBH",
  "key13": "2NuquKJUeoyqZjqZDjdwG9XtQYmnYVpcSPuYPYzZXmfP5mWFUrxugHidhqctZM8cyFicnAfZcPGoT8udqR11NAWg",
  "key14": "3dZzQTbiMEXgqv7YQCQH78n5EcyUMvrtnPE5vuWYjpkdchFJxCCyoHvGDMsga51NvjKNLDFoAhC87pGjEW7Gxemu",
  "key15": "8dYcSqNLvJ5k2pGQbQ7D4H1YMeUU9yfAf2Pvw8eieqbYjjMxadwEQypy8Fm9zhurfHjdM5kxGS7RFiYxKzXwdmd",
  "key16": "tC622yYMgrZCrXv6n7db7i1AaaXLGQ26Vi4aN54TrFAPuXh9xaDoqEx5385pqC8KQHmUTRH7gAmvyXsmaHHTLTK",
  "key17": "35NepLx8odjYaKZqmUrSMP5BeCr1FRYRkqqDzSZRgWWr5es8EWz6hvFqhg2gp99BS9pKjnXGdFUe4QvV3qZAW2BS",
  "key18": "5FZQDSoivTeisZUhGD18ibEDuFWoRbHf8uGWgDjWjrevZUvCt6cMYnmzAxB2kC63PSgADqoxRbUBd8Zmpssvf557",
  "key19": "Trq4RfSRLBEG2NFXAwzvfaMLC4YCNx183kjWPxeAND48WK2YVAikDkkNmDVxfuc7Yok6EWBTDAm58291wHPZaUk",
  "key20": "3HjVgR81Liv5cRoWqe6Lkxrct3BwFwrnRWL8htdRVJtSLdrFwQ2XT4x7M1XGt2xsFNFkyHLTxZ4LcPWzFu8Kv6kc",
  "key21": "5j99rA4DmUwitMg54wN2knHNP8k74DnR62k465HGcf5xLhjueavGk7xCkYejZvd4Jx1PjMqoFpPCBGSvPBPDqyV7",
  "key22": "8rrez3t6518qgPMYGNgS6ZX8KkLuqYp5NtmxKMwjgWkUhXsTsHWnM2A5g42W25pPCZpTyVsxEAhAvbmekSRP9yN",
  "key23": "5nZgBgeTXNgQp2m6miw3VSjRDCEMdLo7oQ9HaYH5JxDMEjsmojHSpM5kho9dr3GHhgCudTbZaaG9hp7ezftfP9an",
  "key24": "2jE6WFc5XCJUTRBAw7VrCmeRpivuy3oxe6k5sfUkL9HEwzEdPCW1q8sFZmXNweW6d5PpgYqpqCP7mufiqvbN6CPX",
  "key25": "4R82w9rThZgaikcyvsnJG1x9BVaksnZsq83HaArT1KaPmbZJexSrqy4poMcD2SxUF1gRt1fsD6VgNS8SF1YcqPib",
  "key26": "35oAF6fv1uuwohYQf8pznqhTn1pk8v6yG3qXR5ziZZH6BpFjtXqczBCxsRoPPV6oKpxJ7iv5L49P48zACYBHjUPP"
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
