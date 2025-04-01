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
    "4TZZrCy3Z6nbmAUcG4QXbwjWgRzDkJ3rrVGECGVkpR7797HaU1yJNUN4HwShHrW1YFWjj5QmSoH1k9zsQnvcSRDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cb1qLioxRN6iAteGok2Aj8p5uXh1LPACA9HEuzMZYmHcZcMGSrCKeVcq4dH9jYwF25R2aagMAGUbohZH8ikEMxq",
  "key1": "4yWVLuLVxGXpBtpp2b8o5ZJQAjRjDpEa1q1yLKoZharQoorLJnndUb1DGK8V8a4LWDnYoWR5dBFtCnGTDJnNWnHo",
  "key2": "8PMtapahx14AZSvyvGudg7WySRWfiAkDu3cjeYS5WPgfNDCzBvMLm443sFonsZmXRxgeCkX97rTFkufuJ3hu4X1",
  "key3": "4C3eBu2rKPbpvbiXeRKhorU2F6mwtmX4pqU4Uw9PZdTuD9RnngMnVZCYvpkJcBaAUQHKnRpmrsqgyop5D1evpkFd",
  "key4": "2UHX851NFUN1kDXSQ2GX3RwVEWYarzynqvH7Q3pTFEBuPyZYoSBrDUxnPaeYryduu6QLVU4rPD2r3rPCvVcGX5Se",
  "key5": "qV1SFe7ksfSTPgRwqqUYHzuLPHikXj6xbZXbK6jaRwMC48uf5vQVw7PWzEBygr4g5ezEnCds2vUN2K68A67D7sp",
  "key6": "8MZTwCDozkYHrA5pof9iqoKj9CE3xEFw6fzGetshU5WoSSiUkQjR2PoxrN3aRBT8nHXUdG7MfHnkF8NGcJ7GGiA",
  "key7": "5A2hRZxXvGJNYTQzsF1zg31JxoX4MY9atjYeEKnkhjNgnz9YG7M9CLzw4TXukj3be699BiJEHCUgPkoRrNEnkVzt",
  "key8": "3msucxnrgUgo3MPqnjTLdm8UgJGEE3WeyayJh8hb8ArCMvkLkeCneGLbTBBNpPnCBN6aW1LBNVR7grrRgRTVJ5r5",
  "key9": "31K9k2oboeZGtfoNBYW9NHUwAZzhYwcb6r4DhBymDx9gykGiv89y5WkNdtdGFrdN9pUJJnaqYSuAVG3XuHZw76Cy",
  "key10": "3ThZCYcXGr7kGokhDmTmhGqKuykQsT3JtwirdrA19rUKjAs9NTsFGpY3UFacL2bNSvjYCvQwavE21zRDGLzFxmjQ",
  "key11": "QfYaNRoxG2AdnYv2U1zRWZvDgkmiMTfEHrwC8jJjmMYegpjckh77uw9F8vLkUfWeu8Q4RYQzHkBLVPdDdosBe87",
  "key12": "EHjWdSLMiwDeKSgSo8uLfzCgSpDBd8N6i5z1uz6sMhsMkkoUmVCVgJUSAPoLhfjfLgLWt92rJn1MnZmRyjVg9yy",
  "key13": "2Xx9YsPstVhVfVJYtLFxKXSqWUs8WogLKs4w2db2fsn2xp7mEmpAB3UVRQdQQDwxABYxbZmwfyqb2pL5iuW6firc",
  "key14": "dz6x7ZwZmn7puzAHs8DKT8H6p7aiZ8qRWDNZWLWjCm1khUMoh8yw29knegNvcWX7rEudqaZkjRBX7e7q4GB4twU",
  "key15": "xTNVDNYpH7ekcsn58v9p38nTQWnBgBRqWnxUhVJ7SrkQZP4TKRi7WiveHstLSkEknZjqWDife6sqXWaXe4KxxDS",
  "key16": "2NgsCNBcWGPiNg7xvzavL6YeWcoq34M4Jgvdjj2AdC3QwwH8T2WEsiPzezDGXMmboqVrKfHZ7sLzmJDQ6DnM753u",
  "key17": "4d2WQY3NH3TDd2onq9fJYyXuop1FEfFmXKYZsQxGGT3xNDDeozQ4672x5wQQtYLjUvVJftPrLkgUnbZkBo9GMw2z",
  "key18": "2x6BYZBX1BYMeXd4Urv6JhoyBspdyzGi1K3b8mMfyrNfP6CwmbPzwwwr1DpTrbijTrMpZzB9jHkDz3oYw3bkogSG",
  "key19": "5EhBXkyw5DRrfV5Su1EVcyf4S6G5tQBmhcFQVnhkLrGsUua9L7ZJctZAHVSCj7H3HhDmyS8Wgaq2xaYzXmudiULJ",
  "key20": "k9aaQpxNwD4TDnzRozN1HzgT5cdxCeVbYmjKgHD4Wryvde13WwZyfPmMtxsM8vcactohwxuSoM9PoA9hYeFmkfe",
  "key21": "2nPgqn3PbGdrD9rdXJFBxVvZgjfPdAdW61AB7WJ7Uha3Fj1tnEfNuUEFdY4ztcP3c8tzALqzHaxcWATLg2bxUwpP",
  "key22": "5D7QCde5aitgVMmUeGTiDq2baaZxnHTdSiuLJEUjsPQXqbVvpVzufUbu1TW6KHJZTgfxpDCfey7ojMBXiTcqezWV",
  "key23": "5ga8oGEJBpcGfe3BQgtknCDbyh5swvE54Z41vgQ1h8Hy3Tigh6LRYhRpsHq7GWUpSBsq2WPWPoQ4dR42McDfdqY2",
  "key24": "3yHSJ72tvscodDkGPmJBNSWnTDYu7EChhdxmd86F1MwjG14f75xsLngrJ8JAHRdwULXijUQb3fbohCiwfm8a4PdB",
  "key25": "5BAkL5rekpMsHu1yrdWzTVdy7Qa7YMkLGf9d6fG5FGYGKRerjfwYA8Qwbk7RBaTnQ4v5wzvH1HmaXXgXCNHzVPgz",
  "key26": "2wvFQsaUvGzJHh15wttVEo92tDScD2GEbx3EtFCN13rE1yRQsJWmR1biA5Ye5QBFePMrxmaXRwenM7QrKos1TsZC",
  "key27": "1k6mRnnSjW9U9BCBHmpYRFSBgmMiR5EM4usCcPH7ZhhJn4iursBVkTvhf7Wag6KX7iz4BtA4Ga9U6DBddTn5cK",
  "key28": "37W39133QgsBNeXhRMmuhdv2MACss63KKuPXSZHui9D9htcTs6Er4onRtxDxS9LbxBckSCyDNNjEqJavBGSF3bx",
  "key29": "2JHKLfpqCj7EuPfByV482tg31fwjETsWcmTdWCqBrssB5c3swFSgKNKsx7nHMMZXFKJ7HJM9GuHrPXyTM43g5suK",
  "key30": "2zkKhNxD8sABjfuUpX3GGuF8oXrCFoSFqFxCq3zKHiXr922TfyREdBsvxGQCYkcRPUFGoxwJzJvK46nMPNZZs47X",
  "key31": "4k72mD9mhGpDue2RdQXbPL9HaEJDmkoXeAFTGKxxNmRkWH34YHowC5cnNDKpkmAJgkCk8GWSCLjBG675mxKXqKPR",
  "key32": "ApnjJEQJKuBssheZrW8zz22QKDKcCbrFvpjVPPmeJ6aYCfvNstZTfEAazjWX7u6NCVr9J5xFSEaNVWLHEePNrBA",
  "key33": "4kpx8CpW5iWMDLibF3peiAg1DzxVqH5CQS1XcJKymFfHUiXDh417Mr6YwLKz78hBctnyoEm7pxkkwTkUHSTCCAzY",
  "key34": "4fKpdtnPkieXuPbApHuLfChHPy8xKScXtRYcRFi6gACoK7M8SbKSZyK2kiMPgU3WsVNSMsYLmrh72tHjwS3dEpAo",
  "key35": "5jKAbmAmPfmZ2edJLge8PRb9orqf1UDyiohKgwH2HzRTBFMc4hcCxK8LLGLiKQke9Dgh5fLV3eFJD5ozSAtUdczf",
  "key36": "2MmM6oeSsQ5Ynmwbm6gC4xFMvWqKu7PvqJ1TSpyrfqffUHXcy1dMnkGKu5mCafDMXVqQFzbiDQkf7EwwJRS3QVQF",
  "key37": "2AtutEkQdSFH311npzT8pyNr6nRBaw8FPQ9e3qJe7K4ma6zV4RWf9fak5HmkaBV5CW1Q4C9fBShC5Po1swTA4U7Z",
  "key38": "3o8dzboodFNX4pd79GcSeGDvsQH95D2b7jqkohNWAY2AnjEZLh9RXDPLjXtdtkVXiM7Di6RkBRhXqhtvgcgBkA4",
  "key39": "CL8oNYm7Ds77UP3LvrSU5w4Z7NmEQAACmoBdyFVT5PTrB8sJnnp6NpbXCLfKyYKpbcW448ybGTyKF2Bgdosmv1e",
  "key40": "seH1eBVdupAn9mZRQa3H8xk3QVijKS8Wm6N8L7UzmobY8Kq8GNikV5mexrWvdp3AQNsfcSkkxw2CRLjD8f1ffhb",
  "key41": "5M22YQ1ezAxn5uehNentF7LzmcqmrQSWrf4ABcKt2yakyMUkG4FYbs2icbWNv2jxHuzfjNEUaEa3Z7fVRK8Ez3yw",
  "key42": "4Nnv9a1bGrzS6YmKdvuABHotRSTmcK7qpKCcPnn5cS2NA925JrFfRwAxWJ8rmf5NKzRh2tNEVtunLrQsKzuSofk3",
  "key43": "3gvw5q5aAMKQsbY6THkDKaFkL38m9H8B1Nrt1n1P4iQNMhqCM3Nn4t6BVb8CZ86W1NNjt9Wr6SGfVp6k79wxFt37"
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
