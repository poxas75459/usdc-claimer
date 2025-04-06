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
    "5zsoKP8hQwyf7HwAzXEuMTfHHCEVrGJJGoQ2mJiV6L2NW5DQUMz746FnjPQPaPT3sGLSpfCWqzHi2wckqMEVwnQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BhLkYNMtpm24WszDSg1K9mDGC6wvayXXDVnFui9hEDNZJDKhM5L5AvAspp52uRpuKrFgkPzRzPSwL7ATF8a7uhM",
  "key1": "2zzSxASahQ58uVnYurGSMUqwnWc4ihbDJ8dRKmR6dkdntetsY6Bv9FC6w7mafrydtAe96PECr8UXpXxkQb5JM9KX",
  "key2": "4T83GXL7vfg1JDmVqQAgvqe9dj7Q2uGAd952bg5kv32XRZjeo96GdMDhVL1NG2KppkZydXx7yqhAEjeQuooeChFk",
  "key3": "uWCWjMDvwBmpavPWvRCwxex7ScFwGZWGrmnmiXerKnigXEZR3xxKocrNz4rh34s5M8yuNkS32L7cx8vHCu3JUtu",
  "key4": "5Bc2BocxutNNkQrQfe5AiCj7nfma1JGtD44ZH8gnDXgwrBZyFLDxfGxPPVd5w8nxLgYcnReM6p6JwjmXTt5vHyfF",
  "key5": "2aGQimVRM21aPapc9YRp84pxqNPuKJRpSgaPngLby7sVUZENw18cknszdwbAtZunYwaWTi5guRGihV7nydqoLvPx",
  "key6": "2inzXXY3FaBQMCzpSDRhMPwQghBcqEpR1qLQTWDyUaiBy2vc8ueXNgkiXMkL5XAv6GS4BJKzw4jjZyFD2EDmWwK1",
  "key7": "2KCsDYiE1wjSQ3tHGJGcq4M98AvmzJWf7HdwGMeZUDgTxforu3hmAQQu4mwChPtESyVE4EbCkGjoPDicAXQUzYXd",
  "key8": "2jF9h894Quf7wysGtvgT8tWre77vXQYa4aPG4yGP82UGZrCTMPyUp7AL5p9aw9PgDbfikDLz9adtetUUXwUWVRBX",
  "key9": "4gZwbgYkbL96q2LFvgzuXUMr2zcrCsRTNJi5itPnjwFKd4za8qvJzUPz67tBXuCa6SJ6Kt6ruREcCZNgG725x5hM",
  "key10": "5apYvCKBvdoBtXwzV28MrzoqFshsNGdwx4NpFYzLbHfgCeaAdfTZQ9AnfM16t9rrXtRcuRSWLX5Hwak4ddXTXoKF",
  "key11": "PRjTs5okAmaxTFY32k5g1tzYzaT5ndixHheTFdVPNM83WUvc7wThhKoG239jHmU4QY8nnbqid3XkomAR3GuQjUh",
  "key12": "3kUGxeWRtVfCBFUV9793TkkMpV6kVXqB4PPR71Hfv4LCC5hBHJmQSPxWF4AnDtjMQPmQ5qYoMVxfd6v8zu8rzmGd",
  "key13": "wDqFEVFDURcgcK2iKM6gyGGBLGaVAVfukyTjJYmfZyLuYDkUFN6x7TdrEzBVKHv9DFzgrQCJr1uFbzQMVAGGU1z",
  "key14": "659qC4WGFaWjJZfGVyhexLQPFcvRurmVHocSsigJpAL7wnRdwG1y8nxUCTUt6kiGxSHxK2TcsU6Ji2D1E6oqSc7N",
  "key15": "5zGJxaoe5tRc6kULXfKN54qquybEoWdsyVmZhEgqGx8g3kZdHBVc8pPuHeqgJMGj1GgdezqGf2io9vDGhhXJygLn",
  "key16": "md5ropeR6vspbpCiEK5ZwnCH4GLPGSAwyQvju2HiWEYTLA2fNCNaGFRasJEcjvLDa1iPUWKfmBfoxyRRKQdwD1j",
  "key17": "2sXawMFPHBFkVj8u6Ew6gxxK84WNHCxKU5269fT33Qfpp66MqRpD9BEEQNnEeWt3EU5zKYdpU8c2vTFfREgEQCiT",
  "key18": "5vq3hoKFKwyhmS8cEq7LwzBcadb2QRw5YfbwhLA7fcpcVtHW1XSSUcE9HQBvSDETRKSZJEq11MSPo1tVNpkTcXtc",
  "key19": "3GqFUJjHcSkmfRsMdQtENJDsR74DnyxZiR8N1SBeBhHFPvnNfk68v6bpxAVyj6yQYWfVS3LBQMAbfE2rLZCwsB6v",
  "key20": "c4P7FFyWBmMsLpFTobHfaXDuodjLL3KR3mC6BacHsszqVjK5MSgXjCZXn2wD3YGHvTN1P4uBwrrFeVGawQawNVt",
  "key21": "3Az952cW3LMRvXg4UTW5uZpPtPKzoZK2dKn6nkGZsAiRvtA49WuCbngZfwwFBKZtJAb3vk5CrBFv7kFMNYwmPnyN",
  "key22": "5znEZTo1LMS8NwkCeJswidrrSsdE2RpnM5bfhZebk3TTArcJdCQwx1B54NeZ2BFonsnM6NcpeBtohx13yqCpx8zy",
  "key23": "MQsDQJNT3aZK6QYY3bgiKZcsE7qvNgd8Kw7HCi2tJPH3j7UFxLJ5apXNHehjYJjrdNQ3sy99SsnJbev3ZjnJLGD",
  "key24": "2tNGfieCgVz12UgSsL5dxcM7nKJMdWEGXokvR1P4XKEUJuutT4bf1fzfBEJJ8xFtMSe3ske7LhAYdh6ZFCmHKMCU",
  "key25": "53JxZUaCnkq5d4bM76dRPg9xD3DijZf8heoFuL4HBGWHRTjSn7HfkL4DU6YBzae9FpmBaPULJnddL22YKjDA71UG",
  "key26": "5h3Hbw14YF5xyFZshmEMEacgP2aKvevyJoSZzSqGWFkP5T1L6h5V38UZ6x636NsVUyA1gXmTbs1fdgr8cqEtWHk5",
  "key27": "4267yPvfY9sLs7PmH81m5oUB5cjuaYa9qGcLXAJdRFwF5moy3fkGjBe3u7dTh3nn9QPHh4BEjmUBdyZydsy48veR",
  "key28": "5U5hyenZP168mwFuJYWGtvKqqZRW8nMjRpN5n53VecAaC427DnGFNQnNPNSdYdUs8HhPm7qFjLw5vtDn6CexyZF6",
  "key29": "2yN8VKkQAnAZfxfwgS5amx3P4acjVS8xR6nHpzBq3xikBuZAzE3dAFqhU1TKEuxj4N8RFGKfrCaybEWa8CNVvre4",
  "key30": "2Vew262WoEaFMPM7c4ucmGMLGMmGq6XM7m9jQDbD9JyV3jRGco5RK9SRvuPFHg9caChVumDUE4jXuEbSvHDYpN5w",
  "key31": "4Y1NubNiNYkoMePLHhLxD5VepnRsgwA85NdfKNckd9rJHPm3a5HuKy5k66BjFZQrFvNjxajk7Po4SjJp5Brw9eXn",
  "key32": "673cANahFKb4fCNm1Uu2mW4tHRrkZbuPabPohvB6XH88y41Bv16fhVd3rQP7sHCCbGWPFiCaNhgJ5q7WhGq5uRth",
  "key33": "Qq6n2U9H9qjA5hD2mS5hst4gp8U2jgCKqxJMNdorhsVWXLfjejwFa6EPJH8aErWfSW6i6GrzygXm2Adcu4xKfk8",
  "key34": "sujDum3Jjzyyo6PVoLXLB4kYEcPHuhAov5zcMQhViQuuZPBfnQeDPwgcGeZtyh6wME5KbRy9PGp6qikFDmRf9FA",
  "key35": "3sukCrKW1KrgHFi6qF9EPJWeXDcPhSCGSDuia7RdZLVaGMajYJCktPjQiyDNbajUrFihdF7xm2JePKTHQawDAoeL",
  "key36": "4JeNruAzZ2ZP9E8W2VWvcg8TP5udDAgt8someP8BAy8CbZM2nxcRwnVByzmza8evQGA9feFPYmGyooj18eDA6ox2",
  "key37": "2mgLZ99jhRc33aUF7zqGttgMTz21FkCPHj9mrP7HnAtUw2A5YxXF73uSoWFLY31ExQBBowLCyVvsbELVnZw2LP69",
  "key38": "4d7seyywsBbHBcrZd9ksvVTht5MJPMHtTAjmuqfJiFueCkgvLiHvzVRdEtfUMD7vaTfz2G6UXgN8jPB4WaKiKj8F",
  "key39": "eSGa3KJvUXtTwfUF18s9ZXD1SV3eMM2BnrmUPG9bAc5JjqzjotKi6rGjT8NDfR8HpmZL4TbJ2PvvRGgSXRoSeHB",
  "key40": "kTXt7qgDtFYYoE6ywvdgN9zPc4xVg3Ki4kpLCcrh1YYcQBNtUiYBAiMwrmYHeQseCPQBUNrTYtJVrbJtCWubCru",
  "key41": "5beyFq51i3Qc8v95rxveoSjTqg5XGZFqqiNZ7t4LLAFqEGoFhbYtX4Y7XUz8HGhz1eNSaK681NvS9aTU6mrRXJRC"
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
