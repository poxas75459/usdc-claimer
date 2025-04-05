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
    "2zQWveBgFrY5vXLk2HAHBBFpaGfdfdQ7hauzYyFvPqEA4FSoBQ6rwb1BUTK7LLX3VrTr7Kw4WRb1dTN8uj86xkLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p5tqYm4c7FJtkDQzpPaWsARZqp7MzZNBD6FY5n98V6GXfPe9ForhcSJhYCJRA3AEKpyzYhxjtRX5pWnnPdh9WHb",
  "key1": "52STo9rLioWiBJDPNk7oJaxZJdtFv32UxvCQygUgWRSA4JQ9eSnnE7JQckSPwnbT6LuadjH9krfCGiSYxaHEAV4k",
  "key2": "M25AsmLZGeuxsA56gkYLsBZRaUG4U8wcSiVviov5qfsntnbuj12tfp4MBQgviNy3xjyfUCci9F1rmkA2pwgTWvk",
  "key3": "27Hs2de8i13AfxH2hj6BG1DdrcLGjn8qSLxE5osEYWKLs46CS3auPrrDsEVAwywvMNejytMBTwLmPi62cBQk1hHx",
  "key4": "59LDTBnr6JBE7yqwuG5ai5G9icu2dgZ4nM2AE635untkFm7H4htKmti1K6MSAMMD8CUGaQmta9didqpHrUUw9TLW",
  "key5": "dvuZuVwcHntzyMzJMBuYydhYFYY1b5wiUWn7ULyuvE4A28FDcGmxwTviiywiR34RP2hUSdt7sfc3j2jBkaZ2Fig",
  "key6": "5EayNKTYqjThVLtqvAnwyecpiccbS71KyPEB4oK8nUhg32H2oXagPvjQXhrZ76UgxJZhkoHroQjXESjhfzUtZVRL",
  "key7": "3xmPEUEpVFRAKcRUsVpSacahpeUwFvv73bNTcjA7XniafJUMqb3Zc8iC2f1TvrboUbBDFfz1F5XkMB4X1GXr9NfB",
  "key8": "2yhLEZzJN2yjZZVEWrMuNYHQcmiyWycoavzKEGFzqaGhH8uBSbMQhwJSSzCgENkWCNApbtnmCsmviQR8tgTqdohj",
  "key9": "4rAowyAvyXaY4S4R4qBsBf5xriUAJ1KFyK9NqrTYHJ8nwTAiPu7rqveEvFX3T3dUrau76XBWYHNGfSUpi1qJsVLW",
  "key10": "3bieK3N1oUiXFYN7VVbgnDr5cCbuwohCJZF7CDY8jJZbCry6Jo1nfsU7CjRL4amH6Q3NV9qgexohqRtkNsf5pnzs",
  "key11": "3xDXSRJf5gDtcf2yk7D8sagKen6J7Kb89mQdorZwGQvYmG9mVoeVj6TyiNQEAP3MV55voAqQYRUJjCDXwKB3igU3",
  "key12": "4phZBiwECT1J5Hm1fTLCyRwyb47JFtNCNxkJaJdNGbMhrLKqtA8orwxBBLNQPCYuM4H2Etxvmx1VEFEUsvAT3xRk",
  "key13": "3kiG8b9cwvwVm7SGTKiZWWZ2v7uycRFE4H4MkDFiGdiNofMLMBjPkCrtcbcm1puSKf2qGZfcw56NTca8DA68tkw7",
  "key14": "4fPsSoPvnJaiDMVUZb3GHXtCsuo8FnxXtmnY57hCwQ5mfLJCKY3FraQ6j2gNAGynEGwQ17c5teLGAZpTJr9suGo1",
  "key15": "3KsSTgApALo4YNGL2CfVqrnaYeNtuQ8SnRiJ6Zwz8nEG6UCPgqMHT5vVrTEEPms8w8dgkjFPsoBdcLGPvBqK4Huj",
  "key16": "6368fHx8KzwYWiMxb6G9m47w6pPo2KiVQtohChX3e14LDQzQQcQB4tpHbgd5HGuZTKSD9N4kUb1zYextESCXwm1K",
  "key17": "2gZqkKmkWQoFETK372ajvDwVXgT8EDtN88yzMgme7Mu66DrSQzk7AuqkwpxiMdhcwECqGyfWaYZC2FLpqpkqSmmz",
  "key18": "2FxiNbTmNknmbFm6dNtSzhxy1TZxARAHpmRoM7SEtMZE6c32ZwbKMC6WC3KFULAYqQzQpHsUWwZZP2hb8bvUxwwu",
  "key19": "pkonKv5CBbJgKRCa6a23uDP8aCeQkm3gQUR4mDAiitiSNHom5FW9nKLRBWiwuTLSwFu2tpuN9pYx57XowgvSU9c",
  "key20": "551LKixm1BFk2FWRgDrQRK9cRkeMw3A3ev93WTKoPdJdewTLhjW58Ff96xV8mYgLaEaiNcRdHBarf8qZCNC6tijP",
  "key21": "GpPcAhFWu9vfph5ZxzLARmiKT9MGNcXV4tvRuD64FdVaA8bo59USGgqmeWgKfjDDMXSNvgWa2LLcipppqRbLejX",
  "key22": "4t2WJwwU3K3WB7tp6xaV2c61NuEGCqnjRDMautMjzibbaSNoXDaUWZQWA8v4Ykvr9VQmLnRihpMZod3rkVjGQBMQ",
  "key23": "5mhUWcCjgdUScbadNKKHnRPdbyurFEWmd3WKAxASHrpZmPK5YXAYajKczQ4gWtWvXeA9EkL9qfnUrJKzgdABgVDf",
  "key24": "51vtZo4ECypGsw88AVAZBnXTJVTKdvvZM24A91xfqrz9xsQFmVANV6rSbSyDoZvzrhWDDPv3im1DogMNZyEBethF",
  "key25": "3qP5YyTUTTfp3bNQRBCodeo81B7jCVFJePA6LnH9WkvbcMT5qF2jBKBApW4XbvUgMydPf1R6WVRBxjAJS3ZrQanJ",
  "key26": "6Xv5RmcEPtYTBMipy8XkeCAeKYYZjwotuGnhf7KNDv8fBiAexHaVDTfy69J2gbaUeYuG4PmjQxW2UrfNG5suayS",
  "key27": "5Zg2Fzq1VYuPmUUXnfoMKfoJAfFdtACCQeTMptoMVYrim3cajnst3N65RaufeZ5gggAgPRJhdDuwL9WzcU3Uv3rJ",
  "key28": "2LP36DVXMVmTbqcxsCYUMxQHhXu4CWoQkZMewoNGbyPAzQ9uT7azywJLgaavTzVmnXUqrQkECAZVovB1U547SpuN",
  "key29": "5JdpF3xxgTZbi6AbyptXWTA1RUaTFE7Waaht9HYqacmRrxo84YDajRvCHBtajg5qEtjLNhdccE9pnt558r9ZnsBm",
  "key30": "4TJaUuodbm96mpq7Km3zoifUyMD7qHK5CzXeRTsrwDvwWbj987gixVwELkq5KzajLrvpwg8dM4UHW71bhPqLHv9Z",
  "key31": "29xyPtiPZPKYDCp2WwAwkNNGz96rnPsW1g94oMrdwVsuSJMdCbHir1WeCd2gLzr6nDA3oqrKWKfSdtm42YJGnV2b",
  "key32": "UToqHQdszEbkoczAmeDpCr1gwD2ghZXV6rLdjrtqsqc9XAaFgLTo4xmBSTA5JhVsVZr9LcsDYDev67244kpwcun",
  "key33": "4J4ZMqkVPHpotpEtEUjxp4UDbJkdou31pN9ZKFXbJaCa8totXqZ9ggGdB2MSWdoX6GFvUTGTGXm2F38McZbLSLBg",
  "key34": "45i9efE7Eeo69EJ3VcMB8TcY3nDbPS1he1qYHyBf6sdKUoZbDdy8N9veP57UGYKi6wQELMYdvRdBswNfcBAAfaMg",
  "key35": "5ZfxuuqxqE5Kr6MqnMMPLQgfQErnWR5ae8ekWcWbgdwctb92qdn4VeCF2B79EwrZQtUwajW8SoDSu9srhtKoBk9T",
  "key36": "5EdC3zh9oQT3SjtEfyRzHz3Vkmym4vbAauB48kVggqHFmqCFifBdPYBFYupc6vpXJ5WbEUc8o6TyQEwBdKmZvkDh",
  "key37": "PKZfPXFpZTvtsF76iDEzA9MB9hbYt5Ya5mkYp8xtpUrpkwK876oUg4aJj8nyvSs98bw6Js1tB1Pef4ELR6iYDrs",
  "key38": "3bnRHuSgTpa1swbb5v3uSi3KWmhEwnVWLpNvywzDitT3gKxE7DcEZz9fLz9N5vxLfm3miQya1ykpGC48TsRWHB2p"
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
