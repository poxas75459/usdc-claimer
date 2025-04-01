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
    "37NEAztNS7fSscnVvNJWzEX3kAR57SR8QVSaA2CCwMXVxbujPvKNhizU7pXZa6RCUMfvv7fDVUux7WkqhZA86dFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ikTNJjTQNuRcJ2ssaXVo7pZvVLSV1UTa298WucYoyoSeMY1kukHoqA42DsddBu2XKRYriwdMwGmVFVJN7DfJzgh",
  "key1": "27DRcP4paH51eMMu9KVXhemib6EttmqdcpJ4b4zgEbCWGneAqGMYu3J1pYGAQZgNRh2cGv1MnuJ1HeZe7HbFgYez",
  "key2": "28X54EE8msjugf7Sp8vRJM7hN6JUeFv6VfCcsgBxEVQHPbeb5mPu4R3k5R5ADrnV8wXZ5UGvo4cBUEX17KYCUE4g",
  "key3": "4VRUAb5hhvhpArNhGDvdsKFEwChwvpXdwVgyvo6kGwQXVGj3rqYyNx9DupumzC6QnQqXca7MbZ7MLyAS3tNn6X8",
  "key4": "2RWKPLoYaXTcAu5tynqLcaBvswV16sWd9S1NTcWcdA98FXvqbTiW9dFbodZbfZSYXN1JWiJpLXC2s3sFwcqCAUBZ",
  "key5": "DyQSPUbBBo7gA6T87atudJqYM9kzEcYLYm3R6keKVWGtHJZtTBC96TKwjZPv9dThF2EF7USqU4rDPaNuv4Yqh8p",
  "key6": "2wFMxct8KpyCJxkDsHbLiQ7qHQVrwtZeKYSWE7JyRJx3YCPQJLPKnnaJDxtJF5rcYCXpP9w9pCc5AS69TGjx9UX8",
  "key7": "3asucbG58hXf2gtxh5QH51uNEYJQAUhnxPLLVpidMjX5KZ8bL9m79Mkxq3wMVpYRc3asCok211D3wRmq8Y5dnUCa",
  "key8": "4tbUEaTtQkdPnREsRDmjZBi9u734kiB6PhPKEefnCffZxd5vYduSrx4uUnUzaVc4fQUxtKCYntswmDc82jGFv7c",
  "key9": "42hzVCuwbuaKRLBzcNbi4aMPS1L6Bk5pstE5e3S5NPAT7EBZ47iovovwYfMK72xiKbxA1o6Wf24zUK8s1RWRPZ7j",
  "key10": "2SzyQeoUCUJAS5obGFHsVRpiKqrVdY1WmG7iv191WBDpHLVuMXDbu3NxomqnoADdASLuDpEv8aU9E69JrSn5UCPj",
  "key11": "2t4bR1KBhLfTB5gpCGFPqFhWzu1QwJbnnaYZpd7PDTChm2kCBu71FnnsMnrwR2Sdxg1pwhcvkS8qCVtWvE6W4wEq",
  "key12": "3PZyeE8pfmivRDLHVB9ALXN4aWhPdsztMF1LxczD6wXjgh5vnQKrWrgw9RHp8JhUSpoFoDFLzauMtRKJvdQ3YM4L",
  "key13": "2HYYsywoUPj1unYKGkoemLp4DrcveHCdcJJRDrMi7q8oaJrsJXk6MHCPkjgeSvEetgPbHqm86DSjMdcwNh3nChPm",
  "key14": "261sHm3on7MwgcFFwkV488nbX6Y2xJYefYnTP7sdjgAEbRNj9CP8oseJuD1YNYHwbtorPqYesj7dhWpBCCb1H845",
  "key15": "8ouVc81VquKah9anPyyyTzDQB2L9ifAqXwhyunnpkU9rZfUyLXGNrweo42KC29Pkz9nieuCGPYiSXQA7VnEjo7a",
  "key16": "3GoozdfsVio5EfsEXJwQyhMYDyU2WJyA48g1LRAQkVJvXz1c1TPh6MsuRc8CuFu9VmeHSP9MC5d2tKYmPp2Bhnpa",
  "key17": "2v8tY7bdwtofJUwKd2iEGSWmMiomKaMM5MCnWDQcGnruL8TAhazFwMG6oCnsdZBkZLopmbURKFmTf4d62vZK1459",
  "key18": "4kUT51ZfKVacbz1Vam4fnqMiPCENy5wkUTa5wnakbLBto89Pnoo6ZBMWAs2ZG6AqeHN5qNTBgjVSEUzV1jqCJZMb",
  "key19": "5dqhF1VY4JJE51h8esAsSvdCd36MKHVW8bSQZaXTU664XzdJaGDXmoZeDUqExe2ySdeSreaxf4F5hZDo9ivXaHfg",
  "key20": "3m76brhcjFvsns4DhKPzP8zJvVLvMY2sebWrj48KBLXbLJMffh5C78Mgd8meCcmcJTdYrFHdrJh4dqrW9xoFQnpa",
  "key21": "3MfhGa3rP5ryQ15XM9RWYaeGTxXUfrsffpH6b5TFbqUu7fvBBRqBx6yNDkUc6nDgwiUvroP9E2qsufdkLFSjj67W",
  "key22": "4pfU3FjF66cP7LZGj9dqcgJLAFga2jcK9J3Td8XsSBSR3eeHvBBS9yrLkzn9ErHceHjky11uAemnvSY9shWbxh91",
  "key23": "3K9aEFDefpUdF5Bev2WMSyRTAobiticFWsgdd84FLf5C3BQgvfkwXi1N3VLvCiY6ezbDucagAjzbuDYSuWKFDycg",
  "key24": "jCkHyePnSKv12BwGxf52LiQ3UjEuiA17yp9TSB6FnLQgfuhYFrdZnWnbABWcdVHsA4CRTzZD1kQyytcFvPWXhFb",
  "key25": "2Dh7Yy3YEVHhHApxZkQEtSu9CuQdX57wtuYiBs9ycK1Q3bWAwwcXYY8R2GM6J8ntEtXfhQnn3VDX8VHJrNfipMjP",
  "key26": "4tBLaNExPNpTDcBTyAR2VTW4woeD4GcEAg4tSMwR9m9p3P4nHiJux9BLjA89iJgcrC7FUe4xMvUm64qXyJpmJf3Y",
  "key27": "3tVHs1xdQeACk8UDMsE5rebubnXYbYXniuaYdjiBsh5ehAywy6H2Ap6U2yW7PWRK4gFuCf6XzMfh4eihUoLVD1zi",
  "key28": "59gUevrrAx6YKPaDEGPAcvmGAhu3vP84d35X8yYNQQv4dhGEF83jXsaKNg8YmyPTycdNhxRfucVbSMAWnCyRTRQN"
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
