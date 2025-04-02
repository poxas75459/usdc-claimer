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
    "2TLbnwUnMmdGb1cZ8CR4XwMKFvxFyC1Bv8Zd91oAjmjKyNJECmYA5jBNS3LSR2vkDJS1NbBHVTquN1Ahraq7XQeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3io9GzVE1E4QzvCQAP5kZK5MLdUtxGYVntrgPPymT3oaYFv5PGg2qYZ9ELA1WEPtQMhpdzKdvUNBZ28BvCzdP7vR",
  "key1": "5s2GoCDskN2smgL5TmsrEvYYG1zDg6LJ2Uuceh1VAC1SoF11ninN3gXQxkXqq2DcAhwswKSP3ykQvwEpMxD6XHmP",
  "key2": "5Bru7rQJMLbTwgSrVBm2PTtbuBD1TJuds6gKBRnNQQetAFvYX8vvuP6FgYFSBPhWfJByKLS4Qi3arhn7wyY6phN",
  "key3": "2f155uiW6B2jnKZZwjAxngqkfkLBVtfcs4PFGVgav6GAaHGynMevM48NSoGWpGxsTKXuyKygphKbQ2cK2woWhqNL",
  "key4": "2yU2UsHcaCQQUAtqqhgmhEkr1j6u1Zn2k2MBCCfwvjkWPZ6ANkGa7b9xoFj2Guw3W7qDXqVJmEvjX5pcMArpMeM2",
  "key5": "4Y6XMSkjPkpghaP3JwY35nKfGVCKQrMf55zD3E7msJKWx4bNnv48o3jSoEQszEK9g86wyxa6GhQmuyXpvFFq8b26",
  "key6": "4XQHyfd5ZD12AUb9UrJD2g9RUWod5YUNF1e7qBZ4MLJvAWeAQdmW7YVFX3iq3LDkEwjapX2KHqzSRf224Y9M2CxF",
  "key7": "2HBPzn4ch4wZZ8yuPPwwB4zLeKXutg96tQFYwCE8s3xcugiyd6vHGuJfgv9tPd8ZdNWeE3HPrMZVSRTb92r3XMs",
  "key8": "2XE1NeemYqrzATGPxpkGiWjJr2tozT23ZNTYRj6gDsD96Cr81qfkJrUjUyqnVWBwwhNhkg6FqJgcyqjtH5rBifxx",
  "key9": "4zwmgzgBZnKf7CMdwQjYydGpquPSkUneHjQEaiBm8GpejrbrTyeQsMsffEVVZEGppgGcB5iWEE5zRv3iCrS63KyV",
  "key10": "7bYvJWF2Ef5nEhGEXk2T5QeNybJa8ww3LgTX7Rhxcbk4KuMfbyaivEFxQ2dGDS4UFfovgQvK7P4Qi1vngzfJy4s",
  "key11": "4i6wGuwb2YmcK2Yz8NvRbZdMeiWQuRNgzpPgrPRo8YRZdyw4Ud5cGGKQtafGKhwTpKznAszg8UZp43Lp9uRoro9e",
  "key12": "3qQURi8BX14WgA67gpaVMxjAHYDvBCDXa76Js1KKJY3KDn45BcWdm6V6ATer7E2beWENUfi19ASYevSSjy1ZrNtK",
  "key13": "3F3M8Fnx1EyYY4dJ4iwtM3Raem8mpuRG2YiNojGJPhcrVhNQniRXTRmgCtAn9W3hHoSszUDJHf7jUFNX15zZWGe6",
  "key14": "24Whin5TG1VPobgg2qPMqyx829AdYCoCJKnbv5nkZPfcEsDB9wvHQToSZFAgGPE45LXrWWLJ2AzMsS8uvG4yaEpk",
  "key15": "2rx2EfJyyo1Ep5x2SENv4gb1aj9GaQZV5kaUDz8Uv5VhkWPEZDPvvm7g28FP9owW9baKfBVysFT84hv6uLmAzvDP",
  "key16": "2AwApxxKn4XgBhecBSi8PcrymFkN1pjtJyiwa6c5C6Cs6zySytEaJULcvoThMMQFRrQumt8cV6hcSVii3mvvzyX5",
  "key17": "3dBX7XSLt3H4ZgDrAZxgrmK7JmZZ8yzqM68bRvc6SYVfZugtPVgvbKPLiXEKE43tEmhNaJwkjXKSAVq193snVXQq",
  "key18": "Q2wFohsKkZwJyD499KgurowvjjhgDiXSHNiXh5SzCSa3T9K2XxymRpGH6Sv4CRTYyAh1ZfpM5ypC1FV8b2A6rYK",
  "key19": "3A9n8hcvDARGp8xTF7gqtGD9Mku59bb17hamsZPCpnAAioSC77BjEAMapqH2aXscgLwj5LSp7YcWkfEfqu6mdBXo",
  "key20": "3CiXweauFts4L1PEuppLyDuXPfTHNTCYFgeHD2t8ByupRPH1gMo62AvjZvrgBmVxCYmmzdyGD15QRkph4VqDTpdu",
  "key21": "5oz1tbtH8xLAj2UjVtzGbHjShuJyNh8SxxehGPtHfvyGwSofEsNenMwurmwgFZohL3zhDAxTeQiEFE6Quq9RPtnV",
  "key22": "3UCqSKL9Wn8kQYt5L7VUyF8r38wRUiRkp5252Z84DHXTTtMSmE6znFFGdSgkUEpU6fXHXsCyenVs6aAzigDqGmxN",
  "key23": "587Aq97sB3bN5J1nfZyK3z294hE2Ymy2jg5zZ9Vs8o4tVjm4B5gEk9qQGtXRDdfpEdNxPJA4pVwLBLMgwnWyK1XB",
  "key24": "3cG63Y1Gsd5Wt6FwNGFUEqXzhR746Jjj4MSgEuNe5oZqffKu2j7MKVZoQMcfeBhdtKceQWBmwxeCRWBqjzW5AdGu",
  "key25": "4cN1TELQ5Ui1pKNrn2XX3M25x7hc7ReLoYoP6fLY5JHeqBADmGmKFXZ62bmWARiNx11GGt4p2GvmEk4DMuUJSLVZ",
  "key26": "3Rkbb2eTymYYRdmpt7djhfm65yA9LrY1k4d1S6YEXS7HHK4xQTeNAsmiUZA7wSYPdJfzty59NCHrvng96HZMbh7q",
  "key27": "5oQ2zoX2TJwUMaMDpBU6ZBFPtv7kqarC1qREoP7Y1ekASRtyyBXzDsz49LYVCPeVLjKRxcmvFHqXbw3AGGq2hNmV",
  "key28": "hZ5GA4RiBXsbBC9sBvz21GhsDzVnMbyemKZwkmRVsdtJyJgkApZKguWqTGd3oREyQNrzVru6zkvXHkqMA7Bck84",
  "key29": "2rjhcQVyNVricoBysgDgoHo14UsnvkbSZHbkbgoasR29eVWkJQsyZVcL3J7jXNPCDn3XwsocLSUjJVp3JRLZis6G",
  "key30": "pgbMNAMVq9D6dNL93mv59PEtG1dpRUk96yWBc7zTA4G7S13zm4SUadfr8ASqVZE9eK2vozMbZj42ioqQ3EB9LvB",
  "key31": "4VK7eyxgEDsqqY96U8iptYf6iS7jnfSkumWyV9185KyHCLpsgnYZyZzuNAy9uwiyk2RQFBfvDhWFSrG98MJRPBBx",
  "key32": "3VbUqJ4c7RGEpXTNo6rvatLzwYVeMraA2g5pZQMK3o3cfrGYeBRAP9NgfS3KNBBVy4XFjaRasSKxcG3Jvd8BiaTS",
  "key33": "549tKofWD8jJh5T9orZDtysGZxtWodZY34h2eKgrrM2ekZCy3b7xeG9Gmut87XUiH8pdVjsC9QtuVRywqLdPb27V",
  "key34": "5CB77g8QV591WJNvGnQFwT3qyFTjAhiUmfybs3TNpp1qyn3za6DyHNdyrqV1j1jkhGzRVkEGh9vQvumVfLDMyP5W",
  "key35": "4ogNKqj1xnLdposmRwUqUP8wca4EqkuugPKcGKNcv6WJqVnhFR4bqbPnsxDX6b8mACd3G3arqJvf9n6QxQZyo5ND",
  "key36": "5jYgzXKChrUHaBAfypVdiwLXcmRUFRu8xLAu2oczpVuTxRKX4kxmqrqVhNUdkn1aqw5o9feoqEq4bMBTbE6GM55S",
  "key37": "2ACWGoUSqxHFvdNVbbExsGpPidR3dAoCmG9H7WRXDPamWFYVR6FDU8vTjR62ZCpbvBK6GoXoxVozZuaz7icU7CJ8",
  "key38": "2HvWsCAHrJCasVrCPeqX86sq1EYFZRdSa1VC2vMa8VFtMVSzbDohZnrdrCvvjDDNDnaKmR6J47cLzdNBnwCwDQML"
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
