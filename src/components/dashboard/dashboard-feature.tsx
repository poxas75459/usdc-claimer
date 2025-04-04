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
    "3tPpxcbFoQjjXR5C7rtTq7oWgTevZkTv3oJH7jaa1a737GR5qbHxaogDvUChZtn1emUHAUr286dabXrhDa6DxwxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JTcUHTk2MtB7CozYXtHUMgB8twuDYpokaaXrr5Q4KH1kVbgUnGzUxmMpCYbPMTmeuEQGu1Wt8TAQgoUuDJa9fFT",
  "key1": "2vRVTdReWAnFUpm7vPEztUckcf5vemTohZV55XNuMKwqzQr1RPE3csWqpiSw6WcJR1oYw1WubkAD5nxpznB1DsxQ",
  "key2": "4qc9t3rxUgdkotJpBy7MR5SRtTeLVdh2z6dvti9KCCvysdqsyFYhD6fDADJCyyUZiFUvgfzEs42Ja2AonGre2shk",
  "key3": "7FxXpYAtqhhCdCGqkHzkAz33rAbuz8f91SiW1UFRZj1uw8vUEMYNGtQy8yvqFbkovTUK5y619vnuMg2SxdeBTkp",
  "key4": "474Nte41sk1ubATT165PM84pp5DawQXmA59NpLwBjpzM2iEWo1yNA9eMajNsD7D8mUicJiVVKbeKQhQpw4mMF62c",
  "key5": "4HztmCdmcftfZmuv9EswAzjJgSf9f8PVRkA7RWa1fDt3g7afwLELoiCCYF3FxtoDGmsB5xqpMTGCBQJa5UQnV6fU",
  "key6": "4PQS2eF57pXuD1yt1TnrJj2maed78cVQXihH5MKa9P3ETUaWirBvbe3eKqb9959PBem6BE4hnXeTeKLMaW8Vie1Q",
  "key7": "5MLArLKEFe4CdfVS3aeMhXdtVpub8119y72q5BeNPcEZynbPbMhBCLEXEKSpobHaREovnUj9Fiji221xJa4e5Wq9",
  "key8": "r8zYDiJqq64k1TPWvRYqfF7E3LH2DxH5kPnLXZDUhRg2fPxVA9X5EmN57tDbiKMyCBSVpAgSQDUsSJVt5c2FD1b",
  "key9": "zEQSgLApgLZKuphxdtKkW8mh4a95ffcutSMbvLYt6WvkUc8weQArC3abDDvfGUNwhvLiGDjB418jidL4KmcxJsJ",
  "key10": "4zwiC7EH5dMCDVQWMT3fH5PQJJ4oukdWKKqq9Lr6cQGdzKJLYYkTPkvWyoWMnm6RQf1bMhtVWMdLGqP28PvkLzZm",
  "key11": "3osLh3qUxrUbLmKcKKfMJJtLH6MxHK56m2N6ZLW46Sy7iVKVVtzfSA5GByxbToWwWvh5QPBj8AKcVZCjoqEiLzSY",
  "key12": "2wTZggc6EHJmgxGDbBeLx2B8RYbcH7QLUgwJaeVxptKATSqwcsMCmTiDk2t847tTFFiWdsJNFW4G73WjZnULJHz4",
  "key13": "41zpPC1HdkckAAz2oRBzpAWhgj4arp2MUGtvCYQh9jNb7c8BGaxD2PXzyY7KC4hJwt84cgfXetiYRWks93TG1DDu",
  "key14": "c5fxJmiNNLHeuCYHoc5iVvXvdS7S2xFxoz3pVaJtuj4A6KxPHD4EuRtud6RCihEX3QWFWrBGjvkbFX5yyEVATsK",
  "key15": "3U7nXZm6hTCu5MNBwc67c5wkFcpph6UkF7VZ6NRVuYjpifM9samuCTAAt45DtShGrtSA1Wti7T4Za5nk6q6FCEQn",
  "key16": "648tmwy5QuEj1zvkWJ14iqkdfxGL2ozgqeoHQnVMF1jBRHzXpd9tiM99p1LkywfjfQBbeNSw3VY7ZA3akStJH5yg",
  "key17": "56KPqnHn1kssno5ZyGau5N2hpvatXiY2FCBtUcskK9dSaUtLfKpjJdU6zng6PYARTo7aAE9q9QY5Q2BTuv1EHd1t",
  "key18": "3kjgPiQ6WaAxf2UdNZVSLnrR1xr1GkY7oQTqn8ZJs1en5jNxbaUHcU2UbPrgkR8VGMCeq9bjGEzKRFikCW19FK9G",
  "key19": "4ojbD4SD1uKPxdtm1rk6z1j5Gub9DYqFfDjLe7WF8TpP9NofEE6eY77LbddhiYbyDr1ayaxHs7Tgm9MPqpQapQHv",
  "key20": "5pWTnNh8Z9Zvk4nLBc8uwEw8de6wzw1SqDE6ogLb1QxbDuMevJXh9haTHt5CznL4Cm3JYt9yEEAwFPjYWZpC7KhN",
  "key21": "2BNuyQ5YHBM65cxxqZ94QbiXSzWQLSDGNFufm5RdH3fJuQrzBo2mCfFwarNVj9Jy3zC1nEZcRnHBbyBrsQiv3TuN",
  "key22": "2k5cWvCHAoNQ65ToizvRGBwSM3p2dDYZHaNJApMMogVGD3CkrZcf8rM8uxYdmSAQVGPf2bq8mQ7RyGpaWA7i4JAJ",
  "key23": "RtoCkpF9WtGi6RdWj2f2beLnWqrsuSHgE9QFAs2yXQLMmHBQddYrRrNSn4zsCKGFEY2mSY8X8MU6BB68zU3Y7gF",
  "key24": "5tsF3PzwDvpiHX8pMGtmkLDPFjrywUFZdJu199CV5Pt6Pub8ZYtnuc6A7JREPyLtRyFrSfjbxSjX4Gn61fYHHfu",
  "key25": "4R7RopdfLqVJBcM4kdCCDRrh3Y1fiWqZtGDwaSQTH7U2kqFMmmps7QrvRTxGvZJ5TmcVQJSkxdvWmyw9hW9QqtAQ",
  "key26": "54kLbghkN3jJr49jYoCsbZvNn8xwnnaMc3gQstqoEd84RR9K46QTShaaQgEimKo28zk9HTaD2xUkgHdMUayuvmfL",
  "key27": "39n8a8JCogkECNmREfAnFf9pRLuvY5oTjG1TSEhEEuhTZ5ALZPjbgTZyQuSHY6ReVNDQkcYfBGjPnMzh6tqzcoFu",
  "key28": "65LiGSFVwzGq9b3ooheaHEQL4L1PvZ1zxd2UsfWrbv6MG7VMSVkJ16W35Ehw8LHCJMy4q6p5H2ofM15pAy7qzaTr",
  "key29": "5m3LgbadKbZN84rnDXzMviGESt9w9pv9UE4pzpXSSFSVc4arT6BAzWptTZ6aAcMFxv7HbUUTriLxdbL5Ccszjki9",
  "key30": "3aNBjheRG5Z4zMu4jhzRv8LEzdDWWQLUzyRLP4e2dFjKmgJtHvCWtjBWfduwQ5TDhPnx82rEuNYtx4bVezswmaT7",
  "key31": "bwCRqXceMENhR7ko89Eymm18khYipvGvqNhZUPrMZCbjg65B54hDAVQ8x9MVS1RQxwUbKpKGWLvevG7CRRfh75b",
  "key32": "5G3N2vYMMnHLVfMHYWjj5VHt5WJShMnRW6rqmQ1G6upqDE9EdCssXT7E2cZcjxQMDgV9jt2AjCesMQCFiindxJHj",
  "key33": "2C5nWRQzpEHQZ7Dv1sMUDdiWq2C7QjweCfCHvFifdcTdT4XG55B1aDjLpTGyJgJXVCss8XgHqLbfhtFifRH3dSf",
  "key34": "4vXTmKEaLw1fpLmM1kxngmW7qMBRRXHBJzC3SvVoCFvGLthuffRWLjo4vmYpdvVddotXDj9VV2QCxzHsXSS1uwf",
  "key35": "5CxM1cfbTogRBjZG3AMBkykoEkaSjdKtEZDtfXFabhLP3BGEBGPB46JbfNG6v7VisoEuLX9BHKCs9yZVxwhXhnpz",
  "key36": "2dv9RaEjKnVQ9E5C6iE5imXk34ikYE7U8BpZr5kCrjbFwLh8ghcUVjbW4yi59xJaXiAJAh1ukxyfrbFZnhhL7aPh"
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
