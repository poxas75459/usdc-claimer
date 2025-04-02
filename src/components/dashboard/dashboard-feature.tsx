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
    "3v3MPLigEfv6KrNN3Sy7aoSbJpmPoJSncbKFQdKnXbQ8aLBMH7oGpNj4nqZf6EoXRhuBgAFGv5v5vREpBPn2zBiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QABE1Yp5DZZr3GnbizahyW2cPGzuLMqbzUWSc7gLP1GRZd19rXho4m1dmf8aDdnxwWzmHBkSYmZ9SLK51efPjgx",
  "key1": "5BDWUF7dRmYY7hgmhdGwxpJAWV2gSKCZeqrDy86c2vEPfXDfHgc8A8jyhA9DyJgVmwUAA85ELuHCCCBfeB8YXtvT",
  "key2": "5FfBKkPHHUUdsa2rPpXMXGwoRfLZFJvNnrVD7FsS1kjwN5H9o4hJHhcjcj7QbDNfBNizT9BT4PeJhFe91Amz2CN4",
  "key3": "NHYCHpLvPoGT7XEE5SuCpNkXkMGJkhevtQ7CjpQffmQwp6gEnpAnTzg4ckph3uGBrE2vgtKjD13wihPQnazQ6zw",
  "key4": "63wobSAM6U1B5VF6JduL2Kqhdw9ogJKfbihxjowwti6J4RPp7LWB877Ekysr1wG7g6L4k6Lsq3UQsmftiiq4Aa3L",
  "key5": "4rE3M6XMALBPAhPVaPTasfDWkYzCcBHCA1DWuoycyp4ujKWo95SYMywPpQTAt2E59qdqvTPWGLsJXyzvXzbLY5W4",
  "key6": "4bHYs5Wq7tkSiiHa6xiY6Dgv8h1HXNZo9xrVdWubEURGyh3KuKvYFXQnogT1yTdAJRBWzQARfr97b62tmRx47WcE",
  "key7": "3mxWSRE6xHYXLtBWr2ffoowV5bhsM9az9qXnfi6VocyXRSN4hUKpKkt7gH8zdApjqv6P42vboC4e2oD52G2FD5A3",
  "key8": "2MVRcSY87rn3dJpjcnpVGYvpUKcj5ns6So9Nm1kLpPG75GyRq6A5wE6U3wqrGpB2yREKPsL7CJCP1hChgFcjuZMW",
  "key9": "5NZsvJnmifJdkEJHvznLZWbkST3oxDP2ts8oMuwG1A2nhJLcuteRdGRtzdjNwUYNfB9rSx9UTkDddwvH3pyKXZ8v",
  "key10": "5pGcZcVU3Ehk2jZ5ssnBiS7QzcrZtonzQuSzW5jAMHF3SfdrpvbxWCcQvZGeqUYmSoavTScrboGXeeMtUN9nbZVE",
  "key11": "4q962Q8oSU64tNR1LcGUBHFty656uzqNQjXbqB8jrgi4m4mwSEfLVGeSBKUUpkLVH7ckoGfYbNBDmeqmFcCbzLXE",
  "key12": "2WMFiDfA5MZ5mhu2h1BTTwo4TPNavrhaH6cy7SFbnQVyEfKeeRDGz2u4gBKXzNAziM6NTWKK7N6uobH2LxRtcDYc",
  "key13": "3ZiAnUedVdhfBAYu93xaCavVvm5da78SWi7F4mnn8Wt6Cs2fsPcvujxsZk6z6a2boTuj7WcvuMieh81VST7UFjjF",
  "key14": "4oGde62P2P977PgzBzSaBJSfzih3WH4HgQEu3uRbdABvzdJYSp38e7HHrmRRChE1wmgW5zvNJQAU8AZ6jigA5UKR",
  "key15": "4rF2VNQiHNStcNM5xpLb58LztMumNq1ZTF4zTmrJowQV1TEDfiCGQJPUoY2oTsPtsJiKVWhx4U1jPaTYuS5eDwRN",
  "key16": "2UANHc6sWqqtqK4v8dPJ4Xp8PmWyUSBhYV1kVcSvMmxRtLmkU2eQZMUYRy4wCS1zVfggvWU5ot5Fq4Ln7yGFuUGY",
  "key17": "3zLzHU6fJVUSaY4q4ATuDugP69g6sRbA19p3vEB26F1GrHHfLt9582JiTFGAu7y7j8rKK4c12DDXLTZsRy5Vjomk",
  "key18": "5h77i2qHANbaXMVYF1b8mqS2ZHMPFKUdzg4knxLyqDHg8UZhrA1P15pWC37rqA4Yb5enMiSuTMHVizDvkmjD925n",
  "key19": "291AXfSqC2gNVpk69NNNmueh8F5EWcEfDHaAZRgiazufo84xchZ5sNqhsjCBVcRrYPSV8ADWHVMZoAFB4NUpCgh3",
  "key20": "5Xtojy9EpZYxVHQy7sntPk3MFg9PtskytrxQXAgVtBPSLsn6rrPrVGF2rrfixhousjPZzqSzuqxjccDCNm9WFux8",
  "key21": "3bBZNR3udbMseASQKyzE7PJsiayHpAzmm3Qs44RGikJ3Y6fp295imH3WoX5YFAELsyQqoPW7Eq7AXZqepA5GCCpb",
  "key22": "45xAMqpBmHdRyGuJGmLMNbp63Ea6ihQfroVr9mSyHVBExbpJBWw7qpbfsHp3ZUkRYE6GzSQqyoFjqGLFEyLAPMTy",
  "key23": "9s1obXsA18SmN6EWgKDwW8DkhBiMQ5wYz6yzHGvT5RFQWfvmQrAGdwnf3m8vGc6izMVf6fpgcHdq2BSiSkP55KQ",
  "key24": "5N1bFF3QmDkDZryTAbtKoWghsbFS8Z6kPrt7webeG2W555Y6LdJWy4pCwFqFbMjyoAYFFycPFP4kKhYnXsPdiY5K",
  "key25": "395pXdj1fhTh27rttiah57Ed6nf1VzWHuqdRcxE1PnuNdsJYeHUd4b2ocA5YVUg7eG1MX2X3MdeF7t6WabhVZbgS",
  "key26": "3fqkhm1emCS2DHTRW6J5BTKCpqDfVRhd45JXAgeGvqCBT1NvUVqfZku7qMvffy7Ab2eYEEc6QUWYWL6bj7z3Jemc",
  "key27": "BDtt6japnSSFacoTuXQYx7xbjVED8kfmAmY72iLbUosCzazYSedw3ETJvjprnjoRNYTQua8wuZYLEv6rjF446uo",
  "key28": "2B1ef9o9JjY6UDDEG2cBcdDruaxyc3EyEbY8VCKX137rbgBpD5BkKzS5r4pyh45CJGZmoE3Td5rmjiiDEWFDcmzg",
  "key29": "4hSq64ewQwTc8EQDxRxB7kRyGYvswVRu5xUjRXGAmZYsACtEDHJgK9GQJi8BpyMyV7vpbf6AVotH9PbSzBAHMAD9",
  "key30": "XbrgFGEhGgWc6j1Ja8hw2VpvU9zAdhzxGbmQmAEMmp33btBswkePWEN9bNLaSXHHgHjnNYePiLUYUXFgN7vSgzs",
  "key31": "3JpgzXHdTtexZGWZSKHbEejL7J58WRykVvqhemRUerULVCpkouAKYPFhaHXNaDkPiQ9uuZDoa4Fjemfgy5nmLKQq"
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
