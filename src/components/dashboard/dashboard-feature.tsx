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
    "66vrNaNrHSDsW3MLVvnkvJGvNmgNqsL4vHtBgp1KgXqtjRPcJBzE8Y3wWweK9bKwavTgu5nswWYgmNwE6jgxBVtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xeUJKfpMxg1s8qK77bDTSACBcgfyLjbQR2x3zBJ5gZ3fNoptC6KwqnELXCR15DCbzyjLgb4hir9225N26sPJETM",
  "key1": "4reiYmvVW99m6cWjMXkF8yGC1aKPHMFF2rCnnXbTGDC7JtjSRgUsq79dWsgQaV2EQLVdR8jsWXf5idZghLNXXtTA",
  "key2": "5RaQFdePnoaqiNTj3XpDQs8Z1pqmYyJArXbEkoArF22ibDq6DkQEmNsXGHfK1AvLXLxhXbzBeR6QRr7H7ve7jWFb",
  "key3": "5j9GdG5VoMXDWFHN8ZtnFgyF8kuc5Nabv33kGH79LCUFcJMsga7WcaCLHT2w1uNq2hHWha6Woq3NbxZaW922c6QG",
  "key4": "5R8Jekivg1aNyMhqGXJki6xTao4Vg4mSGmHCyR1N3ounVaKN7oFkAmaDmLAWuwgzdjiAdU5Psu4ZVvoe5dbBUGgL",
  "key5": "2XUv6jLV5giGbW21F3BkKsHUTCCU839Qjcw892Fjn12mXze9gZhX6HYGi4KUuCiyvGe3V1RnaW2grpGCmB6Pbrbu",
  "key6": "wZey8AgwcqCBNMBgmixsodYDyCcZvP3sGkr5VpZJ1kRgJ3ajM3h22YebrY6LvWhaEcQYZrfEk7nYvVMRrn8r95J",
  "key7": "4NY11W5hJQz9j1p3BfL9aNDpcneGTN43zECuTXSqczkZhdF4vKUUL8oLdA2L26u6KZ35sUDhy6MMgGFVHLYdicXX",
  "key8": "3CjMZ4VJttmWJ1LHU2QtR2dvukxJ7pd2bx8Va8eRN7x4t4WaRVk7HgXF2WMoeCyrP91rYhpT3KLMcFi551DjubrP",
  "key9": "Z7GEV1N5aSuGo5AozYGGLJTw4ugztMktm5hg1kg2PURVi93oTTdys7n2SidTnMPeEXejpSwDKyhS2aAJB7V96Fm",
  "key10": "5vRFp6Gf1V31uFzUTZbni1FusQxAJVnzgqXikc5xduVc7hroAr71WRAwjd164tbUgRnZWioJ1puLq5BYHFpMsihX",
  "key11": "2dM5DqrGAU2SifUuA8SivYXYvAGtgNdAgfukpFBrRJpaYaknSTKZKgPGAPL8stHtvKn2Ge4RiwC9SfxS3axyP9g1",
  "key12": "3KxHCgF1B3kwkCbfjSajLvotmFyUzQgJjBZ8Y1ds2ZDq6HcaToUSBCdSWVYhWxuqQ9zbMHLZrFNS4o3SBV9i7by4",
  "key13": "4BoGnkVQArj2WkuKLiGCY8g9z55UvFCCKEZmfHj4uGWASJA5AzX3LfRKoGYAwTHBUAXf4R3mNbymrEmLjkjgiAJW",
  "key14": "3xsSKt6W57vYqxyHqAXfPt2sWkTVfLnJ3NCZaeZcS1cnCLqBre2jHD5Fm1Hxcb2uJ2yMLKGCUzMHWR3mbDqWkGos",
  "key15": "4NjPGkpd1ZEeDX1k24HGccetzfUswiTVADWyfpkLqFd52roaEwUXtuh4WtabRVscwWgEnxz7DCvX7yFpxPJV7nMA",
  "key16": "RFXDBABpumT1ASYEpokQkHGujHKe9EZtusHwG1Lxaf1k2aujoC6Jjo87skeqL9xGCRhrqJX8WZRL33jQergwpWG",
  "key17": "2dRiAwJUDJk9jNp1f9jtZP464aBBGue5DcGAFUdziSSwzAV2FCfSeEk81zrThmoRceLz18JCN41n2tc4TW6nMmPx",
  "key18": "7rAeeV51XGhZLCceRekH1MJe3kARi5sECzS4m5kFJAJCj4J9v2P1JTtknK9mUaa7NTC6gebyy5mfDz7LGrrv2Xe",
  "key19": "3hDn9dezY7UAZ6PNuseQVgfq52tVpUn714tMenKt4UXsooqbWXRhjiNTregmJniuUo1x63JYNMki2467BZpTy98E",
  "key20": "5kGAj5uRBF6ft18BDy1km5tmckpzUzcvoAUGZvhgbHBmMoR2n4SxBGFUdbHAhpoPfDrUhDiAjuuJ4GJVRnL8cnqk",
  "key21": "4ZQTba2ipjZzxFpeyrsURLU7q3nBrHB5iwJKd43aytxmd3jgLgxSTW439HanTDVoKqdGjZsX3QsL3LrWFVsvEmV5",
  "key22": "2V4hwFM32ce5JoB2UQCUj15ww74RJ1ghip1YLpwDJqfbsZpUEHFE91pDcBap6yRJ1THpJFPBZKAwDz6Y7p3TruwV",
  "key23": "45tXSYGWnATpUvy2bULSLJDrcTeVoDVCK2FT42Ax8irKKaJJ5PDvcewHb1kSvKybyxnJWKRaMGZ8SUH7x6dgUHse",
  "key24": "37W5C6LjFmrskT4YkP3MUyN6wJ7SdSCek8t2AncQZwCacETKA5vKor9SsqTb2QyRH7w5JtoQw2t6N5Y6zsfkj26S",
  "key25": "872S3JnLmGWdwax6kKPDZnRYvRLDUqpdrpJvby3nXfURdQFAh8UXVxTahHGj3gTqTru9KhBUPrabX9JexXeUmM8",
  "key26": "5img3hwKomA13oQnqsMtCJMUAcnnPAU8gvTcM9k7Qkewd57drV5TM3vmDNjzd8vKSGg3gx9BWCiuXVWxuBrbSNN3",
  "key27": "35BhGNK6KAf7QpYC3QpJRLpBhUrnzkfPfxYFRBK4KAyQ5R9uVPM4vBgqitYritCmMaxW7yzyajTyZwymJYZhc54B",
  "key28": "V7gJwVoExdPPdYvZh2Makge1JxV9XPixJDk7cc4r14JKkv9fy3H1swqA7N3zqzFf8LPMcF91zeWK1kDV4Hxi8zR",
  "key29": "2uwERqJFqY1KykGsdt6zo3cg1rfqHir5SeQFU38D2THrsBarE1dMaXLWpHBBkGUhnAYNBELR1j9MZGHMrqGkrVQW",
  "key30": "5JjhPWNLDbrdZBtsa8oz95tFwG7UdfJ5ZuQSACv8rgqoz2kieGA7ur3Y4cUPUupKYhyddf5hJhcnomss93mKP6EJ",
  "key31": "PCUmmvo4VNdGasUbHY6H5ppERU2RqupJ6rus3tmXPJwuVzkZtXdmohs7UoAtxoPCXQHCntjRfKTxSwACAwG5iCA",
  "key32": "2b5fJGXRSggZvFahUhscFmgAv2A4jmz7zeFxeGZW8xpWnuXZrD9R8iNdks6SHKje9bcC1TRRxUs9yZU86qUeuMW9",
  "key33": "58UHKyPBUwg5LqpTR9rkwfaiEdm9eMhhbcWDnjgTDgSpCZfBpAYdR17FjaPJpSkrK2ufSt1yb76ScgYJye9u3uta",
  "key34": "63o7Rz5AvEuoND7ipC9XecpZc2VLcX2A8QxovRMECnYCosFrjTbEAjXcjKLumDUmyb99K7JTDf9cLRNTccTiD69N",
  "key35": "LsYUuJCUoNz6Dpwf9gWcHcbpGQMqjXhUXp3BxJpqU4LaCNEoYCcX9kcxLNRs17k9cPngDXpQo6JthYuFoSAJGJp",
  "key36": "GeJcQPX5cCFuKtbiU2rEQjQPbypqUSnj15jNiVa5pL5m3hg7V8EUSUQdu7pxfYWWRiz3VDW7Z723QM23fuz7rtT",
  "key37": "5eTHKc4SN3KmetfDQDwCVasseSy2KzByGccM1XJBijfUCo56UYET8feLgeruS4usgWnyL8L2c743GN6hP1KVq6pK",
  "key38": "4t5AvMZYzGMiATQKzm7cUnqQjKGSLYKTRKpwieFPxfCtN8JCdAqaq8RSCWd3s9partm6hgRDLpeh2QNd7vT48s98",
  "key39": "4psA2KEVKYHYo1Qou6vUa5v5BCPvxEiss1XDhSX1usvPveNG4giLZamDmvaVxomEoLHie5GFEwnjy2EZVdxrfhPx",
  "key40": "5YxfXQ9sJrUTaxwYeTJit4S81ri5TmprCfrNKuHPxrV7jLYkLVDXZ7M9MJrTEZMm7w2a7XxbCZp8N3dF1r7TjtgC",
  "key41": "4qJiy2unnhxSqB1sAdkYyJ6eTMpYXuzK9JMZABZawHws6PA5bR18UUKDZGBhL4sF3evwf7CqcCm7nqWBTGprZdEU",
  "key42": "7C9C1G8htH1NVvYKNuGpEF1fZxR3NVGKgtadjR6KTDrzauYwWPkU3DrSf1atQWN8fjFGCpWPcrGUrBeQMPk9qez",
  "key43": "3y68FuhBGgvn4oXNBjCVkYahAaUUrxzfayPtMM8YtdK5yDG11GXqgxypPthLfUsMMCqikhBvBoWNV1ZCPpBuK8YP",
  "key44": "5dS8jMWF9BheTu7Ptg2E2XCz2tLp7eLBzpN1XWzshTFZ5hAcxBYhJFLU7MAW1irbFZu1g91v3oHE8pybkX1VCPiY",
  "key45": "2yLx1yvcQvkjgdTAJ538gZjZCKYYyttyHXueckPNTw7TxJBPmscXcLBghdwTqrvDAm2eQh47BrttJib8CC7LMbyN",
  "key46": "4mC2d6YkAkdZK8eJ8LgDtuySBm2BEQ4fW3rsFw7Zot8fAdMAy9ZyDanM4DLzJPvVAGtovzuMgJpvjLEyUN9FxQq5",
  "key47": "MKgHTAVxkBurjRCtRAtK3W8Ynzpa757TEihbfBnEf9voKjgrkFWnz8x8E4fAGUCDPqs5T2pXCwnqNgsofgHBYhC",
  "key48": "54jCSyzniQBGyguXDboeu9Yh1Q2ZKQ5J1HdXg3ikcqJ8KW1C4HzhYnq6hKG6bDCFFFAAR8c4FqbV2tufcUW9R995",
  "key49": "9NXvAobCKQ8sAfUq9DwjZF5w5cNofn5nRD1nc1ZRAh7Ve7pq5j5unZUb7eB9iBXuVLVdawKCmJyYbRgAdTsRqdg"
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
