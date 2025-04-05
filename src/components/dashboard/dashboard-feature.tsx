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
    "eeywt3tPCWHqjfgCL8ULKLyvSkEm5kLq9ZohXhHtQhL3WzusvfRMz6yepXDDuctDGLfCXCzMSvLmm8n3wGmJmbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Y3yprTT78Mz1oecNL97kriTiyT5XzKd3iAzvdB59GHSat2Qr4AGsqqLEHD26fpmRXTJvQri5stsM1WsXuiUGig",
  "key1": "4pC6SAiUCtjTbXYuD7zMesPRSRbYyqVEHM6Y1cpf1YovUheAFG2DkFG2t69swEzK2i5FqSCdcTXykHRqYWLxvvKb",
  "key2": "2qacNHHCBgwZ2HqDjnZ9FTQRHK2rdzhdX29fRE2RGWaQkoBc4HkNCQfqiA3Gf1UmEEVc5Ji3iToWnSG76cX86eKr",
  "key3": "3prGVcfm4Y3PjTPeSFgnCrQAxkSaVaVAUiiddvUSkkEDdQFJyikduxSt8Q254RT3NKYj8NERVjkETgq6WuNh6M7T",
  "key4": "eg9cubt9xv4Qfd2bHb6xcLHcsU1Bu95hdQMmp9cszLF73gmVHb9DxkKJwz1nP2QsshQuNUuW5PASYcn7u91HZbi",
  "key5": "5tHHzgQgDJjMxewKYhYeyFjMPY8jeC341763F9oXPD2eng4RRN7E9i5VPqLeVrkyxpMWwRk3h4NqbvTE42eefFdC",
  "key6": "4Z1inuVRGuN3krkJMD5Hj4HtvKBHR9Br2wof5a8U345mHSfeLFCeMVRLtnvLvWAf2j38cTwxr53mTiJ9vW4sTX22",
  "key7": "2N4JJLqhW6BPhEYp4tgSy6aoWWMQxfpHeMo7wubTQj34JSGXAcKXbekNErUXNQZLddCbUhuvWeBfJEmxgY4imoDN",
  "key8": "3FcG3ZtWFAH4VUjMj2mQjuMDfYQQXSYSKbcF53mnG1Hn3t8fJKtdYi3Qovnj9mVBkRuwxyVD4HK4qrqvRBKjMrRg",
  "key9": "3ffjinjmf1ePj7DFbtcq6yY6Ef5epzYy9m7qE84CiZMemuiqHpZuaFbYjUvSWnABjxyXNu8dGz7yGD8ALQ9jXKN3",
  "key10": "2RMRsqdBeeSLSc7Jg3FuF2RhsDBvPaU7HLpi1rwZWRTopeqPAVebn7ZUSicWXXWP1uaYXKqqCzqBeMrvm8TdCHfv",
  "key11": "4LhMTmWsS2sXmd56EAJ6p9EapzLNgFxNDxYuLyRP3pPRK5fgDwQR5tcurtasr7Uissd6r6jUBrPQJbuSxoxmw7m5",
  "key12": "2MFRXqT4vLYPGdzy89JLgrKLbNuMyi2S2eJgeNyii8RthH2wTs1PjXxk8oZrJ6UL5nAyZMu4qkwHV2tSRKQ4z483",
  "key13": "3VahbCgU3N7YXcw65Kqgv5GGh6my36uVNkxQoaU8m6g8LoFnvk3m2KeyE4RSbiZyyCbiMKBYcJaiQbQfRo8ze3og",
  "key14": "dTCtL2zGFKo6R7MyKF6pWNqMfxNLjbDuBqkX49FdvLg9bztNGNCgQje2U6goH8cpoNuXiJACj9VREGNZuAnpNKq",
  "key15": "22xuzYGiomM2AVM3C7aPUriSS69JuLMEqh54K9UidyW3c2f5bh6mSXWSqaVN4oPzLxQyijfX2DioGg38aGuJB4M5",
  "key16": "393V2AFPzEk4Mu9vkhB6DGbQUT6LYP1S5DNutXot5Ab5294Rtt6uf5sERes3PtvhqiFBXBqZVmkt8ueQzM7hzuyy",
  "key17": "4MXBbyd1FUMc7xKpu8WYQej1ayG885oXwpAYcNLTZ2RakGL6kxEqz5CRERA7Dwd2u4g12vwVQydMXCAPYjbsmSZn",
  "key18": "4GC1Qp6PiEFNfqBZSA4pCDLDLT1Fo7RuXPJpC1JAJqNbygCBMBcBHLZ2gwvBpj1YKR1QDSUTakTRw9wakvRf4F3S",
  "key19": "5fBDsFsPELnxQ1KG8GWyuyFb9zZF5SCNscKcNdLXfy9M2Gdv8h85egNPtau5wHY8qvPU5DvqtWDK53d2ptZE7qiy",
  "key20": "fdfnTEdcnJBhVFM97xeLgfoHbVYkFqAAVR6JQz2GUmkAVVweRQkTym49zerAebU2gszsFrCCkfgCyLRtY4VMryF",
  "key21": "YcpWBD7xhoDLoACyT58HR5D4w8iu9F1heXnCiXTVXpRmSjTBz1qDi31jFtcpEuoAW662LMNpBkzwMLMjGc21kRa",
  "key22": "H6F6GEcwSC9Hx48EuKLM4aVTg4VLx2JVVFFrivs229TyKJujB7hDrzX9EyCPnD3MBoR28L94saHDsjCc221qC5h",
  "key23": "5LN9ZDe3xMmruHmVUKRwc7RVCgrzwFAwcZ5UgDfZrdWJSZKTMMKK5oGEv4WXcDHX3K2qcv1DGV936Qg8YSdDEzCa",
  "key24": "21hHKUgjeJZSmSA7qUv4QBF3F4Hkr9tCBbSmNniyoJ9bzPY3wXfQfkn3T9W3FksgSc9gzahXTYHfWGtDnSvf6omX",
  "key25": "45Sqk6zdLk1QcXnnGkYiv3dUSzgSeDsWLzaTi6kaJNJ5nNfQVyLkRcgfjpC921bSzjGLDgzLHhw9TH3oKPDH9qVP",
  "key26": "5sHag2nJyPuj5fQ4fTF7fEMQMmNWeZwDNirF2Vwr8yM8FHH1fvWucAEnpRGLasCHDPBiLFchDZVbiN6qWJZYHqQx",
  "key27": "3ybWThVsLjipkuGAfKj8jcz83kvwN9njB7imURLHz4eWHt2fg5dbrySvHPjCmE9Eess1ymsC8x8eBMcrLyDPKGbx",
  "key28": "36go96AySSvmWyaALtSdsapVN7ERrxwaVC4gnjTN7Pj9rnJUAH2XVk2mmu1pYDSyDX1gwFV1PGQTKp7KfWH28LnX",
  "key29": "7uEbP8e4BRNkKTiYKAMC4ZA89oKPG81BDQ74yk8AKaMnbNVahPqn1WoJFxkQVCEfLcvb3vi1vybpxwEDELtPK21",
  "key30": "5phuRWjRm5SjAW6Fpqijzx7qNBYpWFNQYXBzok3L7qbLVBvzpeXgnjCyttZdDno2p9ZihtKj5Hebgihy1vDoEgaQ"
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
