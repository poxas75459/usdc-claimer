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
    "5btP31NKDQvSkzHMsqTNmTX6zztXC9iPvzYUimLAdb9tYGa6Ydai2h3BqsG4i1zGmqahKcA6y35JGc2yDiQHho75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oD6QY3QLF6KoBjrJkr5p6wD1GkaQTFbSksPn7mMcVhY7RTfVLGXaMobn8NaBFRn24F74xYdcNCTN8o1BYBLmxVy",
  "key1": "37vn1Uj4iUsy17kbW1vhcYcWoGK8wCEh5Xu4KXoXtWhyawR1w76r7dSvLKhVkWpF3osAuV1yJPf5kABLjZB9vSt4",
  "key2": "2cJnr3WXbVYdCBaRuvKHwpkh6Nr8KqLt4jYuRSDcMbM1fovNR27PR8KYRW58yUy54GAK1GS5ZJS27SdHNp5Wb6Sj",
  "key3": "5WCzyumn7Xs3fGeCnoixwA1N3W6qmDyVoUxrYU3k6aq6L1v5bNgX5P5997SotbyAgN43uHp4yZbdB5icH6Hjzuaa",
  "key4": "3nTqPtZdYYgyHe9VNVapbNSejn2U9JEhBQwJYYrkfbuC922s11Yad6vh7q2WyQ1LkzVgnemfjPPpnqLepG8KiftW",
  "key5": "5VkZhTGVx2hjCJYdL958BfDp1T1pXUzfe9TSMDVFM5eapMGz9gMPKWZ99hrqacsbiUWD4Mo35q3F8EXbQbmNdGrA",
  "key6": "5h3Bi7iJriBtG1h82HSaTKoTWb9rMnp1EiTT4uawAbiAeT5WADuNtHrQvkq6wTAYdTbYujuc99GT4eTuFWXTDzMt",
  "key7": "2DfkAXuC1v2FEemnESNfkRsWdB7A9xpLftppgk9EN7ZBNcucHkFNPXsWXpc45bMjf3PmHLMTGTSFs5ixA9CZrcjZ",
  "key8": "2UhxVFSoFHSq7FscbH5AZcAC9uVmzExL7zrbDASxB1rpkLG6JGomHGoeaVoNzxT54A3fm6JpAxWvxm8Dre31KW9C",
  "key9": "4xAYC25Dug3RbmQs6Z4vdnjpzhZMTxjx5xZuQ4vygD4LKtwPKXFsDV6ghVcAckZudm4GGFFwpKtzVPQMj1xwiGWL",
  "key10": "tsbjgpur5Hx8et68kQkhcvEvSQxv7zD2L2iBHa3fdCw7LFxFWjHahEnP1GJk6sXsTggEUec4L9LXnx8etM8JSSb",
  "key11": "3K6fgW9H5Rd4vMALtrUXNoSyk5MK46qyCMC9EVDtAEkiW7LuA85xGD6MA25uTeEx4f57ScTe3Wm5roqKUqcfV9sQ",
  "key12": "5pDNbhdfbhuMHMeEBVVzVxomsgoegFyhLQcndTUFtCy9ekFe4me5Tbdm59umRVHD1DepuSku2ApT8nbCzYiCHxP",
  "key13": "5UZMa644t78Us6bBreqzFnVc2vw85b7jVkvrfmUnVFQzReWAnzxVqsR62syE59ZHGXgPML1uLNRNkdZEqP4V7uHd",
  "key14": "TNxtHac3cSVQ7FKgMJYUfWMFmt82MULfo1sJZ9rCUvxR8YFfQJD82CWgF1qRCM5DWo1XLPXdykEaP8SCVeXwnbv",
  "key15": "zuoSQFgxUL4yQNuWqeqjrwYwktMwZ5YytwzqoWMYbWDgkenN3GcLHxdjiH5M4TSsJd1ShFU5ok5iUYBKM9eXfHF",
  "key16": "46k5iJmLDZpMHD6cU57Fe1LiHsudTpnwC7dkQnoDyFZ6yTrrmxZpiXWczmetuS99pXg8HCDjLRdCTjkWwN5dkgzQ",
  "key17": "31avv2cH9N2hheSUATs19VZvaX5ZJ49ao17RpDa11br3otg58721QaucAzEKLT9JhANRv5JZoRKh3KZg8nKLkDqU",
  "key18": "2c55azWo8VB5ZXoSyM5htHcJH3c1xRnGmm1UTJVuddbBLUsKa9mNaiSinE9uNw4rJWTm1mqC9SVXdob4tFj1PAMo",
  "key19": "PquzwPMGEuEdoQiRr2vAXGtgLhkNa6FNvDYtDoTruNMqTVeFrKbRdo45HX16HoHKJde6EeJBPRJpTGaJ6RNamdm",
  "key20": "36hA7cHt1Rq95dEsbjAsGkJFNTA57vY3XUKUyru8yDDuy5Vb93bJgbC68GRm1j2PRvGunNwbQmgYtd7uGMcV39vG",
  "key21": "34RBUk82JZbtTUxDELkY17N1GMkMcQT545cHAUEsyHhtw78paSiucoHzD8QQCakxiTDDS3wcACoCRtfxcUxfPYon",
  "key22": "36jks3thBfXn8pG7pvjt5BoRZgXhNrREoeS2FNkwzSXbQLJWqMnVS962uzjbswxznkNsemd85mSBnELSvbPc7bDn",
  "key23": "25ct5VDWEwsRzKTZz8mWbhBqAgi2wj2pKRpttvSF6cYteVrLQq8HZvr3Wz4dsepQ7n8X6UYyC3PRBBfE2bqHiGZ9",
  "key24": "4nJHUWTrrvSjMWu1DkNXAomnvf264yegwS3MM5RaXMfWseQDUKubCD4SidLrjwXeGRQqjptSp5kuFknrKGd3rtWT",
  "key25": "32YcYiyadH4gse57VWsbaR4owBJiN89uKpFN4PBXcTY6EgqH8cH1uNMJSyeSPCiTXpRWGGyHGLa7w5GmJbQjeBba",
  "key26": "PSFaJdVpDWsjPTP9z3sADPi1cGNcRN2YXsDyyZ7icnFVaCME7knQvNpCAGPZoY2PAgs8RktHXebMh5jHiTvGJX2",
  "key27": "5PeU9ecMGkEeBe1Em511eiWqFEgZw3MZQtPgdaSUZqKVsnKoaN17sAWYbLXqgSCfcpxMFVduFjSjxp1mvVsNsZT2",
  "key28": "3CadWtKdWXoG4eNjrPfwMZvUe3DvzhRbWaBr2fXzS3c1XNpRJvaCRMprktf86BZx6WuhxoUg8QyjTXJQpAtv3zMG",
  "key29": "4qnZ4mYWsuqfpTcLg95tuM1V2uBYFJz8Cgprw7sHjLmPTHJm2tTFLAWdoMXp2FtRFtyn11oZNt4SjTzhsykgpM1c",
  "key30": "4hugb8fEmrddqxJ7apWjxkLLXmCK78X3uodYaGP3ysYcD6kJxYGBFEKqxgnboiHLYuzdbxhVj9fUpevHRVjP6SQt",
  "key31": "u5K1tfNvG8nGpGYqYyGWSxsyLNPTTVd4Q2ybfemTLuXWPp7njSdXTNYNWyjxx57CP63eJNwJpe2FcGF3xT9HGj6",
  "key32": "s3jvKEPjp1ZxEb2RuY5dqtmfqnpisrXLtUBQ5ivmrjYsaMpUmphvBmtkEZU3JQQfK8iEYpb8NUGRgroiGsN2qq5",
  "key33": "TFThrrEjVa6rpKabErk25QsxuWWvQFofoCc2HjbThKNSC2U91nkv2hMnYpcDAuiLVHz5KmWYPqMsYN9LXSYh4jj",
  "key34": "5yqS2fGrm2YbuAAgrr36J5L2kFStvVuYsS8Dw8RUsbijDjMnt76QnqabBVuWrSzMRuuKqf6Xs9yg9Vq5a14fo2gb",
  "key35": "34ji45kMWz8CgqAQtu4bbbAbqBRPwB4vqn8kXLngjZbrtYQSwrB7WWHuBGzM9oazybZB4tPJwETmBE2MFkUBC72L",
  "key36": "5A7CuqYeHnGhaGKZivEdR824Px33HzF7vuCrVJLALKj75i36zxnomc5Tmv9LMsJ6WtVzFdrmBQzStncAogY7t7fi",
  "key37": "3WUZ8pnjtAEKRnNit7zqvSFN9fY8gxDdsQQpKUkwTbpEimn9n5xFZeWw7YzQjdf9pDdXUYA4B7v9B9ngN478yifG",
  "key38": "zrarJpQ31jw2nzt7KhaGBJ5wDYvNtdarVW9w3NzYWrsQz3VSdoGjyhVQEoWKUBF1PoYtLGFfhbh2szNTuc6AboX",
  "key39": "459w1Twqq4P9LrmcPRpWrtH3cTtNWWYyAXhw45ruCzeSkQDBZdSPKa1rtihJShoT1TYv1hFLJSDFwt3RBrHYPzRK",
  "key40": "3t8CLB1YdfLWesSEU7gnygFE9tjFBDwbfcA5hB8LKKVCD68YQ9dNi8qgYdQwSTccDMJf9wdLKDJAk8ER3isdWNMJ",
  "key41": "64KCR6XJnMrgDnzKBUceV7U1YhCq8uD1PnkX8nKkwiv7YeVzjUbibki73GsPnLj7EttYfpiAH3hogkfUYaLRjzfM",
  "key42": "5sAjq6yR5nSLubTnyHCKcfvDDLiSQrCfHDzE1qVxA4pwUbCGDuYLxydnm2mNn3b8AyAUQLCA2B9YiPkCs7vdhuek",
  "key43": "3Q8sdb1UV23nyNLm3gLnmDF2WN3LJ8w2EyCpJ6UTtN5UkFa5cQ1E3fVdnBoyPedHVK4iiMcudDp6o7kpUXecUjgP",
  "key44": "41DTawXTtESVFcF1k5RzTKnENF5DPGDdzTHKzGEbZmiwbBiakv7SH9aCDKb8CTfYS3M6uhwpFCtoesm27Ns7CDUY",
  "key45": "kPLytoT87vgKGwi24m9ECgPLFoN48d8dH5CBmPxbcvTBCHqTSixzPhvEimuDJvTAm1xW37jehPKXxuVUUbXhDTV",
  "key46": "aVCsBCoVwPZGyVqTXv2ARBePL1MKYhb334x3dJEeavBJLKTyZit6Sq5yLM7VFAKpgQSCFQz2wVRZNQzSv64UYq5",
  "key47": "5A49raT7JsREvnoViFp4bFHbsxhfXEvZNrFoFYWNYwDfiDKAf9FW3Txyx33otvzkEVrGpfKnqABGsd54HFtBiJ8J",
  "key48": "3mUn5MeKXvMKUznDxWY5ieYe5XUh37P7qcfV3XMkN2EEayUe8Q7wWgwbWBSMSdaSkP2wxHb6fm8YurD6fPAtXHD1"
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
