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
    "5ymDdoe7HwZtYCZ4EQhNewweCaHe2wdNUZWAob9HQLEFVTSN124qLJSzrneeYfNRLyu4EY9zjRn3Pv5hA15CQ8Ro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AtCEL4iQRUTyVMCgpWs6Egq3jpMBEPkKitZbitb6dZUYqjYYbGg8F5Yq9G9eJvsCBsPighztq1zzjWY5qPTbuUd",
  "key1": "2wWh3WAdeaAHjmug4L74CEDYXoB7apRjaCCabwhUdFLN2JFjTfuckR7yr47ZYpokYT4TNCssJWLuE1cKU8nUMG17",
  "key2": "SNbM1HsLM2bqABoqaBMYc7m65pDw1sHeR2zKwcA8HYG4x637b4Taxo7C2xhY4mwVcJhdeBwWzzEPhVxYCyqjQJ3",
  "key3": "3npzdGbHx8fK8kifjbu7t438uC6MGAq2Fc1VDCC6nygWMdBi3RQsYgyRfhgxadSowGEUgKNWaUb5N8B4SvBEENYV",
  "key4": "5AotTNPrKeQ1erAtiuBdyWD1JvBq3AEh8k8KG5sMMiDnc9VyEjGJmXfSTeVbVdnaKQY6mwywgJC8NVp4S5WoMWNw",
  "key5": "2awUHBy3ZXUaVMLb4az8myYNApNV363i1Bs4Xvvec1zG6mBhRL1KFM8ALMaqWURrQSCF9UCwqA3HjUAxa4o5JPVC",
  "key6": "5mwD6145q1qGV3nva4UpK5fbEWmPQPspLgeVuNvKDR3R9D2MwPbjhoyV6eG9EqbhgcfDNTbS1a7WXnKRXxzczSBC",
  "key7": "2JoE8Rnq8pdtYQpKoViQqzNUyhMZWKZZpn1G2VFG1xaeV1HYHoAjGxwNvvU1P6nkecQJWU8cwLZYV1ZinGhrZUKj",
  "key8": "2d7whNJ5SCehMix8gFfYnMnKGQgLo99yS3HAfLWj2SV2HsHrunhjnnMmkYKCurBGAd85w149tEYEbSPcq5tjL2jd",
  "key9": "4z841BSNLJZPxD6NRkZfUHpiCRh19GiVGDxYUT7Ef6L4Q3oB4hXmtPZ3x5c2ENbQx3FaNu1r5EGoVsLxoWKgpWc1",
  "key10": "5qSV8ndBpWcYdeSKoqb3B7NMqzxqrPYHXYp2XzALMCYLF5oM1UbiXGoBYsth6kGnjMaYEBrfkx7zcAejLVSt4CFb",
  "key11": "5TySQWahGE4T4pgeNR4X2SzLp3fL4sgrmEG2pJWyXHttFCd8iUaCSDiwr39o8ME2PeRPNDFarR45sR7SogtVxNq8",
  "key12": "382GMLo5taMZeaHYudpyxYNhtsof4skpSxYBqDL9HtYM6uL6BDpNQeSDFaX8uCM5B3yCHuLuPE3d2gm7zGJsoGxU",
  "key13": "4pd3co5ACPLVugV8vFnPLS6sJt1CdJE7fvg14f4cLVJdwG74PFTf5VboaoZgTWr8mUSGkgHN1dZSDd3ACHQHetVh",
  "key14": "zNdLAeLSDjAcsMp5KV5yJvGZx5ExHFXNnFixW8HC6Dt9g3HchJugomWkjbKS2rxuWyF3YuoLzrvpQ6L3Gi4ZdKH",
  "key15": "3KTfwejNsof16q1azkoz5KnJqbKDAQMGtV4sku5rJ3xYMee7e3iW476aknBzM45fqySdUpW2zY67KHLSqCTC3G6y",
  "key16": "66mAVzP6nCr3cj9evqcw4nJwnLACEpyfSb6oSzxuwQG76K6VBBJbJmE6TRTwnvQe42S9RHbaAS8UHQjEyYM83QNX",
  "key17": "5bhg3CtiWvHT5HNSP8equwRTCJvKYSQJTLD6kxznj5VR8L6JeQgMHwhMtpkXHv5dfZa8mnLHQ3hhktHGKXT8HEjQ",
  "key18": "5WfenfqWdXNY15JCmp3562AfWQgdG3KGLk5z37PgFyT2Wuyoc1DHvKz7sKPij8M39M9qynbKzZy88viwaowwEbHd",
  "key19": "4kaQop81hqubvpFLsJjQeDo3h5Hn1R1MpYWBc7dXvyTqJsE3XXefmCjRVM6iNraDg3KDuXPw3x9YU4UbyKEYJhtZ",
  "key20": "ZxeT3Sr4hDPxoz4h6beT8mTYQKGJGShrjcWQ9zypi523j7Ws5wQz9mm5V2upJT93rYiXn2G1Wd2R3wZs4n7v9D3",
  "key21": "LPpPJBEu2DrA1Sbpx7C3hD2hnUrZFmpbJJXpMm3CYPiQGRWzyeTCTGAdUHH3NnPcchCzjYFbvunNwwmc2r47fMj",
  "key22": "4uQ3d1pFnvTG71So6CrsgRq7TGH7SHwE9Y3o2mQFMWHdYDJd9BVha73kgvRcoNq25HJJATtQVKo7gWC4bH1BbcwF",
  "key23": "4QWXkVXsXvUgPmJpUEUntmEfEqhuQhmJtzESybnD1uzuXXLDBD2rGypT2EhL7cAZDkdnXboGkKsq84ZxFsEdWXc5",
  "key24": "zs8XeEjgwTR9cbhwWKeXN7YnAd9wY4xru1zssmMr2s8gSkEb77j6ToZFn2KUk1JpYZSGMDg3LZtqXVi7QgDbAMK",
  "key25": "5DoboHUxSHcy43hXK5i56gk5HDRF2MG68sNPpLGd6YE9sWgN1MUDL6t4s5BkscZTXw9zjoaXWUNrfXdutL4APaBy",
  "key26": "rMBthfVHrQFK128hySW8Z51RpyNjBaiMYZduxLZUeTfhjiWN7gSVJDzQ5KYrxFk9goCMveZogRX8GbhHFbR1vBF",
  "key27": "3gdRbja2qA8jZpsoxPa5jJ6ndmsYQ2bRTu2s6yJfMHRjzsaFNzLyrokwN56jgfX7vDRdT6FiGnU35xkGGhXnS78V"
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
