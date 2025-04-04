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
    "5D6fAW2fpxzpyr9RNmKDhBvpj24VigHvnRCg84JWpRSmw973XygnFFQGKWno7jrUnEAVmzVBbXHtpG9cecwSVv4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fiAggS5fNf6naFC8AeeBAMSUmJUrHt5UwmFfA6tgx2QER15KCLtLxUWkWzGi3tJHg6aTb7tFeL8SNRsHyndArES",
  "key1": "3XM6AXddAQZ9D6R34ffXZCfu9skgMXGNWt9ckqgoxxbdaHejMJwyddTzeqWdCjwz6yfiY6BszYfL4824UJLau48x",
  "key2": "3GnKpVjsy95wzJSh3f3vLzaHZRmZcDVjZzDH1Ru4kyDvWyopcFQkAzvkh2oQn3sJCdtvNfGH5G37g3gWovTKC2bs",
  "key3": "2nouwXL3txcV9qMWDXaz5xnfMCZnAjo5qwCEkWGYa164j4CN2koSysRbVzjxEqRLRqJWNFCXVhtyrecpQcNgQczJ",
  "key4": "8f1nTSsgLaXaaAruNZqm4JWMeMjwq4fYzF1BYo36rafUrUV1F8tHeV7qXGCqSBomeDkDcmdJXAb7MBdZxFnB2c6",
  "key5": "39rFZwLdMg9Y5zRSZWiBfvrfxy9KNkgHGrWHDowpcGvnERoB4jagJtGsWJjmYrGXyroaCgRbkmbaaEKnfaqPn1yB",
  "key6": "5nUE5wac5wweerrqDVBM2CtMWEmU6dWRnfMcc7huKoj3jgwjh7iSsXeXmAJioc3FeUjY3TYsuFKkB6qNWG4vVZPP",
  "key7": "L9yePxBK1EBi6HENsnggfAtvXf2bbofYSbwc4CrGNRHeMM8rfNG8U4VKL4LMcYw8KkUJa4XQ8a4oT8tBm1L4JHJ",
  "key8": "2w8L22GhDe5dGV3cGZtKZTnC1W81JEaBNjUp8exk7Pej7oqqWHEyAWGMSSpuV5qHbB1x4pdpLudMh7NFUeNhE9n4",
  "key9": "PhLvnguiaRoQxUWihyv9yVuqHCARLoTQWnqMgp83K7hqY1LrVwAQrLFfRnLkSjNyxosksHqjpJGoBs2J8iZZzkC",
  "key10": "4uBJ626FUhovwX6QS6eVhxwGgss1Zjb9tiYBXmhyovMrCnPJ81W8iGHf5ehMwn2doibVZJ5RWRDg5SSHPBahWJnx",
  "key11": "JtMS5Zdwpfvw6WKvCZuCGsHYBRqbH7dggAmuFjMHKtxroGMCb7eJEiNYjmJcz5dEeCy2SdtCKaKGHo8v75bg9wH",
  "key12": "28GGnVeLHjSybujq1AcJANsuaAeF5GQH2wGJY9ue29GTadqcvZ7HJG1UUevWjQpVHwPadxRrLzXfCNrJzdWiNtne",
  "key13": "2T9pQpLAT98TiJaYNgVdKza4yjgisbZEsjsCVD5g36MtWZWkcU92K6vRbDnneoVv5w12K5sr8mTCvr57DcPAYkEX",
  "key14": "2s3mnxBwaKF7a4KgT1VaDYJsgXyH9mNLhsVX2X6qjULnzZUqnan6fUGrco9w5YsTb1nLa8n7Tq9MZSUBVEsu4nuT",
  "key15": "54EUFCC2mm7KxfwgieK26sMFcp5i4S7rG4rvjeee17g5AewX5mVejXpgk9mec6WXatqeSKX2cVK23QP9eyS1ZhMC",
  "key16": "27NdnhceZJLbfuGwmd5BsJVx7eHT7NGRcb1HoDqbeWD5BeLf2EFknWFEkkdaRaSjG7MjxnvoyjeKYgm4gKofPxZ7",
  "key17": "311MjswyBTvABxhL7DCn9PZMQXH67pws8rGQ5hAZeJrYZyV2fi58jbTPKoaEkqoQGLtfqiHXKmXZrNCKbVbZAc5q",
  "key18": "ZwomHZHiJkhVVg2ANkRuBR175P6s3K498MG8CGxUWDATgHFTgkA3i4JUiK4WbWPYA3rmWBxpgUPmzpThCiLigEJ",
  "key19": "jaj4Gsf6r6H5krSx2Fkm9BDrJQiEUqah4aBW6fAycVcGMKApWL2tWdPzzA5ZsjCj4bh73ADbwmMyBwecTFdvQpo",
  "key20": "rcUedyE2qEjjiRGz6qBUn2Zpbq8eQiwJuefC8SeZk2M2EMvoWRtdjALJmsnAhn6YrWGhit9J74rkYMUBp7tptHQ",
  "key21": "4Cs9L2DEbh8Vv6bZGFknyP3mPR1Cf9qegr3Z7f1kEkSw1eh2iVe2EWfPoCPPqQA5hoGEJNYnmo3gBrJnNhzcvRM6",
  "key22": "5iQbBYg1YnmMnkxNbsL8j2GjAMraBpqjt8DX7zYGhjoKDr1BcyEt4XaHEM3eTVYi4Js7K5FFACxdgrMtb3JuYJ54",
  "key23": "2wXw4fqpPa4m6mNQ7Y5bs2PcaQnM5hx72bBqNfQVD5V7aDWR7xW6dme3DLWrK85za2dEeL9Z1FRAxkYUj3yh1Wb6",
  "key24": "2FSeXHMYikHfJgDwQiC41ZiujEoq6LrZss9RpRiB5QToc17vgJFAwsu69ym1ZSbjB1E6CqWSkvPPcgT7y7ffhwhT",
  "key25": "5i9peFrpY1JBfs7Mpy8J9WiQdtGWYkHMZ1u5Qc74jLKVtuF7QgLBzJ5H5EANGs73NJHJ9gQkS1bqQQ8xFgCiwgWQ"
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
