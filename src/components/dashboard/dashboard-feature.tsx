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
    "48GgHBE1wo1E2HEq6fvfLRD5ux84aqR9x5gjofncdog4urVEP8RKt7kkE5hcBui9GGG3jkgemU6PzxT5HNK8yqHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L3u9oASwgKkrdYA4qUhE6HJPrw46qSJSB43qgQmPV9isJiqfBo9LEPHqp4f4ZXk78RaxESgiQF8MWrQtp3viV1q",
  "key1": "2QdHUxHWPXBuKW3Nu8Rk9NhaZUfAzYVZofSQaZLnG5hxVrXcQE4SYWdLf3GQB6ZSaTu6KSFHPcKK1AfMGasnbH8W",
  "key2": "2yvUKAbA4RyF5ZABE86oc1P2sVMhHmGnwA9y2jCGwTV8sxLtY8adS4kgV1CMVZPecjodY2A7R6Kgk8CiUv56xAy",
  "key3": "3WYEwCjikqMaMynXonMzYg7ThaJ8Qt8ZrKFjtiNrpBSKsjxkmnQdX8dGGazgmCZiQLMSGjhWDQqG1aC235ck46Qb",
  "key4": "6WVtwsXLeWVDiVt3LWcirzCKWKCKy1jHscArcMYB9BuAGZynZSeBAjF6wG389KSzd24rNLM66fyssntJrHr3kc6",
  "key5": "4DqQkV6mdHo92aLZuKfeVQ6BZnvButpYgE4BQ8PtXcz2dL6qhczhQ5kC3KDb1vVy9LJTDe74tLehgfpeAUwJ36tA",
  "key6": "5h8G21yyoo5oacHQrqdvq2sohUycnrJaCLWTug6PAXNfXTpdVorBSBP1qoh4p2xtAV6kEVJDL9yk5yay7JiLKmQ4",
  "key7": "s1ioxLP3NsRdtL6KsYFHTGDoNg1wZXMhvuKJMPmdgCaKkP1N1vVEdo7cLLyZ7kfgaALr3N5eCDkgERF1o49gn15",
  "key8": "Nr38wiCZRhbA1me6ZW2j1sVEFZJMuTatCk13poFahm7e9q5gxoKTDEpvzYABKZtcUTd91oCj6sfe2G9uJJS7s8V",
  "key9": "2K1qcWhLMxpkqghydqSLZ1a9BnS6UAxdNACCPZfuWmPj198Rdgc3XUTDTbA6jGNbJHKzVg7khwgC9nnKtFEPJ7bg",
  "key10": "4d8u3ieDEorNWeLEYf19xkyvh9BxVoAYd3ouSSVeGyv3BvpJWpbM8F8bpEoLECidN9XfUrB9UbGMkM8A4vHwAvDu",
  "key11": "4H4o3p8JxrCqNeTTiCGiJkbftSx3FExRaKyAysgKbGGGenk7Ub8qbZVeP5FxSUDqu1FgZ6ab2v9QFEZ5LKMJfXbf",
  "key12": "3uNwb5GzqGAtk2EnchRRLbZdSEXvA1qHhDucTTtsgxtss9cQLSkeUuJ5p5aKn9yi4MVa21RJhTp245tg5bX2mVXS",
  "key13": "DeKCfTKGdEx28cpijnu6vqgtezFZkPj9aXZZV5RbPF7dktmGjuVecTSikJvSA8HTMk1NssgTSneeQ4uY1PTwEJp",
  "key14": "4vQLA2qtEwvrnTWkc3dE3U2wFk12FJJVJ463mhVBk1jkzsRmJ5ApcEsgxHWSzeBaP3YRmu5RQDKW5f9843tBWKSe",
  "key15": "34C5THWDNGp2Hh5WPPSftRbnvNMfWz9eK6X4B3GkKthAwPhCwzQRxocrmQCZoJ26Wqz8FaDwEEp4aynDee4xUQ13",
  "key16": "318VVkQ11iKxsmDgUpHp3wBzbkj3e9s3kTN7Mea3QyWygwioQDsjRDaY3TvHvx6TjrGcYB6fauphwtWbbhyPUJX2",
  "key17": "4X3wsfEtEsd99GfTgjQ6JcVA4ovCdxR7FVergaezNmpwXJ1tT2x5gETGdo77uDVTg47vaFyKytiDDuLFp4tsoKmu",
  "key18": "G36GBXwS6L7J8uyjHN2Zt6icYxGJV7NJCjsWgkZANpyriVmHFjJUstcGDr2LgkLFeZRZSQKCzdKVS7HydJWrYsV",
  "key19": "4N7DiKsaZzMfMWN5C7H3Neq43G4WPjFBBzboB2s8EMALddc7BzJb6HkqiwTV7zteDh3i3FGfQaDD71UeyUcDyot5",
  "key20": "hdk93Mz5F7euLaxdC1XR9CxCoaLRSp2G2LnLYccsSZZoC8vhcPJcwmNrH6HqgHtRY1kPhpe99tKCJJbd6tPgs5r",
  "key21": "2bnb7gyos9iSBzWwk1ETni441GqGjuSFvZhvRSN2iRkyyjujRTvBb3xexnWRPv5Tuf188iHKRpZZvb1R58HFLd6f",
  "key22": "oBaoXTnAdwqm4AGc6j234KPs9ksydDv4hgeSHrkzkq77HNsFzZahRYr3F6TJzfRdvjwqkzYsVWo88L5gEWN4VeS",
  "key23": "48vREwBsgBtJzBoENgR1pA88MLe9LJqxCrKwzcSgPRpZqpRqZwzWquNTxvzs1Ap3KJmc826yhwJVDkWmUNA388qQ",
  "key24": "4BkWfyz8biM67NKK4oauLp987BbpLNiJVccRLtW25yypQoKPAHjo4hnkMaeK8c9JD3vKLHeb6qGt1J5K7Hsu2vFz",
  "key25": "2ZodsGNjo4ijTYBZUdTcFgQtEtzzExu5KkyJBg52EEEwi1q3STcC1TvRDX7RLkBieMpM9LQw6f7EHqL7iSPAQm79",
  "key26": "WJchmNismaYZJhxfjdkQpiCmPtQoQNawY8SUPo8mH8S7gGeYbf7eDMgsKzDXkJjLfV6WFoNKtpnR29wBZpbc84p",
  "key27": "39sDDNnBGoygS6WgKsaQ7LULjbDh3UuUBdVoJ9sp3c218HXKgiX589FtgKKywzw9VrC6qH9bB8XEYDUhzXb5cBs1",
  "key28": "2p15T1VtmChWJ6sSQF3TCYEoMazPHs2iB2MmETHaiPCX9Hkz9YAPeyA2mph86oecH4s2r1ykaX5ze7VTpJ99nRxa",
  "key29": "2b4SWFisn4ufaZYaouVgfJPuGsaS1ns4kzs1RUywUjH2hftzm25vNHsNGSEVTejrpmUssEgNCvRiTcHpDZXmeHaa",
  "key30": "4tZ45fMKinWk6Qbe9LxXpwWeHbyBzQqZSucFj8aPqPyEGHVEct5CEFtUmTy6P1mVPwndcaPMUMsY2yi9aKEwN9Po",
  "key31": "5e2VUCezsKo7Zc8T7W5En1YFELFDL8tMbwLUKMkquFLxnrEDBCeQwPMKWLi3Ud2k4mShi9tq6tbFkLV3KhaQrAgG",
  "key32": "5jVTgieA4R9VUJhHGqniUNNCA7cqgnhXRS1REpQrmTsE2fNcnp9ahZDGBz7wf7jzxLazeKTdXWCRZiNE51dK9NRb",
  "key33": "sZZ5isaUiaSyPnU7NzSUWysYJPVKMxbX42VMLM16ANoGkV7gXkHzrAKacoFSQzMmgyJ8XMFUgbQsdTBLmeAeQn8",
  "key34": "3LdSk9tZtMQ9aV9JUTeZ5ZX7DBprySAnSytPrEsiPnHx6B4aApXieEJR8HMTp7snB3ZNoxUZZLQTeNxMRKG5fgh",
  "key35": "2cZsFzLXDjfjqHfMChCNSPSSeeiZCUdULsHexEDcAPox3iHPkQq344j5HVPRfpcvRDCknQ5xmmrYFWoWSrwsTB5Z",
  "key36": "3dpf28Uj6JY2mViy4eT8uQawN1Qp6mrbhExBRsY7RjNjZ7XUoUq1YfdpPtBireiR7iPzitKuUZjx3ALEmvFSCE4C",
  "key37": "4gv2cXdTfbmGSvGjkY22PWUSzSK6RnvWj63AsudXo45YaCRaCGc5RraXxWewZDFnhAyPV3jH8queLkhjAJsog9ki",
  "key38": "5Qb8xyXhNFvydZ8S7NauKM9egczkPpufivXdtkw91rexk5W2yG12wSGLY1UHo2fcTrPCS2g9h2vahJZN1YupnyNA"
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
