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
    "5gz291LiJMGwx31AgT2xzJ9xRyncFcHDwaR3MrbqKCM8bk1WVKxUR7Yf1ipRhgB9Wq9H1ScADbZhd9yypoupzbB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qNEznaCUmE2P6ba8Wqy4Hcg1HRZcJKEUCt7BsZ4CrUDy5ryaU9PVpazfyVwq7BVUAe7Jsb2casXA2wAnfzuiVAX",
  "key1": "2V3zEvCeNSrhF6E88ytPjYCwbpAV86vHSNStGknSY859HvFxSAZsUdKZUp1K7vtjxav58pmEhreUJSmhEB9RbGSo",
  "key2": "eTsKBRhViGL5JxpA2wUyctpMp9RoxVmkK84M5xgXHKTb5my3qGXi16fYiPoXvfwk7zCAnpMjAiGwMprKmoVYcFy",
  "key3": "JCWeHCG5F2XduxP7ztv8fZysAGdXZJ7SFVRpvw5xs6XLiXXyRfzBmxPuh6LxmHv4NPZHx9w5wbTajkK2RC4Hjp5",
  "key4": "WyuKY9iQBdF4uKgtokixHtq9VCn6H7U6P1djoE2NnrUGQEH4UkLPvaP2Efr4qhMpQWnQfWJbAxA4EvuaWJ7zuno",
  "key5": "3sMLYmVW9VCAGZ4yaMriCXbEzxkL1hENRm6maT7KpNCpUfVN9SRr4fo6buALoLDGVfRe5cNKy3cihtSxW9iijKSV",
  "key6": "4R5YVc2QKwoAKDjWsGa71EfajKWfMaP5Nxbh9amzTQk2g61tYLAxRsTkkndomnNFuzQsfRmjvjavfMrFe6cppnqe",
  "key7": "4GTcjG83JdatheV6kZ8grRmDAHU33EXE7bkyw468CSgVxMJhpojXbfpfmMmXnPcAX4LHw9qWEeWc1NKsVuY46mmx",
  "key8": "5jCg1VWhjGeTpQdo47MgmKdcCCEWdP61HoBqazKYnQfCyFCjnUx1T2xZn3Xz8oVY9XiuSBk9V7S2EoYj3bnp8JYo",
  "key9": "2zhETDgajGFZVDnDxEwNsnvt3GoP99yaqex3gdh4Gy63K1HoALovExviJd2d1R9ENRY518Xr8fnhks5D7YPi7k1A",
  "key10": "5oAUDXvdKpwSrWxvGZgVYt9SKV8A8xu8oSu211b2GzHGKMsEEVsvr4cqQMFMq41yFnewzbYrBiFA1T5dKrN1TpFg",
  "key11": "5jhnvvPEiG1AqxTPBcfbEJEHakuNVDGseT9HwWKCHJuY6ZEYAtQkrbpdQVRF8yzadZhnD3v6yqPzdbaoS2MH25Pm",
  "key12": "wQq1FdHEcFysim7w4mxQSVaYhmzMZFb6UWhFhbks5AQcz9S5bucAqzuoDXdtUCLs1vsi4fvB5ZBuwCX7wKbKd2Y",
  "key13": "3hNNcsedRMjMWAZRrC84VzdgqgbNgYi4GRFBBsfvki3Y9PgXgy24raf9Rvw5Z1RTk46efenyvqCLwhVJwuJxJchZ",
  "key14": "5ctQz4zufQUdQPZpgM3KTLiEEHBAoPQDA76TzwkxUv28KPSz8Eks35XCVRTTmT8X47HYrpApJEd8rq2FExPcuvXo",
  "key15": "4czwDfDFogmVuiVxZNr1Hd4JujiSuvTxChLdpTqDbEGruxxaiNM4MxDPvc6RkwZ3q51X1k2YkRcSthhUtHfSHptg",
  "key16": "4ao4APmkj3vx4oLCs74buSHA4tKTFBS457McgHQ82EuDPpVBRLuiHhu8ijqbnLTikeUvvJRdaJfLKH72Jpeyj8oZ",
  "key17": "5fCkMceZgivZu9JJZnMttpyQmCBMcdeFENN94WstnPHo8fV39hhWRxj85B1bPq7fWQCE8ye8mwtBaj1GGkohi6Ws",
  "key18": "2rZZ3H5ZnUxoPVgi5iH5LsVAhQ9oRZo84edby8kDDPticxWrhiSkrXXkcP2MStoAt4TAr3hTovmZT9bfDmSwMk8M",
  "key19": "5bcqFe8pgXk3udkPwgnCUY1DPEyp3vqQ8qBViuodNtRjNvNvM3iNy3mVjpBGSuYhc5uui1PZMSMKd42NVfs9u5Yw",
  "key20": "4LCAeFfBwmT6p6joRjMU5xy42nddqUc7ZkzaK9p3KvuaKnqAkbTyA2P37TjSpGrgsfySWz9ZZmANScSNXJ2bwzqn",
  "key21": "KL9ubfBNVLvGzmD4B4K2rwJq5pioAyoJVmbdVuayLR1J4xjiqUC8dSM3QQJW1Dn8xmZk1iF5L23HAdWgD9Dm1Js",
  "key22": "A6185yLgZNkFbLxuB2dK4qHBWeBWNVPrJrzNAz1EmvwUAjBHu2Stg9cbcbRsF9CrmiHxX9DxdKGeVqqYv5cUu2U",
  "key23": "2exT3NLw1As8icfzTWTuVW53DgP2gzC5DRp3N5eajH8LB4x6Wd6wkxtZK6DK9oQfwX3QbUk4CqyatDEMNsUZtV5M",
  "key24": "4X7NqtCKviwk5rTuYzpyrnV1sG5DrcgX9TY6VgUyeAQy5FCSGmufkAEHKmbhwWamtutYkfriAoDnfW8KsSgHfgNB",
  "key25": "PJFm6uGs9RM3nVB5KP5zSKEJaVVRzSVt4sfFzdEprLoLZbHZLAMsFB1y26ZqzjEKP2fAcT1kEZkdsrR7Nm5tiAK",
  "key26": "PrivfuEur3uHw4Wso3TV1wtD4Jyoiw4vCYKDYwz1X9DqKCNgzyuAxc9GpWh13snLpUQShRG6TN7UP3x6CEExLSQ",
  "key27": "4nhF3kz7bdiV464dD83wgNmAyCtiJpatb4sE4yLYYZoJ9gAC66TFTfoGNcKqG6xdNRayU31xWd375vKWJKFh2Sqo",
  "key28": "43r5ipvPJnRkCB2aVywZCCmv2J1WkfyL1Cp68qgbFtd8iV7jHiBG8SUXwVTC4ykQGtbaruneNCf6w5F1RhghTBxN",
  "key29": "4DBSMS13sPbf8MCcNCFQb97idiuwc2kyvwBRccdYGwQtX1teBE4AZhSZeBa1vdeV3wAUURYPxUEKaoigy8RPMVPt",
  "key30": "45xHaNzi5qqd5UUS5SXgjvmXKVxoUSEQgVnPN82hV49FPFhiygJgYz9QKVPd6rEjWBQr2zyAJAU5ff3ELphofVfh",
  "key31": "2z93a4a6iGkDMDaHRBifAaia81HyU6fgSfBj5UHAmzWnikQJ27BGSG58mFTQpFZUfHHJ4So4icRigB5oHpypDafE",
  "key32": "65Sc221QcMzwQeVRQj5kEFdCL8eEaeB2Rfcj35YBWv55PaMZv29V3qShxKqzdKGPW5YJdaf2sKqmzJZy9ECqv3WS",
  "key33": "yxXiCs58w4pVzJW1siVj64ALPCasQi9WMDiLy8mWtiMaH8U4P65k3SRcd6T7gGsigJEAK1nfBeAaccFZfD4cQcf",
  "key34": "5A4UXww2eAu2EthcEhKVFU6dwiqfyWGHaN2o1GusAhmyKtUum4T2RoBHfcJWdQTsiGju96iCtwubn8ZvWKeNCKL3",
  "key35": "61Zp7urKuVM3QQ6iq2BZBsQMtkfXGnJ6JoSNwAG85H5J3rAKtDNM7J24qRDLhSnXnarQ3Uc8bTqjEvFSjW78Ccms",
  "key36": "3n42VGTNJpJszYcPXv3LmsaT2gBpNmZ5pJBGSkZLnYuxFozUtettpxuwSBe2rn5gwNnyfEoNyHqbFsWZB6NpmdF8",
  "key37": "2xtC3fnWJdNXDX6mr1NsXgNafUcTHfPZQPrGpgVZQg6hQWaCeKAXJLxeg938z6c6FcHcFHz1G1CjnJUU21kCAJMs",
  "key38": "fk9ntr23ApnpZQuWPuz4weEqdBMvPwhDYJFVcAUWadvvwGtdrigymwsjnzGkRKAWCmYo5YGUUKtBrDrGYk3oDWk",
  "key39": "2jTn4TWpJp1v1ZKCjEkAsErZwyEK9ZPFCe1mxx6hoiwh7QuvBdARWVKLqXNFuMJUqYqhjdZebbygNjHBCHfu8QL6",
  "key40": "3BusspYusHT5LDQtf39ZgPMYD7qJv1wEM9ptW7DrDXHyBfK4eU7KXFbCQ7MCif96w6hWEdot1BaYEV2ESjnz8zgc"
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
