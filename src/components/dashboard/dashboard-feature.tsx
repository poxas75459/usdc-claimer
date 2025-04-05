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
    "icrzdLrFLyWwpTStPiiZEqAkAJAmjNJZ3aGTBFJrgjme88zsFWvgPQvRCscbrJw6uVX5bBkmz8Ms2gFTP6eFW2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ppkT1GbrH854mtNvFDonixQVNSdVyUEuVovhUJMeU6frimw7D8dkf89Aoby3ipBjYPv2nA2CjdRjbY4kJwJTieF",
  "key1": "5eMppipRyjjJyxw7ou391FhPg1LdR1RyT4v53orzb9jGsTzAC1t2wFYmbbNPCcUyc2zhVkNjeBwJ51S6EjtEd3Dw",
  "key2": "3XHcf8x4zoGFrETnHsPSDZbJ4SDxswx5gbi5WpEAJicemfFvqpuvrnmyDvE2PnKFDWq6pvFN4rLUn6ZDJnD4hU5w",
  "key3": "31Qw6Xn3H6jmLf1ffTYsHg8ZdkY7HNameKL4pbxyrbraF9Z86tApUdx1cuB6Y5nHXbRhrsScAod8muthiKHf9pgM",
  "key4": "3Mcg3QdiJvZwJW5cLAhRXJwDmDec6wFMNEEc9CCm1er4qQLk8q6tgHAvpduAXYt1StjbbVgGCvBUyTgTNA1ChrL6",
  "key5": "WwdN2hSPWYC2PMGL3tH5TQeMSvJB99q6hasSUNpDiDX8sjzRmswm6wM95HdctZaTcwHXn9VAez6NZfwCsx6UsGp",
  "key6": "58iAhADVqN3iL2BMFgPDqY8ZaLy8jrs5aJWrcKGVpWhHfEdRpDc3VixoVT4MKPHdvc2R3NaxphknnYC89CbpD2SM",
  "key7": "5fQW7zvqH6w4cfBeWEo35pNLh2gYjMQUzogFQKA3jLRnFYZuU98At6xv19AJyZx5DYmfNJ7CVrNVfsiQ2jsxeXKi",
  "key8": "4FruXbwfmUUCRGYKmeGTrKhEasu4J9QoHdgvAxgcz57z2ULT1nYZvaqcAshB7hDD9FziBjReNny6EVjr5QdXYdGN",
  "key9": "5wtDewpqpZxoGCfz4yhEB48ymcN9hUXpcqJKpUiTbWWh2tXft6Sh6VCQw3CbwZak7Djp5doiRDpm2vuo7ekixax1",
  "key10": "62A6uKoKb8EjVq2oz36sBHWSQbQSFigbzesJLpEzf91hq62oDiaZ7ziZnXsJBdbkwUbDYux5FEXxz9entZ48F3y8",
  "key11": "3bmSXQ5KqfYRbUQHYCdBgp58QzMcVubg2eF7vfSxAdMc6jFo5xaMrkjirxVx63RdYtG6dQCyEaQp8Ay21YuAK1Mw",
  "key12": "2RNXtuPMHAXAHYVkYuxig5GpHfgmbXihNsYCHpTGRwZ8xVCweQwocruuAsmdFMzV2ZjBBHYY1JWCaHFohBcsYcwR",
  "key13": "4FuL2gYF8QBDRQmpCKikzdRYaJdcaY1XAdxm1yq3kXAqcae3gSk4YHt4otkzjDQtZckMAoqjpWP3eWh4aZi3ncpc",
  "key14": "c4Y2Sy5CnW2yAxR4VUnvz54yiHTPcgzbwTsbpphmQGdkyFbi29fCoBmVxznzYy72TtWWXvVMUZT1d3gfzaBqpGX",
  "key15": "L4HKZreehyPNiSmVB3fmpT95nbhAht99vATw1CVrZ4TWTfaw91zKxD74gwKiLKY6Z14GdBBGyX1y4BN5Xn8LnGR",
  "key16": "4iGnB5C6DEhPm4UvH4x4gPstrJtyu2gArYmsoHpHMHSfUJhNb26cbmMWHchvfjjv9NNuVMgcCVd4mwkwWJmPK1NF",
  "key17": "3fzBXjfjaYsiJMhqo6szk3S3Vukn3ws1yzeSecmPeuVmK13EFmrxKLHkeptiiHa5vNFB9hANfNnMLAhJCWuDRe3e",
  "key18": "3WTD5QwkGEBSWp3xYt8oR5HUEuAavmsg4CoZ44AZq6txsEuYwH1SDFse9b6dKTSaVUcmHiErFE33jguFbBiiVLcf",
  "key19": "65vKuNhziZYpUd8k8DwpT9XmokAvdvNdF4Ci5HqReN5DLahCxP4L9Bz1cUst43EugmDGEUrrvVhvBvXeR8HcJ884",
  "key20": "27iSQdbbogXZ7z3dWbahSepPq9UPhFrfSDmhEV7TzFex8646FPHxx9jkVvj4z2k9iqUCVYajiALLZuxWWik8gTCq",
  "key21": "3UtMPadvXTCy1okFtbN8KJdbVFDERq3jREkc6fRd7yW32thzR7qGj7WSV4tcjDeT6e2b6ypjkKQH7D6YynSX9Ptv",
  "key22": "XZ4MSuUCQeZG1f6jhJF9rGhcUqfjidj5KUsXQVV8499uT3CkA9GKMsyezc2VBxcceP5XfR4rN5UU9m2UaHqhzya",
  "key23": "sQiRSJ5Jtc9CH96e5AkbCJPNKfn96rGYh9buqrtoHTu37VXHNSfWWNjV6miXm9Kr7TcDKMdgTVRZisDFYLwugpb",
  "key24": "3G8SgFmYQ7Uu97Yk869jf8k44vb9C84PgVCYJX7LGtGuFbobYcZGJDWxaScG8QNAULwcSJ8ThxPZP5MHdhGykcc2",
  "key25": "EeXoQ64VDUPsTej9iWZKEKCWPwRKrhVtJXE6LoemRAfZA3G2pod6rfno9H85McxSANzkYrDLo9FPQRTYXgzB3dN",
  "key26": "Gy2VVzpAGrdWtJfy4MskEpKdVSX6Vwzq92G3PGYX9ciidHXUDSCQLmQwqwd2F5Z8NFfka8TXCGf7N88JvaDa4wj",
  "key27": "UL18EXSfsnWmUF9uQy3rY5aL8HGSWAPw39s7hm1BnzRYWvLMTpvpaqMHd37bGez3xnk6LihCXksxwqaiHzxgSnw",
  "key28": "25qXavYzVcw2MNx54M3frrinQYWvucnf3ERJVqC5mJxzGUpSWkfe2aVGy5rf3jAD49bCM9rYTQe3fUz13aAQFR6y",
  "key29": "qNNuwPA7m3uSb9HkQGLQVAirtnVRCWG5fdSFi7RjUk2CGiW1qRyNsv9rWzzUVsNN9YRS55Rz4rAWBiYaTNg81YY",
  "key30": "5mw2xuLrG9w75b5ojZD7g5GPJe3jWhPGKqkThUs8EMpdgyxJQpTsvQAbs7XfW5gPpM6gNDS2dvLEsxMSc6PD5KsG",
  "key31": "4rVCxYQWcgqJMDjdgm4DQ5FAEsd9CnBSsoP8FqEsfLdV8sPb4QNDEa8vnsikiKAcFF9EQ8JN5X5GRce7N2u4RA5p",
  "key32": "PUXpA1D323Bqb1Vm1svFAcN9yUvJtpHZvXSijhb7Eoy29u4UasM9WBUKebcNnQ1A31uXh8Hs8xixWKZnyWciRX7",
  "key33": "DwybtTKPQJc83BF13fApkjJMAtpeFsCwNr77Y9yksC2x7EwMs4fBSSjB9RfgStQypHxrWhHD2mtqcrXf6K3pPoB",
  "key34": "5FurzPpW3kA4ofKPhYRy561MU55iktTBpjYQG8cxkqiqAMaXCvV2voatTcG1F7xmRyAwhCYSwv7BQomApvZz6qPY",
  "key35": "5NR18EAhWk8M4tV2ZbnK8WhmtzsXEq29DN8Y4MxKHyvaU2YzBXV2C9PVJ8YSBqiwmnSxGUEzKww9pS3Q4yaRuTwe",
  "key36": "uXFZ62eyfonprznA4rgDND3sXoCXYYLCp65J67A5F3NZPxaFigEaWK4bUVcAgfqvPqKAV9MSdJTnNGwfX5oXY8t",
  "key37": "2qVtMzaLu5jg7RWP2KKMbaLEAMCVwQ7Rbx5SfMmVWWobxiw8bRSt2VydqmJSKdGmRo5pXD8hmbU6rkownNVgK9VH",
  "key38": "3Cpsjsjzxp7XVkSCd8VHe8D1Zv5oDGNa9A7gt8ZXJ4MZuS6PVH7bQPAHQZtU3XSv8N7FuomwHaWcF8mvucFu3GTt",
  "key39": "3ujjgRpa41VauwcwfJ1dMnEKunay6EsZM8uH7RRWMhYLS3YP85rDoEqdEWZRogqsvkbFpKihYJnrTz29fWorrxse",
  "key40": "5MnZfra72XM4iSF5CboTHbc73btFr9DPWCcPqWtLowoGwCwZgmYVWaGtrcfq1NhDsRH9W9iVRu9ecBwUBgGXX62n",
  "key41": "4ufEvjwTS3qiexg8R4ygQZKWubuCJdnEArvaT6sVz6hPtQKm16jsaauLi2kg7JujE3cxkyXt7oPwaC1RSgPy8Bk7",
  "key42": "4qEctGKhvMXZbkx6GGHPo7xQ7r4CHseqvqdjFLmGnYd3EEcft3DDwJZEyFA62gQ91sDmPC2UtVSs9q6kQkkmuyXb",
  "key43": "3Tqj7m68wewiEm5NTf47uFPxzjfUo4GB1bcPwenKqfciEw9eSDR2nMXQwVfAwBXs5SLFfQKRfGpTcjjjq29AAUWM",
  "key44": "2BuxFRc8LQ7LLpC5bSzHr9NABd9avriXUJ43M7zqhaoHtGFqLChGTsy47txnJafX7mwh3h8DycreH6KUDHvp12FU",
  "key45": "3w1w3Wr7hEUSdrx8P4Cafk6QK9hL7vGK7KQrGfvPrwGkxi3gDzkkdRp4hsykgeFUmcshBqjc22jNoDqNN31fQDsh",
  "key46": "4GpuDFfHhh6Yw77esh1rUjeS6QDoSvdWqJ3Q3tQZjqLNfTh5xgENBuvYzJbMiHWeMj1d97rRXXkgRcxDCZUNPmWm",
  "key47": "2Vnkrg1oVtPVc1cstXWXUKCuibTBd726LkgkV6XY145qqdT9YJSt4mrUJJREmbtzURuC61BRSfFPPiu39HZsBNYu",
  "key48": "4on7x34QJo8JjHeHFRWV6YSYP2VDSQ2mjVWuUhnXDNQWACvsjwpTdTwZ8WNswYHxv5cn1cs59Eizbu12o6uyXddY",
  "key49": "So12tfoorR7bk2FAaayRifYFGFDH5tB4V1XvA9GkYNBam49B8hnxj588PRQezk6G8ovDZzZsXHVL7VxuW4NNmoz"
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
