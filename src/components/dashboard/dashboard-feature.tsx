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
    "4erYsu4EcFF1ojBoVcVHxtLRoCCty12Ux71x1H8i7n1cKxXB3JouQoGeyPDYM2Qi6CMBPEKuVzB4YaF6gP5bi4TA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SfeZXxLCD58sW1vWAdPVsmgMdjEUFXkZUe97scFLRpB1coEfBTaX6thRpPhJZUW2ZopdyKX5t2nR559vHwUTk8H",
  "key1": "3fscW3DK42yjxdw69MsrhfpELGdmDJFz8WbivWWMURzJfufJ1U46akPM7oeTxCMEPGaaMUb7o53rRtr9HEtSubB",
  "key2": "fj7KN2HEfvtocrkfdm93yoCiU5nrASwAxUf5ZwJDTU2piCWkBzufXoJh1Boey3uLr6Z799Vu3BK7WS7j8pT3oFG",
  "key3": "4Jvc9wi64RFp2JTqywZksfLQ9ZVYMBSxWj2mGwn1N5D5oGbbJ14z1zpzNGVYvmrJf5wxobyh9eJEQNUHytJgwDwS",
  "key4": "3XUnDTP4TPSWNqHb5dwRnpn7dwNH5SfbVRukK6EL9kWLKn69s9NPcueeBcaY9g6rv96goJgRyqi44iUbx4PGuPWk",
  "key5": "5ceFC4ksGZEb79pcTeBF61nF7CcCy7oSFJfa6LVDpzgW6oa4pwKak3ShVNXe4KDB1umqpe6oLBXeAfjPFmpNrECS",
  "key6": "2VNzoTTvFPuAFeQymQRYQTrseM1h1xcmXTZoD3ymJ9bgWnLihaHv6U3AyWJKQYZ2pgUVfawYprUntzCujdsUSHUR",
  "key7": "2UyPh4Aj7B7MRN5zWF3aHrVCyZfRBxhsmLzsLu8Kuj5NHgeG1ZJLyU7J6iPaS8qnHuzTqxSKfHxbk5RtAsdwk7Kn",
  "key8": "43xt5ujCetgpCb66HkGafgPrn8eSyFBuepbpRKy8ToJyLLGa4CUM5ZU2tRBPWzb5t2qBhc2hRuEH264mg7zG2j6S",
  "key9": "5UeHUviPiUpxMEfsbjNMx1KSHYrZK3Q7harCpbPx5aDwMNx8nnUUymzmqzUXc7nDaTw5LGAP3yjL3C5zhZNmYtSF",
  "key10": "21jz8eMwhV3CLFfz7z91M6Hwh8ayPnBVzjZLxxQwhYG8Ax4hmPL5fqzQYSRdkyYaZYzrwTTB77ubSzu7wPc9mMvH",
  "key11": "2aK8qrD58qQDjYg9NWTDFCaTa1tRtyJkXYP28ocFimGLhHsLoeyZbD9CECiMcBy54QJBjafjxJE1MFatjmfL6Buu",
  "key12": "5iKDBcPreVtmfMpBhrYRmMvySJ3817bNjucWzVyky74KELqbgwKmv7AjZLYBt6BXDPEwsYC3UP1fSJLLSoEB7AQd",
  "key13": "4zjdHtEjcWMtY1tFZ2PKmHAhY9EaWTHea6eaFTt8LqPm2kUZDiV83aWocHYFfNom3b9jw9efztipNBebUDCU2t3y",
  "key14": "3YDpUaMmCP5A2YzipUcehnAwgdUFWwqusMgcxDPBZsh5d1GniEeyVF7cpnK784HJSfm1V33jwr8q5op3cX9GW6qm",
  "key15": "iMkrHRP5b19pN5KqxDn4mukRTNmFUFKJTTkSwr2eGpFvisHYhnKTHow4nZzMKGih3XTahWLwmRgmWKfja7Yjbyg",
  "key16": "U5hnnBEjvgadfrjJyLPuJGuH3Rof9fRgE5iYADMZaDscSrFp6Ngb1AxLuZRYg1H43FtyaYDrBARFnmi2uZDuGHc",
  "key17": "dx2jKxGsMy75d5yvyX7fXTRxGJEHqr4mGeyzvMGkzG9XuMf1SLrQTqK9uneNR7T4eYs3uuKq6pcGudJGAW1pNxP",
  "key18": "Sej8Pjz6skBn4i8TZRXcur1miQY14Pnx1UBNaPumoZzGJsTmMk4t1aPBdoEfnenqK6WbboQ7mvAdDaggEfwr2Lc",
  "key19": "3gdgjgrnPf5PBE9BRVYGEV6pQFiU8HxB2as72M7R64FR3CguqbKSGj4tNLbWvo4AYD84dpVZHiur4EKpBXfAz4vF",
  "key20": "4rMjijKVAdbzeNrDuQvu4sEqqwPY3yJfA1pEWaRHaoshLLL6qfZxCUfhTZqbsaqHPVrYxrptmMRVJrWzPCQeKWwK",
  "key21": "3fnhLqEv2AwPuseRK7hs1MgsniETRYtM5DEPaRXjFfg9hcP23kxcqZ3ait5Xtyz2efJonJqsFJDiM3fJFrjCWfSn",
  "key22": "3TbyfEuKi5vU18T9ULiSP7RM4zSLSHMUMtM5VbgUbtg4b1PJwCzcs2bS9dGEZdAdBRtGVBdMFmjFjdHHKUEQUoYf",
  "key23": "3oJUaVVzD1dQsHBRHELVaVfipLaMHCRaS83nawZHzjmPoLweuS49eFYRQYBEEAqS4GwMrgLSctntesJom14btQro",
  "key24": "3xtuagjMnPxMLE3cbENtj2Kc7aVT1PvU4b8Sd4j6a2gaNNCzVkNEBLYiVy8R39ihSWkdehgG5Mk6LLLfkQ2KmUS7",
  "key25": "5zFDMnWtV9ZDUxQNSQZhVKYPp31M3iLXiJwZGjmFC3CqJkEYV3PhpMQ8P8hr3ppLa49igAhbPPePspNKb9eowvYN"
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
