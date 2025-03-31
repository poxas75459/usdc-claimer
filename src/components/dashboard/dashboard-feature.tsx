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
    "5ESCf3bFpuKdahK81eVxdb9u5VakTEB2st2wxJeHXcacDNn4uNr1J8E3AsJWPgg6AXzp2uwcbFsvk8gr2HLiDo7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MT6HtMSn1wtYtUuKKss7JQs4BsjHVoFRnu2P7pxKJyPBBEuWR816ttz9MxRZ1UuQbwV1p1XmA529DNUi8DseXm",
  "key1": "2HVPcGQJzFKaMGrGwVyhpBGKHB4V5zJbSTjv8itMRBajgrzKv2iXiqPSkdqjMsVtxFrx9wzRW5BR7ShWuHALCyKG",
  "key2": "4AfE9RTEkqfxrH7jnV3eEf8LrxYXnRtAsKVjNkmJRG4Lv7gddu9Zu4brrY58iFCrzwk3q9uu5oiyDhFEYEeiCudM",
  "key3": "5aSWt1BE4X8tjRtuR8Ne8s5m21RNySzmRN6D8mCUF2GknsF4YjmQMhs8vaY8P8AmVFMohEx6zpAghWjtp1guuqVf",
  "key4": "3R7H7D56zxsdEsndyvUj95MpV4Un8aWWq6WYewDy6cGUqVpzGvu4uazGo5xXVB3fMpPytYmmwoBo94R2uGAaLcV4",
  "key5": "2fxndtKWXZ2RJe3tuMxRWRdxQGooizgatcrXFphYhkWYAuSgszSezRwiT9ffGJGfXjeNW54px1xdK6zSZ5JrnLrM",
  "key6": "49Ni4GkAwLNUr2AyjBR8HuGiXBWzjWjUnzj5A1FpQccSoa9yTfngsCSw5vCG2eUFDrRaJFGvWBmXHARxWyue9Xet",
  "key7": "59m5y6BsWWxgijMsECDZvSE2sUNwHtPsNYbkv6FrdUhV6Vap2QEk6Uiw1CLDfQZRJx5A11s8Z51yZJkQYQANwEj6",
  "key8": "5Hy13LnxCLx8yj6Hrbkii7SqJZhJgYfCEDhc9YCUuq3fpn3a19kE37MC1cA17Bs3W6ssM7uhxYrt8SbjH9ke7v6F",
  "key9": "59YeK8QTgrjNa55hMrRRqP3xF6exSJSEFzrH1ck2PEpmVqGg4GYnSPX4PeToqCRmRbMXKsBa3MMzvSaosiVi11L4",
  "key10": "64a1DiqUQgLH7a9gZpbxwBGqox6SuMuNTpDEd2AqEW3WtXBctF8FQYq2xYLoJimCB6tLzArj32ydNt5f4MysvCM4",
  "key11": "5sR8mjevtRnDdDJiUHL2R7e5LeVFs6wU4hzMC2qkmwo1yRfFhNgfmqSV1hQL6gCvFtoun1dd9NkKpfDQQHwL7QjD",
  "key12": "5JddfZxGvJgY3Yq1AxR8VKP6r28gqRPdfsmxrkSLxejJgedbDNUURMY41qKQ7oQ71n3hvPV7tdCocdb3pLtHQV3i",
  "key13": "4b3VhXbzadjXkREhn9TAGYMYQesyv75XXA2JqbN4KqhWpn6WbumQbfvgHqWsnKv2hMjfhCw9UqgxtoKrGQaXvGzH",
  "key14": "2fadVZ7TUs7PUgT7fSjGSMqDGixzoGoh3CeuyAQxpnTZwey7FX1CUgrsKU74AEv6nkAK4K5gFZaZvr7dygsEW5bJ",
  "key15": "3wWt1cUyrGooeM9R55NTcn3pAWYxnURBPdVJSEwYdyVESDiCGAQV7RcHvKzqsGMRYeDzg5eV14XoR7kHeg72ThSt",
  "key16": "5yRNmwP5C6XvP6n84a4vLgeadHJvd2HZoqQTSpZJoJvXsDTgzh8V7JkcQx1e6SQupzXtf4LtJyHV1iQwSribWj4U",
  "key17": "5bZJ7EUVR4b9u82vs6NvUU6h1vyoiPcu345E4qwEv22TKtM7f3e96yRzi2hLmsDec8uiDCfRTRHnnZcVWVtKzEev",
  "key18": "45gZr5Y2JHaSWdg5sur5D6fmn7x7tp8C9oqh6mjG4D48R8rFKsAGfmxK11Qkapgghqqa2qs6uZ25DRRwvLvDjjca",
  "key19": "VzrCoWqqsMg8y8JoTxXUzJW3LFW57YQP9iptkC57Kg3ELJoA6mpoMMJK9AhWhrU22eYc1ULzTAkpQmwU4KUVeMe",
  "key20": "CgfaMZNesJeNNsnPnweE8NZ2fWPnnzR2aGp6pjznJXPz8d2VGfDR5JTZx2ngchYVsbjgo5ANKyvmWcGHiKGKntV",
  "key21": "5ffHotavuG8sWCZbDeWKxJh6ZFpnCRMnj5LsqshZYBwKuamnAt1GhrqGkAsr32UVPNfQMfDr7kwT77om8HJUPvQF",
  "key22": "3aCVe6cPrZ5arzGA2unEcvGujiCHKmSeNizGNYhFtZcXuusjHT5wYeBVeKWgjqeD1BGwMfAkM9KKbJiadDNxak9r",
  "key23": "4nxfbedid726fyvTJwFB5Wrdj7GUSGGvxx9Lwbg1dbDXz6n5fdy1GvZRw8ontDw5sRM1ibUJJ8ji3b7S3WDC3WJC",
  "key24": "37vcDkBVKrKe8S25TiKVLZufF3a5hH5chqngaF5oBenT4k2HH4tQU9amQC1Mfu5dyVU8dMhhfKxvQe3d3ZN8YMVB",
  "key25": "5Sejc2x4L9GEJAXqYCsH6edeS5tHFHurUAq5tw3ZHv1Yw7sxiMjX29PBrJP6CRr6EtAJwNMrEqR4XEckkRVcbRjv",
  "key26": "29CRp99MbF76K6nQpsxB1QsGSWswmzGomoQfKRumVpL6X626o31RVbmYmDdfyffPGt4p4vfoiJG4ofVvHEJgcCj2",
  "key27": "heAN95LTM9TPH6FqYHjeLYCE6Y7sptwrFaSMHfAXbq8EBawyNbzewewX1tsXCSZbXWFUFAJcVTpcmvAinEUBcHp",
  "key28": "5rqckPqZJfYjKhWcQQbK8kMJHpjPV7f5EGX4orTEXwCewZgFEoaadQYNzb4G2133NXTktwSoaDguAKPg1qLydBJV",
  "key29": "3dLmveqa4fRwrqo445NGsn1tjaL6o61hu4CbmexKvDy1XPReyRjvbYVBccgZWQTeZohwpdQq8awAwo5dPWqA1FVU"
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
