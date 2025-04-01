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
    "24Amw2T99mYVTp6Cxt2NGstyz6uZCj4DtAyKvTZnFxTmudwiJBxPghGBu13ihwoHuLhnjxSt8RJH2LtVPy2VmcWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h2GsbpcZ6qS7eAH1XMWgLv7K3hEmZYeDF8QmTdC5MGpvxBwyuhktREEXNYt4RuJru8rm5uDAdaaNRhJGgQGa9fu",
  "key1": "3PMrAj3QBiowRtMwSfwATJimDJR1zoGLSNV4Zs45afcfoKdgrK7br8jqEtJHcfVfsEDyXD3KzBiHaodXuqYioMtn",
  "key2": "2WMwXHtnnT1peKkS9UbbTaWkL3ZMyA7sVWncYieqSAdSGiLvtA8noeXd2wGXHCFeAR3HShB6s2u1E4amRZsRhPgn",
  "key3": "2sabAS8dEaL48XXmZzMLPxwvTtNuC2XspDrtm2ANfk5DvSTXu6Y2jJHszzKeAYzBn3W6gh4C7FY8Vz9kYxGe7Uec",
  "key4": "5oazGVsom4nY8JijWPQqYvosoMXEwmuYutwWBR9GhFnN7UDnzhFiTphnccFrAncrtCRpmy2JM3eZS2GbpoFCNTnY",
  "key5": "2qdkBog3uNWq1dcN9LACXypGZ3EAFTZ5SjfX2p4SjY7p9uT52YLm9PbT218FY8HgA4LRY4b5z5cAVVqx38A2MtfS",
  "key6": "A8JXzC8oGrF8C5hrbhFnV8vHo3GUDnt1F4D9tfg9xN8ro6UQ3NDFQmKt6yHsjzMUKi4cyv2snr8eCCRmSnFW9m2",
  "key7": "UgmkviQBmqserZZCRzXoRAxzvJmLJEhhhT4DXhibU2HEZnKzj3JQT1FMoY8wvChaRun4sAJkPbYXs9vc6PFuzHE",
  "key8": "67RYpMBN7MJrcFEy73qHdJNHR4UYyoNgmTA9cFebyz4D2jKjJ5trCroNaUFHiQinpPqmanwk4MiXXyZtyVuMjGNf",
  "key9": "4XM8nxjjsewideMeFpsszi5GWJ65Gh867uWjiCPzjhJvKLwA1tLvLyQr6MAB2g7UkLNLpeTD4PVqKdtmBZnYyZsA",
  "key10": "4L9YvGjNZTAPZPFtcSqbbVmQscWZkx5qzq4SnwszTMhmzYNiA1Gh8u58EvrGzdWoov7BnsoiTcU7vcA8ynczc4u1",
  "key11": "2LyiR7wMbn5riUt324rDVwSxHWQupDZhUbKFh5VQ9Dr4iFcqatWU6Vy6Fo2MGXySNrsrjBZikdg8nKq99Qe15fvc",
  "key12": "4DyQToWGKmPM7k3ZzEHsXrKErs8bzgNm1hK35VJanhR8j5qtWMLWcz1ar3iHD96UtqtNt2muxncf28KvMGhnNiSQ",
  "key13": "a4oZ2k4ao4XmAhbVmYTqi4FfCjJKHeKxf7ubzeKcJnuSZ6TS9PagUC1d9wiRCjEhDKxyZr5NUVg1xd5vzSY5mG1",
  "key14": "3rfpSmcDXuJCE4ihNGZ7L1F4fZMDKnRZqyzg45moynpJk3MSN92GGx2EW2KVx72k8bcHWodqNBAXgh28BsaGvKQK",
  "key15": "2BmdT8FtwAQhZRQtfApMEcQu3p4EuU5DX32Se9trZZoyVwyyAH3T6G9EqaaBkYneWrTDGehsXe43PHmAMzWWFf3v",
  "key16": "4uDDJSjqUSwBTQkoEodqMB6SKHaVuDrJkiM1Qa1GLoHiJ9hiKzFB3pYcxVxkcGvyHb8vicuFGqAn8M6WnatveTHF",
  "key17": "51fB1Jct4BfTGoFR8bCxeGTRXS5uZ5tfANiBtY4nvpcmVynJG1hxV45yyFNQh81AS5pBKFVb3aRKPRvMhvLaYctG",
  "key18": "2mn3oVCLytWXG3J2nupRiVk11EKxVQ3m7ciP45Y7x5XD85rFmqTAd8ST1mMHvA1FFGJfNVmqowokQ6G74tqBhQSx",
  "key19": "5Ew84yMxJcJHnsxG2t6xNWLEBpZ6hXRqZJ1hxjbYJnKmJBPrzGFP4WuY54oUnsrpmL25F6kKBgPmnNbx6ZJA88Jf",
  "key20": "2pYjS3enMUGkYjto4NNSm1ytF1zgYKcfb4q3AVNLRKvwJ5sqUxKhpibGCDXqBbVyFSbtWx74eJGyzmQmdY9GP9Nr",
  "key21": "3sZ3Wu95xLHbxCA17QPZvHJ119PifMBt3MtzaSavjTTTFqMa6sg7UEEWgdSfu9dyJPJ77uiUpLt9JpRJWRasfcow",
  "key22": "5FU77tZbFfPDo1ygm4hAQTNecENCtJc6G16XF1xD9hhDXUTXg1LidCcBEyBjM9oNpLWzYdte1bpyMCF9UhSUnUjg",
  "key23": "BY8DM4UqyQWERLDV9iARkbzBt1p1MR2s2VEAYeEfja28y8AK7Wefv8atRoWWagM9waKccGNFasDNWLFrFL2cLYh",
  "key24": "rpvK8LPVdcDPcwKFReS3JfwWNPFpyB33oNT6rxxRcXUGXBKRPAX8y3MFDR7YqvHANxLqmbPET68CWmGyNHLasVX",
  "key25": "2Fqa6NJKZNE1MCkSo3BPXYtBnK22bvv7xyhDr3meXNeUxT3zh6jU6LAGN8jmuSJhkEyRgw8da6hfocz975Jc7Eqj"
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
