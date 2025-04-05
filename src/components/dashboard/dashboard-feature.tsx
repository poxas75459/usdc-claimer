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
    "5LD7fTVVUkqLz8iStJYMEa6PJhYS2v1tUnsbhAKxv5XF8Hhv4kH2pJoxXxzzwRQKjw3526zxQJkaC5kDfZEsm8JX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dUSprdbJ1RiuYNVEGyUkubAXn7EosyBcDibn8Y12pDkNiiTXwZBUxozBVMSkhHa1atKHrNoVt3yibf8bm4F4BeN",
  "key1": "UbEEuY1CKyyJiZtogr5gb11n55F8DeUUUj7yErZmiY8vK2UkmaCDUqhh7bMmAvkPdbjyRydEUS4NZAyJKtTQfYo",
  "key2": "4Cnxis9AqL4JcGJpknZhTcKf4hhX6QbRJvmCm7du7srm1u627nAuQJ1DoFSH5QYrpk1PNzpqeBTSyAx5apb6Eger",
  "key3": "2G7z6NUMpUgh6YycD9Donz4bKCBbKRTaHSJUKPubjNegXWPYW1FvAGFzrpNVnMPKcmQ4BvCn3xPs9pgqvVcEtMg9",
  "key4": "2VaFfGx6XzSnSkvn6dgF34D7pkYdMgnA7kR1ezPugr4DSvM5nEQeE2qnvjbAFzhxPDhtmyRaLVo2uF6PYFZSkCZe",
  "key5": "4hKScCPiey22qBDSMjTwAAMjyqHHyeegSJkoLgmMadyhUCCgaekj1j3ppFp4F1ws5wgumDvuQQZB2S17a8GQ59oy",
  "key6": "4ELZo3QhxDHuFATH2nM3krMBesBePXQbaqdmd5oyR3eDvLzMM9CSWgHjH9YeoAorSVVFriHBdroVcgmcaPgDKmqx",
  "key7": "4STDgCPL7CzSaFjsx1fNipizMWdT4T21iKzeMn2jctAgE3Mzjo93TzxTes6JmGZFYu42zpV8ZfkKT7DGAQa51JPN",
  "key8": "eWfjvjq63LKYj8tRmPUb98udnJ3AwDfu2mAPGuCnCbcDZSRfkCodSsGbHb8VvH6T6s8pJcAG3aeFcWR8PnZK3wW",
  "key9": "4ySdrRXdjbnvUme2oxFBvvLoHb2vKin6ntUjevrgFudwHh7PLoFU6h79F5aiEW9Q99okmxu7NXQSWBQyCridCfVQ",
  "key10": "5iHeJi165FY8v5WyBXdanFnLEX3cbDD9x1KnuBmjLj2uiEGBf7dNFzjev8MWnq4JGGgdcMU3BMa1NJh2j2EoN1yc",
  "key11": "XsUnBVAMN2ACmn8edc2R49AFUBKrLDQu54hVCZ6rKGtfkaGQo9KfrgCPV6zgTnWn9z9xoUQPJPeAkNF6QrB3ErS",
  "key12": "2w1A1T2moy3iD163j4Sxy6DonZF4cWWanMPw9cTn2YH687KmiVR7bjQo2u6czGhwgdrnyHSipjibcQdpTP14FzEg",
  "key13": "5jryDDR38q6rRmM1vwySqbGPKShXqAt2Nm5k2MhD8t6Fbf9x4cviWFf4owvL94moKe8zFwRLr2zhzfeBZNuTSKEM",
  "key14": "3QU3XJBivMqnjDHwD8uXKcyHkM5jR4tn6mev8yuTiYVTWiuXA629dvgfayAy2kErrtJjc97RHNJF4tZ3eU8oxeo2",
  "key15": "3c19gCRB3ZAf9yxmcpH5HCnDPdEEBaUQKMsFgKPm1WnQV89o8bKARDKfTqW5gSUZ5x3rrSKw7PQr4NMNvmAo8U66",
  "key16": "5Tu51CULzdPsFEZS5MTWPhrTEQVN9GjFaAoLL49oqc3D2LMkirxNbS3fv2gu52SmeXa7adKUS9tYQUGWqxME3dvJ",
  "key17": "612otn8Suitj6JX2CHPjn6M8THFgSZiF45YDoXCYKdWivBBXiqep3SX7Zs3Bjdairi1yao3wg6jALQNYjLd7dBr8",
  "key18": "3ZfKBPuW8UgYoSazrwtNrt2FrNHRdseBpYZrxBFCmBD46WzR8cDA1qY91Er3mBUdkEWA3PYkCYNKTRWqg9bbuSxn",
  "key19": "67DnT6dfZFsyZLUS7EiNoAjZtTf3hGQQHXxCQPhwtHz5rrDCedeVnLwbf4u5gdXAtZgD1qQTzCjbJBYvPkzy8zrj",
  "key20": "fFD7NSZ2FYP9fjNmNXAczto8FDzLefZrQcEmAKrXf4iVHYfABHq6WqHoQzePPjHY4dqnycfHdFVVn2vRLq3Ya6i",
  "key21": "9boiX5tiHRNJ4RHxbJnry6A6RTDm7K8fJkogz9U8CuLmsNtWeCJJmDCEFzhotonx8LSJo6SUbqd5LevBKMQyueW",
  "key22": "5g79CuXH1vAqvbjjMT1o3KTKSs8jUDZt5FahcDov3CKPVi1BEiTJDrHhnU828b1BBRf5HsYXa5ecd8ijf5T14M5",
  "key23": "23xswpzKbSbXDKaF8q7Qt1Q8dwahLXWj1kZ7tMz9p8BdXCjM1dJ9481Tj3uscYXQfcSi286ZRfBWpaibjoiRAwmx",
  "key24": "2sQ9q5eXGAGtkqeCohxZv7nLZFHKo6nsfDviSbvnLyQ49LuMZdvqMVpWH1jL6sUzup8FXKV7JiVLWXJKxj1s6kkY",
  "key25": "5Z3SSF8xDqfrJyfbJnPo3KWfyXh5Tv24Tqna6qZe8ZFzJxutpvyoZ9fzhGU2TpHyCUuua3xvBTyTiLUmtUWqVb7W",
  "key26": "4m9Cs57i1TVcitRsj3FrYFq1HHjVCwwy943PAgPMvnkwEBzrSm2kbCupC7HCiX5bjF5GPh3duGVjuGK6Spsgy92b",
  "key27": "2Mp1rTtXJTv8trhctzVF4Uo8HMFxu2NRAdzr5UWNWkh583x9QpYN1FdHAJgeUkwkid95VM65nP3wTsJ4kY3q7ARN",
  "key28": "3Ew7ddMtYHswK7VPjLAqAfewT99dgTYkemNBtBsSQW7ueueFkhrSnYj8nritXmGvBKdNWKmspybQzKL7isizhhBn",
  "key29": "2ZQEs1HM4UsatVgrFRsqcQMWMiPnETJ97tbi6A5vrRFFoqicwLUmBXr9RFwbZ9Qz6sUMAxEeFsXczWDup2TSTn7o",
  "key30": "4n6aE6jkPorqfwpLruHdGtGXE7pYXosAFdNprfN8H7UNhNa8THjEHFnRBCCYh6rFWiLgPpsrXX8UgdTcmMJnBm3g",
  "key31": "4sLoCF1Sz7B1TsU1G8DSpJSCkHvNiLkZULrWeCn7gu7rNB4AMM4BBozhe1D4HHDCRCALNW4yWN5FsiEZPp86FEhJ",
  "key32": "2drEiBMVMgGETpoftkSzpEo7FAj3ZBZPC5PBESpt2HJjtVF5xFufZvE1yWaYGF4ngFoh8E4yTnoffDUkBzh6JZhs",
  "key33": "aWbaL76iii64CZxtQ8JQa6dBA1MxWUqgHgAi59CVFfiXUuGAbuCtxHJPMvh2RR4xb3wSEfvCqqcjT1mWTLFLuiM",
  "key34": "3qLVGcWrUFEJiYWVPKegD3BgARNdwj9rfrZjdTVp4H16FeNs34PwCaMrj9GAvJ6o3WNxh9jmK4gBNUCyA6oyFn3h",
  "key35": "59bQLfJD2tZYtyD6T3oqApcahfeaBCRUgG6V4uxhACJvhB5qaiBCtv4fhT736YtUs54jLxHjSWbZ8tA7vwHa4uCQ",
  "key36": "2p71E6ws1xwjMSCEQ4rczfN4UCyNDvfXv7HvM1BCoXrXpxwR3ob7ap4QLCBi7iUH7MeDUS9EW2uAJPttQ9WSbYKY",
  "key37": "4VS2AyyHAqgy9ATyToLB1jYRAr1a86spjRyerLewHUotyhrPpBBRcXjDUwHYVUFWEhms4UzoEwy82aaxvF8MVgdh",
  "key38": "5yYXSBmLpMA1drQP1uNev5mMQXpEkGHGMvLYmhynLf8HtvpcVNMPfMLm2MWnT5U9qzhfugPgqSdouY8ijo6ACDro",
  "key39": "3t63PJZNHkiip3KsFQgitQcraHNM4kPweDzNH2pEcXtCMXY2yQPRqStK7m6C4NXmsTQx1oDDG1yqMnkrwqdM6foz",
  "key40": "4dPhCf3WKNXiqoNUirJxK4P6yYVDLr1XnBwVvnhTnyVqSEHfjBVWLuqNarVJUF1n8LhKUAHcAYFZpUaNg2BmoPRA",
  "key41": "4ayRi6EM5K1TrzEGSBRy2SgVnrfmFqcfFc8WaykNJdr2586b5R5W8HNstHE8nEbTt9QoFtK52Zj6oU331okfKrWG",
  "key42": "492zuMC8de36PWbX3EMQk2PKFuLbgni3V9xzzD7Vm9bFFQL1gBCSdrw43vXxfFzw3KL8qKWfAGHiM9u2neQojmzb",
  "key43": "2PjwPBhaSSGG9MCYJeTeAvyaJDxd6kNgvpkjAM7zZv5bhyVxiHisSzGodZ3xcw72PYGJgNvTUCJv1QRCBpr3bRbi",
  "key44": "shdvQD1CtBXUqhSCnX4KthanwpYa9zQGW8BGULnRnQdqe7K8j3sX83pVhqBFkwwUvSAVSQqusnCjTV1N5MhqhD3",
  "key45": "5SdmgqfE1sWooD6BQS8r6XnuWcNNKFRTiyd9D1hsDWpjyrzNyBiyFVawj99AbVkxZbLsn27t69VTqLPsXHzJa1ZF",
  "key46": "3mdcuUpdzAJbjZdpL3doMQ3y1FbbQKqdc19qjNeWW7rPpdmJA2uDeMLqgaeVoTyMDdB64Gms26SfYseALSSzZJVK",
  "key47": "2V2wr2Lr75XQzX2FfrY6vcR2ts3XfUrAnzE9vApW6bCDXxm8sGPJYqhu1tNqpYFJDwoVjvymHcvQzv25e8voUWiP",
  "key48": "q1q2MWtkc4aKbKCkSsk67VYkuCnRkAW4wB1D7h6rczofw6kLPF5cpnpBVPTURMe3z7zc1ucwdXpUL7Rcs3rfUUU"
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
