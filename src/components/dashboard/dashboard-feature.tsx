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
    "59pguhmnC3pzxNnjdJZe6p8YqENQ4ZFb8Za4dch78uCpeWem3pHYPWmQYvyFxDStmyPPFudzD1cxFuLgNvbDi5q3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MFufZx59EL3Te5P3tbHCn1n6eTBNpPv49ptZG61mg5Hb5tjDqXAfWeDsnxVWPGrZ1hzDR6pxwFBvPBcqGNFc6KY",
  "key1": "ewKsUuZY6VU16jqhcn1xY6pGvNY1SYDMEFMG3GhhQpB5iGuCLG2bPw5HWPbL4ToZwYtNcSZpEiZFTrChbYsUQZu",
  "key2": "2bwZUkj92rEYhhjf7WQcZ5M3aHJSH25iKyUJZayQq9egzfrjEgYBBtye2mt4KaC3iENPTcXj9iKwj8SUATdQWaiB",
  "key3": "4cuRnimqYL5jeqbkLYvefa7iUJXDy7An4VFRMLKbGhvASFENqLdNsbUURTvAeDFnaGaspqJKRNQ2tuHWnLakMDD2",
  "key4": "3vEZKmkGLbB1gZmLhraJH4Q9k4KwfNgHw6HZjPkWZZmK3ahg7Ab8jyBBhPwh5nHWUN8xGjuVSwZ3MUS5FY52C8YR",
  "key5": "4BvCL6nMsMTMQyZPYcyTBoW6UPvUxHEwvHyJJL1ZoPoYYExDMzHxn1bCGZedsnjBDnEDVXfWbSDGPqFrjQCoijgK",
  "key6": "542dHNGZHe6bNUivVcQj2DmAoacZ7kVvPZZnHwZQAV2neHHP4pmVxiWdC7BriX8xmtMWpUZmEeeHxrTKQ1N5DXXz",
  "key7": "2Uk2JUapa4n4c1zaUErTq9Zu7QFwweqXXgwkKPULqcbne23taLraozqAdZavXCNPnaXJEfALZXrASK1m3eEDUviE",
  "key8": "NpGPPCy4fNZfMdt2CrJNC7PJFzUaPbJmHkyJ3aa1RD5T5eJgHHgMqqh4GoMtt7DgePAhBmLHj3GoZcf2MwoATmn",
  "key9": "2Aho2gpNagZZ6thv3PLPrwX8UGW8aUoJYecFFkRygTG1tJ573F83SgEGyhSmAZNE9C6n2otyveM18JSmaj6v2E57",
  "key10": "4aW9q3d5HK7cYNpWEQ1mwGdE3E5a8Arf3R6z8iPfPUfnvrjFezDnXVhWu8ioyErCe8FiaFDHKMePBWmKhdb2SjBD",
  "key11": "2VGHb5ch3V7wxpG4EunHQ7X74jtjxHkWKWNcSb6mpkqfQTakTTYp5MRab4AXMqPmcr2uMoTZQv3i8u8tWmc9hbvX",
  "key12": "5fXdemfwm7253GjrxuFfg1B41w5v98fevuiRWZg19Y3N7Qq2TbqbhgkFqiXcNeF6X4A3miKSWB4B4jbv94AfCiG6",
  "key13": "45pxY1wz2zVvhh8fDBgLdVDUabFCRvGUq72nggZMUMYcVAf2qwa4t2QJKwRKTTFiXoXedUXUUqmsSRjGP3SFJDex",
  "key14": "4DuCQmYEqsgdXqstwLW5XGmvSSUsok5JL5Sm8TdMYrvgTBp1z2YsLwiEyxKQ4mo57avvtSqmcHwBrifaeTXQdujs",
  "key15": "4G3M7CrQhg6iy4AQszN5kikkSEqD6xrv2A8Heqr8t7hZukvQBNGNaQVUfxH4uZND5FGWZS3EfYmgQouwwWWs8HaQ",
  "key16": "3dQ6k4YccivVPT1syz59H9BkUHknBZKBcmVVHn2UYYPkuiYJKF8zeYAfsJYxfTuzfv3yv73ih3XZ3z1yA7B9gzF4",
  "key17": "3ctzZB6go8bGdHK18GAKUxkeugMPhXCzgErmiDPYxAREHRAEr7v31cBKhUQYsS2idvh8GZtV3T9rHw1CFZhxAR7X",
  "key18": "aBQbpBJEFB8euPMR2fKmFGwEHE3eNEKNTFFHoZQCNjKQr53wLmp528sGhcKjMBx5YZsRYKfmnYpt5B3VxMF3kxh",
  "key19": "5mJYnnDGao2UT3oKsAPchbDaZxRAVmS69SVBEo1a9kw89Zk76KhtKLUc5qa4GvrcsTDJxebrULpnS4e3vg9sqnpD",
  "key20": "2DHvYjN32XpBP6Kfo1KnqLwFz5yzf1aJjJTKr9195EXYLVKAXZCQYwtv8zU7x1yBpcXfkdzRMF31n47Q48nQahuL",
  "key21": "3h6KT1kaLpi59LerhLVXFFf2Ua9dnVJaAmbe7oM6weiq6a1GTEarz7N9bogTyRTV1475HfKNUvy2vJWVVg8zMAre",
  "key22": "sgv9aEFskeZAYTHkjvbuaTEdDAhsQ938ZMH2BDX8SxerzcQhLyUq8bXLgPeCR6y7ykt2cGpXNNWUWn6WSzmrSUx",
  "key23": "3ygcAY21wdUfa6Ruj2VWh4ToqcZWr4JzUWB4TQBrpgLAouDyqGi94gyYyRs6MGBRshWfwLu4E5GYRdx356CEWqWN",
  "key24": "3thSKmMPFbSajAG2GhWqSWAXY9FVGCTturnmm7RQsXYxYTDAN4Wq5VE5VwmVQPEt92VaJ7AQfPrVxZcEkWUd6G8D",
  "key25": "4RwYHryP5WMKJtYzUe9YrF5u8nmSxUixHuf5qXVLUySpP43d7Q5cKezBG6JK4RjTTAHh8BuZwdaqE4dEC1FE98Ss",
  "key26": "4hQM3wWrVMj4AK4254LEM7vVoKezQSJ98DWMJJvcrxQq8N4k7XmSMLxTjd6R3MYg2aD332azLHySR5UhaCCjjazc",
  "key27": "FRhXRqjAX6xW35rYREuBSEUDbvjsWaDia6QiPiZhXc8ToPdAuWrPKGdcZrXMs8PKaE9Uvt6GuvBN5pWiYwB6tfL",
  "key28": "62zp2pt91tr7hdadgjhJi2muqgH3tZ7BHDPLf6QqGebkjcrrZmQ3A35GMjx1ur7Dbr8A7aDmfp4gM5be3cCFV8hH",
  "key29": "3tTsG4FApADaCSymN3TVqeYk86EEXaR2wfiAK2hD6YxPeLpJUb61SaLmW6wPSyh38A2ehg9gv4Y5LB1YnD2yAa25",
  "key30": "dAQPZsLzEyUfvJETyMUKRfjxdEzXUoAQ4YHgQnzconkLzTYA7LY7jSpFAwHqW5JeeToc5FcyXnC4LLLG9phZUp6",
  "key31": "3y93evWS995p9PW16ixR4tzYErNkUJdJWGWJ8hjnkMTxmjfbHLNWstYYCFzL15kPbhZJsYn967smCDSHKpmeeQxJ",
  "key32": "NnrUbLkiJgDyjcQQoiXksP9wR5VjRwaK8rfqN5jvLaLzoiKm6EGbiZXPSVtFqMApKuU75iTgisXAVbkGhFLXRUV",
  "key33": "3XQcAfyxt16M9Lr6EB9EnGmjMFqQSyPNHV5eNxFPnVA6YcF5iMjka2hMsf8T1bY6ptRxsFHs1T5U2hApaizeoJEc",
  "key34": "GJTJw6i1QfYdJFV1gC4QrQCkdPYGLPSwdf3FdWx3PpLVbpGAPq8YAQRCAJAZd3QFxnP2qH1kjmY3Ao5rSTSBSMu",
  "key35": "53SLhmasrZ5RNE1suChrCigtwaKtfRicaLfTMX2AkpB3AKyocst4XSGYjAd624iGhq1wNCNw6i2Fvi6jbSuSArDC",
  "key36": "31DCtUt3Yi3xnPr6oGCo15BZkfXReGPj9cQmEKXymVkm11TGSMw1fiDzUFYYvxxGcqRPvxRXXe2UCrdbbwgxsHqG",
  "key37": "5sGYRabADzcMgf3MzzsKpN25YPNXWtkajpDWnBNGCakvAoxK474mGs2UAZ8pBHbsMDqK5Y4F5jUVsbeSFPGzZH1G",
  "key38": "4cPDNt9cW9AKXXiESfHLZcNNXDykqurELMg9yij1JQ5gUSDm4dFYBgYbDrzVYQPxiETNYMzm782LzcMMhZ5QaQvG",
  "key39": "2AHdduMKLtX6kxi5Xq2nPvQAAVQJ8mKSM184sStQi4WzAqAf1zKY6iVcM9MkEYGrvMcp5cCqNV44TWx6gUPoc9HM",
  "key40": "5TniofMitpunsjA6MpqiNQ6k2pgiqGkTwCbfVdfN61aPFmQorkzcatGprKEj59FsHbXLQ5WBDqrDC2WrQJ9ynRpA",
  "key41": "2hAevw5qqSp3wNuBUpXX8QKEFsS5K5RBLrPBwXzfrpNjxJ33TYJh5aRYvHTP9hfaaLboEqhTUh3YLtBrAAo3e2Cv",
  "key42": "o3EeF58rWUA6YpNbwevvMSf43Mxsud3RGxXPCSr3JXRrroXvMUwM8Mg2npMrwAGg1oUwKNtivpMkDPiKDomGTdV",
  "key43": "5BwAeS1N3dVEVAsoWHe9doZuPLjK4aMqjLQAgim7gn2SAxSuM8A4FCZNPDskuES5K8QGs8GogQwvKjK3nzBdh47"
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
