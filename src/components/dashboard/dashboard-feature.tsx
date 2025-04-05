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
    "2pjitWkvnvfsXZf8rD45N8hTHJQvTJdGLCVUjnuSMZy1uCHkA4DdCSN74vYEy9q5mavVApeWfV4vz6oaTGrcVJKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jKTmfeREHKMqfuR9SoHxpqVDP26X95YzkHWPooz4SFVxPz3QPKHSrQEZTB6om9yV3Wd4ZdxWp7SDc1ecGiqKaGu",
  "key1": "5RRLrDruyvb53dP5ogwzwe1xmLbEDqg3YX2by17qzaTtvCqxLRQspytZJdzFBFuFXPrjEb542kM4oMrfCXqJPz6Y",
  "key2": "5TrHWeruJ18NwxMeFX11xjwvtrtGJYQ7HVDZ3XPewDT7bU3YuB3hyjYVmdnAaWgApxWc6UJxnJYWEYK6PXR953Mp",
  "key3": "2tVQk8uddFJuW57APJ9rooTpNVYu66m8XMSui5NZBpX9x1c9PUKjmHMsfc5raer8q4gCXCUKrNZdNKdCibNLnQtv",
  "key4": "39Usd8G34WgUugmEurEjRmTNFu2b6PntFiYkL6pAQd7PJ45r5125ouQyH3sJu919QRpvQJWbhqyNhSzVmWHL4MdB",
  "key5": "3pMuEVZdTRN11oQTZ1RmMGnFdHJ1Jm65qDerwHQc1WNXYN4Udzjx14CLN6phvrx1j6R6GwgbgprAYXsHoM4f6nGK",
  "key6": "SSpsZXyZgDaEQaaFgWCotkgF8kfJHcgroQMC4kK7u5mcM7YewMnRnUSQzEUzt1oHEdrCmET2VheMVFziKDyJ5Sp",
  "key7": "p5iQz8JGsP918YkrMXMCNfnbFB1mZTRQVxWVxQSQSupLaNqVpMsaDxL9Q4ZSaRNBthbAec4ZstJ6Xs1zh4kvTqD",
  "key8": "3eFU2yHKKZf4SKAzkT7MTL3CPJWsJ1ht5kdK7SFrrfUtwx2Q828hTLzjPkSMJbkr1hrGPEtJx5axFF6utXMHfrBX",
  "key9": "3fAgreqFpUgnU5F3stK5uVScuKGUv24M7PDhysm7hYnGGL4Sjsd8sYmAQoTgYfFV2tKn5fETq74Roue5wXCAaM6W",
  "key10": "4oRS4gwEAo2gGSznLZhkEyBJsr5GdjehkanaRuDkxBPqQaREuXgUnKgUgP65W1L5HZxFpE57J5f5JnH83QvEzbA1",
  "key11": "3ezofa7YnLBtvFFDXas8L44ThzeupQnTjoNuHz58HGgtP32vNRT3kuuX4pLU9QQSKs37Ardu53MQQ2R4fTCbr5e5",
  "key12": "5FGa6444utr3L95wZAmJUX6HMfx3uC7riRq1arvkSMvU1oMJ3y4q5RPwPC3668KbSuupJLamopHHJ6aJeh4Txqo5",
  "key13": "3ZsPKDeBjvmF4KMs6F7LQ3277xwHec5EEdJEo1P6jbNe6Gzo8UEEg7PwLR843P6wXx4oTkK9tBYCSauy6R5GLiDK",
  "key14": "2MqyJ1idapaHTZ4rdowN9iqnqYY83z9PYuqgE4WppmG1eP5sauoB3CJhLMUbTkNeEo3QpL13vjVUzNjKUiaMCKY",
  "key15": "3n7DLDm9i4scCEoSgPz5QDnkphjJ2riwAzwDMfFnkJfMvCaKjiRThZUFCKrPVYSBYuqfm8xkF2KdcVSQtrh5Szjo",
  "key16": "3PyD48jxsZmy2744LB71QijbLCXpL7Ss2wD1tr7MtNph3CPZZasksDFmqsHXwHqeRMoFUqqA4dMgRqmDzwQbhjXy",
  "key17": "23R1qLZKwoR7GYLXdHjA4J4JZL2UagHb9xwFqQCzZxoMoUhj2mfGDBwPXYtE614utpV6gEhktb7hqZPWHcdD3Afh",
  "key18": "GhipBEd4has5hvsVrineS3iFbznPkPFBitaz17U7UDfHaqZfHkwk3gjQrm6QWQdjLZVToywVDMkwfcTWbNJYuAY",
  "key19": "2PAXDoi2Ch6zkbaXc4N4RKAvxjAWxMwnTJhiSoBKTayb4AQX2AJmmkMei62eS2bb83FgDnwR7g4b7vAhzdZY8a5V",
  "key20": "2rxoUGb9qJu6tLqtZXSinpfM3wEbSyk9XxQRh6jsfSEorjMbLVi4shCMpaKw9PKjovmHPdmC59scVjEABw2Lqgfb",
  "key21": "4wf5ch3RXzmKYs5Mh1rpSZ16s7G6W9zSZW94C1cPwcWaRQhwKVtBiTKgT761VbJPibqPo7kRAWAU7uDNyj9WLkbu",
  "key22": "4zajKt82zBT98CzcVyJpoT5iEWzMws5Na4G8vh4HPnuRXK5HKfKycguRWaA2uQdUnbWMwJ5BZeKbidicViHG4yVA",
  "key23": "GDVJFHJH2b5i4ajENTumhm6ed3bsfjDamG9bcNtTEuXw3pg2y6LJisT2R3jSsMpNFgo8f5zC1ecMuSfmsT7pyPf",
  "key24": "3DQxEQHabcjhMFx1u46krBUFXArWBGfhLvwMGh2aa5q195z4mF2j4Dqzh7BPuc4JM6cXX71nwUijSggn1bLLJDQd",
  "key25": "5vFLkoV3hKj3id3u6AW9RvQ6XoJ3LRjWjJ2oHYduVfGMfXuvxhx2QSEBj4tJ8qGGQSBcHWvSa8WyhXx8wHPs7F3h",
  "key26": "3WBm8E8xAw6K6N8anWcYR88KWFLSpv4gbAxiYTXN6gAWzdWouUYyXp7X66oRwHtRhbk6S9MJbcjpoBGH6zd5zP1s",
  "key27": "37SfndZzPE124BjYo9ReJamsZwD4AHsVLFVewTwJZh8XmN2UCSVfnaA8cQPVcsDEtcsZeH9EdaeNmBRxFuacBFaB",
  "key28": "3iUioQTys2puKWSYyEd94LqFTaQNCB6LB3bdqNAA8oPniYXKtw3Gx8UYeUoqqy2gZ41xCsn83EZSr2RzsviMrozj",
  "key29": "4qVM8vbiZKZ7WrRN6vugnGdMHJhQfVm1b7U4rrrnJXYPZJg7WHpbkWdpN12ePSUhaxYWyxJ3kHZQUQtorar9MrXX",
  "key30": "2jfrMUtyHSQoS5pCxHwh8ccYBPZVJ6JwUspVj3t4gFMGtwQRt4tcsps9N5tgqGF9WfdzHjcWwHbBkHUkesf7omX",
  "key31": "59zRDhqEEFB2qyJ1txb6fSS89mpVRfybkvKXa1SCmF9KfAddnCqf8hHT4WXUsgkYy9H5dqgXGmCotN7zfbYTRfGX"
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
