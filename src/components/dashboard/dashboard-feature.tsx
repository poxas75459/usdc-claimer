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
    "2Nq6jFuP7jddekN2pMhPdN9PBHiTK1t6ugrqSkyLTWTDLNiPKQiGVUEpLmC5CzgkyuwmJ83LjiBiFgbV9jeR5k11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hgmit4XwdK21GNnwAqE3yqkuZH4pbKiGyVsKrkF8qqcDEiK3igcHsk2JPbMkvtZPjYg7zeGymY7Maw1wxYLXSmo",
  "key1": "4fudZhRLyCKxyUWeNN6PUmXUkvvTUv8HEonnK543AoMCid9mdSwaijwpkLxy79fWHrSscYMMPf3PDMHb3AaqW3MR",
  "key2": "5j6XCnSbpwMJJVNiJt8NhC74zEXDVbtcw5gTNHkdU3LLANzdwaCLTugzowi39QtuBwZ4gHA2fw8ZQWz7FgGhq3MZ",
  "key3": "5Yjw2DtqZnr2fXaznDDTmYgeCPNq2pNei1Ub48MwhGjEVzw9rsWHkrP3tVnFQZ4uwwoW7E9vJW3PQY86LMLY5bjn",
  "key4": "5Xpv5B9E6n5AiLLHeBLpZk8ETnNcENixiBqLmGRdxpQ7Y1j9rYUR3HNR4axnGKupBQNEfPDTV7ChHWVSanQch4br",
  "key5": "2PxUjCJx9eqPoomoZvv13fSwBKW8zud1ZAXxaHd4koKPHHktS1KvZkrj5xuizjQWrY9yj3hGANbZdZdB2FDxhgxz",
  "key6": "cdT66gpp2FuJ4UhEsXqaEJDLNPhmCXSJQw7GiNfmCKR1EXCVP54j67o1yGsGJyz5MmSVFLyjS291Vbrt6cLsWXp",
  "key7": "mUhf9SzaxUJYZPNci9SRKzConih55gCyNXpSFBHkg1qBepJXN2nbe2WK7vwqqRqzWPdtcE5WPCfApqo3SWE9TJX",
  "key8": "4TbSKR78pTHURBp1NQRrf43EFUeMYnWMMHXgjKohVS2Cb6jP9xnaCwk62NjNBBNaFeVFA6XjqJcTcPRf1URDEMU4",
  "key9": "4zc6NMTFSRLrca965sgrjDxcC9ojtLwQKCJFLWFsbdUvFZmh4Dbgw1zjBVj4T45nYbuEavxksDvCuQAY8UAAFJPA",
  "key10": "56f6o4A2ZdkGE4HgXMXhHz12JzKyvcVbRsq7b4P9oQdX4RzLDee9CFhhkZ815vWMH6YpKG5AFuisQmfHon2ArsjK",
  "key11": "62dbGhAbqjJSgqFwoYKaVXocxgNqQco2GYr2SCA6LJ38s25Tpzw7wjAEReptf6eV95QDaFS67o4qdDejsyCg6WsM",
  "key12": "5jADZepk88KrQQJ3vnTSS3J7UXvXYswBcPN1umR7yKwDk2TxJTaFTqn1WxQsT1978VPXftcwetrbPtK5Yz3yimRo",
  "key13": "5xiUKxAPiVDAL6DzR8AKkRcC88sPo8CJwzKU7Y8JedPS87rh2hbTwch3vgivx7gBawpX2nLzRbHYFkCUzDzta4Cf",
  "key14": "2tThFumma88o3JbxVn8PjjnDg7SfX3EvWKPwie7odTdPtx2xtnuCQTMmhbcCfM17YW7uQgzFP1MQAL4VWeGsPiFY",
  "key15": "4PLLYrsQiDuMTcnceqxHcokKTYusMH9yaUHdax9GQtqT3fMTY1j1XXLsizRSjZigsrvdpkzt9TwDJJunbvwXMx9E",
  "key16": "3vF3Gvo4QZurPifMofUppsPwSCp1dG4RqYPUY7iLYxhT28ResuQdp2TmvVn1VpVvNoMEfNJdYTmsYPBq7ELK6J2W",
  "key17": "U6yn9ZHgD8nABMRanmTN8DQrLwioo2TJsPLMwK3d6yWfxDabM5fU4UJFXhHrDbJzoETTXVBQ2jii8UjfVmmcRT5",
  "key18": "4Gp2gB4UpwaqPYpGPL3p8hbZ3vhEAhs3mzk2Z3xDM6C4dn6dN5PEAqMQuNUorLh93cnhnhckxtMyPVLRkTpVaXK3",
  "key19": "2GLGBCX7VweFhY48dMyihg5mYqjgeU2W3ZCF2nKBTHuuyrREE563YM7tzysXkJTditWKCin2jnyR6SsGjCbzk2wQ",
  "key20": "21jkeqm1UEkJH4s4wd59dmaefASERmvChC3hwecPmpgnRreQVAQfDRVWE4BX1c5BUMG9UAbYGBXyEC8DP52mEjGs",
  "key21": "4Kbkhh2coDJ34MzKSiU96WCvkUUShGap9qXrXrUekDh74AoJ4pUNUoWr1vA27RmU8VZgnfovoCc44mmoc8mZv7ji",
  "key22": "4zn1x4AozaiSNHtdvpC2xSZkCfNQyqUeKXLGQt4iG69DPxoL94bEd1DZGrqxdUqDsGKHcQzenzj7J5E8EKqqxUms",
  "key23": "NxXg7UtwBbWeTkmmRsks2eeiWPbe5AZujUAVcohMn8BpDvQazgcse4zeCzddXZf65xSfrAEtPNBAvDaCN9Q1ypT",
  "key24": "5y9eryvhyd6KYL99vnasabsk82bkw1aGiKG6Niu7xyvdFVqtnWMcbkV48Y5BjtPiCdVSopGADNir8pVkhoXW3Hkv"
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
