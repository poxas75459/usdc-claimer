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
    "5pCbx6rJxtxrVcC5CyfpuPJqWTQGuhD8j2o9boDFLmCGQnByVkhwSUtAGExGN8rYuaRueTabJrDSmYKpGB6xhdF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3khMbHeabN2B2JHbpJF2St2a8Namoi7TXkdtZ1yUNFnpMGzFXhqjrPFiaxNQAyYqnWgC1so4wFGdNaeEsessX88R",
  "key1": "3N5WYCjNCXjNXZ4h733L9ijS9ShiKT9W3z8E9WKJ1VGzNdkibibEZdgQFjayjjVBpd6cbEEfCVFmQbJBQgkjErKw",
  "key2": "5AJYSLWr7gxhKXwZDNWHL3NHfLYSzpxTef3PbFKskqCfzX15CestZC4YM8WSFotcZXmHkajA1UTK1o8HjBFNf33u",
  "key3": "BXpwsqpC5CBAPCuDprZSDnG7S6KtqAtyabooHsuzQPUHeqkxNxRuwfMqiw54p9HBAjox7oh1mbqnHrxvBQgUbKQ",
  "key4": "5uvS76rY2FkNfcDWr9Ayzds2AghfUBA5Sn4NjgWwWBE58jNRBsXd7J6dZjJmXdyBo7m8GfHJwfjAFCYbTfy6ux6W",
  "key5": "41HubGGzcTdLn6J7WrUuWbHWUVdigSqBQ9wzeNJpfSY5ctf2zU2EtxFn7jzEHJbamgmSDVu6ZtR3MKfuL9s7v8hz",
  "key6": "5kB44hAhLwFD9QruVKQgKy96sas1b7ZTkmkZ4Wj8k5mEVGRUSqQRahXZUB6zzaf97WgPwoRfJuYUhNGNA3Jq7pw2",
  "key7": "3XWhAoetHyWsE7ibRjr1SM5nWyWB5neR6zhWB9GdXpjcdVHbtDrMgQUiE5eRMvBPQXt6SiM4MYUaPKPRs6zJLtHo",
  "key8": "3McaxpcicgPJFDhPAit9vmXAtKnZjy4JTBVH82ZzD2qgy4K8t5bbhbjKDnR4dkZGiQ8T63dGfp4ZGTiFZeCrVtE4",
  "key9": "5W57q8KaLDw3rm3sd6QsGqCjq3FFQwcaUyTXJFmhvRNsJEGEU2tbB5tzkefZgmmPWpdAG19rssQevF6pAuLh2uBY",
  "key10": "3irT6wbA8Xif1G5KTT7D2VA17fD7XCN7ZKtcXRddezemDTFhxVFNkC6DerRMGmtLgEPjzmx9z5K2B9pUm4SfuEi5",
  "key11": "tNaFSyEm3TRcswDitQ9Kprd2zScA3pKr1czbocQ4YRUUqRqEFaTb9eL9RJ6Evd3MVKtzjjp42X5Y9meCqanHK4M",
  "key12": "2dvRaMUyLngB9fcVGDGQKuJCdHyLZbMfaWpFyn95CBU5vSRy2qbUkrgYzpU8pd6Y1FEa4ntBhE2Hb753N8wCJbZa",
  "key13": "2ZJ3fatpuaq2osXm6AWE8z2WGPg31WbyYTSNbjZbRmRpVsfimkYELX4ixt9dtkQdubG12JeFs4xpsxuL2LNdk6SM",
  "key14": "4i7ohqyZmtuBQ1Xt6RUMmb94Jg73VzHNSRHEjNTVfr6Kube3JTmEVEp49PJHmb3mipm4eNqcsKWZwd5cPtwppE6r",
  "key15": "5Dn4u7GicuYec2z5BetS7TadCguZgJv9n3G5jzQX3gcphS1awJQ8xujxC6LhjkFZHWBoDPoU1pn3NKM5u41mrgem",
  "key16": "3RiUZjZLkkUwkfxj65jM9GhNMQf71QmJwjXQPV1X52egMhbNNu8A5Yi6SdaLGu6mpwd9CsV1EzUkaVT8x3zkzhMK",
  "key17": "4bXv3VtF2M6NqCG5JmCeio1Y1BDyNHMUVNmpdniW93xW4mtkiJDACW3CzBbbtoLPByxvfVwENeTUBAzEgo9xS8C1",
  "key18": "559ZPq12YjwZEepoC2EmdC6kA2QB9d1N5WUgX12LRcRs3bxWjHPTvsXeLkYvJN6USZzA9sfQjKGsvdcivZS2M3fk",
  "key19": "3m7PeSFg5KTVoEqv7iXhsgXnH7BGUCcXbP5Azr7ten9y4VZRjorkEgrxFG1WwGs6w6vFMtE3riHoQ9Yjdg6j7Vk2",
  "key20": "66kWJsRg6TVTLJQKtGS873UiemKrhvS2s94SapcjBJrN2g9UsSEd5NNFdUJZwCT9iMjf36BQTim4bJ3qg5fe1raW",
  "key21": "5GqJxe59TxGsjHuKnTY3nMpQQY5S8dmiJsBe3GRf5ZJoE9ysz4gvyjd8tiBoG6ZUz5EPaWR2jnMf5UYxRat3CKuL",
  "key22": "5sqn6o7EemqXkz15axPH4FutNuQw6iyb2b38kersQhDvk5iX6wjG17bAsMDYHNihyWaaEV6SB6JPeaKbyGC2evSS",
  "key23": "nAuvT9hnCydKcEU4kq4ViSTnFH8X6Q3br1SdKanQnAJZ8mkRSB3BVHiZeBeAEgwatiKLEQuJyQ4pKXwPMwF8gf3",
  "key24": "37dMvKpxYHjEPrTTB737ZTVyuQ3QYVMLgk7W9xkQh77Bkyx7arjRDsFMsRZo29C1HwJKXhJihgNyu9877bMPBsN2"
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
