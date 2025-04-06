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
    "4ysthP1H4z7y5kNQUp88DnuBqXbtJvR2m7N1rgXMRshxdthN9USydR9x3egA21MFYUVmUv3dMJN4ibiCHB2PV6LF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4szEzW3Bh8fBWbD6Da2rjVS51RiPdQJB6XJWQ9Zj8Kk7h4wpViwsS34ZpoyUUHdFYnK6Qm121pKkTp8p8PfMiEw9",
  "key1": "3uzX8m3PPzq9mUQmE58TxBSV7kTxHVn5mZtUPr7JMCVHnFuEN98QcPFb2DFVT5kNreq3mvLFmUjJqS9ZwtfkfZmd",
  "key2": "5jqPj1xFD4essveNWKtJqryx5Rtny3AX6x72uMq6iVAVdZ9gUpXbcGPrq9M5AFw7ZgEykNwLVoGfh7bDrSRb8Mmm",
  "key3": "4VDYcDkX6b9GDLifqQPLa93fZJQKDriamtq3tHvWDwchVMi7a1kW99xzTvYW31rayEneYEQ63z3e46zDAg77jSeB",
  "key4": "CToDQd4XvSEstbfuhi24RnU2qa6A79DP6qD9H6QPC8vhN8k49d1vqDD9Sse6W5ZeiAWBaJnphqv5c9rFX64vxbZ",
  "key5": "2GHAMFtioRaQCEpHcccV6164ezjUwmcfrFW9WCyFAn5YFevpJ6wFfDi7ZgBQsNkUB5VoDJ5LfajtwPBYWvcBDqVN",
  "key6": "ZfHfrRePpjSg9Gw1ujox63pZ75WMw9X5aYJjWurtFrig8YGqxWCP6ARWdv8w6ivciT7iBKZ19C26qmxDfz2mVo2",
  "key7": "3iH3pchvM2dk8db7eUZj2WrreJk5M4vKZuxt6Kywg2zwKihJH2y1rHpVDceGjFBgUav8cJzuFACg1tAUXBYWrzwn",
  "key8": "2G9XfUS1i9JPZMyawpkcLKYYVx63vXjvR79RZo3vBUyZ7iasPckCAYhntZJUaQY92W289s4muMuwgX4TjP8RcdE4",
  "key9": "CSqYVmvmUZoR8KrP8ogMCLiT37TYrSZZ3Ka7LhTpgwotCEQusYULF2mBhqegpucrhcynV9V8zvb2VJALk6DibaX",
  "key10": "3utShWqY3etNLLYGMcrLnRGZVzvYD4nQbCHGbfTd252aWYEJSr27UiL5ewoyeDFFzYLCiFXGPZo9i7Z1HoWosRqq",
  "key11": "5kniZCKw9gMvuQeUk5JhtheAwcpHt9itUVzLBYhykrafHKcx9N4uocDmqwp7NPhpTdkXYBTb5WMGvST7YoE9tnem",
  "key12": "3kg5SuCaeqTGqTUd62nXa3w6JZVwj4ug4fFagmGybR1fCCiauGW1LQfyLGNFZmobKWTqw3a53FGPwCpkUhwUYdbY",
  "key13": "5bBGr4ZKSjqwqkEpHc4Mq96LMXWSvzATEEYjKYAnk9nFpMd4brnGVVzbQVKCdVJXuv4Zu7R9xdY8eHtnp6PW3ww7",
  "key14": "5fJdWyTZbwHeT8LjVH8wfXbXvrTE4mSqZHeVaNT5JMUF71ipdNTbe51SKLSfsRyd1PwM8LGZAEsQzFfKDSLvTeP7",
  "key15": "U39fYfn7b3Czog355XHyGuTJnysTGeMxHDWh2ZG1rbmVuLLdVW6HGgS1oCbwEDNRU6wUGy5VGfm7qLhaw59XVpo",
  "key16": "4qnPGjodmZ44ABRZAigU6Xp4ZEVMLhvDjDrET5PiLkRErt9jEGHLcmsZCQUoZm6yvbFyarwiJmeRANJXEC8xgMwQ",
  "key17": "4ttNNm4NJ5zzjt69YxJifYHmvsr2Kh57C9B4LDBDHLyXMvsUSjpkzhHue8BgXuhCPEbx9SJoJxPLUP2uw93PcVjC",
  "key18": "4EMYuHrnrxxuZjBr5k6hqo7gvKAhkrHgvpTHVC76a8Cd3zixrLtwjeXSHeLL7gKHB1QPePbnCxUDqbTbvbhdNhSk",
  "key19": "5Dqx3M5MN4c9GWY3NYYWZ93PNPCyZVR4jrRi8ZMFnDEnDHjCz6byPVnfARW7K15HaACEU5uWFLFPLvt9dosmgyvF",
  "key20": "2cLGBjrjB5rM2Zd9VzccWo4CqaLGwJjAgjnxGq86KvxBtJckXYHjuKt1FNRdohT3m4XHZDPU1o97D4v79EPMJ8gN",
  "key21": "3TA12jeAD2uSMdJBWiJcsxUFxqrpyywCYaZcveuD5sGswUkiptST5TTB26uYRng7JAY13d9Unkd6RQB3PKx7s7s1",
  "key22": "3NxMeNvc4VVj8v3QgRMkvFBjUj6zmfJ6DqDUXcVZqxDZDYUC5iZpnNSF1q9cmxiVFiXqdDTe484fMYWAMpUwHn1Z",
  "key23": "2y4T2uECQSU3mmkZsbEzDfdrWvqivTdRnbfTycAbnNKd4YjbsTqQAN3uprb9x3wscVNvDUheEmbBQNFs8H1Rjbsg",
  "key24": "KLUgjcHiRCb8vakEHYeMgWuhkc7qCSeaPjFJkJeFHykwesWrrrrHQEMW5nrG5cPifhYaD4CUgscBm9xBNZkxSYK",
  "key25": "4CaxV7zeDoLJSwvY4e3HrCEiEag1S4jeSnt75GJfvjEgRZS82YakQEDoZBBBy9hNX7RwK9orWvyrZK2ehitrnnVd",
  "key26": "5zxSTtXde3nkA19MsGXjB5GcyNUJrtnsY6WrWB3KkWf99rRuiae7Qh1QN11YYJ7cDamjMFf59T2692J9raY2nVV3",
  "key27": "5a86mfM33p1HYRKLbZHkqDXjcL2jhdnmJMUCAtGGVnPp7KegSVqV5pkJqfwFYYC7JvQnt3MRSy4WToQUupd45Y7H",
  "key28": "38WLGmWSk7Gd4w6BmRkFa6RhNa93oj2CQi4jTAvdMB9FMdZM7WXYwS1ZdgCg8LWC3YNsGdDxwzmgBxgDchzvdTT9",
  "key29": "5LyjQ6kom2gNBsczUX8MtZrEa5SQiyXBGjEwgyVjaSFjo7C9fUCTQ5QKndmN1pgM6X1bmrf1sLnskg7rZW39YgxW",
  "key30": "UH3Pj1QtqMRXVkebm4Jbxt6xYjLuiTwfUxHidTWRJfeEiFYt3pFktEdZnjMfxskfSGyVENgayTcysqHSHuAM9Gx"
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
