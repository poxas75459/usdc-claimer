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
    "4cZWuuZ1WyNfjWuDhJgAYmQKYLP3BGT31bXvNioFNJa77kkfbPpNgrk9aHBE8nJbV8RS7ft27Pas9QumVgWhj1H1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64BeoWzirDgTZ6xNqkEtpGB9hi4tu8sWX94rUobGGo3J8yCaxyhyspC9Vdhy4SF6qsrWHb72jJURYoonqTEvaW5j",
  "key1": "qW46HSHh8os2cwD5tw6PMT2gf5ACENtMfo88R4ooU6GhbXt4jUN1e7zvxgvN4H4Q1iDPNAHefKhQqUPMd9ypVVb",
  "key2": "6GhD2LuzozhsvptSE8Pf9t8jA2yLpeSmWu6KuCT5yhZweoMVWpDbixzMy43RhV1G2dZJn4hgTk282ayVhTo5LWA",
  "key3": "3a5auutnc1bYq32Y1ZJzkwWSMGQSijDLQeKj9QmzHdZsu8Adq4VWJpFEvG2Q2FTCeu8bFMLxBTZ9iYW3LjTBf5sf",
  "key4": "4RB94rDdtDCeveYAppgWhoDdsxAKiNu5ceMo1MPFWz39VhFT3pRBLf8WUkNvFWcJTz3sQDG9s11iWsNBhYEVGarZ",
  "key5": "38qat7uGjmk4cPK3UsRgB3yzjGgYmA4xESZysgg71oChSr9NwP3jdmySvHxyZrSf2LHg7R5w1UAsh7nBQj249psC",
  "key6": "3Z9XRzUpXBSRSYQ8VTfrbpaoXqJ5a7ZrcFqD7WCKDy6h8RUCUGDAdXmfxwZLo8w6i3mshTPDqkTKu67jxAtgYKkq",
  "key7": "7csZh41C7s3Kw4hXQCaMnhWhkEJKS4S9d3vsVm3YnaHeuC9NoaT2fGgpY5nBB79R8KBsdbcBexREgwZJ5XgpZPw",
  "key8": "p6EWmNwxSKAyCXugHV3v6qm2rWwQcHnCqN2fEqkDtxa7F5VjSvNPuiTbGhcR7VnTBGKpJtAw3AoFpp7iMupiatS",
  "key9": "4neSJTne3DHjMbxyooA5pm47SYyuaD22ghns8KErwYTHthT4MqXLttbNMbnCBYhDWkz8GwfNE9zDLcYErUWcAKSR",
  "key10": "2DJWvoAkUdjgV9d7CywTGhBzixPYXLDkEfivjzyfyuzXJCAgjJZ1dbkyym9dNtxCh1By1HSCvi8EK68a44UvRag9",
  "key11": "fjo4HwsWoomi6R7Yb5uJ7Ed9G7T78eZAfTzKFJpCycJJyoLa2tXqRuA8Vfu9d8fZeomJrRYPkpsn6rWRMA9xqrn",
  "key12": "4g4Ygy8nXF2Yri7tqNkF2Loe9pJwEVfy4Vr8WBzuwwU5HZCwRqZk5YuVra6ve5emiR53LQCiBQG8eUnjeHfCsGUJ",
  "key13": "3BoSYV7BEXnMoWJLombZgsecGMZ6VnCZRfF9Dqi3oYL49Z8r86wfZ6Jwe98Q3hAyGC2RmfHQuHHh49AbsPhVH8Kp",
  "key14": "4usN4c5gaX7r6u17dHnNoYHhPkWqzYEpJz5XpUkPhJ6yfW4puQtvMNtpSKuRvWnYFoRKbboMb1H6iHcyX1NiFkt8",
  "key15": "5TZ3Ecy7YPGhQssDoLJ9MkRT3v3a9pcZSSigEpMSj9XxgCpGGfYhPnrc4sdTQgdz3EqieVS8c4GxhqPy9tadXecq",
  "key16": "4ew6fwQKRVgnV2TLpEZyqhyzv2QwWsuCc1K2FjbvpcARb5q5maMKa61PS33pGkMHJDEc8ernVRkKk5GaXRycRs1Z",
  "key17": "5ZnhFSm1wPAzwaQDF3q7CVZrDgFDw8eUtDQajfJ6GALWLWncVJo4YS99iJE5Xfcji5stZLdtWfVJ4R8MeC4wyicc",
  "key18": "5ram5SaY1aeDf7jmt3btFk21nr7B58oGRgjstZ5uaoqgUpXE59F6TgVkdpUTK5E2u8iiGMNBLXsZuxAsYBMsfW8Y",
  "key19": "qcKPTMqMV7gr2ivWGqt7BYYFwuDxAXLKLWmeLGdam8QGD3RT6w8qaqJa9zkak7Wq92PWcP72yRVffRB2p1CzLan",
  "key20": "29JcjZwWLTyNMxm3YxRmUT1cbwoeoQCzMSMpLfRuZdjuiwjxsbEnRmkvgLGHbMBDVKotZYqbLirZ85JbGwg7RD8H",
  "key21": "9gaf9WHqq7YoVLKbLp24sxLEiQPCe6dydDNhPD2FpJinrNV4fg8D1vGMSAieaepnq7ZGcxMjLgZrHEtXXGRU6t1",
  "key22": "qrLzhTeF759q7hmBvzDaLpjHwsfHGiBQ55215VxJtYzrJL4rn6GJbWJEuSX8DvhzVmrXapa1z8aQ3NiGn6EzE3N",
  "key23": "47LaGE8AcMtsGR7WUKkHX2UDcPXJavgUszeabLvn7bL3wQoobQm45PxqUy7PWNfTHeA65A3k8zHnK2xTMLM84P5G",
  "key24": "4jGNvc5jar7UTNWVvXCsqyiL1EHsckdiz72FENCXvfHva8R1swxDX6jkstBfSWWtsS28cYPz4ipXYPki4oNNUUna",
  "key25": "7rFAyWFzhGvdF1ECQu5HsmoTLPdysLEfyx7YrJxwqTGtodugaCVJwkHcxd1d4ySrcjrUv298TKkNDjxAddr54is",
  "key26": "4GzWMrGqTG5cyuPRSQ6AnYigw11ds8VyN9QVs1XdpEumntR1b6AsPRpaBiaKWeG28seZ3guJC9GdEoZHRJHPYHm2",
  "key27": "3GvHgwhwYCMXDKQnmeawyuUUXDV3ppzkn88PXtxtREA3cxSMs3kHKuaZfW6Bracf8iL9xzeK5ApmLXbwvUTvM993",
  "key28": "3eNNFYhozTFxWeMvUcXDiGPs9VFV6Dgj6TxtiRfdrvXjoiPyotgebV3MVGHApnSUGQ4eAZeDEtjfQvDLDmBVpn2C",
  "key29": "5C92LXMc6ZuYS7nLtfM1gj4sKtNRDD6mWENNp9w7qsdwbpcjw1Yh651GPsndCtByp8XPSRzbDqPovtyyedw1q8C1",
  "key30": "W9S4M1GvP9ifCNJv3mkkcsCu4V756H52LeVe8n2AoTic1UMZFP6VCPcnpQwJxW8gt8bN9BZQzLL8ReYVEwqn7BA"
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
