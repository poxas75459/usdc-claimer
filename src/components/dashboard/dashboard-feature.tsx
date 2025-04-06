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
    "5x2XSykBnnMxQcy1xBZdBYUeXP7qC8Zs7FWsNEA4RRda5VTduokrvHLyAF5DijkdGNxKfrS6mAY7HjfHY2WrMC6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5egBDifS62PJZ8NiEbARgQ1xWFHxsZsFkPC3i3N7tkXa5gyuJ5VyWHtQpsSRm44ge9DjcCHfv3NHBbsYGSSL1kyi",
  "key1": "5tN2ups79pftDUGUpuq4eN6LFfqWc256aaTzSPPqNx71npBigjJTzWc2wtYfZFJXsHeiArCZ4xEkSh2RWAgdJsR2",
  "key2": "25vFinpigwcvaYw85Hf1bbQUDjhw4xJbLBaCvyjLAsPme7G4v6XZRGgRNMGxw7oX9VgRBYtco3kUyMrVVA1him8h",
  "key3": "55f8hedxvMQZLGNooUW3x9Yosj7usE2HYt2aMyLbeyqNo8tXRjSkMJeJUAW4BPW9KCnjqppPTQNRE1k7xZWfUu4P",
  "key4": "2saycsL8HhGbpsm6NPc8Vey9UxMACkXFr9edNDsaNKodzR1HauW8Fjmu4HuXEkpkGjrfQZcGrNYCBybxvKsYZBGN",
  "key5": "4zTGNNSe76JRB4Tg2SPTijZEmguimzQ6zwDP5XQ1ruM2N9cdqdFLKJsPiAFjVgDLoZqbnxnmsLA9215tYHY69Ef2",
  "key6": "4Jo9BcmebugLMxqG8facexh5syprfvq5pAiacamViM7HASaDt38gW5zR18er3CzkBJ88Yr7L8bkVoZKZdiLaF6W6",
  "key7": "3zmmtcobfvfPQw5fUuDMirSmaYs9qoqoHpck72LgszDUk51bqayndBZNJFZsZEk7V27Ad8g7RZcHhspvSgjymiug",
  "key8": "4qZmBzEw3b8aAcnt8gMVHiyFTJj3fkFSfWDNVJTNQveGwNof73fNdUdNnCATBnvhS9yo6qj7vbucJFHbEWfyLMP",
  "key9": "3Eh2XPV8jioxHsnMXVarXNQTyxmypaoYegZMs4niQMuFsgyY3oiUd61N1PLfZr7rKkenF7c36MAwayfmmBKTLjV6",
  "key10": "2Nu98GG2QboYkDWaBKXZksDJ6aHQJ3zKuMTyHFN6jp4Abo4LT295tUYVjcXGrZNTnLY3XWxKBfGec9XxVCZSS4Lf",
  "key11": "4uLTnQkRBMqt6kHCZskGV73FUqFr8sr8ZdA28oP6cXeQB4xpSuZAu56FXTL98GAvU3r2cRnW29bwkxrAkAwwt7J",
  "key12": "4GwaAqTogXX5mJ9qDBMo1Mp6CfPRYfoQEfAXNthEyqMuv1rniSF9Ti6PvXt4B4N5AyLjEPKyQDVjX9uckU6yCdVj",
  "key13": "uPmvbdtxWptuSsqmDsCdzzfrphqEVCuy14P7t7MPRogB7ssoprVmpGJaG5ftKvkC9H5EStHXsXk4pvcyouYhyja",
  "key14": "63AEEadRUggwvPQQdfJ9tQ3PTBaroRynzHHooRUe66PnNBxxpTrxWpgAX5vcCGLqZtSmrk2WdSWJ8vhLh731zjmo",
  "key15": "2Hk1KF6zBqHbuS5dbZS7cRhU7cZCVoh7dPmDxyueQVL1voTJFXUcoAo7wSJZrKN77QakkpToooVc2PnpqU8gzn3X",
  "key16": "5T7dbmuamo7uNDdaeX822sxtg3dnW9DujS6xnS8cJML7RaBiLeeNBuvXaRFrcxmiaJD1PLUwyRGLSiypHoFfDmBL",
  "key17": "4y2BGZQzaSQi3BSKmPokSeskSsGh6JMShysicmrGiS34WwtCJtwGFMSf3z1bXB1hv2oJN8p2x6NLpZdM6XspWPRk",
  "key18": "4aXYWQp6amKDThfsUB88Vz6ASxoEbo2UWVkyG7FXuuW2Kj9CADxz9RTqHD5wNGPvk4fZuhu8Vk5HoTddxgZRduAq",
  "key19": "4KmbK1e6P6YqVTxoAM3TpGtDMGE6Lt51hWR8BTjabYDZXHuyCYzAp5jB9feANbNqSPYrBPExc8gdSQYszdwqC43m",
  "key20": "3Edup3n7h1JV6h2XiJw2b21YUuKakCEMtxWAfSf1PwfiL5uTba7rY7abSFobxTjrzn73x9qURVGWP3ob3r4sDp61",
  "key21": "p1WPYk4vcVGZtTBdQJqLTTxYc5iuHvKWqEcnnPpDbMnZWGQ9hP7Y547K5jy5ee1g9YYYFCJoYZjzPrcDebsuRoB",
  "key22": "4PGU4zVM6MpdoTDfnAzDLBJ7wG7rN1STDh3J1hWEjgSDckFKxH5ooeB2RApKPmFeNXmS2g9boqvccxazRxuZ4sCd",
  "key23": "2uyt3aKnDX1X5YVrPVx7CaomFHhw36nqEMazmMxm7NPEW4gNpmEU2UqDftNtWVVAYoA3nUAu3xfGFY3tKbroHdft",
  "key24": "3HmdG9TbWv8Nf6AwHQvMQK9rFt4e8B1KYa5VwzZgXMB24eV8cMz5wFzG1Z9HD7RBtbdKFn7XbfSRbNMYexNmrrNX",
  "key25": "JaMVWu4Qr8pkA531JTPfgPqd26F8Rp8SkrohUqQ6KRq9FVcGVPce3N9222CKNY3Gw3oVcgXGtDfTu53dFgvNYPV",
  "key26": "5MSiGzVGuvMFp9evUXY7KE8BotJd4C6hbPuRgkVbkX4gtpUbd36WxdhHB21PxQymHJoy6WUEdvoSM9XE1oTEzQ86",
  "key27": "2txquUPPaTdc82sNkcrUahQKzB9L5GHxnLC318vJ8bmySpngkFkJXej1kW6hRgKX3sLX8kRewekaumvFxw1AeVrc",
  "key28": "oNKc4yCDBxLeVCxKwyEkeYXgyQ8GFV2F7BkqMA1xNCF7q33JtAhzQwbB8YRcVAQPrsTfbRtdAbAQpGT9RCwfgwv",
  "key29": "QnDT6YDHC8sLALpWbj8nkTvDLgW4UqPXKaAatSkgvsvuE3JRmbLdNcDpiyASmAK9YvmLnxinXNVxDXutVCWCmuz",
  "key30": "4b44h2q6SsYpi9HFE92J3fjbudHzNhiSAL2Rq6kEc2Lg4fKndBUzLafXKZzaWRHg266Pvikw6tEqAhQUk93qmeHr",
  "key31": "JM9M2DhhJGj4c9W2wUUmhPBJh4YWp4YwnuugwccTCp53i5zrGYsmCjoeGLaszQRhA6NoKHyMBQxiyTrzf181RpL"
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
