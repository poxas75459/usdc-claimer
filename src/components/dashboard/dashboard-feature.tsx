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
    "3qo68dWrxjyPrKy29Nx3Gw4Y8dpRanKF89GXFSLLMkGdZyM5PbNknXaGTiXAp8RSdadQNEAPuXmxssTfuH7pTvqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3va2WXZLNqakSecNk2wGAxreUFg9pB32aE5H7QmRtwpYXpn57BUmQ9T4UDtJR24yzsyZX5JnHZscq2N2parDTXXy",
  "key1": "493aceug83nkrdRdUDXLDYiGBK1jQivmTn1RvkfEsjZNvNkwsNRGe9tMfpuy9yxWtpu95HYbi5WcnRT2QEFrFZz6",
  "key2": "5Prn6wP9mv39XrpLbfSgqs7z7ocwPiNdLMSVXCbnDWubwA2D8cd37BDZ1VgaGqAqb9VkJxDgMqRHmmnodGxVqmmW",
  "key3": "2PzATjfvjTMXbVXMd17yP7ZkizTwB72pMN14hHqxSJoYKJ3hhf6B9qrxhSYnWWamwPWpVgQP6w694fN7KVQCPAng",
  "key4": "3VNi3e4Zf3ymjfHRjYBfEcyPkBuwsRMoEtWrJegg2VM6UX96sfDK9CFVUdNY8cyLB6CxC1yzKoyA2s1WfsuAXcjg",
  "key5": "4rtPfJQvN1oXscDZsEoTjRx91Fs3dDQS5WMQDx4HwQmseg6Apkn2bakv2d5i6thBw5xfgzJHnEiNP5BC2MTVzpzH",
  "key6": "2GwLNFjLbFwak5g4uErQjvoaRJgyf8f8DikeHQT5oLgtUnLFkZ7o84k9U15FMchdeuffJV3pZEG5yBgLNmkrfNSX",
  "key7": "21jWmf5ug7qoigaN6spau4rW5RxiAGBinp5Sx3VJU4u8aoeUe5beM8k2xA47pZLWpQYenRojK31GNwgVHYMCwQQo",
  "key8": "23meetgVGWruaPTYZZH4kPxm9VR5P2sdfWAFonAjdLPC42zBh7vy94MozYEqDtSqtz1Bie6vUU7Po15Cgdkvss5a",
  "key9": "LATQCamy7Sw5E9sLX2aAmyhxGZvAAfgGtJRUFLExF235yWzaefcRAJ4a2Qpx2ZJkERz8s5qqJCUuW4FwmfmAYaN",
  "key10": "3DnH5RMTK6gt5sURNLvbyRFJ4UwiJqtUzpXDpWgCUEBA8K1VkT2bzPgSVXeeufvJBQuufw1eTwLzf1HQxUW5FJ56",
  "key11": "5sBgJVpCmwRxXdBVJ1YTSRaAn94uh2W6G1fsYRQzw8skc4x7sXQCv7HNVJ65vpUdNwp2Q2AqAZ6eNxZdNRfJX82t",
  "key12": "5SbGUuZmqqNRkMYvdU7a7BoqywFEfyohhqyE8enNswC8KWnDKzWJmPGq7CErG8CtQsZymFapfBpNWbGmvs9qKvja",
  "key13": "51gGH6ZspmEoDZHxAtJWJU7GeFqJJv9LGWWxxTphq1SV9HYmLEpStjnkAMCDQc5Kk4fm8VXuHNpc1ECgmsduvgvL",
  "key14": "eqAqGMV8fKvYS5zZfvxGbEgKxmNqz5APW5ujx8nxAadoWM8ERHCKw8hgW4PW7ghx4EY6ghA6vSVnNE9C8hFBDm6",
  "key15": "2Yqi9np1oX928Kkk9Mkgceb1mzcaEv7pgJbpbysZbK8k6H5A7TzFLmd7iBV397os85ZfA26CyFjFZ3JWN8GP4Wwp",
  "key16": "3x4UjLJvvTKE1Z16egrMUanJCgeVGNqbmAqyA1PR76PwnyPUne5JN7CfC8DeZyHxdUjptA3Ur533w6qf1D7TftvU",
  "key17": "3yDqMB3qsWM4yrzSWfHVSN1piMNtHEhga3o57FksttYUezEHoncVkf3XwRq7czFpzdcX3KTZnDWL5C42Ktp3ByWw",
  "key18": "45jLjZhwkf9HDiq7SixKBbS7xVUuE21QrTnzv2m5zAWP8NrH9M4MsRmBNGEmMm2MFRgKWLta7KiNd6nrDmtmMhtS",
  "key19": "4H3kotUkRzXfgSUKqMS8EWC9igUJj7LnSRP7QfdqshCejjSBLeR8QurzAJ26MxS9B1asuESago8gy3M7va97VebU",
  "key20": "2xrj46cPDLfUQcKZnPfKx4w6NG2BRu1sYBP9jhjhYHkw8ooTo8ak4yYwABo8WNS36AkMyVGNwnUjDGN7MfyNrqxh",
  "key21": "5dt3AMQ3y4Kf1XbzCaqhxfuHG6S27BRiY4Ur7MHP25fko87HDPYRagL3nPY9SytzfJeHWLN4Gi2QDHMeFzXUf9HJ",
  "key22": "351MkyjZrsTzoYx5igiGVkYmgpHbCou6USV72rgvYJ1poBhhjZWK3PB3yHqMdMfV9ApomrZaXDSLsYPLWmrTPFM",
  "key23": "3HSN4z4hMGeZ3fnDxTWKNiwbpho15Dcwpu9qqzxdWs4WgTurAdTmWuuAMXTGcy3kocv5avdWvBVoRdKcfCi79eRR",
  "key24": "RqXKBiQqf64js4eycvVN2mCJ56QY5so3urRbYRxz8iVGZLLJEM4GnALKBuAvRR12P6gES6MkMa4hAWHpuoEgWed",
  "key25": "2qadTcsPTyMcaH3fJWCo5fD4JMPsLYw7vyUqVk9UWbLngsAzhTXuTjbWifWgg6aQcLAKmJQ83CsdvSn7sSALbCsj",
  "key26": "z6FUA4aknP7zaKBtJGPi7sjgnS2i5etJbs8JiSt43MX41gk5XAA3sTRnNJKYiAqhuHGuwBdHgAzMf3PERtYw6ez",
  "key27": "4vd2ovoasj8BDuqxNNWELmYqcSMWB3GAZBkveAyUoUvXT2PQkH22E3QwmfSTMwfQx9obqLJ31EvqR8mSTu74baP5",
  "key28": "PpQaQc4B7LG8WGvYQie5veC96NB4fkxANn2mNbHBRCh51FJdVxB5rDUPH91tHq4cKn7UxHDvZmMMgvkmjNYraCb",
  "key29": "2iN3Tq2SZpapq4aBKwhWBbwVCLW9PqhsY7s3R88wUMCPtXCLZe7uFkNDgwMzj1neDZGHbfh2VFMThc1JjcHqkxak",
  "key30": "4AAt8VGAmwEME5PVMJWFEgrxsiFeTGCe5CNe8CGNh772JQkzdL3cmKkbENBTiRRL69XjYkuoBUT4aHaBSnoZyBeN",
  "key31": "3Q5pYhK36VzhPiRxx6vKuFVyysByAs4EBSJZ6mtWhVSZdZts7b1gch8eJXS1pG3XfwrfEUBaKiTW4pPQRPLZbrwU"
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
