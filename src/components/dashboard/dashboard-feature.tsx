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
    "2tC2DxGGuwk2LC5MmtRvvuEVf9j15wwZj7xf7LuuHAHcnEaWhJ7gtiYisauJ2PdEXhYGj47DdyX31372VKA5wTAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BFxQsLbGiEbtMMeJVGM976YANH3MBMAWRPbya7UZvLFg2UaRGoAnrbHYSgU1GWY93m7qBUoaCr4GeJLyYnUsXeA",
  "key1": "36Ajj9JhkGBWMAe4jFJAtNSBphA1GxEWeMmYpVUGeCZJTYfQyCrWbuWsS7GE9hVBWs1wvwzsrRBFvHB4xKCndhTn",
  "key2": "3h68ZGFZhG5vahiN42eVw5UH3Vmc6gkg42GoKJcg5Du9cTULA28Ty1yut6aL9XQStrJUeeZ961x8megLybv3H29n",
  "key3": "3SsgvRxzA4EECw5VV8gTH3gaLqw85B1qa3BQsS7FnNvX81AkDDxvi3JhsWEEVTh8WooPiAVZDkhYwivrtcb3Q5VZ",
  "key4": "4HnZskvtLgpMGu5LyCUFHdmoh9GVXQzWGrzfhLqanvCYw8FvZZA8h2fcaJAnjFEcCqGJEDRyu5fUSC8RoWYF8TY6",
  "key5": "4LzTUtPbmf9NP4btDodgFNTW6zJ7gkuATrDxfE3DcTYQHbBoydxg73USs1f44yv1n3knstAGDNG3KJVJpFGvPxoC",
  "key6": "31RQXM5mbpGnVRTxDSYrB5LnBosaERfnY45wT53MrPnhPAh2CdHtShEP2Wew9FmWi82ezbBUxcwf4UnDixBfAZwH",
  "key7": "yQdpfeiB6eThNGhrPv8UYA1jFykmALNRVcEZ9Hfcswk4Zw7hTdaCquBjcdjtyhrZgndfx6mYQAAupJh4k1za5i5",
  "key8": "5ibQYbytP2Eart8Zy9RtbaQE7EZAtzL5tgjfSuNZwo9La82u9wrn5dc1CrhDkgKw111SZrHf6KihdMU9xiDppo6c",
  "key9": "3oSRoGnntk4PG7hb6y5yXaVPFyrvYVCdfUvVDV7khrjqDiFkM1dmsCPAWCsZ3k7wKiwv2wTC3wxKq8xRB74SNgyw",
  "key10": "4uq3LMAKQHG1JYzXgoQzJUrHevvfQWYeZ7BtXUhsggBTGGPCx7YWu5et3P4cG8XqUsm8pr2U8GUsNXJo2fd7gwpQ",
  "key11": "2t9Yp6cDTh88LiX8NR6suwiBGSEEnnzqQS6GU1FZPi6FJU5kJZzkRFvV7GfD2d8nzGdwCM2Uv5RtddTiZoNCGu4U",
  "key12": "5BspAehiRMdCob14PwagCqh5YFxuNRYDLtb9rfyAf7FQGfEwNriP6kbxQBVUWmRqfkcjsFvahgBsLrknzyhuZmau",
  "key13": "3K6285rVHU8WG178JCGPCnWdQvCxWLbyf6sra2VffKWtTfaVGSLEvmXmVQ2ErJ7SJLev9vSwNpQ64FQEWGiwLrG8",
  "key14": "A34cqLyvq3SaFzZuvL66M3qgmVqsJ3nwMcytw982i9VFbhJoKx9d2LHGkT5WRcM5GP1Pofm59WQqU3D2DJh4a2L",
  "key15": "4t4EQAAF1nShw3JpwqwbBczFJaSimMEsGy9UncFfWJKvAnZfYqGrgTMxMmCT3yhMmhog8Mt3oc553R41o7DzXnR",
  "key16": "5pG6ndDASm5qqVA2S56t2nDMY8jbxP96Sty3q4D53vto1kxy2JwLWT9TWqcjBnuWfxwp7jm7b6ENGSuvrrstZyn9",
  "key17": "4SNhgdfg89jyn2ehY29toCJXRgTRWZpo7w4AJiAG7KhwqgcgoHKQcbcAbthY9SsMG2jpmXBaLJTVL8DgAnMoK81c",
  "key18": "3sQe6VKvGLty5q4HP7ckP7n39c9vcgjUTZGhviXLTEQSvtP1Tv4P48RRCchWysV8DNrPwjknz88CMbPHJcZcz5Wt",
  "key19": "6MaXZAXxaC3uzfZeAsEN1ZqhbAPfz5SGFQt7KvD99qgotL15sAhxLKfTA3wjdoTwK4g6PmdkG4AJBGmzRXUpBkz",
  "key20": "2zWpN7GrguwBBJPdmZ2U4Fj189av6XMsxm2V57P94EhSmocye335SovHm2UrzRiHMT4AynRZ8ugAn9SyEJv56CKg",
  "key21": "5tpAYN6ATzeBXeKmqaiJM5rNZjN4oyY2GYy21pZ9TxYD2GzeteSu9tPjQdFc78cSyixdhsHzqXMvdLYJYHiNpG4D",
  "key22": "38BX7HK25BeEJuo8zCq4Uq6zgTbsiqKNazQsKiHFan79i9tssS6Fes6DXBtAZNtPT3kCY4JYhRCroAPRXVst3egv",
  "key23": "47wHpGXg3faJDPRpdpDgXrSztTLqj4utVWMjGggKJE7uf8DxmuK9K5TU6vAc8yyLU1LVj91rAwp4HBhnch9PioaC",
  "key24": "3k3Jxd1kfFXu5G5Gq83nveZiqA1mwT2v8NtiNAcXW4i64HZu4PxiZpD5osxnQWBr4SkfJTbaRh8qa4H51kBasRan",
  "key25": "56oFSQwPM3HVgUbwwNLQ7zKUPvLAXLS78o5hCRc5CpwDUMHKaYxKodihkMVUgmkG98i69o8wbCnL6fv3ZASPRC1Z",
  "key26": "4abZGYVTGWwyZZoNYeodoPoyjoninnGdiMuGyDrBKDQsefMJ1TZJwLPnJuSgGnxJqknNKaK4m7BTTrZsKWqZwyJK"
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
