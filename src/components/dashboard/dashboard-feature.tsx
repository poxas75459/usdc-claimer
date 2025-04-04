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
    "TNYQtEATpNQe7SSkAmDkCJTTFSJn9XurJhCf7m67og8MMxASe7uNdmNEtRja4DK3uAcne6idx1ycfeNYPE3X1g9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tCSzAZtc6eiAKeH3bP4hW15t7EX5pfzGHWpzna7sVMg8m2Ht6721v3wrAqhA8XeF69ZqHDkXXwwX2KXrhvahyEn",
  "key1": "5Q6ECo2Gt82FJhZUFrAMFRLKddErwk2ikCrqqnmHHafWBZCF1nuxC3w7zGHbDPWPLSTXaBH9qyCrbQYfPW8WSA1h",
  "key2": "DdRFicvx1GGqH1dPbAqgiNW5Gw1bBcLGtz3FkEfmfcY4gmJ6Vc9ifxBqeDKYvaMHD156n87C66TEfpJAiPPVD65",
  "key3": "674qQKEUV4e8w6XkhdunZt26cksiPHZtRtKjcSP2JzhzZ6qb65vYTvKLfo9S7Wt8JFJ3cawmEwixwABQwoj3btSy",
  "key4": "238HYV889Bav1bW3jECfYxDNR2Z51f5gmqbRuMpe1ihSfvqsxmCKsEEbLQNobd3nqgQXs5icticxq3QdftgopX7N",
  "key5": "2vXeo3AEwvVjhVDMbUGMhhrjQis26qZHvvLSdF97Ct1XoqL11cCMRwQmoGSEur3PxRme42vczYUEaAFXcSPfvbJV",
  "key6": "5Qit25vY55X913zfhvGTatmx8rTs4tyCPbUTUVWep2N4H52qMkJSvFWXrbhf672b1CEieWkA58WyEsbWmpofHh1X",
  "key7": "4xi7cdUzLAQfiUbob7Yz9VqnQf8F5GxPkPJiP6NK2W8Uvxw4eczoYjN3CrYiZHSkfzkh1CV2sWQGqFf1qjnRqHPd",
  "key8": "3Qkegnth1odaFiVtBuTY9RjHDNG3TkbSrGBZy4cwfgiGFv3QRbicyieTf8ZLC13UFm433wnBBM9VTMf1eo3TXDHQ",
  "key9": "mPUkbjsRh11GHxYekU9SNBmG9cGTPP9aoF6XuEVWSxRkDuyMh3szCGug3rdeqUUakA1B8sW6Pr6hW92QNXGAjfN",
  "key10": "3tnHdTcnENDXVyMQYM8enQu5PcUAKNcMhkbashjTY1nBAQLkDYgvvHuhLa5jfeiQXpAL1Hwvyk59ByErMTHALwuQ",
  "key11": "45KkfreURPknPHcn5x1WN3cq2ZwN7YuBSqDD67gP5XhHstLW68SrsjvZWUdZv54WXsSJDt5ZHZTum199rVLJ9tTE",
  "key12": "2rZCFnepujL3kcDvuzQgVfmNq3YQpRdjR9TBHJV5dDjU6RNWHgGfP4P4a34MRqY88ywyFqZxaxJHZSJPqiqScYnX",
  "key13": "4m2bBSiYmZaRazqot7zfXddmF9RDDca8Mhn2RJuw4fQi45HhqaGSXY8WFctY8cDKZKykcCQVEzmkbvw89t4T7Rj8",
  "key14": "4bRWU4e9VhQK6WgBVVbGxo9h8AQTsTD1dJtd7f49izKL4auSr2TRvFN3rkhbMpnnAfYGumEqgWEnjvLuM93JKzAi",
  "key15": "5VwLHPqKoVUadADBgYC8uGRT2pGRB8Ju4eVAeugbJ8QesfxKRbThW3XtGzpLVD3YT1H5j6e1BkhuRWoXNWnUVd6C",
  "key16": "oJE4BL9ZpjjBNsk8UUBvQz67WnZeUBhED8p6hYohBAqAf6NBemS3A2zzy2CGaVp44Nc4fpMGK3YBaGMA5Yh3Tj6",
  "key17": "4JVNs2ysamSB9HQXM45oqsi9ELoPkMuQXyWMoKfXJu6YsR1rYtJ7zmmMvKjSphyaBgYVxRhG9i3emw4DvLAb9EuF",
  "key18": "5tsCPwC1hj9NDcuJd4wNEGkr94P7TAbooKS58iQbUcsUMsbX8LBHQUJnzbfmrmzjffbpGpHYMdPmjvtV1jhDRZ9p",
  "key19": "5bbAUmVRPyiAXNx41JXnqYC7i61jfsqLpnF3aHbiFPGrcGhig4s2FuzeLfMmmHn2LvN645dL7W4Jikgdc8JN87N9",
  "key20": "2N982YSTih8cZiJXy3kje2o612bCeBqfyNR5Eyu2iPHyECeQozGSdovDLsX3sewo1wdPjHwxxDuJSg8QC8jJutSe",
  "key21": "5wFTFQ5T1b195a7F84xsbyqr1PRn7SERK1AGcfXM8RSiZ3sG97fCogLbD6HabpNVG9KdYVt5ZtNxzLMjZMvjXBJh",
  "key22": "6KFUyP1Qc2uxfoknbq4HqmM4XTMkECx3pjf7U2yWpiqzya2PFYAoiqXBJuVHGomhUucNLNswdnwt66Rbt528BXA",
  "key23": "5YNnNtTi722HbAAZbzymQk1XdDfpQKYH7hvSAKbLbrAXpFSG3ZG5k6EkcRMCnhWR7ivBoanKLfdb6A1d6wcBUufj",
  "key24": "HfFrAjmNRDMVjGk8JxhRFd7GVaqP1GH4iGYLrtcnW3d6vBYhNw9H4SZ2Puek96D2c68T86pcL6es8ZUPE3sAejh",
  "key25": "3xo5kunDTU4bck1BR886yVDxn53dDWqueVLjgCN6umLX8vKxpQz2CHWm82pmWA83TBQc9bs1oMNBH7nuNxqEjv1m",
  "key26": "2SgZwLonCM4miohZhyu3M8Jt6um1c4fUwNeJDdXBcoF9XN6w5KTdvjBYyWpfUbr4APbwv7F285Z8vbhmyFAxxbaJ",
  "key27": "38GQnZL7ugdngYZf32EBH2D1DDqQ9gdiFbLvHUUfu1FY15BJwADi9z8xoFoVhEK2ZaEMKXEP2ozvZGhTzw9AM965",
  "key28": "4Z9b1mkbcsQwjDP11ittQjxVkbgHZjq4jNKpY4ne5qAzDNQjvr8tFLZbMEPSNQanewpM2Y8n4ekDNTGh7UirMJWz",
  "key29": "3hG7exHJWWQPMVL4z9nDwpXtSYXzm5g1cEkMstntr68MuhrtvakXgdoKat9XmCt22CLz7PCotQbo2yjUizSCaS1d",
  "key30": "3p3eivPd6xgRqjJadcepKTeDMjU6WPp2FNkHHqxMYNzcM5JxfQs9VVh2cGvT2G5pKCcUvHXyq8F1vky2s1mkTdQ6",
  "key31": "5ArwJCJimBJ5U4cS4DLGNXwrFRHJATjWFjXE4zh7DCxYdPamkNnyxUKyE9c7TzGzdn4fYELBwpBsTGkndX7dPrCj",
  "key32": "4VJdAt9hW47N5wew3NCkW9ru97LfCetzuERJfVSZdawkLjevFP4ATSUrtMLuenC52Ps9fwN34g6biJw5d29ZTmkc",
  "key33": "3S3HFW3oVyr1yTkHccCaUYqnJSXgYfUdQ2KCfzAFnsswDAWP8Ha8yuQJmmkNiuAevpggtYCYZYnTPwqMT9hhvJmx",
  "key34": "39LW5hVWsxB9TRbdbWBK4R7RwcH4g37DgerZTn8573RhZckJj9kbvFppC5ka5QqzFabrLTePuBDk6PQYqYwkgiWX",
  "key35": "DX79BvfEaZPx2FKDMQcjyoBWUnAu1edvShLytkKQtxLDm8J5Bjf1v3UPxH8ycsMvYD1ofumKRWixWDTi5zKK2aJ",
  "key36": "3hxDMhHKPoq2t9MFcBX3K1sRfTSpRzhASd3dTSNkE4y2pDLWcUVjRw53CLRcf38rjaiK5w8ZLcQNDpUeWV93R8Zt",
  "key37": "4F1PBYzNnnF7fu2SmbmMAtpwHjfyzKBwPNMt2wipb2ac4BCFdtpEtqMiY9FUkqFed1f7BaQKJHicixNsw3MuRspY",
  "key38": "2JiyWmSkDxr2YeJiiGEThwFx6BPwyG6YAQkxtqh7kNZkwzVDT5C7qejEYtLXZemf16P97QcP3h8xpSrC7NSehg9v",
  "key39": "2FawZ4uKGu9MkAinbygDzcvg7RewyhUCR4ov48tahZ239TdGYSEGbJRfVBUaa1kbY5rkC2UhnqExRX4pifyc7Nrx",
  "key40": "5ZCKmGRjjRcJJxijia5xEaoofyEfm8YefGPqLuAT9cNNeQebuXs7Ynh5a1BghFv4o3EsysQzYpdshuCDUhcUEpXS",
  "key41": "2mjHCwddfDPJdG9AKmYAeKmwq6R9onFbx5kSyM1Gz7XgzyEVhoVgbbkxiQGQRHtUPBnpssijE3XNoexWQaW6yDQg",
  "key42": "pMirQ8Z1TRmrgGhwqKBMnm6YaWdDwyYQ8jwyuXkmrQsjuSmJEKAEB3YYa3AsdrzouwgEfqjavp2ib7X8n2aG59T",
  "key43": "3mkmQ4VUEMoAtvBZM6QLVwxrLxFWkFwb2NCp4Rr1pWRX8EzmJXmoy8anLP7bcR1zz46q46BuuP8Drd6qD7mBGzjs",
  "key44": "52AAX1zkrXj77wPNg3Q9aw9QhJoJJAyJj4jTBfaXAEhWhs9htrdcNeTEdx8wM7wTr4Tfb8SiMo5RzJmnDSAAYszK",
  "key45": "3xzob1yUMACsL6EFZvx9ckmSoJNKb6sB9CBeh84uq9b77fiS8kM5Snebpbh7NMGCN57YeWR3ietCeui2Asm2EQzV"
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
