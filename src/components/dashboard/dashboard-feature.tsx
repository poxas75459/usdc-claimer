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
    "5vKMd8rqCaALawigRK45HVKrrcgjDFFu9hKeRi9n3s3zGisWj3sJfBqWScasqRrUhFDhZcBLE3VLLaQxbwndfGzw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NjoYTTaUADRpsCCrNMmGqrpTAmQMVUb7qUvwaSjfKbXbsbzZyusTGqNvG4G78KBgxYeGSyH8BXrGJzJK2dJRGtE",
  "key1": "44VWUYzbSrsYdh9wvJsoKMTsAut5w24Dfu5d72eQ5NwaZN5QqdM1cPHu2q8zFAYk43h7RjMaj19ciK5ciFizv1MJ",
  "key2": "2K1J2xuH3ijXMWrjEVPZ835XiTiL2GQLgFehW2evqSuhHY39gHcodWxfdxphZ2qukw2j2uEmZzEDL9vnmVxZuv7R",
  "key3": "5Dz3d3Kjq52G6Vukk3bHSKs2HT697xjXGAWnNNfmJGtwAgmnokf1gBxjCGjyhpj9MMb7TpoLn6JpDGLJuDSduLYm",
  "key4": "2ti8gwEzDAVvfHbDQbka3Yav3yV3uXfxq1y3ppbaJvSWCs9DjZETbFu4EwLzxgZEszGHGui9sy3bw5zCEUNboZBF",
  "key5": "5GKrwPmvHdrLiBUhgQf2hmDm6H7sVHUkwtzCeSgcMNUrjSY2TRtD4th9UDgrgdQViNephkAyCEd7yNEsjmjzaj36",
  "key6": "64BMxGnWAocAi6Ckivsr9qDeNwcimsd9FLkdZzASe4e6SJNimme5TG7ifL7MkYiYBpVC4WcnYVw6Pkk5ebHsDyMN",
  "key7": "3EJbiWUmthB5vnNHSdSVykbRFKZ8juF6wreQ1kZx2vmyV28F1Rx64sedK38U8bx2F9sp8sfah88n5UXWRvNNep8W",
  "key8": "5nw4nSPwngxNVYbt5AgnKvCqsrf4boXbKUhtJAzM1F6q6ybt9T9FyYXnoAvzZc8UEBDSGKbSA4ZbCxQLU4Cy3qvu",
  "key9": "4aYoTUrUVXjQx8tyuQKADWNWGESPLYtmnDJs3HWdrk75j2Chf9ePxDB7LCGvU9LZxMfED41QM3gDaHqPYDGopvM8",
  "key10": "2iYEt1eTGTbkiAn9h5m3mys212Am4gGjSz6HzHwicqENv4ShuQ76ZBk2wiH13VmW3pVSfM6Mcg5YS4TvzgWbW8R8",
  "key11": "B9RGiBefTQWQt95EVkjU2QMjtfJ8yQPAyQzZFGijyEvM9p5gWTB1QqNTQGnUXbQLuyjuzbuitf6HeVWbfGDrbRQ",
  "key12": "2kLj6AK9Rnwsy8s1KvPHuXb4uS6EBZQU3WdZd4JtfDADR3yNT9X3bK2Z3dwVrajZgjo8XKMah1nMgNCJS7yHdMi5",
  "key13": "4Rk8z6FXuieDXQGqLc5wgYEP1CzJ3KwjSD5ivo9L3KtPp6sZsLJrV7SJ4gdCjQNALdctSsZZrbqJQQaTqJ4SqPnW",
  "key14": "2UZiLv4mCeqAfya8E1XeMF35cYKqUdCicN2bU5HUEn6o13BXEcrryMeqsXCcURB6QCmB7aTkT7Te71GGbVH4iZmt",
  "key15": "5F1Qx5r5uUNcn7zYJGbULLg3Zh9nMeTExH8Wh8EHG6W6QRcPsC7UvAMktfUzxF98VPy59QYHzhwjYEdEyYY3AUrX",
  "key16": "3Ao5V27SUmNWZ2iphZW89gPAjEAA1AFMDzgL1wRqmmh5oAztotKUvWN4VYkPGGnmgfqZuwUTTMGUWAGHFU5xmxYK",
  "key17": "XFp1hw3opCSjVLbMNVe7ahxZuZCcEHag3LtGiaQLxSuHfeVVAuMN6j3DL7bHG7zfnv3i3khkQf4KAsALcu35Dy5",
  "key18": "5ffmcGHpJnyFXCBRE2Z6JXCpAJ7pfx3QohsVma7tswwXBakeeRGpmgNayN5M1jttuDUe9oCaXkhHf7unxxMmtVZa",
  "key19": "ra1Wx1TLLYy26h7RjTnbUs92rNMm5rt8uJ8LfERViQ9xwtWRJQgUwBPSmPXXJyU7gB6mrnhV3KdZ2bjHjUtZWc7",
  "key20": "2De4NT363Qa8PaiYUKfYfU13GrJ65WFbM1yYw4mKn3H1n5MYZB8ZK2gXZW1UVcZKX2t5sJztjDW8MeZ1aG5MbEqs",
  "key21": "3W8jQaARiEJ6pZwpTbw3rRtzyXJECfoDXmNK5RmGhTEdcLaTN8pFwPgBo1Xk1QbpC9yDnLLdMqVZUGLcRwEkLL9q",
  "key22": "3AU2ufURxRrNNwvkTw6afwaXMjxR723Y5eBe5vNYzB5gN8F7MjNweK1LUhv2jVaW16dVaD8NeeJpGPzinr7RiRTc",
  "key23": "3wUAPJX3gXXFnbE9EieEWq1YjkC1aBvci5UHvL38WT5b4Zcg79vmu77vX8Jd1SdZjqKVWQCindaBrU3Rzvdzyt8k",
  "key24": "uZdtBoDmkcCC114PRvAPeLEBnRUZ1uPDsexnSsuMKy4nxnX32818gauAE16MfoNv6LZxwhvANsqdCGmtXvpLpta",
  "key25": "2NvFS6Q9krSXQStXfsiTrRyHKWoKnw9Biu9DELzHPkgkheUVzE8xN2PhAy1nqjjJy9UpQmMmRiJk99GGDqiP2ZSS",
  "key26": "5pg4UMqUXr3z21gUW1mpMtvaqW8vDHrp1dkyBQw8DaH5iZ6GArXzyxGo45b6MER4Cc4RotG8UbLYF6P8WVHVeLSn",
  "key27": "4aKPrGSFUMwwBktq3oLa3Npvb6R6E9CrQq1eHEeycbZizKkmQ9jEyxYy9RqbshFetmUfXNvho9k6GHG9CUFqmHjk",
  "key28": "3WudgLmr3Fi5EEXiFsUeACLAuWCDcovsvnvYJe2wa3pQLXYYFNoqPucHjvxj5t5ei6fjmbej9iewsJd8mD7mXTv",
  "key29": "5EVdpeJkAHx3ZnTGYa311UKHHS3aBd5vdmBGqXH7grAJJAxBj2P3HvLRWWQATVy6rdCD9AYaYyEeT65kFWGQ7Axn",
  "key30": "56Ze7r4h7DuCQ3MzLsQS7ayekms7qdJNW94TqCC1c8uyanJysbLvs3Q6pWvoDDobDFuACoqwwErGuFSnhpUKNrzr",
  "key31": "29AiLPA8KSS5dqghqQgs3LLfck2mCD5meU6jJ7nS8hqTg26sVrjvVaZvQa5WcHfNUnRWhfz1xZUbfSEo3aQME9rb",
  "key32": "5pCJpgGbXXNw3v24CVr9Yri3c46CYrW56B1WRVmpaL2B5eR1e494WYzEe1MiKmnBfWE9SZP4ySTk9pkoaWNUuVAT"
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
