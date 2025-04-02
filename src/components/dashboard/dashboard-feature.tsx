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
    "5rL5Jy5D2upbsyK4CpPG4YQuNUV6ANHysUtj4dsnnA4gmG3md3Fe27GGUvFe9PKYP3gL9ekhCX7jkW64tApSt81h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MRjZWFj1RABmkYxFiXcx9K9SSgwDWn1aXD43HH6bcTfAiW4LpmtQHHyAKuD8ZScNywKPKZEREr3TdDmX1VNrAWe",
  "key1": "4McWHTV5w1Y95or6J8eugYrK7a5ToD5AexLzZMudLW4Btwi2vp14MVB9wn9RUSKHW827La1esHpVs6qzJArE3kqk",
  "key2": "3KAsVnew2aQa3Zbf16AnQdYqrZQUrkNn8XBhApnh6xyxGX92g1uY2VZaLAQxDkT6J3WyUYQAmFEvGacrafLxH9aU",
  "key3": "2doK98Ktpif9rU7itBdM2S6qQYmn7TSMDA1SNknnymkkSkoLGGrCL9jd96HvZrXovrbDSqw7zgRNNB8MvCuHSFo6",
  "key4": "4Bpcmoz123q5iDwb7RwUuho63vsJWBR3q3MvS1wFp8RLf3DLFxGb7vYqyAGhjYGmyjBN5xQCjFcTUikWqoTQ5zfy",
  "key5": "27Vst4bf48Py58XcSjYbd8JVmonsNqn88b9Q4Da1PbTZvuKYFqSRq9VFFQmj2Yhn21GsWcRF5nzdzFKSA6RWEE5E",
  "key6": "3eLSzgqy1cJofhDoKmhW58ifiKcZFqEV2dtjSQ3wQzgVa8ddvyCkbfYyatyZx8qeqfjzYH9JcfRMGzphJDNkpNXc",
  "key7": "5Lj5eAVPjJtmaWTFqpocrS4xfEYa9qSJaikH77KvZkWiNVrcK8PqpgTjxFSq7tbgRWjWevkT8oKsvuGqJYAMidDJ",
  "key8": "4BfDTmkb6thuDnTF2HXzTympYbGJ9MTrbjUrAuerVwcBK4wwY3eFd5Cpzgj1Qjb5EMidjqwmtsx2c4eQX8jgeS7k",
  "key9": "5u9kgofUcYCt71NQHLt8Cv7oK32kABVYFjtfq4mKNmShJvhPuTtwryBEewQoyHAEpd5uJuiDr3ekdGn74RzkTFNc",
  "key10": "2jtp24xt8pK4FhNHGnP3X5CModNqCF4RFDQMnTiG8QyF22z9unrCGso78Jm6vDXNs4RKzmos33MRpUgEBQ4agU3X",
  "key11": "5smfJRTsEUQdKExCiC4W93rXqX67CUovvEwY4FEw75r2G6txdaDbge6DM9ituFou19GUrxLKNV7pKrVKNK62XC5A",
  "key12": "okoaNzdWDaPf75syhc528isN1vAN78pNypxxMoSSKDgTSdNq3Y8CiHhRp2qFDPwtEyk6jngjoGQ4gJgFD4qihND",
  "key13": "2rwf7EyC8AgNf2vXtL4taRDRwu8eBFY5VxbY2yVq9u6hQWrvFjHNa4LtNCwNSXkuDqtNxf1CqBAbWwBTh2nZYEFv",
  "key14": "63ZgD8NhKGJZF4gEkahM1Sx59F6AndngE5suJLqB7c9s56KqeUur11wbDgzywxvV5aSkLEgJp8UgLN6ztLK4CdNy",
  "key15": "4p4KjezyGWhR55HugwbNE2esJZK4DCLxTpiQtDjTvX3DFkKU8EmKq4G1YCDVQR3agXMpgEngFYt3vJXCVsLpnJ6h",
  "key16": "55RC5QU3DsbEkWYaj7N5dVsXvvzBXisc1Lc4SoBsBHRojYJQJbm6TFPHMfuzPJ1MHHTR6f5SbQ5mFspJoe5wxKT3",
  "key17": "53wgLvv9UKVzkaGegDXDW2cA2pXLggvKYyM1z4GF6ZN6De3QWMdD3wfWgu9TJ3tcwmKjvr95Jbnx2vtVYtSvgipt",
  "key18": "3HJCdqT9XnR96DzGNEQ7nVdPrXndj5MnpMTTSDxnBmswXSp8PfPExiBFQuztDJ9Z1qRX3VRFcqxkMYyzbVRH3V3y",
  "key19": "5KMdwvmTJtUGFHrwwhqctk1nr8hmARx3ZvwtzTCRPzdsbwNYDrv19mveMthZ9PqBTTBo2DWgzmHpd5ds8tKxLDgx",
  "key20": "5mxqJC8G1oYszfwtZtwPNmdU7VtWH6YS6iMNvSwesUTD8pj1xaauAySDK9UQxgn68A2GsHPraJAbCrq2yXTP5csW",
  "key21": "3Mvqzb8pDP9eh2vDenygXLUBHKV2p9YD3K1vADqgEfc5p93jq1FDfkd8PjShXtfsKhf96LFGXmhUdBd7H8WxUzJu",
  "key22": "4kqZ1tRfwCJcwmD68Hx3MhxVZrYFMdDmLkMxXbv9YCDkCtjj75kaF1mX2U9ME6JWmsN4DXTKELuM4XN9MR3GTjfs",
  "key23": "5HAuFZWtBRAQXcni5dfdG7spkVCFJhc2sgRZuXP4oTuUPVd2pSynxYycs8UpbKpWy7g3cVEoKAt93UjQTsgys6nj",
  "key24": "2k6J3tjBNBrowJhHxEkATG1jD5R6zbWeDBPoTfhRFVuAwKXuHAn4FV5CT2qzvEVHV41YzGSdYHo1Z3Dwbnwp5peB"
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
