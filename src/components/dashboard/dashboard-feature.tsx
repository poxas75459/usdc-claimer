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
    "2C8pcwaFwweUeVd7pQwQ9CyuUe1TfWVcqQ4NwMwfiBam1yKywaLiZ8M3w3mXY2hepbyuPmPxoGqm3ezCHYBj2ZAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CjMWqzBNV56ezikAbcTaJfkU5suy13m98GZ22eLrsgSKzBFYikE16qzouTV7bggQrhQ4WjCTnGSU8oAX16E6kCU",
  "key1": "4dFdwkztQWLWQbGetYFz6AzyrjSzpdmR35xMiSZpqTEVaHgDsrn6KypE3tPRZcCJQeVcZnfmsFky6mRWrF984xD",
  "key2": "2uUEBymcK1tZvrDHDJkJeshLARs3fkYks9vXnc4s73y1KvvcXGx8Gm86FLBXVns3NEiKfGNwde2jEe3Y2QHvj4EU",
  "key3": "3n5fFGXJaocbzAKhRvxKHN6VjCoDDsPZjRjsQqWQXcCNc9GktUpRTG3yJpoDVPuKRpWiVbQjuahGafHB46yKpNCq",
  "key4": "2x6QoTrfESTjJiSThkHezdpYoE7DeuDDufXHLRKC5HxqpTFV44SLX6FVKAjAjmno7xCxK1S9tgM4e62n1Fs5FZtF",
  "key5": "4KExq4KDaqVpvxyfGK5R6WbYphHsh66osVNoFukPA9GxdrzTKryaFzEJ9J8AMb3eZBmMoMcoXCQfc6jPUvHUHaTF",
  "key6": "4dekzbL3oYiJX3w46ks89ESFFEX5QP8QoF5UueFHivTiXfoXqHYCTzvWugbho4kHbtvPgHhqrDxe5X5ZYSGN4wpF",
  "key7": "5LxoUFuUV4qJ4vyLfoNRkfi9dg1ZWaMAXy3y8hFC9kZ9PoFKb6o4KwuCQV6QtyjAFSGMTtbnukNBGHuodssEXv6k",
  "key8": "2oN5yUbRNyC6WCyen1SK9MQwrcJkWmZKnwzKmrKHujNVDtaz4henKCCm33mkiYMsqR3wL3JuBv9PQnA4dvF71zUV",
  "key9": "3MdgPyL3PbugnMffa7KuiXegXputiecHorMNxZhyZLvPTUJTsGtJ5zMkSBCY2VpZiswytjZvFYBaCgxkbyiQzQQ",
  "key10": "56QhhV8XxUbAygSTxEzp2bMfVrge7NCLRrN6pX3PU5kgaSTVT5ggpe3iEPuYyWj3KxwCHwEsrdLB9AiFJUv2aHid",
  "key11": "5g14HGiUkGv91m9xZzYp1fLt5UeMKb9BqhZSWw3JChna2tuExp888qjtoN359vJGY4nG7BqbhcM63mizAs9qnqGm",
  "key12": "7iMoQirfVbG9Gm5aFy8TqT8S8mDuzZQv5DL9DbVYarYudYPPfHh9337UdjvAHzMmTXnR8JgkNds5eQzbJykrGVq",
  "key13": "22MWod7cBPVXh6y4VjbBZFqmFABbvMZMRPCWTc2Gz96SUypsmFwZqkv7Wj4dXobjC2REGXaLjMwdicgqBi2cKB5C",
  "key14": "37zTPEcsff8kMvphJkFKpzz2DibdMWM7MkLs6LpgiPbY87MjktDseZTWjpsAtN8cgq1PB9WZaiFXREmiht14suMn",
  "key15": "pd1wxGf89ju18C9os3LsuCFgHhT1Cdjrz6xNhCM7DBD1gJmPKoutoezyxmkwaDEWUQpKSKeqsZUXJDSQGBUwsL9",
  "key16": "5GK6XV6c1YidsSR3mgwipYCXgt4e5pQcnnNyZanuc8wuPP3TihBzHdXzm8rR8KpeJs936ueJh6bnEySePRjuz998",
  "key17": "2UE9NHTk29KdooU6tDNVN68Za5HAnUem2vv3e6dz9fQXEMwQg6nYSp2Jo3Tdew4dKJcFvgNyNoy9sDeY3aokoHi9",
  "key18": "Qii1ip1SpAbmQb8NcQPHRfmHNUnDdwZvz7XfmKaxWXqq2yCPJ1CAo518Lv1ooq8VKEcAtQZf5k3YT5o2sbPBeWL",
  "key19": "4NDWqJN7DX11qU8PC7GpgT1ZBKbEBJxbscCf3t92EE2pokLfyAGkbsHDgrKBFyQe8pUjKuSuVPDjaSmWmhdUeBfp",
  "key20": "bsb1MZGMUqVQNYrVv2E3WsWE3t8xGaK3vum2hG9WeP71aHD9YDMzzXxihf19kXXy5p1KE75H44KuzwoRTnskKRd",
  "key21": "2PGYMXkPscoKwCxyWdJ21Dk3nPgCbcK33ng1YkS79ih4SNQNyfrWqYiZJQ38Xtj4YxD7MBRGFEzBTFqHP16Jr6vK",
  "key22": "5Sgm2YHwERpQCw6sBTEqarkPbYLzaa4LDEmgrW8rqSb38faZGLysqYZx4R6jCLY2XSaKkSLec7LLn7z6QTVH8f1A",
  "key23": "354u8dpcqLuqy9JLvWRSKutiTXY2jTP2Qg7XbiEQESJ8a8ofC3dgnbEtxXZ96iCabaQYxqHPbppGKhQGAU1v92Me",
  "key24": "ASrzLUsyFJzUqHPdNc2pqh1XY3T4PtzJhENXxxZNXkRvuHXa3y2r3hcZWbzcAQ5mGB4KyVp1DsBTG7LX2zbf8Uq",
  "key25": "2XxskLSreG3DyNgq4DEo8gSds7eTQX8JUrHSE8KVWFMEE8zzCzyYicuj7V326MmGMs8WN3yFrHjbVYgPjpYN24yS",
  "key26": "3HG5yEMH4DwjGP3iExjYWfwzR2RqucAkXsPLbiSDK93VU8CyYXvwrBxKwq8mvgBiVgug28rCSeE5mymJ6weoVyqH",
  "key27": "5WU97MeyCMW7fFv471jyikR3ynRiEvHH8GQSX6e2MERzif2vf2Dvakj1VW1NFoejdje6u4axj3BqFxTAQkWzBnHC",
  "key28": "3gZCR2xmL473zz9eCLckq6BB5VHtt4so3wiqHMUsxK73NxN5YVWZRxeBokJb5jZG4LdW5fUpp6Gvhx9gDREeT6qG",
  "key29": "4oheKdHTBNRVRGFqpprWhWvtFp6YPZxAJ2SAXkuKK7g54U2AR2kEe7pBTmbcdy5hHjUa7t8uM6kzQAod276qbg5X",
  "key30": "4wLLYqiU42TFehrSS3bF84TVcA6zKqDNxEJSsFaRi9mhsYc8gmoKq4ZhYhLtXXwBibPsTo5vjuDc8doaPzDtnSnm",
  "key31": "tDStJkp84rAkg4v9pU52hAgB1KcKpzCdQhPXXhbbwvLkRpXKNjBzp7ePLcF2cs7CxZHsSUv9iPXt5j2ortYXNRz",
  "key32": "2Pwepun26VKJpHhy5dzLxfWaogPfQfFst5eqq4TWod1PiBmLwLGMEDVAMz83zvn69XgqUtNE4gA1B88etAFQE73Y"
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
