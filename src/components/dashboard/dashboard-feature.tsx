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
    "59EVrYS1YyzwxS8fu655VVouoiYqvym9rt62WTKtqqQktGLgddz9H2zkUsarXenMBYzf9PpdaGgapkqfaSjmwmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tBebv5oXQn7KFfdHghERhbZQk5JemWyRbxSVzgm6jKGnzBECxoebckBiPKzPHHeXAUtVPCbKq64rB8e6byxadEF",
  "key1": "2Muw21eHhX567bNHzFxLMzn7amRFgS7L1S7TjZMKv1gmukzPD9XtbKez7VLXz2WJszcQpUtSB5GX1wjKmrN5ThBL",
  "key2": "WqJHJW5r4tGRXzSH6tBzxu9mqeHkwqUwxhg61xkMiouFhuAZtsG1voHpqH1jKvhqcAXpNfyzh4pQVoAcdHYPJev",
  "key3": "5kufvF9AZVc8rhobigRoJE5L3E8zv8nEkZNoWxiNiRWNxYmUqZfx51bENQBwQFmUaT71cpfcypythZHH2Msee9Hx",
  "key4": "4FRdos7SjwvSPE3DEZejKRsd1ZJpKoXqZp3K86dWKCRbZ1FJ8oZ3Mj9S81GtUBJFUdd4K3d83uqKaBAXePbZ3H2Z",
  "key5": "5vrvndFCkSgVdZyQRuRYedFHANdAuiGsvSdLeGA48RpeG5mKgobf9AmWbyPqf6ei5KCofKwvGUARV3mQwrPpDNsy",
  "key6": "5E4kp3VSYbxsiBvUzw2xPLoTxGEaWR8yQcVaxex2ybC59qC89RcpU7kiwXYkBGjiKS5MxjMhR1Y6dqvx3x9WyhHi",
  "key7": "3gBVFe8TL5zjpcXywsCJ1eVuviNvfdon2PfAx8UfQeUZ2LhdARUBPfeaUUxFG24MAx5gj5z1FD6wdCeQQEqZTpH3",
  "key8": "3j9TQx6MWmMedGcmFBvWvBYYbmM1u1NgWsHAngwjm3PC765cpErG4TaysjwqXttFeLPc4aYXPgy4mCAow1EZFDV",
  "key9": "VrjF8CTW48i52cDnQvf3rFKAYxtEWETQ9o8pWgNmyKWFgaeDwSUAjemzq6Sk44jcXXxKVJeB4ieZGt7d769577a",
  "key10": "miczu1Mp48jHpbFugjRjSWSJpT6Khh9AedEcJackdBMSJCsnXJihWrfE9dXkxZhnpgkWMhpi676TkFL7sJTT8aZ",
  "key11": "2e9mfJScjaPfVT2JwjZ8jmruRaiNRy5G49Qnokr4zAA1ZzhqiHQr6jcMcJUvbvdwArwofF3rhMaNbiERsHLxCzwF",
  "key12": "4S5pfxxUZQpw6yiLQooeNCHbL5wcGTFmCLosCQWrEsap9cZ1u3TEGdRHUY7xjEQtLKWz5dcR7hvR8qCj6343Cbmd",
  "key13": "9Xb6Un4Gam9dRP5nXSR7Pmdr5rVjkq6AUiywa4VZY7vssr22ni4XNqtjapvSWUn1aMWYRfGzh8iYMRNDGSYtvHp",
  "key14": "5srLPRsLw4iWWBnzQji9YkFYqY5hJoNmry4auFJyUiJnnPJcNokr1kHNRyoGjh1KrzAa8UWGDYwYEzNn5KE1LkyH",
  "key15": "SoYCjnQMCDJgKenmkzqcgscvY8Dug9DJJYEatynP6eE6KgJVmxuazNvU5wkzHPYkLdh7JGVW9DgsSCn9PNnUsRr",
  "key16": "4MY6tJYfD5Kh1nhGPpM9f4BUDxFpqdg9id5cdCLnkhoPjXmEapqBQmVCG2ETKhuxw5wuhRoXrFbo3kCnjqWSqDcG",
  "key17": "2xwuvyAGCFPTnsuzS2Ygx2PJvbQzGV4SKJARLMoB8h7ejoe37ZFPWG6D26BAsa4a4B4vpoZ8YRXH25hgg4AZoC6X",
  "key18": "3cDgU8ZgvDbsw3E3yFgTBiRcBaJthEQfmbYxDvdj2Pn5LHcxbPpxh6uV3evKLJDP1bYAtRi632ZWBkRxG3jfXgAf",
  "key19": "5NgK14JFc7mw6dQx3uMvxGGCgpokng9AnHEZRCBTTaQCJJ3fWpfEVnsTHpatDDQAvfiKr6WDQrX52QebihLXBdQx",
  "key20": "dSe8xUh98SChGi9rvXRjDeVTzYB4YQwuPsYJyxP7HmYFnQ135cXYZngfA9PCdJcjEV7kyyBvAnHzBAqCBpQN1gu",
  "key21": "43ecMY9DtizGthjvtqrLpaQ2dvDQSnCYzHFzEEL11o7wUNTNDmGAnvP2VHAN7XLr96PMsSdB72uuJ7j84ZgbaHAd",
  "key22": "2wKSRvPSKyhNnTGE2ZVYbv2o8PtNVogte6JdTfPtTyYXYhQ12Wz6bHGqjwL6RqtfzsLVFWaze8wCgmyAHXM7UMZK",
  "key23": "49PKS79wDdvhM3UE6wfFpSiTAUFbiNqY5tdD4eHmwZM4edF68PvyEJXW9vGc2nHuUtjLeZDfLpPoG3VqbizLY4Wy",
  "key24": "3f3K7dTSkpky3HuQpEvSNZKawGmmc6FpsmEDUXdCBfUz34Bxm4G3UUyVUsVWAGthDCN3mBupfnpDfLHzodDMaLt2",
  "key25": "5SuG7TZmMhm2CVMNsJWKatFB17NAcQ6uEqu7eo7GWEyMy6bHQo1rU91DhhETmzoTomKFRRJ44NBY53ndN5gsAvQ1"
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
