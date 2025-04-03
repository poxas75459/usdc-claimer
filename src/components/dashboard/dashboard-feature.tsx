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
    "3JaWmqMDVzTbzpvqKJf7bWEx83MJ3z5GeXP2v4uzZXDH2vEaLwgGUYMWic86QdPcFDAgWRKu7aHdP8XnTUqEWyUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s4xjER5QooKSMfiBQ2CU86Hg5QKzhrJgdpVQAkLL6jnM4kyz6pMaQNsvCELMnmTQDrb7Ge2GKrBAjx814CReeTM",
  "key1": "3YHnXtpvVuHo7ksgbeYYwH28ej5VL9CZRXRKacF1JZnexostN4ALXe4dsR4DkVfaqiui2d6jGbzgGCYecGDWUFqX",
  "key2": "nDnSvFYjHrh9BLc58dDyx4TbmfZtzsyzMqazXfVeDmsmrgYU1Q4P8RToz98YbFW4nAs4BwgEwy2eDGq3Fis2san",
  "key3": "65hgdc4Zqwst9z8usr7mxhf1GdYu3CR6PeQ39ZuCDb6FfNeF9FfiUqFBRC8yf3eKda62HyyNgV24ftFfr4Pv71kX",
  "key4": "2KZ1drYgm3d2LXwT5r2NeYoUaAfACKvWmY8pV24SzsWmJPq1W2TYm2uAZDLx8zFBQeJyiPG7FjyuHAUCYKcGD6CB",
  "key5": "4c3Zu8twYfJXrvbAGGL8cM2bcNMhoTvf8A2cLENSPWBhFz9p5X9LPBP1CameAsyGV2bssyFXhC7fFQhQadZetPGJ",
  "key6": "7ghANEDLpraLApStz1sEdHBVtLXRSTwPyJuaAf95Fw3wv54QwhH1ityvFz4miTQGSWwmjMjkdGAWEsMLccJNSr2",
  "key7": "42AuLvujUZTQzPAmJD8sAHU3FiPESBrrf5x9c4urj2rAyiWWCnZ2UJtoigXkiRmM4qrB6k9c6RYSnbccZHjskoKG",
  "key8": "3DUYYdeYFfeCGDqtSJWkn5o7K71ms1mcY75W9sJZboW6aUgsGs1X7v8Nq2A3qSq7RpUwWALRrgjQcCrErBF5Shm3",
  "key9": "3JSRpvsgfWwEkeEXWeyNPd97cazG51WDheYpMcUQ8NESZCP8cGw7vcLBqbEMwGYMMhPF8Ldktj6MWLi6kjxWCx8b",
  "key10": "65XRvD35urk9cPHEyebd94MYgKLiUpqRkLzps4QiNJs7VfQd441g4UwgPApHvxgn84YHZp8q6YNYcoCTVk7vopcY",
  "key11": "42B9W9wuLi35Tn3i7gH8s6c3Dt4xx1vrwmEqPdg3ktjHFJuzdyX9EkkXcVnqSb6vgeb8M89bC73p5dQ6Ec43QN7Q",
  "key12": "4xFqX9VnQ2AdGnJ4fvvqwyCqmYvWfqY1aR1Wp1jPHMSXWzPK61Lta76yse9sTSwFKgKKJXvzCQD88ZetBV22oYCs",
  "key13": "3JHRb2QNnPQDZPwreuSmnqjFJihhgYWQSuHGgud3byVCYD6EpEMH6YtYoMprLqbshyC8E8bgLpPzzcyFgewDFzmT",
  "key14": "iFNuVrXaZCrQ2dG8AygVHrF9Gfv1rBKCLAiKSM4NiagMgKyLCuDqbXRQ6cTrtQNKCWjv6Y4vNh4Etr3uPzzFdnz",
  "key15": "52rZuFhrwysKQqXpzEs5Gk5cutfrwVJQ1XTEnBZvFkLH6GaA1JtBwMQVAnoYHWDK2AEYtbhcRy1xw1s3Lsz2YLp4",
  "key16": "2AeXzF6HcMnqxkt41eCxhgcKct7sfq4ZRwNvZyxQA7vkZ3N4TgZsBve2QoorWY7YfuUXYNC5gZ89XhWVcuiVzvcZ",
  "key17": "nH8wpeKsmxavLbL4aGDoGEot5qeK8ncbdWj1xEubK4Lcp3keTEqRAXnDmWnCoAAsGBcC4JMXHFBZURCUcE4PE9J",
  "key18": "2oQFMajG5rWkU3SJ1yEjaYhZY37uLQQM4SMBs3rm31Ywugq8gatVPCr4Baz93mLJixFPvf6ki9yQGPZBZwd6iPs2",
  "key19": "4rN8i2mXH8KFswkeGGfTY81H3TH7QrhxxLrcxNPW72vZ41TB81xZwf26YDAq4a5gKFjnSBcVWFp7JqXVLR5H1agY",
  "key20": "3wjFz8dKX1yYPRCkD6k3oJRLtFEDesy3zbmVzoR2togSa4hxDzMp16ZhKKdwDxVtHD5uf9jk8g5KBxDWNSyGviw2",
  "key21": "4y8xfiQUQw7TLVGmp2yLohAkQYiHzuTG7gUD9BzHWko7xyKF988HwcvYESd4MrABwzfByp2vATerUD74HFwnySBK",
  "key22": "2gwk3m3UR9Uop6RuySLSEk7b18zvNQUVpC4ATPS6nrJfy6M2kwo5APhDudFfrTG4nvx4RTwMifrfRQx8QMN19mPo",
  "key23": "3fwduwFhXx1CBBqdhbg7zg58B54SiLZQgfrPysjvPDT23FDNquYLqVHNidExK5ykdwy5ZpVDBrvNgjLxRnfKEAXC",
  "key24": "yD7q3dUHup2dvsyrKm9Rg4RZ6tVQpz4hZJNT8TooU9A9LPpQNt9DRjurutkZsWNbTHGKKKWR6pVpwSx6YLD96se",
  "key25": "UEaZJkijYxVEYGZ8ERmdmHeRi7qZaGVC9d3Yx9ZcHYP4Kcg994zZsFbFZe29XQ7KdGnU761LaV3ThnHtc1N3TD7",
  "key26": "2cFczCxWVetZiVbuHc8SNMskxXcbChwRdHbj6voRzgARL4XJ7WdVpGX5HNDbmxX5k54TxmLrrc9G4hftnihguhwj",
  "key27": "4SRWRWEh55YbcjFZvLSEmxyaNn7BkduvAaY93KRVxy5ubh7Gj7GAGiGXHJyi8RhAFtah3Pme5JAWpomtbjxg75KU",
  "key28": "TTd2PCf7vj96km1Bu2LM6bCHakDQJbe9AsCqCMRt4yvwMJRwPX4sR8GbuUyfiRv41jDcfZqtQeMhKuQ8f9fGoiK",
  "key29": "4zQWwvLREhFM8d6o7CtEad3jA2fV96LdRaeAS39kVcbzmniMk95Qk9aZPL3HPmpBKhRhoDT41E4okCfcKNfdo8WK",
  "key30": "2Jo7hrNxfhzqygQzy9a6aWS67takE6zwEC7w1CZuk1FpFCtRBP8NAWruQ9B9LXyazsXrGW2h7RL9yq37iwcxTpzM"
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
