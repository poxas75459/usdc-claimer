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
    "2r5TmRsPBahMAj15V8bHBtA2yQUtjFGZU6CYPb3RL8d2BK4Q1Wzr7quweY6onhaNTKWbQBy6yvDcBSCDvsFvVyHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SfWHPzBFbPBeQvE34tDsR9LGmcWK1iYKxk2ysFufWvxjVBreXPV2KGKe61A2cmZmbuTrBrF9hfUQCnZm2Y86ooe",
  "key1": "2mWWfqLBGfz8bjU4btSNHPJzeHAWJSW9JPb17CkJnu1zREEbomkMXtrGiGrNiBgofyDkn1GxgfzYdgVG8drp7N5j",
  "key2": "SH86XcumVW3k2jDnyhSewm3vBqP5ApyrhzH8mVGuRZZFvk6JxuCwDnyb5q6XzHGETC4mqrznzaurxRdaaqWsTYP",
  "key3": "2RWBkeaG9zXC5vtTSqfTBGVim6mxWGcKvFqdjjDBEkLzzFKsjLK7t1LbL24MjCGMDFoMYUkQvF9sUiHWL3XsFDoq",
  "key4": "2mMJgqvFUGs5WEUw6R7yYM8NRPTUdeU78HokAjuFNCN4vMBPLFonQEGwdM6ssXosbNg8P2uQhQDx3GxccLaJVtBK",
  "key5": "5XJzECVFDK75dd8Ko3ushuN4tDcBYT4bpKvF8dDWjT5iFpt7Gdx6G1zdxDK8ueUV9ToguwvgoVaorGp85kiMo5by",
  "key6": "9MnUxtcDv4f6Fy4yPLN4FYdNn19zi3mSmGuMBzWEw3L5GprKFyBQ4uwRTERkVhPGyktVerTP99VgG6x8NiPZojx",
  "key7": "3EDyVTTkMs3cPujtEyaQaEA5N5pEtvkZJpi3xCYqaaLAWhwawkX6gQsBxWH25n6Znx1b5DgBuv21soETHUGcYtFy",
  "key8": "4aJ6sc1XXV1eJMtsrpcZcMoWYio1ntPoP6iZrWfbB5FBEbNNjxxtHYfeAnSnPiJ7Hs7bERtVs2J5Mys1yRKZyWud",
  "key9": "52skbM4FhPwReAvX6dMuom5uGL3M1ybR2tjDXJQ35ue7GL89r3rxRS9DRNPLrwca6J7qH6SQpbhow6rKHR1zUigN",
  "key10": "5jNt52ivFWzydj25ywu4awX2A8CbSyDdhYrqL7jPfV8QR3xZfUQQ7cjfnoN65D9T4Qh33e7VX6kDqnKwaYGcvuh5",
  "key11": "2qgFREEFtNXZjsXcG9CjJxeX5RCr4ZmypoQrG38bnuthkXfz3oeigFWyhGGv8FHk4pdAc51Yc7qy9Ez4Txd4P1CD",
  "key12": "2XFFZfypd2J7ZDNko3DvnkjKg2feXZ6C6WtbUBdJ3MntshDFM54CwNi2Y69P2if3jkpVMjNbWpCDjzWcxEZF1RXY",
  "key13": "48WkpUBdaK4W78XXz7YafRyoZU9eT84er8FzDbv63iyATGDpFFQtoJWTQArewrByZLnimb8DgPLZ5VSZBtsmqiHA",
  "key14": "2UiPQXUMG1vijYPMu7CsUUhFhFMUvn4ZTfA7RAkZdJQdBAUivqYaTeiYqZfoKA8abk1cNyP38YBo8eedtEczNhG8",
  "key15": "339jHX2wEzioKAsLZtzdADW6RcnJ4W5aLYtR9sJJU2r39NDWTa5iE9bodGVPf6oYG4o2iSV2AStvLS1tW8Vp2qmY",
  "key16": "3Nj8UrvcwUw18ZxULCPeu22AQyjb6Gg5BmPz55tFYaFxGJCRpbRh4nTx4JzhNUSxqxoZosFbeEPoA1MQyQUYMzbs",
  "key17": "AT1UPpcyujqMcho63rY22XcBGmKh1939sKUrEVFU5hAb4W5SmHB7HUfsHM2xnzTnWTNFuwLTeMpGnvR1TJiDS2D",
  "key18": "2Kmgo8HveQ7mR9whjd52P2wU8BqS7dPRCwsNrXCqsJpC6iaUYfsvfidrgVLb1rT8ZiocZZLVHef9yTuc8idJtEGR",
  "key19": "3U6My9QuGJoTQ8YC5XC5kkqxUHGLTXLSxWmUwDUnAz7jseKmhQ2AZedXv4cYPCejf2M8g1jgTba4mY14PiQHtm7D",
  "key20": "4uVFJr2AEx1Sfuw4sNacENJJ8ian94skvpgGoeiWW7wNoAp11s7QAh9mDw6EQB5fKKjE95NyJTFYhC7dJfscmkLM",
  "key21": "VDvyS67NB2MaBPJbiRehckMzj8S3QnpWVFTpg6DmPbgfpaaGtNWk6P2MYPVjan6DSbAvRHSrRnZ3AZHw3HcvLdH",
  "key22": "3jNfhhiku3WouY4H1xyCsyCcELp1heqU71hWFUqzLmoMWXEJxiRJqU8jf6YWqWxfreEx3eGJLeGj43xeHXBc8JD2",
  "key23": "4NKCegyezxnxVAkwtEPsnww5Uj6xkg5SiACA8Y1pkxDsLgSeqPVC6NMcAUK3VtD5XBJ7S51SEfuaAYmNNw6o8H1A",
  "key24": "5ZvrbqAKCWPNbNWhSUgh5E6AKqbM83tJBFEkYgmrRmbLn76PPXSmmxDVDkeAjXsNbS89eZ437sqhbDdwyppnVgSz",
  "key25": "4xnRvMAacAanbcEHerkXx7zeEW9oqiKZ4w13NwdHCJ2jtNs4o7quRVdnza2qudtwTZGzAu4N2EoWANNkXKWAvCQW",
  "key26": "4HP61Ph5kiZWYPrbjaa9itLmFY4qjZUmLxPLbym3p9gBk85fCeT7cHfpHE7PH6YMo5W6rTr6C3U8Rt78BmpeUUbc",
  "key27": "41wCuRNnQjJy6MTuJeK12Tcxu2wemUwPEmyt6zPdDKVnUXy6siZ2F1g76Hr9ssNC3s8BNy1nf6KACtWeGzJTkrBv",
  "key28": "51dwu2Qj53vqfG3MYPEHzCTGLeTSfy8pV3aQfvY7sibxavFCUgcBaR52SHtyWpyXjnfB6tUzD855KkYGFLz8MuSV",
  "key29": "2RDVFSQuKzNPnt6xm5iy1BHmhA8g7vtKh7U2o1B2GB85mTGYBfMaNR9Zfya3kF9bmLE841hfEHV6m5HLVZQ6Bazo",
  "key30": "Ha9Px15Q81aYx4onZPqAbwRpGNWJVBWqrJ3ZnuFxnV2DGw158gkWDffzKatiwxr67fHzwhgsRcuWBVMPqLHZJST",
  "key31": "2deHxuzJBjarL48KNav9ASUwvhFKk9iW4cjU5wy4mixFzeLZZgrPN1YeWzED3HcGbfEdT4wWBicfrDTjucSB6Ukq",
  "key32": "Zv1tUc2f47jM5AKMBPE8PWdpm7q295yQp6MdTPAM9if8ZTWLHZvY8vK7tQKg5TXg5c9djyLTXgfDzwQC22Bt8L6",
  "key33": "27ZL5em7L6DnQX1o84z8DjBebpUuCLeLVygWND4H54HPwnRYrZm6uZZEgWT4oU4LEDdKZi3oCYGK9yBc1QhD22JY",
  "key34": "5jiEqRJy29rG2BNSj4H8AtEMPayTLgmcbq448dkVVcGXCRh3k4mGb7zfr3fvmG1PsaGttffxNJ81PdFhYxBqohFg",
  "key35": "2BRKg6wQSg5oTTG1s1xXjuigse9NfrFw8M7vQthwGNF4KYyjDjzpApU28WvCEyYV6oraTebq4mqmxFxruBkp8tgi",
  "key36": "2T5S5WeowGXQENzrhoY3oA1tGNgypJ9YHpLAf5PUHekDpRcXc9pH8RgiYmUsHuXPsoVZ4PppEEPkn9ZjrZFLtdVG"
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
