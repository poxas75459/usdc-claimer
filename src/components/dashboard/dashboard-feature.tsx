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
    "43qzu1RpzPnRuTDepQZ5HUQbobqU1hERhQLhvfHsBbwr5m7Xe9PLJ1TkMzLZRDi9cbrhQQ1LA1fMwnbZFJ97fhzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61A1bEToL22KfTgqXidb6RVKs355WgPpBkSdZ1WGgg5Sn3zAa8T21FZLzjosAw1EwCyRECqPLKQZraDYruJ3Fqc6",
  "key1": "5yuqTzB3rbBzARPXKyUxSAT46Qt2SraeySxF1GE2uJbmMAYgVkSjQ9Z32Jyaub7Vrs2pw8GEei84w98hJ9JbYCds",
  "key2": "2UM6kt22NG3yn2Dei7MAVfZnDuLt9BKtgs9coSLgC29v3VTPTJL8GUAVp2eXognn63A98HUvHjzvZrbagRrgVnEc",
  "key3": "2R4zusiV3VKkEkoZ3c3tLe6YPmWVnXz6NM7GwQXsJ7K1GsNVs8SRgeqVKHLHYnbERbK6N1K5XaeYSdRBTfTPKTfZ",
  "key4": "5pdpYFRSp7HMSPpZ353vrVo6qapV1SkYsT8ogunsBegYeM26MDaBFHK1CaqDoJADdAymovgZUc8tKhogFG7R5Pra",
  "key5": "HuFVHuaXepYoNGr7K5PpXSV4wy5CvHuP8kt6ZnzVKnEK4ho5m4sSMsoddQtdgb4NRF6JMCJ8FrpzDc7QELdSfkF",
  "key6": "5zU4qg1giJhYJqfucn3ZXo8xGJZyVjYJgwCgZAXjyYwWoSpwcAaLhUKvyFdmWwP2HXSmwCxdEDWCQBDHcHwe8vBG",
  "key7": "65gdEBZy2qtNn33Nisap5ZXyKBfcHekGrjZU14TuEyzmtFeXoDEj5daDeo9xuNLokgHZYCoJMntuxgXejuMaMKTe",
  "key8": "5vEtevEkpCp86LpawSdN9H8SyX9fZHVEfSpraZNFSx4dBtDMewpjetiXcngvejRusoMqmUjardVw18PJovCkKw7k",
  "key9": "5gEL1gWM9ByXEiwxx5PtYxy94amHvTs8N9mmnk24j1KMCRNvGseMWHez5vMS4mH4ed4eX2YGRcUNUeGmtGa3c7B8",
  "key10": "2ZS44mXeiUVyTuLNbPmYehpZu5jRAoB6mw8yvZyMuAm9PxCGVrRBHe82uWRxmnaTTGn8PHK247bLpS77DDxzdLUg",
  "key11": "2997pVyiXf45ZhnxAQZvLLJp3dgBBSTLxZWfdzZ4Bc4fgdBiStCuxVbBhrZdC7iqdnGBDDA96sH97m5L2Q5649dF",
  "key12": "5TuLx3epeh4kSX1b1RQQTwkjdLbeR3y3n2bchYXtGSDxM1qrbRhbJp2KgyN1zNNSHkRSYEDtVz1X2iADoHAAvvhS",
  "key13": "4RW3Cpk4Ht2PGfR1TUDNrDuGUMkZRKXHYmTAdL7gai4AudSKUGK8jCC55gyaRb5NmZeX1ABRrNUKKnLnD976aZ7r",
  "key14": "3XK14B8PLmqdkCapiPwFvc733uBdTAcWXC8j8UUCMXSMBXBrXursQaterY8vEmm95Fjf28jqzVeuQQBNa4H8usht",
  "key15": "5J1dhAjXs6pNSyHUXH2bSE25QYkyv8zLYAsEXXePsDWPN1aiGLQTgfKqqnwn5JCQmF5Ceisr6n9QS7aiqgzemtZV",
  "key16": "3XjWEiEP1hAh3TA8pyZcBDc6QMstZUrrGexsd8VCYM2psRnQGLUEMQxxDSRRuDktZcY9iSoYh3Uf4u4pnMexV994",
  "key17": "4Rg79wcLyj7x14LCQNkof1bn2yGYxtv8npVpKr9tZd3g9MKcNSaLFxTbPgi4varidhpeoNEFs3Jcw5Y8rS6zZ4BR",
  "key18": "5EeK9sMwcQtuV6KG5Y2W9pP3Tdpymvatg1s6vUSddk8sL41zDQiJPHSoVm4F1dmzZzJqVyz98mdZ5xNdSUebVfLC",
  "key19": "2NHLZtiqgTBsjpqqxQUBA1qYk4iea3BXvFxJma1y3TCpj2XnuPu4gGyZUgEjGnGeV3izDFXttSknTc9D4vghPi9q",
  "key20": "3dfa7wWaJKLJHkdN9tLsLF9Gmzm53pPgmuN5LceWwj4SP8caqq2NAVzWt3Qqq5dxrPjzSFQwCScs1KfRH2tLhxPy",
  "key21": "4uRwqnZ81mB5JmhrYhbEoE1YKFhsUpvqc1TgstWvRi3knfvCZtHTRo369cjQGJER1oTskbhuzh5hQV3PJux8wVGy",
  "key22": "3yhMY27QywJ9dnZys8iru4wxDovQr5JbvgEQAtrUje37ii1Z3ZRav26qTYrZzPTnG94jGCb45cusUKb1Ztbcc1Eb",
  "key23": "4DYfyMh2G3dDDGup4499rrGejerogJ2WFkcsyjRqmaNBSHmKhthK9h445xzhu2e7Hd6LRP3pjmk3YTxa8icK9Tef",
  "key24": "45MwS7czhGWvXS1rUKdwEiUw8Jw9qJCge7D7ACgCuKZrG9zojJRQZF5ThVwxo3X8pUVcCAjo16aRnwX7biz1swFU",
  "key25": "HzPCN7vskEvx4jyQy57ruPf9GcthKTyRyrwyV9xDtS1Fsrd2GfKrKL73YUa1VwHhyfCbmfmxwknttbFgjNhWdUE",
  "key26": "qYgrntsdQrKy2AQpiSPYUZNijyzRBRSo7gf6L3fyhiY4SP8uarGsPEBqMYyN57JqBS61iEVp9roQqTcAjb6c5dy",
  "key27": "DXZSHMDtfWBgzq3eBjpN2SRdDvKfZy7q4QHPCfhJmaSy3hbxDcw235oWu1YWZCy3SiEN7aApCv3LZjfRAuG8MRr"
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
