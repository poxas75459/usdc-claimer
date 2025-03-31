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
    "4XVW1C5hss3RZWanuVD8dJej9UqTR3bghEhNYcctDmnn9MnG9kiCC4FRPULiEqvjWgKQahbduHDCFRYCnWhYLhCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eoGdUXkGen1mexrTfwb6cgHszcpSjtfXJJcbESFRbvoxamxSouhGnuBs2XsEztR4SjUwacL11c5Ux9XSqU5C5r1",
  "key1": "3Cb6upy7FmBo8fuwooQABNekULKkKXATdjP6TcMrqSZYrRwbn2S9AySVHuYeEwkiUEmHr7wMQDKi1qe3nTgJaEXS",
  "key2": "5LMikHMqkcRVg2Wax2pZhZweWQq6Ld7WC6Z9fmmcy3UgihgAcapFVsdCEzNrX87gcvJF82v7yfmdPTaLiZCeB1vV",
  "key3": "2R2R1GVPyPnEpsiBu6qrzbiFjbrsbEAYfmKknnb5okRAyrvbF5HidpCTJCkMj1CUJbNByCx9sHfR3gKLSWZKR8j4",
  "key4": "23MezcbejsC7rCnfBwuowVUV4qiGi2f3tJFd8EuZCKkwCeHPaAdtFHjxhmHAMPz5LfMVU7XSKZ9sfvyFCc1SyY4f",
  "key5": "5xGe2Y81FN84WtKeu4exXCZ5XUMLGWZTpyWvwDqBGUR8MQBmfuH1hP5NAbCDicsbDPWRRgaShh7tPtWxh9PpqsCB",
  "key6": "y2fm8UknSYgpQmk8EcmxtYMy9AxH9XbNVV3aQ5UttpR1BDqJbMwC91GydUxWae7BKAQnRuQ6x3PqfGLLESh5yvk",
  "key7": "45HVZFYGzGgjYKnQ1VMqbFowmFEDPor6iF4Yj6b7P27ZKVvycEcEB9NHnJKDqB8r7vP1SBYqFaFiJkGAEi3WCbcN",
  "key8": "5TgReZ1KgJfM7Zxq2j2oGXg8YfJRQhZ5XVdP17zh8qQ8WNsSqztEGEFWftBjQ2uMTA2nRfVLRRRLeG11UGiHEKRo",
  "key9": "3vpBoMEzTiyxcDUBPFzaUgdEYw5xUMRPJz2xemeDeesw5qWdtjzPVmv6grf3cDt5QDRpXDg1AAdK2QSdZfmUoQBR",
  "key10": "5Vi4u1z1wrtjjjNYxjW8gbdT2QVK7bjq9pGiaYp7YXsdDAsymXEyZDTWvsHFFpdbkqdAv17rzK99RqKtUNTgnKv6",
  "key11": "43wR82iKotd4KFucwCxnDDjXLhVXU7ZVp3anVSYTJoFrKAfHr3rmEugdaCzbSLmvSFMjR1wk7jAzSDvDMLT9z9RW",
  "key12": "2VYkyfWqgo9o4RGn4rJUtM6RRQkvr6hNJwoSc6w7PseBNNttZuJGRTncDNknfs6ugArY9z5CGGF4htUpyi4qNYNK",
  "key13": "sD5nLv3LuLAUMVLB4BYt4gVp7HS4HndmnauYUt5AcGPgvYYymLAQoaKMKFjXeVGZmrQPESKkaYiUEKidZRyC9aq",
  "key14": "5xktvQXDASKrnCFH8fQzkH8FvzUo1mBDsXdSEhbb9CE34LrZM3b1UGBL1EwDQjyQS8ygjRqPvABvXrAGdd1aNQNT",
  "key15": "5v7UXDZ8ifcWq3gUWbXK5owbUU1P6vCb9yysrgjH267jgGtNL4jKHBwJ1tKSNwT2PppLcFdoVhViRqVkYJ3eFqw5",
  "key16": "XCp1BJrkbhogKq3b7kSzYxQEuTYeW7wEU6zaiaVkV9x48Er5dYKo6AKUfmg6r33i9LqVku7QfF3zQTyGMg6kfUb",
  "key17": "5chGge5pUYYYNLPiESkP5zgN6ssi7wSqSVmuM55F35fxARArqb7HH8hqVVNgA2WTH87EDpNJEzwaH2tupjSd45VV",
  "key18": "5HKQF24SLd9YbFgEWpuJvm57URPxpEE3P3zHvDbup2ZDmGbAKayhxf1dZGfoCU5FbffHe9g5PaFVreZjKmGJHeaN",
  "key19": "46koiC8xSnJqKNMMsHcG2BtS5nV4grceahBWyfJ73tpAYMrfpFfy2r8AqSmohWUjyYAMMCu9AkDeHvhuMFhiAZqM",
  "key20": "uEaYReb8aF4usK3HAzrurEH7JCwFrbRqyB3ycbQ3Eua7jNPCFJqSfcuHGw6vfT9WMsB1BdXsiY4jHZRYYh9Ymdk",
  "key21": "gn8haqjdj3MhpTEocAkXEfv4VRygTfmB9Gj2nQZnJAE6QBmAZEcMhebJuuG8cggQbzKjmw6L4hBeBUvfVWjLsKz",
  "key22": "2CPG7upKB1qZZwE4qvEgamiewHryrJPSbUw8V56jckVe8jr37F96MQJCX4jg5FBSdfmV4Rwfk1cUf9W1cZay7gp",
  "key23": "35BhFtasXYEfdXQQfPmHA5Sv8S463ZmKcp7AtwjdVFULWmqcgURjm4ZKmNx858kEFHiKKhfRFSgHxrZBGzCsbfgq",
  "key24": "37ovDWNpcRVeMA8319xim17ExcFXEDsD74eDQVM7Kb5oc8w6b65P239t2vhTFfCN5Wh7Xy9QTUoDBPxM85ZjFug2",
  "key25": "5Ujv7BgSwPpcDzFZnVBoAYzH9R8jiUskuLRvUdz7VytPZKiY2KsD8cnpfvvScV7B3YzbsWzJuerkKLyV3DHqcVog",
  "key26": "TzzZkRoFArVPYt447Kn5aUicVUqrFMvyDJPQ2Zaysd8eYA6YswbEeSuM3DxKMrGF8e9SJhDmcRhPyphJiJmSURE",
  "key27": "34CMeYtu3GaraKBVZmaDGBtcQGhNHFHZciyS1kJogtuL2pGNYJgXgUd7V8PB59Mj59c2x5ytaxaVDWQiAA8DSBT",
  "key28": "5udaSwJG6tbqzYqfahYd1HSi8VFNRaxJPzHjenuMPQ9rkaSBU1uqShJr4vhJ3oXhi3WxdDHwj8K2C5p93VLcixCH",
  "key29": "663Fbmd84VTm4TSEk8pCbQg54EH7EeZ31B92WpmQfx93q3uagF1NjVHFaQuAtmicjmL3sZ7zzaDamJ41W3x1ynEt",
  "key30": "51HEhvtaYBu4dWHLZVqqhDv3Shbm8sTfE6iX2kJ4YUJjmNvMfsVNTWQtUMx1jtdsQZHfP1BryVV3Cyfhs4iRvymZ",
  "key31": "2vK31QB3aW74Sa5VcYdvCQxGgKp5j1RrxBPbbZCx44euk18Z9WyYqdBai5A3Tpgi6Bz9NCw7oRooLfVktGxFyREv",
  "key32": "4dmT4K86zDCMHP7v3iCEk88eRmHoVpkZfrHcErjCubcDc2Q5U5qTqUaqeSUNHgr7NKKpdkMTKFmhxYF9BgCBSxo8",
  "key33": "2uhghbPmxXYeu9kfWH7PHoZHeh3onzyLE25CPEPBLgvLNjqLbmvBxZaLcyTE2hEj3Uqdp4b6FpThq6uBTFJPuCeq",
  "key34": "2P4RAtMW2PuETog4JFMv3vn9m1K7gkxGb2tqHarG5JcW3hBXsQVsa6RMEarK1qnbRdR7XWKzuwsu2Zo55vmxD1Ey",
  "key35": "3m6qFR7SxQ6yG2adZdXZw2pYPKD5Hm7wZp71e5ChqkWj9vZUnxacwoRCn61yA9SURqi9jXyPJsEGJc1vWQtfMdnh",
  "key36": "2YHP8WmDpHK6E6fD85rg5shPa2oQqSmGCSHKFxYd7b2r1Hy65fdJ5KPHM2tdCKbS2Uh9w4uY7MwYFJfm9LbviLeF",
  "key37": "4AMXeEXCKQpYm8gDTzaXHcokNYZi8KY2LfwqezzJQCJEtVXQsE5w8xuuH2y6vpnSPVgSG3wVjEHACdadZEtNo5JF",
  "key38": "56mWbatwPEof8sADuiJ9f1gbb7JMLHeyzJUWWJRbwkQUV9FprEpKu1VtBMB2src7fsnsku1i8XTk5ACN4pmoJvV8",
  "key39": "4bvR6y6aefJnc181aGm9Z349oVhaFuDQW33xrHETm25s5Eh336Zedaf1wDVR5LJsqzKDwFRDo9NeKutzynGFk4K4",
  "key40": "ZcYHGus2GQbi2Vj5SYpRdYrpH5PxbSaVNxW3JCuveWfmC93cnFfkpxKPMK5gcGYHg1m1UR5WLFZd4a36gj7QK9E",
  "key41": "45mZmDKTJbFXidspek3zSVNtqFVp2TSY3v4b9RuPzQ1H34daYK7UqiKF48GroTXDB9kezt4TprnSevr8BAGBa7Mx"
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
