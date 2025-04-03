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
    "62GwFcxgWbqmx6YLTyKmSkgahNGNoWhMUgFdRBfAA4o4Zz5ZexqjC7XzQF8tTWKsZPbsMmcDvPoZuCKndmh1wDWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CajW6bkWctqguP8gP4tPqG1wrouHkRbrjCLc5Vsng8PMamU4yzYCZTszPZYP8ESVdexCvKcBCKNbP9TosgKNRBB",
  "key1": "5DMmipdw4YhewBnpwBTrE6THPfshjry9pFbQzuyfPHF6od2SxCxEFMVD7VvuLZG5DpXtde6NiYtsDU5ryDPVUQBw",
  "key2": "2wkfsP9NfEkw4Mf3sFPSf2mRap8Ws7PujgiAL879RzqZ75YncgLvG7uz3NftWtfWgLvaKfBKFYHPY2cgkMyqGduV",
  "key3": "2BbbPk3gTDJvbB5vWMbqqhjuYSEirDuAqJnx7tyDhLk8tdpE6xbaXvuFPC6M65urAsxas4sQ1pXAMjDn4x9Fg4Bk",
  "key4": "4LSmPk275oy875mmdC235VGFgv85TL7j3oANdPTZf3FiBA7aCx1fhDy8tTjrn2aMcrA6ncjJm66qgWS33Y8DrgDH",
  "key5": "2J54p8dxvkaUsjHMnwtDaVw6Ey5uLNEdXjrndm9AUWnaM3MAE1P9NJpK8WCwg6GYjiEFD5MNDaMzVuuu5anus5r3",
  "key6": "3qDsvnfBeQTv1t6mqR6NPYZSFxbTzH1yg7KzuDZiLzmZffiCWcVYg8EeDT4nfEEYz7wXTsNANcuy5k6GcS1PJ8yd",
  "key7": "4xHFdwSUgEQRGQiEj4KUuy73xHHUCRhmEm7FKiLQCyQZbo4DXwxKbnQVN7jfYaWwzxNobrypJgmNhi1e4DdPdSWu",
  "key8": "26JnqJycAaRHhgXvpeXo24itSGTQubVsHT57JnWKMkxmF97KqhzLvF2U6jYL229s9NrN8ibmCwn2hQD5wFGXsn3M",
  "key9": "3BVQCGL4QnbU6Kpzdbt2E5KErb1kHwJ3gS2TotbBYTJcwGxXBbdegneWjgX93JoJ45XDHVwcpvHg1Gtx4W1eUHXT",
  "key10": "5gKMBmcf7HdZJQ3WhPjyz76Y3f88Dr5ULNg67JAfdTMTzQAaoifSJdw6smbBYTZptaLLXqV3jrmNnGwc6Pik3XKZ",
  "key11": "27uVj3EteohuQVjhki8BSjYayfaLKdBHxVfbGjFnNYeCi7b4BuqVvLFMkfEtgpRkuJhohCFgrbtdPPSGMtPorVeG",
  "key12": "2KMo23YuVCLC26VoC8n2trGAphAkF7YUZixmq99WKjtfues5T8EFvy1J3cYX2YMyuM6jFnPNsGcPh5snE9aBcx2n",
  "key13": "xknT4y3Pfz8xQqi4dgc4Dvjvxe6jVn3yAZTLuNpFeRwcRCgc5Z5Zn5nMJ7G4cXN7vAFBWErY4kkCjTsBYRhL61V",
  "key14": "mL4oSyjEMb9ctkNVvRuP5a3R6NNk1SRuc5XdS8FpZmxcCVMshucGiZcc1ZFbEfpgdVoAgTxU9GggZqrt6VLqAk2",
  "key15": "2RK6oz4Zby3B2y8UK6rf2UGj8FdrFDQ5j6MxxtH9PUgrs3vAUac3eTNLhUMhhYnA3ZjrvEweVQvChrnqskj5jRbS",
  "key16": "3SPH9nBaXbWY8L2tzF8HHFuxs2VVaqu4gNiwKQ1VqzN66sMmW82KAiGk5bbeLXvhg94qjrdnFwB783M6zPck2kmP",
  "key17": "37sxG3uDPJLban2PnD5T62e3suhTUrLh43DsrAHSEnimdpCtuCHPVJ9aUZasj2aYUejMDrzyEShNYBdgXa2XGqsT",
  "key18": "kRVh2jgFAHSJLL7U3eMWrzL2Zsz6zbzL6xFDiNjgGibzzt8qdbCLsfvS9vea6Pe8fyfD1YUQyKzSkHZiCW55DjV",
  "key19": "4HUymxwPYeY4vKGCgtMuKxHzYrAzsdHsV5vQFcipVwnAhi8dqJN4sa1cQkNi2LjVXEQwfJCJzy7EkB5aWSQL1hL7",
  "key20": "5RWocGDQGncNkMhXxjDDEp3e1TChb5uwcFA1UVaaEVtP1atBimocHdyGjpkgSzZ6VTd98ZJc7GTAraWLom7ZVakB",
  "key21": "33ogezYSA34DVXsjZ5bXjBWQP9smN5vow4tzpuBo2FihnKM4ndB7x6ZabbxM4K33Z9iEtjZ6z6p7xb423mGpzAPH",
  "key22": "38XYji6sVfdD5omzzJe1wTy5XuDjq763WdJWpGAzwWucyhHtTXy1V8bbHWkAh1nKefUg2sTdyPSwbZFwdJxSLGwk",
  "key23": "54HNrgjQpDDk9qf419ujYwyPwNkcLcuJyqwpfryLrwjqokENcfXZkSfgSxMvUkVLKWmfHFvBXa8cQ2HXaQNPB3Sq",
  "key24": "2JCnTnpvwCVfU5CFGF9NDML53H8iKK6nTKwGqrA1DZV5hhe8jcrZNqMFkR8xD4wkntVNjKgnfHhf4QoLzN5K1R8f",
  "key25": "56KnDzzHwdsM4GdsRytTkhnP13tLnuNhP3nVn7G56J6jdznJ85uqLHrwoCBaM6EdMX6d13UZVKXjE4h6VFdnF6Ad",
  "key26": "CjRaonL4LpGT27tFYc93rUnj4U2GZ7Crt19B3ad1Hyiv3Zngmie2nUnWNZYf7LdyadgWeG7aCoWNa6krqLVNAZ1",
  "key27": "23CNEcpMG2VZbL9oGf974NYNWNMcNQcEwqe3Qw7RwPjfRRDQVYLC8cMAMSsRNFTqyYTtHLR13b2euSS1CuxpsMvR",
  "key28": "yNF5XXAcaZ2pPMZmVhJBd8XrsrCaVkSN4C7rDK2JRN4SFccgAP63PyV2a3US4ShuxxkLMn9TgWE7ecyWL2s1719",
  "key29": "MWgszVfQWjd3bz5PjC2D2BiLBhP3X4XV1q5BTGw3Wgfjsg7vgyYrfFUkvrNHrvA3uj7JTVtfbEyriZW8L9jkouX",
  "key30": "5P3ySCsPhs4txBimL3fnycAnHBoVkwBGszJgXdxGjy2vygQJRiJEjPEadgV2myZSURRQGpC2JAb7eK5Po3S9Sxy3",
  "key31": "AjbtzU6f5gvN96amixmDyo2iFyZLCeVror5ht3ADScRg6tFYKfpdnP33DqSr8BDLoSoAVWnQFzuCXQaT5nV2UH4",
  "key32": "2d5NH8gW28fcTwRcgeptnZ9tMyGWkJ4SgxjjsSKR4BCxibzDg1x7P4py3RULhxyiw7jhsfhCU6E1L2G5scMkM6f3",
  "key33": "5jYagbBg3TixV3oMf1EJ3agFKW1oFRER2tN4QqMvhmdPJ2xrkC9LrRLduLQktDX3c6XSkUiTP3NPAD8X8GJAtCuy",
  "key34": "2CLeur4LjuuaPa4P8KqwWmUfrdkWiVoc6RYkFSSTuHYKQHsTna58jKt1s1GVfSnTLdAsaJieP82RUofjze4tQggL",
  "key35": "3SdZBp3Zsm4UkbXEs8vbJiokHFnPN5CsdgtbLsjAGz5RhnT1q3vohkXqX8NFcdvBnqmvc5vmMA7uZuLg7mmt53qR",
  "key36": "xefKBs2gpHm8uR5uruNGvxqG7wuf1Bgbnj8kCfQUJ24Usdmb2FUtVAEuuxtwj5x76uHkqaLZfxWWBrAZ8i4SRpA",
  "key37": "593EJLXnGJemdAmx7VpEpPtwjLTpgL92cEmwYMDY1pRKadN2bsqSkdfXXAYGKSVUd9mvxecH4kuJZTkaes45f7xp",
  "key38": "3x88WyU6KeFjkpeUHzZCMesqcb3WGcKo3rKU6kYHKsJeqmSRfYRJoJWoYiLiu2aMLxEnv7wWSk4reuaYu4cPcGkE",
  "key39": "4c5zcQgntMo8DGVJ9ofcK9ytj979hTW7ocKF5YhPNs5y3spWueAJfWbzwnhmnJ1gtxpDaKFZhwa8jZwayiSBPesq"
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
