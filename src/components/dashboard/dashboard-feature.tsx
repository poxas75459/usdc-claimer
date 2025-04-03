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
    "39nUdgRWiUWJ4LJd9QZTiCt6SrK6fEpAjAq5oYCW8vReLa1R7aeWKcCxiaUnrWncsrFe942QCbySYeXmbmjcfHoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mkhAS83jEMoWBnNao7eg2mXPE9QX6Eiay9DVNSi49FBrT8w4LgDPksbcQN3aFtX8KrqTy8nMQFm2eEdWj71x4gp",
  "key1": "4s5ZvVBReVGG3YZxyg1VN67XZfD781MHufz9fnMaTebSG27pi5iJYXwPm8mLN2rXQNkA8oAEX6zvk2QUWincmb5g",
  "key2": "2PnLB2GcseNNSwHiMeg4Y8LdJbmbWfMoGV81o6tYon9iT1oku3NnJGnpAyuBy94kHg3roqfE5diYUmYtjkbqiASP",
  "key3": "26wkaffmV89tyomFSxqkGztHh3JtjKFraYMEctvr1TLkLMPEjHLqdpHziDssKG7hx5cSDFjJREz4HXSnh6WgYFb4",
  "key4": "yx1epSka2hMjzKaC7NxWPtN1Xd11nkCNmGPFqrUZb9sAASwqqu3oSN6skvECgfB54rpMumSbJZUvuGYdmCoSAAa",
  "key5": "2EaW6qrrYZLhvEpBAA9zdaZTDGs19LkYB77K1Nbm6abb3oFM3BfMeXNBA8XmB6EenQAwoLfTy6haotxKij2mvAGi",
  "key6": "5gaFqTqBrhfst1DUq46ZZG3aUYx7bij2Y9rVFDunatoE5NGcGHtXrwioKMXGJwpMASWGiuEp8Y4cBdbjgNtj7KLB",
  "key7": "5fM12Xzk8gYvEj6ewoDgwdW5d4tWettRFFm3XiSr2FCQtLt2fSe5mtn2c5E48HM3hf4gMWG6RUC8HowRhunSGb6H",
  "key8": "5rEVoiAnQa9dLnBCuneGKb9yKw8ovMjV6ETSBwb9uRkFUhBSCkPoM22VGHe7zrQdicvGwGhFMVnDCjBJ32goig7Y",
  "key9": "3Y8pz5vE93WEb2NYjpdfgyR4J6ZQQf5H5eSVW1xoiNy4JzftcckgJZmy7prHgfxPHsDZwDWYcxPY4rz6GnbDNzV",
  "key10": "5MZi967sGrFny2BgC8YHAHNekYs92Ev1Cyv5kXudS145NiYerXq3HqhdciPFaHZGMc3KML5uABtsN1Ac4skhdmWE",
  "key11": "5vjiqoi7jCo2HZbL41Vt6mfuuecakmsqTRb7uMvnfSZZ6M6fp74bg9fJHxeGhgbFQ2CQZDcqQz7i9D4D8oXkAtJv",
  "key12": "fQuAnudWmKSYJ1c42gSKFqwQqbkwxEVrtvBzrJQWBqJn9YqfDnd98PRJLvJ3e9oMYf7WC14i66bfhWrEZUcU5pc",
  "key13": "6zVWLhLEXMcKXsaxLRkokxtrG1e99JJH5HeBUTwCzB8izeRApgmTi8ZmCV2uTiHF9M79AEz3BsAy7uWXu9T7ZAb",
  "key14": "2KLCQ384SBy7Wc6KvvkDqugjgVUNbxX432TBCDHoKa58aQWeAMu14WmdXCiBnpL4paHAHuqhmxtJLnvnewntuQGn",
  "key15": "621CXjzcBpSMTyXup9Y4a5d5zwPG7cq4DSJDr3xp1hwAHBFdoWNsYJJpfAdiLtH75jPjr7JK5p5vkNVkQ44SWTLQ",
  "key16": "2Tg2jV1QwuC5NeEcDzcoLx6dN83bZVopqv6myLWwEHcV8tWDnYAacu4Vsnu5V2StkW4EmccTUpQkapYrYBVLxLXw",
  "key17": "3FF1H5g2tiow2p9WDg6MHT9GtdSF6MYWaisZc9P2P6ggYMpFpqb1NqyjUL8BnvcH1LNpRNhaqDbjfahaqfjoPpJn",
  "key18": "5p3MfdjUy7Z9LhQQLpP7gxNua9y1ur4t3LVRtrwqSPpYt5pX7eYqLd1kTWRB3bDpPr7NXyiqJNi3Vjrcfg1suy4",
  "key19": "4coUoGRoMxi2JztjhcpNRxgs4SQ1pDaWHnPqRMDigLeqeTY4vneQiHUvMSRyyy9RVWyYk3ZtLBgaQge8i8HCCPTc",
  "key20": "2tsgcQd7Sm9kWst6aYJYU8EaQAD46iutz6uhRszCGnBFxy5HcacggS8aik2AdrCGGHFSfTHVswnAHDhM36kkcQnF",
  "key21": "3kzfaSgJgFo3A9z8XW4zQrwiMWjJo1ef3E1Mdy89P9u2B1koqjz56SKQNF5PPiCtsjJHUP7QNS41Hc6TPaioYftX",
  "key22": "2dDv9fLR51SkLZK2YbBiyUbQj9gcETP9nJCKFuGjBBMyucgbH8ePXJYC7kuntnSt5WhK2D9BXTgdN8CU5Hzf9UeH",
  "key23": "5MSeNFBEZwLBiXCgy9KkXBYfDpofaYrZT7GyojMJqVBefGbmiZeQpALCrM1vfdM9G721ZYM1cfpLmFRTAoMpUWMo",
  "key24": "19nFBvf4wHe1LErpi8vpXBp423Fa2FLuyMVt4bYZWvCiGbSFtoiL6wF67p8qdbb887Ddye2PTJ5zV7yL4XZ9As3",
  "key25": "5ShsTUQXMarajTB72Xj2v4EaBSCahbbZdbu829cAkPjgWSdKy97U4ovQGL5ZxfXhwSbPTmDXxaBpLK6T8N38wAWi",
  "key26": "5nJPEHRupPKTXfkhXpfGsdi7kUdaAHsuYDkqpTwiTPfhKUFFbwshUMdeqpTASnhkua8ihBvtYbTihie265Zvho6"
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
