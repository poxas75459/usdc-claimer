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
    "ptu8HXKRVULsseuySXcPgNcse6FwighKQCsPHKzBHfSXZgE8wGjrCRaVhs6fwU1v62CAjg1zha7DbTjP4WG2qyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wF84sfQGjhLLwkCD6zhkys5ijVT5A7LzFyibmuc2fsC85m52CCChi2p2EDhZsyQ1YFWynDh3JmpDDBWg4mhpUGh",
  "key1": "3QXcQnr6sSfJ9DGThNGcpZ66NSy33KhnXUfaYcbJwN9qVya8v46Nb2dnEkH6TvgFbgNDqy512mL9MKNgSKZDGfuz",
  "key2": "4kuf3HTccjfTQtSDyTJBAiCPk3A61vGKP2GKxNfNtwwa9WMtgcLLy9EiRJSnMiSTuHijUE8vNKeDzxheqB7NoSdt",
  "key3": "3KH6bL3aQBJ2998M8KRz2BexQTqUp4nywEuGqccrMQ1H2CUCE6LshkQcr9x2BqYrvwgS9a5BUA4XUMZayT6e3uKt",
  "key4": "HCTzrLcR5NKGTsK5QGEnuMx9cdTiKPS545VzcpcBkrgemU2hp9qBJuoLGHbhnbQQjLtr6eT1esUW9T2ZSaXA7ng",
  "key5": "5eGZ5hapQCYVUySPLpHQCunJfobtCda4dJ6rqMD9kitd9sqRLwhqgbQRMUNzVUfvbs83o6nSAcr6pmsfbhvSkVff",
  "key6": "wkwRwKsYKzrbb64Gd3jHvMdjvKLqfLF9RiFXchDemFNNH9j77RttCCFcQPAKG5R151YFBzumT1e5NpddUZcHJZb",
  "key7": "3DrAZu8W6d9qJH9QwZcxfFTvL95mEyJ7g7AnNyu9tjsAPQ1tByJMWsUWfUPYTGo2mU71gB8hY5NpGLhqY5gX1Bg2",
  "key8": "2u8trmGvxbEdpxrAqtyR31UVV6YLP7qn9C3T6ejWuoNjBmwEQJRfhg2tny3QQ2Hg88RqbuZYDwoDSsP1nRMtE2MH",
  "key9": "3y4sPAmgjo9cbxX8Si2f29LufBxkSewS6GWPECzL2mNupAJhUBUXkTvDddLEe4dyespNZJM3UWzZp4KcETX7AAdK",
  "key10": "qN5WGJoiivyVoo5vFkZzW97txHoHkLSG4GFEA7HTsJkd4GFvvF7H65q7RtUQdv7AhMzB5GQfScv15YVaEFWNnzg",
  "key11": "3GhkpTKDGJRSW2bg1kmk68wwKDCcHz3FX6EmbqPbsSxYU4fFFQZVbGgnJ6EUWem21JMxYCbRQDAcEq4vn7DgnDb6",
  "key12": "3TKbumUGAcSS3WUU4vXyqrKxEdQ8gycKNjyYq7wvkrM5my2kcEQB88rMHN2oybYqAu86wQn2V5RYYLQwUW3Ja6xJ",
  "key13": "5cGC1vwHHHMMWzpn93iMeoudZsqgn2Atqsdxm6zBgec2cYJ4vwK5wD2bf2w13A3WHLfifsJf9nc3ZvszCjPjF9jp",
  "key14": "3oWFtdw9E2v1wnvxSpQZ2cosWa5X6jA4bRz3SzJX5toQqccFUEvD9WaU1tiaGrn7i1tC4buCXczjjDqQKYBT8fdp",
  "key15": "5qRoWnRyrfXcUijjUmhvNHhXCG5CbvfaejBnUSBXMzw5QeWeWz9YTcqQP7e88H1Cyo4Kdw3uzfjxYuwx7sTEbjCc",
  "key16": "4oq5qzWH1RsqAXT1me4gTYruFJMJRJe89TVVTURfgw7mvZbwtHL2ybdt8YM9zedVzUFG4eYDTbH1xTj37dmgfmgu",
  "key17": "3NhbBCBTZdKM7Kj6b9uX4C9ZuzGX5VL1DnZCreYHbP3ALS1smi84ZESfajHf1yJ99dhM8UcVweTuqN6xVmZF5ovQ",
  "key18": "eCokdshgP9hTp8juUkWLRZSvQmAiZXGcd7rj1xoy9j4R9eoeTdxfMeEL7isceiPgjar2GzeTxLqYMzXW7EdRADe",
  "key19": "4DJ6znstH7fMMHvUu5GGbVb8ewm1ou2XWrgbzsts6cvD3mGjMsdVFgWGeEBJ4Z6MwNB5mj3RJLdWfGEzSuX2nWN",
  "key20": "CMk5ZQgky3qCmBJmW8bdLLURv5SexbjUhHdJZvgM7RCwvMR6iwyA3Az75scsdyiUKFdTUvbUZSxYpPwFJnAc9Ar",
  "key21": "5GUrpFZfrFoiowv7GFv2MSu9D5g1GyxKbbqVmjTYMorJDMqgVoFAc442aioNh3FrJ5TnRMkQ7CqhX2q1Cc56zmwQ",
  "key22": "3SUWichHJNvAccNwT3eDKL63yDVdwsZHr4DdLdoAFyDP95Vc7DeUbbCwg14Eo9Qa9JRZQCTsRUuo46P1bbhkudfj",
  "key23": "5NkMYCpoG93mN2AJXGX43TyxHnc6qvfPiGszAKRDADEPiNHQj2KuJrrqZrTekeMNZR654XyhdpJPtQa4iWw79mKE",
  "key24": "4h3rcJAGtT5jnveMZ9n8ipmdsAWKrArxVsL9TXSt9wb8WT56afGDHk3Pdmd9EaFbwWNCchHfjWjd9K3xDAbvWAcE",
  "key25": "h6gegws8PXW7HGfzcfG6A9ZscnexmyJiQZ3sXpGnC6PwBqXF1mQnPgUVr1nZq7ADEPuhmvkcWoXHpebduKv44CW",
  "key26": "5d6E6aAn5XMr84fiKE9n1StrMwYDoFBLxqA31wUEujKQciNCK8U4GyKpGnppiCDSPhhX6Pe54mrK4pdchw7UpNU6",
  "key27": "4qfiPtMyLDiFbzeJ69U5a9aNAAo5E27QYuEfMtnHMZJKv5zihCrsyApVo8euduSoSTGHTTGaYRY1w4XAQQKfaMgr",
  "key28": "2AkzvAYheu62xskBqjbQ1pUWYm8bxKqihVhQnZvbGFcapbCjPWEtvoLtmtU7KnV3auz4DKSCnT7fKirgaCBP2KLF",
  "key29": "XEU9syMVLLkvdnZSuFG1vZeQAscMCQ9vNto2KsYNJmZiBCJvQXBLZGWsPugQJrZej5ahZ9tACc3ApepmTTkjeQZ",
  "key30": "5dNG5wLRdnDESC1ZthZe4LsK94RRsvfKU5Nw3tjsNDGZ5KpK6tWqzKydXE5P89TAZeks87hWzMo4h7eZ1BSNGmFx",
  "key31": "RrCh1kFdFkCxwG7LkGGY9FpJBSmFtT3kLGGrXPWFamUuSmYSnrSbDW47gSFnpv3vdVSmRaHg35beV76nPyot1MP",
  "key32": "2mg1XXisxUBRVTbUKRnMxbB6jbPM8rsp4YaaGLLr8EFHfSDbAB6QKg2cW2dSU1551CDa7aC8C3a5uZRM8zaDKA18",
  "key33": "55rzeThQodiKQuk4BJXLW6HJtVRho615nWiRyMjjfwADTgb2ymczw8oxbEUjBC24TfhVjNufQCsuMPGEbCLWY2qy",
  "key34": "4b6v54zR9wQ9d4sJQBzgL6iHvSPTVQEwTTbHTimooCnyG29cvHQruBgEHW7i3Mg3NWV4o9D7cT8UEVpWopKWkyF2",
  "key35": "4eoDD7uV9DDwMjAm8Dxx7TgungHknXZUSwJv3TB5ptRcXNDhwdoYn1jLbpEDTEPqk8twQXsZhixFsmgTMceHbVbN",
  "key36": "2xNrLPWhjbf7GCZFixqQdhE96q2k22S2PXbuBe8aHqtbycjbcWR2z3jEGHDReVM8UCzkoZiqudKztw7dRpRrHRSN",
  "key37": "5ktdvp6DVYuDvFNqSRKb6n7iNzkHzdRxCEoLhZkGsH2WgAWNgtSbd7nUhtQwsNhpba7Lo9XR6rvAjrph5ruV89vP",
  "key38": "2frhDLEuvXWfWXQDXvfJTQs97KxmYGE3jfagygZ5FmhVmhprYwz3i4GTeptW4ikzCkMaatfmjs5uLpztG6S3RMz5",
  "key39": "3799hVdLVV3PicRAMBBncDuqLWRo2g46aLjWLPVsvgdqtvBNyrhJpQRzq8gf1PkMepnVpZ2wagi2taq3PxQGuNaT",
  "key40": "4NR1K974R9CnszGQQD5PAnKWsCdxB4QimJJvnYfKs9YYe9zfcKtpW1MY7tfRbwug4veykAGRCbj1Ngx4xfVio1oU",
  "key41": "4KFzu4wj7hHDKqkpqQS2gWzJj5Qguy4S25jtnjoHVWf7kreG1BssNKUFs5K5NArHVaVULAjS2pEDhoyJ5UCEW7cF",
  "key42": "5XSDNo447MDyAu4eVCRrk2XJicjEPy8qUwGTMJhQyM6qjG7fm5rVRa87wS4qx5irJCMsHnt6kqRgiLugfmRDmZ28",
  "key43": "XDGDHrSnGBSd77ADYCM4dWxmtYoUWorNAQVHJT7rGYaWiZvpwWgMEdig7qtgfhytk8QjU7Qq96SBd89JRvpofBK",
  "key44": "5irhug73r6WLN9VJHbUZBXsUqn66wwavXpKTWiGo9NiU2Wb5S2ypUv9i14iYWVHi84c1BPR18pnS9s5GNCTqWVsu"
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
