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
    "66kZDBkJsBwpm6UwevRyQ41LaL3k57o97rYDJyyvgLGTuhSxboxHbxNCMkae1GnHiMvbyfUMZ4CsYic7o3L6stDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d1f42uUmLcmKAbg4uQwZvGBWn9Vq5D2sdyE9J32pK5VrEDxUr1gUK11kXmRjRS8gtAwuzsQQBfiZyVScnBWj5K9",
  "key1": "3A72PVG1MCSMKLSVqFRJ1Vu9f7nSxrRWmYsCZ26Jt4wg8hQkm9jmFiAz58aSAcUDYCqNhJM16whoozDom1MTsLBd",
  "key2": "5LUYNoRhqdx1YDsYYbZCSqJ8nq5A9NVqYnk2purkP4XT62sinZJgoYHjdzJeagPaQ3EWnaR6QVRjRoLkV9GY5cYr",
  "key3": "4Dc5PxM6fXsAYdPCoja6qQXNZbAEANZqHneZkXMXh5FWYpWQWb4WEUt5PV9CSiFGABgYT6yY3HWHsiZTQjVUr6Nu",
  "key4": "4phZMVcxhVDKBLbyndqGFBZ37gBRrtm8eQ2s7SYJPC32B1ZJiwA38LqPaH5cazuYVjcod47FxwwS8UoiHoq3Xrjm",
  "key5": "Gi3zd4VKEwaxZiZzA8WmYQeBh9JEWs1eUbrzD8iZq1XqGWjBjtttQFmF6PSeANXC1WPuhV6zedC9YBkSKpph3BJ",
  "key6": "4CQkMXeg5qeKnig7Dvguo3ea1HwsRqHaYACXsUkn4u4bWH2e44LoHEBck62wPX5K6x5yLkJjmuSQWryDQqqbM8VH",
  "key7": "5D5MVgw8NkoFTs14ci1YrrPKqAVPcnxCjEyWxvKVSGcExVxojtnszZCxTyjwVvfhh9SmmUNax6H2r6uNe95ZKxxx",
  "key8": "4XgH6amGaxDrqSyvkXcwAN2R4j8HMWjCk44p9pMsQj4sJkHWR9CFseePEFXeY5Q2uSiwFG7nPqXBNgzxce5M2kyq",
  "key9": "4Y3vtq1wFGYgyU6G1c395PXmD38MtYcNAyCuRSKK9LDzT326xDvS196DwEvZEmFnvPjoeTTa55mLcpJXDjDfkpKu",
  "key10": "3SzpALbchqfNEJrsQ12YJ8fpxHy65wn2zSkYQj6P1Cm5vuTnoUCCSmTpyzEYfA7N2bjEXYHEaMALasDbK8j3Ud6C",
  "key11": "234jSrhLgp4bfXebySAx29G9etoBmPy1cuQFTNEeBYhazLDFTJTXukb5s1eo6YLAJEnQ4h61gd4JvAhQFDxVFupP",
  "key12": "3kQ9GinnSgScRQCd6wyU5aMndpQb5CacXSWiyb4hAoovdZUNRtHh2doGKzaegeqB9hQuNpm57t59TwV5qopzcCj3",
  "key13": "22PXxYdmgux5edbRGrEDigGQY3bQvgswHaatPQ7o7vCWE2B4mmbe81nfAh5v3D6FAeFx6u2eRYAd2ACz2SNVod9F",
  "key14": "22gVuJruz37FecKW8iRkmAFTzw6TxS635L47Uimo2g23KPHFV92ugD6k52MMAARBYXiDC5bKLKuUFXgaQXG4fugw",
  "key15": "5sbXscUERC12SCMzGQKcPiJ43jjG75k1jUgPUckxTQooDeRc5DTXPz5UwtpECPAjbxpq4VJFVxpSw6bZ1LzCTnvR",
  "key16": "22VMfaij7UJ8Ukj4yHzRkCNU7XCMKCHTiuu4LW9CpPMQAFPHW3PD9WEeGZSpDWNjpca1BgVnKSRq1STbg7jn1TZb",
  "key17": "5K7RRqRpDV7KCyr52kkNGkvEuX6nRqiByDdfPYooaKJWbJZpyKu9dhtT9g81tMo5EoEFase2HEY7UwyGj2m3Aqq5",
  "key18": "2q3XS1xT9D8gDUkpD2QdeHaWjaGGWGL5vLEsif8GTX8MGe9ssBuwQ477FLdZj79iN8GXn9L8CSAtCBJ4QjXGCrrK",
  "key19": "ZzpUbXnvg6ZyGwpp9hvLdcNXczLH1RFK9Qc62J8DJh2V1C8L81pkkjhoinRvk1xxuCVLgxZTafWsAHrptBa3i1x",
  "key20": "3HYXRFVFs8BQiwtGtroF5SKYNJ2KuNsW7nZeixLjjirnK91qWiKzYXnD2VLZp1mL5jzJGftULGBsDKyy5ciU4JDR",
  "key21": "4uXCzehwqSL5VCp6VEx9rE4u1Fsi2SdUfTQYPtSnhqtMHuaEV6RXme6UyukuWmcCKhKiYK6QgGSzetuKuoUCtSv8",
  "key22": "37mgyAWfXd6neK8Q8zvGozoqSaEvH7mstP7pn79nVyN9z8efECJix5EAuayryfDdZ2rdHr5XGMSd48FbcV8G2GSu",
  "key23": "3tPsy663qJHm8G22qPJxta37MFhBCg947J8qUhKsb4RK4NPPLKJzwtxXxUx3RDuXirrPqicJ6T1tfj98vVucq2Dv",
  "key24": "37ViabaGQGz8MZBuS6Tuw5vap5V9FzMrPumtRCqfD93n6HvCuTQsE2jRhPdwwU9bLRSPcC8LonSra6S5DcRbzhGz",
  "key25": "2jKEaYM5ZDUZLCJNifdSkURxmizKPV6P33rG7CUz4jDKd292HksKeEN4JMkotYTuZGeYcsYsZrBPkzxxwPJWPjFb",
  "key26": "4NJRZQSCCcFkY98zQByNjbed9j54eJwHWPiHebjJUFUZL7MirLErgPn3XcJiBVjZKtA71WmkzX577T322kHBPXiQ",
  "key27": "23JJaCsi2XgevRnscyf6UAniuAvVWVzCjvSCnYKcZJJ6RZzT1g1vxZnw6r7Zfgu8BsGEibi7W2fURDTXZkyjbgPT"
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
