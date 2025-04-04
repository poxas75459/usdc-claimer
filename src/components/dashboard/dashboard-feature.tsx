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
    "2PRie9vKkLDin7wr1f5weekzTX6uo2M9xBGFXjnbLrFr8GF3HrmtbbveAtoFBEGFGbPK9QjruAWxfzf1G5Yci4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s7AVMsEzzCdiEXMaPTsiRyatt4zKBMW264rzZNag7mEpHDWMzwDsHsCQvUWavN9ZREiR2CLYp2dMtLcJYMFgV1y",
  "key1": "5cGRSMm1CLc1zF2zuN6Ug3mYi5aTnVCLjHiCiHbj976xmAkoZPV98dT87M3J42vcLwicDZJbCFJ6KoY5EuKdkwJH",
  "key2": "EkQEwmfQAUp5Ws7Kg827qievQBSwVB5hT4s9KKd5NzNJR8K78yX5NJAZx259494m1WJbz3oHRQVj9bmTnfTuKzH",
  "key3": "3Vqmm5kFiSrE9RG15MNDhJgsGpAEm9GxaT9Wi7qPfaCzxvASkdSrixJFFkjPvMRbYygjVe8dNeXeZA9u4ehmREgM",
  "key4": "2Mtz6HpUXKuTFp2JcnWQGdrytxjkcoeMt9nfCTe2izZ7R8uV14nbY8FENNhxejeiKkzgc7z1r5SAC6dKttqdqyfs",
  "key5": "3TggC3QDXXbcsn1qRq4gV7XaiHkuy6xa5LYKhdxPD3zM15azALvg6PEfkBmVEEUxPkKWZ1CjmPqzSB6dCxVExSo3",
  "key6": "4LPD1n4XtL9E9pxW7LHzbdJt5diKkHZq7VF9kz9mRi3V5e3yYVmP8sjcfdD7yR5cN4ga1qwACq1tcPXBHSLHEdwB",
  "key7": "4A8WX6LRGKvAhkShLESgpBUQ6P8bDogguzBsijibeSfFD5p44bzyH3SzVReZRqdhN1vYX5k2NuTwdHaoW9g8tas8",
  "key8": "4r9UyViuRxkNTzXUekKaudYNTkxkwScyy8JWgEcPRUuhyLCDMMqFgQKdjaHE5X6xvGxXxZyZXeYghy8ookmuEH2i",
  "key9": "3PLLeH57KuoqRMXRWWPhEKPex3XEVLTbVijQHWHVN4EDy2UcKCigVrSg9Mybb9S3qgSkrU3QVGsHo6GYkNxtC94b",
  "key10": "4phFWB3qF8HRMfyVZNsptqXuEZv5NRGqmQm7Drgu3TqzVEmBR9QVdLdCuPVaST9di34ySNno2nDABNczN3bhZ9gh",
  "key11": "5iMHrgW4y6Qx2h8EDhKmR3vcjkLavdfzKcsLuiQ4KXhSb43P6phsQWs363y8DdVh9qVXV8HH8kbUVjtfT49H7hht",
  "key12": "x9bKp6EznZnytg2e9CbqiowbeptU9f9Yjvra43pVRG11TVNodqZj3w463w69utxGchF4j8AcvUGkQvRvf1kBWzg",
  "key13": "5jSUZitCdiV9LfidtsGEHW51bUgNszgrQMXhTGtw3GzCE5hZWWm3mQMxsdHpq9ZZwacTFdHiSJxyqfJPYwC8BE2",
  "key14": "3FFEcW7cB8Qqn5d34M599zTjFmTF9xy99wvXGj1ej1wnYBdDANkcXTZhJrQCucYh9Y8Mwi32Aj1pU32ZLgiMpeCW",
  "key15": "tCAdYHkHegtZ1yRhy2gTAZm3fhdjVLxVkC8VJt88GygJgK9Z8g1av6j6dV7VcaPzNU8rc9ghfeBgYwHxo7Y8Y31",
  "key16": "ZuSLopcnERMhWgCatajZW7rTpksimCVS5b4Ey9hjypAH9494ev246XHGVeDPDnaFXJA6tPMXZ9QGbBviADEyR9q",
  "key17": "2EAcnnBe41My1urvFQJYYLkjTwXpHUeK43fQTUsyQQdvjnc5SYoi5eTsEqDmtMjXm3nSV1uKtmqWJzHvukwPuW3M",
  "key18": "343L7okaKSwNaFz8AnSt2A53xg3cQcT43PdyMRLY4tsQ29bLdf6Yc3NUCBopX81aCSw1mqRBqGpqWtPbWrkjZKEL",
  "key19": "4fCHn8EfnhUu85MdMatTaspSkyY3edsXQm5DTeE5EnMQrt4Ff3krVfJ9Pb95SUC5USVQGTpuGMiBtfuazkE5NKBq",
  "key20": "tN3wZbeZCuvHTt7ohvRW92nk2PDqxHWr8bTvKeTV6N9NvD19Rba5rSQiCyHQyhEeTgjVQNXfW6nCktkHC6HmwcW",
  "key21": "3iJwruPeQQDU2gwdGFD4Lcofj3UUKb6XCuDatJ2xFAPPgwSiXLGsXkCKppe4JweT66BjB4cr4QkksbTQLHHfQjQt",
  "key22": "3gnGRP7siTxFA4cjQoCxdPcsQbCeMct1Pp2HJ9QgM85CdmuYfauUmAWtzoTengnkHsbLJPz9dBFJb6tKu7Vfu5sp",
  "key23": "bH3YrkmqbEUeqCHmWB5KmwXF8AFUcdMpa5FApAuDRzGgwMgBQKEG9V4B2JFGMpD5RucPyPApbR9v2soEnzXtPQ2",
  "key24": "5CwiitUujakFEtsSPSdduoFk1EXdWPX1iWH8Dh7h2PinRRyBqa1572HKzGUGrm2gxD2HU11WQrteSXtd56Q53RGD",
  "key25": "joTeecacmk3LfzgtLLdswB2xrubjrr4jARoRYtszpihSUsRkk3iPTJBbvPUMAEMDtLmHfq9mFLUtfJYs7noWx3G",
  "key26": "3PqYaf6p2mGr6N3Cjs4ynfnKffPbvPngrh2op188tqSffP4wmSh24XsLgR3NQk1ivf9nkpQmiPfNhtZjH5Cctz9S",
  "key27": "5hMQyLXapjfTtzEgq1mYbKWszZjASzun2eic3bHUA45EZcBJxXTS3mNTBj198teaHpn8h4T83k1Fg94LZnKehEm",
  "key28": "2jWvm3k9MotAQZ6krWH9crnsHeXwzijQUuPuYKZAPQ18oh1BYG5Mtybk1SusjjLyAw5TrzxNHDMNp7zCYNYuYsBG",
  "key29": "3LGhTHbb3MxgE25viGKpVwhfvgjmgefPgYb58Ubmpd9D7eYnGd9LjmcjcpgSKNyYuKmKDBuqaoUDvZdJvPZJcniu",
  "key30": "2bYkVPB8KyFLWkCaJuXWWJyNDPB85kCF4Bt5xF7WpzitjSR9zqhyiPY4hQmjQhE5nQFBz2hXEg3bxgQ4cXrfzQk4",
  "key31": "2tAmB927YWjwurqsicJ7iNcYaLHSTPfubRbYisWpE9Pys57fZoS7vsdigk8h1oQDWFzwXzohRXrhJatq1ZNbHuSq",
  "key32": "bnHcT5Sn9s6FYu7LyqSNt6VQutomc8beTsqahZJCXcP4e3xas46GxcFzHZUyCnunXM4MQ6XJUL3g7nZQPTj5KZe",
  "key33": "3JSyqB7XGbYhoagZwWevL7sC6Ni56wbU4B36p2J77nocYuJPdh82cdcGj4XmANRW2FWqjp3i3D4ZnUV4MXatbKiR",
  "key34": "uhNKjtdYmr3zVboa4wHwx3yvW2Esh9kGvpuVkTo5uJ67xYpKpsTMRJra3tC4TT6VonJpqJkzwjuaDeNVjasWP1n",
  "key35": "4B2EzaC6abZgpxLaXSnBuh6MfQeoZ88sVsP4oQqT4MQTKzoEC5CYfgkHg16wANd4ZAeK9KWYjkX8aAz5HW1ioaHb",
  "key36": "eYsjYtpu6mVM7Kvk2pzb26uhGVsFTXS4V4zx57z3koniajE7rje6qfC1JPy13yNcTygJqkzxoaAxwJDPXV1C9dh",
  "key37": "2gNFQG5nez1sum9MjMjtibhXj2ajfWH7dbUeTZMbzecaNoWmTWPiU6gJPBYLZc2FTKfwE6VxMkPZ9ps2LLcmAWNj",
  "key38": "4FvR34XbU9vQUZ2VQ9PVbuUVee8ig8EpwRJfaJXohRfJY5ngffbuvB1sE4NAr6fXXxVsVjStqQ9fp1VkDbz6eMwS",
  "key39": "2E4qXcHyuGrEu5mwaqCR579Y15ePdiSg8Rxb6ExkoiDJkYnVVvEdgjiypSMecgyCaLNFN8os65a7bZy4ro6qQYor",
  "key40": "nsokgGotmjDCsPkNVRZAzDgxWFLho1Du49enMbwJWBbEZ5K45AzMTcfisaryBaGq41gBPgMunNoNY7arUWwYEZ1",
  "key41": "96WazMkfpt3ex2GzGJkJmX3hJ9kGTTe6c7YZWtMEWP7DSrBXKTym5z5YV3L9rd6cFvxohMBJtsmDKPSfG9WHbU5",
  "key42": "Sp7WSrSFi3yNrFAdMqo8Hr6VYBy5JMNXVb8nZKRPMTzjyvvEw3YrnT8jY1KsMcjypEK4SgdGQkR7Y3CNeT94uQp",
  "key43": "21GD1u31VPcaKRPTaqfv1fLTaroA8KhnTHM6sZwSDWJ5MxoNy4mj1TGZEuRiqidn3q3FBLtpHL95sfzpbL2DkwJd",
  "key44": "5bd3o9eKdXJMRM6T4ZfZkQo3Enn4NfJSu4XKfr11V5k1Kxx8xcfHdBWy1inmPhqgGMgoVKWg5GAGD6kZhB1Hz2Zo",
  "key45": "5nAYZzz1BPAo8SRur4gJoxs1UWVpPvTBi9Kqme8KSfbxKaSLpPQ4tCpYvnBsUgmhdcSMwa4a7yRbK5TsTzNFMNUp",
  "key46": "3qPMe9gWNEmWE5C8o1Luqb5W7RYqX2BETaToeCmAgDLTsiJAjwC27c14L1xcxTUF54hKk1m9ybT7u1o6QckWpjKP",
  "key47": "2PN2eKoRqZkAb5FcZTbHfJoFdNrEvpdAkiTsnyXvdWHHThvSY82dJmPyjaTTurcLvqyfq5H1ek3Zra23A7cK5fnm"
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
