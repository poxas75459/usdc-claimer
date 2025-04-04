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
    "KqHp3r6nfU4EUHUWa2bMLqnKhYTkRJzRYMh7rtTJ4wuMiH2QN9SSBotaE4VAjVDX24Ebs6sCsh9EzPrpC7CrUUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FaUSsPQj2A32gxLpDgrjzAAvp5kgbWm2MapGUdkK9dXEc3M78TJi6pop64bf9Etpn4SbBd3QAWypC79TStBu5oX",
  "key1": "q3VnSRSNFEYVQw3hTU8C4kDgWXDTXavC4bFVcXBczZySUiC9eyX7LQKpjdg3Stzew8a2KrEKJwiVcuP1KQUc52x",
  "key2": "2ps3CrEsd8dmnaWhXPqWcXtT9ULdFqiV6KXD3txjvQbPLupJ2mV1Rsj7Ggx12ncDkP7sAweRfwZPDkrFGujo6UyH",
  "key3": "48qMV6nuAarxYbL3r89RzULCD8No5Zqfi9rmnQFy3wAdM3oGQbV6JtCSnn7BpUd43nrGhqbFFd5WoYr5MURq7MFv",
  "key4": "3PBha8tXYiEx1K9PnduvamGFeZiNxKKNmWC2V8fb5Vz38MQPbV9YPYRvd2Hp7Tod1d4nFGHkkN6cYYrASBgvRRfa",
  "key5": "PxARps5PzgXCXwo8Xt9zJdc73gRGRSzBP3G9GbJe1cEasxbgvU8PCzPH67rD4R7M1NbytY3s2Txe6qyYQG5Gkbo",
  "key6": "4kn3zjRMhzHizkjHwU5TJksEzyNjvt8D9LZMNi9N5qpnkmrdF15Ybam41NMzQ8frMWdZp7KHcL2hLSTUSKr3dnu9",
  "key7": "5YjTTm4rBgUDoJATvG6EavZEDbLBcAA43FWXgXEcYQ99s1qCDxDkns2BFrzGr48i862QeKEaJ6hoWshExJPo2k3o",
  "key8": "3qE1JbBzAUjjXGqecCFDqFGnh8eshHjh4BG1fXeqsQEfCJudX52MsewjG3ztntTFJvvts1uHE7aNxzRvwzxnaWG5",
  "key9": "3Ryan7QCvA7CZCgTG5ESzCRbLQsZ4AakqG97EMxmFU4yrtVKyMyJiaCgYsnyZDyUtk1jPVnCk5fvHnE4wLhvBnyT",
  "key10": "5YETxujLQdhRu9LWoyLgKqttuEcWqN9XK1icRoha3ejNjatMGCzwLsM8CPRAsCYUrZgnZ8h8Cb2XS1tqEKuLUQhA",
  "key11": "P7c1Zgh48VtdMFskYyCbAyUyh5MaM4Bwvw76QFWzvVZbmPLcRKGYpLo2A4dNZmpRwy7DoF5HpBavEaPGF2eDpPc",
  "key12": "ptEvupzu5LKWxYzuXXLCKLp1yN9XwLcnGKMgBxVmWSoFWV35hpWYzwcqsDUxZkQxdQNAsxz3XqqqP5A7oTsCy5y",
  "key13": "4CYzsx6Wzxdvza4oWG6KZ5fojJtHvuZ6QJh2Wtj3RsXyQuy9EgEqTQjkpYwZWfpog1VBSbXGkzTV7KWjvhyi7SCH",
  "key14": "4HYwZQXeHQfeB4AxJLWqrncRQMXUCnAsy5SxLUVKNe4vXNBbYgRv7AN6tCyzQPmnkK4nFwc3aPupoAzNRkhu71a3",
  "key15": "uuCeizSCH1dezTQYqVS7TdDCR88kuj3PcyC6aUP3eW7v8LyVxf6RDzeLEFBLBQDYhJKS7Y67mBZNQKdWEpKQJks",
  "key16": "2Kt5taNDHYJmWq6v86P6PNG3zY4DCmKMKuwz8n7M8trpPa3KqwG4ReP1JJ8xsDziTc8wJvFC4M7EwAzRRRrUqE9U",
  "key17": "2gPsRQe7WFtn6aC8Vr7MeQX9xbPAZPpYhTwiD6f4E2fRmQRGCB2bwzZqPb5kZSdrb8CJzFZAdPrcZeDJg5Wd3qwA",
  "key18": "2otBQDw8XphQcExB5TyaUdgoYaXTuvqcNtQY3EPTheSSkQH6tb4Ujgep7kVHEiMeamBeJQ1wDqXSfbMbBACXHJMd",
  "key19": "4VyaNmMNq1h7WebH7Fpxs5mfgMnV4B1kfAnJ9sNq6ffz6b7GKEL6SkNRkFRB8tQZWV3GPBErriNXH6oZthoiRXGy",
  "key20": "2SHoYhKgZtPHge4XvDa7moH3AYHqMwnVpFdYELWcFWqAazYaeZfFFETo5tLKksTwrTLZ9gsYAPxpjz28f677vtLm",
  "key21": "3g6mHDsNg5ABJiJkeV5V9JhL6SfTix35HrAh1CwbBXmzBX3qWwXGD6erRRrDt5Pz2mdgKMk7W4M5NAg4E7yg1vGt",
  "key22": "2ADPVtsFw7ziip3veUL7arPD3Htb2BvoDzTgX9KBnPQiZtpn2kwWPjoswWCpHnTvnH28cTtSj2MTVRYJ682Huu9G",
  "key23": "2iTYa3TC6BrCJXNBtJuFKDqhTEe88k86yYwjntauy37uZkhVDtscozZZ4v7wbtmm79pxhqWcXZBi59fo5twZGmsB",
  "key24": "wb6dGwMUPAhtX5G3V137q4bfBJdBRX9ZNbAptZLbDBucTmruNLfbWUK843ET4TD72Bhsx2fe2m5xAwbgkyPWnBR",
  "key25": "5w763gbGfodPiUgUoFiGVapqawQxsDh9Q24jjkKkbxsStaoqZnN7woA5bKp1GqvDoYdMvLgxi2kpzWdqai7zbeAj",
  "key26": "3eFHwg3hbfcp7ieLm5MTaYEHJRqcfPAyzVEtqNtop9J8vesf1kvYgNTpFZCozAFbpU9j6c5VNkLXFYHKosF7ewZ9",
  "key27": "rMLRGNiMXTqT1JfjyeYMckRSgbW24EagGY9WVa8L2AP2FBBUf4kw5BUUxN3RaGpJN2bDaxNXsMdgM67nqJS5SZH",
  "key28": "3srxyyS1erPvpQhU7XvXN6HZMfpjSKH87qvt4zjHmUJiw9mt4jcT6UBuRwtuTRi8XayNMqDpXjXUMZom2Yf8YTjs",
  "key29": "36XTkT8gZdXiRhYv8gYJbN54RjGn3noZZmgAQbYg9tVXsjp6azhCoo3D6f8YxVgTGsCka7MgYEyxh7aPZNrUKeaz",
  "key30": "mFhBeFa4DCapV453rJn3zTg4jtGuhLbgNsPPbEwQkgFgzGK2dXFUNrpoBnL7NUdwuRfAiUZEYGmD3s87nZygBPY",
  "key31": "5dH4oLFRLab6jioH5jbwavrFnLsgCf3Jn1oLHQ5Zcrv1LTuy7YWgjAvLoMzPURvoQBfzhVRnu82m9zvTirbkAeVi",
  "key32": "3oDUdzjBUGexVRz5b2cmaHzRbV24sCwPBtzCSWtFyByKcXjTSDeEqEgoJxYPZKRDVWT4BvSYey7R2uWSLdmxQLjY",
  "key33": "5zyQ9q68g3hcVFUQizNc2M2CiAg8T7BjkHukPhqmz3DnZHz5Z67t6ADy1vHTssbdCd3thTYdSTKeezBYHzJ3L4xs",
  "key34": "3FxuN42kij1ejFC1TmfqSdPuV4KmZ2RhviZBC8eAe61ZTqrdfAxsbLgFTAik9W3nk2RYCEDYXGnieora7PvvndXd",
  "key35": "5GsGHjzvnoukjZqDkcNWdtvXVQ8b2qUiUQojRM8HrSHjMggYsW3AR7dYbvp2gGe75G5uHxTtw86nWdTQMaDEN2iT",
  "key36": "GTATcGTtNJWyN9uG9jvndpfey4x7qtufjNdawnb3iMqyJcQMwaZgbrXteSZ1SFvE6PEXp2UrPzpEEyE5hZi9sih",
  "key37": "Ztz15uU3LuQ46D8XoGtPNou3sunKP3zoL2UJSet6LDxPbUYQSJv8r6od4nf1cybhSqSKT9P93TiHxypwLigMB7q"
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
