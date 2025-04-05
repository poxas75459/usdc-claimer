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
    "kZ4zgEsW3rea1xbQb5VLWqx1c6qzPf6haEscuujDkFHLZjuvjyWVfcsmq9zqVwcJ7dVL6dzQ6cpGXmuRux6wHan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bftMZsXoGSAMudXFsWap7A8nRndtoEU7xsEk2fC618RJLEBRbYBN86U3ddvuSPNnZd2AaCfTDFM4r54M8494WSB",
  "key1": "5GpcQg9Gi2WYP5hGFgzk3sQY91r2SuD62noQLb3YytfZfurmDdzFA2dn7aJ2GZgVPJ4WFhrMtAnvNBvZCD8N91D8",
  "key2": "5z6Vs2Uf3MVprxtpTKYdufPpkcicbvgDr4hmdkLy6tBKSEa1WyTcYjpECYaM9C1KKc8yFg11gpvUoEYkwPwXRRXy",
  "key3": "484skJ9XcDuEsJ5Vpbg7RrAbLDsLSy4AKujNBxtStqDYpc3sqrsGFNCsxTJht6rDwXetJcnknzRiNvrn5CVtA9dx",
  "key4": "3Vd5ax2R3HiY7YuKiAyQAVLfMyQB7ps8Dx4QjB9muFVssBB6csJjBnNxMsqXvJb4gu1z3R7csWS9zfM7VX6p68oZ",
  "key5": "4ypRxeq9H6DB86WkrNGSGpFpb7SG4ztqnF7sJ5F5ELA6rE65VuNoMNERXDYb8AqEshfGuqmYehGkxB3Cb1GB4kC8",
  "key6": "qiBRxtc2nyaPkZn5nhMCEMfXrEtr4ipW2EU25h39ghJj46TKtBJL9RDFgjshPoNFWKwck3PokVCj9PQbqhKGFP8",
  "key7": "4Qu9S3TBm2RrArc8eWWznaDUp2w5GfZ4etxY19kXCVp2bV9nAPHJZN8JYV7CGpMZnFf3fh2ZBdfTD6QCq3hgS25Z",
  "key8": "3Zt5GLtUUsMHyRyxeTiC4pfc4ZVCAaVHJRTyAQKnkJEYeB8vkr9cr5PZq4efsJ1j6SQxt5C9KkuqVFUTaUKcFBp8",
  "key9": "5FaQ6kjaNNE275J3d5oD72bsuNSgNJqTcrU3Sj9MuemzzLMtZsnrVYoZ8BxifEBnRN19HYnsFuTP6qouEBqiVc6r",
  "key10": "KLNbVaLqLD4hzjV4m1Jm8urZowiQFLV3C7Cfgr6eh1D5nDg9wxDmgLVKcwiwgMQzKRGdpchUfGUU6uU7Q9hBvq1",
  "key11": "37u5K7EQ9LEEBVLeG3c5Jo6WMmUBCmiWbC94M94TxyE7yoXZsPcfJNMvdV3Ajp1wyzku3z8mcvrfvd6aNfAu5ExM",
  "key12": "5H2JoAoGN6dChYQTdBomFCdgFckuvxWkvPbePpzp5ifnxxbsGyWoi1ymZh9AuQqNVHxZjm44wrMajUwJSQeRCsae",
  "key13": "653fJYf7hnFJrUPohLgamAxMeY5UaCexT98xHyCVM7UBCtYNoAtEDFV8fLUEWVo7qictp9q7DQk8MNXa4wntApU7",
  "key14": "67K6RNDsJhZxqtFdFHGXus5h1GwCrBQyjkAuH5jxZE5E9XwEcUy5KcA4cc5oiA49HSVKQQMxxfDcugi5SQi8K5Ze",
  "key15": "4jjCjpoA7DKrcgPr8RnXdSaTFkv6U8U9q8azxALNu58q3Nex67M3Az8HbnC97NNkwJpvqEMYaLVscWGUg4ACUEMp",
  "key16": "4GSsS5AMwBdPmuDuShHpBJQVtaKNHidpTK1JNiWReNtDgWwcEsc8zby6oAN98xFjqnuDLBN8NQbkcb2CRWebwyVv",
  "key17": "4X9QjuF3bfxkDpp8GoQHJQwRPBeGnggphUUVrUEsyQJ6Ps1Q9cd8TDUYk1EDBMFBJx9SmbxVV2xPVfyEAnmAnTSx",
  "key18": "5aBfVrcwS7Nd4L2REzGa64kHQ9cbZeHMGkWJ4EFcMoaebD4gyh9eA4h7aSfaKCWxXasK75b3ejud4P2GvMNpSaBK",
  "key19": "5AP5xhREeg84yw8wmNQbMo5RHjsEjzxRpHrzEjbvCDB1JeW1sihXMjLwSYQ8MR5UVDL9kGaMhQyJmeYTspvaZw5L",
  "key20": "5eeXax3iarsDhm9nZibQtizgNbffNSDeh4sSUZPVFGk7muCwT5KEhHfThcy1CsswkUCsuAo7Hjy1puzwXJTT7RU6",
  "key21": "5xphFR5JvDVauaAythohB8SvyV5GZNDkr75xS9fgq5PKxvXL42wzbPpUj38CjR6Bt1JFwAugLwVp8aNkFiUJ8t82",
  "key22": "4VPKeJic6XpFBj4z8Lp3uTs3GfuvvfH5fhj9WiNV1nSk5776wACnfc21h4DLv8VXFVaTESzw2i3ftzdHdwHL6LWf",
  "key23": "4fxzhSrebo91gWn38jyV9NrvsfWXbdenb2fkpuMLTLG914YBNKxP45xTr19bSDQLm8dNcXpfKqWSw6zZLZKamZKA",
  "key24": "2yLmBf1JVbiiq9kdsWpPgXiy1LgLJQGX1Bp6MXbWjALaf4Ee9Tb9zLvVLvPYVx3Lir2RP6y2t1YCasSj61KiKLyj",
  "key25": "2SWm9gGm7T5sZ7LR7kBjaqEwNtvCopASrS6BCKbNcvNaQvzV8K4QSBsXfENMQQLFh9iycBva8nkwkRNwh2nnXtpq",
  "key26": "koRsCpCLgvcSSa7kg3JGXe9tAj7aLnpau5RfHwg6wEwNDjugdKVCDMZfvHNWxQR8dyfhvaWFagpZQ8hjAUjqhPE",
  "key27": "2XteDeqR9owMyzXhzHS7BvzgKV6aA5YkwppL9TvtQYswSPKhpaxFnTWi1pkZzegP8e4Su2KRu1mQbDbAneoix3Uv"
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
