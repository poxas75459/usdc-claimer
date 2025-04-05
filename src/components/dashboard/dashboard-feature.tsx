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
    "23zqyVx9jKdGw6mptsT5YYzUfefVT6T7oKUscv3f1pr4Y9Zk8kyaaot9GCwGnhHboEXX35fomd89xWojN7jZJxV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ThLG8Uxt3E3qTp1joRfvmSvY86hc2nEZbebKNNbekqsKuzhnTcQvsUN7weaePn3jPVbTRxsfLSA5Zau7LAr96R3",
  "key1": "VPLTCyeTz93WQvekkutMqV3XqzT44EX8BTCk93BUgEUHioekcBbPLSz92xVQ8bf5wEbkrz2JufbLD9boC5GQLo7",
  "key2": "3pzdhkASNY6VbS8cnRpxEvNv31wASACEVVTWBMLDsxFXhJPv6QcwWciCAitVcANAh1yTesxCkLPAvkPL6o85twXy",
  "key3": "2RBC3zHkT3yoPiSRUDdnrxFUrTgdsDkPzKZ8dkAKsqFxYMw8kh1kXCZWcwC8gFZYrPBjERyLSkZcatjFbKriD2Th",
  "key4": "5NvFzf1BCknJCYrSwFsuyJmsWwQb3MYpNrcZ2Y8yW3ko5SVQSHKffhceAvwJs4WS9ujN6m1EPQxXZKRJHJswLeyb",
  "key5": "PKB6KWi3zUqjcCL2BeB4Emb331GzpFEybModuK1A53o977xL28jfXGvPJNn9c3jHbaieCxKLJdV5jw3DkcQdsN4",
  "key6": "3k3Xym3Tmyd3mv3wK3gDjuQaZmEYFpPALZKX4Z8A5EazFSpt3QKnWYgKKkaQUEGK255as1bJrkG9oTrwLrWhLbD9",
  "key7": "iFgHVG98hEbeUTyeLaZpsNfZcbo8UsCPf4Fae3hMD4XdyDBAmD1wmixvFdqW4SFXmKjD9soQrw8zPQ53MHwaraU",
  "key8": "a9ANj9N7MmvivVL1XBRC5CWt6fSx5BLXYyqRAgxQnTD8js9368wgoUqnrmA6eKwepWhyDsh5QwthkPnmfPGC5JM",
  "key9": "KXZnwowez3o2aX1daa23d6ukS9H1QWs34LLRvkkPzanUYWFGxZdYyyDU2WUpzChG67hTiMPv4AhTbxNjrWtc4Hg",
  "key10": "5JrDZrP2WCCJZNFWa8aoaf248ht98deKyoG2mge9vm52b8vxzWFuhj9XoeFcF4ri8QN1B5EkKQNVH7Hs1wyD32YP",
  "key11": "5e5gZN4eSjGTV3i8aTpSYxqfo6dWsUVS3eFYnZVN5XFLK1rn6QbGu7EVjzB4JotmBi1LuVATnLu5fZ91mnPuMVEU",
  "key12": "3DrmxcVjAFGVgysysjruNW48vGcoh8YWBhJSVGKQqzoBFCCdtgdYYmTRTauy2geBmMrvDqELKmVoFer4Nfy8LoTZ",
  "key13": "2xjRYfEd8LMBV3Qgj1J8JR8HwPRuCbWDMr2JajiYw5j3NWohmQyR2Ma5wgATSoczxrNwPsY3rXsG7G2iu6pfVCJP",
  "key14": "2NVx9GePQpZN3ACS1tKLzzNLJj1ymv9sVvt4Ng4taMeLrX6aAWEHFvuhCYrZB8fkYT1fmUurJMPtnCxZmcwez39o",
  "key15": "3vKFwiu2BSLvzjTSfJusV1BUNzjtcypngaRgtApu8bYHMpBo1WCTsX449vDoCybRZps575TVEq8DZF9uPB8BeUqj",
  "key16": "2yVh8rox4vzmw82qpyAfTVSQkDoq4PcF6JqGRGE76qFERvLzUVssL9hitKcdxAC34omQ8GHrNMUNFYbGfBf8LKqQ",
  "key17": "Sn5FzqHd4BRDyTSWZL5AY18ipr3uK2Hs146EBaCGunVXoEYJRC3jbZg8CAYA2jqE1znTFPTAtNesZTWuB5vyHLU",
  "key18": "2NzupUx5Lx5sJC7eUVf1cAUPWG6HMxPXwjfBz4UmsZjLmYAcWhRuYGEG8vY7VLdcQP2UUChFLg3sfJYwCrLi6VYg",
  "key19": "2Dp4isJrwcLYXDhTWtPdaRZGiYNox1Wp11kmtvKH39yf11AyHaSofRsLxkLnjeQNt7AYzVLXkFWJNPqQCSvWVAAY",
  "key20": "2R1WcQ5DR4Z8gvFz6chTwxPZA6GYgGcSMuS7ywbefnLih6enYjAsTdRTF2WbYi6pwtLBP8k5ZbawSrMAsUrvk9YD",
  "key21": "3JQdK3tx7ygwRAKka9JkEmbVN6FoxTr3aKVVUGRSar6oomwx9wQJQpqDJEtaVLLxtzikjrtKKGbV7f5VZnSwNNoS",
  "key22": "3Y7NWvt64qZAwc7b3h31Y6EM9GD1YuMsrS6rqb2Ei97Nqq6W7JnJSfQSTSBuxc7GApuDG4mJ3Fwskx21VUXYQ8pi",
  "key23": "WKVKKfbLopPoMHyP523VwgDa6jYxnVrabZPdLiHdCY32ApNQ7KAoNzZWMpUPsYY9d6Fi3bZQwZ9Nb1wCYBj9CDD",
  "key24": "5LuMsSnVW4JTwPAARbqn7gCDpDQqFBbMF9a6ek7rXsvYiUxFcMWMZVusjRS3KrASNxRahe9XA46zjF1b9rFEjW1M",
  "key25": "D4LyHYwiJL7BgKEnzTcUF1ZS9W7ubEQTx2hzqNTr5HJ2CCARYWpoAcfxTFtrP6c5NWqJERvyetovvvu1oHifz5b",
  "key26": "3nrC8MjWh9pPuJoMDJNP9uz2DnhBtXXEvy4WSFQV11tqQYQABpuMQo4bg5NzZKpc3t8uWeYGjEPJfBPp427rNe6T",
  "key27": "5h1Nh5LZsmyLWso9fLj3UkGQfrHREzL1sFvFahet8CcPRzFpzHhAEsCzBM5n4AA1c1VSZMT7ikuoAp5LeN7Dkpjp"
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
