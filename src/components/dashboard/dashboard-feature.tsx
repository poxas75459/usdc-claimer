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
    "XaDtZehptJB7uofbVwBMxL1M7QJmDST4Z4eZatDv3cqexVz7pcFxwUSgvFeNCjzeLhrNo1dLYRSzVygq8UZCoaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CPSxkuyUw6rsJdUEL4WhfyRL7yTN2FEsZP9Fm6Js1GezvuUAtcVg1M5uh3mF2jNESMqk8A8aJC3VBs6E1ci7A1B",
  "key1": "4e5RMDBSDMNExYnkKqoQK9PrSEUfMhuGo7pawjWTrqNJ9uwEG337b8sJizS4NKwzLmoxfjvKavEA7mcaq4Jgj9bB",
  "key2": "Ndp6y5LKiggA8RUdfY9aHPFgBwFnmYnSohQ8cd7mX9sqzfi8kjx3vufYS5Q1TxPmmq9RtK1k81W5YBLCtssNUUt",
  "key3": "4wkkMSRVbRuNq2KhEEPbJzL2t8uFdM4wjFSvoLGwKhfXxrr9pGjSmbZxHR4XYHayEwbKdy9ej4yDHBkwaaVYmLoG",
  "key4": "2W6MoYYCdyCedzs4Td3Ni7cGrKnSAnVUGmNsBccXstfHKYY3U7U4tYL4xUfHDFddHB2C7EPAC4dC1KnGFyRcHXZk",
  "key5": "RLwRWA7UZ46KtmP35WQ54QAqM2Nfym9q6iRibQ6G5AxeTrM6cUKMnby8oNVPpfBWkHxRbVBWiWTCWtfe3UDd1LW",
  "key6": "5yv2FCn7CvKmty5z2SfLHHzBg8eqLeHRSanRgpLNkBTkkXcBmVR5hWDD6BRzqQKtBicKNURgcpzs5rrcyBdedBdf",
  "key7": "3sA78dBygt92sNGEBzwS7xmrrRDdvMrFwaQraxETKfcWLSLerYv6pffEcu1xHsjPQL6RMVcp9SxQVCrdDHB1qSwL",
  "key8": "31ef4hRtm1SMv1RcNb9BQt2yPcrLK4G5L91a5ANUYbpsKnfEGvGCd7LmGEWFxxivnb9EmA6AT92KMJ9gFBchZkPe",
  "key9": "4MNBT6taZTcbMn2m7n5NCKStBxHR9YdxQWCgGPx59vEe3vKRXaCidjr36ZxLXXcio4ajHbCYT5bQ71LcQhVtzENi",
  "key10": "2A88nVDtZmw7dmeVB2hfX54toRRp4tfAc3KQ1Ci3pnuaJF56jtVY2jJh6CNtEK3v1VX6NLgejoWZK8zii1sKQaaj",
  "key11": "oMCMJMid1ntiCJTdJmZus8NooPXyBziFEWMuC3B7Eeu23UfThKdk86AZWNpPDfpmXiLyc7b2GtkLkh11uc4mwir",
  "key12": "3Wa5iRZxExPfMERCiVMFyhLsSRqyqYLsBtoPz1Z2bq66xH4Mv8B9VHsp8VNTWUXehERHu3pJBSDLfrohEQjAE2UW",
  "key13": "4KyetvCZCPkdrVMSGz7kfbYh5R1Muqbu4SJnEGS5nMFv4bfp3kXKcCaWasxrrdHaLFoWJvJDoBgaNG8VaKM5y3P5",
  "key14": "5qsNBA3Ur7poBZL8RYKcTNZZQbD5PHXyQjtqoNUipHD3DYKjo3TpPzG9D3i8c7y9tPxf3QZVAaEBBCLcJob2PRmR",
  "key15": "2fcXGbpf9D3PuM7aM8K7yJXcWY7j2nEedxeBFgkj91HTsT7CZEY7ddd4276r2nQbxGZfkF3KYQhbVPGehb86zptB",
  "key16": "3ZUxPXRcUvdG74w7PWHWAPHJK7uL3h9ebTnH6hw7GxSLeAbPmXfVAoeipgNS8XfJQgAq3orXDN3CmeXXnh73YVgZ",
  "key17": "G29Kxf9udkuR6dTaAhVp3wFD8pMbfT9rM1Wosvdnxwxp3U8upDkCP2wkTWqTQKnVmH5XdxNXuiV942AsbcNETYR",
  "key18": "5AKmMZurHNHgExQ1Ebg8NVbBetqn7jmXs9yj3F64usF9HWKejy84mtjDDqfG2sbPtQWNStUVwSgrTGF19SqK6AA4",
  "key19": "2AmwzCZmfnJFRdSKrkiqULxWBUez7jGh3fjKGdWGHVQTPaqxXMKWrA5tQFbXrwGUMUoE21DKYpV2ujJ1GgTYYs6H",
  "key20": "2nqstVfHUDsGzqrDxJYG1BoTv6er8zZPLLCkC5oCMPkUaYgiVrnwkT5ZNE3vkxhuWLkmm6FAfC1fZDVDzer7tDnJ",
  "key21": "4LkV1Gkm5S8ZqBQQaEF8SjDRu7f1DjcL5Z9Nq99SpNtsd1NqhytyQn1K2uyUsKjHXbBDeZpKCcRKCgtaPmVdmnYH",
  "key22": "4nNmCZVRHvvVKvw5qvZHZFowmPTLd5ZNCG94JNTSA6Vn4UynKNT3SaT5jaADLeNxbLzLkBuDqRJP5dkFSNnxQHru",
  "key23": "4DyAAD2ht1Ng3Umii6kdG7sfnh5o972fQx5zU59GPrJYGXvwmEGVSqewBnhMfu7UD9aJY7Ak8j2Lu6VJ6eLBLpku",
  "key24": "2Fc9tWeiMRm7mkUSAhCz3YdoEVzpQXdEsADqskj79ZrCLeWKDpS2B6Ajvmqo18Lf2nmMNdUj7bi35h7cMn4opiEk",
  "key25": "4zVP7pHLwiTw27RiWteMiJsz22PtfjTEDVGzGAPqjDWrrwugg2Um9hAHLSCKRRMLMXNUGzT7guL2Dv8UdSUwUcke",
  "key26": "MviQ6i1fVNniejt4LtcieFeTAeR9dQ9tJchgH8QsNWAs1sNCHtwfmKA9dbCuM8jskyvdgcCiNQHNyg7PQp2RgWQ",
  "key27": "4p9XaFNSx63MVYYvfDXDdxS1S6QdsN1Nd5ywjC6aSyfZ43tbjboix3ngcuwoV7r3nAoYUhVTHS7RN9ymmRkHkoGy",
  "key28": "5VkSLQqpXHwWvPidtq4mMdoBjXpfTe7rcmrVznf9e65jHUuYpYJ2M9YE3fum3WbXB4c33pUVxSqsBMYiiNSJjF5A",
  "key29": "jY7951wfU2DarsUZ7HNGymiC36HHKzqwoZzVvQC6EA1LNXYZbzekViniWp57PDTaNfG1wqWjhZdWsiCTHZNmXsb",
  "key30": "KA9WhJQjbadUktr6VpRVgCbSQk78getNHX8gjkYzVL4ZEY9jakifV8hGcj22NzGezYUfvd5yDu1qvJDNLFL7V6j",
  "key31": "4mqzTiCPyXEJdqmKVxGX261hq732PhHeB6SAMavQ68VpZeZRmctQpADHJkJb6dPwVTHCSGVRNwe2Gt1vM9o9SitE",
  "key32": "4fNN5LH4pGiXQFrMGahRn7bH5kg1hWKv2vE3MgdJUTSC3F84RsFFfnTpiYsEoN9kG8oMkiDwKzuAeSQeotWhAmfw",
  "key33": "4x5CrfTvvCqmwKJ4Ar1RiDpvkGGK8qNp5kSXP2vFNMicsqgdF7zgNEuL1VDtdRYr3b5W7sRQJmVj411X5k3Wh862"
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
