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
    "5HFWLNUQwTa3UX5PDHY6Guf9M1YyPHSwc97gAjZPXuPqN9WWEXZ2zJV6dtnP4MZU2DzvKbfxMtrrNKQDDanXW5Tz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fb2TdKyMKsahTZkwnU8oQaKmCvKuxVpE2E3YqAMcBFy2DfoRhi2iFynAUtbk2sq53CDfZLKiRoZypF1WwWeRTA3",
  "key1": "4ZSUmmAoq9sx9ujeNKiG9ihZN63JZy92cXiEwchj67J1TiREMdE5wdRSCWXX31kKMMQGHzwhBRVLE84XMdTps5bf",
  "key2": "FnUCmkyECJAdy9CiZUYQ4XcxBtChjDCXL14diCtWPuGUPXURxaNeFq97M7gn3qXCaijoAm9kS7ZisPMGaEUREWd",
  "key3": "5Wo4Guy3ViaECRtX4P73DkNuMbjiXbYvNMx2EhC1GpUCy8Uzfj9swNrh4RWBJhyTAJmygjXLoLZi3J8x8ch65vY4",
  "key4": "AjZ28M3rMu3zrm37E6o9QRTnb8Syt2FwGLSY7HCwPSw2bsVQE5cQTno1Ko1HyWtdLEsxCh5r1rHNgYjYqusSfpa",
  "key5": "3ZYH2gpsN3PEHV2Fe1Fk3XT51rdZaKHzXr5jHbLUUY3D2UMWBJ5ySfnAj2kut9d5uqzJ6fKcjpYoHXbSUAeYD7fk",
  "key6": "5DaAryUYd3z7cjzzJyVUktynirHW7pbgKR8g3dwQeFRFkXG38FQJCX7n58wTXZTQnaDvTHGCYj1FuAMECbuCUzSn",
  "key7": "645NHZYQXZDD8yAAcipGKXVDJfoJ21Vtkdofb7H7XxVWNauHuMprMSyGWnZUWK1BZCs2NuGKzH2eUQmc7fF4BeZe",
  "key8": "5iCLjMSZ5MajFrMEVyxgoEfT9AnbCyEZ8Tg9T2YNRh5DRGi48ZDGGofXB44FpfyXpUtKpciu8GLwxeLM9K4ygdgQ",
  "key9": "sUyNUXaZq13Ho2fksJfsP9ZrHgnCLUXSRT61iM5gfFszzwVDR4fht3SNr8Nu9hUjPS2gTVh6A4YhYf8SX4EsZMZ",
  "key10": "63w9WmgaFKCYeoLSz8i4G4FKepz4caFdAbzqwJ8ouCs3NyEUmVbA2x9LqCTa3SQsHg8p29YY6vq94QJVjXxqdcJd",
  "key11": "8sS3BQSckscojtwp5Vcmjjo7sdNBrLnCMZotpDWmG1WChDigXbEaGPoWCC7ukLcHJpWLBwm8ULo9G4NMtweMPHM",
  "key12": "3Y8kY1pvYYXBvb4r4Rpi3DjTmz9vk9hWgrKVFSCUrbvvtBD5Xi2sVvzPukNRkng5tgpdu9NQvthDZRtzwQARytqB",
  "key13": "2mKkRuoB2BvbEXxbv89o6B4TxfddXhsixeMaiLtHzLa3AThVsHsvAzZwZPe4vtayuMVvYTe7V9uLgLptriAXDzDz",
  "key14": "2UTaAgS94P7Y4U1bwsjJN7iUMxVhvfdrfio2mVBpjcEfB1vgXTuQkRTvtm3oJXgFnx7YDpPHPR5ZktRKghQSPr4P",
  "key15": "2GhG25o8wHn451fVJTX3stvEmjFW5srCaskFPW8Aym5g3RgyNKbbDK1D9GeCVCNVQZXqKLXrU6ggsiPmMw4LeQLg",
  "key16": "5BhtQR9zuArkHFNviQXUMQZrHLJBaEkAqGbNghoSDTbxtJYuN5dNuTMuv5oScTipcXiyS5n67TX6N2SVSNf4Uogf",
  "key17": "5BfXDq4yaqLZD6FNdSGSSbPR7dn37zkA6qHZW2RxF8hAVi22ZSWRz9v57jAVac4w7Atk1qGr5y63SSBRdLKhkksB",
  "key18": "hKJnF2StikvTU1YsEq7mdbEVkCfopCz4wsYwM3KQdMwgoXNp7CuF21rQVrAguY2CqjrPwaJsaBe5sCe78XneJq8",
  "key19": "4xQbjSmXRMxxo1FM9vp2fn5nMje4okgU6aW2yB6W7zv3MfWh8pb1gjYahLHkcajrMBfWFhS17T7gjVxRABGJB4WP",
  "key20": "5ZJDPF9QFj5Cbg7Nww7CQNms77LymUztUeRe1PhaXYN1m75oh2YniboA4Z9dyHrRFaZBW1mbJ5rqMr6trxB6g8Cz",
  "key21": "2oGH1tFLmwLv8kuMJELbxNBBqcPNKfePqnbuPJQJMd6Ff1jDGuH4AKdcE2R2sGx6uYEwi5ZPV35b6pEqfhzgqCTu",
  "key22": "47jmeP5BQ2tEzUcwUauWPdMFWLedufcDRpgh2Qr5Emr2utXkZ138a3SCtdA2NEafeHaj4DEd3t6oTqre1jhpH49E",
  "key23": "4gXyNKo212bQA8PARJb7BrWtDwE3bNcnyyPwuUY4bDSXNPzYNbHH1wSaFgoBbUCRCtzm2UYfxS9zyYaLu4GFM1NE",
  "key24": "4JtCyLwV4242rA4a6y18rY3Z8BvxH4qig9DAuiM6fs1gs8JeXwRrpR6dA7QKMvbo4SkCsU1CMTQd1hebT47PAa9m",
  "key25": "24hd92tWLcBeVQKq7xj8aVsniohmHWMjqiE3s6fSCwjnWt7cNSeDR2JmzUjioEenQmnKWX8WmnrzDcfkYDUSvdiQ",
  "key26": "2ihDXC3FzgbaXnnxWEmrufazYRZ15Fopxi9d5ivSFR9RZCQWkH1TkQq5sGQz6xL9XXs6a2hEpFv1ik6bq61S7dKS",
  "key27": "28SnK7xeRVbt1E3KTR3PTjogX1hgupF5tHp5i5PaUwUNhQRbviVMLkMextaczHxTXK2rNnnsEJoAhdizUbRcZMQf",
  "key28": "4hAUg92zaUUKUDR577Ch8Zwu1fga4NqqrjSXWqQQYXVrFY8Yvz3bp4ZfdPo4J6TBFb5FnZiFoBbj8P6s1VgPMnjN",
  "key29": "5ceTgaZuwPMKbFSXak5kpfjL4mxrHh9jAwiZZtwNz1mc439BL7jdBuMWcGQTCq5aMsUscVMJgd5cYUk6JAofVBv7",
  "key30": "2MPdYYfZvWQv7GzkjFv4WYUJG9xNav3ChsNVLTV8GfYL2Am7LxYH4z2xrgpfPQQ44zrb8bGghCVLUhE1Yv7SarM9",
  "key31": "ncr1ahjTnqUxTukUU4MzGL94gxynhGLmuEn3MQnRPE5vxTM5j6M9ay962iDygMk5J5X6GSD5nEeoXoNLdr4bpyt",
  "key32": "tqiEbHWPK6e1GEFZjozp2PKrW4ZYcEwR4F7Ux7LUy5xCuQw9Rgw4XPB2K7RKszeJk3E7Uv82CgSoac62AZHdUUJ",
  "key33": "kKzh8W4ucouofv5gMU5u7gbZ5cPvCnnKPAwchk4tMSHxdgav7TEFm6mf7b7cnfaifvVzfsiNaZTaPDfM5pLRAHC",
  "key34": "2c2wTiLK8jSrhiVtdgDdceHsaNbtTp1j3V969zKNpx1X37CC9Muersc8vvoxdCLvSYv2HnvpEB5t4XNWXDTf2SKf",
  "key35": "2JfU2UUwXxMaY4jAbxMLpuqkUuyVA83GJUPiJpaEh1mXm5bKZDbHb3dnag8xuQ45P7opU65CdHKrMfPyHTwiWXgW",
  "key36": "x1HRXsEhDmeJPz86KGiTSLEPJGWfGG9deTXjrCS7cyWuM8HMsZFJRHAXkC8gwhs3FoFTGAugowPis3sHC2oKznY",
  "key37": "3dh1rQiaYNYZeDQ6z4N2oGDrJD6yLv7SyXVWcViK4wg1fad9hxZ1kZ5YBpsuoMxdLwfBJad2oZPQWTys2ZW299MM",
  "key38": "2UqPQWPrhtD6QgRmsFrH3YdtPW9F1JieSuSRLpSm6b1ovHTYJ8we2y3c56FLTUbhLcLwDDDCF21rDqBCRpDNxpai",
  "key39": "58SXzFXdoCLx3pcTgYw4B3wnSaQsSJj1qJFcb6bfkDRxRTTXnavQwLtucHthoJaWgfCKTHX5fhFj3arQsD4RKDZE",
  "key40": "2B97kRGn1TZciqCp7f2FixY56Zf2ubiziv7RRhv4UCKwqS14ov47kepQaYguqAtjMyYXhRrcY7s5F7oqQ7KPD9tF",
  "key41": "5LFt1QwYRYDf1BfQASLGPqMmF9cMyFUYPeFjhhAQfoF7Zd3HAXunRp8vu4cKEmJWEJFnH5RaA6weM5BinXdNdx14",
  "key42": "Gmqoeuoh3KEcmchPEVcw4RjGNn82oTo4KGV6he7zM2MGNLP4cw2Hic8DCTfBVDGbUWT9AzuGh3Fkim2NWDsQo18",
  "key43": "3kRimGXqbYNHYjYHbpkdSahutCYpAKSnDVEPaUMhx3Snju6TdFZKesDEeeBHRwiTabeniaj25rRE8mBWXC6cHJgQ",
  "key44": "vvcR1X7WDCK1WMtgLdLc11qCZ2ai3SyWL3ebmpuodSmao1m2iNjxGB5KTmaRxtCh94amtVvysMSKfgaoeD7iJMB",
  "key45": "34YCceJRqLXqJiZsaDY37ccctfU21HFubRwphysTkeYs8CzPFZVATFFnKUxoGRN18MRESmitp1fvuouSsmB98Ybx",
  "key46": "2CrxhEpRgkYD8nsxMvrfTPpeNBWV9n5u4ionPtPkseWePVrcXs8vFzaJiJJBw4DYnjnKf3XwQhpzUKqzsfP29uT4",
  "key47": "2HVrvvaiu2GeiU82s6RFZVLhnToVH6tWku8khSAQPqdrdedUTJFBGPohjkHDBrBAYC4CQuxreGLQxqiKW6B8i7d4",
  "key48": "2HvYmwDpyEfqkkHvDKaHJELxx8a1zBERQwK8cdLw6Yw8kPgWei4TdyXMJxmp4upmy696H3rweTTqueuLDwatdb8a"
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
