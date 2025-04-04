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
    "vSYMhaemwo7GoMqRkJjnVmfynaRmi17EGfHpqkdz8RujHi2ewJt3MsvwAZCtSa44ysiBcNDYyvdgafKsvKHhKb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vsFg59sFy9oBAer659RPka1N5DEc3DsYeG2AG9syhRUrE5bkaCjQ7SQ8WTuUjbPcA28JttGEQ74H6TREHb1xrAn",
  "key1": "4aghUQiaRJ7moKQM35wxo6wyjZPfonuhBfa7MxBcCABTpwr9ePdP6cuZnqqsk9ZTHAddq9rnDYn4UcpobQxhhLv1",
  "key2": "4X3pK64KuzEmx5G58WJ7BkG7F5458TnNE5ULUFk7xTFvZKMjUJPWJqyLEgdPQjPVXog8aTgiZx9b998kx7M3FW4K",
  "key3": "hvpZ2iUMcdcBj9iUUAQkiUxvEwBQUse5igPhuyz2cA2rJiZNAmQUULa6uHrzyuW8YApZLRVt3bdwL18xyUnpyZX",
  "key4": "c9umRkwYYQhhiBPDCqRJuaw2mWWkFbhRmXeJoSYmh7MaskNzwWhzi6wifrtro8yZqKFkxkqQf8z5wA58A12RXPi",
  "key5": "5CnyqKkp2TaXWHa6Kj8iZou5Re6txgxVNuptK6Epo4wMHJhDxxAmCPwiRoADfYRizMsc5pUUHNFANET7FasBCt7u",
  "key6": "5FPRxubUSeh45nV9LL9rGuBaYXp3bq11RCBrkaSotnW4cuLpUcpXQFbL6NGsQuEu5XtcGMWn29A3c11UfNRR69oC",
  "key7": "53RgBnHivRRuKhHLgQarXp67M4Pb8bVn1Vv8foJVhi4i11hQ5XuGWPTHiakT8BpwtpQHADyuR85UCHHXJ1bm9Xf3",
  "key8": "4Jxh2peE7dssVi8d8gLwnSN5sgRvojxbxVFnUZMrPUEBoHzeR9kKMjqpdfDLhukY7wQ3CFjzBtnvYyGK8o7P1bZu",
  "key9": "2zKesnpEz5EtBvX2BK2pufCnxdCjc7e7Ro72LGHpnMwNCrqTJTPr95m3pwCeoauPPBBuBMDW2jfsJsyfBc7g6Cbk",
  "key10": "3buxTEwD2vo4qzWQHLETXp73nHsa3zNnShG22csGVLhjn7iZMeUK2Tu95tXGxCvgWgazppogoKxnk4eEq3med4NH",
  "key11": "3twALcgqQrvs9A2vMfNeX2Nvvii2zGDHfHzx152SAt2wnyE8LgfUcWRkkAUCKiNmUPg5t2RL7yHCMJSmT1FYwttv",
  "key12": "23qbq2VQd8imQUTcKFpJbMaZYX84vpdMde6oRV3J316uGcQGAnxFaGRRYhsnrBy8oD3ZYzPwJ1bUuaWz2k5vKRuJ",
  "key13": "2J5UVBzdH55YosSZ3sKHBESjvZNiXN2fMSna8pmKhVgZhXBt5t1jzhqDN53PMAgAHqGXnpcRzmbQwMQFbWJsJfLa",
  "key14": "KZjemCWDciXyZf2PgdrAjYT8FbWWYa6EVqBZYyLWtpGcH3DkYWbPV1kFmqzTPpK7x46osLEkd4ZGKwmd71MfoRf",
  "key15": "FynuRrE6PHR94ta1h53z5yCFfGkoysPheyiFCFzCvt5oPFaeVLEb3EfREzdPZvoBCWRyQRyn5tZoH1RpzAN3MJB",
  "key16": "2tuzhY9PKvJo6zhf2w2SDSnjUGJLhuKFrAVczdpS9WKaBbYt6deenz59YRC6T3eF4h759FYvBoemR6cDudds3fas",
  "key17": "3drTN4KqwLfEStcY8eV12GSzYfHT3dGKWmHodi6HPskXg5xgC8G8A6FRQNWZnyMucyiv4fdMQzr6Q59TByiZtBeL",
  "key18": "5BehXhen234Zo8uRf3Zsi3wEFGMFiHnFtBuVgSHPpqfVAXW1jxXaSfHYaGdq32EzcK5JZ9fd7sZLy7AMVhixRm24",
  "key19": "2MMmSGzVpTx1pAzJnNcEXPzfwnVUwzUK44822WpJB6mJirUizQWzyWoHs49aUGgV3Dz3uJQuAbcPvBhhyNDkYSvg",
  "key20": "5ZM4cvL9NV4CvRbvQVTJKBGAXKcz2on1roSG78WcL1MKx2Jp1BqAVGga4kJDx9z8Gfmm3qHrowr4mrWhZj6XxfLM",
  "key21": "39QziMToTsdRdzT9N6LK73pTZ4nYJNKegEwawW4fVuDyaJdzTH1WytCrePhYJD5nwqXKxTdYnKSYxxXA4EHq5sCH",
  "key22": "5iTGAHL8RjzUfqSaZtpmnKVZR3WA1omxb7J9ydMqk7Q18UNimMWghPtCcYTQG5oX2oBgeZ9XQ1tWr9t6FH8quDeR",
  "key23": "2sQW8t1pTvPjXBYppdQKCyTt3qGVHV3mCf7qTKMeC6bQ6vWcJTnMZANLBHGkGJeegPXqUuQ4HzqpQza2TMu3UWws",
  "key24": "4LAJJFZN4FuPYwDrXgXL3iKYGdQM7G5dD9g8L8FRQwQma3fj1KXZLB365wBV7tAq2N2q5fhTYp8j6NxMfLAzaKDA",
  "key25": "57NvXWPdzAeX9DPuzBPkALj7okKtCUZTzEqwbbhHYDNk1sfpMHe9qaq72YQuE5NeidHwyeVKsVXEwv2FDWBsSqjZ",
  "key26": "5RXzr4cyE9bbZJotJ97sFMAoWRjPryizhgYWYJgcARVwdkW5iCabFzx6ZcFfAaDGvN7TKca8SrobevUpoXFRuvE8",
  "key27": "53ienMEpn9AUpVD6CcpBUydgQ3NCT8zuQ5uYJWZj349CrH1RettaHTgKc1Hed2D1XtHWXmyezvqhuhhdTqejnkmh",
  "key28": "53uBRoEbBAKCSFgSz5aVbEXhbvmbQeWdQUimELjJLiqmZqHucL4uvCnQqPtkKWnp6ev29PGJekxrsgL63sFFsryf",
  "key29": "3rVMqWCGo7UjLzvwomdkgKzwxVSKKJbt7783JZuxYgesAmSYsgvskUXn76bQHtoAHskzNRCJGfYd9ZSJzr9Ac86i",
  "key30": "5TbLc3qrmVKGEC914F2sw4hDqy5VaJ3eaKYeTCcd3mnENqMYcVNwFtXFbY1XocHC5XDcrdEhpuRXymenrXeNdDMJ",
  "key31": "2rP2KtV358EeMV95L7jyVMXN9675WHw32RQNtETTTduh9AusuysMfWbmp8MCGzMBx543k4aMmn2mmi7SnRttxvTU",
  "key32": "2rsPtnjbyXm9LihPAEH7bymYk6G3GrrM4U9ZTtwLV6GeoVnb5e5wadn6S7wGJ7ZBn4tvGUsAtuBTEuVB9zGe1smM",
  "key33": "5yRaTgUrmc5NA1f4qweEe2qZ73Qn3ehU1BikkpdemFtW7A8Q6CXVBM1SCa8miCmswAVqD9UcMcLFy7W83TBrXTkV",
  "key34": "47Nq6quf9RgEmWwck6EumiWACHhgF37aYYHDxeYAU4Uvy9TBVrEcEaMqqxbHQTcxX9ceVT4BVCmdmzaJLMbCpbZj",
  "key35": "LwgjCmdvQkAfy13Z3CxUDZPHhf9Qj46eti1KsefTTbt4HMXV2Cta7DwMcRbYDUjY4EXcByFTyKNzjTC5bsL7R4g",
  "key36": "4ZVoBX4DYCKETox32mpN1BdCEpxbtAJCu3c82TboWwYjpQRNxLGrHw5AFtPgDanbHuNtSpRawmu7gyXj6ZqC1cFv",
  "key37": "3TbjSiHxqmw9hC5xMn6Fg1UaCnJACL4iANjVHreGen1ESNzXEYSEeb311mcnKEX8pcSG4ufrs4GLTunpEc3K8ffb",
  "key38": "56tRCuRuL4Njnc7uQdCbq3eN6VDrjvonx4FCCxBrcNgBHc2TcSP1vsqinXh9NiGaxQdYoEf8v4MScEpkr1ZioVUh",
  "key39": "4sTD53nHxD4yafZhfgQDcvUU3D3NLDEV2B1HXDkdUbvEGaUaWEtshjE1RyagNJUvQAGdPQdoxnetGHm4nwRCchdB",
  "key40": "2RvXqDZRA9NKv7WE5oYFNnJEnTremRUhBWXHmvY4M9RrLBL1Zz3G79STgvJj44owrA8Ukco2M5zkgJAiM1CDuH9N"
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
