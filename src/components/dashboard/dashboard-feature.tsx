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
    "4RPiSDjdqT1FCdhu9PKEw5nYujSGfia9ZsZ1Qz3FG78v2JCUJFHHPCHWXrBvWMePFNpvLLUZb1XeEjiaKeDvt6Mj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uJfyoUSmdUm6RFDETQJwCvqsEc3VSnbmwSkytLTwbJ73LWjdUPVDmTwA3tFZtdW38B9zSkp6DHYRGgHqwv4SRby",
  "key1": "2y1WkoYwgES7HaAj16KCe3fDvsQiQ7aeWkPbF5CiYrMDySuDNY56kjEhCg9DrwAQVAkdAJ5br44sBTHavEtE7nhG",
  "key2": "h8CtRz89tHNFw43jAz8vLHXqVBHZHu2GWPTbtKqUe5rvVu15GejqHsUFfReCuiVYDzE1urpRJ44sXtKGSWqScYW",
  "key3": "24HDCHKBHM7Tj7mbNWfTR229c1oHk5CMfYsTm5TrKLhKj2an8butNC1ZmE2eL4MjpV4MrZNH7UAGpWt1qm2PUrem",
  "key4": "2AokUjxZxBTtnnCvoAUXxsj4mcbjcFq4Tj1SqfVPpf9FLZx6gaGpN58LZQTwCdh7FNaLPE7TdkwCF4YnpaeS2j39",
  "key5": "2q7PtwSzfQrBPXFC4NAX4D1uAaWaXqrdaE8WEJURK4FMQiYxXuU8tCqsXqsoJLam5zdN89aXczxSajqQdoPboFdZ",
  "key6": "3vBiipzzx8WtzUibF2RoRQUArBvVPgsMb33feWpwosSbjW2FLmLV91VES6xzFXEKCT5vVXLt7yTwVPFpW3tfBRUz",
  "key7": "5m4yXBsVbhkfqATojkLx8NfVo38SrrSZyjy1PiCkLDpEibMtYv1gG99SHbLeVpR3w6rREG6SQJLS73oGtsZxQtMC",
  "key8": "4r6v7kpRadYGtLqfgdkvEK2aYANpDQETQta74cJv4MSvxqcp2Lg4EddgW9b7UHrc2kfptfGU4874V3qcwaZfUpRH",
  "key9": "3uMwVMTytk2Ge4D4u4EfzFhDd7qn3sK7RZGD2gizzZMnMfiWpL41rg9NVarWmcUVmYb5CPh2YqfVABJNC7BQxbkD",
  "key10": "Rnjd3uqg6W2g6ndjzyMuMDeK43bo4FbhDUoF7McTdnMB2vHXf1jY1uWmEYBxDsCBpybRK4wxoRrB9stf8QnX3oa",
  "key11": "5msSqZEpgEKhRe22fkpdFq623fFftdwjdbzfso3jegHMnRyzP3xynHTjb3hbYdEZ4Cyr5oHgn3pnBSBzH7pEwAup",
  "key12": "5GBF2XscThgw3A3QEkKRErQnta4twRJeitruHAcZUKipX2C57bsEmYL3KfgZzZZDgSCtjW1tprhtHkUU1TAmx7jd",
  "key13": "5uNVS3c4ssvqmke3wHBG69SuTKuoKWjpFA4hn94JU7ErLpD1wXJburfi8oiXpBQ2MeiPAuLigfYPhkiNiYMGQAW8",
  "key14": "3fpS871TGu17zXc1LDAfHpZNoKGifBNThmVoPRgMU7ihArDYCs3xmpW8xNLWkbrBasCcu8kvKbDrFSPvoE4TTjJe",
  "key15": "4Z3TxzQQJ5votPEsBEKz2FihjLVVi5gB1hgr7Nsnjs1YkTXLBLWKGssVC6wsPavT2E17PbtA7zpWZYoNspqTroVH",
  "key16": "4SaztgKqWtWvALqEwmTnLjZpwAQXNwHGZjS3gmgjfXfxdPpNYgNvr5cCstx5qDHfPWE7cjpR8T8c1hTM12zm8sva",
  "key17": "3D4f7DYPmhq9tSqnTsvtiSXymjvnkvAQUqr8NvQrzc7yh8kJiGpUd6VDC9omfn8iQRc9iE2jKkHHY8NuBZw1JFeY",
  "key18": "2chApgbaBi15JY1y7vmGRsLDArdRLX6sBqRqWCAv1wQUmdb7PwCvWpifUrH8iMecLgt7x9k1RWrTLgpMrdVqsm8i",
  "key19": "4ueoRt6ACJ86wa4ChyCq5ZHUmrrDLn1mTGFJUbUV6ETYevrCEyPTN4HFXbCpeaANxnFh956i6oPQnb6sQeSEt4Fd",
  "key20": "FXegWYWqi5qXhioz1CJvTi3TkbmUgfRD4vMMoRrKKSdrSbbsQWtFNhAMXuaNJR1jmXAXNTKKtE6tSNj4dVv3r67",
  "key21": "2J15GLYr7RLTSMaPKyUbA6DP5PSw6W2qnPWkRM1i4XFzVdbmwVLotURbVfvuY95A8zQe9qst2fLTtHR9KjLjTzRa",
  "key22": "ytmAp5P9gpkQVqsWLRSsYdghUZzQrMa1bpEGm2kB4ehxtrUnFwYhcRgDVYLyqD9x1GnMSYiaKjmPUreMiqZ42D5",
  "key23": "2X3FfQKynDh2LGAL73iEKWiR8wxjQS2C2b91dKXm6H9vHoBonaCtSUKPWxFr8oLpiy1cgvw85mYUqw2PQ6MHdJzB",
  "key24": "47zdfnnsYP8ENjqFcvyNoAxiGXhuyXywUNcBmQau85kgmboq8eBea75w7Jm5ZnBzEXrY9jKREzww6Yvi2kmeJiJM",
  "key25": "3CGKibn2eUctqCYXPELJ9FG9Yp1F19a4k6kDkhNx8r4vZFzzafq7gDv3mPSbR1WLeFi87FNmkVYtPiVXpD49xdrr",
  "key26": "2Nknh7DyBpgUhQXzGPHKNK9Djkp4QrdtcEu1DiyGj7bJzbVV52m7KDgDC3faQ5mQNHyKfxCtDZ6UHPxcGGYVsR9e",
  "key27": "37weqcyf1oCQy8J9nCvSqVz1PMVTL5UjRYojaXJx4NG4BkEKNg954VEAKNXH1E25Z1srubHA7yyfnLgCosHnvWGj",
  "key28": "49XrqzgBA53p9NRUCPpsCqhkp8Rwi33Qbhwcr7MUwwyR3ZYmtsaN4d7AAqQ46H17dViSvgLAaUc5HNNRH3jcNhGV",
  "key29": "54evymkj4nGi97hFJ5a4swxucTC2CZCcvh5ThbuHjvF45H3jKPPrRZkvZzpJn3SkFNJcCrnaJUj1VpdJDaWsYUev",
  "key30": "32jri6v2DSTgK9hSYTfqJgKRdUT2AiCiik3H6EWhC1tjsPgi38TLahqb6TfGZAXQDGF99ECJUgmhxxbhK2VbVZvN",
  "key31": "3cScTwvgzN7nW5P1eMLCXHfda7BSNM8AGWzdLvx3gtcdsGBBJvLfqidUf8TkeAjSqkEQFSpRj7CVH5Pc5KDcaCTd",
  "key32": "daA23Sauim57bA5XUikbn2etsu1ry5qZEuoxgBi9KK1JF1uZyoBGZ2aNNjkDSm6Nu4oHndkEuXCfKWaUF4YQFuw",
  "key33": "kSVAjzKMbjHEVaj7g9rhLnfMJZPJ3kVwR9uSL6hxc4CpXo4cSPuQHPYkGpDLwMchCiALzaFhPJ7xAjT4zoNA5zU",
  "key34": "37AjW4HsqGaNDz3MjAs58oBdH4sKJkW2wjeJhSpgGFtduB2KStzPui2vadAW9yz3Q2ggYqoEbHZLwqcwjtheSSFR",
  "key35": "29TFmRRLzmjgu3iUEjvayej9oarQQkZZrDGFDwHp1NpKB773UUozKvrVTSfHvRmw1pkp4J3tREjAWfNE35GfFSia",
  "key36": "33tsTFV2rsRnGhdpMdvHSGPHxPCewNG5tamme4zAPReyvMnGviFHwkYLn9NMEj266N1jKTLqoeoecBnTesmMVxqR",
  "key37": "N2gfY4Umz6PJTkuNdfAxFCb3coVkruWCfX8ZgXeCtRKtuFwmvV9npGvgAwDDBXRGGPdtewKNvbqUu2om3LWG8yH",
  "key38": "54kHoQeDVWe3s6NznXrcvLzjSeDHfGR9gW3eXs33Dgm3tQ5aTN1GPrhSLiBryjF3Djru6qg4zqots3God9N7nBgf",
  "key39": "2f2JzW6Bph2TriZgwjfztbmr5rX4vBFpPcHSo7CgwctJNYo5MYuquV5vLZtchv1qSCQcuexXd65uDyHZ3jQDusuX",
  "key40": "Qu1XdDTnHSw5KPppBpZr3gb9iTh7fyEkMPbtkapckW5Mc66NhWkhrU1Hjq3TmQTJ6KgTZWLNNgKvvDX7uqGcZoG",
  "key41": "5fHF1LVNVxpBDpzRJuc4d49TS7dXzMtr6du2dLPL3i8B7FnmKcEdvcGHPRAgEJ5xawJsi4Df8Fb3SmdK9k9sP3vz",
  "key42": "2jzn26mAUVxaN8cnD2nduYZGDxczGPL1UrGt8a1R6nLSotp4VD3WZhdXszGGFoZc78RWr6vDEsm9m18KnwMfHSZL",
  "key43": "2247EmxjHH3CPh8TP9UxZ4ECByGXjwki7duyCFBsHUGowFpBksNydCs8DTpC418pgpMNipWsju5hYmfc6T3A37ae",
  "key44": "5FJCuCxYGKxmSVkbryyx6KNW5e2dbM6iu8hF9LJYVW4jvPE4oASny2ExcRte8sZpaPUGa9v7HYCJNUhUGuv8gKAj",
  "key45": "3Gg2sHvs8fTZ1HYKE3PwKS8KfGRE2VD3UpPnNBUmu2qoxeWtkKH29aKXT3sAk8Ln3xp1wMgWYtT3bxsC9pm7vAta",
  "key46": "5sWZySefoxPsT4SpUro6vxRPctGbQnjWyqXxpUvVE4dU3MwDR4q1Zs3CrSGDpSXyA4PTSxRS5uDAAtxohDRhzDBd",
  "key47": "3C6SmhkS2j9kSXYiL6BEdde6FGQUNc6aM4TdByR5i8oM7G2ZSF3Y2ErBdWEuQStPZutegTXCQC6EAtjirqjehRXk",
  "key48": "euFWgSUAs9P4Ems62C5ssYSx56r7vnn1QVx7pUFNg5YD6VvVrUEj2ipDmVuVGNrb4irDHDaacgXtSbFTN31e6se",
  "key49": "4ucGjNTPtdaBJDn7PP942JKy6RsyexwGhonM1t3vVbobEXivTYxugRENppQptx5utipj2d8TJMuvoKS96ZrzQpdt"
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
