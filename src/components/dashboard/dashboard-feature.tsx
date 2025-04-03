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
    "2KagggHaCJpaQZZs49ir9XrkNcaBjsZBvcaar9QaUhHrz4TwRG1UojeiK1McJay5sJm8V5D5bGh9WeFA9PzggVdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VNpUF7EfGNPuEnYhjJCDLrRVwns3o8F3iiMetjg95jnZ1TRWzeKGYGhjYcehs3EQDWmtT7VqG6N1bq6F7wYwcMK",
  "key1": "34phsAFgFr7C1TYLZ3Jy52J9FaLQZ1cjY3hLNUZEz5XdwZrToaRGCBCUTq9tdx39nKz8Gq2dswhE8iEFTzL9H5gf",
  "key2": "5RntoafJ2KrN6Ljhr9kqH1d9Xn55kLTBiz1y8EMqzgx7wMikJVrPVpoghmVBEvTvkhr5iBXC4Lw8CAm5Uoe2rtaR",
  "key3": "45Y3vGBN9By9efi44ihNEyCu8pnybGDF19emo7YG9P7egf3DAd3Pwz7hSMwoBsBzTsdYKHGnhKa2vemityeWBn9c",
  "key4": "3ZVs4eGw9SHH6Ckk2vJdpY8C9RnmVtZakN4KnBocwFNyT4xy4nqzmLuH24k4LNWRofVhh1PE1qVVjrd8vtE7Pk3J",
  "key5": "5QnXd16RVprWau6KFcAdzPgw7AReXgvyY7pYSoXrT4EU9o7kKV2q3t8r9t4NDbR2KHJjQDkregopr22pa1E7CVo3",
  "key6": "4Ap7hCt8k9vmzaMDbiWvv3XzzeHdygmtwVbGG92jEUAKXQ1WpjJmhtzh7EauKjyCMw2boVcMsqueProjgaAe5Rjc",
  "key7": "5pyd5gRbuxVjRaQEwSpxbaocbGZVrFmPnpZ7dsbpWNk26xzgk3QAfa1LWDZc8FP3phQxPBfYvevbWsmSK3JH1t54",
  "key8": "2S3rAPmV14F7s3snGNf1fCzYCp6C3vrT95Zos5WYyGsUgQ2xx3dpcKfWyQCzc3e71PhhezPFNJgFLNF146CpkpdU",
  "key9": "2rHwHMmjEod3ihhMCh6paBELBRC82LdXJuWUoVcBvmyHEGfpVVREQNUqJkLgPZeLdYZzfrAEz4ku3WtUdq6Hds5F",
  "key10": "3mkaW9iaLUatfAeF9pTfxwNAK4cR3bV6X3QrTCr8To8GWMb7KccLngCxjGUq3RnTMW1sgReyXxHTV52sSuDoQtJ8",
  "key11": "cF7hJTUx6DsA4B9L7THgDQTXbPpfJwbzM4dJ3Rdr4uefpNJehBQenEvqVn6sc2nqF5PuhSzTbwym1BbkiQLyhuh",
  "key12": "PzC9r3J1bvwmkLFx7p7ub8d6my3Y2tiAz5SCk6WUv3cBMjRxLDjEGWd37iKnffENFXUxTiRnr1PUYbkwPhyGpLk",
  "key13": "3r9uP7xweUvQuJbXkNedLt9dMMyVnaNGtUptDahANPCE5dJaj7N7JWNunuvGTiuSbKNJ63fMADkFmgRj2rc6qmXi",
  "key14": "3n7EseAXeupndmNyrZw63SdRWTzHtoj8raSY3PfJNJxgH2u45XyiJeYH8jkYPgb9ybqTGjHDakWEeErPpDcn8orz",
  "key15": "3FRx11P97kzHhwFt1dRkgNoRu4yuF73TzP2JHj2P9jJFnDGec3TQX6NHRNquPt51k64nSaKtaoBo7mCzec7mYy3g",
  "key16": "314kmb5wzY9QvY2F8ZEs1B37qPSm2pjnFbfCMVndFznYCBLrTbG99nX9cv11scspqda5Y36tWaMAmHU6j2NK6q8b",
  "key17": "DthgV6LxGfEAkRCSKMC8honzKLwko917BjJ8G9YyoFntiNJV4wvsZdtfAkr93QjZTF2hszdgPZnYxm27MMyyvzM",
  "key18": "DmSX8NgbGYiTMsXbnv3P4Vvj31ztkF4GZVLRfeVWXN3zkcJVYNhPUkuEzb3x7XqEVSV3TTEvHFC3gFqLxu5fi1B",
  "key19": "2wGfhPeVCmeyaubVA1YvEGVX99hF8YzhpELFedfZ7BoSPk6Aw72wDi8oXQgi5jDVxmSaLqzxd6pBRw1XPwEGKDXR",
  "key20": "4vTNMRiLjDf4zngAAUrg3NzCmpzj1Fr2Zk6xeJw1YzNWxq2UNQF1TC4VRXuxKeUMhweH4jKVuCcAdEtes4VPtE5o",
  "key21": "32o96zGYwvMLBop3fu1ft98NVwnkV1eBEaHLZUa6EkJibgXLQihVYT83aFfLuJUmLn2z1kgVDJ5taf2UDJyJToRP",
  "key22": "5A1S2S1xHrTW9LdmTHJTyxHu85QoubHuJMV12po3idm4Xz9Frp8LwCQig93DkLFRW1rwNEogaWnhiigdE59WSQLJ",
  "key23": "5VHTTVgx21BCiTVGQnP6HHMkpFqeEQDaELcwfz8MrGBeNgqmjX1mzCkvqHK3ZgsFT7N1CTK86rsJhGEq2Rt2XVVV",
  "key24": "4XBRgcWzdYLqHD7wFca677UnuXgerN6yL4eR3XXynFjUBKg5fvUGft2yq2Xksbc7FpFPqkDeATiKyHrF2nRzvdb1",
  "key25": "3ZGfMiKmcF5k65A2Z86XRAsY59bFCKq6xipYfSWwqyu88pJbKM6EAhC9jTgqPyvPxxG96kUtRkYoiTpi6dkHF3A7",
  "key26": "4YxRAer1NtyXHKsKR5T5bbAFGjkYwSedRsyvCzaPxY5pYb3KRs7iqNtUCpikv8uZ9DoYAqB4JdooZ4SA8WM2Tzcz",
  "key27": "4ywoMcbrDr9VrUwQjrPnh3M41HVtULnpTP6V8jK3FNaqDmjePgaZjpB1dwCu8QdmmaWPsvitocDF1BGxi8y4CJqN"
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
