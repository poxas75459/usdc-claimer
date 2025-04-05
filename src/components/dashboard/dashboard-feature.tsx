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
    "3bq6HccPDQrMjD5nbQsBK7kqvHPeuXSSvkjeJDcHyG7MSfpvAJP3nAicG1SYo8RVZEJ9XtmGySoVTjkTN1Ga1ocG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fWNVpLJmU1y5THKPer68CbCxCgWD73vbgSPERUKat4QPwYQwo7N7LX4gby9y5SFxXsdhdkxcnn4i47bMuSM6dMW",
  "key1": "65Nu4RxhJVRveGpHsDHJD5TTfE3wkMdi2ZvEytwFVqrKjhPAJzMZxxjYQsLTg8irh3WmhrTFKg62Ci7YcA4Rrqwz",
  "key2": "5GTQFA79C2S7aE5cpGGyjP3heWhr3zaPdeEWn6H8ZsSXsXVBjVRvk3T5ryX6JC8MZRgZCBHZF58eVBs8CNkCehGj",
  "key3": "5e5ubAEcqDPbyWsubKCUzDgzr6AUt5Ehj9CuzkKTk8j2YeP9a6vweNKqM4u85WvyvDRdZ3M9pCwbNZohzKfPcqM",
  "key4": "G8rAfup9soYrr9WMkUSJUe2Vc7bXoiBWY6MgdRgU5cEj9L7h8N3ceV1EGXk2ofuCjVv4bAfBENSkjWL2WG2ZZE9",
  "key5": "xzGMrf1YEJTTxofgezo8nXwuh5q7Jnya3wKH7vaXwsxbAGsRrNXyk8LY2sg6cMPxkYezydFifS4ZLYT9NTCzTh8",
  "key6": "2D4q2ZwjRLNjAtsYmQeq69WBUComMYrmyGpuvVzqf1p5BM5TZvoVTWTHgUnfs3bjGmeswKNqsmRokhuYpUvyWMtY",
  "key7": "EV5SurPAAs5kF3hTiKMR3CuTJXjxSkGw4eqfFGEY3e6mrqDTru71f6hksz9TFpBToHDhfeWJC93JEJEPXrT693c",
  "key8": "5SdPJ9pEDAKfxFdxU78r9qwVoqz3pfXWADwZXk86SKHgf5Zq7jMPNvafRXkbyLETSd94sEs9XxRGiEKGo1uBWPpm",
  "key9": "2nr9Xonwg1NDabKBuPzdQSc8ussKTwj7tacwAuKcQweJotxct22pQ7TTp9QY73X8X7s5DYBerSHCHYXkuwyYHH3N",
  "key10": "5CMpY4CRkpbHusDUPcWfNYWbb8N5K7yiR9ccE8Bu3mNzKEfTd53HDbBX1qZxnh3foGo5nKERDtq3B3p794juS1zx",
  "key11": "JESYSjcCcPMG1cWJo7LERNyRpLh6C8S7cTohe2BqrDqvZvyM71djkxHrDRFcXEboY4WsjxSDabStTuTGtw79pXU",
  "key12": "21AMc71gxPt2FtQxaopbQxvjHopQmGhJidtfoN5BJ2mnTvD2drNyAQ8fHvypmemASpTh4iF3emDU5T89hBjoRFHD",
  "key13": "442NfFvBaZmuwo37ae1FK3i2CCgg4kws7B4YdF8T4b443Cjprnx9h7WEq4RqYrRiRABcpkFTXBWkyTxDJu2WrVhp",
  "key14": "r3qYaZwrMHGQqRaRrGLEXgFgNdvN3m1iJapALd72Ko3TheUfV5kQAR4BDKnhNhqdXeK5tuyWEratRCemJX4ZNmF",
  "key15": "5qFKxCBBxaC6CRH5j32sH5shrBLYu9iuQkt1cAeq6PGtmEA8Ar9SyEH5tA1VHbGSHj2FVynkJxUZxhPiw12mdTpH",
  "key16": "5kByWChpNdSiZUr9kPfEihEHdKbFxr9dYQXdWh5dirsydhk3syp711oeaKnemxPVCDfxfqjuNwVZ94nf5mEfuaqB",
  "key17": "3V67ab15mmwaaZmM2rTVGuEpEhPB1m4vWhMXHXBp7nBkQVBWu2wrHd5BVKj3SJ1H2JcSUDhciFHAKDHNsEY8FFne",
  "key18": "4oX8tYpzLkxwh4fKTrSu4ULZyVjij6qt7dTGeArvuLsPSNTxLot3W387tdSqdYXvopE5vBpnDKLFGq2E3Jy5uNed",
  "key19": "5khV6XuGA6Qa4g9qoXpsGgwDHQgZpWCsPEooMnPjXnUUXcjr5W89B17KjkafePXRyJo4znmD9ZTsgUbuZodQ7mTp",
  "key20": "2F8tQ6PqJcmfdREB5amy7KtSuhDVwswbtDZk9TfhgbvkLZDDKoPXK6JUGgo6c4mVehqqkmTPQuQ2gx4yrwjpp56o",
  "key21": "361pduVfwSLMQKLUx8G9Tr4T8oY62SysNwUHsWzT1LTNvFC8LnPud77fxRTF2xE6Hpzx75P6ctWjwWvwaEUAqc3e",
  "key22": "4gcRG8kxqbSdA7cqupqaN6S8CNviws7VcEjWakhfCHhADfVjFKmgEsCEKnGav6SNCXTcPrBsMUUT2VRpb46qDe6Q",
  "key23": "23UzeAaQn7uDWHeBQYz8rzmFPtCq7gyGD2TYEXMHLykdHK8yWgLbjtKYkfBrPBUJhM9qMYYTwKJdA3xe2qVeFYjM",
  "key24": "2jsn2jZBn4XA8D4dXGtWgrp2TZTmPDjki9DFPyVQGt2JkbEtyJwxvP5XKiud3E5LNgjVx8afqLzWFjSdwepJrx4Y"
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
