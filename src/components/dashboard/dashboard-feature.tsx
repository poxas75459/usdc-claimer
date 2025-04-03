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
    "SbnQgTTdTKBsJbiqmeSrNvwM9mkapt1Dd96nJTBYRYNdvmgeYrknvFfQGpZSYimBVcthpzR1GBc9zaGoVXBP198"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M13UbtQvzYgQLxNQ7ZE7nVSUpG9dDWW2YE36AYCJKJ8RAgfJNWEkvf4GAJxp22fvU5cvi2x1ev5QRurRbHV2mnk",
  "key1": "5r4FhqEcyQkVQAF2oxJ83KdLUiqCMWoCHB6iJTNnfgSVqqhKqfn5S7iRcMTnnJM1eCMbzoAH2zb36w2PRWE7ueUw",
  "key2": "2T6PEjpeiFjBE5qekHePyLYgysCZpjyTtaa2hgChP3TgnAeeDmPWt6EnDF3TroCEq6Jb7iyX2TqAgdAmgpsZjtdF",
  "key3": "2fmzy2BhKwxE4MK635GWFNGiXdN5dq9qi1PopM81siQRM9RX24y5aU7GspcHTrWfhKeFicszLr2MJ4bYwJNhrrPn",
  "key4": "5Lcu2sU1ivXYNNJSW5Rc3SWYkng9VJfcd2oBpHhLsia4Jq1DeQBvsgapi54Xbd5m93mvu7HBghSX5DTZE6UqEimZ",
  "key5": "3H8vmX8KAYuEdNwyB7tbU6Q5nWy8Z8s9fwyY79re1fkB6rawfz4JhAnWc7CjUHmnLLVF4GR9JPZsLetkMfyHo3bR",
  "key6": "53YpaEQ4F4UHzMBTjR6xbdfZ2tFCdqV3EBXXMdcF6fvYSyNYDTNsnfFtHA8x5WyVkGQ8ZgNCzNBWmnKzkftCkmNT",
  "key7": "5Sn8ebwrwqU3WaumagPfdTZpBMwmTRgfAZ8ex2k4YV7WEcG7jRG1frfAoWDs7Nipmdj1cyVDu2sSssEV6Sx6kogm",
  "key8": "4PpRsocqAPfB9cHgVirto8HVWxxGjci4Jc9pviJWAkerisDY9CvJysSZv7M5inrqM8rjMaccG1Lp6EyL3bhKqNs6",
  "key9": "3mUNRRaMCxRjXudFWMLwJ9RtZaZSLVNUREr6e3NJj2RTtCZzcRTWRBRgyuepreibhfFGHBc9z6yDUL3WyX1Sa51g",
  "key10": "4V1646nJCjwoGyTN7C61qavkjrBmcYLWH6dDMgniCEAXfqHkKcy75qZRRu1Pn4vMprfUqwcHmZ5L2qMuzNu7EtQu",
  "key11": "4jWfDnneuQbTVvFaHa3GA4QuPngCfmRoo3NbLmACc5HPzTmeF8fR9i2HPxyj3NsFzMVW46ns81c9qsr4yqn1oRFb",
  "key12": "5gchpKrPdfGKkccWejFQorGEVP1xQNhjshouJ75sqkrKEGF4DuRnWH8Yu8AXaBTthTmBsAen7JnebaZM6EuK5wX",
  "key13": "3BrVHFbuEP6SySRTWsw2AD1YUV6AMphVkfDLvDJhJ2bJHq55J9oo8AAkj1TTcJkKeLn2L4V5Ni1yEnTCCgP9Xqj1",
  "key14": "56NAQcRwRNgRUKgDM3D4sR2Wt9iSTBqWaatfKyhXM3Xx7SXFuLk4YC5d1xqPFXWfUxNCEiABMj7d1VPG4VHhW6s1",
  "key15": "5PUp7ZDVVWuxcpGR1Kgsr3TdVc36u4PU2EYfQvFX5yEUqqUkjhy7VXNrjsTL18vexY8eBWUEmctfLuvKXgcnJVDZ",
  "key16": "5b6fQpFj1imqvpmwZMuWWAGyNk5hnkh1bRyrebx1vqZbJZ7iWSajJcxtG5akLytj5y4v2Aar3vxz2s6ZAW2hqrz1",
  "key17": "3mqu7XWcSrmpWLcixDoHbd1829PmsDMqofQet8J3t1gw2ELW2RgmMsx6bwZzb2CKshBQh5TvxVFDFB9HU2hXnJgy",
  "key18": "Pq8sB64H9fdXz1ZevPrAPfw2V7TcZiCbHKVfNvViJyLXctH7tj1b8sc2A6WQ82LLMCEMBTaAgHEu91cJ49J6ZBh",
  "key19": "rsqbGYVUyECy99dxJuygNtSNoaQVLKsmECgmQNaueYUnjKy8yUTLMmyGL2zjmC6kWobG7BKd4JJQYrdcuGSykVY",
  "key20": "5wWGoSRdeQA1Leogo8C1MkqBNzst7utbSsjWMQgcWSUvn46ziFjQDqKPPinJE9tnoUHRB1e7coSRpQa932HYB7Kd",
  "key21": "3i46Ai7qnAEdxkv2HtmCAGE8TXxQQF4RVg1KkvM1ntQwcb9V2CX5MdwNLJ9xKj1N64vjnegW9Xr3gEouU2MLyWHy",
  "key22": "3fmzGdGkpVZvGfxE2jqKrPD334a2uo3yvtzavjVPYFPXVvMx8SyCy1Ut7ZG9YPc2wuEteDmBpVM6SHPYpn46VY8y",
  "key23": "NkEa151p66vLKa36erWJGmoSnYRRm2vvH1via4GcwMgnykXaUvMXMX1jA99F916BjWwbCyGXBwzA812BBbLEvWP",
  "key24": "4h8cr1g57oRFW6tzZa8aXnBTbRDodLku7iWCeX5dkKMPyZeNpW7r1pxvi8gTSnbkDE5Sj1WYSAtaavcEqco79n5w",
  "key25": "2xu54udWZq9ZWCaTQmZAomDzCpK96Hd7goCmwcSj9w9pVbxbEDodDsHjQhc4AWMD1PfhxKPxQSwq4BjkEUzcDLQx",
  "key26": "2937ohmnYFP92KivqHJJcRi29AGhjFjfMSyyzVFKB6jibYaNbqoxi5wGTujaVsjkME5KSFvBJgZfWuDq5F9hjQks",
  "key27": "2hGYgar28kBE5hz1JieNSh1NVV3NSWAVPA4fJDAmS6ogRsYWTbjdze9sHdUHQ23a6podhHgK8Bp6c1hTRrg4ed17",
  "key28": "zveSU1B5ugBNQdNHTfz2inePvqRcpfDFk8gW8VL69ztsf6DzuDmELvjKjPEUiR2VeQ8Z2huhwfbxPxv64pbsr9u",
  "key29": "1Yqw8p9Wes9UtM1ALqWNgyXEpUiRrrpkA6wp3QTmRYQwLyUWe1rhBedbqJmnQX7QgsTNiikxs9MRY12QAwmpj7B",
  "key30": "2oFu9f9CbfhKVmg4iaHuqDDnfmgRPofmHPzAtbZ4KMDdhqkZhMdFtirR2KES9hrCJhFiTJr3T9FHWG1Nz17Pixft",
  "key31": "WHVSDePDfe5FLBqhB8FiMNmKWEXuJVGSChpVEBXqrGS4H4W9L7q8zwcyeFVdptSSPuehxoiewD4yNZgVobUDveE",
  "key32": "Ze1w4xype3f4XLJjXMn69VECiVguVKfMWcdN3rSrhAMxNhnYKDaqNT8ArsYM2LzEpcQoUqScCGAF4TdUKFj6Sb4",
  "key33": "5rc2aoxGdLsvQg6ZvbwunJ8pg64ZBnNzZ6Y3hNBQ6mwFdPaMJ2VpRWFAxuH6RH7MqzfLQsXP5bvGHwmW1Dg6hnq8",
  "key34": "2EuksV5vhZ3Hw1d5RknK9sPgGpWNKZXY4ewWDzYovBp7Yae3kUHtFpKUWE9WoUFcEjxdtLzycTfpp3gZLFXHspTw",
  "key35": "31asRQKDw38rJHGzZBSUQGY6AtFk6k2kdMbFjACni6995ZgpSWQtNydyvtjALfpUCy9TgatqFr2FgGycXbnyGeay",
  "key36": "4iSUAmqAUWuz3zsrUUrMPpsscQS14Zo7CgiWPN8wYc6gfvEePrwZXXRPWGcmarLDeWyWQYNSZBmohxp4HbExBkxu"
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
