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
    "63TeACz2TTRZK7VTCijy37RTADHc6cFkTptuhxaNNP3knzoe8CsgXroDwWgMAYKh834ZJyN6Vy9eQK9VaV8dj3iJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dZzS6oL93YbeMJsjL4srpXf8u1rX3JzQtBdvjey4HcNHjKFNK2NsLKrdu5mmPCnNZQDsuMSA8wpbwbNM3zVuubT",
  "key1": "WjVh9KYtEqEHsv9KdZAtCrPhBPsVnjCUDXvkb2LvBUDVVuiPcq8rvn8aCeo6wxxunojkfKRd4cioZ1CPV7XQEaF",
  "key2": "2u9poLqwiEj5zDt6ikKZEunC7ckTpScS6wvZydpcyGCZDbJ2RryiquSfKdFUpYN3mqducazqrjtmjwRsnDtFU8y9",
  "key3": "5VDfnnQtzA1pUDmW2U2gjdkwqPd72WqvJKLLvhKaQ58f5xu95mSewbWmsby8Sv4oWR5h6Etp7fu6xmFcQunJzdtJ",
  "key4": "33dBFNHpHS76ieHRUJcu1Dp6mCsRetXhD4DgreP5mjBEYX7ZH3woER62DsRSLQbj8oEsQXQJYKw6ztbDseZqnFwy",
  "key5": "3Bb4L2wxXMBQWSxrU7mebHH58zXfgAJVjfx8V8SybFDjwoD5n1i4qQYZY7K5qh6AjwySNk67MyqasjeNT84MP84H",
  "key6": "4oQhV1hPtFsjQnPecztWvgN9TKBk4NUpUrMKrKjF6dnae4bGWW3LSKEvzbCbpBvj8uvEDaaCffpZhhPNDc5XTiCz",
  "key7": "2N5rpHWNj8cPdem4aPepP8WSLTxcDT3imDJvHspwPA83q8dMGgL4dCV53RoG5uNrN2hgU6xFJGbQzZTxDJU8XCWN",
  "key8": "3bu8BAJ11JZPj7NrZuoU2V6AC16xEafzPUuJYxMMfVKCSAhpLVZhWa2db9HFX84UmRDcu6JCc317JU7wToSkkfZc",
  "key9": "5dwpjP8wFeEWrXExL4fJpUiCKE8TLb8AYkeca7pFfa344foNtcaWNQBn5kQxQBsZXfod8adv4xGQT9Hk1L8S6V8Y",
  "key10": "4G1q5ckyXE77XkPct9pJZh2fmmRAFKUa1tPtoUUUA1vVhjnwDBAX184h6szJepuGr5erac4XpAY1hie1VCZeTref",
  "key11": "656fCpoVaKYGSUfniDhwpkQUeutgLxmMK7AQQ8GsnoKACKHwmbKZ3X3tRYhGYsnTqvPCDEwNoC89RCP4ZPhJ1tJQ",
  "key12": "2pY4hNrkG3expyYh7toh6HEpi2QUSFoohXQTGAvnqHGQxRzkKHUC4mdwGdMCntJWsufhWVKxKvbZBa6DanWkA4rW",
  "key13": "4LdzaCP6QgLh2uLR26JBv98qMuNi9mCYBBjXN9tfvDQxUczxnqFe1us1TSGyxbkxcHsDCpiz9sdsqDBhHiMbgp7B",
  "key14": "ANGwF7YfRCKNntZAbCNHiGWvqYhxvkcaSUbnQjJPSE58BH41kciB7b3dedfN22DWMykStkjNHFvuCxjPfZqfgi5",
  "key15": "4H1F5MdPf1YwyxVLvhc29o5oECaB8gjHkcH5JsnKV4vwtXLpFftQ3GJig2FpmqvZPXXCy2YxRT2sgo8h93BryRFb",
  "key16": "sMsmmhfWGdQCF1dDsmjQxc2v2niLkgJ1itQgMW6KzQy6xkShUswben7WugXdRxMSUXgtqLpdeL3fSHpT9TCMaYZ",
  "key17": "25XHkBeCorKBNPHZUmAhYN1iNi6fxybqqDYJCGqverpfJtKehEuBTAk7aQLAhRcgxkE1vsdghWnWj6G7gomyJRiG",
  "key18": "Wvm4XcdoDKe31AKwUMuhUcpcP6rcR8n8DAedGkdgdaVijWr7yTUoPVzJPePRZRXheXmmKCiT8neEMKK8sQbUgEe",
  "key19": "2i7ksCZZmYhiTMPempprmidEF2e4FBbD7aW49YBZ658VmiytwAZhwKUnD9zkX1LJk7ejpKyahabZM5zN8vefMpMT",
  "key20": "5P91svgFkqEL6jE9HeJAEfkQ7fPXGBNQkGNKNhiScGdLAGqaJBTpXH2CTgix7f8WrESGmrWXCTeeF6fa9H3f3Zji",
  "key21": "MSJeiJviekt86bctwEW1DNNHVrTT5mLkNupuwWij5xa1cXtE9pwr3mLQhnH2d38YJVXi1LEdeotrJNdm9fhTQoS",
  "key22": "EDuVoerZCc1L5tMfiCtarn8hWGjvfeGzfv7gX99s28iCnHGFcnB3pAUCmQaFgvtk71qHvEEYiLXwL5WSoyrosU6",
  "key23": "2oqB8muUfaCD3kPmfUbS6iLFSGo8ocwhqutStUnxAok5U99K9bX6ebPXb1hBNUdrn3gfxocfgcLtKrPLahmNkqqK",
  "key24": "56ZpumB56aDYf5PPA4SSY6Nwj9Rj1YxcPoe1FRygVEqM18xDU6S62149T3KEMhUu2vWMYAKc6KTML3rqfxn7cU8d",
  "key25": "59bbGKBuds6xfCHRDpX9yNEEAj9wFHg2gHfcGYNVwxEqfuYwCFj2z2BrkeKSuyKj9SjD5QgtA7RuNU1pVbNvL6SH",
  "key26": "28Uqw6P8csxTwwJ51ymUL4dw54ektyYDRYBpdqxBa7nNbWak5X2VdSTYXkdgNJj2pWqynvfHoFKc3DDe1Xcv7KZx",
  "key27": "59YcVPP3AMtmEzJkkpSbLKmjNoasRFRR9YetxY6sRgwSatPfUwNFaAba8EyxvuQouRDGrR9uoVXAfZarQG2GkQe6",
  "key28": "53wxzatVWn8T9pH4AgsjgaDUFQxnuuBNge8caPwmp1Vr4bQ21qTj2Sq4q5r1sQ8zufZpXBk2rQoSb7emAm5VRav7"
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
