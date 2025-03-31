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
    "3DCjcdhcPBF6Z1pDdY59oYYmo1tnsPyzbyuGGxH6DZ6ytAKaeS7AbBtYGL7sbWcRUKijFgpCei9Nf4gZh1fanhRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P9RZqEn9zyQ97CNtPpkXK2pAhw6mYoVhX5DRvcAgiR4ZiyQTn2SuVnaubFXcF7mZY4671TYQtqDnEL61G3mMEJy",
  "key1": "2esr6ctBvibnBEtkupTWsccvx29Tw2iQBd45SVD7SoNTEjG8Z191PYjWRgFcsZkWc6yUUiRkxK1brRjuUKTfqePz",
  "key2": "3BoEzF9Ydqra5AZX2hDdLr11VhQhneBFE8qDvMdP7nhAxgCVuaR9bmd6YrxyVUgHAT5tdQ4gJ67EVP1L4hdNkw36",
  "key3": "66hmQPjbbFjUupY2CSyJwcoHQUd1au1GY7xQV9vY8juymK6KESR7i9Kf1knWMn3T2AUjNTv6jXY2YNBgJXw1VzQB",
  "key4": "3zLeSnDeF3xgPNrgFiifNCMYJJqeQvuiGjGdTzFAS4KQZWecQbs3T616BXqc9rFQc7Mq96GuDXe7KH1WEXwdmgTn",
  "key5": "3NRc7U7zNqkmHAytqK2YZ5EjCtLNfJnfN7yhui9P7x4kKNVGzA2jHqU6QxQWtGX4G5GRMtZAfFrsx59Ye61mh3Z1",
  "key6": "XJ9TikagV6wvYpZD1TDdQEg7M9WRaEvidtxLVcjeENjeHvpMTFn6RiRjvjuK7ZZVKTUhkNMggthE2yQyAk82Ess",
  "key7": "4AvMgwkAYteooxYzRNJGwEVjkhzce3kYU8MHJAea9iYYDc2DFtCyNFy9ZeDZu7Uf1NFZ8jGYceJTg7R8Pjeht55N",
  "key8": "5DKa37mF4YzoriF7u6rwDa3ZtjjhZvQGuX6zj9C1XjA3SUqiG96sMHAHaStT744vEuKtRDqGWT6NEZhYhf6GpoxS",
  "key9": "dJ6h55mrRbPi927mUNZTewKegEqtTR2CtGM6QUBhbSVWuVmryxto3F3vEcAhLEJJ9K7oX9QpVEisqACpUL7VS3F",
  "key10": "2ZrNUhFWyLG7yRdUHjSZfBwuVEXN8tXJPztQwcVxnV6CLVXDzuEgkx63Tnmp7utyk3UVkgiowvTrBdydChg4Xk4C",
  "key11": "jvrYsYdWgdfkFhPPtCfM5khHrJMrVzEdA4w83VkNJUpa1TJmNSfhRPkRwB7TnPzXrAwVT2KTT6qRQfh6rYYbkhj",
  "key12": "3CWyVFCsuYGWSc7iBioFnQshCuY76rww8YcRA2hfHwpGqHR3MTHDdAZh7Jef4VctAX559EjokSqpy93ridqe5166",
  "key13": "5agAvN4uKTENw9mhLWDPwwi7Vk8pCPWprJ6wTkG77L5Z2hofLd4mKZThBzvyU2jq5oDPRY2tifKdRvpqA7Sf7amg",
  "key14": "2L1fc5RwC7Zv4NNV5Uc66JqbSJkAtAvoKaqaPwr6UHZvEgZq7kPctEP56LEbDMyEq3kui4GBS7FUSZ7s2M8hbEDa",
  "key15": "5brkLHhcCNmzFspR39McSKKSh4buLPsahKUvasaR7r9erY4kPMh6hDHVKbL3DrSvsUXfGF9T4aNcXBSMyvW4k9Ho",
  "key16": "4AfYmbx779WUQokaF2ZvHofDJa9XQG38Mva7V8bR978uHP8q6EmsnDatWUGA6Rf1jXNW5vRHTtKhndLm29nYYts9",
  "key17": "58XWKGT5Tp9NPi1pyVHrJDnArksS34TF6EAvzhogdf5BQUCw4SMairHmaJ68RcUC2rkZWpqXwy5wjWM8Ah9Vphyb",
  "key18": "4KPTX1pdMx3XJQ6tNhN77xE66YpSzDvNqp7n39jhaDdQaF2cdb9b64SGXyhSbmPDAJz8WLa6Q2j5GZEYB6YPkFyN",
  "key19": "4ULmNXb2jAw5jxs5ubx4qsTUikALkkdoqTNoNL4k5e9K31MLnPRJDMzFpZa4AcsWwjLoRNX59WpRDhHxXqU9PKJZ",
  "key20": "3kJr21JhvoF3G9jCukVpiiSNPu8EsEMMpebMRUpk4uYr5BrTQ3jpbgw2LFyZi87ms9AxFh3fP7w9dPSAsYbSeibF",
  "key21": "46MLEAeNsg1KRo57qg1JdwbfeWw5TbSLQWqhNrjHBWtrMHtgf9djnYS797Viov3wNrK9gmw9PeK1eaQZXqfs4jD6",
  "key22": "21Sqk8bxPpkNG7iJ2tmoo5UXtjmWPt93g1cxoNPj38jNSPHZwyG9Z5TdqacRK33ytVdigoKr8s9mwzKe2BcYWpb9",
  "key23": "4oy6BiqzZ1RdjayCdptyL44gs4x8TeNzbKDsFgPTP68YKiT21rMNjMFo5UR28Ze2CBZwGDrfkdUQacqpy5yaV9hT",
  "key24": "WFwwCWYCRBHYZKArT7cAR48ymZZzzyKAmUQXLvKksThQJAh5T2K8YtATimM1CRBDY2CL7AcGZLMLBoGU6R7Anrj",
  "key25": "3gXN37X3PsokyUZ4EYP3e97RJDvmXfP79QkFb8jMToDvs2YegSU9KuksU8tnaDk3cDDAQrUEr7G15BMZHN6adjTQ",
  "key26": "386aSvxjFHB3B2bweLTpKTmPMXG1RdsQvT1qekjYZaoZpMgdcndHcTb9z7grARoTMhHrhaa58Jbh3BLXKtazP4Rm",
  "key27": "2b1JbvMfHGReLNs2hk51hzATza6Aa6eoVM1CWLbVf9MLXxhYDmjpy6u292MafBAgKn49h8T1LMNJga1dbxBdH1wp",
  "key28": "3WgH5H8pmCPmCGt1TEbN3Smn4vgvibbY3Bi13ttQ1RNeayXwrGVR713j3X9NbkqCbtwgStLyVDJsv4nHB4k9hsAh",
  "key29": "5xAFZCAYNd2BJMyo9sMSoCfMZMA3e6gJwKuezwZBCkT5CHgvDiF1tbx2ZoLvxbAYGNhejJPPUtpJrRoTZFNvd7nT",
  "key30": "25A8gRLEXaFnTw1ciXemBeTt8dT36aBdviU1HxN7HifRPssCD6N2evZ5gQJnDvZTx9hDVGXV8o7n7D648dTzVGPu",
  "key31": "grdaS1UUxHrPThLmWRcRXRcMkBynY282HKmZvpfrbcCE8cwpuAWmms9qfauskKZaKPimDZBeTVPWZKGZvfrKawM",
  "key32": "41GLh9KWJScY7SrCM1j7xwcZHczxUvp2XkwPXn4LXW1KAM5wgQs2jfTpRP6DfBPFwPzFYgTyGxKNjm3kyMLGFrF8",
  "key33": "5ar9wsCBDAre6FJ5FPDuKLR8rr8TEYbwuEEW1rN7pwEmp83PbENV11qscwAzBKjJ7Q9WJTXHSEXfFg9NNx3D7o4Y",
  "key34": "czd2HkkmnjEC7yPkzeAmGtCDZeNpgD14ndtDB2zMBDALkZMSA4NJhBUgDyyx8B23iYSt5ofq2YxVMEqy49ogspe",
  "key35": "4wn2vFcVUisCkNptMAmjofjmN3u7s8inwFehEubFkDw2SCkZfk18ecMQ3CRRrdhWxrnoBGcbgw2omraRr4USVEKt"
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
