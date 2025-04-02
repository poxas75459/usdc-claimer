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
    "5jB28LbR8yBQ7sGYZXwsS4BUJLsaM1Tzbd4Z7m3J6q89rjyFogvpBz9mBuCw1ewz9oatLJRiqpyCA6ojohSXmGQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dj6XLsSpB1pQQWFjGsqoWwFMcBd1PVbnxxjXUyC6uTXgFy2PNHUag9j3iNdbCjBJvVNe16WdNY2JCmCSpRGWRa7",
  "key1": "4TZorvE33NvHWNceDYGPAshPeS5szGiTDMujBmwXyGrZg36yqwi7JvbDBpY2F62T2g2aWtjCSGowDfK7wEEikEZK",
  "key2": "icMo1LLEErB2zLF5wyfNFUeuhj1BtZ7ae4hVjJLJyUPRjejSNCjrAwkkKdpdjvPVBwgA6sV1WQRrTsiK9h2m5zg",
  "key3": "2cq2F4B4i8KTYyGAHVShxgFchVbL1jC6pZnSeSyDmxZYLkGf5gPJomcVJmvLGF3crvvfQJY3eaWm82hyBwjMZZw7",
  "key4": "4giiRzumT5HNBnh9F5eTg98L7fW19uPj69CJH7ruobipTRBcU9xFUmcN6qEwbXesqWjY8YJP73VYSHw6nTDEz8SG",
  "key5": "o9dKs28p3b3wWsXjsH2r9FtGoKHjEze2Dy6jBLbm2VuGXZEYbGf5eG3kD1wwz8kWx4toPADj2wbmxHNUvnvhxBR",
  "key6": "3gRqrgeWfPEeRDWVZAYAfccm98mg8FcfPsPj36GqjrZ61HFGEoURsyfjngXssALN1Ev7LwvcAAgwftxURthe5kfa",
  "key7": "2smEUEG4ojJxih78eHL36owZECd6YzQdqgLAdc6LfMrGg2EcDtFkMhpnfd2sy4nQNwghPf2iHzCGwm3CaasgzENp",
  "key8": "43ajRbJMbMqWQZp3Uh3qNZatnubQLMJb53tEhf2235hKun34CdiAsi9dQfcSq7rS6qkCxov817ag2ML1DHzwDbmN",
  "key9": "2wYYLERaDdYAqfwupExmVC56iDuNDPZC23q4NTiTsWdgsfV89nvfYqAt1pDtDqjYn9UCzYYnQsNRqMq1UrHRQ9uS",
  "key10": "3VmTLHke56LMwUEah9tQsxQd2xQPFwwe5PDGEKqp83spK1NMhoGCSwAeGJNWbjuxrRUGQds17z7iohvDHboGrLpz",
  "key11": "3kr6GNVKCPstC62iAFo25SnKt8zYSaZc47oRw9EXKn4joDrgpWhqGLRmmuvAoMDHV4cmMB3M7AXJ4Z5ppuKkrW96",
  "key12": "3ACyf25VYEfwWsUrDmzaXxBw2UMotX9d3jC2UqC3imhP3scnxRQTXk352UGEhYMnhNvMHipE3kRMufiet8p7NNdh",
  "key13": "4o8ifcMLkYmoMvJCxDmrfKvmTDEaozN9kKL3o1HXHQ2Tk5NVvTn9tHHwnZBh583nJjmpHULdConJTpwYKH4TGXMh",
  "key14": "613ZejdrJmhvAKbdvaXCNGef6hJ6wpNoLE6SJxyhyM2RUT1Fn5U9SSz2ZNLNqeKME99wRRV9BXdx71m56Ti7ZLFw",
  "key15": "3mbcZFe3i2e12Mta5h96rcv7bor3U3KvThRoPyoBonavzKk6ndVZgvcAi247MTCoAeyGnn31eA5aDxMZBSr3BVD2",
  "key16": "2TncTvq5RKScDWXpbcggJUeVNUGMgnymDhiqAfQ9xEGw87abwxELw3JsSfgUo9VZfDRuLPqrsGvjWtEpYnX5aJiS",
  "key17": "4P2FDjN8d11koaiKxCpMrTDXceE8Sh25VKPNPGqwh7g1rVzueq5sktXoiJVY3xbGpTNy7pQknYWjqcbMWMvpBTD2",
  "key18": "43DhGLdvkBLRsaiExfwHyp56MRvAaKTF7FAYn6MtDo2tTzaJcyomfKfHfunPX9rMgjT1Ky5U8jgkKQNzHwBgMT6R",
  "key19": "41Wje4d9xnXL8pxa5fXDAw7BaEdhobDer99vReqXBZ3M85BMePrkGj8zfQPA2Qr7Bi6MxjdzK9ownW2B7Ljs8n9n",
  "key20": "32Ep1o5jjFXoHW2i5XwarmXYPbSaJioAFsaiFDJr97CRLAqm3TdmiNta4Rz8QZFQgbU5gFQnrY7vQQ7NnHDQZeNw",
  "key21": "3R1QYHKcWHcZxYFwiY6dRie9drWxq58WQjyAqNUndDQArra8LpmgabvdjE3AUqd8hwP32bcJWKAUypygqho2ErNJ",
  "key22": "2R9P6NZoWN8FzB2KAnGur536nnJ9CNuyJeqYdU55QJGVBhvA3dZP2bsrNUESH6UCnfL3zWWCeF5HAg4nejHFK1TS",
  "key23": "5jd39kE9ZtAo2xcMLvmV8RAKhRztJasHAzNfPndXFmDDBmVhjsaseSVPGDTYnsRYsmwzaQUjTwtthg4k2CRsxDYc",
  "key24": "32hyVQE5wtyU9qwJ6aQoZhP5PCYk1zUgP4XVQArS4mQHeGVg9vykDocwcqZkpuvfKDwz98aazXJEDaxyYa6Lnv4a",
  "key25": "3bYow6Li2MNoPgFNRpjEqDd8ucnp3DgU2CghL9eT1JxuqEgbPPizYzq9ymYADmkNy56AVzq5gVaBPYuNzjyon8Z2",
  "key26": "2dMZ23Rrwh6Fs8eBrsE32AuFofiYadi8LZxZo3VZQdwCXsFZbK6VGwWQS85f9obnjFvVcUf6zDWnhtY69MnZZ4xL",
  "key27": "5tSygmPAKndBQW4QSQSoAsTZjy9qMNGiTfYczXikfkfNeeMEYFj8fgG6WwKNML3WhSHi7NTkd9ptMxEf8FULqvUs",
  "key28": "RUCehc5aeTscPq3iuEEHVwMWfk1RKEmDdhYViSTDbSFoFhUpkuxvkwy8s4UBsAbCLcVgu1yY5VpJaSCbKM9tpyx",
  "key29": "5foawBKB7a9VHeG44bvSJWCUEpGvFnJm1y2E3SCMGcjUxRYEh9QihPvGPAnXu9vhPLvnAgQeEEZCSuXmYsFYRqEw"
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
