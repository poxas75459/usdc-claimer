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
    "5vTPRWeRFyDJYRGkZc66tXqGpUpZfRJibe9vK4a6ewJdb8xsHdNw2L5YJdYiSd5ewnZRpdkaSU6iPi18xcKYT7BT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ozBPpaYUHsag7gFC7PSdtbtQ8NFtJtUR7A6na2UoGmdprNvzfwnabgxpLTmxUg4rZaL8PakQGXxsukQ5RjrLnG1",
  "key1": "5c674yutQSWrbBvbWcuVNr8Dn9KyWbAGjptR5UqDWUyZyEKpedMLkPRV5gBGEub25XLkjk4FgPmyfSL8aoJ6x6J",
  "key2": "2xQdYD93mYY2tNgZhsn5B34istuGMSiTmCRTzVQ9fgGazo9T48YUto2HLTPUUPSAsm9QcPeNHHM5ZMLm1zA6vfgq",
  "key3": "5kJBVuutKpxzXV7qf3i41dmaM9hBymujBSSAbrMqdy9qJLbowcCL8ZPRcnyGARy14aUWQEo3BJoJAxAab7VWTJYQ",
  "key4": "SicXhfos37TzjBLdEuywL1rk2kboLj3rjxgqT3iMHTFQaygddQv6F4TEpGTTMX6ysRP9Z6zZnpBtE6UsfEJFhd9",
  "key5": "NHTGyeGw43hfCtyMRamgxjQSRKB5pAu3wRtiUfg5d25EguJVW3RcmGyXKqtPh7uVZwqq4mERiefcGUKVcYLp7Li",
  "key6": "2wBw4JQYgd8t4yEKgRaVRybtv2WGF7qDvB3G2K2e2LKwY2UH6EQXuu4Pg8YMuLSR4hPPGpAAsxSaMRoD9Xs7TY6y",
  "key7": "5mP7dhUqsc8tEqWny2D96SRFPajZWY1XZ1MQJ6Kz7uvVa94WHN85pc3261Lhgr6SjK5c2mYQGGEdy668RehECLCE",
  "key8": "2h5Yph7QuUtSmdueENMWA7HasPppKMBaiQdWa5gkQGRM6rb4QGmQugL1C7ZXGRYb4NmuBm77VfVfu3zC6VYfk5dQ",
  "key9": "5J2gFG48UM35pbyKxSVgeiWAZTUGsoSXy1eNL74TLuXLxWoNeyWVUJWeyAxkQxvCfg2hpnviqv2RbHvTVqmY3vHt",
  "key10": "5qXttBArY2RYtqueSZMS8FEo8aGXHamCGDKPGJ7Dq2qbGzSWcje3gfJPXJBVqihLCpPLrsR7r4Ggd9QoSM4Fo9K8",
  "key11": "23afEr26ADjCMbUzhJFy6GUbMFUfsY8VAqi97CTeLjpNQJuGvfA58FZukhCPWuQHaUiFyBCi3DgB15Q5XaBwa91b",
  "key12": "3Ln7yGQDPC1jDfU1CyUHNdnMu638g7zDJ4MKczWCKBzACcaFrZnFAnPZPodu3UwDQuyscJD9ZjBMzbgEsacEfJvp",
  "key13": "5L3wbsLzUGKepuRdCQMFqxXnakiPLo17UrZmWqGpk1zoUCbdnDU7tyGa7hx6PXqKXLW1QpPFKiZs4CnoCKZuSniu",
  "key14": "WofwRhykrBJSf8rr88A4f4uMVcogf2H94DvyLTwzyJe6tyfXY1ynXMaou2592tVDieKh174LTeG48LBA73CxE2r",
  "key15": "5xDqyEdpoE6msFwSChMPRLFPsfnVXcvLS4PunB5a1z3ovpy21Pw2wadyJeE8T9qBZVybw2tRTsC7X5vynezWVzEU",
  "key16": "4LecHNnYHox1Cn5y36NKDZzjDJ9s6d74cPaGk9B6z1EJYTEAovaXY2AXwRHJBwkwspwgJYsQDtiDLWo6NCEu4hJp",
  "key17": "3dSGhmYuhvcbUh6voNpJSyvRKVAx4psRJwnLdUfBEWysmRPJYgKswrhqFE5hAjnyubNDe9WH6fcTfyFryPzc8Msm",
  "key18": "7Q5LPkfWFd7XHLrhCiPM57hFgr7bVvaHPtXuzJoV6kMmy9qafhtSSNHjG16pZGT48hbBBqrZEdy5zxcRVDHwqBC",
  "key19": "5L7T14cMq7yuLZUZUXHW7EKriiYikWCKDqVhTQHh1cZrz74wzD1PA6LfKptWbz8QfuNYtWqpSh48PVRMPpqg56xH",
  "key20": "2sDXBHEcwGx4c8kVH1C9iaxPHbUFdrjGEdJfTFWNuGFeSb7MmLMjhaYSc6su842yAj1XLn4XyYaVgkZeQFTsUpNr",
  "key21": "ugQWdpSffQs1quybnyDTyoWJN3KBGGhGVzJxRnKpryfzqcJdt1TNZcSH1gsjv2UWMVCzBqYid7GWXPwa6wcwSjj",
  "key22": "2XoZzrr2zXLa1dRV6BG5d217fgzAiuFCYuxCbtmuBZVM8EDWRxDRkMgZZSq3bhkZCqvqMtxMzdLqHQZSJTyquXKN",
  "key23": "61ZTwL5EPMSsZFB1SNwtGQUosxAUp1GNyB5FrfXMsSyvSEj4mtRzErhuWiZYC1RiUnnFjGLRA81KszUfrtWVh4Q8",
  "key24": "483oHw9DiwwCCpJiYCBn3NncYfku5bPDpkY4nE1CL9ogyQbFJywvKyhDSp426JTdGxXZVshdJjTWfjeZFL3UhceB",
  "key25": "3FigThY1zFQJhHTvvF99EcCW9Zu45gYy2GEhDuET8Cvajep5ZJ1ex4cUERDjm9ez4kW1szxbU1ieceBSrK4PCcSx",
  "key26": "4sFn7W1JwUpwLYVUMAu243SgEnmwxAsZDEpqJoSFnbGQqvrBpJxFJZa8Y9nwPKFup16YVfpmoMej5EZJbFZ3uNXV",
  "key27": "2npsZCiPUdAgRyR1v5uUmRGgwtSDJrSaLuqNZHWTFiWfEWCWkQUAdEbKQQpo1Dfq4BBwWVzAYdeP1L4HFcCM9fwt"
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
