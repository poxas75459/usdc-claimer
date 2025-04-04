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
    "4ERQ6XpeuLuB9YpyoBtKghnnNhq97dt5eKDSiARDakpJB7w8PHUUMrQKpVMBCQyy8cvsDzhcXQsupRzfkKGe3bpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59F4g2VFFAifvrsjTFC5ggftTtbsyNLTZiagPHAqQp3W7pQG1LkqSQ2mhF3cjCYmfMqN9eCTdoRtqEcUPzxoz7t2",
  "key1": "5vjZPPdvjFCgUyAA9QBpzmEwgZX72aGGYhqR2s963aqYStWjYHDs6RkYjTs18FS9BTJFhy4i8QwfZXU6afDCueZa",
  "key2": "3fq4MvjZbBa8ojzt7zakYEXb1kmyZ3Szk14Qorst2jthe6sBWckuod8myXUmtipH68dHdzLUtQw15cmUC8v9kn8H",
  "key3": "41AnGR4UeVCj3pvbQrZCk5AydKKsYfbPwBm2krVVjpYGsdm17oiKVNBgkQtxjoc9Bxpv3jUGHzqqHYrwdhvPppc6",
  "key4": "4nuFF9nfE3268LrGZsokgoXPJF2rapMJyxA78NEzHF3nmdaDsCdN9bWQp6Sh4U4XBbiUagYaUx8Sg6Kc81r7NxrS",
  "key5": "4j7UZrpPVn3JrzoupqvJ714a8ZD9EHaxdxVzVxkKCArMN5CBq3nrcTGxabqHYB2p64LYFaQ5ee8BaxKQ7GPPp3VC",
  "key6": "3ZC9YJ6SAZSCztZZLQPZGCAqexukKpp8MDH1QLMgyvxJciRPgwPqmeJkL3X2scFGe5uRy7F46BrBoxNdDH61HAG5",
  "key7": "49it4HhRdK6kL48yAouQ53rDfV86qU29PkpFDrQCz882eGQVECMfku5w7Ys7PDYAVmFQMFb9CiVQH6qMwzz7yEbx",
  "key8": "2vvxeFxs8unWxGYirY2uuoFkFY5ktg6d4BXfAiZXRSN8rAvkAhr9CiUjACP5Wkgw7mNucik8kYiu1BVYDLcmQPjh",
  "key9": "3KtGVbSEvo1G1iP39GmRDfoMYkQ5VTPPz1YrGpPkgDoLTZJ18QmokdabzvucdP8T6us2VvixMYy8SVVhkuFCZ2Bi",
  "key10": "2cwqh3rZpscqJ6wMi5JJ8wz1uDgxdDvDJ8rTRMxsvw9Bromeo2KU92Ex36jGGdw2s9aeiEUyhHkNjrVRUp6M8Nik",
  "key11": "3krwHdRKzc4E7TKJjMqzpGnNch7DwwGovr2MuhfLvNnVynoevjgvQUMKr6ybWUSMBgwAzs1vFk7ywKsHAaX6f8Dc",
  "key12": "5WziDbJUaonETRsHRo7sG4tqG6VA9TdJqGP13LP3Ne6L5YmStTVjoPqH4kqz4PAuwC19LejkJakfNYDdN8icHuvv",
  "key13": "41b6qqrJSgEz8r65HopoYC3KVPPA2UacguegEJe8tET1mh3DTbQ2C4u9Jh2QezNVzMU8YuPpeqihy1pZgfGLJjoB",
  "key14": "3yzp9vZL99JSKPxQg2KvA7C1gifjNrcgQ9RJ8BUUa2V9BS1ZWj3S3fvqGitmMo6VC783ZxsCiURSpqqMCsn8k2cB",
  "key15": "3dN55ugqMAAKsHYz21tJxEygCfB77LrArMuZ9szkCGmpWPYaEhfsK1goyGtKEWxUFFpHTYyyvkqU4iM3EngPQZZU",
  "key16": "3m1u3kDt5vrm6sVX7gVoUSatJuHg4iFZNWZyDiVdpeBxrmVRbHtsvQZWfrPoTNvbEcs9YLHGL6nBA1mca9hazgWF",
  "key17": "Kzn38EKjVKBEkULFufxPSXGDCDrsCFZMhJco64HJfAJsEeXeoYaFSbK9PdwEDNYsoodCbBrhT9Hcbo7ZCZupjFw",
  "key18": "5cs8LQL5bWo87Hfp7w7nQjEpcQWAYJLxCxcbjRLFtEwAzmB7bBM5Yi4BpDAbYDEbt5HxzJ4LddR2cQHdUSbDe7QT",
  "key19": "3UjbHKyiiZGdrQ3aAcGNiHBqqyNvfqRnxpXtZPhY7LRqLTkzJSjErZ1qL2BKdrh4utqFj4suEm1W7KWmpa7B8ZcY",
  "key20": "5uyWtKkY1YxEBDKtKSRsNsQrs1pTX7eFREo2aYskDLSEousp7jFwceuFm4t26cWZcakMsJ2RSxViMcDhwnh1u8Jk",
  "key21": "5tUpFKHh3vbrU4YLxGbm4oPngLHxLD5dqA1hrjjABx3cJRMbDUDU9qDY8evKEzUaUVuh7Livu92Jp1G17y45K3r4",
  "key22": "4WxPMiMjjv6QTH3ebaRr3jR1gzyJA4uoWA47BGprnYQkPXvFbaZQSupU5v4FQEZdPDbrmsWLgR4owXTG5X6cjd2N",
  "key23": "85VjKFCKNCqdbsNRgZXwskEVVFUguH2i5b9npy3NM4tJ29MTLYS1trcuaUhybtQSBX7iZh9jwHgerytwwxnj9WV",
  "key24": "4ZFarjp7KDcprf4tpW1zY7JPQLFcfc1Xq3SPLqHpsQPmS5JB2BDELagu77J9S9KBfQxioNE6pdWnR2EwbAbwg7Ys",
  "key25": "2fnZSN844UKGt9aZe4oJrFTGk6o3ocecTG6soGRp7fFKsCLvrEw5jsLjNvRLZHPmo5eTFESBrd4Bxr9HzrSd8jE2",
  "key26": "uCsLr1cA2RJrR79KRNAe9dPGDDDWvfrKm5rfGobwWyw9bWxEqNPgk4AWftcWGknTecLZP1YnQroWhU2UJebBYsW",
  "key27": "2jAzxPsprxFSA3Gjn8PJJL54NYBxSQAsygkmwEEJ4Evc6HzWQ691KYwaHDLCyW4kmAbX13e4vEBznqefDdvoyHPZ"
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
