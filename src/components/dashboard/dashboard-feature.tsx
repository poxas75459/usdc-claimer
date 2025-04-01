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
    "wmPwqPx8EnmhJj2LstCW9ZNNtdZmvtk6MZya8LrLUHDcBmZrpGSzbDDYhPzQTNuN32spjbPMpBKWLjSJqtjATr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qLyPB5cTnWEs183dsjUBGspBc2WfdL2PRzQ9X83ch7DnSGVCX4mJSXwLj5txSVApm6rSysvCUWGeyxXYiwE4nom",
  "key1": "3cE9t1cokzSnrGu6dpPYqMgAtUWxj5XP844vFgFShVnoy25fhGh1Wbbrg9EsEREgiJ27oxS7QhVujrebHW4x3cjn",
  "key2": "2Uw73qr6N8pHzWf5N7z2NAcJTCgJcU4ZziDA45dRA2gJ2eEW1TxoxvF3nR3FujFMzafJTiaVpBDMSPbipTi1MuHD",
  "key3": "cyaPSQzVUh9XLpSvYFVh63eS2Vuq6WxJeGD16CBhUw4Agmdi3rfM21AVu5KcvHFMDKczSbr6VFoBnNLbCqDjutX",
  "key4": "2ckuMG539sb2yr3GtMdEYLdbrL33UGSSDsSBPruiYbfXG9N8QZEyqDbeuXSzXLEeDe8QGMPjxDWTmwnUkvk12xDU",
  "key5": "2S5vbLKBBrPQmsb9LpS5QBE5JqcnVmTxJbo4tW4SXoecu8LWwU2rhiwndeytQtyaz8R7zeEa6vTv74AuXUjfZUWE",
  "key6": "4RZj3iRiN29Pi4HwJqYJiAM2xSvUrYrzKjENyLzpZsPjQHYedjbojaugGL526kiQNdnHpT2etsexThKTKM8SR1y4",
  "key7": "36Kjzs3BLaVFbjHy8Bha1cNit51voLVjoe461xRnraWuyxpeeLQbpeCBYVKjo6kBoq7RSjG7rgkRQW71mJRjkU3D",
  "key8": "2bZS2YPou35R6b5tnLGb97ugUdduQg6VBTDKxyYt7ZMtRpUm9ARtENVPTpHKsveWsoKY1MA4kcKWyZfNeSEdMHVY",
  "key9": "2ZNb3Gk9TSMaLbTu1JPsXQvoYhwdjNZSaP2UFeL41P2hDe1qMNTDrnTSkeUeGpb6aQpPWUznfZqxiMySujJgfKxc",
  "key10": "4bN5MG8mNinQewW5SpLupu3t8m6uKfj6BdrFaL73vAJJiHJxG2JCcE5zTeGKet5eoJMe7kSP19xSmQU8bE49qzS7",
  "key11": "4ZH6j7YavzupJFtMfgCG5t65h3KDXopKxuZ1VMBR11qbC5BgoY4Js4qVx367KqY6BTCnFo5jmsFEhXkB12hACT6z",
  "key12": "49NMUuecLhFNw2owDzs2JSWkutcWYLBfcZm6Z9anLzgC4LUCEYtPo6fEcxKYHvnT4E1k7KEcKQutWMrf5tGsAK5b",
  "key13": "5TDZLx89tDKmAMQzKqnSPYUSR3vZ4N7vVvajgLxRmjbFRPNuZNEThJEX377JkZwrTtW4kDBqBbukVvTTBryzEJJQ",
  "key14": "4emXM66KAU5PSfug4m1XQKhqB2Dmopu6Eozca1cHqdkQcQhAY6oVEiZgP9dtjzq5erfHShzFmaAA8XimPVGCGxTZ",
  "key15": "2nJoWKPuFXo5JD8iW7zUn2yJYAWPUjQXJXNYQ6sv48DkPdE9wpVuJ6BNvCFemm4KW9STNQK1YUFZgSgtrHn15fs7",
  "key16": "2FqBmpkf6FbkpdpXDZchdnn4CzXaxEeM4DUpA5athNHMtVxqbxG76vMfH4NnyLn9LNsRybQMdUuqE55Dta1Y86AM",
  "key17": "4CtWNoG8rnMbgCuMYGnRNC8wyVe49o6dxJQjEFXwNyzhHcoDnnR1Ahevms9vthgNPUJfmaqwaKH2Cjr1Q4xQX2pq",
  "key18": "22oxGwDpjTbskCfmS9ANqC6sFnFMdaTS9zHBJufx5U7xry9NdRpYh5TD2t23gG34fHz7u2cnsydfsvmbUGPZvMoc",
  "key19": "rMRyoBYvb1YHc5o1XsW4oeUosUj7jxnDRDqg7EKKrUSZNt5BVCQVfJiJWUoBJesBzoJFTQSS7yhfgWQjV7GwrTZ",
  "key20": "DiUjTM34tEAqcjdAyqMutLADaUKA25VZDctUPadHVzBwyzmFsEqiiSjfGQr2Wxy11ZBFJtvgvCMZ57c9FUyqGgh",
  "key21": "4tTec4Ttcmn4iT93XTAEBVhVmNuuMj43HccxVGMvcDpHcCdrcHYowrRZFNvNiVgAnmfUNkRsqWx2pKAmQVaFEWkB",
  "key22": "5qutLFcVw3fUkiZnTCCRjNCLirQxWgu3nsCsdA5q259SQhyZHBtaVBK9gCPoG5jpJzNjnUgjBzFXEMp6H8sSUAb3",
  "key23": "L4nWZgJEKuUWp1tzLCRahMnmkbgQCyNM5iLCYSCiZnx7AP4ukUJ6sXAwWqw7crJJ9DW1zMn1esNxoRHQ5hFMS8i",
  "key24": "5E3MrVU6HAFCHFzKVdHTZ3E1pisz7NKS4rZF8Kd2y2KAJfpttduT7pGBqsPa5XUCQRijzdnUPZygJCyWh1JxYVtt",
  "key25": "648vNZKtKGJfvMoQLdxML51WkiTKj6E4bgFTjEmEeS4tjBTsvyiP8X1s2m132UPb878ZJNt8hH1ypsojg5sHqA1o",
  "key26": "2hgNyuG7JBmgt778p8115Kf5MY3hhr7fKEwQ1gaYyGLyeFa8LGuPVF2MAtA1Bth4BV9RgEzLn1pyTxr2MwTEphVZ",
  "key27": "5CzeES2pUV9oQ7hTFVpWa4ZfQp9DZcWqYqxamJyD2LdHqwxRY8TmVq57SDrPDzHY3hVePcbYYH7NuV1EHXL5PzRu",
  "key28": "3xqKA14kAHDvyZSD6w4Bpj66vz6FDP2GQuyTnyUxwowacsUZRP7V8eSda16Yx16FJFRG2oFcAJawMvxifGih5i5j",
  "key29": "2HGzDRqmEXUgvvbrTUXYvpeHUqzsQ8KAoBbcLMzF79LVDJq5Uc5QedTuRL4ufmpptxoyW1Qmw4Af6TKRYT8PgqJQ",
  "key30": "yZB6XSW1wNbgZgftQ4XBWW5AGK5gaGsDvG2rPgrr1UhpPCGmYMbHahSnBGUVYjKkSP1rMPMtPVBs8S6qYwMiVUY",
  "key31": "3iyXdjMLjfC2BR3XfkfxnUeNUcwKMxRzsZrvNHudboC6t8WVDjJ7KuSPeGhjqgy74GZFct4no6nMZBT3NGih33xK"
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
