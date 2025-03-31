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
    "r2xogajewT45VfvrwqeFgkkNkXVuaVERpyxVd1S3gZNMTidEoHv6k5jQYaN7VZYrDdQkgxw8iD5zo1rKw5Fpgk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p4kL8G4jL9d3VnmCyrV8pEHJ51iRvrnK2mCavRBED7Tj5g3gibB93sP44LRp4frFZMuJ2muXncANW7L5wFFMyKM",
  "key1": "4bHLN8E3mJ91GkysLKMy7qcqosJbTAsjQQBRn1MwxrUZAMHqUrjVSAQ9bSmkJ7iMMhdUnLYsQwJVWYW3wg6Saj52",
  "key2": "1juPL7NinaFDwUooUnrU9PUhrcPAkMBCVYVAbffCwMvQq4WGaKBcbh76JTir4nYSnmV8mfFbWeLhxE8sKNS1dS1",
  "key3": "5vggKjanJ87PYHKhQzrDK1bxn2LN1waArgcobq22nbyMR5QBc45TeVvCrxL6w5Zo8w9MfGYUc6Ph5q2aYecsgWuA",
  "key4": "2h3A26EUbTncxbjj4dcZfNCtPTbcCo65KaKPechGy6jSR1f6BnNu4tVg48iGkp15XJYZiPJvgdnnAmxVP1pPgzJX",
  "key5": "5J3au6Q3CvcdCXQ5AtorvHoK3R7h8XBydnDTF7Kzu1XXTbZayhWs85f9hkjr2mfjhtR4Fksm8a6A42wUk7Cdr9yf",
  "key6": "41r1qPm6PZBsVEKaLfgKyYXLGxX23CCDLG7nkxC9DihY4vMSv12UJbx9d2rYFCJfzjAwocRTPKZEAJDjXmTUuqmP",
  "key7": "4UiQDKxeoQoBLKipfJJw8qwWg46Vgx7S8vZhNrvxkVrjuRSp1t7s2f6Agb1XGC4X3NDw8y2jVz4xPCYKFUYUse3Z",
  "key8": "5Ccpp8NCdVrCWyP2dCfN4hi1wY88UTKM84CP3PbxDXX7M9wMLSW6LxYqCNspXgKpeLA6DhTVTpCPoDjXg9F5rkc6",
  "key9": "3qEE3PZvN1HPN3yaBvcvCUuNkRN2czFfqn6ga1djr8hJTT36XLrRDwyCuHWKddGvAHBcK8CFehnGmzvvG28ZbEVb",
  "key10": "2xEKFH6cUp4F1ZJnPSBZr3eBzZUobsr1TfBW9Yes3AYY2VnE2BayL5Lvjf1gtYHhwEGYKW7DFHAY6CJGj7fb4zq6",
  "key11": "2LyJiMMz1YBveWz7LoEf3AZ3MK4oaLpLP82MvcMRL2ASY67mPqWmfqc9wuJD861tn93y2m7TadEQYetDuiaE539m",
  "key12": "4VXLiZCK1E1YL1yG7gwh3xT7gRDSkVJYS9HJUAjvyioJL6gM62HH2JM5eurDbRmeWox39PszxsqidMh4Fxrq75eu",
  "key13": "32goLt6nLa7SsCG6N21SH6KLrZdKevGTqS84ggZeV7NGhg3qa8Dd4QjUbQReepTqat5T3J1wLLXirgNQAuj4LA13",
  "key14": "48iFxHQJJgThgCRQ1tUJYS7wTuxUKUbu3npr8tbsJKQ9Be5F5Ta56aM8aGJZvv6RqZizr4uHbLpbRbJYHw4pnNJ2",
  "key15": "62hdrtyNF5DmacYTTKXRzwjjRkQ6ei4aAgjBAvaDLhkFX2MrMb2z81GvUQrLtoY3RREQcALDHwLpthpvxiag498r",
  "key16": "2RRNRiaVQrZbUKS7yBGhvrLZWtCqSww2CcNPRDqWEBVSwUBFHotdb7tSuJxWJZNmQGbDAM9dUWxFHLj8Ysr2iTFX",
  "key17": "47Y2DyGmm3uPu87Hfxsb4wUV3FA1CPcuHVcUnTi75W7UaQYKkkXX6fFFRVuwACmH2GcQgHWmU57Cz1ZameyHAjSX",
  "key18": "45zoP1KzM3Lf9WXsPH1T8Po3pYuK2xHodcD7PbBDkmngd8kvRUACZunH8b22qphXm7cj6A448RuZDjrdkY3mspig",
  "key19": "2oj7Er8BoFQ7NzhCuSwnpinkUU5a3PmNE9H6XTMXFDMcqXDbcL51q3vtd5dFJrjC8LCKe29499Pctniz1TZeREgh",
  "key20": "2cJDpXfXxz2rpkXbionosqjxfry1c1eiRWizBeJ7g3Aj8xbtWCfeSwp1r7ty3BkMVWQZ1vA45cxd9SCviFubNjTS",
  "key21": "2hFP98LiA1eK6MLYKHxWfUDZondJ3GgwgGh7pbTK7R2jcL4U2yYMUj2DqW23RXYCtiv5pBffovcJXJyDm4RJxjvW",
  "key22": "2aWUpX4GtdH3Q6cKch19CnH1etpkYfUPw7L2oxmWwuY9zjqD3PNvnyEgstDd5v1hy4j6mkBAXu7C7U8dodYq6bS1",
  "key23": "3gT4ZpauSLCiyt8n9ifzXvN2cZUj4gYAfebNWyDELzyAjqV4CvLTh1N7u2GnRdXr7uc9sGqEQhfnT4m91EtDnWEX",
  "key24": "61x1KdJF96zRJEsNjnXL8nM33xo65UiHfRCzDJxW2zciXuCd4F9ssigDVJgJHFkBFJxThZj2RQj3MXfpTydaYAVq",
  "key25": "5cui1JsQB3AycvATiPG61KR5ebgVpjzSCgshHxvZ4Qg16F8g9MUdpv7KTJSeShqmRWmNZFy2rZhxrBs36oQH6bXb",
  "key26": "35wh4yVRpY7v6gh8bdmkwnZNb94uwQP21APEvr432BJP8Vhvi8Y6isLBPdtYb9qxWJJsy8Uvc2pYfPWnFNWAk2xf",
  "key27": "4jRQpbNoaQsFGph7Fvcm5uiDhi4F6JQGYxD3boGC6GR8CXUFonjAk1C5PihZUepseHi6Lr1vf2Ux28Ds8R3wYkyD",
  "key28": "4CKdwpzdfGsxUxG7VqWjLK9WxkFsMWGrfCWTn93BhLkiWa3a6ZBFfgBYvzDrsP3ieqAG5RvqN4TtxkPCwQMS3Rwy",
  "key29": "3oZZFbcnmARshW2etT5YUR7EYCs3vGNrbdVEcQPJSd8GBD1SczmcoiP9LxdLfKtVNJhQ4TySTxgrffftyALRmAds",
  "key30": "2Vw6bnNtSc6C33grtuCipdHAd1ophyhLxRFHgsNfnVRoZHAYNhKYZvbqQVbSwuVULccUF8htxpvrganBfqgCYBnA",
  "key31": "r4FmNHQ2j6X5e8yEYSS6AUPjxjXimj6i5qRr678zdamhvKrthBNMJXeVkH4YrSsCip1qaiXNah9spRFcnXw9PSk",
  "key32": "4zHJr9FURL8E3xUR9C5oErhzQtbrGovYyyjfnq7qpnmnZhNMD255XYqMrKEj2UqdWmhL5qCEAXvLbYpkY3cXackV",
  "key33": "g5oy5u8gRJPh481PhC97aAY1zJ3PeDhNCaSFsGSS1xWyunQyA66DfCKBX6xRSHC93DCZQP5NWw61P7EMpe7WvfR",
  "key34": "4surqgjiSnwbr9BTsLnaEXHXCe82CoYYjT22aQKF4VyPyVQLPhXoPnb88DcpLr6wCfB6uNURaSKyS8GyByEqpJdE",
  "key35": "zXrPaY4i77TYPFmtM9pRbySLDREWT1E5ZCaJoih4qnteiqJYsf2uJJiUYeg8XwvWW4GKFMNwCNpc6mudPm2ceR7",
  "key36": "5qFCFPCkytbapxHisX1RU4ZZADhgwdLgME2bXxYkQTfWXm31AN5w6YfzQMzj5KGeKAdopAwvbJB1F5yGLBwJLQDf",
  "key37": "3HtxFBBRqvddKdogHSuBPhLpGjHjZujs3cx1fkN7vnQJpYgMhBnkJEWuxcdnMKkTSV7qRxhouf6vS2ZW3Z7wwbpz",
  "key38": "2g6y37MZWMpxZrRP8PsqdP5KTYkcTF1VX6aQwYRZGyrLEfA55KHpZB37U3iGLJdHse58hjBq5rRzuUnin9fUui5u",
  "key39": "27c8RXhrSR7bG9Q8fsnZXxjxG3WQMSJBq4dwSEZ1zjTdfZpzbqAditBuushK3QFVkM1CixnyBpCrKrW81ZDe32Jx",
  "key40": "2vxjki4HaVubn6HSxrsevakE1ZqBk5eCXZrKPEFXHSSDU8fhvyfWGjtrd5NPK4roCk23eVsVXJyrsivUp2fTotsg",
  "key41": "5sHMtGs48evNDa2dtB1ZeQTFdLSPbRauC2VT4RRtBgE9wcEeZk2wJYsuPohajCvhHLjie76LG7eVXgik7UjYDqLz",
  "key42": "3kqShJcehJciPcocxsmwH6nseDuFxdWqaM6mLdVT7mJwbmY7Uf3HaR6qbsYBH47czRjez7jxyb4EEcLirWki7Z6a",
  "key43": "PHkCPaWVrCmh4xuQftfpX9K1XroX8tQdDF3H1pzUiLnyfyc7W4AbwNYVT5TGgEARsGmB4hvt9yAyTQabyYvAiNX"
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
