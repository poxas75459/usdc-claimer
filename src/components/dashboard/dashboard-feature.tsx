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
    "43oCu6GPczTsUZ9smeBfjtasgiykscZ1JV3Z5E5evcZJmwmB7L49RzKore24E4pehmnA4idRKrGkUCA3gNKNhm18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fNPDcsGus3yqndon2FwpU2Tsyr2doNm1La6Gt2J9Y2jYnMTGrTQfsCXCk3U6WQJLwCECvSGusFUg1sWZ58fvibK",
  "key1": "3qoMGNCMFc6mUBjN4JsUXpZzChB9or9ghAGzbH4ensekRGvYYLusPViXrgPi1BB1YxH7BEC49Yhw8c6V82WSJFsZ",
  "key2": "3HuEf59jkKYJD19xmRZyrf18sgKbSSuQ4AVNANzsi9bSMs9mq3CrC2cpkzaetBQ6Ls6ti2mFVZHUeoEoSDD1fhfb",
  "key3": "QZ6FiCpJ1gyXrpE71qwg6ogydMaF82hDB1Fxt1pZLgsrFPnqunuW8M5KALQJZALZ3NJ7KwnYW6i5UHrruXbHJtt",
  "key4": "4tAs3Jzym5dj7vXkSBS5ao3dr78dNbjXp3HuURbi9nHQmQaKAYuXVaCVjGFS4APJPJVkgmUcTGHYZ8WMTzKhPLs",
  "key5": "4rQjoB736hMqL4sdFS7fJr9Vhej4PVGxiNgBJtdtzdFX9qSFeVB8EqDCyU3476bEtBuW7nobfSpSKgyym63gRKpP",
  "key6": "2JVJHbC9fdF1cmrzUG9s3Y9PWbcUDn2iSxRhN1kjDdBrYPcPRyvSY2gVkynKcuGMJhUZeEqEenwq29qerNCHuino",
  "key7": "5TF2Cc5yLHoTiaH722f599fS5SCyT4M4YQoc3R16u1L5qozqabrdntQ1yAnuKhX9MZ1rH1Ch8LY5FxNreAyrGFmR",
  "key8": "2P1xwQYcWc7qkSdhy5SByXTVBeRB24mege4Yy62iwKqMNtAYSX7h8rzv1equDqjAWfNRh5MpdghvWLDUvQkikVsi",
  "key9": "2inmhfSrxbUVucgdeMr78LtbdfjAjTiFnUVi7qkXRuEZ5KXBXZKyeMzvGzqFNdZaSCmkvFWSzAgX1xW3wggWQsRt",
  "key10": "38pFqmdGHCRgw5BRbyBx16qK78pMqsoPYJdHFboiX9B8E5n25qbBxKF9MuUUVduaU2DprFG3LvntbseCBMqEdeSD",
  "key11": "4EMLxKDUnGxectuNpMpmyDAHWQSvoVHa51oCHgUfGBLo35Ao6uoCiaVBuVBeWzhzxghkXNMYUpQhk6RcFKa2ioFX",
  "key12": "2oPaAic67nwQnsSCEk31tPLepxg6JY6L2hyGkmLT2bK82ZN5kejfNpQgSAZojU4NpirmTv1tvPs6gXXDS7psUFpY",
  "key13": "2Mi582QcaHSMr7YgKPeTSxKayuqUmXp91u6UffLkFFMUQceD3v4FZpVE6ZwTpMyxb8f9oPmxMkz3UjYUwDAu6Eo1",
  "key14": "FVZtsffFx2Nf6HNZZTnU1zopne43uaJeQfv1b4vdsy7BHVqyvSiLgRZmjXW3RLGpLDwF8vYW72aJE2p68AWFqw7",
  "key15": "q9a3Y2FYcPWAXVvweykzD7jFHJ6bvnccMm6E5h4irdVESV6Dt3r5JLziWvZ3bshYmcHhjTKB2nSu4gAyWF6Pnfz",
  "key16": "LPKmxzgKdGE8HnbsrXXAU77xxpKYwN1jGYRcoS1BLARzeN8naeVWy1rxueuUspFPW3fnZ6hY1i92JH91XN15pa2",
  "key17": "8LtQPCTXfcTFTai2czV3G8QLo9hTdVro8rSyZTza9HPSPwpuCdUXHhJbrVnv3sTnCJtsCptdqxmZc5DyYYDLuzz",
  "key18": "5upsuSieJysEsBbHqdNK2MUc27C6G35zYyuiNtcFCn8KwzMogJAtszdwzqBexgRpn8GFPVUw1i59TSNu7bH6vnre",
  "key19": "5oyX3UmoEcPLywVEQ4G6MRPFidaq1ByMr1fomqVGAmcCCAJKX4kBMrK5r7NboMXzd3amzTJ55GPz4aKcHNLVT6GC",
  "key20": "2yQWjA8wgKFkgKvrLAitGF4r3r2w2TCvRdUhZTDCPZv8ECcQCgmtrKgV79chm6csQR1zE6cnuw6UMpJCcRAKEY68",
  "key21": "42w44h7p1rhkw4jq8YAmTx64cMQ41jaERXnXVC7hLvehmjh9sgtdbLCBkUfqAiMnCc6Ro4KH6n3c78aXzGTDWA18",
  "key22": "41psrv6r423mW5eD5HscdkC3HouZauHZjrexhSK2Rw9iwCBcEcf7WQwyNQvrpB2TkQC9psiaxzwcEPSuvburrbT1",
  "key23": "5gsgq1mKdyV1sb8xSsdLiaEMxfQKpDJHnq2WxLpNXLF51ftcwYBLZWPVzKHdGMopbKa3xMkVBzMNcTosUbce8ZdT",
  "key24": "4aW1fMUiY4mCN3PWoTdZ8xpeCHBnnY1Xth5B6JphJkMzLmH2BqhfMF6xfkH6Cihg96LYMpcp5MotNmw25MpobNKv",
  "key25": "5GWuxc81xxikvxwNfesGxaXKUWDrFSBNL57K4nxxSbYT5F9Ju3JCYbZiiWHj3LBQp99wULVCqbLDFJ3Bt1C6kT1f",
  "key26": "5ehSmpPyZKCKVdFPRcCBLPE4ZwpZUzigXCD1uWikoK72T1eQxGbYoijkjaKKLcSnfJUSBADaBPkQmgGGsxPBAuaB",
  "key27": "5imrsMT6vpdsamhEq1T71u8oCP2oyTEQLGGuwiFhxN3XxxngkBCgycnm7ekBrjE18v5WAUBQw61fTrHrSGW4xwBt"
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
