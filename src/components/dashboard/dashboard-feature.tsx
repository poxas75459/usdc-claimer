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
    "4copRJ3hzUGJGuQ4iwAY87qXQ1DAnc6q1aya8ixoNjuAkNRgEKH9RnKGnMo71M1XpfcMnRNoNaygPT28wKYKTRoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W8hFeRrY1ufxQhNo5sVXv7fe8SkvwbShphhhWXCPo8a9K4rNfffPVFTBvtwC866wyCkL1adcjvccjbzcJRnmKLK",
  "key1": "vX3xpBtRayPW6FJh17sBBQTSPbKDjvAjZ18X86eeykkzRXZvb7L75Uh9Mdhxusz1FwZDvZhWvjYr5teYt31howv",
  "key2": "5DtX59A3TDosFV8NNtn47vRxwqZLJeeVHD6qxWddd7a1oKeWFSHkVLduXzQ2M1xs3DDJVwewQ5T4abPUp76ymUHH",
  "key3": "51y4SvwA4zHnvKJAqmR5uqtfTF1cBMu4MYRWimG7Koa3TDiAWukY8SYsFyN28Gid3FraQNofYyXJGzmKHGDTiZMk",
  "key4": "5WMQQks5Qau3wnVobfaovTHYiqzYADKWT2F2dMrHD71BqgDf5JKFdhE6QcxAHX9KNWCWAsEs9zrUEd1YDaXJm8YZ",
  "key5": "4tgS5v4dRC6QdNAsQU2sWfZif26yJginG9tzRu93au5wEL8p6CbdCq16x5uuqe2RaRRmzuR2ARkA4wnh2bfPT8Mw",
  "key6": "4M36nKmsKjiEEdrsvuCjQzue8aFLJJN4bW5nAauLRSPxEJnArCVzQXLQCYbThL9RNgBroCyKrrhoFPDxMnxYw3Dc",
  "key7": "5tWQt4KzjVhBQXFvecdghokZ1gFsXsAmsDXWPnfGzzcNgJjAUM8MFyvrrSBzbA2bKWU4ZU1MzVstVaCnA1brPSVu",
  "key8": "2erxmKkoGGMHUk2G1aztzL3pSyZ2n4npzCwKdHzXiPFV7JDzXgBs5QE2PnvgubxHdycyy8K8ga5BRT6qaF8wjvtk",
  "key9": "ZrfFfxduGCT6TXG6ychsZEEWnhVRWo5tvgaGxJvXES5PSwVx3XyhXKaWuxhM3GNzHkTP4ULng5bhUu2CN1rJFGa",
  "key10": "64cnPHy2vNk31e2TRvRS1ZhjUxzeaXjnAA8yFgzobznT6nFAFB2f8NXZQLC7DiYaCVx75rZ4YAv9TwWoo6nCemx3",
  "key11": "ak94ixF7EMFCAcshyMo7aBgmXnDdSbmRdSJu759KgWW4PmQX3DknG7xthSxKpS4W2HZQHSzqXT7w5A8pJQRYgW6",
  "key12": "53gwKaenRRbBMJFN47SaBd8kVWfEqnvt9FUaj6Mei8Z5w8ctv7iTGXp7taDnHfCmMHbGzpPTsQW9CMd6YG5U5Vai",
  "key13": "5JEcXNMaTVAhejtiVcxuSer77ktXEyUJ5LpLzRBYRwanKgR6J22Gv9bubQv4tAAsXB8CEtKSHBsK3piwCAjVom1P",
  "key14": "4yyiTcmAfz6MPLgTNgNQxUdA2ptpR74j1DnKWzXdvt77JL9dZZSnv4LVNW7fpeC6YAqrh2GQYtbpNhJ8c3acUVfX",
  "key15": "5zeGGK85pTHsguFBhrPX1Aw7qAe6yed8LvsCDyy1syw7PZGCvCxsw1QLeJH5pvTLbvxYU6KWXgfjy1ppKBEfcQ6v",
  "key16": "ocGVj9oMGrART2ocFsggE88J9pmRW1kZWQZwk5CbqMYVtNyJuPhmU4DagS5AvnFTEc3cQULHJhY8dR98xhEEgDE",
  "key17": "5V3DGCuAF7Li85eXS9pPRN55HX6LTh7RPA8DJ9JQjJa2cAsJQyaDgCwq59R65h9rR5fwPKiGLKcaYVGG4FW8xjfQ",
  "key18": "4bqtkJaCy5AcuPj5siZoXbnqCSVMCjJnbykgAhSSrCAgszEDUWJeLLPP54YaZevH1ATHH6QiXYBkTr6UwupzQAix",
  "key19": "4WxbYgJ7RXhGgDxQsF1RKj8C5HywD3eEDcisicZ7Qb9kXk3gp3akoq69hk4o8hZatqLYdA5DRSn8y4PsmmkDzsrM",
  "key20": "2xdXhnW6zPWTLBBwtSFv8gREPZf8uMcTS3mC43Gkq7W4mJ4nJdNhYiXQFQaRpsuqCvdEKxA8neeYLNmjnicpk2dK",
  "key21": "4PjbNxdMbVRRoviiRY1cuwJjRYxnSy74VFhUhEEo1AVj2xbELzQ9iLAnpE5f2jdB9MsXDX5h4B5wLbguoTFgCFVM",
  "key22": "pRW9o2FVCKhGkMJT8vrQCNgKvKpC4z5vU2nDsuFh6DQKFXzwa7ZiNaYzonQSMSk6gzRisoRDSsV9ubESY71tUAf",
  "key23": "2yp5drbYPBBPzXj3fTFZPvdk5Ve1JyTKYRrgcGs6acTyZDbr4eYfdMqWUwvssDJsqvrwrU2AN78KZeyYXzG9H7gk",
  "key24": "31z6ZEmWJyreGj1U6nKFCCehW5VRgu49kkcNRZhyARnDNJZfutJe3S3MfT5aBgL6RFzAGJqpujx3asuzsuv9vVff",
  "key25": "2GoDNvFHnb1wYAerpP3rBACQzfgjowk1ygTB2cxsPzSaKDstWz9qKGSLuD5qv1F7iyYa9BdQ14jQqobxLt8gxvKY",
  "key26": "2SdVULmNRiHCaqe9r5MVUMrfn1QwUcYvLDyzjGCddfRFRMC9adtV4w4f4P3PJkEkhTnVZkhRtNcR6S2jEn3GVCMY",
  "key27": "4JMBU2LqXw4LC8GP5b7ofqvBqVHYYTCawx3vD3xPuqtoXhNdq3FE4xfPAPQ7h4y6g97eJYJ9djkNWrMVSAg15TD9",
  "key28": "mXG1JvKFR9tFf9zbcGmzRtDB5z5NWYitW7g3qrtTwtX7cCEA9WU86JxD82jrZM2jHXUL8hTMfZt9czoF9PAVoqb",
  "key29": "Vs7kpsWJgGcoeUHcmMnCQEtW88noAdpK5UvRGiwKaJpa9udAsGUb5jU4gd8Zg2K1f4N9rsXPV16r9tS3qLuzT1v"
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
