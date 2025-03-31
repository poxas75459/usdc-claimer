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
    "3SY2HkfAPDLsmgmZPCt1NB2rXwNWM5UJ64Cxs31HrKBivpinoXzeRjBpStVJ1UTc8dEcdBBZZBZqE8jobJGQq5dy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56SaTGvJRXU1AoZNppyxkk5ybso69DhsVjQkjBJkyRJJZptvvfh6ouLKBbECa4M5NcrrFx1sG8TudmDLhYLwDPCA",
  "key1": "3yHw5qCa7Nz48ZBLowCGgBfPgwXsi4mNvUsZtVi9u8PbdC22XWxeAeMAJGX4eKF3H3RrRQy1HkJ4m7G9VXnq2RH7",
  "key2": "521WyJGsfgyqCfUHFtPfikFoNx2RgocmkJuH1jZ1mqRuYpUn9h2oiDmTj4tdfYk4R1ifPsJZDxt8LndGK2Ur8bqr",
  "key3": "dYFsFmQNv4pji1MYYgcwRJgV3Cg245xemxDbEyVRiYWFnvKBU3zkdTkQuz19DBWwQnTnof549LsV2Z9DCMw9wnP",
  "key4": "33jYje6WLXWJHCecBGmNCuWHtGuZZBqrbhW3JYfXhNegqHiZGPTrCb58Zx4VMrcbfMZo2vAgZE5oGNqRjvV4S4hA",
  "key5": "4bCQnhkPTn6Dp96ggd3Pwd7kJbbSaK4UcxtJJp3LKe1eukPx7nrbcWBDP2VyAczYijFpT5zDJarAb6oq4wVpfpgW",
  "key6": "36A4hGMGKUzC6VD5FzJA9rPVMqozbwdTnQS7HK47rA8fq3CpKfDyz3Q66MSDX8dkShb3wQHeQWjUPzvUB91H7kTG",
  "key7": "54ao33mqZNBe9BXueSrwCnC1c8pX5mRsdu6PQToUAhdsxZ5x7S3FTh1pTXFqfejrjHiZEc7Bjq5B6HKh8nPukns2",
  "key8": "34Sd9a3rDHVr2pZMvmyqgF5Td48AvFjvR82YU5xQ4pobFdmjewYu4eFKTC7Gt1x75RapHACqz5VGT7xi3FzpKzpD",
  "key9": "aPVy8oebJidd7Htg3YErzqDSEMjrqA3NBuuxifuLk9nC4VCiUM1WMxgTzJ4T5D2iUiyb7BeYZJdnhYF42Hcoap9",
  "key10": "3nL6xX8maFMaM9RchBRJbuhwbkbgWKhjHTiytVAu5ZKrtHrzB1Dv5Rs1u3vbAnMsUdTadQpsRGgEwvrroFPprAKY",
  "key11": "3hWgBNdDRWMLBEmWwQepkW14t3TMvpuAe4Lcipx9Z4P2AQ5DQXoYYo2Mp1mGy4B1a1RicC6anuHdmgFJBUkp4FNQ",
  "key12": "3eoWiKBbDErnJmxFU5UC39BsKFapWwqpNeqWy2FgX6y62UiNUt4KPb1xcdPehUywevJxZ3XgUSAZ2hd4H3RiMp7h",
  "key13": "4X1ftc3AegvhZYsEv3kyK184FHAnhHRp6UepncqT2adrPoQv4tc2mMrJq3LubAQpvwKoKbFmcUJaaZojKDVY4au9",
  "key14": "5PGQkRnMWi4Q3pKHuL13boXLcAbihAPjVwoXz7pTD5NFE7G6gejmr89EQbjpo4FkjVkyxtdPkwd8F9JKiRTRqug",
  "key15": "5AGU7wXJgNWXBCwgEWjK4xrXi26y8trcPNvLpLXuCtknn3CdgKyoUGD739SBF1rHdz2Tuk4Y1mh7gMndMTYkqUDr",
  "key16": "6yfR43FgaxAeJ2uNtmEgkEoCPMrCUY8vsvE1bJ3f4zrCBTksxC8osVtVsWz7zF6tZuhQBvnkcBwYp8ZTKeYHMdd",
  "key17": "5LvadxwMMMbg9DjqcmSmEY5oHk5wgduNfqLXZzDxK1XU4JGZ8BxqQizLJriBKxvaHBVdj46LBwzEE2oFMXydtXrE",
  "key18": "2QpPg2QWxRE4DzPLV6HSkskcDAwYcKrwCVnea4Byd32PA1aZhoUWTG4Er4ShiCU91Mqzq3H7XeGk6QSPWS48X8F5",
  "key19": "5XzKVSq2HbjzXr7DZ8DrcTupTVhVnGGVyMpiN7DQa62NCYWyKk8AF893eQfH8nS4Hof6jxfapXiK4Cq9tWt85og7",
  "key20": "9GLmMwXF3hLZfANpAUGAuv9EtEnjqHrFQeP7sANxj7AUvdGzJCHqS3K3gMu6XmoEYQryaDA4pERnotWA3kGMQRm",
  "key21": "5rHcS2sXJbXdhNb7ngW1KkQcrM8vSKEwnm1pip6GYNHB6PoU7pP9oL73yhRqd9pBDaEJuavCYta7ehgAMEaJUAB1",
  "key22": "2SJpcwNdMYPvMTQssBLGzb5kkMubFeDhfbw2TPHsjxoM9hopJVDmwDsd3rCswgouszxWYvbggRL2x2hxGtWDZFWg",
  "key23": "3NEXnT1E1fjd8eqs6YNFLrxrNZaTj6uHeFpFVUNRRABUNiZRQNcNUYs71bXX9TqQSY2eojyF69tV5oNSGwR2eAqb",
  "key24": "3NUT3FC355eJYrdgTkKmMNmWDjGsQp7ZMm8sn5jKibwGLzebVcYSphRKXNZBuX6Dw13c6f1ioZq83P1fSpxfXKzd",
  "key25": "3B1RAksAU9RuaR9UnCupow3rbhDsfpodx5Zjine93G6vqECCsYchwR2prz7bpkZJtSLr3yS5wBziREM3D1WEGCC5",
  "key26": "4MEzqhrx1SfRJaDNesarSrTEWt22nn2ay3aYsz7tbp7VeFGMpiEkSAHCksBASTHF9qTM37Tzgrb9QKXo2EBW8RRb",
  "key27": "4F66kyT4Xq4oh8WKf61myCWoHeULgkx15oCuFLZJSktcLqGLUxnBodYJrkatHa4mQWrVjfJ9wnh4HTQeMZP4A9L",
  "key28": "2dfTSVHiU8Cfb4PCG5M3Rqux48S2bynPExVVVr2DedZrdhRBPyKyUn8tiP6ypwFKg3STiBFJnxkg2Mx2wMK2do3T",
  "key29": "4BCBzdp4EfVxLtgkfexPPKB2qCmD3qUnwLj9vqoDs5gx7yiSAe8hqPYgWpNCBsnsF3sKKb9VTKqWUsnGCww7ogHP",
  "key30": "4TB7Umv21pPDjwQt4aqy6a1Uat7FU2pTE4d8sboykpfW587d6Jnc7Ez1KoVky59UVJ4TGRJ2M7nqQwrdpoTR8NNc",
  "key31": "fDhE5KnXi2ZHLPMnudNiDZ39FbrDfTs6YBqT4AUxdJgS4pybqRWF349UjAw8SSbmgQZDwP6QaNTguvRdbrhDY7u",
  "key32": "2oDUhba8dTf7H5VgKGum2ddyNmr7B6ShF1thr4Runvidkn2TNEi8cXxvj461Ajm2UqAY9icpbFmc1og85PMVLhuf",
  "key33": "MNXJUKDLtEu6FGRESGBb3qQxkUMnL83jUTTYjZAjM3GSxNQBukagJjnYbKR1RbEpBZXvTY6cX2Wb4zCpxcA4CLw"
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
