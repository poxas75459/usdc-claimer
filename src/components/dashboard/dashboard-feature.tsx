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
    "2PnnqkUFaxDTMoTMuRyJY9LUgTWs2UMrEqLqDTyV9owWLZXwbCcucLCtNZahjCE459g9eUTEX3U68iJz1ojV47rR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aqoVxb2FnoWn4YjSazWicXAL5WyvAkqEyDGn4UztnXZAEGeGWWEX16ei8gSn6xFoGZ62wntavWBRuJZZCwgvWNo",
  "key1": "4sYPiqxD5BAWb6QVr4ATthwyLfXAPxd6YRcMhdQzHSn5tVknWme3uHW2P8wzx45xPVSzE2FHY9LnaPaY1piQUT7P",
  "key2": "4mQtxAwK8ZdYnrLuU5Yx5AgnzwWfsVfdXU89XBJLzKFw3MBMQQwLNnA2wWmmT2RJ4Q7a6926Q85LkKFBKPskmypN",
  "key3": "2mfDH6sShdiHXWheZDy5eupUhKT9xP8aXRZo85MFcZerqfsy4uqCJXaLzVoExSTcAqdEw9iomnzr2niN96pc2GyQ",
  "key4": "3dxnAHDAAFVUTH68ni9S8VzsRvrocYg3hnzakG73zfiQ8nreQq49ketNwWuib5EdX6QUoRgWRjkVqbGAuhqQqkmU",
  "key5": "XGfHNjYnSdfaJebwEmLEyAkkpDo73oRP2KLJ5ieLFoi791SqLQKUyKkLjGG5u65KEMinnXCzfZjzUpjRgdLwVPe",
  "key6": "2ghVetbWWHE3YP2KcthLzCH99WiVDZkLsWL7btjx41cWHTicAFbU27cZdgBBhziYPvxupwqDdXc3pn6RSCg9jr9H",
  "key7": "2htVvd3UTQgowjQhQ33Knd83T92Q45EBW38owRXkgPM1cJK2J6o7UuGKLoJ7YJs3WCfTTxUxMuL4bf7u8yjMam2k",
  "key8": "2Ukzqvirm3UbpmBkUpU79QzHYLQFAVKk9WHBNaqiuqqYFwLC1HL9cJCmST9da96nPgGajLgjb3wNcQi8n4oG3Nzy",
  "key9": "4kmYDoxrHdTKT9FNMB3dc6ue9dkisQWePcKbok67tNueDJ4zpE8ma8Je47rjD956t5w7VwqgpX4Tp9i4aokwvQar",
  "key10": "5WMqQ85GND6SxfzbhPgCovXuBZUggfMxdHUUyJ2Z7E8dEcGgxDvpqJZBAAmEzxSTngwAUankTNup1XcxWARESAS5",
  "key11": "3FRUTnrmoRJefYVQRskyDFHGfe36BHTC8JL3vXLRp5yw69ksY78KD1Xc9vgUPWSLgi7qdvKyq4zH3Mt6hz4vWhXi",
  "key12": "5ffcntiPDqgBPKT2Bn2h9Q9F3A7Hee9xRRyZC8EDwEw9JKwHknAfAbJDcZd1z3LvtZwykEkEiCCndQNDpBZctU3z",
  "key13": "4PTurdCpKgi2qbEAMyw1CosyXrnXd8RHfEWYFZt3J4yArTwC7mhEeJ9piuUaeC3CRx8wR2frZiTeZStvu5pRXiiQ",
  "key14": "5bnAahdmxpnodnpGSKUZGbRzSyc3CSwwvnKGYjf6qKZmoSuscJ6kfp1jFhGFaor3wGxfnLu5sd6tjwsVFqQ1478r",
  "key15": "5BY4khPGQhQPSjCoZbrKgKkVwrentTev6Wrkv7KJy5SAYcYmPaACbod691EJP3ytNQCGMpVUad4HcY59GRjXuoCo",
  "key16": "2Fh1nKi4gxEUhxQqCR92N4paFi1Jr2f9rKCGiUyKhpas3gmoQvL9azZyxaC8wrELNjNTwWCPv3q44aFRhDHsQdp6",
  "key17": "352NiRdj5rmBfEx77q61wkATpMGmX4yRr3w6e7ovSK917VpkuUvXEfpsAY3zY5Eg897zCF5tPxpmC4dQLMPzg95w",
  "key18": "5AsHBrtmvzn35Rx3TPniYchgRUa6LvP6upyQj64mcUoGMS3nKcpgHwTXe4z7ZrVi3x4nsgHXUcKhiGD685yAvN2W",
  "key19": "2dyWk1MDiW9XUUJBN1f96BGJjQj2dJakMraxcnEC37qCgX9z5rHqnGtJ27t5bRBzKpFEJjR9QHCGK5i7wy7Ziq5x",
  "key20": "36s3ifqcRtSnx4qhuzq5NpYdFRQ42p3BaVVvUK4DpcXrKTog1Q6MQTN9DW3e5xn9ZiRjEvkgjXJR4rxMQJBaUJS3",
  "key21": "2MDVJ7if6jr9U8u6AJKrsf7WLzFt14gmhyhgLcuFzMeBc29cxbn8fB7wgQRZb2x4WN3TTB9DQX9cBJsENvUXu9Ud",
  "key22": "3LrctcgJCiYvtAUz5KAZZbMJEms8Q6jSZQ48hnSvv7NeXVUDKqp25DytLAHAJ5s3NwzyofPdeyrViJ2B8Yev41JC",
  "key23": "4ak9rxfWtEGRpm3sQYyvuBby3XuRHJSA2sbULbnejExEXpMpoexwtycNNPChcs8Cn2RMb5jSErvgD9md6Uxbb45",
  "key24": "4qDeWyJMHmeBR9AAjAY6hkgFJh2NgcEMCxzwBGrDvbZoGvbiWPVkm2wQMwbUr7GYrWR3PT7zGFCGzuE8gXQuwgy7",
  "key25": "1MpkrXjCLp4WrSwSgooDUbVVQB3bGxFVisBjGmajPdNH6pg4KiuyjAP72MgkfgzTa5VsakZ81jpef9SgciDyjh5",
  "key26": "2p1UPfxN8EWgMHzexHxwAV2LjmtrdGkL4R9SexaALtVf18fdSiuL3YPYZHXBLyoWAVucb8XsWTASx2Rxi3f9zGk5",
  "key27": "4J6et2KgWQnMcZ7EWZNexCh8UqcEGQiDeNEDHJnKHDCGPn4GRrkuD91DHsf8en61Hgy1V37cLHnPZR3aLbvKbAje",
  "key28": "5KDJaf3E7LdcCeNd5ZC8MAGrrEHmKmbqPJvmBUV3dBfpkiV9LXkNxbgLuzhKuc2jzJ12b9sKJeYijPGT5DpRsh5h",
  "key29": "2hTQoNvZc9j5bKxDsmCcUTwGym4qgqasoxvNokFgaN6Hv5ocHqXnmqFjvVjwSZ6Z8KZcedi8NbNw63j183kxWqH9",
  "key30": "54VE1PS4yzmM8w3KfGSDjdhThcCDeGGuap7FkfVDBLSVw4xiTm1PG1bCMLg8cVALD82ATxPW299Vc4RPdRhjxyKF",
  "key31": "p4Ptq2XFEezB4CcVzU6FrLSK9z19WKqaUXtcYXMGdrDv1ZHUhLqGYpeJoMVXHiu5bqpGDE8xffHuZCdX5yDFfdM",
  "key32": "3tdhs3VnpDgk4qFjCTr6UrBATcoVCNMfB5YYJZyG3V6omkEXj32Bb7smoBFyuqYEXJJE9eBd4VbpyLDtbddW5CvF",
  "key33": "3xT5NwT3ZD8bYAruyDvgxtUCRKqoeghLqJjMt8Fc2hXh9szPUBaZAd1Lmbk1x3FswzaYM1WHwfCxJwcrNKHjpmND",
  "key34": "5Hy5p9eNFEqGMTUdYkJRuvg33F4s1p2nLKrumuxMimpDf532qLzQp3ktVmXhHek4ZT7t2Mnp1fXwGi63oQnq4zTZ",
  "key35": "DBSP68xdzojpcNKggC8rLYrEZPUGH4MCiUWopJP19driE9VRDea1ADATC3ZgsmEpsJdyG5hB1Qv6kvAG8rn6Mey",
  "key36": "5cSXfxEfCDqiPJCnqJHNmg4rikVtBjUGbqTQ9bn37z9Et59cqpgGJ9MKNwjdcgEAGCzpqC6UTMvt1KxrTTiswg8z",
  "key37": "294ykLKr45x2V7PTjCxaa9MhatXSQaLMYYcXnmL3AXpiU2mUSZFGk2RVye7pYCDNr8tGKULUqJCbszZ6BmC53CWT",
  "key38": "2R97Biyk56w8ggHHDgcQrg3b9cwjWENeFmA6TFfQ6MZf88WEuQaf8NsFNHLoWZfu7GCGayCTL6FQArP5mkexJDXz",
  "key39": "5HAp6yFhRDfdga96vVKmQpKLReuwLm57RdsV8fKA4NZiufwfeomw5RZEGiJLchBXbGZxq5Z86o6dpUhhND9qWSMM",
  "key40": "2uc91RgcBGCMURowmey7cwB3Ae2DNay5wrztmSsWfksKV2Z7RsxrLNiGxqLAdhE6tmMYUqN52eT3RcN9scq1dQm8",
  "key41": "mraRwnztVNPMxxwbnFBK3MapHyKoy1Rtd6x4SUmBQ4iYrLDTshLRRgA63VSyAjBTN8cfHT5BmYZLnvMTFJjvSTJ",
  "key42": "MGu8Eu8EcWSZ7x1pVECfNJfycBb4J7NAPovLZWQKDBSkLGFSYtgUywodJxpKsJDqQVeSgjm6GJtLMyLGQ3Yd1Fi",
  "key43": "4CHe4xZL1uKbSrFr9tyQcB6jqS1tvvY5KbSeRSs8AtVhLcA6xrTrGbWmRGRM2y9KZfcpWkGdS9agjsBA1cySjmuD"
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
