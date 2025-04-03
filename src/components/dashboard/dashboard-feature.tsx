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
    "4d4nQybm3ukF2c55T48o4oLGY6yhnmu2gts3wgHckXHjNeLfhhwmpcGc5QRCGXeYmtc8zDSyiGgRoUMHhuUcbW34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GcH7QT75oK5Wq2JAi34xrjgaBxL2e7GYM5SboR7ERah9HHidEkYYmDVfVPBMsbbSCPuHjoExnfsWtARyVYt1TXa",
  "key1": "X4bVfQPD8qx7FVefhegD1N6weVoVpwzBd7c5sM2U1T6ZX6mRYTBpPxidMegqeJDynNw5MAY3xeyS1PhBW49VjqP",
  "key2": "4CwaG1xwjchHeCYsuxqiJoVa8pE9kZYqMqjetWap83vTJuBk7W86XP5K82abPXFh6EUFMpak7xsN5kJhFjZdnZFF",
  "key3": "H69AuWFxVkEH3zDTZoabWrxVa3Ur7FT5XKnxA6TeXkYkQBbGAY3Yg4h7MFkakAb1d3Rvk1SYrXdaru44sPcfYeW",
  "key4": "kiBjUXsqT8Jy8BQAfGSN2E6rw6AJwuDYnB5ekS1cbYpm2fggM6sTnJgCD6Q4FCsFbF3WHmhxLykuMXy119Cdfn1",
  "key5": "3czeWrrqskNVyNdkiTmniaNmDLaeoqbfNeitrdPfZCUFfLXmdY24JHSXVQV7SmGFYdRzJixYrEKoktBC67EjyTcn",
  "key6": "rw8TtoLtsgS9RNcAUNJj4j7RSnXY148LwUipYBs7TeGeXruvVujKE7dvEeqV49ayE5hzxv5ju79APsgmRNWEoWU",
  "key7": "5DfFWtTKzudXJDt7VSj5vUDNLzzs4TfPX1cLWw7fjRMxz3Ab73m9aW6HnECnZNwPCe8dmFJNQp2FxRn3joHi9EYg",
  "key8": "293tEPPByQ8asKniThwoGw5Z7CcsRyxyTeEmY6a39sFmF2jbiTLG3mhsRqvp69wGTZoovMCKiumFr2thLBo32Fck",
  "key9": "3xeeWyWEJTEgbQc1ybL3QvzmpwmbrDFxLKyotALYTZihmFJvMnMjgKxmnjZBkzj2amtDeQLBJuncTSTGn1x2WVAS",
  "key10": "2YPTRY76ZeAbYPnQWo3vb9giKAsDjJu7RAkkG5zK6jTRRVKaa4FVeXmho12o842McpxqbmqKBeHbDiw3RSF1dVug",
  "key11": "4dMfnnokqohAxecx4eMsNDWPM3jxhjQpb69ZdagR4PyLodYtQAnYCTJVuM45ZKjrbFZCsZcLHZAk5ES6F7we2fnm",
  "key12": "4evE1GakmbFEnKR4cSXBh7rvxBRscYNcWPR5JpzHCDtyhg9iyGydXpKTse7wHZ2xtZRPcS7DDrC1ZPZajqKYGCaB",
  "key13": "49TFtLXTKeLEtxyUTAjdvFtveMiwh7J5btCSuVJoGuLTWwfsxwsoM8GE8MMZfZsMZZVeNjft7AzJKVgRvXXNRkUk",
  "key14": "5x7gtxiZvTvkyVe3BhqFdavBNCVHNSeak76y7b7TGJVXXm7XJ6igksrX3nGSifkJDjkpbZSminKafiFRn8Cysmsx",
  "key15": "3kpDLRKo15hcLDhfAYNFeESMB1BHkr1gdCjNmysAwjdEzKPyC1eoi4DkyRMTmogpL9yzRNnxWuSYEqPenZnebpbv",
  "key16": "2A7UGpLiypZousWgnXHvXCs6g7vbFbP9BT4e8MyDFTHW7PQi1bdUurGLNRiQpWi78xgxq9vgpZDEXmpbaepJS6zv",
  "key17": "323D1gs6K4mx32EcF4X6ZCxcXK6MHU75cqGXQ7QSmGxFYXSMVWNd244sck1gvotztKrfSMAVWh8hAc77zxukJatt",
  "key18": "5Fy84g2xCAyXqH5fB2hW6GTsC6jghBUNKtpaPcYXtiTduYXNxhMAX2kJXVAb7PY2GDJAiVPvTGSFouuojJLByBA5",
  "key19": "FKWUmDTEJATux3vWpykTxhM7RmQMut6MkRQ3xa3HGA6TSStYCWq7UKx7NymUDabnMZvBB6UUDmVzKR31sWMMJ9E",
  "key20": "34m5c8UeaoTpMGdhtHDxTXrnrjQQ77h3aKiisSE8TN4CmMJoUiLqr1hHqvsyb4BLGr57vLWs3KBkFZdX6eDyMcsU",
  "key21": "4nbdrLuDuBP2LZVDbQ9o73GELuvrbeEcmVYit7qZPUJG1oS1LPiiALUjcUzXcLKajwzXxw8XKrEMvahwyDUgswEU",
  "key22": "5mCLrrF5aNpT6w6Tk77HkCbmRyr7nU1xag3n2kZatbn8rQNCg84UWfhbqUcQFSnrnmPJ3wnH4JiJy2gRZSoHdjYY",
  "key23": "4KGctpVwVQnqcQBVEihBUExL37PZnbSeT3ay8PdApiAewRGurqsNhuYS9DxiRWoKjBJb6ifpZysiawxKrFx8oWUS",
  "key24": "2S3biSnJVcHyjJ3QNmfMsvbi61j4Z7X7eNNQ7xnCcquPwPUtxXjqC2XS9uBJp9SJcRsGSaPnwGbvGEe3bR4HoG2E",
  "key25": "3WmxGQ8fxsCLqr7rGNf86cE5xTCv4GuHTk8tXo6tm7H9qyZ2zpvREgWJJmXVP6GiAs6UFkAifRcesmkNJ3iF1BP7",
  "key26": "oFNnhEQoe2vQwHeRg8A4wfDFsbs8Vjbt1XUocqZbP2jHNKx9qauYvM6VSfsfTepMECCmQ5wzcV3yuxCpjXmucoX",
  "key27": "2PuRfbqkUPMJ5KTUXxQFMkTNu6KLV3WfTWboUXpGrZF2ymwV3Hu6wQ9CnQN1QtcdiTHmU43GQgSnDK4GcPJTePWK",
  "key28": "qwUvpXzrtiX5mZREgPfwF7vE27s8KbvoNa4SE3neyKR4Xzhy2iY1fgbDQt8t44QUqscC48EEqW6MuPYNwobaPDS",
  "key29": "xKxtwY1dLGre1ooAyDwKBoSvf2W5RRGoh4nCS8e4MPxGURuUDj63ueEb6wXCicNsNMe9MwyuVEgoGKi1n8syYb4",
  "key30": "3jcU5q7ht4HoFMvGLiDpbrkJ22jjZEyAVm5vnXRq2gMFWxoJttgmEMBaizeeZBRGnKdPvUnok711H5WoZ3hiVxrF",
  "key31": "4AjNGmqSoaE1suLnyG79F6vRP3WcCigtTyYJA7r6b3ezkkKnyG9WGuiLZFG32R49zX72r5L8TYrYQfRssLjjfzd1",
  "key32": "4n2Vc6Mth8ntxkRfKpooPFXLpTxcmqUyfr1VaCZdNh4z7L9q74wvacT8DWGYauqoB2JpS7Uq8BV1oWMecKcsy56Q",
  "key33": "25X8Rps39LjDGiow1Q28sfAcQ7GBYHx9TPA5B98fCBDxKtd7yZeLbHNEMRJQBc87vRV7oFL9U3yvgAMZoWgvYcqn",
  "key34": "5fivWrTDsR2f46XEa8GpDRQ8yZxuCjs3zUHMUb9ZJYZSbkAUR7dhgegcWqQdjP3kkKpQrDSJnUc2MBZbgJRc6jai",
  "key35": "2PSPip7jk6RznZiLz8ayjYqaANQBWgwTERN7i23crctqUWA2MVgsLKU8KNi8LHf223jJC2ysREnpN3GJU3XaqePz",
  "key36": "ogQ8X9gC8U7ZSf6QARF1Q2YdpHDPhaAtXKNpQAgtt1SRYhEs4aB9Gn6Y1XAKs7no2JHumB3kf8p2FXipNgh4L8f",
  "key37": "4uv7Jo97dKCAkfANfFhVGsZ8nvswVL5qY18eupeodtwuFLo38e4voY6fe53S2swMJ18WDHnmzCpEZpS2WRcTfj9p",
  "key38": "3gKs4qXmNUYdw3YZ2BMfKiwTHmoWd8JyaB9RvakficFxtBMNmfYwb1KuMMm6x6nbks12ihvjbK7uGzrJaJzMuvCY",
  "key39": "JiBK85vF4Uhvt3rPPCiSrGATNYZ4GhEqDHL4do2jCLsd9uuu6mx14ggKpJygYmz1m6rj2c7LzCaKCGQTGDNMf2g",
  "key40": "4qrFJ36zKRo9zTZ82c2CtgucWudvUjwGw2R8hA1n6E4RXaJWALqgnYC8iti8nGQ1uxU3G81msWyVSg7DasWp6Q5b",
  "key41": "2GnkDkMfseuGKoPyf1htXex8mHasbvjNtHM3UN7aRtG8qZcKawjJiCaKyf2d7fDo7UC7keZxT5CcR7HeNWxC5Sta",
  "key42": "oBFNV4rJLEsdspkJh78aDrRBf8VxoVcYxucoN8TTdpa5fLD2wQjr5fv88dgvzBsZTFZ5sMFz8BvzP44Ho5yebtF",
  "key43": "5iPGFUV8sASz9bPHmawDahDzYidvEW1K46tnERJxUVbzgDBUdqyVT7ArV3kbHyKw5oppxvYSVyA4J5XPXoVQc81G",
  "key44": "wLtxFZrFDhteVU8avUePRyk55DXzRD7GExxcbpHHQQ3GeVFAJ6BG82EadCJGtg4TpRLsiLpKLHFWm3XWzVi6CAo",
  "key45": "3XQUWL2qScWqcjtGzY13qDPzXbWFrKjoHGY8H6KGPPG43FcCPZ4iMccj5PH28oFTBJRM1GeWXnFAYtbGJJpNk8Da",
  "key46": "ijvfDypqTQH7qJHA8F4oYepHsr8avZtSrAhACjymKrXj6t3BvF5wG3G5PxT6r3kMvtpRgynZCZyQVzDmvJTNU5k",
  "key47": "4zNgfM35ZLCY9qzmtijWWN7VpdgX1TyafWy3HDQbLD1pSVhqFHq1Kk72RiUpaCekrCDYTNYTdRKdbXEpNVYYMpx9"
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
