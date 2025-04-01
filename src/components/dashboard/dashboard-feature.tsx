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
    "5iPPkRQsTWv7UmKsitAnBJwVCb5o7zt4CVhkJvPrCFYhfdUb6jcptaiwp7MBRJ2j2gdRZzTLMg6bg3dPPt2AtoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iesQgda3vPYq431jegJDA9Y4x2eBEL8Jv3Tta4ZVz2okXm8WbLo7i5Gam6ow3RKqqKnzgzg2j6iaWUTT7RwQLnZ",
  "key1": "38HkNzBJqpXjZ5T2v9xz2xn3cyNSkezHa5Exrh91atYekjssSHGe4H2itifAVQwk2bq6Z7yfQSwAwrMpwQaPYMdt",
  "key2": "419Yn1sAuC6kVz6x9inSCcAszf6KTARjSLP9evHzMNQ3NfX9KWkBZjvDfmu4zVconr1X2mgPKv9w9WdKCktuA4yv",
  "key3": "4EwGMKsNinkAc6GTAyY7tb96Ls7vqoUAbiecFE1YuXakzNaz3AhdyGRnYdCXcePGhmuiLGxdwBWJrZ7EZVyMVwVU",
  "key4": "2mpHX3dqXCmXmaNjwbrZWiiCyRBVwWgHKM5jbzJ7BFPeyNibU8hiY6cwXqJrXPbno3G7LmT9nXRktoArz6XcPL8r",
  "key5": "25ZNihgfqF4jtdbJteCLJqjSn1PDWEGjd3Hmpb1Sws8d7m148KreLPdmE6LNHVN1EyZ2x4fPaqrgKtCotgNfWxXB",
  "key6": "4MoJs4nBMuq1YFJQWMT1bMoHxUj318unhP1HtZAJ7xwcURj8BtTPqPgSf8uUi2y1XroK5CDyYpu3wSNfv8SwHMrH",
  "key7": "4PN9Xx7SffVwJg5KNKJtM2DBPUQnM8LoHzgRVmgSZXCBsvhvF7YVmaGEoexjdbnNw8N72JZBSX3FFZA9HZgdvku9",
  "key8": "oAbSAf1CLjAyUZCQ6VHNMpBPiMCrgB6CApyYndbiTA6QX37n6fHXHBguAdWjbaTxE3SE9JZCH6Jnx5DrWfEWUNn",
  "key9": "5U2Fjf4efQb6zbKez3RSVxdGh3nUvvanns7BYtVnVEYPMfPDSC9UP1ng8yghcKpWqHXLYhq9BXp9AxSyjsef75Zx",
  "key10": "8573nwfqx6y11ooGdnbVd7QtE7W8yLHUwkUHeHmMJ6PETsHVxXKDX3a5tnvXDvLjiBgitEGowFJYigBEWq7b95M",
  "key11": "2nQkujqz5GVpbHCYFVTQx3LQ4WezK3VVFQusotaLVTrfznm5bPUkMjHhnfkcpVvHdUKMhV1KfvkmXMEmgV1uX3Yz",
  "key12": "5iYuULGDiqSpxHJp66SV9CsCyGXRJNLzMeDf3B1H4LXmVLNRNu4FBcdfR1gae9rKPkzdGhTtA2YUfCbUqnR9rHrk",
  "key13": "4vhTcae7xKzMk3F7fzpifEZMLuND258AzWR27d49FdZvgS5rh11ZWtJScQsJNov2BuW9H8uuRSS2q26RegqUvzNE",
  "key14": "4XKHPNZ8zpoX1x1cpoGb3Cc8qbyGXVoCBMr9beog9umKzSTLAkujPTHkZBE5bMfkk84Gs9ZUSKbjfiht9u9RB2jR",
  "key15": "3HyN5GCyZoTvMnjKsMCUQ3qmhCF11Lq941CEfxhuAUUU2NaewDdsL7LfvQBk3BvcKuFeUPu1ahJTHHfBgPTz5BTF",
  "key16": "5TnvqbYgLX5TXCURBGeJVHnK4WrdML4DGze8kDxbFwNX9LfNoTLto83THUy49EiikqG9VmbiYoZeJv3vsEPEPYzV",
  "key17": "47y8kpAAQaXUq9qWQRe3LikULGMwMw4rbfEwrUH7493zLJSnHMujQyGkA5NurnumSLcRr7btzZ2Wemet1pD2a3ea",
  "key18": "64vEVRoSpoRAtxB8hvUGwenhAh4M7FiB1QkfSuGeC4Cy7QHYLuu8myoFjhj6y51a3CVzbi97yU7KTzCxzytiXbiA",
  "key19": "25XQRbifurHGtZcCypA6PMiuN7BceGPe9RbQZY9oPndbL6dKwjxbvTV7ShavfUC8Y1PFEf9aHo2ZY6CCaEruZKhd",
  "key20": "4yNRwTrijbh4u5Mp4tov13Ex9ZAgwH4SN2kNLW6AozygqHTEfsE2VagQHav2unQSepoBmc2p4CznXvrGn8V9NAbG",
  "key21": "53bo1Mc2w9HjGJ56Qz79gxggA42wkwvrFTLWKuu9isgKZUuapowx7n6VStwtU2zRN9dKDMUnWP1wphtUc6a3VpsK",
  "key22": "3nu46TBEBJqyrXkQaatEfMzbvamTD11e8Tve4cYPSo3rbpWMcayrPKMXFxByjkpzgL79gqEbKuAoC14fKCLwoxAT",
  "key23": "3Qt3pdFvHxKEZscyMKv2foVWZY715V2s4zv3oNyXba1ANVX1SzwDSHrnXHNTwggGRh7DZbDMiC2xJAUeWHw2G3cY",
  "key24": "2jdhwfDKR8RKKMNU2TGZjrFoivaP8956tKiQGMz2epdhQEzYTNT7FUbpk1NPL3YmVPzQ7TyEZQc6tzoCPiNkK93i",
  "key25": "4j5ghLD4Z8xTktNHVr3GBoPZu8o74MDMtnmkQnf5PhXeCzR6UJd9hBo7mUCyiXC94NrZtZaXig51ovJrHnXNAgss",
  "key26": "2UxnvmUzD1pxN2MFMJtErPvA5k5gzek4m1vUa7Vsp8HLxEMwKdfb8eiRsTxTv4QX9uKN92WuvN5TZHUw5eGvWyCu",
  "key27": "4wEKUFxbVXPcrqk4sJ7VnYQwQUxEFZe2fRbj4L3ec44kJkZ56DDuq9kTNhw8KNsVHgCRGjcoPJ2HaZaGzpk8bX8g",
  "key28": "61QaKTrntfDgu51HhYC9Ms7fJiBtoT7bootFZSume1yLCaM5a5AtBFNCoRnHmPv5bqBK95rKxXjZ3Pi3s47ZnAZM",
  "key29": "XaBfQqMLSBYeCnPZSJot3LYGz9HWDTYSfzzTdpS3PRwiU65KThB98NjsxFKuivVTAcE2YYbhKTuawS4jTV4KV7X",
  "key30": "k2zYHY8g5jQ4TD7bhU7ZqCVJmfGXmsEEurEtftDirKojzq26Mhuv3nhnvTimUWcS66sittNDxQjfnQpeysNypmN"
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
