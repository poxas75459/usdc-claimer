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
    "4sHMgd1cTjpN8yBT7xJ6VJrv9rrwSdun4MjbUhd2avTpXdznJezyrfTKFjCvPfZNewgiRm7yUDjaWdRrJxAH6YSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oLVicJTcwto7MCbJdMjPQyVHdrHK5JF6vCEUzrDobrFyUiUENP2uD2wTppgRJJsno8eQNFMBAHWtEEHR4Fp6rgu",
  "key1": "4DXfMkK6M1sLYYUV3m52CQGMDY5xGxMu1v59W5vVzUM2neaRG4ABupoHCj4pPbS5wTiNEjd2Mdc7g525p93GZgLa",
  "key2": "26zsYmvPBmDWArzGn4pUG3QdeDEPRzmoQKyKH1YtwzYPgVk8xKK6TPVLRHp7TkYG4pg9AfNLjq9rs2cHxpFq38tt",
  "key3": "4D3YqsTWsdeQNnH2y4w4fB8WntqyH7tfLyi3ZM7L7DiiiEbN1hetcEVeUZt48M7WzsEtijDLtdQFSTrPoGzbXNcR",
  "key4": "2vmyAJQUY9UfsTtJKVdLtuHoXGQ6VkRZxdLuXmvXyjgcTFxtmnwy4KqN68xEix85ZrtFS3xvbFqzbejR33UE9yK5",
  "key5": "pfXNfS6m4pEPz4gV5YNyaKhgvDD8cwoY6B6RWWvResBsrryVogiZ3zk8vdFfcFxJu74s3tRA3y8fzopEiCrcLu4",
  "key6": "v4a9xtRohXG2MkKDWH8nSJyuqD55mxceuFMWU1MkbEZXsKNJwd78yRvUPZF63JCJsYQ1dACLARojsSYy9WiT29g",
  "key7": "5GQw8LeK1AVd75HM6bMBSnKkQ5cinjxd4hTgGaiDDomLmQmQNpRg2AEGdgf76UKsfVaRdqJZqQ6AizKRKVEqSr33",
  "key8": "5dBaPoPBB55brh76afd2ivzXgXbfM2DX1vgfuspqBir85SrhPTY97vkEV7UyFYoYoHyKQ8gcydL3qaXymCyA72Y9",
  "key9": "49H7rmKwRcreCXPKFFUVWPasdNgjmXa8ahpLYGiR4ZV2Nc98mTFJbDAi26EDseLGQzxWinTiZ4Vt1kYw4Qje6zYq",
  "key10": "2ufmv8dty45Vy2czrFgbyNhBUyTnFhxwFEDJXvihtRxkprVaqEKzr9KeBUQC7Y2LesnBMMhGeBG8E69Pu6DWs43C",
  "key11": "38VL5hdPiWCH77zcs4YJdAs8YzCUjFBwMf3icroZCxYGFpMCn39xq63cgnAdSmmoZSrnysSi8r7dpCDQiuBVgZyK",
  "key12": "2JExNZmQPaPMU3mHyegJPEN5A1pqC1rCUahD18PKYXNqcrzCzxKTQQxYV6shNPysW1tvjcZSuSBYCK9N2d5mMD4r",
  "key13": "5UUUpUtPkdmQrvk1KYZPdM7CM7SjtZ4rVpE5WDEoVrYudzmdek9Z3WxRqsD11fhmwBN81sRZZtHhWUMMsYJs986a",
  "key14": "3KDwLG4r81Cj8J1nw2Qx1iF5jvrbTaKqVJUN6FMosg83vLU5A9G3QMwNbcSwRdwFJkyVGxC9xNF1QpFfECnFhot4",
  "key15": "3ueGDJiA5Btw2rkE3AbYKtSYq9kDEkV4GXiKvNzQdQQaiXAs4qLB64Lur8SCKGwZxLwhFX8a2HiMBUUSJd4YFCxv",
  "key16": "3vPLkY5qAQwUARgbXNgiRmrwmtKV6GeURcZBuvAsUWC7feAv2MFFMQsbnjRmGzBZDkQYdGGYt3fowcLnbQWeBU1c",
  "key17": "3gsWtSiYfhPgQJFKzyzVoappFF3D1VNXjoNL7Nd5Zpe4w6WKHEns5z6B5JJBkjwWo1ZHDWLaKVryoppPsLpcSY7J",
  "key18": "34eCE71iuzhkopYTJytf95hhJqXBKDCNL6D8itmDjUJmZL28TJ5CaHhgqzn8N4voMmmeeUnxKGkihnavgugdu4U",
  "key19": "5d9W4d3ehwk9w425T8oMxpY3gLqckbV42Np2ZBoiHGv4irxWj7fifYN4nzLuQ1kDgMo4R98MFv5NyUTGujPfiAjd",
  "key20": "3NwEXAQF6k6vWPNkvQHoZPFdQPn6nLZyGnmxhG7hMUTw2KbRcHGhNMFYw57RTZRWFThZJMubW4kpp9AJtr8BYFEP",
  "key21": "2jFGhXX7dg8V7GvMdfzPaGWfxSX3ZPLyy1fCT8x1Yz5KzLqKn3VHEa7SQXJMTCBgxmpHc94jy4QWbfYBJ9L2Uqi9",
  "key22": "5JzxX1oJotjLcox5bBczUM2h9VgkFHG8TmoM88emA28LAnThoxhHdZpXEBrh3MVkFhMWCfqCEWGUhvfm2c6U9C23",
  "key23": "4d7RehoLaK1TTGFCr4rBVXruYoB1Lbj9NYRvpobtq2sjRz5GQLBtx2fXs4mTER1aWAHgc6gf3Dt26eCz1Vur2CS9",
  "key24": "4ftaWA5c1GNEKa9LhVSbeWEG1sDFgyCK833hvW5SrpXbY75yJvyun1dB26pFUAvfauhRKgmU4gUvCkuez6Y8CvtL",
  "key25": "iuJMfuHToycPChiS7YCbAw4UrXMWU3XibKQxtQ22QPpjGqv2V9J1Uwc4m6sEamS8vmtj2aZiDNhjdNF6cMSwaWL",
  "key26": "4yhjqWVsc2ZBq6k81VaW3G472NwqDVW3gXaeAdzzM5thmFop622UDpVGT1ryoJjHVwR2oXLMSSiLe4jiM7XYJRin",
  "key27": "5yANBrRE2T99Z7w7EJGHJqJ1rwCZcfyo6xsE6xoVif7hUBRqHw7vy9vjomdPbexeAka2SiuG5yE1sL4RE25HUHg2"
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
