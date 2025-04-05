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
    "iXwNMxBqafGsXV1Q4FjzuH6BrRmt6yrFiCFvMFGMrz3PJzBR7zczLqA2bCNRqv8MUGRm29Z93VtSZ1SZ4GcC6EA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48APB7Q3fF8Rv2S48L7Zve8iYkrJvQTrSbByxdt8PmkpThipoyvzyo6oH7KmPqi9Ye8uXKyVohshGPshvmufm9ie",
  "key1": "2oL2xmq9Sp3G99Sk9Mdyf2Pbp1Xa1a9EaBe9X6opvnpfM2fsibUgu2CcM3tw7ToJouCU5JpyAVfTBVpqzmyoJmir",
  "key2": "5cwbvskJrrfGqJHoEfHxWRyFkKVAycN1aNHwEEsTrcHwxf1cirxdoF8FSv2541NRetTRjjq1R6wHXLhCX66EjhoN",
  "key3": "y49b6KDJuSYJDZSujmcahe43zTeXgEqbTXh8jo3axXcmbzEQ4N2LdGDDyAJixtHkmEKyQzaBN1EGMmMssMpNFSu",
  "key4": "2y6bZ3yyBFhQLucyCScaMhW3b3yx9emCLWzu6A3Wn23MQ5Tjj31fSjmmH5AbiSy6U9C5R8RyYpq5mS6o8z6TLuna",
  "key5": "4TLmA6Pser47dY3ndhRDEz3bWJDEhHtktRw4PUoa6F3n2jLvRCiwUqFrHodTkHWrtVE5UCGJpi2KCKMCGft7ZNMj",
  "key6": "5WTyvRecejaUBP749G1hH81jKRefintzavN3hMii8qssi1AYDGERKnx9NZHrU7H4jUG6GB5Tdbgs6A5ZNEK4kkwN",
  "key7": "AH2QPCxqmZK2aaz6RLarVLUFs4mronaXUE94SGA8q7VNMKWkJjYhfU52T435c5eFmxY3gm2TcV9DWWyFtpU7t4i",
  "key8": "4ECd6dDb9cxzuHRHzmhJ1izviR5naA1Z9Xjr4WMkYaeGGhLyydL23KwHqnYELk1UAZccjQoit2xsByFwCeVRwr34",
  "key9": "4JbVey13tfPu4CsisFCYkp8wJdD77E1GQc7jNUzctttaYQsz85cRTfqzdicN8LzBrCGzaQsPRKbaziYs9XZ36VdS",
  "key10": "2aFc987eUPpbJV7DsczC6rsszHMX1V1jRcHbzfA9dyJbQPPSZH1pa8F1ih5zvUCugdLmUdSqvAsxeh68VH2vKXW7",
  "key11": "2yGM2k7fhsxFr8yXSzbnq3H8bysXcVjxZ6FHNeRXjHsvwtnsRtNnZW5wfvUYZ8xV1Z4BG6WrVvtz5dkE3eDPnmfT",
  "key12": "5JngS6dL7ZTod7DwfQ9WVRoV9zoWHrsgB6QhpQQcrpQfijZTRcMfkrmiFxe6Rmx51xggSr5Sm5uXGrFXEnG1Bgya",
  "key13": "51SdoKZj166iFuZJANN2x4LtYEJ6WYaB5RZifg1m5bfaYc5kH7zapJvaNk6M1JTbK9ZCo65MHQF7SdKvReqei8Za",
  "key14": "2VLKWqKgkLH1RC64Y4vA3G4DftBuCH3QLY36ZJqhP6uxoxGKEsUsdUqxDnn69hfCARoTJ1Kbq4yLYUTzkR16Uno8",
  "key15": "2HnuMxkutyD2RardoL26mbgSBuco4jEGoWgrUn3SMMrz1Q3fpK6VG78TN7zYCs3MvyLSe2vKvm29JKN7P1yuwLaY",
  "key16": "PgbviwntLz6NQibn6CxS77dbRgv1G61BN1ibbkZdmcQR7UK6TpFdiEBiFZLjgRkezCq2xRwaFHSqa23jARbGvUF",
  "key17": "5qeSXDHV6ftrVuwtPcePuDgvNnESuCLM13v93egVd8xavp3J67TYfD2hw96gwyvLgVhCZtaXf4teYAuKg2vZjEHX",
  "key18": "2GoCdCfobmVFRWVjvyRtAPehipNz3dXQdCZqnMQfsqsHo9AsxBjwHahtCaHRFH3wBLSdLp914b2KyJ3vXE4f3Gsr",
  "key19": "9TekpRPEaCP5UwygKAkw7QzvsBtUtCpV3xxpV6G7ud3m2tdL2AKUxc5xpqRctkVpUK8YYtqPN1rsyrW6GWU5d3V",
  "key20": "5RinJ8KZuUDa87Y8wanvL11R3kCfN7oXjdipubVfrmTNEjRXVHhrP1R1PfKin56CiY9EqpPEC59gjK7mNKzfLzev",
  "key21": "cjRyX6jaSWgFCKhRKZHGvYmoLjM2a96wx3CKChZiEFRYkBdW4c8msic8Raotr2eUS4CiSiCn52cubczELWJkTFj",
  "key22": "4G6aYbbqz6YxrLM3q32JCXPbs4LQ1BDZueGipcTvEGpS6VBbmvBzU1N5PYbvRbSKZb37MqM1tM4HLEefy3x5Ak52",
  "key23": "2twto6cdpwhkB9co1qZqz5jb67Wkz1vopeiaGKExUD95wcFqwtkiUcy754fyVkYkLYk3HWnfauKkRMfdkcJCVHuj",
  "key24": "2yWQfR3p9GyvmdfGAN1mBiTSg15gVZ5UecX3nBxgG8wooP54Zi1moSa9xu3GsPxppkX2SoCPq7UncmgDa3k9ooy2",
  "key25": "FysRTPgnFB4QnLHWPzH2sjBR44nJP3o9RXdS1kpKnBjYSjZfAD1BpjzXG2eYbaiUZvB3TqaS4o7Bdbp8xx7c3YM",
  "key26": "2sywqk1eJ9kdX7uyi9Dtc9dbsY3FwsE28XnLfTRrfDEgxGXkPafX4vHkiWqp32rgLipUDkaXu8sDVF8jdaF9HZ6w",
  "key27": "iTrNsGr5XpWqbuHaVJaDGt3eppw3EV1BaFo3QfdXfybNT76FTiw8dngXC1dBb4Zqek55xMzQuWSxQNQuccmAVVf",
  "key28": "4puDWaCKTobiELAF73E3rtDbZDBounHNTPdcj4WLGqDwijiuKBN1TH1oA3bYWcQiLJuHvSjSJNyDdVY7MRaMe9t2",
  "key29": "3o9me6gdE7ADhy4YZUnjqPX6BD4UEjdD8fPtRvSKJDEzd8r7ZSG8sRWjpej88q5xQKCJtdhy5oLX7nNLQzocNCvY",
  "key30": "5sL42dBkSFfhETcnVZP7NgvZUGjvdLX43HTAvtDmk85FLAYXdS8b5h9U7aoBnYPnRmTPuerrUgR7N9Nv4PCxXQw8",
  "key31": "5yxi5PzA4AFwVKwgZooU3weUTyDdh2PZ29Ru1iWagFBbLYV8TLm3u2HYohdi2vuzCzaWfPL86EZbY786uBFtEYiR",
  "key32": "4nM2YWX5Vktbd9t8KU15vpBTtCsLvEdqribjdmtyUBu2abwyDH1iBhw6F12Wo6e88M8swar2wQZEH2qV7tJmpMEP",
  "key33": "3NW8mLTLJuvZRiGFVjUuGJUW3EoXAkM8VQTJQvVAgV3n2k7qhXkoZtZah2dAMbjz2fPyd9xWb5eziFrJV5aqu6sb",
  "key34": "nnn49r1sEFqsWHtSZP9pourbibBgVDUudTEK69qDM72KKhwumVbLt1ZhSpwCnmuo5uknYEiDHax3mazHdtc7vf2",
  "key35": "GszbYwjCYca84KURGNhmLExrL844wyTHwdMAjZbQqH8zCyst5ApTcgbeFjEtNgeD2iK7RZmvHV3s4t5rpdVNxs7",
  "key36": "24BU4BG2HU9Rog7HysM76zNm4ZK25Ayjhkm4Ndonhe82UdVzjG3cNTBzZMDwDZDKv5YgoAuV2YNn6GwLRw2YX3k8",
  "key37": "4Jzjtq4biEzf4m5kwp315gBFKCNyBCjeYBj3CFD5UiJzBc2UwXyxmoeRp7TotaJBrAgC79abGwCrm7f7zJvnc28a"
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
