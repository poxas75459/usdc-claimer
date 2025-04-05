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
    "3poyHnpNr3XNmmDCbCERUpJFZgHH2mPJa4QNuAKgkqQuY68hSezNc5ajUJz4VrhGE2xHare2MdXkYtHbwcH7YAmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "okvz92TmaUcGYU36kS1vNhcEEqSv4rweY9ZetA8NqnJUDGhUd2jjTT32YshVzEjEk5EF3VkNSfoLAxw4v4bfXbi",
  "key1": "257XF23xqeRhpjxVisYhHumebSrB7THRRRxYPUZ8oUMp3SFJgbjAjJRnbx6bXobmn5ACAW3fyVVKswXGwxtdJkJC",
  "key2": "2JyLSWLg8UL9SXXGPm3CW8679dt5pYUezkNQuM2svabL5GKUQgQ4arTzQ2scsJbhX9csJkxCTkvZbtFqCAiDfPqm",
  "key3": "ZLSFAdiyK1x1YuYBRKwVhqC8FRXH69XqsiPsJVj6HaS4aJ7a1fS3Ryw488qA1zUrXuR2nkZn2d4VBQGricwGmsZ",
  "key4": "4udq8t6FZgzGxsKRpKrgv2JaxgCGh49eXvkHiWu7xWB5NsN5tn7WhMjDADsvsyZwkfZBNeY49yNefjbz5oAvmCCf",
  "key5": "4oCfyL4cDGuRzFaFVKSNoeoArkoKHR9BoR6KNLXu5rmKENLQJHok1cufs75Af8MNcgkfhQPWgP1dNQcvgFPvaqAk",
  "key6": "4qtuYBh88URvTeRnVnmNwjuVea3AhyWQcKp9ZSnskNXsrvWCpgaM1ybYkw6GU7z38gmWx6U5izqkPLDrhuH9u42k",
  "key7": "mJrewNQMrgrE7UAgcy3ye9igyV7tWyF9D3Qq3nf3BqFNZ7ZxwdgZdkPFqe37axAEMSMttTYw25KHyW7ZFtp6U9F",
  "key8": "2BbhNbDiqaEfQjSzpzUzNNfg4PCKdELXRem5zXzohZLrs9N5cTX6VJYtfcfDiB4YMr8jaxJdoR4uJ581bKoTkVwv",
  "key9": "54qyCghY3FfTTF5sHP5uZjMshSAgyiXRKEG8CbkgYghpJhf3JDGWoNwi5JeEg38SmfAvzhJ25R8kj5YHa1Rzt2aT",
  "key10": "47umL7skEiMuk2Ymf2R5uFydkskdF7cbpCYGB9Knm135MhpU79458CqLamFRvXiC6Tj4QugZ1iBRtuRx6FBcMEcN",
  "key11": "67b9MAXqqNhhfhBwEigKwov1S6S9TD96Ks7ccGxfUaYGg8v6b1dg9D3fTSCXmsy4Ezz3njn4M7MkbCeYPJkSPLaZ",
  "key12": "2nKGeSQx3zr5HrxrAqZyyNUviRMPkX5pXBMr65d6uqT6Yu4GYoL5onP7QvBosGCRUnFUzTqv9oBtbU1i5qSWJ88n",
  "key13": "3Rc5WePY9aXSwfA54wzp5jqYto8MmetnGPckXETdTaLQsYQpfnQtm4u4h8H4eidiwwmhs2rW1AYuXuQWodChFaAD",
  "key14": "41kZQ72BGK19fsHtPPQ2CfUZUQbvRnmodyJZmb1dWG24MbvJ62mBrPpmYbxKPbAg4ytqQKGtyqMiYJGuc8Dq7gT5",
  "key15": "2tcpMhet8t3DmVbAeHfzsqv6MxcbipCHf1i4AR2C84eWrhnd9pNAJHuPxZa1LJ1NtZ6LsodSBHwG1ksVAL7ZA3We",
  "key16": "3jpqpRvM5ktXRC76KUMULrcDDgEhhm5p3gWGkyRhDhfEMnygcTz5bNR7r7gFZoaRSaQWPmXfCmGrs43xpHUnuVmh",
  "key17": "4en1AsUZwweZV3ZSshX61CSfJB8bm5FmPWNYBFZPAi4vYtjmhAh8XiHYCXZYc8ug6rz2sPGVhMjgcRygp61fwKZJ",
  "key18": "35u2zrKiMVDckeBTyEDyxCSwDdmAAYBiua2KQeGDPcbVVdc2kDv3yRsTnWfSNaYTToT36k7wtdQKskYS9tUGZxGL",
  "key19": "4rTv49aMWx9e1DGnVbTVjXYLHGoTyZUKT2Ji5LV9tuFyoCRkz7P36NmerM7vntoKGfovr4QLD1m8tjQ4ELMW3dmA",
  "key20": "ACaRdgGTy6XLnw7goDtnAzKn28ydohqYcErUhbgarZ47a3STzKCUE8PF9XXDbn5bzFX9GTPGXvwPsCzkEokngHB",
  "key21": "vvAuCJANbjHQ3eqKEKpAWnwskZ7J1GxAmDUSMCwQ7jAcDbRTHLeyaTYBujgmwyf4mLdYiBpteNpPS3Batm7gspN",
  "key22": "oUV7kEwvVTS76k7Jep3VBgCQvgTuY5HQmx1FyF78dsop61Q4jypwrHdiaRgdopBNDqdmrf4TPmoZkmsszMxffnd",
  "key23": "95LbYG8t7634gpWQyDt4UyDmJ2tEHtwKouRUXPc5NgwAqNC9tyQawqf3otPsc6VAwHMjLAy5Z5poWjhHLqqxEVn",
  "key24": "2YJ9boFi9gmdCrvUmgQLw7cR3nk8Y3PGv6E6eUcs3xM9JonB7r2jz9aZKNJyzhs47DgLu7WAPaqejAxWPh8UT2XV",
  "key25": "4F3qwcTmfU8rFDiTy593AuwJihDMQ7egF3J9BwPTCV1XmDLamdp5J9w9M1QA3g1jGjugqXuCYoERBLQpqj3jRCsD"
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
