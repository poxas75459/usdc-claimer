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
    "27fpzqvFMqaRAbh6npghNGNePL4ovdAa9oZCae23vi8VaPq2bMYdXjhDwY7uCCGwUVop6CG2tXVgyq4KdPFFVSSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zqg6XfJZ9i9PfoNJj8KjLuXNPZozHZW2AD4hVY4ha55YqeALuRXnXAX1HpQYo8kzbZzx4MJuzH1whhcZ2WBSsyF",
  "key1": "46PBTSam4QqA5Zuz4d1REKcF1T5tS6J2y1jmAsXrR8kC7Ae79XWdCUdi8Hx53VPptFKGwbY46QgKvKvRSPbi73Ao",
  "key2": "qTzitc2X1zt66r3Zxd1tD3z1M4Q5MsA8JSnqbT738iPMXqPKqcrpA4Wtvhyjfa9rLeKqnFTpyAi1orKSjNYnEoj",
  "key3": "3L59rkWTHRdk94C8yUuNAjV5Uya96t2m4SR2Fk89XChDTnT1qTFLRL9wcPAkkrGKeHbLsCTfVpwgwJ7RbtQ86GQY",
  "key4": "3Y2dUKJq227iTTT3PCGuZoWbNYFHjYz6oSXk8jVJbAdzKLdDWzHL4WcGVghu9jDLqYYMyrNqsPvJYzckFfKZSk6w",
  "key5": "499vRqy3qBAwA6prUZwKexNz9gcvUZNykfDkRC6Vzjphs9YpqPvD7S5PVCK73n81VoBaBP5Kv6wPqJUupaEr3LvP",
  "key6": "2DjYfSS9BhMYdVtUiZq6fWzu4r1NyprFZ1fsfnSV4FrQKZ5f2hAieHKKk8zUsLyXLmtd5DkY1oLF48Mk5BeSiVGm",
  "key7": "2oV99Q86GNmZ3hm9p23RhofAJvrmJfSWhivgxaoqTDcXnsACnmYGBKhJi924evrRNUxHG545daYtFNF5AneWYvA1",
  "key8": "4gZDqFELMGQNdxp1aqpYnL4wEVZYEzLtSjYKp95JVPpHYNYHyhpDGzQzF8WWRSxzTRXeZSWXjyiP9sNG73TsXdbx",
  "key9": "3AogjQKNu6merPy11zJxZ34wi2STiyd9xkFkCpFyDb8akFHNnjGwS53dhC2uXbPhWyYmZSLf7XyKVTRnkiRmgRd3",
  "key10": "45j3UK3EAY75uoLzXi5E77pBJEgre6bBRtnUzbyGsHzXcAfW4PGoFTrTCx69mKvjRXFEhaKT6mKb91WWzrQcbBAD",
  "key11": "4WEn8rTYGE4UAEHPqa7fywzaKeK5dq8uTn4qnDAA5KV1fdmGCCvjsG4xYPLK52xJc3TpgfA79KJGeTxB95tdA6pT",
  "key12": "Hn7587NirFHXLPwLSdp4xHGfMLVbRfYJDWMt8EkUDhGtHDXPfieDLzs8eAH5XZE8NmuUMgSr9kbicBzb4cCDV7d",
  "key13": "61CktyKX9gDfE37CzdH82e6KRk7UDs4dcY39hgwzhZXMQvsVg2dFCoWNJnPhuppHhZaKT33taE7nsAv2yq7z5nVZ",
  "key14": "31NAB1U2cTpWxHmxMfkk2yAdNGBF6VvoFNaMQqf3ADg5MZFt8KfraXJprNvFZ1ptKWK9NJVe6PPNX7NUaSp5yxGA",
  "key15": "2jSoYH5JRfd329SPALk4LxeabBWSBhyGruyLgQ8mU7uvtxqppHer8FvG8wKvhRPvQBiSNutnxn4NQcgLmtKbGsvU",
  "key16": "5k7HqeBc4MtJGhgYUUTyMKJFWiXDMnM4cpPFLSbMQRWwiL69NpiUnrCNjitvoqNLf1dj2xrpyg3akCgggXCJ3F6X",
  "key17": "Nf6x6vno9MZj3XwqC88h9FYZ458uEiQKRuPWZUaCCxLDABC14XRuRQtd4czuNVUZuWxPGUTJDWehtoaSa51pPCJ",
  "key18": "Xi4sTCKuqFRqrauDvinXcWXSZYpgQKwWUUtw6btfxtjQVM5woS6P2JM7rjmXq6m27GeXcEKgiyrPTc9V6fPvck5",
  "key19": "3VKHWZ4a6j1y5xypiMy9mwUw3q6R5eUc58XvrmxnxCadJwWgMMpsom2xHckik3cDgbfkuSV6hf8Tq96n6YzewhkZ",
  "key20": "3BdwPSopmUhN54Jp6Mbuj5ucFF9cwiDa9gLmkY4NqbeaMJTxZu45WDjo8X7LcUfPTKz7nV5Tqh84uFLFs2MCYjcV",
  "key21": "3v16ZctruuXhLhkPUKxkuNr3qRGwc4kkTQV7TsapVF25YF6jKNGeGjAbQ8ejpUKZrfnbSeUL2PBVFApJzGAjxbrt",
  "key22": "37s6vL5QsT2JUHQewRtc6KaNz1N4sBCC3h3r5o4vMcdUj3QYEBcHui4SEQNNfQ3Fj9Hg154hZUpP88PcnHssLcmD",
  "key23": "4ZTYEB3mZRKeDY2WGYTaGY2aSJ9orLJ7Q4eMLWJ9HParwQxVccD2qL7zDH7sXys2SaCsWRds8SBetGUX2CzijXbb",
  "key24": "2SpnL9TXPsbcchZehdyEVT5qJjtvDhidsWZ79W6QbaA2ZqHDmctH5HZ8kjkscpp7uxGPvdB3GLtag7EburCeM2zi",
  "key25": "3Le1LnatcLAEfjkWrKQ4Dz4DBQxtscHxh7rd1h5KPRZWk3L9S8yjSP7BS24oMK7jMQLCjkLbf4JJiSM14uyEYpeK",
  "key26": "5yDP22vskzpW2riunaf8Zb7fvWRswicmFAsbuydq6Jnq4LrNfUjgeXJTTpWvawGSZA2n8YvAgZNRDdrtdD4E6aM3"
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
