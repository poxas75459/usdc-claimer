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
    "45LWbvUkQZt7Pgboqb4UYyFtnGJwmRQL4Peue4TYGPsXyJAQC1KZ7K7tCqa4jsCu36EFucP7N3hNHVrX2yAaJ8hJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HwZm3aMaHXbrgBFhczsoEPqUsVmctvXL7Pf98jSnMWwtPqkirninVZ446gsiviimUmFjSQ2hQ5CLjcn272CDvv6",
  "key1": "4ny42a3RFJdStFcYQZk6dKRzmPERntvDcg4toJqjR1wNCn9J67S9q98rL8d82v4Jdsf1ad4YWZZDGpTXprt8h7VB",
  "key2": "2a2SsfGJzEaLaGDRVvCdQCEZ2q8WumDGyBxCn7NaaYSkysc38rumeTm4a9X5FcV6w1kEpbs5vxQ7Q55duE63Jzq7",
  "key3": "5hqFEYDnbDJMTtq3CMRatq3qwrW6JpubWFZVHXRvU1nGaFqG3Nqowkfd5uZe9e7R5Ht41mhpGKfvuchZHssoBg6n",
  "key4": "3gsNVDkuMWzGaWg3hu3eMxBpZ5CZKzXQNLuLkqKjw5KzdJ8gWLsfpa1e7NGKbuj8h8qEhfGyDZbfmGVoNcNuFjVN",
  "key5": "Nyf8eNyGuPWbschseMbTm4QWCrep73smv52PmTYfARWDbRzvx86WoKRVZBYhVE4kG9BhtF6voBDwvccfEXs686r",
  "key6": "GrtUke7fC4CdM4geuC6gdD2mDeYWKPVCom6s1CuFcTvv6f6DnDUxq47vaZwnzXsQjDb9zUB9KMqAJJwurBLhnNN",
  "key7": "4cWN9sDQk78DDF1LMss18QmJznyBMfwWneAANcmmLavrQLxrQqehzVVWJVNXN8BpWMWUUsv7jyVbfeoPifrwwRre",
  "key8": "5mrZqz71uQ7o3isPBmDFDZFnH58MTP2cnSRYmQC55gKDkPwmTG7ZPyo45hCUJXQQBZkNizqfVt3svddPpvFNygEq",
  "key9": "4LNHkaz9sTAsySBZuc7M7MSLrB9gyaLBBtcKsX2p71ajBy2GY8yje72zqLYW6ZT1DXGm4vhLjWqspV2ZdaHD7g9r",
  "key10": "2kbtZiSfMrBvVDDTsrta4zgDEJqjsiuRAqSNk3PT66i1tM1HXwoZfE5gNduC3ntAWAddYBTLyLdHQoQk4B7CQp19",
  "key11": "LQHMVyX39F51DkiUJpWrYdCVH3ZvagsDH9tCPFdk5KeidU8sT6LkLUoSnKTNjCspqs4HtrP5J6yrbFtz3uytCy1",
  "key12": "4E1Wna6GnF4tKhSGw2g3y7WxEADuu5cBWNSXXncaSbdJMwWeNT3moXVX7LbMY2zQjwhszKfscycXWavFyYdBjtPF",
  "key13": "3CMbPTTjgek8MFezNYrdfMKAKSbf3DVZ2UJBt2Quzjy3xkFoEfvJA1b6txH151huUhF8SCmahM3zrQdJzLJrWreY",
  "key14": "2388v5TssjkxBpUDHASaFznimCqSf5T6yyaEty4cpSUbWDAYexJTM9gXViSnneh3hHKs6L6bppGsiKGE6MgAjUAm",
  "key15": "3pSebuZvy1J3YGTNP6aUqSsRQzQUWJhiAzSftqHZVXLvwuGWqDpzah9xR2xKaxjKeLTod3H7UFgfe2UnENxrL41u",
  "key16": "314hK1cgWZrnckH3PLYbCnktLTrE1zApLnk9a3obLBjnjjgxgRDLwqNnRt4ZiA4wAGAWY9Zb4AXMPSzqe91ukkJo",
  "key17": "1fQhCgoQGyZzx4k8UDwfevQ4j7aJCp5iAmGYC8NY6VEorgFcuD4ZQSMrccTwRYhBmRmvpMNH5ukuJZaBXoLBEGy",
  "key18": "FaMoQX4C96hnZgo1Tn1ph17LJ7GmtbkmNaBvXwic78ughD2X3PRiZZS1AmRpkmT2SePccCFuoYECt1iCS9fJN58",
  "key19": "3KwkxbHbxLQ6j6cQZAGfr5MpE8VCNS75zBeU8AUi99KXnEbKjFmHoLeaSocWjqPKaqC26ypgPG7WJ9Lz9rLxaDVW",
  "key20": "2uSmJXGvzBdcrtRssu7C2ziYM5PbNMzX2dyPgqziujSbUtyesusoCp1pKJ2jZ7kJTq3tk2KdYEXSuNLYXt1ZvQr1",
  "key21": "4CDqH32WUagBe6CGVD1LyZ5opknjBorFx4ETxeBwApk2Hvsj1K5qHyf12azki5owCY9iB1ir3pfuGTF6P8PWd4k5",
  "key22": "2ebEBLHhPXoEvxUvrAHioqpsevEJ5iLDHFZwyk76n1p9t4BuhA5C1sLngu6X2XXznZDJqijWStzVFgSLHANRcEGD",
  "key23": "3rsVJY6UNF5cTnGFQj1FfMgcjCrUET6mJdTWbL7KfDsQNpgtGMKWB8TrD5B8LF1MHF2v57av8akZpKLhMTbLhdmo",
  "key24": "5AAHcGYReVJcJZ9tM1EyvZMKzwTYaJPz8XzChM2q54a3MKcYeCLKg5qcRsHPDyjTbUjJCUZLX3dAgwAws5RbTiJ1",
  "key25": "2SNmEFTXKLrC23psA416qBsbBXUoBWRVDt45sMgMQjqi9FfTREBL71ko7pfZJBxSYg8YYhDBSg431XxoUHDDrhAV",
  "key26": "dYahaVHx1NeSPEmaBLQ5EJNQZSM3r3DswqFd5uEwWcbH5zz6k8JetR3NXUCn9FrrRiiMPFyPDkhDerYJpbGDvWM",
  "key27": "2BbbhpA9qSG7Cn57ue2V1wYUb9YTt88y6pNSr9i6Tc5WqCtGNRRcJDF5jDKWZWZWQmj192aSrnnrwJXs9NHSrCFT",
  "key28": "t8pVba8S9TAVFMu5ULcdarecctxsQa7AJByEbnQ2KjoUwtFSaJ1DSdKRDrGBpPT2wp3ZwgjaH312SjwcHfYCTcR",
  "key29": "3N9bPFB4a3Q3BRcCLKfiQPh4aMKK31vFkAFRVJ17uxuvqVZCwTJEuM9BNvuHE8eWsTNmAvfWaAydRtKvjf7aHLJ",
  "key30": "4LfaVhxfRwgiQrF9pNYrsYW4HqA1M7BUAx4CjXMFU9WmE2yE3wYTiV31rYn9m17KaiLvw5BbF4Dz7n55nzfs5Xm2",
  "key31": "5evACTG3t1bSf1XGiBaNfEcBAoD9xjks2vqNdmnFfTP9k6hi3ksZkRbtQKjGXzR2gnT5mpYbLtFDMuA7MaBmaGV2",
  "key32": "swYvcEyPN7AtpcPppNuP9Hd9Qph9kUaQfhdDvejojt3tgPxcFXQ9oFaT9HK2nn3kUBGgtuj1pN5rbv9denW4u8r",
  "key33": "2othFLbWC3o53KPkjRqLS8Wd8RbPsh9UFWycpyMC24BtBT7u2HDDFeSB8FUF2A9D37zy2S6WNQgG6aZni4Yv5tZm",
  "key34": "3fpdGKiGThFx2YoqDyVdkjmBpXkYJWC5nv5CLiYBgpVckFKytAhd3RQrtS88oSYHgCowTHmda4hYVMSufkjTpo2U",
  "key35": "P1NY5QHmMJnuqKkki2ZUBbQLxA5ppuoTruHaSFp2DpRizCwnnVDecLkMMF67ij2HYkL4XqvLzHnkE2TTzhdpLEt",
  "key36": "fnAJFecZYFhpuWRSTDccUZ2kmdsTssUSHqTZQaCNhwWNgpB2VTt1bAYVJREH5mq8VAnu4VX8DbhkSVreVST9ECY",
  "key37": "5VtFYHHUiR31RjDPJf4wfG5kcBPhfkM1L8ffhDyZpNCZfMuMCFgY9t3nkGySoW9bcbfvy6gAKsjkvC4upN3yFD7R",
  "key38": "2Ug3FQ6vsC4tA3kHiR62Y4LQfKiS2d2ujhCNpDYTbTRL5qkSjtJ4ZBexKNKaMYExVYsddc9bv3QRJDg5pp5Z4cbL",
  "key39": "CRsLYYtzNhQwwL1Pu1AgLgFFBwZYmZQG2wpepZfGV1KwMFRZHkz5gEn6YFozd57bmbvSNjV6Kg641HW3oAxs5Xw",
  "key40": "61eEw1C7uZ9iMpUfgwSCgTbgQPJWr6fJms8pUsEMLGcqQYZZqzeNNsaavu8toY2yn7hphWwM3kxhVAu96R8Cz3Q7",
  "key41": "NHneSPaQbgfbzLWCmeDBmk9hLLrA4QNpToHMujQvg3qwos7CsRjgqTzBKZPZSyhDkmurndbpeAWyRFA1A4Z7rrP",
  "key42": "3JJYaipLwx9hFeqPQnWddhSVC2mJKSsUcyRzYiw5uAfskWjyFftBncEY87Gc3KLSf4495fzLL6HAuuP1MAKRorTY",
  "key43": "2r2WCZVnzEveo7tSPNTAfMFStJHmszMxfjPkD5GMv2Q9foYGh4aaRRq9pm4A1uMx4ywaeTvtA9wh8DXAEgsdF6gH",
  "key44": "5UMWwXyB7G1asgQ8wMZwZcv8ZTuoUrgaBcRuBRje16hHx2oCNrjG1D5xVxZGrSBHMAhp8s2dyoLJKAoGpn9b1qXz",
  "key45": "rVpTiXe13UP3uiwQ23Gr11cQmcTJ7BsYTqRg8hQL4ApYyrZDhyWe8BCHbYYUzLVHMdnXLanvbkx6E5mBugsHNaU",
  "key46": "46ZYhhy5sto89mP784eicFa4fAksnNZri9m9mqcFkG37ZeDXB6JdncenAdHGmBBapsKfaKADU5kBpqtfUcWSHA1z"
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
