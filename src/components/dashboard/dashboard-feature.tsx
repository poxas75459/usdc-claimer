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
    "4aSMrVdRauufJZsTyvLCRQR1ew1YVA3eXdz6EbPrUnE5dGpzjZaYpgrG71wjSTiDuEZWwTUuBEE7kQyUu1eZSZww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CXDCRixcb4vToW5n5juCabZxdBHwK7hDsn4V1UoX4pgBpCC5qfNZ7VyByMnRDe5D3QmaQsqJuYh98ozLWz4Lo2M",
  "key1": "3biCoNNvNP2nioXheNziA7QigX6pdhMiZha2qfWnnSNuPzkU9HumDYN1gUNKPtXB4rAYkEyQtRAWyEQYSpyUQw1N",
  "key2": "55LjbpRS1YqHy7uhgUL3TzcYEPG8nPigSBjGLbLU4dftDaB8j3DfrNLxtF9te1dCHmMetcL718NNqpwEHWk26o6h",
  "key3": "33oNaYbx8r3jdirAd1nbpygFg8vnVgzqnmkex94HoMCv8Lr6ZdyLTzZomDf4NVvATJtLzN4bUWEoSxDR1SSc7WQ9",
  "key4": "oqYrFSASgbrTf3qMPMR7UX9xMcbvg82VX6i2hWyjsaKvwPv1Pdixox7kHawAGXzGDiWrf5AoZcXgYFdKizVnseC",
  "key5": "3Uz33yJmUfACEfd7gYx5dVkUdTQFshTq1XukdYVobYSUZrLdSmrU5Wpk5JjTi1DCZBkZoeScT1xponcP5Suxbuxf",
  "key6": "5vbWtsQPeq1UaStfXa4iz1F2F69eXVBNu8Xh5PyNdzxMx2S9pMSY1mWYn3iPmrPBBQ7JLNt7oQJUZBSk3wYuKWJn",
  "key7": "4T5tAhXLugF8FonwAJqgci92XDbSzp7L1s2KSQjYPMJR5k4Dr3BTaCmtfysDZYbtmzDhVTsUM7Ub27p3D2GCBCtR",
  "key8": "17syhooLGtpU9DusC79coVCwGNJXkHb3XUyNRCZ4s8Zzj292nkxJkhmMU4whnBotC7D6BKNP1fKNiePJpcYceZS",
  "key9": "2gj8mtjcGrBC7jSiVq7MrbwkceTZvSSKYokYU6Wz7ppQayD5rawFNHDAxAMfa4L2ZyPZg8GTqdkSao18EVFvYuHB",
  "key10": "23Urjjb3av29w3td6fCjJtCypFYHD825rdx5cso4kF5cBhASYfDLRFbeyFNizgMDARVEVX33BBS33r6LsUNU1E3T",
  "key11": "4jK3htKBsURy24yApQzC8H2TWqQKYCNKSBNjjZcpMnCs484p7KMBhSvNH1Pj8nxd9uxTrh589aAD3Z2HLEeNa4x1",
  "key12": "5k3iwLSkdQdWJKP7WG5dPb2k42UF882qP7d16BMXUhCNxgsQVAshFmmM6Cc6LZTW5xfBtw9NfxycnMnHuB2b2Hcn",
  "key13": "2V9LHT7VcpKMzBZp3LbqQNsCvAUArUMUFSyGVmocb8YgvBNAGxrsUkv4mW1V5L889FgKWsvT2Fm145gDGdtNGeoF",
  "key14": "3B225gg8MCtXu7rjCTCZvzV1c5zNz7TAwzpSwpnuJmgpTukTWyamc3p7XkXu7E4pVy5jnQJqX9y3TAR7dQj6gVRA",
  "key15": "CfCfsAnrZYmD5fxkFtdnbkFCBBzktvqKxQkehb9igvAEjk8nG8NUhuCUkUGeNKwn8sBzrY7WjLrA3kCpEaRa6vD",
  "key16": "5bGbt7NvuBh8hkvPJcLgbdwUBx7xaWWt8mq5KQwHEb3WhMjoMm6v3xse9DHTJXv6eDLEenyjriR4dV5sQbwn9VUY",
  "key17": "5944c32SMFJ95mDanvwzKBmEk1MFZioyyoqUPWaUi7rnVJjFU1j9jaCUkknC3E4wkTnG6cdddumMEU3JFwDWpdLC",
  "key18": "5mLQUPhwjsk68y15xzNN9brSgDpfn9eEBxEfpzd7BTLydZcymFU4CDpwx6xgnWwKgk9kWirgoJ5CiHhpPRoLg8Xx",
  "key19": "5P3AehWYAKhhn4gDpdyiVRXBFyacxv84ZaRDXmhinhmRaMuFmhtHh3Ti5cHkWKCd2zM7AG5rgRKYjHTa8pMU5W3P",
  "key20": "2SajDKPyWa4bw8GFohDT5E72sGFdcZQybZqpeRoK4W37WRRN9Xbb2ciX6SbbrntEGqN38AQTEZEj66oPZnKykGSs",
  "key21": "5Uw6J7pe7qxPfZGsWBckYMfcxHePzrAFMJp7hPJwU6EYiZVmRHX7HnugYXLbYs5qiX4uUXgU5pQp2JPsEgj5BHi7",
  "key22": "Ybet48aGTqh4jWyHHmmtxkngond9EevjsLTwEYrXF7BzaMpHnLvrUxNUd9xK3qrhhu4gHhxHZDSNyTD1pFo7fFJ",
  "key23": "5oZAr6qG767ngS8NWJhZENMiSAEW8Xp7nunMUEXUTxfzjaRis3zrohFAd18N4fCcbnnKhuDVpMLBZAfAs44Ryu2n",
  "key24": "6AGN9iVng2S7qMCv1nqBP9xDT1DYKX1df3xcaAeqcMJj5crZudkR4cncx7RmZMM6JjJi5goy898rk7N3U3WARh4",
  "key25": "2Ex2VKKUuw26HqWEANkXkHQYMquGuRnbTkMzAvhBhfL2136DAXomZE3oAtmUwDuBCBZzWVLHTG9oTTD5toHzVWrz",
  "key26": "2VBQmNuEYCs8zA6PeHCMeLisaELzNb5yseLKgXsd4P1XDENa4pJQsWzsbqi5K7waKCXD74xRgyM7nGxQ2JcsevWa",
  "key27": "2zNs2PKQHzoBUWbDScUBqQp8Rw1LFLadFxNw234Ase2VRcXFvN7z3bixYm5tUWKavAVh7BxUYAaNx8VgLJdjKthw",
  "key28": "XSaTqq4adXq6DArZ2wwroLM4D2JiuEtes9p5TTFRHe2pe3QhVaHdT5dQZeAZPnd6BR1pxiBA2UCaU8xGUgDdeAZ",
  "key29": "5dc8z9naUHCbNFH2a13ZGHCHKzEQdcfGx4tiL8ozKkamAyz8UonYZzAZgNwjWs1EEtSodFU6y1s4LMwTyvUvAzdR",
  "key30": "37weGcvDrhj5neX5K5ABCc4gG5rpysdJgg61M1w5kHiFYSf5EAq8TqABAzfw9Wo6KSFW4xdTmeWFxaNbzKUdnZE7",
  "key31": "2h1rHumBLwrKMroUFJ6NkKy9ip7TD6KSqyjCHmGwcfxnv62R1Mwnwi5kGu58PnNQdPkFTYhhPi7Yi9t3XJMEdo8C",
  "key32": "4Lo9vhy1TZFYvgU4wxjkwwtJvMHHpQ6TBnVGrEe6Q8V846PUT1s9n1TLZzxmUadjSgnU8S8TfCaD6nRyCQ9zUthP"
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
