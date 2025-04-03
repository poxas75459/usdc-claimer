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
    "44v7u6umr3nXKsrrAVWTegZJQ6SbJP8nDENzB7a43V1hEmEkydu46YP4q148uHk8z5VMiV4FYsG8HdVguXCbFbcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZgqBDMhGbwKLR5MyM2ceNvc4WijvWSVQ591fL8LYrWnKehwN51qrsWfrNs4DbvMnzq4mV2nHgevSUvSZ8BmFDYL",
  "key1": "3zUNpYUQPkSYaccZXsbNPDDVEjRM6VXXuWJzd7fq51aJTJEkrdrSjX3L7okfJc9kg7wJ14wY8kzjbWP7SJ4hiL2n",
  "key2": "4crQqEZ89WdvrzgHCAWvH5mN94YsXwzyrAWGM9hb3sJduNnJJZ1XCBtMZov5Z2PnVsC5WD27whAshsRiPzFDUyWF",
  "key3": "5FANs8n34xjhapccXRJwHL2QMsE7Ar8JQ8ZUFGDzkjnhv5PsGbBdaVcNQpENJSggruUZUbtPMKCthwiXp63mhPaU",
  "key4": "3895VZmpNfAE4RFSnJukdRP28nMzsMNxq9gC7ATQoi6jfhSP2taSL1X5gTJdTFHzi1D5iFBaFabrLdpdjt1DGnXh",
  "key5": "4pWjBb4aB7H6kkWHpY5vT7xsKH2ABuKtieGQf6qXrApFRxHjmr6qYPCDSmWyxDWQvKXnpcVjjqrqAbBWhyjCKqEy",
  "key6": "38haij4Q7XQx39kW2pStDtFqq8xuW7cgLFqPj3WWMjwayXYcii1ruBnFJfdbafngtVmNj5GDAurzpNB5Cqxj11jg",
  "key7": "3NftR4zVq8MT5cc2kzTuHKK61vx96s6BryWyojmp9EzVmVWVEvmvxQ8k7WTbquzb9hQmmc83abthzeb5WJ8yJxj8",
  "key8": "dNGWCPTJAuxSstquVL2L2qQTmpzZ9oEV99kBUbDukGwapbxxwvwKXPTCbS6MYQAgR9VRYniZz6sb7dp5i3oAEgT",
  "key9": "5eQJVpixJYVZj58iqwpYNDNuNTQcM4TZ8b4hmTm8DYUHBsRGbLh9zY2oTFC7P1N61Ux6BA2bikcZYeLY7cAWc2ZA",
  "key10": "4MVwknCZX1BZqFyJFoar3CBP7sKrPRKgtmh6KN3rRQNic2SSC4oS3fb6crJKbE64zmyvrPh3xLMm1PTFDE4CKpRZ",
  "key11": "2SWRicgeuuWFM5qYoEfRvPr6LxLCdB6HeeV956bvBiG9rW21Tp2tNyDHAuP5KgNYCpedAkt6CezEwtdhc3VMndwt",
  "key12": "xSD5oLzXLNv7acFLbjLZ1pywvdpSAwp6MYrGvnCnhziLz4M6JPGGzoYH5c1Vn6SsR3YQGXYK18XeHcuqxDXsTnW",
  "key13": "4NFxCMmgHDrpomTUnPsZp5T1KYAVyJWvm5Z3pNpjLTnnctZbH2FkagdPGLpaN3Ce9xDNn7TyNqZdrzdxbp5hSLDe",
  "key14": "4i2JiKDkSqoHoRVW3pNFJiud1Vi3kLrkaHvjmVePDxEcbM1KNWcXKQGsnWMYxGQEDPr7xyHjQWePRgS6DPJyzVry",
  "key15": "4ztiTJSSSPZHXesLt5Njj4VeqSMCYAKnEoQb65ntqVEf6ypSp9XeTGhiHT9kG2Bk6s7wapwxx9wfmG6Npw7dFeXm",
  "key16": "2tY8qbEYoknatLbWVZrQr3pDHxNT3EJd9BKeUPyPG3z3mM7BpwntRg8w1YwoaquCGNuzbMGWpzkbAEFqfVCEzKxv",
  "key17": "4f6iNx6QZeNuwAsSfAYLKxkRxEGSkmwKJ4EaNK7nzknSLtHdDNz95HCjYGKyQnT6vktmHzLkdfCcSZJ9ozSurQx9",
  "key18": "2MXb2KN5K8gNwLmUA2wLUDZKptoMEK9jyqFvxipjug2bgrH78TG9BFM4iBV8kBUpoiZPJG5Uxcmj1nfw9DZnotqG",
  "key19": "Poh5oQ2NpuyK2uwFmet7jxxj98eY3vHFLsMbpjEPWbfxXFcgYK1hEt99Me9GmBFtHdueUMeNqns1JzdzZidge1s",
  "key20": "4rxfMa4qidz2PX4WyttNHp5MMwVQqzA4s2heqEesRoQwF2CZCSJ7yYrM9CtKCZ9gtHyPjpR7Zr4Kdt2xwbynyaqU",
  "key21": "5Eamr1yTjDZ1eZdAMFmgc5QwVx15ykRYfk4rRceaw18rynLfJz3GpJy61megQ6LiLcror9NjMkgugAQpV6FBr4vD",
  "key22": "2UkPURWha9CoTEm1mUYToBrAYYu9TVAAEwohRMtUD4krxrFfrFPQqzMfdQCAc4dqWcds3xEvvpCGbkMQb9jRbH1S",
  "key23": "CArnZ9zF6rBsKRD2AjK4pxHUHHLAxcCas82EZjbGs21FiqKbwoSuHMNxtbsJKk7reeAX9s6gygJXsUtc2wioxb7",
  "key24": "2dRJfhjbP2gbLHBqiqi587KVQQ15wz8hYbirUkCHgU36NDF7NXhBdYyNWkEZx83VH5M5ygGhvvWtaZCNbSE3Kn3Y",
  "key25": "y9Vx36dwdhHcL4NBLzogLhTchAo464cGmFGynmUYUAUib8zh9Pg5PaswcFaMEHUfajJVCXSdLjYn3NXURqNjZut",
  "key26": "2sRuMHp5eFay4BY3Z3yN7x5BG9Lj4XiLztsKd1N5uxpbLbDjq87mv16iaWna1QrRw5jJSuFHfSKU5QzPtRDfvSFF",
  "key27": "2NcWw96vHAQafgBB9fJzwu8EoQQm5sdb6X2ea4boSkJuWdm2y46N4zEEzo3TcFdBfwNbB5pzxSPD9AQUB1qYMrPB",
  "key28": "3iaCi5MvU2VogBjCcGpFQBfcjzExkqf8dGEcVRmKcp5d4efDP6nheiVDQusLs11PfNsem39tCuqzpX9cC5WnzDzx",
  "key29": "4EmGjnrvfD9v7UwHh9pGyYfR2qKsibPdbDjn4EESNHKfWBcJn7d3z5UGWFT81d1bcwVrtvdgYHErtEokJ8W1dyp8",
  "key30": "3QPWrKpdaWgVsR6GHrdHRfHDCkjiUY6DLuqNYUsc3p6yoEAKMwgLhFAF487Z2ddNwz6cfKqgiQL2jX4cac1J5hAm"
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
