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
    "2kmxnATsFp6HZtiuzCBo5HSsG91FbZbKQxQMGMi533V52CNsVC5iEfB1GMusCVvK5HqA47qnFz8BBmJMJNwnNB5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qTdKZN1uv96pnGnw7FHEcGB2RFPz8KtLnhucfom3J7U4XK7xGXcpz469fMwkZyuH8nFAiQA4pusuE24i2vrbSBf",
  "key1": "4hh8198onVZZSjZudZncaeD7yKtTKsDgp47zrx8WS21QSbwr4qPY4zVy2ntCPxW9xQB9ZfCDJV77aiwEzY9nd9g3",
  "key2": "2fc2dZHX8gBvBgRMMyGG7ufwnxaz4KsHr8HBFPyrkg34GeE2QdSnT2eNKckNBq8vvaRLig4MXXHqKwwGcuZdCbfA",
  "key3": "3QQVRzJ57r12gbq54a7twyE5A9bjJuvMjeYqF7SGtehSbonw8Kb2SFKcbTC8DFwKRrCVAYBEV4j2WJH9PTUwo8pQ",
  "key4": "52MGe1sNP7GdP84hWqtVCr6ZSr6dPxSruiSy63UfshFT71KwfYA3KdAjrzXa6zeXJUMBevGFm8e8tq1etNX3ivB5",
  "key5": "G3S2xR7X6tndumXGQdGiBXeX9McLjKMnHgbgdDGKYZekSsWHkoLgm2hYMmiYVYLGj5DuVWZRzrxzRQ4GR1HAmYW",
  "key6": "3FRRwr8RWB1ajBw5hHs3kRHoGAPiyVTsT6gGPN37xuNMydZtJaZNoxenrFUYWCBLUnpd2SmcNrxhjTXu25cbCXjD",
  "key7": "3HUX8UaZCQMRoCjQCWzt2gg52Z3XYbwXxJaBrMKZuyimv6NatsWex3RS8nryBjybyJNYRLoyVBt55MypMoHQPDcN",
  "key8": "2Ax16Xxi9ydz72jMbXnB7iKvMKz59xj9JWKCkiHACNwax5mAQg2vzKRP4CHTwosQykQAk3rfwuAd2VeWLR3ePZ8P",
  "key9": "3V4fAAGBWX3FM4Rs5vJxEPchfSo3TUjsmpiVr4iG5hUn7sZ6KGVFXHCMBdsZXyHdJsNSmQgW3ndzz29gEtDXtkG",
  "key10": "3wYPpVQrzPJNrRBgvMZhV5foKg9TmrfnfeaX8zEb4pgHnk8hdxoMnxKYutLKy5M7Z3nyjqqw4mJtLwSWZShx8MLk",
  "key11": "4bYcpcmXTBMJjMWWwPUmbKaf4Mx365JFP4i6jsCqLoXNfqW5tov6c78gZp5c1GAm9gXM4od6kEKrytrbU42AY4Bi",
  "key12": "2M1aqQ2vTzTUivmywmtJAnGqdbWRCLMjviWB2HbCAv5sWDxCCdXg35tp53LwWVyLGRUWkt3EsqpssNT6i35iB5Ja",
  "key13": "2oAqxZReXPiGWa1wSL2W6KSHbcCXN9V7B2R5VEVburL81BVFffJubbSV9WX2wtyxXbNSR9NymjdQwaGfEk7zH8CK",
  "key14": "2K57CTsqXzopwPtnSZyzgFEF1ma9VA58hEnEgWNdBeFMP51D3DYUU14uSpi1vLHJvpMMR54bXy3RwCf7c7Vn7KGX",
  "key15": "2rBcecTDtdR92XLBR9Rt3Ct5tGaZsyfvKXR537gqvnWxPZ17PEY9FG5cJgsEU6Fg1Fj6PMjyjs7CW1pFeyfCM3ti",
  "key16": "55MphNaLr6vcfzzcj4Rs3YAiUMBiDbduA86rt6X4KoCS5oH4BM67Me8CMKk1ZvVXyAgX2XXQMwWwvTr5T4D3yVsg",
  "key17": "iS9rN4P5Q7bSqF73QAeJwTP5FPpfTyfzZhW72mUAifqJYHuDaRk8e7zbDt8ceCYZuAXu96D1m3Ct9pZ4WqjV1gg",
  "key18": "CYx5J2mt7x8FJRvmJLgtybQ9F3P3Qviq6aEW7BTF4fQmobZVb4uKEbHetUeMN49ha2BVb8NxN52S2tuDNaaxpy7",
  "key19": "571XkGmp4JdWzyho9WsvQyoc6j2TbhxZhb6sx6ayhnETjN2Dgcetw98UaxPETCPG9UdsRJQJJWNbDajCJeLFqWie",
  "key20": "5PJNSRxTURu2h1WqQyQY3RTEf2fDwMqwQEayGjSc6ZnJfKG2SPJpVuW3FsAXBfNcHhgsZC83Jp6UseHW7UrVQq6i",
  "key21": "5XmDSUvmVJWb8Firb6CbRc4R9rwjQ769oTgQNBuCMgHNHWxG4NV6euTvhXe13nLKtPawW72sRWMqKHBeP2Ri2Ahw",
  "key22": "3pR1penKJkTRW3EpyxUFjsZ6JVq5faEiYQc3xzpNtMSSJy27cVpqpDQsquoeWDXTC6RcyjEeb88f5oV3K4fhXMpj",
  "key23": "SarNLmiCRo3m24j6Wp5tswu2YERFzw7Jr7XkwCASifsfw1mAt1JyNBuKChq2i2u8tpEVXgJeG4KSvdsjmrj9YGQ",
  "key24": "2DPeCztqgyGBGEoasi5cTm6NZCwXsBoRTmRAN7TU87WZ19rLrUSX6Twapi1QC2vkvvbEwyDaG3A5WShAwc9vVVMY"
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
