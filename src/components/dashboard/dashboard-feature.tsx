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
    "24hv3ypoh4VnsJx2V5yrVTEmDsb7v8tyjar31XDPb2PXP2cwrYSd4afkTU68akba1CCsB249hhwYCMM7N2rgcGmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ze4zsrd9Nw3yq7fuBnmYUPXf8h6kpKDrvm5q5KnY6GAvgUtLHQFZfLPUsduggcxBCi1EMUcVzwLd3EDFsMAbRtS",
  "key1": "3xNWe55DHWLi6ZPCbpfCETGAyzk8jtNQg7CnBKTYBLoSMhKachL9T1Z2avuE1WitPNxxK1mL8eHHLjCisDgxLcY6",
  "key2": "4iJwpsfCtJBzZ8YyxzoVDKD9X7TCasiD3Hf4mP96drt1wWp3RPVvPQHQoHdgeD5iytcdbr9sg5YUU8XaQ5e9rM35",
  "key3": "5TrbcokZ6DqRx7Zxkgw45w7GvnTKz6kSHS7MK667UcuUoJ6PEWAWDf1GQakwecuzt296Vnca4nS4TzJ6ZPRuAPRS",
  "key4": "j1wUQLD8Dp8a3nuGh9CXsVFdy4CpEudkXE2oMvSfYFVmqcRSSTVgJyjw6gCTCmkcsrGo8mvXdSupbyb8P4WuYC8",
  "key5": "32qNwwvoKNsevv3z7C28fm8ZDAsHn73RB73mxCUQ2XPMRdb3QheZMjMntHR2FrCyFhRUjVH2QMaGkFajaokhKYut",
  "key6": "2USVXvVYuNefiTQCQh334MQPcSMbYu2FRWBdy5phBtoAEhmjjDmgZWGnhyJkQFkzTap1LktBGbiCYmuxNXWQjwSr",
  "key7": "5vhgxHyLBB6fzhsRmMbvaoDL92gspx2Hc6dXipf9SkihGBdHNC7gCNxJfN3XK64p5bfPAZAgGqo59rYeVnxB7wLo",
  "key8": "w2ijmTCfxURs4AHFV2L1SrXv4HGWH4H4HpSiw3PqeDej5WDRPkyWi6NHp8Ue5e2Wi41FCVqsShLfeqVJB7y7njD",
  "key9": "HwSBP5xSpaZPS8LzzfU5ZwAeWg2nDeyhccgnGAtWmJUH581MnaqcaZSpR1YBc3WGnhZuAkoHwvAWaMtEs9XLPkp",
  "key10": "3ChaNGmNwWYkhKE5Wqq17ewNxfJcrQdGCL15yuUAzU9eJRfKDqAz1gZB7zqZVjHbQCRhB8Lw64qx3Mzmzf2PzqY3",
  "key11": "3awKdKcR8Vyuxkj82XAhC4Chbit6KGsQkEf2xN94zunkRsDxVk182rUutPK7ZzqMupTZvHrmpQHb2ss67depdZC3",
  "key12": "5dRF3wsNR9bs1Ui5NhhyN8WmwZZwVWXqvkqPf7diCD9iUUJxWyisj1Gcjb7deWc9TKm46qxhg3yUDwtQrGVgzv64",
  "key13": "5x576hMcSxBXmHcUPWe64c3pYnKXaq7QQPyBs1ayFaFQ56EG55BD6d4keXpqADU3sTgpm44BoRSDDbpEfA36Vuvk",
  "key14": "hpFsion9JiwUXHgZPmWWQ3uUV6aF5m2dxjrxSMhS5p9jCK9xdepn7oMg7r4TjAyfBbGpbz4jnhrjB1zYgAtvkTf",
  "key15": "65hJrEfPXXY8uPt3MjcMfx2JGq7zPb6GNyQtsvYFiJDrqETBR4fFpkCWNAcsemK2hs7uL1MvvKFKrqfwBrf5RsSy",
  "key16": "nonEL8EjR6KbxUMbbeJ4qhphFxJXaVUVpxTaETUsakLb7sau1X5SsJqat6hb25ZxF4z13oobKvHh1LvLsXakzY6",
  "key17": "2HsSZZbRzTgkzsMWyvqMAzUFyJpupCc9uuEQhpNpgpLTPjjBkpkrASH7MutH4aguJt7ADAM9CwTMeMy6pUL5J45N",
  "key18": "Xf3xngN5eFrbLg4LQGyTCFqSpnc5EPuZSHZNSrq2pKhMQVF3KtH81eTfbGvmrF1MbECEado7HoacqtesciNqg2a",
  "key19": "2hAA11dvLCwhfS7ZBYjqkJgF8ZG2A7A1uh4s9uikcjTDobJbVeRAdq8yFdCvniaXGp6BsCNEWngDKqiibchzaoDJ",
  "key20": "3EJzssyqBZ8ZToQ1vWqfh5vEWK5ipc9c6pKK1vuXaeqL7usp4hsuy5G1jVKFxUTp35cqh3ZuDZzVSB35Xw7Zq7Vg",
  "key21": "487iyi6TkE4WVgkxAW4HDhHCqeGqPLQHAkd5AqH333bxtreCQ5SgSfiLUEqbEcnarfuUcouXn9RU6Vsh5wuL1yGU",
  "key22": "47DfxKNG6KZsexQmvN1dRtXaf4HC9yr4w1rW8CNqbaxyAmv3Dih8mf4P2FmZXgEYZps4NG4NQ8RNwS8onx9J4Hrw",
  "key23": "2oB122WBQzxHoeFkGKHp35MLe9X7puFVxLtZ1gWhxp32cSPp5VoJtqqzETmdNpE2oreJ8XicVGFfofbUXT5J1vQJ",
  "key24": "5iV9frDAorbF4GnUgGKsTKWfru7VTLZ4waZ2UNJVQM3AJdCDgxcCWe4Pn7fULsu6CzC52e7jp1N8CWHhTqPz44xA",
  "key25": "3oExPdCriHiSKF7vCyGiYmeEjMxqVLkzXNTKtJfd7BcqBekfKF374HwFpM4EWrCa2Wpfg7hcn4BCsYyrx2HYEAR7",
  "key26": "55TodqrB3wWPNHqjp9ZTQfpq1YtCV6mBbr8m1f4iv3uNThzXzYZRK2NavHD9sKy8V6VwydhBaFw4MjMXYY6WPTG2",
  "key27": "iHoX7viHMzWM5ot1roWW87UgGLcyt2X9Ays35vByNM2FisNkSxkQJAhZ85Leokn9xGkyYoJVWDfTKdCdEeUydMA",
  "key28": "srCY3TojTpqKk81N3pUa3iV6ZToDM5tize3FmFmcfVvWPt6x6tp5XBxfXWErQyfKHBqGKSFvivCYYgzKD4JjHUD",
  "key29": "2VFDKXdxxM5jhAN7H9VG3yxAfW8nhq1YmowSmXsz2rYuWjXv1LQszwjjXTiRV3e9gGGs2yxvNW4NeEczt9QN8NdT",
  "key30": "2qBtfdGXAi2s63AxEodtws9rVpekuvH7acQEDbsASa8JhkNHjksw17vZfeSYcrhT3a6TNCh7BLWubEpSVza4uSbP",
  "key31": "4kPgMkZRt3SUzKNVnk8FoNZN5QRpcs99vNwx8EqsDgd1YSjuR534LvMUrSRYNxTDaaocLd4CnAjS2LQtqWpBekQu",
  "key32": "g4tLBvLsG8GksEG8W776fZrmEFA32EkBAoJz3UxBCPgJSMvFiqfmYbAymLdtWFrNrHSGECRJa933fDNKnXNcb8h",
  "key33": "4neLEHcBvgvVZBoLCvfqWrp5YxyS756FLUTGbnc7du2muGKY2j5gB6tEwb7yvRX8wQtupyXa1Xqs3Y13DDyinQXN",
  "key34": "4mg1uHrb87cq3ia9BnVDF79hgK78NU5GMfsTr6HfjCN7tZyYkpi56jG4ug2zAcS6u52xq9nDiatc49Fy53hfuZ75",
  "key35": "44HRzi7f6jMJL5rUb2j3BK9Lbeo2cEzNM32ddB6Nh5fhThoLhxZV5t1BuSMnAqe8fyS7Y3q1tsNxz3o4sq8F6A87",
  "key36": "4yQJbxKmCJysiYNgrWUMzZHGm3tsFNnY5fJ5atewAYFyC7zUPGeuBzEvcrR68iyCLsTWqD3u7RzwydtZGuNu5SGU"
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
