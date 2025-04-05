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
    "2yRSx19BEfQdHgKghnmZXCSfacux7PFo8m43tqkgBnJnEUjHZ1phdgsvPM2ibKd3faVwutNxe6KNxjruW24YTrww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v7ovpGuCrxfQnw18ML2Qo5vDyGT8mfFoAbRW5DyQCvnxKoNw5LSa3DhWpHcT4BAHK3Dt2EkmFUox7TT9WbaFJsM",
  "key1": "4iPV12JoajTYwzAobqqMnostjsAU4UazBvT2h7ycdwoERi26JXJ6E89v34ZX8HH7REJiQe6WqppCVoFMxoFJKdmD",
  "key2": "3KHamyfFjetQU4KTmxwZHa5Tjz5mvHFjUUVJpTA2KCivGVu6wwxFeB3Vtj3kUfXUiL6Nnwn1tuy2qmyrcRx3ypgD",
  "key3": "5PCZrZfD8cnAt1gfkUUt6vcNttKE4Q7esFPxNsERcFLar1uhKNSa3Yu8wBPzhmc9aDUtakHced4poEcKMTL7KeqW",
  "key4": "5bKydpeUgg4DZaXMKmJZwdLkGeaptcyssz1kfyYiyaBkxLYTFnVf7T17Q4D3LuHSfKBiRgzoke317sa5UJP53WL2",
  "key5": "3dszLXHTuk5mVXoRoUwwow6jejCtC8frFs224Q1Q4kHyZbsmdPb833VKPQYhHEc1xBCx1LtvKFM5moD9dYvPku3u",
  "key6": "2i9PEd7YeUhsSfY8cFMo5N8ZWBbci7tC7vDpFdqgcbmSWTHajjcpCDcVEPpP84VNDUvL4qSwMPZvmbnZ7LWFkWvS",
  "key7": "2UTVYgewBFhfcvfrA7Bfo2J4oxa6aagJBatmBccDjd4MBDCgGZe6NrmiVgArym2WXFG2rgvNpj8ot8ixDzJmR4as",
  "key8": "49czqdQjcr1saCUXUjDJqsRjuUYKjEA9NqpjQVepVjR1S4ryKKChFn1fJfWSNZgFRpX5BeZAYrtJ39RtkuxHZE1h",
  "key9": "5ZzfG9TCgZXUyMFkwaM9svPM3Bs638aKcgfK2kPizjRrq8MKCf99pDM64Np4yVnXZ7fFB9DQLnGdwQPL9Mb42fCa",
  "key10": "4FPWqhkPaoLiFAkqChp3GX33YpfvNgZcLANcKKBEC4rkgoyayzJAJ31uvi71N8gANS9kD2LbNvU7A7KwdhUDNbLH",
  "key11": "3Z9mGwHytF1bSsBkU4X3mPq1SgdxPFyg2jzV5ypM5Krv8ofcQeQ6CSGr6iznj62xQa7xutdUcBt3f5is1YZJbrz1",
  "key12": "2HJruEAie5g8eMy1saPRY3Ahh31oCEzLvqRuyxwm3tnBq4fGyh7fA73M6nkfwDucxgY7ameXeT5sAtCZqFwsFL46",
  "key13": "3Vjwha9vDJoQVGPHAYow1PyyS2BtHjSBBpfNUJ2VG1w9jwcgHvjDxWbS6AFK9Cy15BHsdjxU8fBqmhas3wsNLHEq",
  "key14": "4MQ6RnYmsar8pYASxt6zN1WcyZdvQwb3YdjsSVFWLjiJevKBC8mZeY9yKqYNdeojtACoTUCPGsZWML5YonBBqMWK",
  "key15": "5qJJvXi6NPBokSLFSSS8DG8qodCPNAcCsimoVitrATPU2BmBfg8WD9djV9zqR2VEGc5XbcJ9qFXiFBTTKQbLDmLR",
  "key16": "5stZgtSr4aUHWH19jb1SGxkuL9hQNFeTFSuwt7t6MLnB1ZVQbf2s2za6F1cd7LMuqNZ1smQk6mBwhGfuYt61yBaH",
  "key17": "2q5McL6DvYek13xkeTwLujh6NZ9hwyPaR4JjWMz71q3BRXuJFoXz8krxoqVod7CFCQgHJrr6Qi1ATR23daJXBiNB",
  "key18": "2A5R9RFvPyt8b3GTTAiaM7CShEKygLZm88VDAee1x3PZT6WaPQLpgTBEUpBXHe5bAcRhS5DSHRcmd4meQenXUKyX",
  "key19": "125Aaf9kZVVJeJAwNt9p8eK4oNFL9cwDQ5a7qcyj9keL6oY6bGciT4b7hNJS7JGM6nyRqxH1S5ThXAJXHP1chayr",
  "key20": "4jb9u38beSoBahQqet6yVzQCMZoq4S6PprpPA6UFmkzdp6jEXuB5YGr35ZMbaGZbJWszbALguCh1MeiUmSen76xz",
  "key21": "2Qo276vo6D5dwDtAKc72VNKCx2GmNT849Z6ogWwmjuHq6peqSidYPTn1HQJoMVAJoNUQCpEjLKm2LnYdHwiEs8uV",
  "key22": "2PvUZBFwwZHwNNsiEiiwug4ykz3RC4aRbxHbY4MfUnEWS3zDuCxi6cWbJ1B6e4YBAZ6kNUnQa15Ygtxxwke5Q3jr",
  "key23": "hE2Nnym5pBhPqxwqWe8tHV5VRGh7SNuLohGQW8iPxLJ4Yn8DcstXsua4tYpFc8uCUw7GVk2uG95HJdrEnDg3RYU",
  "key24": "Q4nhut3RRfWr6QVVtENxU7ztaSKsKk1Xo5RTSbFtrm1ZokRuxQcB2cp8JrRJxpozTKYGh8bHs4hvDScVLgwr2ER",
  "key25": "3pyEdhxurmFgXBgsfY7i5zxUzhbU1UrSxTWJSXNZLjLH2M51Joias9wq312P4Za5nNyUHtpxW6MgxkiM2X4Qy6Rg",
  "key26": "8mjqWrf6qEbAZGggSUafom7HpnSEPwBZN4AUGBYwCvpn9HmUiLUjbtFiscCkLavFWfXz8MK7CUAnLJz7U1PrTNB",
  "key27": "nR6xCUZM9yc6YHYvVbe8VyDitPpyBrJxFcMW1j1NNLSFgb1h2DeVymDgGwBkf7YkudvwF36oV91XyV7piCRrV7W",
  "key28": "Bsy1iTLGRZT9G8u7B4iUtELyiubGa5yCB8NNGAwXceTZmML9RRsFFN3F6RmkVBZfLvPhoGPNAA8rSPvvpbrsguG",
  "key29": "q3ArhK9tVNHVUYrSY3154eFARVVURMW1Sp9eEapuYS51DhQLeoxoaxf2CncHDNVcNdFSNm9niBX39VzpB4jvuah"
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
