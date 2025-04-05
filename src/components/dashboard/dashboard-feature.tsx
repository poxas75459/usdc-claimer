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
    "43v9Vq5J6XUdZFo7fZk1aD5AAKehNCivcytJbGW9WYs4iz7ykuKtDN9GpwZEqihS8UH9sNMWb7zVSPZp1phmyEGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HxsYsfU41jvgMSNKM8u3mBpjEz5mb9Gr7isBXQScCF5M9p9SDj7c5WnkUcxfKCRNcFaYKgWohbbNyGXe3VriNAe",
  "key1": "4CFyZyW2axVtJNdqqLeRX2oeEwv6uihWqJpdmh1auPdgxrz72EFqHpotPpcZXLXFirSppLytU38AgJmHZrwTCbgh",
  "key2": "53pdhW6zhRNQmcwJgqgmsABwmNDxYKjfVys4ovms9rBYBbQJR8GqHYMnTFgbRqN53r29m1g2RmFh9pJefg8BnGQN",
  "key3": "35TTMLb4Ydj8Z7YmBmwcmZPRZzVKmtFU51mMXG92JvYuGtyeNMtR4x4eFJv2VRB3fSWS8bFSg9GxDWcVcQ3CQeaB",
  "key4": "47R718UUUsQyhx9HM1GAgjbGiNsb9jo2hP4asS6RbUXmFEBSevtfJzotzmspjjS2VcRaYzYeQuVhLYEoU2AEn3Kf",
  "key5": "6LYTH3ZBeYAsuEvGvgeGUisjtJUhqwmapsV5XLDf8hxFxHKRY2V67CzycsCmtUSUMmZQXSCqs7cYzR1Re3d34v9",
  "key6": "87rfWQok9ngCEossPbo8tSonfdMJrXEqh39DwcagG62AuVRVtbupNU5rDL9s64W2a3LZ7HPj93ZR3AVZymXZn12",
  "key7": "3BvTp4iAPeH2pxxkNHDctA7ieMu7UCypW6MAVSrVfJS4bw2PSguTZTUtP1CQ6XahH3fgjUWNQLgUPd3AYRxgkSni",
  "key8": "4ZRTwAbdS9e8zrcYHUutGWDzuxu1pfFdA8anx1W3gZQ3JD44NTTrEfRLcY2EYPYDDGhXzPpugykTPhTgz4c3VB2v",
  "key9": "4i9bKimmbg1bzJyPETfQcX7AWuZkERm86iC3RXHSjNJ3p4XeN5V7F776YjNrc3E8K3aGGXDn1Q2AgqkfW1vT5xXT",
  "key10": "5eLt1YSte9EVBAq9faMz9uSTK3KF8yqukdgpphhDQqFCqQjmMoazs1DCwguSTp1SZyQn9SpWXYWEy7dDDw89GkpX",
  "key11": "4S1nVmB1t7ohcEfC7Nzo66URzFy7VVakrnCQaN6gfzRbVwGEkv1K2eqswhgspfVU7gUZse3h6w1ZYJ47J2LUPFEH",
  "key12": "S8dHvEv3gRH8gBNSF8HmoLHNA9EKPmw8iujifSUJUiMbGGSjnMjT2mPDGvdy2S7UxDhC6BGEsgppdExp8DSLygq",
  "key13": "4jnfv4F4S1cXnRV9FYWbC6zuh9DuueoPeTFVQ8uuYVUYLg87RRkFhk7EfJB6wbKs5JLJPVsMkFKkTaPdkrv92jD5",
  "key14": "5gXvAkd6pRCFdLep3hGD4qnMafdU39RBXL1NZQ6rQWH238gqvnLTPYYA4pMQm7BsEremzArrRQxD5FNBNQi5ro3Q",
  "key15": "5kVCPmBnSyRbe2WEopSFfMQPaXaLyzm58HxHnptEKcDxnzhUrC4wsXfvcjg9GBNVscRbWWk2L3ZozAnupXDj2jQW",
  "key16": "5LDKzivVkADXEfxwLpdbfaT9CJmeTCe9XCpYbPQbXijwws4pZY7FL67YotGgUhJE6cGNLrHKQovMJeXrHr6AzDhz",
  "key17": "NrgyG8cdsBre1dvj3w2rd6PAyR6HjT4SPeZrcjAqHk3vK6udeNqk7HXSK52E1nnorFdgwZjC9KJMXJNBPdDnF7X",
  "key18": "5hpJGAoy7sMeg1bVgrpCCPsjwYw63oQZboUiwLB4U2LKtKAJmKVz8xwm2hTyzpjJLm9szoxybsJdUJe5auLw1LoY",
  "key19": "35iHjTDAPRP5FD9TaKgUhL2f6nxpQHp1LhEHvyGms1ZsHwZBtULirY1XsuBmTDuCh9dzvkJ4ueKJ63Loye8bKCKY",
  "key20": "36iWux4FpZWctus986kPQb4VWAbmr8yYTTkZsscuu3NzKKmNJuqA86ex1VtjShXFjtMfD9xWzHuULQzyJepKTZa1",
  "key21": "5hbXtSjJ3uBDnd4BxfXKuTqSHcyeg7Mwtte86RgXZ5oEkSz63VZvPc9MrrekW7aLP148uQYNmWBSAn65U3i28hZJ",
  "key22": "4kjW3tuHh7V18316Z15NG6ZimHdvdEX9rzojFMUq6ZiGH649mJr1T4Ci1hc25A9RkAiCGHYsLgG77aZjTEuMGwbd",
  "key23": "28y3BvDGPH3kDzEBghtmNpXMEAXQinAsVo6a3eRp1KTGaHDfUPzBQC3Kpg4Qq29gZ9JJ2Q5bm3htUa18X2TCQFVb",
  "key24": "5Pc8GDGKF8R83UsjURb3VfouJ7K2EMGtuYv329z6zmKw12RLT8exYmVJ1kBHXodg4kSn5EpQZ1Lt1Qsio3rEEYNP",
  "key25": "5VAhvwkdTtESSNK6NMHq14tNoBRR1cK6Von3K3vFrkrSjaibp9gdJdK5oLpKh4BNBjDx3eJ2b1aJPgV763caWQW7",
  "key26": "33QNz3SXUFB5EpUhzrj1pSrRTwoyxsuRDYyVQvwYYjTaBtMeQzHf3VuLpiwz57U2i9iAbuHNS5TrrCmZ93kzFeXN",
  "key27": "ypRkLZbQDgU5jcCR3MAouF5LgfLxmEWjVZhWvY3vJugnNb1suTXtnpiLVwo6VWhf4bKusCVzVhBn4yx3vntWStq",
  "key28": "3bsFuBFK2oFmpdwgVbTPbwKq7BVN65psxENSn4kCsD3xs4qB2Htw5M8W67H9mkqG1T5ekszYrqxE5GkazPEDF8y6",
  "key29": "21asBwX261aGa8CTo8Y8J5P79xigU5kQqqow95kb5t3AGTAaytFCFNgfHziJ6q2UFKuBBCfeSP1hPmhS9xaRmjQp",
  "key30": "55KkVRguHGHbZBr7aVq4AA7jkxoS3E6S9LBP3wY1PJjm3wUQSdu62ToHAxnZwcQhScksTYRP6uriYUNwr7mnjmCy",
  "key31": "5vEjZrbUWqF1DFbYFdihxhPECyHEKWJVPuyJfvbafhSMgzURUER3jFwMwL9TLzsrwpmsmLeFZC3j1BKSQFpDJUTM",
  "key32": "3XynyF8h7DXA2mSfQXY5j2wGYfbP4vEAzxUm2KuaAqHx1TmnwqBWCVfUBYQ82J87FH4eF5N7WHGYy9cJxAxjEk3i",
  "key33": "4EQXk34cERsE3kmET6ijXEgLER94HDAFxCSrmuLq8JPL8DXjW8x6g2kHTsNYxVSiE753NpwSL4qkAoxvhNhbzQDr",
  "key34": "2biCKokNnmrT3LL9u5UfJRYSDhwK63QJwPjTo6QvzFF8bKRzf6n5emC45nc2Zrzzk6qAweUU7t8tNBUg51vJWNG",
  "key35": "3AV2RCcReCcxZ8oNHygBmahbo6JEJenKyAiwHcmr98xVhZ9DGvRKL5CHtxfr2R2DeqtZX8UXhecz1YE3EiUNToxs"
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
