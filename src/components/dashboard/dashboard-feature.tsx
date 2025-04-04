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
    "3qGsBVchsDA4H9UxbrPxG4zg5doqGXMnwQMKbZJ2996tN413g4e2HfJmEUoMRgxKqvMx5Rn6y8CwhFxeP8SDab6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZF2ENXeB3ukqh66dpkbLj8t2ZjmvF6bjqG1E3Eiu2VuyrY4F9vLWx7J6y558CfR2VgnhST7nEDm97EhHMTsqUpY",
  "key1": "3YfbPrhcGyDyE4YFJuGbVdmpmMh4fe2nvpirNaQ8kcpZpxYAYp9H567X2Zo7oa8gXDqxbnPt2HenjcCX9fPYgjSS",
  "key2": "2gcCBKSSHuK4CvPu6QwFyzcnU8nBHa7bz7Vc7EgykZoLiMDRQWcR4uMB2FRVwQsdtiNdwQ7fAEkUuUoxrK1fD6pV",
  "key3": "5JYn4HsfLpKAmiTbAsZikEiSBvtCD7BdhVg1g7Buv4ZWcrrjEpEax98B2upVGi4MwoQQvPEoa1L27huG9QscZ2kb",
  "key4": "5GH7xh7VrfWQLtYKnzqYy8tTFQrNjfFDmSfHuFFN15BsiNWZAfdWSAiKHYuejoFoNDmQBtdpYhKUqNWFTYXFvGUv",
  "key5": "4f6MTtADNTUuVPaE4ifaN8MYHcfNFdh8X4tSWUwn76juUtA4bBZprG8dEwYVp5G2nU7LMFFxUtqbxwEcTN9KuFje",
  "key6": "22KVUJZz8P9jmfrA1MwuM7uy8vYaVFCsGPd7APpW35r2RwQSRQVCp2ttdyVeLnUVBWyJ17fZpXhmSppXnfuLjLy5",
  "key7": "5ZhsEzDp91Jqh2gcKakACUZ6SauMSMTdzFcxFEzxmwLmw7xWq8hbSECtBuYrTP4kwSPdPEPqu5viVy3WgjM5Ncgr",
  "key8": "5daCRWgT2rFtiBubwLUKQnW2qa61PoRrqojfDtbjye8BuHcDe9K7CVyr6Gy8peRFrtw6hF83Sdahpr7T9dEQ1yh5",
  "key9": "41ttBXEQ2A81rwdX6omnoevcK8Vt3KNZ2UoN1DB8FRHhKtJUHEBU8TDnEHgH5obqbuDC3e5t38ZgUPwwqBA3e9fA",
  "key10": "2Rj8amkVNw6MPgRSRKCGwyNypw4Cqe3noy432C2pYick6dgnR79wTaZqxiVVaxNB2UGpD4WSrSYHxU8GeGmobctt",
  "key11": "2G4PCbZDk82VF6tw9g82QYo2ewzQkbuGcxajsffFj5FUcud5BXNnvTHhw4X6cvuUYkzDn96uiJz227ygmM85wxRx",
  "key12": "RvbFqV2igaj4eRDjpCLJktBLxaBBsj1cRWV8uB3wGAF2wpFi1j64wkoCmvgofkuFNoscf75PcK7rk1x4PcNd7qB",
  "key13": "39jEGpkyVFmqZcpntZk8fGJk3p8wuEGY63eLz1FXHDWYQcdH9x7MiSdZef6SoBBebUgDetQHNVQ2J9DZQXKv3NoQ",
  "key14": "6aKKuBcbRhKH8dHDPTU66iXXFbSLvXhYLKocYYJTSeh5GNvoVdXDTTBeMtJiaJd1iLvWzhz6H8Qb1g74ocTkKhw",
  "key15": "XJ6KS53nhJ7atyp7MaydyRyk9zzQXnzRPkmFK7gypsi3j9DXaPEnvPsE5jSXVny4PmreM9YTaMSXrqEaose3zmC",
  "key16": "5bBSPopmqkE6wXbe16PRa9NqewM5mHjnAmfidTK2Rub2x3KeGRUTaJ3zoAcBfcoccr1CKNBppzmhwEELW48eL6Mj",
  "key17": "2wLkAXBAm4D92HnyouQC1CWJRgA8iSbqQ2jviUUr8tjJpAP3WxM5STvHYG5AU7hCreKq7UquqTMe2LWz7go2JTRx",
  "key18": "2PtQbHFKvxxDwEvo7BosTg7iq1PJ4nen5nMiG2redQBSzzXtub6kFGica81aVFDCL5ebbF1jedwaNu6zApE2cCJ5",
  "key19": "3sgAkT5Jqr2wkVB4MHfDXexRj3MHaLWWq2kpUxbjdurDXojJNHPZzBZszqVMgWNw1J2wpnWAVGxWpfPxEmwyEk7p",
  "key20": "4FCYiCH7vtFthNe1idckpkH7a2yuVb9aTDYjcX55NqyUgQ6QqxjgM8FS7qFGsfYRQfjMxxiUgShpX2MHr4iqZeWy",
  "key21": "5PRezsDayTF7SvTitsHzhthbjkuxqBcjFfCbxjSdMDEbPT4tUTvJiEBH9J61UeX2BEAkWGxYgFastrY5qvp6iQLS",
  "key22": "2wcmzJdqSKmZikP7Z88bzEp79ip8YePqxi1pMhtTqmQco58Azzxkn5cWWmsxKgnvBoMQWpMU6kPrARmGuFFX1vVb",
  "key23": "R7vRPok4Rcf9Z5oHuA1xH9mRLqbZwpAHEu43p39z2Vdx4Yr3x2DMHQcBaomKwJkAp9bEhfLNcchpDdMpfa2nagQ",
  "key24": "5TsxmYmwDDeSrEfpAdbGdgk7UbovHaNgkxGHbZpATuZq24densfoTEGtVihQLHuwTEnfe2AJW4aw3JzrkraTYe2Z",
  "key25": "2H4Daa7vxeYcNmyGEcU1BwjhjBZcj2aFxK7GUiTD9xWYKfBkoDyieGNzTaW93JTSjFoNuk23DNVfjQ53ES3bqt5v",
  "key26": "4ZaZBuKdPZP5cQC3xk1w3hd2WH5JrkwegnCTgPPWFiTMiyaurV7sspYxfLez4zPEYtjGGW6yLuEPLhyjPxGotUXH",
  "key27": "2wU5Hjx3fPBoZ6eQnBQRvgGzKdRje1J1RHjJcJ7ZCBWrF9XAp4jaFu2j5ecM6Hqu3WH1LC6vV4HHQmPuEdhwDZcK",
  "key28": "3SiVCsDT9uBmMmBbpxZPvJVvJkgASR7ZKtxurrSJcC6YPT4N7vTG5fMsN2jKYD5idpJ4ZUTUgZWtRmi81vpzFL9y",
  "key29": "4NGf3qycpWmbcwhwKPi6r9Lof93Mb31G9x6Kvm7BBjvkACxLKQdgjrq5wT1BnujZG9J7PvZvw8AeDFLNDpBYVe61",
  "key30": "4sDdQPzBdpN8bb9FZrpMFXxDpZie3hi6GNSLyouSViUxbx9dm2w11yfCwNX2rtBfXkqZsa1vwsBL4ZdC81gBLeDf",
  "key31": "J7xAy18XcBDy6pd8B62FT9Pt273vxBCqBPdUkxNR6hErggD2TGh7CvGUWL1Gdz2QZkKhwsY45f3GbsoPdoLmnRt",
  "key32": "3pRJYD1ipq6QotdUtQYPAxwJvscyzyVGw8FL62tZJFgKbi5rFnwYUo8sYAfFubHhxPKZL4mDeGFtJtyDydzmHCfS",
  "key33": "4FZP893TAbdPBL8sn5F2bmFmx5UYJPFf9ADhEVKjLxHPyucH7J8c2SDVhGWXD1549sJqye3y1tARDVwEdHHHZRFD",
  "key34": "5bpQM6NJG3GwxwjcnguCE1uPwHcuaZv8iT9C7XkQYMvWPxaQdgEreeJVyVBPSGFy66BD2WhaiL2oYqqyCHucnF3Z",
  "key35": "3KhA5jf8fcNfg5nMsTezRrDxhgoLyYFyQCQu3dw6PVUWz4E5yoSSejBE1p7zyJpdeHANjDMBDZ6i758U998DyaRB"
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
