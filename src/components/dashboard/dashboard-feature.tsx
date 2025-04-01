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
    "4Yf6gh9Ax87fBBbEkSyKDnoTPS9iAjpbQS3iaSBASPaJTdmjb1rVk968Gj7FN75PLoU9phwvPnqPgJSKd4QruD2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tj7xWdxa9UnJCwPUmMpmgK34vNiDEfkiQcvMgRkFdiWW9pB9tWpdGQ4EB6KdBo3ac8PHPTct1vRC8G4W3RoQ1do",
  "key1": "4GubXusTubuhALUc72BgQubE7p92sS6CiYeuMEVWPx2kzWnWv3JryUFuB7eJtJj1E2MGt78WWMwyPEpLHbViGdzT",
  "key2": "37ZpvuYxjfCdw3UwaShVvJp4RT1Ec9tCgEiLcWognjM1S9tcyzoBtTT8a8H4JhEBpFnZFAzXnuzktZYNy4k9SNeg",
  "key3": "1VmvUL21Mk4Xx6mgX4CcCGQkPLSvNyHAVodEP3bjEQbjy4g2m39DfsAAXd1ZbEi2ixme7icEV7ZbJwjpzK2ZwqT",
  "key4": "4Mbhxrh1r5uY59ZcB2gD4fam4oSxi2qiSDg4xcDsstTLAFZ6N2B5a4TT8zXSLVyA29K8Uy7qcA21aWd2es9BJ3YW",
  "key5": "2R9uSmUaAt2R1tYn1LVAtmyPMJ33PSzLyxCiTKQ6B6aZRVN9ztgut3q49TJqUfhy5E5QH3HwAYyCtEupvL2Zxq3f",
  "key6": "57zHxDTn6n93oGssmMQyxeY4LSnTiTfoQyzwrFNvuYihdRphpuZu3zSvptitb4A6sBQ9yDmmBUzhu9jACmbVk9Jp",
  "key7": "5uXjqsEeKj1Fcaq2JWgnRFvLcSZmFFvFDuUMhJsTEatRFKqMbFWboZsDdFZivyKczFTJrwfhqKKgJUA1bUnYzi9i",
  "key8": "3iLgDtpvnrTssaz4GQwMP2XqcVwAFeWbkpmigaWMi6m3neBuStiL26EFDqS1ySRDtVk1LvfQz2NfL1PUUE7jJ9oz",
  "key9": "5o682cKSsJXs1wvp6wU8AfHXDceGVfr4UfThGTzMUbLW4bPmUY3vcgP9DiUAT7S9dyJQpE58sitafzsbHkG3CKXd",
  "key10": "5mbJ2CYAHo2PJMsC6uXYJ8SksXBTrHkiM25FHQDDbgekNuFDBaGe215sfRT7AXegxmqN3qxgrCGv4T1fw7Sk75tj",
  "key11": "cuTwYpbwi5CCuc9bQiV8Ti9Q22BsWQw3GTZoJNEWSNpe9wcuyH5v7PBwgYjuTZtUsPdJBiLxAsAfh2cLpkd4S7g",
  "key12": "VWicDczmZPf7VNKrrsuzapAcNjhGShfFPzKNbhpve2v5o2fJsFhdFR7HawvSABSFJvDwVXMnY1irGjraVVSk7JX",
  "key13": "2Ms4RHEVvEAGw4AgHeiJD8yJUjumvm31WTv8azBCXkp8zJp7Pmjz8bmfQUAVGrCdptqFPxCk435zpKGDpfGDRmWE",
  "key14": "3dSa1QGdHRqtDWJwT6jw9zeqNnjq979XiFjNMKcUtmPQkTv8G3Wg4bhThh62LRvz7mdBsLnpvRNEKwpntVzWY6rG",
  "key15": "5PXtteJFNmTrxSTEm7G2xqHrPt8wYBXnyarkYqzMwEqm4nWtQcH2Bn1QKRV4m9A4U19S1x9h2nAKA2RgymZPAKwE",
  "key16": "4szPqV3dBapHiwTa8R5bEogGcSvyi79fo9yUa1K4hmpCC96GR136SssumUw8G2Ght8FJKNXKMGnbpysh7C4n4KWy",
  "key17": "4phmoKpMvy1aNyANZi7GAAbLZG33GvRRxVihecpcYgxwNr9yafzpJMwwbHa7wbu6UV9cFmPFSj7k4SeUat3otqk6",
  "key18": "bZZjsExBkbV3ShD3DsHVmpQYeyWdobbUBSpZadAvUsEva2ymFSTezCRb6QQdPNuNzHmgcW1Toxgtz7Lt6b1b9s2",
  "key19": "2Zg95GVetbCmc5gTT1dbuERixVZFGw8JGxruFM9SATcDAuyN7b2orE3BEc4TYuCBenzmbvi4xQw6hLGB8bXJ2onV",
  "key20": "61iEzqGMf5y6VceJgVBsdD3z38RfvmbWDMbskoi7TaxMtyLfyKZvpzZBMHXLuyfgN5M4jYfvgWwdQ7R4BF8ehx5B",
  "key21": "5EhwJ4v2TpRSiXvT6AEnYfHJt9bTj5rLZtYsxLfRiuHQRdBJYekTmyrHz1beDZ9xNAFLXh8VJcYPT3FRAKj12Thi",
  "key22": "3pgJS72npQpd3rKpmTvmVBf4Pt45M3TbSySUSFDA4VBXqSfpVzgSUGB2EthcvadFz1ewwM2ACRPFF3htp6UqAL4u",
  "key23": "2crDu6RB1rd4G1sf43bLazv7LEjoTgHHqhXxQ4rU2rETaqwcsc1d3ZdN2qa27VLRqHNKF9svEEmkiiMPfaBtLY79",
  "key24": "3YEwjX3Hdbp3q5n4CjhX6wAFrsvhSPc2me1jJFVrKpL6xfkVZQTRvU9kWYBFGdC2Kgwvi4xxEMrmzdhZZh13Kc2c",
  "key25": "59ofmnwSEkMa3JunXwb5jeENbC1EQHvDfbDzMog47jdGtYbr1FpNBQu7zz7vWDdz9KoPawmYroHMtx5vksttuuQv",
  "key26": "3YMFBXNnwgReyuUKN1NrrGwvpDJUPxDvoeLpWY9ob3cBNEF1fJCxBGUgbJVqswYoE3dymsYqNAHgQRAUKosVzdF8",
  "key27": "4Mk36zMz6YnxbD2gMcPYCwe8U1cUPjcwcvaEuxbyjc3ChALAetwiHp1nGVUrkCju9Bvcfqj3GNYoioBt4BEtgaUT",
  "key28": "2HVg7D5iX4F5kKLk5J14MYCzDHbvm2GSTUzNMHaHvTs5eRyGBN4JEs9yCRtnYGH88UDSMwdmg7Nnh4W2pZmKat3P"
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
