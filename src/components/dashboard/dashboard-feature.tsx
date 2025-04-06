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
    "4LWzoCgLm4V6hXBvUZSbMps3F5nHch24nwFFrSSaCnfyt9nDUBFsF1xMWr7j2ipNdsD2XDEhPZY27Z6ckHvmdTAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QTbp8nBFJVTMuVVEP4KX321eJr4TNGfjgbHUQtgGmzi7eDG5EsgiGTP2QRq7ydnGivf2zKSxE1j55GQD2dhrmGm",
  "key1": "2wh1eFGZ3UT83xQHda3kSm3cH3xLH4J4hCxeVYCTi4WvFZLvTihNYHPKadScLiqNd6EAFA7efspu9MAbj7vcYbbf",
  "key2": "5mp3eSdh6Yh7sJjcyX1t5NbDn3jeAj3ibNhWX7voUe5wk7R7W8FFtAisWaXGUPtSe9vndG5bHVbdw7sSsD8AvMUE",
  "key3": "31KHus4KvY2vEHhsKxCFc5izHLQFfRGVDfxYAjfsGSk7UU1yLpU1X34RWWSQ4MgQcpuHY5bB9Bcv6qcutwiUC4qQ",
  "key4": "3bqKgJTZPh1BALaWEGc1acXFXXqXkZQWbbHDtGApo1RCBGRCtfiaUUX4twpqCkZs8eEvxVn96J98rebsSHakACzo",
  "key5": "5jGKMUvqrLR5jn4CsTT5qy9hgjAZtyNBADgTP9XzdH1qXfRH8BMgKuoq6dhv2J3AdFNxyRppV5pLqTLXebqGzmjr",
  "key6": "59mKowNVeuTxKbi3c6cMki16Cn6HZ3GReCVKEesJUcFa3bkAWwowMuNQgW49RsbzgW19aRGWVhZNg7H2HmBueVtX",
  "key7": "5hNo9TkPuUNV1j6RoqpwAZ7M85p8Ri2i5DBhNsevaHKwFLyu4QtqPvSqUinoCj9BP13vyVs1H25sQa6im8fcSoXU",
  "key8": "kwKaXdUTDRs4gZ6ACWbQHRdS4EkubXMdJCkCmkS5vfF1TpDNVKBz3Kmq2P2MSFApo59d93soQ34Ak8bzvasNUJv",
  "key9": "1SNunEPWZx4r4ZTKruG13hwncngrYgCL33ZmnbzwgN5eG9TZ6osyr2niULbZ6KXmqY6QyttSzgVRVM4zfya5izR",
  "key10": "3zVi4UGCbzN5zjz7vQvJABfp5cLP4zLV9hNWQ3QSkaqCAMJG6qKT6gNm3LXTWhvhaGtoBHFegnDL2BR7keRE49Bi",
  "key11": "4LeLbmu6etmAhfTqss7gKANcuUAomPyEj88SDwXg6dFSfgE8pdEjKm9yvWfeQhpyvNoXMbcoD3PJpsBEq25wfPkk",
  "key12": "E1MWMo2LngDx4PrkapRq1EQUrKwnoASRohktTKNTE881W8ddRDpRdUHDVfyNtyRTJwM9fNu8bzN7Dp4P2BGkrPU",
  "key13": "4zPmp6xm9ndBQmaJAyyKSEMBrcdQeGLRZyvGwUviCiKVSEEDR3u3946NY2EFGpcns6YMYz3pTo8PnhF7XDnC6NeK",
  "key14": "qtVvaZGDnhXEHamDN5qoDLrs5ZRgrd9zD7u1GEc6r7zjuofA3mNmtqcpMgtPodbEwq5wcG8U9nBVyDbYBg3wfen",
  "key15": "4thSHnVrY7znXfHfLwb2PRGcbYC48GmtmLq25q6SzPyxtfuW7e5TLNDm2rG3G1QkiGdr8DnMTAASUafigvBAvJGs",
  "key16": "3PFv7MWLVuiXpK5N1tLRuVDcigCwwT4ivQVzrnhHtZUP9kRUwHS2ww3A4CTe4Lb7pNuuCtXyVmhwuM2hGZEfgz9r",
  "key17": "4M86FYpac9jokYRuFirMsFUM3bSE3WpXdXd9WS2Wjz4cdYTG92QM2jrzJgXCdXCko4FYok92jt3FLX4yR81w4iLw",
  "key18": "3BSFvJHUpRCb35z4MJZF1msAm5H1B6jpMnT3jswS2agWBx1K2cprr5ZkkLCLuEfAcPCa8BKRqYfnbAQZWHmCdftg",
  "key19": "37MscPvrNhtjApgk3URDU6a89GWAeQTEY9doFNN9L85eeXaUBbWtAgd1vYq6LcKVUwSDtsn6x4Mqn7V8hKNL3s69",
  "key20": "3Ti1BB9nWnivLTTZtb7wKFXQsS5Xdsr8kmdZQJUxXhDCM1pvbPPgotwZcjjkaqfQ1i4RUuPaxG5imYaqaDBPvE8g",
  "key21": "21cXdSiWnj34TPRVWpiYNQeXoQHwzRpZwg7vVb9f2MgsUEFQtH7hLWkgspNRm9Sod7HwZbipKYLm8dYPr2mA6KGo",
  "key22": "634oDUBSmsdqkTC5CmdgaqGSVTD3n1Qz5jP6JjgRna8V3TTA891RTv9Aur87PxXptz96PB7U6eicGP2TCEUv7Hnb",
  "key23": "3LgTyBzcQMPAARNF33S3buQMhQwTmaZtZ8m5f8h3FjWSHbUGWhQQdbTfhc6zQjJ3G7834LAmMXKaBRLCN5sm7PuG",
  "key24": "4GEaZ5ugHa4Kvm4Zh7g1Hwr1ZJUCCx3qgHdDLJ8eWfeGBT4PUoXi2fLugn8ExRdsFxBYrrrZQykkvP2BEUkvucbw",
  "key25": "4365qBBYm6Lpt7jgeVc1ZBJmrc8cgEKsR57bjmcYaA1eMiRJCYXK6w5CWMNmutFaDAjpts5FUUqFWJ3L4i3Gn8RU",
  "key26": "3PDmDyA8VdJxCTCCUWSk91G2hpYM7X1bzyodVCT49k2VNbSUHbSdiqkec2Bn1wCjz8JS4dphNm7wU2GkQr1QFfe",
  "key27": "3qgSKDX8vG5ppfMtNnekjDTHiFpPRxDcPKbr43X1ok2SN1XVdUDfbiriF1iN5TDBYuinivuVrFeihD4cRnLeWKP8",
  "key28": "4hVwD1fqfoLgtHnQLJsyv3dMp274btSBuiuZ3tYbXczbr11U4fSk9ehqueVQw2UcuKSyDpZEYrDcPk5sfXaTjWu3",
  "key29": "3hrZg5gfhfVscXPH9LJ626vinDj8AhwCveqQcEivnongL5YHGkRbq5A5zW88aqEBYLMBSbLRPgAJjn92c2k3AgSD",
  "key30": "34xuG6TtVQki2uMCSNRaw7fR2WhZ8m8G7tWfnAb2Ek1W2pfKfRxEz3UYW7PD39f1w9ZEr95WaGWpuRbwZWTkUNht",
  "key31": "ZMwR5FUB3Br694TBBcGsRvsDRJrrZFTd3NyX3BV6U9PEc9s2sTC3K2nAw2jWYzZnjoH1vkL8JTmQNcmztHt4L2R",
  "key32": "5Cp2HusB8DRHHWtzyfSsPpDXd89b9obJzHzQRNApa9AYepHWim5zFSWvUV8SqbZqZ55o6Rhzs1bPaFbej8KHgq7v",
  "key33": "3YwLGkhQBi1zgc8UcgxzyFvfgBeEshhMcH6REjQTBt2bgt6P8BX2DxXaHL2qTFyJS3VCcQWeo2Umrvdne8NEFB34",
  "key34": "24pKotTh3a8ybzefn3Ghc48LBazaw9G5Fw8wXSqZTbk8QhYpJBXmQXbAaxbmsjzFfPvxRtv1CptXSwEAy7bdGfVq",
  "key35": "3BGn3Q9NtJUmbGVWgpuot5Z88VeJocpvgY27W4BXcUt1vxpVA2noJBBrnwLwBjgH7CaJTVpA6VDQWy7yHTMzbSP1",
  "key36": "4o1cEX8SG1P3azprmUHZXMgKK8iZFT9Zz4GeyBRnGuHmFCmXDNGNTwvcnFuErGYuFAMwewz8yRBztbQMnwWKALYR",
  "key37": "2q9eUTVXC6CK6W6cHYdoNDrrCmkNi4xEEowr9dUPPjJH4CLxdLe98euV3krm2sbVeGMAivVkqVSUhqiuGqF94BH4",
  "key38": "oKGTtDJukLY9hn5KV5TZKzProQVsv5gNcbos3A2o1zHd4RyuM5QPFPmyCNz6DNsimfmddPmWBpX4Lb5KaBzLrY4",
  "key39": "5ucJEjCPPG6LJFJyxqFUXL8RNuDNzghWPyCp5Lxf5Rk5qqgnaDSxZV6DpF68u3ULuVbknpvpvgmhFDtk3r4YZx4T",
  "key40": "2NiqKeScbKZrhPJkUJmwPtZHYyeBsUmCf8fsJab9qTpWy4FdwQwdp5Xmi2QbhV3ogxjMm5KsYEV9EviqLYFHL7u6",
  "key41": "5Q2JtsUwanVzNtoJhzyMvr2wpQMWzvQCGoM16LjF2xmT5VmVX6jKduzHJA4DinZnK5tUvr16cas8aTXFqVQvs3w4",
  "key42": "3SaW1eUQ2SV7uX3fPgmWfL1PNjJth3fmEhJeXYHnQJEVKarVAxfcjQxiMqo6MbGBfx13tbgVaCwAkKMwUuu2F5fE",
  "key43": "4CcG62JK7hDo99cL6JCxUfTJWNDsNpDQqjQEzT5dzq9pfjaQ4Bm1Vp7dZx7NjNyuzf4XAYBipLaep4SdvwnzVR4f",
  "key44": "4dZD5oHaiSBtTJnL2V35Vk2jGPhAs9B6EXsPrp8ZZ1owhUV7pZcbPLgQPAj6uKSpUXWZy53Yi1bXS6Fkx3HSAttZ"
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
