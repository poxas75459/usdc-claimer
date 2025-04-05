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
    "44rYAwNnJ4CCKjrMfDogat4ioxCPAhQzfwa285ofVvPogMDTP8PBFiFTCGJJ8KUB9FQPQUi3Q9ZgVfNVhwoB6Eyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qbe8xY9rcP72ms4xrXPgiCgdcuGo8UVn4y2Dvj7FFbpgRE2hXBPchs5EhS8QAmTu3yCBHKuoXMvPpEGYXaHmqHS",
  "key1": "4feZiyTWEjCKzNZDM3LmWu4718kLExEWNJVthXMJjrXKqGoKJEjudVRmF7sa8WVuaeQaYtRvGkbwfF2UJ66s1tVC",
  "key2": "29cXKWaVuGS6E7piBF7sm5TY1vKDxDGcNQRQqEa5UhT9NZrxM5Sy2aq8KL3WtsdLnwAfmhcvnYMK4eoLSuKr6gCL",
  "key3": "5r4HvTTaHNUeUsQU6eSkDAB86cd7sKtTbXCDjxUWZxbs444Fu3Sou95FE1K1DwhvBerK9hWtZ5uUpoFAty4PxpyV",
  "key4": "4AhKNhDDeQ1mYN7WakcPkfzZqCEiKX1QWRNXP2oS6PSAfJ9bR8j7QBTfYEhLjruK4fDHLwrUQF9NNSsbqt5U8M8s",
  "key5": "5sbWMvEuRLamKxWcxRB13XgmQRPbu9PqeFGuTtFV8N1r8RdCdAYL9QX5Ei7DhE89uWJzQ5vGpPXGPv7EtXL2DCeF",
  "key6": "4sBrg15F4iRjQY7kWPEvtG9EJo1u9jttt9bU692bJru3JpHWASPmhf7Fmc9YY7UD1B2x6aS3RbpZhDrYPDwkundL",
  "key7": "wn1Es4VeHUk8Gq42eTkdgSw8Mb2QEbTcof8oN16wQwNccBDG9mvdZAEb3MCnz6Pzdg2KqfCsikY4qY7pevJRSnf",
  "key8": "638BjcRqeiguSYxBiQMQ8xfULq1sVPD7xABCtGYByNmYvXWgHeoi1Qcu4ZWmAtdNTpfuSRq4nSQ4tW8ApLu2yUXA",
  "key9": "5Liz4sVkzsnpakiwJkPY9bcfQEaGamBY51Ph7e9JbHGHog43SmiWnUwea7LE6Tv4LvHhWouMCsuy57NSbYqTocgW",
  "key10": "4u52KFZCTnyam6NV4LiKLhZ1oUKYMUnYyhmof4DfayhPCDCCVqEcQohrKgtCUMXsHTeqB1eHVmGqcbEAN7gbQRx9",
  "key11": "3NHSiKxTdcLSWVMq1s7HYFkw1gubut4u8wpUeqopT5NPtwsLuL9venS24u5JNdME619LuqhW22tEuhSF4cZ5uwJy",
  "key12": "3Ry696dqvK2mGWLznqo5rP8CqBCEBVCbtei4MwNmVdhUEkv262i7NfkmdywmC9H173yZrJhBPcNUE3ESTEAYJjXL",
  "key13": "2yBLbyB8UTbafQ9u9WpxwPpGUj61CvDk5mkGgmGTD9upBYBcLiZWj4o8NPCTHNYfGtfNUTyepvbygYkvdcE21pvL",
  "key14": "2kRKizuhMvngFNJCQ4pkkX3734R2sZpf6RWB5Pa9Y8zesDd45UvinYSbhXGdDP27KAqhXFSYFuNWwqsy5Wh54Yfr",
  "key15": "1m7weYc6uwcZdFUzQXuUGaSNRZksWxPT7WN7fpT6Uy3JYT1tT4ZJvbgv5vDXgWp69FszXquuzgnbe38hU5Pqnci",
  "key16": "5Sz4ATZam83n4x7ALPnkXCi8VQdCvw3Qx9T35pc49eCByRfqzEibmw1iagThnA7SBdSTRbT7zLg4kf3jCYEAxZiN",
  "key17": "5cuwhMHbvrZuMpAyokm69KpTgkxPsSaWgCJHmCPWQqBfPG8AC2e77XZFH6Mvmc31tSzrGuASonRTxnwosu472S8W",
  "key18": "32tSuSC475BpKvDhTov1UfzkbGi92ancfMCrsgk22QnoV5aYdWXeRfdmGhW7GoAKfawB8LEi39WkP4JWchKaUqPN",
  "key19": "3g7bzQER3GitKPQZpe4MG9gLkgYL23x9eNLZmxebE2PcRfB8KnJWcLThi4QahYXQ3h1vDGoQwsmj9vGfD8bvXnzu",
  "key20": "5EGWxNnBMWnDUThu2LbadvQbWFddDaMmuiGXbgegmxm7m7yLr9QHrh2CDZh9QSV2GepFs1Yn9MPp7THpxGSpqH73",
  "key21": "3WQxB1C67we7GvL8uDkfgJsnTvAwVAYtoa6BEsr1Ax8DvKEoWYjYPBWhsBtHPq2nVaxhZYvrpAUsnA6daQjv6LC2",
  "key22": "4tMGNRHqfU6V6HKPjmnvvikBHyMr82oVCDywb2pmGDC37KjQ195DXtTgoAawTiHVGniwXQ5w4NM8Sq1fCzxev4AF",
  "key23": "CNz5LSJmeV7kxxeCdRzmKHTrJT2vNqGoAeYcNx2QnCbtV66DDWiNR93rZZi9bQdpFKKzxTysA4D62CWZTBv1o9P",
  "key24": "1YYRCVLwcr8vs16gaxPBvRC4fRcZMTo4qa2Gqa16UfKAFWFDTmNHd18czRGvikyXXLXJYywRPWqCBrRsUkbKCxP",
  "key25": "4Xo52VVai9s9gtk7PRFAdbpKhjm3J1ug93Bbeh2tLQJtRbViXrYxC4EJibAtEnTrA53kwGYSUYwj59taHWtZq5Zb",
  "key26": "3ewcHMyDNmptr1Vqxpir5zQZ8bp5C93ap5iNqwvp4sm8hrM6Z8mqiFXnD3yS5ns2xNvi48wtKiUtgwBaZAvP6RAU",
  "key27": "46oCHu6bAZBg3HFb15egVccuxxY96XYmfxyPWragXWGRKXqKUmoBjWTesMyF4VS99id4bbV33BkVwLAptqnp8oyB",
  "key28": "cuzy5CZMGqUqiurxjNVKDgb2mU4SsmFJMjJXr2GUVnzDm1fvfTZxs1v5NYwwowtPGQNb28Xqv3pVQqG8ovpcQsD",
  "key29": "MZXQ4ubqtEnUd7yvEf4YPmqsfC63JhPxsCatuiyYSSjD8pbHyJhKsf1V1UsopbnKSkV3VT8wG5BVEhmdyxLon8J",
  "key30": "4DfdXBhE1SjJ4J98eMnPU91cG9PUV44M9qbBhLeUtZ1T3HkkRL6KHAkcHMz6kq9sy7xT4khft4MgZFf8P6m9XsyB"
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
