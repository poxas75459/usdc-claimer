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
    "5Cc66hob6nWi6LhALM8twWq9agNnkUhuPkZSrumYrNBj4txp2DAzMzLG6T5qQ3CgLhtuW4FoDDspgsdKTz1m4DYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HxkeSWpUY124FCMuhed41xrhJzk179WBjq4KHmfuUfTT45tgo8jBhqiDea8nkpm1LXy88Yxn3ctCcwpfL5HnK3Y",
  "key1": "57Crv9StjoubYm5HjfjUK4YX19sFBcRCiUWCjmvs3A8hVCT9sLwmW6cGCHojrzxGJAL3FUDR6tjmUwfVmmVtxMD8",
  "key2": "5GY9TNZiqt3rLhD9DiZzaNpCw9aREHHPcSmotnBYvFYy6AA181LgBy4m8yMzNFwZp9heSyF6zTjHGs7AGYQzxbTR",
  "key3": "51h3a1bJvNrnpu9MsgEUncbT188EfnVvsqY2wVKKY8jyBB8RJ2rJeEUqLQnbLzsWpKh8KN5pKX4DLXRDddW2Rava",
  "key4": "3CiqqUbxqqUzwrVQvk4owWoNcMsfqby6SWe2wy69PDQz5izdFHQtN2MF5E63i3wvvxhbTUHY6BPjXvqo5rPoQsZu",
  "key5": "BTEVWRNWAc5wdhCLgrdSqQ5kCRNxL4BSF3e4aDEYw9M2XKgxuHB5po3gUegpxJobSLhFuUw7m8Na54NeKK8bC7V",
  "key6": "4hYPpgZxVBTDi3ABKR3YEM1MdnsQS2rvWLR48U8wteJ7ttmHsxqWPSmTEwAJ16BM7usWkBngzLJJq6RLmQRRegNg",
  "key7": "3VAS3REBvRcFkWEMPVng3REpX7tKir5qnQG9Tzhb4XugCDshL97jfvPW7d6oVMMwhHCdVpPFFZNP4zMciZwprgfM",
  "key8": "22nSS7VWcwsKUqkvS7aUCpDNCfs2sc2akALUrkF2R81w2uoPyD6PYazwff8vxW8HW6C9oeGy7wMXuxspLfXVqRgB",
  "key9": "aJhpAJgryPVYQsgRGktCLiE5S2vFX2cCEPskdGti24j9akrGPGttzwGXSJEzCz6WMvmZ5fQ5yCqibrGTL9Fjv9u",
  "key10": "3yZ5P6ES1Xfm2Z1XDjDALirmU8uRSZXEpBUgWjcz8bBBGL6t1oCkdxBkV7Sfkh3tNsoQz6XUs74J2EQ2zKXqYAjs",
  "key11": "5XsCkWV9dRsKdksVJY91MhdkPDoZBm4YympqVVCH7HbS4jPe5rxcFx4pLGQRAXdy7Mkvnyqj138X3MiFbEXuQq2X",
  "key12": "5XpWZuWDksLpd3dPSuPunYdqreBygYdweMcQDKZ1f3N15JBNGTLrfVgV55xbN7mneggBLjCpqd9snoPSgdpgSJp3",
  "key13": "3oqGhirB21K3hwno33eGBvkq64cyozVEdRZBBiZqtCERrZ6ysz858GB6bu2fn8CZiGQzBzB39bKRL2s9EwMKo8Rw",
  "key14": "3AF8gAdZTqwgjhUQVuRdgA6c77sZ7K8cBRbPWwHw8oVqwDLAXLAYHcpG3irm7hce9sMASGi3NMDFa7WtB9CTFfk4",
  "key15": "52WUGBLQxspGpg5ANHmZ3NL9FDsHt7sVtBfgoDKQPqiTk73zcPiYN9YLbngdL42omgv831PX26ZJL1UM4FAuNVSr",
  "key16": "5LPsFFvp8uZxs245B8xvUivfuz5aLJvj9SnLYx6cZ3x8X9uZesVK2utGUtVNVvqM9udtUirsSuieT1hBLUeFevqS",
  "key17": "4Hyre5ZJrpNxuF9ySGePDtW7Tn2gipuqz9K7opFRakfVQoCEadCer9T5FxS1281YzFEPQ72JGe62oJmFGiJvGpke",
  "key18": "2QG2viNud9PUYMar939a6oba4NymH6ubXqrppqZ7x48XXPSSJKcC5wB6XzDq78bJVt9KTP15NrkiKfpdLxXjXDpB",
  "key19": "4nuLYfQ2TzXfupfdAzoWbJQTQrhjJUWz9g2D9cbMcE78ZYyNLbK3QrxP32eKAa1fGFqWCwK2Mpn8HLFJH6GXztmB",
  "key20": "2HWQcRQ7xG4UVSYz3qzUmbSCD2rvA2tuATRGnHEmtZjxbsVLXTXS1JTjhs8gmw9mhKNY4YbcadGV5EcobhFp3qm8",
  "key21": "5fcTrZnBprK4F9rYZUogZehfj4mrYTnFp8iy9sEgi275iSh2kasgLLN4TJbshRb6K3c7u6Uka9fZcDALXkW4kY4S",
  "key22": "2cDBsvtQvcpdXuCUZyEZndgds75bTDQgo8BCGmKv5j4JhLSN4JAHqdNw3ouPu495AmNfhBQNFje1A434SB7wSPRZ",
  "key23": "39bZ5X7byYYqs5iEaZKgjEhiTtB1WFxZmrSSE3auCGgjfDDKENntFFjGEECv3g4exsN91TkaHHmStgAv5GMBk5QG",
  "key24": "2gqBNq2qXh1xZD7vSZ45DLdQHkphedFeZK2hyc6HYhhg53A6YNzejevf8p12jjFQdNa1D2vYbejTptoELh9CWisx",
  "key25": "5Hh8LZo9XvKZVF9jX2sVyAEgg2oAKBZMMLCVPe9zgE8u6pANYAMUsVgAkPj1kF3jXQPkkoxbs65EkMzR9nfPxyXJ",
  "key26": "3dnud2unuiTwiB9EfptmAGEbGgtZDVeWRTLhaT7CjHdggcd9sS19skjMHGx4tz1GyDXKk66bEQzDuu76dDdKdoVH"
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
