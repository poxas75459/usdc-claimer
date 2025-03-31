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
    "49LpxYmuCoQAmf2J5P5WEbxq9FYrC64S64DSKkHF5yKooeApJSCwSFdwQ3XCWpjjxLbqHEkvbMhEdB27UJqLncPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8rAqTKvFgGaj38WdoATktjWbE9jYYYpTMvKERyQzWLH5ejZehtgLKYugdPg5i6DdUob1RmdPp2fkhhv8LeFbcje",
  "key1": "5ajXHCBqrDbAEA4xtCE39tt3aGNJVh7f624d4zHF8DxtTSV6eK8N95TcNomFqHzaMuH72W3TajynYUpX8eP9MMbw",
  "key2": "4XcGLmzUxnLqhnEkE7yxPxfGmqpzzTkDw7WVPfuJ532kuC7exqeudQY99hjM75tLosjqvuou3r7GEnR8uDWKvf3a",
  "key3": "4YMJhZrsWB3WzcDpyYCkSWJ3dmohX7n7iWtMAZt9uXBXAAms1H6vCufFcwKrAPcSCKv8L6DYw7VA9RkG51TwqwR3",
  "key4": "1PMV2R49qGh4XMZNobohUnTNLJcutRwB1vANwRLsJxVQ9tQ8jD9qpbQZ4UkxSH5MBZjz4bNFzxgiPTA9avNNU8s",
  "key5": "21bFW1Z6Fd1zzzEaNov842NWmHgfv3oTevafVDecy58sXwVR7mE6bUvuN8pfho3oJRCBRrGJoqu8iYuvFbRncZr8",
  "key6": "53vTSuaQ1BFENX4sxbp6RWvMzUc5oSHoEiqiF195QRHguFfaKxSMHa62Hpe2LgNuYXC72FTw6BrNMnvwdA66HdQX",
  "key7": "wWWqMaiNFcXpkS8yrPAnZ55tHVWNqP2SZeB5iPy9ZC6YDTtWF7dFpV7z4khhiG65jNo8urRJRvXjTJQpdz6hjRG",
  "key8": "5s1Age76Li56KPJHaPv4dGbukiMhvKHQMiwt7ZLwzAibU8di9vbnGYCGw9TAXWqep5rZcEo6GwEfbykMSTZCEEXQ",
  "key9": "4UuQtgHvDjsMxktQCZFFfrbffAJuGDvS9P9ZLu37uF1e5ttB6FUFjYPnpasKQZi2qhyxq3PamBkCjYgXbKvhCRC7",
  "key10": "5scgRvipfjKZ6fML1EiGQHPe1fKXkmLrYTjKQFLCQixQmueX2v2hBDT8J9vPoaN7EGquh71sBsEnbLdKvEXNcyFm",
  "key11": "2Ko2rde8CH6qEk7NAiVDMAnPcGpH8uHUqZHQ9ZEBa7SWDfLiFDssNoHzifpXUeK9mvp4kbLDfm1pPbigKhX3Sasn",
  "key12": "53yCCJf7D2xsHKuq8XU8MckWiPo7U64o4uTqx8REMWhRsr8Cqiy1y5LP8yNiDFrSJ4cohLjz5U9J7Vwusn8L9NRy",
  "key13": "3uaCgJALzYpzffaA5BF1hzRdwTHvvEeB5t8QUokPbn88HDqzRKiRztZPAh4fjiPZ5zVzh6kcPCKkLfRBkqjxkdZg",
  "key14": "58HFZ1PgMjEVoMiPNUShpjGZz9Cm3yTVaUnQ25uWSSPARcrndcvRWKWmy5NcBNfUAHxqPensxaZrhb5GfmUVPQe5",
  "key15": "szz998tDPkMmBeyuguBv8ZZf4H1UqYKsZd2YWwVSASx9EMNaD9SqQP7HESxbGW4LpHL2mJ3RNbPAow7E9FWdmvW",
  "key16": "4XsMxhBWRDrJ7x75pJtcmuhH3zPBNkqznp6XZCbYTNULerLfLd3QkVfaWACSFxS2JCnYRKZcidEnZ2knW88k8h7p",
  "key17": "5TDPg7aQynfvTdchBCFjo2PGPVHFCjfSWSJaEffF2i8JVA9ZzFp8MobFqAzfxqjNMpV65U1fYmjbnwRBsd5umrww",
  "key18": "w3stoBGCFraQ2xbsfBzfFn1VoPMFkcPCkAHkHJ5bXVzQG6JX1mza959Hyk1d2RAExDbjhBVErSuqhhTncLfeV3R",
  "key19": "3vBYzUnsHMyPdTKJtdnikTZTGsF8vX7EaqVPa1ntSgABkk3MczyUPtQ14zbhrmSWpUFpdAKxoh7cYDwv3YbrhGK5",
  "key20": "2AuQedeamtSZicsC51C4FGzGDfHzkyvD7Ro9u7NDgtLrccodQq2P8eWe4yaWmD5VQHFeUCms2sCZRKXM3Ny2m2A",
  "key21": "D4PuUcnp4yjEZkruwXc74GYYDfcyUujz3q9UusbaF6piWPtiKSCd7kJk6V3oLDoZYEYddHNozRAVsc2Sw9tHjFe",
  "key22": "3r4Qg7WPQGEt8xHKKkHK3nNNanyAyYtCLfPqmqs1TdkKbxibcHaNBkFRraHpnCkZgW4CRE9N3Nu2JrNMeN27Xzbo",
  "key23": "66vRJ9ddgUp67S9q7dL5xJbUCesPa1G5EjmAd9A7go6BhJyYkkgtRHpKkK5kQMwiQcTpAg1kCktbLctpY3VPzbAY",
  "key24": "1EHKxoN6Hbcp6gFSyixSERKGue7GzNPhqbgUuoHpWWA4ML1dtgCYk3WJWg8UPGfiszopSpxucBQnU7jjHubpSwM",
  "key25": "3Kw6A9DSkAapVcK3rJzS6XrB7SCgv1yj5wxB9gWeCRSWZTYGfMsqCkzDL5zQVyNvSW4MinembvVZaBt9ptvg2U47",
  "key26": "4LzndMas749QPKDxpEB6kWAUKGss1ACPcFN89pkX6dM4vTWaruZDXoxfsEqcD6Q9ZVwXmGvUUNSKUGGVeRHNsXKj",
  "key27": "3qy1W9AVgym6NXPwZFNR5Z2wPSz1pQy4MkQGTAc279TzeVjcjUJbaWbTpjDNcibsaHwGK42MmpRmsxgw7rNE5RhP",
  "key28": "2SsWxEwP41tFEeTm1n89HjUeR2ozyxKSJkntHxLHC4V7yjikW3WeTEz9PP4U12PwKUhcnsdW292BJD78AeVsgbfs",
  "key29": "3d821NqCWbG88mZojPocRZjuBrAPx8E5upikcJw8rQYBrt1SGe7gpi28V3JbGt3zu5bFAn89vfRK6yzS7HugmvtU",
  "key30": "3RZAZ8fnmSRimC7q3d8nGUiif8UW75VKjsDGEArKYzeMy4oWauH9aZJiYEKxRJqcQqMKX2F3K9EFgVXpF3B1L1M4",
  "key31": "DLcB8Mqyw945Ug67bBMDtG3SzFr7GRLdvpBornWKm4EqAtJ7FMsTFFkhmT1Nwd6Du9irwKGo3DQM4b67WJVswKE",
  "key32": "34cw9eTzuretqHo9WFjtHT48sBKDB4LYDXaGFAmuk1aeFJuXB4PeaZ3wsTcP87gs6Ph9wm9NMinnztdH54Gkxczo",
  "key33": "5jXJ3fSX9dZ2eAoE4Y7Pe9dVSZP18b6TpLYpeD3h3stMaHmUEMk1MktThorRpD7beeYrheh6H8hLmPPy6AWizbiV",
  "key34": "3XasZDqrpMCyYH6poFrSsoMKV1StKvnKNwcA6m3o4nSuv7bpZUFqdwM4xqCcsZBQaCKAxMNgFDhA5WjJ9LGYEHD1",
  "key35": "4wTHXZAuYX6WBWhh3QGVbzu5XJ3yAVMQGuyvfk9DDRrnPq9JCJ7HjqYhjx3nPLXJp9Rbx33X6SSsLWSDeNQLLgWk",
  "key36": "3hggwuS1sJExxcFn1VuLNA2UB8vY7AFJcs1t3k91MDrCvgnN8J7ULBBw8gJ1ST7p72uXf6wMUokQhn4nrptSgBjZ",
  "key37": "3tBdocojEX7cFXefQV26VsYju38nHkf3YqiR1xodtctSmFM8LxJ9Y9ieewDR5m77VNL3a3XvcdBKW1v64aYJbe3i",
  "key38": "3GeogpfpDHu1PGk5w6oqrhvPA7R86joi9LFXae6BWV4bucGGp7HxGBm1gT93fp3PWedx7RMMo9A3h2PXr1zqzMTg",
  "key39": "3WdEdJETc8uh7e1ZkN5ktb586H8kJxQcekodJraF9BQTETxuWjg42hiWkCyGVQxiPwb7JsdwBbJ51HMDRzU7YLyv"
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
