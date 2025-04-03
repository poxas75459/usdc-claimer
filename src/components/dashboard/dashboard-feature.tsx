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
    "4qCQ92K9Dvq91RMVhHVoJAxUj6HP99hYFnxeTJib4iKcrFFgVywt3SDkWVimV2TPmHJdiEpHfrZCGahtWh5EhZUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "591m1U9Net48xikLS3ap4DrssCA9g1VH7qbPTaJFmb6VTHDk3iqHY8WWS9Yb5a1zRy354qxP7ARKGDZ4Nv1CFHRg",
  "key1": "4tLZyHGzmwL5spLTwxxGicBGcRghBFZJEYswDZaTqLi7G1ikjMac6B6zFtgpQQkgqARt4ATD1xQSdwfcqQiQh8Qg",
  "key2": "3naZjQTWxUH7mfQ4Eor2uuzZXSMZxWD97HAW75ib5QQ5M6Nex7pwsSKvFUBBYoV1DjmvUbxYmghY6fCqqbiu4pzV",
  "key3": "2qbYvaCKSkqM1jqTTGs8S1tzWT6y94qNtxGjeCwV2bfzXAq79YtQVvDpLfRNmdtzFjaezisY2A7sNxFxY3CkjX58",
  "key4": "36m5DCgBn3qSGJioFc2FhCY3zYSne9V5TQ3GwcnVtNAfzSFPeFN1tZ5byREMGS9ueuppZX4dSCpvek3ktx9XmZ49",
  "key5": "5UURCdWVpumzQ1QCx4HYEAwgQCrtD86vk4rywgKJfELKsAahR4pGCMNFRAp2Gmp9or22cwzqJHYoMbdUiSP4CQzv",
  "key6": "hX3czv6xhLN28DU4r8UUnsaP3hsCHoXEsYoqUv9zmnKbuXvh1RWWfXDwmpLtDSqn8gpVxawyAfVBKZTxiqryft9",
  "key7": "2fiHaWv2uZYyg4Sd9GXVmDTyfByjrh5K3rV1hzhLrf4iuLjhAQm2iFamniggW3mbx2c3TGPCGg18oX6Tp4kBVZog",
  "key8": "46xEu9bWZHScynUK7A5Gj27Lp3osf8a5zdEP2EEehbyQyNenh3LkoVxahr1D2s6AnVqpFvnVFyt4WsLWEgzcv73g",
  "key9": "4d2qioy5rAXTty5AJq1t6sMU8hQteXM3gg6DvEhX2swettwAzSQTZFgEx3KVG5w44NTonDFRqDpVTXwExEacuTvM",
  "key10": "2ZBUGz7Eg3aYtGFE6YhqpfK3pqxqDJLfyEMa9QhTB1jeAqSca3Bw5n8N8wehd2P1hMTwNS3VqPehecJBLvFBPsHP",
  "key11": "2CNar91gvP6JR64DQLBYE4QsqR8diLmszBWDy9QxY1j6S7na5qqfv1w8VKEcCZtJUA7Yv5i5EohD6reoJasrcxRx",
  "key12": "2equGP2K9uDRcZBcMPDR4BTB9Awp89YfhmuVoXakFs9weLbFcTii5YHS5u8RmP5ExGsN4cg3SNQXfc2Ke14ptEA1",
  "key13": "36JcpSHh5vmpBmv7j5XhdDs9h433BarUpFPHPxYrw6t1dSL8JSFmCvmvzS5ttu1ZX1Evc4ZzeSF4nxiunmEdREZa",
  "key14": "4xhff11oHhagtT3vcPHJmkz3DmE37vDcAnjFfMTXV6Lwx7FknqttAz1PuGCUFribcwuwc33wkNURi3bnrtxArAH4",
  "key15": "2rvAU3BYn1PyA1dnyFuBpgRtFwixo8k86YXGSb682byJDsBcmyatd8ek9EJ969N841MpETmGJSwVHaA4zYoquBp5",
  "key16": "32No1ssaydP879rWpVW6D2kP9Sxn1VR7cMNgXcYwveEfqwE2etAg715cTavgGf6ch2FsZFRPnHXyfVtsdc6aNu7b",
  "key17": "4er7JTbym7a8GBgAs6FKBHfAHAgLebzEJSowkrNLSrxzv8YursoephVs7YtCVAobxUfYRecueFDPjeoQ96nJjVqT",
  "key18": "4A9QgMiC7WvFfbcgimk3PoHdNRECPFkCDAf9n5phNFhyKsUHXgpDua6cy9MkHNWAVCaNGyNdYEsiTeh14CH9t4WH",
  "key19": "2TzxPuRUhQ7giF34W1A5NdckCyv5GkpT1bCg1yZB1oJnueXzApxTGCHVG6RSSf5oSM41Y1evzjfbLibGo4E4cPKS",
  "key20": "53WpBsp3sVm8MSZ2zgiAvQuNQG7aYd86d4qUd51cn7TQ7jiUpks2pGNPRSchxJqQCFE7mvfkXWqFLoaBMYTrmxgQ",
  "key21": "2H9J2HV98GytLo3UfjazN1CUguW7iNEHD4igD3NcpUQRG2CBuNwbtP5GRY4ueHV4NginLAao3RnnktAA7S4azLtq",
  "key22": "4fJ2sxgwvotoHJSFBqiEshM57bPHpnAthTuQjcUx5LUfUmXVW31TZb8qqAZiJoa9vsdpze5pRTKmMHZ8oRBpFt5G",
  "key23": "GHyfWThwgk2bcmcTJcQiLN3c1rvK4jRUVrnxKc22GeSirNA9HgzKEtjEdqz3zfnaYUkUXRHJQhFsjqc6QYDnJ1d",
  "key24": "3NinWZRm8C3PMrH2zGUQAriLhTf3kfRHxLEQAe3wxPvwWdK9PQfZSJ4YW3HHDQzjWV59CBSGTWWFPVFzVoTXGvDc",
  "key25": "47eAH9djdPaHCoeDCYGdukfRYguU1rQYcQhPTqGjdR7eDta95ah2Lh93e7bM3aBb4mbPdrQB7AEaCrCYbc6bZGrS",
  "key26": "5Sy7RvTVLjpQhvRCBtXPgojyN9ZN9Tyyctd4i4dv4SNRM8UNxEg17T8WVpNR1h3oWhZXm3XpLv5H7Kkp5Wcm8A79",
  "key27": "rMYuJG3BNLDmzZ7t1rw45ViEMXZeqrq9EfrL84zSX77K7nrU2gQ3QZjH5hmGX12fJwYwjayXB9RfQEKrfQcaYG7",
  "key28": "61KxNtLGWrVZNAUyPRMo7RuJAMJronVcozBNm1Gw91aaWFZsgNFENmxqcVZehbj4doLhRMjS1FLnkoVuZocADXE5",
  "key29": "sMvjLEXZGWPX1VsT9KP7rQtwXb3iy9nHsAuQdk9QfnesKeXQ1xZn8UWC5H1Xyetxk6eEE8f19efgxQAnmyVMZXW"
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
