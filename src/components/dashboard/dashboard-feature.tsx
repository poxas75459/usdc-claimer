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
    "64M9kCHyatycvpiz54ctGXXEVpLwd8KLELjzsJd9GjYshCBsgbuFkkazmKH4QGgAHHckFZPdNR9fjh2sP5Ys7SwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A5NsoNxMRKtzKmtEBMNnkJRUbn1KJrudCXKoqxzLhPFCZn5oy5EdLUdjtBiizEu6s5p8mmRPE9nKruDtdH6v6Ng",
  "key1": "5uKfUXB36SktHZa1jqZ71uGW1gojpTurq7boy2KxgUJtQbmFogVJgox2VRWjAW5wJGU2tnk4jRPSeTitv5aV5Qxq",
  "key2": "2Zn8TNdHMQkML7Ff4JZ5D6Fry3LEYeoJf1L4trrXgYfnUxyCP8UrNTgTD3RUfVbxKZZEovxRvxPnTn6UP6w575ni",
  "key3": "5TWoXdxZjT19Wpnmhd9sbpfDL2qRxr5keBzpiTsuRmmALepm6vgcmEVhNNwyup9jaZ2YBBgDz3tuBp4BQ117PEVu",
  "key4": "5hmzpWMzaYEK2DSE9hmQkXyeebjnfBf7bL23fPabcyZ7sFvyVsBDrkq1tr9sP3FR6chnrRMfEwLFrARJ9CeqeWyU",
  "key5": "35a7JirRBbn5zXb84GSuk3qsvquQYDRqJkTAKNyu2fEnCDUJtdxHsyZ7TDrafPDGUJa1eXWPThHAvKS68JJJDHse",
  "key6": "5UYg31WRnR5ZbbxNHeij7HG34DTxJSHkp629Z1HMdQoThaqejQdS4MvfLUYCMTotvKL8pKxHiJu6c3HTNP7gwzwz",
  "key7": "fCQzmD3rzLbU1ZCh6cHcYFU3BRW66QnRMdY373vjjX6ZNZvV1fS4AybXW5EFtEKqV16MM185csV3haNhtZACSEy",
  "key8": "2ruJUzMHbtTBPthszKFgCqijbEefwW9mnknEFLpXLjpW8kZ3igYUbBsCHosv7bsCTnAZU5ZyC3V7YBXSHTcv7HX4",
  "key9": "5p4X93SKJK9NfqCNyzfSbybAyMfGDYUzWqRQi8w3d78H3GKVJZwiCKWA5DWkEwhvzDMJZ87YzpfhVHpEEaq4EAmr",
  "key10": "wYgzhJxTiBe44hEagGtSQ53Zi5RiNZ98HD2EZ3n1qkrbRzCf7Werdzjbef4tbsXHjCFbf9QRkGrnT88hLMmNAcE",
  "key11": "3ACop1hY9Fr3XF44qn9Uf2piWVzXyS3MyCB719bXmepSQaYMd9L7ogGHtCtyGLuszbKsvzhSizC3WLL3mxWhUyx2",
  "key12": "vLNZK34ovp7fYUNiRaQYF8ohWZw6FoxSJdagjrZteWHvLF6rcpssDzG9RQPibJ2H4DtGxrYCgQcA9WK1613qYt8",
  "key13": "p6uXYkWJGUc1AtpXtGave8Mtv6kYVw1RkzHixLoTFMuVheJghVadn4UzrqUGpGTFMpQiWqa5AwMvwPKZwq64mc9",
  "key14": "gmjK247TwyjyUJSoCRcbcjgJQKEEY28j9rCNq8ziSR5C1A8yiV5fB9Jx9oWdiUERVPyB56sjm9dUYCGVb5S4rnB",
  "key15": "3CzbtyFHR8hw3pMvBd7TpUD2L1LAtDRisYchgPC5UPELwmqEQ46US5mndNMcSx9zVFmwuB6dXpSYJtPPMgqESVVm",
  "key16": "3UYYT81Q53VQ5qm6tfV16MxMRsgsLpKC4HW3Zen9FmJf3KRsc5TJQ1n3c6m7xvBGP5aU3wdsd5SyFzUDcH6Ah6Gg",
  "key17": "nz1jkZEZy32odeNMou2D4L7SmQLyn9piAA6MNHhK4MKSPThkKwkH89PicKr21pXwRAXC1K2XzMQMjgrpzN8JCge",
  "key18": "2QgQb29HsXB7YY3wJquVofXNuYSJEwuHdfK9bJG5njBhbsjWp3F3EhDFeu6ZrHW4V3nB4LvirL9zN1VyWN7ZqdNR",
  "key19": "3dhbr5jxEzAYoX7Sck82NdWbA2haA94nsd6tbrTfAWf3CT53Z5X22AmvU8ZUcuowHZJjHmrsEwhQZMLFHCTu8c4m",
  "key20": "3UbWgPEd5ntCTmiJmxis24mA5FPHo5D3ZNZwoqo1bDwrSB6QGXDzQeLJHqDVYZXWT699Q71rZgM1Wu35oKqy3rb4",
  "key21": "4EXjH1NFrVC1yBH61kVFPj8nfR87z2oBPZzkYBKYH8qX1BEgtLhBtvyYozVMyh38eR369Cn8WFmNFQsU5x98AQ6d",
  "key22": "2an7KAEPhfWzS3qKkkU9qNSoPraNMggmQHPBTy9cWT4uiszrBDWaBEPDXdXmpU3MTb52p6bRMkv5gusdqnCQza9T",
  "key23": "31TtxvAK7iLiM1CnnJ41mu9aHv4YfK39pQCDY1VUNPR1KNxCzXVTGEDruxbkLLYM9vP7JEYtyjJ7Y7UjvCj9nBea",
  "key24": "3J4GPSfPvXJzBubczBkoK81izBDfUdLbmtBTRsWSoTjzMQZjJDwt7qUthEjL1fxVYSyrWo8wC3C3uVBAx92H4aq6",
  "key25": "2sCKiurJBHJWKMres3MBWseVo7RTz1kmPEytNPwnu2RxAMqdnRLgD2TbHU4h2qGLMMLo6hJzbxTEPQdLB33QooYw"
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
