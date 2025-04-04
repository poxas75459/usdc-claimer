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
    "27gJaXHtfuxaFFS5d8YyEArPc5C6LzJ165dkMg5Ge2Zhv4uUvsjJPwL3fnhtytVEwwWmdRhehUsjribayxtznDWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r3sK3a4NNbqemwrEGMsHYz4c97T82PtP3Hprdsvinc6ZybpMX1tjWNDddFLc1wtSEU66rJPNRJZQN5QKoixg9NJ",
  "key1": "2Zwv8Nsq5PuHeoyuoNQs4N3noeUrUaE1217RtnU7tSokKkWf66Kh7dQkpf2i1SFHgay8k61GCcNCWcvvntX2eXRF",
  "key2": "2xeVvrHVDjEmNZ9r2ynpb4cYfGSt9QHRuPuj2iJwUTGgQpQwGysH6Zt3u7JGjUZ1JSb5ECpvnwFHcAspZDWZGEuu",
  "key3": "2BkftursC4tPvYi3rJoZ6F13Rc6k58C5XXPzX75iHgsxZBwfNVfa7y43pX8f2okia4hrp5i7LWKoJ7jgwiS3gqQP",
  "key4": "EGorV1voWB4d4gQV9ZiKCf6trxfDd8Ewoc2Yh8gDfCwxYd5CicXBR9u4Eif5ahyJkbwawmW8idyGyZf73pikRtk",
  "key5": "4MNF764JrmVWphEy9ufnCPhJXNMhCTHoz1xBKTgJuzcMWEDxYsh3HBw7H8TgPEVnYGhHSu8tPPFeNX3iyM7Zvpux",
  "key6": "5Ch1dQi7cBHhZdWBSNSffu9GRjw6DbAghG9oUZeWDDyzzwS5Z886xF2vohBVC84DZQrHkRgLRoC2YYzeCBUBhp5F",
  "key7": "3w9NXn3qeywTP2sAtwAU7ijRw59DyyexjjpUfAN2p288AL7DYfRsSdfgX57RDprhXUdpCgQaySfd9NYA6MuqvnuH",
  "key8": "5SDYxaFbFQyAMyJb8yV8VqbDTbUKtkYz4PbvBPnkMEQQjxy44DUDV9ZGDmCepwBJbdCLhV44H64oTUdrHbTFYCFw",
  "key9": "2JLhtXm3224jKVhwwrg6DaEPAXFJRwwPUd61TKonRcwaCCPRKUZp5ssNySKMHwEuKzTMC89pcgCTLoEp2MQxGyf7",
  "key10": "52mabKfvwjQ7jTif9PiwPSnAuA9fMBJ4Kgw3cT1Gq3W7s7uJkK2KApSWaXZv8ToWG85m1obnMPeamkW2czA2wGrU",
  "key11": "5ntYwdNHv2ZreFpdRAwZwCwVfZDv1YiHFFwMvervQkUPkoikCyCbjM2xeV2uwWGAfnnR448T2WC8nGz42L9y7ezQ",
  "key12": "4ZLJNikkQsyon3g3HyeD84ksco1Z3PE7h395EAWyeVQLTV3XnAhtn3bw85AyvDpxpkyjx2JUavKHyjH7jtKyqKig",
  "key13": "5UwU2Q3b9UqzvbkQmtJWCRr3uK4RRxbnWiLLNUYRVxZGSH1DMFQdkbkLaDFov5QkpYjLBnnWombyjiGes81xTySo",
  "key14": "HnPc2oVuKq4K8CVvHWcWoJm9DiYWH27GjmTbNfkQLDKh7AVUu7abT6DrCKCXg517snWDhmVM6AHL5aYp9xDijyF",
  "key15": "4nkQTZkTse9gje7vKKDZk8B2Cto8Uv2Gnhuz6yfwhSDXz9g62zFvpbfN3KhUp5KMgqTehCbzGqjmsrVtD6ae6QFV",
  "key16": "5DUcVpxrkZsy5awujMX4Tt2oGD4ijAz7t1W3kr8EsvKqx3q2q2YdYEj3yHhZStKKPNUnFAK4ujFVyDVnaZNHxkCg",
  "key17": "TH7QpwGrX4NmKyZpSyxxepYQJwBAWM6jy4XEXH5ujdyb5DujsjTZwCDQRMkyJpRi46uKtW4ZEFpQbMtbZZnXcJp",
  "key18": "52u6P9fshsgZ2QRgNDFxbqwSTgDHnVkdz2MRKbfuNWfU8BtCsiAHkxzXE1RT18T8sFQ761zPcQcgxckEZEedPnBN",
  "key19": "2fiDHtTJes2XXQSdApSqm2HA8AxjyJaEF2KLiR91TfS5FyJXymgQm3VjgG5Tg1nPBCvVjyVeTEcMJ4dRRsHzuHZ5",
  "key20": "q5fBVNCeTJA1KZ7KMXXKWFGwHgFBGYkNNFg2cmdxHjhURwS3Q9dVJqdLv76CStbd4AbgiNRNHCjCT4f3KXNaHDF",
  "key21": "5yk7k8meDVwmmbZfLkFMYr3w8y1QQAdnZFVaHjnA213o4R2AGFHfDpnJyiQZqwH7jbGNBLb1sUp1FYxgyzS7goFi",
  "key22": "djx7TDNeVcYEyUSebCi3ek5D8KS4cftkqY5q9QwqfU291gkL9ZJrYNRZJeNjj2Xf2C7uDsfRc5i4uQXbB5pZomT",
  "key23": "pgLY9HY3sQVnbM9xgKRTRVDYg9q3WWdLjReEsTA4zSQYYRWzeATiUMHR1VSrVXGRzipfpeLZYKGCAbuuXF3Hbhb",
  "key24": "2H9WiTkdVLNBscvVyXjpm4kXoQCU7xmNmShppzwC2ebCW3NEhfGKf6dLeSFGmE5E6UoEZJBTqrRAjJ7eP94ngG3M",
  "key25": "3FtwkLVZ4mGC31XCQwGsTxM9vAnReZMU7T1nNJq3Qy3E1G1arxJGffZvozibU4SmB3D4H9g8e83QmVD58r2iKj1T",
  "key26": "3Ec63r3DYNybYv16E783jEQQxUH7qZUbeVHRdjBPd6jz5LENQx7VzeDhFsQpdkyh6os9Ng15SgCxt2D2GB7R2URu",
  "key27": "5Fzg5n5iXBRJVs7UC23wgRe49zm6o45kK7CLFBHvAtZeab3eELeerg3jsT6HYPrWDm6EAaCZEd91Um9NYKXdjcPK",
  "key28": "2RMzj9YC3Aj3YrNMyeiwJmmmssmQyiBYUWkceikdjsr47ZnFmsdehXMxsQmAZQ5y8MpGewknz2VFfSzSERc9UrMH",
  "key29": "4z1GmqZUUh8mHh87nANLZtsPfunz7HmsVkw1ZhotHVszGjFBitJuTYnCReJc2nzAuHM8bBdhm91K8TNwPHFJ2p9M",
  "key30": "3NsYFsRrt6Qr5PYSoA9BcZqjiGVzbCUGaZTVpSmiikv1kjyvMVAcmr4HsBJPiHZ2adGHxkqy7bVv3EAQXCaupSuu"
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
