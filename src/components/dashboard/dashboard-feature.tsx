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
    "crNmi8kCJJjGQBnRVuhBKhA9ctRsHS5QEsRo4VNLxhMriJVVbto71ZSYsdmmwavqwohV4iJj8daVCFYZcbrw6UD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64NqpvMm7C7AJQQNeoo7bu2ZkQpPxmNcdjtAVQaRTzdgT8U17Gb2qaz3NmsKRNY6wptTiTN1yxNCVnwkQNYCwZ5Y",
  "key1": "4uDwvWR4HUKziuRmJtkSVkGxfvugADZKTticvmcENLdWq1pttSpyHJ7GwBD2ViCf4Nj35e5Kk87EPKz4izrMCNr1",
  "key2": "pmzqLGDszJUk7QLVCzfMwUSKN81Q3eiqYbokSwvDLjqaDaH1ZdUvTCc3PgSSfQwxFj1YW9Y5PdU5MFuwUrPS2Eg",
  "key3": "3Q3hdb3iABCpVqirKYagGmNZ91yNGTUjRNYaeG71oZsPaz4jo1uxjgrtvpyr2EXqhCaRgfa6q7qeqSpLVnR2ot9E",
  "key4": "W6aNBZEPpC9kpytKKhAoWgn5S91d8gWMC6sKfmxYodaBp7kh8bvMHFPB4wHKYnqiHHgmFWxHHeGVMf6ZVLWfRTW",
  "key5": "2DzYZZGNeCv9J37QbZAynBp7UbCNcKbUWcsWgXpJMCHSVcy1mPTp7BBoc9W4qPXbBaaFX3GVYxFXji9TSAinkzWw",
  "key6": "4cqzxQrwo8KvTv1cLpdtGJdm8TZPUUF17H8TxbUDqVvn8efGPoFhbYNHiNiwauJyj7fzmCtAn56g1wzKBhDJwico",
  "key7": "3Gir9yJymYrPezmT2gVwGjddjJuKTx42iheWRHt7pGmevuACgqcajFG2VAWyzvGkneoW362YYLVStCgW7Sr1dS94",
  "key8": "1eyXJh3kquXYLYYpFzBy3TgCFxaA6wAtxqE8iXVy87UuFC9NGYuEfk6EJZ6wBTu4oQHqPaWCUqtKpqLagRtRmTE",
  "key9": "3uEqheLWYCASjH69DssJdWCYhBdQ2FZREWiAiRgcpJUutwXQhFFUpXUdbEhYdWV5JSJPYA7dDyBLhkJBLNP38Pkz",
  "key10": "seNX4bdhmQb721g9W5jeuo4pyZT8qPgb7QhZqPHouwTUZevqfHGMdNm1RB9roUJSNSBU8nJdwBRJ19pKZ6qNiSx",
  "key11": "5nhdC9mKWQntEL1XFjCASCnoGyMquP3oDCrVS3P8qDe1UyLUkTtxLSha3QrwXTcUZ7oNtn9ydpKs1maJa1eAHWTZ",
  "key12": "5bRSFdaJSkk2uQMmEhndBMRSofrLbzo8wXwjBcady9SfRQ7XGSTJD4DUgHqky4vEVpRsMEQWpYxk2xgzmWebTXPQ",
  "key13": "5C7Ck9fjD3DUwUp1FQcidQTQipGRfzF5Zv5As6RgXWjCmJgKnud5kZX4HFMQqxkEDW8VWqwLy4DEmk9mh2ceApuV",
  "key14": "55xt2oKYK3AZYfF5xmn9CqLPDg5cFX9RWwHEVLYcynZpnnebs1jqKy7X2nhSvohyDei3behtXucodfEnrEPj5bvw",
  "key15": "5jae8pjRqPHFj5of9Lh6mL87id8RmiWZ7jh5bgh5ZQAVr6e7jxNhwByChoDS5Z8wkQ7sRNaeGZh5amyyjidYLGH2",
  "key16": "4qQZSX5P9GZ9HWGHCiEicgwti9iWGM3vRAeCrDEDCWbjkTc2VhScSQW4H4mVswsguDMgs7kPS98iMFdpVMJ62pNn",
  "key17": "5bP9ie5R62S73MuoWYj1o2ZH98kEo85KWsPrHXHdnmYJRM13nDrTVYGe19KJecZgJXsTJENGvQB5HnrYXLr5Mm97",
  "key18": "5o2UaKEeFCmpSpCjL1H9iZeXoMkwZ8UZCp2E3rVpz7Q3N6sUAutu42ScMSPYkcrxtnVjVoxishi7MUmEfZxbJD2C",
  "key19": "eJ7chXytswbGF7gjVYBxGEX7dX9mKrb6aZePMjfyjN361uC3nvvRED5BZQgmMUYqnksoJYreA8uiMru4YfZDKtE",
  "key20": "2gZzfuu9A7Yd51DnN6HH2E4f5cPjeEagDx6eerXM6e9ucrRRGwE2bz7KPBgNa8whRjinNXnbpjLjCVeGwqGh93Jv",
  "key21": "413Q4HiVjBZCiD3teL5iEvc7X3PprkDQyRK8injgUz6z1zB7MLYGNs7Giw6tA3S7NXgUh8fowMdpfHEVN26FSJqU",
  "key22": "SGMjqZAhcPBTsZx2oNWtxpTBxPtT4h6C2DaW8cMfrsHiPenvmjbV14XXuKbPCdC1jMi3kTyhYWpe1cHSKQnKfsx",
  "key23": "34nznoyMDN6SkGnBCSEujYTbi1n5Xp1rvwzKfkDXnyzYSYiL9yWEqEQ1H8U6YZkrLoXNkZiU8KNxu4Q1Kh271UxS",
  "key24": "5NtTH8476VVsGWryFdTvDmgexpecwFwfwZNisgFtM8kNFbn3U5u63BL7Dv3NTdn11ANZessYuppBoMDG4WbGBgcZ",
  "key25": "56soDd5pVyjy4nzdcJAcmGsj6aEWcpdpMdK7DzgDERuoHWHKz3NsqT7pn8PN45tSUAvrfNeHz2gM8BrYzvm9pyHE",
  "key26": "4Y9f91u64nqmMmmPEMnTBBxtk5m2PxXJ34QJUwCQKjWYbfHGBLgcKj7ytVH7dZRXSyq54RUkqzv6cvqPoSn2B3vh",
  "key27": "5wP2keuQpuafexM4iwFqcfFAzYor4Tku82qwWYRH15FSGJd942yHB8jMYfSSWTybsJNUKtjfo97hSb5WqznT75G7",
  "key28": "x6P6c6J9ECKqYKQGLAdneazp9PuirYufzH4EPrpLqmXcMgswdoaDbaeV2XBFGvDgaFNvc5JzfnFFteW59xpMyYj"
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
