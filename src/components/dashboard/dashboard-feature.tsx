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
    "2aqU1GRvDry55tEBo9FH7BmjA751EsBwL9PQ5WLozAEvek4ERPi5KducfsEroNfyCUgG2YoHH69TxtqvqQygt9Yk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2577VBuT8MxxUaEcVdZg4bLLo8tVhezGMuu68a3eB92NkXsmivxKstuqUNu2hwWpaQHb7DwUohojVKnauSogBuub",
  "key1": "fgmTMoiDacakoqAQUvzfTHYLLKTh2KmMxRK43yu2xGkmoQ5nho7NYSMgw9MEAgRdpvjzKr4ASBuRQWHTP7RJJ59",
  "key2": "3SryoPDGLipCJ487Z7AWC3o8FRW6AYFKYJUy1wkfWNkAK9XKXCyQWAQKj4XNsbtzYYjwBqmgPCK6Piy1xrRrTkfr",
  "key3": "4DVq3QysjDmC5duq742QH7PuagSXm1NmSnMn4n13jM7osgoNBXHkmkN16QpypGC8okWPs3EiqfteH8XiuAkcjaHD",
  "key4": "4xiivRTBV4dHH2DczbBQKreLpqhKLo8qSMwcDhGVMCmDwTXYNpt7YUkPk7secmAgX2EhMvg74r8Cp7JK3aZkYnSq",
  "key5": "5zzsw4V317KnUmKZDVhTnBLQkvruQW2HTRhWQReHrZtjCh99hcodbNMN9thwSVruZTPauinJ1x5L2m9zaGc7hEAE",
  "key6": "mZGrufed9dJ8KvhGPPLz3owJtWWsbawNBU6UPQFCfv8k3QG1q7fvAvq3EDSPGL3MGt1cJdgEPtAsmRwzdCVtuUF",
  "key7": "5d1YS7JLLGEXusaKSmwCtxhAmzhbST54HS8cDWZqEDk9Jbs5Nedz5JmDDL5dD4uu2MHPHrQxXKBT9xA8yM4RndbV",
  "key8": "2DSd7cpt5DoWZQ5knULk3nvUqyyhhJn8bKKtiDYstjzTPDDLryrwTB2aicLzxZF4piE2MJjxt4auwa2kYhPXBMXH",
  "key9": "4XCvv19NxtcXAqec2bxtZAVyfLe9kRmeKsWW4yHFrsHX9uJ61FLkAKGjmZFbnkaQdzhiczkoz63dRfx8xsvWDp6a",
  "key10": "4Vm7gAWMDSxHzqzSGRgTkGuD98FXqs7vcv8Wdq5KwxTDpw2kDsphkK2buJWQmvan1cwhbesb6zccdpqEbQFjCUUZ",
  "key11": "EkJUbLD6z653QG1Tcg5ndipMirjTyvjxQxDHG5VnhZc1M9cgoFG1WyviEpLukb7tUiXfmmJARNDc62fDdEU4cC6",
  "key12": "5SvFrRe7PLWwSfg6SunA5KPfToDkURjqjHEQMwbyQXJVdhQSWpP3EZz7oKuKD1UeMghPVpxjmAZCLpkDKDkGzdeX",
  "key13": "4cZ4brhwoXxYYWv3GE2KrcKmSyXMbZt4bC5v7euxqUoa5hGz6RJD772dhy8t623CDNoR6zH9WENBL1M4JEiR3j1Y",
  "key14": "CP3HGwGkUtPTeRAuEixkujMxZak1xLpzQmZyFjh81zdDT5tuMyAHQKwKrZS9W7P9FpGZpUqHHV2RsaX5NXE3bBu",
  "key15": "3eZk88QhBk386uyhngV7GtLPMsF6G7dxKGnMpoHDuT9kQqiVHfD8ZoHVDktn85z8SHim5Qjjv2mG2X2RwpUPVoez",
  "key16": "aFBSskLpwFWxggkhJXPfe9uq3JS6Dtaz8FgozEfkkPGExq4PZoZSzCYMvySyJscAuoBZPxFSbrn5hqGpkv79MWz",
  "key17": "453Zz4oynuczcoehiUErC7FivEsUgXWnDwduVMxo1cHo27AWfvvsTKLJNSko8gNk1mDvmahVd1EyJpeW6RZPMfd3",
  "key18": "41fMHk5E28fi3hDC33BeJ5UP5xsV1NkwNYGbaot8QeM39XwDs5ehizUU1H2TzxgnAn16tRahQD4U67DiyyPwkWZc",
  "key19": "3YewKA2g5VCgwgLBkW9ziAUQMtPa8nYv2sDfS3vyMgMFi2radihSMgUroUw7ThuSncsgyVuJNou4yVspmSZrRTAH",
  "key20": "5HxV8R2vYPWWZxiicpaLyV6MHjyQMjmNfEFbgGz1n6JSvnVoEU7THZdCqPFTNaap4tHCXSPNvbymrs9YErB2mjJt",
  "key21": "2rD7u69iWkjTCELr9zW8JCU1fcomJCMetvnsP91XHXRBCQcbXV4CJd8rtxafSgyCnqrFNGpL55nUj3yuLWAqPZyh",
  "key22": "59gtKtNPNhjz2tvgd4TdwLbedt5VcZ1A8E1fg8LhffzqE6ZzGvYyMwSm8Z4b7gvXxHo6P2tVnuF5y9XakBb9Ab5R",
  "key23": "4fs1czXUd6y6QvhEbPWtcxLKkvbD9rQpc4ZP2U162XH9KpGySBHAcwUkhmnnvGK7SCdfocSAhQM5coCSrLcqyymm",
  "key24": "sgv25ayBLcfcY3YHTd7w2vRYArGbgEenb1cFFxE8pP7Ecf9LmCPFEKr1mLGwgVphu5EEThZJZCK7pRCEEokywc6",
  "key25": "3J4cm9GBeEMPr9ZVK7rvuHBugMakL1bZEDgNi8e7uTPNfWgMJewXGJdDFHnMVPGth5yk5QmxXnyPzjsfA7aEpX1C",
  "key26": "5PTWdFo2oyfKhC3kYdjALPU7NKxjqZyqJsp7W3UVhHVhxct2xwvYULPYh811hiHGnyi2Hixch1RuYFL4j15y3DKL",
  "key27": "5SowyD7n8AvGm3XpzxwTtKKu4Q9pAqSNi4smDaVedjNsi3Yf5zns9Q2WfyXJF5NNDpADkKyBfuvD1g9vduKBhExw",
  "key28": "5B4VK2y9WJE5iXNahiJK1Qv7xSTbW5qfZ3uESA8p6R9WjEagpop2sv2RYqniR33fJiPgftiXpD63kDe1PSHztYAv",
  "key29": "5FtPBiRLpLGApScMEUG3L3gE299VYHbe7y8pB5fAVjfHwFZy24wXWSZPzWnBzZjHQDsK5HjXFWW8cuXc2Vekcr1A",
  "key30": "bqLH6jHbKrQU8qiZGvjqYextyxPJbggBrx4uDKRbJ9nJxbkhRSuDFhAsdSwyt1XVNFAFEFvq24G4Sh9nxaoL7Bj",
  "key31": "WCTLa8Sm5hyzCRGtYiLi6FXF4rdsDn2x1pd87bKoaUJTsjNXJuBxavBZ6ndA3J6zmFRn3CdteKnzx4PD9dARaCS",
  "key32": "SWUxoSUxqTjuXdFzV24EA8s8LM6TJWAeaifKCyoCismRJU7jDSTjy9whe3ZCyAortwJjebVHbyh3psiR6oCRrvp",
  "key33": "cQvwumWaEwMo5swd3dPvjL86SsNUjpqP6L35iKrMcJeyQ29Y5b7ULPQLy13ghR6mU12FJ6p9h9ZUWGNpoJbG9y9",
  "key34": "2bfBohFbg6rij6VnnnBjoYPijntc6tb6hARcLE6P2smSEFD58TydNvci8ijhRJxUHoJktQDw37A6r62cYnWvDfSg"
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
