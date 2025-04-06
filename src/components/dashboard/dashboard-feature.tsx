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
    "1x5iH6aZrYoarKe96d952W9WKxnkRQU4h5LPH6EmK9Sh4gE5vxc8DRGpoaEswTtSn3CsML9T8WntWGha7PYJEZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sRFSLMuSK7d3T144EZdnpDerj9zhMGFsfbkM3cRCB6bviQxqYo9XaM6sn1t3hBfoWiEougDBGQUaPTCSdaPFQ8J",
  "key1": "2ANhdJxvUFhYXZqNNnkAM86piPy6Pp33PJzDoWotVHR6mZEApKEgjaNbK6vyL5zWvp6iTrTdGeFF2NHW4JHRq854",
  "key2": "3sA6tNgKsma7Uo4pwKgwGUYMJaTzq5mxAwXtRKz7424757CiGAurmvnoW5bPinspXdtbptSVc3seqd93KeU6gadT",
  "key3": "4NVvcyzGeQ3LvRwENhDZWEaj4R25DLwcWy6oGiKvdLzi1egKQfPjNashQxzQogV2GrgsXfLVkVfPYXUwYhkiejq7",
  "key4": "3CFa1cxwM8xC1cH2d6Wh9MEquijxify7yaJ5CNrKgWvpXXqiwEtunL4qCJ8KECEtaECzqT4RjkDR4h5AhU9UUSh3",
  "key5": "h3AVRrE8Dd55qQo1cxVmWuLeuX7jip6fvnmvropXL7DSyVJqKcwmya7B8usayoYQaem6GUPQgcAqiJZf7byJj1v",
  "key6": "ySZYQ7y5KbYQdxhbHe4qLoZmuH2dMLRPaAj6RAkY29yN4PXJiJqXThDGpkJ2vcc4NpDPZbGJnxyy9qYS9B2Jeg9",
  "key7": "2E719Nudo7EMG2DmWYSb8rg3WRUozVgtGpDEJyHhbSxAnY6GmA6i6vH93qvSxaNKFatTQ9FCrzg9rYkYujFAhPps",
  "key8": "5pm3bc8L4PFN694eDD1zcn2egYMibMHDtvVqXVzzyex7tEmtussaLBuDhGEu286VFyqwESzfV4YB9P71YiWPCfcv",
  "key9": "3FMdMJb1p2xV27zD1nGQKKgzVzsVmc8zhkCo4iw21oDATrDSzLXvsRwgP2VJZ4qsvJG1m5vZFBUbKP91QrJk8h4p",
  "key10": "4cadS4sWbbnnho8XifxRweCwgALsD8ZG21fKmQ2fjzwCKqefscqsBHU4nLxi3ZBAA7po6FvpJUcdYZs2Mc3ZoH2s",
  "key11": "55bdBPoRJPCwqnvDA2u3caU8JY9VPeN36HHePtq7NoYNMBzoP3QG3chtHWnG71DzpERpWensydJtxmbSj5zPkvyf",
  "key12": "2V8T9g61TnGofbNkGit7br9uAu1NmrTgqHj6EDnX5JtEBUcdL9FQ3zZEZytJ873qgaYmNsjBUp3ePyd9e6tJVU1",
  "key13": "3Ae9zTnt8q7ypQRULgFU17jnjVQz8MifrPsC9ra5KpNR75YDNgH5HJN3CJxWwqD9R9jtgN2vPBnS43rhSBJ5av5R",
  "key14": "FgPFQG3SJqRmHy4deQ3tvU2BbspqUpoZP3rwFo9sPGw9f5du1UCVVETebC9Te1mxqZaegXTMeN1WG5AFHvBUkVq",
  "key15": "2UUbqBtM4KYoSEn5aJ6EGLdHSgSDHsjtQSngyco9m9yCF2DVXQRHZ1gCSXyfWNKyWBeAxWPgpCx27Bu2HxmQ6Uhb",
  "key16": "3T1GvyBEYFdrUgZ7bqeKruNaS2BdmVzKbMfSYzKsUccUhZLbfJBUxgGdtLJ6VbYwTqduT2h6vmCowXfQ6S6FBtzs",
  "key17": "3KsL5Um855o85MEYLNgjixLzH7M1K7LNN9Jko4LnQBUd54dTbPjBuNqE3HUmcRBsKkJcqpvLUWVTTyZQNouUqag5",
  "key18": "4t3D7mpoKNVzfbFp2mULTqff5wyY3Xmiyd2Jqu4iiX6GknBECTpqgxF6VDoyffbUr3c6fcJs3xjiec4D5Y35pMSC",
  "key19": "BgHbYxMkr5f6Q6goZN4aHUWs2E1Xx6PBdqNaSgfdHzWFiWi5nCHcfG6Pe5EJ26NyuMQrFWMJPosztRtyQ1nT7qK",
  "key20": "4sc73XYjCFvzDeZKS74J5oVJfd65ewh6oLjQWKd7KrU2Bcz6EGXUWZAqAyvdT47VjmbUfTMCwGt2LaBNHJpi1AUo",
  "key21": "4YMTJ8vGSiXP55H7fAxwuovnREKMWAtkQe8j96e3xMdWjP3JNVZA9JWEXMT1nTRmD2v4t7c9K7nj36ET7g6tK79",
  "key22": "5NZGjrihb3FcTqRBjVF6ebkXvTpLJTh1gMbFYE8TgNEVEKN4BPWHcVFkaWi8qNYGUrfGc6jtjUjxUzWCSJA8yF8r",
  "key23": "2re5C3cNW59jAejTQ6N71UcNfDBidwvVTjoNdSJrQgetFMrQW144QeLhYnopNiSks3rtvj3gKtGYkgERGagxedCK",
  "key24": "4t6Xf61A8iLCLBJ9xgu8gwqic693aLmPqtqkFkWLDshGbCyJTaZKi6KcVgRuYLTh9ZVMViCGmwhubsgWiyzz8i8H",
  "key25": "371rzkJK38vHSMYpeH7DWXxja1zNtwUyjxXtoX3xgB1P8bGdUmDyuLkjqPJJsn9csqo2Pd986tbtcqYT2MCift5M",
  "key26": "MLRX1E5nKjyJwWpZS7LWZaTNMtvjRYCf34wQ3YpkmeFigaMkoGcuzYj4f9EAXRDbKcG33huY9rbjvgvDWoNTYYz",
  "key27": "NjqXrT3ZSDE3DxSQjokDbe5CmMWATPXDf2dzMusEAm9bwyFBdFc7dXyruQxbPHr9UbsHMzK5MuXGQk3166DW1pZ",
  "key28": "63AGHWAKNivUib8TyxCMT8nMpYPbSosi9Rns9pYy4i497kmJW1Bxab8bNnxs6CHBPkUXZXUdWzK1QUpxJP7ukN8k",
  "key29": "5jW8QAtoqVxHHs1X7bjacLUn1djRdoQrnsyWrAscuTsFx6kMdgQUWKjinUGYoft6igkpgaDt5pwkLFf1N2Lia9XL",
  "key30": "5nkrrZSTztvtmtSnifEzRneSaMa6S4G4q6MC8nUMEBiLpwdMQzDz9iknHwt5EtkuSbKMaMnozSaVAicDUvQ3FVAn",
  "key31": "5aUebucW1cP7HCxBtvdbRacH6KUWroK5HNksjmVhYm8r3pJ5ksYJ6DQ7fPPkZpwNDioAWNVCT6jLnJKNjJy2mt55",
  "key32": "5Vz28eWiZYdHMcZmZfpHQq8xFSQLXQuBEPAxw9mcs3tRSkYhMvLpyYyB686VsikztDTnJ2sFsqFwspaLv7VtPEmD",
  "key33": "3FWU47L8MvEga9rJtwWfVSgx4S5ycdhCjSCVNpyKj8KX6iidBnb5V3Axt4vcben6Ay6TYWTiLNKvjugaujVp1Vbt",
  "key34": "5ALs9bAVKiNHuk154kBvFuwqSY3sGtG1ETnVYYDpq9acSattEvJV6hW571CLowTrmfW1qv8N1xmnHMhpCie8DQaT"
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
