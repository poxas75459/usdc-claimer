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
    "5ihLCpofjw3zXW2DXdeSEvgMj4TSjxLRyUpe5HmTsBWBue14JMctx1tnpYpqcLaogwNa6xv2wLSLTo6qEwYgxPdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pkPBEKFJSgAAr7y8Fw7VBnAK2czXxVpRZmu9CxYnJmtJSt3T2yjS7Pc71mPrdBVFERaa3M2GfBDb7PjECFfGWhr",
  "key1": "H4Ty6LvvqSM5mPXxRfVWhvYpuJVDZgA7aZyivJLpW5VjHYxJNC5U63Nq43QgqFagqgzKgeL6C7dHAN7CqLX2N8s",
  "key2": "52K8P31F7MLLxfM7mXDrRBHw6DenwegmHCRkUjrC6V4ESBLmkTKiQDvL1WWfc2mFo6qTceqLjCJwgGghQmkCjQJV",
  "key3": "4oBmKJsLEihm7xCUbqpKk3pc1vrR33WSiccoioWgtVEf8ZoJ9RiCsLcWxKVvxgnLUmWDhVqwVVbLMuoZX2467r8J",
  "key4": "iXRVLGVYC5wAmdoJ2TaBwi23gCXVzFcavkZ4NUzYzErfB5a6vkP9XuMQWXpTJ95Twt2q55dNzYuLLmJDabJpVQg",
  "key5": "3Vjue14HsQaE192rzzT5FP7iYDX719LsqYbKYjREhCvh4Vj2NFYpKfMFWrvjaBqugtD3dPFTwwS6Wz3NFe8GG5R6",
  "key6": "2EWbFK39wYKzRvPHQYqTja1BczgVqaTqyDL9YAsDsTwGzCPyt2wCNCiRu57ZbH4mdYdS8pD3SUGUZUfZwobPRf4K",
  "key7": "3SuPTusTKvt9NEDpmZpuzVkFGNN8DXchEhV3JmGKvmG28cZYNKMiCMtZCFPZQJhcjTctf5uyZVF5kE6AKq1bgDoB",
  "key8": "3i4gM44CZQ3iPPXfHRqjg6NWHfHEVmDW6TKbJpLHCPjmVgu878AyG3u6jGBxkgS1kYyiQULf5UCqkWNXiCKEZJ9",
  "key9": "2rpT2LC47EHk5YJesBcPdkURAq4t2M9fcSK4ebmJV64co5yQVH6wKKgifhPStdBczC8nfMGDCQefDfTKd5REV2D2",
  "key10": "5AbGVfAhc4NAp2UWXPVrXVs1KYqJz7nYyE5XU2X1rs6oeqJwnQXvuF4gmDnXjikL57GHYkhmyREpZwoLZHkiRcEV",
  "key11": "2kGBooZdkSq9T6xodXqYnSybrBi44WzjyCBWCSo63ZuWeHKF6E5hgmTXTmExdqfPBNsJA43yyYRTmyUXzoTzfiLM",
  "key12": "6HxWbLjheCry819pMYr6M3aM23fMMcA7RiRyXtm6Yh1ueagthzvHqJhEuTHVzz2XaBwkJYowEuDD6ogL6rSQMqr",
  "key13": "krHHnpnfXipzDjfAzrgVaTmJV7QfaQbEwwrBPUHz8iFANL1rbVTdjposgZzniqSraZ3eLXX924MuMtisp528uho",
  "key14": "Uhi7UpqW25o9qG7gwN4rzGWJL4aG1nUadd3E4t8guyJ5MQzoJiXiFRffwCz8Zu7RR5RCrgLdhL6XMKhBgBu5EL3",
  "key15": "5ndvP9pBNbh7BkHLsFu2NcGcMraNMn64o8xVz2EozmpfXMgobJtqoJybW7r8fQATxP3zY29W4qjXGXps2qTGEnnC",
  "key16": "2mqermHPJfxQ7rumhBAZeZCMCyGn1VuiE14sjdVDayBmKs3pPiLF2m15v5j89qz1LaK6fiyW9jRpHKCA9pkoDEpf",
  "key17": "2tRj9kxGRLezRNZhNisDfSFhHxdzjPSzm14N8wLeKTqidBCPHs7MXgMHmS5eqEgWqvjftFToaTXTrCfoFqdnPcwy",
  "key18": "PJvJr7NW6eNNdKJ2q8zL2g4QYKh4XDq7TSSGH8FhuQbAfRjX4ABU33HNDkdvxQr364q3gqQC4hodMEHvbUXq7K2",
  "key19": "2njNWMkeRmmco587cs4HCsvdQ7BGiaQjNGz8ybT2vUbHcZa51JA4WLpGnhEN5C64qU1FUNiCrEdnVV2WMGyjVCjQ",
  "key20": "3svTPxZirLPfesdRTWeE2qrhfa8qiCY1o3AVSDfxWsQqMPGsSaxJDzoGuKU8HMKdirsQzsLxKVzAKuTSRs66s6ad",
  "key21": "4reeSiLcNVV5WednSYtsHBuS2hG76MXyAkMrp4DMNUS6ccxf5kPV9XyuxCwYF9yjsJaXQfMedhkVK2ZDjvi1HcLn",
  "key22": "5m3d9sRtRSsqGXUNx8jmgUHNQfHnkd4FT6G9dZevNEbKwKqQhksLzzuM2pmVKPE7BJ61pamDCNDKnot9Ag4NDPcD",
  "key23": "2psvpy7eZPynTKtLHNaBmaTyrULV2VZh9v8g29A7MVSwCYVvkcnatSbgTnRGo2Q7XhhsiFFMkhqQvaiRDTAPbNUT",
  "key24": "MKK1v1uTFbeCSNixmJijuAKBk7FgLYnBHbcCgBAXMcnjCLAsQhGQcfCwVo6GBfU3xMX8KRB4s6h6L2kpZqVtbBM",
  "key25": "3FRSBRccx2yZUdjPKNmuEHaGoqjMUFd7uUBkaDFrr5Cc9q7tdawjH4X686oRVUoTSG1YJCWLQ1KR26NzkHcVNj1Z",
  "key26": "4qrDmUqXz6p5GnKsXX2WrSF9QgP9uNT75k3Xw2fJjjaWmJWoYfGjQL5kcUcYPwZZBN7Q19ZphDkvwSprbGN4nsLz",
  "key27": "2hj9PXe2Jw3iefea9XojsQC9UERJ3jr9RDpyrd3xGyyU7EDswYyVAvyhe8uZ5SMZEGD7dTHhfVYampbMdx6RJcQ",
  "key28": "x8L76fgXTjKSPU1cbZGV3AA851VnCqxVJVLtLpN8iXnwcGJF1vVUc7euwtCHzc3qecYvsLqMjKPXj4Vb4QwXDgr",
  "key29": "4hzVfxyZmSDXm59hjVLbPSCsKjzyy1fqsByQSKJe2cUy4CyvaFDH4bLvZPatb32Wpjy2nNKk77UvCbtkQvxnLq82",
  "key30": "5rrCtbaLMxFe5VNV19iNrpHXuF7GTcqjBgYorfHRTXywpeMbigPzjqJHgZF6ZQtuZTGk6QktX5jCrjyAijBZPTVK",
  "key31": "25mabJap5CQAU7RWiKfHUgxfmJvCLVexjbfTSF2jV8tBTC5MEBaKNRrAk2rRw9B4VzuSEnoBizxwZKMZ9RUCZxs4",
  "key32": "2rUxpBJLD7Avr4TYMFVusuFuvtGBHkDE65KCbH4QceRhtPVnJMz4QRvrscE5aAQ7DbVgsmjmxx4V2B1MWMuSfCnN",
  "key33": "5CAw7xxSi7aDwxnpZ5XQt92VGACj72pb2C16GrTYWtxLaVKfeMqo1GT5r2kvzCnvrkPoKQ6SHn2GwNyksNZt5wAp",
  "key34": "5PpRxeSCGYvNT9MAUcSBbsMHt6huiXqDSvQuhqcctDHAX899NNBWYYT5G6pYYMN6VThbNQGSmoCZqtqd4SpXrYXZ",
  "key35": "gYJtn8trTKuHcw5sNxW5mcpjP5zxtdYhbSpCQ5awuSmoLR8HPyiC7LyLDB2nyJ858h5Yi9eu1bgTQ36BZtFKBKK",
  "key36": "4ruudFZmrhGTKo6ZDQBJJWw7VFdAFZQH1x8oe9MVVwzJHkiPXYE9X1q4yhgB2HGWxDiGBLxeXLPYGShKyqWWTgg5",
  "key37": "67fRSwoMara2JBnp5EiiLTa3ktNT1C7QvXsPJjkoS5UZmzNsbHcQ5sxsUMjWuLT4r9cNgsZisrT2Ws547ku47dr7",
  "key38": "32dgn7TEHcrQh6eAocPLHFBGfLRpEGJfo28zKVsFNnMhLaHqrEmaoYANGq9EBE4uzoqk8YgjKkcvYCX2ghWL8TiR",
  "key39": "53Goocnk5FTmRSyTpWEBSFJqxs61xJ8jPkpiA3z9hLeTPURbVsP21p77x8nontaag4tJfCzrjUymUrYQa2eMu3VN",
  "key40": "C9YDqXFqtkC89T3VZcGSZrBuUpY5zgKMYJ5LW3FpG7Ls7BNbPVZ6ASSEDHwaTsswS4yYyJNTqFabS7JoD5vPois",
  "key41": "62yTNouy9Uk4Av8NhPkZDHeYyrd8N35wAmrBuc9eUEeqq2NmtJVRNu9wMp5jHReTZHfZ1XGqmzfvGbEvRfEgXuZ8",
  "key42": "2RdZJiAX3wB299ZFmqTG6x78yBbTdxE5yJuy7f6isUbJRTqurDrgEzFHRG9Bv9ZzfxMhTE13DbWpBCvurXn3nVUP",
  "key43": "2YDchFht34QTpaCAFRFfxT2unQz542yQdjkq6GYZsm8TJQdoy59AqeaJkcqG3VbZMt8eegUmqCHkDhTFVjp3iVBv"
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
