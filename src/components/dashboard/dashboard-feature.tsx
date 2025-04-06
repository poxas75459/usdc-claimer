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
    "3v59tWepA8o7occ6C48m1bytWgbFmRMUHAjwz4ywtcASV2BpU2dudzVcthpooNdJr2AMfCzXm1GCaiuVq1GYL8ec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yscd7C5fboJKgq6nWNS8TyJpZttCLz1YcHT1jJMpJUXwsRqJ47kWBLwjTLaNWTzLfUCKR7bERn5VQVvcaPvEbxy",
  "key1": "5yc69fEqGxEXdPG1KfMVBYV9TqRN4X1TLcaoPgCRtJzt9NHDVpitJxhg3g2oAQcJghsg8LmxbuC14U5y31QMUKTa",
  "key2": "2k6BBRXb2PbZExTTwfB9x3aVhV37yvitrDdCAmSPgAocyjAsM5ANHceDZ4jUnN8LZbvxioj8RVFGERB84wyHuWT1",
  "key3": "4ExFpiB9dk1hkSTXqfckYMVr989fEaWqqHxdduZKizgVLd23vcaVZo9wyBnXxz7EFZvMXEqUmmM45AHBDXxPbzAs",
  "key4": "oTpHAci7KJNuAovvyLJyGHSx96WaHgCZuKyPSZf3Hceb78hNqtFSF1hMfPfiLJr3yrazz93pVtGaoRPpFLg5tm7",
  "key5": "3EEhMCdjXPSGy3QYBQshmw3XDi4DGRbhWatYAp9AeQgsXpkebuaoLmH9LvGKNBw3qCs2Bvg45RrLXkUkrbHtJZru",
  "key6": "5xcqJwTQPCnTHp7wtvSxkPtDZRXaRqxzx8zwVnbEGp8FUGTrt9i2VKopBpZB98RYYwiCerWR8Q15KrASTXX6m8NY",
  "key7": "4Phj8PqrC1raubrANw6ZKgt4jEBe9jV487zut63Up9o5RSw7zU5njjNDSr7eDy93bpUNtfdaTrAckkWTYHw3E7db",
  "key8": "4KLaogk6gvVNZQzzUhjHoKWtLBtQTote77DMH4JrYa1jHYYNuNGoAUp12hdA93K5M2HiyL7dGrs7x9SwjEK1jfLE",
  "key9": "EoaXn5JsujiJawjpcKCuwoQgb4Xh7yjtR4PVsmBRFqugsbDNQiYnHw7FfhcPYrhRZ1Rnamy9jgMWNHnZnnRtMd6",
  "key10": "3vthT346ciZKN2GfJ5qh5xK1S4KSNUJeKvkF8JydWC1qMSycijq4w21Gfn93YA4voQp7exgwsmvx3hQRuXzbXXSz",
  "key11": "YfbfoZqUMivAZ2Y6qvhHAuep4Rz4ceHWhLEWzeR4xAzWL4dxY8evWYyDBjfPcUAirMFp4D7JVKT8QX8MjBMz6G5",
  "key12": "4K2FJrHkWWKtusfo9KhSMNx3bFPF3rN2mX8AmMFAhm4nxYY2Rv5FnPxcjyB914bh3Dwwo4nG1KaxSCHsy6NzfDw8",
  "key13": "5PShSpbJVNnajx88Gi38yU5Gs8ErcjvW3zPRWuyBBHpsvH8cuPWEW9YgjyG33K1F3zMGpj3U84S5kbNFH7FgnxCR",
  "key14": "4YSFSM9PqCEgkGdB5coPbeJ46jw6151qLpgquoYDNNb2jmfYxojLguQeHG35bhvdzaxeJZUJLeWZUYM8FArVNaaq",
  "key15": "5aQMfBwErfJ4BudERJoGwnxNrs6t2b9pcWKjeLyUWCgfHmNCA1vqji58ovqxbWaZbwdybaV8Z7z15Uutjvv59Abu",
  "key16": "4XFMAr2WzdC54AjsbmjN4AxgE6AoCErTmY78vadWmZVHr19TZSiR3DcFwLmZNHb6zqueyRwx2yAkCMi2PRGYPTpQ",
  "key17": "2K9NTJV38ma3Ue3kpi99cRN6GjeLvRjcoTz4Q6VjqVzik2JJev5W7wAPeJzdHZUM2RzuwHp652hYEAvezFgcHo8H",
  "key18": "5eNvn4nsm49tAntRJxcfQwQXu1gu7Vsaojia7DycwzoqrXWnZw8V9iYvLQsKCN5pNZMskaVswSJFbjccMKSs5c7e",
  "key19": "3SENRFaNoGmye1ET5hr5AdWWzfkccBXiRr3w9kQ7jbUFB3P5parePAx83VukAb4dnXj4FHizYa9NtrSyBwjkvvtZ",
  "key20": "9fLib1r4AubppcwkDehVN4MsicoYpi5He39fBskSPJCmrG4ATBobrFZo36DdnjvxojwX9CJsXyjLJSZ3y8YEey5",
  "key21": "36uWtY2CTx6w7suhmfnNTK1mM49RTpie7zdwXa42RbShVqKbHXeAJ6oAafX1M7W9BHHktRgYWajMLUckpdGa6sum",
  "key22": "4oKdKiHX59SkcpGVX8bEcaPUkcegxmmtfQMDkYAWQcaWtTP55ZzskBYA6UFuUQD7EzTghCwXaxo9vFazJKANe7WN",
  "key23": "39avg4uGaYJiB3iFuHEm9ghvvFo6ekDmX2Zpo6NthuoatLfUAmzZ9oSvwSyiBCZDzjswrTevKoLuHVxBYJK6Yq5",
  "key24": "Gj7r7R4kxZ2pyYsyPEn6aJvsExrXay9A8jPQG1VZXHJqFcLWLPoyn9PGBfPBb6KhmuBo9t65ahbpKk5jq8cXrAL",
  "key25": "5PYvdqtKDYKRUfingS8xBVkGjCfEeG9wsZBorbhdB8ghnQN3NPouHSqsAz4tRL61FmPz7zwLXnCmmQdK5n1zGXjS",
  "key26": "3x4vWg9yP6xKbLq3ejmas147QCorukgwUXhZdg3NBHko8tiNvJsWKgZMu32roPDJuwh7ZywSM3ttEEFSttfo3VzL"
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
