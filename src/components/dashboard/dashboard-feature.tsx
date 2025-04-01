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
    "2LSwMEwWJJhLNzAaTrVrGUWT5Zgg51MZSzRNe4ardqua6Ceogs4mJwoDwNyjdQVpwmeAqcBXg9XJk5oCqR5K9ZhK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28CGGNW1xxCXrvrATwRiXGNQGRcWYAy471XXkjLC21qeMajH5ry9zeLuHasDd9hAWhTF1kAVdCV6ujLwV9NyMPNK",
  "key1": "2wANKKygyawpdFoVFeVwEbrNWUT6oaCsGMfehijVRztNUgCQNG7DVRfTsz3RvHphU74NkzA5KTHm191V5YUueDiN",
  "key2": "3fL1QkvpnQ9UFQfH6V3zq56eSQeU5Myu8wrwS3NmeexuN7H6yDK6PyFk35665zn9vnRceLsdMB47cxVem8asyNGc",
  "key3": "qe4RJpaqQ9i63dj52eejmUejf98Teujn6H3hjtxyCsWgyohxQLCwzx3r3Jzbp333KiXufN5FpYdWkssy8L77QNf",
  "key4": "3XbEEA39k3mGx36S2Q3bH4AJrhnrP1tyTBnPmoGJVrmjgdhQLc8S4gT1ewG9eg8zQ6g9MYsG9P7QzTwEyjcE7i63",
  "key5": "329C3UePJXt9zqxnpoqsQi7kDyRgrTZrZQoJQSFUYkVsi4HGGrhsFn8k4UHDRLZqpDMKEy6UJP7Txyma7eu3vi3i",
  "key6": "L2A1vWdFRYunSs2UPtvjtyoD92TrDdW7MoR4au2iKQ9jYCndcgtvnHnLAhDubRjstdjb1Mj24Gpw6N1zHZ5SYKF",
  "key7": "598b6k2SbmnJqZdLqQhbaVQku4usBwQnC5KfrNwA7oqzkqrgBzN2CobAiQJMiAELyD3dow8vJJ6DadJHhRkcwyNR",
  "key8": "5vRPLAn6waAL1MHbRfmPLMTG9fmoaUS83C8KUYdJsCwg7WKvEnziZp5j4QEjCi6zDLFTSAm2ebeYaAtpi6xUv4Qn",
  "key9": "5CtWtdVKNHDwm7DMxy3avEUhJHefg3tQs3sLGBiUJwK1Xwu9ryiX36caFTiHt3YZAwHVC37kpFPMgcLsGR1FsWaR",
  "key10": "3JYZUMvE3UsmeAa6qHziwLF64SVuHrdhyVLa4sxHGf2ppoofN29TrNYWHMq6N3pDzaC38YKWEaMEh4fw6E6CpV8K",
  "key11": "tTSkc7PkCHXFfuUa1mijDtgDASy8yyb5eWJ6SKXsTekzCKkkTK5JauoJ8y7fteWVyfgMxcXWjciJmxpRCAhBQwn",
  "key12": "5Li2B54SzwQJF4SJZBrxHkdtLm2K1CkjcQNTQCrYnoojmKKiFhCaHiWm6nTKt15GtjCf3SSopy79UtAarfqoH1hD",
  "key13": "2D2BLhpdvVhqr59qjqnbTLmbH2URko5Vvigj4ghN8de6dKs8rVxAWZCPZRrf8BZTVJKkvZ8rjgx4kJqKFJHkghha",
  "key14": "5RsUZdfQiFnXwrkKVy7JRWk81xt7uiFC3s8sEKWvJxzdBKch5h9WytNkQ2bCwupzcFB4iJHDg947ynEBEchTudn4",
  "key15": "5vryMYuRp4AtUMDbdv5UufkE2MwDP93j63qi3TFZW4TtVsKuWYDQRUKcaeY56nMZLgAebZgzFEXPreESa5duS445",
  "key16": "2QvrLYbEF8WFjU2NNDdsnk5VXNofdEjAp84DYYK1qyon1E82pvjjUt338fEooLQCqAzRdCkRE9nKXhnB38MTWF7W",
  "key17": "4e7yv5wfekKr1ePoLPNFqCNJT8nAu9BZiufLduzBjeD61AbDAssNUhhKQKyAy99CsSxEVj4Rb92Zz6eXaqurxWxp",
  "key18": "3YJV3F3x81rDU1J4NUnzcEnhiZKr3UrN92bJsysgS32bYygwksZ8E3Nfi9BCebsdr6RNUTAUxEQDyXSyoQuPjRJL",
  "key19": "4meyeAJT1UHSR16i6p8oV3rpyfp94GyQ1BTh1q5v6bPQvTNPfEzHBhErLu28enLK9boxQyKMTdmLWoDVu8togm5g",
  "key20": "3apnpNpZ7o71FoYfVSatK6tbyFomtVZbXrDFnbsqLsQeEMFrpteeUH9gGg8iKib6fgBLPXdhjiQFPR9o8L5NRpbo",
  "key21": "NrRxp99yLWVaEv7VJ47Z3voxP7j8ra8n8hVgRauEGLwiukbRqkLW6xPnnDNNwbmg1HiVp81FBTp1k32mNuzN55A",
  "key22": "47nyQG4XBvmqPK7fzzztayG4ZWK8WknH6V3zZFuN8gPNwVRoas9ys4fws1a5Vibt9ZuAhvwK9NnapQ6bTMcMvdXz",
  "key23": "3RQmrGcS89yBaa8HiB1yizRzkMQHVxNgaqqUM2UJBq3wPrHdPs1Gxbq1m2huFgtNcgXLom7CZA6JUhFhU2FPPweB",
  "key24": "3EjXapxMDNzSjLFuj1UX5d2PY2oWdrMiGBYbLM3sVbbiBtvDidcyraSPYJWJQkvohAVJHnextHWfSnoAdhsLGGa2",
  "key25": "DyaCD3uCiu8Yf1LaFaSbkbJV7W3d8ZzGU2YTeUrFJ2nV7AadkiXvPKT7r1Lv9qAauv5GsqewskN6PTxet4x8R84",
  "key26": "5xaRcYgZP4aLP3dJzHzUigMUWyfcgz1Z1hjr3yuP6ejv6v9bZaE9kbkgvzY8pUSExt1vTHN3CirKuDV1MXzShK3t",
  "key27": "3ioxxXbumkpV1242U7vaKAhGJFe67kvLg57Bi8H4yKSkcvdxVXvRLXTfzfQoxXxDPzCQrKB7JghTEk13CG6VRUHw",
  "key28": "2Zutx526Z2GC4E43qFm1H2uvgzwF73CrkQypdNkGwtG8JiXnB9YjGx2KdabVQSUoCmimtuJYKtNaX7AVRfWKRewy",
  "key29": "4Bi21db2HqKyYd9oQwiVpAFZ8gpKigs67farn4yEKGtU2R7u913buCCdrxVGrGNPADuSAsdHvvsCbijWsQN4UaLX",
  "key30": "3Md48ZiVkrungCuj3ohuFCqXfUeiJaBzR8pvw5ek6XFEiETdi3ecs9DDYE71dHQC2FpZdrCk9fKDMN2xeyVfd2Fd",
  "key31": "529QMjYQtJ85hwF19Mg68RnTAqERYdPzNCRwetMprFdv41iaMLtcc2AX3NmiPKpFw2dfUZLHMEJxdizGfgoWZaFs"
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
