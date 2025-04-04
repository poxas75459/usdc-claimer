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
    "3oYWY469iuqUk66t1fHw8Y3h2bN9Hj3mqumFWaib3pqtSwuPRMgDDFLYqRAcrt9x8w9qh2pBHeFW3t1XivmwQwXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LZ4JsdXxYqvTVk4ow6Ctbos8xyYYya1uLzKUK1HuRPNG363N2ny8Chvx13tyQ7Tj6UnWPJcgeVAgvoxq38LYTBW",
  "key1": "3GwFG7Je94hVZhcgNeV6ztPRtpFx3xNp5VT6nC6Hb6LTzj7bjM2jMwrVZFjBZrmQmdCgEDxgx3SejfsvqGoT8Cen",
  "key2": "SNaQPxVdw3cgadXRskWibEhyEKQJeNN6MNgkQY8PLUcg73Phc5fNTqXVawLrRH4YSaTRi1Cfxyzs8Lo5C6eR7mP",
  "key3": "3ikwMWaEd6rV2gAHrNo7BkpqeJCF3QFRFoEytNNKjufUeZLHAtNQp5Cc6CXyWLU3GP1yqsqghKF7RnNbPNyecRgi",
  "key4": "iArt8foeeooWUfewTdubQyL41Ryr5JhUhW9FftcoiZEiChUN8wZyDF7L9eXqj8Ukr7ez8me2etVm65sR7QZRTkG",
  "key5": "3iRbqh9CWgEnJX59w4TwSGkSmU2PZBAtT42hY4mrnkF3JqRJAA3253g1k9Gsviauyt4GND9dm2MD4NNcHjLZaieH",
  "key6": "FKQofqM5jaGsPo95Zukbe618tdvBFs6CgkC68pmQwdzKsDv22cDjFyVSyDBAk5FW1sWXNRmLpkG3v1YwrK46Fpj",
  "key7": "48mG2McBzFWrEmYwq35HWanmDwSyUuiBfW3MTUJW4ZKCJK96YccYRyY6WAzu2ptfKXTkxb1yrXiQiwAqtXAfVwAd",
  "key8": "2NyXu5G7tKiroXHvthXz7q1qwqHKVqnbkRUexZXoUshapreLep45zJAaw5pUeoQkzSDg6XMT146QHiLds9r9meSV",
  "key9": "2XjVvBW49q3CV5qGYdXCurGYjWE3VdRCZFWPdf43DBDDQtMMsY6C6s1HkLwtfQD1Jw6Br8Zai7mxge8q69kGSYAu",
  "key10": "4cFx5jUBjd7kTig1EHWfEXEKygATbw47h1coVFyiJmw6adWF5kijsSrhhvSSfnuX7L6Q47XpELfB3arF5YL81jNJ",
  "key11": "eZHNW3vAmXcRjZpHgg8FVEvFQ7HR33Sag8Aqj2ud1eB25XB6dyNWvuMNFQJ3KVih8SDt3UNyHxtgHhe2dcYKY7a",
  "key12": "4Cyi93ogZHEmKH9sBYvGQ9LsCXBgUKu1TirudLdfBFn4LUoJYiF7CN34xiC9oYLQnJ5WAN3ncXBmNc3E6JDgTE9B",
  "key13": "4U8VRyDetTCoA77kBgJteuUVwTsPM9yRi4uMCpNqWpDSaWjFHbycsDTixjfWWt3v5oqSQ1UqSstLnnTBXmcqZMas",
  "key14": "5noFkMzxVXkPhN8PkVRbD3kcbtpSJkPAinDMrgRafQVLUmq2BhLFFeQFBq3y74b8FMNqM5BKX53kyUhWcGoNNb5V",
  "key15": "TU4KChYjsqx5XrKw6UVBkhezJsTJfeNrxDny4Jp4xks13XsN5V1d2GJuG3MuEYPRi9WG5LMxh5d3ThwNrwTcqiu",
  "key16": "5sXjBX7XoSjVAhXw2ZLxJxkmAPRSJMBTjYTsNedCA8ZMjn7UKwrjhemspKtL8hnNrTfYANnUr9L3pKSC9kKCJ2AC",
  "key17": "2TT82ePoru1NHFKeh1xGJwcd1bf4enyppNoC7oHNJTaHihjNAugku3Ptwp3zWXHCoZmKpA4ATLxUt8HSQ3Gvz332",
  "key18": "4zo2DR83xCNtH2KVNPHttDFDvryYzCBxA26PEdq71yY7dJtCQNjYkkLwyg4ozbMbv91KU8zXkQYzvLvY1wiHKt5w",
  "key19": "4ww2JX6QjK2PAvYfeaUzDUpvpgbkqwAgtk7Nzdg3TvTzt5XKerhnQUJVmCEGHGmCUG6HzjHnZUwxKnMzmshGQBmF",
  "key20": "RNs1tLdDq3C986UnTG8P1J93vpWCmwqPAPnn2uciqeVxkc4ChBfF6at2UrRaUT3DAbGL8F8PLduSCg16g52EaFP",
  "key21": "3XVnhb3x2CUZ9nfbZ5KkWCtrgTUoVMDG9ypCqXNxD4DXto1bvabaia67oNXLA4P7oNFf6ocYykcYYMFwfmf6W55k",
  "key22": "Y4GqP3Fb18LogJVQpDSxrhpZmzvzbThy4rjegigbGJomZCWxEKJoD6FL8DMzEeaN8BgmgxAbPtj6vD7jdZQhTTZ",
  "key23": "4wQJhGSjox7w4pBdnvaVfkm5mYSP9cPCPek7oY4sTh7YHKTLfDKpvgAX1TC6KnmrkMXJmkDUr58o42UfaxrKy9vj",
  "key24": "tNVnh5q94RLeFcuvX93FTUg791Bm2vAHXP1CBzhdHNU54eenRtW6wRkrrYKuwGtayRYYGfNo8uFj5j5DwHB5aAe",
  "key25": "4vRnyu8BLrMb19XvtyeNkvYk2ufJfiwhFoqDMrDTfjfFbta6qVcNw3ePzKFo7UTT6D2gVcmowHqSkE9wvtLiBDXS",
  "key26": "2HCncH4kP6fQhTnf5M5GLVmXfsDktQH9zE7nMVwcxLHp649BmBNRrDUXFuk8jYSwXMPxUV5DzwA9oGLR2uMrK8s9"
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
