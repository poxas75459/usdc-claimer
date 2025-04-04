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
    "5S8tyn9zYernFzs33ypa84iZXhK3xqM5Wbp5wiXUBp4npUCaUymMmyEZSDPSybKbf8WQzKbr765rv6e8Yi3uCcgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vZhuKYnZnifMQkDtvxi9K5VtexF3BD9BuXizXrkVCuVWRkntsRMkJ93ZMnc5ahgMsqFJfKcmPSPeibv12htLw2P",
  "key1": "38ZkWhaUeUETy9GMKCuRD6pVbTnCSV6vephnFwmMs9G1MPUpuqy5AX2R6S1TY7WUva9VRPiKABMoDnuUobAckk2q",
  "key2": "z5ndsPyPojyac7FxLGqABYriRnQgi3nuVdkMCDHjnvsMzCQ9KxPAr9GeTQ6kL8yquqC3Ua9CMJKAVnuMn9KAnwq",
  "key3": "5h8rMeAqwS2V8HnDvTLU3wip6iRoZw78ww5geKyvA6CZKhJFfeAjeDSAd81JxBQr9xFs3dYJRZavrpzPN7U84Frd",
  "key4": "2tHnCW5pDbQrjRNAoBL9Yvt4NTyBykYT3YGA7pc5uLVPeaVtY9XVTZdaX1FANRyGu1QiZQWJCTc56cRCFHEhEabm",
  "key5": "3mFHdA1KjPEdoehyEMqKWXiRdG9MHs3WVgQxkmwDmhge8n6f1ktQzzBt8zjYsK68w3SoEtWYyv2jhJZpXBGeytdi",
  "key6": "373Uw2HYDtS4PoHmvfEwz7h3nA5BY5z5C1iA7RyaNqkeHp3hyEXMsc5EjJhZkQ4NMVYLZo1WTE4dsiQ1HFZYeLGd",
  "key7": "3rKa2QTfykrYmQri9QHbyb7wXTAMQqi3X2xcfHrN5JxBJ63hA7qjD3eLyu13dJNhC9DCBuVTPKsvJ9PmNwNopsu5",
  "key8": "5XuosVYniBsUjb8eXwX3AFZHnGVbQ7Brny2N2fm84DfXJShd5tcn7LV8JuRGdSDBkPytFD7BjtVGusLHMXTtaQGu",
  "key9": "2mHPvxqVFTyVaAs6ipgcZ4j5zniDHaC1SseCewEeLneVdyZJVrVnDeUaFSvaFLBMs18PhE6LS19hn4KXFpK6AFGa",
  "key10": "3ZaHv9frzF68RpfR1nGhGM33uTPsXh9DWnV4xoWbaUxvMKxMpMYM4xSZhaKgpwEnYhKjcpGKk2iJ4QESKChcFzen",
  "key11": "5EP379F2uiWAWisAqFfv3TbMCQxDUKP3gwMp8q4LL2icZ76pHRc95v7eqvNjsL8xLt8i24wTK8nqWfU8tmTXSz6k",
  "key12": "4cuh6JKg4Mx9PcdbUSgQHZSusyAzDi2kWJYYFqdSQoaqbaiX5NxVjTo2kvtXBR9zLGRm8qjmKSB5xEFw4BKYRjX7",
  "key13": "5EF7cg6g4Qq4zJg7u5eL3ChYAySiHK8DYEU5pNcfB1xjPH9EQp8SDjmctEGAA48weQ3L8VJ3bNGdEMUz9kqeWE5Z",
  "key14": "2B9zrJGJKGsvnPkT3rUNDzyGYgEeKM7sTmEeY7633d62v8Gp26cTwzcP5dcc4VAsACTRTc2KPh8vro4mwaTRrUAd",
  "key15": "zHxFrkuemurzncT5ELxUnXyrEtXQmhRnPJvqED5qjE2pxnK34uvbk28Gvy5g7rT5MEFiCwXRpW1W8gP2BEjrY4Q",
  "key16": "43P1y8CkWQjn8wGkijNAj6FbSAD3ewSNG1cf9g66rVGnVaPRgWxT71oqjBYVYrQhSPFdj8YrvkpQBu66amk8eAtm",
  "key17": "5PJUKLoyGGcf2h6fV6bP5mbdaXEadCSueKwC5F8PsYLYsDfLJTYM3cXgbXGJKWMK2ZwReodAMYDA9TyUmBrYQM5t",
  "key18": "4v6zr2EJFibNe2qvSbbte3166ksygbG47xPsBrdRtycid6Tue4LxHqnEZALEdcGAwazYVEeVvomW3YL7ZFLFfCyb",
  "key19": "4aDMT4xtL8cm3QnzqMEKy73sauamzvpqiC3sd4S85tCF3FK12egUAhicud2k4MuTRWWRAGxH1hfcM3pG1S1nLoYA",
  "key20": "3TYta2vgtvyzmwak2H3oFHRESmZ9596pyJ4pLJ9TmrkU4m1rCiGEJYRSTW88F91TtFVdSokC7pzz6JHrosTZcmHa",
  "key21": "2ma7Xw6VdW16pRFsW1M8TX2XdPycWer8CsPPzEBwyjXHHgsVQ7jXn6mzDJvC3i9SD2F8PRwJuDzE776pqtM1GB5X",
  "key22": "4mrykzxoPb2aoFVnf8KmYD1qJdtfNv5eUAQqGkYNy1QdaszRCdRAmSJqNYYDEEAxPtEsdmvyAco2E3joX4NYNkSR",
  "key23": "4Gn7fJEgHdURWPPM4ggjejtFE9GPN75YiE3GMHEz3apgVt1s6CFLTaq2dYbNJMPfwAVoQ8ZdmFManXR1aSBXi82w",
  "key24": "3ochevVuHjkEH7xBykkHSLx3ANRvRN3PG7YXnSsNeSc6T4fPmyU6mvHCztiSXgwBgKxjzENP7RXS5eDeqXTNbT4J",
  "key25": "3HYNNP8LbKM8Y3K2mNwbXL74xK3oTissvW41ZGb9dR5yLTcHHzvWKqp6Le5Hr6CaNE9igdNj2jptFyWVqxGa7SwS",
  "key26": "bPcVRXz5UJ7VDx9kUCx2vYBW2LAm1bJc1QVf2dHKQU3wZYm4aQpYYcRcPcSttZkE5CoAfbCTsCdkhRtoQMqcUcq",
  "key27": "wANxEoqDtSWYEgDkCfsr1hULtBfJXX9fYxFPfK3QkHHfYqyZnRBkZhMXNEi7y4XfCJ26Ysec6V5JG3VXMv48TjE",
  "key28": "3BjaXutkcYGbmdJcDTG7FnxbyFv8b8DqQDQCbrH4M8cVwntfnRRcQXNDNqDDPWJXAuFZn4zX8WRsckDWDTPdr18x",
  "key29": "4zMiSnUo3cFoNyujE7TcB2QpX4Mahq8RNhdz9NixTtV3PB5SFpoAqtfLFFZGThoTAitZLyPJy37LkqTneWb7UfiD",
  "key30": "5ywg6QnXAe29MpxpLdGs62jafyEAMghXFgJW8JupjG8oEnsZtiMvqUTUp36SxkBAzwHGjRpZHeWaLYuXA7cqDqka",
  "key31": "26rQUfJicqrUkRp5R7iRfQEU1ePDk1vz8gabzkQxTAeoEhoxW6YY3PhvPPAjzWorezNx1hHSJVr5UR6cTj1WVsob",
  "key32": "64ngcnphpkeJF46X2AiW41uJX2ErdDz3WeMQUkSrGww1h81nrbj9nsz7w5Max8kcSuDX6XH7pNZpEo7dpJMBqGrs",
  "key33": "5RKxLdL3iWGcTfiLBJN9nMB4hcTrLEBCVraXajPznXXoEuN8ThHyk216jq2RMQ413Ty2JJdu8o2hG92jFGZkkFni",
  "key34": "2EVEfr4W6GEVv7cvkewRHj3eFZve6BRHi6JwK1NU3VdMiKbRjQc9wp9hr5aNW1ySx1KAt7L5zW1nLSwwzGWSUf7J",
  "key35": "4REayfLtLNEyU8rJ1yMLZPvKdXMWB3WVmchQ7D95QUvFDznBgWrZVywfydpyq6zVacbNMY3YLbR1CemSrPFf3bJW"
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
