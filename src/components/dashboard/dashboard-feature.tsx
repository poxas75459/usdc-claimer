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
    "3kTKTnkX8NoSHHLZ14E1vp5LVBWs7etVKBwRTZch53tLoytAt2arobkbnJHnmgdD3WxdYzbaj8aamVbBZpgm8wVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CuWLPitNbfGnu4ao8oL1FscFCrSRZ4XscRRSGxukndLbkABhrgEdC4s8SSNduLvHZmASuGiPiW4iS2u8i4QASWG",
  "key1": "3UukNoqJJJtcTZgeQ81bAYoiu5seeTkgyv1cLZepEDUgNwfG8oSKWXDcKRrdZKAP7iH9C54pm32WCD9WopMR4F11",
  "key2": "3XRm3RJMJYiCsx19oPgukmcpNarwwA9UJ5f74dD7u7exyhSQzWw2emLa92HQNkhyg3u2qddMy5bCYNvfLx2aSPtk",
  "key3": "4Tqxu6GmUB5A3DZp18Ci3e8JYFewgsCghj8c3w16UAiqfASUMEKKj2xUkaq2UJrnhBRBhphthwEuUCWeNrXpX9iN",
  "key4": "57TCFrQtS7tx6eD3yuQE6mP9BBK7BzNpb8L1Gj43KCf3BL7126ZDvRY5Roa7ezkgAw6NLZq5pyzVcHrufLwT2Tfr",
  "key5": "3wctDUDdqHmwGhAkkywjwPc6NKNg1LP6EPu76u74zKZTrokVAPusBgWwcPE8F4jNDTcskhJZ1wjvepwAsz2tJ3zS",
  "key6": "bUyzgjg4YfXmQVHXxgkyGKUUmn8xBKmMWh1VPVmR74xNvk3qQumHkLS5EX6DKEuCTXomEtuuYyJ9yVJm5rTAb71",
  "key7": "CADQYLHHenhJcnAikcnpCrGVdW3VXz56UJseb5C2xfb2Puv9jPSwKhQxGUFq7Y87gnzqxG6swjqow2RWvgBzRDr",
  "key8": "63xSQhp8ghobNueweKvHtX1CbLqgJHw6XTBhgw3HPq4QKfneP4Dmeh2o6nyJabbV7nThcq6ZRLngUTZZNXC2uhLv",
  "key9": "jkDjPoHz5Gwr3MRmT1xe6m9hEj1djbYNVwZ2aaMJoKEvxaZSZbeM31HhoKbgNvneFQ5UeGkuUDBa1xcEWdP82y5",
  "key10": "HmKecbkBgysWsMRWDR9xTRJbmYJzQLiFNueQZkVmQ1VKkkCqLcxr1VuHDNRXyDTkUM85FFrD7vp8KkuMP22m9KL",
  "key11": "38KHxSQbyzwsqn3mviRMMKFFWCFuEDpekRQ9AkF12aVwXb1SaLGcN9cavBUGsx9gJpgbyCDCraLKijgGMauU35j2",
  "key12": "EQpi7C8QSfy7MoDBy9N5iWRAHzavoq2vSAne7bWNGvnLVbJJfXMF7c4cXfDhocuQCcnRf8exmsuL9kpnf7baPoG",
  "key13": "36WGz6CNEcgJ4AGJzFG1X8LUqkSedHysG5YMwRjm44cJFkzf2bnGJKNhFxSRuvx5jay5oqnTWqF2S21FM86zz4Rh",
  "key14": "ZsoqV4ezH3pkfCGscrn6gGQNv7zsi8RMuZnaDpE6FQqMPVukertC9m1nWygcdUdcB77wg2FJhEu2YBUUULDN8Jj",
  "key15": "uPEkirXzwhLmSLxVhtSVGfyC51X6cSXvzciDYSQjd5UDW5bbESgdnAMoZ8WfUvQ6Ze8YtjM6A1K5gmGnGSaY1HE",
  "key16": "LoyFyr7ZP5Mu7ujVvTXB7v8qjiCK9yY2RCaEXmHq5h886mm38rR5snaT9UPUNh5upJLNQ5tdTPHZJHWkMzKPZrt",
  "key17": "dvakSD52E7Frp4GYKx1rkrRPSEoXzxQphQC9AJCjYza2CoKfEZ76JNG1DcopebYCN7P4aTnD7fMFx3nnezQvKMi",
  "key18": "2eNYA8xPS8TMwMgez93E35nRbYnqHCYfg6zFzZpRVYBksZTA8j4VMh3iWxgUphXMafZpKhxtdpkP1iys4bLsPmMs",
  "key19": "Z36gmPRoWhxXgHrf6qCuh5SxczdpmszV6fvLrQkVot6iyGnS4YSotQmbrExB2gobYH5zsptdMoZSWd6M8ZQut1r",
  "key20": "4dzhR2smSP6cdYVH6jXGQvfMq2j7cXVQbBciL8cNfz8RZ66odewxWAbaDA9bUK8E9x82aQFUJFMKaNSA8Uwirf9s",
  "key21": "3ap4e3ontcFTkZNt75znR4BcLCojwDHsKeAKhqmqA2aF4jo3eBLe9trz6gDHhmppy51inDbaqPbAWCzvAcgLEhW6",
  "key22": "2ReiqUnVcqBUknqj6VFQTooSPJmvg6VSZKSEA9TsMvCQA5oxmd9pdDYCCs71KSCA3B9mEm13xe5dZSzGcq1rgfkt",
  "key23": "RCEvt7CKofDvSPYfVZ2s8i6acpYpiGTJBmeUpFLUCq6Hj7m1HrBRPTHc6apjd3XJ4gScHXinXN9jejKjNcaZkLc",
  "key24": "3pzhphDE5gajPpm1nLdeGY6nGMfasb9mbJoFsZtT9PTBix3G8BvbRcVLb4USzGYkLf4SS8xg7CFmSKSx1VtJB64D"
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
