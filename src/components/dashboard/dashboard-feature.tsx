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
    "3zciGXc1zvAgAGDWtsctNM9jDWbTcGFvbbTzx49fNMSCJo85QNrhjWS1vjghYzBd5RAGhAkwYX6LbjvcmwHPVtDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X1rp2K6b7DzbXjmWShBqzwHRGmb3H51Eu8txuc45g74s3xjWeKCqeXsftk4dVrACyUbWo8j4mA9g2GfyWMf2Cmr",
  "key1": "2jJTv1d3FNnPEzgnEMqqSRxuJiGZt3kLMMHLXLTd2rH8N1W1Jq7pquZB4aXgQvoULj4MzGTcG9xt2zQHfZQdWNJ8",
  "key2": "b6k8e116GoYiBbUiURcLLTUZm8RDQZM6VvHq6y2cZmgo1Lj7qTY1F378i1q9BrLeSxSMbpaf9MtLCdenHV5Kd5V",
  "key3": "5MjvMLEhERrkzMtkZTqMSFnSgaA3AACKu5czgcqUaYACSqevDFdMRnMhfivStY6ZYgF1UxnmncD2FmrAf7Afjcn4",
  "key4": "VuDVVtsEMKTnTxzmnvhKjDaD7VTMoDXBCLNWzTqN4X4AnAEjyd1YFBfoKNbeEKsr1WBbwnwkjkbnHtAdN9CDJn5",
  "key5": "4NRQ4merKa3gSQue2sR336Qo79sC5AFDQsr4oZoTekgWNBB1Vqeg9dQqTiGPBF6THTZCvKN3MNHJUPAiMyb4LDJn",
  "key6": "21J3NRDiJoK4dixoyA3hYfzN9X7La7JX3VZAEarmXAEtjYrvSnQw1TM4MCDyT4eVViusKjkKAAQeh9JihkVmurpD",
  "key7": "xKFjUAsUNdvCsPcuzkBoiqTDonrinii8VRFrAC6g4cXqjbgsFM7WhC59Msow28TGUX4rcZ6beQSqnt9inZD891h",
  "key8": "48zGsM52m5TLNge4mTQ3GbeczeDH7j6ATjvR665ibtQNUGzqzCb3i7qWb899Vf4CjsQ2ucH8RGPZAkPHFBiZ8mkg",
  "key9": "5YdpUHkTQDY6PPE6DwpoNzdWPK6fPaogcn5uDvs5XuhCAuoeNv793CLMSXwFWx5LbLU9wWSjNbNy758VnDrRMwPw",
  "key10": "4Fhkfxp2VcchHbnR5e2oB4pB9jccdyo54MYi4ZouZZh7wykBKdNDi1N938xtjPsVArn24M7AFTxhUVWxi8vPAgNp",
  "key11": "Fx6xy5TiiDVKer8Ca7pur65ptQmhjrQEqAMq3ngYCgbSDBDdJMHYnPQpvP8CesvapUPnAeh7quZYRDepKv5AUXW",
  "key12": "5ixv8zQpUh8Tz4ZCdDEQP4EpVDFWywuriJx1abodsCyis9D3WjN8PDhdp1ygvtovS6B5axjcraB486dCPykKohTu",
  "key13": "4L86TUxFg4Ps5ZaExMAi1vU9tAHqAphfyNYXVRqsy16nPw2ae9fxKfi79XxiXknwfgq2ELtgzVqqBnrUQ5wQD2xF",
  "key14": "3oPzsKNRX2erK4vdnjiyRWDy93a7a1DfkhzDxQLWGs23fkiooyntBfvkzzJ5BB3eTUrLntvnCThYSacAuDYa2X2G",
  "key15": "5FMY3sDcKzMHAVsFHkwaLPwevuEXQTncYA6pU35ZeBWhtqBrnVo5q2SwVA3sB9Wbx6woaJoeFjm643grxoZpo8GU",
  "key16": "AXy13Y9KTxW6fApZQ3bNvpwf1vw4qBgrmfVzaa5HBGdhHNMrKKpC46Ws7Fov1c8njaE8ZnbDzAz95t6pUWWprZt",
  "key17": "5d8xoY2G2n5SY1Vn7d9qhQ7EpWccnVQfCcmDZb1zMhaeePWvS2JZhAzGNTH2v5ScmfM9PWKzkUAFbbXMKFvGvRPQ",
  "key18": "aeCNNtF51S1aGbe1uw7dcsTkaUMdFUHYmZWnA3VyDB634yNRKurbHm5LYKjycKoJSjNCqdGWZiFBTmcAkmA8ADf",
  "key19": "3uUS4JufmLdk9XddBXYqqaDtWoZWWJnSGJNJemJb3tF679tH5kv2K6ufD7v1QVToXKUtrLWCathGkkKXFzHZYm4w",
  "key20": "2kp95DctWykMDLaGM3wy8852nyAWQ5QBcnFfXhd1UwMqRBPQm27a9HX9HRLZTKYSzX3ABSn9a5dhoFX2nP28Hjy8",
  "key21": "43kfYp449xvQC9cq6oX2J3DKuvE8ShsGR8HiRgwdTRgj9KZ4BHrLzTpFzd2jdzfsJryW7smXtmNxYNkNHMWBbqBJ",
  "key22": "3xp8euH4XbPwQ89JYQ4det8BJVjdxwqsG4SqmR6Q5RYkpTatys6ZJQy2iAhTyQnodcRst1z6dFvichgB1vwSAS2g",
  "key23": "4NnPgECFYHzrDJLJ5GDWHjSmV5kmLyPWdUYK6cmEPv7LjcxExLaCtatoJgkAEfPNrFRA3E8CVHyhYqoXi3SQuZzt",
  "key24": "5fAmtAwxzNGy5PxmnyNUJmF61Z9eaSFDRA3PfBCTfF2VhZuHuiy3SPDNFRSL6MQybYLs5hfMgNydspGj3NsXDuFf",
  "key25": "8rgbCg2rgzkTdzcscWefpPeGKEH2fcVdPHoEHG2czUf99xjKK9RBmJ5Cbjo9saBrEj1RwvGjZUAcs8K5uS3i7DT",
  "key26": "2ZVWiNej48qkAQnJ6tZUByCcQzRxZRuUiPtvSxTGAdH8uPQUWE1WraBEsHcEdSXTveB23AFseBfkpXGXYHUCBaMz",
  "key27": "32TytdhMBn1uKG7MNHpnzs1qUx6zPvW9fYomosVQA4P7SDAz5QuELaZ7j5y4CuHCdjU22TT7Qb8mfNLthGCqfUXL",
  "key28": "WsYWhz5VVJK8dYTexCmLkXFt7EvCAPAxYr7kXSKKZ89Y84bJ13f2BuwL4pG3kGuxHQUj6w6RQtrsrnSm7Z4yq7y",
  "key29": "2SW9wCTJ6Hix4LQw6bmgdTAeRZKn7tu4ZcyBwePwfx1AK5HUZzfrzqGT6ifRiMyo12t71VQPHFHec1aQzYAhHVCb",
  "key30": "jR4Vz12FVHVpGA1ysdEobR8ZfbXZkyfXYXMZdvvC8BJhcBiRBPgfrJeWgqyJWKJdum4jMTEiXEPToKVmagNqxQ1",
  "key31": "vGJwKxn4obdfjjWtSFaDZahaLFhUbM2zAkM7BnWkJV38npZdoF1juD313yXwpWjBFSBADv83wWNvwChR7xy2TcT",
  "key32": "TV6a6ZybkCELkvM9iwUwGc6dY1YsyPzCHJr3dgJSRNMa3uYin3LHEBfuTiXYs2bp5rpNWmANUCXMB7NPNmL76e2",
  "key33": "5snMaTgiEB62HXKakFm2bfkCHDAQ7kAZg69FCujVRkKF7PCks1Ssd9q7yyPX1oh7d9ngjGubn6GVdvQwJvgC7ChF",
  "key34": "J4vYbST3qWpBYYcjP7RmLkieevYys281EMGq8EeQsmx2tnJdqeinZN2xvNYsf22ks682oyrFiXKw9nMBiLQphZu",
  "key35": "3zV1MgwBkuhhAU7Z8BCQ9iYafBDXVozZBwB9wGSJoWQkxFaF5bQ69pnHQurpzrjbdy5AyA5zV71ohb5J3j3CjvXv",
  "key36": "35TPewrqAvBLxHdLia9q48eAAfrhJPE3TPSLfXTK9Lss6keUVHkoyT8nP2g44msUcHDgzDT6Ned8BnmxhKuZPQ54",
  "key37": "3f2XEvn11kv1ma3DHjRNEcYXoXrbqwp3qFjdvgDzafwGX2XiL76TDUjh18vyycWs5R7U9gpuWoBGR1ZaqHxsYDgC"
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
