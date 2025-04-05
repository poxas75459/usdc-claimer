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
    "2rjMv1tVWtByzBvg6XhRBmQjpshnNQzXL88Bhi5e7j3ZczaCma2MyzsMmwBqQazM6ywWx817hezffrAQTKgTGSr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GAcH8dV5xyy6pFeKA69wipEkb25EYQ5V1r3c4sEryeiv2ZnE39fyQUpwkWMF6cL591xUQkoEEj4y7BjguD1AMjt",
  "key1": "2zoz1GbF2sQ9BvDKNfCzP7dyPCxBBHJFmMTJdJAbEBJ8wxjcEWAgeDhZFdpQuwtcUdp5n9tgCVhFiDLNhj2qTwxo",
  "key2": "676Cm2aYWygFFf4j4ehtRtsKEjiBaE9qL9KKTCtGqghq8788rK6K5C2omKgAsuqeRZZmeiraiLYrJFMnoa1KWP3d",
  "key3": "2CwRpCRPviAsdsd2c4ub8FYh2GraoePqxr6ksPsUzzve45FUzJukSFyQrGhff9BN5XnQRrLsmA99MVsCmKVsB1tH",
  "key4": "GjnS7hvLkqrFg6wWjdy35JEbhQNtd1ov5aPtxfym59mXimDSpEehtyWC9tk3U1swkRgBoeW8QBeFisStsDHbTm5",
  "key5": "4UufGgzYeAysJAiCjo61nSXWnDrWhV1hy6hMHx1yHPxWuaGH7bKgYmFj7VAtJo7mzwttUTiY9hNPvT6ydcnVVQh8",
  "key6": "2uz9gGWYRSSTA7euS2bx9qedPukCcxWmW6oPAr3HiQtaTN67yECF9U23X2pfKkczXqbsfojZJ8nGYKzFPKD7Lms",
  "key7": "2HoVtePz6bk9Sqn1zBCkT7sko4TYtTNkdjXAiLdWNZFGdSrH8wsLb4H6pwDypRGoQJH2AZssYHRdhNc8U6QTACkH",
  "key8": "2xz9BWd3mmjuvNegxTdoH4UtDDA2F2NDpUKjWWr1Z9ryra1gmM2qiCKWc18dGy1iPbHV3XzKmotU3TnMaCKAwDJm",
  "key9": "5z83GMdQtMmyGUnCRLaNYCrgcwpyB1n48kVKisQwRwNRFeyVdKcXjG221XqeNeFf511i7ncTo2Ky2Cr9CmrZuUCz",
  "key10": "67Tkx7yxd1XpaHhKE7a5htUWLyR2r3PHaFpgc8i4yU9E7zWs3putNj4VtwqaDL3xTKgikh4UYTbYCZf18ruqqUMM",
  "key11": "56cgzpcWcihmmZmMFgeeXNUZEcx2yhJcKBpBPdh3qjLLt6u6FMJJAgvJxzPpLcw1RjaYLj2Dk2Aum2tk81qQu8ZL",
  "key12": "3PTWJCkhXtgqUwWyuh2RCpzeDMcYYUvnN32TCXuX7NBzi74cfpiqfsppDgtM3hvujdwCQW5PUyEhHDQdpNRJ1iZj",
  "key13": "2CYRctvJXuuRbhh6xeaTspfVmQg57MonzjCXjE7b4VdVLFTjfj6rHY8E2xZazskqT6cdkxyr7km2chv8bhQ1JQQo",
  "key14": "2TdtsvQnhmrkmBA1GNmKdYTDjrnhS4oeVudVMr9AWhMGAU5aLyADEGuQkGG4zHLsDScLSQxHV6xeRKqTeUKNuf91",
  "key15": "3Rj5XyY8hivbS8aECRpmnPRuecidLyPbdHEk2dGcANDhHvmsP8H9BG24VCyAzQWsLHtEZRMSvn3xWcf4pFXfkkU4",
  "key16": "5sUdMapwaKhG1AaUYoTTVCkVqeKdagmjjH4j3i4Zv9g8TS7T6C7od3pAUuz9T2hWyhuZnUSmxgJtRSwagW9euAZb",
  "key17": "3fjb9GAaeAs7oKhJAZkkB2Dex8rbYBRrvGNBLvAcjkZXL14h81hKiRKBfZjEEjMxDVYTqCmkmo3ifUNJ6mtXpKs8",
  "key18": "2RjiLMXHfkXiQH7ByEPB1CEtnVkeZHvRXvF37GMxRgbKj4ZsaUC3vNRPPcVeuZgu9R47HGEXHGAFjXVptSkyhH4b",
  "key19": "353G5d3LD5rvKy9pduM1tq4KNsE3vixu8j6jNCwWXgY6p1w84G8cGS5WxvzyWCWNQ6ah4FMKE5M2EWB4tv97EPBU",
  "key20": "C3PoQsVU4sfvqNtHc2ZXf4AAmFpRUeYkKK36ef3drRtVp1oFmFhWQWAJjbV4mCkQyqrs3y24thqkDUL8tiA18B3",
  "key21": "3fx56tywDHo8rTF36fQyKCggPqUWwZjkzjK7snnCLVVnLHNEDnp1rucHGG2h6vZymikB6PUBXXTnbaUMvhhCaxwp",
  "key22": "3gG4M1YKGw1dMgkC1vVZJQgmEmq5WcE1J4vwVLgyvQwCCnZDWXqNhDz49pYdpZ37JhGymapsrkzgKSBRntPm5ZCH",
  "key23": "2b2CB3fpspdHhbVayZP5sUtFGHt95NUfrDieWpKkBhnCjn6Qsd4rR9CUJyd9Bqaf4n7tZn64fjbt1k8JhM8pN22e",
  "key24": "29zS7c4tT22LHiwt6rR31zrpEGUb5tDpGRBMJSVXqi56zde81vnbYJ7FXhfL9EfV1qmu9eZFmJieycWiaGipoHDc",
  "key25": "5np4He7ZWQwWVGSfWEc7cuvECP7RtYB1py3Xu43BYXjE2fupCEBimeuj6rw4romJwt6Ks9geL3sq72y5Mi3khwGz",
  "key26": "21EWivMSNrkMWxM69fdxUgziCagjwTAwLMoUC4jkuVWQF7HvrpQXVaneUCzoR74fN1UVN9nLjhNsxmVtBt6Cq88e",
  "key27": "2FBycH4H3MTEBG8shwTY5tCswe5CL1tNh4wqsZMjRLpdt8Sb9M98sC8ZFbBR24qMXkNeJxuB26SguxEiYeixohCE",
  "key28": "4qa3XGi3RmcPBZLWZLfv5Q6R4753Hqxh65VSLafB81MwiDVquUiw1y5Mni1pnw4As7kCBwUzEy87RN6ctxyfe7n7",
  "key29": "32Nj2UGHTG8NRZFmLFzBJ9sDpYUdbPST9mhjGBGYmiHpgaaRrWkudTTRGDDC1QKf7WsNXvYuV4YymyM3UxATMLWw",
  "key30": "2dHio3kQzP8c6Cka4sFsPneadqp8YfjShyCyK6D2ZpsUgRdUhSfm5VB3TK95GywkrR6SBoZ9CoKNLWTRfnx3oNAD",
  "key31": "HkP4mF8FgNvNNRQCmRxPXse4JVmVT74YxGs1NxqciEoCdwrerrx5qQyxSgV9a8fWw5xHFvEqXkLMASmyeBrzeZv",
  "key32": "8qzRsmSSCwvPnZ8Fy9Je57rZGtpg9jfyQvttaCJCTzQstsZ7pdqzpVPPZABF4eXesgzuPnNyTYBwyC78ar1nTUg",
  "key33": "33MBGRVWWx6RDEvXMFbb2MFa1gtyMmC1qpaooqfUjdLMvJ3DFwbwgmZL1VnhY25wx6TmVWapFRvqXGtANLGfXUJ",
  "key34": "44HRbAXNiJ5efQ6MS5oCfg32dbHi832KELubqLJa5v2bfaC1NmdTufEzp8ZPsKd5jw5cSUtrAHm2tsYPQCHg96i9",
  "key35": "4cUcdQybKPkesM9aTpsDnu1yXQy23DKaAt8HmHkrC45Lw91F5WACZd8LnpB6QgP7jUsDWFKiQS9cBi5jkTd7WRvz",
  "key36": "31JRe7kuNoKJUZdw5grpBp56y5TS8tN7BYtPXxf6zJmPSKfUdYNH8NRdPM6jeXnPXNMuJ8jFg7yYiv5HE8Y9xJBG",
  "key37": "qkCFp2SsjhJxZ5rdVvwkrYL2hDTxqBktbMMbN6gCjkDQPiqSEFBPb2LZKM1LKoo7ukoWR2NJswbi9crWtfC2CCB",
  "key38": "2u5dj8w7BNH9AjfFfmQs7REase74XtgkEgDMWJU4H71UjvVdD83nKNqcmxCopjCn11XUD9K378HBCH46H5jo5kvg",
  "key39": "4rzVHUffksYXVGNA6t9EoKMPdR31juWt97UUeXV5bQ3LkZ2RwVbHzowWZCrZdGovNVW733PVAnzLw2V7Sp5awDsV",
  "key40": "4ZVGMgVhjMjA3WPZo8ZpQxaJv5Mhd73uQogvXG2gAeUA8u9hBnH2UKoQgW1rMT8FaDLjvgZvty3VBLRURCkMGidP",
  "key41": "44LjeUA6rLDuDD5nVZMytrSLPY6GDWqCDpEfyjfNcg4dcwgyuGux9yD7R3BSxwUfBCTgGctCLcRdrXsaVX2wu1Fk",
  "key42": "kguq64w2Xm2sgokqA4kqNo7Riq4ivnvdVhJp8UwahfYREpFv2y2ue7fWUx6bfkeGrC2CToPLyzW2GdrV4775VWV",
  "key43": "59EDyWzFaHFTSRimNFV93jiF5TrPB923PSLApumuA4LegFwr5r2Zqpz7YdCSKNGqqjZvfGMdTog1C6RUPZAwXfzG",
  "key44": "5nZL7zdagaV98Lwa5K4fntWT1MmsERqiKVV4URpFRnjRwhSow1pgMZaW3EPpHZXdhRaXkh1spgZDVtCiWSLLWpD2",
  "key45": "v1uVGF83U3SP3DJibFZiCHdTxSzYfSbHQXA3tFzaD2sGHsSoxD1Bp5b7oNU4fXuNJcXSUyXz55QrwK8VJU1A9jc",
  "key46": "27BwuAhkgrogq2F7UX6VrVJpCga3zPxL8rDjivHPS7wzDBdvnypuYTJf2NLkw2EyxWRG7gcxhEym3zjSEWVV1g6U"
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
