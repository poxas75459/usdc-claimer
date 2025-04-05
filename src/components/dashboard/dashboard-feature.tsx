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
    "5ZT8xTFFswKu26WTDNtiQZ3TFp1is4FoZvS7jDHghevvCSP22xSwB2hfFoW55ZpBZU3Bwu3UXNm1ZkeHXhHU17R9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RKsovevnzytPX36WMTBUgPMnDm36UzrYMADpD3awKEw5gDwGwTEGPQt28VSVvPN7B4emYGphN5Ww3YGwHwvtSf1",
  "key1": "3a561gfgx5UKLWrgAb6CkMGRrHV7GaDh7W9mbHLjCxhzdZgkVzN8f3DupRunxQpCL73JieE2DHjoPZCu8b1xE8Aw",
  "key2": "5w4RwYQqYbznGk16McoGCjXzc2vQrvtk6v98TehTzAuPZ91Ek6L7dsxEx15EgiqXsgZSbgnkEPUt5EBek98rezG4",
  "key3": "59efG75FUk2LHR2dwAVBtieCuzWY9ZtrG9kt8mV8otcB1cayruVPkUwDwuPyDSBuoUtggf4VC9tykQmpc2penESc",
  "key4": "4uWxj6yEMJ2N22DKphPAQJ24XdNZE2N1kCXur9P8Zc14A4YKcdfwesQTwUgUThg72g1QhEmcnBRCE1aaan4cGHGz",
  "key5": "5KQN9BwkymsgV8qx51uZvvEjtrSQwmpArb4DSqQFZLBfPJCxzjLD6yCfHqzoMZHmKKJabqNFkrH3EB3J4sdrPWRx",
  "key6": "SSCMA2tZUEgQtFLwSf5LWmZuQ18Dknm6rE6QC3hU5GLWX5NSxjKMjxtQAgHUxF2WB6heRpWNb3wivfY9x8fMqxG",
  "key7": "3rU2YEQ8Q3ua4hNzhFPFFaZ32hLr3HN1uhoHjaKhZgfkSgAfekdk1XRGY2JqgNqHDu86doNf7w9Jk9EVu7jzZUCL",
  "key8": "5dCqH4gdcYjGykuXxxGZzQE5cvCccMCxWyQt17eSHkj8JgsXeAu5X48oeyewkdP835YAgLr7vfVsBaUBbxLaKKND",
  "key9": "3q9NeKskvywgtzjE8nVk3Gyiq2ctxokb9zLUteiCbGXjDrKvUU5eLuW5dhB7tCtAG4hGn5UZ4ga1FMittfTgw4jM",
  "key10": "3Q918P2pktTcdi4sr6wdEQ4eDKNbUan3PTLYZL2wJwBXi7F5Cg8igm6u1FeiciZj8BSWjecRwYr9SpfJDyiJ8J5D",
  "key11": "oivk7KghKjTLu3BMUfoXf4xrBEAxZQbbcmpUQcJsWxPJJ9yVDnTbSkRh4ZrTaZ1yH9rmhxj1TjnakfPvJXfa72f",
  "key12": "52PTW21gQdsFbHLQEYfcPi15Ryxe4TwNVoDQ2Z1VtBUUxZF8m4dy9SRcKUFoawSPUgJz5Y5Q5meuXBmpNksvc1pv",
  "key13": "QHoExuFNqJTin7USN7f3QHKtaDrNvEHrSs1nFDXo2ZvNong6FkqgiKXMy5mEk3RPUYnf4C6tNjeP3PmU4w3ucBs",
  "key14": "5cy5ueQWQcCwggqNNN6w2nJ5rBqiEiYC1uyhhVqSns3nSxNVpQ9jfpVBDQJrpD3AiuH1WeYjkjr61gK8b5KiZ8Ze",
  "key15": "4TVxAHJoL8yNqGhejyM7Vnwod4vK9SG2xc4oPfhYQ7joY9CNW3iXa5apta4dRxFbGbUeBbcpTs5YypAqSrYZhhpi",
  "key16": "3kTwPqfff13d5t7XV7yEXC1vadrk93wkvRzntx4H3hW9fgmnNqoufX5T4ohftsna51mu1bFMQb1cLBRi5JWWBipG",
  "key17": "3qW39uZyKndqtELDPsw74wKRC1mLcJEHP7Qoh7T4n4MufwsGQVnEbHjV5mABwy9p84LdaUm4ppQRet11vcujGa4R",
  "key18": "SLEjKSivM4Px5pQsdyuvig1V8bPB9Jxn1rQDEwUAGfnSWfxEFRFXgA1tmgJJASzN7mKSojhBi7abA9tY8BADCAX",
  "key19": "4tLRqSZXuoCFLV1zM5wABM63tie57tnmD671xvLNvRo8oNTpuZucs4T3hsCR9SbXr1rhvt6VbrDDmL8p7XapMymd",
  "key20": "2zZyx1cmcYFo9UMpMgSgNiwanTx9xFbpUv3Q4mkxgGUauHg4XHsRhn1pLsmbWZrvpdmwxqQfiBai4PmAfcVwscys",
  "key21": "21mEZbDLPRRUXV9142b8wQn7q18v6Ks8KUpCK9t4itDhbuYhm1S5QzDWrvDSU6qtNMERi2ZbXrkKQbFis82DxHYK",
  "key22": "5b5ACZ4KM3LssHWaZwz9ByuJQx21aTnUzxAK6y11LGzdyEg74rBDp2uAGXmEn3P7rcWQGNCK1Ks8T3p8LRCkKvU6",
  "key23": "56eqnj4JWKFdmpYA7HHM3PeSrEhYbzYDoK92iSjfMykHCxjevV3qxYgEGTjMHWpWVgFeUCUBQ49mzDoxHCyoqUsD",
  "key24": "2VEh1fnhSoHhWWVe8ee6BGXt7hxwvkcEFT7iQ2DrfdfscSSeJLAEeLrS6gDaUbymTajcLQETLh5uEhxASEu266Uw",
  "key25": "36ArGbzBs3HaqEjBk5r2z5pYtJ6zvSy6n9FRAn9ZNf3Au4VtKyZkZmmKa6vV9upYoawfMtENntcHEZJczriubrU",
  "key26": "4XGp892s5p7dhvizmUKN4SiLeQaVAauD42oFPFxro5jFPiuG4epJchBcZzvgw9iabDh5kjAidiapf9t3fpQ4mWRi",
  "key27": "5PvWDcDyS82gGMXTn9C3ovrQ7ZikuTBdijHZusiXNrdW7FmCnfn6nbjsesrSGoCUGRRmRsxujUHcae4hU1HELQrK",
  "key28": "3ZRW7Vyy2Tr1GmJe5Y4PXjjGou9HdRnoNu4tQV3uDDP2kqoSt1fxoj9KPmpUa2BfeC4nmxm1bFcRf8m46cF7Nfsz",
  "key29": "BuEmW1hCS5C5vP3VQfkcioXNAFwihJUhpNNU82xnwaojWdGzX6D63jn6S3ex9a7r6yQQRFugbCMD62EDs4fDE4v",
  "key30": "4FztMEfXBmHAV7vAVStcqjTLftb6q6QwiqvDtA5UkZ97BckGbJLxQ8DM5W9bDHfGMbcr8jZQChwtoivxgA2483c5",
  "key31": "3u9Ys3H3L24G8JbcfSPJh7ZQDX31PAJS8mvZWAyusC6fvvBEbvfvhhsALfSNbeppU3fNx1Hz6g6h7aajXfreQR8w",
  "key32": "2q7E1BDWYNXSG8Bo66gM7wJ5CvmyFTZKMQHKRqMr1cxJLuGHo6BJXUXNaZ4Zmyfid4iGEGsPSTRsQsBgG7bnNc2P",
  "key33": "5DVCpbAqvGtgd84Xq8E4gGmZ1Aq6eth483miPXm98QQTU26FVc4dyT5TeTxnF8JhjyNTWWLnq5PggceNjGkhVBHC"
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
