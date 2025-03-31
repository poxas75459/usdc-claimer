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
    "sa7ihFmCFEHy7rYMYSMPBHLeHpua5k1NUNZMS9cY48nuy96ieDoZwaZUZqkHCWhB5x8yjKoH4kLBWpExK6D4qxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hEuUZ8itWqia96969UC47rSWBupgtAdCnTgXRQ1m7DpyYtdnQC8PpUkpvRjarXavhrhntvqa3BXsXCXPpaBAA9o",
  "key1": "5GWbUzL3ARRYE9bjwKACTPonNMgyZY9DCYWJeqCdqznw8sYmSKbyFbYSfoKh3CefXfv54WsRymRdyqE2UKPNXedq",
  "key2": "4SuibHpjVbRSEkM9i1zX6m2rTPtCghjbCuLaMTLeMxkPK8fvyzDLFsrZG8DuC3hd3jeuFKw7yMHzL5dRUcKSUS9v",
  "key3": "Z6av5P7rVNs1bwG9TNsv41frwzYtdTFdNSCfsDD1Evn7gY439wxdLhFXLUEACVAvoaG4eaJKCzZ8iMY4ELYQw2g",
  "key4": "22tVkY4Zv55fYhsZsLLbejDgMDvavQ5BzABon4EoQeEqhVTHDDiKBjDchsEse22bkxMJchDMEoCG33TP4NiszStt",
  "key5": "2DGQzSrGcuRFYc2gAmhaXhrGK3JpD3DGsJZPX9kH5FpLBbWLGkgtqtRGiFTCUgXZMaGQdNV25fgWt22j6vGGUwTG",
  "key6": "g32hQzkHrGbqNF4kpHaUTj3o2avpxoatnuD8Qcu8WcpMAy9u6gwcZEYYEWwiGpXCCfvqv6dotUPF5iscgQRdUPe",
  "key7": "x5S2RQemZJaK9hgoZsynsd33X5SR8vY5kroEYxSgRHGryuZwhqFH6bcYX2rj65aNn3dcsZQgTvnppXbD6URDpN5",
  "key8": "5Xy25QVnkMRtxPAaLFhGgGXfhzR5BsXnSCE7VftvgiSY4L9Z45mqKfcgrY1HrnMUfCNSjkPBVYChqsdFHU8KLDRa",
  "key9": "2R45SN1PctJzrZ3rGS8HTtoQxKNwZw47xCVSg7hSgQn6EHugA2roJKzVvqYNpGC1T9b3f2thGxxsvHRSErutFfqR",
  "key10": "54QcPgNFrG23WEoxJQ6gNRm2ZDQAshZaQ2tHtJh4v2yqwhuPnCpFmmcN3zMbFXDiMaC4chzEXvRCuodi5Vf2XQYt",
  "key11": "4PRJ9gpUNdgX8pm6PtbzPMGtDC6gHma3Wc7Jm2mGC1C6WsaSeo5YHD11d3wVwAtq5bRzihc64vyf66GTcWPrhRsi",
  "key12": "3N4FpD6bsfSaKJ7JjwLkUSHAwsZeQivcw8ahyhgrq21gSJkdDajqPHoZKQJGpMKPK7E1qTNgudVHPkzPkqXEttgE",
  "key13": "3KuXzMDxt2WixCNzzmh971KcSgDuUY4cEQWctdFuRhkxX7GhFnyyVJHLjerP2CosiwVvwLFZ9SgTN2DxXEjQhh3q",
  "key14": "61uf8smN4BP71YCEvcYDFS2sZzMKB5zjrKQhSnxcAhqPXgu1dBnz5Lw91SnJACo526Q2dSbS2etXSRjpnXN2MZSk",
  "key15": "4JMtTxjMiJA8GGTcu6T3yaaYNKgtjt5q9CQrNSkG7aC8q2Y1oJxoHaciPZKhQcRT1MKUHBvJ2XEQoMBuLH6pRTQM",
  "key16": "4PSBL1PVByK18sitASQXA36HAXUxqwHjkacgvxdfuLPq8HDF18Bj5HGRyCGBMF9xmHJAg764bfdXNT7pinLGAkse",
  "key17": "2Q2RMY7Cg49k8q9tWnuACeAcbfbyUAw9ohfsNTLikxtC5xCbffArhe3GoZDKhS1P7TZuezm1ssMFVpVZ89c3uV8N",
  "key18": "3macqdZk7nA7q6nUogyAxCTpqa5tVuHTFZ98S6bTYLfFTZHC592dj5qVGEjvVatzGRLzBzY31nTfkHte8YjHX27T",
  "key19": "2pZGoAPDTxVz99mFAVQTFU9cfpewBkg3K5FYBQqLUVU2kTXxE2efF7D8bWSgsFsjnhSe26KRyA7sf1cV8XKmkzh7",
  "key20": "S7GvFDYB9XiME5X7kSx3RvJAwZ2wNZU5nFyWzmXi7fAjK9GUX9jcJgL9xsJCnwjRUgeo9Y6t9wNU8JQb3ZYmorv",
  "key21": "3ZWma4YCpK9ozbkxQGGaA2yLirvYNyfzyaiFtixqMq8h3rpm4WfEDKa5Lgobx1EcfUUwBEACsNryuwpF3EeYw67G",
  "key22": "4PcJYVqWZ9JrxZR2Ea55VM8KEiPegaJBqbzxy4XpZmb1jAAJdDWzLNKfU4thHtnBGvMDFfPCj6mhLvonwD2xBxvz",
  "key23": "wNUYA8A9GQx6whGr2ambcyTRy2KPGfTzDWTpRuiFDn3aQPxHcXtH3B7cPBrcjMavdTtyuceNBWfRZPGh6qxeH6H",
  "key24": "2vP5adoTAw7hbdfC661kDiaubuUsSGpEHnCJKxiPPYjwgXF1gFAwirDNAmjWbb5m3rLvypQDs73TZaLZeTyC3dsL",
  "key25": "2DkgLNp8rP8HBcj3VKcGMX4bYKjsj845RJHbMznJXHitWqNv29qwHHS6N8863Ym6U7hHRaQvFG194yt1hohccV2q",
  "key26": "5UNTRzopRZajbo2qCJEQt8qvEtmQacJiAx2pP2c9nDgxscTvKfhqQaY3Pwsv4DFv6ZRRaXTuERox9J2tvabkL9uD",
  "key27": "5NdAUpoXVYaG823WXu66szDyKptHYAW4rU1QgTK1RcxGd6Rv2qtML5peEWW2QvroqFccyEBgQ62SHsgyi8LEYHzb",
  "key28": "2kbzse64MJkUB3Pjq9CamHLWkLp8v6cFY2f8ELZ7o1UZpooEnNHC8fhghybvGDVmRZZzW4sCMznNpgbCJvsaPguy",
  "key29": "5d1F6raujMzRYwDHnakGs6kC6pjoKctF3aQ8JF7aNSkDGfQgYDYqtibx3W95roGg4gMEzMwrBWDy2EwEJUKMfVDX",
  "key30": "3oevhsUmpyCqGxpsDbrJff4sK2dtgeLLfSXP5EdNh8xTgqjUg36SF1V8HnNVkLv7RmMEZBSVbBJPNKJYGKVFAEag",
  "key31": "3FvqjTeAGd1DPCfdrm6CyBau8kS8pNc7EJTxEnT3QWmqQV9SRTtF1KmySEF9Yjryz3R9nhGSzU34gqSMw6rMzFm3",
  "key32": "5P9mDbS8qBi1Q1WCL36ZsgV4pQJ4Z9dY5HN5cpCRUSBySZdEYbb9rE4PJyqJiLbuiiYfAWdFqU2cgx2SwtymnzXD",
  "key33": "5bnwait1UpYprTkJPjExPn95jEhvZMPkuVHxWWeAkF4tc4yBuCRdrfRqELPNod1Y8o4LDAZzX2AD4MUyb8PcEtPn",
  "key34": "63MqHQpoJdsdYnimpG6xj7uw8PA6KoQcejWyTYZgLCesfgXEk7Qz6YkPVM6D1GcFbP6gP6oLvJA8ZE69H7LYGfbp",
  "key35": "3xEuy3Z7gNPWy8urCrgm5GtTL1UQDcXJUpsVNQps4B4A7FPDfC51fjSu4SMmWaG9kkf7hFdYuhgD5axkBrXc4LZZ",
  "key36": "34TbHFPESXq42HuyRDTwXfUPaQk3HTR2x2jkDFonVuSyLfDSaamZu3PNmvVyS19Sxp5HA4vudzUmkK1zTWMpb2zx",
  "key37": "5oFKpZDGxnr4RdHQkYWSNcY7676HJGW4yLTQuKDurg4dPdAHS1k1iGmChgTnz7BpFw9FLRCususLwNdh5BKQwj3m",
  "key38": "5DFha6EADcAx6FvX7DGYPx7uNfQeFtNgPKHd2ghjwsZM5dihFJAziVZkeT2uxuAkhPPL5L3EfFhDT21CbpZx3GmU",
  "key39": "2ovsfkCvBhmfe2EAKaWfCkTrrbsL87hjCMSKbrEH4CkrRG9M2zQg39M2MYybe8FHeByunATE89Z9fN9gsYtTrpZq"
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
