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
    "YKgygp9wQhxbySb482uPxkapgfEnatGDx3gJtxwy9SXEMEfCptBurXzxyxpc7E4WbMxBrXXa187KBkEVLzHmuax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cyneuw7bFDifmTzQsDHRAQJZA7jbxQHVBVosXtZrbkfnWCP1LmdbnvpcUTVaqiYpPUKiETDntZsXBQAznUsWCnY",
  "key1": "3tdy4ADZ82TGP6cFmhdnLDrw5TgewFJzeXjfETHcJdJnNeea3XDEkNUN2Mw3MNpUr2ddZ3Hq4a3mG887SvaZLJ5x",
  "key2": "aFEfX6th8HDCpnq85QMFUDKf11Sajy6mcqrdg7Atgv3uVKSrEQAt4PMhTUXmRVz4FoNhCKdysU4VyRE9pJGvDBZ",
  "key3": "tVQ6cXbRijDFb8L9WFs3SyExPPBBT311Ass9y58QscX6mGaZZ6gV4S42Ld5PY7pdyJNteamEZKKCpoVvpTz2Hni",
  "key4": "2XTfCSDgUqV2MNqxGUN6PQjX34HXr1HGhUygNdFfDwbBAbbFuuh1gNpx4G7hZKpGF2jaR9UHyJK8NVYnGcqjKp98",
  "key5": "8sQ4y7FNigMyD67KV3jBGxY5e9ZbpsgGmKywoswMTyAUtymaBwvGe9wCLtfigNbt8QZFoodeHshkjQN1t3FYuP6",
  "key6": "4hZyrx2y43hn64HFSkchuhJLoAsNSdNafohHDotjbHEeWcXfcyF1Eoa6bLZf3EDnizBZqVq5n8JWkxFn6F2b6Ryc",
  "key7": "5Xc5VzEkQhqG4e3a7SwJqYq4FHw2L5GxLsQPWcN5bcxphN1LUnxfx3S8PW3zeifn5EQSErF58PRJyC2X9FzgnrDF",
  "key8": "4xghEV4xu6gmVDJV68GvLsfXVWScfhSeyeSJP2H6QPZbW3uN4y3sdgwRRMv9fiKitUpf9HidUGG4jW5VTmnV5qB",
  "key9": "HFYv9ACqbzMhvGTfZNAvphJii6Y6X9hCRPMhvGPxvMpdQ2vnUvsfB6adhLcT6uCAHaY1UdHWnbDz6gx3vDhdd9z",
  "key10": "5wKbHPoiWsHyiJrAbYt9rfMs8wu2YNWwcxRWkQB8kbZmsJpgk2dKHMauHPunNiGteRJqJQwswHpNfj456yadrTVE",
  "key11": "4myRg2Nj8FwY9vraMcunVMZPck6tuGC3pc9ZFoBmV7f1znXSGXrH7th8CfF5NsEuzyUrPWbokUNb3o4mRvE7nC1k",
  "key12": "2AzazADQgjU1RUGbWs5kmtbYovCv8npYJgfd9qAcdz3YW25CLWiV4FbqS7vME6cLi2VsJjKgPHESa9s9wSTyrp5a",
  "key13": "2tHNMb11Zj1q3xThCtY7tYjGRCDpsWA4atheqPtAwmsYBab5hhyGm9nfmVXafM3cWVJhNLe7yF2obQ7wEW6U9Efj",
  "key14": "2fB6UQG27vRERBv3KaA67eQuUJMJysRPzp8in12ghQVb94TqRiG94ZD9N2UrSaohVaYzFkYpRJofXjF4amnyhbrM",
  "key15": "51KS2FvunFN5YNDG3q6CEyY6nB44HPnmbFSnSauzxJhG2uJoq5mFHW9wHCyzrfyVgtdDFkdrYvceNzA6Z3RUug1f",
  "key16": "2Xb32UQY7SAgrixtDTS6W9AjdVX2WSeqrEpK4pgLJhdsL3jDSuidwKYaTfnhuHW3afdGxrqmQmSfoNazF4ZM351U",
  "key17": "3CXuR8trZHoEp9Ys6WCYXmAXxshvDKMz6faEaQdFTjb2z7eVRYZMPrTx8KzCrHuUQm2dAkus5ky8d8ZZQ4Uge6Ne",
  "key18": "37syuHj4xVr6FE98iQ1Pkrg5pDDspu3u8WpjRhYwmvaV2vm4bBZBLnEaU9VRSqMrayp1nPQjqwpbNbiUU4Vxvm1C",
  "key19": "2xq1txpSnTG114YQRSqKVCnjRCyNdcUw9DH1vAJeND4HZ3SyyA6zrtVdvm73B38tH17SxV9hWPnwX5rJjVjcjE6U",
  "key20": "5sZsbK4cNH7DGtxGmzkaETYyLN7kh3GtAtRwySLCb43jrdikPTd1aPN6yyifYBACqPGQdy9sHT42vYZJ1Uz6sn4D",
  "key21": "4R2zzcen1kEE6QHNubuUTaPZ22WKS8h58VZvmSFQdKjiG5kg8SKGjZYJZDbcX5GPWM2DXAwvQ6jvidS9B3NUFrCS",
  "key22": "5KvxkYaM94euN93ED249EErufLPSpFuzwTrDDBMCjZxbwPWej1KoVF29hvK2PLwzddQSoHcNkwLXo2JKQU75Lkih",
  "key23": "4jZcVmagzFSze9W3hVSdK7JndLK7DGrjsVMEhTd63eGgWG7kMVYweqm9qBK8WnezjW6yQVU73tPCW8s2XxW6zyqP",
  "key24": "LDCYisqBPot34WTUZSb8Bsiogzp49XcQT2LtkyCRaGxQT5ghYimSYyF43XsaHUCALKKERXSuZdht6yLJHiziitK",
  "key25": "RejdngTnjdCSwTaJgdQyEY1UVCCZU8PXC452teXAtWwQ6wu4owdLtZDU9jVFgARozqR6JZZPE4eDddxUsh22tuc",
  "key26": "BYpEcLT3u21SYunCTFEByR9mEUysvc9coqQHC2TFruvPQQqwnFdoErfqs5aeYkjevrzjuyBcxHEoDZkCDop2oQy",
  "key27": "2xkoBAoW1S71xqgvgLDLVxJAX2mdLkcHPCgfAz89jUzeb9L7Jw9EmcBrTqPANFCWXBp3RF81wqwetG2iTTwrdCz6"
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
