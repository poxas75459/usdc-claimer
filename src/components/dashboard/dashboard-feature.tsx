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
    "2kru53KKZ8YE3vCReKUmjCxY5MsseHaLjCGLXpsjui538SEaCaGLMEzDCTtYG6hFiaD1Y8KiQzQ2eQxtNUyij11N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58qkdEgfRCVod4ik6NaHXuAGjjLwC2GMrzpSHpqmBA2CKFnmRRrzBtSk7YH1pQD3SLf6mmCAqQ1oD342WkK6cF29",
  "key1": "3Uz8bgWNrv3ZF8brpwhQnqvFEqVg5Eg2G74mrg5AaL7eD5Xh4jSNHn5JVL1sHgZKx3qQzFKVY4AETEVsEViJJrjy",
  "key2": "3MDWGq2V7Nz6zXDcKVVmJWk1L9tuBGTqPWxwULmCUffWM1Yga8Vf2xF1Ey8hKaMPohNetaXueNY2KxT8YXWXZ9UD",
  "key3": "2N1McyV9BUB8isaJv7QtbSmeQB5rowHypP6RkKFDBnzj6ZnVwPdXX1PrcM1pnD2wqnQ5taXXq6rSUyz66JMTtUok",
  "key4": "3FKoEmueAj3uXw6LuCtJyp9Ls5H8hKhByQoat2iirtHtSKHMZCrMb68Z55L4VaUKWGHJzz3fYE6HpF1PDoeiDxfK",
  "key5": "3m7dnYRMKFzcSphn8F5wZvcYfRFgJUtAq8NZbvQ935XGPFiEVA8x666kxEzsaLsZ6GwZeFi4hZja4P8GGsY6A7co",
  "key6": "Y6nGzJBj94GVZ7Af4vbN6TDjZNmhHaFH7hvbbgHeSfsv2QwRARFbeySNMP4VN1c4qHruArRmD1FGQryjNAeWZPG",
  "key7": "8MFmATRpjjF899A4QJKY8diAigTSAs3Ce8fWodXBWS3fxEowTXhU8taYzrECqLbr4ohS1Xo3aebX3BXtTt9C2dY",
  "key8": "63KivNQcZt8hMHoHXBWczyhXuvuhhzZYir5eLTmgZHVg61mNoe4oEa46KkEtkGELj2nvAobpBVT4nh5E4tFdZKvD",
  "key9": "64qA6JZmATYkgSaKyUwSUeoaZzeiSCNV9MrsrLNx1cPwcdZv2z8y1Cyi9tYdE7GvxzG3oC6y4oRCXqDruvUfqw1C",
  "key10": "2LWuVN2r9QYucjfTjrAsr8WL6jYJ6q1KDHEBWf5CmEoZ8twKghuYtSPdsR22kHCBq8xTyR2wMthR48a3gCduERtj",
  "key11": "5cAivF2AnYkW4f2dw1Txyed2JxX9392wE1eM9FLRyF7agEVnPo591oh2cYEdJLMGNo6HqX32ymU6B2fZPdtBDetP",
  "key12": "umFMi8uatYnb1S2316m6gnGC9MfYQRHc1NvCZeoMBfSuzMpiBPjWHpbSc2bg4uHrQiBSnqG9SvL6gjtnPbCFUBV",
  "key13": "2XtwKHTN7VnSFwtbkaSLSocZrsgSM7oefsRbk7DRNcVdqCXw5XBQRF1XHptK9HGSFA8bhvtiNAHYoSWjBzLn9Hmw",
  "key14": "RgdDpbYXZx8off3VA31DmGWiYacHJMt8X3zXbouQKLBDSDmbW3X12z6ADvFYzzmBz89eJihp3jWedUATz65em8w",
  "key15": "88SKAPNAjLxmFDSZfvnKnPMesR96PjiyxGkJ4jjzKJoiuFCYn38BcWyhUkxc8MfVpdpzq7tYtHVr8KMEKytgJZ8",
  "key16": "4AmWYxrqJmbJPwgW5YgZLpp8LaVTDkYAaTfe9pxYVgbFKeTNVtsZKVEVcXGV17f3wmy96qzkGepKKdcKAQUT2KMw",
  "key17": "2saJkmVyXofJWPf4CN2NyBeTpi6pgqDBUv4XH1c9ypce4oX6TNDARsuBr119d4R5c58Q2ziymNpncTYa1HkzE3Dj",
  "key18": "H3poa3RfMgStBFvERCSHedfgN4kjcgdeMXKQPahoF3gjchmD83BB1HVtKKSC3DQ2ymziK7Z14GGpHEuqcDcWwpQ",
  "key19": "36YVNtHdkXQ6HytpqDBCJyqTtzE5or3mLwUKRj8WdZ4satwMofjHY2uxWWtiSQf3Z9Ze7KSYeLnrpPyZ48CPH7Bs",
  "key20": "2WUQHNSGDZ8YbKYeV2q4hX4YpeFm3pP8mYuuSun3qzD5ahdzoZPCrD2T9TYckPqrd4C1NakeyeSoRoiJEssfjAuR",
  "key21": "3KwRMTMo7hySTrKu3mFjKVXKLziQ9EcmYS1xUqgTSTonRuFoqxZ5uoBXzdZnmmJasQstfUymJoCp3tuatiwAnusS",
  "key22": "5zcvDpyyZraQFgwvtGPjeRxphVdYT6YgZv8NEP6wRaNsmeowPBcc47tjyhQcBP6rSWsi4rbBRuRFEp6eGhxJ3tYc",
  "key23": "5kGqv6612RiejAn3oAynWFF4BT9EtFZkb83xk2PLEN2zBf2o54xZJ81htSAsdJN6z7ToEk4NpvmZgEUpiR4QxyHy",
  "key24": "2QNtZ833gCpg9eseEvj7Efb4955LPPuPHH9gUG75vnV7pS64AzyS66JRYRqSG4qcuEMpSwpumt9g7oLV44ngHJMQ",
  "key25": "2HuBK8jQ5t7mPbUv2rK2EkB54LJmPFwDk2WUwdfKzJhpZ7YubQ81e86wZrUgyjUJysa52scrcaNcHvCauNXYN533",
  "key26": "4E7cbnLD5V2DjdGc2PbzxUTWuMrcYcaQ1vwt98ZTcWWgLVdBZZL575Fmd39MXqbPnBFHgivAeAfRqgzszmsWak2a",
  "key27": "DFwk3ZcGVHQaksBhX5pUZdRnTvGcgh8PTFAoic5LvsGsL2B1j7vhUPCCUR8DrfhYFwu64CSHHjUCec21vpiStc5",
  "key28": "uJQsYthWYKPC36wc2GF2xkUTfDNbW6wb13XRAFYQfYev1SSLU7MXY97WmxEyHojAuFnNtiXwVhyjDzeZKBNECsB",
  "key29": "8RVbXuZt7gdRBsJbhesRD67vHv61zLqChETnAwyRP3QUoesEobddyiSSboDyngK7NRXxNfmrv8Ldg4JjvPjM2DE",
  "key30": "3xN3yrW8nPPwWLPt67n2xpehDi8ceTUdXXz3sd5s59GdHwZh2iDLicwR4Gc5AL2ZEWirqAxH3Xa4JWBQyhmWJBaf",
  "key31": "3gpfFJLfU1JNAJTn3fKkyGAQ9uzjTWXWJNybJqZDkiPcFZM78eQjF6g5VZVUP3hq5HfJEFn2v6dA3wBfGcVyise5",
  "key32": "2BwYCgJmMSCyzrG5JkbbR5gH9NVfkDP8GmgN2nhxn95iQXemoq63BzvQbchwQxxrfHVYWh9nGHoBeUQbobxTvWDy",
  "key33": "2P5K6oTxDimSvpP5mZKD3AiNBjeVfjhevoXsxnipMkVUUmiYq2fDhGC7VGamb2wtgygMqEDmqXZtGETRsRoyUbQP",
  "key34": "3mocwEiRDPHLo8aDVWDp7DGRXUg46AeWqaaT2GUtbWtifGGMMNYeh4RhbrgDsKHQuLt3p4eQD8sMzhwKcLvj3PvC",
  "key35": "28y7im8cdAwGny4ApTXPyCthktHpAcNhU4c1H64ChxGfjpiTcwP3Ff89B2ahg4oqWwpMDBST81589g3Zft8tzMb8",
  "key36": "5A7RTni6RmDKkazMNMxhTo5pxo77ojP5BYFYZLnMH2JvyDAs6EEgXXUqJkzKX2BX4i5i1qntXxguo8EtuYnC3TcN",
  "key37": "5mbco7gZaAQ25SCSQX8HS9RqHHqXV61Cu8GoEAQTzxEmkbbwTbRmTBMmXAxvvzUHijAMBFD68bLdvaGjHXvwjnVg",
  "key38": "47XL3RZog8z7Dmk4t39KQHXMpdA4R4XBmu8bq6Goy2CNXBnkftTdF1UHitX6RjHHruwXmwtPjLNzTHvZXSkmbnfx",
  "key39": "3L9DCzBkkM2NFkz793zaatrhBTMA8pBUHCQTXs7U7toVs1yqpxqKrWdELgwRxxQu7fm3Es9XaY56DM1GUGghMYQj",
  "key40": "2s6rkFA11hiaTHXXYtYSA4EGhpAj7X8UN36oGS34bgnczKyevuJRF561mveAkdatEqzKyQJY2uMFTRPTREBYJqgg",
  "key41": "4mo59vqe7SpsSFj7r845crij3i5B89CfJF69ahndjt8AzseYY24qct41soMTykNuTN38aevpA5KaPkFqUSsu7jLM"
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
