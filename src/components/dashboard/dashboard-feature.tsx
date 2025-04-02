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
    "4bLWBnjXPzAkNHTsVLiGaBZAoQV5PZL2grWn9dVWvk6Smd7wuU8ZpXzRQhdh2dg7TcE4jW8pLY8tNCjd5J7w8Sj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36L9CY6KQix6DhFdvqmBap6UaewShfYQVrYEXZoDLt6doVt3KHDfW7ds634XUBSGudPDtM8RBvfLj8svKFhBkJNm",
  "key1": "51tknekzWhSeZQYUBHgoL1jkWm21iGbWTeEzWTWhvyZzQ3ce6CQXTWsbUJF9MX1qqgVwALrZV28xoSUdpt3sRzK4",
  "key2": "2U8hyaTREWSKo9H6XCtygM62ZqkxyyZQ1Riu3voRf1t8u9QhoGosqtYJBYZyaUPACtDmGQ2xuBixoxkDWzaowBib",
  "key3": "4wYbxuLQ4Hg7JXzpQhGfKv46UFQCF1D1vqyE7YyzYdqNJd6sHCmFXZMvSCSASrrMhwZ33xyDFyG5JYHHKXy8tK3y",
  "key4": "5bMVvm4ErYxW5ft1nZzpnrqgXJs3YNWBpAQwJnkFu7QfgK5YZeDxyz8xKTbAqPyvSbc3m3738c5x5RdBriAdvyng",
  "key5": "4NhW9Q6qDrfvdH23549wfjHGEcsVfWFy7SSUNrTuNpm6LDLTFg9AvuPeaQtbzxamE67zDQysMBzjYGSn2cMcXsXk",
  "key6": "3eWQ1fdxwjpTsy5E9yk2vezs321WTHQHMakYiKkLrZ9EPbKVLb2ZZurbpYJyTCdjh2pN6vCg5HP12dk9vwitCmaP",
  "key7": "2C1XqZPGYJEuudU4VK1gxKAzMwYTHTHxMJNxq5wTiJL8HZka3AkM24LjbTbG3tj9k1ta9Bg93ZRjccdVjx5fDdqe",
  "key8": "3ZDH97gV96xsyt93ZXqxqUcMDecvxv4PVa4M6xgGwaLvfNQ2i3FwUbEycHmLqHtSh6XV58A4PbSPrt4DgFofUd39",
  "key9": "61P7nFfcBs9etp9RV2yGAbgrecGQBru6QJ9z4FcCXQzJCwR3Yb4w8Ws9eftgee6evGJpcuxwUwDb8nW64hMPiLjU",
  "key10": "ESacVzRDzRkdRNLyF81z9boe3Bwnku5PDNhHdFgmkkuCBXhCTxDEH3K3KBZLwG8KbHgEVmeV6JgdqKKrhQJBpAi",
  "key11": "5sDUiDbg9WvK11cNiYkjfNKR2CyvC3vc88Kf5UZM7uoCRcA5VYMvsJeUeiZBhFdUAUNsYwbvDNQ4cPDQG8LNUm4t",
  "key12": "mpj1ETXXczpyv1kYQw7S34hienEDMJfTxdX27dC8xnepmv42KjRtLZRXQxbywp1DfEcujFnbM59GEMkB3a2N3aP",
  "key13": "5C9LrXUuJACsuRgNE4qCdiZC5ygExHrRNSB1NXE4mAwz6e8LR8Zycuh7SHjX1f9rCbUazSofNotQFGAWgozmgdhS",
  "key14": "669vCN4KtSR5rUvdg2cvuifby3zFEY361fJyUzA7yHtC1VTr3TrjGXFUMgeZsNxjb7Ssy6GTnAGwf4qiMawXwGrw",
  "key15": "2UzwMbnfLpLZ39SnY89vjJNP9JGmrJGb4cTxAQcqwGCtorBxw8Hv5f6xwt9KACcKwGHUUY5bsEXqPEdmkgxnhQFF",
  "key16": "2c78q7M4rfZu8ExKfoMUFzsYNvNgnnkzCriN4DVkoR79n9ESLcPKmz9aynj7guk18uYdfbKeL53L7GfmhaenJ27a",
  "key17": "5UHhodv8Ps77XmKrHKc7coQEFvdHURyMCHe1CabqYgmSu2unodA1pRfNPPh29VHHeZr12xG2PqibceQG2uPYeGih",
  "key18": "oabkY9SYsPwLnYJRNbSFcvewd1jDzH65QHqxhSa72AG7suB1bZSTgppnakj5WtRLwsEwcxzz1W3rFDMQJsvDNSq",
  "key19": "4274UCv8ptyuRWTGwiKkumJ88rhzC3LVbKsyoTv5S7VXfHCTGY48PeWYoiM3aZDB8CcJ1oCWexbqQZ7h8sp9q5Ws",
  "key20": "2T42F324zv23banQfyXYj7byGACEdUMQw1apAJwzYnUtc4PwWjttkK7a35wVP3rppGwEX4bvsroRyj3YJa6gUS55",
  "key21": "2esEcqXPHoEXAh4u6qqqoVgSiNMLBnjsbUiaedy8h3urbAxwj1HcDuxy1EP9x7ZGFTKHe5TtuKJrcmJushiR2o5t",
  "key22": "5qJ2C5HeQZgT7ZBAD5Q37m5P6FRi3zwr44ovfVgM2vMkK2J7HztUTxRxYAtk5LtRJDgNfuB8Wojert3QUjnoE5LC",
  "key23": "435bPzjV1B18LkJ3gfLwWjM3DQpm81AiHaKP8CP8qVUo6sFUpsu5TZmG3F61RUt2BN25kM1Q4TzYLSyf7R8tMrbA",
  "key24": "3oQkHorj8wqHtik8LFHQ9bQM42kx1zhUy2v193WBAntSePSJRcAKWKpJh1BJQ9QP46MiSMTFXDdZq4fQo1q1DCiK",
  "key25": "3hij28vFzdg6YVhsa62Z2Ucou1iUusymA1BBczMdQfqXAF8bJULP84G62CBw8GtpQxmsu9rKp3bje7DwgT4ZctXU",
  "key26": "5kwq3mPb26nPVjv5PkpDnsw11FnJugoJ4ALMtJbbuDqRZCpU72ss1D3meQLrkhueEmDLkqcCH3Y2qf3bmzjQYNAp",
  "key27": "y42k3JSdHXyipKoUh59vuRSciCKK77ck8paSTi6QjWz5xS5A6EQGk3VPwJyDcpW6qCEcPAstgZGs5U6b2fmeNnP"
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
