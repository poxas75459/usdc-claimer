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
    "4aUmWNYwB4uNMmXJshdtXUid2Bgt7oPz6WiDYiYCJMYdbSBhXFdvVbLd2M4C3RfjtLGoW5CebuP7mCEMzWTiMoyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5grdzHdkJf2HX111NxBvYDc94ytXwcfCuns2BMX1Z3RFBU4ynggFSSp4RUe2Y5iSMMT6d6wgWiEcV4dMytMJYrZj",
  "key1": "cjSk2PzJMpEuMD1TfM5N7JAaKdbmJmyPCWEpxvAqBv962QZw4gdv6mUMicTQLV4up8MbDpNJmX3XGZ6DNTrwpu7",
  "key2": "5sXN2VbH8XEfQpSXF8RXuDr1sWBRJTjMDXbRhYmS4VjUVcyvv2JCcunZgUhHWpprZfDRYoBDzaMTA6DaUNFKuhdb",
  "key3": "5acTcLsqgs4fBhWefFeYqWQr4UExaT1XZGvQo24X6TdPDEFjs3k5WZJvSCMebDRGeYhRKu9Z2tpzNs3qEuC5J6BH",
  "key4": "3RJVyrjFcCR7ympYgHBAz7in51Gu9gfWqFFouhTSwQH9pkzsouZSW3gftnEXNfwV5uHz9cUCk3ygwkzutg9BwCm2",
  "key5": "5fYGeG9eZght5v7iGLh51GX3ay7VPBrc2mb15pmtwaTYNcoUutZzswvxpevZUJ5JBojWt57PEefjPgosPFpWLLSX",
  "key6": "rpFYRnnLT8Ss32inbd1o7thg1ymZirbLxGCZfXQzRnHasKjfSXRxX3aGcYef15TBAWriX1eEX5YpT5RAnVdA3ek",
  "key7": "46VorgUdqJ29qc73BcqXMRZbug8pZo6L32HS8He8k9kgdJ77VPRGggJh4qFuDF5VYFPVZrQyDtxQhi7u12saGSu2",
  "key8": "VhkeeAAtqvBK6uQ2pWK22bWGabGcTyfbtB5eiRDfLTzEt3fvxLz4KQMCfCQVeuFbTRieAwmrvWHS7QrWVYWXVKy",
  "key9": "4VU8sH11RsSpuaHdmNRoo7xTrKS3hNqxDQzsUdLBP8SxPLqMNdYZpSEPNT3J8ceE4dcwzN8iPda3xQyTqPffaQXs",
  "key10": "2FsuLsj9tojUmmSx12LxFpVvSn3iPdijdeVaKWBXqoiWbgnuEpDSUKg1Addg4MxYkeE4RGP4o4RDe6vN7dkCjudF",
  "key11": "5YdP843GFctmGFT3cq67m7w3L71Ei5BVqYqaMyyVNpGeAuNb8qtFKy3E3fCuFLu3WGc3xGgAxLVDfupVYvuro7Rx",
  "key12": "4mWziSQs752CcWx5q331H6VSsV8GqJfgXCWmi7ykjHnUHLWCDmGaLUSrYju97V8Rochu4u2sKKFFdJX3Ah3B35SC",
  "key13": "3fzmVeZpAMbPMMWCNnYmGxEwhhTRh5yLJj7Zrtcdxi1ZvG9FZqEED7qnj7zUZ4XZ8HW9YUVf93L6neqV7v8UvgRY",
  "key14": "4Hyc3Xv78jQatfeDkEKJ1yy6GuzCv6NAaz3jVkcacKdudsitrqh6DbAf5XA7VvHFHwYSSHykJeMnoJq6BqDAnUTG",
  "key15": "4xtFWLxGECLi5usveFvUwkWbTG87cDo1t4SxjfsR9xyEP5i65zsonT1WK9JY31TaQq3Lh6c9XWmCHjNCXhtLNDsw",
  "key16": "2cr3HUnVYDyeV4bqoWTcoBskkk1UCcuSNMmvvZtsim4PUJvFChpDwKBknW74QrqtPA6RWaHCgS76AYp1zP6x6xsF",
  "key17": "2i6n3FWFM1AhFQd8wdyqCeE4cMwy5grV9qzJPqLPEHUSEi9wPBoHBwisD6xwWHp1s3iatWYZ4GpJZEA87UoJ9miz",
  "key18": "2j6k1cVBYS4KEAN3q9K9p87LWSGib5XNVQcUWt8dzhTUod7ttWUHehmxBHUGssms9QFNMyLCuSGP6X8m7izLXNNB",
  "key19": "rWd2wnjH92BGWy3UmKHvd3K2roVCFhMiEqEcqj5vyKx5CZr8ASt3Jj5UY9JJ5t5ocgiSFJJeXvEjXRmjRxnRMoh",
  "key20": "4mJLJoPcJsJoWH67EgBR88vX9ijcaibJt7c6jUdZmhL75ZciipaX3tedp3on91Fro2JWkQGrofZruKN9yeccFZUk",
  "key21": "7NRqsh6dervTQfdUDvGD39oXG9aMxFWDet4F6HnAHovja2bRi9mud4xzdJHkLgYjSHiqM4jYw37ZcLw4urjhHJo",
  "key22": "5gLF8NoNVyanwG71ESZU2XdaR11nEf586oct1GXZpG89eYQbRRHcvMaw3JJehCy1RvUnkNCsbfinhNjfqVMQrDFV",
  "key23": "4qxW8wmNAPmeRd9WJ9kuKhNeCKy7BjCN4w4YPXT9QeBW7A2aA2sT2YEwPLewc43ysn9rzBgH3GqLy5NsJZ2QUf26",
  "key24": "3TLsqdrXZLKz39pE64DBq2yvebJByMX3hmDDgRbk3bPaeVewhThjBXguUJ85AjZSEm7m2hvZzjxwopwqDvCxGC1g",
  "key25": "4wYPmQidnpVufGRt8amv4e6ebs39sJG56h5smyJYWAU4XFwbMh338TavjKmFBrCWXDaoaLYJFQNdkHDeXEKJ6ZF6",
  "key26": "3FmYFqPPfvUmpjtxvBUiKg3mQzhAPTete2JtCQBpsRwTXM1oj7GQcDkUcS39dTrWNn8ZS5H8CP3RHAJexLybeyzy",
  "key27": "286WCyZMFrs6Qg3D8cRzEW5rsWhQiRUniJ6mggY4VyAbkPFzQ4ZbdKSCPxmZLY5UvbBTmHuuHow3Ls5EHRXFZMW3",
  "key28": "21Gp3aobSF2CbNLp7w4kwSTLMZ9EyRjRJFrAzrezbsV2ykg97UV7vwub5K5QZjP1i2cYJJFeCtURAW3aemsQwdHv",
  "key29": "4UWh5zYkXxTuGNWL3BHzVoZKA5ypiBuxrW5VNkU5rrxZL3yqbYqEejP6VeX7xVqdA1KbK9LgEoatrwBXoxJkLzH6",
  "key30": "31aNf6qmmdvje3Kyy2R6St4p6yNEZLt8bWbgPdvA67aeGeHHyEWx9XAdjdy1giNrh7PdHiuoBCZ8NVXF3KTqU9r1",
  "key31": "5icpjbdjdMR4g2veiBegqvbRjvhNBVUcEBiyaA9cj8ssw1x2RJzkjWF3s9T2maA4pt2rkjnNfJpaN8MV2GJP7ZL9",
  "key32": "45F4cE4FWwKwyAR38omuNr21TnSsAyn1VsxxSYnhxonu1d15ubYwTsX3M3omH7oYD7phJ4FHhGN3GjppQDrEMrkN",
  "key33": "2uNy6i4mwn36djJ4XcHDkmW2szrzVycdGNYQNydtyYu8k8sknTcbyqDT7RNpq2a1WoFwLhcJQDxUXatVY5fDwrSf",
  "key34": "2wq76Pwyaqmf3Cf5hgsmZ2fZ1L4DLfRupCZxJ5YGQDvv2L3Fy5wzL2RMYS5GqqDcyEndzquvLP34CXoxggnh3J8n",
  "key35": "4i47epu9uozjNQrJQcKjUhJPcxNj3tvRe6o7gM1QoMRRz8Hk64agneLPptGW43nsuAsSABSBdFKG42jZytRiEqv2",
  "key36": "mgbQnJE7FfQj2GM4q3NmyUVBHGjKrvuD7WsPPSeo2cFVfiVHQtPgzEmpRngDb8YPkUogzZapzohQ4kAgjNkRwnq",
  "key37": "4WwgwkM8vycma2w1RwzB5pX7qvijhnMvngqnJnndEbcyodHLXgJEV6KrGZB4Kp26u4eHZ5UPrz3qhUQqqmEuZaRY",
  "key38": "4g9yQ3PYL4wRERx7d8oZdtbeZdj7mvhzpGBpEG7BLR2RRG3ycfaN4VAPSWmKVquvFurGoScmX53ejexPg5Au6mLz",
  "key39": "3UgDZULnUZ8SmMyWxQVtQsAV3jHbF2VZ6jJjduFsCq8HQMEDM6qB2gZZ5mw3sHYZ6SvcnnEq1G1XMkZonV5CB3Uh",
  "key40": "5zLXpZ9En2HdVGPvQaUbKPpif2wqz7iazKxjGySzsJ2UHwzP5s1USEKSjq9LX7hkZgcEg6Dg8pVBE26CnaQBo6uZ",
  "key41": "25FN6oLUhcr9yRqWBLEDMPS6PRg6Xf3W9c2EvGoKkZQS6uH4ndCyFaUuraSTEU8cgEbR3cThRazrBWJs4SZdy25A",
  "key42": "3SGMGY6kKvCQGRFpPAR5rq4PtdawPPbm1Gqe8bF3uirtWPhLLyFuhVr28vqwc8Af3q8kka86EAhUE39kinyiMJu4",
  "key43": "23MLw764e1SKXrR7w6H2srYW48B8EuwbGe7byTG2XpL1sbSLMNF7WvwuHqgh7ehaJLE9QwAstb6ZFEGbjyrADcLg",
  "key44": "2Ab9RubhCWwFnXrWebTkME9hYS3FvLSocqwjwMjm5W4otshqs8BYU9Z9bzXh8axwNN7cg6zYURKM4hr8t71EEiTT",
  "key45": "4omgQP36RhL69S22mjYHVRFKuKbLMnacYDdAVTEous7EiyMCZKgG46eJDpjCcKr5appux76zHd8YNgw2AtwrZxbn",
  "key46": "422z4LPPeXXdJPA1qN229XZbKf5RVsHWBndoXKDSg7zxPzE1CgC8e3UChcbfK3HM3VBQaFm5FH8i8hh76ENLaw2B",
  "key47": "4q5vg4yLTzb5p2XKL936KnspkoRTdrTazhLFRtYWdTyAWetBvntPdQzSiAdr5nPSK7d6S3j1HrvAmGxtfMPjk5Bn",
  "key48": "5GwxjsezkLBpKv7V6CqpbRnQsByiUF2zUCP9DpkgfAzGMKucJqRuC9kZF7VAL5rZcNwav3boicaG3iikiZcNKePn"
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
