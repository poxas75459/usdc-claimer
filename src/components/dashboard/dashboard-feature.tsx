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
    "518xZ2dhNnoNmdhUjrGpvDEyUoyWR6Pt3WrwLcWFWxVKXn32GZggw2S2bwNSkEJomWzTtPC4ARVtYBy3mJEfp2UJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sWZzGh68JYgoD5n8frP85ThNGMpBdMGcYgHUpqF6DLibWAKYo5e2oWz7n6YBTsjtZVjPSLxqVSyDvbKvVkJ3w5q",
  "key1": "3svFPUHxQTs2SkckkMg1MEgEbWnkKH5z8h71M4ZpHcdHcVkCBNztrXKdH296ra9eTbtMATx2T377CiWD4aU4n7pT",
  "key2": "2YmaipBN6SCLq72qjHpHFnqVXhV6BBcUBfZsrg4xpteFJY6Wk8f6mvtRE6qEKaDFCJtbFaSLWminTpPt1HijANYT",
  "key3": "4hHU5kdb4VRAkFMP1NVpxz6JWX6R79vWFNxDJvQoDtmzn7Sc6yNWTevCnnuWFCfHiNr3qDEqWXQX2H4Z23UK8jUe",
  "key4": "44eAW8aQnBtRx341N1tijrvS1Ba2ygaTdhYozna33FqQUohAg6G64m4eURtVvexuCZqgAXcBGqEnEiktTuz7GF57",
  "key5": "4xG4ZbuhNa6HCGzyy3oSCwzY9kHHFL8UWLSvSmMnhvbb38dx1HNS8AzCHtwh4U5NNWjZt5sHinLkEcStn6Vi9YU3",
  "key6": "3U35HprZ6TUyS5MSeu6HgGW2PUr2n7H5AxDP1udw1NBa7XEDQBKQbsBmyUa8vzR2pR4YBzRiuWJEBQggPWprUHpx",
  "key7": "3Cn4npVJiHSwcRTPPaBUcCthND8BJe8yi9hUF24Rb26qB4Y3MdhftZbJhXPB7i8iLnXzyyG7QnwmFbtgkzfq3zyv",
  "key8": "4ToTtUKYQ2mTgXaPDHHXTF2cV5dJXHVLKAmUDHotnwfHf9LRbFvecPiwpPG8SLkAp7rzhu2voMfbyr8HtnDjHQGm",
  "key9": "4uq6hcG51h7vE4Fw9FMq32YuuJFhuKNHMPgAq2WjxtX8KuuhX9cRTSpDCsRHw4Vn4JmuPVnYz2xF3GRhAt79GvSj",
  "key10": "mEtgHnAy3nnwZ65NPNnQyFpQKjB1rX2HrCzjoCwFqRKHQKPMLZ1qAL6i7fLUFFt49DBYqXcdJK4vGGRtZxzXrmX",
  "key11": "5MLzNASrYsKGWrqZj8us1vniaQ3jajQSnxyqi13H5VvzsxDMe8JtfA29XZpD2qNJmK62PAt8zVmQBPxcuxESWETo",
  "key12": "4ikmf54SeFJHTHXdhdEnpz9MPsfGJxvZZyAdCsBwpkjSVkEfXtRyj7MrXrnWvEquGZxe8uwYd3mJAoXTXMYyba2a",
  "key13": "cnPcrWkVBm6G13u1t1jJZDhmEyBdKK5SYzRgWZvJLvCDST9Mtnexcz41MdJ7p8Q43FZ7e7Hqx7eft3JD4Lsv1En",
  "key14": "3U9NbiP6q2tKCFVnGT5ZGUCH3FewjxgiBtPHPzkpn4MCB5dTDZKCjM1dURp3s5b1hjJ7kUna2wx1869oBDH3qGTT",
  "key15": "5wpJrLMbrhv65ED5MQ9Lx8je7vJMyCmnneHCCWujSZdrng8zo6YURGz8eY1KnSzep4zawXcNfELa2XEagr8Ra1VT",
  "key16": "4mmHF5hDA2rPTxxWM8L7SWSTh35zfYZTs2pvgAmX8VYYPHbze1EqsSEX7jFE1c82pBVFAXytQRG9hgGSuW5Ud5rb",
  "key17": "4w59kqYvYMgfs9fjvSQJNrMSCycygg9guMHCbksQtakwetPRhBQdwj7C9y2RrBD3wNEuXcMgmFSTGr2yE7m4TGa3",
  "key18": "2cqAhBKAbTKdQxyh3AzUhUsSfZAfufP2Sx5mA8m3JfXWaD8Zoco2fc8PF7ywR3umKBFjwjcYm9eRAUokPciCnFVy",
  "key19": "2KoiRj8KyQ2KKXvJ1HCRi7UmJoz8xgHzqCMVzQtCStsLmDBPLdqCBNkU7KbwmVhjwPsr3gNjfcaJBAyNjvh4BgJX",
  "key20": "62fUufPj6bppiXU6ZqzKJ7RJyAoHN5rJYsh2Lz36jSmo2DoT4KvUq1Hjo3ePDBRQUurNCGvtuqagiWr1KBBdQcVk",
  "key21": "58gb3huK6LQsKqxqWdErmHLv5Nr8r1HAJSck9yUXHaJEMdxDW3azRnTrmAcou2UuH4SqbCKH4Re7suQZ16WfK8mb",
  "key22": "4dvdnpSZP2nvivYut3oBz8XjYomX2FoPP5uZ6pdHnh1m49br6JXa4NXWBLGY1d1D5SroxtdN8hpveFunWgPuEdJY",
  "key23": "4MRNoYmfmUVhYQC5bzocd7rmJfkVJ6QLRpJ9k99anmfssN7K4VmNKNdfR7sx1meDNbn1c6fePrH7EeewZyzE17FH",
  "key24": "2Ad1HvRyqHumcSshanrMJ61nwPAEHgaZ2KtxgruqJtLAX4PW7pHtaVDwfi3SwGrp35Lt95wUUkhev7LfxHYMvNKF",
  "key25": "i2cUWpt5WbCQxYVCQSo27FqBkCQwRTY93C6mbAEoLc4cwEozZJwyYsBtTgzUsJNJ9Dxsx5xAr14WbjRjs1YPoDh",
  "key26": "2xCKwWFQQxH9BkFa5CJgmRtBv7crRWjmSnRt68PTw65dY3PvEkN36ersh7rze829Gn7jBpkiu3Qgdc9LuTPYkh5v",
  "key27": "67nwUoaYFsKwWsUv7oSCuTTvx6piJPDh8JGL1qipZMwZz8V4yVsvMZdy66HuRaNxQJGWFhQmy63MKtow2WFpNxw8",
  "key28": "52CdQMYhouuDsHCPAMhau9WVaP8iaokZTWbDp8sN4gkP1RzjgYpDi1vBXh6gF63XfmmmTjVCN6a4yai4oMndySA6",
  "key29": "3Kckv3g57gAjbsKADKUABZYqPbGUSF6VH2Uuhap41RErHSWJRZiJuk67vuDAdhXvricivGKD4jHWDk3XdbwZwCa9",
  "key30": "4LvDBGkc7qQwQakxDrzMVizbM2ZoaUkPoeDWMzsVpu9Q3z7d1JiVsuEL2NKSaGLxtRj6sNwQUjhQwRxaCWPUvKC3",
  "key31": "52TQeGZifg9byN9nvCm6CC7VkqCtsCi6Z69BgL92mowkw5aTSEExm1Ec9p7bpQPspL61x5DS6bUAtUfvSssGtiFQ",
  "key32": "4eJtB6GAZDXUQ2wZdbeekFvUHKaFSC1UFKguSCzJav96vJU3crfcgdPT87d4ACGFoio8RHREUzTHz5RdDzwD9v64",
  "key33": "3T68pNsr3c885b6UCJmycqXC9tP6icbXDWbC7tAkdbqspTYo9ZA51FWXQE9BguftyC5SxU9QgiofsU5CD6cdAGUs",
  "key34": "4RZThqZnhJXB53eH4ru8NWxXex9DbDdynRco9BP38uuadZRV5w2pCW51juh9NBwsNL5NuAxE7xWQgpf4ecPtFoai",
  "key35": "4TNGiyTA7LQsaUMKDU78YKraBGGNvLa3EkSnNX49hM9iJWydvmncJfEHUnvsHWcFAuhXLFwQESbW46pppqHUFLer",
  "key36": "gxBNQgLa33VpzkpWvJiNZ22iumbSheJNfdLuN5tgRuYNUnE1Ff3xiCuaLfEhaFvzSBZ84tHFg4R4QZ81qWRvQCU",
  "key37": "4CY73Y6PW2Y4ebW2JCfQGYyJJ6Z1XpjoqMpRvDm1FMxoqUwuKjSmbaAfsueDGzTcfFRFCft4m9PQLmA9sxLaBAL8",
  "key38": "wsBk5TRrzEY1aydipw2rb3d3d6oCXfkAfYPamPoZV9qL55j6Ek3TZgi2nrZmbvCuWD5ch1aaLyPdugAXjuSH3GD",
  "key39": "4g1kJ9Bd6VTVWi5v7e62EaFZAzvgXqE9wihU38yCQ1crghbtWyicHt8tdSD6Kq1XJsXW1nAhXAgVBRYpkdPecYmp",
  "key40": "3GrSzedrQwHTqjdjioKCfFzHjChKZJhDMicyQUhT1wSXYEwkAqPKK8wKsdvAAmucELsFRWq2nbK21E3rL6F3tVF1",
  "key41": "34CoTC9SMgEQDykcisNpL21XNnCjaWKwEsUw6mu3U1LzbXMkiJC1Se3bUuF3aFgeirrrjXn1Rv3Ke8XViBDhCSQo",
  "key42": "3eXjtmTycnpKvmWzFySj28CWuAzFJZixBqhkLoisZcKduB66XYTUjzWx4Jk2xBQEh3kLS5XccmK8tVHqwuqPDkcq",
  "key43": "2MZ9roao7BvBdcQJ7CJk55KsL6EHFwEi7WimpZLVtZVicRqr6WzocKA7GhDChnbtYWi3y65cEvHr3HpMpgTS2r11",
  "key44": "4aJTdmmaUDy4XmEPybknMiBCj2ixkKgQAzNACUgV9XCKqUwFYn1F5Wsv7MGTctS9W2M9TuQHos9rWRiY2m5AbLwr",
  "key45": "TiaXibLXLxwE9W9iwDXkEVhvMPyPyjyjKxYXiZbu5wiC1wnc2yfNgzri4C28HyTcmZ8pMaBZjj8K7P1bmzreRAJ"
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
