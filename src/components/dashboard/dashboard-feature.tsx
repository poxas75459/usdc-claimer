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
    "5avgMPd76MsxSymzDafhCxAMTJBKHRcWzmpdVNfM9r5etsyRbawBfMX6CLZRXcNQvYHpRsG91vaerjGpxjHSiBp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KPgC97iiuVsNM4PWGQo9t1uA5LNLqH9HhkDQN3taZ2JPShsuj82oJjXT4buEHAz28uh8euoSQcs2V88YuhiZqNQ",
  "key1": "33QsvQrcfr5NcHTtL59YJinDWY2MRg99CzMk4cYx6Qkfh8pjwjQ3N1RWNRSmmmCVGQdNNBgw89y8HtrYLUo3HYBC",
  "key2": "5TPyXLkXrVbMgXAziXyhN12kpdTWHxHQynFrakLaDrqRf6wzP9rdrRUgaCijMMYLfDsyeQ4ZpBGRQ1yvbMLuLCne",
  "key3": "2ZoixVjXvFis7oxo6YiRYxBV2MVfz4mTwYYznQuNZZQnSJetBA8pUFRvcvCQ1W6sq1keNjeKbBrf2hi1EpqwXyDn",
  "key4": "3eJqUFnWYo9dG33oN2ZnU3Xrv6AvNjgePhgAk2zzY5dfaB4qbDAd1DwQYHwbSx5FkJy8yf9C88wwgF5KdECUu2qe",
  "key5": "2bWo2ctVyLUewUW3th3xfiiaLVknbKjS8hg8PjzrPXn7CZdDazToXDEZ6QBSHVfA6cjo13AktsAbWbJdKoiy3SX5",
  "key6": "2sVRsKVmTfY9X5JhfG26KQoHzumBQLjMTTSzQ8ifpa9jSUMYUSgYx9421FGFS83P61Et58Gzt3XXRisjy4UEVYn8",
  "key7": "9iX6PNKHb2Dg8s1Ay6JMgEWj9YZy48wbAWY68yTN2rr5feN36MarpKKncSyZoTRvmiZTH3xgSmUnh1E1nRuJCog",
  "key8": "64QYDy7ERj6KUECSuReCCwS5wZGotzFhTBNap9rMUVfbxByzdJ3MmdjuMPFAeyBQ6KT39ywPp5ifxXbj5Zgfa1Vt",
  "key9": "23tQCcr9VgUgNfUK1jLJ88NvVJQS1dXG3R24VQJD4wQo1quqji6r5CYKbZSZbQBxzSFZQyUGuNYDMiET7dzvMzWh",
  "key10": "67L8uhrCt5Fuz9uv31UgMcpi2motAPb56MiBZrfniDXpmZsMrMVD7UcWkYRJfDHqpdusfetRrMGXPH4APoegufVB",
  "key11": "3aVXHxap6ty4Boh7TW3BsWaa6zjHgP4UFt2eBAHwpzQwdsrstXCwi52VamFixphBUznSN1kFNoSFrbPp44BQMH3n",
  "key12": "A3jRLrbi3q9vQEzUWUtbpwpmscgfTiPeuXMirFGD8DWUDsBi4S93u8AMyD6xYQ9sriqksK5XmpaaNxLNzmXFoum",
  "key13": "sPT8oAwBxQrd6Az2nvkDmMV8isRGL4MPGjMKrXByBsnU5iyxon1VcKsEP2Qtmgwas3F4CNQx4McW3Ru3TRF8JwE",
  "key14": "3MYACohe19duLpqnWZDBmHmNrjySywNuPduhPqtRB3iWMbVU3Uxa3wjvdWhrdiS3dTju1ZkUBTiaNQomQUrEnDNQ",
  "key15": "5NVaDbQXjdfE3KnHYMVk8WC9P33X2iFMRDWNm2XPMgckAKkDLW4wyDVKT1fQGeDfPDUcsagyAfJ7a1xHaMhHHPux",
  "key16": "CvE7pTCDm6r3yJphxEqBxeaERywNr75FigYxmuty8gkqZnNLih2QDNycMrQRVEQqXwCq7Z52wZWEkxoXgZSvuPZ",
  "key17": "WaGbo4vc5i1TivZWWYDjSBDryYKtBMHTrzwn7pimHbKfLX2t7piWe5oNVRDAUvAnhjUSuRTDxXBEdzRuAGpSQBf",
  "key18": "5STYi3nr2xEBinub9a6SidFUH8j2AdbTxU78wkg9RYrHKNatWw5YNxvEe4FrQf2WGaTEkLbwu2zpsWfuDDA1pQCQ",
  "key19": "56mfmc2bQtLTCtr2V12mRgzQbgTk8usujaeRbNuJqruxsRmtmUwKF1nRN49bzz3RqyAk3v6ZsLNJFZ8NrKncQSHJ",
  "key20": "3SxcDyjxkbEMgTmH2P6D69YbTMnn26APZ3o1vXgvg7m5Vya29MtuuVaeozAaGjxh3MrG5AHKgrpfCijtGCU7on91",
  "key21": "55pdzCcgabwGvdGjo8g8DuDXTYK2XnBaRaySaw4aab5TCctEvAHS9XEnoRQKeitkqRRoLPvaVPFzMNsUzRSvw2LL",
  "key22": "5smsmzd6dykvkJCXM658oJpCLUsrRmo5YuPKJvV2h8EMCsNcwjRkTLRA5DfazSoyQJutd3e5w5eV31CT8dh5naJY",
  "key23": "4MB11DoKW3QUCcmtnYmR2FRkePcT3eQ9xdSy6qLFPc3RZi3vB2Z5ZSn5DgfPxbW5M74f3KYBfNt1cASGGREdb3E8",
  "key24": "3wK6kojCJpttX2WsDFMwawjpJaqer9v3hPee4DBSTvzuJksUDZo7pCkS2VLgNz2HVMaQ42z2k9TLSYDEkefHtfzt",
  "key25": "47UmFKJi1tKouTgF1q2S3vGy3Mze8T96XdmgW9NxbBxXNhA56g3kYxrCgmisD6qZUtxdnPHgfyKSK5aoi2Fyk2nn",
  "key26": "2WYDh2UsRitKjyRDTTC7JxQrVPmHtbDaDhpJYQUDupJCYeu6Fp7bvykHERjSVPBSHzU77FCD4pwHAmk3uincPUYJ",
  "key27": "5G3zaT9E4kwkrWDtSRk5zrnJrDJwHVymGyquxzCyTskA78PoVSN74ohnKT4PQ4XnUDGA7BH3Cnf87W5QxcubQrok",
  "key28": "641E8wDYNdeV1qFbzMkLgFXt6onfzNWkrmXKXWMWVvHciV8V6jo1dSPts5fuzz5ARvSbNCFExZnVuoyUXu9fpbBA"
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
