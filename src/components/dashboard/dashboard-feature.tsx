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
    "32J98d7HoVEwYsQqYD51RhA5ksdnz5TcGjeLpGuvSGRjjcYEP4KGznPxm2xuesXd3aZ2cSXstaQe88Y9Ekh3weA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b97YLRwV3WR6cTbfACarvYNXLYDfbi4QiZuHu4jgd5GL5qfn8qWmmiYFDbVPj9ovb2scZF5b74TVzJR31YL3uCg",
  "key1": "4Y21ExPWkRG5WqbzHeKBWiZ9kbztWXx1wnYTKZNdXqKGrx8tLEaYyW8w8Dbc2MmUmHSXX9QA6HQZ8HfpBFDq7yct",
  "key2": "3d5r9cYRa1u9Si3UG42TH5A6vPiMorVYCPipHGqtQDbuPvCZteQpimvgBQhXr3ECjSfUhfmHBhfX3tkh6LWGTtvW",
  "key3": "38ycKGesgRt2rHSfdtkouazMAh5Ad6rG7RNU8rvVZjGvedN41GPHeXzXoE3WKzvKE2AbSjymxvgSYQgckRNFkFcA",
  "key4": "3232WV5drogtxf9X19CUcAqm3xy7sScaQAHU5P5tEYedRzAFYqDm5hgP2cJvgS8W4Gq6KRkfZyPVbkDzNWDbAjbD",
  "key5": "5aqYuhdPkBkDtUEAHUh9h1rRWsbj2dB9cnnN4tHVVUtbUk3Y2i9HgfRQtRjxvF9jSQJ3DikHcVfjx1MQz6wFJaWh",
  "key6": "bMZBNbHrS7vQ9SNXZzxU6QbpJ3wwv2LvoviRr2LdgHpoiqHNnzLFydCfvDKET9N2zbp5DZSFCGjzgb9EvUsN23L",
  "key7": "4QCtndmN1JJDfRaqFFeV1VVS3veGnPac5YfTV87xyQ3GRo2gpbS6Zmaud95FCMxgSCKHmwYNoB58RXbwTpUQXsPN",
  "key8": "41wRNARfXusnhuwovKzGihT6cC7JC2GdYpZnheLPsvMMwYdc8CmfPbBRMm43qU9ptLnnZapxTUTwfP3eQGRcEDB5",
  "key9": "2RCAvhBHQksAGyRurmGUh6TEUBeNB81jEDTbfMhGnaugM8C6wApY6yxLcdsMAxHqgebzjVmqxzErh4nNPQ2pEw5",
  "key10": "VoDSnXeFtuedV6BEp4T97VPQVLojSooMgUrq3bGa8ycXrLup3LNuKnDB5itG6NFDNtPfw7ku3123Ei4GTnDKht4",
  "key11": "3KtMd2Xxc1xcfV8TgDLQCz4c3ovuspm1wNVJBQSJG6xFat3ayaGmZSQXjn2gRdMXoaskP54QKiSe6pGPhHmtqzjn",
  "key12": "QTMmP7ACkzPH1LGiTdw3RKUwFbXZ993N9fbJSuPbikgJwuCo11Jirx9TtbaY5iBTuf43upxDtT1yr9Tj4ZNdBzP",
  "key13": "5B1PKoSLyNGDdeMWk3fAUhmoTXBq7DumsP2CdRPYqf7cGUGcyCWxgYtfHKGffzZTMcHDvMQeKv4SGMGjQhJ5qRD6",
  "key14": "671fiBPossjFvwRkpRH8C9NGb6sKNvAVNkXvjxi8AADrVYCuGDGWQKM2SMb1JK4w6rLs4Ho4Y6XCfHK1Ycpggtns",
  "key15": "3wTjpT11UGBWc4PmoxQ21zqDyoKVJPYgQbLs1BtqqbBYTweS2TMZWpyCbiFjRUCSWHQRz4zS9TBSgwseTE69HNjA",
  "key16": "2p1tno5iiA6KsPNqn67zfgYXGUbrVU1hcxb6oyhjTN4gXqNNN4v9kqrc52WkeeJ27DtDe8Qx4JATR1BnsNoXbReR",
  "key17": "2mL4RrFfcbQZyjJaDT44MRrneEpYFRYfFNCuRuKjoH5u8iSkU6RoFAVK74dQcWrP8tB1TWWTYoyz4WwayjhKbpH",
  "key18": "5aSc4BnE4Pu2vPQoS9vy4xsZB855WAdEDAyAjUfyNmFX65ZRqxMW6A9nEhx94sbKjMtkhhJjZsAnqfiZX6zJJzhW",
  "key19": "4TAMjxwNgEVLZ2EEAd7Bg6DHWfSsznDbgCLWBeiALEEEB1Me6PoFDUEZB3VzSFPjnwu6JUEyY6ikpn8f8rbX6KYY",
  "key20": "3Km2MHXpxapLwhQMDHyQMCuWa3FV13LZEthSu7QhfxkUzC91EjMEJVT2cnMto6joKm9tYPcNVt9xAcbtg9bcEZsm",
  "key21": "TrEzbZhpKPrbXUJHDk6rwkEsywBQWJ99oryiNy2KLD7H4nH7KmcuzXsFQHxbj6fgTpxKbD13bjFu3yZ3htpYnRZ",
  "key22": "4qmQ3918QrBzFVYPuamZNNtW7DmRke2DWXNs9ySimFTJnBDCHp7ECATuXLyWJBAEQRhAZRNv4cTHVU2AkCXwTewP",
  "key23": "5ThVVAo7tpseZ8toTYsyR3ozGPDRtg6p1yowKZgMdVncFurQfj9bVkk6WQk2LWR3fsRLK9Rd7r9ALAj2UFBWygdf",
  "key24": "2p6dXusbAuZo5ktoGU7kqzrLyggRwdAjinrjGmp7HUyrpYyL1TQvKJqpsF3iCoN651g9A4YkNUNr4Xv4Xx9Ezpy7",
  "key25": "22ZsHPb45B1WfktETkKEkRLjod3VpwumytmLroY4diRNVE5E8XJ3CSdK4yokFVv2XGPy5JfJvpgkW4BUFMGtGGWj",
  "key26": "5vnTDXvfAWSCVzhDvmcMmD3Ru3naknQAXqkDYGS3xXysgvUfcjgUtGskgakVZsA2udziGNEKDSS3w8FhbpKpRfiS",
  "key27": "2JLGD8W7zps2AbBnpfWgaD2Pt1e972gL4ZjH1FPhDqUFMrm3FnRmj9DdUAsD3ZMnvXBjr1SPYwXuHjMMrcGnKSP6",
  "key28": "49rh7nuYULuWETveKsBoLm35XngHKKZz1YAS47N81nWeK3UE5Y8JWo6dvSHJ1a55PgrttC3p6VSixEJgn3cg5Yuy",
  "key29": "YaTmdKayWC822tjWec4RwDCJkwe2WE3fvNx3n5N3ZcyYJzDY7U7xiAxXUdcNrL4eCxyBsjdy5VQDqEVimHRPQwS",
  "key30": "4FfzEzBxRhfgT5tdHu43P8oy9fgjYj8PJXD3EQpJQTHiR3tSYLLMfcTSdZ1DSsNcQRZh7aQXtbtReK2zQNRAPCS6",
  "key31": "5yidQSh9UNsJx9H2PHumrkABEMo6pmdaVtEnudiX9knGFb3gLMrB97LGfhikSC5EvATHyNB2AxXhDKkwZMyFtLtE",
  "key32": "32fwrdWEbfvVTpsQ9L4oeyWtgQrGmmumtg1gRspR35m1W2HKi3VXfCC45xXYAbKfQRSyfUzw3UWZc7RJCmjj1jBB",
  "key33": "4RtFA4GcR1dB61DBTcJ9a4WztJaCgSG6FS5L3668SbrrvKqGkMLHnDJeU7fjZ1wjxGcFoEtbb4TChe9YewerrHJt",
  "key34": "4ym3U2bqRKwb1ReSDLMrVP8NnN8GaX2ZMNJSG6jmuNSWkCAoPHBnKEe6XNSiRFbfc3pmCaihZZCbBFDPK7BxcC7e",
  "key35": "2STaKZ6vQuSHYGzLSjHQfVEVYNPnhTxW7G8Bj6fEjBwnCmgmaJH7UQQBu5uKeWSf8RKZ6R2Dda7mQ2pqRdH23S3c",
  "key36": "3YYoNrWJDDSZi9644AfiJiuU5MqTg5n3R4kCUoASkDTvN8G6KQf5B9wH2KYKwNagURjzsR3HvcmAZcht2VRPKhoF",
  "key37": "5tmFMxvioP5QHsfn9qAwoauKAtYJk9X8poD2xQsh1zBSsxrE6fq5DpKTGsrYkMRwJstFZLwW57RgkwFJRGfZYLeS",
  "key38": "5ogQ3vSnm3eDgMJyWejk6HPAcCmCvRSyu8JHkX3SGQ2atikPe8xAkDVYYqHcyzGZJwJjwCKe4o1QnEAjSm4afpq5",
  "key39": "2u6P5icRNdwTZXk7VdT5bSiYZf8tzVVpET5N5CC1xtVberJADj3BxpReDo6ZqxfV3pD591Tuy7FZZzrz91rBAcv4"
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
