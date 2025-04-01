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
    "DeMCgARxGeYkHEyciZEs7md2JvrzucPGEaakkCpzTEV4fT4wkGzGi3a35jQktim3trxUvkYmJqRpiefPTxh5rt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g2M8ohyJrBm1HF9kmJPyq7z7cTgTnMYfFGFRkpU8392ZTspC5xbxYjHUqudXuSqjpAauirgLYAPwCtiGqmM3UDh",
  "key1": "5MLg6LyqjKND1WaYHLD59gfVHxhVwqAxrvfeygKcDFo8GyvTMqsDqZoJWjtY3YsuDK1jsELJj1jC1KHVLuq5YCm8",
  "key2": "5gdZyzX9uqyt6neaNVaf8Z7eDBdcfvfF7ZhQ1yeoWrdrvcNyGwz8tRqgh9KWUKJZB7s8vN9kxTRtfgjuR1vvceew",
  "key3": "NXuQTw9K68PHNRBFA4rXkM8xs8sxQrBY3fgKd2P2V3G5QvExLUQvnSKLqzeZxQvum7JXb2kRTgxwd7rSXtg76Kf",
  "key4": "4ykco9i2PFWmfWJKv4kZytxoborWh6zu1SnvZJZoq3p5YnQJU6ZYdWyhQ6T5EHewvRnqfvxpbtrMEzkCLUsBHGgi",
  "key5": "5yTcz33HC8yKMSKt99dntqt3NcgwyzeZN7GcykhjpTypViTkYZdh4m2TskzGnGs4CL2MbziasQ4h6SsXSchLuNfj",
  "key6": "5YxThSS1aaSoahpuifvSx5rqbZhMdCaT84A31MdzUanA5k8ytfnidCXSrdFuisu1y5w74yuHb93p2878vpLAdvJ8",
  "key7": "MG2RHcNh7kcgRkSft8gSs4FUVheAMwEBz7Fsc1tcwddNSaj7QtyB7SeeCBkk72Nr5Mnjf4T22h4Uh3PKFuJMxcE",
  "key8": "iwMbypyX3EmjzqksREQKfmJWS728g8DnC2G66AjstL4Aog8fWhFJG5Gb2eYq1JTDMkGT8cNxYRuz4yNc6yX7p3k",
  "key9": "eo5dX37mLM1sHVLyZXKHKRnajMftvybXpTAzNypUyYRGP9AVsCKS16LyLYox7DL9EueXvkMUd6yq65pv7eWos6n",
  "key10": "5jU2Q9iH7QFcmE7eUSNFXUKRcZdZS45uZA5NV6yFrRcgyBA35UypwU4jdwey94JfJuNiU9xqWvqtGgi47mY4p9TU",
  "key11": "46pkXg63y3KYTse5t75DcrA16JcDqSyEbm31gpTMtFZaBQBQA77xLwiV8UwLxU97x22vk9TQniCUXG7Wp3k5TRZo",
  "key12": "3zSm2cVgKbL1gFmzKwsx7HvoaowgqQQovDLXkTaZq7RdPan98mazM7TsccupzdtYKruJ8DUCf5M3QbHyBEyMnQFy",
  "key13": "HA2fH8hmUZczYSZdumdrPuQ5VkaToCCn16RwTCHGnLmwY5KTdPEFNRyMphBc6u9v8CMPbGT6M83yT37soB7HkhX",
  "key14": "4VwV2cR2uwerqNyo7CYe572uXmR4KrQyWRKgWNXAKbPP1aNzUw6s6mMpGYrR7BZqJ9GscqvGQ96JBBL58GcZQ6Yc",
  "key15": "3uxMcHsV9xDyVBPsyp2ykigbEkFjcLBC7tzW2FFwVCyNmT4QGtZbuyK9A93M1hkKKmo9icK7UQX9GLsyRk55BdKW",
  "key16": "5gBx8qEuKKKuibgx2bQ6thWBa3UipckGW82hNwPtr4kEgkk1v4QCnpri6LGJmCrDnwGikxEhumzeSQ6AiUwDXnLV",
  "key17": "4k9n4ryA6pA311nzxovFMfs7JxQuPYGgmFUN2BBLRhoQejchjKVjKi1ZotSuG1vfVZq5jkhnfSm7fCzS9sw4UGyw",
  "key18": "5M9CHNKUGxFyPdG7H9JHymYkDtHV5fhXKgJcL9n647Be67A3YnKiqjx9fLavavxWWKShSu5ZGHJPNaJWbCBZ9snH",
  "key19": "jLUNFfNAJk6oRB4Xz92L4Z4CM4ZdhR3EzjKwVBFCeCnePyooj8JVjkhsUcKzuLu7DWRirDyTYyvsGpQ8BvJ4wyR",
  "key20": "5xFH92fr4vrrYAKMe68HSG6G9a7ynLmnKgsjhotaTyFUqMPdXqxqaGMKttbTszmvaFzAfEu5SyU4YcUcVkaTsv69",
  "key21": "5mXfACgf2jyxZzJAgnPv5egYhGZv9ywRZaBfppd5x3Q78eR1aevxzZKrhBEpdSbtx4LNBi5pcSJsomXoJrKaGdSd",
  "key22": "57VfdcfYcyGt2KUzciFJCsGVab9yLEFHoTC9zxPZd832rU8AwgNuXZdWjn18vwXCEmQv7N55VBidsTaid5MsQU2j",
  "key23": "3GJUEzA5cfFGLYoHff48AfSUBN3YExMCA7SdPiGuJJkQYq3Be56nzrrx6gaVZE7MNT1L3Uu7vmeagWSRtBWtSHzY",
  "key24": "161ZCZ127cANtd6iZs8AfNRqHhtpZeD1NBVB732bMvxWdrk61UxqEJzSxZjf4AA4ggiLdpUJqwZLYF97HWvbQCg",
  "key25": "XkDyvs1pFFNEnYovNoanVRhs9ZqQQUAVZA7GRgAefyDJAYgLa1SLvJVPTPstwo1NgdS9mA5HmzmFqu8AJs8xFcZ",
  "key26": "2XeiCrLW1f2ExzTnp5i8ysUtUyTQ9LMG6tDw98BTAVyqyb2gap2tF1TMtesP9X1mw7oAXJq2FBVtf64hLMkL1Jji",
  "key27": "jJvHZcpAzio2byFEiyXdxK4Jr4GGDcn4dZpgyTtf8jtF4mH1njn7aKLWcz67ZpEMT9RMDdLUDB7MMbmLUKYV6hD",
  "key28": "4jh22yu6CEJJQAFp3ehxMmpon2Uj1uUS1xwsWjsP5BX7JC9PdFX29T57rDKxenxZasSo9EvpR31rkSTLmAevy3ZR"
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
