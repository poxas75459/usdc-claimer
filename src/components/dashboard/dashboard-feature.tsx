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
    "4DtEViKBiKsRBMUKEzuVQzCLv6pTgdL5nUU4vQqdpiJzNJ1GsbjYobLtcECWRDw2eK5Xn9mdXd5FyrQma9BeQt5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z6ePLPKJGVBfzEQHVuGrhZ9dfPF45McLo2mSMxQBzEBFkoERYdh98bUf3pVwqxMMrJMiXCano1kauC1agNA8BbQ",
  "key1": "wB2Vu7WSDadYkzkTv2NFySTmRGCysitPssg7TYvfUPVsWeDefhNp54zaBK6Rb8ZMLBKWd4dcMcVdYKX8ZqvpRbJ",
  "key2": "5prtbUdyr5mUZRb7nfv8qHG4ptPtirXd1BtQJjBJS96Xfj9jZVAT5urbkfAYkV8tmc3xz9iLt7MCdxtR4d7iXBt5",
  "key3": "2La3W6rgr8uLkANwqfLsctLgvAJUCpFTkeSGsPgeinaY5ryQ8qWrqFKLPNTSBYE6NzxXdsuW8xzJ5DuGLLb2D24U",
  "key4": "4ZFXRY3aWrDq7Ut66aZYMVapyN2hfdvLc69i3vuJcybS2foeyCeP9J8sFyhgtYtBRc7Dnki7D3MysVBW4B8TgYoa",
  "key5": "3iVXrQezfg7vcccuNBwJqw5hSCRJVqp61Ha2ftDQPxoC4QBk2B4HoyZUJkN4R4sHLSiB2PySR4WFf2MYYVWwZ7AL",
  "key6": "2FaqDABSRmYnaA72XNcyt3QKpidbJXhhpME6bpEWYgdwc7NsTceJvmduTYjRowYw76M8K5PpnCWJmzJEmtFirE7x",
  "key7": "uCo7Ekkxngvf5xVmiKU1V1ZBECXAkyEZnjBqgMo6WgJM7HNyyGv6HGF3UqdQbTWsE8C1fKBeT6Y7TLSeN6Vy6xo",
  "key8": "58D3DUyjVnnzckARs23ToxsNxW1x2Wr6aZczrtjmKhX5euUjmEBxN59kKb6k94JB8mbuiHWrVYWBunmwb5uEuPjs",
  "key9": "227ycRRWANZ4PCvLhSMQhnpeXtagMPACGxeARRsxp5y7nnrUdo6azcChQfDuqWEAxuNmZewviXiizb3jNsg43fju",
  "key10": "5Aqgg3K4Vs3S5UEQVmwCBss8VVoEbDYkfHkm8KSx2kRAqueYeJErmy6bVfrWLWjepLnofNxTPf6tFgWXNXQCCqwZ",
  "key11": "5y1hWeTTqpCtmy1FHz3zSisCPWvh9fXpo9WuLxxndFPCXsp9XaqMQBv6QbWNUyTLSNWq9Z79j4deentjSzkd1Ads",
  "key12": "3xmBz3uZbsbfMUfaq6eZYr2gW48xbEa5tHGpJoBDA8826TM21AavqTYPBWtg7Q81HXgqpTpet1nZhAuCRaC6ybiY",
  "key13": "4rtjcPRBpYXRYVvhSDe1AYSUzcB8jhsCeBsdBXKP4MrN33BZDzRG5fD4v4D9z8R5GUsR3uK97PKjH336BFfxa1u9",
  "key14": "tthmZRkP6CDFHH3tJAF8ZGpbUvBAxfwJXthq47C6v5XCC6drLtDnySAgume8RxyBdJcZ5DzyXLsAp8KoQTHTPw5",
  "key15": "4pq6tMnaM2x1E6ywnfBEHMNCUcLY6bjGkb9TcEbLpPd8YP9SbobKb7fbbtfyUsqunvP5FZxFKEmM3A2MAsyqJzer",
  "key16": "EmKf6kwyBywggqys6FY2gndubnSNE47Ziad8adPVQB37boWyRLLoWzoJz4qhv6jiYe2Rxj1peN3Mgd4cxLPJTw9",
  "key17": "3fYLUYwizms7rXqLo5v8iWq2TiGfKi9XZ3b2Agke6PcwhY5scYmWTMqofZTbwmtKkPwnRpQ7MLtdfaq7CiSktwPo",
  "key18": "Y2W6Nw89QrygMk3Pgapo6CWRXUeaKyzqh6dsViWBikEosBJ7ggXNw2Li2Pvcw9KQQkqS3HHedhSvUEXVC8P2EXc",
  "key19": "3BSJYxyQvJw424J8FhtmAjxJag772myKFEYGSWFgh6uabbUT7r87NWfQXfmtwYuEX5gSnFAvxnn4dNEBCu9uH38C",
  "key20": "RWNfSJVNDVD9GTqvSTGvj74jLtNzgfnqVoxUUxbneecMyAeus7qsJyJHgYTGx889oGExLeDQTQpnEBpXA947nB4",
  "key21": "2H8Zg7kzZJgHwbMS8YMybTt31owG32ghajpAh79DenDj2LKvNimBkvCbmfqyAuNSXDGTqXbjd5GPaY7sxfsMD6XW",
  "key22": "2UWR9oL8fMt1RYnJ3p9JkfkToiCAPuiYuo6mNdhXaNTPofesLWMCVzbrcCecovUWpzYAy9W9wY4Xh6KnCe9XUpn2",
  "key23": "5NfDccFpDioEngPtfmB1SeU2NraC2M8uaERoYDJk1ezFg2PDEYZ1zAevFodKYjgmJ8xUygr36zFFM9dCAHAGwyG6",
  "key24": "5ofatfBL4mSWNVyHQWR1CUzgwp8j1GFviN4ogwmabxxBEo53C5WzJn7XGspDudsGJWHgKxxeMM1bcVg2LUsb6u4C",
  "key25": "Zgam9V5Ao8WWE8ZriFhAVh51L6Z4sRYZMkQubdkq32PvgjqeMJPDGxXo1XpYuHfSZjZDyBU1yW94MJb3nUY2XLD",
  "key26": "5GxRAKE3bjqTqQTCbGGVqCd2fxYq2fbx7EkJoyuyUixcerb9G5zpPfCSqxU7JQ1NSFN8cRPEu9srsjCR292W3P6j",
  "key27": "27NjssnsoSBofBFV471TV6tV6ACsT4VVs4FqTstrgf93XY2NYrTUxVNiJGLH8gSdLfpbD4aLuM9FEAgBtVkZiFEr",
  "key28": "5Z24jn9iTNgTDdLSB48FhagSVC1CrqCHPQ3csoRcf8Bg1vkGNKPR76hkEHXM57rW9dT3CEWwavkNZCndNXCsEQQ4",
  "key29": "4KVPEmWHbu4JmYudYysZaFZFoG9BUH948WjgVG9CYnAtU3RGfQeYo9ZBphZEfpyMk2hhJxWzCmK6zqPHMy4ifTU4",
  "key30": "5FSpt5Veua3Ay3wP8GvGBZ9DJuKuXKKTwJBDYkLQubVvSffpFLVx2G1Wh6Ngcu4JxN8VKn6t5EVf1e2d1yC4QqDJ",
  "key31": "5DHrhNJBK1cANpftzbtqzJVFe7YSdSd5V88buHbVovWMdnnhJHWkbtZ2ehkAcZBQJpkaxn3DUJt7Jbu3DsTfM7U6",
  "key32": "h1Cv13j9rk8Xw3C8p79ZB1VhJxsNb6vmjzLkRjUuVycrchbVXN4J6PTPRsp8CWYEd1NMwHgrGWdUpvKErcpXB6Y",
  "key33": "3HVoVjgaVM3NEcAeVgg4ERvrai5vjxtMvqaX4Sftr9XXzSpsr9EvjGmPVdsPcSWSqoP1P3yUScXgqKrnqT7eRf3Z",
  "key34": "rkFLfsnv9Jm9yDcqinUV5v5XsvPLZu9AVg8KMb5UyNKweYHzuqDnFuwBNvg5bDwxdvLaQKCdMthJjTT8oWPZ7bw",
  "key35": "2nUCmeYfkGBNQhkNeXiicogWwGDRBEsT3i4zbFPBx8aQbBciXmLVu4AigarDbTVWfndEVjzUbKKu4YzkVEcvmd3c",
  "key36": "2TSReEUyRYpHB9UkfeacYh9wpxkfrW4mxBVwrm2VsadfcghyumGF1u9bL3nymd81SADswV9waBudYCLqAd4nV97Q",
  "key37": "3YGXBEFB2UsS5tEVSxAn1jYUQPmTZN3ffLMu6pBdhGeDqCWJYCPDUS7cDXr97gAKGt3diTsAwvDYsu3XJwkCJfFn",
  "key38": "66hePNpKLLaWrc8GiBBG6RH437BuyRduDEj87UVKhewxERL3UPjPBtgY64JCy2T5tbFovZZu7sVANC8Y2Lt1KVPU",
  "key39": "4vfHbUT6LDHLfNEyrLNCxXRLRWwAsPV7AQY8EhnZDK2pxVezk1CRaybCpXTo877MpCAHjxFVeB6uZmy4B6ZqweaK",
  "key40": "39DnhyYvuiWHhy5BGZZFXzjfmp4fVeou5pEjfpM8GWvJpzo5cERtTi4b5HPNmHzt4F6x8X8Wrkm1ZsiUandYtZZP",
  "key41": "3oDAdeS8TdASiCBQWRBQBJG8Wc8mTV7Lg3m558CHFuKYHRrfQq6u31SEr6H497f2dV5DkzeinzjYDe5iA9NGZExD",
  "key42": "3Dc7wNhmokwtcGpzMgTAeFdJSycxruViUnuqXDCf6y2Hd55jdK99QH9q7ULXoF5sVyj6VXKKj5TKcjXcYJ4TLfT7",
  "key43": "59MpjD6YGnr2rZJP2fWJVzGVthTTGhbmTjxH9CRiPsrRSXcbNS9jmK79xSpQiv3cUmFLARScCEY94MxUmLj6vUFC"
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
