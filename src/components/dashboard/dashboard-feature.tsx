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
    "4goJ5wprqafCAvkrFmo1BYX5Ej8pE2RUBsntm2SRf9BXdvF2Zyc8BYjGyD5XUPCZZMSH1jgSMrM23pTJ9uJWh7Un"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jrQUb6PSe1yVqRZDiMvfgXSnD2EAiu3ewkXKVB3K79oFLRKMgPHGci5XJTP23orMgvTZKP9qfFTcb4B7iFh1ETM",
  "key1": "3b2gg3YWEgNy7NvEMpqGXNLwSRVcqaFJRAdBFXGCmnP6HsBJfxruxY13UZNeyu2FL6Pz8SpXVFgf9UHWYX1JFw4g",
  "key2": "2owYHLft4ueQCy4GJ25kwWZg47NPgwPgCwB9RbDfL7TtS2orrzAXy1A4tDWVB8MCNYTTAYXHfjBa2x9q58mzisWi",
  "key3": "4ksXMqXj5hEB2xY44giGg77e7UbhgkqsVWrdDr1TVubjYhyATNJWMrmGEtJ8ZqZuDtWQ8rsgARELANmUo4mM5AKJ",
  "key4": "4ici4GtR4tMUsfF7AHBGDwEC35oC8XaZyffidBviNiAsJATrRz72XAmnoQw1wW5ozrusBxmJMZZmVJGHTnqXXum3",
  "key5": "2CUtDY1M2CwbPD5MhEtn7qTyd6ciAvgzN6gAnWPKmeR2mRNWTjzqi3sTjKK52AW4S2L7bczEDvuQMN8uUx5ske7C",
  "key6": "2gEnwErufJdwUYz3gmhqjEC4WCdpRBnXGVE3P1UGM1CXb31eSsdZYFKbVcYBSWesFQTww2ZKytPYkhhFoEkbzkD8",
  "key7": "5tcc7KTc67dyX3QaQHyfTvnchSHBW41EmNtBDHiyVZFD6p4RdRgDy2CH8Kkpqx6npk43GzNQFdiEsuFPX1kKya5y",
  "key8": "5oTQy1Hq89aB7Byq78zfYcSoxJXdXBnTwQyX1YXuxuoiwbcZY3biRazyEpq6311LG69kafJ7XWyWFnY9RnCSJbWK",
  "key9": "3AFo2q4PRZFdXz3Xa8RAEM8crrEQihUpChRoBxdkBwD61bEAFLwqiarGYT6vYQwspc51APmzmhhcsrkXoRGGppRP",
  "key10": "5i9w4eeQSkwQY74yFgsn4xXkoo7J3oJi78G29zuvZwDdEtX3RCf8nj1m3G8B1NTkSc4seupAmjbbHs3hBSf95hhr",
  "key11": "4tqgkhKLtf7vAA1XxcaCbfPx3LEr61pACwCp3dokjT6znBzm82p4f5Mv9JLfHgWiVHGJy1Pct8ZDGn95hojd273R",
  "key12": "5izf4CLvBTqpFGmpNpXdmSRP85c9Ea6MD32objnfs2a9p3Pb4HuLF7hsq6DWAv5VQNn2A2U8FXJwM95d7uSGZgwW",
  "key13": "3kvnQkGNH8vEfy7C8faQkhr7gbQpwXRfdmBEF1CuWMmUzk3UJUWEuWd3SmV5zkxFQkr3KZcTUhfQvEhoDWbm3uvi",
  "key14": "5fcZPQDpza6fiNTCK2Za5c1gj1njv9L8kiW2PLZuxXhuYAeC6x38jzBvyxeeQix6LxjQQVUrEj9GdrvBtbbiPxbJ",
  "key15": "5y2BNtNHeDFYFUfvwCDEoxxK5dgzRkm9unNsE3YVLK9HqwLmzvRmEx2mKjt9t1EtkMdaCAEKmCLyqgmn7opkkhze",
  "key16": "4pTYPinKy6ivrHbSJtrLN4d1wKS3YCT4eNthH69F6TkQfba1d88kY5MVb2PhHiGPfTrKhxWdws2or6DzbjCTHC2s",
  "key17": "3JuCLtaTojb7z7PTRZHUGJztVvuUSXQcHatDvfbXpUxQKm5X86dVc692FAXFYYtiLm8HgNzmZjHEbxc55TV8meAM",
  "key18": "dei2zeQci3U811kGWTdDqbX9swbBTexbhxQ1qjw2NZDTU7HfzA1uFpRyoYVXq66xi8GnzkVsvEHKpnp6scX2pQm",
  "key19": "51HBLrYnkHZJdEdPAAQgCVCqhrEAVGS8qUPJEzWQUoRaRrRVTSgiKhtuGCdec6aqNRb1xvuzTGyUVvwbcFGjbHmK",
  "key20": "36zxSqM6Bf6gZ1t31gBhqS1pTvEhe6Rr2xTuZV8pZt2x9MqG5WyMy4PNE7H8PBtURxCGjQ3GStt5pwd1JQiutuAo",
  "key21": "27RfpE4vmWgFTzn2VzNdYNATXTBKyEkS2RGSodDoSMfsqWHjun1DwtCCoqNgySPUZ67NNDkjqgLDSis76pnYEZFG",
  "key22": "2Ywid5LmqnaHbMcy4Diny9Wr6ec4VaR9Z9sDfuQyeis4SwAfQmtnJMEPXa5aWDwNP6N2nSTyMsfFTzpLNvGuZ8Gv",
  "key23": "3FGNWgiH5LMbxeFyPBxnjD1Ywb3NBMC9RxxUhsRgDZ99F3wtPVVGLBunCy2DGL8s9F2Dtdo2vcWChazsd4nTKPo5",
  "key24": "2mYCa57drP5dLYHWLQ1uvN2DuYP7p6jLAKkyMosFbmDU1QySLMfBnAkARMkBefX8bYKJyr93XnXhUscrp4WoZVMQ",
  "key25": "5eea8rwnahS4vPP8UTgJT6VuwBDaun39e8rarZD81sQhzjdQdc1cKEBgm5qnddNKV248wjegbc8KvpfvjYWKg121",
  "key26": "4b7sDHxt4KaifaPWjMayYqkpD2FzY55YGWQ9Pi3Gu1dvvcoQTiYUKRfcFtPWsDmMa83cH93EJs5r3WvMMunaFKLp",
  "key27": "4J2fUuPCCN3cUJ7xMvcczvR6sLpHSSZyLhNcTtc59WV9BFp9T5TGs423g7dPdMtQGd4coFQoHzeat1rNkrqLNCYw",
  "key28": "2du2T74fjLVbcdW6cnMja4yXFUKZMkHa1pWZyMqvWMnjvqaPUpAhyV3EAH6pL4GdNEShx9TQQQ3ANtJAJTRE5tGV",
  "key29": "29KvNvd9n5Y9ZvHYroKVEK9KUrYQBdxAnQD2BBy4gwiqP1hXfWxKxqBRPP5rAkCYPNjndu8dWCeZWPVrLyUC2rUR",
  "key30": "66Uc8bdoo1zCbgHiSgQTfuRdJjS8UMKbsCRodUVRFqHcCz6bbkVWkbAcDUAe4XmsRKCwCkm3EsrAiZFXMnYKv39z",
  "key31": "3tVdbEMU9uzUunsQYTwKUcj6UzSPgFdJdXsD3aMP1tcb2r8uo72r3ABrC9xiJ8e8jn6it2cLKHMXmhJpDiGo3SE",
  "key32": "38ycG7icH2oU8HZTWnPYFQPEBxGqtxQPHDAX8RJEfzWSmBzCHdHNzTNkfzpPXdfmirkkUMUMyVSdeKj36VnzAcYy",
  "key33": "53AuqiRD6cjseph7XaUSxUf2k11kAhEG2jrn7VTuaoJ1WqVb79Mnv3sJj4p4AeSQ9tDEPLeczXKPfzQRoB5RxTMr",
  "key34": "2w4yVtn8sF1LVZt24jcBspjpLv6K7HCs7XK3bWxq6KZh3HAuCAyTypjbiqy5UGfiq9a7yBrRsgUUYM5j6z5y937L",
  "key35": "2h4C3XSD9fH6ZuvE5gygggUEWS5gsuDahpcmuQ8qQv2FSUrKBP3BcyXyK6SC2yAAnhujGHqXMvv3HPkYnza9BXu3",
  "key36": "4Prx5Lgse4VjHFe7ceUfS7z2Y5M3qcCwP6HDUMHY4G7M4XuPxTRDvg9jzWwWgY4eT6F1k2XLooRPtgJUPvzno4LL",
  "key37": "4VXv7HWsWwkqESaahD5J3kDkKCPUR1qPvr4TWtC1mALbyN9Rgd5sr2VeoeBEwimZDbV3mBtMrM1LjWyUQ1kUnxUs"
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
