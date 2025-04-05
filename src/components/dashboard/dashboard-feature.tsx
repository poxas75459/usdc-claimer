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
    "53Qh9euCh43GpXNKUcpeBRmTZTjQjoQtPNVpo6v4rJDNYCJgNysYP6qkUDaBx8u7ci6NJWpHfcGhP9z4wLwiXqsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MmUc8XZGQYbejX3muvFheJhcm5eNnEXMWczzAcm68WRQco4F5V2cniJFV9NhJ3PQ1MbGwuQKQ2sxZHFiJipRKBF",
  "key1": "4J6xqHsH2ujsTvFR63T7FkJXFzcE7L2HB7gQXfznFiUSd43EgoxVDAmqtDZSK72XQDc1rLF1D4gbLNGLicJUU4Fe",
  "key2": "4rkU5d6Pq1uXLoodLuvZsfT1X4wvu5HiqAe7pUqaW4fzrqhz91xCS5F3oja2LCJrgyf2QPTDofswjDspJXsupKuw",
  "key3": "3WUwBeN1ttSbckKQmFzkGdHCdphj36rMaxgamJYdvcn4QGvxhunPXERAW2QtnVsbPYFNYo9HCSPY1FYprruApyKY",
  "key4": "5P39Ede7my4VhaWS2uFWzTrrESCx37PwnseTL9S1dFzcbYi8BLXhg8LsbSoLq3MfQz3W36Grc2uaLevmCSEX1Wxi",
  "key5": "62rSVzLhatdgPSDqRyEEqYEZMay4T1ti3ntzQq9jL3bdEmig4sWYZmJzgrVK9ixERnbn49Ce1ikH2TNv5deQes76",
  "key6": "5HiUk2pxZbEH5uFnvLVmSpkxuZauL1pJDzsapMnzfJfUoVBQcZbozJarev6GsMnNdbejrKs5zpxq5Rv1SecXhGWT",
  "key7": "22xYGoXDWY7urrF555RMUfi5Fr1xHC4GF8bixdXFiHpGksHSrzhtQaPGbU5dqmjfuUnFpxTGa32ZyhgFqfvAPXFC",
  "key8": "2qmGurkNTVVY6hAbqzeCsRT6SgMjzoFLPN87D8RXp2MLZCZHX1jkw93GRyjPoZ8QgyPLRW1apo7Y2YPTGVFLuYDK",
  "key9": "5DhiLGgufMdagMJCjtVwtffv6Zk7ohdV9n3SHa2QAXhc42WTqAuAyEp7uqcuhYhsmSsnH3oguQBvLHWbysMa99tF",
  "key10": "xtR4DYfmKpHNfbjt7Enpd9XFZPz2kSRLPj2LbEB3Fr561xuqP5NLBU3RrKx2WkkaEzjqiKFk6QvxErFd1YwbSAH",
  "key11": "4NeJjcoQ2W4aCzhiFmTYxwqYAHbi6DWbDRPNxnXyKofLJkMqoDrv4UkUD8y7uuPqw6MommwBPMXnHHHZryyn3evS",
  "key12": "5C4NCFtEWto8HGBuCxEztcUP9sJpmiqsjSxmLPziUS3noKxiWDJzrEYcSJVDWegww1rie8WafVh6mbFa7dFB58sX",
  "key13": "2Bcs5Aw8xNMViKY9X6Q1fnYKBxinuJWUokxqLupLXuGza411uXMiycD8fzFzA1jBciynK8x3F7j3YeQjCNZu6RUd",
  "key14": "3JkJ8dsvz24G3hzdEkTS37c9qpatxb1rAanj8b2xFfDrp7gzEUKiUjn9Ajshms3m8NXoeyWcbTWXXfNdZqP62Amo",
  "key15": "7CaGk9a6AUUCnT1aPqiiL8oMuTHdvE7PqbFRuSoYkZX8zzwVxLwPinozQKn1EKpRE7ay2HHgmQgBd5U2VQzgJQM",
  "key16": "2M4sPLr1fC5J1m1Tk3MxfnTn8YRW2i8LDMnDmLE1f8KU7F4MQpsaizsTz4JF6teE1PfFNpB6qmyrAPxcKXr6K4n8",
  "key17": "3gPJbzARMfBASc4hz7mDzeK3VYk9zbbSFZ6cGM83iJT1Q7SNZwdAVJCqqwuK7dbEBr3BGq9saYfTAPX7zPtprajX",
  "key18": "666Nm6XWZZyuNjbYJDzMXXavALAaPKRARDXYm4bP5dXvJY1Y9GwHXuPSFxzpKof3nGk9uwPDpPkNJsSP84f9K9Un",
  "key19": "2wxw85CgA46SaiLj2huENj24F31ZgJUx8ww8Up8rZ5YVb9F6SHD9CQGLAS9Pwjn6jgRzLicBjUbZ4S8yBuaRcr6r",
  "key20": "yGnUXxD7MXxYcrVA7imx6PtQpDV6HwhaPrnwLdQqQavhsvbGbobuEHSAExKG6LZ5TkPecYF7WwpPJLbRi3rpFAH",
  "key21": "5hjhRDK6eq9qFRhMVpg8JKCNbLeQTyd2m1v618ZxiP1JQUcdvLbYsrw4KzpRs5iE6QNkCJqzyRd2sniV7NT838Y9",
  "key22": "373bE2aJSVNgQyXhW8bpaVnhuLUZVRVuLdT8s5jD71W5wRUpm2pmPGai38S6veD7fAz2vu26uE9K2hRqyeAUThQL",
  "key23": "SELPL64wuTbLNRP8bWc6RpNJhBBfaLeK7zNw7MLn9F1yKLQ9wtWakcM7E52n2UHnFmr2gfeetfqFvgh714gEr9e",
  "key24": "4f2PpQ73HhUjzJnSDPCBVUXTWQiHfm5pciDzGyQywsBGSPX83pXi2sApAVMkuyihC8iQ5utcm75kA1URfUEFdab1",
  "key25": "2weUboMpoNtxfahuVovKjPNW9X5HZG3C3pkcCCAeigSbowfVHAPBAyzYNZKzP8Fb9R19LubuBDfr9w2bK5Ua4wM8",
  "key26": "5hQXxbtMwWTvBRjvWatfkoGkGjPC6dkNLh57ioC7RbYmd9SXfLKBPSUUYs9Bhi31e5Hbi5JP2iKL5iwJS9C5FxYF",
  "key27": "3n5M5wodo6TfvRGndP9aBDfVjV6E3dNJPc3fG7MqU63w2XDzYSQgq4ksuMDFSU8snQbqPZ5ESvXtShpC9EaprHjT",
  "key28": "Fpsn2dfvwzb5hDmka6rmYE3KqQvHHrNWknFTUcJxLRKxxTkcGyTPTyZbyM2zrVitBdnxKGUBFwY7eJrtuQ9cSAJ",
  "key29": "4Hk5z81NSWhn4eG2RqkoPvFXwg9Ff7jjU9e46fSwUHFfb6WRN2jX9EaVK1wwmhiwit9dKtFXUypFum1sAGgpT3ga",
  "key30": "4jf9wGwxshdjZymMZuQinU9wK1FYHRmRnZ1jxGa2GUymR998cZ7yWhGtZbe9wag8x8MeQv8C5pMc9XySnNGzmg35",
  "key31": "52hpeft26hecMmcsfrUSQvh8e6VwDyb8ySjJ7vd7nFw8CkpoFN6r4PCDRgHsvuyhoFSGajjdSR1hDtkr8b8JgWyj",
  "key32": "3zKKxbsttvbWUM5BbFoUud8nfrnjefZ6mqKrEKHvsxL2Cqp1YwUrmTRH6XCRiTPUZtaxCUhdLRa4rqDUMANpQ5JB",
  "key33": "5ZmP8Ua1jhDw346v3DowGX8Mx1yErMy3j3DdRtKHHeGtfzxzJVun5qMfagknwLZtKZBtYCQtGRrB9gJPux3vqgT3",
  "key34": "b2r1C7nfPbGxa572wBTwtghZM1z3jvYvRuGeVSc1e8P3i3YWiKoZziKLTzeob3a1XzTbkcNFx9oPkoiHEYhZABg",
  "key35": "2WSAKB6Qn8xG4aCQFfwuUMmuMdPZFRwJcwKGZKFVxuBjQjcHiALGJoLJ4pwbd1E3uenHDSgNDJcFCzGbLbZCTvDe",
  "key36": "2NBBhNxA9svDa9MY4UBnbfkErdxsKag87PJSbV9QquA6zP4h9UyD4U4mMZMH9ZVg4nwcvkBiAhjSgFPYymxsGGq2",
  "key37": "4ZmFRFhCTWpc8DnWA9XwrgBuSXzYsLw3C3UmQ5AtQXfGTrygav9J2Aj1uJmtLWuAtvzBpcjMy6PSmUJPA9Ujcv7u",
  "key38": "4WzNda1wQJosSfx4wCrvQPCvcQoSCMPh5Wg71m7zBY4Pammic3bJRAE2raNfaE4A2Kfja7yJo3KWYv3DbRyFSNxX",
  "key39": "3VjV82bMGGPXivHvnDKcjGsL6xLqHAwd23xWNtaGmyzo8uWrGvbbfQi7ugrnH51xvTNj5kSS9RaEjPFEPJuhvSRt"
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
