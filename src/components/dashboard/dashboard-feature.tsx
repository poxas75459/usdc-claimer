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
    "3gtuz3pcYM8GDGwtgMJtoe9G4frEp2j9n7xs34kD1onmkkMyWBfUwZWkyY4XQ6zTsZQSdJSCRbpKRXezFeXMdZ8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cBFHmzFgTsvM2nJqYUF8cPnSKJMyM6X3waNmqZfY28mJyfjacUbxk52vZKLQyCMSLhxbe5hi4Y3YnHnGagpszQB",
  "key1": "4X2noWT9Q1KUrSQhPwTdumTKU3BXW1BvurqEqMVMnTRbwGwMnZRpMBPSYBnpKi4mVz2pU7YngnqogbTrry7MR3Uj",
  "key2": "5BcXBdQCDGJSPLT2dJweBt8WvMjDf821DJy48Cc8nMQNY3TRRVT1oy6VTWSgp9ZcxAdeEqEN5KMihXy7jVcVJPGR",
  "key3": "2njDu22XuGAfRWuo3UAxeuhDh3qxCwQYnwjEazn7qmoU8EHuZXBjPhYg2QMhDB7qBneZauonenQWA6344SrjjuEa",
  "key4": "62zZW9iB5UGhTgh49gdF4wBmU1a2eB2J8dG7oWggAUTMAMzuM2VRMx7jjvsELm9dYKrkgPWj6r91PGoyHwoEvP2K",
  "key5": "61GuEMeNAPNX2djnmS7maEPKhKphUk6Y7sJCtvy4MpxUyhsQTtNFNAiGMH6NynuaUVegWJAGhWu3QzA93qf7DF7F",
  "key6": "2ntf48APrNVkgLXGjUTNQ3Ymzc8KAGFDhKAcLVaY78jCNALLWUkxYhW7pZ38YWDW4Tjwu1diQL7RuKwCKs3VzA2x",
  "key7": "5KgjpMXzRnrMakq5R8jPPKPh1sa7GPPs5XGngqWE1oAJLYgdpdX3fRaKFx3pyFwi5HGAZd6FkTKmurfurL485E3",
  "key8": "4rKuH9v3gD4vdDn9H7ZBYUVbrGpuM7D9JuiztvnZDrrAe5H8t9cnQT43pt7YXyZSGybN2RxEwU5RLzQzminFKZq3",
  "key9": "4ng1TdHARNwUca5q5oGkFqrQUmx5VdHtZ4uai9o3FpDEqF5jmdsPFq2vfdaeBLF9tdaKYELTyuwn7BZTexyvfspk",
  "key10": "WToUqPpDbDLfuvyE3a8ZJjPajjW1s9wJ44dWq3kXQUXjAvxWAS4kpAuwY7otg39phRZFCtUHGXJb9CWDLpfGmeB",
  "key11": "3dY5rqvyt77rnqAsqq1L9wg3mkEoCf9atcXA3AFuevmbK99mzzuc5yFaTFdAARMBFkBpCnLTURCBZPn739rZffxo",
  "key12": "5FxposeqAGSyMU2PiB4y7AswRJVS7u13uAwwLXaoPGPHaVgXwiS3dEDCGAj54PPG45SGykFGh59MtVqQLKQJv9Lx",
  "key13": "5TZsn4WdpD2Ypa3TuqLyh4pWMzGdVhRDheGMsQkyFnk3YDjaVz1ZLbD6tmNkgkyDbipcQa3xyDBtvGeJ3EU2yc43",
  "key14": "276tqv7YaUQuUz92CMisq44dhNmidBF3kQzxEyfv7EUzVMtX27xSqaD3u5GvRadS93MdFSrbbS7zFk7tdGGyT26F",
  "key15": "mupApENonSWwmQkMhDaNVqDyUyk8ryri3GjwvNxgdb9cgSQQGQETq6Xdc4J2ZbMEEfJunUyrwvt3p2pa8inKe9K",
  "key16": "2xVr15bvEEwtjLXhKaTeHdkHCmPmj6QVq4WhtT8dfh8DkRNdcUS7nGeEVoY5SFECZXjbtwtqYpgvu4AFqFMesxuN",
  "key17": "3kRbK2jdjpCooLyjgAnVqRWB9tMMDjV5rwNEMdpqVn6SfkvE9qhou6y8REkfqWcnv5kZU2oWENHS6cpuZmY49AC3",
  "key18": "34BMhixFMEPg4Epf3pGpGWGmrd8Y6HaK122iQeyKuDvSzPUkxRFkx8hu4waGs5p7Qv8eY4jcEkC2aFdBQ2N1pj2v",
  "key19": "5nAUMLiW7fvqCfssoNT7MQL2fkWD4LUk5gx18HAj8kwJvN2GbGncYnCU67yvQFuEuqyuJJoN7Bkq7jay2bg76fFt",
  "key20": "kNEZ2N4gMjnJo3XDUg63S1jYK2Erb55teqrUo8VdV1NWS93vFQ3dASvCSbTWW46Vqpd56poqMD9UPA5HEcZXKoY",
  "key21": "2iN1gNg2KjrTKEcMnGCVvn8eDkW9g1KMa8zJuoRaVLayaB1va9rAhxz1d5NdVNaxVbmoTvj6ecTa1JxpTC12j44Q",
  "key22": "36ezyorBBVKTQX2ygFFnm4KZkAmL5iAYdJjTNDCTBdXtSgMC7bxHqz8dtegMQVFL2eoB5qtRWL8eWGj2xdpLfHR2",
  "key23": "F8SQ7LCqChgHH3ZZyxiABi1UGVjekec19iDMAZ83PA1N9vksMSziJbL2bXzkjpzE6txKCcKQdVzcE6oJ1Hi9q5U",
  "key24": "2h53zZ8whvbQEVSYHUihVoWNHVZitEa1CFH8SkC9m6Zp8ji1Yh68tGZ35j4d9NTafJouiB2smZNdBWLyLSBdebuN",
  "key25": "2gPuU6Vk8rNxpTsCvJ7cVHReB7v5F8VmbP1cpVpoC2cVSbFJmpvgKrTNk3pwcUDryNweLaP81mJKhUs8U5UYtgu",
  "key26": "fDENHPxr66E2oGQjwwwVZdH96nAtXiQUkKDK5RgG5crJvhxCUK5xJkySPZP16Uu3EmTjfbsv2tb7k4fc8MXrXx4",
  "key27": "gF7KapPSrqzJtQsuAZCq9vgwM37Q5NLJpktrHYVpEoAdzd3KK2DXNB7pFhvJU32dX29T7w5yaC48bPjd9UGkaoQ",
  "key28": "2PBzWf4bZ67KmXNxrqzrRNdXNdcnrbaQ7rK693GW8fiFiYmjn87z5wcMY4Ce1myKBDA5XJbWZtZPCMkBtX5TLiBV",
  "key29": "2ofdPQW8ABrU4egg16tvX5oU97LZWtwJ4xEppzs3NvyHDwgeLt92wh4XjFLiNKh2Syq4Ch97o6m4RvMGH7puus3d",
  "key30": "8EjruozGhGcommSMdMVZNvSDNEWwNRhNrxLUtBCT2rF1AVkLNXVt4hXpjxc5sXFDXcmYtJbQWMNBQXX6tAD6hRV",
  "key31": "4NMws5KQVCPXdwECntf9pNSQ1yGXbMcgJPruetF1j6mUi4HZigFWUEXv9Qjp6HuttHUjEzFgqQGLXGbhuuRwiPBn",
  "key32": "3kQzngw4SNUSyfxf4Cvz1KfUswgZkg1Vxusy1S1jTNvFWnvNE2AR53miXLgDZ7mwcJP5K6QMUmng9gxxKe1FFu6U",
  "key33": "4Xj8DcYZYAr94Y8JecEMdzmbkKNqSkRjt9bg1tMEFdy4JuWUq6zuEZwm5uQyQvK8FNoUMF3kQMJXKBAFdAJezCZV"
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
