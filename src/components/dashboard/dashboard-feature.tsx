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
    "3RJyT7dgA8Xy7gkcoqNueQ3AcbskVFWLhPmZVY8PmRuhHKhP6VVWfvkMPdrnWLdRvtp3pBXFNTAC9995cJQvet8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eKap6yjNmhDaQGtD5fvo9kvFJtpa49Q8rmkvisw1g89Z3ofiX13mpnH6wQQN78NSF9dv7WyF3PiT1aoYw2TXr8i",
  "key1": "4QQRXNC2YQ2v3FQUqLF4SjRjk3WwybTpPNnw5imza42XqMnbWLfbczjUyF4YAMoMHMCcwCEaEz6dqs2mSFznxaC7",
  "key2": "64CwDgM3rYY9amjkPUVxcDVwm4CppGPh49arncuBN9bi8zWYNLTRY5Ha8f38iHpEtHH9CW34ZqrLe6CyLWyDKKd3",
  "key3": "4dxzhp4naC2xQiXD1FmVeeTUG6L8E4AFDmi5qUtpQZkXX5xmpfLnG1oWFmm3fgFFbyu9rH5eu86DZwk8vTV1s6ve",
  "key4": "5SGjtsVKGF6G9T23RpGfYkWzbtsM6wKWfjTxXsfmenVGS1JCveyyKb6rtz9JVrcgunWzgJERG41A141FUyekjoEB",
  "key5": "4W5KDV4cMgFgLxgK9mu55J4U5P1Zs29f47H5M9i99XoDRp8cHAFBktEjB2cZXERC3gW3QekRgFbc1u92Jyw5ypHF",
  "key6": "3TSGvaYQJp7TPhmTW2oukKccA5dyNUpHaHFkKqdRDZUwYgES7eVuWtFA37CosJ74c5gf1MEpPaSwHuJtejx4VKzE",
  "key7": "3ym4TSB9hK7X2xxWz3FktXdcDjSTdQ75hTiseLtxhKAqmEpGM9nfYmzECEYaUU52XkhMnEUffWo9iSWgaiHFBsJq",
  "key8": "2eYTF6ogUkP7GWLyUwLukqfaT7RrBRsCaVamZrpUkSYNQk46r9QYUKT6JM3Xc6ECYn4gxGeXEFerjL7si1vBcyyV",
  "key9": "5FrC7m81T6A9Pwc92A7umTqRpydQ3mRwYUpS8f6AKmhpm6FPKseAwvVsJAfK7AGohphhpnB29e2pExhypDtE4YHM",
  "key10": "3BWDrjixaRVF2gNNnjtGvmPoNaowtRqwRQsnXCVu2NXWxKknnxDGwDY3n3dg4kQwP67rvtZp6o6KC28v1BWZyJay",
  "key11": "3wkso3MfVLpFcGwFzkn8zjyhBSkFTnqncWhL55PquRxEQYqqbD68BhehdLdqcoJCvaQB7uk75JbE6FP8JD46yXHH",
  "key12": "54xwbzAk9yiwBUR7B2WKKn7NGN1bDdQ5jxowMTaM1eRBHj69oy3MyX6FWP1PrMfiFapuYmHKswwV3zoEh715cDrw",
  "key13": "yDqX7pPggt6CQzyXynSED9fK34u6C52iNweokfskcjgki1qGHy7HW1DwRaAGAkrRsWKw4MthhSaNj8z1Tc2RMrq",
  "key14": "2FkPgeYPqB1kLr7aspDmEJgo8AmfEeBu86KX7XCekoS3yiXPFVbsRZVtUBdax6WDrB13ofkHUEZPLxgkCcKbAC4A",
  "key15": "2nQ3dV7s94R6DMUE9tGnyyGScAdX2qxizx88wguwVt8BWfpopfdkw8wEqkmLFc4rtX6iCF2BNVx7DVsUQqCuJtKQ",
  "key16": "6skWmUoryXUBmydiwQLkfe4D53wq1anXt86mHGRgzzabEX2wMm38jdAs8onhKmzmXgj1Kfq3zTy1rbt8FaKp7CX",
  "key17": "2915Q3S9gzdoVF1vDYwTzzF3mVefoiVz61FpyYHUBtQ8M3V4YY8Wz3uyigg8TtR9JjuRfr757tmNm9HHYhRbnoZC",
  "key18": "4UsfS7C1KtmEnLyX8eeQsG4E9CvrPUR4wqmMJWsimua54Di2HL5AWC7bnyC7qdzDCoDCJJfeefaVMuTEkAL7dSix",
  "key19": "4JthWDTzbDCLqX1V2r63uBbmyfTnioU2jyrWfWRKVC9mbzjLNMq3kNRBAoZo5DRvdeR7cpjAtcuArp3z9B7F8Ccx",
  "key20": "3js1SgKvDXkigBi2kuA8cwvBkQhsCJs9WxF77L9SG1KM1Rbok8pbhfAyFFnpjxrqLeYBRUHV96pJYhRwr3R3mXQb",
  "key21": "2G8DJj8wrNpyVUVwundNt4eaKtNtDGvdjgSDm7HqGY12strg58zaEczTZAg4NSTxVQvKyhPWmmJX7smVcA6EJiCq",
  "key22": "42q9keLDp2bMd3aJjUdtvM1NX2riFc7snoZAxsLc7fwc3PczRnqt74QAeBu8JqeFc3MWJQ2xrFZdkUioaamrVS3L",
  "key23": "4Jn6MZ8FF8QgPxxy2FvmqDeZmELLbDru1FByDUEW3jnkf93127CNKVRa2VHu4jXYvyhvxbXNvYprxLvC5ZMumwm9",
  "key24": "2NbU3LYC5CQ5zWE3EavL9W4mTLzCaKbngMDiRTLnBs2WbPbYsfQKxpt73B6AJahvpBakyDevSWpYwKb159P9uvFG",
  "key25": "MjZp3QmkVwd3uqNctqJ18iDoQMEMpi3DZxanq6b3kDKbgtYQGYCtKix7fhksFjeCjM1fsJeypyqDXcp2rysP6Dn",
  "key26": "o44iSC94UWbjaQhBmTiQnCnc6pZJS7hhz1fx99LKkbmKCfLHcFTRCD1QEmb4WbgqDyDsvyfWbrKHYSyTB9KxJZD",
  "key27": "4eC3mxAcRSV5XN3LqHF486a51oE3Nxr3khACiTgMSiuk1GECz3QpaeXs1kawzjN9tMQZkC4SreWNJysYgtxJAM69",
  "key28": "4tmAHqKp19Br85NyHpCNkuQhApCQQx7bZQncytrNjeirZcNZssR3xwvwkuXszDn688PPuuEcEBCoj7P97c4jZWt2",
  "key29": "4q4n7z7YMhqf8vbcK6wD4vmsVe6SmXGtrQ4BRPFvCFdXYsJLxGUEbCUjKygxTrDCwdWD2H1kreaBQt9NeKuc6u6K",
  "key30": "5JjJs5GbkfDHgEXhmtm2eeahpP9XFGQ8ZeTTvFST2GPGr6pP65iBcwFZQrz7jj5K9PPgVguxCAJG1Pj38HAoEYYH",
  "key31": "434ztFiXs5pJdUCy1UZoC4mhhXsx6TE24dzEwASZNRBYUhJ73RqrKkfCVJDoC4LahvY3jhqpPs7KtmoiT5fh6q9r",
  "key32": "3zpwgF126kscrZxbwagSGVmwRpV37zGFzDVsUso8BjGj9wkBQyS3dqdeubFfstq2HDzgGHcyLLSEqM5tzrJzyKEd",
  "key33": "4xFA1VYp1GUBPbScbwqU6E5VGhDqmEbGbe9LoRdUh57W5zrDDhksqHGD7zL6EDxJiRykW1FVMrkTFy8Ptod3r4Dn",
  "key34": "4aoE2ezrwahKsfonBpVqtsnpLeZAdDMqBWPt43TUxtp4CvgRWbXPsw8aHrNQhw7bRqoTaDEisLaQPk2S1ehk5x6N",
  "key35": "54mU2RFXvkUXPiZeaZTU2jnvhF3pro26TZvSppY1ASV4oKpCTnJ8PjsQoUa2CoxwdDTnrR14D1sLRcRWPajs9hSb",
  "key36": "3bXA1jzVDoY6HvPZPePcC9tT4kttT6rgZivvoHpY7E6MPeCqimXSjj7oR2z4Jugon8qNgYc287GnCmywKszoivgb",
  "key37": "jiNfSvp8ipkXwjngAno7Fc8dektzJVFbdnbMDXFYrYx5PyYAvBXL93znXLADQcbiWA3GMEtUAnGs5xSxJ6QQuAr",
  "key38": "cNEtsgVdEDs3YqNcHUDDYNqiT6QPSE2bEVfXuVwaNCopSdokuPG1cmtGh4x7tCZTbtps8U39zxrDvmxk3HhfNm4",
  "key39": "4dbLGaYPhLUKtPWN7uSrAFurBGUuPdADXENUykK6SypHeTamA3GWZohzhe1ZZEGHqVfkyGoKnMpDFcYgjWFSjdFN",
  "key40": "5iGPEhTcTXDzxPVweEzorpqG5kp55ZrpdXrSvC86vH8n97UqUkKM2qYvvYV5TDns8M2we5apmPoKY3hgA4VBLfzF",
  "key41": "4of92QxfW4eQR1tsHmx23KQ2FFLip83G1juZAXstXHtHwd9CMy3Xsik57N4eQkm9WSD4GCa617EkwTL2ZAJu7kRw",
  "key42": "5tKLc5aLSnVVSH8sSuWXxSrMUZ1LWVbR16Da9EU8LMsDQ45oBotztwbsBpkYdRHkZeSG5G5g2NVDKp3wxG9unAoz",
  "key43": "5ELwTtAtDo7km6prUWzbHSFKYvDDErzaqhAkYxjP3sHN8xy5WPwrgbKEU4sDgfh7en2EGvBZynhMEe51AxPysmJF"
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
