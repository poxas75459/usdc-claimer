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
    "2nPmmMsqeFW4SdHP8VwEutBs8YBCeBdAMKx61ztGFkY69sD2LyR2LGXct9JSMiaKsC6KTnEwvrQszEKpQzX7KeVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32cBZcDE6kWnroNQCgRKLZLgjUk8CxbXqvqukUy9YqLGyQJAc9cm6mhBvc1jwGVYiZABy5jh4Rn8LgT2VR4CozNK",
  "key1": "RdnWp4KcY6Jtp3cUGqHFcLhnuvJu74LJ8Mktu9ejPtnbWzA5km7eUbTyEdjbevJtC8YKhp3vVTEgRJrDvnnbAo5",
  "key2": "4hJ3Mzdrk5VSBQxXQtU18w7bDrDDTBSpjJbPJnYBZmSFRhRoC19mp8vRNvEdXSdPkGkQZy1jxHLEozVisyCykTfj",
  "key3": "54C5pix4cTyWGPCo4XaSgN1quXXMQ3JeaXUwzdC6gLxpSkFjrbnLxBQyXyysZzCCMsvdE8vhv2bf9Qzja1yWmoiV",
  "key4": "4LRKSwVc5nUmTs91c4N2bohi3THktZpcMnK1vTndDWC5qynppAKRScbBXm6acTrXgQiuXcrhaL6LoE13tZV4rmQT",
  "key5": "3pEqpTqK9wybNfDL4yH6TXmL4sgg34m8iuDe7ZtHADycLcAC6cmjVdNTxNtuLHPygEkM8LiNSCQi2oTfvpARgoLc",
  "key6": "5KsELyoXewASHeHbvXtfW8EVu3JL1xLUbHHAgeBzZv4CXnUYCXF4V9Fmwx7F67LsQkvtfnPn3ix3cank2pm4kyYE",
  "key7": "2E2E7dgBHpFuZEz5iDP2EfLkfw17MDYPQzkdfV1AzZCbXLLALU5boRwkLApRvGoo46hNXeTbNiqU7htNHpzEfHnS",
  "key8": "4Rt6GADQK1Aw912KLECL9s4p98few2Y8YRTAvaGBquDkafJCf9WMtFFNHg8hyDg6naxtDy9feMuaJhWW5WkHbebx",
  "key9": "5N5SrfFK1sWs8gxiNaktSuPHMBGhbQY1js4nrZFEq3nVCzJ6YdQQJbXMMxSrQfinUxMezKuzqPRKe1b4piYzbGkJ",
  "key10": "3GmB94gZHL3Xz2p9zR9fmX7NSciFxEu3YyYMAYqmSdERYzeorfvfyMQmYGrc88W8uZJDrC2Z7kLwK1u6G5UTCKsh",
  "key11": "2jcgDFeBdanhrjaef5rZD3ccs571xbtWTWmLUHocU292sNRmUunPVcW29eodDnWUzbbdxviXrNq7tmzxbxPpDvtA",
  "key12": "4oG57Rmp172qfAUTst564feZGJs3dTJexPz31TJeNcQjDvabUhoEdUHhjfQcSmWhBURZvyDLhLm9ehA7iV1KjsUH",
  "key13": "3fsaFAafUjqbrcKCuHUKENaGaQNUF9Xh8w32FkKL8WXJgitjD8pZYzmdMt2cVCL5C8BrCtNGP2CjgRYUhyuYSBnw",
  "key14": "2FsRrRRE92TkTzvzM47yiD4TvFjErxzrC395c4by4PnsBT4AUceuSDiEJXGYzWvakKuhyPdfBL85dfo7t2J3m6Y1",
  "key15": "2RqbpKqPjZJmjkiLvcUMtseK1QcJXcePmcadV2x5b8NUnLPQGQsBsm2jHBQgBjMKDNKRRC65jtuL6qhcGSzjCE7x",
  "key16": "5rYiJsonMuqpTq2GgYFszrL8LZEMaYQ3iErmDyCQUjeZxmv3fUS5kNFA8v38GUEpkusRrb3BsQqGDeq7hs2rjfhR",
  "key17": "26cnSsYD6Ft4ixKWQVDqfkqWwwuZKBmpTS7sTbpzKPiHqdm9Z6EwMYzsQB6DpyRCG24uXx9TZ87eAiv2skcJNm12",
  "key18": "4R5FHGj6ps7pzYpexQqRkzmHbQVgYKb4eL3zC1nifr5zMDdpaRmGeQymMuphM94nivhCKbVrLM4hwU7FKTHx1zDY",
  "key19": "5VJC3SG5QbFiJJVaV4m8NfVRa8vepCw35L2MQ7VEvbYmxyHxDZ8QgwQ1WcqeqEXkdLYbJe85fxh6zt1p6BfLGTVw",
  "key20": "5YbwqURSfDdiYBCffRmEiNdNNqcfKC8YN727TVs4GFzsDebji45megEBYXY7jAfkB3cpRop6HjMJoK9VWnZzAbeX",
  "key21": "26U4Yo2hevRzUQuQfpwzrNyGSooGQGYkhU8MRjNPLeQqoQrXXj1WCJTKqnWdZuLHLBivDWzMC7ztaarfvDCFGsyi",
  "key22": "yQCiJMGdBLNnJLjpg1XNXw92scPRGPeB7H3dt7pe4envUz8Cafm4CHuDk2FUqcqhHiZ9eb7jtUrZS6ZGYsXxvWJ",
  "key23": "4NVngCTExNf4NhHqziNSQehvhJixoNXgiWzydAoiWC46EUNm3yeokJGDtc1KTKMRoPzQbun3hHWLBiaj8oxum4e4",
  "key24": "2rJcpemtcACW8G1xjYMKpj3sNEiBBtrqhFaf9m7hQUL8STtsQTwNGx4Cq8DfNCLdqxApPx2kBz1BWB3XmEP8TYRd",
  "key25": "55jWzxERjAA6cDYYeVRy4DXWK7Jbr1XMyrFQDJ8cC9ZKB76sU5iMRid7sU1BmuKpyFEg85SpbhAsyEHAyYdCT24p",
  "key26": "4HUJ63WPUxVeQ1AqvhBj78rurXGtun9STRPVSrpEBkU9eLrdjawoF5QboqoRJNkMWPCtdxiPQDCDLXfHZtYkCS7r",
  "key27": "4zC91rStaE6zQRMmTkwDANgk1GNFgmXy1CKqEFGa9Rv2UY98u1sjEx48Cx5FxoRLqMwvgmeSRhsy9UuUPLu9XTU7"
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
