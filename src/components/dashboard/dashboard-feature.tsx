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
    "3tj7Qc72n8C7UtjkdC1v9PuhFg5DyFWeGSygUTSn7G86s6i37c5xBDQ9JTWgL2dB1Q7YrvwWwLvWcbcmu4gL6ZBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "238soJviVNcdFYmAuMHnV7NUEUSVvVRtn8gENmpADWApHexMMP6izad9riMoaibXndHDvLrPte3KUr2HMYazNHBy",
  "key1": "3dGurwGzQ61PdtQazefVeZPCPaqWHhL4gbfeHnjJgeiAgGUACqX2X7YF46FgG3BUcLDJwPa5VddvJvV1aDpy4zDv",
  "key2": "2U44Wu8HJpqF4C8XPQZrQKK3BRFFdkzXCx4Zf877CArCMk98ryzpLrmvRpV9fLmt7hoL6DVAUiqCRR3jSQ5FpMMk",
  "key3": "3VRBMDioXTveonZk79zt5PEs5j2qtYLXyUxma3E6bnfc4d1W6tmeky833xy7QDvTTQs4guxMKJhyUxqffMrcZ3NL",
  "key4": "2fZw2XqvhdYqUT5ENe9MSeThg9fFgtrVySSDhZp5481DeYQsXVr8z7bGHnvNT2j9jb9JbUB1p23HWKvkQvaqsKBY",
  "key5": "44GQkK2H8yTkssNfBPfJMy7Z4Fbwboxw3Mt9czDMgE6vgbS4ZzsBYu5RfDs9aU5YKw9kH2tmDAJewWJZDHtViwuh",
  "key6": "3wqxQxyzsVoqHv2gFo1UJS5ss51VFPnC7D91n7yfs4Po5jYytpxVExk5GSdrEBiAy4qK1Gd818FK1K7hccdT8Nki",
  "key7": "5Cb4JabwBQ76AssqETmGBRbEtnQQrrestTLP6EqCuR7KbxQiVC8mrGiWfxP95fU4edZpLwEmMLYvFzUXhjqqJ8dS",
  "key8": "3dUgCFsvP5bvp8ufVjSNBQzVmDxbo8B8SEGscVRbjskgWwub7BHMShkanGoZJkK17VLHMc87ncKVkwG7cK2wJpBx",
  "key9": "5o5MjRGDozFbDwGiEaDdEaSbdvyaRDFTow4Vf8cFxF3VCMty9M6cHfhD1YsuhJLST1zdmfzPEUVq5PKQr4tfC6Lq",
  "key10": "4kQNYfx3uXNLJbMp1N22h7rv582Z3yMt7geASM6SoWNKfLfqKugk3LsR9PGrCavzRkVXaeiLaj6rNwmiJzPyTAg6",
  "key11": "4CyUb5W7JFVd2aCNvLX2jpLC2XzT7hszcNKNdwiP3RLDNVbGfzfxbihFbTzE3989axFA9QoViDQjbX7nSA8udaWB",
  "key12": "5SNM8VJ2SsCRUQqErK8T6HZYF1YpFN9ATFsuMVS6d59hw2bZy2U5gybQfHkAwBameWT124Js8QZqPirUy93uyrEv",
  "key13": "5wHpEtTwsWymHuhGRAHgu8RQGkUB5EX4eADd4GCmnBEEs8SPo5iQ8hbgvqTrvE59jhhHJWdVransaBxdRzmuykNf",
  "key14": "j7h6oECEQZoHWX2hbEv8yuiqF52mgJidkp7b6C8JMSH1FRC9ZXcz6meizvWtVRNqC7yAsWDLQrmHesfvSgRE1H7",
  "key15": "wuvmZPBDSbFsodCR2eEkZb7DViNAzKVtmcSZySLv4aXz6mkhUgWYr37QXuuQrTfRFNwFsp1CVksZw26KfT9jmqG",
  "key16": "5xYAcm5Ey6Fvi9RkRBreUbfdCaarHt4hi75APJMn9pkJQdYdrevNFL1QDhiSMRUPz2TRvTUoeJ1zwAyRxWRiB7kg",
  "key17": "5XoRosJ2c4zBc2vq4VG4NKeaMYa4WjU1NsiWCEQYmztApKjXkdDDdsh14i2niym1jxKXqFQrs14QpKV5fKbCrsHj",
  "key18": "2tULsn7Mf8Pdim4ocf1ZdT9jAoBXc8ph5Qf3HFf43nHbP4xMbb9CK5K3y2swFqmY1ERNKiCJf7eEcyfbMLywcb12",
  "key19": "36deNVByZXtd7YXzL8vDBj2MbLX459N9XGzLmAMvojLvVWRwYBN7CwjACKjfeDP4eMMvaCyF8d4XMevr7nxyih8V",
  "key20": "3yryVhqCgtCDPLK8Z2zLa113KejFovmUNWBFBVmMcUdE9E4hFZBs1m8Mq5GfWpVeMQmw9tnHorXWsbQnrWFDh966",
  "key21": "64gtJC4NhLE1sE5oeNRMszvuE1wSoBg1ao8jG62kUvLHBSq98iMdN8NvRgnwn1cf4JA7HSKaxG5y4f6jBBVACnoA",
  "key22": "51WLfjB4V3hcFvUhQYLSfYWFDMu2PbUWwBLxJ8Uf1moL9gCHTyQvdayaEfK5vu3eHjDw6rz9AWQyGpztEd1b4m2w",
  "key23": "89kGsR4CPSyyDTSjjz5jhgkfXPv5BsXBJGt9VJDZ4esSm3MXAH1VrKEr5DYJAvScvmt3btyeHS3vevtEb1r7xfF",
  "key24": "5vvFQezBTVhsAEk9XL1dC8AuW741fJK9BgGNS5gRjjFpny3fpsSnwtc7YM8ZvHzWuf3CF24N6FynK5mY3m69ZTd6",
  "key25": "4AB1wekof1AGoZbtZUkP7RK3NjxjbEgs1sUP8Ejxszc6FHKyo5b9HH7tRWTMQ32uZNuzgvZscXjbVBckT2gUZhzf"
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
