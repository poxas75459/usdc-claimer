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
    "4oYxtTu6tjzAsPfKYk9rgMaS6Q62JsQYXrpFrAXVtYJcbTnY3PV6JPrQ7yQBvy29uzk7zDAhHT7JE8k9sHzem1aA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Eab1HRqZua1WVoNNQMvs6fg6vyWeNNd8vFG5JStQENcPQVPzhstCSLKCGaeXtAwpk9btyyJBV8wFH6KfLq4TEww",
  "key1": "49LdJdAqpYNNoT1BEBvKrZwksFWVQTHHkWTEUNTsB4i8ZwvueXJMH7ryA3Z8ykxrCGE7J7mqpnfzkRBJY79Guj14",
  "key2": "4C2PnYxxuxNeKUYB3rky9QxB6FkWD2dAThazTKcuhPJreDqStbhwTWUfEsboniH1rQitCWErPzSyB2to5sNpYjQj",
  "key3": "53oQuMnNCzo6QiY31XixJRdG18FotY6B4x55WNxbPd1q5qRxRnkoXvo7vCQtv8q8vs8MBgta5RKw2vGWWjYATLF8",
  "key4": "41KXSSaYETV3wwQJA6MrXpVmUNv1SRVyCRqGNRBrf1MjfZVS8niArqyrG2gMEtGLrwXsbuPz5HQ9zeTwCG46UPA7",
  "key5": "yL6aZgKBftavk2hnc9wxc2AXZAZmLTGjBUCbwcGDoHgNu6HE38EKkmi5xosfeWYCnd6dPETRjPYwSRUcC58FqAe",
  "key6": "2vYL9NtHVjN83Mt9ze8wDX1zgupfPN3YV5jNigk5GurrmiyL6jxdWLgjPqWA3EiXq6inJQeZ4tpWfFigVBm1kpzj",
  "key7": "56dqL6tdiqRbubqX6F19zCAn5drDAdp4CaYTXWTMUMRTkHLe5s1zouaiTVYz9anAiLaYwMoJveKdRofv4h4ed7uk",
  "key8": "JAN7SK95Vk8PXeg45g3VxMmoBp1G6uhFt14vA8typSKvYYAT4A8RJwxkyCde7LGWWK6QJGASJ322oJi4j5hrBo4",
  "key9": "2P11jttPa4n5gauT5VShG5dh3teA5jMt5X9KCG8HkLxeVC7WPC7V5DYjcrekLTWS9T1PyZMaok6NMc63eKsV9FU2",
  "key10": "5D8nTDFY32mqWR5BimMGfYBPQLqtmAy7R3XowD3hyoFFCqbHQR4vxPApgZbvot2TrBkHntfKFLoKYtdKN3isB5A",
  "key11": "mvQS6w7Srqkng79SFbedLUFieEvMS8kokewTYm6o31CPgAdphDXms4gMtL2hhABcDz4rdd78hFhHnsT2tnLr8eq",
  "key12": "GoCyWMiU1shrDHAHgKcBQWNMMf49oAEvuv8gQKM3p9t5kEjB6RRu8NGJ45FRLqhE5UfuigyaDwdZK5bAnszzVqX",
  "key13": "3SMMibWCF1Q7NSoHVYsSeuvX5ezcbAw4yHgos7ZuhBbxo6oyaD5oqYxjn64mBUaHA3fqPPhN4dCCamPcR3aZT1Qz",
  "key14": "4SLanXEGaF1wX7vhPst7G1bvj7oPvcwZwgXbDn8DZKeUccWZomfukapb1UiF6n2J4dHwvxExWmMBGUpbmwCjtuBv",
  "key15": "7dogMg8hDUUe4WUX317ND3Um6APXhga17845ddNqRzxXCRPX4HyGmWQNVoJTe8UDx4kvT6txtdEja29raZEDX4x",
  "key16": "4gza8R416dhEvovEf2FMG9K5R4YWxN5WVGAzy6Ldv8S9ojyKd92bH8iBMZeL8rjACv4YxZ6Gp6YrWZYg9bR1RBVM",
  "key17": "5kRbrv8Kt8jedfgwhmPztTysfBmqEgYeBYMdFiDbHEFWiTe21EecjLAN6SpJANcajXifzSEbyd97TUsCDJqQrf1p",
  "key18": "2xgysAfpQypM8ByLrf5JcEngqZCZj1NiywnMNBebZ3wF3tcgvLExf6NGKj82JEKbDhyUCWs7RKYfbMNbno55ARoH",
  "key19": "5wWH6R7JsbAK3wtBQF4p24p8y7nBW7Bxu9QoV7Ag7vQnEfzXbLGyVkUVDMiEihETR6UHgiaeS5UH9PfSZ63DWVEB",
  "key20": "ryoP2ghst4XCP6yiKepM3EAyJUU2juFqcQzZdYdDyGgR1eXHXKRu2n7SmkxE6ZUy5iPMxkadDJbbtNQJT1JxaAr",
  "key21": "5Ao5vwAgtsuZc2zjp6WT8tAU2XKYyZhC6y7uNfxUYLidqA8nu8yzf2yCSbqaxCtPozyY6NBHVfpeUWPhAuBvkGpU",
  "key22": "23TDsXre6VoSsAQ4DoPRpVjtGz5pr61rU7JuCbgpcdTSPANMwoQqm8UH9KtYmJSY1zya2pPNAQYGJamKyW1a9Yi3",
  "key23": "ypAs5b4PcdpkYB8QUNpUYcGjdeYWPCA2vgpRXLamVQ4S1Wgp7Xzkog7eR9pD35bnJ2q5x6yDoFsHf7iUPNvZCa4",
  "key24": "5oVbKssgrBjJp9JS7vyQchnAk57wUwznhUUSCE9dwvVovUE52svBTQWZf4ozmcWhgEbzwc6GdsXXLxS251WztuNZ",
  "key25": "592bpYbB8tiu67HLFzW12uFoa1EqmutYo7A9DV7pMNhNhnwueNSE8f7HDAtZDngCs6sXdG8qYwwgq6qqG2ZT1PD1",
  "key26": "2CzdNUtRsFQ4UojtY7BPpkQ2x4MoC7yQi1AxZ4TNWL5HKwTLw3eoNk8DGz7Zdz5gYgp3i1fxpzPhTbXtyDadyypT",
  "key27": "3eQ7iQzsESKg9nFf9xvYYvacbewgJJs272Z7GqXcccJmThHHp95uSogbooEWQwMJFqvxKwP6BPr7r1JSoHAzycGx",
  "key28": "3tVYwx61RWwszY7bYyoTwfRP6319ZKNede31oRWHVCVCYixRT3vuqGhAdyCUyfGBGUET753XnZ7QJdQikniGsLrL",
  "key29": "4x3jSMr14BmCtJp77ruuXyReQLVTqLDBfCeMqDzehSLN5ZBVb8gurLHvPfLApct7eJdhenTsizRH74U2UkQ2sjmm",
  "key30": "HXo5UgG4nH3FsuvtdVQX1BnqxZJRkmaq6aN8GsNpvx9L1YGwi4p9SpbSidR2QzNgkcJFdZdN6CmGRSABnouGjNc",
  "key31": "2B6nQHzH9kLxWxfWne9tTrUEAipnnbX2Yi6PM3zuPFCdPY4mMeJnKra9ma1wGjY5KvddkM3gB8a5iHwnaFjptiuy",
  "key32": "3XQgNqVDL44FazCRR5pei7gWb3XBp89wnhVMCtBwcu9NHo3SDqJZCazgPyvXZYj4cTcba1Nsg63SwPQt1m6WjvBc"
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
