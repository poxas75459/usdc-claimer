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
    "2wWskS5BdLaZmQ1LXoLdSRnv3zh4gu2duFTKdkQbyB9t5tTWeUA6wvi1YHJmK3wUmewRCFCSty1T5RSAYBkLgEt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P3qQMHV9FCrRxRxZAK2NucXxej6xc7kmiJhcb7JESQ74Lxxe4P9s81iVMAbjK6vKdNzcHB92ooNCee5Y1ddGaMW",
  "key1": "3gvxPGVCE7YAzFiy7he2Pnzf37prA4aVr26A5pQ5swVhoDyb4La4CjaVZTzbDjcSZSVwpqpbaPgFUve7vsTyTcx6",
  "key2": "7viC3bX5NJ2iJKnL2VS2rfFGNQnqJHccNCFVYcMKacxmjaefA6MqGQoBMf3yw1Nrx8rozvwLuR7duPRwFJWzjHJ",
  "key3": "5uXwECs72ypDYE1YeDBLD3EBzFuys178TwVkc2twkRmpQFVvz8artqofHgj4wkQGrVT73wrhh1s77uFNk4p7vZH2",
  "key4": "34rbCvhJWoTKiLFDdRyr5LZKJ4vMGUH3WhWhcXruzymME5JX79nh1L9QPW7vPDoBpsqRnDHP7N67vTTPwoJECJcm",
  "key5": "5oQRfcR6Wteox7S9Srvf7Rfk6yzvEeDGdDoR2og1Us3KkxiK975nup2wyJd8qiueUHCz9LduUbnab8uLXZBwREc1",
  "key6": "2dn9VbtuVFcurtt7DgMcwgS6tGzo9wWfnMTm3VhruFgGPEMCDPJN5c3Zmyoc9QZ27fN1LrDEaqqYBTi8nvUNdZiD",
  "key7": "34ZBpBGXMELB95tD4zJxAzN2iFeG9UDhbS9QBCGyqkcKsZRph8ANZmd1RBPQBXGsJEwvSSh4Bn9Xgj6pmrfmFBBR",
  "key8": "3yWpN8AEeGFcXdHHWxorFgi5DWjCCAKxt3rq9stc8cPUb1tgRzFBqvX1S1bTxotpnUtDzTS1ZqKKjkTMQNzhsq2S",
  "key9": "3ugKJeDejJerVCp3YYUhER5DhWQ5Wa2d9pXXen66vtfAbnYJwGSyuPfeutuPSCY52Mn2qC2R3w1dWj7Q4dxTWohd",
  "key10": "5s79363uuCaxrr9WBDxwX8aeRGSrrm1PCtVCD7pVKB2afviGspT3u7zHC8AFzVuxBfLf36DEfseXf6yNzQBUSiUt",
  "key11": "49sUGcmLWkDZar4GCycV3FPCYzY6pAYyL5EKuF7HZWT5fNLqTbuyfTgHeVtrTTXfV3QTqxeG3mFqCxxMesVwqked",
  "key12": "Hp8ZmBvYapT83tZhjL1cJgqtcCy3t9YBcxcp2SkCNVUs9vY2hf2U2ZbgERECAfR3YLcx5WAE3gJpcbrCZdCEc4W",
  "key13": "2D9nc55c53Rze5jPg6tb6VJQdnraseWaoF5m6gfeVo1Ua7PwJv8SPajmQ63iJbWk24MmYp6vAbaGrnzgC8Jg3kRh",
  "key14": "5TsrtPSiHWMgsbj5C659SuczdEdGddwYd5wpYidPUvbpHseqijrhGrLBzQB6nZ94z16MUnbK1BM4zTDzHLNRJXmW",
  "key15": "1ReYjBjinUk21siGqr3XLG4dbk1W28jkUJ7MUSEAc2WAWbRUb766U36NKbyoGe1vFsw6P5q3aDwQi7e3iModV2Y",
  "key16": "2NbN2qBuA2YWPxTq4jmP2bbZN9y1d8aJUXXzWoPKDbunQznUaBbTstGcdGRhk7PfSjQpMSrnf8k1G5LGovHPqaCf",
  "key17": "2Xix9m1En1tWBtz4mdvxVtWaD8uFKhUky5V8acpMELud75zbaYbGE739eo2hRcvpAgdh4rBD7NUz7pmtYicwPdEn",
  "key18": "8nK59w2u7ptxvqHhZqjoneCN3ADzFixFsLfzoEHMffPEJPrQh5NPsmaSayyRShr9nFSk7XZvi7ubNXBHoxVh86G",
  "key19": "5VtvJsudPKRVfkt8ZcBqkWVvJsnyncygpL2zsNSXqHKS441eQMZzYkk23LnriTC9hQbJBccTrngG7Er6KrquMbuj",
  "key20": "391hZrNjYqVwGH9tY7pkn7V7PPzZigSvYhu857K4dp5jeLcE7DgB3QixkkerpCzjxfJqgmEe71vDohcH76wjSYpo",
  "key21": "1aSnytPHrjrJupkyCgjmsWUrxEfGCXx9dNhZBcRH6kELWPNWHhLUi2Kvzb4HtHNeg2SK9yA3hFVETc3JFyXJ3iZ",
  "key22": "3XVWgqv1SyRBtGBA3NBQQxXJVsayi76nVU1YFK1D9gvwYiYPQtxwdcSSSkQRrPkrCFQ8SgSgSqqLCwiaDqZeERB7",
  "key23": "2R1X6zVYDbqYRuhhL3NzJCwC8hJEzUDuw5y34jVE84KPfHwGab4SiSyFgUHr5sVmBgDUCRwVoWtQJrQHiHVpw9Ak",
  "key24": "2a74W4iXrSGa798MiV8CL25QH6YJqyk8kj2BQkz4Hk2f1Lb688pXZnpwLAVKBbA4wzNZYdWHCkWTo1biiVfQGba8",
  "key25": "2XMF7Yvq2dxDHtoXJGriAL812zY9pDvvHMraj4pfJhLfgdddC4VopCBew9NyHDV35ov6QFSF8u4pyZN8oDRTCWBh",
  "key26": "3SxysS4VJ1yGugaqxk4D8Y33RFPXKs3Acsw7vs7ATx6YMDPc6Esk4gkNtVu9w4h4MPC89EiidTHAZDmP4ENQBhBU",
  "key27": "5vGKEmjchBbs8LxDQuEJkdjQauoXzi9aoJA2edos1ViJc2yPkyZWRfTwA318jAXPfabWeDGpXPpm98sJ7i4qvQzV",
  "key28": "2arZzvC9Fw5QgovjmKnN4cgTZCopsiqKdXmvzWkr8S4fMcyFx9mhESCndDUUGRWcRWwQdTLADN1fT5Jbtb42qPsJ",
  "key29": "3CeaiWRVMQXxmDqLnZRsD6QcupoCASW1CWfAohspXxtxqNMf3NoWZ9izeUAhpRu8QP2d3yEnP3ZtdChbPjs5cMeR",
  "key30": "3sqKQVEoTP4WoR4M1RAqDNhyVY6qsQSPtJy1WjP24uxj8xpckdUFZr5FM7C4kXjbst65odSuM6XwromotJ2p3uhX",
  "key31": "4QU2EAqZH3XEiLbCoaoqmsWKw8VRrWoQQjqhV1au3vyatoU8VZjvbd4MxQjSj6tEoGf5WvcJAHaaFfrd7rp1JwWW",
  "key32": "WEnfU7xkedqKCAEmeSy33A4WWg5XNX3im2L7cBATj5PhK36V7wYLXXHQ1Q3qzQP9CLn9NDFKnU96Cz9khcfs8nS",
  "key33": "qvubfVe6ats7YtSFEpm4Ug4rikqLgyL6ACVuaMdrKFzsRukEy4Pxv5ZwHP4vT1bWz8s5i3uj73WQDKqkTt4JFRH",
  "key34": "46Z31gvMLpJSnKCwaUfUTuEYtWz7TrU7f9WBEjFJREXkZpw4MnCf4f9c75tymMnHfN6P4AZCAhsTcbvfgU29TeU",
  "key35": "42CosMF5wSsScGUgKvLoSAtnc5TtbQndjwoRLP5q9mBsWbcYBMtSCa7QwYTBEargsT36RtSWC7FvExeadxSrz3AT",
  "key36": "4GvRcR45vMtdgbSC2BQYW7nERVJ1pbHAqWuqnwcUnNBWLQd2YNHKQamhBSQfTUSRCRV4wryMmtd6g7yCRVg2pjrQ"
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
