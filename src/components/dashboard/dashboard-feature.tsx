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
    "2HiUvBnK8z6tzvW1x8bzwTo3vxGiH8b7UfdF3PFJGfHyMgcoRgbTUYFCJe2XdAfSW3RoYu7hixHBJfA6SCL9jdsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gpbrugkqjUXRd3a1yx7wSJ4qUCAUKYRa3Yi2MAewotiRYj6gJMSveti84WoXQ2VGaGoUXr9dG9hEuWMkTLJhZgf",
  "key1": "2JZCdNNfVevVCbC72tzYG2xXGLB62T1zqgmXFQ2dxwHyy4GnbXruLjtcTgPTV65FA6H3Xr6spjJAdVAcN2Kq9ktU",
  "key2": "2RZ41hPRpgnvSzuyHiWsGh8R2bdEQqp47s2izj39mYH4o37AGMgU8dwuNxQKhGSVjKxcWuocXfRkvLtosgDzcc2P",
  "key3": "5Cci3CtbDxws4YjfUXgaiDQVageri1aE5VNzRGeZk1UgNsf9dYBqkhDYepJWiPPyCrRerHi13nMUT4ZykrbnF1Pf",
  "key4": "2RQemNt8EUSyEBdr8ojWJZ2VCWgzdXUdLDKqW874Vt3fWVbJ6RYefnQRn5eCnByyzrXCFH9qmnaQNKyJ6QFcqr6d",
  "key5": "22txpy3CPFsC7Je2ZZGAXpj7VD3b8wnTTL5UhxuxNq2fVLjD6zDFbcwWNCN5btd8MZEp219drW44NaEfbHbtvUwK",
  "key6": "kXujzXhArYVnQm3k6Lfzu5MFNJypD1iRDcvTSSr6XYrakHRwiLyaP3XPS6BWV4qAe8mHzbw2XcLP7ck9fKsxMSb",
  "key7": "3dQwPQrYKU932211j4nUWetHdxfbMZCT2BUSmT6XZSpWiDbbZTFBP1fYAgx8GpvAnbdiLPomCZuc6oBvMYneqXRD",
  "key8": "4W2pft658JqHCW1ntmYCWzK7nUSDb4hoWKs1XRBrpCng736oFUf2aiq9j3b2TYy1ytnWZUJ8gG84WXzJqMe8hL3S",
  "key9": "3n9DSS2TyLmXDbAZ2Z4VgaCp5MMKSY3EvDNS25t8U8qDBhcc6jbPHh169GTT3Rnigs4ARG9Fdvb42faX4twvnttZ",
  "key10": "ttRizzL5AWuhKXDAuHkNQ5YeNsvp2c23U4pX4VdR2RQ62aLjsJKZygGLXX5xtGXagqUuQmTxy7MGuAPRAKXSxWy",
  "key11": "3eG9NYV9jzjqkufWHAZud7RMfLRVwNtGsb4keeFmq1CsX5Ho8tP1daQZd3LN5kDoagCpE3z2yLe5MW2WntsyXZA",
  "key12": "4pa5ntmpABDMa78qNKiR8guwppbMkA3WJUQ3y33Q4o3ux1TPdzfrddU6Uk9LUxn9D2KDYA5vapFGZvfy1eq9jL2x",
  "key13": "2qsQXbivx2imeWiyrXcMCf43255XnSK76fVSaqgVvECPkrbWkKHM232Z5j1VF6ahidN77uan4TYTQC27UiM1eMbg",
  "key14": "Vvd61UBukexJrCGdqmDY7e3a7XDn3ZWaERcfUzNfXaTVB9Pie3pBdnrCWJKqAQioC7iCbPUTmcqqJSejeW2Jmpq",
  "key15": "3DUnbLfK5BxPLaG92bjjWdqy4Y4BjDEkXhjBKWz7ByqomMDu16zrHXdbhqjh2eeqw8Up2Xnx7Re8sVqzocHgK8G6",
  "key16": "4WVBXobuivAbv2ANbabGHfSGhKeTnwAQTTwbiRfYZyJjHAgWU1w5sZGL8VATeRW8y39y2M2JPSXeixhjgP1cvQc6",
  "key17": "5gQTC8GsGCsWvhpd43SZSc4maFYFrF9UQ8pVX9UvFW3p3im9P7XPA9H4Nx3p7eeG1iVoh4VZr3qwBz563XDAhbZa",
  "key18": "7zz8NknXGbZ7dJgCLGDXtuXB2qcMfQqUNe9hwpRfjrSpCv9JBixS7Lh2mXNefSkgaLvnq7mCFXb1a5bc9eR2Pue",
  "key19": "3sbT8hGGFfXgAMyEAwDfPEm9x9fpfaRHfxS3reyA6Dsrcq2ygXTVhHxPmtqbPqL1qJXnEMMNZE5nCAbhXBDLUHCw",
  "key20": "4uVJwH5ZYjesRCFcicqKqgCewm3SUMGPE253R8ECKpzxnJH6MmvbKo1wsnwJR3B8qYLEh4XnQh3DXjYDixCr3daN",
  "key21": "52bDxQGbbxeijasvxcoCoFGGnnVMd11dzw96phvStT353hWrV6CJpy6N5H6Mc8keX9Pfkrov6tq4s2Zu3uny5fpS",
  "key22": "5vAz3KuSo5hrjjtwjuexqR76UNQRjksfDFWt5CU2fAgVqDKiUuSd9h6gPA59wNYeTAeP79NU2QSoE9pKuNEanSDe",
  "key23": "58WuL8hSyA1y9FJtGXLiPfU6oKK6crivbCTbwWSWTaR7b7vR9D16zkZpjtLSc939sDmcQd47PJa76cpi8Tpi9Mv9",
  "key24": "2kpTT2jgbqaM8pveRto4ZvzyJ5XEtQ8PJ2ZieE9f8FwjNyesuESVr2VF1gz8QDVEV8BWZguLE9Wuu8rYMsYfyWwV",
  "key25": "fPRrCZXHb7K2rctGggTdhkQZPXRXZHmEUL3RiGPUEyAXpU5buTjXMuqWksJSfbTNw49tfsYAQxA1ZbfMsMkJsga",
  "key26": "5kyGnv6iDz6tKuarzZi3pCzXJTyM9fpmH5PqEnFvnPV3Y2RhJ2iiAgtP8hV8KGbCYzLAgfbEHhFs9JWTddLR2aSp",
  "key27": "2uwYhWEUhPRijtgHx835sih6EcF4frz6wyYufvcHFuAdV5dnDtVG88jS73cMihA2Wn6HiRvSskNzRF7YiMxHSRkK",
  "key28": "2Gs6BBR7pJ9oos5PJiFUJLdGfYB2scDZD7AEwBVx1fVsrpzwUwp6kqTBVSzwF2znmA6NFGBAUM6cQdLZEfW4hqsP",
  "key29": "5FQce41vStYfTPHc8g14Weo9jJyvXVA6GZMYdetHvvjrNpzFJyKXNRoRNBTpNq5XnYfLdscHLDjs6tj22GLn1RDz",
  "key30": "3ShJkhFfsQscFgpeWUY2eGeTzjmSX3ghYSseNokYnbcJcTy9Ba5Nkx3tw2o2eRogbnjqeQUzV1eqH9qamy9cZG4N"
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
