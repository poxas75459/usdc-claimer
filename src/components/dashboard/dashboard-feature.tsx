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
    "3AQ8TEns6mZoySF7uV721q6AhDuFP8db9gXFZLh41MKeXBFV5KEy64EDkWG9ucpQUPqb5MAyTfFcLd54THipG2xQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xo6mnLLzhA247TjUsXPTYg1jUdsNQTJPEs1DHig1txSc7d47DxvfAhGK6ZDdNzGzGjKnvdhYcgKJRDLaRN9B6i",
  "key1": "4Snm8cPhmZc9JpgJMbc3ab1Wz6vFCx6i3jHX4rZ3seMPagaG9eaeVEH9tU4G2vdQiWHeuxCA53hmoXiNRqTXTpVc",
  "key2": "5E54W9JzJaKM33dyePmaUzzy6UPVQAKs8qn1DjEhAe54HJ9sjCGFwA3YS2zTtiFfJNUtomzqoEfEbif1fdu72P5k",
  "key3": "5G4XxGD3BVfKoUJY54Ew52QspjZ7cS9WMgvKXcpYEERitK4VNLTMkQSFrGK6oXZyQETkrcdDj5Y15c28RfSTgdWP",
  "key4": "4h6cxJQRYzZEpGSrXSSRGS7EYw7gjFHQsAcY9ut3oGr4vqhRCtNuYDySjG4Wja9CkDYLxCnV9vsCPScSwFjSS4JN",
  "key5": "7s5CKC84LjsaRfJFDQeEcX5rA5xnESov4bD3jpA44PPhTNXRH3Mq3cKUt7ZQN3pafYWzijBpmZE8ZQYFgchqmaq",
  "key6": "Vez5p14N1bYLM6Eis4Yd8bkwvSTreR1754m1FUd8MReogF2viNEoLxbqDcabYQNwek63dSBEBE9xFTkZ3SynNRX",
  "key7": "4b4do7zFB26dqxZNiYXbeUddQNKcfPtuMxZXpy1qY3Qp78atiywZ8NcyHUG1R7Y4uBobdqQziEHB4wQaAnL7r9Pw",
  "key8": "5Jq2URwcExwaoukfpcDdTHd6Dk339Xmf5YB15L5qn98QWNvvnb7PXvWZvJj4psyr65k3Gsd2LNmmYkjpumZ4onL",
  "key9": "2af6VzDAqokNeqEfoN7eLMzims1CmDS8KDDr4pfURyRGHmRM3FVQwigLFWS91hfk6msDEYjARKov3rueA3EVzMkC",
  "key10": "wyfLFiRRhrXeCLY4Vpv8QWbwRgfYE2ZqXyQmVfcnogFMZG9gsrkxkyPGcDuLYjoNPpR8V7QPKNqgswwxD7DPUvR",
  "key11": "2APC7QJS98JznRc7C5qDvRJ2GfTkoMf46KaSPQZaVoWWzZ7TCjcuXoYPqBUpGU7cGVu4ck8QGvVDBqGu4GpPBMrW",
  "key12": "5r3Viu7DWqzp35TFFuDWhcCQz7GRSnDuByeKR7AZVk45DQSM6nmsKThA2bFdefQ5EahtcrBmxrAvCMS4wmx2nwYV",
  "key13": "3k5NDy3CYMBgAuTFck4KRQrsP6M5JPN9ZzvLtRCLa2ysCSkCqFd43womticdWRMkHjouD1bA88zx6ovtxGjZSk4j",
  "key14": "5Upfxo5pcKP3Vf9PBbbMWmP1d9PNNoXXDsxMksa7SrbAcUfkqjixR77SEKPo6jgur3hFve4izXMXoH23Nuxf8H9d",
  "key15": "cq65JbkYGRQhKBmkeLze1ZuphoiXDL7SXSoHRn8Gq3MbJowjGdy7CpiP58crrvEMrF12QfRisP3kKRWH9zoN4cq",
  "key16": "2yWV1PTjFgTz1NKrUPSR3c3oSMe9q3GvGrtorJx7zWx3Y8MzRrt3um5GuNBca5JSWA988vrxXoBFZrW64GDwZZ4R",
  "key17": "29WpawCXgVp6cQT21BMBBcFqoak51sjVpabkNccAB7yYmpB3ueCduPLv1dUqNHNeK5gM4h5CADgMAsGhERjViQGX",
  "key18": "5xj9f56Sd2xpgY9TgssH3y9HwxPnCoDVZQHJe448Ax9ZUQ5soc5ThdAwQvMLHaJHoo6dmDY3cUewYbom6pCFCnit",
  "key19": "gS8z3DrLaWv8wHB12KqGvXLgJ2ENYmT5AR9PBjnkN7dA6Wa4J3L9cDdyfMWvFMDB8CnW2ssQZtcEvNUE4hM3CYJ",
  "key20": "UkENE1wLXPPqE3dVBntpenptm4jdwViwzjazdsem6bGm5Zsmmgiw6Z8YHQULNcc9ERZEQPPWSPgF44SooPasAQb",
  "key21": "3KebJGdaeMSmULZCusdKLw1vuE5M7isaMeVtTW9ZHws8Py3w57tqNFhnXodwqvnDEUwsU5F7Kh5Ta8cLPzTuAG2",
  "key22": "5fZSuwZcYG4r8wAEZ3ESyDnmtL28kEv3SbKNiJmmYp3TYM39v2pmq9EMaYdsEd4hs4q62mhYFjVAt2C5YnwqL9WG",
  "key23": "3P57BRWcHWUWeyDS9T2p1bXtn9DkqzM5F6wsHuUE2XFduTS2uhLEZcgmxH6NTLqHs4XpQrXhnBJz3aLridUDeGtb",
  "key24": "4JcL7ytLtqxJxoVoH5SmjHdf2JKJZDsAedfjqDAnyamrniWiVrGtr7ZQbEN5oe1pSBLL7guCycAPKccw8SDbR3nL",
  "key25": "3keMLvc1QDKDQvBbm7um8s8dj7GmVQSA4coNVQzKCvNJ7tZBu7FzAWNxZhTAJGrofMBEx7TP1TCMX9qxnrjLYz2c",
  "key26": "2DcwDRtx8piuvuaBG6vs43mndp7n5Zet3TviN2xzwTDYhvZLY8CaxoWibGxroz1ehP6xR3VvCn3EqbaBasaTuiXP",
  "key27": "33ym8v2jjvteXbDpkHy8moXh93pzLFMV3vaSoLBuH1d32sNcjZPXZFoNNRgCb4VCiDorxpoWdvwcsxxuKVGrXvYu",
  "key28": "3qoZnojbAMf75LBEh2PHmuZrAL6vu7akcacvagaXPmrrGhLNyZhFRh7kuZqk1T8EkBPGvuVRWbjeb5Hq8z7Hsjig",
  "key29": "2ySKJfmhWxa91NuqRm7c78WTYv4sffTzdTsjj1ShGPN9xfdfLMSqNnGuYPu8qLJ9m45nngshgeyoEFYCKBtDjC8a",
  "key30": "2wEYTXgjj2W5x7DeQgHUtkFjXUUZVebtXgN9zzSY1k92aaym46NxSQU3Y45PEoTu12XV2qUQzH6eikgNbBcx9gr",
  "key31": "2nCX2711NisQ3YCR6KPGMfNugLcL26vnETU5jvfhCsypGe4XQQWhk7rB2No3okJ8BJux7dibCyyxCWc8oxSA4w69"
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
