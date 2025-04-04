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
    "5zs93x7vbCfTNA3721p3DBDfh46Zrpq4WHu3x25FLJnmh3QMp8yuCwXNAewcBRdVYXvWVQQrrAVrhmpC7FMKBjJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sk41qU84nioxvyUPbhNvMLz233j9RDf2ekurmhfR2rtS7MvcWhFxHA3V9osEyiDoW922MDCXTLZyh3N1fXjdsU8",
  "key1": "2qmCjJvhTiwsKLeCjW1R8ceKC1sRgq1KBDqqm83uo3oL3zn17K9QTniECuAd8zmBw3kHFStyarBV2sgrcoc3Q5z1",
  "key2": "4EgeZDfSGsVqvERpkkxjj2vvwHE42zBG5YTLMumHzNnrFiSCCnxkE714WtA2SVUucbfVzax7uhbAZvSEWMCoH3kw",
  "key3": "YjpDBDy4uKUbvtirsWQbRQ6apfzf75h1uFQGXhGTNkmDqbrRDJTZWCTuMR3UdTNozizj5gDbsBTVjbhQZJR75QT",
  "key4": "3zo9W6nGSET6gEXcewx5zYMc2S1FfN5brX5bNYSRGRCY2Mbr5mqbtFT2S4nnRbmun7WNJW2xf4FVHHVhe1RbXggF",
  "key5": "3JTdh9pUgZqxLRAL3EF4z4v8dexUyn4Acb8Y67mzbfXNMWQWyGJGQgcumunXNVjTeboKYLiVjKiXbF6RQBunQjhK",
  "key6": "4i9wp2QaXwAez2Zoq52QJfJmiGt2zGrY7pF1FSBgm8iRoxnoX2QwFD63iJden89RY9Twbvc6WFhM2RqSCpxbY2cC",
  "key7": "4NK4hTUxTwJv4sMxR5oGe1kFvL2gmu3GxELkAhhThU9uKwuxMfDPYiTU4ML6jCsLtpQrTCh2n9kDwCgRN2mECegw",
  "key8": "4zCZ6J4t8qQouBQtLfxiDewzs2FKAzbDS89EdUYqNPyPufc6w9gzUq5RdVhfbFZbZWhq1rLBQQPEKAdvJVZ9arE1",
  "key9": "4FKbf3uUgdCi2hjZBYFk6B5yjM7jhFhYLQAyQSuPuHr1B9eHHuorsfybwAHnrGxgVhQKfSMvRaBkCTn5CcmWTriR",
  "key10": "5dAPPzffMuPV4d2p1i4GyLKt8sgjxBUTzBBJttGYXiXQCAnhW13hHu5bX12CRBbbTkEnFvKQdQP19oCTiv1Gsx96",
  "key11": "4Y2KxRm6G8tJLTd7SWQBKwaaScUemmYoPELn4beFhRWxtRkGWrvaa14D89QL5AGadL1L3d1kHsRa119s5dg528i9",
  "key12": "3v6pMXHkhKtuua3m2BLNmFtGDYEg2QRyv7eRuyQoNR2L1Gy75Cw3d5bvHsTMK7w7ZR8viKqZ8HoXVt12qTHwhbSF",
  "key13": "2Wnb5huebCqYabcDnzmGTw2Z2J77GUeZs7kS496sRCEBqGd5GKStqPrJpyj5Gfuwbh69g8y8FKHW4hQx2Jqr4peA",
  "key14": "2GMqjPre3g1sCLL1dEiBtgDbcbbPuePGFxsenzn1ZDcjT12BcAh4QyymLTom4seXthMH18dtNhpUjrj8qaSCCNXe",
  "key15": "2EpzUNt6Xr1EQ5x1qhTwPjpfvo3PzSCJkXYwVtstkNJWyBUAeogsfduS7VkAG1jGfcndau3pfuy9xEiRbFhuzKU",
  "key16": "pQPY2gvsakQCPkt5A5mUMWctHnXggLh96UMfQT2kNefAHN1Y2YdkDmXNsfuWgm1ADobSbD1WgVRUaC9gaEnVWpw",
  "key17": "xfttwJmAKkPJboXzL3Vcd62cGwmEBgvrEbKJyQChHrEUF8hRRt1CAW6CqyHY6Tz3AeDvdRvNnerVkAx4acr2oLf",
  "key18": "tbg2HydpNCyjgJjhdJ6Mc48sbBCjysKpJLA1RfMb7qdhDer6MSjeGyMSvmJPh1Rum4DCGZ7nwYnxezbZietzpbv",
  "key19": "33x7iS7gqLH21ySsPoeKsXgFYJwAgKY9KXyULgBcJ5B8bJ58ysU9xEHV3CC759Q2UJ8LX7gRmgtzVPBB9v1EsRZS",
  "key20": "HVPmrCMspvgKeZqTmuBaGmjVPiKKKaJHHk9wB6zijd1rSAcqo4HcphWZiGtSbfEWruvt2pkmzpNUcy8hAqCuQDr",
  "key21": "3LYsqV68TxRjynLcLbE1tDqhSZqBiGMqUsdKpTo6ajJvvZvLX7WZvp3wF773Z6pHQ92Fu1HdemfGH22JarmrBZEZ",
  "key22": "3rpi7GymqjZ3tCZUMo1k6cMLABMM3oDxSTpbvfNrq9N8yoymzMaFm5TBYzki65tZAFrTK8RzF9VcEwKdocXttsCs",
  "key23": "4AhJVsFNdkBMvCAm7DRLjkmDMsUNyCfziSLj5epcu4zbHS5owpHn8pZNEeEG7SNUqGvmRRLwB9FcysDSAB7VyhmM",
  "key24": "2rM4nQyNQg4gygo4ZJwa4RK3qha7sHC54X3eSCemgRfTy5gwzARBhWoChi4kEsSJr6PoYMa3BEKyDxdCNR5fv6rx",
  "key25": "5cZXicSKX7Dnjs12AZY1N121CNAPDTfBogFu7SxkqYwSZnGPTCWSpYQvpm2WiCRch5yYwB9SxCWHFbi88ocjVcS9",
  "key26": "4tJQ2xSwkGJ6JSoRqX9KCBeaFpknW2sYRYXAw3bB1YZwo8rVGTDJds4xz8oAwrrchihRaru6vXef9Upb8feNB23N",
  "key27": "3nAiUPrsEFMqSBRDt9zkz9sfbRv2rMgwUPVPgNZrMv5fPwNxiPZzTmyrvFcRXnQ4TbWaFcyaSrfPHBcMe6Dpr8Ej",
  "key28": "5k3EeEJXjbXvFqpT1Kks72BFfN6zSuRctN5eVLAYu1RrL3XJoLUsBGM47h27rjjfSGMMzDkd4FYxNN9xEputH2FF",
  "key29": "CYaUPmoF1svnpse5smbadGGzVTods3XoUKzcr4g3vg98FmcHcdLJ5kzCBPLBK8bwMW9CnstG1v9ywCnEAGw5Uyb",
  "key30": "3PEoZZQ84e9z7yYym8DRc5fmT8vpTYNRifK8LE6aDcdJ5Z5E1DiSGShbwCwdib979ncUgPjVrJMWzg5AaZHoYUhG",
  "key31": "2gzGPe9vgbpPFhvGi5BdKcgraA9uoN6k4tuybiiCC8H8qiNjfQVkRMicpRXZomdV9hcsY8BbXzSxLmnKPtkW2YAA",
  "key32": "4CgRhi7F3Er3HGyQDRHn1VtVCjc7JF86wVrjwwa1WXvqhNnU8UURdPQbp7TrjB9t8eK1VPVppAsRfDq8urmUYCWj",
  "key33": "borXxpyBPKbDkBd9emvSvLQCv8HA8SbiYUHymr9pkfXXj1kpCbB8cJ91Ev8c9Zs4pdLo5FiMPVaeeMXQnU4X3pE",
  "key34": "2QMQSLMuaSvNRYR4GLaqf5Dt5Z989wtFYMfSACY6FvsG2sJfc6crsaPjJfHcw5V7wkAU3LcpPimNHdro1wcWErhH",
  "key35": "3ntvCSrfQKsnwRKydCS1ntQDox2R7yDqkbAPjawz8H7jopUXL4gYqLFd6PDVvrh61AxxhPNQMnjDfiEP21qXvQJ4",
  "key36": "3XVVqRMeopLb9fAxZxiAmeisBbdbf1a57MGzvAYryLhmLF8PN5yL2XHyN2JJJVDyyf4P6dm1FNxahCFX7x7PhW5F",
  "key37": "nhzVnmeerKrHQrXg6b7NrVzQVCjTaBj36XLRS4S6GXnqJ6RWCCEiczX9PEfoyVstinFXX3yqhzkRQG5uBB5VpaH",
  "key38": "Rr8QmBkRc7uuQyxrezon1G2CuvivUwFWFhm1ZKTeuEDJmpnuZSdxB3hH4oTMKNdG9z51rcUX4H8GwUFnJURTBjs",
  "key39": "4M5j8gvV5B2cVd2SdJoct95qyr91Dp26dyG7iZZJTngvaxLtF6U4SKHvHe3xkJNvgjWTvjwZbUy2aBzPqoGAFNKA",
  "key40": "2WNxPrW5Q1gMjWkXZBNXP1Xnpk6yyv2TgfSS5f3ohHoVAcqKRD13S3HCTg6NbQEtTgMh32xRir8BKeYkn19RjXUg",
  "key41": "zVvtpaRoNhuEfeotLJTc1w7EHMevjNr3Sv5BZJHMSoD9Z4B9QpK6dnMXpSAmAtGEmwDHBamzaqriEpzMjZ5cCiY",
  "key42": "2LBnUk3nBWRf62XACy1KcUCBQMz1mEWfaBokX2Dpbcm5YSDCiKCaFhXuoq74aL6QS47hzeei2gcTkfvEfXdizrmD",
  "key43": "25BXFKMk3LFyJvk92nFy6SKRRJhGmUVSdThLU4kmJ4F9eFwMZ1kPF4d7UGQJCooiGr4tn8CPBUqpR8BHPUgkMJ1t",
  "key44": "5Xfq8T5KyTM1rj4fivmqFLoDsJQaUFgx8TQ9QQbzbPVjRAWBK7Ara41S7fNUgaP89oJKdRUHGSxCPJ4cUNrmiTPN",
  "key45": "2BRen6Xp7manLdwxE6pnP5zxUNuCjPEaFHHYcjUDF7gQfNXuSNhxLeCemH6SvJYUFx9gcf2jSCwStTC6o6zig7JA",
  "key46": "2Fhrp1gUmwo9DFbaHSL15DDzqSySEJ4aSZwoXCbd1B6uuVhvSwSiMcX1MNfoEWeq6Uptfecw395RHGaEifMB7nuY"
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
