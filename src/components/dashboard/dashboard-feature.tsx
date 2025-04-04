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
    "4EUtHx4Ddr6gc1cBX2NKgzmFfV5cssL9m5im6Ejt3p6WkArNxdpzM6RmqGzV1Xy4FjdgXBQxYY44kgZbPn1uhVMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hjPuSeEfMTzU8oXfSjZX6n6Hv8z22E7aWs5u5bzZ5VqUCpJFJE8SSi11DC1VEKTrpg2JUgXA52cGm9LumXLXKQp",
  "key1": "3xKnMM7uJnkNEAXPA37e6GTEJdEVsTR2W5GYM2SWxjvByxNXb2Mt2cEreCTrfznCgs51EirqND6KKE4TKkJUVEBj",
  "key2": "4WqFhdk4fVnKWwb7iU8oHUGkrDzZ76nT2Lh9nVE15VN93WSUvvbgyJTxubSMWNan5Wv7V7PkfPcnkUM8tXjxCMex",
  "key3": "2ziQqcEPjvizY9v9i4ZTCkH9MzWP1rNsZEHyGMWkeFvDoB9HAy7RYa8eovGLjCzDZArBWTjboHuEe7AR7kiy8FH9",
  "key4": "561iUgNVyZNRD1cT4MmXHNn9a8S4RyshUoUkjbQmPGxjFkFznfBiEUtPuAoYdFQbqXyKiZmyA5iHvG5F7qDtpo9z",
  "key5": "5n8Lx7FS63q32bf9iXKQ8P77BDXpk45skeaTyxRxEaZGHzqkvBGNTwjMaukte53riuXgkQB5KcGn7vthrCoGejAx",
  "key6": "4RCbN352KtNV5Nei54HhJP3N5xygNjLAHuKKCQcKtuEkctRcGyniKbBaUNgiRzHugV5tNGBaZJGR7TyaP75u6pCu",
  "key7": "5ib75RG4cirwC47dc5MfRFwndBKKDTX6qX6bbkBdYAZiCQx4RPTdkbyjXmhVjhu2owELF6BdMjwn8pXhnaz6qUyH",
  "key8": "2VpviE52r7VeRiPzXCKDCEdejBgudu6x7egfmboxZYHGpTrsMto2ZG8aWGJXe9wcvf7T3oq26XyfN5SNegp7bGMj",
  "key9": "MknauSGysAiZW8p4ZzB47WQB1Vdu3E5dseSzammXmH1CY1LPqYpS6s7BM77ZkRycTxrnHVQNHmn3kE3zvwho18L",
  "key10": "2maXauZ2iZn3eFE1eTgwsLN1oWWWfwzngzXNX8i3wuMZRGMjb6PPcKED48WnQWTbppfzfjkfSPzH72ZMAPLurUqg",
  "key11": "4RMMYhL3pogXGezog7bZbFZSCEa8LBzvEDWyxSzf3hkzJw2aGwkUpEooH3opvxUtHm5XCKjb2SDgg4wfgpbV4gJM",
  "key12": "4mpFfhUiKGjNXGtZsqgcVcqjQwYzdACgNWnZ3awhxFgHUPJS8aWNtqMg3goHfWtAsd6ANHpAT7yHWRSgSwNx95tB",
  "key13": "5YyYaYimUF3QdHUGoT3GZwGzTKci93uwV23j8c6y7UrwxxkrS2D3CNsiNLzYwJ976kj7cWcPLfprE3e1Rhcfo6F4",
  "key14": "3QbtdFLZ2a8vtCXQ86jtY3dEQVFgnrdPWCCGacUint7qHD6UqGrbU8Hvxdbnqhkf27nDttrMxYXxYX7B2JnaDQTY",
  "key15": "5zNK7janCmoqUb2wL7d45YniNCKQe3SQFkrXxAZqJUCSNDZnEBCEZLd38QuzV7gkJNvxonr6pKBYpeX8MYHBWEAN",
  "key16": "3CSD52CiQgLpGiht3AJVvE9HqBU2cCfuEcYVFt563hApRL11CYjDgiVET7meLinhkQnm4ni6uTM7PJjvDfjRabv2",
  "key17": "29VDhpVCiC3qbnJZWosbTDsyz1PzHy85FdusJcYbZv65a16nuf5Uzjb1NJrDKweu6JZTfUp4tLp7ooJUdTwfSWKN",
  "key18": "3ekZ6DMSytDgDZibrNRkc4tNDRox8YB2SF2Q9uVrdvcECyeXKY8eP3N2usDaD5pDrq5xYzt79VP73ZY2LqXsNtNC",
  "key19": "4maFFqy6po99onJfMZC3CWcKv5cxeSZJzakKpKkbsv2VaofRDrQMeHhTBgzPG1tLG7NVohLQTE35nKhXCUhvKo8W",
  "key20": "3vymivYcnSQaFEHzUbWhx1JW7Zyz9dYrxDGQJ1Zqv1iKBAG1gzjhFGkDCDcBBcMooy5U84x29Gx6ZdEJyiCJT9LB",
  "key21": "3hH64Ne93ANf7f4jVevMRK5NjNYgg4BvSrFNbxf9anc1ZHGPQ7y5aWkd7W8NKMVGjnzs56NGpYMbCFXoD931rdLo",
  "key22": "4wsHumyyGrvxHQjMqpD3LsEgXdCsCZNc2sR5mBLFvn8QZd9gwu9fkAznrYnXbHnbNQP6A38uZx3vnHGk7XvN566r",
  "key23": "2eHPYeqQyrQgSnGywYDch7azBcvSuUfZZS51NF7zuPmcy6ko8Ucv5bU5PeJurmHo6XAP2upsG1Z4Fm5XCE1ZahaN",
  "key24": "64b5cSZBeiKm74LG94Mo5giMKL6ZZQoxjjchYFQR81U6zQyXau22gKSnXJVQVS9qBmzX87JQ3ZByK8KYTCLezX6S",
  "key25": "2k2RTpXwU2zfhJKug8NWuYid6LoeiMhPBPXZe3yvbod2rHoz5Ge9yqQ9wnz3ATZw7CgHJYnFABSA9n8RzJiuGUMt",
  "key26": "2ZxaHrYV1sYH8cicVaKyrk7jaWDPiBkVFy27SrGstirDzt7nEHbeTZPEjX7JuiAnSV5TehRnhgaAtjLbjtwFPRJ4",
  "key27": "2Gee46gJn8CWtytFaGJpMwGbrVFPyaogHbUtzDVE34uGnaAt9fEYKNfxCLoGwgjeH8E1chC3o5p2G5wYBrU9pFaj",
  "key28": "3KGXXBT31QLY6wy968WVnfmgxTg4iFnzSDrKVWebsL23XvyzTmttpSXQxooQSW9X6ZiYoyZ1v9pxmc7yTczyb4po",
  "key29": "48SFmbsHSbj4kpojJ4K5oD7M6guNxhF3FAFfwnLus8w3338UfdUqzFVbkTY9oib1CbHZSR8C9v3Cy1eCi6w5e7JF",
  "key30": "5ny1u3G2944UPbKgay2Mvt9sFtPcSECqdpoE5vhoQ92ThKDBomhcRX59ShjcXdD5pooJxvHuoHB8h2BsdHHujwUj",
  "key31": "41vwnwpg9WGSSfLmpFx6PNpD7wjqVbMLTqbbREbCupcuQq7JJzyyZ1aP8WWhKCNWQ1FqPTb91JXjojkP7GoCMKes",
  "key32": "4iY5TQzZVpDDPwx3DbNWS5Dx6GFDe9eNJ2Zyi4BTaadBURU2NCYfseGQ16ME1PRA8WVEtaQSEzp8pSkTiJXzGafB",
  "key33": "XFL135TZAjdVSvKiMFF1uqwSmHGmR21Jn53C7eLpJQT3WqJuV8YVGywuXFEQJEz8TFqC7sJrvXQyLv8DEeWoZLu",
  "key34": "3TXTBAVmsR8XBebdPVTnsTnT26o24yP2tDNoMDA8NGAhVB15vQdwyKVXfwS8LoLMbHgd1qjpjC3c9pbEce2u76mt",
  "key35": "2Tnwa8WLxt8BfhyuNespqB7Uihx1BXUxHaq4rJGbjeJtG9PvibqdYzeHLL3Vt3SAZQDQEuwR4otrw8q3QwrXuTa2",
  "key36": "3Ky8ce4dasBG5CfatpcQAAe1cJXXBtrV7hA62jEdARHntqZ9gdmbS43zeGphX4MciSQdbhwebPsodagi4runc4Zw",
  "key37": "w7r7YydoJcC4v3LyzMjGnDGXjNQHUW7BdqQazoMHnXQpUjVnMvh1MbeUt5FRxP1gigKkQog8EGSRYYGx16f7T4q",
  "key38": "5pLPGgHE7XKcw4RyphtnGg6WzW1CyA7eZg5cnmsamhvt1PeWSsRNsR9rwXAyXiM2QQW3roCZPhHZTmHopGGJMvN4",
  "key39": "uDVxgbz6eLJnRbPySTLEpVLyoWyUoQ6qBNg2uY6hrG6h2ZWmGQArjPLhDNdUF9hFzuzrTyYQvgZGVdrRsh4nHfq",
  "key40": "5ohmUAHfmbsk1aai2B2C1rsMj28f3R9BRZwbrygoRmQWEKQm1Ys3hbfPHWSATF8mBeCn48JDcL8g7hj6jxiLUvLM",
  "key41": "2EhM1cyaJp6AMio3eGPV2VCVBnjFA3BP4svMMTAxekDvKp9GmxtiMmzFbfp3BgucdgAsaGc4ubRHVrUjX7JfSi4Z",
  "key42": "5va1AdtZr5ywBk8LzGVENsU2tQBJNjjYVRm2LWhdDhe9F7PSwZdufvEy6YFffUKxhiUVWnuy2Npt94SSXW8hzrYV",
  "key43": "4SyeQCUjpRyTNx5dG1NUcW1hsKZuJSuiX9Qa72AFWhWw8DRRGLxthrqKwUjnX2u2X2TAEBRAZtzCNY83ssr6s2Cq",
  "key44": "2Yj5W7mD39PRCdGFpRXv3yxNtX4Z5981vwU6f7BeHkeDJamToMQLbSToUN47D11hDqcaWymq3wubRUpAoQiEFaiY",
  "key45": "G4LiUe7F1sYAfZc8ZWCafCcFKd5Twykxi3aXZbYXdKCTvfZZb9fYqw6ZSTbeUt61szT3ixvCdGEacZ3bUdHnfE4"
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
