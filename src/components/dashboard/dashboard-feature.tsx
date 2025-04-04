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
    "WKvSRMpm8A41LamC6fVn3tok9gHYfhWHXeA9CTcbhcGxSyRSQSksrCtLLMNLXbtnZ8wMhi8wxABeRVGzZQwtypm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MURqCvNyLCgZHsmNPjxcb62CHvSfCpao9msbkf4cWiaiTMYcHuw4DZm1buuqNusHvkTveca1jrfSVjA2xrH1uE5",
  "key1": "g1BpqYsSGAEpQPckcSveM5zZbYjjPHPsUpyLTRKrhpag8MvaXurFAXBwULogseeW6HNqM8iHCDPiiWM45zVVSEi",
  "key2": "oPmzPgRzzC5n59MnGz8cZxHnQbE3VR4Am5pVVi71L2Yuv4SpBmYh5PH4f5vojCk8pWT2KXWCNaVTF5G3AU5Mp1S",
  "key3": "24GBLnR2SvVM3Uvp16aRukDMZdVo2nJDNWV9xXmrvTwUprfLbbAou7VNo9tBLzH7FzYWH7jF3L9XSvyfoBe5Z7M9",
  "key4": "RBKvD5M8WbPewogwaEpszmUxoNhqFPgoTmy8uzPXjLDdamZkd7G565sBVtvD1jQW6SmUNFR8QFtLmFwdrmTbGKG",
  "key5": "mck3Lzi957ZBhCVUAEFZAVvZq3xNFk6uFSt8nZ2HC9xXmvhCEw8pYbinQUCTiTht8Lt8hDLPZVJBsuxuR2kKiEd",
  "key6": "FNkosqcZ4QBfAARee14QDwNiNCJ7yKwJQ3h26xVwshEYtrAgwERrRUXEHgtX7X9KQMgPU4Kt8o2LDSguC3XTNdW",
  "key7": "39KrmEf5G1N3RYDZyVjeZSM9j8PqHJWsE11c15oDZV81VNhubTRohdZRe9miAAm9qrQRp3yPMoq5YBAbwxrv8xbb",
  "key8": "4bfbikd2tn4hnqDiScYoQmwdC6DPDH3QLKXUTeBZ3T3pPhpBUYvxE6uR7HwUX1vNfM3WutgxdbLcw6QV67ZNCue1",
  "key9": "3LH2gB8mfnfDYY4JQYdQgFh56NuFcFgHVLRceY15gwGjNf8LzmYdYuUaQ7sTg2EgW16BG6B9i8cWYFujSPzzaCGF",
  "key10": "3nZGDdKHoXK33ZLaKGQ7iEhtphbygNJNjLDrLkJtDyznYpZrS1UMhUad1xg2oX15pMJLsgDVGkbbcC6rS5KnPjjG",
  "key11": "q8imsaxGNGpgb5q7fYUsQf2FJz45n4ED8JHewrHbKX8RqJCkDv9Yns9UZDm6vuFtDUWDvLJoGL4yTfE7tGrNfmC",
  "key12": "AhnScnWnF7u73xu7v59fW7SzQdd89SNMpyJj8UiQsXZiZRGijeeAU4WofbgghP4Eo2uebJwCtmfD24r2BbR9Emu",
  "key13": "37LmvxiwtSpZUuizqde93DiEwCg6qKm9DgXt75ZLNAjzg1ko8DxttaysDfRtFat44o82EiTEGDdGmvNvP2meqN8",
  "key14": "2qzeQJjxfCHd7kcYFDT4TcUyBd4r3b5vjGM2pVRwiDcQKYCSLXvGN5LdQ7fsFdkdBdWNRe7eLQPL3K1DAeUP45tz",
  "key15": "3Z8AN1mjAGydFDSyPF7MCwSi1jdjQudH95rA1sGDkx4Gb7KFupy4t41iJ1QjXRcZMeVskTfL5fE7fNAxrUYu4PCY",
  "key16": "2nz91ZLTpGCnyZVqCMvCuBac655C1v8vJZVkAw5NP9U5RAi99LGtLdQEpy1aanorwA6YUhGyHQG45h3QTLg7FDT",
  "key17": "4af14bBdUem9dDrSs6hzD8JLK8Dx3StJZamdiHGBPT3YVtQM6hk2Tozfp6xvwZNDLYizgD6xkHkJVHAFiEbFszE8",
  "key18": "4jtFLVbYQmVAcS394sEfuzuuCjWLb5VKHjSsmnTzGZsotFXF5FqvggSj3guYQZbyK1SKFosWgHShy7w2SLNShmyu",
  "key19": "2SQLaYvEaaEtG7Mf8CrQgSyYKkJMp6Q8Nqg89QZYcwXPxs7NM1wRKDMbxqHUwB5JBJWCRBbU6z4A3QA9zKxVYEiV",
  "key20": "5hRBm2k1Q4k8ZXUokresUQdN7Kfe1S6NXahfPibeTNQcGx3G5LmwuPbDYSVpzWPPYCP3S2stqZXXJsxsiogdH8v4",
  "key21": "2s1vFTSFLAk4zpPoZ7d39AMbtTTAv8mXK3PuKWJKvzCrsyJd8LMzgdX2DFZQ6BYJYAqYxWRxDtTcAwqv63rAVVN4",
  "key22": "4hZuHuGvhbb53EbyBKwBCmciFas3s1pqn6vTvgXDBmrdA579GA71LZULXyZFfXCMECDsPAYJTgpG274ayg8jzgkd",
  "key23": "33UwEASFPjoMSRunj9h5x4JpkEg24GaLYp2AqeAU3TU2XWFKSysnAygDMz7Bm5Ui2PnNkudiySnTb5sNdPwKb6vv",
  "key24": "MXYojhbGJTv5Qh6bJe5NDab9SdWYmCA9iAKmygJ1PZMUG75ZPMN7Sh8RJ99eGRCn5QykHKQaMAhwFrpG2Zi9NzE",
  "key25": "4oeaNPZGoqNQ6xxXCHPgyvH9BEAmrKkPswBVLsmhPmkbR6xdAXe85RR8vqQxE86FSvFonjUKBSxeyJV2TET3gp5N",
  "key26": "5rdWTfB4r7Ep7BLvEV7yD7uzGSfQRNmQepDc8CJVyjRGQWPeasxK3weZJctsDUjznG2zVTaAnzuLaWe4BvQK9hkZ"
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
