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
    "5LbPsFrXbYRjievwRpMhCPy8b1rJhjw5LSKUxsN3P7e4PGAuqVoh3oha8bNi7AyEU5TQeycMS9Coe93n7UkEqonT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5enxVDqFPJBMy2bXaHCoWCGa7KpC5BrHdy2zkeWydRpbuhrX4YiPLegRpp6gQy6TddLCKyYXnfN2VVpsjVr3fKHa",
  "key1": "2WAknvBz4nJEh38d2FTfo11bXoH853nPhBNp83igZFh9cxGucebne22QHcSzF4cVLp5RR51uCj4Yvn1JztMvN8a2",
  "key2": "magXK3FhUrMB7gewz1t3U8gqKpdeUT42vKpVusfKv62sb4w1isQpWofaqxvDnnHeWPUuUwy2ViYh11MaS1cjLsx",
  "key3": "2XSZZCppWxXpc6Tq7sjnByseB6gAnD7kchRnKv17uTokJ56EVhMorbt4P9QCt6y5tD7X18Hcpys99TJgLMPr2TSN",
  "key4": "51tfmHcWqaKCaMkxVPtsWjChiU9FzfjNp78KET4YeHt9kafXgrZWA79TP4k6PQDwrFFqSHs5zPsXCVFc1UhnVpWH",
  "key5": "iD8L58po9VMyb2kYWbw4tNWda1u9p89wTsEMuADKuA7PQvQyNA8iYAFEEi6JwRWJbZdjcu4h9NzGnVknVTqJcgY",
  "key6": "4jC6SFubyZP5E4Zh1Td4SV7d3HSvRw8AdRLM8YJc8Hqqk4q17AVmwhNNxndQLosYdHkzzhE1goW5mitU5AGsnHao",
  "key7": "5CNSibJr4YJj42XRnDrRx4YiEm9niFZ77gQgSpw1SdGfa2r3cKaAx8nGLhGe1RqweWbb6KUKKgLxU7PeLjZxgNUN",
  "key8": "4DaqPwGwsFDhfZj69qoZBjbrykYgs2gMP2ygPS7eqpBWWH7KAdi1LDRdFcbiqWFxAnzNDbSRc7FSkCht89SArdUN",
  "key9": "xDrRRjDZW3ZbmysrwWbAkRTKSDdTgiLPd8XCGXKHtL39jK8y8t67o7MrQ1fkdpJ9nC5sJRpW56HhVLmVgvxWajD",
  "key10": "27XLL4SRioBzGeBALdxsdguBW2XpkEeK9DRxfXAnvDNXUuyTjzGDzMN6fPMdpAUD8nu99t6R5UwNrGoHgek7kx6a",
  "key11": "4JMoEdWjkFT8bCaENrcYQqXTE4RywLfxhALVWTAQu9jfWkW1QRR8Frbd5sMrPQmHFoSC8c1G5iTZhurNNbFrpDA4",
  "key12": "3NE6isYbLMHyuvSuTov5LX2ihB5RZdYii5u4bdgAEwyVwNzkuDnjLfrNCKbXZzBZate4qG6gXe8Xao6hJuHnpq3J",
  "key13": "2sJCQmHvG3jd863AfHnmKHUvJPRiXouWudcYU1s5VqyeR6BDZYuawjuPoncH4RGpfyM83FV8GAiwrNuyNaynZWrt",
  "key14": "2u4nHowEa1LaHbinGia9obJ4CzgCzwwh7vryMwkPqeWpK32EUSpPmahsasQf672JKLdijDqdWMhxxij2sGEcYhX3",
  "key15": "ECuAUC3y7auyxYT5TfAVdJLKhywfq881ZH9ePL4qqSZbtNfPbv9JwyapPYcWe2uAxzeLdqUybJPSve15s7X34yT",
  "key16": "5rgqZskud4bU6NMPn2uCPtDV5FKytw25Re8BgvQNzcS7bnEZrNivANPxyCgXMp8D9KGFxboNoAUDnuQimVp7NitQ",
  "key17": "nXgm1xG9F66a1WqehDJRpd7FkSxVwbWp6T17MRfJEjuifYecopBMjvRjLV6vWeB6fT4cUinFmTca7nZvyYvthBY",
  "key18": "4LUzmM3FhS6ZLvahDmTvxECVdTsGB1oWghWFsDz7gdTZWee7pFsWDDRt1Cwp2vLK33N7Pj5CGoPDuamAKqTSnQxg",
  "key19": "5HxoHH4RygxrRiHpHy1caPQfYdbbWQhoqUns2DrqyPkGCK6jkrocFCDBub4BwYxvr3VwKvXdDbWhR9gGL888WzLF",
  "key20": "2BagfwCf5o5eFouw8RYgDquNHswnb9NH7LLJwxD6Gwp3Z1fPBqBnCNrZrZFZcpJFCF9xrjARJt6CXpqoLb2gtGKK",
  "key21": "65r5J653F4kcQ9abw8A1z7p3Eu86TAfX8ki7Y1vSTA2ePA3wUTA997cugVT1pAsj3ytvMB5K31XCMQroc3Hmzw8A",
  "key22": "9tPLZJcWswS6G8w4r5GdGEdnFCCTPY9pAtoBpewUm21fWmjZ5bqXMRAqfnA5MQMFD5ieebXNf9mJWqRCFoLrayU",
  "key23": "xaiGdVvvXym9YNKwGXYXq1jGHKN498MH19eVENHcxPgsqhGorZbHNDo2ExsZrQuVMYSMu1qmUbwt24f2YDrMSSx",
  "key24": "5npS9P3fdXa9xYJDNwui7mj9L5UYetQGD8CAASXCmennZpHRZbL87Zs429TwW5YsTm53NNHUMnShmupXPmTZQ8ds",
  "key25": "2A39nWm1cdxrkxHQU17bEc55MLVTWTuSMzFtFF8oF2h9i4cFESVoNdJ97MrgSTPkpALbXiPqDdqxd5zznndqrkch",
  "key26": "3TLh6K4M4r4hkdQjMvoZo55p4BwPCiuopkneunWMdTCMKbtzZe5vgzgXipqhY5P31YtLwfP2qGYs1m8skZDZzimF",
  "key27": "8pCRWzrUuYv71b2JZyfn3Abku3NZVqHtMVRhKFRXjDLoFKDcZdxMb3wsWkGXXHgJJhgno3fWxu5wXYW2MvwunS4",
  "key28": "2PbSmzty3DWDAs5qQQgcuSFFLdWJEAkFuP6JgfEckQNtHjrDtFe4upasAf8ctEY6nypBfBBSwsckox2xSZv9pJwx",
  "key29": "oE1aL1B2JBp5oi972UAgib2NsBQHx9fh2D6ABaKv2HjgKJiaB2JhWPbGR3dBaTpAfbB59oykqxdE6zgjA1Mhk31",
  "key30": "42cCvu78v3V35edvmFxknE6iPYmexLGAEpYfm1R2qqs7rKAVd96TMBqrysDpx4PyifbEZK6QKDK4MBWhscqAdc4t",
  "key31": "4qDrwmUekiMxB2rSXiARsuSVUzjNF5M9uLfjnZut6RvYpS4BZQefHRtfFPPVzYyV6nWMju4zLdCNdrDKAAsZuuxL",
  "key32": "63t5LFveirBLm17WrpqMs9z6AZT3Hbk2TuUss6aX6FnqGHpo1whWosmmDaX5PBKPVDstS5dg84GnC3T7hBi2LDTH",
  "key33": "DMpDnAiQAXeLHb9KCwYgCG3PECvTHNH5KAPvDK7LFnsxescjXHXazLyno5hjwmytLiqiPNr2o5r5EKETrW9dcjg",
  "key34": "ggUee7apkpJH4d2CgfWnJDzC7nTTRMteJ4p4YfLyJLVygXzYmT6Bwuvo75UddzAL8SdTgm4PtHbhAxooVT7BZBB",
  "key35": "5hW8ngEiYzj4kTTExZEtToYTdhoQSgHKDihmSBRP5PGYpR21uqhhZvFGhPWDPCEkeJWEua2HQcMGU3uvsAGwpgNp"
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
