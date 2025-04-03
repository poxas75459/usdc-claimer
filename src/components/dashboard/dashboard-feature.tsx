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
    "3kGZ4mRX61CeUKxXnGbtU6jM7UU4Xw7cicuzXRST19NWrKdgr4yWKyZrYk6X27qYXFnAmRqu4yBkJBaeRqR8GXW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TJQzesS6nuZQswTpWuGxCCUMjMjnAryLbYd55gz92Rs4w3gdxTyeNbU2tHasyBUMQxhGcDxvsYjWcCGby9zg33P",
  "key1": "5G89NjKpm4EGNA85rocwu4oTmZ4K2izACDny3Qit3gU9jaoZJrw9AACEqgZ8tNKUxBXzZLGszG8w5pyyFzNzUcRA",
  "key2": "HsPGgR2bCXQ3brvaCjk5eWuEDqp6Ewoy5z4xuJJAgAdLZzGYz8QW1ypAGnr5p8MRe1yMuB7mehU3mYZSS2hab22",
  "key3": "2UpiV32WujDarpYZJu6eiDQTMjmvvmRMWNhMV4oXpZDzibCsYa74qDuhQomVx61XQ3xDr7UNJ83WP5MhSuDyUK86",
  "key4": "2j1v9dSPjdGkcxFo9Ct3FALwYFjyWBVewJcE6fRkU5gFspv842kojhmKUvoLJifKFUW2Zzbvbp2UNcKJozRjvGhH",
  "key5": "NGuA887m3zKL8Dknwpt6Rp8gF7AjsJyKyTheGG3r6Y7JnV5RwANNsjbPtZ44tCLcFxg7V4WirqiqzMSVAcRM1r7",
  "key6": "5pEviUEGsnkcpU2wR27zy5zGnsA4vnE5P8Q2BpuQaSoiM1eG8rkUtqigECRspNzp85a1F2g6K7ArSqYcpbMFoK68",
  "key7": "3yAhkdFxyXddBHEqxqwcQq2eckgpfbHaD3F6s2LDV3mDapWfkM8epf7uw7KA9RpSc7AEQx3JCyW1RZ3uJxiZW9KA",
  "key8": "4YeB2tXmhKNLJLBYMLnrrEWppKh6GsWiA2PVEwJJd7h2SCaN1VxDX8HhDdy2122uYRLJ91F5c1XwTFp8eC2eussH",
  "key9": "sR6c1w4PvbQ4yRuxWNKuMCkBwbtTj2j7kgRj31zm5k4JkZNNPMjXYR9BZmL3gHrzqKU5k2iMMwLAurLgXDD3Wnj",
  "key10": "5f6LEgct8d1tMM7ZB9Yumif1m6hzhdgQqYY918TQcNMrcqqNq6Ew9Tkpr7JcJnZxjnAYbU5QbkLbuVQa5aku86nY",
  "key11": "2uqkgschY486H8SL429eSaC7CF2TjkciCzNNePhd8BKtScyRAfEc5wQjxRdNRetcdi4SdW6hRhuZb2LDidYKPUxX",
  "key12": "2SUHC93wAD2TD8JfCbGpkUiPUMHtcJwaRK964auKXSA53RqeBUUi6EUb6FCoaUbxazBx82qpnRpjTmgvhLPcspor",
  "key13": "396zz3ik39pTVPduDmtNYtUP1bk4Ek9eM99JtoF7XWsN4w6mrPsL1khCCEF7pSzgbp1CcX3woXZEuzG22oqCrt7i",
  "key14": "5r4dEbC58xQyRBx6d3K63cwHSLcvDhswibYHXVPAU6mxz2bUDeAdB3Fa72PuGjsYgK2fkEZfumyUCW8U17WPiZej",
  "key15": "4vEmf88g6xc8f4NVrEYEH3N73ZL31Y63MMJEdiTppfc8g9P4YhfvtDNJVYDa7Xggd9ZDhJtNFWGP45rx83kguPK5",
  "key16": "EHs8H1LxLscrgznFWFu81wdPhANoSLLqomyb5oNM1cnKCw2aY48eMhLJDFs1Fn5yHDaRXcJiPTAY32AUJSmBraR",
  "key17": "2sajKvbwHpBLkeVr5ZUbESJcSbLF9HcCRVZ2fZBKUHjUjxtAyyqcpP9cav9fewFpfgi4AcGwwoUjGfm4YhvgLXM4",
  "key18": "SBX5HbD7MLZohPioN9ACFfU2dRsUHbnf6ifZZ76pjFpZ2UziuuSGH46y71WCUTC8Tk188FAgmzqJyUU6zphiABn",
  "key19": "4UgSjsN2pRKQALtk8hk6VQ671p7BJbCpWMrm483HxjsVkGA7EC3DWrPWXWCmvc6d2PpACD36F9r6qCkzGKppXwrZ",
  "key20": "FcJt3h6PmBBhKaQmyuxcPbZQWqEwa87uzqWzHVoynCwiYMafP9UPSKVTB8pfyTnA5JAAHgCsPQRMzUcM7QS8C48",
  "key21": "3p9d5VpHcwHTX7nab8PbWAz6rcbirqLxgvJKttnKPRamXwUjMNbMNvkXb1PVU4sysWvBqwSfukKw8Uybn2gMTKUC",
  "key22": "616eAxkxVUMvqKR6z4vfRzh5rDWJneqYZ4NE42rk5rfCsSLKaa7wEp5qjEpwp4Uwn7vtYK2ooYTo1nQaEJYtW4jt",
  "key23": "3w3KTKixQNEMQ8QNL1bwNt6F4bQTvXqmg3sqe6m4J2Gt7nCBCq5pN8SxqwodyJqDJtvRQk4PHPJGYHCr8Yo1jLuA",
  "key24": "5eYotnAHHYsFmsfbbRYSFBWZ2YndsdBKmybvq6u4beBvqncxxsEQHxN9AUpe5ho3PnXoNaoRvvXZXSc3P8qsTtSo",
  "key25": "2bFDwRTh9uwHZkyFSXQQFxd31g8BqWtUhiwNRfPnVeAHUX7Znzh1mhMtJAN28CVGMjTBHHAQ5WGWe8WUZRb3L8UE",
  "key26": "4GQYQ1LitmhUNifwfciYm6E9iUh9UQcFNANDKxwZX6CTDm5CBR7bJT8WWQnEJXWGBRU7DVQryv93kGMkam8H5o6q",
  "key27": "35nPPBC58Nejd9CwzhWPbT4SqACjrTHvj78GrDj1rZd4xv21a2s5QFkBB5EJRxTvnUPCqteEcx6NQWc8SGLbHCFt",
  "key28": "5Xnft6R4Lvk4smz2tQst1p2HjzCu5Bs5PX2RVzYxXUsBWSLvdxnHwta6PdS3oVuxJkkfKKVPMMAK7sy2ngQBfAg9",
  "key29": "54bHhUwPSC3LXGmvicS3d2rLDzHviL6TAqKfpSzaa48vih6ZRrAfyf4LoRYhwq4pfSZYR3L7JA5jFTZBD1CvFxgr",
  "key30": "sCusYM1u4cRH7v3ZUECQ6uU12ZwyHGsRDsAG4MaJ9NfEU6r6B2Rt261XC5v17NoNkDFmCp4Qb4i5HN8c9QE9m15",
  "key31": "5uHPGb8pYFWG5VqPyGpwwFeJnSea1JjWb6dffy3KWzTpymEnniXRCZweS2hXep9rDWpaMxER1Nkz1jEjJnmwePg1",
  "key32": "hNWPNsBn6y8ojcKtpRQvQHNMycXaKb2xdMguviU1wmuzzHu35WswVKsDWzPnc8DyAMCghyZGgQrjVZFKBUWbm3C",
  "key33": "t85FpidHgzaJRNrVfoTWLmPrkuJLvbrECvbNu23oC1ygdxU9x41EcANAHPr2GGSvrMBpNmpqZkUgZF6dAN7cYxY",
  "key34": "5cfRPj8VG5S2Z4cHUEwp3kXTNzNspvBWnNKrQLPA2awbNu52CaVQMhkJTQdUzPeaygLNiHHBQYgnAmSToUzspsio",
  "key35": "5MUWdtrbr8LhUbKVtKuNSP1iohm1pty4L712YMPp2JkMKZv8bTroKnKpjMRBBNy9nEpYe4h7HiWhyXp91QmKkKaQ",
  "key36": "3FXU7kBwWAzPyq6b4yLpSb85ZaZyQuVu5F5DrUL5WArciozzHHPUx5vCoiHECLLhSaLsXqxZfWqnjUPkbU9LHER1",
  "key37": "2nuVMbwPQvbKCpqtTHcchMjLuzrZ3Kot9E7uogUC2W6n2oZ9sBZqSyRd33nxFYZPipnZtudKAJXLbAXYsat9vvDZ",
  "key38": "843oTqoTr1U3TCEFhZjqUCKhq9G2G9gYk9aXeEif3hagbnK1jSHKFviMWGeekMtoeUQsgWtp4RKu8gNS3P2zfRX",
  "key39": "3sLRPg688FrMknwiufPNyeMNYEGt3HSuswLqAKeHvp9Vp64xMK5anDs8xbhW8b8fMPdo8fLMV6b9mVteN1GM7D1o",
  "key40": "25CX6EZvom9AknaCKw4d9ReenyTC3aEopHzbG7tohchxrhJ3iohr9uRmeJp4sfSDW9aQ1b5JJLKm7LGkGuEn9GJj"
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
