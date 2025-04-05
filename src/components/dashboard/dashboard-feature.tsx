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
    "4LgHQhJpzM75o1DhYVay1NHTELM5EBbq6iD5rcpWkfnPFno7Z8a9zCXMKs2bvx6jzGbYJeh9oYVP1PrAcQQGNNnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uCgQHcRzneh2XsdKrpTMWgWHfnFcbxZP12ZLfE9RoRofY2QUmsV364VmKhjpxNL3AGeeQHELFKbVKkNCzvvctyR",
  "key1": "2dQMrJ61kCEv4ZLBL55YFcwArx7RWveneuE1tSv4e9aWeyKXedb1ZP6tZByM1zeDdZi2bMTNThKLKdEGorDjgwS8",
  "key2": "4uEvinRqBRgtN8nCz6HZmPqjvtV6wx3mDxsptipw6PVkChqkTetRu4FFddrPhuFHpqTvDS3ppxkJTRyrWmcJbAvQ",
  "key3": "24a937RzhCekBGTq4RkzaAk82PhkR4a5ULTHC65CtQuUBJA9sPf7zyrz12FnBDcCAxyRZKUKmtWJGP3nyeCk99kS",
  "key4": "EbaNupp43vMJE1kY1wkn7H2iFvEidh3gKedaxRFYWBX4LGBpQoeDHCEDZHwDBur9rSvdcTb3d8sSvwf3fQVXUxw",
  "key5": "5yMYHuHDHNVSELpR9U3yQtV1TeoTJ7qA2DKLUq6p1kL3qrfinC7eqhRwCVRrqxDvSimx9BusqraEyXwEjgBGDUNr",
  "key6": "56wWQ5WXTKXAqSJeJWc3kGcwmyBY5geeeahLcBcGEmSy93HVfrwqhjSYSanbxgLZrFAxxDQritBZWwbkgmkJ6n1f",
  "key7": "2jDHTJmsFtDqbWpLFC7iAar9PvwqS7rb6ACywS2YCyuBVU2qDuz5HNLF6zKKyocZrhRNPGPZtcmJ5JUZEbjEhNzV",
  "key8": "3wASRUMKAxzLiBXBDduHrgv6vRniQ4QJSaV9o12xTrBas6wA49CLQ8ApNc8DberbAFAedomj653tkjjmT44fcTCy",
  "key9": "2m68TYhyHGdZ1XUzfuR7SjVkdRYkgmPF1VZGnVNqMuDpoi3EJeBepESRYEYpKs1WWrDQJHC84keoKfHLYQZgiRCz",
  "key10": "XWT5UtUJgyPH8DYkD1DtPhvJrC5ojT2HLizRg5mVownDTq3djdCEbSfFX7hKDw3QXjhPyuha8LAfoRmrDGkHKqW",
  "key11": "AWB5op9cRDXHCupkXz5fSi1xScSX67iFLY5qDZkkngrR3vPwzUGcbXPXUCMsTLKtRw7Qbij6TL5g78VLkizxJxV",
  "key12": "63biqCiLeGKat1kHJ7f6gummxTKNdLamSimG95ZsazqSrti6Mng39zpmayXvYjsjSzWLHFUVxynsySQwshnzheBU",
  "key13": "5chKpUqWA93qmTgSfrhM1F62Ursc9AfjzdKP5Ski7R311KLrxxW1537XKhM2oyfNNTBq7CVd8nb7hSDyK474VgP7",
  "key14": "5f3hy94BYa8Ku3HUx75S1eTYUCR7viiocX4zZhfYKz2xTrfUKu6AX3fhogVRGxNjtRoEi89omRMGLoEZkh7Lvo3Y",
  "key15": "cVkVeSVsRZMnTJdubxk2FyUGFXy23oypjtWpPn5y8CDFsHRoMSruqN673bviZdPrtsaFoiy2MrkFPvNFWEiVjiM",
  "key16": "3QgzJu8KcTwBvzqikoHFJJHUmC2LoKyM4frtkzSh8y6HsNqNUNWtid1iPcXSKbVBx1g5LHUvSuWQrpWFTPGaCwBS",
  "key17": "57gx3PKDD6bvcXhVDegwJNhGoC8kNnbPU6r1j3aZ6kPhZBjK2s2RFekV3iXFE1XNkWVQWcCp5Joc6yUZaRJ4yF3w",
  "key18": "iSPsoej8tXCBuJeJRm4htE8uLPKGKNqkGsTXomm5zR7HCuNPqQVkMU1vud55Bkgu2vQHh46woqCmP9oA3A6nxGj",
  "key19": "2GU859JVrrs8WPYcewonPgxhHuTBGNYHYY6Ec1AHuq7MgDxQeh3Kkfse3r1xKgNRaQWHJbpxSwjts2vfDJJgGdY5",
  "key20": "4sUFs3rMC6jbgnJhWKy15E52WumGyKqKEVyZXAV7kwZoJsFpiGEnf3nhTBw6ndwxtYMKkxM7L7c6bs9j9vMNPAuN",
  "key21": "4h6oaBSKv26WE22ppUKTszbRWrKcNopUU8LMgbRTjvcuCFQZxg5ZbRX5vGWXuD5VeyoLuzbMmFw9WZpgo3PMLsUg",
  "key22": "452WMAHM9xYFXiQWVhz5H4eqApTgJr6GSe5CqNmdW8kdX3CEmBUJtRGd7sbdtSkiEzSnbFoGk25giAYmPT2fBNee",
  "key23": "3Kp2A7sM6iTAXGNUqu6xzpazVCoimaWZPX8kSrxYC4EJ7hv6TAvBz8mCWfkBHJn4mXCPTWM1ZBijMqzNWdpmccTj",
  "key24": "2TAEzZzst6LSePVCQH1F8q2ES7gZ5EetFYhcjAPfXqTyuCbxa4Su5KXp7t7zJLiNUjAjbvL5aFkqBEwcccGMCy25",
  "key25": "3KiTFhPj3km4m9MDvDxKerZWN9QqaC7PsFWmZM9cthKrQGXDEEr7FjteVQZsfBhEj5KUxbGgx2B6dcFz7YFSVr88"
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
