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
    "2HpAY2bAHLYAMUeoVzASNiBPJkivxNQkxbvhagvaaeiaubyhvo1BkfQQhEqz6rfowCMLPuNQd2K4ktMUZmS9TTT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LoqWLEMF2UiFgruKhTqHbjEwXbAJA4Sz24qkCuehToaJ6fZu8CsFZ2knt3EW8CZcP99Q52oau7SkMbNSvnK3PxS",
  "key1": "23KFdwoYkMfZVzxb6rZfk3HXCkMRLub6SxutFS1DxjEW6zRNv6HYCRqa9cst33kMBjrfXvgvFE6gmKherKhyixSg",
  "key2": "2JjLAB55L6sSDR9qzjA9539sUBrZ9JGkpwRgqkmRYD9CiJ9KbWiFq1eQQ7rnrtJuvi1bNpvniw9DDBtigYtw6Snr",
  "key3": "4J8vQvrkvZvLgVgoQHcrXqKWGSXzQJzvjK27ZxuRbM8qzCxHXdLxN8nYyCZ5pvAY4weSaZVq2BWbshdNKVKCEXT6",
  "key4": "5ZiKUkrXvjpPCujFX2Am5K321NUY6a2YNYHGNUaYT8GgECfac6ttU6Dr7YwvXqWKa7nQTi12RNzx9UgJqZpk62wf",
  "key5": "3AdPvLghbn5gfqQZsLsdQEnSyz5xFMNHh67SN5m79eruK8ZkNvnSfx43i2p2PP5Jt6YtmpXxycGLQEfzKKFTHLE6",
  "key6": "46fAgxRfyd3hrtk5fyXhvjihpG4He4phaXHNoTJmGSNFEbbAfSTJJUr34Z1fdMefcoqJebixFLW2ro39kfPQnMgo",
  "key7": "4HyafBz5rHqSPopLECgJynJuSGpjXfoZ7TB9f3anxS3vpJXqwBHSrBaYpsKk5iMNJaxGtyKvMfQwZpQvzwfNzo55",
  "key8": "5qkk2CkdkvNf7a34D5KSrKoo48q9B5S3NUVDSV1wHgRPS7J1cuhc6cd334ViwrdXNV29x62FSVkoSMjo5zYuWGEq",
  "key9": "5r8UicKy9JRxH9hGPzuFfJnMcMuzZAUgZ9UKdFMCqQ3pH7bN3UZ873PpwmQ9ptknwnC5HWxPdqnXtrTAGtsSxifL",
  "key10": "uxWKQ14BBWvuGWMFJR6yBxuhuhkGysLLKDLnTAjtnyFe66BUK3uWK38eoFcBm3tLCDGk2xqSucecnRo3tc6JqWr",
  "key11": "F3gubCk8KDdPtYLSqgLaPhfKchwiQBqHVv2eWALBRCSjDLARr7a7aNev4P39cJvPM3VWi3HUUPpsogVJUiX48mt",
  "key12": "3fPiJhRxWf3KJhQ6gUkutWoPpW2ThMABPryrMbr486dyt2DyGxFsueyVGVeUZ3Ayrny9jNwdMx1FZEYAvAVFBoJp",
  "key13": "4WFoLAjQ6GkLXbyBTyX7pZngjXzRpeZsk3L5YwWJdaXQQf3iSt3n19t1T1uDJeK6ZeoxmYqu2ghhtcejz4cP1FYu",
  "key14": "kZopVBJ5y9ArU8ReZsuvxhwAJnuAwHRztc28MnPZfgnn6ijWQn6TphYsUFZW57KFrKXdNJue5axhn38rjUjcd88",
  "key15": "2uPF7SonniMLNyur2PhAz2Grb6k5RyRRhmeMReJuzgjBTH1mopDG3533zbAuPBgYDPhuTcpf63YhUN9DWxWR4n9B",
  "key16": "3m2M6xdhaFqQTZykkQHS6ryzSHYnMS1HxivoLpCXQb6AMZyuqgSE9t1VBGvcF1Vxks7oKKajEs8ir3kWsDf11rQX",
  "key17": "62AiAnB6xpRMmPSC3StpVYREwRD9DW98hgCHNNfURCuLaNeK54soMF7yD7DohAxCbE8n7JZ5BeNkjA38wo9BQjnS",
  "key18": "3E6UhpJAdERnmtutBMetf8AZ7p7RobbyAYRVwFWanunCKyiZ9XrAHSQYcvZQFG6x5zwWkgKVf6jJ2E9rrLS6TcRP",
  "key19": "63vChy2sV7dpqyZYyiYY6kHPUEWgm7ka4mmYHG2sjJMRcvrabxKdcXNwvxdfj65U4W5BYVm65dJfCLXp797NkwjU",
  "key20": "5MoGCJMw7iTLQAKZ3ANpaXEbBdhy7Pn6RGFg5WbNyrfnJU2WUZwUsmUwdoS49HeK5HSA1uZigoaaR2hSPSZpoj21",
  "key21": "3TpKr2tQhtswJBpqVEnxSf5ZENhrjygWxoWzceoryepDhv6GFDTWGxyk2K754p66Ss9xH4hfykQYumx85yLuEVD4",
  "key22": "5sSdAG3fGa6XWuoVMbUTnZ7mzwNhsKPMJK4nVGm25VSoXqVkk9D4eorrqNWQBSsr7Bq6JDiq95JwjZWgFXgJkAtF",
  "key23": "5kaPJ6d5r3eMzexePcuqaJJKeeJZmNwJmWnJQH33XYTC69qLvoj3qMeNyK1ELEBGM7nN6CivWWsd89HtLpxc3VJc",
  "key24": "cfJ1b74843fSSCBZiTzifdQNuYh5ScmQV47JnVBprmM5Rzkz1t3hA4y27tmpsfwF3U8fgvscKrVMsezAjqfGEo1",
  "key25": "4ZXYFQNcp239AKKSVnWvaGc8Na5V51E9S9kmSJKETqY8PCP3ic7W4GEw2hzWsiQtqJjkdzRQGqjZPaCbuAzon9qm",
  "key26": "5p3CdpcRr9Yihkn7zBBJi6PmwwFuBHzjWSkZkuMQwjQHg19oS6BonzP2pqG6RFJVfkcfzT3gQnNu8zanhnZNh1iE",
  "key27": "iDfwV6UmFTcwX7s38mwzNiC1mgy5PuwMcEw6cQD7LbgL6iusHRa7sM8iygm3LxG7vctJ9zN4jVbSUfXXLs8Rf1u",
  "key28": "1Q2BPBJD3Aocp2gfKpDqQ5R8vUSKiQSu8GY8gsLX51bDW2XSSbEkSDyToHuQues9RXZ1W3Y6WgBCe2Q9oHyWmHN",
  "key29": "5kTZPUUxKSxkcBtZWvFP1X29rZy368AEBSjZZkimP36zMSwKRxGJqqrhAssCX9UrYsb13zWE4vGS8mY4BWzk1uuD"
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
