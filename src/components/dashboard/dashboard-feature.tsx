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
    "3vqzx8i2We3jirAKzVJ2CigDkaKkffWkvzRiSTMekoxbNxamfc3oZ6TVp3PQQ2DDTtDPzcNXXkbW44QLadn9RaSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YwZtLKCBMcrHpkqhammo2QMqQ49dd1oHTzw8oeXWHvzgMFAxayqPKcV4T2rHMJZRa8jkrNBHDo29PTHNRUbtvac",
  "key1": "2Ed16JiVcmp4LJoqDXdbQT3LRDW4yGW9dUFZJ4Uysah1DvEnfaLVQc8ZBrdPXXJNjoRjZZ68XbU4NoTYNnyTRkq4",
  "key2": "2aNeJbhTfmd7BAG3bLUjdnmdkQqFfxR1HNJW7n36BScVZQQAsak69kDCH9aWR6MSA7Q8Js7hmiaqpExTt2jruseS",
  "key3": "jJ4gjm2QgjNoRz2YRqbbwd19BwjnebuLdvkTqpSYnDa4Eh4ePo6gLtDuegMMhpJSBVjnYFMAxCwuEXEVU3Xu4Ey",
  "key4": "2z8ZpirzhkPgEFthcn5xGHcsQ2aGP7WHPsFwijN9czEgnuWeZ6zKTLigE5bbLQvThuwcR6peJxCozw1m1U3jwU5i",
  "key5": "4GGHD9PHd1PAbJjjcL5PSw3DSNyvSCKWxTjoWAyY2TYqyCgiB3AAbJFRGwLcRDFhqUqrVm8136e3ULjmd8vqVbUe",
  "key6": "299FHeimyJgfcSoXYZZwEQLwkGHebiZjrQ2qtRfpSczsUMbE7RwCzf8agesgoAG6poncAV6sV4pMAuhfkZ5FxiUC",
  "key7": "PLVniaXF4eCDsfKJMjVhjGYjC9gB6Rpz1wKRwg9p3qbUyQtxD5BRdJ2kX9bwnDeeBk8SzGzfZz7bY53CmoHwdUs",
  "key8": "3WaaxHBkDk4a6nS1eKiC3aJ1Yig4AmTY55j2RccB74HoTVYE1L9V8irqLeodsoUk2WPi1TJFZm2J5Qrf3fiJHEd8",
  "key9": "5rcy71FQ8bA34LmuiiPtz55HGQ3qLxBmocfyKyaTkG1KdznkxdcZkQ3Tr1hPGTZbmyCzZjKbDAeQuKeZiHvehiVT",
  "key10": "2G2ruPRTDuzRmUrmWt3Wh6AyFrhrTPnT775W5MvjQnUQJfT1njSVxNQvfZPesqn8rWo5oXH1bZB1bt6nvV2evhX1",
  "key11": "4idLcWimdeHMEeSpS5zj9mL9HfDUhubC68AjqdQU2DPs74ytcpj4qyPbpgMGyU3yJFY9nbniocuEm4Vgpy5LoG4H",
  "key12": "p2aBrBwP9Lv4Y1HM1uyMtv5rZEZmQywjYJpHDFxRzUKJCGz6VJGyy4Hvmfbz2iZ1VqfUTCZ7jZMpAZLW6cA7gpK",
  "key13": "5YnCjhX7qPrW7YMpzdXDzupwefhfpEM8Q1r88RKtCkZXL25XKsQmRHzhh5fcbXQsuq2HgR41G7dZ49mwjJ1978un",
  "key14": "3KVStiJfKfAZvxU1Vjpwox6XBdsqrQmUcdF4oNU8xQAGPTzC4Gz9oDtVV1AQ1oBEfWio38QGF1KJKUqEMGqgokUR",
  "key15": "47XRywCS2XCWzyueEQawnGoJTq5gmTk7jguZXuUADMhyMoYJNDxnzZ1Amk1jUo6pzN63Wey2oTGY2XeXvaaqdyvi",
  "key16": "2py7t4GQjmyDkdbEMdLhc2RCF8RWzzQDK9BiKArxH11VaTksnnEw3s8KxPYFabLHmxDD45wuP2BkcKREUZF9WuiN",
  "key17": "34G1s2yJtVpqPjyCw5QtNBHX4GThSiNaDwLVpoM1W2SsFVdex2LujhbxnKow6XHbMyYjy4uAwdfHGjLK9XHZUoYr",
  "key18": "4VdT6T72rGGV73HbjE2jUiCb8KMjP8fUGMpjWCw9ZJJrBFB52cF6HaHp3xhTjgmqUGjzNbo6VagJh56Ymk8oT4Tk",
  "key19": "2ePjn8mAMatevMG81SCUEEUFk6K7izEVYphX7jBynfVfEmH7LfpmsRsci5gEz6WcAxGL8LdYhHKSCtpUauGJfjvH",
  "key20": "EonZp67Zn2rpPNyxayfieCMPJBhDMuvFgvNpRek3W4sog9FhhE39PEiQjeA3upb26YZRKSz3WsGiTLbAJz9o1rX",
  "key21": "5BHF4a6w56qRNYyNeQtgfTv3ZjQqXEyQdr43PnquFad1qEAdUQRHBmVrB54RBkYi7PzkMGoaAUEPhNc1SCToNWsc",
  "key22": "7hbuDH3DznYUubuxbQGs37N53nnVkxkCP613NtKNLvgrdDb3R6NN26wLV3djbArT62NcuftwZiGHKZtVwYzHd6W",
  "key23": "6HJboTKn4ik2ZtSaL3rNR7176iHT3rkN4zwLWVTdJ1hGUTLbg1jBVycbYiFb4FqeFFtd13AZT9i6HnRmeHQKU7W",
  "key24": "4ZKZ4sddS3z6sV9DAhb8SjD6gNJHi1RtXK87gXvxYwnCNdbMg9dGAenTno4EKd2PWpfVf7Vo8t6wc7WcQnPK9RmJ",
  "key25": "3EpqorN7vZSQ7J1GmeUXJ9HS4Y5LH8euUJc6hGuRpEwFfjA9rPBtkTp1FZx6iVQ2qhmf5S7f6xpFEwwNCN1SXRtG",
  "key26": "3qhXdTRcDnoLvgibSfLNWVGmecuPSdkPuimujCKereLCuXn2B8M3enMbnyyXNVF9rFm13x7YfmC7ktMrNf5tNmnS",
  "key27": "2mixo5p2VwT1UBzMvQUiV6ZzBVBFL6veA5VKz7FN4GzgWxGekX4k2GwDrub9akep12wuM6AtLfkcXDAH8PNTXVAF",
  "key28": "5eNaYtvxJam1S69n8fjCioPpBjGK91fFALxVNxJ4NaEwJbvtXWxirdcNY5GRZJSmWU6izm4ezRheAEayBTKMqFz6",
  "key29": "3r3TngQbVhaA68DLrCSZRDqvkSNvGdaYPv1TkdherkUHHiifSMTDPFRXiZwGiPnZi98KfsyufnW52bdgZ3AdfmWT",
  "key30": "EL24GoZ3hjVy3X24ZP5PBtPAfGE6qXgbXT2RiWc7CDsq1tu43WA47XS43eWNenPyvZnL5WLdtVqaxUDZh4pGXgR",
  "key31": "3eVqhxtacud25tmntPMBjFzZRab44EuhAZpoNxkDNjuzvbKbWVaZ3tM7AcgGeEYUpUw3K26isD5sgSHce9g6qgNc"
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
