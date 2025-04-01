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
    "3jT1q6SqKJh2N4mMrYbe8Mq2S48PpQeWt25KLDmRPsN415cZ6nzjDTaqF6bds1kLNuT87mzYw616wychkr559Ygi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MpuPrTCrHyou8Yfb3JBh5g57xjxujBbiUq5BEFqyeou814B3VgQqJ8jHVMX8DqdLwh8uK7NdJuYqcLvNCN15A5y",
  "key1": "3YZ5NkKCDJB6SqZSfXGaGNXtkd6gSQKs2kUvysrkwCJH4bPk8saFf76GzMGjGffoRpaDBRSWTGsQUemiTYKrFeyR",
  "key2": "4oMkEqW1trTeVyrxfvgqqTPYgjuB5Hn8245hCRphmooqSsknMWMNLg5u3NQKSS9WUcFPUevyBNAJ3P2vaJqdV6xF",
  "key3": "41A8BVKTMGi2qKJus3awM9B2DzrLm8TV548WgEjo8xZ7PjKywVCS6udckLWpjPZhKvPKyUEgq5dU16CgsympxjUo",
  "key4": "3xdS77GCY2t2up6CgosUic8U36mjGJFJ5x4e6TJAymjy1F6ggHQhPCj4Mc99MY97wTcL54wUtP7UJJyimZbPxYFy",
  "key5": "22aZKzzFJ6rHjRR1avMHp4ASDn8C1vMc34wwT9XQMvBnJdJM9Gt3KdDDZbtWpKSG7z2mTTzRgCdwwzTMn15E7R8k",
  "key6": "5BWx9hggiW2DVeNHXjC1ZxmeHLmLbrC4ooDGyKK7NtchhG6J4Gcz4SBbuYUMDpGCu7iqx4NWiY79JYErKwEj99NA",
  "key7": "44dVPJ3WxMSNoMvUoqqVdtQTQ2P2K5G9KqsNr5BYRCZqY1oEwLR5MQTtGcLifXGNDo4P4tLd764dFLgzrtXaDihZ",
  "key8": "f5zMP9kwVoSTiXaL7XPjn5kZvQaZtcxJCf9f5ZTMi1aTzuWwcuboXt3w7fAbEuRsmH7m8eMi1AVByukGqEhmnzq",
  "key9": "5dcbakJz17ZC3XpRnf5svsy2FaGs17USL2Bioqcq9JrtTF4yywfqHedvqkptaEx5PEvf74QBfCjLMMekNRP69qLX",
  "key10": "3xRSc6Ymy72sXsfGsm8svzz6SgC2Uob9MBhyVNofJK9QF59TE31V9dkhBzAFkXVxY2m4FsiEHmSnTA4U61WGTsG5",
  "key11": "5JMcTvLuTk3k5zUvqarRLTUrS763twoXdz7n8TiqgyehKGCqULr4oyQBxjs4zvVX9R4hK5wdJnWmzWxy22Tf36JK",
  "key12": "2odhvKX6MkHAUxQMvk9pH1UPv5e78JhqNHmDQxMgEtJca9ahRyXYJGBQfdN8ej35rdjsaXghF69V6MCLXDbKz9cC",
  "key13": "n67qBDALdtWDEkdMEdJ3PxxVvRr9L9RSR6bJ6kPFyxGyjS2U3SAWqaMZLSbLwvHavXfk78AmxsYW3G2zZ8ujFv1",
  "key14": "2EMYWyd4zZfjEbTDtsgioZ9TAdeeMotAv4H4zMaT7HFa56YYqcp8XRk4bXaXKBFyPHHDNLGyZSgaSk2sL5ZizTgP",
  "key15": "341P1Yxy5i5vAhZaN6oGiAX391TsfTKVBzLysv7kuGuK3wELbrsDEv6jz5SiyoS1GhcHQjEtHSmquibFNMYoNRxR",
  "key16": "5hfybFnS6DfpGQC1URTZhyzm1ANCEpkWvuMKgcDU6nmbJqN8p5wcf7JHVK3vba3maLkd136FKNJ8nJwAxZBHedwP",
  "key17": "3x3qgzqYmPrfgACgSV6D2emWbmUNT1mt3rKH6khibZo4FW1LKgvwSpvASH2AiYbNsshv1vWBbxF5A7ht6VkgQQw6",
  "key18": "4bNRv3mGEK6ZYPx6UxgdFMmYYRtbVxELMVRaoXDPoZ8CkizqDiHRjczfATrnJm219yY33rBE1PRLEW521vVjwPGa",
  "key19": "2jE2aYGusZJJWLCRcaFkDtquJi7onvNYQmC2SyTauo3s6BXkPM8Kc945h5FQFyy4hvCf9jTx75iUqVR5YCeNh4WW",
  "key20": "3pAnFCH1mzcox4kPypbEVDsBwxnxJxV9V8vbRREit9Bz8vgFFQTVABjxPVnqrctgbsU2qRNkudcDzB1A317J5maF",
  "key21": "zQASfaR4V7h5oQpVomU6t3px3FKGaYZbQuKq2jcov3FbZAKkBhTintKtzMW7ZSX7mWRg3LUFtbFw7KfHQGKAiSE",
  "key22": "3ixfBxc9dKwwEBNMsoxsH7wJ7Ym1xSvPduPc3UpwQMAYJt1BQw7tPAYDeCVNbqJoomwy2AZMkLvTBWKGfPBwXkRf",
  "key23": "2CDfpB6PBEfjwttB6uT35yJssAFr1qNP5vkkK17T1ZPRsHjNCinvfrFUGm5RiqmbPiFsMYeqmh1urBNCbxHZHyGd",
  "key24": "3EhyBm4WnZFWarwFsjxKqbwbc5kBHA4g4hSor2XRoPseseSrfqkWdsHHtEQZpgdamo51RaD8CCM8UhFJFXAb6uFq",
  "key25": "4Fp3m6Uym2SatzuSJL97qgCtkVdxsxFY1ypWxGxQeJSZrbtY5294pLAC3e1hxHjwiheQCzGMrVu1PCDxTAD7EnEi",
  "key26": "547yUiD2GjDizuiJDUCebwyjEqWpmjihfS6jwxBMbH5Lugw3KLJvNCQqBf7TDUzsYQqrPnEDZjrh3eW3tAG9hbFC",
  "key27": "WxChVFN6mn9rN1xhsqzH3Eok5LU3bjwCCVHxHjpB2ZtiRq2aRRNRnhLVDUXBNLm9DT2HR98crrhu4Uom8K2QA1m",
  "key28": "3zYpvDsRB1pduiLL9CqXxH1RXM3hiPkLgqDAj3GiPSzn5DWSC4usHtayMUaRZEAKSoLNjBS3C2xriJqxLwSZ2nk6",
  "key29": "478PsSzMzE14ngGj5MjFcsTWidcur2qa2yzgbSvLojnti4H49QHfnqx87mwADeyiQ99as3SBViHK3LL7Kgf9jvQy",
  "key30": "38a59ymmDNqHawzTsbAr5BTN1Fc4sJ63tQRpGMxwGB3rXWTCwQB2P3NS3WPJbqDi6ZdK3CobUX6bP6DKj1cmgBUj",
  "key31": "2eLKJdFDpwmn4uwFrWyiW3D6UhrtfDpDBZLtFMStXxSC77dES7uyqY8De3Nwa84yMjiJCg28ERx5zH6u1FwUDF8N",
  "key32": "5NmXn7WZ8yTUMtX8FzhmB2y6hyEn1SA63pHdodp4WEjgQ9RXAjgTsNWhosjHjpYu5mCoGwzuKt97puLg4GK8UD3F",
  "key33": "BMN4v2vR9n8c8JPpb6MPfebkkxZk2v3LShYziRaWjXQxAJ4GCDGeb9o39dmPcFVFvXuCDASTitxJuhNhVDWk49B",
  "key34": "ssfsGxE22g3kf4HCZ1AoA8hmvQRqFNFJHWHwgWuEEX7nH9W2kpPdKPJR7f9KJ6XzzVoqmGE2tFoRA3zXcPDmFzx",
  "key35": "59ggFwBYDAaZLmogNbGPHoW26Thj8svQpRV8AJnJWQHoyqVKttrCNiVMtdgKE46UMCRu9N7zeLA89247VRpyDX1z",
  "key36": "YyU11G3s4uJqXUQreqr6tSnHzLfgW7pCwDHj9qJKMABjTCdMppizjuTZvd25PEmEWpk52xyivW9jp8VphboXLub",
  "key37": "5FZAqrQYHrX7gRN6H7jzxTk6uzEydYZo8DVho3h1Q5uAuWggWZZyCkgdQTTPcvPqiXNVgy4JR5vaF4Ch49wd3ofn",
  "key38": "Nr3TU8JcRg4ivGUiEDQ8T3wWPpNcCoohsN29hu5u67Xf2uakhMqHgJNd1FVEoLqu8X3XA4hPuaYuhgpscauw6cN",
  "key39": "3JcMd8AcBML1urgBerVDjcoiuBvmzu5XpDSCMwMdVP4oDoTynfxqyAnLng9DGuPD5kareMq4RsCsrBMYx9SE5J5k",
  "key40": "3S5Nduq5ekJnDXDmie6YqqVT4SMqiN44rtzMm8eLnJokyyKb6SsxNzpbaWekSJghGziMwDS1Ammp6EAh2K4YoAou",
  "key41": "2ko4esvFBhZSZeppsRdCXKdffdYtxSrdzjjNdLKnGeAzzw8NtNmxAPEqoXP3t3Ki9U8Pa8MxhyAKHKWqK14cftGg"
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
