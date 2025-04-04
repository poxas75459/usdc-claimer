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
    "5aTykbmMjhfVL12U6MHyckq3EMRFcAutCdBj7rYxkWWRY8kxqnp78aENjQYyFVC2VMxiQ5v88qLcV89LDJopbTnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DiKRt2zouJwdmfEwpHrmCKahWeGiTNYifGC3agjB7ZKvHRBTffACFpS4edajRGb3DbcCVDfTx1UbiT6ypqufzTB",
  "key1": "5zb4NhXvZQEyHBFX6SUgai2WCA4RGdeAFb3hjVdJze3y6Euh96TtDZq6U4i3UgCD5r7DG5z6HVqy7yGfsK256sTa",
  "key2": "2uuMrZv1Y2XRtGhD25bYsfxKwVSnJ4cPzdHNDaDraFdV3oLf7h25DVoD1Gxfu2dAzUKdvvCzqhGpiCAuuNRNXwai",
  "key3": "3HsGTYTXp4APNzY5HuJMzVxLCXL5bRr5X9ekVaZbsfzohUEr4wkEWuWR2G5UnGScQRg7opGHWu37U2hDm2dqJB9t",
  "key4": "4SjseiGFteEumQ4i4dZXnsQNc4f2NLHj2zvmMVuAQEPpbwEf4Rmkqtqoj1jfW8WeLVGzASs7xb1vDprKp34WXNzX",
  "key5": "8cp5EydBbLuugfdE6rvsUEJJ4jTUyuEkw4vTv6i6nvosL2PJnmvLmvnyHCEaQ1oSAWwUSW6KZgFHmqdRNKDQbzE",
  "key6": "2Pn88c2MzriD3VhTHkWbmaWNsxLS7woTLV79RJFkRpk55J7cpgSUuuLMffqgeSn9EqVzScSguaFLoR6amTFjfBk7",
  "key7": "2Q5jdf4r4uFnC2E2GreCwn644V64ztWPL4w4pJgM5afwwVorqRSmHDc3CL5U8qa9GQpHkoFhpWF1z5yqktWZJGWT",
  "key8": "32tnL8oS3baEVdNzBc6PmduHtYpGiU8MRbYXGwKFzafBt48L544SG4PvpQ6guq6cNZGGyC6wUNDRgaZjnoLteubx",
  "key9": "3jngCYxebTYaBWM54b2pgJG57BFPtwyqLCVHuM7GtgMkwEeXTYeWKk3uUkpRyCA16zr1Dgf9nZ9jxPkdFbJ4Xzk5",
  "key10": "2tznUGwMd5nC7t3kSWdsPNe6CPA1QsBAAhgbGQqJxdPCsKZSWXq1HyC19FFGurcVFwVhnPDMTZwK99BwNWG4axkH",
  "key11": "2JiCsYKiEgTXzddQox7bvoa7fQUfMs7VZiMs56yisjFGiNbuf8BUooRF62ywkEmcyrvUkNwYUsU5mEdZjgnNAktM",
  "key12": "3XkSk1KLANKQfDiKxyzLhRGJwqRZuw9AbPG4ovX6PCqVBsG8N75wToSFGd6kQC1HJgJ7sEv6VUtW89tzCLtRG8pY",
  "key13": "3LjLLGiM1fkx5ESk6mmFJnewqwyQHXLeFy383KNBDSP8BNMzKNz3GjvxooxkPEEEej4uQg2TAAsXtwB9hHFSHh2g",
  "key14": "5WKLgD9bpCNfMZ5Bub5q8DvwZWGzoE6aJCsXAQDMYy6L1GZNCm8gckEN4Bhj364xcGF3yCzNzHzXA7hwdxKKgFj9",
  "key15": "286CwNK6iRY1KE7NrCN7fsuQYRQTWEVkWJ6qp2sSVvcaG6onti66rY6PbPL2JjH9HY2ddQmFf3rGQYzsgYZbnwuM",
  "key16": "5EPV1EJo9fyAFyjSvYFYW1oTfkke9j18wGVpZaiGFpBJHDW8Avjt4Ej9bxGZWgcSCQ75YAnNTzP5L34x71r3rTDt",
  "key17": "2p2maMa9quMXPNeL63KS2qkjiSnDzaQ52xe7C3damRLUoPTk9gwmDpsJNZ3tufwhtXoCHmVX7BaEHEWZazNh3bwe",
  "key18": "5dbdsHXbpsXsJ8tTSvBqt7GospuHZetifv8jHbtKbs851oenLQXtFwuGdSf6CuiWAHTbdg94QECWCvgswNqpBLXZ",
  "key19": "2p1LRder8EgJJs2utfCQSqbkbKGzdXiNsMHJc1rNjvdTNDdwxuWZXnQX48kfAwfBDzg3e6mAomJA6Yc7nfRz9rSU",
  "key20": "44rEqM2UVhbrs4FFAXkzm12ANbiZPygdS7fMrsqy2TTC9N3Q3xpKyZFDvaWEGQ68XdqLiStCxTaaXnzcdmC7zRPy",
  "key21": "55AzTkEiRcHPWJzyRJpVqksVUGBqHiwgvG2dg7n7Xktfo9Y4gZFEJFCqaVDbXLfuLwmqeuBQUBM9fDtiD1Numhbk",
  "key22": "3sDmJBhYp7SfwD7jsU69RN7qUdbrpdnK2shZTm2Q5n7UsnvWH5pXmTbqNpToZvmgYtMp6mP8m56tq5MH5zXRjC13",
  "key23": "TjE82KsfMz7w53oTmeowzyMF4tBAGySSeVTmA7YuBeMF33Ftm9CgNDUrYxLFbouZ7SjuB3ZrJ7EiwUC6u4aDVPn",
  "key24": "cLVXkDMmriJ2QNAuPmi4RgR22xhWTpmN3qQkFgSiLojwiCiWLKYrKra1Di1M2gzH41n5RRpJUiytTQizE5Hust1",
  "key25": "5Q5CVLj9YwYmN1tKRRuTmdnF8TEz6HzGDNPEAKc54Kg5Tu1FapV7S5pM6TRtwiqq2RoUSxCM1sg8fWjue7gcQkBd",
  "key26": "R7JJ9BW1qa9yGeHBBvHL5YKDyfAKz5raTCuVSjQ8hG5nduWYQP5MwNzEiztnwVB7nCJpGKDZhGoGLzyFrf7KAne",
  "key27": "2FfjZdKKA3UvcScjcckjDxuU7YcJEwcMucf57EjqRyUBQNXxvJh8yG3mVrAAhiXbfd9FZfKJ2GZZVDAUKRUi9gRc",
  "key28": "5LvYgd6scajNDrCh6ePmX26uFoXuZXuoHhEwocRbLz8tiDZxVWMoGjnfJbXnTRXLQySMbkpH8uXDQPyqgVwfGonF",
  "key29": "4bMJPHAQmVLkimHimFcxY6gC6QdVLJ71HMNRkJ3oani9vGYZc1YhALgA47CRGwZQ53QPnbysxThyGzeW5WcMQiXZ",
  "key30": "5vL9iFsJNhfXLwHgWud4wvCrAvZH775aCBVcdByejZwyRq3S279hMYDVv68YwonJ9U9B9EzWeBTB9QKVUqy49D4g",
  "key31": "TTWHNSZs6kbtsTtWuWZNF2bvBJfgc417iSbLCHfeDoDDUN1wCGnVf59fmfRcrWwvaukm6o9eD5yG1433ECcZnGZ"
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
